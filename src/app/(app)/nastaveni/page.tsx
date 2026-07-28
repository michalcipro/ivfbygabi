import Link from 'next/link'
import type { Metadata } from 'next'
import { accessFor, currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { formatCzechDate } from '@/lib/domain/dates'
import { CONTENT_STATS } from '@/lib/content'
import { aiAvailable } from '@/lib/ai/gabi'
import { cancelSubscriptionAction, logoutAction } from '@/app/actions/auth'
import { ProfileForm } from '@/components/profile-form'
import { Badge, Card, Eyebrow, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Nastavení' }
export const dynamic = 'force-dynamic'

export default async function SettingsPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)
  const access = accessFor(user)

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Váš účet</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Nastavení</h1>
      </header>

      <section>
        <SectionTitle title="Členství" />
        <Card className="p-7">
          <div className="flex flex-wrap items-start justify-between gap-5">
            <div>
              <div className="flex items-center gap-2">
                <p className="display text-2xl">Premium Membership</p>
                <Badge tone={access.reason === 'active' ? 'accent' : 'soft'}>
                  {access.reason === 'active'
                    ? 'Aktivní'
                    : access.reason === 'trial'
                      ? 'Zkušební období'
                      : 'Neaktivní'}
                </Badge>
              </div>
              <p className="mt-2 text-[0.9375rem] text-soft">
                {access.reason === 'trial' &&
                  `Zbývá ${access.trialDaysLeft} dní zdarma. Poté 349 Kč měsíčně.`}
                {access.reason === 'active' &&
                  access.until &&
                  `Předplaceno do ${formatCzechDate(access.until.slice(0, 10))}.`}
                {access.reason === 'expired' && 'Zkušební období skončilo.'}
              </p>
              <p className="mt-1 text-[0.8125rem] text-faint">
                {user.email} · plán {user.subPlan === 'yearly' ? 'roční' : 'měsíční'}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link href="/predplatne" className="btn btn-primary">
                {access.reason === 'active' ? 'Změnit plán' : 'Aktivovat členství'}
              </Link>
              {user.subStatus === 'active' && (
                <form action={cancelSubscriptionAction}>
                  <button type="submit" className="btn btn-ghost">
                    Zrušit obnovení
                  </button>
                </form>
              )}
            </div>
          </div>

          {user.subStatus === 'active' && (
            <p className="mt-5 border-t border-[var(--line)] pt-4 text-[0.8125rem] leading-relaxed text-faint">
              Když členství zrušíte, přijdete o denní personalizovaný obsah, AI Gabi
              i komunitu. Vaše zápisy, dokumenty a kronika ale zůstanou uložené — po obnovení
              je najdete přesně tam, kde jste je nechala.
            </p>
          )}
        </Card>
      </section>

      <section>
        <SectionTitle
          title="Váš profil"
          subtitle="Z těchto údajů počítáme, co vám každý den ukážeme"
        />
        <Card className="p-7">
          <div className="mb-8 flex flex-wrap gap-x-8 gap-y-3 border-b border-[var(--line)] pb-6 text-[0.875rem]">
            <div>
              <p className="text-faint">Aktuální fáze</p>
              <p className="mt-0.5 font-medium">{state.phase.title}</p>
            </div>
            <div>
              <p className="text-faint">Dnes</p>
              <p className="mt-0.5 font-medium">{state.dayLabel}</p>
            </div>
            {state.nextMilestone && (
              <div>
                <p className="text-faint">Nejbližší událost</p>
                <p className="mt-0.5 font-medium">
                  {state.nextMilestone.label} · {formatCzechDate(state.nextMilestone.date)}
                </p>
              </div>
            )}
          </div>

          <ProfileForm profile={profile} submitLabel="Uložit změny" />
        </Card>
      </section>

      <section>
        <SectionTitle title="Rodinný režim" />
        <Card className="p-7">
          <p className="text-[0.9375rem] leading-relaxed text-soft">
            Jedno členství může používat víc lidí — partner, druhý rodič, prarodiče.
            Každý vidí jen to, co je pro něj určené: partner průvodce vaší fází, prarodiče
            jen milníky a fotografie miminka.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {[
              { role: 'Partner', desc: 'Co prožíváte a jak může pomoct' },
              { role: 'Druhý rodič', desc: 'Vlastní deník a vzpomínky' },
              { role: 'Prarodiče', desc: 'Jen milníky a růst miminka' },
            ].map((r) => (
              <div key={r.role} className="rounded-[var(--radius-md)] bg-[var(--card-muted)] p-4">
                <p className="text-[0.875rem] font-medium">{r.role}</p>
                <p className="mt-1 text-[0.8125rem] leading-relaxed text-soft">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[0.8125rem] text-faint">
            Váš deník a dopisy zůstávají soukromé vždycky — ani partner do nich nevidí.
            Náhled partnerského pohledu si můžete otevřít v sekci{' '}
            <Link href="/partner" className="underline underline-offset-2">
              Partner
            </Link>
            .
          </p>
        </Card>
      </section>

      <section>
        <SectionTitle title="Soukromí a data" />
        <Card className="space-y-4 p-7 text-[0.9375rem] leading-relaxed text-soft">
          <p>
            Vaše zdravotní údaje se používají jen k personalizaci obsahu uvnitř aplikace.
            V komunitě vystupujete pod jménem, které si zvolíte —{' '}
            {profile.anonymousInCommunity ? 'právě teď anonymně' : 'právě teď pod svým jménem'}.
          </p>
          <p>
            Deníkové zápisy, dopisy a nahrané dokumenty nevidí nikdo kromě vás.
            AI Gabi je používá k tomu, aby odpovídala v kontextu vaší cesty.
          </p>
          <p className="text-[0.8125rem] text-faint">
            Knihovna obsahuje {CONTENT_STATS.items} materiálů a {CONTENT_STATS.dailyCards} denních
            karet. AI Gabi je {aiAvailable() ? 'plně aktivní' : 'v režimu bez připojení k AI a odpovídá z knihovny'}.
          </p>
        </Card>
      </section>

      <section className="border-t border-[var(--line)] pt-8">
        <form action={logoutAction}>
          <button type="submit" className="btn btn-secondary">
            Odhlásit se
          </button>
        </form>
      </section>
    </div>
  )
}
