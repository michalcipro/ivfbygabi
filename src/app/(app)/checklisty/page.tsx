import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { checklistProgress, getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { contentByKind } from '@/lib/content'
import { PHASES, PHASE_GROUP_META } from '@/lib/domain/phases'
import { Card, EmptyState, Eyebrow, ProgressRing, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Checklisty' }
export const dynamic = 'force-dynamic'

export default async function ChecklistsPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const all = contentByKind('checklist')
  const progress = checklistProgress(ownerId)

  const forNow = all.filter((c) => c.phases.includes(state.phase.id))
  const started = all.filter((c) => progress[c.id] !== undefined && !forNow.includes(c))
  const rest = all.filter((c) => !forNow.includes(c) && !started.includes(c))

  const byGroup = rest.reduce<Record<string, typeof rest>>((acc, c) => {
    const group = c.phases[0] ? PHASES[c.phases[0]].group : 'planning'
    ;(acc[group] ??= []).push(c)
    return acc
  }, {})

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Ať na nic nezapomenete</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Checklisty</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Odběr, transfer, taška do porodnice, výbavička, NICU, návrat domů. Odškrtávejte
          si postupně — postup se ukládá.
        </p>
      </header>

      {all.length === 0 ? (
        <EmptyState
          icon="✓"
          title="Checklisty připravujeme"
          body="Knihovna roste každý týden. Za chvíli tu na vás bude čekat kompletní sada."
        />
      ) : (
        <>
          {forNow.length > 0 && (
            <section>
              <SectionTitle
                title="Pro vaši fázi"
                subtitle={state.phase.title}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {forNow.map((c) => (
                  <ChecklistCard key={c.id} item={c} progress={progress[c.id] ?? 0} />
                ))}
              </div>
            </section>
          )}

          {started.length > 0 && (
            <section>
              <SectionTitle title="Rozpracované" subtitle="Vrátíte se k nim, až budete chtít" />
              <div className="grid gap-4 sm:grid-cols-2">
                {started.map((c) => (
                  <ChecklistCard key={c.id} item={c} progress={progress[c.id] ?? 0} />
                ))}
              </div>
            </section>
          )}

          {Object.entries(byGroup).map(([group, items]) => (
            <section key={group}>
              <SectionTitle
                title={PHASE_GROUP_META[group as keyof typeof PHASE_GROUP_META]?.name ?? group}
                subtitle={`${items.length} checklistů`}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {items.map((c) => (
                  <ChecklistCard key={c.id} item={c} progress={progress[c.id] ?? 0} />
                ))}
              </div>
            </section>
          ))}
        </>
      )}
    </div>
  )
}

function ChecklistCard({
  item,
  progress,
}: {
  item: { id: string; title: string; excerpt: string; checklist?: { id: string }[] }
  progress: number
}) {
  const total = item.checklist?.length ?? 0
  return (
    <Link href={`/knihovna/${item.id}`}>
      <Card className="flex h-full items-start gap-5 p-6 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[var(--shadow-veil)]">
        <ProgressRing value={progress} size={48} stroke={3} />
        <div className="min-w-0 flex-1">
          <h3 className="text-[0.9375rem] font-medium leading-snug">{item.title}</h3>
          <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-soft">
            {item.excerpt}
          </p>
          {total > 0 && (
            <p className="mt-2.5 text-xs text-faint">
              {Math.round(progress * total)} z {total} hotovo
            </p>
          )}
        </div>
      </Card>
    </Link>
  )
}
