import type { IsoDate } from './profile'

/**
 * Podpůrná péče mimo kliniku.
 *
 * Fyzioterapie, psychoterapie, akupunktura, výživa, pohyb. Žena si u sebe
 * vede, co využívá, jak často a jak se u toho cítí — a nic víc.
 *
 * -------------------------------------------------------------- DŮKAZY ------
 * U každé metody je poctivě uvedená síla důkazů. Není to hodnocení metody
 * ani rada, co dělat: je to informace, kterou při rozhodování nikdo nedá,
 * protože se špatně prodává. Aplikace **nikde neslibuje, že cokoli z tohohle
 * zvýší šanci na otěhotnění** — a u psychické podpory to platí dvojnásob.
 * Péče o sebe je legitimní sama o sobě, ne jako nástroj k výsledku. Stres
 * za neúspěch nemůže a aplikace to nikdy nenaznačí.
 *
 * Čistý doménový modul.
 */

export type SupportGroup = 'telo' | 'psychika' | 'doplnkova' | 'zivotni_styl'

export const SUPPORT_GROUP_LABEL: Record<SupportGroup, string> = {
  telo: 'Tělo',
  psychika: 'Psychika',
  doplnkova: 'Doplňková péče',
  zivotni_styl: 'Životní styl',
}

/**
 * Síla důkazů. Tři stupně, protože víc odstínů by bylo předstírání
 * přesnosti, kterou tahle škála nemá.
 */
export type Evidence = 'dobre' | 'omezene' | 'nedostatek'

export const EVIDENCE_LABEL: Record<Evidence, string> = {
  dobre: 'Dobře podložené',
  omezene: 'Omezené důkazy',
  nedostatek: 'Nedostatek kvalitních důkazů',
}

export const EVIDENCE_NOTE: Record<Evidence, string> = {
  dobre: 'Přínos pro to, co metoda slibuje, je doložený kvalitními studiemi.',
  omezene: 'Studie existují, ale jsou malé, rozporuplné nebo nízké kvality.',
  nedostatek: 'Kvalitní studie chybí. Neznamená to, že metoda nefunguje — znamená to, že to nevíme.',
}

export interface SupportDef {
  id: string
  label: string
  group: SupportGroup
  evidence: Evidence
  /** Na co se metoda zaměřuje. Nikdy ne „zvyšuje šanci“. */
  note: string
}

export const SUPPORTS: SupportDef[] = [
  // --- tělo
  { id: 'fyzio', label: 'Fyzioterapie', group: 'telo', evidence: 'dobre', note: 'Práce s pohybovým aparátem, bolestí zad a pánve.' },
  { id: 'fyzio-panev', label: 'Fyzioterapie pánevního dna', group: 'telo', evidence: 'dobre', note: 'Zaměřená na svaly pánevního dna a jejich funkci.' },
  { id: 'mojzisova', label: 'Mojžíšova metoda', group: 'telo', evidence: 'nedostatek', note: 'Cvičební sestava pracující s pánví a páteří.' },
  { id: 'joga', label: 'Jóga a jemný pohyb', group: 'telo', evidence: 'omezene', note: 'Pohyb a dech v tempu, které se dá udržet i během léčby.' },
  { id: 'masaz', label: 'Masáže', group: 'telo', evidence: 'nedostatek', note: 'Uvolnění svalového napětí.' },

  // --- psychika
  { id: 'psychoterapie', label: 'Psychoterapie', group: 'psychika', evidence: 'dobre', note: 'Odborná péče o psychiku v dlouhé a nejisté léčbě.' },
  { id: 'psycholog', label: 'Psychologická konzultace', group: 'psychika', evidence: 'dobre', note: 'Jednorázová nebo krátkodobá podpora.' },
  { id: 'mindfulness', label: 'Mindfulness', group: 'psychika', evidence: 'omezene', note: 'Práce s pozorností a s tím, co se honí hlavou.' },
  { id: 'relaxace', label: 'Relaxační techniky', group: 'psychika', evidence: 'omezene', note: 'Postupné uvolnění, vizualizace, řízená relaxace.' },
  { id: 'dech', label: 'Dechová cvičení', group: 'psychika', evidence: 'omezene', note: 'Zpomalení dechu jako způsob, jak zklidnit tělo.' },
  { id: 'skupina', label: 'Podpůrná skupina', group: 'psychika', evidence: 'omezene', note: 'Setkávání s ženami, které procházejí tímtéž.' },

  // --- doplňková péče
  { id: 'akupunktura', label: 'Akupunktura', group: 'doplnkova', evidence: 'omezene', note: 'Vpichy tenkých jehel do vybraných bodů.' },
  { id: 'tcm', label: 'Tradiční čínská medicína', group: 'doplnkova', evidence: 'nedostatek', note: 'Bylinné směsi a další postupy TCM.' },
  { id: 'homeopatie', label: 'Homeopatie', group: 'doplnkova', evidence: 'nedostatek', note: 'Doplňková metoda bez doloženého mechanismu účinku.' },
  { id: 'reflexologie', label: 'Reflexologie', group: 'doplnkova', evidence: 'nedostatek', note: 'Tlaková masáž vybraných zón.' },

  // --- životní styl
  { id: 'vyziva', label: 'Nutriční poradenství', group: 'zivotni_styl', evidence: 'dobre', note: 'Úprava jídelníčku s odborníkem.' },
  { id: 'doplnky', label: 'Doplňky stravy', group: 'zivotni_styl', evidence: 'omezene', note: 'Nejsou automaticky vhodné pro každou — proberte je s klinikou.' },
  { id: 'spanek', label: 'Práce se spánkem', group: 'zivotni_styl', evidence: 'dobre', note: 'Spánkový režim a jeho úprava.' },
  { id: 'pohyb', label: 'Pravidelný pohyb', group: 'zivotni_styl', evidence: 'dobre', note: 'Během stimulace se intenzita upravuje podle pokynů kliniky.' },
  { id: 'odpocinek', label: 'Cílený odpočinek', group: 'zivotni_styl', evidence: 'omezene', note: 'Vědomé zpomalení, ne jen „nic nedělat“.' },
]

const SUPPORT_BY_ID = new Map(SUPPORTS.map((s) => [s.id, s]))

export function supportById(id: string): SupportDef | null {
  return SUPPORT_BY_ID.get(id) ?? null
}

export function supportLabel(id: string): string {
  return SUPPORT_BY_ID.get(id)?.label ?? id
}

/** Jak často se to dělá. */
export type Frequency = '' | 'denne' | 'tydne' | 'obtydne' | 'mesicne' | 'naraz' | 'nepravidelne'

export const FREQUENCY_LABEL: Record<Frequency, string> = {
  '': 'Nezapsáno',
  denne: 'Denně',
  tydne: 'Týdně',
  obtydne: 'Jednou za dva týdny',
  mesicne: 'Měsíčně',
  naraz: 'Jednorázově',
  nepravidelne: 'Nepravidelně',
}

/** Jeden zápis podpůrné péče. */
export interface SupportEntry {
  id: string
  /** Id z katalogu, nebo prázdné u vlastní aktivity. */
  supportId: string
  custom: string
  /** Odkdy to využívám. Tohle je ta zajímavější informace než jedno datum. */
  since: IsoDate | null
  /** Datum posledního zápisu — u jednorázových věcí je to jediné datum. */
  date: IsoDate | null
  frequency: Frequency
  /** Kdo to vedl — jméno, pracoviště. */
  provider: string
  /** Jak se u toho cítila, 1–5. `null` = nezapsáno. */
  feeling: number | null
  note: string
  /** Právě to využívám — drží se v seznamu „co teď mám“. */
  ongoing: boolean
}

export function emptySupport(id: string, supportId = ''): SupportEntry {
  return {
    id,
    supportId,
    custom: '',
    since: null,
    date: null,
    frequency: '',
    provider: '',
    feeling: null,
    note: '',
    ongoing: true,
  }
}

export function supportTitle(e: SupportEntry): string {
  return e.custom.trim() || supportLabel(e.supportId) || 'Podpůrná péče'
}

export const FEELING_LABEL: Record<number, string> = {
  1: 'Nesedlo mi to',
  2: 'Spíš nic',
  3: 'Neutrální',
  4: 'Pomohlo',
  5: 'Hodně mi to dalo',
}
