import type { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'IVF by Gabi — vaše cesta za dítětem',
    template: '%s · IVF by Gabi',
  },
  description:
    'Prémiová česká platforma pro ženy na cestě za dítětem. Personalizovaný obsah na každý den, AI průvodkyně Gabi, deník, komunita a průvodce od prvního rozhodnutí až po první rok dítěte.',
  applicationName: 'IVF by Gabi',
  keywords: ['IVF', 'neplodnost', 'těhotenství', 'embryotransfer', 'šestinedělí', 'nedonošené dítě'],
  authors: [{ name: 'IVF by Gabi' }],
  openGraph: {
    title: 'IVF by Gabi',
    description: 'Na své cestě nikdy nejste sama.',
    type: 'website',
    locale: 'cs_CZ',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbf8f4' },
    { media: '(prefers-color-scheme: dark)', color: '#17140f' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const theme = (await cookies()).get('gabi_theme')?.value ?? 'light'

  return (
    <html lang="cs" className={theme === 'dark' ? 'dark' : undefined} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
