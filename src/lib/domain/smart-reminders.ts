import type { IsoDate } from './profile'
import { addDays, czDays, daysBetween, formatCzechDate } from './dates'
import { betaDate, estimatedBeta, type CycleRow, type CycleStatus } from './cycle'

/**
 * Chytré připomínky.
 *
 * Jedna otázka, na kterou tenhle modul odpovídá: je dneska něco, co si žena
 * potřebuje pohlídat, a ona to zatím neudělala? Nic víc. Připomínka je vždycky
 * organizační. Termín, odškrtnutí, příprava na kontrolu. Nikdy zdravotní.
 *
 * ---
 * HRANICE, KTERÁ SE NESMÍ PŘEKROČIT:
 * Modul nehodnotí výsledky, nedoporučuje dávkování, nevykládá čísla z odběrů
 * a nic nepředpovídá. Kde jde o cokoli zdravotního, odkazuje na kliniku.
 * A nenahrazuje ji. Taky nestraší: připomínka je nabídka, ne výtka. Když si
 * žena něco nezapsala, není to selhání a nesmí to tak znít.
 * ---
 *
 * Pravidlo množství: nejvýš čtyři. Deset připomínek není deset pomocí,
 * je to hluk, který se přestane číst. Řazení je podle úrovně a v rámci
 * úrovně podle pořadí, ve kterém se pravidla vyhodnocují. Nahoře stojí
 * to, co má termín, dole to, co počká.
 *
 * Nůžky dne modul neřeší. Když jsou rozevřené, aplikace ubírá, ale ubrat
 * je rozhodnutí volajícího, tady se vrací všechno, co platí.
 *
 * Čistý doménový modul: žádné HTML, žádný prohlížeč, žádné `Date.now()`,
 * žádná náhoda. Stejný vstup vždycky vrátí stejný výstup, jinak by se
 * připomínky měnily pod rukama při každém překreslení.
 *
 * Exportuje:
 *   NudgeLevel, Nudge, NudgeInput, NudgeMed, nudges(input)
 *
 * Cesty, na které připomínky odkazují (`action.route`):
 *   leky/dnes, leky/protokol, zapis/nalada, zapis/telo,
 *   zdravotni/mereni, otazky/ceka, kalendar, cyklus
 *
 * Žádné nové CSS třídy. Modul nevrací HTML.
 */

export type NudgeLevel = 'info' | 'dulezite' | 'urgentni'

export interface Nudge {
  id: string
  level: NudgeLevel
  text: string
  /** Co s tím. Popisek tlačítka a cíl. */
  action?: { label: string; route: string }
}

/**
 * Minimální tvar léku, který připomínky potřebují. Plný `MedRow` žije
 * v klientském store; tady je schválně jen to, co se opravdu čte, aby
 * doménový modul nezávisel na úložišti.
 */
export interface NudgeMed {
  id: string
  name: string
  repeat: 'denne' | 'obden' | 'jednou'
  startOn: IsoDate | null
  endOn: IsoDate | null
}

export interface NudgeInput {
  today: string
  cycle: CycleRow | null
  status: CycleStatus | null
  meds: NudgeMed[]
  checks: Record<string, boolean>
  events: { id: string; title: string; onDate: string; kind: string }[]
  eventDone: (id: string) => boolean
  hasJournalToday: boolean
  hasSymptomsToday: boolean
  /** Datum posledního zápisu bazální teploty. */
  lastBbt: string | null
  openQuestions: number
  nextAppointment: { title: string; onDate: string } | null
  /**
   * Hodina 0–23, pokud ji volající zná. Nepovinná: bez ní se odškrtnutí
   * dávek připomene jen tiše, protože ráno ještě nemá cenu na ně tlačit.
   * Předává se zvenčí, aby modul zůstal deterministický.
   */
  hour?: number
}

// --------------------------------------------------------------- pomocníci ---

const LEVEL_RANK: Record<NudgeLevel, number> = { urgentni: 0, dulezite: 1, info: 2 }

/** Kolik připomínek se vejde do jednoho dne, aby se ještě četly. */
const MAX_NUDGES = 4

/** Od kdy má smysl připomínat neodškrtnuté dávky důrazněji. */
const AFTERNOON_HOUR = 14

/** Český tvar počtu. „1 dávka“, „3 dávky“, „7 dávek“. */
function pl(n: number, one: string, few: string, many: string): string {
  return `${n} ${n === 1 ? one : n >= 2 && n <= 4 ? few : many}`
}

/** Počet dní v instrumentálu. „před 1 dnem“, „před 9 dny“. */
function agoDays(n: number): string {
  return `${n} ${n === 1 ? 'dnem' : 'dny'}`
}

/**
 * Předložka před časem. „Ve 21:30“, ale „v 18:00“. Čeština používá „ve“
 * před dvojkou, trojkou, čtyřkou a jejich desítkovými obdobami.
 */
function atPrep(hour: number): string {
  if (!Number.isFinite(hour)) return 'v'
  return (hour >= 2 && hour <= 4) || (hour >= 12 && hour <= 14) || (hour >= 20 && hour <= 23) ? 've' : 'v'
}

/**
 * Předložka před počtem. „Ze 3“, ale „z 5“. Stejné pravidlo jako u „v/ve“.
 */
function fromPrep(n: number): string {
  return n >= 2 && n <= 4 ? 'ze' : 'z'
}

/**
 * „ ve 21:30“, nebo prázdno, když hodina není zadaná.
 * Úvodní nula se maže. „v 08:00“ se špatně čte, „v 8:00“ ne.
 */
function timePhrase(time: string): string {
  const t = time.trim()
  if (!t) return ''
  const hour = Number(t.split(':')[0])
  const shown = t.replace(/^0(\d)/, '$1')
  return ` ${atPrep(hour)} ${shown}`
}

/**
 * Klíč odškrtnuté dávky. Formát musí sedět s tím, co ukládá store.
 * Jeden lék a jeden den, víc časů denně sdílí jedno odškrtnutí.
 */
function doseKey(date: string, medId: string): string {
  return `med:${date}:${medId}`
}

/**
 * Běží lék v tenhle den podle zadaného rozpisu?
 *
 * Bez `startOn` se lék počítá. Nevíme, odkdy běží, ale víme, že v rozpisu
 * je. Jednorázový lék bez data se nepočítá vůbec: neexistuje den, ke kterému
 * by patřil, a připomínat ho každý den by bylo otravné a k ničemu.
 */
function runsOn(m: NudgeMed, day: string): boolean {
  if (m.startOn && day < m.startOn) return false
  if (m.endOn && day > m.endOn) return false
  if (m.repeat === 'jednou') return m.startOn === day
  if (m.repeat === 'obden' && m.startOn) return daysBetween(m.startOn, day) % 2 === 0
  return true
}

/** Fáze, ve kterých má smysl připomínat zápis příznaků. */
const SYMPTOM_STAGES = new Set<CycleStatus['stage']>([
  'stimulace',
  'trigger',
  'odber',
  'oplodneni',
  'kultivace',
  'transfer',
  'cekani',
  'beta',
])

/** Výčet názvů do věty. „Menopur a Cetrotide“, delší se zkrátí. */
function nameList(names: string[]): string {
  if (names.length <= 2) return names.join(' a ')
  return `${names.slice(0, 2).join(', ')} a další`
}

// ---------------------------------------------------------------- pravidla ---

/**
 * Sestaví připomínky pro jeden den.
 *
 * Pravidla se vyhodnocují shora dolů a pořadí je záměrné: nejdřív to, co má
 * pevný termín a nedá se dohnat (trigger, odběr), pak příprava na zítřek,
 * a až nakonec zápisy, které počkají do večera.
 */
export function nudges(input: NudgeInput): Nudge[] {
  const { today, cycle, status, meds, checks, events, eventDone } = input
  const out: Nudge[] = []
  const tomorrow = addDays(today, 1)
  const closed = status?.stage === 'hotovo'
  const running = cycle !== null && !closed

  const push = (id: string, level: NudgeLevel, text: string, action?: Nudge['action']): void => {
    out.push(action ? { id, level, text, action } : { id, level, text })
  }

  // --- 1. trigger ----------------------------------------------------------
  // Nejtvrdší termín celé stimulace. Hodinu určuje klinika, my ji jenom
  // zopakujeme, aby ji nemusela hledat v papírech.
  if (running && cycle.triggerOn === today) {
    push(
      'trigger-dnes',
      'urgentni',
      `Dnes je trigger${timePhrase(cycle.triggerAt)}. Hodinu máte od kliniky. Nastavte si budík, ať ji nemusíte hlídat v hlavě.`,
      { label: 'Otevřít cyklus', route: 'cyklus' },
    )
  } else if (running && cycle.triggerOn === tomorrow) {
    push(
      'trigger-zitra',
      'dulezite',
      `Zítra je trigger${timePhrase(cycle.triggerAt)}. Dnes je dobrý den zkontrolovat, že máte všechno nachystané doma.`,
      { label: 'Otevřít cyklus', route: 'cyklus' },
    )
  }

  // --- 2. odběr zítra ------------------------------------------------------
  // Dvě věci, na které se zapomíná: pokyny kliniky k jídlu a pití, a doprovod.
  // Konkrétní časy tady zásadně neuvádíme. Ty se liší klinika od kliniky.
  if (running && cycle.retrievalOn === tomorrow) {
    push(
      'odber-zitra',
      'dulezite',
      'Zítra je odběr vajíček. Projděte si pokyny kliniky, odkdy nejíst a nepít, a domluvte si někoho, kdo vás odveze domů.',
      { label: 'Otevřít cyklus', route: 'cyklus' },
    )
  }

  // --- 3. beta -------------------------------------------------------------
  // Když datum zadané není, spočítá se orientačně. A je to v textu vidět.
  if (running && status && !['pred', 'stimulace', 'trigger'].includes(status.stage)) {
    const known = betaDate(cycle)
    const betaOn = known ?? estimatedBeta(cycle, today)
    const exact = Boolean(known)
    if (betaOn && betaOn >= today) {
      const inDays = daysBetween(today, betaOn)
      if (exact && inDays === 0) {
        push('beta-dnes', 'dulezite', 'Dnes je odběr hCG. Vezměte si s sebou kartičku pojišťovny a doklady z kliniky.', {
          label: 'Otevřít cyklus',
          route: 'cyklus',
        })
      } else if (exact && inDays === 1) {
        push('beta-zitra', 'dulezite', 'Odběr hCG je zítra. Zkontrolujte si čas odběru a jak se na kliniku dostanete.', {
          label: 'Otevřít cyklus',
          route: 'cyklus',
        })
      } else if (exact && inDays <= 3) {
        push('beta-blizko', 'info', `Odběr hCG je za ${czDays(inDays)}, ${formatCzechDate(betaOn, { year: false })}.`, {
          label: 'Otevřít cyklus',
          route: 'cyklus',
        })
      } else if (!exact && inDays <= 4) {
        push(
          'beta-odhad',
          'info',
          `Odběr hCG vychází orientačně na ${formatCzechDate(betaOn, { year: false })}. Přesný termín vám dá klinika. Můžete si ho doplnit do cyklu.`,
          { label: 'Doplnit termín', route: 'cyklus' },
        )
      }
    }
  }

  // --- 4. zítřejší kontrola a otázky --------------------------------------
  // Otázky sepsané doma jsou k ničemu, když si na ně v ordinaci nevzpomene.
  const appt = input.nextAppointment
  if (appt && appt.onDate === tomorrow) {
    // Název píše uživatelka („UZ“, „Repromeda. Kontrola“). Shodit ho na malá
    // písmena by z toho udělalo paskvil, proto věta stojí tak, aby snesla
    // první pád i velké písmeno.
    const what = appt.title.trim()
    if (input.openQuestions > 0) {
      push(
        'kontrola-otazky',
        'dulezite',
        `Zítra máte v kalendáři: ${what}. V seznamu čeká ${pl(input.openQuestions, 'otázka', 'otázky', 'otázek')} pro lékaře. Chcete si je projít?`,
        { label: 'Otevřít otázky', route: 'otazky/ceka' },
      )
    } else {
      push('kontrola-zitra', 'info', `Zítra máte v kalendáři: ${what}. Napadá vás něco, na co se chcete zeptat?`, {
        label: 'Sepsat otázky',
        route: 'otazky/ceka',
      })
    }
  }

  // --- 5. léky -------------------------------------------------------------
  const todayMeds = meds.filter((m) => runsOn(m, today))
  const unchecked = todayMeds.filter((m) => !checks[doseKey(today, m.id)])
  const afternoon = typeof input.hour === 'number' && input.hour >= AFTERNOON_HOUR

  if (unchecked.length > 0) {
    // Ráno má neodškrtnutá dávka jiný význam než v šest večer, proto se
    // mění jenom naléhavost, ne obsah. A neodškrtnuto neznamená nevzato.
    push(
      'davky-neodskrtnute',
      afternoon ? 'dulezite' : 'info',
      afternoon
        ? `Zbývá odškrtnout ${pl(unchecked.length, 'dávku', 'dávky', 'dávek')} z dnešního rozpisu, ${nameList(unchecked.map((m) => m.name))}.`
        : `Z dnešního rozpisu máte odškrtnuto ${todayMeds.length - unchecked.length} ${fromPrep(todayMeds.length)} ${todayMeds.length}.`,
      { label: 'Odškrtnout léky', route: 'leky/dnes' },
    )
  }

  const ending = todayMeds.filter((m) => m.endOn === today)
  if (ending.length > 0) {
    push(
      'lek-konec',
      'info',
      ending.length === 1
        ? `Podle vašeho rozpisu berete ${ending[0].name} dnes naposledy. Jakoukoli změnu potvrzuje klinika.`
        : `Podle vašeho rozpisu dnes končí ${pl(ending.length, 'lék', 'léky', 'léků')}: ${nameList(ending.map((m) => m.name))}. Jakoukoli změnu potvrzuje klinika.`,
      { label: 'Otevřít protokol', route: 'leky/protokol' },
    )
  }

  // --- 6. chybějící CD1 ----------------------------------------------------
  // Bez prvního dne cyklu nemá aplikace od čeho počítat. A je lepší to říct
  // rovnou, než ukazovat prázdný kalendář a nechat ji hádat proč.
  if (running && !cycle.cd1On) {
    push(
      'cd1-chybi',
      'dulezite',
      'Cyklus zatím nemá zadaný první den (CD1). Bez něj nespočítáme den cyklu. Doplnit se dá kdykoli.',
      { label: 'Doplnit CD1', route: 'cyklus' },
    )
  }

  // --- 7. dnešní události v kalendáři -------------------------------------
  const openToday = events.filter((e) => e.onDate === today && !eventDone(e.id))
  if (openToday.length > 0) {
    push(
      'kalendar-dnes',
      'info',
      openToday.length === 1
        ? `Na dnešek máte v kalendáři: ${openToday[0].title}.`
        : `Na dnešek máte v kalendáři ${pl(openToday.length, 'záznam', 'záznamy', 'záznamů')} k odškrtnutí.`,
      { label: 'Otevřít kalendář', route: 'kalendar' },
    )
  }

  // --- 8. zápisy -----------------------------------------------------------
  // Tyhle tři jsou schválně nejmírnější. Nezapsaný den není problém,
  // jenom chybějící data. A ta si doplní, když bude chtít.
  if (!input.hasJournalToday) {
    push('denik-dnes', 'info', 'Dnešek zatím nemáte zapsaný. Stačí čtyři číselníky, zbytek je dobrovolný.', {
      label: 'Zapsat den',
      route: 'zapis/nalada',
    })
  }

  if (!input.hasSymptomsToday && status && SYMPTOM_STAGES.has(status.stage)) {
    push('priznaky-dnes', 'info', 'Dnes nemáte zapsané žádné příznaky. I „nic zvláštního“ je užitečný záznam pro kontrolu.', {
      label: 'Zapsat příznaky',
      route: 'zapis/telo',
    })
  }

  if (input.lastBbt) {
    const gap = daysBetween(input.lastBbt, today)
    if (gap >= 5) {
      push('bbt-pauza', 'info', `Bazální teplotu jste naposledy zapsala před ${agoDays(gap)}. Chcete v měření pokračovat?`, {
        label: 'Zapsat měření',
        route: 'zdravotni/mereni',
      })
    }
  }

  // Řazení je stabilní, takže v rámci úrovně zůstává pořadí pravidel výš.
  return out.sort((a, b) => LEVEL_RANK[a.level] - LEVEL_RANK[b.level]).slice(0, MAX_NUDGES)
}
