import { bodyFor, subjectFor, type Feedback } from '../lib/domain/feedback'

/**
 * Odeslání zpětné vazby.
 *
 * BlooMia nemá server. Jediný způsob, jak dostat zprávu Gabriele, aniž by
 * se stavěl backend, je přeposílací služba pro formuláře.
 *
 * ------------------------------------------------------------ NASTAVENÍ ---
 * Do `ACCESS_KEY` patří klíč z web3forms.com. Registrace je zdarma, klíč se
 * váže na jednu e-mailovou adresu a je **veřejný záměrně**: neotevírá nic
 * než odeslání formuláře na tu jednu adresu. Žádné heslo ani API klíč
 * s přístupem k datům se v prohlížeči neobjeví a objevit nesmí.
 *
 * Dokud je klíč prázdný, aplikace se netváří, že odesílá. Otevře poštovního
 * klienta s předvyplněnou zprávou. Žena ještě musí zmáčknout odeslat, ale
 * zpráva se neztratí a nikdo nelže o tom, co se stalo.
 */
const ACCESS_KEY = ''

const ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Kam zpětná vazba chodí.
 *
 * Musí to být tatáž adresa, jakou uvádí prodejní stránka a zásady ochrany
 * osobních údajů. Kdyby se rozešly, dokument by tvrdil něco jiného, než
 * co se doopravdy děje se zprávou.
 */
export const KOMU = 'terapie@priznejsi.cz'

export type SendResult = 'odeslano' | 'posta' | 'chyba'

/** Otevře poštovního klienta s předvyplněnou zprávou. */
function presPostu(f: Feedback, today: string): SendResult {
  const url = `mailto:${KOMU}?subject=${encodeURIComponent(subjectFor(f))}&body=${encodeURIComponent(bodyFor(f, today))}`
  window.location.href = url
  return 'posta'
}

/**
 * Pošle zpětnou vazbu.
 *
 * Vrací, co se doopravdy stalo, ne co jsme chtěli. Obrazovka pak řekne
 * pravdu: buď je odesláno, nebo se otevřela pošta a je potřeba ještě
 * kliknout.
 */
export async function sendFeedback(f: Feedback, today: string): Promise<SendResult> {
  if (!ACCESS_KEY) return presPostu(f, today)

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: ACCESS_KEY,
        subject: subjectFor(f),
        from_name: f.name.trim() || 'Uživatelka BlooMie',
        message: bodyFor(f, today),
      }),
    })
    if (!res.ok) return presPostu(f, today)
    return 'odeslano'
  } catch {
    // Offline nebo zablokovaná síť. Zpráva se nesmí ztratit.
    return presPostu(f, today)
  }
}
