import type { IsoDate } from './profile'
import type { CycleStage } from './cycle'
import { daysBetween } from './dates'

/**
 * Co je dnes na tobě.
 *
 * PROČ TAHLE METRIKA NAHRADILA ČÍSLO „dnešek žádá 5 z 10“:
 *
 * Staré číslo mělo dvě vady, které se nedaly opravit jeho vyladěním.
 * Nemělo jednotku — pětka z deseti čeho? — a půlka květu zůstávala mrtvá,
 * dokud si žena nezapsala náladu. Uživatelka tak koukala na graf, který
 * jí říkal buď nic, nebo to, co sama věděla: že dnes píchá injekci a že
 * je unavená.
 *
 * Tahle metrika počítá věci. Konkrétní, pojmenované, dnešní. Injekce ve
 * 20:00. Trigger ve 21:30. Kontrola v 8:30. Každý plátek je jedna z nich
 * a vybarví se, když je hotová. Číslo má jednotku („2 ze 4“), hýbe se
 * během dne a nepotřebuje k tomu žádný zápis navíc.
 *
 * DRUHÝ VĚNEC JE TO PODSTATNÉ. Nese věci, které dnes na ní nejsou:
 * kolik folikulů doroste, kolik vajíček bude zralých, jestli se embryo
 * uchytí. Ty plátky se nikdy nevyplní — a je to záměr, ne chyba. V IVF
 * je nejvíc síly ztraceno na věcech, které žena neovlivní, a oddělit
 * jedno od druhého je přesně to, co s pacientkami dělá každý psycholog
 * v oboru. Aplikace to umí ukázat, protože ví, ve které fázi cyklu je.
 *
 * HRANICE: nic z toho není zdravotní údaj. Metrika nehodnotí tělo,
 * nepředpovídá výsledek a nepočítá šance. Počítá úkoly.
 */

export type TaskKind = 'lek' | 'trigger' | 'kontrola' | 'zapis' | 'otazka'

export interface DayTask {
  /** Stabilní klíč — podle něj se pozná odškrtnutí. */
  id: string
  kind: TaskKind
  label: string
  /** „20:00“, nebo prázdné, když čas nehraje roli. */
  at: string
  done: boolean
  /** Kam klepnutí vede. */
  route: string
  /**
   * Věc, u které na přesnosti opravdu záleží — trigger, hodina odběru.
   * Vykresluje se výrazněji a nikdy se neschová.
   */
  critical?: boolean
}

/** Věc, která dnes na uživatelce není. Plátek, který se nevyplní. */
export interface NotYours {
  label: string
  why: string
}

// ------------------------------------------------------------------ vstup ---

export interface TaskMed {
  id: string
  name: string
  dose: string
  times: string[]
  repeat: string
  startOn: IsoDate | null
  endOn: IsoDate | null
}

export interface TaskEvent {
  id: string
  title: string
  kind: string
  onDate: IsoDate
  atTime: string | null
  done: boolean
}

export interface TaskInput {
  today: IsoDate
  meds: TaskMed[]
  /** Odškrtnuté dávky — klíč `med:{datum}:{id}`. */
  checks: Record<string, boolean>
  events: TaskEvent[]
  /** Datum a hodina triggeru z běžícího cyklu. */
  triggerOn: IsoDate | null
  triggerAt: string
  /** Má dnešek zapsaný deník? */
  hasJournalToday: boolean
  /** Kolik otázek pro lékaře čeká, když je do dvou dnů kontrola. */
  openQuestions: number
  /** Fáze cyklu — určuje druhý věnec. */
  stage: CycleStage | null
}

// --------------------------------------------------------------- pomocníci ---

/** Bere se lék v daný den? Stejná pravidla jako v protokolu na obrazovce Léky. */
export function medRunsOn(m: TaskMed, day: IsoDate): boolean {
  if (m.startOn && day < m.startOn) return false
  if (m.endOn && day > m.endOn) return false
  if (m.repeat === 'jednou') return m.startOn === day
  if (m.repeat === 'obden' && m.startOn) return daysBetween(m.startOn, day) % 2 === 0
  return true
}

export function doseKey(date: IsoDate, medId: string): string {
  return `med:${date}:${medId}`
}

/** Řadí se podle času. Věci bez času jdou na konec dne, ne na začátek. */
function byTime(a: DayTask, b: DayTask): number {
  if (a.critical !== b.critical) return a.critical ? -1 : 1
  if (!a.at && !b.at) return a.label.localeCompare(b.label, 'cs')
  if (!a.at) return 1
  if (!b.at) return -1
  return a.at.localeCompare(b.at)
}

// ----------------------------------------------------------------- co je na ní ---

/**
 * Dnešní úkoly.
 *
 * Schválně sem nepatří všechno, co by šlo udělat. Patří sem to, co má
 * dnešní datum a co se dá odškrtnout. Seznam, který se nedá dodělat,
 * není seznam, ale výčitka.
 */
export function tasksFor(input: TaskInput): DayTask[] {
  const out: DayTask[] = []
  const { today } = input

  // Trigger je první a vždycky. Je to jediná věc v celém cyklu, u které
  // se minutová odchylka opravdu počítá.
  if (input.triggerOn === today) {
    out.push({
      id: `trigger:${today}`,
      kind: 'trigger',
      label: input.triggerAt ? `Trigger ve ${input.triggerAt}` : 'Trigger — hodinu ověřte na klinice',
      at: input.triggerAt,
      done: Boolean(input.checks[`trigger:${today}`]),
      route: 'leky/dnes',
      critical: true,
    })
  }

  for (const m of input.meds) {
    if (!medRunsOn(m, today)) continue
    const name = m.name.trim() || 'Lék'
    const dose = m.dose.trim()
    const at = m.times[0] ?? ''
    out.push({
      id: doseKey(today, m.id),
      kind: 'lek',
      label: [name, dose].filter(Boolean).join(' · '),
      at,
      done: Boolean(input.checks[doseKey(today, m.id)]),
      route: 'leky/dnes',
    })
  }

  for (const e of input.events) {
    if (e.onDate !== today) continue
    out.push({
      id: `ev:${e.id}`,
      kind: 'kontrola',
      label: e.title.trim() || 'Termín',
      at: e.atTime ?? '',
      done: e.done,
      route: 'kalendar',
    })
  }

  // Otázky se nabízejí jen před kontrolou. Jindy je to úkol navíc, ne pomoc.
  const visitSoon = input.events.some(
    (e) => e.onDate >= today && daysBetween(today, e.onDate) <= 2 && !e.done,
  )
  if (visitSoon && input.openQuestions === 0) {
    out.push({
      id: `otazka:${today}`,
      kind: 'otazka',
      label: 'Sepsat otázky na kontrolu',
      at: '',
      done: false,
      route: 'otazky/ceka',
    })
  }

  out.push({
    id: `zapis:${today}`,
    kind: 'zapis',
    label: 'Zapsat, jak vám dnes je',
    at: '',
    done: input.hasJournalToday,
    route: 'zapis/nalada',
  })

  return out.sort(byTime)
}

// ---------------------------------------------------------- co na ní není ---

/**
 * Věci, které dnes rozhoduje biologie nebo laboratoř.
 *
 * Formulace jsou schválně věcné, ne útěšné. „Nemůžete to ovlivnit“ zní
 * jinak než „na tom nezáleží“ — první je pravda, druhé by byla lež.
 */
const NOT_YOURS: Record<CycleStage, NotYours[]> = {
  pred: [
    { label: 'Kolik folikulů se probudí', why: 'Určuje to vaše rezerva, ne dávka ani snaha.' },
  ],
  stimulace: [
    { label: 'Kolik folikulů doroste', why: 'Rozhoduje o tom, kolik jich do cyklu vstoupilo.' },
    { label: 'Jak tělo zareaguje na dávku', why: 'Dávku ladí klinika podle kontrol.' },
    { label: 'Jaká přijdou čísla z odběru', why: 'Vidíte je až s výsledkem.' },
  ],
  trigger: [
    { label: 'Jak vajíčka dozrají', why: 'Od píchnutí to běží samo, přesně 36 hodin.' },
  ],
  odber: [
    { label: 'Kolik vajíček se získá', why: 'Ne z každého folikulu vajíčko je.' },
    { label: 'Kolik jich bude zralých', why: 'Pozná se to až pod mikroskopem.' },
  ],
  oplodneni: [
    { label: 'Kolik se jich oplodní', why: 'Rozhoduje se to v laboratoři, dnes v noci.' },
  ],
  kultivace: [
    { label: 'Jak se embrya budou dělit', why: 'Vývoj sledují embryologové, ovlivnit ho nejde.' },
    { label: 'Kolik jich dojde do blastocysty', why: 'Část se zastaví a je to běžné.' },
  ],
  transfer: [
    { label: 'Jestli se embryo uhnízdí', why: 'Tohle neovlivníte ani ležením, ani stravou.' },
  ],
  cekani: [
    { label: 'Jestli se embryo uhnízdí', why: 'Probíhá to bez vás a nedá se to urychlit.' },
    { label: 'Kdy se objeví první příznaky', why: 'Jejich přítomnost ani nepřítomnost nic neznamená.' },
  ],
  beta: [
    { label: 'Jaké číslo ukáže odběr', why: 'Je dané tím, co se dělo posledních čtrnáct dní.' },
  ],
  hotovo: [
    { label: 'Co bylo, už nezměníte', why: 'Vyhodnotit se to dá, vrátit ne.' },
  ],
}

/** Když cyklus neběží, platí obecná dvojice — pořád je co oddělit. */
const NOT_YOURS_DEFAULT: NotYours[] = [
  { label: 'Kdy na to tělo bude připravené', why: 'Načasování určuje cyklus, ne kalendář.' },
  { label: 'Co ukážou výsledky', why: 'Čekání na ně je součást, ne vaše chyba.' },
]

export function notYoursFor(stage: CycleStage | null): NotYours[] {
  return stage ? NOT_YOURS[stage] : NOT_YOURS_DEFAULT
}

// ------------------------------------------------------------------ souhrn ---

export interface TodayBalance {
  tasks: DayTask[]
  notYours: NotYours[]
  done: number
  total: number
  /** Zbývá něco, u čeho záleží na hodině? */
  criticalOpen: DayTask | null
  /** Věta pod květem. Mění se podle toho, jak den vypadá. */
  headline: string
  detail: string
}

export function readToday(input: TaskInput): TodayBalance {
  const tasks = tasksFor(input)
  const notYours = notYoursFor(input.stage)
  const done = tasks.filter((t) => t.done).length
  const total = tasks.length
  const criticalOpen = tasks.find((t) => t.critical && !t.done) ?? null

  let headline: string
  let detail: string

  if (criticalOpen) {
    headline = criticalOpen.label
    detail = 'Tohle je dnes to jediné, u čeho se počítají minuty. Nastavte si budík.'
  } else if (total === 0) {
    headline = 'Dnes na vás nic nečeká'
    detail = 'Žádná dávka, žádný termín. Takové dny v cyklu jsou a jsou v pořádku.'
  } else if (done === total) {
    headline = 'Máte hotovo'
    detail = 'Všechno, co dnes bylo na vás, je odškrtnuté. Zbytek dneška není váš úkol.'
  } else if (done === 0) {
    headline = `Dnes je na vás ${czThings(total)}`
    detail = 'Vypsané jsou celé — nic z toho není velké, když víte, co to je.'
  } else {
    headline = `Zbývá ${czThings(total - done)}`
    detail = `Z dnešních ${total} máte ${done} za sebou.`
  }

  return { tasks, notYours, done, total, criticalOpen, headline, detail }
}

/** „jedna věc“, „tři věci“, „pět věcí“ — číslo je součástí výrazu. */
function czThings(n: number): string {
  if (n === 1) return 'jedna věc'
  if (n >= 2 && n <= 4) return `${n} věci`
  return `${n} věcí`
}
