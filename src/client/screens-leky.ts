import { formatCzechDate } from '../lib/domain/dates'
import {
  DISCLAIMER,
  JINY_LEK,
  kindFor,
  MED_GROUPS,
  MED_KIND_LABEL,
  MED_UNITS,
} from '../lib/domain/meds-catalog'
import { guideFor } from '../lib/domain/guides'
import { doseKey, dosesDone, journey, medsOn, S, viewDate, type MedRow } from './store'
import { photoStrip } from './photo-ui'
import { empty, esc, plural } from './ui'
import { actionCard, sectionHead, segmented, statTrio } from './viz'

/**
 * Léky.
 *
 * Vlastní záložka, protože v léčbě jsou injekce nejčastější denní úkon.
 * Schovávat je do rozcestníku by znamenalo klikat na ně každý den třikrát.
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
 * vám ji zvedli“. Bez zápisu si to nikdo nepamatuje. Aplikace nic nehodnotí,
 * jen ukáže, co se kdy změnilo a proč to klinika řekla.
 */
/** Časy dávek. Starý `timeOfDay` zůstává kvůli dřív uloženým datům. */
function selectField(id: string, label: string, options: [string, string][], value: string): string {
  return `<div><label class="label" for="${esc(id)}">${esc(label)}</label>
    <select class="field" id="${esc(id)}">
      ${options.map(([v, l]) => `<option value="${esc(v)}"${v === value ? ' selected' : ''}>${esc(l)}</option>`).join('')}
    </select></div>`
}

function medTimes(m: MedRow): string {
  return m.times?.length ? m.times.join(', ') : (m.timeOfDay ?? '')
}

/**
 * Ukončený lék.
 *
 * Když se cyklus uzavře, léky dostanou datum konce a přestanou se nabízet.
 * V protokolu ale zůstávají, takže musí být poznat, že už neběží. Bez toho
 * vypadá seznam pořád stejně, ať léčba běží, nebo skončila.
 */
function medEnded(m: MedRow): string {
  if (!m.endOn || m.endOn >= viewDate()) return ''
  return `<span class="faint" style="display:block;margin-top:.3rem;font-size:.75rem">
    Ukončeno ${esc(formatCzechDate(m.endOn, { year: false }))}
  </span>`
}

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

/**
 * Formulář na přidání léku.
 *
 * Sdílený mezi Léky a Kalendářem. Dřív měl kalendář vlastní osekanou verzi
 * jen s názvem a časem, takže tam přidaný lék neměl dávku ani datum konce
 * a v protokolu vypadal jako nedodělaný. Jeden formulář, jedno chování.
 */
export function medForm(): string {
  return `<section class="surface pad rise">
      <p class="eyebrow">Přidat lék</p>

      <div class="formrow" style="margin-top:.9rem">
        <label class="label" for="med-pick">Přípravek</label>
        <select class="field" id="med-pick" data-act="med-pick">
          <option value="">Vyberte ze seznamu…</option>
          ${MED_GROUPS.map(
            (g) => `<optgroup label="${esc(g.label)}">
              ${g.items.map((x) => `<option value="${esc(x)}">${esc(x)}</option>`).join('')}
              <option value="${esc(`${JINY_LEK}|${g.id}`)}">${esc(JINY_LEK)}</option>
            </optgroup>`,
          ).join('')}
        </select>
        <p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">
          Když v seznamu není, napište název rovnou do pole níž.
        </p>
      </div>

      <div class="two" style="margin-top:1.1rem">
        <div><label class="label" for="med-name">Název</label>
          <input class="field" id="med-name" value="${esc(S.d.medDraft ?? '')}" placeholder="např. Gonal-f" autocomplete="off"></div>
        ${selectField('med-kind', 'Forma', Object.entries(MED_KIND_LABEL) as [string, string][], kindFor(S.d.medDraft ?? ''))}
      </div>

      <div class="two" style="margin-top:1.1rem">
        <div><label class="label" for="med-dose">Dávka</label>
          <input class="field" id="med-dose" placeholder="např. 225" autocomplete="off"></div>
        ${selectField('med-unit', 'Jednotka', MED_UNITS.map((u) => [u, u]) as [string, string][], kindFor(S.d.medDraft ?? '') === 'injekce' ? 'IU' : 'mg')}
      </div>

      <div class="two" style="margin-top:1.1rem">
        <div><label class="label" for="med-time">Čas</label>
          <input class="field" id="med-time" placeholder="např. 20:00" autocomplete="off"></div>
        ${selectField(
          'med-repeat',
          'Opakování',
          [
            ['denne', 'Každý den'],
            ['obden', 'Obden'],
            ['jednou', 'Jednorázově'],
          ],
          'denne',
        )}
      </div>

      <div class="two" style="margin-top:1.1rem">
        <div><label class="label" for="med-from">Od</label>
          <input class="field" type="date" id="med-from" value="${esc(viewDate())}"></div>
        <div><label class="label" for="med-to">Do</label>
          <input class="field" type="date" id="med-to" value=""></div>
      </div>

      <div style="margin-top:1.1rem">
        <label class="label" for="med-note">Poznámka</label>
        <input class="field" id="med-note" placeholder="co k tomu klinika řekla" autocomplete="off">
      </div>

      <button class="btn btn-primary" data-act="med-add" style="margin-top:1.25rem">Přidat do protokolu</button>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">${esc(DISCLAIMER)}</p>
    </section>`
}

/**
 * Dávky na jeden den s odškrtáváním.
 *
 * Ukazuje jen to, co na ten den podle protokolu opravdu připadá. Lék, který
 * skončil nebo se bere obden, tu v mezidni není, aby odškrtnutý den znamenal,
 * že je hotovo doopravdy.
 */
export function medDoses(date: string): string {
  const meds = medsOn(date)
  if (meds.length === 0) return ''

  const done = dosesDone(date)

  return `<section class="surface pad rise">
    <div class="row wrap" style="justify-content:space-between;gap:.6rem;align-items:baseline">
      <p class="eyebrow">Dávky na ${esc(formatCzechDate(date, { weekday: true }))}</p>
      <span class="faint num" style="font-size:.75rem">${done} / ${meds.length}</span>
    </div>
    <div class="stack" style="gap:.2rem;margin-top:.7rem">
      ${meds
        .map((m) => {
          const key = doseKey(date, m.id)
          const hotovo = Boolean(S.d.checks[key])
          return `<button class="check" data-act="check" data-arg="${esc(key)}" aria-pressed="${hotovo}">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(m.name)}
              <br><span class="faint" style="font-size:.8125rem">${esc([m.dose, medTimes(m), MED_KIND_LABEL[m.kind]].filter(Boolean).join(' · '))}</span></span>
          </button>`
        })
        .join('')}
    </div>
    <p class="faint" style="margin-top:.8rem;font-size:.75rem;line-height:1.5">Odškrtnutí je jen vaše poznámka, že je hotovo. Aplikace nikdy nepřipomíná dávku, kterou neurčila klinika.</p>
  </section>`
}

function paneDnes(): string {
  const date = viewDate()
  const meds = medsOn(date)

  if (meds.length === 0) {
    return [
      empty(
        'Na dnešek nejsou žádné dávky',
        'Až si přidáte léky do protokolu, objeví se tady každý den samy. I s odškrtáváním.',
        '<button class="btn btn-primary" data-go="leky/protokol">Nastavit protokol</button>',
        '◍',
      ),
    ].join('')
  }

  const done = dosesDone(date)

  return [
    statTrio([
      { icon: '◍', value: meds.length, label: 'Dávek celkem' },
      { icon: '✓', value: done, label: 'Hotovo' },
      { icon: '◷', value: meds.length - done, label: 'Zbývá' },
    ]),

    `<div style="margin-top:1.1rem">${medDoses(date)}</div>`,

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
    medForm(),

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
                      <span class="faint">${esc(m.dose)}${medTimes(m) ? ` · ${esc(medTimes(m))}` : ''}</span>
                      ${medEnded(m)}
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
