import test from 'node:test'
import assert from 'node:assert/strict'
import { inferPhase, phaseAffinity, resolveJourney } from '../src/lib/domain/journey'
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

test('poslední menstruace sama o sobě nedělá z uživatelky těhotnou', () => {
  // Rozsah aplikace končí u pozitivní bety. Fáze těhotenství neexistují,
  // takže se z data menstruace nesmí odvodit. Dřív se z něj počítal
  // gestační týden a uživatelka spadla do fáze, která tu už není.
  const p = profileWith({ lastPeriodOn: '2026-01-01' })
  const phase = inferPhase(p, '2026-05-01')
  assert.ok(!['early_pregnancy', 'pregnancy', 'birth_prep'].includes(phase))
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

test('opakované neúspěchy se poznají z počtu cyklů', () => {
  assert.equal(inferPhase(profileWith({ ivfCycles: 4 }), '2026-05-01'), 'repeated_failure')
})

// --------------------------------------------------------- gestační výpočty ---

// ------------------------------------------------------- korigovaný věk ---

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

test('resolveJourney seřadí milníky a najde nejbližší budoucí', () => {
  const state = resolveJourney(
    profileWith({
      retrievalOn: '2026-04-25',
      transferOn: '2026-05-01',
      betaTestOn: '2026-05-12',
    }),
    '2026-05-06',
  )
  assert.ok(state.milestones.length >= 3)
  assert.deepEqual(
    [...state.milestones].map((m) => m.date),
    [...state.milestones].map((m) => m.date).sort(),
  )
  assert.equal(state.nextMilestone?.key, 'betaTestOn')
})

// ------------------------------------------------------ ruční volba fáze ---

test('zvolená fáze bez vlastní kotvy přebije starší data z cyklu', () => {
  // Přesně situace, kvůli které pravidlo vzniklo: žena přepne na „IVF
  // nevyšlo“, ale v profilu jí pořád leží datum stimulace a transferu.
  const p = profileWith({
    stimulationStartOn: '2026-04-20',
    transferOn: '2026-05-01',
    declaredPhase: 'waiting_next_attempt',
    phaseDeclaredOn: '2026-05-06',
  })
  assert.equal(inferPhase(p, '2026-05-06'), 'waiting_next_attempt')
  assert.equal(inferPhase(p, '2026-05-08'), 'waiting_next_attempt')
})

test('bez data volby zůstává nálepka bezmocná', () => {
  const p = profileWith({ transferOn: '2026-05-01', declaredPhase: 'waiting_next_attempt' })
  assert.equal(inferPhase(p, '2026-05-06'), 'two_week_wait')
})

test('novější datum než volba převezme vedení', () => {
  const p = profileWith({
    declaredPhase: 'waiting_next_attempt',
    phaseDeclaredOn: '2026-05-06',
    transferOn: '2026-06-01',
  })
  assert.equal(inferPhase(p, '2026-06-01'), 'transfer')
})

test('zvolená fáze s vlastní kotvou se dál posouvá v čase', () => {
  // Kdyby volba vyhrávala i tady, cesta by zamrzla v den nastavení.
  const p = profileWith({
    declaredPhase: 'transfer',
    phaseDeclaredOn: '2026-05-01',
    transferOn: '2026-05-01',
  })
  assert.equal(inferPhase(p, '2026-05-01'), 'transfer')
  assert.equal(inferPhase(p, '2026-05-07'), 'two_week_wait')
})

test('zvolená ztráta drží, dokud nevyprší, pak se cesta posune dál', () => {
  const p = profileWith({
    declaredPhase: 'loss_missed',
    phaseDeclaredOn: '2026-05-01',
    lossOn: '2026-05-01',
  })
  assert.equal(inferPhase(p, '2026-05-10'), 'loss_missed')
  assert.equal(inferPhase(p, '2026-09-01'), 'waiting_next_attempt')
})

test('obsah pro pozitivní výsledek se nezobrazí po neúspěchu a naopak', () => {
  const po = resolveJourney(
    profileWith({ declaredPhase: 'waiting_next_attempt', phaseDeclaredOn: '2026-05-06' }),
    '2026-05-06',
  )
  assert.equal(phaseAffinity(po, ['beta_positive']), 0)
  // Příbuzná skupina to dřív prodrala dovnitř. Přesná shoda platí dál.
  assert.equal(phaseAffinity(po, ['waiting_next_attempt']), 1)
  assert.ok(phaseAffinity(po, ['beta_positive', 'waiting_next_attempt']) > 0)

  const beta = resolveJourney(profileWith({ betaTestOn: '2026-05-06' }), '2026-05-06')
  assert.equal(phaseAffinity(beta, ['loss_miscarriage']), 0)
})
