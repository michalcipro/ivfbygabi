import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import * as esbuild from 'esbuild'

/**
 * Jména akcí.
 *
 * ------------------------------------------------------------- CO SE STALO ---
 * Aplikace spojuje tlačítko s obsluhou přes text: `data-act="ex-del"` na
 * tlačítku a `case 'ex-del'` v jednom velkém `switch`. To je pohodlné, ale
 * překlep ani kolize se tím nijak neohlásí. Stalo se obojí:
 *
 *  - `ex-del` si zabralo mazání vyšetření i mazání cvičení. Vyhrála první
 *    obsluha, takže vyšetření se nemazalo vůbec a žena dostala dotaz na
 *    cvičení, o kterém nebyla řeč.
 *  - Příznaky po transferu posílaly `sym-log`, zatímco obsluha se jmenuje
 *    `symptom`. Klepnutí nedělalo nic.
 *
 * Obojí šlo poznat jenom kliknutím v prohlížeči. Proto tyhle testy.
 *
 * -------------------------------------------------------------- JAK TO MĚŘÍ ---
 * Kolize se nedají hledat obyčejným hledáním textu: `main.ts` má čtyři
 * `switch` bloky a stejné jméno ve dvou různých je v pořádku (`hledat` je
 * obrazovka i akce). Proto to posuzuje esbuild, který kód doopravdy
 * rozebere a na zdvojený `case` v jednom bloku upozorní sám.
 *
 * Druhý směr, tedy tlačítko bez obsluhy, se dá spočítat z textu: vybere se
 * každé `data-act` ze šablon a každé jméno, na které se dispečer kdekoliv
 * ptá.
 */

const KOREN = new URL('..', import.meta.url).pathname
const KLIENT = join(KOREN, 'src/client')

function zdroje(): string[] {
  return readdirSync(KLIENT)
    .filter((f) => f.endsWith('.ts'))
    .map((f) => join(KLIENT, f))
}

test('žádná obsluha akce si nezabírá jméno jiné', async () => {
  const vysledek = await esbuild.build({
    entryPoints: [join(KLIENT, 'main.ts')],
    bundle: true,
    write: false,
    format: 'iife',
    logLevel: 'silent',
    loader: { '.css': 'text' },
  })

  const kolize = vysledek.warnings.filter((w) => w.id === 'duplicate-case')
  const kde = kolize.map((w) => `${w.location?.file}:${w.location?.line} ${w.location?.lineText?.trim()}`)

  assert.deepEqual(
    kde,
    [],
    `Dvě obsluhy ve stejném switch sdílejí jméno. Ta druhá se nikdy nespustí:\n${kde.join('\n')}`,
  )
})

test('každé tlačítko má obsluhu', () => {
  const texty = zdroje().map((f) => readFileSync(f, 'utf8'))
  const vse = texty.join('\n')

  const naTlacitkach = new Set<string>()
  for (const m of vse.matchAll(/data-act="([a-z0-9-]+)"/g)) naTlacitkach.add(m[1])

  // Dispečer se na jméno ptá dvěma způsoby: `case` ve switchi a rovnost
  // v `if`. Zámek používá to druhé, protože musí odpovědět dřív než switch.
  const obsluhy = new Set<string>()
  const main = readFileSync(join(KLIENT, 'main.ts'), 'utf8')
  for (const m of main.matchAll(/case '([a-z0-9-]+)'/g)) obsluhy.add(m[1])
  for (const m of main.matchAll(/act === '([a-z0-9-]+)'/g)) obsluhy.add(m[1])

  const bezObsluhy = [...naTlacitkach].filter((a) => !obsluhy.has(a)).sort()

  assert.deepEqual(
    bezObsluhy,
    [],
    `Tyhle akce se kreslí na tlačítka, ale nikdo je nezpracuje. Klepnutí nedělá nic:\n${bezObsluhy.join(', ')}`,
  )
})

test('mazání vyšetření a mazání cvičení jsou dvě různé akce', () => {
  const ivf = readFileSync(join(KLIENT, 'screens-ivf.ts'), 'utf8')
  const denik = readFileSync(join(KLIENT, 'screens-denik.ts'), 'utf8')

  // Předpona `ex-` patří vyšetřením: stejně se jmenují i `ex-toggle`,
  // `ex-save` a identifikátory polí `ex-<id>-onDate`.
  assert.ok(ivf.includes('data-act="ex-del"'), 'vyšetření mají mazat přes ex-del')
  assert.ok(!denik.includes('data-act="ex-del"'), 'deník nesmí sahat na ex-del')
  assert.ok(denik.includes('data-act="exercise-del"'), 'cvičení mají mazat přes exercise-del')
})
