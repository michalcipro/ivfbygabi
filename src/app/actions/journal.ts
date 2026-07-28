'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { currentUser, dataOwnerId } from '@/lib/auth'
import {
  getProfile,
  recordContentEvent,
  setChecklistEntry,
  setDailyReflection,
  setDailyTaskDone,
  toggleSaved,
  upsertJournal,
} from '@/lib/db/repo'
import { addTimelineEvent, addLetter, deleteLetter } from '@/lib/db/repo-story'
import { resolveJourney } from '@/lib/domain/journey'
import { isValidIsoDate } from '@/lib/domain/dates'

async function owner(): Promise<string> {
  const user = await currentUser()
  if (!user) throw new Error('Nejste přihlášena.')
  return dataOwnerId(user)
}

const dateSchema = z.string().refine(isValidIsoDate, 'Neplatné datum.')

export async function saveMoodAction(date: string, mood: number) {
  const userId = await owner()
  dateSchema.parse(date)
  const value = z.number().int().min(1).max(5).parse(mood)

  const state = resolveJourney(getProfile(userId), date)
  upsertJournal(userId, date, {
    mood: value,
    phaseId: state.phase.id,
    dayInPhase: state.dayInPhase,
  })
  revalidatePath('/dnes')
  revalidatePath('/denik')
}

const journalSchema = z.object({
  date: dateSchema,
  mood: z.coerce.number().int().min(1).max(5).nullable().catch(null),
  anxiety: z.coerce.number().int().min(1).max(5).nullable().catch(null),
  hope: z.coerce.number().int().min(1).max(5).nullable().catch(null),
  energy: z.coerce.number().int().min(1).max(5).nullable().catch(null),
  pain: z.coerce.number().int().min(1).max(5).nullable().catch(null),
  sleepHours: z.coerce.number().min(0).max(24).nullable().catch(null),
  waterMl: z.coerce.number().int().min(0).max(10000).nullable().catch(null),
  weightKg: z.coerce.number().min(20).max(250).nullable().catch(null),
  note: z.string().max(8000).nullable().catch(null),
  gratitude: z.string().max(2000).nullable().catch(null),
  symptoms: z.array(z.string().max(60)).max(40).catch([]),
})

export async function saveJournalAction(formData: FormData) {
  const userId = await owner()

  const raw = {
    date: String(formData.get('date') ?? ''),
    mood: emptyToNull(formData.get('mood')),
    anxiety: emptyToNull(formData.get('anxiety')),
    hope: emptyToNull(formData.get('hope')),
    energy: emptyToNull(formData.get('energy')),
    pain: emptyToNull(formData.get('pain')),
    sleepHours: emptyToNull(formData.get('sleepHours')),
    waterMl: emptyToNull(formData.get('waterMl')),
    weightKg: emptyToNull(formData.get('weightKg')),
    note: emptyToNull(formData.get('note')),
    gratitude: emptyToNull(formData.get('gratitude')),
    symptoms: formData.getAll('symptoms').map(String),
  }

  const parsed = journalSchema.parse(raw)
  const state = resolveJourney(getProfile(userId), parsed.date)

  upsertJournal(userId, parsed.date, {
    ...parsed,
    phaseId: state.phase.id,
    dayInPhase: state.dayInPhase,
  })

  revalidatePath('/denik')
  revalidatePath('/dnes')
  revalidatePath('/zdravi')
}

function emptyToNull(v: FormDataEntryValue | null): string | null {
  const s = v === null ? '' : String(v).trim()
  return s.length === 0 ? null : s
}

export async function toggleTaskAction(date: string, done: boolean) {
  const userId = await owner()
  dateSchema.parse(date)
  setDailyTaskDone(userId, date, done)
  revalidatePath('/dnes')
}

export async function saveReflectionAction(date: string, text: string) {
  const userId = await owner()
  dateSchema.parse(date)
  setDailyReflection(userId, date, z.string().max(4000).parse(text))
  revalidatePath('/dnes')
}

export async function toggleSavedAction(contentId: string) {
  const userId = await owner()
  const saved = toggleSaved(userId, z.string().max(80).parse(contentId))
  revalidatePath('/knihovna')
  revalidatePath(`/knihovna/${contentId}`)
  return saved
}

export async function recordViewAction(contentId: string, seconds?: number) {
  const userId = await owner()
  recordContentEvent(userId, z.string().max(80).parse(contentId), 'view', seconds)
}

export async function toggleChecklistAction(contentId: string, entryId: string, done: boolean) {
  const userId = await owner()
  setChecklistEntry(
    userId,
    z.string().max(80).parse(contentId),
    z.string().max(80).parse(entryId),
    done,
  )
  revalidatePath(`/knihovna/${contentId}`)
  revalidatePath('/checklisty')
}

const letterSchema = z.object({
  toWhom: z.enum(['embryo', 'baby', 'lost', 'self', 'partner']),
  title: z.string().max(120).nullable(),
  body: z.string().min(1, 'Napište prosím pár slov.').max(20000),
  onDate: dateSchema,
})

export async function addLetterAction(formData: FormData) {
  const userId = await owner()
  const parsed = letterSchema.parse({
    toWhom: formData.get('toWhom'),
    title: emptyToNull(formData.get('title')),
    body: String(formData.get('body') ?? ''),
    onDate: String(formData.get('onDate') ?? ''),
  })
  addLetter(userId, { ...parsed, sealedUntil: null })
  revalidatePath('/pribeh')
}

export async function deleteLetterAction(id: string) {
  const userId = await owner()
  deleteLetter(userId, z.string().max(80).parse(id))
  revalidatePath('/pribeh')
}

const milestoneSchema = z.object({
  onDate: dateSchema,
  title: z.string().min(1).max(160),
  body: z.string().max(4000).nullable(),
  kind: z.enum(['milnik', 'foto', 'vysledek', 'zapis', 'dopis', 'prvni']),
})

export async function addMilestoneAction(formData: FormData) {
  const userId = await owner()
  const parsed = milestoneSchema.parse({
    onDate: String(formData.get('onDate') ?? ''),
    title: String(formData.get('title') ?? ''),
    body: emptyToNull(formData.get('body')),
    kind: formData.get('kind') ?? 'milnik',
  })
  addTimelineEvent(userId, { ...parsed, icon: '✦', mediaId: null })
  revalidatePath('/pribeh')
}
