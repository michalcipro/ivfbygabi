import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync } from 'node:fs'
import path from 'node:path'

/**
 * Právní dokumenty: co se nesmí ztratit.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Obchodní podmínky se píšou jednou a pak se do nich roky sahá po kouscích.
 * Každý takový zásah umí tiše odstranit ustanovení, na kterém celá ochrana
 * stojí, a nikdo si toho nevšimne, dokud nepřijde spor nebo kontrola.
 *
 * Tenhle soubor nehlídá kvalitu textu, tu posoudí jedině advokát. Hlídá, že
 * v dokumentu zůstalo to, bez čeho by byl buď neplatný, nebo k ničemu.
 */

const DOKUMENTY = path.join(process.cwd(), 'landing/dokumenty')
const cti = (n: string) => readFileSync(path.join(DOKUMENTY, n), 'utf8')
const VOP = 'obchodni-podminky.html'

/**
 * Zánik práva na odstoupení má tři podmínky a platí jen všechny tři najednou.
 *
 * Když v podmínkách chybí jediná z nich, právo na odstoupení nezaniká
 * a zákaznice může odstoupit i po stažení celého obsahu. Je to nejcennější
 * ustanovení v celém dokumentu a zároveň to nejsnáze vypustitelné.
 */
test('podmínky uvádějí všechny tři podmínky zániku práva na odstoupení', () => {
  const s = cti(VOP)

  assert.match(s, /1837/, 'chybí odkaz na § 1837 občanského zákoníku')
  assert.match(s, /14 dnů ode dne jejího uzavření/, 'chybí lhůta pro odstoupení')
  assert.match(s, /výslovně jste souhlasila se zahájením plnění/, 'chybí podmínka výslovného souhlasu')
  assert.match(s, /ztrácíte/, 'chybí podmínka poučení o ztrátě práva')
  assert.match(s, /potvrzení o uzavřené smlouvě/, 'chybí podmínka potvrzení smlouvy')
  assert.match(s, /Oznámení o odstoupení od smlouvy/, 'chybí vzorový formulář pro odstoupení')
})

/**
 * Odpovědnost za zdraví se vyloučit nedá.
 *
 * § 2898 občanského zákoníku zakazuje předem omezit odpovědnost za újmu na
 * přirozených právech člověka a za újmu způsobenou úmyslně nebo z hrubé
 * nedbalosti. U aplikace, která doprovází léčbu, je to to nejcitlivější
 * místo. Paušální vyloučení by bylo neplatné a zároveň nepřiměřené ujednání:
 * neochránilo by nic a před kontrolou by uškodilo.
 */
test('odpovědnost není vyloučena tam, kde ji vyloučit nelze', () => {
  const s = cti(VOP)

  assert.match(s, /2898/, 'chybí odkaz na § 2898, tedy na meze omezení odpovědnosti')
  assert.match(s, /na životě\s*\n?\s*a zdraví|na životě a zdraví/, 'chybí výhrada pro újmu na zdraví')
  assert.match(s, /úmyslně nebo z hrubé\s*\n?\s*nedbalosti/, 'chybí výhrada pro úmysl a hrubou nedbalost')
  assert.ok(
    !/neodpovídá za (žádnou|jakoukoliv|veškerou)/i.test(s),
    'paušální vyloučení odpovědnosti je neplatné, musí být vázané na příčinu',
  )
})

/**
 * Evropská platforma pro řešení sporů online skončila.
 *
 * Nařízení (EU) č. 524/2013 bylo zrušeno a platforma přestala fungovat
 * v roce 2025. Odkaz na ni je dodnes ve většině vzorů, které se po internetu
 * kopírují. Odkazovat spotřebitelku na zrušenou službu je horší než
 * neodkazovat nikam: vypadá to jako splněná povinnost a přitom to nikam
 * nevede. Mimosoudní řešení v Česku zajišťuje Česká obchodní inspekce.
 */
test('nikde se neodkazuje na zrušenou evropskou platformu ODR', () => {
  for (const n of readdirSync(DOKUMENTY).filter((f) => f.endsWith('.html'))) {
    const s = cti(n)
    assert.ok(!/ec\.europa\.eu\/consumers\/odr/i.test(s), `${n}: odkaz na zrušenou platformu ODR`)
    assert.ok(!/platform\w*\s+ODR|\bODR\b/i.test(s), `${n}: zmínka o zrušené platformě ODR`)
  }
})

test('podmínky uvádějí dozorový orgán a mimosoudní řešení sporů', () => {
  const s = cti(VOP)
  assert.match(s, /Česká obchodní inspekce/, 'chybí Česká obchodní inspekce')
  assert.match(s, /adr\.coi\.cz/, 'chybí adresa pro mimosoudní řešení sporů')
  assert.match(s, /634\/1992/, 'chybí odkaz na zákon o ochraně spotřebitele')
})

/**
 * Změnu služby za běhu musí dovolit smlouva.
 *
 * Podle § 2389j smí poskytovatel měnit digitální obsah v průběhu poskytování
 * jen z důvodu, na kterém se strany dohodly v samotné smlouvě. Když ten výčet
 * v podmínkách není, nesmí se měnit nic nad rámec udržování. U aplikace,
 * která se vyvíjí každý týden, je to zásadní.
 */
test('podmínky dovolují měnit službu a dávají za to právo ukončit', () => {
  const s = cti(VOP)
  assert.match(s, /2389j/, 'chybí odkaz na § 2389j')
  assert.match(s, /Strany se dohodly/, 'chybí ujednání o důvodech změny, bez něj nelze měnit nic')
  assert.match(s, /bezplatně ukončit do 30 dnů/, 'chybí právo ukončit smlouvu při podstatném zhoršení')
  assert.match(s, /2389f/, 'chybí povinnost poskytovat aktualizace')
})

/** Zdravotní vymezení je u téhle aplikace to, co nese celou ochranu. */
test('podmínky vymezují, že aplikace není zdravotnický prostředek ani péče', () => {
  const s = cti(VOP)
  assert.match(s, /2017\/745/, 'chybí odkaz na nařízení o zdravotnických prostředcích')
  assert.match(s, /372\/2011/, 'chybí vymezení vůči zákonu o zdravotních službách')
  assert.match(s, /vedle zdravotní péče, nikoliv místo ní/, 'chybí potvrzení o souběžném užívání')
  assert.match(s, /záruku výsledku léčby/, 'chybí vyloučení záruky výsledku léčby')
})

/**
 * Odkaz, který nikam nevede, je v právním dokumentu chyba.
 *
 * Podmínky se odvolávají na své vlastní články číslem i odkazem. Když se
 * článek přečísluje nebo smaže, odkaz zůstane a ukazuje do prázdna. Čtenářka
 * se pak nedostane k ustanovení, na které ji text výslovně posílá.
 */
test('odkazy uvnitř právních dokumentů vedou na existující články', () => {
  const rozbite: string[] = []

  for (const n of readdirSync(DOKUMENTY).filter((f) => f.endsWith('.html'))) {
    const s = cti(n)
    const kotvy = new Set([...s.matchAll(/id="([^"]+)"/g)].map((m) => m[1]))
    for (const m of s.matchAll(/href="#([^"]+)"/g)) {
      if (!kotvy.has(m[1])) rozbite.push(`${n}: #${m[1]}`)
    }
  }

  assert.deepEqual(rozbite, [], `odkaz nikam nevede:\n${rozbite.join('\n')}`)
})
