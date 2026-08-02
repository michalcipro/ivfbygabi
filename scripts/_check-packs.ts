import { readdirSync } from 'node:fs'
import path from 'node:path'
import { PHASE_IDS } from '../src/lib/domain/phases'
import { TOPIC_IDS, MODIFIER_IDS } from '../src/lib/domain/profile'
import { HERO_TOKENS, CONTENT_KINDS, type ContentPack } from '../src/lib/content/types'

const NEW = [
  'diagnozy',
  'vysetreni',
  'genetika',
  'oplodneni',
  'podpurne-metody',
  'podpurna-pece',
  'co-kdyz',
  'vysledky-cesty',
  'slovnik',
  'stimulace-dny',
]

const dir = path.join(process.cwd(), 'src/lib/content/packs')
const all = readdirSync(dir)
  .filter((f) => f.endsWith('.ts') && !f.startsWith('_'))
  .map((f) => f.replace(/\.ts$/, ''))
const OLD = all.filter((n) => !NEW.includes(n))

const phases = new Set<string>(PHASE_IDS)
const topics = new Set<string>(TOPIC_IDS)
const mods = new Set<string>(MODIFIER_IDS)
const heroes = new Set<string>(HERO_TOKENS)
const kinds = new Set<string>(CONTENT_KINDS)
const levels = new Set(['essential', 'deep', 'comfort'])

type Rec = { pack: ContentPack; name: string }

async function load(names: string[]): Promise<Rec[]> {
  const out: Rec[] = []
  for (const n of names) {
    const m = await import(path.join(dir, `${n}.ts`))
    if (!m.pack) {
      console.log(`NO_PACK_EXPORT ${n}`)
      continue
    }
    out.push({ pack: m.pack as ContentPack, name: n })
  }
  return out
}

const newPacks = await load(NEW)
const oldPacks = await load(OLD)

// --- enum validation on new packs -----------------------------------------
for (const { pack, name } of newPacks) {
  for (const it of pack.items ?? []) {
    for (const p of it.phases ?? [])
      if (!phases.has(p)) console.log(`BAD_PHASE ${name} ${it.id} ${p}`)
    for (const t of it.topics ?? [])
      if (!topics.has(t)) console.log(`BAD_TOPIC ${name} ${it.id} ${t}`)
    for (const t of it.modifiers ?? [])
      if (!mods.has(t)) console.log(`BAD_MOD ${name} ${it.id} ${t}`)
    for (const t of it.excludeModifiers ?? [])
      if (!mods.has(t)) console.log(`BAD_XMOD ${name} ${it.id} ${t}`)
    if (!heroes.has(it.hero)) console.log(`BAD_HERO ${name} ${it.id} ${it.hero}`)
    if (!levels.has(it.level)) console.log(`BAD_LEVEL ${name} ${it.id} ${it.level}`)
    if (!kinds.has(it.kind)) console.log(`BAD_KIND ${name} ${it.id} ${it.kind}`)
    if (!/^\d{4}-\d{2}-\d{2}$/.test(it.publishedOn))
      console.log(`BAD_DATE ${name} ${it.id} ${it.publishedOn}`)
  }
  for (const c of pack.dailyCards ?? []) {
    for (const p of c.phases ?? [])
      if (!phases.has(p)) console.log(`BAD_PHASE_CARD ${name} ${c.id} ${p}`)
    for (const t of c.modifiers ?? [])
      if (!mods.has(t)) console.log(`BAD_MOD_CARD ${name} ${c.id} ${t}`)
    for (const t of c.excludeModifiers ?? [])
      if (!mods.has(t)) console.log(`BAD_XMOD_CARD ${name} ${c.id} ${t}`)
  }
  for (const g of pack.glossary ?? []) {
    for (const t of g.topics ?? [])
      if (!topics.has(t)) console.log(`BAD_TOPIC_GLOSS ${name} ${g.term} ${t}`)
  }
}

// --- duplicate ids ---------------------------------------------------------
function collect(recs: Rec[], key: 'items' | 'dailyCards' | 'encouragements' | 'products') {
  const map = new Map<string, string[]>()
  for (const { pack, name } of recs) {
    for (const e of (pack[key] ?? []) as { id: string }[]) {
      const arr = map.get(e.id) ?? []
      arr.push(name)
      map.set(e.id, arr)
    }
  }
  return map
}

for (const key of ['items', 'dailyCards', 'encouragements', 'products'] as const) {
  const inNew = collect(newPacks, key)
  const inOld = collect(oldPacks, key)
  for (const [id, where] of inNew) {
    if (where.length > 1) console.log(`DUP_INTERNAL ${key} ${id} :: ${where.join(', ')}`)
    if (inOld.has(id)) console.log(`DUP_VS_OLD ${key} ${id} :: new=${where.join(',')} old=${inOld.get(id)!.join(',')}`)
  }
}

// glossary terms keyed by `term`
{
  const norm = (s: string) => s.trim().toLowerCase()
  const mapNew = new Map<string, string[]>()
  for (const { pack, name } of newPacks)
    for (const g of pack.glossary ?? []) {
      const a = mapNew.get(norm(g.term)) ?? []
      a.push(name)
      mapNew.set(norm(g.term), a)
    }
  const mapOld = new Map<string, string[]>()
  for (const { pack, name } of oldPacks)
    for (const g of pack.glossary ?? []) {
      const a = mapOld.get(norm(g.term)) ?? []
      a.push(name)
      mapOld.set(norm(g.term), a)
    }
  for (const [t, where] of mapNew) {
    if (where.length > 1) console.log(`DUP_INTERNAL glossary ${t} :: ${where.join(', ')}`)
    if (mapOld.has(t)) console.log(`DUP_VS_OLD glossary ${t} :: new=${where.join(',')} old=${mapOld.get(t)!.join(',')}`)
  }
}

// --- body / markdown hygiene ----------------------------------------------
const bodyChecks: [string, RegExp][] = [
  ['HTML_TAG', /<\/?[a-zA-Z][a-zA-Z0-9]*(\s[^<>]*)?>/],
  ['MD_TABLE', /^\s*\|.*\|\s*$/m],
  ['MD_LINK', /\[[^\]\n]*\]\([^)\n]*\)/],
  ['MD_IMAGE', /!\[[^\]\n]*\]/],
  ['MD_AUTOLINK', /<https?:\/\//],
  ['BARE_URL', /https?:\/\//],
  ['H1_OR_H4', /^\s*(#|####+)\s+/m],
  ['CODE_FENCE', /^\s*```/m],
  ['HTML_ENTITY', /&(nbsp|amp|lt|gt|quot|#\d+);/],
]

function checkBody(where: string, text: string | undefined) {
  if (!text) return
  for (const [label, re] of bodyChecks) {
    const m = text.match(re)
    if (m) console.log(`${label} ${where} :: ${JSON.stringify(m[0].slice(0, 80))}`)
  }
}

for (const { pack, name } of newPacks) {
  for (const it of pack.items ?? []) {
    checkBody(`${name}/${it.id}/body`, it.body)
    checkBody(`${name}/${it.id}/excerpt`, it.excerpt)
    for (const [i, ch] of (it.chapters ?? []).entries())
      checkBody(`${name}/${it.id}/chapter${i}`, ch.body)
    for (const c of it.checklist ?? []) {
      checkBody(`${name}/${it.id}/cl:${c.id}`, c.text)
      checkBody(`${name}/${it.id}/cl:${c.id}/hint`, c.hint)
    }
    for (const [i, q] of (it.quiz ?? []).entries()) {
      checkBody(`${name}/${it.id}/quiz${i}`, q.q)
      checkBody(`${name}/${it.id}/quiz${i}/explain`, q.explain)
    }
    checkBody(`${name}/${it.id}/mediaNote`, it.mediaNote)
  }
  for (const c of pack.dailyCards ?? []) {
    checkBody(`${name}/card:${c.id}/body`, c.body)
    checkBody(`${name}/card:${c.id}/headline`, c.headline)
    for (const s of c.whatsHappening ?? []) checkBody(`${name}/card:${c.id}/wh`, s)
    checkBody(`${name}/card:${c.id}/task`, c.task)
    checkBody(`${name}/card:${c.id}/tip`, c.tip)
    checkBody(`${name}/card:${c.id}/reflection`, c.reflection)
    for (const s of c.callDoctorIf ?? []) checkBody(`${name}/card:${c.id}/cd`, s)
  }
  for (const g of pack.glossary ?? []) {
    checkBody(`${name}/gloss:${g.term}/short`, g.short)
    checkBody(`${name}/gloss:${g.term}/long`, g.long)
  }
}

// --- checklist entry id duplicates within an item --------------------------
for (const { pack, name } of newPacks) {
  for (const it of pack.items ?? []) {
    const seen = new Set<string>()
    for (const c of it.checklist ?? []) {
      if (seen.has(c.id)) console.log(`DUP_CHECKLIST_ID ${name}/${it.id} ${c.id}`)
      seen.add(c.id)
    }
    for (const [i, q] of (it.quiz ?? []).entries()) {
      if (q.correct < 0 || q.correct >= q.options.length)
        console.log(`BAD_QUIZ_CORRECT ${name}/${it.id} q${i}`)
    }
  }
}

console.log('--- counts ---')
for (const { pack, name } of newPacks)
  console.log(
    `${name}: items=${pack.items?.length ?? 0} cards=${pack.dailyCards?.length ?? 0} gloss=${pack.glossary?.length ?? 0}`,
  )
