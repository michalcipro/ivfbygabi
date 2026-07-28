import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { matchedGroups } from '@/lib/db/repo-community'
import { resolveJourney } from '@/lib/domain/journey'
import { Card, Eyebrow, Hero, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Komunita' }
export const dynamic = 'force-dynamic'

const KIND_LABELS: Record<string, string> = {
  phase: 'Stejná fáze',
  clinic: 'Stejná klinika',
  diagnosis: 'Stejná diagnóza',
  age: 'Podobný věk',
  due: 'Stejný termín',
  special: 'Podobná zkušenost',
}

/**
 * Komunita, kterou nespojuje náhoda. Skupiny se odvozují z profilu —
 * uživatelka nemusí nic hledat, jen vstoupí.
 */
export default async function CommunityPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)
  const groups = matchedGroups(profile, state)

  return (
    <div className="space-y-10">
      <header>
        <Eyebrow>Bezpečný prostor jen pro členky</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Komunita</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Nespojujeme vás náhodně. Hledáme ženy, které prožívají skoro totéž co vy —
          stejnou fázi, stejný měsíc transferu, stejnou diagnózu.
        </p>
      </header>

      <Hero token="sage" className="rounded-[var(--radius-xl)] px-7 py-9 md:px-10">
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="eyebrow !text-ink/50">Vystupujete jako</p>
            <p className="display mt-2 text-2xl text-ink">
              {profile.anonymousInCommunity
                ? `Anonymně · ${state.phase.name}`
                : profile.displayName || 'Bez jména'}
            </p>
            <p className="mt-1.5 text-[0.875rem] text-ink/60">
              {profile.anonymousInCommunity
                ? 'Vaše jméno ani údaje z profilu nikdo nevidí.'
                : 'Ostatní vidí vaše jméno. Můžete to kdykoliv změnit.'}
            </p>
          </div>
          <Link href="/nastaveni" className="btn btn-secondary">
            Změnit
          </Link>
        </div>
      </Hero>

      <section>
        <SectionTitle
          title="Vaše skupiny"
          subtitle="Vybrali jsme je podle toho, co máte v profilu"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {groups.map((g) => (
            <Link
              key={g.id}
              href={`/komunita/${g.slug}`}
              className="group rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--card)] p-6 transition-all duration-400 hover:-translate-y-0.5 hover:shadow-[var(--shadow-veil)]"
            >
              <p className="eyebrow">{KIND_LABELS[g.kind] ?? 'Skupina'}</p>
              <h3 className="display mt-2.5 text-xl transition-colors group-hover:text-[var(--color-taupe-deep)]">
                {g.name}
              </h3>
              <p className="mt-2 text-[0.875rem] leading-relaxed text-soft">{g.description}</p>
              <p className="mt-4 text-xs text-faint">
                {g.members === 0
                  ? 'Buďte první, kdo tu něco napíše'
                  : `${g.members} ${g.members === 1 ? 'členka' : g.members < 5 ? 'členky' : 'členek'}`}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Card muted className="space-y-3 p-7">
        <h2 className="display text-xl">Jak to tu chodí</h2>
        <ul className="space-y-2 text-[0.9375rem] leading-relaxed text-soft">
          <li>• Nikdo nikomu neradí, co má dělat se svojí léčbou. Od toho jsou lékaři.</li>
          <li>• Čísla si tu neporovnáváme. Každá cesta má vlastní kontext.</li>
          <li>
            • „Aspoň víš, že můžeš otěhotnět“ a podobné věty sem nepatří. Stačí napsat,
            že to slyšíte.
          </li>
          <li>• Nikdo tu není proto, aby řešil, jestli je něčí bolest dost velká.</li>
          <li>• Když někdo sdílí ztrátu, není potřeba hledat útěchu. Stačí být.</li>
        </ul>
      </Card>
    </div>
  )
}
