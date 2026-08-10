import { formatCzechDate } from '../lib/domain/dates'
import type { IsoDate } from '../lib/domain/profile'
import {
  problemText,
  type BackupRead,
  type BackupSummary,
  type Reminder,
} from '../lib/domain/backup'
import { bajty, jeApple, naPlose, type StavUloziste } from './storage-health'
import { esc, head, note, plural } from './ui'

/**
 * Záloha a obnova.
 *
 * -------------------------------------------------------------- PROČ TADY ---
 * Tohle je jediná obrazovka v aplikaci, která nemluví o léčbě. Přesto je
 * z celé aplikace nejdůležitější, protože všechno ostatní stojí na tom, že
 * data neztratí.
 *
 * Data žijí jen v prohlížeči. Safari na iPhonu je maže po sedmi dnech bez
 * otevření stránky. Žena, která si aplikaci platí, píše si deník a odjede
 * na dva týdny k moři, se jinak vrátí k prázdné aplikaci.
 *
 * ------------------------------------------------------------------ TÓN ---
 * Nestraší se a neslibuje se. Říká se, jak to je, a hned vedle stojí
 * tlačítko, kterým se to dá vyřešit. Varování bez řešení je jen stres
 * navíc a toho má uživatelka dost.
 *
 * ------------------------------------------------------------------ ŘÁD ---
 * Nahoře je to, co riziko odstraní natrvalo (přidání na plochu), pak
 * záloha, pak obnova a až nakonec technický stav úložiště. Kdo přišel
 * s obavou, najde odpověď dřív, než začne číst čísla.
 */

export interface ZalohaView {
  /** Krátká zpráva po akci. Prázdné = nic se neděje. */
  hlaska: string
  /** Načtená záloha, která čeká na potvrzení. Dokud tu je, nic se nezměnilo. */
  navrh: BackupRead | null
  /** Co říká prohlížeč o úložišti. Doteče asynchronně po prvním vykreslení. */
  stav: StavUloziste | null
  /** Nabídl prohlížeč vlastní instalaci? Na Applu nikdy. */
  lzeInstalovat: boolean
}

export function emptyZaloha(): ZalohaView {
  return { hlaska: '', navrh: null, stav: null, lzeInstalovat: false }
}

// ------------------------------------------------------------------ riziko ---

/**
 * Věta o riziku, přizpůsobená zařízení.
 *
 * Na iPhonu v prohlížeči je hrozba konkrétní a pojmenovatelná. Jinde je
 * mírnější a tvrdit tam totéž by bylo strašení. Na ploše se neříká nic,
 * protože tam je hlavní riziko zažehnané.
 */
function rizikoBlok(): string {
  if (naPlose()) {
    return `<section class="surface pad rise">
      <p class="eyebrow">Máte to vyřešené</p>
      <p class="soft" style="margin-top:.7rem;line-height:1.7">Aplikaci máte přidanou na ploše.
      Tím jste ji vyjmula z pravidla, kvůli kterému prohlížeč po čase maže data webům,
      které se dlouho neotevřely. Zálohu si i tak občas udělejte: telefon se dá ztratit,
      rozbít nebo vyměnit a to už žádné nastavení neošetří.</p>
    </section>`
  }

  if (jeApple()) {
    return `<section class="surface pad rise" style="border-color:var(--blush)">
      <p class="eyebrow">Čemu je dobré předejít</p>
      <p class="soft" style="margin-top:.7rem;line-height:1.7"><strong>Safari na iPhonu a iPadu
      maže data webových stránek po sedmi dnech, kdy je neotevřete.</strong> Není to chyba,
      je to ochrana proti sledování napříč weby. Bohužel se netýká jen reklamních cookies,
      ale i vašeho deníku.</p>
      <p class="soft" style="margin-top:.7rem;line-height:1.7">Dvoutýdenní dovolená stačí.
      Vyřeší to dvě věci, obě máte hned pod tímhle textem: přidat aplikaci na plochu
      a mít zálohu.</p>
    </section>`
  }

  return `<section class="surface pad rise">
    <p class="eyebrow">Kde vaše data jsou</p>
    <p class="soft" style="margin-top:.7rem;line-height:1.7">Jen v tomhle prohlížeči, v tomhle
    zařízení. Nikam se neodesílají, takže je odsud nikdo jiný nepřečte. Zároveň to znamená,
    že smazaná historie prohlížeče, přeinstalovaný systém nebo nový telefon je vezmou s sebou.
    Záloha je jediná cesta, jak je přenést jinam.</p>
  </section>`
}

// -------------------------------------------------------------- na plochu ---

function naPlochuBlok(lzeInstalovat: boolean): string {
  if (naPlose()) return ''

  const applePostup = `<div class="prose" style="margin-top:.9rem"><ol>
    <li>Dole na liště Safari klepněte na ikonu <strong>Sdílet</strong>, čtvereček se šipkou nahoru.</li>
    <li>V nabídce sjeďte níž a vyberte <strong>Přidat na plochu</strong>.</li>
    <li>Potvrďte <strong>Přidat</strong>. Na ploše přibude ikona BlooMia.</li>
    <li>Od téhle chvíle aplikaci otvírejte přes ni, ne přes záložku v prohlížeči.</li>
  </ol></div>
  <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.6">V Chromu na iPhonu
  je to stejné, jen se ikona Sdílet schovává v nabídce vpravo nahoře. Data se z prohlížeče
  nikam neztratí, aplikace na ploše je čte ze stejného místa.</p>`

  const jinyPostup = lzeInstalovat
    ? `<p class="soft" style="margin-top:.7rem;line-height:1.7">Váš prohlížeč umí BlooMii
       nainstalovat jako samostatnou aplikaci. Otevře se pak v vlastním okně, funguje
       i bez signálu a data má chráněnější.</p>
       <button class="btn btn-primary" data-act="pwa-install" style="margin-top:1rem">Nainstalovat aplikaci</button>`
    : `<p class="soft" style="margin-top:.7rem;line-height:1.7">V nabídce prohlížeče najdete
       položku <strong>Nainstalovat aplikaci</strong> nebo <strong>Přidat na plochu</strong>.
       BlooMia se pak otevírá ve vlastním okně, funguje i bez signálu a data má chráněnější.</p>`

  return `<section class="surface pad rise">
    <p class="eyebrow">Doporučený krok</p>
    <h2 class="display" style="font-size:1.35rem;margin-top:.4rem">Přidejte si BlooMii na plochu</h2>
    ${jeApple() ? applePostup : jinyPostup}
  </section>`
}

// ---------------------------------------------------------------- záloha ---

function pripominkaText(r: Reminder): string {
  if (r.dni === null) return 'Zálohu jste zatím neudělala ani jednou.'
  if (r.dni === 0) return 'Poslední záloha je z dneška.'
  // Sloveso se v češtině řídí číslem stejně jako podstatné jméno, jen
  // jinak: 1 uplynul, 2 až 4 uplynuly, od 5 uplynulo.
  const sloveso = r.dni === 1 ? 'uplynul' : r.dni < 5 ? 'uplynuly' : 'uplynulo'
  return `Od poslední zálohy ${sloveso} ${plural(r.dni, 'den', 'dny', 'dní')}.`
}

function zalohaBlok(lastBackupOn: IsoDate | null, r: Reminder, hlaska: string): string {
  const barva = r.level === 'durazna' ? 'var(--blush)' : ''
  const kdy = lastBackupOn
    ? `<dl class="kv" style="margin-top:1rem"><dt>Poslední záloha</dt><dd>${esc(formatCzechDate(lastBackupOn, { year: true }))}</dd></dl>`
    : ''

  return `<section class="surface pad rise"${barva ? ` style="border-color:${barva}"` : ''}>
    <p class="eyebrow">Záloha</p>
    <h2 class="display" style="font-size:1.35rem;margin-top:.4rem">Uložte si všechno do souboru</h2>
    <p class="soft" style="margin-top:.7rem;line-height:1.7">Vznikne jeden soubor se vším:
    profil, deník, cykly, embrya, transfery, hodnoty, léky, dokumenty i fotky. Na telefonu
    vám aplikace nabídne, kam ho uložit, třeba do Souborů, na iCloud nebo si ho pošlete mailem.
    Nikam se neodesílá sám.</p>
    ${kdy}
    ${r.level !== 'zadna' ? note(pripominkaText(r)) : ''}
    <button class="btn btn-primary" data-act="zaloha-ulozit" style="margin-top:1.1rem">Uložit zálohu</button>
    ${hlaska ? `<p class="soft" style="margin-top:.9rem;line-height:1.7">${esc(hlaska)}</p>` : ''}
  </section>`
}

// ---------------------------------------------------------------- obnova ---

function shrnutiRadky(s: BackupSummary): string {
  const vsechny: [string, number][] = [
    ['Zápisů v deníku', s.zapisu],
    ['Cyklů', s.cyklu],
    ['Embryí', s.embryi],
    ['Hodnot', s.hodnot],
    ['Cvičení', s.cviceni],
    ['Dopisů', s.dopisu],
    ['Dokumentů', s.dokumentu],
    ['Fotek', s.fotek],
  ]
  // Nulové řádky se nekreslí. Osm nul vedle sebe vypadá jako prázdná záloha.
  const radky = vsechny.filter(([, n]) => n > 0)

  return `<dl class="kv" style="margin-top:1rem">
    ${s.vznikla ? `<dt>Záloha z</dt><dd>${esc(formatCzechDate(s.vznikla, { year: true }))}</dd>` : ''}
    ${s.od && s.do ? `<dt>Deník od</dt><dd>${esc(formatCzechDate(s.od))} do ${esc(formatCzechDate(s.do))}</dd>` : ''}
    ${radky.map(([k, n]) => `<dt>${esc(k)}</dt><dd class="num">${n}</dd>`).join('')}
  </dl>`
}

/**
 * Panel s načtenou zálohou.
 *
 * Nejdřív se ukáže, co v souboru je, a teprve pak jde potvrdit. Obnova
 * přepíše všechno, takže žena musí vidět, že si nevybrala zálohu z ledna,
 * když chtěla tu z minulého týdne.
 */
function navrhBlok(navrh: BackupRead): string {
  if (!navrh.ok) {
    return `<div class="surface pad" style="margin-top:1.1rem;border-color:var(--blush)">
      <p class="eyebrow">Tenhle soubor použít nejde</p>
      <p class="soft" style="margin-top:.7rem;line-height:1.7">${esc(problemText(navrh.problem))}</p>
      <button class="btn btn-sm" data-act="zaloha-zrusit" style="margin-top:1rem">Zavřít</button>
    </div>`
  }

  return `<div class="surface pad" style="margin-top:1.1rem">
    <p class="eyebrow">Zkontrolujte, že je to ta správná záloha</p>
    ${shrnutiRadky(navrh.summary)}
    <p class="soft" style="margin-top:1rem;line-height:1.7"><strong>Obnova přepíše všechno,
    co je teď v aplikaci.</strong> Co jste zapsala po vzniku téhle zálohy, tady nebude.
    Jestli si tím nejste jistá, uložte si nejdřív zálohu současného stavu a teprve pak obnovte.</p>
    <div class="row wrap" style="gap:.6rem;margin-top:1.1rem">
      <button class="btn btn-primary" data-act="zaloha-potvrdit">Obnovit ze zálohy</button>
      <button class="btn btn-sm" data-act="zaloha-zrusit">Zrušit</button>
    </div>
  </div>`
}

function obnovaBlok(navrh: BackupRead | null): string {
  return `<section class="surface pad rise">
    <p class="eyebrow">Obnova</p>
    <h2 class="display" style="font-size:1.35rem;margin-top:.4rem">Načtěte data ze zálohy</h2>
    <p class="soft" style="margin-top:.7rem;line-height:1.7">Vyberte soubor, který vám aplikace
    dřív uložila. Název začíná na <code>bloomia-zaloha</code>. Načíst jde i záloha ze staršího
    telefonu nebo z jiného prohlížeče, tak se data přenášejí.</p>
    <button class="btn" data-act="zaloha-nacist" style="margin-top:1.1rem">Vybrat soubor se zálohou</button>
    ${navrh ? navrhBlok(navrh) : ''}
  </section>`
}

// ------------------------------------------------------------- stav místa ---

function mistoBlok(stav: StavUloziste | null, fotekBajtu: number): string {
  if (!stav) {
    return `<section class="surface pad rise">
      <p class="eyebrow">Úložiště</p>
      <p class="soft" style="margin-top:.7rem">Zjišťuji stav…</p>
    </section>`
  }

  const trvale = stav.trvale
    ? 'Prohlížeč potvrdil, že data drží natrvalo.'
    : 'Prohlížeč data nedrží natrvalo. Při nedostatku místa je může uvolnit.'

  const misto =
    stav.zabrano !== null && stav.celkem !== null && stav.celkem > 0
      ? `<dt>Zabráno</dt><dd class="num">${esc(bajty(stav.zabrano))} z ${esc(bajty(stav.celkem))}</dd>`
      : ''

  return `<section class="surface pad rise">
    <p class="eyebrow">Úložiště</p>
    <p class="soft" style="margin-top:.7rem;line-height:1.7">${esc(trvale)}</p>
    <dl class="kv" style="margin-top:1rem">
      ${misto}
      <dt>Z toho fotky</dt><dd class="num">${esc(bajty(fotekBajtu))}</dd>
    </dl>
    ${
      !stav.trvale && stav.lzePozadat
        ? `<button class="btn btn-sm" data-act="zaloha-trvale" style="margin-top:1.1rem">Požádat o trvalé uložení</button>
           <p class="faint" style="margin-top:.8rem;font-size:.8125rem;line-height:1.6">Rozhodnutí je na
           prohlížeči a některé se neptají, jen se rozhodnou podle toho, jak často aplikaci otvíráte.
           ${jeApple() ? 'Na iPhonu tohle sedmidenní mazání nezruší, to umí jen přidání na plochu.' : ''}</p>`
        : ''
    }
  </section>`
}

// ----------------------------------------------------------------- selhání ---

/** Když se přestalo ukládat, je to to první, co musí být vidět. */
function selhaniBlok(): string {
  return `<section class="surface pad rise" style="border-color:var(--blush)">
    <p class="eyebrow">Pozor</p>
    <h2 class="display" style="font-size:1.35rem;margin-top:.4rem">Aplikace teď neukládá</h2>
    <p class="soft" style="margin-top:.7rem;line-height:1.7">Poslední pokus o uložení do prohlížeče
    selhal. Bývá to plným úložištěm zařízení nebo anonymním režimem. <strong>Všechno, co teď
    napíšete, zmizí po zavření záložky.</strong></p>
    <p class="soft" style="margin-top:.7rem;line-height:1.7">Udělejte si hned zálohu, ať o nic
    nepřijdete. Pak uvolněte místo v telefonu, nebo zkuste smazat některé fotky z dokumentů:
    ty zabírají nejvíc.</p>
    <button class="btn btn-primary" data-act="zaloha-ulozit" style="margin-top:1.1rem">Uložit zálohu hned</button>
  </section>`
}

// ---------------------------------------------------------------- obrazovka ---

export interface ZalohaData {
  lastBackupOn: IsoDate | null
  reminder: Reminder
  fotekBajtu: number
  neuklada: boolean
}

export function screenZaloha(v: ZalohaView, d: ZalohaData): string {
  return [
    head(
      'Vaše data',
      'Záloha a obnova',
      'Všechno, co jste zapsala, je jen ve vašem zařízení. Tady se to dá uložit stranou a zase načíst zpátky.',
    ),
    d.neuklada ? selhaniBlok() : '',
    rizikoBlok(),
    naPlochuBlok(v.lzeInstalovat),
    zalohaBlok(d.lastBackupOn, d.reminder, v.hlaska),
    obnovaBlok(v.navrh),
    mistoBlok(v.stav, d.fotekBajtu),

    `<section class="surface pad rise">
      <p class="eyebrow">Co v záloze je a co ne</p>
      <div class="prose" style="margin-top:.8rem">
        <p><strong>Je v ní všechno vaše:</strong> profil, deník, otázky pro lékaře, cykly,
        embrya, transfery, hodnoty z odběrů, léky, výdaje, dokumenty, dopisy i fotky.</p>
        <p><strong>Není v ní obsah aplikace.</strong> Články, checklisty a slovník se nezálohují,
        protože jsou součástí aplikace samotné. Soubor je tak menší a obsahuje jen to, co je
        skutečně vaše.</p>
        <p>Soubor není šifrovaný. Je to obyčejný text, který si můžete otevřít a přečíst.
        Zacházejte s ním jako se zdravotní dokumentací, protože to je: neposílejte ho nikam,
        kam byste nedala výsledky z kliniky.</p>
      </div>
    </section>`,
  ].join('')
}

/** Řádek do Nastavení, který sem vede. */
export function odkazNaZalohu(r: Reminder, neuklada: boolean): string {
  if (neuklada) {
    return `<p class="note" style="margin-top:.9rem">Aplikace teď neukládá. <a href="#/zaloha">Zjistit proč a zachránit data</a></p>`
  }
  if (r.level === 'zadna') return ''
  const naleh =
    r.level === 'durazna'
      ? 'Data máte jen v tomhle prohlížeči a zálohu zatím ne.'
      : 'Od poslední zálohy už nějaký čas uplynul.'
  return `<p class="note" style="margin-top:.9rem">${esc(naleh)} <a href="#/zaloha">Záloha a obnova</a></p>`
}
