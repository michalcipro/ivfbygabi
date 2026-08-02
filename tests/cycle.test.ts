import test from 'node:test'
import assert from 'node:assert/strict'
import {
  betaDate,
  blastocystsOf,
  bloodTests,
  currentTransfer,
  cycleMilestones,
  embryosTransferred,
  emptyCycle,
  emptyHcgTest,
  emptyTransfer,
  estimatedBeta,
  hcgDay,
  lastTransferDate,
  nextTransfer,
  nextUp,
  readCycle,
  sortedTransfers,
  type CycleRow,
  type CycleTransfer,
  type HcgTest,
} from '../src/lib/domain/cycle'

const TODAY = '2026-08-01'

function cyc(patch: Partial<CycleRow> = {}): CycleRow {
  return { ...emptyCycle('c1', 1, '2026-06-01'), cd1On: '2026-06-01', ...patch }
}

function tr(id: string, patch: Partial<CycleTransfer> = {}): CycleTransfer {
  return { ...emptyTransfer(id), ...patch }
}

function hcg(id: string, patch: Partial<HcgTest> = {}): HcgTest {
  return { ...emptyHcgTest(id), ...patch }
}

// ------------------------------------------------------------- transfery ---

test('nedatovaný transfer se řadí nakonec. Ještě se nestal', () => {
  const c = cyc({
    transfers: [tr('b'), tr('a', { date: '2026-06-21' }), tr('c', { date: '2026-05-01' })],
  })
  assert.deepEqual(
    sortedTransfers(c).map((t) => t.id),
    ['c', 'a', 'b'],
  )
})

test('aktuální transfer je poslední proběhlý, ne poslední zapsaný', () => {
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-06-21' }),
      tr('t2', { date: '2026-07-28' }),
      tr('t3', { date: '2026-09-10' }),
    ],
  })
  assert.equal(currentTransfer(c, TODAY)?.id, 't2')
  assert.equal(nextTransfer(c, TODAY)?.id, 't3')
  assert.equal(lastTransferDate(c), '2026-09-10')
})

test('dokud žádný transfer neproběhl, platí ten nejbližší plánovaný', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-09-10' }), tr('t2', { date: '2026-08-20' })] })
  assert.equal(currentTransfer(c, TODAY)?.id, 't2')
})

test('přenesená embrya se sčítají přes všechny transfery', () => {
  const c = cyc({
    transfers: [tr('t1', { embryos: 1 }), tr('t2', { embryos: 2 }), tr('t3', { embryos: null })],
  })
  assert.equal(embryosTransferred(c), 3)
  assert.equal(embryosTransferred(cyc()), null)
})

// ------------------------------------------------------------- laboratoř ---

test('blastocysty jsou součet pátého a šestého dne', () => {
  assert.equal(blastocystsOf(cyc({ day5: 2, day6: 1 })), 3)
  assert.equal(blastocystsOf(cyc({ day5: 2 })), 2)
  assert.equal(blastocystsOf(cyc({ day3: 6, day4: 4 })), null, 'třetí a čtvrtý den blastocysty nejsou')
  assert.equal(blastocystsOf(cyc({ day5: 0 })), 0, 'nula je odpověď, ne chybějící údaj')
})

// ----------------------------------------------------------------- testy ---

test('beta je jen z krve, domácí testy do ní nepatří', () => {
  const c = cyc({
    hcgTests: [
      hcg('h1', { kind: 'domaci', date: '2026-07-30' }),
      hcg('h2', { kind: 'krev', date: '2026-08-03' }),
    ],
  })
  assert.deepEqual(
    bloodTests(c).map((t) => t.id),
    ['h2'],
  )
})

test('beta předchozího transferu se po dalším transferu už nenabízí', () => {
  const c = cyc({
    transfers: [tr('t1', { date: '2026-06-21' }), tr('t2', { date: '2026-07-28' })],
    hcgTests: [
      hcg('h1', { kind: 'krev', date: '2026-07-01', transferId: 't1', value: 2 }),
      hcg('h2', { kind: 'krev', date: '2026-08-08', transferId: 't2' }),
    ],
  })
  assert.equal(betaDate(c, TODAY), '2026-08-08')
})

test('bez zapsané bety k současnému transferu vrací betaDate null', () => {
  const c = cyc({
    transfers: [tr('t1', { date: '2026-06-21' }), tr('t2', { date: '2026-07-28' })],
    hcgTests: [hcg('h1', { kind: 'krev', date: '2026-07-01', transferId: 't1' })],
  })
  assert.equal(betaDate(c, TODAY), null)
})

test('nespárovaný odběr se přiřadí podle data', () => {
  const c = cyc({
    transfers: [tr('t1', { date: '2026-07-28' })],
    hcgTests: [hcg('h1', { kind: 'krev', date: '2026-08-08' })],
  })
  assert.equal(betaDate(c, TODAY), '2026-08-08')
})

test('kolikátý den po transferu se testovalo', () => {
  const c = cyc({
    transfers: [tr('t1', { date: '2026-07-28' })],
    hcgTests: [
      hcg('h1', { date: '2026-08-05', transferId: 't1' }),
      hcg('h2', { date: '2026-08-07' }),
      hcg('h3', { date: '2026-07-01', transferId: 't1' }),
      hcg('h4', { date: null }),
    ],
  })
  assert.equal(hcgDay(c, c.hcgTests[0]), 8)
  assert.equal(hcgDay(c, c.hcgTests[1]), 10, 'bez vazby se počítá od aktuálního transferu')
  assert.equal(hcgDay(c, c.hcgTests[2]), null, 'test před transferem den nemá')
  assert.equal(hcgDay(c, c.hcgTests[3]), null)
})

// ------------------------------------------------------------------ stav ---

test('po druhém transferu hlavička říká, o který jde', () => {
  const c = cyc({
    transfers: [tr('t1', { date: '2026-06-21' }), tr('t2', { date: '2026-07-28' })],
    hcgTests: [hcg('h2', { kind: 'krev', date: '2026-08-08', transferId: 't2' })],
  })
  const st = readCycle(c, TODAY)
  assert.equal(st.stage, 'cekani')
  assert.equal(st.headline, '2. transfer +4')
  assert.equal(st.detail, 'Do odběru hCG zbývá 7 dní.')
  assert.equal(st.daysPastTransfer, 4)
})

test('u jediného transferu zůstává hlavička bez pořadí', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-07-28' })] })
  assert.equal(readCycle(c, TODAY).headline, 'Transfer +4')
})

test('během kultivace se hlásí nejbližší plánovaný transfer', () => {
  const c = cyc({
    retrievalOn: '2026-07-29',
    transfers: [tr('t1', { date: '2026-08-03' })],
  })
  const st = readCycle(c, TODAY)
  assert.equal(st.stage, 'kultivace')
  assert.equal(st.detail, 'Transfer 2 dny od dneška.')
})

// --------------------------------------------------------------- milníky ---

test('každý transfer je vlastní milník s vlastním id', () => {
  const c = cyc({
    stimStartOn: '2026-06-04',
    retrievalOn: '2026-06-16',
    transfers: [
      tr('t1', { date: '2026-06-21', embryos: 1, embryoDay: 5, grade: '4AA' }),
      tr('t2', { date: '2026-07-28', kind: 'kryo', embryos: 2 }),
    ],
    hcgTests: [
      hcg('h1', { kind: 'domaci', date: '2026-07-30' }),
      hcg('h2', { kind: 'krev', date: '2026-08-08', value: 312 }),
    ],
  })
  const m = cycleMilestones(c)
  assert.equal(new Set(m.map((x) => x.id)).size, m.length, 'id se nesmí opakovat')

  const transfers = m.filter((x) => x.key === 'transfer')
  assert.deepEqual(
    transfers.map((x) => x.label),
    ['1. transfer', '2. transfer. Kryo'],
  )
  assert.equal(transfers[0].detail, '1 embryo · 5. den kultivace · 4AA')

  const betas = m.filter((x) => x.key === 'beta')
  assert.equal(betas.length, 1, 'domácí test na osu cyklu nepatří')
  assert.equal(betas[0].detail, '312 IU/l')
})

test('nejbližší milník počítá i s druhým transferem', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-06-21' }), tr('t2', { date: '2026-08-20' })] })
  const next = nextUp(c, TODAY)
  assert.equal(next[0].label, '2. transfer')
  assert.equal(next[0].inDays, 19)
})

// ------------------------------------------------------------ odhad bety ---

test('odhad bety vychází z aktuálního transferu a jeho dne kultivace', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-07-28', embryoDay: 5 })] })
  assert.equal(estimatedBeta(c, TODAY), '2026-08-07')

  const treti = cyc({ transfers: [tr('t1', { date: '2026-07-28', embryoDay: 3 })] })
  assert.equal(estimatedBeta(treti, TODAY), '2026-08-09')

  const zapsana = cyc({
    transfers: [tr('t1', { date: '2026-07-28', embryoDay: 5 })],
    hcgTests: [hcg('h1', { kind: 'krev', date: '2026-08-10', transferId: 't1' })],
  })
  assert.equal(estimatedBeta(zapsana, TODAY), '2026-08-10', 'zapsaná beta vyhrává nad odhadem')

  assert.equal(estimatedBeta(cyc(), TODAY), null)
})
