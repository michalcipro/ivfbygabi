import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { db } from '@/lib/db'
import { ProfileForm } from '@/components/profile-form'
import { Hero } from '@/components/ui'

export const metadata: Metadata = { title: 'Vaše cesta' }
export const dynamic = 'force-dynamic'

export default async function OnboardingPage() {
  const user = await currentUser()
  if (!user) redirect('/prihlaseni')

  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)

  // Jakmile uživatelka vyplní fázi, onboarding považujeme za hotový.
  if (profile.declaredPhase && !user.onboarded) {
    db().prepare('UPDATE users SET onboarded = 1 WHERE id = ?').run(user.id)
    redirect('/dnes')
  }

  return (
    <div className="mx-auto max-w-3xl px-5 py-10 lg:px-8 lg:py-14">
      <Hero token="champagne" className="mb-11 rounded-[var(--radius-2xl)] px-8 py-14 md:px-12">
        <div className="relative z-10 max-w-xl">
          <p className="eyebrow !text-ink/50">Než začneme</p>
          <h1 className="display mt-4 text-[2.25rem] leading-[1.1] text-ink md:text-[3rem]">
            Řekněte nám, kde právě jste.
          </h1>
          <p className="mt-5 text-[1.0625rem] leading-relaxed text-ink/72">
            Podle toho pro vás každé ráno sestavíme obsah přesně na ten den. Čím víc
            vyplníte, tím přesnější to bude — ale povinná je jen fáze.
          </p>
        </div>
      </Hero>

      <ProfileForm profile={profile} submitLabel="Začít svou cestu" compact />
    </div>
  )
}
