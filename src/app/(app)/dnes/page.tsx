import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import {
  applyTopicAffinity,
  currentStreak,
  getAffinity,
  getDailyState,
  getJournalEntry,
  getProfile,
  touchDaily,
} from '@/lib/db/repo'
import { memoriesFor } from '@/lib/db/repo-story'
import { listEvents, listMedications, medicationLogsFor } from '@/lib/db/repo-health'
import { resolveJourney } from '@/lib/domain/journey'
import { addDays, czDays, formatCzechDate, seedFrom, today as todayIso } from '@/lib/domain/dates'
import { CATALOG, DAILY_CARDS, ENCOURAGEMENTS } from '@/lib/content'
import { buildRails, pickDailyCard, recommend } from '@/lib/content/recommend'
import { Badge, Card, Eyebrow, Hero, Markdown, ProgressRing, SectionTitle } from '@/components/ui'
import { ContentCard, FeatureCard } from '@/components/content-card'
import { DailyTask, EveningReflection, QuickMood } from './interactive'

export const metadata: Metadata = { title: 'Dnes' }
export const dynamic = 'force-dynamic'

/**
 * Domovská stránka. Přepočítává se každý den — uživatelka nikdy neuvidí
 * stejnou obrazovku dvakrát. Tohle je důvod, proč aplikaci otevře i zítra.
 */
export default async function TodayPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)
  const today = state.today

  const card = pickDailyCard(DAILY_CARDS, state)
  const daily = touchDaily(ownerId, today, card?.id ?? null) && getDailyState(ownerId, today)
  const streak = currentStreak(ownerId)

  const affinity = applyTopicAffinity(getAffinity(ownerId), CATALOG)
  const rails = buildRails(CATALOG, state, affinity)
  const feature = recommend(CATALOG, state, affinity, { limit: 1 })[0]

  const encouragement = pickEncouragement(state.phase.tone, today)
  const memories = memoriesFor(ownerId, today)
  const journal = getJournalEntry(ownerId, today)

  const upcoming = listEvents(ownerId, today, addDays(today, 14)).filter((e) => !e.done)
  const meds = listMedications(ownerId, true)
  const takenToday = new Set(medicationLogsFor(ownerId, today))

  const greeting = greetFor(new Date().getHours())
  const name = (profile.displayName || user.displayName).split(' ')[0]

  return (
    <div className="space-y-12">
      {/* --- Hlavička dne ------------------------------------------------- */}
      <header className="fade-up">
        <div className="flex flex-wrap items-center gap-3">
          <Eyebrow>{formatCzechDate(today, { weekday: true })}</Eyebrow>
          {streak > 1 && <Badge tone="soft">{streak} dní v řadě</Badge>}
        </div>
        <h1 className="display mt-3 text-[2.25rem] leading-[1.08] md:text-[3rem]">
          {greeting}
          {name ? `, ${name}` : ''}.
        </h1>
        <p className="mt-3 text-lg text-soft">{state.dayLabel}</p>
      </header>

      {/* --- Karta dne ---------------------------------------------------- */}
      {card ? (
        <section className="fade-up">
          <Hero token="linen" className="rounded-[var(--radius-2xl)] p-1">
            <div className="relative z-10 rounded-[calc(var(--radius-2xl)-4px)] bg-[var(--card)]/92 p-7 backdrop-blur-sm md:p-10">
              <div className="flex items-start justify-between gap-6">
                <div className="min-w-0">
                  <Eyebrow>Dnešní téma</Eyebrow>
                  <h2 className="display mt-3 text-[1.75rem] leading-tight md:text-[2.25rem]">
                    {card.headline}
                  </h2>
                </div>
                {state.progress !== null && (
                  <ProgressRing
                    value={state.progress}
                    size={62}
                    label={`${Math.round(state.progress * 100)}%`}
                  />
                )}
              </div>

              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-soft">
                {card.body}
              </p>

              {card.whatsHappening && card.whatsHappening.length > 0 && (
                <div className="mt-8">
                  <Eyebrow>Co se dnes může dít</Eyebrow>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {card.whatsHappening.map((w, i) => (
                      <li key={i} className="flex gap-2.5 text-[0.9375rem] leading-relaxed text-soft">
                        <span className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-sand)]" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {card.tip && (
                <p className="mt-7 rounded-[var(--radius-md)] bg-[var(--card-muted)] px-5 py-4 text-[0.9375rem] leading-relaxed">
                  <span className="font-semibold">Tip: </span>
                  {card.tip}
                </p>
              )}

              {card.callDoctorIf && card.callDoctorIf.length > 0 && (
                <div className="mt-5 rounded-[var(--radius-md)] border border-[var(--color-blush)] bg-[var(--color-blush)]/20 px-5 py-4">
                  <p className="text-[0.8125rem] font-semibold">Ozvěte se lékaři, pokud:</p>
                  <ul className="mt-2 space-y-1.5">
                    {card.callDoctorIf.map((c, i) => (
                      <li key={i} className="flex gap-2.5 text-[0.875rem] leading-relaxed text-soft">
                        <span className="mt-[0.5em] h-1 w-1 shrink-0 rounded-full bg-[var(--color-blush-deep)]" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Hero>
        </section>
      ) : (
        <Card className="p-8">
          <h2 className="display text-2xl">{state.phase.title}</h2>
          <p className="mt-3 text-soft">{state.phase.description}</p>
        </Card>
      )}

      {/* --- Úkol a nálada ------------------------------------------------ */}
      <section className="grid gap-4 md:grid-cols-2">
        {card?.task && (
          <DailyTask
            date={today}
            task={card.task}
            initialDone={daily ? daily.taskDone : false}
          />
        )}
        <QuickMood date={today} initialMood={journal?.mood ?? null} />
      </section>

      {/* --- Vzpomínky ---------------------------------------------------- */}
      {memories.length > 0 && (
        <section className="fade-up">
          <SectionTitle title="Na dnešek si vzpomínáme" subtitle="Přesně před rokem a dál" />
          <div className="space-y-3">
            {memories.map((m) => (
              <Card key={m.event.id} muted className="flex items-start gap-4 p-5">
                <span className="text-lg text-[var(--color-taupe)]">{m.event.icon ?? '❦'}</span>
                <div>
                  <p className="text-[0.9375rem] font-medium">{m.label}</p>
                  {m.event.body && (
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-soft">{m.event.body}</p>
                  )}
                  <p className="mt-1.5 text-xs text-faint">{formatCzechDate(m.event.onDate)}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* --- Doporučení dne ----------------------------------------------- */}
      {feature && (
        <section className="fade-up">
          <SectionTitle title="Dnešní doporučení" />
          <FeatureCard item={feature} reason={reasonFor(state.dayLabel)} />
        </section>
      )}

      {/* --- Připomínky --------------------------------------------------- */}
      {(upcoming.length > 0 || meds.length > 0) && (
        <section className="grid gap-4 md:grid-cols-2">
          {meds.length > 0 && (
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="display text-xl">Dnešní léky</h3>
                <Link href="/kalendar" className="text-[0.8125rem] text-soft hover:underline">
                  Upravit
                </Link>
              </div>
              <ul className="mt-4 space-y-2.5">
                {meds.map((m) => (
                  <li key={m.id} className="flex items-center gap-3 text-[0.9375rem]">
                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[0.625rem] ${
                        takenToday.has(m.id)
                          ? 'border-[var(--color-sage-deep)] bg-[var(--color-sage)] text-white'
                          : 'border-[var(--line)] text-transparent'
                      }`}
                    >
                      ✓
                    </span>
                    <span className={takenToday.has(m.id) ? 'text-faint line-through' : ''}>
                      {m.name}
                      {m.dose && <span className="text-soft"> · {m.dose}</span>}
                    </span>
                    {m.timeOfDay && (
                      <span className="ml-auto text-xs text-faint">{m.timeOfDay}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          {upcoming.length > 0 && (
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="display text-xl">Co vás čeká</h3>
                <Link href="/kalendar" className="text-[0.8125rem] text-soft hover:underline">
                  Kalendář
                </Link>
              </div>
              <ul className="mt-4 space-y-3">
                {upcoming.slice(0, 5).map((e) => {
                  const inDays = Math.round(
                    (Date.parse(e.onDate) - Date.parse(today)) / 86_400_000,
                  )
                  return (
                    <li key={e.id} className="flex items-baseline gap-3 text-[0.9375rem]">
                      <span className="w-16 shrink-0 text-xs text-faint">
                        {inDays === 0 ? 'dnes' : inDays === 1 ? 'zítra' : `za ${czDays(inDays)}`}
                      </span>
                      <span className="truncate">{e.title}</span>
                    </li>
                  )
                })}
              </ul>
            </Card>
          )}
        </section>
      )}

      {/* --- Řady obsahu (IVF Netflix) ------------------------------------ */}
      {rails.slice(0, 4).map((rail) => (
        <section key={rail.id} className="fade-up">
          <SectionTitle
            title={rail.title}
            subtitle={rail.reason}
            action={
              <Link href="/objevit" className="text-[0.8125rem] text-soft hover:underline">
                Vše
              </Link>
            }
          />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {rail.items.map((item) => (
              <ContentCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      ))}

      {/* --- Povzbuzení --------------------------------------------------- */}
      {encouragement && (
        <section className="fade-up">
          <Hero token="dawn" className="rounded-[var(--radius-xl)] px-8 py-12 text-center md:py-16">
            <p className="display relative z-10 mx-auto max-w-xl text-[1.375rem] leading-[1.5] text-ink md:text-[1.625rem]">
              {encouragement.text}
            </p>
            {encouragement.author && (
              <p className="relative z-10 mt-5 text-[0.8125rem] text-ink/50">
                {encouragement.author}
              </p>
            )}
          </Hero>
        </section>
      )}

      {/* --- Večerní reflexe ---------------------------------------------- */}
      {card?.reflection && (
        <section className="fade-up">
          <EveningReflection
            date={today}
            question={card.reflection}
            initial={daily?.reflection ?? ''}
          />
        </section>
      )}

      {/* --- Zítra -------------------------------------------------------- */}
      <section className="border-t border-[var(--line)] pt-8 text-center">
        <p className="text-[0.9375rem] text-soft">
          Zítra tu na vás bude čekat něco nového.
        </p>
        <Link
          href="/gabi"
          className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-[var(--color-taupe-deep)] hover:underline"
        >
          Chcete se na něco zeptat? Napište Gabi <span aria-hidden>→</span>
        </Link>
      </section>
    </div>
  )
}

function greetFor(hour: number): string {
  if (hour < 5) return 'Ještě nespíte'
  if (hour < 10) return 'Dobré ráno'
  if (hour < 18) return 'Dobrý den'
  return 'Dobrý večer'
}

function reasonFor(dayLabel: string): string {
  return dayLabel.replace(/^Dnes (je|jste) /, 'Protože jste ').replace(/^Dnes /, 'Protože ')
}

function pickEncouragement(tone: string, today: string) {
  const matching = ENCOURAGEMENTS.filter((e) => e.tone === tone)
  const pool = matching.length > 0 ? matching : ENCOURAGEMENTS
  if (pool.length === 0) return null
  return pool[seedFrom(today, tone) % pool.length]
}
