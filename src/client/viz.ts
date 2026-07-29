import { STATE_LABEL, type DayReading } from '../lib/domain/strain'
import { esc } from './ui'

/**
 * Datové prvky aplikace.
 *
 * Paleta je odvozená z obálky papírového diáře (akvarelová duha), ale
 * prohloubená — původní pastely měly moc vysokou světlost a moc nízkou
 * sytost, než aby unesly data. Výsledek prošel všemi šesti kontrolami
 * validátoru v tmavém i světlém režimu, včetně barvosleposti.
 *
 *   --s1 zlatá     Co dnešek žádá
 *   --s2 modrá     Co na to máte
 *   --s3 terakota  Úzkost
 *   --s4 švestková Naděje
 *
 * Grafy se nekreslí v šabloně, ale až při hydrataci — jinak by se nedal
 * pověsit hover, který je součástí dodávky, ne příplatek.
 */

// ------------------------------------------------------------- prstenec ---

/**
 * Dvojitý prstenec. Vnější oblouk je náročnost dne, vnitřní rezerva.
 * Obojí 0–10, kreslí se přes `pathLength`, takže rovnou v procentech.
 */
export function scissorRing(r: DayReading): string {
  const outer = r.demand * 10
  const inner = r.reserve === null ? 0 : r.reserve * 10

  return `<div class="ringwrap">
    <div class="bigring">
      <svg viewBox="0 0 218 218" role="img" aria-label="Co dnešek žádá ${r.demand} z 10${
        r.reserve === null ? ', rezerva zatím nezapsaná' : `, co na to máte ${r.reserve} z 10`
      }">
        <defs>
          <!-- Přechod uvnitř tahu. Plochá barva vypadá na velkém oblouku
               jako výplň, přechod z něj udělá světlo. -->
          <linearGradient id="ar1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="var(--s1)" stop-opacity=".55"/>
            <stop offset="100%" stop-color="var(--s1)"/>
          </linearGradient>
          <linearGradient id="ar2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="var(--s2)" stop-opacity=".55"/>
            <stop offset="100%" stop-color="var(--s2)"/>
          </linearGradient>
        </defs>
        <circle cx="109" cy="109" r="92" fill="none" stroke="var(--line)" stroke-width="13"/>
        <circle cx="109" cy="109" r="72" fill="none" stroke="var(--line)" stroke-width="13"/>
        <circle class="arc" cx="109" cy="109" r="92" fill="none" stroke="url(#ar1)" stroke-width="13"
                stroke-linecap="round" pathLength="100" stroke-dasharray="${outer} 100"/>
        ${
          r.reserve === null
            ? ''
            : `<circle class="arc arc-in" cx="109" cy="109" r="72" fill="none" stroke="url(#ar2)" stroke-width="13"
                 stroke-linecap="round" pathLength="100" stroke-dasharray="${inner} 100"/>`
        }
      </svg>
      <div class="bigring-mid">
        <p class="bignum">${r.demand}<small>/10</small></p>
        <p class="eyebrow" style="margin-top:.3rem">Co dnešek žádá</p>
      </div>
    </div>

    <div class="serieskey">
      <span><i style="background:var(--s1)"></i> Žádá dnešek <b class="num">${r.demand}</b></span>
      <span><i style="background:var(--s2)"></i> Máte na to <b class="num">${
        r.reserve === null ? '—' : r.reserve
      }</b></span>
    </div>

    <span class="statepill${r.state === 'siroke' || r.state === 'otevrene' ? ' alert' : ''}">
      ${esc(STATE_LABEL[r.state])}${r.gap !== null && r.gap > 0 ? ` · ${r.gap} ${r.gap === 1 ? 'bod' : r.gap < 5 ? 'body' : 'bodů'}` : ''}
    </span>
  </div>`
}

/** Rozpad čísla na složky. Nic není černá skříňka. */
export function partsList(title: string, parts: { label: string; points: number }[]): string {
  if (parts.length === 0) return ''
  return `<div style="margin-top:1rem">
    <p class="eyebrow">${esc(title)}</p>
    <ul class="parts">
      ${parts
        .map(
          (p) =>
            `<li><span>${esc(p.label)}</span><span class="num">${p.points > 0 ? '+' : ''}${
              Math.round(p.points * 10) / 10
            }</span></li>`,
        )
        .join('')}
    </ul>
  </div>`
}

// -------------------------------------------------------------- číselník ---

export type DialTone = 'cool' | 'warm' | 'plum' | 'gold'

/** Pětistupňový číselník. Velké terče, jedno klepnutí, žádné posuvníky. */
export function dial(name: string, value: number, tone: DialTone, lowLabel: string, highLabel: string): string {
  return `<div class="dialwrap">
    <div class="dial ${tone}" role="radiogroup" aria-label="${esc(name)}">
      ${[1, 2, 3, 4, 5]
        .map(
          (n) =>
            `<button type="button" role="radio" data-act="dial" data-arg="${esc(name)}:${n}"
                     aria-checked="${n === value}" aria-label="${esc(name)} ${n} z 5">${n}</button>`,
        )
        .join('')}
    </div>
    <div class="dialends"><span>${esc(lowLabel)}</span><span>${esc(highLabel)}</span></div>
  </div>`
}

// ------------------------------------------------------------ mapa vpichů ---

export interface ShotZone {
  key: string
  name: string
  x: number
  y: number
}

/** Šest zón na břiše. Pupík je uprostřed, kolem něj se drží odstup. */
export const SHOT_ZONES: ShotZone[] = [
  { key: 'lh', name: 'vlevo nahoře', x: 62, y: 46 },
  { key: 'ph', name: 'vpravo nahoře', x: 134, y: 46 },
  { key: 'ls', name: 'vlevo uprostřed', x: 54, y: 88 },
  { key: 'ps', name: 'vpravo uprostřed', x: 142, y: 88 },
  { key: 'ld', name: 'vlevo dole', x: 70, y: 124 },
  { key: 'pd', name: 'vpravo dole', x: 126, y: 124 },
]

/**
 * Mapa míst vpichu.
 *
 * `used` říká, před kolika dny se do zóny píchalo naposled. Aplikace navrhne
 * tu, kde je to nejdéle — deset dní do stejného místa bolí a dělá boule.
 */
export function bellyMap(used: Record<string, number | null>, pickedToday: string | null): string {
  const free = SHOT_ZONES.filter((z) => used[z.key] === null)
  const oldest = free.length
    ? free[0]
    : [...SHOT_ZONES].sort((a, b) => (used[b.key] ?? 0) - (used[a.key] ?? 0))[0]

  const zone = (z: ShotZone) => {
    const ago = used[z.key]
    const picked = pickedToday === z.key
    const suggested = !pickedToday && z.key === oldest.key
    const fill = picked ? 'var(--s1)' : ago === null ? 'transparent' : 'var(--card-muted)'
    const stroke = picked ? 'var(--s1)' : suggested ? 'var(--s2)' : ago === null ? 'var(--s1)' : 'var(--line)'
    return `<g class="zone" role="button" tabindex="0" data-act="shot" data-arg="${z.key}"
               aria-label="${esc(z.name)}${ago === null ? ', volné' : `, naposledy před ${ago} dny`}${
                 suggested ? ', doporučené' : ''
               }">
      <circle cx="${z.x}" cy="${z.y}" r="14" fill="${fill}" stroke="${stroke}" stroke-width="1.5"
              ${ago === null && !picked ? 'stroke-dasharray="3 3"' : ''}/>
      ${
        ago !== null && !picked
          ? `<text x="${z.x}" y="${z.y + 3.5}" text-anchor="middle" font-size="9" fill="var(--fg-faint)">−${ago}</text>`
          : ''
      }
    </g>`
  }

  return `<div class="belly">
    <svg width="196" height="170" viewBox="0 0 196 170" role="group" aria-label="Mapa míst vpichu na břiše">
      <path d="M46 16 Q98 4 150 16 Q166 58 158 108 Q146 152 98 158 Q50 152 38 108 Q30 58 46 16 Z"
            fill="var(--card)" stroke="var(--line)" stroke-width="1.5"/>
      <circle cx="98" cy="86" r="5" fill="none" stroke="var(--fg-faint)" stroke-width="1.5"/>
      ${SHOT_ZONES.map(zone).join('')}
    </svg>
  </div>
  <p class="faint" style="text-align:center;font-size:.8125rem;margin-top:.4rem">
    ${
      pickedToday
        ? `Zapsáno: <b style="color:var(--fg)">${esc(SHOT_ZONES.find((z) => z.key === pickedToday)?.name ?? '')}</b>`
        : `Dnes doporučujeme <b style="color:var(--fg)">${esc(oldest.name)}</b> — tam jste byla nejdéle.`
    }
  </p>`
}

// ----------------------------------------------------------------- grafy ---

export interface ChartSeries {
  name: string
  color: string
  data: (number | null)[]
}

export interface ChartSpec {
  series: ChartSeries[]
  labels: string[]
  yMax: number
  yMin?: number
  yTicks?: number
  /** Počet desetinných míst na ose. Výchozí 0. */
  decimals?: number
  unit?: string
  height?: number
}

/**
 * Zásuvka pro graf. Data putují jako JSON v atributu a SVG se sestaví až
 * v `hydrateCharts` — jinak by nešlo pověsit hover.
 */
export function chart(spec: ChartSpec, label: string): string {
  return `<div class="chartbox" data-chart='${esc(JSON.stringify(spec))}' role="img" aria-label="${esc(label)}">
    <svg></svg>
    <div class="charttip"></div>
  </div>`
}

/** Legenda. U dvou a víc řad je vždycky — identita nesmí stát jen na barvě. */
export function seriesKey(series: { name: string; color: string }[]): string {
  if (series.length < 2) return ''
  return `<div class="serieskey left">
    ${series.map((s) => `<span><i style="background:${s.color}"></i> ${esc(s.name)}</span>`).join('')}
  </div>`
}

const NS = 'http://www.w3.org/2000/svg'
const mk = (n: string, a: Record<string, string | number>): SVGElement => {
  const e = document.createElementNS(NS, n)
  for (const k in a) e.setAttribute(k, String(a[k]))
  return e as SVGElement
}

/**
 * Sestaví všechny grafy v kořeni a pověsí na ně hover vrstvu.
 *
 * Kreslí se ve skutečných pixelech, ne v roztaženém viewBoxu. Roztažený
 * viewBox by zvětšil popisky os spolu s grafem a nerovnoměrným měřítkem
 * rozmázl tahy — vodorovné by byly tlustší než svislé.
 */
export function hydrateCharts(root: ParentNode): void {
  for (const box of root.querySelectorAll<HTMLElement>('.chartbox')) {
    const spec = JSON.parse(box.dataset.chart ?? '{}') as ChartSpec
    const svg = box.querySelector('svg')
    const tip = box.querySelector<HTMLElement>('.charttip')
    if (!svg || !tip || !spec.series?.length) continue

    const draw = () => drawChart(box, svg, tip, spec)
    draw()
    // Šířka se mění s oknem i s otevřením postranního panelu.
    if ('ResizeObserver' in window) new ResizeObserver(draw).observe(box)
  }
}

function drawChart(box: HTMLElement, svg: SVGElement, tip: HTMLElement, spec: ChartSpec): void {
  {
    const W = Math.max(220, Math.round(box.clientWidth))
    // Na širokém displeji by graf o pevné výšce byl tenký proužek. Roste
    // s šířkou, ale jen do zhruba dvojnásobku — jinak by přerostl obrazovku.
    const base = spec.height ?? 150
    const H = Math.round(Math.min(base * 1.8, Math.max(base, W * 0.3)))
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`)
    svg.setAttribute('width', String(W))
    svg.setAttribute('height', String(H))
    const yMin = spec.yMin ?? 0
    const ticks = spec.yTicks ?? 3
    const dec = spec.decimals ?? 0
    const fmt = (v: number) => v.toLocaleString('cs-CZ', { minimumFractionDigits: dec, maximumFractionDigits: dec })

    // Levý odstup podle nejdelšího popisku osy, ať se čísla neořežou.
    const widest = Math.max(...Array.from({ length: ticks + 1 }, (_, t) => fmt(yMin + ((spec.yMax - yMin) * t) / ticks).length))
    const L = 10 + widest * 6.5
    const R = W - 12
    const T = 12
    const B = H - 20

    const n = spec.labels.length
    const x = (i: number) => (n === 1 ? (L + R) / 2 : L + (i * (R - L)) / (n - 1))
    const y = (v: number) => B - ((v - yMin) / (spec.yMax - yMin || 1)) * (B - T)

    svg.textContent = ''

    for (let t = 0; t <= ticks; t++) {
      const v = yMin + ((spec.yMax - yMin) * t) / ticks
      svg.appendChild(mk('line', { x1: L, x2: R, y1: y(v), y2: y(v), class: 'gridline' }))
      const lab = mk('text', { x: L - 6, y: y(v) + 3.5, 'text-anchor': 'end', class: 'axislabel' })
      lab.textContent = fmt(v)
      svg.appendChild(lab)
    }
    for (const i of n > 2 ? [0, Math.floor((n - 1) / 2), n - 1] : [0, n - 1]) {
      const lab = mk('text', { x: x(i), y: B + 14, 'text-anchor': 'middle', class: 'axislabel' })
      lab.textContent = spec.labels[i]
      svg.appendChild(lab)
    }

    for (const s of spec.series) {
      // Mezery v datech čáru přeruší, místo aby ji protáhly přes prázdno.
      let open = false
      let d = ''
      s.data.forEach((v, i) => {
        if (v === null) {
          open = false
          return
        }
        d += `${open ? 'L' : 'M'}${x(i)} ${y(v)} `
        open = true
      })
      if (d) svg.appendChild(mk('path', { d: d.trim(), fill: 'none', stroke: s.color, 'stroke-width': 2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }))

      const lastIdx = [...s.data].map((v, i) => (v === null ? -1 : i)).filter((i) => i >= 0).pop()
      if (lastIdx !== undefined) {
        // Prstenec z plochy, aby poslední bod nesplynul s čárou pod ním.
        svg.appendChild(mk('circle', { cx: x(lastIdx), cy: y(s.data[lastIdx]!), r: 4, fill: s.color, stroke: 'var(--page)', 'stroke-width': 2 }))
      }
    }

    const cross = svg.appendChild(mk('line', { y1: T, y2: B, stroke: 'var(--fg-faint)', 'stroke-width': 1, opacity: 0 }))
    const dots = spec.series.map((s) =>
      svg.appendChild(mk('circle', { r: 4, fill: s.color, stroke: 'var(--page)', 'stroke-width': 2, opacity: 0 })),
    )
    const hit = svg.appendChild(mk('rect', { x: L, y: T, width: R - L, height: B - T, fill: 'transparent' }))

    const at = (clientX: number) => {
      const box2 = svg.getBoundingClientRect()
      const px = ((clientX - box2.left) / box2.width) * W
      return Math.max(0, Math.min(n - 1, Math.round(((px - L) / (R - L)) * (n - 1))))
    }
    const move = (clientX: number) => {
      const i = at(clientX)
      cross.setAttribute('x1', String(x(i)))
      cross.setAttribute('x2', String(x(i)))
      cross.setAttribute('opacity', '.35')
      spec.series.forEach((s, k) => {
        const v = s.data[i]
        dots[k].setAttribute('opacity', v === null ? '0' : '1')
        if (v !== null) {
          dots[k].setAttribute('cx', String(x(i)))
          dots[k].setAttribute('cy', String(y(v)))
        }
      })
      tip.innerHTML =
        `<b>${esc(spec.labels[i])}</b>` +
        spec.series
          .map(
            (s) =>
              `<span class="tiprow"><i style="background:${s.color}"></i>${esc(s.name)} <b>${
                s.data[i] === null ? '—' : fmt(s.data[i]!) + (spec.unit ? ' ' + spec.unit : '')
              }</b></span>`,
          )
          .join('')
      tip.classList.add('on')
      const bb = box.getBoundingClientRect()
      const left = x(i)
      tip.style.left = `${Math.min(Math.max(left - tip.offsetWidth / 2, 0), Math.max(0, bb.width - tip.offsetWidth))}px`
    }
    const hide = () => {
      tip.classList.remove('on')
      cross.setAttribute('opacity', '0')
      for (const d of dots) d.setAttribute('opacity', '0')
    }

    hit.addEventListener('mousemove', (e) => move((e as MouseEvent).clientX))
    hit.addEventListener('mouseleave', hide)
    hit.addEventListener('touchstart', (e) => move((e as TouchEvent).touches[0].clientX), { passive: true })
    hit.addEventListener('touchmove', (e) => move((e as TouchEvent).touches[0].clientX), { passive: true })
    hit.addEventListener('touchend', hide)
  }
}

// ------------------------------------------------------------- dlaždice ---

export function statTile(label: string, value: string, sub?: string, color?: string): string {
  return `<div class="stattile">
    <p class="eyebrow">${esc(label)}</p>
    <p class="statv num"${color ? ` style="color:${color}"` : ''}>${esc(value)}</p>
    ${sub ? `<p class="faint" style="font-size:.75rem;margin-top:.2rem">${esc(sub)}</p>` : ''}
  </div>`
}
