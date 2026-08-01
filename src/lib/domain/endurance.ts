import type { IsoDate } from './profile'
import type { CycleKind } from './cycle'
import { daysBetween } from './dates'

/**
 * Co už jste unesla.
 *
 * PROČ TAHLE METRIKA:
 *
 * Nejčastější pocit v léčbě není strach ani smutek. Je to dojem, že se nic
 * neděje — pořád stejná injekce, pořád stejná kontrola, pořád stejné čekání.
 * Léčba se v tom opakování rozmaže a žena po půl roce upřímně neví, jestli
 * se posunula.
 *
 * Aplikace to ale ví přesně. Zná milníky cyklu, odškrtnuté dávky, zapsané
 * vpichy, termíny v kalendáři. Tahle metrika z toho nedělá skóre. Jenom
 * sečte, co se opravdu stalo, a položí to ženě před oči:
 *
 *   47 injekcí. 12 kontrol. 214 dní na cestě.
 *
 * Ta čísla si nikdo nepamatuje a nikdo je neřekne nahlas. Jsou to přitom
 * jediné doložitelné uznání, které v IVF existuje — důkaz, že to, co jí
 * připadá jako stojatá voda, byl výkon.
 *
 * DVA OKRUHY, DVĚ RŮZNÉ VĚCI:
 *
 * Vnější věnec jsou milníky cyklu. Vyplňují se skokem — den odběru se plátek
 * rozsvítí a pak čtrnáct dní nic. Vnitřní kruh je čas: jak daleko cyklus je.
 * Ten se hýbe každý den. Právě proto tu jsou oba — ve dvoutýdenním čekání,
 * kdy se žádný milník nepřidá, je vidět aspoň to, že se den ke dni posouvá.
 *
 * HRANICE: nic z toho není zdravotní údaj. Metrika nehodnotí tělo, nepočítá
 * šance a neporovnává uživatelku s nikým jiným. Počítá, co se stalo.
 */

// ------------------------------------------------------------------ dráha ---

export type StepKey = 'cd1' | 'stim' | 'trigger' | 'odber' | 'transfer' | 'beta' | 'konec'

/** Jeden plátek vnějšího věnce. */
export interface TrackStep {
  key: StepKey
  label: string
  /** Datum, pokud ho uživatelka zadala. */
  date: IsoDate | null
  /** Má ho za sebou? Datum v minulosti nebo dnes. */
  passed: boolean
}

/**
 * Které milníky u daného druhu cyklu vůbec dávají smysl.
 *
 * Kryotransfer nemá odběr a monitorovaný cyklus nemá stimulaci — kdyby se
 * jim ty plátky kreslily, věnec by hlásil výpadek tam, kde žádný není.
 */
const TRACK: Record<CycleKind, StepKey[]> = {
  ivf: ['cd1', 'stim', 'trigger', 'odber', 'transfer', 'beta', 'konec'],
  fet: ['cd1', 'stim', 'transfer', 'beta', 'konec'],
  iui: ['cd1', 'stim', 'trigger', 'transfer', 'beta', 'konec'],
  monitorovany: ['cd1', 'trigger', 'beta', 'konec'],
}

/** Bez cyklu se kreslí běžná dráha IVF — je to nejčastější případ. */
const DEFAULT_TRACK = TRACK.ivf

/**
 * Popisky. Stejné datum se u různých druhů cyklu jmenuje jinak: u IVF je to
 * stimulace, u kryotransferu příprava sliznice, a splést to dvoje by v kartě
 * vypadalo jako chyba lékaře.
 */
function stepLabel(key: StepKey, kind: CycleKind): string {
  switch (key) {
    case 'cd1':
      return 'CD1 — první den'
    case 'stim':
      return kind === 'fet' ? 'Příprava sliznice' : 'Začátek stimulace'
    case 'trigger':
      return kind === 'ivf' || kind === 'iui' ? 'Trigger' : 'Ovulace'
    case 'odber':
      return 'Odběr vajíček'
    case 'transfer':
      return kind === 'iui' ? 'Inseminace' : 'Transfer'
    case 'beta':
      return 'Beta HCG'
    case 'konec':
      return 'Uzavření cyklu'
  }
}

// ------------------------------------------------------------------ vstup ---

/** Data cyklu, ze kterých se dráha skládá. */
export interface CycleFacts {
  kind: CycleKind
  /** Pořadové číslo cyklu, jak ho vidí uživatelka. */
  number: number
  dates: Partial<Record<StepKey, IsoDate | null>>
  /** Postup cyklem 0–1 z `readCycle`. */
  progress: number | null
  /** Krátký popisek stavu do štítku — „7. den stimulace“. */
  stageHeadline: string | null
}

/** Zápis dávky nebo vpichu. Obojí se sjednocuje, viz `countInjections`. */
export interface InjectionMark {
  date: IsoDate
  /** Název léku. Prázdný název je pořád platný záznam. */
  med: string
}

export interface EnduranceInput {
  today: IsoDate
  cycle: CycleFacts | null
  /** Kolik cyklů má uživatelka celkem zapsaných. */
  cycleTotal: number
  /** Odškrtnuté dávky injekčních léků. */
  doses: InjectionMark[]
  /** Zapsané vpichy z mapy břicha. */
  shots: InjectionMark[]
  /** Termíny z kalendáře — projdou jen ty, které opravdu byly. */
  visits: { onDate: IsoDate; kind: string }[]
  /** Odkdy je uživatelka na cestě. */
  startedOn: IsoDate | null
}

// --------------------------------------------------------------- pomocníci ---

/** Číslo je součástí výrazu — „1 injekce“, „3 injekce“, „47 injekcí“. */
function cz(n: number, one: string, few: string, many: string): string {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`
}

/**
 * „z“, nebo „ze“?
 *
 * Předložka se vokalizuje podle toho, jak číslo zní vyslovené, ne jak se
 * píše: ze dvou, ze tří, ze čtyř, z pěti, ze šesti, ze sedmi, z osmi.
 * Číslice to zakryje, ale čtenářka si ji v hlavě přečte slovem — a „5 z 7“
 * o to zakopne. Tohle je jediné místo, kde se to rozhoduje.
 */
export function zNum(n: number): string {
  return n === 2 || n === 3 || n === 4 || n === 6 || n === 7 ? 'ze' : 'z'
}

/**
 * Kolik injekcí za tím vším je.
 *
 * Jedno píchnutí se v aplikaci dá zapsat dvakrát: odškrtnutím dávky v Lécích
 * a zapsáním místa vpichu v Zápisu. Sečíst obojí by ženě nadsadilo číslo,
 * které má být důkazem — a nadsazený důkaz není důkaz. Proto se záznamy
 * sjednocují přes dvojici den + lék.
 */
export function countInjections(doses: InjectionMark[], shots: InjectionMark[]): number {
  const seen = new Set<string>()
  for (const m of [...doses, ...shots]) {
    seen.add(`${m.date}|${m.med.trim().toLowerCase()}`)
  }
  return seen.size
}

/**
 * Návštěvy, které se počítají jako kontrola.
 *
 * Připomínka na lék ani vlastní poznámka v kalendáři kontrola není. Kdyby se
 * počítaly, číslo by rostlo samo od sebe a přestalo by něco znamenat.
 */
const VISIT_KINDS = new Set(['kontrola', 'uz', 'odber', 'transfer', 'hcg'])

export function countCheckups(
  visits: { onDate: IsoDate; kind: string }[],
  today: IsoDate,
): number {
  return visits.filter((v) => VISIT_KINDS.has(v.kind) && v.onDate <= today).length
}

// ------------------------------------------------------------------ výstup ---

/**
 * Co stojí ve velkém čísle.
 *
 * Nula tam být nesmí. „0 ze 7 milníků za vámi“ je první věta, kterou by
 * nová uživatelka na hlavní obrazovce viděla — a metrika, která má být
 * uznáním, by začala tím, že nemá co uznat. Než založí cyklus, počítají se
 * proto dny na cestě: ty už za sebou má, často roky, a nikdo je nesečetl.
 */
export interface BigNumber {
  value: number
  /** Jmenovatel, když číslo něco z něčeho je. */
  of: number | null
  caption: string
}

export interface Endurance {
  steps: TrackStep[]
  /** Kolik milníků má za sebou. */
  passed: number
  total: number
  big: BigNumber
  /** Kolikátý cyklus a kolik jich je celkem. */
  cycleNumber: number | null
  cycleTotal: number
  /** Postup cyklem 0–1 pro vnitřní kruh. `null` = kruh se nekreslí. */
  cycleProgress: number | null
  injections: number
  checkups: number
  /** Dní na cestě včetně dneška. */
  days: number | null
  /** Tučná věta pod květem — samé součty. */
  headline: string
  /** Věta za ní. Vysvětluje vnitřní kruh. */
  detail: string
  /** Štítek pod legendou. */
  pill: string
}

export function readEndurance(input: EnduranceInput): Endurance {
  const { today, cycle } = input
  const kind = cycle?.kind ?? 'ivf'
  const keys = cycle ? TRACK[cycle.kind] : DEFAULT_TRACK

  const steps: TrackStep[] = keys.map((key) => {
    const date = cycle?.dates[key] ?? null
    return { key, label: stepLabel(key, kind), date, passed: date !== null && date <= today }
  })

  const passed = steps.filter((s) => s.passed).length
  const injections = countInjections(input.doses, input.shots)
  const checkups = countCheckups(input.visits, today)
  const rawDays = input.startedOn ? daysBetween(input.startedOn, today) + 1 : null
  const days = rawDays !== null && rawDays >= 1 ? rawDays : null
  const total = steps.length

  const big: BigNumber =
    passed > 0
      ? { value: passed, of: total, caption: 'Milníků za vámi' }
      : days !== null
        ? { value: days, of: null, caption: days === 1 ? 'Den na cestě' : 'Dní na cestě' }
        : { value: total, of: null, caption: 'Milníků před vámi' }

  return {
    steps,
    passed,
    total,
    big,
    cycleNumber: cycle?.number ?? null,
    cycleTotal: input.cycleTotal,
    cycleProgress: cycle?.progress ?? null,
    injections,
    checkups,
    days,
    // Dny se do věty nepíšou dvakrát. Když už jsou ve velkém čísle, zbyde
    // věta na to ostatní — a když nezbyde nic, radši se nemluví.
    headline: sumSentence(injections, checkups, big.caption.endsWith('na cestě') ? null : days),
    detail: ringSentence(cycle, input.cycleTotal),
    pill: cycle?.stageHeadline?.trim() || (input.cycleTotal > 0 ? 'Mezi cykly' : 'Před prvním cyklem'),
  }
}

/**
 * „47 injekcí. 12 kontrol. 214 dní na cestě.“
 *
 * Nuly se vynechávají. Věta „0 injekcí“ by prvního dne vypadala jako výtka,
 * a to je přesně opačný účinek, než jaký tahle metrika má mít.
 */
function sumSentence(injections: number, checkups: number, days: number | null): string {
  const parts: string[] = []
  if (injections > 0) parts.push(cz(injections, 'injekce', 'injekce', 'injekcí'))
  if (checkups > 0) parts.push(cz(checkups, 'kontrola', 'kontroly', 'kontrol'))
  if (days !== null) parts.push(`${cz(days, 'den', 'dny', 'dní')} na cestě`)
  if (parts.length === 0) return 'Zatím tu není co sčítat — a to je taky výsledek.'
  return `${parts.join('. ')}.`
}

function ringSentence(cycle: CycleFacts | null, total: number): string {
  if (!cycle) {
    return total > 0
      ? 'Žádný cyklus teď neběží. Plátky ukazují dráhu, kterou znáte.'
      : 'Až založíte cyklus, plátky se začnou plnit jeho milníky.'
  }
  if (total > 1) {
    return `Vnitřní kruh ukazuje, jak daleko je ${cycle.number}. cyklus ${zNum(total)} ${total}.`
  }
  return 'Vnitřní kruh ukazuje, jak daleko je tenhle cyklus.'
}
