'use client'

import { useState, useTransition } from 'react'
import { saveMoodAction, saveReflectionAction, toggleTaskAction } from '@/app/actions/journal'

/** Malé interaktivní kousky domovské stránky. Zbytek je server-rendered. */

export function DailyTask({
  date,
  task,
  initialDone,
}: {
  date: string
  task: string
  initialDone: boolean
}) {
  const [done, setDone] = useState(initialDone)
  const [, startTransition] = useTransition()

  const toggle = () => {
    const next = !done
    setDone(next)
    startTransition(() => {
      void toggleTaskAction(date, next)
    })
  }

  return (
    <button
      onClick={toggle}
      className={`surface flex w-full items-start gap-4 p-6 text-left transition-all duration-500 hover:shadow-[var(--shadow-veil)] ${
        done ? 'bg-[var(--card-muted)]' : ''
      }`}
      aria-pressed={done}
    >
      <span
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-400 ${
          done
            ? 'border-[var(--color-sage-deep)] bg-[var(--color-sage)] text-white'
            : 'border-[var(--color-sand)] text-transparent'
        }`}
      >
        ✓
      </span>
      <span className="min-w-0">
        <span className="eyebrow block">Dnešní úkol</span>
        <span
          className={`mt-2 block text-[0.9375rem] leading-relaxed ${done ? 'text-faint line-through' : ''}`}
        >
          {task}
        </span>
      </span>
    </button>
  )
}

const MOODS = [
  { value: 1, face: '☁', label: 'Těžký den' },
  { value: 2, face: '◔', label: 'Nic moc' },
  { value: 3, face: '◑', label: 'Jde to' },
  { value: 4, face: '◕', label: 'Dobrý' },
  { value: 5, face: '☀', label: 'Skvělý' },
]

export function QuickMood({ date, initialMood }: { date: string; initialMood: number | null }) {
  const [mood, setMood] = useState(initialMood)
  const [, startTransition] = useTransition()

  const pick = (value: number) => {
    setMood(value)
    startTransition(() => {
      void saveMoodAction(date, value)
    })
  }

  return (
    <div className="surface p-6">
      <span className="eyebrow">Jak vám dnes je?</span>
      <div className="mt-4 flex items-center justify-between gap-2">
        {MOODS.map((m) => (
          <button
            key={m.value}
            onClick={() => pick(m.value)}
            title={m.label}
            aria-label={m.label}
            aria-pressed={mood === m.value}
            className={`flex flex-1 flex-col items-center gap-1.5 rounded-[var(--radius-sm)] py-3 transition-all duration-400 ${
              mood === m.value
                ? 'bg-[var(--color-champagne)]/50 text-[var(--fg)]'
                : 'text-faint hover:bg-[var(--card-muted)]'
            }`}
          >
            <span className="text-lg">{m.face}</span>
            <span className="text-[0.625rem]">{m.label}</span>
          </button>
        ))}
      </div>
      {mood !== null && (
        <p className="mt-3 text-xs text-faint">
          Zapsáno. Vývoj uvidíte v <a href="/denik" className="underline underline-offset-2">deníku</a>.
        </p>
      )}
    </div>
  )
}

export function EveningReflection({
  date,
  question,
  initial,
}: {
  date: string
  question: string
  initial: string
}) {
  const [text, setText] = useState(initial)
  const [saved, setSaved] = useState(false)
  const [pending, startTransition] = useTransition()

  const save = () => {
    startTransition(async () => {
      await saveReflectionAction(date, text)
      setSaved(true)
      setTimeout(() => setSaved(false), 2400)
    })
  }

  return (
    <div className="surface p-7">
      <span className="eyebrow">Večerní reflexe</span>
      <p className="display mt-3 text-xl leading-snug">{question}</p>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value)
          setSaved(false)
        }}
        rows={4}
        placeholder="Pár vět jen pro vás. Nikdo jiný to neuvidí."
        className="field mt-4 resize-none"
      />
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={save}
          disabled={pending || text.trim().length === 0}
          className="btn btn-secondary !py-2 !text-[0.8125rem]"
        >
          {pending ? 'Ukládám…' : 'Uložit'}
        </button>
        {saved && <span className="text-[0.8125rem] text-[var(--color-sage-deep)]">Uloženo ✓</span>}
      </div>
    </div>
  )
}
