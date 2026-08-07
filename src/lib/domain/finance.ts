import type { IsoDate } from './profile'

/**
 * Moje IVF finance.
 *
 * Léčba stojí desítky až stovky tisíc a platí se po částech, často měsíce.
 * Žena po druhém cyklu neví, kolik už dala dohromady, protože to má
 * v hlavě, v mailu a v bance. Tenhle modul jí na to dá jedno místo.
 *
 * ------------------------------------------- NÁKLAD NENÍ TOTÉŽ CO PLATBA ---
 * Nejdůležitější rozhodnutí celého modulu. **Jedna položka = jeden náklad.
 * Jedna položka může mít neomezeně mnoho plateb.**
 *
 * PGT za 20 000 Kč zaplacené čtyřikrát po pěti tisících je jeden náklad,
 * ne čtyři. Kdyby se z každé platby stala samostatná položka, součet za
 * cyklus by seděl, ale odpověď na otázku „kolik stálo PGT“ by z aplikace
 * nešla dostat a „zbývá doplatit“ by neexistovalo vůbec.
 *
 * ------------------------------------------------------------ CO SE POČÍTÁ ---
 * Zbytek se počítá z **vlastního nákladu**, ne z celkové ceny. Když z ceny
 * 20 000 hradí pojišťovna 5 000, žena dluží 15 000 a po zaplacení 15 000 má
 * hotovo. Údaj o pojišťovně je jenom informativní: co a kolik se hradí, se
 * liší podle situace a aplikace to za nikoho neurčuje.
 *
 * Položka s neznámou cenou se do součtů **nezapočítává**. Nula by lhala
 * stejně jako odhad.
 *
 * Čistý doménový modul. Žádný prohlížeč, žádné HTML.
 */

// ============================================================== KATEGORIE ===

export interface CategoryDef {
  id: string
  label: string
}

/**
 * Kategorie výdajů.
 *
 * Vlastní kategorie se ukládá jako libovolný text do stejného pole. Proto
 * je typ `string`, ne union: seznam je nabídka, ne omezení.
 */
export const CATEGORIES: CategoryDef[] = [
  { id: 'klinika', label: 'Klinika' },
  { id: 'leky', label: 'Léky' },
  { id: 'genetika', label: 'Genetika a PGT' },
  { id: 'embryologie', label: 'Embryologie' },
  { id: 'odber', label: 'Odběr vajíček' },
  { id: 'oplodneni', label: 'Oplodnění a ICSI' },
  { id: 'kryo', label: 'Kryokonzervace' },
  { id: 'skladovani', label: 'Skladování embryí' },
  { id: 'et', label: 'Embryotransfer' },
  { id: 'ket', label: 'Kryoembryotransfer' },
  { id: 'vysetreni', label: 'Vyšetření' },
  { id: 'muz', label: 'Vyšetření partnera' },
  { id: 'podpurna', label: 'Podpůrná péče' },
  { id: 'doplnky', label: 'Doplňky stravy' },
  { id: 'cestovani', label: 'Cestování' },
  { id: 'ubytovani', label: 'Ubytování' },
  { id: 'administrativa', label: 'Administrativa' },
  { id: 'jine', label: 'Jiné' },
]

const CATEGORY_BY_ID = new Map(CATEGORIES.map((c) => [c.id, c.label] as const))

/** Název kategorie. Neznámé id je vlastní kategorie a vrací se, jak je. */
export function categoryLabel(id: string): string {
  return CATEGORY_BY_ID.get(id) ?? (id.trim() || 'Bez kategorie')
}

// ================================================================= PLATBA ===

export type PaymentMethod = 'karta' | 'prevod' | 'hotovost' | 'jine'

export const METHOD_LABEL: Record<PaymentMethod, string> = {
  karta: 'Kartou',
  prevod: 'Převodem',
  hotovost: 'Hotově',
  jine: 'Jinak',
}

export interface Payment {
  id: string
  /** Částka v korunách. Záporné platby se do součtu nepočítají. */
  amount: number
  onDate: IsoDate
  method: PaymentMethod
  note: string
}

export function emptyPayment(id: string, onDate: IsoDate): Payment {
  return { id, amount: 0, onDate, method: 'prevod', note: '' }
}

// ================================================================ POLOŽKA ===

export interface Expense {
  id: string
  /** Povinné minimum. Všechno ostatní se dá doplnit kdykoli. */
  title: string
  /** Id z `CATEGORIES`, nebo vlastní text. */
  category: string
  /** Ke kterému cyklu výdaj patří. `null` = mimo cyklus (vyšetření, doplňky). */
  cycleId: string | null
  /** Ke kterému transferu uvnitř cyklu. `null` = k cyklu jako celku. */
  transferId: string | null

  /** Kolik se čekalo. Zůstává i po zapsání skutečné ceny, kvůli srovnání. */
  planned: number | null
  /** Kolik to nakonec stálo. Když je vyplněná, počítá se z ní. */
  actual: number | null
  /**
   * Cena zatím není známá.
   *
   * Není totéž co nula. Položka se v tomhle stavu do žádného součtu
   * nezapočítá a v přehledu se ukáže zvlášť, aby bylo vidět, že součet
   * ještě není úplný.
   */
  priceUnknown: boolean

  /** Kolik z ceny podle uživatelky hradí pojišťovna. Jen informativní. */
  insurance: number | null

  onDate: IsoDate | null
  note: string
  payments: Payment[]
}

export function emptyExpense(id: string, cycleId: string | null = null): Expense {
  return {
    id,
    title: '',
    category: 'klinika',
    cycleId,
    transferId: null,
    planned: null,
    actual: null,
    priceUnknown: false,
    insurance: null,
    onDate: null,
    note: '',
    payments: [],
  }
}

// ================================================================== ČTENÍ ===

export type ExpenseStatus = 'neznama' | 'neuhrazeno' | 'castecne' | 'uhrazeno' | 'preplatek'

export const STATUS_LABEL: Record<ExpenseStatus, string> = {
  neznama: 'Cena zatím není známá',
  neuhrazeno: 'Neuhrazeno',
  castecne: 'Částečně uhrazeno',
  uhrazeno: 'Uhrazeno',
  preplatek: 'Zaplaceno víc, než je cena',
}

export const STATUS_MARK: Record<ExpenseStatus, string> = {
  neznama: '·',
  neuhrazeno: '○',
  castecne: '◐',
  uhrazeno: '✓',
  preplatek: '!',
}

export interface ExpenseView {
  /** Cena, ze které se počítá. `actual`, jinak `planned`. */
  cost: number | null
  /** Cena minus podíl pojišťovny. Z tohohle se počítá, co zbývá doplatit. */
  ownCost: number | null
  insurance: number
  paid: number
  /** Kolik ještě zbývá doplatit. Nikdy záporné. */
  remaining: number
  /** O kolik je zaplaceno víc, než je vlastní náklad. Nikdy záporné. */
  overpaid: number
  status: ExpenseStatus
  /** Podíl uhrazeného, 0 až 1. `null`, když se nedá spočítat. */
  progress: number | null
  /** Počítá se položka do součtů? */
  counted: boolean
}

/** Součet plateb. Záporné a nečíselné hodnoty se ignorují. */
function paidSum(payments: Payment[]): number {
  return payments.reduce((s, p) => (Number.isFinite(p.amount) && p.amount > 0 ? s + p.amount : s), 0)
}

function usable(v: number | null): number | null {
  return v !== null && Number.isFinite(v) && v >= 0 ? v : null
}

export function readExpense(e: Expense): ExpenseView {
  const paid = paidSum(e.payments)
  const cost = e.priceUnknown ? null : (usable(e.actual) ?? usable(e.planned))
  const insurance = Math.min(usable(e.insurance) ?? 0, cost ?? Infinity)
  const ownCost = cost === null ? null : Math.max(0, cost - insurance)

  if (ownCost === null) {
    return {
      cost: null,
      ownCost: null,
      insurance,
      paid,
      remaining: 0,
      overpaid: 0,
      // Zaplacené peníze u položky bez ceny nejsou přeplatek. Jen zatím
      // není proti čemu je počítat.
      status: 'neznama',
      progress: null,
      counted: false,
    }
  }

  const remaining = Math.max(0, ownCost - paid)
  const overpaid = Math.max(0, paid - ownCost)

  let status: ExpenseStatus = 'neuhrazeno'
  if (overpaid > 0) status = 'preplatek'
  else if (ownCost === 0 || remaining === 0) status = 'uhrazeno'
  else if (paid > 0) status = 'castecne'

  return {
    cost,
    ownCost,
    insurance,
    paid,
    remaining,
    overpaid,
    status,
    progress: ownCost === 0 ? 1 : Math.min(1, paid / ownCost),
    counted: true,
  }
}

// ================================================================ SOUČTY ===

export interface FinanceTotals {
  /** Součet celkových cen u položek se známou cenou. */
  cost: number
  /** Součet vlastních nákladů. Z tohohle se počítá, co zbývá. */
  ownCost: number
  insurance: number
  paid: number
  remaining: number
  overpaid: number
  /** Součet plánovaných cen u položek, které skutečnou cenu ještě nemají. */
  planned: number
  /** Kolik položek má cenu zatím neznámou. Součet kvůli nim není úplný. */
  unknownCount: number
  count: number
}

const NULOVY: FinanceTotals = {
  cost: 0,
  ownCost: 0,
  insurance: 0,
  paid: 0,
  remaining: 0,
  overpaid: 0,
  planned: 0,
  unknownCount: 0,
  count: 0,
}

export function totals(items: Expense[]): FinanceTotals {
  const out: FinanceTotals = { ...NULOVY }
  for (const e of items) {
    const v = readExpense(e)
    out.count += 1
    out.paid += v.paid
    if (!v.counted) {
      out.unknownCount += 1
      continue
    }
    out.cost += v.cost ?? 0
    out.ownCost += v.ownCost ?? 0
    out.insurance += v.insurance
    out.remaining += v.remaining
    out.overpaid += v.overpaid
    if (usable(e.actual) === null) out.planned += usable(e.planned) ?? 0
  }
  return out
}

// ============================================================== SKUPINY ===

export interface FinanceGroup {
  key: string
  label: string
  totals: FinanceTotals
  items: Expense[]
}

/** Výdaje po cyklech. Pořadí určuje volající, aby seděl s historií cyklů. */
export function byCycle(
  items: Expense[],
  cycles: { id: string; title: string }[],
): FinanceGroup[] {
  const out: FinanceGroup[] = []
  for (const c of cycles) {
    const mine = items.filter((e) => e.cycleId === c.id)
    if (mine.length > 0) out.push({ key: c.id, label: c.title, totals: totals(mine), items: mine })
  }
  const mimo = items.filter((e) => e.cycleId === null || !cycles.some((c) => c.id === e.cycleId))
  if (mimo.length > 0) {
    out.push({ key: '', label: 'Mimo cyklus', totals: totals(mimo), items: mimo })
  }
  return out
}

/** Výdaje po transferech uvnitř jednoho cyklu. */
export function byTransfer(
  items: Expense[],
  transfers: { id: string; title: string }[],
): FinanceGroup[] {
  const out: FinanceGroup[] = []
  for (const t of transfers) {
    const mine = items.filter((e) => e.transferId === t.id)
    if (mine.length > 0) out.push({ key: t.id, label: t.title, totals: totals(mine), items: mine })
  }
  return out
}

/** Výdaje po kategoriích, od nejdražší. */
export function byCategory(items: Expense[]): FinanceGroup[] {
  const mapa = new Map<string, Expense[]>()
  for (const e of items) {
    const k = e.category || 'jine'
    const list = mapa.get(k)
    if (list) list.push(e)
    else mapa.set(k, [e])
  }
  return [...mapa.entries()]
    .map(([key, list]) => ({ key, label: categoryLabel(key), totals: totals(list), items: list }))
    .sort((a, b) => b.totals.cost - a.totals.cost || a.label.localeCompare(b.label, 'cs'))
}

// ============================================================== HISTORIE ===

export interface PaymentRow {
  payment: Payment
  expenseId: string
  expenseTitle: string
  category: string
  cycleId: string | null
}

/** Všechny platby v čase, od nejnovější. Tohle je finanční historie. */
export function paymentHistory(items: Expense[]): PaymentRow[] {
  const out: PaymentRow[] = []
  for (const e of items) {
    for (const p of e.payments) {
      out.push({
        payment: p,
        expenseId: e.id,
        expenseTitle: e.title,
        category: e.category,
        cycleId: e.cycleId,
      })
    }
  }
  return out.sort(
    (a, b) => b.payment.onDate.localeCompare(a.payment.onDate) || a.expenseTitle.localeCompare(b.expenseTitle, 'cs'),
  )
}

export interface FinanceFilter {
  cycleId?: string | null
  transferId?: string | null
  category?: string | null
  from?: IsoDate | null
  to?: IsoDate | null
  status?: ExpenseStatus | null
}

/** Prázdné pole filtru znamená „na tomhle nezáleží“, ne „musí být prázdné“. */
export function filterExpenses(items: Expense[], f: FinanceFilter): Expense[] {
  return items.filter((e) => {
    if (f.cycleId !== undefined && f.cycleId !== null && e.cycleId !== f.cycleId) return false
    if (f.transferId !== undefined && f.transferId !== null && e.transferId !== f.transferId) return false
    if (f.category !== undefined && f.category !== null && e.category !== f.category) return false
    if (f.status !== undefined && f.status !== null && readExpense(e).status !== f.status) return false
    if (f.from || f.to) {
      // Období se posuzuje podle data výdaje, a když chybí, podle plateb.
      const data = [e.onDate, ...e.payments.map((p) => p.onDate)].filter(
        (d): d is IsoDate => typeof d === 'string' && d.length > 0,
      )
      if (data.length === 0) return false
      if (f.from && !data.some((d) => d >= f.from!)) return false
      if (f.to && !data.some((d) => d <= f.to!)) return false
    }
    return true
  })
}

// ============================================================ STATISTIKY ===

export interface FinanceStats {
  totals: FinanceTotals
  cycles: number
  transfers: number
  kets: number
  /** Průměr na cyklus. `null`, když není z čeho počítat. */
  avgPerCycle: number | null
}

export function financeStats(
  items: Expense[],
  counts: { cycles: number; transfers: number; kets: number },
): FinanceStats {
  const t = totals(items)
  return {
    totals: t,
    cycles: counts.cycles,
    transfers: counts.transfers,
    kets: counts.kets,
    // Počítá se z toho, co je opravdu zapsané. Cyklus bez jediného výdaje
    // by průměr stáhl dolů a tvářil se, že vyšel levněji.
    avgPerCycle: counts.cycles > 0 && t.cost > 0 ? Math.round(t.cost / counts.cycles) : null,
  }
}

// ============================================================ FORMÁTOVÁNÍ ===

const MEZERA = ' '

/**
 * Částka česky. Tisíce oddělené nedělitelnou mezerou, „Kč“ na konci.
 *
 * `null` je „nezapsáno“, ne nula. Nula je odpověď, prázdno je otázka.
 */
export function czk(amount: number | null): string {
  if (amount === null || !Number.isFinite(amount)) return 'nezapsáno'
  const zaokrouhleno = Math.round(amount)
  const zaporne = zaokrouhleno < 0
  const cislice = String(Math.abs(zaokrouhleno))
  let out = ''
  for (let i = 0; i < cislice.length; i++) {
    if (i > 0 && (cislice.length - i) % 3 === 0) out += MEZERA
    out += cislice[i]
  }
  return `${zaporne ? '-' : ''}${out}${MEZERA}Kč`
}
