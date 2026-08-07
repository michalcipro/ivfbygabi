import { formatCzechDateShort } from '../lib/domain/dates'
import { cycleTitle } from '../lib/domain/cycle'
import {
  CATEGORIES,
  categoryLabel,
  czk,
  METHOD_LABEL,
  readExpense,
  STATUS_LABEL,
  STATUS_MARK,
  type Expense,
  type FinanceGroup,
  type PaymentMethod,
} from '../lib/domain/finance'
import {
  cycleById,
  cycles,
  expenseById,
  expenses,
  financeByCategory,
  financeByCycle,
  financeByTransfer,
  financeHistory,
  financeSummary,
  financeTotals,
  viewDate,
} from './store'
import { empty, esc, head, note, plural } from './ui'
import { accordion, sectionHead, segmented } from './viz'

/**
 * Moje IVF finance.
 *
 * Jedna položka je jeden náklad a nese si vlastní seznam plateb. Součty se
 * počítají vždycky z nich, nikdy se neukládají, takže se nemůžou rozejít
 * se skutečností. Podrobnosti k modelu jsou v `domain/finance.ts`.
 *
 * Není to účetnictví. Povinné minimum je název a cena, všechno ostatní se
 * dá doplnit později nebo vůbec.
 *
 * ---------------------------------------------------------------- AKCE ------
 * `fin-add`      arg = „cyklus|transfer“ nebo ''  . Přidat výdaj
 * `fin-open`     arg = id výdaje                  . Rozbalit nebo sbalit detail
 * `fin-save`     arg = id výdaje                  . Uložit detail
 * `fin-del`      arg = id výdaje                  . Smazat výdaj
 * `fin-pay-add`  arg = id výdaje                  . Přidat platbu
 * `fin-pay-del`  arg = „výdaj|platba“             . Smazat platbu
 * `fin-sec`      arg = id dílku                   . Přepnout dílek
 */

export const FINANCE_SECTIONS = [
  { id: 'prehled', label: 'Přehled' },
  { id: 'cykly', label: 'Cykly' },
  { id: 'kategorie', label: 'Kategorie' },
  { id: 'historie', label: 'Historie' },
]

export type FinanceSection = 'prehled' | 'cykly' | 'kategorie' | 'historie'

export function isFinanceSection(s: string): s is FinanceSection {
  return s === 'prehled' || s === 'cykly' || s === 'kategorie' || s === 'historie'
}

// ------------------------------------------------------------- pomocníci ---

/**
 * Název měsíce v prvním pádu.
 *
 * `formatCzechDate` dává „6. srpna 2026“, tedy druhý pád, protože patří
 * za číslo dne. Nadpis nad seznamem ale žádné číslo dne nemá a „Srpna 2026“
 * je v něm chyba.
 */
const MESICE = [
  'Leden',
  'Únor',
  'Březen',
  'Duben',
  'Květen',
  'Červen',
  'Červenec',
  'Srpen',
  'Září',
  'Říjen',
  'Listopad',
  'Prosinec',
]

function mesicLabel(iso: string): string {
  const [rok, mesic] = iso.split('-')
  return `${MESICE[Number(mesic) - 1] ?? ''} ${rok}`.trim()
}

function numStr(v: number | null): string {
  return v === null || !Number.isFinite(v) ? '' : String(v)
}

function field(id: string, label: string, value: string, placeholder = '', help?: string): string {
  return `<div><label class="label" for="${esc(id)}">${esc(label)}</label>
    <input class="field" id="${esc(id)}" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off">
    ${help ? `<p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">${esc(help)}</p>` : ''}</div>`
}

function numField(id: string, label: string, value: string, help?: string): string {
  return `<div><label class="label" for="${esc(id)}">${esc(label)}</label>
    <input class="field num" id="${esc(id)}" value="${esc(value)}" inputmode="numeric" placeholder="nevyplněno" autocomplete="off">
    ${help ? `<p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">${esc(help)}</p>` : ''}</div>`
}

function dateField(id: string, label: string, value: string): string {
  return `<div><label class="label" for="${esc(id)}">${esc(label)}</label>
    <input class="field" type="date" id="${esc(id)}" value="${esc(value)}"></div>`
}

function selectField(id: string, label: string, options: [string, string][], value: string): string {
  return `<div><label class="label" for="${esc(id)}">${esc(label)}</label>
    <select class="field" id="${esc(id)}">
      ${options.map(([v, l]) => `<option value="${esc(v)}"${v === value ? ' selected' : ''}>${esc(l)}</option>`).join('')}
    </select></div>`
}

/**
 * Řádek se součty.
 *
 * `compact` vynechá čísla, která už jsou nad ním vysázená velkým písmem.
 * Dvakrát totéž pod sebou nic nepřidá a jenom to prodlouží obrazovku.
 */
function totalsRow(t: ReturnType<typeof financeTotals>, compact = false): string {
  const radky = [
    compact ? '' : ['Celkem', czk(t.cost)],
    t.insurance > 0 ? ['Pojišťovna', czk(t.insurance)] : '',
    t.insurance > 0 ? ['Moje část', czk(t.ownCost)] : '',
    compact ? '' : ['Uhrazeno', czk(t.paid)],
    compact ? '' : ['Zbývá', czk(t.remaining)],
    t.overpaid > 0 ? ['Přeplatek', czk(t.overpaid)] : '',
  ].filter((r): r is [string, string] => Array.isArray(r))

  return `${
    radky.length
      ? `<ul class="linelist" style="margin-top:.7rem">
          ${radky
            .map(
              ([k, v]) =>
                `<li class="money"><span class="when">${esc(k)}</span><span style="flex:1" class="num">${esc(v)}</span></li>`,
            )
            .join('')}
        </ul>`
      : ''
  }
  ${
    t.unknownCount > 0
      ? `<p class="faint" style="margin-top:.7rem;font-size:.8125rem;line-height:1.5">
          ${
            t.unknownCount === 1
              ? 'Jedna položka nemá zapsanou cenu'
              : `${esc(plural(t.unknownCount, 'položka nemá', 'položky nemají', 'položek nemá'))} zapsanou cenu`
          }, takže součet zatím není úplný.
        </p>`
      : ''
  }`
}

// ------------------------------------------------------ detail položky ---

function paymentRow(e: Expense, p: Expense['payments'][number]): string {
  return `<li class="money">
    <span class="when">${esc(formatCzechDateShort(p.onDate))}</span>
    <span style="flex:1;min-width:0" class="num">${esc(czk(p.amount))}
      <span class="faint" style="font-size:.75rem">${esc(METHOD_LABEL[p.method])}${p.note.trim() ? ` · ${esc(p.note)}` : ''}</span></span>
    <button class="btn btn-ghost btn-sm" data-act="fin-pay-del" data-arg="${esc(`${e.id}|${p.id}`)}">×</button>
  </li>`
}

function expenseDetail(e: Expense): string {
  const v = readExpense(e)
  const cykly: [string, string][] = [
    ['', 'Mimo cyklus'],
    ...cycles().map((c) => [c.id, cycleTitle(c)] as [string, string]),
  ]
  const c = e.cycleId ? cycleById(e.cycleId) : null
  const poradi = c ? [...c.transfers].sort((a, b) => (a.date ?? '').localeCompare(b.date ?? '')) : []
  const transfery: [string, string][] = [
    ['', 'K cyklu jako celku'],
    ...poradi.map((t) => {
      const druh = poradi.filter((x) => x.kind === t.kind)
      const i = druh.findIndex((x) => x.id === t.id) + 1
      const nazev = `${t.kind === 'kryo' ? 'KET' : 'ET'}${druh.length > 1 ? ` #${i}` : ''}`
      return [t.id, `${nazev}${t.date ? ` · ${formatCzechDateShort(t.date)}` : ''}`] as [string, string]
    }),
  ]

  const k = (f: string) => `fin-${e.id}-${f}`

  return `<div style="margin-top:1.1rem">
    <div class="two">
      ${field(k('title'), 'Název', e.title, 'např. PGT-A')}
      ${selectField(k('category'), 'Kategorie', [...CATEGORIES.map((x) => [x.id, x.label] as [string, string]), [e.category && !CATEGORIES.some((x) => x.id === e.category) ? e.category : '__vlastni', e.category && !CATEGORIES.some((x) => x.id === e.category) ? e.category : 'Vlastní kategorie…']], e.category)}
    </div>
    <div style="margin-top:1.1rem">
      ${field(k('customCategory'), 'Vlastní kategorie', CATEGORIES.some((x) => x.id === e.category) ? '' : e.category, 'např. parkování u kliniky', 'Vyplňte, jen když vám žádná kategorie výš nesedí.')}
    </div>

    <div class="two" style="margin-top:1.1rem">
      ${numField(k('planned'), 'Plánovaná cena (Kč)', numStr(e.planned))}
      ${numField(k('actual'), 'Skutečná cena (Kč)', numStr(e.actual), 'Když je vyplněná, počítá se z ní.')}
    </div>
    <div style="margin-top:1.1rem">
      <label class="row" style="gap:.6rem;align-items:flex-start;cursor:pointer">
        <input type="checkbox" id="${esc(k('priceUnknown'))}"${e.priceUnknown ? ' checked' : ''} style="margin-top:.2rem;flex:none">
        <span style="min-width:0;font-size:.9375rem;line-height:1.5">Cenu zatím neznám</span>
      </label>
      <p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">
        Taková položka se do součtů nezapočítá, dokud cenu nedoplníte. Nula by lhala.
      </p>
    </div>

    <div class="two" style="margin-top:1.1rem">
      ${numField(k('insurance'), 'Z toho hradí pojišťovna (Kč)', numStr(e.insurance), 'Informativní. Co se hradí, určuje vaše pojišťovna a klinika.')}
      ${dateField(k('onDate'), 'Datum', e.onDate ?? '')}
    </div>

    <div class="two" style="margin-top:1.1rem">
      ${selectField(k('cycleId'), 'Cyklus', cykly, e.cycleId ?? '')}
      ${selectField(k('transferId'), 'Transfer', transfery, e.transferId ?? '')}
    </div>

    <div style="margin-top:1.1rem">
      ${field(k('note'), 'Poznámka', e.note, 'co v ceně je a co ne')}
    </div>

    <p class="label" style="margin-top:1.6rem">Platby</p>
    ${
      e.payments.length
        ? `<ul class="linelist" style="margin-top:.6rem">${[...e.payments]
            .sort((a, b) => a.onDate.localeCompare(b.onDate))
            .map((p) => paymentRow(e, p))
            .join('')}</ul>`
        : `<p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.5">
            Zatím žádná platba. Přidejte ji, až něco zaplatíte. Klidně po částech.
          </p>`
    }
    <button class="btn btn-sm" data-act="fin-pay-add" data-arg="${esc(e.id)}" style="margin-top:.9rem">
      + Přidat platbu
    </button>

    ${
      e.payments.length
        ? `<p class="label" style="margin-top:1.6rem">Upravit platby</p>
           <div class="stack" style="gap:1rem;margin-top:.7rem">
             ${[...e.payments]
               .sort((a, b) => a.onDate.localeCompare(b.onDate))
               .map(
                 (p) => `<div class="subcard">
                   <div class="two">
                     ${numField(`fin-pay-${p.id}-amount`, 'Částka (Kč)', numStr(p.amount))}
                     ${dateField(`fin-pay-${p.id}-onDate`, 'Datum', p.onDate)}
                   </div>
                   <div class="two" style="margin-top:1.1rem">
                     ${selectField(`fin-pay-${p.id}-method`, 'Způsob platby', Object.entries(METHOD_LABEL) as [string, string][], p.method)}
                     ${field(`fin-pay-${p.id}-note`, 'Poznámka', p.note, 'faktura, záloha…')}
                   </div>
                 </div>`,
               )
               .join('')}
           </div>`
        : ''
    }

    <div class="reading cool" style="margin-top:1.5rem">
      <p class="label">Souhrn položky</p>
      <ul class="linelist" style="margin-top:.5rem">
        <li class="money"><span class="when">Cena</span><span style="flex:1" class="num">${esc(czk(v.cost))}</span></li>
        ${v.insurance > 0 ? `<li class="money"><span class="when">Moje část</span><span style="flex:1" class="num">${esc(czk(v.ownCost))}</span></li>` : ''}
        <li class="money"><span class="when">Uhrazeno</span><span style="flex:1" class="num">${esc(czk(v.paid))}</span></li>
        <li class="money"><span class="when">Zbývá</span><span style="flex:1" class="num">${esc(czk(v.remaining))}</span></li>
      </ul>
      <p class="soft" style="margin-top:.7rem;font-size:.9375rem">
        ${esc(STATUS_MARK[v.status])} ${esc(STATUS_LABEL[v.status])}
        ${v.overpaid > 0 ? ` · o ${esc(czk(v.overpaid))} víc` : ''}
      </p>
    </div>

    <div class="row wrap" style="gap:.6rem;margin-top:1.4rem">
      <button class="btn btn-primary" data-act="fin-save" data-arg="${esc(e.id)}">Uložit výdaj</button>
      <button class="btn btn-ghost btn-sm" data-act="fin-del" data-arg="${esc(e.id)}">Smazat</button>
    </div>
  </div>`
}

function expenseCard(e: Expense, open: boolean): string {
  const v = readExpense(e)
  const podnadpis = [
    categoryLabel(e.category),
    e.onDate ? formatCzechDateShort(e.onDate) : '',
    e.payments.length ? plural(e.payments.length, 'platba', 'platby', 'plateb') : '',
  ]
    .filter(Boolean)
    .join(' · ')

  return `<section class="surface pad rise">
    <div class="row wrap" style="justify-content:space-between;gap:.6rem;align-items:baseline">
      <div style="min-width:0">
        <p class="eyebrow">${esc(STATUS_MARK[v.status])} ${esc(STATUS_LABEL[v.status])}</p>
        <h3 class="display" style="font-size:1.15rem;margin-top:.25rem">${esc(e.title.trim() || 'Bez názvu')}</h3>
        <p class="faint" style="margin-top:.3rem;font-size:.8125rem">${esc(podnadpis)}</p>
      </div>
      <div style="text-align:right;flex:none">
        <p class="display num" style="font-size:1.15rem">${esc(czk(v.cost))}</p>
        ${v.remaining > 0 ? `<p class="faint num" style="font-size:.75rem">zbývá ${esc(czk(v.remaining))}</p>` : ''}
      </div>
    </div>
    <button class="btn btn-ghost btn-sm" data-act="fin-open" data-arg="${esc(e.id)}" style="margin-top:.9rem">
      ${open ? 'Sbalit' : 'Upravit a zapsat platby'}
    </button>
    ${open ? expenseDetail(e) : ''}
  </section>`
}

// -------------------------------------------------------------- přehled ---

function panePrehled(openId: string | null): string {
  const s = financeSummary()
  const vsechny = expenses()

  if (vsechny.length === 0) {
    return [
      empty(
        'Zatím tu žádný výdaj není',
        'Zapisujte si, co za léčbu platíte. Jedna položka je jeden náklad a můžete k ní přidat tolik plateb, kolik jich bylo. Součty si aplikace spočítá sama.',
        '<button class="btn btn-primary" data-act="fin-add" data-arg="">Přidat první výdaj</button>',
        '◇',
      ),
      note(
        'Ceny se mezi klinikami liší a mění se v čase. Aplikace žádnou cenu nenavrhuje ani neověřuje. Zapisujete to, co jste opravdu zaplatila.',
      ),
    ].join('')
  }

  return [
    // Částky se do trojice dlaždic nevejdou. „210 000 Kč“ je v třetině
    // mobilní obrazovky delší než dostupné místo a rozbilo by to řádek.
    `<section class="surface pad rise">
      <p class="eyebrow">Celkem za moji IVF cestu</p>
      <p class="display" style="font-size:2.1rem;margin-top:.5rem;line-height:1.1">${esc(czk(s.totals.cost))}</p>
      <div class="two" style="margin-top:1.3rem">
        <div>
          <p class="label">Uhrazeno</p>
          <p class="display num" style="font-size:1.25rem;margin-top:.2rem">${esc(czk(s.totals.paid))}</p>
        </div>
        <div>
          <p class="label">Zbývá</p>
          <p class="display num" style="font-size:1.25rem;margin-top:.2rem">${esc(czk(s.totals.remaining))}</p>
        </div>
      </div>
      ${totalsRow(s.totals, true)}
      ${
        s.totals.planned > 0
          ? `<p class="faint" style="margin-top:.7rem;font-size:.8125rem;line-height:1.5">
              Z toho ${esc(czk(s.totals.planned))} je zatím jen plánovaná cena.
            </p>`
          : ''
      }
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Moje cesta v číslech</p>
      <ul class="linelist" style="margin-top:.7rem">
        <li class="money"><span class="when">Cyklů</span><span style="flex:1" class="num">${s.cycles}</span></li>
        <li class="money"><span class="when">Transferů</span><span style="flex:1" class="num">${s.transfers}</span></li>
        <li class="money"><span class="when">Z toho KET</span><span style="flex:1" class="num">${s.kets}</span></li>
        ${
          s.avgPerCycle !== null
            ? `<li class="money"><span class="when">Průměrně na cyklus</span><span style="flex:1" class="num">${esc(czk(s.avgPerCycle))}</span></li>`
            : ''
        }
      </ul>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.5">
        Počítá se jen z toho, co máte zapsané. Cyklus, ke kterému jste zatím žádný
        výdaj nepřidala, průměr nestahuje.
      </p>
    </section>`,

    `<div class="rise">
      ${sectionHead(plural(vsechny.length, 'výdaj', 'výdaje', 'výdajů'), {
        label: 'Přidat výdaj',
        act: 'fin-add',
      })}
      ${vsechny.map((e) => expenseCard(e, openId === e.id)).join('')}
    </div>`,

    note(
      'Údaj o úhradě pojišťovnou je jen vaše poznámka. Co a kolik se hradí, záleží na vaší situaci, na pojišťovně a na klinice. Aplikace to neurčuje a neověřuje.',
    ),
  ].join('')
}

// ---------------------------------------------------------------- cykly ---

function groupCard(g: FinanceGroup, detail: string): string {
  return `<section class="surface pad rise">
    <div class="row wrap" style="justify-content:space-between;gap:.6rem;align-items:baseline">
      <h3 class="display" style="font-size:1.15rem">${esc(g.label)}</h3>
      <p class="display num" style="font-size:1.15rem">${esc(czk(g.totals.cost))}</p>
    </div>
    ${totalsRow(g.totals)}
    ${detail}
  </section>`
}

function paneCykly(): string {
  const skupiny = financeByCycle()
  if (skupiny.length === 0) {
    return empty(
      'Zatím není co rozdělit',
      'Až budete mít výdaje přiřazené k cyklům, uvidíte tady, kolik stál každý z nich zvlášť.',
      '<button class="btn" data-act="fin-add" data-arg="">Přidat výdaj</button>',
      '✧',
    )
  }

  return [
    skupiny
      .map((g) => {
        const podle = g.key ? financeByTransfer(g.key) : []
        const detail = podle.length
          ? `<p class="label" style="margin-top:1.3rem">Podle transferu</p>
             <ul class="linelist" style="margin-top:.5rem">
               ${podle
                 .map(
                   (t) => `<li class="money">
                     <span class="when">${esc(t.label)}</span>
                     <span style="flex:1" class="num">${esc(czk(t.totals.cost))}</span>
                     ${t.totals.remaining > 0 ? `<span class="faint num" style="font-size:.75rem">zbývá ${esc(czk(t.totals.remaining))}</span>` : ''}
                   </li>`,
                 )
                 .join('')}
             </ul>`
          : ''
        const tlacitko = g.key
          ? `<button class="btn btn-sm" data-act="fin-add" data-arg="${esc(g.key)}" style="margin-top:1.1rem">Přidat výdaj k tomuhle cyklu</button>`
          : ''
        return groupCard(g, detail + tlacitko)
      })
      .join(''),
    note('Výdaj, který k žádnému transferu nepatří, se počítá cyklu jako celku.'),
  ].join('')
}

// ------------------------------------------------------------ kategorie ---

function paneKategorie(): string {
  const skupiny = financeByCategory()
  if (skupiny.length === 0) {
    return empty(
      'Zatím žádné kategorie',
      'Kategorie se objeví samy, jakmile budete mít zapsané výdaje.',
      '<button class="btn" data-act="fin-add" data-arg="">Přidat výdaj</button>',
      '◈',
    )
  }
  return [
    `<div class="rise">
      ${sectionHead('Kam peníze jdou')}
      ${skupiny
        .map((g) =>
          accordion(
            `fin-cat-${g.key}`,
            g.label,
            `${czk(g.totals.cost)}${g.totals.remaining > 0 ? ` · zbývá ${czk(g.totals.remaining)}` : ''}`,
            false,
            `<ul class="linelist">
              ${g.items
                .map((e) => {
                  const v = readExpense(e)
                  return `<li class="money">
                    <span class="when">${esc(STATUS_MARK[v.status])}</span>
                    <span style="flex:1;min-width:0">${esc(e.title.trim() || 'Bez názvu')}</span>
                    <span class="num">${esc(czk(v.cost))}</span>
                  </li>`
                })
                .join('')}
            </ul>`,
          ),
        )
        .join('')}
    </div>`,
    note('Aplikace nehodnotí, jestli je něco drahé. Ukazuje jen, co jste zapsala.'),
  ].join('')
}

// -------------------------------------------------------------- historie ---

function paneHistorie(): string {
  const rows = financeHistory()
  if (rows.length === 0) {
    return empty(
      'Zatím žádná platba',
      'Historie se naplní sama, jakmile začnete platby zapisovat. Uvidíte je po měsících, od té nejnovější.',
      '<button class="btn" data-act="fin-add" data-arg="">Přidat výdaj</button>',
      '▤',
    )
  }

  const mesice = new Map<string, typeof rows>()
  for (const r of rows) {
    const klic = r.payment.onDate.slice(0, 7)
    const list = mesice.get(klic)
    if (list) list.push(r)
    else mesice.set(klic, [r])
  }

  return [
    `<div class="rise">
      ${sectionHead(plural(rows.length, 'zapsaná platba', 'zapsané platby', 'zapsaných plateb'))}
      ${[...mesice.entries()]
        .map(([mesic, list]) => {
          const soucet = list.reduce((s, r) => s + Math.max(0, r.payment.amount), 0)
          return `<section class="surface pad" style="margin-top:1rem">
            <div class="row wrap" style="justify-content:space-between;gap:.6rem;align-items:baseline">
              <p class="eyebrow">${esc(mesicLabel(mesic))}</p>
              <p class="num" style="font-weight:500">${esc(czk(soucet))}</p>
            </div>
            <ul class="linelist" style="margin-top:.7rem">
              ${list
                .map(
                  (r) => `<li class="money">
                    <span class="when">${esc(formatCzechDateShort(r.payment.onDate))}</span>
                    <span style="flex:1;min-width:0">${esc(r.expenseTitle.trim() || 'Bez názvu')}
                      <span class="faint" style="font-size:.75rem">${esc(categoryLabel(r.category))} · ${esc(METHOD_LABEL[r.payment.method as PaymentMethod])}</span></span>
                    <span class="num">${esc(czk(r.payment.amount))}</span>
                  </li>`,
                )
                .join('')}
            </ul>
          </section>`
        })
        .join('')}
    </div>`,
    note('Historie ukazuje jednotlivé platby, ne položky. Jedna položka jich může mít víc.'),
  ].join('')
}

// =============================================================== hlavní ===

export function screenFinance(section: FinanceSection, openId?: string | null): string {
  const s = financeSummary()

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(
        s.totals.count === 0
          ? 'Zatím bez záznamu'
          : `${czk(s.totals.paid)} uhrazeno${s.totals.remaining > 0 ? ` · ${czk(s.totals.remaining)} zbývá` : ''}`,
      )}</p>
      <h1 class="display">Moje IVF finance</h1>
      <p class="lede">Kolik vás cesta zatím stála, kolik už je zaplaceno a co ještě čeká.</p>
      ${segmented(FINANCE_SECTIONS, section, 'fin-sec')}
    </header>`,

    section === 'cykly'
      ? paneCykly()
      : section === 'kategorie'
        ? paneKategorie()
        : section === 'historie'
          ? paneHistorie()
          : panePrehled(openId ?? null),
  ].join('')
}
