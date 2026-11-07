import {
  listekZPredplatneho,
  nastaveno,
  selhalo,
  stripe,
  udelejKlic,
  type Odpoved,
  type Pozadavek,
} from './_sdilene.js'

const ADRESA = (process.env.BLOOMIA_ADRESA ?? 'https://mybloomia.com').replace(/\/+$/, '')

/**
 * Návrat po zaplacení.
 *
 * Stripe sem ženu pošle, jakmile platba projde. Funkce si u Stripe ověří,
 * že sezení opravdu skončilo zaplacením, vydá klíč i první lístek a pošle
 * ji zpátky do aplikace.
 *
 * Klíč jde v adrese před mřížkou, ne za ní. Za mřížkou má aplikace vlastní
 * trasy a klíč by jí tam přepsal cestu.
 */
export default async function handler(req: Pozadavek, res: Odpoved): Promise<void> {
  const zpet = (duvod: string) => {
    res.setHeader('Location', `${ADRESA}/app/?stav=${duvod}#/clenstvi`)
    res.status(302).end()
  }

  if (!nastaveno()) return zpet('nenastaveno')

  const id = req.query?.session_id
  if (typeof id !== 'string' || !id.startsWith('cs_')) return zpet('chyba')

  try {
    const sezeni = await stripe(`/checkout/sessions/${encodeURIComponent(id)}?expand[]=subscription`)
    if (sezeni.payment_status !== 'paid' && sezeni.status !== 'complete') return zpet('nezaplaceno')

    const p = sezeni.subscription as Record<string, unknown> | null
    if (!p || typeof p.id !== 'string') return zpet('chyba')

    const klic = await udelejKlic(p.id)
    const listek = await listekZPredplatneho(p)

    res.setHeader('Location', `${ADRESA}/app/?k=${encodeURIComponent(klic)}&l=${encodeURIComponent(listek)}#/clenstvi`)
    res.status(302).end()
  } catch (e) {
    selhalo(res, e)
  }
}
