import { MODIFIER_LABELS, MODIFIER_IDS, type ModifierId } from '../lib/domain/profile'
import { PHASES, PHASE_IDS, PHASE_GROUP_META } from '../lib/domain/phases'
import { addDays, formatCzechDate, czDays } from '../lib/domain/dates'
import { autoEventsFor } from '../lib/domain/auto-events'
import { groupSpecsFor, communityName } from '../lib/domain/community-match'
import { adviceFor } from '../lib/domain/partner'
import { LAB_BY_KEY } from '../lib/health/lab-params'
import { guidanceFor } from '../lib/health/lab-guidance'
import { EVENT_KINDS, LETTER_TARGETS } from '../lib/shared/records'
import { CATALOG, CONTENT_STATS, PRODUCTS } from '../lib/content'
import {
  cycleTitle,
  OUTCOME_LABEL,
  sortedTransfers,
  TRANSFER_OUTCOME_LABEL,
  type CycleRow,
} from '../lib/domain/cycle'
import { photoStrip } from './photo-ui'
import { contentCard, empty, esc, head, heroStyle, lineChart, md, note, plural, sectionTitle } from './ui'
import { DOC_KIND_LABEL, eventState, journey, moodAverage, profile, S, viewDate, type DocKind } from './store'
import { SEED_POSTS } from './seed'
import { ROUTES } from './onboarding'

/** Rozcestník a všechny obrazovky, které z něj vedou. */

/** Lidský název kotevního data. Pro vysvětlení, proč fáze vyšla takhle. */
const ANCHOR_LABELS: Record<string, string> = {
  tryingSince: 'začátku snažení',
  diagnosticsStartedOn: 'začátku vyšetření',
  iuiOn: 'inseminace',
  stimulationStartOn: 'začátku stimulace',
  retrievalOn: 'odběru',
  transferOn: 'transferu',
  betaTestOn: 'odběr hCG',
  lossOn: 'ztráty',
  lastPeriodOn: 'poslední menstruace',
  dueDate: 'termínu porodu',
  birthOn: 'narození',
  nicuAdmissionOn: 'přijetí na oddělení',
  cameHomeOn: 'návratu domů',
}

export function screenVice(): string {
  const state = journey()
  const p = profile()

  const items: [string, string, string, string][] = [
    ['cesta', '❖', 'Vaše cesta', `Všech ${PHASE_IDS.length} fází. Kde jste byla, kde jste a co přijde.`],
    ['knihovna', '❧', 'Knihovna', `${CONTENT_STATS.items} materiálů. Hledejte cokoliv.`],
    ['checklisty', '✓', 'Checklisty', 'Ať na nic nezapomenete. A odškrtnuté zůstane odškrtnuté.'],
    ['kalendar', '◈', 'Kalendář a léky', 'Termíny a léky. Část se doplní automaticky z vaší fáze.'],
    ['zdravi', '◉', 'Zdraví', 'Vaše hodnoty v čase. Graf ukazuje vývoj, ne diagnózu.'],
    ['dokumenty', '▤', 'Dokumenty', 'Vložte text lékařské zprávy a vytáhneme z něj hodnoty.'],
    ['komunita', '◍', 'Komunita', 'Ženy ve stejné fázi. Můžete zůstat anonymní.'],
    ['pribeh', '❦', 'Můj příběh', 'Časová osa a dopisy. Jednou z toho může být kniha.'],
    ['obchod', '◇', 'Doporučené', 'Produkty a služby řazené podle toho, kde jste. Bez placených pozic.'],
    ['partner', '♡', 'Partner mode', 'Co ukázat tomu, kdo je vedle vás. Deník zůstává soukromý.'],
    ['clenstvi', '✦', 'Členství', 'Jak by platforma fungovala jako předplatné.'],
    ['nastaveni', '⚙', 'Nastavení', 'Fáze, situace, vzhled a vaše data.'],
  ]

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(p.displayName ? `${p.displayName} · ` : '')}${esc(PHASE_GROUP_META[state.group].name)}</p>
      <h1 class="display">Více</h1>
      <p class="lede">${esc(state.dayLabel)}. Všechno ostatní, co aplikace umí. A u každé položky je napsané, k čemu je.</p>
    </header>`,
    `<div class="tiles">${items.map(([r, i, t, b]) => `<button class="tile" data-go="${r}"><i>${i}</i><span style="min-width:0"><h4 class="display">${esc(t)}</h4><p>${esc(b)}</p></span><span class="go">›</span></button>`).join('')}</div>`,
    `<section class="center" style="border-top:1px solid var(--line);padding-top:2rem">
      <p class="soft" style="font-size:.9375rem">Chcete vidět, jak se obsah skládá?</p>
      <button class="btn btn-sm" data-go="proc" style="margin-top:.75rem">Proč vidím právě tohle</button>
    </section>`,
  ].join('')
}

/**
 * Profil.
 *
 * Všechno, co je „o mně“, ne „o dnešku“: proč jdu na IVF, co mám vyšetřené,
 * co si k tomu beru mimo kliniku, kde mám papíry a jak je aplikace nastavená.
 */
export function screenProfil(): string {
  const p = profile()
  const state = journey()
  const dg = (p.diagnoses ?? []).length
  const vys = S.d.exams.filter((e) => e.done).length
  const pod = S.d.support.filter((e) => e.ongoing).length

  const c = S.d.clinic
  const items: [string, string, string, string][] = [
    ['mojediagnoza', '◈', 'Moje diagnóza', dg ? `${dg} označených důvodů` : 'Proč jdu na IVF. Může jich být víc'],
    ['klinika', '✚', 'Moje klinika', c.name.trim() || 'Kontakty, telefon i to, kam volat mimo ordinační hodiny'],
    ['vysetreni', '◉', 'Moje vyšetření', vys ? `${vys} zapsaných` : 'Co může být relevantní a co už mám za sebou'],
    ['podpora', '♡', 'Podpůrná péče', pod ? `${pod} právě využívám` : 'Co si k léčbě beru mimo kliniku'],
    ['dokumenty', '▤', 'Moje dokumenty', S.d.docs.length ? `${S.d.docs.length} uložených` : 'Papíry z kliniky na jednom místě'],
    ['otazky', '?', 'Otázky pro lékaře', 'Co se chci zeptat, než na to zapomenu'],
    ['partner', '♡', 'Pro partnera', 'Co ukázat tomu, kdo je vedle vás'],
    ['komunita', '◍', 'Komunita', 'Ženy ve stejné fázi. Můžete zůstat anonymní'],
    ['clenstvi', '✦', 'Předplatné', 'Jak funguje a jak ho spravovat'],
    ['nastaveni', '⚙', 'Nastavení', 'Fáze, situace, vzhled a vaše data'],
    ['vice', '⋯', 'Všechno ostatní', 'Rozcestník na zbytek aplikace'],
  ]

  return [
    `<header class="head rise">
      <p class="eyebrow">${esc(p.displayName ? `${p.displayName} · ` : '')}${esc(PHASE_GROUP_META[state.group].name)}</p>
      <h1 class="display">Profil</h1>
      <p class="lede">${esc(state.dayLabel)}. Všechno, co je o vás. A co si aplikace pamatuje.</p>
    </header>`,

    `<div class="tiles">${items
      .map(
        ([r, i, t, b]) =>
          `<button class="tile" data-go="${r}"><i>${i}</i><span style="min-width:0"><h4 class="display">${esc(t)}</h4><p>${esc(b)}</p></span><span class="go">›</span></button>`,
      )
      .join('')}</div>`,

    note(
      'Všechna vaše data zůstávají ve vašem zařízení. Nic se nikam neodesílá a aplikace je nikomu nesdílí. Sdílet je s lékařem můžete jen vy.',
    ),
  ].join('')
}

// -------------------------------------------------------------- kalendář ---

export interface CalItem {
  id: string
  title: string
  kind: string
  onDate: string
  note: string | null
  auto: boolean
}

/** Všechny události (vlastní i odvozené z profilu) v jednom seznamu. */
export function allEvents(): CalItem[] {
  const state = journey()
  const auto = autoEventsFor(profile(), state).map((e) => ({
    id: `auto:${e.onDate}:${e.title}`,
    title: e.title,
    kind: e.kind,
    onDate: e.onDate,
    note: e.note,
    auto: true,
  }))
  const mine = S.d.events.map((e) => ({
    id: e.id,
    title: e.title,
    kind: e.kind,
    onDate: e.onDate,
    note: e.note,
    auto: false,
  }))
  return [...mine, ...auto].sort((a, b) => a.onDate.localeCompare(b.onDate))
}

/**
 * Co vyžaduje pozornost: dnešek, zítřek a všechno, co mělo proběhnout
 * a není odškrtnuté. Tohle se ukazuje i na domovské stránce.
 */
export function reminders(today: string): CalItem[] {
  return allEvents().filter((e) => {
    const st = eventState(e.id)
    if (st.done) return false
    return e.onDate <= addDays(today, 1)
  })
}

function eventRow(e: CalItem, today: string): string {
  const meta = EVENT_KINDS[e.kind] ?? EVENT_KINDS.vlastni
  const st = eventState(e.id)
  const inDays = Math.round((Date.parse(e.onDate) - Date.parse(today)) / 86_400_000)
  const when =
    inDays === 0 ? 'dnes' : inDays === 1 ? 'zítra' : inDays > 0 ? `za ${czDays(inDays)}` : `před ${czDays(-inDays)}`
  const overdue = inDays < 0 && !st.done

  return `<div class="surface" style="padding:1.1rem 1.25rem${overdue ? ';border-color:var(--blush)' : ''}">
    <div style="display:flex;gap:.9rem;align-items:flex-start">
      <button class="check" data-act="event-done" data-arg="${esc(e.id)}" aria-pressed="${st.done}" style="width:auto;flex:none;margin-top:.1rem">
        <span class="box">✓</span>
      </button>
      <div style="flex:1;min-width:0">
        <p style="font-weight:500${st.done ? ';color:var(--fg-faint);text-decoration:line-through' : ''}">${esc(e.title)}</p>
        <p class="faint" style="margin-top:.25rem;font-size:.8125rem">
          ${esc(formatCzechDate(e.onDate, { weekday: true }))} · ${esc(when)}${overdue ? ' · neodškrtnuté' : ''}
        </p>
        ${e.note ? `<p class="soft" style="margin-top:.45rem;font-size:.875rem;line-height:1.55">${esc(e.note)}</p>` : ''}
        ${
          st.note
            ? `<p class="whybox" style="margin-top:.6rem"><strong>Vaše poznámka:</strong> ${esc(st.note)}</p>`
            : ''
        }
        <div class="row wrap" style="gap:.4rem;margin-top:.7rem">
          <button class="btn btn-ghost btn-sm" data-act="event-note-open" data-arg="${esc(e.id)}">${st.note ? 'Upravit poznámku' : 'Přidat poznámku'}</button>
          ${e.auto ? '<span class="faint" style="font-size:.6875rem;align-self:center">doplněno automaticky</span>' : `<button class="btn btn-ghost btn-sm" data-act="event-del" data-arg="${esc(e.id)}">Smazat</button>`}
        </div>
        <div id="note-${esc(e.id)}" class="notebox" hidden>
          <textarea class="field" id="noteinput-${esc(e.id)}" rows="2" placeholder="Co na termínu zaznělo? Co si příště připravit?" style="margin-top:.6rem">${esc(st.note)}</textarea>
          <button class="btn btn-sm" data-act="event-note-save" data-arg="${esc(e.id)}" style="margin-top:.5rem">Uložit poznámku</button>
        </div>
      </div>
      <span class="badge">${esc(meta.icon)} ${esc(meta.label)}</span>
    </div>
  </div>`
}

export function screenKalendar(): string {
  const today = viewDate()
  const all = allEvents()
  const need = reminders(today)

  const groups: { title: string; hint: string; items: CalItem[] }[] = [
    {
      title: 'Vyžaduje pozornost',
      hint: 'Dnes, zítra a co zůstalo neodškrtnuté',
      items: need,
    },
    {
      title: 'Tento týden',
      hint: 'Do sedmi dní',
      items: all.filter((e) => e.onDate > addDays(today, 1) && e.onDate <= addDays(today, 7) && !eventState(e.id).done),
    },
    {
      title: 'Později',
      hint: 'Za víc než týden',
      items: all.filter((e) => e.onDate > addDays(today, 7) && !eventState(e.id).done),
    },
    {
      title: 'Hotové',
      hint: 'Co už proběhlo',
      items: all.filter((e) => eventState(e.id).done).slice(-8).reverse(),
    },
  ]

  return [
    head(
      'Termíny a léky',
      'Kalendář',
      'Co plyne z vašich dat, doplníme sami. Každou událost si můžete odškrtnout a připsat k ní, co na ní zaznělo.',
    ),

    need.length
      ? `<div class="banner" style="border-color:var(--taupe)">
          <span style="color:var(--taupe)">◈</span>
          <span><strong>${esc(plural(need.length, 'věc vyžaduje', 'věci vyžadují', 'věcí vyžaduje'))} pozornost.</strong> Odškrtněte, co už proběhlo.</span>
        </div>`
      : '',

    `<section class="surface pad">
      <p class="eyebrow">Přidat událost</p>
      <div class="formrow" style="margin-top:.9rem"><label class="label" for="ev-title">Co to je</label>
        <input class="field" id="ev-title" placeholder="Například kontrola u lékařky" autocomplete="off"></div>
      <div class="two" style="margin-top:1.1rem">
        <div><label class="label" for="ev-date">Kdy</label><input class="field" type="date" id="ev-date" value="${esc(today)}"></div>
        <div><label class="label" for="ev-kind">Typ</label>
          <select class="field" id="ev-kind">${Object.entries(EVENT_KINDS).map(([k, v]) => `<option value="${esc(k)}">${esc(v.label)}</option>`).join('')}</select>
        </div>
      </div>
      <div class="formrow"><label class="label" for="ev-note">Poznámka</label>
        <input class="field" id="ev-note" placeholder="Nepovinné, třeba čas nebo co si vzít" autocomplete="off"></div>
      <button class="btn btn-primary" data-act="event-add" style="margin-top:1.25rem">Přidat do kalendáře</button>
    </section>`,

    ...groups.map((g) =>
      g.items.length
        ? `<section>${sectionTitle(g.title, `${g.hint} · ${plural(g.items.length, 'událost', 'události', 'událostí')}`)}
            <div class="stack" style="gap:.75rem">${g.items.map((e) => eventRow(e, today)).join('')}</div>
          </section>`
        : '',
    ),

    all.length === 0
      ? empty('Zatím nic v kalendáři', 'Přidejte si termín, nebo doplňte data v nastavení. Část událostí pak vznikne sama.')
      : '',

    `<section class="surface pad">
      <p class="eyebrow">Léky</p>
      <div class="two" style="margin-top:1rem">
        <div><label class="label" for="med-name">Název</label><input class="field" id="med-name" placeholder="Například progesteron" autocomplete="off"></div>
        <div><label class="label" for="med-time">Kdy</label><input class="field" id="med-time" placeholder="Například 20:00" autocomplete="off"></div>
      </div>
      <button class="btn btn-sm" data-act="med-add" style="margin-top:1rem">Přidat lék</button>
      ${
        S.d.meds.length
          ? `<ul class="linelist">${S.d.meds
              .map(
                (m) =>
                  `<li><span>${esc(m.name)}</span>${m.timeOfDay ? `<span class="faint num" style="margin-left:auto;font-size:.75rem">${esc(m.timeOfDay)}</span>` : ''}<button class="btn btn-ghost btn-sm" data-act="med-del" data-arg="${esc(m.id)}">×</button></li>`,
              )
              .join('')}</ul>`
          : '<p class="faint" style="margin-top:1rem;font-size:.8125rem">Zatím žádné. Dávkování si vždycky řiďte předpisem od lékaře. Aplikace ho nenavrhuje.</p>'
      }
    </section>`,
  ].join('')
}

// -------------------------------------------------------------- dokumenty ---

export function screenDokumenty(): string {
  const docs = [...S.d.docs].sort((a, b) => (b.onDate ?? '').localeCompare(a.onDate ?? ''))
  const groups = (Object.keys(DOC_KIND_LABEL) as DocKind[])
    .map((kind) => ({ kind, items: docs.filter((d) => (d.kind ?? 'zprava') === kind) }))
    .filter((g) => g.items.length > 0)

  const card = (d: (typeof docs)[number]) => `<div class="surface" style="padding:1.1rem 1.25rem">
    <div class="row wrap" style="justify-content:space-between;gap:.5rem;align-items:baseline">
      <p style="font-weight:500;min-width:0">${esc(d.title)}</p>
      <span class="faint" style="font-size:.8125rem;white-space:nowrap">${esc(formatCzechDate(d.onDate ?? d.addedOn))}</span>
    </div>
    ${d.note?.trim() ? `<p class="soft" style="margin-top:.45rem;font-size:.875rem;line-height:1.6">${esc(d.note)}</p>` : ''}
    ${
      d.found?.length
        ? `<div class="chips" style="margin-top:.6rem">
            ${d.found
              .map(
                (f) =>
                  `<button data-go="hodnota/${esc(f.paramKey)}">${esc(LAB_BY_KEY[f.paramKey]?.name ?? f.paramKey)}: ${f.value} ${esc(f.unit)}</button>`,
              )
              .join('')}
          </div>`
        : ''
    }
    ${photoStrip(`doc:${d.id}`, d.photos ?? [], 'Fotky dokumentu')}
    <button class="btn btn-ghost btn-sm" data-act="doc-del" data-arg="${esc(d.id)}" style="margin-top:.8rem">Smazat dokument</button>
  </div>`

  return [
    head(
      'Moje dokumenty',
      'Dokumenty',
      'Papíry z kliniky na jednom místě. Aplikace je neanalyzuje a nevykládá, jenom je uspořádá tak, abyste je našla, když je budete potřebovat.',
    ),

    `<section class="surface pad">
      <p class="eyebrow">Přidat dokument</p>
      <div class="two" style="margin-top:1rem">
        <div>
          <label class="label" for="doc-title">Název</label>
          <input class="field" id="doc-title" placeholder="např. Zpráva z embryologie" autocomplete="off">
        </div>
        <div>
          <label class="label" for="doc-kind">Druh</label>
          <select class="field" id="doc-kind">
            ${(Object.entries(DOC_KIND_LABEL) as [string, string][])
              .map(([v, l]) => `<option value="${esc(v)}">${esc(l)}</option>`)
              .join('')}
          </select>
        </div>
      </div>
      <div style="margin-top:1.1rem">
        <label class="label" for="doc-date">Datum na dokumentu</label>
        <input class="field" type="date" id="doc-date" value="${esc(viewDate())}">
      </div>
      <div style="margin-top:1.1rem">
        <label class="label" for="doc-note">Poznámka</label>
        <textarea class="field" id="doc-note" rows="2" placeholder="Co v něm je, co z něj chcete probrat na kontrole"></textarea>
      </div>
      <div class="row wrap" style="gap:.6rem;margin-top:1.25rem">
        <button class="btn btn-primary" data-act="doc-add">Uložit dokument</button>
        <button class="btn" data-act="doc-photo">Rovnou vyfotit</button>
      </div>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">
        Fotku můžete přidat i později u každého dokumentu. Všechno zůstává ve vašem zařízení.
      </p>
    </section>`,

    docs.length === 0
      ? empty(
          'Zatím tu žádný dokument není',
          'Většina zpráv přijde na papíře a doma se ztratí. Vyfoťte je hned na klinice. V čekárně před další konzultací je budete mít po ruce.',
          '',
          '▤',
        )
      : groups
          .map(
            (g) => `<section style="margin-top:1.5rem">
              ${sectionTitle(DOC_KIND_LABEL[g.kind], plural(g.items.length, 'dokument', 'dokumenty', 'dokumentů'))}
              <div class="stack" style="gap:.6rem">${g.items.map(card).join('')}</div>
            </section>`,
          )
          .join(''),

    note(
      'Aplikace dokumenty **nečte a nevyhodnocuje.** Hodnoty se zapisují ručně ve Zdraví, aby v záznamu nikdy nebylo špatně přečtené číslo. Dokumenty nikam neodcházejí. Sdílet je s lékařem můžete jen vy.',
    ),
  ].join('')
}

// --------------------------------------------------------------- komunita ---

export function screenKomunita(): string {
  const state = journey()
  const p = profile()
  const groups = groupSpecsFor(p, state)
  const me = communityName(p, state)

  return [
    head(`Vystupujete jako ${me}`, 'Komunita', 'Skupiny se párují podle vašeho příběhu. Fáze, měsíc transferu, diagnóza, klinika, věk. Ne podle náhody.'),

    `<section>${sectionTitle('Vaše skupiny', `${plural(groups.length, 'skupina', 'skupiny', 'skupin')} podle vašeho profilu`)}
      <div class="tiles">
        ${groups
          .map(
            (g) =>
              `<button class="tile" data-go="skupina/${esc(g.slug)}"><i>◍</i><span style="min-width:0"><h4 class="display">${esc(g.name)}</h4><p>${esc(g.description)}</p></span><span class="go">›</span></button>`,
          )
          .join('')}
      </div>
    </section>`,

    note(
      'Profil může být zcela anonymní. Komunita nikdy nevidí skutečné jméno ani zdravotní údaje. Přepnout to jde v nastavení.',
    ),
  ].join('')
}

export function screenSkupina(slug: string): string {
  const state = journey()
  const p = profile()
  const group = groupSpecsFor(p, state).find((g) => g.slug === slug)
  if (!group) return empty('Skupina nenalezena', 'Vraťte se do komunity a vyberte si znovu.', '<button class="btn" data-go="komunita">Do komunity</button>')

  const mine = S.d.posts.filter((x) => x.groupSlug === slug)
  const seeded = slug === 'vecerni-kruh' || group.kind === 'phase' ? SEED_POSTS[state.group] ?? [] : []

  const post = (
    author: string,
    body: string,
    hearts: number,
    replies: { author: string; body: string }[],
    id?: string,
    hearted = false,
  ) => `<div class="post">
    <div class="row wrap" style="gap:.6rem">
      <span class="badge">${esc(author)}</span>
      ${id ? '<span class="faint" style="font-size:.75rem">váš příspěvek</span>' : '<span class="faint" style="font-size:.75rem">ukázkový příspěvek</span>'}
    </div>
    <p style="margin-top:.85rem;font-size:1rem;line-height:1.65">${esc(body)}</p>
    <div class="row" style="gap:.75rem;margin-top:.85rem">
      <button class="btn btn-ghost btn-sm" ${id ? `data-act="heart" data-arg="${esc(id)}"` : 'disabled'}>${hearted ? '♥' : '♡'} <span class="num">${hearts}</span></button>
      ${id ? `<button class="btn btn-ghost btn-sm" data-act="post-del" data-arg="${esc(id)}">Smazat</button>` : ''}
    </div>
    ${replies
      .map(
        (r) =>
          `<div class="reply"><p class="faint" style="font-size:.75rem">${esc(r.author)}</p><p class="soft" style="margin-top:.3rem;font-size:.9375rem;line-height:1.6">${esc(r.body)}</p></div>`,
      )
      .join('')}
  </div>`

  return [
    `<header class="head rise">
      <p class="eyebrow">Komunita</p>
      <h1 class="display">${esc(group.name)}</h1>
      <p class="lede">${esc(group.description)}</p>
    </header>`,

    `<section class="surface pad">
      <p class="eyebrow">Napsat do skupiny</p>
      <textarea class="field" id="post-body" rows="3" placeholder="Co potřebujete říct nahlas?" style="margin-top:.9rem"></textarea>
      <div class="row wrap" style="gap:.75rem;margin-top:1rem;justify-content:space-between">
        <span class="faint" style="font-size:.8125rem">Podepíše se jako ${esc(communityName(p, state))}</span>
        <button class="btn btn-primary btn-sm" data-act="post-add" data-arg="${esc(slug)}">Odeslat</button>
      </div>
    </section>`,

    `<div class="stack" style="gap:1rem">
      ${mine.map((x) => post(x.author, x.body, x.hearts, x.replies, x.id, x.hearted)).join('')}
      ${seeded.map((x) => post(x.author, x.body, x.hearts, x.replies)).join('')}
      ${!mine.length && !seeded.length ? empty('Zatím ticho', 'Buďte první, kdo sem napíše.') : ''}
    </div>`,
  ].join('')
}

// -------------------------------------------------------------- můj příběh ---

/** Spojí části a zahodí prázdné. */
function join(parts: (string | false | null | undefined)[], sep = ' · '): string {
  return parts.filter((x): x is string => Boolean(x && x.trim())).join(sep)
}

const MOOD_LABEL: Record<number, string> = {
  1: 'Nejtěžší den',
  2: 'Těžké',
  3: 'Smíšené',
  4: 'Dobré',
  5: 'Nezapomenutelné',
}

/**
 * Milníky léčby na osu příběhu.
 *
 * Kronika, do které se musí všechno psát ručně, zůstane prázdná. Tohle
 * dotáhne to, co už žena zapsala jinde. Začátek cyklu, odběr, každý
 * transfer i jeho výsledek, aby se cesta skládala sama.
 */
function storyFromCycle(c: CycleRow): { onDate: string; title: string; body: string; icon: string; id: string }[] {
  const out: { onDate: string; title: string; body: string; icon: string; id: string }[] = []
  const put = (date: string | null, title: string, body = '', icon = '✧'): void => {
    if (date) out.push({ onDate: date, title, body, icon, id: '' })
  }

  put(c.cd1On ?? c.startedOn, `${cycleTitle(c)} začal`, join([c.clinic.trim(), c.protocol.trim()]), '✧')
  put(c.retrievalOn, 'Odběr vajíček', c.eggs !== null ? plural(c.eggs, 'vajíčko', 'vajíčka', 'vajíček') : '', '◍')

  const list = sortedTransfers(c)
  list.forEach((t, i) => {
    const nazev = list.length > 1 ? `${i + 1}. transfer` : 'Transfer'
    put(
      t.date,
      t.cancelled ? `${nazev}. Zrušen` : nazev,
      t.cancelled ? t.cancelReason : TRANSFER_OUTCOME_LABEL[t.outcome],
      '❋',
    )
  })

  if (c.outcome !== 'probiha') put(c.endedOn, `${cycleTitle(c)} uzavřen`, OUTCOME_LABEL[c.outcome], '●')

  return out
}

export function screenPribeh(): string {
  const state = journey()

  // Milníky z profilu i z léčby. Kronika se má skládat sama. Žena, která
  // si měsíc nic nezapsala, tu nesmí najít prázdno.
  const auto = [
    ...state.milestones.map((m) => ({ onDate: m.date, title: m.label, body: '', icon: m.icon, id: '' })),
    ...S.d.cycles.flatMap((c) => storyFromCycle(c)),
  ]
  const entries = [...S.d.story.map((r) => ({ ...r })), ...auto].sort((a, b) =>
    b.onDate.localeCompare(a.onDate),
  )
  const roky = [...new Set(entries.map((e) => e.onDate.slice(0, 4)))].sort().reverse()

  return [
    head(
      'Moje kronika',
      'Můj příběh',
      'Chronologie celé cesty. Od prvního snažení po dnešek. Milníky léčby se doplňují samy, vzpomínky a fotky přidáváte vy. Jednou z toho může být kniha.',
    ),

    `<section class="surface pad">
      <p class="eyebrow">Přidat vzpomínku</p>
      <div class="formrow"><label class="label" for="st-title">Co se stalo</label><input class="field" id="st-title" placeholder="Například: první ultrazvuk" autocomplete="off"></div>
      <div class="formrow"><label class="label" for="st-body">Jak to bylo</label><textarea class="field" id="st-body" rows="3" placeholder="Pár vět. Za rok si je nebudete pamatovat."></textarea></div>
      <div class="two" style="margin-top:1.1rem">
        <div><label class="label" for="st-date">Kdy</label><input class="field" type="date" id="st-date" value="${esc(viewDate())}"></div>
        <div><label class="label" for="st-mood">Jak mi u toho bylo</label>
          <select class="field" id="st-mood">
            <option value="">Nezapisovat</option>
            <option value="1">Nejtěžší den</option>
            <option value="2">Těžké</option>
            <option value="3">Smíšené</option>
            <option value="4">Dobré</option>
            <option value="5">Nezapomenutelné</option>
          </select></div>
      </div>
      <button class="btn btn-primary" data-act="story-add" style="margin-top:1.25rem">Přidat na osu</button>
    </section>`,

    entries.length
      ? `<section>${sectionTitle('Moje cesta k miminku', `${plural(entries.length, 'záznam', 'záznamy', 'záznamů')}${roky.length > 1 ? ` · ${roky[roky.length - 1]}–${roky[0]}` : ''}`)}
          <ul class="timeline">
            ${entries
              .map(
                (t) => `<li>
                  <span class="dot">${esc(t.icon || '❦')}</span>
                  <div>
                    <p class="faint" style="font-size:.75rem">${esc(formatCzechDate(t.onDate, { year: true }))}</p>
                    <p class="display" style="font-size:1.2rem;margin-top:.2rem">${esc(t.title)}</p>
                    ${t.body ? `<p class="soft" style="margin-top:.4rem;font-size:.9375rem;line-height:1.65">${esc(t.body)}</p>` : ''}
                    ${'mood' in t && t.mood ? `<span class="badge badge-soft" style="margin-top:.4rem">${esc(MOOD_LABEL[t.mood as number] ?? '')}</span>` : ''}
                    ${t.id ? photoStrip(`story:${t.id}`, ('photos' in t ? (t.photos as never[]) : []) ?? [], 'Fotky k téhle chvíli') : ''}
                    ${t.id ? `<button class="btn btn-ghost btn-sm" data-act="story-del" data-arg="${esc(t.id)}" style="margin-top:.4rem">Smazat</button>` : '<p class="faint" style="font-size:.6875rem;margin-top:.3rem">z vašich dat</p>'}
                  </div>
                </li>`,
              )
              .join('')}
          </ul>
        </section>`
      : '',

    `<section class="surface pad">
      <p class="eyebrow">Napsat dopis</p>
      <p class="soft" style="margin-top:.5rem;font-size:.9375rem;line-height:1.6">Embryu, miminku, sobě, tomu, kdo tu nezůstal. Dopisy jsou soukromé. Nikdo jiný je nevidí.</p>
      <div class="formrow" style="margin-top:1.1rem">
        <label class="label" for="lt-to">Komu</label>
        <select class="field" id="lt-to">${Object.entries(LETTER_TARGETS).map(([k, v]) => `<option value="${esc(k)}">${esc(v)}</option>`).join('')}</select>
      </div>
      <div class="formrow"><label class="label" for="lt-title">Nadpis</label><input class="field" id="lt-title" placeholder="Například: Ahoj, ty malá" autocomplete="off"></div>
      <div class="formrow"><label class="label" for="lt-body">Text</label><textarea class="field" id="lt-body" rows="5" placeholder="Pište, jak vám zobák narostl."></textarea></div>
      <button class="btn btn-primary" data-act="letter-add" style="margin-top:1.25rem">Uložit dopis</button>
    </section>`,

    S.d.letters.length
      ? `<section>${sectionTitle('Dopisy', 'Soukromé. Vždycky.')}
          <div class="stack" style="gap:1rem">
            ${S.d.letters
              .map(
                (l) => `<div class="surface grain" style="padding:clamp(1.5rem,4vw,2.5rem);${heroStyle('pearl')}">
                  <p class="eyebrow" style="color:rgb(43 37 33 / .5);position:relative;z-index:1">${esc(formatCzechDate(l.onDate, { year: true }))} · ${esc(LETTER_TARGETS[l.toWhom])}</p>
                  <h3 class="display" style="font-size:1.6rem;margin-top:.5rem;color:#2b2521;position:relative;z-index:1">${esc(l.title)}</h3>
                  <div class="prose" style="color:rgb(43 37 33 / .78);margin-top:1rem;position:relative;z-index:1">${md(l.body)}</div>
                  <button class="btn btn-ghost btn-sm" data-act="letter-del" data-arg="${esc(l.id)}" style="margin-top:1rem;position:relative;z-index:1;color:rgb(43 37 33 / .6)">Smazat</button>
                </div>`,
              )
              .join('')}
          </div>
        </section>`
      : '',
  ].join('')
}

// -------------------------------------------------------------- doporučené ---

export function screenObchod(): string {
  const state = journey()
  const mods = new Set(profile().modifiers)

  const scored = PRODUCTS.map((p) => {
    if (p.excludeModifiers?.some((m) => mods.has(m))) return { p, score: -1 }
    let score = 0
    if (p.phases.includes(state.phase.id)) score += 10
    else if (p.phases.some((ph) => PHASES[ph].group === state.group)) score += 5
    if (p.modifiers?.some((m) => mods.has(m))) score += 4
    if (p.phases.length === 0) score += 1
    return { p, score }
  })
    .filter((x) => x.score >= 0)
    .sort((a, b) => b.score - a.score)

  const relevant = scored.filter((x) => x.score >= 5)
  const rest = scored.filter((x) => x.score < 5)

  const card = (p: (typeof PRODUCTS)[number]) => `<div class="prodcard">
    <div class="hero grain" style="${heroStyle(p.hero)}"></div>
    <div class="body">
      <div class="row" style="justify-content:space-between;gap:.5rem">
        <span class="badge">${p.kind === 'service' ? 'Služba' : 'Produkt'}</span>
        <span class="faint num" style="font-size:.75rem">★ ${p.rating.toFixed(1)} · ${p.reviews}</span>
      </div>
      <h4 class="display" style="font-size:1.125rem">${esc(p.name)}</h4>
      <p class="whybox">${esc(p.whyNow)}</p>
      <p class="faint num" style="margin-top:auto;font-size:.8125rem">${p.priceFrom ? `od ${p.priceFrom} Kč` : 'individuálně'} · ${esc(p.vendor)}</p>
    </div>
  </div>`

  return [
    head('Bez placených pozic', 'Doporučené', 'Řazeno podle toho, kde jste na cestě. U každé položky je napsané, proč se hodí právě teď.'),

    relevant.length
      ? `<section>${sectionTitle('Hodí se vám teď', `Pro fázi: ${PHASES[state.phase.id].name}`)}
          <div class="grid-cards">${relevant.map((x) => card(x.p)).join('')}</div></section>`
      : '',

    rest.length
      ? `<section>${sectionTitle('Ostatní', 'Mimo vaši fázi')}
          <div class="grid-cards">${rest.slice(0, 12).map((x) => card(x.p)).join('')}</div></section>`
      : '',

    note('Pořadí určuje jenom relevance k vaší fázi. Nikdo si tu nekupuje lepší místo.'),
  ].join('')
}

// ------------------------------------------------------------- partner mode ---

export function screenPartner(): string {
  const state = journey()
  const advice = adviceFor(state.group, state.phase.tone)
  const avg = moodAverage(7)
  const forPartner = CATALOG.filter((c) => c.topics.includes('partner')).slice(0, 6)

  return [
    head('Pro toho, kdo je vedle', 'Partner mode', 'Konkrétní rady místo „buď oporou“. Ukažte tuhle obrazovku partnerovi.'),

    `<section class="surface pad">
      <p class="eyebrow">Co právě prožívá</p>
      <p class="soft" style="margin-top:.75rem;font-size:1.0625rem;line-height:1.7">${esc(advice.whatsHappening)}</p>
      <div class="row wrap" style="gap:.75rem;margin-top:1.25rem">
        <span class="badge">${esc(state.phase.title)}</span>
        ${avg !== null ? `<span class="badge">Průměrná nálada za týden: <b class="num" style="margin-left:.25rem">${avg}/5</b></span>` : '<span class="badge">Nálada zatím nezapsaná</span>'}
      </div>
    </section>`,

    `<section class="two">
      <div class="surface pad">
        <h3 class="display" style="font-size:1.25rem">Co pomáhá</h3>
        <ul class="bullets">${advice.do.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
      <div class="surface pad" style="border-color:var(--blush)">
        <h3 class="display" style="font-size:1.25rem">Čemu se vyhnout</h3>
        <ul class="bullets">${advice.dont.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </div>
    </section>`,

    note('Partner vidí fázi, průměrnou náladu a rady. **Nevidí deník, dopisy ani zdravotní hodnoty**: a nikdy je neuvidí.'),

    forPartner.length
      ? `<section>${sectionTitle('Ke čtení pro partnera', 'Z knihovny')}<div class="rail">${forPartner.map((i) => contentCard(i)).join('')}</div></section>`
      : '',
  ].join('')
}

// -------------------------------------------------------------- nastavení ---

export function screenNastaveni(): string {
  const p = profile()
  const state = journey()
  const currentRoute = ROUTES.find((r) => r.phase === p.declaredPhase)

  const modGroups: [string, ModifierId[]][] = [
    ['Diagnózy', ['pcos', 'endometriosis', 'adenomyosis', 'low_amh', 'male_factor', 'tubal_factor', 'thyroid', 'thrombophilia', 'immunology', 'unexplained']],
    ['Léčba', ['icsi', 'pgt', 'frozen_transfer', 'donor_egg', 'donor_sperm', 'donor_embryo', 'surrogacy']],
    ['U transferu', ['twins']],
    ['Situace', ['after_loss', 'repeated_failure', 'single_mother', 'same_sex_couple', 'secondary_infertility']],
  ]

  return [
    head('Vaše nastavení', 'Nastavení', 'Všechno se dá kdykoliv změnit. Obsah se hned přepočítá.'),

    `<section class="surface pad">
      <p class="eyebrow">Připomínky</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">
        Připomínky léků, injekcí, kontrol a odběrů se ukazují na obrazovce Dnes
        a v kalendáři. U každého léku se dá zvlášť vypnout v Lécích.
      </p>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">
        Systémová upozornění mimo aplikaci zatím neposíláme. Slibovat, že vás
        aplikace v půl deváté klepne po rameni, a pak to neudělat, je u léku,
        který se píchá na minutu přesně, horší než nic neslibovat.
      </p>
      <button class="btn btn-ghost btn-sm" data-go="leky/protokol" style="margin-top:1rem">Nastavit u léků</button>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Kde jste na cestě</p>
      <p class="soft" style="margin-top:.5rem;font-size:.9375rem">Teď: <strong>${esc(state.phase.title)}</strong> · ${esc(state.dayLabel)}</p>
      <div class="formrow" style="margin-top:1.1rem">
        <label class="label" for="set-phase">Fáze</label>
        <select class="field" id="set-phase" data-act="set-phase">
          <option value="" ${p.declaredPhase === null ? 'selected' : ''}>– odvodit z dat –</option>
          ${PHASE_IDS.filter((id) => PHASES[id].selectableAtOnboarding)
            .map((id) => `<option value="${esc(id)}" ${p.declaredPhase === id ? 'selected' : ''}>${esc(PHASES[id].name)}</option>`)
            .join('')}
        </select>
      </div>
      ${
        p.declaredPhase && p.declaredPhase !== state.phase.id
          ? `<div class="banner" style="margin-top:1rem;border-color:var(--sand)">
              <span style="color:var(--taupe)">◈</span>
              <span>Počítáme vás jako <strong>${esc(state.phase.name)}</strong>${
                state.anchorDate ? `, protože máte vyplněné datum ${esc(ANCHOR_LABELS[state.phase.anchor ?? ''] ?? 'události')} (${esc(formatCzechDate(state.anchorDate))})` : ''
              }. Podle data se cesta posouvá sama, aby se nezastavila v den, kdy jste si fázi nastavila. Když nesedí, změňte datum níž.</span>
            </div>`
          : ''
      }
      ${
        currentRoute?.field
          ? `<div class="formrow">
              <label class="label" for="set-date">${esc(currentRoute.dateLabel)}</label>
              <input class="field" type="date" id="set-date" value="${esc(p[currentRoute.field] ?? '')}" data-act="set-date" data-arg="${esc(currentRoute.field)}">
            </div>`
          : ''
      }
      <p class="faint" style="margin-top:.85rem;font-size:.8125rem;line-height:1.55">Fáze se odvozuje i sama z dat, když zadáte datum porodu, aplikace se posune, i kdybyste to tu nechala.</p>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Klíčová data</p>
      <div class="two" style="margin-top:1rem">
        ${(
          [
            ['stimulationStartOn', 'Začátek stimulace'],
            ['retrievalOn', 'Odběr vajíček'],
            ['transferOn', 'Transfer'],
            ['betaTestOn', 'Odběr hCG'],
          ] as const
        )
          .map(
            ([field, label]) =>
              `<div><label class="label" for="d-${field}">${label}</label><input class="field" type="date" id="d-${field}" value="${esc(p[field] ?? '')}" data-act="set-date" data-arg="${field}"></div>`,
          )
          .join('')}
      </div>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Co se vás týká</p>
      ${modGroups
        .map(
          ([title, ids]) => `<div style="margin-top:1.25rem">
            <p class="label">${title}</p>
            <div class="chips">
              ${ids
                .filter((m) => MODIFIER_IDS.includes(m))
                .map((m) => `<button data-act="mod" data-arg="${m}" aria-pressed="${p.modifiers.includes(m)}">${esc(MODIFIER_LABELS[m])}</button>`)
                .join('')}
            </div>
          </div>`,
        )
        .join('')}
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Vy</p>
      <div class="formrow" style="margin-top:1rem">
        <label class="label" for="set-name">Jméno</label>
        <input class="field" id="set-name" value="${esc(p.displayName)}" data-act="set-name" autocomplete="off">
      </div>
      <div class="formrow">
        <label class="label" for="set-clinic">Klinika</label>
        <input class="field" id="set-clinic" value="${esc(p.clinicName ?? '')}" placeholder="Nepovinné. Přidá skupinu v komunitě" data-act="set-clinic" autocomplete="off">
      </div>
      <div style="margin-top:1.25rem">
        <button class="switch" data-act="set-anon" aria-pressed="${p.anonymousInCommunity}">
          <span><b style="font-weight:500;font-size:.9375rem">V komunitě anonymně</b>
          <span class="soft" style="display:block;font-size:.8125rem;margin-top:.2rem">Teď vystupujete jako ${esc(communityName(p, state))}</span></span>
          <span class="track"></span>
        </button>
      </div>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Vzhled</p>
      <div class="chips" style="margin-top:1rem">
        ${(
          [
            ['auto', 'Podle systému'],
            ['light', 'Světlý'],
            ['dark', 'Tmavý'],
          ] as const
        )
          .map(([v, l]) => `<button data-act="theme" data-arg="${v}" aria-pressed="${S.d.theme === v}">${l}</button>`)
          .join('')}
      </div>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Vaše data</p>
      <p class="soft" style="margin-top:.6rem;font-size:.9375rem;line-height:1.65">Všechno, co jste zapsala (profil, deník, hodnoty, dopisy) je uložené jen v tomhle prohlížeči. Nikam se to neodesílá.</p>
      <dl class="kv" style="margin-top:1rem">
        <dt>Zápisů v deníku</dt><dd class="num">${Object.keys(S.d.journal).length}</dd>
        <dt>Hodnot</dt><dd class="num">${S.d.labs.length}</dd>
        <dt>Dopisů</dt><dd class="num">${S.d.letters.length}</dd>
        <dt>Uloženého obsahu</dt><dd class="num">${S.d.saved.length}</dd>
      </dl>
      <div class="row wrap" style="gap:.6rem;margin-top:1.25rem">
        <button class="btn btn-sm" data-act="export">Stáhnout moje data</button>
        <button class="btn btn-sm" data-act="forget">Zapomenout naučené zájmy</button>
        <button class="btn btn-sm" data-act="wipe" style="border-color:var(--blush)">Smazat všechno</button>
      </div>
    </section>`,
  ].join('')
}

// --------------------------------------------------------------- členství ---

export function screenClenstvi(): string {
  const aktivni = S.d.subscription?.active ?? false
  const od = S.d.subscription?.since ?? null

  const zahrnuto = [
    'Celý odborný obsah. Články, checklisty, slovník, „Co když…“',
    'Moje IVF cykly: stimulace, odběr, embrya, transfery, výsledky',
    'Karta pro každé embryo a pro každý transfer, bez omezení počtu',
    'Deník, kalendář, připomínky a otázky pro lékaře',
    'Dokumenty a fotky z kliniky ve vašem zařízení',
    'Podpora ve všech výsledcích, nejen v tom, který skončí pozitivně',
  ]

  return [
    head(
      'Předplatné',
      '199 Kč měsíčně',
      'Jedna cena za celou aplikaci. Neprodáváme jednotlivé články a neplatíte za „šťastný konec“. Obsah pro negativní hCG, zrušený transfer nebo ztrátu je v ceně stejně jako ten ostatní.',
    ),

    `<section class="surface pad rise">
      <div class="row wrap" style="justify-content:space-between;gap:1rem;align-items:baseline">
        <div>
          <p class="eyebrow">${aktivni ? 'Aktivní' : 'Neaktivní'}</p>
          <p class="display" style="font-size:2.2rem;margin-top:.35rem">199 Kč</p>
          <p class="faint" style="font-size:.8125rem">za měsíc · kdykoli zrušíte</p>
        </div>
        <button class="btn ${aktivni ? 'btn-ghost' : 'btn-primary'}" data-act="sub-toggle">
          ${aktivni ? 'Zrušit předplatné' : 'Aktivovat předplatné'}
        </button>
      </div>
      ${
        aktivni && od
          ? `<p class="faint" style="margin-top:1rem;font-size:.8125rem">Aktivní od ${esc(formatCzechDate(od))}. Po zrušení vám data zůstanou. Jsou ve vašem zařízení.</p>`
          : ''
      }
      <ul class="bullets" style="margin-top:1.3rem">${zahrnuto.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Proč jedna cena</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
        Kdyby se platilo za jednotlivé texty, aplikace by měla důvod psát jich co nejvíc
        a řadit dopředu ty, které se dobře prodávají. To by v léčbě dopadlo špatně.
        Předplatné znamená, že se vyplatí psát to, co se vás právě týká. A nic víc.
      </p>
      <p class="soft" style="margin-top:.9rem;line-height:1.7;font-size:.9375rem">
        Nikdo si tu nekupuje lepší pozici a data se neprodávají. Z toho plyne i to,
        jak vypadá marketplace: řadí se podle vaší fáze, ne podle provize.
      </p>
    </section>`,

    note(
      'V téhle verzi je aplikace otevřená a tlačítko jen přepíná stav. Žádná platba neprobíhá a nikam se neposílají žádné údaje.',
    ),
  ].join('')
}
