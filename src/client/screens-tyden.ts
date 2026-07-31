import { addDays, czDays, daysBetween, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import { guideFor } from '../lib/domain/guides'
import {
  allEvents,
  eventState,
  journalFor,
  journalList,
  journey,
  readingSeries,
  viewDate,
} from './store'
import { esc, empty, plural } from './ui'
import { chart, statTile } from './viz'

/**
 * Týden.
 *
 * Nedělní ohlédnutí. Není to hodnocení — je to shrnutí, které si žena může
 * uložit nebo poslat partnerovi. A na konci je jediné místo v aplikaci, kde
 * se něco dá poslat ven: přehled BEZ deníku.
 */

const DNY = ['Ne', 'Po', 'Út', 'St', 'Čt', 'Pá', 'So']

interface WeekRow {
  date: string
  demand: number
  reserve: number | null
  gap: number | null
  dow: string
}

function weekRows(to: string): WeekRow[] {
  return readingSeries(7, to).map((r) => ({
    ...r,
    dow: DNY[new Date(r.date + 'T12:00:00').getDay()],
  }))
}

/**
 * Popisek pod dlaždicí dne.
 *
 * Záporné nůžky nejsou „mínus dva body“ — znamenají, že rezerva den
 * přesáhla. Říká se to slovy, ne znaménkem.
 */
function gapNote(gap: number | null): string {
  if (gap === null) return 'málo zapsaných dní'
  if (gap > 0) return `nůžky ${plural(gap, 'bod', 'body', 'bodů')}`
  if (gap === 0) return 'v rovnováze'
  return `rezerva ${plural(-gap, 'bod', 'body', 'bodů')} navíc`
}

/** Věta týdne — nejsilnější „povedlo se“ z posledních sedmi dní. */
function sentenceOfWeek(to: string): { text: string; date: string } | null {
  const from = addDays(to, -6)
  const rows = journalList().filter((r) => r.date >= from && r.date <= to && r.win.trim())
  if (rows.length === 0) return null
  // Nejdelší zápis bývá ten, u kterého se jí chtělo psát.
  const best = [...rows].sort((a, b) => b.win.trim().length - a.win.trim().length)[0]
  return { text: best.win.trim(), date: best.date }
}

/**
 * Týdenní ohlédnutí.
 *
 * `embedded` = vykresluje se pod přepínačem v Sledování, takže si nekreslí
 * vlastní hlavičku.
 */
export function screenTyden(embedded = false): string {
  const to = viewDate()
  const from = addDays(to, -6)
  const rows = weekRows(to)
  const state = journey()
  const guide = guideFor(state.phase.id)

  const written = rows.filter((r) => journalFor(r.date)).length
  const withGap = rows.filter((r) => r.gap !== null)
  // Nejtěžší a nejlehčí den má smysl rozlišovat, až když jsou aspoň dva —
  // jinak by to byl dvakrát tentýž den ve dvou dlaždicích.
  const ranked = withGap.length >= 2 ? [...withGap].sort((a, b) => b.gap! - a.gap!) : []
  const hardest = ranked[0] ?? null
  const easiest = ranked[ranked.length - 1] ?? null

  const journalWeek = journalList().filter((r) => r.date >= from && r.date <= to)
  const prevWeek = journalList().filter((r) => r.date >= addDays(from, -7) && r.date < from)
  const avg = (xs: number[]) => (xs.length ? Math.round((xs.reduce((a, b) => a + b, 0) / xs.length) * 10) / 10 : null)
  const hope = avg(journalWeek.map((r) => r.hope))
  const hopePrev = avg(prevWeek.map((r) => r.hope))

  // Nepřerušená řada zápisů zpětně od dneška.
  let streak = 0
  for (let d = to; journalFor(d); d = addDays(d, -1)) streak++

  const sentence = sentenceOfWeek(to)
  const ahead = allEvents()
    .filter((e) => e.onDate > to && e.onDate <= addDays(to, 8) && !eventState(e.id).done)
    .slice(0, 5)

  if (journalWeek.length === 0) {
    return [
      embedded
        ? ''
        : `<header class="head rise">
            <p class="eyebrow">${esc(formatCzechDateShort(from))}–${esc(formatCzechDate(to))}</p>
            <h1 class="display">Váš týden</h1>
          </header>`,
      empty(
        'Tenhle týden zatím nemá co shrnout',
        'Ohlédnutí se skládá z toho, co si zapíšete. Stačí pár dní a bude z čeho brát.',
        '<button class="btn btn-primary" data-go="zapis">Zapsat dnešek</button>',
        '❋',
      ),
    ].join('')
  }

  return [
    embedded
      ? `<p class="lede rise" style="margin-top:1.25rem">${esc(formatCzechDateShort(from))} – ${esc(formatCzechDate(to))}. Není to hodnocení, je to ohlédnutí, které si můžete nechat.</p>`
      : `<header class="head rise">
          <p class="eyebrow">${esc(formatCzechDateShort(from))} – ${esc(formatCzechDate(to))}</p>
          <h1 class="display">Váš týden</h1>
          <p class="lede">Není to hodnocení. Je to ohlédnutí, které si můžete nechat.</p>
        </header>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Jak šel týden</p>
      ${chart(
        {
          series: [
            { name: 'Žádal den', color: 'var(--s1)', data: rows.map((r) => r.demand) },
            { name: 'Měla jste na to', color: 'var(--s2)', data: rows.map((r) => r.reserve) },
          ],
          labels: rows.map((r) => r.dow),
          yMax: 10,
          yTicks: 2,
          height: 110,
        },
        'Náročnost dnů a rezervy v tomhle týdnu',
      )}
      <div class="stats">
        ${statTile('Nejtěžší den', hardest ? hardest.dow : '—', gapNote(hardest?.gap ?? null), 'var(--s1)')}
        ${statTile('Nejlehčí den', easiest ? easiest.dow : '—', gapNote(easiest?.gap ?? null), 'var(--s2)')}
        ${statTile('Zapsaných dní', `${written}/7`, streak > 1 ? `nepřerušeně ${czDays(streak)}` : undefined)}
        ${statTile(
          'Průměrná naděje',
          hope === null ? '—' : String(hope).replace('.', ','),
          hopePrev === null ? undefined : `minulý týden ${String(hopePrev).replace('.', ',')}`,
          'var(--s4)',
        )}
      </div>
    </section>`,

    sentence
      ? `<section class="surface pad rise">
          <div class="reading plum" style="margin-top:0">
            <p class="eyebrow">Věta týdne</p>
            <p class="display" style="font-size:1.2rem;margin-top:.4rem;line-height:1.35">„${esc(sentence.text)}“</p>
            <p class="faint" style="margin-top:.5rem;font-size:.8125rem">${esc(formatCzechDate(sentence.date, { weekday: true }))}</p>
          </div>
        </section>`
      : '',

    ahead.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">Co vás čeká příští týden</p>
          <ul class="linelist" style="margin-top:.6rem">
            ${ahead
              .map((e) => {
                const d = daysBetween(to, e.onDate)
                return `<li><span>${esc(e.title)}</span><span class="when" style="margin-left:auto">${
                  d === 1 ? 'zítra' : `za ${esc(czDays(d))}`
                }</span></li>`
              })
              .join('')}
          </ul>
        </section>`
      : '',

    guide
      ? `<section class="surface pad rise">
          <p class="eyebrow">Na co se v příštích dnech připravit</p>
          <ul class="bullets" style="margin-top:.7rem">
            ${guide.prepareFor.slice(0, 3).map((x) => `<li>${esc(x)}</li>`).join('')}
          </ul>
        </section>`
      : '',

    `<section class="surface pad rise">
      <p class="eyebrow">Pro partnera</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Můžete mu poslat shrnutí týdne <strong>bez toho, co jste psala do deníku</strong>.
        Uvidí jen, co se dělo a co přijde — ne vaše věty, ani nálady po dnech.
      </p>
      <button class="btn" data-act="week-share" style="margin-top:1.1rem">Připravit přehled pro partnera</button>
      <p class="faint" style="margin-top:.7rem;font-size:.8125rem">
        Nikam se nic neodesílá. Text se jen zkopíruje, ať si sama vyberete, komu ho pošlete.
      </p>
    </section>`,
  ].join('')
}

/** Text pro partnera. Vědomě neobsahuje nic z deníku. */
export function weekShareText(): string {
  const to = viewDate()
  const from = addDays(to, -6)
  const state = journey()
  const rows = weekRows(to)
  const hardest = rows.filter((r) => r.gap !== null).sort((a, b) => b.gap! - a.gap!)[0]
  const ahead = allEvents()
    .filter((e) => e.onDate > to && e.onDate <= addDays(to, 8) && !eventState(e.id).done)
    .slice(0, 4)

  const lines = [
    `Týden ${formatCzechDateShort(from)} – ${formatCzechDate(to)}`,
    ``,
    `Kde jsme: ${state.phase.name} — ${state.dayLabel.replace(/^Dnes (je|jste) /, '')}`,
    hardest ? `Nejnáročnější den byl ${hardest.dow.toLowerCase()}.` : '',
    ``,
    ahead.length ? 'Co přijde:' : 'V nejbližších dnech nic naplánovaného není.',
    ...ahead.map((e) => `· ${e.title} — ${formatCzechDate(e.onDate)}`),
    ``,
    `Posláno z aplikace IVF diář. Deníkové zápisy tu záměrně nejsou.`,
  ]
  return lines.filter((l) => l !== undefined).join('\n')
}

