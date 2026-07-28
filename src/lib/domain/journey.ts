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

  /** Gestační stáří ve dnech, pokud je uživatelka těhotná. */
  gestationDays: number | null
  gestationWeek: number | null
  /** „24+3“ */
  gestationLabel: string | null

  /** Věk dítěte ve dnech od narození. */
  babyAgeDays: number | null
  /** Korigovaný věk u nedonošených — může být záporný před termínem. */
  correctedAgeDays: number | null
  usesCorrectedAge: boolean
  babyAgeLabel: string | null

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

  // Miminko je na světě.
  if (has('birthOn')) {
    const age = daysBetween(profile.birthOn!, today)
    if (age >= 0) {
      if (mods.has('nicu_stay') || mods.has('preterm')) {
        if (has('cameHomeOn') && daysBetween(profile.cameHomeOn!, today) >= 0) {
          const sinceHome = daysBetween(profile.cameHomeOn!, today)
          if (sinceHome <= 21) return 'coming_home'
          return age <= 42 ? 'postpartum' : age <= 365 ? 'baby_first_year' : 'toddler'
        }
        return 'nicu'
      }
      if (age <= 42) return 'postpartum'
      if (age <= 365) return 'baby_first_year'
      return 'toddler'
    }
  }

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

  // Těhotenství — počítá se z první menstruace nebo z termínu porodu.
  const gest = gestationDaysFor(profile, today)
  if (gest !== null && gest >= 0 && gest < 320) {
    const week = Math.floor(gest / 7)
    if (week < 10) return 'early_pregnancy'
    if (week >= 37) return 'birth_prep'
    if (mods.has('high_risk') || mods.has('preeclampsia') || mods.has('cervical_insufficiency')) {
      return 'high_risk_pregnancy'
    }
    return 'pregnancy'
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

/**
 * Gestační stáří ve dnech.
 * Priorita: termín porodu (nejpřesnější po UZ korekci) → první den poslední
 * menstruace → datum transferu + den kultivace embrya (u IVF nejpřesnější
 * hned po termínu).
 */
export function gestationDaysFor(profile: Profile, today: IsoDate = todayIso()): number | null {
  if (profile.dueDate) {
    const toDue = daysBetween(today, profile.dueDate)
    return 280 - toDue
  }
  if (profile.lastPeriodOn) {
    return daysBetween(profile.lastPeriodOn, today)
  }
  if (profile.transferOn && profile.betaTestOn) {
    // Transfer 5denního embrya = gestačně 2 týdny + 5 dní.
    const embryoDay = profile.embryoDayAtTransfer ?? 5
    const dpt = daysBetween(profile.transferOn, today)
    if (dpt < 0) return null
    return 14 + embryoDay + dpt
  }
  return null
}

/** Odhadovaný termín porodu — dopočítá se, pokud ho uživatelka nezadala. */
export function estimatedDueDate(profile: Profile): IsoDate | null {
  if (profile.dueDate) return profile.dueDate
  if (profile.lastPeriodOn) return addDays(profile.lastPeriodOn, 280)
  if (profile.transferOn) {
    const embryoDay = profile.embryoDayAtTransfer ?? 5
    // Zpětně: den transferu odpovídá gestačně 14 + embryoDay.
    return addDays(profile.transferOn, 280 - (14 + embryoDay))
  }
  return null
}

/**
 * Korigovaný věk u nedonošených dětí: věk od data, kdy měly původně přijít.
 * Používá se pro hodnocení vývoje zhruba do 2 let.
 */
export function correctedAgeDaysFor(profile: Profile, today: IsoDate = todayIso()): number | null {
  if (!profile.birthOn) return null
  const due = profile.dueDate ?? estimatedDueDateFromBirth(profile)
  if (!due) return null
  return daysBetween(due, today)
}

function estimatedDueDateFromBirth(profile: Profile): IsoDate | null {
  if (!profile.birthOn || profile.gestationalWeeksAtBirth === null) return null
  const daysEarly = 280 - profile.gestationalWeeksAtBirth * 7
  if (daysEarly <= 0) return null
  return addDays(profile.birthOn, daysEarly)
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
    { key: 'dueDate', label: 'Termín porodu', date: estimatedDueDate(profile), icon: '❀' },
    { key: 'birthOn', label: 'Narození', date: profile.birthOn, icon: '✿' },
    {
      key: 'nicuAdmissionOn',
      label: 'Přijetí na NICU',
      date: profile.nicuAdmissionOn,
      icon: '◉',
    },
    { key: 'cameHomeOn', label: 'Návrat domů', date: profile.cameHomeOn, icon: '⌂' },
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

  const gestationDays = gestationDaysFor(profile, today)
  const inPregnancy = gestationDays !== null && gestationDays >= 0 && gestationDays < 320

  const babyAgeDays = profile.birthOn ? daysBetween(profile.birthOn, today) : null
  const isPreterm =
    profile.modifiers.includes('preterm') ||
    (profile.gestationalWeeksAtBirth !== null && profile.gestationalWeeksAtBirth < 37)
  const correctedAgeDays = isPreterm ? correctedAgeDaysFor(profile, today) : null
  // Korekce má smysl zhruba do dvou let.
  const usesCorrectedAge =
    isPreterm && correctedAgeDays !== null && babyAgeDays !== null && babyAgeDays < 730

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
    dayLabel: buildDayLabel(phase, dayInPhase, {
      gestationDays,
      babyAgeDays,
      correctedAgeDays,
      usesCorrectedAge,
      hasAnchor: anchorDate !== null,
    }),
    anchorDate,
    progress:
      phase.typicalDays && phase.typicalDays > 0
        ? Math.max(0, Math.min(1, dayInPhase / phase.typicalDays))
        : null,
    modifiers: profile.modifiers,
    group: phase.group,
    gestationDays: inPregnancy ? gestationDays : null,
    gestationWeek: inPregnancy ? Math.floor(gestationDays! / 7) : null,
    gestationLabel: inPregnancy ? gestationLabel(gestationDays!) : null,
    babyAgeDays,
    correctedAgeDays,
    usesCorrectedAge,
    babyAgeLabel:
      babyAgeDays !== null && babyAgeDays >= 0
        ? usesCorrectedAge && correctedAgeDays !== null
          ? `${humanAge(babyAgeDays)} (korigovaně ${
              correctedAgeDays >= 0 ? humanAge(correctedAgeDays) : 'ještě před termínem'
            })`
          : humanAge(babyAgeDays)
        : null,
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
  ctx: {
    gestationDays: number | null
    babyAgeDays: number | null
    correctedAgeDays: number | null
    usesCorrectedAge: boolean
    hasAnchor: boolean
  },
): string {
  // Těhotenství se vždycky popisuje gestačně — tak to říkají i lékaři.
  if (
    (phase.group === 'pregnancy' || phase.id === 'birth_prep') &&
    ctx.gestationDays !== null &&
    ctx.gestationDays >= 0
  ) {
    const w = Math.floor(ctx.gestationDays / 7)
    const d = ctx.gestationDays % 7
    return d === 0 ? `Dnes jste v ${w}. týdnu těhotenství` : `Dnes jste ${w}+${d}`
  }

  // Vývoj dítěte u nedonošených jede podle korigovaného věku.
  if (phase.group === 'baby' && ctx.usesCorrectedAge && ctx.correctedAgeDays !== null) {
    if (ctx.correctedAgeDays < 0) {
      return `Vaše miminko by se mělo teprve narodit za ${czDays(-ctx.correctedAgeDays)}`
    }
    return `Vašemu miminku je korigovaně ${humanAge(ctx.correctedAgeDays)}`
  }

  if (phase.group === 'baby' && ctx.babyAgeDays !== null && ctx.babyAgeDays >= 0) {
    if (phase.id === 'postpartum') return `Dnes je ${ctx.babyAgeDays + 1}. den vašeho šestinedělí`
    return `Vašemu miminku je ${humanAge(ctx.babyAgeDays)}`
  }

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
