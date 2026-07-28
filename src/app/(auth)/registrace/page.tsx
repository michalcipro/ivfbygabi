import Link from 'next/link'
import type { Metadata } from 'next'
import { AuthForm } from '../auth-form'
import { registerAction } from '@/app/actions/auth'

export const metadata: Metadata = { title: 'Registrace' }

export default function RegisterPage() {
  return (
    <AuthForm
      action={registerAction}
      title="Začněme spolu"
      subtitle="Sedm dní zdarma. Pak se rozhodnete, jestli chcete pokračovat."
      submitLabel="Vytvořit účet"
      fields={[
        {
          name: 'displayName',
          label: 'Jak vám máme říkat?',
          type: 'text',
          autoComplete: 'given-name',
          hint: 'V komunitě můžete zůstat úplně anonymní.',
        },
        { name: 'email', label: 'E-mail', type: 'email', autoComplete: 'email' },
        {
          name: 'password',
          label: 'Heslo',
          type: 'password',
          autoComplete: 'new-password',
          hint: 'Alespoň 8 znaků.',
        },
      ]}
      footer={
        <>
          Už účet máte?{' '}
          <Link href="/prihlaseni" className="font-medium underline underline-offset-4">
            Přihlaste se
          </Link>
        </>
      }
    />
  )
}
