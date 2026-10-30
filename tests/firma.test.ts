import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

/**
 * Identifikace provozovatele.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Údaje o firmě jsou na pěti místech ve třech dokumentech a v patičce dvou
 * stránek. Když se jedno z nich opraví a ostatní ne, dokumenty si navzájem
 * odporují. U obchodních podmínek to není kosmetika: podle nich se pozná,
 * s kým zákaznice vlastně uzavírá smlouvu a komu posílá odstoupení.
 *
 * Hlídá se i to, že se do identifikačního bloku nevrátí zástupný text.
 * Zveřejněné podmínky, ve kterých stojí DOPLNIT místo IČO, jsou horší než
 * žádné: vypadají hotově a přitom neidentifikují nikoho.
 */

const ICO = '04153235'
const FIRMA = 'Open tennis group s.r.o.'
const SIDLO = 'Majerského 2047/1, Chodov, 149 00 Praha'
const SPISOVA_ZNACKA = 'oddíl C, vložka 243336'

const DOKUMENTY = path.join(process.cwd(), 'landing/dokumenty')

function pravniTexty(): { jmeno: string; text: string }[] {
  const soubory = readdirSync(DOKUMENTY)
    .filter((n) => n.endsWith('.html'))
    .map((n) => ({ jmeno: `dokumenty/${n}`, text: readFileSync(path.join(DOKUMENTY, n), 'utf8') }))

  for (const n of ['landing/index.src.html', 'landing/dokument.src.html']) {
    soubory.push({ jmeno: n, text: readFileSync(path.join(process.cwd(), n), 'utf8') })
  }
  return soubory
}

test('IČO a sídlo jsou všude stejné', () => {
  const spatne: string[] = []

  for (const { jmeno, text } of pravniTexty()) {
    // Zdravotní upozornění uvádí jen název, bez IČO. To je v pořádku.
    if (!text.includes(ICO)) continue
    if (!text.includes(FIRMA)) spatne.push(`${jmeno}: je tam IČO, ale chybí název firmy`)
    if (!text.includes(SIDLO)) spatne.push(`${jmeno}: je tam IČO, ale sídlo nesedí`)
  }

  assert.deepEqual(spatne, [], spatne.join('\n'))
})

test('každý právní dokument říká, kdo službu provozuje', () => {
  const bez: string[] = []
  for (const { jmeno, text } of pravniTexty()) {
    if (!jmeno.startsWith('dokumenty/')) continue
    if (!text.includes(FIRMA)) bez.push(jmeno)
  }
  assert.deepEqual(bez, [], `dokument neuvádí provozovatele: ${bez.join(', ')}`)
})

/**
 * Obchodní podmínky musí nést spisovou značku.
 *
 * Bez ní se společnost s ručením omezeným neidentifikuje úplně a podle
 * zákona o obchodních korporacích ji podnikatel na svých dokumentech uvádět
 * má. U zásad ochrany údajů ji GDPR nevyžaduje, tam stačí název, IČO a sídlo.
 */
test('obchodní podmínky uvádějí zápis v obchodním rejstříku', () => {
  const vop = readFileSync(path.join(DOKUMENTY, 'obchodni-podminky.html'), 'utf8')
  assert.match(vop, /Městským soudem v Praze/, 'chybí rejstříkový soud')
  assert.ok(vop.includes(SPISOVA_ZNACKA), `chybí spisová značka ${SPISOVA_ZNACKA}`)
})

/**
 * Zástupný text smí zůstat kdekoli jinde, jen ne v identifikaci.
 *
 * Ostatní placeholdery čekají na rozhodnutí (platební brána, datum
 * účinnosti, lhůty) a je poctivé, že jsou vidět. Identifikační blok je ale
 * to první, co kontroluje úřad i zákaznice.
 */
test('v identifikačním bloku nezůstal zástupný text', () => {
  const spatne: string[] = []
  for (const { jmeno, text } of pravniTexty()) {
    const blok = text.match(/<div class="udaje">[\s\S]*?<\/div>/)
    if (!blok) continue
    for (const radek of blok[0].split('\n')) {
      if (!/DOPLNIT/.test(radek)) continue
      // Datum účinnosti a verze se doplní až při spuštění, ty se tolerují.
      if (/Účinnost|Verze|Pověřenec/.test(radek)) continue
      spatne.push(`${jmeno}: ${radek.trim().slice(0, 90)}`)
    }
  }
  assert.deepEqual(spatne, [], spatne.join('\n'))
})

/**
 * Autorka obsahu není totéž co provozovatel.
 *
 * Obsah píše Gabriela, smlouvu uzavírá firma. Kdyby se její jméno ocitlo
 * vedle cizího IČO, byl by to nepravdivý údaj. V patičce proto stojí obojí,
 * každé ve své roli.
 */
test('patička odlišuje provozovatele od autorky obsahu', () => {
  for (const n of ['landing/index.src.html', 'landing/dokument.src.html']) {
    const text = readFileSync(path.join(process.cwd(), n), 'utf8')
    assert.match(text, /<h3>Provozovatel<\/h3>/, `${n}: patička neuvádí provozovatele`)
    assert.match(text, /Autorka obsahu: Ing\. Gabriela Černá/, `${n}: chybí autorka obsahu`)
    assert.ok(
      !/Ing\. Gabriela Černá<\/li>\s*\n\s*<li>IČO/.test(text),
      `${n}: IČO je uvedené u jména fyzické osoby, ne u firmy`,
    )
  }
})

/**
 * Ženský rod u provozovatele.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Dokumenty původně mluvily o poskytovatelce a správkyni, protože službu
 * měla provozovat fyzická osoba. Provozovatelem je společnost, takže se rod
 * musel změnit v celém textu. Napoprvé jsem to přehlédl na devíti místech:
 * náhrada běžela jen na malé písmeno a „Poskytovatelka“ po tečce zůstala.
 * Kontrolní hledání mělo stejnou vadu, takže chybu nenašlo.
 *
 * Pozor na záměnu: „uživatelka“ je ženského rodu správně a zůstává.
 * Aplikaci používají ženy a mluví se s nimi tak, jak jim patří. Tenhle test
 * hlídá jen tvary, které označují provozovatele.
 */
test('o provozovateli se nikde nemluví v ženském rodě', () => {
  const tvary = /(poskytovatelk|správkyn|provozovatelk|plátkyn)/i
  const nalezy: string[] = []

  for (const { jmeno, text } of pravniTexty()) {
    text.split('\n').forEach((radek, i) => {
      if (tvary.test(radek)) nalezy.push(`${jmeno}:${i + 1}  ${radek.trim().slice(0, 80)}`)
    })
  }

  assert.deepEqual(nalezy, [], `zbyl ženský rod u provozovatele:\n${nalezy.join('\n')}`)
})

/**
 * Cena u neplátce DPH.
 *
 * Neplátce nesmí uvádět cenu „bez DPH“ ani „včetně DPH“, protože daň
 * nevyčísluje. Musí být naopak jasné, že je cena konečná. Pokud se stav
 * plátcovství někdy změní, spadne tenhle test a připomene, že se to musí
 * přepsat na třech místech, ne na jednom.
 */
test('obchodní podmínky říkají, že poskytovatel není plátcem DPH', () => {
  const vop = readFileSync(path.join(DOKUMENTY, 'obchodni-podminky.html'), 'utf8')

  assert.match(vop, /není plátcem daně z přidané hodnoty/, 'chybí ustanovení o DPH')
  assert.match(vop, /cena je konečná/i, 'chybí údaj, že je cena konečná')
  assert.ok(
    !/(?:včetně|bez) DPH/i.test(vop),
    'neplátce nesmí uvádět cenu včetně nebo bez DPH, daň nevyčísluje',
  )
})

test('cena je označená jako konečná i tam, kde ji zákaznice vidí', () => {
  const stranka = readFileSync(path.join(process.cwd(), 'landing/index.src.html'), 'utf8')
  const aplikace = readFileSync(path.join(process.cwd(), 'src/client/screens-more.ts'), 'utf8')

  assert.match(stranka, /Nejsme plátci DPH/i, 'prodejní stránka neuvádí stav plátcovství')
  assert.match(aplikace, /nejsme plátci DPH/i, 'obrazovka Předplatné neuvádí stav plátcovství')
})
