import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile, listJournal } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { CATALOG } from '@/lib/content'
import { czDays } from '@/lib/domain/dates'
import { adviceFor } from '@/lib/domain/partner'
import { ContentCard } from '@/components/content-card'
import { Card, Eyebrow, Hero, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Partner' }
export const dynamic = 'force-dynamic'

/**
 * Partner mode.
 *
 * Ukazuje, co žena právě prožívá, co konkrétně pomáhá a čemu se vyhnout.
 * Záměrně NEUKAZUJE deníkové zápisy ani zdravotní údaje — jen agregovaný
 * obraz situace. Deník zůstává soukromý.
 */
export default async function PartnerPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const journal = listJournal(ownerId, 7)
  const moods = journal.filter((j) => j.mood !== null).map((j) => j.mood!)
  const avgMood = moods.length ? moods.reduce((a, b) => a + b, 0) / moods.length : null

  const partnerContent = CATALOG.filter((c) => c.topics.includes('partner')).slice(0, 10)
  const advice = adviceFor(state.group, state.phase.tone)

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Pro toho, kdo je vedle</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">
          Partner mode
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Co se právě děje, co pomáhá a co ne. Bez zdravotních detailů a bez čtení deníku —
          ten zůstává soukromý.
        </p>
      </header>

      <Hero token="taupe" className="rounded-[var(--radius-xl)] px-7 py-11 md:px-11 md:py-14">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow !text-white/55">Kde právě je</p>
          <h2 className="display mt-4 text-[1.75rem] leading-snug text-white md:text-[2.25rem]">
            {state.phase.title}
          </h2>
          <p className="mt-3 text-[1.0625rem] text-white/78">{state.dayLabel}</p>
          {state.nextMilestone && (
            <p className="mt-5 inline-flex rounded-full bg-white/18 px-4 py-2 text-[0.875rem] text-white backdrop-blur-sm">
              {state.nextMilestone.label} za {czDays(state.nextMilestone.inDays)}
            </p>
          )}
        </div>
      </Hero>

      {avgMood !== null && (
        <Card className="p-7">
          <Eyebrow>Jak se jí poslední dny vede</Eyebrow>
          <div className="mt-4 flex items-center gap-5">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`h-9 w-2.5 rounded-full ${
                    n <= Math.round(avgMood) ? 'bg-[var(--color-taupe)]' : 'bg-[var(--line)]'
                  }`}
                />
              ))}
            </div>
            <p className="text-[0.9375rem] text-soft">
              {avgMood <= 2
                ? 'Poslední dny jsou pro ni těžké. Teď je čas být blízko, ne řešit.'
                : avgMood <= 3.5
                  ? 'Zvládá to, ale stojí ji to sílu.'
                  : 'Poslední dny jsou spíš dobré.'}
            </p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-faint">
            Vychází to jen z toho, jak si sama ohodnotila náladu. Obsah jejích zápisů
            nevidíte — a to je záměr.
          </p>
        </Card>
      )}

      <section>
        <SectionTitle title="Co teď opravdu pomáhá" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-7">
            <h3 className="display text-xl text-[var(--color-sage-deep)]">Dělejte tohle</h3>
            <ul className="mt-4 space-y-3">
              {advice.do.map((d, i) => (
                <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-soft">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sage)]" />
                  {d}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-7">
            <h3 className="display text-xl text-[var(--color-blush-deep)]">Tohle radši ne</h3>
            <ul className="mt-4 space-y-3">
              {advice.dont.map((d, i) => (
                <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-soft">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blush)]" />
                  {d}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle title="Co se právě děje" subtitle="Stručně a bez odborných zkratek" />
        <Card className="p-7">
          <p className="text-[1.0625rem] leading-relaxed text-soft">{advice.whatsHappening}</p>
        </Card>
      </section>

      {partnerContent.length > 0 && (
        <section>
          <SectionTitle title="Ke čtení" subtitle="Napsané přímo pro partnery" />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {partnerContent.map((item) => (
              <ContentCard key={item.id} item={item} size="sm" />
            ))}
          </div>
        </section>
      )}

      <Card muted className="p-7">
        <h3 className="display text-xl">A jak jste na tom vy?</h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-soft">
          Léčba neplodnosti i ztráta doléhá na oba. Vaše prožívání je stejně platné —
          jen se o něm mluví míň. Když je toho moc, není slabost se ozvat odborníkovi.
        </p>
        <Link
          href="/knihovna?topic=partner"
          className="btn btn-secondary mt-5 !py-2 !text-[0.8125rem]"
        >
          Obsah pro partnery
        </Link>
      </Card>
    </div>
  )
}

