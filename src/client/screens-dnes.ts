import { czDays, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import { guideFor } from '../lib/domain/guides'
import { CATALOG, DAILY_CARDS, contentById } from '../lib/content'
import { buildRails, pickDailyCard } from '../lib/content/recommend'
import {
  affinity,
  dayReading,
  eventState,
  journalFor,
  journey,
  profile,
  readingSeries,
  reminders,
  S,
  shotsOn,
  viewDate,
} from './store'
import { contentCard, esc, plural, sectionTitle } from './ui'
import { chart, partsList, scissorRing, seriesKey } from './viz'

/**
 * Dnes.
 *
 * Vstupní obrazovka celé aplikace. Nahoře jeden prstenec, pod ním jedna věta
 * proč, a pak jenom to, co se dnes doopravdy hodí. Nic k procházení —
 * na procházení je Průvodce.
 */

/** Kolik obsahu vůbec nabídnout. Při rozevřených nůžkách se ubírá. */
function contentBudget(gap: number | null): number {
  if (gap === null) return 2
  if (gap >= 5) return 1
  if (gap >= 2) return 2
  return 3
}

function todayEvents(): string {
  const date = viewDate()
  const need = reminders(date)
  if (need.length === 0) return ''

  return `<section class="surface pad">
    <p class="eyebrow">Odškrtněte, co proběhlo</p>
    <div class="stack" style="gap:.35rem;margin-top:.6rem">
      ${need
        .slice(0, 5)
        .map((e) => {
          const st = eventState(e.id)
          const when = e.onDate === date ? 'dnes' : e.onDate > date ? 'zítra' : 'nestihnuté'
          return `<button class="check" data-act="event-done" data-arg="${esc(e.id)}" aria-pressed="${st.done}">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(e.title)}
              <br><span class="faint" style="font-size:.8125rem">${esc(when)}</span></span>
          </button>`
        })
        .join('')}
    </div>
  </section>`
}

/** Léky na dnešek. Odškrtávají se přímo tady, ne v nastavení. */
function medsToday(): string {
  const meds = S.d.meds
  if (meds.length === 0) return ''
  const date = viewDate()
  return `<section class="surface pad">
    <p class="eyebrow">Dnes stačí tohle</p>
    <div class="stack" style="gap:.2rem;margin-top:.6rem">
      ${meds
        .map((m) => {
          const key = `med:${date}:${m.id}`
          return `<button class="check" data-act="check" data-arg="${esc(key)}" aria-pressed="${Boolean(S.d.checks[key])}">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(m.name)}
              <span class="faint">· ${esc(m.dose)}${m.timeOfDay ? ` · ${esc(m.timeOfDay)}` : ''}</span></span>
          </button>`
        })
        .join('')}
    </div>
  </section>`
}

export function screenDnes(): string {
  const state = journey()
  const date = viewDate()
  const r = dayReading(date)
  const guide = guideFor(state.phase.id)
  const row = journalFor(date)
  const p = profile()
  const shots = shotsOn(date)

  const series = readingSeries(14, date)
  const budget = contentBudget(r.gap)
  const card = pickDailyCard(DAILY_CARDS, state)
  const rails = buildRails(CATALOG, state, affinity())
  const picks = rails
    .flatMap((rail) => rail.items.map((i) => contentById(i.id)))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
    .slice(0, budget)

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(formatCzechDate(date, { weekday: true }))}</p>
      <h1 class="display">${p.displayName ? `Dobrý den, ${esc(p.displayName)}.` : 'Dnešek'}</h1>
      <p class="lede">${esc(state.dayLabel)}</p>
    </header>`,

    `<section class="surface pad rise">
      ${scissorRing(r)}
      <div class="reading${r.state === 'zavrene' ? ' cool' : ''}" style="margin-top:1.3rem">
        <p class="eyebrow">Co to znamená</p>
        <p class="soft" style="margin-top:.4rem;line-height:1.7">
          <strong style="color:var(--fg);font-weight:500">${esc(r.headline)}</strong> ${esc(r.advice)}
        </p>
      </div>
      <button class="btn btn-sm" data-go="nuzky" style="margin-top:1rem">Z čeho se to počítá</button>
    </section>`,

    row
      ? ''
      : `<section class="surface pad rise">
          <p class="eyebrow">Chybí druhá půlka prstence</p>
          <p class="soft" style="margin-top:.5rem;line-height:1.7">
            Dokud si dnešek nezapíšete, aplikace ví jen to, co po vás den chce — ne to,
            co na to máte. Trvá to dvacet vteřin.
          </p>
          <button class="btn btn-primary" data-go="zapis" style="margin-top:1.1rem">Zapsat dnešek</button>
        </section>`,

    `<div class="quickrow rise">
      <button data-go="zapis"><i>◕</i>Nálada</button>
      <button data-go="zapis#vpich"><i>✚</i>Vpich${shots.length ? ` · ${shots.length}` : ''}</button>
      <button data-go="zapis#telo"><i>◍</i>Tělo</button>
    </div>`,

    medsToday(),
    todayEvents(),

    // Karta dne se sama zkracuje. Při rozevřených nůžkách zůstane jen nadpis
    // a odstavec — víc by v takový den bylo na obtíž.
    card
      ? `<section class="surface pad rise">
          <p class="eyebrow">Dnešní téma</p>
          <h2 class="display" style="font-size:1.4rem;margin-top:.4rem">${esc(card.headline)}</h2>
          <p class="soft" style="margin-top:.6rem;line-height:1.7">${esc(card.body)}</p>
          ${
            budget >= 2 && card.whatsHappening?.length
              ? `<div style="margin-top:1.3rem"><p class="eyebrow">Co se dnes může dít</p>
                 <ul class="bullets" style="margin-top:.6rem">${card.whatsHappening.map((w) => `<li>${esc(w)}</li>`).join('')}</ul></div>`
              : ''
          }
          ${budget >= 2 && card.tip ? `<p class="tipbox" style="margin-top:1.1rem"><strong>Tip: </strong>${esc(card.tip)}</p>` : ''}
          ${
            card.callDoctorIf?.length
              ? `<div class="doctorbox" style="margin-top:1.1rem"><p style="font-size:.8125rem;font-weight:600">Ozvěte se lékaři, pokud:</p>
                 <ul>${card.callDoctorIf.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></div>`
              : ''
          }
        </section>`
      : '',

    picks.length
      ? `<section class="rise">
          ${sectionTitle(
            r.gap !== null && r.gap >= 2 ? 'Dnes jen krátce' : 'Vybráno pro dnešek',
            r.gap !== null && r.gap >= 2
              ? 'Nůžky jsou otevřené, tak vám toho dnes nabízíme míň'
              : esc(`Podle fáze ${state.phase.name.toLowerCase()}`),
          )}
          <div class="stack" style="gap:.75rem">${picks.map((i) => contentCard(i)).join('')}</div>
        </section>`
      : '',

    `<section class="surface pad rise">
      <p class="eyebrow">Posledních ${esc(plural(series.length, 'den', 'dny', 'dní'))}</p>
      ${chart(
        {
          series: [
            { name: 'Žádá dnešek', color: 'var(--s1)', data: series.map((s) => s.demand) },
            { name: 'Máte na to', color: 'var(--s2)', data: series.map((s) => s.reserve) },
          ],
          labels: series.map((s) => formatCzechDateShort(s.date)),
          yMax: 10,
          yTicks: 2,
          height: 110,
        },
        'Vývoj náročnosti dne a vaší rezervy',
      )}
      ${seriesKey([
        { name: 'Žádá dnešek', color: 'var(--s1)' },
        { name: 'Máte na to', color: 'var(--s2)' },
      ])}
      <button class="btn btn-sm" data-go="vyvoj" style="margin-top:1rem">Celý vývoj</button>
    </section>`,

    guide
      ? `<section class="surface pad rise">
          <p class="eyebrow">Kde jste</p>
          <h2 class="display" style="font-size:1.3rem;margin-top:.4rem">${esc(state.phase.name)}</h2>
          <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">${esc(guide.summary)}</p>
          <button class="btn btn-sm" data-go="faze" style="margin-top:1.1rem">Průvodce fází</button>
        </section>`
      : '',
  ].join('')
}

// ------------------------------------------------------------- rozpad ---

/** Z čeho se nůžky počítají. Nic není černá skříňka. */
export function screenNuzky(): string {
  const r = dayReading()
  const state = journey()

  return [
    `<header class="head rise">
      <p class="eyebrow">Nůžky dne</p>
      <h1 class="display">Z čeho se to počítá</h1>
      <p class="lede">
        Aplikace nehodnotí vás. Hodnotí ten den. Tady je vidět přesně, co do
        obou čísel vstoupilo.
      </p>
    </header>`,

    `<section class="surface pad">
      ${scissorRing(r)}
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow" style="color:var(--s1)">Co dnešek žádá · ${r.demand} z 10</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Spočítané z protokolu — z toho, v jaké jste fázi, kolikátý je den, co máte
        v kalendáři a kolik berete léků. <strong>Nezáleží to na tom, co si zapíšete.</strong>
        Dnešek by byl stejně náročný, i kdybyste aplikaci vůbec neotevřela.
      </p>
      ${partsList('Složky', r.demandParts)}
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow" style="color:var(--s2)">Co na to máte · ${r.reserve === null ? 'nezapsáno' : `${r.reserve} z 10`}</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Tohle je jediné číslo, které pochází od vás — ze čtyř číselníků a štítků
        na tělo v dnešním zápisu. <strong>Nízká rezerva není selhání.</strong> Je to
        informace, podle které aplikace ubere.
      </p>
      ${
        r.reserve === null
          ? `<button class="btn btn-primary" data-go="zapis" style="margin-top:1.1rem">Zapsat dnešek</button>`
          : partsList('Složky', r.reserveParts)
      }
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Co s tím aplikace dělá</p>
      <ul class="bullets" style="margin-top:.7rem">
        <li><strong>Nůžky dokořán</strong> — kratší obsah, dýchání, žádné úkoly navíc.</li>
        <li><strong>Otevřené</strong> — ubereme. Co se nestihne, počká.</li>
        <li><strong>V rovnováze</strong> — dobrý čas na to, co jste odkládala.</li>
        <li><strong>Zavřené</strong> — máte rezervu. Můžeme jít do hloubky.</li>
      </ul>
    </section>`,

    `<p class="note">Nůžky nejsou zdravotní údaj. Nepředpovídají výsledek léčby, nehodnotí
    hodnoty z odběrů a nikdy neřeknou, že něco je špatně. Popisují náročnost dne
    a to, jak jste ho nesla — nic víc. ${
      state.nextMilestone ? `Nejbližší milník: ${esc(state.nextMilestone.label)} za ${esc(czDays(state.nextMilestone.inDays))}.` : ''
    }</p>`,
  ].join('')
}
