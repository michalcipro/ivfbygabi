import { PHASES, PHASE_GROUP_META, type PhaseId } from '../lib/domain/phases'
import { MODIFIER_LABELS, type ModifierId } from '../lib/domain/profile'
import { guideFor, type Supplement } from '../lib/domain/guides'
import { DIAGNOSIS_INFO } from '../lib/domain/diagnoses'
import { CATALOG, GLOSSARY } from '../lib/content'
import type { ContentItem } from '../lib/content/types'
import { journey, profile, S } from './store'
import { contentCard, empty, esc, md, note, plural, sectionTitle } from './ui'

/**
 * Moje fáze — páteř aplikace.
 *
 * Každá fáze má stejných osm oddílů, takže uživatelka po přechodu do další
 * fáze nemusí hledat nic nového. Zobrazuje se vždy jen jeden oddíl, aby to
 * na mobilu nebyla nekonečná stránka.
 */

export const SECTIONS = [
  { id: 'prehled', label: 'Přehled' },
  { id: 'obsah', label: 'Obsah' },
  { id: 'hlava', label: 'Hlava' },
  { id: 'telo', label: 'Tělo' },
  { id: 'doplnky', label: 'Doplňky' },
  { id: 'partner', label: 'Partner' },
  { id: 'lekar', label: 'K lékaři' },
  { id: 'slovnicek', label: 'Slovníček' },
] as const

export type SectionId = (typeof SECTIONS)[number]['id']

const EVIDENCE_LABEL: Record<Supplement['evidence'], string> = {
  standard: 'Běžné doporučení',
  diskutovaný: 'Diskutovaný přínos',
  'podle hodnot': 'Podle naměřených hodnot',
}

const EVIDENCE_COLOR: Record<Supplement['evidence'], string> = {
  standard: 'var(--sage-deep)',
  diskutovaný: 'var(--fg-faint)',
  'podle hodnot': 'var(--taupe-deep)',
}

/** Obsah knihovny pro fázi, rozdělený podle druhu — ne jedna hromada. */
function contentGroups(phase: PhaseId): { title: string; hint: string; items: ContentItem[] }[] {
  const all = CATALOG.filter((c) => c.phases.includes(phase))
  const by = (...kinds: string[]) => all.filter((c) => kinds.includes(c.kind))
  return [
    { title: 'Články a návody', hint: 'Co potřebujete vědět', items: by('article', 'course') },
    { title: 'Videa', hint: 'Když se to lépe ukáže', items: by('video') },
    { title: 'Zkušenosti jiných žen', hint: 'Nejste v tom sama', items: by('story') },
    { title: 'Checklisty', hint: 'Ať na nic nezapomenete', items: by('checklist') },
    { title: 'Meditace a audio', hint: 'Na večer a na těžké dny', items: by('audio', 'podcast') },
    { title: 'Ověřte si to', hint: 'Krátké kvízy', items: by('quiz') },
  ].filter((g) => g.items.length > 0)
}

function bullets(items: string[], mark = ''): string {
  return `<ul class="bullets">${items.map((i) => `<li>${mark}${esc(i)}</li>`).join('')}</ul>`
}

function blocks(list: { title: string; body: string }[]): string {
  return `<div class="stack" style="gap:1rem">
    ${list
      .map(
        (b) => `<div class="surface pad">
          <h3 class="display" style="font-size:1.2rem">${esc(b.title)}</h3>
          <p class="soft" style="margin-top:.6rem;line-height:1.7">${esc(b.body)}</p>
        </div>`,
      )
      .join('')}
  </div>`
}

/** Diagnózy uživatelky jako rozklikávací štítky — nikdy jen nálepka. */
function diagnosisChips(): string {
  const mods = profile().modifiers.filter((m) => DIAGNOSIS_INFO[m])
  if (mods.length === 0) {
    return `<div class="surface pad">
      <p class="eyebrow">Vaše situace</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.65">Zatím nemáte vybranou žádnou diagnózu ani situaci. Když ji doplníte, obsah se podle ní přizpůsobí.</p>
      <button class="btn btn-sm" data-go="nastaveni" style="margin-top:1rem">Doplnit v nastavení</button>
    </div>`
  }
  return `<div class="surface pad">
    <p class="eyebrow">Vaše situace — klikněte pro vysvětlení</p>
    <div class="chips" style="margin-top:.9rem">
      ${mods.map((m) => `<button data-go="diagnoza/${esc(m)}">${esc(MODIFIER_LABELS[m])} <span class="faint" style="margin-left:.3rem">?</span></button>`).join('')}
    </div>
  </div>`
}

export function screenFaze(phaseId: PhaseId, section: SectionId): string {
  const phase = PHASES[phaseId]
  const state = journey()
  const here = phase.id === state.phase.id
  const guide = guideFor(phase.id)
  const meta = PHASE_GROUP_META[phase.group]

  const header = `<header class="head rise">
    <p class="eyebrow">${esc(meta.name)}${here ? ' · jste tady' : ''}</p>
    <h1 class="display">${esc(phase.name)}</h1>
    <p class="lede">${esc(guide?.summary ?? phase.description)}</p>
    ${here ? `<p class="badge badge-soft" style="margin-top:1rem">${esc(state.dayLabel)}</p>` : ''}
  </header>`

  const nav = `<div class="chips subnav">
    ${SECTIONS.map(
      (s) =>
        `<button data-go="faze/${esc(phase.id)}/${s.id}" aria-pressed="${section === s.id}">${esc(s.label)}</button>`,
    ).join('')}
  </div>`

  const body = guide ? sectionBody(phase.id, section, guide, here) : missingGuide(phase.id)

  return header + nav + body
}

function missingGuide(phaseId: PhaseId): string {
  const groups = contentGroups(phaseId)
  return (
    (groups.length
      ? groups
          .map(
            (g) => `<section>${sectionTitle(g.title, g.hint)}<div class="rail">${g.items.map((i) => contentCard(i)).join('')}</div></section>`,
          )
          .join('')
      : empty('Průvodce se připravuje', 'Pro tuhle fázi zatím nemáme strukturovaného průvodce. Obsah najdete v knihovně.', '<button class="btn" data-go="knihovna">Do knihovny</button>'))
  )
}

function sectionBody(
  phaseId: PhaseId,
  section: SectionId,
  guide: NonNullable<ReturnType<typeof guideFor>>,
  here: boolean,
): string {
  switch (section) {
    // ------------------------------------------------------------- přehled --
    case 'prehled': {
      const groups = contentGroups(phaseId)
      const total = groups.reduce((a, g) => a + g.items.length, 0)
      return [
        `<section class="surface pad">
          ${sectionTitle('Co vás čeká')}
          ${bullets(guide.whatAwaits)}
        </section>`,

        `<section class="surface pad">
          ${sectionTitle('Na co se připravit', 'Věci, které se dají udělat dopředu')}
          ${bullets(guide.prepareFor)}
        </section>`,

        diagnosisChips(),

        `<section class="surface pad">
          ${sectionTitle('Co sledovat', 'Z toho se skládají vaše grafy')}
          ${bullets(guide.track)}
          <div class="row wrap" style="gap:.5rem;margin-top:1.1rem">
            <button class="btn btn-sm" data-go="denik">Zapsat do deníku</button>
            <button class="btn btn-sm" data-go="zdravi">Zadat hodnoty</button>
          </div>
        </section>`,

        total
          ? `<section class="center" style="border-top:1px solid var(--line);padding-top:2rem">
              <p class="soft" style="font-size:.9375rem">Pro tuhle fázi máme ${esc(plural(total, 'materiál', 'materiály', 'materiálů'))}.</p>
              <button class="btn btn-sm" data-go="faze/${esc(phaseId)}/obsah" style="margin-top:.75rem">Zobrazit obsah fáze</button>
            </section>`
          : '',

        here ? '' : note('Tohle není vaše aktuální fáze. Prohlížíte si ji dopředu — obsah na domovské stránce se řídí tím, kde jste teď.'),
      ].join('')
    }

    // --------------------------------------------------------------- obsah --
    case 'obsah': {
      const groups = contentGroups(phaseId)
      if (groups.length === 0) {
        return empty('Zatím tu nic není', 'Pro tuhle fázi se obsah teprve připravuje. Zkuste knihovnu.', '<button class="btn" data-go="knihovna">Do knihovny</button>')
      }
      return groups
        .map(
          (g) =>
            `<section>${sectionTitle(g.title, `${g.hint} · ${plural(g.items.length, 'položka', 'položky', 'položek')}`)}<div class="grid-cards">${g.items.map((i) => contentCard(i)).join('')}</div></section>`,
        )
        .join('')
    }

    // --------------------------------------------------------------- hlava --
    case 'hlava':
      return [
        `<p class="lede soft">Praktické věci, které v téhle fázi pomáhají zvládnout hlavu. Nejsou to fráze o pozitivním myšlení.</p>`,
        blocks(guide.mind),
        note(
          'Když smutek nebo úzkost trvá většinu dní déle než dva týdny, nemůžete spát nebo přestáváte zvládat běžný den, ozvěte se svému lékaři. **Linka první psychické pomoci 116 123** funguje nepřetržitě a zdarma.',
        ),
      ].join('')

    // ---------------------------------------------------------------- tělo --
    case 'telo':
      return [
        `<p class="lede soft">Jak se v téhle fázi hýbat — a co naopak vynechat.</p>`,
        blocks(guide.body),
        note('Tohle jsou obecná doporučení. Když vám lékař řekl něco jiného, platí to, co řekl on.'),
      ].join('')

    // ------------------------------------------------------------- doplňky --
    case 'doplnky': {
      if (guide.supplements.length === 0) {
        return empty('Žádné doplňky', 'V téhle fázi se doplňky neřeší.')
      }
      return [
        `<p class="lede soft">U každého je napsané, proč se o něm mluví a jak silný důvod za ním stojí. <strong>Nikde tu není dávkování</strong> — to patří vašemu lékaři.</p>`,
        `<div class="stack" style="gap:.85rem">
          ${guide.supplements
            .map(
              (s) => `<div class="surface pad">
                <div class="row wrap" style="justify-content:space-between;gap:.75rem">
                  <h3 class="display" style="font-size:1.2rem">${esc(s.name)}</h3>
                  <span class="badge" style="color:${EVIDENCE_COLOR[s.evidence]}">${esc(EVIDENCE_LABEL[s.evidence])}</span>
                </div>
                <p class="soft" style="margin-top:.6rem;line-height:1.65">${esc(s.why)}</p>
                ${s.note ? `<p class="whybox" style="margin-top:.75rem">${esc(s.note)}</p>` : ''}
              </div>`,
            )
            .join('')}
        </div>`,
        note(
          'Doplňky nejsou lék a nenahrazují léčbu. Některé se s léky míjejí nebo je ovlivňují — **vždycky řekněte lékaři, co berete**, včetně bylinek a čajů.',
        ),
      ].join('')
    }

    // ------------------------------------------------------------- partner --
    case 'partner':
      return [
        `<p class="lede soft">Konkrétní věci pro toho, kdo je vedle vás. Můžete mu tuhle obrazovku rovnou ukázat.</p>`,
        `<section class="surface pad">${sectionTitle('Co může udělat')}${bullets(guide.partner)}</section>`,
        `<div class="row wrap" style="gap:.5rem">
          <button class="btn btn-sm" data-go="partner">Otevřít Partner mode</button>
        </div>`,
        note('Partner vidí fázi, průměrnou náladu a rady. **Nevidí deník, dopisy ani zdravotní hodnoty.**'),
      ].join('')

    // -------------------------------------------------------------- k lékaři --
    case 'lekar':
      return [
        `<p class="lede soft">Otázky, které se v téhle fázi vyplatí položit. Odškrtávejte si je — zůstane to uložené.</p>`,
        `<section class="surface pad">
          ${sectionTitle('Otázky pro lékaře', 'Vezměte si je s sebou')}
          ${guide.askDoctor
            .map((q, i) => {
              const key = `otazka:${phaseId}:${i}`
              return `<button class="check" data-act="check" data-arg="${esc(key)}" aria-pressed="${Boolean(S.d.checks[key])}" style="margin-top:.85rem">
                <span class="box">✓</span>
                <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(q)}</span>
              </button>`
            })
            .join('')}
        </section>`,
        note('Zapisujte si odpovědi hned v ordinaci. Po třetím termínu se to slévá — a to, co jste slyšela, se pak těžko dohledává.'),
      ].join('')

    // ----------------------------------------------------------- slovníček --
    case 'slovnicek': {
      const terms = guide.terms
        .map((t) => GLOSSARY.find((g) => g.term.toLowerCase() === t.toLowerCase()))
        .filter((t): t is NonNullable<typeof t> => Boolean(t))
      if (terms.length === 0) return empty('Slovníček se připravuje', 'Pojmy pro tuhle fázi zatím nemáme.')
      return [
        `<p class="lede soft">Pojmy, které v téhle fázi uslyšíte. Vysvětlené tak, aby to dávalo smysl i bez lékařského vzdělání.</p>`,
        `<div class="stack" style="gap:.75rem">
          ${terms
            .map(
              (t) => `<button class="tile" data-go="pojem/${encodeURIComponent(t.term)}" style="align-items:flex-start">
                <i>§</i>
                <span style="min-width:0"><h4 class="display">${esc(t.term)}</h4><p>${esc(t.short)}</p></span>
                <span class="go">›</span>
              </button>`,
            )
            .join('')}
        </div>`,
        `<button class="btn btn-sm" data-go="knihovna">Celý slovník v knihovně</button>`,
      ].join('')
    }

    default:
      return ''
  }
}

// ------------------------------------------------------------- jednotlivé --

export function screenPojem(termName: string): string {
  const term = GLOSSARY.find((g) => g.term.toLowerCase() === decodeURIComponent(termName).toLowerCase())
  if (!term) {
    return empty('Pojem nenalezen', 'Zkuste ho najít v knihovně.', '<button class="btn" data-go="knihovna">Do knihovny</button>')
  }
  return `<header class="head rise">
      <p class="eyebrow">Slovníček</p>
      <h1 class="display">${esc(term.term)}</h1>
      <p class="lede">${esc(term.short)}</p>
      ${term.aliases?.length ? `<p class="faint" style="margin-top:.5rem;font-size:.8125rem">Také: ${term.aliases.map((a) => esc(a)).join(', ')}</p>` : ''}
    </header>
    <div class="prose">${md(term.long)}</div>
    ${note('Vysvětlení je obecné. Co konkrétní pojem znamená pro vás, řekne jedině váš lékař.')}`
}

export function screenDiagnoza(id: string): string {
  const info = DIAGNOSIS_INFO[id as ModifierId]
  if (!info) {
    return empty('Nenalezeno', 'Tuhle diagnózu neznáme.', '<button class="btn" data-go="nastaveni">Do nastavení</button>')
  }
  const mine = profile().modifiers.includes(id as ModifierId)
  return [
    `<header class="head rise">
      <p class="eyebrow">${mine ? 'Vaše situace' : 'Vysvětlení'}</p>
      <h1 class="display">${esc(MODIFIER_LABELS[id as ModifierId])}</h1>
      <p class="lede">${esc(info.what)}</p>
    </header>`,
    `<section class="surface pad">
      ${sectionTitle('Co to znamená pro vaši cestu')}
      <p class="soft" style="line-height:1.75">${esc(info.meaning)}</p>
    </section>`,
    `<section class="surface pad">
      ${sectionTitle('Na co se zeptat lékaře')}
      ${info.ask
        .map((q, i) => {
          const key = `dg:${id}:${i}`
          return `<button class="check" data-act="check" data-arg="${esc(key)}" aria-pressed="${Boolean(S.d.checks[key])}" style="margin-top:.85rem">
            <span class="box">✓</span>
            <span class="txt" style="font-size:.9375rem;line-height:1.5">${esc(q)}</span>
          </button>`
        })
        .join('')}
    </section>`,
    note(
      'Tohle je obecné vysvětlení pojmu, **ne posouzení vaší situace**. Co konkrétně z vašich nálezů plyne, řekne jedině lékař, který zná celý kontext.',
    ),
  ].join('')
}

/** Přehled všech diagnóz — dostupný i pro ty, které uživatelka nemá. */
export function screenDiagnozy(): string {
  const mine = new Set(profile().modifiers)
  const ids = Object.keys(DIAGNOSIS_INFO) as ModifierId[]
  const render = (list: ModifierId[]) =>
    `<div class="tiles">${list
      .map(
        (m) =>
          `<button class="tile" data-go="diagnoza/${esc(m)}"><i>◈</i><span style="min-width:0"><h4 class="display">${esc(MODIFIER_LABELS[m])}</h4><p>${esc(DIAGNOSIS_INFO[m].what)}</p></span><span class="go">›</span></button>`,
      )
      .join('')}</div>`

  const own = ids.filter((m) => mine.has(m))
  const rest = ids.filter((m) => !mine.has(m))

  return [
    `<header class="head rise">
      <p class="eyebrow">Vysvětlené pojmy</p>
      <h1 class="display">Diagnózy a situace</h1>
      <p class="lede">Každá nálepka, kterou v aplikaci uvidíte, má vysvětlení: co to je, co to znamená pro cestu a na co se zeptat.</p>
    </header>`,
    own.length ? `<section>${sectionTitle('Vaše', 'Podle vašeho profilu')}${render(own)}</section>` : '',
    `<section>${sectionTitle(own.length ? 'Ostatní' : 'Všechny', plural(rest.length, 'pojem', 'pojmy', 'pojmů'))}${render(rest)}</section>`,
  ].join('')
}
