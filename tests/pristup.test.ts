import test from 'node:test'
import assert from 'node:assert/strict'
import { VOLNE_OBRAZOVKY, jeVolnaObrazovka, zavreno } from '../src/lib/domain/pristup'
import type { Listek } from '../src/lib/domain/predplatne'

/**
 * Placená zeď.
 *
 * Aplikace funguje jen po zaplacení. Tenhle test hlídá dvě věci, u kterých
 * by chyba bolela nejvíc: že se zeď nezapne, když není čím ověřovat, a že
 * se za ni nikdy nedostane záloha vlastních dat.
 */

const DNES = '2026-11-07'

const bezi: Listek = { platiDo: '2026-12-10', obnoviSe: '2026-12-07', cena: 191, stav: 'bezi' }
const vyprsel: Listek = { platiDo: '2026-10-30', obnoviSe: null, cena: 191, stav: 'konci' }

test('bez předplatného se obsah zamkne', () => {
  assert.equal(zavreno({ zedPlati: true, listek: null, dnes: DNES, obrazovka: 'dnes' }), true)
  assert.equal(zavreno({ zedPlati: true, listek: vyprsel, dnes: DNES, obrazovka: 'dnes' }), true)
})

test('s platným předplatným je obsah otevřený', () => {
  assert.equal(zavreno({ zedPlati: true, listek: bezi, dnes: DNES, obrazovka: 'dnes' }), false)
})

test('poslední den platnosti se počítá celý', () => {
  const l: Listek = { ...bezi, platiDo: DNES }
  assert.equal(zavreno({ zedPlati: true, listek: l, dnes: DNES, obrazovka: 'dnes' }), false)
})

test('bez veřejného klíče se nezamyká nic', () => {
  // Kdyby se zeď řídila jen lístkem, chybějící klíč ve Vercelu by zamkl
  // i ty, kdo zaplatili. Vypínač musí mít přednost.
  for (const o of ['dnes', 'denik', 'pruvodce', 'leky']) {
    assert.equal(zavreno({ zedPlati: false, listek: null, dnes: DNES, obrazovka: o }), false)
  }
})

test('záloha, předplatné, nastavení a kontakt zůstávají otevřené vždycky', () => {
  for (const o of VOLNE_OBRAZOVKY) {
    assert.equal(
      zavreno({ zedPlati: true, listek: null, dnes: DNES, obrazovka: o }),
      false,
      `${o} se nesmí dostat za zeď`,
    )
  }
})

test('záloha vlastních dat je mezi volnými obrazovkami', () => {
  // GDPR: právo na přístup a na přenositelnost se nedá podmínit platbou.
  // Obchodní podmínky navíc slibují, že záznamy zůstávají ženě vždycky.
  assert.ok(jeVolnaObrazovka('zaloha'))
  assert.ok(jeVolnaObrazovka('clenstvi'))
})

test('běžná obrazovka volná není', () => {
  assert.equal(jeVolnaObrazovka('dnes'), false)
  assert.equal(jeVolnaObrazovka('denik'), false)
})
