import test from 'node:test'
import assert from 'node:assert/strict'
import {
  EMBRYO_DEVELOPMENT,
  journeyLength,
  transferDay,
  type DayInput,
} from '../src/lib/domain/transfer-journey'

const TODAY = '2026-08-10'

function den(patch: Partial<DayInput> = {}) {
  return transferDay({
    transferOn: '2026-08-06',
    embryoDay: 5,
    kind: 'kryo',
    stage: 'blastocysta',
    count: 1,
    hcgOn: '2026-08-16',
    today: TODAY,
    ...patch,
  })
}

// ------------------------------------------------------------- výpočty ---

test('den po transferu se počítá z data, ne z ničeho uloženého', () => {
  assert.equal(den().dpt, 4)
  assert.equal(den({ transferOn: '2026-08-10' }).dpt, 0)
  assert.equal(den({ transferOn: '2026-07-27' }).dpt, 14)
})

test('den transferu se jmenuje dnem transferu, ne nultým dnem', () => {
  const d = den({ transferOn: TODAY })
  assert.equal(d.title, 'Den transferu')
  assert.ok(d.hcg.includes('Dnes je den transferu.'))
  assert.ok(!d.hcg.includes('0. den'))
})

test('embryonální stáří je součet dne kultivace a dne po transferu', () => {
  assert.equal(den({ embryoDay: 5 }).embryoAge, 9)
  assert.equal(den({ embryoDay: 3 }).embryoAge, 7)
  assert.equal(den({ embryoDay: 6 }).embryoAge, 10)
})

// ------------------------------------------------- obsah reaguje na D3–D6 ---

test('D3 a D5 nedostanou ve stejný den stejný text o embryu', () => {
  // Přesně to, co zadání zakazuje. D3 embryo je čtvrtý den po transferu
  // sedmidenní, D5 embryo devítidenní. Jsou to dvě různé fáze vývoje.
  const d3 = den({ embryoDay: 3 })
  const d5 = den({ embryoDay: 5 })
  assert.notEqual(d3.embryo.title, d5.embryo.title)
  assert.notEqual(d3.embryo.body, d5.embryo.body)
})

test('D5 v den transferu a D3 dva dny po transferu mají stejné stáří', () => {
  // Obojí je pětidenní embryo. Obsah o embryu musí být týž, obsah o těle ne.
  const a = den({ embryoDay: 5, transferOn: TODAY })
  const b = den({ embryoDay: 3, transferOn: '2026-08-08' })
  assert.equal(a.embryoAge, 5)
  assert.equal(b.embryoAge, 5)
  assert.equal(a.embryo.title, b.embryo.title)
  assert.notEqual(a.telo.title, b.telo.title)
})

test('každý den dostane vlastní obsah o embryu až do konce vývoje', () => {
  const titulky = new Set<string>()
  for (let dpt = 0; dpt <= 9; dpt++) titulky.add(den({ embryoDay: 5, dpt }).embryo.title)
  assert.ok(titulky.size >= 8, `jen ${titulky.size} různých textů`)
})

test('za koncem tabulky obsah nespadne, jen se přestane větvit', () => {
  const d = den({ embryoDay: 6, dpt: 30 })
  assert.ok(d.embryo.title.length > 0)
  assert.ok(d.telo.title.length > 0)
})

// ------------------------------------------------------------------ hCG ---

test('zapsaný termín hCG se odpočítává', () => {
  assert.ok(den().hcg.includes('zbývá 6 dní'))
})

test('bez zapsaného termínu se žádné datum nevymýšlí', () => {
  const d = den({ hcgOn: null })
  assert.ok(d.hcg.includes('Termín odběru hCG zatím zapsaný nemáte'))
  assert.ok(d.hcg.includes('doporučením svého lékaře'))
  assert.ok(!/\d{1,2}\.\s*\d{1,2}\./.test(d.hcg))
})

// -------------------------------------------------------------- jistota ---

test('nikde se netvrdí, co se právě děje', () => {
  const zakazane = [/\bdnes se embryo uhnízdilo\b/i, /\burčitě\b/i, /\bmusí\s+se\s+uhnízdit\b/i]
  for (let dpt = 0; dpt <= 14; dpt++) {
    for (const embryoDay of [3, 4, 5, 6]) {
      const d = den({ embryoDay, dpt })
      const text = `${d.embryo.title} ${d.embryo.body} ${d.telo.title} ${d.telo.body} ${d.podpora}`
      for (const re of zakazane) {
        assert.ok(!re.test(text), `${re} v D${embryoDay} den ${dpt}`)
      }
    }
  }
})

test('u příznaků vždycky stojí, že samy o sobě nic neznamenají', () => {
  for (let dpt = 0; dpt <= 14; dpt++) {
    const d = den({ dpt })
    assert.ok(d.pocity.note.includes('nejsou spolehliv'))
    assert.ok(d.pocity.note.includes('neznamená, že transfer nevyšel'))
    assert.ok(d.pocity.list.includes('žádné příznaky'))
  }
})

test('podpora nikdy neslibuje výsledek ani nevyzývá k pozitivnímu myšlení', () => {
  const zakazane = [
    'Příště to určitě vyjde',
    'Musíš myslet pozitivně',
    'Nevzdávej se',
    'Všechno se děje z nějakého důvodu',
    'určitě to vyjde',
  ]
  for (let dpt = 0; dpt <= 30; dpt++) {
    const p = den({ dpt }).podpora
    for (const z of zakazane) assert.ok(!p.toLowerCase().includes(z.toLowerCase()), `${z} v dni ${dpt}`)
  }
})

test('nikde nepadne „beta hCG“', () => {
  for (let dpt = 0; dpt <= 14; dpt++) {
    for (const embryoDay of [3, 4, 5, 6]) {
      const d = den({ embryoDay, dpt })
      const text = `${d.embryo.body} ${d.telo.body} ${d.hcg} ${d.podpora}`
      assert.ok(!/beta\s*hcg/i.test(text))
    }
  }
})

// ------------------------------------------------------------- délka osy ---

test('osa sahá k odběru hCG, když je zapsaný', () => {
  assert.equal(
    journeyLength({ transferOn: '2026-08-06', embryoDay: 5, hcgOn: '2026-08-16', today: TODAY }),
    10,
  )
})

test('osa nikdy neskončí dřív než dnešek', () => {
  assert.equal(
    journeyLength({ transferOn: '2026-07-01', embryoDay: 5, hcgOn: '2026-07-11', today: TODAY }),
    40,
  )
})

test('bez termínu hCG se osa odhadne podle dne embrya', () => {
  const t = { transferOn: TODAY, hcgOn: null, today: TODAY }
  assert.equal(journeyLength({ ...t, embryoDay: 5 }), 10)
  assert.equal(journeyLength({ ...t, embryoDay: 3 }), 12)
})

// ------------------------------------------------------------- vývoj D3–D6 ---

test('vývoj embrya pokrývá všechny dny od tří do šesti', () => {
  assert.deepEqual(EMBRYO_DEVELOPMENT.map((s) => s.day), [3, 4, 5, 6])
  for (const s of EMBRYO_DEVELOPMENT) assert.ok(s.body.length > 120)
})
