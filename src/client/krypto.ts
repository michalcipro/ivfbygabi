/**
 * Šifrování a otisky hesel.
 *
 * Jediné místo v aplikaci, kde se pracuje s kryptografií. Používá výhradně
 * `crypto.subtle`, tedy to, co má prohlížeč zabudované. Vlastní šifra by
 * v aplikaci o zdravotních údajích byla neomluvitelná.
 *
 * ----------------------------------------------------------------- K ČEMU ---
 * 1. Otisk kódu pro zámek aplikace. Kód se neukládá, ukládá se jeho otisk
 *    a sůl. Kdo se dostane do úložiště, kód z něj nepřečte.
 * 2. Šifrování zálohy heslem. Soubor se zálohou obsahuje úplně všechno,
 *    včetně fotek, a končí ve složce Stažené, kterou telefony běžně
 *    synchronizují do cloudu.
 *
 * ------------------------------------------------------------ CO TO NENÍ ---
 * Zámek aplikace **nešifruje uložená data**. Chrání před tím, kdo vezme
 * odemčený telefon, ne před tím, kdo umí otevřít vývojářské nástroje.
 * Kdyby data šifroval, znamenalo by zapomenuté heslo ztrátu celého deníku
 * a to je u téhle aplikace horší riziko než pohled přes rameno.
 *
 * Šifrovaná záloha naopak šifruje doopravdy. Tam ztráta hesla znamená, že
 * soubor nikdo neotevře, a obrazovka to musí říct předem.
 */

const ITERACI = 150_000
const SUL_BAJTU = 16
const IV_BAJTU = 12

function nahodne(n: number): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(n))
}

function naText(b: ArrayBuffer | Uint8Array): string {
  const pole = b instanceof Uint8Array ? b : new Uint8Array(b)
  let s = ''
  for (const bajt of pole) s += String.fromCharCode(bajt)
  return btoa(s)
}

function zTextu(s: string): Uint8Array {
  const bin = atob(s)
  const out = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
  return out
}

/** Je kryptografie vůbec k dispozici? Na `http://` bez TLS není. */
export function kryptoJe(): boolean {
  return typeof crypto !== 'undefined' && typeof crypto.subtle !== 'undefined'
}

async function klic(heslo: string, sul: Uint8Array, ucel: 'wrap' | 'sifra'): Promise<CryptoKey> {
  const zaklad = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(heslo),
    'PBKDF2',
    false,
    ['deriveBits', 'deriveKey'],
  )
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: sul as unknown as BufferSource, iterations: ITERACI, hash: 'SHA-256' },
    zaklad,
    { name: 'AES-GCM', length: 256 },
    ucel === 'wrap',
    ['encrypt', 'decrypt'],
  )
}

// ------------------------------------------------------------- zámek kódem ---

export interface Otisk {
  sul: string
  otisk: string
}

/** Spočítá otisk kódu. Sůl je nová, pokud se nepředá. */
export async function otiskKodu(kod: string, sulText?: string): Promise<Otisk> {
  const sul = sulText ? zTextu(sulText) : nahodne(SUL_BAJTU)
  const zaklad = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(kod),
    'PBKDF2',
    false,
    ['deriveBits'],
  )
  const bity = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: sul as unknown as BufferSource, iterations: ITERACI, hash: 'SHA-256' },
    zaklad,
    256,
  )
  return { sul: naText(sul), otisk: naText(bity) }
}

/**
 * Sedí kód?
 *
 * Porovnává se v konstantním čase. Rozdíl je tady sice nepatrný, ale
 * porovnání řetězců přes `===` je zvyk, který se nemá pěstovat.
 */
export async function kodSedi(kod: string, ulozeny: Otisk): Promise<boolean> {
  try {
    const { otisk } = await otiskKodu(kod, ulozeny.sul)
    if (otisk.length !== ulozeny.otisk.length) return false
    let rozdil = 0
    for (let i = 0; i < otisk.length; i++) rozdil |= otisk.charCodeAt(i) ^ ulozeny.otisk.charCodeAt(i)
    return rozdil === 0
  } catch {
    return false
  }
}

// ----------------------------------------------------------- šifrovaná data ---

export interface Zamceno {
  sul: string
  iv: string
  data: string
}

export async function zasifruj(text: string, heslo: string): Promise<Zamceno> {
  const sul = nahodne(SUL_BAJTU)
  const iv = nahodne(IV_BAJTU)
  const k = await klic(heslo, sul, 'sifra')
  const ct = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv as unknown as BufferSource },
    k,
    new TextEncoder().encode(text),
  )
  return { sul: naText(sul), iv: naText(iv), data: naText(ct) }
}

/** Vrací `null`, když heslo nesedí nebo je soubor poškozený. */
export async function odsifruj(z: Zamceno, heslo: string): Promise<string | null> {
  try {
    const k = await klic(heslo, zTextu(z.sul), 'sifra')
    const otevreno = await crypto.subtle.decrypt(
      { name: 'AES-GCM', iv: zTextu(z.iv) as unknown as BufferSource },
      k,
      zTextu(z.data) as unknown as BufferSource,
    )
    return new TextDecoder().decode(otevreno)
  } catch {
    return null
  }
}
