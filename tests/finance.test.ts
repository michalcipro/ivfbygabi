import test from 'node:test'
import assert from 'node:assert/strict'
import {
  byCategory,
  byCycle,
  byTransfer,
  categoryLabel,
  czk,
  emptyExpense,
  emptyPayment,
  filterExpenses,
  financeStats,
  paymentHistory,
  readExpense,
  totals,
  type Expense,
  type Payment,
} from '../src/lib/domain/finance'

function vydaj(id: string, patch: Partial<Expense> = {}): Expense {
  return { ...emptyExpense(id), title: id, ...patch }
}

function platba(id: string, amount: number, onDate = '2026-08-05'): Payment {
  return { ...emptyPayment(id, onDate), amount }
}

// ------------------------------------------------------------ formátování ---

test('částka se formátuje česky s nedělitelnou mezerou', () => {
  assert.equal(czk(20000), '20 000 Kč')
  assert.equal(czk(500), '500 Kč')
  assert.equal(czk(1234567), '1 234 567 Kč')
})

test('nula je odpověď, prázdno je otázka', () => {
  assert.equal(czk(0), '0 Kč')
  assert.equal(czk(null), 'nezapsáno')
})

// ------------------------------------------------- jedna položka, víc plateb ---

test('scénář ze zadání: PGT za 20 000 zaplacené čtyřmi platbami', () => {
  const e = vydaj('pgt', {
    title: 'PGT-A',
    category: 'genetika',
    actual: 20000,
    payments: [
      platba('p1', 5000, '2026-08-05'),
      platba('p2', 3000, '2026-08-10'),
      platba('p3', 7000, '2026-08-20'),
      platba('p4', 5000, '2026-08-30'),
    ],
  })
  const v = readExpense(e)
  assert.equal(v.cost, 20000)
  assert.equal(v.paid, 20000)
  assert.equal(v.remaining, 0)
  assert.equal(v.status, 'uhrazeno')
  assert.equal(v.progress, 1)
})

test('platby nemusí být stejné a zbytek se dopočítá sám', () => {
  const e = vydaj('e1', {
    actual: 30000,
    payments: [platba('a', 5000), platba('b', 10000), platba('c', 2500), platba('d', 7500)],
  })
  const v = readExpense(e)
  assert.equal(v.paid, 25000)
  assert.equal(v.remaining, 5000)
  assert.equal(v.status, 'castecne')
})

test('smazaná platba se okamžitě promítne do zbytku', () => {
  const e = vydaj('e1', { actual: 10000, payments: [platba('a', 4000), platba('b', 6000)] })
  assert.equal(readExpense(e).remaining, 0)
  const bezJedne = { ...e, payments: e.payments.filter((p) => p.id !== 'b') }
  assert.equal(readExpense(bezJedne).remaining, 6000)
  assert.equal(readExpense(bezJedne).status, 'castecne')
})

test('bez platby je položka neuhrazená', () => {
  const v = readExpense(vydaj('e1', { planned: 8000 }))
  assert.equal(v.paid, 0)
  assert.equal(v.remaining, 8000)
  assert.equal(v.status, 'neuhrazeno')
})

// ------------------------------------------------------------- přeplatek ---

test('přeplatek se hlásí a nepočítá se jako záporný dluh', () => {
  const e = vydaj('e1', { actual: 5000, payments: [platba('a', 6000)] })
  const v = readExpense(e)
  assert.equal(v.remaining, 0)
  assert.equal(v.overpaid, 1000)
  assert.equal(v.status, 'preplatek')
})

test('do součtu se přeplatek nepromítne jako záporný zbytek', () => {
  const t = totals([
    vydaj('a', { actual: 5000, payments: [platba('p', 6000)] }),
    vydaj('b', { actual: 3000 }),
  ])
  assert.equal(t.remaining, 3000)
  assert.equal(t.overpaid, 1000)
})

// ---------------------------------------------------------- neznámá cena ---

test('položka s neznámou cenou se do součtů nezapočítá', () => {
  const t = totals([
    vydaj('a', { actual: 10000 }),
    vydaj('b', { priceUnknown: true }),
  ])
  assert.equal(t.cost, 10000)
  assert.equal(t.unknownCount, 1)
  assert.equal(t.count, 2)
})

test('u neznámé ceny se zaplacené peníze nepovažují za přeplatek', () => {
  const v = readExpense(vydaj('a', { priceUnknown: true, payments: [platba('p', 2000)] }))
  assert.equal(v.status, 'neznama')
  assert.equal(v.paid, 2000)
  assert.equal(v.overpaid, 0)
  assert.equal(v.counted, false)
})

test('skutečná cena přebíjí plánovanou', () => {
  const v = readExpense(vydaj('a', { planned: 20000, actual: 23500 }))
  assert.equal(v.cost, 23500)
})

test('plánovaná se sečte jen tam, kde skutečná ještě není', () => {
  const t = totals([
    vydaj('a', { planned: 20000, actual: 23500 }),
    vydaj('b', { planned: 8000 }),
  ])
  assert.equal(t.planned, 8000)
  assert.equal(t.cost, 31500)
})

// ------------------------------------------------------------- pojišťovna ---

test('zbytek se počítá z vlastního nákladu, ne z celkové ceny', () => {
  const e = vydaj('a', { actual: 20000, insurance: 5000, payments: [platba('p', 15000)] })
  const v = readExpense(e)
  assert.equal(v.cost, 20000)
  assert.equal(v.ownCost, 15000)
  assert.equal(v.remaining, 0)
  assert.equal(v.status, 'uhrazeno')
})

test('podíl pojišťovny nemůže přesáhnout cenu', () => {
  const v = readExpense(vydaj('a', { actual: 4000, insurance: 9000 }))
  assert.equal(v.ownCost, 0)
  assert.equal(v.status, 'uhrazeno')
})

// -------------------------------------------------------------- skupiny ---

const CYKLY = [
  { id: 'c1', title: '1. cyklus' },
  { id: 'c2', title: '2. cyklus' },
]

test('výdaje se sečtou po cyklech a mimo cyklus zvlášť', () => {
  const items = [
    vydaj('a', { cycleId: 'c1', actual: 45200, payments: [platba('p', 45200)] }),
    vydaj('b', { cycleId: 'c2', actual: 58500, payments: [platba('p', 42000)] }),
    vydaj('c', { cycleId: null, actual: 4800 }),
  ]
  const g = byCycle(items, CYKLY)
  assert.deepEqual(g.map((x) => x.label), ['1. cyklus', '2. cyklus', 'Mimo cyklus'])
  assert.equal(g[0].totals.remaining, 0)
  assert.equal(g[1].totals.remaining, 16500)
  assert.equal(g[2].totals.cost, 4800)
})

test('výdaj u smazaného cyklu spadne mimo cyklus, ne pod stůl', () => {
  const g = byCycle([vydaj('a', { cycleId: 'zmizel', actual: 1000 })], CYKLY)
  assert.equal(g.length, 1)
  assert.equal(g[0].label, 'Mimo cyklus')
})

test('výdaje se dají přiřadit konkrétnímu transferu', () => {
  const items = [
    vydaj('a', { cycleId: 'c2', transferId: 't1', actual: 6000 }),
    vydaj('b', { cycleId: 'c2', transferId: 't2', actual: 7500 }),
    vydaj('c', { cycleId: 'c2', actual: 20000 }),
  ]
  const g = byTransfer(items, [
    { id: 't1', title: 'ET #1' },
    { id: 't2', title: 'KET #1' },
  ])
  assert.deepEqual(g.map((x) => x.label), ['ET #1', 'KET #1'])
  assert.equal(g[1].totals.cost, 7500)
  // Náklad bez transferu patří cyklu jako celku a v součtu za cyklus je.
  assert.equal(totals(items).cost, 33500)
})

test('kategorie se řadí od nejdražší', () => {
  const g = byCategory([
    vydaj('a', { category: 'leky', actual: 8500 }),
    vydaj('b', { category: 'genetika', actual: 18000 }),
    vydaj('c', { category: 'leky', actual: 2000 }),
  ])
  assert.equal(g[0].label, 'Genetika a PGT')
  assert.equal(g[1].totals.cost, 10500)
})

test('vlastní kategorie se zobrazí, jak ji uživatelka napsala', () => {
  assert.equal(categoryLabel('genetika'), 'Genetika a PGT')
  assert.equal(categoryLabel('Parkování u kliniky'), 'Parkování u kliniky')
})

// -------------------------------------------------------------- historie ---

test('finanční historie jde od nejnovější platby', () => {
  const h = paymentHistory([
    vydaj('a', { title: 'Léky', payments: [platba('p1', 2500, '2026-08-05')] }),
    vydaj('b', { title: 'PGT-A', payments: [platba('p2', 5000, '2026-08-12')] }),
  ])
  assert.deepEqual(h.map((r) => r.payment.onDate), ['2026-08-12', '2026-08-05'])
  assert.equal(h[0].expenseTitle, 'PGT-A')
})

test('filtr podle cyklu, kategorie a stavu', () => {
  const items = [
    vydaj('a', { cycleId: 'c1', category: 'leky', actual: 1000 }),
    vydaj('b', { cycleId: 'c2', category: 'leky', actual: 1000, payments: [platba('p', 1000)] }),
    vydaj('c', { cycleId: 'c2', category: 'klinika', actual: 1000 }),
  ]
  assert.equal(filterExpenses(items, { cycleId: 'c2' }).length, 2)
  assert.equal(filterExpenses(items, { category: 'leky' }).length, 2)
  assert.equal(filterExpenses(items, { status: 'uhrazeno' }).length, 1)
  assert.equal(filterExpenses(items, {}).length, 3)
})

test('filtr podle období bere datum výdaje i datum plateb', () => {
  const items = [
    vydaj('a', { onDate: '2026-07-01', actual: 100 }),
    vydaj('b', { payments: [platba('p', 100, '2026-08-15')] }),
  ]
  assert.deepEqual(filterExpenses(items, { from: '2026-08-01' }).map((e) => e.id), ['b'])
})

// ------------------------------------------------------------ statistiky ---

test('statistiky počítají jen z toho, co je zapsané', () => {
  const s = financeStats(
    [vydaj('a', { actual: 40000 }), vydaj('b', { actual: 60000 })],
    { cycles: 2, transfers: 3, kets: 2 },
  )
  assert.equal(s.totals.cost, 100000)
  assert.equal(s.avgPerCycle, 50000)
  assert.equal(s.kets, 2)
})

test('bez cyklů se průměr nepočítá, místo nuly vrací null', () => {
  assert.equal(financeStats([], { cycles: 0, transfers: 0, kets: 0 }).avgPerCycle, null)
})

test('prázdný rozpočet vrátí samé nuly a nespadne', () => {
  const t = totals([])
  assert.equal(t.cost, 0)
  assert.equal(t.paid, 0)
  assert.equal(t.remaining, 0)
  assert.equal(t.count, 0)
  assert.deepEqual(byCategory([]), [])
  assert.deepEqual(paymentHistory([]), [])
})

test('záporná platba se do součtu nepočítá', () => {
  const v = readExpense(vydaj('a', { actual: 1000, payments: [platba('p', -500)] }))
  assert.equal(v.paid, 0)
})
