import type { Product } from '@/lib/content/types'
import { Hero } from './ui'

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--card)]">
      <Hero token={product.hero} className="h-24">
        <span className="absolute right-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[0.625rem] font-medium text-ink backdrop-blur-sm">
          {product.kind === 'service' ? 'Služba' : product.category}
        </span>
      </Hero>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-[0.9375rem] font-medium leading-snug">{product.name}</h3>

        <p className="mt-2.5 flex-1 text-[0.8125rem] leading-relaxed text-soft">
          <span className="font-semibold text-[var(--fg)]">Proč právě teď: </span>
          {product.whyNow}
        </p>

        <div className="mt-4 flex items-end justify-between gap-3 border-t border-[var(--line)] pt-3.5">
          <div>
            <p className="text-[0.9375rem] font-medium">
              {product.priceFrom ? `od ${product.priceFrom} Kč` : 'individuálně'}
            </p>
            <p className="mt-0.5 text-[0.6875rem] text-faint">{product.vendor}</p>
          </div>
          <div className="text-right">
            <p className="text-[0.8125rem] text-[var(--color-gold)]">
              {'★'.repeat(Math.round(product.rating))}
            </p>
            <p className="text-[0.6875rem] text-faint">
              {product.rating.toFixed(1)} · {product.reviews} hodnocení
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
