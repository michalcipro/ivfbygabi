/**
 * Zámek aplikace.
 *
 * Nejpravděpodobnější únik u téhle aplikace není útočník. Je to partner,
 * matka nebo kolega, který vezme odemčený telefon. Deník o léčbě
 * neplodnosti je přitom to nejosobnější, co v něm je, a žena po neúspěšném
 * transferu často ještě nechce, aby to někdo věděl.
 *
 * ------------------------------------------------------------- CO NEDĚLÁ ---
 * Zámek **nešifruje uložená data**. Kdo umí otevřít vývojářské nástroje,
 * přečte si je i tak, a obrazovka to říká nahlas. Šifrovat je by znamenalo,
 * že zapomenutý kód je konec deníku, a ztráta všech zápisů je u téhle
 * aplikace horší riziko než pohled přes rameno.
 *
 * -------------------------------------------------------------- JAK ŽIJE ---
 * Odemčení platí do zavření záložky a drží se v paměti, ne v úložišti.
 * Zavřít aplikaci a otevřít ji znovu znamená zadat kód. Bez toho by zámek
 * chránil jen první spuštění a byl by ozdoba.
 */

import { kodSedi, kryptoJe, otiskKodu } from './krypto'
import { clearLock, lockData, lockOn, setLock } from './store'
import { esc } from './ui'

/** Odemčeno v tomhle běhu? Schválně jen v paměti. */
let odemceno = false

/** Kolik pokusů uživatelka spotřebovala. Jen brzda, ne trest. */
let pokusu = 0

let chyba = ''

export function jeZamceno(): boolean {
  return lockOn() && !odemceno
}

export function odemkni(): void {
  odemceno = true
  pokusu = 0
  chyba = ''
}

/** Po nastavení kódu je aplikace odemčená. Zamykat ji hned by bylo obtěžování. */
export async function nastavKod(kod: string): Promise<string | null> {
  if (!kryptoJe()) return 'Tenhle prohlížeč zámek neumí.'
  if (!/^\d{4,8}$/.test(kod)) return 'Kód musí mít čtyři až osm číslic.'
  const { sul, otisk } = await otiskKodu(kod)
  setLock(sul, otisk)
  odemkni()
  return null
}

export function zrusKod(): void {
  clearLock()
  odemkni()
}

export async function zkusOdemknout(kod: string): Promise<boolean> {
  const ok = await kodSedi(kod, lockData())
  if (ok) {
    odemkni()
    return true
  }
  pokusu++
  chyba = pokusu >= 5 ? 'Kód nesedí. Zkuste to za chvíli v klidu.' : 'Kód nesedí.'
  return false
}

/**
 * Zamykací obrazovka.
 *
 * Vlastní klávesnice, ne systémová: `inputmode="numeric"` na telefonu
 * otevře číselník, ale na některých Androidech se pod ním schová pole
 * a žena nevidí, kolik číslic už zadala. Tečky nad klávesnicí to řeší.
 */
export function screenZamek(): string {
  return `<div class="zamek">
    <div class="zamek-blok">
      <svg class="znak" width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="6.2" r="1.7" fill="#d79aa6"/>
        <circle cx="24" cy="11.9" r="1.95" fill="#b3748f"/>
        <circle cx="24" cy="17.7" r="2.2" fill="#c2506b"/>
        <path d="M23 46C8.6 34.2 0 25.2 0 15.4 0 6.9 6.3 0 14.1 0c4 0 7.4 2 8.9 5.1C24.5 2 27.9 0 31.9 0 39.7 0 46 6.9 46 15.4 46 25.2 37.4 34.2 23 46Z"
              fill="#c94f6b" transform="translate(14 22) scale(0.435)"/>
      </svg>
      <h1 class="display" style="font-size:1.5rem;margin-top:1rem">Zadejte kód</h1>
      <p class="soft" style="margin-top:.5rem;font-size:.9375rem;line-height:1.6">
        Aplikace je zamčená. Kód znáte jen vy.
      </p>

      <form class="zamek-form" data-act="lock-try" autocomplete="off">
        <label class="label" for="lock-kod" style="text-align:left">Kód</label>
        <input class="field" id="lock-kod" name="kod" type="password" inputmode="numeric"
               autocomplete="current-password" maxlength="8" placeholder="••••" autofocus>
        ${chyba ? `<p class="zamek-chyba">${esc(chyba)}</p>` : ''}
        <button class="btn btn-primary btn-block" type="submit" style="margin-top:1rem">Odemknout</button>
      </form>

      <p class="faint" style="margin-top:1.6rem;font-size:.8125rem;line-height:1.6">
        Kód chrání před tím, kdo vezme odemčený telefon. Nešifruje uložená
        data: kdo umí otevřít vývojářské nástroje prohlížeče, přečte si je
        i tak. Proto zapomenutý kód neznamená ztrátu deníku.
      </p>
      <button class="btn btn-sm btn-ghost" data-act="lock-forgot" style="margin-top:1rem">
        Zapomněla jsem kód
      </button>
    </div>
  </div>`
}

/**
 * Co dělat, když kód nezná.
 *
 * Data se nesmažou. Zámek se dá vypnout, protože nešifruje, a přiznat to
 * je poctivější než předstírat ochranu, kterou aplikace nemá.
 */
export function zapomenutyKod(): string {
  return [
    'Kód se nikam neposílá a nedá se obnovit.',
    '',
    'Protože zámek data nešifruje, dá se vypnout a o zápisy nepřijdete.',
    'Chcete zámek vypnout?',
  ].join('\n')
}
