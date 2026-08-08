import test from 'node:test'
import assert from 'node:assert/strict'
import {
  EXERCISES,
  EXERCISE_TOPICS,
  exerciseById,
  exercisesFor,
  exercisesInTopic,
  topicsWithContent,
} from '../src/lib/domain/exercises'

/**
 * Deník je nejcitlivější část aplikace. Tohle hlídá, že se do něj
 * nedostane tlak na to, aby žena myslela pozitivně, ani naznačení,
 * že její psychika ovlivní výsledek léčby.
 */

const text = (e: (typeof EXERCISES)[number]): string =>
  [e.title, e.when, e.how, e.closing ?? '', ...(e.steps ?? []).flatMap((s) => [s.label, s.hint])].join(' ')

// ------------------------------------------------------- toxická pozitivita ---

const ZAKAZANE = [
  'mysli pozitivně',
  'myslete pozitivně',
  'všechno dobře dopadne',
  'určitě to vyjde',
  'musíš věřit',
  'musíte věřit',
  'tvoje miminko si tě najde',
  'stačí se uvolnit',
  'nestresuj',
  'nestresujte',
  'nevzdávej',
  'všechno se děje z nějakého důvodu',
]

test('žádné cvičení netlačí na pozitivní myšlení', () => {
  for (const e of EXERCISES) {
    const t = text(e).toLowerCase()
    for (const fraze of ZAKAZANE) {
      assert.ok(!t.includes(fraze), `„${fraze}“ v cvičení ${e.id}`)
    }
  }
})

test('nikde se netvrdí, že psychika ovlivní výsledek léčby', () => {
  // Nejnebezpečnější věta celé kategorie. Kdyby ji aplikace řekla, dá
  // ženě po neúspěchu vinu.
  const vzorce = [
    /stres.{0,30}(sniž|zhorš|ovlivn).{0,20}(šanc|úspěch|výsled)/i,
    /(uvolněn|klid).{0,30}(zvýš|pomůž).{0,20}(šanc|otěhotn)/i,
    /(psychika|nálada|myšlen\w+).{0,30}ovlivň\w+.{0,20}(výsled|šanc)/i,
  ]
  for (const e of EXERCISES) {
    const t = text(e)
    for (const re of vzorce) assert.ok(!re.test(t), `${re} v cvičení ${e.id}`)
  }
})

test('nikde se neslibuje úleva ani konkrétní výsledek', () => {
  for (const e of EXERCISES) {
    const t = text(e).toLowerCase()
    assert.ok(!t.includes('bude to dobré'), e.id)
    assert.ok(!t.includes('zvládneš to'), e.id)
  }
})

test('žádná em dash', () => {
  // Znak se píše escapem, ne přímo. Doslovná em dash v tomhle souboru by
  // spustila test v tests/content.test.ts, který prohledává i testy.
  const EM_DASH = '\u2014'
  for (const e of EXERCISES) assert.ok(!text(e).includes(EM_DASH), e.id)
})

test('nikde nepadne „beta hCG“', () => {
  for (const e of EXERCISES) assert.ok(!/beta\s*hcg/i.test(text(e)), e.id)
})

// -------------------------------------------------------------- struktura ---

test('každé cvičení má název, kdy po něm sáhnout a jak funguje', () => {
  for (const e of EXERCISES) {
    assert.ok(e.title.length > 3, e.id)
    assert.ok(e.when.length > 10, e.id)
    assert.ok(e.how.length > 80, `${e.id} má moc krátké vysvětlení`)
    assert.ok(e.minutes > 0 && e.minutes <= 20, e.id)
    assert.ok(e.icon.length > 0, e.id)
  }
})

test('kroky mají popisek, hint je nepovinný', () => {
  for (const e of EXERCISES) {
    for (const s of e.steps ?? []) assert.ok(s.label.length > 2, `${e.id}: prázdný krok`)
  }
})

test('id jsou unikátní', () => {
  const ids = EXERCISES.map((e) => e.id)
  assert.equal(new Set(ids).size, ids.length)
})

test('cvičení je dost na to, aby deník nebyl prázdný', () => {
  assert.ok(EXERCISES.length >= 20, `jen ${EXERCISES.length} cvičení`)
})

// ---------------------------------------------------------------- okruhy ---

test('každé cvičení patří do některého okruhu', () => {
  const platne = new Set(EXERCISE_TOPICS.map((t) => t.id))
  for (const e of EXERCISES) {
    assert.ok(e.topic, `${e.id} nemá okruh`)
    assert.ok(platne.has(e.topic!), `${e.id} má neznámý okruh ${e.topic}`)
  }
})

test('okruhy, které se zobrazují, nejsou prázdné', () => {
  for (const t of topicsWithContent()) {
    assert.ok(exercisesInTopic(t.id).length > 0, t.id)
  }
})

test('citlivé okruhy jsou pokryté', () => {
  for (const t of ['ztrata', 'partner', 'telo', 'cekani', 'finance', 'prace', 'klinika'] as const) {
    assert.ok(exercisesInTopic(t).length > 0, `okruh ${t} je prázdný`)
  }
})

// ----------------------------------------------------------- podle fáze ---

test('cvičení pro konkrétní fázi jde nahoru', () => {
  const poradi = exercisesFor('waiting', 'two_week_wait')
  assert.equal(poradi[0].id, 'cekani')
  assert.equal(poradi.length, EXERCISES.length, 'nic se nesmí ztratit')
})

test('bez fáze se řadí podle skupiny a nic nezmizí', () => {
  assert.equal(exercisesFor('loss').length, EXERCISES.length)
})

test('exerciseById najde nové i původní cvičení', () => {
  assert.ok(exerciseById('dech'))
  assert.ok(exerciseById('dopis-sobe'))
  assert.equal(exerciseById('neexistuje'), undefined)
})
