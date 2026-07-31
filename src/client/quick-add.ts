import { esc } from './ui'

/**
 * Rychlé přidání.
 *
 * Plovoucí tlačítko, které je vidět na každé obrazovce. Zadání zní: každé
 * přidání nejvýš na dvě klepnutí. První otevře seznam, druhé už otevře
 * konkrétní formulář — proto tady nejsou žádné mezikroky a každá položka
 * vede rovnou na místo, kde se vyplňuje.
 *
 * Akce: `quick` (otevřít/zavřít), `quick-close`.
 */

export interface QuickItem {
  icon: string
  label: string
  hint: string
  /** Kam to vede. Když je místo toho `act`, spustí se rovnou akce. */
  route?: string
  /** Akce místo přechodu — pro věci, které vznikají jedním klepnutím. */
  act?: string
}

/**
 * Pořadí není abecední, ale podle toho, jak často se to během dne používá.
 * Nahoře je to, co žena ve stimulaci dělá denně.
 */
export const QUICK_ITEMS: QuickItem[] = [
  { icon: '◍', label: 'Dávka léku', hint: 'Odškrtnout dnešní léky', route: 'leky/dnes' },
  { icon: '✚', label: 'Vpich', hint: 'Zapsat místo vpichu', route: 'zapis/vpich' },
  { icon: '◕', label: 'Příznak', hint: 'S intenzitou a časem', route: 'zapis/telo' },
  { icon: '✎', label: 'Jak mi je', hint: 'Nálada, úzkost, naděje, energie', route: 'zapis/nalada' },
  { icon: '?', label: 'Otázka pro lékaře', hint: 'Ať na ni v ordinaci nezapomenete', route: 'otazky/ceka' },
  { icon: '◉', label: 'Laboratorní hodnota', hint: 'Hormony a výsledky odběrů', route: 'zdravi' },
  { icon: '◈', label: 'Ultrazvuk', hint: 'Folikuly a sliznice', route: 'zdravotni/ultrazvuk' },
  { icon: '◎', label: 'Měření', hint: 'Bazální teplota, váha, tlak', route: 'zdravotni/mereni' },
  { icon: '▤', label: 'Lékařská zpráva', hint: 'Vložit text a vytáhnout hodnoty', route: 'dokumenty' },
  { icon: '❦', label: 'Poznámka nebo fotka', hint: 'Cokoli k dnešnímu dni', route: 'denik' },
  { icon: '◆', label: 'Vlastní událost', hint: 'Termín, kontrola, cokoli dalšího', route: 'kalendar' },
  { icon: '✧', label: 'Nový cyklus', hint: 'Založit další IVF cyklus', act: 'cycle-new' },
]

/** Plovoucí tlačítko. Schované tam, kde by překáželo čtení. */
export function quickButton(open: boolean): string {
  return `<button class="fab${open ? ' open' : ''}" data-act="quick"
    aria-expanded="${open}" aria-label="${open ? 'Zavřít rychlé přidání' : 'Rychle přidat'}">
    <span class="plus">＋</span>
  </button>`
}

/** Vysouvací seznam. Každá položka vede rovnou do formuláře. */
export function quickSheet(open: boolean): string {
  if (!open) return ''
  return `<div class="quickveil" data-act="quick-close" aria-hidden="true"></div>
  <div class="quicksheet" role="dialog" aria-label="Rychle přidat">
    <div class="quickhead">
      <p class="eyebrow">Rychle přidat</p>
      <button class="iconbtn" data-act="quick-close" aria-label="Zavřít">×</button>
    </div>
    <div class="quickgrid">
      ${QUICK_ITEMS.map(
        (i) => `<button class="quickitem" ${
          i.act ? `data-act="${esc(i.act)}"` : `data-go="${esc(i.route ?? 'dnes')}"`
        }>
          <span class="ic">${i.icon}</span>
          <span class="txt"><b>${esc(i.label)}</b><span>${esc(i.hint)}</span></span>
        </button>`,
      ).join('')}
    </div>
  </div>`
}
