import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { applyTopicAffinity, getAffinity, getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { CATALOG, CONTENT_STATS, newThisWeek } from '@/lib/content'
import { buildRails, recommend } from '@/lib/content/recommend'
import { KIND_LABELS, type ContentKind } from '@/lib/content/types'
import { ContentCard, FeatureCard } from '@/components/content-card'
import { Badge, Card, Eyebrow, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Objevit' }
export const dynamic = 'force-dynamic'

/**
 * „IVF Netflix“. Řady obsahu, každá s vlastním důvodem, proč tu je.
 * Pořadí se mění den ode dne, ale v rámci jednoho dne je stabilní.
 */
export default async function DiscoverPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const affinity = applyTopicAffinity(getAffinity(ownerId), CATALOG)
  const rails = buildRails(CATALOG, state, affinity)
  const feature = recommend(CATALOG, state, affinity, { limit: 1 })[0]
  const fresh = newThisWeek(state.today, 10)

  const kinds: ContentKind[] = ['video', 'audio', 'article', 'checklist', 'story', 'podcast']

  return (
    <div className="space-y-12">
      <header>
        <Eyebrow>Vybráno pro vás</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">
          Objevit
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          {state.dayLabel} — a podle toho vybíráme, co vám dnes nabídneme.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {kinds.map((k) => (
            <Link key={k} href={`/knihovna?kind=${k}`}>
              <Badge tone="soft">{KIND_LABELS[k]}</Badge>
            </Link>
          ))}
        </div>
      </header>

      {feature && (
        <section>
          <FeatureCard
            item={feature}
            reason={state.dayLabel.replace(/^Dnes (je|jste) /, 'Protože jste ')}
          />
        </section>
      )}

      {fresh.length >= 3 && (
        <section className="fade-up">
          <SectionTitle title="Nové tento týden" subtitle="Platforma se nikdy nezastaví" />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {fresh.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      )}

      {rails.map((rail) => (
        <section key={rail.id} className="fade-up">
          <SectionTitle title={rail.title} subtitle={rail.reason} />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {rail.items.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      <Card muted className="p-7 text-center">
        <p className="display text-xl">
          {CONTENT_STATS.items} materiálů v knihovně
        </p>
        <p className="mt-2 text-[0.9375rem] text-soft">
          {CONTENT_STATS.articles} článků · {CONTENT_STATS.videos} videí ·{' '}
          {CONTENT_STATS.audio} meditací · {CONTENT_STATS.checklists} checklistů ·{' '}
          {CONTENT_STATS.stories} příběhů
        </p>
        <Link
          href="/knihovna"
          className="btn btn-secondary mt-6 !py-2.5 !text-[0.875rem]"
        >
          Procházet celou knihovnu
        </Link>
      </Card>
    </div>
  )
}
