import {
  cisloPredplatneho,
  listekZPredplatneho,
  nastaveno,
  neniNastaveno,
  selhalo,
  spatnyPozadavek,
  stripe,
  telo,
  type Odpoved,
  type Pozadavek,
} from './_sdilene.js'

/**
 * Běží ještě předplatné?
 *
 * Aplikace sem posílá svůj klíč, kdykoliv je online. Funkce se zeptá
 * Stripe a vrátí čerstvý podepsaný lístek. Tím se samo od sebe promítne
 * obnovení, zrušení i neúspěšná platba, aniž by aplikace musela mít účet
 * nebo my databázi.
 */
export default async function handler(req: Pozadavek, res: Odpoved): Promise<void> {
  if (!nastaveno()) return neniNastaveno(res)

  const sub = await cisloPredplatneho(telo(req).klic)
  if (!sub) return spatnyPozadavek(res, 'Klíč předplatného není platný.')

  try {
    const p = await stripe(`/subscriptions/${encodeURIComponent(sub)}`)
    res.status(200).json({ listek: await listekZPredplatneho(p) })
  } catch (e) {
    selhalo(res, e)
  }
}
