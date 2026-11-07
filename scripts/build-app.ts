/**
 * Sestavení prohlížečové verze aplikace.
 *
 *   npm run app            → app/index.html
 *
 * Není to maketa ani export dat. Do stránky se sbalí skutečné doménové jádro,
 * skutečný doporučovací systém a celá knihovna obsahu. A v prohlížeči se pak
 * počítá živě, ze skutečného dnešního data a z profilu, který si uživatelka
 * vyplní v onboardingu. Proto se to dá otevřít i tam, kde neběží Node.
 */

import { build } from 'esbuild'
import { createHash } from 'node:crypto'
import { copyFileSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'

const ROOT = process.cwd()

function read(path: string): string {
  try {
    return readFileSync(path, 'utf8')
  } catch {
    return ''
  }
}

/** Aby text uvnitř bundlu nemohl předčasně ukončit `<script>` nebo `<style>`. */
const safeForScript = (js: string) => js.replace(/<\/script/gi, '<\\/script')
const safeForStyle = (css: string) => css.replace(/<\/style/gi, '<\\/style')

/** Čas sestavení v ISO tvaru, na minuty. Sekundy nikoho nezajímají. */
function razitko(): string {
  return `${new Date().toISOString().slice(0, 16).replace('T', ' ')} UTC`
}

/**
 * Jazyky aplikace.
 *
 * Balík se skládá jednou a zapíše se třikrát. Mezi jazyky se liší jediný
 * token, takže překládat esbuildem třikrát totéž by byl jen ztracený čas.
 *
 * Každý jazyk má vlastní složku, vlastní service worker a vlastní otisk.
 * Záznamy se tím nerozdělí: `localStorage` patří k doméně, ne ke složce,
 * takže přepnutí jazyka je obyčejný odkaz a data zůstanou, kde byla.
 */
const JAZYKY = [
  { kod: 'cs', slozka: '' },
  { kod: 'en', slozka: 'en' },
  { kod: 'de', slozka: 'de' },
]

async function main() {
  // index.html, aby se dala složka `app/` rovnou hostovat jako statický web.
  const outPath = process.argv[2] ?? join(ROOT, 'app', 'index.html')

  const bundle = await build({
    entryPoints: [join(ROOT, 'src', 'client', 'main.ts')],
    bundle: true,
    write: false,
    format: 'iife',
    platform: 'browser',
    target: ['es2020'],
    minify: true,
    legalComments: 'none',
    charset: 'utf8',
    define: { 'process.env.NODE_ENV': '"production"' },
  })

  /*
   * Veřejný klíč k ověřování lístků předplatného.
   *
   * Není tajný, ověřovat se jím dá, podepisovat ne. Zapéká se do aplikace
   * z proměnné prostředí, takže se dá vyměnit bez zásahu do kódu. Když
   * chybí, aplikace se tváří, že placené předplatné neběží, což je ve
   * vývoji i před spuštěním plateb správně.
   */
  const verejnyKlic = (process.env.BLOOMIA_VEREJNY_KLIC ?? '').trim()
  const js = bundle.outputFiles[0].text.split('__VEREJNY_KLIC__').join(verejnyKlic)
  const css = read(join(ROOT, 'src', 'client', 'app.css'))
  const fonts = read(join(ROOT, 'scripts', 'fonts.css'))
  const template = read(join(ROOT, 'scripts', 'app.template.html'))

  const spolecne = template
    .replace('/*__FONTS__*/', () => safeForStyle(fonts))
    .replace('/*__CSS__*/', () => safeForStyle(css))
    .replace('/*__APP__*/', () => safeForScript(js))
    // Razítko sestavení. Musí se doplnit před spočtením otisku, jinak by
    // otisk neodpovídal souboru, který se opravdu zapisuje.
    .replace('__SESTAVENO__', razitko())

  const korenDir = dirname(outPath)
  const swTemplate = read(join(ROOT, 'scripts', 'sw.template.js'))
  const pubDir = join(ROOT, 'public')
  const kb = (n: number) => `${Math.round(n / 1024)} kB`
  let html = spolecne

  for (const jazyk of JAZYKY) {
    const outDir = jazyk.slozka ? join(korenDir, jazyk.slozka) : korenDir
    const cesta = join(outDir, 'index.html')
    const verze = spolecne.split('__JAZYK__').join(jazyk.kod)
    if (jazyk.slozka === '') html = verze
    mkdirSync(outDir, { recursive: true })
    writeFileSync(cesta, verze, 'utf8')

    // Manifest a ikony leží vedle aplikace v každém jazyce zvlášť:
    // service worker má působnost jen nad svojí složkou.
    let kopii = 0
    try {
      for (const name of readdirSync(pubDir)) {
        if (statSync(join(pubDir, name)).isDirectory()) continue
        copyFileSync(join(pubDir, name), join(outDir, name))
        kopii++
      }
    } catch {
      // Bez `public/` se aplikace pořád otevře, jen nepůjde přidat na plochu.
    }

    const otiskJazyka = createHash('sha256').update(verze).digest('hex').slice(0, 16)
    if (swTemplate) {
      writeFileSync(join(outDir, 'sw.js'), swTemplate.replace('__VERZE__', otiskJazyka), 'utf8')
    }
    console.log(
      `  jazyk ${jazyk.kod}: ${jazyk.slozka ? jazyk.slozka + '/' : ''}index.html` +
        ` (${kb(Buffer.byteLength(verze))}, ${kopii} souborů vedle, otisk ${otiskJazyka})`,
    )
  }

  console.log(`Aplikace zapsána: ${outPath} (${kb(statSync(outPath).size)})`)
  console.log(`  kód:    ${kb(Buffer.byteLength(js))} (jádro, doporučování a celá knihovna obsahu)`)
  console.log(`  styl:   ${kb(Buffer.byteLength(css))}`)
  console.log(`  písmo:  ${kb(Buffer.byteLength(fonts))}`)
  console.log(`  klíč:   ${verejnyKlic ? 'veřejný klíč zapečen' : 'bez klíče, předplatné se bude tvářit jako nespuštěné'}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
