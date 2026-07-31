import { emptyProfile, type IsoDate, type ModifierId, type Profile } from '../lib/domain/profile'
import { resolveJourney, type JourneyState } from '../lib/domain/journey'
import { addDays, daysBetween, today as realToday } from '../lib/domain/dates'
import { autoEventsFor } from '../lib/domain/auto-events'
import { findPattern, readDay, type DayLog, type DayReading, type Pattern } from '../lib/domain/strain'
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

/**
 * Klíč v úložišti zůstává i po přejmenování na Bloomia. Kdyby se změnil,
 * každá uživatelka by přišla o celý svůj deník — a to je ta poslední věc,
 * kterou smí rebranding udělat.
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
  /** Jak se ozývalo tělo. Vstupuje do rezervy i do přehledu v čase. */
  symptoms: string[]
}

/**
 * Zapsaný vpich.
 *
 * Deset dní do stejného místa bolí a dělá boule. Aplikace si pamatuje, kam
 * se píchalo, a umí navrhnout, kam jít dnes.
 */
export interface ShotRow {
  id: string
  date: IsoDate
  /** Klíč zóny na břiše — viz SHOT_ZONES v ui.ts. */
  zone: string
  med: string
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
  shots: ShotRow[]
  docs: DocRow[]
  letters: LetterRow[]
  story: StoryRow[]
  exercises: ExerciseEntry[]
  /**
   * Stav událostí podle jejich id. Platí i pro automaticky odvozené události,
   * které se nikde neukládají — jejich id je odvozené z data a názvu.
   */
  eventState: Record<string, { done: boolean; note: string }>
  posts: PostRow[]
  /** Výchozí je tmavý — prstenec a grafy na něm svítí. Přepínatelné v nastavení. */
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
    shots: [],
    docs: [],
    letters: [],
    story: [],
    exercises: [],
    eventState: {},
    posts: [],
    theme: 'dark',
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

// ------------------------------------------------------------- kalendář ---

export function eventState(id: string): { done: boolean; note: string } {
  return data.eventState[id] ?? { done: false, note: '' }
}

export function toggleEventDone(id: string): void {
  patch((d) => {
    const cur = d.eventState[id] ?? { done: false, note: '' }
    d.eventState[id] = { ...cur, done: !cur.done }
  })
}

export function setEventNote(id: string, note: string): void {
  patch((d) => {
    const cur = d.eventState[id] ?? { done: false, note: '' }
    d.eventState[id] = { ...cur, note }
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

// -------------------------------------------------------------- kalendář ---

export interface CalItem {
  id: string
  title: string
  kind: string
  onDate: IsoDate
  note: string | null
  auto: boolean
}

/**
 * Všechny události — vlastní i odvozené z profilu — v jednom seznamu.
 *
 * Bydlí ve store, protože z nich čte i motor nůžek. Kdyby to zůstalo
 * v obrazovce kalendáře, vznikl by kruh v importech.
 */
export function allEvents(): CalItem[] {
  const auto = autoEventsFor(profile(), journey()).map((e) => ({
    id: `auto:${e.onDate}:${e.title}`,
    title: e.title,
    kind: e.kind,
    onDate: e.onDate,
    note: e.note,
    auto: true,
  }))
  const mine = data.events.map((e) => ({
    id: e.id,
    title: e.title,
    kind: e.kind,
    onDate: e.onDate,
    note: e.note,
    auto: false,
  }))
  return [...mine, ...auto].sort((a, b) => a.onDate.localeCompare(b.onDate))
}

/**
 * Co vyžaduje pozornost: dnešek, zítřek a všechno, co mělo proběhnout
 * a není odškrtnuté.
 */
export function reminders(today: IsoDate): CalItem[] {
  return allEvents().filter((e) => !eventState(e.id).done && e.onDate <= addDays(today, 1))
}

// ---------------------------------------------------------------- vpichy ---

export function shotsOn(date: IsoDate): ShotRow[] {
  return data.shots.filter((s) => s.date === date)
}

export function addShot(zone: string, med: string): void {
  patch((d) => {
    d.shots.unshift({ id: uid('shot'), date: viewDate(), zone, med })
  })
}

/** Před kolika dny se do zóny píchalo naposled. `null` = nikdy nebo dávno. */
export function zoneLastUsed(zone: string, date: IsoDate): number | null {
  const hits = data.shots
    .filter((s) => s.zone === zone && s.date <= date)
    .map((s) => daysBetween(s.date, date))
    .filter((d) => d >= 0 && d <= 9)
  return hits.length ? Math.min(...hits) : null
}

// ----------------------------------------------------------------- nůžky ---

function logFor(date: IsoDate): DayLog | null {
  const r = data.journal[date]
  if (!r) return null
  return { mood: r.mood, anxiety: r.anxiety, hope: r.hope, energy: r.energy, symptoms: r.symptoms ?? [] }
}

/** Čtení dne — co dnešek žádá proti tomu, co na to má. */
export function dayReading(date: IsoDate = viewDate()): DayReading {
  return readDay({
    state: resolveJourney(profile(), date),
    date,
    events: allEvents().map((e) => ({ onDate: e.onDate, kind: e.kind })),
    medCount: data.meds.length,
    log: logFor(date),
  })
}

/** Řada čtení pro graf — od nejstaršího po zadaný den. */
export function readingSeries(days: number, to: IsoDate = viewDate()) {
  const out: { date: IsoDate; demand: number; reserve: number | null; gap: number | null }[] = []
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(to, -i)
    const r = dayReading(date)
    out.push({ date, demand: r.demand, reserve: r.reserve, gap: r.gap })
  }
  return out
}

/** Vzorec, kterého si aplikace u uživatelky všimla. */
export function pattern(): Pattern | null {
  return findPattern(
    readingSeries(28).map((r) => ({ date: r.date, gap: r.gap })),
    allEvents().map((e) => ({ onDate: e.onDate, kind: e.kind })),
  )
}
