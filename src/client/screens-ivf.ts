import { formatCzechDate, formatCzechDateShort } from '../lib/domain/dates'
import {
  cycleTitle,
  sortedTransfers,
  TRANSFER_KIND_LABEL,
  TRANSFER_KIND_SHORT,
  TRANSFER_OUTCOME_LABEL,
  PREP_LABEL,
  OUTCOME_LABEL,
  methodLabel,
  type CycleRow,
  type CycleTransfer,
} from '../lib/domain/cycle'
import {
  embryoSummary,
  embryoTitle,
  FATE_LABEL,
  lastDay,
  PGT_LABEL,
  PGT_RESULT_LABEL,
  STAGE_BY_DAY,
  STAGE_LABEL,
  THAW_LABEL,
  type Embryo,
  type EmbryoFate,
  type EmbryoStage,
  type PgtKind,
  type PgtResult,
  type ThawResult,
} from '../lib/domain/embryo'
import {
  DIAGNOSES,
  DIAGNOSIS_GROUPS,
  diagnosisById,
  diagnosisLabel,
} from '../lib/domain/diagnoses'
import { EXAMS, EXAM_GROUPS, EXAM_WHO_LABEL, examName, type ExamWho } from '../lib/domain/exams'
import {
  EVIDENCE_LABEL,
  EVIDENCE_NOTE,
  FEELING_LABEL,
  SUPPORTS,
  SUPPORT_GROUP_LABEL,
  supportTitle,
  type SupportGroup,
} from '../lib/domain/support'
import { photoStrip } from './photo-ui'
import {
  allEmbryos,
  cycleById,
  cycles,
  embryoById,
  embryosOf,
  exams,
  profile,
  supportEntries,
  viewDate,
} from './store'
import { empty, esc, head, note, plural } from './ui'
import { sectionHead, statTrio } from './viz'

/**
 * IVF cesta v datech: embrya, transfery, diagnóza, vyšetření, podpůrná péče.
 *
 * Tyhle obrazovky vznikly proto, že cyklus přestal stačit jako jednotka.
 * Žena po třech letech léčby se neptá „jak dopadl druhý cyklus“, ale
 * „které embryo jsme přenášeli podruhé a co říkala genetika“. Na to musí
 * být karta, ne řádek ve statistice.
 *
 * ---------------------------------------------------------------- AKCE ------
 * `emb-add`     arg = id cyklu            — přidat embryo
 * `emb-save`    arg = id embrya           — uložit kartu embrya
 * `emb-del`     arg = id embrya           — smazat embryo
 * `emb-day`     arg = „embryo|den“        — přidat/odebrat den kultivace
 * `dg-toggle`   arg = id diagnózy         — zaškrtnout diagnózu
 * `ex-toggle`   arg = „idVyšetření|kdo“   — otevřít zápis vyšetření
 * `ex-save`     arg = id zápisu           — uložit vyšetření
 * `ex-del`      arg = id zápisu           — smazat vyšetření
 * `sup-add`     arg = id metody nebo ''   — přidat podpůrnou péči
 * `sup-save`    arg = id zápisu           — uložit
 * `sup-del`     arg = id zápisu           — smazat
 *
 * ----------------------------------------------------------------- CSS ------
 * Používá `.subcard`, `.photos` a zbytek, co v app.css už je.
 */

const DASH = '—'

function join(parts: (string | false | null | undefined)[], sep = ' · '): string {
  return parts.filter((p): p is string => Boolean(p && p.trim())).join(sep)
}

function label(id: string, text: string): string {
  return `<label class="label" for="${esc(id)}">${esc(text)}</label>`
}

function hint(text?: string): string {
  return text
    ? `<p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">${esc(text)}</p>`
    : ''
}

function textField(id: string, text: string, value: string, placeholder = '', help?: string): string {
  return `<div>${label(id, text)}
    <input class="field" id="${esc(id)}" value="${esc(value)}" placeholder="${esc(placeholder)}" autocomplete="off">
    ${hint(help)}</div>`
}

function dateField(id: string, text: string, value: string, help?: string): string {
  return `<div>${label(id, text)}
    <input class="field" type="date" id="${esc(id)}" value="${esc(value)}">${hint(help)}</div>`
}

function numField(id: string, text: string, value: string, help?: string): string {
  return `<div>${label(id, text)}
    <input class="field num" id="${esc(id)}" value="${esc(value)}" inputmode="numeric"
           placeholder="nevyplněno" autocomplete="off">${hint(help)}</div>`
}

function selectField(id: string, text: string, options: [string, string][], value: string, help?: string): string {
  return `<div>${label(id, text)}
    <select class="field" id="${esc(id)}">
      ${options
        .map(([v, l]) => `<option value="${esc(v)}"${v === value ? ' selected' : ''}>${esc(l)}</option>`)
        .join('')}
    </select>${hint(help)}</div>`
}

function areaField(id: string, text: string, value: string, placeholder = ''): string {
  return `<div>${label(id, text)}
    <textarea class="field" id="${esc(id)}" rows="3" placeholder="${esc(placeholder)}">${esc(value)}</textarea></div>`
}

function numStr(v: number | null): string {
  return v === null || !Number.isFinite(v) ? '' : String(v)
}

// ================================================================= embrya ===

const DNY = [1, 2, 3, 4, 5, 6, 7]

/**
 * Karta jednoho embrya.
 *
 * Dny kultivace se přidávají po jednom — embryo, které se zastavilo třetí den,
 * nemá mít prázdné kolonky pro pátý a šestý. Prázdná kolonka u embrya, které
 * se nedožilo, je zbytečně krutá.
 */
function embryoCard(e: Embryo, open: boolean): string {
  const dny = [...e.days].sort((a, b) => a.day - b.day)
  const zapsane = new Set(dny.map((d) => d.day))

  const dayBlock = (d: (typeof dny)[number]) => `<div class="subcard">
    <div class="row" style="justify-content:space-between;align-items:baseline;gap:.6rem">
      <p class="label" style="margin:0">${d.day}. den kultivace</p>
      <button type="button" class="btn btn-ghost btn-sm" data-act="emb-day"
              data-arg="${esc(`${e.id}|${d.day}`)}">Odebrat</button>
    </div>
    <div class="two" style="margin-top:.9rem">
      ${selectField(
        `emb-${e.id}-d${d.day}-stage`,
        'Stadium',
        Object.entries(STAGE_LABEL) as [string, string][],
        d.stage,
      )}
      ${textField(`emb-${e.id}-d${d.day}-grade`, 'Hodnocení', d.grade, 'např. 8B nebo 4AA')}
    </div>
    <div style="margin-top:1.1rem">
      ${textField(`emb-${e.id}-d${d.day}-note`, 'Poznámka', d.note, 'co říkal embryolog')}
    </div>
  </div>`

  const pridat = DNY.filter((d) => !zapsane.has(d))

  return `<section class="surface pad rise" id="embryo-${esc(e.id)}">
    <div class="row wrap" style="justify-content:space-between;gap:.6rem;align-items:baseline">
      <div style="min-width:0">
        <p class="eyebrow">${esc(FATE_LABEL[e.fate])}</p>
        <h3 class="display" style="font-size:1.2rem;margin-top:.2rem">${esc(embryoTitle(e))}</h3>
        <p class="soft" style="margin-top:.3rem;font-size:.875rem;line-height:1.55">${esc(embryoSummary(e))}</p>
      </div>
      <button class="btn btn-ghost btn-sm" data-act="emb-open" data-arg="${esc(e.id)}">
        ${open ? 'Sbalit' : 'Upravit'}
      </button>
    </div>

    ${
      open
        ? `<div style="margin-top:1.3rem">
            <div class="two">
              ${textField(`emb-${e.id}-label`, 'Vlastní název', e.label, `Embryo #${e.number}`)}
              ${selectField(`emb-${e.id}-fate`, 'Kde embryo skončilo', Object.entries(FATE_LABEL) as [string, string][], e.fate)}
            </div>

            <p class="label" style="margin-top:1.6rem">Vývoj po dnech</p>
            <p class="faint" style="font-size:.8125rem;margin-top:.35rem;line-height:1.55">
              Zapisujte jen dny, ke kterým něco víte. Embryo se přenáší i zamrazuje třetí,
              čtvrtý, pátý i šestý den — pozdější den není automaticky horší.
            </p>
            ${dny.map(dayBlock).join('')}
            ${
              pridat.length
                ? `<div class="chips" style="margin-top:1rem">
                    ${pridat
                      .map(
                        (d) =>
                          `<button data-act="emb-day" data-arg="${esc(`${e.id}|${d}`)}">+ ${d}. den</button>`,
                      )
                      .join('')}
                  </div>`
                : ''
            }

            <p class="label" style="margin-top:1.6rem">Kryokonzervace</p>
            <div class="two" style="margin-top:.9rem">
              ${dateField(`emb-${e.id}-frozenOn`, 'Datum zamražení', e.frozenOn ?? '')}
              ${numField(`emb-${e.id}-frozenDay`, 'Který den se mrazilo', numStr(e.frozenDay))}
            </div>
            <div class="two" style="margin-top:1.1rem">
              ${dateField(`emb-${e.id}-thawedOn`, 'Datum rozmrazení', e.thawedOn ?? '')}
              ${selectField(`emb-${e.id}-thawResult`, 'Jak rozmrazení dopadlo', Object.entries(THAW_LABEL) as [string, string][], e.thawResult)}
            </div>

            <p class="label" style="margin-top:1.6rem">Genetické testování</p>
            <div class="two" style="margin-top:.9rem">
              ${selectField(`emb-${e.id}-pgt`, 'Typ testu', Object.entries(PGT_LABEL) as [string, string][], e.pgt)}
              ${dateField(`emb-${e.id}-pgtSampledOn`, 'Datum odběru vzorku', e.pgtSampledOn ?? '')}
            </div>
            <div style="margin-top:1.1rem">
              ${selectField(`emb-${e.id}-pgtResult`, 'Výsledek', Object.entries(PGT_RESULT_LABEL) as [string, string][], e.pgtResult)}
            </div>
            <div style="margin-top:1.1rem">
              ${textField(`emb-${e.id}-pgtNote`, 'Poznámka ke genetice', e.pgtNote, 'co k výsledku řekli')}
            </div>

            <div style="margin-top:1.6rem">
              ${areaField(`emb-${e.id}-note`, 'Poznámka k embryu', e.note, 'Co si k němu chcete pamatovat.')}
            </div>

            ${photoStrip(`emb:${e.id}`, e.photos, 'Fotka embrya')}

            <div class="row wrap" style="gap:.6rem;margin-top:1.4rem">
              <button class="btn btn-primary" data-act="emb-save" data-arg="${esc(e.id)}">Uložit embryo</button>
              <button class="btn btn-ghost btn-sm" data-act="emb-del" data-arg="${esc(e.id)}">Smazat</button>
            </div>
          </div>`
        : ''
    }
  </section>`
}

/** Přehled embryí jednoho cyklu — vkládá se do karty cyklu. */
export function embryoList(cycleId: string, openId?: string | null): string {
  const list = embryosOf(cycleId)

  return [
    `<p class="soft" style="line-height:1.65;font-size:.9375rem">
      Každé embryo má vlastní kartu: jak se vyvíjelo den po dni, jestli se zamrazilo,
      jestli se testovalo a kam nakonec šlo. Aplikace z toho nic neodvozuje — je to váš záznam.
    </p>`,
    list.map((e) => embryoCard(e, openId === e.id)).join(''),
    list.length === 0
      ? `<p class="faint" style="margin-top:1.1rem;font-size:.8125rem;line-height:1.55">
          Zatím tu žádné embryo není. Přidejte je, až vám embryologie zavolá — klidně
          po jednom, jak budou přibývat informace.
        </p>`
      : '',
    `<button type="button" class="btn btn-ghost btn-block" data-act="emb-add" data-arg="${esc(cycleId)}" style="margin-top:1.2rem">
      ${list.length === 0 ? 'Přidat embryo' : 'Přidat další embryo'}
    </button>`,
  ].join('')
}

/** Databáze „Moje embrya“ — napříč všemi cykly. */
export function screenEmbrya(openId?: string | null): string {
  const list = allEmbryos()
  const byCycle = cycles().map((c) => ({ cycle: c, items: list.filter((e) => e.cycleId === c.id) }))
  const zamrazena = list.filter((e) => e.fate === 'kryo').length
  const prenesena = list.filter((e) => e.fate === 'transfer').length

  if (list.length === 0) {
    return [
      head('Moje embrya', 'Embrya', 'Karta pro každé embryo — vývoj po dnech, genetika, kam nakonec šlo.'),
      empty(
        'Zatím tu žádné embryo není',
        'Embrya se zapisují u konkrétního cyklu. Otevřete kartu cyklu a v sekci Embrya přidejte první.',
        cycles().length
          ? `<button class="btn" data-go="cyklus/${esc(cycles()[cycles().length - 1].id)}">Otevřít poslední cyklus</button>`
          : '<button class="btn" data-act="cycle-new">Založit cyklus</button>',
        '❖',
      ),
    ].join('')
  }

  return [
    head(
      'Moje embrya',
      'Embrya',
      'Všechna embrya napříč cykly. Karta pro každé — vývoj po dnech, genetika, kam nakonec šlo.',
    ),

    statTrio([
      { icon: '❖', value: list.length, label: 'embryí celkem' },
      { icon: '✻', value: zamrazena, label: 'zamražených' },
      { icon: '❋', value: prenesena, label: 'přenesených' },
    ]),

    byCycle
      .filter((g) => g.items.length > 0)
      .map(
        (g) => `<section style="margin-top:1.8rem">
          ${sectionHead(cycleTitle(g.cycle), { label: 'Karta cyklu', go: `cyklus/${g.cycle.id}` })}
          ${g.items.map((e) => embryoCard(e, openId === e.id)).join('')}
        </section>`,
      )
      .join(''),

    note(
      'Hodnocení embrya popisuje, jak embryo vypadá — není to předpověď. Co znamená pro vás, řekne jedině embryolog a váš lékař.',
    ),
  ].join('')
}

// ============================================================== transfery ===

function transferRow(c: CycleRow, t: CycleTransfer, poradi: number, celkem: number): string {
  const embrya = t.embryoIds
    .map((id) => embryoById(id))
    .filter((e): e is Embryo => e !== null)
    .map((e) => embryoTitle(e))

  const stav = t.cancelled ? 'Zrušený transfer' : TRANSFER_OUTCOME_LABEL[t.outcome]

  return `<div class="surface" style="padding:1.15rem 1.3rem">
    <div class="row wrap" style="justify-content:space-between;gap:.5rem;align-items:baseline">
      <p style="font-weight:500;min-width:0">
        ${esc(celkem > 1 ? `${poradi}. transfer` : 'Transfer')}
        <span class="faint" style="font-weight:400"> · ${esc(TRANSFER_KIND_SHORT[t.kind])}</span>
      </p>
      <span class="badge badge-soft">${esc(stav)}</span>
    </div>
    <p class="faint" style="margin-top:.3rem;font-size:.8125rem">
      ${esc(join([t.date ? formatCzechDate(t.date) : 'bez data', cycleTitle(c)]))}
    </p>
    <p class="soft" style="margin-top:.5rem;font-size:.875rem;line-height:1.6">
      ${esc(
        join([
          embrya.length ? embrya.join(', ') : t.embryos !== null ? plural(t.embryos, 'embryo', 'embrya', 'embryí') : '',
          t.embryoDay !== null ? `${t.embryoDay}. den kultivace` : '',
          t.grade.trim(),
          t.prep ? PREP_LABEL[t.prep] : '',
          t.endometrium !== null ? `sliznice ${String(t.endometrium).replace('.', ',')} mm` : '',
        ]) || 'Zatím bez podrobností',
      )}
    </p>
    ${
      t.support.length
        ? `<div class="chips" style="margin-top:.6rem">${t.support.map((m) => `<span class="badge badge-soft">${esc(methodLabel(m))}</span>`).join('')}</div>`
        : ''
    }
    ${t.cancelReason.trim() ? `<p class="whybox" style="margin-top:.6rem">${esc(t.cancelReason)}</p>` : ''}
    <button class="btn btn-ghost btn-sm" data-go="cyklus/${esc(c.id)}" style="margin-top:.8rem">Otevřít cyklus</button>
  </div>`
}

/** Databáze „Moje transfery“ — napříč všemi cykly, v čase. */
export function screenTransfery(): string {
  const all = cycles().flatMap((c) => {
    const list = sortedTransfers(c)
    return list.map((t, i) => ({ c, t, poradi: i + 1, celkem: list.length }))
  })
  const seřazeno = [...all].sort((a, b) => (b.t.date ?? '').localeCompare(a.t.date ?? ''))

  if (all.length === 0) {
    return [
      head('Moje transfery', 'Transfery', 'Všechny transfery na jednom místě, napříč cykly.'),
      empty(
        'Zatím tu žádný transfer není',
        'Transfery se zapisují u cyklu. V jednom cyklu jich může být víc — čerstvý a po něm kryotransfery ze stejné zásoby embryí.',
        cycles().length
          ? `<button class="btn" data-go="cyklus/${esc(cycles()[cycles().length - 1].id)}">Otevřít poslední cyklus</button>`
          : '<button class="btn" data-act="cycle-new">Založit cyklus</button>',
        '❋',
      ),
    ].join('')
  }

  const pozitivni = all.filter((x) => x.t.outcome === 'pozitivni').length
  const cekaji = all.filter((x) => x.t.outcome === 'ceka' && !x.t.cancelled).length

  return [
    head(
      'Moje transfery',
      'Transfery',
      'Všechny transfery napříč cykly, od nejnovějšího. Před konzultací je to ten nejužitečnější přehled, jaký si můžete přinést.',
    ),

    statTrio([
      { icon: '❋', value: all.length, label: 'transferů celkem' },
      { icon: '✶', value: pozitivni, label: 'pozitivních hCG' },
      { icon: '◔', value: cekaji, label: 'čeká na výsledek' },
    ]),

    `<div class="stack" style="gap:.7rem;margin-top:1.6rem">
      ${seřazeno.map((x) => transferRow(x.c, x.t, x.poradi, x.celkem)).join('')}
    </div>`,

    note(
      'Přehled je součet toho, co máte zapsané. Co z něj plyne pro další krok, patří vašemu lékaři — aplikace nic nevyhodnocuje.',
    ),
  ].join('')
}

// =============================================================== diagnóza ===

/** „Moje diagnóza“ — proč jdu na IVF. */
export function screenDiagnoza(): string {
  const vybrane = profile().diagnoses ?? []

  const skupina = (g: string) => {
    const items = DIAGNOSES.filter((d) => d.group === g)
    if (items.length === 0) return ''
    return `<section style="margin-top:1.6rem">
      <p class="eyebrow">${esc(g)}</p>
      <div class="stack" style="gap:.45rem;margin-top:.7rem">
        ${items
          .map((d) => {
            const on = vybrane.includes(d.id)
            return `<button class="tile" data-act="dg-toggle" data-arg="${esc(d.id)}"
              aria-pressed="${on ? 'true' : 'false'}" style="align-items:flex-start${on ? ';border-color:var(--s1)' : ''}">
              <i>${on ? '✓' : '○'}</i>
              <span style="min-width:0">
                <h4 class="display" style="font-size:.9375rem">${esc(d.label)}</h4>
                <p>${esc(d.note)}</p>
              </span>
            </button>`
          })
          .join('')}
      </div>
    </section>`
  }

  return [
    head(
      'Moje diagnóza',
      'Proč jdu na IVF',
      'Označte důvody, které se vás týkají. Může jich být víc — kombinovaný faktor je v IVF spíš pravidlo než výjimka.',
    ),

    vybrane.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">Vybráno</p>
          <div class="chips" style="margin-top:.7rem">
            ${vybrane.map((id) => `<span class="badge">${esc(diagnosisLabel(id))}</span>`).join('')}
          </div>
          <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.55">
            Podle toho se vám v knihovně a v průvodci nabízí obsah, který se vás týká.
            Léčbu z toho aplikace neodvozuje.
          </p>
        </section>`
      : `<section class="surface pad rise">
          <p class="soft" style="line-height:1.65;font-size:.9375rem">
            Zatím nemáte označené nic. Nevadí — ne každá žena zná svoji diagnózu hned
            a „nevysvětlená neplodnost“ je taky diagnóza.
          </p>
        </section>`,

    DIAGNOSIS_GROUPS.map(skupina).join(''),

    vybrane.length
      ? `<section style="margin-top:1.8rem">
          ${sectionHead('Co to znamená')}
          <div class="stack" style="gap:.6rem">
            ${vybrane
              .map((id) => {
                const d = diagnosisById(id)
                if (!d) return ''
                return `<div class="surface" style="padding:1.05rem 1.2rem">
                  <p style="font-weight:500">${esc(d.label)}</p>
                  <p class="soft" style="margin-top:.35rem;font-size:.875rem;line-height:1.6">${esc(d.note)}</p>
                  ${d.modifier ? `<button class="btn btn-ghost btn-sm" data-go="diagnoza/${esc(d.modifier)}" style="margin-top:.6rem">Přečíst si o tom →</button>` : ''}
                </div>`
              })
              .join('')}
          </div>
        </section>`
      : '',

    note(
      'Diagnóza je informace, ne rozsudek. Aplikace z ní **neodvozuje léčbu ani prognózu** — o obojím rozhoduje váš lékař podle celého vašeho obrazu.',
    ),
  ].join('')
}

// ============================================================== vyšetření ===

/** „Moje vyšetření“ — co může být relevantní a co už mám za sebou. */
export function screenVysetreni(who: ExamWho = 'zena'): string {
  const zapsana = exams()
  const zaznam = (examId: string) => zapsana.find((e) => e.examId === examId) ?? null
  const vlastni = zapsana.filter((e) => !e.examId && e.who === who)
  const hotovo = zapsana.filter((e) => e.done).length

  const radek = (id: string, name: string, why: string) => {
    const z = zaznam(id)
    const done = z?.done ?? false
    return `<div class="surface" style="padding:1rem 1.2rem${done ? ';border-color:var(--s1)' : ''}">
      <div style="display:flex;gap:.9rem;align-items:flex-start">
        <button class="check" data-act="ex-toggle" data-arg="${esc(`${id}|${who}`)}" aria-pressed="${done}"
                style="width:auto;flex:none;margin-top:.1rem"><span class="box">✓</span></button>
        <div style="flex:1;min-width:0">
          <p style="font-weight:500">${esc(name)}</p>
          <p class="faint" style="margin-top:.2rem;font-size:.8125rem;line-height:1.5">${esc(why)}</p>
          ${
            z
              ? `<div class="two" style="margin-top:.9rem">
                  ${dateField(`ex-${z.id}-onDate`, 'Datum', z.onDate ?? '')}
                  ${textField(`ex-${z.id}-result`, 'Výsledek vlastními slovy', z.result, 'co vám řekli')}
                </div>
                ${photoStrip(`exam:${z.id}`, z.photos, 'Fotka výsledku')}
                <div class="row wrap" style="gap:.5rem;margin-top:.9rem">
                  <button class="btn btn-sm" data-act="ex-save" data-arg="${esc(z.id)}">Uložit</button>
                  <button class="btn btn-ghost btn-sm" data-act="ex-del" data-arg="${esc(z.id)}">Odebrat záznam</button>
                </div>`
              : ''
          }
        </div>
      </div>
    </div>`
  }

  const skupiny = EXAM_GROUPS[who]
    .map((g) => {
      const items = EXAMS.filter((e) => e.who === who && e.group === g)
      if (items.length === 0) return ''
      return `<section style="margin-top:1.6rem">
        <p class="eyebrow">${esc(g)}</p>
        <div class="stack" style="gap:.5rem;margin-top:.7rem">
          ${items.map((e) => radek(e.id, e.name, e.why)).join('')}
        </div>
      </section>`
    })
    .join('')

  return [
    head(
      'Moje vyšetření',
      'Vyšetření',
      'Co může být na cestě relevantní. Není to povinný seznam — plán skládá lékař podle vaší anamnézy a každé ženě vyjde jinak.',
    ),

    `<div class="chips" style="margin-bottom:1.2rem">
      ${(Object.keys(EXAM_WHO_LABEL) as ExamWho[])
        .map(
          (w) =>
            `<button class="${w === who ? 'badge' : 'badge badge-soft'}" data-go="vysetreni/${esc(w)}">${esc(EXAM_WHO_LABEL[w])}</button>`,
        )
        .join('')}
    </div>`,

    hotovo > 0
      ? `<p class="faint" style="margin-bottom:1rem;font-size:.8125rem">Zapsáno ${esc(plural(hotovo, 'vyšetření', 'vyšetření', 'vyšetření'))}.</p>`
      : '',

    skupiny,

    vlastni.length
      ? `<section style="margin-top:1.6rem">
          <p class="eyebrow">Vlastní vyšetření</p>
          <div class="stack" style="gap:.5rem;margin-top:.7rem">
            ${vlastni
              .map(
                (z) => `<div class="surface" style="padding:1rem 1.2rem">
                  <p style="font-weight:500">${esc(z.custom)}</p>
                  <div class="two" style="margin-top:.9rem">
                    ${dateField(`ex-${z.id}-onDate`, 'Datum', z.onDate ?? '')}
                    ${textField(`ex-${z.id}-result`, 'Výsledek', z.result, 'co vám řekli')}
                  </div>
                  ${photoStrip(`exam:${z.id}`, z.photos, 'Fotka výsledku')}
                  <div class="row wrap" style="gap:.5rem;margin-top:.9rem">
                    <button class="btn btn-sm" data-act="ex-save" data-arg="${esc(z.id)}">Uložit</button>
                    <button class="btn btn-ghost btn-sm" data-act="ex-del" data-arg="${esc(z.id)}">Smazat</button>
                  </div>
                </div>`,
              )
              .join('')}
          </div>
        </section>`
      : '',

    `<section class="surface pad" style="margin-top:1.6rem">
      <p class="eyebrow">Přidat vlastní vyšetření</p>
      <div style="margin-top:.9rem">
        ${textField('ex-custom', 'Název', '', 'co v seznamu není')}
      </div>
      <button class="btn btn-sm" data-act="ex-custom" data-arg="${esc(who)}" style="margin-top:1rem">Přidat</button>
    </section>`,

    note(
      '**Žádné z těchhle vyšetření nemusí podstoupit každá žena.** Co je ve vašem případě potřeba, určuje lékař. Aplikace výsledky nevykládá — jsou to vaše poznámky, ne diagnóza.',
    ),
  ].join('')
}

// ========================================================= podpůrná péče ===

/** „Moje podpůrná péče“ — co využívám mimo kliniku. */
export function screenPodpora(): string {
  const list = supportEntries()
  const bezi = list.filter((e) => e.ongoing)

  const karta = (e: (typeof list)[number]) => `<div class="subcard">
    <div class="row" style="justify-content:space-between;align-items:baseline;gap:.6rem">
      <p class="label" style="margin:0">${esc(supportTitle(e))}</p>
      <button type="button" class="btn btn-ghost btn-sm" data-act="sup-del" data-arg="${esc(e.id)}">Smazat</button>
    </div>
    <div class="two" style="margin-top:.9rem">
      ${dateField(`sup-${e.id}-date`, 'Datum', e.date ?? '')}
      ${textField(`sup-${e.id}-provider`, 'Kdo to vedl', e.provider, 'jméno, pracoviště')}
    </div>
    <div class="two" style="margin-top:1.1rem">
      ${selectField(
        `sup-${e.id}-feeling`,
        'Jak mi to sedlo',
        [['', 'Nezapsáno'], ...Object.entries(FEELING_LABEL)] as [string, string][],
        e.feeling === null ? '' : String(e.feeling),
      )}
      ${selectField(
        `sup-${e.id}-ongoing`,
        'Využívám to teď',
        [
          ['ano', 'Ano, pokračuje'],
          ['ne', 'Už ne'],
        ],
        e.ongoing ? 'ano' : 'ne',
      )}
    </div>
    <div style="margin-top:1.1rem">
      ${areaField(`sup-${e.id}-note`, 'Poznámka', e.note, 'Co vám to dalo, co jste zkusila, co příště jinak.')}
    </div>
    <button class="btn btn-sm" data-act="sup-save" data-arg="${esc(e.id)}" style="margin-top:1rem">Uložit</button>
  </div>`

  const nabidka = (g: SupportGroup) => {
    const items = SUPPORTS.filter((s) => s.group === g)
    return `<section style="margin-top:1.6rem">
      <p class="eyebrow">${esc(SUPPORT_GROUP_LABEL[g])}</p>
      <div class="stack" style="gap:.45rem;margin-top:.7rem">
        ${items
          .map(
            (s) => `<div class="surface" style="padding:.95rem 1.15rem">
              <div class="row wrap" style="justify-content:space-between;gap:.5rem;align-items:baseline">
                <p style="font-weight:500;min-width:0">${esc(s.label)}</p>
                <span class="badge badge-soft" title="${esc(EVIDENCE_NOTE[s.evidence])}">${esc(EVIDENCE_LABEL[s.evidence])}</span>
              </div>
              <p class="faint" style="margin-top:.3rem;font-size:.8125rem;line-height:1.5">${esc(s.note)}</p>
              <button class="btn btn-ghost btn-sm" data-act="sup-add" data-arg="${esc(s.id)}" style="margin-top:.6rem">Zapsat</button>
            </div>`,
          )
          .join('')}
      </div>
    </section>`
  }

  return [
    head(
      'Moje podpůrná péče',
      'Co mi pomáhá',
      'Co využíváte mimo kliniku a jak vám to sedí. U každé metody je poctivě uvedená síla důkazů — ne proto, aby vás od něčeho odradila, ale abyste věděla, do čeho jdete.',
    ),

    bezi.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">Co právě využívám</p>
          <div class="chips" style="margin-top:.7rem">
            ${bezi.map((e) => `<span class="badge">${esc(supportTitle(e))}</span>`).join('')}
          </div>
        </section>`
      : '',

    list.length
      ? `<section class="surface pad rise">
          <p class="eyebrow">Zápisy</p>
          ${list.map(karta).join('')}
        </section>`
      : empty(
          'Zatím tu nic není',
          'Vyberte si dole, co využíváte. Není to úkol — je to místo, kde uvidíte, co vám za ty měsíce opravdu pomohlo.',
          '',
          '♡',
        ),

    (['telo', 'psychika', 'doplnkova', 'zivotni_styl'] as SupportGroup[]).map(nabidka).join(''),

    `<section class="surface pad" style="margin-top:1.6rem">
      <p class="eyebrow">Něco vlastního</p>
      <div style="margin-top:.9rem">${textField('sup-custom', 'Název', '', 'co v seznamu není')}</div>
      <button class="btn btn-sm" data-act="sup-custom" style="margin-top:1rem">Přidat</button>
    </section>`,

    note(
      'Aplikace **neslibuje, že cokoli z tohohle zvýší šanci na otěhotnění.** Péče o sebe má smysl sama o sobě. Doplňky stravy nejsou automaticky vhodné pro každou — proberte je s klinikou, protože mohou zasahovat do léčby.',
    ),
  ].join('')
}

// ================================================================ historie ===

/** „Moje IVF historie“ — celá cesta na jednom řádku po cyklech. */
export function screenHistorieIvf(): string {
  const list = cycles()
  if (list.length === 0) {
    return [
      head('Moje IVF historie', 'Historie', 'Celá cesta na jednom místě.'),
      empty(
        'Zatím tu není žádný cyklus',
        'Až založíte první cyklus, objeví se tu shrnutí každého z nich — od počtu vajíček po výsledek posledního transferu.',
        '<button class="btn" data-act="cycle-new">Založit cyklus</button>',
        '✧',
      ),
    ].join('')
  }

  const radek = (c: CycleRow) => {
    const emb = embryosOf(c.id)
    const tr = sortedTransfers(c)
    const kroky = [
      c.eggs !== null ? plural(c.eggs, 'vajíčko', 'vajíčka', 'vajíček') : null,
      c.fertilized !== null ? `${plural(c.fertilized, 'oplozené', 'oplozená', 'oplozených')}` : null,
      emb.length ? plural(emb.length, 'embryo', 'embrya', 'embryí') : null,
      tr.length ? plural(tr.length, 'transfer', 'transfery', 'transferů') : null,
      c.outcome !== 'probiha' ? OUTCOME_LABEL[c.outcome] : null,
    ].filter((x): x is string => Boolean(x))

    return `<div class="surface" style="padding:1.2rem 1.35rem">
      <div class="row wrap" style="justify-content:space-between;gap:.5rem;align-items:baseline">
        <p style="font-weight:500">${esc(cycleTitle(c))}</p>
        <span class="badge badge-soft">${esc(OUTCOME_LABEL[c.outcome])}</span>
      </div>
      <p class="faint" style="margin-top:.25rem;font-size:.8125rem">
        ${esc(join([formatCzechDateShort(c.startedOn), c.clinic.trim(), c.protocol.trim()]))}
      </p>
      <p class="soft" style="margin-top:.6rem;font-size:.9375rem;line-height:1.6">
        ${kroky.length ? esc(kroky.join('  →  ')) : 'Zatím bez zapsaných čísel'}
      </p>
      ${
        tr.length
          ? `<ul class="linelist" style="margin-top:.8rem">
              ${tr
                .map(
                  (t, i) => `<li>
                    <span class="when">${esc(t.date ? formatCzechDateShort(t.date) : DASH)}</span>
                    <span style="flex:1;min-width:0">${esc(tr.length > 1 ? `${i + 1}. transfer` : 'Transfer')} · ${esc(TRANSFER_KIND_LABEL[t.kind])}</span>
                    <span class="faint" style="font-size:.75rem;white-space:nowrap">${esc(t.cancelled ? 'zrušen' : TRANSFER_OUTCOME_LABEL[t.outcome])}</span>
                  </li>`,
                )
                .join('')}
            </ul>`
          : ''
      }
      <button class="btn btn-ghost btn-sm" data-go="cyklus/${esc(c.id)}" style="margin-top:.9rem">Otevřít kartu</button>
    </div>`
  }

  const transferu = list.reduce((n, c) => n + c.transfers.length, 0)
  const embryi = allEmbryos().length

  return [
    head(
      'Moje IVF historie',
      'Historie',
      'Celá cesta na jednom místě. Před konzultací po opakovaném neúspěchu je tohle to nejužitečnější, co si můžete přinést.',
    ),

    statTrio([
      { icon: '✧', value: list.length, label: plural(list.length, 'cyklus', 'cykly', 'cyklů').split(' ')[1] },
      { icon: '❖', value: embryi, label: 'embryí' },
      { icon: '❋', value: transferu, label: 'transferů' },
    ]),

    `<div class="stack" style="gap:.8rem;margin-top:1.6rem">${list.map(radek).join('')}</div>`,

    note(
      'Čísla jsou součet toho, co máte zapsané. Aplikace je nevykládá a nepočítá z nich žádné šance.',
    ),
  ].join('')
}

/** Předvyplněné stadium pro nově přidaný den — jen návrh, dá se přepsat. */
export function stageForDay(day: number): EmbryoStage {
  return STAGE_BY_DAY[day] ?? ''
}

export type { EmbryoFate, PgtKind, PgtResult, ThawResult }

/** Kontrola, jestli je řetězec platná sekce vyšetření. */
export function isExamWho(s: string): s is ExamWho {
  return s === 'zena' || s === 'partner' || s === 'dalsi'
}

/** Poslední den kultivace embrya — pro popisky v jiných obrazovkách. */
export function embryoLastDay(e: Embryo): number | null {
  return lastDay(e)?.day ?? null
}

/** Datum dnešního dne pro předvyplnění formulářů. */
export function today(): string {
  return viewDate()
}
