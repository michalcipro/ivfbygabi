import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getJournalEntry, getProfile, listJournal } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { formatCzechDate, isValidIsoDate, today as todayIso } from '@/lib/domain/dates'
import { PHASES } from '@/lib/domain/phases'
import { BarChart } from '@/components/chart'
import { Card, EmptyState, Eyebrow, SectionTitle, Stat } from '@/components/ui'
import { JournalForm } from './journal-form'

export const metadata: Metadata = { title: 'Deník' }
export const dynamic = 'force-dynamic'

const SYMPTOMS_BY_GROUP: Record<string, string[]> = {
  planning: ['Křeče', 'Citlivá prsa', 'Hlen', 'Nálady', 'Únava'],
  diagnosis: ['Únava', 'Nálady', 'Bolest hlavy', 'Nespavost'],
  treatment: [
    'Nadýmání',
    'Tlak v podbřišku',
    'Citlivá prsa',
    'Bolest hlavy',
    'Návaly',
    'Modřiny po injekcích',
    'Únava',
    'Nespavost',
  ],
  waiting: [
    'Píchání v podbřišku',
    'Citlivá prsa',
    'Nadýmání',
    'Špinění',
    'Křeče',
    'Únava',
    'Nevolnost',
  ],
  loss: ['Krvácení', 'Křeče', 'Únava', 'Nálady', 'Nespavost'],
  pregnancy: [
    'Nevolnost',
    'Zvracení',
    'Únava',
    'Citlivá prsa',
    'Pálení žáhy',
    'Zácpa',
    'Bolest zad',
    'Otoky',
    'Pohyby miminka',
  ],
  birth: ['Kontrakce', 'Tlak v pánvi', 'Předzvěsti', 'Nespavost', 'Otoky'],
  baby: [
    'Bolest jizvy',
    'Očistky',
    'Bolest při kojení',
    'Nedostatek spánku',
    'Návaly pocení',
    'Vypadávání vlasů',
  ],
}

export default async function JournalPage({
  searchParams,
}: {
  searchParams: Promise<{ den?: string }>
}) {
  const params = await searchParams
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)

  const date = params.den && isValidIsoDate(params.den) ? params.den : todayIso()
  const state = resolveJourney(profile, date)
  const entry = getJournalEntry(ownerId, date)
  const history = listJournal(ownerId, 120)

  const moodPoints = history
    .filter((e) => e.mood !== null)
    .map((e) => ({ date: e.onDate, value: e.mood! }))
  const anxietyPoints = history
    .filter((e) => e.anxiety !== null)
    .map((e) => ({ date: e.onDate, value: e.anxiety! }))
  const hopePoints = history
    .filter((e) => e.hope !== null)
    .map((e) => ({ date: e.onDate, value: e.hope! }))

  const avgMood = average(moodPoints.map((p) => p.value))
  const written = history.filter((e) => e.note && e.note.trim().length > 0).length

  // Když se pohoda dlouhodobě zhoršuje, nabídneme podporu — bez dramatizace.
  const recentMood = moodPoints.slice(0, 10).map((p) => p.value)
  const recentAvg = average(recentMood.slice(0, 5))
  const strugglingStreak = recentMood.length >= 5 && recentAvg !== null && recentAvg <= 2.2

  const symptoms = SYMPTOMS_BY_GROUP[state.group] ?? SYMPTOMS_BY_GROUP.planning

  return (
    <div className="space-y-10">
      <header>
        <Eyebrow>Jen pro vás</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Deník</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Všechno, co si sem zapíšete, zůstává soukromé. Na konci cesty z toho složíme
          vaši kroniku.
        </p>
      </header>

      {strugglingStreak && (
        <Card className="border-[var(--color-blush)] bg-[var(--color-blush)]/15 p-6">
          <h2 className="display text-xl">Poslední dny byly těžké</h2>
          <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-soft">
            Podle vašich zápisů se vám dlouhodobě nedaří dobře. To není slabost a nemusíte
            to zvládat sama. Zvažte prosím rozhovor se svým lékařem nebo psychologem —
            i jedno sezení může hodně pomoct.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/knihovna?topic=psychika" className="btn btn-secondary !py-2 !text-[0.8125rem]">
              Obsah o psychice
            </Link>
            <Link href="/gabi" className="btn btn-ghost !py-2 !text-[0.8125rem]">
              Napsat Gabi
            </Link>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-faint">
            Toto upozornění vychází z vašich vlastních zápisů a není diagnózou.
            Pokud máte myšlenky na ublížení sobě, vyhledejte prosím pomoc ihned.
          </p>
        </Card>
      )}

      <section>
        <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="display text-2xl">{formatCzechDate(date, { weekday: true })}</h2>
            <p className="mt-1 text-sm text-soft">{state.dayLabel}</p>
          </div>
          <form method="get" className="flex items-center gap-2">
            <input
              type="date"
              name="den"
              defaultValue={date}
              max={todayIso()}
              className="field !w-auto !py-2 !text-[0.8125rem]"
            />
            <button type="submit" className="btn btn-secondary !py-2 !text-[0.8125rem]">
              Zobrazit
            </button>
          </form>
        </div>

        <JournalForm date={date} entry={entry} symptoms={symptoms} />
      </section>

      {history.length > 0 && (
        <>
          <section className="grid gap-4 sm:grid-cols-3">
            <Card className="p-6">
              <Stat value={history.length} label="zápisů celkem" />
            </Card>
            <Card className="p-6">
              <Stat
                value={avgMood ? avgMood.toFixed(1).replace('.', ',') : '—'}
                label="průměrná nálada"
                hint="ze škály 1–5"
              />
            </Card>
            <Card className="p-6">
              <Stat value={written} label="dní s poznámkou" />
            </Card>
          </section>

          <section>
            <SectionTitle
              title="Jak se vám vedlo"
              subtitle="Posledních 120 dní vaší cesty"
            />
            <div className="grid gap-5 md:grid-cols-3">
              <Card className="p-6">
                <p className="eyebrow mb-4">Nálada</p>
                <BarChart points={moodPoints} ariaLabel="Vývoj nálady" />
              </Card>
              {anxietyPoints.length > 0 && (
                <Card className="p-6">
                  <p className="eyebrow mb-4">Úzkost</p>
                  <BarChart points={anxietyPoints} ariaLabel="Vývoj úzkosti" />
                </Card>
              )}
              {hopePoints.length > 0 && (
                <Card className="p-6">
                  <p className="eyebrow mb-4">Naděje</p>
                  <BarChart points={hopePoints} ariaLabel="Vývoj naděje" />
                </Card>
              )}
            </div>
          </section>

          <section>
            <SectionTitle title="Vaše zápisy" />
            <div className="space-y-3">
              {history
                .filter((e) => e.note || e.gratitude || e.symptoms.length > 0)
                .slice(0, 30)
                .map((e) => (
                  <Card key={e.id} className="p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <Link
                        href={`/denik?den=${e.onDate}`}
                        className="text-[0.9375rem] font-medium hover:underline"
                      >
                        {formatCzechDate(e.onDate)}
                      </Link>
                      <span className="text-xs text-faint">
                        {e.phaseId && PHASES[e.phaseId as keyof typeof PHASES]?.name}
                      </span>
                    </div>
                    {e.note && (
                      <p className="mt-3 whitespace-pre-line text-[0.9375rem] leading-relaxed text-soft">
                        {e.note}
                      </p>
                    )}
                    {e.gratitude && (
                      <p className="mt-3 border-l-2 border-[var(--color-champagne)] pl-4 text-[0.9375rem] italic leading-relaxed text-soft">
                        {e.gratitude}
                      </p>
                    )}
                    {e.symptoms.length > 0 && (
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {e.symptoms.map((s) => (
                          <span
                            key={s}
                            className="rounded-full bg-[var(--card-muted)] px-2.5 py-1 text-[0.6875rem] text-soft"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                ))}
            </div>
          </section>
        </>
      )}

      {history.length === 0 && (
        <EmptyState
          icon="✎"
          title="Zatím tu nic není"
          body="Začněte dneškem. Stačí jedna věta — za pár měsíců budete ráda, že jste ji napsala."
        />
      )}
    </div>
  )
}

function average(values: number[]): number | null {
  if (values.length === 0) return null
  return values.reduce((a, b) => a + b, 0) / values.length
}
