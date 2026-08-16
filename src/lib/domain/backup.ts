import { daysBetween, isValidIsoDate } from './dates'
import type { IsoDate } from './profile'

/**
 * Záloha a obnova.
 *
 * ------------------------------------------------------------ PROČ VŮBEC ---
 * Data ženy žijí jen v jejím prohlížeči. To je nejsilnější naplnění slibu
 * o soukromí a zároveň jediné místo, kde se dá o všechno přijít. Safari na
 * iPhonu maže úložiště po sedmi dnech bez otevření stránky. Není to chyba,
 * je to záměr. Dva týdny u moře stačí.
 *
 * Aplikace uměla zálohu stáhnout, ale ne načíst zpátky. To je horší než
 * žádná záloha, protože slibuje jistotu, kterou nemá. Tenhle modul je ta
 * druhá polovina.
 *
 * ------------------------------------------------------- DVA TVARY SOUBORU ---
 * Starší verze zapisovala rovnou obsah úložiště a k němu klíč `photos`.
 * Takové soubory už můžou být na discích uživatelek, takže se musí dát
 * načíst i dnes. Novější tvar je obálka s poznávací značkou a datem.
 *
 * Čte se obojí. Zapisuje se nový tvar.
 *
 * ---------------------------------------------------------------- PŘÍSNOST ---
 * Obnova přepíše všechno. Proto se soubor kontroluje dřív, než se cokoliv
 * sáhne, a prázdná záloha se odmítne. Přepsat rok deníku prázdným souborem,
 * který se jen tvářil jako záloha, je ta nejhorší možná chyba.
 *
 * Modul je čistý: žádný prohlížeč, žádné HTML. Jen text dovnitř a rozhodnutí
 * ven.
 */

/** Poznávací značka v novém tvaru souboru. */
export const ZNACKA = 'bloomia-zaloha'

/** Verze datového tvaru aplikace. Roste, jen když se data přestanou snášet. */
export const VERZE = 1

export interface BackupEnvelope {
  bloomia: typeof ZNACKA
  verze: number
  /** Kdy záloha vznikla. */
  vznikla: IsoDate
  /** Obsah úložiště. */
  data: Record<string, unknown>
  /** Fotky z IndexedDB. Klíč je id fotky, hodnota data URI. */
  photos: Record<string, string>
}

/** Co v záloze je. Ukazuje se ženě dřív, než cokoliv přepíše. */
export interface BackupSummary {
  vznikla: IsoDate | null
  zapisu: number
  cyklu: number
  embryi: number
  hodnot: number
  dopisu: number
  cviceni: number
  dokumentu: number
  fotek: number
  /** Rozsah dat v deníku. Podle něj žena pozná, jestli je to ta správná záloha. */
  od: IsoDate | null
  do: IsoDate | null
}

export type BackupProblem = 'nejde-precist' | 'neni-zaloha' | 'novejsi-verze' | 'prazdna'

/**
 * Zamčená obálka. Uvnitř je zašifrovaný text zálohy.
 *
 * Doména šifru neumí a umět nemá: `crypto.subtle` je věc prohlížeče.
 * Tady se jen pozná, že je soubor zamčený, a vytáhnou se z něj kusy,
 * které klient potřebuje k odemčení.
 */
export interface BackupLocked {
  sul: string
  iv: string
  data: string
}

export type BackupRead =
  | {
      ok: true
      data: Record<string, unknown>
      photos: Record<string, string>
      summary: BackupSummary
    }
  | { ok: false; problem: BackupProblem }

/** Věta k problému. Vysvětluje, co se stalo a co s tím, ne kód chyby. */
/** Je to zamčená záloha? Vrací obsah zámku, jinak `null`. */
export function lockedBackup(text: string): BackupLocked | null {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return null
  }
  if (!jeObjekt(raw) || raw.bloomia !== ZNACKA || raw.sifrovana !== true) return null
  const z = raw.zamek
  if (!jeObjekt(z)) return null
  const { sul, iv, data } = z
  if (typeof sul !== 'string' || typeof iv !== 'string' || typeof data !== 'string') return null
  return { sul, iv, data }
}

/** Obálka zamčené zálohy. Vlastní šifrování dodá klient. */
export function lockedEnvelope(zamek: BackupLocked, vznikla: string): string {
  return JSON.stringify(
    { bloomia: ZNACKA, verze: VERZE, sifrovana: true, vznikla, zamek },
    null,
    0,
  )
}

export function problemText(p: BackupProblem): string {
  switch (p) {
    case 'nejde-precist':
      return 'Soubor se nepodařilo přečíst. Bývá to tím, že se cestou poškodil nebo že to není soubor se zálohou.'
    case 'neni-zaloha':
      return 'Tohle není záloha z aplikace BlooMia. Hledejte soubor, jehož název začíná na „bloomia-zaloha“ a končí na .json.'
    case 'novejsi-verze':
      return 'Záloha je z novější verze aplikace, než která tu běží. Otevřete aplikaci znovu, ať se načte aktuální verze, a zkuste to pak.'
    case 'prazdna':
      return 'V záloze nic není. Načíst prázdný soubor by smazalo všechno, co tady máte, takže se to neprovede.'
  }
}

function jeObjekt(x: unknown): x is Record<string, unknown> {
  return typeof x === 'object' && x !== null && !Array.isArray(x)
}

function pocet(x: unknown): number {
  if (Array.isArray(x)) return x.length
  if (jeObjekt(x)) return Object.keys(x).length
  return 0
}

function fotky(x: unknown): Record<string, string> {
  if (!jeObjekt(x)) return {}
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(x)) if (typeof v === 'string') out[k] = v
  return out
}

/**
 * Rozsah dat v deníku.
 *
 * Klíč deníku je datum. Kontroluje se, protože poškozený soubor umí
 * podstrčit cokoliv a „od 1. 1. undefined“ by vypadalo jako chyba aplikace.
 */
function rozsah(journal: unknown): { od: IsoDate | null; do: IsoDate | null } {
  if (!jeObjekt(journal)) return { od: null, do: null }
  const dny = Object.keys(journal).filter(isValidIsoDate).sort()
  return { od: dny[0] ?? null, do: dny[dny.length - 1] ?? null }
}

export function shrnuti(data: Record<string, unknown>, photos: Record<string, string>): BackupSummary {
  const r = rozsah(data.journal)
  const vznikla = data.__vznikla
  return {
    vznikla: typeof vznikla === 'string' && isValidIsoDate(vznikla) ? vznikla : null,
    zapisu: pocet(data.journal),
    cyklu: pocet(data.cycles),
    embryi: pocet(data.embryos),
    hodnot: pocet(data.labs),
    dopisu: pocet(data.letters),
    cviceni: pocet(data.exercises),
    dokumentu: pocet(data.docs),
    fotek: Object.keys(photos).length,
    od: r.od,
    do: r.do,
  }
}

/** Je v záloze vůbec něco, co stojí za obnovu? */
export function neniPrazdna(s: BackupSummary): boolean {
  return (
    s.zapisu > 0 ||
    s.cyklu > 0 ||
    s.embryi > 0 ||
    s.hodnot > 0 ||
    s.dopisu > 0 ||
    s.cviceni > 0 ||
    s.dokumentu > 0 ||
    s.fotek > 0
  )
}

/**
 * Přečte text souboru a rozhodne, jestli se s ním dá pracovat.
 *
 * Nic nemění. Volající si výsledek nejdřív ukáže ženě a teprve po jejím
 * potvrzení sáhne na úložiště.
 */
export function readBackup(text: string): BackupRead {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return { ok: false, problem: 'nejde-precist' }
  }
  if (!jeObjekt(raw)) return { ok: false, problem: 'neni-zaloha' }

  let data: Record<string, unknown>
  let photos: Record<string, string>
  let vznikla: IsoDate | null = null

  if (raw.bloomia === ZNACKA) {
    // Nový tvar: obálka se značkou.
    if (typeof raw.verze === 'number' && raw.verze > VERZE) {
      return { ok: false, problem: 'novejsi-verze' }
    }
    if (!jeObjekt(raw.data)) return { ok: false, problem: 'neni-zaloha' }
    data = { ...raw.data }
    photos = fotky(raw.photos)
    if (typeof raw.vznikla === 'string' && isValidIsoDate(raw.vznikla)) vznikla = raw.vznikla
  } else if (raw.v === 1 && jeObjekt(raw.journal)) {
    // Starý tvar: obsah úložiště rovnou, fotky přilepené vedle.
    // Poznávací znak je `v: 1` plus deník, protože samotné `v: 1` má
    // spousta cizích souborů.
    const { photos: p, ...zbytek } = raw
    data = zbytek
    photos = fotky(p)
  } else {
    return { ok: false, problem: 'neni-zaloha' }
  }

  // Do dat se schová jen pro shrnutí. Před zápisem se zase odstraní.
  if (vznikla) data.__vznikla = vznikla
  const s = shrnuti(data, photos)
  delete data.__vznikla

  if (!neniPrazdna(s)) return { ok: false, problem: 'prazdna' }
  return { ok: true, data, photos, summary: s }
}

/** Sestaví soubor k uložení. Volající dodá obsah úložiště a fotky. */
export function makeBackup(
  data: Record<string, unknown>,
  photos: Record<string, string>,
  today: IsoDate,
): BackupEnvelope {
  return { bloomia: ZNACKA, verze: VERZE, vznikla: today, data, photos }
}

/** Název souboru. Datum v názvu, aby šlo poznat, která záloha je která. */
export function backupName(today: IsoDate): string {
  return `bloomia-zaloha-${today}.json`
}

// ---------------------------------------------------------- připomínka ---

export type ReminderLevel = 'zadna' | 'jemna' | 'durazna'

export interface ReminderInput {
  /** Kdy naposledy vznikla záloha. `null` = nikdy. */
  lastBackupOn: IsoDate | null
  today: IsoDate
  /** Kolik je v aplikaci zapsáno. Podle toho se pozná, co je v sázce. */
  zapisu: number
  cyklu: number
  /** Běží aplikace přidaná na ploše? Tam iOS úložiště nemaže. */
  naPlose: boolean
}

export interface Reminder {
  level: ReminderLevel
  /** Dní od poslední zálohy. `null`, když žádná nebyla. */
  dni: number | null
}

/**
 * Má se dnes připomenout záloha?
 *
 * Pravidla jsou schválně mírná. Aplikace, která obtěžuje, se zavře a pak
 * nepomůže vůbec. Připomíná se, jen když je co ztratit.
 *
 * Na ploše je riziko menší, protože iOS tam úložiště nemaže. Menší, ne
 * nulové: rozbitý telefon nebo smazaná ikona jsou pořád ve hře, takže se
 * jen posunou hranice, připomínka nemizí.
 */
export function backupReminder(input: ReminderInput): Reminder {
  const { lastBackupOn, today, zapisu, cyklu, naPlose } = input
  const dni = lastBackupOn ? Math.max(0, daysBetween(lastBackupOn, today)) : null

  // Pár prvních zápisů se ještě neztratí bolestivě. Do té doby ticho.
  const jeCoZtratit = zapisu >= 3 || cyklu >= 1
  if (!jeCoZtratit) return { level: 'zadna', dni }

  const mirne = naPlose ? 45 : 21
  const durazne = naPlose ? 120 : 60

  if (dni === null) {
    // Nikdy nezálohováno. U rozjeté léčby je to nejrizikovější stav vůbec.
    return { level: zapisu >= 14 || cyklu >= 1 ? 'durazna' : 'jemna', dni: null }
  }
  if (dni >= durazne) return { level: 'durazna', dni }
  if (dni >= mirne) return { level: 'jemna', dni }
  return { level: 'zadna', dni }
}
