import test from 'node:test'
import assert from 'node:assert/strict'
import { CATALOG, DAILY_CARDS, GLOSSARY, PRODUCTS } from '../src/lib/content'
import { pickDailyCard } from '../src/lib/content/recommend'
import { resolveJourney } from '../src/lib/domain/journey'
import { emptyProfile, type Profile } from '../src/lib/domain/profile'
import { addDays, isValidIsoDate, today } from '../src/lib/domain/dates'
import { CONTENT_KINDS, HERO_TOKENS } from '../src/lib/content/types'
import { PHASE_IDS } from '../src/lib/domain/phases'
import { MODIFIER_IDS, TOPIC_IDS } from '../src/lib/domain/profile'

/**
 * Slib platformy zní: každý den něco nového. Když někde chybí denní karta,
 * uživatelka na tom místě uvidí obecný popis fáze. A slib přestane platit.
 * Tyhle testy hlídají, aby se to nestalo tiše.
 */

function profileWith(patch: Partial<Profile>): Profile {
  return { ...emptyProfile('u1', 'p1', '2026-01-01T00:00:00Z'), ...patch }
}

const NOW = today()

test('čekání na HCG má kartu na každý den 1–14', () => {
  const missing: number[] = []
  for (let day = 1; day <= 14; day++) {
    const state = resolveJourney(
      profileWith({ transferOn: addDays(NOW, -day), embryoDayAtTransfer: 5 }),
    )
    if (!pickDailyCard(DAILY_CARDS, state)) missing.push(day)
  }
  assert.deepEqual(missing, [], `chybí karty pro dny po transferu: ${missing.join(', ')}`)
})

test('karty čekání na HCG se den ode dne liší', () => {
  const seen = new Set<string>()
  for (let day = 1; day <= 14; day++) {
    const state = resolveJourney(
      profileWith({ transferOn: addDays(NOW, -day), embryoDayAtTransfer: 5 }),
    )
    const card = pickDailyCard(DAILY_CARDS, state)
    assert.ok(card)
    assert.ok(!seen.has(card!.id), `karta ${card!.id} se opakuje na dni ${day}`)
    seen.add(card!.id)
  }
})

test('stimulace má kartu na každý den 0–12', () => {
  const missing: number[] = []
  for (let day = 0; day <= 12; day++) {
    const state = resolveJourney(profileWith({ stimulationStartOn: addDays(NOW, -day) }))
    if (state.phase.id !== 'stimulation') continue
    if (!pickDailyCard(DAILY_CARDS, state)) missing.push(day)
  }
  assert.deepEqual(missing, [], `chybí karty pro dny stimulace: ${missing.join(', ')}`)
})

test('každá fáze cesty má aspoň jednu denní kartu', () => {
  const byPhase = new Map<string, number>()
  for (const card of DAILY_CARDS) {
    for (const phase of card.phases) byPhase.set(phase, (byPhase.get(phase) ?? 0) + 1)
  }
  const empty = PHASE_IDS.filter((p) => (byPhase.get(p) ?? 0) === 0)
  assert.deepEqual(
    empty,
    [],
    `fáze bez denní karty spadnou na obecný popis: ${empty.join(', ')}`,
  )
})

// ------------------------------------------------------- integrita katalogu ---

test('všechna id obsahu jsou unikátní', () => {
  const ids = CATALOG.map((c) => c.id)
  assert.equal(ids.length, new Set(ids).size, 'v katalogu jsou duplicitní id')
})

test('všechna id denních karet jsou unikátní', () => {
  const ids = DAILY_CARDS.map((c) => c.id)
  assert.equal(ids.length, new Set(ids).size, 'mezi kartami jsou duplicitní id')
})

test('obsah používá jen platné výčtové hodnoty', () => {
  const phases = new Set<string>(PHASE_IDS)
  const topics = new Set<string>(TOPIC_IDS)
  const mods = new Set<string>(MODIFIER_IDS)
  const kinds = new Set<string>(CONTENT_KINDS)
  const heroes = new Set<string>(HERO_TOKENS)

  for (const item of CATALOG) {
    assert.ok(kinds.has(item.kind), `${item.id}: neznámý kind ${item.kind}`)
    assert.ok(heroes.has(item.hero), `${item.id}: neznámý hero ${item.hero}`)
    for (const p of item.phases) assert.ok(phases.has(p), `${item.id}: neznámá fáze ${p}`)
    for (const t of item.topics) assert.ok(topics.has(t), `${item.id}: neznámé téma ${t}`)
    for (const m of item.modifiers ?? []) assert.ok(mods.has(m), `${item.id}: neznámý modifikátor ${m}`)
    for (const m of item.excludeModifiers ?? []) assert.ok(mods.has(m), `${item.id}: neznámý modifikátor ${m}`)
  }

  for (const card of DAILY_CARDS) {
    for (const p of card.phases) assert.ok(phases.has(p), `${card.id}: neznámá fáze ${p}`)
    for (const m of card.modifiers ?? []) assert.ok(mods.has(m), `${card.id}: neznámý modifikátor ${m}`)
  }
})

test('datum publikace je platné', () => {
  for (const item of CATALOG) {
    assert.ok(isValidIsoDate(item.publishedOn), `${item.id}: neplatné publishedOn`)
  }
})

test('checklisty a kvízy mají svůj obsah', () => {
  for (const item of CATALOG) {
    if (item.kind === 'checklist') {
      assert.ok(item.checklist && item.checklist.length > 0, `${item.id}: checklist bez položek`)
      const ids = item.checklist!.map((e) => e.id)
      assert.equal(ids.length, new Set(ids).size, `${item.id}: duplicitní id položek`)
    }
    if (item.kind === 'quiz') {
      assert.ok(item.quiz && item.quiz.length > 0, `${item.id}: kvíz bez otázek`)
      for (const q of item.quiz!) {
        assert.ok(
          q.correct >= 0 && q.correct < q.options.length,
          `${item.id}: správná odpověď mimo rozsah`,
        )
      }
    }
  }
})

test('články mají skutečný text, ne zástupný', () => {
  // Hranice slov jsou nutné: české „metodou“ obsahuje „todo“, „výtah“ obsahuje „tah“.
  const placeholders = /lorem ipsum|zde bude (text|doplněn)|\bTODO\b|\bTBD\b|\bXXX\b|\bplaceholder\b/
  for (const item of CATALOG) {
    assert.ok(item.body.length > 120, `${item.id}: příliš krátké tělo`)
    assert.ok(!placeholders.test(item.body), `${item.id}: zástupný text v těle`)
    assert.ok(item.excerpt.length > 15, `${item.id}: příliš krátký perex`)
  }
})

test('denní karty mají nadpis i tělo', () => {
  for (const card of DAILY_CARDS) {
    assert.ok(card.headline.length > 5, `${card.id}: chybí nadpis`)
    assert.ok(card.body.length > 20, `${card.id}: chybí tělo`)
  }
})

test('obsah neobsahuje toxickou pozitivitu', () => {
  const banned = [
    /jen se uvolni/i,
    /nemysli na to/i,
    /aspoň (víš|víte), že (můžeš|můžete) otěhotnět/i,
    /všechno se děje z nějakého důvodu/i,
  ]
  // Tyhle věty se v obsahu objevit smějí, ale jen tam, kde se proti nim
  // vymezujeme (typicky v článcích „co vám lidé budou říkat a co s tím“).
  // Okno musí být dost široké, aby zachytilo rámující odstavec kolem citace.
  const framing =
    /nikdy neř|neříkejte|nepiš|nepatří|nesnažte|vyhněte|zraňuj|bolí|nenávid|nešikovn|bezradnost|netaktn|nemusíte (to )?(snést|poslouchat)|klišé|prázdn[áé] vět|nepomáh/i
  const check = (id: string, text: string) => {
    for (const pattern of banned) {
      const match = text.match(pattern)
      if (!match) continue
      const around = text.slice(Math.max(0, match.index! - 400), match.index! + 400)
      assert.ok(framing.test(around), `${id}: toxická pozitivita bez vymezení. „${match[0]}“`)
    }
  }
  for (const item of CATALOG) check(item.id, `${item.title} ${item.excerpt} ${item.body}`)
  for (const card of DAILY_CARDS) check(card.id, `${card.headline} ${card.body}`)
})

test('produkty v marketplace vysvětlují, proč právě teď', () => {
  for (const p of PRODUCTS) {
    assert.ok(p.whyNow.length > 40, `${p.id}: chybí vysvětlení whyNow`)
    assert.ok(p.phases.length > 0, `${p.id}: produkt bez fáze se nikdy nezobrazí`)
  }
})

test('slovník pojmů má krátké i dlouhé vysvětlení', () => {
  for (const term of GLOSSARY) {
    assert.ok(term.short.length > 15, `${term.term}: příliš krátké vysvětlení`)
    assert.ok(term.long.length >= term.short.length, `${term.term}: dlouhý popis není delší`)
  }
})

test('knihovna pokrývá klíčové fáze cesty', () => {
  const covered = new Set(CATALOG.flatMap((c) => c.phases))
  const mustHave = ['two_week_wait', 'stimulation', 'diagnostics', 'trying_naturally'] as const
  for (const phase of mustHave) {
    assert.ok(covered.has(phase), `knihovna nemá žádný obsah pro fázi ${phase}`)
  }
})

test('každý balík ve složce packs je zaregistrovaný v index.ts', async () => {
  const { readdirSync, readFileSync } = await import('node:fs')
  const { join } = await import('node:path')

  const dir = join(process.cwd(), 'src', 'lib', 'content', 'packs')
  const files = readdirSync(dir)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => f.replace(/\.ts$/, ''))

  const index = readFileSync(join(process.cwd(), 'src', 'lib', 'content', 'index.ts'), 'utf8')

  const missing = files.filter((name) => !index.includes(`./packs/${name}'`))
  assert.deepEqual(
    missing,
    [],
    `balíky existují, ale nejsou v registru. Jejich obsah se nikde nezobrazí: ${missing.join(', ')}`,
  )
})
