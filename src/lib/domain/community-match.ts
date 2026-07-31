import type { JourneyState } from './journey'
import type { Profile } from './profile'
import { MODIFIER_LABELS } from './profile'
import { PHASES } from './phases'
import type { CommunityGroup } from '../shared/records'

/**
 * Párování na komunitu — kdo patří ke komu.
 *
 * Čistá funkce bez databáze, aby stejné pravidlo platilo na serveru
 * i v prohlížeči. Databázová vrstva výsledek jen zhmotní do tabulky
 * (`repo-community.matchedGroups`), klient si ho vykreslí přímo.
 */

export type GroupSpec = Omit<CommunityGroup, 'id' | 'members'>

export function slugify(s: string): string {
  return s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

const MONTHS = [
  'leden',
  'únor',
  'březen',
  'duben',
  'květen',
  'červen',
  'červenec',
  'srpen',
  'září',
  'říjen',
  'listopad',
  'prosinec',
]

export function czMonthYear(ym: string): string {
  const [y, m] = ym.split('-')
  return `${MONTHS[Number(m) - 1]} ${y}`
}

/**
 * Skupiny, které dávají smysl právě pro tuhle ženu. Pořadí je pořadí
 * relevance — fáze první, otevřený kruh poslední.
 */
export function groupSpecsFor(profile: Profile, state: JourneyState): GroupSpec[] {
  const out: GroupSpec[] = []
  const phase = state.phase

  // 1. Skupina fáze — vždycky.
  out.push({
    slug: `faze-${slugify(phase.name)}`,
    name: phase.name,
    description: `Ženy, které jsou právě teď ve stejné fázi jako vy: ${phase.title.toLowerCase()}.`,
    kind: 'phase',
    matchKey: `phase:${phase.id}`,
  })

  // 2. Měsíc transferu — nejsilnější pouto v IVF komunitě.
  if (profile.transferOn) {
    const ym = profile.transferOn.slice(0, 7)
    out.push({
      slug: `transfer-${ym}`,
      name: `Transfer ${czMonthYear(ym)}`,
      description: 'Ženy, které měly transfer ve stejném měsíci. Čekáte spolu.',
      kind: 'special',
      matchKey: `transfer:${ym}`,
    })
  }

  // 4. Diagnózy a situace.
  for (const mod of profile.modifiers) {
    const label = MODIFIER_LABELS[mod]
    if (!label) continue
    const kind: CommunityGroup['kind'] =
      mod === 'pcos' || mod === 'endometriosis' || mod === 'low_amh' || mod === 'male_factor'
        ? 'diagnosis'
        : 'special'
    out.push({
      slug: `situace-${slugify(label)}`,
      name: label,
      description: `Bezpečný prostor pro ženy, kterých se týká: ${label.toLowerCase()}.`,
      kind,
      matchKey: `mod:${mod}`,
    })
  }

  // 5. Klinika.
  if (profile.clinicName) {
    out.push({
      slug: `klinika-${slugify(profile.clinicName)}`,
      name: profile.clinicName,
      description: 'Ženy, které chodí na stejnou kliniku. Praktické zkušenosti z první ruky.',
      kind: 'clinic',
      matchKey: `clinic:${slugify(profile.clinicName)}`,
    })
  }

  // 6. Věková skupina.
  if (profile.birthYear) {
    const age = new Date().getFullYear() - profile.birthYear
    const band = age < 30 ? 'do 30' : age < 35 ? '30–34' : age < 40 ? '35–39' : '40+'
    out.push({
      slug: `vek-${slugify(band)}`,
      name: `Věk ${band}`,
      description: 'Podobný věk znamená podobná rozhodnutí a podobný tlak času.',
      kind: 'age',
      matchKey: `age:${band}`,
    })
  }

  // 7. Věčně otevřená skupina pro všechny.
  out.push({
    slug: 'vecerni-kruh',
    name: 'Večerní kruh',
    description: 'Otevřený prostor pro cokoliv, co potřebujete říct nahlas. Bez rad, jen podpora.',
    kind: 'special',
    matchKey: null,
  })

  const seen = new Set<string>()
  return out.filter((g) => (seen.has(g.slug) ? false : (seen.add(g.slug), true)))
}

/** Jméno, pod kterým uživatelka vystupuje — respektuje anonymní režim. */
export function communityName(profile: Profile, state: JourneyState): string {
  if (!profile.anonymousInCommunity && profile.displayName) return profile.displayName
  return `Anonymně · ${PHASES[state.phase.id].name}`
}
