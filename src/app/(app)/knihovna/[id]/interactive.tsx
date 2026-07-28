'use client'

import { useState, useTransition } from 'react'
import type { ChecklistEntry, QuizQuestion } from '@/lib/content/types'
import { toggleChecklistAction, toggleSavedAction } from '@/app/actions/journal'
import { ProgressRing } from '@/components/ui'

export function SaveButton({
  contentId,
  initialSaved,
}: {
  contentId: string
  initialSaved: boolean
}) {
  const [saved, setSaved] = useState(initialSaved)
  const [, startTransition] = useTransition()

  return (
    <button
      onClick={() => {
        setSaved((v) => !v)
        startTransition(() => {
          void toggleSavedAction(contentId)
        })
      }}
      aria-pressed={saved}
      className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[0.8125rem] transition-colors ${
        saved
          ? 'border-transparent bg-[var(--color-blush)] text-[var(--color-blush-deep)]'
          : 'border-[var(--line)] text-soft hover:border-[var(--color-sand)]'
      }`}
    >
      <span aria-hidden>{saved ? '♥' : '♡'}</span>
      {saved ? 'Uloženo' : 'Uložit'}
    </button>
  )
}

export function ChecklistBody({
  contentId,
  entries,
  initial,
}: {
  contentId: string
  entries: ChecklistEntry[]
  initial: Record<string, boolean>
}) {
  const [checked, setChecked] = useState(initial)
  const [, startTransition] = useTransition()

  const toggle = (entryId: string) => {
    const next = !checked[entryId]
    setChecked((prev) => ({ ...prev, [entryId]: next }))
    startTransition(() => {
      void toggleChecklistAction(contentId, entryId, next)
    })
  }

  const required = entries.filter((e) => !e.optional)
  const doneCount = required.filter((e) => checked[e.id]).length
  const progress = required.length ? doneCount / required.length : 0

  const groups = entries.reduce<Record<string, ChecklistEntry[]>>((acc, e) => {
    const key = e.group ?? ''
    ;(acc[key] ??= []).push(e)
    return acc
  }, {})

  return (
    <section className="surface p-7">
      <div className="flex items-center justify-between gap-5">
        <div>
          <span className="eyebrow">Váš postup</span>
          <p className="display mt-2 text-2xl">
            {doneCount} z {required.length} hotovo
          </p>
        </div>
        <ProgressRing value={progress} size={64} label={`${Math.round(progress * 100)}%`} />
      </div>

      <div className="mt-8 space-y-7">
        {Object.entries(groups).map(([groupName, items]) => (
          <div key={groupName}>
            {groupName && <p className="eyebrow mb-3">{groupName}</p>}
            <ul className="space-y-1">
              {items.map((entry) => (
                <li key={entry.id}>
                  <button
                    onClick={() => toggle(entry.id)}
                    aria-pressed={Boolean(checked[entry.id])}
                    className="flex w-full items-start gap-3.5 rounded-[var(--radius-sm)] px-2 py-2.5 text-left transition-colors hover:bg-[var(--card-muted)]"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-[0.625rem] transition-all duration-300 ${
                        checked[entry.id]
                          ? 'border-[var(--color-sage-deep)] bg-[var(--color-sage)] text-white'
                          : 'border-[var(--color-sand)] text-transparent'
                      }`}
                    >
                      ✓
                    </span>
                    <span className="min-w-0">
                      <span
                        className={`block text-[0.9375rem] leading-relaxed ${
                          checked[entry.id] ? 'text-faint line-through' : ''
                        }`}
                      >
                        {entry.text}
                        {entry.optional && (
                          <span className="ml-2 text-xs text-faint">(nepovinné)</span>
                        )}
                      </span>
                      {entry.hint && (
                        <span className="mt-0.5 block text-[0.8125rem] text-faint">
                          {entry.hint}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export function QuizBody({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<number, number>>({})

  return (
    <section className="surface p-7">
      <span className="eyebrow">Ověřte si to</span>
      <div className="mt-6 space-y-8">
        {questions.map((q, qi) => {
          const picked = answers[qi]
          const answered = picked !== undefined
          return (
            <div key={qi}>
              <p className="text-[1.0625rem] font-medium leading-snug">
                {qi + 1}. {q.q}
              </p>
              <div className="mt-3.5 space-y-2">
                {q.options.map((opt, oi) => {
                  const isCorrect = oi === q.correct
                  const isPicked = picked === oi
                  return (
                    <button
                      key={oi}
                      disabled={answered}
                      onClick={() => setAnswers((prev) => ({ ...prev, [qi]: oi }))}
                      className={`block w-full rounded-[var(--radius-sm)] border px-4 py-3 text-left text-[0.9375rem] transition-colors ${
                        !answered
                          ? 'border-[var(--line)] hover:border-[var(--color-sand)] hover:bg-[var(--card-muted)]'
                          : isCorrect
                            ? 'border-[var(--color-sage-deep)] bg-[var(--color-sage)]/25'
                            : isPicked
                              ? 'border-[var(--color-blush-deep)] bg-[var(--color-blush)]/25'
                              : 'border-[var(--line)] opacity-55'
                      }`}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              {answered && (
                <p className="mt-3 text-[0.875rem] leading-relaxed text-soft">{q.explain}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
