import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveContext } from '../src/lib/domain/context'
import { emptyCycle, emptyTransfer, type CycleRow } from '../src/lib/domain/cycle'
import { emptyEmbryo, type Embryo } from '../src/lib/domain/embryo'

/**
 * Scénáře ze zadání. Každý z nich odpovídá na jedinou otázku: kde je žena
 * na své cestě a z čeho se to má počítat.
 */

const TODAY = '2026-08-10'

function cyc(id: string, n: number, start: string, patch: Partial<CycleRow> = {}): CycleRow {
  return { ...emptyCycle(id, n, start), cd1On: start, ...patch }
}
function tr(id: string, patch: Record<string, unknown> = {}) {
  return { ...emptyTransfer(id), ...patch }
}
function emb(id: string, cycleId: string, n: number, day: number): Embryo {
  return {
    ...emptyEmbryo(id, cycleId, n),
    days: [{ day, stage: 'blastocysta', grade: '', note: '' }],
  }
}
const ctx = (cycles: CycleRow[], embryos: Embryo[] = []) =>
  resolveContext({ cycles, embryos, today: TODAY })

test('TEST 1: po ET v prvním cyklu a KET ve druhém je aktuální druhý', () => {
  const c1 = cyc('c1', 1, '2026-02-01', {
    outcome: 'negativni',
    endedOn: '2026-04-01',
    transfers: [tr('t1', { date: '2026-03-01', outcome: 'negativni' })],
  })
  const c2 = cyc('c2', 2, '2026-07-01', {
    transfers: [tr('t2', { kind: 'kryo', date: '2026-08-04' })],
  })
  const s = ctx([c1, c2])
  assert.equal(s.cycle?.id, 'c2')
  assert.equal(s.transfer?.id, 't2')
})

test('TEST 2: druhý KET v témž cyklu přebije první', () => {
  const c = cyc('c1', 1, '2026-05-01', {
    transfers: [
      tr('t1', { kind: 'kryo', date: '2026-06-01', outcome: 'negativni' }),
      tr('t2', { kind: 'kryo', date: '2026-08-06' }),
    ],
  })
  const s = ctx([c])
  assert.equal(s.transfer?.id, 't2')
  assert.equal(s.transferLabel, 'KET #2')
  assert.equal(s.daysPastTransfer, 4)
})

test('TEST 3: nové embryo bez transferu aktuální cestu nezmění', () => {
  const c = cyc('c1', 1, '2026-05-01', {
    transfers: [tr('t1', { kind: 'kryo', date: '2026-08-06', embryoIds: ['eA'], embryoDay: 5 })],
  })
  const pred = ctx([c], [emb('eA', 'c1', 1, 5)])
  const po = ctx([c], [emb('eA', 'c1', 1, 5), emb('eNove', 'c1', 2, 6)])
  assert.equal(po.transfer?.id, pred.transfer?.id)
  assert.deepEqual(po.embryos.map((e) => e.id), ['eA'])
  assert.equal(po.embryoDay, 5)
})

test('TEST 4: nový KET s novým embryem se stane aktuální cestou', () => {
  const embrya = [emb('eA', 'c1', 1, 5), emb('eB', 'c1', 2, 6)]
  const c = cyc('c1', 1, '2026-05-01', {
    transfers: [
      tr('t1', { kind: 'kryo', date: '2026-06-01', embryoIds: ['eA'], embryoDay: 5, outcome: 'negativni' }),
      tr('t2', { kind: 'kryo', date: '2026-08-06', embryoIds: ['eB'], embryoDay: 6 }),
    ],
  })
  const s = ctx([c], embrya)
  assert.equal(s.transfer?.id, 't2')
  assert.deepEqual(s.embryos.map((e) => e.id), ['eB'])
  assert.equal(s.embryoDay, 6)
})

test('TEST 5: embryo A na KET #1, embryo B na KET #2, aktuální je KET #2', () => {
  const c = cyc('c1', 1, '2026-05-01', {
    transfers: [
      tr('t1', { kind: 'kryo', date: '2026-06-10', embryoIds: ['eA'], outcome: 'negativni' }),
      tr('t2', { kind: 'kryo', date: '2026-08-01', embryoIds: ['eB'] }),
    ],
  })
  const s = ctx([c], [emb('eA', 'c1', 1, 5), emb('eB', 'c1', 2, 5)])
  assert.equal(s.transferLabel, 'KET #2')
  assert.deepEqual(s.embryos.map((e) => e.id), ['eB'])
})

test('TEST 6: otevření staršího cyklu aktuální cestu nemění', () => {
  // Kontext se počítá z dat, ne z toho, co má uživatelka zrovna otevřené.
  // Prohlížení historie je čtení, ne přepnutí.
  const c1 = cyc('c1', 1, '2026-02-01', { outcome: 'negativni', endedOn: '2026-04-01' })
  const c2 = cyc('c2', 2, '2026-07-01')
  assert.equal(ctx([c1, c2]).cycle?.id, 'c2')
  assert.equal(ctx([c2, c1]).cycle?.id, 'c2')
})

test('TEST 14: zapsaný transfer rovnou dává den 0 a další den se posune sám', () => {
  const c = cyc('c1', 1, '2026-08-01', { transfers: [tr('t1', { date: TODAY })] })
  assert.equal(resolveContext({ cycles: [c], embryos: [], today: TODAY }).daysPastTransfer, 0)
  assert.equal(resolveContext({ cycles: [c], embryos: [], today: '2026-08-11' }).daysPastTransfer, 1)
})

test('TEST 15: ET a dva KETy v prvním cyklu, KET ve druhém, aktuální je druhý', () => {
  const c1 = cyc('c1', 1, '2026-01-05', {
    outcome: 'negativni',
    endedOn: '2026-05-01',
    transfers: [
      tr('t1', { date: '2026-01-25', outcome: 'negativni' }),
      tr('t2', { kind: 'kryo', date: '2026-03-01', outcome: 'negativni' }),
      tr('t3', { kind: 'kryo', date: '2026-04-10', outcome: 'negativni' }),
    ],
  })
  const c2 = cyc('c2', 2, '2026-07-01', {
    transfers: [tr('t4', { kind: 'kryo', date: '2026-08-05', embryoDay: 5 })],
  })
  const s = ctx([c1, c2])
  assert.equal(s.cycle?.id, 'c2')
  assert.equal(s.transfer?.id, 't4')
  assert.equal(s.transferLabel, 'KET')
  assert.equal(s.headline, '2. cyklus · KET · D5 embryo')
})
