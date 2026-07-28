import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { getGroupBySlug, joinGroup, listPosts, matchedGroups } from '@/lib/db/repo-community'
import { resolveJourney } from '@/lib/domain/journey'
import { PHASES, isPhaseId } from '@/lib/domain/phases'
import { Badge, Card, EmptyState, Eyebrow } from '@/components/ui'
import { PostComposer, PostItem } from './interactive'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const group = getGroupBySlug(slug)
  return { title: group ? group.name : 'Skupina' }
}

export default async function GroupPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  // Skupiny vznikají líně — projitím doporučení zajistíme, že existují.
  matchedGroups(profile, state)

  const group = getGroupBySlug(slug)
  if (!group) notFound()

  joinGroup(ownerId, group.id)
  const posts = listPosts(group.id, ownerId, 60)

  return (
    <div className="space-y-8">
      <header>
        <Link href="/komunita">
          <Badge tone="soft">← Komunita</Badge>
        </Link>
        <h1 className="display mt-4 text-[2rem] leading-tight md:text-[2.5rem]">{group.name}</h1>
        <p className="mt-2.5 max-w-2xl text-[1.0625rem] text-soft">{group.description}</p>
        <p className="mt-3 text-[0.8125rem] text-faint">
          Píšete jako{' '}
          <strong className="font-medium text-[var(--fg-soft)]">
            {profile.anonymousInCommunity
              ? `Anonymně · ${state.phase.name}`
              : profile.displayName || 'Bez jména'}
          </strong>
        </p>
      </header>

      <PostComposer slug={group.slug} />

      {posts.length === 0 ? (
        <EmptyState
          icon="◍"
          title="Tady zatím nikdo nic nenapsal"
          body="Buďte první. Nemusíte mít otázku ani příběh — někdy stačí napsat, jaký byl dnešek."
        />
      ) : (
        <section className="space-y-4">
          {posts.map((post) => (
            <PostItem
              key={post.id}
              post={post}
              slug={group.slug}
              currentUserId={ownerId}
              phaseName={
                post.phaseId && isPhaseId(post.phaseId) ? PHASES[post.phaseId].name : null
              }
            />
          ))}
        </section>
      )}

      <Card muted className="p-6">
        <Eyebrow>Připomínka</Eyebrow>
        <p className="mt-2.5 text-[0.875rem] leading-relaxed text-soft">
          Zkušenosti ostatních žen jsou cenné, ale nejsou lékařská rada. Vaše léčba se řídí
          tím, co vám doporučí váš ošetřující tým — ne tím, co fungovalo někomu jinému.
        </p>
      </Card>
    </div>
  )
}
