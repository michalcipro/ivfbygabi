'use client'

import { useState, useTransition } from 'react'
import type { CalendarEvent, Medication } from '@/lib/db/repo-health'
import { EVENT_KINDS } from '@/lib/db/repo-health'
import {
  addEventAction,
  addMedicationAction,
  deleteEventAction,
  deleteMedicationAction,
  logMedicationAction,
  toggleEventAction,
} from '@/app/actions/health'
import { formatCzechDate, czDays } from '@/lib/domain/dates'

function todayIso(): string {
  const d = new Date()
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export function EventRow({ event, today }: { event: CalendarEvent; today: string }) {
  const [, startTransition] = useTransition()
  const meta = EVENT_KINDS[event.kind] ?? EVENT_KINDS.vlastni
  const inDays = Math.round((Date.parse(event.onDate) - Date.parse(today)) / 86_400_000)

  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <button
        onClick={() => startTransition(() => void toggleEventAction(event.id))}
        aria-label={event.done ? 'Označit jako nesplněné' : 'Označit jako splněné'}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
          event.done
            ? 'border-[var(--color-sage-deep)] bg-[var(--color-sage)] text-white'
            : 'border-[var(--color-sand)] text-transparent hover:border-[var(--color-taupe)]'
        }`}
      >
        ✓
      </button>

      <div className="min-w-0 flex-1">
        <p className={`text-[0.9375rem] ${event.done ? 'text-faint line-through' : ''}`}>
          <span className="mr-2 text-[var(--color-taupe)]">{meta.icon}</span>
          {event.title}
        </p>
        <p className="mt-0.5 text-xs text-faint">
          {formatCzechDate(event.onDate)}
          {event.atTime && ` · ${event.atTime}`}
          {event.location && ` · ${event.location}`}
          {event.auto && ' · automaticky'}
        </p>
        {event.note && <p className="mt-1 text-[0.8125rem] text-soft">{event.note}</p>}
      </div>

      <span className="shrink-0 text-xs text-faint">
        {inDays === 0 ? 'dnes' : inDays === 1 ? 'zítra' : inDays > 0 ? `za ${czDays(inDays)}` : ''}
      </span>

      <button
        onClick={() => startTransition(() => void deleteEventAction(event.id))}
        aria-label="Smazat"
        className="shrink-0 px-1 text-faint transition-colors hover:text-[var(--color-blush-deep)]"
      >
        ×
      </button>
    </div>
  )
}

export function MedicationRow({
  medication,
  date,
  taken,
}: {
  medication: Medication
  date: string
  taken: boolean
}) {
  const [isTaken, setTaken] = useState(taken)
  const [, startTransition] = useTransition()

  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <button
        disabled={isTaken}
        onClick={() => {
          setTaken(true)
          startTransition(() => void logMedicationAction(medication.id, date))
        }}
        aria-label={isTaken ? 'Dnes zaznamenáno' : 'Označit jako vzaté'}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
          isTaken
            ? 'border-[var(--color-sage-deep)] bg-[var(--color-sage)] text-white'
            : 'border-[var(--color-sand)] text-transparent hover:border-[var(--color-taupe)]'
        }`}
      >
        ✓
      </button>

      <div className="min-w-0 flex-1">
        <p className={`text-[0.9375rem] ${isTaken ? 'text-faint line-through' : ''}`}>
          {medication.name}
          {medication.dose && <span className="text-soft"> · {medication.dose}</span>}
        </p>
        <p className="mt-0.5 text-xs text-faint">
          {[medication.route, medication.timeOfDay].filter(Boolean).join(' · ')}
        </p>
      </div>

      <button
        onClick={() => startTransition(() => void deleteMedicationAction(medication.id))}
        aria-label="Smazat"
        className="shrink-0 px-1 text-faint transition-colors hover:text-[var(--color-blush-deep)]"
      >
        ×
      </button>
    </div>
  )
}

export function AddEventForm({
  kinds,
}: {
  kinds: { key: string; label: string; icon: string }[]
}) {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn btn-secondary">
        + Přidat událost
      </button>
    )
  }

  return (
    <form action={addEventAction} className="surface space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="label" htmlFor="title">
            Co to je
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            placeholder="Např. Kontrola na klinice"
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="kind">
            Typ
          </label>
          <select id="kind" name="kind" className="field" defaultValue="kontrola">
            {kinds.map((k) => (
              <option key={k.key} value={k.key}>
                {k.icon} {k.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label" htmlFor="onDate">
            Datum
          </label>
          <input
            id="onDate"
            name="onDate"
            type="date"
            required
            defaultValue={todayIso()}
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="atTime">
            Čas
          </label>
          <input id="atTime" name="atTime" type="time" className="field" />
        </div>
        <div>
          <label className="label" htmlFor="location">
            Kde
          </label>
          <input id="location" name="location" type="text" className="field" />
        </div>
        <div className="sm:col-span-2">
          <label className="label" htmlFor="note">
            Poznámka
          </label>
          <input id="note" name="note" type="text" className="field" />
        </div>
      </div>

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Přidat
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Zrušit
        </button>
      </div>
    </form>
  )
}

export function AddMedicationForm() {
  const [open, setOpen] = useState(false)

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} className="btn btn-secondary">
        + Přidat lék
      </button>
    )
  }

  return (
    <form action={addMedicationAction} className="surface space-y-5 p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="label" htmlFor="name">
            Název
          </label>
          <input id="name" name="name" type="text" required className="field" />
        </div>
        <div>
          <label className="label" htmlFor="dose">
            Dávka
          </label>
          <input
            id="dose"
            name="dose"
            type="text"
            placeholder="Podle předpisu lékaře"
            className="field"
          />
        </div>
        <div>
          <label className="label" htmlFor="route">
            Forma
          </label>
          <select id="route" name="route" className="field" defaultValue="tableta">
            <option value="injekce">Injekce</option>
            <option value="tableta">Tableta</option>
            <option value="vaginálně">Vaginálně</option>
            <option value="náplast">Náplast</option>
            <option value="jiné">Jiné</option>
          </select>
        </div>
        <div>
          <label className="label" htmlFor="timeOfDay">
            Kdy
          </label>
          <input id="timeOfDay" name="timeOfDay" type="time" className="field" />
        </div>
        <div>
          <label className="label" htmlFor="startOn">
            Od
          </label>
          <input id="startOn" name="startOn" type="date" className="field" />
        </div>
        <div>
          <label className="label" htmlFor="endOn">
            Do
          </label>
          <input id="endOn" name="endOn" type="date" className="field" />
        </div>
      </div>

      <p className="text-xs leading-relaxed text-faint">
        Dávkování i délku užívání určuje výhradně váš lékař. Tady si to jen evidujete,
        abyste na nic nezapomněla.
      </p>

      <div className="flex gap-2">
        <button type="submit" className="btn btn-primary">
          Přidat
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Zrušit
        </button>
      </div>
    </form>
  )
}
