import type {
  ContentItem,
  ContentKind,
  ContentPack,
  DailyCard,
  Encouragement,
  GlossaryTerm,
  Product,
} from './types'

import { pack as planning } from './packs/planning'
import { pack as diagnostics } from './packs/diagnostics'
import { pack as loss } from './packs/loss'
import { pack as pregnancy } from './packs/pregnancy'
import { pack as ivfCycle } from './packs/ivf-cycle'
import { pack as transferWait } from './packs/transfer-wait'
import { pack as marketplace } from './packs/marketplace'
import { pack as cardsCycle } from './packs/cards-cycle'
import { pack as cardsPregnancy } from './packs/cards-pregnancy'
import { pack as cardsPostpartum } from './packs/cards-postpartum'
import { pack as cardsNicu } from './packs/cards-nicu'
import { pack as cardsGaps } from './packs/cards-gaps'
import { pack as encouragements } from './packs/encouragements'
import { pack as meditations } from './packs/meditations'

/**
 * Registr obsahu.
 *
 * Balíky píšeme odděleně podle etapy cesty a tady je slepíme dohromady.
 * Duplicitní ID by tiše rozbila doporučování, proto je při načtení odfiltrujeme.
 */

const PACKS: ContentPack[] = [
  planning,
  diagnostics,
  loss,
  pregnancy,
  ivfCycle,
  transferWait,
  marketplace,
  cardsCycle,
  cardsPregnancy,
  cardsPostpartum,
  cardsNicu,
  cardsGaps,
  encouragements,
  meditations,
]

function dedupe<T extends { id: string }>(items: T[]): T[] {
  const seen = new Set<string>()
  const out: T[] = []
  for (const item of items) {
    if (seen.has(item.id)) continue
    seen.add(item.id)
    out.push(item)
  }
  return out
}

export const CATALOG: ContentItem[] = dedupe(PACKS.flatMap((p) => p.items ?? []))

export const DAILY_CARDS: DailyCard[] = dedupe(PACKS.flatMap((p) => p.dailyCards ?? []))

export const ENCOURAGEMENTS: Encouragement[] = dedupe(
  PACKS.flatMap((p) => p.encouragements ?? []),
)

export const GLOSSARY: GlossaryTerm[] = (() => {
  const seen = new Set<string>()
  const out: GlossaryTerm[] = []
  for (const term of PACKS.flatMap((p) => p.glossary ?? [])) {
    const key = term.term.toLowerCase()
    if (seen.has(key)) continue
    seen.add(key)
    out.push(term)
  }
  return out.sort((a, b) => a.term.localeCompare(b.term, 'cs'))
})()

export const PRODUCTS: Product[] = dedupe(PACKS.flatMap((p) => p.products ?? []))

const BY_ID = new Map(CATALOG.map((c) => [c.id, c]))

export function contentById(id: string): ContentItem | undefined {
  return BY_ID.get(id)
}

export function contentByKind(kind: ContentKind): ContentItem[] {
  return CATALOG.filter((c) => c.kind === kind)
}

export function contentByIds(ids: readonly string[]): ContentItem[] {
  return ids.map((id) => BY_ID.get(id)).filter((c): c is ContentItem => Boolean(c))
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** Fulltext přes titulky, perexy a těla. Jednoduché, ale pro tuhle velikost stačí. */
export function searchContent(query: string, limit = 40): ContentItem[] {
  const q = normalize(query.trim())
  if (q.length < 2) return []
  const words = q.split(/\s+/).filter(Boolean)

  const scored = CATALOG.map((item) => {
    const title = normalize(item.title)
    const excerpt = normalize(item.excerpt)
    const body = normalize(item.body)
    let score = 0
    for (const w of words) {
      if (title.includes(w)) score += 5
      else if (excerpt.includes(w)) score += 2
      else if (body.includes(w)) score += 1
    }
    return { item, score }
  })

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.item)
}

export function searchGlossary(query: string): GlossaryTerm[] {
  const q = normalize(query.trim())
  if (q.length < 2) return GLOSSARY
  return GLOSSARY.filter(
    (t) =>
      normalize(t.term).includes(q) ||
      t.aliases?.some((a) => normalize(a).includes(q)) ||
      normalize(t.short).includes(q),
  )
}

/** Co přibylo za posledních 7 dní — pohání sekci „Nové tento týden“. */
export function newThisWeek(today: string, limit = 12): ContentItem[] {
  const cutoff = Date.parse(today) - 7 * 86_400_000
  return CATALOG.filter((c) => Date.parse(c.publishedOn) >= cutoff)
    .sort((a, b) => b.publishedOn.localeCompare(a.publishedOn))
    .slice(0, limit)
}

export const CONTENT_STATS = {
  items: CATALOG.length,
  articles: CATALOG.filter((c) => c.kind === 'article').length,
  videos: CATALOG.filter((c) => c.kind === 'video').length,
  audio: CATALOG.filter((c) => c.kind === 'audio').length,
  checklists: CATALOG.filter((c) => c.kind === 'checklist').length,
  stories: CATALOG.filter((c) => c.kind === 'story').length,
  dailyCards: DAILY_CARDS.length,
  glossary: GLOSSARY.length,
  products: PRODUCTS.length,
}
