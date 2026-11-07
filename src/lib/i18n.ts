import { EN } from './preklady/en'
import { DE } from './preklady/de'

/**
 * Jazyky aplikace.
 *
 * ------------------------------------------------------------ PRO KOHO ---
 * Cizojazyčná verze není pro ženu, která se léčí v Německu. Je pro tu,
 * která přijela na kliniku do Česka a nemluví česky. Obsah proto zůstává
 * o české praxi a nic se nepřizpůsobuje zahraničním protokolům. Mění se
 * jazyk, ne skutečnost, kterou popisuje.
 *
 * Z toho plyne jedno pravidlo, které se do překladů promítá všude: český
 * odborný pojem se nepřekládá pryč. Sestra řekne „punkce“ a na papíře
 * bude „kryoembryotransfer“. Kdyby to aplikace schovala za hezký anglický
 * výraz, bude žena v ordinaci stejně ztracená, jen si o tom přečte pěkný
 * článek. Překlad proto český pojem nechává vidět a vysvětluje ho.
 *
 * ---------------------------------------------------------- JAK TO STOJÍ ---
 * Klíčem je **česká věta**, ne vymyšlený kód. Má to tři důvody:
 *
 *  - V kódu zůstane čitelný text. `prelozit('Zápis dne')` se čte sám, `prelozit('nav.7')`
 *    se musí dohledávat.
 *  - Nepřeložená věta nezmizí ani nespadne, jenom zůstane česky. To je
 *    přesně ten stav, ve kterém aplikace během překládání bude, a je
 *    lepší vidět českou větu než prázdné místo nebo klíč.
 *  - Nemusí se vymýšlet a udržovat tisíce jmen.
 *
 * Daň za to je, že stejná česká věta má v celé aplikaci stejný překlad.
 * Kde by to vadilo, je `prelozit(cesky, kde)` s upřesněním.
 *
 * -------------------------------------------------------- PROČ PŘI STAVBĚ ---
 * Jazyk se zapéká do sestavení a vybírá adresou (`/app/`, `/app/en/`).
 * Obsah tvoří skoro celý balík, takže tři jazyky v jednom souboru by
 * z devíti set kilobajtů udělaly tři megabajty navíc pro každou ženu,
 * z toho dvě třetiny v jazyce, kterému nerozumí.
 *
 * Záznamy to nerozdělí: `localStorage` patří k doméně, ne ke složce.
 * Přepnutí jazyka je obyčejný odkaz a data zůstanou, kde byla.
 */

export type Jazyk = 'cs' | 'en' | 'de'

export const JAZYKY: Jazyk[] = ['cs', 'en', 'de']

/** Jak se jazyk jmenuje ve svém vlastním jazyce. */
export const NAZVY_JAZYKU: Record<Jazyk, string> = {
  cs: 'Čeština',
  en: 'English',
  de: 'Deutsch',
}

/** Doplní `scripts/build-app.ts`. Bez doplnění je to čeština. */
const ZAPECENY = '__JAZYK__'

function zvol(kod: string): Jazyk {
  return (JAZYKY as string[]).includes(kod) ? (kod as Jazyk) : 'cs'
}

export const JAZYK: Jazyk = zvol(ZAPECENY)

const SLOVNIKY: Record<Jazyk, Record<string, string>> = { cs: {}, en: EN, de: DE }

/**
 * Věty, které v tomhle sestavení nemají překlad.
 *
 * Sbírá se to proto, aby šlo kdykoliv změřit, kolik práce zbývá, místo
 * aby se to odhadovalo. Čte to `kolikChybi()` a test pokrytí.
 */
const chybejici = new Set<string>()

/**
 * Přeloží českou větu do jazyka tohohle sestavení.
 *
 * `kde` je upřesnění pro případ, kdy stejné české slovo potřebuje na
 * dvou místech různý překlad. Hledá se nejdřív `kde|cesky`, teprve pak
 * samotná věta.
 */
export function prelozit(cesky: string, kde?: string): string {
  if (JAZYK === 'cs') return cesky
  const slovnik = SLOVNIKY[JAZYK]
  if (kde) {
    const presne = slovnik[`${kde}|${cesky}`]
    if (presne !== undefined) return presne
  }
  const nalez = slovnik[cesky]
  if (nalez !== undefined) return nalez
  chybejici.add(cesky)
  return cesky
}

/**
 * Přeloží větu, do které se něco doplňuje. Místo pro doplnění je `{}`.
 *
 * Je to pro věty, které v sobě mají hodnotu, co se nedá zastoupit
 * mřížkou za číslo: datum vypsané slovem, název cyklu, jméno. Klíčem je
 * česká věta s prázdnými místy, ne hotová věta, protože hotová by se ve
 * slovníku nikdy nenašla dvakrát stejná.
 *
 *     vzor('Přehled od {} do {}.', datumOd, datumDo)
 */
export function vzor(cesky: string, ...hodnoty: Array<string | number>): string {
  let i = 0
  return prelozit(cesky).replace(/\{\}/g, () => String(hodnoty[i++] ?? ''))
}

/** Kolik vět zatím zůstalo česky. Pro měření postupu, ne pro uživatelku. */
export function kolikChybi(): { chybi: number; vety: string[] } {
  return { chybi: chybejici.size, vety: [...chybejici].sort() }
}

/**
 * Adresa téže aplikace v jiném jazyce, odvozená z té současné.
 *
 * Musí zvládnout `/app/`, `/app/en/` i `/app/en/index.html`. Poslední
 * část s tečkou je soubor, ne složka: sestavení zapisuje `index.html`
 * a server ho servíruje i bez jména, takže se aplikace otevírá obojím
 * způsobem. Odříznout se musí taky jazyk na konci, jinak by se jazyky
 * zanořovaly do sebe a vznikla by adresa `/app/en/de/`.
 */
export function adresaJazyka(cil: Jazyk, cesta: string): string {
  const casti = cesta.split('/')
  if (casti.length && casti[casti.length - 1].includes('.')) casti.pop()
  while (casti.length && casti[casti.length - 1] === '') casti.pop()
  // Čeština vlastní složku nemá, takže se odřezávají jen ostatní jazyky.
  const posledni = casti[casti.length - 1]
  if (posledni === 'en' || posledni === 'de') casti.pop()
  const koren = `${casti.join('/')}/`
  return cil === 'cs' ? koren : `${koren}${cil}/`
}
