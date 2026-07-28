'use server'

import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { currentUser, dataOwnerId } from '@/lib/auth'
import {
  addDocument,
  addEvent,
  addLabValue,
  addMeasurement,
  addMedication,
  deleteEvent,
  deleteLabValue,
  deleteMeasurement,
  deleteMedication,
  logMedication,
  toggleEventDone,
} from '@/lib/db/repo-health'
import { getProfile, updateProfile } from '@/lib/db/repo'
import { parseReport } from '@/lib/health/parse-report'
import { LAB_BY_KEY } from '@/lib/health/lab-params'
import { summarizeReport } from '@/lib/ai/gabi'
import { resolveJourney } from '@/lib/domain/journey'
import { isValidIsoDate } from '@/lib/domain/dates'
import { MODIFIER_IDS, type ModifierId } from '@/lib/domain/profile'
import { isPhaseId } from '@/lib/domain/phases'

async function owner(): Promise<string> {
  const user = await currentUser()
  if (!user) throw new Error('Nejste přihlášena.')
  return dataOwnerId(user)
}

const dateSchema = z.string().refine(isValidIsoDate, 'Neplatné datum.')

// ------------------------------------------------------------------- labs ---

const labSchema = z.object({
  paramKey: z.string().refine((k) => k in LAB_BY_KEY, 'Neznámý parametr.'),
  value: z.coerce.number().finite(),
  onDate: dateSchema,
  note: z.string().max(500).nullable(),
})

export async function addLabAction(formData: FormData) {
  const userId = await owner()
  const parsed = labSchema.parse({
    paramKey: formData.get('paramKey'),
    value: formData.get('value'),
    onDate: formData.get('onDate'),
    note: nullable(formData.get('note')),
  })
  addLabValue(userId, { ...parsed, unit: LAB_BY_KEY[parsed.paramKey].unit })
  revalidatePath('/zdravi')
}

export async function deleteLabAction(id: string) {
  deleteLabValue(await owner(), z.string().max(80).parse(id))
  revalidatePath('/zdravi')
}

// ----------------------------------------------------------- measurements ---

const measurementSchema = z.object({
  metric: z.string().min(1).max(40),
  value: z.coerce.number().finite(),
  onDate: dateSchema,
})

export async function addMeasurementAction(formData: FormData) {
  const userId = await owner()
  const parsed = measurementSchema.parse({
    metric: formData.get('metric'),
    value: formData.get('value'),
    onDate: formData.get('onDate'),
  })
  addMeasurement(userId, parsed.metric, parsed.value, parsed.onDate)
  revalidatePath('/zdravi')
}

export async function deleteMeasurementAction(id: string) {
  deleteMeasurement(await owner(), z.string().max(80).parse(id))
  revalidatePath('/zdravi')
}

// ------------------------------------------------------------------ meds ---

const medicationSchema = z.object({
  name: z.string().min(1, 'Zadejte název léku.').max(120),
  dose: z.string().max(60).nullable(),
  route: z.string().max(40).nullable(),
  timeOfDay: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .nullable(),
  startOn: dateSchema.nullable(),
  endOn: dateSchema.nullable(),
  note: z.string().max(500).nullable(),
})

export async function addMedicationAction(formData: FormData) {
  const userId = await owner()
  const parsed = medicationSchema.parse({
    name: formData.get('name'),
    dose: nullable(formData.get('dose')),
    route: nullable(formData.get('route')),
    timeOfDay: nullable(formData.get('timeOfDay')),
    startOn: nullable(formData.get('startOn')),
    endOn: nullable(formData.get('endOn')),
    note: nullable(formData.get('note')),
  })
  addMedication(userId, parsed)
  revalidatePath('/kalendar')
  revalidatePath('/dnes')
}

export async function logMedicationAction(medicationId: string, date: string) {
  const userId = await owner()
  logMedication(
    userId,
    z.string().max(80).parse(medicationId),
    dateSchema.parse(date),
  )
  revalidatePath('/kalendar')
  revalidatePath('/dnes')
}

export async function deleteMedicationAction(id: string) {
  deleteMedication(await owner(), z.string().max(80).parse(id))
  revalidatePath('/kalendar')
  revalidatePath('/dnes')
}

// -------------------------------------------------------------- calendar ---

const eventSchema = z.object({
  title: z.string().min(1, 'Zadejte název.').max(160),
  kind: z.string().max(30),
  onDate: dateSchema,
  atTime: z
    .string()
    .regex(/^\d{2}:\d{2}$/)
    .nullable(),
  location: z.string().max(160).nullable(),
  note: z.string().max(1000).nullable(),
})

export async function addEventAction(formData: FormData) {
  const userId = await owner()
  const parsed = eventSchema.parse({
    title: formData.get('title'),
    kind: formData.get('kind') ?? 'vlastni',
    onDate: formData.get('onDate'),
    atTime: nullable(formData.get('atTime')),
    location: nullable(formData.get('location')),
    note: nullable(formData.get('note')),
  })
  addEvent(userId, parsed)
  revalidatePath('/kalendar')
  revalidatePath('/dnes')
}

export async function toggleEventAction(id: string) {
  toggleEventDone(await owner(), z.string().max(80).parse(id))
  revalidatePath('/kalendar')
  revalidatePath('/dnes')
}

export async function deleteEventAction(id: string) {
  deleteEvent(await owner(), z.string().max(80).parse(id))
  revalidatePath('/kalendar')
  revalidatePath('/dnes')
}

// -------------------------------------------------------------- documents ---

const MAX_TEXT = 200_000

const documentSchema = z.object({
  title: z.string().min(1, 'Pojmenujte prosím dokument.').max(160),
  category: z.string().max(30),
  onDate: dateSchema,
  rawText: z.string().max(MAX_TEXT),
})

/**
 * Zpracování nahrané zprávy.
 *
 * Text z PDF/obrázku vytáhne prohlížeč (nebo ho uživatelka vloží ručně),
 * server ho projde parserem, uloží rozpoznané hodnoty a přidá vysvětlení.
 * Samotné soubory neukládáme — držíme jen text, který uživatelka odeslala.
 */
export async function addDocumentAction(formData: FormData) {
  const userId = await owner()
  const parsed = documentSchema.parse({
    title: formData.get('title'),
    category: formData.get('category') ?? 'jine',
    onDate: formData.get('onDate'),
    rawText: String(formData.get('rawText') ?? '').slice(0, MAX_TEXT),
  })

  const report = parseReport(parsed.rawText)
  const onDate = report.detectedDate ?? parsed.onDate

  const profile = getProfile(userId)
  const state = resolveJourney(profile)

  const summary = await summarizeReport(
    parsed.rawText,
    report.values.map((v) => ({ paramKey: v.paramKey, value: v.value, unit: v.unit })),
    { state, profile },
  )

  const doc = addDocument(userId, {
    title: parsed.title,
    category: parsed.category || report.detectedCategory,
    onDate,
    mime: 'text/plain',
    sizeBytes: parsed.rawText.length,
    storageKey: null,
    rawText: parsed.rawText,
    parsedSummary: summary,
  })

  for (const v of report.values) {
    addLabValue(userId, {
      paramKey: v.paramKey,
      value: v.value,
      unit: v.unit,
      onDate,
      source: 'ocr',
      documentId: doc.id,
    })
  }

  revalidatePath('/dokumenty')
  revalidatePath('/zdravi')
}

// ---------------------------------------------------------------- profil ---

const profileSchema = z.object({
  displayName: z.string().max(60).optional(),
  anonymousInCommunity: z.boolean().optional(),
  declaredPhase: z.string().nullable().optional(),
  birthYear: z.number().int().min(1950).max(2015).nullable().optional(),
  modifiers: z.array(z.string()).optional(),
  amh: z.number().min(0).max(50).nullable().optional(),
  ivfCycles: z.number().int().min(0).max(30).optional(),
  transfersDone: z.number().int().min(0).max(50).optional(),
  miscarriages: z.number().int().min(0).max(30).optional(),
  embryosCreated: z.number().int().min(0).max(80).optional(),
  embryosFrozen: z.number().int().min(0).max(80).optional(),
  embryoDayAtTransfer: z.number().int().min(1).max(7).nullable().optional(),
  gestationalWeeksAtBirth: z.number().min(20).max(43).nullable().optional(),
  clinicName: z.string().max(120).nullable().optional(),
})

const DATE_FIELDS = [
  'tryingSince',
  'diagnosticsStartedOn',
  'iuiOn',
  'stimulationStartOn',
  'retrievalOn',
  'transferOn',
  'betaTestOn',
  'lossOn',
  'lastPeriodOn',
  'dueDate',
  'birthOn',
  'nicuAdmissionOn',
  'cameHomeOn',
] as const

export async function saveProfileAction(formData: FormData) {
  const userId = await owner()

  const numeric = (key: string) => {
    const raw = nullable(formData.get(key))
    if (raw === null) return null
    const n = Number(raw.replace(',', '.'))
    return Number.isFinite(n) ? n : null
  }

  const declared = nullable(formData.get('declaredPhase'))
  const modifiers = formData
    .getAll('modifiers')
    .map(String)
    .filter((m): m is ModifierId => (MODIFIER_IDS as readonly string[]).includes(m))

  const base = profileSchema.parse({
    displayName: nullable(formData.get('displayName')) ?? undefined,
    anonymousInCommunity: formData.get('anonymousInCommunity') === 'on',
    declaredPhase: declared && isPhaseId(declared) ? declared : null,
    birthYear: numeric('birthYear') === null ? null : Math.round(numeric('birthYear')!),
    modifiers,
    amh: numeric('amh'),
    ivfCycles: Math.max(0, Math.round(numeric('ivfCycles') ?? 0)),
    transfersDone: Math.max(0, Math.round(numeric('transfersDone') ?? 0)),
    miscarriages: Math.max(0, Math.round(numeric('miscarriages') ?? 0)),
    embryosCreated: Math.max(0, Math.round(numeric('embryosCreated') ?? 0)),
    embryosFrozen: Math.max(0, Math.round(numeric('embryosFrozen') ?? 0)),
    embryoDayAtTransfer:
      numeric('embryoDayAtTransfer') === null ? null : Math.round(numeric('embryoDayAtTransfer')!),
    gestationalWeeksAtBirth: numeric('gestationalWeeksAtBirth'),
    clinicName: nullable(formData.get('clinicName')),
  })

  const dates: Record<string, string | null> = {}
  for (const field of DATE_FIELDS) {
    const raw = nullable(formData.get(field))
    dates[field] = raw && isValidIsoDate(raw) ? raw : null
  }

  updateProfile(userId, { ...base, ...dates } as Parameters<typeof updateProfile>[1])

  revalidatePath('/dnes')
  revalidatePath('/nastaveni')
  revalidatePath('/komunita')
}

function nullable(v: FormDataEntryValue | null): string | null {
  const s = v === null ? '' : String(v).trim()
  return s.length === 0 ? null : s
}
