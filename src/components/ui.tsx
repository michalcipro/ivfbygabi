import type { ReactNode } from 'react'
import Link from 'next/link'
import type { HeroToken } from '@/lib/content/types'

/** Sada základních prvků. Všechno ostatní se skládá z těchto dílů. */

export const HERO_GRADIENTS: Record<HeroToken, string> = {
  champagne: 'linear-gradient(135deg, #f2e3cd 0%, #e2cbaa 55%, #cdb08c 100%)',
  taupe: 'linear-gradient(135deg, #cbbdae 0%, #a3907c 60%, #7b6a59 100%)',
  blush: 'linear-gradient(135deg, #f3e2dd 0%, #e3cec7 55%, #c9a89f 100%)',
  sage: 'linear-gradient(135deg, #e2e8dd 0%, #bfcabb 60%, #93a28c 100%)',
  sky: 'linear-gradient(135deg, #dfe6ec 0%, #c3cdd6 60%, #94a4b0 100%)',
  linen: 'linear-gradient(135deg, #faf5ee 0%, #efe5d6 60%, #ded0bb 100%)',
  sand: 'linear-gradient(135deg, #ece0d1 0%, #ddcdb8 60%, #c2ac92 100%)',
  dusk: 'linear-gradient(145deg, #b8a698 0%, #8d7a6c 45%, #5d4f45 100%)',
  dawn: 'linear-gradient(135deg, #fdf1e5 0%, #f0d9c6 45%, #dcb9a0 100%)',
  pearl: 'linear-gradient(135deg, #ffffff 0%, #f3efe8 55%, #e3dcd0 100%)',
}

export function Hero({
  token,
  className = '',
  children,
}: {
  token: HeroToken
  className?: string
  children?: ReactNode
}) {
  return (
    <div
      className={`relative overflow-hidden grain ${className}`}
      style={{ background: HERO_GRADIENTS[token] }}
    >
      {children}
    </div>
  )
}

export function Card({
  children,
  className = '',
  muted = false,
}: {
  children: ReactNode
  className?: string
  muted?: boolean
}) {
  return (
    <div className={`${muted ? 'surface-muted' : 'surface'} ${className}`}>{children}</div>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>
}

export function Badge({
  children,
  tone = 'neutral',
}: {
  children: ReactNode
  tone?: 'neutral' | 'accent' | 'soft'
}) {
  const tones = {
    neutral: 'bg-[var(--card-muted)] text-[var(--fg-soft)]',
    accent: 'bg-champagne text-ink',
    soft: 'bg-transparent text-[var(--fg-faint)] border border-[var(--line)]',
  }
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.6875rem] font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  )
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string
  subtitle?: string
  action?: ReactNode
}) {
  return (
    <div className="mb-5 flex items-end justify-between gap-4">
      <div>
        <h2 className="display text-2xl md:text-[1.75rem]">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-soft">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

/** Prstenec postupu — používá se pro fáze, checklisty i denní úkol. */
export function ProgressRing({
  value,
  size = 56,
  stroke = 3,
  label,
}: {
  value: number
  size?: number
  stroke?: number
  label?: string
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const clamped = Math.max(0, Math.min(1, value))
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--line)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-taupe)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - clamped)}
          style={{ transition: 'stroke-dashoffset 1s var(--ease-calm)' }}
        />
      </svg>
      {label && (
        <span className="absolute text-[0.6875rem] font-medium text-soft">{label}</span>
      )}
    </div>
  )
}

export function Divider({ className = '' }: { className?: string }) {
  return <hr className={`border-t border-[var(--line)] ${className}`} />
}

export function EmptyState({
  title,
  body,
  action,
  icon = '❧',
}: {
  title: string
  body: string
  action?: ReactNode
  icon?: string
}) {
  return (
    <div className="surface-muted flex flex-col items-center px-8 py-14 text-center">
      <span className="mb-4 text-3xl text-[var(--color-sand)]">{icon}</span>
      <h3 className="display text-xl">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-soft">{body}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

export function Stat({
  value,
  label,
  hint,
}: {
  value: ReactNode
  label: string
  hint?: string
}) {
  return (
    <div>
      <p className="display text-[2rem] leading-none">{value}</p>
      <p className="mt-2 text-[0.8125rem] text-soft">{label}</p>
      {hint && <p className="mt-0.5 text-xs text-faint">{hint}</p>}
    </div>
  )
}

export function LinkButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}) {
  return (
    <Link href={href} className={`btn btn-${variant} ${className}`}>
      {children}
    </Link>
  )
}

/**
 * Velmi lehký markdown. Záměrně nepoužíváme knihovnu — obsah píšeme my,
 * takže si vystačíme s podmnožinou a nemusíme řešit sanitizaci cizího HTML.
 */
export function Markdown({ text, className = '' }: { text: string; className?: string }) {
  const blocks = parseMarkdown(text)
  return (
    <div className={`prose-gabi ${className}`}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h2':
            return <h2 key={i}>{inline(block.text)}</h2>
          case 'h3':
            return <h3 key={i}>{inline(block.text)}</h3>
          case 'quote':
            return <blockquote key={i}>{inline(block.text)}</blockquote>
          case 'ul':
            return (
              <ul key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i}>
                {block.items.map((it, j) => (
                  <li key={j}>{inline(it)}</li>
                ))}
              </ol>
            )
          default:
            return <p key={i}>{inline(block.text)}</p>
        }
      })}
    </div>
  )
}

type Block =
  | { type: 'p' | 'h2' | 'h3' | 'quote'; text: string }
  | { type: 'ul' | 'ol'; items: string[] }

function parseMarkdown(text: string): Block[] {
  const lines = text.replace(/\r/g, '').split('\n')
  const blocks: Block[] = []
  let paragraph: string[] = []
  let list: { type: 'ul' | 'ol'; items: string[] } | null = null

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ') })
      paragraph = []
    }
  }
  const flushList = () => {
    if (list) {
      blocks.push(list)
      list = null
    }
  }

  for (const raw of lines) {
    const line = raw.trimEnd()

    if (!line.trim()) {
      flushParagraph()
      flushList()
      continue
    }

    const h3 = line.match(/^###\s+(.*)$/)
    if (h3) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'h3', text: h3[1] })
      continue
    }

    const h2 = line.match(/^##\s+(.*)$/)
    if (h2) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'h2', text: h2[1] })
      continue
    }

    const quote = line.match(/^>\s?(.*)$/)
    if (quote) {
      flushParagraph()
      flushList()
      blocks.push({ type: 'quote', text: quote[1] })
      continue
    }

    const bullet = line.match(/^[-*]\s+(.*)$/)
    if (bullet) {
      flushParagraph()
      if (!list || list.type !== 'ul') {
        flushList()
        list = { type: 'ul', items: [] }
      }
      list.items.push(bullet[1])
      continue
    }

    const numbered = line.match(/^\d+[.)]\s+(.*)$/)
    if (numbered) {
      flushParagraph()
      if (!list || list.type !== 'ol') {
        flushList()
        list = { type: 'ol', items: [] }
      }
      list.items.push(numbered[1])
      continue
    }

    flushList()
    paragraph.push(line.trim())
  }

  flushParagraph()
  flushList()
  return blocks
}

/** Zvýraznění **tučně** a _kurzívou_. */
function inline(text: string): ReactNode {
  const parts: ReactNode[] = []
  const regex = /(\*\*[^*]+\*\*|_[^_]+_)/g
  let last = 0
  let match: RegExpExecArray | null
  let key = 0

  while ((match = regex.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const token = match[0]
    if (token.startsWith('**')) {
      parts.push(<strong key={key++}>{token.slice(2, -2)}</strong>)
    } else {
      parts.push(<em key={key++}>{token.slice(1, -1)}</em>)
    }
    last = match.index + token.length
  }

  if (last < text.length) parts.push(text.slice(last))
  return parts.length ? parts : text
}
