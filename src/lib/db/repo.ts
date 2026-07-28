import { db, uid, nowIso, parseJson } from './index'
import type { IsoDate, ModifierId, Profile, TopicId } from '../domain/profile'
import { emptyProfile } from '../domain/profile'
import type { Affinity } from '../content/recommend'

/** Datová vrstva. Jedno místo, kde se sahá do SQL. */

// ---------------------------------------------------------------- profil ---

interface ProfileRow {
  id: string
  user_id: string
  display_name: string
  anonymous_in_community: number
  declared_phase: string | null
  birth_year: number | null
  modifiers: string
  trying_since: string | null
  diagnostics_started_on: string | null
  iui_on: string | null
  stimulation_start_on: string | null
  retrieval_on: string | null
  transfer_on: string | null
  beta_test_on: string | null
  loss_on: string | null
  last_period_on: string | null
  due_date: string | null
  birth_on: string | null
  nicu_admission_on: string | null
  came_home_on: string | null
  amh: number | null
  ivf_cycles: number
  transfers_done: number
  miscarriages: number
  embryos_created: number
  embryos_frozen: number
  embryo_day_at_transfer: number | null
  gestational_weeks_at_birth: number | null
  clinic_name: string | null
  created_at: string
  updated_at: string
}

function rowToProfile(r: ProfileRow): Profile {
  return {
    id: r.id,
    userId: r.user_id,
    displayName: r.display_name,
    anonymousInCommunity: r.anonymous_in_community === 1,
    declaredPhase: (r.declared_phase as Profile['declaredPhase']) ?? null,
    birthYear: r.birth_year,
    modifiers: parseJson<ModifierId[]>(r.modifiers, []),
    tryingSince: r.trying_since,
    diagnosticsStartedOn: r.diagnostics_started_on,
    iuiOn: r.iui_on,
    stimulationStartOn: r.stimulation_start_on,
    retrievalOn: r.retrieval_on,
    transferOn: r.transfer_on,
    betaTestOn: r.beta_test_on,
    lossOn: r.loss_on,
    lastPeriodOn: r.last_period_on,
    dueDate: r.due_date,
    birthOn: r.birth_on,
    nicuAdmissionOn: r.nicu_admission_on,
    cameHomeOn: r.came_home_on,
    amh: r.amh,
    ivfCycles: r.ivf_cycles,
    transfersDone: r.transfers_done,
    miscarriages: r.miscarriages,
    embryosCreated: r.embryos_created,
    embryosFrozen: r.embryos_frozen,
    embryoDayAtTransfer: r.embryo_day_at_transfer,
    gestationalWeeksAtBirth: r.gestational_weeks_at_birth,
    clinicName: r.clinic_name,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  }
}

export function getProfile(userId: string): Profile {
  const row = db().prepare('SELECT * FROM profiles WHERE user_id = ?').get(userId) as
    | ProfileRow
    | undefined
  if (row) return rowToProfile(row)

  const now = nowIso()
  const profile = emptyProfile(userId, uid('prf'), now)
  db()
    .prepare(
      `INSERT INTO profiles (id, user_id, display_name, created_at, updated_at)
       VALUES (?, ?, '', ?, ?)`,
    )
    .run(profile.id, userId, now, now)
  return profile
}

const PROFILE_COLUMNS: Record<keyof Profile & string, string> = {
  id: 'id',
  userId: 'user_id',
  displayName: 'display_name',
  anonymousInCommunity: 'anonymous_in_community',
  declaredPhase: 'declared_phase',
  birthYear: 'birth_year',
  modifiers: 'modifiers',
  tryingSince: 'trying_since',
  diagnosticsStartedOn: 'diagnostics_started_on',
  iuiOn: 'iui_on',
  stimulationStartOn: 'stimulation_start_on',
  retrievalOn: 'retrieval_on',
  transferOn: 'transfer_on',
  betaTestOn: 'beta_test_on',
  lossOn: 'loss_on',
  lastPeriodOn: 'last_period_on',
  dueDate: 'due_date',
  birthOn: 'birth_on',
  nicuAdmissionOn: 'nicu_admission_on',
  cameHomeOn: 'came_home_on',
  amh: 'amh',
  ivfCycles: 'ivf_cycles',
  transfersDone: 'transfers_done',
  miscarriages: 'miscarriages',
  embryosCreated: 'embryos_created',
  embryosFrozen: 'embryos_frozen',
  embryoDayAtTransfer: 'embryo_day_at_transfer',
  gestationalWeeksAtBirth: 'gestational_weeks_at_birth',
  clinicName: 'clinic_name',
  createdAt: 'created_at',
  updatedAt: 'updated_at',
}

const IMMUTABLE = new Set(['id', 'userId', 'createdAt', 'updatedAt'])

export function updateProfile(userId: string, patch: Partial<Profile>): Profile {
  getProfile(userId) // zajistí existenci

  const sets: string[] = []
  const values: unknown[] = []

  for (const [key, value] of Object.entries(patch)) {
    if (IMMUTABLE.has(key)) continue
    const column = PROFILE_COLUMNS[key as keyof Profile]
    if (!column) continue
    sets.push(`${column} = ?`)
    if (key === 'modifiers') values.push(JSON.stringify(value ?? []))
    else if (typeof value === 'boolean') values.push(value ? 1 : 0)
    else values.push(value ?? null)
  }

  if (sets.length > 0) {
    sets.push('updated_at = ?')
    values.push(nowIso(), userId)
    db()
      .prepare(`UPDATE profiles SET ${sets.join(', ')} WHERE user_id = ?`)
      .run(...values)
  }

  return getProfile(userId)
}

// ------------------------------------------------------------ personalizace ---

/**
 * Postaví afinitní model z chování uživatelky.
 * Čím častěji si otevírá obsah o daném tématu, tím víc ho uvidí.
 */
export function getAffinity(userId: string): Affinity {
  const database = db()

  const events = database
    .prepare(
      `SELECT content_id, action, seconds FROM content_events
       WHERE user_id = ? ORDER BY created_at DESC LIMIT 400`,
    )
    .all(userId) as { content_id: string; action: string; seconds: number | null }[]

  const saved = database
    .prepare('SELECT content_id FROM saved_items WHERE user_id = ?')
    .all(userId) as { content_id: string }[]

  const seen = new Set<string>()
  const weights = new Map<string, number>()

  for (const e of events) {
    if (e.action === 'dismiss') continue
    seen.add(e.content_id)
    const w =
      e.action === 'complete' ? 1 : e.action === 'save' ? 1.2 : Math.min(1, (e.seconds ?? 20) / 90)
    weights.set(e.content_id, (weights.get(e.content_id) ?? 0) + w)
  }

  return {
    topics: {}, // doplní se v katalogu, kde známe témata položek
    seen,
    saved: new Set(saved.map((s) => s.content_id)),
    _weights: weights,
  } as Affinity & { _weights: Map<string, number> }
}

/** Dopočítá témata z vah, jakmile známe katalog. */
export function applyTopicAffinity(
  affinity: Affinity,
  catalog: readonly { id: string; topics: TopicId[] }[],
): Affinity {
  const weights = (affinity as Affinity & { _weights?: Map<string, number> })._weights
  if (!weights || weights.size === 0) return affinity

  const byId = new Map(catalog.map((c) => [c.id, c.topics]))
  const raw: Partial<Record<TopicId, number>> = {}
  let max = 0

  for (const [contentId, weight] of weights) {
    const topics = byId.get(contentId)
    if (!topics) continue
    for (const t of topics) {
      raw[t] = (raw[t] ?? 0) + weight
      if (raw[t]! > max) max = raw[t]!
    }
  }

  if (max > 0) {
    for (const key of Object.keys(raw) as TopicId[]) {
      raw[key] = (raw[key] ?? 0) / max
    }
  }

  affinity.topics = raw
  return affinity
}

export function recordContentEvent(
  userId: string,
  contentId: string,
  action: 'view' | 'complete' | 'save' | 'unsave' | 'dismiss',
  seconds?: number,
) {
  db()
    .prepare(
      `INSERT INTO content_events (id, user_id, content_id, action, seconds, created_at)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .run(uid('cev'), userId, contentId, action, seconds ?? null, nowIso())
}

export function toggleSaved(userId: string, contentId: string): boolean {
  const database = db()
  const existing = database
    .prepare('SELECT 1 FROM saved_items WHERE user_id = ? AND content_id = ?')
    .get(userId, contentId)

  if (existing) {
    database
      .prepare('DELETE FROM saved_items WHERE user_id = ? AND content_id = ?')
      .run(userId, contentId)
    recordContentEvent(userId, contentId, 'unsave')
    return false
  }

  database
    .prepare('INSERT INTO saved_items (user_id, content_id, created_at) VALUES (?, ?, ?)')
    .run(userId, contentId, nowIso())
  recordContentEvent(userId, contentId, 'save')
  return true
}

export function savedIds(userId: string): string[] {
  return (
    db()
      .prepare('SELECT content_id FROM saved_items WHERE user_id = ? ORDER BY created_at DESC')
      .all(userId) as { content_id: string }[]
  ).map((r) => r.content_id)
}

// ----------------------------------------------------------------- deník ---

export interface JournalEntry {
  id: string
  onDate: IsoDate
  mood: number | null
  anxiety: number | null
  hope: number | null
  energy: number | null
  pain: number | null
  sleepHours: number | null
  waterMl: number | null
  weightKg: number | null
  symptoms: string[]
  note: string | null
  gratitude: string | null
  phaseId: string | null
  dayInPhase: number | null
}

interface JournalRow {
  id: string
  on_date: string
  mood: number | null
  anxiety: number | null
  hope: number | null
  energy: number | null
  pain: number | null
  sleep_hours: number | null
  water_ml: number | null
  weight_kg: number | null
  symptoms: string
  note: string | null
  gratitude: string | null
  phase_id: string | null
  day_in_phase: number | null
}

const toJournal = (r: JournalRow): JournalEntry => ({
  id: r.id,
  onDate: r.on_date,
  mood: r.mood,
  anxiety: r.anxiety,
  hope: r.hope,
  energy: r.energy,
  pain: r.pain,
  sleepHours: r.sleep_hours,
  waterMl: r.water_ml,
  weightKg: r.weight_kg,
  symptoms: parseJson<string[]>(r.symptoms, []),
  note: r.note,
  gratitude: r.gratitude,
  phaseId: r.phase_id,
  dayInPhase: r.day_in_phase,
})

export function getJournalEntry(userId: string, date: IsoDate): JournalEntry | null {
  const row = db()
    .prepare('SELECT * FROM journal_entries WHERE user_id = ? AND on_date = ?')
    .get(userId, date) as JournalRow | undefined
  return row ? toJournal(row) : null
}

export function listJournal(userId: string, limit = 120): JournalEntry[] {
  const rows = db()
    .prepare('SELECT * FROM journal_entries WHERE user_id = ? ORDER BY on_date DESC LIMIT ?')
    .all(userId, limit) as JournalRow[]
  return rows.map(toJournal)
}

export function upsertJournal(
  userId: string,
  date: IsoDate,
  patch: Partial<Omit<JournalEntry, 'id' | 'onDate'>>,
): JournalEntry {
  const database = db()
  const now = nowIso()
  const existing = getJournalEntry(userId, date)

  const merged = {
    mood: patch.mood ?? existing?.mood ?? null,
    anxiety: patch.anxiety ?? existing?.anxiety ?? null,
    hope: patch.hope ?? existing?.hope ?? null,
    energy: patch.energy ?? existing?.energy ?? null,
    pain: patch.pain ?? existing?.pain ?? null,
    sleepHours: patch.sleepHours ?? existing?.sleepHours ?? null,
    waterMl: patch.waterMl ?? existing?.waterMl ?? null,
    weightKg: patch.weightKg ?? existing?.weightKg ?? null,
    symptoms: patch.symptoms ?? existing?.symptoms ?? [],
    note: patch.note ?? existing?.note ?? null,
    gratitude: patch.gratitude ?? existing?.gratitude ?? null,
    phaseId: patch.phaseId ?? existing?.phaseId ?? null,
    dayInPhase: patch.dayInPhase ?? existing?.dayInPhase ?? null,
  }

  if (existing) {
    database
      .prepare(
        `UPDATE journal_entries SET mood=?, anxiety=?, hope=?, energy=?, pain=?,
         sleep_hours=?, water_ml=?, weight_kg=?, symptoms=?, note=?, gratitude=?,
         phase_id=?, day_in_phase=?, updated_at=?
         WHERE user_id=? AND on_date=?`,
      )
      .run(
        merged.mood,
        merged.anxiety,
        merged.hope,
        merged.energy,
        merged.pain,
        merged.sleepHours,
        merged.waterMl,
        merged.weightKg,
        JSON.stringify(merged.symptoms),
        merged.note,
        merged.gratitude,
        merged.phaseId,
        merged.dayInPhase,
        now,
        userId,
        date,
      )
  } else {
    database
      .prepare(
        `INSERT INTO journal_entries
         (id, user_id, on_date, mood, anxiety, hope, energy, pain, sleep_hours,
          water_ml, weight_kg, symptoms, note, gratitude, phase_id, day_in_phase,
          created_at, updated_at)
         VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      )
      .run(
        uid('jrn'),
        userId,
        date,
        merged.mood,
        merged.anxiety,
        merged.hope,
        merged.energy,
        merged.pain,
        merged.sleepHours,
        merged.waterMl,
        merged.weightKg,
        JSON.stringify(merged.symptoms),
        merged.note,
        merged.gratitude,
        merged.phaseId,
        merged.dayInPhase,
        now,
        now,
      )
  }

  return getJournalEntry(userId, date)!
}

// ------------------------------------------------------------- checklisty ---

export function getChecklistState(userId: string, contentId: string): Record<string, boolean> {
  const rows = db()
    .prepare('SELECT entry_id, done FROM checklist_state WHERE user_id = ? AND content_id = ?')
    .all(userId, contentId) as { entry_id: string; done: number }[]
  return Object.fromEntries(rows.map((r) => [r.entry_id, r.done === 1]))
}

export function setChecklistEntry(
  userId: string,
  contentId: string,
  entryId: string,
  done: boolean,
) {
  db()
    .prepare(
      `INSERT INTO checklist_state (user_id, content_id, entry_id, done, updated_at)
       VALUES (?,?,?,?,?)
       ON CONFLICT(user_id, content_id, entry_id)
       DO UPDATE SET done = excluded.done, updated_at = excluded.updated_at`,
    )
    .run(userId, contentId, entryId, done ? 1 : 0, nowIso())
}

/** Kolik procent checklistů má uživatelka hotovo — pro přehled. */
export function checklistProgress(userId: string): Record<string, number> {
  const rows = db()
    .prepare(
      `SELECT content_id, SUM(done) AS done, COUNT(*) AS total
       FROM checklist_state WHERE user_id = ? GROUP BY content_id`,
    )
    .all(userId) as { content_id: string; done: number; total: number }[]
  return Object.fromEntries(rows.map((r) => [r.content_id, r.total ? r.done / r.total : 0]))
}

// --------------------------------------------------------------- denní stav ---

export interface DailyState {
  onDate: IsoDate
  cardId: string | null
  taskDone: boolean
  reflection: string | null
  streak: number
}

export function getDailyState(userId: string, date: IsoDate): DailyState | null {
  const row = db()
    .prepare('SELECT * FROM daily_state WHERE user_id = ? AND on_date = ?')
    .get(userId, date) as
    | { on_date: string; card_id: string | null; task_done: number; reflection: string | null; streak: number }
    | undefined
  if (!row) return null
  return {
    onDate: row.on_date,
    cardId: row.card_id,
    taskDone: row.task_done === 1,
    reflection: row.reflection,
    streak: row.streak,
  }
}

/** Zaznamená otevření aplikace a spočítá sérii dní po sobě. */
export function touchDaily(userId: string, date: IsoDate, cardId: string | null): DailyState {
  const database = db()
  const existing = getDailyState(userId, date)
  if (existing) return existing

  const yesterday = new Date(Date.parse(date + 'T00:00:00Z') - 86_400_000)
    .toISOString()
    .slice(0, 10)
  const prev = getDailyState(userId, yesterday)
  const streak = (prev?.streak ?? 0) + 1

  database
    .prepare(
      `INSERT INTO daily_state (user_id, on_date, card_id, opened_at, streak)
       VALUES (?,?,?,?,?)`,
    )
    .run(userId, date, cardId, nowIso(), streak)

  return { onDate: date, cardId, taskDone: false, reflection: null, streak }
}

export function setDailyTaskDone(userId: string, date: IsoDate, done: boolean) {
  db()
    .prepare(
      `INSERT INTO daily_state (user_id, on_date, task_done, streak) VALUES (?,?,?,1)
       ON CONFLICT(user_id, on_date) DO UPDATE SET task_done = excluded.task_done`,
    )
    .run(userId, date, done ? 1 : 0)
}

export function setDailyReflection(userId: string, date: IsoDate, text: string) {
  db()
    .prepare(
      `INSERT INTO daily_state (user_id, on_date, reflection, streak) VALUES (?,?,?,1)
       ON CONFLICT(user_id, on_date) DO UPDATE SET reflection = excluded.reflection`,
    )
    .run(userId, date, text)
}

export function currentStreak(userId: string): number {
  const row = db()
    .prepare('SELECT streak FROM daily_state WHERE user_id = ? ORDER BY on_date DESC LIMIT 1')
    .get(userId) as { streak: number } | undefined
  return row?.streak ?? 0
}
