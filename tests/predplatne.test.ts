import test from 'node:test'
import assert from 'node:assert/strict'
import {
  dnyText,
  popisPredplatneho,
  prectiListek,
  pristupPlati,
  zbyvaDni,
} from '../src/lib/domain/predplatne'

/**
 * Předplatné.
 *
 * Obrazovka Předplatné je jediné místo, kde se žena dozví, kdy a kolik se
 * jí strhne: upomínka před obnovením se neposílá. Věty se proto skládají
 * v doménovém modulu a hlídají se tady, ne nahodile v šabloně.
 */

const DNES = '2026-11-07'

/** Lístek se podepisuje na serveru. Tady stačí jeho obsah. */
function listek(o: Record<string, unknown> = {}): string {
  const obsah = { platiDo: '2026-12-07', obnoviSe: '2026-12-05', cena: 191, stav: 'bezi', ...o }
  const b64 = Buffer.from(JSON.stringify(obsah), 'utf8')
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  return `${b64}.podpis`
}

test('lístek se přečte i s diakritikou a bez výplně', () => {
  const l = prectiListek(listek())
  assert.ok(l)
  assert.equal(l!.platiDo, '2026-12-07')
  assert.equal(l!.obnoviSe, '2026-12-05')
  assert.equal(l!.cena, 191)
  assert.equal(l!.stav, 'bezi')
})

/**
 * Poškozený lístek nesmí shodit obrazovku.
 *
 * Leží v úložišti prohlížeče, takže ho umí zkomolit cokoliv: plné
 * úložiště, přerušený zápis, ruční zásah. Žena pak uvidí, že předplatné
 * není ověřené, a obnoví ho. To je horší než nic, ale mnohem lepší než
 * bílá obrazovka.
 */
test('poškozený lístek vrátí null, ne výjimku', () => {
  for (const zly of ['', 'nesmysl', 'a.b', '.', 'eyJ4Ijox.x', `${Buffer.from('{}').toString('base64')}.x`]) {
    assert.equal(prectiListek(zly), null, `„${zly}“ měl vrátit null`)
  }
  // Správný tvar, ale nesmyslný obsah.
  assert.equal(prectiListek(listek({ platiDo: '7.12.2026' })), null)
  assert.equal(prectiListek(listek({ stav: 'vymyslene' })), null)
  assert.equal(prectiListek(listek({ cena: 'hodně' })), null)
})

test('poslední den platnosti se počítá celý', () => {
  const l = prectiListek(listek({ platiDo: DNES }))
  assert.equal(zbyvaDni(DNES, DNES), 0)
  assert.equal(pristupPlati(l, DNES), true, 'v poslední den musí přístup ještě platit')
  assert.equal(pristupPlati(prectiListek(listek({ platiDo: '2026-11-06' })), DNES), false)
})

test('bez lístku přístup neplatí', () => {
  assert.equal(pristupPlati(null, DNES), false)
})

/**
 * Běžící předplatné musí říct datum i částku.
 *
 * Tohle je ta nejdůležitější věta v celé aplikaci z pohledu peněz. Bez
 * upomínky e-mailem je to jediné místo, kde se žena dozví, co se stane.
 */
test('u běžícího předplatného je vidět datum obnovení i částka', () => {
  const p = popisPredplatneho(prectiListek(listek()), DNES)
  assert.equal(p.stitek, 'Aktivní')
  assert.match(p.detail, /5\. prosince/, 'chybí datum obnovení')
  assert.match(p.detail, /191 Kč/, 'chybí částka')
  assert.equal(p.nabidniZrusit, true)
  assert.equal(p.nabidniKoupit, false)
})

test('zrušené předplatné doběhne a nenabízí další zrušení', () => {
  const p = popisPredplatneho(prectiListek(listek({ stav: 'konci', obnoviSe: null })), DNES)
  assert.equal(p.stitek, 'Zrušeno')
  assert.match(p.detail, /ještě 30 dní/)
  assert.match(p.detail, /Nic dalšího se vám nestrhne/)
  assert.equal(p.nabidniZrusit, false)
  assert.equal(p.nabidniKoupit, true)
})

test('neúspěšná platba nabídne opravu karty, ne nákup', () => {
  const p = popisPredplatneho(prectiListek(listek({ stav: 'potize' })), DNES)
  assert.equal(p.stitek, 'Platba neprošla')
  assert.equal(p.nabidniKartu, true)
  assert.equal(p.nabidniKoupit, false)
})

test('po vypršení se nabídne nové předplatné a zdůrazní, že data zůstávají', () => {
  const p = popisPredplatneho(prectiListek(listek({ platiDo: '2026-10-01' })), DNES)
  assert.equal(p.stitek, 'Skončilo')
  assert.match(p.detail, /záznamy zůstávají/)
  assert.equal(p.nabidniKoupit, true)
})

test('bez předplatného se nenabízí zrušení ani karta', () => {
  const p = popisPredplatneho(null, DNES)
  assert.equal(p.nabidniKoupit, true)
  assert.equal(p.nabidniZrusit, false)
  assert.equal(p.nabidniKartu, false)
})

/** Čeština skloňuje a „ještě 2 dní“ by bylo vidět každý den. */
test('počet dní se skloňuje správně', () => {
  assert.equal(dnyText(0), 'do konce dneška')
  assert.equal(dnyText(1), 'ještě jeden den')
  assert.equal(dnyText(2), 'ještě 2 dny')
  assert.equal(dnyText(4), 'ještě 4 dny')
  assert.equal(dnyText(5), 'ještě 5 dní')
  assert.equal(dnyText(30), 'ještě 30 dní')
})
