import {
  cycleTitle,
  hasOwnRetrieval,
  KIND_LABEL,
  NO_EMBRYO_LABEL,
  OUTCOME_LABEL,
  sortedTransfers,
  SPERM_SOURCE_LABEL,
  EGG_SOURCE_LABEL,
  TRANSFER_KIND_LABEL,
  TRANSFER_OUTCOME_LABEL,
  TRANSFER_STAGE_LABEL,
  stageForDay,
  type CycleRow,
} from './cycle'
import {
  embryoTitle,
  FATE_LABEL,
  PGT_LABEL,
  PGT_RESULT_LABEL,
  reachedDay,
  STAGE_LABEL,
  THAW_LABEL,
  type Embryo,
} from './embryo'
import { czk, readExpense, totals as financeTotals, type Expense } from './finance'
import { formatCzechDate } from './dates'
import type { IsoDate, Profile } from './profile'

/**
 * Přehled mé IVF cesty.
 *
 * Ne technický export. Dokument, který se dá vytisknout a přinést lékaři
 * na první konzultaci jinde, nebo si ho po letech přečíst. Proto je psaný
 * ve větách a v pořadí, ve kterém se léčba odehrála, ne v pořadí, v jakém
 * jsou data uložená.
 *
 * ------------------------------------------------------------- SOUKROMÍ ---
 * Deník je **ve výchozím stavu vypnutý**. Zápisy z deníku jsou to nejosobnější,
 * co v aplikaci je, a do dokumentu, který se dává z ruky, nepatří, dokud si
 * to uživatelka výslovně nezvolí. Totéž platí pro finance.
 *
 * Čistý doménový modul. Skládá data, nekreslí je.
 */

export interface ReportRow {
  label: string
  value: string
}

export interface ReportBlock {
  /** Nadpis bloku. Prázdný = pokračování předchozího. */
  title: string
  rows: ReportRow[]
  /** Volný text pod tabulkou. */
  note?: string
}

export interface ReportSection {
  title: string
  blocks: ReportBlock[]
  /** Věta, když sekce nemá co ukázat. */
  empty?: string
}

export interface ReportDoc {
  title: string
  subtitle: string
  createdOn: IsoDate
  sections: ReportSection[]
}

export interface ReportOptions {
  includeFinance: boolean
  includeJournal: boolean
}

export interface ReportInput {
  profile: Profile
  cycles: CycleRow[]
  embryos: Embryo[]
  expenses: Expense[]
  journal: { date: IsoDate; mood: number | null; note: string; promptAnswer: string; win: string }[]
  exercises: { date: IsoDate; exercise: string; title: string; fields: string[] }[]
  today: IsoDate
  options: ReportOptions
}

const DASH = 'nezapsáno'

function den(d: IsoDate | null): string {
  return d ? formatCzechDate(d, { year: true }) : DASH
}

function cislo(n: number | null): string {
  return n === null || !Number.isFinite(n) ? DASH : String(n)
}

/**
 * Řádky tabulky.
 *
 * Prázdné a nevyplněné se zahazují. `undefined` schválně taky: kdyby se do
 * úložiště kdykoli dostal starý nebo neznámý klíč, číselník ho nenajde a
 * v dokumentu, který se dává lékaři, by stálo „undefined“.
 */
function radky(pairs: [string, string | null | undefined][]): ReportRow[] {
  return pairs
    .filter(([, v]) => v !== null && v !== undefined && v !== '')
    .map(([label, value]) => ({ label, value: value as string }))
}

/** Popisek z číselníku. Neznámý klíč nic nevypíše, místo aby lhal. */
function popis<T extends string>(map: Record<T, string>, key: T | undefined): string | null {
  if (!key) return null
  return map[key] ?? null
}

// =============================================================== PROFIL ===

function profilSekce(input: ReportInput): ReportSection {
  const p = input.profile
  const rows = radky([
    ['Jméno', p.displayName.trim() || 'Nevyplněno'],
    ['Rok narození', p.birthYear ? String(p.birthYear) : null],
    ['Klinika', p.clinicName],
    ['Profil vytvořen', p.createdAt ? formatCzechDate(p.createdAt.slice(0, 10), { year: true }) : null],
    ['Snažíme se od', p.tryingSince ? den(p.tryingSince) : null],
    ['Začátek vyšetření', p.diagnosticsStartedOn ? den(p.diagnosticsStartedOn) : null],
    ['AMH', p.amh !== null ? String(p.amh) : null],
    ['Cyklů zapsaných v aplikaci', String(input.cycles.length)],
  ])
  return { title: 'Můj profil', blocks: [{ title: '', rows }] }
}

// =============================================================== CYKLY ===

function embryaBlok(c: CycleRow, embryos: Embryo[]): ReportBlock {
  const mine = embryos.filter((e) => e.cycleId === c.id).sort((a, b) => a.number - b.number)
  if (mine.length === 0) {
    return {
      title: 'Embrya',
      rows: [],
      note:
        popis(NO_EMBRYO_LABEL, c.noEmbryoReason || undefined) ??
        'V tomhle cyklu nebylo evidováno žádné embryo.',
    }
  }
  return {
    title: 'Embrya',
    rows: mine.map((e) => {
      const den = reachedDay(e)
      const posledni = [...e.days].sort((a, b) => a.day - b.day).pop()
      const pgt = popis(PGT_LABEL, e.pgt)
      const pgtVysledek = popis(PGT_RESULT_LABEL, e.pgtResult)
      const parts = [
        den !== null ? `D${den}` : null,
        popis(STAGE_LABEL, posledni?.stage),
        posledni?.grade.trim() || null,
        pgt ? `${pgt}${pgtVysledek ? `: ${pgtVysledek}` : ''}` : null,
        e.frozenOn ? `zamraženo ${den2(e.frozenOn)}` : null,
        popis(THAW_LABEL, e.thawResult),
        popis(FATE_LABEL, e.fate),
        e.finalState ? 'konečný stav' : null,
        e.origin === 'darovane' ? 'darované' : null,
      ].filter((x): x is string => Boolean(x))
      return { label: embryoTitle(e), value: parts.join(' · ') }
    }),
  }
}

function den2(d: IsoDate): string {
  return formatCzechDate(d, { year: false })
}

function transferyBlok(c: CycleRow, embryos: Embryo[]): ReportBlock {
  const vsechny = sortedTransfers(c)
  if (vsechny.length === 0) {
    return { title: 'Transfery', rows: [], note: 'V tomhle cyklu nebyl evidován žádný transfer.' }
  }
  return {
    title: 'Transfery',
    rows: vsechny.map((t) => {
      const druh = vsechny.filter((x) => x.kind === t.kind)
      const i = druh.findIndex((x) => x.id === t.id) + 1
      const znacka = t.kind === 'kryo' ? 'KET' : 'ET'
      const nazev = druh.length > 1 ? `${znacka} #${i}` : znacka

      const kdo = t.embryoIds
        .map((id) => embryos.find((e) => e.id === id))
        .filter((e): e is Embryo => Boolean(e))
        .map(embryoTitle)
        .join(', ')

      const pgt = popis(PGT_LABEL, t.pgt)
      const pgtVysledek = popis(PGT_RESULT_LABEL, t.pgtResult)
      const parts = [
        t.date ? den(t.date) : DASH,
        t.embryoDay !== null ? `D${t.embryoDay}` : null,
        popis(TRANSFER_STAGE_LABEL, t.stage || stageForDay(t.embryoDay)),
        t.grade.trim() || null,
        kdo || null,
        pgt ? `${pgt}${pgtVysledek ? `: ${pgtVysledek}` : ''}` : null,
        t.cancelled
          ? `zrušen${t.cancelReason.trim() ? `: ${t.cancelReason}` : ''}`
          : popis(TRANSFER_OUTCOME_LABEL, t.outcome),
      ].filter((x): x is string => Boolean(x))

      return { label: nazev, value: parts.join(' · ') }
    }),
  }
}

function cyklusSekce(c: CycleRow, input: ReportInput): ReportSection {
  const vlastniOdber = hasOwnRetrieval(c)

  const zaklad: ReportBlock = {
    title: '',
    rows: radky([
      ['Druh cyklu', popis(KIND_LABEL, c.kind)],
      ['Zahájen', den(c.cd1On ?? c.startedOn)],
      ['Klinika', c.clinic.trim() || null],
      ['Lékař', c.doctor.trim() || null],
      ['Protokol', c.protocol.trim() || null],
      ['Vajíčka', c.eggSource !== 'nezapsano' ? popis(EGG_SOURCE_LABEL, c.eggSource) : null],
      ['Spermie', c.spermSource !== 'nezapsano' ? popis(SPERM_SOURCE_LABEL, c.spermSource) : null],
      ['Dárcovství', c.donorNote.trim() || null],
      ['Výsledek', popis(OUTCOME_LABEL, c.outcome)],
      ['Uzavřen', c.endedOn ? den(c.endedOn) : null],
    ]),
  }

  const prubeh: ReportBlock = {
    title: 'Průběh',
    rows: radky([
      ['Začátek stimulace', c.stimStartOn ? den(c.stimStartOn) : null],
      ['Trigger', c.triggerOn ? `${den(c.triggerOn)}${c.triggerAt ? ` v ${c.triggerAt}` : ''}` : null],
      ['Odběr vajíček', vlastniOdber && c.retrievalOn ? den(c.retrievalOn) : null],
      // Kryotransfer ani transfer darovaného embrya vlastní odběr nemají.
      // Řádek „Odebraná vajíčka: nezapsáno“ by v takovém cyklu vypadal
      // jako chybějící údaj, přitom prostě nikdy nevznikl.
      ['Odebraná vajíčka', vlastniOdber ? cislo(c.eggs) : null],
      ['Z toho zralá', vlastniOdber ? cislo(c.mature) : null],
      ['Oplozená', vlastniOdber ? cislo(c.fertilized) : null],
      ['Blastocysty 5. den', vlastniOdber ? cislo(c.day5) : null],
      ['Blastocysty 6. den', vlastniOdber ? cislo(c.day6) : null],
      ['Zamražená embrya', vlastniOdber ? cislo(c.frozen) : null],
    ]),
  }

  const hcg: ReportBlock = {
    title: 'Odběry a testy hCG',
    rows: c.hcgTests
      .filter((h) => h.date)
      .sort((a, b) => (a.date as IsoDate).localeCompare(b.date as IsoDate))
      .map((h) => ({
        label: h.kind === 'krev' ? 'Odběr hCG' : 'Domácí test',
        value: [den(h.date), h.value !== null ? `${h.value} IU/l` : null].filter(Boolean).join(' · '),
      })),
  }

  const bloky = [zaklad, embryaBlok(c, input.embryos), transferyBlok(c, input.embryos)]
  if (prubeh.rows.length) bloky.splice(1, 0, prubeh)
  if (hcg.rows.length) bloky.push(hcg)

  if (c.note.trim()) bloky.push({ title: 'Poznámka', rows: [], note: c.note.trim() })

  if (input.options.includeFinance) {
    const moje = input.expenses.filter((e) => e.cycleId === c.id)
    if (moje.length) {
      const t = financeTotals(moje)
      // Položka bez ceny se do součtu nepočítá. Kdyby se cyklus, ve kterém
      // žádná cena zapsaná není, vypsal jako „0 Kč“, tvrdil by dokument,
      // že ji léčba nic nestála.
      const jenNezname = t.count > 0 && t.count === t.unknownCount
      bloky.push({
        title: 'Finance cyklu',
        rows: jenNezname
          ? []
          : [
              { label: 'Celkem', value: czk(t.cost) },
              { label: 'Uhrazeno', value: czk(t.paid) },
              { label: 'Zbývá', value: czk(t.remaining) },
            ],
        note: pozn(t.unknownCount, jenNezname),
      })
    }
  }

  return { title: cycleTitle(c), blocks: bloky }
}

// ============================================================= FINANCE ===

/**
 * Věta o položkách bez ceny.
 *
 * Bez ní vypadá součet úplně, i když v něm něco chybí. To je v dokumentu,
 * který se dává z ruky, ta nejhorší možná chyba.
 */
function pozn(unknownCount: number, jenNezname: boolean): string | undefined {
  if (unknownCount === 0) return undefined
  const kolik =
    unknownCount === 1
      ? 'Jedna položka nemá'
      : unknownCount < 5
        ? `${unknownCount} položky nemají`
        : `${unknownCount} položek nemá`
  return jenNezname
    ? `${kolik} zapsanou cenu, takže se tu nedá nic sečíst.`
    : `${kolik} zapsanou cenu, takže součet není úplný.`
}

function financeSekce(input: ReportInput): ReportSection {
  const t = financeTotals(input.expenses)
  const bloky: ReportBlock[] = [
    {
      title: '',
      rows: [
        { label: 'Celkem za IVF cestu', value: czk(t.cost) },
        { label: 'Uhrazeno', value: czk(t.paid) },
        { label: 'Zbývá', value: czk(t.remaining) },
      ],
      note: pozn(t.unknownCount, t.count > 0 && t.count === t.unknownCount),
    },
  ]

  const polozky = input.expenses
    .slice()
    .sort((a, b) => (b.onDate ?? '').localeCompare(a.onDate ?? ''))
    .map((e) => {
      const v = readExpense(e)
      // „Uhrazeno“ u položky bez ceny by znamenalo, že je zaplacená. Není:
      // jen se neví, kolik stojí.
      const stav = !v.counted ? 'cena zatím není zapsaná' : v.remaining > 0 ? `zbývá ${czk(v.remaining)}` : 'uhrazeno'
      return {
        label: e.title.trim() || 'Bez názvu',
        value: v.counted ? `${czk(v.cost)} · ${stav}` : stav,
      }
    })
  if (polozky.length) bloky.push({ title: 'Jednotlivé položky', rows: polozky })

  return { title: 'Finance', blocks: bloky, empty: 'Zatím žádné zapsané výdaje.' }
}

// ============================================================== DENÍK ===

function denikSekce(input: ReportInput): ReportSection {
  const bloky: ReportBlock[] = []

  const zapisy = input.journal
    .filter((j) => j.note.trim() || j.promptAnswer.trim() || j.win.trim())
    .sort((a, b) => b.date.localeCompare(a.date))

  for (const j of zapisy) {
    const rows = radky([
      ['Zápis', j.note.trim() || null],
      ['Otázka dne', j.promptAnswer.trim() || null],
      ['Co se povedlo', j.win.trim() || null],
    ])
    if (rows.length) bloky.push({ title: formatCzechDate(j.date, { year: true }), rows })
  }

  for (const e of input.exercises.slice().sort((a, b) => b.date.localeCompare(a.date))) {
    const rows = e.fields
      .map((f, i) => ({ label: `Krok ${i + 1}`, value: f.trim() }))
      .filter((r) => r.value)
    if (rows.length) {
      bloky.push({ title: `${formatCzechDate(e.date, { year: true })} · ${e.title}`, rows })
    }
  }

  return { title: 'Moje reflexe', blocks: bloky, empty: 'Zatím žádné zápisy.' }
}

/**
 * Moje práce se sebou.
 *
 * Čísla, ne výklad. Aplikace **nikdy** nenapíše „vaše úzkost se zhoršila“.
 * Ukáže, co si uživatelka zapsala, a výklad nechá na ní a na jejím
 * odborníkovi.
 */
function pracesSebouSekce(input: ReportInput): ReportSection {
  const zapisu = input.journal.filter((j) => j.note.trim() || j.promptAnswer.trim() || j.win.trim()).length
  const cviceni = input.exercises.length

  const podleCviceni = new Map<string, number>()
  for (const e of input.exercises) podleCviceni.set(e.title, (podleCviceni.get(e.title) ?? 0) + 1)

  const nalady = input.journal.map((j) => j.mood).filter((m): m is number => m !== null)
  const prumer = nalady.length ? Math.round((nalady.reduce((a, b) => a + b, 0) / nalady.length) * 10) / 10 : null

  const bloky: ReportBlock[] = [
    {
      title: '',
      rows: radky([
        ['Zápisů v deníku', zapisu > 0 ? String(zapisu) : null],
        ['Vyplněných cvičení', cviceni > 0 ? String(cviceni) : null],
        ['Dní se zapsanou náladou', nalady.length > 0 ? String(nalady.length) : null],
        ['Průměrná zapsaná nálada', prumer !== null ? `${prumer} z 5` : null],
      ]),
      note: 'Jsou to jen vaše vlastní zápisy. Aplikace z nich nic nevyvozuje a nic nediagnostikuje.',
    },
  ]

  if (podleCviceni.size) {
    bloky.push({
      title: 'Cvičení, která jste použila',
      rows: [...podleCviceni.entries()]
        .sort((a, b) => b[1] - a[1])
        .map(([title, n]) => ({ label: title, value: `${n}×` })),
    })
  }

  return { title: 'Moje práce se sebou', blocks: bloky, empty: 'Zatím tu není co shrnout.' }
}

// =============================================================== SKLÁDÁ ===

export function buildReport(input: ReportInput): ReportDoc {
  const sections: ReportSection[] = [profilSekce(input)]

  const poradi = [...input.cycles].sort((a, b) => a.startedOn.localeCompare(b.startedOn))
  if (poradi.length === 0) {
    sections.push({ title: 'Přehled IVF cyklů', blocks: [], empty: 'Zatím žádný zapsaný cyklus.' })
  } else {
    for (const c of poradi) sections.push(cyklusSekce(c, input))
  }

  if (input.options.includeFinance) sections.push(financeSekce(input))
  if (input.options.includeJournal) {
    sections.push(denikSekce(input))
    sections.push(pracesSebouSekce(input))
  }

  return {
    title: 'Moje IVF cesta',
    subtitle: input.profile.displayName.trim()
      ? `${input.profile.displayName.trim()}, přehled k ${formatCzechDate(input.today, { year: true })}`
      : `Přehled k ${formatCzechDate(input.today, { year: true })}`,
    createdOn: input.today,
    sections,
  }
}
