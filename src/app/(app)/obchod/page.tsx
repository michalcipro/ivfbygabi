import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { PRODUCTS } from '@/lib/content'
import { ProductCard } from '@/components/product-card'
import { Card, EmptyState, Eyebrow, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Doporučené' }
export const dynamic = 'force-dynamic'

/**
 * Marketplace. Klíčové pravidlo: řadíme podle relevance k fázi uživatelky,
 * nikdy podle toho, kdo zaplatil. A u každé položky říkáme proč.
 */
export default async function MarketplacePage({
  searchParams,
}: {
  searchParams: Promise<{ kind?: string }>
}) {
  const params = await searchParams
  const user = (await currentUser())!
  const profile = getProfile(dataOwnerId(user))
  const state = resolveJourney(profile)

  const onlyServices = params.kind === 'sluzby'
  const onlyProducts = params.kind === 'produkty'

  const scored = PRODUCTS.map((p) => {
    let score = 0
    if (p.phases.includes(state.phase.id)) score += 10
    if (p.phases.some((ph) => state.phase.next.includes(ph))) score += 4

    const mods = new Set(state.modifiers)
    if (p.excludeModifiers?.some((m) => mods.has(m))) score = -100
    if (p.modifiers) {
      const hits = p.modifiers.filter((m) => mods.has(m)).length
      score += hits > 0 ? hits * 6 : -3
    }

    if (p.gestWeeks && state.gestationWeek !== null) {
      const [lo, hi] = p.gestWeeks
      score += state.gestationWeek >= lo && state.gestationWeek <= hi ? 5 : -4
    }
    if (p.babyWeeks) {
      const ageDays = state.usesCorrectedAge ? state.correctedAgeDays : state.babyAgeDays
      if (ageDays !== null && ageDays >= 0) {
        const weeks = Math.floor(ageDays / 7)
        const [lo, hi] = p.babyWeeks
        score += weeks >= lo && weeks <= hi ? 5 : -4
      }
    }

    score += p.rating - 4.5
    return { product: p, score }
  })
    .filter((s) => s.score > -50)
    .filter((s) => (onlyServices ? s.product.kind === 'service' : true))
    .filter((s) => (onlyProducts ? s.product.kind === 'product' : true))
    .sort((a, b) => b.score - a.score)

  const forNow = scored.filter((s) => s.score >= 8).map((s) => s.product)
  const rest = scored.filter((s) => s.score < 8).map((s) => s.product)

  const byCategory = rest.reduce<Record<string, typeof rest>>((acc, p) => {
    ;(acc[p.category] ??= []).push(p)
    return acc
  }, {})

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Ověřené produkty a služby</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">
          Doporučené
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Řazeno podle toho, co se hodí právě ve vaší fázi — ne podle toho, kdo zaplatil
          za reklamu. U každé položky říkáme proč.
        </p>
        <div className="mt-5 flex gap-2">
          <FilterChip href="/obchod" active={!onlyServices && !onlyProducts}>
            Vše
          </FilterChip>
          <FilterChip href="/obchod?kind=produkty" active={onlyProducts}>
            Produkty
          </FilterChip>
          <FilterChip href="/obchod?kind=sluzby" active={onlyServices}>
            Služby
          </FilterChip>
        </div>
      </header>

      {forNow.length > 0 && (
        <section>
          <SectionTitle
            title="Právě teď se vám může hodit"
            subtitle={state.dayLabel.replace(/^Dnes (je|jste) /, 'Protože jste ')}
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {forNow.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {Object.entries(byCategory).length === 0 && forNow.length === 0 && (
        <EmptyState
          icon="◇"
          title="Nic tu pro vás zatím nemáme"
          body="Marketplace se rozšiřuje spolu s knihovnou. Zkuste to za pár dní."
        />
      )}

      {Object.entries(byCategory).map(([category, items]) => (
        <section key={category}>
          <SectionTitle title={category} subtitle={`${items.length} položek`} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ))}

      <Card muted className="p-6 text-[0.8125rem] leading-relaxed text-soft">
        Ceny jsou orientační a slouží k odhadu rozpočtu. Doplňky stravy ani zdravotnické
        pomůcky nenahrazují léčbu — o tom, co je pro vás vhodné, rozhoduje váš lékař.
      </Card>
    </div>
  )
}

function FilterChip({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className={`rounded-full border px-4 py-1.5 text-[0.8125rem] transition-colors ${
        active
          ? 'border-transparent bg-[var(--color-champagne)] text-ink'
          : 'border-[var(--line)] text-soft hover:border-[var(--color-sand)]'
      }`}
    >
      {children}
    </Link>
  )
}
