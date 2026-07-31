import { addDays, formatCzechDateShort } from '../lib/domain/dates'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import { NO_DIAGNOSIS } from '../lib/health/interpret'
import { journalFor, journalList, journey, pattern, readingSeries, S, viewDate } from './store'
import { esc, empty, plural } from './ui'
import { actionCard, chart, dayStrip, sectionHead, segmented, seriesKey } from './viz'
import { screenTyden } from './screens-tyden'

/**
 * Sledování.
 *
 * Tři části pod jedním přepínačem: vývoj v čase, naměřené hodnoty a týdenní
 * ohlédnutí. Dělení vychází z reference (Track = Symptoms / Health Data),
 * jen k tomu přidáváme to, co reference nemá vůbec — grafy.
 */

export const SLED_SECTIONS = [
  { id: 'vyvoj', label: 'Vývoj' },
  { id: 'hodnoty', label: 'Hodnoty' },
  { id: 'tyden', label: 'Týden' },
]

export type SledSection = 'vyvoj' | 'hodnoty' | 'tyden'

export function isSledSection(s: string): s is SledSection {
  return SLED_SECTIONS.some((x) => x.id === s)
}

const DAYS = 14

// ---------------------------------------------------------------- vývoj ---

function paneVyvoj(): string {
  const s = readingSeries(DAYS)
  const rows = journalList().slice(-DAYS)
  const withReserve = s.filter((r) => r.reserve !== null).length
  const p = pattern()

  const mood = rows.length >= 2
    ? `<section class="surface pad rise">
        ${sectionHead('Nálada, úzkost a naděje')}
        ${chart(
          {
            series: [
              { name: 'Nálada', color: 'var(--s2)', data: rows.map((r) => r.mood) },
              { name: 'Úzkost', color: 'var(--s3)', data: rows.map((r) => r.anxiety) },
              { name: 'Naděje', color: 'var(--s4)', data: rows.map((r) => r.hope) },
            ],
            labels: rows.map((r) => formatCzechDateShort(r.date)),
            yMax: 5, yMin: 1, yTicks: 4,
          },
          'Nálada, úzkost a naděje v čase',
        )}
        ${seriesKey([
          { name: 'Nálada', color: 'var(--s2)' },
          { name: 'Úzkost', color: 'var(--s3)' },
          { name: 'Naděje', color: 'var(--s4)' },
        ])}
      </section>`
    : ''

  return [
    `<section class="surface pad rise">
      ${sectionHead('Žádá dnešek vs. máte na to')}
      ${chart(
        {
          series: [
            { name: 'Žádá dnešek', color: 'var(--s1)', data: s.map((r) => r.demand) },
            { name: 'Máte na to', color: 'var(--s2)', data: s.map((r) => r.reserve) },
          ],
          labels: s.map((r) => formatCzechDateShort(r.date)),
          yMax: 10, yTicks: 5,
        },
        'Náročnost dne proti vaší rezervě za posledních 14 dní',
      )}
      ${seriesKey([
        { name: 'Žádá dnešek', color: 'var(--s1)' },
        { name: 'Máte na to', color: 'var(--s2)' },
      ])}
      ${
        withReserve < 3
          ? `<p class="faint" style="margin-top:.9rem;font-size:.8125rem">
              Modrá čára se objeví, jakmile budete mít zapsané aspoň tři dny.
              Zatím máte ${esc(plural(withReserve, 'zapsaný den', 'zapsané dny', 'zapsaných dní'))}.
            </p>`
          : ''
      }
    </section>`,

    p
      ? `<section class="surface pad rise">
          <div class="reading cool" style="margin-top:0">
            <p class="eyebrow">Co jsme si všimli u vás</p>
            <p class="soft" style="margin-top:.4rem;line-height:1.7">${esc(p.text)}</p>
            <p class="faint" style="margin-top:.6rem;font-size:.75rem">Postaveno na ${esc(plural(p.sample, 'zapsaném dni', 'zapsaných dnech', 'zapsaných dnech'))}.</p>
          </div>
        </section>`
      : `<section class="surface pad rise">
          <p class="eyebrow">Co si aplikace všímá</p>
          <p class="soft" style="margin-top:.5rem;line-height:1.7">
            Až budete mít zapsaných aspoň deset dní, aplikace si začne všímat vzorců —
            třeba jestli jsou pro vás horší dny zákroků, nebo ty před nimi.
          </p>
        </section>`,

    mood,
    dayHistory(),
  ].join('')
}

/** Pás posledních dnů — rychlý pohled zpátky bez grafu. */
function dayHistory(): string {
  const to = viewDate()
  const cells = []
  for (let i = 0; i < 7; i++) {
    const date = addDays(to, -i)
    const row = journalFor(date)
    const shots = S.d.shots.filter((s) => s.date === date).length
    const labs = S.d.labs.filter((l) => l.onDate === date).length
    cells.push({
      date,
      label: formatCzechDateShort(date),
      sub: row ? `nálada ${row.mood}/5` : 'nezapsáno',
      counts: [
        { icon: '◍', n: row?.symptoms?.length ?? 0 },
        { icon: '✚', n: shots },
        { icon: '◉', n: labs },
      ],
    })
  }
  return `<section class="rise">
    ${sectionHead('Posledních 7 dní')}
    ${dayStrip(cells)}
    <p class="faint" style="margin-top:.5rem;font-size:.75rem">◍ příznaky · ✚ vpichy · ◉ hodnoty</p>
  </section>`
}

// -------------------------------------------------------------- hodnoty ---

function paneHodnoty(): string {
  const labs = S.d.labs

  const byKey = new Map<string, typeof labs>()
  for (const l of labs) byKey.set(l.paramKey, [...(byKey.get(l.paramKey) ?? []), l])
  const best = [...byKey.entries()].sort((a, b) => b[1].length - a[1].length)[0]

  const graph = best && best[1].length >= 2 ? (() => {
    const [key, points] = best
    const param = LAB_BY_KEY[key]
    const sorted = [...points].sort((a, b) => a.onDate.localeCompare(b.onDate))
    const max = Math.max(...sorted.map((p) => p.value))
    const step = Math.pow(10, Math.floor(Math.log10(max || 1)))
    const yMax = Math.ceil(max / step) * step
    return `<section class="surface pad rise">
      ${sectionHead(param?.name ?? key)}
      ${chart(
        {
          series: [{ name: param?.name ?? key, color: 'var(--s1)', data: sorted.map((p) => p.value) }],
          labels: sorted.map((p) => formatCzechDateShort(p.onDate)),
          yMax, yTicks: 3, unit: param?.unit,
        },
        `Vývoj ${param?.name ?? key}`,
      )}
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">${esc(NO_DIAGNOSIS)}</p>
    </section>`
  })() : ''

  return [
    `<div class="rise">
      ${sectionHead('Co můžete zapsat')}
      ${actionCard({ icon: '◉', title: 'Laboratorní hodnoty', body: 'Hormony a výsledky odběrů, s grafem vývoje', go: 'zdravi' })}
      ${actionCard({ icon: '▤', title: 'Lékařská zpráva', body: 'Vložte text a hodnoty z něj vytáhneme samy', go: 'dokumenty' })}
      ${actionCard({ icon: '◈', title: 'Termíny a kontroly', body: 'Část se doplní sama z vašich dat', go: 'kalendar' })}
    </div>`,
    graph,
    labs.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">${esc(plural(byKey.size, 'sledovaný parametr', 'sledované parametry', 'sledovaných parametrů'))}</p>
          <ul class="linelist" style="margin-top:.6rem">
            ${[...byKey.entries()]
              .map(([k, v]) => {
                const param = LAB_BY_KEY[k]
                const last = [...v].sort((a, b) => a.onDate.localeCompare(b.onDate)).pop()!
                return `<li><span>${esc(param?.name ?? k)}</span>
                  <span class="num" style="margin-left:auto;font-weight:500">${last.value} ${esc(param?.unit ?? '')}</span></li>`
              })
              .join('')}
          </ul>
          <button class="btn btn-sm" data-go="zdravi" style="margin-top:1rem">Otevřít Zdraví</button>
        </section>`
      : empty(
          'Zatím žádné hodnoty',
          'Přidejte první odběr a uvidíte nejen graf, ale i to, co ten parametr v těle dělá.',
          '<button class="btn btn-primary" data-go="zdravi">Přidat hodnotu</button>',
          '◉',
        ),
  ].join('')
}

// --------------------------------------------------------------- skládá ---

export function screenSledovani(section: SledSection): string {
  const state = journey()
  const rows = journalList()

  const header = `<header class="head rise">
    <p class="eyebrow">${esc(state.phase.name)} · ${esc(plural(rows.length, 'zapsaný den', 'zapsané dny', 'zapsaných dní'))}</p>
    <h1 class="display">Sledování</h1>
    ${segmented(SLED_SECTIONS, section, 'sled-sec')}
  </header>`

  if (section === 'tyden') return header + screenTyden(true)
  return header + (section === 'hodnoty' ? paneHodnoty() : paneVyvoj())
}
