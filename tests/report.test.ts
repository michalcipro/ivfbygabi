import test from 'node:test'
import assert from 'node:assert/strict'
import { buildReport, type ReportDoc, type ReportInput, type ReportSection } from '../src/lib/domain/report'
import { emptyCycle, emptyHcgTest, emptyTransfer } from '../src/lib/domain/cycle'
import { emptyEmbryo } from '../src/lib/domain/embryo'
import { emptyExpense, emptyPayment } from '../src/lib/domain/finance'
import { emptyProfile } from '../src/lib/domain/profile'

/**
 * Přehled mé IVF cesty.
 *
 * Dokument, který se dává z ruky. Testy hlídají hlavně dvě věci: že se do něj
 * nikdy nedostane deník, dokud si to uživatelka nezapne, a že se v něm nic
 * nevyhodnocuje ani nediagnostikuje.
 */

const DNES = '2026-08-08'

function vstup(patch: Partial<ReportInput> = {}): ReportInput {
  return {
    profile: { ...emptyProfile('u', 'p', `${DNES}T08:00:00.000Z`), displayName: 'Gabi' },
    cycles: [],
    embryos: [],
    expenses: [],
    journal: [],
    exercises: [],
    today: DNES,
    options: { includeFinance: false, includeJournal: false },
    ...patch,
  }
}

function text(doc: ReportDoc): string {
  const zeSekce = (s: ReportSection): string =>
    [
      s.title,
      s.empty ?? '',
      ...s.blocks.flatMap((b) => [b.title, b.note ?? '', ...b.rows.flatMap((r) => [r.label, r.value])]),
    ].join(' ')
  return [doc.title, doc.subtitle, ...doc.sections.map(zeSekce)].join(' ')
}

function sekce(doc: ReportDoc, title: string): ReportSection | undefined {
  return doc.sections.find((s) => s.title === title)
}

// ------------------------------------------------------------------ soukromí ---

test('deník ve výchozím stavu v dokumentu není', () => {
  const doc = buildReport(
    vstup({
      journal: [{ date: DNES, mood: 2, note: 'Dneska to nedávám.', promptAnswer: '', win: '' }],
      exercises: [{ date: DNES, exercise: 'dech', title: 'Dýchání', fields: ['nic'] }],
    }),
  )
  assert.equal(sekce(doc, 'Moje reflexe'), undefined)
  assert.equal(sekce(doc, 'Moje práce se sebou'), undefined)
  assert.ok(!text(doc).includes('Dneska to nedávám'))
})

test('deník se objeví, jen když si ho uživatelka zapne', () => {
  const doc = buildReport(
    vstup({
      journal: [{ date: DNES, mood: 2, note: 'Dneska to nedávám.', promptAnswer: '', win: '' }],
      options: { includeFinance: false, includeJournal: true },
    }),
  )
  assert.ok(sekce(doc, 'Moje reflexe'))
  assert.ok(text(doc).includes('Dneska to nedávám'))
})

test('finance ve výchozím stavu v dokumentu nejsou', () => {
  const doc = buildReport(
    vstup({ expenses: [{ ...emptyExpense('e1'), title: 'PGT-A', actual: 20000 }] }),
  )
  assert.equal(sekce(doc, 'Finance'), undefined)
  assert.ok(!text(doc).includes('PGT-A'))
})

test('finance se objeví po zapnutí i se součty', () => {
  const doc = buildReport(
    vstup({
      expenses: [
        {
          ...emptyExpense('e1'),
          title: 'PGT-A',
          actual: 20000,
          payments: [{ ...emptyPayment('p1', '2026-07-01'), amount: 12000 }],
        },
      ],
      options: { includeFinance: true, includeJournal: false },
    }),
  )
  const fin = sekce(doc, 'Finance')
  assert.ok(fin)
  const radky = fin!.blocks.flatMap((b) => b.rows)
  assert.ok(radky.some((r) => r.label === 'Uhrazeno' && r.value.includes('12')))
  assert.ok(radky.some((r) => r.label === 'PGT-A'))
})

test('položka bez zapsané ceny se nevydává za uhrazenou', () => {
  const doc = buildReport(
    vstup({
      expenses: [{ ...emptyExpense('e1'), title: 'KET', priceUnknown: true }],
      options: { includeFinance: true, includeJournal: false },
    }),
  )
  const fin = sekce(doc, 'Finance')!
  const radek = fin.blocks.flatMap((b) => b.rows).find((r) => r.label === 'KET')!
  assert.ok(!radek.value.includes('uhrazeno'), radek.value)
  assert.ok(radek.value.includes('není zapsaná'), radek.value)
})

test('cyklus, kde není zapsaná žádná cena, se nevykáže jako 0 Kč', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  const doc = buildReport(
    vstup({
      cycles: [c],
      expenses: [{ ...emptyExpense('e1'), title: 'KET', priceUnknown: true, cycleId: 'c1' }],
      options: { includeFinance: true, includeJournal: false },
    }),
  )
  const blok = sekce(doc, '1. cyklus')!.blocks.find((b) => b.title === 'Finance cyklu')!
  assert.equal(blok.rows.length, 0)
  assert.ok((blok.note ?? '').includes('nedá nic sečíst'), blok.note)
})

// ---------------------------------------------------------------- obrana ---

test('neznámý klíč v datech nesmí do dokumentu propsat undefined', () => {
  // Stará nebo poškozená data. Číselník klíč nenajde a v dokumentu, který
  // jde lékaři, nesmí zůstat „undefined“.
  const c = emptyCycle('c1', 1, '2026-05-01')
  ;(c as unknown as Record<string, string>).kind = 'kryo'
  const e = emptyEmbryo('e1', 'c1', 1)
  ;(e as unknown as Record<string, string>).pgt = 'pgt_a'
  ;(e as unknown as Record<string, string>).pgtResult = 'euploidni'

  const doc = buildReport(vstup({ cycles: [c], embryos: [e] }))
  assert.ok(!text(doc).toLowerCase().includes('undefined'), text(doc))
  const zaklad = sekce(doc, '1. cyklus')!.blocks[0]
  assert.ok(!zaklad.rows.some((r) => r.label === 'Druh cyklu'))
})

// ------------------------------------------------------------ nic nevyvozuje ---

test('práce se sebou ukazuje jen počty, nic nevykládá', () => {
  const doc = buildReport(
    vstup({
      journal: [
        { date: '2026-08-06', mood: 1, note: 'a', promptAnswer: '', win: '' },
        { date: '2026-08-07', mood: 1, note: 'b', promptAnswer: '', win: '' },
      ],
      options: { includeFinance: false, includeJournal: true },
    }),
  )
  const s = sekce(doc, 'Moje práce se sebou')
  assert.ok(s)
  const vse = [s!.title, ...s!.blocks.flatMap((b) => [b.note ?? '', ...b.rows.map((r) => `${r.label} ${r.value}`)])]
    .join(' ')
    .toLowerCase()
  for (const zakazane of ['deprese', 'úzkostná porucha', 'zhoršuje se', 'špatný stav', 'doporučujeme']) {
    assert.ok(!vse.includes(zakazane), `„${zakazane}“ v přehledu`)
  }
  assert.ok(vse.includes('nic nevyvozuje'))
})

test('nikde v dokumentu nepadne „beta hCG“', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  c.hcgTests = [{ ...emptyHcgTest('h1', 'krev'), date: '2026-07-01', value: 240 }]
  const doc = buildReport(vstup({ cycles: [c] }))
  assert.ok(!/beta\s*hcg/i.test(text(doc)))
})

test('žádná em dash', () => {
  // Znak se píše escapem. Doslovná em dash by spustila tests/content.test.ts.
  const EM_DASH = '\u2014'
  const c = emptyCycle('c1', 1, '2026-05-01')
  const doc = buildReport(vstup({ cycles: [c], options: { includeFinance: true, includeJournal: true } }))
  assert.ok(!text(doc).includes(EM_DASH))
})

// ----------------------------------------------------------------- struktura ---

test('bez cyklů dokument nezmizí, jen řekne, že nic není', () => {
  const doc = buildReport(vstup())
  assert.ok(sekce(doc, 'Můj profil'))
  const prehled = sekce(doc, 'Přehled IVF cyklů')
  assert.ok(prehled)
  assert.equal(prehled!.blocks.length, 0)
  assert.ok(prehled!.empty)
})

test('cykly jdou v pořadí, ve kterém se odehrály', () => {
  const stary = emptyCycle('c1', 1, '2025-02-01')
  const novy = emptyCycle('c2', 2, '2026-06-01')
  // Vstup schválně od nejnovějšího, tak jak je drží úložiště.
  const doc = buildReport(vstup({ cycles: [novy, stary] }))
  const tituly = doc.sections.map((s) => s.title)
  assert.ok(tituly.indexOf('1. cyklus') < tituly.indexOf('2. cyklus'))
})

test('transfery se v cyklu číslují uvnitř svého druhu', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  const et = { ...emptyTransfer('t1', 'cerstvy'), date: '2026-05-20' }
  const ket1 = { ...emptyTransfer('t2', 'kryo'), date: '2026-06-20' }
  const ket2 = { ...emptyTransfer('t3', 'kryo'), date: '2026-07-20' }
  c.transfers = [et, ket1, ket2]

  const doc = buildReport(vstup({ cycles: [c] }))
  const blok = sekce(doc, '1. cyklus')!.blocks.find((b) => b.title === 'Transfery')
  assert.ok(blok)
  assert.deepEqual(
    blok!.rows.map((r) => r.label),
    ['ET', 'KET #1', 'KET #2'],
  )
})

test('cyklus bez embryí to řekne větou, ne prázdnou tabulkou', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  c.noEmbryoReason = 'neoplodnilo'
  const doc = buildReport(vstup({ cycles: [c] }))
  const blok = sekce(doc, '1. cyklus')!.blocks.find((b) => b.title === 'Embrya')
  assert.ok(blok)
  assert.equal(blok!.rows.length, 0)
  assert.ok((blok!.note ?? '').length > 5)
})

test('embrya v cyklu se vypíšou i s osudem', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  const e = emptyEmbryo('e1', 'c1', 1)
  e.days = [{ day: 5, stage: 'blastocysta', grade: '4AA', note: '' }]
  e.frozenOn = '2026-05-06'
  const doc = buildReport(vstup({ cycles: [c], embryos: [e] }))
  const blok = sekce(doc, '1. cyklus')!.blocks.find((b) => b.title === 'Embrya')
  assert.equal(blok!.rows.length, 1)
  assert.ok(blok!.rows[0].value.includes('D5'))
  assert.ok(blok!.rows[0].value.includes('4AA'))
})

test('u dárcovských vajíček se nevypisuje odběr, který nebyl', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  c.eggSource = 'darovane'
  const doc = buildReport(vstup({ cycles: [c] }))
  const prubeh = sekce(doc, '1. cyklus')!.blocks.find((b) => b.title === 'Průběh')
  for (const label of ['Odebraná vajíčka', 'Z toho zralá', 'Oplozená', 'Zamražená embrya']) {
    assert.ok(!(prubeh?.rows ?? []).some((r) => r.label === label), label)
  }
})

test('kryocyklus nemá blok Průběh s prázdnou embryologií', () => {
  const c = emptyCycle('c1', 1, '2026-05-01')
  c.kind = 'fet'
  const doc = buildReport(vstup({ cycles: [c] }))
  assert.equal(
    sekce(doc, '1. cyklus')!.blocks.find((b) => b.title === 'Průběh'),
    undefined,
  )
})

test('hCG se vypíše, jen když nějaké je', () => {
  const bez = buildReport(vstup({ cycles: [emptyCycle('c1', 1, '2026-05-01')] }))
  assert.ok(!sekce(bez, '1. cyklus')!.blocks.some((b) => b.title === 'Odběry a testy hCG'))

  const c = emptyCycle('c1', 1, '2026-05-01')
  c.hcgTests = [{ ...emptyHcgTest('h1', 'krev'), date: '2026-07-01', value: 240 }]
  const s = buildReport(vstup({ cycles: [c] }))
  const blok = sekce(s, '1. cyklus')!.blocks.find((b) => b.title === 'Odběry a testy hCG')!
  assert.equal(blok.rows.length, 1)
  assert.ok(blok.rows[0].value.includes('240'))
})

test('dokument je vždycky podepsaný datem, ke kterému platí', () => {
  const doc = buildReport(vstup())
  assert.equal(doc.createdOn, DNES)
  assert.ok(doc.subtitle.includes('2026'))
  assert.ok(doc.subtitle.includes('Gabi'))
})

test('bez jména se dokument nerozbije', () => {
  const p = emptyProfile('u', 'p', `${DNES}T08:00:00.000Z`)
  const doc = buildReport(vstup({ profile: { ...p, displayName: '' } }))
  assert.ok(doc.subtitle.length > 5)
  assert.ok(!doc.subtitle.startsWith(','))
})
