import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { applyTopicAffinity, getAffinity, getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { isPhaseId, PHASES, PHASE_GROUP_META } from '@/lib/domain/phases'
import { CATALOG, PRODUCTS } from '@/lib/content'
import { recommend } from '@/lib/content/recommend'
import { KIND_LABELS, type ContentKind } from '@/lib/content/types'
import { ContentCard, ContentRow } from '@/components/content-card'
import { Badge, Card, EmptyState, Eyebrow, Hero, SectionTitle } from '@/components/ui'
import { ProductCard } from '@/components/product-card'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ phase: string }>
}): Promise<Metadata> {
  const { phase } = await params
  if (!isPhaseId(phase)) return { title: 'Nenalezeno' }
  return { title: PHASES[phase].title, description: PHASES[phase].description }
}

const KIND_ORDER: ContentKind[] = [
  'article',
  'video',
  'checklist',
  'audio',
  'podcast',
  'story',
  'course',
  'quiz',
  'live',
]

export default async function PhaseGuidePage({
  params,
}: {
  params: Promise<{ phase: string }>
}) {
  const { phase: phaseParam } = await params
  if (!isPhaseId(phaseParam)) notFound()

  const phase = PHASES[phaseParam]
  const meta = PHASE_GROUP_META[phase.group]

  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)
  const isCurrent = state.phase.id === phase.id

  const items = CATALOG.filter((c) => c.phases.includes(phase.id))
  const essentials = items.filter((c) => c.level === 'essential')
  const byKind = KIND_ORDER.map((kind) => ({
    kind,
    items: items.filter((c) => c.kind === kind),
  })).filter((g) => g.items.length > 0)

  const affinity = applyTopicAffinity(getAffinity(ownerId), CATALOG)
  const recommended = isCurrent
    ? recommend(items, state, affinity, { limit: 6 })
    : items.slice(0, 6)

  const products = PRODUCTS.filter((p) => p.phases.includes(phase.id)).slice(0, 6)

  return (
    <div className="space-y-11">
      <Hero token="linen" className="rounded-[var(--radius-xl)] px-7 py-12 md:px-11 md:py-16">
        <div className="relative z-10 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/pruvodce">
              <Badge tone="soft">← Průvodce</Badge>
            </Link>
            <Badge>{meta.name}</Badge>
            {isCurrent && <Badge tone="accent">Vaše aktuální fáze</Badge>}
          </div>
          <h1 className="display mt-5 text-[2.25rem] leading-[1.1] text-ink md:text-[3rem]">
            {phase.title}
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink/72">{phase.description}</p>
          {isCurrent && (
            <p className="mt-5 inline-flex rounded-full bg-white/70 px-4 py-2 text-[0.875rem] text-ink backdrop-blur-sm">
              {state.dayLabel}
            </p>
          )}
        </div>
      </Hero>

      {items.length === 0 ? (
        <EmptyState
          title="Obsah pro tuto fázi připravujeme"
          body="Knihovna roste každý týden. Mezitím se podívejte do sousedních fází — hodně z toho platí i tady."
          action={
            <Link href="/knihovna" className="btn btn-secondary">
              Otevřít knihovnu
            </Link>
          }
        />
      ) : (
        <>
          {recommended.length > 0 && (
            <section>
              <SectionTitle
                title={isCurrent ? 'Začněte tady' : 'Přehled fáze'}
                subtitle={
                  isCurrent
                    ? 'Vybráno podle toho, kolikátý je den vaší fáze'
                    : 'Nejdůležitější materiály'
                }
              />
              <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
                {recommended.map((item) => (
                  <ContentCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {essentials.length > 0 && (
            <section>
              <SectionTitle
                title="Základ, který byste měla znát"
                subtitle={`${essentials.length} materiálů`}
              />
              <div className="divide-y divide-[var(--line)]">
                {essentials.map((item) => (
                  <ContentRow key={item.id} item={item} />
                ))}
              </div>
            </section>
          )}

          {byKind.map((group) => (
            <section key={group.kind}>
              <SectionTitle
                title={pluralKind(group.kind)}
                subtitle={`${group.items.length} v této fázi`}
              />
              <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
                {group.items.map((item) => (
                  <ContentCard key={item.id} item={item} size="sm" />
                ))}
              </div>
            </section>
          ))}
        </>
      )}

      {products.length > 0 && (
        <section>
          <SectionTitle
            title="Co se v této fázi hodí"
            subtitle="Řazeno podle toho, co je teď užitečné — ne podle reklamy"
            action={
              <Link href="/obchod" className="text-[0.8125rem] text-soft hover:underline">
                Vše
              </Link>
            }
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {phase.next.length > 0 && (
        <section>
          <SectionTitle title="Co přichází dál" subtitle="Připravte se v klidu, s předstihem" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {phase.next.map((id) => (
              <Link
                key={id}
                href={`/pruvodce/${id}`}
                className="group rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--card)] p-5 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[var(--shadow-veil)]"
              >
                <h3 className="text-[0.9375rem] font-medium transition-colors group-hover:text-[var(--color-taupe-deep)]">
                  {PHASES[id].name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-soft">
                  {PHASES[id].description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Card muted className="p-6 text-[0.8125rem] leading-relaxed text-soft">
        Obsah průvodce má informativní charakter a nenahrazuje péči vašeho lékaře.
        Postupy se liší podle kliniky, diagnózy i konkrétní situace — vždy se řiďte tím,
        co vám doporučí váš ošetřující tým.
      </Card>
    </div>
  )
}

function pluralKind(kind: ContentKind): string {
  const map: Partial<Record<ContentKind, string>> = {
    article: 'Články',
    video: 'Videa',
    audio: 'Meditace a audio',
    podcast: 'Podcasty',
    checklist: 'Checklisty',
    story: 'Příběhy žen',
    course: 'Kurzy',
    quiz: 'Kvízy',
    live: 'Živá vysílání',
  }
  return map[kind] ?? KIND_LABELS[kind]
}
