import type { PhaseId } from '../domain/phases'
import { PHASES } from '../domain/phases'
import { MODIFIER_LABELS, type ModifierId } from '../domain/profile'
import { ALL_GUIDES } from '../domain/guides'
import { DIAGNOSIS_INFO } from '../domain/diagnoses'
import { CATALOG, GLOSSARY, DAILY_CARDS } from '../content'
import { LAB_PARAMS } from '../health/lab-params'
import { LAB_GUIDANCE } from '../health/lab-guidance'
import { KIND_LABELS } from '../content/types'

/**
 * Vyhledávání napříč vším, co v aplikaci je.
 *
 * Nehledá na internetu a nic si nevymýšlí. Prochází přesně to, co jsme do
 * aplikace nahráli: články, videa, příběhy, checklisty, pojmy ze slovníku,
 * rady a tipy z průvodců fázemi, doplňky, otázky pro lékaře a vysvětlení
 * diagnóz. Když se něco nenajde, znamená to, že to v aplikaci není. A to
 * je poctivější odpověď než vymyšlená věta.
 */

export type HitKind = 'clanek' | 'pojem' | 'rada' | 'tip' | 'doplnek' | 'otazka' | 'diagnoza' | 'hodnota'

export interface SearchHit {
  kind: HitKind
  /** Popisek druhu, jak se ukáže uživatelce. */
  kindLabel: string
  title: string
  snippet: string
  /** Kam klik vede. */
  route: string
  /** Odkud to je. Ukazuje se jako kontext. */
  from: string
  phase: PhaseId | null
  score: number
}

export const HIT_GROUP_TITLES: Record<HitKind, string> = {
  clanek: 'Články, videa a příběhy',
  pojem: 'Pojmy ze slovníku',
  rada: 'Rady z průvodců fázemi',
  tip: 'Tipy',
  doplnek: 'Doplňky',
  otazka: 'Otázky pro lékaře',
  diagnoza: 'Diagnózy a situace',
  hodnota: 'Laboratorní hodnoty',
}

interface IndexEntry extends Omit<SearchHit, 'score'> {
  /** Text, ve kterém se hledá. Už normalizovaný. */
  haystack: string
  titleNorm: string
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** Spojovací slova, která by jinak spojila dotaz s čímkoliv. */
const STOPWORDS = new Set([
  'jak', 'kdy', 'kde', 'proc', 'pro', 'mam', 'mas', 'muzu', 'mohu', 'musim', 'jsem', 'jste',
  'byt', 'bude', 'budu', 'neco', 'nejak', 'vubec', 'ale', 'nebo', 'tak', 'tam', 'tady',
  'jestli', 'jaky', 'jaka', 'jake', 'ktery', 'ktera', 'ktere', 'moje', 'vase', 'svoje',
  'vsechno', 'delat', 'udelat', 'znamena', 'kolik', 'toho', 'tomu', 'tohle', 'ten', 'ta',
])

/**
 * Hrubý kmen slova. Čeština ohýbá všechno, takže „cvičení“ a „cvičit“ se
 * jinak nepotkají. Ořezání je záměrně jednoduché. Přesnost hlídá to,
 * že musí sedět všechna slova dotazu.
 */
function stemOf(w: string): string {
  return w.slice(0, Math.max(4, w.length - 3))
}

let INDEX: IndexEntry[] | null = null

function buildIndex(): IndexEntry[] {
  const out: IndexEntry[] = []

  const add = (
    e: Omit<IndexEntry, 'haystack' | 'titleNorm'> & { searchText: string },
  ) => {
    const { searchText, ...rest } = e
    out.push({
      ...rest,
      titleNorm: normalize(rest.title),
      haystack: normalize(`${rest.title} ${rest.snippet} ${searchText}`),
    })
  }

  // --- knihovna ------------------------------------------------------------
  for (const item of CATALOG) {
    add({
      kind: 'clanek',
      kindLabel: KIND_LABELS[item.kind],
      title: item.title,
      snippet: item.excerpt,
      route: `cist/${item.id}`,
      from: `${item.minutes} min`,
      phase: item.phases[0] ?? null,
      searchText: item.body,
    })
  }

  // --- slovník -------------------------------------------------------------
  for (const term of GLOSSARY) {
    add({
      kind: 'pojem',
      kindLabel: 'Pojem',
      title: term.term,
      snippet: term.short,
      route: `pojem/${encodeURIComponent(term.term)}`,
      from: 'Slovníček',
      phase: null,
      searchText: `${term.aliases?.join(' ') ?? ''} ${term.long}`,
    })
  }

  // --- průvodci fázemi -----------------------------------------------------
  for (const guide of ALL_GUIDES) {
    const phaseName = PHASES[guide.phase].name
    const line = (
      kind: HitKind,
      kindLabel: string,
      section: string,
      title: string,
      snippet: string,
    ) =>
      add({
        kind,
        kindLabel,
        title,
        snippet,
        route: `faze/${guide.phase}/${section}`,
        from: phaseName,
        phase: guide.phase,
        searchText: guide.summary,
      })

    for (const w of guide.whatAwaits) line('rada', 'Co vás čeká', 'prehled', `Co vás čeká, ${phaseName}`, w)
    for (const p of guide.prepareFor) line('rada', 'Na co se připravit', 'prehled', `Příprava, ${phaseName}`, p)
    for (const t of guide.track) line('rada', 'Co sledovat', 'prehled', `Co sledovat, ${phaseName}`, t)
    for (const m of guide.mind) line('rada', 'Hlava', 'hlava', m.title, m.body)
    for (const b of guide.body) line('rada', 'Tělo a pohyb', 'telo', b.title, b.body)
    for (const p of guide.partner) line('rada', 'Pro partnera', 'partner', `Pro partnera, ${phaseName}`, p)
    for (const q of guide.askDoctor) line('otazka', 'Otázka pro lékaře', 'lekar', q, `Ptejte se ve fázi ${phaseName.toLowerCase()}.`)
    for (const s of guide.supplements) {
      add({
        kind: 'doplnek',
        kindLabel: 'Doplněk',
        title: s.name,
        snippet: s.why,
        route: `faze/${guide.phase}/doplnky`,
        from: phaseName,
        phase: guide.phase,
        searchText: `${s.note ?? ''} ${s.evidence}`,
      })
    }
  }

  // --- tipy z denních karet ------------------------------------------------
  for (const card of DAILY_CARDS) {
    if (!card.tip) continue
    const phase = card.phases[0] ?? null
    add({
      kind: 'tip',
      kindLabel: 'Tip',
      title: card.headline,
      snippet: card.tip,
      route: phase ? `faze/${phase}/prehled` : 'dnes',
      from: phase ? PHASES[phase].name : 'Denní karta',
      phase,
      searchText: card.body,
    })
  }

  // --- laboratorní hodnoty -------------------------------------------------
  for (const param of LAB_PARAMS) {
    const g = LAB_GUIDANCE[param.key]
    add({
      kind: 'hodnota',
      kindLabel: 'Hodnota',
      title: param.name,
      snippet: param.explain,
      route: `hodnota/${param.key}`,
      from: `Zdraví · ${param.unit}`,
      phase: null,
      searchText: [
        param.patterns.join(' '),
        g?.inBody ?? '',
        g?.whatMoves.join(' ') ?? '',
        g?.lifestyle.map((l) => `${l.area} ${l.text}`).join(' ') ?? '',
        g?.checkups.join(' ') ?? '',
      ].join(' '),
    })
  }

  // --- diagnózy ------------------------------------------------------------
  for (const [id, info] of Object.entries(DIAGNOSIS_INFO)) {
    add({
      kind: 'diagnoza',
      kindLabel: 'Diagnóza',
      title: MODIFIER_LABELS[id as ModifierId],
      snippet: info.what,
      route: `diagnoza/${id}`,
      from: 'Vysvětlení pojmu',
      phase: null,
      searchText: `${info.meaning} ${info.ask.join(' ')}`,
    })
  }

  return out
}

export function searchIndexSize(): number {
  INDEX ??= buildIndex()
  return INDEX.length
}

export interface SearchOptions {
  /** Fáze uživatelky. Obsah pro ni má přednost. */
  phase?: PhaseId | null
  limitPerGroup?: number
}

/**
 * Najde, co k dotazu v aplikaci je. Bere slova od tří znaků, takže funguje
 * pro klíčové slovo („OHSS“) i pro celou otázku („můžu po transferu cvičit“).
 */
export function searchApp(query: string, opts: SearchOptions = {}): SearchHit[] {
  INDEX ??= buildIndex()

  const q = normalize(query.trim())
  if (q.length < 2) return []

  const words = q.split(/\s+/).filter((w) => w.length >= 3 && !STOPWORDS.has(w))
  // Když v dotazu zbudou samá spojovací slova, hledá se celý řetězec.
  const needles = (words.length > 0 ? words : [q]).map((w) => ({ word: w, stem: stemOf(w) }))

  // Kolik slov musí sedět. U krátkých dotazů všechna, jinak by „nesmysl xyz“
  // vracelo hromadu článků jen proto, že jedno slovo někde náhodou padlo.
  const required = needles.length >= 4 ? needles.length - 1 : needles.length

  const hits: SearchHit[] = []

  for (const e of INDEX) {
    let score = 0
    let matched = 0

    for (const n of needles) {
      if (e.titleNorm.includes(n.word)) {
        score += 8
        matched++
      } else if (e.titleNorm.includes(n.stem)) {
        score += 5
        matched++
      } else if (e.haystack.includes(n.word)) {
        score += 2
        matched++
      } else if (e.haystack.includes(n.stem)) {
        score += 1
        matched++
      }
    }

    if (matched < required) continue

    if (e.titleNorm === q) score += 20
    else if (e.titleNorm.startsWith(q)) score += 8

    // Obsah pro fázi, ve které uživatelka je, jde nahoru.
    if (opts.phase && e.phase === opts.phase) score *= 1.4

    const { haystack: _h, titleNorm: _t, ...rest } = e
    hits.push({ ...rest, score })
  }

  hits.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title, 'cs'))

  const limit = opts.limitPerGroup ?? 6
  const perGroup = new Map<HitKind, number>()
  return hits.filter((h) => {
    const n = perGroup.get(h.kind) ?? 0
    if (n >= limit) return false
    perGroup.set(h.kind, n + 1)
    return true
  })
}

/**
 * Skupiny seřazené podle toho, jak dobrý mají nejlepší výsledek, ne podle
 * pevného pořadí. Když se hledá pojem, má být slovník nahoře.
 */
export function groupHits(hits: SearchHit[]): { kind: HitKind; items: SearchHit[] }[] {
  const byKind = new Map<HitKind, SearchHit[]>()
  for (const h of hits) byKind.set(h.kind, [...(byKind.get(h.kind) ?? []), h])
  return [...byKind.entries()]
    .map(([kind, items]) => ({ kind, items }))
    .sort((a, b) => b.items[0].score - a.items[0].score)
}

/** Návrhy, co zkusit. Sestavené z pojmů, které se k fázi opravdu vážou. */
export function searchSuggestions(phase: PhaseId | null): string[] {
  const guide = ALL_GUIDES.find((g) => g.phase === phase)
  const fromGuide = guide ? guide.terms.slice(0, 4) : []
  const general = ['kdy volat lékaře', 'cvičení', 'doplňky', 'partner']
  return [...fromGuide, ...general].slice(0, 8)
}
