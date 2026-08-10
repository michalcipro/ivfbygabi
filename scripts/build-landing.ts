/**
 * Sestavení prodejní stránky.
 *
 *   npm run landing            → web/index.html + web/snimky/
 *   npm run landing -- --inline → web/index-vcelku.html (všechno v jednom souboru)
 *
 * Stránka sdílí písma s aplikací, takže se `scripts/fonts.css` vkládá stejně
 * jako do aplikace. Bez toho by se prodejní stránka vysázela náhradním písmem
 * a rozešla by se se značkou dřív, než na ni někdo klikne.
 *
 * Snímky obrazovek zůstávají jako samostatné soubory. Prodejní stránka se
 * načítá z reklamy a z vyhledávání, takže se počítá každá stovka kilobajtů:
 * obrázky pod ohybem se díky tomu stáhnou až ve chvíli, kdy na ně přijde řada.
 * Varianta `--inline` je jen na náhled a na posílání z ruky.
 */

import { copyFileSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const OUT = join(ROOT, 'web')

function read(path: string): string {
  try {
    return readFileSync(path, 'utf8')
  } catch {
    return ''
  }
}

function main() {
  const vcelku = process.argv.includes('--inline')

  const sablona = read(join(ROOT, 'landing', 'index.src.html'))
  if (!sablona) throw new Error('landing/index.src.html chybí')
  const fonts = read(join(ROOT, 'scripts', 'fonts.css'))

  let html = sablona.replace('/*__FONTS__*/', () => fonts)

  mkdirSync(join(OUT, 'snimky'), { recursive: true })

  const snimkyDir = join(ROOT, 'landing', 'snimky')
  let obrazku = 0
  for (const name of readdirSync(snimkyDir)) {
    if (statSync(join(snimkyDir, name)).isDirectory()) continue
    if (vcelku) {
      // Do jednoho souboru se obrázky vkládají jako data URI. Roste tím
      // o třetinu, ale stránka pak nemá jedinou vnější závislost.
      const b64 = readFileSync(join(snimkyDir, name)).toString('base64')
      html = html.split(`snimky/${name}`).join(`data:image/jpeg;base64,${b64}`)
    } else {
      copyFileSync(join(snimkyDir, name), join(OUT, 'snimky', name))
    }
    obrazku++
  }

  // Ikony a manifest sdílí stránka s aplikací, ať je značka na obou místech
  // stejná i na kartě prohlížeče.
  const pubDir = join(ROOT, 'public')
  let ikon = 0
  try {
    for (const name of readdirSync(pubDir)) {
      if (statSync(join(pubDir, name)).isDirectory()) continue
      if (!/^(icon|apple-touch-icon|favicon|og)/.test(name)) continue
      copyFileSync(join(pubDir, name), join(OUT, name))
      ikon++
    }
  } catch {
    // Bez ikon se stránka otevře, jen bude mít prázdnou kartu prohlížeče.
  }

  const outPath = join(OUT, vcelku ? 'index-vcelku.html' : 'index.html')
  writeFileSync(outPath, html, 'utf8')

  const kb = (n: number) => `${Math.round(n / 1024)} kB`
  console.log(`Stránka zapsána: ${outPath} (${kb(statSync(outPath).size)})`)
  console.log(`  písmo:  ${kb(Buffer.byteLength(fonts))}`)
  console.log(`  snímky: ${obrazku}${vcelku ? ' (vložené do stránky)' : ' souborů vedle'}`)
  console.log(`  ikony:  ${ikon}`)
}

main()
