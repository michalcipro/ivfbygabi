'use client'

import { useState, useTransition } from 'react'
import type { JournalEntry } from '@/lib/db/repo'
import { saveJournalAction } from '@/app/actions/journal'

const SCALES = [
  { name: 'mood', label: 'Nálada', low: 'těžká', high: 'lehká' },
  { name: 'anxiety', label: 'Úzkost', low: 'klid', high: 'silná' },
  { name: 'hope', label: 'Naděje', low: 'málo', high: 'hodně' },
  { name: 'energy', label: 'Energie', low: 'vyčerpaná', high: 'plná sil' },
  { name: 'pain', label: 'Bolest', low: 'žádná', high: 'silná' },
] as const

export function JournalForm({
  date,
  entry,
  symptoms,
}: {
  date: string
  entry: JournalEntry | null
  symptoms: string[]
}) {
  const [pending, startTransition] = useTransition()
  const [saved, setSaved] = useState(false)
  const [values, setValues] = useState<Record<string, number | null>>({
    mood: entry?.mood ?? null,
    anxiety: entry?.anxiety ?? null,
    hope: entry?.hope ?? null,
    energy: entry?.energy ?? null,
    pain: entry?.pain ?? null,
  })
  const [selected, setSelected] = useState<string[]>(entry?.symptoms ?? [])

  const submit = (formData: FormData) => {
    for (const [k, v] of Object.entries(values)) {
      if (v !== null) formData.set(k, String(v))
      else formData.delete(k)
    }
    formData.delete('symptoms')
    for (const s of selected) formData.append('symptoms', s)

    startTransition(async () => {
      await saveJournalAction(formData)
      setSaved(true)
      setTimeout(() => setSaved(false), 2600)
    })
  }

  return (
    <form action={submit} className="surface space-y-8 p-7">
      <input type="hidden" name="date" value={date} />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SCALES.map((scale) => (
          <div key={scale.name}>
            <div className="mb-2 flex items-baseline justify-between">
              <span className="label !mb-0">{scale.label}</span>
              <span className="text-[0.6875rem] text-faint">
                {values[scale.name] !== null ? `${values[scale.name]}/5` : '—'}
              </span>
            </div>
            <div className="flex gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() =>
                    setValues((prev) => ({
                      ...prev,
                      [scale.name]: prev[scale.name] === n ? null : n,
                    }))
                  }
                  aria-label={`${scale.label}: ${n} z 5`}
                  aria-pressed={values[scale.name] === n}
                  className={`h-9 flex-1 rounded-[var(--radius-xs)] border text-[0.75rem] transition-all duration-300 ${
                    values[scale.name] !== null && n <= values[scale.name]!
                      ? 'border-transparent bg-[var(--color-taupe)] text-white'
                      : 'border-[var(--line)] text-faint hover:border-[var(--color-sand)]'
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[0.625rem] text-faint">
              <span>{scale.low}</span>
              <span>{scale.high}</span>
            </div>
          </div>
        ))}
      </div>

      <div>
        <span className="label">Jak se dnes cítíte tělesně?</span>
        <div className="flex flex-wrap gap-2">
          {symptoms.map((s) => {
            const active = selected.includes(s)
            return (
              <button
                key={s}
                type="button"
                onClick={() =>
                  setSelected((prev) => (active ? prev.filter((x) => x !== s) : [...prev, s]))
                }
                aria-pressed={active}
                className={`rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-colors ${
                  active
                    ? 'border-transparent bg-[var(--color-champagne)] text-ink'
                    : 'border-[var(--line)] text-soft hover:border-[var(--color-sand)]'
                }`}
              >
                {s}
              </button>
            )
          })}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className="label" htmlFor="sleepHours">
            Spánek (hodin)
          </label>
          <input
            id="sleepHours"
            name="sleepHours"
            type="number"
            step="0.5"
            min="0"
            max="24"
            defaultValue={entry?.sleepHours ?? ''}
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="waterMl">
            Pitný režim (ml)
          </label>
          <input
            id="waterMl"
            name="waterMl"
            type="number"
            step="100"
            min="0"
            defaultValue={entry?.waterMl ?? ''}
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="weightKg">
            Váha (kg)
          </label>
          <input
            id="weightKg"
            name="weightKg"
            type="number"
            step="0.1"
            min="20"
            defaultValue={entry?.weightKg ?? ''}
            className="field"
          />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="note">
          Co máte dnes na srdci?
        </label>
        <textarea
          id="note"
          name="note"
          rows={6}
          defaultValue={entry?.note ?? ''}
          placeholder="Napište cokoliv. Nikdo jiný to neuvidí."
          className="field resize-none"
        />
      </div>

      <div>
        <label className="label" htmlFor="gratitude">
          Za co jste dnes vděčná?
        </label>
        <input
          id="gratitude"
          name="gratitude"
          type="text"
          defaultValue={entry?.gratitude ?? ''}
          placeholder="I malá věc se počítá."
          className="field"
        />
      </div>

      <div className="flex items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? 'Ukládám…' : 'Uložit zápis'}
        </button>
        {saved && (
          <span className="text-[0.875rem] text-[var(--color-sage-deep)]">
            Uloženo ✓
          </span>
        )}
      </div>
    </form>
  )
}
