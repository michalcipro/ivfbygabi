'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import {
  addPost,
  addReply,
  communityName,
  deletePost,
  getGroupBySlug,
  joinGroup,
  toggleHeart,
} from '@/lib/db/repo-community'
import { resolveJourney } from '@/lib/domain/journey'

async function owner(): Promise<string> {
  const user = await currentUser()
  if (!user) throw new Error('Nejste přihlášena.')
  return dataOwnerId(user)
}

const bodySchema = z
  .string()
  .trim()
  .min(2, 'Napište prosím pár slov.')
  .max(4000, 'Příspěvek je příliš dlouhý.')

export async function addPostAction(formData: FormData) {
  const userId = await owner()
  const slug = z.string().max(120).parse(formData.get('slug'))
  const body = bodySchema.safeParse(formData.get('body'))
  if (!body.success) return

  const group = getGroupBySlug(slug)
  if (!group) return

  const profile = getProfile(userId)
  const state = resolveJourney(profile)

  joinGroup(userId, group.id)
  addPost(group.id, userId, communityName(profile, state), body.data, state.phase.id)

  revalidatePath(`/komunita/${slug}`)
  revalidatePath('/komunita')
}

export async function addReplyAction(formData: FormData) {
  const userId = await owner()
  const postId = z.string().max(80).parse(formData.get('postId'))
  const slug = z.string().max(120).parse(formData.get('slug'))
  const body = bodySchema.safeParse(formData.get('body'))
  if (!body.success) return

  const profile = getProfile(userId)
  const state = resolveJourney(profile)

  addReply(postId, userId, communityName(profile, state), body.data)
  revalidatePath(`/komunita/${slug}`)
}

export async function heartAction(targetId: string, kind: 'post' | 'reply', slug: string) {
  const userId = await owner()
  toggleHeart(userId, z.string().max(80).parse(targetId), kind)
  revalidatePath(`/komunita/${z.string().max(120).parse(slug)}`)
}

export async function deletePostAction(postId: string, slug: string) {
  const userId = await owner()
  deletePost(userId, z.string().max(80).parse(postId))
  revalidatePath(`/komunita/${z.string().max(120).parse(slug)}`)
}

export async function joinGroupAction(slug: string) {
  const userId = await owner()
  const group = getGroupBySlug(z.string().max(120).parse(slug))
  if (group) joinGroup(userId, group.id)
  revalidatePath('/komunita')
}
