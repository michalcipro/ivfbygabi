/**
 * Cesta uživatelky.
 *
 * Aplikace pokrývá cestu od prvního rozhodnutí mít dítě po pozitivní hCG.
 * A všechny odbočky, které po cestě přijdou, včetně ztrát. Fáze je uzel
 * v této cestě. Modifikátory (dárcovství, PGT, kryotransfer…) fázi nemění,
 * ale mění obsah, který se v ní zobrazuje.
 *
 * ROZSAH KONČÍ U POZITIVNÍHO TESTU. Průběh těhotenství, porod a péče
 * o dítě jsou samostatná etapa a patří do samostatné aplikace, kdyby se
 * sem přilepily, byla by tahle z poloviny o něčem jiném a přestala by být
 * dobrá v tom, kvůli čemu vzniká. `beta_positive` je proto koncová fáze
 * a předává ženu do péče jejího gynekologa.
 */

export const PHASE_IDS = [
  // Plánování rodičovství
  'thinking',
  'preparing_body',
  'trying_naturally',
  // Diagnostika a méně invazivní léčba
  'diagnostics',
  'iui',
  // IVF cyklus
  'ivf_prep',
  'stimulation',
  'retrieval',
  'fertilization',
  'embryo_culture',
  'transfer',
  'two_week_wait',
  'beta_positive',
  // Mezidobí a ztráty
  'waiting_next_attempt',
  'repeated_failure',
  'loss_biochemical',
  'loss_ectopic',
  'loss_missed',
  'loss_miscarriage',
  'uterine_revision',
  'genetic_testing',
] as const

export type PhaseId = (typeof PHASE_IDS)[number]

/** Skupiny fází. Používají se pro navigaci v průvodci a pro barvu prostředí. */
export const PHASE_GROUPS = [
  'planning',
  'diagnosis',
  'treatment',
  'waiting',
  'loss',
] as const

export type PhaseGroup = (typeof PHASE_GROUPS)[number]

export interface PhaseDefinition {
  id: PhaseId
  group: PhaseGroup
  /** Krátký název pro navigaci. */
  name: string
  /** Delší, laskavý popis pro průvodce. */
  title: string
  description: string
  /**
   * Jak se počítá den ve fázi. `anchor` říká, ze kterého data profilu
   * se odvozuje „Dnes jste X. den…“.
   */
  anchor: AnchorKey | null
  /** Předpona pro popisek dne, např. „Dnes jste 5. den po transferu.“ */
  dayLabel?: (day: number) => string
  /** Typická délka fáze ve dnech, jen pro odhad postupu, ne pro lékařská tvrzení. */
  typicalDays: number | null
  /** Fáze, do kterých se běžně přechází. Slouží k nabídce „co dál“. */
  next: PhaseId[]
  /** Emoční tón. Ovlivňuje výběr povzbuzení a meditací. */
  tone: 'hopeful' | 'intense' | 'tender' | 'grieving' | 'practical' | 'joyful'
  /** Zobrazit v onboardingu jako volitelný vstupní bod? */
  selectableAtOnboarding: boolean
}

export type AnchorKey =
  | 'tryingSince'
  | 'diagnosticsStartedOn'
  | 'iuiOn'
  | 'stimulationStartOn'
  | 'retrievalOn'
  | 'transferOn'
  | 'betaTestOn'
  | 'lossOn'
  | 'lastPeriodOn'

const G = (n: number) => n

export const PHASES: Record<PhaseId, PhaseDefinition> = {
  thinking: {
    id: 'thinking',
    group: 'planning',
    name: 'Přemýšlíme o dítěti',
    title: 'Přemýšlíme o dítěti',
    description:
      'Období, kdy se rozhodnutí teprve rodí. Není co dohánět. Je čas se ptát, zjišťovat a připravovat se v klidu.',
    anchor: null,
    typicalDays: null,
    next: ['preparing_body', 'trying_naturally'],
    tone: 'hopeful',
    selectableAtOnboarding: true,
  },
  preparing_body: {
    id: 'preparing_body',
    group: 'planning',
    name: 'Příprava těla',
    title: 'Příprava těla a mysli',
    description:
      'Tři měsíce před početím se tvoří vajíčko, které možná bude to vaše. Co děláte teď, má smysl.',
    anchor: null,
    dayLabel: (d) => `${d}. den vaší přípravy`,
    typicalDays: G(90),
    next: ['trying_naturally', 'diagnostics'],
    tone: 'practical',
    selectableAtOnboarding: true,
  },
  trying_naturally: {
    id: 'trying_naturally',
    group: 'planning',
    name: 'Snažíme se přirozeně',
    title: 'Snažíme se přirozeně',
    description:
      'Sledování cyklu, plodné dny, naděje každý měsíc. Provedeme vás tím, aby ze snažení nebyla dřina.',
    anchor: 'tryingSince',
    dayLabel: (d) => `${Math.floor(d / 30) + 1}. měsíc snažení`,
    typicalDays: null,
    next: ['diagnostics', 'beta_positive'],
    tone: 'hopeful',
    selectableAtOnboarding: true,
  },
  diagnostics: {
    id: 'diagnostics',
    group: 'diagnosis',
    name: 'Diagnostika',
    title: 'Diagnostika neplodnosti',
    description:
      'Vyšetření, zkratky, čekání na výsledky. Vysvětlíme každé z nich lidsky. Abyste věděla, co se děje a proč.',
    anchor: 'diagnosticsStartedOn',
    dayLabel: (d) => `${d}. den od zahájení vyšetření`,
    typicalDays: G(90),
    next: ['iui', 'ivf_prep', 'trying_naturally'],
    tone: 'practical',
    selectableAtOnboarding: true,
  },
  iui: {
    id: 'iui',
    group: 'treatment',
    name: 'Inseminace (IUI)',
    title: 'Intrauterinní inseminace',
    description: 'Šetrnější krok před IVF. Co obnáší, jak se připravit a co čekat.',
    anchor: 'iuiOn',
    dayLabel: (d) => (d >= 0 ? `${d}. den po inseminaci` : `${-d} dní do inseminace`),
    typicalDays: G(16),
    next: ['two_week_wait', 'ivf_prep'],
    tone: 'hopeful',
    selectableAtOnboarding: true,
  },
  ivf_prep: {
    id: 'ivf_prep',
    group: 'treatment',
    name: 'Příprava na IVF',
    title: 'Příprava na IVF',
    description:
      'Než začne stimulace. Papíry, vyšetření, léky, otázky na kliniku a hlavně. Nastavení očekávání.',
    anchor: null,
    typicalDays: G(30),
    next: ['stimulation'],
    tone: 'practical',
    selectableAtOnboarding: true,
  },
  stimulation: {
    id: 'stimulation',
    group: 'treatment',
    name: 'Stimulace',
    title: 'Stimulace vaječníků',
    description:
      'Injekce, ultrazvuky, folikuly, hormony. Nejintenzivnější týden a půl celého cyklu. Den po dni s vámi.',
    anchor: 'stimulationStartOn',
    dayLabel: (d) => `${d + 1}. den stimulace`,
    typicalDays: G(11),
    next: ['retrieval'],
    tone: 'intense',
    selectableAtOnboarding: true,
  },
  retrieval: {
    id: 'retrieval',
    group: 'treatment',
    name: 'Odběr vajíček',
    title: 'Odběr vajíček (punkce)',
    description: 'Den odběru a dny těsně po něm. Co dělat, co je normální a kdy volat.',
    anchor: 'retrievalOn',
    dayLabel: (d) => (d === 0 ? 'Den odběru' : `${d}. den po odběru`),
    typicalDays: G(3),
    next: ['fertilization'],
    tone: 'intense',
    selectableAtOnboarding: true,
  },
  fertilization: {
    id: 'fertilization',
    group: 'treatment',
    name: 'Oplození',
    title: 'Oplození',
    description:
      'Vaše vajíčka se právě setkala se spermiemi. Zítra přijde první telefonát z embryologie.',
    anchor: 'retrievalOn',
    dayLabel: (d) => `${d}. den po odběru`,
    typicalDays: G(1),
    next: ['embryo_culture'],
    tone: 'intense',
    selectableAtOnboarding: false,
  },
  embryo_culture: {
    id: 'embryo_culture',
    group: 'treatment',
    name: 'Embrya',
    title: 'Kultivace embryí',
    description:
      'Nejtišší a nejtěžší dny cyklu. Vysvětlíme, co znamenají čísla a písmena ve zprávě z laboratoře.',
    anchor: 'retrievalOn',
    dayLabel: (d) => `${d}. den kultivace`,
    typicalDays: G(5),
    next: ['transfer', 'waiting_next_attempt'],
    tone: 'intense',
    selectableAtOnboarding: true,
  },
  transfer: {
    id: 'transfer',
    group: 'treatment',
    name: 'Transfer',
    title: 'Embryotransfer',
    description: 'Den, na který jste čekala. Krátký zákrok s obrovskou váhou.',
    anchor: 'transferOn',
    dayLabel: (d) =>
      d === 0 ? 'Den transferu' : d < 0 ? `${-d} dní do transferu` : `${d}. den po transferu`,
    typicalDays: G(1),
    next: ['two_week_wait'],
    tone: 'tender',
    selectableAtOnboarding: true,
  },
  two_week_wait: {
    id: 'two_week_wait',
    group: 'waiting',
    name: 'Čekání na hCG',
    title: 'Čekání na hCG',
    description:
      'Nejdelších deset dní vašeho života. Každý den vám řekneme, co se právě děje a co je normální cítit.',
    anchor: 'transferOn',
    dayLabel: (d) => `${d}. den po transferu`,
    typicalDays: G(11),
    next: ['beta_positive', 'loss_biochemical', 'waiting_next_attempt'],
    tone: 'tender',
    selectableAtOnboarding: true,
  },
  beta_positive: {
    id: 'beta_positive',
    group: 'waiting',
    name: 'Pozitivní hCG',
    title: 'Pozitivní hCG',
    description:
      'Dvě čárky nebo číslo, na které jste čekala. A hned s ním nová vlna otázek a opatrné radosti.',
    anchor: 'betaTestOn',
    dayLabel: (d) => `${d}. den od pozitivního testu`,
    typicalDays: G(21),
    /*
     * Koncová fáze aplikace, pokud těhotenství pokračuje. Odsud se jde
     * k vlastnímu gynekologovi, ne dál sem.
     *
     * Ztráty tu ale stát musí. Většina ztrát po IVF přichází právě odsud,
     * z týdnů mezi pozitivním hCG a prvním ultrazvukem, a když z téhle
     * fáze nevede žádná další, aplikace ženě po pozitivním testu nenabídne
     * jedinou cestu, kterou ve skutečnosti může jít.
     */
    next: ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'loss_ectopic'],
    tone: 'joyful',
    selectableAtOnboarding: true,
  },
  waiting_next_attempt: {
    id: 'waiting_next_attempt',
    group: 'waiting',
    name: 'Čekání na další pokus',
    title: 'Mezi pokusy',
    description:
      'Pauza, kterou jste si nevybrala. Je to čas na regeneraci, otázky pro lékaře a na sebe.',
    anchor: null,
    typicalDays: null,
    next: ['ivf_prep', 'stimulation', 'transfer', 'genetic_testing'],
    tone: 'tender',
    selectableAtOnboarding: true,
  },
  repeated_failure: {
    id: 'repeated_failure',
    group: 'loss',
    name: 'Opakované neúspěchy',
    title: 'Opakované neúspěchy',
    description:
      'Když se to nedaří opakovaně. Jaká vyšetření mají smysl, co se dá změnit a jak to psychicky ustát.',
    anchor: null,
    typicalDays: null,
    next: ['genetic_testing', 'ivf_prep', 'waiting_next_attempt'],
    tone: 'grieving',
    selectableAtOnboarding: true,
  },
  loss_biochemical: {
    id: 'loss_biochemical',
    group: 'loss',
    name: 'Biochemické těhotenství',
    title: 'Biochemické těhotenství',
    description:
      'Těhotenství, které skončilo dřív, než ho někdo stihl vidět. Byla jste těhotná. Ta ztráta je skutečná.',
    anchor: 'lossOn',
    dayLabel: (d) => `${d}. den`,
    typicalDays: G(21),
    // Revize dělohy tu záměrně není. Po biochemickém těhotenství se
    // nedělá, nemá co revidovat, a nabízet ji by ženu jen vyděsilo.
    next: ['waiting_next_attempt', 'genetic_testing', 'repeated_failure'],
    tone: 'grieving',
    selectableAtOnboarding: true,
  },
  loss_ectopic: {
    id: 'loss_ectopic',
    group: 'loss',
    name: 'Mimoděložní těhotenství',
    title: 'Mimoděložní těhotenství',
    description: 'Zdravotně náročná a emočně krutá situace. Provedeme vás léčbou i zotavením.',
    anchor: 'lossOn',
    dayLabel: (d) => `${d}. den`,
    typicalDays: G(60),
    // Revize dělohy sem nepatří: těhotenství nebylo v děloze. Výkon, který
    // po mimoděložním následuje, je na vejcovodu, ne v dutině děložní.
    next: ['waiting_next_attempt', 'genetic_testing'],
    tone: 'grieving',
    selectableAtOnboarding: true,
  },
  loss_missed: {
    id: 'loss_missed',
    group: 'loss',
    name: 'Zamlklé těhotenství',
    title: 'Zamlklé těhotenství',
    description:
      'Ticho na ultrazvuku, které se nedá popsat. Co následuje zdravotně a co pomáhá psychicky.',
    anchor: 'lossOn',
    dayLabel: (d) => `${d}. den`,
    typicalDays: G(60),
    next: ['uterine_revision', 'waiting_next_attempt', 'genetic_testing'],
    tone: 'grieving',
    selectableAtOnboarding: true,
  },
  loss_miscarriage: {
    id: 'loss_miscarriage',
    group: 'loss',
    name: 'Samovolný potrat',
    title: 'Samovolný potrat',
    description: 'Co se děje s tělem, co s duší a jak dlouho trvá, než se dá pokračovat.',
    anchor: 'lossOn',
    dayLabel: (d) => `${d}. den`,
    typicalDays: G(60),
    next: ['uterine_revision', 'waiting_next_attempt', 'genetic_testing'],
    tone: 'grieving',
    selectableAtOnboarding: true,
  },
  uterine_revision: {
    id: 'uterine_revision',
    group: 'loss',
    name: 'Revize dělohy',
    title: 'Revize dělohy',
    description: 'Zákrok, příprava, rekonvalescence a kdy se smí zkoušet znovu.',
    anchor: null,
    typicalDays: G(30),
    next: ['waiting_next_attempt', 'genetic_testing'],
    tone: 'practical',
    // Byla vypnutá, takže se do ní nedalo dostat, přestože pro ni byl
    // napsaný celý průvodce. Přitom je to nejčastější zdravotní krok po
    // zamlklém těhotenství a po neúplném potratu.
    selectableAtOnboarding: true,
  },
  genetic_testing: {
    id: 'genetic_testing',
    group: 'diagnosis',
    name: 'Genetická vyšetření',
    title: 'Genetická a imunologická vyšetření',
    description: 'Karyotyp, trombofilie, PGT, imunologie. Co se testuje a co z toho plyne.',
    anchor: null,
    typicalDays: G(45),
    next: ['ivf_prep', 'waiting_next_attempt'],
    tone: 'practical',
    selectableAtOnboarding: true,
  },
}

export const PHASE_GROUP_META: Record<
  PhaseGroup,
  { name: string; blurb: string; accent: string }
> = {
  planning: {
    name: 'Plánování',
    blurb: 'Než začne cesta',
    accent: 'var(--color-sage)',
  },
  diagnosis: {
    name: 'Diagnostika',
    blurb: 'Hledáme odpovědi',
    accent: 'var(--color-sky)',
  },
  treatment: {
    name: 'Léčba',
    blurb: 'IUI, IVF a vše kolem',
    accent: 'var(--color-champagne)',
  },
  waiting: {
    name: 'Čekání',
    blurb: 'Nejtěžší dny',
    accent: 'var(--color-sand)',
  },
  loss: {
    name: 'Ztráty',
    blurb: 'Když to bolí',
    accent: 'var(--color-blush)',
  },
}

export function phaseGroupOrder(group: PhaseGroup): number {
  return PHASE_GROUPS.indexOf(group)
}

export function phasesInGroup(group: PhaseGroup): PhaseDefinition[] {
  return PHASE_IDS.map((id) => PHASES[id]).filter((p) => p.group === group)
}

export function isPhaseId(value: unknown): value is PhaseId {
  return typeof value === 'string' && (PHASE_IDS as readonly string[]).includes(value)
}
