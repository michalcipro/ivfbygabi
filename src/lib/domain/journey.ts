import {
  PHASES,
  type PhaseDefinition,
  type PhaseId,
  type PhaseGroup,
} from './phases'
import type { IsoDate, ModifierId, Profile } from './profile'
import {
  addDays,
  czDays,
  daysBetween,
  gestationLabel,
  humanAge,
  today as todayIso,
} from './dates'

/**
 * Jádro personalizace.
 *
 * `resolveJourney` vezme profil a dnešní datum a vrátí kompletní stav cesty:
 * ve které fázi uživatelka je, kolikátý je to den, jaký je gestační týden,
 * kolik je miminku (a kolik korigovaně), co ji čeká a co má za sebou.
 *
 * Všechno ostatní v aplikaci — domovská stránka, doporučení, AI Gabi,
 * kalendář, komunita — čte z tohoto jednoho objektu.
 */

export interface Milestone {
  key: string
  label: string
  date: IsoDate
  /** Kladné = v budoucnu. */
  inDays: number
  kind: 'past' | 'today' | 'upcoming'
  icon: string
}

export interface JourneyState {
  today: IsoDate
  phase: PhaseDefinition
  /** Kolikátý den ve fázi. Může být záporný (fáze ještě nezačala). */
  dayInPhase: number
  /** Lidský popisek dne — „Dnes jste 5. den po transferu.“ */
  dayLabel: string
  /** Odkud se den počítá. `null` pokud fáze nemá kotvu. */
  anchorDate: IsoDate | null
  /** Postup ve fázi 0–1, pokud má fáze typickou délku. */
  progress: number | null

  modifiers: ModifierId[]
  group: PhaseGroup

  /** Dny po transferu (DPT) a dny po odběru (DPO) — pro obsah 2WW. */
  daysPastTransfer: number | null
  daysPastRetrieval: number | null
  /** Odhadovaný ekvivalent dní po ovulaci — sečteno s dnem kultivace embrya. */
  daysPastOvulationEquivalent: number | null

  milestones: Milestone[]
  nextMilestone: Milestone | null

  /** Kolik dní je uživatelka na cestě celkem. */
  journeyDays: number | null
}

/** Datum kotvy pro danou fázi. */
function anchorValue(profile: Profile, phase: PhaseDefinition): IsoDate | null {
  if (!phase.anchor) return null
  const v = profile[phase.anchor]
  return typeof v === 'string' && v.length > 0 ? v : null
}

/**
 * Automatická detekce fáze z dat profilu, pokud si uživatelka fázi nezvolila
 * (nebo zvolila fázi, ze které data ukazují, že už postoupila — např.
 * „čekání na HCG“ + zadané pozitivní beta = přejdeme na rané těhotenství).
 */
export function inferPhase(profile: Profile, today: IsoDate = todayIso()): PhaseId {
  const has = (k: keyof Profile) => {
    const v = profile[k]
    return typeof v === 'string' && v.length > 0
  }
  const mods = new Set(profile.modifiers)

  // Ztráta má přednost před těhotenskými daty — je to nejčerstvější událost.
  if (has('lossOn')) {
    const since = daysBetween(profile.lossOn!, today)
    if (since >= 0 && since <= 90) {
      if (profile.declaredPhase && PHASES[profile.declaredPhase].group === 'loss') {
        return profile.declaredPhase
      }
      return 'loss_miscarriage'
    }
    if (since > 90 && !has('lastPeriodOn') && !has('transferOn')) {
      return 'waiting_next_attempt'
    }
  }

  // Pozitivní beta bez zadaného těhotenství.
  if (has('betaTestOn')) {
    const since = daysBetween(profile.betaTestOn!, today)
    if (since >= 0 && since <= 28) return 'beta_positive'
  }

  // IVF cyklus — od nejpozdější události zpět.
  if (has('transferOn')) {
    const dpt = daysBetween(profile.transferOn!, today)
    if (dpt === 0) return 'transfer'
    if (dpt > 0 && dpt <= 14) return 'two_week_wait'
    if (dpt > 14 && dpt <= 60) return 'waiting_next_attempt'
    if (dpt < 0 && dpt >= -7) return 'embryo_culture'
  }

  if (has('retrievalOn')) {
    const dpr = daysBetween(profile.retrievalOn!, today)
    if (dpr === 0) return 'retrieval'
    if (dpr === 1) return 'fertilization'
    if (dpr > 1 && dpr <= 6) return 'embryo_culture'
    if (dpr > 6 && dpr <= 45) return 'waiting_next_attempt'
    if (dpr < 0 && dpr >= -14) return 'stimulation'
  }

  if (has('stimulationStartOn')) {
    const d = daysBetween(profile.stimulationStartOn!, today)
    if (d >= 0 && d <= 20) return 'stimulation'
    if (d < 0) return 'ivf_prep'
  }

  if (has('iuiOn')) {
    const d = daysBetween(profile.iuiOn!, today)
    if (d >= 0 && d <= 16) return d === 0 ? 'iui' : 'two_week_wait'
    if (d < 0 && d >= -14) return 'iui'
  }

  if (profile.ivfCycles > 2 || profile.transfersDone > 2) return 'repeated_failure'
  if (has('diagnosticsStartedOn')) return 'diagnostics'
  if (has('tryingSince')) return 'trying_naturally'

  return profile.declaredPhase ?? 'thinking'
}

function buildMilestones(profile: Profile, today: IsoDate): Milestone[] {
  const raw: Array<{ key: string; label: string; date: IsoDate | null; icon: string }> = [
    { key: 'tryingSince', label: 'Začátek snažení', date: profile.tryingSince, icon: '✦' },
    {
      key: 'diagnosticsStartedOn',
      label: 'Začátek vyšetření',
      date: profile.diagnosticsStartedOn,
      icon: '◈',
    },
    { key: 'iuiOn', label: 'Inseminace', date: profile.iuiOn, icon: '◇' },
    {
      key: 'stimulationStartOn',
      label: 'Začátek stimulace',
      date: profile.stimulationStartOn,
      icon: '✧',
    },
    { key: 'retrievalOn', label: 'Odběr vajíček', date: profile.retrievalOn, icon: '◍' },
    { key: 'transferOn', label: 'Transfer', date: profile.transferOn, icon: '❋' },
    { key: 'betaTestOn', label: 'Beta HCG', date: profile.betaTestOn, icon: '✶' },
    { key: 'lossOn', label: 'Ztráta', date: profile.lossOn, icon: '❍' },
  ]

  return raw
    .filter((m): m is typeof m & { date: IsoDate } => Boolean(m.date))
    .map((m) => {
      const inDays = daysBetween(today, m.date)
      return {
        key: m.key,
        label: m.label,
        date: m.date,
        inDays,
        kind: inDays === 0 ? ('today' as const) : inDays > 0 ? ('upcoming' as const) : ('past' as const),
        icon: m.icon,
      }
    })
    .sort((a, b) => a.date.localeCompare(b.date))
}

export function resolveJourney(profile: Profile, today: IsoDate = todayIso()): JourneyState {
  const phaseId = inferPhase(profile, today)
  const phase = PHASES[phaseId]

  const anchorDate = anchorValue(profile, phase)
  const dayInPhase = anchorDate ? daysBetween(anchorDate, today) : 0

  const daysPastTransfer = profile.transferOn ? daysBetween(profile.transferOn, today) : null
  const daysPastRetrieval = profile.retrievalOn ? daysBetween(profile.retrievalOn, today) : null
  const daysPastOvulationEquivalent =
    daysPastTransfer !== null && daysPastTransfer >= 0
      ? daysPastTransfer + (profile.embryoDayAtTransfer ?? 5)
      : daysPastRetrieval !== null && daysPastRetrieval >= 0
        ? daysPastRetrieval
        : null

  const milestones = buildMilestones(profile, today)
  const nextMilestone = milestones.find((m) => m.inDays > 0) ?? null

  const journeyStart =
    profile.tryingSince ??
    profile.diagnosticsStartedOn ??
    profile.stimulationStartOn ??
    profile.retrievalOn ??
    profile.transferOn ??
    profile.lastPeriodOn ??
    null

  return {
    today,
    phase,
    dayInPhase,
    dayLabel: buildDayLabel(phase, dayInPhase, { hasAnchor: anchorDate !== null }),
    anchorDate,
    progress:
      phase.typicalDays && phase.typicalDays > 0
        ? Math.max(0, Math.min(1, dayInPhase / phase.typicalDays))
        : null,
    modifiers: profile.modifiers,
    group: phase.group,
    daysPastTransfer,
    daysPastRetrieval,
    daysPastOvulationEquivalent,
    milestones,
    nextMilestone,
    journeyDays: journeyStart ? daysBetween(journeyStart, today) : null,
  }
}

function buildDayLabel(
  phase: PhaseDefinition,
  day: number,
  ctx: { hasAnchor: boolean },
): string {
  if (!ctx.hasAnchor || !phase.dayLabel) return phase.title
  return `Dnes je ${phase.dayLabel(day)}`.replace('Dnes je Den', 'Dnes je den')
}


/**
 * Jak dobře daný obsah sedí na aktuální stav. Používá doporučovací systém.
 * Vrací 0 (nesedí) až 1 (přesná trefa).
 */
export function phaseAffinity(state: JourneyState, phases: readonly PhaseId[]): number {
  if (phases.length === 0) return 0.25
  if (phases.includes(state.phase.id)) return 1

  const sameGroup = phases.some((p) => PHASES[p].group === state.phase.group)
  if (sameGroup) return 0.55

  // Obsah z fáze, která nás teprve čeká, má nenulovou hodnotu — příprava.
  const isUpcoming = phases.some((p) => state.phase.next.includes(p))
  if (isUpcoming) return 0.4

  return 0.08
}
