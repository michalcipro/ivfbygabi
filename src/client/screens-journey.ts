import {
  addDays,
  czDays,
  daysBetween,
  formatCzechDate,
  formatCzechDateShort,
} from '../lib/domain/dates'
import {
  cycleTitle,
  betaDate,
  bloodTests,
  estimatedBeta,
  methodLabel,
  nextUp,
  sortedTransfers,
  TRANSFER_KIND_SHORT,
  TRANSFER_OUTCOME_LABEL,
  KIND_LABEL,
  OUTCOME_LABEL,
  type CycleRow,
  type CycleStatus,
} from '../lib/domain/cycle'
import {
  buildTimeline,
  groupByDay,
  type TimelineItem,
  type TimelineKind,
} from '../lib/domain/timeline'
import { adherence, numbersFor, overall, topSymptoms } from '../lib/domain/cycle-stats'
import { SYMPTOM_BY_ID } from '../lib/domain/symptoms'
import {
  allEvents,
  currentCycle,
  cycles,
  cycleStatus,
  eventState,
  reminders,
  S,
  viewDate,
} from './store'
import { paneVyvoj } from './screens-sledovani'
import { empty, esc, note, plural } from './ui'
import { accordion, actionCard, sectionHead, segmented, statTile, statTrio } from './viz'

/**
 * Moje léčba — hlavní obrazovka IVF cyklů.
 *
 * Čtyři části pod jedním přepínačem. Přehled odpovídá na otázku „kde jsem
 * dnes a co mě čeká“, Časová osa na „co se dělo“, Historie na „jak dopadly
 * minulé cykly“ a Statistiky sčítají to, co je zapsané. Nic víc: obrazovka
 * čísla nevykládá, nehodnotí a nic nepředpovídá — od toho je lékař, a je to
 * u statistik i napsané.
 *
 * AKCE PRO main.ts (data-act):
 *   journey-sec  arg = id sekce (prehled|osa|historie|statistiky).
 *                Očekává se `go('journey/' + arg)`.
 *   cycle-new    bez argumentu. Založí cyklus (`addCycle()`) a otevře
 *                `cyklus/{id}`, ať ho jde rovnou vyplnit.
 *   tl-filter    arg = id filtru časové osy: vse | milniky | leky |
 *                vysetreni | zapisky.
 *   acc          arg = id cyklu v Historii. Přepíná rozbalení (už existuje).
 *   quick        otevře rychlé přidání (už existuje).
 *   event-done   arg = id události. Odškrtnutí dnešního úkolu (už existuje).
 *
 * POZOR na `openId`: obrazovka dostává jediný volný slot, a používá ho podle
 * sekce — v Historii je to id rozbaleného cyklu (akce `acc`), na Časové ose
 * id zvoleného filtru (akce `tl-filter`). V main.ts tomu odpovídá jedno pole
 * `view.accordion`; obě akce do něj zapisují stejně a přepnutí sekce ho může
 * klidně vynulovat.
 *
 * NOVÉ CSS, které je potřeba doplnit do app.css:
 *
 *   // Položka osy jako tlačítko — vede na zdroj záznamu. Tvar i tečku
 *   // na lince dědí z .tlitem, tady se jen shazuje vzhled tlačítka.
 *   button.tlitem {
 *     display: block; width: 100%; text-align: left;
 *     background: none; border: 0; cursor: pointer;
 *   }
 *   button.tlitem:hover b { color: var(--s1); }
 *
 *   // Srovnávací tabulka cyklů. Vodorovně roluje sama, stránka ne.
 *   .cmp { overflow-x: auto; margin-top: .8rem; }
 *   .cmp table { border-collapse: collapse; width: 100%; font-size: .875rem; }
 *   .cmp th, .cmp td {
 *     text-align: left; padding: .5rem .7rem; white-space: nowrap;
 *     border-bottom: 1px solid var(--line);
 *   }
 *   .cmp th {
 *     font-size: .6875rem; letter-spacing: .12em; text-transform: uppercase;
 *     color: var(--fg-faint); font-weight: 600;
 *   }
 *   .cmp td.r, .cmp th.r { text-align: right; }
 *   .cmp tbody tr:last-child td { border-bottom: 0; }
 *   .cmp th.sticky, .cmp td.sticky {
 *     position: sticky; left: 0; background: var(--card);
 *   }
 */

export const JOURNEY_SECTIONS = [
  { id: 'prehled', label: 'Přehled' },
  { id: 'osa', label: 'Časová osa' },
  { id: 'vyvoj', label: 'Vývoj' },
  { id: 'historie', label: 'Historie' },
  { id: 'statistiky', label: 'Statistiky' },
]

/**
 * Rozcestník do databází cesty.
 *
 * Cyklus přestal být jedinou jednotkou — embrya a transfery mají vlastní
 * karty a napříč cykly dávají smysl samy o sobě. Odsud se k nim dostane
 * i žena, která zrovna žádný cyklus otevřený nemá.
 */
function journeyHubs(): string {
  return `<div class="tiles" style="margin-bottom:1.5rem">
    ${[
      ['embrya', '❖', 'Moje embrya', 'Karta pro každé embryo — vývoj po dnech, genetika, osud.'],
      ['transfery', '❋', 'Moje transfery', 'Všechny transfery napříč cykly, od nejnovějšího.'],
      ['historie', '✧', 'Moje IVF historie', 'Celá cesta v přehledu — co bylo v kterém cyklu.'],
    ]
      .map(
        ([r, i, t, b]) =>
          `<button class="tile" data-go="${r}"><i>${i}</i><span style="min-width:0"><h4 class="display">${t}</h4><p>${b}</p></span><span class="go">›</span></button>`,
      )
      .join('')}
  </div>`
}

export type JourneySection = 'prehled' | 'osa' | 'vyvoj' | 'historie' | 'statistiky'

export function isJourneySection(s: string): s is JourneySection {
  return JOURNEY_SECTIONS.some((x) => x.id === s)
}

// --------------------------------------------------------------- pomocníci ---

/** České číslo — desetinná čárka, ne tečka. */
function cz(n: number, dec = 0): string {
  return n.toLocaleString('cs-CZ', { minimumFractionDigits: dec, maximumFractionDigits: dec })
}

/**
 * Podíl 0–1 jako procenta. `null` zůstane `null`, ať se řádek dá vynechat.
 * Před značkou je pevná mezera — jinak se „87“ a „%“ rozejdou na dva řádky.
 */
function pct(v: number | null): string | null {
  return v === null ? null : `${cz(v * 100)} %`
}

/**
 * Zapsané číslo, nebo `null`. Nula je platná odpověď a musí projít.
 * NaN a záporná čísla ne — `numbersFor()` je zahazuje jako „nezadáno“
 * a obrazovka nesmí tvrdit něco jiného než výpočet.
 */
function usable(v: number | null): number | null {
  return v !== null && Number.isFinite(v) && v >= 0 ? v : null
}

function numOrNull(v: number | null): string | null {
  const u = usable(v)
  return u === null ? null : cz(u)
}

/** „dnes“, „zítra“, jinak „za 5 dní“. Používá se u milníků i u kontrol. */
function whenLabel(inDays: number): string {
  if (inDays === 0) return 'dnes'
  if (inDays === 1) return 'zítra'
  if (inDays === -1) return 'včera'
  return inDays > 0 ? `za ${czDays(inDays)}` : `před ${czDays(-inDays)}`
}

/** Nadpis dne na ose. Dnešek a okolí jménem, zbytek datem. */
function dayHeading(date: string, today: string): string {
  const diff = daysBetween(today, date)
  if (diff === 0) return 'Dnes'
  if (diff === 1) return 'Zítra'
  if (diff === -1) return 'Včera'
  // Osa sahá přes víc cyklů. Bez roku by „pondělí 14. 3.“ z předloňska
  // vypadalo jako letošní datum.
  const sameYear = date.slice(0, 4) === today.slice(0, 4)
  return formatCzechDate(date, { weekday: true, year: !sameYear })
}

/**
 * Běží lék v tenhle den?
 *
 * Stejné pravidlo, jaké používá `adherence` v cycle-stats a připomínky —
 * jen se sem nedá naimportovat, protože obě kopie jsou v doméně neveřejné.
 * Kdyby se rozešly, ukazoval by přehled jiný počet dávek než statistika.
 */
function runsOn(m: { repeat: string; startOn: string | null; endOn: string | null }, day: string): boolean {
  if (m.startOn && day < m.startOn) return false
  if (m.endOn && day > m.endOn) return false
  if (m.repeat === 'jednou') return m.startOn === day
  if (m.repeat === 'obden' && m.startOn) return daysBetween(m.startOn, day) % 2 === 0
  return true
}

function doseKey(date: string, medId: string): string {
  return `med:${date}:${medId}`
}

/** Název příznaku — z katalogu, nebo z vlastních, které si uživatelka přidala. */
function symptomLabel(id: string): string {
  return (
    SYMPTOM_BY_ID[id]?.label ??
    S.d.customSymptoms.find((x) => x.id === id)?.label ??
    id
  )
}

/** Řádek do `.cyclemeta`. Prázdné hodnoty se zahazují už u volajícího. */
function meta(label: string, value: string): string {
  return `<span>${esc(label)} <b>${esc(value)}</b></span>`
}

/** Definiční řádky do `.kv`. Co není zapsané, se nezobrazuje. */
function kvList(rows: [string, string | null][]): string {
  const use = rows.filter((r): r is [string, string] => Boolean(r[1]))
  if (use.length === 0) return ''
  return `<dl class="kv" style="margin-top:.9rem">
    ${use.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}
  </dl>`
}

// ----------------------------------------------------------------- přehled ---

/** Karta běžícího cyklu. Největší písmo v aplikaci patří sem. */
function cycleCard(c: CycleRow, st: CycleStatus, today: string): string {
  const bits: string[] = []
  if (st.cycleDay !== null && st.cycleDay > 0) bits.push(meta('Den cyklu', String(st.cycleDay)))
  if (st.stimDay !== null && st.stimDay > 0) bits.push(meta('Stimulace', `${st.stimDay}. den`))
  if (st.daysPastTransfer !== null && st.daysPastTransfer >= 0) {
    bits.push(meta('Po transferu', czDays(st.daysPastTransfer)))
  } else if (st.daysPastRetrieval !== null && st.daysPastRetrieval >= 0) {
    bits.push(meta('Po odběru', czDays(st.daysPastRetrieval)))
  }
  if (c.clinic.trim()) bits.push(meta('Klinika', c.clinic.trim()))
  if (c.doctor.trim()) bits.push(meta('Lékař', c.doctor.trim()))
  if (c.protocol.trim()) bits.push(meta('Protokol', c.protocol.trim()))

  const coming = nextUp(c, today).slice(0, 6)
  const pills = coming.length
    ? `<div class="nextrow">
        ${coming
          .map(
            (n) => `<div class="nextpill${n.urgent ? ' urgent' : ''}">
              <b>${esc(n.label)}</b>
              <span>${esc(whenLabel(n.inDays))} · ${esc(formatCzechDateShort(n.date))}</span>
            </div>`,
          )
          .join('')}
      </div>`
    : `<p class="faint" style="margin-top:1rem;font-size:.8125rem;line-height:1.55">
        Žádný další milník zatím není zadaný. Jakmile doplníte termíny z kliniky,
        objeví se tady pás toho, co přijde.
      </p>`

  const beta = !betaDate(c) && estimatedBeta(c, today)
  const betaHint = beta
    ? `<p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">
        Odběr hCG vychází orientačně na ${esc(formatCzechDateShort(beta))}. Přesný termín
        určuje klinika — můžete si ho doplnit do cyklu.
      </p>`
    : ''

  return `<section class="cyclecard rise">
    <p class="eyebrow">${esc(cycleTitle(c))} · ${esc(KIND_LABEL[c.kind])}</p>
    <p class="stage">${esc(st.headline)}</p>
    ${st.detail ? `<p class="soft" style="margin-top:.5rem;line-height:1.6">${esc(st.detail)}</p>` : ''}
    ${bits.length ? `<div class="cyclemeta">${bits.join('')}</div>` : ''}
    ${
      st.progress !== null
        ? `<div class="cycleprogress" role="img" aria-label="Postup cyklem ${Math.round(st.progress * 100)} %">
            <i style="width:${Math.round(Math.max(0, Math.min(1, st.progress)) * 100)}%"></i>
          </div>`
        : ''
    }
    ${pills}
    ${betaHint}
    <button class="btn btn-sm" data-go="cyklus/${esc(c.id)}" style="margin-top:1.1rem">Upravit cyklus</button>
  </section>`
}

/** Dnešní dávky — kolik z kolika. Odškrtává se v Lécích, tady se jen počítá. */
function medsBlock(today: string): string {
  const all = S.d.meds
  if (all.length === 0) {
    return `<div class="rise">
      ${sectionHead('Léky')}
      ${actionCard({
        icon: '◍',
        title: 'Zatím nemáte protokol',
        body: 'Přidejte léky od kliniky a dávky se budou nabízet každý den samy',
        go: 'leky/protokol',
      })}
    </div>`
  }

  const due = all.filter((m) => runsOn(m, today))
  if (due.length === 0) {
    return `<div class="rise">
      ${sectionHead('Dnešní dávky')}
      <p class="faint" style="font-size:.8125rem;line-height:1.55">
        Podle rozpisu dnes žádná dávka není. Změny v rozpisu vždy potvrzuje klinika.
      </p>
    </div>`
  }

  const done = due.filter((m) => S.d.checks[doseKey(today, m.id)]).length
  const left = due.filter((m) => !S.d.checks[doseKey(today, m.id)])

  return `<div class="rise">
    ${sectionHead('Dnešní dávky')}
    ${statTrio([
      { icon: '◍', value: due.length, label: 'Dávky na dnešek' },
      { icon: '✓', value: done, label: 'Odškrtnuto' },
      { icon: '◷', value: due.length - done, label: 'Zbývá' },
    ])}
    ${
      left.length
        ? `<p class="soft" style="margin-top:.8rem;font-size:.875rem;line-height:1.6">
            Zbývá odškrtnout: ${esc(left.slice(0, 4).map((m) => m.name || 'lék').join(', '))}${
              left.length > 4 ? ` a ${esc(plural(left.length - 4, 'další', 'další', 'dalších'))}` : ''
            }.
          </p>
          <button class="btn btn-sm" data-go="leky/dnes" style="margin-top:.8rem">Odškrtnout dávky</button>`
        : `<p class="note" style="margin-top:.8rem">Dnešní rozpis máte odškrtnutý celý. To se počítá.</p>`
    }
  </div>`
}

/** Nejbližší kontrola z kalendáře — jedna, ta opravdu nejbližší. */
function nextVisitBlock(today: string): string {
  const next = allEvents()
    .filter((e) => e.onDate >= today && !eventState(e.id).done)
    .sort((a, b) => a.onDate.localeCompare(b.onDate))[0]

  if (!next) {
    return `<div class="rise">
      ${sectionHead('Nejbližší kontrola')}
      ${actionCard({
        icon: '◈',
        title: 'Žádný termín v kalendáři',
        body: 'Přidejte kontrolu nebo odběr, ať vám nezmizí mezi papíry',
        go: 'kalendar',
      })}
    </div>`
  }

  const inDays = daysBetween(today, next.onDate)
  return `<div class="rise">
    ${sectionHead('Nejbližší kontrola')}
    ${actionCard({
      icon: '◈',
      title: next.title,
      body: `${whenLabel(inDays)} · ${formatCzechDate(next.onDate, { weekday: true, year: false })}`,
      go: 'kalendar',
    })}
  </div>`
}

/** Otevřené otázky pro lékaře. Sepsané doma, k ničemu bez připomenutí. */
function questionsBlock(): string {
  const open = S.d.questions.filter((q) => q.status === 'ceka')
  const rank = { vysoka: 0, stredni: 1, nizka: 2 }
  const top = [...open].sort((a, b) => rank[a.priority] - rank[b.priority]).slice(0, 3)

  if (open.length === 0) {
    return `<div class="rise">
      ${sectionHead('Otázky pro lékaře')}
      ${actionCard({
        icon: '?',
        title: 'Zatím žádná otázka',
        body: 'Co vás napadne mezi kontrolami, tady počká do ordinace',
        go: 'otazky/ceka',
      })}
    </div>`
  }

  return `<section class="surface pad rise">
    <p class="eyebrow">${esc(plural(open.length, 'otevřená otázka', 'otevřené otázky', 'otevřených otázek'))}</p>
    <ul class="linelist" style="margin-top:.7rem">
      ${top
        .map(
          (q) => `<li>
            <span class="prio ${esc(q.priority)}" aria-hidden="true"></span>
            <span>${esc(q.text)}</span>
          </li>`,
        )
        .join('')}
    </ul>
    <button class="btn btn-sm" data-go="otazky/ceka" style="margin-top:1rem">Projít otázky</button>
  </section>`
}

/** Dnešní úkoly — co je v kalendáři a není odškrtnuté. */
function tasksBlock(today: string): string {
  const due = reminders(today).slice(0, 5)
  if (due.length === 0) {
    return `<div class="rise">
      ${sectionHead('Dnešní úkoly')}
      <p class="faint" style="font-size:.8125rem;line-height:1.55">
        Na dnešek ani na zítřek nemáte nic k odškrtnutí.
      </p>
      <button class="btn btn-sm btn-ghost" data-act="quick" style="margin-top:.8rem">Rychle přidat záznam</button>
    </div>`
  }

  return `<section class="surface pad rise">
    <p class="eyebrow">Odškrtněte, co proběhlo</p>
    <div class="stack" style="gap:.35rem;margin-top:.6rem">
      ${due
        .map((e) => {
          // Ne „nestihnuté“. Připomínka je nabídka, ne výtka — a datum
          // uživatelce navíc řekne, jestli je to ze včerejška, nebo z minulého týdne.
          const when =
            e.onDate === today ? 'dnes' : e.onDate > today ? 'zítra' : `z ${formatCzechDateShort(e.onDate)}`
          return `<button class="check" data-act="event-done" data-arg="${esc(e.id)}" aria-pressed="${eventState(e.id).done}">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(e.title)}
              <br><span class="faint" style="font-size:.8125rem">${esc(when)}</span></span>
          </button>`
        })
        .join('')}
    </div>
  </section>`
}

/** Když žádný cyklus neběží. Prázdný stav musí někam vést. */
function overviewEmpty(): string {
  const past = cycles()
  const action = `<button class="btn btn-primary" data-act="cycle-new">Založit cyklus</button>`

  if (past.length === 0) {
    return [
      empty(
        'Zatím tu není žádný cyklus',
        'Cyklus je zdravotní karta jednoho pokusu: klinika, protokol, milníky, čísla z laboratoře i výsledek. Až ho založíte, bude se na téhle obrazovce skládat všechno ostatní kolem něj.',
        action,
        '✧',
      ),
      `<div class="rise" style="margin-top:1.2rem">
        ${actionCard({
          icon: '◈',
          title: 'Nejdřív jen termíny',
          body: 'Kontroly a odběry si můžete zapisovat i bez cyklu',
          go: 'kalendar',
        })}
        ${actionCard({
          icon: '◍',
          title: 'Nebo rovnou léky',
          body: 'Protokol od kliniky a denní odškrtávání dávek',
          go: 'leky/protokol',
        })}
      </div>`,
    ].join('')
  }

  const last = past[0]
  return [
    empty(
      'Právě neběží žádný cyklus',
      `Poslední zapsaný cyklus je ${cycleTitle(last)}, jeho výsledek máte uložený jako „${OUTCOME_LABEL[last.outcome].toLowerCase()}“. Až začne další, uvidíte tady fázi, den cyklu i nejbližší milníky.`,
      action,
      '✧',
    ),
    `<div class="rise" style="margin-top:1.2rem">
      ${actionCard({
        icon: '▤',
        title: 'Historie cyklů',
        body: 'Všechna čísla z minulých cyklů pohromadě',
        go: 'journey/historie',
      })}
      ${actionCard({
        icon: '◫',
        title: 'Statistiky',
        body: 'Součty a průměry z toho, co máte zapsané',
        go: 'journey/statistiky',
      })}
    </div>`,
  ].join('')
}

function paneOverview(): string {
  const today = viewDate()
  const c = currentCycle()
  if (!c) return overviewEmpty()

  const st = cycleStatus(c)
  if (!st) return overviewEmpty()

  return [
    cycleCard(c, st, today),
    medsBlock(today),
    nextVisitBlock(today),
    questionsBlock(),
    tasksBlock(today),
    note(
      'Přehled skládá jen to, co máte zapsané. Aplikace nehodnotí výsledky, nevykládá čísla z odběrů a nedoporučuje dávkování — to patří vaší klinice a nenahrazuje ji.',
    ),
  ].join('')
}

// ------------------------------------------------------------- časová osa ---

interface TlFilter {
  id: string
  label: string
  kinds: TimelineKind[]
}

/**
 * Filtry osy. Čtrnáct druhů položek by dalo čtrnáct chipů, které nikdo
 * nepřečte — proto čtyři skupiny podle toho, co člověk hledá.
 */
const TL_FILTERS: TlFilter[] = [
  { id: 'vse', label: 'Vše', kinds: [] },
  { id: 'milniky', label: 'Milníky', kinds: ['milnik', 'transfer', 'beta', 'embryologie'] },
  { id: 'leky', label: 'Léky', kinds: ['lek', 'davka'] },
  { id: 'vysetreni', label: 'Vyšetření', kinds: ['ultrazvuk', 'odber-krve', 'vysledek', 'kontrola'] },
  { id: 'zapisky', label: 'Zápisky', kinds: ['poznamka', 'priznak', 'dokument', 'udalost'] },
]

/** Klíč ikony z timeline.ts → glyf. Doména vrací jména, vzhled patří sem. */
const TL_ICON: Record<string, string> = {
  milnik: '✧',
  stimulace: '◐',
  trigger: '✶',
  odber: '◍',
  embryo: '❖',
  transfer: '❋',
  beta: '✶',
  uz: '◉',
  krev: '◍',
  vysledek: '▤',
  lek: '◐',
  davka: '▲',
  vpich: '✚',
  kontrola: '◈',
  poznamka: '❦',
  priloha: '▤',
  telo: '◕',
  udalost: '•',
  konec: '●',
}

/** Kolik položek se vejde, než se osa změní v nekonečný sloupec. */
const TL_LIMIT = 150

function timelineItems(): TimelineItem[] {
  const c = currentCycle() ?? cycles()[0] ?? null
  return buildTimeline({
    cycle: c,
    events: allEvents(),
    meds: S.d.meds,
    ultrasounds: S.d.ultrasounds,
    labs: S.d.labs,
    notes: S.d.notes,
    symptomLogs: S.d.symptomLogs,
    shots: S.d.shots,
    symptomLabel,
  })
}

function tlItem(i: TimelineItem): string {
  const icon = TL_ICON[i.icon] ?? '•'
  const inner = `<span class="when">${icon}${i.at ? ` · ${esc(i.at)}` : ''}</span>
    <b>${esc(i.title)}</b>
    ${i.detail ? `<span class="det">${esc(i.detail)}</span>` : ''}`
  const cls = `tlitem${i.major ? ' major' : ''}`
  return i.source
    ? `<button class="${cls}" data-go="${esc(i.source.route)}">${inner}</button>`
    : `<div class="${cls}">${inner}</div>`
}

function paneTimeline(openId: string | null): string {
  const today = viewDate()
  const activeId = TL_FILTERS.some((f) => f.id === openId) && openId ? openId : 'vse'
  const active = TL_FILTERS.find((f) => f.id === activeId) ?? TL_FILTERS[0]

  const all = timelineItems()
  const items = (active.kinds.length ? all.filter((i) => active.kinds.includes(i.kind)) : all).slice(
    0,
    TL_LIMIT,
  )

  const chips = `<div class="chips" style="margin-bottom:1rem">
    ${TL_FILTERS.map(
      (f) => `<button type="button" data-act="tl-filter" data-arg="${esc(f.id)}"
        aria-pressed="${f.id === activeId}">${esc(f.label)}</button>`,
    ).join('')}
  </div>`

  if (all.length === 0) {
    return (
      chips +
      empty(
        'Osa je zatím prázdná',
        'Jakmile zapíšete první milník, dávku, ultrazvuk nebo poznámku, poskládají se tu za sebou v čase — a v ordinaci nebudete listovat.',
        `<button class="btn btn-primary" data-act="quick">Rychle přidat záznam</button>`,
        '✧',
      )
    )
  }

  if (items.length === 0) {
    return (
      chips +
      empty(
        'V tomhle filtru nic není',
        `Pod „${active.label}“ zatím žádný záznam nemáte. Zkuste jiný filtr.`,
        `<button class="btn btn-primary" data-act="tl-filter" data-arg="vse">Zobrazit vše</button>
         <button class="btn btn-ghost" data-act="quick">Rychle přidat záznam</button>`,
        '✧',
      )
    )
  }

  const days = groupByDay(items)

  return [
    chips,
    `<section class="surface pad rise">
      <div class="tl">
        ${days
          .map(
            (d) => `<div class="tlday"><p>${esc(dayHeading(d.date, today))}</p></div>
              ${d.items.map(tlItem).join('')}`,
          )
          .join('')}
      </div>
    </section>`,
    all.length > TL_LIMIT
      ? `<p class="faint" style="margin-top:.8rem;font-size:.8125rem">
          Zobrazeno posledních ${esc(cz(TL_LIMIT))} záznamů z ${esc(cz(all.length))}. Starší se ukážou, až zvolíte konkrétní filtr.
        </p>`
      : '',
    note(
      'Osa jen převypráví, co je zapsané — čísla ukazuje tak, jak přišla, a nevykládá je. Čtení výsledků patří vašemu lékaři.',
    ),
  ].join('')
}

// --------------------------------------------------------------- historie ---

/**
 * Transfery jako řádky tabulky.
 *
 * V jednom cyklu jich může být víc — po čerstvém transferu následují
 * kryotransfery ze stejné zásoby. Slít je do jednoho řádku by zahodilo
 * přesně tu informaci, kvůli které se do historie chodí.
 */
function transferRows(c: CycleRow): [string, string | null][] {
  const list = sortedTransfers(c)
  return list.map((t, i) => {
    const label = list.length > 1 ? `${i + 1}. transfer` : 'Transfer'
    const parts = [
      t.date ? formatCzechDateShort(t.date) : null,
      TRANSFER_KIND_SHORT[t.kind],
      t.embryos !== null ? plural(t.embryos, 'embryo', 'embrya', 'embryí') : null,
      t.embryoDay !== null ? `${t.embryoDay}. den` : null,
      t.grade.trim() || null,
      TRANSFER_OUTCOME_LABEL[t.outcome],
    ].filter((x): x is string => Boolean(x))
    return [label, parts.join(' · ')]
  })
}

/** Odběry hCG. Po druhém transferu jich v cyklu bývá víc. */
function betaRows(c: CycleRow): [string, string | null][] {
  const list = bloodTests(c)
  return list.map((t, i) => [
    list.length > 1 ? `Odběr hCG — ${i + 1}.` : 'Odběr hCG',
    [
      t.date ? formatCzechDateShort(t.date) : null,
      t.value !== null ? `${t.value} IU/l` : null,
    ]
      .filter((x): x is string => Boolean(x))
      .join(' · '),
  ])
}

function methodsText(c: CycleRow): string | null {
  const named = c.methods.map(methodLabel)
  const all = c.methodsNote.trim() ? [...named, c.methodsNote.trim()] : named
  return all.length === 0 ? null : all.join(', ')
}

/** Všechna čísla jednoho cyklu. Co není zapsané, se nezobrazuje. */
function historyBody(c: CycleRow): string {
  const n = numbersFor(c)
  const meds = S.d.meds.filter((m) => m.cycleId === c.id)

  const rows: [string, string | null][] = [
    ['Druh cyklu', KIND_LABEL[c.kind]],
    ['Klinika', c.clinic.trim() || null],
    ['Lékař', c.doctor.trim() || null],
    ['Protokol', c.protocol.trim() || null],
    ['CD1', c.cd1On ? formatCzechDateShort(c.cd1On) : null],
    ['Začátek stimulace', c.stimStartOn ? formatCzechDateShort(c.stimStartOn) : null],
    ['Délka stimulace', n.stimDays !== null ? czDays(n.stimDays) : null],
    [
      'Trigger',
      c.triggerOn
        ? `${formatCzechDateShort(c.triggerOn)}${c.triggerAt ? ` v ${c.triggerAt}` : ''}`
        : null,
    ],
    ['Odběr vajíček', c.retrievalOn ? formatCzechDateShort(c.retrievalOn) : null],
    ['Odebraná vajíčka', numOrNull(c.eggs)],
    ['Z toho zralá', numOrNull(c.mature)],
    ['Oplozená', numOrNull(c.fertilized)],
    ['Podíl oplozených', pct(n.fertilizationRate)],
    ['Embrya 3. den', numOrNull(c.day3)],
    ['Embrya 4. den', numOrNull(c.day4)],
    ['Blastocysty 5. den', numOrNull(c.day5)],
    ['Blastocysty 6. den', numOrNull(c.day6)],
    ['Podíl blastocyst', pct(n.blastRate)],
    ['Zamražená embrya', numOrNull(c.frozen)],
    ...transferRows(c),
    ...betaRows(c),
    ['Doplňkové metody', methodsText(c)],
    ['Uzavřeno', c.endedOn ? formatCzechDateShort(c.endedOn) : null],
    [
      'Léky v cyklu',
      meds.length ? meds.map((m) => m.name.trim() || 'lék').join(', ') : null,
    ],
  ]

  const table = kvList(rows)

  return `<span class="badge badge-soft">${esc(OUTCOME_LABEL[c.outcome])}</span>
    ${table}
    ${
      table
        ? ''
        : `<p class="faint" style="margin-top:.9rem;font-size:.875rem;line-height:1.55">
            U tohohle cyklu zatím žádná čísla zapsaná nejsou. Doplnit je můžete kdykoli,
            i zpětně.
          </p>`
    }
    ${
      n.fertilizationRate !== null && usable(c.mature) === null
        ? `<p class="faint" style="margin-top:.7rem;font-size:.75rem;line-height:1.5">
            Podíl oplozených je počítaný ze všech odebraných vajíček — zralá zapsaná nejsou.
          </p>`
        : ''
    }
    ${
      c.note.trim()
        ? `<p class="soft" style="margin-top:1rem;line-height:1.6;font-size:.9375rem">${esc(c.note.trim())}</p>`
        : ''
    }
    <button class="btn btn-sm" data-go="cyklus/${esc(c.id)}" style="margin-top:1.1rem">Upravit cyklus</button>`
}

function paneHistory(openId: string | null): string {
  const list = cycles()

  if (list.length === 0) {
    return empty(
      'Historie je zatím prázdná',
      'Každý cyklus si tu drží svoje čísla — protokol, odběr, laboratoř i výsledek. Po druhém cyklu je to nejrychlejší způsob, jak si připomenout, co bylo minule jinak.',
      `<button class="btn btn-primary" data-act="cycle-new">Založit cyklus</button>`,
      '▤',
    )
  }

  return [
    `<div class="rise">
      ${sectionHead(plural(list.length, 'cyklus v historii', 'cykly v historii', 'cyklů v historii'), {
        label: 'Založit cyklus',
        act: 'cycle-new',
      })}
      ${list
        .map((c) =>
          accordion(
            c.id,
            cycleTitle(c),
            `${formatCzechDateShort(c.startedOn)} · ${KIND_LABEL[c.kind]} · ${OUTCOME_LABEL[c.outcome]}`,
            openId === c.id,
            historyBody(c),
          ),
        )
        .join('')}
    </div>`,
    note(
      'Čísla jsou tak, jak jste je zapsala. Aplikace je nehodnotí a neřekne, který cyklus byl lepší — na to nemá měřítko.',
    ),
  ].join('')
}

// ------------------------------------------------------------- statistiky ---

/** Srovnávací tabulka cyklů. Čísla vedle sebe, žádný verdikt. */
function compareTable(list: CycleRow[]): string {
  const rows = list.map(numbersFor)
  return `<div class="cmp">
    <table>
      <thead>
        <tr>
          <th class="sticky">Cyklus</th>
          <th class="r">Stimulace</th>
          <th class="r">Vajíčka</th>
          <th class="r">Zralá vajíčka</th>
          <th class="r">Oplozená vajíčka</th>
          <th class="r">Blastocysty</th>
          <th class="r">Zamražená embrya</th>
          <th>Výsledek</th>
        </tr>
      </thead>
      <tbody>
        ${rows
          .map(
            (n) => `<tr>
              <td class="sticky">${esc(n.title)}</td>
              <td class="r num">${esc(n.stimDays !== null ? czDays(n.stimDays) : '—')}</td>
              <td class="r num">${esc(numOrNull(n.eggs) ?? '—')}</td>
              <td class="r num">${esc(numOrNull(n.mature) ?? '—')}</td>
              <td class="r num">${esc(numOrNull(n.fertilized) ?? '—')}</td>
              <td class="r num">${esc(numOrNull(n.blastocysts) ?? '—')}</td>
              <td class="r num">${esc(numOrNull(n.frozen) ?? '—')}</td>
              <td>${esc(OUTCOME_LABEL[n.outcome])}</td>
            </tr>`,
          )
          .join('')}
      </tbody>
    </table>
  </div>`
}

/** Nejčastější příznaky. Podklad pro rozhovor s lékařem, ne diagnóza. */
function symptomsBlock(): string {
  const top = topSymptoms(S.d.symptomLogs, symptomLabel, 5)
  if (top.length === 0) {
    return `<div class="rise">
      ${sectionHead('Nejčastější příznaky')}
      ${actionCard({
        icon: '◕',
        title: 'Zatím žádné zápisy',
        body: 'Zapsané příznaky se tu sečtou a půjdou vzít na kontrolu',
        go: 'zapis/telo',
      })}
    </div>`
  }

  return `<section class="surface pad rise">
    <p class="eyebrow">Nejčastější příznaky</p>
    <ul class="linelist" style="margin-top:.7rem">
      ${top
        .map(
          (s) => `<li>
            <span>${esc(s.label)}</span>
            <span class="faint num" style="margin-left:auto">${esc(plural(s.count, 'zápis', 'zápisy', 'zápisů'))}${
              s.avgIntensity === null ? '' : ` · průměrně ${esc(cz(s.avgIntensity, 1))}/10`
            }</span>
          </li>`,
        )
        .join('')}
    </ul>
    <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.55">
      Jenom počty a průměrná intenzita toho, co jste si zapsala. Aplikace z těch čísel
      nic nevyvozuje a nic nepředpovídá — je to podklad pro rozhovor s lékařem.
    </p>
  </section>`
}

/** Dodržování léčby za posledních 30 dní. Číslo, ne známka. */
function adherenceBlock(today: string): string {
  const from = addDays(today, -29)
  const a = adherence(S.d.meds, S.d.checks, from, today)
  if (a.pct === null) {
    return `<div class="rise">
      ${sectionHead('Odškrtnuté dávky')}
      ${actionCard({
        icon: '◍',
        title: 'Není z čeho počítat',
        body: 'Přidejte léky do protokolu a odškrtávání se začne sčítat samo',
        go: 'leky/protokol',
      })}
    </div>`
  }

  const percent = Math.round(a.pct * 100)
  return `<section class="surface pad rise">
    <p class="eyebrow">Odškrtnuté dávky · posledních 30 dní</p>
    <p class="statv num" style="margin-top:.35rem">${esc(cz(percent))} %</p>
    <div class="cycleprogress" role="img" aria-label="Odškrtnuto ${percent} procent dávek">
      <i style="width:${percent}%"></i>
    </div>
    <p class="soft" style="margin-top:.8rem;font-size:.9375rem;line-height:1.6">
      Odškrtnuto ${esc(cz(a.done))} ${a.total >= 2 && a.total <= 4 ? 'ze' : 'z'} ${esc(cz(a.total))} dávek podle vašeho rozpisu.
    </p>
    <p class="faint" style="margin-top:.7rem;font-size:.8125rem;line-height:1.55">
      Není to známka. Neodškrtnutá dávka často znamená jen zapomenuté odškrtnutí,
      ne vynechaný lék.
    </p>
  </section>`
}

function paneStats(): string {
  const today = viewDate()
  const list = cycles()

  if (list.length === 0) {
    return empty(
      'Statistiky se počítají z cyklů',
      'Až budete mít zapsaný aspoň jeden cyklus, sečtou se tady vajíčka, oplozená vajíčka, blastocysty i délka stimulace — a nebudete to muset hledat v papírech.',
      `<button class="btn btn-primary" data-act="cycle-new">Založit cyklus</button>`,
      '◫',
    )
  }

  const o = overall(list)

  const tiles = `<div class="stats">
    ${statTile('Cyklů celkem', cz(o.cycles))}
    ${statTile('Z toho s odběrem', cz(o.withRetrieval))}
    ${statTile('Vajíček celkem', cz(o.totalEggs), o.avgEggs !== null ? `průměr ${cz(o.avgEggs, 1)} na cyklus` : undefined)}
    ${statTile('Oplozených celkem', cz(o.totalFertilized))}
    ${statTile('Blastocyst celkem', cz(o.totalBlastocysts))}
    ${statTile('Zamražených embryí', cz(o.totalFrozen))}
    ${statTile('Průměrná stimulace', o.avgStimDays !== null ? czDays(o.avgStimDays) : '—')}
    ${statTile('Průměrný podíl oplozených', pct(o.avgFertilizationRate) ?? '—')}
  </div>`

  const outcomes = `<section class="surface pad rise">
    <p class="eyebrow">Transfery a těhotenství</p>
    ${statTrio([
      { icon: '❋', value: cz(o.transfers), label: 'Transfery' },
      { icon: '✶', value: cz(o.pregnancies), label: 'Těhotenství' },
      { icon: '◫', value: pct(o.pregnancyPerTransfer) ?? '—', label: 'Těhotenství na transfer' },
    ])}
    <p class="soft" style="margin-top:1rem;line-height:1.65;font-size:.9375rem">
      <strong style="color:var(--fg);font-weight:500">Tohle je vaše vlastní historie, ne předpověď.</strong>
      Čísla popisují jen to, co se stalo ve vašich zapsaných cyklech. Neříkají nic o tom,
      jak dopadne ten další — na to nemá aplikace data ani právo. Šance u dalšího pokusu
      s vámi probere lékař.
    </p>
    <p class="faint" style="margin-top:.7rem;font-size:.8125rem;line-height:1.55">
      Do těhotenství se počítá i cyklus, který skončil ztrátou — těhotenství tehdy
      nastalo, i když nepokračovalo.
    </p>
  </section>`

  return [
    `<div class="rise">${sectionHead('Součty přes všechny cykly')}${tiles}</div>`,
    outcomes,
    `<section class="surface pad rise">
      <p class="eyebrow">Srovnání cyklů</p>
      ${compareTable(list)}
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">
        Pomlčka znamená nezapsáno, ne nulu. Aplikace neřekne, který cyklus byl lepší —
        na to nemá měřítko.
      </p>
    </section>`,
    symptomsBlock(),
    adherenceBlock(today),
    note(
      'Statistiky jsou součty toho, co máte zapsané. Nejsou to lékařské hodnocení ani výklad výsledků a nenahrazují váš tým na klinice.',
    ),
  ].join('')
}

// ----------------------------------------------------------------- skládá ---

/** Popisek nad nadpisem — kde uživatelka je, ještě než začne číst. */
function eyebrowText(): string {
  const c = currentCycle()
  const st = c ? cycleStatus(c) : null
  if (c && st) return `${cycleTitle(c)} · ${st.headline}`
  const n = cycles().length
  return n === 0 ? 'Zatím bez cyklu' : plural(n, 'cyklus v historii', 'cykly v historii', 'cyklů v historii')
}

/** Jedna věta pod nadpisem. Vysvětluje krátký název dílku v přepínači. */
const SECTION_LEDE: Record<JourneySection, string> = {
  prehled: 'Kde jste dnes a co vás čeká nejdřív.',
  osa: 'Co se v léčbě dělo, den po dni.',
  vyvoj: 'Nálada, úzkost a naděje v čase — a jak se k tomu měl dnešek.',
  historie: 'Všechny vaše cykly i s čísly z laboratoře.',
  statistiky: 'Součty přes všechny cykly. Aplikace je nehodnotí.',
}

export function screenJourney(section: JourneySection, openId: string | null): string {
  const header = `<header class="head rise">
    <p class="eyebrow">${esc(eyebrowText())}</p>
    <h1 class="display">Moje cesta</h1>
    <p class="lede">${esc(SECTION_LEDE[section])}</p>
    ${segmented(JOURNEY_SECTIONS, section, 'journey-sec')}
  </header>`

  const pane =
    section === 'osa'
      ? paneTimeline(openId)
      : section === 'vyvoj'
        ? paneVyvoj()
        : section === 'historie'
          ? paneHistory(openId)
          : section === 'statistiky'
            ? paneStats()
            : paneOverview()

  // Rozcestník jen na přehledu — na ose a ve statistikách by překážel.
  return header + (section === 'prehled' ? journeyHubs() : '') + pane
}
