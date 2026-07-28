'use client'

import { useState, useTransition } from 'react'
import type { Letter } from '@/lib/db/repo-story'
import { LETTER_TARGETS } from '@/lib/db/repo-story'
import { addLetterAction, addMilestoneAction, deleteLetterAction } from '@/app/actions/journal'
import { formatCzechDate } from '@/lib/domain/dates'

function todayIso(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function AddMilestoneForm() {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn btn-primary">
        + Přidat milník
      </button>
    )
  }

  return (
    <form action={addMilestoneAction} className="surface w-full space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="label" htmlFor="mtitle">
            Co se stalo
          </label>
          <input
            id="mtitle"
            name="title"
            type="text"
            required
            placeholder="Např. První srdíčko na ultrazvuku"
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="monDate">
            Kdy
          </label>
          <input
            id="monDate"
            name="onDate"
            type="date"
            required
            defaultValue={todayIso()}
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="mkind">
            Typ
          </label>
          <select id="mkind" name="kind" className="field" defaultValue="milnik">
            <option value="milnik">Milník</option>
            <option value="prvni">Poprvé</option>
            <option value="vysledek">Výsledek</option>
            <option value="foto">Fotografie</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="mbody">
            Jak to bylo
          </label>
          <textarea id="mbody" name="body" rows={3} className="field resize-none" />
        </div>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Uložit do kroniky
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Zrušit
        </button>
      </div>
    </form>
  )
}

export function AddLetterForm({ targets }: { targets: { key: string; label: string }[] }) {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn btn-secondary">
        + Napsat dopis
      </button>
    )
  }

  return (
    <form action={addLetterAction} className="surface space-y-5 p-7">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="toWhom">
            Komu píšete
          </label>
          <select id="toWhom" name="toWhom" className="field" defaultValue="baby">
            {targets.map((t) => (
              <option key={t.key} value={t.key}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="lonDate">
            Datum
          </label>
          <input
            id="lonDate"
            name="onDate"
            type="date"
            required
            defaultValue={todayIso()}
            className="field"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="ltitle">
            Nadpis (nepovinné)
          </label>
          <input id="ltitle" name="title" type="text" className="field" />
        </div>
      </div>

      <div>
        <label className="label" htmlFor="lbody">
          Dopis
        </label>
        <textarea
          id="lbody"
          name="body"
          rows={10}
          required
          placeholder="Piš, jak ti zobák narostl. Tohle nikdo neopravuje."
          className="field resize-none leading-relaxed"
        />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Uložit dopis
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Zrušit
        </button>
      </div>
    </form>
  )
}

export function LetterCard({ letter }: { letter: Letter }) {
  const [expanded, setExpanded] = useState(false)
  const [, startTransition] = useTransition()
  const preview = letter.body.slice(0, 220)

  return (
    <article className="surface p-7">
      <header className="flex flex-wrap items-baseline justify-between gap-3">
        <div>
          <p className="eyebrow">{LETTER_TARGETS[letter.toWhom]}</p>
          {letter.title && <h3 className="display mt-2 text-xl">{letter.title}</h3>}
        </div>
        <span className="text-xs text-faint">{formatCzechDate(letter.onDate)}</span>
      </header>

      <p className="mt-4 whitespace-pre-line text-[0.9375rem] leading-relaxed text-soft">
        {expanded ? letter.body : preview}
        {!expanded && letter.body.length > 220 && '…'}
      </p>

      <div className="mt-4 flex items-center gap-4 border-t border-[var(--line)] pt-3">
        {letter.body.length > 220 && (
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-[0.8125rem] text-soft hover:underline"
          >
            {expanded ? 'Sbalit' : 'Číst celé'}
          </button>
        )}
        <button
          onClick={() => startTransition(() => void deleteLetterAction(letter.id))}
          className="no-print ml-auto text-[0.8125rem] text-faint transition-colors hover:text-[var(--color-blush-deep)]"
        >
          Smazat
        </button>
      </div>
    </article>
  )
}
