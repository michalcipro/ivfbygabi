import {
  cisloPredplatneho,
  nastaveno,
  neniNastaveno,
  selhalo,
  spatnyPozadavek,
  stripe,
  telo,
  type Odpoved,
  type Pozadavek,
} from './_sdilene'

const ADRESA = (process.env.BLOOMIA_ADRESA ?? 'https://mybloomia.com').replace(/\/+$/, '')

/**
 * Zákaznický portál Stripe.
 *
 * Tady si žena vymění kartu nebo si prohlédne doklady. Běží to u Stripe,
 * takže se u nás neobjeví ani číslo karty, ani fakturační adresa.
 */
export default async function handler(req: Pozadavek, res: Odpoved): Promise<void> {
  if (!nastaveno()) return neniNastaveno(res)

  const sub = await cisloPredplatneho(telo(req).klic)
  if (!sub) return spatnyPozadavek(res, 'Klíč předplatného není platný.')

  try {
    const p = await stripe(`/subscriptions/${encodeURIComponent(sub)}`)
    if (typeof p.customer !== 'string') return spatnyPozadavek(res, 'K předplatnému chybí zákazník.')

    const sezeni = await stripe('/billing_portal/sessions', {
      customer: p.customer,
      return_url: `${ADRESA}/app/#/clenstvi`,
    })
    res.status(200).json({ url: sezeni.url })
  } catch (e) {
    selhalo(res, e)
  }
}
