'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { useFormStatus } from 'react-dom'
import type { FormState } from '@/app/actions/auth'

interface Field {
  name: string
  label: string
  type: string
  autoComplete?: string
  hint?: string
}

export function AuthForm({
  action,
  title,
  subtitle,
  submitLabel,
  fields,
  footer,
}: {
  action: (prev: FormState, formData: FormData) => Promise<FormState>
  title: string
  subtitle: string
  submitLabel: string
  fields: Field[]
  footer: React.ReactNode
}) {
  const [state, formAction] = useActionState(action, {})

  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-14">
      <div className="w-full max-w-[26rem]">
        <Link href="/" className="display mb-12 block text-center text-[1.35rem]">
          IVF by Gabi
        </Link>

        <div className="fade-up surface p-8 shadow-[var(--shadow-lift)]">
          <h1 className="display text-[1.75rem] leading-tight">{title}</h1>
          <p className="mt-2 text-[0.9375rem] text-soft">{subtitle}</p>

          <form action={formAction} className="mt-8 space-y-5">
            {fields.map((f) => (
              <div key={f.name}>
                <label className="label" htmlFor={f.name}>
                  {f.label}
                </label>
                <input
                  id={f.name}
                  name={f.name}
                  type={f.type}
                  autoComplete={f.autoComplete}
                  required
                  className="field"
                />
                {f.hint && <p className="mt-1.5 text-xs text-faint">{f.hint}</p>}
              </div>
            ))}

            {state.error && (
              <p
                role="alert"
                className="rounded-[var(--radius-sm)] bg-[var(--color-blush)]/45 px-3.5 py-2.5 text-[0.8125rem] text-[var(--color-blush-deep)]"
              >
                {state.error}
              </p>
            )}

            <SubmitButton label={submitLabel} />
          </form>
        </div>

        <p className="mt-6 text-center text-[0.875rem] text-soft">{footer}</p>
      </div>
    </div>
  )
}

function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus()
  return (
    <button type="submit" className="btn btn-primary w-full !py-3" disabled={pending}>
      {pending ? 'Chvilku…' : label}
    </button>
  )
}
