import type { IsoDate } from './profile'

/**
 * Práce s daty bez časových pásem. Celá platforma počítá ve dnech
 * kalendáře, ne v milisekundách. „5. den po transferu“ musí sedět
 * bez ohledu na to, jestli je uživatelka v Praze nebo na dovolené.
 */

const MS_PER_DAY = 86_400_000

export function toIsoDate(d: Date): IsoDate {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function parseIsoDate(iso: IsoDate): Date {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(Date.UTC(y, (m ?? 1) - 1, d ?? 1))
}

export function isValidIsoDate(value: unknown): value is IsoDate {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false
  const d = parseIsoDate(value)
  return !Number.isNaN(d.getTime()) && toIsoDateUtc(d) === value
}

function toIsoDateUtc(d: Date): IsoDate {
  return d.toISOString().slice(0, 10)
}

/** Počet celých dní mezi dvěma daty (b - a). Kladné = b je později. */
export function daysBetween(a: IsoDate, b: IsoDate): number {
  return Math.round((parseIsoDate(b).getTime() - parseIsoDate(a).getTime()) / MS_PER_DAY)
}

export function addDays(iso: IsoDate, days: number): IsoDate {
  const d = parseIsoDate(iso)
  d.setUTCDate(d.getUTCDate() + days)
  return toIsoDateUtc(d)
}

export function today(): IsoDate {
  return toIsoDate(new Date())
}

/** Kolik dní zbývá do data (záporné = už bylo). */
export function daysUntil(iso: IsoDate, from: IsoDate = today()): number {
  return daysBetween(from, iso)
}

const MONTHS_CS = [
  'ledna',
  'února',
  'března',
  'dubna',
  'května',
  'června',
  'července',
  'srpna',
  'září',
  'října',
  'listopadu',
  'prosince',
]

const WEEKDAYS_CS = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota']

export function formatCzechDate(iso: IsoDate, opts: { weekday?: boolean; year?: boolean } = {}) {
  const d = parseIsoDate(iso)
  const day = d.getUTCDate()
  const month = MONTHS_CS[d.getUTCMonth()]
  const year = d.getUTCFullYear()
  const parts: string[] = []
  if (opts.weekday) parts.push(WEEKDAYS_CS[d.getUTCDay()])
  parts.push(`${day}. ${month}`)
  if (opts.year !== false) parts.push(String(year))
  return parts.join(' ').replace(/ (\d{4})$/, ' $1')
}

export function formatCzechDateShort(iso: IsoDate): string {
  const d = parseIsoDate(iso)
  return `${d.getUTCDate()}. ${d.getUTCMonth() + 1}. ${d.getUTCFullYear()}`
}

/** Český tvar „X dní / X den / X dny“. */
export function czDays(n: number): string {
  const a = Math.abs(n)
  if (a === 1) return `${n} den`
  if (a >= 2 && a <= 4) return `${n} dny`
  return `${n} dní`
}

export function czWeeks(n: number): string {
  const a = Math.abs(n)
  if (a === 1) return `${n} týden`
  if (a >= 2 && a <= 4) return `${n} týdny`
  return `${n} týdnů`
}

export function czMonths(n: number): string {
  const a = Math.abs(n)
  if (a === 1) return `${n} měsíc`
  if (a >= 2 && a <= 4) return `${n} měsíce`
  return `${n} měsíců`
}

export function czYears(n: number): string {
  const a = Math.abs(n)
  if (a === 1) return `${n} rok`
  if (a >= 2 && a <= 4) return `${n} roky`
  return `${n} let`
}

/** „1 rok a 2 měsíce“, „6 týdnů“, „12 dní“. Pro věk dítěte. */
export function humanAge(days: number): string {
  if (days < 0) return 'ještě nenarozené'
  if (days < 14) return czDays(days)
  if (days < 84) return czWeeks(Math.floor(days / 7))
  if (days < 730) {
    const months = Math.floor(days / 30.44)
    return czMonths(months)
  }
  const years = Math.floor(days / 365.25)
  const rest = Math.floor((days - years * 365.25) / 30.44)
  return rest > 0 ? `${czYears(years)} a ${czMonths(rest)}` : czYears(years)
}

/**
 * Gestační stáří: „24+3“ (24 týdnů a 3 dny). Jak to říkají na klinice.
 */
export function gestationLabel(days: number): string {
  const w = Math.floor(days / 7)
  const d = days % 7
  return `${w}+${d}`
}

/** Deterministický „náhodný“ generátor. Stejný den = stejný obsah. */
export function seedFrom(...parts: (string | number)[]): number {
  const s = parts.join('|')
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

/** Mulberry32. Malý, rychlý, deterministický PRNG. */
export function rngFrom(seed: number): () => number {
  let a = seed >>> 0
  return function next() {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Vybere n prvků deterministicky podle seedu, bez opakování. */
export function pickDeterministic<T>(items: readonly T[], n: number, seed: number): T[] {
  if (items.length <= n) return [...items]
  const rng = rngFrom(seed)
  const pool = [...items]
  const out: T[] = []
  for (let i = 0; i < n && pool.length > 0; i++) {
    const idx = Math.floor(rng() * pool.length)
    out.push(pool.splice(idx, 1)[0])
  }
  return out
}

export function pickOne<T>(items: readonly T[], seed: number): T | undefined {
  if (items.length === 0) return undefined
  return items[seed % items.length]
}
