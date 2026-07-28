'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

/**
 * Navigace aplikace. Na mobilu spodní lišta (palec), na desktopu boční panel.
 * Vždy jen to podstatné — zbytek je v „Více“.
 */

const PRIMARY = [
  { href: '/dnes', label: 'Dnes', icon: '☀' },
  { href: '/objevit', label: 'Objevit', icon: '❋' },
  { href: '/gabi', label: 'Gabi', icon: '✦' },
  { href: '/denik', label: 'Deník', icon: '✎' },
  { href: '/komunita', label: 'Komunita', icon: '◍' },
]

const SECONDARY = [
  { href: '/pruvodce', label: 'Průvodce', icon: '❖' },
  { href: '/knihovna', label: 'Knihovna', icon: '❧' },
  { href: '/kalendar', label: 'Kalendář', icon: '◈' },
  { href: '/checklisty', label: 'Checklisty', icon: '✓' },
  { href: '/zdravi', label: 'Zdraví', icon: '◉' },
  { href: '/dokumenty', label: 'Dokumenty', icon: '§' },
  { href: '/pribeh', label: 'Můj příběh', icon: '❦' },
  { href: '/obchod', label: 'Doporučené', icon: '◇' },
  { href: '/partner', label: 'Partner', icon: '♡' },
  { href: '/nastaveni', label: 'Nastavení', icon: '⚙' },
]

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(href + '/')
}

export function Sidebar({ displayName, phase }: { displayName: string; phase: string }) {
  const pathname = usePathname()

  return (
    <aside className="no-print sticky top-0 hidden h-screen w-[16.5rem] shrink-0 flex-col border-r border-[var(--line)] bg-[var(--card)] px-5 py-7 lg:flex">
      <Link href="/dnes" className="mb-9 block px-2">
        <span className="display block text-[1.35rem] leading-none">IVF by Gabi</span>
        <span className="eyebrow mt-1.5 block">Premium</span>
      </Link>

      <nav className="flex-1 space-y-0.5 overflow-y-auto no-scrollbar">
        {PRIMARY.map((item) => (
          <NavLink key={item.href} {...item} active={isActive(pathname, item.href)} />
        ))}

        <div className="!mt-6 mb-2 px-3">
          <p className="eyebrow">Vaše cesta</p>
        </div>

        {SECONDARY.map((item) => (
          <NavLink key={item.href} {...item} active={isActive(pathname, item.href)} />
        ))}
      </nav>

      <div className="mt-5 rounded-[var(--radius-md)] bg-[var(--card-muted)] px-3.5 py-3">
        <p className="truncate text-[0.8125rem] font-medium">{displayName || 'Vítejte'}</p>
        <p className="mt-0.5 truncate text-xs text-faint">{phase}</p>
      </div>
    </aside>
  )
}

function NavLink({
  href,
  label,
  icon,
  active,
}: {
  href: string
  label: string
  icon: string
  active: boolean
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-[var(--radius-sm)] px-3 py-2.5 text-[0.9375rem] transition-all duration-300 ${
        active
          ? 'bg-[var(--card-muted)] font-medium text-[var(--fg)]'
          : 'text-soft hover:bg-[var(--card-muted)] hover:text-[var(--fg)]'
      }`}
    >
      <span className={`w-4 text-center text-[0.9375rem] ${active ? 'text-[var(--color-taupe)]' : 'text-faint'}`}>
        {icon}
      </span>
      {label}
    </Link>
  )
}

export function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/25 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            className="fade-up absolute inset-x-0 bottom-0 rounded-t-[var(--radius-2xl)] bg-[var(--card)] px-5 pb-28 pt-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-[var(--line)]" />
            <div className="grid grid-cols-3 gap-2">
              {SECONDARY.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-2 rounded-[var(--radius-md)] bg-[var(--card-muted)] px-2 py-4 text-center"
                >
                  <span className="text-lg text-[var(--color-taupe)]">{item.icon}</span>
                  <span className="text-xs">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <nav className="no-print fixed inset-x-0 bottom-0 z-50 flex border-t border-[var(--line)] bg-[var(--card)]/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-xl lg:hidden">
        {PRIMARY.map((item) => {
          const active = isActive(pathname, item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-1 flex-col items-center gap-1 py-2.5"
            >
              <span
                className={`text-base transition-colors ${active ? 'text-[var(--color-taupe-deep)]' : 'text-faint'}`}
              >
                {item.icon}
              </span>
              <span
                className={`text-[0.625rem] transition-colors ${active ? 'font-medium text-[var(--fg)]' : 'text-faint'}`}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex flex-1 flex-col items-center gap-1 py-2.5"
          aria-label="Další sekce"
        >
          <span className={`text-base ${open ? 'text-[var(--color-taupe-deep)]' : 'text-faint'}`}>
            ⋯
          </span>
          <span className="text-[0.625rem] text-faint">Více</span>
        </button>
      </nav>
    </>
  )
}

export function ThemeToggle({ initial }: { initial: string }) {
  const [theme, setTheme] = useState(initial)

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.classList.toggle('dark', next === 'dark')
    document.cookie = `gabi_theme=${next}; path=/; max-age=31536000; samesite=lax`
  }

  return (
    <button
      onClick={toggle}
      className="btn btn-ghost !px-3 !py-2 text-base"
      aria-label={theme === 'dark' ? 'Přepnout na světlý režim' : 'Přepnout na tmavý režim'}
      title={theme === 'dark' ? 'Světlý režim' : 'Tmavý režim'}
    >
      {theme === 'dark' ? '☾' : '☀'}
    </button>
  )
}
