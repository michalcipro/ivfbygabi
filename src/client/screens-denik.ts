import { addDays, czDays, formatCzechDate } from '../lib/domain/dates'
import { guideFor } from '../lib/domain/guides'
import { promptFor, PROMPT_KIND_LABELS } from '../lib/domain/journal-prompts'
import { EXERCISES, exerciseById, exercisesFor, suggestExercise } from '../lib/domain/exercises'
import { ENCOURAGEMENTS } from '../lib/content'
import { seedFrom } from '../lib/domain/dates'
import { upcomingEvents } from './screens-home'
import {
  exerciseLog,
  journalFor,
  journalList,
  journalStreak,
  journey,
  moodAverage,
  moodConcern,
  S,
  viewDate,
} from './store'
import { empty, esc, head, lineChart, note, plural, ring, sectionTitle } from './ui'

/**
 * Deník.
 *
 * Není to políčko na náladu. Je to místo, kde se cesta zpracovává: co se
 * dnes děje, co s tím dělat v hlavě, co se za tu dobu změnilo a co jste
 * zvládla. Všechno je zasazené do dne a fáze, ve které uživatelka je.
 */

export const DENIK_SECTIONS = [
  { id: 'dnes', label: 'Dnešek' },
  { id: 'cviceni', label: 'Cvičení' },
  { id: 'vyvoj', label: 'Vývoj' },
  { id: 'ohlednuti', label: 'Ohlédnutí' },
] as const

export type DenikSection = (typeof DENIK_SECTIONS)[number]['id']

const MOOD_FACES = ['😞', '😔', '😐', '🙂', '😊']

function subnav(section: DenikSection): string {
  return `<div class="chips subnav">
    ${DENIK_SECTIONS.map(
      (s) => `<button data-go="denik/${s.id}" aria-pressed="${section === s.id}">${esc(s.label)}</button>`,
    ).join('')}
  </div>`
}

/** Co se dnes děje kolem, aby zápis nevisel ve vzduchoprázdnu. */
function context(): string {
  const state = journey()
  const date = viewDate()
  const guide = guideFor(state.phase.id)
  const soon = upcomingEvents(date, 3)
  const yesterday = journalFor(addDays(date, -1))

  return `<section class="surface pad">
    <p class="eyebrow">Kde dnes jste</p>
    <h2 class="display" style="font-size:1.35rem;margin-top:.45rem">${esc(state.dayLabel)}</h2>
    ${guide ? `<p class="soft" style="margin-top:.5rem;line-height:1.65;font-size:.9375rem">${esc(guide.summary)}</p>` : ''}
    ${
      soon.length
        ? `<div style="margin-top:1.1rem">
            <p class="eyebrow">Co je kolem</p>
            <ul class="linelist">
              ${soon
                .map(
                  (e) =>
                    `<li><span class="when">${e.inDays === 0 ? 'dnes' : e.inDays === 1 ? 'zítra' : `za ${e.inDays} dní`}</span><span>${esc(e.title)}</span></li>`,
                )
                .join('')}
            </ul>
          </div>`
        : ''
    }
    ${
      yesterday
        ? `<p class="faint" style="margin-top:1.1rem;font-size:.8125rem">Včera jste měla náladu ${yesterday.mood}/5${yesterday.win ? ` a povedlo se: ${esc(yesterday.win)}` : ''}.</p>`
        : ''
    }
  </section>`
}

function slider(key: string, label: string, value: number, hint: string): string {
  return `<div class="formrow">
    <label class="label" style="display:flex;justify-content:space-between" for="j-${key}">
      <span>${esc(label)}</span><span class="faint num" id="jv-${key}">${value}</span>
    </label>
    <input class="slider" type="range" min="1" max="5" step="1" value="${value}" id="j-${key}" data-slider="${key}">
    <p class="faint" style="font-size:.75rem;margin-top:.25rem">${esc(hint)}</p>
  </div>`
}

// ------------------------------------------------------------------ dnešek ---

function sectionDnes(): string {
  const state = journey()
  const date = viewDate()
  const row = journalFor(date)
  const prompt = promptFor(state.phase.id, state.dayInPhase, date)
  const streak = journalStreak(date)

  const enc = (() => {
    const pool = ENCOURAGEMENTS.filter((e) => e.tone === state.phase.tone)
    const list = pool.length ? pool : ENCOURAGEMENTS
    return list.length ? list[seedFrom(date, 'denik') % list.length] : null
  })()

  const suggested = exerciseById(suggestExercise(row?.mood ?? null, row?.anxiety ?? null))

  return [
    context(),

    `<section class="surface pad">
      <div class="row wrap" style="justify-content:space-between;gap:.75rem">
        <p class="eyebrow">Jak vám dnes je</p>
        ${row ? '<span class="badge badge-soft">uloženo</span>' : ''}
      </div>
      <div class="mood" style="margin-top:.9rem">
        ${MOOD_FACES.map(
          (f, i) =>
            `<button data-act="mood" data-arg="${i + 1}" aria-pressed="${row?.mood === i + 1}" aria-label="Nálada ${i + 1} z 5">${f}</button>`,
        ).join('')}
      </div>
      ${slider('anxiety', 'Úzkost', row?.anxiety ?? 3, '1 = klid, 5 = svírá to')}
      ${slider('hope', 'Naděje', row?.hope ?? 3, '1 = žádná, 5 = velká')}
      ${slider('energy', 'Energie', row?.energy ?? 3, '1 = na dně, 5 = plná')}
    </section>`,

    `<section class="surface pad">
      <div class="row wrap" style="justify-content:space-between;gap:.75rem">
        <p class="eyebrow">Otázka na dnešek · ${esc(PROMPT_KIND_LABELS[prompt.kind])}</p>
        <span class="faint" style="font-size:.75rem">Zítra bude jiná</span>
      </div>
      <p class="display" style="font-size:1.3rem;margin-top:.7rem;line-height:1.4">${esc(prompt.text)}</p>
      <p class="faint" style="margin-top:.5rem;font-size:.8125rem;line-height:1.55">${esc(prompt.why)}</p>
      <textarea class="field" id="j-prompt" rows="4" placeholder="Klidně jen tři věty. Nikdo jiný to neuvidí." style="margin-top:1rem">${esc(row?.promptAnswer ?? '')}</textarea>
      <input type="hidden" id="j-prompt-id" value="${esc(prompt.id)}">
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Co se dnes povedlo</p>
      <p class="faint" style="margin-top:.4rem;font-size:.8125rem;line-height:1.55">I úplně malá věc. Hlava si v zátěži pamatuje hlavně to, co nevyšlo. Tohle je vědomé vyvážení.</p>
      <input class="field" id="j-win" placeholder="Například: došla jsem na procházku, i když se mi nechtělo" value="${esc(row?.win ?? '')}" autocomplete="off" style="margin-top:.75rem">
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Volný zápis</p>
      <textarea class="field" id="j-note" rows="4" placeholder="Cokoliv, co potřebujete dostat z hlavy." style="margin-top:.75rem">${esc(row?.note ?? '')}</textarea>
      <button class="btn btn-primary" data-act="journal-save" style="margin-top:1.25rem">Uložit zápis</button>
      ${streak > 1 ? `<p class="faint" style="margin-top:.85rem;font-size:.8125rem">Zapsáno ${esc(plural(streak, 'den', 'dny', 'dní'))} v řadě.</p>` : ''}
    </section>`,

    suggested
      ? `<section class="surface pad">
          <p class="eyebrow">Hodilo by se dnes</p>
          <button class="tile" data-go="cviceni/${suggested.id}" style="margin-top:.85rem;align-items:flex-start">
            <i>${suggested.icon}</i>
            <span style="min-width:0">
              <h4 class="display">${esc(suggested.title)}</h4>
              <p>${esc(suggested.when)}</p>
              <p class="faint num" style="font-size:.75rem;margin-top:.3rem">${suggested.minutes} min</p>
            </span>
            <span class="go">›</span>
          </button>
        </section>`
      : '',

    enc
      ? `<section class="surface-muted pad center">
          <p class="display" style="font-size:1.25rem;line-height:1.5">${esc(enc.text)}</p>
          ${enc.author ? `<p class="faint" style="margin-top:.75rem;font-size:.8125rem">${esc(enc.author)}</p>` : ''}
        </section>`
      : '',

    note('Deník je soukromý. Partner v Partner mode uvidí jen průměrnou náladu za týden, **nikdy text zápisu**.'),
  ].join('')
}

// ----------------------------------------------------------------- cvičení ---

function sectionCviceni(): string {
  const state = journey()
  const list = exercisesFor(state.group)
  const done = exerciseLog()

  return [
    `<p class="lede soft">Techniky, které se dají udělat teď hned. Nejsou to články o tom, jak by to šlo. Jsou to kroky, které tu odklikáte.</p>`,

    `<div class="stack" style="gap:.75rem">
      ${list
        .map(
          (e) => `<button class="tile" data-go="cviceni/${e.id}" style="align-items:flex-start">
            <i>${e.icon}</i>
            <span style="min-width:0">
              <h4 class="display">${esc(e.title)}</h4>
              <p>${esc(e.when)}</p>
              <p class="faint num" style="font-size:.75rem;margin-top:.3rem">${e.minutes} min${
                done.filter((d) => d.exercise === e.id).length
                  ? ` · ${esc(plural(done.filter((d) => d.exercise === e.id).length, 'záznam', 'záznamy', 'záznamů'))}`
                  : ''
              }</p>
            </span>
            <span class="go">›</span>
          </button>`,
        )
        .join('')}
    </div>`,

    done.length
      ? `<section>${sectionTitle('Co jste vyplnila', 'Vaše záznamy')}
          <div class="stack" style="gap:.6rem">
            ${done
              .slice(0, 8)
              .map((d) => {
                const ex = exerciseById(d.exercise)
                return `<div class="surface" style="padding:1rem 1.2rem">
                  <p class="faint" style="font-size:.75rem">${esc(formatCzechDate(d.date))} · ${esc(ex?.title ?? d.exercise)}</p>
                  <p style="margin-top:.4rem;font-size:.9375rem;line-height:1.6">${esc(d.fields.filter(Boolean).join(' · '))}</p>
                </div>`
              })
              .join('')}
          </div>
        </section>`
      : '',

    note(
      'Tyhle techniky vycházejí z postupů běžných v kognitivně-behaviorální terapii a všímavosti. **Nejsou léčba a nenahrazují odbornou pomoc**: jsou to nástroje na konkrétní těžkou chvíli.',
    ),
  ].join('')
}

// ------------------------------------------------------------------- vývoj ---

function sectionVyvoj(): string {
  const rows = journalList()
  const recent = rows.slice(-28)

  if (recent.length < 2) {
    return empty(
      'Zatím není co kreslit',
      'Až budou zápisy aspoň dva, uvidíte tady, jak se nálada, úzkost a naděje vyvíjejí v čase. Bývá to překvapivé. V hlavě to vypadá jako rovná čára dolů.',
      '<button class="btn" data-go="denik/dnes">Zapsat dnešek</button>',
      '◉',
    )
  }

  const avg = (key: 'mood' | 'anxiety' | 'hope' | 'energy', list = recent) =>
    Math.round((list.reduce((a, r) => a + r[key], 0) / list.length) * 10) / 10

  const week = rows.slice(-7)
  const prevWeek = rows.slice(-14, -7)
  const delta = prevWeek.length >= 3 ? Math.round((avg('mood', week) - avg('mood', prevWeek)) * 10) / 10 : null

  // Nejtěžší a nejlepší den. Z jejích vlastních dat, ne z obecné poučky.
  const worst = recent.reduce((a, r) => (r.mood < a.mood ? r : a), recent[0])
  const best = recent.reduce((a, r) => (r.mood > a.mood ? r : a), recent[0])

  const wins = rows.filter((r) => r.win.trim()).slice(-6).reverse()

  return [
    `<section class="surface pad">
      ${sectionTitle('Vývoj', `Posledních ${esc(plural(recent.length, 'zápis', 'zápisy', 'zápisů'))}`)}
      ${lineChart(
        [
          { key: 'mood', color: 'var(--taupe-deep)', values: recent.map((r) => r.mood) },
          { key: 'anxiety', color: 'var(--blush-deep)', values: recent.map((r) => r.anxiety), dashed: true },
          { key: 'hope', color: 'var(--sage-deep)', values: recent.map((r) => r.hope) },
        ],
        { min: 1, max: 5, fill: 'var(--champagne)', label: 'Vývoj nálady, úzkosti a naděje' },
      )}
      <div class="legend">
        <span><i class="swatch" style="background:var(--taupe-deep)"></i>Nálada</span>
        <span><i class="swatch" style="background:var(--blush-deep)"></i>Úzkost</span>
        <span><i class="swatch" style="background:var(--sage-deep)"></i>Naděje</span>
      </div>
    </section>`,

    `<section class="two">
      <div class="surface pad">
        <p class="eyebrow">Průměry za posledních ${recent.length} dní</p>
        <dl class="kv" style="margin-top:.9rem">
          <dt>Nálada</dt><dd class="num">${avg('mood')} / 5</dd>
          <dt>Úzkost</dt><dd class="num">${avg('anxiety')} / 5</dd>
          <dt>Naděje</dt><dd class="num">${avg('hope')} / 5</dd>
          <dt>Energie</dt><dd class="num">${avg('energy')} / 5</dd>
        </dl>
      </div>
      <div class="surface pad">
        <p class="eyebrow">Tento týden proti minulému</p>
        ${
          delta === null
            ? '<p class="soft" style="margin-top:.7rem;line-height:1.65">Na srovnání je potřeba aspoň dva týdny zápisů. Ještě chvilku.</p>'
            : `<p class="display" style="font-size:2rem;margin-top:.5rem">${delta > 0 ? '+' : ''}${delta}</p>
               <p class="soft" style="margin-top:.5rem;line-height:1.6;font-size:.9375rem">${
                 delta > 0.3
                   ? 'Nálada se zvedá. Stojí za to se podívat, co se změnilo. A dělat toho víc.'
                   : delta < -0.3
                     ? 'Nálada klesá. Nemusí to nic znamenat, ale všímat si toho má smysl.'
                     : 'Zhruba stejně jako minulý týden.'
               }</p>`
        }
      </div>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Z vašich vlastních dat</p>
      <ul class="bullets" style="margin-top:.8rem">
        <li>Nejtěžší den byl ${esc(formatCzechDate(worst.date, { weekday: true }))}. Nálada ${worst.mood}/5.</li>
        <li>Nejlepší den byl ${esc(formatCzechDate(best.date, { weekday: true }))}. Nálada ${best.mood}/5.</li>
        <li>Zapsáno celkem ${esc(plural(rows.length, 'den', 'dny', 'dní'))}.</li>
      </ul>
      <p class="faint" style="margin-top:.9rem;font-size:.8125rem;line-height:1.55">Tohle nejsou obecné poučky, ale vaše čísla. Když se podíváte, co se ten nejlepší den dělo, obvykle se něco najde.</p>
    </section>`,

    wins.length
      ? `<section>${sectionTitle('Co se povedlo', 'Vaše vlastní zápisy')}
          <div class="stack" style="gap:.5rem">
            ${wins
              .map(
                (w) =>
                  `<div class="surface-muted" style="padding:.85rem 1.1rem"><p class="faint" style="font-size:.75rem">${esc(formatCzechDate(w.date))}</p><p style="margin-top:.25rem;font-size:.9375rem">${esc(w.win)}</p></div>`,
              )
              .join('')}
          </div>
        </section>`
      : '',

    moodConcern()
      ? `<section class="surface pad" style="border-color:var(--blush)">
          <p class="eyebrow" style="color:var(--blush-deep)">Všimli jsme si</p>
          <p style="margin-top:.6rem;line-height:1.7">Poslední zápisy jsou dlouhodobě nízko. Není to diagnóza. Je to jen upozornění, že tohle bývá moment, kdy pomůže někdo zvenčí.</p>
          <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">Ozvěte se svému gynekologovi nebo praktickému lékaři. Psycholog se zaměřením na reprodukci je běžná součást péče. Kdykoliv a zdarma je tu také <strong>Linka první psychické pomoci 116 123</strong>.</p>
        </section>`
      : '',

    `<section>${sectionTitle('Poslední zápisy', 'Jen pro vás')}
      <div class="stack" style="gap:.6rem">
        ${rows
          .filter((r) => r.note.trim() || r.promptAnswer.trim())
          .slice(-8)
          .reverse()
          .map(
            (r) => `<div class="surface" style="padding:1.1rem 1.3rem">
              <p class="faint" style="font-size:.75rem">${esc(formatCzechDate(r.date, { weekday: true }))} · nálada ${r.mood}/5</p>
              ${r.promptAnswer.trim() ? `<p style="margin-top:.45rem;font-size:.9375rem;line-height:1.65">${esc(r.promptAnswer)}</p>` : ''}
              ${r.note.trim() ? `<p class="soft" style="margin-top:.45rem;font-size:.9375rem;line-height:1.65">${esc(r.note)}</p>` : ''}
            </div>`,
          )
          .join('')}
      </div>
    </section>`,
  ].join('')
}

// -------------------------------------------------------------- ohlédnutí ---

function sectionOhlednuti(): string {
  const state = journey()
  const rows = journalList()
  const date = viewDate()
  const exercises = exerciseLog()
  const checks = Object.values(S.d.checks).filter(Boolean).length

  const done = state.milestones.filter((m) => m.kind === 'past')
  const journeyDays = state.journeyDays

  return [
    `<p class="lede soft">Když se jede den po dni, posun není vidět. Tady je.</p>`,

    `<section class="surface pad">
      <p class="eyebrow">Co máte za sebou</p>
      <div class="two" style="margin-top:1rem">
        <div>
          <dl class="kv">
            ${journeyDays !== null ? `<dt>Na cestě</dt><dd class="num">${esc(czDays(journeyDays))}</dd>` : ''}
            <dt>Zápisů v deníku</dt><dd class="num">${rows.length}</dd>
            <dt>Vyplněných cvičení</dt><dd class="num">${exercises.length}</dd>
            <dt>Odškrtnutých položek</dt><dd class="num">${checks}</dd>
          </dl>
        </div>
        <div>${ring(rows.length ? Math.min(1, journalStreak(date) / 7) : 0, 84)}
          <p class="faint" style="font-size:.75rem;margin-top:.5rem">Zápisy v řadě. Cíl je týden. Ne kvůli sbírání, ale proto, že teprve na týdnu je vidět vývoj.</p>
        </div>
      </div>
    </section>`,

    done.length
      ? `<section class="surface pad">
          <p class="eyebrow">Milníky, které jste zvládla</p>
          <ul class="timeline" style="margin-top:1rem">
            ${done
              .slice()
              .reverse()
              .slice(0, 8)
              .map(
                (m) => `<li>
                  <span class="dot">${esc(m.icon)}</span>
                  <div>
                    <p class="faint" style="font-size:.75rem">${esc(formatCzechDate(m.date, { year: true }))} · před ${esc(czDays(-m.inDays))}</p>
                    <p class="display" style="font-size:1.15rem;margin-top:.2rem">${esc(m.label)}</p>
                  </div>
                </li>`,
              )
              .join('')}
          </ul>
        </section>`
      : '',

    `<section class="surface pad">
      <p class="eyebrow">Týdenní ohlédnutí</p>
      <p class="faint" style="margin-top:.4rem;font-size:.8125rem;line-height:1.55">Tři otázky, které se vyplatí projít jednou týdně. Uloží se jako běžný zápis.</p>
      ${[
        ['w1', 'Co bylo tenhle týden nejtěžší a jak jsem to zvládla?'],
        ['w2', 'Co mi pomohlo. A udělám to znovu?'],
        ['w3', 'Co chci příští týden dělat jinak? Jednu konkrétní věc.'],
      ]
        .map(
          ([id, q]) => `<div class="formrow" style="margin-top:1.25rem">
            <label class="label" for="rev-${id}">${esc(q)}</label>
            <textarea class="field" id="rev-${id}" rows="2"></textarea>
          </div>`,
        )
        .join('')}
      <button class="btn btn-primary" data-act="review-save" style="margin-top:1.25rem">Uložit ohlédnutí</button>
    </section>`,

    `<section class="surface pad">
      <p class="eyebrow">Vzpomínka na později</p>
      <p class="soft" style="margin-top:.5rem;line-height:1.7;font-size:.9375rem">Něco, co dnes prožíváte, si za rok nevybavíte. Můžete si to uložit do kroniky. Tam se z toho jednou dá udělat kniha.</p>
      <div class="row wrap" style="gap:.5rem;margin-top:1rem">
        <button class="btn btn-sm" data-go="pribeh">Přidat do kroniky</button>
        <button class="btn btn-sm" data-go="faze/${esc(state.phase.id)}/hlava">Práce s hlavou ve vaší fázi</button>
      </div>
    </section>`,
  ].join('')
}

// ------------------------------------------------------------- vykreslení ---

export function screenDenik(section: DenikSection): string {
  const state = journey()
  const avg = moodAverage(7)

  const header = `<header class="head rise">
    <p class="eyebrow">Soukromé. Nikdo jiný to nevidí</p>
    <h1 class="display">Deník</h1>
    <p class="lede">${esc(formatCzechDate(viewDate(), { weekday: true }))} · ${esc(state.dayLabel)}${
      avg !== null ? ` · nálada za týden ${avg}/5` : ''
    }</p>
  </header>`

  const body =
    section === 'cviceni'
      ? sectionCviceni()
      : section === 'vyvoj'
        ? sectionVyvoj()
        : section === 'ohlednuti'
          ? sectionOhlednuti()
          : sectionDnes()

  return header + subnav(section) + body
}

// ------------------------------------------------------------------ cvičení ---

export function screenCviceni(id: string): string {
  const ex = exerciseById(id)
  if (!ex) {
    return empty('Cvičení nenalezeno', 'Vraťte se do deníku a vyberte jiné.', '<button class="btn" data-go="denik/cviceni">Do deníku</button>')
  }

  const header = `<header class="head rise">
    <p class="eyebrow">Cvičení · ${ex.minutes} min</p>
    <h1 class="display">${esc(ex.title)}</h1>
    <p class="lede">${esc(ex.when)}</p>
  </header>
  <section class="surface pad">
    <p class="eyebrow">Jak to funguje</p>
    <p class="soft" style="margin-top:.6rem;line-height:1.75">${esc(ex.how)}</p>
  </section>`

  const past = exerciseLog().filter((e) => e.exercise === ex.id)

  // --- dýchání: jediné cvičení, které se „hraje“, ne vyplňuje ---------------
  const interactive =
    ex.id === 'dech'
      ? `<section class="surface pad center">
          <div class="breath" id="breath" data-phase="idle">
            <div class="breath-circle"></div>
            <p class="breath-label" id="breath-label">Připravená?</p>
          </div>
          <div class="row wrap" style="gap:.5rem;justify-content:center;margin-top:1.5rem">
            <button class="btn btn-primary" data-act="breath-start">Začít</button>
            <button class="btn btn-sm" data-act="breath-stop">Zastavit</button>
          </div>
          <p class="faint" style="margin-top:1rem;font-size:.8125rem">Kruh se nadechuje a vydechuje s vámi. Dýchejte nosem, výdech ústy. Pět minut stačí.</p>
        </section>`
      : ex.id === 'kontrola'
        ? `<section class="surface pad">
            <p class="eyebrow">Co vás teď trápí</p>
            <p class="faint" style="margin-top:.4rem;font-size:.8125rem;line-height:1.55">Napište jednu věc na řádek. Pak u každé rozhodnete, jestli ji můžete ovlivnit.</p>
            <textarea class="field" id="ex-0" rows="5" placeholder="Například:&#10;Jestli se embryo uhnízdí&#10;Že jsem v práci nestíhala&#10;Co bude, když to nevyjde" style="margin-top:.75rem"></textarea>
            <div class="two" style="margin-top:1.25rem">
              <div>
                <label class="label" for="ex-1">Můžu ovlivnit</label>
                <textarea class="field" id="ex-1" rows="4" placeholder="Sem přepište to, s čím se dá něco dělat."></textarea>
              </div>
              <div>
                <label class="label" for="ex-2">Nemůžu ovlivnit</label>
                <textarea class="field" id="ex-2" rows="4" placeholder="A sem zbytek. Tenhle sloupec se dnes neřeší."></textarea>
              </div>
            </div>
            <button class="btn btn-primary" data-act="exercise-save" data-arg="${esc(ex.id)}" style="margin-top:1.25rem">Uložit</button>
          </section>`
        : ex.id === 'soucit'
          ? `<section class="surface pad">
              <p class="eyebrow">Dopis</p>
              <p class="faint" style="margin-top:.4rem;font-size:.8125rem;line-height:1.55">Pište, jako byste psala nejbližší kamarádce, která je přesně ve vaší situaci. Co byste jí řekla? Co by potřebovala slyšet?</p>
              <textarea class="field" id="ex-0" rows="8" placeholder="Milá…" style="margin-top:.75rem"></textarea>
              <button class="btn btn-primary" data-act="exercise-save" data-arg="${esc(ex.id)}" style="margin-top:1.25rem">Uložit</button>
            </section>`
          : `<section class="surface pad">
              ${(ex.steps ?? [])
                .map(
                  (s, i) => `<div class="formrow"${i ? '' : ' style="margin-top:0"'}>
                    <label class="label" for="ex-${i}">${i + 1}. ${esc(s.label)}</label>
                    <textarea class="field" id="ex-${i}" rows="2" placeholder="${esc(s.hint)}"></textarea>
                  </div>`,
                )
                .join('')}
              <button class="btn btn-primary" data-act="exercise-save" data-arg="${esc(ex.id)}" style="margin-top:1.25rem">Uložit</button>
            </section>`

  return [
    header,
    interactive,
    past.length
      ? `<section>${sectionTitle('Vaše dřívější záznamy', esc(plural(past.length, 'záznam', 'záznamy', 'záznamů')))}
          <div class="stack" style="gap:.6rem">
            ${past
              .slice(0, 5)
              .map(
                (p) =>
                  `<div class="surface" style="padding:1rem 1.2rem"><p class="faint" style="font-size:.75rem">${esc(formatCzechDate(p.date, { weekday: true }))}</p><p style="margin-top:.4rem;font-size:.9375rem;line-height:1.65;white-space:pre-wrap">${esc(p.fields.filter(Boolean).join('\n'))}</p></div>`,
              )
              .join('')}
          </div>
        </section>`
      : '',
    note('Cvičení jsou nástroj na těžkou chvíli, **ne léčba**. Když potíže trvají, patří to k odborníkovi, Linka první psychické pomoci 116 123 funguje nepřetržitě a zdarma.'),
  ].join('')
}

export { EXERCISES }
