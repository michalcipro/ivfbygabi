/**
 * Přípravky, se kterými se v asistované reprodukci běžně setkáte.
 *
 * ------------------------------------------------------- CO TO NENÍ ---
 * **Není to doporučení.** Není to nabídka, není to seznam „co byste měla
 * brát“ a neříká to, co je pro koho vhodné. Je to číselník, aby žena
 * nemusela do kolonky psát „gonal“ pokaždé jinak a aby se dal záznam
 * po roce přečíst.
 *
 * Aplikace **nikdy** nenavrhuje dávku, čas, změnu ani vysazení. Rozpis
 * určuje výhradně klinika a v aplikaci se jen zapisuje.
 *
 * ------------------------------------------------------- PROČ SEZNAM ---
 * Volné textové pole vypadá svobodně a je k ničemu. Po třech cyklech je
 * v datech „Gonal-f“, „gonal F“, „GONAL“ a „gonal-f 225“ a nedá se z toho
 * poznat, jestli šlo o týž přípravek. Číselník to sjednotí a přitom nechá
 * dveře otevřené: **u každé kategorie je „jiný přípravek“** a vlastní
 * název se dá napsat vždycky.
 *
 * Čistý doménový modul.
 */

/**
 * Forma podání.
 *
 * Bydlí tady, ne v klientovi, protože z ní vychází předvyplnění formuláře
 * podle vybraného přípravku. Klient ji jen znovu vyváží.
 */
export type MedKind = 'injekce' | 'tableta' | 'gel' | 'naplast' | 'cipek' | 'sprej'

export const MED_KIND_LABEL: Record<MedKind, string> = {
  injekce: 'Injekce',
  tableta: 'Tableta nebo kapsle',
  gel: 'Gel',
  naplast: 'Náplast',
  cipek: 'Čípek nebo vaginální tableta',
  sprej: 'Sprej',
}

/** Jednotky dávky. Vlastní se dá napsat. */
export const MED_UNITS = ['IU', 'mg', 'ml', 'µg', 'tableta', 'kapsle', 'čípek', 'dávka', 'jiné']

export type MedGroupId =
  | 'priprava'
  | 'stimulace'
  | 'blokace'
  | 'trigger'
  | 'luteal'
  | 'dalsi'

export interface MedGroup {
  id: MedGroupId
  label: string
  /** Jedna věta, k čemu se skupina v léčbě používá. Popis, ne doporučení. */
  note: string
  /** Obvyklá forma podání. Jen předvyplnění, dá se změnit. */
  kind: MedKind
  items: string[]
}

/**
 * Skupiny jsou seřazené v pořadí, ve kterém na ně v cyklu obvykle dojde.
 * Žena, která hledá lék, ho tak najde blízko toho, co právě prožívá.
 */
export const MED_GROUPS: MedGroup[] = [
  {
    id: 'priprava',
    label: 'Příprava na cyklus',
    note: 'Přípravky, kterými se cyklus sjednocuje nebo připravuje sliznice, ještě než stimulace začne.',
    kind: 'tableta',
    items: [
      'Hormonální antikoncepce',
      'Estrofem',
      'Estrimax',
      'Progynova',
      'Divigel',
      'Oestrogel',
      'Estradiol, jiný přípravek',
      'Provera',
      'Duphaston',
    ],
  },
  {
    id: 'stimulace',
    label: 'Stimulace vaječníků',
    note: 'Injekční přípravky, kterými se během stimulace podporuje růst folikulů.',
    kind: 'injekce',
    items: [
      'GONAL-f',
      'Puregon',
      'Bemfola',
      'Ovaleap',
      'Rekovelle',
      'Fostimon',
      'Menopur',
      'Meriofert',
      'Merional',
      'Pergoveris',
      'Luveris',
      'Elonva',
    ],
  },
  {
    id: 'blokace',
    label: 'Prevence předčasné ovulace',
    note: 'Přípravky, které během stimulace brání tomu, aby ovulace přišla dřív, než má.',
    kind: 'injekce',
    items: [
      'Cetrotide',
      'Orgalutran',
      'Fyremadel',
      'Ganirelix, jiný přípravek',
      'Diphereline',
      'Decapeptyl',
      'Zoladex',
    ],
  },
  {
    id: 'trigger',
    label: 'Trigger a dozrání vajíček',
    note: 'Závěrečná injekce před odběrem. Její čas určuje klinika na minutu přesně.',
    kind: 'injekce',
    items: ['Ovitrelle', 'Pregnyl', 'Gonasi', 'Decapeptyl, jako trigger', 'Diphereline, jako trigger'],
  },
  {
    id: 'luteal',
    label: 'Podpora po transferu',
    note: 'Podpora luteální fáze. Užívá se podle rozpisu kliniky a sama se nevysazuje.',
    kind: 'cipek',
    items: [
      'Utrogestan',
      'Crinone',
      'Lutinus',
      'Cyclogest',
      'Prolutex',
      'Progesteron, jiný přípravek',
      'Estrofem, po transferu',
      'Progynova, po transferu',
    ],
  },
  {
    id: 'dalsi',
    label: 'Další léčba',
    note: 'Cokoli dalšího, co vám klinika předepsala. Aplikace z toho nic nevyvozuje.',
    kind: 'tableta',
    items: [
      'Kyselina listová',
      'Vitamin D',
      'Kyselina acetylsalicylová',
      'Nízkomolekulární heparin',
      'Clexane',
      'Fraxiparine',
      'Kortikoidy',
      'Prednison',
      'Antibiotika',
      'Metformin',
      'Levothyroxin',
      'Euthyrox',
      'Letrozol',
      'Klomifen',
    ],
  },
]

/** Volba „jiný přípravek“. Je v každé skupině a nikdy nesmí zmizet. */
export const JINY_LEK = 'Jiný přípravek'

const NAZVY = new Map<string, MedGroup>()
for (const g of MED_GROUPS) {
  for (const item of g.items) NAZVY.set(item.toLowerCase(), g)
}

/** Do které skupiny přípravek patří. `null` u vlastního názvu. */
export function groupOf(name: string): MedGroup | null {
  return NAZVY.get(name.trim().toLowerCase()) ?? null
}

/** Obvyklá forma podání pro daný přípravek. Jen předvyplnění formuláře. */
export function kindFor(name: string): MedKind {
  return groupOf(name)?.kind ?? 'tableta'
}

/**
 * Věta, která u seznamu léků musí stát vždycky.
 *
 * Ne v patičce a ne v nápovědě. Přímo tam, kde se lék vybírá, protože
 * seznam přípravků vypadá jako nabídka, i když nabídka není.
 */
export const DISCLAIMER =
  'Tenhle seznam je jen číselník pro zápis, ne doporučení. Co, kolik a kdy budete brát, určuje výhradně vaše klinika. Aplikace nikdy nenavrhne dávku, změnu ani vysazení.'
