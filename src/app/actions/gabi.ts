'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { db, uid, nowIso } from '@/lib/db'
import { getProfile, listJournal } from '@/lib/db/repo'
import { listLabValues } from '@/lib/db/repo-health'
import { resolveJourney } from '@/lib/domain/journey'
import { CATALOG } from '@/lib/content'
import { askGabi } from '@/lib/ai/gabi'

export interface GabiMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  refs: string[]
  createdAt: string
}

function ensureThread(userId: string): string {
  const database = db()
  const row = database
    .prepare('SELECT id FROM gabi_threads WHERE user_id = ? ORDER BY updated_at DESC LIMIT 1')
    .get(userId) as { id: string } | undefined
  if (row) return row.id

  const id = uid('thr')
  const now = nowIso()
  database
    .prepare('INSERT INTO gabi_threads (id, user_id, title, created_at, updated_at) VALUES (?,?,?,?,?)')
    .run(id, userId, 'Rozhovor s Gabi', now, now)
  return id
}

export async function listMessages(userId: string): Promise<GabiMessage[]> {
  const threadId = ensureThread(userId)
  const rows = db()
    .prepare('SELECT * FROM gabi_messages WHERE thread_id = ? ORDER BY created_at ASC LIMIT 200')
    .all(threadId) as Array<{
    id: string
    role: string
    content: string
    refs: string
    created_at: string
  }>
  return rows.map((r) => ({
    id: r.id,
    role: r.role === 'user' ? 'user' : 'assistant',
    content: r.content,
    refs: safeParse(r.refs),
    createdAt: r.created_at,
  }))
}

function safeParse(s: string): string[] {
  try {
    const v = JSON.parse(s)
    return Array.isArray(v) ? v : []
  } catch {
    return []
  }
}

function insertMessage(
  threadId: string,
  userId: string,
  role: 'user' | 'assistant',
  content: string,
  refs: string[] = [],
) {
  const now = nowIso()
  db()
    .prepare(
      'INSERT INTO gabi_messages (id, thread_id, user_id, role, content, refs, created_at) VALUES (?,?,?,?,?,?,?)',
    )
    .run(uid('msg'), threadId, userId, role, content, JSON.stringify(refs), now)
  db().prepare('UPDATE gabi_threads SET updated_at = ? WHERE id = ?').run(now, threadId)
}

const questionSchema = z.string().trim().min(2, 'Napište prosím otázku.').max(4000)

export async function askGabiAction(formData: FormData) {
  const user = await currentUser()
  if (!user) throw new Error('Nejste přihlášena.')
  const ownerId = dataOwnerId(user)

  const parsed = questionSchema.safeParse(formData.get('question'))
  if (!parsed.success) return

  const question = parsed.data
  const threadId = ensureThread(ownerId)

  insertMessage(threadId, ownerId, 'user', question)

  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)
  const history = (await listMessages(ownerId))
    .slice(-11, -1)
    .map((m) => ({ role: m.role, content: m.content }))

  const recentMood = listJournal(ownerId, 7).map((e) => ({
    date: e.onDate,
    mood: e.mood,
    note: e.note,
  }))

  const answer = await askGabi(question, {
    state,
    profile,
    catalog: CATALOG,
    recentMood,
    labs: listLabValues(ownerId),
    history,
  })

  insertMessage(threadId, ownerId, 'assistant', answer.text, answer.refs)
  revalidatePath('/gabi')
}

export async function clearThreadAction() {
  const user = await currentUser()
  if (!user) throw new Error('Nejste přihlášena.')
  const ownerId = dataOwnerId(user)
  const threadId = ensureThread(ownerId)
  db().prepare('DELETE FROM gabi_messages WHERE thread_id = ?').run(threadId)
  revalidatePath('/gabi')
}
