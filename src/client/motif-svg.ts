import type { MotifId } from '../lib/content/motif'

/**
 * Kresby znaků na kartách obsahu.
 *
 * Jeden vizuální systém: čtvercové pole 48 × 48, kresba čarou o síle 1,4,
 * zaoblené konce, žádné výplně kromě několika teček. Díky tomu vypadají
 * všechny znaky jako jedna rodina, i když každý znamená něco jiného.
 *
 * Barva je vždycky `currentColor`, aby se znak řídil barvou textu na kartě
 * a fungoval ve světlém i tmavém motivu bez druhé sady.
 *
 * Kreslí se tenkou čarou schválně. Plná ikona by na jemném přechodu vypadala
 * jako nálepka; tohle vypadá jako kresba tužkou.
 */

const D: Record<MotifId, string> = {
  // Kapka. Stimulace a léky. Ne stříkačka: jehla na kartě zbytečně děsí.
  kapka: `<path d="M24 9c6 8 9.5 12.6 9.5 17.4A9.5 9.5 0 0 1 24 36a9.5 9.5 0 0 1-9.5-9.6C14.5 21.6 18 17 24 9Z"/>
    <path d="M20 27a4 4 0 0 0 4 4" opacity=".55"/>`,

  // Vajíčko obklopené korunou buněk. Odběr.
  vajicko: `<circle cx="24" cy="24" r="8.5"/><circle cx="24" cy="24" r="3.4" opacity=".55"/>
    <circle cx="24" cy="11" r="2"/><circle cx="35" cy="17" r="2"/><circle cx="35" cy="31" r="2"/>
    <circle cx="24" cy="37" r="2"/><circle cx="13" cy="31" r="2"/><circle cx="13" cy="17" r="2"/>`,

  // Dělení buněk. Oplodnění a první dny.
  bunky: `<circle cx="24" cy="24" r="13"/>
    <circle cx="19.5" cy="24" r="5.2"/><circle cx="28.5" cy="24" r="5.2"/>`,

  // Blastocysta: vnitřní buněčná masa a dutina.
  blastocysta: `<circle cx="24" cy="24" r="13"/>
    <path d="M24 11.2a12.8 12.8 0 0 1 0 25.6" opacity=".5"/>
    <circle cx="18" cy="20" r="2.1"/><circle cx="17.4" cy="26.6" r="2.1"/><circle cx="21.6" cy="30" r="2.1"/>
    <circle cx="21.4" cy="16.4" r="2.1"/>`,

  // Děloha s vejcovody. Transfer.
  deloha: `<path d="M17 30c0-5 2-6.5 2-11 0-3-2.5-4-5-4"/>
    <path d="M31 30c0-5-2-6.5-2-11 0-3 2.5-4 5-4"/>
    <path d="M17 30c0 4 3.1 6.6 7 6.6S31 34 31 30"/>
    <circle cx="24" cy="27" r="2.6"/>`,

  // Vločka. Kryotransfer a zamražení.
  vlocka: `<path d="M24 10v28M12 17l24 14M36 17 12 31"/>
    <path d="m20 13 4 3 4-3M20 35l4-3 4 3" opacity=".65"/>`,

  // Zkumavka s hladinou. Odběry, hodnoty, hCG.
  zkumavka: `<path d="M19 10h10M21 10v20a3 3 0 0 0 6 0V10"/>
    <path d="M21 24h6" opacity=".65"/><circle cx="24" cy="35.5" r="1.4" opacity=".65"/>`,

  // Hodiny. Čekání.
  hodiny: `<circle cx="24" cy="24" r="13"/><path d="M24 16v8.5l5.5 3.5"/>`,

  // Dech. Psychika, zklidnění, spánek.
  dech: `<circle cx="24" cy="24" r="6.5"/>
    <path d="M24 12.5a11.5 11.5 0 0 1 0 23" opacity=".6"/>
    <path d="M24 8a16 16 0 0 1 0 32" opacity=".3"/>`,

  // Pero. Deník a zápisy.
  pero: `<path d="M14 34c0-2 .6-3.6 1.8-4.8L29 16l3 3-13.2 13.2C17.6 33.4 16 34 14 34Z"/>
    <path d="m31 14 3 3M13 38h22" opacity=".65"/>`,

  // Mince. Finance.
  mince: `<circle cx="24" cy="24" r="12"/>
    <path d="M27.5 19.5a4.5 4.5 0 0 0-7.5 3.3c0 4.4 7.5 2.2 7.5 6.4a4.5 4.5 0 0 1-7.5 3.1" opacity=".8"/>
    <path d="M24 15.5v17" opacity=".55"/>`,

  // Kalendář. Práce, termíny, plán.
  kalendar: `<rect x="11" y="14" width="26" height="23" rx="3"/>
    <path d="M11 21h26M18 11v6M30 11v6"/>
    <circle cx="19" cy="28" r="1.6" opacity=".7"/><circle cx="24" cy="28" r="1.6" opacity=".7"/>`,

  // Křížek v kruhu. Klinika.
  kriz: `<circle cx="24" cy="24" r="13"/><path d="M24 17v14M17 24h14"/>`,

  // Propojené kruhy. Komunita, dárcovství.
  kruhy: `<circle cx="18.5" cy="21" r="6.5"/><circle cx="29.5" cy="21" r="6.5"/>
    <circle cx="24" cy="30.5" r="6.5" opacity=".7"/>`,

  // Poupě. Naděje a těhotenství.
  poupe: `<path d="M24 37V22"/>
    <path d="M24 22c0-5.5 2.6-9.5 7-11 .8 5-1.6 9.6-7 11Z"/>
    <path d="M24 26c-4.6-.6-7.3-3.6-8-8 4.4.4 7.3 3 8 8Z" opacity=".7"/>`,

  // Dva oblouky vedle sebe. Vztah a partner.
  dvojice: `<circle cx="18.5" cy="19" r="4.6"/><circle cx="29.5" cy="19" r="4.6"/>
    <path d="M11 35c0-4.3 3.4-7 7.5-7s7.5 2.7 7.5 7"/>
    <path d="M22 35c0-4.3 3.4-7 7.5-7s7.5 2.7 7.5 7" opacity=".55"/>`,

  // Dvojšroubovice. Genetika.
  helix: `<path d="M18 11c0 8 12 10 12 18s-12 10-12 18" transform="translate(0 -4)"/>
    <path d="M30 11c0 8-12 10-12 18s12 10 12 18" transform="translate(0 -4)"/>
    <path d="M19.5 17h9M18 24h12M19.5 31h9" opacity=".55"/>`,

  // Miska. Strava.
  miska: `<path d="M12 22h24c0 7.2-5.4 12-12 12s-12-4.8-12-12Z"/>
    <path d="M20 17c0-2 2-2.6 2-4.6M26 17c0-2 2-2.6 2-4.6" opacity=".65"/>`,

  // Padající list. Ztráta. Záměrně tichý znak, nic dramatického.
  list: `<path d="M31 15c2 8-2.5 16-9.5 17.5C18 33.2 15.5 31 15 28c-1-6 5.5-11.6 16-13Z"/>
    <path d="M28 18 16.5 33" opacity=".55"/>`,

  // Kvítek. Obecný motiv značky.
  kvet: `<circle cx="24" cy="24" r="3.2"/>
    <ellipse cx="24" cy="15.5" rx="3.4" ry="5.6"/><ellipse cx="24" cy="32.5" rx="3.4" ry="5.6"/>
    <ellipse cx="15.5" cy="24" rx="5.6" ry="3.4"/><ellipse cx="32.5" cy="24" rx="5.6" ry="3.4"/>`,
}

/**
 * Znak jako inline SVG.
 *
 * `aria-hidden`, protože to, co obrázek říká, stojí hned vedle jako text.
 * Čtečka by jen dvakrát řekla totéž.
 */
export function motifSvg(id: MotifId, size = 48): string {
  return `<svg class="motif" width="${size}" height="${size}" viewBox="0 0 48 48" aria-hidden="true"
    fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">
    ${D[id] ?? D.kvet}
  </svg>`
}
