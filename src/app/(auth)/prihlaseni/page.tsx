import Link from 'next/link'
import type { Metadata } from 'next'
import { AuthForm } from '../auth-form'
import { loginAction } from '@/app/actions/auth'

export const metadata: Metadata = { title: 'Přihlášení' }

export default function LoginPage() {
  return (
    <AuthForm
      action={loginAction}
      title="Vítejte zpátky"
      subtitle="Vaše cesta pokračuje tam, kde jste ji nechala."
      submitLabel="Přihlásit se"
      fields={[
        { name: 'email', label: 'E-mail', type: 'email', autoComplete: 'email' },
        {
          name: 'password',
          label: 'Heslo',
          type: 'password',
          autoComplete: 'current-password',
        },
      ]}
      footer={
        <>
          Ještě nemáte účet?{' '}
          <Link href="/registrace" className="font-medium underline underline-offset-4">
            Vyzkoušejte 7 dní zdarma
          </Link>
        </>
      }
    />
  )
}
