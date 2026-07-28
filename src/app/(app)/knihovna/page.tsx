import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile, savedIds } from '@/lib/db/repo'
import { contentByIds, CATALOG, searchContent, searchGlossary } from '@/lib/content'
import { resolveJourney } from '@/lib/domain/journey'
import { CONTENT_KINDS, KIND_LABELS, type ContentKind } from '@/lib/content/types'
import { TOPIC_IDS, TOPIC_LABELS, type TopicId } from '@/lib/domain/profile'
import { PHASE_GROUPS, PHASE_GROUP_META, PHASES } from '@/lib/domain/phases'
import { ContentCard, ContentRow } from '@/components/content-card'
import { Card, EmptyState, Eyebrow, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Knihovna' }
export const dynamic = 'force-dynamic'

interface SearchParams {
  q?: string
  kind?: string
  topic?: string
  group?: string
  ulozene?: string
}

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const query = (params.q ?? '').trim()
  const kind = CONTENT_KINDS.includes(params.kind as ContentKind)
    ? (params.kind as ContentKind)
    : null
  const topic = TOPIC_IDS.includes(params.topic as TopicId) ? (params.topic as TopicId) : null
  const group = PHASE_GROUPS.includes(params.group as (typeof PHASE_GROUPS)[number])
    ? (params.group as (typeof PHASE_GROUPS)[number])
    : null
  const onlySaved = params.ulozene === '1'

  const saved = savedIds(ownerId)

  let results = query ? searchContent(query, 120) : [...CATALOG]
  if (kind) results = results.filter((c) => c.kind === kind)
  if (topic) results = results.filter((c) => c.topics.includes(topic))
  if (group) results = results.filter((c) => c.phases.some((p) => PHASES[p].group === group))
  if (onlySaved) {
    const set = new Set(saved)
    results = results.filter((c) => set.has(c.id))
  }

  if (!query) {
    // Bez hledání řadíme relevantně k fázi, pak podle novosti.
    results.sort((a, b) => {
      const aPhase = a.phases.includes(state.phase.id) ? 1 : 0
      const bPhase = b.phases.includes(state.phase.id) ? 1 : 0
      if (aPhase !== bPhase) return bPhase - aPhase
      return b.publishedOn.localeCompare(a.publishedOn)
    })
  }

  const terms = query ? searchGlossary(query).slice(0, 5) : []
  const savedItems = contentByIds(saved)

  return (
    <div className="space-y-9">
      <header>
        <Eyebrow>Vše na jednom místě</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Knihovna</h1>
      </header>

      <form method="get" className="flex flex-wrap gap-2">
        <input
          type="search"
          name="q"
          defaultValue={query}
          placeholder="Hledejte cokoliv — „bolí mě záda po transferu“, „ragády“, „AMH“…"
          className="field min-w-0 flex-1"
        />
        {kind && <input type="hidden" name="kind" value={kind} />}
        {topic && <input type="hidden" name="topic" value={topic} />}
        <button type="submit" className="btn btn-primary">
          Hledat
        </button>
      </form>

      <div className="space-y-4">
        <FilterRow label="Typ">
          <Chip href={buildHref(params, { kind: undefined })} active={!kind}>
            Vše
          </Chip>
          {CONTENT_KINDS.filter((k) => k !== 'glossary').map((k) => (
            <Chip key={k} href={buildHref(params, { kind: k })} active={kind === k}>
              {KIND_LABELS[k]}
            </Chip>
          ))}
        </FilterRow>

        <FilterRow label="Fáze cesty">
          <Chip href={buildHref(params, { group: undefined })} active={!group}>
            Vše
          </Chip>
          {PHASE_GROUPS.map((g) => (
            <Chip key={g} href={buildHref(params, { group: g })} active={group === g}>
              {PHASE_GROUP_META[g].name}
            </Chip>
          ))}
        </FilterRow>

        <FilterRow label="Téma">
          <Chip href={buildHref(params, { topic: undefined })} active={!topic}>
            Vše
          </Chip>
          {TOPIC_IDS.map((t) => (
            <Chip key={t} href={buildHref(params, { topic: t })} active={topic === t}>
              {TOPIC_LABELS[t]}
            </Chip>
          ))}
        </FilterRow>

        {saved.length > 0 && (
          <FilterRow label="Uložené">
            <Chip
              href={buildHref(params, { ulozene: onlySaved ? undefined : '1' })}
              active={onlySaved}
            >
              ♥ Jen uložené ({saved.length})
            </Chip>
          </FilterRow>
        )}
      </div>

      {terms.length > 0 && (
        <section>
          <SectionTitle title="Ze slovníku pojmů" />
          <div className="space-y-3">
            {terms.map((t) => (
              <Card key={t.term} muted className="p-5">
                <h3 className="display text-lg">{t.term}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-soft">{t.short}</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      {!query && !kind && !topic && !group && !onlySaved && savedItems.length > 0 && (
        <section>
          <SectionTitle title="Vaše uložené" subtitle="K čemu se chcete vrátit" />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {savedItems.map((item) => (
              <ContentCard key={item.id} item={item} size="sm" />
            ))}
          </div>
        </section>
      )}

      <section>
        <SectionTitle
          title={query ? `Výsledky pro „${query}“` : 'Celá knihovna'}
          subtitle={`${results.length} ${results.length === 1 ? 'materiál' : results.length < 5 ? 'materiály' : 'materiálů'}`}
        />

        {results.length === 0 ? (
          <EmptyState
            title="Nic jsme nenašli"
            body="Zkuste jiná slova nebo si projděte průvodce svou fází — většinu toho, co se v tomhle období řeší, tam najdete pohromadě."
            action={
              <Link href="/pruvodce" className="btn btn-secondary">
                Otevřít průvodce
              </Link>
            }
          />
        ) : (
          <div className="divide-y divide-[var(--line)]">
            {results.slice(0, 80).map((item) => (
              <ContentRow key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <span className="eyebrow mt-2 w-[5.5rem] shrink-0">{label}</span>
      <div className="rail flex-1 !pb-2">{children}</div>
    </div>
  )
}

function Chip({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-3.5 py-1.5 text-[0.8125rem] whitespace-nowrap transition-colors ${
        active
          ? 'border-transparent bg-[var(--color-champagne)] text-ink'
          : 'border-[var(--line)] text-soft hover:border-[var(--color-sand)]'
      }`}
    >
      {children}
    </Link>
  )
}

function buildHref(current: SearchParams, patch: Partial<SearchParams>): string {
  const next = { ...current, ...patch }
  const sp = new URLSearchParams()
  for (const [k, v] of Object.entries(next)) {
    if (v) sp.set(k, String(v))
  }
  const qs = sp.toString()
  return qs ? `/knihovna?${qs}` : '/knihovna'
}
