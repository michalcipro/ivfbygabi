import type { IsoDate } from './profile'
import type { PhotoRef } from './cycle'

/**
 * Embryo jako samostatný záznam.
 *
 * Do téhle verze aplikace se vývoj embryí zapisoval jako počty po dnech —
 * kolik jich třetí den bylo, kolik jich došlo do blastocysty. To stačí na
 * statistiku a nestačí na nic jiného. Žena, která má tři zamražená embrya,
 * se ptá jinak: **které z nich** se přenášelo, které přežilo rozmrazení,
 * které se testovalo a jak dopadlo. Na to musí být karta.
 *
 * ---------------------------------------------------------------- DNY 1–6 ---
 * Sledují se všechny dny kultivace, ne jen blastocysta. Embryo se přenáší
 * i zamrazuje třetí, čtvrtý, pátý i šestý den a pozdější den není automaticky
 * horší. Proto tu není jedno pole „stadium“, ale záznam po dnech: co
 * embryolog hlásil první den, co třetí, co pátý.
 *
 * Čistý doménový modul — žádný prohlížeč, žádné HTML.
 */

export type EmbryoStage = '' | 'zygota' | 'rihovani' | 'morula' | 'blastocysta' | 'zastaveno'

export const STAGE_LABEL: Record<EmbryoStage, string> = {
  '': 'Nezapsáno',
  zygota: 'Zygota (2PN)',
  rihovani: 'Rýhování (cleavage)',
  morula: 'Morula',
  blastocysta: 'Blastocysta',
  zastaveno: 'Vývoj se zastavil',
}

/** Co embryolog obvykle hlásí ve který den. Jen předvyplnění, ne pravidlo. */
export const STAGE_BY_DAY: Record<number, EmbryoStage> = {
  1: 'zygota',
  2: 'rihovani',
  3: 'rihovani',
  4: 'morula',
  5: 'blastocysta',
  6: 'blastocysta',
  7: 'blastocysta',
}

/** Kde embryo skončilo. */
export type EmbryoFate =
  | 'kultivace'
  | 'transfer'
  | 'kryo'
  | 'rozmrazeno'
  | 'zastaveno'
  | 'nevhodne'
  | 'darovano'

export const FATE_LABEL: Record<EmbryoFate, string> = {
  kultivace: 'V kultivaci',
  transfer: 'Přeneseno',
  kryo: 'Zamraženo',
  rozmrazeno: 'Rozmraženo',
  zastaveno: 'Vývoj se zastavil',
  nevhodne: 'Nebylo vhodné k použití',
  darovano: 'Darováno',
}

export type PgtKind = '' | 'pgta' | 'pgtm' | 'pgtsr' | 'jine'

export const PGT_LABEL: Record<PgtKind, string> = {
  '': 'Netestováno',
  pgta: 'PGT-A',
  pgtm: 'PGT-M',
  pgtsr: 'PGT-SR',
  jine: 'Jiné testování',
}

export type PgtResult = '' | 'ceka' | 'euploid' | 'aneuploid' | 'mozaika' | 'nezavery'

export const PGT_RESULT_LABEL: Record<PgtResult, string> = {
  '': 'Nezapsáno',
  ceka: 'Čeká se na výsledek',
  euploid: 'Euploidní',
  aneuploid: 'Aneuploidní',
  mozaika: 'Mozaikové',
  nezavery: 'Bez závěru',
}

export type ThawResult = '' | 'prezilo' | 'castecne' | 'neprezilo'

export const THAW_LABEL: Record<ThawResult, string> = {
  '': 'Nezapsáno',
  prezilo: 'Přežilo rozmrazení',
  castecne: 'Přežilo částečně',
  neprezilo: 'Nepřežilo rozmrazení',
}

/** Jeden den kultivace tak, jak ho hlásila embryologie. */
export interface EmbryoDay {
  /** 1 až 7. */
  day: number
  stage: EmbryoStage
  /** Hodnocení, jak ho řekl embryolog — „8B“, „4AA“. */
  grade: string
  note: string
}

export interface Embryo {
  id: string
  cycleId: string
  /** Pořadové číslo v rámci cyklu — „Embryo #2“. */
  number: number
  /** Vlastní název. Prázdné = použije se pořadí. */
  label: string
  /** Vývoj po dnech. Prázdné pole = zatím nic nezapsané. */
  days: EmbryoDay[]
  fate: EmbryoFate
  frozenOn: IsoDate | null
  /** Který den kultivace se embryo zamrazilo. */
  frozenDay: number | null
  thawedOn: IsoDate | null
  thawResult: ThawResult
  pgt: PgtKind
  pgtSampledOn: IsoDate | null
  pgtResult: PgtResult
  pgtNote: string
  note: string
  photos: PhotoRef[]
}

export function emptyEmbryo(id: string, cycleId: string, number: number): Embryo {
  return {
    id,
    cycleId,
    number,
    label: '',
    days: [],
    fate: 'kultivace',
    frozenOn: null,
    frozenDay: null,
    thawedOn: null,
    thawResult: '',
    pgt: '',
    pgtSampledOn: null,
    pgtResult: '',
    pgtNote: '',
    note: '',
    photos: [],
  }
}

export function embryoTitle(e: Embryo): string {
  return e.label.trim() || `Embryo #${e.number}`
}

/** Poslední zapsaný den vývoje. `null`, když ještě není žádný. */
export function lastDay(e: Embryo): EmbryoDay | null {
  const sorted = [...e.days].sort((a, b) => a.day - b.day)
  return sorted[sorted.length - 1] ?? null
}

/** Do kolikátého dne se embryo dostalo. */
export function reachedDay(e: Embryo): number | null {
  return lastDay(e)?.day ?? null
}

/**
 * Došlo embryo do stádia blastocysty?
 *
 * Rozhoduje zapsané stadium, ne den — blastocysta šestého dne je blastocysta
 * stejně jako ta pátého.
 */
export function isBlastocyst(e: Embryo): boolean {
  return e.days.some((d) => d.stage === 'blastocysta')
}

/** Je embryo pořád k dispozici k transferu? */
export function isAvailable(e: Embryo): boolean {
  return e.fate === 'kryo' || e.fate === 'kultivace'
}

/** Krátký popis do seznamu: „5. den · blastocysta · 4AA · zamraženo“. */
export function embryoSummary(e: Embryo): string {
  const last = lastDay(e)
  return [
    last ? `${last.day}. den` : null,
    last && last.stage ? STAGE_LABEL[last.stage].toLowerCase() : null,
    last?.grade.trim() || null,
    FATE_LABEL[e.fate].toLowerCase(),
    e.pgt ? `${PGT_LABEL[e.pgt]}${e.pgtResult ? `: ${PGT_RESULT_LABEL[e.pgtResult].toLowerCase()}` : ''}` : null,
  ]
    .filter((x): x is string => Boolean(x))
    .join(' · ')
}

/**
 * Počty embryí po dnech, spočítané z jednotlivých karet.
 *
 * Vrací mapu den → kolik embryí se toho dne ještě vyvíjelo. Embryo se počítá
 * do dne, ke kterému má zápis a stadium není „zastaveno“. Tohle je jediné
 * místo, kde se z karet dělá statistika — čísla se nikde nezadávají dvakrát.
 */
export function countsByDay(embryos: Embryo[]): Record<number, number> {
  const out: Record<number, number> = {}
  for (const e of embryos) {
    for (const d of e.days) {
      if (d.stage === 'zastaveno') continue
      out[d.day] = (out[d.day] ?? 0) + 1
    }
  }
  return out
}

/** Kolik embryí došlo do blastocysty. `null`, když není zapsané žádné embryo. */
export function blastocystCount(embryos: Embryo[]): number | null {
  return embryos.length === 0 ? null : embryos.filter(isBlastocyst).length
}

/** Kolik embryí je zamražených a k dispozici. */
export function frozenCount(embryos: Embryo[]): number {
  return embryos.filter((e) => e.fate === 'kryo').length
}

/** Seřazení pro seznam: podle pořadí v cyklu. */
export function sortEmbryos(embryos: Embryo[]): Embryo[] {
  return [...embryos].sort((a, b) => a.number - b.number)
}
