import { redirect } from 'next/navigation'
import Link from 'next/link'
import { accessFor, currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { MobileNav, Sidebar, ThemeToggle } from '@/components/app-shell'
import { logoutAction } from '@/app/actions/auth'

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser()
  if (!user) redirect('/prihlaseni')
  if (!user.onboarded) redirect('/onboarding')

  const access = accessFor(user)
  const profile = getProfile(dataOwnerId(user))
  const state = resolveJourney(profile)

  // Platforma funguje výhradně na předplatné. Po skončení zkušebního období
  // se obsah zamkne — ale data uživatelky zůstávají nedotčená.
  if (!access.hasAccess) redirect('/predplatne')

  return (
    <div className="flex min-h-screen">
      <Sidebar displayName={profile.displayName || user.displayName} phase={state.phase.name} />

      <div className="min-w-0 flex-1 pb-24 lg:pb-0">
        {access.reason === 'trial' && (
          <div className="no-print flex flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-[var(--line)] bg-[var(--color-champagne)]/35 px-5 py-2.5 text-center text-[0.8125rem]">
            <span>
              Zkušební období — zbývá {access.trialDaysLeft}{' '}
              {access.trialDaysLeft === 1 ? 'den' : (access.trialDaysLeft ?? 0) < 5 ? 'dny' : 'dní'}.
            </span>
            <Link href="/predplatne" className="font-medium underline underline-offset-4">
              Aktivovat členství
            </Link>
          </div>
        )}

        <div className="no-print flex items-center justify-between px-5 pt-4 lg:justify-end lg:px-8">
          <Link href="/dnes" className="display text-[1.15rem] lg:hidden">
            IVF by Gabi
          </Link>
          <div className="flex items-center gap-1">
            <ThemeToggle initial={user.theme} />
            <form action={logoutAction}>
              <button type="submit" className="btn btn-ghost !px-3 !py-2 text-[0.8125rem]">
                Odhlásit
              </button>
            </form>
          </div>
        </div>

        <main className="mx-auto max-w-5xl px-5 py-6 lg:px-8 lg:py-8">{children}</main>
      </div>

      <MobileNav />
    </div>
  )
}
