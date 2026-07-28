import { db, uid, nowIso } from './index'
import type { IsoDate } from '../domain/profile'
import type { Letter, TimelineEvent } from '../shared/records'
import { LETTER_TARGETS } from '../shared/records'

// Tvary a popisky žijí v ../shared/records, aby je mohl importovat i prohlížeč.
export type { Letter, TimelineEvent }
export { LETTER_TARGETS }

/** Rodinná kronika: časová osa, dopisy miminku, milníky. */

interface TimelineRow {
  id: string
  on_date: string
  title: string
  body: string | null
  kind: string
  icon: string | null
  media_id: string | null
  auto: number
  pinned: number
}

const toEvent = (r: TimelineRow): TimelineEvent => ({
  id: r.id,
  onDate: r.on_date,
  title: r.title,
  body: r.body,
  kind: r.kind as TimelineEvent['kind'],
  icon: r.icon,
  mediaId: r.media_id,
  auto: r.auto === 1,
  pinned: r.pinned === 1,
})

export function listTimeline(userId: string): TimelineEvent[] {
  const rows = db()
    .prepare('SELECT * FROM timeline_events WHERE user_id = ? ORDER BY on_date ASC, created_at ASC')
    .all(userId) as TimelineRow[]
  return rows.map(toEvent)
}

export function addTimelineEvent(
  userId: string,
  input: Omit<TimelineEvent, 'id' | 'auto' | 'pinned'> & { auto?: boolean; pinned?: boolean },
): TimelineEvent {
  const id = uid('tml')
  db()
    .prepare(
      `INSERT INTO timeline_events (id, user_id, on_date, title, body, kind, icon, media_id, auto, pinned, created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
    )
    .run(
      id,
      userId,
      input.onDate,
      input.title,
      input.body ?? null,
      input.kind,
      input.icon ?? null,
      input.mediaId ?? null,
      input.auto ? 1 : 0,
      input.pinned ? 1 : 0,
      nowIso(),
    )
  return { ...input, id, auto: Boolean(input.auto), pinned: Boolean(input.pinned) }
}

export function deleteTimelineEvent(userId: string, id: string) {
  db().prepare('DELETE FROM timeline_events WHERE user_id = ? AND id = ?').run(userId, id)
}

/** Automatický milník — nevytvoří duplicitu. */
export function ensureMilestone(
  userId: string,
  key: string,
  input: Omit<TimelineEvent, 'id' | 'auto' | 'pinned'>,
) {
  const existing = db()
    .prepare(
      'SELECT 1 FROM timeline_events WHERE user_id = ? AND title = ? AND on_date = ? AND auto = 1',
    )
    .get(userId, input.title, input.onDate)
  if (existing) return
  addTimelineEvent(userId, { ...input, auto: true })
}

// ---------------------------------------------------------------- dopisy ---

export function listLetters(userId: string): Letter[] {
  const rows = db()
    .prepare('SELECT * FROM letters WHERE user_id = ? ORDER BY on_date DESC')
    .all(userId) as Array<{
    id: string
    to_whom: string
    title: string | null
    body: string
    on_date: string
    sealed_until: string | null
    created_at: string
  }>
  return rows.map((r) => ({
    id: r.id,
    toWhom: r.to_whom as Letter['toWhom'],
    title: r.title,
    body: r.body,
    onDate: r.on_date,
    sealedUntil: r.sealed_until,
    createdAt: r.created_at,
  }))
}

export function addLetter(
  userId: string,
  input: Omit<Letter, 'id' | 'createdAt'>,
): Letter {
  const id = uid('let')
  const createdAt = nowIso()
  db()
    .prepare(
      'INSERT INTO letters (id, user_id, to_whom, title, body, on_date, sealed_until, created_at) VALUES (?,?,?,?,?,?,?,?)',
    )
    .run(
      id,
      userId,
      input.toWhom,
      input.title ?? null,
      input.body,
      input.onDate,
      input.sealedUntil ?? null,
      createdAt,
    )
  addTimelineEvent(userId, {
    onDate: input.onDate,
    title: input.title || `Dopis: ${LETTER_TARGETS[input.toWhom]}`,
    body: input.body.slice(0, 180),
    kind: 'dopis',
    icon: '✉',
    mediaId: null,
    auto: true,
  })
  return { ...input, id, createdAt }
}

export function deleteLetter(userId: string, id: string) {
  db().prepare('DELETE FROM letters WHERE user_id = ? AND id = ?').run(userId, id)
}

// ------------------------------------------------------------ vzpomínky ---

export interface Memory {
  event: TimelineEvent
  yearsAgo: number
  label: string
}

/**
 * „Dnes je to přesně rok od vašeho transferu.“
 * Prochází časovou osu a hledá výročí, která padnou na dnešek.
 */
export function memoriesFor(userId: string, today: IsoDate): Memory[] {
  const events = listTimeline(userId)
  const [, todayMonth, todayDay] = today.split('-')
  const todayYear = Number(today.slice(0, 4))
  const out: Memory[] = []

  for (const e of events) {
    const [y, m, d] = e.onDate.split('-')
    if (m !== todayMonth || d !== todayDay) continue
    const years = todayYear - Number(y)
    if (years < 1) continue
    out.push({
      event: e,
      yearsAgo: years,
      label:
        years === 1
          ? `Přesně před rokem: ${e.title.toLowerCase()}`
          : `Před ${years} lety: ${e.title.toLowerCase()}`,
    })
  }

  return out.sort((a, b) => a.yearsAgo - b.yearsAgo)
}
