/**
 * Stav úložiště v prohlížeči.
 *
 * ------------------------------------------------------------ O CO JDE ---
 * Celá aplikace stojí na tom, že data zůstávají v zařízení. Tím pádem taky
 * padá s tím, co si s úložištěm udělá prohlížeč. A prohlížeče si s ním
 * dělají dost:
 *
 * - Safari na iPhonu maže data webu po sedmi dnech bez otevření stránky.
 *   Není to chyba, je to ochrana proti sledování. Výjimku má stránka
 *   přidaná na plochu.
 * - Ostatní prohlížeče mažou při nedostatku místa, od nejméně používaných.
 * - Anonymní režim nemusí dát trvalé úložiště vůbec.
 *
 * Modul nic neslibuje. Zjistí, co se zjistit dá, a zbytek řekne rovnou.
 * Radši ať žena ví, že si má udělat zálohu, než aby jí aplikace tvrdila,
 * že je v bezpečí.
 */

/** Běží aplikace přidaná na ploše, ne jako záložka v prohlížeči? */
export function naPlose(): boolean {
  try {
    if (window.matchMedia('(display-mode: standalone)').matches) return true
    // Starší iOS nezná `display-mode` a hlásí se přes vlastní příznak.
    return (navigator as unknown as { standalone?: boolean }).standalone === true
  } catch {
    return false
  }
}

/**
 * Je to iPhone nebo iPad?
 *
 * iPadOS se od verze 13 vydává za počítač, takže samotný název systému
 * nestačí. Poznávacím znakem je dotyk na jinak stolní platformě.
 */
export function jeApple(): boolean {
  try {
    const ua = navigator.userAgent
    if (/iPad|iPhone|iPod/.test(ua)) return true
    return navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1
  } catch {
    return false
  }
}

/**
 * Hrozí tomuhle zařízení sedmidenní mazání?
 *
 * Na Apple zařízeních v prohlížeči ano. Přidaná na plochu ne. Jinde je
 * riziko jiné a menší, takže se o něm nemluví stejnými slovy.
 */
export function hroziMazani(): boolean {
  return jeApple() && !naPlose()
}

export interface StavUloziste {
  /** Řekl prohlížeč, že data drží natrvalo? */
  trvale: boolean
  /** Umí prohlížeč o trvalé úložiště vůbec požádat? */
  lzePozadat: boolean
  /** Kolik je zabráno, v bajtech. `null`, když to prohlížeč neřekne. */
  zabrano: number | null
  /** Kolik je celkem k dispozici. `null`, když to prohlížeč neřekne. */
  celkem: number | null
}

/** Co o úložišti říká prohlížeč. Nikdy nevyhodí výjimku. */
export async function stavUloziste(): Promise<StavUloziste> {
  const out: StavUloziste = { trvale: false, lzePozadat: false, zabrano: null, celkem: null }
  try {
    const s = navigator.storage
    if (!s) return out
    out.lzePozadat = typeof s.persist === 'function'
    if (typeof s.persisted === 'function') out.trvale = await s.persisted()
    if (typeof s.estimate === 'function') {
      const e = await s.estimate()
      out.zabrano = typeof e.usage === 'number' ? e.usage : null
      out.celkem = typeof e.quota === 'number' ? e.quota : null
    }
  } catch {
    // Zakázané nebo neúplné API. Zůstanou výchozí hodnoty, tedy „nevím“.
  }
  return out
}

/**
 * Požádá prohlížeč, ať data drží natrvalo.
 *
 * Odpověď je na prohlížeči a některé se neptají uživatelky vůbec, jen se
 * rozhodnou podle toho, jak často stránku otevírá. Volá se z klepnutí,
 * protože tam, kde se prohlížeč ptá, musí být dotaz spojený s gestem.
 *
 * Ani `true` není záruka. Na iPhonu v prohlížeči trvalé úložiště
 * sedmidenní mazání nezruší, to umí jen přidání na plochu.
 */
export async function pozadatOTrvale(): Promise<boolean> {
  try {
    if (typeof navigator.storage?.persist !== 'function') return false
    return await navigator.storage.persist()
  } catch {
    return false
  }
}

/** Bajty na čtení. Desetinná čárka, protože je to česká aplikace. */
export function bajty(n: number): string {
  if (n < 1024) return `${n} B`
  const kb = n / 1024
  if (kb < 1024) return `${Math.round(kb)} kB`
  const mb = kb / 1024
  return `${mb.toFixed(1).replace('.', ',')} MB`
}
