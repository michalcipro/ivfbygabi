import type { IsoDate } from '../domain/profile'

/**
 * Typy a popisky záznamů, které potřebuje i prohlížeč.
 *
 * Datová vrstva (`db/repo-*.ts`) sahá na `node:fs` a `better-sqlite3`, takže
 * se nesmí dostat do klientského bundlu. Klientské komponenty proto importují
 * tvary a popisky odsud; repozitáře je znovu re-exportují, aby server mohl
 * dál importovat všechno z jednoho místa.
 */

// ---------------------------------------------------------------- kalendář ---

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
  hcg: { label: 'Odběr hCG', icon: '✶' },
  ockovani: { label: 'Očkování', icon: '✚' },
  lek: { label: 'Lék', icon: '◐' },
  porod: { label: 'Porod', icon: '✿' },
  vlastni: { label: 'Vlastní', icon: '•' },
}

// -------------------------------------------------------------------- léky ---

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

// ---------------------------------------------------------------- laboratoř ---

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

// ------------------------------------------------------------------ měření ---

export const METRICS = {
  weight: { label: 'Váha', unit: 'kg' },
  bp_sys: { label: 'Tlak. Systolický', unit: 'mmHg' },
  bp_dia: { label: 'Tlak. Diastolický', unit: 'mmHg' },
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

// -------------------------------------------------------------- dokumenty ---

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

// ------------------------------------------------------------------ deník ---

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

// --------------------------------------------------------------- kronika ---

export interface TimelineEvent {
  id: string
  onDate: IsoDate
  title: string
  body: string | null
  kind: 'milnik' | 'foto' | 'vysledek' | 'zapis' | 'dopis' | 'prvni'
  icon: string | null
  mediaId: string | null
  auto: boolean
  pinned: boolean
}

export interface Letter {
  id: string
  toWhom: 'embryo' | 'baby' | 'lost' | 'self' | 'partner'
  title: string | null
  body: string
  onDate: IsoDate
  sealedUntil: string | null
  createdAt: string
}

export const LETTER_TARGETS: Record<Letter['toWhom'], string> = {
  embryo: 'Mému embryu',
  baby: 'Mému miminku',
  lost: 'Tomu, kdo tu nezůstal',
  self: 'Sobě',
  partner: 'Partnerovi',
}

// --------------------------------------------------------------- komunita ---

export interface CommunityGroup {
  id: string
  slug: string
  name: string
  description: string
  kind: 'phase' | 'clinic' | 'diagnosis' | 'age' | 'due' | 'special'
  matchKey: string | null
  members: number
}

export interface CommunityReply {
  id: string
  postId: string
  userId: string
  authorName: string
  body: string
  hearts: number
  createdAt: string
  hearted?: boolean
}

export interface CommunityPost {
  id: string
  groupId: string
  userId: string
  authorName: string
  body: string
  hearts: number
  phaseId: string | null
  createdAt: string
  replies?: CommunityReply[]
  hearted?: boolean
}
