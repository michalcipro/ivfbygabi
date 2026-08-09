import test from 'node:test'
import assert from 'node:assert/strict'
import { resolveJourney } from '../src/lib/domain/journey'
import { emptyProfile, type Profile } from '../src/lib/domain/profile'
import {
  buildRails,
  emptyAffinity,
  pickDailyCard,
  recommend,
  scoreItem,
} from '../src/lib/content/recommend'
import type { ContentItem, DailyCard } from '../src/lib/content/types'
import { positionInRange } from '../src/lib/health/lab-params'

function profileWith(patch: Partial<Profile>): Profile {
  return { ...emptyProfile('u1', 'p1', '2026-01-01T00:00:00Z'), ...patch }
}

function item(patch: Partial<ContentItem> & { id: string }): ContentItem {
  return {
    kind: 'article',
    title: 'Titulek',
    excerpt: 'Perex',
    body: 'Tělo článku.',
    minutes: 5,
    phases: [],
    topics: [],
    level: 'essential',
    hero: 'linen',
    publishedOn: '2026-01-01',
    ...patch,
  }
}

const TWW_STATE = resolveJourney(profileWith({ transferOn: '2026-05-01' }), '2026-05-06')

// ------------------------------------------------------------- doporučování ---

test('obsah pro aktuální fázi má vyšší skóre než cizí', () => {
  const match = item({ id: 'a', phases: ['two_week_wait'] })
  const other = item({ id: 'b', phases: ['thinking'] })
  assert.ok(scoreItem(match, TWW_STATE, emptyAffinity()) > scoreItem(other, TWW_STATE, emptyAffinity()))
})

test('obsah cílený na den fáze vyhrává nad obecným', () => {
  const onDay = item({ id: 'a', phases: ['two_week_wait'], dayRange: [4, 7] })
  const generic = item({ id: 'b', phases: ['two_week_wait'] })
  assert.ok(scoreItem(onDay, TWW_STATE, emptyAffinity()) > scoreItem(generic, TWW_STATE, emptyAffinity()))
})

test('vyloučený modifikátor obsah úplně vyřadí', () => {
  const state = resolveJourney(
    profileWith({ transferOn: '2026-05-01', modifiers: ['pcos'] }),
    '2026-05-06',
  )
  const excluded = item({ id: 'a', phases: ['two_week_wait'], excludeModifiers: ['pcos'] })
  assert.equal(scoreItem(excluded, state, emptyAffinity()), 0)
})

test('cílený modifikátor zvedne skóre nad obecný obsah', () => {
  const state = resolveJourney(
    profileWith({ stimulationStartOn: '2026-01-01', modifiers: ['pcos'] }),
    '2026-01-10',
  )
  const targeted = item({ id: 'a', phases: ['stimulation'], modifiers: ['pcos'] })
  const generic = item({ id: 'b', phases: ['stimulation'] })
  assert.ok(scoreItem(targeted, state, emptyAffinity()) > scoreItem(generic, state, emptyAffinity()))
})

test('už viděný obsah klesá v pořadí', () => {
  const it = item({ id: 'a', phases: ['two_week_wait'] })
  const seen = emptyAffinity()
  seen.seen.add('a')
  assert.ok(scoreItem(it, TWW_STATE, seen) < scoreItem(it, TWW_STATE, emptyAffinity()))
})

test('naučené téma zvyšuje relevanci', () => {
  const it = item({ id: 'a', phases: ['two_week_wait'], topics: ['psychika'] })
  const learned = { ...emptyAffinity(), topics: { psychika: 1 } }
  assert.ok(scoreItem(it, TWW_STATE, learned) > scoreItem(it, TWW_STATE, emptyAffinity()))
})

test('doporučení je v rámci jednoho dne stabilní', () => {
  const catalog = Array.from({ length: 20 }, (_, i) =>
    item({ id: `c${i}`, phases: ['two_week_wait'] }),
  )
  const a = recommend(catalog, TWW_STATE, emptyAffinity(), { limit: 5 })
  const b = recommend(catalog, TWW_STATE, emptyAffinity(), { limit: 5 })
  assert.deepEqual(a.map((x) => x.id), b.map((x) => x.id))
})

test('doporučení se mezi dny promíchá', () => {
  const catalog = Array.from({ length: 30 }, (_, i) =>
    item({ id: `c${i}`, phases: ['two_week_wait'] }),
  )
  const day1 = resolveJourney(profileWith({ transferOn: '2026-05-01' }), '2026-05-06')
  const day2 = resolveJourney(profileWith({ transferOn: '2026-05-01' }), '2026-05-07')
  const a = recommend(catalog, day1, emptyAffinity(), { limit: 8 }).map((x) => x.id)
  const b = recommend(catalog, day2, emptyAffinity(), { limit: 8 }).map((x) => x.id)
  assert.notDeepEqual(a, b)
})

test('řady se obsahem nepřekrývají', () => {
  const catalog = [
    ...Array.from({ length: 12 }, (_, i) => item({ id: `a${i}`, phases: ['two_week_wait'] })),
    ...Array.from({ length: 12 }, (_, i) =>
      item({ id: `v${i}`, kind: 'checklist', phases: ['two_week_wait'] }),
    ),
    ...Array.from({ length: 12 }, (_, i) =>
      item({ id: `m${i}`, kind: 'story', phases: ['two_week_wait'] }),
    ),
  ]
  const rails = buildRails(catalog, TWW_STATE, emptyAffinity())
  const ids = rails.flatMap((r) => r.items.map((i) => i.id))
  assert.equal(ids.length, new Set(ids).size, 'stejná položka se objevila ve dvou řadách')
})

// ------------------------------------------------------------- denní karty ---

const cards: DailyCard[] = [
  { id: 'range', phases: ['two_week_wait'], dayRange: [1, 14], headline: 'Obecná', body: '' },
  { id: 'exact', phases: ['two_week_wait'], day: 5, headline: 'Přesná', body: '' },
  { id: 'other', phases: ['loss_miscarriage'], headline: 'Cizí', body: '' },
]

test('přesná shoda na den vyhrává nad rozsahem', () => {
  assert.equal(pickDailyCard(cards, TWW_STATE)?.id, 'exact')
})

test('mimo přesný den se použije rozsah', () => {
  const state = resolveJourney(profileWith({ transferOn: '2026-05-01' }), '2026-05-09')
  assert.equal(pickDailyCard(cards, state)?.id, 'range')
})

test('karta z jiné fáze se nikdy nevybere', () => {
  const state = resolveJourney(profileWith({ transferOn: '2026-05-01' }), '2026-05-09')
  assert.notEqual(pickDailyCard(cards, state)?.id, 'other')
})

test('karta cílená na modifikátor přebije obecnou', () => {
  const state = resolveJourney(
    profileWith({ stimulationStartOn: '2026-01-01', modifiers: ['pcos'] }),
    '2026-01-05',
  )
  const withMods: DailyCard[] = [
    { id: 'obecna', phases: ['stimulation'], dayRange: [0, 41], headline: 'Obecná', body: '' },
    {
      id: 'pcos-varianta',
      phases: ['stimulation'],
      dayRange: [0, 41],
      modifiers: ['pcos'],
      headline: 'Varianta pro PCOS',
      body: '',
    },
  ]
  assert.equal(pickDailyCard(withMods, state)?.id, 'pcos-varianta')
})

test('vyloučený modifikátor kartu zablokuje', () => {
  const state = resolveJourney(
    profileWith({ stimulationStartOn: '2026-01-01', modifiers: ['pcos'] }),
    '2026-01-05',
  )
  const blocked: DailyCard[] = [
    {
      id: 'jen-prirozeny',
      phases: ['stimulation'],
      dayRange: [0, 41],
      excludeModifiers: ['pcos'],
      headline: 'Po přirozeném porodu',
      body: '',
    },
  ]
  assert.equal(pickDailyCard(blocked, state), null)
})

test('bez odpovídající karty vrací null místo cizí karty', () => {
  const state = resolveJourney(profileWith({}), '2026-05-06')
  assert.equal(pickDailyCard(cards, state), null)
})

// ------------------------------------------------------- rozmezí laboratoře ---

test('umístění v rozmezí je normalizované', () => {
  const inside = positionInRange('fsh', 6.5)
  assert.ok(inside !== null)
  assert.ok((inside as number) > 0 && (inside as number) < 1)

  // Mimo rozmezí se ořízne, nikdy nespadne mimo 0–1.
  assert.equal(positionInRange('fsh', 100), 1)
  assert.equal(positionInRange('fsh', -5), 0)

  // hCG referenční rozmezí nemá. Nesmíme předstírat, že ano.
  assert.equal(positionInRange('beta_hcg', 500), null)
})
