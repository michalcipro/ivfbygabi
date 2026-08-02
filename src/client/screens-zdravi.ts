import { LAB_PARAMS, LAB_BY_KEY } from '../lib/health/lab-params'
import { guidanceFor, type Evidence } from '../lib/health/lab-guidance'
import { NO_DIAGNOSIS, readSeries, TREND_ICON, TREND_LABEL } from '../lib/health/interpret'
import { formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import { guideFor } from '../lib/domain/guides'
import { journey, S, viewDate } from './store'
import { empty, esc, head, labChart, note, plural, sectionTitle } from './ui'

/**
 * Zdraví.
 *
 * Hodnoty nejsou jen body v grafu. U každé je popsané, co dělá v těle, co
 * s ní hýbe, co se s tím obecně dá dělat (strava, doplňky, pohyb) a jaké
 * kontroly navazují. A u každého doporučení, jak silný důvod za ním stojí.
 *
 * Co tu nikdy nenajdete: výrok, jestli je vaše hodnota dobrá nebo špatná.
 */

const EVIDENCE_LABEL: Record<Evidence, string> = {
  standard: 'Doložené',
  diskutovaný: 'Diskutované',
  'podle hodnot': 'Podle hodnot',
}

const AREA_ICON: Record<string, string> = {
  Strava: '◍',
  Doplňky: '✦',
  Pohyb: '◈',
  'Spánek a stres': '☾',
  Návyky: '❖',
}

interface Series {
  key: string
  name: string
  unit: string
  points: { value: number; onDate: string; id: string }[]
}

function seriesList(): Series[] {
  const byKey = new Map<string, Series>()
  for (const l of S.d.labs) {
    const param = LAB_BY_KEY[l.paramKey]
    const s = byKey.get(l.paramKey) ?? {
      key: l.paramKey,
      name: param?.name ?? l.paramKey,
      unit: param?.unit ?? l.unit,
      points: [],
    }
    s.points.push({ value: l.value, onDate: l.onDate, id: l.id })
    byKey.set(l.paramKey, s)
  }
  for (const s of byKey.values()) s.points.sort((a, b) => a.onDate.localeCompare(b.onDate))
  return [...byKey.values()].sort((a, b) => a.name.localeCompare(b.name, 'cs'))
}

function addForm(preselect?: string): string {
  return `<section class="surface pad">
    <p class="eyebrow">Přidat hodnotu</p>
    <div class="formrow" style="margin-top:.9rem">
      <label class="label" for="lab-key">Parametr</label>
      <select class="field" id="lab-key">
        ${LAB_PARAMS.map(
          (p) => `<option value="${esc(p.key)}" ${preselect === p.key ? 'selected' : ''}>${esc(p.name)} (${esc(p.unit)})</option>`,
        ).join('')}
      </select>
    </div>
    <div class="two" style="margin-top:1.1rem">
      <div><label class="label" for="lab-value">Hodnota</label><input class="field" id="lab-value" inputmode="decimal" placeholder="např. 1,2" autocomplete="off"></div>
      <div><label class="label" for="lab-date">Datum odběru</label><input class="field" type="date" id="lab-date" value="${esc(viewDate())}"></div>
    </div>
    <button class="btn btn-primary" data-act="lab-add" style="margin-top:1.25rem">Uložit hodnotu</button>
  </section>`
}

// ----------------------------------------------------------------- přehled ---

export function screenZdravi(): string {
  const list = seriesList()
  const state = journey()
  const guide = guideFor(state.phase.id)

  if (list.length === 0) {
    return [
      head('Vaše čísla', 'Zdraví', 'Přidejte hodnotu a uvidíte nejen graf, ale i to, co ten parametr v těle dělá a co se s ním dá dělat.'),
      addForm(),
      guide
        ? `<section class="surface pad">
            <p class="eyebrow">Co má smysl sledovat ve vaší fázi</p>
            <ul class="bullets" style="margin-top:.8rem">${guide.track.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          </section>`
        : '',
      empty(
        'Zatím žádné hodnoty',
        'Můžete je zadat ručně výše, nebo vložit text lékařské zprávy v Dokumentech. Hodnoty z něj vytáhneme samy.',
        '<button class="btn" data-go="dokumenty">Vložit zprávu</button>',
        '◉',
      ),
    ].join('')
  }

  const card = (s: Series) => {
    const reading = readSeries(s.key, s.points)!
    const param = LAB_BY_KEY[s.key]
    return `<button class="tile" data-go="hodnota/${esc(s.key)}" style="align-items:flex-start">
      <i>${TREND_ICON[reading.trend]}</i>
      <span style="min-width:0;flex:1">
        <h4 class="display">${esc(s.name)}</h4>
        <p class="num" style="font-size:1.15rem;color:var(--fg);margin-top:.2rem">${reading.latest.value} ${esc(s.unit)}</p>
        <p>${esc(reading.changeText)}</p>
        <p class="faint" style="font-size:.75rem;margin-top:.3rem">${esc(formatCzechDate(reading.latest.onDate))} · ${esc(plural(s.points.length, 'hodnota', 'hodnoty', 'hodnot'))}${param?.reference ? ` · ${esc(TREND_LABEL[reading.trend])}` : ''}</p>
      </span>
      <span class="go">›</span>
    </button>`
  }

  return [
    head('Vaše čísla', 'Zdraví', `${esc(plural(list.length, 'sledovaný parametr', 'sledované parametry', 'sledovaných parametrů'))}. U každého najdete, co znamená pro tělo a co se s ním dá dělat.`),
    `<div class="stack" style="gap:.75rem">${list.map(card).join('')}</div>`,
    addForm(),
    guide
      ? `<section class="surface pad">
          <p class="eyebrow">Co má smysl sledovat ve vaší fázi</p>
          <ul class="bullets" style="margin-top:.8rem">${guide.track.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
          <button class="btn btn-sm" data-go="faze/${esc(state.phase.id)}/prehled" style="margin-top:1rem">Průvodce fází</button>
        </section>`
      : '',
    note(NO_DIAGNOSIS),
  ].join('')
}

// ------------------------------------------------------------------ detail ---

export function screenHodnota(key: string): string {
  const param = LAB_BY_KEY[key]
  const all = seriesList().find((s) => s.key === key)

  if (!param) {
    return empty('Parametr nenalezen', 'Vraťte se do sekce Zdraví.', '<button class="btn" data-go="zdravi">Zpět na Zdraví</button>')
  }

  const guidance = guidanceFor(key)
  const reading = all ? readSeries(key, all.points) : null

  const chart = all
    ? `<section class="surface pad">
        ${sectionTitle('Vývoj v čase', esc(plural(all.points.length, 'hodnota', 'hodnoty', 'hodnot')))}
        ${labChart(all.points, {
          low: param.reference?.low,
          high: param.reference?.high,
          unit: param.unit,
          label: `Vývoj ${param.name}`,
          dateLabel: formatCzechDateShort,
        })}
        ${param.reference?.note ? `<p class="faint" style="margin-top:.75rem;font-size:.8125rem;line-height:1.55">Orientačně: ${esc(param.reference.note)}</p>` : ''}
      </section>`
    : ''

  const readingBlock = reading
    ? `<section class="surface pad">
        <p class="eyebrow">Co se dá vyčíst</p>
        <p class="display" style="font-size:1.5rem;margin-top:.5rem">${reading.latest.value} ${esc(param.unit)}</p>
        <p class="faint" style="font-size:.8125rem">${esc(formatCzechDate(reading.latest.onDate, { weekday: true }))}</p>
        <ul class="bullets" style="margin-top:1rem">
          <li>${esc(reading.changeText)}</li>
          ${reading.positionText ? `<li>${esc(reading.positionText)}</li>` : ''}
          ${reading.doublingText ? `<li>${esc(reading.doublingText)}</li>` : ''}
        </ul>
        <p class="whybox" style="margin-top:1rem">${esc(NO_DIAGNOSIS)}</p>
      </section>`
    : ''

  const g = guidance
    ? [
        `<section class="surface pad">
          <p class="eyebrow">Co to v těle dělá</p>
          <p class="soft" style="margin-top:.6rem;line-height:1.75">${esc(guidance.inBody)}</p>
        </section>`,

        `<section class="surface pad">
          <p class="eyebrow">Kdy má měření smysl</p>
          <p class="soft" style="margin-top:.6rem;line-height:1.75">${esc(guidance.measuring)}</p>
        </section>`,

        `<section class="surface pad">
          <p class="eyebrow">Co s hodnotou hýbe</p>
          <ul class="bullets" style="margin-top:.8rem">${guidance.whatMoves.map((w) => `<li>${esc(w)}</li>`).join('')}</ul>
        </section>`,

        `<section>
          ${sectionTitle('Co se s tím dá dělat', 'U každého je napsané, jak silný důvod za ním stojí')}
          <div class="stack" style="gap:.75rem">
            ${guidance.lifestyle
              .map(
                (l) => `<div class="surface" style="padding:1.15rem 1.3rem">
                  <div class="row wrap" style="justify-content:space-between;gap:.75rem">
                    <p style="font-weight:500">${AREA_ICON[l.area] ?? '•'} ${esc(l.area)}</p>
                    <span class="badge">${esc(EVIDENCE_LABEL[l.evidence])}</span>
                  </div>
                  <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">${esc(l.text)}</p>
                </div>`,
              )
              .join('')}
          </div>
        </section>`,

        `<section class="surface pad">
          <p class="eyebrow">Jaké kontroly obvykle navazují</p>
          <ul class="bullets" style="margin-top:.8rem">${guidance.checkups.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
        </section>`,

        `<section class="surface pad">
          <p class="eyebrow">Na co se zeptat lékaře</p>
          ${guidance.ask
            .map((q, i) => {
              const k = `lab:${key}:${i}`
              return `<button class="check" data-act="check" data-arg="${esc(k)}" aria-pressed="${Boolean(S.d.checks[k])}" style="margin-top:.85rem">
                <span class="box">✓</span>
                <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(q)}</span>
              </button>`
            })
            .join('')}
        </section>`,
      ].join('')
    : note('K tomuhle parametru zatím podrobný popis nemáme. Graf a hodnoty fungují normálně.')

  const history = all
    ? `<section class="surface pad">
        <p class="eyebrow">Vaše hodnoty</p>
        <ul class="linelist">
          ${all.points
            .slice()
            .reverse()
            .map(
              (p) =>
                `<li><span class="when">${esc(formatCzechDate(p.onDate))}</span><span class="num" style="font-weight:500">${p.value} ${esc(param.unit)}</span><button class="btn btn-ghost btn-sm" data-act="lab-del" data-arg="${esc(p.id)}" style="margin-left:auto">×</button></li>`,
            )
            .join('')}
        </ul>
      </section>`
    : ''

  return [
    `<header class="head rise">
      <p class="eyebrow">Hodnota · ${esc(param.unit)}</p>
      <h1 class="display">${esc(param.name)}</h1>
      <p class="lede">${esc(param.explain)}</p>
    </header>`,
    readingBlock,
    chart,
    g,
    history,
    addForm(key),
    note(NO_DIAGNOSIS),
  ].join('')
}
