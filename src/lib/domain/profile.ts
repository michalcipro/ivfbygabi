import type { PhaseId } from './phases'

/**
 * Modifikátory nemění fázi, ale mění obsah v ní.
 * Např. `preterm` přepne vývoj dítěte na korigovaný věk,
 * `csection` přepne obsah šestinedělí na rekonvalescenci po císaři.
 */
export const MODIFIER_IDS = [
  // Diagnózy
  'pcos',
  'endometriosis',
  'adenomyosis',
  'low_amh',
  'male_factor',
  'tubal_factor',
  'thyroid',
  'thrombophilia',
  'immunology',
  'unexplained',
  // Způsob léčby
  'donor_egg',
  'donor_sperm',
  'donor_embryo',
  'icsi',
  'pgt',
  'frozen_transfer',
  'surrogacy',
  // Situace při transferu
  'twins',
  // Situace
  'after_loss',
  'repeated_failure',
  'single_mother',
  'same_sex_couple',
  'secondary_infertility',
] as const

export type ModifierId = (typeof MODIFIER_IDS)[number]

export const MODIFIER_LABELS: Record<ModifierId, string> = {
  pcos: 'PCOS',
  endometriosis: 'Endometrióza',
  adenomyosis: 'Adenomyóza',
  low_amh: 'Nízké AMH',
  male_factor: 'Mužský faktor',
  tubal_factor: 'Neprůchodné vejcovody',
  thyroid: 'Štítná žláza',
  thrombophilia: 'Trombofilie',
  immunology: 'Imunologie',
  unexplained: 'Nevysvětlená neplodnost',
  donor_egg: 'Darovaná vajíčka',
  donor_sperm: 'Darované spermie',
  donor_embryo: 'Darované embryo',
  icsi: 'ICSI',
  pgt: 'PGT',
  frozen_transfer: 'Kryoembryotransfer (KET)',
  surrogacy: 'Náhradní mateřství',
  twins: 'Dvojčata',
  after_loss: 'Po ztrátě',
  repeated_failure: 'Opakované neúspěchy',
  single_mother: 'Sama',
  same_sex_couple: 'Stejnopohlavní pár',
  secondary_infertility: 'Sekundární neplodnost',
}

/** Témata pro doporučovací systém. Učí se z chování uživatelky. */
export const TOPIC_IDS = [
  'stimulace',
  'embryologie',
  'transfer',
  'cekani',
  'hormony',
  'vysledky',
  'leky',
  'strava',
  'pohyb',
  'psychika',
  'vztah',
  'partner',
  'ztrata',
  'tehotenstvi',
  'spanek',
  'finance',
  'klinika',
  'genetika',
  'darcovstvi',
  'komunita',
  'sebepece',
] as const

export type TopicId = (typeof TOPIC_IDS)[number]

export const TOPIC_LABELS: Record<TopicId, string> = {
  stimulace: 'Stimulace',
  embryologie: 'Embryologie',
  transfer: 'Transfer',
  cekani: 'Čekání',
  hormony: 'Hormony',
  vysledky: 'Výsledky',
  leky: 'Léky',
  strava: 'Strava',
  pohyb: 'Pohyb',
  psychika: 'Psychika',
  vztah: 'Vztah',
  partner: 'Partner',
  ztrata: 'Ztráta',
  tehotenstvi: 'Těhotenství',
  spanek: 'Spánek',
  finance: 'Finance',
  klinika: 'Klinika',
  genetika: 'Genetika',
  darcovstvi: 'Dárcovství',
  komunita: 'Komunita',
  sebepece: 'Sebepéče',
}

/** Datum jako `YYYY-MM-DD`. Nikdy `Date`, kvůli časovým pásmům a serializaci. */
export type IsoDate = string

export interface Profile {
  id: string
  userId: string
  displayName: string
  /** Uživatelka si volí, zda je v komunitě vidět pod jménem nebo anonymně. */
  anonymousInCommunity: boolean

  /** Fáze, kterou uživatelka zvolila. `null` = odvodit automaticky z dat. */
  declaredPhase: PhaseId | null
  /**
   * Kdy si uživatelka fázi naposledy zvolila sama.
   *
   * Bez tohohle data je volba k ničemu. Odvození fáze z dat profilu je
   * silnější než nálepka, takže žena, která přepne na „IVF nevyšlo“, by
   * dál dostávala injekce, protože v profilu leží datum stimulace.
   * S tímhle datem platí pravidlo: **ruční volba vyhrává nad daty, která
   * jsou starší než ona.** Dopředu se aplikace posunout smí, dozadu ne.
   */
  phaseDeclaredOn: IsoDate | null

  birthYear: number | null
  modifiers: ModifierId[]
  /** Vybrané důvody, proč je žena indikovaná k IVF. Id z `DIAGNOSES`. */
  diagnoses: string[]

  // --- Kotevní data cesty ------------------------------------------------
  tryingSince: IsoDate | null
  diagnosticsStartedOn: IsoDate | null
  iuiOn: IsoDate | null
  stimulationStartOn: IsoDate | null
  retrievalOn: IsoDate | null
  transferOn: IsoDate | null
  betaTestOn: IsoDate | null
  lossOn: IsoDate | null
  /**
   * Proběhl transfer, u kterého uživatelka ještě nezapsala výsledek?
   *
   * Odvozuje se z běžícího cyklu, neukládá se. Slouží k jedinému účelu:
   * aby aplikace po čtrnáctém dni sama nerozhodla, že to nevyšlo. Dokud
   * si žena výsledek nezapíše, nikdo jiný ho neví.
   */
  transferResultPending?: boolean
  lastPeriodOn: IsoDate | null

  // --- Čísla cesty -------------------------------------------------------
  amh: number | null
  ivfCycles: number
  transfersDone: number
  miscarriages: number
  embryosCreated: number
  embryosFrozen: number
  /** Den kultivace přeneseného embrya (3 nebo 5). Pro přesný výpočet DPO. */
  embryoDayAtTransfer: number | null
  /** Gestační týden v době porodu. Pro korigovaný věk. */
  gestationalWeeksAtBirth: number | null
  clinicName: string | null

  createdAt: string
  updatedAt: string
}

export function emptyProfile(userId: string, id: string, now: string): Profile {
  return {
    id,
    userId,
    displayName: '',
    anonymousInCommunity: true,
    declaredPhase: null,
    birthYear: null,
    modifiers: [],
    diagnoses: [],
    phaseDeclaredOn: null,
    tryingSince: null,
    diagnosticsStartedOn: null,
    iuiOn: null,
    stimulationStartOn: null,
    retrievalOn: null,
    transferOn: null,
    betaTestOn: null,
    lossOn: null,
    transferResultPending: false,
    lastPeriodOn: null,
    amh: null,
    ivfCycles: 0,
    transfersDone: 0,
    miscarriages: 0,
    embryosCreated: 0,
    embryosFrozen: 0,
    embryoDayAtTransfer: null,
    gestationalWeeksAtBirth: null,
    clinicName: null,
    createdAt: now,
    updatedAt: now,
  }
}

export function isModifierId(value: unknown): value is ModifierId {
  return typeof value === 'string' && (MODIFIER_IDS as readonly string[]).includes(value)
}

export function isTopicId(value: unknown): value is TopicId {
  return typeof value === 'string' && (TOPIC_IDS as readonly string[]).includes(value)
}
