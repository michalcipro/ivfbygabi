import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import {
  applyTopicAffinity,
  getAffinity,
  getChecklistState,
  getProfile,
  recordContentEvent,
  savedIds,
} from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { CATALOG, contentById } from '@/lib/content'
import { recommend } from '@/lib/content/recommend'
import { KIND_ICONS, KIND_LABELS } from '@/lib/content/types'
import { TOPIC_LABELS } from '@/lib/domain/profile'
import { PHASES } from '@/lib/domain/phases'
import { Badge, Card, Hero, Markdown, SectionTitle } from '@/components/ui'
import { ContentCard } from '@/components/content-card'
import { ChecklistBody, SaveButton, QuizBody } from './interactive'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const item = contentById(id)
  return item ? { title: item.title, description: item.excerpt } : { title: 'Nenalezeno' }
}

export default async function ContentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const item = contentById(id)
  if (!item) notFound()

  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  recordContentEvent(ownerId, item.id, 'view')

  const isSaved = savedIds(ownerId).includes(item.id)
  const checklistState = item.kind === 'checklist' ? getChecklistState(ownerId, item.id) : {}

  const affinity = applyTopicAffinity(getAffinity(ownerId), CATALOG)
  const related = recommend(CATALOG, state, affinity, {
    limit: 6,
    exclude: new Set([item.id]),
  }).filter((r) => r.topics.some((t) => item.topics.includes(t)) || r.phases.some((p) => item.phases.includes(p)))

  return (
    <article className="space-y-10">
      <Hero token={item.hero} className="rounded-[var(--radius-xl)] px-7 py-14 md:px-12 md:py-20">
        <div className="relative z-10 max-w-2xl">
          <span className="inline-flex rounded-full bg-white/78 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {KIND_ICONS[item.kind]} {KIND_LABELS[item.kind]} · {item.minutes} min
          </span>
          <h1 className="display mt-5 text-[2rem] leading-[1.12] text-ink md:text-[2.75rem]">
            {item.title}
          </h1>
          <p className="mt-4 text-[1.0625rem] leading-relaxed text-ink/72">{item.excerpt}</p>
        </div>
      </Hero>

      <div className="flex flex-wrap items-center gap-2">
        <SaveButton contentId={item.id} initialSaved={isSaved} />
        {item.topics.map((t) => (
          <Link key={t} href={`/knihovna?topic=${t}`}>
            <Badge tone="soft">{TOPIC_LABELS[t]}</Badge>
          </Link>
        ))}
        {item.phases.slice(0, 3).map((p) => (
          <Link key={p} href={`/pruvodce/${p}`}>
            <Badge>{PHASES[p].name}</Badge>
          </Link>
        ))}
      </div>

      {item.mediaNote && (
        <Card muted className="flex items-start gap-4 p-6">
          <span className="text-xl text-[var(--color-taupe)]">{KIND_ICONS[item.kind]}</span>
          <div>
            <p className="text-[0.8125rem] font-semibold">
              {item.kind === 'audio' ? 'O této nahrávce' : 'O tomto videu'}
            </p>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">{item.mediaNote}</p>
            <p className="mt-3 text-xs text-faint">
              {item.kind === 'audio'
                ? 'Text níže je scénář nahrávky — můžete si ho přečíst i sama pro sebe.'
                : 'Text níže je přepis videa.'}
            </p>
          </div>
        </Card>
      )}

      <div className="max-w-2xl">
        <Markdown text={item.body} />
      </div>

      {item.kind === 'checklist' && item.checklist && (
        <ChecklistBody contentId={item.id} entries={item.checklist} initial={checklistState} />
      )}

      {item.kind === 'quiz' && item.quiz && <QuizBody questions={item.quiz} />}

      {item.chapters && item.chapters.length > 0 && (
        <section>
          <SectionTitle title="Kapitoly kurzu" />
          <div className="space-y-4">
            {item.chapters.map((ch, i) => (
              <Card key={i} className="p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="display text-xl">
                    {i + 1}. {ch.title}
                  </h3>
                  <span className="shrink-0 text-xs text-faint">{ch.minutes} min</span>
                </div>
                <div className="mt-3">
                  <Markdown text={ch.body} />
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      <footer className="space-y-4 border-t border-[var(--line)] pt-7 text-[0.8125rem] text-faint">
        {item.author && <p>Autor: {item.author}</p>}
        {item.reviewedBy && <p>{item.reviewedBy}</p>}
        {item.sources && item.sources.length > 0 && (
          <p>Vychází z: {item.sources.join(' · ')}</p>
        )}
        <p className="leading-relaxed">
          Obsah má informativní charakter a nenahrazuje vyšetření, diagnózu ani léčbu
          poskytnutou zdravotníkem. S konkrétními otázkami se obracejte na svého lékaře.
        </p>
      </footer>

      {related.length > 0 && (
        <section>
          <SectionTitle title="Mohlo by se hodit" subtitle="Podle toho, co právě čtete" />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {related.map((r) => (
              <ContentCard key={r.id} item={r} size="sm" />
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
