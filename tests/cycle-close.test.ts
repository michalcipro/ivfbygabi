import test from 'node:test'
import assert from 'node:assert/strict'
import { deriveOutcome, mayContinue, reviewClose } from '../src/lib/domain/cycle-close'
import { resolveContext } from '../src/lib/domain/context'
import { emptyCycle, emptyTransfer, hasOwnRetrieval, type CycleRow } from '../src/lib/domain/cycle'
import { emptyEmbryo, isAvailable, type Embryo, type EmbryoFate } from '../src/lib/domain/embryo'

const TODAY = '2026-08-10'

function cyc(patch: Partial<CycleRow> = {}): CycleRow {
  return { ...emptyCycle('c1', 1, '2026-06-01'), cd1On: '2026-06-01', ...patch }
}

function tr(id: string, patch: Record<string, unknown> = {}) {
  return { ...emptyTransfer(id), ...patch }
}

function emb(id: string, fate: EmbryoFate, patch: Partial<Embryo> = {}): Embryo {
  return { ...emptyEmbryo(id, 'c1', 1), fate, ...patch }
}

const check = (c: CycleRow, e: Embryo[], key: string) =>
  reviewClose(c, e, TODAY).checks.find((k) => k.key === key)

// ------------------------------------------------ cyklus se nezavírá sám ---

test('cyklus se zbývajícím embryem může pokračovat', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-07-01', outcome: 'negativni' })] })
  assert.ok(mayContinue(c, [emb('e1', 'kryo')]))
  assert.ok(reviewClose(c, [emb('e1', 'kryo')], TODAY).warning?.includes('kryotransfer'))
})

test('embryo s konečným stavem se za dostupné nepočítá', () => {
  assert.ok(!isAvailable(emb('e1', 'kryo', { finalState: true })))
  assert.ok(!mayContinue(cyc(), [emb('e1', 'kryo', { finalState: true })]))
})

test('bez zbývajících embryí nic proti uzavření nestojí', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-07-01', outcome: 'negativni' })] })
  assert.equal(reviewClose(c, [emb('e1', 'transfer', { finalState: true })], TODAY).warning, null)
})

test('transfer čekající na výsledek se před uzavřením připomene', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-08-01', outcome: 'ceka' })] })
  const r = reviewClose(c, [], TODAY)
  assert.ok(r.warning?.includes('výsledek'))
  assert.equal(r.checks.find((k) => k.key === 'vysledky')?.done, false)
})

// ----------------------------------------------------- TEST 7, 8, 9 ze zadání ---

test('TEST 7: cyklus bez embryí jde dokončit, když je zapsané proč', () => {
  const c = cyc({ eggs: 6, fertilized: 3, noEmbryoReason: 'zastavil-vyvoj' })
  assert.equal(check(c, [], 'embrya')?.done, true)
  assert.equal(deriveOutcome(c, []), 'bez_embrya')
})

test('TEST 8: cyklus bez získaných vajíček jde dokončit', () => {
  const c = cyc({ noEmbryoReason: 'zadna-vajicka' })
  assert.equal(check(c, [], 'vajicka')?.done, true)
  assert.equal(check(c, [], 'oplodneni')?.done, true)
  assert.equal(deriveOutcome(c, []), 'bez_embrya')
})

test('TEST 9: neproběhlé oplodnění jde zapsat a cyklus dokončit', () => {
  const c = cyc({ eggs: 8, mature: 6, noEmbryoReason: 'neoplodnilo' })
  assert.equal(check(c, [], 'transfery')?.done, true)
  assert.equal(deriveOutcome(c, []), 'bez_embrya')
})

test('prázdný seznam embryí sám o sobě neznamená, že nic nevzniklo', () => {
  const c = cyc({ eggs: 8 })
  assert.equal(check(c, [], 'embrya')?.done, false)
  assert.equal(deriveOutcome(c, []), null)
})

// --------------------------------------------- TEST 10, 11, 12: dárcovství ---

test('TEST 10: u darovaných vajíček se na vlastní odběr neptáme', () => {
  const c = cyc({ eggSource: 'darovane', spermSource: 'vlastni' })
  assert.equal(hasOwnRetrieval(c), false)
  assert.equal(check(c, [], 'vajicka')?.done, true)
  assert.equal(check(c, [], 'oplodneni'), undefined)
})

test('TEST 11: darované spermie se zapíšou jako zdroj', () => {
  const c = cyc({ eggSource: 'vlastni', spermSource: 'darovane' })
  assert.ok(hasOwnRetrieval(c))
  assert.equal(check(c, [], 'spermie')?.done, true)
  assert.ok(check(c, [], 'spermie')?.detail.includes('darované'))
})

test('TEST 12: darované embryo nepotřebuje vlastní odběr ani spermie', () => {
  const c = cyc({ kind: 'darovane_embryo', transfers: [tr('t1', { date: '2026-08-06', kind: 'kryo' })] })
  assert.equal(hasOwnRetrieval(c), false)
  assert.equal(check(c, [], 'spermie')?.done, true)
  const ctx = resolveContext({ cycles: [c], embryos: [], today: TODAY })
  assert.equal(ctx.transfer?.id, 't1')
  assert.equal(ctx.daysPastTransfer, 4)
})

// ------------------------------------------------------- odvození výsledku ---

test('výsledek se odvodí z posledního rozhodnutého transferu', () => {
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-06-20', outcome: 'negativni' }),
      tr('t2', { date: '2026-07-20', outcome: 'pozitivni' }),
    ],
  })
  assert.equal(deriveOutcome(c, []), 'tehotenstvi')
})

test('čekající transfer výsledek neurčuje', () => {
  const c = cyc({ transfers: [tr('t1', { date: '2026-08-06', outcome: 'ceka' })] })
  assert.equal(deriveOutcome(c, []), null)
})

test('cyklus se zamraženou zásobou a bez transferu je zamrazený', () => {
  assert.equal(deriveOutcome(cyc({ eggs: 10 }), [emb('e1', 'kryo')]), 'zamrazeno')
})

test('cyklus, kde se všechny transfery zrušily, je zrušený', () => {
  const c = cyc({ transfers: [tr('t1', { cancelled: true, cancelReason: 'sliznice' })] })
  assert.equal(deriveOutcome(c, []), 'zruseno')
})
