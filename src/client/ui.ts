import type { ContentItem, HeroToken } from '../lib/content/types'
import { KIND_ICONS, KIND_LABELS } from '../lib/content/types'

/** Stavební prvky. Všechny obrazovky se skládají z těchhle kousků. */

/**
 * Obrazy ke článkům.
 *
 * Bloomia je lis. Usušené květiny na chladně šeříkovém papíře. Gradienty
 * proto vycházejí z okvětních plátků: růže, levandule, sláma a list, vždy
 * od nejsvětlejšího místa plátku k jeho okraji.
 */
export const HERO: Record<HeroToken, string> = {
  champagne: 'linear-gradient(135deg, #f4eef2 0%, #e3d3dd 55%, #c9adbe 100%)',
  taupe: 'linear-gradient(135deg, #cdc9e6 0%, #8c86c4 60%, #635b9e 100%)',
  blush: 'linear-gradient(135deg, #f8e9ee 0%, #e6c4d1 55%, #b9748a 100%)',
  sage: 'linear-gradient(135deg, #e6ece3 0%, #c5d3c0 60%, #7e9478 100%)',
  sky: 'linear-gradient(135deg, #e5e3f0 0%, #c4c0de 60%, #928cc0 100%)',
  linen: 'linear-gradient(135deg, #fbfafc 0%, #eeebf1 60%, #ded9e6 100%)',
  sand: 'linear-gradient(135deg, #f3ead9 0%, #e0cca2 60%, #c9a961 100%)',
  dusk: 'linear-gradient(145deg, #6a5f86 0%, #3c3350 45%, #1e1926 100%)',
  dawn: 'linear-gradient(135deg, #fbeee6 0%, #f0d8c6 45%, #d8a98d 100%)',
  pearl: 'linear-gradient(135deg, #ffffff 0%, #f4f1f7 55%, #e2dce9 100%)',
}

export const heroStyle = (token: HeroToken | string): string =>
  `background:${HERO[token as HeroToken] ?? HERO.linen}`

const ENTITIES: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
}

export function esc(s: unknown): string {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ENTITIES[c])
}

/** Tučně a kurzívou. Stejná podmnožina jako v aplikaci. */
function inline(s: string): string {
  return esc(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/_([^_]+)_/g, '<em>$1</em>')
}

/**
 * Velmi lehký markdown: ## ### - 1. > ** _ a tabulky.
 * Renderer je záměrně minimální. Obsah
 * píšeme my, takže si vystačíme s podmnožinou a nic cizího nesanitizujeme.
 */
export function md(text: string): string {
  const lines = String(text ?? '')
    .replace(/\r/g, '')
    .split('\n')
  const out: string[] = []
  let para: string[] = []
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null
  let table: { head: string[]; rows: string[][] } | null = null

  const flushPara = () => {
    if (para.length) {
      out.push(`<p>${inline(para.join(' '))}</p>`)
      para = []
    }
  }
  const flushList = () => {
    if (!list) return
    out.push(
      `<${list.type}>${list.items.map((i) => `<li>${inline(i)}</li>`).join('')}</${list.type}>`,
    )
    list = null
  }
  const flushTable = () => {
    if (!table) return
    const head = `<tr>${table.head.map((c) => `<th>${inline(c)}</th>`).join('')}</tr>`
    // Každá buňka si nese název svého sloupce. Na telefonu se tabulka
    // rozpadne na kartičky a `data-label` je jediné, z čeho se pak dá
    // poznat, co to číslo znamená. Hlavička už tam není.
    const rows = table.rows
      .map(
        (r) =>
          `<tr>${r
            .map((c, i) => `<td data-label="${esc(table!.head[i] ?? '')}">${inline(c)}</td>`)
            .join('')}</tr>`,
      )
      .join('')
    out.push(`<div class="tablewrap"><table><thead>${head}</thead><tbody>${rows}</tbody></table></div>`)
    table = null
  }
  const cells = (line: string) =>
    line
      .replace(/^\||\|$/g, '')
      .split('|')
      .map((c) => c.trim())

  for (const raw of lines) {
    const line = raw.trimEnd()
    if (!line.trim()) {
      flushPara()
      flushList()
      flushTable()
      continue
    }

    if (/^\|.*\|$/.test(line)) {
      flushPara()
      flushList()
      if (/^\|[\s:|-]+\|$/.test(line)) continue
      if (!table) table = { head: cells(line), rows: [] }
      else table.rows.push(cells(line))
      continue
    }
    flushTable()

    let m: RegExpMatchArray | null
    if ((m = line.match(/^###\s+(.*)$/))) {
      flushPara()
      flushList()
      out.push(`<h3>${inline(m[1])}</h3>`)
      continue
    }
    if ((m = line.match(/^##\s+(.*)$/))) {
      flushPara()
      flushList()
      out.push(`<h2>${inline(m[1])}</h2>`)
      continue
    }
    if ((m = line.match(/^>\s?(.*)$/))) {
      flushPara()
      flushList()
      out.push(`<blockquote>${inline(m[1])}</blockquote>`)
      continue
    }
    if ((m = line.match(/^[-*]\s+(.*)$/))) {
      flushPara()
      if (!list || list.type !== 'ul') {
        flushList()
        list = { type: 'ul', items: [] }
      }
      list.items.push(m[1])
      continue
    }
    if ((m = line.match(/^\d+[.)]\s+(.*)$/))) {
      flushPara()
      if (!list || list.type !== 'ol') {
        flushList()
        list = { type: 'ol', items: [] }
      }
      list.items.push(m[1])
      continue
    }
    flushList()
    para.push(line.trim())
  }

  flushPara()
  flushList()
  flushTable()
  return out.join('')
}

// ------------------------------------------------------------- komponenty ---

/** České množné číslo: 1 zápis, 2–4 zápisy, 5+ zápisů. */
export function plural(n: number, one: string, few: string, many: string): string {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`
}

export function head(eyebrow: string, title: string, lede?: string): string {
  return `<header class="head rise">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h1 class="display">${esc(title)}</h1>
    ${lede ? `<p class="lede">${esc(lede)}</p>` : ''}
  </header>`
}

export function sectionTitle(title: string, sub?: string, action = ''): string {
  return `<div class="section-title">
    <div><h2 class="display">${esc(title)}</h2>${sub ? `<p>${esc(sub)}</p>` : ''}</div>
    ${action}
  </div>`
}

/**
 * Karta obsahu. `why` je důvod, proč se právě teď ukazuje. Bez něj se
 * karta nikdy nezobrazuje v doporučení, protože uživatelka musí vědět,
 * proč na to má kliknout.
 */
export function contentCard(item: ContentItem | undefined, why?: string): string {
  if (!item) return ''
  return `<button class="ccard" data-go="cist/${esc(item.id)}">
    <div class="hero grain" style="${heroStyle(item.hero)}">
      <div class="meta">
        <span class="pill-kind">${esc(KIND_ICONS[item.kind])} ${esc(KIND_LABELS[item.kind])}</span>
        <span class="pill-min num">${item.minutes} min</span>
      </div>
    </div>
    <div class="body">
      <h3 class="display">${esc(item.title)}</h3>
      <p class="ex">${esc(item.excerpt)}</p>
      ${why ? `<p class="why">${esc(why)}</p>` : ''}
    </div>
  </button>`
}

export function ring(value: number | null, size = 62): string {
  if (value === null) return ''
  const r = size / 2 - 4
  const c = 2 * Math.PI * r
  const clamped = Math.max(0, Math.min(1, value))
  return `<div style="position:relative;flex:none;width:${size}px;height:${size}px">
    <svg class="ring" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="var(--line)"></circle>
      <circle cx="${size / 2}" cy="${size / 2}" r="${r}" stroke="var(--taupe)" stroke-linecap="round"
        stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - clamped)).toFixed(1)}"></circle>
    </svg>
    <span class="num" style="position:absolute;inset:0;display:grid;place-items:center;font-size:.75rem;color:var(--fg-soft)">${Math.round(clamped * 100)} %</span>
  </div>`
}

export function empty(title: string, body: string, action = '', mark = '❧'): string {
  return `<div class="empty">
    <p class="mark">${mark}</p>
    <h3 class="display">${esc(title)}</h3>
    <p>${esc(body)}</p>
    ${action ? `<div style="margin-top:1.5rem">${action}</div>` : ''}
  </div>`
}

export function note(text: string): string {
  return `<p class="note">${md(text).replace(/^<p>|<\/p>$/g, '')}</p>`
}

export function tile(
  route: string,
  icon: string,
  title: string,
  body: string,
): string {
  return `<button class="tile" data-go="${esc(route)}">
    <i>${icon}</i>
    <span style="min-width:0"><h4 class="display">${esc(title)}</h4><p>${esc(body)}</p></span>
    <span class="go">›</span>
  </button>`
}

export function checkRow(key: string, text: string, done: boolean, hint?: string): string {
  return `<button class="check" data-check="${esc(key)}" aria-pressed="${done}" style="margin-top:.75rem">
    <span class="box">✓</span>
    <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(text)}${
      hint ? `<br><span class="faint" style="font-size:.8125rem">${esc(hint)}</span>` : ''
    }</span>
  </button>`
}

/**
 * Graf jedné laboratorní hodnoty v čase.
 *
 * Kreslí i orientační rozmezí jako pruh na pozadí, ale záměrně bez barvy,
 * která by naznačovala „dobře/špatně“. Je to kontext, ne hodnocení.
 */
export function labChart(
  points: { value: number; onDate: string }[],
  opts: { low?: number; high?: number; unit: string; label: string; dateLabel: (d: string) => string },
): string {
  if (points.length === 0) return ''
  const w = 720
  const h = 240
  const padX = 44
  const padY = 34

  const values = points.map((p) => p.value)
  const candidates = [...values, ...(opts.low !== undefined ? [opts.low] : []), ...(opts.high !== undefined ? [opts.high] : [])]
  let min = Math.min(...candidates)
  let max = Math.max(...candidates)
  const pad = (max - min) * 0.15 || Math.max(1, max * 0.15)
  min = Math.max(0, min - pad)
  max = max + pad
  const span = max - min || 1

  const x = (i: number) => (points.length === 1 ? w / 2 : padX + (i * (w - padX * 2)) / (points.length - 1))
  const y = (v: number) => h - padY - ((v - min) / span) * (h - padY * 2)

  const band =
    opts.low !== undefined && opts.high !== undefined
      ? `<rect x="${padX}" y="${y(opts.high).toFixed(1)}" width="${w - padX * 2}" height="${Math.max(1, y(opts.low) - y(opts.high)).toFixed(1)}"
           fill="var(--card-muted)" opacity="0.9"/>
         <text x="${w - padX}" y="${(y(opts.high) - 6).toFixed(1)}" text-anchor="end" font-size="10" fill="var(--fg-faint)">orientační rozmezí</text>`
      : ''

  const line = points.map((p, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(p.value).toFixed(1)}`).join(' ')

  return `<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(opts.label)}">
    ${band}
    <line x1="${padX}" y1="${h - padY}" x2="${w - padX}" y2="${h - padY}" stroke="var(--line)"/>
    ${points.length > 1 ? `<path d="${line}" fill="none" stroke="var(--taupe-deep)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` : ''}
    ${points
      .map(
        (p, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(p.value).toFixed(1)}" r="${i === points.length - 1 ? 5.5 : 4}" fill="var(--taupe-deep)"/>
        <text x="${x(i).toFixed(1)}" y="${(y(p.value) - 13).toFixed(1)}" text-anchor="middle" font-size="11" fill="var(--fg)">${p.value}</text>
        <text x="${x(i).toFixed(1)}" y="${h - padY + 16}" text-anchor="middle" font-size="10" fill="var(--fg-faint)">${esc(opts.dateLabel(p.onDate))}</text>`,
      )
      .join('')}
  </svg>`
}

/** Jednoduchý čárový graf. Bez knihovny. Potřebujeme dva tvary a klid. */
export function lineChart(
  series: { key: string; color: string; values: number[]; dashed?: boolean }[],
  opts: { min: number; max: number; fill?: string; label: string },
): string {
  const w = 720
  const h = 220
  const pad = 28
  const n = Math.max(...series.map((s) => s.values.length))
  if (n === 0) return ''
  const x = (i: number) => (n === 1 ? w / 2 : pad + (i * (w - pad * 2)) / (n - 1))
  const span = opts.max - opts.min || 1
  const y = (v: number) => h - pad - ((v - opts.min) / span) * (h - pad * 2)
  const path = (vals: number[]) =>
    vals.map((v, i) => `${i ? 'L' : 'M'}${x(i).toFixed(1)} ${y(v).toFixed(1)}`).join(' ')

  const first = series[0]
  const area =
    opts.fill && first
      ? `<path d="M${x(0).toFixed(1)} ${h - pad} ${first.values
          .map((v, i) => `L${x(i).toFixed(1)} ${y(v).toFixed(1)}`)
          .join(' ')} L${x(first.values.length - 1).toFixed(1)} ${h - pad} Z" fill="${opts.fill}" opacity=".35"/>`
      : ''

  const grid = [0, 0.25, 0.5, 0.75, 1]
    .map((f) => {
      const yy = (h - pad - f * (h - pad * 2)).toFixed(1)
      return `<line x1="${pad}" y1="${yy}" x2="${w - pad}" y2="${yy}" stroke="var(--line)" stroke-width="1"/>`
    })
    .join('')

  return `<svg class="chart" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(opts.label)}">
    ${grid}${area}
    ${series
      .map(
        (s) =>
          `<path d="${path(s.values)}" fill="none" stroke="${s.color}" stroke-width="${
            s.dashed ? 1.75 : 2.5
          }" ${s.dashed ? 'stroke-dasharray="4 4"' : ''} stroke-linecap="round" stroke-linejoin="round"/>`,
      )
      .join('')}
    ${
      first
        ? `<circle cx="${x(first.values.length - 1).toFixed(1)}" cy="${y(
            first.values[first.values.length - 1],
          ).toFixed(1)}" r="4.5" fill="${first.color}"/>`
        : ''
    }
  </svg>`
}
