import type { IsoDate } from './profile'
import { addDays, daysBetween, today as todayIso } from './dates'

/**
 * IVF cyklus jako zdravotní karta.
 *
 * Jeden cyklus = jeden záznam, ve kterém je pohromadě všechno: klinika,
 * lékař, protokol, milníky, čísla z laboratoře a výsledek. Žena po třetím
 * cyklu se potřebuje podívat, co bylo minule jinak. A nesmí to hledat
 * po pěti obrazovkách.
 *
 * Čistý modul bez závislosti na DB i na prohlížeči.
 *
 * ------------------------------------------------------------ TRANSFERY ---
 * Jeden cyklus může mít víc transferů. Po odběru se udělá čerstvý transfer,
 * zbylá embrya se zamrazí a v dalších měsících se z nich dělají kryotransfery.
 * A pořád je to stejná zásoba ze stejného odběru. Proto tu není jedno datum
 * transferu, ale seznam. Stejně tak testování hCG: doma se testuje víc dní
 * po sobě a každý proužek je vlastní záznam.
 *
 * Datum transferu ani odběru hCG se proto v řádku cyklu neukládá. Kdyby se ukládalo
 * vedle seznamu, jednou by se ty dva zdroje rozešly a obrazovka by tvrdila
 * něco jiného než karta. Kdo je potřebuje, ptá se přes `currentTransfer()`,
 * `lastTransferDate()` a `betaDate()`.
 */

/**
 * Jak cyklus dopadl.
 *
 * IVF cesta není binární „vyšlo / nevyšlo“. Cyklus může skončit tím, že
 * nezbylo embryo k transferu, že se transfer zrušil, biochemickým nebo
 * mimoděložním těhotenstvím. Každá z těch větví je vlastní výsledek
 * a v aplikaci má vlastní cestu, kdyby se schovaly pod „negativní“,
 * ženě by aplikace tvrdila, že se nic nestalo.
 */
export type CycleOutcome =
  | 'probiha'
  | 'tehotenstvi'
  | 'negativni'
  | 'biochemicke'
  | 'mimodelozni'
  | 'ztrata'
  | 'bez_embrya'
  | 'zruseno'
  | 'zamrazeno'

export const OUTCOME_LABEL: Record<CycleOutcome, string> = {
  probiha: 'Probíhá',
  tehotenstvi: 'Těhotenství',
  negativni: 'Negativní hCG',
  biochemicke: 'Biochemické těhotenství',
  mimodelozni: 'Mimoděložní těhotenství',
  ztrata: 'Ztráta těhotenství',
  bez_embrya: 'Nebylo embryo k transferu',
  zruseno: 'Cyklus zrušen',
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

/**
 * Odkaz na fotku. Samotný obrázek leží mimo. V prohlížeči v IndexedDB,
 * protože zpráva z embryologie vyfocená mobilem je násobně větší než
 * všechno ostatní dohromady a do localStorage se nevejde.
 */
export interface PhotoRef {
  id: string
  name: string
}

// ------------------------------------------------------------- transfery ---

export type TransferKind = 'cerstvy' | 'kryo'

export const TRANSFER_KIND_LABEL: Record<TransferKind, string> = {
  cerstvy: 'Čerstvý embryotransfer',
  kryo: 'Kryoembryotransfer (KET)',
}

export const TRANSFER_KIND_SHORT: Record<TransferKind, string> = {
  cerstvy: 'čerstvý',
  kryo: 'KET',
}

export type TransferOutcome =
  | 'ceka'
  | 'pozitivni'
  | 'biochemicke'
  | 'mimodelozni'
  | 'negativni'
  | 'ztrata'
  | 'zruseno'

export const TRANSFER_OUTCOME_LABEL: Record<TransferOutcome, string> = {
  ceka: 'Čeká na výsledek',
  pozitivni: 'Pozitivní hCG',
  biochemicke: 'Biochemické těhotenství',
  mimodelozni: 'Mimoděložní těhotenství',
  negativni: 'Negativní hCG',
  ztrata: 'Ztráta těhotenství',
  zruseno: 'Zrušený transfer',
}

/** Příprava sliznice před transferem. */
export type PrepKind = '' | 'prirozeny' | 'modifikovany' | 'substituovany' | 'jiny'

export const PREP_LABEL: Record<PrepKind, string> = {
  '': 'Nezapsáno',
  prirozeny: 'Přirozený cyklus',
  modifikovany: 'Modifikovaný přirozený cyklus',
  substituovany: 'Hormonálně řízený (substituovaný)',
  jiny: 'Jiná příprava',
}

/** Metoda oplodnění. Volí ji embryolog s lékařem podle situace páru. */
export type FertMethod = '' | 'ivf' | 'icsi' | 'imsi' | 'picsi' | 'macs' | 'kombinace'

export const FERT_LABEL: Record<FertMethod, string> = {
  '': 'Nezapsáno',
  ivf: 'Klasické IVF',
  icsi: 'ICSI',
  imsi: 'IMSI',
  picsi: 'PICSI',
  macs: 'MACS',
  kombinace: 'Kombinace metod',
}

/** Jeden transfer uvnitř cyklu. */
export interface CycleTransfer {
  id: string
  kind: TransferKind
  date: IsoDate | null
  /** Která embrya se přenesla. Id z `Embryo`. Může být prázdné. */
  embryoIds: string[]
  /** Kolik embryí bylo vloženo. */
  embryos: number | null
  /** Den kultivace přeneseného embrya. Obvykle 3 až 6. */
  embryoDay: number | null
  /** Hodnocení embrya tak, jak ho řekla embryologie. „4AA“. */
  grade: string
  /** Jak se připravovala sliznice. */
  prep: PrepKind
  /** Výška sliznice v den transferu, v mm. */
  endometrium: number | null
  /** Léky a podpora luteální fáze. Vlastními slovy. */
  meds: string
  /** Doplňkové metody u tohohle transferu. Id z `METHODS`. */
  support: string[]
  /** Zrušený transfer je taky výsledek. A má vlastní důvod. */
  cancelled: boolean
  cancelReason: string
  outcome: TransferOutcome
  note: string
  photos: PhotoRef[]
}

export function emptyTransfer(id: string, kind: TransferKind = 'cerstvy'): CycleTransfer {
  return {
    id,
    kind,
    date: null,
    embryoIds: [],
    embryos: null,
    embryoDay: null,
    grade: '',
    prep: '',
    endometrium: null,
    meds: '',
    support: [],
    cancelled: false,
    cancelReason: '',
    outcome: 'ceka',
    note: '',
    photos: [],
  }
}

// ---------------------------------------------------------------- testy ---

export type HcgKind = 'domaci' | 'krev'

export const HCG_KIND_LABEL: Record<HcgKind, string> = {
  domaci: 'Domácí test',
  krev: 'Odběr krve (hCG)',
}

/** Jak proužek vypadal. U odběru krve se nepoužívá. Tam mluví číslo. */
export type HcgLook = '' | 'negativni' | 'stin' | 'slaba' | 'jasna'

export const HCG_LOOK_LABEL: Record<HcgLook, string> = {
  '': 'Nezapsáno',
  negativni: 'Jedna čárka. Negativní',
  stin: 'Stín, nejsem si jistá',
  slaba: 'Slabá druhá čárka',
  jasna: 'Jasná druhá čárka',
}

export interface HcgTest {
  id: string
  date: IsoDate | null
  kind: HcgKind
  /** Ke kterému transferu se test váže. Prázdné = nespárováno. */
  transferId: string
  look: HcgLook
  /** Hodnota hCG v IU/l. U domácího testu zůstává prázdná. */
  value: number | null
  note: string
  photos: PhotoRef[]
}

export function emptyHcgTest(id: string, kind: HcgKind = 'domaci'): HcgTest {
  return { id, date: null, kind, transferId: '', look: '', value: null, note: '', photos: [] }
}

// --------------------------------------------------------------- metody ---

export interface MethodDef {
  id: string
  label: string
  group: string
  /** Jedna věta, co to je. Ne co to umí. O tom rozhoduje klinika. */
  note: string
}

/**
 * Doplňkové metody, které se u cyklu dají zaškrtnout.
 *
 * Je to soupis pro vlastní záznam, ne nabídka a ne doporučení. U části z nich
 * se odborně vede spor, jestli vůbec pomáhají; aplikace to nerozsuzuje a v UI
 * u seznamu stojí věta, že o volbě metod rozhoduje tým na klinice.
 */
export const METHODS: MethodDef[] = [
  // --- oplození a spermie
  { id: 'icsi', label: 'ICSI', group: 'Oplození a spermie', note: 'Spermie se vpraví přímo do vajíčka.' },
  { id: 'picsi', label: 'PICSI', group: 'Oplození a spermie', note: 'Spermie se vybírá podle vazby na kyselinu hyaluronovou.' },
  { id: 'imsi', label: 'IMSI', group: 'Oplození a spermie', note: 'Výběr spermie při velmi vysokém zvětšení.' },
  { id: 'macs', label: 'MACS', group: 'Oplození a spermie', note: 'Magnetická separace. Odfiltrují se poškozené spermie.' },
  { id: 'mikrofluidni', label: 'Mikrofluidní selekce spermií', group: 'Oplození a spermie', note: 'Spermie se vybírají průchodem mikrokanálky (ZyMōt a podobné).' },
  { id: 'tese', label: 'TESE / MESA / TESA', group: 'Oplození a spermie', note: 'Chirurgický odběr spermií z varlete nebo nadvarlete.' },
  { id: 'dnafrag', label: 'Test fragmentace DNA spermií', group: 'Oplození a spermie', note: 'Měří poškození genetické informace ve spermiích.' },
  { id: 'aoa', label: 'Umělá aktivace oocytu (AOA)', group: 'Oplození a spermie', note: 'Kalciové ionofory nastartují vajíčko, když se neaktivuje samo.' },

  // --- kultivace a embrya
  { id: 'prodlouzena', label: 'Prodloužená kultivace', group: 'Kultivace a embrya', note: 'Embrya se kultivují až do 5.–6. dne.' },
  { id: 'timelapse', label: 'Time-lapse (EmbryoScope)', group: 'Kultivace a embrya', note: 'Nepřetržité snímání embryí přímo v inkubátoru.' },
  { id: 'hatching', label: 'Asistovaný hatching', group: 'Kultivace a embrya', note: 'Nařízne se obal embrya, aby se snáz vylíhlo.' },
  { id: 'embryoglue', label: 'EmbryoGlue', group: 'Kultivace a embrya', note: 'Médium s hyaluronanem, ve kterém se embryo přenáší.' },
  { id: 'embryogen', label: 'EmbryoGen / BlastGen', group: 'Kultivace a embrya', note: 'Kultivační médium s růstovým faktorem GM-CSF.' },
  { id: 'ivm', label: 'IVM', group: 'Kultivace a embrya', note: 'Vajíčka dozrávají v laboratoři místo ve vaječníku.' },
  { id: 'vitrifikace', label: 'Vitrifikace', group: 'Kultivace a embrya', note: 'Zamražení embryí nebo vajíček bleskovým zchlazením.' },

  // --- genetika
  { id: 'pgta', label: 'PGT-A', group: 'Genetika', note: 'Test počtu chromozomů embrya.' },
  { id: 'pgtm', label: 'PGT-M', group: 'Genetika', note: 'Test na konkrétní dědičnou chorobu v rodině.' },
  { id: 'pgtsr', label: 'PGT-SR', group: 'Genetika', note: 'Test u chromozomové přestavby u jednoho z partnerů.' },

  // --- děloha a transfer
  { id: 'sanakin', label: 'Sanakin / autologní cytokiny', group: 'Děloha a transfer', note: 'Zpracovaná vlastní krev se aplikuje do dělohy.' },
  { id: 'prp', label: 'PRP do dělohy nebo vaječníků', group: 'Děloha a transfer', note: 'Plazma bohatá na krevní destičky z vlastní krve.' },
  { id: 'scratching', label: 'Scratching endometria', group: 'Děloha a transfer', note: 'Drobné narušení sliznice před transferem.' },
  { id: 'era', label: 'Test receptivity endometria (ERA)', group: 'Děloha a transfer', note: 'Hledá okno, kdy je sliznice připravená přijmout embryo.' },
  { id: 'imunologie', label: 'Imunologická léčba (Intralipid a podobné)', group: 'Děloha a transfer', note: 'Infuze při podezření na imunitní příčinu.' },
  { id: 'hysteroskopie', label: 'Hysteroskopie', group: 'Děloha a transfer', note: 'Prohlídka dutiny děložní kamerou.' },
  { id: 'seminalni', label: 'Aplikace seminální plazmy', group: 'Děloha a transfer', note: 'Podává se v době kolem odběru nebo transferu.' },

  // --- dárcovství
  { id: 'darvajicka', label: 'Darovaná vajíčka', group: 'Dárcovství', note: 'Cyklus s vajíčky od dárkyně.' },
  { id: 'darspermie', label: 'Darované spermie', group: 'Dárcovství', note: 'Cyklus se spermiemi od dárce.' },
  { id: 'darembryo', label: 'Darované embryo', group: 'Dárcovství', note: 'Přenáší se embryo od dárcovského páru.' },
]

export const METHOD_GROUPS: string[] = [
  'Oplození a spermie',
  'Kultivace a embrya',
  'Genetika',
  'Děloha a transfer',
  'Dárcovství',
]

const METHOD_BY_ID = new Map(METHODS.map((m) => [m.id, m]))

export function methodLabel(id: string): string {
  return METHOD_BY_ID.get(id)?.label ?? id
}

// ------------------------------------------------------------------ řádek ---

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
  /** Fotka protokolu z kliniky. Papír, který se snadno ztratí. */
  protocolPhotos: PhotoRef[]

  /** CD1. První den cyklu. Od něj se počítá Cycle Day i řazení v historii. */
  cd1On: IsoDate | null
  startedOn: IsoDate
  endedOn: IsoDate | null

  // --- milníky ------------------------------------------------------------
  stimStartOn: IsoDate | null
  triggerOn: IsoDate | null
  /** Hodina triggeru. Tady se nesmí splést, proto zvlášť. */
  triggerAt: string
  retrievalOn: IsoDate | null

  // --- laboratoř ----------------------------------------------------------
  eggs: number | null
  mature: number | null
  /** Kolik vajíček šlo do oplodnění. */
  inseminated: number | null
  /** Metoda oplodnění. Volí ji klinika podle situace páru. */
  fertMethod: FertMethod
  /** Normálně oplozená vajíčka (2PN), tedy první den kultivace. */
  fertilized: number | null
  /**
   * Kolik embryí došlo do kterého dne kultivace.
   *
   * Embryologie hlásí vývoj po dnech, ne jedno číslo „blastocysty“. Třetí
   * a čtvrtý den je to počet embryí, která se ještě vyvíjejí; pátý a šestý
   * den počet těch, která právě ten den došla do stádia blastocysty. Proto
   * se dají `day5` a `day6` sečíst a nic se nezapočítá dvakrát.
   *
   * Když má cyklus zapsaná jednotlivá embrya, jsou přesnější ona. Tahle
   * čísla zůstávají pro ženy, které karty embryí vyplňovat nechtějí.
   */
  day2: number | null
  day3: number | null
  day4: number | null
  day5: number | null
  day6: number | null
  frozen: number | null
  /** Fotky zprávy z embryologie. */
  labPhotos: PhotoRef[]

  /** Zaškrtnuté doplňkové metody. Id z `METHODS`. */
  methods: string[]
  /** Metoda, která v seznamu není. */
  methodsNote: string

  transfers: CycleTransfer[]
  hcgTests: HcgTest[]

  outcome: CycleOutcome
  note: string
  /** Fotky k výsledku. Propouštěcí zpráva, závěr, cokoli. */
  resultPhotos: PhotoRef[]
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
    protocolPhotos: [],
    cd1On: null,
    startedOn,
    endedOn: null,
    stimStartOn: null,
    triggerOn: null,
    triggerAt: '',
    retrievalOn: null,
    eggs: null,
    mature: null,
    inseminated: null,
    fertMethod: '',
    fertilized: null,
    day2: null,
    day3: null,
    day4: null,
    day5: null,
    day6: null,
    frozen: null,
    labPhotos: [],
    methods: [],
    methodsNote: '',
    transfers: [],
    hcgTests: [],
    outcome: 'probiha',
    note: '',
    resultPhotos: [],
  }
}

export function cycleTitle(c: CycleRow): string {
  return c.name.trim() || `${c.number}. cyklus`
}

// --------------------------------------------------------- odvozená data ---

/** Transfery v čase. Nedatované jdou nakonec. Ještě se nestaly. */
export function sortedTransfers(c: CycleRow): CycleTransfer[] {
  return [...c.transfers].sort((a, b) => {
    if (a.date && b.date) return a.date.localeCompare(b.date)
    if (a.date) return -1
    if (b.date) return 1
    return 0
  })
}

/**
 * Transfer, o který teď jde.
 *
 * Poslední, který proběhl. A dokud žádný neproběhl, ten nejbližší plánovaný.
 * Po druhém transferu v cyklu se počítá od něj: ptát se „kolikátý den po
 * transferu“ a myslet tím ten, který byl před třemi měsíci, nedává smysl.
 */
export function currentTransfer(c: CycleRow, today: IsoDate = todayIso()): CycleTransfer | null {
  const dated = sortedTransfers(c).filter((t) => t.date)
  const done = dated.filter((t) => (t.date as IsoDate) <= today)
  if (done.length > 0) return done[done.length - 1]
  if (dated.length > 0) return dated[0]
  return c.transfers.length > 0 ? c.transfers[c.transfers.length - 1] : null
}

/** Nejbližší transfer, který teprve přijde. */
export function nextTransfer(c: CycleRow, today: IsoDate = todayIso()): CycleTransfer | null {
  return sortedTransfers(c).find((t) => t.date && t.date > today) ?? null
}

/** Nejpozdější zapsané datum transferu. */
export function lastTransferDate(c: CycleRow): IsoDate | null {
  const dated = sortedTransfers(c).filter((t) => t.date)
  return dated.length === 0 ? null : (dated[dated.length - 1].date as IsoDate)
}

/** Všechny odběry krve v čase. Domácí testy sem nepatří. Beta je z krve. */
export function bloodTests(c: CycleRow): HcgTest[] {
  return c.hcgTests
    .filter((t) => t.kind === 'krev' && t.date)
    .sort((a, b) => (a.date as IsoDate).localeCompare(b.date as IsoDate))
}

/**
 * Datum odběru hCG, který patří k transferu, o který teď jde.
 *
 * Po druhém transferu v cyklu je beta z toho prvního minulost. Kdyby se
 * vracela, hlavička by tvrdila „Odběr hCG“ ženě, která je čtyři dny po
 * kryotransferu a na odběr jde za týden. Když k současnému transferu ještě
 * žádný odběr hCG zapsaný není, vrací `null`. A stav se pozná z transferu.
 */
export function betaDate(c: CycleRow, today: IsoDate = todayIso()): IsoDate | null {
  const bloods = bloodTests(c)
  const cur = currentTransfer(c, today)
  if (!cur) return bloods[0]?.date ?? null
  const mine = bloods.filter(
    (t) => t.transferId === cur.id || (!t.transferId && cur.date && (t.date as IsoDate) >= cur.date),
  )
  return mine[0]?.date ?? null
}

/** Kolik embryí se v cyklu dohromady přeneslo. */
export function embryosTransferred(c: CycleRow): number | null {
  const vals = c.transfers.map((t) => t.embryos).filter((v): v is number => v !== null && v >= 0)
  return vals.length === 0 ? null : vals.reduce((a, b) => a + b, 0)
}

/**
 * Kolik embryí došlo do stádia blastocysty.
 *
 * Součet pátého a šestého dne. Embryo, které blastuje pátý den, se šestý
 * den už znovu nehlásí, proto se sčítat smí.
 */
export function blastocystsOf(c: CycleRow): number | null {
  const vals = [c.day5, c.day6].filter((v): v is number => v !== null && v >= 0)
  return vals.length === 0 ? null : vals.reduce((a, b) => a + b, 0)
}

/** Kolikátý den po transferu se test dělal. `null`, když datum chybí. */
export function hcgDay(c: CycleRow, t: HcgTest): number | null {
  if (!t.date) return null
  const ref = t.transferId
    ? (c.transfers.find((x) => x.id === t.transferId)?.date ?? null)
    : (currentTransfer(c, t.date)?.date ?? null)
  if (!ref || ref > t.date) return null
  return daysBetween(ref, t.date)
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
  /** Krátký popisek do hlavičky. „7. den stimulace“, „Trigger dnes“. */
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
  id: string
  label: string
  date: IsoDate
  inDays: number
  /** Naléhavé = dnes nebo zítra. */
  urgent: boolean
}

function d(from: IsoDate | null, to: IsoDate): number | null {
  return from ? daysBetween(from, to) : null
}

function czDaysShort(n: number): string {
  return `${n} ${n === 1 ? 'den' : n < 5 ? 'dny' : 'dní'}`
}

/**
 * Přečte stav cyklu k zadanému dni.
 *
 * Pořadí podmínek jde odzadu. Od nejpozdějšího milníku k nejranějšímu.
 * Kdyby to šlo odpředu, cyklus by po transferu pořád hlásil stimulaci.
 */
export function readCycle(c: CycleRow, today: IsoDate = todayIso()): CycleStatus {
  const cycleDay = c.cd1On ? daysBetween(c.cd1On, today) + 1 : null
  const cur = currentTransfer(c, today)
  const dpt = d(cur?.date ?? null, today)
  const dpr = d(c.retrievalOn, today)
  const stimDay = c.stimStartOn ? daysBetween(c.stimStartOn, today) + 1 : null
  const beta = betaDate(c, today)

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

  if (beta && today >= beta) {
    return { ...base, stage: 'beta', headline: 'Odběr hCG', detail: 'Čekání na výsledek odběru.', progress: 0.95 }
  }

  if (dpt !== null && dpt >= 0) {
    // Kolikátý transfer v pořadí to je. U druhého a dalšího to musí být vidět.
    // „Transfer +5“ by po třech kryotransferech neřeklo, o který jde.
    const order = sortedTransfers(c).findIndex((t) => t.id === cur?.id) + 1
    const many = c.transfers.length > 1
    const head = many ? `${order}. transfer +${dpt}` : `Transfer +${dpt}`

    if (beta) {
      const toBeta = daysBetween(today, beta)
      return {
        ...base,
        stage: 'cekani',
        headline: head,
        detail: toBeta === 0 ? 'Odběr hCG dnes.' : `Do odběru hCG zbývá ${czDaysShort(toBeta)}.`,
        progress: 0.8 + Math.min(0.14, dpt * 0.01),
      }
    }
    return { ...base, stage: 'cekani', headline: head, detail: 'Čekání na výsledek.', progress: 0.85 }
  }

  if (dpr !== null && dpr >= 0) {
    if (dpr === 0) return { ...base, stage: 'odber', headline: 'Odběr vajíček dnes', detail: 'Dnes je den zákroku.', progress: 0.6 }
    if (dpr === 1) return { ...base, stage: 'oplodneni', headline: 'Den po odběru', detail: 'Dnes volá embryologie s výsledkem oplodnění.', progress: 0.66 }
    const soon = nextTransfer(c, today)
    return {
      ...base,
      stage: 'kultivace',
      headline: `${dpr}. den kultivace`,
      detail: soon?.date
        ? `Transfer ${czDaysShort(daysBetween(today, soon.date))} od dneška.`
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
        ? `Odběr za ${czDaysShort(daysBetween(today, c.retrievalOn))}.`
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

export interface Milestone {
  /** Druh milníku. Podle něj se vybírá ikona. Opakuje se. */
  key: string
  /** Jedinečné v rámci cyklu. Transferů může být víc. */
  id: string
  label: string
  date: IsoDate
  /** Doplněk k řádku, když ho milník sám o sobě nese. */
  detail: string
}

/** Milníky cyklu seřazené v čase. Používá je timeline i kalendář. */
export function cycleMilestones(c: CycleRow): Milestone[] {
  const raw: Milestone[] = []
  const put = (key: string, id: string, label: string, date: IsoDate | null, detail = ''): void => {
    if (date) raw.push({ key, id, label, date, detail })
  }

  put('cd1', 'cd1', 'CD1. První den cyklu', c.cd1On)
  put('stim', 'stim', 'Začátek stimulace', c.stimStartOn)
  put('trigger', 'trigger', c.triggerAt ? `Trigger ve ${c.triggerAt}` : 'Trigger', c.triggerOn)
  put('odber', 'odber', 'Odběr vajíček', c.retrievalOn)

  const transfers = sortedTransfers(c)
  transfers.forEach((t, i) => {
    const order = transfers.length > 1 ? `${i + 1}. transfer` : 'Transfer'
    const label = t.kind === 'kryo' ? `${order}. Kryo` : order
    const detail = [
      t.embryos !== null ? `${t.embryos} ${t.embryos === 1 ? 'embryo' : t.embryos < 5 ? 'embrya' : 'embryí'}` : '',
      t.embryoDay !== null ? `${t.embryoDay}. den kultivace` : '',
      t.grade.trim(),
    ]
      .filter(Boolean)
      .join(' · ')
    put('transfer', `transfer-${t.id}`, label, t.date, detail)
  })

  const bloods = c.hcgTests.filter((t) => t.kind === 'krev' && t.date)
  bloods.forEach((t, i) => {
    put(
      'beta',
      `beta-${t.id}`,
      bloods.length > 1 ? `Odběr hCG, ${i + 1}.` : 'Odběr hCG',
      t.date,
      t.value !== null ? `${t.value} IU/l` : '',
    )
  })

  put('konec', 'konec', 'Uzavření cyklu', c.endedOn, OUTCOME_LABEL[c.outcome])

  return raw.sort((a, b) => a.date.localeCompare(b.date))
}

/** Co přijde jako další. Prázdné pole = cyklus nemá naplánováno nic. */
export function nextUp(c: CycleRow, today: IsoDate = todayIso()): NextUp[] {
  return cycleMilestones(c)
    .filter((m) => m.date >= today)
    .map((m) => {
      const inDays = daysBetween(today, m.date)
      return { key: m.key, id: m.id, label: m.label, date: m.date, inDays, urgent: inDays <= 1 }
    })
}

/**
 * Odhad data odběru hCG, když ho uživatelka nezadala.
 * Blastocysta 10 dní po transferu, třetí den 12. Orientačně.
 */
export function estimatedBeta(c: CycleRow, today: IsoDate = todayIso()): IsoDate | null {
  const known = betaDate(c, today)
  if (known) return known
  const t = currentTransfer(c, today)
  if (!t?.date) return null
  return addDays(t.date, t.embryoDay === 3 ? 12 : 10)
}

/** Cyklus, který právě běží. Když jich běží víc, vyhrává nejnovější. */
export function activeCycle(cycles: CycleRow[], today: IsoDate = todayIso()): CycleRow | null {
  const open = cycles.filter((c) => c.outcome === 'probiha' && (!c.endedOn || c.endedOn >= today))
  if (open.length === 0) return null
  return [...open].sort((a, b) => b.startedOn.localeCompare(a.startedOn))[0]
}
