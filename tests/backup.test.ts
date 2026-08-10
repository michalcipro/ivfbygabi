import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  backupName,
  backupReminder,
  makeBackup,
  neniPrazdna,
  problemText,
  readBackup,
  shrnuti,
  VERZE,
  ZNACKA,
} from '../src/lib/domain/backup'

/**
 * Obnova přepíše všechno, co žena za měsíce napsala. Testy tady nehlídají
 * hezké chování, ale to jediné, na čem záleží: že se špatný soubor nikdy
 * nedostane přes kontrolu a že dobrý projde beze ztráty.
 */

const DNES = '2026-08-10'

function ukazkovaData() {
  return {
    v: 1,
    journal: {
      '2026-07-01': { mood: 3, note: 'první' },
      '2026-08-05': { mood: 4, note: 'poslední' },
      '2026-07-15': { mood: 2, note: 'prostřední' },
    },
    cycles: [{ id: 'c1', number: 1 }],
    embryos: [{ id: 'e1' }, { id: 'e2' }],
    labs: [{ id: 'l1' }],
    letters: [],
    exercises: [{ id: 'x1' }],
    docs: [],
    profile: { displayName: 'Tereza' },
  }
}

// ------------------------------------------------------------- kulatý běh ---

test('co se zapíše, to se přečte zpátky', () => {
  const data = ukazkovaData()
  const photos = { ph_1: 'data:image/jpeg;base64,AAAA' }
  const soubor = JSON.stringify(makeBackup(data, photos, DNES))

  const r = readBackup(soubor)
  assert.equal(r.ok, true)
  if (!r.ok) return
  assert.deepEqual(r.data, data)
  assert.deepEqual(r.photos, photos)
  assert.equal(r.summary.vznikla, DNES)
})

test('obálka nese značku a verzi', () => {
  const e = makeBackup(ukazkovaData(), {}, DNES)
  assert.equal(e.bloomia, ZNACKA)
  assert.equal(e.verze, VERZE)
  assert.equal(e.vznikla, DNES)
})

test('název souboru má v sobě datum', () => {
  assert.equal(backupName(DNES), 'bloomia-zaloha-2026-08-10.json')
})

// ------------------------------------------------------------ starý tvar ---

/**
 * Nejdůležitější test v souboru. Ženy, které si zálohu stáhly ze starší
 * verze, mají na disku plochý tvar. Kdyby ho obnova odmítla, přišly by
 * o data právě ve chvíli, kdy je potřebují nejvíc.
 */
test('plochá záloha ze starší verze se pořád načte', () => {
  const stary = { ...ukazkovaData(), photos: { ph_9: 'data:image/jpeg;base64,BBBB' } }
  const r = readBackup(JSON.stringify(stary))
  assert.equal(r.ok, true)
  if (!r.ok) return
  assert.equal(r.summary.zapisu, 3)
  assert.deepEqual(r.photos, { ph_9: 'data:image/jpeg;base64,BBBB' })
  // Klíč `photos` se do dat aplikace nesmí dostat, patří jinam.
  assert.equal('photos' in r.data, false)
  assert.equal(r.summary.vznikla, null)
})

// ----------------------------------------------------------------- odmítá ---

test('nesmysl místo JSON neprojde', () => {
  const r = readBackup('tohle není json')
  assert.equal(r.ok, false)
  if (r.ok) return
  assert.equal(r.problem, 'nejde-precist')
})

test('cizí JSON neprojde', () => {
  for (const cizi of ['{"neco":1}', '[]', '"text"', '123', 'null', '{"v":1}']) {
    const r = readBackup(cizi)
    assert.equal(r.ok, false, `mělo být odmítnuto: ${cizi}`)
  }
})

test('prázdná záloha se odmítne, aby nepřepsala plnou aplikaci', () => {
  const prazdna = makeBackup({ v: 1, journal: {}, cycles: [] }, {}, DNES)
  const r = readBackup(JSON.stringify(prazdna))
  assert.equal(r.ok, false)
  if (r.ok) return
  assert.equal(r.problem, 'prazdna')
})

test('záloha z novější verze se odmítne, místo aby se pokusila o dohady', () => {
  const budouci = { ...makeBackup(ukazkovaData(), {}, DNES), verze: VERZE + 1 }
  const r = readBackup(JSON.stringify(budouci))
  assert.equal(r.ok, false)
  if (r.ok) return
  assert.equal(r.problem, 'novejsi-verze')
})

test('samotná fotka stačí, aby záloha nebyla prázdná', () => {
  const jenFotka = makeBackup({ v: 1, journal: {} }, { ph_1: 'data:image/jpeg;base64,CCCC' }, DNES)
  const r = readBackup(JSON.stringify(jenFotka))
  assert.equal(r.ok, true)
})

test('každý problém má větu, ne kód', () => {
  for (const p of ['nejde-precist', 'neni-zaloha', 'novejsi-verze', 'prazdna'] as const) {
    const t = problemText(p)
    assert.ok(t.length > 30, `${p} má být vysvětlené`)
    assert.ok(!t.includes(p), `${p} nesmí prosáknout do textu`)
  }
})

// ---------------------------------------------------------------- shrnutí ---

test('shrnutí spočítá, co v záloze je', () => {
  const s = shrnuti(ukazkovaData(), { a: 'x', b: 'y' })
  assert.equal(s.zapisu, 3)
  assert.equal(s.cyklu, 1)
  assert.equal(s.embryi, 2)
  assert.equal(s.hodnot, 1)
  assert.equal(s.cviceni, 1)
  assert.equal(s.dopisu, 0)
  assert.equal(s.fotek, 2)
})

test('rozsah deníku je od nejstaršího po nejnovější, ne podle pořadí v souboru', () => {
  const s = shrnuti(ukazkovaData(), {})
  assert.equal(s.od, '2026-07-01')
  assert.equal(s.do, '2026-08-05')
})

test('poškozené klíče deníku nespočítají nesmyslné datum', () => {
  const s = shrnuti({ journal: { nesmysl: {}, '2026-13-45': {}, '2026-08-01': {} } }, {})
  assert.equal(s.od, '2026-08-01')
  assert.equal(s.do, '2026-08-01')
})

test('prázdné shrnutí se pozná', () => {
  assert.equal(neniPrazdna(shrnuti({}, {})), false)
  assert.equal(neniPrazdna(shrnuti({ journal: { '2026-08-01': {} } }, {})), true)
})

// ------------------------------------------------------------ připomínka ---

const zaklad = { today: DNES, zapisu: 20, cyklu: 1, naPlose: false }

test('bez dat se nepřipomíná nic', () => {
  const r = backupReminder({ ...zaklad, zapisu: 0, cyklu: 0, lastBackupOn: null })
  assert.equal(r.level, 'zadna')
})

test('dva zápisy ještě nejsou důvod otravovat', () => {
  const r = backupReminder({ ...zaklad, zapisu: 2, cyklu: 0, lastBackupOn: null })
  assert.equal(r.level, 'zadna')
})

test('rozjetá léčba bez jediné zálohy je důrazná připomínka', () => {
  const r = backupReminder({ ...zaklad, lastBackupOn: null })
  assert.equal(r.level, 'durazna')
  assert.equal(r.dni, null)
})

test('pár zápisů bez zálohy je jen jemné pobídnutí', () => {
  const r = backupReminder({ ...zaklad, zapisu: 5, cyklu: 0, lastBackupOn: null })
  assert.equal(r.level, 'jemna')
})

test('čerstvá záloha mlčí', () => {
  const r = backupReminder({ ...zaklad, lastBackupOn: '2026-08-05' })
  assert.equal(r.level, 'zadna')
  assert.equal(r.dni, 5)
})

test('tři týdny bez zálohy v prohlížeči už jsou jemná připomínka', () => {
  const r = backupReminder({ ...zaklad, lastBackupOn: '2026-07-19' })
  assert.equal(r.level, 'jemna')
  assert.equal(r.dni, 22)
})

test('dva měsíce bez zálohy jsou důrazná', () => {
  const r = backupReminder({ ...zaklad, lastBackupOn: '2026-06-01' })
  assert.equal(r.level, 'durazna')
})

test('na ploše se připomíná později, protože iOS tam data nemaže', () => {
  const vProhlizeci = backupReminder({ ...zaklad, lastBackupOn: '2026-07-19' })
  const naPlose = backupReminder({ ...zaklad, lastBackupOn: '2026-07-19', naPlose: true })
  assert.equal(vProhlizeci.level, 'jemna')
  assert.equal(naPlose.level, 'zadna')
})

test('ani na ploše se nepřipomínat nepřestane úplně', () => {
  const r = backupReminder({ ...zaklad, lastBackupOn: '2026-01-01', naPlose: true })
  assert.equal(r.level, 'durazna')
})

test('záloha z budoucnosti nedělá záporné dny', () => {
  const r = backupReminder({ ...zaklad, lastBackupOn: '2026-09-01' })
  assert.equal(r.dni, 0)
  assert.equal(r.level, 'zadna')
})
