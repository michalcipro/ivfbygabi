'use server'

import { redirect } from 'next/navigation'
import { z } from 'zod'
import {
  activateSubscription,
  authenticate,
  cancelSubscription,
  clearSession,
  createSession,
  createUser,
  currentUser,
  setSessionCookie,
} from '@/lib/auth'
import { db } from '@/lib/db'
import { updateProfile } from '@/lib/db/repo'

export interface FormState {
  error?: string
  ok?: boolean
}

const registerSchema = z.object({
  displayName: z.string().trim().min(1, 'Napište prosím, jak vám máme říkat.').max(60),
  email: z.email('Zadejte platný e-mail.'),
  password: z.string().min(8, 'Heslo musí mít alespoň 8 znaků.'),
})

export async function registerAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = registerSchema.safeParse({
    displayName: formData.get('displayName'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Zkontrolujte prosím zadané údaje.' }
  }

  let userId: string
  try {
    const user = createUser(parsed.data.email, parsed.data.password, parsed.data.displayName)
    userId = user.id
  } catch (e) {
    return { error: e instanceof Error ? e.message : 'Registraci se nepodařilo dokončit.' }
  }

  updateProfile(userId, { displayName: parsed.data.displayName })
  await setSessionCookie(createSession(userId))
  redirect('/onboarding')
}

const loginSchema = z.object({
  email: z.email('Zadejte platný e-mail.'),
  password: z.string().min(1, 'Zadejte heslo.'),
})

export async function loginAction(_prev: FormState, formData: FormData): Promise<FormState> {
  const parsed = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? 'Zkontrolujte prosím zadané údaje.' }
  }

  const user = authenticate(parsed.data.email, parsed.data.password)
  if (!user) return { error: 'E-mail nebo heslo nesouhlasí.' }

  await setSessionCookie(createSession(user.id))
  redirect(user.onboarded ? '/dnes' : '/onboarding')
}

export async function logoutAction() {
  await clearSession()
  redirect('/')
}

export async function subscribeAction(formData: FormData) {
  const user = await currentUser()
  if (!user) redirect('/prihlaseni')

  const plan = formData.get('plan') === 'yearly' ? 'yearly' : 'monthly'
  activateSubscription(user.id, plan)
  redirect('/dnes')
}

export async function cancelSubscriptionAction() {
  const user = await currentUser()
  if (!user) redirect('/prihlaseni')
  cancelSubscription(user.id)
  redirect('/nastaveni')
}

export async function setThemeAction(theme: 'light' | 'dark') {
  const user = await currentUser()
  if (!user) return
  db().prepare('UPDATE users SET theme = ? WHERE id = ?').run(theme, user.id)
}
