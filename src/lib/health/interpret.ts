import { LAB_BY_KEY } from './lab-params'
import { positionInRange } from './parse-report'
import { daysBetween } from '../domain/dates'

/**
 * Čtení řady hodnot v čase — bez diagnózy.
 *
 * Popisuje jen to, co se dá spočítat: kterým směrem se hodnota pohnula,
 * o kolik, kde leží vůči orientačnímu rozmezí laboratoře a jaký je
 * zdvojovací čas tam, kde to dává smysl.
 *
 * NIKDY neříká, jestli je hodnota dobrá nebo špatná. To závisí na dni
 * cyklu, věku, diagnóze, laboratoři a kontextu, který aplikace nemá.
 */

export interface SeriesPoint {
  value: number
  onDate: string
}

export type Trend = 'roste' | 'klesa' | 'stabilni' | 'jedna-hodnota'

export interface SeriesReading {
  count: number
  latest: SeriesPoint
  previous: SeriesPoint | null
  trend: Trend
  /** Změna proti předchozí hodnotě v procentech. */
  changePct: number | null
  changeText: string
  /** 0–1 pozice v orientačním rozmezí, pokud rozmezí známe. */
  position: number | null
  positionText: string | null
  /** Zdvojovací čas v hodinách — jen tam, kde je to smysluplné (hCG). */
  doublingHours: number | null
  doublingText: string | null
}

/** Změna pod tímhle prahem se považuje za kolísání, ne za trend. */
const STABLE_PCT = 8

export function readSeries(paramKey: string, points: SeriesPoint[]): SeriesReading | null {
  if (points.length === 0) return null

  const sorted = [...points].sort((a, b) => a.onDate.localeCompare(b.onDate))
  const latest = sorted[sorted.length - 1]
  const previous = sorted.length > 1 ? sorted[sorted.length - 2] : null

  const changePct =
    previous && previous.value !== 0
      ? Math.round(((latest.value - previous.value) / Math.abs(previous.value)) * 100)
      : null

  const trend: Trend =
    !previous || changePct === null
      ? 'jedna-hodnota'
      : Math.abs(changePct) < STABLE_PCT
        ? 'stabilni'
        : changePct > 0
          ? 'roste'
          : 'klesa'

  const days = previous ? daysBetween(previous.onDate, latest.onDate) : 0

  const changeText =
    trend === 'jedna-hodnota'
      ? 'První naměřená hodnota. Vývoj uvidíte, jakmile přidáte druhou.'
      : trend === 'stabilni'
        ? `Proti minulému odběru ${days > 0 ? `před ${days} dny ` : ''}se hodnota prakticky nezměnila.`
        : `Proti minulému odběru ${days > 0 ? `před ${days} dny ` : ''}${trend === 'roste' ? 'stoupla' : 'klesla'} o ${Math.abs(changePct!)} %.`

  const param = LAB_BY_KEY[paramKey]
  const range = param?.reference
  const pos = positionInRange(paramKey, latest.value)
  const hasRange = pos.hasRange

  const positionText = !hasRange
    ? null
    : latest.value < (range?.low ?? -Infinity)
      ? 'Poslední hodnota leží pod orientačním rozmezím uvedeným v aplikaci.'
      : latest.value > (range?.high ?? Infinity)
        ? 'Poslední hodnota leží nad orientačním rozmezím uvedeným v aplikaci.'
        : 'Poslední hodnota leží uvnitř orientačního rozmezí uvedeného v aplikaci.'

  // Zdvojovací čas dává smysl jen u rostoucího hCG v raném těhotenství.
  let doublingHours: number | null = null
  let doublingText: string | null = null
  if (paramKey === 'beta_hcg' && previous && previous.value > 0 && latest.value > previous.value) {
    const hours = daysBetween(previous.onDate, latest.onDate) * 24
    if (hours > 0) {
      doublingHours = Math.round((hours * Math.LN2) / Math.log(latest.value / previous.value))
      doublingText = `Zdvojovací čas mezi posledními dvěma odběry vychází na zhruba ${doublingHours} hodin.`
    }
  }

  return {
    count: sorted.length,
    latest,
    previous,
    trend,
    changePct,
    changeText,
    position: hasRange ? pos.position : null,
    positionText,
    doublingHours,
    doublingText,
  }
}

export const TREND_ICON: Record<Trend, string> = {
  roste: '↗',
  klesa: '↘',
  stabilni: '→',
  'jedna-hodnota': '•',
}

export const TREND_LABEL: Record<Trend, string> = {
  roste: 'roste',
  klesa: 'klesá',
  stabilni: 'beze změny',
  'jedna-hodnota': 'jedna hodnota',
}

/**
 * Věta, která musí zaznít u každé interpretace. Je záměrně jedna a stejná —
 * aby si ji uživatelka spojila s tím, že aplikace nehodnotí.
 */
export const NO_DIAGNOSIS =
  'Aplikace hodnoty nehodnotí. Orientační rozmezí se liší podle laboratoře, dne cyklu, věku i diagnózy — co konkrétní číslo znamená pro vás, řekne jedině váš lékař.'
