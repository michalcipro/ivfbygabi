import type { IsoDate } from './profile'
import type { PhotoRef } from './cycle'

/**
 * Vyšetření, která mohou být na cestě relevantní.
 *
 * Nejde o povinný seznam a nikde se tak nesmí prezentovat. Vyšetřovací plán
 * skládá lékař podle anamnézy a každé ženě vyjde jinak. Tenhle katalog je
 * proto **soupis pro orientaci a pro vlastní záznam**, ne checklist, který se
 * musí splnit. Aplikace z nezaškrtnutého vyšetření nic neodvozuje.
 *
 * Čistý doménový modul.
 */

export type ExamWho = 'zena' | 'partner' | 'dalsi'

export const EXAM_WHO_LABEL: Record<ExamWho, string> = {
  zena: 'Žena',
  partner: 'Partner',
  dalsi: 'Další odborná vyšetření',
}

export interface ExamDef {
  id: string
  name: string
  who: ExamWho
  group: string
  /** Jedna věta: co vyšetření popisuje. Ne co z něj plyne. */
  why: string
}

export const EXAMS: ExamDef[] = [
  // --- žena, hormony
  { id: 'amh', name: 'AMH', who: 'zena', group: 'Hormony', why: 'Orientačně popisuje ovariální rezervu.' },
  { id: 'fsh', name: 'FSH', who: 'zena', group: 'Hormony', why: 'Hormon, který pobízí folikuly k růstu.' },
  { id: 'lh', name: 'LH', who: 'zena', group: 'Hormony', why: 'Hormon spojený se spuštěním ovulace.' },
  { id: 'estradiol', name: 'Estradiol (E2)', who: 'zena', group: 'Hormony', why: 'Hlavní ženský hormon, sleduje se i během stimulace.' },
  { id: 'progesteron', name: 'Progesteron', who: 'zena', group: 'Hormony', why: 'Hormon druhé poloviny cyklu.' },
  { id: 'tsh', name: 'TSH', who: 'zena', group: 'Hormony', why: 'Funkce štítné žlázy.' },
  { id: 'prolaktin', name: 'Prolaktin', who: 'zena', group: 'Hormony', why: 'Zvýšená hodnota může ovlivnit ovulaci.' },

  // --- žena, ultrazvuk a děloha
  { id: 'afc', name: 'AFC. Počet antrálních folikulů', who: 'zena', group: 'Ultrazvuk a děloha', why: 'Počítá se na ultrazvuku na začátku cyklu.' },
  { id: 'uz-panev', name: 'Ultrazvuk malé pánve', who: 'zena', group: 'Ultrazvuk a děloha', why: 'Prohlídka vaječníků a dělohy.' },
  { id: 'hsg', name: 'Průchodnost vejcovodů (HSG / HyFoSy)', who: 'zena', group: 'Ultrazvuk a děloha', why: 'Ověří, jestli jsou vejcovody průchodné.' },
  { id: 'hysteroskopie', name: 'Hysteroskopie', who: 'zena', group: 'Ultrazvuk a děloha', why: 'Prohlídka dutiny děložní kamerou.' },

  // --- žena, ostatní
  { id: 'genetika-zena', name: 'Genetické vyšetření', who: 'zena', group: 'Ostatní', why: 'Karyotyp nebo vyšetření nosičství.' },
  { id: 'serologie', name: 'Sérologie (infekční markery)', who: 'zena', group: 'Ostatní', why: 'Před zahájením léčby ji vyžadují kliniky.' },
  { id: 'cytologie', name: 'Onkologická cytologie', who: 'zena', group: 'Ostatní', why: 'Standardní gynekologické vyšetření.' },

  // --- partner
  { id: 'spermiogram', name: 'Spermiogram', who: 'partner', group: 'Spermie', why: 'Základní rozbor vzorku.' },
  { id: 'sperm-koncentrace', name: 'Koncentrace spermií', who: 'partner', group: 'Spermie', why: 'Kolik spermií je v mililitru.' },
  { id: 'sperm-motilita', name: 'Pohyblivost spermií', who: 'partner', group: 'Spermie', why: 'Jak se spermie pohybují.' },
  { id: 'sperm-morfologie', name: 'Morfologie spermií', who: 'partner', group: 'Spermie', why: 'Jak spermie vypadají.' },
  { id: 'dna-fragmentace', name: 'Fragmentace DNA spermií', who: 'partner', group: 'Spermie', why: 'Míra poškození genetické informace ve spermiích.' },
  { id: 'genetika-partner', name: 'Genetické vyšetření', who: 'partner', group: 'Ostatní', why: 'Karyotyp nebo vyšetření nosičství.' },
  { id: 'urolog', name: 'Urologické / andrologické vyšetření', who: 'partner', group: 'Ostatní', why: 'Doplňuje nález ze spermiogramu.' },
  { id: 'serologie-partner', name: 'Sérologie (infekční markery)', who: 'partner', group: 'Ostatní', why: 'Před zahájením léčby ji vyžadují kliniky.' },

  // --- další
  { id: 'trombofilie', name: 'Trombofilní mutace', who: 'dalsi', group: 'Hematologie', why: 'Vyšetření srážlivosti krve.' },
  { id: 'hematologie', name: 'Hematologické vyšetření', who: 'dalsi', group: 'Hematologie', why: 'Krevní obraz a srážlivost v širším rozsahu.' },
  { id: 'endokrinologie', name: 'Endokrinologické vyšetření', who: 'dalsi', group: 'Endokrinologie', why: 'Hormonální souvislosti mimo reprodukci.' },
  { id: 'stitna', name: 'Podrobné vyšetření štítné žlázy', who: 'dalsi', group: 'Endokrinologie', why: 'Protilátky a ultrazvuk, když TSH nestačí.' },
  { id: 'inzulin', name: 'Inzulinová rezistence (oGTT)', who: 'dalsi', group: 'Endokrinologie', why: 'Zátěžový test na zpracování cukru.' },
  { id: 'imunologie', name: 'Imunologické vyšetření', who: 'dalsi', group: 'Imunologie', why: 'Oblast, kde je řada postupů diskutovaná a důkazy omezené.' },
  { id: 'genetika-par', name: 'Genetická konzultace páru', who: 'dalsi', group: 'Genetika', why: 'Společné posouzení rodinné anamnézy.' },
]

const EXAM_BY_ID = new Map(EXAMS.map((e) => [e.id, e]))

export function examById(id: string): ExamDef | null {
  return EXAM_BY_ID.get(id) ?? null
}

export function examName(id: string): string {
  return EXAM_BY_ID.get(id)?.name ?? id
}

export const EXAM_GROUPS: Record<ExamWho, string[]> = {
  zena: ['Hormony', 'Ultrazvuk a děloha', 'Ostatní'],
  partner: ['Spermie', 'Ostatní'],
  dalsi: ['Hematologie', 'Endokrinologie', 'Imunologie', 'Genetika'],
}

/** Zapsané vyšetření. Vzniká teprve tehdy, když do něj uživatelka něco napíše. */
export interface ExamEntry {
  id: string
  /** Id z katalogu, nebo prázdné u vlastního vyšetření. */
  examId: string
  /** Název vlastního vyšetření, které v katalogu není. */
  custom: string
  who: ExamWho
  onDate: IsoDate | null
  done: boolean
  /** Výsledek vlastními slovy. Aplikace ho nevykládá. */
  result: string
  note: string
  photos: PhotoRef[]
}

export function emptyExam(id: string, examId: string, who: ExamWho): ExamEntry {
  return { id, examId, custom: '', who, onDate: null, done: false, result: '', note: '', photos: [] }
}

export function examTitle(e: ExamEntry): string {
  return e.custom.trim() || examName(e.examId)
}
