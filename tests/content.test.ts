import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync } from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { PHASE_IDS } from '../src/lib/domain/phases'
import { MODIFIER_IDS, TOPIC_IDS } from '../src/lib/domain/profile'
import { CONTENT_KINDS, HERO_TOKENS, type ContentPack } from '../src/lib/content/types'

/**
 * Hygiena obsahové knihovny.
 *
 * Obsah je největší část aplikace a rozbije se tiše. Neplatné id fáze
 * vyřadí článek z doporučování a nikdo si toho nevšimne; duplicitní id
 * zahodí registr při načtení; HTML v textu se vypíše jako holé znaky,
 * protože renderer je záměrně minimální. Nic z toho nespadne, jen to
 * nefunguje. Proto se to kontroluje tady, ne okem.
 *
 * Balíky se načítají ze složky, ne ze seznamu. Nový balík je tím pádem
 * pokrytý od chvíle, kdy vznikne.
 */

const DIR = path.join(process.cwd(), 'src/lib/content/packs')

const NAMES = readdirSync(DIR)
  .filter((f) => f.endsWith('.ts') && !f.startsWith('_'))
  .map((f) => f.replace(/\.ts$/, ''))
  .sort()

/**
 * Balíky se načítají líně a jen jednou.
 *
 * Nahoře souboru to nejde: testy se překládají do CJS a `await` na nejvyšší
 * úrovni tam neexistuje. Uvnitř testu je `await` v pořádku.
 */
let cache: { name: string; pack: ContentPack }[] | null = null

async function packs(): Promise<{ name: string; pack: ContentPack }[]> {
  if (cache) return cache
  const out: { name: string; pack: ContentPack }[] = []
  for (const name of NAMES) {
    const mod = (await import(pathToFileURL(path.join(DIR, `${name}.ts`)).href)) as {
      pack?: ContentPack
    }
    assert.ok(mod.pack, `balík ${name} neexportuje 'pack'`)
    out.push({ name, pack: mod.pack as ContentPack })
  }
  cache = out
  return out
}

const phases = new Set<string>(PHASE_IDS)
const topics = new Set<string>(TOPIC_IDS)
const mods = new Set<string>(MODIFIER_IDS)
const heroes = new Set<string>(HERO_TOKENS)
const kinds = new Set<string>(CONTENT_KINDS)
const levels = new Set(['essential', 'deep', 'comfort'])

test('každý balík se dá načíst a něco obsahuje', async () => {
  const PACKS = await packs()
  assert.ok(PACKS.length >= 10, `nalezeno jen ${PACKS.length} balíků`)
  for (const { name, pack } of PACKS) {
    const n =
      (pack.items?.length ?? 0) +
      (pack.dailyCards?.length ?? 0) +
      (pack.glossary?.length ?? 0) +
      (pack.encouragements?.length ?? 0) +
      (pack.products?.length ?? 0)
    assert.ok(n > 0, `balík ${name} je prázdný`)
  }
})

test('fáze, témata a modifikátory existují', async () => {
  const PACKS = await packs()
  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  for (const { name, pack } of PACKS) {
    for (const it of pack.items ?? []) {
      for (const p of it.phases) if (!phases.has(p)) bad.push(`${name}/${it.id}: fáze ${p}`)
      for (const t of it.topics) if (!topics.has(t)) bad.push(`${name}/${it.id}: téma ${t}`)
      for (const m of it.modifiers ?? []) if (!mods.has(m)) bad.push(`${name}/${it.id}: modifikátor ${m}`)
      for (const m of it.excludeModifiers ?? []) if (!mods.has(m)) bad.push(`${name}/${it.id}: vyloučený ${m}`)
    }
    for (const c of pack.dailyCards ?? []) {
      for (const p of c.phases) if (!phases.has(p)) bad.push(`${name}/karta ${c.id}: fáze ${p}`)
      for (const m of c.modifiers ?? []) if (!mods.has(m)) bad.push(`${name}/karta ${c.id}: modifikátor ${m}`)
    }
    for (const g of pack.glossary ?? []) {
      for (const t of g.topics) if (!topics.has(t)) bad.push(`${name}/pojem ${g.term}: téma ${t}`)
    }
  }
  assert.deepEqual(bad, [], `neplatné hodnoty:\n${bad.join('\n')}`)
})

test('druh, úroveň, vizuál a datum mají platné hodnoty', async () => {
  const PACKS = await packs()
  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  for (const { name, pack } of PACKS) {
    for (const it of pack.items ?? []) {
      if (!kinds.has(it.kind)) bad.push(`${name}/${it.id}: kind ${it.kind}`)
      if (!levels.has(it.level)) bad.push(`${name}/${it.id}: level ${it.level}`)
      if (!heroes.has(it.hero)) bad.push(`${name}/${it.id}: hero ${it.hero}`)
      if (!/^\d{4}-\d{2}-\d{2}$/.test(it.publishedOn)) bad.push(`${name}/${it.id}: datum ${it.publishedOn}`)
      if (!it.title.trim()) bad.push(`${name}/${it.id}: prázdný titulek`)
      if (!it.excerpt.trim()) bad.push(`${name}/${it.id}: prázdný perex`)
      if (!it.body.trim()) bad.push(`${name}/${it.id}: prázdné tělo`)
    }
  }
  assert.deepEqual(bad, [], `neplatné hodnoty:\n${bad.join('\n')}`)
})

test('id se nikde neopakují. Registr by je tiše zahodil', async () => {
  const PACKS = await packs()
  const dup: string[] = []
  for (const key of ['items', 'dailyCards', 'encouragements', 'products'] as const) {
    const kde = new Map<string, string[]>()
    for (const { name, pack } of PACKS) {
      for (const e of (pack[key] ?? []) as { id: string }[]) {
        kde.set(e.id, [...(kde.get(e.id) ?? []), name])
      }
    }
    for (const [id, names] of kde) {
      if (names.length > 1) dup.push(`${key} ${id}: ${names.join(', ')}`)
    }
  }
  assert.deepEqual(dup, [], `duplicitní id:\n${dup.join('\n')}`)
})

test('pojmy ve slovníku se neopakují', async () => {
  const PACKS = await packs()
  const kde = new Map<string, string[]>()
  for (const { name, pack } of PACKS) {
    for (const g of pack.glossary ?? []) {
      const key = g.term.trim().toLocaleLowerCase('cs')
      kde.set(key, [...(kde.get(key) ?? []), name])
    }
  }
  const dup = [...kde].filter(([, n]) => n.length > 1).map(([t, n]) => `${t}: ${n.join(', ')}`)
  assert.deepEqual(dup, [], `duplicitní pojmy:\n${dup.join('\n')}`)
})

/**
 * Renderer umí ## ### - 1. > ** _ a tabulky. Cokoli jiného se vypíše jako
 * holý text, takže odkaz nebo blok kódu v článku znamená rozsypaný odstavec.
 */
test('texty neobsahují nic, co renderer neumí', async () => {
  const PACKS = await packs()
  const pravidla: [string, RegExp][] = [
    ['HTML značka', /<\/?[a-zA-Z][a-zA-Z0-9]*(\s[^<>]*)?>/],
    ['odkaz', /\[[^\]\n]*\]\([^)\n]*\)/],
    ['obrázek', /!\[[^\]\n]*\]/],
    ['holá adresa', /https?:\/\//],
    ['nadpis # nebo ####', /^\s*(#|####+)\s+/m],
    ['blok kódu', /^\s*```/m],
    ['HTML entita', /&(nbsp|amp|lt|gt|quot|#\d+);/],
  ]

  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  const check = (kde: string, text: string | undefined): void => {
    if (!text) return
    for (const [label, re] of pravidla) {
      const m = text.match(re)
      if (m) bad.push(`${kde}: ${label}, ${JSON.stringify(m[0].slice(0, 60))}`)
    }
  }

  for (const { name, pack } of PACKS) {
    for (const it of pack.items ?? []) {
      check(`${name}/${it.id}`, it.body)
      check(`${name}/${it.id} perex`, it.excerpt)
      for (const [i, ch] of (it.chapters ?? []).entries()) check(`${name}/${it.id} kapitola ${i + 1}`, ch.body)
      for (const c of it.checklist ?? []) check(`${name}/${it.id} položka ${c.id}`, c.text)
      check(`${name}/${it.id} poznámka k médiu`, it.mediaNote)
    }
    for (const c of pack.dailyCards ?? []) {
      check(`${name}/karta ${c.id}`, c.body)
      check(`${name}/karta ${c.id} nadpis`, c.headline)
    }
    for (const g of pack.glossary ?? []) {
      check(`${name}/pojem ${g.term}`, g.long)
      check(`${name}/pojem ${g.term} krátce`, g.short)
    }
  }
  assert.deepEqual(bad, [], `nepodporovaný zápis:\n${bad.join('\n')}`)
})

test('kvíz má správnou odpověď v rozsahu možností', async () => {
  const PACKS = await packs()
  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  for (const { name, pack } of PACKS) {
    for (const it of pack.items ?? []) {
      for (const [i, q] of (it.quiz ?? []).entries()) {
        if (q.correct < 0 || q.correct >= q.options.length) bad.push(`${name}/${it.id} otázka ${i + 1}`)
      }
    }
  }
  assert.deepEqual(bad, [], `špatný index správné odpovědi:\n${bad.join('\n')}`)
})

/**
 * Pojem „beta hCG“ se v aplikaci nepoužívá. Je to tentýž hormon a laické
 * zdvojení jen mate. Hodnota z krve je prostě hCG. Hlídá se i velikost
 * písmen: „HCG“ je jiná zkratka než ta, kterou má žena na výsledku z laborky.
 */
test('nikde nezůstalo „beta hCG“ ani „HCG“', async () => {
  const PACKS = await packs()
  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  for (const { name, pack } of PACKS) {
    // `aliases` se nekontrolují: „HCG“ tam je schválně, protože takhle
    // uživatelka zkratku často napíše do hledání a heslo se musí najít.
    const spatne = (t: string): boolean => /beta\s*hcg/i.test(t) || /(?<![A-Za-z])HCG(?![A-Za-z])/.test(t)
    for (const it of pack.items ?? []) {
      if (spatne(`${it.title} ${it.excerpt} ${it.body}`)) bad.push(`${name}/${it.id}`)
    }
    for (const c of pack.dailyCards ?? []) {
      if (spatne(`${c.headline} ${c.body} ${(c.whatsHappening ?? []).join(' ')}`)) bad.push(`${name}/karta ${c.id}`)
    }
    for (const g of pack.glossary ?? []) {
      if (spatne(`${g.term} ${g.short} ${g.long}`)) bad.push(`${name}/pojem ${g.term}`)
    }
  }
  assert.deepEqual(bad, [], `„beta hCG“ v:\n${bad.join('\n')}`)
})

/**
 * Toxická pozitivita. Fráze, které v léčbě slýchá každá žena od okolí
 * a které v aplikaci nemají co dělat, proto se hlídají textem, ne dohodou.
 * Záporný tvar („nemusíte myslet pozitivně“) je naopak v pořádku.
 */
test('žádná toxická pozitivita', async () => {
  const PACKS = await packs()
  const fraze = [
    /(?<!ne)musíte myslet pozitivně/i,
    /příště to (určitě )?vyjde/i,
    /(?<!ne)vzdávejte se/i,
    /všechno se děje z nějakého důvodu/i,
    /hlavně klid, ono to přijde/i,
  ]
  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  for (const { name, pack } of PACKS) {
    for (const it of pack.items ?? []) {
      for (const re of fraze) {
        const m = it.body.match(re)
        if (m) bad.push(`${name}/${it.id}: ${JSON.stringify(m[0])}`)
      }
    }
    for (const c of pack.dailyCards ?? []) {
      for (const re of fraze) {
        const m = `${c.headline} ${c.body}`.match(re)
        if (m) bad.push(`${name}/karta ${c.id}: ${JSON.stringify(m[0])}`)
      }
    }
  }
  assert.deepEqual(bad, [], `zakázané fráze:\n${bad.join('\n')}`)
})

/**
 * „Co když…“ je databáze pro chvíle mimo ordinační hodiny. Text, který
 * neřekne, kdy přestat číst a začít vytáčet číslo, je v ní k ničemu.
 */
test('každé „Co když…“ říká, kdy volat', async () => {
  const PACKS = await packs()
  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  for (const { name, pack } of PACKS) {
    for (const it of pack.items ?? []) {
      if (!it.id.startsWith('ck-')) continue
      if (!/##\s*(Kdy volat hned|Kdy si říct o pomoc)/.test(it.body)) bad.push(`${name}/${it.id}`)
    }
  }
  assert.deepEqual(bad, [], `chybí sekce o volání:\n${bad.join('\n')}`)
})

/**
 * Em dash se v aplikaci nepoužívá.
 *
 * V češtině je to cizí znak, v próze ho zastoupí čárka, dvojtečka nebo tečka.
 * Test hlídá zdrojové soubory, ne jen obsah, protože pomlčka se stejně snadno
 * vrátí do komentáře jako do článku.
 */
test('nikde není em dash', async () => {
  const { readdirSync, readFileSync, statSync } = await import('node:fs')
  const { join } = await import('node:path')

  // Znak se skládá z kódu, aby ho test sám neobsahoval a nespadl na sobě.
  const EM = String.fromCharCode(0x2014)
  const bad: string[] = []
  const projdi = (dir: string): void => {
    for (const name of readdirSync(dir)) {
      const path = join(dir, name)
      if (statSync(path).isDirectory()) {
        projdi(path)
        continue
      }
      if (!/\.(ts|css|md|html|json)$/.test(name)) continue
      const text = readFileSync(path, 'utf8')
      const n = text.split(EM).length - 1
      if (n > 0) bad.push(`${path} (${n}×)`)
    }
  }
  projdi('src')
  projdi('scripts')
  projdi('tests')
  // Prodejní stránka je jiný kus kódu než aplikace, ale čte ji tentýž
  // člověk. Bez tohohle řádku se do ní em pomlčka vrátí a testy zůstanou
  // zelené.
  projdi('landing')

  // Dokumentace v kořeni a popis balíku. I package.json se někam vypisuje.
  for (const name of [...readdirSync('.').filter((n) => n.endsWith('.md')), 'package.json']) {
    let text: string
    try {
      text = readFileSync(name, 'utf8')
    } catch {
      continue
    }
    const n = text.split(EM).length - 1
    if (n > 0) bad.push(`${name} (${n}×)`)
  }

  assert.deepEqual(bad, [], `em dash zůstal v:\n${bad.join('\n')}`)
})
