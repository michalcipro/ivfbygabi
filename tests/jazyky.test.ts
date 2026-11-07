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
 * Zkratka, kterou nemá smysl překládat.
 *
 * AMH, FSH, PCOS, OHSS, PGT, ICSI: v laboratorní zprávě i v ordinaci se
 * píšou stejně česky, anglicky i německy. Vyjmenovávat je po jedné by
 * znamenalo doplňovat výjimku ke každé nové hodnotě, a seznam výjimek,
 * který roste s každou dávkou, přestane být kontrolou.
 */
function zkratka(s: string): boolean {
  return /^[A-Z]{2,5}$/.test(s)
}

/** Česká písmena, která jiný jazyk nemá. */
const CESKA_PISMENA = /[áčďéěíňóřšťúůýžÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]/

/**
 * Název laboratorní hodnoty s jednotkou.
 *
 * Jednotky se nepřekládají schválně. Žena je u české kliniky a srovnává
 * aplikaci s papírem z laboratoře, kde stojí „IU/l“, ne „IE/l“. Kdyby
 * aplikace jednotku přeložila, musela by to v hlavě převádět zpátky.
 *
 * Pozná se to podle jednotky nebo procenta v názvu a podle toho, že
 * v klíči není ani jedno české písmeno. Česká věta, u které se zapomnělo
 * na překlad, tím neprojde.
 */
function sJednotkou(s: string): boolean {
  return /[()%]|\//.test(s) && !CESKA_PISMENA.test(s)
}

/**
 * Slova, která se v cílovém jazyce píšou stejně jako česky.
 *
 * Je jich pár a jsou to výpůjčky nebo latina. Musí být vyjmenovaná,
 * protože jinak by test neuměl odlišit „stejné schválně“ od „zapomněl
 * jsem přeložit“, a to druhé je ta chyba, kterou má chytat. Zkratky
 * v seznamu nejsou, ty řeší `zkratka()`.
 */
const STEJNE: Record<'en' | 'de', string[]> = {
  en: [
    'Partner',
    'Partner mode',
    '# min',
    'Tip:',
    'Trigger',
    'Transfer',
    'Transfer {}',
    'Checklist',
    '✓ Checklist',
    'Hydrosalpinx',
    'Mindfulness',
    'Gel',
    'partner',
    'Text',
  ],
  de: [
    'Profil',
    'Partner',
    'Trigger',
    'Transfer',
    'Transfer {}',
    'Energie',
    'Hydrosalpinx',
    'Gel',
    'Datum',
    // Lékařské názvy, které čeština i němčina přejaly z latiny stejně.
    'Prolaktin',
    'Progesteron',
    'Hysteroskopie',
    'Archiv',
    'Antibiotika',
    'Letrozol',
    'Prednison',
    'Levothyroxin',
    'Kategorie',
    'Text',
  ],
}

test('žádný překlad nezůstal nepřeložený', () => {
  // Nejčastější chyba při psaní slovníku: zkopíruje se klíč a zapomene
  // se přeložit. Pozná se podle toho, že se hodnota rovná klíči.
  for (const [jm, slovnik] of [['en', EN], ['de', DE]] as const) {
    const stejne = Object.entries(slovnik)
      .filter(([k, v]) => k === v)
      .map(([k]) => k)
      .filter((k) => !STEJNE[jm].includes(k) && !zkratka(k) && !sJednotkou(k))
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

test('překlad si nechá zvýraznění i místa pro čísla', () => {
  /*
   * Dvě věci se v překladu snadno ztratí a ani jedna není vidět ve
   * slovníku, jen v hotové obrazovce.
   *
   * `**zvýraznění**` se v `note()` mění na `<strong>`. Když v překladu
   * jedna hvězdička chybí, zbytek odstavce se vysází tučně nebo se
   * hvězdičky ukážou ženě.
   *
   * Mřížka zastupuje číslo. Když se v překladu vynechá, zmizí z věty
   * číslo („# z # hotovo“ bez mřížky je prostě „done“). Když přebude,
   * zůstane ve větě mřížka, protože `prelozVetu` doplňuje čísla
   * v pořadí a na přebytek už žádné nemá.
   */
  for (const [jm, slovnik] of [['en', EN], ['de', DE]] as const) {
    for (const [klic, preklad] of Object.entries(slovnik)) {
      const kolik = (s: string, co: RegExp) => (s.match(co) ?? []).length
      assert.equal(
        kolik(preklad, /\*\*/g),
        kolik(klic, /\*\*/g),
        `${jm}: „${klic}“ má jiný počet hvězdiček než překlad`,
      )
      assert.equal(
        kolik(preklad, /#/g),
        kolik(klic, /#/g),
        `${jm}: „${klic}“ má jiný počet mřížek než překlad`,
      )
      // Prázdná místa `{}` doplňuje `vzor()` v pořadí. Když v překladu
      // jedno chybí, zmizí z věty datum nebo jméno. Když přebude,
      // zůstane v ní prázdná složená závorka.
      assert.equal(
        kolik(preklad, /\{\}/g),
        kolik(klic, /\{\}/g),
        `${jm}: „${klic}“ má jiný počet prázdných míst než překlad`,
      )
    }
  }
})
