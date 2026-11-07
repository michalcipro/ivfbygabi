import type { IsoDate } from './profile'
import { JAZYK, type Jazyk } from '../i18n'

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

/*
 * ---------------------------------------------------------------- DATUM ---
 * Jména těchhle funkcí říkají „Czech“, protože tu byly dřív než cizí
 * jazyky. Teď formátují v jazyce sestavení: `formatCzechDate` vrátí
 * v anglickém sestavení „Saturday 7 November 2026“. Přejmenovat se to
 * nedá bez rizika, `datum` i `dnu` jsou v kódu obsazené jako proměnné
 * na dvou stech místech. Jméno je tedy historické, chování je správné.
 *
 * Krátký číselný tvar se drží dne na prvním místě, protože žena srovnává
 * aplikaci s papírem z české kliniky, kde stojí „7. 11. 2026“. Anglicky
 * se proto píše „7 Nov 2026“ a ne „11/7/2026“: záměna dne a měsíce by
 * u termínu odběru nebo triggeru byla nebezpečná.
 */

const MESICE: Record<Jazyk, string[]> = {
  // Česky se měsíc v datu píše ve druhém pádě: „7. listopadu“.
  cs: [
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
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  de: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
}

/** Zkratky měsíců pro krátký anglický tvar. */
const MESICE_KRATKE_EN = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const DNY: Record<Jazyk, string[]> = {
  cs: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
  en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  de: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
}

export function formatCzechDate(iso: IsoDate, opts: { weekday?: boolean; year?: boolean } = {}) {
  const d = parseIsoDate(iso)
  const day = d.getUTCDate()
  const month = MESICE[JAZYK][d.getUTCMonth()]
  const year = d.getUTCFullYear()
  const den = DNY[JAZYK][d.getUTCDay()]
  const rok = opts.year !== false ? ` ${year}` : ''

  if (JAZYK === 'en') {
    // Anglicky je den bez tečky a za dnem týdne se nedělá čárka.
    return `${opts.weekday ? `${den} ` : ''}${day} ${month}${rok}`
  }
  if (JAZYK === 'de') {
    // Německy se za dnem týdne píše čárka: „Samstag, 7. November 2026“.
    return `${opts.weekday ? `${den}, ` : ''}${day}. ${month}${rok}`
  }
  const parts: string[] = []
  if (opts.weekday) parts.push(den)
  parts.push(`${day}. ${month}`)
  if (opts.year !== false) parts.push(String(year))
  return parts.join(' ')
}

export function formatCzechDateShort(iso: IsoDate): string {
  const d = parseIsoDate(iso)
  const den = d.getUTCDate()
  const mesic = d.getUTCMonth()
  const rok = d.getUTCFullYear()
  if (JAZYK === 'en') return `${den} ${MESICE_KRATKE_EN[mesic]} ${rok}`
  if (JAZYK === 'de') return `${den}.${mesic + 1}.${rok}`
  return `${den}. ${mesic + 1}. ${rok}`
}

/** Počet dní ve správném tvaru. Česky „1 den / 3 dny / 5 dní“. */
export function czDays(n: number): string {
  const a = Math.abs(n)
  if (JAZYK === 'en') return `${n} ${a === 1 ? 'day' : 'days'}`
  if (JAZYK === 'de') return `${n} ${a === 1 ? 'Tag' : 'Tage'}`
  if (a === 1) return `${n} den`
  if (a >= 2 && a <= 4) return `${n} dny`
  return `${n} dní`
}

/**
 * Časová spojení, ve kterých je počet dní.
 *
 * Česky se skládají předložkou a počtem („za 3 dny“, „před 5 dny“).
 * Anglicky stojí slovo na druhé straně („3 days ago“) a německy se mění
 * pád („vor 3 Tagen“). Kdyby si každá obrazovka lepila předložku sama,
 * jako to dělala dřív, vzniklo by v cizím sestavení „za 3 days“.
 */

/** „za 3 dny“ · „in 3 days“ · „in 3 Tagen“ */
export function zaDnu(n: number): string {
  if (JAZYK === 'en') return `in ${czDays(n)}`
  if (JAZYK === 'de') return `in ${n} ${Math.abs(n) === 1 ? 'Tag' : 'Tagen'}`
  return `za ${czDays(n)}`
}

/** „před 3 dny“ · „3 days ago“ · „vor 3 Tagen“. `n` je kladné. */
export function predDny(n: number): string {
  if (JAZYK === 'en') return `${czDays(n)} ago`
  if (JAZYK === 'de') return `vor ${n} ${Math.abs(n) === 1 ? 'Tag' : 'Tagen'}`
  // Česky je po „před“ sedmý pád, ne druhý: před 1 dnem, před 5 dny.
  // Dřív si každá obrazovka lepila „před“ před `czDays`, takže vznikalo
  // „před 5 dní“. To je špatně a tady se to rovná.
  return `před ${n} ${Math.abs(n) === 1 ? 'dnem' : 'dny'}`
}

/** „posledních 22 dní“ · „the last 22 days“ · „die letzten 22 Tage“ */
export function poslednichDnu(n: number): string {
  if (JAZYK === 'en') return `the last ${czDays(n)}`
  if (JAZYK === 'de') return `die letzten ${czDays(n)}`
  return `${n >= 1 && n <= 4 ? 'poslední' : 'posledních'} ${czDays(n)}`
}

/** Počet týdnů ve správném tvaru. */
export function czWeeks(n: number): string {
  const a = Math.abs(n)
  if (JAZYK === 'en') return `${n} ${a === 1 ? 'week' : 'weeks'}`
  if (JAZYK === 'de') return `${n} ${a === 1 ? 'Woche' : 'Wochen'}`
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
