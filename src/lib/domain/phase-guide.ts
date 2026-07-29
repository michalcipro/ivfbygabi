import type { PhaseId } from './phases'

/**
 * Průvodce fází.
 *
 * Tohle je kostra, kterou má mít každá fáze cesty — ne volná hromada článků,
 * ale vždycky stejných devět věcí, aby uživatelka věděla, co kde hledat:
 *
 *   co mě čeká · na co se připravit · hlava · tělo a pohyb · doplňky ·
 *   partner · co sledovat · otázky pro lékaře · slovníček fáze
 *
 * Články, videa, příběhy a checklisty se k tomu dotahují z knihovny podle
 * fáze — tady je to, co se z knihovny vyčíst nedá.
 */

/**
 * Doplněk stravy. Nikdy tu není dávkování — to patří lékaři a liší se podle
 * hodnot, diagnózy a toho, co uživatelka bere dál. `evidence` říká poctivě,
 * jak silný ten důvod je; bez toho by to byl katalog slibů.
 */
export interface Supplement {
  name: string
  /** Proč se o něm v téhle fázi mluví. */
  why: string
  /**
   * `standard` = běžná součást doporučení odborných společností,
   * `diskutovaný` = používá se, data jsou smíšená,
   * `podle hodnot` = má smysl jen když se něco naměří.
   */
  evidence: 'standard' | 'diskutovaný' | 'podle hodnot'
  note?: string
}

export interface GuideBlock {
  title: string
  body: string
}

export interface PhaseGuide {
  phase: PhaseId
  /** Jedna věta, co tahle fáze je. Ukazuje se hned pod nadpisem. */
  summary: string
  /** Co vás čeká — chronologicky, konkrétně. */
  whatAwaits: string[]
  /** Na co se připravit — praktické věci, které se dají udělat dopředu. */
  prepareFor: string[]
  /** Jak pracovat s hlavou. */
  mind: GuideBlock[]
  /** Tělo a pohyb — co se hodí a co v téhle fázi ne. */
  body: GuideBlock[]
  supplements: Supplement[]
  /** Co může dělat partner. Konkrétní věty, ne „být oporou“. */
  partner: string[]
  /** Co má smysl sledovat — z toho se pak kreslí grafy v Denníku a Zdraví. */
  track: string[]
  /** Otázky, které se vyplatí položit lékaři. */
  askDoctor: string[]
  /** Pojmy, které v téhle fázi uslyšíte. Musí existovat ve slovníku. */
  terms: string[]
}

const REGISTRY = new Map<PhaseId, PhaseGuide>()

export function registerGuides(guides: PhaseGuide[]): void {
  for (const g of guides) REGISTRY.set(g.phase, g)
}

export function guideFor(phase: PhaseId): PhaseGuide | null {
  return REGISTRY.get(phase) ?? null
}

export function guideCount(): number {
  return REGISTRY.size
}
