import type { ContentItem, ContentPack } from '../types'

/**
 * Podpůrné metody na klinice („add-ons“).
 *
 * Balík, který se drží jednoho pravidla: nikde nevzniká dojem, že některá
 * z těchto metod automaticky zvyšuje šanci na těhotenství. U většiny z nich
 * jsou důkazy omezené nebo rozporuplné a je to napsané nahlas. Zároveň se
 * tu nikdo nesoudí za to, že si metodu zvolil.
 */

const REVIEWED = 'Odborně garantováno lékařem reprodukční medicíny.'
const PUBLISHED = '2026-08-02'

const SOURCES = [
  'ESHRE: stanoviska k doplňkovým metodám v asistované reprodukci',
  'HFEA. Hodnocení doplňkových metod (add-ons)',
  'Cochrane Database of Systematic Reviews',
]

const items: ContentItem[] = [
  {
    id: 'pdm-jak-premyslet-o-doplnkovych-metodach',
    kind: 'article',
    title: 'Jak přemýšlet o doplňkových metodách',
    excerpt:
      'Většina „add-onů“ se připlácí a u většiny z nich jsou důkazy slabé. To neznamená, že jste hloupá, když o nich uvažujete, jen že se vyplatí jedna konkrétní otázka.',
    minutes: 8,
    phases: ['ivf_prep', 'embryo_culture', 'transfer'],
    topics: ['klinika', 'finance', 'embryologie', 'transfer'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    boost: 0.9,
    body: `## O čem je tenhle balík

Na klinikách existuje skupina metod, které se přidávají k základnímu postupu IVF. Říká se jim doplňkové metody, v angličtině add-ons. Patří sem třeba EmbryoGlue, asistovaný hatching, PRP, scratching endometria, testy receptivity nebo time-lapse sledování embryí.

Mají tři společné rysy:

- **Obvykle se za ně připlácí** a v ceníku stojí samostatně.
- **Nabízejí se navrch k léčbě, která by proběhla i bez nich.**
- **U většiny z nich jsou důkazy o vlivu na porod živého dítěte omezené, rozporuplné, nebo prostě chybí.**

Ten třetí bod je nepříjemný a v tomhle balíku ho nebudeme obcházet. U každé metody najdete sekci „Co o tom víme“, kde je napsané, jak silná data za ní stojí. A kde jsou slabá, je to řečeno rovnou.

## Naděje není chyba v úsudku

Ženy, které si doplňkovou metodu zaplatí, nejsou naivní. Jsou v situaci, kde se rozhoduje o něčem, co nejde získat jinde a co má termín. Když někdo v takové chvíli řekne „existuje ještě tohle“, je naprosto lidské to chtít zkusit.

Tenhle balík nikoho nesoudí za to, že si metodu zvolil, ani za to, že si ji zvolí znovu. Chce jen, abyste do toho šla s reálnými informacemi místo s letáčkem.

Platí to i obráceně: pokud jste v minulém cyklu doplňkovou metodu měla a nevyšlo to, neznamená to, že jste vyhodila peníze kvůli vlastní chybě. Znamená to, že jste se rozhodla podle toho, co jste tehdy věděla.

## Jediná otázka, která to celé otočí

Když vám metodu nabídnou, nejlepší otázka nezní „funguje to?“. Zní:

> Co konkrétně to má řešit v mém případě?

Ta otázka je tak dobrá, protože rozlišuje dvě úplně jiné situace.

**První:** metoda míří na konkrétní nález ve vaší dokumentaci. Tenkou sliznici, opakovaně neúspěšné transfery kvalitních embryí, konkrétní parametr. Pak má odpověď obsah a dá se o ní mluvit.

**Druhá:** metoda se nabízí plošně všem, protože „to nemůže uškodit“. To je legitimní obchodní model, ale není to léčba vaší situace.

Obě odpovědi jsou v pořádku slyšet nahlas. Špatná je jen mlha.

## Co znamená „slabé důkazy“

V textech níž se opakují dvě formulace a stojí za to je rozlišovat:

- **„Chybí důkaz o přínosu“** neznamená „je prokázáno, že to nefunguje“. Znamená, že to zatím nikdo nedokázal spolehlivě ukázat. Někdy proto, že studie byly malé, jinak nastavené nebo prostě nebyly.
- **„Studie neprokázala přínos“** znamená, že se to zkoumalo v dobře uspořádané studii a rozdíl se nenašel. To je silnější informace a u některých metod ji máme.

Dobrým vodítkem je i to, jak o metodě mluví odborné společnosti. Pokud je metoda doporučená spíš v rámci výzkumu než do běžné praxe, je to podstatná informace, i když z ní ceník nic nepozná.

## Peníze, o kterých se nemluví nahlas

Doplňkové metody se často účtují za každé použití. To má jeden důsledek, který zaskočí spoustu párů:

**Jeden IVF cyklus může obsahovat víc transferů**: čerstvý přenos a po něm další kryotransfery ze stejné zásoby embryí. Metoda, která se pojí s transferem, se pak může účtovat opakovaně, u každého z nich. Než souhlasíte, zeptejte se, jestli je cena za jeden transfer, nebo za celý cyklus se všemi přenosy.

Praktické zásady:

1. Nechte si cenu napsat, ne říct.
2. Ptejte se, co všechno je v ceně a co se doúčtuje.
3. Ptejte se, kolikrát se to bude opakovat, pokud první transfer nevyjde.
4. Rozhodujte se před podpisem informovaného souhlasu, ne v den výkonu na chodbě.

## Jak si nastavit hranici

Pomáhá si dopředu, v klidu a mimo kliniku, odpovědět na tři věci:

- **Kolik jsme ochotni dát navíc, aniž to ohrozí další pokus?** Peníze utracené za doplněk už nebudou k dispozici na další cyklus.
- **Co bych si přála slyšet, aby mě to přesvědčilo?** Když to víte předem, poznáte, jestli to skutečně zaznělo.
- **Jak se rozhodnu, když odpověď bude „nevíme, ale neuškodí to“?** Obě volby jsou obhajitelné. Jen ať je vaše.

## Co tenhle balík není

Není to doporučení, co si vzít a co odmítnout. Aplikace nediagnostikuje, neurčuje léčbu a neslibuje výsledek. O tom, co má ve vaší konkrétní situaci smysl, rozhoduje váš lékař společně s vámi. S vaší dokumentací na stole.

Tenhle balík má jediný cíl: abyste do té rozmluvy šla připravená a odešla z ní s odpověďmi, ne s pocitem, že jste se nestihla zeptat.

> Texty mají informativní charakter a nenahrazují konzultaci s lékařem. Postupy i názvy metod se mezi pracovišti liší. Vždy platí to, co vám řekne vaše klinika.`,
  },
  {
    id: 'pdm-embryoglue',
    kind: 'article',
    title: 'EmbryoGlue: médium s hyaluronanem při transferu',
    excerpt:
      'Médium bohaté na hyaluronan, do kterého se embryo před přenosem vloží. Patří k doplňkům s o něco příznivějšími daty. A i tak platí, že jistotu nedává.',
    minutes: 7,
    phases: ['transfer', 'embryo_culture'],
    topics: ['transfer', 'embryologie', 'klinika', 'finance'],
    level: 'deep',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

EmbryoGlue je obchodní název pro transferové médium s vysokým obsahem **kyseliny hyaluronové (hyaluronanu)**. Je to hustší, vazkejší kapalina než běžné médium, ve které embryo krátce před přenosem odpočívá a ve které se pak zavede do dělohy.

Název svádí k představě lepidla, které embryo přilepí ke sliznici. Tak to nefunguje. Hyaluronan je látka, která se v ženském pohlavním ústrojí přirozeně vyskytuje, a předpokládá se, že může ovlivňovat prostředí v okamžiku přenosu a kontakt embrya se sliznicí. Jde o hypotézu, ne o popsaný mechanismus.

## Jak se metoda používá

Embryolog přenese embryo z kultivačního média do média s hyaluronanem obvykle na několik minut až desítek minut před transferem. Pak se v tomto médiu embryo nasaje do katétru a lékař ho přenese stejným způsobem jako při běžném transferu.

Pro vás se nemění nic. Zákrok trvá stejně dlouho, nepřidává se žádný krok, žádné léky navíc, žádná další návštěva. Rozdíl je jen v laboratoři a v ceníku.

## Pro koho může být zvažována

Na řadě pracovišť se používá plošně u všech transferů, jinde se nabízí jako placený doplněk. Častěji přichází řeč na tuto metodu:

- po opakovaně neúspěšných transferech embryí, která byla hodnocena jako kvalitní,
- u žen vyššího věku,
- v situacích, kdy klinika hledá, co ještě v postupu upravit.

Nic z toho neznamená, že je metoda vhodná pro každou ženu. Zda má ve vaší situaci smysl, patří na konzultaci s vaší klinikou.

## Co o tom víme

Tohle je jeden z mála doplňků, u kterého jsou data o něco příznivější než u zbytku skupiny. A i tak je potřeba je číst opatrně.

- Přehledové práce shrnující randomizované studie **naznačují možný přínos** médií obohacených hyaluronanem pro klinické těhotenství a porod živého dítěte.
- Kvalita důkazů bývá v těchto přehledech hodnocena jako **střední až nízká**. Studie se liší nastavením, sledovanými skupinami i tím, co přesně se porovnávalo.
- Část studií je starší a probíhala v době, kdy se transferovalo víc embryí najednou. Přenositelnost na dnešní praxi s přenosem jednoho embrya je proto omezená.
- Objevuje se i signál k **vyššímu podílu vícečetných těhotenství** v souvislosti s používáním těchto médií, což je při přenosu více embryí podstatné. Vícečetné těhotenství je rizikovější pro matku i pro děti.

Souhrnně: možný přínos je naznačen, ale nejde o jistotu a rozhodně to neznamená, že u vás konkrétně metoda šanci zvýší. Ani tato metoda výsledek nezaručuje.

## Omezení a nejistoty

- **Nepřekoná to, co je v embryu.** Pokud embryo nemá vývojový potenciál, prostředí při přenosu na tom nic nezmění.
- **Neřeší děložní faktor.** Na sliznici, srůsty, polyp nebo záněty nemá vliv.
- **Chybí porovnání jednotlivých přípravků.** Médií s hyaluronanem je na trhu víc a nejsou navzájem srovnaná.
- **Účtování za transfer.** Jeden IVF cyklus může obsahovat víc přenosů. Čerstvý a následné kryotransfery ze stejné zásoby embryí. Cena se pak může objevit u každého z nich.
- Bezpečnostní obavy zatím popsané nejsou, ale dlouhodobá data o dětech narozených po použití těchto médií jsou omezená.

## Na co se zeptat kliniky

1. Používáte médium s hyaluronanem u všech transferů, nebo jen u vybraných?
2. **Proč ho navrhujete konkrétně u mě. Co v mé dokumentaci vás k tomu vede?**
3. Kolik to stojí a je cena za jeden transfer, nebo za všechny přenosy z tohoto cyklu?
4. Co se stane, když ho odmítnu. Změní se něco jiného v postupu?
5. Jaké výsledky s ním máte u žen v podobné situaci a jak je sledujete?
6. Jsou u vás v ceně základního cyklu i jiná média, nebo je hyaluronan jediná placená varianta?
7. Existuje v mém případě něco, co byste doporučili přednostně před tímhle?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-asistovany-hatching',
    kind: 'article',
    title: 'Asistovaný hatching: narušení obalu embrya',
    excerpt:
      'Laserem nebo chemicky se ztenčí obal embrya, aby se z něj snáz uvolnilo. Zní to logicky. Data o přínosu pro porod živého dítěte jsou ale nepřesvědčivá.',
    minutes: 7,
    phases: ['embryo_culture', 'transfer'],
    topics: ['embryologie', 'transfer', 'klinika', 'finance'],
    level: 'deep',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Embryo je od začátku obalené průhlednou vrstvou, které se říká **zona pellucida**. Před uhnízděním se embryo z tohoto obalu musí dostat ven. Tomu se říká hatching, tedy „vylíhnutí“.

Asistovaný hatching je zásah, při kterém embryolog obal před transferem ztenčí nebo v něm udělá otvor. Předpoklad zní, že embryo pak bude mít snazší cestu ven. Předpoklad je to rozumný; otázka je, jestli se promítne do počtu narozených dětí.

## Jak se metoda používá

Provádí se v laboratoři, obvykle krátce před přenosem nebo před zamrazením či po rozmrazení embrya. Používají se tři přístupy:

- **laserem**: dnes nejčastější, přesný a rychlý,
- **mechanicky**: jemnou jehlou,
- **chemicky**: roztokem, který obal naruší.

Pro vás se opět nemění nic. Zákrok probíhá mimo vás, netrvá déle a nevyžaduje žádnou přípravu.

Embrya se v laboratoři sledují po celou dobu vývoje, od prvního do šestého dne, a načasování hatchingu se odvíjí od toho, v jakém stadiu se embryo nachází a jak vypadá jeho obal.

## Pro koho může být zvažována

Bývá zvažován v situacích, kde se předpokládá, že obal může být silnější nebo změněný:

- u embryí, která byla zamrazená a rozmrazená,
- u žen vyššího věku,
- když embryolog popíše nápadně silnou zonu pellucidu,
- po opakovaně neúspěšných transferech,
- v souvislosti s odběrem buněk pro genetické vyšetření, kde je narušení obalu součástí postupu.

Ani zde neplatí, že by metoda byla vhodná pro každou ženu nebo pro každé embryo.

## Co o tom víme

Poctivá odpověď: **navzdory desítkám studií zůstává přínos pro porod živého dítěte nejasný.**

- Přehledy randomizovaných studií opakovaně docházejí k závěru, že **není jisté, zda asistovaný hatching zlepšuje pravděpodobnost porodu živého dítěte**. Kvalita důkazů bývá hodnocena jako nízká až velmi nízká.
- Některé studie popisují vyšší podíl klinických těhotenství, jiné žádný rozdíl. Výsledky se navzájem nepotvrzují.
- Existuje signál, že hatching může být spojen s **vyšším podílem vícečetných těhotenství**, zejména při přenosu více embryí. To není přínos, ale riziko.
- Chybí spolehlivá data, která by ukázala konkrétní skupinu žen, kde by přínos byl doložený.

Odborné společnosti proto tuto metodu obvykle nedoporučují jako rutinní součást léčby pro všechny.

## Omezení a nejistoty

- **Je to zásah do embrya.** Prováděný zkušeným embryologem je rizikový málo, ale nulové riziko poškození neexistuje.
- **Chybí sjednocení techniky.** Laser, mechanický i chemický přístup se liší a navzájem se dobře neporovnávají.
- **Nezvyšuje počet embryí ani jejich kvalitu.** Řeší jen jeden krok na konci.
- **Údaje o dlouhodobém vývoji dětí** narozených po asistovaném hatchingu jsou omezené.
- Připlácí se obvykle za každé ošetřené embryo nebo za každý transfer, což se v cyklu s více přenosy sčítá.

## Na co se zeptat kliniky

1. Jakou techniku hatchingu používáte a proč právě ji?
2. **Co konkrétně u mě nebo u mých embryí vás vede k tomu ho navrhnout?**
3. Provádíte ho u všech rozmrazených embryí automaticky, nebo se rozhoduje individuálně?
4. Kolik to stojí. Je cena za embryo, za transfer, nebo za cyklus?
5. Jaké je u vás riziko poškození embrya při tomto zákroku a jak často se stane?
6. Pokud ho odmítnu, změní to něco v dalším postupu?
7. Je v mé situaci něco, co byste doporučili spíš než tohle?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-sanakin-autologni-cytokiny',
    kind: 'article',
    title: 'Sanakin a autologní cytokiny do dělohy',
    excerpt:
      'Z vlastní krve se připraví roztok bohatý na určité cytokiny a zavede se do dělohy. Nabízí se hlavně po opakovaných neúspěších. Dat je ale velmi málo.',
    minutes: 7,
    phases: ['ivf_prep', 'transfer'],
    topics: ['transfer', 'klinika', 'finance', 'embryologie'],
    level: 'deep',
    hero: 'blush',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Sanakin je název postupu, při kterém se z **vaší vlastní krve** připraví roztok obohacený o určité bílkoviny imunitního systému. Cytokiny, mimo jiné látku, která tlumí působení interleukinu 1. Odtud označení autologní, tedy vlastní.

Krev se odebere, zpracuje se za zvláštních podmínek a získaná tekutina se pak aplikuje do dutiny děložní, případně jinou cestou podle protokolu pracoviště.

Úvaha za tím zní: u části žen s opakovaně neúspěšnými transfery se předpokládá nepříznivé imunitní prostředí v děloze a tento postup by ho měl ovlivnit. Je to hypotéza, ne prokázaný mechanismus.

## Jak se metoda používá

Obvyklý průběh:

1. Odběr krve, obvykle několik dní až týdnů před plánovaným transferem.
2. Zpracování vzorku v laboratoři, které trvá zpravidla několik hodin až dnů.
3. Aplikace do dutiny děložní tenkým katétrem, podobně jako při inseminaci nebo transferu. Výkon je krátký, bez narkózy, může být nepříjemný jako stěr.
4. Někdy se opakuje ve více dávkách nebo v několika cyklech.

Konkrétní protokol se mezi pracovišti liší, včetně počtu aplikací a načasování vůči transferu.

## Pro koho může být zvažována

Nabízí se prakticky výhradně ve specifických situacích, typicky:

- po opakovaně neúspěšných transferech kvalitních embryí,
- po opakovaných ztrátách těhotenství,
- v souvislosti s imunologickým vyšetřením, které popsalo odchylku.

I tak platí, že nejde o metodu vhodnou pro každou ženu a že samotný nález na imunologickém vyšetření automaticky neznamená, že tento postup vaši situaci vyřeší.

## Co o tom víme

Tady je potřeba být přímočará: **kvalitních dat je velmi málo.**

- Publikované práce jsou převážně **malé, často bez kontrolní skupiny** a pocházejí z omezeného počtu pracovišť.
- **Chybí velké randomizované studie**, které by ukázaly vliv na porod živého dítěte.
- Není sjednocený způsob přípravy ani dávkování, takže výsledky z různých pracovišť nejsou dobře porovnatelné.
- Odborné společnosti tento typ imunomodulace obvykle **neřadí mezi rutinně doporučované postupy** a spíš ho zmiňují jako oblast výzkumu.

To neznamená, že je to nesmysl. Znamená to, že v tuto chvíli nikdo neumí seriózně říct, o kolik a komu to pomáhá. A že si to pravděpodobně budete platit sama.

## Omezení a nejistoty

- **Zavedení katétru do dělohy** s sebou nese malé riziko infekce, krvácení a nepříjemných křečí.
- **Vlastní krev neznamená nulové riziko.** Riziko je nízké, ale výkon není bez rizika a příprava vzorku musí probíhat za přísných podmínek.
- Náklady bývají vyšší a **postup se často opakuje**, což celkovou částku znásobí.
- Není jasné, jak dlouho případný efekt trvá ani zda se má opakovat u dalších transferů v témže cyklu.
- **Nenahrazuje hledání jiných příčin** opakovaných neúspěchů. Anatomických, genetických, hormonálních.

Pokud po výkonu dostanete horečku nad 38 °C, silné krvácení nebo prudkou bolest v podbřišku, **kontaktujte svou kliniku**. Při náhlé silné bolesti se zhoršujícím se stavem **vyhledejte akutní lékařskou pomoc**.

## Na co se zeptat kliniky

1. Jaká data konkrétně vás vedou k tomu, že to nabízíte?
2. **Proč to navrhujete zrovna u mě. Jaký nález nebo jaká úvaha za tím stojí?**
3. Kolikrát se aplikace opakuje a kolik stojí celý postup včetně odběrů a zpracování?
4. Jaká jsou rizika samotného zavedení do dělohy a jak často je u vás řešíte?
5. Je to u vás součást studie, nebo běžně nabízený placený výkon?
6. Co budeme dělat, když ani s tímhle transfer nevyjde. Je připravený další krok?
7. Existuje jiné vyšetření, které by u mě mělo přednost, než se pustíme do tohohle?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-prp-do-delohy',
    kind: 'article',
    title: 'PRP do dělohy: plazma bohatá na destičky pro sliznici',
    excerpt:
      'Zahuštěná plazma z vlastní krve se aplikuje do dutiny děložní, nejčastěji kvůli tenké sliznici. Studie jsou malé a metodicky slabé.',
    minutes: 7,
    phases: ['ivf_prep', 'transfer'],
    topics: ['transfer', 'klinika', 'finance'],
    level: 'deep',
    hero: 'dawn',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

PRP je zkratka pro plazmu bohatou na krevní destičky (platelet-rich plasma). Připravuje se z **vaší vlastní krve**: vzorek se odstředí tak, aby vznikla tekutina s několikanásobně vyšší koncentrací destiček než v běžné krvi.

Destičky obsahují růstové faktory. Předpokládá se, že by mohly podpořit prokrvení a obnovu děložní sliznice. V jiných oborech, například v ortopedii, se PRP používá delší dobu, což ale samo o sobě neříká nic o tom, jak se chová v děloze.

## Jak se metoda používá

1. Odběr krve, obvykle v den aplikace nebo krátce před ní.
2. Odstředění a příprava koncentrátu, zpravidla během desítek minut.
3. Aplikace do dutiny děložní tenkým katétrem. Výkon je krátký, bez narkózy, obvykle se popisuje jako tlak nebo křeč podobná stěru.
4. Aplikace se často opakuje, typicky v přípravném cyklu před transferem, někdy dvakrát i vícekrát.

Načasování se odvíjí od přípravy sliznice a od protokolu pracoviště.

## Pro koho může být zvažována

Nejčastěji se o PRP mluví u:

- **tenké děložní sliznice**, která nereaguje na standardní přípravu,
- opakovaně neúspěšných transferů kvalitních embryí,
- stavů po zákrocích v dutině děložní, kde se předpokládá poškození sliznice.

Nejde o metodu vhodnou pro každou ženu a rozhodně ne o rutinní součást přípravy na transfer.

## Co o tom víme

- Většina publikovaných prací je **malá, často bez kontrolní skupiny**, a pochází z jednotlivých pracovišť.
- Řada studií sleduje hlavně **tloušťku sliznice**, ne počet narozených dětí. Silnější sliznice na ultrazvuku je zástupný ukazatel. Sama o sobě neznamená těhotenství.
- Randomizované studie existují, ale jsou nepočetné a různě kvalitní. **Spolehlivý důkaz o vlivu na porod živého dítěte zatím chybí.**
- Neexistuje sjednocený způsob přípravy PRP. Koncentrace destiček, objem i počet aplikací se liší, takže výsledky se špatně srovnávají.
- Odborné společnosti tuto metodu obvykle řadí mezi **experimentální nebo výzkumné** postupy.

Nelze tedy tvrdit, že PRP do dělohy zvyšuje šanci na těhotenství. Data pro to nestačí.

## Omezení a nejistoty

- **Zavedení katétru do dělohy** nese malé riziko infekce, krvácení a křečí.
- Příprava z vlastní krve snižuje riziko přenosu infekce, ale **nedělá z výkonu bezrizikový zákrok**.
- **Nevíme, jak dlouho případný efekt trvá** a zda se má opakovat před každým dalším transferem.
- U tenké sliznice je řada dalších možných příčin. Srůsty, chronický zánět, anatomická odchylka. PRP je neřeší a jejich hledání nenahrazuje.
- Náklady bývají značné a při opakování rostou. Jeden IVF cyklus může obsahovat víc transferů, a pokud se PRP váže na přípravu každého z nich, částka se násobí.

Při horečce nad 38 °C, silném krvácení nebo prudké bolesti po výkonu **kontaktujte svou kliniku**. Při rychle se zhoršujícím stavu **vyhledejte akutní lékařskou pomoc**.

## Na co se zeptat kliniky

1. Jaký problém má PRP v mém případě řešit a jak poznáme, že zabralo?
2. **Proč právě u mě. Co v mých nálezech vede k téhle nabídce?**
3. Kolik aplikací plánujete a kolik stojí jedna, včetně odběru a přípravy?
4. Bude se opakovat před každým dalším transferem?
5. Jak PRP připravujete a jakou koncentraci destiček používáte?
6. Vyloučili jsme už jiné příčiny tenké sliznice, například srůsty nebo chronický zánět?
7. Nabízíte to v rámci studie, nebo jako placenou službu?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-prp-do-vajecniku',
    kind: 'article',
    title: 'PRP do vaječníků: pokus o oživení ovariální rezervy',
    excerpt:
      'Zahuštěná plazma se aplikuje přímo do vaječníku. Nabízí se u nízké rezervy a předčasného selhání. Data jsou zatím na úrovni prvních pozorování.',
    minutes: 7,
    phases: ['ivf_prep'],
    topics: ['klinika', 'finance', 'embryologie'],
    level: 'deep',
    hero: 'sand',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Stejný princip jako u PRP do dělohy (koncentrát destiček z vlastní krve) jen s jiným cílem. Plazma se aplikuje **přímo do tkáně vaječníku**.

Úvaha zní, že růstové faktory z destiček by mohly ovlivnit prostředí ve vaječníku a podpořit aktivitu folikulů, které tam ještě jsou. Zdůrazněme jedno: nejde o vytváření nových vajíček. Případný efekt by se mohl týkat jen toho, co ve vaječníku zůstalo.

## Jak se metoda používá

1. Odběr krve a příprava koncentrátu.
2. Aplikace **jehlou přes poševní stěnu pod ultrazvukovou kontrolou**, podobným způsobem jako při odběru vajíček. Obvykle v krátké anestezii nebo analgosedaci.
3. Odstup několika týdnů, během kterých se sledují hormonální hodnoty a případně počet antrálních folikulů.
4. Podle výsledku se plánuje stimulace, nebo se aplikace opakuje.

Jde tedy o skutečný zákrok, ne o kapku v katétru. A s tím souvisí i rizika.

## Pro koho může být zvažována

Bývá zmiňována u:

- **nízké ovariální rezervy** a slabé odpovědi na stimulaci,
- **předčasného selhání funkce vaječníků**,
- žen, které opakovaně nezískaly vajíčka a chtějí zkusit ještě jednu cestu, než zváží darovaná vajíčka.

Nejde o metodu vhodnou pro každou ženu a v žádném případě nenahrazuje rozhovor o dalších možnostech, včetně dárcovství.

## Co o tom víme

Toto je oblast, kde je odstup mezi tím, co se slibuje, a tím, co je doloženo, největší z celého balíku.

- Publikované práce jsou převážně **kazuistiky, malé série případů a nekontrolované studie**.
- Popsané změny hormonálních hodnot nebo počtu folikulů **nejsou totéž co narozené dítě**. U nízké rezervy navíc hodnoty přirozeně kolísají mezi cykly, takže bez kontrolní skupiny nelze rozlišit efekt zákroku od běžné variability.
- **Randomizovaných studií je velmi málo** a nestačí k závěru o vlivu na porod živého dítěte.
- Neexistuje sjednocený protokol. Objem, koncentrace, místo vpichu ani počet opakování.
- Odborné společnosti tento postup obvykle označují za **experimentální a patřící do výzkumu**.

Nelze tedy říct, že PRP do vaječníků zvyšuje šanci na těhotenství. Zatím to nikdo neukázal.

## Omezení a nejistoty

- **Je to invazivní zákrok** s riziky punkce: krvácení, infekce, poranění okolních struktur, rizika anestezie.
- **Případ od případu se liší, co se vlastně slibuje.** Někde se mluví o zlepšení hodnot, jinde o šanci na vlastní vajíčka. To nejsou stejné věci.
- **Naděje má u téhle metody vysokou cenu**: finanční i časovou. Čas je přitom u nízké rezervy sám o sobě faktorem.
- Chybí dlouhodobá data o bezpečnosti pro vaječník i pro případné potomky.

Po zákroku platí stejná pravidla jako po punkci: při silné bolesti břicha, horečce nad 38 °C, závrati, mdlobě nebo rychle rostoucím obvodu břicha **kontaktujte svou kliniku**. Při náhlé prudké bolesti a zhoršování stavu **vyhledejte akutní lékařskou pomoc**.

## Na co se zeptat kliniky

1. Co konkrétně od toho čekáte v mém případě a podle čeho poznáme, jestli to mělo efekt?
2. **Proč to navrhujete zrovna u mě a co byste mi nabídli, kdyby tahle metoda neexistovala?**
3. Kolik stojí jeden zákrok a počítáte s opakováním?
4. Jaká jsou rizika punkce vaječníku u mě a kolik těchto zákroků jste už provedli?
5. Jaké výsledky máte u žen s podobnými hodnotami. A kolik z nich mělo transfer?
6. Kolik času tím ztratím, když to nevyjde, a co bude dalším krokem?
7. Kdy je podle vás namístě mluvit o darovaných vajíčkách?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-scratching-endometria',
    kind: 'article',
    title: 'Scratching endometria: co ukázaly velké studie',
    excerpt:
      'Kdysi jeden z nejnadějnějších doplňků. Velké randomizované studie ale přínos nepotvrdily. A to je informace, kterou stojí za to znát.',
    minutes: 7,
    phases: ['ivf_prep', 'transfer'],
    topics: ['transfer', 'klinika', 'finance'],
    level: 'deep',
    hero: 'taupe',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Scratching endometria je záměrné drobné poranění děložní sliznice, obvykle tenkou kanylou zavedenou do dutiny děložní. Česky se mu někdy říká „poškrábání“ nebo „nástřih“ sliznice.

Původní úvaha byla zajímavá: drobné poranění spustí hojivou a zánětlivou reakci, která by mohla připravit sliznici na uhnízdění embrya. Řadu let to znělo jako nejnadějnější metoda ve skupině doplňků.

## Jak se metoda používá

- Provádí se obvykle **v cyklu předcházejícím transferu**, nejčastěji v jeho druhé polovině.
- Výkon je ambulantní, trvá pár minut, bez narkózy.
- Většina žen popisuje výraznou křeč po dobu zákroku a několik hodin poté, někdy slabé krvácení či špinění.
- Někde se kombinuje s odběrem vzorku sliznice na vyšetření, jinde jde o samostatný výkon.

Nepříjemnost tohoto zákroku je vyšší než u ostatních doplňků v tomto balíku a stojí za to s ní počítat.

## Pro koho může být zvažována

Historicky se nabízel hlavně:

- po opakovaně neúspěšných transferech kvalitních embryí,
- před prvním IVF cyklem jako plošná příprava (tento přístup se dnes opouští).

Vzhledem k tomu, co víme dnes, se rozsah použití spíš zužuje a řada pracovišť ho už nenabízí.

## Co o tom víme

Tohle je jeden z mála doplňků, kde nemáme jen mlhu, ale skutečnou odpověď. A ta je střízlivá.

- Rané, převážně malé studie naznačovaly zajímavý přínos. To vysvětluje, proč se metoda tak rozšířila.
- **Velká mezinárodní randomizovaná studie s více než tisícem žen přínos nepotvrdila.** Podíl narozených dětí byl ve skupině se scratchingem i bez něj srovnatelný.
- Následné souhrnné přehledy tento závěr spíš potvrzují: **přesvědčivý důkaz o zlepšení výsledku chybí**.
- Je to dobrý příklad toho, jak se z nadějného signálu v malých studiích může po pořádném ověření stát nula. Není to selhání. Tak se medicína posouvá.

## Omezení a nejistoty

- **Zákrok bolí** víc než ostatní doplňky zmíněné v tomto balíku a nese malé riziko infekce, krvácení a poranění.
- **Načasování je citlivé.** Provedení v nesprávné fázi cyklu může teoreticky zasáhnout do přípravy sliznice.
- **Není jasné, zda existuje podskupina žen, které by to pomohlo.** Někteří odborníci to nadále zvažují u opakovaných neúspěchů, ale i tam je to spíš úvaha než doložený postup.
- Za výkon se obvykle připlácí a s dalším cyklem se opakuje.

Pokud po výkonu dostanete horečku nad 38 °C, silně krvácíte nebo máte prudkou narůstající bolest, **kontaktujte svou kliniku**. Při zhoršování stavu **vyhledejte akutní lékařskou pomoc**.

## Na co se zeptat kliniky

1. Znáte výsledky velkých randomizovaných studií a jak s nimi pracujete ve své praxi?
2. **Proč to navrhujete u mě, když plošný přínos potvrzen nebyl?**
3. V jaké fázi cyklu ho provádíte a proč zrovna tehdy?
4. Kolik to stojí a je to jednorázový výkon, nebo se opakuje před každým transferem?
5. Jak bolestivé to u vás bývá a nabízíte něco na tlumení bolesti?
6. Kombinujete to s odběrem vzorku na vyšetření sliznice?
7. Co byste doporučili místo toho, kdybych to odmítla?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-era-testy-receptivity',
    kind: 'article',
    title: 'ERA a testy receptivity endometria',
    excerpt:
      'Test, který má najít vaše osobní „okno přijetí“ a posunout podle něj transfer. Randomizované studie ale plošný přínos neukázaly.',
    minutes: 8,
    phases: ['ivf_prep', 'transfer'],
    topics: ['transfer', 'klinika', 'finance', 'embryologie'],
    level: 'deep',
    hero: 'pearl',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Děložní sliznice je pro uhnízdění embrya vnímavá jen po omezenou dobu. Tomuto období se říká **implantační okno**. Testy receptivity se snaží zjistit, kdy přesně toto okno u vás nastává.

Nejznámější je **ERA** (analýza receptivity endometria). Ze vzorku sliznice se zjišťuje aktivita souboru genů a z ní se odvozuje, zda je sliznice v okamžiku odběru „receptivní“, nebo zda je okno posunuté dřív či později. Podle výsledku se pak upraví načasování transferu, obvykle o několik hodin až o den.

Do stejné rodiny patří i testy zaměřené na mikrobiom dělohy nebo na chronický zánět sliznice. Ty odpovídají na jiné otázky a měly by se posuzovat zvlášť.

## Jak se metoda používá

1. Absolvujete **zkušební cyklus** s přípravou sliznice úplně stejnou, jaká se pak použije při skutečném transferu.
2. V určený den se odebere malý vzorek sliznice tenkou kanylou. Výkon je ambulantní, krátký a bývá nepříjemný. Křeč podobná silnější menstruační bolesti.
3. Vzorek se odešle do laboratoře, výsledek trvá obvykle několik týdnů.
4. Pokud test popíše posun, transfer v dalším cyklu se načasuje podle něj (tzv. personalizovaný transfer).

Prakticky to znamená **jeden cyklus navíc**, ve kterém se netransferuje. To je náklad v čase, nejen v penězích.

## Pro koho může být zvažována

Nejčastěji se nabízí:

- po **opakovaně neúspěšných transferech** embryí, která byla hodnocena jako kvalitní, zvlášť pokud šlo o geneticky vyšetřená embrya,
- v situacích, kdy se hledá cokoliv, co ještě lze v postupu upravit.

Není to vyšetření vhodné pro každou ženu a plošné použití před prvním transferem se dnes obecně nedoporučuje.

## Co o tom víme

- **Randomizované studie plošný přínos neprokázaly.** Ve studiích, kde se ženy náhodně rozdělily na transfer podle testu a transfer podle běžného načasování, se výsledky významně nelišily; v některých analýzách vyšla skupina s testem dokonce hůř.
- Většina příznivých zpráv pochází z **pozorovacích studií bez kontrolní skupiny**, kde nelze odlišit efekt testu od prostého faktu, že žena podstoupila další transfer.
- **Opakovatelnost výsledku** není stoprocentní. U části žen vyjde test v různých cyklech odlišně, což zpochybňuje představu neměnného osobního okna.
- U žen s opakovanými neúspěchy zůstává otázka otevřená. Někteří odborníci test v této skupině zvažují, ale **doložený přínos zatím chybí** i tady.
- Testy mikrobiomu a chronického zánětu jsou samostatná kapitola; ani u nich není zatím doloženo, že by jejich plošné použití zlepšovalo výsledky.

## Omezení a nejistoty

- **Stojí čas.** Cyklus navíc znamená odklad transferu, což je u některých žen podstatnější než cena.
- **Odběr vzorku je nepříjemný** a nese malé riziko infekce, krvácení a křečí.
- **Výsledek se dá špatně interpretovat.** Nález „posunuté okno“ neznamená, že jste našla příčinu neúspěchu.
- **Podmínkou je věrné zopakování cyklu.** Pokud se příprava sliznice v ostrém cyklu liší, výpovědní hodnota testu klesá.
- Cena bývá jednou z nejvyšších ve skupině doplňků a k ní se přičítá cena přípravy zkušebního cyklu.

Při horečce, silném krvácení nebo prudké bolesti po odběru **kontaktujte svou kliniku**.

## Na co se zeptat kliniky

1. Jaké randomizované studie k tomuhle testu znáte a jak je ve své praxi zohledňujete?
2. **Proč ho navrhujete zrovna u mě. Co konkrétního má vysvětlit?**
3. Kolik stojí samotný test a kolik celý zkušební cyklus, který k němu patří?
4. O kolik se odloží můj další transfer?
5. Co uděláme, když výsledek vyjde jako receptivní. Změní se něco?
6. Testujete zároveň i chronický zánět sliznice nebo mikrobiom, a proč?
7. Existuje v mé situaci vyšetření, které má přednost před tímhle?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-intralipid-imunomodulace',
    kind: 'article',
    title: 'Intralipid a imunomodulace v léčbě neplodnosti',
    excerpt:
      'Infuze tukové emulze, kortikoidy nebo imunoglobuliny se nabízejí při opakovaných neúspěších. Důkazy jsou nedostatečné a některé postupy nesou vlastní rizika.',
    minutes: 8,
    phases: ['ivf_prep', 'transfer'],
    topics: ['klinika', 'finance', 'transfer'],
    level: 'deep',
    hero: 'dusk',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Pod hlavičkou imunomodulace se v reprodukční medicíně skrývá několik různých postupů, které mají společný předpoklad: že u části žen brání uhnízdění embrya nepříznivá imunitní reakce.

Nejčastěji se setkáte s:

- **Intralipidem**: nitrožilní infuzí tukové emulze, která se původně používá ve výživě pacientů,
- **kortikoidy** v nízkých dávkách,
- **nitrožilními imunoglobuliny**,
- **léky tlumícími zánětlivé působky**,
- někdy i s dalšími přípravky podle zvyklostí pracoviště.

Předpoklad o „nepřátelské imunitě“ zní srozumitelně a intuitivně. Právě proto je dobré vědět, jak málo je pod ním pevné půdy.

## Jak se metoda používá

- **Intralipid** se podává jako infuze trvající zpravidla jednu až dvě hodiny, obvykle před transferem a někdy opakovaně v raném těhotenství.
- **Kortikoidy** se užívají v tabletách po dobu určenou lékařem.
- **Imunoglobuliny** se podávají infuzí, opakovaně, a jde o nákladný krevní derivát.

Postupu často předchází imunologické vyšetření z krve, jehož výsledky se v této oblasti interpretují různě podle pracoviště.

## Pro koho může být zvažována

Prakticky vždy jde o situace:

- **opakovaně neúspěšných transferů** kvalitních embryí,
- **opakovaných ztrát těhotenství**,
- nálezu na imunologickém vyšetření.

Ani jedno z toho neznamená, že je imunomodulace pro danou ženu vhodná. Odchylka v laboratorním nálezu automaticky neznamená, že právě ona způsobila neúspěch.

## Co o tom víme

Tady je odpověď jednoznačnější, než by se čekalo. A nepříjemná.

- **Odborné společnosti tyto postupy obecně nedoporučují mimo výzkum.** Uvádějí, že důkazy o přínosu jsou nedostatečné.
- U **intralipidu** existují převážně malé studie s protichůdnými výsledky. Spolehlivý důkaz o vlivu na porod živého dítěte chybí.
- U **imunoglobulinů** rovněž chybí přesvědčivý důkaz přínosu, přičemž jde o drahý krevní derivát s možnými nežádoucími účinky.
- U **kortikoidů** nebyl plošný přínos doložen; jejich užívání v těhotenství není bez rizik.
- Řada **imunologických testů**, na jejichž základě se léčba nasazuje, není v této indikaci standardizovaná a jejich výpovědní hodnota je sporná.

Nelze tedy tvrdit, že tyto postupy zvyšují šanci na těhotenství. Zároveň nejde říct, že by u všech žen byly zbytečné, jen to zatím nikdo neumí spolehlivě rozlišit.

## Omezení a nejistoty

- **Na rozdíl od většiny doplňků tady jde o léky s vlastními riziky.** Infuze může vyvolat alergickou reakci, kortikoidy mají známé nežádoucí účinky, imunoglobuliny jsou krevní derivát.
- **Vyšetření a léčba se často nabízejí v balíčku**, takže je těžké rozlišit, co se řeší kvůli nálezu a co „pro jistotu“.
- **Náklady bývají vysoké** a postup se často opakuje před každým transferem i v prvních týdnech těhotenství.
- **Chybí shoda v tom, koho vlastně léčit.** Různá pracoviště používají různé hranice a různé testy.

Pokud se během infuze nebo po ní objeví dušnost, otok obličeje či jazyka, vyrážka po těle nebo bušení srdce, **vyhledejte akutní lékařskou pomoc**. Při horečce nebo zhoršení stavu po podání **kontaktujte svou kliniku**.

## Na co se zeptat kliniky

1. Který konkrétní nález v mých výsledcích vede k této léčbě?
2. **Proč ji navrhujete zrovna u mě a co by se dělo, kdybych ji nepodstoupila?**
3. Jaká je podle vás síla důkazů a jak se stavíte k doporučením odborných společností?
4. Kolik stojí celá série včetně vyšetření a kolikrát se bude opakovat?
5. Jaké nežádoucí účinky mám čekat a co mám dělat, když nastanou?
6. Jak dlouho by léčba pokračovala, kdybych otěhotněla?
7. Vyloučili jsme už jiné vysvětlení mých opakovaných neúspěchů?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. Léky se nikdy nenasazují ani nevysazují podle článku. O tom rozhoduje výhradně váš lékař.`,
  },
  {
    id: 'pdm-embryogen-blastgen-gmcsf',
    kind: 'article',
    title: 'EmbryoGen a BlastGen: kultivační média s GM-CSF',
    excerpt:
      'Média obohacená o růstový faktor GM-CSF, ve kterých embrya rostou. Velká studie celkový přínos neukázala.',
    minutes: 6,
    phases: ['embryo_culture', 'transfer'],
    topics: ['embryologie', 'klinika', 'finance'],
    level: 'deep',
    hero: 'sage',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

EmbryoGen a BlastGen jsou obchodní názvy kultivačních médií obohacených o **GM-CSF**: růstový faktor, který se přirozeně vyskytuje v ženském pohlavním ústrojí a podílí se na komunikaci mezi sliznicí a embryem.

EmbryoGen se používá v prvních dnech vývoje, BlastGen v pozdější fázi kultivace a při transferu. Úvaha zní, že přidání této látky přiblíží laboratorní prostředí přirozenému.

## Jak se metoda používá

Rozhodnutí padne v laboratoři před zahájením kultivace. Embrya se pěstují v obohaceném médiu místo standardního, případně se do něj přenesou v pozdější fázi.

Embryolog embrya sleduje **po celou dobu vývoje, od prvního do šestého dne**: obohacené médium na tomto sledování nic nemění.

Pro vás se nemění nic: žádný zákrok navíc, žádné léky, žádná další návštěva. Rozdíl je opět jen v laboratoři a v ceně.

## Pro koho může být zvažována

Nejčastěji se nabízí:

- ženám po **opakovaných potratech**,
- po opakovaně neúspěšných cyklech,
- v situacích, kdy klinika hledá úpravu laboratorního postupu.

Není to metoda vhodná pro každou ženu a rozhodně nejde o standard, který by měla mít každá.

## Co o tom víme

- **Velká randomizovaná studie neprokázala celkový přínos** pro podíl narozených dětí ve srovnání se standardním médiem.
- Zaznamenaný náznak možného přínosu u podskupiny žen s opakovanými potraty pochází z analýzy podskupin. **Takové nálezy jsou nespolehlivé** a je potřeba je potvrdit samostatnou studií, což se zatím nestalo.
- Následné souhrnné přehledy hodnotí důkazy jako **nedostatečné pro doporučení do běžné praxe**.
- Neexistuje spolehlivé srovnání různých obohacených médií mezi sebou.

Nelze tedy říct, že by tato média zvyšovala šanci na těhotenství.

## Omezení a nejistoty

- **Bezpečnostní obavy nejsou popsány**, ale dlouhodobá data o dětech narozených po kultivaci v těchto médiích jsou omezená.
- **Kvalita embrya vzniká jinde**: v kvalitě vajíčka a spermie. Médium tohle nepřepíše.
- **Rozhodnutí padá brzy**, často ještě před odběrem vajíček, takže se rozhodujete bez informace o tom, kolik embryí vlastně budete mít.
- Cena se obvykle účtuje za cyklus kultivace a nemusí být vratná, i když se nakonec nekultivuje nic.

## Na co se zeptat kliniky

1. Jaká média u vás patří do základní ceny cyklu?
2. **Proč navrhujete obohacené médium zrovna u mě?**
3. Kolik to stojí a co se stane s částkou, když se nebude co kultivovat?
4. Jak vyhodnocujete, jestli vám tahle média v praxi něco přinášejí?
5. Kdy se musím rozhodnout a dá se rozhodnutí ještě změnit?
6. Znáte výsledky velké randomizované studie a jak je promítáte do doporučení?
7. Je něco jiného v laboratorním postupu, co by u mě mělo přednost?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-time-lapse-embryoscope',
    kind: 'article',
    title: 'Time-lapse monitoring embryí (EmbryoScope)',
    excerpt:
      'Inkubátor s kamerou, který embrya nepřetržitě fotí. Krásná technologie s reálnými přednostmi. Důkaz, že vede k většímu počtu dětí, ale chybí.',
    minutes: 8,
    phases: ['embryo_culture', 'ivf_prep'],
    topics: ['embryologie', 'klinika', 'finance'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    boost: 0.5,
    body: `## Co to je

Time-lapse je inkubátor s vestavěnou kamerou. Embrya se v něm kultivují a přístroj je v pravidelných intervalech fotografuje. Z jednotlivých snímků vznikne plynulý záznam celého vývoje.

EmbryoScope je nejznámější obchodní název, přístrojů tohoto typu je ale víc.

Dvě věci, které to přináší:

- **Nepřerušovaná kultivace.** Embryolog nemusí embrya vyndávat z inkubátoru, aby se na ně podíval pod mikroskopem. Prostředí zůstává stabilní.
- **Podrobný záznam.** Vidí se přesné časy dělení a jevy, které se při kontrole jednou denně minou.

## Jak se metoda používá

Embrya se po oplození vloží do time-lapse inkubátoru a zůstávají v něm po celou kultivaci. Snímky se pořizují v krátkých intervalech, obvykle po několika minutách.

Embryolog pak vývoj hodnotí ze záznamu. **den po dni, od prvního do šestého dne vývoje**. Nejde tedy jen o to, jestli vznikla blastocysta; sleduje se celá cesta, včetně toho, jak a kdy se embryo dělilo v prvních dnech.

Některá pracoviště k tomu používají hodnoticí algoritmy, které z časových údajů počítají skóre.

Řada klinik dnes na video dokáže dát i vám. Pro spoustu žen je to nejsilnější věc z celého cyklu. Mít v telefonu, jak se dělily buňky, které jsou teď v děloze.

## Pro koho může být zvažována

Na některých pracovištích je time-lapse standardem pro všechny, jinde je to placený doplněk. Bývá zmiňován zejména:

- když je embryí víc a je z čeho vybírat,
- po cyklech, kde vývoj embryí probíhal neobvykle,
- když si přejete podrobnější informaci o vývoji.

## Co o tom víme

Je potřeba rozlišit dvě věci, které se často slévají dohromady.

**Co je doložené:** technologie umožňuje stabilnější prostředí a přináší víc informací než kontrola jednou denně. To je pravda o přístroji.

**Co doložené není:** že díky tomu odejde z klinik víc dětí.

- Souhrnné přehledy randomizovaných studií docházejí k závěru, že **není dostatečný důkaz o rozdílu v podílu narozených dětí** mezi time-lapse a běžnou kultivací.
- Kvalita důkazů bývá hodnocena jako **nízká až velmi nízká** kvůli malému počtu studií a jejich uspořádání.
- **Hodnoticí algoritmy** odvozené z time-lapse dat se mezi sebou liší a jejich přenositelnost mezi laboratořemi je omezená. Algoritmus, který funguje na jednom pracovišti, nemusí fungovat na jiném.
- Time-lapse **nenahrazuje genetické vyšetření embrya**. Z časů dělení nelze spolehlivě určit chromozomální výbavu.

## Omezení a nejistoty

- **Nezmění kvalitu embryí.** Umí je jen lépe popsat a seřadit.
- **Když máte jedno embryo, není z čeho vybírat.** Přínos výběru se pak scvrkne na nulu, i když stabilita prostředí zůstává.
- **Víc informací může znamenat víc obav.** Věty typu „dělilo se nerovnoměrně“ se dají těžko zasadit do souvislostí a některým ženám berou spánek.
- Připlácí se obvykle za cyklus kultivace.
- Video z kultivace je krásné a stojí za to si o něj říct, ale je to vzpomínka, ne předpověď.

## Na co se zeptat kliniky

1. Je u vás time-lapse součástí ceny, nebo se připlácí. A kolik?
2. **Proč ho doporučujete zrovna u mě a co konkrétně od něj v mém případě čekáte?**
3. Používáte hodnoticí algoritmus, nebo záznam hodnotí embryolog?
4. Jak se rozhodujete o výběru embrya, když mám embryí jen pár?
5. Dostanu záznam nebo fotky embryí?
6. Změní se něco v postupu, když si time-lapse nevezmu?
7. Nahrazuje to nějaké jiné vyšetření, nebo se přidává navrch?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-seminalni-plazma',
    kind: 'article',
    title: 'Aplikace seminální plazmy',
    excerpt:
      'Tekutá složka ejakulátu se aplikuje do pochvy nebo dělohy kolem odběru vajíček či transferu. Studií je málo a jejich závěry se rozcházejí.',
    minutes: 6,
    phases: ['transfer', 'ivf_prep'],
    topics: ['transfer', 'klinika', 'finance'],
    level: 'deep',
    hero: 'blush',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    body: `## Co to je

Seminální plazma je tekutá část ejakulátu. To, co zbude, když se oddělí spermie. Obsahuje řadu bílkovin a signálních látek.

Při IVF se spermie od plazmy oddělují, takže se sliznice ženy s plazmou vůbec nesetká. Úvaha za touto metodou zní, že právě tenhle kontakt může u přirozeného početí připravovat imunitní prostředí na příchod embrya. A že by se dal doplnit uměle.

## Jak se metoda používá

- Vzorek se odebere zpravidla v den odběru vajíček nebo krátce před transferem.
- V laboratoři se zpracuje, oddělí se plazma a připraví k aplikaci.
- Aplikuje se **do pochvy** nebo **do dutiny děložní** tenkým katétrem, podle protokolu pracoviště.
- Načasování se liší: někde kolem odběru vajíček, jinde v den transferu.

Výkon sám je krátký a obvykle bez větších obtíží. U aplikace do dělohy platí totéž co u jiných nitroděložních zákroků. Může být nepříjemný jako stěr.

## Pro koho může být zvažována

Nabízí se spíš okrajově, nejčastěji:

- po opakovaně neúspěšných transferech,
- na pracovištích, která tuto metodu zkoumají nebo mají s ní vlastní zkušenost.

Nepatří mezi rutinní součásti léčby a není vhodná pro každou ženu. V cyklech s darovanými spermiemi je situace odlišná a je nutné ji probrat zvlášť.

## Co o tom víme

- Randomizovaných studií je **málo a jsou malé**. Jejich závěry se rozcházejí.
- Souhrnné přehledy uvádějí, že **důkazy nestačí k závěru o vlivu na porod živého dítěte**. Některé práce popisují náznak vyššího podílu klinických těhotenství, jiné žádný rozdíl.
- **Chybí sjednocený protokol**: liší se místo aplikace, načasování i způsob zpracování vzorku.
- Metoda je zajímavá biologicky, ale zůstává v rovině výzkumu.

Nelze tedy říct, že by aplikace seminální plazmy zvyšovala šanci na těhotenství.

## Omezení a nejistoty

- **Zpracování vzorku musí být pečlivé.** Neupravená seminální plazma nepatří do dělohy kvůli riziku infekce a zánětlivé reakce.
- **Nitroděložní aplikace** nese malé riziko infekce, krvácení a křečí.
- Vyžaduje **odběr vzorku od partnera v konkrétní den**, což může být organizačně náročné.
- Není jasné, které načasování je vhodnější, ani zda se má metoda opakovat u dalších transferů z téhož cyklu.

Při horečce nad 38 °C, silné bolesti v podbřišku nebo zapáchajícím výtoku po aplikaci **kontaktujte svou kliniku**. Při rychlém zhoršování stavu **vyhledejte akutní lékařskou pomoc**.

## Na co se zeptat kliniky

1. Kdy přesně aplikaci provádíte a proč jste zvolili právě tohle načasování?
2. **Proč to navrhujete zrovna u mě?**
3. Jak vzorek zpracováváte, aby byl bezpečný pro nitroděložní podání?
4. Kolik to stojí a je cena za jednu aplikaci nebo za cyklus?
5. Jaká rizika s tím ve své praxi vidíte a jak často je řešíte?
6. Nabízíte to v rámci výzkumné studie, nebo jako běžnou placenou službu?
7. Jak to řešíme, pokud používáme darované spermie?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
  {
    id: 'pdm-prodlouzena-kultivace',
    kind: 'article',
    title: 'Prodloužená kultivace do stadia blastocysty',
    excerpt:
      'Kultivace do pátého či šestého dne dá lepší podklad pro výběr embrya. Zároveň nese riziko, že do transferu nedojde. A to je poctivá druhá strana.',
    minutes: 8,
    phases: ['embryo_culture', 'transfer', 'ivf_prep'],
    topics: ['embryologie', 'transfer', 'klinika', 'finance'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: SOURCES,
    publishedOn: PUBLISHED,
    boost: 0.6,
    body: `## Co to je

Prodloužená kultivace znamená, že embrya zůstávají v laboratoři až do **pátého nebo šestého dne** vývoje, tedy do stadia blastocysty, místo aby se přenesla nebo zamrazila ve druhém či třetím dni.

Na řadě pracovišť je to dnes běžný postup a neúčtuje se zvlášť. Jinde se objevuje v ceníku jako samostatná položka. Proto patří do tohoto balíku. I když je z celé skupiny nejblíž běžné praxi.

Důležité pojmenování: embrya se v laboratoři sledují **od prvního do šestého dne vývoje**. Blastocysta je poslední kapitola tohoto příběhu, ne jeho jediná část. To, co se dělo v prvních dnech, embryolog vidí a bere v úvahu.

## Jak se metoda používá

- **Den 1**: kontroluje se, zda došlo k oplození.
- **Dny 2 a 3**: sleduje se dělení buněk, jejich počet a vzhled.
- **Den 4**: embryo se zhutňuje do útvaru zvaného morula.
- **Dny 5 a 6**: vzniká blastocysta s vnitřní buněčnou masou a obalovou vrstvou. Hodnotí se její stupeň a kvalita obou částí.

Podle výsledku se embryo přenese, zamrazí, nebo se kultivace ukončí. Pokud je v plánu genetické vyšetření, odebírají se buňky obvykle právě v tomto stadiu.

## Pro koho může být zvažována

- Když je embryí **víc** a je potřeba mezi nimi vybírat.
- Když se plánuje **genetické vyšetření embryí**.
- Když se cíleně přenáší **jedno embryo**, aby se předešlo vícečetnému těhotenství.

Naopak při **malém počtu embryí** může mít lékař dobrý důvod přenést dřív. Prodloužená kultivace není postup vhodný pro každou ženu a v každém cyklu.

## Co o tom víme

- Přenos ve stadiu blastocysty **může být spojen s vyšší pravděpodobností otěhotnění z jednoho čerstvého přenosu** ve srovnání s přenosem třetí den. To je z velké části tím, že se přenáší embryo, které už prošlo přirozeným výběrem v laboratoři.
- **Když se ale spočítá výsledek za celý cyklus** (tedy včetně všech kryotransferů z téže zásoby embryí) rozdíl se do značné míry stírá. Tohle je klíčová věta celého článku.
- Část embryí se do stadia blastocysty nedostane. **U některých žen tak k transferu v daném cyklu nedojde vůbec.** Riziko je vyšší tam, kde je embryí málo.
- Diskutuje se o rozdílech v průběhu těhotenství a u novorozenců po přenosu blastocysty. Data jsou nejednotná a jejich význam se dál zkoumá.
- Nejde tedy o metodu, která by sama o sobě zvyšovala šanci na dítě z celého cyklu. Je to jiný způsob, jak cyklus uspořádat.

## Omezení a nejistoty

- **Jeden IVF cyklus může obsahovat víc transferů**: čerstvý přenos a po něm další kryotransfery ze stejné zásoby embryí. Porovnávat postupy podle jednoho přenosu proto klame.
- **Zrušený transfer bolí.** Když se žádné embryo nedostane do pátého dne, je to jedna z nejtěžších zpráv celého cyklu. Stojí za to o téhle možnosti mluvit předem, ne až v ten den.
- **Kvalita laboratoře je zásadní.** Prodloužená kultivace klade vyšší nároky na podmínky a zkušenost pracoviště.
- **Hodnocení blastocysty není předpověď.** Písmena a čísla ve zprávě popisují vzhled, ne chromozomální výbavu ani jistotu uhnízdění.
- Pokud se za ni připlácí, ptejte se, co přesně je v ceně. Kultivace, zamrazení, skladování.

## Na co se zeptat kliniky

1. Kultivujete u nás do pátého dne standardně, nebo se rozhodujeme individuálně?
2. **Proč to doporučujete zrovna u mě. Kolik mám embryí a co to znamená pro riziko, že transfer nebude?**
3. Kdy padne definitivní rozhodnutí a kdo mi ho oznámí?
4. Je prodloužená kultivace v ceně cyklu, nebo se připlácí. A co je v ceně zahrnuto?
5. Jaký podíl embryí se u vás dostane do stadia blastocysty?
6. Co se stane s embryi, která se do blastocysty nedostanou?
7. Kolik transferů mohu z tohoto cyklu čekat, pokud budou embrya k zamrazení?

> Text má informativní charakter a nenahrazuje konzultaci s lékařem. O tom, co má ve vaší situaci smysl, rozhoduje vaše klinika společně s vámi.`,
  },
]

export const pack: ContentPack = { items }
