import type { IsoDate } from './profile'
import { addDays, czDays, daysBetween, formatCzechDateShort } from './dates'
import {
  blastocystsOf,
  currentTransfer,
  cycleTitle,
  embryosTransferred,
  KIND_LABEL,
  methodLabel,
  OUTCOME_LABEL,
  type CycleOutcome,
  type CycleRow,
} from './cycle'

/**
 * Statistiky přes cykly.
 *
 * Po třetím cyklu si žena nepamatuje, kolik vajíček bylo podruhé a jak dlouho
 * se tehdy stimulovalo. Tenhle modul jí to spočítá z toho, co má zapsané.
 * A nic víc. Žádná predikce, žádné šance, žádné „to vypadá dobře“.
 * Sečíst zapsaná čísla je informace. Cokoli nad rámec součtu by byl odhad,
 * na který nemá aplikace právo ani data.
 *
 * Pravidlo, které drží celý soubor: chybějící údaj je `null`, ne nula.
 * Nula znamená „bylo nula vajíček“. To je tvrdá věta a nesmí zaznít omylem.
 *
 * Čistý doménový modul. Žádný prohlížeč, žádné HTML, žádné akce.
 *
 * Exportuje:
 *   CycleNumbers, Overall, MedRow, SymptomLog (strukturální tvary)
 *   numbersFor(c), overall(cycles), adherence(meds, checks, from, to),
 *   topSymptoms(logs, labelOf, limit?), compare(a, b), doseKey(date, medId)
 *
 * Žádné nové CSS třídy. Modul nevrací HTML.
 */

// ------------------------------------------------------- strukturální tvary ---

/**
 * Minimální tvar léku, který statistika potřebuje. Plný `MedRow` žije
 * v klientském store; tady je schválně jen to, co se opravdu počítá, aby
 * doménový modul nezávisel na úložišti.
 */
export interface MedRow {
  id: string
  repeat: 'denne' | 'obden' | 'jednou'
  startOn: IsoDate | null
  endOn: IsoDate | null
}

/** Minimální tvar zápisu příznaku. */
export interface SymptomLog {
  symptomId: string
  /** 0–10. */
  intensity: number | null
}

// --------------------------------------------------------------- pomocníci ---

/** Prázdná hodnota v tabulce. Pomlčka, ne nula. Nevíme není totéž co nic. */
const DASH = '–'

function round(n: number, decimals: number): number {
  const f = 10 ** decimals
  return Math.round(n * f) / f
}

/**
 * Bezpečné přečtení zapsaného počtu. Nesmysly (NaN, nekonečno, záporná
 * čísla) bereme jako nezadané. Radši ať chybí, než aby lhaly v součtu.
 */
function num(v: number | null | undefined): number | null {
  if (v === null || v === undefined) return null
  if (!Number.isFinite(v) || v < 0) return null
  return v
}

/**
 * Podíl dvou počtů jako 0–1. `null`, když chybí čitatel, jmenovatel,
 * nebo když je jmenovatel nula. Dělit nulou nejde a „0 %“ by bylo tvrzení.
 *
 * Podíl se neořezává na 1. Když je oplozených víc než zralých, je to
 * překlep v zápisu a uživatelka ho má vidět, ne aby ho statistika schovala.
 */
function rate(part: number | null, whole: number | null): number | null {
  if (part === null || whole === null || whole <= 0) return null
  return round(part / whole, 3)
}

/** Průměr z hodnot, které jsou zapsané. `null`, když není z čeho počítat. */
function avg(values: number[], decimals: number): number | null {
  if (values.length === 0) return null
  const sum = values.reduce((a, b) => a + b, 0)
  return round(sum / values.length, decimals)
}

/** Klíč odškrtnuté dávky. Stejný formát používá zbytek aplikace. */
export function doseKey(date: IsoDate, medId: string): string {
  return `med:${date}:${medId}`
}

// ------------------------------------------------------------ jeden cyklus ---

export interface CycleNumbers {
  cycleId: string
  title: string
  number: number
  /** Délka stimulace ve dnech. */
  stimDays: number | null
  eggs: number | null
  mature: number | null
  fertilized: number | null
  /** Kolik embryí se vyvíjelo třetí den kultivace. */
  day3: number | null
  /** Součet pátého a šestého dne. Kolik jich došlo do blastocysty. */
  blastocysts: number | null
  frozen: number | null
  /** Kolik transferů cyklus měl. Kryotransfery z téže zásoby se počítají. */
  transfers: number
  /** Kolik embryí se dohromady přeneslo, přes všechny transfery. */
  embryosTransferred: number | null
  /** 0–1. Oplozená ze zralých; když zralá nejsou zapsaná, ze všech vajíček. */
  fertilizationRate: number | null
  /** 0–1. Blastocysty z oplozených. */
  blastRate: number | null
  outcome: CycleOutcome
}

/**
 * Kolik dní se stimulovalo.
 *
 * Počítá se od prvního dne stimulace do triggeru včetně. Trigger je
 * poslední den, kdy se píchá. Když trigger zapsaný není, použije se den
 * odběru a ten se do stimulace nepočítá (v den odběru se už nepíchá).
 * Když data nedávají pořadí (odběr před stimulací), vrací `null`.
 */
function stimDaysOf(c: CycleRow): number | null {
  if (!c.stimStartOn) return null
  let days: number | null = null
  if (c.triggerOn) days = daysBetween(c.stimStartOn, c.triggerOn) + 1
  else if (c.retrievalOn) days = daysBetween(c.stimStartOn, c.retrievalOn)
  if (days === null || days < 1) return null
  return days
}

/** Proběhl v cyklu odběr? Stačí datum nebo zapsaný počet vajíček. */
function hasRetrieval(c: CycleRow): boolean {
  return c.retrievalOn !== null || num(c.eggs) !== null
}

/** Proběhl transfer? Stačí datum nebo počet přenesených embryí. */
function hasTransfer(c: CycleRow): boolean {
  return c.transfers.some((t) => t.date !== null || (num(t.embryos) ?? 0) > 0)
}

/**
 * Skončil cyklus těhotenstvím?
 *
 * Počítá se i výsledek „ztráta“. Těhotenství nastalo, jen neskončilo dobře.
 * Kdyby se ztráta nepočítala, statistika by tvrdila, že se nic nestalo, a to
 * je vůči uživatelce nepřijatelné. V UI se proto tohle číslo nikdy nesmí
 * popsat jako „úspěch“, jen jako potvrzené těhotenství.
 */
function isPregnancy(c: CycleRow): boolean {
  return c.outcome === 'tehotenstvi' || c.outcome === 'ztrata'
}

export function numbersFor(c: CycleRow): CycleNumbers {
  const eggs = num(c.eggs)
  const mature = num(c.mature)
  const fertilized = num(c.fertilized)
  const blastocysts = num(blastocystsOf(c))
  const frozen = num(c.frozen)

  return {
    cycleId: c.id,
    title: cycleTitle(c),
    number: c.number,
    stimDays: stimDaysOf(c),
    eggs,
    mature,
    fertilized,
    day3: num(c.day3),
    blastocysts,
    frozen,
    transfers: c.transfers.length,
    embryosTransferred: num(embryosTransferred(c)),
    // Zralá vajíčka jsou přesnější základ. Když je klinika neřekla,
    // počítá se ze všech odebraných. A v UI se to má takhle i popsat.
    fertilizationRate: rate(fertilized, mature ?? eggs),
    blastRate: rate(blastocysts, fertilized),
    outcome: c.outcome,
  }
}

// ----------------------------------------------------------------- souhrn ---

export interface Overall {
  cycles: number
  withRetrieval: number
  totalEggs: number
  totalFertilized: number
  totalBlastocysts: number
  totalFrozen: number
  avgEggs: number | null
  avgStimDays: number | null
  avgFertilizationRate: number | null
  transfers: number
  pregnancies: number
  /** Podíl těhotenství na transferech. null když nebyl žádný transfer. */
  pregnancyPerTransfer: number | null
}

/**
 * Souhrn přes všechny cykly.
 *
 * Součty jsou čísla. Sečíst nic dá nula a to je pravda. Průměry a podíly
 * jsou `null`, dokud není z čeho počítat.
 */
export function overall(cycles: CycleRow[]): Overall {
  const rows = cycles.map(numbersFor)

  const sum = (pick: (n: CycleNumbers) => number | null): number =>
    rows.reduce((a, n) => a + (pick(n) ?? 0), 0)

  const collected = (pick: (n: CycleNumbers) => number | null): number[] =>
    rows.map(pick).filter((v): v is number => v !== null)

  const transfers = cycles.filter(hasTransfer).length
  const pregnancies = cycles.filter(isPregnancy).length

  return {
    cycles: cycles.length,
    withRetrieval: cycles.filter(hasRetrieval).length,
    totalEggs: sum((n) => n.eggs),
    totalFertilized: sum((n) => n.fertilized),
    totalBlastocysts: sum((n) => n.blastocysts),
    totalFrozen: sum((n) => n.frozen),
    avgEggs: avg(collected((n) => n.eggs), 1),
    avgStimDays: avg(collected((n) => n.stimDays), 1),
    // Průměr z podílů jednotlivých cyklů, ne podíl součtů. Zajímá nás,
    // jak dopadal cyklus, ne jak dopadlo celé odebrané množství dohromady.
    avgFertilizationRate: avg(collected((n) => n.fertilizationRate), 3),
    transfers,
    pregnancies,
    pregnancyPerTransfer: transfers === 0 ? null : round(pregnancies / transfers, 3),
  }
}

// -------------------------------------------------------------- dodržování ---

/**
 * Běžel lék v tenhle den?
 *
 * Bez `startOn` se lék počítá pro celé zadané období. Nevíme, odkdy běží,
 * ale víme, že je v protokolu. Jednorázový lék bez data se nepočítá vůbec:
 * neexistuje den, ke kterému by se dal přiřadit, a započítat ho každý den
 * by dodržování uměle srazilo dolů.
 */
function runsOn(m: MedRow, day: IsoDate): boolean {
  if (m.startOn && day < m.startOn) return false
  if (m.endOn && day > m.endOn) return false
  if (m.repeat === 'jednou') return m.startOn === day
  // Obden = každý druhý den od startOn. Bez startOn chybí, od čeho parita
  // začíná, takže se lék počítá každý den období.
  if (m.repeat === 'obden' && m.startOn) return daysBetween(m.startOn, day) % 2 === 0
  return true
}

/**
 * Dodržování léčby za období. Kolik dávek bylo odškrtnuto.
 *
 * Jedna dávka = jeden lék a jeden den, protože klíč odškrtnutí je
 * `med:{datum}:{id léku}`. Víc časů denně sdílí jedno odškrtnutí.
 *
 * `pct` je podíl 0–1, ne procenta. Formátování je na obrazovce.
 * A tohle číslo se nesmí nikde použít jako známka: neodškrtnutá dávka
 * často znamená jen zapomenuté odškrtnutí, ne vynechaný lék.
 */
export function adherence(
  meds: MedRow[],
  checks: Record<string, boolean>,
  from: string,
  to: string,
): { total: number; done: number; pct: number | null } {
  if (!from || !to || from > to) return { total: 0, done: 0, pct: null }

  const span = daysBetween(from, to)
  let total = 0
  let done = 0

  for (let i = 0; i <= span; i++) {
    const day = addDays(from, i)
    for (const m of meds) {
      if (!runsOn(m, day)) continue
      total++
      if (checks[doseKey(day, m.id)]) done++
    }
  }

  return { total, done, pct: total === 0 ? null : round(done / total, 3) }
}

// -------------------------------------------------------------- příznaky ---

/**
 * Nejčastější příznaky.
 *
 * Jen počty a průměrná intenzita toho, co si uživatelka sama zapsala.
 * Nic to neznamená, nic to nepředpovídá. Je to podklad pro rozhovor
 * s lékařem, ne náhrada za něj.
 */
export function topSymptoms(
  logs: SymptomLog[],
  labelOf: (id: string) => string,
  limit = 5,
): { id: string; label: string; count: number; avgIntensity: number | null }[] {
  // `rated` je počet zápisů, u kterých uživatelka intenzitu opravdu zadala.
  // Průměrovat přes všechny by starší zápisy bez intenzity počítalo jako nulu
  // a průměr by tvrdil něco, co nikdo nezapsal.
  const bucket = new Map<string, { count: number; rated: number; sum: number }>()

  for (const l of logs) {
    if (!l.symptomId) continue
    const cur = bucket.get(l.symptomId) ?? { count: 0, rated: 0, sum: 0 }
    cur.count++
    if (l.intensity !== null && Number.isFinite(l.intensity)) {
      cur.rated++
      cur.sum += l.intensity
    }
    bucket.set(l.symptomId, cur)
  }

  return [...bucket.entries()]
    .map(([id, b]) => ({
      id,
      label: labelOf(id) || id,
      count: b.count,
      avgIntensity: b.rated > 0 ? round(b.sum / b.rated, 1) : null,
    }))
    .sort(
      (a, b) =>
        b.count - a.count ||
        (b.avgIntensity ?? -1) - (a.avgIntensity ?? -1) ||
        a.label.localeCompare(b.label, 'cs'),
    )
    .slice(0, Math.max(0, limit))
}

// -------------------------------------------------------------- srovnání ---

function czNumber(n: number, decimals = 0): string {
  return n.toFixed(decimals).replace('.', ',')
}

function cell(v: number | null, decimals = 0): string {
  return v === null ? DASH : czNumber(v, decimals)
}

/** Podíl do tabulky. Pevná mezera před procentem, jak se to česky sází. */
function cellRate(v: number | null): string {
  return v === null ? DASH : `${czNumber(v * 100)} %`
}

function cellText(s: string): string {
  return s.trim() || DASH
}

function cellDays(v: number | null): string {
  return v === null ? DASH : czDays(v)
}

function cellDate(iso: IsoDate | null): string {
  return iso ? formatCzechDateShort(iso) : DASH
}

function cellMethods(c: CycleRow): string {
  const named = c.methods.map(methodLabel)
  const all = c.methodsNote.trim() ? [...named, c.methodsNote.trim()] : named
  return all.length === 0 ? DASH : all.join(', ')
}

/**
 * Srovnání dvou cyklů. Vrátí řádky pro tabulku.
 *
 * Čísla vedle sebe, nic víc. Statistika neřekne, který cyklus byl lepší:
 * na to nemá měřítko a uživatelka na to má lékaře. Řádky, kde není zapsané
 * ani na jedné straně nic, vypadnou. Prázdná tabulka pomlček nikomu nepomůže.
 */
export function compare(a: CycleRow, b: CycleRow): { label: string; a: string; b: string }[] {
  const na = numbersFor(a)
  const nb = numbersFor(b)

  const rows: { label: string; a: string; b: string }[] = [
    { label: 'Druh cyklu', a: KIND_LABEL[a.kind], b: KIND_LABEL[b.kind] },
    { label: 'Zahájení', a: cellDate(a.startedOn), b: cellDate(b.startedOn) },
    { label: 'Klinika', a: cellText(a.clinic), b: cellText(b.clinic) },
    { label: 'Protokol', a: cellText(a.protocol), b: cellText(b.protocol) },
    { label: 'Délka stimulace', a: cellDays(na.stimDays), b: cellDays(nb.stimDays) },
    { label: 'Odebraná vajíčka', a: cell(na.eggs), b: cell(nb.eggs) },
    { label: 'Zralá vajíčka', a: cell(na.mature), b: cell(nb.mature) },
    { label: 'Oplozená', a: cell(na.fertilized), b: cell(nb.fertilized) },
    { label: 'Podíl oplozených', a: cellRate(na.fertilizationRate), b: cellRate(nb.fertilizationRate) },
    { label: 'Embrya 3. den', a: cell(na.day3), b: cell(nb.day3) },
    { label: 'Blastocysty (5. a 6. den)', a: cell(na.blastocysts), b: cell(nb.blastocysts) },
    { label: 'Podíl blastocyst', a: cellRate(na.blastRate), b: cellRate(nb.blastRate) },
    { label: 'Zamražená embrya', a: cell(na.frozen), b: cell(nb.frozen) },
    { label: 'Počet transferů', a: cell(na.transfers || null), b: cell(nb.transfers || null) },
    { label: 'Přenesená embrya', a: cell(na.embryosTransferred), b: cell(nb.embryosTransferred) },
    {
      label: 'Den embrya při transferu',
      a: cell(num(currentTransfer(a)?.embryoDay ?? null)),
      b: cell(num(currentTransfer(b)?.embryoDay ?? null)),
    },
    // Nejčastější otázka mezi cykly zní „co bylo minule jinak“. Odpověď bývá
    // právě tady. V tom, co se přidalo nebo ubralo.
    { label: 'Doplňkové metody', a: cellMethods(a), b: cellMethods(b) },
    { label: 'Výsledek', a: OUTCOME_LABEL[a.outcome], b: OUTCOME_LABEL[b.outcome] },
  ]

  return rows.filter((r) => r.a !== DASH || r.b !== DASH)
}
