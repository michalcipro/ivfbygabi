import test from 'node:test'
import assert from 'node:assert/strict'
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

/**
 * Aby se nová verze dostala k ženě.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Opravená chyba, která se k uživatelce nedostane, je pořád chyba. Tenhle
 * soubor hlídá cestu, po které se nové sestavení dopraví do telefonu.
 * Všechny tři pojistky níž vznikly ze skutečného selhání, ne z opatrnosti,
 * a všechny tři jsou tiché: aplikace se otevře a tváří se, že je v pořádku.
 */

const ROOT = process.cwd()
const cti = (p: string) => readFileSync(path.join(ROOT, p), 'utf8')

/**
 * Relativní `sw.js` znamená něco jiného na `/app/` a na `/app`.
 *
 * Server umí aplikaci vydat na obou adresách. Bez koncového lomítka čte
 * prohlížeč `/app` jako soubor v kořeni, `sw.js` mu vyjde na `/sw.js`,
 * kde nic není, a registrace spadne. Změřeno v prohlížeči: na `/app`
 * skončila výjimkou, na `/app/` prošla. Padne s ní offline režim,
 * přidání na plochu i všechny budoucí aktualizace.
 */
test('service worker se registruje absolutní cestou, ne relativní', () => {
  const kod = cti('src/client/main.ts')

  assert.ok(
    !/\.register\(\s*'sw\.js'/.test(kod),
    'main.ts registruje sw.js relativně. Na adrese bez koncového lomítka se tím service worker nezaregistruje vůbec.',
  )
  assert.ok(
    /\.register\(\s*`\$\{zaklad\}sw\.js`/.test(kod),
    'main.ts musí registrovat sw.js přes zakladniCesta(), aby na adrese nezáleželo.',
  )
})

/**
 * Service worker nesmí umět vracet donekonečna to samé.
 *
 * Když se odpověď bere jen z disku a na síť se už nejde, neexistuje cesta,
 * jak novou verzi dostat dovnitř jinak než výměnou celého service workeru.
 * Ta se u otevřené záložky odkládá, dokud ji někdo nezavře, což u aplikace
 * na ploše telefonu znamená skoro nikdy.
 */
test('service worker si na pozadí vždy stáhne čerstvou kopii', () => {
  const sw = cti('scripts/sw.template.js')

  assert.match(sw, /cache: 'reload'/, 'sw musí obcházet HTTP cache prohlížeče, jinak uloží zase to staré')
  assert.match(sw, /e\.waitUntil\(zeSite\)/, 'stahování na pozadí musí doběhnout i po odeslání odpovědi')
})

/**
 * Poslední záchrana musí ležet mimo dosah aplikace.
 *
 * Service worker aplikace obsluhuje jen svoji složku. Stránka, která má
 * zaseknutou verzi zahodit, proto nesmí bydlet vedle aplikace, jinak ji
 * obsluhuje ta samá zaseknutá verze a je k ničemu.
 */
test('stránka pro obnovu leží mimo složku aplikace a nesahá na data', () => {
  const stranka = cti('landing/oprava.src.html')

  assert.match(stranka, /getRegistrations/, 'obnova musí odpojit service worker')
  assert.match(stranka, /caches\.delete/, 'obnova musí smazat uloženou kopii')
  assert.ok(
    !/localStorage|indexedDB/i.test(stranka),
    'obnova se nesmí dotknout uložených dat ženy',
  )

  const build = cti('scripts/build-landing.ts')
  assert.match(build, /oprava\.html/, 'stránka se musí sestavovat do kořene webu, ne do /app/')
})

/**
 * Ruční aktualizace nesmí mít okamžik, kdy žena nemá žádnou verzi.
 *
 * První podoba tlačítka nejdřív smazala uloženou kopii a teprve pak šla na
 * síť. Mezi tím je mezera, ve které stačí, aby vypadl signál, a v čekárně
 * zůstane prázdná obrazovka. Čerstvá aplikace se proto musí nejdřív
 * stáhnout a teprve pak přepsat tu uloženou.
 */
test('tlačítko aktualizace nejdřív stáhne, teprve pak přepisuje', () => {
  const kod = cti('src/client/main.ts')
  const zacatek = kod.indexOf('async function zaktualizujAplikaci')
  assert.ok(zacatek > 0, 'funkce zaktualizujAplikaci v main.ts chybí')
  const telo = kod.slice(zacatek, kod.indexOf('\n}', zacatek))

  const stazeni = telo.indexOf('await fetch(')
  const zapis = telo.indexOf('prepisUlozenouKopii')
  assert.ok(stazeni > 0 && zapis > 0, 'chybí stažení nebo zápis kopie')
  assert.ok(stazeni < zapis, 'uložená kopie se přepisuje dřív, než je čerstvá verze v ruce')
  assert.ok(
    !telo.includes('zahodUlozenouKopii'),
    'ruční aktualizace nesmí mazat uloženou kopii. Přepis je bezpečný, mazání ne.',
  )
})

/** Bez tlačítka v nastavení není aktualizaci jak vynutit z telefonu. */
test('nastavení nabízí tlačítko na aktualizaci', () => {
  const kod = cti('src/client/screens-more.ts')
  assert.match(kod, /data-act="aktualizovat"/, 'v nastavení chybí tlačítko Zaktualizovat aplikaci')
})

/**
 * Serverové funkce se musí dát načíst, ať je Vercel přeloží jakkoliv.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Kořenový `tsconfig.json` je psaný pro prohlížeč: `module: esnext`,
 * `moduleResolution: bundler`. Podle něj vznikne z funkcí ESM, jenže
 * Vercel je spouští jako CommonJS. Import bez přípony se pak nenačte.
 *
 * Změřeno na nasazeném webu: `FUNCTION_INVOCATION_FAILED` a nic víc.
 * Z té hlášky se příčina nepozná, protože modul spadne dřív, než se vůbec
 * dostane ke kódu, který by chybu uměl popsat.
 *
 * Přípona `.js` u vlastních importů funguje v obou formátech. TypeScript
 * si ji přeloží zpátky na `.ts`, takže ve zdrojáku nic nechybí.
 */
test('serverové funkce importují s příponou .js', () => {
  const dir = path.join(process.cwd(), 'api')

  let soubory: string[]
  try {
    soubory = readdirSync(dir).filter((f) => f.endsWith('.ts'))
  } catch {
    return // Složka api/ zatím není, není co hlídat.
  }

  const spatne: string[] = []
  for (const f of soubory) {
    const kod = readFileSync(path.join(dir, f), 'utf8')
    // Vlastní moduly poznáme podle tečky na začátku cesty.
    for (const m of kod.matchAll(/from '(\.[^']*)'/g)) {
      if (!m[1].endsWith('.js')) spatne.push(`${f}: ${m[1]}`)
    }
  }

  assert.deepEqual(spatne, [], `import bez přípony .js se jako CommonJS nenačte:\n${spatne.join('\n')}`)
})

/** Bez tohohle souboru by Vercel sáhl po kořenovém tsconfigu pro prohlížeč. */
test('složka api má vlastní nastavení pro CommonJS', () => {
  const cesta = path.join(process.cwd(), 'api/tsconfig.json')
  const cfg = JSON.parse(readFileSync(cesta, 'utf8')) as { compilerOptions?: Record<string, unknown> }
  assert.equal(cfg.compilerOptions?.module, 'commonjs', 'api/tsconfig.json musí vynutit commonjs')
})

test('platba nabízí pole na slevový kód', () => {
  // Aplikace nemá účty ani databázi, takže kupón ve Stripe je jediný
  // způsob, jak někoho pustit dovnitř bez placení. Bez tohohle pole se
  // kupón nedá uplatnit a nikdo nedostane přístup zdarma.
  const cesta = path.join(process.cwd(), 'api/checkout.ts')
  if (!existsSync(cesta)) return
  const zdroj = readFileSync(cesta, 'utf8')
  assert.match(zdroj, /allow_promotion_codes:\s*true/)
})
