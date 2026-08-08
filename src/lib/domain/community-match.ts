import type { JourneyState } from './journey'
import type { Profile } from './profile'
import { PHASES } from './phases'
import type { CommunityGroup } from '../shared/records'

/**
 * Párování na komunitu. Kdo patří ke komu.
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

/**
 * Skupiny komunity. Čtyři. Ne víc.
 *
 * Dřív se skupiny odvozovaly z fáze, měsíce transferu, každé diagnózy,
 * kliniky i věku. Ženě po druhém cyklu jich vyšlo přes deset a v každé
 * bylo pár lidí. Komunita, kde je všude prázdno, není komunita, je to
 * seznam prázdných místností.
 *
 * Čtyři skupiny podle toho, kde žena v léčbě je. Do každé smí každá,
 * ale jedna se jí podle fáze nabídne jako první, aby nemusela vybírat.
 *
 * Skupina po neúspěchu je oddělená schválně. Žena, které se to nepovedlo,
 * nemá číst o cizím pozitivním hCG, dokud si to sama nevybere.
 */

export const GROUP_IVF = 'jsem-v-ivf-procesu'
export const GROUP_PO_TRANSFERU = 'jsem-po-transferu'
export const GROUP_NEVYSLO = 'nevyslo-to'
export const GROUP_CHAT = 'vseobecny-chat'

export const GROUPS: GroupSpec[] = [
  {
    slug: GROUP_IVF,
    name: 'Jsem v IVF procesu',
    description:
      'Stimulace, kontroly, odběr, čekání na embrya, laboratoř, genetika, léky. Pro všechny, kdo jsou v cyklu a transfer je teprve před nimi.',
    kind: 'phase',
    matchKey: `group:${GROUP_IVF}`,
  },
  {
    slug: GROUP_PO_TRANSFERU,
    name: 'Jsem po transferu',
    description:
      'Dny po ET nebo KET, čekání na hCG, příznaky, nervozita, testování. Nejdelší dva týdny, které se dají strávit ve společnosti.',
    kind: 'phase',
    matchKey: `group:${GROUP_PO_TRANSFERU}`,
  },
  {
    slug: GROUP_NEVYSLO,
    name: 'Nevyšlo to',
    description:
      'Negativní hCG, neúspěšný nebo zrušený transfer, biochemické těhotenství, ztráta, cyklus bez embrya. Bez rad a bez cizích dobrých zpráv.',
    kind: 'special',
    matchKey: `group:${GROUP_NEVYSLO}`,
  },
  {
    slug: GROUP_CHAT,
    name: 'Všeobecný chat',
    description: 'Všechno ostatní. Otázky, zkušenosti, tipy a běžný život, který během léčby jde dál.',
    kind: 'special',
    matchKey: `group:${GROUP_CHAT}`,
  },
]

/** Fáze, po kterých se nabízí skupina pro neúspěch. */
const PO_NEUSPECHU = new Set([
  'waiting_next_attempt',
  'repeated_failure',
  'loss_biochemical',
  'loss_ectopic',
  'loss_missed',
  'loss_miscarriage',
  'uterine_revision',
])

/** Fáze, ve kterých je žena po transferu a čeká. */
const PO_TRANSFERU = new Set(['transfer', 'two_week_wait', 'beta_positive'])

/** Fáze uvnitř cyklu, ještě před transferem. */
const V_CYKLU = new Set([
  'ivf_prep',
  'stimulation',
  'retrieval',
  'fertilization',
  'embryo_culture',
  'genetic_testing',
  'iui',
])

/**
 * Která skupina se ženě nabídne jako první.
 *
 * Je to návrh, ne zámek. Do ostatních se dostane jedním klepnutím a nikde
 * jí aplikace neřekne, že tam nepatří.
 */
export function suggestedGroup(state: JourneyState): string {
  const id = state.phase.id
  if (PO_NEUSPECHU.has(id)) return GROUP_NEVYSLO
  if (PO_TRANSFERU.has(id)) return GROUP_PO_TRANSFERU
  if (V_CYKLU.has(id)) return GROUP_IVF
  return GROUP_CHAT
}

/**
 * Skupiny pro tuhle ženu. Vždycky všechny čtyři, jen v jiném pořadí:
 * doporučená první.
 */
export function groupSpecsFor(_profile: Profile, state: JourneyState): GroupSpec[] {
  const doporucena = suggestedGroup(state)
  return [...GROUPS].sort((a, b) =>
    a.slug === doporucena ? -1 : b.slug === doporucena ? 1 : 0,
  )
}

/** Jméno, pod kterým uživatelka vystupuje. Respektuje anonymní režim. */
export function communityName(profile: Profile, state: JourneyState): string {
  if (!profile.anonymousInCommunity && profile.displayName) return profile.displayName
  return `Anonymně · ${PHASES[state.phase.id].name}`
}
