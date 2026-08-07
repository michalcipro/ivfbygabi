import test from 'node:test'
import assert from 'node:assert/strict'
import {
  ARRANGEMENT_LABEL,
  emptyWorkPlanEntry,
  isSettled,
  openTasks,
  planProgress,
  type WorkArrangement,
  type WorkPlanEntry,
} from '../src/lib/domain/work-plan'

const TODAY = '2026-08-10'

function entry(id: string, onDate: string, patch: Partial<WorkPlanEntry> = {}): WorkPlanEntry {
  return { ...emptyWorkPlanEntry(id, onDate), title: 'Kontrola', ...patch }
}

const texts = (entries: WorkPlanEntry[], today = TODAY) => openTasks(entries, today).map((t) => t.text)

// ------------------------------------------------------------- výchozí stav ---

test('prázdný plán nevrací žádné úkoly ani postup', () => {
  assert.deepEqual(openTasks([], TODAY), [])
  assert.deepEqual(planProgress([]), { done: 0, total: 0 })
})

test('nový zápis je nezapsaný a nic navíc nevyžaduje', () => {
  const e = emptyWorkPlanEntry('w1', '2026-08-12')
  assert.equal(e.arrangement, 'nezapsano')
  assert.equal(e.needsCompanion, false)
  assert.equal(e.needsTransport, false)
  assert.equal(e.done, false)
  assert.equal(isSettled(e), false)
})

test('každá varianta řešení má český popisek', () => {
  const vsechny: WorkArrangement[] = [
    'nezapsano',
    'volno',
    'dovolena',
    'nemocenska',
    'home-office',
    'smena',
    'nepotrebuji',
  ]
  for (const a of vsechny) assert.ok(ARRANGEMENT_LABEL[a].length > 0)
})

// ------------------------------------------------------------------- volno ---

test('nevyřešené volno vytvoří konkrétní úkol s datem bez roku', () => {
  const t = openTasks([entry('w1', '2026-08-12')], TODAY)
  assert.equal(t.length, 1)
  assert.equal(t[0].text, 'Zařídit volno na kontrolu 12. 8.')
  assert.equal(t[0].byDate, '2026-08-12')
  assert.equal(t[0].key, 'w1:volno')
})

test('zapsané řešení už úkol na volno nedělá', () => {
  for (const a of ['volno', 'dovolena', 'nemocenska', 'home-office', 'smena'] as WorkArrangement[]) {
    assert.deepEqual(openTasks([entry('w1', '2026-08-12', { arrangement: a })], TODAY), [])
  }
})

test('nepotřebuji nevytvoří žádný úkol', () => {
  const e = entry('w1', '2026-08-12', { arrangement: 'nepotrebuji' })
  assert.deepEqual(openTasks([e], TODAY), [])
  assert.deepEqual(planProgress([e]), { done: 1, total: 1 })
})

// --------------------------------------------------------- doprovod a odvoz ---

test('doprovod a odvoz jsou samostatné úkoly vedle volna', () => {
  const e = entry('w1', '2026-08-12', {
    title: 'Odběr',
    needsCompanion: true,
    needsTransport: true,
  })
  const t = openTasks([e], TODAY)
  assert.equal(t.length, 3)
  assert.deepEqual(
    t.map((x) => x.text),
    ['Zařídit volno na odběr 12. 8.', 'Domluvit doprovod na odběr', 'Zajistit odvoz z odběru'],
  )
  assert.deepEqual(new Set(t.map((x) => x.key)).size, 3)
})

test('doprovod a odvoz se hlásí i u vyřešené práce', () => {
  const e = entry('w1', '2026-08-12', {
    title: 'Odběr',
    arrangement: 'dovolena',
    needsTransport: true,
  })
  assert.deepEqual(texts([e]), ['Zajistit odvoz z odběru'])
})

test('název termínu se skloňuje, zkratky zůstávají', () => {
  const t = (title: string, patch: Partial<WorkPlanEntry> = {}) =>
    texts([entry('w1', '2026-08-12', { title, ...patch })])
  assert.deepEqual(t('Odběr hCG'), ['Zařídit volno na odběr hCG 12. 8.'])
  assert.deepEqual(t('Punkce', { arrangement: 'volno', needsTransport: true }), [
    'Zajistit odvoz z punkce',
  ])
  assert.deepEqual(t('Punkce', { arrangement: 'volno', needsCompanion: true }), [
    'Domluvit doprovod na punkci',
  ])
  assert.deepEqual(t('Transfer', { arrangement: 'volno', needsTransport: true }), [
    'Zajistit odvoz z transferu',
  ])
  assert.deepEqual(t('Kontrola', { arrangement: 'volno', needsTransport: true }), [
    'Zajistit odvoz z kontroly',
  ])
  assert.deepEqual(t('', {}), ['Zařídit volno na termín 12. 8.'])
})

// ------------------------------------------------------------ čas a pořadí ---

test('minulé termíny se nevracejí, dnešek ano', () => {
  const vcera = entry('w1', '2026-08-09')
  const dnes = entry('w2', TODAY)
  assert.deepEqual(
    openTasks([vcera, dnes], TODAY).map((t) => t.key),
    ['w2:volno'],
  )
})

test('úkoly se řadí od nejbližšího termínu', () => {
  const plan = [
    entry('w1', '2026-09-01'),
    entry('w2', '2026-08-11'),
    entry('w3', '2026-08-20'),
  ]
  assert.deepEqual(
    openTasks(plan, TODAY).map((t) => t.byDate),
    ['2026-08-11', '2026-08-20', '2026-09-01'],
  )
})

test('urgentní je termín do tří dnů včetně, čtvrtý den už ne', () => {
  const plan = [
    entry('w0', TODAY),
    entry('w3', '2026-08-13'),
    entry('w4', '2026-08-14'),
  ]
  assert.deepEqual(
    openTasks(plan, TODAY).map((t) => t.urgent),
    [true, true, false],
  )
})

test('odškrtnutý úkol v seznamu zůstává označený jako hotový', () => {
  const t = openTasks([entry('w1', '2026-08-12', { done: true })], TODAY)
  assert.equal(t.length, 1)
  assert.equal(t[0].done, true)
})

// -------------------------------------------------------------- postup plánu ---

test('postup plánu počítá vyřešené termíny včetně minulých', () => {
  const plan = [
    entry('w1', '2026-08-01', { arrangement: 'dovolena' }),
    entry('w2', '2026-08-12', { arrangement: 'volno', needsTransport: true }),
    entry('w3', '2026-08-20'),
    entry('w4', '2026-08-25', { arrangement: 'smena', needsCompanion: true, done: true }),
  ]
  assert.deepEqual(planProgress(plan), { done: 2, total: 4 })
  assert.equal(isSettled(plan[1]), false)
  assert.equal(isSettled(plan[3]), true)
})
