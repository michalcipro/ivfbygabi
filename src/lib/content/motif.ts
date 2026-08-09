import type { TopicId } from '../domain/profile'
import type { ContentItem } from './types'

/**
 * Motiv na kartě obsahu.
 *
 * Karta v knihovně měla jen barevnou plochu s pilulkou druhu obsahu. Vypadalo
 * to jako nedodělaný placeholder: dvacet karet pod sebou a všechny stejné.
 *
 * Fotobanka by to nespravila. Fotky žen s bříškem nebo miminek jsou v aplikaci
 * pro ženy v léčbě to poslední, co tam patří. Motiv je proto vždycky znak:
 * jednoduchá kresba čarou, která říká, o čem text je, a nechá si přitom
 * odstup.
 *
 * Modul je čistý. Vybírá jméno motivu, nekreslí ho. Kreslení je v klientovi,
 * aby doménová vrstva nevěděla nic o SVG.
 */

export type MotifId =
  | 'kapka'
  | 'vajicko'
  | 'bunky'
  | 'blastocysta'
  | 'deloha'
  | 'vlocka'
  | 'zkumavka'
  | 'hodiny'
  | 'dech'
  | 'pero'
  | 'mince'
  | 'kalendar'
  | 'kriz'
  | 'kruhy'
  | 'poupe'
  | 'dvojice'
  | 'helix'
  | 'miska'
  | 'list'
  | 'kvet'

/**
 * Motiv podle tématu.
 *
 * Pořadí v `PODLE_TEMATU` nerozhoduje. Rozhoduje pořadí v `PORADI` níž:
 * článek o financích ve stimulaci má být mince, ne kapka, protože o penězích
 * je. Konkrétnější téma vyhrává nad fází.
 */
const PODLE_TEMATU: Partial<Record<TopicId, MotifId>> = {
  stimulace: 'kapka',
  leky: 'kapka',
  hormony: 'zkumavka',
  embryologie: 'blastocysta',
  genetika: 'helix',
  transfer: 'deloha',
  cekani: 'hodiny',
  vysledky: 'zkumavka',
  psychika: 'dech',
  sebepece: 'dech',
  spanek: 'dech',
  ztrata: 'list',
  vztah: 'dvojice',
  partner: 'dvojice',
  finance: 'mince',
  klinika: 'kriz',
  komunita: 'kruhy',
  tehotenstvi: 'poupe',
  darcovstvi: 'kruhy',
  strava: 'miska',
  pohyb: 'kvet',
}

/**
 * Čím konkrétnější téma, tím dřív v seznamu.
 *
 * „Psychika“ má skoro každý druhý článek, takže kdyby vyhrávala, byl by
 * z poloviny knihovny stejný obrázek.
 */
const PORADI: TopicId[] = [
  'ztrata',
  'genetika',
  'embryologie',
  'transfer',
  'finance',
  'darcovstvi',
  'klinika',
  'komunita',
  'partner',
  'vztah',
  'tehotenstvi',
  'stimulace',
  'leky',
  'cekani',
  'hormony',
  'vysledky',
  'strava',
  'pohyb',
  'spanek',
  'sebepece',
  'psychika',
]

/** Slova v názvu, která přebijí téma. Konkrétní text má konkrétní znak. */
const PODLE_NAZVU: [RegExp, MotifId][] = [
  [/kryo|ket\b|zamraz|rozmraz|vitrif/i, 'vlocka'],
  [/odběr vajíč|opu\b|punkce/i, 'vajicko'],
  [/blastocyst|d5|d6|kultivac/i, 'blastocysta'],
  [/pgt|chromozom|karyotyp|aneuploid/i, 'helix'],
  [/hcg|těhotenský test|beta/i, 'zkumavka'],
  [/injekc|vpich|píchá|pero\b/i, 'kapka'],
  [/deník|zápis|reflex|dopis/i, 'pero'],
  [/práce|zaměstnav|neschopenk|volno/i, 'kalendar'],
  [/kalendář|termín|plán/i, 'kalendar'],
  [/cena|kolik stojí|rozpočet|pojišťovn|platb/i, 'mince'],
  [/naděje|rozkvět|začátek cesty/i, 'poupe'],
  [/oplodnění|icsi|spermi/i, 'bunky'],
]

/** Který znak nakreslit na kartu. Nikdy nevrací prázdno. */
export function motifFor(item: Pick<ContentItem, 'title' | 'topics'>): MotifId {
  for (const [re, motif] of PODLE_NAZVU) {
    if (re.test(item.title)) return motif
  }
  for (const t of PORADI) {
    if (item.topics.includes(t)) {
      const m = PODLE_TEMATU[t]
      if (m) return m
    }
  }
  return 'kvet'
}
