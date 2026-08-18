/**
 * Service worker BlooMie.
 *
 * ------------------------------------------------------------- PROČ VŮBEC ---
 * Dva důvody, oba praktické:
 *
 * 1. **Čekárna.** Aplikace se nejčastěji otevírá v čekárně kliniky a na
 *    chodbě nemocnice, kde signál nestojí za nic. Bez tohohle souboru se
 *    tam neotevře vůbec, i když všechno, co potřebuje, už jednou stáhla.
 * 2. **Data.** Prohlížeče, které aplikaci považují za nainstalovanou,
 *    zacházejí s jejím úložištěm šetrněji. Na iPhonu je přidání na plochu
 *    jediná cesta, jak se vyhnout mazání dat po sedmi dnech nečinnosti.
 *
 * ------------------------------------------------------------- JAK CACHUJE ---
 * Celá aplikace je jeden soubor `index.html`. Ukládá se natvrdo a při
 * spuštění se čte z disku, ne ze sítě: start je okamžitý a funguje offline.
 *
 * Novou verzi si prohlížeč všimne sám (v tomhle souboru je otisk obsahu
 * aplikace), nachystá ji vedle a stránka si ji vezme, jakmile je to
 * bezpečné. Rozhodování o tom je na stránce, ne tady: ta jediná ví, jestli
 * zrovna někdo píše do formuláře. Aplikace, která se překlopí uprostřed
 * psaní deníku, je horší než aplikace o den starší.
 *
 * ------------------------------------------------------------------ POZOR ---
 * `VERZE` musí být při každém sestavení jiná, jinak se nová verze nikdy
 * nedostane k uživatelkám. Doplňuje ji `scripts/build-app.ts` z otisku
 * hotového `index.html`, takže na to nejde zapomenout.
 */

const VERZE = '__VERZE__'
const CACHE = `bloomia-${VERZE}`

/** Skořápka aplikace. `index.html` je zároveň celá aplikace. */
const SKORAPKA = './index.html'

const SOUBORY = [
  SKORAPKA,
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon.svg',
  './apple-touch-icon.png',
  './favicon-32.png',
]

/**
 * Instalace nové verze.
 *
 * Soubory se stahují s `cache: 'reload'`, tedy s obejitím HTTP cache
 * prohlížeče. Bez toho si nová verze umí uložit **starý** `index.html`,
 * který v cache ještě leží, a celá výměna je pak k ničemu: verze je nová,
 * aplikace stará. Tichá chyba, která se pozná až po nasazení.
 */
self.addEventListener('install', (e) => {
  e.waitUntil(
    (async () => {
      const c = await caches.open(CACHE)
      await Promise.all(
        SOUBORY.map(async (url) => {
          const res = await fetch(new Request(url, { cache: 'reload' }))
          if (res && res.ok) await c.put(url, res)
        }),
      )
    })(),
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
    (async () => {
      for (const jmeno of await caches.keys()) {
        if (jmeno.startsWith('bloomia-') && jmeno !== CACHE) await caches.delete(jmeno)
      }
      await self.clients.claim()
    })(),
  )
})

/**
 * Výměna na povel ze stránky.
 *
 * Bez tohohle by nová verze čekala až do chvíle, kdy se zavřou všechny
 * záložky s aplikací. U aplikace přidané na plochu telefonu to znamená
 * skoro nikdy: žena ji jen odsune, nezavře, takže by na starém sestavení
 * zůstala týdny. Stránka si proto řekne sama, jakmile je výměna bezpečná.
 */
self.addEventListener('message', (e) => {
  if (e.data && e.data.typ === 'prevzit') self.skipWaiting()
})

async function zeSiteNeboZDisku(klic, request) {
  const cache = await caches.open(CACHE)
  const ulozene = await cache.match(klic)
  if (ulozene) return ulozene

  try {
    const res = await fetch(request)
    // Ukládají se jen vlastní soubory a jen povedené odpovědi. Uložená
    // chyba 500 by aplikaci rozbila natrvalo.
    if (res && res.ok && res.type === 'basic') await cache.put(klic, res.clone())
    return res
  } catch {
    return new Response('BlooMia je offline a tahle část se ještě nestihla uložit do zařízení.', {
      status: 503,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    })
  }
}

self.addEventListener('fetch', (e) => {
  const request = e.request
  if (request.method !== 'GET') return

  let url
  try {
    url = new URL(request.url)
  } catch {
    return
  }
  if (url.origin !== self.location.origin) return

  // Každé otevření aplikace, ať přijde na jakoukoliv adresu, dostane
  // skořápku. Trasy jsou v adrese za mřížkou, takže na server nechodí.
  if (request.mode === 'navigate') {
    e.respondWith(zeSiteNeboZDisku(SKORAPKA, request))
    return
  }
  e.respondWith(zeSiteNeboZDisku(request, request))
})
