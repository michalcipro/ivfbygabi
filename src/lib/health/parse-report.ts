import { LAB_PARAMS, LAB_BY_KEY } from './lab-params'
import type { IsoDate } from '../domain/profile'
import { isValidIsoDate } from '../domain/dates'

/**
 * Rozpoznání laboratorních hodnot z textu lékařské zprávy.
 *
 * Vstupem je text — buď z PDF/textového souboru, nebo z OCR na straně
 * prohlížeče. Deterministický parser projde řádky a vytáhne dvojice
 * „parametr → hodnota“. Když je k dispozici klíč k Anthropic API,
 * doplní ho AI o strukturované shrnutí (viz lib/ai/gabi.ts).
 *
 * Parser NIKDY nehodnotí, jestli je výsledek dobrý nebo špatný.
 * Jen zpřehlední, co ve zprávě stojí.
 */

export interface ExtractedValue {
  paramKey: string
  paramName: string
  value: number
  unit: string
  rawLine: string
  confidence: number
}

export interface ParsedReport {
  values: ExtractedValue[]
  detectedDate: IsoDate | null
  detectedCategory: string
  lineCount: number
}

const NUMBER = String.raw`(-?\d{1,6}(?:[.,]\d{1,3})?)`

/** Datum ve formátech, které se objevují na českých zprávách. */
function detectDate(text: string): IsoDate | null {
  const iso = text.match(/\b(20\d{2})-(\d{2})-(\d{2})\b/)
  if (iso && isValidIsoDate(iso[0])) return iso[0]

  // 12. 3. 2026 nebo 12.3.2026 nebo 12/03/2026
  const cz = text.match(/\b(\d{1,2})\s*[./]\s*(\d{1,2})\s*[./]\s*(20\d{2})\b/)
  if (cz) {
    const d = cz[1].padStart(2, '0')
    const m = cz[2].padStart(2, '0')
    const candidate = `${cz[3]}-${m}-${d}`
    if (isValidIsoDate(candidate)) return candidate
  }
  return null
}

const CATEGORY_HINTS: Array<[string, string[]]> = [
  ['spermiogram', ['spermiogram', 'ejakulat', 'koncentrace spermii', 'motilita', 'andrologie']],
  ['embryologie', ['embryo', 'blastocyst', 'oocyt', 'kultivace', 'embryolog']],
  ['genetika', ['karyotyp', 'genetick', 'pgt', 'mutace', 'trombofil']],
  ['uz', ['ultrazvuk', 'sono', 'folikul', 'endometrium', 'nalez']],
  ['imunologie', ['imunolog', 'nk bunky', 'protilatk']],
  ['tehotenska', ['tehotensk', 'prukazka', 'gravidita']],
  ['propousteci', ['propousteci', 'hospitaliz', 'prijem', 'propusten']],
  ['nicu', ['neonatolog', 'jip', 'inkubator', 'nedonos']],
  ['pediatr', ['pediatr', 'ockovani', 'preventivni prohlidka']],
  ['hormony', ['fsh', 'lh', 'amh', 'estradiol', 'progesteron', 'tsh', 'prolaktin', 'hcg']],
]

function detectCategory(text: string): string {
  const norm = normalize(text)
  for (const [category, hints] of CATEGORY_HINTS) {
    if (hints.some((h) => norm.includes(h))) return category
  }
  return 'jine'
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/**
 * Najde hodnotu na řádku. Zvládá tvary:
 *   "AMH: 1,24 ng/ml"
 *   "AMH        1.24   ng/ml   (1,0 - 4,0)"
 *   "beta hCG 512 IU/l"
 */
function extractFromLine(line: string): ExtractedValue | null {
  const norm = normalize(line)

  for (const param of LAB_PARAMS) {
    for (const pattern of param.patterns) {
      const patNorm = normalize(pattern)
      const idx = norm.indexOf(patNorm)
      if (idx === -1) continue

      // Hledáme první číslo ZA názvem parametru.
      const after = line.slice(idx + pattern.length)
      const match = after.match(new RegExp(`[^\\d-]{0,24}${NUMBER}`))
      if (!match) continue

      const value = Number(match[1].replace(',', '.'))
      if (!Number.isFinite(value)) continue

      // Referenční rozmezí v závorce nesmí být zaměněno za hodnotu.
      const beforeNumber = after.slice(0, match.index ?? 0)
      if (/[([]\s*$/.test(beforeNumber)) continue

      const unitMatch = after
        .slice((match.index ?? 0) + match[0].length)
        .match(/^\s*([a-zA-Zµμ%/]+(?:\/[a-zA-Z]+)?)/)

      // Delší shoda názvu = jistější trefa.
      const confidence = Math.min(0.95, 0.45 + patNorm.length * 0.06)

      return {
        paramKey: param.key,
        paramName: param.name,
        value,
        unit: unitMatch?.[1] ?? param.unit,
        rawLine: line.trim(),
        confidence,
      }
    }
  }

  return null
}

export function parseReport(text: string): ParsedReport {
  const lines = text.split(/\r?\n/).filter((l) => l.trim().length > 0)
  const found = new Map<string, ExtractedValue>()

  for (const line of lines) {
    const value = extractFromLine(line)
    if (!value) continue
    // Při více výskytech vyhrává ten s vyšší jistotou.
    const existing = found.get(value.paramKey)
    if (!existing || value.confidence > existing.confidence) {
      found.set(value.paramKey, value)
    }
  }

  return {
    values: [...found.values()].sort((a, b) => b.confidence - a.confidence),
    detectedDate: detectDate(text),
    detectedCategory: detectCategory(text),
    lineCount: lines.length,
  }
}

/** Lidské shrnutí bez hodnocení — jen převyprávění toho, co ve zprávě je. */
export function describeValue(paramKey: string, value: number): string {
  const p = LAB_BY_KEY[paramKey]
  if (!p) return ''
  const parts = [p.explain]
  if (p.reference?.note) parts.push(`Poznámka k hodnocení: ${p.reference.note}`)
  parts.push(
    'Tento popis je obecný a nenahrazuje interpretaci vaším lékařem, který zná celý váš kontext.',
  )
  return parts.join(' ')
}

/**
 * Kde v orientačním rozmezí hodnota leží. Vrací null, když rozmezí neznáme
 * nebo když nemá smysl (např. beta HCG). Používá se jen k umístění bodu
 * v grafu, nikdy k výroku „máte to špatně“.
 */
export function positionInRange(
  paramKey: string,
  value: number,
): { position: number; hasRange: boolean } {
  const p = LAB_BY_KEY[paramKey]
  const low = p?.reference?.low
  const high = p?.reference?.high
  if (low === undefined || high === undefined || high <= low) {
    return { position: 0.5, hasRange: false }
  }
  return { position: Math.max(0, Math.min(1, (value - low) / (high - low))), hasRange: true }
}
