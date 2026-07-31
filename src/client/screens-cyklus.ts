import { czDays, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import {
  KIND_LABEL,
  OUTCOME_LABEL,
  cycleTitle,
  estimatedBeta,
  nextUp,
  readCycle,
  type CycleRow,
  type CycleStatus,
} from '../lib/domain/cycle'
import { numbersFor } from '../lib/domain/cycle-stats'
import { nudges } from '../lib/domain/smart-reminders'
import { cycleById, viewDate } from './store'
import { empty, esc, head, note, plural, ring } from './ui'
import { accordion, statTile, statTrio } from './viz'

/**
 * Detail jednoho cyklu.
 *
 * Karta cyklu a formulář na jedné obrazovce. Nahoře je vidět, kde cyklus je
 * a co z jeho čísel vychází, dole se to všechno dá přepsat. Rozbalovací sekce
 * drží formulář krátký — sbalená sekce v hlavičce shrne, co v ní je zapsané,
 * takže i zavřená obrazovka je čitelná.
 *
 * Aplikace nic nediagnostikuje. Čísla, která se tu počítají, jsou pouhé podíly
 * toho, co si uživatelka zapsala — nic neznamenají, nic nepředpovídají a výklad
 * patří jejímu lékaři. Odhad termínu bety je orientační, přesný dává klinika.
 *
 * ---------------------------------------------------------------- AKCE ------
 * `cycle-save`  arg = id cyklu   — uložit formulář (viz „POLE“ níž)
 * `cycle-del`   arg = id cyklu   — smazat cyklus; nevratné, potvrzení je na main.ts
 * `acc`         arg = id sekce   — rozbalit/sbalit sekci formuláře
 *
 * Id sekcí pro `acc`: `cyklus-zaklad`, `cyklus-milniky`, `cyklus-laborator`,
 * `cyklus-vysledek`.
 *
 * -------------------------------------------------------------- ROUTOVÁNÍ ---
 * Doporučené zapojení v `screenFor`:
 *
 *     case 'cyklus':
 *       return screenCyklus(a, view.accordion)
 *
 * Druhý parametr je nepovinný schválně: když se nepředá, jsou všechny sekce
 * rozbalené a formulář funguje i bez zapojeného stavu. Když se předá
 * `view.accordion`, chová se obrazovka jako klasické harmoniky — otevřená je
 * nejvýš jedna sekce.
 *
 * --------------------------------------------------------------- POLE -------
 * Každé pole má id `cyc-{klíč z CycleRow}`, takže se dá vyzvednout přes
 * `val('cyc-clinic')`. Uložení může číst všechna id najednou:
 *
 *   text     cyc-name, cyc-clinic, cyc-doctor, cyc-protocol
 *   select   cyc-kind (CycleKind), cyc-outcome (CycleOutcome)
 *   datum    cyc-cd1On, cyc-startedOn, cyc-stimStartOn, cyc-triggerOn,
 *            cyc-retrievalOn, cyc-transferOn, cyc-betaOn, cyc-endedOn
 *   čas      cyc-triggerAt („HH:MM“)
 *   číslo    cyc-eggs, cyc-mature, cyc-fertilized, cyc-blastocysts,
 *            cyc-frozen, cyc-transferred, cyc-embryoDay
 *   text     cyc-note (textarea)
 *
 * DŮLEŽITÉ PRO ULOŽENÍ:
 *  – Prázdný řetězec u data i čísla znamená `null`, ne nulu. „0 vajíček“ je
 *    tvrdá věta a nesmí zaznít omylem místo „nevíme“.
 *  – `startedOn` je v `CycleRow` povinné — když přijde prázdné, nechte původní.
 *  – Sbalená sekce si své hodnoty drží ve skrytých polích se stejnými id,
 *    takže v DOM jsou vždycky všechna pole. Uložení tedy nikdy nepřepíše
 *    zavřenou sekci prázdnem a nemusí řešit, co je zrovna rozbalené.
 *
 * ---------------------------------------------------------------- CSS -------
 * Žádné nové třídy. Používá se `.surface .pad .rise .two .field .label
 * .formrow .stats .stattile .chips .badge .badge-soft .bullets .linelist
 * .reading .note .btn .acc` — všechno už v app.css je.
 */

// --------------------------------------------------------------- pomocníci ---

/** Prázdná hodnota. Pomlčka, ne nula — nevíme není totéž co nic. */
const DASH = '—'

/**
 * Zapsané číslo, nebo `null`. NaN a záporná čísla se zahazují stejně jako
 * v `numbersFor()` — obrazovka nesmí ukazovat jiný údaj, než ze kterého
 * se počítá.
 */
function usable(v: number | null): number | null {
  return v !== null && Number.isFinite(v) && v >= 0 ? v : null
}

/** Číslo do formuláře. `null` zůstává prázdné, aby se nepletlo s nulou. */
function numStr(v: number | null): string {
  const u = usable(v)
  return u === null ? '' : String(u)
}

/** Číslo do textu, nebo pomlčka. */
function numText(v: number | null): string {
  const u = usable(v)
  return u === null ? DASH : String(u)
}

/** Podíl 0–1 jako procenta. České číslo, pevná mezera před značkou. */
function pct(v: number | null): string {
  return v === null ? DASH : `${Math.round(v * 100)} %`
}

/** „dnes“, „zítra“, „za 3 dny“ — jak se to říká. */
function inDaysLabel(n: number): string {
  if (n <= 0) return 'dnes'
  if (n === 1) return 'zítra'
  return `za ${czDays(n)}`
}

/** Spojí části popisku a zahodí prázdné. */
function join(parts: (string | false | null | undefined)[], sep = ' · '): string {
  return parts.filter((p): p is string => Boolean(p && p.trim())).join(sep)
}

// ------------------------------------------------------------------ pole ---

/**
 * Hodnoty všech polí formuláře na jednom místě.
 *
 * Ze stejné mapy se plní viditelná i skrytá pole, takže se nemůže stát, že by
 * sbalená sekce držela něco jiného než rozbalená.
 */
function formValues(c: CycleRow): Record<string, string> {
  return {
    name: c.name,
    kind: c.kind,
    clinic: c.clinic,
    doctor: c.doctor,
    protocol: c.protocol,
    cd1On: c.cd1On ?? '',
    startedOn: c.startedOn,
    stimStartOn: c.stimStartOn ?? '',
    triggerOn: c.triggerOn ?? '',
    triggerAt: c.triggerAt,
    retrievalOn: c.retrievalOn ?? '',
    transferOn: c.transferOn ?? '',
    betaOn: c.betaOn ?? '',
    eggs: numStr(c.eggs),
    mature: numStr(c.mature),
    fertilized: numStr(c.fertilized),
    blastocysts: numStr(c.blastocysts),
    frozen: numStr(c.frozen),
    transferred: numStr(c.transferred),
    embryoDay: numStr(c.embryoDay),
    outcome: c.outcome,
    endedOn: c.endedOn ?? '',
    note: c.note,
  }
}

/** Které klíče patří do které sekce. Zároveň seznam id pro uložení. */
const SECTION_KEYS: Record<string, string[]> = {
  'cyklus-zaklad': ['name', 'kind', 'clinic', 'doctor', 'protocol'],
  'cyklus-milniky': [
    'cd1On',
    'startedOn',
    'stimStartOn',
    'triggerOn',
    'triggerAt',
    'retrievalOn',
    'transferOn',
    'betaOn',
  ],
  'cyklus-laborator': [
    'eggs',
    'mature',
    'fertilized',
    'blastocysts',
    'frozen',
    'transferred',
    'embryoDay',
  ],
  'cyklus-vysledek': ['outcome', 'endedOn', 'note'],
}

function label(key: string, text: string): string {
  return `<label class="label" for="cyc-${key}">${esc(text)}</label>`
}

function hint(text?: string): string {
  return text
    ? `<p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">${esc(text)}</p>`
    : ''
}

function textField(key: string, text: string, value: string, placeholder = '', help?: string): string {
  return `<div>${label(key, text)}
    <input class="field" id="cyc-${key}" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off">
    ${hint(help)}</div>`
}

function dateField(key: string, text: string, value: string, help?: string): string {
  return `<div>${label(key, text)}
    <input class="field" type="date" id="cyc-${key}" value="${esc(value)}">
    ${hint(help)}</div>`
}

function timeField(key: string, text: string, value: string, help?: string): string {
  return `<div>${label(key, text)}
    <input class="field" type="time" id="cyc-${key}" value="${esc(value)}">
    ${hint(help)}</div>`
}

/** Počet. Textové pole s číselnou klávesnicí — prázdné znamená nezadáno. */
function numField(key: string, text: string, value: string, help?: string): string {
  return `<div>${label(key, text)}
    <input class="field num" id="cyc-${key}" value="${esc(value)}" inputmode="numeric"
           placeholder="nevyplněno" autocomplete="off">
    ${hint(help)}</div>`
}

function selectField(
  key: string,
  text: string,
  options: [string, string][],
  value: string,
  help?: string,
): string {
  return `<div>${label(key, text)}
    <select class="field" id="cyc-${key}">
      ${options
        .map(([v, l]) => `<option value="${esc(v)}"${v === value ? ' selected' : ''}>${esc(l)}</option>`)
        .join('')}
    </select>
    ${hint(help)}</div>`
}

function areaField(key: string, text: string, value: string, placeholder = ''): string {
  return `<div>${label(key, text)}
    <textarea class="field" id="cyc-${key}" rows="4" placeholder="${esc(placeholder)}">${esc(value)}</textarea></div>`
}

/**
 * Sbalená sekce si hodnoty drží ve skrytých polích.
 *
 * Bez toho by uložení přečetlo prázdno a přepsalo by tím, co uživatelka
 * v zavřené sekci má. Formulář se ukládá celý naráz, takže v DOM musí být
 * celý — jen ho není vidět.
 */
function keepValues(sectionId: string, values: Record<string, string>): string {
  return (SECTION_KEYS[sectionId] ?? [])
    .map((k) => `<input type="hidden" id="cyc-${k}" value="${esc(values[k] ?? '')}">`)
    .join('')
}

// ------------------------------------------------------------- hlavičky ---

/** Kolik ze šesti milníků je zapsaných. */
function milestonesFilled(c: CycleRow): number {
  return [c.cd1On, c.stimStartOn, c.triggerOn, c.retrievalOn, c.transferOn, c.betaOn].filter(Boolean)
    .length
}

function labHint(c: CycleRow): string {
  const parts = join(
    [
      usable(c.eggs) !== null && plural(c.eggs as number, 'vajíčko', 'vajíčka', 'vajíček'),
      usable(c.fertilized) !== null &&
        plural(c.fertilized as number, 'oplozené vajíčko', 'oplozená vajíčka', 'oplozených vajíček'),
      usable(c.blastocysts) !== null &&
        plural(c.blastocysts as number, 'blastocysta', 'blastocysty', 'blastocyst'),
      usable(c.frozen) !== null &&
        plural(c.frozen as number, 'zamražené embryo', 'zamražená embrya', 'zamražených embryí'),
    ],
    ', ',
  )
  return parts || 'Zatím bez čísel — přepíšete je ze zprávy z embryologie'
}

// ------------------------------------------------------------- záhlaví ---

/** Trojice čísel pod stavem. Ukazuje to, co je pro dnešek relevantní. */
function trio(c: CycleRow, st: CycleStatus): string {
  const cells: { icon: string; value: string | number; label: string }[] = []

  if (st.stage === 'hotovo') {
    // U uzavřeného cyklu už den cyklu nikoho nezajímá — zůstávají čísla.
    cells.push(
      { icon: '◍', value: numText(c.eggs), label: 'Vajíčka' },
      { icon: '❖', value: numText(c.blastocysts), label: 'Blastocysty' },
      { icon: '✻', value: numText(c.frozen), label: 'Zamražená embrya' },
    )
    return statTrio(cells)
  }

  if (st.cycleDay !== null) cells.push({ icon: '✧', value: st.cycleDay, label: 'Den cyklu' })
  if (st.stimDay !== null && st.stimDay >= 1) {
    cells.push({ icon: '◐', value: st.stimDay, label: 'Den stimulace' })
  }
  if (st.daysPastRetrieval !== null && st.daysPastRetrieval >= 0) {
    cells.push({ icon: '◍', value: st.daysPastRetrieval, label: 'Dní po odběru' })
  }
  if (st.daysPastTransfer !== null && st.daysPastTransfer >= 0) {
    cells.push({ icon: '❋', value: st.daysPastTransfer, label: 'Dní po transferu' })
  }
  cells.push({ icon: '▤', value: `${milestonesFilled(c)}/6`, label: 'Zapsané milníky' })

  return statTrio(cells.slice(0, 3))
}

function statusCard(c: CycleRow, st: CycleStatus): string {
  return `<section class="surface pad rise">
    <div class="row wrap" style="gap:1.1rem;align-items:center">
      ${
        st.progress === null
          ? ''
          : `<div style="text-align:center">
               ${ring(st.progress, 66)}
               <p class="faint" style="font-size:.6875rem;margin-top:.35rem">Postup cyklem</p>
             </div>`
      }
      <div style="flex:1;min-width:12rem">
        <p class="eyebrow">Kde cyklus je</p>
        <p class="display" style="font-size:1.25rem;margin-top:.25rem;line-height:1.3">${esc(st.headline)}</p>
        <p class="soft" style="margin-top:.35rem;line-height:1.6;font-size:.9375rem">${esc(st.detail)}</p>
      </div>
    </div>

    <div class="chips" style="margin-top:1rem">
      <span class="badge badge-soft">${esc(KIND_LABEL[c.kind])}</span>
      <span class="badge badge-soft">${esc(OUTCOME_LABEL[c.outcome])}</span>
      ${c.protocol.trim() ? `<span class="badge badge-soft">${esc(c.protocol.trim())}</span>` : ''}
    </div>

    ${trio(c, st)}
  </section>`
}

/**
 * Co teď stojí za pozornost.
 *
 * Připomínky se skládají jen z dat cyklu — léky, zápisy a kalendář mají vlastní
 * obrazovky a tady by jen šuměly. Proto se do vstupu posílá prázdno a příznaky
 * i deník se tváří jako hotové: chceme jen pravidla, která mluví o cyklu.
 */
function nudgeCard(c: CycleRow, st: CycleStatus): string {
  const rows = nudges({
    today: viewDate(),
    cycle: c,
    status: st,
    meds: [],
    checks: {},
    events: [],
    eventDone: () => false,
    hasJournalToday: true,
    hasSymptomsToday: true,
    lastBbt: null,
    openQuestions: 0,
    nextAppointment: null,
  })
  if (rows.length === 0) return ''

  return `<section class="surface pad rise">
    <p class="eyebrow">Na co teď myslet</p>
    <ul class="bullets">
      ${rows.map((n) => `<li>${esc(n.text)}</li>`).join('')}
    </ul>
    <p class="faint" style="margin-top:.8rem;font-size:.75rem">
      Vychází jen z toho, co je v cyklu zapsané. Nic zdravotního — termíny a dávkování potvrzuje klinika.
    </p>
  </section>`
}

/** Odvozená čísla. Součet zapsaného, nic víc. */
function derivedCard(c: CycleRow): string {
  const n = numbersFor(c)
  const beta = estimatedBeta(c)
  // Stejná podmínka, podle jaké počítá `numbersFor()`. Kdyby se rozešly,
  // popisek by tvrdil jiný základ, než ze kterého procento vzniklo.
  const basis =
    usable(c.mature) !== null
      ? 'ze zralých vajíček'
      : usable(c.eggs) !== null
        ? 'ze všech odebraných vajíček'
        : ''

  return `<section class="surface pad rise">
    <p class="eyebrow">Co z toho vychází</p>
    <div class="stats">
      ${statTile('Délka stimulace', n.stimDays === null ? DASH : czDays(n.stimDays), 'od prvního dne stimulace do triggeru')}
      ${statTile('Podíl oplozených', pct(n.fertilizationRate), basis || 'doplňte čísla z embryologie')}
      ${statTile('Podíl blastocyst', pct(n.blastRate), 'z oplozených vajíček')}
      ${statTile(
        'Termín bety',
        beta ? formatCzechDateShort(beta) : DASH,
        c.betaOn ? 'máte zapsaný' : beta ? 'jen orientační odhad' : 'doplňte datum transferu',
      )}
    </div>
    ${note(
      c.betaOn
        ? 'Čísla jsou jenom součet toho, co máte zapsané. Neříkají, jestli je to hodně nebo málo — to patří vašemu lékaři.'
        : 'Odhad bety počítáme z data transferu — u blastocysty 10 dní po transferu, u embrya z 3. dne 12 dní. Je orientační, přesný termín vám dá klinika. Ostatní čísla jsou součet toho, co máte zapsané — nehodnotí, jestli je to hodně nebo málo.',
    )}
  </section>`
}

/** Nejbližší milníky. Prázdné se nekreslí — nemá co říct. */
function nextCard(c: CycleRow): string {
  const rows = nextUp(c, viewDate()).slice(0, 4)
  if (rows.length === 0) return ''

  return `<section class="surface pad rise">
    <p class="eyebrow">Co přijde</p>
    <ul class="linelist">
      ${rows
        .map(
          (m) => `<li>
            <span class="when">${esc(formatCzechDateShort(m.date))}</span>
            <span style="flex:1;min-width:0">${esc(m.label)}</span>
            <span class="${m.urgent ? 'badge badge-soft' : 'faint'}" style="font-size:.75rem;white-space:nowrap">${esc(
              inDaysLabel(m.inDays),
            )}</span>
          </li>`,
        )
        .join('')}
    </ul>
  </section>`
}

// ------------------------------------------------------------- formulář ---

function sectionBodies(c: CycleRow, v: Record<string, string>): Record<string, string> {
  return {
    'cyklus-zaklad': `
      <div class="two">
        ${textField('name', 'Název cyklu', v.name, `${c.number}. cyklus`, 'Prázdné pole je v pořádku — pak se cyklus jmenuje podle pořadí.')}
        ${selectField('kind', 'Druh cyklu', Object.entries(KIND_LABEL) as [string, string][], v.kind)}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${textField('clinic', 'Klinika', v.clinic, 'např. Repromeda')}
        ${textField('doctor', 'Lékař', v.doctor, 'např. MUDr. Nováková')}
      </div>
      <div style="margin-top:1.1rem">
        ${textField('protocol', 'Protokol', v.protocol, 'krátký, dlouhý, antagonistický…', 'Pište to, co máte na papíře z kliniky. Až budete cykly srovnávat, tohle je první, na co se podíváte.')}
      </div>`,

    'cyklus-milniky': `
      <div class="two">
        ${dateField('cd1On', 'CD1 — první den cyklu', v.cd1On, 'Od něj se počítá den cyklu i kalendář.')}
        ${dateField('startedOn', 'Zahájení cyklu', v.startedOn, 'Podle něj se cyklus řadí v historii.')}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${dateField('stimStartOn', 'Začátek stimulace', v.stimStartOn)}
        ${dateField('retrievalOn', 'Odběr vajíček', v.retrievalOn)}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${dateField('triggerOn', 'Trigger — datum', v.triggerOn)}
        ${timeField('triggerAt', 'Trigger — hodina', v.triggerAt, 'Hodinu určuje klinika. Zapište ji přesně tak, jak ji máte od nich.')}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${dateField('transferOn', 'Transfer', v.transferOn)}
        ${dateField('betaOn', 'Beta HCG', v.betaOn, 'Necháte-li prázdné, ukážeme jen orientační odhad.')}
      </div>
      ${note('Milníky nemusíte mít všechny. Co nevíte, nechte prázdné — dá se to doplnit kdykoli později.')}`,

    'cyklus-laborator': `
      <div class="two">
        ${numField('eggs', 'Odebraná vajíčka', v.eggs)}
        ${numField('mature', 'Z toho zralá', v.mature, 'Zralá jsou přesnější základ pro míru oplození.')}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${numField('fertilized', 'Oplozená', v.fertilized)}
        ${numField('blastocysts', 'Blastocysty', v.blastocysts)}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${numField('frozen', 'Zamražená embrya', v.frozen)}
        ${numField('transferred', 'Přenesená embrya', v.transferred)}
      </div>
      <div style="margin-top:1.1rem">
        ${numField('embryoDay', 'Den embrya při transferu', v.embryoDay, 'Obvykle 3 nebo 5. Podle toho počítáme orientační termín bety.')}
      </div>
      ${note('Čísla opisujte ze zprávy z embryologie. **Prázdné pole není nula** — dokud číslo nemáte, nechte ho prázdné.')}`,

    'cyklus-vysledek': `
      <div class="two">
        ${selectField('outcome', 'Jak cyklus dopadl', Object.entries(OUTCOME_LABEL) as [string, string][], v.outcome, 'Dokud je vybráno „Probíhá“, bere aplikace cyklus jako běžící.')}
        ${dateField('endedOn', 'Datum uzavření', v.endedOn)}
      </div>
      <div style="margin-top:1.1rem">
        ${areaField('note', 'Poznámka k cyklu', v.note, 'Co si chcete pamatovat do příště — co fungovalo, co bylo jinak, na co se zeptat.')}
      </div>`,
  }
}

function form(c: CycleRow, open: string | null | undefined): string {
  const v = formValues(c)
  const bodies = sectionBodies(c, v)
  const filled = milestonesFilled(c)

  const meta: { id: string; name: string; hint: string }[] = [
    {
      id: 'cyklus-zaklad',
      name: 'Základ',
      hint: join([KIND_LABEL[c.kind], c.clinic.trim(), c.doctor.trim()]) || 'Druh cyklu, klinika, lékař, protokol',
    },
    {
      id: 'cyklus-milniky',
      name: 'Milníky',
      hint: filled === 0 ? 'Zatím žádný zapsaný milník' : `Zapsáno ${filled} ze 6 milníků`,
    },
    { id: 'cyklus-laborator', name: 'Laboratoř', hint: labHint(c) },
    {
      id: 'cyklus-vysledek',
      name: 'Výsledek',
      hint: join([
        OUTCOME_LABEL[c.outcome],
        c.endedOn ? `uzavřen ${formatCzechDateShort(c.endedOn)}` : '',
        c.note.trim() ? 'poznámka zapsaná' : '',
      ]),
    },
  ]

  // Bez předaného stavu jsou sekce otevřené — formulář musí být použitelný
  // i tehdy, když obrazovka stav harmonik nedostane.
  const isOpen = (id: string): boolean => open === undefined || open === id

  return meta
    .map((s) =>
      isOpen(s.id)
        ? accordion(s.id, s.name, s.hint, true, bodies[s.id])
        : accordion(s.id, s.name, s.hint, false, '') + keepValues(s.id, v),
    )
    .join('')
}

// ------------------------------------------------------------- obrazovka ---

/**
 * Detail a úprava jednoho cyklu.
 *
 * `open` je id rozbalené sekce (`view.accordion`). Když se nepředá, jsou
 * rozbalené všechny — viz komentář v hlavičce souboru.
 */
export function screenCyklus(id: string, open?: string | null): string {
  const c = cycleById(id)
  if (!c) {
    return empty(
      'Tenhle cyklus tu není',
      'Možná jste ho smazala, nebo odkaz vede jinam. V historii najdete všechny cykly, které máte zapsané.',
      '<button class="btn" data-go="journey/historie">Do historie cyklů</button>',
    )
  }

  const st = readCycle(c, viewDate())

  return [
    head(
      `${c.number}. cyklus`,
      cycleTitle(c),
      join([`Zahájen ${formatCzechDate(c.startedOn)}`, c.clinic.trim(), c.doctor.trim()]) ||
        'Doplňte, co víte. Prázdná pole nevadí, dá se to dopsat kdykoli.',
    ),

    statusCard(c, st),
    nudgeCard(c, st),
    derivedCard(c),
    nextCard(c),

    `<section class="surface pad rise">
      <p class="eyebrow">Údaje cyklu</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">
        Rozdělené do čtyř sekcí, ať to není nekonečný formulář. Ukládá se všechno naráz,
        i to, co máte zrovna sbalené.
      </p>
      <div style="margin-top:1.1rem">${form(c, open)}</div>

      <button class="btn btn-primary btn-block" data-act="cycle-save" data-arg="${esc(c.id)}" style="margin-top:1.3rem">
        Uložit cyklus
      </button>
      <p class="faint" style="margin-top:.7rem;font-size:.8125rem">
        Data zůstávají ve vašem zařízení. Nikam se neodesílají.
      </p>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Smazání cyklu</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">
        Smazání je <strong style="color:var(--fg);font-weight:500">nevratné</strong> — zmizí s ním milníky,
        čísla z laboratoře i poznámka k tomuhle cyklu. Zápisy v deníku, léky, ultrazvuky a výsledky
        z odběrů zůstávají, jen už nebudou u žádného cyklu.
      </p>
      <button class="btn btn-ghost btn-sm" data-act="cycle-del" data-arg="${esc(c.id)}" style="margin-top:1rem">
        Smazat ${esc(cycleTitle(c))}
      </button>
    </section>`,

    note(
      'Čísla i termíny jsou jen součet toho, co máte zapsané. Aplikace je nevykládá a nenahrazuje váš tým na klinice.',
    ),
  ].join('')
}
