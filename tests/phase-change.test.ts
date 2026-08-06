import test from 'node:test'
import assert from 'node:assert/strict'
import { hasConsequences, planPhaseChange, type PlanInput, type StepKind } from '../src/lib/domain/phase-change'

function vstup(patch: Partial<PlanInput>): PlanInput {
  return {
    routeId: 'between',
    phase: 'waiting_next_attempt',
    today: '2026-05-06',
    openCycle: null,
    runningMeds: 0,
    anchors: { transferOn: false, retrievalOn: false, stimulationStartOn: false, betaTestOn: false },
    ...patch,
  }
}

const bezici = { id: 'c1', title: '1. IVF cyklus', hasTransferWaiting: false, embryosLeft: 0 }
const kinds = (steps: { kind: StepKind }[]) => steps.map((s) => s.kind)

test('IVF nevyšlo uzavře cyklus, ukončí léky a přestane počítat dny', () => {
  const plan = planPhaseChange(
    vstup({
      openCycle: bezici,
      runningMeds: 3,
      anchors: { transferOn: true, retrievalOn: true, stimulationStartOn: true, betaTestOn: false },
    }),
  )
  assert.deepEqual(kinds(plan.steps), ['close-cycle', 'stop-meds', 'clear-anchors'])
  assert.equal(plan.steps[0].outcome, 'negativni')
  assert.ok(plan.steps.every((s) => s.on))
  assert.ok(hasConsequences(plan))
})

test('čekající transfer se zapíše, aby v přehledu nezůstal viset', () => {
  const plan = planPhaseChange(
    vstup({ openCycle: { ...bezici, hasTransferWaiting: true, embryosLeft: 0 } }),
  )
  assert.equal(plan.steps[0].kind, 'mark-transfer')
  assert.equal(plan.steps[0].outcome, 'negativni')
})

test('pozitivní hCG nikdy nenabídne vysazení léků', () => {
  // Podpora luteální fáze pokračuje. Nabídnout ukončení by bylo nebezpečné.
  const plan = planPhaseChange(
    vstup({
      routeId: 'beta',
      phase: 'beta_positive',
      openCycle: { ...bezici, hasTransferWaiting: true, embryosLeft: 0 },
      runningMeds: 4,
      anchors: { transferOn: true, retrievalOn: true, stimulationStartOn: true, betaTestOn: true },
    }),
  )
  assert.ok(!kinds(plan.steps).includes('stop-meds'))
  assert.ok(!kinds(plan.steps).includes('close-cycle'))
  assert.ok(!kinds(plan.steps).includes('clear-anchors'))
  assert.equal(plan.steps[0].kind, 'mark-transfer')
  assert.equal(plan.steps[0].outcome, 'tehotenstvi')
})

test('ztráta si vyžádá datum, uzavření cyklu dostane svůj výsledek', () => {
  const plan = planPhaseChange(
    vstup({ routeId: 'loss', phase: 'loss_miscarriage', openCycle: bezici }),
  )
  assert.deepEqual(kinds(plan.steps), ['close-cycle', 'set-loss'])
  assert.equal(plan.steps[0].outcome, 'ztrata')
})

test('mimoděložní a biochemické mají vlastní výsledek cyklu', () => {
  for (const [routeId, outcome] of [
    ['biochemical', 'biochemicke'],
    ['ectopic', 'mimodelozni'],
  ] as const) {
    const plan = planPhaseChange(vstup({ routeId, openCycle: bezici }))
    assert.equal(plan.steps.find((s) => s.kind === 'close-cycle')?.outcome, outcome)
  }
})

test('fáze uprostřed léčby nezavírá cyklus ani nevysazuje léky', () => {
  const plan = planPhaseChange(
    vstup({
      routeId: 'stimulation',
      phase: 'stimulation',
      openCycle: bezici,
      runningMeds: 2,
      anchors: { transferOn: false, retrievalOn: false, stimulationStartOn: true, betaTestOn: false },
    }),
  )
  assert.deepEqual(kinds(plan.steps), [])
  assert.ok(!hasConsequences(plan))
})

test('bez otevřeného cyklu se léčebná fáze nabídne založit nový', () => {
  const plan = planPhaseChange(vstup({ routeId: 'stimulation', phase: 'stimulation' }))
  assert.deepEqual(kinds(plan.steps), ['new-cycle'])
})

test('nový cyklus se nabízí jen jednou, i když fáze sedí do dvou pravidel', () => {
  const plan = planPhaseChange(vstup({ routeId: 'next_cycle', phase: 'waiting_next_attempt' }))
  assert.equal(plan.steps.filter((s) => s.kind === 'new-cycle').length, 1)
})

test('plán vždycky říká, co zůstává', () => {
  const plan = planPhaseChange(vstup({ openCycle: bezici, runningMeds: 1 }))
  assert.ok(plan.keeps.length >= 3)
  assert.ok(plan.keeps.some((k) => k.toLowerCase().includes('deník')))
  assert.ok(plan.keeps.some((k) => k.toLowerCase().includes('protokolu')))
})

test('negativní hCG neuzavírá cyklus, dokud zbývají embrya', () => {
  // Pravidlo, kvůli kterému to vzniklo: z jednoho odběru bývá zásoba na
  // několik kryotransferů. Nabídnout se uzavření smí, předškrtnout ne.
  const plan = planPhaseChange(vstup({ openCycle: { ...bezici, embryosLeft: 2 } }))
  const krok = plan.steps.find((s) => s.kind === 'close-cycle')
  assert.ok(krok, 'uzavření se má nabídnout')
  assert.equal(krok?.on, false, 'ale nesmí být předškrtnuté')
  assert.ok(krok?.detail.includes('kryotransfer'))
})

test('bez zbývajících embryí se uzavření předškrtne', () => {
  const plan = planPhaseChange(vstup({ openCycle: bezici }))
  assert.equal(plan.steps.find((s) => s.kind === 'close-cycle')?.on, true)
})
