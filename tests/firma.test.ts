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

const ICO = '21134154'
const FIRMA = 'Gabriela Cipro'
const SIDLO = 'V Jezerech 311, Braškov 273 51'

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
 * Podnikající fyzická osoba se zapisuje do živnostenského rejstříku.
 *
 * Podle § 435 občanského zákoníku musí podnikatel na svých dokumentech
 * uvést údaj o zápisu. U společnosti to byla spisová značka a rejstříkový
 * soud, u živnostnice je to živnostenský rejstřík. Zmínka o obchodním
 * rejstříku by tu teď byla nepravdivá.
 */
test('obchodní podmínky uvádějí zápis v živnostenském rejstříku', () => {
  const vop = readFileSync(path.join(DOKUMENTY, 'obchodni-podminky.html'), 'utf8')
  assert.match(vop, /živnostensk\S*\s+rejstřík/, 'chybí údaj o zápisu')
  assert.ok(
    !/obchodním rejstříku|Městským soudem/.test(vop),
    'fyzická osoba se do obchodního rejstříku nezapisuje',
  )
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
 * V patičce stojí provozovatelka i její IČO.
 *
 * Dřív tu byl samostatný řádek s autorkou obsahu, protože službu
 * provozovala společnost a obsah psal někdo jiný. Teď je to tatáž osoba,
 * takže by ten řádek jen opakoval jméno o dva řádky výš.
 */
test('patička uvádí provozovatelku', () => {
  // Prodejní stránka nese patičku přímo, šablona dokumentu ji skládá ze
  // slovníku v sestavení, protože se liší jazyk od jazyka. Kontroluje se
  // proto zdroj i ten slovník: v obojím musí jméno a IČO být.
  const text = readFileSync(path.join(process.cwd(), 'landing/index.src.html'), 'utf8')
  assert.match(text, /<h3>Provozovatelka<\/h3>/, 'patička neuvádí provozovatelku')
  assert.ok(text.includes(FIRMA), 'chybí jméno provozovatelky')
  assert.ok(text.includes(ICO), 'chybí IČO')
  assert.ok(!/Autorka obsahu/.test(text), 'zbytečný řádek s autorkou obsahu')

  // Jméno drží šablona, IČO a sídlo slovník v sestavení: ty se překládají.
  const sablona = readFileSync(path.join(process.cwd(), 'landing/dokument.src.html'), 'utf8')
  assert.ok(sablona.includes(FIRMA), 'šablona dokumentu: chybí jméno provozovatelky')
  assert.ok(sablona.includes('__UDAJE__'), 'šablona dokumentu nemá kam údaje vložit')
  assert.ok(!/Autorka obsahu/.test(sablona), 'zbytečný řádek s autorkou obsahu')

  const build = readFileSync(path.join(process.cwd(), 'scripts/build-landing.ts'), 'utf8')
  const jazyku = build.split(ICO).length - 1
  assert.ok(jazyku >= 3, `sestavení: IČO chybí v patičce některého jazyka (nalezeno ${jazyku}x)`)
})

/**
 * Mužský rod u provozovatelky.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Službu provozovala nejdřív fyzická osoba, pak společnost, a teď zase
 * fyzická osoba. Rod se tím v celém textu překlopil dvakrát a pokaždé
 * něco zbylo: poprvé devět tvarů, které náhrada minula, protože běžela jen
 * na malé písmeno. Ručně se to uhlídat nedá.
 *
 * Nesmí to ale křičet na hosting a platební služby. Ty poskytují firmy
 * a mužský rod u nich je správně, proto se slovo posuzuje i s tím, co po
 * něm následuje. „Uživatelka“ se sem taky nepočítá, ta je ženského rodu
 * správně: aplikaci používají ženy a mluví se s nimi tak, jak jim patří.
 */
test('o provozovatelce se nikde nemluví v mužském rodě', () => {
  // Hosting, platby a připojení zajišťují firmy, tam mužský rod zůstává.
  const cizi = /(hostingu|plateb|platebních|připojení|mimo Evropský|tímto)/
  const nase = /\b(poskytovatel|poskytovatele|poskytovateli|poskytovatelem|správce|správci|správcem|provozovatel|provozovatele|plátce|plátcem)\b/i

  const nalezy: string[] = []
  for (const { jmeno, text } of pravniTexty()) {
    text.split('\n').forEach((radek, i) => {
      const m = radek.match(nase)
      if (!m) return
      // Kus věty za nalezeným slovem rozhodne, o koho jde.
      const za = radek.slice(radek.indexOf(m[0]) + m[0].length, radek.indexOf(m[0]) + m[0].length + 30)
      if (cizi.test(za) || cizi.test(radek.slice(Math.max(0, radek.indexOf(m[0]) - 12), radek.indexOf(m[0])))) return
      nalezy.push(`${jmeno}:${i + 1}  ${radek.trim().slice(0, 80)}`)
    })
  }

  assert.deepEqual(nalezy, [], `zbyl mužský rod u provozovatelky:\n${nalezy.join('\n')}`)
})

/**
 * Cena u neplátce DPH.
 *
 * Neplátce nesmí uvádět cenu „bez DPH“ ani „včetně DPH“, protože daň
 * nevyčísluje. Musí být naopak jasné, že je cena konečná. Pokud se stav
 * plátcovství někdy změní, spadne tenhle test a připomene, že se to musí
 * přepsat na třech místech, ne na jednom.
 */
test('obchodní podmínky říkají, že poskytovatelka není plátkyní DPH', () => {
  const vop = readFileSync(path.join(DOKUMENTY, 'obchodni-podminky.html'), 'utf8')

  assert.match(vop, /není plátkyní daně z přidané hodnoty/, 'chybí ustanovení o DPH')
  assert.match(vop, /cena je konečná/i, 'chybí údaj, že je cena konečná')
  assert.ok(
    !/(?:včetně|bez) DPH/i.test(vop),
    'neplátce nesmí uvádět cenu včetně nebo bez DPH, daň nevyčísluje',
  )
})

test('cena je označená jako konečná i tam, kde ji zákaznice vidí', () => {
  const stranka = readFileSync(path.join(process.cwd(), 'landing/index.src.html'), 'utf8')
  const aplikace = readFileSync(path.join(process.cwd(), 'src/client/screens-more.ts'), 'utf8')

  assert.match(stranka, /Nejsem plátkyně DPH/i, 'prodejní stránka neuvádí stav plátcovství')
  assert.match(aplikace, /nejsem plátkyně DPH/i, 'obrazovka Předplatné neuvádí stav plátcovství')
})

/**
 * Kontaktní adresa.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Adresa, na kterou chodí zpětná vazba a odstoupení od smlouvy, je na
 * sedmnácti místech: v aplikaci, v patičce tří jazykových verzí stránky
 * a v devíti právních dokumentech. Když se jedno z nich opraví a ostatní
 * ne, obchodní podmínky uvádějí adresu, kterou nikdo nečte, a odstoupení
 * poslané na ni je právně poslané. Proto se hlídá, že je všude stejná.
 *
 * V kódu aplikace smí stát jen jednou, v `KOMU`. Druhá opsaná adresa je
 * přesně ten případ, kdy se po příští změně rozejdou.
 */
test('kontaktní adresa je všude stejná a v kódu jen na jednom místě', () => {
  const ADRESA = 'hello@mybloomia.com'
  const KOREN = process.cwd()

  // 1. V kódu aplikace jen jako jediná konstanta.
  const klient = path.join(KOREN, 'src/client')
  const opsane: string[] = []
  for (const jmeno of readdirSync(klient).filter((n) => n.endsWith('.ts'))) {
    const text = readFileSync(path.join(klient, jmeno), 'utf8')
    const kolik = (text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) ?? []).length
    if (kolik === 0) continue
    if (jmeno === 'feedback-send.ts' && kolik === 1) continue
    opsane.push(`${jmeno} (${kolik}×)`)
  }
  assert.deepEqual(
    opsane,
    [],
    `e-mail patří jen do KOMU ve feedback-send.ts, jinde se opsaná adresa rozejde:\n${opsane.join('\n')}`,
  )

  const zdroj = readFileSync(path.join(klient, 'feedback-send.ts'), 'utf8')
  assert.match(zdroj, new RegExp(`export const KOMU = '${ADRESA}'`), 'KOMU má jinou adresu')

  // 2. Žádný dokument ani stránka nesmí uvádět jinou.
  const stranky = readdirSync(path.join(KOREN, 'landing'))
    .filter((n) => n.endsWith('.html'))
    .map((n) => ({ jmeno: `landing/${n}`, text: readFileSync(path.join(KOREN, 'landing', n), 'utf8') }))
  const jine: string[] = []
  for (const { jmeno, text } of [...stranky, ...pravniTexty()]) {
    for (const nalez of text.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi) ?? []) {
      if (nalez.toLowerCase() !== ADRESA) jine.push(`${jmeno}: ${nalez}`)
    }
  }
  assert.deepEqual(jine, [], `cizí kontaktní adresa:\n${jine.join('\n')}`)

  // 3. A musí tam doopravdy být, ne jen chybět.
  for (const { jmeno, text } of pravniTexty()) {
    if (jmeno.includes('zdravotni-upozorneni') || jmeno.includes('medical') || jmeno.includes('medizinisch')) continue
    assert.ok(text.includes(ADRESA), `${jmeno} neuvádí kontaktní adresu`)
  }
})
