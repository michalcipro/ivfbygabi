import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { PHASE_GROUPS, PHASE_GROUP_META, phasesInGroup } from '@/lib/domain/phases'
import { CATALOG } from '@/lib/content'
import { Card, Eyebrow } from '@/components/ui'

export const metadata: Metadata = { title: 'Průvodce' }
export const dynamic = 'force-dynamic'

/** Kompletní mapa cesty. Každá fáze má vlastního průvodce. */
export default async function GuideIndexPage() {
  const user = (await currentUser())!
  const profile = getProfile(dataOwnerId(user))
  const state = resolveJourney(profile)

  const counts = CATALOG.reduce<Record<string, number>>((acc, item) => {
    for (const p of item.phases) acc[p] = (acc[p] ?? 0) + 1
    return acc
  }, {})

  return (
    <div className="space-y-10">
      <header>
        <Eyebrow>Celá cesta</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Průvodce</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Každá fáze má svého průvodce — co se děje, na co se připravit, co je normální
          a kdy volat lékaře.
        </p>
      </header>

      <Card className="flex flex-wrap items-center justify-between gap-5 p-7">
        <div>
          <Eyebrow>Právě jste tady</Eyebrow>
          <p className="display mt-2 text-2xl">{state.phase.title}</p>
          <p className="mt-1.5 text-[0.9375rem] text-soft">{state.dayLabel}</p>
        </div>
        <Link href={`/pruvodce/${state.phase.id}`} className="btn btn-primary">
          Otevřít
        </Link>
      </Card>

      {PHASE_GROUPS.map((group) => {
        const meta = PHASE_GROUP_META[group]
        const phases = phasesInGroup(group)
        return (
          <section key={group}>
            <div className="mb-4 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: meta.accent }} />
              <h2 className="display text-2xl">{meta.name}</h2>
              <span className="text-[0.8125rem] text-faint">— {meta.blurb}</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {phases.map((p) => {
                const active = p.id === state.phase.id
                return (
                  <Link
                    key={p.id}
                    href={`/pruvodce/${p.id}`}
                    className={`group rounded-[var(--radius-lg)] border p-5 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[var(--shadow-veil)] ${
                      active
                        ? 'border-[var(--color-sand)] bg-[var(--color-champagne)]/25'
                        : 'border-[var(--line)] bg-[var(--card)]'
                    }`}
                  >
                    <h3 className="text-[0.9375rem] font-medium transition-colors group-hover:text-[var(--color-taupe-deep)]">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-soft">
                      {p.description}
                    </p>
                    <p className="mt-3 text-xs text-faint">{counts[p.id] ?? 0} materiálů</p>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
