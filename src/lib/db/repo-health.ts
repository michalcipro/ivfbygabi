import { db, uid, nowIso } from './index'
import type { IsoDate } from '../domain/profile'

/** Zdravotní data: laboratorní hodnoty, měření, léky, kalendář, dokumenty. */

// -------------------------------------------------------------- laboratoř ---

export interface LabValue {
  id: string
  paramKey: string
  value: number
  unit: string | null
  onDate: IsoDate
  note: string | null
  source: 'manual' | 'ocr'
  documentId: string | null
}

interface LabRow {
  id: string
  param_key: string
  value: number
  unit: string | null
  on_date: string
  note: string | null
  source: string
  document_id: string | null
}

const toLab = (r: LabRow): LabValue => ({
  id: r.id,
  paramKey: r.param_key,
  value: r.value,
  unit: r.unit,
  onDate: r.on_date,
  note: r.note,
  source: r.source === 'ocr' ? 'ocr' : 'manual',
  documentId: r.document_id,
})

export function addLabValue(
  userId: string,
  input: {
    paramKey: string
    value: number
    unit?: string | null
    onDate: IsoDate
    note?: string | null
    source?: 'manual' | 'ocr'
    documentId?: string | null
  },
): LabValue {
  const id = uid('lab')
  db()
    .prepare(
      `INSERT INTO lab_values (id, user_id, document_id, param_key, value, unit, on_date, note, source, created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?)`,
    )
    .run(
      id,
      userId,
      input.documentId ?? null,
      input.paramKey,
      input.value,
      input.unit ?? null,
      input.onDate,
      input.note ?? null,
      input.source ?? 'manual',
      nowIso(),
    )
  return { ...input, id, unit: input.unit ?? null, note: input.note ?? null, source: input.source ?? 'manual', documentId: input.documentId ?? null }
}

export function listLabValues(userId: string, paramKey?: string): LabValue[] {
  const rows = paramKey
    ? (db()
        .prepare(
          'SELECT * FROM lab_values WHERE user_id = ? AND param_key = ? ORDER BY on_date ASC',
        )
        .all(userId, paramKey) as LabRow[])
    : (db()
        .prepare('SELECT * FROM lab_values WHERE user_id = ? ORDER BY on_date ASC')
        .all(userId) as LabRow[])
  return rows.map(toLab)
}

export function deleteLabValue(userId: string, id: string) {
  db().prepare('DELETE FROM lab_values WHERE user_id = ? AND id = ?').run(userId, id)
}

/** Seskupí hodnoty podle parametru — pro grafy na health dashboardu. */
export function labSeries(userId: string): Record<string, LabValue[]> {
  const out: Record<string, LabValue[]> = {}
  for (const v of listLabValues(userId)) {
    ;(out[v.paramKey] ??= []).push(v)
  }
  return out
}

// ---------------------------------------------------------------- měření ---

export const METRICS = {
  weight: { label: 'Váha', unit: 'kg' },
  bp_sys: { label: 'Tlak — systolický', unit: 'mmHg' },
  bp_dia: { label: 'Tlak — diastolický', unit: 'mmHg' },
  glucose: { label: 'Glykémie', unit: 'mmol/l' },
  baby_weight: { label: 'Váha miminka', unit: 'g' },
  baby_length: { label: 'Délka miminka', unit: 'cm' },
  baby_head: { label: 'Obvod hlavy', unit: 'cm' },
  milk_ml: { label: 'Odstříkané mléko', unit: 'ml' },
  water_ml: { label: 'Pitný režim', unit: 'ml' },
} as const

export type MetricKey = keyof typeof METRICS

export interface Measurement {
  id: string
  metric: string
  value: number
  unit: string | null
  onDate: IsoDate
}

export function addMeasurement(
  userId: string,
  metric: MetricKey | string,
  value: number,
  onDate: IsoDate,
  unit?: string,
): Measurement {
  const id = uid('mes')
  const resolvedUnit = unit ?? (METRICS as Record<string, { unit: string }>)[metric]?.unit ?? null
  db()
    .prepare(
      'INSERT INTO measurements (id, user_id, metric, value, unit, on_date, created_at) VALUES (?,?,?,?,?,?,?)',
    )
    .run(id, userId, metric, value, resolvedUnit, onDate, nowIso())
  return { id, metric, value, unit: resolvedUnit, onDate }
}

export function listMeasurements(userId: string, metric?: string): Measurement[] {
  const rows = metric
    ? (db()
        .prepare(
          'SELECT id, metric, value, unit, on_date FROM measurements WHERE user_id = ? AND metric = ? ORDER BY on_date ASC',
        )
        .all(userId, metric) as { id: string; metric: string; value: number; unit: string | null; on_date: string }[])
    : (db()
        .prepare(
          'SELECT id, metric, value, unit, on_date FROM measurements WHERE user_id = ? ORDER BY on_date ASC',
        )
        .all(userId) as { id: string; metric: string; value: number; unit: string | null; on_date: string }[])
  return rows.map((r) => ({ id: r.id, metric: r.metric, value: r.value, unit: r.unit, onDate: r.on_date }))
}

export function deleteMeasurement(userId: string, id: string) {
  db().prepare('DELETE FROM measurements WHERE user_id = ? AND id = ?').run(userId, id)
}

// ------------------------------------------------------------------ léky ---

export interface Medication {
  id: string
  name: string
  dose: string | null
  route: string | null
  timeOfDay: string | null
  startOn: IsoDate | null
  endOn: IsoDate | null
  active: boolean
  note: string | null
}

export function listMedications(userId: string, onlyActive = false): Medication[] {
  const sql = onlyActive
    ? 'SELECT * FROM medications WHERE user_id = ? AND active = 1 ORDER BY time_of_day'
    : 'SELECT * FROM medications WHERE user_id = ? ORDER BY active DESC, time_of_day'
  const rows = db().prepare(sql).all(userId) as Array<{
    id: string
    name: string
    dose: string | null
    route: string | null
    time_of_day: string | null
    start_on: string | null
    end_on: string | null
    active: number
    note: string | null
  }>
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    dose: r.dose,
    route: r.route,
    timeOfDay: r.time_of_day,
    startOn: r.start_on,
    endOn: r.end_on,
    active: r.active === 1,
    note: r.note,
  }))
}

export function addMedication(
  userId: string,
  input: Omit<Medication, 'id' | 'active'> & { active?: boolean },
): Medication {
  const id = uid('med')
  db()
    .prepare(
      `INSERT INTO medications (id, user_id, name, dose, route, time_of_day, start_on, end_on, active, note, created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
    )
    .run(
      id,
      userId,
      input.name,
      input.dose ?? null,
      input.route ?? null,
      input.timeOfDay ?? null,
      input.startOn ?? null,
      input.endOn ?? null,
      input.active === false ? 0 : 1,
      input.note ?? null,
      nowIso(),
    )
  return { ...input, id, active: input.active !== false }
}

export function setMedicationActive(userId: string, id: string, active: boolean) {
  db()
    .prepare('UPDATE medications SET active = ? WHERE user_id = ? AND id = ?')
    .run(active ? 1 : 0, userId, id)
}

export function deleteMedication(userId: string, id: string) {
  db().prepare('DELETE FROM medications WHERE user_id = ? AND id = ?').run(userId, id)
}

export function logMedication(
  userId: string,
  medicationId: string | null,
  onDate: IsoDate,
  site?: string,
  note?: string,
) {
  db()
    .prepare(
      'INSERT INTO medication_logs (id, user_id, medication_id, taken_at, on_date, site, note) VALUES (?,?,?,?,?,?,?)',
    )
    .run(uid('mlg'), userId, medicationId, nowIso(), onDate, site ?? null, note ?? null)
}

export function medicationLogsFor(userId: string, onDate: IsoDate): string[] {
  const rows = db()
    .prepare(
      'SELECT medication_id FROM medication_logs WHERE user_id = ? AND on_date = ? AND medication_id IS NOT NULL',
    )
    .all(userId, onDate) as { medication_id: string }[]
  return rows.map((r) => r.medication_id)
}

export function countInjections(userId: string): number {
  const row = db()
    .prepare(
      `SELECT COUNT(*) AS n FROM medication_logs ml
       LEFT JOIN medications m ON m.id = ml.medication_id
       WHERE ml.user_id = ? AND (m.route = 'injekce' OR ml.site IS NOT NULL)`,
    )
    .get(userId) as { n: number }
  return row.n
}

// -------------------------------------------------------------- kalendář ---

export interface CalendarEvent {
  id: string
  title: string
  kind: string
  onDate: IsoDate
  atTime: string | null
  location: string | null
  note: string | null
  done: boolean
  auto: boolean
}

export const EVENT_KINDS: Record<string, { label: string; icon: string }> = {
  kontrola: { label: 'Kontrola', icon: '◈' },
  odber: { label: 'Odběr', icon: '◍' },
  transfer: { label: 'Transfer', icon: '❋' },
  uz: { label: 'Ultrazvuk', icon: '◉' },
  hcg: { label: 'Beta HCG', icon: '✶' },
  ockovani: { label: 'Očkování', icon: '✚' },
  lek: { label: 'Lék', icon: '◐' },
  porod: { label: 'Porod', icon: '✿' },
  vlastni: { label: 'Vlastní', icon: '•' },
}

export function listEvents(userId: string, from?: IsoDate, to?: IsoDate): CalendarEvent[] {
  let sql = 'SELECT * FROM calendar_events WHERE user_id = ?'
  const params: unknown[] = [userId]
  if (from) {
    sql += ' AND on_date >= ?'
    params.push(from)
  }
  if (to) {
    sql += ' AND on_date <= ?'
    params.push(to)
  }
  sql += ' ORDER BY on_date, at_time'
  const rows = db().prepare(sql).all(...params) as Array<{
    id: string
    title: string
    kind: string
    on_date: string
    at_time: string | null
    location: string | null
    note: string | null
    done: number
    auto: number
  }>
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    kind: r.kind,
    onDate: r.on_date,
    atTime: r.at_time,
    location: r.location,
    note: r.note,
    done: r.done === 1,
    auto: r.auto === 1,
  }))
}

export function addEvent(
  userId: string,
  input: Omit<CalendarEvent, 'id' | 'done' | 'auto'> & { auto?: boolean },
): CalendarEvent {
  const id = uid('cal')
  db()
    .prepare(
      `INSERT INTO calendar_events (id, user_id, title, kind, on_date, at_time, location, note, done, auto, created_at)
       VALUES (?,?,?,?,?,?,?,?,0,?,?)`,
    )
    .run(
      id,
      userId,
      input.title,
      input.kind,
      input.onDate,
      input.atTime ?? null,
      input.location ?? null,
      input.note ?? null,
      input.auto ? 1 : 0,
      nowIso(),
    )
  return { ...input, id, done: false, auto: Boolean(input.auto) }
}

export function toggleEventDone(userId: string, id: string) {
  db()
    .prepare('UPDATE calendar_events SET done = 1 - done WHERE user_id = ? AND id = ?')
    .run(userId, id)
}

export function deleteEvent(userId: string, id: string) {
  db().prepare('DELETE FROM calendar_events WHERE user_id = ? AND id = ?').run(userId, id)
}

/** Nepřidá duplicitní automatickou událost. */
export function ensureAutoEvent(
  userId: string,
  input: Omit<CalendarEvent, 'id' | 'done' | 'auto'>,
) {
  const existing = db()
    .prepare(
      'SELECT 1 FROM calendar_events WHERE user_id = ? AND on_date = ? AND title = ? AND auto = 1',
    )
    .get(userId, input.onDate, input.title)
  if (existing) return
  addEvent(userId, { ...input, auto: true })
}

// ------------------------------------------------------------- dokumenty ---

export interface DocumentRecord {
  id: string
  title: string
  category: string
  onDate: IsoDate
  mime: string | null
  sizeBytes: number | null
  storageKey: string | null
  rawText: string | null
  parsedSummary: string | null
  createdAt: string
}

export const DOC_CATEGORIES: Record<string, string> = {
  hormony: 'Hormonální profil',
  spermiogram: 'Spermiogram',
  embryologie: 'Embryologická zpráva',
  genetika: 'Genetika',
  uz: 'Ultrazvuk',
  imunologie: 'Imunologie',
  tehotenska: 'Těhotenská průkazka',
  propousteci: 'Propouštěcí zpráva',
  nicu: 'NICU dokumentace',
  pediatr: 'Pediatrická zpráva',
  jine: 'Jiné',
}

export function listDocuments(userId: string): DocumentRecord[] {
  const rows = db()
    .prepare('SELECT * FROM documents WHERE user_id = ? ORDER BY on_date DESC')
    .all(userId) as Array<{
    id: string
    title: string
    category: string
    on_date: string
    mime: string | null
    size_bytes: number | null
    storage_key: string | null
    raw_text: string | null
    parsed_summary: string | null
    created_at: string
  }>
  return rows.map((r) => ({
    id: r.id,
    title: r.title,
    category: r.category,
    onDate: r.on_date,
    mime: r.mime,
    sizeBytes: r.size_bytes,
    storageKey: r.storage_key,
    rawText: r.raw_text,
    parsedSummary: r.parsed_summary,
    createdAt: r.created_at,
  }))
}

export function getDocument(userId: string, id: string): DocumentRecord | null {
  return listDocuments(userId).find((d) => d.id === id) ?? null
}

export function addDocument(
  userId: string,
  input: Omit<DocumentRecord, 'id' | 'createdAt'>,
): DocumentRecord {
  const id = uid('doc')
  const createdAt = nowIso()
  db()
    .prepare(
      `INSERT INTO documents (id, user_id, title, category, on_date, mime, size_bytes, storage_key, raw_text, parsed_summary, created_at)
       VALUES (?,?,?,?,?,?,?,?,?,?,?)`,
    )
    .run(
      id,
      userId,
      input.title,
      input.category,
      input.onDate,
      input.mime ?? null,
      input.sizeBytes ?? null,
      input.storageKey ?? null,
      input.rawText ?? null,
      input.parsedSummary ?? null,
      createdAt,
    )
  return { ...input, id, createdAt }
}

export function deleteDocument(userId: string, id: string) {
  db().prepare('DELETE FROM documents WHERE user_id = ? AND id = ?').run(userId, id)
}
