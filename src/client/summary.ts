import { czDays, daysBetween, formatCzechDate } from '../lib/domain/dates'
import { guideFor } from '../lib/domain/guides'
import { promptFor } from '../lib/domain/journal-prompts'
import { reminders, allEvents } from './screens-more'
import { eventState, journalFor, journalList, journey, moodAverage, profile, viewDate } from './store'
import { esc, plural } from './ui'

/**
 * Souhrn nahoře.
 *
 * Jedna lišta, ze které se dá na první pohled poznat, kde uživatelka je
 * a co se kolem ní děje. Každá dlaždice se dá rozkliknout a rozbalí se
 * pod ní podrobnosti. Bez odchodu z obrazovky, na které právě je.
 */

export type SummaryId = 'faze' | 'tyden' | 'ceka' | 'nalada' | 'pripominky' | 'zapis'

interface Tile {
  id: SummaryId
  label: string
  value: string
  /** Zvýrazněná dlaždice. Něco vyžaduje pozornost. */
  alert?: boolean
}

/** Kolikátý je den cyklu. Jen když se dá spočítat a dává to ještě smysl. */
function cycleDay(): number | null {
  const p = profile()
  if (!p.lastPeriodOn) return null
  const d = daysBetween(p.lastPeriodOn, viewDate()) + 1
  return d >= 1 && d <= 60 ? d : null
}

/** Popisek dne bez úvodního „Dnes je/jste“. */
function shortDayLabel(label: string): string {
  return label.replace(/^Dnes (je|jste) /, '')
}

/** „Dnes“, „Zítra“, „Za 3 dny“. Popisek nad názvem nejbližší události. */
function whenLabel(inDays: number): string {
  return inDays === 0 ? 'Dnes' : inDays === 1 ? 'Zítra' : `Za ${czDays(inDays)}`
}

/** Kolikátý týden ve fázi. */
function weekLabel(): string {
  const state = journey()
  if (state.anchorDate) return `${Math.floor(Math.max(0, state.dayInPhase) / 7) + 1}. týden fáze`
  return 'bez měření'
}

function tiles(): Tile[] {
  const state = journey()
  const date = viewDate()
  const cd = cycleDay()
  const need = reminders(date)
  const avg = moodAverage(7)
  const today = journalFor(date)
  const next = allEvents().find((e) => !eventState(e.id).done && e.onDate >= date)

  // Den nepočítáme vlastní cestou. Bereme popisek, který používá celá
  // aplikace, jinak by se čísla rozcházela o jednotku.
  const dayValue = cd ? `${cd}. den cyklu` : shortDayLabel(state.dayLabel)

  // Na dlaždici musí být vidět hlavně CO přijde. Samotné „za 3 dny“
  // uživatelce nic neřekne. Termín je popisek, název je hodnota.
  const when = next
    ? whenLabel(daysBetween(date, next.onDate))
    : state.nextMilestone
      ? whenLabel(state.nextMilestone.inDays)
      : null
  const what = next ? next.title : (state.nextMilestone?.label ?? null)

  return [
    { id: 'faze', label: 'Kde jste', value: state.phase.name },
    { id: 'tyden', label: weekLabel(), value: dayValue },
    { id: 'ceka', label: when ?? 'Co vás čeká', value: what ?? 'nic v kalendáři' },
    { id: 'nalada', label: 'Jak na tom jste', value: avg !== null ? `${avg} / 5` : 'nezapsáno' },
    {
      id: 'pripominky',
      label: 'Připomínky',
      value: need.length ? String(need.length) : 'nic',
      alert: need.length > 0,
    },
    { id: 'zapis', label: 'Dnešní zápis', value: today ? 'hotovo' : 'chybí', alert: !today },
  ]
}

// ------------------------------------------------------------ podrobnosti ---

function panelFaze(): string {
  const state = journey()
  const guide = guideFor(state.phase.id)
  return `
    <p class="display" style="font-size:1.35rem">${esc(state.phase.title)}</p>
    <p class="soft" style="margin-top:.5rem;line-height:1.65">${esc(guide?.summary ?? state.phase.description)}</p>
    <p class="soft" style="margin-top:.75rem;font-size:.9375rem">${esc(state.dayLabel)}.</p>
    ${
      guide
        ? `<div style="margin-top:1rem"><p class="eyebrow">Na co se připravit</p>
           <ul class="bullets">${guide.prepareFor.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`
        : ''
    }
    <div class="row wrap" style="gap:.5rem;margin-top:1.1rem">
      <button class="btn btn-sm" data-go="faze">Průvodce fází</button>
      <button class="btn btn-ghost btn-sm" data-go="cesta">Celá cesta</button>
    </div>`
}

function panelTyden(): string {
  const state = journey()
  const guide = guideFor(state.phase.id)
  const cd = cycleDay()
  const p = profile()
  return `
    <p class="eyebrow">Kde přesně jste</p>
    <dl class="kv" style="margin-top:.7rem">
      <dt>Fáze</dt><dd>${esc(state.phase.name)}</dd>
      <dt>Den</dt><dd>${esc(state.dayLabel.replace(/^Dnes (je|jste) /, ''))}</dd>
      ${cd ? `<dt>Den cyklu</dt><dd class="num">${cd}.</dd>` : ''}
      ${p.lastPeriodOn ? `<dt>Poslední menstruace</dt><dd>${esc(formatCzechDate(p.lastPeriodOn))}</dd>` : ''}
      ${state.journeyDays !== null ? `<dt>Na cestě</dt><dd>${esc(czDays(state.journeyDays))}</dd>` : ''}
    </dl>
    ${
      guide
        ? `<div style="margin-top:1rem"><p class="eyebrow">Co vás v téhle fázi čeká</p>
           <ul class="bullets">${guide.whatAwaits.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`
        : ''
    }
    ${!cycleDay() ? '<p class="faint" style="margin-top:.9rem;font-size:.8125rem">Den cyklu spočítáme, jakmile v nastavení doplníte první den poslední menstruace.</p>' : ''}
    <button class="btn btn-sm" data-go="nastaveni" style="margin-top:1rem">Upravit data</button>`
}

function panelCeka(): string {
  const date = viewDate()
  const state = journey()
  const guide = guideFor(state.phase.id)
  const next = allEvents()
    .filter((e) => !eventState(e.id).done && e.onDate >= date)
    .slice(0, 5)

  return `
    ${
      next.length
        ? `<p class="eyebrow">Nejbližší termíny</p>
           <ul class="linelist">
             ${next
               .map((e) => {
                 const inDays = daysBetween(date, e.onDate)
                 return `<li><span class="when">${esc(whenLabel(inDays).toLowerCase())}</span><span>${esc(e.title)}</span></li>`
               })
               .join('')}
           </ul>`
        : '<p class="soft" style="line-height:1.65">Nic naplánovaného. Termíny si přidáte v kalendáři. Část jich vznikne sama z vašich dat.</p>'
    }
    ${
      state.nextMilestone
        ? `<p class="soft" style="margin-top:1rem;font-size:.9375rem">Nejbližší milník: <strong>${esc(state.nextMilestone.label)}</strong> za ${esc(czDays(state.nextMilestone.inDays))}.</p>`
        : ''
    }
    ${
      guide
        ? `<div style="margin-top:1rem"><p class="eyebrow">Na co se připravit</p>
           <ul class="bullets">${guide.prepareFor.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>`
        : ''
    }
    <button class="btn btn-sm" data-go="kalendar" style="margin-top:1.1rem">Otevřít kalendář</button>`
}

function panelNalada(): string {
  const rows = journalList().slice(-7)
  const avg = moodAverage(7)
  const last = rows[rows.length - 1]

  if (rows.length === 0) {
    return `<p class="soft" style="line-height:1.65">Zatím nemáte v deníku žádný zápis. Stačí jedno kliknutí na náladu a uvidíte, jak se to v čase vyvíjí.</p>
      <button class="btn btn-sm" data-go="denik" style="margin-top:1rem">Otevřít deník</button>`
  }

  return `
    <p class="eyebrow">Posledních ${esc(plural(rows.length, 'zápis', 'zápisy', 'zápisů'))}</p>
    <div class="row" style="gap:.35rem;margin-top:.8rem;align-items:flex-end;height:3rem">
      ${rows
        .map(
          (r) =>
            `<span title="${esc(formatCzechDate(r.date))}: ${r.mood}/5" style="flex:1;background:var(--taupe);opacity:${0.35 + r.mood * 0.13};height:${r.mood * 20}%;border-radius:3px"></span>`,
        )
        .join('')}
    </div>
    <dl class="kv" style="margin-top:1rem">
      ${avg !== null ? `<dt>Průměr za týden</dt><dd class="num">${avg} / 5</dd>` : ''}
      <dt>Poslední zápis</dt><dd>${esc(formatCzechDate(last.date))} · ${last.mood}/5</dd>
    </dl>
    ${last.win.trim() ? `<p class="whybox" style="margin-top:.8rem"><strong>Povedlo se:</strong> ${esc(last.win)}</p>` : ''}
    <button class="btn btn-sm" data-go="denik/vyvoj" style="margin-top:1rem">Celý vývoj</button>`
}

function panelPripominky(): string {
  const date = viewDate()
  const need = reminders(date)
  if (need.length === 0) {
    return `<p class="soft" style="line-height:1.65">Nic nečeká. Až se něco přiblíží nebo zůstane neodškrtnuté, objeví se to tady.</p>
      <button class="btn btn-sm" data-go="kalendar" style="margin-top:1rem">Otevřít kalendář</button>`
  }
  return `
    <p class="eyebrow">Odškrtněte, co proběhlo</p>
    <div class="stack" style="gap:.4rem;margin-top:.7rem">
      ${need
        .slice(0, 5)
        .map((e) => {
          const inDays = daysBetween(date, e.onDate)
          const when = inDays === 0 ? 'dnes' : inDays === 1 ? 'zítra' : `před ${czDays(-inDays)}`
          return `<button class="check" data-act="event-done" data-arg="${esc(e.id)}">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(e.title)}
              <br><span class="faint" style="font-size:.8125rem">${esc(when)}${inDays < 0 ? ' · neodškrtnuté' : ''}</span></span>
          </button>`
        })
        .join('')}
    </div>
    <button class="btn btn-sm" data-go="kalendar" style="margin-top:1.1rem">Celý kalendář</button>`
}

function panelZapis(): string {
  const state = journey()
  const date = viewDate()
  const row = journalFor(date)
  const prompt = promptFor(state.phase.id, state.dayInPhase, date)

  if (!row) {
    return `
      <p class="soft" style="line-height:1.65">Dnes ještě nemáte zápis. Otázka na dnešek zní:</p>
      <p class="display" style="font-size:1.2rem;margin-top:.7rem;line-height:1.4">${esc(prompt.text)}</p>
      <p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.5">${esc(prompt.why)}</p>
      <button class="btn btn-primary btn-sm" data-go="denik" style="margin-top:1.1rem">Zapsat dnešek</button>`
  }

  return `
    <dl class="kv">
      <dt>Nálada</dt><dd class="num">${row.mood} / 5</dd>
      <dt>Úzkost</dt><dd class="num">${row.anxiety} / 5</dd>
      <dt>Naděje</dt><dd class="num">${row.hope} / 5</dd>
    </dl>
    ${row.win.trim() ? `<p class="whybox" style="margin-top:.9rem"><strong>Povedlo se:</strong> ${esc(row.win)}</p>` : ''}
    ${row.promptAnswer.trim() ? `<div style="margin-top:.9rem"><p class="eyebrow">${esc(prompt.text)}</p><p class="soft" style="margin-top:.35rem;line-height:1.65;font-size:.9375rem">${esc(row.promptAnswer)}</p></div>` : ''}
    ${row.note.trim() ? `<p class="soft" style="margin-top:.9rem;line-height:1.65;font-size:.9375rem">${esc(row.note)}</p>` : ''}
    <button class="btn btn-sm" data-go="denik" style="margin-top:1.1rem">Upravit zápis</button>`
}

const PANELS: Record<SummaryId, () => string> = {
  faze: panelFaze,
  tyden: panelTyden,
  ceka: panelCeka,
  nalada: panelNalada,
  pripominky: panelPripominky,
  zapis: panelZapis,
}

export function renderSummary(open: SummaryId | null): string {
  const state = journey()
  const date = viewDate()

  return `<div class="summary no-print">
    <div class="summary-head">
      <div style="min-width:0">
        <p class="eyebrow">Váš přehled</p>
        <p class="display" style="font-size:1.15rem;margin-top:.15rem">${esc(state.phase.title)}</p>
      </div>
      <span class="badge badge-soft">${esc(formatCzechDate(date))}</span>
    </div>
    <div class="summary-tiles">
      ${tiles()
        .map(
          (t) => `<button class="sumtile${t.alert ? ' alert' : ''}" data-act="summary" data-arg="${t.id}" aria-pressed="${open === t.id}">
            <span class="lbl">${esc(t.label)}</span>
            <span class="val">${esc(t.value)}</span>
          </button>`,
        )
        .join('')}
    </div>
    ${
      open
        ? `<div class="summary-panel">
            ${PANELS[open]()}
            <button class="btn btn-ghost btn-sm" data-act="summary" data-arg="${open}" style="margin-top:1rem">Sbalit</button>
          </div>`
        : ''
    }
  </div>`
}
