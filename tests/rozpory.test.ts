import test from 'node:test'
import assert from 'node:assert/strict'
import { effectiveProfile } from '../src/lib/domain/latest'
import { inferPhase } from '../src/lib/domain/journey'
import { emptyProfile, type Profile } from '../src/lib/domain/profile'
import { emptyCycle, emptyHcgTest, emptyTransfer, type CycleRow, type CycleTransfer } from '../src/lib/domain/cycle'

/**
 * Karta cyklu a nálepka fáze si nesmí odporovat.
 *
 * Nejde o jeden scénář, jde o celý prostor dat. Uživatelka si karty
 * zakládá v jiném pořadí, než v jakém se věci staly, nechává políčka
 * prázdná, mění výsledky zpětně a fázi si mezitím přepíná ručně. Tyhle
 * testy proto nezkoušejí pár případů, ale projdou kombinace všech těch
 * proměnných a hlídají dvě věty:
 *
 *  1. Když je v kartě zapsaná ztráta, aplikace ji ukáže. Vždycky.
 *  2. Když karta ztrátu nemá nebo jí volba neodporuje, platí volba ženy.
 *
 * Změřeno, když to tak nebylo: 348 z 880 kombinací ztrátu neukázalo.
 * V kartě stálo „Mimoděložní těhotenství“ a nahoře „Čekání na hCG“.
 */

const TODAY = '2026-08-18'
const D = (n: number): string => {
  const d = new Date(`${TODAY}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}
const ZTRATY = new Set(['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'loss_ectopic'])

const tr = (p: Partial<CycleTransfer>): CycleTransfer => ({ ...emptyTransfer('t1'), ...p })
const cyc = (p: Partial<CycleRow>): CycleRow => ({ ...emptyCycle('c', 1, D(-30)), cd1On: D(-30), ...p })
const prof = (p: Partial<Profile>): Profile => ({ ...emptyProfile('u', 'p', '2026-01-01T00:00:00Z'), ...p })

const VOLBY: [string, Partial<Profile>][] = [
  ['bez volby', { declaredPhase: null, phaseDeclaredOn: null }],
  ['volba čekání dnes', { declaredPhase: 'two_week_wait', phaseDeclaredOn: TODAY }],
  ['volba čekání před 12 dny', { declaredPhase: 'two_week_wait', phaseDeclaredOn: D(-12) }],
  ['volba pozitivní hCG', { declaredPhase: 'beta_positive', phaseDeclaredOn: D(-2) }],
  ['volba ztráty', { declaredPhase: 'loss_miscarriage', phaseDeclaredOn: D(-1) }],
]

const KOTVY: [string, Partial<Profile>][] = [
  ['bez kotev', {}],
  ['transfer v profilu', { transferOn: D(-12) }],
  ['transfer a beta v profilu', { transferOn: D(-12), betaTestOn: D(-2) }],
  ['transfer, odběr i stimulace', { transferOn: D(-12), retrievalOn: D(-17), stimulationStartOn: D(-27) }],
]

const TVARY: [string, (o: string) => CycleRow[]][] = [
  ['transfer s datem', (o) => [cyc({ transfers: [tr({ date: D(-12), outcome: o as never })] })]],
  ['transfer bez data', (o) => [cyc({ transfers: [tr({ date: null, outcome: o as never })] })]],
  ['transfer a plánovaný odběr hCG', (o) => [cyc({ transfers: [tr({ date: D(-12), hcgPlannedOn: TODAY, outcome: o as never })] })]],
  ['transfer a naměřené hCG', (o) => [cyc({ hcgTests: [{ ...emptyHcgTest('h', 'krev'), date: D(-4), value: 30 }], transfers: [tr({ date: D(-12), outcome: o as never })] })]],
  ['výsledek jen na cyklu', (o) => [cyc({ outcome: o as never, endedOn: D(-1) })]],
  ['cyklus uzavřený i s transferem', (o) => [cyc({ outcome: o as never, endedOn: D(-1), transfers: [tr({ date: D(-12), outcome: o as never })] })]],
  ['dva otevřené cykly, ztráta ve druhém', (o) => [
    cyc({ id: 'c1', number: 1, startedOn: D(-90), cd1On: D(-90) }),
    cyc({ id: 'c2', number: 2, startedOn: D(-30), cd1On: D(-30), retrievalOn: D(-17), transfers: [tr({ date: D(-12), outcome: o as never })] }),
  ]],
  ['první cyklus uzavřený, ztráta ve druhém', (o) => [
    cyc({ id: 'c1', number: 1, startedOn: D(-90), cd1On: D(-90), outcome: 'negativni', endedOn: D(-60) }),
    cyc({ id: 'c2', number: 2, startedOn: D(-30), cd1On: D(-30), transfers: [tr({ date: D(-12), outcome: o as never })] }),
  ]],
  ['druhý cyklus má vyšší číslo, ale starší datum založení', (o) => [
    cyc({ id: 'c1', number: 1, startedOn: D(-30), cd1On: D(-30) }),
    cyc({ id: 'c2', number: 2, startedOn: D(-90), cd1On: D(-90), transfers: [tr({ date: D(-12), outcome: o as never })] }),
  ]],
  ['transfer označený jako zrušený', (o) => [cyc({ transfers: [tr({ date: D(-12), cancelled: true, outcome: o as never })] })]],
  ['dva transfery, ztráta u druhého', (o) => [cyc({ transfers: [
    tr({ date: D(-40), outcome: 'negativni' }),
    { ...emptyTransfer('t2'), date: D(-12), outcome: o as never },
  ] })]],
]

test('zapsaná ztráta se ukáže ve všech podobách dat', () => {
  const spatne: string[] = []
  let kombinaci = 0
  for (const [vp, volba] of VOLBY) {
    for (const [kp, kotvy] of KOTVY) {
      for (const [tp, postav] of TVARY) {
        for (const o of ['biochemicke', 'zamlkle', 'ztrata', 'mimodelozni']) {
          kombinaci++
          const faze = inferPhase(effectiveProfile(prof({ ...volba, ...kotvy }), postav(o), TODAY), TODAY)
          if (!ZTRATY.has(faze)) spatne.push(`${tp} | ${o} | ${vp} | ${kp} -> ${faze}`)
        }
      }
    }
  }
  assert.ok(kombinaci >= 800, `matice se scvrkla na ${kombinaci} kombinací`)
  assert.deepEqual(spatne.slice(0, 12), [], `${spatne.length} z ${kombinaci} kombinací ztrátu neukáže`)
})

// ------------------------------- opačný směr: volba ženy musí platit ---

const ZTRATA_V_KARTE = [cyc({ transfers: [tr({ date: D(-12), outcome: 'mimodelozni' })] })]

test('po ztrátě smí žena sama pokračovat, kam chce', () => {
  // Aplikace jí volbu nebere jen proto, že ji nečekala. Blokuje jen to,
  // co nemůže platit zároveň se zapsanou diagnózou.
  for (const faze of ['uterine_revision', 'genetic_testing', 'waiting_next_attempt', 'ivf_prep'] as const) {
    const p = prof({ declaredPhase: faze, phaseDeclaredOn: D(-1) })
    assert.equal(inferPhase(effectiveProfile(p, ZTRATA_V_KARTE, TODAY), TODAY), faze, faze)
  }
})

test('po zapsané ztrátě neplatí volba, která jí odporuje', () => {
  for (const faze of ['two_week_wait', 'beta_positive'] as const) {
    const p = prof({ declaredPhase: faze, phaseDeclaredOn: D(-1) })
    assert.equal(inferPhase(effectiveProfile(p, ZTRATA_V_KARTE, TODAY), TODAY), 'loss_ectopic', faze)
  }
})

test('bez rozhodnutého výsledku platí volba beze změny', () => {
  const ceka = [cyc({ transfers: [tr({ date: D(-5), outcome: 'ceka' })] })]
  assert.equal(
    inferPhase(effectiveProfile(prof({ declaredPhase: 'two_week_wait', phaseDeclaredOn: D(-5) }), ceka, TODAY), TODAY),
    'two_week_wait',
  )
  for (const faze of ['ivf_prep', 'repeated_failure', 'thinking', 'preparing_body'] as const) {
    const p = prof({ declaredPhase: faze, phaseDeclaredOn: D(-3) })
    assert.equal(inferPhase(effectiveProfile(p, [], TODAY), TODAY), faze, faze)
  }
})

test('volba se v čase nezastaví', () => {
  // Zvolený transfer se má sám stát čekáním na hCG. Kdyby volba vyhrávala
  // i tady, cesta by se zastavila v den, kdy si ji žena nastavila.
  const p = prof({ declaredPhase: 'transfer', phaseDeclaredOn: D(-6), transferOn: D(-6) })
  assert.equal(inferPhase(effectiveProfile(p, [], TODAY), TODAY), 'two_week_wait')
})

test('nový cyklus přebije ztrátu z toho minulého', () => {
  const stara = cyc({ id: 'c1', number: 1, startedOn: D(-120), cd1On: D(-120), outcome: 'ztrata', endedOn: D(-100) })
  const novy = cyc({ id: 'c2', number: 2, startedOn: D(-10), cd1On: D(-10), stimStartOn: D(-8) })
  assert.equal(inferPhase(effectiveProfile(prof({}), [stara, novy], TODAY), TODAY), 'stimulation')
})

test('rozhoduje cyklus, ve kterém se naposledy něco stalo', () => {
  // Karty se zakládají v jiném pořadí, než v jakém se věci staly. Podle
  // data založení vycházel jako nejnovější cyklus, ve kterém se měsíc nic
  // nedělo, a ztráta zapsaná v tom druhém se nikde neobjevila.
  const prazdny = cyc({ id: 'c1', number: 1, startedOn: D(-5), cd1On: D(-5) })
  const seZtratou = cyc({ id: 'c2', number: 2, startedOn: D(-60), cd1On: D(-60), transfers: [tr({ date: D(-2), outcome: 'zamlkle' })] })
  assert.equal(inferPhase(effectiveProfile(prof({}), [prazdny, seZtratou], TODAY), TODAY), 'loss_missed')
})
