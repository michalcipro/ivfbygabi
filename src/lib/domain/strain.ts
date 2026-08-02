import type { IsoDate } from './profile'
import type { JourneyState } from './journey'
import { daysBetween } from './dates'

/**
 * Nůžky dne.
 *
 * Aplikace nehodnotí uživatelku. Hodnotí ten den.
 *
 * Devátý den stimulace s odběrem nazítří je objektivně náročnější než třetí
 * den. A to se dá spočítat z protokolu, bez jediného jejího zápisu a bez
 * jakéhokoli soudu o ní. Tomu říkáme `demand`: co dnešek žádá.
 *
 * Proti tomu stojí `reserve`: co na to má. To už je čistě z jejího zápisu.
 * Nízká rezerva není selhání, je to informace. Aplikace podle ní ubere.
 *
 * Rozdíl mezi nimi jsou nůžky a řídí celou aplikaci.
 *
 * ---
 * HRANICE, KTERÁ SE NESMÍ PŘEKROČIT:
 * Žádné z těchhle čísel není zdravotní údaj. Nůžky nepředpovídají výsledek
 * léčby, nehodnotí hodnoty z odběrů a nikdy neřeknou, že něco je špatně.
 * Popisují náročnost dne a to, jak ho žena nesla. Nic víc.
 * ---
 *
 * Čistá funkce bez závislosti na DB i na prohlížeči, aby stejná čísla
 * vznikala na serveru i v klientovi.
 */

/** Zápis z deníku, zúžený na to, co motor potřebuje. */
export interface DayLog {
  mood: number
  anxiety: number
  hope: number
  energy: number
  symptoms: string[]
}

/** Událost v kalendáři, zúžená na to, co motor potřebuje. */
export interface DayEvent {
  onDate: IsoDate
  kind: string
}

export interface StrainInput {
  state: JourneyState
  date: IsoDate
  events: DayEvent[]
  /** Kolik léků se ten den bere nebo píchá. */
  medCount: number
  log: DayLog | null
}

export type ScissorState = 'nezapsano' | 'zavrene' | 'rovnovaha' | 'otevrene' | 'siroke'

export interface Part {
  label: string
  points: number
}

export interface DayReading {
  /** Co dnešek žádá, 0–10. Nezávisí na tom, co si zapsala. */
  demand: number
  /** Co na to má, 0–10. `null`, dokud si den nezapíše. */
  reserve: number | null
  /** demand − reserve. Kladné = nůžky otevřené. */
  gap: number | null
  state: ScissorState
  /** Z čeho se to složilo. Ukazuje se uživatelce. Nic není černá skříňka. */
  demandParts: Part[]
  reserveParts: Part[]
  /** Jedna věta, proč je dnešek takový, jaký je. */
  headline: string
  /** Co s tím. Nikdy ne výtka. */
  advice: string
}

// ------------------------------------------------------------------ žádá ---

/** Základní náročnost podle toho, kde na cestě je. */
const BASE: Record<JourneyState['group'], number> = {
  planning: 2,
  diagnosis: 3,
  treatment: 4,
  waiting: 5,
  loss: 7,
}

/** Události, které den samy o sobě zatíží. Číslo platí pro „dnes“. */
const EVENT_WEIGHT: Record<string, number> = {
  odber: 3,
  transfer: 3,
  hcg: 3,
  punkce: 3,
  kontrola: 1.5,
  porod: 3,
  operace: 3,
  vysetreni: 1.5,
  vlastni: 0.5,
}

function eventLoad(events: DayEvent[], date: IsoDate): Part[] {
  const parts: Part[] = []
  let today = 0
  let tomorrow = 0
  for (const e of events) {
    const w = EVENT_WEIGHT[e.kind] ?? 1
    const d = daysBetween(date, e.onDate)
    if (d === 0) today = Math.max(today, w)
    // Den před zákrokem bývá subjektivně těžší než zákrok sám, proto se
    // zítřek započítává, jen o něco slabší.
    else if (d === 1) tomorrow = Math.max(tomorrow, w * 0.8)
  }
  if (today > 0) parts.push({ label: 'Dnes vás čeká zákrok nebo kontrola', points: today })
  if (tomorrow > 0) parts.push({ label: 'Zítra vás čeká zákrok nebo kontrola', points: tomorrow })
  return parts
}

/**
 * Přirážka za konkrétní den ve fázi. Křivka náročnosti není plochá.
 * Konec stimulace a druhý týden čekání jsou prokazatelně nejhorší.
 */
function phaseDayLoad(state: JourneyState): Part[] {
  const parts: Part[] = []
  const d = state.dayInPhase

  if (state.phase.id === 'stimulation' && d >= 6) {
    parts.push({ label: 'Konec stimulace. Tělo je na hraně', points: d >= 9 ? 2 : 1 })
  }
  if (state.group === 'waiting') {
    const dpt = state.daysPastTransfer
    // Druhý týden čekání je horší než první. První dny se ještě dá zaměstnat.
    if (dpt !== null && dpt >= 6) parts.push({ label: 'Druhý týden čekání', points: 2 })
    else if (dpt !== null && dpt >= 3) parts.push({ label: 'Čekání se prodlužuje', points: 1 })
  }
  if (state.group === 'loss' && state.dayInPhase <= 21) {
    parts.push({ label: 'Čerstvá ztráta', points: 1.5 })
  }
  return parts
}

function demandOf(input: StrainInput): { value: number; parts: Part[] } {
  const { state, events, medCount, date } = input
  const parts: Part[] = [{ label: state.phase.name, points: BASE[state.group] }]

  parts.push(...phaseDayLoad(state))
  parts.push(...eventLoad(events, date))

  if (medCount > 0) {
    // Dvě injekce denně jsou znatelně jiný den než jedna tableta.
    parts.push({ label: `Léky a injekce (${medCount})`, points: Math.min(1.5, medCount * 0.5) })
  }

  const raw = parts.reduce((a, p) => a + p.points, 0)
  return { value: clamp(Math.round(raw), 0, 10), parts }
}

// ------------------------------------------------------------- máte na to ---

function reserveOf(log: DayLog | null): { value: number | null; parts: Part[] } {
  if (!log) return { value: null, parts: [] }

  const parts: Part[] = [
    { label: 'Nálada', points: log.mood },
    { label: 'Klid (obrácená úzkost)', points: 6 - log.anxiety },
    { label: 'Naděje', points: log.hope },
    { label: 'Energie', points: log.energy },
  ]

  // Čtyři osy po 1–5 dávají 4–20. Přeškálováno na 0–10.
  const sum = parts.reduce((a, p) => a + p.points, 0)
  let value = ((sum - 4) / 16) * 10

  if (log.symptoms.length > 0) {
    const penalty = Math.min(2, log.symptoms.length * 0.4)
    parts.push({ label: `Tělo se ozývá (${log.symptoms.length})`, points: -penalty })
    value -= penalty
  }

  return { value: clamp(Math.round(value), 0, 10), parts }
}

// ------------------------------------------------------------------ čtení ---

function stateOf(gap: number | null): ScissorState {
  if (gap === null) return 'nezapsano'
  if (gap >= 5) return 'siroke'
  if (gap >= 2) return 'otevrene'
  if (gap >= -1) return 'rovnovaha'
  return 'zavrene'
}

export const STATE_LABEL: Record<ScissorState, string> = {
  nezapsano: 'Zatím nezapsáno',
  zavrene: 'Nůžky zavřené',
  rovnovaha: 'V rovnováze',
  otevrene: 'Nůžky otevřené',
  siroke: 'Nůžky dokořán',
}

function adviceFor(s: ScissorState, state: JourneyState): string {
  switch (s) {
    case 'nezapsano':
      return 'Zapište si dnešek a uvidíte druhou půlku prstence. Trvá to dvacet vteřin.'
    case 'siroke':
      return 'Dnes neplánujte nic navíc. Vybrali jsme vám kratší obsah a dýchání. A klidně to nechte být i to.'
    case 'otevrene':
      return 'Dnes ubereme. Kratší čtení, žádné úkoly navíc. Co se nestihne, počká.'
    case 'rovnovaha':
      return `Den a vaše síly si zhruba odpovídají. Dobrý čas na to, co ${state.group === 'treatment' ? 'chcete probrat s lékařem' : 'jste odkládala'}.`
    case 'zavrene':
      return 'Máte dnes rezervu navíc. Kdyby vás něco zajímalo do hloubky, tohle je ta chvíle.'
  }
}

function headlineFor(demand: number, state: JourneyState, parts: Part[]): string {
  const top = [...parts].sort((a, b) => b.points - a.points)[0]
  if (demand >= 8) return `Jeden z nejnáročnějších dní. ${top ? top.label + '.' : ''}`.trim()
  if (demand >= 6) return `Náročnější den. ${top ? top.label + '.' : ''}`.trim()
  if (demand >= 4) return `Běžný den ve fázi ${state.phase.name.toLowerCase()}.`
  return 'Klidný den. Nic velkého se dnes neděje. A to je taky v pořádku.'
}

export function readDay(input: StrainInput): DayReading {
  const d = demandOf(input)
  const r = reserveOf(input.log)
  const gap = r.value === null ? null : d.value - r.value
  const s = stateOf(gap)

  return {
    demand: d.value,
    reserve: r.value,
    gap,
    state: s,
    demandParts: d.parts,
    reserveParts: r.parts,
    headline: headlineFor(d.value, input.state, d.parts),
    advice: adviceFor(s, input.state),
  }
}

// ------------------------------------------------------------------ vzorec ---

export interface Pattern {
  text: string
  /** Kolik dní vzorec staví. Pod 10 se nezobrazuje. */
  sample: number
}

/**
 * Co jsme si všimli u ní.
 *
 * Zatím jediný vzorec, který má dost dat a dá se z něj něco udělat:
 * jestli se nůžky rozevírají spíš den PŘED událostí, nebo v den události.
 * U hodně žen je horší ten předchozí večer. A to je akce, kterou umíme
 * nabídnout.
 */
export function findPattern(
  readings: { date: IsoDate; gap: number | null }[],
  events: DayEvent[],
): Pattern | null {
  const withGap = readings.filter((r) => r.gap !== null)
  if (withGap.length < 10) return null

  const eventDates = new Set(events.map((e) => e.onDate))
  const before: number[] = []
  const on: number[] = []
  const rest: number[] = []

  for (const r of withGap) {
    const isEvent = eventDates.has(r.date)
    const isDayBefore = [...eventDates].some((d) => daysBetween(r.date, d) === 1)
    if (isEvent) on.push(r.gap!)
    else if (isDayBefore) before.push(r.gap!)
    else rest.push(r.gap!)
  }

  if (before.length < 2 || on.length < 2) return null
  const avg = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length
  const b = avg(before)
  const o = avg(on)
  if (Math.abs(b - o) < 1) return null

  return b > o
    ? {
        text: 'Nůžky se vám rozevírají víc den před kontrolou než v den zákroku. Zkusíme vám večer předtím nabídnout dýchání.',
        sample: withGap.length,
      }
    : {
        text: 'Nejhorší jsou pro vás dny samotných zákroků, ne čekání před nimi. Na ty dny vám necháme prostor prázdný.',
        sample: withGap.length,
      }
}

// ------------------------------------------------------------------ utils ---

function clamp(n: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, n))
}
