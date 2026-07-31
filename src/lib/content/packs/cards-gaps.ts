import type { ContentPack, DailyCard } from '../types'

/**
 * Karty pro fáze, které by jinak zůstaly bez denního obsahu.
 *
 * Domovská stránka bez karty spadne na obecný popis fáze — a slib „každý den
 * něco nového“ v tu chvíli přestane platit. Tenhle balík zavírá poslední díry:
 * přemýšlení o dítěti, inseminaci, samotný den porodu a batolecí období.
 */

const thinking: DailyCard[] = [
  {
    id: 'cg-think-1',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Rozhodnutí mít dítě se nerodí za jeden večer.',
    body: 'Období, kdy o dítěti přemýšlíte, není předstupeň ničeho — je to samostatná fáze. Nemusíte v ní mít jasno a nemusíte v ní nic dělat.',
    whatsHappening: [
      'Vajíčko, které se uvolní za tři měsíce, dozrává právě teď.',
      'Kyselinu listovou má smysl začít užívat dřív, než začnete zkoušet.',
      'Předkoncepční prohlídka u gynekologa je dobrý první krok.',
    ],
    task: 'Napište si, co byste chtěla mít vyřešené, než začnete zkoušet. Klidně i nezdravotní věci.',
    reflection: 'Co vám v tom rozhodnutí brání a co ho posouvá?',
  },
  {
    id: 'cg-think-2',
    phases: ['thinking', 'preparing_body'],
    dayRange: [0, 3650],
    headline: 'Připravuje se i muž, ne jen žena.',
    body: 'Spermie dozrávají zhruba tři měsíce. Co partner dělá teď, se projeví až za čtvrt roku — a mužský faktor se podílí zhruba na polovině případů neplodnosti.',
    whatsHappening: [
      'Kouření, alkohol a přehřívání varlat ovlivňují spermiogram.',
      'Spermiogram se dá udělat kdykoliv, nemusí se čekat rok.',
      'Příprava obou partnerů dává větší smysl než příprava jednoho.',
    ],
    task: 'Otevřete s partnerem téma přípravy. Ne jako výtku — jako společný plán.',
    reflection: 'Berete to jako společnou věc, nebo to táhnete sama?',
  },
]

const iui: DailyCard[] = [
  {
    id: 'cg-iui-0',
    phases: ['iui'],
    day: 0,
    headline: 'Dnes je inseminace.',
    body: 'Zákrok trvá pár minut, je bez anestezie a připomíná spíš odběr cytologie. Připravené spermie se zavedou tenkým katétrem přímo do dělohy.',
    whatsHappening: [
      'Načasování se řídí ovulací nebo dokončovací injekcí.',
      'Po zákroku se obvykle chvíli poležíte.',
      'Slabé křeče nebo špinění po zavedení katétru jsou běžné.',
    ],
    task: 'Naplánujte si na dnešek klidný večer. Zítřek bude jako každý jiný.',
    reflection: 'Jak se cítíte oproti tomu, co jste čekala?',
    tip: 'Běžný pohyb po inseminaci nic nezhorší. Ležení v posteli šanci nezvyšuje.',
  },
  {
    id: 'cg-iui-1',
    phases: ['iui'],
    dayRange: [-14, -1],
    headline: 'Před inseminací se hlídá načasování.',
    body: 'U inseminace rozhoduje trefa do ovulace. Proto monitoring, proto ultrazvuky a proto se termín může upřesnit na poslední chvíli.',
    whatsHappening: [
      'Cyklus může být stimulovaný mírnými léky, nebo přirozený.',
      'Ovulaci hlídá ultrazvuk, případně LH testy.',
      'Termín se často potvrdí jen den předem.',
    ],
    task: 'Nechte si v kalendáři volnější dva dny kolem předpokládaného termínu.',
    reflection: 'Co od téhle metody čekáte?',
  },
]

const birth: DailyCard[] = [
  ]

const toddler: DailyCard[] = [
  ]

export const pack: ContentPack = {
  dailyCards: [...thinking, ...iui, ...birth, ...toddler],
}
