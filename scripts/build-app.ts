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
import { readFileSync, writeFileSync, mkdirSync, statSync } from 'node:fs'
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

  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf8')

  const kb = (n: number) => `${Math.round(n / 1024)} kB`
  console.log(`Aplikace zapsána: ${outPath} (${kb(statSync(outPath).size)})`)
  console.log(`  kód:    ${kb(Buffer.byteLength(js))} (jádro, doporučování a celá knihovna obsahu)`)
  console.log(`  styl:   ${kb(Buffer.byteLength(css))}`)
  console.log(`  písmo:  ${kb(Buffer.byteLength(fonts))}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
