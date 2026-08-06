import test from 'node:test'
import assert from 'node:assert/strict'
import { cycleEvents, resolveContext } from '../src/lib/domain/context'
import { defaultCycle, emptyCycle, emptyHcgTest, emptyTransfer, type CycleRow } from '../src/lib/domain/cycle'
import { emptyEmbryo, type Embryo } from '../src/lib/domain/embryo'

const TODAY = '2026-08-10'

function cyc(id: string, number: number, startedOn: string, patch: Partial<CycleRow> = {}): CycleRow {
  return { ...emptyCycle(id, number, startedOn), cd1On: startedOn, ...patch }
}

function tr(id: string, patch: Parameters<typeof Object.assign>[1] = {}) {
  return { ...emptyTransfer(id), ...patch }
}

function hcg(id: string, date: string, patch: Record<string, unknown> = {}) {
  return { ...emptyHcgTest(id, 'krev'), date, ...patch }
}

function emb(id: string, cycleId: string, number: number, day: number | null): Embryo {
  const e = emptyEmbryo(id, cycleId, number)
  return day === null ? e : { ...e, days: [{ day, stage: 'blastocysta', grade: '', note: '' }] }
}

// ---------------------------------------------------------------- 38.1 ---

test('výchozí cyklus je běžící, ne první založený', () => {
  const list = [
    cyc('c1', 1, '2026-01-05', { outcome: 'negativni', endedOn: '2026-02-20' }),
    cyc('c2', 2, '2026-04-01', { outcome: 'negativni', endedOn: '2026-05-10' }),
    cyc('c3', 3, '2026-07-01'),
  ]
  assert.equal(defaultCycle(list, TODAY)?.id, 'c3')
})

test('bez běžícího cyklu se bere poslední zaznamenaný, ne nejstarší', () => {
  const list = [
    cyc('c1', 1, '2026-01-05', { outcome: 'negativni', endedOn: '2026-02-20' }),
    cyc('c2', 2, '2026-04-01', { outcome: 'negativni', endedOn: '2026-05-10' }),
  ]
  assert.equal(defaultCycle(list, TODAY)?.id, 'c2')
})

test('při shodném datu zahájení rozhoduje pořadí zápisu', () => {
  const list = [cyc('c1', 1, '2026-07-01'), cyc('c2', 2, '2026-07-01')]
  assert.equal(defaultCycle(list, TODAY)?.id, 'c2')
})

test('na pořadí v poli nezáleží', () => {
  const list = [cyc('c3', 3, '2026-07-01'), cyc('c1', 1, '2026-01-05'), cyc('c2', 2, '2026-04-01')]
  assert.equal(defaultCycle(list, TODAY)?.id, 'c3')
})

// -------------------------------------------------------- 38.2 a 38.3 ---

test('aktuální je poslední proběhlý transfer a embryo z něj', () => {
  const embryos = [emb('eA', 'c2', 1, 5), emb('eB', 'c2', 2, 6)]
  const c = cyc('c2', 2, '2026-06-01', {
    transfers: [
      tr('t1', { kind: 'kryo', date: '2026-06-20', embryoIds: ['eA'], embryoDay: 5, outcome: 'negativni' }),
      tr('t2', { kind: 'kryo', date: '2026-08-06', embryoIds: ['eB'], embryoDay: 6 }),
    ],
  })
  const ctx = resolveContext({ cycles: [c], embryos, today: TODAY })
  assert.equal(ctx.transfer?.id, 't2')
  assert.equal(ctx.transferLabel, 'KET #2')
  assert.deepEqual(ctx.embryos.map((e) => e.id), ['eB'])
  assert.equal(ctx.embryoDay, 6)
  assert.equal(ctx.daysPastTransfer, 4)
})

test('zrušený transfer se za aktuální nepovažuje', () => {
  const c = cyc('c1', 1, '2026-06-01', {
    transfers: [
      tr('t1', { date: '2026-07-01', outcome: 'negativni' }),
      tr('t2', { date: '2026-08-01', cancelled: true, cancelReason: 'tenká sliznice' }),
    ],
  })
  const ctx = resolveContext({ cycles: [c], embryos: [], today: TODAY })
  assert.equal(ctx.transfer?.id, 't1')
})

// ---------------------------------------------------------------- 38.7 ---

test('nové embryo v kultivaci se za přenesené nepovažuje', () => {
  // Embryo, které nikdo k transferu nepřipsal, nesmí ovlivnit „po transferu“.
  const embryos = [emb('eA', 'c1', 1, 5), emb('eNove', 'c1', 2, 6)]
  const c = cyc('c1', 1, '2026-06-01', {
    transfers: [tr('t1', { date: '2026-08-06', embryoIds: ['eA'], embryoDay: 5 })],
  })
  const ctx = resolveContext({ cycles: [c], embryos, today: TODAY })
  assert.deepEqual(ctx.embryos.map((e) => e.id), ['eA'])
  assert.equal(ctx.embryoDay, 5)
})

// --------------------------------------------------------------- 38.14 ---

test('rozpor mezi dnem u transferu a u embrya se ohlásí, nedomýšlí', () => {
  const embryos = [emb('eA', 'c1', 1, 6)]
  const c = cyc('c1', 1, '2026-06-01', {
    transfers: [tr('t1', { date: '2026-08-06', embryoIds: ['eA'], embryoDay: 5 })],
  })
  const ctx = resolveContext({ cycles: [c], embryos, today: TODAY })
  assert.equal(ctx.conflicts.length, 1)
  assert.equal(ctx.conflicts[0].id, 'embryo-day')
})

test('rozpor mezi datem transferu v nastavení a v cyklu se ohlásí', () => {
  const c = cyc('c1', 1, '2026-06-01', { transfers: [tr('t1', { date: '2026-08-06' })] })
  const ctx = resolveContext({
    cycles: [c],
    embryos: [],
    today: TODAY,
    profileTransferOn: '2026-08-04',
  })
  assert.ok(ctx.conflicts.some((k) => k.id === 'transfer-date'))
})

test('shodná data žádný rozpor nehlásí', () => {
  const c = cyc('c1', 1, '2026-06-01', { transfers: [tr('t1', { date: '2026-08-06' })] })
  const ctx = resolveContext({
    cycles: [c],
    embryos: [],
    today: TODAY,
    profileTransferOn: '2026-08-06',
  })
  assert.deepEqual(ctx.conflicts, [])
})

// ------------------------------------------------------- finální příklad ---

test('finální příklad ze zadání: 10. 8. je IVF #2, KET #2, D6, 4. den, hCG za 6 dní', () => {
  const embryos = [
    emb('e1', 'c1', 1, 5),
    emb('e2', 'c2', 1, 5),
    emb('e3', 'c2', 2, 6),
  ]
  const c1 = cyc('c1', 1, '2026-01-02', {
    outcome: 'negativni',
    endedOn: '2026-02-15',
    transfers: [tr('t1', { date: '2026-01-20', embryoIds: ['e1'], embryoDay: 5, outcome: 'negativni' })],
    hcgTests: [hcg('h1', '2026-01-30', { transferId: 't1', value: 1 })],
  })
  const c2 = cyc('c2', 2, '2026-05-01', {
    transfers: [
      tr('t2', { kind: 'kryo', date: '2026-06-10', embryoIds: ['e2'], embryoDay: 5, outcome: 'negativni' }),
      tr('t3', { kind: 'kryo', date: '2026-08-06', embryoIds: ['e3'], embryoDay: 6 }),
    ],
    hcgTests: [
      hcg('h2', '2026-06-20', { transferId: 't2', value: 2 }),
      hcg('h3', '2026-08-16', { transferId: 't3' }),
    ],
  })

  const ctx = resolveContext({ cycles: [c1, c2], embryos, today: TODAY })

  assert.equal(ctx.cycle?.id, 'c2')
  assert.equal(ctx.cycleActive, true)
  assert.equal(ctx.transfer?.id, 't3')
  assert.equal(ctx.transferLabel, 'KET #2')
  assert.equal(ctx.embryoDay, 6)
  assert.equal(ctx.transferOn, '2026-08-06')
  assert.equal(ctx.daysPastTransfer, 4)
  assert.equal(ctx.hcgOn, '2026-08-16')
  assert.equal(ctx.daysToHcg, 6)
  assert.equal(ctx.hcgEstimated, false)
  assert.equal(ctx.headline, '2. cyklus · KET #2 · D6 embryo')
  // Lednová beta z prvního cyklu se do dneška nepromítne nijak.
  assert.equal(ctx.hcg, null)
})

// --------------------------------------------------------- proud událostí ---

test('události cyklu jdou v čase a končí tím posledním', () => {
  const embryos = [emb('eA', 'c1', 1, 5)]
  const c = cyc('c1', 1, '2026-06-01', {
    retrievalOn: '2026-06-12',
    eggs: 9,
    transfers: [tr('t1', { kind: 'kryo', date: '2026-08-06', embryoIds: ['eA'], embryoDay: 5 })],
    hcgTests: [hcg('h1', '2026-08-09', { transferId: 't1', value: 210 })],
  })
  const ev = cycleEvents(c, embryos, TODAY)
  assert.deepEqual(ev.map((e) => e.kind), ['odber', 'embryo', 'transfer', 'hcg'])
  assert.equal(ev[ev.length - 1].label, 'Odběr hCG')
})

test('budoucí události se do proudu nedostanou', () => {
  const c = cyc('c1', 1, '2026-06-01', {
    transfers: [tr('t1', { date: '2026-09-01' })],
  })
  assert.deepEqual(cycleEvents(c, [], TODAY), [])
})
