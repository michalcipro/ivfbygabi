import type { JourneyState } from './journey'
import type { Profile } from './profile'
import { addDays } from './dates'
import type { CalendarEvent } from '../shared/records'

/**
 * Události, které se doplní samy.
 *
 * Pravidlo: vždycky jen to, co bezpečně plyne z dat profilu — nic, co by
 * uživatelku mohlo zmást falešným termínem. Kde jde o odhad, je to napsané
 * v poznámce.
 *
 * Čistá funkce, aby stejné události vznikaly na serveru i v prohlížeči.
 */

export type AutoEvent = Omit<CalendarEvent, 'id' | 'done' | 'auto'>

export function autoEventsFor(profile: Profile, state: JourneyState): AutoEvent[] {
  const out: AutoEvent[] = []

  if (profile.transferOn) {
    out.push({
      title: 'Embryotransfer',
      kind: 'transfer',
      onDate: profile.transferOn,
      atTime: null,
      location: profile.clinicName,
      note: null,
    })
    // Odběr hCG se běžně dělá zhruba 10.–12. den po transferu blastocysty.
    const embryoDay = profile.embryoDayAtTransfer ?? 5
    out.push({
      title: 'Odběr hCG (orientačně)',
      kind: 'hcg',
      onDate: addDays(profile.transferOn, embryoDay === 3 ? 12 : 10),
      atTime: null,
      location: profile.clinicName,
      note: 'Přesný termín vám určí klinika — tohle je jen orientační odhad.',
    })
  }

  if (profile.retrievalOn) {
    out.push({
      title: 'Odběr vajíček',
      kind: 'odber',
      onDate: profile.retrievalOn,
      atTime: null,
      location: profile.clinicName,
      note: null,
    })
  }

  // Připomínka přípravy otázek před nejbližší kontrolou.
  if (state.nextMilestone && state.nextMilestone.inDays > 2) {
    out.push({
      title: `Připravit otázky: ${state.nextMilestone.label.toLowerCase()}`,
      kind: 'vlastni',
      onDate: addDays(state.nextMilestone.date, -1),
      atTime: null,
      location: null,
      note: null,
    })
  }

  return out
}
