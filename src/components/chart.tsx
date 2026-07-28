import { formatCzechDateShort } from '@/lib/domain/dates'

/**
 * Grafy kreslíme ručně v SVG. Žádná knihovna — potřebujeme jen dva tvary
 * a tímhle způsobem si udržíme kontrolu nad typografií i barvami.
 *
 * Paleta je záměrně tlumená: data o vlastním těle nemají křičet.
 */

export interface Point {
  date: string
  value: number
  label?: string
}

const SERIES_COLORS = [
  'var(--color-taupe)',
  'var(--color-sage-deep)',
  'var(--color-sky-deep)',
  'var(--color-blush-deep)',
]

export function LineChart({
  points,
  unit,
  height = 190,
  color = SERIES_COLORS[0],
  reference,
  ariaLabel,
}: {
  points: Point[]
  unit?: string | null
  height?: number
  color?: string
  /** Orientační pásmo — vykreslí se jako jemný pruh na pozadí. */
  reference?: { low?: number; high?: number }
  ariaLabel?: string
}) {
  if (points.length === 0) return null

  const sorted = [...points].sort((a, b) => a.date.localeCompare(b.date))
  const values = sorted.map((p) => p.value)

  const candidates = [...values]
  if (reference?.low !== undefined) candidates.push(reference.low)
  if (reference?.high !== undefined) candidates.push(reference.high)

  const rawMin = Math.min(...candidates)
  const rawMax = Math.max(...candidates)
  const pad = (rawMax - rawMin) * 0.15 || Math.abs(rawMax * 0.15) || 1
  const min = rawMin - pad
  const max = rawMax + pad
  const span = max - min || 1

  const W = 640
  const H = height
  const padX = 12
  const padY = 16

  const x = (i: number) =>
    sorted.length === 1 ? W / 2 : padX + (i / (sorted.length - 1)) * (W - padX * 2)
  const y = (v: number) => padY + (1 - (v - min) / span) * (H - padY * 2)

  const line = sorted.map((p, i) => `${i === 0 ? 'M' : 'L'} ${x(i).toFixed(1)} ${y(p.value).toFixed(1)}`).join(' ')
  const area = `${line} L ${x(sorted.length - 1).toFixed(1)} ${H - padY} L ${x(0).toFixed(1)} ${H - padY} Z`

  const gradientId = `g-${Math.abs(hash(sorted.map((p) => p.date + p.value).join('')))}`

  const last = sorted[sorted.length - 1]
  const first = sorted[0]
  const delta = sorted.length > 1 ? last.value - first.value : null

  return (
    <figure>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full"
        style={{ height }}
        role="img"
        aria-label={
          ariaLabel ??
          `Vývoj hodnot od ${formatCzechDateShort(first.date)} do ${formatCzechDateShort(last.date)}`
        }
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.18" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>

        {reference?.low !== undefined && reference?.high !== undefined && (
          <rect
            x={0}
            y={y(reference.high)}
            width={W}
            height={Math.max(0, y(reference.low) - y(reference.high))}
            fill="var(--color-sage)"
            opacity="0.14"
          />
        )}

        {[0, 0.5, 1].map((t) => (
          <line
            key={t}
            x1={0}
            x2={W}
            y1={padY + t * (H - padY * 2)}
            y2={padY + t * (H - padY * 2)}
            stroke="var(--line)"
            strokeWidth="1"
          />
        ))}

        {sorted.length > 1 && <path d={area} fill={`url(#${gradientId})`} />}
        {sorted.length > 1 && (
          <path d={line} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}

        {sorted.map((p, i) => (
          <circle
            key={p.date + i}
            cx={x(i)}
            cy={y(p.value)}
            r={i === sorted.length - 1 ? 4.5 : 3}
            fill="var(--card)"
            stroke={color}
            strokeWidth="2"
          />
        ))}
      </svg>

      <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-[0.8125rem]">
        <span className="text-faint">{formatCzechDateShort(first.date)}</span>
        <span className="text-[var(--fg)]">
          <strong className="text-[1.0625rem] font-medium">{formatNumber(last.value)}</strong>
          {unit && <span className="ml-1 text-faint">{unit}</span>}
          {delta !== null && delta !== 0 && (
            <span className={`ml-2 text-xs ${delta > 0 ? 'text-[var(--color-sage-deep)]' : 'text-faint'}`}>
              {delta > 0 ? '↑' : '↓'} {formatNumber(Math.abs(delta))}
            </span>
          )}
        </span>
        <span className="text-faint">{formatCzechDateShort(last.date)}</span>
      </figcaption>
    </figure>
  )
}

/** Sloupcový přehled — pro nálady a denní záznamy. */
export function BarChart({
  points,
  max = 5,
  height = 120,
  ariaLabel,
}: {
  points: Point[]
  max?: number
  height?: number
  ariaLabel?: string
}) {
  if (points.length === 0) return null
  const sorted = [...points].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <figure>
      <div
        className="flex items-end gap-[3px]"
        style={{ height }}
        role="img"
        aria-label={ariaLabel ?? 'Vývoj v čase'}
      >
        {sorted.map((p) => {
          const pct = Math.max(0.06, Math.min(1, p.value / max))
          return (
            <div
              key={p.date}
              title={`${formatCzechDateShort(p.date)}: ${p.value}`}
              className="flex-1 rounded-t-[3px] transition-all duration-500"
              style={{
                height: `${pct * 100}%`,
                background: `color-mix(in oklab, var(--color-taupe) ${25 + pct * 60}%, transparent)`,
              }}
            />
          )
        })}
      </div>
      <figcaption className="mt-2.5 flex justify-between text-xs text-faint">
        <span>{formatCzechDateShort(sorted[0].date)}</span>
        <span>{formatCzechDateShort(sorted[sorted.length - 1].date)}</span>
      </figcaption>
    </figure>
  )
}

function formatNumber(n: number): string {
  if (Number.isInteger(n)) return String(n)
  return n.toFixed(Math.abs(n) < 10 ? 2 : 1).replace('.', ',')
}

function hash(s: string): number {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  return h
}
