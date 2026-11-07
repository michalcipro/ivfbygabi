/**
 * Pohyb v aplikaci.
 *
 * ------------------------------------------------------------- CO ŘEŠÍ ---
 * Karty mají náběh (`rise`, `stagger`) už dlouho, jenže se přehraje celý
 * naráz, při vykreslení. Karta na konci dlouhé obrazovky si tak odbude
 * svůj náběh, zatímco je sto pixelů pod okrajem, a než se k ní žena
 * doscrolluje, je dávno dojetý. Obrazovka pak působí mrtvě.
 *
 * Tenhle modul náběh pozastaví a pustí ho teprve ve chvíli, kdy je karta
 * doopravdy vidět. Nemění, jak náběh vypadá, jen kdy se stane.
 *
 * ------------------------------------------------------ DRUHÁ VĚC: KLID ---
 * `innerHTML` se přepisuje celé, i když žena jen odškrtne políčko. Bez
 * zásahu by se při každém kliknutí rozjely náběhy na celé stránce. Proto
 * se při překreslení na místě pohyb vypíná úplně.
 */

/** Náběh čeká, dokud na prvek nedojde řada. Ruší ho `je`. */
const CEKA = 'ceka'
const JE = 'je'

let oko: IntersectionObserver | null = null

function tise(): boolean {
  return (
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/**
 * Projde čerstvě vykreslenou stránku a pozastaví náběhy pod okrajem.
 *
 * `naMiste` je překreslení beze změny obrazovky, tedy odškrtnuté
 * políčko nebo rozbalená sekce. Tam se nenabíhá nic.
 */
export function ozivPohyb(koren: HTMLElement, naMiste: boolean): void {
  if (naMiste || tise() || typeof IntersectionObserver === 'undefined') return

  if (!oko) {
    oko = new IntersectionObserver(
      (zaznamy) => {
        for (const z of zaznamy) {
          if (!z.isIntersecting) continue
          z.target.classList.add(JE)
          oko?.unobserve(z.target)
        }
      },
      // Spustit o kousek dřív, než karta vyjede. Náběh má být dojetý
      // ve chvíli, kdy se na kartu žena podívá, ne začínat pod rukou.
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 },
    )
  }

  const vyska = window.innerHeight || 0
  const prvky = koren.querySelectorAll<HTMLElement>('.rise, .stagger > *')

  for (const prvek of prvky) {
    const r = prvek.getBoundingClientRect()
    // Co je vidět hned, ať nabíhá hned. Pozastavit a zase pustit by
    // na první obrazovce znamenalo jen zbytečné cuknutí.
    if (r.top < vyska) continue
    prvek.classList.add(CEKA)
    oko.observe(prvek)
  }
}
