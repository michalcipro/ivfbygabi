import type { TopicId } from '../domain/profile'
import type { Affinity } from './recommend'

/**
 * Převod chování na zájmy.
 *
 * Sbíráme váhu na jednotlivé položky obsahu (otevřela, dočetla, uložila)
 * a tady z toho uděláme váhy témat 0–1, se kterými umí pracovat doporučovací
 * systém. Čistá funkce. Server ji plní z databáze, prohlížeč z localStorage.
 */

export type WeightedAffinity = Affinity & { _weights?: Map<string, number> }

/** Dopočítá témata z vah, jakmile známe katalog. */
export function applyTopicAffinity(
  affinity: Affinity,
  catalog: readonly { id: string; topics: TopicId[] }[],
): Affinity {
  const weights = (affinity as WeightedAffinity)._weights
  if (!weights || weights.size === 0) return affinity

  const byId = new Map(catalog.map((c) => [c.id, c.topics]))
  const raw: Partial<Record<TopicId, number>> = {}
  let max = 0

  for (const [contentId, weight] of weights) {
    const topics = byId.get(contentId)
    if (!topics) continue
    for (const t of topics) {
      raw[t] = (raw[t] ?? 0) + weight
      if (raw[t]! > max) max = raw[t]!
    }
  }

  if (max > 0) {
    for (const key of Object.keys(raw) as TopicId[]) {
      raw[key] = (raw[key] ?? 0) / max
    }
  }

  affinity.topics = raw
  return affinity
}
