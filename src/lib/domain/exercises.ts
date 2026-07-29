import type { PhaseGroup } from './phases'

/**
 * Techniky práce s hlavou.
 *
 * Ne články o tom, jak by se to dalo dělat — věci, které se v aplikaci
 * odklikají. Vycházejí z postupů, které se běžně používají v KBT, terapii
 * přijetí a všímavosti. Žádná z nich není léčba a žádná nenahrazuje
 * odbornou pomoc; jsou to nástroje na konkrétní těžkou chvíli.
 */

export type ExerciseId = 'dech' | 'uzemneni' | 'prerameni' | 'kontrola' | 'tri-dobre' | 'soucit'

export interface Exercise {
  id: ExerciseId
  title: string
  /** Kdy po ní sáhnout. */
  when: string
  minutes: number
  /** Co to dělá a proč to funguje. Bez ezoteriky. */
  how: string
  /** Kterým fázím se hodí nabízet přednostně. */
  groups?: PhaseGroup[]
  icon: string
  /** Kroky u průchozích cvičení. */
  steps?: { label: string; hint: string }[]
}

export const EXERCISES: Exercise[] = [
  {
    id: 'dech',
    title: 'Dýchání 4–6',
    when: 'Když bije srdce, svírá se hrudník nebo nejde usnout.',
    minutes: 5,
    icon: '◍',
    how: 'Nádech na čtyři doby, výdech na šest. Delší výdech než nádech aktivuje tu část nervového systému, která tělo zklidňuje. Není to relaxace „když se to podaří“ — je to mechanika, která funguje i ve chvíli, kdy vám vůbec není do klidu.',
  },
  {
    id: 'uzemneni',
    title: 'Uzemnění 5–4–3–2–1',
    when: 'Když se myšlenky rozjedou a nejde je zastavit.',
    minutes: 4,
    icon: '◈',
    how: 'Postupně si všimnete pěti věcí, které vidíte, čtyř, které slyšíte, tří, kterých se dotýkáte, dvou, které cítíte, a jedné, kterou chutnáte. Pozornost se tím vrátí z hlavy do přítomné chvíle. Čím konkrétnější popis, tím lépe to funguje.',
    steps: [
      { label: '5 věcí, které vidíte', hint: 'Popište je konkrétně — ne „stůl“, ale „škrábanec na levém rohu stolu“.' },
      { label: '4 věci, které slyšíte', hint: 'I ty, které jste do teď přeslechla.' },
      { label: '3 věci, kterých se dotýkáte', hint: 'Látka, teplota, podložka pod nohama.' },
      { label: '2 věci, které cítíte', hint: 'Vůně v místnosti, vzduch.' },
      { label: '1 věc, kterou chutnáte', hint: 'Nebo prostě chuť v ústech.' },
    ],
  },
  {
    id: 'prerameni',
    title: 'Přerámování myšlenky',
    when: 'Když se v hlavě zasekne jedna věta a zní jako fakt.',
    minutes: 8,
    icon: '❖',
    how: 'Vypíšete myšlenku, která vás tíží, a pak zvlášť to, co ji podporuje, a to, co jí odporuje. Nakonec ji přeformulujete tak, aby byla pravdivá i laskavá. Nejde o to myslet pozitivně — jde o to myslet přesně. Většina úzkostných myšlenek přesná není.',
    steps: [
      { label: 'Myšlenka', hint: 'Napište ji přesně tak, jak zněla v hlavě. Klidně tvrdě.' },
      { label: 'Co ji podporuje', hint: 'Fakta, ne pocity. Co skutečně nasvědčuje tomu, že je pravdivá?' },
      { label: 'Co jí odporuje', hint: 'Co ji vyvrací nebo zjemňuje? Co byste namítla kamarádce?' },
      { label: 'Přesnější verze', hint: 'Věta, která je pravdivá a zároveň se s ní dá žít.' },
    ],
  },
  {
    id: 'kontrola',
    title: 'Kolo kontroly',
    when: 'Když se myšlenky točí kolem věcí, se kterými nic nenaděláte.',
    minutes: 6,
    icon: '◉',
    how: 'Vypíšete, co vás trápí, a roztřídíte to na věci, které ovlivnit můžete, a na ty, které ne. Pak se zabýváte jen prvním sloupcem. Léčba je plná neovlivnitelného — a energie, kterou tam necháte, chybí jinde.',
    groups: ['treatment', 'waiting', 'diagnosis'],
  },
  {
    id: 'tri-dobre',
    title: 'Tři dobré věci',
    when: 'Večer, hlavně ve dnech, které vypadaly celé špatně.',
    minutes: 3,
    icon: '✦',
    how: 'Zapíšete tři věci, které dnes proběhly dobře, a u každé krátce proč. Není to nucená vděčnost — je to trénink pozornosti. Mozek si v zátěži ukládá hlavně hrozby, tohle je vědomé vyvážení. Patří k nejlépe prozkoumaným cvičením v pozitivní psychologii.',
    steps: [
      { label: 'První dobrá věc', hint: 'Klidně úplně malá.' },
      { label: 'Druhá dobrá věc', hint: 'Co k ní vedlo?' },
      { label: 'Třetí dobrá věc', hint: 'Měla jste na ní podíl vy?' },
    ],
  },
  {
    id: 'soucit',
    title: 'Dopis sobě',
    when: 'Když si nadáváte nebo máte pocit, že za to můžete.',
    minutes: 10,
    icon: '❦',
    how: 'Napíšete si dopis tak, jak byste psala nejbližší kamarádce ve stejné situaci. Sebe-soucit není omlouvání ani lítost — je to způsob, jak snížit tlak natolik, aby zbyla energie na to podstatné. Ženy v léčbě k sobě bývají mnohem tvrdší než ke komukoliv jinému.',
    groups: ['loss', 'waiting', 'treatment'],
  },
]

export function exerciseById(id: string): Exercise | undefined {
  return EXERCISES.find((e) => e.id === id)
}

/** Co nabídnout přednostně — cvičení pro fázi jdou nahoru. */
export function exercisesFor(group: PhaseGroup): Exercise[] {
  return [...EXERCISES].sort((a, b) => {
    const aFits = a.groups?.includes(group) ? 1 : 0
    const bFits = b.groups?.includes(group) ? 1 : 0
    return bFits - aFits
  })
}

/**
 * Návrh techniky podle toho, jak se dnes cítí. Prahy jsou záměrně hrubé —
 * jde o nabídku, ne o diagnostiku.
 */
export function suggestExercise(mood: number | null, anxiety: number | null): ExerciseId {
  if (anxiety !== null && anxiety >= 4) return 'dech'
  if (mood !== null && mood <= 2) return 'soucit'
  if (anxiety !== null && anxiety >= 3) return 'uzemneni'
  return 'tri-dobre'
}
