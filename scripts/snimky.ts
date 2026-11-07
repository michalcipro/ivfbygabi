import { chromium } from 'playwright'
import { createServer } from 'node:http'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { extname, join } from 'node:path'
import { datumTransferu, ukazkovaData, JMENO } from './ukazka'

/**
 * Snímky obrazovek pro prodejní stránku.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Snímky byly ruční. Na anglické i německé stránce tak v telefonu stála
 * čeština, protože jiné než české neexistovaly. Tenhle skript je vyrobí
 * ve všech třech jazycích ze skutečné aplikace, takže se dají kdykoliv
 * obnovit a nemůžou se rozejít s tím, co aplikace doopravdy ukazuje.
 *
 * ---------------------------------------------------------------- JAK TO JDE ---
 * Spustí se lokální server nad `app/`, projde se vítání (jediná cesta,
 * jak vznikne platný profil), do uložení se doplní ukázkový cyklus
 * a zbytek, stránka se načte znovu a každá obrazovka se vyfotí.
 *
 * Rozměr 390 × 844 při dvojnásobné hustotě je telefon, na kterém to žena
 * drží. Výřez je `clip`, ne celá stránka: snímek má ukázat obrazovku,
 * ne nekonečný scroll.
 *
 *     npm run snimky
 *
 * Potřebuje `npm run app`, protože fotí to, co je v `app/`.
 */

const KOREN = process.cwd()
const APP = join(KOREN, 'app')
const CIL = join(KOREN, 'landing/snimky')
const PORT = 4360

/** Telefon, na kterém to žena drží. */
const SIRKA = 390
const VYSKA = 844

/** Co se fotí. `kam` je adresa v aplikaci, `posun` je scroll v pixelech. */
const ZABERY = [
  { jmeno: 'dnes', kam: 'dnes', posun: 120 },
  { jmeno: 'cesta', kam: 'cesta', posun: 0 },
  { jmeno: 'osa', kam: 'journey/osa', posun: 0 },
  { jmeno: 'po-transferu', kam: 'po-transferu', posun: 160 },
  { jmeno: 'cyklus', kam: 'cyklus/cyc-ukazka-2', posun: 0 },
  { jmeno: 'embrya', kam: 'embrya', posun: 0 },
  { jmeno: 'denik', kam: 'denik', posun: 0 },
  { jmeno: 'finance', kam: 'finance', posun: 0 },
  { jmeno: 'knihovna', kam: 'knihovna', posun: 0 },
]

const JAZYKY = [
  { kod: 'cs', cesta: '', slozka: '' },
  { kod: 'en', cesta: 'en/', slozka: 'en' },
  { kod: 'de', cesta: 'de/', slozka: 'de' },
]

const TYPY: Record<string, string> = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
}

async function main(): Promise<void> {
  if (!existsSync(join(APP, 'index.html'))) {
    console.error('Chybí app/index.html. Nejdřív `npm run app`.')
    process.exit(1)
  }

  const server = createServer((req, res) => {
    let p = decodeURIComponent((req.url ?? '/').split('?')[0])
    if (p.endsWith('/')) p += 'index.html'
    const f = join(APP, p)
    if (!existsSync(f)) {
      res.writeHead(404)
      res.end('')
      return
    }
    res.writeHead(200, { 'content-type': TYPY[extname(f)] ?? 'application/octet-stream' })
    res.end(readFileSync(f))
  })
  await new Promise<void>((r) => server.listen(PORT, r))

  const prohlizec = await chromium.launch({
    executablePath: process.env.CHROMIUM ?? undefined,
    args: ['--no-sandbox'],
  })

  const data = ukazkovaData()
  let hotovo = 0

  for (const jazyk of JAZYKY) {
    const kontext = await prohlizec.newContext({
      viewport: { width: SIRKA, height: VYSKA },
      deviceScaleFactor: 2,
      colorScheme: 'light',
    })
    const page = await kontext.newPage()
    const chyby: string[] = []
    page.on('pageerror', (e) => chyby.push(String(e)))
    page.on('dialog', (d) => void d.dismiss())

    const klik = async (sel: string): Promise<void> => {
      for (let i = 0; i < 40; i++) {
        if (await page.evaluate((s) => !!document.querySelector(s), sel)) break
        await page.waitForTimeout(200)
      }
      await page.evaluate((s) => (document.querySelector(s) as HTMLElement | null)?.click(), sel)
      await page.waitForTimeout(300)
    }

    const zaklad = `http://127.0.0.1:${PORT}/${jazyk.cesta}`
    await page.goto(zaklad)

    // Vítáním se musí projít, jinak nevznikne platný profil. Fáze
    // „po transferu“ odpovídá tomu, co snímky ukazují.
    //
    // Kroků je u každé fáze jinak a přibývají, takže se kliká, dokud se
    // neukáže poslední tlačítko. Pevný počet by se rozbil při první
    // změně vítání a poznalo by se to až na hotovém obrázku.
    await klik('[data-act="ob-next"]')
    await klik('[data-act="ob-route"][data-arg="transfer"]')
    for (let i = 0; i < 10; i++) {
      if (await page.evaluate(() => !!document.querySelector('[data-act="ob-finish"]'))) break
      await klik('[data-act="ob-next"]')
    }
    await page.evaluate((jmeno) => {
      const pole = document.querySelector('#ob-name') as HTMLInputElement | null
      if (pole) {
        pole.value = jmeno
        pole.dispatchEvent(new Event('input', { bubbles: true }))
      }
    }, JMENO)
    await page.waitForTimeout(200)
    await klik('[data-act="ob-finish"]')

    const vitaniHotovo = await page.evaluate(() => !document.querySelector('[data-act="ob-route"]'))
    if (!vitaniHotovo) throw new Error(`vítání v jazyce ${jazyk.kod} se nedokončilo`)

    // Zbytek se doplní přímo do uložení. Proklikat cyklus, embrya,
    // výdaje a týden zápisů by trvalo déle než celý zbytek skriptu.
    await page.evaluate((d) => {
      const KLIC = 'ivf-by-gabi/v1'
      const ulozene = JSON.parse(localStorage.getItem(KLIC) ?? '{}')
      Object.assign(ulozene, d.data)
      // Vítání si uložilo vlastní datum transferu. Kdyby se lišilo od
      // toho v cyklu, aplikace by správně upozornila na rozpor a na
      // snímku by místo obsahu stála výzva ke kontrole.
      if (ulozene.profile) ulozene.profile.transferOn = d.transferOn
      localStorage.setItem(KLIC, JSON.stringify(ulozene))
    }, { data, transferOn: datumTransferu() })
    await page.reload()
    await page.waitForTimeout(700)

    mkdirSync(join(CIL, jazyk.slozka), { recursive: true })

    for (const zaber of ZABERY) {
      await page.evaluate((kam) => {
        location.hash = `#/${kam}`
      }, zaber.kam)
      await page.waitForTimeout(600)
      if (zaber.posun) {
        await page.evaluate((y) => window.scrollTo(0, y), zaber.posun)
        await page.waitForTimeout(250)
      }
      const soubor = join(CIL, jazyk.slozka, `${zaber.jmeno}.jpg`)
      await page.screenshot({
        path: soubor,
        type: 'jpeg',
        quality: 86,
        clip: { x: 0, y: 0, width: SIRKA, height: VYSKA },
      })
      hotovo++
    }

    console.log(
      `  ${jazyk.kod}: ${ZABERY.length} snímků do ${jazyk.slozka ? `snimky/${jazyk.slozka}/` : 'snimky/'}` +
        (chyby.length ? `  (chyby: ${chyby.slice(0, 2).join(' | ')})` : ''),
    )
    await kontext.close()
  }

  await prohlizec.close()
  server.close()
  console.log(`Hotovo: ${hotovo} snímků ve ${JAZYKY.length} jazycích.`)
}

void main()
