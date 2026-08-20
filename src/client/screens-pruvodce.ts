import { CONTENT_STATS } from '../lib/content'
import { PHASE_IDS } from '../lib/domain/phases'
import { guideFor } from '../lib/domain/guides'
import { journey, profile } from './store'
import { esc } from './ui'
import { hubRow, sectionHead } from './viz'

/**
 * Průvodce.
 *
 * Rozcestník do všeho, co se nedělá každý den. Z reference přebíráme jednu
 * věc, která tam funguje nejlíp: u každé položky je napsané, k čemu je,
 * takže se nikam nemusí klikat naslepo.
 */

/** [cesta, ikona, název, k čemu to je] */
type Row = [string, string, string, string]

function fazeRows(): Row[] {
  const state = journey()
  const guide = guideFor(state.phase.id)
  return [
    ['faze', '❖', 'Moje fáze', guide ? guide.summary : `Kde jste teď: ${state.phase.name.toLowerCase()}.`],
    ['cesta', '✧', 'Celá IVF cesta', `Všech ${PHASE_IDS.length} fází od začátku do konce. Podívat se můžete kdykoli, i dopředu.`],
    ['diagnozy', '◈', 'Diagnózy a stavy', 'Co která diagnóza znamená, jak se vyšetřuje a na co se ptát.'],
    ['vysetreni', '◉', 'Vyšetření', 'Co může být relevantní u vás, u partnera i jinde.'],
  ]
}

const READ: Row[] = [
  ['knihovna', '❧', 'Knihovna', `${CONTENT_STATS.items} materiálů. Články, checklisty, pojmy i „Co když…“.`],
  ['hledat', '✦', 'Hledat v aplikaci', 'Napište pojem nebo otázku. Hledá se jen v tom, co je uvnitř. Nic se negeneruje.'],
  ['objevit', '❋', 'Objevit', 'Doporučení podle vaší fáze a toho, co vás zajímá.'],
  ['cokdyz', '?', 'Co když…', 'Co dělat, když se něco stane mimo ordinační hodiny.'],
]

const METHODS_ROWS: Row[] = [
  ['knihovna', '❖', 'Metody a postupy', 'IVF, ICSI, PGT, hatching, EmbryoGlue a další. Co je co a co o tom víme.'],
  ['podpora', '♡', 'Podpůrná péče', 'Fyzio, psychoterapie, akupunktura, výživa. U každé je uvedená síla důkazů.'],
  ['cokdyz', '?', 'Co když…', 'Co dělat, když se něco stane mimo ordinační hodiny.'],
]

const OTHER: Row[] = [
  ['komunita', '◍', 'Komunita', 'Ženy ve stejné fázi. Můžete zůstat anonymní.'],
  ['partner', '♡', 'Pro partnera', 'Co ukázat tomu, kdo je vedle vás. Deník zůstává soukromý.'],
]

const rows = (list: Row[]) => list.map(([r, i, t, w]) => hubRow(r, i, t, w)).join('')

export function screenPruvodce(): string {
  const state = journey()
  const p = profile()

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(p.displayName ? `${p.displayName} · ` : '')}${esc(state.phase.name)}</p>
      <h1 class="display">Poznej IVF</h1>
      <p class="lede">
        Tady se nic nezapisuje. Tady se čte. Co vás čeká, co která metoda znamená
        a na co se ptát. Nahoře je to, co patří k vaší fázi, ale prohlédnout si můžete
        celou cestu kdykoli.
      </p>
    </header>`,

    `<div class="rise">${sectionHead('Kde jste na cestě')}${rows(fazeRows())}</div>`,
    `<div class="rise">${sectionHead('Číst a hledat')}${rows(READ)}</div>`,
    `<div class="rise">${sectionHead('Metody a péče')}${rows(METHODS_ROWS)}</div>`,
    `<div class="rise">${sectionHead('Ostatní')}${rows(OTHER)}</div>`,

    `<p class="note">Svoje vlastní data (cykly, embrya, výsledky, deník) najdete v <strong>Mojí cestě</strong>. Tady je jen to, co se dá přečíst.</p>`,
  ].join('')
}
