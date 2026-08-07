import type { IsoDate } from './profile'
import { daysBetween, today as todayIso } from './dates'

/**
 * Práce kolem IVF.
 *
 * Léčba se odehrává v pracovní době. Kontrola v sedm ráno, odběr ve
 * čtvrtek dopoledne, transfer podle toho, jak embryo poroste. Termín
 * přijde od kliniky den dopředu a žena ho musí srovnat se šéfem,
 * se směnou nebo s poradou. Tohle bývá na celé léčbě to, co se řeší
 * nejhůř, protože se to řeší v tichosti: většina žen v práci neřekne,
 * o co jde.
 *
 * -------------------------------------------------- CO MODUL DĚLÁ A NEDĚLÁ ---
 * K termínu si žena zapíše **jak to vyřeší** (dovolená, home office,
 * prohozená směna) a jestli k tomu potřebuje **doprovod** nebo **odvoz**.
 * Modul z toho spočítá seznam toho, co ještě zbývá zařídit.
 *
 * Nic nedoporučuje. Nenavrhne nemocenskou, nepočítá dny dovolené,
 * nekomunikuje se zaměstnavatelem. Rozhodnutí, jak se to v práci vyřeší,
 * je čistě její, aplikace jenom hlídá, aby na to nezapomněla.
 *
 * ------------------------------------------------ MINULOST SE NEPŘIPOMÍNÁ ---
 * Úkoly se vracejí jenom k termínům, které teprve budou. Zpětně zařídit
 * volno nejde a připomínka „zařídit volno na odběr“ tři dny po odběru je
 * jenom výčitka. Zápis samotný v plánu zůstává, protože je to záznam
 * o tom, co léčba stála.
 *
 * Čistý doménový modul. Žádný prohlížeč, žádné HTML.
 */

// ========================================================== ŘEŠENÍ V PRÁCI ===

/**
 * Jak je termín v práci vyřešený.
 *
 * `nezapsano` je výchozí stav a jediný, který sám o sobě dělá úkol.
 * `nepotrebuji` je vědomé „tohle řešit nemusím“: volná noha, práce
 * z domova, termín po směně. Musí být zvlášť od `nezapsano`, jinak by
 * aplikace ženu popoháněla k něčemu, co už jednou odmítla.
 */
export type WorkArrangement =
  | 'nezapsano'
  | 'volno'
  | 'dovolena'
  | 'nemocenska'
  | 'home-office'
  | 'smena'
  | 'nepotrebuji'

export const ARRANGEMENT_LABEL: Record<WorkArrangement, string> = {
  nezapsano: 'Zatím nevyřešeno',
  volno: 'Volno v práci',
  dovolena: 'Dovolená',
  nemocenska: 'Nemocenská',
  'home-office': 'Home office',
  smena: 'Prohozená směna',
  nepotrebuji: 'Nepotřebuji nic řešit',
}

// ================================================================== ZÁPIS ===

export interface WorkPlanEntry {
  id: string
  /** Termín v kalendáři, ke kterému zápis patří. */
  eventId: string
  /** Název termínu, jak ho zná žena: „kontrola“, „odběr“, „odběr hCG“. */
  title: string
  onDate: IsoDate
  arrangement: WorkArrangement
  /**
   * Potřebuje s sebou někoho druhého.
   *
   * Nezávislé na tom, jak je vyřešená práce. Doprovod k transferu si žena
   * bere i ve dnech, kdy má stejně volno.
   */
  needsCompanion: boolean
  /**
   * Potřebuje odvoz zpátky.
   *
   * U odběru to není komfort: probíhá v sedaci a po ní se nesmí řídit.
   * Proto je to samostatný příznak, ne poznámka.
   */
  needsTransport: boolean
  /** Volný text: jméno kolegyně, číslo na personální, cokoli. */
  note: string
  /** Odškrtnuto ženou: k tomuhle termínu už není co zařizovat. */
  done: boolean
}

/**
 * Nový prázdný zápis.
 *
 * Výchozí je `nezapsano`, ne `nepotrebuji`. Prázdný zápis znamená
 * „ještě jsem to neřešila“, a to je přesně stav, na který má aplikace
 * upozornit.
 */
export function emptyWorkPlanEntry(id: string, onDate: IsoDate): WorkPlanEntry {
  return {
    id,
    eventId: '',
    title: '',
    onDate,
    arrangement: 'nezapsano',
    needsCompanion: false,
    needsTransport: false,
    note: '',
    done: false,
  }
}

// ================================================================ SKLOŇOVÁNÍ ===

/*
 * Texty úkolů musí znít jako věta, ne jako databáze. „Zařídit volno na
 * kontrola 12. 8.“ zní jako strojový překlad a člověk to čte hůř než
 * vlastní větu. Název termínu se proto skloňuje.
 *
 * Skloňuje se jenom první slovo, zbytek se nechává: u „odběr hCG“ nebo
 * „kontrola po transferu“ nese pád právě to první slovo. Zkratky
 * (hCG, UZ, AMH) zůstávají, jak jsou, jinak by vznikaly tvary typu „UZu“.
 */

/** Název bez prvního slova nese pád jinde, proto se dělí na hlavu a zbytek. */
function splitHead(title: string): [string, string] {
  const t = title.trim().replace(/\s+/g, ' ')
  const i = t.indexOf(' ')
  return i === -1 ? [t, ''] : [t.slice(0, i), t.slice(i)]
}

/** Velké písmeno uvnitř slova prozradí zkratku: hCG, UZ, PGT. */
function isAcronym(word: string): boolean {
  const rest = word.slice(1)
  return rest !== rest.toLowerCase()
}

/** Uprostřed věty se název píše malým písmenem, zkratky se nechávají. */
function lower(word: string): string {
  return isAcronym(word) ? word : word.charAt(0).toLowerCase() + word.slice(1)
}

/** Když název chybí, mluví se obecně o termínu. Lepší než prázdné místo. */
const FALLBACK = 'termín'

/** 4. pád, „na co“: kontrola > kontrolu, punkce > punkci, odběr > odběr. */
function accusative(title: string): string {
  const [head, tail] = splitHead(title)
  if (head === '') return FALLBACK
  if (isAcronym(head)) return head + tail
  const w = lower(head)
  if (w.endsWith('a')) return w.slice(0, -1) + 'u' + tail
  if (w.endsWith('e')) return w.slice(0, -1) + 'i' + tail
  return w + tail
}

/** 2. pád, „z čeho“: kontrola > kontroly, odběr > odběru, punkce > punkce. */
function genitive(title: string): string {
  const [head, tail] = splitHead(title)
  if (head === '') return FALLBACK + 'u'
  if (isAcronym(head)) return head + tail
  const w = lower(head)
  if (w.endsWith('a')) return w.slice(0, -1) + 'y' + tail
  // Měkká ženská („punkce“) i střední („vyšetření“) zůstávají beze změny.
  if (w.endsWith('e') || w.endsWith('í')) return w + tail
  return w + 'u' + tail
}

/**
 * Datum v úkolu jenom „12. 8.“, bez roku.
 *
 * Úkoly se týkají nejbližších týdnů a rok by v nich byl šum. Čte se to
 * přímo z ISO řetězce, aby se do výsledku nemohlo promítnout časové pásmo.
 */
function dayMonth(iso: IsoDate): string {
  const [, m, d] = iso.split('-')
  return `${Number(d)}. ${Number(m)}.`
}

// ================================================================== ÚKOLY ===

export interface WorkTask {
  /** Stabilní klíč `id zápisu:druh úkolu`. Pro React i pro odškrtávání. */
  key: string
  text: string
  done: boolean
  /** Do kdy: den termínu. Dřív, ale nikdy později. */
  byDate: IsoDate
  /** Hoří to: termín je do tří dnů včetně. */
  urgent: boolean
}

/**
 * Co ještě zbývá zařídit.
 *
 * „Otevřené“ znamená **před termínem**, ne „neodškrtnuté“. Hotové úkoly
 * v seznamu zůstávají s `done: true`, aby bylo vidět i to, co je zařízené.
 * Komu jde jenom o zbytek, filtruje si `!done`.
 *
 * Tři druhy úkolů, každý samostatně, protože každý se zařizuje jinde
 * a jindy: volno u zaměstnavatele, doprovod u blízkého člověka, odvoz
 * u toho, kdo zrovna může.
 *
 * Hranice tří dnů na `urgent` není lékařská. Odpovídá tomu, kdy už se
 * volno v práci shání blbě.
 */
export function openTasks(entries: WorkPlanEntry[], today: IsoDate = todayIso()): WorkTask[] {
  const out: WorkTask[] = []

  for (const e of entries) {
    const zbyva = daysBetween(today, e.onDate)
    // Termín, který byl, se už zařídit nedá. Dnešek se ještě počítá.
    if (zbyva < 0) continue
    const urgent = zbyva <= 3

    const add = (druh: string, text: string) => {
      out.push({ key: `${e.id}:${druh}`, text, done: e.done, byDate: e.onDate, urgent })
    }

    // Volno řeší jenom nezapsaný termín. Jakákoli vyplněná varianta
    // včetně `nepotrebuji` znamená, že je o práci rozhodnuto.
    if (e.arrangement === 'nezapsano') {
      add('volno', `Zařídit volno na ${accusative(e.title)} ${dayMonth(e.onDate)}`)
    }
    // Doprovod a odvoz jdou mimo práci, proto se na `arrangement` neptají.
    if (e.needsCompanion) {
      add('doprovod', `Domluvit doprovod na ${accusative(e.title)}`)
    }
    if (e.needsTransport) {
      add('odvoz', `Zajistit odvoz z ${genitive(e.title)}`)
    }
  }

  // Od nejbližšího. Řazení je stabilní, takže u stejného dne zůstává
  // pořadí volno > doprovod > odvoz, jak se úkoly zakládají.
  return out.sort((a, b) => (a.byDate < b.byDate ? -1 : a.byDate > b.byDate ? 1 : 0))
}

/**
 * Je u zápisu ještě co zařizovat?
 *
 * Vyřízený je zápis, který si žena odškrtla, nebo u kterého není co
 * řešit: práce je zapsaná a doprovod ani odvoz nepotřebuje.
 */
export function isSettled(e: WorkPlanEntry): boolean {
  if (e.done) return true
  return e.arrangement !== 'nezapsano' && !e.needsCompanion && !e.needsTransport
}

/**
 * Postup plánu: kolik termínů je vyřešených z kolika.
 *
 * Počítá se celý plán, i termíny po datu, a schválně to nebere dnešek.
 * Postup má odpovídat na otázku „jak jsem na tom s plánováním“, ne
 * na „co mě čeká“. Na to je `openTasks`.
 */
export function planProgress(entries: WorkPlanEntry[]): { done: number; total: number } {
  return {
    done: entries.filter(isSettled).length,
    total: entries.length,
  }
}
