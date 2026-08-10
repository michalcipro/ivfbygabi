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

  const js = bundle.outputFiles[0].text
  const css = read(join(ROOT, 'src', 'client', 'app.css'))
  const fonts = read(join(ROOT, 'scripts', 'fonts.css'))
  const template = read(join(ROOT, 'scripts', 'app.template.html'))

  const html = template
    .replace('/*__FONTS__*/', () => safeForStyle(fonts))
    .replace('/*__CSS__*/', () => safeForStyle(css))
    .replace('/*__APP__*/', () => safeForScript(js))

  const outDir = dirname(outPath)
  mkdirSync(outDir, { recursive: true })
  writeFileSync(outPath, html, 'utf8')

  // Manifest a ikony leží vedle aplikace, ne uvnitř ní: prohlížeč si je
  // musí umět stáhnout samostatně, aby šla přidat na plochu.
  const pubDir = join(ROOT, 'public')
  let zkopirovano = 0
  try {
    for (const name of readdirSync(pubDir)) {
      if (statSync(join(pubDir, name)).isDirectory()) continue
      copyFileSync(join(pubDir, name), join(outDir, name))
      zkopirovano++
    }
  } catch {
    // Bez `public/` se aplikace pořád otevře, jen nepůjde přidat na plochu.
  }

  /**
   * Otisk hotové aplikace.
   *
   * Service worker se musí při každé změně aplikace lišit, jinak prohlížeč
   * novou verzi nikdy nenabídne a uživatelky by zůstaly na té staré napořád.
   * Otisk obsahu to zaručí bez ručního číslování verzí.
   */
  const otisk = createHash('sha256').update(html).digest('hex').slice(0, 16)
  const swTemplate = read(join(ROOT, 'scripts', 'sw.template.js'))
  if (swTemplate) writeFileSync(join(outDir, 'sw.js'), swTemplate.replace('__VERZE__', otisk), 'utf8')

  const kb = (n: number) => `${Math.round(n / 1024)} kB`
  console.log(`Aplikace zapsána: ${outPath} (${kb(statSync(outPath).size)})`)
  console.log(`  kód:    ${kb(Buffer.byteLength(js))} (jádro, doporučování a celá knihovna obsahu)`)
  console.log(`  styl:   ${kb(Buffer.byteLength(css))}`)
  console.log(`  písmo:  ${kb(Buffer.byteLength(fonts))}`)
  console.log(`  vedle:  ${zkopirovano} souborů z public/, sw.js s otiskem ${otisk}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
