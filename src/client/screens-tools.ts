import { CATALOG, CONTENT_STATS, GLOSSARY, contentById, searchContent, searchGlossary } from '../lib/content'
import { KIND_ICONS, KIND_LABELS, type ContentKind } from '../lib/content/types'
import { recommend } from '../lib/content/recommend'
import { TOPIC_LABELS } from '../lib/domain/profile'
import { formatCzechDate } from '../lib/domain/dates'
import { RED_FLAGS } from '../lib/ai/offline'
import {
  groupHits,
  HIT_GROUP_TITLES,
  searchApp,
  searchSuggestions,
  type SearchHit,
} from '../lib/search/app-search'
import { affinity, journalFor, journalList, journey, S, viewDate } from './store'
import { contentCard, empty, esc, head, heroStyle, lineChart, md, note, plural, ring, sectionTitle } from './ui'

/** Knihovna, čtečka, deník, Gabi a checklisty. */

// ------------------------------------------------------------------ čtečka ---

export function screenCist(id: string): string {
  const item = contentById(id)
  if (!item) {
    return empty('Materiál nenalezen', 'Možná byl přejmenovaný. Zkuste ho najít v knihovně.', '<button class="btn" data-go="knihovna">Do knihovny</button>')
  }

  const state = journey()
  const saved = S.d.saved.includes(item.id)

  const checklist = item.checklist?.length
    ? (() => {
        const groups: { name: string; entries: typeof item.checklist }[] = []
        for (const e of item.checklist!) {
          const name = e.group ?? 'Položky'
          let bucket = groups.find((x) => x.name === name)
          if (!bucket) groups.push((bucket = { name, entries: [] }))
          bucket.entries!.push(e)
        }
        const done = item.checklist!.filter((e) => S.d.checks[`${item.id}:${e.id}`]).length
        return `<div class="surface pad" style="margin-top:2rem">
          <div class="row" style="justify-content:space-between;gap:1rem">
            <p class="eyebrow">Checklist</p>
            <span class="faint num" style="font-size:.8125rem">${done} / ${item.checklist!.length}</span>
          </div>
          ${groups
            .map(
              (g) => `<div style="margin-top:1.25rem"><p class="eyebrow">${esc(g.name)}</p>
              ${g
                .entries!.map(
                  (e) => `<button class="check" data-act="check" data-arg="${esc(item.id)}:${esc(e.id)}" aria-pressed="${Boolean(S.d.checks[`${item.id}:${e.id}`])}" style="margin-top:.75rem">
                    <span class="box">✓</span>
                    <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(e.text)}${e.hint ? `<br><span class="faint" style="font-size:.8125rem">${esc(e.hint)}</span>` : ''}${e.optional ? ' <span class="badge" style="font-size:.625rem">nepovinné</span>' : ''}</span>
                  </button>`,
                )
                .join('')}
            </div>`,
            )
            .join('')}
        </div>`
      })()
    : ''

  const quiz = item.quiz?.length
    ? `<div class="surface pad" style="margin-top:2rem">
        <p class="eyebrow">Kvíz</p>
        ${item.quiz
          .map((q, qi) => {
            const picked = S.d.quiz[`${item.id}:${qi}`]
            return `<div style="margin-top:1.5rem">
              <p style="font-weight:500;font-size:.9375rem">${esc(q.q)}</p>
              <div class="chips" style="margin-top:.75rem">
                ${q.options
                  .map(
                    (o, oi) =>
                      `<button data-act="quiz" data-arg="${esc(item.id)}:${qi}:${oi}" aria-pressed="${picked === oi}"${picked !== undefined && oi === q.correct ? ' style="border-color:var(--sage-deep)"' : ''}>${esc(o)}</button>`,
                  )
                  .join('')}
              </div>
              ${
                picked !== undefined
                  ? `<p class="soft" style="margin-top:.75rem;font-size:.875rem;line-height:1.6"><strong>${picked === q.correct ? 'Správně. ' : 'Není to tak. '}</strong>${esc(q.explain)}</p>`
                  : ''
              }
            </div>`
          })
          .join('')}
      </div>`
    : ''

  const chapters = item.chapters?.length
    ? `<div class="surface pad" style="margin-top:2rem">
        <p class="eyebrow">Kapitoly</p>
        ${item.chapters
          .map(
            (c, i) => `<div style="margin-top:1.5rem">
              <p style="font-weight:500">${i + 1}. ${esc(c.title)} <span class="faint num" style="font-size:.8125rem">· ${c.minutes} min</span></p>
              <div class="prose" style="margin-top:.6rem;font-size:.9375rem">${md(c.body)}</div>
            </div>`,
          )
          .join('')}
      </div>`
    : ''

  const related = recommend(CATALOG, state, affinity(), { limit: 6, exclude: new Set([item.id]) }).filter((r) =>
    r.topics.some((t) => item.topics.includes(t)),
  )

  return `<article>
    <div class="reader-hero grain" style="${heroStyle(item.hero)}"></div>
    <div class="row wrap" style="gap:.5rem;margin-top:1.5rem">
      <span class="badge">${esc(KIND_ICONS[item.kind])} ${esc(KIND_LABELS[item.kind])}</span>
      <span class="badge num">${item.minutes} min</span>
      ${item.topics.map((t) => `<span class="badge">${esc(TOPIC_LABELS[t])}</span>`).join('')}
    </div>
    <h1 class="display" style="font-size:clamp(1.8rem,4.5vw,2.6rem);margin-top:1rem">${esc(item.title)}</h1>
    <p class="soft" style="margin-top:.85rem;font-size:1.0625rem;line-height:1.65">${esc(item.excerpt)}</p>

    <div class="row wrap" style="gap:.5rem;margin-top:1.5rem">
      <button class="btn btn-sm" data-act="save" data-arg="${esc(item.id)}">${saved ? '★ Uloženo' : '☆ Uložit'}</button>
      ${item.author ? `<span class="badge">${esc(item.author)}</span>` : ''}
    </div>

    ${item.mediaNote ? `<div style="margin-top:1.5rem">${note(item.mediaNote)}</div>` : ''}

    <div class="prose" style="margin-top:2rem">${md(item.body)}</div>
    ${chapters}${checklist}${quiz}

    <div style="margin-top:2.5rem;padding-top:1.5rem;border-top:1px solid var(--line)">
      ${item.reviewedBy ? `<p class="faint" style="font-size:.8125rem">${esc(item.reviewedBy)}</p>` : ''}
      ${item.sources?.length ? `<p class="faint" style="font-size:.8125rem;margin-top:.35rem">Zdroje: ${item.sources.map((s) => esc(s)).join(' · ')}</p>` : ''}
      <p class="faint" style="font-size:.8125rem;margin-top:.35rem">Publikováno ${esc(formatCzechDate(item.publishedOn))}</p>
    </div>

    ${
      related.length
        ? `<section style="margin-top:3rem">
            ${sectionTitle('Čtěte dál', 'Podobná témata pro vaši fázi')}
            <div class="rail">${related.map((r) => contentCard(r)).join('')}</div>
          </section>`
        : ''
    }
  </article>`
}

// ---------------------------------------------------------------- knihovna ---

export function screenKnihovna(query: string, kind: string): string {
  const q = query.trim()
  let items = q.length > 1 ? searchContent(q, 200) : CATALOG
  if (kind !== 'vse') items = items.filter((i) => i.kind === (kind as ContentKind))

  const kinds: string[] = ['vse', ...new Set(CATALOG.map((i) => i.kind))]
  const terms = q.length > 1 ? searchGlossary(q).slice(0, 8) : []

  return [
    head('Celá knihovna', 'Knihovna', `${CONTENT_STATS.items} materiálů a ${GLOSSARY.length} pojmů. Hledá se v nadpisech i v textu.`),

    `<div class="stack" style="gap:1rem">
      <input class="searchbar" id="q" placeholder="Zkuste: beta hcg, blastocysta, císař, kojení…" value="${esc(query)}" autocomplete="off">
      <div class="chips">
        ${kinds
          .map(
            (k) =>
              `<button data-act="kind" data-arg="${esc(k)}" aria-pressed="${kind === k}">${k === 'vse' ? 'Vše' : esc(KIND_LABELS[k as ContentKind])}</button>`,
          )
          .join('')}
      </div>
    </div>`,

    terms.length
      ? `<section>
          ${sectionTitle('Pojmy', 'Ze slovníku')}
          <div class="stack" style="gap:.6rem">
            ${terms
              .map(
                (t) =>
                  `<div class="surface" style="padding:1rem 1.2rem"><p style="font-weight:500">${esc(t.term)}</p><p class="soft" style="font-size:.875rem;line-height:1.6;margin-top:.3rem">${esc(t.short)}</p></div>`,
              )
              .join('')}
          </div>
        </section>`
      : '',

    items.length
      ? `<section>
          ${sectionTitle(q.length > 1 ? 'Výsledky hledání' : 'Všechno', q.length > 1 ? `${plural(items.length, 'materiál', 'materiály', 'materiálů')} pro „${q}“` : 'Seřazeno podle pořadí v knihovně')}
          <div class="grid-cards">${items.slice(0, 60).map((i) => contentCard(i)).join('')}</div>
          ${items.length > 60 ? `<p class="faint center" style="font-size:.8125rem;margin-top:1rem">Zobrazeno prvních 60 z ${items.length}. Zkuste hledání zúžit.</p>` : ''}
        </section>`
      : empty('Nic se nenašlo', 'Zkuste kratší slovo nebo jiný výraz — hledáme i v textu článků.'),
  ].join('')
}

// ------------------------------------------------------------- checklisty ---

export function screenChecklisty(): string {
  const state = journey()
  const lists = recommend(CATALOG, state, affinity(), { kind: 'checklist', limit: 12, threshold: 0.02 })

  if (lists.length === 0) {
    return [
      head('Ať na nic nezapomenete', 'Checklisty', 'Pro vaši fázi tu zatím žádný není.'),
      empty('Zatím nic', 'Checklisty se objeví, jakmile se dostanete do fáze, kde jsou potřeba — před odběrem, před porodem, do porodnice.'),
    ].join('')
  }

  return [
    head('Ať na nic nezapomenete', 'Checklisty', 'Odškrtnuté položky se pamatují. Řazeno podle toho, co je teď nejblíž.'),
    `<div class="stack" style="gap:.75rem">
      ${lists
        .map((l) => {
          const total = l.checklist?.length ?? 0
          const done = (l.checklist ?? []).filter((e) => S.d.checks[`${l.id}:${e.id}`]).length
          return `<button class="tile" data-go="cist/${esc(l.id)}" style="align-items:center">
            ${ring(total ? done / total : 0, 46)}
            <span style="min-width:0;flex:1">
              <h4 class="display">${esc(l.title)}</h4>
              <p>${esc(l.excerpt)}</p>
              <p class="faint num" style="font-size:.75rem;margin-top:.35rem">${done} z ${total} hotovo</p>
            </span>
            <span class="go">›</span>
          </button>`
        })
        .join('')}
    </div>`,
  ].join('')
}

// ------------------------------------------------------------------- Gabi ---

/**
 * Gabi — vyhledávání v aplikaci.
 *
 * Není to chatbot a nic si nevymýšlí. Napíšete klíčové slovo nebo otázku
 * a ona projde všechno, co v aplikaci je: články, videa, příběhy, pojmy,
 * rady z průvodců fázemi, doplňky, tipy i vysvětlení diagnóz.
 */
export function screenGabi(): string {
  const state = journey()
  const msgs = S.d.chat
  const suggestions = searchSuggestions(state.phase.id)

  const hitRow = (h: SearchHit) => `<button class="tile" data-go="${esc(h.route)}" style="align-items:flex-start">
    <i>${h.kind === 'pojem' ? '§' : h.kind === 'doplnek' ? '◍' : h.kind === 'otazka' ? '?' : h.kind === 'diagnoza' ? '◈' : h.kind === 'tip' ? '✦' : '❧'}</i>
    <span style="min-width:0">
      <span class="eyebrow" style="display:block">${esc(h.kindLabel)} · ${esc(h.from)}</span>
      <h4 class="display" style="margin-top:.2rem">${esc(h.title)}</h4>
      <p>${esc(h.snippet)}</p>
    </span>
    <span class="go">›</span>
  </button>`

  const answer = (m: (typeof msgs)[number]) => {
    const hits = searchApp(m.text, { phase: state.phase.id })
    const flag = RED_FLAGS.find((f) => f.pattern.test(m.text))
    const warning = flag
      ? `<div class="doctorbox" style="margin-bottom:1rem"><p style="font-size:.9375rem;line-height:1.65">${esc(flag.message)}</p></div>`
      : ''
    if (hits.length === 0) {
      return `<div class="bubble bubble-gabi">
        ${warning}
        <p style="line-height:1.7">K tomuhle v aplikaci zatím nic nemám. Zkuste to napsat jinak, kratším slovem, nebo se podívejte do knihovny.</p>
        <div class="row wrap" style="gap:.5rem;margin-top:1rem">
          <button class="btn btn-sm" data-go="knihovna">Otevřít knihovnu</button>
          <button class="btn btn-sm" data-go="faze">Průvodce mojí fází</button>
        </div>
      </div>`
    }
    const groups = groupHits(hits)
    return `<div class="bubble bubble-gabi">
      ${warning}
      <p style="line-height:1.7">Našla jsem k tomu v aplikaci ${esc(plural(hits.length, 'výsledek', 'výsledky', 'výsledků'))}${
        groups[0]?.items.some((i) => i.phase === state.phase.id) ? ' — nahoře je to, co patří k vaší fázi' : ''
      }:</p>
      ${groups
        .map(
          (g) => `<div style="margin-top:1.15rem">
            <p class="eyebrow">${esc(HIT_GROUP_TITLES[g.kind])}</p>
            <div class="stack" style="gap:.5rem;margin-top:.5rem">${g.items.map(hitRow).join('')}</div>
          </div>`,
        )
        .join('')}
    </div>`
  }

  return [
    head(
      'Vyhledávání v aplikaci',
      'Gabi',
      'Napište klíčové slovo nebo otázku. Gabi projde všechno, co v aplikaci je — články, videa, pojmy, rady, doplňky i vysvětlení diagnóz.',
    ),

    note(
      'Gabi **nehledá na internetu a nic si nevymýšlí.** Ukazuje jen to, co je v aplikaci. Když se něco nenajde, znamená to, že to tu zatím není — a to je poctivější než vymyšlená odpověď. **Nenahrazuje lékaře.**',
    ),

    msgs.length
      ? `<section class="chat">
          ${msgs
            .map((m) =>
              m.role === 'user'
                ? `<div class="bubble bubble-user">${esc(m.text)}</div>`
                : answer(m),
            )
            .join('')}
        </section>`
      : `<div class="empty">
          <p class="mark">✦</p>
          <h3 class="display">Co hledáte?</h3>
          <p>Stačí jedno slovo — „OHSS“, „progesteron“, „cvičení“ — nebo celá otázka.</p>
        </div>`,

    `<div class="ask">
      <input id="ask" placeholder="Napište slovo nebo otázku…" autocomplete="off">
      <button class="btn btn-primary" data-act="ask">Hledat</button>
    </div>`,

    `<section>
      <p class="eyebrow" style="margin-bottom:.75rem">Zkuste</p>
      <div class="chips">
        ${suggestions.map((q) => `<button data-act="prompt" data-arg="${esc(q)}">${esc(q)}</button>`).join('')}
      </div>
      ${msgs.length ? '<button class="btn btn-ghost btn-sm" data-act="chat-clear" style="margin-top:1.25rem">Vymazat historii hledání</button>' : ''}
    </section>`,
  ].join('')
}
