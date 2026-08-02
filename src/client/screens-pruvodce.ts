import { CONTENT_STATS } from '../lib/content'
import { PHASE_IDS } from '../lib/domain/phases'
import { guideFor } from '../lib/domain/guides'
import { journey, journalList, profile, S } from './store'
import { esc, plural } from './ui'
import { hubRow, sectionHead } from './viz'

/**
 * Průvodce.
 *
 * Rozcestník do všeho, co se nedělá každý den. Z reference přebíráme jednu
 * věc, která tam funguje nejlíp: u každé položky je napsané, k čemu je —
 * takže se nikam nemusí klikat naslepo.
 */

/** [cesta, ikona, název, k čemu to je] */
type Row = [string, string, string, string]

function fazeRows(): Row[] {
  const state = journey()
  const guide = guideFor(state.phase.id)
  return [
    ['faze', '❖', 'Moje fáze', guide ? guide.summary : `Kde jste teď: ${state.phase.name.toLowerCase()}.`],
    ['cesta', '✧', 'Celá cesta', `Všech ${PHASE_IDS.length} fází. Kde jste byla, kde jste a co přijde.`],
    ['diagnozy', '◈', 'Diagnózy a stavy', 'Co která diagnóza znamená, jak se vyšetřuje a na co se ptát.'],
    ['mojediagnoza', '◈', 'Moje diagnóza', 'Označte důvody, které se vás týkají — obsah se pak cílí podle nich.'],
    ['vysetreni', '◉', 'Vyšetření', 'Co může být relevantní u vás, u partnera i jinde.'],
    ['podpora', '♡', 'Podpůrná péče', 'Co si k léčbě brát mimo kliniku — a co o tom víme.'],
  ]
}

const READ: Row[] = [
  ['knihovna', '❧', 'Knihovna', `${CONTENT_STATS.items} materiálů. Články, checklisty, pojmy i „Co když…“.`],
  ['hledat', '✦', 'Hledat v aplikaci', 'Napište pojem nebo otázku. Hledá se jen v tom, co je uvnitř — nic se negeneruje.'],
  ['objevit', '❋', 'Objevit', 'Doporučení podle vaší fáze a toho, co vás zajímá.'],
  ['cokdyz', '?', 'Co když…', 'Co dělat, když se něco stane mimo ordinační hodiny.'],
]

const RECORD: Row[] = [
  ['otazky', '?', 'Otázky pro lékaře', 'Sepište je doma. V ordinaci je přečtete z telefonu.'],
  ['zdravotni', '◉', 'Zdravotní data', 'Teplota, váha, tlak, ultrazvuk a laboratoř na jednom místě.'],
  ['sledovani/tyden', '◫', 'Týdenní ohlédnutí', 'Co bylo nejtěžší, co pomohlo a co příště jinak.'],
  ['denik', '✎', 'Deník a cvičení', 'Delší zápisy, ohlédnutí a cvičení na práci s hlavou.'],
  ['kalendar', '◈', 'Kalendář', 'Termíny a kontroly. Část se doplní sama z vašich dat.'],
  ['zdravi', '◉', 'Zdraví', 'Vaše hodnoty v čase. Graf ukazuje vývoj, ne diagnózu.'],
  ['dokumenty', '▤', 'Dokumenty', 'Papíry z kliniky na jednom místě. Aplikace je jen ukládá, nečte je.'],
  ['checklisty', '✓', 'Checklisty', 'Ať na nic nezapomenete — a odškrtnuté zůstane odškrtnuté.'],
  ['pribeh', '❦', 'Můj příběh', 'Časová osa a dopisy. Jednou z toho může být kniha.'],
]

const OTHER: Row[] = [
  ['komunita', '◍', 'Komunita', 'Ženy ve stejné fázi. Můžete zůstat anonymní.'],
  ['partner', '♡', 'Partner', 'Co ukázat tomu, kdo je vedle vás. Deník zůstává soukromý.'],
  ['obchod', '◇', 'Doporučené', 'Produkty a služby podle fáze. Bez placených pozic.'],
  ['clenstvi', '✦', 'Předplatné', '199 Kč měsíčně. Jedna cena za celou aplikaci.'],
  ['nastaveni', '⚙', 'Nastavení', 'Fáze, situace, vzhled, dlaždice a vaše data.'],
]

const rows = (list: Row[]) => list.map(([r, i, t, w]) => hubRow(r, i, t, w)).join('')

export function screenPruvodce(): string {
  const state = journey()
  const p = profile()
  const written = journalList().length

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(p.displayName ? `${p.displayName} · ` : '')}${esc(state.phase.name)}</p>
      <h1 class="display">Obsah</h1>
      <p class="lede">
        Všechno, co se nedělá každý den. U každé položky je napsané, k čemu je.
        ${written ? esc(`Máte ${plural(written, 'zapsaný den', 'zapsané dny', 'zapsaných dní')}.`) : ''}
      </p>
    </header>`,

    `<div class="rise">${sectionHead('Kde jste')}${rows(fazeRows())}</div>`,
    `<div class="rise">${sectionHead('Číst a hledat')}${rows(READ)}</div>`,
    `<div class="rise">${sectionHead('Zapisovat a schovávat')}${rows(RECORD)}</div>`,
    `<div class="rise">${sectionHead('Ostatní')}${rows(OTHER)}</div>`,

    S.d.shots.length || S.d.labs.length
      ? `<p class="note">Všechno, co zapíšete, zůstává ve vašem zařízení. Nikam se to neodesílá.</p>`
      : '',
  ].join('')
}
