import { emptyProfile, type IsoDate, type ModifierId, type Profile } from '../lib/domain/profile'
import { resolveJourney, type JourneyState } from '../lib/domain/journey'
import { addDays, today as realToday } from '../lib/domain/dates'
import { CATALOG } from '../lib/content'
import { emptyAffinity, type Affinity } from '../lib/content/recommend'
import { applyTopicAffinity, type WeightedAffinity } from '../lib/content/affinity'

/**
 * Stav aplikace v prohlížeči.
 *
 * Všechno, co uživatelka napíše, zůstává v jejím zařízení (localStorage).
 * Nic se nikam neodesílá — v téhle verzi ani není kam. Je to zároveň
 * nejsilnější naplnění slibu o soukromí: data o léčbě neopustí prohlížeč.
 */

const KEY = 'ivf-by-gabi/v1'

export interface JournalRow {
  date: IsoDate
  mood: number
  anxiety: number
  hope: number
  energy: number
  note: string
  /** Odpověď na otázku dne. */
  promptId: string
  promptAnswer: string
  /** Co se dnes povedlo — záměrně oddělené od poznámky. */
  win: string
}

/** Vyplněné cvičení. Ukládá se, aby se k němu dalo vrátit. */
export interface ExerciseEntry {
  id: string
  exercise: string
  date: IsoDate
  /** Odpovědi na jednotlivé kroky, nebo u volných cvičení jeden text. */
  fields: string[]
}

export interface EventRow {
  id: string
  title: string
  kind: string
  onDate: IsoDate
  atTime: string | null
  note: string | null
  done: boolean
}

export interface MedRow {
  id: string
  name: string
  dose: string
  timeOfDay: string
}

export interface LabRow {
  id: string
  paramKey: string
  value: number
  unit: string
  onDate: IsoDate
}

export interface DocRow {
  id: string
  title: string
  addedOn: IsoDate
  found: { paramKey: string; value: number; unit: string }[]
}

export interface LetterRow {
  id: string
  toWhom: 'embryo' | 'baby' | 'lost' | 'self' | 'partner'
  title: string
  body: string
  onDate: IsoDate
}

export interface StoryRow {
  id: string
  onDate: IsoDate
  title: string
  body: string
  icon: string
}

export interface PostRow {
  id: string
  groupSlug: string
  author: string
  body: string
  onDate: IsoDate
  hearts: number
  hearted: boolean
  mine: boolean
  replies: { author: string; body: string }[]
}

export interface ChatMsg {
  role: 'user' | 'gabi'
  text: string
  refs: string[]
}

/** Rozpracované odpovědi z onboardingu — přežijí i zavření prohlížeče. */
export interface Draft {
  route: string
  date: string
  skipDate: boolean
  /** Gestační týden v době porodu — bez něj neumíme korigovaný věk. */
  week: number | null
  mods: ModifierId[]
  name: string
  anon: boolean
}

export interface Save {
  v: 1
  profile: Profile | null
  draft: Draft | null
  onboardingStep: number
  journal: Record<string, JournalRow>
  taskDone: Record<string, boolean>
  checks: Record<string, boolean>
  quiz: Record<string, number>
  saved: string[]
  /** contentId → nasbíraná váha. Z toho se počítají zájmy. */
  weights: Record<string, number>
  chat: ChatMsg[]
  events: EventRow[]
  meds: MedRow[]
  labs: LabRow[]
  docs: DocRow[]
  letters: LetterRow[]
  story: StoryRow[]
  exercises: ExerciseEntry[]
  posts: PostRow[]
  theme: 'auto' | 'light' | 'dark'
  /** 0 = dnešek. Nenulové jen když si uživatelka vědomě přepne na jiný den. */
  dayOffset: number
  seenTour: boolean
}

function blank(): Save {
  return {
    v: 1,
    profile: null,
    draft: null,
    onboardingStep: 0,
    journal: {},
    taskDone: {},
    checks: {},
    quiz: {},
    saved: [],
    weights: {},
    chat: [],
    events: [],
    meds: [],
    labs: [],
    docs: [],
    letters: [],
    story: [],
    exercises: [],
    posts: [],
    theme: 'auto',
    dayOffset: 0,
    seenTour: false,
  }
}

let data: Save = blank()

export function load(): Save {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Save
      if (parsed && parsed.v === 1) data = { ...blank(), ...parsed }
    }
  } catch {
    // Poškozený nebo nedostupný localStorage nesmí aplikaci shodit —
    // horší varianta je prázdný začátek, ne bílá obrazovka.
    data = blank()
  }
  return data
}

export function save(): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(data))
  } catch {
    // Plný nebo zakázaný storage: aplikace dál běží, jen si nic nezapamatuje.
  }
}

export const S = {
  get d(): Save {
    return data
  },
}

export function patch(fn: (d: Save) => void): void {
  fn(data)
  save()
}

export function reset(): void {
  data = blank()
  save()
}

export function uid(prefix: string): string {
  return `${prefix}_${Math.random().toString(36).slice(2, 10)}`
}

// ------------------------------------------------------------------ profil ---

export function newProfile(): Profile {
  const now = new Date().toISOString()
  return emptyProfile('local', 'local', now)
}

export function isOnboarded(): boolean {
  return data.profile !== null
}

export function profile(): Profile {
  return data.profile ?? newProfile()
}

export function hasModifier(m: ModifierId): boolean {
  return profile().modifiers.includes(m)
}

// -------------------------------------------------------------------- den ---

/** Datum, na které se uživatelka právě dívá. Skoro vždycky dnešek. */
export function viewDate(): IsoDate {
  return data.dayOffset === 0 ? realToday() : addDays(realToday(), data.dayOffset)
}

export function journey(): JourneyState {
  return resolveJourney(profile(), viewDate())
}

// -------------------------------------------------------------- učení se ---

/**
 * Zaznamená, že uživatelku obsah zajímal. Váhy odpovídají serverové verzi
 * (`repo.getAffinity`): otevření je slabší signál než uložení.
 */
export function learn(contentId: string, weight: number): void {
  patch((d) => {
    d.weights[contentId] = (d.weights[contentId] ?? 0) + weight
  })
}

export function toggleSaved(contentId: string): boolean {
  let nowSaved = false
  patch((d) => {
    const i = d.saved.indexOf(contentId)
    if (i >= 0) {
      d.saved.splice(i, 1)
    } else {
      d.saved.push(contentId)
      d.weights[contentId] = (d.weights[contentId] ?? 0) + 1.2
      nowSaved = true
    }
  })
  return nowSaved
}

export function affinity(): Affinity {
  const a = emptyAffinity() as WeightedAffinity
  a.seen = new Set(Object.keys(data.weights))
  a.saved = new Set(data.saved)
  a._weights = new Map(Object.entries(data.weights))
  return applyTopicAffinity(a, CATALOG)
}

// ------------------------------------------------------------------ deník ---

export function journalList(): JournalRow[] {
  return Object.values(data.journal).sort((a, b) => a.date.localeCompare(b.date))
}

export function journalFor(date: IsoDate): JournalRow | null {
  return data.journal[date] ?? null
}

export function saveJournal(row: JournalRow): void {
  patch((d) => {
    d.journal[row.date] = row
  })
}

/** Kolik dní po sobě je zapsáno, počítáno zpětně od zadaného dne. */
export function journalStreak(from: IsoDate): number {
  let n = 0
  let day = from
  while (data.journal[day]) {
    n++
    day = addDays(day, -1)
  }
  return n
}

/** Vyplněná cvičení od nejnovějšího. */
export function exerciseLog(): ExerciseEntry[] {
  return [...data.exercises].sort((a, b) => b.date.localeCompare(a.date))
}

export function saveExercise(exercise: string, fields: string[]): void {
  patch((d) => {
    d.exercises.unshift({ id: uid('ex'), exercise, date: viewDate(), fields })
  })
}

/** Sedmidenní průměr nálady — používá ho Partner mode i upozornění na pokles. */
export function moodAverage(days: number): number | null {
  const rows = journalList().slice(-days)
  if (rows.length === 0) return null
  return Math.round((rows.reduce((a, r) => a + r.mood, 0) / rows.length) * 10) / 10
}

/**
 * Dlouhodobý pokles nálady. Nediagnostikuje — jen si všimne a nabídne pomoc.
 * Práh: aspoň 5 zápisů a průměr pod 2,2.
 */
export function moodConcern(): boolean {
  const rows = journalList().slice(-7)
  if (rows.length < 5) return false
  return rows.reduce((a, r) => a + r.mood, 0) / rows.length < 2.2
}
