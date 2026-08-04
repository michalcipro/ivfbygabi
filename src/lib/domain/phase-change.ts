import type { IsoDate } from './profile'
import type { PhaseId } from './phases'
import type { CycleOutcome } from './cycle'

/**
 * Co se stane, když se změní fáze.
 *
 * Přepnout nálepku nestačí. Žena, která zvolí „IVF nevyšlo“, má pořád
 * otevřený cyklus, běžící protokol léků a v profilu datum transferu.
 * Aplikace jí proto zítra ve 20:00 naplánuje injekci, jako by se nic
 * nestalo. To je to nejhorší, co může udělat: tváří se, že neposlouchá.
 *
 * Tenhle modul ze změny fáze udělá **plán skutečných změn v datech**.
 * Obrazovka ho ukáže, uživatelka si ho může upravit a teprve pak se
 * provede.
 *
 * ------------------------------------------------------------- HISTORIE ---
 * Nic se nemaže. Cyklus se uzavře s výsledkem a zůstane v historii,
 * léky dostanou datum konce a zůstanou v protokolu, embrya a transfery
 * zůstávají tak, jak jsou. Mění se jen to, co aplikace považuje za
 * **současnost**: co počítá do dneška, co plánuje a co připomíná.
 *
 * Čistý doménový modul. Provedení plánu patří klientovi.
 */

export type StepKind =
  | 'close-cycle'
  | 'stop-meds'
  | 'clear-anchors'
  | 'mark-transfer'
  | 'new-cycle'
  | 'set-loss'

export interface ChangeStep {
  kind: StepKind
  label: string
  detail: string
  /** Předvybráno. Uživatelka to může odškrtnout. */
  on: boolean
  /** U uzavření cyklu a u výsledku transferu. */
  outcome?: CycleOutcome
}

export interface PhasePlan {
  routeId: string
  phase: PhaseId
  /** Kroky, které se nabízejí. Prázdné = mění se jen nálepka. */
  steps: ChangeStep[]
  /** Věty o tom, co zůstává. Bez nich změna vypadá jako mazání. */
  keeps: string[]
}

export interface PlanInput {
  routeId: string
  phase: PhaseId
  today: IsoDate
  /** Běží nějaký cyklus? */
  openCycle: { id: string; title: string; hasTransferWaiting: boolean } | null
  /** Kolik léků má dnes běžet. */
  runningMeds: number
  /** Kotevní data v profilu, ze kterých se počítá „kolikátý je dnes den“. */
  anchors: { transferOn: boolean; retrievalOn: boolean; stimulationStartOn: boolean; betaTestOn: boolean }
}

/** Fáze, po kterých cyklus skončil. */
const KONEC: Partial<Record<string, CycleOutcome>> = {
  between: 'negativni',
  negative: 'negativni',
  loss: 'ztrata',
  biochemical: 'biochemicke',
  ectopic: 'mimodelozni',
}

/** Fáze, ve kterých se o cyklu ještě nerozhodlo a léčba běží dál. */
const BEZI_DAL = new Set([
  'stimulation',
  'stim_start',
  'retrieval_ahead',
  'fertilization',
  'retrieval',
  'transfer_ahead',
  'fet_ahead',
  'mam_embrya',
  'transfer',
  'waiting_hcg',
  'beta',
])

/** Fáze, které znamenají, že se začíná znovu nebo zatím vůbec. */
const MIMO_CYKLUS = new Set([
  'snazime',
  'thinking',
  'resime',
  'tests_ahead',
  'tests_done',
  'referral',
  'ivf_prep',
  'next_cycle',
  'unsure',
])

/** Fáze, po kterých je namístě zapsat výsledek posledního transferu. */
const VYSLEDEK_TRANSFERU: Partial<Record<string, CycleOutcome>> = {
  between: 'negativni',
  negative: 'negativni',
  loss: 'ztrata',
  biochemical: 'biochemicke',
  ectopic: 'mimodelozni',
  beta: 'tehotenstvi',
}

export function planPhaseChange(input: PlanInput): PhasePlan {
  const { routeId, openCycle, runningMeds, anchors } = input
  const steps: ChangeStep[] = []
  const keeps: string[] = []

  const konciCyklus = routeId in KONEC || MIMO_CYKLUS.has(routeId)
  const bezi = BEZI_DAL.has(routeId)

  // --- výsledek posledního transferu
  const vysledek = VYSLEDEK_TRANSFERU[routeId]
  if (openCycle?.hasTransferWaiting && vysledek) {
    steps.push({
      kind: 'mark-transfer',
      label: 'Zapsat výsledek posledního transferu',
      detail:
        vysledek === 'tehotenstvi'
          ? 'Poslední transfer čeká na výsledek. Zapíše se jako pozitivní.'
          : 'Poslední transfer čeká na výsledek. Bez zápisu by v přehledu zůstal viset.',
      on: true,
      outcome: vysledek,
    })
  }

  // --- uzavření cyklu
  if (openCycle && konciCyklus) {
    const outcome: CycleOutcome = KONEC[routeId] ?? 'zruseno'
    steps.push({
      kind: 'close-cycle',
      label: `Uzavřít ${openCycle.title.toLowerCase()}`,
      detail:
        'Cyklus dostane datum konce a výsledek. Zůstane v historii se všemi embryi, transfery i čísly.',
      on: true,
      outcome,
    })
  }

  // --- léky
  // U pozitivního hCG se podpora luteální fáze naopak nevysazuje. Nabídnout
  // ukončení léků by tady bylo nebezpečné.
  if (runningMeds > 0 && konciCyklus) {
    steps.push({
      kind: 'stop-meds',
      label: `Ukončit ${runningMeds === 1 ? 'lék v protokolu' : 'léky v protokolu'}`,
      detail:
        runningMeds === 1
          ? 'Dostane datum konce a od dneška se přestane nabízet na Dnes. V protokolu zůstane i s historií dávek. O vysazení vždy rozhoduje klinika.'
          : 'Dostanou datum konce a od dneška se přestanou nabízet na Dnes. V protokolu zůstanou i s historií dávek. O vysazení vždy rozhoduje klinika.',
      on: true,
    })
  }

  // --- kotevní data
  const maKotvy = anchors.transferOn || anchors.retrievalOn || anchors.stimulationStartOn || anchors.betaTestOn
  if (maKotvy && konciCyklus) {
    steps.push({
      kind: 'clear-anchors',
      label: 'Přestat počítat dny z minulého cyklu',
      detail:
        'Data transferu a odběru v profilu se vyprázdní, takže aplikace přestane hlásit „6. den po transferu“ a plánovat odběr hCG. V kartě cyklu zůstávají.',
      on: true,
    })
  }

  // --- ztráta
  if (routeId === 'loss' || routeId === 'biochemical' || routeId === 'ectopic') {
    steps.push({
      kind: 'set-loss',
      label: 'Zapsat datum ztráty na dnešek',
      detail: 'Můžete ho pak upravit v nastavení. Podle něj se skládá obsah, který vám teď aplikace nabídne.',
      on: true,
    })
  }

  // --- nový cyklus
  if (!openCycle && bezi) {
    steps.push({
      kind: 'new-cycle',
      label: 'Založit nový cyklus',
      detail: 'Otevře se prázdná karta, do které budete zapisovat stimulaci, odběr, embrya a transfery.',
      on: true,
    })
  }
  if (!openCycle && routeId === 'next_cycle') {
    steps.push({
      kind: 'new-cycle',
      label: 'Založit další cyklus',
      detail: 'Předchozí zůstane v historii. Nový začne prázdný.',
      on: true,
    })
  }

  // --- co zůstává
  keeps.push('Deník, zápisy nálady a příznaky.')
  keeps.push('Všechny cykly, embrya, transfery a testy v historii.')
  keeps.push('Dokumenty, fotky, otázky pro lékaře a kontakty na kliniku.')
  if (steps.some((s) => s.kind === 'stop-meds')) {
    keeps.push('Léky v protokolu i s historií změn dávek. Jen se přestanou nabízet.')
  }

  return { routeId, phase: input.phase, steps, keeps }
}

/** Má změna vůbec nějaký důsledek, nebo jen přepne nálepku? */
export function hasConsequences(plan: PhasePlan): boolean {
  return plan.steps.length > 0
}
