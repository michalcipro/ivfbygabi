import { emptyProfile, type IsoDate, type ModifierId, type Profile } from '../lib/domain/profile'
import { resolveJourney, type JourneyState } from '../lib/domain/journey'
import { addDays, daysBetween, today as realToday } from '../lib/domain/dates'
import { autoEventsFor } from '../lib/domain/auto-events'
import { findPattern, readDay, type DayLog, type DayReading, type Pattern } from '../lib/domain/strain'
import {
  activeCycle,
  betaDate,
  currentTransfer,
  emptyCycle,
  emptyHcgTest,
  emptyTransfer,
  readCycle,
  type CycleRow,
  type CycleStatus,
  type CycleTransfer,
  type HcgTest,
  type PhotoRef,
  type TransferOutcome,
} from '../lib/domain/cycle'
import { emptyEmbryo, sortEmbryos, type Embryo } from '../lib/domain/embryo'
import { emptyExam, type ExamEntry, type ExamWho } from '../lib/domain/exams'
import { emptySupport, type SupportEntry } from '../lib/domain/support'
import { emptyClinic, type Clinic } from '../lib/domain/clinic'
import { buildCard, buildFunnel, type FunnelStep, type JourneyCard } from '../lib/domain/journey-card'
import { modifiersFromDiagnoses } from '../lib/domain/diagnoses'
import { readToday, type TodayBalance } from '../lib/domain/today-tasks'
import { readEndurance, type Endurance, type StepKey } from '../lib/domain/endurance'
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

/** Příloha u záznamu. Ukládá se jako data: URI, takže nikam neodchází. */
export interface Attachment {
  id: string
  kind: 'foto' | 'pdf' | 'zprava' | 'zvuk'
  name: string
  data: string
}

export type MedKind = 'injekce' | 'tableta' | 'gel' | 'naplast' | 'cipek' | 'sprej'

export interface MedRow {
  id: string
  name: string
  kind: MedKind
  dose: string
  /** Víc časů denně. Starý `timeOfDay` se při načtení převede sem. */
  times: string[]
  repeat: 'denne' | 'obden' | 'jednou'
  startOn: IsoDate | null
  endOn: IsoDate | null
  doctorNote: string
  instructions: string
  notify: boolean
  /** Historie změn dávkování — u stimulace se dávka mění běžně. */
  history: { on: IsoDate; dose: string; why: string }[]
  /** Ponecháno kvůli starým uloženým datům. Nové fotky jdou do `photos`. */
  photo: string
  photos: PhotoRef[]
  cycleId: string | null
  /** Ponecháno kvůli starým uloženým datům. */
  timeOfDay?: string
}

/** Zápis příznaku s intenzitou a časem. */
export interface SymptomLog {
  id: string
  date: IsoDate
  at: string
  symptomId: string
  /**
   * 0–10, nebo `null`, když uživatelka jen zaškrtla příznak a intenzitu
   * neurčila. Nula znamená „nic“ — to je odpověď, ne chybějící údaj, a
   * plést si to dvoje by pokřivilo každý průměr.
   */
  intensity: number | null
  note: string
}

export type HealthKind =
  | 'bbt'
  | 'vaha'
  | 'tlak'
  | 'tep'
  | 'spanek'
  | 'pitny'
  | 'procedura'

export interface HealthRow {
  id: string
  date: IsoDate
  at: string
  kind: HealthKind
  value: number | null
  /** Druhá složka — diastola u tlaku. */
  value2: number | null
  text: string
  note: string
  attachments: Attachment[]
}

/** Ultrazvuk. Folikuly se měří po jednotlivých velikostech, ne jen počtem. */
export interface UltrasoundRow {
  id: string
  date: IsoDate
  cycleId: string | null
  /** Velikosti folikulů v mm. */
  left: number[]
  right: number[]
  /** Výška sliznice v mm. */
  endometrium: number | null
  note: string
  /** Ponecháno kvůli starým uloženým datům. Nové fotky jdou do `photos`. */
  attachments: Attachment[]
  photos: PhotoRef[]
}

export type QuestionStatus = 'ceka' | 'vyreseno' | 'archiv'
export type QuestionPriority = 'vysoka' | 'stredni' | 'nizka'

export interface QuestionRow {
  id: string
  text: string
  category: string
  priority: QuestionPriority
  /** Ke které kontrole se otázka váže. */
  forDate: IsoDate | null
  answer: string
  status: QuestionStatus
  createdOn: IsoDate
}

export interface NoteRow {
  id: string
  date: IsoDate
  at: string
  text: string
  attachments: Attachment[]
}

export interface LabRow {
  id: string
  paramKey: string
  value: number
  unit: string
  onDate: IsoDate
}

/** Druh dokumentu. Podle něj se v přehledu skládají složky. */
export type DocKind =
  | 'laborator'
  | 'ultrazvuk'
  | 'zprava'
  | 'embryologie'
  | 'genetika'
  | 'spermiogram'
  | 'jine'

export const DOC_KIND_LABEL: Record<DocKind, string> = {
  laborator: 'Laboratorní výsledek',
  ultrazvuk: 'Ultrazvuk',
  zprava: 'Lékařská zpráva',
  embryologie: 'Embryologická zpráva',
  genetika: 'Genetický výsledek',
  spermiogram: 'Spermiogram',
  jine: 'Jiný dokument',
}

/**
 * Uložený dokument.
 *
 * Aplikace dokumenty **nečte a nevyhodnocuje** — jenom je uspořádá. Rozpoznávání
 * hodnot ze zprávy tu bylo a je pryč: špatně přečtené číslo ve zdravotním
 * záznamu je horší než žádné číslo. Hodnoty se zapisují ručně ve Zdraví,
 * dokument je vedle nich jako důkaz.
 */
export interface DocRow {
  id: string
  title: string
  kind: DocKind
  onDate: IsoDate
  addedOn: IsoDate
  note: string
  /** Ponecháno kvůli starým datům z dřívějšího rozpoznávání hodnot. */
  found: { paramKey: string; value: number; unit: string }[]
  photos: PhotoRef[]
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
  /** Vybrané diagnózy z druhého kroku onboardingu. */
  diagnoses: string[]
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
  cycles: CycleRow[]
  /** Jednotlivá embrya napříč cykly. Vazba je přes `cycleId`. */
  embryos: Embryo[]
  /** Zapsaná vyšetření — vzniknou, až do nich uživatelka něco napíše. */
  exams: ExamEntry[]
  /** Podpůrná péče mimo kliniku. */
  support: SupportEntry[]
  /** Kontakty na kliniku. Číslo se hledá ve chvíli, kdy se hledat nedá. */
  clinic: Clinic
  symptomLogs: SymptomLog[]
  health: HealthRow[]
  ultrasounds: UltrasoundRow[]
  questions: QuestionRow[]
  notes: NoteRow[]
  /** Oblíbené příznaky — nabízejí se první. */
  favSymptoms: string[]
  /** Vlastní příznaky, které si uživatelka přidala. */
  customSymptoms: { id: string; label: string; group: string }[]
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
  /**
   * Předplatné. V téhle verzi je to jen stav — žádná platba neprobíhá.
   * Aplikace zůstává celá otevřená, i když je neaktivní: zamykat obsah
   * ženě uprostřed léčby by bylo horší než nevydělat.
   */
  subscription: { active: boolean; since: IsoDate | null }
  /** Výchozí je tmavý — prstenec a grafy na něm svítí. Přepínatelné v nastavení. */
  theme: 'auto' | 'light' | 'dark'
  /** 0 = dnešek. Nenulové jen když si uživatelka vědomě přepne na jiný den. */
  dayOffset: number
  seenTour: boolean
  /** Rozbalené jemnější dělení fází v onboardingu i v přepínači. */
  obMore: boolean
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
    cycles: [],
    embryos: [],
    exams: [],
    support: [],
    clinic: emptyClinic(),
    symptomLogs: [],
    health: [],
    ultrasounds: [],
    questions: [],
    notes: [],
    favSymptoms: [],
    customSymptoms: [],
    docs: [],
    letters: [],
    story: [],
    exercises: [],
    eventState: {},
    posts: [],
    subscription: { active: false, since: null },
    // Lis je papírový směr — světlý režim je ten hlavní. `auto` znamená
    // „podle zařízení“; kdo si přepne ručně, tomu se volba nepřepisuje.
    theme: 'auto',
    dayOffset: 0,
    seenTour: false,
    obMore: false,
  }
}

let data: Save = blank()

export function load(): Save {
  try {
    const raw = localStorage.getItem(KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as Save
      if (parsed && parsed.v === 1) data = migrate({ ...blank(), ...parsed })
    }
  } catch {
    // Poškozený nebo nedostupný localStorage nesmí aplikaci shodit —
    // horší varianta je prázdný začátek, ne bílá obrazovka.
    data = blank()
  }
  return data
}

/**
 * Doplní tvary, které ve starších uložených datech ještě nebyly.
 *
 * Rebranding ani rozšíření modelu nesmí uživatelce smazat deník, takže
 * se staré záznamy dopočítají, ne zahodí.
 */
function migrate(d: Save): Save {
  // Starý lék měl jediný čas v `timeOfDay` a nic dalšího. Skládá se
  // explicitně, ne rozprostřením — spread by u typovaného MedRow přepsal
  // i pole, která ve starých datech vůbec nejsou.
  d.meds = d.meds.map((m) => {
    const old = m as Partial<MedRow> & { timeOfDay?: string }
    return {
      id: old.id ?? uid('med'),
      name: old.name ?? '',
      kind: old.kind ?? 'injekce',
      dose: old.dose ?? '',
      times: old.times?.length ? old.times : old.timeOfDay ? [old.timeOfDay] : [],
      repeat: old.repeat ?? 'denne',
      startOn: old.startOn ?? null,
      endOn: old.endOn ?? null,
      doctorNote: old.doctorNote ?? '',
      instructions: old.instructions ?? '',
      notify: old.notify ?? true,
      history: old.history ?? [],
      photo: old.photo ?? '',
      photos: old.photos ?? [],
      cycleId: old.cycleId ?? null,
    }
  })

  d.ultrasounds = d.ultrasounds.map((u) => ({ ...u, photos: u.photos ?? [] }))
  d.docs = d.docs.map((x) => ({
    ...x,
    kind: x.kind ?? 'zprava',
    onDate: x.onDate ?? x.addedOn,
    note: x.note ?? '',
    found: x.found ?? [],
    photos: x.photos ?? [],
  }))

  // Příznaky se dřív zaškrtávaly jen v deníku, bez intenzity a bez času.
  // Statistiky i časová osa čtou `symptomLogs`, takže by starší zápisy
  // zmizely — proto se dotáhnou. Intenzita zůstává `null`: uživatelka ji
  // tenkrát nezadala a dosazovat za ni číslo by bylo vymýšlení.
  const logged = new Set(d.symptomLogs.map((l) => `${l.date}|${l.symptomId}`))
  for (const [date, row] of Object.entries(d.journal)) {
    for (const symptomId of row?.symptoms ?? []) {
      const key = `${date}|${symptomId}`
      if (logged.has(key)) continue
      logged.add(key)
      d.symptomLogs.push({ id: uid('sl'), date, at: '', symptomId, intensity: null, note: '' })
    }
  }

  d.cycles = d.cycles.map(migrateCycle)
  d.embryos = (d.embryos ?? []).map((e) => ({ ...emptyEmbryo(e.id, e.cycleId, e.number), ...e }))
  d.exams = d.exams ?? []
  d.support = (d.support ?? []).map((e) => ({ ...emptySupport(e.id), ...e }))
  d.clinic = { ...emptyClinic(), ...(d.clinic ?? {}) }
  d.subscription = d.subscription ?? { active: false, since: null }

  return d
}

/** Jak dopadl transfer, když se to dá odvodit jen z výsledku celého cyklu. */
const OUTCOME_TO_TRANSFER: Record<string, TransferOutcome> = {
  tehotenstvi: 'pozitivni',
  negativni: 'negativni',
  ztrata: 'ztrata',
  zruseno: 'zruseno',
  probiha: 'ceka',
  zamrazeno: 'ceka',
}

/**
 * Starý cyklus měl jeden transfer, jeden odběr hCG a jedno číslo „blastocysty“.
 *
 * Teď je transferů seznam — v jednom cyklu jich po odběru bývá víc — a vývoj
 * embryí se zapisuje po dnech. Zapsaná data se proto překlopí, ne zahodí:
 * datum transferu se stane prvním transferem v seznamu, datum odběru hCG prvním
 * odběrem krve a blastocysty pátým dnem kultivace. Pátý den je odhad, ale
 * je to ten správný odhad: klinika mluví o blastocystách hlavně u něj.
 */
function migrateCycle(c: CycleRow): CycleRow {
  const old = c as Partial<CycleRow> & {
    blastocysts?: number | null
    transferOn?: IsoDate | null
    betaOn?: IsoDate | null
    transferred?: number | null
    embryoDay?: number | null
  }

  const transfers: CycleTransfer[] = old.transfers ?? []
  if (
    transfers.length === 0 &&
    (old.transferOn || (old.transferred ?? null) !== null || (old.embryoDay ?? null) !== null)
  ) {
    transfers.push({
      ...emptyTransfer(uid('tr'), old.kind === 'fet' ? 'kryo' : 'cerstvy'),
      date: old.transferOn ?? null,
      embryos: old.transferred ?? null,
      embryoDay: old.embryoDay ?? null,
      outcome: OUTCOME_TO_TRANSFER[old.outcome ?? 'probiha'] ?? 'ceka',
    })
  }

  const hcgTests: HcgTest[] = old.hcgTests ?? []
  if (hcgTests.length === 0 && old.betaOn) {
    hcgTests.push({ ...emptyHcgTest(uid('hcg'), 'krev'), date: old.betaOn })
  }

  const base = emptyCycle(old.id ?? uid('cyc'), old.number ?? 1, old.startedOn ?? realToday())
  return {
    ...base,
    id: base.id,
    number: base.number,
    kind: old.kind ?? base.kind,
    name: old.name ?? '',
    clinic: old.clinic ?? '',
    doctor: old.doctor ?? '',
    protocol: old.protocol ?? '',
    protocolPhotos: old.protocolPhotos ?? [],
    cd1On: old.cd1On ?? null,
    startedOn: base.startedOn,
    endedOn: old.endedOn ?? null,
    stimStartOn: old.stimStartOn ?? null,
    triggerOn: old.triggerOn ?? null,
    triggerAt: old.triggerAt ?? '',
    retrievalOn: old.retrievalOn ?? null,
    eggs: old.eggs ?? null,
    mature: old.mature ?? null,
    inseminated: old.inseminated ?? null,
    fertMethod: old.fertMethod ?? '',
    fertilized: old.fertilized ?? null,
    day2: old.day2 ?? null,
    day3: old.day3 ?? null,
    day4: old.day4 ?? null,
    day5: old.day5 ?? old.blastocysts ?? null,
    day6: old.day6 ?? null,
    frozen: old.frozen ?? null,
    labPhotos: old.labPhotos ?? [],
    methods: old.methods ?? [],
    methodsNote: old.methodsNote ?? '',
    // Transfery ze starých dat nemusí mít nová pole — doplní se prázdná,
    // ne vymyšlená.
    transfers: transfers.map((t) => ({ ...emptyTransfer(t.id, t.kind), ...t })),
    hcgTests,
    outcome: old.outcome ?? 'probiha',
    note: old.note ?? '',
    resultPhotos: old.resultPhotos ?? [],
  }
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

// ----------------------------------------------------------------- cykly ---

export function cycles(): CycleRow[] {
  return [...data.cycles].sort((a, b) => b.startedOn.localeCompare(a.startedOn))
}

/** Cyklus, který právě běží. */
export function currentCycle(): CycleRow | null {
  return activeCycle(data.cycles, viewDate())
}

export function activeCycleId(): string | null {
  return currentCycle()?.id ?? null
}

export function cycleById(id: string): CycleRow | null {
  return data.cycles.find((c) => c.id === id) ?? null
}

/** Stav probíhajícího cyklu k dnešku. */
export function cycleStatus(c: CycleRow | null = currentCycle()): CycleStatus | null {
  return c ? readCycle(c, viewDate()) : null
}

export function addCycle(): CycleRow {
  const next = data.cycles.reduce((max, c) => Math.max(max, c.number), 0) + 1
  const row = emptyCycle(uid('cyc'), next, viewDate())
  patch((d) => {
    d.cycles.push(row)
  })
  return row
}

export function updateCycle(id: string, patchFn: (c: CycleRow) => void): void {
  patch((d) => {
    const c = d.cycles.find((x) => x.id === id)
    if (c) patchFn(c)
  })
}

/**
 * Kam patří fotka uvnitř cyklu.
 *
 * Slot je `protokol`, `laborator`, `vysledek`, `transfer:{id}` nebo `hcg:{id}`.
 * Vrací přímo pole v uloženém cyklu, takže se do něj dá zapsat.
 */
function cyclePhotoSlot(c: CycleRow, slot: string): PhotoRef[] | null {
  if (slot === 'protokol') return c.protocolPhotos
  if (slot === 'laborator') return c.labPhotos
  if (slot === 'vysledek') return c.resultPhotos
  const [kind, id] = slot.split(':')
  if (kind === 'transfer') return c.transfers.find((t) => t.id === id)?.photos ?? null
  if (kind === 'hcg') return c.hcgTests.find((t) => t.id === id)?.photos ?? null
  return null
}

/**
 * Fotky u libovolného záznamu — rozklíčování `scope` (viz `photo-ui.ts`).
 *
 * Jedno místo pro celou aplikaci: přidat další místo, kam jde nahrát fotka,
 * znamená doplnit sem jednu větev. Vrací `null`, když scope na nic neukazuje —
 * třeba když se záznam mezitím smazal.
 */
function photoSlot(d: Save, scope: string): PhotoRef[] | null {
  const [kind, id, ...rest] = scope.split(':')
  switch (kind) {
    case 'cyc': {
      const c = d.cycles.find((x) => x.id === id)
      return c ? cyclePhotoSlot(c, rest.join(':')) : null
    }
    case 'uz':
      return d.ultrasounds.find((x) => x.id === id)?.photos ?? null
    case 'doc':
      return d.docs.find((x) => x.id === id)?.photos ?? null
    case 'med':
      return d.meds.find((x) => x.id === id)?.photos ?? null
    default:
      return null
  }
}

/** Fotky pro vykreslení. Neexistující scope vrací prázdno, ne výjimku. */
export function photosOf(scope: string): PhotoRef[] {
  return photoSlot(data, scope) ?? []
}

/** Zápis do fotek daného záznamu. Uloží se rovnou. */
export function withPhotos(scope: string, fn: (list: PhotoRef[]) => void): void {
  patch((d) => {
    const list = photoSlot(d, scope)
    if (list) fn(list)
  })
}

/** Nový dokument. Vrací id, aby se do něj dala rovnou přidat fotka. */
export function addDoc(title: string, kind: DocKind = 'zprava', onDate?: IsoDate, note = ''): string {
  const id = uid('doc')
  patch((d) => {
    d.docs.push({
      id,
      title,
      kind,
      onDate: onDate || viewDate(),
      addedOn: viewDate(),
      note,
      found: [],
      photos: [],
    })
  })
  return id
}

export function deleteDoc(id: string): void {
  patch((d) => {
    d.docs = d.docs.filter((x) => x.id !== id)
  })
}

// ----------------------------------------------------------------- embrya ---

/** Embrya jednoho cyklu, seřazená podle pořadí. */
export function embryosOf(cycleId: string): Embryo[] {
  return sortEmbryos(data.embryos.filter((e) => e.cycleId === cycleId))
}

export function embryoById(id: string): Embryo | null {
  return data.embryos.find((e) => e.id === id) ?? null
}

/** Všechna embrya napříč cykly — pro databázi „Moje embrya“. */
export function allEmbryos(): Embryo[] {
  return [...data.embryos].sort((a, b) => {
    const ca = data.cycles.find((c) => c.id === a.cycleId)?.number ?? 0
    const cb = data.cycles.find((c) => c.id === b.cycleId)?.number ?? 0
    return ca === cb ? a.number - b.number : ca - cb
  })
}

export function addEmbryo(cycleId: string): Embryo {
  const next = data.embryos.filter((e) => e.cycleId === cycleId).reduce((m, e) => Math.max(m, e.number), 0) + 1
  const row = emptyEmbryo(uid('emb'), cycleId, next)
  patch((d) => {
    d.embryos.push(row)
  })
  return row
}

export function updateEmbryo(id: string, fn: (e: Embryo) => void): void {
  patch((d) => {
    const e = d.embryos.find((x) => x.id === id)
    if (e) fn(e)
  })
}

export function deleteEmbryo(id: string): void {
  patch((d) => {
    d.embryos = d.embryos.filter((e) => e.id !== id)
    // Transfer, který na embryo odkazoval, o něj jen přijde — mazat celý
    // transfer kvůli smazané kartě embrya by byla nečekaná ztráta.
    for (const c of d.cycles) {
      for (const t of c.transfers) t.embryoIds = t.embryoIds.filter((x) => x !== id)
    }
  })
}

// ------------------------------------------------------------- vyšetření ---

export function exams(): ExamEntry[] {
  return data.exams
}

export function examEntryFor(examId: string): ExamEntry | null {
  return data.exams.find((e) => e.examId === examId) ?? null
}

/** Vrátí zápis vyšetření; když ještě neexistuje, založí ho. */
export function ensureExam(examId: string, who: ExamWho): ExamEntry {
  const found = data.exams.find((e) => e.examId === examId)
  if (found) return found
  const row = emptyExam(uid('ex'), examId, who)
  patch((d) => {
    d.exams.push(row)
  })
  return row
}

export function addCustomExam(name: string, who: ExamWho): ExamEntry {
  const row = { ...emptyExam(uid('ex'), '', who), custom: name }
  patch((d) => {
    d.exams.push(row)
  })
  return row
}

export function updateExam(id: string, fn: (e: ExamEntry) => void): void {
  patch((d) => {
    const e = d.exams.find((x) => x.id === id)
    if (e) fn(e)
  })
}

export function deleteExam(id: string): void {
  patch((d) => {
    d.exams = d.exams.filter((e) => e.id !== id)
  })
}

// --------------------------------------------------------- podpůrná péče ---

export function supportEntries(): SupportEntry[] {
  return [...data.support].sort((a, b) => (b.date ?? '').localeCompare(a.date ?? ''))
}

export function addSupport(supportId = ''): SupportEntry {
  const row = { ...emptySupport(uid('sup'), supportId), date: viewDate() }
  patch((d) => {
    d.support.push(row)
  })
  return row
}

export function updateSupport(id: string, fn: (e: SupportEntry) => void): void {
  patch((d) => {
    const e = d.support.find((x) => x.id === id)
    if (e) fn(e)
  })
}

export function deleteSupport(id: string): void {
  patch((d) => {
    d.support = d.support.filter((e) => e.id !== id)
  })
}

/**
 * Naměřené hodnoty seskupené podle parametru, v čase.
 *
 * Jednotlivá hodnota nic neříká; řada už ano. Řadí se od nejstarší, protože
 * takhle se vývoj čte. Parametry s jedinou hodnotou zůstávají — první měření
 * je taky informace, jen se z něj ještě nedá číst směr.
 */
export function labSeries(): { key: string; name: string; unit: string; body: { onDate: IsoDate; value: number }[] }[] {
  const byKey = new Map<string, { key: string; name: string; unit: string; body: { onDate: IsoDate; value: number }[] }>()
  for (const l of [...data.labs].sort((a, b) => a.onDate.localeCompare(b.onDate))) {
    const cur = byKey.get(l.paramKey)
    if (cur) cur.body.push({ onDate: l.onDate, value: l.value })
    else byKey.set(l.paramKey, { key: l.paramKey, name: l.paramKey, unit: l.unit, body: [{ onDate: l.onDate, value: l.value }] })
  }
  return [...byKey.values()]
}

/** Kolik otázek pro lékaře čeká na odpověď. Číslo patří na dashboard. */
export function openQuestions(): number {
  return data.questions.filter((q) => q.status === 'ceka').length
}

// ---------------------------------------------------------- moje klinika ---

export function clinic(): Clinic {
  return data.clinic
}

export function updateClinic(fn: (c: Clinic) => void): void {
  patch((d) => fn(d.clinic))
}

// -------------------------------------------------------------- IVF karta ---

/**
 * Osobní karta cyklu, o který teď jde.
 *
 * `null`, když žádný cyklus není — na obrazovce pak stojí pozvánka
 * k založení, ne prázdná kostra.
 */
export function journeyCard(): JourneyCard | null {
  const c = currentCycle() ?? [...data.cycles].sort((a, b) => b.startedOn.localeCompare(a.startedOn))[0]
  return c ? buildCard(c, embryosOf(c.id), viewDate()) : null
}

/** Trychtýř „co se stalo s mými vajíčky“ pro daný cyklus. */
export function funnel(cycleId: string): FunnelStep[] {
  const c = cycleById(cycleId)
  return c ? buildFunnel(c, embryosOf(c.id)) : []
}

// ---------------------------------------------------------- moje diagnóza ---

/**
 * Uloží vybrané diagnózy a promítne je do modifikátorů.
 *
 * Modifikátory řídí, jaký obsah se ženě ukazuje. Ručně přidané zůstávají —
 * výběr diagnóz jen přidává, nikdy nemaže něco, co si uživatelka nastavila
 * jinde.
 */
export function setDiagnoses(ids: string[]): void {
  patch((d) => {
    if (!d.profile) return
    d.profile.diagnoses = ids
    const derived = modifiersFromDiagnoses(ids)
    const merged = new Set<ModifierId>([...d.profile.modifiers, ...derived])
    d.profile.modifiers = [...merged]
  })
}

export function toggleDiagnosis(id: string): void {
  const p = profile()
  const cur = p.diagnoses ?? []
  setDiagnoses(cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id])
}

/**
 * Nový transfer v cyklu.
 *
 * První je čerstvý, každý další kryo — po odběru se přenáší z rozmražené
 * zásoby. Uhodnutý druh se dá přepnout, ale ve většině případů sedí.
 */
export function addTransfer(cycleId: string): void {
  updateCycle(cycleId, (c) => {
    const kind = c.transfers.length === 0 && c.kind !== 'fet' ? 'cerstvy' : 'kryo'
    c.transfers.push(emptyTransfer(uid('tr'), kind))
  })
}

export function removeTransfer(cycleId: string, transferId: string): void {
  updateCycle(cycleId, (c) => {
    c.transfers = c.transfers.filter((t) => t.id !== transferId)
    // Test, který visel na smazaném transferu, zůstává — jen ztratí vazbu.
    for (const t of c.hcgTests) if (t.transferId === transferId) t.transferId = ''
  })
}

export function addHcgTest(cycleId: string, kind: 'domaci' | 'krev'): void {
  updateCycle(cycleId, (c) => {
    const t = emptyHcgTest(uid('hcg'), kind)
    t.date = viewDate()
    t.transferId = currentTransfer(c, viewDate())?.id ?? ''
    c.hcgTests.push(t)
  })
}

export function removeHcgTest(cycleId: string, testId: string): void {
  updateCycle(cycleId, (c) => {
    c.hcgTests = c.hcgTests.filter((t) => t.id !== testId)
  })
}

export function toggleCycleMethod(cycleId: string, methodId: string): void {
  updateCycle(cycleId, (c) => {
    c.methods = c.methods.includes(methodId)
      ? c.methods.filter((m) => m !== methodId)
      : [...c.methods, methodId]
  })
}

/**
 * Co je dnes na uživatelce.
 *
 * Skládá se z toho, co aplikace už zná: rozpis léků, hodina triggeru,
 * termíny v kalendáři, zápis dne. Nic navíc se nedoptává.
 */
export function todayBalance(): TodayBalance {
  const date = viewDate()
  const c = currentCycle()
  const st = cycleStatus(c)
  return readToday({
    today: date,
    meds: data.meds.map((m) => ({
      id: m.id,
      name: m.name,
      dose: m.dose,
      times: m.times,
      repeat: m.repeat,
      startOn: m.startOn,
      endOn: m.endOn,
    })),
    checks: data.checks,
    events: allEvents().map((e) => ({
      id: e.id,
      title: e.title,
      kind: e.kind,
      onDate: e.onDate,
      atTime: data.events.find((x) => x.id === e.id)?.atTime ?? null,
      done: eventState(e.id).done,
    })),
    triggerOn: c?.triggerOn ?? null,
    triggerAt: c?.triggerAt ?? '',
    hasJournalToday: journalFor(date) !== null,
    openQuestions: data.questions.filter((q) => q.status === 'ceka').length,
    stage: st?.stage ?? null,
  })
}

/**
 * Co už uživatelka unesla.
 *
 * Sčítá se z toho, co v aplikaci opravdu je: milníky cyklu, odškrtnuté dávky
 * injekčních léků, zapsané vpichy, proběhlé termíny. Nic se nedopočítává
 * odhadem — číslo, které má být důkazem, si nesmí nic domýšlet.
 */
export function endurance(): Endurance {
  const date = viewDate()
  const c = currentCycle()
  const st = cycleStatus(c)

  // Injekční léky se z klíče `med:{datum}:{id}` zpětně dohledají, aby se
  // do počtu nedostaly tablety, gely ani čípky.
  const injectable = new Map(
    data.meds.filter((m) => m.kind === 'injekce').map((m) => [m.id, m.name] as const),
  )
  const doses: { date: IsoDate; med: string }[] = []
  for (const [key, on] of Object.entries(data.checks)) {
    if (!on) continue
    const m = /^med:(\d{4}-\d{2}-\d{2}):(.+)$/.exec(key)
    if (!m) continue
    const name = injectable.get(m[2])
    if (name === undefined) continue
    doses.push({ date: m[1] as IsoDate, med: name })
  }

  return readEndurance({
    today: date,
    cycle: c
      ? {
          kind: c.kind,
          number: c.number,
          dates: {
            cd1: c.cd1On,
            stim: c.stimStartOn,
            trigger: c.triggerOn,
            odber: c.retrievalOn,
            // Po druhém transferu v cyklu je milníkem ten, který už proběhl —
            // plátek se nesmí vyprázdnit jen proto, že je naplánovaný další.
            transfer: currentTransfer(c, date)?.date ?? null,
            beta: betaDate(c),
            konec: c.endedOn,
          } satisfies Partial<Record<StepKey, IsoDate | null>>,
          progress: st?.progress ?? null,
          stageHeadline: st?.headline ?? null,
        }
      : null,
    cycleTotal: data.cycles.length,
    doses,
    shots: data.shots.map((s) => ({ date: s.date, med: s.med })),
    visits: allEvents().map((e) => ({ onDate: e.onDate, kind: e.kind })),
    startedOn: journeyStart(),
  })
}

/**
 * Odkdy je uživatelka na cestě.
 *
 * Nejdřív se ptáme profilu — „od kdy to zkoušíte“ je často roky zpátky a
 * ta doba se počítá. Když v profilu nic není, bere se nejstarší stopa
 * v datech, ať se počítadlo nerozjede až dneškem.
 */
function journeyStart(): IsoDate | null {
  const p = profile()
  const fromProfile =
    p.tryingSince ?? p.diagnosticsStartedOn ?? p.stimulationStartOn ?? p.lastPeriodOn ?? null
  if (fromProfile) return fromProfile

  const traces = [
    ...data.cycles.map((c) => c.cd1On ?? c.startedOn),
    ...Object.keys(data.journal),
    ...data.shots.map((s) => s.date),
  ].filter((d): d is IsoDate => Boolean(d))
  if (traces.length === 0) return null
  return traces.sort()[0]
}

// -------------------------------------------------------------- příznaky ---

/** Zápisy příznaků pro jeden den. */
export function symptomLogsOn(date: IsoDate): SymptomLog[] {
  return data.symptomLogs.filter((l) => l.date === date)
}

/**
 * Zaškrtnutí příznaku.
 *
 * Deník drží seznam („co jsem dnes měla“), `symptomLogs` k tomu přidává
 * intenzitu a čas. Obojí se musí měnit naráz, jinak se rozejde to, co je
 * vidět v Zápisu, s tím, co se počítá ve Statistikách.
 */
export function toggleSymptomLog(date: IsoDate, symptomId: string): void {
  patch((d) => {
    const has = d.symptomLogs.some((l) => l.date === date && l.symptomId === symptomId)
    if (has) {
      d.symptomLogs = d.symptomLogs.filter((l) => !(l.date === date && l.symptomId === symptomId))
      return
    }
    d.symptomLogs.push({ id: uid('sl'), date, at: '', symptomId, intensity: null, note: '' })
  })
}

/** Intenzita 0–10. Mimo rozsah se ořízne, ať se do dat nedostane nesmysl. */
export function setSymptomIntensity(date: IsoDate, symptomId: string, intensity: number): void {
  const value = Math.max(0, Math.min(10, Math.round(intensity)))
  patch((d) => {
    const row = d.symptomLogs.find((l) => l.date === date && l.symptomId === symptomId)
    if (row) row.intensity = value
    else d.symptomLogs.push({ id: uid('sl'), date, at: '', symptomId, intensity: value, note: '' })
  })
}

export function deleteCycle(id: string): void {
  patch((d) => {
    d.cycles = d.cycles.filter((c) => c.id !== id)
  })
}
