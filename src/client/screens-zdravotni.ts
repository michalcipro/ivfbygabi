import { daysBetween, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import { cycleTitle } from '../lib/domain/cycle'
import { NO_DIAGNOSIS } from '../lib/health/interpret'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import {
  currentCycle,
  cycleById,
  cycleStatus,
  S,
  viewDate,
  type HealthKind,
  type HealthRow,
  type UltrasoundRow,
} from './store'
import { photoStrip } from './photo-ui'
import { empty, esc, note, plural, tile } from './ui'
import { actionCard, chart, hubRow, sectionHead, segmented, seriesKey, statTrio } from './viz'

/**
 * Zdravotní data. Měření, ultrazvuk, laboratoř.
 *
 * Tři sekce pod jedním přepínačem. Všechny tři dělají to samé: berou čísla,
 * která uživatelka dostala od kliniky nebo si je naměřila doma, a ukládají je
 * tak, aby se daly ukázat lékaři a viděl se jejich vývoj v čase.
 *
 * CO TENHLE SOUBOR NIKDY NEDĚLÁ: nehodnotí. Nikde nezazní „v normě“, „málo“,
 * „vysoké“ ani „vypadá to dobře“. Bazální teplota se nevyhodnocuje na ovulaci,
 * folikuly se nepočítají na šanci, tlak se neporovnává s tabulkou. Orientační
 * rozmezí se liší podle laboratoře, dne cyklu, věku i diagnózy, proto je
 * `NO_DIAGNOSIS` na konci každé sekce a proto tu žádné rozmezí nekreslíme.
 *
 * ---------------------------------------------------------------- AKCE ---
 * Obsluhu doplní main.ts. Formulář se čte podle id polí, stejně jako `lab-add`.
 *
 *   zdrav-sec  arg = 'mereni' | 'ultrazvuk' | 'laborator'
 *              → go(`zdravotni/${arg}`), aby dílek držel v adrese.
 *
 *   hz-add     arg = druh měření: 'bbt' | 'vaha' | 'tlak' | 'tep' | 'spanek' | 'pitny'
 *              Čte pole (druh je v id, formuláře stojí vedle sebe na jedné stránce):
 *                hz-<druh>-date   datum (type=date, předvyplněné viewDate())
 *                hz-<druh>-at     čas (type=time, může být prázdný)
 *                hz-<druh>-val    hodnota. U tlaku systolický tlak
 *                hz-<druh>-val2   jen 'tlak': diastolický tlak
 *                hz-<druh>-note   poznámka
 *              Čísla se píší česky, tedy s čárkou: `Number(v.replace(',', '.'))`.
 *              Když hodnota není konečné číslo, neukládat nic (u tlaku stačí,
 *              když je zapsaná aspoň jedna ze dvou složek).
 *              Ukládá do `S.d.health` jako HealthRow: { id: uid('hz'), date, at,
 *              kind: arg, value, value2, text: '', note, attachments: [] }.
 *
 *   hz-del     arg = id řádku v `S.d.health`
 *
 *   us-add     Čte pole us-date, us-left, us-right, us-endo, us-note.
 *              Velikosti folikulů přijdou jako text „18, 16, 14“. Rozpad:
 *                text.split(/[^0-9.,]+/).map(s => Number(s.replace(',', '.')))
 *                    .filter(n => Number.isFinite(n) && n > 0)
 *              Ukládá do `S.d.ultrasounds` jako UltrasoundRow: { id: uid('uz'),
 *              date, cycleId: activeCycleId(), left, right, endometrium, note,
 *              attachments: [] }. Prázdný ultrazvuk (nic vlevo, nic vpravo,
 *              žádná sliznice, žádná poznámka) se neukládá.
 *
 *   us-del     arg = id řádku v `S.d.ultrasounds`
 *
 * Laboratoř vlastní akce nemá. Vede na obrazovku `zdravi`, která už zadávání
 * i grafy umí, a na `dokumenty` pro vytažení hodnot ze zprávy.
 *
 * Navíc se exportuje `measureTitle(kind)`. Český název druhu měření, ať má
 * main.ts co napsat do hlášky po uložení („Bazální teplota uložena“).
 *
 * ----------------------------------------------------------------- CSS ---
 * Žádné nové třídy. Všechno stojí na tom, co už v app.css je:
 * .surface .pad .rise .sechead .addbtn .field .label .two .formrow .linelist
 * .tipbox .note .empty .trio .chips .badge .badge-soft .num .faint .soft.
 */

// ------------------------------------------------------------------ sekce ---

export const ZDRAV_SECTIONS = [
  { id: 'mereni', label: 'Měření' },
  { id: 'ultrazvuk', label: 'Ultrazvuk' },
  { id: 'laborator', label: 'Laboratoř' },
]

export type ZdravSection = 'mereni' | 'ultrazvuk' | 'laborator'

export function isZdravSection(s: string): s is ZdravSection {
  return ZDRAV_SECTIONS.some((x) => x.id === s)
}

// -------------------------------------------------------------- pomocníci ---

/** Číslo česky: desetinná čárka a žádné koncové nuly. */
function czNum(value: number, decimals = 2): string {
  if (!Number.isFinite(value)) return '–'
  return value
    .toFixed(decimals)
    .replace(/(\.\d*?)0+$/, '$1')
    .replace(/\.$/, '')
    .replace('.', ',')
}

function round2(n: number): number {
  return Math.round(n * 100) / 100
}

/** Použitelné velikosti folikulů. Nula ani nesmysl není folikul. */
function sizes(values: number[] | undefined): number[] {
  return (values ?? []).filter((v) => Number.isFinite(v) && v > 0)
}

/** Spojí části řádku a zahodí prázdné. */
function join(parts: (string | false | null | undefined)[], sep = ' · '): string {
  return parts.filter((p): p is string => Boolean(p && p.trim())).join(sep)
}

/**
 * Den cyklu, do kterého záznam spadá. Bere se cyklus, ke kterému je záznam
 * přivázaný, jinak ten právě běžící. A jen když má zadané CD1.
 */
function cycleDayOf(date: string, cycleId: string | null): number | null {
  // Fallback platí jen pro záznam bez vazby. Když je cyklus zapsaný, ale
  // mezitím smazaný, nesmí záznam dostat CD číslo z jiného cyklu.
  const c = cycleId ? cycleById(cycleId) : currentCycle()
  if (!c || !c.cd1On || date < c.cd1On) return null
  return daysBetween(c.cd1On, date) + 1
}

// ------------------------------------------------------------- druhy měření ---

/**
 * Druhy měření, které si žena bere domů.
 *
 * `procedura` z `HealthKind` tady schválně není. To není naměřená hodnota,
 * ale zápis zákroku, a ten patří do kalendáře a na časovou osu.
 */
interface MeasureSpec {
  kind: Exclude<HealthKind, 'procedura'>
  icon: string
  title: string
  /** Jedna věta pod nadpisem. Co se zapisuje a jak. */
  hint: string
  unit: string
  valueLabel: string
  valuePlaceholder: string
  /** Druhé pole. Má ho jen tlak. */
  value2Label?: string
  value2Placeholder?: string
  /** Krok svislé osy grafu. */
  step: number
  /** Začíná osa na nule? U teploty, váhy a tlaku ne. Nula je mimo měřítko. */
  zero: boolean
  /** Desetinná místa na ose a v bublině grafu. */
  decimals: number
  color: string
  color2?: string
}

const MEASURES: MeasureSpec[] = [
  {
    kind: 'bbt',
    icon: '◉',
    title: 'Bazální teplota',
    hint: 'Měří se hned po probuzení, ještě před vstáním, každý den přibližně ve stejnou dobu a stejným teploměrem.',
    unit: '°C',
    valueLabel: 'Teplota (°C)',
    valuePlaceholder: 'např. 36,55',
    step: 0.2,
    zero: false,
    decimals: 1,
    color: 'var(--s1)',
  },
  {
    kind: 'vaha',
    icon: '◈',
    title: 'Váha',
    hint: 'Ve stimulaci se váha může měnit ze dne na den. Hodnoty se nejlíp porovnávají, když se vážíte ráno a nalačno.',
    unit: 'kg',
    valueLabel: 'Váha (kg)',
    valuePlaceholder: 'např. 64,3',
    step: 1,
    zero: false,
    decimals: 1,
    color: 'var(--s2)',
  },
  {
    kind: 'tlak',
    icon: '◍',
    title: 'Krevní tlak',
    hint: 'Zapisuje se horní a dolní hodnota. Měří se vsedě, po pár minutách v klidu.',
    unit: 'mmHg',
    valueLabel: 'Horní (systolický)',
    valuePlaceholder: 'např. 118',
    value2Label: 'Dolní (diastolický)',
    value2Placeholder: 'např. 76',
    step: 10,
    zero: false,
    decimals: 0,
    color: 'var(--s1)',
    color2: 'var(--s2)',
  },
  {
    kind: 'tep',
    icon: '♡',
    title: 'Tepová frekvence',
    hint: 'Klidový tep, ideálně vsedě a ve stejnou denní dobu.',
    unit: '/min',
    valueLabel: 'Tep za minutu',
    valuePlaceholder: 'např. 72',
    step: 10,
    zero: false,
    decimals: 0,
    color: 'var(--s4)',
  },
  {
    kind: 'spanek',
    icon: '☾',
    title: 'Spánek',
    hint: 'Kolik hodin jste opravdu spala. Půlhodiny zapisujte s čárkou, třeba 7,5.',
    unit: 'h',
    valueLabel: 'Hodin spánku',
    valuePlaceholder: 'např. 7,5',
    step: 1,
    zero: true,
    decimals: 1,
    color: 'var(--s2)',
  },
  {
    kind: 'pitny',
    icon: '◇',
    title: 'Pitný režim',
    hint: 'Kolik jste za den vypila, v mililitrech. Kolik pít vám řekne klinika, hlavně kolem odběru.',
    unit: 'ml',
    valueLabel: 'Za den (ml)',
    valuePlaceholder: 'např. 2000',
    step: 500,
    zero: true,
    decimals: 0,
    color: 'var(--s3)',
  },
]

const MEASURE_LABEL: Record<string, string> = Object.fromEntries(
  MEASURES.map((m) => [m.kind, m.title]),
)

// ---------------------------------------------------------------- měření ---

function rowsOf(kind: string): HealthRow[] {
  return S.d.health
    .filter((r) => r.kind === kind)
    .sort((a, b) => a.date.localeCompare(b.date) || a.at.localeCompare(b.at))
}

/** Hodnota jako věta. U tlaku dvě čísla lomítkem, jak se to říká. */
function valueText(spec: MeasureSpec, r: HealthRow): string {
  if (spec.kind === 'tlak') {
    if (r.value === null && r.value2 === null) return '–'
    const top = r.value === null ? '–' : czNum(r.value)
    const bottom = r.value2 === null ? '–' : czNum(r.value2)
    return `${top}/${bottom} ${spec.unit}`
  }
  return r.value === null ? '–' : `${czNum(r.value)} ${spec.unit}`
}

/**
 * Nadpis druhu.
 *
 * Plus v záhlaví tu schválně není: znamená univerzálně „přidat pole“, ne
 * „ulož formulář, který jsi možná nevyplnila“. Ukládá jediné tlačítko,
 * a to je až pod formulářem.
 */
function measureHead(spec: MeasureSpec): string {
  return `<div class="sechead" style="margin:0 0 .1rem">
    <h3 class="display">${spec.icon} ${esc(spec.title)}</h3>
  </div>`
}

/** Formulář nad seznamem: datum, čas, hodnota (u tlaku dvě), poznámka. */
function measureForm(spec: MeasureSpec): string {
  const id = (part: string) => `hz-${spec.kind}-${part}`
  const noteField = `<div><label class="label" for="${id('note')}">Poznámka</label>
    <input class="field" id="${id('note')}" autocomplete="off" placeholder="nepovinné"></div>`
  const valueField = `<div><label class="label" for="${id('val')}">${esc(spec.valueLabel)}</label>
    <input class="field" id="${id('val')}" inputmode="decimal" autocomplete="off" placeholder="${esc(spec.valuePlaceholder)}"></div>`

  const second = spec.value2Label
    ? `<div><label class="label" for="${id('val2')}">${esc(spec.value2Label)}</label>
        <input class="field" id="${id('val2')}" inputmode="decimal" autocomplete="off" placeholder="${esc(spec.value2Placeholder ?? '')}"></div>`
    : noteField

  return `<div style="margin-top:1.2rem">
    <div class="two">
      <div><label class="label" for="${id('date')}">Datum</label>
        <input class="field" type="date" id="${id('date')}" value="${esc(viewDate())}"></div>
      <div><label class="label" for="${id('at')}">Čas</label>
        <input class="field" type="time" id="${id('at')}"></div>
    </div>
    <div class="two" style="margin-top:1rem">${valueField}${second}</div>
    ${spec.value2Label ? `<div class="formrow" style="margin-top:1rem">${noteField}</div>` : ''}
    <button class="btn btn-primary btn-sm" data-act="hz-add" data-arg="${esc(spec.kind)}" style="margin-top:1.15rem">
      Uložit zápis
    </button>
  </div>`
}

/** Osa grafu. Kulaté kroky, ať se čísla dají přečíst bez počítání. */
function axisFor(values: number[], spec: MeasureSpec): { yMin: number; yMax: number; ticks: number } {
  const min = Math.min(...values)
  const max = Math.max(...values)
  const step = spec.step
  const yMin = spec.zero ? 0 : round2(Math.floor((min - step) / step) * step)
  let yMax = round2(Math.ceil((max + step) / step) * step)
  if (yMax <= yMin) yMax = round2(yMin + step)
  const spans = Math.max(1, Math.round((yMax - yMin) / step))
  const ticks = [5, 4, 3, 2].find((d) => spans % d === 0) ?? 4
  return { yMin, yMax, ticks }
}

/** Graf druhu. Kreslí se až od dvou hodnot. Jeden bod není vývoj. */
function measureChart(spec: MeasureSpec, rows: HealthRow[]): string {
  const points = rows.filter((r) => r.value !== null || r.value2 !== null).slice(-30)
  if (points.length < 2) return ''

  const all = points.flatMap((p) => [p.value, spec.kind === 'tlak' ? p.value2 : null])
    .filter((v): v is number => v !== null && Number.isFinite(v))
  if (all.length < 2) return ''

  const axis = axisFor(all, spec)
  const series =
    spec.kind === 'tlak'
      ? [
          { name: 'Horní', color: spec.color, data: points.map((p) => p.value) },
          { name: 'Dolní', color: spec.color2 ?? 'var(--s2)', data: points.map((p) => p.value2) },
        ]
      : [{ name: spec.title, color: spec.color, data: points.map((p) => p.value) }]

  return `<div style="margin-top:1.5rem">
    ${chart(
      {
        series,
        labels: points.map((p) => formatCzechDateShort(p.date)),
        yMin: axis.yMin,
        yMax: axis.yMax,
        yTicks: axis.ticks,
        decimals: spec.decimals,
        unit: spec.unit,
      },
      `${spec.title} v čase`,
    )}
    ${seriesKey(series)}
  </div>`
}

/** Posledních pár zápisů. Víc než pět se nečte, jen zabírá. */
function measureList(spec: MeasureSpec, rows: HealthRow[]): string {
  if (rows.length === 0) {
    return `<p class="faint" style="margin-top:1.3rem;font-size:.8125rem;line-height:1.55">
      Zatím žádný zápis. První přidáte ve formuláři nad tímhle řádkem.
    </p>`
  }

  const recent = rows.slice(-5).reverse()
  return `<div style="margin-top:1.5rem">
    <p class="eyebrow">Poslední zápisy</p>
    <ul class="linelist">
      ${recent
        .map(
          (r) => `<li>
            <span class="when">${esc(formatCzechDateShort(r.date))}${r.at ? `<br>${esc(r.at)}` : ''}</span>
            <span style="min-width:0;flex:1">
              <b class="num" style="font-weight:500">${esc(valueText(spec, r))}</b>
              ${r.note ? `<span class="faint" style="display:block;font-size:.8125rem;line-height:1.5;margin-top:.15rem">${esc(r.note)}</span>` : ''}
            </span>
            <button class="btn btn-ghost btn-sm" data-act="hz-del" data-arg="${esc(r.id)}"
                    aria-label="Smazat zápis ze dne ${esc(formatCzechDateShort(r.date))}">×</button>
          </li>`,
        )
        .join('')}
    </ul>
    ${
      rows.length > recent.length
        ? `<p class="faint" style="margin-top:.7rem;font-size:.75rem">Celkem ${esc(plural(rows.length, 'zápis', 'zápisy', 'zápisů'))}.</p>`
        : ''
    }
  </div>`
}

function measureCard(spec: MeasureSpec, primary = false): string {
  const rows = rowsOf(spec.kind)
  return `<section class="surface pad rise" style="margin-top:1rem">
    ${measureHead(spec)}
    <p class="soft" style="margin-top:.45rem;font-size:.875rem;line-height:1.6">${esc(spec.hint)}</p>
    ${
      primary
        ? `<p class="tipbox">Křivku vám tu aplikace nevyhodnocuje a nehledá v ní ovulaci. Na to je potřeba znát celý kontext cyklu. Zápisy slouží vám a vašemu lékaři.</p>`
        : ''
    }
    ${measureForm(spec)}
    ${measureChart(spec, rows)}
    ${measureList(spec, rows)}
  </section>`
}

function paneMereni(): string {
  const all = S.d.health
  const kinds = new Set(all.map((r) => r.kind))
  const last = [...all].sort((a, b) => a.date.localeCompare(b.date)).pop()
  const [bbt, ...rest] = MEASURES

  const overview =
    all.length === 0
      ? empty(
          'Zatím žádné měření',
          'Nejsledovanější bývá bazální teplota. Formulář na ni najdete hned pod tímhle textem. Hodnoty z odběrů patří do Laboratoře, folikuly do Ultrazvuku.',
          '<button class="btn btn-primary" data-act="hz-focus" data-arg="bbt">Zapsat první teplotu</button>',
          '◉',
        )
      : statTrio([
          { icon: '◉', value: all.length, label: 'zápisy celkem' },
          { icon: '◈', value: kinds.size, label: 'sledované druhy' },
          { icon: '◷', value: last ? formatCzechDateShort(last.date) : '–', label: 'poslední zápis' },
        ])

  return [
    overview,
    measureCard(bbt, true),
    rest.map((m) => measureCard(m)).join(''),
    `<section class="rise" style="margin-top:1.5rem">
      ${sectionHead('Kam dál')}
      ${hubRow('zdravotni/ultrazvuk', '◍', 'Ultrazvuk', 'Folikuly a sliznice tak, jak vám je řekl lékař')}
      ${hubRow('zdravi', '◉', 'Laboratoř', 'Hormony a odběry s grafem i vysvětlením, co parametr v těle dělá')}
      ${hubRow('zapis/telo', '◕', 'Jak se ozývá tělo', 'Příznaky s intenzitou. Patří ke stejnému rozhovoru s lékařem')}
    </section>`,
    note(NO_DIAGNOSIS),
  ].join('')
}

// -------------------------------------------------------------- ultrazvuk ---

function scanNumbers(u: UltrasoundRow): { left: number[]; right: number[]; count: number; biggest: number | null } {
  const left = sizes(u.left)
  const right = sizes(u.right)
  const all = [...left, ...right]
  return { left, right, count: all.length, biggest: all.length ? Math.max(...all) : null }
}

function ultrasoundForm(): string {
  return `<section class="surface pad rise">
    ${sectionHead('Nový ultrazvuk', { label: 'Uložit ultrazvuk', act: 'us-add' })}
    <p class="soft" style="margin-top:.45rem;font-size:.875rem;line-height:1.6">
      Velikosti zapisujete tak, jak vám je při kontrole nadiktoval lékař. Každý folikul zvlášť,
      oddělený čárkou. Nic se nedopočítává a nic se neopravuje.
    </p>
    <div class="two" style="margin-top:1.2rem">
      <div><label class="label" for="us-date">Datum kontroly</label>
        <input class="field" type="date" id="us-date" value="${esc(viewDate())}"></div>
      <div><label class="label" for="us-endo">Sliznice (mm)</label>
        <input class="field" id="us-endo" inputmode="decimal" autocomplete="off" placeholder="např. 9,2"></div>
    </div>
    <div class="two" style="margin-top:1rem">
      <div><label class="label" for="us-left">Folikuly vlevo (mm)</label>
        <input class="field" id="us-left" autocomplete="off" placeholder="18, 16, 14"></div>
      <div><label class="label" for="us-right">Folikuly vpravo (mm)</label>
        <input class="field" id="us-right" autocomplete="off" placeholder="17, 12"></div>
    </div>
    <div class="formrow" style="margin-top:1rem">
      <label class="label" for="us-note">Poznámka</label>
      <textarea class="field" id="us-note" rows="2" placeholder="Co vám lékař řekl, třeba kdy máte přijít na další kontrolu."></textarea>
    </div>
    <button class="btn btn-primary" data-act="us-add" style="margin-top:1.2rem">Uložit ultrazvuk</button>
  </section>`
}

/** Vývoj folikulů a sliznice. Obě řady sdílejí osu, proto je to v popisce. */
function ultrasoundChart(scans: UltrasoundRow[]): string {
  if (scans.length < 2) return ''
  const nums = scans.map(scanNumbers)
  const endo = scans.map((u) => (u.endometrium !== null && Number.isFinite(u.endometrium) && u.endometrium > 0 ? u.endometrium : null))
  const pool = [
    ...nums.map((n) => n.count),
    ...nums.map((n) => n.biggest ?? 0),
    ...endo.map((v) => v ?? 0),
  ]
  const yMax = Math.max(4, Math.ceil((Math.max(...pool) + 2) / 2) * 2)

  const series = [
    { name: 'Folikuly (počet)', color: 'var(--s2)', data: nums.map((n) => n.count) },
    { name: 'Největší folikul (mm)', color: 'var(--s1)', data: nums.map((n) => n.biggest) },
    { name: 'Sliznice (mm)', color: 'var(--s4)', data: endo },
  ]

  return `<section class="surface pad rise" style="margin-top:1rem">
    ${sectionHead('Vývoj v čase')}
    ${chart({ series, labels: scans.map((u) => formatCzechDateShort(u.date)), yMin: 0, yMax, yTicks: 4 }, 'Vývoj folikulů a sliznice v čase')}
    ${seriesKey(series)}
    <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.55">
      Všechny tři řady sdílejí jednu osu: počet folikulů se čte jako kusy, zbytek v milimetrech.
      Graf jen překresluje vaše zápisy. Neříká, jestli je vývoj takový, jaký má být.
    </p>
  </section>`
}

function ultrasoundList(scans: UltrasoundRow[]): string {
  return `<section class="surface pad rise" style="margin-top:1rem">
    ${sectionHead('Zapsané ultrazvuky')}
    <p class="faint" style="margin-top:.2rem;font-size:.75rem">Od nejnovější kontroly. Nic se nedopočítává.</p>
    <ul class="linelist" style="margin-top:1.1rem">
      ${scans
        .map((u) => {
          const n = scanNumbers(u)
          const cd = cycleDayOf(u.date, u.cycleId)
          const headline = join([
            n.count > 0 ? `vlevo ${n.left.length} · vpravo ${n.right.length}` : 'bez zapsaných folikulů',
            n.biggest !== null && `největší ${czNum(n.biggest, 1)} mm`,
            u.endometrium !== null && Number.isFinite(u.endometrium) && `sliznice ${czNum(u.endometrium, 1)} mm`,
          ])
          const detail = join([
            n.left.length > 0 && `Vlevo: ${n.left.map((v) => czNum(v, 1)).join(', ')} mm`,
            n.right.length > 0 && `Vpravo: ${n.right.map((v) => czNum(v, 1)).join(', ')} mm`,
          ])
          return `<li>
            <span class="when">${esc(formatCzechDateShort(u.date))}${cd !== null ? `<br>${cd}. den cyklu` : ''}</span>
            <span style="min-width:0;flex:1">
              <b class="num" style="font-weight:500">${esc(headline)}</b>
              ${detail ? `<span class="faint" style="display:block;font-size:.8125rem;line-height:1.5;margin-top:.2rem">${esc(detail)}</span>` : ''}
              ${u.note ? `<span class="soft" style="display:block;font-size:.8125rem;line-height:1.5;margin-top:.25rem">${esc(u.note)}</span>` : ''}
              ${photoStrip(`uz:${u.id}`, u.photos, 'Výtisk z ultrazvuku')}
            </span>
            <button class="btn btn-ghost btn-sm" data-act="us-del" data-arg="${esc(u.id)}"
                    aria-label="Smazat ultrazvuk ze dne ${esc(formatCzechDateShort(u.date))}">×</button>
          </li>`
        })
        .join('')}
    </ul>
  </section>`
}

function paneUltrazvuk(): string {
  const scans = [...S.d.ultrasounds].sort((a, b) => a.date.localeCompare(b.date))
  // Graf potřebuje čas zleva doprava, seznam naopak nejnovější nahoře.
  // stejně jako měření a jako časová osa.
  const newestFirst = [...scans].reverse()
  const last = scans[scans.length - 1]
  const lastNumbers = last ? scanNumbers(last) : null
  // Bez běžícího cyklu by odkaz na detail cyklu skončil na prázdné obrazovce,
  // takže prázdný stav vede tam, kde se dá termín kontroly aspoň zapsat.
  const running = currentCycle()

  const overview =
    scans.length === 0
      ? empty(
          'Zatím žádný ultrazvuk',
          'Po kontrole zapište, co vám lékař řekl. Velikosti folikulů a výšku sliznice. Formulář je hned pod tímhle textem a po druhém zápisu se objeví i graf vývoje.',
          running
            ? `<button class="btn" data-go="cyklus/${esc(running.id)}">Otevřít cyklus</button>`
            : '<button class="btn" data-go="kalendar">Zapsat termín kontroly</button>',
          '◍',
        )
      : statTrio([
          { icon: '◍', value: scans.length, label: 'kontroly celkem' },
          { icon: '◉', value: lastNumbers ? lastNumbers.count : '–', label: 'folikuly naposled' },
          {
            icon: '◈',
            value: last && last.endometrium !== null ? `${czNum(last.endometrium, 1)} mm` : '–',
            label: 'sliznice naposled',
          },
        ])

  return [
    overview,
    ultrasoundForm(),
    ultrasoundChart(scans),
    scans.length ? ultrasoundList(newestFirst) : '',
    note(NO_DIAGNOSIS),
  ].join('')
}

// -------------------------------------------------------------- laboratoř ---

interface LabSeries {
  key: string
  name: string
  unit: string
  count: number
  lastValue: number
  lastOn: string
}

function labSeries(): LabSeries[] {
  const byKey = new Map<string, LabSeries>()
  for (const l of [...S.d.labs].sort((a, b) => a.onDate.localeCompare(b.onDate))) {
    const param = LAB_BY_KEY[l.paramKey]
    const cur = byKey.get(l.paramKey)
    if (cur) {
      cur.count++
      cur.lastValue = l.value
      cur.lastOn = l.onDate
    } else {
      byKey.set(l.paramKey, {
        key: l.paramKey,
        name: param?.name ?? l.paramKey,
        unit: param?.unit ?? l.unit,
        count: 1,
        lastValue: l.value,
        lastOn: l.onDate,
      })
    }
  }
  return [...byKey.values()].sort((a, b) => b.lastOn.localeCompare(a.lastOn) || a.name.localeCompare(b.name, 'cs'))
}

function paneLaborator(): string {
  const list = labSeries()
  const total = S.d.labs.length
  const last = list[0]

  const entries = `<div class="rise">
    ${sectionHead('Kde se hodnoty zadávají')}
    ${actionCard({
      icon: '◉',
      title: 'Otevřít Laboratoř',
      body: 'Zadání hodnoty, graf vývoje a u každého parametru i to, co v těle dělá',
      go: 'zdravi',
    })}
    ${actionCard({
      icon: '▤',
      title: 'Vložit lékařskou zprávu',
      body: 'Vložíte text zprávy a hodnoty z něj vybereme',
      go: 'dokumenty',
    })}
  </div>`

  if (list.length === 0) {
    return [
      empty(
        'Zatím žádné laboratorní hodnoty',
        'Hormony a výsledky odběrů mají vlastní obrazovku. Je v ní graf i vysvětlení, co který parametr v těle dělá.',
        '<button class="btn btn-primary" data-go="zdravi">Přidat první hodnotu</button>',
        '◉',
      ),
      entries,
      note(NO_DIAGNOSIS),
    ].join('')
  }

  return [
    statTrio([
      { icon: '◉', value: list.length, label: 'sledované parametry' },
      { icon: '◈', value: total, label: 'zapsané hodnoty' },
      { icon: '◷', value: last ? formatCzechDateShort(last.lastOn) : '–', label: 'poslední odběr' },
    ]),

    `<section class="rise" style="margin-top:1.4rem">
      ${sectionHead('Poslední hodnoty')}
      <div class="stack" style="gap:.75rem;margin-top:.6rem">
        ${list
          .slice(0, 8)
          .map((s) =>
            tile(
              `hodnota/${s.key}`,
              '◉',
              s.name,
              join([
                `${czNum(s.lastValue, 2)} ${s.unit}`.trim(),
                formatCzechDate(s.lastOn, { year: false }),
                plural(s.count, 'hodnota', 'hodnoty', 'hodnot'),
              ]),
            ),
          )
          .join('')}
      </div>
      ${
        list.length > 8
          ? `<p class="faint" style="margin-top:.8rem;font-size:.75rem">A ${esc(
              list.length - 8 <= 4 ? 'další' : 'dalších',
            )} ${esc(plural(list.length - 8, 'parametr', 'parametry', 'parametrů'))} v Laboratoři.</p>`
          : ''
      }
    </section>`,

    entries,
    note(NO_DIAGNOSIS),
  ].join('')
}

// ---------------------------------------------------------------- obrazovka ---

const LEDE: Record<ZdravSection, string> = {
  mereni: 'Co si měříte doma. Zůstává to ve vašem zařízení a aplikace to nehodnotí, jen ukazuje vývoj.',
  ultrazvuk: 'Folikuly a sliznice tak, jak vám je při kontrole řekl lékař.',
  laborator: 'Přehled posledních hodnot z odběrů. Podrobnosti i grafy jsou v Laboratoři.',
}

export function screenZdravotni(section: ZdravSection): string {
  const c = currentCycle()
  const status = cycleStatus()
  const measured = S.d.health.length + S.d.ultrasounds.length + S.d.labs.length

  const eyebrow =
    c && status
      ? `${cycleTitle(c)} · ${status.headline}`
      : plural(measured, 'zapsaný údaj', 'zapsané údaje', 'zapsaných údajů')

  const header = `<header class="head rise">
    <p class="eyebrow">${esc(eyebrow)}</p>
    <h1 class="display">Zdravotní data</h1>
    <p class="lede">${esc(LEDE[section])}</p>
    ${segmented(ZDRAV_SECTIONS, section, 'zdrav-sec')}
  </header>`

  const pane =
    section === 'ultrazvuk' ? paneUltrazvuk() : section === 'laborator' ? paneLaborator() : paneMereni()

  return header + pane
}

/** Kam patří který druh měření. Používá se v popiscích a v hlášce po uložení. */
export function measureTitle(kind: string): string {
  return MEASURE_LABEL[kind] ?? 'Měření'
}
