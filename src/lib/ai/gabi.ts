import Anthropic from '@anthropic-ai/sdk'
import type { JourneyState } from '../domain/journey'
import type { Profile } from '../domain/profile'
import { MODIFIER_LABELS } from '../domain/profile'
import { formatCzechDateShort } from '../domain/dates'
import type { ContentItem } from '../content/types'
import { LAB_BY_KEY } from '../health/lab-params'
import { offlineAnswer as offlineFrom, retrieve } from './offline'
import type { LabValue } from '../db/repo-health'

// Offline režim i návrhy otázek žijí v ./offline — bez SDK a bez process.env,
// aby je mohla použít i prohlížečová verze aplikace.
export { retrieve, suggestedPrompts } from './offline'

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

/** Adaptér na sdílený offline režim — ten potřebuje jen stav cesty. */
function offlineAnswer(
  question: string,
  relevant: ContentItem[],
  ctx: GabiContext,
): GabiAnswer {
  return offlineFrom(question, relevant, ctx.state)
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
