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
import { contentCard, empty, esc, head, heroStyle, lineChart, md, note, plural, sectionTitle } from './ui'
import { eventState, journey, moodAverage, profile, S, viewDate } from './store'
import { SEED_POSTS } from './seed'
import { ROUTES } from './onboarding'

/** Rozcestník a všechny obrazovky, které z něj vedou. */

/** Lidský název kotevního data — pro vysvětlení, proč fáze vyšla takhle. */
const ANCHOR_LABELS: Record<string, string> = {
  tryingSince: 'začátku snažení',
  diagnosticsStartedOn: 'začátku vyšetření',
  iuiOn: 'inseminace',
  stimulationStartOn: 'začátku stimulace',
  retrievalOn: 'odběru',
  transferOn: 'transferu',
  betaTestOn: 'beta hCG',
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
    ['checklisty', '✓', 'Checklisty', 'Ať na nic nezapomenete — a odškrtnuté zůstane odškrtnuté.'],
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
      <p class="lede">${esc(state.dayLabel)}. Všechno ostatní, co aplikace umí — a u každé položky je napsané, k čemu je.</p>
    </header>`,
    `<div class="tiles">${items.map(([r, i, t, b]) => `<button class="tile" data-go="${r}"><i>${i}</i><span style="min-width:0"><h4 class="display">${esc(t)}</h4><p>${esc(b)}</p></span><span class="go">›</span></button>`).join('')}</div>`,
    `<section class="center" style="border-top:1px solid var(--line);padding-top:2rem">
      <p class="soft" style="font-size:.9375rem">Chcete vidět, jak se obsah skládá?</p>
      <button class="btn btn-sm" data-go="proc" style="margin-top:.75rem">Proč vidím právě tohle</button>
    </section>`,
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

/** Všechny události — vlastní i odvozené z profilu — v jednom seznamu. */
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
        <input class="field" id="ev-note" placeholder="Nepovinné — třeba čas nebo co si vzít" autocomplete="off"></div>
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
      ? empty('Zatím nic v kalendáři', 'Přidejte si termín, nebo doplňte data v nastavení — část událostí pak vznikne sama.')
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
          : '<p class="faint" style="margin-top:1rem;font-size:.8125rem">Zatím žádné. Dávkování si vždycky řiďte předpisem od lékaře — aplikace ho nenavrhuje.</p>'
      }
    </section>`,
  ].join('')
}

// -------------------------------------------------------------- dokumenty ---

export function screenDokumenty(
  parsed: { values: { paramKey: string; paramName: string; value: number; unit: string }[]; detectedDate: string | null } | null,
): string {
  return [
    head(
      'Zprávy a nálezy',
      'Dokumenty',
      'Vložte text lékařské zprávy. Vytáhneme z něj hodnoty, vysvětlíme pojmy a ukážeme, co s tím dál — nikdy ale nehodnotíme, jestli je výsledek dobrý.',
    ),

    `<section class="surface pad">
      <label class="label" for="doc-text">Text zprávy</label>
      <textarea class="field" id="doc-text" rows="7" placeholder="Zkopírujte sem text ze zprávy, například:&#10;AMH 1,2 ng/ml&#10;FSH 7,4 IU/l&#10;TSH 2,1 mIU/l"></textarea>
      <button class="btn btn-primary" data-act="doc-parse" style="margin-top:1.1rem">Rozpoznat hodnoty</button>
      <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.55">Rozpoznávání je deterministické — hledá dvojice parametr a číslo. Nic se nikam neodesílá.</p>
    </section>`,

    parsed
      ? parsed.values.length
        ? `<section>
            ${sectionTitle(
              `Našli jsme ${plural(parsed.values.length, 'hodnotu', 'hodnoty', 'hodnot')}`,
              parsed.detectedDate ? `Datum ve zprávě: ${formatCzechDate(parsed.detectedDate)}` : 'Datum se ve zprávě nepodařilo najít',
            )}
            <div class="stack" style="gap:.75rem">
              ${parsed.values
                .map((v) => {
                  const param = LAB_BY_KEY[v.paramKey]
                  const g = guidanceFor(v.paramKey)
                  return `<div class="surface" style="padding:1.15rem 1.3rem">
                    <div class="row wrap" style="justify-content:space-between;gap:.5rem">
                      <p style="font-weight:500">${esc(v.paramName)}</p>
                      <p class="num" style="font-weight:600">${v.value} ${esc(v.unit)}</p>
                    </div>
                    ${param?.explain ? `<p class="soft" style="margin-top:.5rem;font-size:.875rem;line-height:1.6">${esc(param.explain)}</p>` : ''}
                    ${g ? `<p class="whybox" style="margin-top:.6rem">${esc(g.inBody)}</p>` : ''}
                    <button class="btn btn-ghost btn-sm" data-go="hodnota/${esc(v.paramKey)}" style="margin-top:.6rem">Co to znamená a co s tím →</button>
                  </div>`
                })
                .join('')}
            </div>
            <button class="btn btn-primary" data-act="doc-save" style="margin-top:1.25rem">Uložit do Zdraví</button>
            <p class="faint" style="margin-top:.75rem;font-size:.8125rem">Po uložení uvidíte hodnoty v grafu spolu s dřívějšími.</p>
          </section>`
        : empty(
            'Žádné hodnoty jsme nenašli',
            'Parser hledá dvojice „parametr → hodnota“. Zkuste vložit i řádky s jednotkami, nebo hodnoty zadejte ručně ve Zdraví.',
            '<button class="btn" data-go="zdravi">Zadat ručně</button>',
          )
      : '',

    S.d.docs.length
      ? `<section>${sectionTitle('Uložené zprávy', 'Zůstávají ve vašem zařízení')}
          <div class="stack" style="gap:.6rem">
            ${S.d.docs
              .map(
                (d) =>
                  `<div class="surface" style="padding:1rem 1.2rem">
                    <p style="font-weight:500">${esc(d.title)}</p>
                    <p class="faint" style="font-size:.8125rem;margin-top:.2rem">${esc(formatCzechDate(d.addedOn))} · ${esc(plural(d.found.length, 'hodnota', 'hodnoty', 'hodnot'))}</p>
                    <div class="chips" style="margin-top:.6rem">
                      ${d.found
                        .map(
                          (f) =>
                            `<button data-go="hodnota/${esc(f.paramKey)}">${esc(LAB_BY_KEY[f.paramKey]?.name ?? f.paramKey)}: ${f.value} ${esc(f.unit)}</button>`,
                        )
                        .join('')}
                    </div>
                  </div>`,
              )
              .join('')}
          </div>
        </section>`
      : '',

    note(
      'Rozpoznání **nikdy neříká, jestli je výsledek dobrý nebo špatný.** Sdílení dokumentů s lékařem by v ostré verzi proběhlo jen s vaším souhlasem; tady dokumenty nikam neodcházejí.',
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
    head(`Vystupujete jako ${me}`, 'Komunita', 'Skupiny se párují podle vašeho příběhu — fáze, měsíc transferu, diagnóza, klinika, věk. Ne podle náhody.'),

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
      'Profil může být zcela anonymní — komunita nikdy nevidí skutečné jméno ani zdravotní údaje. Přepnout to jde v nastavení.',
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

export function screenPribeh(): string {
  const state = journey()

  const auto = state.milestones.map((m) => ({
    onDate: m.date,
    title: m.label,
    body: '',
    icon: m.icon,
    id: '',
  }))
  const entries = [...S.d.story, ...auto].sort((a, b) => b.onDate.localeCompare(a.onDate))

  return [
    head('Rodinná kronika', 'Můj příběh', 'Časová osa vaší cesty a dopisy. Milníky se doplňují samy z vašich dat.'),

    `<section class="surface pad">
      <p class="eyebrow">Přidat vzpomínku</p>
      <div class="formrow"><label class="label" for="st-title">Co se stalo</label><input class="field" id="st-title" placeholder="Například: první ultrazvuk" autocomplete="off"></div>
      <div class="formrow"><label class="label" for="st-body">Jak to bylo</label><textarea class="field" id="st-body" rows="3" placeholder="Pár vět. Za rok si je nebudete pamatovat."></textarea></div>
      <div class="formrow"><label class="label" for="st-date">Kdy</label><input class="field" type="date" id="st-date" value="${esc(viewDate())}"></div>
      <button class="btn btn-primary" data-act="story-add" style="margin-top:1.25rem">Přidat na osu</button>
    </section>`,

    entries.length
      ? `<section>${sectionTitle('Časová osa', plural(entries.length, 'záznam', 'záznamy', 'záznamů'))}
          <ul class="timeline">
            ${entries
              .map(
                (t) => `<li>
                  <span class="dot">${esc(t.icon || '❦')}</span>
                  <div>
                    <p class="faint" style="font-size:.75rem">${esc(formatCzechDate(t.onDate, { year: true }))}</p>
                    <p class="display" style="font-size:1.2rem;margin-top:.2rem">${esc(t.title)}</p>
                    ${t.body ? `<p class="soft" style="margin-top:.4rem;font-size:.9375rem;line-height:1.65">${esc(t.body)}</p>` : ''}
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
      <p class="soft" style="margin-top:.5rem;font-size:.9375rem;line-height:1.6">Embryu, miminku, sobě, tomu, kdo tu nezůstal. Dopisy jsou soukromé — nikdo jiný je nevidí.</p>
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

    note('Partner vidí fázi, průměrnou náladu a rady. **Nevidí deník, dopisy ani zdravotní hodnoty** — a nikdy je neuvidí.'),

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
      <p class="eyebrow">Kde jste na cestě</p>
      <p class="soft" style="margin-top:.5rem;font-size:.9375rem">Teď: <strong>${esc(state.phase.title)}</strong> · ${esc(state.dayLabel)}</p>
      <div class="formrow" style="margin-top:1.1rem">
        <label class="label" for="set-phase">Fáze</label>
        <select class="field" id="set-phase" data-act="set-phase">
          <option value="" ${p.declaredPhase === null ? 'selected' : ''}>— odvodit z dat —</option>
          ${PHASE_IDS.filter((id) => PHASES[id].selectableAtOnboarding)
            .map((id) => `<option value="${esc(id)}" ${p.declaredPhase === id ? 'selected' : ''}>${esc(PHASES[id].name)}</option>`)
            .join('')}
        </select>
      </div>
      ${
        p.declaredPhase && p.declaredPhase !== state.phase.id
          ? `<div class="banner" style="margin-top:1rem;border-color:var(--sand)">
              <span style="color:var(--taupe)">◈</span>
              <span>Zadaná data mají přednost: počítáme vás jako <strong>${esc(state.phase.name)}</strong>${
                state.anchorDate ? `, protože máte vyplněné datum ${esc(ANCHOR_LABELS[state.phase.anchor ?? ''] ?? 'události')} (${esc(formatCzechDate(state.anchorDate))})` : ''
              }. Zvolená fáze se použije, až jí data nebudou odporovat — nebo datum níž smažte.</span>
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
      <p class="faint" style="margin-top:.85rem;font-size:.8125rem;line-height:1.55">Fáze se odvozuje i sama z dat — když zadáte datum porodu, aplikace se posune, i kdybyste to tu nechala.</p>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Klíčová data</p>
      <div class="two" style="margin-top:1rem">
        ${(
          [
            ['stimulationStartOn', 'Začátek stimulace'],
            ['retrievalOn', 'Odběr vajíček'],
            ['transferOn', 'Transfer'],
            ['betaTestOn', 'Beta hCG'],
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
        <input class="field" id="set-clinic" value="${esc(p.clinicName ?? '')}" placeholder="Nepovinné — přidá skupinu v komunitě" data-act="set-clinic" autocomplete="off">
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
      <p class="soft" style="margin-top:.6rem;font-size:.9375rem;line-height:1.65">Všechno, co jste zapsala — profil, deník, hodnoty, dopisy — je uložené jen v tomhle prohlížeči. Nikam se to neodesílá.</p>
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
  const plans: [string, string, string, string[]][] = [
    ['Měsíčně', '349 Kč', 'měsíc', ['Celý obsah', 'AI Gabi bez omezení', 'Deník, kalendář, komunita']],
    ['Ročně', '2 990 Kč', 'rok', ['Vše z měsíčního', 'Ušetříte 28 %', 'Rodinná kronika k vytištění']],
    ['Cesta', '4 990 Kč', 'jednorázově', ['Přístup na 2 roky', 'Pro celý IVF cyklus i těhotenství', 'Partner mode zdarma']],
  ]

  return [
    head('Obchodní model', 'Členství', 'Předplatné, ne reklama. Nikdo si tu nekupuje lepší pozici a data se neprodávají — z toho plyne i to, jak vypadá marketplace.'),

    `<div class="tiles">
      ${plans
        .map(
          ([name, price, per, feats]) => `<div class="surface pad">
            <p class="eyebrow">${esc(name)}</p>
            <p class="display" style="font-size:2rem;margin-top:.5rem">${esc(price)}</p>
            <p class="faint" style="font-size:.8125rem">za ${esc(per)}</p>
            <ul class="bullets" style="margin-top:1.1rem">${feats.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
          </div>`,
        )
        .join('')}
    </div>`,

    note('Tohle je ukázka obchodního modelu, ne funkční platba. V téhle verzi je celá aplikace otevřená.'),
  ].join('')
}
