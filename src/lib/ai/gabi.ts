import Anthropic from '@anthropic-ai/sdk'
import type { JourneyState } from '../domain/journey'
import type { Profile } from '../domain/profile'
import { MODIFIER_LABELS, TOPIC_LABELS } from '../domain/profile'
import { formatCzechDateShort } from '../domain/dates'
import type { ContentItem } from '../content/types'
import { LAB_BY_KEY } from '../health/lab-params'
import type { LabValue } from '../db/repo-health'

/**
 * AI Gabi — digitální průvodkyně.
 *
 * Není to obecný chatbot. Ví, kdy byla uživatelka na transferu, kolik měla
 * embryí, co ji čeká příští týden a co si zapsala do deníku. Odpovídá s tímto
 * kontextem, empaticky, a NIKDY nenahrazuje lékaře.
 *
 * Když není k dispozici klíč k Anthropic API, přepne se na deterministický
 * vyhledávací režim nad knihovnou obsahu — aplikace tak funguje i offline.
 */

const MODEL = process.env.GABI_MODEL ?? 'claude-opus-5'

let _client: Anthropic | null = null

function client(): Anthropic | null {
  if (_client) return _client
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) return null
  _client = new Anthropic()
  return _client
}

export function aiAvailable(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY || process.env.ANTHROPIC_AUTH_TOKEN)
}

const PERSONA = `Jsi Gabi — digitální průvodkyně na platformě „IVF by Gabi“.
Provázíš ženy na cestě za dítětem: od prvního rozhodnutí, přes diagnostiku,
IVF, ztráty, těhotenství, porod a nedonošenost až po první rok dítěte.

JAK MLUVÍŠ
- Česky, vykáním, laskavě a konkrétně. Jako žena, která tomu rozumí
  a zároveň si tím sama prošla.
- Krátce. Nejdřív odpověz na otázku, teprve pak kontext. Většina odpovědí
  má 3–6 vět. Delší jen tehdy, když se uživatelka ptá na složitý postup.
- Bez klišé. NIKDY nepiš „jen se uvolněte“, „nemyslete na to“,
  „všechno se děje z nějakého důvodu“, „aspoň víte, že můžete otěhotnět“.
  Tyhle věty ženy v léčbě zraňují.
- Když je uživatelka ve fázi ztráty nebo píše o strachu, nejdřív to pojmenuj
  a teprve pak přejdi k informacím. Neutěšuj násilím.

CO NIKDY NEDĚLÁŠ
- Nestanovuješ diagnózu ani neříkáš, co konkrétní výsledek u ní znamená.
- Nedoporučuješ dávkování léků ani změny v léčbě.
- Neslibuješ výsledek („určitě to vyjde“, „tohle zvýší vaši šanci“).
- Nevymýšlíš si čísla úspěšnosti, studie ani jména lékařů.

CO DĚLÁŠ
- Vysvětluješ obecně, co daný pojem, vyšetření nebo hodnota znamená.
- Pomáháš formulovat otázky pro lékaře.
- Normalizuješ to, co je běžné, a jasně říkáš, kdy je potřeba volat lékaře.
- Odkazuješ na obsah v aplikaci, když se k tématu hodí.

BEZPEČNOST
Pokud uživatelka popisuje varovné příznaky (silné krvácení, prudká bolest
břicha, horečka nad 38 °C, dušnost, prudký nárůst obvodu břicha po odběru,
silné bolesti hlavy s poruchou vidění v těhotenství, nehmatné pohyby plodu,
u miminka odmítání pití, netečnost, zvýšená teplota u novorozence),
napiš to jako první větu odpovědi a jasně ji nasměruj na lékaře nebo
pohotovost. Neuklidňuj ji dřív, než tohle napíšeš.

Pokud píše o beznaději, o tom, že nechce žít, nebo o ublížení sobě či dítěti,
odpověz s klidem, ber to vážně a doporuč okamžitý kontakt na odbornou pomoc
(praktický lékař, gynekolog, krizová linka). Nezlehčuj to a nesnaž se to vyřešit sama.

Každou zdravotní odpověď zakonči jednou krátkou větou, že jde o obecnou
informaci, která nenahrazuje posouzení jejího lékaře.`

function journeyContext(state: JourneyState, profile: Profile): string {
  const lines: string[] = []
  lines.push(`Dnešní datum: ${formatCzechDateShort(state.today)}`)
  lines.push(`Fáze cesty: ${state.phase.title}`)
  lines.push(`Kde přesně je: ${state.dayLabel}`)

  if (state.gestationLabel) lines.push(`Gestační stáří: ${state.gestationLabel}`)
  if (state.babyAgeLabel) lines.push(`Věk dítěte: ${state.babyAgeLabel}`)
  if (state.daysPastTransfer !== null && state.daysPastTransfer >= 0) {
    lines.push(`Dní po transferu: ${state.daysPastTransfer}`)
  }
  if (profile.embryoDayAtTransfer) {
    lines.push(`Přenesené embryo bylo ${profile.embryoDayAtTransfer}. den kultivace`)
  }

  if (profile.modifiers.length > 0) {
    lines.push(`Situace a diagnózy: ${profile.modifiers.map((m) => MODIFIER_LABELS[m]).join(', ')}`)
  }

  const numbers: string[] = []
  if (profile.birthYear) numbers.push(`věk ${new Date().getFullYear() - profile.birthYear}`)
  if (profile.amh !== null) numbers.push(`AMH ${profile.amh}`)
  if (profile.ivfCycles) numbers.push(`${profile.ivfCycles}. IVF cyklus`)
  if (profile.transfersDone) numbers.push(`${profile.transfersDone} transferů celkem`)
  if (profile.embryosFrozen) numbers.push(`${profile.embryosFrozen} zamražených embryí`)
  if (profile.miscarriages) numbers.push(`${profile.miscarriages} ztrát`)
  if (numbers.length) lines.push(`Čísla její cesty: ${numbers.join(', ')}`)

  if (profile.clinicName) lines.push(`Klinika: ${profile.clinicName}`)

  if (state.nextMilestone) {
    lines.push(
      `Nejbližší událost: ${state.nextMilestone.label} za ${state.nextMilestone.inDays} dní`,
    )
  }

  return lines.join('\n')
}

export interface GabiContext {
  state: JourneyState
  profile: Profile
  /** Obsah, na který se dá odkázat. */
  catalog: readonly ContentItem[]
  /** Poslední zápisy z deníku — pomáhají Gabi vnímat rozpoložení. */
  recentMood?: { date: string; mood: number | null; note: string | null }[]
  /** Laboratorní hodnoty, které uživatelka zadala. */
  labs?: LabValue[]
  /** Historie konverzace. */
  history?: { role: 'user' | 'assistant'; content: string }[]
}

export interface GabiAnswer {
  text: string
  /** ID obsahu, který se hodí přiložit. */
  refs: string[]
  source: 'ai' | 'offline'
}

/** Najde obsah, který se k dotazu hodí — používá se i jako podklad pro AI. */
export function retrieve(
  question: string,
  catalog: readonly ContentItem[],
  state: JourneyState,
  limit = 6,
): ContentItem[] {
  const q = normalize(question)
  const words = q.split(/\s+/).filter((w) => w.length > 3)
  if (words.length === 0) return []

  const scored = catalog.map((item) => {
    const haystack = normalize(
      `${item.title} ${item.excerpt} ${item.topics.map((t) => TOPIC_LABELS[t]).join(' ')} ${item.body.slice(0, 1200)}`,
    )
    let score = 0
    for (const w of words) {
      if (haystack.includes(w)) score += 1
      if (normalize(item.title).includes(w)) score += 2
    }
    if (item.phases.includes(state.phase.id)) score += 1.5
    return { item, score }
  })

  return scored
    .filter((s) => s.score > 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item)
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export async function askGabi(question: string, ctx: GabiContext): Promise<GabiAnswer> {
  const relevant = retrieve(question, ctx.catalog, ctx.state, 6)
  const api = client()

  if (!api) return offlineAnswer(question, relevant, ctx)

  const knowledge = relevant
    .map(
      (item) =>
        `[${item.id}] ${item.title}\n${item.excerpt}\n${item.body.slice(0, 900).replace(/\n{2,}/g, '\n')}`,
    )
    .join('\n\n---\n\n')

  const labSummary = (ctx.labs ?? [])
    .slice(-12)
    .map((l) => `${LAB_BY_KEY[l.paramKey]?.name ?? l.paramKey}: ${l.value} ${l.unit ?? ''} (${l.onDate})`)
    .join('; ')

  const moodSummary = (ctx.recentMood ?? [])
    .slice(0, 5)
    .map((m) => `${m.date}: nálada ${m.mood ?? '–'}/5${m.note ? ` — „${m.note.slice(0, 90)}“` : ''}`)
    .join('\n')

  const system = [
    PERSONA,
    '',
    '## KDE SE UŽIVATELKA PRÁVĚ NACHÁZÍ',
    journeyContext(ctx.state, ctx.profile),
    labSummary ? `\n## JEJÍ ZADANÉ HODNOTY\n${labSummary}` : '',
    moodSummary ? `\n## POSLEDNÍ ZÁPISY V DENÍKU\n${moodSummary}` : '',
    knowledge
      ? `\n## OBSAH Z KNIHOVNY, ZE KTERÉHO ČERPEJ\n${knowledge}\n\nKdyž některý z těchto materiálů odpověď doplňuje, zmiň ho na konci větou typu „V aplikaci k tomu najdete: <název>“. Neuváděj ID v hranatých závorkách.`
      : '',
  ]
    .filter(Boolean)
    .join('\n')

  const messages: Anthropic.Beta.BetaMessageParam[] = [
    ...(ctx.history ?? []).slice(-10).map((m) => ({ role: m.role, content: m.content })),
    { role: 'user' as const, content: question },
  ]

  try {
    const response = await api.beta.messages.create({
      model: MODEL,
      max_tokens: 8000,
      system,
      messages,
      output_config: { effort: 'medium' },
      // Bezpečnostní klasifikátory mohou dotaz odmítnout; fallback zajistí,
      // že uživatelka místo chyby dostane odpověď z jiného modelu.
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
    })

    if (response.stop_reason === 'refusal') {
      return offlineAnswer(question, relevant, ctx)
    }

    const text = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim()

    if (!text) return offlineAnswer(question, relevant, ctx)

    return { text, refs: relevant.map((r) => r.id), source: 'ai' }
  } catch {
    // Výpadek API nesmí uživatelku nechat bez odpovědi.
    return offlineAnswer(question, relevant, ctx)
  }
}

const RED_FLAGS: Array<{ pattern: RegExp; message: string }> = [
  {
    pattern: /siln[éeě].{0,12}krv[áa]cen|krv[áa]c[íi]m siln|prokrv[áa]c/i,
    message:
      'Silné krvácení je důvod ozvat se lékaři hned — nečekejte na ranní ordinační hodiny. Pokud promáčíte vložku za hodinu nebo méně, jeďte na pohotovost.',
  },
  {
    pattern: /hore[čc]k|teplot[au] (nad )?3[89]|39 stup/i,
    message:
      'Horečka je vždycky důvod kontaktovat lékaře, obzvlášť po zákroku, v těhotenství nebo v šestinedělí. Zavolejte prosím ještě dnes.',
  },
  {
    pattern: /prudk[áa].{0,15}bolest|nesnesiteln[áa].{0,10}bolest|bolest.{0,10}nevydrž/i,
    message:
      'Prudkou nebo náhle vzniklou bolest břicha je potřeba nechat posoudit lékařem, ne přečkat. Zavolejte na kliniku nebo na pohotovost.',
  },
  {
    pattern: /nafoukl|obvod b[řr]ich|ohss|nem[ůu]žu d[ýy]chat|dušn/i,
    message:
      'Rychle rostoucí bříško, výrazné nafouknutí nebo horší dýchání po odběru vajíček může být příznak OHSS. Kontaktujte prosím kliniku ještě dnes.',
  },
  {
    pattern: /nechce se mi ž[íi]t|ubl[íi]žit sob|nem[áa] to smysl|skon[čc]it to/i,
    message:
      'To, co píšete, beru vážně. Prosím ozvěte se ještě dnes někomu, kdo vám může být nablízku — svému lékaři, gynekologovi, nebo krizové lince. Nemusíte to zvládat sama a tohle není něco, co se má přečkat.',
  },
]

/**
 * Offline režim. Nepředstírá, že je AI — poctivě odpoví z knihovny,
 * doplní kontext fáze a nasměruje na obsah.
 */
function offlineAnswer(
  question: string,
  relevant: ContentItem[],
  ctx: GabiContext,
): GabiAnswer {
  const parts: string[] = []

  const flag = RED_FLAGS.find((f) => f.pattern.test(question))
  if (flag) parts.push(flag.message)

  parts.push(`Jste ${ctx.state.dayLabel.replace(/^Dnes (je|jste) /, '').toLowerCase()}.`)

  if (relevant.length > 0) {
    const top = relevant[0]
    parts.push(
      `K tomu, na co se ptáte, mám v knihovně **${top.title}** — ${top.excerpt}`,
    )
    const firstParagraph = top.body
      .split('\n')
      .find((l) => l.trim().length > 80 && !l.startsWith('#'))
    if (firstParagraph) parts.push(firstParagraph.trim())

    if (relevant.length > 1) {
      parts.push(
        `Dál by se vám mohlo hodit: ${relevant
          .slice(1, 4)
          .map((r) => r.title)
          .join(', ')}.`,
      )
    }
  } else {
    parts.push(
      'Na tuhle otázku vám teď neumím odpovědět z knihovny. Zkuste ji prosím napsat jinými slovy, nebo se podívejte do průvodce vaší fází — je tam většina toho, co se v tomhle období řeší.',
    )
  }

  parts.push(
    '_Tohle je obecná informace z knihovny, ne posouzení vaší situace. To může udělat jedině váš lékař, který zná celý váš kontext._',
  )

  return { text: parts.join('\n\n'), refs: relevant.map((r) => r.id), source: 'offline' }
}

/**
 * Shrnutí nahrané lékařské zprávy. Popisuje, co ve zprávě je,
 * a vysvětluje jednotlivé parametry — nikdy nehodnotí.
 */
export async function summarizeReport(
  rawText: string,
  found: { paramKey: string; value: number; unit: string }[],
  ctx: Pick<GabiContext, 'state' | 'profile'>,
): Promise<string> {
  const explanations = found
    .map((f) => {
      const p = LAB_BY_KEY[f.paramKey]
      if (!p) return null
      return `**${p.name}: ${f.value} ${f.unit}**\n${p.explain}${
        p.reference?.note ? `\n_${p.reference.note}_` : ''
      }`
    })
    .filter(Boolean)
    .join('\n\n')

  const api = client()
  if (!api) {
    return explanations
      ? `Ve zprávě jsem našla tyto hodnoty:\n\n${explanations}\n\n_Popis je obecný a nenahrazuje interpretaci vaším lékařem._`
      : 'Ve zprávě se mi nepodařilo rozpoznat konkrétní laboratorní hodnoty. Můžete je zadat ručně — pak je uvidíte v grafu vývoje.'
  }

  try {
    const response = await api.beta.messages.create({
      model: MODEL,
      max_tokens: 6000,
      system: `${PERSONA}

Teď dostaneš text lékařské zprávy, kterou uživatelka nahrála.
Tvůj úkol je JEN zpřehlednit, co ve zprávě stojí, a vysvětlit použité pojmy.

PRAVIDLA
- NEHODNOŤ, jestli je výsledek dobrý nebo špatný. Ani náznakem.
- Nepiš, co z výsledku plyne pro její léčbu.
- Vysvětli obecně, co jednotlivé parametry a pojmy znamenají.
- Napiš 2–3 konkrétní otázky, které se vyplatí položit lékaři.
- Formátuj v markdownu, používej ## nadpisy a odrážky.
- Na konci jedna věta, že interpretace patří lékaři.

Kontext uživatelky:
${journeyContext(ctx.state, ctx.profile)}`,
      messages: [
        {
          role: 'user',
          content: `Text zprávy:\n\n${rawText.slice(0, 12000)}\n\nAutomaticky rozpoznané hodnoty:\n${
            found.map((f) => `${f.paramKey}: ${f.value} ${f.unit}`).join('\n') || '(žádné)'
          }`,
        },
      ],
      output_config: { effort: 'medium' },
      betas: ['server-side-fallback-2026-07-01'],
      fallbacks: 'default',
    })

    if (response.stop_reason === 'refusal') return explanations

    const text = response.content
      .filter((b): b is Anthropic.Beta.BetaTextBlock => b.type === 'text')
      .map((b) => b.text)
      .join('\n')
      .trim()

    return text || explanations
  } catch {
    return explanations
  }
}

/** Návrhy otázek, které Gabi nabídne podle fáze — aby uživatelka věděla, kde začít. */
export function suggestedPrompts(state: JourneyState): string[] {
  const base: Record<string, string[]> = {
    planning: [
      'Co mám začít brát, když plánujeme miminko?',
      'Jak poznám plodné dny?',
      'Kdy má smysl jít k lékaři?',
    ],
    diagnosis: [
      'Co znamená moje AMH?',
      'Jak se připravit na první návštěvu na klinice?',
      'Jaké otázky se mám zeptat lékaře?',
    ],
    treatment: [
      'Co mám dělat, když si špatně píchnu injekci?',
      'Jaké příznaky po odběru jsou normální?',
      'Co znamenají čísla ve zprávě z embryologie?',
    ],
    waiting: [
      'Můžu po transferu cvičit?',
      'Proč mě bolí v podbřišku?',
      'Kdy má smysl udělat test?',
    ],
    loss: [
      'Kdy se můžeme pokusit znovu?',
      'Jaká vyšetření mají smysl po ztrátě?',
      'Jak to mám říct rodině?',
    ],
    pregnancy: [
      'Co se tento týden děje s miminkem?',
      'Jaká vyšetření mě čekají?',
      'Co nesmím jíst?',
    ],
    birth: [
      'Co si vzít do porodnice?',
      'Jak poznám, že mám jet rodit?',
      'Jak vypadá rekonvalescence po císaři?',
    ],
    baby: [
      'Kolik má miminko spát?',
      'Jak poznám, že má dost mléka?',
      'Kdy volat s teplotou pediatra?',
    ],
  }

  return base[state.group] ?? base.planning
}
