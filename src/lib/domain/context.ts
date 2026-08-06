import {
  betaDate,
  currentTransfer,
  cycleTitle,
  defaultCycle,
  estimatedBeta,
  nextBloodTest,
  plannedHcg,
  sortedTransfers,
  type CycleRow,
  type CycleTransfer,
  type HcgTest,
} from './cycle'
import { embryoTitle, reachedDay, type Embryo } from './embryo'
import { daysBetween, today as todayIso } from './dates'
import type { IsoDate } from './profile'

/**
 * Co je poslední relevantní věc, která se téhle ženě stala.
 *
 * Jediná otázka, na kterou musí umět aplikace odpovědět, než nakreslí Dnes.
 * Odpověď je řetěz a čte se shora dolů: **cyklus → transfer → embryo → den
 * po transferu → hCG**. Každý článek se hledá uvnitř toho předchozího, takže
 * se nemůže stát, že se den počítá z lednového transferu, zatímco embryo je
 * z toho srpnového.
 *
 * ------------------------------------------------------------- CO SE BERE ---
 * 1. Cyklus: běžící. Když žádný neběží, poslední zaznamenaný.
 * 2. Transfer: uvnitř toho cyklu poslední, který proběhl. Zrušené se
 *    přeskakují. Když ještě žádný neproběhl, nejbližší naplánovaný.
 * 3. Embryo: to, které je na tom transferu vypsané. Nové embryo v laborce
 *    se za přenesené nepovažuje, dokud ho někdo k transferu nepřipíše.
 * 4. Den embrya: z transferu, jinak z karty embrya.
 * 5. hCG: poslední zapsaný odběr k tomu transferu.
 *
 * ---------------------------------------------------------------- HISTORIE ---
 * Nic se nefiltruje pryč. Kontext říká jen, co je **teď**. Historie zůstává
 * celá a dostupná; jen se z ní nepočítá dnešek.
 *
 * Čistý doménový modul.
 */

/** Dva zápisy, které si odporují. Aplikace si nedomýšlí, který platí. */
export interface Conflict {
  id: string
  /** Co si odporuje, lidsky. Bez obviňování a bez odhadu. */
  message: string
  /** Kam se to jde srovnat. */
  route: string
}

export interface CurrentContext {
  /** 1. Cyklus, se kterým se pracuje. */
  cycle: CycleRow | null
  /** Běží, nebo je to poslední uzavřený? Rozhoduje o označení v UI. */
  cycleActive: boolean
  cycleLabel: string

  /** 2. Transfer, o který teď jde. */
  transfer: CycleTransfer | null
  /** Kolikátý je v cyklu, počítáno i se zrušenými. */
  transferOrder: number | null
  /** „KET #2“, „ET #1“. Prázdné, když žádný transfer není. */
  transferLabel: string

  /** 3. Embrya, která se tímhle transferem přenesla. */
  embryos: Embryo[]
  embryoLabel: string
  /** 4. Den kultivace přeneseného embrya. „D5“. */
  embryoDay: number | null

  /** 5. Datum transferu a kolikátý je dnes den po něm. */
  transferOn: IsoDate | null
  daysPastTransfer: number | null

  /** 6. Poslední zapsaný odběr hCG k tomuhle transferu. */
  hcg: HcgTest | null
  /** Kdy je odběr hCG. Zapsaný termín, jinak orientační odhad. */
  hcgOn: IsoDate | null
  hcgEstimated: boolean
  daysToHcg: number | null

  /** Jedna řádka pro hlavičku: „2. cyklus · KET #2 · D6 embryo“. */
  headline: string

  conflicts: Conflict[]
}

export interface ContextInput {
  cycles: CycleRow[]
  /** Všechna embrya, napříč cykly. Filtruje se tady. */
  embryos: Embryo[]
  today?: IsoDate
  /** Ruční datum transferu z profilu. Kvůli hlášení rozporu. */
  profileTransferOn?: IsoDate | null
}

const PRAZDNY: CurrentContext = {
  cycle: null,
  cycleActive: false,
  cycleLabel: '',
  transfer: null,
  transferOrder: null,
  transferLabel: '',
  embryos: [],
  embryoLabel: '',
  embryoDay: null,
  transferOn: null,
  daysPastTransfer: null,
  hcg: null,
  hcgOn: null,
  hcgEstimated: false,
  daysToHcg: null,
  headline: '',
  conflicts: [],
}

/** „KET #2“ u druhého a dalšího, „KET“ u jediného. */
function transferName(t: CycleTransfer, order: number, total: number): string {
  const druh = t.kind === 'kryo' ? 'KET' : 'ET'
  return total > 1 ? `${druh} #${order}` : druh
}

/** Poslední odběr hCG, který se opravdu stal a patří k tomuhle transferu. */
function lastHcg(c: CycleRow, t: CycleTransfer | null, today: IsoDate): HcgTest | null {
  const mine = c.hcgTests
    .filter((h) => {
      if (!h.date || h.date > today) return false
      if (!t) return true
      return h.transferId === t.id || (!h.transferId && t.date !== null && h.date >= t.date)
    })
    .sort((a, b) => (a.date as IsoDate).localeCompare(b.date as IsoDate))
  return mine[mine.length - 1] ?? null
}

export function resolveContext(input: ContextInput): CurrentContext {
  const today = input.today ?? todayIso()
  const cycle = defaultCycle(input.cycles, today)
  if (!cycle) return PRAZDNY

  const cycleActive = cycle.outcome === 'probiha' && (!cycle.endedOn || cycle.endedOn >= today)
  const conflicts: Conflict[] = []

  // --- transfer
  const vsechny = sortedTransfers(cycle)
  const transfer = currentTransfer(cycle, today)
  const idx = transfer ? vsechny.findIndex((t) => t.id === transfer.id) : -1
  const transferOrder = idx >= 0 ? idx + 1 : null
  const transferLabel =
    transfer && transferOrder ? transferName(transfer, transferOrder, vsechny.length) : ''

  // --- embrya na tom transferu
  const ids = new Set(transfer?.embryoIds ?? [])
  const embryos = input.embryos.filter((e) => ids.has(e.id))

  // --- den embrya
  const zKarty = embryos.map(reachedDay).filter((d): d is number => d !== null)
  const nejvyssiZKarty = zKarty.length ? Math.max(...zKarty) : null
  const embryoDay = transfer?.embryoDay ?? nejvyssiZKarty

  if (transfer?.embryoDay != null && nejvyssiZKarty !== null && transfer.embryoDay !== nejvyssiZKarty) {
    conflicts.push({
      id: 'embryo-day',
      message: `U transferu máte zapsaný ${transfer.embryoDay}. den kultivace, u embrya ${nejvyssiZKarty}. den. Zkontrolujte prosím, který platí.`,
      route: `cyklus/${cycle.id}`,
    })
  }

  // --- datum a den po transferu
  const transferOn = transfer && !transfer.cancelled ? transfer.date : null
  const daysPastTransfer =
    transferOn && transferOn <= today ? daysBetween(transferOn, today) : null

  if (
    transferOn &&
    input.profileTransferOn &&
    input.profileTransferOn !== transferOn &&
    input.profileTransferOn >= (cycle.cd1On ?? cycle.startedOn)
  ) {
    conflicts.push({
      id: 'transfer-date',
      message:
        'Máme uložené dvě různé informace o datu transferu, jednu v nastavení a jednu v cyklu. Zkontrolujte prosím, která platí.',
      route: 'nastaveni',
    })
  }

  // --- hCG
  const hcg = lastHcg(cycle, transfer, today)
  const zapsany = nextBloodTest(cycle, today) ?? plannedHcg(cycle, today) ?? betaDate(cycle, today)
  const hcgOn = zapsany ?? estimatedBeta(cycle, today)
  const hcgEstimated = hcgOn !== null && zapsany === null
  const daysToHcg = hcgOn && hcgOn >= today ? daysBetween(today, hcgOn) : null

  // --- hlavička
  const embryoLabel = embryos.length
    ? embryos.map(embryoTitle).join(', ')
    : transfer?.embryos
      ? `${transfer.embryos} embryo`
      : ''
  const headline = [
    cycleTitle(cycle),
    transferLabel,
    embryoDay !== null ? `D${embryoDay} embryo` : '',
  ]
    .filter(Boolean)
    .join(' · ')

  return {
    cycle,
    cycleActive,
    cycleLabel: cycleTitle(cycle),
    transfer,
    transferOrder,
    transferLabel,
    embryos,
    embryoLabel,
    embryoDay,
    transferOn,
    daysPastTransfer,
    hcg,
    hcgOn,
    hcgEstimated,
    daysToHcg,
    headline,
    conflicts,
  }
}

/**
 * Události cyklu v pořadí, jak se staly.
 *
 * Odvozený proud, ne uložená data. Aplikace ukládá cyklus, embrya, transfery
 * a testy jako propojené záznamy; tohle z nich skládá časovou stopu, ze které
 * je na první pohled vidět, co bylo poslední. Nic se tím nemaže ani nemění.
 */
export interface CycleEvent {
  id: string
  on: IsoDate
  kind: 'odber' | 'embryo' | 'kryo' | 'pgt' | 'rozmrazeni' | 'transfer' | 'hcg' | 'konec'
  label: string
  detail: string
  embryoId: string | null
  transferId: string | null
}

export function cycleEvents(c: CycleRow, embryos: Embryo[], today: IsoDate = todayIso()): CycleEvent[] {
  const out: CycleEvent[] = []
  const put = (
    on: IsoDate | null,
    kind: CycleEvent['kind'],
    id: string,
    label: string,
    detail: string,
    embryoId: string | null = null,
    transferId: string | null = null,
  ): void => {
    if (!on || on > today) return
    out.push({ id, on, kind, label, detail, embryoId, transferId })
  }

  put(c.retrievalOn, 'odber', 'odber', 'Odběr vajíček', c.eggs !== null ? `${c.eggs} vajíček` : '')

  const mine = embryos.filter((e) => e.cycleId === c.id)
  for (const e of mine) {
    const den = reachedDay(e)
    put(c.retrievalOn, 'embryo', `emb-${e.id}`, `${embryoTitle(e)} vzniklo`, den !== null ? `${den}. den kultivace` : '', e.id)
    put(e.frozenOn, 'kryo', `kryo-${e.id}`, `${embryoTitle(e)} zamraženo`, e.frozenDay !== null ? `${e.frozenDay}. den` : '', e.id)
    put(e.pgtSampledOn, 'pgt', `pgt-${e.id}`, `${embryoTitle(e)} testováno`, e.pgtResult, e.id)
    put(e.thawedOn, 'rozmrazeni', `thaw-${e.id}`, `${embryoTitle(e)} rozmraženo`, e.thawResult, e.id)
  }

  const vsechny = sortedTransfers(c)
  vsechny.forEach((t, i) => {
    if (t.cancelled) return
    const nazev = transferName(t, i + 1, vsechny.length)
    const kdo = t.embryoIds
      .map((id) => mine.find((e) => e.id === id))
      .filter((e): e is Embryo => Boolean(e))
      .map(embryoTitle)
      .join(', ')
    put(t.date, 'transfer', `tr-${t.id}`, nazev, kdo, t.embryoIds[0] ?? null, t.id)
  })

  for (const h of c.hcgTests) {
    put(
      h.date,
      'hcg',
      `hcg-${h.id}`,
      h.kind === 'krev' ? 'Odběr hCG' : 'Domácí test',
      h.value !== null ? `${h.value} IU/l` : '',
      null,
      h.transferId || null,
    )
  }

  put(c.endedOn, 'konec', 'konec', 'Uzavření cyklu', '')

  // Ve stejný den rozhoduje pořadí v léčbě. Odběr je dřív než embryo, které
  // z něj vzniklo, i když se obojí zapisuje k témuž datu.
  const rank: Record<CycleEvent['kind'], number> = {
    odber: 0,
    embryo: 1,
    kryo: 2,
    pgt: 3,
    rozmrazeni: 4,
    transfer: 5,
    hcg: 6,
    konec: 7,
  }
  return out.sort(
    (a, b) => a.on.localeCompare(b.on) || rank[a.kind] - rank[b.kind] || a.id.localeCompare(b.id),
  )
}

/** Popisek pro odlišení aktuálního od historie. Pravidlo 38.13. */
export function currentBadge(isCurrent: boolean): string {
  return isCurrent ? 'Aktuální' : 'Historie'
}
