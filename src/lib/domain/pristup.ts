import type { IsoDate } from './profile'
import type { Listek } from './predplatne'
import { pristupPlati } from './predplatne'

/**
 * Placená zeď.
 *
 * ------------------------------------------------------------- CO DĚLÁ ---
 * Aplikace funguje jen po zaplacení. Bez platného předplatného se místo
 * obsahu kreslí zeď, která říká, co BlooMia je, kolik stojí a kde se
 * zaplatí.
 *
 * ------------------------------------------------------- CO NEZAMYKÁ ---
 * Čtyři obrazovky musí jít otevřít vždycky, i bez koruny:
 *
 *  - **Předplatné**, protože jinak by nešlo zaplatit a zeď by byla past.
 *  - **Záloha**, protože zdravotní záznamy jsou její, ne naše. Držet je
 *    za platbu by bylo proti GDPR (právo na přístup a na přenositelnost)
 *    a proti tomu, co slibují obchodní podmínky.
 *  - **Nastavení**, kvůli zámku, motivu a smazání účtu.
 *  - **Napište mi**, protože s problémem s platbou se musí dát ozvat.
 *
 * Nic z toho se nikdy nesmí dostat za zeď, ani omylem. Hlídá to test.
 *
 * --------------------------------------------------- PROČ SE DÁ VYPNOUT ---
 * `zedPlati` je vypínač. Dokud není v sestavení veřejný klíč, nedá se
 * ověřit žádný lístek, a kdyby zeď přesto platila, zamkla by všechny.
 * Zeď se proto zapne teprve tehdy, když je čím ověřovat.
 */

/** Obrazovky, na které se zeď nikdy nevztahuje. */
export const VOLNE_OBRAZOVKY: readonly string[] = [
  'clenstvi',
  'zaloha',
  'nastaveni',
  'napiste-mi',
]

export function jeVolnaObrazovka(id: string): boolean {
  return VOLNE_OBRAZOVKY.includes(id)
}

export interface DotazNaPristup {
  /** Je platební systém v provozu? Bez veřejného klíče je zeď vypnutá. */
  zedPlati: boolean
  /** Ověřený lístek, nebo null. */
  listek: Listek | null
  dnes: IsoDate
  /** Základ cesty, tedy `clenstvi` z `clenstvi/necoDalsiho`. */
  obrazovka: string
}

/** Má se místo obsahu vykreslit zeď? */
export function zavreno(d: DotazNaPristup): boolean {
  if (!d.zedPlati) return false
  if (jeVolnaObrazovka(d.obrazovka)) return false
  return !pristupPlati(d.listek, d.dnes)
}
