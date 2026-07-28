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
  // Těhotenství
  'twins',
  'high_risk',
  'gestational_diabetes',
  'preeclampsia',
  'cervical_insufficiency',
  // Porod
  'csection',
  'vaginal_birth',
  'induced_birth',
  'preterm',
  'nicu_stay',
  // Po porodu
  'breastfeeding',
  'formula_feeding',
  'combination_feeding',
  'pumping',
  'reflux',
  'colic',
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
  high_risk: 'Rizikové těhotenství',
  gestational_diabetes: 'Gestační diabetes',
  preeclampsia: 'Preeklampsie',
  cervical_insufficiency: 'Zkracující se čípek',
  csection: 'Císařský řez',
  vaginal_birth: 'Přirozený porod',
  induced_birth: 'Vyvolávaný porod',
  preterm: 'Předčasný porod',
  nicu_stay: 'Pobyt na NICU',
  breastfeeding: 'Kojení',
  formula_feeding: 'Umělá výživa',
  combination_feeding: 'Kombinované krmení',
  pumping: 'Odstříkávání',
  reflux: 'Reflux',
  colic: 'Koliky',
  after_loss: 'Po ztrátě',
  repeated_failure: 'Opakované neúspěchy',
  single_mother: 'Sama',
  same_sex_couple: 'Stejnopohlavní pár',
  secondary_infertility: 'Sekundární neplodnost',
}

/** Témata pro doporučovací systém — učí se z chování uživatelky. */
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
  'rizikove',
  'porod',
  'cisar',
  'nedonosenost',
  'nicu',
  'sestinedeli',
  'kojeni',
  'umela_vyziva',
  'spanek',
  'vyvoj',
  'zdravi_ditete',
  'prikrmy',
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
  rizikove: 'Rizikové těhotenství',
  porod: 'Porod',
  cisar: 'Císařský řez',
  nedonosenost: 'Nedonošenost',
  nicu: 'NICU',
  sestinedeli: 'Šestinedělí',
  kojeni: 'Kojení',
  umela_vyziva: 'Umělá výživa',
  spanek: 'Spánek',
  vyvoj: 'Vývoj dítěte',
  zdravi_ditete: 'Zdraví dítěte',
  prikrmy: 'Příkrmy',
  finance: 'Finance',
  klinika: 'Klinika',
  genetika: 'Genetika',
  darcovstvi: 'Dárcovství',
  komunita: 'Komunita',
  sebepece: 'Sebepéče',
}

/** Datum jako `YYYY-MM-DD`. Nikdy `Date` — kvůli časovým pásmům a serializaci. */
export type IsoDate = string

export interface Profile {
  id: string
  userId: string
  displayName: string
  /** Uživatelka si volí, zda je v komunitě vidět pod jménem nebo anonymně. */
  anonymousInCommunity: boolean

  /** Fáze, kterou uživatelka zvolila. `null` = odvodit automaticky z dat. */
  declaredPhase: PhaseId | null

  birthYear: number | null
  modifiers: ModifierId[]

  // --- Kotevní data cesty ------------------------------------------------
  tryingSince: IsoDate | null
  diagnosticsStartedOn: IsoDate | null
  iuiOn: IsoDate | null
  stimulationStartOn: IsoDate | null
  retrievalOn: IsoDate | null
  transferOn: IsoDate | null
  betaTestOn: IsoDate | null
  lossOn: IsoDate | null
  lastPeriodOn: IsoDate | null
  dueDate: IsoDate | null
  birthOn: IsoDate | null
  nicuAdmissionOn: IsoDate | null
  cameHomeOn: IsoDate | null

  // --- Čísla cesty -------------------------------------------------------
  amh: number | null
  ivfCycles: number
  transfersDone: number
  miscarriages: number
  embryosCreated: number
  embryosFrozen: number
  /** Den kultivace přeneseného embrya (3 nebo 5) — pro přesný výpočet DPO. */
  embryoDayAtTransfer: number | null
  /** Gestační týden v době porodu — pro korigovaný věk. */
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
    tryingSince: null,
    diagnosticsStartedOn: null,
    iuiOn: null,
    stimulationStartOn: null,
    retrievalOn: null,
    transferOn: null,
    betaTestOn: null,
    lossOn: null,
    lastPeriodOn: null,
    dueDate: null,
    birthOn: null,
    nicuAdmissionOn: null,
    cameHomeOn: null,
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
