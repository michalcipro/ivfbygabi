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
} from './_sdilene'

/**
 * Zrušení předplatného.
 *
 * ------------------------------------------------------------- PROČ TAKHLE ---
 * Ukončit závazek musí jít přinejmenším tak snadno jako ho sjednat. Proto
 * to je jedno zavolání bez přihlašování: klíč, který aplikace nese, je
 * celá autorizace.
 *
 * Ruší se **ke konci zaplaceného období**, ne hned. Obchodní podmínky
 * slibují, že zaplacené období doběhne, a okamžité zrušení by ženu
 * připravilo o dny, které už zaplatila.
 */
export default async function handler(req: Pozadavek, res: Odpoved): Promise<void> {
  if (!nastaveno()) return neniNastaveno(res)

  const sub = await cisloPredplatneho(telo(req).klic)
  if (!sub) return spatnyPozadavek(res, 'Klíč předplatného není platný.')

  try {
    const p = await stripe(`/subscriptions/${encodeURIComponent(sub)}`, { cancel_at_period_end: 'true' })
    res.status(200).json({ listek: await listekZPredplatneho(p) })
  } catch (e) {
    selhalo(res, e)
  }
}
