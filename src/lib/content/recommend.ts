import type { JourneyState } from '../domain/journey'
import { phaseAffinity } from '../domain/journey'
import type { ModifierId, TopicId } from '../domain/profile'
import { rngFrom, seedFrom } from '../domain/dates'
import type { ContentItem, ContentKind, DailyCard } from './types'

/**
 * Doporučovací systém.
 *
 * Cíl: uživatelka nikdy nesmí vidět prázdnou obrazovku a nikdy nesmí vidět
 * dvakrát stejnou domovskou stránku. Zároveň musí být pořadí deterministické
 * v rámci jednoho dne, když aplikaci zavře a otevře, obsah se nepřehází.
 *
 * Skóre = fáze × den × modifikátory × naučená témata × novost × kurátorský boost
 */

export interface Affinity {
  /** Naučené zájmy: topic -> váha 0–1. Roste s tím, co uživatelka čte. */
  topics: Partial<Record<TopicId, number>>
  /** ID obsahu, který už viděla. */
  seen: Set<string>
  /** ID obsahu v oblíbených. Mírně zvyšuje příbuzný obsah. */
  saved: Set<string>
  /** ID obsahu, který dnes už byl doporučen, kvůli rozmanitosti. */
  usedToday?: Set<string>
}

export const emptyAffinity = (): Affinity => ({
  topics: {},
  seen: new Set(),
  saved: new Set(),
})

/**
 * Jak blízko je aktuální den doporučenému rozsahu.
 *
 * Trefa do okna je cennější než obecný obsah bez rozsahu (proto > 1).
 * Článek napsaný přímo na 5. den po transferu má přednost před obecným
 * článkem o čekání. Mimo okno hodnota rychle klesá.
 */
function rangeAffinity(day: number, range: [number, number]): number {
  const [lo, hi] = range
  if (day >= lo && day <= hi) return 1.3
  const distance = day < lo ? lo - day : day - hi
  // Obsah těsně mimo okno má pořád cenu, dál už ne.
  return Math.max(0, 1 - distance / 10) * 0.7
}

function modifierAffinity(state: JourneyState, item: Pick<ContentItem, 'modifiers' | 'excludeModifiers'>): number {
  const mods = new Set<ModifierId>(state.modifiers)

  if (item.excludeModifiers?.some((m) => mods.has(m))) return 0

  if (!item.modifiers || item.modifiers.length === 0) return 1

  const hits = item.modifiers.filter((m) => mods.has(m)).length
  if (hits === 0) return 0.12 // cílený obsah, který se jí netýká
  return 1 + Math.min(0.6, hits * 0.35) // cílená trefa je cennější než obecný obsah
}

function topicAffinity(item: ContentItem, affinity: Affinity): number {
  if (item.topics.length === 0) return 1
  let sum = 0
  for (const t of item.topics) sum += affinity.topics[t] ?? 0
  const avg = sum / item.topics.length
  return 1 + avg * 0.75
}

function noveltyFactor(item: ContentItem, affinity: Affinity): number {
  if (affinity.usedToday?.has(item.id)) return 0.05
  if (affinity.saved.has(item.id)) return 0.7 // uložené se občas hodí připomenout
  if (affinity.seen.has(item.id)) return 0.22
  return 1
}

function freshnessFactor(item: ContentItem, today: string): number {
  const age = daysSince(item.publishedOn, today)
  if (age < 7) return 1.25
  if (age < 30) return 1.1
  return 1
}

function daysSince(from: string, to: string): number {
  const a = Date.parse(from + 'T00:00:00Z')
  const b = Date.parse(to + 'T00:00:00Z')
  if (Number.isNaN(a) || Number.isNaN(b)) return 999
  return Math.round((b - a) / 86_400_000)
}


export function scoreItem(
  item: ContentItem,
  state: JourneyState,
  affinity: Affinity,
): number {
  const mod = modifierAffinity(state, item)
  if (mod === 0) return 0

  const phase = phaseAffinity(state, item.phases)
  const day = item.dayRange ? rangeAffinity(state.dayInPhase, item.dayRange) : 1
  const topic = topicAffinity(item, affinity)
  const novelty = noveltyFactor(item, affinity)
  const fresh = freshnessFactor(item, state.today)
  const boost = 1 + (item.boost ?? 0)

  const levelWeight = item.level === 'essential' ? 1.2 : item.level === 'comfort' ? 1.0 : 0.85

  return phase * day * mod * topic * novelty * fresh * boost * levelWeight
}

export interface RecommendOptions {
  kind?: ContentKind | ContentKind[]
  limit?: number
  /** Minimální skóre. Brání doporučení zcela nerelevantního obsahu. */
  threshold?: number
  /** Vyloučit konkrétní ID (např. už použitá v jiné řadě). */
  exclude?: Set<string>
  /** Nenulový jitter zajistí, že se pořadí den ode dne mění. */
  jitter?: number
  seed?: number
}

export function recommend(
  catalog: readonly ContentItem[],
  state: JourneyState,
  affinity: Affinity,
  opts: RecommendOptions = {},
): ContentItem[] {
  const {
    kind,
    limit = 12,
    threshold = 0.08,
    exclude,
    jitter = 0.22,
    seed = seedFrom(state.today, state.phase.id, state.dayInPhase),
  } = opts

  const kinds = kind ? (Array.isArray(kind) ? new Set(kind) : new Set([kind])) : null
  const rng = rngFrom(seed)

  const scored: Array<{ item: ContentItem; score: number }> = []

  for (const item of catalog) {
    if (kinds && !kinds.has(item.kind)) continue
    if (exclude?.has(item.id)) continue
    const base = scoreItem(item, state, affinity)
    if (base < threshold) continue
    // Jitter mění pořadí mezi dny, ale nikdy nepřebije silnou relevanci.
    const noise = 1 + (rng() - 0.5) * 2 * jitter
    scored.push({ item, score: base * noise })
  }

  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, limit).map((s) => s.item)
}

/** Vybere denní kartu. Nejpřesnější shoda na den vyhrává. */
export function pickDailyCard(
  cards: readonly DailyCard[],
  state: JourneyState,
): DailyCard | null {
  const mods = new Set<ModifierId>(state.modifiers)
  const candidates: Array<{ card: DailyCard; score: number }> = []

  for (const card of cards) {
    if (card.excludeModifiers?.some((m) => mods.has(m))) continue
    if (card.phases.length > 0 && !card.phases.includes(state.phase.id)) continue

    let score = card.phases.includes(state.phase.id) ? 10 : 1

    if (card.day !== undefined) {
      if (card.day !== state.dayInPhase) continue
      score += 100 // přesná trefa na den je nejcennější
    } else if (card.dayRange) {
      const [lo, hi] = card.dayRange
      if (state.dayInPhase < lo || state.dayInPhase > hi) continue
      // Užší rozsah = konkrétnější = lepší
      score += 40 - Math.min(35, hi - lo)
    }

    if (card.modifiers && card.modifiers.length > 0) {
      const hits = card.modifiers.filter((m) => mods.has(m)).length
      if (hits === 0) continue
      score += hits * 25 // karta šitá na míru její situaci
    }

    candidates.push({ card, score })
  }

  if (candidates.length === 0) return null
  candidates.sort((a, b) => b.score - a.score)

  // Mezi stejně dobrými kartami vybereme deterministicky podle dne.
  const best = candidates[0].score
  const top = candidates.filter((c) => c.score === best)
  const idx = seedFrom(state.today, state.phase.id) % top.length
  return top[idx].card
}

/**
 * Sestaví „řady“ jako na Netflixu. Každá s vlastním důvodem, proč tu je.
 * Řady se nesmí opakovat obsahem, proto se průběžně vylučuje, co už padlo.
 */
export interface Rail {
  id: string
  title: string
  /** „Protože jste 8 dní po transferu“. Tohle dělá ten Netflix pocit. */
  reason: string
  items: ContentItem[]
}

export function buildRails(
  catalog: readonly ContentItem[],
  state: JourneyState,
  affinity: Affinity,
): Rail[] {
  const used = new Set<string>()
  const rails: Rail[] = []
  const seedBase = seedFrom(state.today, state.phase.id, state.dayInPhase)

  const add = (
    id: string,
    title: string,
    reason: string,
    opts: RecommendOptions & { min?: number },
  ) => {
    const items = recommend(catalog, state, affinity, {
      limit: 10,
      ...opts,
      exclude: used,
      seed: seedBase + id.length * 977,
    })
    if (items.length >= (opts.min ?? 3)) {
      items.forEach((i) => used.add(i.id))
      rails.push({ id, title, reason, items })
    }
  }

  const dayReason = state.dayLabel.replace(/^Dnes (je|jste) /, 'Protože jste ')

  add('for-you', 'Právě pro vás', dayReason, { limit: 8, min: 1 })

  add('watch', 'Podívejte se', 'Videa pro vaši fázi', { kind: 'video', limit: 10 })

  add('listen', 'Zklidněte se', 'Meditace a audio na dnešní večer', {
    kind: ['audio', 'podcast'],
    limit: 8,
  })

  add('read', 'K přečtení', 'Články, které teď dávají smysl', { kind: 'article', limit: 10 })

  add('stories', 'Příběhy žen jako vy', 'Nejste v tom sama', { kind: 'story', limit: 8 })

  add('practical', 'Ať na nic nezapomenete', 'Checklisty pro tuto fázi', {
    kind: 'checklist',
    limit: 8,
  })

  // Naučená témata, „protože často čtete o…“
  const topTopic = Object.entries(affinity.topics)
    .sort((a, b) => (b[1] ?? 0) - (a[1] ?? 0))
    .find(([, v]) => (v ?? 0) > 0.3)?.[0] as TopicId | undefined

  if (topTopic) {
    const items = recommend(catalog, state, affinity, {
      limit: 10,
      exclude: used,
      threshold: 0.02,
      seed: seedBase + 4231,
    }).filter((i) => i.topics.includes(topTopic))
    if (items.length >= 3) {
      items.forEach((i) => used.add(i.id))
      rails.push({
        id: `topic-${topTopic}`,
        title: 'Protože vás zajímá toto téma',
        reason: 'Podle toho, co si nejčastěji otevíráte',
        items,
      })
    }
  }

  add('ahead', 'Co vás čeká dál', 'Připravte se v klidu, s předstihem', {
    limit: 8,
    threshold: 0.02,
    jitter: 0.1,
  })

  return rails
}
