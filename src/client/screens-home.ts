import { PHASES, PHASE_GROUPS, PHASE_GROUP_META, PHASE_IDS, type PhaseId } from '../lib/domain/phases'
import { MODIFIER_LABELS, TOPIC_LABELS, type TopicId } from '../lib/domain/profile'
import { addDays, czDays, formatCzechDate, seedFrom } from '../lib/domain/dates'
import { autoEventsFor } from '../lib/domain/auto-events'
import { CATALOG, CONTENT_STATS, DAILY_CARDS, ENCOURAGEMENTS, contentById } from '../lib/content'
import { buildRails, pickDailyCard, recommend } from '../lib/content/recommend'
import { affinity, journey, journalFor, moodConcern, profile, S, viewDate } from './store'
import { contentCard, esc, head, heroStyle, note, plural, ring, sectionTitle } from './ui'

/** Domovská stránka, Objevit a průvodce cestou. */

function encouragementFor(tone: string, date: string) {
  const matching = ENCOURAGEMENTS.filter((e) => e.tone === tone)
  const pool = matching.length > 0 ? matching : ENCOURAGEMENTS
  if (pool.length === 0) return null
  return pool[seedFrom(date, tone) % pool.length]
}

/** „Protože jste 6. den po transferu“ — důvod, který se ukazuje u doporučení. */
export function reasonFromDayLabel(dayLabel: string): string {
  return dayLabel.replace(/^Dnes (je|jste) /, 'Protože jste ').replace(/^Dnes /, 'Protože ')
}

function railBlock(rail: { id: string; title: string; reason: string; items: { id: string }[] }): string {
  const items = rail.items.map((i) => contentById(i.id)).filter(Boolean)
  if (items.length === 0) return ''
  return `<section class="rise">
    ${sectionTitle(rail.title, rail.reason)}
    <div class="rail">${items.map((i) => contentCard(i)).join('')}</div>
  </section>`
}

// -------------------------------------------------------------------- Dnes ---

/** Pás cesty: co bylo, kde jsem, co přijde. Klik vede do průvodce. */
function journeyStrip(phaseId: PhaseId): string {
  const phase = PHASES[phaseId]
  const idx = PHASE_IDS.indexOf(phaseId)
  const prev = idx > 0 ? PHASES[PHASE_IDS[idx - 1]] : null
  const next = phase.next.length ? PHASES[phase.next[0]] : null

  const step = (when: string, what: string, now = false) =>
    `<span class="step ${now ? 'now' : ''}"><span class="when">${esc(when)}</span><span class="what">${esc(what)}</span></span>`

  return `<button class="journey" data-go="cesta" aria-label="Otevřít průvodce vaší cestou">
    ${prev ? step('bylo', prev.name) : ''}
    ${step('jste tady', phase.name, true)}
    ${next ? step('bude', next.name) : ''}
  </button>`
}

/** Pás IVF cyklu. Ukazuje se jen tam, kde dává smysl — v léčbě a v čekání. */
function cycleStrip(): string {
  const p = profile()
  const today = viewDate()
  const legs: { label: string; date: string | null }[] = [
    { label: 'Stimulace', date: p.stimulationStartOn },
    { label: 'Odběr', date: p.retrievalOn },
    { label: 'Transfer', date: p.transferOn },
    { label: 'Výsledek', date: p.betaTestOn },
  ]
  if (!legs.some((l) => l.date)) return ''

  const done = (d: string | null) => Boolean(d && d <= today)
  const lastDoneIdx = legs.reduce((acc, l, i) => (done(l.date) ? i : acc), -1)

  return `<div class="surface pad">
    <div class="row wrap" style="justify-content:space-between;gap:.75rem">
      <p class="eyebrow">Váš cyklus</p>
      <span class="faint" style="font-size:.75rem">Data z vašeho profilu</span>
    </div>
    <div class="cycle">
      ${legs
        .map((l, i) => {
          const isDone = done(l.date)
          const isNow = i === lastDoneIdx
          return `<span class="leg ${isNow ? 'now' : ''}">
            <span class="bar"><i style="width:${isDone ? 100 : 0}%"></i></span>
            <span class="lab">${esc(l.label)}${l.date ? `<br>${esc(formatCzechDate(l.date))}` : '<br>—'}</span>
          </span>`
        })
        .join('')}
    </div>
  </div>`
}

function firstSteps(): string {
  if (S.d.seenTour) return ''
  return `<section class="surface pad rise">
    <div class="row wrap" style="justify-content:space-between;gap:1rem">
      <p class="eyebrow">Než se rozkoukáte</p>
      <button class="btn btn-ghost btn-sm" data-act="hide-tour">Skrýt</button>
    </div>
    <div class="stack" style="gap:.9rem;margin-top:1rem">
      ${[
        ['dnes', '☀', 'Tahle stránka', 'Zítra tu bude jiná karta dne, jiné povzbuzení a jinak seřazený obsah.'],
        ['objevit', '❋', 'Objevit', 'Řady obsahu jako na Netflixu. U každé je napsáno, proč ji vidíte.'],
        ['gabi', '✦', 'Gabi', 'Zeptejte se vlastními slovy. Zná vaši fázi.'],
      ]
        .map(
          ([route, icon, t, b]) =>
            `<button class="tile" data-go="${route}" style="padding:.85rem 1rem"><i>${icon}</i><span style="min-width:0"><h4 class="display" style="font-size:.9375rem;font-family:var(--sans);font-weight:500">${t}</h4><p style="margin-top:.15rem">${b}</p></span><span class="go">›</span></button>`,
        )
        .join('')}
    </div>
  </section>`
}

export function screenDnes(): string {
  const state = journey()
  const p = profile()
  const date = viewDate()
  const card = pickDailyCard(DAILY_CARDS, state)
  const aff = affinity()
  const rails = buildRails(CATALOG, state, aff)
  const feature = recommend(CATALOG, state, aff, { limit: 1 })[0]
  const enc = encouragementFor(state.phase.tone, date)
  const todayJournal = journalFor(date)
  const greeting = p.displayName ? `Dobrý den, ${p.displayName}.` : 'Dobrý den.'

  const offsetBanner =
    S.d.dayOffset !== 0
      ? `<div class="banner" style="border-color:var(--taupe)">
          <span style="color:var(--taupe)">◷</span>
          <span>Díváte se na <strong>${esc(formatCzechDate(date, { weekday: true }))}</strong>, ne na dnešek.</span>
          <button class="btn btn-sm" data-act="day-reset" style="margin-left:auto">Zpět na dnešek</button>
        </div>`
      : ''

  const header = `<header class="head rise">
    <p class="eyebrow">${esc(formatCzechDate(date, { weekday: true }))}</p>
    <h1 class="display">${esc(greeting)}</h1>
    <p class="lede">${esc(state.dayLabel)}</p>
    ${state.gestationLabel ? `<p class="faint" style="margin-top:.3rem;font-size:.875rem">Gestační stáří ${esc(state.gestationLabel)}</p>` : ''}
    ${state.babyAgeLabel ? `<p class="faint" style="margin-top:.3rem;font-size:.875rem">${esc(state.babyAgeLabel)}</p>` : ''}
  </header>`

  const dayCard = card
    ? `<section class="rise">
        <div class="daycard grain" style="${heroStyle('linen')}">
          <div class="inner">
            <div class="row" style="justify-content:space-between;align-items:flex-start;gap:1.5rem">
              <div style="min-width:0">
                <p class="eyebrow">Dnešní téma</p>
                <h2 class="display">${esc(card.headline)}</h2>
              </div>
              ${ring(state.progress)}
            </div>
            <p class="lede">${esc(card.body)}</p>
            ${
              card.whatsHappening?.length
                ? `<div style="margin-top:1.8rem"><p class="eyebrow">Co se dnes může dít</p>
                   <ul class="bullets two-col">${card.whatsHappening.map((w) => `<li>${esc(w)}</li>`).join('')}</ul></div>`
                : ''
            }
            ${card.tip ? `<p class="tipbox"><strong>Tip: </strong>${esc(card.tip)}</p>` : ''}
            ${
              card.callDoctorIf?.length
                ? `<div class="doctorbox"><p style="font-size:.8125rem;font-weight:600">Ozvěte se lékaři, pokud:</p>
                   <ul>${card.callDoctorIf.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>`
                : ''
            }
          </div>
        </div>
      </section>`
    : `<section class="surface pad rise">
        <h2 class="display" style="font-size:1.5rem">${esc(state.phase.title)}</h2>
        <p class="soft" style="margin-top:.75rem;line-height:1.7">${esc(state.phase.description)}</p>
      </section>`

  const task = card?.task
    ? `<div class="surface pad">
        <p class="eyebrow">Dnešní úkol</p>
        <button class="check" data-act="task" aria-pressed="${Boolean(S.d.taskDone[date])}" style="margin-top:.9rem">
          <span class="box">✓</span>
          <span class="txt" style="font-size:.9375rem;line-height:1.6">${esc(card.task)}</span>
        </button>
      </div>`
    : ''

  const mood = `<div class="surface pad">
    <p class="eyebrow">Jak vám dnes je?</p>
    <div class="mood">
      ${[1, 2, 3, 4, 5]
        .map(
          (v) =>
            `<button data-act="mood" data-arg="${v}" aria-pressed="${todayJournal?.mood === v}" aria-label="Nálada ${v} z 5">${['😞', '😔', '😐', '🙂', '😊'][v - 1]}</button>`,
        )
        .join('')}
    </div>
    <p class="faint" style="margin-top:.8rem;font-size:.8125rem">${
      todayJournal
        ? 'Zapsáno do deníku. <button class="btn btn-ghost btn-sm" data-go="denik">Doplnit zápis</button>'
        : 'Jedno kliknutí. Podrobnosti můžete doplnit v deníku.'
    }</p>
  </div>`

  const concern = moodConcern()
    ? `<div class="surface pad" style="border-color:var(--blush)">
        <p class="eyebrow" style="color:var(--blush-deep)">Všimli jsme si</p>
        <p style="margin-top:.6rem;line-height:1.65">Poslední zápisy jsou dlouhodobě nízko. Není to diagnóza — jen upozornění, že tohle bývá moment, kdy pomůže někdo zvenčí.</p>
        <p class="soft" style="margin-top:.6rem;font-size:.9375rem;line-height:1.65">Ozvěte se svému gynekologovi nebo praktickému lékaři. Kdykoliv a zdarma je tu také <strong>Linka první psychické pomoci 116 123</strong>.</p>
      </div>`
    : ''

  const next = state.nextMilestone
    ? `<div class="banner">
        <span style="color:var(--taupe)">◈</span>
        <span>Nejbližší milník: <strong>${esc(state.nextMilestone.label)}</strong> za ${esc(czDays(state.nextMilestone.inDays))}</span>
        <button class="btn btn-sm" data-go="kalendar" style="margin-left:auto">Kalendář</button>
      </div>`
    : ''

  const featureBlock = feature
    ? `<section class="rise">
        ${sectionTitle('Dnešní doporučení', reasonFromDayLabel(state.dayLabel))}
        <button class="featurecard" data-go="cist/${esc(feature.id)}">
          <div class="hero grain" style="${heroStyle(feature.hero)}"></div>
          <div class="txt">
            <p class="eyebrow">${esc(feature.minutes)} min · ${esc(feature.topics.map((t) => TOPIC_LABELS[t]).slice(0, 2).join(' · '))}</p>
            <h3 class="display">${esc(feature.title)}</h3>
            <p class="soft" style="margin-top:.75rem;font-size:.9375rem;line-height:1.6">${esc(feature.excerpt)}</p>
            <span style="margin-top:1.5rem;font-size:.875rem;font-weight:500;color:var(--taupe-deep)">Otevřít →</span>
          </div>
        </button>
      </section>`
    : ''

  const meds = S.d.meds.length
    ? `<div class="surface pad">
        <div class="row wrap" style="justify-content:space-between;gap:.75rem">
          <h3 class="display" style="font-size:1.25rem">Dnešní léky</h3>
          <button class="btn btn-ghost btn-sm" data-go="kalendar">Upravit</button>
        </div>
        <ul class="linelist">
          ${S.d.meds
            .map(
              (m) =>
                `<li><span>${esc(m.name)}${m.dose ? ` <span class="faint">· ${esc(m.dose)}</span>` : ''}</span>${
                  m.timeOfDay ? `<span class="faint num" style="margin-left:auto;font-size:.75rem">${esc(m.timeOfDay)}</span>` : ''
                }</li>`,
            )
            .join('')}
        </ul>
      </div>`
    : ''

  const upcoming = upcomingEvents(date, 5)
  const upcomingBlock = upcoming.length
    ? `<div class="surface pad">
        <div class="row wrap" style="justify-content:space-between;gap:.75rem">
          <h3 class="display" style="font-size:1.25rem">Co vás čeká</h3>
          <button class="btn btn-ghost btn-sm" data-go="kalendar">Vše</button>
        </div>
        <ul class="linelist">
          ${upcoming
            .map(
              (e) =>
                `<li><span class="when">${e.inDays === 0 ? 'dnes' : e.inDays === 1 ? 'zítra' : `za ${e.inDays} dní`}</span><span>${esc(e.title)}</span></li>`,
            )
            .join('')}
        </ul>
      </div>`
    : ''

  const railBlocks = rails.slice(0, 2).map(railBlock).join('')

  const quote = enc
    ? `<section class="rise"><div class="quote grain" style="${heroStyle('dawn')}">
        <p>${esc(enc.text)}</p>
        ${enc.author ? `<p class="by">${esc(enc.author)}</p>` : ''}
      </div></section>`
    : ''

  const reflection = card?.reflection
    ? `<section class="surface pad">
        <p class="eyebrow">Večerní reflexe</p>
        <p class="display" style="font-size:1.3rem;margin-top:.7rem;line-height:1.4">${esc(card.reflection)}</p>
        <button class="btn btn-sm" data-go="denik" style="margin-top:1.1rem">Zapsat do deníku</button>
      </section>`
    : ''

  const tomorrow = addDays(date, 1)
  const footer = `<section style="border-top:1px solid var(--line);padding-top:2rem;text-align:center" class="no-print">
    <p class="soft" style="font-size:.9375rem">Zítra tu na vás bude čekat něco jiného.</p>
    <div class="row wrap" style="gap:.5rem;justify-content:center;margin-top:.9rem">
      <button class="btn btn-sm" data-act="day-peek">Ukázat ${esc(formatCzechDate(tomorrow))} →</button>
      <button class="btn btn-ghost btn-sm" data-go="proc">Proč vidím právě tohle?</button>
    </div>
  </section>`

  return [
    offsetBanner,
    header,
    journeyStrip(state.phase.id),
    ['treatment', 'waiting'].includes(state.group) ? cycleStrip() : '',
    dayCard,
    task || mood ? `<section class="two">${task}${mood}</section>` : '',
    firstSteps(),
    concern,
    next,
    featureBlock,
    meds || upcomingBlock ? `<section class="two">${meds}${upcomingBlock}</section>` : '',
    railBlocks,
    quote,
    reflection,
    footer,
  ]
    .filter(Boolean)
    .join('')
}

/** Události od dneška dál — vlastní i automaticky doplněné. */
export function upcomingEvents(from: string, limit: number) {
  const state = journey()
  const auto = autoEventsFor(profile(), state).map((e) => ({ ...e, auto: true, done: false, id: `auto:${e.title}:${e.onDate}` }))
  const mine = S.d.events.map((e) => ({ ...e, auto: false, location: null }))
  return [...mine, ...auto]
    .filter((e) => !e.done && e.onDate >= from)
    .sort((a, b) => a.onDate.localeCompare(b.onDate))
    .slice(0, limit)
    .map((e) => ({
      ...e,
      inDays: Math.round((Date.parse(e.onDate) - Date.parse(from)) / 86_400_000),
    }))
}

// ----------------------------------------------------------------- Objevit ---

export function screenObjevit(): string {
  const state = journey()
  const rails = buildRails(CATALOG, state, affinity())

  return [
    head(
      'Obsah poskládaný na dnešek',
      'Objevit',
      'Řady se skládají podle toho, kolikátý je den vaší cesty. U každé je napsáno, proč ji vidíte — a zítra budou jiné.',
    ),
    rails.map(railBlock).join(''),
    `<section class="center" style="border-top:1px solid var(--line);padding-top:2rem">
      <p class="soft" style="font-size:.9375rem">Hledáte něco konkrétního?</p>
      <button class="btn btn-sm" data-go="knihovna" style="margin-top:.75rem">Prohledat celou knihovnu (${CONTENT_STATS.items} materiálů)</button>
    </section>`,
  ].join('')
}

// -------------------------------------------------------------- Vaše cesta ---

export function screenCesta(): string {
  const state = journey()

  const groups = PHASE_GROUPS.map((g) => {
    const meta = PHASE_GROUP_META[g]
    const phases = PHASE_IDS.map((id) => PHASES[id]).filter((p) => p.group === g)
    return `<section>
      ${sectionTitle(meta.name, meta.blurb)}
      <div class="tiles">
        ${phases
          .map((p) => {
            const here = p.id === state.phase.id
            return `<button class="tile" data-go="faze/${esc(p.id)}"${here ? ' style="border-color:var(--taupe);box-shadow:var(--veil)"' : ''}>
              <i>${here ? '◉' : '○'}</i>
              <span style="min-width:0">
                ${here ? '<p class="eyebrow" style="color:var(--taupe-deep)">Jste tady</p>' : ''}
                <h4 class="display">${esc(p.name)}</h4>
                <p>${esc(p.description)}</p>
              </span>
              <span class="go">›</span>
            </button>`
          })
          .join('')}
      </div>
    </section>`
  }).join('')

  return [
    head(
      'Celá cesta, ne jeden cyklus',
      'Vaše cesta',
      `${PHASE_IDS.length} fází od prvního rozhodnutí po batolecí období. Vaše aktuální fáze je zvýrazněná — a když se posunete, stačí ji přepnout.`,
    ),
    `<div class="surface pad">
      <p class="eyebrow">Právě teď</p>
      <h2 class="display" style="font-size:1.5rem;margin-top:.5rem">${esc(state.phase.title)}</h2>
      <p class="soft" style="margin-top:.5rem">${esc(state.dayLabel)}</p>
      <div class="row wrap" style="gap:.5rem;margin-top:1.1rem">
        <button class="btn btn-sm" data-go="faze/${esc(state.phase.id)}">Otevřít mou fázi</button>
        <button class="btn btn-ghost btn-sm" data-go="nastaveni">Změnit, kde jsem</button>
      </div>
    </div>`,
    groups,
  ].join('')
}

export function screenFaze(phaseId: string): string {
  const phase = PHASES[phaseId as PhaseId]
  if (!phase) return head('Fáze', 'Fáze nenalezena', 'Zkuste se vrátit do průvodce.')

  const state = journey()
  const here = phase.id === state.phase.id
  const items = CATALOG.filter((c) => c.phases.includes(phase.id)).slice(0, 12)
  const cards = DAILY_CARDS.filter((c) => c.phases.includes(phase.id)).length
  const meta = PHASE_GROUP_META[phase.group]

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(meta.name)}</p>
      <h1 class="display">${esc(phase.title)}</h1>
      <p class="lede">${esc(phase.description)}</p>
      ${here ? `<p class="badge badge-soft" style="margin-top:1rem">Tady jste právě teď · ${esc(state.dayLabel.replace(/^Dnes (je|jste) /, ''))}</p>` : ''}
    </header>`,

    `<div class="surface pad">
      <dl class="kv">
        ${phase.dayLabel ? `<dt>Popisek dne</dt><dd>${esc(`Dnes je ${phase.dayLabel(3)}`)}</dd>` : ''}
        <dt>Typická délka</dt><dd>${phase.typicalDays ? `<span class="num">${phase.typicalDays}</span> dní` : 'bez pevné délky'}</dd>
        <dt>Denních karet</dt><dd class="num">${cards}</dd>
        <dt>Materiálů</dt><dd class="num">${CATALOG.filter((c) => c.phases.includes(phase.id)).length}</dd>
      </dl>
    </div>`,

    !here
      ? `<div class="banner"><span style="color:var(--taupe)">◈</span><span>Jste v jiné fázi. Pokud jste se posunula sem, přepněte to v nastavení — obsah se přepočítá.</span>
         <button class="btn btn-sm" data-go="nastaveni" style="margin-left:auto">Nastavení</button></div>`
      : '',

    phase.next.length
      ? `<section>
          ${sectionTitle('Co přijde potom', 'Běžné pokračování — ne předpověď')}
          <div class="tiles">
            ${phase.next
              .map((n) => {
                const np = PHASES[n]
                return `<button class="tile" data-go="faze/${esc(np.id)}"><i>→</i><span style="min-width:0"><h4 class="display">${esc(np.name)}</h4><p>${esc(np.description)}</p></span><span class="go">›</span></button>`
              })
              .join('')}
          </div>
        </section>`
      : '',

    items.length
      ? `<section>
          ${sectionTitle('Obsah pro tuhle fázi', `${plural(items.length, 'materiál', 'materiály', 'materiálů')} z knihovny`)}
          <div class="grid-cards">${items.map((i) => contentCard(i)).join('')}</div>
        </section>`
      : '',
  ].join('')
}

// ------------------------------------------------------- Proč vidím tohle ---

/**
 * Transparentnost doporučování. Uživatelka má právo vidět, z čeho se
 * skládá to, co jí ukazujeme — a taky to smazat.
 */
export function screenProc(): string {
  const state = journey()
  const p = profile()
  const aff = affinity()

  const topics = (Object.entries(aff.topics) as [TopicId, number][])
    .filter(([, v]) => v > 0.05)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 8)

  const rails = buildRails(CATALOG, state, aff)

  return [
    head(
      'Transparentnost',
      'Proč vidím právě tohle',
      'Žádná magie. Tady je celý vstup, ze kterého se skládá vaše domovská stránka.',
    ),

    `<div class="surface pad">
      <p class="eyebrow">Co o vás víme</p>
      <dl class="kv" style="margin-top:.9rem">
        <dt>Fáze</dt><dd>${esc(state.phase.title)}</dd>
        <dt>Den ve fázi</dt><dd>${esc(state.dayLabel)}</dd>
        ${state.gestationLabel ? `<dt>Gestační stáří</dt><dd>${esc(state.gestationLabel)}</dd>` : ''}
        ${state.babyAgeLabel ? `<dt>Věk miminka</dt><dd>${esc(state.babyAgeLabel)}</dd>` : ''}
        <dt>Situace</dt><dd>${p.modifiers.length ? p.modifiers.map((m) => esc(MODIFIER_LABELS[m])).join(', ') : 'žádná'}</dd>
        <dt>Datum</dt><dd>${esc(formatCzechDate(viewDate(), { weekday: true }))}</dd>
      </dl>
    </div>`,

    `<div class="surface pad">
      <p class="eyebrow">Co jsme se naučili z vašeho chování</p>
      ${
        topics.length
          ? `<div class="chips" style="margin-top:.9rem">${topics
              .map(
                ([t, v]) =>
                  `<span class="badge">${esc(TOPIC_LABELS[t])} <b class="num" style="margin-left:.25rem">${Math.round(v * 100)} %</b></span>`,
              )
              .join('')}</div>
             <p class="soft" style="margin-top:1rem;font-size:.875rem;line-height:1.6">Váhy rostou podle toho, co si otevíráte a ukládáte. Ovlivňují pořadí, nikdy ne bezpečnostní obsah.</p>
             <button class="btn btn-sm" data-act="forget" style="margin-top:1rem">Zapomenout, co jste se naučili</button>`
          : '<p class="soft" style="margin-top:.9rem;line-height:1.65">Zatím nic. Jakmile si začnete otevírat obsah, začneme si všímat témat, která vás zajímají — a uvidíte je tady.</p>'
      }
    </div>`,

    `<section>
      ${sectionTitle('Jak vznikly dnešní řady', 'Každá má jeden důvod')}
      <div class="stack" style="gap:.6rem">
        ${rails
          .map(
            (r) =>
              `<div class="surface" style="padding:1rem 1.2rem"><p style="font-weight:500;font-size:.9375rem">${esc(r.title)}</p><p class="soft" style="font-size:.8125rem;margin-top:.2rem">${esc(r.reason)} · ${esc(plural(r.items.length, 'položka', 'položky', 'položek'))}</p></div>`,
          )
          .join('')}
      </div>
    </section>`,

    note(
      'Skóre položky = fáze × den ve fázi × časové okno × vaše situace × naučená témata × novost. Pořadí je v rámci jednoho dne stabilní — zavřít a otevřít aplikaci obsah nepřehází. Mezi dny se mění, protože do něj vstupuje i datum.',
    ),
  ].join('')
}
