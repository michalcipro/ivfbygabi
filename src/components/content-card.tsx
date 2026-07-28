import Link from 'next/link'
import type { ContentItem } from '@/lib/content/types'
import { KIND_ICONS, KIND_LABELS } from '@/lib/content/types'
import { Hero } from './ui'

/** Karta obsahu. Tři velikosti — pro řady, mřížku a hlavní doporučení. */

export function ContentCard({
  item,
  size = 'md',
  reason,
}: {
  item: ContentItem
  size?: 'sm' | 'md' | 'lg'
  reason?: string
}) {
  const dims = {
    sm: 'w-[15rem]',
    md: 'w-[17.5rem]',
    lg: 'w-full',
  }
  const heroH = { sm: 'h-32', md: 'h-40', lg: 'h-52' }

  return (
    <Link
      href={`/knihovna/${item.id}`}
      className={`group block ${dims[size]} overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]`}
    >
      <Hero token={item.hero} className={`${heroH[size]} flex items-end p-4`}>
        <div className="relative z-10 flex w-full items-center justify-between">
          <span className="rounded-full bg-white/75 px-2.5 py-1 text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-sm">
            {KIND_ICONS[item.kind]} {KIND_LABELS[item.kind]}
          </span>
          <span className="rounded-full bg-black/12 px-2 py-1 text-[0.625rem] font-medium text-ink/80 backdrop-blur-sm">
            {item.minutes} min
          </span>
        </div>
      </Hero>

      <div className="p-4">
        {reason && <p className="eyebrow mb-2">{reason}</p>}
        <h3 className="display text-[1.0625rem] leading-snug transition-colors group-hover:text-[var(--color-taupe-deep)]">
          {item.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-soft">
          {item.excerpt}
        </p>
      </div>
    </Link>
  )
}

/** Široká karta pro hlavní doporučení dne. */
export function FeatureCard({ item, reason }: { item: ContentItem; reason: string }) {
  return (
    <Link
      href={`/knihovna/${item.id}`}
      className="group grid overflow-hidden rounded-[var(--radius-xl)] border border-[var(--line)] bg-[var(--card)] transition-all duration-500 hover:shadow-[var(--shadow-float)] md:grid-cols-[1.1fr_1fr]"
    >
      <Hero token={item.hero} className="min-h-[13rem] md:min-h-[17rem]">
        <div className="absolute inset-0 flex items-end p-6">
          <span className="rounded-full bg-white/78 px-3 py-1.5 text-[0.625rem] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur-sm">
            {KIND_ICONS[item.kind]} {KIND_LABELS[item.kind]} · {item.minutes} min
          </span>
        </div>
      </Hero>
      <div className="flex flex-col justify-center p-7 md:p-9">
        <p className="eyebrow">{reason}</p>
        <h3 className="display mt-3 text-[1.75rem] leading-tight md:text-[2rem]">{item.title}</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-soft">{item.excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-taupe-deep)] transition-transform duration-500 group-hover:translate-x-1">
          Otevřít <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  )
}

/** Kompaktní řádek — pro seznamy a výsledky hledání. */
export function ContentRow({ item }: { item: ContentItem }) {
  return (
    <Link
      href={`/knihovna/${item.id}`}
      className="group flex items-center gap-4 rounded-[var(--radius-md)] border border-transparent p-3 transition-colors hover:border-[var(--line)] hover:bg-[var(--card)]"
    >
      <Hero token={item.hero} className="h-14 w-14 shrink-0 rounded-[var(--radius-sm)]">
        <span className="absolute inset-0 flex items-center justify-center text-lg text-ink/55">
          {KIND_ICONS[item.kind]}
        </span>
      </Hero>
      <div className="min-w-0 flex-1">
        <h4 className="truncate text-[0.9375rem] font-medium transition-colors group-hover:text-[var(--color-taupe-deep)]">
          {item.title}
        </h4>
        <p className="truncate text-[0.8125rem] text-soft">{item.excerpt}</p>
      </div>
      <span className="shrink-0 text-xs text-faint">{item.minutes} min</span>
    </Link>
  )
}
