import type { PhaseGroup, PhaseId } from './phases'
import { PHASES } from './phases'
import { seedFrom } from './dates'

/**
 * Otázky do deníku.
 *
 * Deník nemá být prázdné okno, do kterého se nikomu nechce psát. Každý den
 * dostane uživatelka jednu konkrétní otázku, která sedí na fázi a den, ve
 * kterém je. A která ji někam posune, místo aby jen zaznamenala náladu.
 *
 * Otázky jsou vědomě formulované tak, aby:
 *  - nepředpokládaly dobrý ani špatný výsledek,
 *  - nenutily do vděčnosti ani pozitivity,
 *  - se daly zodpovědět třemi větami, ne esejí.
 */

export interface JournalPrompt {
  id: string
  /** Pro koho otázka je. Prázdné = pro kohokoliv. */
  groups?: PhaseGroup[]
  phases?: PhaseId[]
  /** Den ve fázi, kdy se hodí nejvíc. */
  dayRange?: [number, number]
  text: string
  /** Proč se ptáme. Ukazuje se pod otázkou drobným písmem. */
  why: string
  kind: 'uvedomeni' | 'motivace' | 'hodnoceni' | 'hlava' | 'vztah'
}

export const PROMPT_KIND_LABELS: Record<JournalPrompt['kind'], string> = {
  uvedomeni: 'Uvědomění',
  motivace: 'Motivace',
  hodnoceni: 'Ohlédnutí',
  hlava: 'Práce s hlavou',
  vztah: 'Vztahy',
}

export const JOURNAL_PROMPTS: JournalPrompt[] = [
  // --- obecné, pro každou fázi ---------------------------------------------
  {
    id: 'p-dnes-tezke',
    text: 'Co bylo dnes nejtěžší. A co konkrétně vám na tom vadilo nejvíc?',
    why: 'Pojmenovat, co přesně bolí, je první krok k tomu, aby to přestalo být beztvará tíha.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-zvladla',
    text: 'Co jste dnes zvládla, i když se vám nechtělo?',
    why: 'Vaše hlava si pamatuje hlavně selhání. Tohle je záměrné vyvážení.',
    kind: 'motivace',
  },
  {
    id: 'p-telo-rika',
    text: 'Co vám dnes říkalo tělo? Kde jste cítila napětí?',
    why: 'Úzkost se často ohlásí v těle dřív než v myšlenkách. V čelisti, ramenou, břiše.',
    kind: 'hlava',
  },
  {
    id: 'p-kdyby-kamaradka',
    text: 'Kdyby vám tohle vyprávěla kamarádka, co byste jí řekla?',
    why: 'K sobě bývá člověk mnohem tvrdší než k ostatním. Tahle otázka ten rozdíl ukáže.',
    kind: 'hlava',
  },
  {
    id: 'p-co-neovlivnim',
    text: 'Co z toho, co vás dnes trápilo, opravdu nemůžete ovlivnit?',
    why: 'Energie utracená za neovlivnitelné je ta, která pak chybí jinde.',
    kind: 'hlava',
  },
  {
    id: 'p-male-dobre',
    text: 'Jaká malá věc vám dnes udělala dobře? I kdyby to byla jen káva v klidu.',
    why: 'Nejde o vděčnost na povel. Jde o to všimnout si, že i tenhle den něco měl.',
    kind: 'motivace',
  },
  {
    id: 'p-komu-rict',
    text: 'Je něco, co byste dnes potřebovala někomu říct. A neřekla jste to?',
    why: 'Nevyřčené věci se hromadí a pak vybuchnou u něčeho nesouvisejícího.',
    kind: 'vztah',
  },
  {
    id: 'p-tyden-zpet',
    text: 'Kde jste byla před týdnem? Co se od té doby změnilo?',
    why: 'Když se jede den po dni, posun není vidět. Zpětný pohled ho ukáže.',
    kind: 'hodnoceni',
  },
  {
    id: 'p-co-potrebuju',
    text: 'Co byste teď nejvíc potřebovala. A je způsob, jak si to dát?',
    why: 'Ženy v léčbě obvykle vědí, co potřebuje jejich tělo pro léčbu, a netuší, co potřebují ony.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-veta-hlavy',
    text: 'Jaká věta se vám dnes honila hlavou nejčastěji? Napište ji přesně tak, jak zněla.',
    why: 'Vypsaná myšlenka ztrácí sílu. Dokud je jen v hlavě, zní jako fakt.',
    kind: 'hlava',
  },

  // --- plánování a snažení -------------------------------------------------
  {
    id: 'p-plan-proc',
    groups: ['planning'],
    text: 'Proč chcete dítě? Napište to bez toho, jak by to znělo hezky.',
    why: 'Vlastní odpověď na tuhle otázku nese celou cestu. Vyplatí se ji znát dřív, než začne.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-plan-cekani',
    groups: ['planning'],
    text: 'Co děláte, když přijde menstruace? Máte pro ten den něco svého?',
    why: 'Ten den se opakuje každý měsíc. Připravený rituál je lepší než pokaždé improvizovat.',
    kind: 'motivace',
  },
  {
    id: 'p-plan-okoli',
    groups: ['planning'],
    text: 'Kdo z vašeho okolí ví, že se snažíte? A vyhovuje vám to tak?',
    why: 'Mlčení chrání, ale taky izoluje. Stojí za to to vědomě zvážit, ne to nechat náhodě.',
    kind: 'vztah',
  },

  // --- diagnostika ---------------------------------------------------------
  {
    id: 'p-dg-otazky',
    groups: ['diagnosis'],
    text: 'Co vám na posledním termínu nikdo pořádně nevysvětlil?',
    why: 'Tyhle nejasnosti se v hlavě rozrostou. Sepsané jdou vzít na příští kontrolu.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-dg-strach',
    groups: ['diagnosis'],
    text: 'Čeho se na výsledcích bojíte nejvíc? Zkuste to napsat celou větou.',
    why: 'Konkrétní obava se dá probrat s lékařem. Neurčitý strach ne.',
    kind: 'hlava',
  },
  {
    id: 'p-dg-tempo',
    groups: ['diagnosis'],
    text: 'Máte pocit, že to jde moc pomalu? Co konkrétně by šlo urychlit. A co ne?',
    why: 'Netrpělivost při vyšetřování je normální. Rozdělit ji na ovlivnitelné a neovlivnitelné pomáhá.',
    kind: 'hlava',
  },

  // --- léčba a cyklus ------------------------------------------------------
  {
    id: 'p-lecba-telo',
    groups: ['treatment'],
    text: 'Jak se dnes cítíte ve svém těle? Bez hodnocení, jen popis.',
    why: 'Během léčby se tělo stává nástrojem a přestává být domovem. Tohle je krok zpátky.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-lecba-cisla',
    groups: ['treatment'],
    text: 'Kolik času dnes zabraly myšlenky na čísla. Folikuly, hodnoty, dny?',
    why: 'Když se cesta scvrkne na čísla, je dobré si toho aspoň všimnout.',
    kind: 'hlava',
  },
  {
    id: 'p-lecba-partner',
    groups: ['treatment'],
    text: 'Co pro vás partner v posledních dnech udělal, čeho jste si možná nevšimla?',
    why: 'V zátěži se pozornost zužuje a to dobré propadne sítem.',
    kind: 'vztah',
  },
  {
    id: 'p-stim-zvladam',
    phases: ['stimulation'],
    dayRange: [1, 5],
    text: 'První injekce máte za sebou. Co bylo jinak, než jste čekala?',
    why: 'Většina žen zjistí, že to zvládly líp, než si představovaly. Stojí to za zapsání.',
    kind: 'motivace',
  },
  {
    id: 'p-stim-unava',
    phases: ['stimulation'],
    dayRange: [6, 14],
    text: 'Kde ubíráte, abyste to zvládla? A kde byste ubrat mohla, ale neděláte to?',
    why: 'Ke konci stimulace bývá tělo na hraně. Šetřit se není lenost.',
    kind: 'hodnoceni',
  },

  // --- čekání --------------------------------------------------------------
  {
    id: 'p-cekani-den',
    groups: ['waiting'],
    text: 'Co jste dnes udělala kromě čekání?',
    why: 'Dny čekání splývají. Jedna zapsaná věc denně jim vrátí tvar.',
    kind: 'motivace',
  },
  {
    id: 'p-cekani-priznaky',
    groups: ['waiting'],
    text: 'Kolikrát jste dnes rozebírala příznaky? Bez výčitek, jen odhad.',
    why: 'Všímat si toho zvyku je první krok k tomu, aby vás tolik nevyčerpával.',
    kind: 'hlava',
  },
  {
    id: 'p-cekani-oboji',
    groups: ['waiting'],
    text: 'Co uděláte, když to vyjde? A co, když ne? Napište obě varianty.',
    why: 'Hlava se snaží připravit jen na jednu. Napsat obě paradoxně uleví.',
    kind: 'hlava',
  },
  {
    id: 'p-cekani-podpora',
    groups: ['waiting'],
    dayRange: [5, 14],
    text: 'Kdo je člověk, kterému můžete zavolat ve tři ráno? Ví o tom?',
    why: 'Mít to promyšlené dřív, než to budete potřebovat, je rozdíl.',
    kind: 'vztah',
  },

  // --- ztráty --------------------------------------------------------------
  {
    id: 'p-ztrata-dovolit',
    groups: ['loss'],
    text: 'Co si dnes nedovolíte cítit? A proč?',
    why: 'Smutek, vztek i úleva můžou přijít najednou. Žádná z těch emocí není nepatřičná.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-ztrata-rict',
    groups: ['loss'],
    text: 'Kdybyste mohla něco říct tomu, kdo tu nezůstal, co by to bylo?',
    why: 'Pojmenovat ztrátu pomáhá víc než ji obcházet. Nikdo jiný to nikdy neuvidí.',
    kind: 'uvedomeni',
  },
  {
    id: 'p-ztrata-okoli',
    groups: ['loss'],
    text: 'Co vám lidé říkají a co byste potřebovala slyšet místo toho?',
    why: 'Okolí to většinou myslí dobře a trefí to špatně. Vědět, co byste potřebovala, se hodí i vám.',
    kind: 'vztah',
  },
  {
    id: 'p-ztrata-dnes-slo',
    groups: ['loss'],
    text: 'Co dnes šlo o kousek líp než včera? I kdyby to bylo cokoliv malého.',
    why: 'Truchlení není přímka. Zaznamenané malé posuny ukážou, že se přece jen něco děje.',
    kind: 'motivace',
  },

  // --- těhotenství a dál ---------------------------------------------------
]

/**
 * Otázka na daný den. Pro stejný den vyjde vždycky stejná, mezi dny se mění.
 * Stejné pravidlo jako u zbytku aplikace.
 */
export function promptFor(phase: PhaseId, dayInPhase: number, date: string): JournalPrompt {
  const group = PHASES[phase].group

  const fits = (p: JournalPrompt): boolean => {
    if (p.phases && !p.phases.includes(phase)) return false
    if (p.groups && !p.groups.includes(group)) return false
    if (p.dayRange && (dayInPhase < p.dayRange[0] || dayInPhase > p.dayRange[1])) return false
    return true
  }

  const targeted = JOURNAL_PROMPTS.filter((p) => (p.phases || p.groups) && fits(p))
  const general = JOURNAL_PROMPTS.filter((p) => !p.phases && !p.groups)

  // Dvě třetiny dní cílená otázka, zbytek obecná, aby se cílené neomílaly.
  const seed = seedFrom(date, phase, dayInPhase)
  const pool = targeted.length > 0 && seed % 3 !== 0 ? targeted : general
  return pool[seed % pool.length] ?? general[0]
}
