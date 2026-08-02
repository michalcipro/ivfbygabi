import { addDays } from './dates'
import { cycleMilestones, KIND_LABEL, OUTCOME_LABEL, type CycleRow } from './cycle'
import { SYMPTOM_BY_ID } from './symptoms'
import { LAB_BY_KEY } from '../health/lab-params'

/**
 * Sjednocená časová osa cyklu.
 *
 * Data o léčbě jsou rozházená po pěti obrazovkách: milníky v cyklu, dávky
 * v lécích, folikuly v ultrazvuku, hodnoty ve zdraví, poznámky v deníku.
 * Když se pak lékař zeptá „a kdy vám zvedli dávku?", žena listuje. Tenhle
 * modul to složí do jednoho proudu seřazeného v čase — a nic si nepřidává.
 *
 * ŽÁDNÁ INTERPRETACE. Modul jen převypráví, co uživatelka zapsala. Nehodnotí
 * hodnoty, nepočítá šance, nedoporučuje dávkování. Čísla ukazuje tak, jak
 * přišla — čtení patří lékaři.
 *
 * Čistý doménový modul: žádné DOM, žádný store, žádné `Date.now()`.
 * Stejný vstup dá vždy stejný výstup, takže se dá testovat i cachovat.
 *
 * AKCE PRO main.ts: žádné. Modul nic nevykresluje ani nevystavuje interakce.
 * Obrazovka si z `TimelineItem.source.route` udělá `data-go` sama.
 *
 * CSS: žádné nové třídy — modul nevrací HTML.
 *
 * KLÍČE IKON, které modul vrací v `TimelineItem.icon` (obrazovka si k nim
 * přiřadí glyf, doporučení v závorce vychází z EVENT_KINDS a KIND_ICONS):
 *   milnik (✧)  stimulace (◐)  trigger (✶)  odber (◍)  embryo (❖)
 *   transfer (❋)  beta (✶)  uz (◉)  krev (◍)  vysledek (▤)  lek (◐)
 *   davka (▲)  vpich (✚)  kontrola (◈)  poznamka (❦)  priloha (▤)
 *   telo (◕)  udalost (•)  konec (●)
 */

export type TimelineKind =
  | 'milnik'
  | 'lek'
  | 'davka'
  | 'ultrazvuk'
  | 'odber-krve'
  | 'vysledek'
  | 'embryologie'
  | 'transfer'
  | 'beta'
  | 'kontrola'
  | 'poznamka'
  | 'priznak'
  | 'dokument'
  | 'udalost'

export interface TimelineItem {
  id: string
  date: string
  /** HH:MM, prázdné když se nezná. */
  at: string
  kind: TimelineKind
  title: string
  /** Jedna věta, může být prázdná. */
  detail: string
  /** Klíč ikony — vybere si ji obrazovka. */
  icon: string
  /** Zvýraznit: zákrok, výsledek, změna dávky. */
  major: boolean
  /** Odkud to přišlo, ať se dá kliknout na zdroj. */
  source?: { route: string }
}

// ------------------------------------------------------------ vstupní tvary ---

/*
 * Doména nesmí importovat z klienta, proto si tvary deklarujeme znovu —
 * strukturálně, jen v rozsahu, který časová osa čte. Typy ze `store.ts`
 * do nich zapadnou beze změny (`IsoDate` je `string`, užší unionty jsou
 * přiřaditelné do `string`, pole navíc nevadí).
 */

export interface MedRow {
  id: string
  name: string
  kind: string
  dose: string
  times: string[]
  repeat: string
  startOn: string | null
  endOn: string | null
  /** Historie změn dávkování — u stimulace se dávka mění běžně. */
  history: { on: string; dose: string; why: string }[]
  cycleId: string | null
}

export interface UltrasoundRow {
  id: string
  date: string
  cycleId: string | null
  /** Velikosti folikulů v mm. */
  left: number[]
  right: number[]
  /** Výška sliznice v mm. */
  endometrium: number | null
  note: string
}

export interface NoteRow {
  id: string
  date: string
  at: string
  text: string
  attachments?: { name: string }[]
}

export interface SymptomLog {
  id: string
  date: string
  at: string
  symptomId: string
  /** 0–10. */
  intensity: number | null
  note: string
}

export interface TimelineInput {
  cycle: CycleRow | null
  events: { id: string; title: string; kind: string; onDate: string; note: string | null }[]
  meds: MedRow[]
  ultrasounds: UltrasoundRow[]
  labs: { id: string; paramKey: string; value: number; unit: string; onDate: string }[]
  notes: NoteRow[]
  symptomLogs: SymptomLog[]
  shots: { id: string; date: string; zone: string; med: string }[]
  /**
   * Popisek příznaku podle id. Vlastní příznaky uživatelky nejsou v katalogu,
   * takže bez resolveru by se na ose objevilo holé id.
   */
  symptomLabel?: (id: string) => string
}

// --------------------------------------------------------------- pomocníci ---

/**
 * České skloňování. Klient má vlastní `plural` v ui.ts, doména na něj ale
 * sáhnout nesmí — čtyři řádky duplicity jsou levnější než závislost obráceným
 * směrem.
 */
function plural(n: number, one: string, few: string, many: string): string {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`
}

/**
 * Číslo s desetinnou čárkou, bez zbytečných nul a s pevnou mezerou po tisících.
 * Estradiol se v laborce běžně vyšplhá na pět číslic a „12400“ se čte špatně.
 */
function num(value: number, decimals = 1): string {
  if (!Number.isFinite(value)) return '—'
  const body = Number.isInteger(value)
    ? String(value)
    : value
        .toFixed(decimals)
        .replace(/0+$/, '')
        .replace(/\.$/, '')
        .replace('.', ',')
  const [whole, frac] = body.split(',')
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0')
  return frac ? `${grouped},${frac}` : grouped
}

/** Zkrátí volný text na jednu řádku, na hranici slova. */
function excerpt(text: string, max = 110): string {
  const flat = text.replace(/\s+/g, ' ').trim()
  if (flat.length <= max) return flat
  const cut = flat.slice(0, max)
  const space = cut.lastIndexOf(' ')
  return `${(space > max * 0.6 ? cut.slice(0, space) : cut).replace(/[,.;:]$/, '')}…`
}

/** Spojí části detailu a zahodí prázdné. */
function join(parts: (string | false | null | undefined)[], sep = ' · '): string {
  return parts.filter((p): p is string => Boolean(p && p.trim())).join(sep)
}

/** Názvy zón na břiše. Zrcadlí SHOT_ZONES ve viz.ts, které je klientské. */
const ZONE_NAME: Record<string, string> = {
  lh: 'vlevo nahoře',
  ph: 'vpravo nahoře',
  ls: 'vlevo uprostřed',
  ps: 'vpravo uprostřed',
  ld: 'vlevo dole',
  pd: 'vpravo dole',
}

const REPEAT_LABEL: Record<string, string> = {
  denne: 'denně',
  obden: 'obden',
  jednou: 'jednorázově',
}

/** Milník → druh položky a ikona. Trigger a transfer si zaslouží vlastní tvář. */
const MILESTONE_META: Record<string, { kind: TimelineKind; icon: string }> = {
  cd1: { kind: 'milnik', icon: 'milnik' },
  stim: { kind: 'milnik', icon: 'stimulace' },
  trigger: { kind: 'milnik', icon: 'trigger' },
  odber: { kind: 'milnik', icon: 'odber' },
  transfer: { kind: 'transfer', icon: 'transfer' },
  beta: { kind: 'beta', icon: 'beta' },
  konec: { kind: 'milnik', icon: 'konec' },
}

/** Druh události v kalendáři → druh položky, ikona a váha. */
const EVENT_META: Record<string, { kind: TimelineKind; icon: string; major: boolean }> = {
  kontrola: { kind: 'kontrola', icon: 'kontrola', major: false },
  odber: { kind: 'odber-krve', icon: 'odber', major: true },
  transfer: { kind: 'transfer', icon: 'transfer', major: true },
  uz: { kind: 'ultrazvuk', icon: 'uz', major: false },
  hcg: { kind: 'beta', icon: 'beta', major: true },
  ockovani: { kind: 'udalost', icon: 'udalost', major: false },
  lek: { kind: 'lek', icon: 'lek', major: false },
  porod: { kind: 'milnik', icon: 'milnik', major: true },
  vlastni: { kind: 'udalost', icon: 'udalost', major: false },
}

/** Milník, který kalendář umí zdvojit vlastní odvozenou událostí. */
const MILESTONE_AS_EVENT: Record<string, string> = {
  odber: 'odber',
  transfer: 'transfer',
  beta: 'hcg',
}

/**
 * Pořadí uvnitř dne, když čas chybí. Zákrok patří nad poznámku — jinak by
 * odběr vajíček skončil pod zápisem o nadýmání.
 */
const KIND_RANK: Record<TimelineKind, number> = {
  milnik: 0,
  transfer: 1,
  beta: 2,
  embryologie: 3,
  ultrazvuk: 4,
  'odber-krve': 5,
  vysledek: 6,
  davka: 7,
  lek: 8,
  kontrola: 9,
  udalost: 10,
  priznak: 11,
  dokument: 12,
  poznamka: 13,
}

// ------------------------------------------------------------- rozsah cyklu ---

interface CycleWindow {
  id: string
  from: string
  to: string | null
}

/**
 * Okno cyklu. Záznam, který má vlastní `cycleId`, se řídí jím; záznamy bez
 * vazby (poznámky, příznaky, odběry) se berou podle data. Bez toho by se
 * do třetího cyklu připletla poznámka z prvního.
 */
function windowOf(cycle: CycleRow | null): CycleWindow | null {
  if (!cycle) return null
  const starts = [cycle.cd1On, cycle.stimStartOn, cycle.startedOn].filter(
    (d): d is string => Boolean(d),
  )
  const from = starts.length ? [...starts].sort()[0] : cycle.startedOn
  return { id: cycle.id, from, to: cycle.endedOn }
}

function belongs(win: CycleWindow | null, date: string, cycleId?: string | null): boolean {
  if (!win) return true
  if (cycleId) return cycleId === win.id
  return date >= win.from && (win.to === null || date <= win.to)
}

// -------------------------------------------------------------- sestavení ---

/**
 * Složí všechny zdroje do jedné osy.
 *
 * Vstup se nemění, výstup je vždy seřazený — obrazovka ho může rovnou
 * vykreslit nebo poslat do `groupByDay`.
 */
export function buildTimeline(input: TimelineInput): TimelineItem[] {
  const out: TimelineItem[] = []
  const c = input.cycle
  const win = windowOf(c)

  // --- milníky cyklu ------------------------------------------------------
  const covered = new Set<string>()
  // Den odběru hCG, kde už je zapsaná hodnota. Samotný milník by pak stál vedle
  // výsledku jako prázdná ozvěna.
  const betaResults = new Set(
    input.labs.filter((l) => l.paramKey.includes('hcg')).map((l) => l.onDate),
  )
  if (c) {
    for (const m of cycleMilestones(c)) {
      const meta = MILESTONE_META[m.key] ?? { kind: 'milnik' as TimelineKind, icon: 'milnik' }
      const asEvent = MILESTONE_AS_EVENT[m.key]
      if (asEvent) covered.add(`${m.date}|${asEvent}`)
      if (m.key === 'beta' && betaResults.has(m.date)) continue
      out.push({
        id: `mil:${c.id}:${m.id}`,
        date: m.date,
        // Hodinu triggeru už nese `label` z cycleMilestones. Kdyby byla
        // i v `at`, vykreslila by se na řádku dvakrát.
        at: '',
        kind: meta.kind,
        title: m.label,
        // Transfer i beta si popisek nesou sami — je v nich číslo, které
        // z řádku cyklu vyčíst nejde, protože jich může být víc.
        detail: m.detail || milestoneDetail(c, m.key),
        icon: meta.icon,
        major: true,
        source: { route: 'cyklus' },
      })
    }
    out.push(...embryologyItems(c))
  }

  // --- události z kalendáře ----------------------------------------------
  for (const e of input.events) {
    if (!belongs(win, e.onDate)) continue
    // Kalendář si část termínů odvozuje sám z profilu. Kdyby se propsaly,
    // stál by vedle „Transferu" ještě jednou „Embryotransfer".
    if (covered.has(`${e.onDate}|${e.kind}`)) continue
    const meta = EVENT_META[e.kind] ?? EVENT_META.vlastni
    out.push({
      id: `ev:${e.id}`,
      date: e.onDate,
      at: '',
      kind: meta.kind,
      title: e.title,
      detail: e.note ? excerpt(e.note) : '',
      icon: meta.icon,
      major: meta.major,
      source: { route: 'kalendar' },
    })
  }

  // --- léky: nasazení, konec a změny dávky --------------------------------
  for (const m of input.meds) out.push(...medItems(m, win))

  // --- vpichy: jeden řádek na den ----------------------------------------
  for (const [date, rows] of groupBy(input.shots, (s) => s.date)) {
    if (!belongs(win, date)) continue
    const named = rows.map((s) =>
      join([s.med || 'vpich', ZONE_NAME[s.zone] && `(${ZONE_NAME[s.zone]})`], ' '),
    )
    out.push({
      id: `shot:${date}`,
      date,
      at: '',
      kind: 'lek',
      title: plural(rows.length, 'vpich', 'vpichy', 'vpichů'),
      detail: excerpt(named.join(', ')),
      icon: 'vpich',
      major: false,
      source: { route: 'zapis/vpich' },
    })
  }

  // --- ultrazvuky ---------------------------------------------------------
  for (const u of input.ultrasounds) {
    if (!belongs(win, u.date, u.cycleId)) continue
    out.push({
      id: `uz:${u.id}`,
      date: u.date,
      at: '',
      kind: 'ultrazvuk',
      title: 'Ultrazvuk',
      detail: ultrasoundDetail(u),
      icon: 'uz',
      // Kontrola, ne zákrok — kdyby svítilo všechno, nesvítí nic.
      major: false,
      source: { route: 'zdravotni/ultrazvuk' },
    })
  }

  // --- laboratorní hodnoty ------------------------------------------------
  for (const l of input.labs) {
    if (!belongs(win, l.onDate)) continue
    const param = LAB_BY_KEY[l.paramKey]
    const isBeta = l.paramKey.includes('hcg')
    out.push({
      id: `lab:${l.id}`,
      date: l.onDate,
      at: '',
      kind: isBeta ? 'beta' : 'vysledek',
      title: param?.name ?? prettyKey(l.paramKey),
      // Jen číslo a jednotka. Žádné „v normě" — to není naše věta.
      detail: join([num(l.value, 2), l.unit], ' '),
      icon: isBeta ? 'beta' : 'vysledek',
      major: true,
      source: { route: 'zdravi' },
    })
  }

  // --- poznámky a přílohy -------------------------------------------------
  for (const n of input.notes) {
    if (!belongs(win, n.date)) continue
    const files = n.attachments ?? []
    const text = n.text.trim()
    if (!text && files.length === 0) continue
    const filesLabel = files.length
      ? plural(files.length, 'příloha', 'přílohy', 'příloh')
      : ''
    out.push({
      id: `note:${n.id}`,
      date: n.date,
      at: n.at,
      // Zápis, který je jen fotkou zprávy, je dokument — ne poznámka.
      kind: text ? 'poznamka' : 'dokument',
      title: text ? 'Poznámka' : filesLabel || 'Poznámka',
      detail: text ? join([excerpt(text), filesLabel]) : excerpt(files.map((f) => f.name).join(', ')),
      icon: text ? 'poznamka' : 'priloha',
      major: false,
      source: { route: text ? 'denik' : 'dokumenty' },
    })
  }

  // --- příznaky: souhrn za den, ne dvacet řádků ---------------------------
  for (const [date, rows] of groupBy(input.symptomLogs, (s) => s.date)) {
    if (!belongs(win, date)) continue
    out.push({
      id: `sym:${date}`,
      date,
      at: '',
      kind: 'priznak',
      title: 'Příznaky',
      detail: symptomDetail(rows, input.symptomLabel),
      icon: 'telo',
      major: false,
      source: { route: 'zapis/telo' },
    })
  }

  return out.sort(compare)
}

/** Seskupení po dnech, od nejnovějšího. */
export function groupByDay(items: TimelineItem[]): { date: string; items: TimelineItem[] }[] {
  const sorted = [...items].sort(compare)
  const out: { date: string; items: TimelineItem[] }[] = []
  for (const item of sorted) {
    const last = out[out.length - 1]
    if (last && last.date === item.date) last.items.push(item)
    else out.push({ date: item.date, items: [item] })
  }
  return out
}

// ----------------------------------------------------------------- řazení ---

/**
 * Dny sestupně (nejnovější nahoře), uvnitř dne chronologicky, jak den
 * probíhal. Položky bez času jdou na konec dne, mezi sebou podle váhy druhu
 * a nakonec podle id — aby bylo pořadí stabilní i mezi překreslením.
 */
function compare(a: TimelineItem, b: TimelineItem): number {
  if (a.date !== b.date) return b.date.localeCompare(a.date)
  if (a.at && b.at && a.at !== b.at) return a.at.localeCompare(b.at)
  if (a.at && !b.at) return -1
  if (!a.at && b.at) return 1
  if (KIND_RANK[a.kind] !== KIND_RANK[b.kind]) return KIND_RANK[a.kind] - KIND_RANK[b.kind]
  return a.id.localeCompare(b.id)
}

function groupBy<T>(rows: T[], key: (row: T) => string): [string, T[]][] {
  const map = new Map<string, T[]>()
  for (const row of rows) {
    const k = key(row)
    const bucket = map.get(k)
    if (bucket) bucket.push(row)
    else map.set(k, [row])
  }
  return [...map.entries()]
}

// ------------------------------------------------------------------ detaily ---

function milestoneDetail(c: CycleRow, key: string): string {
  switch (key) {
    case 'cd1':
      return join([KIND_LABEL[c.kind], c.clinic])
    case 'stim':
      return c.protocol ? `Protokol ${c.protocol}` : ''
    case 'odber':
      return join([c.clinic, c.doctor])
    case 'konec':
      return OUTCOME_LABEL[c.outcome]
    default:
      return ''
  }
}

/**
 * Čísla z laboratoře jako body na ose.
 *
 * Datum se odvozuje od odběru: oplodnění se hlásí den po něm, blastocysty
 * pátý den — tak to na klinikách chodí a stejný předpoklad používá i
 * `readCycle`. Položka vznikne jen tehdy, když číslo uživatelka zapsala.
 */
function embryologyItems(c: CycleRow): TimelineItem[] {
  if (!c.retrievalOn) return []
  const out: TimelineItem[] = []

  if (c.eggs !== null) {
    out.push({
      id: `emb:${c.id}:vajicka`,
      date: c.retrievalOn,
      at: '',
      kind: 'embryologie',
      title: 'Výsledek odběru',
      detail: join([
        `Získáno ${plural(c.eggs, 'vajíčko', 'vajíčka', 'vajíček')}`,
        c.mature !== null && `z toho ${plural(c.mature, 'zralé', 'zralá', 'zralých')}`,
      ], ', '),
      icon: 'embryo',
      major: true,
      source: { route: 'cyklus' },
    })
  }

  if (c.fertilized !== null) {
    out.push({
      id: `emb:${c.id}:oplodneni`,
      date: addDays(c.retrievalOn, 1),
      at: '',
      kind: 'embryologie',
      title: 'Zpráva z embryologie',
      detail: join([
        `Oplodněno ${plural(c.fertilized, 'vajíčko', 'vajíčka', 'vajíček')}`,
        c.mature !== null && `z ${c.mature} ${c.mature === 1 ? 'zralého' : 'zralých'}`,
      ], ' '),
      icon: 'embryo',
      major: true,
      source: { route: 'cyklus' },
    })
  }

  // Vývoj embryí den po dni. Každý den je vlastní zpráva z laboratoře a
  // vlastní telefonát — na ose proto stojí zvlášť, ne slitý do jednoho bodu.
  const days: [number, number | null, string][] = [
    [3, c.day3, 'se vyvíjí'],
    [4, c.day4, 've stádiu moruly'],
    [5, c.day5, 'došlo do blastocysty'],
    [6, c.day6, 'došlo do blastocysty'],
  ]
  for (const [day, count, what] of days) {
    if (count === null) continue
    out.push({
      id: `emb:${c.id}:den${day}`,
      date: addDays(c.retrievalOn, day),
      at: '',
      kind: 'embryologie',
      title: `${day}. den kultivace`,
      detail: `${plural(count, 'embryo', 'embrya', 'embryí')} ${what}`,
      icon: 'embryo',
      major: true,
      source: { route: 'cyklus' },
    })
  }

  if (c.frozen !== null) {
    out.push({
      id: `emb:${c.id}:zamrazeno`,
      date: addDays(c.retrievalOn, c.day6 !== null ? 6 : 5),
      at: '',
      kind: 'embryologie',
      title: 'Zamražení',
      detail: plural(c.frozen, 'zamražené embryo', 'zamražená embrya', 'zamražených embryí'),
      icon: 'embryo',
      major: true,
      source: { route: 'cyklus' },
    })
  }

  return out
}

/** Nasazení léku, jeho konec a každá změna dávky zvlášť. */
function medItems(m: MedRow, win: CycleWindow | null): TimelineItem[] {
  const out: TimelineItem[] = []
  const name = m.name.trim() || 'Lék'
  const schedule = join([
    m.dose,
    REPEAT_LABEL[m.repeat] ?? m.repeat,
    m.times.length ? m.times.join(', ') : '',
  ])

  if (m.startOn && belongs(win, m.startOn, m.cycleId)) {
    out.push({
      id: `med:${m.id}:start`,
      date: m.startOn,
      at: '',
      kind: 'lek',
      title: `Nasazeno: ${name}`,
      detail: schedule,
      icon: 'lek',
      major: false,
      source: { route: 'leky/protokol' },
    })
  }

  if (m.endOn && belongs(win, m.endOn, m.cycleId)) {
    out.push({
      id: `med:${m.id}:konec`,
      date: m.endOn,
      at: '',
      kind: 'lek',
      title: `Ukončeno: ${name}`,
      detail: '',
      icon: 'lek',
      major: false,
      source: { route: 'leky/protokol' },
    })
  }

  // Změna dávky je to, na co se lékař ptá nejčastěji. Proto vlastní řádek
  // a zvýraznění — ne schovaná v detailu léku.
  m.history.forEach((h, i) => {
    if (!h.on || !belongs(win, h.on, m.cycleId)) return
    out.push({
      id: `dose:${m.id}:${i}`,
      date: h.on,
      at: '',
      kind: 'davka',
      title: `Změna dávky — ${name}`,
      detail: join([h.dose && `Nově ${h.dose}`, h.why && excerpt(h.why, 70)]),
      icon: 'davka',
      major: true,
      source: { route: 'leky/protokol' },
    })
  })

  return out
}

/** Použitelné velikosti. Nula ani nesmysl není folikul — stejně jako v souhrnu. */
function sizes(values: number[] | undefined): number[] {
  return (values ?? []).filter((v) => Number.isFinite(v) && v > 0)
}

function ultrasoundDetail(u: UltrasoundRow): string {
  const left = sizes(u.left).length
  const right = sizes(u.right).length
  const follicles = join([left > 0 && `${left} vlevo`, right > 0 && `${right} vpravo`], ', ')
  const lining = u.endometrium !== null ? `sliznice ${num(u.endometrium)} mm` : ''
  return join([follicles, lining]) || excerpt(u.note, 90)
}

/**
 * Souhrn příznaků za den. Dvacet zaškrtnutých políček se na ose nedá číst —
 * důležité je, kolik jich bylo a co bolelo nejvíc.
 */
function symptomDetail(rows: SymptomLog[], labelOf?: (id: string) => string): string {
  const n = rows.length
  const counted =
    n === 1 ? 'Zapsán 1 příznak' : n <= 4 ? `Zapsány ${n} příznaky` : `Zapsáno ${n} příznaků`

  // Zápis bez zadané intenzity se řadí až za ty ohodnocené — nedá se říct,
  // že byl nejsilnější, když u něj žádné číslo není.
  const rank = (v: number | null): number => (v === null || !Number.isFinite(v) ? -1 : v)
  const top = [...rows].sort(
    (a, b) =>
      rank(b.intensity) - rank(a.intensity) ||
      a.at.localeCompare(b.at) ||
      a.symptomId.localeCompare(b.symptomId),
  )[0]

  if (!top || rank(top.intensity) <= 0) return counted
  const label = labelOf?.(top.symptomId) || SYMPTOM_BY_ID[top.symptomId]?.label || top.symptomId
  return `${counted}, nejsilnější ${label} (${top.intensity}/10)`
}

/** Když parametr není v katalogu, ukáže se aspoň čitelně. */
function prettyKey(key: string): string {
  const words = key.replace(/[_-]+/g, ' ').trim()
  return words ? words.charAt(0).toUpperCase() + words.slice(1) : 'Hodnota'
}
