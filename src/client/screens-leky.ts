import { formatCzechDate } from '../lib/domain/dates'
import { guideFor } from '../lib/domain/guides'
import { journey, S, viewDate, type MedRow } from './store'
import { photoStrip } from './photo-ui'
import { empty, esc, plural } from './ui'
import { actionCard, sectionHead, segmented, statTrio } from './viz'

/**
 * Léky.
 *
 * Vlastní záložka, protože v léčbě jsou injekce nejčastější denní úkon —
 * schovávat je do rozcestníku by znamenalo klikat na ně každý den třikrát.
 * Dělení na „dnešní dávky“ a „protokol“ je převzaté z reference: co udělat
 * teď versus co je nastavené.
 */

export const LEKY_SECTIONS = [
  { id: 'dnes', label: 'Dnešní dávky' },
  { id: 'protokol', label: 'Protokol' },
]

export type LekySection = 'dnes' | 'protokol'

export function isLekySection(s: string): s is LekySection {
  return s === 'dnes' || s === 'protokol'
}

/**
 * Historie změn dávkování.
 *
 * Dávka se během stimulace mění běžně a na kontrole zazní otázka „a kdy
 * vám ji zvedli“. Bez zápisu si to nikdo nepamatuje. Aplikace nic nehodnotí —
 * jen ukáže, co se kdy změnilo a proč to klinika řekla.
 */
function doseHistory(m: MedRow): string {
  if (!m.history?.length) return ''
  const rows = [...m.history].sort((a, b) => a.on.localeCompare(b.on))
  return `<span style="display:block;margin-top:.6rem">
    <span class="label" style="display:block">Změny dávky</span>
    <ul class="linelist" style="margin-top:.4rem">
      ${rows
        .map(
          (h) => `<li>
            <span class="when">${esc(formatCzechDate(h.on, { year: false }))}</span>
            <span style="flex:1;min-width:0">${esc(h.dose)}</span>
            ${h.why.trim() ? `<span class="faint" style="font-size:.75rem">${esc(h.why)}</span>` : ''}
          </li>`,
        )
        .join('')}
    </ul>
  </span>`
}

function doseKey(date: string, id: string): string {
  return `med:${date}:${id}`
}

function paneDnes(): string {
  const date = viewDate()
  const meds = S.d.meds

  if (meds.length === 0) {
    return [
      empty(
        'Na dnešek nejsou žádné dávky',
        'Až si přidáte léky do protokolu, objeví se tady každý den samy — i s odškrtáváním.',
        '<button class="btn btn-primary" data-go="leky/protokol">Nastavit protokol</button>',
        '◍',
      ),
    ].join('')
  }

  const done = meds.filter((m) => S.d.checks[doseKey(date, m.id)]).length

  return [
    statTrio([
      { icon: '◍', value: meds.length, label: 'Dávek celkem' },
      { icon: '✓', value: done, label: 'Hotovo' },
      { icon: '◷', value: meds.length - done, label: 'Zbývá' },
    ]),

    `<section class="surface pad rise" style="margin-top:1.1rem">
      <p class="eyebrow">${esc(formatCzechDate(date, { weekday: true }))}</p>
      <div class="stack" style="gap:.2rem;margin-top:.7rem">
        ${meds
          .map((m) => {
            const key = doseKey(date, m.id)
            return `<button class="check" data-act="check" data-arg="${esc(key)}" aria-pressed="${Boolean(S.d.checks[key])}">
              <span class="box">✓</span>
              <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(m.name)}
                <br><span class="faint" style="font-size:.8125rem">${esc(m.dose)}${m.timeOfDay ? ` · ${esc(m.timeOfDay)}` : ''}</span></span>
            </button>`
          })
          .join('')}
      </div>
    </section>`,

    done === meds.length
      ? `<p class="note">Dnešek máte odškrtnutý celý. To se počítá.</p>`
      : '',

    `${sectionHead('Kam píchat')}
     ${actionCard({
       icon: '✚',
       title: 'Mapa míst vpichu',
       body: 'Aplikace hlídá střídání a navrhne, kam jít dnes',
       go: 'zapis/vpich',
     })}`,
  ].join('')
}

function paneProtokol(): string {
  const meds = S.d.meds
  const state = journey()
  const guide = guideFor(state.phase.id)

  return [
    `<section class="surface pad rise">
      <p class="eyebrow">Přidat lék</p>
      <div class="two" style="margin-top:.9rem">
        <div><label class="label" for="med-name">Název</label>
          <input class="field" id="med-name" placeholder="např. Gonal-F" autocomplete="off"></div>
        <div><label class="label" for="med-dose">Dávka</label>
          <input class="field" id="med-dose" placeholder="např. 225 IU" autocomplete="off"></div>
      </div>
      <div class="formrow" style="margin-top:1.1rem">
        <label class="label" for="med-time">Kdy</label>
        <input class="field" id="med-time" placeholder="např. ráno 7:00" autocomplete="off">
      </div>
      <button class="btn btn-primary" data-act="med-add" style="margin-top:1.25rem">Přidat do protokolu</button>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">
        Dávky si aplikace nevymýšlí ani nekontroluje. Zapisujete to, co vám určila klinika.
      </p>
    </section>`,

    meds.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">${esc(plural(meds.length, 'lék v protokolu', 'léky v protokolu', 'léků v protokolu'))}</p>
          <ul class="linelist" style="margin-top:.7rem">
            ${meds
              .map(
                (m) =>
                  `<li>
                    <span style="min-width:0;flex:1">
                      <b style="font-weight:500">${esc(m.name)}</b>
                      <span class="faint">${esc(m.dose)}${m.timeOfDay ? ` · ${esc(m.timeOfDay)}` : ''}</span>
                      ${doseHistory(m)}
                      ${photoStrip(`med:${m.id}`, m.photos, 'Krabička, leták nebo rozpis dávek')}
                    </span>
                    <button class="btn btn-ghost btn-sm" data-act="med-del" data-arg="${esc(m.id)}">×</button>
                  </li>`,
              )
              .join('')}
          </ul>
        </section>`
      : '',

    guide
      ? `<section class="surface pad rise">
          <p class="eyebrow">Na co se v téhle fázi zeptat</p>
          <ul class="bullets" style="margin-top:.7rem">
            ${guide.askDoctor.slice(0, 3).map((q) => `<li>${esc(q)}</li>`).join('')}
          </ul>
          <button class="btn btn-sm" data-go="faze" style="margin-top:1rem">Průvodce fází</button>
        </section>`
      : '',
  ].join('')
}

export function screenLeky(section: LekySection): string {
  const state = journey()
  return (
    `<header class="head rise">
      <p class="eyebrow">${esc(state.phase.name)}</p>
      <h1 class="display">Léky</h1>
      ${segmented(LEKY_SECTIONS, section, 'leky-sec')}
    </header>` + (section === 'protokol' ? paneProtokol() : paneDnes())
  )
}
