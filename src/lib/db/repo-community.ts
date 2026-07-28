import { db, uid, nowIso } from './index'
import type { JourneyState } from '../domain/journey'
import type { Profile } from '../domain/profile'
import { groupSpecsFor } from '../domain/community-match'
import type { CommunityGroup, CommunityPost, CommunityReply } from '../shared/records'

// Tvary žijí v ../shared/records, aby je mohl importovat i prohlížeč.
export type { CommunityGroup, CommunityPost, CommunityReply }
// Pravidlo párování žije v ../domain/community-match — používá ho i prohlížeč.
export { communityName } from '../domain/community-match'

/**
 * Komunita, kterou nespojuje náhoda, ale stejný příběh.
 *
 * Skupiny se odvozují z profilu: fáze, měsíc transferu, termín porodu,
 * diagnóza, klinika, věková skupina. Uživatelka nemusí nic hledat — vstoupí
 * a najde ženy, které právě prožívají skoro totéž.
 */

export function ensureGroup(input: Omit<CommunityGroup, 'id' | 'members'>): CommunityGroup {
  const existing = db().prepare('SELECT * FROM community_groups WHERE slug = ?').get(input.slug) as
    | (CommunityGroup & { match_key: string | null })
    | undefined
  if (existing) {
    return {
      id: existing.id,
      slug: existing.slug,
      name: existing.name,
      description: existing.description,
      kind: existing.kind,
      matchKey: existing.match_key,
      members: existing.members,
    }
  }

  const id = uid('grp')
  db()
    .prepare(
      'INSERT INTO community_groups (id, slug, name, description, kind, match_key, members, created_at) VALUES (?,?,?,?,?,?,0,?)',
    )
    .run(id, input.slug, input.name, input.description, input.kind, input.matchKey, nowIso())
  return { ...input, id, members: 0 }
}

/**
 * Skupiny, které dávají smysl právě pro tuhle ženu.
 * Vytváří se líně — skupina vznikne v okamžiku, kdy do ní někdo patří.
 */
export function matchedGroups(profile: Profile, state: JourneyState): CommunityGroup[] {
  return groupSpecsFor(profile, state).map(ensureGroup)
}

export function getGroupBySlug(slug: string): CommunityGroup | null {
  const row = db().prepare('SELECT * FROM community_groups WHERE slug = ?').get(slug) as
    | (CommunityGroup & { match_key: string | null })
    | undefined
  if (!row) return null
  return {
    id: row.id,
    slug: row.slug,
    name: row.name,
    description: row.description,
    kind: row.kind,
    matchKey: row.match_key,
    members: row.members,
  }
}

export function joinGroup(userId: string, groupId: string) {
  const database = db()
  const existing = database
    .prepare('SELECT 1 FROM group_members WHERE user_id = ? AND group_id = ?')
    .get(userId, groupId)
  if (existing) return
  database
    .prepare('INSERT INTO group_members (user_id, group_id, joined_at) VALUES (?,?,?)')
    .run(userId, groupId, nowIso())
  database.prepare('UPDATE community_groups SET members = members + 1 WHERE id = ?').run(groupId)
}

export function listPosts(groupId: string, userId: string, limit = 40): CommunityPost[] {
  const database = db()
  const rows = database
    .prepare(
      'SELECT * FROM community_posts WHERE group_id = ? ORDER BY created_at DESC LIMIT ?',
    )
    .all(groupId, limit) as Array<{
    id: string
    group_id: string
    user_id: string
    author_name: string
    body: string
    hearts: number
    phase_id: string | null
    created_at: string
  }>

  const hearted = new Set(
    (
      database.prepare('SELECT target_id FROM community_hearts WHERE user_id = ?').all(userId) as {
        target_id: string
      }[]
    ).map((h) => h.target_id),
  )

  return rows.map((r) => ({
    id: r.id,
    groupId: r.group_id,
    userId: r.user_id,
    authorName: r.author_name,
    body: r.body,
    hearts: r.hearts,
    phaseId: r.phase_id,
    createdAt: r.created_at,
    hearted: hearted.has(r.id),
    replies: listReplies(r.id, hearted),
  }))
}

function listReplies(postId: string, hearted: Set<string>): CommunityReply[] {
  const rows = db()
    .prepare('SELECT * FROM community_replies WHERE post_id = ? ORDER BY created_at ASC')
    .all(postId) as Array<{
    id: string
    post_id: string
    user_id: string
    author_name: string
    body: string
    hearts: number
    created_at: string
  }>
  return rows.map((r) => ({
    id: r.id,
    postId: r.post_id,
    userId: r.user_id,
    authorName: r.author_name,
    body: r.body,
    hearts: r.hearts,
    createdAt: r.created_at,
    hearted: hearted.has(r.id),
  }))
}

export function addPost(
  groupId: string,
  userId: string,
  authorName: string,
  body: string,
  phaseId: string | null,
): CommunityPost {
  const id = uid('pst')
  const createdAt = nowIso()
  db()
    .prepare(
      'INSERT INTO community_posts (id, group_id, user_id, author_name, body, hearts, phase_id, created_at) VALUES (?,?,?,?,?,0,?,?)',
    )
    .run(id, groupId, userId, authorName, body, phaseId, createdAt)
  return { id, groupId, userId, authorName, body, hearts: 0, phaseId, createdAt, replies: [] }
}

export function addReply(
  postId: string,
  userId: string,
  authorName: string,
  body: string,
): CommunityReply {
  const id = uid('rpl')
  const createdAt = nowIso()
  db()
    .prepare(
      'INSERT INTO community_replies (id, post_id, user_id, author_name, body, hearts, created_at) VALUES (?,?,?,?,?,0,?)',
    )
    .run(id, postId, userId, authorName, body, createdAt)
  return { id, postId, userId, authorName, body, hearts: 0, createdAt }
}

export function toggleHeart(userId: string, targetId: string, kind: 'post' | 'reply'): boolean {
  const database = db()
  const table = kind === 'post' ? 'community_posts' : 'community_replies'
  const existing = database
    .prepare('SELECT 1 FROM community_hearts WHERE user_id = ? AND target_id = ?')
    .get(userId, targetId)

  if (existing) {
    database
      .prepare('DELETE FROM community_hearts WHERE user_id = ? AND target_id = ?')
      .run(userId, targetId)
    database.prepare(`UPDATE ${table} SET hearts = MAX(0, hearts - 1) WHERE id = ?`).run(targetId)
    return false
  }

  database
    .prepare('INSERT INTO community_hearts (user_id, target_id, created_at) VALUES (?,?,?)')
    .run(userId, targetId, nowIso())
  database.prepare(`UPDATE ${table} SET hearts = hearts + 1 WHERE id = ?`).run(targetId)
  return true
}

export function deletePost(userId: string, postId: string) {
  db().prepare('DELETE FROM community_posts WHERE id = ? AND user_id = ?').run(postId, userId)
}
