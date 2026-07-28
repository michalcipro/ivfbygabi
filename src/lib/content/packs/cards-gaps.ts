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
  {
    id: 'cg-birth-0',
    phases: ['birth'],
    day: 0,
    headline: 'Dnes se narodilo vaše dítě.',
    body: 'Ať porod proběhl jakkoliv — přirozeně, s pomocí, císařem, rychle nebo dlouho — je hotový. To, co cítíte, nemusí být okamžitá zaplavující láska. U mnoha žen přichází postupně a je to naprosto v pořádku.',
    whatsHappening: [
      'První dvě hodiny po porodu bývají vyhrazené na bonding.',
      'Třes a zimnice po porodu jsou běžné.',
      'První přiložení je spíš seznámení než krmení.',
    ],
    task: 'Nechte si dnes pomoct se vším, co vám nabídnou.',
    reflection: 'Co si z dneška chcete zapamatovat?',
    callDoctorIf: [
      'Krvácíte tak, že promáčíte vložku za hodinu nebo méně.',
      'Máte silnou bolest, kterou neutlumí analgetika.',
      'Točí se vám hlava nebo omdléváte.',
    ],
  },
  {
    id: 'cg-birth-cs',
    phases: ['birth'],
    dayRange: [1, 3],
    modifiers: ['csection'],
    headline: 'První dny po císaři.',
    body: 'Císařský řez je břišní operace a podle toho se s vámi má zacházet. První vstávání je nejtěžší a zároveň nejdůležitější — čím dřív se postavíte, tím rychleji se zotavíte.',
    whatsHappening: [
      'Bolest bývá největší druhý den, kdy odezní anestezie.',
      'Nafouknuté břicho a zadržené plyny jsou běžné.',
      'Kojení jde i po císaři — jen se hledá poloha, která netlačí na jizvu.',
    ],
    task: 'Vyzkoušejte polohu při kojení, kde miminko neleží na jizvě — třeba fotbalové držení.',
    reflection: 'Jak se vyrovnáváte s tím, jak porod proběhl?',
    tip: 'Při vstávání se otočte na bok, spusťte nohy z postele a zvedejte se rukama — ne břichem.',
    callDoctorIf: [
      'Jizva je zarudlá, teplá, mokvá nebo zapáchá.',
      'Máte teplotu nad 38 °C.',
      'Bolest jedné lýtkové svaloviny s otokem — může jít o trombózu.',
    ],
  },
  {
    id: 'cg-birth-vag',
    phases: ['birth'],
    dayRange: [1, 3],
    modifiers: ['vaginal_birth'],
    headline: 'První dny po přirozeném porodu.',
    body: 'Hráz bolí, sezení je nepříjemné a záchod se stává výzvou. Většina toho se během prvního týdne výrazně zlepší.',
    whatsHappening: [
      'Stehy se obvykle vstřebávají samy.',
      'Chlazení v prvních dnech výrazně uleví.',
      'Strach z první stolice je běžný a obvykle horší než realita.',
    ],
    task: 'Poproste o chladivé vložky. A o změkčovadlo stolice, pokud vám ho nenabídnou.',
    reflection: 'Co vám dnes pomohlo nejvíc?',
    callDoctorIf: [
      'Očistky náhle zesílí nebo začnou zapáchat.',
      'Máte teplotu nad 38 °C.',
      'Bolest hráze se místo zlepšování zhoršuje.',
    ],
  },
]

const toddler: DailyCard[] = [
  {
    id: 'cg-toddler-1',
    phases: ['toddler'],
    dayRange: [366, 550],
    headline: 'Po prvních narozeninách cesta nekončí.',
    body: 'Batolecí období přináší chůzi, první slova a první „ne“. Vývoj je teď hodně nerovnoměrný — týden se neděje nic a pak přijdou tři věci najednou.',
    whatsHappening: [
      'Chuť k jídlu kolísá, protože růst se zpomaluje.',
      'Vzdorovité chování je vývojový krok, ne výchovné selhání.',
      'U dětí narozených předčasně se vývoj hodnotí korigovaně zhruba do dvou let.',
    ],
    task: 'Zapište si do kroniky jedno nové slovo, které dnes zaznělo.',
    reflection: 'Co vás na tomhle období baví a co vyčerpává?',
  },
  {
    id: 'cg-toddler-2',
    phases: ['toddler'],
    dayRange: [551, 1200],
    headline: 'Druhý rok. Osobnost je na světě.',
    body: 'Vaše dítě má názor, plán a vlastní představu o tom, jak má den vypadat. Většina konfliktů v tomhle věku vzniká z toho, že chce být samostatné dřív, než to zvládne.',
    whatsHappening: [
      'Slovní zásoba roste skokově.',
      'Záchvaty vzteku jsou přetížení nervového systému, ne manipulace.',
      'Rutina a předvídatelnost snižují počet konfliktů víc než domlouvání.',
    ],
    task: 'Nabídněte dnes jednu volbu ze dvou možností místo pokynu.',
    reflection: 'Kdo jste teď, po tom všem, co bylo?',
  },
]

export const pack: ContentPack = {
  dailyCards: [...thinking, ...iui, ...birth, ...toddler],
}
