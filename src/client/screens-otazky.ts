import { addDays, czDays, daysBetween, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import { SYMPTOM_BY_ID } from '../lib/domain/symptoms'
import { adherence } from '../lib/domain/cycle-stats'
import { buildSummary, type VisitSummary } from '../lib/domain/visit-summary'
import { questionGroupsFor } from '../lib/domain/question-bank'
import { EVENT_KINDS } from '../lib/shared/records'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import {
  allEvents,
  currentCycle,
  cycleStatus,
  eventState,
  journey,
  S,
  viewDate,
  type QuestionPriority,
  type QuestionRow,
  type QuestionStatus,
} from './store'
import { empty, esc, note, plural } from './ui'
import { actionCard, sectionHead, segmented, statTrio } from './viz'

/**
 * Otázky pro lékaře.
 *
 * V ordinaci je osm minut a hlava prázdná. Doma pak naskočí všechno, na co se
 * chtěla zeptat — a je pozdě. Tahle obrazovka existuje proto, aby se otázka
 * zapsala ve chvíli, kdy vznikne, a v ordinaci se dala přečíst z telefonu.
 *
 * Tři části pod přepínačem: Čeká (co se má zeptat), Vyřešeno (co už zaznělo
 * i s odpovědí) a Archiv (co je pryč, ale nemá se mazat).
 *
 * Aplikace na otázky neodpovídá, odpovědi nehodnotí a nic z nich nevyvozuje.
 * Jsou to poznámky uživatelky. Návrhy otázek dole vznikají deterministicky
 * z jejích vlastních zápisů (`buildSummary` z visit-summary.ts) — nejsou to
 * rady a nenahrazují lékaře.
 *
 * ---------------------------------------------------------------- AKCE ------
 * `q-add`     arg prázdný  — přidat otázku z formuláře nahoře (viz POLE)
 *             arg = text   — přidat rovnou navrženou otázku (tlačítka
 *                            „Přidat“ v sekci Návrhy z vašich dat).
 *                            Priorita `stredni`, kategorie `Jiné`,
 *                            `forDate` = null, status `ceka`.
 * `q-answer`  arg = id otázky — uložit odpověď z pole `q-ans-{id}`
 * `q-status`  arg = `{id}:{stav}` — přepnout stav; stav je `ceka`,
 *                            `vyreseno` nebo `archiv`
 * `q-del`     arg = id otázky — smazat otázku (nevratné, potvrzení na main.ts)
 * `q-copy`    arg = ISO datum kontroly, nebo `vse` — zkopírovat seznam otázek
 *                            jako text; text sestaví `otazkyCopyText(arg)`
 * `acc`       arg = id otázky — rozbalit/sbalit kartu otázky
 * `otazky-sec` arg = id dílku — přepínač v hlavičce (Čeká / Vyřešeno / Archiv)
 *
 * -------------------------------------------------------------- ROUTOVÁNÍ ---
 * Doporučené zapojení v `screenFor` a v `action`:
 *
 *     case 'otazky':
 *       return screenOtazky(isOtazkySection(a) ? a : 'ceka', view.accordion)
 *
 *     case 'otazky-sec':
 *       go(`otazky/${argValue}`)
 *       return
 *
 * Druhý parametr je `view.accordion` — otevřená je vždycky nejvýš jedna karta.
 *
 * --------------------------------------------------------------- POLE -------
 * Formulář nahoře (dílek „Čeká“):
 *   textarea  `q-text`   — znění otázky; prázdné = nic se nepřidává
 *   radio     name `q-prio` — `vysoka` | `stredni` | `nizka`, výchozí `stredni`
 *   radio     name `q-cat`  — jedna z KATEGORIÍ níž, výchozí `Jiné`
 *   select    `q-for`    — ISO datum kontroly, prázdná hodnota = bez termínu
 *   textarea  `q-ans-{id}` — odpověď lékaře u rozbalené otázky
 *
 * Chipy jsou nativní radia se `<label>`, takže nepotřebují vlastní akci ani
 * stav v main.ts. Vyzvednutí při `q-add`:
 *
 *     const prio = document.querySelector<HTMLInputElement>('input[name="q-prio"]:checked')?.value
 *     const cat  = document.querySelector<HTMLInputElement>('input[name="q-cat"]:checked')?.value
 *
 * Nová otázka vzniká vždycky ve stavu `ceka` a s `createdOn = viewDate()`.
 *
 * ---------------------------------------------------------------- CSS -------
 * Jediná nová třída je `.chipset` — chipy postavené na radiu místo tlačítka.
 * Vypadá stejně jako `.chips button`, jen si stav drží prohlížeč:
 *
 *   .chipset { display: flex; gap: .45rem; flex-wrap: wrap; }
 *   .chipset input { position: absolute; opacity: 0; pointer-events: none; }
 *   .chipset label {
 *     border-radius: 99px; border: 1px solid var(--line); background: var(--card);
 *     padding: .4rem .9rem; font-size: .8125rem; color: var(--fg-soft);
 *     cursor: pointer; transition: all .3s var(--calm);
 *   }
 *   .chipset label:hover { border-color: var(--sand); }
 *   .chipset input:checked + label { background: var(--fg); color: var(--page); border-color: transparent; }
 *   .chipset input:focus-visible + label { outline: 2px solid var(--taupe); outline-offset: 2px; }
 *
 * Zbytek je z app.css: `.surface .pad .rise .head .eyebrow .display .lede
 * .field .label .formrow .btn .btn-primary .btn-ghost .btn-sm .row .wrap
 * .acc .acchead .accbody .prio .linelist .reading .note .empty .trio`.
 */

// -------------------------------------------------------------- číselníky ---

/**
 * Nejdelší období, ze kterého se skládají návrhy otázek.
 *
 * Když poslední kontrola proběhla před rokem, není důvod tahat do ordinace
 * data ze zimy — a `buildSummary` ani `adherence()` nemají projíždět rok dat
 * kvůli pěti větám.
 */
const MAX_WINDOW_DAYS = 60

/** „a, b a c“ — česká výčtová spojka, ne čárka na konci. */
function joinCz(items: string[]): string {
  if (items.length === 0) return ''
  if (items.length === 1) return items[0]
  return `${items.slice(0, -1).join(', ')} a ${items[items.length - 1]}`
}

/** Název příznaku — z katalogu, nebo z vlastních, které si uživatelka přidala. */
function symptomLabel(id: string): string {
  return SYMPTOM_BY_ID[id]?.label ?? S.d.customSymptoms.find((x) => x.id === id)?.label ?? id
}

/**
 * „za poslední den“, „za poslední 3 dny“, „za posledních 14 dní“.
 * `czDays` skloňuje jen podstatné jméno, přívlastek si musí poradit sám.
 */
function lastDaysPhrase(n: number): string {
  return `${n >= 1 && n <= 4 ? 'poslední' : 'posledních'} ${czDays(n)}`
}

export const OTAZKY_SECTIONS = [
  { id: 'ceka', label: 'Čeká' },
  { id: 'vyreseno', label: 'Vyřešeno' },
  { id: 'archiv', label: 'Archiv' },
]

export type OtazkySection = 'ceka' | 'vyreseno' | 'archiv'

export function isOtazkySection(s: string): s is OtazkySection {
  return OTAZKY_SECTIONS.some((x) => x.id === s)
}

/** Kategorie otázek. Osm stačí — víc už se v ordinaci nedá projít. */
const CATEGORIES = [
  'Protokol',
  'Léky',
  'Výsledky',
  'Zákrok',
  'Embrya',
  'Psychika',
  'Peníze',
  'Jiné',
]

const PRIORITIES: { id: QuestionPriority; label: string }[] = [
  { id: 'vysoka', label: 'Vysoká' },
  { id: 'stredni', label: 'Střední' },
  { id: 'nizka', label: 'Nízká' },
]

const PRIO_LABEL: Record<QuestionPriority, string> = {
  vysoka: 'Vysoká',
  stredni: 'Střední',
  nizka: 'Nízká',
}

/** Pořadí pro řazení. Vysoká nahoru — na ni musí zbýt čas. */
const PRIO_RANK: Record<QuestionPriority, number> = { vysoka: 0, stredni: 1, nizka: 2 }

const STATUS_LABEL: Record<QuestionStatus, string> = {
  ceka: 'Čeká',
  vyreseno: 'Vyřešeno',
  archiv: 'Archiv',
}

/** Co se počítá jako návštěva kliniky. Léky a vlastní upomínky ne. */
const VISIT_KINDS = new Set(['kontrola', 'odber', 'transfer', 'uz', 'hcg', 'ockovani', 'porod'])

/** Kolik dní dopředu má smysl na kontrolu upozorňovat. */
const SOON_DAYS = 3

// -------------------------------------------------------------- pomocníci ---

function questions(): QuestionRow[] {
  return S.d.questions ?? []
}

function byStatus(status: QuestionStatus): QuestionRow[] {
  return questions().filter((q) => q.status === status)
}

/** Čekající: nejdřív priorita, pak nejbližší termín, pak stáří zápisu. */
function sortWaiting(rows: QuestionRow[]): QuestionRow[] {
  return [...rows].sort(
    (a, b) =>
      PRIO_RANK[a.priority] - PRIO_RANK[b.priority] ||
      (a.forDate ?? '9999').localeCompare(b.forDate ?? '9999') ||
      a.createdOn.localeCompare(b.createdOn),
  )
}

/** Uzavřené: nejnovější nahoře — hledá se v nich zpětně. */
function sortDone(rows: QuestionRow[]): QuestionRow[] {
  return [...rows].sort((a, b) => b.createdOn.localeCompare(a.createdOn) || a.text.localeCompare(b.text, 'cs'))
}

/** Nadcházející návštěvy kliniky, bez duplicit a v čase. */
function upcomingVisits(): { onDate: string; title: string; kind: string }[] {
  const today = viewDate()
  const seen = new Set<string>()
  const out: { onDate: string; title: string; kind: string }[] = []
  for (const e of allEvents()) {
    if (e.onDate < today || !VISIT_KINDS.has(e.kind)) continue
    // Odškrtnutá kontrola už proběhla. Kdyby tu zůstala, hlavička by
    // svítila „Kontrola dnes“ ještě večer po návratu z kliniky.
    if (eventState(e.id).done) continue
    const key = `${e.onDate}|${e.title}`
    if (seen.has(key)) continue
    seen.add(key)
    out.push({ onDate: e.onDate, title: e.title, kind: e.kind })
  }
  return out.slice(0, 10)
}

/** Nejbližší kontrola do tří dnů, jinak nic. */
function visitSoon(): { onDate: string; title: string; kind: string } | null {
  const today = viewDate()
  const next = upcomingVisits()[0]
  if (!next) return null
  return daysBetween(today, next.onDate) <= SOON_DAYS ? next : null
}

/**
 * Otázky, se kterými se dá jít na konkrétní kontrolu.
 *
 * Kromě otázek navázaných na to datum sem patří i ty bez termínu — jsou
 * obecné a zeptat se na ně jde kdykoli. Otázky patřící k jinému termínu ne.
 */
function questionsForVisit(date: string): QuestionRow[] {
  return sortWaiting(byStatus('ceka').filter((q) => q.forDate === null || q.forDate === date))
}

function whenLabel(date: string): string {
  const n = daysBetween(viewDate(), date)
  if (n === 0) return 'dnes'
  if (n === 1) return 'zítra'
  if (n < 0) return `před ${czDays(-n)}`
  return `za ${czDays(n)}`
}

// ------------------------------------------------------------ text k tisku ---

/**
 * Seznam otázek jako čistý text — pro schránku i pro tisk.
 *
 * Volá se z main.ts při akci `q-copy` se stejným argumentem, jaký nese
 * tlačítko: ISO datum kontroly, nebo `vse` pro všechny čekající.
 * Nic se nikam neodesílá, text vzniká v prohlížeči.
 */
export function otazkyCopyText(arg: string): string {
  if (arg === 'souhrn') {
    const { summary } = visitSummary()
    return [
      'Přehled pro kontrolu',
      '',
      summary.lede,
      '',
      ...summary.sections.flatMap((s) => [s.title, ...s.lines.map((l) => `– ${l}`), '']),
    ]
      .join('\n')
      .trimEnd()
  }

  const forDate = arg && arg !== 'vse' ? arg : null
  const rows = forDate ? questionsForVisit(forDate) : sortWaiting(byStatus('ceka'))
  const title = forDate ? `Otázky na kontrolu ${formatCzechDate(forDate)}` : 'Otázky pro lékaře'

  if (rows.length === 0) {
    return `${title}\n\nZatím tu žádná otázka není.`
  }

  const lines = rows.map(
    (q, i) =>
      `${i + 1}. ${q.text.trim()} (${PRIO_LABEL[q.priority].toLowerCase()} · ${q.category || 'Jiné'})`,
  )
  return [title, '', ...lines].join('\n')
}

// ---------------------------------------------------------------- formulář ---

function addForm(): string {
  const visits = upcomingVisits()

  const prioChips = PRIORITIES.map(
    (p) => `<input type="radio" name="q-prio" id="q-prio-${esc(p.id)}" value="${esc(p.id)}"${
      p.id === 'stredni' ? ' checked' : ''
    }>
      <label for="q-prio-${esc(p.id)}">${esc(p.label)}</label>`,
  ).join('')

  const catChips = CATEGORIES.map((c, i) => {
    const id = `q-cat-${i}`
    return `<input type="radio" name="q-cat" id="${id}" value="${esc(c)}"${
      c === 'Jiné' ? ' checked' : ''
    }>
      <label for="${id}">${esc(c)}</label>`
  }).join('')

  const options = [
    '<option value="">Bez termínu</option>',
    ...visits.map(
      (v) =>
        `<option value="${esc(v.onDate)}">${esc(formatCzechDateShort(v.onDate))} — ${esc(v.title)}</option>`,
    ),
  ].join('')

  return `<section class="surface pad rise">
    <p class="eyebrow">Nová otázka</p>
    <p class="faint" style="font-size:.8125rem;margin-top:.3rem;line-height:1.55">
      Napište ji tak, jak byste ji řekla nahlas. V ordinaci se pak jenom přečte.
    </p>

    <div class="formrow" style="margin-top:1rem">
      <textarea class="field" id="q-text" rows="3"
        placeholder="Třeba: Proč jsme zvedli dávku a jak dlouho v ní mám pokračovat?"></textarea>
    </div>

    <div class="formrow">
      <p class="label">Jak je to důležité</p>
      <div class="chipset">${prioChips}</div>
    </div>

    <div class="formrow">
      <p class="label">Čeho se týká</p>
      <div class="chipset">${catChips}</div>
    </div>

    <div class="formrow">
      <p class="label">Ke které kontrole</p>
      <select class="field" id="q-for">${options}</select>
      ${
        visits.length === 0
          ? `<p class="faint" style="font-size:.75rem;margin-top:.4rem">
              Zatím nemáte v kalendáři žádnou nadcházející kontrolu. Otázka počká bez termínu —
              nebo si termín <button class="btn btn-ghost btn-sm" data-go="kalendar" style="padding:0;font-size:.75rem">přidejte do kalendáře</button>.
            </p>`
          : ''
      }
    </div>

    <button class="btn btn-primary btn-block" data-act="q-add" style="margin-top:1.25rem">Přidat otázku</button>
  </section>`
}

// ------------------------------------------------------------- karta otázky ---

/**
 * Jedna otázka. Zavřená ukazuje znění, barvu priority a termín; rozbalená
 * přidá odpověď lékaře a přepínání stavu.
 */
function questionCard(q: QuestionRow, open: boolean): string {
  const meta = [
    PRIO_LABEL[q.priority],
    q.category || 'Jiné',
    q.forDate ? `kontrola ${formatCzechDateShort(q.forDate)}` : 'bez termínu',
  ].join(' · ')

  const others = (['ceka', 'vyreseno', 'archiv'] as QuestionStatus[]).filter((s) => s !== q.status)
  const statusLabel: Record<QuestionStatus, string> = {
    ceka: 'Vrátit mezi čekající',
    vyreseno: 'Označit za vyřešenou',
    archiv: 'Přesunout do archivu',
  }

  const body = `<div class="accbody">
    <p class="label" style="margin-top:.2rem">Co na to lékař</p>
    <textarea class="field" id="q-ans-${esc(q.id)}" rows="3"
      placeholder="Zapište, co vám lékař řekl — klidně jen heslovitě.">${esc(q.answer)}</textarea>

    <div class="row wrap" style="gap:.5rem;margin-top:.9rem">
      <button class="btn btn-primary btn-sm" data-act="q-answer" data-arg="${esc(q.id)}">Uložit odpověď</button>
      ${others
        .map(
          (s) =>
            `<button class="btn btn-sm" data-act="q-status" data-arg="${esc(q.id)}:${s}">${esc(statusLabel[s])}</button>`,
        )
        .join('')}
      <button class="btn btn-ghost btn-sm" data-act="q-del" data-arg="${esc(q.id)}"
        style="margin-left:auto">Smazat</button>
    </div>

    <p class="faint" style="font-size:.75rem;margin-top:.8rem;line-height:1.55">
      Zapsáno ${esc(formatCzechDateShort(q.createdOn))} · stav ${esc(STATUS_LABEL[q.status])}${
        q.forDate ? ` · kontrola ${esc(whenLabel(q.forDate))}` : ''
      }
    </p>
  </div>`

  return `<div class="acc${open ? ' open' : ''}">
    <button class="acchead" data-act="acc" data-arg="${esc(q.id)}" aria-expanded="${open}">
      <span class="prio ${esc(q.priority)}" aria-hidden="true"></span>
      <span class="txt">
        <b>${esc(q.text)}</b>
        <span>${esc(meta)}${q.answer.trim() ? ' · odpověď zapsaná' : ''}</span>
      </span>
      <span class="caret">⌄</span>
    </button>
    ${open ? body : ''}
  </div>`
}

function cardList(rows: QuestionRow[], openId: string | null): string {
  return `<div class="rise">${rows.map((q) => questionCard(q, q.id === openId)).join('')}</div>`
}

// ------------------------------------------------------- kontrola za dveřmi ---

/** Karta nad seznamem: kontrola je blízko a tolik otázek na ni čeká. */
function visitCard(): string {
  const visit = visitSoon()
  if (!visit) return ''

  const rows = questionsForVisit(visit.onDate)
  const icon = EVENT_KINDS[visit.kind]?.icon ?? '◈'

  return `<section class="surface pad rise">
    <div class="reading" style="margin-top:0">
      <p class="eyebrow">${esc(icon)} ${esc(EVENT_KINDS[visit.kind]?.label ?? 'Kontrola')} ${esc(whenLabel(visit.onDate))}</p>
      <h2 class="display" style="font-size:1.25rem;margin-top:.45rem;line-height:1.35">
        ${
          rows.length
            ? `Na kontrolu ${esc(formatCzechDate(visit.onDate, { year: false }))} máte ${esc(
                plural(rows.length, 'připravenou otázku', 'připravené otázky', 'připravených otázek'),
              )}`
            : `Na kontrolu ${esc(formatCzechDate(visit.onDate, { year: false }))} zatím žádnou otázku nemáte`
        }
      </h2>
      <p class="soft" style="margin-top:.5rem;font-size:.9375rem;line-height:1.6">
        ${
          rows.length
            ? 'Zkopírujte si je — pak je můžete přečíst z telefonu nebo poslat, komu chcete.'
            : 'Co vás napadne do té doby, zapište do formuláře nahoře. I jedna věta je lepší než spoléhat na hlavu v ordinaci.'
        }
      </p>
      ${
        rows.length
          ? `<div class="row wrap" style="gap:.5rem;margin-top:1rem">
              <button class="btn btn-primary btn-sm" data-act="q-copy" data-arg="${esc(visit.onDate)}">
                Zkopírovat seznam
              </button>
              <button class="btn btn-sm" data-go="kalendar">Otevřít kalendář</button>
            </div>
            <p class="faint" style="font-size:.75rem;margin-top:.6rem">
              Text vznikne ve vašem zařízení a nikam se neodesílá.
            </p>`
          : ''
      }
    </div>
  </section>`
}

// --------------------------------------------------------- návrhy z vašich dat ---

/**
 * Otázky, které plynou z toho, co má uživatelka zapsané.
 *
 * Skládá je `buildSummary` — deterministicky, z uložených dat, bez jakéhokoli
 * odesílání. Nejsou to rady ani doporučení: jsou to věty, které se dají
 * v ordinaci přečíst nahlas. Co z nich je k něčemu, rozhoduje uživatelka.
 */
function visitSummary(): { summary: VisitSummary; from: string; to: string } {
  const today = viewDate()
  const cycle = currentCycle()

  // Období: od poslední proběhlé návštěvy, jinak tři týdny zpátky. Delší okno
  // by do návrhů zatáhlo věci, které už dávno padly — proto je i strop.
  // Bez něj by po roce bez kontroly souhrn projížděl rok dat.
  const floor = addDays(today, -MAX_WINDOW_DAYS + 1)
  const past = allEvents().filter((e) => e.onDate <= today && VISIT_KINDS.has(e.kind))
  const last = past.length ? past[past.length - 1].onDate : addDays(today, -21)
  const from = last < floor ? floor : last

  const labs = S.d.labs.map((l) => ({
    paramKey: l.paramKey,
    value: l.value,
    unit: l.unit,
    onDate: l.onDate,
    name: LAB_BY_KEY[l.paramKey]?.name ?? l.paramKey,
  }))

  const summary = buildSummary({
    from,
    to: today,
    cycle,
    status: cycleStatus(cycle),
    meds: S.d.meds,
    ultrasounds: S.d.ultrasounds,
    labs,
    symptomLogs: S.d.symptomLogs,
    symptomLabel,
    events: allEvents(),
    adherencePct: adherence(S.d.meds, S.d.checks, from, today).pct,
  })

  return { summary, from, to: today }
}

/**
 * Příznaky, u kterých symptoms.ts říká „volejte hned“.
 *
 * Schválně to není návrh otázky na příští kontrolu — odložit dušnost nebo
 * silné krvácení o týden je přesně to, čemu ta varování mají zabránit.
 * Stojí proto nahoře, nad formulářem, a vedou k telefonu, ne k seznamu.
 */
function urgentBlock(summary: VisitSummary): string {
  if (summary.urgentSymptoms.length === 0) return ''
  return `<div class="symwarn rise">
    <strong style="color:var(--fg)">Tohle nepatří na příští kontrolu:</strong>
    zapsala jste ${esc(joinCz(summary.urgentSymptoms))}. Pokud to trvá, zavolejte na kliniku teď —
    nečekejte na termín.
  </div>`
}

/** Návrhy otázek. Co už v seznamu je, se znovu nenabízí — ani ve vyřešených. */
/**
 * Zásobník otázek podle fáze.
 *
 * Návrhy z dat vznikají jen tehdy, když je co odvodit. Tenhle blok je tu
 * vždycky: dvanáct minut v ordinaci se dá utratit i mlčením, když si člověk
 * nevzpomene. Skupina k dnešní fázi stojí první, ostatní jsou pod ní.
 */
function bank(): string {
  const taken = new Set(questions().map((q) => q.text.trim().toLocaleLowerCase('cs')))
  const groups = questionGroupsFor(journey().phase.id)
    .map((g) => ({ ...g, questions: g.questions.filter((t) => !taken.has(t.trim().toLocaleLowerCase('cs'))) }))
    .filter((g) => g.questions.length > 0)
  if (groups.length === 0) return ''

  return `<section class="surface pad rise">
    ${sectionHead('Na co se ženy ptají')}
    <p class="faint" style="font-size:.8125rem;margin-top:-.3rem;line-height:1.55">
      Hotové otázky k odkliknutí. Nejsou to rady, co si máte přát — jsou to věty,
      které se v ordinaci hodí říct nahlas. Nahoře je to, co patří k vaší fázi.
    </p>
    ${groups
      .map(
        (g) => `<div style="margin-top:1.3rem">
          <p class="eyebrow">${esc(g.title)}</p>
          <ul class="linelist" style="margin-top:.6rem">
            ${g.questions
              .map(
                (t) => `<li>
                  <span>${esc(t)}</span>
                  <button class="btn btn-ghost btn-sm" data-act="q-add" data-arg="${esc(t)}"
                    style="margin-left:auto;flex:none">Přidat</button>
                </li>`,
              )
              .join('')}
          </ul>
        </div>`,
      )
      .join('')}
  </section>`
}

function suggestions(summary: VisitSummary, from: string, to: string): string {
  const taken = new Set(questions().map((q) => q.text.trim().toLocaleLowerCase('cs')))
  const fresh = summary.suggestedQuestions.filter((t) => !taken.has(t.trim().toLocaleLowerCase('cs')))
  if (fresh.length === 0) return ''

  return `<section class="surface pad rise">
    ${sectionHead('Návrhy z vašich dat')}
    <p class="faint" style="font-size:.8125rem;margin-top:-.3rem;line-height:1.55">
      Sestavené z toho, co máte zapsané za ${esc(lastDaysPhrase(daysBetween(from, to) + 1))}.
      Nejsou to rady — jen věty, které se hodí říct nahlas.
    </p>
    <ul class="linelist" style="margin-top:.9rem">
      ${fresh
        .slice(0, 5)
        .map(
          (t) => `<li>
            <span>${esc(t)}</span>
            <button class="btn btn-ghost btn-sm" data-act="q-add" data-arg="${esc(t)}"
              style="margin-left:auto;flex:none">Přidat</button>
          </li>`,
        )
        .join('')}
    </ul>
  </section>`
}

/**
 * Přehled pro kontrolu — celý souhrn, ne jen otázky z něj.
 *
 * Vzniká deterministicky z uložených dat, nikam se neodesílá a nic nevykládá.
 * Poslední věta souhrnu je disclaimer; bez téhle sekce by se k uživatelce
 * nikdy nedostal.
 */
function summaryBlock(summary: VisitSummary): string {
  if (summary.sections.length <= 1) return ''
  return `<section class="surface pad rise">
    ${sectionHead('Přehled pro kontrolu')}
    <p class="faint" style="font-size:.8125rem;margin-top:-.3rem;line-height:1.55">${esc(summary.lede)}</p>
    <div style="margin-top:1rem">
      ${summary.sections
        .map(
          (sec) => `<p class="eyebrow" style="margin-top:1rem">${esc(sec.title)}</p>
            <ul class="bullets" style="margin-top:.35rem">
              ${sec.lines.map((l) => `<li>${esc(l)}</li>`).join('')}
            </ul>`,
        )
        .join('')}
    </div>
    <button class="btn btn-sm" data-act="q-copy" data-arg="souhrn" style="margin-top:1.1rem">
      Zkopírovat přehled
    </button>
  </section>`
}

// ------------------------------------------------------------------ dílky ---

function paneCeka(openId: string | null, sum: VisitSummary, from: string, to: string): string {
  const rows = sortWaiting(byStatus('ceka'))

  const list = rows.length
    ? `<div class="rise">
        ${sectionHead(`Čeká · ${plural(rows.length, 'otázka', 'otázky', 'otázek')}`)}
        ${cardList(rows, openId)}
        <button class="btn btn-sm" data-act="q-copy" data-arg="vse" style="margin-top:1rem">
          Zkopírovat všechny čekající
        </button>
      </div>`
    : empty(
        'Zatím tu žádná otázka není',
        'V ordinaci vypadne z hlavy všechno, co jste si chtěla říct — a doma to zase naskočí. Proto se otázky zapisují průběžně: co vás napadne teď, přečtete tam z telefonu.',
        '<button class="btn btn-primary" data-act="q-focus">Napsat první otázku</button>',
        '?',
      )

  return [urgentBlock(sum), addForm(), visitCard(), list, suggestions(sum, from, to), bank(), summaryBlock(sum)].join('')
}

function paneVyreseno(openId: string | null): string {
  const rows = sortDone(byStatus('vyreseno'))
  if (rows.length === 0) {
    return empty(
      'Nic vyřešeného zatím není',
      'Jakmile u otázky zapíšete, co vám lékař odpověděl, a označíte ji za vyřešenou, přesune se sem. Zůstane i s odpovědí — za tři měsíce se hodí vědět, co přesně zaznělo.',
      '<button class="btn btn-primary" data-go="otazky/ceka">Otevřít čekající otázky</button>',
      '✓',
    )
  }

  const answered = rows.filter((q) => q.answer.trim().length > 0).length
  return `<div class="rise">
    ${actionCard({
      icon: '?',
      title: 'Napsat novou otázku',
      body: 'Formulář najdete v záložce Čeká — co vás napadne teď, tam počká do ordinace',
      go: 'otazky/ceka',
    })}
    ${sectionHead(`Vyřešeno · ${plural(rows.length, 'otázka', 'otázky', 'otázek')}`)}
    ${
      answered === 0
        ? `<p class="faint" style="font-size:.8125rem;margin-top:-.3rem">U žádné z nich zatím nemáte zapsanou odpověď.</p>`
        : `<p class="faint" style="font-size:.8125rem;margin-top:-.3rem">
            Odpověď máte zapsanou u ${esc(plural(answered, 'otázky', 'otázek', 'otázek'))}.
          </p>`
    }
    ${cardList(rows, openId)}
  </div>`
}

function paneArchiv(openId: string | null): string {
  const rows = sortDone(byStatus('archiv'))
  if (rows.length === 0) {
    return empty(
      'Archiv je prázdný',
      'Sem patří otázky, které už nejsou aktuální, ale mazat se nemají — třeba proto, že se k nim po dalším cyklu vrátíte. Přesunete je tlačítkem přímo v otázce.',
      '<button class="btn btn-primary" data-go="otazky/ceka">Otevřít čekající otázky</button>',
      '▤',
    )
  }

  return `<div class="rise">
    ${actionCard({
      icon: '?',
      title: 'Napsat novou otázku',
      body: 'Formulář najdete v záložce Čeká — co vás napadne teď, tam počká do ordinace',
      go: 'otazky/ceka',
    })}
    ${sectionHead(`Archiv · ${plural(rows.length, 'otázka', 'otázky', 'otázek')}`)}
    ${cardList(rows, openId)}
  </div>`
}

// --------------------------------------------------------------- skládá ---

export function screenOtazky(section: OtazkySection, openId: string | null): string {
  const waiting = byStatus('ceka').length
  const solved = byStatus('vyreseno').length
  const archived = byStatus('archiv').length
  const soon = visitSoon()

  const header = `<header class="head rise">
    <p class="eyebrow">${
      soon
        ? `${esc(EVENT_KINDS[soon.kind]?.label ?? 'Kontrola')} ${esc(whenLabel(soon.onDate))}`
        : 'Pro ordinaci'
    }</p>
    <h1 class="display">Otázky pro lékaře</h1>
    <p class="lede">
      Čas v ordinaci uteče rychle. Co si zapíšete tady, přečtete tam z telefonu.
    </p>
    ${segmented(OTAZKY_SECTIONS, section, 'otazky-sec')}
  </header>`

  const trio = statTrio([
    { icon: '?', value: waiting, label: 'čeká' },
    { icon: '✓', value: solved, label: 'vyřešeno' },
    { icon: '▤', value: archived, label: 'archiv' },
  ])

  const sum = visitSummary()
  const pane =
    section === 'vyreseno'
      ? paneVyreseno(openId)
      : section === 'archiv'
        ? paneArchiv(openId)
        : paneCeka(openId, sum.summary, sum.from, sum.to)

  const footer = note(
    'Otázky ani odpovědi aplikace nijak nevyhodnocuje — jsou to vaše poznámky. Cokoli zdravotního patří vašemu lékaři a tenhle seznam ho nenahrazuje.',
  )

  return header + trio + pane + footer
}
