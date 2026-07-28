import type { JourneyState } from '../domain/journey'
import { TOPIC_LABELS } from '../domain/profile'
import type { ContentItem } from '../content/types'

/**
 * Gabi bez modelu.
 *
 * Tenhle soubor je záměrně čistý — žádné SDK, žádné `process.env`, žádná
 * databáze. Používá ho server jako fallback, když chybí klíč nebo API selže,
 * a prohlížečová verze aplikace jako jediný režim, který má k dispozici.
 * Díky tomu je „offline Gabi“ v obou případech doslova stejná odpověď.
 */

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
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

/**
 * Varovné příznaky. Když je uživatelka zmíní, musí to být první věta
 * odpovědi — ne poznámka pod čarou.
 */
export const RED_FLAGS: Array<{ pattern: RegExp; message: string }> = [
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
      'To, co píšete, beru vážně. Prosím ozvěte se ještě dnes někomu, kdo vám může být nablízku — svému lékaři, gynekologovi, nebo krizové lince Linka první psychické pomoci 116 123. Nemusíte to zvládat sama a tohle není něco, co se má přečkat.',
  },
]

export interface OfflineAnswer {
  text: string
  refs: string[]
  source: 'offline'
}

/**
 * Offline režim. Nepředstírá, že je AI — poctivě odpoví z knihovny,
 * doplní kontext fáze a nasměruje na obsah.
 */
export function offlineAnswer(
  question: string,
  relevant: ContentItem[],
  state: JourneyState,
): OfflineAnswer {
  const parts: string[] = []

  const flag = RED_FLAGS.find((f) => f.pattern.test(question))
  if (flag) parts.push(flag.message)

  parts.push(`Jste ${state.dayLabel.replace(/^Dnes (je|jste) /, '').toLowerCase()}.`)

  if (relevant.length > 0) {
    const top = relevant[0]
    parts.push(`K tomu, na co se ptáte, mám v knihovně **${top.title}** — ${top.excerpt}`)
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
