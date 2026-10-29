import type { ContentPack, DailyCard } from '../types'

/**
 * Karty pro fáze, které by jinak zůstaly bez denního obsahu.
 *
 * Domovská stránka bez karty spadne na obecný popis fáze. A slib „každý den
 * něco nového“ v tu chvíli přestane platit. Tenhle balík zavírá poslední díry:
 * přemýšlení o dítěti, inseminaci, samotný den porodu a batolecí období.
 *
 * ------------------------------------------------------- JAK SE TU POČÍTÁ DEN ---
 * Obě fáze počítají dny jinak a karty to musí respektovat, jinak se napíšou
 * a nikdy se neukážou.
 *
 * **Přemýšlíme o dítěti** nemá v profilu vlastní datum. Den se počítá ode dne,
 * kdy si tuhle fázi uživatelka zvolila, a roste donekonečna: fáze může trvat
 * týden i dva roky. První tři dny mají proto kartu na přesný den, zbytek běží
 * v širokém rozsahu a střídá se.
 *
 * **Inseminace** má datum zákroku a fáze sahá od čtrnácti dnů před ním do
 * dne samotného. Den je tedy záporný, nula je den inseminace a den po ní už
 * patří čekání na výsledek. Jenže když si uživatelka fázi jen zvolí a datum
 * nezadá, počítá se ode dne volby a den je kladný. Proto je tu druhá skupina
 * karet úplně bez dne: ty jediné se v takovém případě mají čeho chytit.
 */

const thinking: DailyCard[] = [
  {
    id: 'cg-think-1',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Rozhodnutí mít dítě se nerodí za jeden večer.',
    body: 'Období, kdy o dítěti přemýšlíte, není předstupeň ničeho. Je to samostatná fáze. Nemusíte v ní mít jasno a nemusíte v ní nic dělat.',
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
    body: 'Spermie dozrávají zhruba tři měsíce. Co partner dělá teď, se projeví až za čtvrt roku. A mužský faktor se podílí zhruba na polovině případů neplodnosti.',
    whatsHappening: [
      'Kouření, alkohol a přehřívání varlat ovlivňují spermiogram.',
      'Spermiogram se dá udělat kdykoliv, nemusí se čekat rok.',
      'Příprava obou partnerů dává větší smysl než příprava jednoho.',
    ],
    task: 'Otevřete s partnerem téma přípravy. Ne jako výtku, jako společný plán.',
    reflection: 'Berete to jako společnou věc, nebo to táhnete sama?',
  },

  // --- první tři dny: orientace, přesně na den -----------------------------
  {
    id: 'cg-think-3',
    phases: ['thinking'],
    day: 0,
    headline: 'Jste na začátku a to je v pořádku.',
    body: 'Tahle fáze nemá délku. Někdo v ní stráví měsíc, někdo dva roky, a obojí je normální. Nic tu nezameškáváte, protože tu není co dohánět.',
    whatsHappening: [
      'Zatím se nic neléčí ani nediagnostikuje.',
      'Většinu toho, co má smysl udělat, zvládnete bez lékaře.',
      'Aplikace vám sem bude posílat jedno téma denně, ne seznam úkolů.',
    ],
    task: 'Rozhlédněte se po aplikaci. Nikam se nespěchá, jen ať víte, co kde je.',
    reflection: 'Co vás sem přivedlo právě dnes?',
  },
  {
    id: 'cg-think-4',
    phases: ['thinking'],
    day: 1,
    headline: 'Kdy má smysl jít k lékaři.',
    body: 'Pravidlo je jednoduché a nemá nic společného s tím, jak moc se snažíte. Do pětatřiceti po roce snažení, nad pětatřicet po půl roce, nad čtyřicet rovnou.',
    whatsHappening: [
      'Rovnou jděte i tehdy, když máte nepravidelný cyklus nebo žádný.',
      'Totéž při endometrióze, operaci vaječníků nebo po onkologické léčbě.',
      'Totéž, když partner prodělal zánět varlat nebo operaci v třísle.',
    ],
    task: 'Spočítejte si, jak dlouho to doopravdy zkoušíte. Ne dojmem, podle kalendáře.',
    reflection: 'Čekáte na nějakou hranici, nebo spíš odkládáte první krok?',
  },
  {
    id: 'cg-think-5',
    phases: ['thinking'],
    day: 2,
    headline: 'Kyselina listová se bere dřív, než si myslíte.',
    body: 'Nervová trubice plodu se uzavírá do čtvrtého týdne těhotenství, tedy ve chvíli, kdy většina žen ještě neví, že je těhotná. Na doplnění zásob je potřeba zhruba měsíc předem, ideálně tři.',
    whatsHappening: [
      'Běžná dávka je 400 mikrogramů denně.',
      'Vyšší dávku předepisuje lékař, třeba při cukrovce nebo předchozí vadě.',
      'Je to jediný doplněk, který doporučují všechny odborné společnosti shodně.',
    ],
    task: 'Podívejte se, jestli už něco berete, a zkontrolujte dávku na obalu.',
    tip: 'Kupujte samotnou kyselinu listovou nebo prenatální vitamín. Multivitamín pro dospělé může obsahovat vysokou dávku vitamínu A, která se v těhotenství nehodí.',
  },

  // --- dál už se střídá podle dne ------------------------------------------
  {
    id: 'cg-think-6',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Předkoncepční prohlídka: co se na ní děje.',
    body: 'Je to obyčejná návštěva u gynekologa, na kterou přijdete s tím, že plánujete těhotenství. Trvá zhruba půl hodiny a ušetří měsíce dohadování.',
    whatsHappening: [
      'Odebere se krev: krevní obraz, štítná žláza, imunita proti zarděnkám.',
      'Zkontroluje se cytologie a ultrazvuk dělohy a vaječníků.',
      'Projdou se léky, které užíváte, a očkování.',
    ],
    task: 'Objednejte se, nebo si aspoň najděte číslo a dejte si připomínku.',
    reflection: 'Co byste se lékaře chtěla zeptat, kdyby byl čas na všechno?',
  },
  {
    id: 'cg-think-7',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Štítná žláza umí tiše bránit otěhotnění.',
    body: 'Nedostatečná funkce štítné žlázy nemusí dělat žádné potíže, a přitom zhoršuje otěhotnění i udržení těhotenství. Pozná se z jednoho odběru krve.',
    whatsHappening: [
      'Měří se TSH, při plánování těhotenství se cílí na hodnotu pod 2,5.',
      'Léčba je jedna tableta ráno nalačno, bez vedlejších účinků.',
      'Zároveň se vyplatí zkontrolovat protilátky, pokud je štítná žláza v rodině.',
    ],
    task: 'Podívejte se do starších výsledků, jestli tam TSH nemáte. Bývá v běžném odběru.',
    tip: 'Pokud se léčíte, dávka se v těhotenství obvykle zvyšuje hned v prvních týdnech. Ohlaste otěhotnění endokrinologovi dřív než komukoli jinému.',
  },
  {
    id: 'cg-think-8',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Očkování se řeší teď, v těhotenství už to nejde.',
    body: 'Zarděnky a plané neštovice jsou v těhotenství nebezpečné pro plod a očkuje se proti nim živou vakcínou, kterou těhotná dostat nesmí. Proto se imunita kontroluje předem.',
    whatsHappening: [
      'Protilátky proti zarděnkám se zjistí z krve.',
      'Po živé vakcíně se doporučuje měsíc neotěhotnět.',
      'Očkování proti chřipce a černému kašli se naopak dává až v těhotenství.',
    ],
    task: 'Najděte očkovací průkaz. Když ho nemáte, zeptejte se praktického lékaře.',
    reflection: 'Kolik věcí odkládáte proto, že se zdají malé?',
  },
  {
    id: 'cg-think-9',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Jak poznat ovulaci bez hádání.',
    body: 'Otěhotnět jde zhruba šest dní v cyklu: pět dní před ovulací a v den ovulace. Spermie přežijí v děložním hrdle několik dní, vajíčko jen necelý den. Proto se netrefuje den, ale okno.',
    whatsHappening: [
      'Hlen je před ovulací řídký, čirý a táhne se.',
      'LH testy z moči ukážou vzestup hormonu zhruba den až dva předem.',
      'Bazální teplota stoupne až po ovulaci, takže se hodí na potvrzení, ne na plánování.',
    ],
    task: 'Zapište si do aplikace, kdy vám naposledy začala menstruace. Z toho se dá počítat dál.',
    tip: 'Sex obden po celé plodné okno stačí. Denně to šanci nezvyšuje a dělá z toho službu.',
  },
  {
    id: 'cg-think-10',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Po vysazení antikoncepce.',
    body: 'Plodnost se vrací prakticky hned, žádná pauza na vyčištění těla není potřeba a žádná studie ji nepodporuje. Cyklus se ale může pár měsíců hledat, než se usadí do svého rytmu.',
    whatsHappening: [
      'První menstruace po vysazení může přijít později než obvykle.',
      'Nepravidelnost delší než tři měsíce už stojí za návštěvu lékaře.',
      'Antikoncepce užívaná roky plodnost do budoucna nesnižuje.',
    ],
    task: 'Začněte si zapisovat první dny cyklu. Za tři měsíce uvidíte vzorec.',
    reflection: 'Co jste o antikoncepci slyšela a co z toho víte jistě?',
  },
  {
    id: 'cg-think-11',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Spermiogram se nemusí odkládat na rok.',
    body: 'Je to nejrychlejší a nejlevnější vyšetření v celé té cestě a vyřeší polovinu otázek. Přitom se k němu páry často dostanou až po roce marného snažení a všech vyšetření u ženy.',
    whatsHappening: [
      'Před odběrem se doporučuje dva až pět dní bez výronu semene.',
      'Výsledek se hodnotí z jednoho vzorku, ale potvrzuje se druhým.',
      'Opakuje se zhruba po třech měsících, protože tak dlouho spermie dozrávají.',
    ],
    task: 'Zjistěte, kde se ve vašem městě spermiogram dělá a jestli je potřeba žádanka.',
    reflection: 'Mluvili jste o tom spolu, nebo se tomu oba vyhýbáte?',
  },
  {
    id: 'cg-think-12',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Váha, pohyb a plodnost bez moralizování.',
    body: 'Hmotnost plodnost ovlivňuje v obou směrech, nahoru i dolů, protože tuková tkáň se podílí na hormonální rovnováze. Nejde o vzhled a nejde o vinu. Jde o to, že i malá změna hodně mění.',
    whatsHappening: [
      'Ztráta pěti až deseti procent hmotnosti umí obnovit ovulaci.',
      'Velmi nízká hmotnost a tvrdý trénink ovulaci naopak zastavují.',
      'Pravidelný mírný pohyb pomáhá víc než nárazové hubnutí.',
    ],
    task: 'Vyberte si jednu věc, kterou zvládnete každý den. Třeba dvacet minut chůze.',
    tip: 'Drastické diety před léčbou spíš škodí. Tělo, které hladoví, se nechce rozmnožovat.',
  },
  {
    id: 'cg-think-13',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Alkohol, kouření a káva v číslech.',
    body: 'Nejde o dokonalost, ale o to vědět, kde je hranice. Kouření je z téhle trojice jednoznačně nejhorší a jako jediné prokazatelně snižuje počet vajíček.',
    whatsHappening: [
      'Kouření urychluje úbytek ovariální rezervy a zhoršuje spermiogram.',
      'U kofeinu se doporučuje zůstat zhruba do 200 miligramů denně, tedy dvě kávy.',
      'Pro alkohol v těhotenství není známá bezpečná dávka, při snažení se doporučuje omezit.',
    ],
    task: 'Vyberte jednu z těch tří věcí a zkuste ji na týden snížit. Jednu, ne všechny.',
    reflection: 'Která z nich je pro vás nejtěžší a proč?',
  },
  {
    id: 'cg-think-14',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Léky a chronické nemoci se probírají předem.',
    body: 'Cukrovka, epilepsie, autoimunitní nemoci, vysoký tlak i deprese se dají v těhotenství zvládnout, ale skoro vždy je potřeba léčbu předem upravit. Nikdy ne svépomocí.',
    whatsHappening: [
      'Některé léky se před otěhotněním vyměňují za bezpečnější.',
      'Vysadit antidepresiva bez domluvy bývá rizikovější než je užívat dál.',
      'U cukrovky se před otěhotněním cílí na dobře srovnaný cukr.',
    ],
    task: 'Sepište všechno, co užíváte, včetně doplňků a bylin. Seznam se bude hodit u každého lékaře.',
    callDoctorIf: [
      'Chcete kvůli plánování vysadit jakýkoli předepsaný lék.',
      'Užíváte lék, u kterého je v příbalu zmíněné těhotenství.',
    ],
  },
  {
    id: 'cg-think-15',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Co vlastně hradí pojišťovna.',
    body: 'Z veřejného zdravotního pojištění jsou hrazené tři cykly umělého oplodnění, a čtvrtý tehdy, když se v prvních dvou přenášelo jedno embryo. Platí to do dovršení devětatřiceti let.',
    whatsHappening: [
      'Vyšetření a inseminace se hradí také, podmínky si ověřte na klinice.',
      'Nehrazené bývají metody navíc, třeba genetické vyšetření embryí.',
      'Věková hranice se počítá k datu zahájení cyklu, ne k datu objednání.',
    ],
    task: 'Jen si poznamenejte svůj věk a tu hranici. Ať s tím počítáte, až přijde čas rozhodovat.',
    tip: 'Čísla a podmínky se mění. Ptejte se na klinice a na své pojišťovně, ne v diskuzích.',
  },
  {
    id: 'cg-think-16',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'AMH neříká to, co si lidé myslí.',
    body: 'Hodnota AMH odhaduje, kolik vajíček ve vaječnících zbývá. Neříká nic o jejich kvalitě a sama o sobě nepředpovídá, jestli otěhotníte přirozeně. Nízké AMH není rozsudek a vysoké není záruka.',
    whatsHappening: [
      'AMH hlavně pomáhá naplánovat dávku léků před stimulací.',
      'Kvalitu vajíček určuje především věk, ne AMH.',
      'Vysoké AMH bývá u syndromu polycystických vaječníků.',
    ],
    task: 'Když už hodnotu máte, zapište si ji do aplikace i s datem. Bez data je k ničemu.',
    reflection: 'Nenechala jste si jedno číslo říct víc, než ve skutečnosti umí?',
  },
  {
    id: 'cg-think-17',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Když každý z vás chce něco jiného.',
    body: 'Jeden chce začít hned, druhý ještě počkat. To není neshoda o dítěti, to bývá neshoda o tempu, o penězích nebo o strachu. Dokud se nepojmenuje, hádáte se o něčem jiném, než o co jde.',
    whatsHappening: [
      'Odkládání často není nezájem, ale obava z toho, co to udělá se životem.',
      'Léčba zabere víc času a emocí, než se čeká, a to je dobré vědět předem.',
      'Páry, které si dopředu řeknou, kde je jejich hranice, to zvládají líp.',
    ],
    task: 'Zeptejte se partnera na jednu věc: čeho se na tom bojí nejvíc.',
    reflection: 'Víte, co by pro vás bylo moc? Nemusíte to říct nahlas, stačí vědět.',
  },
  {
    id: 'cg-think-18',
    phases: ['thinking'],
    dayRange: [0, 3650],
    headline: 'Odložit není to samé jako nechat být.',
    body: 'Když to teď nevychází, existuje střední cesta: nechat si zmrazit vajíčka. Rozhoduje věk v době zmrazení, ne v době použití, takže o tom má smysl přemýšlet dřív než pozdě.',
    whatsHappening: [
      'Zákrok je stejný jako první polovina cyklu umělého oplodnění.',
      'Hradí se sama, pokud k tomu není zdravotní důvod.',
      'Před onkologickou léčbou je to naopak standardní postup a řeší se bezodkladně.',
    ],
    task: 'Jestli vás to zajímá, napište si otázku na kliniku. Konzultace nezavazuje k ničemu.',
    reflection: 'Rozhodujete se teď, nebo si jen necháváte otevřené dveře?',
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

  /*
   * Odpočítávání k zákroku.
   *
   * Tyhle čtyři mají PŘESNÝ den, ne rozsah, a je to měřený rozdíl.
   * S rozsahem se nezobrazila ani jedna z nich: na dni, kde rozsah platil,
   * seděly jen dvě karty, výběr proto přibral i slabší vrstvu a v ní se
   * rotací ztratily. Přesná trefa na den se neředí nikdy, takže karta
   * o dokončovací injekci přijde v den, kdy se píchá.
   *
   * Dny odpovídají obvyklému stimulovanému cyklu: menstruace zhruba dvanáct
   * dní před zákrokem, kontrolní ultrazvuk kolem pátého dne předem,
   * injekce dva dny předem.
   */
  {
    id: 'cg-iui-2',
    phases: ['iui'],
    day: -12,
    headline: 'Začíná cyklus, ve kterém půjdete na inseminaci.',
    body: 'První polovina cyklu je o tom nechat dozrát folikul a najít ten správný den. Pokud je cyklus stimulovaný, berou se mírné léky v tabletách nebo nízké dávky injekcí.',
    whatsHappening: [
      'Při stimulaci se cílí na jeden až dva zralé folikuly, ne na víc.',
      'První ultrazvuk bývá kolem desátého dne cyklu.',
      'Přirozený cyklus bez léků je také běžná varianta.',
    ],
    task: 'Zapište si do aplikace první den menstruace. Od něj se počítá všechno ostatní.',
    reflection: 'Víte, jestli máte cyklus stimulovaný, nebo přirozený?',
  },
  {
    id: 'cg-iui-3',
    phases: ['iui'],
    day: -5,
    headline: 'Na ultrazvuku se měří folikul.',
    body: 'Lékař sleduje, jak roste vedoucí folikul, a zároveň kontroluje sliznici dělohy. Folikul roste zhruba o dva milimetry denně a za zralý se považuje zhruba od osmnácti.',
    whatsHappening: [
      'Měří se velikost folikulu i tloušťka sliznice.',
      'Podle nálezu se určí den inseminace, nebo se kontrola za dva dny zopakuje.',
      'Když folikulů dozrává moc, může se cyklus přerušit kvůli riziku vícerčat.',
    ],
    task: 'Zeptejte se při kontrole na dvě čísla: velikost folikulu a výšku sliznice. Zapište si je.',
    tip: 'Čísla z každé kontroly si ukládejte. Za tři cykly z nich uvidíte vzorec, který vám jinak unikne.',
  },
  {
    id: 'cg-iui-4',
    phases: ['iui'],
    day: -2,
    headline: 'Dokončovací injekce určí hodinu.',
    body: 'Když je folikul zralý, podá se injekce, která spustí uvolnění vajíčka. Inseminace se pak dělá zhruba za den až půldruhého dne. Proto se na klinice dozvíte přesnou hodinu, ne jen den.',
    whatsHappening: [
      'Injekce se obvykle píchá večer, do podkoží na břiše.',
      'Čas podání je důležitý, posun o hodiny může posunout ovulaci.',
      'Někdy se místo injekce čeká na vlastní vzestup LH z testů.',
    ],
    task: 'Napište si čas injekce i čas zákroku na papír nebo do připomínky. Nespoléhejte na paměť.',
    callDoctorIf: [
      'Injekci jste vynechala nebo podala v jiný čas, než bylo domluvené.',
      'Při stimulaci vám rychle roste břicho, přibíráte nebo se hůř dýchá.',
    ],
  },
  {
    id: 'cg-iui-5',
    phases: ['iui'],
    day: -1,
    headline: 'Zítra je to.',
    body: 'Zákrok se nemusí nijak chystat. Nelačníte, neusínáte, nikdo vás neuspává a po něm odejdete po svých. Jediné, co se opravdu hodí ohlídat, se týká partnera.',
    whatsHappening: [
      'Partner by měl mít dva až pět dní bez výronu semene, ne víc.',
      'Příprava vzorku v laboratoři trvá zhruba hodinu.',
      'Vzorek se obvykle odevzdává přímo na klinice, kvůli času a teplotě.',
    ],
    task: 'Ověřte si tři věci na zítřek: hodinu, kam přesně jít a kdo odevzdá vzorek.',
    reflection: 'Co by vám dnes večer pomohlo usnout?',
  },

  // --- karty bez dne: platí i když je zvolená fáze bez data ----------------
  {
    id: 'cg-iui-6',
    phases: ['iui'],
    headline: 'Co inseminace je a co není.',
    body: 'Spermie se připraví v laboratoři a zavedou tenkou hadičkou přímo do dělohy, aby nemusely přes děložní hrdlo. Oplození pak probíhá uvnitř vás, přirozeně. Není to umělé oplodnění a nepracuje se s embryi.',
    whatsHappening: [
      'Ze vzorku se vyberou pohyblivé spermie a odstraní se semenná plazma.',
      'Vajíčko se neodebírá, zůstává ve vaječníku a uvolní se samo.',
      'Celý zákrok trvá pár minut a dělá se ambulantně.',
    ],
    task: 'Zapište si jednu otázku, kterou na kliniku máte. Ať nezapadne do čekárny.',
    reflection: 'Je pro vás tenhle krok úleva, nebo zklamání, že to nejde samo?',
  },
  {
    id: 'cg-iui-7',
    phases: ['iui'],
    headline: 'Pro koho inseminace dává smysl.',
    body: 'Je to šetrnější a levnější krok než umělé oplodnění, ale nehodí se na všechno. Potřebuje aspoň jeden průchodný vejcovod a vzorek, ve kterém je dost pohyblivých spermií.',
    whatsHappening: [
      'Dává smysl při mírném mužském faktoru a při nevysvětlené neplodnosti.',
      'Používá se také u dárcovského vzorku a při potížích s hrdlem děložním.',
      'Nehodí se při neprůchodných vejcovodech ani při těžkém mužském faktoru.',
    ],
    task: 'Zeptejte se na klinice, proč doporučili právě tohle. Odpověď má mít konkrétní důvod.',
    reflection: 'Rozumíte tomu, proč zrovna tenhle krok, a ne jiný?',
  },
  {
    id: 'cg-iui-8',
    phases: ['iui'],
    headline: 'Úspěšnost: čísla, se kterými se dá počítat.',
    body: 'Jeden cyklus inseminace vyjde zhruba v deseti až patnácti procentech, u žen do pětatřiceti spíš při horní hranici. Zní to málo, jenže se to sčítá: za tři až čtyři cykly se šance blíží třetině.',
    whatsHappening: [
      'Úspěšnost klesá s věkem, nejvýrazněji po čtyřicítce.',
      'Stimulovaný cyklus má o něco vyšší šanci než přirozený.',
      'Po třech až čtyřech neúspěšných cyklech se obvykle přechází na umělé oplodnění.',
    ],
    task: 'Domluvte si s partnerem, kolik cyklů chcete zkusit, než se bude rozhodovat znovu.',
    reflection: 'Co pro vás bude znamenat, když to napoprvé nevyjde?',
    tip: 'Hranici si určete teď, ne po negativním testu. Rozhoduje se líp, dokud nebolí.',
  },
  {
    id: 'cg-iui-9',
    phases: ['iui'],
    headline: 'Stimulovaný cyklus má svoje riziko.',
    body: 'Léky zvyšují šanci tím, že dozraje víc než jedno vajíčko. Jenže u inseminace se nedá vybrat, kolik jich bude oplozeno, takže roste i šance na dvojčata nebo trojčata. Proto se cílí na jeden až dva folikuly.',
    whatsHappening: [
      'Vícečetné těhotenství je zdravotní riziko pro vás i pro děti.',
      'Když dozraje folikulů moc, klinika cyklus raději zruší.',
      'Zrušený cyklus je nepříjemný, ale je to rozhodnutí ve váš prospěch.',
    ],
    task: 'Zeptejte se, kolik folikulů je u vás ještě v pořádku a kdy by se cyklus rušil.',
    callDoctorIf: [
      'Po stimulaci vám během dne až dvou výrazně roste břicho.',
      'Máte dušnost, silnou bolest břicha nebo močíte podstatně méně.',
    ],
  },
  {
    id: 'cg-iui-10',
    phases: ['iui'],
    headline: 'Vzorek a den odběru.',
    body: 'Kvalita vzorku kolísá a zdaleka ne všechno se dá ovlivnit. Dvě věci ale ano: doba bez výronu semene a to, aby se vzorek dostal do laboratoře rychle.',
    whatsHappening: [
      'Dva až pět dní abstinence je optimum, delší pauza kvalitu spíš zhoršuje.',
      'Horečka v posledních třech měsících umí vzorek dočasně zhoršit.',
      'Vzorek se odevzdává na klinice, cestou chladne a to vadí.',
    ],
    task: 'Spočítejte si s partnerem ten interval zpětně. Lepší zjistit to dnes než ráno na klinice.',
    reflection: 'Nese partner svou část, nebo to organizujete celé vy?',
  },
  {
    id: 'cg-iui-11',
    phases: ['iui'],
    headline: 'Sex kolem inseminace není zakázaný.',
    body: 'Naopak, v den zákroku nebo večer po něm může šanci mírně zvýšit. Omezení se týká jen dnů před odběrem vzorku, aby byla abstinence v doporučeném rozmezí.',
    whatsHappening: [
      'Po zavedení katétru může být den dva slabé špinění.',
      'Když je sliznice citlivá, nic se neděje, když vynecháte.',
      'Žádný zákaz pohybu, sprchování ani běžné práce neplatí.',
    ],
    task: 'Zeptejte se na klinice konkrétně, jestli ve vašem případě platí nějaké omezení.',
    tip: 'Když se ze sexu stala jen další položka v plánu, řekněte to nahlas. Bývá to větší téma než samotná léčba.',
  },
  {
    id: 'cg-iui-12',
    phases: ['iui'],
    headline: 'Podpora po zákroku.',
    body: 'Po inseminaci se často předepisuje progesteron, obvykle ve formě vaginálních kuliček nebo gelu. Má podpořit sliznici, aby se zárodek měl kam uchytit. Nevypovídá nic o tom, jak to dopadne.',
    whatsHappening: [
      'Progesteron umí způsobit napětí prsou, únavu nebo nadýmání.',
      'Tyhle pocity se nedají odlišit od časných příznaků těhotenství.',
      'Užívá se podle pokynů kliniky až do testu, někdy déle.',
    ],
    task: 'Napište si, do kdy máte progesteron brát a kdy je naplánovaný test.',
    reflection: 'Přistihla jste se, jak hledáte v těle příznaky? Je to normální a je to vyčerpávající.',
  },
  {
    id: 'cg-iui-13',
    phases: ['iui'],
    headline: 'Co se děje potom.',
    body: 'Od zákroku do výsledku je zhruba čtrnáct dní. Krevní test z hCG je spolehlivější než test z moči a dřív než za dva týdny nemá smysl testovat, protože dokončovací injekce obsahuje hCG a test by mohl zbytečně vyjít pozitivně.',
    whatsHappening: [
      'Injekce se z těla vyplavuje zhruba deset dní.',
      'Dřívější test může ukázat pozitivitu z léku, ne z těhotenství.',
      'Klinika obvykle objedná odběr na konkrétní den.',
    ],
    task: 'Zapište si do aplikace datum zákroku. Čekání se pak počítá samo.',
    tip: 'Zásobte se něčím na ty dva týdny. Ne radami, ale programem: seriálem, prací, výletem.',
  },
  {
    id: 'cg-iui-14',
    phases: ['iui'],
    headline: 'Když se cyklus zruší.',
    body: 'Stane se to ze dvou opačných důvodů: nedozrál žádný folikul, nebo jich dozrálo moc. Obojí je nepříjemné a obojí je rozhodnutí, které vás chrání. Zrušený cyklus neznamená, že to nepůjde.',
    whatsHappening: [
      'Při slabé odpovědi se příště zvyšuje dávka léků.',
      'Při silné odpovědi se naopak snižuje, nebo se přejde na umělé oplodnění.',
      'Zrušený cyklus dává klinice informaci, kterou jinak nemá.',
    ],
    task: 'Zeptejte se, co konkrétně se příště změní. Odpověď má být jiné číslo, ne jen ujištění.',
    reflection: 'Dovolila jste si být naštvaná, nebo to rovnou racionalizujete?',
  },
  {
    id: 'cg-iui-15',
    phases: ['iui'],
    headline: 'Kolik to stojí.',
    body: 'Inseminace je výrazně levnější než umělé oplodnění a velká část bývá hrazená z pojištění. Doplácí se spíš léky, některé kontroly navíc a práce laboratoře, a to se liší klinika od kliniky.',
    whatsHappening: [
      'Ceník má klinika povinnost dát předem, stačí si o něj říct.',
      'Při dárcovském vzorku se platí navíc za vzorek i jeho skladování.',
      'Náklady se dají zapisovat do aplikace, včetně těch malých.',
    ],
    task: 'Zapište si do financí, co jste zatím zaplatili. Za tři cykly bude ta částka překvapivá.',
    tip: 'Ptejte se na cenu celého cyklu, ne jednotlivých položek. Jinak se součet dozvíte až na konci.',
  },
  {
    id: 'cg-iui-16',
    phases: ['iui'],
    headline: 'Kdy přejít na umělé oplodnění.',
    body: 'Obvyklá hranice jsou tři až čtyři cykly. Po nich už šance na další inseminaci citelně klesá a čas strávený opakováním stojí víc než samotný zákrok, zvlášť po pětatřicítce.',
    whatsHappening: [
      'U žen nad osmatřicet se někdy přechází dřív nebo se inseminace přeskočí.',
      'Umělé oplodnění zároveň odpoví na otázky, které inseminace nechává otevřené.',
      'Není to prohra, je to jiná metoda pro jinou situaci.',
    ],
    task: 'Napište si otázku na kontrolu: za jakých okolností byste u vás doporučili přejít dál.',
    reflection: 'Je pro vás snazší opakovat to známé, než začít něco nového?',
  },
  {
    id: 'cg-iui-17',
    phases: ['iui'],
    headline: 'Na co se zeptat, než se to rozjede.',
    body: 'Inseminace vypadá jednoduše a právě proto se na ni ptá málo. Tyhle čtyři otázky vám dají obrázek o tom, co se bude dít, a dají se položit za dvě minuty.',
    whatsHappening: [
      'Bude cyklus stimulovaný, nebo přirozený, a proč právě tak.',
      'Kolik kontrol mě čeká a kdy přibližně.',
      'Kolik cyklů doporučujete zkusit, než se bude rozhodovat jinak.',
      'Jaká je u mě konkrétně odhadovaná šance na jeden cyklus.',
    ],
    task: 'Uložte si tyhle otázky mezi otázky pro lékaře. Na kontrole si je jen otevřete.',
    reflection: 'Odcházíte z kontrol s odpověďmi, nebo s pocitem, že jste se nestihla zeptat?',
  },
]

const birth: DailyCard[] = [
  ]

const toddler: DailyCard[] = [
  ]

export const pack: ContentPack = {
  dailyCards: [...thinking, ...iui, ...birth, ...toddler],
}
