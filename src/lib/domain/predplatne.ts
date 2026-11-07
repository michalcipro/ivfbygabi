import type { IsoDate } from './profile'
import { daysBetween, formatCzechDate } from './dates'
import { prelozit, vzor } from '../i18n'

/**
 * Předplatné.
 *
 * ------------------------------------------------------------- JAK TO STOJÍ ---
 * Aplikace nemá účty ani server s databází. Stav předplatného drží Stripe
 * a aplikace si ho nese ve dvou kusech:
 *
 *  - **klíč** je dlouhodobý. Je v něm jen číslo předplatného ve Stripe,
 *    nic osobního. Slouží k tomu, aby se šlo Stripe zeptat.
 *  - **lístek** je krátkodobý, podepsaný a nese datum platnosti, datum
 *    příštího obnovení, cenu a stav. Aplikace si ho ověří sama, offline.
 *
 * Tenhle soubor je čistá logika kolem lístku: jak se čte a co z něj plyne.
 * Podpis se ověřuje v prohlížeči, protože na to je potřeba `crypto.subtle`.
 * Sem to nepatří, ať se dá všechno ostatní testovat bez prohlížeče.
 */

/** Co Stripe říká o předplatném. */
export type StavPredplatneho =
  /** Nikdy nebylo, nebo už dávno skončilo. */
  | 'zadne'
  /** Běží a obnoví se. */
  | 'bezi'
  /** Zrušeno, ale zaplacené období ještě běží. */
  | 'konci'
  /** Platba neprošla, Stripe to zkouší znovu. */
  | 'potize'

export const STAVY: StavPredplatneho[] = ['zadne', 'bezi', 'konci', 'potize']

/** Obsah podepsaného lístku. */
export interface Listek {
  /** Do kdy platí přístup. Po tomhle dni se placená část zamkne. */
  platiDo: IsoDate
  /** Kdy se předplatné obnoví. U zrušeného nebo skončeného null. */
  obnoviSe: IsoDate | null
  /** Cena za období v korunách. */
  cena: number
  stav: StavPredplatneho
}

/**
 * Lístek tak, jak leží v datech.
 *
 * `podpis` se kontroluje v prohlížeči. Dokud se nezkontroluje, bere se
 * obsah jen jako údaj k zobrazení, ne jako důkaz zaplacení.
 */
export interface UlozenyListek {
  /** Text lístku: `<obsah>.<podpis>`, obojí base64url. */
  text: string
  /** Rozbalený obsah. Ukládá se kvůli tomu, aby šel ukázat hned. */
  obsah: Listek | null
  /** Kdy se naposledy povedlo ověřit stav u Stripe. */
  overenoKdy: IsoDate | null
}

export function prazdnyListek(): UlozenyListek {
  return { text: '', obsah: null, overenoKdy: null }
}

/** Dekódování base64url bez závislosti na prohlížeči. */
function zBase64Url(s: string): string {
  const doplneno = s.replace(/-/g, '+').replace(/_/g, '/')
  const chybi = (4 - (doplneno.length % 4)) % 4
  const cely = doplneno + '='.repeat(chybi)
  const bin =
    typeof atob === 'function'
      ? atob(cely)
      : Buffer.from(cely, 'base64').toString('binary')
  // Obsah je JSON v UTF-8, takže se bajty musí složit zpátky na znaky.
  const bajty = Uint8Array.from(bin, (c) => c.charCodeAt(0))
  return new TextDecoder().decode(bajty)
}

/**
 * Přečte obsah lístku. Nic neověřuje, jen rozbaluje.
 *
 * Vrací null, kdykoliv text nedává smysl. Poškozený lístek nesmí shodit
 * obrazovku: žena uvidí, že předplatné není ověřené, a může ho obnovit.
 */
export function prectiListek(text: string): Listek | null {
  if (typeof text !== 'string' || text.length === 0) return null
  const casti = text.split('.')
  if (casti.length !== 2) return null

  try {
    const o = JSON.parse(zBase64Url(casti[0])) as Record<string, unknown>
    const platiDo = o.platiDo
    const cena = o.cena
    const stav = o.stav
    if (typeof platiDo !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(platiDo)) return null
    if (typeof cena !== 'number' || !Number.isFinite(cena)) return null
    if (typeof stav !== 'string' || !STAVY.includes(stav as StavPredplatneho)) return null
    const obnoviSe =
      typeof o.obnoviSe === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(o.obnoviSe) ? o.obnoviSe : null
    return { platiDo, obnoviSe, cena, stav: stav as StavPredplatneho }
  } catch {
    return null
  }
}

/** Kolik dní přístupu zbývá. Záporné číslo znamená, že už vypršel. */
export function zbyvaDni(platiDo: IsoDate, dnes: IsoDate): number {
  return daysBetween(dnes, platiDo)
}

/** Platí přístup ještě dnes? Poslední den se počítá celý. */
export function pristupPlati(l: Listek | null, dnes: IsoDate): boolean {
  if (!l) return false
  return zbyvaDni(l.platiDo, dnes) >= 0
}

/**
 * Co se má na obrazovce napsat.
 *
 * ------------------------------------------------------------- PROČ TO TU JE ---
 * Upomínka před obnovením se neposílá, takže tahle obrazovka je jediné
 * místo, kde se žena dozví, kdy a kolik se strhne. Věta se proto skládá
 * tady, s testy, ne nahodile v šabloně.
 */
export interface PopisPredplatneho {
  /** Krátké označení nad částkou. */
  stitek: string
  /** Hlavní věta. */
  veta: string
  /** Upřesnění pod ní, nebo prázdné. */
  detail: string
  /** Má se nabízet zaplacení? */
  nabidniKoupit: boolean
  /** Má se nabízet zrušení? */
  nabidniZrusit: boolean
  /** Má se nabízet oprava platebních údajů? */
  nabidniKartu: boolean
}

export function popisPredplatneho(l: Listek | null, dnes: IsoDate): PopisPredplatneho {
  if (!l || l.stav === 'zadne') {
    return {
      stitek: 'Neaktivní',
      veta: 'Předplatné zatím nemáte.',
      detail: '',
      nabidniKoupit: true,
      nabidniZrusit: false,
      nabidniKartu: false,
    }
  }

  const zbyva = zbyvaDni(l.platiDo, dnes)

  if (zbyva < 0) {
    return {
      stitek: 'Skončilo',
      veta: 'Předplatné skončilo.',
      detail: 'Vaše záznamy zůstávají ve vašem zařízení. O nic jste nepřišla.',
      nabidniKoupit: true,
      nabidniZrusit: false,
      nabidniKartu: false,
    }
  }

  if (l.stav === 'potize') {
    return {
      stitek: 'Platba neprošla',
      veta: 'Poslední platbu se nepodařilo provést.',
      detail: `Zkusí se to znovu. Přístup vám zatím zůstává, ${dnyText(zbyva)}. Pokud se platba nepovede ani opakovaně, předplatné skončí.`,
      nabidniKoupit: false,
      nabidniZrusit: true,
      nabidniKartu: true,
    }
  }

  if (l.stav === 'konci') {
    return {
      stitek: 'Zrušeno',
      veta: 'Předplatné je zrušené a už se neobnoví.',
      detail: `Přístup vám zůstává ${dnyText(zbyva)}. Nic dalšího se vám nestrhne.`,
      nabidniKoupit: true,
      nabidniZrusit: false,
      nabidniKartu: false,
    }
  }

  // Běží. Tohle je ta věta, kvůli které obrazovka existuje.
  const detail = l.obnoviSe
    ? vzor(
        'Obnoví se {} a strhne se {} Kč. Zrušit to můžete kdykoliv do té doby.',
        denText(l.obnoviSe),
        l.cena,
      )
    : prelozit('Zrušit to můžete kdykoliv.')

  return {
    stitek: 'Aktivní',
    veta: 'Předplatné běží.',
    detail,
    nabidniKoupit: false,
    nabidniZrusit: true,
    nabidniKartu: true,
  }
}

/** „ještě 12 dní“, „ještě jeden den“, „do konce dneška“. */
export function dnyText(zbyva: number): string {
  if (zbyva <= 0) return 'do konce dneška'
  if (zbyva === 1) return 'ještě jeden den'
  if (zbyva >= 2 && zbyva <= 4) return `ještě ${zbyva} dny`
  return `ještě ${zbyva} dní`
}

/** Datum v podobě, jakou čte člověk: „5. prosince“. */
// Měsíce měl tenhle soubor vlastní, třetí kopii v projektu. Jazyk už umí
// `formatCzechDate`, a tři kopie téhož seznamu znamenají, že se u cizích
// jazyků opraví jen některé.
function denText(iso: IsoDate): string {
  return formatCzechDate(iso, { year: false })
}
