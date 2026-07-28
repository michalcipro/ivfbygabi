import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import {
  EVENT_KINDS,
  ensureAutoEvent,
  listEvents,
  listMedications,
  medicationLogsFor,
} from '@/lib/db/repo-health'
import { estimatedDueDate, resolveJourney } from '@/lib/domain/journey'
import { addDays, czDays, formatCzechDate, today as todayIso } from '@/lib/domain/dates'
import { Badge, Card, EmptyState, Eyebrow, SectionTitle } from '@/components/ui'
import { AddEventForm, AddMedicationForm, EventRow, MedicationRow } from './forms'

export const metadata: Metadata = { title: 'Kalendář' }
export const dynamic = 'force-dynamic'

/**
 * Kalendář a připomínky. Část událostí generujeme automaticky z profilu —
 * uživatelka nemusí zadávat to, co už jednou řekla.
 */
export default async function CalendarPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)
  const today = state.today

  generateAutoEvents(ownerId, profile, state)

  const events = listEvents(ownerId, addDays(today, -60), addDays(today, 400))
  const past = events.filter((e) => e.onDate < today).reverse()
  const upcoming = events.filter((e) => e.onDate >= today)

  const meds = listMedications(ownerId)
  const takenToday = new Set(medicationLogsFor(ownerId, today))

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Ať vám nic neuteče</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Kalendář</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Kontroly, odběry, léky i očkování. Co jde odvodit z vašeho profilu,
          doplníme automaticky.
        </p>
      </header>

      <section>
        <SectionTitle title="Dnešní léky a injekce" />
        {meds.filter((m) => m.active).length === 0 ? (
          <EmptyState
            icon="◐"
            title="Zatím žádné léky"
            body="Přidejte léky, které užíváte — budeme vám je připomínat na domovské stránce a můžete si odškrtávat, co jste vzala."
          />
        ) : (
          <Card className="divide-y divide-[var(--line)]">
            {meds
              .filter((m) => m.active)
              .map((m) => (
                <MedicationRow
                  key={m.id}
                  medication={m}
                  date={today}
                  taken={takenToday.has(m.id)}
                />
              ))}
          </Card>
        )}
        <div className="mt-5">
          <AddMedicationForm />
        </div>
      </section>

      <section>
        <SectionTitle title="Co vás čeká" subtitle={`${upcoming.length} nadcházejících událostí`} />
        {upcoming.length === 0 ? (
          <EmptyState
            icon="◈"
            title="Kalendář je prázdný"
            body="Přidejte termín kontroly nebo odběru a my vám ho připomeneme."
          />
        ) : (
          <div className="space-y-6">
            {groupByMonth(upcoming).map(([month, items]) => (
              <div key={month}>
                <p className="eyebrow mb-3">{month}</p>
                <Card className="divide-y divide-[var(--line)]">
                  {items.map((e) => (
                    <EventRow key={e.id} event={e} today={today} />
                  ))}
                </Card>
              </div>
            ))}
          </div>
        )}
        <div className="mt-5">
          <AddEventForm kinds={Object.entries(EVENT_KINDS).map(([k, v]) => ({ key: k, ...v }))} />
        </div>
      </section>

      {past.length > 0 && (
        <section>
          <SectionTitle title="Co máte za sebou" />
          <Card className="divide-y divide-[var(--line)]">
            {past.slice(0, 20).map((e) => (
              <EventRow key={e.id} event={e} today={today} />
            ))}
          </Card>
        </section>
      )}

      {state.nextMilestone && (
        <Card muted className="flex flex-wrap items-center justify-between gap-4 p-6">
          <div>
            <Eyebrow>Nejbližší milník</Eyebrow>
            <p className="display mt-2 text-xl">
              {state.nextMilestone.icon} {state.nextMilestone.label}
            </p>
          </div>
          <div className="text-right">
            <p className="text-[0.9375rem]">{formatCzechDate(state.nextMilestone.date)}</p>
            <p className="text-[0.8125rem] text-faint">za {czDays(state.nextMilestone.inDays)}</p>
          </div>
        </Card>
      )}
    </div>
  )
}

/**
 * Automatické události. Vždycky jen to, co bezpečně plyne z dat profilu —
 * nic, co by uživatelku mohlo zmást falešným termínem.
 */
function generateAutoEvents(
  userId: string,
  profile: ReturnType<typeof getProfile>,
  state: ReturnType<typeof resolveJourney>,
) {
  if (profile.transferOn) {
    ensureAutoEvent(userId, {
      title: 'Embryotransfer',
      kind: 'transfer',
      onDate: profile.transferOn,
      atTime: null,
      location: profile.clinicName,
      note: null,
    })
    // Odběr beta HCG se běžně dělá zhruba 10.–12. den po transferu blastocysty.
    const embryoDay = profile.embryoDayAtTransfer ?? 5
    ensureAutoEvent(userId, {
      title: 'Odběr beta HCG (orientačně)',
      kind: 'hcg',
      onDate: addDays(profile.transferOn, embryoDay === 3 ? 12 : 10),
      atTime: null,
      location: profile.clinicName,
      note: 'Přesný termín vám určí klinika — tohle je jen orientační odhad.',
    })
  }

  if (profile.retrievalOn) {
    ensureAutoEvent(userId, {
      title: 'Odběr vajíček',
      kind: 'odber',
      onDate: profile.retrievalOn,
      atTime: null,
      location: profile.clinicName,
      note: null,
    })
  }

  const due = estimatedDueDate(profile)
  if (due && !profile.birthOn) {
    ensureAutoEvent(userId, {
      title: 'Termín porodu',
      kind: 'porod',
      onDate: due,
      atTime: null,
      location: null,
      note: null,
    })
  }

  // Kontrola po šestinedělí.
  if (profile.birthOn) {
    ensureAutoEvent(userId, {
      title: 'Kontrola po šestinedělí',
      kind: 'kontrola',
      onDate: addDays(profile.birthOn, 42),
      atTime: null,
      location: null,
      note: 'Přesný termín domluvte se svým gynekologem.',
    })
  }

  // Připomínka přípravy otázek před nejbližší kontrolou.
  if (state.nextMilestone && state.nextMilestone.inDays > 2) {
    ensureAutoEvent(userId, {
      title: `Připravit otázky: ${state.nextMilestone.label.toLowerCase()}`,
      kind: 'vlastni',
      onDate: addDays(state.nextMilestone.date, -1),
      atTime: null,
      location: null,
      note: null,
    })
  }
}

const MONTHS = [
  'Leden',
  'Únor',
  'Březen',
  'Duben',
  'Květen',
  'Červen',
  'Červenec',
  'Srpen',
  'Září',
  'Říjen',
  'Listopad',
  'Prosinec',
]

function groupByMonth<T extends { onDate: string }>(items: T[]): Array<[string, T[]]> {
  const groups = new Map<string, T[]>()
  for (const item of items) {
    const [y, m] = item.onDate.split('-')
    const key = `${MONTHS[Number(m) - 1]} ${y}`
    const list = groups.get(key)
    if (list) list.push(item)
    else groups.set(key, [item])
  }
  return [...groups.entries()]
}
