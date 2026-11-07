import {
  nastaveno,
  neniNastaveno,
  selhalo,
  stripe,
  type Odpoved,
  type Pozadavek,
} from './_sdilene.js'

/** Adresa webu. Nebere se z požadavku, aby z toho nešlo udělat přesměrování jinam. */
const ADRESA = (process.env.BLOOMIA_ADRESA ?? 'https://mybloomia.com').replace(/\/+$/, '')

/**
 * Založí platbu.
 *
 * Vrací adresu zabezpečené stránky Stripe. Číslo karty se tím pádem
 * v aplikaci ani na našem serveru neobjeví nikdy, což je přesně to, co
 * slibují obchodní podmínky i zásady ochrany údajů.
 *
 * Po zaplacení se žena vrátí na `/api/hotovo`, které jí vydá klíč.
 */
export default async function handler(req: Pozadavek, res: Odpoved): Promise<void> {
  if (!nastaveno()) return neniNastaveno(res)

  const cenik = (process.env.STRIPE_PRICE_ID ?? '').trim()
  if (!cenik) return neniNastaveno(res)

  try {
    const sezeni = await stripe('/checkout/sessions', {
      mode: 'subscription',
      line_items: { 0: { price: cenik, quantity: 1 } },
      success_url: `${ADRESA}/api/hotovo?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${ADRESA}/app/#/clenstvi`,
      locale: 'cs',
      // Doklad ke každé platbě slibují obchodní podmínky, bez e-mailu
      // by se neměl kam poslat.
      customer_creation: 'always',
    })
    res.status(200).json({ url: sezeni.url })
  } catch (e) {
    selhalo(res, e)
  }
}
