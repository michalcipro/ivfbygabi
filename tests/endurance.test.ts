import test from 'node:test'
import assert from 'node:assert/strict'
import {
  countCheckups,
  countInjections,
  readEndurance,
  zNum,
  type CycleFacts,
  type EnduranceInput,
} from '../src/lib/domain/endurance'

const TODAY = '2026-06-10'

function input(patch: Partial<EnduranceInput> = {}): EnduranceInput {
  return {
    today: TODAY,
    cycle: null,
    cycleTotal: 0,
    doses: [],
    shots: [],
    visits: [],
    startedOn: null,
    ...patch,
  }
}

function cycle(patch: Partial<CycleFacts> = {}): CycleFacts {
  return {
    kind: 'ivf',
    number: 1,
    dates: {},
    progress: null,
    stageHeadline: null,
    ...patch,
  }
}

// ------------------------------------------------------------------ dráha ---

test('bez cyklu se kreslí běžná dráha IVF a nic není za ní', () => {
  const e = readEndurance(input())
  assert.equal(e.total, 7)
  assert.equal(e.passed, 0)
  assert.equal(e.cycleProgress, null)
  assert.equal(e.cycleNumber, null)
})

test('kryotransfer nemá odběr ani trigger, monitorovaný cyklus nemá stimulaci', () => {
  const fet = readEndurance(input({ cycle: cycle({ kind: 'fet' }) }))
  assert.deepEqual(
    fet.steps.map((s) => s.key),
    ['cd1', 'stim', 'transfer', 'beta', 'konec'],
  )

  const mon = readEndurance(input({ cycle: cycle({ kind: 'monitorovany' }) }))
  assert.deepEqual(
    mon.steps.map((s) => s.key),
    ['cd1', 'trigger', 'beta', 'konec'],
  )
})

test('stejné datum se u jiného druhu cyklu jmenuje jinak', () => {
  const ivf = readEndurance(input({ cycle: cycle({ kind: 'ivf' }) }))
  const fet = readEndurance(input({ cycle: cycle({ kind: 'fet' }) }))
  const iui = readEndurance(input({ cycle: cycle({ kind: 'iui' }) }))

  assert.equal(ivf.steps.find((s) => s.key === 'stim')?.label, 'Začátek stimulace')
  assert.equal(fet.steps.find((s) => s.key === 'stim')?.label, 'Příprava sliznice')
  assert.equal(iui.steps.find((s) => s.key === 'transfer')?.label, 'Inseminace')
})

test('milník je za ní, až když jeho datum nastalo. Dnešek se počítá', () => {
  const e = readEndurance(
    input({
      cycle: cycle({
        dates: {
          cd1: '2026-05-20',
          stim: '2026-05-24',
          trigger: TODAY,
          odber: '2026-06-12',
          transfer: null,
        },
      }),
    }),
  )
  assert.equal(e.passed, 3)
  assert.deepEqual(
    e.steps.filter((s) => s.passed).map((s) => s.key),
    ['cd1', 'stim', 'trigger'],
  )
})

// -------------------------------------------------------------- počítadla ---

test('injekce zapsaná dvakrát se počítá jednou', () => {
  // Odškrtnutá dávka i zapsaný vpich jsou tentýž jeden Gonal ve čtvrtek.
  const n = countInjections(
    [
      { date: '2026-06-08', med: 'Gonal-F' },
      { date: '2026-06-09', med: 'Gonal-F' },
    ],
    [
      { date: '2026-06-08', med: 'gonal-f' },
      { date: '2026-06-09', med: 'Cetrotide' },
    ],
  )
  assert.equal(n, 3)
})

test('kontrola se počítá jen z návštěvy kliniky a jen když už byla', () => {
  const visits = [
    { onDate: '2026-06-01', kind: 'kontrola' },
    { onDate: '2026-06-03', kind: 'uz' },
    { onDate: '2026-06-05', kind: 'lek' },
    { onDate: '2026-06-06', kind: 'vlastni' },
    { onDate: '2026-06-20', kind: 'kontrola' },
  ]
  assert.equal(countCheckups(visits, TODAY), 2)
})

test('dny na cestě zahrnují dnešek a bez data se nepočítají', () => {
  assert.equal(readEndurance(input({ startedOn: '2026-06-10' })).days, 1)
  assert.equal(readEndurance(input({ startedOn: '2026-06-01' })).days, 10)
  assert.equal(readEndurance(input({ startedOn: null })).days, null)
  // Datum v budoucnu je zjevně překlep. Radši nic než záporné číslo.
  assert.equal(readEndurance(input({ startedOn: '2026-07-01' })).days, null)
})

// ------------------------------------------------------------------- věty ---

test('součtová věta vynechává nuly a skloňuje česky', () => {
  // Milník za sebou = velké číslo je o milnících, takže dny zbydou na větu.
  const passed = cycle({ dates: { cd1: '2026-01-01' } })
  const many = readEndurance(
    input({
      cycle: passed,
      doses: Array.from({ length: 47 }, (_, i) => ({ date: `2026-04-${String(i + 1).padStart(2, '0')}`, med: 'x' })),
      visits: Array.from({ length: 12 }, (_, i) => ({ onDate: `2026-05-${String(i + 1).padStart(2, '0')}`, kind: 'kontrola' })),
      startedOn: '2025-11-09',
    }),
  )
  assert.equal(many.injections, 47)
  assert.equal(many.checkups, 12)
  assert.equal(many.headline, '47 injekcí. 12 kontrol. 214 dní na cestě.')

  const one = readEndurance(
    input({
      cycle: passed,
      doses: [{ date: '2026-06-09', med: 'Gonal-F' }],
      visits: [{ onDate: '2026-06-09', kind: 'uz' }],
      startedOn: '2026-06-10',
    }),
  )
  assert.equal(one.headline, '1 injekce. 1 kontrola. 1 den na cestě.')

  const few = readEndurance(
    input({
      cycle: passed,
      doses: [
        { date: '2026-06-08', med: 'a' },
        { date: '2026-06-09', med: 'a' },
      ],
      startedOn: '2026-06-08',
    }),
  )
  assert.equal(few.headline, '2 injekce. 3 dny na cestě.')

  assert.equal(readEndurance(input()).headline, 'Zatím tu není co sčítat. A to je taky výsledek.')
})

// -------------------------------------------------------------- velké číslo ---

test('nula se do velkého čísla nikdy nedostane', () => {
  // Před prvním cyklem se počítají dny na cestě. Ty už za sebou má.
  const fresh = readEndurance(input({ startedOn: '2024-09-30' }))
  assert.deepEqual(fresh.big, { value: 619, of: null, caption: 'Dní na cestě' })
  // A dny se pak nesmí opakovat i ve větě pod květem.
  assert.doesNotMatch(fresh.headline, /na cestě/)

  // Založený cyklus bez jediného vyplněného data je pořád nula milníků.
  const empty = readEndurance(input({ cycle: cycle(), cycleTotal: 1, startedOn: '2026-06-10' }))
  assert.deepEqual(empty.big, { value: 1, of: null, caption: 'Den na cestě' })

  // Úplně prázdný účet: ukáže se, co ji čeká, ne čeho nedosáhla.
  assert.deepEqual(readEndurance(input()).big, { value: 7, of: null, caption: 'Milníků před vámi' })
})

test('jakmile je první milník za ní, velké číslo je zase o milnících', () => {
  const e = readEndurance(
    input({ cycle: cycle({ dates: { cd1: '2026-06-01' } }), cycleTotal: 1, startedOn: '2024-09-30' }),
  )
  assert.deepEqual(e.big, { value: 1, of: 7, caption: 'Milníků za vámi' })
  assert.match(e.headline, /619 dní na cestě/)
})

test('věta o vnitřním kruhu zmíní pořadí, jen když je z čeho vybírat', () => {
  assert.match(readEndurance(input({ cycle: cycle(), cycleTotal: 1 })).detail, /tenhle cyklus/)
  assert.equal(
    readEndurance(input({ cycle: cycle({ number: 2 }), cycleTotal: 3 })).detail,
    'Vnitřní kruh ukazuje, jak daleko je 2. cyklus ze 3.',
  )
  assert.equal(
    readEndurance(input({ cycle: cycle({ number: 4 }), cycleTotal: 5 })).detail,
    'Vnitřní kruh ukazuje, jak daleko je 4. cyklus z 5.',
  )
  assert.match(readEndurance(input({ cycleTotal: 0 })).detail, /Až založíte cyklus/)
  assert.match(readEndurance(input({ cycleTotal: 2 })).detail, /Žádný cyklus teď neběží/)
})

test('předložka se vokalizuje podle vysloveného čísla, ne podle číslice', () => {
  // ze dvou, ze tří, ze čtyř, z pěti, ze šesti, ze sedmi, z osmi, z deseti
  assert.deepEqual(
    [2, 3, 4, 5, 6, 7, 8, 10].map(zNum),
    ['ze', 'ze', 'ze', 'z', 'ze', 'ze', 'z', 'z'],
  )
})

test('štítek nese živý stav cyklu, jinak řekne, že žádný neběží', () => {
  assert.equal(
    readEndurance(input({ cycle: cycle({ stageHeadline: '7. den stimulace' }), cycleTotal: 1 })).pill,
    '7. den stimulace',
  )
  assert.equal(readEndurance(input({ cycleTotal: 0 })).pill, 'Před prvním cyklem')
  assert.equal(readEndurance(input({ cycleTotal: 2 })).pill, 'Mezi cykly')
})
