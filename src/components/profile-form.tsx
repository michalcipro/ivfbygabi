'use client'

import { useState } from 'react'
import type { Profile } from '@/lib/domain/profile'
import { MODIFIER_LABELS } from '@/lib/domain/profile'
import { PHASE_GROUPS, PHASE_GROUP_META, PHASES, phasesInGroup } from '@/lib/domain/phases'
import { saveProfileAction } from '@/app/actions/health'

/**
 * Formulář profilu. Používá se v onboardingu i v nastavení.
 *
 * Zásada: nic není povinné kromě fáze. Uživatelka nemá být hned na začátku
 * nucená vypisovat čísla svých ztrát.
 */

const MODIFIER_GROUPS: Array<{ title: string; ids: (keyof typeof MODIFIER_LABELS)[] }> = [
  {
    title: 'Diagnózy a nálezy',
    ids: [
      'pcos',
      'endometriosis',
      'adenomyosis',
      'low_amh',
      'male_factor',
      'tubal_factor',
      'thyroid',
      'thrombophilia',
      'immunology',
      'unexplained',
    ],
  },
  {
    title: 'Způsob léčby',
    ids: ['icsi', 'pgt', 'frozen_transfer', 'donor_egg', 'donor_sperm', 'donor_embryo', 'surrogacy'],
  },
  {
    title: 'Těhotenství',
    ids: ['twins', 'high_risk', 'gestational_diabetes', 'preeclampsia', 'cervical_insufficiency'],
  },
  {
    title: 'Porod',
    ids: ['vaginal_birth', 'csection', 'induced_birth', 'preterm', 'nicu_stay'],
  },
  {
    title: 'Krmení',
    ids: ['breastfeeding', 'formula_feeding', 'combination_feeding', 'pumping', 'reflux', 'colic'],
  },
  {
    title: 'Vaše situace',
    ids: [
      'after_loss',
      'repeated_failure',
      'secondary_infertility',
      'single_mother',
      'same_sex_couple',
    ],
  },
]

const DATE_FIELDS: Array<{ name: keyof Profile; label: string; hint?: string }> = [
  { name: 'tryingSince', label: 'Kdy jste začali zkoušet' },
  { name: 'diagnosticsStartedOn', label: 'Začátek vyšetření' },
  { name: 'iuiOn', label: 'Inseminace (IUI)' },
  { name: 'stimulationStartOn', label: 'Začátek stimulace' },
  { name: 'retrievalOn', label: 'Odběr vajíček' },
  { name: 'transferOn', label: 'Transfer', hint: 'Nejdůležitější datum pro denní obsah' },
  { name: 'betaTestOn', label: 'Pozitivní beta HCG' },
  { name: 'lossOn', label: 'Ztráta' },
  {
    name: 'lastPeriodOn',
    label: 'První den poslední menstruace',
    hint: 'Pro výpočet týdne těhotenství',
  },
  { name: 'dueDate', label: 'Termín porodu', hint: 'Podle ultrazvuku, pokud ho znáte' },
  { name: 'birthOn', label: 'Datum narození miminka' },
  { name: 'nicuAdmissionOn', label: 'Přijetí na novorozeneckou JIP' },
  { name: 'cameHomeOn', label: 'První den doma' },
]

const NUMBER_FIELDS: Array<{
  name: keyof Profile
  label: string
  step?: string
  hint?: string
}> = [
  { name: 'amh', label: 'AMH (ng/ml)', step: '0.01' },
  { name: 'ivfCycles', label: 'Počet IVF cyklů' },
  { name: 'transfersDone', label: 'Počet transferů' },
  { name: 'embryosCreated', label: 'Počet embryí celkem' },
  { name: 'embryosFrozen', label: 'Zamražená embrya' },
  { name: 'miscarriages', label: 'Počet ztrát' },
  {
    name: 'embryoDayAtTransfer',
    label: 'Den kultivace přeneseného embrya',
    hint: 'Obvykle 3 nebo 5',
  },
  {
    name: 'gestationalWeeksAtBirth',
    label: 'Týden těhotenství při porodu',
    step: '0.5',
    hint: 'Potřebujeme pro korigovaný věk u nedonošených',
  },
]

export function ProfileForm({
  profile,
  submitLabel = 'Uložit',
  compact = false,
}: {
  profile: Profile
  submitLabel?: string
  compact?: boolean
}) {
  const [phase, setPhase] = useState<string>(profile.declaredPhase ?? '')
  const [modifiers, setModifiers] = useState<string[]>(profile.modifiers)
  const [showAll, setShowAll] = useState(!compact)

  const toggleModifier = (id: string) =>
    setModifiers((prev) => (prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]))

  const relevantDates = phase ? relevantDateFields(phase) : DATE_FIELDS.map((f) => f.name)

  return (
    <form action={saveProfileAction} className="space-y-10">
      {/* --- Fáze --------------------------------------------------------- */}
      <section>
        <h2 className="display text-2xl">Kde na své cestě právě jste?</h2>
        <p className="mt-2 text-[0.9375rem] text-soft">
          Podle toho pro vás budeme vybírat obsah. Kdykoliv to můžete změnit.
        </p>

        <input type="hidden" name="declaredPhase" value={phase} />

        <div className="mt-6 space-y-6">
          {PHASE_GROUPS.map((group) => {
            const options = phasesInGroup(group).filter((p) => p.selectableAtOnboarding)
            if (options.length === 0) return null
            return (
              <div key={group}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: PHASE_GROUP_META[group].accent }}
                  />
                  <p className="eyebrow">{PHASE_GROUP_META[group].name}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {options.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPhase(p.id)}
                      aria-pressed={phase === p.id}
                      className={`rounded-full border px-4 py-2 text-[0.875rem] transition-all duration-300 ${
                        phase === p.id
                          ? 'border-transparent bg-[var(--color-taupe)] text-white'
                          : 'border-[var(--line)] text-soft hover:border-[var(--color-sand)]'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {phase && (
          <p className="mt-5 rounded-[var(--radius-md)] bg-[var(--card-muted)] px-5 py-4 text-[0.9375rem] leading-relaxed text-soft">
            {PHASES[phase as keyof typeof PHASES].description}
          </p>
        )}
      </section>

      {/* --- Základní údaje ------------------------------------------------ */}
      <section>
        <h2 className="display text-2xl">O vás</h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="displayName">
              Jak vám máme říkat
            </label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              defaultValue={profile.displayName}
              className="field"
            />
          </div>
          <div>
            <label className="label" htmlFor="birthYear">
              Rok narození
            </label>
            <input
              id="birthYear"
              name="birthYear"
              type="number"
              min="1950"
              max="2015"
              defaultValue={profile.birthYear ?? ''}
              className="field"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="clinicName">
              Klinika
            </label>
            <input
              id="clinicName"
              name="clinicName"
              type="text"
              defaultValue={profile.clinicName ?? ''}
              placeholder="Nepovinné — pomůže nám najít ženy ze stejné kliniky"
              className="field"
            />
          </div>
        </div>

        <label className="mt-5 flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="anonymousInCommunity"
            defaultChecked={profile.anonymousInCommunity}
            className="mt-1 h-4 w-4 accent-[var(--color-taupe)]"
          />
          <span>
            <span className="text-[0.9375rem] font-medium">V komunitě vystupovat anonymně</span>
            <span className="mt-0.5 block text-[0.8125rem] text-soft">
              Ostatní uvidí jen vaši fázi, ne jméno ani žádné vaše údaje.
            </span>
          </span>
        </label>
      </section>

      {/* --- Data ---------------------------------------------------------- */}
      <section>
        <h2 className="display text-2xl">Důležitá data</h2>
        <p className="mt-2 text-[0.9375rem] text-soft">
          Vyplňte jen to, co se vás týká. Z těchto dat počítáme, kolikátý je den vaší cesty.
        </p>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          {DATE_FIELDS.filter((f) => showAll || relevantDates.includes(f.name)).map((f) => (
            <div key={String(f.name)}>
              <label className="label" htmlFor={String(f.name)}>
                {f.label}
              </label>
              <input
                id={String(f.name)}
                name={String(f.name)}
                type="date"
                defaultValue={(profile[f.name] as string | null) ?? ''}
                className="field"
              />
              {f.hint && <p className="mt-1.5 text-xs text-faint">{f.hint}</p>}
            </div>
          ))}
        </div>

        {compact && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="btn btn-ghost mt-4 !py-2 !text-[0.8125rem]"
          >
            {showAll ? 'Zobrazit jen relevantní' : 'Zobrazit všechna data'}
          </button>
        )}
      </section>

      {/* --- Čísla ---------------------------------------------------------- */}
      <section>
        <h2 className="display text-2xl">Čísla vaší cesty</h2>
        <p className="mt-2 text-[0.9375rem] text-soft">
          Nepovinné. Slouží k přehledu a k tomu, aby Gabi znala kontext.
        </p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {NUMBER_FIELDS.map((f) => (
            <div key={String(f.name)}>
              <label className="label" htmlFor={String(f.name)}>
                {f.label}
              </label>
              <input
                id={String(f.name)}
                name={String(f.name)}
                type="number"
                step={f.step ?? '1'}
                min="0"
                defaultValue={(profile[f.name] as number | null) ?? ''}
                className="field"
              />
              {f.hint && <p className="mt-1.5 text-xs text-faint">{f.hint}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* --- Situace -------------------------------------------------------- */}
      <section>
        <h2 className="display text-2xl">Co se vás týká</h2>
        <p className="mt-2 text-[0.9375rem] text-soft">
          Podle toho přizpůsobíme obsah. Nic z toho není povinné.
        </p>

        {modifiers.map((m) => (
          <input key={m} type="hidden" name="modifiers" value={m} />
        ))}

        <div className="mt-6 space-y-6">
          {MODIFIER_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="eyebrow mb-2.5">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.ids.map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleModifier(id)}
                    aria-pressed={modifiers.includes(id)}
                    className={`rounded-full border px-4 py-2 text-[0.875rem] transition-all duration-300 ${
                      modifiers.includes(id)
                        ? 'border-transparent bg-[var(--color-champagne)] text-ink'
                        : 'border-[var(--line)] text-soft hover:border-[var(--color-sand)]'
                    }`}
                  >
                    {MODIFIER_LABELS[id]}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="sticky bottom-20 z-20 lg:bottom-4">
        <button type="submit" className="btn btn-primary w-full !py-3.5 shadow-[var(--shadow-lift)]">
          {submitLabel}
        </button>
      </div>

      <p className="text-center text-xs leading-relaxed text-faint">
        Vaše zdravotní údaje slouží výhradně k personalizaci obsahu uvnitř aplikace.
        V komunitě je nikdo nevidí.
      </p>
    </form>
  )
}

/** Které datumové pole má smysl ukazovat v dané fázi. */
function relevantDateFields(phaseId: string): (keyof Profile)[] {
  const group = PHASES[phaseId as keyof typeof PHASES]?.group
  switch (group) {
    case 'planning':
      return ['tryingSince', 'lastPeriodOn']
    case 'diagnosis':
      return ['tryingSince', 'diagnosticsStartedOn']
    case 'treatment':
      return ['stimulationStartOn', 'retrievalOn', 'transferOn', 'iuiOn']
    case 'waiting':
      return ['transferOn', 'betaTestOn', 'retrievalOn']
    case 'loss':
      return ['lossOn', 'transferOn', 'lastPeriodOn']
    case 'pregnancy':
      return ['lastPeriodOn', 'dueDate', 'transferOn', 'betaTestOn']
    case 'birth':
      return ['dueDate', 'birthOn', 'nicuAdmissionOn', 'lastPeriodOn']
    case 'baby':
      return ['birthOn', 'dueDate', 'cameHomeOn', 'nicuAdmissionOn']
    default:
      return ['tryingSince']
  }
}
