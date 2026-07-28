import test from 'node:test'
import assert from 'node:assert/strict'
import {
  correctedAgeDaysFor,
  estimatedDueDate,
  gestationDaysFor,
  inferPhase,
  resolveJourney,
} from '../src/lib/domain/journey'
import { emptyProfile, type Profile } from '../src/lib/domain/profile'
import { addDays, czDays, daysBetween, gestationLabel, humanAge, isValidIsoDate, pickDeterministic, seedFrom } from '../src/lib/domain/dates'

function profileWith(patch: Partial<Profile>): Profile {
  return { ...emptyProfile('u1', 'p1', '2026-01-01T00:00:00Z'), ...patch }
}

// ------------------------------------------------------------------ dates ---

test('daysBetween počítá kalendářní dny', () => {
  assert.equal(daysBetween('2026-03-01', '2026-03-08'), 7)
  assert.equal(daysBetween('2026-03-08', '2026-03-01'), -7)
  assert.equal(daysBetween('2026-03-01', '2026-03-01'), 0)
})

test('daysBetween přežije přechod přes rok i přestupný den', () => {
  assert.equal(daysBetween('2025-12-31', '2026-01-01'), 1)
  assert.equal(daysBetween('2028-02-28', '2028-03-01'), 2) // 2028 je přestupný
})

test('addDays vrací platná data', () => {
  assert.equal(addDays('2026-01-31', 1), '2026-02-01')
  assert.equal(addDays('2026-03-01', -1), '2026-02-28')
})

test('isValidIsoDate odmítne nesmysly', () => {
  assert.ok(isValidIsoDate('2026-02-28'))
  assert.ok(!isValidIsoDate('2026-02-30'))
  assert.ok(!isValidIsoDate('26-02-28'))
  assert.ok(!isValidIsoDate('nope'))
})

test('české skloňování dní', () => {
  assert.equal(czDays(1), '1 den')
  assert.equal(czDays(3), '3 dny')
  assert.equal(czDays(7), '7 dní')
})

test('gestationLabel používá klinický zápis', () => {
  assert.equal(gestationLabel(24 * 7 + 3), '24+3')
  assert.equal(gestationLabel(280), '40+0')
})

test('humanAge škáluje jednotku podle věku', () => {
  assert.equal(humanAge(5), '5 dní')
  assert.equal(humanAge(21), '3 týdny')
  assert.equal(humanAge(200), '6 měsíců')
  assert.ok(humanAge(800).includes('rok'))
})

test('deterministický výběr je stabilní pro stejný seed', () => {
  const items = ['a', 'b', 'c', 'd', 'e', 'f']
  const seed = seedFrom('2026-05-05', 'two_week_wait')
  assert.deepEqual(pickDeterministic(items, 3, seed), pickDeterministic(items, 3, seed))
})

// ------------------------------------------------------------ detekce fáze ---

test('bez dat končíme ve fázi přemýšlení', () => {
  assert.equal(inferPhase(profileWith({}), '2026-05-01'), 'thinking')
})

test('den transferu je fáze transfer, další dny čekání', () => {
  const p = profileWith({ transferOn: '2026-05-01' })
  assert.equal(inferPhase(p, '2026-05-01'), 'transfer')
  assert.equal(inferPhase(p, '2026-05-06'), 'two_week_wait')
  assert.equal(inferPhase(p, '2026-05-14'), 'two_week_wait')
})

test('po neúspěšném cyklu přecházíme do mezidobí', () => {
  const p = profileWith({ transferOn: '2026-05-01' })
  assert.equal(inferPhase(p, '2026-06-05'), 'waiting_next_attempt')
})

test('odběr, oplození a kultivace se rozliší podle dne', () => {
  const p = profileWith({ retrievalOn: '2026-04-10' })
  assert.equal(inferPhase(p, '2026-04-10'), 'retrieval')
  assert.equal(inferPhase(p, '2026-04-11'), 'fertilization')
  assert.equal(inferPhase(p, '2026-04-14'), 'embryo_culture')
})

test('stimulace se pozná z jejího data', () => {
  const p = profileWith({ stimulationStartOn: '2026-04-01' })
  assert.equal(inferPhase(p, '2026-04-05'), 'stimulation')
})

test('těhotenství se odvodí z poslední menstruace', () => {
  const p = profileWith({ lastPeriodOn: '2026-01-01' })
  assert.equal(inferPhase(p, '2026-02-15'), 'early_pregnancy') // ~6. týden
  assert.equal(inferPhase(p, '2026-05-01'), 'pregnancy') // ~17. týden
  assert.equal(inferPhase(p, '2026-10-01'), 'birth_prep') // ~39. týden
})

test('rizikové těhotenství přebíjí běžné', () => {
  const p = profileWith({ lastPeriodOn: '2026-01-01', modifiers: ['high_risk'] })
  assert.equal(inferPhase(p, '2026-05-01'), 'high_risk_pregnancy')
})

test('ztráta přebíjí těhotenská data, ale jen dokud je čerstvá', () => {
  const p = profileWith({ lastPeriodOn: '2026-01-01', lossOn: '2026-03-01' })
  assert.equal(inferPhase(p, '2026-03-10'), 'loss_miscarriage')
  // Po třech měsících už se řídíme dalšími daty, ne ztrátou.
  assert.notEqual(inferPhase(p, '2026-08-01'), 'loss_miscarriage')
})

test('zvolená fáze ztráty se respektuje', () => {
  const p = profileWith({ lossOn: '2026-03-01', declaredPhase: 'loss_ectopic' })
  assert.equal(inferPhase(p, '2026-03-05'), 'loss_ectopic')
})

test('po porodu jde šestinedělí, pak první rok, pak batole', () => {
  const p = profileWith({ birthOn: '2026-01-01' })
  assert.equal(inferPhase(p, '2026-01-20'), 'postpartum')
  assert.equal(inferPhase(p, '2026-06-01'), 'baby_first_year')
  assert.equal(inferPhase(p, '2027-06-01'), 'toddler')
})

test('nedonošené miminko jde nejdřív na NICU', () => {
  const p = profileWith({
    birthOn: '2026-01-01',
    modifiers: ['preterm', 'nicu_stay'],
    gestationalWeeksAtBirth: 30,
  })
  assert.equal(inferPhase(p, '2026-01-20'), 'nicu')
})

test('po propuštění z NICU následuje návrat domů', () => {
  const p = profileWith({
    birthOn: '2026-01-01',
    cameHomeOn: '2026-02-20',
    modifiers: ['preterm', 'nicu_stay'],
    gestationalWeeksAtBirth: 30,
  })
  assert.equal(inferPhase(p, '2026-02-25'), 'coming_home')
})

test('opakované neúspěchy se poznají z počtu cyklů', () => {
  assert.equal(inferPhase(profileWith({ ivfCycles: 4 }), '2026-05-01'), 'repeated_failure')
})

// --------------------------------------------------------- gestační výpočty ---

test('gestační stáří z poslední menstruace', () => {
  const p = profileWith({ lastPeriodOn: '2026-01-01' })
  assert.equal(gestationDaysFor(p, '2026-01-01'), 0)
  assert.equal(gestationDaysFor(p, '2026-03-01'), 59)
})

test('gestační stáří z termínu porodu má přednost', () => {
  const p = profileWith({ lastPeriodOn: '2026-01-01', dueDate: '2026-10-15' })
  // 280 dní minus dny do termínu
  assert.equal(gestationDaysFor(p, '2026-10-15'), 280)
  assert.equal(gestationDaysFor(p, '2026-10-08'), 273)
})

test('gestační stáří po transferu počítá se dnem kultivace embrya', () => {
  const p = profileWith({
    transferOn: '2026-01-10',
    betaTestOn: '2026-01-20',
    embryoDayAtTransfer: 5,
  })
  // Den transferu blastocysty = gestačně 2 týdny a 5 dní.
  assert.equal(gestationDaysFor(p, '2026-01-10'), 19)
  assert.equal(gestationDaysFor(p, '2026-01-17'), 26)
})

test('odhad termínu porodu z poslední menstruace', () => {
  const p = profileWith({ lastPeriodOn: '2026-01-01' })
  assert.equal(estimatedDueDate(p), addDays('2026-01-01', 280))
})

test('odhad termínu porodu z transferu', () => {
  const p = profileWith({ transferOn: '2026-01-10', embryoDayAtTransfer: 5 })
  const due = estimatedDueDate(p)
  assert.ok(due)
  // Zpětná kontrola: v termínu musí gestační stáří vyjít na 280 dní.
  assert.equal(gestationDaysFor({ ...p, dueDate: due }, due!), 280)
})

// ------------------------------------------------------- korigovaný věk ---

test('korigovaný věk je nižší než skutečný u nedonošeného dítěte', () => {
  const p = profileWith({
    birthOn: '2026-01-01',
    gestationalWeeksAtBirth: 30,
    modifiers: ['preterm'],
  })
  const corrected = correctedAgeDaysFor(p, '2026-04-01')
  const actual = daysBetween('2026-01-01', '2026-04-01')
  assert.ok(corrected !== null)
  assert.ok(corrected! < actual)
  // 10 týdnů před termínem = rozdíl 70 dní.
  assert.equal(actual - corrected!, 70)
})

test('korigovaný věk může být před termínem záporný', () => {
  const p = profileWith({
    birthOn: '2026-01-01',
    gestationalWeeksAtBirth: 28,
    modifiers: ['preterm'],
  })
  assert.ok(correctedAgeDaysFor(p, '2026-02-01')! < 0)
})

test('u donošeného dítěte korigovaný věk nepočítáme', () => {
  const state = resolveJourney(
    profileWith({ birthOn: '2026-01-01', gestationalWeeksAtBirth: 39 }),
    '2026-03-01',
  )
  assert.equal(state.usesCorrectedAge, false)
})

test('korekce se přestane používat po druhých narozeninách', () => {
  const p = profileWith({
    birthOn: '2024-01-01',
    gestationalWeeksAtBirth: 30,
    modifiers: ['preterm'],
  })
  assert.equal(resolveJourney(p, '2026-06-01').usesCorrectedAge, false)
})

// ------------------------------------------------------------- resolveJourney ---

test('resolveJourney popíše den po transferu', () => {
  const state = resolveJourney(profileWith({ transferOn: '2026-05-01' }), '2026-05-06')
  assert.equal(state.phase.id, 'two_week_wait')
  assert.equal(state.daysPastTransfer, 5)
  assert.match(state.dayLabel, /5\. den po transferu/)
})

test('resolveJourney počítá ekvivalent dní po ovulaci', () => {
  const state = resolveJourney(
    profileWith({ transferOn: '2026-05-01', embryoDayAtTransfer: 5 }),
    '2026-05-06',
  )
  assert.equal(state.daysPastOvulationEquivalent, 10)
})

test('resolveJourney popíše těhotenství gestačně', () => {
  const state = resolveJourney(profileWith({ lastPeriodOn: '2026-01-01' }), '2026-05-01')
  assert.equal(state.gestationWeek, 17)
  assert.match(state.dayLabel, /17/)
})

test('resolveJourney seřadí milníky a najde nejbližší budoucí', () => {
  const state = resolveJourney(
    profileWith({
      transferOn: '2026-05-01',
      retrievalOn: '2026-04-25',
      dueDate: '2027-01-20',
    }),
    '2026-05-06',
  )
  assert.ok(state.milestones.length >= 3)
  assert.deepEqual(
    [...state.milestones].map((m) => m.date),
    [...state.milestones].map((m) => m.date).sort(),
  )
  assert.equal(state.nextMilestone?.key, 'dueDate')
})

test('postup ve fázi je vždy mezi 0 a 1', () => {
  for (const day of [-5, 0, 3, 40, 400]) {
    const state = resolveJourney(
      profileWith({ transferOn: addDays('2026-05-01', -day) }),
      '2026-05-01',
    )
    if (state.progress !== null) {
      assert.ok(state.progress >= 0 && state.progress <= 1, `postup mimo rozsah pro den ${day}`)
    }
  }
})

test('šestinedělí se popisuje po dnech od porodu', () => {
  const state = resolveJourney(profileWith({ birthOn: '2026-01-01' }), '2026-01-08')
  assert.equal(state.phase.id, 'postpartum')
  assert.match(state.dayLabel, /8\. den vašeho šestinedělí/)
})

test('u nedonošeného dítěte se popisek řídí korigovaným věkem', () => {
  const state = resolveJourney(
    profileWith({
      birthOn: '2025-10-01',
      gestationalWeeksAtBirth: 30,
      modifiers: ['preterm'],
      cameHomeOn: '2025-11-20',
    }),
    '2026-05-01',
  )
  assert.equal(state.usesCorrectedAge, true)
  assert.match(state.dayLabel, /korigovaně/)
})
