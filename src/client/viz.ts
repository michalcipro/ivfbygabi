import { STATE_LABEL, type DayReading } from '../lib/domain/strain'
import { esc } from './ui'
import { zNum, type Endurance } from '../lib/domain/endurance'

/**
 * Datové prvky aplikace.
 *
 * Paleta je odvozená z obálky papírového diáře (akvarelová duha), ale
 * prohloubená. Původní pastely měly moc vysokou světlost a moc nízkou
 * sytost, než aby unesly data. Výsledek prošel všemi šesti kontrolami
 * validátoru v tmavém i světlém režimu, včetně barvosleposti.
 *
 *   --s1 zlatá     Co dnešek žádá
 *   --s2 modrá     Co na to máte
 *   --s3 terakota  Úzkost
 *   --s4 švestková Naděje
 *
 * Grafy se nekreslí v šabloně, ale až při hydrataci, jinak by se nedal
 * pověsit hover, který je součástí dodávky, ne příplatek.
 */

// ------------------------------------------------------------- prstenec ---

/**
 * Dvojitý prstenec. Vnější oblouk je náročnost dne, vnitřní rezerva.
 * Obojí 0–10, kreslí se přes `pathLength`, takže rovnou v procentech.
 */
export function scissorRing(r: DayReading): string {
  // Dva věnce plátků. Vnější je to, co dnešek žádá, vnitřní to, co na to máte
  //. Obojí se dá spočítat na plátky, takže rozdíl (nůžky) je vidět jako
  // rozdíl v šířce věnce, ne jako číslo, které si musíte odečíst.
  //
  // Číslo stojí pod květem, ne v něm: prostřední disk dost velký na číslici
  // i popisek by ukousl polovinu plátků.
  const demand = Math.max(0, Math.min(10, Math.round(r.demand)))
  const reserve = r.reserve === null ? null : Math.max(0, Math.min(10, Math.round(r.reserve)))

  const wreath = (
    count: number,
    tone: string,
    geo: { cy: number; rx: number; ry: number },
    opacity: number,
  ): string =>
    Array.from({ length: 10 }, (_, i) => {
      const on = i < count
      const fill = on ? tone : 'var(--track)'
      return `<ellipse cx="109" cy="${geo.cy}" rx="${geo.rx}" ry="${geo.ry}"
        fill="${fill}" fill-opacity="${on ? opacity : 0.5}"
        stroke="${fill}" stroke-opacity="${on ? 0.3 : 0.22}" stroke-width="1"
        transform="rotate(${i * 36} 109 109)"/>`
    }).join('')

  const label =
    reserve === null
      ? `Co dnešek žádá ${demand} z 10, rezerva zatím nezapsaná`
      : `Co dnešek žádá ${demand} z 10, co na to máte ${reserve} z 10`

  return `<div class="ringwrap">
    <div class="bigring">
      <svg viewBox="0 0 218 218" role="img" aria-label="${esc(label)}">
        <g class="bloom">
          ${wreath(demand, 'var(--s1)', { cy: 29, rx: 15, ry: 24 }, 0.52)}
          ${wreath(reserve ?? 0, 'var(--s2)', { cy: 80, rx: 11, ry: 21 }, 0.5)}
        </g>
        <circle cx="109" cy="109" r="7" fill="var(--card)" opacity=".9"/>
      </svg>
    </div>

    <p class="bignum"><span class="d">${demand}</span><small>/10</small></p>
    <p class="ringlabel">Co dnešek žádá</p>

    <div class="serieskey">
      <span><i style="background:var(--s1)"></i> Žádá dnešek <b class="num">${demand}</b></span>
      <span><i style="background:var(--s2)"></i> Máte na to <b class="num">${
        reserve === null ? '–' : reserve
      }</b></span>
    </div>

    <span class="statepill${r.state === 'siroke' || r.state === 'otevrene' ? ' alert' : ''}">
      ${esc(STATE_LABEL[r.state])}${r.gap !== null && r.gap > 0 ? ` · ${r.gap} ${r.gap === 1 ? 'bod' : r.gap < 5 ? 'body' : 'bodů'}` : ''}
    </span>
  </div>`
}

// --------------------------------------------------------------- unesla ---

/** Obvod vnitřního kruhu při r = 34. Vypočtené jednou, ať se to nehádá. */
const RING_C = 2 * Math.PI * 34

/**
 * Květ „co už jste unesla“.
 *
 * Vnější věnec: jeden plátek na milník cyklu, vyplněné jsou ty za ní.
 * Vnitřní kruh: čas. Jak daleko cyklus je. Ten se na rozdíl od plátků
 * hýbe každý den, a právě proto tu je.
 *
 * Věnec se nekreslí čárkovaně. Čárkovaný plátek v téhle aplikaci znamená
 * „nikdy se nevyplní“ a milník před ní se vyplní vždycky. Buď proto, že
 * přijde, nebo proto, že cyklus skončí.
 */
export function bloomEndurance(e: Endurance): string {
  const petals = e.steps
    .map((s, i) => {
      const c = s.passed ? 'var(--s1)' : 'var(--fg-faint)'
      return `<ellipse cx="109" cy="29" rx="15" ry="24"
        fill="${c}" fill-opacity="${s.passed ? 0.55 : 0.08}"
        stroke="${c}" stroke-opacity="${s.passed ? 0.3 : 0.45}"
        transform="rotate(${Math.round(((i * 360) / Math.max(e.steps.length, 1)) * 10) / 10} 109 109)"><title>${esc(
          `${s.label}${s.passed ? ' (za vámi' : ') před vámi'}`,
        )}</title></ellipse>`
    })
    .join('')

  // Kruh bez cyklu jen naznačí dráhu. Prázdný oblouk by tvrdil nulový postup,
  // což není totéž jako „žádný cyklus neběží“.
  const p = e.cycleProgress === null ? null : Math.max(0, Math.min(1, e.cycleProgress))
  const ring =
    `<circle cx="109" cy="109" r="34" fill="none" stroke="var(--s1)" stroke-width="6" stroke-opacity=".25"/>` +
    (p === null || p === 0
      ? ''
      : `<circle cx="109" cy="109" r="34" fill="none" stroke="var(--s1)" stroke-width="6" stroke-linecap="round"
          stroke-dasharray="${Math.round(RING_C * p * 10) / 10} ${Math.round(RING_C * 10) / 10}"
          transform="rotate(-90 109 109)"/>`)

  const label = `Za vámi ${e.passed} ${e.passed === 1 ? 'milník' : e.passed >= 2 && e.passed <= 4 ? 'milníky' : 'milníků'} ${zNum(e.total)} ${e.total}${
    p === null ? '' : `, cyklus je z ${Math.round(p * 100)} procent za vámi`
  }`

  return `<div class="ringwrap">
    <div class="bigring">
      <svg viewBox="0 0 218 218" role="img" aria-label="${esc(label)}">
        <g class="bloom">${petals}${ring}</g>
      </svg>
    </div>

    <p class="bignum"><span class="d">${e.big.value}</span>${
      e.big.of === null ? '' : `<small>${zNum(e.big.of)} ${e.big.of}</small>`
    }</p>
    <p class="ringlabel">${esc(e.big.caption)}</p>

    <div class="serieskey">
      ${
        // Legenda vysvětluje barvy, které jsou na obrázku. Řádek „Za vámi 0“
        // by popisoval barvu, která tam není, a četl by se jako výtka.
        e.passed > 0
          ? `<span><i style="background:var(--s1)"></i> Za vámi <b class="num">${e.passed}</b></span>`
          : ''
      }
      ${
        e.total - e.passed > 0
          ? `<span><i class="hollow" style="border-color:var(--fg-faint)"></i> Před vámi <b class="num">${e.total - e.passed}</b></span>`
          : ''
      }
    </div>

    <span class="statepill">${esc(e.pill)}</span>
  </div>`
}

/**
 * Milníky vypsané pod květem.
 *
 * Bez nich je věnec hezký obrázek, o kterém se nedá zjistit, který plátek je
 * který. Tenhle proužek z něj dělá čitelný graf.
 */
export function trackStrip(e: Endurance): string {
  return `<ol class="track">
    ${e.steps
      .map(
        (s) =>
          `<li class="${s.passed ? 'done' : ''}"><i aria-hidden="true">${s.passed ? '✓' : '·'}</i>${esc(s.label)}</li>`,
      )
      .join('')}
  </ol>`
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
 * tu, kde je to nejdéle. Deset dní do stejného místa bolí a dělá boule.
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
        : `Dnes doporučujeme <b style="color:var(--fg)">${esc(oldest.name)}</b>. Tam jste byla nejdéle.`
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
 * v `hydrateCharts`, jinak by nešlo pověsit hover.
 */
export function chart(spec: ChartSpec, label: string): string {
  return `<div class="chartbox" data-chart='${esc(JSON.stringify(spec))}' role="img" aria-label="${esc(label)}">
    <svg></svg>
    <div class="charttip"></div>
  </div>`
}

/** Legenda. U dvou a víc řad je vždycky. Identita nesmí stát jen na barvě. */
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
 * rozmázl tahy. Vodorovné by byly tlustší než svislé.
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
    // s šířkou, ale jen do zhruba dvojnásobku, jinak by přerostl obrazovku.
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
    // Krajní popisky se zarovnávají k okrajům plochy, ne na střed bodu.
    // vystředěné by přesahovaly graf a lezly na okraj karty.
    for (const i of n > 2 ? [0, Math.floor((n - 1) / 2), n - 1] : [0, n - 1]) {
      const anchor = i === 0 ? 'start' : i === n - 1 ? 'end' : 'middle'
      const lab = mk('text', { x: x(i), y: B + 14, 'text-anchor': anchor, class: 'axislabel' })
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
        svg.appendChild(mk('circle', { cx: x(lastIdx), cy: y(s.data[lastIdx]!), r: 4, fill: s.color, stroke: 'var(--card)', 'stroke-width': 2 }))
      }
    }

    const cross = svg.appendChild(mk('line', { y1: T, y2: B, stroke: 'var(--fg-faint)', 'stroke-width': 1, opacity: 0 }))
    // Body se rodí na počátku plochy, ne na souřadnici 0, jinak vyčnívají
    // z grafu, i když jsou průhledné.
    const dots = spec.series.map((s) =>
      svg.appendChild(mk('circle', { cx: L, cy: B, r: 4, fill: s.color, stroke: 'var(--card)', 'stroke-width': 2, opacity: 0 })),
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
                s.data[i] === null ? '–' : fmt(s.data[i]!) + (spec.unit ? ' ' + spec.unit : '')
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

// ------------------------------------------------- vzory převzaté ze vzoru ---
/**
 * Následující prvky vychází ze způsobu, jakým je členěná referenční aplikace.
 * Přebíráme z ní chování a rozvržení, ne vzhled. Barvy, poloměry i písmo
 * zůstávají naše.
 */

export interface SegmentItem {
  id: string
  label: string
}

/**
 * Přepínač nahoře na obrazovce.
 *
 * Nejsilnější vzor z reference: každá záložka se dělí na dvě až tři části,
 * takže se pět záložek chová jako dvanáct obrazovek. Bez zanořování.
 */
export function segmented(items: SegmentItem[], active: string, act: string): string {
  return `<div class="segmented" role="tablist">
    ${items
      .map(
        (i) =>
          `<button type="button" role="tab" data-act="${esc(act)}" data-arg="${esc(i.id)}"
                   aria-selected="${i.id === active}">${esc(i.label)}</button>`,
      )
      .join('')}
  </div>`
}

/** Trojice čísel pod přepínačem. Celkem, hotovo, zbývá. */
export function statTrio(cells: { icon: string; value: string | number; label: string }[]): string {
  return `<div class="trio">
    ${cells
      .map(
        (c) => `<div class="triocell">
          <span class="ic">${c.icon}</span>
          <b class="num">${esc(c.value)}</b>
          <span class="lb">${esc(c.label)}</span>
        </div>`,
      )
      .join('')}
  </div>`
}

/** Nadpis sekce ležící přímo na ploše, volitelně s akcí vpravo. */
export function sectionHead(title: string, action?: { label: string; act?: string; go?: string }): string {
  return `<div class="sechead">
    <h3 class="display">${esc(title)}</h3>
    ${
      action
        ? `<button class="addbtn" ${action.go ? `data-go="${esc(action.go)}"` : `data-act="${esc(action.act ?? '')}"`}
                   aria-label="${esc(action.label)}">+</button>`
        : ''
    }
  </div>`
}

/** Karta, která nabízí akci: ikona, tučný název, věta navíc, šipka. */
export function actionCard(opts: {
  icon: string
  title: string
  body: string
  go?: string
  act?: string
  arg?: string
}): string {
  const target = opts.go
    ? `data-go="${esc(opts.go)}"`
    : `data-act="${esc(opts.act ?? '')}"${opts.arg ? ` data-arg="${esc(opts.arg)}"` : ''}`
  return `<button class="actioncard" ${target}>
    <span class="ic">${opts.icon}</span>
    <span class="txt">
      <b>${esc(opts.title)}</b>
      <span>${esc(opts.body)}</span>
    </span>
    <span class="go">›</span>
  </button>`
}

/**
 * Řádek rozcestníku s vysvětlením.
 *
 * To „ⓘ“ je z reference to nejlepší: u každé položky je vidět, k čemu je,
 * aniž by se tam muselo kliknout.
 */
export function hubRow(route: string, icon: string, title: string, why: string): string {
  return `<button class="hubrow" data-go="${esc(route)}">
    <span class="ic">${icon}</span>
    <span class="txt"><b>${esc(title)}</b><span class="why">${esc(why)}</span></span>
    <span class="go">›</span>
  </button>`
}

/** Vodorovný pás posledních dnů. Rychlý pohled zpátky bez grafu. */
export function dayStrip(
  days: { date: string; label: string; sub: string; counts: { icon: string; n: number }[] }[],
  act?: string,
): string {
  if (days.length === 0) return ''
  return `<div class="daystrip">
    ${days
      .map(
        (d) => `<${act ? 'button' : 'div'} class="daycell"${act ? ` data-act="${esc(act)}" data-arg="${esc(d.date)}"` : ''}>
          <b>${esc(d.label)}</b>
          <span class="sub">${esc(d.sub)}</span>
          <span class="counts">${d.counts.map((c) => `<span>${c.icon} <b class="num">${c.n}</b></span>`).join('')}</span>
        </${act ? 'button' : 'div'}>`,
      )
      .join('')}
  </div>`
}

/** Rozbalovací skupina. Používá se u taxonomie příznaků. */
export function accordion(id: string, name: string, hint: string, open: boolean, body: string): string {
  return `<div class="acc${open ? ' open' : ''}">
    <button class="acchead" data-act="acc" data-arg="${esc(id)}" aria-expanded="${open}">
      <span class="txt"><b>${esc(name)}</b><span>${esc(hint)}</span></span>
      <span class="caret">⌄</span>
    </button>
    ${open ? `<div class="accbody">${body}</div>` : ''}
  </div>`
}

/** Přepínač zapnuto/vypnuto v nastavení. */
export function toggleRow(key: string, title: string, body: string, on: boolean): string {
  return `<button class="togglerow" data-act="pref" data-arg="${esc(key)}" aria-pressed="${on}">
    <span class="txt"><b>${esc(title)}</b><span>${esc(body)}</span></span>
    <span class="knob"></span>
  </button>`
}

// ------------------------------------------------------------------ značka ---

/**
 * Srdce znaku. Dva souměrné oblouky a hrot dole.
 *
 * Kreslí se z jednoho místa, protože stejný tvar používá znak v aplikaci,
 * ikona na ploše i hlavička dokumentu. Dvě verze téhož srdce by se dřív
 * nebo později rozešly a značka by přestala být jedna.
 */
const SRDCE =
  'M23 46C8.6 34.2 0 25.2 0 15.4 0 6.9 6.3 0 14.1 0c4 0 7.4 2 8.9 5.1C24.5 2 27.9 0 31.9 0 39.7 0 46 6.9 46 15.4 46 25.2 37.4 34.2 23 46Z'

/**
 * Srdce se kreslí ve vlastní soustavě 46 × 46 a do znaku se usazuje
 * transformací. Jinak by se při každé změně velikosti muselo přepočítávat
 * dvacet čísel v cestě a tvar by se pokaždé o kousek rozešel.
 */
const SRDCE_USAZENE = 'translate(14 22) scale(0.435)'

/**
 * Znak BlooMia: tři tečky a pod nimi srdce.
 *
 * Tečky jdou odshora dolů a rostou. Je to cesta, čekání a to, jak se
 * z ničeho postupně stane něco. Srdce dole není ozdoba, je to cíl.
 *
 * Znak se používá střídmě. Rozpoznatelný je právě proto, že není všude:
 * ikona aplikace, favicon, načítání, hlavička, patička dokumentu. Ne
 * u každého nadpisu.
 *
 * `mono` vypne barvy a kreslí jednou barvou textu. Pro tisk, dokumenty
 * a všude, kde růžová se švestkou nemají co dělat.
 */
export function bloomMark(size = 28, animate = false, mono = false): string {
  const srdce = mono ? 'currentColor' : '#c94f6b'
  // Tři tečky nad sebou, každá o kousek větší. Průhlednost klesá odshora,
  // takže nejmenší je nejtišší.
  // Tři tečky nad sebou, každá o kousek větší. Barva jde od pudrové přes
  // švestkovou zpět k růžové, přesně jako v logu. Průhlednost by tenhle
  // přechod nedokázala: prostřední tečka je v předloze tmavší, ne slabší.
  const tecky = [
    { cy: 6.2, r: 1.7, barva: mono ? 'currentColor' : '#d79aa6' },
    { cy: 11.9, r: 1.95, barva: mono ? 'currentColor' : '#b3748f' },
    { cy: 17.7, r: 2.2, barva: mono ? 'currentColor' : '#c2506b' },
  ]
  // Nula znamená, že velikost řídí CSS obalu. Atribut se pak nepíše vůbec,
  // jinak by přebil poměrové rozměry loga v kruhu.
  const rozmer = size > 0 ? `width="${size}" height="${size}"` : ''
  return `<svg class="bmark${animate ? ' bmark-anim' : ''}" ${rozmer}
     viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    ${tecky
      .map(
        (t, i) =>
          `<circle cx="24" cy="${t.cy}" r="${t.r}" fill="${t.barva}"
             ${animate ? `style="animation:bmdot 1.4s var(--calm) ${i * 180}ms infinite"` : ''}/>`,
      )
      .join('')}
    <path d="${SRDCE}" fill="${srdce}" transform="${SRDCE_USAZENE}"
          ${animate ? 'style="animation:bmheart 1.4s var(--calm) 540ms infinite"' : ''}/>
  </svg>`
}

/**
 * Jméno značky.
 *
 * Bloo je švestkové, Mia pudrově růžová. Rozdělení není ozdoba: v tom
 * předělu je celý příběh názvu, takže se nesmí sjednotit do jedné barvy
 * ani prohodit.
 *
 * Nepíše se přes `esc()`, protože jde o dvě pevné části názvu, ne o vstup
 * uživatelky.
 */
export function bloomiaName(): string {
  return `<b class="bmname"><span class="bloo">Bloo</span><span class="mia">Mia</span></b>`
}

/** Jméno se znakem. Používá se v postranním panelu a v uvítání. */
export function wordmark(size = 26): string {
  return `<span class="wordmark">${bloomMark(size)}${bloomiaName()}</span>`
}

/**
 * Celé logo.
 *
 * Znak, jméno a pod ním jemné srdce mezi dvěma linkami. Používá se tam, kde
 * má značka prostor: uvítání, o aplikaci BlooMia, hlavička PDF. Do rozhraní mezi
 * obsah nepatří, tam stačí `wordmark()`.
 *
 * Claim pod logem není. Logo je jenom BlooMia. „Vaše IVF cesta“ je věta
 * pro nadpis stránky, ne součást značky, a v logu by se opotřebovala.
 */
export function logoFull(size = 44, mono = false): string {
  // Nula znamená, že velikost řídí obal (logo v kruhu). Atribut se pak
  // nepíše vůbec, jinak by přebil poměrové rozměry z CSS.
  return `<div class="bmlogo${mono ? ' mono' : ''}">
    ${bloomMark(size, false, mono)}
    ${bloomiaName()}
    <div class="bmrule" aria-hidden="true">
      <i></i>
      <svg width="18" height="18" viewBox="0 0 46 46" fill="none"
           stroke="${mono ? 'currentColor' : 'var(--heart)'}" stroke-width="4">
        <path d="${SRDCE}"/>
      </svg>
      <i></i>
    </div>
  </div>`
}

/**
 * Logo v akvarelovém kruhu.
 *
 * Hlavní podoba značky: pudrová skvrna, na ní znak, jméno a linka se
 * srdcem. Kreslí se, ne načítá, protože rastr by na sítnicovém displeji
 * rozmazal vlásnice a v tmavém režimu by kolem sebe měl bílý čtverec.
 *
 * Skvrna bere barvy z motivu, takže v noci ztmavne s celou aplikací
 * a nesvítí ze stránky jako lampa.
 *
 * Rozměry uvnitř jsou v procentech šířky kruhu (`cqw`), takže se logo
 * zvětšuje celé najednou a nikdy se nerozjede.
 */
export function logoKruh(sirka = '13rem', mono = false): string {
  return `<div class="bmkruh${mono ? ' mono' : ''}" style="width:${sirka}">
    ${mono ? '' : VODOVKA}
    <div class="bmkruh-obsah">${logoFull(0, mono)}</div>
  </div>`
}

/**
 * Akvarelová skvrna pod logem.
 *
 * Nepravidelný okraj dělá `feDisplacementMap` nad šumem, jemné zrno druhý
 * šum přes celý kruh. Kdyby to byl obrázek, vážil by desítky kilobajtů
 * a nešel by obarvit podle motivu.
 */
const VODOVKA = `<svg class="bmvodovka" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
  <defs>
    <radialGradient id="bmw1" cx="38%" cy="30%" r="78%">
      <stop offset="0%" stop-color="var(--vodovka-1)"/>
      <stop offset="52%" stop-color="var(--vodovka-2)"/>
      <stop offset="100%" stop-color="var(--vodovka-3)"/>
    </radialGradient>
    <radialGradient id="bmw2" cx="76%" cy="72%" r="46%">
      <stop offset="0%" stop-color="var(--vodovka-3)" stop-opacity=".8"/>
      <stop offset="100%" stop-color="var(--vodovka-3)" stop-opacity="0"/>
    </radialGradient>
    <filter id="bmrozpiti" x="-12%" y="-12%" width="124%" height="124%">
      <feTurbulence type="fractalNoise" baseFrequency="0.014 0.019" numOctaves="4" seed="7" result="sum"/>
      <feDisplacementMap in="SourceGraphic" in2="sum" scale="26" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>
  <g filter="url(#bmrozpiti)">
    <circle cx="200" cy="200" r="191" fill="url(#bmw1)"/>
    <circle cx="200" cy="200" r="191" fill="url(#bmw2)"/>
  </g>
</svg>`
