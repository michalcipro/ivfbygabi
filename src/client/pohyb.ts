/**
 * Pohyb v aplikaci.
 *
 * ------------------------------------------------------------- CO ŘEŠÍ ---
 * Karty mají náběh (`rise`, `stagger`, `prichod`) už v CSS, jenže se
 * přehraje celý naráz, při vykreslení. Karta na konci dlouhé obrazovky
 * si tak odbude svůj náběh, zatímco je sto pixelů pod okrajem, a než se
 * k ní žena doscrolluje, je dávno dojetý. Obrazovka pak působí mrtvě.
 *
 * Tenhle modul náběh pozastaví a pustí ho teprve ve chvíli, kdy je karta
 * doopravdy vidět. Nemění, jak náběh vypadá, jen kdy se stane.
 *
 * ------------------------------------------------------ DRUHÁ VĚC: KLID ---
 * `innerHTML` se přepisuje celé, i když žena jen odškrtne políčko. Bez
 * zásahu by se při každém kliknutí rozjely náběhy na celé stránce. Proto
 * se při překreslení na místě pohyb vypíná úplně.
 *
 * ------------------------------------------------- TŘETÍ VĚC: ČTENÍ ---
 * U článků se na spodní hraně zpětné lišty plní proužek, který říká,
 * kolik textu zbývá. U dlouhého textu o ztrátě je rozdíl, jestli zbývají
 * dva odstavce, nebo deset.
 */

/** Co všechno má náběh, který se dá odložit. */
const NABEHY = '.rise, .stagger > *, .timeline li, .tiles > *, .tl > *'

/** Náběh čeká, dokud na prvek nedojde řada. Ruší ho `je`. */
const CEKA = 'ceka'
const JE = 'je'

let oko: IntersectionObserver | null = null

/** Proužek postupu čtení na právě vykreslené stránce, nebo null. */
let pruh: HTMLElement | null = null
let sleduje = false

function tise(): boolean {
  return (
    typeof matchMedia === 'function' &&
    matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

function prepoctiCteni(): void {
  if (!pruh) return
  const doc = document.documentElement
  const max = doc.scrollHeight - doc.clientHeight
  const podil = max <= 0 ? 1 : Math.min(1, Math.max(0, window.scrollY / max))
  pruh.style.width = `${(podil * 100).toFixed(1)}%`
}

/**
 * Projde čerstvě vykreslenou stránku a pozastaví náběhy pod okrajem.
 *
 * `naMiste` je překreslení beze změny obrazovky, tedy odškrtnuté
 * políčko nebo rozbalená sekce. Tam se nenabíhá nic.
 */
export function ozivPohyb(koren: HTMLElement, naMiste: boolean): void {
  // Proužek se hledá vždycky. Starý prvek je po přepsání `innerHTML`
  // pryč a odkaz na něj by ukazoval do prázdna.
  pruh = koren.querySelector<HTMLElement>('.backbar .postup')
  prepoctiCteni()

  if (!sleduje && typeof window !== 'undefined') {
    sleduje = true
    window.addEventListener('scroll', prepoctiCteni, { passive: true })
    window.addEventListener('resize', prepoctiCteni, { passive: true })
  }

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

  for (const prvek of koren.querySelectorAll<HTMLElement>(NABEHY)) {
    const r = prvek.getBoundingClientRect()
    // Co je vidět hned, ať nabíhá hned. Pozastavit a zase pustit by
    // na první obrazovce znamenalo jen zbytečné cuknutí.
    if (r.top < vyska) continue
    prvek.classList.add(CEKA)
    oko.observe(prvek)
  }
}
