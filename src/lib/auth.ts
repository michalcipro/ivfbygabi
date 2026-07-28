import { cookies } from 'next/headers'
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto'
import { db, uid, nowIso } from './db'

/**
 * Lehká session autentizace. Cookie s náhodným tokenem, hash hesla scryptem.
 * Žádná externí služba — zdravotní data zůstávají na naší straně.
 */

const COOKIE = 'gabi_session'
const SESSION_DAYS = 60
const TRIAL_DAYS = 7

export interface SessionUser {
  id: string
  email: string
  displayName: string
  role: string
  onboarded: boolean
  theme: string
  trialEndsAt: string | null
  subStatus: string
  subUntil: string | null
  subPlan: string
  linkedToUserId: string | null
  linkRole: string | null
}

export function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = scryptSync(password, salt, 64)
  const expected = Buffer.from(hash, 'hex')
  if (candidate.length !== expected.length) return false
  return timingSafeEqual(candidate, expected)
}

interface UserRow {
  id: string
  email: string
  display_name: string
  role: string
  onboarded: number
  theme: string
  trial_ends_at: string | null
  sub_status: string
  sub_until: string | null
  sub_plan: string
  linked_to_user_id: string | null
  link_role: string | null
}

function toSessionUser(row: UserRow): SessionUser {
  return {
    id: row.id,
    email: row.email,
    displayName: row.display_name,
    role: row.role,
    onboarded: row.onboarded === 1,
    theme: row.theme,
    trialEndsAt: row.trial_ends_at,
    subStatus: row.sub_status,
    subUntil: row.sub_until,
    subPlan: row.sub_plan,
    linkedToUserId: row.linked_to_user_id,
    linkRole: row.link_role,
  }
}

export function createUser(
  email: string,
  password: string,
  displayName: string,
): SessionUser {
  const database = db()
  const normalized = email.trim().toLowerCase()
  const existing = database.prepare('SELECT id FROM users WHERE email = ?').get(normalized)
  if (existing) throw new Error('Účet s tímto e-mailem už existuje.')

  const id = uid('usr')
  const now = nowIso()
  const trialEnds = new Date(Date.now() + TRIAL_DAYS * 86_400_000).toISOString()

  database
    .prepare(
      `INSERT INTO users (id, email, password_hash, display_name, created_at, trial_ends_at, sub_status)
       VALUES (?, ?, ?, ?, ?, ?, 'trialing')`,
    )
    .run(id, normalized, hashPassword(password), displayName.trim(), now, trialEnds)

  const row = database.prepare('SELECT * FROM users WHERE id = ?').get(id) as UserRow
  return toSessionUser(row)
}

export function authenticate(email: string, password: string): SessionUser | null {
  const row = db()
    .prepare('SELECT * FROM users WHERE email = ?')
    .get(email.trim().toLowerCase()) as (UserRow & { password_hash: string }) | undefined
  if (!row) return null
  if (!verifyPassword(password, row.password_hash)) return null
  return toSessionUser(row)
}

export function createSession(userId: string): string {
  const token = randomBytes(32).toString('base64url')
  const now = new Date()
  const expires = new Date(now.getTime() + SESSION_DAYS * 86_400_000)
  db()
    .prepare('INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)')
    .run(token, userId, now.toISOString(), expires.toISOString())
  return token
}

export async function setSessionCookie(token: string) {
  const jar = await cookies()
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: SESSION_DAYS * 86_400,
  })
}

export async function clearSession() {
  const jar = await cookies()
  const token = jar.get(COOKIE)?.value
  if (token) {
    db().prepare('DELETE FROM sessions WHERE token = ?').run(token)
  }
  jar.delete(COOKIE)
}

export async function currentUser(): Promise<SessionUser | null> {
  const jar = await cookies()
  const token = jar.get(COOKIE)?.value
  if (!token) return null

  const row = db()
    .prepare(
      `SELECT u.* FROM sessions s
       JOIN users u ON u.id = s.user_id
       WHERE s.token = ? AND s.expires_at > ?`,
    )
    .get(token, nowIso()) as UserRow | undefined

  if (!row) return null

  db().prepare('UPDATE users SET last_seen_at = ? WHERE id = ?').run(nowIso(), row.id)
  return toSessionUser(row)
}

/** Účet, jehož data se zobrazují — u partnera je to účet hlavní uživatelky. */
export function dataOwnerId(user: SessionUser): string {
  return user.linkedToUserId ?? user.id
}

export interface AccessState {
  hasAccess: boolean
  reason: 'active' | 'trial' | 'expired' | 'none'
  trialDaysLeft: number | null
  until: string | null
}

export function accessFor(user: SessionUser): AccessState {
  const now = Date.now()

  if (user.subStatus === 'active' && user.subUntil && Date.parse(user.subUntil) > now) {
    return { hasAccess: true, reason: 'active', trialDaysLeft: null, until: user.subUntil }
  }

  if (user.trialEndsAt) {
    const left = Date.parse(user.trialEndsAt) - now
    if (left > 0) {
      return {
        hasAccess: true,
        reason: 'trial',
        trialDaysLeft: Math.ceil(left / 86_400_000),
        until: user.trialEndsAt,
      }
    }
    return { hasAccess: false, reason: 'expired', trialDaysLeft: 0, until: user.trialEndsAt }
  }

  return { hasAccess: false, reason: 'none', trialDaysLeft: null, until: null }
}

export function activateSubscription(userId: string, plan: 'monthly' | 'yearly') {
  const months = plan === 'yearly' ? 12 : 1
  const until = new Date()
  until.setMonth(until.getMonth() + months)
  db()
    .prepare(`UPDATE users SET sub_status = 'active', sub_plan = ?, sub_until = ? WHERE id = ?`)
    .run(plan, until.toISOString(), userId)
}

export function cancelSubscription(userId: string) {
  db().prepare(`UPDATE users SET sub_status = 'canceled' WHERE id = ?`).run(userId)
}
