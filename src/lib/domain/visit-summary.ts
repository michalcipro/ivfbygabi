import type { IsoDate } from './profile'
import { czDays, daysBetween, formatCzechDate, formatCzechDateShort } from './dates'
import {
  betaDate,
  cycleTitle,
  estimatedBeta,
  lastTransferDate,
  nextUp,
  type CycleRow,
  type CycleStatus,
} from './cycle'
import { SYMPTOM_BY_ID } from './symptoms'

/**
 * Souhrn od poslední návštěvy.
 *
 * Mezi dvěma kontrolami se nasbírá víc, než si člověk v ordinaci vybaví.
 * Lékař má osm minut, žena má v hlavě tři týdny. Tenhle modul z toho, co má
 * zapsané, složí přehled, který se dá na klinice přečíst nahlas — a k němu
 * otázky, které z těch dat plynou.
 *
 * TOHLE NENÍ JAZYKOVÝ MODEL.
 * Aplikace běží jako jediný statický HTML soubor: bez serveru, bez API klíče,
 * bez připojení kamkoli. Souhrn se skládá deterministicky z uložených dat —
 * ze stejného vstupu vždycky vypadne stejný text. Žádné volání LLM, žádné
 * `Date.now()`, žádná náhoda. Kdyby sem někdy někdo chtěl přidat generování
 * textu modelem, znamená to odeslat léčebná data ven a to je proti slibu,
 * na kterém celá aplikace stojí.
 *
 * Co modul zásadně nedělá: nehodnotí. Nikde nezazní „to je dobře“, „málo“,
 * „v normě“ ani „vypadá to slibně“. Popisuje se, co je zapsané, a to je
 * všechno. Výklad čísel patří lékaři a souhrn to i sám říká.
 *
 * Čistý doménový modul — žádný prohlížeč, žádné HTML, žádné akce, žádné
 * `localStorage`. Tvary vstupů jsou schválně strukturální (jen pole, která
 * se opravdu čtou), aby doména nezávisela na klientském úložišti; řádky
 * ze store se do nich vejdou beze změny.
 *
 * Exportuje:
 *   SummarySection, VisitSummary, SummaryInput (typy)
 *   MedRow, UltrasoundRow, SymptomLog, LabResult, EventLite (strukturální tvary)
 *   buildSummary(input)
 *
 * Žádné nové CSS třídy — modul vrací text, ne HTML.
 */

// ------------------------------------------------------ strukturální tvary ---

/** Lék tak, jak ho souhrn potřebuje. Plný tvar žije v klientském store. */
export interface MedRow {
  id: string
  name: string
  dose: string
  startOn: IsoDate | null
  endOn: IsoDate | null
  /** Historie změn dávkování — ve stimulaci se dávka mění běžně. */
  history: { on: IsoDate; dose: string; why: string }[]
}

/** Ultrazvuk. Folikuly jsou velikosti v mm, ne jen počet. */
export interface UltrasoundRow {
  date: IsoDate
  left: number[]
  right: number[]
  endometrium: number | null
  note: string
}

/** Zápis příznaku s intenzitou 0–10. */
export interface SymptomLog {
  date: IsoDate
  symptomId: string
  intensity: number | null
  note: string
}

/** Laboratorní hodnota i s lidským názvem parametru. */
export interface LabResult {
  paramKey: string
  value: number
  unit: string
  onDate: IsoDate
  /** Název pro člověka — „Estradiol“, ne „e2“. */
  name: string
}

/** Událost z kalendáře. */
export interface EventLite {
  title: string
  onDate: IsoDate
  kind: string
}

// -------------------------------------------------------------------- typy ---

export interface SummarySection {
  title: string
  lines: string[]
}

export interface VisitSummary {
  from: string
  to: string
  /** Jedna věta na začátek. */
  lede: string
  sections: SummarySection[]
  /** Otázky, které stojí za to položit — odvozené z toho, co se dělo. */
  suggestedQuestions: string[]
  /**
   * Zapsané příznaky, u kterých symptoms.ts říká „volejte hned“. Nejsou to
   * otázky na příští kontrolu a obrazovka je tak nesmí vykreslit.
   */
  urgentSymptoms: string[]
}

export interface SummaryInput {
  from: string
  to: string
  cycle: CycleRow | null
  status: CycleStatus | null
  meds: MedRow[]
  ultrasounds: UltrasoundRow[]
  labs: LabResult[]
  symptomLogs: SymptomLog[]
  symptomLabel: (id: string) => string
  events: EventLite[]
  /** Dodržování léčby. Podíl 0–1 i procenta 0–100 — viz `adherencePercent`. */
  adherencePct: number | null
}

// -------------------------------------------------------------- pomocníci ---

/**
 * Věta, kterou souhrn vždycky končí.
 *
 * Není to formalita. Papír vytištěný z aplikace vypadá jako lékařská zpráva
 * a nesmí se s ní splést — ani v ordinaci, ani doma ve tři ráno.
 */
const DISCLAIMER =
  'Tohle je přehled toho, co máte zapsané. Není to lékařské hodnocení ani výklad výsledků — ty patří vašemu lékaři.'

/** Kolik položek se do jedné sekce vejde, aby se dala přečíst nahlas. */
const MAX_LINES = 12
const MAX_QUESTIONS = 6

function round(n: number, decimals: number): number {
  const f = 10 ** decimals
  return Math.round(n * f) / f
}

/**
 * Číslo česky: desetinná čárka, koncové nuly pryč. Tisíce se oddělují pevnou
 * mezerou až od pěti číslic — estradiol umí být 12 400 a bez mezery se to
 * čte špatně.
 */
function czNumber(n: number, decimals = 3): string {
  if (!Number.isFinite(n)) return '—'
  const fixed = round(n, decimals).toFixed(decimals)
  const dot = fixed.indexOf('.')
  const rawInt = dot === -1 ? fixed : fixed.slice(0, dot)
  const frac = (dot === -1 ? '' : fixed.slice(dot + 1)).replace(/0+$/, '')
  const sign = rawInt.startsWith('-') ? '-' : ''
  const digits = sign ? rawInt.slice(1) : rawInt
  const grouped = digits.length > 4 ? digits.replace(/\B(?=(\d{3})+(?!\d))/g, ' ') : digits
  return frac ? `${sign}${grouped},${frac}` : `${sign}${grouped}`
}

/** Skloňování s číslem — stejné chování jako `plural()` v UI. */
function pl(n: number, one: string, few: string, many: string): string {
  const a = Math.abs(n)
  return `${n} ${a === 1 ? one : a >= 2 && a <= 4 ? few : many}`
}

function isInRange(date: string, from: string, to: string): boolean {
  return Boolean(date) && date >= from && date <= to
}

function day(iso: string): string {
  return formatCzechDateShort(iso)
}

/** „dnes“, „zítra“, „za 4 dny“ — jak se to říká, ne kolikáté je. */
function inDaysLabel(n: number): string {
  if (n <= 0) return 'dnes'
  if (n === 1) return 'zítra'
  return `za ${czDays(n)}`
}

/** Text v závorce jen tehdy, když v ní něco je. */
function paren(text: string): string {
  const t = text.trim()
  return t ? ` (${t})` : ''
}

/** Použitelné velikosti folikulů. Nuly a nesmysly se do počtu nepočítají. */
function sizes(values: number[] | undefined): number[] {
  return (values ?? []).filter((v) => Number.isFinite(v) && v > 0)
}

function follicleCount(u: UltrasoundRow): number {
  return sizes(u.left).length + sizes(u.right).length
}

function biggestFollicle(u: UltrasoundRow): number | null {
  const all = [...sizes(u.left), ...sizes(u.right)]
  return all.length ? Math.max(...all) : null
}

/**
 * Malé písmeno jen na prvním znaku.
 *
 * Popisek stavu cyklu se lepí doprostřed věty. Celé `toLowerCase()` by
 * z „Beta HCG“ udělalo „beta hcg“ — zkratky musí zůstat, jak jsou.
 */
function lowerFirst(s: string): string {
  return s ? s[0].toLocaleLowerCase('cs') + s.slice(1) : s
}

/** Výčet česky: „a“ před posledním, čárky mezi zbytkem. */
function joinCz(items: string[]): string {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  return `${items.slice(0, -1).join(', ')} a ${items[items.length - 1]}`
}

/**
 * Dodržování na procenta 0–100.
 *
 * Přijímá obě podoby, které v aplikaci existují: podíl 0–1 (tak ho vrací
 * `adherence()` ve statistikách) i rovnou procenta. Rozhoduje hodnota —
 * cokoli do jedničky včetně je podíl. Jednička je tedy 100 %, ne jedno
 * procento. Je to jediná dvojznačnost a je zvolená schválně takhle: napsat
 * ženě „0,9 %“ tam, kde odškrtla skoro všechno, by bylo horší než opačná
 * chyba, která reálně nenastává.
 */
function adherencePercent(v: number | null): number | null {
  if (v === null || !Number.isFinite(v) || v < 0) return null
  return Math.min(100, Math.round(v <= 1 ? v * 100 : v))
}

/** Přidá sekci, jen když v ní opravdu něco je. */
function pushSection(into: SummarySection[], title: string, lines: string[]): void {
  const clean = lines.filter((l) => l.trim().length > 0)
  if (clean.length) into.push({ title, lines: clean.slice(0, MAX_LINES) })
}

// ------------------------------------------------------------ co se změnilo ---

/**
 * Změny v lécích — nová dávka, nový lék, ukončený lék.
 *
 * Řadí se podle data, protože v ordinaci se to vypráví chronologicky.
 * Důvod změny se přebírá doslova tak, jak si ho uživatelka zapsala.
 */
function medLines(meds: MedRow[], from: string, to: string): string[] {
  const rows: { on: string; order: number; text: string }[] = []

  for (const m of meds) {
    const name = m.name.trim() || 'Lék bez názvu'

    for (const h of m.history ?? []) {
      if (!isInRange(h.on, from, to)) continue
      const dose = h.dose.trim()
      rows.push({
        on: h.on,
        order: 1,
        text: `${day(h.on)} — ${name}: ${dose ? `nová dávka ${dose}` : 'změna dávkování'}${paren(h.why)}`,
      })
    }

    if (m.startOn && isInRange(m.startOn, from, to)) {
      const dose = m.dose.trim()
      rows.push({
        on: m.startOn,
        order: 0,
        text: `${day(m.startOn)} — nasazeno: ${name}${dose ? `, ${dose}` : ''}`,
      })
    }

    if (m.endOn && isInRange(m.endOn, from, to)) {
      rows.push({ on: m.endOn, order: 2, text: `${day(m.endOn)} — ukončeno: ${name}` })
    }
  }

  return rows
    .sort((a, b) => a.on.localeCompare(b.on) || a.order - b.order || a.text.localeCompare(b.text, 'cs'))
    .map((r) => r.text)
}

// -------------------------------------------------------------- výsledky ---

/**
 * Laboratorní hodnoty za období, seskupené po parametru.
 *
 * Když parametr přišel víckrát, řetězí se šipkou za sebou — je to popis
 * pořadí zápisů, ne tvrzení o tom, jestli je to dobře. Interpretaci
 * souhrn nedělá a dělat nesmí.
 */
function labLines(labs: LabResult[], from: string, to: string): string[] {
  const inRange = labs
    .filter((l) => isInRange(l.onDate, from, to) && Number.isFinite(l.value))
    .sort((a, b) => a.onDate.localeCompare(b.onDate))

  const groups = new Map<string, { name: string; first: string; items: LabResult[] }>()
  for (const l of inRange) {
    const key = l.paramKey || l.name
    const g = groups.get(key)
    if (g) g.items.push(l)
    else groups.set(key, { name: (l.name || l.paramKey).trim(), first: l.onDate, items: [l] })
  }

  return [...groups.values()]
    .sort((a, b) => a.first.localeCompare(b.first) || a.name.localeCompare(b.name, 'cs'))
    .map((g) => {
      const parts = g.items.map((l) => {
        const unit = l.unit.trim()
        return `${czNumber(l.value)}${unit ? ` ${unit}` : ''} (${day(l.onDate)})`
      })
      return `${g.name}: ${parts.join(' → ')}`
    })
}

// ------------------------------------------------------------ ultrazvuky ---

function ultrasoundLine(u: UltrasoundRow): string {
  const left = sizes(u.left).length
  const right = sizes(u.right).length
  const biggest = biggestFollicle(u)

  const parts: string[] = []
  if (left || right) parts.push(`folikuly vlevo ${left}, vpravo ${right}`)
  if (biggest !== null) parts.push(`největší ${czNumber(biggest, 1)} mm`)
  if (u.endometrium !== null && Number.isFinite(u.endometrium) && u.endometrium > 0) {
    parts.push(`sliznice ${czNumber(u.endometrium, 1)} mm`)
  }

  const body = parts.length ? parts.join(', ') : 'zapsán bez čísel'
  const note = u.note.trim()
  return `${day(u.date)} — ${body}${note ? `; poznámka: ${note}` : ''}`
}

/**
 * Ultrazvuky za období a jak se čísla mezi prvním a posledním posunula.
 *
 * Věta o vývoji je popis dvou zapsaných hodnot, nic víc — neříká, jestli
 * je ten posun očekávaný, dostatečný nebo rychlý.
 */
function ultrasoundLines(scans: UltrasoundRow[]): string[] {
  const lines = scans.map(ultrasoundLine)
  if (scans.length < 2) return lines

  const first = scans[0]
  const last = scans[scans.length - 1]
  const moves: string[] = []

  const fc = follicleCount(first)
  const lc = follicleCount(last)
  if (fc || lc) moves.push(`počet měřených folikulů ${fc} → ${lc}`)

  const fe = first.endometrium
  const le = last.endometrium
  if (fe !== null && le !== null && Number.isFinite(fe) && Number.isFinite(le)) {
    moves.push(`sliznice ${czNumber(fe, 1)} → ${czNumber(le, 1)} mm`)
  }

  if (moves.length) {
    lines.push(`Mezi ${day(first.date)} a ${day(last.date)}: ${joinCz(moves)}.`)
  }
  return lines
}

// -------------------------------------------------------------- příznaky ---

interface SymptomTally {
  id: string
  label: string
  count: number
  avgIntensity: number | null
}

function tallySymptoms(logs: SymptomLog[], labelOf: (id: string) => string): SymptomTally[] {
  // Zápisy bez zadané intenzity se počítají, ale do průměru nevstupují.
  const bucket = new Map<string, { count: number; rated: number; sum: number }>()
  for (const l of logs) {
    if (!l.symptomId) continue
    const cur = bucket.get(l.symptomId) ?? { count: 0, rated: 0, sum: 0 }
    cur.count++
    if (l.intensity !== null && Number.isFinite(l.intensity)) {
      cur.rated++
      cur.sum += l.intensity
    }
    bucket.set(l.symptomId, cur)
  }

  return [...bucket.entries()]
    .map(([id, b]) => ({
      id,
      label: labelOf(id) || SYMPTOM_BY_ID[id]?.label || id,
      count: b.count,
      avgIntensity: b.rated > 0 ? round(b.sum / b.rated, 1) : null,
    }))
    .sort(
      (a, b) =>
        b.count - a.count ||
        (b.avgIntensity ?? -1) - (a.avgIntensity ?? -1) ||
        a.label.localeCompare(b.label, 'cs'),
    )
}

function symptomLines(logs: SymptomLog[], tally: SymptomTally[]): string[] {
  if (tally.length === 0) return []

  const days = new Set(logs.map((l) => l.date)).size
  const head = `${pl(logs.length, 'zápis', 'zápisy', 'zápisů')} příznaků, rozložených do ${pl(days, 'dne', 'dnů', 'dnů')}.`

  const top = tally
    .slice(0, 5)
    .map((t) =>
      t.avgIntensity === null
        ? `${t.label} — ${t.count}×, intenzita nezapsaná`
        : `${t.label} — ${t.count}×, průměrná intenzita ${czNumber(t.avgIntensity, 1)} z 10`,
    )

  return [head, ...top]
}

// ------------------------------------------------------------------ otázky ---

/**
 * Otázky, které z dat plynou.
 *
 * Nejsou to rady. Je to seznam vět, které se dají v ordinaci přečíst nahlas,
 * a jsou seřazené podle toho, co nesmí zapadnout: nejdřív příznaky, které
 * si zaslouží zmínit hned, pak termíny, pak zbytek.
 */
function buildQuestions(
  input: SummaryInput,
  ctx: {
    to: string
    doseChanged: boolean
    startedMeds: string[]
    scans: UltrasoundRow[]
    follicleGrowth: boolean
    labNames: string[]
  },
): string[] {
  const out: string[] = []
  const c = input.cycle

  // Varovné příznaky tady schválně nejsou. Odložit dušnost nebo silné
  // krvácení na příští kontrolu je přesně to, co symptoms.ts zakazuje —
  // vracejí se zvlášť v `urgentSymptoms` a obrazovka je ukáže jako výstrahu.

  // Trigger se píchá na minutu přesně. Chybějící hodina je nejdražší
  // nezodpovězená otázka v celém cyklu.
  if (c && c.triggerOn && c.triggerOn >= ctx.to && !c.triggerAt.trim()) {
    out.push('V kolik přesně mám píchnout trigger a co dělat, kdybych se o hodinu minula?')
  }

  // Na betu se ptáme, až když je na co navázat: transfer naplánovaný nebo
  // odběr za sebou. Před stimulací by ta otázka byla o dva kroky napřed.
  if (c && !betaDate(c) && (lastTransferDate(c) || (c.retrievalOn && c.retrievalOn <= ctx.to))) {
    out.push('Kdy přesně mám jít na odběr bety a je potřeba být nalačno?')
  }

  if (ctx.doseChanged) {
    out.push('Dávka se v tomhle období měnila. Jak dlouho mám v současné dávce pokračovat?')
  }

  if (ctx.follicleGrowth) {
    // „Změřených“, ne „folikulů“. Vyšší počet může znamenat i to, že lékař
    // tentokrát naměřil víc — což je výklad, který aplikaci nepřísluší.
    out.push(
      'Od prvního ultrazvuku v tomhle období se počet změřených folikulů zvýšil. Kdy vám podle toho vychází odběr?',
    )
  } else if (ctx.scans.length && c && !c.retrievalOn) {
    out.push('Kdy podle posledního ultrazvuku vychází odběr a jak často mám ještě chodit na kontroly?')
  }

  if (ctx.labNames.length) {
    out.push(
      `Můžete mi projít nové výsledky (${joinCz(ctx.labNames.slice(0, 3))}) a říct, co z nich plyne pro další kroky?`,
    )
  }

  if (ctx.startedMeds.length) {
    out.push(
      `Nasadili jsme ${joinCz(ctx.startedMeds.slice(0, 3))}. Zůstává to takhle i do příště, nebo se to bude měnit?`,
    )
  }

  const lastScan = ctx.scans[ctx.scans.length - 1]
  if (lastScan && lastScan.endometrium !== null && c && !lastTransferDate(c)) {
    out.push('Jak jsme na tom se sliznicí a kdy se rozhodne o termínu transferu?')
  }

  // Vždycky musí zbýt aspoň něco, s čím se dá do ordinace jít.
  out.push('Co je teď dalším krokem?')
  out.push('Kdy se ozvete vy a kdy mám volat já?')
  out.push('Na co si mám do příště dávat pozor a kdy je důvod volat mimo ordinační hodiny?')

  return [...new Set(out)].slice(0, MAX_QUESTIONS)
}

// ------------------------------------------------------------------ souhrn ---

/**
 * Složí souhrn od poslední návštěvy.
 *
 * Sekce vznikají jen tam, kde jsou data — prázdná sekce s pomlčkami nikomu
 * nepomůže. Když není zapsané vůbec nic, vrátí se místo přehledu věta, která
 * říká, čím začít, ať obrazovka nekončí prázdnem.
 */
export function buildSummary(input: SummaryInput): VisitSummary {
  // Otočené období je překlep volajícího, ne důvod vrátit prázdno.
  const from = input.from <= input.to ? input.from : input.to
  const to = input.from <= input.to ? input.to : input.from

  const sections: SummarySection[] = []

  // --- co se změnilo ---
  const meds = input.meds ?? []
  const changes = medLines(meds, from, to)
  const doseChanged = meds.some((m) => (m.history ?? []).some((h) => isInRange(h.on, from, to)))
  const startedMeds = meds
    .filter((m) => m.startOn && isInRange(m.startOn, from, to))
    .map((m) => m.name.trim())
    .filter((n) => n.length > 0)
  pushSection(sections, 'Co se změnilo', changes)

  // --- nové výsledky ---
  const labs = (input.labs ?? []).filter((l) => isInRange(l.onDate, from, to))
  pushSection(sections, 'Nové výsledky', labLines(labs, from, to))

  // --- ultrazvuky ---
  const scans = (input.ultrasounds ?? [])
    .filter((u) => isInRange(u.date, from, to))
    .sort((a, b) => a.date.localeCompare(b.date))
  pushSection(sections, 'Ultrazvuky', ultrasoundLines(scans))

  // --- jak jste to nesla ---
  const logs = (input.symptomLogs ?? []).filter((l) => isInRange(l.date, from, to))
  const labelOf = input.symptomLabel ?? ((id: string) => id)
  const tally = tallySymptoms(logs, labelOf)
  pushSection(sections, 'Jak jste to nesla', symptomLines(logs, tally))

  // --- co bylo v kalendáři ---
  const events = input.events ?? []
  const past = events
    .filter((e) => isInRange(e.onDate, from, to))
    .sort((a, b) => a.onDate.localeCompare(b.onDate) || a.title.localeCompare(b.title, 'cs'))
  const seen = new Set<string>()
  const pastLines: string[] = []
  for (const e of past) {
    const key = `${e.onDate}|${e.title}`
    if (seen.has(key)) continue
    seen.add(key)
    pastLines.push(`${day(e.onDate)} — ${e.title.trim() || e.kind}`)
  }
  pushSection(sections, 'Co bylo v kalendáři', pastLines)

  // --- co přijde ---
  const ahead: string[] = []
  if (input.cycle) {
    for (const n of nextUp(input.cycle, to)) {
      ahead.push(`${day(n.date)} — ${n.label} (${inDaysLabel(n.inDays)})`)
    }
    // Odhad bety je orientační a je tak i popsaný. Přesný termín dává klinika.
    if (!betaDate(input.cycle)) {
      const est = estimatedBeta(input.cycle, to)
      if (est && est >= to) {
        ahead.push(
          `Beta HCG zatím nemá zapsané datum. Podle data transferu by orientačně vycházela na ${day(est)} — přesný termín potvrďte na klinice.`,
        )
      }
    }
  }
  for (const e of events.filter((e) => e.onDate > to).sort((a, b) => a.onDate.localeCompare(b.onDate)).slice(0, 3)) {
    ahead.push(`${day(e.onDate)} — ${e.title.trim() || e.kind} (${inDaysLabel(daysBetween(to, e.onDate))})`)
  }
  pushSection(sections, 'Co přijde', ahead)

  // --- užívání léků ---
  const pct = adherencePercent(input.adherencePct)
  if (pct !== null) {
    pushSection(sections, 'Užívání léků', [
      `Za období máte odškrtnuto ${pct} % zapsaných dávek.`,
      'Neodškrtnutá dávka nemusí znamenat vynechaný lék — často se jen zapomene odškrtnout.',
    ])
  }

  // --- když není z čeho skládat ---
  if (sections.length === 0) {
    sections.push({
      title: 'Zatím bez zápisů',
      lines: [
        'Za tohle období nemáte zapsané nic, z čeho by se dal souhrn složit.',
        'Stačí málo: zapsat léky, ultrazvuk nebo pár příznaků — a před další kontrolou už tu bude přehled, se kterým se dá do ordinace jít.',
      ],
    })
  }

  // Poslední věta patří vždycky tomuhle. Vlastní sekce, aby se nemusela
  // prát s limitem řádků té předchozí.
  sections.push({ title: 'Na závěr', lines: [DISCLAIMER] })

  // --- lede ---
  const span = daysBetween(from, to) + 1
  const where = input.cycle
    ? `${cycleTitle(input.cycle)}${input.status ? `, ${lowerFirst(input.status.headline.trim())}` : ''}`
    : ''
  const lede = `Přehled zapsaných údajů od ${formatCzechDate(from)} do ${formatCzechDate(to)}, ${czDays(span)}${where ? ` — ${where}` : ''}.`

  // --- otázky ---
  const flagged = [...new Set(logs.filter((l) => SYMPTOM_BY_ID[l.symptomId]?.warn).map((l) => l.symptomId))]
    .map((id) => labelOf(id) || SYMPTOM_BY_ID[id]?.label || id)
    .sort((a, b) => a.localeCompare(b, 'cs'))

  const growth =
    scans.length >= 2 && follicleCount(scans[scans.length - 1]) > follicleCount(scans[0])

  const suggestedQuestions = buildQuestions(input, {
    to,
    doseChanged,
    startedMeds,
    scans,
    follicleGrowth: growth,
    labNames: [...new Set(labs.map((l) => (l.name || l.paramKey).trim()).filter(Boolean))].sort((a, b) =>
      a.localeCompare(b, 'cs'),
    ),
  })

  return { from, to, lede, sections, suggestedQuestions, urgentSymptoms: flagged }
}
