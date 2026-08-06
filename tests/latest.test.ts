import test from 'node:test'
import assert from 'node:assert/strict'
import { effectiveProfile } from '../src/lib/domain/latest'
import { inferPhase } from '../src/lib/domain/journey'
import { emptyProfile, type Profile } from '../src/lib/domain/profile'
import {
  emptyCycle,
  emptyHcgTest,
  emptyTransfer,
  type CycleRow,
  type CycleTransfer,
  type HcgTest,
} from '../src/lib/domain/cycle'

const TODAY = '2026-08-01'

function prof(patch: Partial<Profile> = {}): Profile {
  return { ...emptyProfile('u1', 'p1', '2026-01-01T00:00:00Z'), ...patch }
}

function cyc(patch: Partial<CycleRow> = {}): CycleRow {
  return { ...emptyCycle('c2', 2, '2026-07-01'), cd1On: '2026-07-01', ...patch }
}

function tr(id: string, patch: Partial<CycleTransfer> = {}): CycleTransfer {
  return { ...emptyTransfer(id), ...patch }
}

function hcg(id: string, patch: Partial<HcgTest> = {}): HcgTest {
  return { ...emptyHcgTest(id, 'krev'), ...patch }
}

// ------------------------------------------------------------ bez cyklu ---

test('bez běžícího cyklu zůstává profil nedotčený', () => {
  const p = prof({ transferOn: '2026-03-01', stimulationStartOn: '2026-02-10' })
  assert.deepEqual(effectiveProfile(p, [], TODAY), p)
})

test('uzavřený cyklus do dneška nepřispívá', () => {
  const p = prof({ transferOn: '2026-03-01' })
  const c = cyc({ outcome: 'negativni', endedOn: '2026-07-20', transfers: [tr('t1', { date: '2026-07-15' })] })
  assert.equal(effectiveProfile(p, [c], TODAY).transferOn, '2026-03-01')
})

// -------------------------------------------------------- cyklus vyhrává ---

test('transfer z běžícího cyklu přebije starší datum z onboardingu', () => {
  // Přesně to, co pravidlo řeší: v profilu leží odpověď z registrace,
  // v kartě cyklu skutečná léčba. Počítat se musí z karty.
  const p = prof({ transferOn: '2026-03-01' })
  const c = cyc({ transfers: [tr('t1', { date: '2026-07-25' })] })
  assert.equal(effectiveProfile(p, [c], TODAY).transferOn, '2026-07-25')
})

test('z více transferů v cyklu vyhrává ten poslední proběhlý', () => {
  const p = prof({})
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-07-10', outcome: 'negativni' }),
      tr('t2', { date: '2026-07-28' }),
    ],
  })
  assert.equal(effectiveProfile(p, [c], TODAY).transferOn, '2026-07-28')
})

test('stimulace a odběr se berou z běžícího cyklu', () => {
  const p = prof({ stimulationStartOn: '2026-01-05', retrievalOn: '2026-01-18' })
  const c = cyc({ stimStartOn: '2026-07-03', retrievalOn: '2026-07-15' })
  const e = effectiveProfile(p, [c], TODAY)
  assert.equal(e.stimulationStartOn, '2026-07-03')
  assert.equal(e.retrievalOn, '2026-07-15')
})

// -------------------------------------------------- data z minulého cyklu ---

test('datum z minulého cyklu se do běžícího nepřenese', () => {
  // Cyklus začal 1. 7., transfer v profilu je z června. Patří k minulému
  // pokusu, takže se z něj dnes nesmí počítat vůbec nic.
  const p = prof({ transferOn: '2026-06-10', retrievalOn: '2026-05-28' })
  const e = effectiveProfile(p, [cyc()], TODAY)
  assert.equal(e.transferOn, null)
  assert.equal(e.retrievalOn, null)
})

test('ruční datum novější než začátek cyklu se použije, když v cyklu chybí', () => {
  // Žena, která kartu cyklu nevyplňuje, o svoje data nepřijde.
  const p = prof({ transferOn: '2026-07-20' })
  assert.equal(effectiveProfile(p, [cyc()], TODAY).transferOn, '2026-07-20')
})

test('ztráta z doby před běžícím cyklem se přestane počítat', () => {
  const p = prof({ lossOn: '2026-05-02' })
  assert.equal(effectiveProfile(p, [cyc({ stimStartOn: '2026-07-05' })], TODAY).lossOn, null)
})

test('ztráta uvnitř běžícího cyklu zůstává', () => {
  const p = prof({ lossOn: '2026-07-20' })
  assert.equal(effectiveProfile(p, [cyc()], TODAY).lossOn, '2026-07-20')
})

// ------------------------------------------------------------ pozitivní hCG ---

test('pozitivní hCG se váže na transfer, o který teď jde', () => {
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-07-05', outcome: 'negativni' }),
      tr('t2', { date: '2026-07-22', outcome: 'pozitivni' }),
    ],
    hcgTests: [
      hcg('h1', { date: '2026-07-15', transferId: 't1' }),
      hcg('h2', { date: '2026-07-31', transferId: 't2' }),
    ],
  })
  assert.equal(effectiveProfile(prof(), [c], TODAY).betaTestOn, '2026-07-31')
})

test('čekající transfer žádné pozitivní hCG nezaloží', () => {
  const c = cyc({
    transfers: [tr('t1', { date: '2026-07-25' })],
    hcgTests: [hcg('h1', { date: '2026-07-31', transferId: 't1' })],
  })
  assert.equal(effectiveProfile(prof(), [c], TODAY).betaTestOn, null)
})

test('u jednoho transferu platí první pozitivní odběr, ne kontrolní', () => {
  // Den, kdy se to žena dozvěděla. Kontroly téhož těhotenství počítadlo
  // neresetují.
  const c = cyc({
    transfers: [tr('t1', { date: '2026-07-18', outcome: 'pozitivni' })],
    hcgTests: [
      hcg('h1', { date: '2026-07-28', transferId: 't1' }),
      hcg('h2', { date: '2026-07-30', transferId: 't1' }),
    ],
  })
  assert.equal(effectiveProfile(prof(), [c], TODAY).betaTestOn, '2026-07-28')
})

test('den kultivace se bere z transferu, ze kterého se počítá', () => {
  const p = prof({ embryoDayAtTransfer: 3 })
  const c = cyc({ transfers: [tr('t1', { date: '2026-07-25', embryoDay: 5 })] })
  assert.equal(effectiveProfile(p, [c], TODAY).embryoDayAtTransfer, 5)
})

// ------------------------------------------------- promítnutí do fáze ---

test('nový cyklus vytáhne ženu z fáze ztráty', () => {
  // Bez pravidla by dva měsíce po ztrátě dostávala obsah o ztrátě, i když
  // je zrovna devátý den stimulace.
  const p = prof({ lossOn: '2026-05-20' })
  const c = cyc({ stimStartOn: '2026-07-24' })
  assert.equal(inferPhase(p, TODAY), 'loss_miscarriage')
  assert.equal(inferPhase(effectiveProfile(p, [c], TODAY), TODAY), 'stimulation')
})

test('druhý transfer v cyklu přepíše počítání z prvního', () => {
  const p = prof({ transferOn: '2026-07-05' })
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-07-05', outcome: 'negativni' }),
      tr('t2', { date: '2026-07-29' }),
    ],
  })
  const e = effectiveProfile(p, [c], TODAY)
  assert.equal(inferPhase(p, TODAY), 'waiting_next_attempt')
  assert.equal(inferPhase(e, TODAY), 'two_week_wait')
})
