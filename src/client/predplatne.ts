import { prectiListek, type Listek } from '../lib/domain/predplatne'

/**
 * Předplatné: rozhovor se Stripe a ověření podpisu.
 *
 * ------------------------------------------------------------- JAK TO BĚŽÍ ---
 * Aplikace nemá účty ani databázi. Má jen **klíč**, ve kterém je číslo
 * jejího předplatného ve Stripe. S ním se obrací na čtyři malé funkce
 * u Vercelu. Ty se zeptají Stripe a vrátí podepsaný **lístek** s datem
 * platnosti, datem obnovení, cenou a stavem.
 *
 * Podpis se ověřuje tady, v prohlížeči, veřejným klíčem. Soukromý klíč je
 * jen na serveru, takže lístek nejde vyrobit ani upravit v telefonu.
 *
 * Dokud nejsou ve Vercelu klíče od Stripe, funkce odpovídají „nenastaveno“
 * a obrazovka to řekne narovinu. Je to tentýž stav, jaký popisují obchodní
 * podmínky: placené předplatné zatím není v provozu.
 */

/** Veřejný klíč k ověřování lístků. Doplňuje ho `scripts/build-app.ts`. */
const VEREJNY_KLIC = '__VEREJNY_KLIC__'

/**
 * Je platební systém v provozu?
 *
 * Bez veřejného klíče se nedá ověřit žádný lístek, takže by placená zeď
 * zamkla úplně všechny, i ty, kdo zaplatili. Proto se zeď řídí tímhle:
 * co se nedá ověřit, to se nezamyká.
 */
export const PLATBY_ZAPNUTE = VEREJNY_KLIC.length > 0 && !VEREJNY_KLIC.startsWith('__')

export type Vysledek =
  | { ok: true; url?: string; klic?: string; listek?: string }
  | { ok: false; duvod: 'nenastaveno' | 'sit' | 'chyba'; zprava: string }

const HLASKY: Record<'nenastaveno' | 'sit' | 'chyba', string> = {
  nenastaveno:
    'Placené předplatné zatím není v provozu. Aplikace je dostupná bez omezení a nic se vám neúčtuje.',
  sit: 'Nepodařilo se spojit se serverem. Zkuste to, až budete na síti.',
  chyba: 'Něco se nepovedlo. Zkuste to prosím znovu, nebo napište na terapie@priznejsi.cz.',
}

async function volej(cesta: string, telo: Record<string, unknown> = {}): Promise<Vysledek> {
  try {
    const res = await fetch(`/api/${cesta}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(telo),
      cache: 'no-store',
    })

    // Server hlásí chybějící nastavení vlastním kódem, ať se nepoplete
    // s výpadkem sítě. Pro ženu je to úplně jiná zpráva.
    if (res.status === 503) return { ok: false, duvod: 'nenastaveno', zprava: HLASKY.nenastaveno }
    if (!res.ok) return { ok: false, duvod: 'chyba', zprava: HLASKY.chyba }

    const data = (await res.json()) as Record<string, unknown>
    return {
      ok: true,
      url: typeof data.url === 'string' ? data.url : undefined,
      klic: typeof data.klic === 'string' ? data.klic : undefined,
      listek: typeof data.listek === 'string' ? data.listek : undefined,
    }
  } catch {
    return { ok: false, duvod: 'sit', zprava: HLASKY.sit }
  }
}

/** Založí platbu a vrátí adresu zabezpečené stránky Stripe. */
export function zacniPlatbu(): Promise<Vysledek> {
  return volej('checkout', { zpet: `${location.origin}/app/#/clenstvi` })
}

/** Zruší předplatné ke konci zaplaceného období. */
export function zrusPredplatne(klic: string): Promise<Vysledek> {
  return volej('zrusit', { klic })
}

/** Otevře zákaznický portál Stripe, kde jde vyměnit kartu. */
export function portalPlateb(klic: string): Promise<Vysledek> {
  return volej('portal', { klic, zpet: `${location.origin}/app/#/clenstvi` })
}

/** Zeptá se Stripe, jestli předplatné běží, a vrátí čerstvý lístek. */
export function obnovStav(klic: string): Promise<Vysledek> {
  return volej('stav', { klic })
}

/** Dekódování base64url na bajty. */
function zBase64Url(s: string): Uint8Array {
  const doplneno = s.replace(/-/g, '+').replace(/_/g, '/')
  const bin = atob(doplneno + '='.repeat((4 - (doplneno.length % 4)) % 4))
  return Uint8Array.from(bin, (c) => c.charCodeAt(0))
}

/**
 * Ověří podpis lístku.
 *
 * Bez platného podpisu je lístek jen text v úložišti prohlížeče, který si
 * tam může napsat kdokoliv. Teprve podpis z něj dělá důkaz zaplacení.
 *
 * Používá se ECDSA nad křivkou P-256, protože tu umí i starší prohlížeče.
 * Novější Ed25519 by bylo hezčí, ale na telefonech, kde aplikace běží,
 * se na něj spolehnout nedá.
 */
export async function overListek(text: string): Promise<Listek | null> {
  const obsah = prectiListek(text)
  if (!obsah) return null
  if (!PLATBY_ZAPNUTE) return null
  if (typeof crypto === 'undefined' || !crypto.subtle) return null

  const [telo, podpis] = text.split('.')
  try {
    const klic = await crypto.subtle.importKey(
      'jwk',
      JSON.parse(atob(VEREJNY_KLIC)) as JsonWebKey,
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['verify'],
    )
    const sedi = await crypto.subtle.verify(
      { name: 'ECDSA', hash: 'SHA-256' },
      klic,
      zBase64Url(podpis) as BufferSource,
      new TextEncoder().encode(telo) as BufferSource,
    )
    return sedi ? obsah : null
  } catch {
    return null
  }
}
