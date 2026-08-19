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
      if (!/^(icon|apple-touch-icon|favicon|og|robots|sitemap)/.test(name)) continue
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

  dokumenty(fonts)
  obnova(fonts)
}

/**
 * Stránka pro obnovu aplikace.
 *
 * Bydlí schválně v kořeni, ne v `/app/`. Service worker aplikace má
 * působnost jen nad svojí složkou, takže na tuhle stránku nedosáhne a vždy
 * se stáhne ze serveru. To je celý smysl: když se v aplikaci zasekne stará
 * verze, tohle je jediná cesta, jak zvenčí sáhnout dovnitř a kopii zahodit.
 * Kdyby stránka ležela vedle aplikace, obsluhovala by ji ta samá zaseknutá
 * verze a byla by k ničemu.
 */
function obnova(fonts: string): void {
  const sablona = read(join(ROOT, 'landing', 'oprava.src.html'))
  if (!sablona) throw new Error('landing/oprava.src.html chybí')
  const html = sablona.replace('/*__FONTS__*/', () => fonts)
  const cesta = join(OUT, 'oprava.html')
  writeFileSync(cesta, html, 'utf8')
  console.log(`  obnova:   oprava.html (${Math.round(Buffer.byteLength(html) / 1024)} kB)`)
}

/** Údaje z hlavičky dokumentu. */
interface DokMeta {
  nadpis: string
  podnadpis: string
  popis: string
  adresa: string
}

/**
 * Právní dokumenty.
 *
 * Každý soubor v `landing/dokumenty/` nese v komentáři nahoře svoje údaje
 * a pod nimi už jen tělo textu. Obal, písma, lišta i patička jsou společné,
 * aby podmínky nevypadaly jako jiný web než stránka, ze které se na ně
 * kliklo.
 *
 * Odkazy mezi dokumenty se skládají tady, ne ručně v textu. Dokument, na
 * kterém uživatelka právě je, se v patičce nezobrazí jako odkaz sám na
 * sebe, ale jako obyčejný text. Odkaz, který nikam nevede, je horší než
 * žádný.
 */
function dokumenty(fonts: string): void {
  const sablona = read(join(ROOT, 'landing', 'dokument.src.html'))
  if (!sablona) throw new Error('landing/dokument.src.html chybí')

  const zdrojDir = join(ROOT, 'landing', 'dokumenty')
  let jmena: string[]
  try {
    jmena = readdirSync(zdrojDir).filter((n) => n.endsWith('.html')).sort()
  } catch {
    console.log('  dokumenty: složka landing/dokumenty chybí, přeskočeno')
    return
  }

  const nactene = jmena.map((name) => {
    const cely = readFileSync(join(zdrojDir, name), 'utf8')
    const hlavicka = cely.match(/<!--\s*meta\s*([\s\S]*?)-->/)
    if (!hlavicka) throw new Error(`${name}: chybí hlavička <!-- meta -->`)
    const meta = Object.fromEntries(
      hlavicka[1]
        .split('\n')
        .map((r) => r.trim())
        .filter(Boolean)
        .map((r) => {
          const i = r.indexOf(':')
          return [r.slice(0, i).trim(), r.slice(i + 1).trim()]
        }),
    ) as unknown as DokMeta
    for (const klic of ['nadpis', 'podnadpis', 'popis', 'adresa'] as const) {
      if (!meta[klic]) throw new Error(`${name}: v hlavičce chybí ${klic}`)
    }
    return { meta, telo: cely.slice(hlavicka[0].length + hlavicka.index!).trim() }
  })

  const odkaz = (cil: DokMeta, tady: boolean): string =>
    tady
      ? `<span class="tady">${cil.nadpis} (jste tady)</span>`
      : `<a href="/${cil.adresa}">${cil.nadpis}</a>`

  const podleAdresy = (a: string) => nactene.find((d) => d.meta.adresa === a)?.meta

  const vop = podleAdresy('obchodni-podminky')
  const gdpr = podleAdresy('ochrana-osobnich-udaju')
  const zdravi = podleAdresy('zdravotni-upozorneni')

  for (const { meta, telo } of nactene) {
    const html = sablona
      .replace('/*__FONTS__*/', () => fonts)
      .split('__NADPIS__').join(meta.nadpis)
      .split('__PODNADPIS__').join(meta.podnadpis)
      .split('__POPIS__').join(meta.popis)
      .split('__ADRESA__').join(meta.adresa)
      .replace('__ODKAZ_VOP__', () => (vop ? odkaz(vop, vop === meta) : ''))
      .replace('__ODKAZ_GDPR__', () => (gdpr ? odkaz(gdpr, gdpr === meta) : ''))
      .replace('__ODKAZ_ZDRAVI__', () => (zdravi ? odkaz(zdravi, zdravi === meta) : ''))
      .replace('__OBSAH__', () => telo)

    const cesta = join(OUT, `${meta.adresa}.html`)
    writeFileSync(cesta, html, 'utf8')
    console.log(`  dokument: ${meta.adresa}.html (${Math.round(Buffer.byteLength(html) / 1024)} kB)`)
  }
}

main()
