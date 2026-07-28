import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile, listJournal } from '@/lib/db/repo'
import { countInjections, labSeries, listMeasurements, METRICS } from '@/lib/db/repo-health'
import { listTimeline } from '@/lib/db/repo-story'
import { resolveJourney } from '@/lib/domain/journey'
import { LAB_BY_KEY, LAB_PARAMS } from '@/lib/health/lab-params'
import { czDays, humanAge } from '@/lib/domain/dates'
import { LineChart } from '@/components/chart'
import { Card, EmptyState, Eyebrow, SectionTitle, Stat } from '@/components/ui'
import { AddLabForm, AddMeasurementForm } from './forms'

export const metadata: Metadata = { title: 'Zdraví' }
export const dynamic = 'force-dynamic'

/**
 * Zdravotní přehled. Všechno, co uživatelka zadala nebo co jsme rozpoznali
 * ze zpráv, na jednom místě a v čase. Bez hodnocení — jen přehled.
 */
export default async function HealthPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const labs = labSeries(ownerId)
  const measurements = listMeasurements(ownerId)
  const journal = listJournal(ownerId, 365)
  const timeline = listTimeline(ownerId)

  const measurementsByMetric = measurements.reduce<Record<string, typeof measurements>>(
    (acc, m) => {
      ;(acc[m.metric] ??= []).push(m)
      return acc
    },
    {},
  )

  const weightFromJournal = journal
    .filter((e) => e.weightKg !== null)
    .map((e) => ({ date: e.onDate, value: e.weightKg! }))
    .reverse()
  if (weightFromJournal.length > 0 && !measurementsByMetric.weight) {
    measurementsByMetric.weight = weightFromJournal.map((p, i) => ({
      id: `j-${i}`,
      metric: 'weight',
      value: p.value,
      unit: 'kg',
      onDate: p.date,
    }))
  }

  const waterFromJournal = journal
    .filter((e) => e.waterMl !== null)
    .map((e) => ({ date: e.onDate, value: e.waterMl! }))
    .reverse()

  const injections = countInjections(ownerId)
  const labKeys = Object.keys(labs)
  const hasAnything = labKeys.length > 0 || Object.keys(measurementsByMetric).length > 0

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Vaše čísla v čase</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">Zdraví</h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Přehled hodnot, které jste zadala nebo které jsme rozpoznali z vašich zpráv.
          Interpretace vždy patří vašemu lékaři.
        </p>
      </header>

      {/* --- Statistiky cesty ---------------------------------------------- */}
      <section>
        <SectionTitle title="Vaše cesta v číslech" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {state.journeyDays !== null && (
            <Card className="p-6">
              <Stat value={state.journeyDays} label="dní na cestě" />
            </Card>
          )}
          {profile.ivfCycles > 0 && (
            <Card className="p-6">
              <Stat value={profile.ivfCycles} label="IVF cyklů" />
            </Card>
          )}
          {profile.transfersDone > 0 && (
            <Card className="p-6">
              <Stat value={profile.transfersDone} label="transferů" />
            </Card>
          )}
          {profile.embryosCreated > 0 && (
            <Card className="p-6">
              <Stat
                value={profile.embryosCreated}
                label="embryí celkem"
                hint={profile.embryosFrozen ? `${profile.embryosFrozen} zamražených` : undefined}
              />
            </Card>
          )}
          {injections > 0 && (
            <Card className="p-6">
              <Stat value={injections} label="zaznamenaných injekcí" />
            </Card>
          )}
          {state.gestationLabel && (
            <Card className="p-6">
              <Stat value={state.gestationLabel} label="gestační stáří" />
            </Card>
          )}
          {state.babyAgeDays !== null && state.babyAgeDays >= 0 && (
            <Card className="p-6">
              <Stat
                value={humanAge(state.babyAgeDays)}
                label="věk miminka"
                hint={
                  state.usesCorrectedAge && state.correctedAgeDays !== null
                    ? state.correctedAgeDays >= 0
                      ? `korigovaně ${humanAge(state.correctedAgeDays)}`
                      : `do termínu zbývá ${czDays(-state.correctedAgeDays)}`
                    : undefined
                }
              />
            </Card>
          )}
          <Card className="p-6">
            <Stat value={journal.length} label="zápisů v deníku" />
          </Card>
          <Card className="p-6">
            <Stat value={timeline.length} label="milníků v kronice" />
          </Card>
        </div>
      </section>

      {/* --- Laboratorní hodnoty ------------------------------------------- */}
      <section>
        <SectionTitle
          title="Laboratorní hodnoty"
          subtitle="Zadejte ručně, nebo nahrajte zprávu a hodnoty vytáhneme automaticky"
          action={
            <Link href="/dokumenty" className="text-[0.8125rem] text-soft hover:underline">
              Nahrát zprávu
            </Link>
          }
        />

        {labKeys.length === 0 ? (
          <EmptyState
            icon="◉"
            title="Zatím žádné hodnoty"
            body="Přidejte první výsledek — uvidíte pak vývoj v čase a srovnání mezi odběry."
          />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {labKeys.map((key) => {
              const param = LAB_BY_KEY[key]
              const points = labs[key].map((v) => ({ date: v.onDate, value: v.value }))
              return (
                <Card key={key} className="p-6">
                  <div className="mb-4 flex items-baseline justify-between gap-3">
                    <h3 className="display text-xl">{param?.name ?? key}</h3>
                    <span className="text-xs text-faint">
                      {points.length} {points.length === 1 ? 'záznam' : points.length < 5 ? 'záznamy' : 'záznamů'}
                    </span>
                  </div>
                  <LineChart
                    points={points}
                    unit={param?.unit}
                    reference={
                      param?.reference?.low !== undefined && param?.reference?.high !== undefined
                        ? { low: param.reference.low, high: param.reference.high }
                        : undefined
                    }
                    ariaLabel={`Vývoj hodnoty ${param?.name ?? key}`}
                  />
                  {param && (
                    <details className="mt-5 border-t border-[var(--line)] pt-4">
                      <summary className="cursor-pointer text-[0.8125rem] text-soft">
                        Co tato hodnota znamená
                      </summary>
                      <p className="mt-2.5 text-[0.875rem] leading-relaxed text-soft">
                        {param.explain}
                      </p>
                      {param.reference?.note && (
                        <p className="mt-2 text-[0.8125rem] leading-relaxed text-faint">
                          {param.reference.note}
                        </p>
                      )}
                    </details>
                  )}
                </Card>
              )
            })}
          </div>
        )}

        <div className="mt-6">
          <AddLabForm params={LAB_PARAMS.map((p) => ({ key: p.key, name: p.name, unit: p.unit }))} />
        </div>
      </section>

      {/* --- Měření --------------------------------------------------------- */}
      <section>
        <SectionTitle title="Měření" subtitle="Váha, tlak, glykémie, růst miminka, mléko" />

        {Object.keys(measurementsByMetric).length === 0 && waterFromJournal.length === 0 ? (
          <EmptyState
            icon="◈"
            title="Zatím nic naměřeno"
            body="Váhu a pitný režim můžete zapisovat i přímo v deníku — objeví se tady automaticky."
          />
        ) : (
          <div className="grid gap-5 md:grid-cols-2">
            {Object.entries(measurementsByMetric).map(([metric, values]) => {
              const meta = (METRICS as Record<string, { label: string; unit: string }>)[metric]
              return (
                <Card key={metric} className="p-6">
                  <h3 className="display mb-4 text-xl">{meta?.label ?? metric}</h3>
                  <LineChart
                    points={values.map((v) => ({ date: v.onDate, value: v.value }))}
                    unit={meta?.unit ?? values[0]?.unit}
                    color="var(--color-sage-deep)"
                    ariaLabel={`Vývoj: ${meta?.label ?? metric}`}
                  />
                </Card>
              )
            })}

            {waterFromJournal.length > 2 && (
              <Card className="p-6">
                <h3 className="display mb-4 text-xl">Pitný režim</h3>
                <LineChart
                  points={waterFromJournal}
                  unit="ml"
                  color="var(--color-sky-deep)"
                  ariaLabel="Vývoj pitného režimu"
                />
              </Card>
            )}
          </div>
        )}

        <div className="mt-6">
          <AddMeasurementForm
            metrics={Object.entries(METRICS).map(([key, m]) => ({
              key,
              label: m.label,
              unit: m.unit,
            }))}
          />
        </div>
      </section>

      {hasAnything && (
        <Card muted className="p-6 text-[0.8125rem] leading-relaxed text-soft">
          Grafy slouží k přehledu a k tomu, abyste se měla o co opřít při rozhovoru s lékařem.
          Zelený pruh v pozadí je orientační rozmezí — každá laboratoř má vlastní normy
          a hodnota se vždy posuzuje v kontextu vaší situace. Z grafu proto nelze vyvozovat
          závěry o vašem zdravotním stavu.
        </Card>
      )}
    </div>
  )
}
