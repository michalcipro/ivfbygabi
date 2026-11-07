import test from 'node:test'
import assert from 'node:assert/strict'
import { JAZYKY, NAZVY_JAZYKU, adresaJazyka, prelozit } from '../src/lib/i18n'
import { EN } from '../src/lib/preklady/en'
import { DE } from '../src/lib/preklady/de'

/**
 * Jazyky.
 *
 * Cizojazyčná verze je pro ženu, která se léčí na české klinice a nemluví
 * česky. Testuje se tu to, co by při překládání nejsnáz ujelo: odkaz mezi
 * jazyky a rozcházející se slovníky.
 */

test('odkaz mezi jazyky zvládne všechny tvary adresy', () => {
  for (const vstup of ['/app/', '/app/en/', '/app/de/', '/app/index.html', '/app/en/index.html']) {
    assert.equal(adresaJazyka('cs', vstup), '/app/', `z ${vstup} do češtiny`)
    assert.equal(adresaJazyka('en', vstup), '/app/en/', `z ${vstup} do angličtiny`)
    assert.equal(adresaJazyka('de', vstup), '/app/de/', `z ${vstup} do němčiny`)
  }
})

test('jazyky se do sebe nezanořují', () => {
  // Dvojí přepnutí musí skončit tam, kde jedno.
  const jednou = adresaJazyka('de', '/app/en/')
  assert.equal(adresaJazyka('de', jednou), '/app/de/')
})

test('slovníky mají stejná hesla', () => {
  // Rozejít se smí obsahem, ne rozsahem. Chybějící heslo v jednom jazyce
  // znamená, že tam zůstane česká věta, a to se nemá stát nepozorovaně.
  const en = new Set(Object.keys(EN))
  const de = new Set(Object.keys(DE))
  const jenEn = [...en].filter((k) => !de.has(k))
  const jenDe = [...de].filter((k) => !en.has(k))
  assert.deepEqual(jenEn, [], 'hesla jen v angličtině')
  assert.deepEqual(jenDe, [], 'hesla jen v němčině')
})

/**
 * Slova, která se v cílovém jazyce píšou stejně jako česky.
 *
 * Je jich pár a jsou to výpůjčky. Musí být vyjmenovaná, protože jinak
 * by test neuměl odlišit „stejné schválně“ od „zapomněl jsem přeložit“,
 * a to druhé je ta chyba, kterou má chytat.
 */
const STEJNE: Record<'en' | 'de', string[]> = {
  en: ['Partner', 'Partner mode'],
  de: ['Profil', 'Partner'],
}

test('žádný překlad nezůstal nepřeložený', () => {
  // Nejčastější chyba při psaní slovníku: zkopíruje se klíč a zapomene
  // se přeložit. Pozná se podle toho, že se hodnota rovná klíči.
  for (const [jm, slovnik] of [['en', EN], ['de', DE]] as const) {
    const stejne = Object.entries(slovnik)
      .filter(([k, v]) => k === v)
      .map(([k]) => k)
      .filter((k) => !STEJNE[jm].includes(k))
    assert.deepEqual(stejne, [], `${jm}: nepřeložená hesla`)
  }
})

test('seznam výpůjček neobsahuje nic navíc', () => {
  // Kdyby se heslo později přeložilo, výjimka by tu zůstala viset
  // a kryla by příští chybu.
  for (const [jm, slovnik] of [['en', EN], ['de', DE]] as const) {
    for (const k of STEJNE[jm]) {
      assert.equal(slovnik[k], k, `${jm}: „${k}“ už se překládá, výjimka je zbytečná`)
    }
  }
})

test('každý jazyk má svoje jméno ve svém jazyce', () => {
  for (const j of JAZYKY) assert.ok(NAZVY_JAZYKU[j], `${j} nemá jméno`)
  assert.equal(NAZVY_JAZYKU.cs, 'Čeština')
  assert.equal(NAZVY_JAZYKU.en, 'English')
  assert.equal(NAZVY_JAZYKU.de, 'Deutsch')
})

test('v českém sestavení se nepřekládá', () => {
  // Testy běží nad nenahrazeným tokenem, takže jazyk je čeština.
  assert.equal(prelozit('Dnes'), 'Dnes')
})
