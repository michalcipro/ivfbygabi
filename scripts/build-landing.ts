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

  const fonts = read(join(ROOT, 'scripts', 'fonts.css'))
  const styl = read(join(ROOT, 'landing', 'styl.css'))
  const skript = read(join(ROOT, 'landing', 'skript.js'))
  if (!styl) throw new Error('landing/styl.css chybí')
  if (!skript) throw new Error('landing/skript.js chybí')

  const sablona = read(join(ROOT, 'landing', 'index.src.html'))
  if (!sablona) throw new Error('landing/index.src.html chybí')

  let html = slozStranku(sablona, fonts, styl, skript)

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

  jazyky(fonts, styl, skript)
  dokumenty(fonts)
  obnova(fonts)
}

/**
 * Jedna stránka, tři jazyky.
 *
 * Styl i skript jsou společné, takže se vkládají ze dvou souborů vedle.
 * Jinak by se při každé úpravě vzhledu musely opravit tři kopie a jazyky
 * by se rozešly dřív, než by si toho kdo všiml.
 */
function slozStranku(sablona: string, fonts: string, styl: string, skript: string): string {
  return sablona
    // Značku pro písma si nese `styl.css` sám, proto se tu nepřidává.
    .replace('<!--__STYL__-->', () => `<style>\n${styl}</style>`)
    .replace('/*__FONTS__*/', () => fonts)
    .replace('<!--__SKRIPT__-->', () => `<script>\n${skript}</script>`)
}

/** Cizojazyčné verze. Každá do vlastní složky, ať adresa říká jazyk. */
function jazyky(fonts: string, styl: string, skript: string): void {
  for (const kod of ['en', 'de']) {
    const sablona = read(join(ROOT, 'landing', `index.${kod}.src.html`))
    if (!sablona) continue
    const html = slozStranku(sablona, fonts, styl, skript)
    mkdirSync(join(OUT, kod), { recursive: true })
    const cesta = join(OUT, kod, 'index.html')
    writeFileSync(cesta, html, 'utf8')
    console.log(`  jazyk:    ${kod}/index.html (${Math.round(Buffer.byteLength(html) / 1024)} kB)`)
  }
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
/**
 * Chrome dokumentu v jednotlivých jazycích.
 *
 * Obal je jeden pro všechny jazyky. Kopírovat ho třikrát i s jeho CSS by
 * znamenalo, že se při každé úpravě musí opravit tři soubory.
 */
interface Rec {
  jazyk: string
  predpona: string
  slozka: string
  stitek: string
  zpet: string
  dokumenty: string
  provozovatelka: string
  udaje: string
  pravni: string
}

const RECI: Rec[] = [
  {
    jazyk: 'cs', predpona: '', slozka: '',
    stitek: 'Dokument', zpet: 'Zpět na BlooMia',
    dokumenty: 'Dokumenty', provozovatelka: 'Provozovatelka',
    udaje: '          <li>IČO: 21134154</li>\n          <li>Sídlo: V Jezerech 311, Braškov 273 51</li>',
    pravni: `      <p>
        BlooMia je vzdělávací a organizační nástroj. <strong>Není zdravotnický
        prostředek</strong> a neslouží k diagnostice, prevenci ani léčbě.
        Nenahrazuje péči vaší kliniky.
      </p>
      <p>
        Když je vám těžko a potřebujete mluvit hned, linka důvěry
        <strong>116 123</strong> je zdarma, nonstop a anonymně.
      </p>
      <p><a href="/">Zpět na BlooMia</a></p>`,
  },
  {
    jazyk: 'en', predpona: 'en/', slozka: 'en',
    stitek: 'Document', zpet: 'Back to BlooMia',
    dokumenty: 'Documents', provozovatelka: 'Operator',
    udaje: '          <li>Company ID: 21134154</li>\n          <li>Registered address: V Jezerech 311, Braškov 273 51, Czech Republic</li>',
    pravni: `      <p>
        BlooMia is an educational and organisational tool. <strong>It is not a
        medical device</strong> and is not intended for diagnosis, prevention
        or treatment. It does not replace the care of your clinic.
      </p>
      <p>
        If things get heavy and you need to talk right now, <strong>116
        123</strong> is the free, round-the-clock, anonymous emotional support
        line in the Czech Republic. Outside the Czech Republic, look up your
        local crisis line.
      </p>
      <p><a href="/en/">Back to BlooMia</a></p>`,
  },
  {
    jazyk: 'de', predpona: 'de/', slozka: 'de',
    stitek: 'Dokument', zpet: 'Zurück zu BlooMia',
    dokumenty: 'Dokumente', provozovatelka: 'Betreiberin',
    udaje: '          <li>Firmennummer (IČO): 21134154</li>\n          <li>Sitz: V Jezerech 311, Braškov 273 51, Tschechien</li>',
    pravni: `      <p>
        BlooMia ist ein Werkzeug zum Lernen und Ordnen. <strong>Sie ist kein
        Medizinprodukt</strong> und dient weder der Diagnose noch der
        Vorbeugung oder Behandlung. Sie ersetzt die Betreuung Ihrer Klinik nicht.
      </p>
      <p>
        Wenn es Ihnen schwer wird und Sie sofort sprechen möchten:
        <strong>116 123</strong> ist in Tschechien die kostenlose, anonyme
        Seelsorge rund um die Uhr. Außerhalb Tschechiens suchen Sie bitte
        Ihre örtliche Krisennummer.
      </p>
      <p><a href="/de/">Zurück zu BlooMia</a></p>`,
  },
]

function dokumenty(fonts: string): void {
  const sablona = read(join(ROOT, 'landing', 'dokument.src.html'))
  if (!sablona) throw new Error('landing/dokument.src.html chybí')

  // Adresy se mezi jazyky liší, ale soubor se jmenuje všude stejně.
  // Podle jména se pak skládá hreflang mezi verzemi.
  const adresy = new Map<string, Map<string, string>>()
  for (const r of RECI) {
    for (const [jm, meta] of nactiSlozku(join(ROOT, 'landing', 'dokumenty', r.slozka))) {
      if (!adresy.has(jm)) adresy.set(jm, new Map())
      adresy.get(jm)!.set(r.jazyk, `${r.predpona}${meta.adresa}`)
    }
  }

  for (const r of RECI) jazykDokumentu(sablona, fonts, r, adresy)
}

/** Načte dokumenty jedné složky i s jejich hlavičkami. */
function nactiSlozku(dir: string): [string, DokMeta, string][] {
  let jmena: string[]
  try {
    jmena = readdirSync(dir).filter((n) => n.endsWith('.html')).sort()
  } catch {
    return []
  }
  return jmena.map((name) => {
    const cely = readFileSync(join(dir, name), 'utf8')
    const hlavicka = cely.match(/<!--\s*meta\s*([\s\S]*?)-->/)
    if (!hlavicka) throw new Error(`${name}: chybí hlavička <!-- meta -->`)
    const meta = Object.fromEntries(
      hlavicka[1]
        .split('\n')
        .map((radek) => radek.trim())
        .filter(Boolean)
        .map((radek) => {
          const i = radek.indexOf(':')
          return [radek.slice(0, i).trim(), radek.slice(i + 1).trim()]
        }),
    ) as unknown as DokMeta
    for (const klic of ['nadpis', 'podnadpis', 'popis', 'adresa'] as const) {
      if (!meta[klic]) throw new Error(`${name}: v hlavičce chybí ${klic}`)
    }
    return [name, meta, cely.slice(hlavicka[0].length + hlavicka.index!).trim()]
  })
}

function jazykDokumentu(
  sablona: string,
  fonts: string,
  r: Rec,
  adresy: Map<string, Map<string, string>>,
): void {
  const zdrojDir = join(ROOT, 'landing', 'dokumenty', r.slozka)
  const nactene = nactiSlozku(zdrojDir).map(([jm, meta, telo]) => ({ jm, meta, telo }))
  if (!nactene.length) {
    if (r.slozka) console.log(`  dokumenty ${r.jazyk}: složka chybí, přeskočeno`)
    return
  }

  const TADY: Record<string, string> = { cs: 'jste tady', en: 'you are here', de: 'Sie sind hier' }
  const odkaz = (cil: DokMeta, tady: boolean): string =>
    tady
      ? `<span class="tady">${cil.nadpis} (${TADY[r.jazyk]})</span>`
      : `<a href="/${r.predpona}${cil.adresa}">${cil.nadpis}</a>`

  const podleAdresy = (a: string) => nactene.find((d) => d.meta.adresa === a)?.meta

  const vop = podleAdresy('obchodni-podminky')
  const gdpr = podleAdresy('ochrana-osobnich-udaju')
  const zdravi = podleAdresy('zdravotni-upozorneni')

  for (const { jm, meta, telo } of nactene) {
    const sourozenci = adresy.get(jm)
    const alternaty = sourozenci
      ? [...sourozenci]
          .map(([j, a]) => `<link rel="alternate" hreflang="${j}" href="https://mybloomia.com/${a}">`)
          .join('\n')
      : ''

    const html = sablona
      .replace('/*__FONTS__*/', () => fonts)
      .split('__JAZYK__').join(r.jazyk)
      .split('__PREDPONA__').join(r.predpona)
      .replace('__ALTERNATY__', () => alternaty)
      .split('__STITEK__').join(r.stitek)
      .split('__ZPET__').join(r.zpet)
      .split('__NADPIS_DOKUMENTY__').join(r.dokumenty)
      .split('__NADPIS_PROVOZOVATELKA__').join(r.provozovatelka)
      .replace('__UDAJE__', () => r.udaje)
      .replace('__PRAVNI__', () => r.pravni)
      .split('__NADPIS__').join(meta.nadpis)
      .split('__PODNADPIS__').join(meta.podnadpis)
      .split('__POPIS__').join(meta.popis)
      .split('__ADRESA__').join(meta.adresa)
      .replace('__ODKAZ_VOP__', () => (vop ? odkaz(vop, vop === meta) : ''))
      .replace('__ODKAZ_GDPR__', () => (gdpr ? odkaz(gdpr, gdpr === meta) : ''))
      .replace('__ODKAZ_ZDRAVI__', () => (zdravi ? odkaz(zdravi, zdravi === meta) : ''))
      .replace('__OBSAH__', () => telo)

    const slozka = r.slozka ? join(OUT, r.slozka) : OUT
    mkdirSync(slozka, { recursive: true })
    const cesta = join(slozka, `${meta.adresa}.html`)
    writeFileSync(cesta, html, 'utf8')
    console.log(`  dokument: ${r.predpona}${meta.adresa}.html (${Math.round(Buffer.byteLength(html) / 1024)} kB)`)
  }
}

main()
