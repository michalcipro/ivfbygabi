import { czDays, formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import {
  betaDate,
  blastocystsOf,
  currentTransfer,
  cycleTitle,
  embryosTransferred,
  estimatedBeta,
  hcgDay,
  HCG_KIND_LABEL,
  HCG_LOOK_LABEL,
  FERT_LABEL,
  KIND_LABEL,
  METHODS,
  METHOD_GROUPS,
  OUTCOME_LABEL,
  nextUp,
  readCycle,
  sortedTransfers,
  PREP_LABEL,
  TRANSFER_KIND_LABEL,
  TRANSFER_OUTCOME_LABEL,
  type CycleRow,
  type CycleStatus,
  type CycleTransfer,
  type FertMethod,
  type HcgLook,
  type HcgTest,
  type PrepKind,
} from '../lib/domain/cycle'
import { numbersFor } from '../lib/domain/cycle-stats'
import { nudges } from '../lib/domain/smart-reminders'
import { embryoTitle } from '../lib/domain/embryo'
import { embryoList } from './screens-ivf'
import { photoStrip } from './photo-ui'
import { cycleById, embryosOf, viewDate } from './store'
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
 * patří jejímu lékaři. Odhad termínu odběru hCG je orientační, přesný dává klinika.
 *
 * ---------------------------------------------------------------- AKCE ------
 * `cycle-save`   arg = id cyklu              — uložit formulář
 * `cycle-del`    arg = id cyklu              — smazat cyklus; potvrzení je na main.ts
 * `acc`          arg = id sekce              — rozbalit/sbalit sekci
 * `cyc-tr-add`   arg = id cyklu              — přidat transfer
 * `cyc-tr-del`   arg = „cyklus|transfer“     — smazat transfer
 * `cyc-hcg-add`  arg = „cyklus|domaci|krev“  — přidat test hCG
 * `cyc-hcg-del`  arg = „cyklus|test“         — smazat test
 * `cyc-method`   arg = „cyklus|metoda“       — zaškrtnout/odškrtnout metodu
 * `photo-add`    arg = scope fotek           — nahrát fotku (viz photo-ui.ts)
 * `photo-rm`     arg = „scope|fotka“         — smazat fotku
 * `photo-zoom`   arg = id fotky              — zvětšit přes celou obrazovku
 *
 * Sekce pro `acc`: `cyklus-zaklad`, `cyklus-milniky`, `cyklus-laborator`,
 * `cyklus-metody`, `cyklus-transfery`, `cyklus-vysledek`.
 *
 * --------------------------------------------------------------- POLE -------
 * Každé pole má id `cyc-{klíč}`, takže se dá vyzvednout přes `val('cyc-klinika')`.
 * U seznamů je klíč složený: `tr.{idTransferu}.date`, `hcg.{idTestu}.value`.
 *
 * DŮLEŽITÉ PRO ULOŽENÍ:
 *  – Prázdný řetězec u data i čísla znamená `null`, ne nulu. „0 vajíček“ je
 *    tvrdá věta a nesmí zaznít omylem místo „nevíme“.
 *  – `startedOn` se plní ze stejného pole jako `cd1On` — začátek cyklu je
 *    jeden údaj a dvě kolonky pro totéž jen matou. Když přijde prázdné,
 *    zůstává původní, protože `startedOn` je povinné.
 *  – Sbalená sekce si své hodnoty drží ve skrytých polích se stejnými id,
 *    takže v DOM jsou vždycky všechna pole. Uložení tedy nikdy nepřepíše
 *    zavřenou sekci prázdnem.
 *
 * ---------------------------------------------------------------- CSS -------
 * Nové třídy: `.subcard` a fotky z `photo-ui.ts`. Zbytek už v app.css je.
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
 * sbalená sekce držela něco jiného než rozbalená. Seznamy (transfery, testy)
 * mají klíč složený z id položky — proto se mapa počítá z cyklu, ne staticky.
 */
function formValues(c: CycleRow): Record<string, string> {
  const v: Record<string, string> = {
    name: c.name,
    kind: c.kind,
    clinic: c.clinic,
    doctor: c.doctor,
    protocol: c.protocol,
    cd1On: c.cd1On ?? c.startedOn,
    stimStartOn: c.stimStartOn ?? '',
    triggerOn: c.triggerOn ?? '',
    triggerAt: c.triggerAt,
    retrievalOn: c.retrievalOn ?? '',
    eggs: numStr(c.eggs),
    mature: numStr(c.mature),
    inseminated: numStr(c.inseminated),
    fertMethod: c.fertMethod,
    fertilized: numStr(c.fertilized),
    day2: numStr(c.day2),
    day3: numStr(c.day3),
    day4: numStr(c.day4),
    day5: numStr(c.day5),
    day6: numStr(c.day6),
    frozen: numStr(c.frozen),
    methodsNote: c.methodsNote,
    outcome: c.outcome,
    endedOn: c.endedOn ?? '',
    note: c.note,
  }

  for (const t of c.transfers) {
    v[`tr.${t.id}.kind`] = t.kind
    v[`tr.${t.id}.date`] = t.date ?? ''
    v[`tr.${t.id}.embryos`] = numStr(t.embryos)
    v[`tr.${t.id}.embryoDay`] = numStr(t.embryoDay)
    v[`tr.${t.id}.grade`] = t.grade
    v[`tr.${t.id}.prep`] = t.prep
    v[`tr.${t.id}.endometrium`] = numStr(t.endometrium)
    v[`tr.${t.id}.meds`] = t.meds
    v[`tr.${t.id}.cancelled`] = t.cancelled ? 'ano' : 'ne'
    v[`tr.${t.id}.cancelReason`] = t.cancelReason
    v[`tr.${t.id}.outcome`] = t.outcome
    v[`tr.${t.id}.note`] = t.note
  }

  for (const t of c.hcgTests) {
    v[`hcg.${t.id}.kind`] = t.kind
    v[`hcg.${t.id}.date`] = t.date ?? ''
    v[`hcg.${t.id}.transferId`] = t.transferId
    v[`hcg.${t.id}.look`] = t.look
    v[`hcg.${t.id}.value`] = numStr(t.value)
    v[`hcg.${t.id}.note`] = t.note
  }

  return v
}

/** Které klíče patří do které sekce. Zároveň seznam id pro uložení. */
function sectionKeys(c: CycleRow): Record<string, string[]> {
  const trKeys = c.transfers.flatMap((t) =>
    ['kind', 'date', 'embryos', 'embryoDay', 'grade', 'prep', 'endometrium', 'meds', 'cancelled', 'cancelReason', 'note'].map(
      (k) => `tr.${t.id}.${k}`,
    ),
  )
  const hcgKeys = c.hcgTests.flatMap((t) =>
    ['kind', 'date', 'transferId', 'look', 'value', 'note'].map((k) => `hcg.${t.id}.${k}`),
  )
  return {
    'cyklus-zaklad': ['name', 'kind', 'clinic', 'doctor', 'protocol'],
    'cyklus-milniky': ['cd1On', 'stimStartOn', 'triggerOn', 'triggerAt', 'retrievalOn'],
    'cyklus-laborator': [
      'eggs',
      'mature',
      'inseminated',
      'fertMethod',
      'fertilized',
      'day2',
      'day3',
      'day4',
      'day5',
      'day6',
      'frozen',
    ],
    'cyklus-embrya': [],
    'cyklus-metody': ['methodsNote'],
    'cyklus-transfery': trKeys,
    // Výsledek každého transferu se vyplňuje tady, ne u transferu samotného —
    // zapisuje se o týdny později a patří k tomu, jak cyklus dopadl.
    'cyklus-vysledek': [
      ...c.transfers.map((t) => `tr.${t.id}.outcome`),
      ...hcgKeys,
      'outcome',
      'endedOn',
      'note',
    ],
  }
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
function keepValues(keys: string[], values: Record<string, string>): string {
  return keys
    .map((k) => `<input type="hidden" id="cyc-${k}" value="${esc(values[k] ?? '')}">`)
    .join('')
}

// ------------------------------------------------------------- hlavičky ---

/** Kolik ze šesti milníků je zapsaných. */
function milestonesFilled(c: CycleRow): number {
  const scalar = [c.cd1On, c.stimStartOn, c.triggerOn, c.retrievalOn].filter(Boolean).length
  const transfer = c.transfers.some((t) => t.date) ? 1 : 0
  // Počítá se, jestli je beta vůbec zapsaná — ne ta, která patří k dnešku.
  const beta = c.hcgTests.some((t) => t.kind === 'krev' && t.date) ? 1 : 0
  return scalar + transfer + beta
}

function labHint(c: CycleRow): string {
  const blast = blastocystsOf(c)
  const parts = join(
    [
      usable(c.eggs) !== null && plural(c.eggs as number, 'vajíčko', 'vajíčka', 'vajíček'),
      usable(c.fertilized) !== null &&
        plural(c.fertilized as number, 'oplozené vajíčko', 'oplozená vajíčka', 'oplozených vajíček'),
      blast !== null && plural(blast, 'blastocysta', 'blastocysty', 'blastocyst'),
      usable(c.frozen) !== null &&
        plural(c.frozen as number, 'zamražené embryo', 'zamražená embrya', 'zamražených embryí'),
    ],
    ', ',
  )
  return parts || 'Zatím bez čísel — přepíšete je ze zprávy z embryologie'
}

function embryoHint(c: CycleRow): string {
  const list = embryosOf(c.id)
  if (list.length === 0) return 'Karta pro každé embryo — vývoj po dnech, genetika, osud'
  const kryo = list.filter((e) => e.fate === 'kryo').length
  return join([
    plural(list.length, 'embryo', 'embrya', 'embryí'),
    kryo > 0 ? `${kryo} zamražených` : '',
  ])
}

function transfersHint(c: CycleRow): string {
  if (c.transfers.length === 0) return 'Zatím žádný transfer — v jednom cyklu jich může být víc'
  const total = embryosTransferred(c)
  return join([
    plural(c.transfers.length, 'transfer', 'transfery', 'transferů'),
    total !== null && `celkem ${plural(total, 'embryo', 'embrya', 'embryí')}`,
  ])
}

function methodsHint(c: CycleRow): string {
  const named = c.methods.length
  const extra = c.methodsNote.trim() ? 1 : 0
  const total = named + extra
  return total === 0
    ? 'ICSI, PGT, hatching, EmbryoGlue, Sanakin a další'
    : plural(total, 'zapsaná metoda', 'zapsané metody', 'zapsaných metod')
}

// ------------------------------------------------------------- záhlaví ---

/** Trojice čísel pod stavem. Ukazuje to, co je pro dnešek relevantní. */
function trio(c: CycleRow, st: CycleStatus): string {
  const cells: { icon: string; value: string | number; label: string }[] = []

  if (st.stage === 'hotovo') {
    // U uzavřeného cyklu už den cyklu nikoho nezajímá — zůstávají čísla.
    cells.push(
      { icon: '◍', value: numText(c.eggs), label: 'Vajíčka' },
      { icon: '❖', value: numText(blastocystsOf(c)), label: 'Blastocysty' },
      { icon: '✻', value: numText(c.frozen), label: 'Zamražená embrya' },
    )
    return statTrio(cells)
  }

  // Od nejnovějšího kroku k nejstaršímu. Ženě čtyři dny po kryotransferu
  // neříká „59. den stimulace“ nic — stimulace skončila před dvěma měsíci.
  const afterTransfer = st.daysPastTransfer !== null && st.daysPastTransfer >= 0
  const afterRetrieval = st.daysPastRetrieval !== null && st.daysPastRetrieval >= 0

  // „4 Dní po transferu“ je česky špatně. Číslo je vedle popisku, takže
  // se popisek musí ohnout podle něj.
  const dayWord = (n: number): string => (n === 1 ? 'Den' : n < 5 ? 'Dny' : 'Dní')

  if (afterTransfer) {
    const n = st.daysPastTransfer as number
    cells.push({ icon: '❋', value: n, label: `${dayWord(n)} po transferu` })
  }
  if (afterRetrieval && !afterTransfer) {
    const n = st.daysPastRetrieval as number
    cells.push({ icon: '◍', value: n, label: `${dayWord(n)} po odběru` })
  }
  if (st.stimDay !== null && st.stimDay >= 1 && !afterRetrieval && !afterTransfer) {
    cells.push({ icon: '◐', value: st.stimDay, label: 'Den stimulace' })
  }
  if (st.cycleDay !== null) cells.push({ icon: '✧', value: st.cycleDay, label: 'Den cyklu' })
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
  const beta = estimatedBeta(c, viewDate())
  const known = betaDate(c, viewDate())
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
      ${statTile('Podíl blastocyst', pct(n.blastRate), 'z oplozených — 5. a 6. den dohromady')}
      ${statTile(
        'Termín odběru hCG',
        beta ? formatCzechDateShort(beta) : DASH,
        known ? 'máte zapsaný' : beta ? 'jen orientační odhad' : 'doplňte datum transferu',
      )}
    </div>
    ${note(
      known
        ? 'Čísla jsou jenom součet toho, co máte zapsané. Neříkají, jestli je to hodně nebo málo — to patří vašemu lékaři.'
        : 'Termín odběru hCG odhadujeme z data posledního transferu — u blastocysty 10 dní po transferu, u embrya z 3. dne 12 dní. Je orientační, přesný termín vám dá klinika. Ostatní čísla jsou součet toho, co máte zapsané — nehodnotí, jestli je to hodně nebo málo.',
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

// ------------------------------------------------------------- transfery ---

function transferTitle(c: CycleRow, t: CycleTransfer, i: number): string {
  const order = c.transfers.length > 1 ? `${i + 1}. transfer` : 'Transfer'
  return join([order, t.date ? formatCzechDateShort(t.date) : 'bez data'])
}

function transferBlock(c: CycleRow, t: CycleTransfer, i: number, v: Record<string, string>): string {
  const k = (field: string): string => `tr.${t.id}.${field}`
  const embrya = embryosOf(c.id)
  return `<div class="subcard">
    <div class="row" style="justify-content:space-between;align-items:baseline;gap:.6rem">
      <p class="label" style="margin:0">${esc(transferTitle(c, t, i))}</p>
      <button type="button" class="btn btn-ghost btn-sm" data-act="cyc-tr-del"
              data-arg="${esc(`${c.id}|${t.id}`)}">Smazat</button>
    </div>
    <div class="two" style="margin-top:.9rem">
      ${selectField(k('kind'), 'Druh transferu', Object.entries(TRANSFER_KIND_LABEL) as [string, string][], v[k('kind')] ?? 'cerstvy')}
      ${dateField(k('date'), 'Datum transferu', v[k('date')] ?? '')}
    </div>
    <div class="two" style="margin-top:1.1rem">
      ${numField(k('embryos'), 'Kolik embryí vloženo', v[k('embryos')] ?? '')}
      ${numField(k('embryoDay'), 'Den kultivace embrya', v[k('embryoDay')] ?? '', 'Obvykle 3 až 6.')}
    </div>
    <div class="two" style="margin-top:1.1rem">
      ${textField(k('grade'), 'Hodnocení embrya', v[k('grade')] ?? '', 'např. 4AA')}
      ${selectField(k('prep'), 'Příprava sliznice', Object.entries(PREP_LABEL) as [string, string][], v[k('prep')] ?? '')}
    </div>
    <div class="two" style="margin-top:1.1rem">
      ${numField(k('endometrium'), 'Sliznice v den transferu (mm)', v[k('endometrium')] ?? '')}
      ${textField(k('meds'), 'Léky a podpora', v[k('meds')] ?? '', 'estrogeny, progesteron, injekce…')}
    </div>
    ${
      embrya.length
        ? `<div style="margin-top:1.1rem">
            <p class="label">Která embrya se přenesla</p>
            <div class="chips" style="margin-top:.5rem">
              ${embrya
                .map((e) => {
                  const on = t.embryoIds.includes(e.id)
                  return `<button type="button" class="badge ${on ? '' : 'badge-soft'}"
                    data-act="cyc-tr-embryo" data-arg="${esc(`${c.id}|${t.id}|${e.id}`)}"
                    aria-pressed="${on ? 'true' : 'false'}">${on ? '✓ ' : ''}${esc(embryoTitle(e))}</button>`
                })
                .join('')}
            </div>
            ${hint('Vyberte embryo z karet v sekci Embrya. Když je nevedete, stačí počet výš.')}
          </div>`
        : ''
    }
    <div class="two" style="margin-top:1.1rem">
      ${selectField(
        k('cancelled'),
        'Proběhl transfer?',
        [
          ['ne', 'Ano, proběhl nebo je naplánovaný'],
          ['ano', 'Ne, byl zrušený'],
        ],
        v[k('cancelled')] ?? 'ne',
      )}
      ${textField(k('cancelReason'), 'Důvod zrušení', v[k('cancelReason')] ?? '', 'sliznice, hormony, OHSS…')}
    </div>
    <div style="margin-top:1.1rem">
      ${textField(k('note'), 'Poznámka', v[k('note')] ?? '', 'jak to proběhlo, kdo dělal')}
    </div>
    ${photoStrip(`cyc:${c.id}:transfer:${t.id}`, t.photos, 'Fotka embrya nebo zprávy z transferu')}
  </div>`
}

// ----------------------------------------------------------------- testy ---

function hcgBlock(c: CycleRow, t: HcgTest, v: Record<string, string>): string {
  const k = (field: string): string => `hcg.${t.id}.${field}`
  const day = hcgDay(c, t)
  const transferOptions: [string, string][] = [
    ['', 'Nepřiřazeno'],
    ...sortedTransfers(c).map(
      (x, i) =>
        [
          x.id,
          `${c.transfers.length > 1 ? `${i + 1}. transfer` : 'Transfer'}${x.date ? ` — ${formatCzechDateShort(x.date)}` : ''}`,
        ] as [string, string],
    ),
  ]
  const blood = (v[k('kind')] ?? t.kind) === 'krev'

  return `<div class="subcard">
    <div class="row" style="justify-content:space-between;align-items:baseline;gap:.6rem">
      <p class="label" style="margin:0">
        ${esc(HCG_KIND_LABEL[t.kind])}${day !== null ? esc(` · ${day}. den po transferu`) : ''}
      </p>
      <button type="button" class="btn btn-ghost btn-sm" data-act="cyc-hcg-del"
              data-arg="${esc(`${c.id}|${t.id}`)}">Smazat</button>
    </div>
    <div class="two" style="margin-top:.9rem">
      ${dateField(k('date'), 'Datum testu', v[k('date')] ?? '', day !== null ? `Vychází na ${day}. den po transferu.` : 'Doplňte datum transferu a den se dopočítá.')}
      ${selectField(k('kind'), 'Čím se testovalo', Object.entries(HCG_KIND_LABEL) as [string, string][], v[k('kind')] ?? t.kind)}
    </div>
    <div class="two" style="margin-top:1.1rem">
      ${selectField(k('look'), 'Jak test vypadal', Object.entries(HCG_LOOK_LABEL) as [string, string][], v[k('look')] ?? '', blood ? 'U odběru krve mluví hodnota, ne proužek.' : undefined)}
      ${numField(k('value'), 'Hodnota hCG (IU/l)', v[k('value')] ?? '', blood ? 'Číslo ze zprávy z laboratoře.' : 'Vyplňuje se jen u odběru krve.')}
    </div>
    <div style="margin-top:1.1rem">
      ${selectField(k('transferId'), 'Ke kterému transferu patří', transferOptions, v[k('transferId')] ?? '')}
    </div>
    <div style="margin-top:1.1rem">
      ${textField(k('note'), 'Poznámka', v[k('note')] ?? '', 'ranní moč, druhá čárka po deseti minutách…')}
    </div>
    ${photoStrip(`cyc:${c.id}:hcg:${t.id}`, t.photos, 'Fotka testu')}
  </div>`
}

/** Přehled testů podle dní. Ukáže postup, který jednotlivé řádky schovají. */
function hcgOverview(c: CycleRow): string {
  const rows = [...c.hcgTests]
    .filter((t) => t.date)
    .sort((a, b) => (a.date as string).localeCompare(b.date as string))
  if (rows.length < 2) return ''

  return `<ul class="linelist" style="margin-bottom:1.1rem">
    ${rows
      .map((t) => {
        const day = hcgDay(c, t)
        const what =
          t.value !== null
            ? `${t.value} IU/l`
            : t.look
              ? HCG_LOOK_LABEL[t.look as HcgLook]
              : HCG_KIND_LABEL[t.kind]
        return `<li>
          <span class="when">${esc(formatCzechDateShort(t.date as string))}</span>
          <span style="flex:1;min-width:0">${esc(what)}</span>
          <span class="faint" style="font-size:.75rem;white-space:nowrap">${day !== null ? esc(`${day}. den`) : ''}</span>
        </li>`
      })
      .join('')}
  </ul>`
}

// ---------------------------------------------------------------- metody ---

function methodsBlock(c: CycleRow, v: Record<string, string>): string {
  const groups = METHOD_GROUPS.map((g) => {
    const items = METHODS.filter((m) => m.group === g)
    if (items.length === 0) return ''
    return `<div style="margin-top:1.1rem">
      <p class="label">${esc(g)}</p>
      <div class="chips" style="margin-top:.5rem">
        ${items
          .map((m) => {
            const on = c.methods.includes(m.id)
            return `<button type="button" class="badge ${on ? '' : 'badge-soft'}"
              data-act="cyc-method" data-arg="${esc(`${c.id}|${m.id}`)}"
              aria-pressed="${on ? 'true' : 'false'}" title="${esc(m.note)}">
              ${on ? '✓ ' : ''}${esc(m.label)}
            </button>`
          })
          .join('')}
      </div>
    </div>`
  }).join('')

  const chosen = METHODS.filter((m) => c.methods.includes(m.id))

  return `<p class="soft" style="line-height:1.65;font-size:.9375rem">
      Co se v tomhle cyklu dělalo navíc. Až budete cykly srovnávat, tohle je nejčastější
      odpověď na otázku „co bylo minule jinak“.
    </p>
    ${groups}
    <div style="margin-top:1.3rem">
      ${textField('methodsNote', 'Jiná metoda', v.methodsNote ?? '', 'co v seznamu není')}
    </div>
    ${
      chosen.length
        ? `<div style="margin-top:1.3rem">
             <p class="label">Co jste zaškrtla</p>
             <ul class="bullets" style="margin-top:.5rem">
               ${chosen.map((m) => `<li><strong style="color:var(--fg);font-weight:500">${esc(m.label)}</strong> — ${esc(m.note)}</li>`).join('')}
             </ul>
           </div>`
        : ''
    }
    ${note(
      'Seznam je jen pro váš záznam. Aplikace nehodnotí, jestli má která metoda smysl — o tom rozhoduje váš tým na klinice.',
    )}`
}

// ------------------------------------------------------------- formulář ---

function sectionBodies(c: CycleRow, v: Record<string, string>, openEmbryo?: string | null): Record<string, string> {
  const transfers = sortedTransfers(c)

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
      </div>
      ${photoStrip(`cyc:${c.id}:protokol`, c.protocolPhotos, 'Fotka protokolu z kliniky')}`,

    'cyklus-milniky': `
      <div class="two">
        ${dateField('cd1On', 'Začátek cyklu (CD1)', v.cd1On, 'První den krvácení. Počítá se od něj den cyklu, kalendář i pořadí v historii.')}
        ${dateField('stimStartOn', 'Začátek stimulace', v.stimStartOn)}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${dateField('triggerOn', 'Trigger — datum', v.triggerOn)}
        ${timeField('triggerAt', 'Trigger — hodina', v.triggerAt, 'Hodinu určuje klinika. Zapište ji přesně tak, jak ji máte od nich.')}
      </div>
      <div style="margin-top:1.1rem">
        ${dateField('retrievalOn', 'Odběr vajíček', v.retrievalOn)}
      </div>
      ${note('Transfery a testy hCG mají vlastní sekce — v jednom cyklu jich bývá víc než jeden. Co nevíte, nechte prázdné.')}`,

    'cyklus-laborator': `
      <div class="two">
        ${numField('eggs', 'Odebraná vajíčka', v.eggs)}
        ${numField('mature', 'Z toho zralá', v.mature, 'Zralá jsou přesnější základ pro míru oplození.')}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${numField('inseminated', 'Použito k oplodnění', v.inseminated, 'Kolik vajíček šlo do laboratoře.')}
        ${selectField('fertMethod', 'Metoda oplodnění', Object.entries(FERT_LABEL) as [string, string][], v.fertMethod, 'Volí ji klinika podle situace páru.')}
      </div>
      <div style="margin-top:1.1rem">
        ${numField('fertilized', 'Oplozená (2PN) — 1. den', v.fertilized, 'Kolik vajíček se normálně oplodnilo.')}
      </div>

      <p class="label" style="margin-top:1.5rem">Vývoj embryí po dnech</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.35rem;line-height:1.55">
        Embryologie hlásí vývoj po dnech, ne jedním číslem. Druhý až čtvrtý den zapisujte,
        kolik embryí se ještě vyvíjí; pátý a šestý den kolik jich právě ten den došlo
        do stádia blastocysty. Když vedete karty jednotlivých embryí v sekci Embrya,
        jsou přesnější ony — tyhle počty jsou pro rychlý zápis.
      </p>
      <div class="two" style="margin-top:.9rem">
        ${numField('day2', '2. den — rýhování', v.day2)}
        ${numField('day3', '3. den — vyvíjí se', v.day3)}
      </div>
      <div class="two" style="margin-top:1.1rem">
        ${numField('day4', '4. den — morula', v.day4)}
        ${numField('day5', '5. den — blastocysty', v.day5)}
      </div>
      <div style="margin-top:1.1rem">
        ${numField('day6', '6. den — blastocysty', v.day6, 'Z blastocyst šestého dne se rodí děti stejně jako z pátého.')}
      </div>
      <div style="margin-top:1.1rem">
        ${numField('frozen', 'Zamražená embrya', v.frozen)}
      </div>
      ${photoStrip(`cyc:${c.id}:laborator`, c.labPhotos, 'Fotka zprávy z embryologie')}
      ${note('Čísla opisujte ze zprávy z embryologie. **Prázdné pole není nula** — dokud číslo nemáte, nechte ho prázdné.')}`,

    'cyklus-embrya': embryoList(c.id, openEmbryo),

    'cyklus-metody': methodsBlock(c, v),

    'cyklus-transfery': `
      <p class="soft" style="line-height:1.65;font-size:.9375rem">
        Jeden cyklus může mít transferů víc. Po odběru se udělá čerstvý transfer, zbylá
        embrya se zamrazí a v dalších měsících se z nich dělají kryotransfery — pořád
        ze stejné zásoby a pořád v tomhle cyklu.
      </p>
      ${transfers.map((t, i) => transferBlock(c, t, i, v)).join('')}
      ${
        transfers.length === 0
          ? `<p class="faint" style="margin-top:1.1rem;font-size:.8125rem;line-height:1.55">
               Zatím tu žádný transfer není. Přidejte ho, až budete mít termín — nemusí být hotový.
             </p>`
          : ''
      }
      <button type="button" class="btn btn-ghost btn-block" data-act="cyc-tr-add"
              data-arg="${esc(c.id)}" style="margin-top:1.2rem">
        ${transfers.length === 0 ? 'Přidat transfer' : 'Přidat další transfer'}
      </button>
      ${note('Výsledek každého transferu se zapisuje v sekci Výsledek — přichází o týdny později.')}`,

    'cyklus-vysledek': `
      ${
        transfers.length
          ? `<p class="label">Jak dopadly jednotlivé transfery</p>
             ${transfers
               .map(
                 (t, i) => `<div style="margin-top:.9rem">
                   ${selectField(
                     `tr.${t.id}.outcome`,
                     join([
                       transferTitle(c, t, i),
                       t.embryos !== null ? plural(t.embryos, 'embryo', 'embrya', 'embryí') : '',
                     ]),
                     Object.entries(TRANSFER_OUTCOME_LABEL) as [string, string][],
                     v[`tr.${t.id}.outcome`] ?? 'ceka',
                   )}
                 </div>`,
               )
               .join('')}`
          : ''
      }

      <p class="label" style="margin-top:1.6rem">Testování hCG</p>
      <p class="faint" style="font-size:.8125rem;margin-top:.35rem;line-height:1.55">
        Doma se testuje víc dní po sobě a každý proužek je vlastní záznam. Vyfoťte ho —
        za tři dny už si nikdo nevzpomene, jak byla čárka silná.
      </p>
      <div style="margin-top:.9rem">${hcgOverview(c)}</div>
      ${c.hcgTests.map((t) => hcgBlock(c, t, v)).join('')}
      <div class="row wrap" style="gap:.6rem;margin-top:1.2rem">
        <button type="button" class="btn btn-ghost btn-sm" data-act="cyc-hcg-add"
                data-arg="${esc(`${c.id}|domaci`)}">Přidat domácí test</button>
        <button type="button" class="btn btn-ghost btn-sm" data-act="cyc-hcg-add"
                data-arg="${esc(`${c.id}|krev`)}">Přidat odběr krve</button>
      </div>
      ${note('Aplikace hodnoty nevykládá. Slabá čárka ani konkrétní číslo hCG samy o sobě nic neuzavírají — to patří vaší klinice.')}

      <div class="two" style="margin-top:1.6rem">
        ${selectField('outcome', 'Jak cyklus dopadl', Object.entries(OUTCOME_LABEL) as [string, string][], v.outcome, 'Dokud je vybráno „Probíhá“, bere aplikace cyklus jako běžící.')}
        ${dateField('endedOn', 'Datum uzavření', v.endedOn)}
      </div>
      <div style="margin-top:1.1rem">
        ${areaField('note', 'Poznámka k cyklu', v.note, 'Co si chcete pamatovat do příště — co fungovalo, co bylo jinak, na co se zeptat.')}
      </div>
      ${photoStrip(`cyc:${c.id}:vysledek`, c.resultPhotos, 'Fotky zpráv a výsledků')}`,
  }
}

function form(c: CycleRow, open: string | null | undefined, openEmbryo: string | null | undefined): string {
  const v = formValues(c)
  const bodies = sectionBodies(c, v, openEmbryo)
  const keys = sectionKeys(c)
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
    { id: 'cyklus-embrya', name: 'Embrya', hint: embryoHint(c) },
    { id: 'cyklus-metody', name: 'Metody a doplňky', hint: methodsHint(c) },
    { id: 'cyklus-transfery', name: 'Transfery', hint: transfersHint(c) },
    {
      id: 'cyklus-vysledek',
      name: 'Výsledek',
      hint: join([
        OUTCOME_LABEL[c.outcome],
        c.hcgTests.length ? plural(c.hcgTests.length, 'test', 'testy', 'testů') : '',
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
        : accordion(s.id, s.name, s.hint, false, '') + keepValues(keys[s.id] ?? [], v),
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
export function screenCyklus(id: string, open?: string | null, openEmbryo?: string | null): string {
  const c = cycleById(id)
  if (!c) {
    return empty(
      'Tenhle cyklus tu není',
      'Možná jste ho smazala, nebo odkaz vede jinam. V historii najdete všechny cykly, které máte zapsané.',
      '<button class="btn" data-go="journey/historie">Do historie cyklů</button>',
    )
  }

  const st = readCycle(c, viewDate())
  const cur = currentTransfer(c, viewDate())

  return [
    head(
      `${c.number}. cyklus`,
      cycleTitle(c),
      join([
        `Zahájen ${formatCzechDate(c.startedOn)}`,
        c.clinic.trim(),
        c.doctor.trim(),
        c.transfers.length > 1 && cur ? plural(c.transfers.length, 'transfer', 'transfery', 'transferů') : '',
      ]) || 'Doplňte, co víte. Prázdná pole nevadí, dá se to dopsat kdykoli.',
    ),

    statusCard(c, st),
    nudgeCard(c, st),
    derivedCard(c),
    nextCard(c),

    `<section class="surface pad rise">
      <p class="eyebrow">Údaje cyklu</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">
        Rozdělené do sekcí, ať to není nekonečný formulář. Ukládá se všechno naráz,
        i to, co máte zrovna sbalené.
      </p>
      <div style="margin-top:1.1rem">${form(c, open, openEmbryo)}</div>

      <button class="btn btn-primary btn-block" data-act="cycle-save" data-arg="${esc(c.id)}" style="margin-top:1.3rem">
        Uložit cyklus
      </button>
      <p class="faint" style="margin-top:.7rem;font-size:.8125rem">
        Data i fotky zůstávají ve vašem zařízení. Nikam se neodesílají.
      </p>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Smazání cyklu</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">
        Smazání je <strong style="color:var(--fg);font-weight:500">nevratné</strong> — zmizí s ním milníky,
        čísla z laboratoře, transfery, testy i nahrané fotky. Zápisy v deníku, léky, ultrazvuky a výsledky
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
