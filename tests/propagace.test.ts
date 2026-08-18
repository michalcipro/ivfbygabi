import test from 'node:test'
import assert from 'node:assert/strict'
import { effectiveProfile } from '../src/lib/domain/latest'
import { inferPhase, resolveJourney } from '../src/lib/domain/journey'
import { emptyProfile, type Profile } from '../src/lib/domain/profile'
import { emptyCycle, emptyTransfer, type CycleRow, type CycleTransfer } from '../src/lib/domain/cycle'
import { lossPathFor, LOSS_PATHS } from '../src/lib/domain/loss-path'
import { PHASES } from '../src/lib/domain/phases'

/**
 * Karta cyklu je zdroj pravdy.
 *
 * Co do ní žena napíše, tím se musí řídit celá aplikace: fáze, den ve fázi,
 * obsah, počty i situace. Tyhle testy hlídají obojí. Že se zápis propíše,
 * a že se **typ ztráty nikdy nedomýšlí**.
 */

const TODAY = '2026-08-01'

function prof(patch: Partial<Profile> = {}): Profile {
  return { ...emptyProfile('u1', 'p1', '2026-01-01T00:00:00Z'), ...patch }
}

function cyc(patch: Partial<CycleRow> = {}): CycleRow {
  return { ...emptyCycle('c1', 1, '2026-07-01'), cd1On: '2026-07-01', ...patch }
}

function tr(id: string, patch: Partial<CycleTransfer> = {}): CycleTransfer {
  return { ...emptyTransfer(id), date: '2026-07-15', ...patch }
}

// ------------------------------------------------------- typ ztráty sedí ---

const ZTRATY = [
  ['biochemicke', 'loss_biochemical'],
  ['zamlkle', 'loss_missed'],
  ['ztrata', 'loss_miscarriage'],
  ['mimodelozni', 'loss_ectopic'],
] as const

test('každý typ ztráty v transferu vede na vlastní fázi', () => {
  for (const [outcome, faze] of ZTRATY) {
    const c = cyc({ transfers: [tr('t1', { outcome })] })
    const p = effectiveProfile(prof(), [c], TODAY)
    assert.equal(inferPhase(p, TODAY), faze, `${outcome} má vést na ${faze}`)
  }
})

test('každý typ ztráty v cyklu bez transferu vede na vlastní fázi', () => {
  for (const [outcome, faze] of ZTRATY) {
    const c = cyc({ outcome, endedOn: '2026-07-20' })
    const p = effectiveProfile(prof(), [c], TODAY)
    assert.equal(inferPhase(p, TODAY), faze, `${outcome} má vést na ${faze}`)
  }
})

test('ztráta z karty cyklu naplní datum ztráty, jinak fáze nepočítá dny', () => {
  // Bez tohohle data byla kotva všech čtyř fází ztráty prázdná, den ve fázi
  // napořád nula a žádná denní karta se nemohla trefit. Fáze naskočila
  // a byla prázdná.
  for (const [outcome] of ZTRATY) {
    const c = cyc({ transfers: [tr('t1', { outcome, date: '2026-07-25' })] })
    const p = effectiveProfile(prof(), [c], TODAY)
    assert.equal(p.lossOn, '2026-07-25', `${outcome} má nastavit datum ztráty`)

    const stav = resolveJourney(p, TODAY)
    assert.equal(stav.anchorDate, '2026-07-25')
    assert.equal(stav.dayInPhase, 7, `${outcome} má počítat sedmý den`)
  }
})

test('vlastní novější datum ztráty přebije odvozené z cyklu', () => {
  const c = cyc({ transfers: [tr('t1', { outcome: 'ztrata', date: '2026-07-20' })] })
  const p = effectiveProfile(prof({ lossOn: '2026-07-28' }), [c], TODAY)
  assert.equal(p.lossOn, '2026-07-28')
})

test('typ ztráty se nikdy nedomýšlí z pouhého data', () => {
  // Datum ztráty samo o sobě neříká, co se stalo. Když je v cyklu zapsané
  // mimoděložní těhotenství, nesmí z toho vyjít samovolný potrat.
  const c = cyc({ transfers: [tr('t1', { outcome: 'mimodelozni', date: '2026-07-25' })] })
  const p = effectiveProfile(prof({ declaredPhase: null }), [c], TODAY)
  assert.equal(inferPhase(p, TODAY), 'loss_ectopic')
})

// -------------------------------------------------- co karta cyklu propíše ---

test('CD1 z karty je poslední menstruace, o které aplikace ví', () => {
  const c = cyc({ cd1On: '2026-07-28' })
  assert.equal(effectiveProfile(prof(), [c], TODAY).lastPeriodOn, '2026-07-28')
})

test('klinika z karty se propíše do profilu', () => {
  const c = cyc({ clinic: 'Repromeda' })
  assert.equal(effectiveProfile(prof(), [c], TODAY).clinicName, 'Repromeda')
})

test('zapsaná léčba doplní situace, které řídí obsah', () => {
  const c = cyc({
    kind: 'fet',
    eggSource: 'darovane',
    fertMethod: 'icsi',
    transfers: [tr('t1', { kind: 'kryo', pgt: 'pgta' })],
  })
  const mods = effectiveProfile(prof(), [c], TODAY).modifiers
  for (const m of ['frozen_transfer', 'donor_egg', 'icsi', 'pgt'] as const) {
    assert.ok(mods.includes(m), `chybí ${m}`)
  }
})

test('ruční volby se zapsanou léčbou nepřepisují, jen doplňují', () => {
  const c = cyc({ fertMethod: 'icsi' })
  const mods = effectiveProfile(prof({ modifiers: ['pcos'] }), [c], TODAY).modifiers
  assert.ok(mods.includes('pcos'))
  assert.ok(mods.includes('icsi'))
})

test('tři negativní transfery znamenají opakovaný neúspěch', () => {
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-07-05', outcome: 'negativni' }),
      tr('t2', { date: '2026-07-10', outcome: 'negativni' }),
      tr('t3', { date: '2026-07-15', outcome: 'negativni' }),
    ],
  })
  const p = effectiveProfile(prof(), [c], TODAY)
  assert.ok(p.modifiers.includes('repeated_failure'))
  assert.equal(p.transfersDone, 3)
})

test('dva transfery bez výsledku opakovaný neúspěch neznamenají', () => {
  // Transfer, který čeká na výsledek, není neúspěch. Rozhodnout za ženu
  // dřív, než výsledek zná, je to nejhorší, co aplikace může udělat.
  const c = cyc({
    transfers: [
      tr('t1', { date: '2026-07-05', outcome: 'negativni' }),
      tr('t2', { date: '2026-07-10', outcome: 'ceka' }),
      tr('t3', { date: '2026-07-15', outcome: 'ceka' }),
    ],
  })
  assert.ok(!effectiveProfile(prof(), [c], TODAY).modifiers.includes('repeated_failure'))
})

test('dvě ztráty znamenají opakovaný neúspěch i stav po ztrátě', () => {
  const a = { ...cyc({ id: 'c1' }), outcome: 'ztrata' as const, endedOn: '2026-05-20' }
  const b = cyc({ id: 'c2', cd1On: '2026-07-01', transfers: [tr('t1', { outcome: 'zamlkle' })] })
  const p = effectiveProfile(prof(), [a, b], TODAY)
  assert.equal(p.miscarriages, 2)
  assert.ok(p.modifiers.includes('after_loss'))
  assert.ok(p.modifiers.includes('repeated_failure'))
})

test('prázdná rozdělaná karta se do počtu cyklů nepočítá', () => {
  const rozjety = cyc({ id: 'c1', stimStartOn: '2026-07-02' })
  const prazdny = cyc({ id: 'c2', cd1On: '2026-07-30' })
  assert.equal(effectiveProfile(prof(), [rozjety, prazdny], TODAY).ivfCycles, 1)
})

test('inseminace se nepočítá jako embryotransfer', () => {
  // V cyklu typu IUI se do řádku transferu zapisuje samotná inseminace.
  // Kdyby z ní vzniklo datum transferu, aplikace by ženě hlásila dny po
  // embryotransferu a nabízela obsah o embryích, která žádná nejsou.
  const c = cyc({ kind: 'iui', transfers: [tr('t1', { date: '2026-07-28' })] })
  const p = effectiveProfile(prof(), [c], TODAY)
  assert.equal(p.iuiOn, '2026-07-28')
  assert.equal(p.transferOn, null)
})

// ----------------------------------------------- návaznost po ztrátě sedí ---

test('každá fáze ztráty má popsanou klinickou návaznost', () => {
  for (const faze of ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'loss_ectopic', 'uterine_revision'] as const) {
    const cesta = lossPathFor(faze)
    assert.ok(cesta, `${faze} nemá návaznost`)
    assert.ok(cesta!.nasleduje.length >= 3)
    assert.ok(cesta!.volejte.length >= 3)
    assert.ok(cesta!.zeptejte.length >= 3)
    assert.ok(cesta!.znovu.length > 40)
  }
})

test('po mimoděložním těhotenství zazní odstup po methotrexátu', () => {
  // Jediná lhůta v aplikaci, která se nedá zkrátit dohodou. Methotrexát je
  // antagonista kyseliny listové a v té době by mohl poškodit vývoj.
  const cesta = lossPathFor('loss_ectopic')!
  assert.match(cesta.znovu, /methotrexát/i)
  assert.match(cesta.znovu, /tři měsíce/i)
})

test('po biochemickém těhotenství se nenabízí revize dělohy', () => {
  // Není co revidovat a nabízet zákrok, který se nedělá, ženu jen vyděsí.
  assert.ok(!PHASES.loss_biochemical.next.includes('uterine_revision'))
  assert.ok(!PHASES.loss_ectopic.next.includes('uterine_revision'))
  assert.ok(PHASES.loss_missed.next.includes('uterine_revision'))
  assert.ok(PHASES.loss_miscarriage.next.includes('uterine_revision'))
})

test('z pozitivního hCG vede cesta do všech typů ztráty', () => {
  // Většina ztrát po IVF přichází právě odsud, z týdnů mezi pozitivním
  // hCG a prvním ultrazvukem.
  for (const faze of ['loss_biochemical', 'loss_missed', 'loss_miscarriage', 'loss_ectopic'] as const) {
    assert.ok(PHASES.beta_positive.next.includes(faze))
  }
})

test('žádná návaznost neobsahuje dávkování', () => {
  for (const c of LOSS_PATHS) {
    const text = [c.co, c.znamena, c.znovu, ...c.nasleduje, ...c.volejte, ...c.zeptejte].join(' ')
    assert.ok(!/\d+\s?mg\b/i.test(text), `${c.phase} obsahuje dávkování`)
  }
})

// ------------------------------- zápis se nesmí ztratit kvůli chybějící kolonce ---

/**
 * Změřeno v aplikaci: v kartě cyklu stálo „Mimoděložní těhotenství“ a
 * nahoře „Moje fáze: Čekání na hCG, 12. den po transferu“. Zapsaná
 * diagnóza se ztratila, protože u ní chyběla jedna kolonka. Tyhle testy
 * drží pravidlo, že rozhodnutý výsledek přežije neúplný řádek.
 */
const POZDE = '2026-08-18'
const PRED_12 = '2026-08-06'

function poTransferu(): Profile {
  return prof({
    declaredPhase: 'two_week_wait',
    phaseDeclaredOn: PRED_12,
    transferOn: PRED_12,
  })
}

function cyklusSTransfery(transfers: CycleTransfer[]): CycleRow {
  return { ...cyc({ id: 'c9', cd1On: '2026-07-20', startedOn: '2026-07-20', retrievalOn: '2026-08-01' }), transfers }
}

test('výsledek u transferu bez data přepne aplikaci stejně jako s datem', () => {
  const c = cyklusSTransfery([tr('t1', { date: null, outcome: 'mimodelozni' })])
  const p = effectiveProfile(poTransferu(), [c], POZDE)
  assert.equal(inferPhase(p, POZDE), 'loss_ectopic')
})

test('výsledek u transferu s datem omylem v budoucnu se taky nezahodí', () => {
  const c = cyklusSTransfery([tr('t1', { date: '2026-09-01', outcome: 'mimodelozni' })])
  assert.equal(inferPhase(effectiveProfile(poTransferu(), [c], POZDE), POZDE), 'loss_ectopic')
})

test('diagnóza u zrušeného transferu se nezahodí', () => {
  const c = cyklusSTransfery([tr('t1', { date: PRED_12, outcome: 'ztrata', cancelled: true })])
  assert.equal(inferPhase(effectiveProfile(poTransferu(), [c], POZDE), POZDE), 'loss_miscarriage')
})

test('výsledek se nedatuje před transfer, jinak ho transfer přebije', () => {
  // Odhad z odběru vajíček je o dva týdny starší než transfer. Kdyby platil,
  // vyhrála by v odvození fáze větev transferu a žena by po ztrátě dál
  // četla, kolikátý je den po transferu.
  const c = cyklusSTransfery([tr('t1', { date: null, outcome: 'zamlkle' })])
  const p = effectiveProfile(poTransferu(), [c], POZDE)
  assert.ok(typeof p.outcomeOn === 'string' && p.outcomeOn >= PRED_12)
  assert.ok(p.lossOn !== null && p.lossOn >= PRED_12)
})

test('novější transfer, který čeká na výsledek, přebije starší diagnózu', () => {
  // Tohle je jediný případ, kdy se čeká: žena má za sebou další transfer
  // a jeho výsledek zatím nikdo nezná.
  const c = cyklusSTransfery([
    tr('t1', { date: '2026-07-25', outcome: 'mimodelozni' }),
    tr('t2', { date: PRED_12, outcome: 'ceka' }),
  ])
  assert.equal(inferPhase(effectiveProfile(poTransferu(), [c], POZDE), POZDE), 'two_week_wait')
})

test('ztráta u transferu bez data se počítá do počtu ztrát', () => {
  const c = cyklusSTransfery([tr('t1', { date: null, outcome: 'ztrata' })])
  const p = effectiveProfile(poTransferu(), [c], POZDE)
  assert.equal(p.miscarriages, 1)
  assert.ok(p.modifiers.includes('after_loss'))
})

// ------------------------------------------ úplná matice: výsledek × podoba dat ---

/**
 * Zápis v kartě musí řídit aplikaci ve všech podobách, ne jen když je
 * formulář vyplněný do posledního políčka. Tahle matice projde každý
 * výsledek transferu krát sedm podob dat, na které se dá v praxi narazit.
 */
const OCEKAVANA_FAZE: Record<string, string> = {
  pozitivni: 'beta_positive',
  negativni: 'waiting_next_attempt',
  biochemicke: 'loss_biochemical',
  zamlkle: 'loss_missed',
  ztrata: 'loss_miscarriage',
  mimodelozni: 'loss_ectopic',
}

const PODOBY: [string, (o: string) => CycleRow][] = [
  ['datum vyplněné', (o) => cyklusSTransfery([tr('t1', { date: PRED_12, outcome: o as never })])],
  ['bez data', (o) => cyklusSTransfery([tr('t1', { date: null, outcome: o as never })])],
  ['datum omylem v budoucnu', (o) => cyklusSTransfery([tr('t1', { date: '2026-09-05', outcome: o as never })])],
  ['označený jako zrušený', (o) => cyklusSTransfery([tr('t1', { date: PRED_12, outcome: o as never, cancelled: true })])],
  ['s plánovaným odběrem hCG', (o) => cyklusSTransfery([tr('t1', { date: PRED_12, outcome: o as never, hcgPlannedOn: POZDE })])],
  [
    'cyklus už uzavřený',
    (o) => ({
      ...cyklusSTransfery([tr('t1', { date: PRED_12, outcome: o as never })]),
      outcome: 'negativni',
      endedOn: '2026-08-17',
    }),
  ],
]

test('každý výsledek transferu řídí aplikaci ve všech podobách dat', () => {
  for (const [outcome, faze] of Object.entries(OCEKAVANA_FAZE)) {
    for (const [popis, postav] of PODOBY) {
      const p = effectiveProfile(poTransferu(), [postav(outcome)], POZDE)
      assert.equal(inferPhase(p, POZDE), faze, `${outcome} / ${popis}`)
    }
  }
})

test('každý výsledek celého cyklu řídí aplikaci i bez transferu', () => {
  const ocekavano: Record<string, string> = {
    tehotenstvi: 'beta_positive',
    negativni: 'waiting_next_attempt',
    biochemicke: 'loss_biochemical',
    zamlkle: 'loss_missed',
    ztrata: 'loss_miscarriage',
    mimodelozni: 'loss_ectopic',
    bez_embrya: 'waiting_next_attempt',
    zruseno: 'waiting_next_attempt',
    zamrazeno: 'waiting_next_attempt',
  }
  for (const [outcome, faze] of Object.entries(ocekavano)) {
    const c = { ...cyklusSTransfery([]), outcome: outcome as never, endedOn: '2026-08-17' }
    assert.equal(inferPhase(effectiveProfile(poTransferu(), [c], POZDE), POZDE), faze, outcome)
  }
})

test('naplánovaný transfer neznamená, že je žena mezi pokusy', () => {
  // Odběr vajíček proběhl před sedmnácti dny a kryotransfer je za tři
  // týdny. „Mezi pokusy“ je v takové chvíli tvrzení, které se nezakládá
  // na ničem, co je v kartě zapsané.
  const c = cyklusSTransfery([tr('t1', { date: '2026-09-05', outcome: 'ceka' })])
  const p = effectiveProfile({ ...poTransferu(), transferOn: null }, [c], POZDE)
  assert.equal(inferPhase(p, POZDE), 'transfer')
})
