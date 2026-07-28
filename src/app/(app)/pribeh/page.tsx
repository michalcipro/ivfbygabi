import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile, listJournal } from '@/lib/db/repo'
import {
  LETTER_TARGETS,
  ensureMilestone,
  listLetters,
  listTimeline,
} from '@/lib/db/repo-story'
import { listLabValues } from '@/lib/db/repo-health'
import { resolveJourney } from '@/lib/domain/journey'
import { formatCzechDate, humanAge } from '@/lib/domain/dates'
import { LAB_BY_KEY } from '@/lib/health/lab-params'
import { PHASES, isPhaseId } from '@/lib/domain/phases'
import { Card, EmptyState, Eyebrow, Hero, SectionTitle, Stat } from '@/components/ui'
import { AddLetterForm, AddMilestoneForm, LetterCard } from './interactive'

export const metadata: Metadata = { title: 'Můj příběh' }
export const dynamic = 'force-dynamic'

/**
 * Rodinná kronika. Všechno, co uživatelka během cesty zaznamenala, složené
 * do jedné časové osy — od prvního zápisu po první narozeniny.
 */
export default async function StoryPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  syncMilestonesFromProfile(ownerId, profile)

  const timeline = listTimeline(ownerId)
  const letters = listLetters(ownerId)
  const journal = listJournal(ownerId, 400)
  const labs = listLabValues(ownerId)

  // Časová osa spojuje milníky, zápisy s poznámkou a laboratorní výsledky.
  const entries = [
    ...timeline.map((t) => ({
      date: t.onDate,
      icon: t.icon ?? '✦',
      title: t.title,
      body: t.body,
      kind: t.kind as string,
    })),
    ...journal
      .filter((j) => (j.note && j.note.trim().length > 20) || j.gratitude)
      .map((j) => ({
        date: j.onDate,
        icon: '✎',
        title:
          j.phaseId && isPhaseId(j.phaseId)
            ? `Zápis · ${PHASES[j.phaseId].name}`
            : 'Zápis v deníku',
        body: (j.note ?? j.gratitude ?? '').slice(0, 260),
        kind: 'zapis',
      })),
    ...labs.map((l) => ({
      date: l.onDate,
      icon: '◉',
      title: `${LAB_BY_KEY[l.paramKey]?.name ?? l.paramKey}: ${l.value} ${l.unit ?? ''}`.trim(),
      body: null,
      kind: 'vysledek',
    })),
  ].sort((a, b) => b.date.localeCompare(a.date))

  const years = groupByYear(entries)

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Vaše kronika</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Můj příběh</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Každý zápis, každý výsledek, každý milník. Skládá se to samo — vy jen žijete.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="p-6">
          <Stat value={entries.length} label="záznamů na časové ose" />
        </Card>
        <Card className="p-6">
          <Stat value={timeline.length} label="milníků" />
        </Card>
        <Card className="p-6">
          <Stat value={letters.length} label="dopisů" />
        </Card>
        <Card className="p-6">
          <Stat
            value={state.journeyDays ?? '—'}
            label="dní vaší cesty"
            hint={state.journeyDays ? humanAge(state.journeyDays) : undefined}
          />
        </Card>
      </section>

      <section className="no-print flex flex-wrap gap-2">
        <AddMilestoneForm />
        <a href="/pribeh/kniha" className="btn btn-secondary">
          Vytvořit knihu
        </a>
      </section>

      <section>
        <SectionTitle title="Časová osa" subtitle="Od nejnovějšího" />

        {entries.length === 0 ? (
          <EmptyState
            icon="❦"
            title="Vaše kronika teprve začíná"
            body="Jakmile si zapíšete první den v deníku, zadáte výsledek nebo přidáte milník, objeví se to tady."
          />
        ) : (
          <div className="space-y-10">
            {years.map(([year, items]) => (
              <div key={year}>
                <p className="display mb-5 text-3xl text-[var(--fg-faint)]">{year}</p>
                <div className="relative space-y-6 border-l border-[var(--line)] pl-7">
                  {items.map((e, i) => (
                    <div key={`${e.date}-${i}`} className="relative">
                      <span className="absolute -left-[2.1875rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--page)] text-[0.6875rem] text-[var(--color-taupe)]">
                        {e.icon}
                      </span>
                      <p className="text-xs text-faint">{formatCzechDate(e.date)}</p>
                      <p className="mt-1 text-[0.9375rem] font-medium leading-snug">{e.title}</p>
                      {e.body && (
                        <p className="mt-1.5 whitespace-pre-line text-[0.875rem] leading-relaxed text-soft">
                          {e.body}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <SectionTitle
          title="Dopisy"
          subtitle="Soukromá sekce — jen pro vás, dokud se nerozhodnete jinak"
        />

        <div className="no-print mb-6">
          <AddLetterForm targets={Object.entries(LETTER_TARGETS).map(([k, v]) => ({ key: k, label: v }))} />
        </div>

        {letters.length === 0 ? (
          <Hero token="dawn" className="rounded-[var(--radius-xl)] px-8 py-14 text-center">
            <div className="relative z-10 mx-auto max-w-md">
              <p className="display text-[1.5rem] leading-snug text-ink">
                Někdy se věci líp řeknou dopisem, který nikdo nepřečte.
              </p>
              <p className="mt-4 text-[0.9375rem] text-ink/60">
                Embryu, které se nezahnízdilo. Miminku, které teprve přijde. Sobě
                za rok. Nebo tomu, kdo tu nezůstal.
              </p>
            </div>
          </Hero>
        ) : (
          <div className="space-y-4">
            {letters.map((l) => (
              <LetterCard key={l.id} letter={l} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

/** Milníky, které plynou z profilu, doplníme do kroniky automaticky. */
function syncMilestonesFromProfile(userId: string, profile: ReturnType<typeof getProfile>) {
  const milestones: Array<[string | null, string, string]> = [
    [profile.tryingSince, 'Začátek naší cesty', '✦'],
    [profile.diagnosticsStartedOn, 'První vyšetření', '◈'],
    [profile.iuiOn, 'Inseminace', '◇'],
    [profile.stimulationStartOn, 'První injekce', '✧'],
    [profile.retrievalOn, 'Odběr vajíček', '◍'],
    [profile.transferOn, 'Transfer embrya', '❋'],
    [profile.betaTestOn, 'Pozitivní beta HCG', '✶'],
    [profile.lossOn, 'Ztráta', '❍'],
    [profile.birthOn, 'Narození miminka', '✿'],
    [profile.nicuAdmissionOn, 'Přijetí na novorozeneckou JIP', '◉'],
    [profile.cameHomeOn, 'První den doma', '⌂'],
  ]

  for (const [date, title, icon] of milestones) {
    if (!date) continue
    ensureMilestone(userId, title, {
      onDate: date,
      title,
      body: null,
      kind: 'milnik',
      icon,
      mediaId: null,
    })
  }
}

function groupByYear<T extends { date: string }>(items: T[]): Array<[string, T[]]> {
  const groups = new Map<string, T[]>()
  for (const item of items) {
    const year = item.date.slice(0, 4)
    const list = groups.get(year)
    if (list) list.push(item)
    else groups.set(year, [item])
  }
  return [...groups.entries()].sort((a, b) => b[0].localeCompare(a[0]))
}
