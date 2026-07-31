import type { IsoDate } from './profile'
import { addDays, daysBetween, today as todayIso } from './dates'

/**
 * IVF cyklus jako zdravotní karta.
 *
 * Jeden cyklus = jeden záznam, ve kterém je pohromadě všechno: klinika,
 * lékař, protokol, milníky, čísla z laboratoře a výsledek. Žena po třetím
 * cyklu se potřebuje podívat, co bylo minule jinak — a nesmí to hledat
 * po pěti obrazovkách.
 *
 * Čistý modul bez závislosti na DB i na prohlížeči.
 */

export type CycleOutcome =
  | 'probiha'
  | 'tehotenstvi'
  | 'negativni'
  | 'ztrata'
  | 'zruseno'
  | 'zamrazeno'

export const OUTCOME_LABEL: Record<CycleOutcome, string> = {
  probiha: 'Probíhá',
  tehotenstvi: 'Těhotenství',
  negativni: 'Negativní',
  ztrata: 'Ztráta',
  zruseno: 'Zrušeno',
  zamrazeno: 'Embrya zamražena',
}

/** Druh cyklu. Mění, které milníky vůbec dávají smysl. */
export type CycleKind = 'ivf' | 'fet' | 'iui' | 'monitorovany'

export const KIND_LABEL: Record<CycleKind, string> = {
  ivf: 'IVF se stimulací',
  fet: 'Kryotransfer (FET)',
  iui: 'Inseminace (IUI)',
  monitorovany: 'Monitorovaný cyklus',
}

export interface CycleRow {
  id: string
  /** Pořadové číslo v historii uživatelky. */
  number: number
  kind: CycleKind
  /** Vlastní název. Prázdné = použije se „N. cyklus“. */
  name: string
  clinic: string
  doctor: string
  protocol: string

  /** CD1 — první den cyklu. Od něj se počítá Cycle Day. */
  cd1On: IsoDate | null
  startedOn: IsoDate
  endedOn: IsoDate | null

  // --- milníky ------------------------------------------------------------
  stimStartOn: IsoDate | null
  triggerOn: IsoDate | null
  /** Hodina triggeru. Tady se nesmí splést — proto zvlášť. */
  triggerAt: string
  retrievalOn: IsoDate | null
  transferOn: IsoDate | null
  betaOn: IsoDate | null

  // --- laboratoř ----------------------------------------------------------
  eggs: number | null
  mature: number | null
  fertilized: number | null
  blastocysts: number | null
  frozen: number | null
  transferred: number | null
  /** Den kultivace embrya při transferu (3 nebo 5). */
  embryoDay: number | null

  outcome: CycleOutcome
  note: string
}

export function emptyCycle(id: string, number: number, startedOn: IsoDate): CycleRow {
  return {
    id,
    number,
    kind: 'ivf',
    name: '',
    clinic: '',
    doctor: '',
    protocol: '',
    cd1On: null,
    startedOn,
    endedOn: null,
    stimStartOn: null,
    triggerOn: null,
    triggerAt: '',
    retrievalOn: null,
    transferOn: null,
    betaOn: null,
    eggs: null,
    mature: null,
    fertilized: null,
    blastocysts: null,
    frozen: null,
    transferred: null,
    embryoDay: null,
    outcome: 'probiha',
    note: '',
  }
}

export function cycleTitle(c: CycleRow): string {
  return c.name.trim() || `${c.number}. cyklus`
}

// ------------------------------------------------------------------ stav ---

/**
 * Kde přesně cyklus je. Tohle je nejdůležitější informace celé aplikace,
 * proto má vlastní typ a vlastní krátký popisek do hlavičky.
 */
export type CycleStage =
  | 'pred'
  | 'stimulace'
  | 'trigger'
  | 'odber'
  | 'oplodneni'
  | 'kultivace'
  | 'transfer'
  | 'cekani'
  | 'beta'
  | 'hotovo'

export interface CycleStatus {
  stage: CycleStage
  /** Krátký popisek do hlavičky — „7. den stimulace“, „Trigger dnes“. */
  headline: string
  /** Doplňující věta. */
  detail: string
  /** Cycle Day, počítaný od CD1. `null`, když CD1 není zadané. */
  cycleDay: number | null
  /** Dní po transferu. Záporné = transfer ještě nebyl. */
  daysPastTransfer: number | null
  /** Dní po odběru. */
  daysPastRetrieval: number | null
  /** Kolikátý den stimulace. */
  stimDay: number | null
  /** Postup cyklem 0–1, pokud se dá odhadnout. */
  progress: number | null
}

/** Milník, který se blíží. */
export interface NextUp {
  key: string
  label: string
  date: IsoDate
  inDays: number
  /** Naléhavé = dnes nebo zítra. */
  urgent: boolean
}

function d(from: IsoDate | null, to: IsoDate): number | null {
  return from ? daysBetween(from, to) : null
}

/**
 * Přečte stav cyklu k zadanému dni.
 *
 * Pořadí podmínek jde odzadu — od nejpozdějšího milníku k nejranějšímu.
 * Kdyby to šlo odpředu, cyklus by po transferu pořád hlásil stimulaci.
 */
export function readCycle(c: CycleRow, today: IsoDate = todayIso()): CycleStatus {
  const cycleDay = c.cd1On ? daysBetween(c.cd1On, today) + 1 : null
  const dpt = d(c.transferOn, today)
  const dpr = d(c.retrievalOn, today)
  const stimDay = c.stimStartOn ? daysBetween(c.stimStartOn, today) + 1 : null

  const base = { cycleDay, daysPastTransfer: dpt, daysPastRetrieval: dpr, stimDay }

  if (c.outcome !== 'probiha' || (c.endedOn && today > c.endedOn)) {
    return {
      ...base,
      stage: 'hotovo',
      headline: 'Cyklus uzavřený',
      detail: OUTCOME_LABEL[c.outcome],
      progress: 1,
    }
  }

  if (c.betaOn && today >= c.betaOn) {
    return { ...base, stage: 'beta', headline: 'Beta HCG', detail: 'Čekání na výsledek odběru.', progress: 0.95 }
  }

  if (dpt !== null && dpt >= 0) {
    if (c.betaOn) {
      const toBeta = daysBetween(today, c.betaOn)
      return {
        ...base,
        stage: 'cekani',
        headline: `Transfer +${dpt}`,
        detail: toBeta === 0 ? 'Beta dnes.' : `Do bety zbývá ${toBeta} ${toBeta === 1 ? 'den' : toBeta < 5 ? 'dny' : 'dní'}.`,
        progress: 0.8 + Math.min(0.14, dpt * 0.01),
      }
    }
    return { ...base, stage: 'cekani', headline: `Transfer +${dpt}`, detail: 'Čekání na výsledek.', progress: 0.85 }
  }

  if (dpr !== null && dpr >= 0) {
    if (dpr === 0) return { ...base, stage: 'odber', headline: 'Odběr vajíček dnes', detail: 'Dnes je den zákroku.', progress: 0.6 }
    if (dpr === 1) return { ...base, stage: 'oplodneni', headline: 'Den po odběru', detail: 'Dnes volá embryologie s výsledkem oplodnění.', progress: 0.66 }
    return {
      ...base,
      stage: 'kultivace',
      headline: `${dpr}. den kultivace`,
      detail: c.transferOn
        ? `Transfer ${daysBetween(today, c.transferOn)} ${daysBetween(today, c.transferOn) === 1 ? 'den' : 'dny'} od dneška.`
        : 'Embrya se vyvíjejí v laboratoři.',
      progress: 0.7,
    }
  }

  if (c.triggerOn) {
    const toTrigger = daysBetween(today, c.triggerOn)
    if (toTrigger === 0) {
      return {
        ...base,
        stage: 'trigger',
        headline: c.triggerAt ? `Trigger dnes ve ${c.triggerAt}` : 'Trigger dnes',
        detail: 'Přesná hodina je zásadní. Nastavte si budík.',
        progress: 0.5,
      }
    }
    if (toTrigger === 1 && stimDay !== null) {
      return { ...base, stage: 'stimulace', headline: `${stimDay}. den stimulace`, detail: 'Trigger zítra.', progress: 0.45 }
    }
  }

  if (stimDay !== null && stimDay >= 1) {
    return {
      ...base,
      stage: 'stimulace',
      headline: `${stimDay}. den stimulace`,
      detail: c.retrievalOn
        ? `Odběr za ${daysBetween(today, c.retrievalOn)} ${daysBetween(today, c.retrievalOn) === 1 ? 'den' : 'dny'}.`
        : 'Injekce každý den, kontroly každé dva až tři dny.',
      progress: 0.15 + Math.min(0.3, stimDay * 0.03),
    }
  }

  return {
    ...base,
    stage: 'pred',
    headline: cycleDay ? `${cycleDay}. den cyklu` : 'Cyklus připraven',
    detail: c.stimStartOn ? `Stimulace začíná ${c.stimStartOn}.` : 'Zatím bez zadaných milníků.',
    progress: 0.05,
  }
}

/** Milníky cyklu seřazené v čase — používá je timeline i kalendář. */
export function cycleMilestones(c: CycleRow): { key: string; label: string; date: IsoDate }[] {
  const raw: [string, string, IsoDate | null][] = [
    ['cd1', 'CD1 — první den cyklu', c.cd1On],
    ['stim', 'Začátek stimulace', c.stimStartOn],
    ['trigger', c.triggerAt ? `Trigger ve ${c.triggerAt}` : 'Trigger', c.triggerOn],
    ['odber', 'Odběr vajíček', c.retrievalOn],
    ['transfer', 'Transfer', c.transferOn],
    ['beta', 'Beta HCG', c.betaOn],
    ['konec', 'Uzavření cyklu', c.endedOn],
  ]
  return raw
    .filter((r): r is [string, string, IsoDate] => Boolean(r[2]))
    .map(([key, label, date]) => ({ key, label, date }))
    .sort((a, b) => a.date.localeCompare(b.date))
}

/** Co přijde jako další. Prázdné pole = cyklus nemá naplánováno nic. */
export function nextUp(c: CycleRow, today: IsoDate = todayIso()): NextUp[] {
  return cycleMilestones(c)
    .filter((m) => m.date >= today)
    .map((m) => {
      const inDays = daysBetween(today, m.date)
      return { key: m.key, label: m.label, date: m.date, inDays, urgent: inDays <= 1 }
    })
}

/**
 * Odhad data bety, když ho uživatelka nezadala.
 * Blastocysta 10 dní po transferu, třetí den 12 — orientačně.
 */
export function estimatedBeta(c: CycleRow): IsoDate | null {
  if (c.betaOn) return c.betaOn
  if (!c.transferOn) return null
  return addDays(c.transferOn, c.embryoDay === 3 ? 12 : 10)
}

/** Cyklus, který právě běží. Když jich běží víc, vyhrává nejnovější. */
export function activeCycle(cycles: CycleRow[], today: IsoDate = todayIso()): CycleRow | null {
  const open = cycles.filter((c) => c.outcome === 'probiha' && (!c.endedOn || c.endedOn >= today))
  if (open.length === 0) return null
  return [...open].sort((a, b) => b.startedOn.localeCompare(a.startedOn))[0]
}
