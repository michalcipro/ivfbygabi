import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

/**
 * Jedna otázka, jedna odpověď.
 *
 * Aplikace odpovídá na „kde jsem?“ na desítkách míst: v hlavičce, na Dnes,
 * v nastavení, v přehledu, v přepínači fáze. Všechna ta místa musí říct
 * totéž. Změřeno v aplikaci, když to tak nebylo: v kartě cyklu stálo
 * „Mimoděložní těhotenství“, nahoře svítilo „Čekání na hCG“ a v přepínači
 * byla zaškrtnutá „Zažila jsem ztrátu“. Tři obrazovky, tři různé odpovědi.
 *
 * Rozpor vznikl dvakrát a pokaždé stejně:
 *  1. obrazovka četla `declaredPhase`, tedy ruční volbu, místo skutečné
 *     fáze. Volba je vstup. Jakmile ji data přebijí, není to stav.
 *  2. obrazovka vypsala `phase.title` místo `phase.name`, takže jedna fáze
 *     měla v aplikaci dvě jména („Mezi pokusy“ a „Čekání na další pokus“).
 *
 * Obojí je vidět ve zdrojáku, takže se to dá hlídat tady a ne okem.
 */

const KLIENT = path.join(process.cwd(), 'src/client')

function souboryKlienta(): { jmeno: string; kod: string }[] {
  return readdirSync(KLIENT)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => ({ jmeno: f, kod: readFileSync(path.join(KLIENT, f), 'utf8') }))
}

/** Řádky bez komentářů. Vzor v komentáři není chyba, je to vysvětlení. */
function radkyKodu(kod: string): { c: number; text: string }[] {
  return kod
    .split('\n')
    .map((text, i) => ({ c: i + 1, text }))
    .filter((r) => {
      const t = r.text.trim()
      return !t.startsWith('//') && !t.startsWith('*') && !t.startsWith('/*')
    })
}

test('žádná obrazovka neříká „kde jste“ přes phase.title', () => {
  const nalezy: string[] = []
  for (const { jmeno, kod } of souboryKlienta()) {
    for (const r of radkyKodu(kod)) {
      if (r.text.includes('phase.title')) nalezy.push(`${jmeno}:${r.c}`)
    }
  }
  assert.deepEqual(
    nalezy,
    [],
    `Na „kde jste“ se používá phase.name, jinak má jedna fáze dvě jména. Nalezeno: ${nalezy.join(', ')}`,
  )
})

test('zvolená fáze se nikde nevydává za tu, ve které žena je', () => {
  /*
   * `declaredPhase` smí číst jen tři místa: onboarding, který ji zakládá,
   * ukládání v store a nastavení, kde si ji žena sama přepíná. Kdekoli
   * jinde je to tvrzení o stavu a to patří výhradně `journey()`.
   */
  const POVOLENO = new Set(['onboarding.ts', 'store.ts', 'screens-more.ts'])
  const nalezy: string[] = []
  for (const { jmeno, kod } of souboryKlienta()) {
    if (POVOLENO.has(jmeno)) continue
    for (const r of radkyKodu(kod)) {
      if (!r.text.includes('declaredPhase')) continue
      // Zápis volby je v pořádku, ta se někde uložit musí. Hlídá se čtení.
      if (/declaredPhase\s*=[^=]/.test(r.text)) continue
      nalezy.push(`${jmeno}:${r.c}`)
    }
  }
  assert.deepEqual(
    nalezy,
    [],
    `Fáze se zobrazuje z journey(), ne z ruční volby. Nalezeno: ${nalezy.join(', ')}`,
  )
})

test('nastavení ukazuje ruční volbu jen ve vlastním políčku', () => {
  // Výjimka pro nastavení platí jen pro `<select>`, ve kterém se volba
  // mění, a pro upozornění, že se s ní aplikace rozchází. Nikde jinde
  // na té obrazovce se z ní nesmí odvozovat, co se ženě ukáže.
  const kod = readFileSync(path.join(KLIENT, 'screens-more.ts'), 'utf8')
  const radky = radkyKodu(kod).filter((r) => r.text.includes('declaredPhase'))
  assert.ok(radky.length > 0, 'nastavení má ruční volbu pořád nabízet')
  for (const r of radky) {
    const ok = r.text.includes('selected') || r.text.includes('!== state.phase.id')
    assert.ok(ok, `screens-more.ts:${r.c} odvozuje zobrazení z ruční volby: ${r.text.trim()}`)
  }
})
