import type { PhaseId } from '../domain/phases'
import type { ModifierId, TopicId } from '../domain/profile'

export const CONTENT_KINDS = [
  'article',
  'video',
  'audio',
  'podcast',
  'checklist',
  'story',
  'course',
  'quiz',
  'glossary',
  'live',
] as const

export type ContentKind = (typeof CONTENT_KINDS)[number]

export const KIND_LABELS: Record<ContentKind, string> = {
  article: 'Článek',
  video: 'Video',
  audio: 'Meditace',
  podcast: 'Podcast',
  checklist: 'Checklist',
  story: 'Příběh',
  course: 'Kurz',
  quiz: 'Kvíz',
  glossary: 'Pojem',
  live: 'Živě',
}

export const KIND_ICONS: Record<ContentKind, string> = {
  article: '❧',
  video: '▷',
  audio: '◍',
  podcast: '◉',
  checklist: '✓',
  story: '❦',
  course: '❖',
  quiz: '?',
  glossary: '§',
  live: '●',
}

/**
 * Vizuální identita položky. Místo fotobanky používáme pojmenované
 * přechody z palety značky — vypadá to draž a nerozbije se to.
 */
export const HERO_TOKENS = [
  'champagne',
  'taupe',
  'blush',
  'sage',
  'sky',
  'linen',
  'sand',
  'dusk',
  'dawn',
  'pearl',
] as const

export type HeroToken = (typeof HERO_TOKENS)[number]

export interface ContentItem {
  id: string
  kind: ContentKind
  title: string
  /** Jedna věta, která prodá otevření. Zobrazuje se na kartě. */
  excerpt: string
  /** Delší text v jednoduchém markdownu (##, ###, -, 1., >, **). */
  body: string
  /** Délka čtení / poslechu v minutách. */
  minutes: number

  /** Fáze, do kterých obsah patří. Prázdné = obecný obsah. */
  phases: PhaseId[]
  /** Rozsah dní ve fázi, kdy je obsah nejrelevantnější. Např. [3, 7] = 3.–7. den. */
  dayRange?: [number, number]

  topics: TopicId[]
  /** Obsah cílený na konkrétní situaci (císař, dvojčata, kojení…). */
  modifiers?: ModifierId[]
  /** Obsah, který je pro danou situaci nevhodný — nikdy se nedoporučí. */
  excludeModifiers?: ModifierId[]

  /** `essential` = základ fáze, `deep` = pro toho, kdo chce víc, `comfort` = úleva. */
  level: 'essential' | 'deep' | 'comfort'
  hero: HeroToken
  author?: string
  /** Odborná garance — zobrazuje se u zdravotního obsahu. */
  reviewedBy?: string
  /** Zdroje, pokud jde o medicínský obsah. */
  sources?: string[]
  /** Datum publikace — pohání „nové tento týden“. */
  publishedOn: string
  /** Zvýšení priority v doporučování (0–1). Ruční kurátorství. */
  boost?: number
  /** Položky checklistu, pokud kind === 'checklist'. */
  checklist?: ChecklistEntry[]
  /** Otázky kvízu, pokud kind === 'quiz'. */
  quiz?: QuizQuestion[]
  /** Kapitoly kurzu, pokud kind === 'course'. */
  chapters?: { title: string; minutes: number; body: string }[]
  /** U videa/audia: popis toho, co uvidí/uslyší (nemáme reálné soubory). */
  mediaNote?: string
}

export interface ChecklistEntry {
  id: string
  text: string
  hint?: string
  group?: string
  /** Nepovinné položky se nezapočítávají do „hotovo“. */
  optional?: boolean
}

export interface QuizQuestion {
  q: string
  options: string[]
  correct: number
  explain: string
}

/**
 * Denní karta — to, co uživatelka uvidí nahoře na domovské stránce.
 * Právě tyhle karty dělají z aplikace „něco, co žije s ní“.
 */
export interface DailyCard {
  id: string
  /** Fáze, pro které karta platí. */
  phases: PhaseId[]
  /** Přesný den ve fázi, nebo rozsah. Přesná shoda vyhrává nad rozsahem. */
  day?: number
  dayRange?: [number, number]
  modifiers?: ModifierId[]
  excludeModifiers?: ModifierId[]

  /** Nadpis dne — „Vaše embryo se právě zahnizďuje.“ */
  headline: string
  /** 2–4 věty. Konkrétní, laskavé, bez vaty. */
  body: string
  /** Co se dnes může dít — krátké odrážky. */
  whatsHappening?: string[]
  /** Dnešní malý úkol. Musí být splnitelný do 10 minut. */
  task?: string
  /** Otázka k zamyšlení pro večerní reflexi. */
  reflection?: string
  /** Praktický tip. */
  tip?: string
  /** Kdy volat lékaře — zobrazuje se výrazně, ale bez strašení. */
  callDoctorIf?: string[]
}

/** Krátké povzbuzení / citát dne. */
export interface Encouragement {
  id: string
  text: string
  author?: string
  /** Tón, se kterým se páruje na fázi. */
  tone: 'hopeful' | 'intense' | 'tender' | 'grieving' | 'practical' | 'joyful'
}

/** Pojem ze slovníku — AI Gabi i články na něj odkazují. */
export interface GlossaryTerm {
  term: string
  aliases?: string[]
  short: string
  long: string
  topics: TopicId[]
}

/** Produkt v marketplace. */
export interface Product {
  id: string
  name: string
  category: string
  /** Proč právě teď — tohle je celý smysl našeho marketplace. */
  whyNow: string
  /** Orientační cena v Kč. `null` nebo `0` = hrazeno / individuální. */
  priceFrom: number | null
  phases: PhaseId[]
  modifiers?: ModifierId[]
  excludeModifiers?: ModifierId[]
  /** Zúžení relevance na část těhotenství nebo věku dítěte. */
  rating: number
  reviews: number
  vendor: string
  kind: 'product' | 'service'
  hero: HeroToken
}

/** Laboratorní parametr — pro rozpoznávání zpráv a health dashboard. */
export interface LabParameter {
  key: string
  name: string
  unit: string
  /** Vzory, které hledáme v OCR textu. */
  patterns: string[]
  /** Orientační rozmezí. NIKDY se neprezentuje jako diagnóza. */
  reference?: { low?: number; high?: number; note: string }
  /** Vysvětlení pro laika. */
  explain: string
  topics: TopicId[]
  /** Kontext, ve kterém se hodnota měří. */
  context: 'cycle' | 'general' | 'male'
  /** Očekává se růst v čase (beta HCG)? Ovlivňuje graf. */
  trend?: 'rising' | 'stable' | 'falling'
}

export type ContentPack = {
  items?: ContentItem[]
  dailyCards?: DailyCard[]
  encouragements?: Encouragement[]
  glossary?: GlossaryTerm[]
  products?: Product[]
}
