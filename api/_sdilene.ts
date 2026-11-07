/**
 * Společný základ serverových funkcí.
 *
 * ------------------------------------------------------------- CO TU BĚŽÍ ---
 * Čtyři malé funkce u Vercelu, které stojí mezi aplikací a Stripe. Jsou tu
 * proto, že tajný klíč ke Stripe nesmí do prohlížeče, a proto, že podepsat
 * lístek umí jen ten, kdo má soukromý klíč.
 *
 * **Žádná databáze.** Stav předplatného drží Stripe. Aplikace si nese jen
 * podepsaný klíč s číslem předplatného a funkce se s ním Stripe ptá. Nemáme
 * tedy kde ztratit ani vyzradit nic cizího a není co zálohovat.
 *
 * **Žádné osobní údaje.** Funkce nevidí jméno, e-mail ani zdravotní
 * záznamy. Pracuje s identifikátorem předplatného a s čísly z ceníku.
 *
 * Soubor začíná podtržítkem, takže z něj Vercel nedělá vlastní funkci.
 */

/** Jen to z požadavku, co používáme. Vyhýbá se závislosti na typech Vercelu. */
export interface Pozadavek {
  method?: string
  body?: unknown
  query?: Record<string, string | string[] | undefined>
}

export interface Odpoved {
  status(kod: number): Odpoved
  json(telo: unknown): void
  setHeader(jmeno: string, hodnota: string): void
  end(telo?: string): void
}

const STRIPE = 'https://api.stripe.com/v1'

/** Čte proměnnou prostředí. Prázdná znamená „není nastaveno“. */
function env(jmeno: string): string {
  const v = process.env[jmeno]
  return typeof v === 'string' ? v.trim() : ''
}

/**
 * Je všechno nastavené?
 *
 * Dokud nejsou klíče ve Vercelu, funkce odpovídají 503 a aplikace to řekne
 * narovinu. Je to tentýž stav, jaký popisují obchodní podmínky: placené
 * předplatné zatím není v provozu. Tvářit se, že se něco nepovedlo, by
 * bylo matoucí: nic se nepokazilo, jen to ještě neběží.
 */
export function nastaveno(): boolean {
  return Boolean(env('STRIPE_SECRET_KEY') && env('BLOOMIA_PODPIS_KLIC'))
}

/** Tělo požadavku jako objekt. Nesmysl se bere jako prázdno. */
export function telo(req: Pozadavek): Record<string, unknown> {
  const b = req.body
  if (b && typeof b === 'object') return b as Record<string, unknown>
  if (typeof b === 'string') {
    try {
      const o = JSON.parse(b) as unknown
      if (o && typeof o === 'object') return o as Record<string, unknown>
    } catch {
      return {}
    }
  }
  return {}
}

/** Stripe čeká formulářové kódování, a to i u vnořených hodnot. */
function naFormular(o: Record<string, unknown>, predpona = ''): string[] {
  const kusy: string[] = []
  for (const [k, v] of Object.entries(o)) {
    if (v === undefined || v === null) continue
    const jmeno = predpona ? `${predpona}[${k}]` : k
    if (typeof v === 'object') kusy.push(...naFormular(v as Record<string, unknown>, jmeno))
    else kusy.push(`${encodeURIComponent(jmeno)}=${encodeURIComponent(String(v))}`)
  }
  return kusy
}

/** Zavolá Stripe. Vrací rozbalenou odpověď, nebo vyhodí srozumitelnou chybu. */
export async function stripe(
  cesta: string,
  data?: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const res = await fetch(`${STRIPE}${cesta}`, {
    method: data ? 'POST' : 'GET',
    headers: {
      Authorization: `Bearer ${env('STRIPE_SECRET_KEY')}`,
      ...(data ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
    },
    ...(data ? { body: naFormular(data).join('&') } : {}),
  })

  const o = (await res.json()) as Record<string, unknown>
  if (!res.ok) {
    const chyba = (o.error ?? {}) as Record<string, unknown>
    throw new Error(typeof chyba.message === 'string' ? chyba.message : `Stripe vrátil ${res.status}`)
  }
  return o
}

// ------------------------------------------------------------- podepisování ---

const B64 = {
  zakoduj: (b: Uint8Array | ArrayBuffer) =>
    Buffer.from(b as Uint8Array).toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, ''),
  dekoduj: (s: string) => new Uint8Array(Buffer.from(s.replace(/-/g, '+').replace(/_/g, '/'), 'base64')),
}

let klicPamet: CryptoKey | null = null

/**
 * Soukromý klíč k podepisování.
 *
 * V proměnné prostředí leží JWK zakódovaný base64. Načte se jednou a drží
 * se v paměti funkce, aby se při každém volání nerozbaloval znovu.
 */
async function podpisovyKlic(): Promise<CryptoKey> {
  if (klicPamet) return klicPamet
  const jwk = JSON.parse(Buffer.from(env('BLOOMIA_PODPIS_KLIC'), 'base64').toString('utf8')) as JsonWebKey
  klicPamet = await crypto.subtle.importKey('jwk', jwk, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['sign'])
  return klicPamet
}

/**
 * Podepíše obsah.
 *
 * ECDSA nad křivkou P-256, protože ji umí i starší telefony. Novější
 * Ed25519 by bylo hezčí, ale prohlížeče, kde aplikace běží, ho neznají
 * všechny.
 */
export async function podepis(obsah: Record<string, unknown>): Promise<string> {
  const telo = B64.zakoduj(new TextEncoder().encode(JSON.stringify(obsah)))
  const podpis = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    await podpisovyKlic(),
    new TextEncoder().encode(telo),
  )
  return `${telo}.${B64.zakoduj(podpis)}`
}

/**
 * Ověří klíč předplatného a vytáhne z něj číslo předplatného.
 *
 * Klíč je to jediné, čím se žena prokazuje. Nemá účet ani heslo, takže
 * tenhle podpis je celá autorizace. Proto se kontroluje vždy, i u čtení.
 */
export async function cisloPredplatneho(klic: unknown): Promise<string | null> {
  if (typeof klic !== 'string') return null
  const casti = klic.split('.')
  if (casti.length !== 3 || casti[0] !== 'k') return null

  try {
    const jwk = JSON.parse(Buffer.from(env('BLOOMIA_PODPIS_KLIC'), 'base64').toString('utf8')) as JsonWebKey
    // K ověření stačí veřejná část. Z JWK se vynechá soukromý skalár.
    const verejny = { ...jwk, d: undefined, key_ops: ['verify'] }
    const k = await crypto.subtle.importKey('jwk', verejny, { name: 'ECDSA', namedCurve: 'P-256' }, false, ['verify'])
    const sedi = await crypto.subtle.verify(
      { name: 'ECDSA', hash: 'SHA-256' },
      k,
      B64.dekoduj(casti[2]),
      new TextEncoder().encode(casti[1]),
    )
    if (!sedi) return null
    const o = JSON.parse(Buffer.from(casti[1].replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8')) as {
      sub?: unknown
    }
    return typeof o.sub === 'string' && o.sub.startsWith('sub_') ? o.sub : null
  } catch {
    return null
  }
}

/** Vyrobí klíč předplatného. Je v něm jen číslo předplatného, nic jiného. */
export async function udelejKlic(sub: string): Promise<string> {
  return `k.${await podepis({ sub })}`
}

// ------------------------------------------------------------------ lístek ---

const DEN = 86_400
/** Kolik dní přístup přežije výpadek sítě po obnovení. */
const ODKLAD = 3

function naDatum(unix: number): string {
  return new Date(unix * 1000).toISOString().slice(0, 10)
}

/**
 * Přeloží předplatné ze Stripe na lístek pro aplikaci.
 *
 * Konec období umí Stripe vracet na předplatném i na jeho položce, podle
 * verze rozhraní. Čte se proto obojí, aby upgrade Stripe nezamkl aplikaci
 * všem ženám najednou.
 */
export async function listekZPredplatneho(p: Record<string, unknown>): Promise<string> {
  const polozky = ((p.items as Record<string, unknown>)?.data ?? []) as Record<string, unknown>[]
  const prvni = polozky[0] ?? {}
  const konec =
    (typeof p.current_period_end === 'number' ? p.current_period_end : 0) ||
    (typeof prvni.current_period_end === 'number' ? prvni.current_period_end : 0) ||
    Math.floor(Date.now() / 1000)

  const cenik = (prvni.price ?? {}) as Record<string, unknown>
  const cena = typeof cenik.unit_amount === 'number' ? Math.round(cenik.unit_amount / 100) : 0

  const stav = p.status
  const zrusi = p.cancel_at_period_end === true

  let nas: 'zadne' | 'bezi' | 'konci' | 'potize' = 'zadne'
  if (stav === 'active' || stav === 'trialing') nas = zrusi ? 'konci' : 'bezi'
  else if (stav === 'past_due' || stav === 'unpaid') nas = 'potize'

  // Zrušené předplatné dobíhá přesně do konce zaplaceného období, bez
  // odkladu. Tak to slibují obchodní podmínky a ani o den víc.
  const odklad = nas === 'bezi' || nas === 'potize' ? ODKLAD * DEN : 0

  return podepis({
    platiDo: naDatum(konec + odklad),
    obnoviSe: nas === 'bezi' || nas === 'potize' ? naDatum(konec) : null,
    cena,
    stav: nas,
  })
}

// ------------------------------------------------------------- odpovědi ---

export function neniNastaveno(res: Odpoved): void {
  res.status(503).json({ duvod: 'nenastaveno' })
}

export function spatnyPozadavek(res: Odpoved, zprava: string): void {
  res.status(400).json({ duvod: 'chyba', zprava })
}

/** Chyba se loguje bez podrobností, ať se do záznamů nedostane nic cizího. */
export function selhalo(res: Odpoved, e: unknown): void {
  console.error('stripe:', e instanceof Error ? e.message : 'neznámá chyba')
  res.status(500).json({ duvod: 'chyba' })
}
