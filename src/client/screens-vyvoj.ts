import { formatCzechDateShort } from '../lib/domain/dates'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import { NO_DIAGNOSIS } from '../lib/health/interpret'
import { journalList, journey, pattern, readingSeries, S } from './store'
import { esc, empty, plural, sectionTitle } from './ui'
import { chart, seriesKey } from './viz'

/**
 * Vývoj.
 *
 * Papír neumí ukázat, jak se věci hýbou v čase — tohle je hlavní důvod,
 * proč je z diáře aplikace. Grafy nikdy nehodnotí; jen ukazují.
 */

const DAYS = 14

function nuzkyBlock(): string {
  const s = readingSeries(DAYS)
  const withReserve = s.filter((r) => r.reserve !== null).length

  return `<section class="surface pad">
    ${sectionTitle('Žádá dnešek vs. máte na to', `Posledních ${plural(DAYS, 'den', 'dny', 'dní')}`)}
    ${chart(
      {
        series: [
          { name: 'Žádá dnešek', color: 'var(--s1)', data: s.map((r) => r.demand) },
          { name: 'Máte na to', color: 'var(--s2)', data: s.map((r) => r.reserve) },
        ],
        labels: s.map((r) => formatCzechDateShort(r.date)),
        yMax: 10,
        yTicks: 5,
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
  </section>`
}

function patternBlock(): string {
  const p = pattern()
  if (!p) {
    return `<section class="surface pad">
      <p class="eyebrow">Co si aplikace všímá</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7">
        Až budete mít zapsaných aspoň deset dní, aplikace si začne všímat vzorců —
        třeba jestli jsou pro vás horší dny zákroků, nebo ty před nimi. Podle toho
        pak nabídne pomoc dřív.
      </p>
    </section>`
  }
  return `<section class="surface pad">
    <div class="reading cool" style="margin-top:0">
      <p class="eyebrow">Co jsme si všimli u vás</p>
      <p class="soft" style="margin-top:.4rem;line-height:1.7">${esc(p.text)}</p>
      <p class="faint" style="margin-top:.6rem;font-size:.75rem">Postaveno na ${esc(plural(p.sample, 'zapsaném dni', 'zapsaných dnech', 'zapsaných dnech'))}.</p>
    </div>
  </section>`
}

function moodBlock(): string {
  const rows = journalList().slice(-DAYS)
  if (rows.length < 2) return ''

  return `<section class="surface pad">
    ${sectionTitle('Nálada, úzkost a naděje', 'Přímo z vašich číselníků')}
    ${chart(
      {
        series: [
          { name: 'Nálada', color: 'var(--s2)', data: rows.map((r) => r.mood) },
          { name: 'Úzkost', color: 'var(--s3)', data: rows.map((r) => r.anxiety) },
          { name: 'Naděje', color: 'var(--s4)', data: rows.map((r) => r.hope) },
        ],
        labels: rows.map((r) => formatCzechDateShort(r.date)),
        yMax: 5,
        yMin: 1,
        yTicks: 4,
      },
      'Nálada, úzkost a naděje v čase',
    )}
    ${seriesKey([
      { name: 'Nálada', color: 'var(--s2)' },
      { name: 'Úzkost', color: 'var(--s3)' },
      { name: 'Naděje', color: 'var(--s4)' },
    ])}
  </section>`
}

function labBlock(): string {
  const labs = S.d.labs
  if (labs.length === 0) return ''

  // Nejsledovanější parametr — ten, kterého je nejvíc.
  const byKey = new Map<string, typeof labs>()
  for (const l of labs) byKey.set(l.paramKey, [...(byKey.get(l.paramKey) ?? []), l])
  const best = [...byKey.entries()].sort((a, b) => b[1].length - a[1].length)[0]
  if (!best || best[1].length < 2) return ''

  const [key, points] = best
  const param = LAB_BY_KEY[key]
  const sorted = [...points].sort((a, b) => a.onDate.localeCompare(b.onDate))
  const max = Math.max(...sorted.map((p) => p.value))
  // Zaokrouhlit strop nahoru na hezký dílek, ať osa nevypisuje 833 a 1 667.
  const step = Math.pow(10, Math.floor(Math.log10(max || 1)))
  const yMax = Math.ceil(max / step) * step

  return `<section class="surface pad">
    ${sectionTitle(param?.name ?? key, esc(plural(sorted.length, 'hodnota', 'hodnoty', 'hodnot')))}
    ${chart(
      {
        series: [{ name: param?.name ?? key, color: 'var(--s1)', data: sorted.map((p) => p.value) }],
        labels: sorted.map((p) => formatCzechDateShort(p.onDate)),
        yMax,
        yTicks: 3,
        unit: param?.unit,
      },
      `Vývoj ${param?.name ?? key}`,
    )}
    <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">${esc(NO_DIAGNOSIS)}</p>
    <button class="btn btn-sm" data-go="zdravi" style="margin-top:1rem">Všechny hodnoty</button>
  </section>`
}

function bodyBlock(): string {
  const rows = journalList().slice(-DAYS)
  if (rows.length === 0) return ''

  const counts = new Map<string, number>()
  for (const r of rows) for (const s of r.symptoms ?? []) counts.set(s, (counts.get(s) ?? 0) + 1)
  const top = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5)
  if (top.length === 0) return ''

  const shots = S.d.shots.length

  return `<section class="surface pad">
    <p class="eyebrow">Tělo v čase</p>
    <ul class="linelist" style="margin-top:.6rem">
      ${top
        .map(
          ([name, n]) =>
            `<li><span>${esc(name)}</span><span class="num" style="margin-left:auto">${n} z ${rows.length} ${plural(rows.length, 'dne', 'dní', 'dní')}</span></li>`,
        )
        .join('')}
      ${shots ? `<li><span>Zapsané vpichy</span><span class="num" style="margin-left:auto">${shots}</span></li>` : ''}
    </ul>
  </section>`
}

export function screenVyvoj(): string {
  const state = journey()
  const rows = journalList()

  if (rows.length === 0) {
    return [
      `<header class="head rise">
        <p class="eyebrow">Vývoj</p>
        <h1 class="display">Jak vám to jde</h1>
      </header>`,
      nuzkyBlock(),
      empty(
        'Zatím není co srovnávat',
        'Zlatá čára jede sama z protokolu. Modrá se objeví, jakmile si zapíšete první dny.',
        '<button class="btn btn-primary" data-go="zapis">Zapsat dnešek</button>',
        '◫',
      ),
    ].join('')
  }

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(state.phase.name)} · ${esc(plural(rows.length, 'zapsaný den', 'zapsané dny', 'zapsaných dní'))}</p>
      <h1 class="display">Jak vám to jde</h1>
      <p class="lede">Grafy nic nehodnotí. Jen ukazují, jak se věci hýbou — to je jediné, co papír neuměl.</p>
    </header>`,
    nuzkyBlock(),
    patternBlock(),
    moodBlock(),
    labBlock(),
    bodyBlock(),
  ].join('')
}
