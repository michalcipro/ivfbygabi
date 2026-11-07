import { JAZYK, prelozit } from '../lib/i18n'

/**
 * Překlad hotové stránky.
 *
 * ------------------------------------------------------------- PROČ TADY ---
 * Obrazovky skládají HTML do řetězců, takže drtivá většina textů pro ženu
 * není samostatný literál, ale holý text uvnitř šablony:
 *
 *     <p class="eyebrow">Jak se dnes cítíte</p>
 *
 * Obalit každé takové místo do `prelozit()` by znamenalo rozebrat patnáct
 * set míst v šestatřiceti souborech a u každého si pohlídat uvozovky,
 * zanoření a escapování. Jedna chyba v šabloně je rozbitá obrazovka.
 *
 * Jazyk se ale zapéká při stavbě a stránka se po vykreslení celá projde
 * znovu kvůli grafům a náběhům. Stejným průchodem se dá přeložit text.
 * Jedno místo místo patnácti set, a pokryje i obrazovky, na které se
 * zatím nedostalo.
 *
 * `prelozit()` tím neztrácí smysl. Zůstává pro texty, které v DOM nejsou:
 * dotazy `confirm()`, hlášky `toast()` a popisky pro čtečku, které se
 * skládají v kódu.
 *
 * ------------------------------------------------------------- JAK TO ČTE ---
 * Klíčem je česká věta se sraženými mezerami. Šablony lámou text na víc
 * řádků a odsazují ho, takže `"\n      Jak se dnes cítíte\n    "` a
 * `"Jak se dnes cítíte"` musí být jeden klíč, ne dva. Mezery okolo se
 * přitom zachovají: v HTML nesou význam (`<b>Datum</b> narození`).
 *
 * ------------------------------------------------------------------ ČÍSLA ---
 * Věty s číslem by jinak potřebovaly vlastní klíč pro každé číslo. Když
 * přesná věta ve slovníku není, zkusí se znovu s číslicemi zastoupenými
 * mřížkou: `„3 záznamy“` se hledá jako `„# záznamy“` a čísla se do
 * překladu vrátí ve stejném pořadí.
 *
 * Čeština si tvar slova vybrala sama podle čísla, takže `„1 záznam“`,
 * `„3 záznamy“` a `„5 záznamů“` jsou tři klíče. To je výhoda, ne daň:
 * angličtina má jiné pravidlo a může první přeložit jednotným číslem
 * a zbylé dva množným.
 *
 * -------------------------------------------------------------- CO VYNECHÁ ---
 * Obsah knihovny (články, pojmy, karty dne) jde stejnou cestou, ale ve
 * slovníku není, takže zůstane česky. To je zatím správně: obsah se
 * překládá zvlášť a je ho dvě stě tisíc slov.
 */

/** Značky, jejichž text není pro čtení. */
const NECIST = new Set(['SCRIPT', 'STYLE', 'TEXTAREA'])

/** Vlastnosti, které čte žena nebo čtečka. */
const VLASTNOSTI = ['placeholder', 'aria-label', 'title', 'alt']

/** Srazí mezery, aby stejná věta ze dvou šablon byla jeden klíč. */
function klic(text: string): string {
  return text.replace(/\s+/g, ' ').trim()
}

/**
 * Přeloží větu, případně se o to pokusí s čísly zastoupenými mřížkou.
 *
 * Vrací `null`, když překlad není. Volající tím pozná, že se nemá do
 * stránky vůbec sahat, a nechá původní text i s jeho mezerami.
 */
export function prelozVetu(cesky: string): string | null {
  const presne = prelozit(cesky)
  if (presne !== cesky) return presne

  const cisla: string[] = []
  const sablona = cesky.replace(/\d+/g, (m) => {
    cisla.push(m)
    return '#'
  })
  if (cisla.length === 0) return null

  let nalez = prelozit(sablona)
  if (nalez === sablona) {
    // Čeština volí „z“ nebo „ze“ podle toho, jak se číslo čte nahlas
    // („ze sedmi“, „z pěti“). Viz `zNum` v `domain/endurance.ts`. Cizí
    // jazyky ten rozdíl nemají, takže by slovník jinak musel mít od
    // každé věty dvě hesla se stejným překladem. Srovná se to tady,
    // na jednom místě, a slovníku stačí tvar „z #“.
    const bezZe = sablona.replace(/\bze (#)/g, 'z $1')
    if (bezZe === sablona) return null
    nalez = prelozit(bezZe)
    if (nalez === bezZe) return null
  }

  let i = 0
  return nalez.replace(/#/g, () => cisla[i++] ?? '#')
}

/** Přeloží text a popisky na právě vykreslené stránce. */
export function prelozDom(koren: HTMLElement): void {
  if (JAZYK === 'cs') return

  const chodec = document.createTreeWalker(koren, NodeFilter.SHOW_TEXT, {
    acceptNode(uzel) {
      const rodic = uzel.parentElement
      if (!rodic || NECIST.has(rodic.tagName)) return NodeFilter.FILTER_REJECT
      return uzel.nodeValue && uzel.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    },
  })

  const uzly: Text[] = []
  for (let u = chodec.nextNode(); u; u = chodec.nextNode()) uzly.push(u as Text)

  for (const uzel of uzly) {
    const puvodni = uzel.nodeValue ?? ''
    const preklad = prelozVetu(klic(puvodni))
    if (preklad === null) continue
    // Mezery okolo se musí zachovat, jinak se slova slepí k sousední značce.
    const pred = puvodni.match(/^\s*/)?.[0] ?? ''
    const za = puvodni.match(/\s*$/)?.[0] ?? ''
    uzel.nodeValue = `${pred}${preklad}${za}`
  }

  for (const vlastnost of VLASTNOSTI) {
    for (const prvek of koren.querySelectorAll(`[${vlastnost}]`)) {
      const puvodni = prvek.getAttribute(vlastnost)
      if (!puvodni || !puvodni.trim()) continue
      const preklad = prelozVetu(klic(puvodni))
      if (preklad !== null) prvek.setAttribute(vlastnost, preklad)
    }
  }
}
