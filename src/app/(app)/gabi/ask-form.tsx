'use client'

import { useRef } from 'react'
import { useFormStatus } from 'react-dom'

export function AskForm({ action }: { action: (formData: FormData) => Promise<void> }) {
  const formRef = useRef<HTMLFormElement>(null)

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await action(formData)
        formRef.current?.reset()
      }}
      className="sticky bottom-20 z-30 lg:bottom-4"
    >
      <div className="flex items-end gap-2 rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--card)]/95 p-2 shadow-[var(--shadow-lift)] backdrop-blur-xl">
        <textarea
          name="question"
          rows={1}
          required
          placeholder="Zeptejte se na cokoliv…"
          className="max-h-40 min-h-[2.75rem] flex-1 resize-none bg-transparent px-4 py-3 text-[0.9375rem] outline-none placeholder:text-[var(--fg-faint)]"
          onInput={(e) => {
            const el = e.currentTarget
            el.style.height = 'auto'
            el.style.height = `${Math.min(el.scrollHeight, 160)}px`
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault()
              e.currentTarget.form?.requestSubmit()
            }
          }}
        />
        <SendButton />
      </div>
    </form>
  )
}

function SendButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      aria-label="Odeslat"
      className="btn btn-primary !h-11 !w-11 !p-0 shrink-0"
    >
      {pending ? <span className="breathe">✦</span> : <span aria-hidden>↑</span>}
    </button>
  )
}
