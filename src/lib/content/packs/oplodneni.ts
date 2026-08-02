import type { ContentItem, ContentPack, DailyCard } from '../types'

/**
 * Oplození a vývoj embryí den po dni.
 *
 * Dvě věci, které se ženě dějí bez ní a přitom o nich rozhoduje celý zbytek
 * cyklu: jakou metodou se její vajíčka oplodní a co se s embryi děje mezi
 * nultým a šestým dnem. Balík vysvětluje obojí bez doporučování konkrétní
 * metody a bez slibů. U metod se slabou důkazní oporou se to říká nahlas.
 */

const REVIEW = 'Odborně garantováno lékařem reprodukční medicíny.'

const items: ContentItem[] = [
  // ------------------------------------------------------------- metody ---
  {
    id: 'opl-klasicke-ivf',
    kind: 'article',
    title: 'Klasické IVF: když si spermie musí cestu k vajíčku najít sama',
    excerpt:
      'Nejstarší a nejméně invazivní způsob oplození v laboratoři. A stále metoda první volby všude, kde k tomu jsou podmínky.',
    minutes: 7,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 1],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
    publishedOn: '2026-08-02',
    boost: 0.8,
    body: `## Co se v laboratoři skutečně děje

Klasickému IVF se v laboratořích říká také konvenční inseminace nebo prostě „klasika". Znamená to, že se vaše vajíčka a zpracované spermie partnera nebo dárce dají dohromady do jedné kapky kultivačního média. Na jedno vajíčko připadá řádově desetitisíce pohyblivých spermií.

Co se stane potom, laboratoř neřídí. Spermie se musí protlačit vrstvou kumulárních buněk, které vajíčko obalují, navázat se na jeho obal (zona pellucida), proniknout jím a splynout s vajíčkem. Ve chvíli, kdy jedna uspěje, vajíčko svůj obal změní tak, že už další nepustí dovnitř.

Výběr tedy dělá vajíčko, ne embryolog. To je celý rozdíl proti ICSI.

## Kdy se klasické IVF zvažuje

Bývá zvažováno tam, kde je předpoklad, že si spermie poradí samy:

- parametry spermiogramu jsou po zpracování vzorku v normě nebo jen mírně snížené,
- není známé selhání oplození z předchozího cyklu,
- není v plánu genetické testování embryí,
- je k dispozici dostatečný počet vajíček.

Vždy jde o posouzení konkrétní situace. To, co platí pro jeden pár, neplatí automaticky pro druhý.

## Co o klasickém IVF víme

Tam, kde je vzorek v pořádku, nebývá klasické IVF podle dostupných dat horší než ICSI, ani v podílu oplozených vajíček, ani ve výsledku cyklu. Zároveň je to metoda, při které se do vajíčka nijak mechanicky nezasahuje.

Bývá také levnější, protože nevyžaduje mikromanipulační techniku ani čas embryologa u každého jednotlivého vajíčka.

## Kde je jeho slabé místo

Hlavním rizikem je **selhání oplození**: situace, kdy se druhý den ukáže, že se neoplodnilo žádné nebo skoro žádné vajíčko. Stává se to u malé části cyklů a předem se to nedá spolehlivě předpovědět, protože běžný spermiogram o schopnosti spermie proniknout do vajíčka mnoho neřekne.

Právě proto některá pracoviště u nejistých situací volí **rozdělení vajíček**: část se oplodní klasicky a část metodou ICSI. Získá se tím informace do dalšího cyklu, aniž by se riskovalo všechno najednou. Jestli to má ve vaší situaci smysl, je otázka na vaši kliniku.

## Když oplození selže

Na některých pracovištích se v takové situaci zvažuje takzvané záchranné ICSI. Provedení ICSI se zpožděním o několik hodin až den. Výsledky bývají horší než u ICSI provedeného včas, protože vajíčko mezitím stárne. Není to standardní postup na všech pracovištích a rozhodně to není nic, co byste si mohla vyžádat zpětně.

## Co si nechte vysvětlit

1. Podle čeho jste se u nás rozhodli pro klasické IVF?
2. Zvažovali jste rozdělení vajíček mezi klasické IVF a ICSI?
3. Co budeme dělat, pokud se druhý den ukáže, že se neoplodnilo nic?
4. Kdy a od koho se výsledek oplození dozvím?

## Jedna praktická poznámka k nezralým vajíčkům

U klasického IVF se vajíčka zbavují obalujících buněk až následující den. Znamená to, že v den odběru vám nikdo neřekne, kolik z nich bylo zralých. Tuhle informaci obvykle dostanete až spolu s výsledkem oplození. U ICSI je to naopak, protože tam se vajíčka musí zbavit obalu hned.

> Tento text popisuje obvyklou praxi. O tom, jaká metoda je vhodná ve vaší situaci, rozhoduje váš ošetřující lékař spolu s embryologem. Proberte to se svou klinikou.`,
  },
  {
    id: 'opl-icsi',
    kind: 'article',
    title: 'ICSI: jedna spermie, jedna jehla, jedno vajíčko',
    excerpt:
      'Nejrozšířenější metoda oplození v laboratoři. A zároveň metoda, která se často používá i tam, kde pro ni není důvod.',
    minutes: 8,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 1],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    boost: 0.9,
    body: `## Co ICSI je

ICSI znamená intracytoplazmatickou injekci spermie. Embryolog vybere pod mikroskopem jednu spermii, znehybní ji a velmi tenkou skleněnou jehlou ji vpraví přímo do nitra vajíčka. Krok, který při klasickém IVF spermie musí zvládnout sama (proniknout obaly vajíčka) se tím obejde.

## Jak to vypadá krok za krokem

1. **Denudace.** Vajíčka se enzymaticky a mechanicky zbaví kumulárních buněk, aby na ně embryolog viděl.
2. **Hodnocení zralosti.** Teprve teď se pozná, kolik vajíček je zralých. Zralé vajíčko (ve fázi MII) má viditelné pólové tělísko. Nezralá vajíčka se obvykle injikovat nedají.
3. **Výběr spermie.** Embryolog hledá pohyblivou spermii s pravidelným tvarem.
4. **Injekce.** Vajíčko se přidrží přísavnou pipetou, jehla projde obalem a spermie se uloží do cytoplazmy.
5. **Zpět do inkubátoru.** Kontrola oplození přijde následující ráno.

Celá procedura probíhá na vyhřívaném stolku, aby vajíčko nezažilo teplotní výkyv.

## Kdy se ICSI zvažuje

- **mužský faktor**: snížený počet, pohyblivost nebo podíl normálních tvarů spermií,
- **spermie získané chirurgicky** z varlete nebo nadvarlete,
- **předchozí selhání oplození** nebo velmi nízký podíl oplozených vajíček při klasickém IVF,
- **rozmrazená vajíčka**, u kterých obal po zamrazení a rozmrazení mění vlastnosti,
- **plánované genetické testování embryí**, aby se do vzorku nedostala cizí DNA ze spermií ulpělých na obalu vajíčka,
- situace, kdy je vajíček velmi málo a pracoviště nechce riskovat selhání oplození.

Seznam není návod. Indikaci určuje klinika podle celého obrazu, ne podle jednoho čísla ve spermiogramu.

## Co ICSI umí a co neumí

**Umí** vyřešit situaci, kdy se spermie k vajíčku nedostane. To je jeho jediný, ale zásadní úkol.

**Neumí** zlepšit kvalitu vajíčka. Neumí opravit chromozomální výbavu spermie ani vajíčka. Neumí zajistit, že se embryo bude dál dělit.

Tohle je nejčastější nedorozumění celého cyklu. Žena slyší, že „spermii vpravíme přímo dovnitř", a čeká, že se tím oplodní všechna vajíčka. Ani při ICSI se to nestane. Část vajíček se neoplodní, protože oplození není jen mechanické vpravení buňky dovnitř, ale složitý biochemický děj, který musí vajíčko samo spustit.

## Co víme o tom, jestli ICSI zvyšuje šanci

Tohle je důležité a často se to říká zkresleně: **u párů bez mužského faktoru nepřineslo rutinní použití ICSI v dostupných datech vyšší pravděpodobnost narození dítěte než klasické IVF.** Odborné společnosti proto ICSI nedoporučují používat plošně u všech.

To neznamená, že je ICSI špatná metoda. Znamená to, že je to nástroj na konkrétní problém. Když ten problém máte, je to metoda volby. Když ho nemáte, samo o sobě vám nic nepřidá.

## Rizika a otevřené otázky

- **Malá část vajíček injekci nepřežije.** Vajíčko je křehké a manipulace s ním má svou cenu. Embryolog to obvykle uvede ve zprávě.
- **Přirozený výběr spermie odpadá.** Vybírá ho člověk podle vzhledu a pohyblivosti, což nevypovídá o genetické výbavě.
- **Dlouhodobé sledování dětí** narozených po ICSI zatím neprokázalo zásadní rozdíl proti dětem narozeným po klasickém IVF. Část otázek zůstává otevřená a sledování pokračuje. Pokud vás to zajímá do hloubky, je to legitimní téma na konzultaci.

## Otázky na kliniku

1. Proč u nás ICSI, a ne klasické IVF?
2. Kolik vajíček bylo zralých a kolik se jich injikovalo?
3. Kolik vajíček injekci nepřežilo?
4. Znamená ICSI v naší situaci nějaký příplatek?

> Tento článek popisuje metodu obecně. Nenahrazuje doporučení lékaře a nemá sloužit k tomu, abyste si konkrétní postup na klinice vyžádala nebo odmítla bez konzultace.`,
  },
  {
    id: 'opl-imsi',
    kind: 'article',
    title: 'IMSI: výběr spermie při šestitisícinásobném zvětšení',
    excerpt:
      'Metoda, která zní přesvědčivě, ale její přínos pro narození dítěte se v dostupných studiích zatím nepotvrdil.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 0],
    topics: ['embryologie', 'vysledky'],
    level: 'deep',
    hero: 'taupe',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    body: `## O co jde

Při běžném ICSI vybírá embryolog spermii při zvětšení kolem dvou set až čtyř set násobku. Při IMSI se používá speciální optika, která umožní zvětšení řádově šest tisíc násobku a víc. Embryolog při něm vidí detaily hlavičky spermie, které jinak nejsou rozeznatelné, hlavně drobné dutinky (vakuoly).

Předpoklad je, že spermie s hladkou hlavičkou bez vakuol nese méně poškozenou DNA a povede k lepšímu vývoji embrya.

## Jak se to dělá

Vzorek se prohlíží v reálném čase, embryolog spermie třídí podle tvaru hlavičky a vybranou pak injikuje stejně jako při ICSI. Výběr trvá výrazně déle než u klasického ICSI. U obtížných vzorků i hodiny. Na řadě pracovišť jde o placený nadstandard.

## Co o IMSI víme: a co ne

Tady je potřeba být přímý. **Dostupné souhrny studií nepotvrdily, že by IMSI proti standardnímu ICSI vedlo k vyššímu podílu narozených dětí.** Výsledky jednotlivých studií si odporují, řada z nich je malá a metodicky slabá, a jistota důkazů je hodnocena jako nízká.

To neznamená, že je metoda nesmyslná. Znamená to, že zatím **nemáme důkaz, že funguje**, a nikdo vám poctivě nemůže slíbit, že vám zvýší šanci.

## Kdy o ní může být řeč

Některá pracoviště ji zvažují u výrazně zhoršené morfologie spermií nebo po opakovaných cyklech, kde se embrya nevyvíjela dál. I v těchto situacích jde o postup s omezenou důkazní oporou, ne o standard.

## Na co se ptát, když vám ji nabídnou

1. Proč zrovna v naší situaci?
2. Jaká data k tomu máte. Z literatury i z vašeho pracoviště?
3. Kolik to stojí a co za ty peníze konkrétně dostaneme?
4. Co se stane, když ji odmítneme?

Poslední otázka je nejdůležitější a je naprosto v pořádku ji položit.

## Jak o tom přemýšlet

Metody s nejistým přínosem se nabízejí nejčastěji ženám po neúspěších, tedy ve chvíli, kdy je ochota zkusit cokoli největší. Je legitimní si nadstandard zaplatit s vědomím, že důkazy jsou slabé. Není v pořádku, aby vám ho někdo prodal jako jistotu.

> Rozhodnutí o metodě patří vám a vaší klinice společně. Tento text vám má dát podklad k otázkám, ne odpověď místo lékaře.`,
  },
  {
    id: 'opl-picsi',
    kind: 'article',
    title: 'PICSI: výběr spermie podle vazby na kyselinu hyaluronovou',
    excerpt:
      'Elegantní nápad postavený na tom, jak spermie funguje v těle. S výsledky, které zatím nepotvrdily vyšší šanci na narození dítěte.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 0],
    topics: ['embryologie', 'vysledky'],
    level: 'deep',
    hero: 'sage',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    body: `## Odkud ten nápad pochází

Vajíčko je v těle obklopené buňkami zalitými do kyseliny hyaluronové. Zralá spermie má na povrchu vazebná místa, kterými se na ni umí navázat. Nezralá je nemá. V přírodě tedy funguje jakési síto: k vajíčku se dostane spíš spermie, která dozrála celým procesem.

PICSI se snaží tohle síto napodobit v laboratoři.

## Jak to probíhá

Na dně misky jsou kapky nebo plošky s kyselinou hyaluronovou. Vzorek se na ně nanese a embryolog sleduje, které spermie se navážou a zůstanou „přichycené hlavičkou a mrskající se ocáskem". Takovou spermii pak odebere a použije k injekci do vajíčka. Zbytek postupu se od běžného ICSI neliší.

Obdobný princip se používá i v podobě média s kyselinou hyaluronovou, do kterého se spermie umístí před výběrem.

## Co se o PICSI ví

Metoda vypadá logicky a bylo o ní provedeno i větší randomizované sledování. **Rozdíl v podílu narozených dětí proti standardnímu ICSI se v něm neprokázal.** Objevil se signál v podílu potratů, který se ale v dalších datech nepotvrdil natolik, aby se z něj dalo vycházet.

Souhrnně: **důkazy jsou omezené a nejednoznačné.** Kdo vám PICSI nabízí s tím, že „zvyšuje šanci", jde nad rámec toho, co data ukazují.

## Kdy o ní bývá řeč

Zvažuje se u zvýšené fragmentace DNA spermií, po opakovaných neúspěších nebo po opakovaných ztrátách těhotenství. Ani v těchto situacích nejde o postup, který by byl doporučen plošně.

## Praktické okolnosti

- Výběr trvá déle než běžné ICSI a u velmi špatných vzorků se navázaná spermie nemusí najít.
- Na většině pracovišť jde o placený nadstandard.
- Metoda nijak nenahrazuje vyšetření mužského faktoru. Pokud se u partnera něco nevyšetřilo, je to důležitější otázka než volba mezi ICSI a PICSI.

## Otázky na kliniku

1. Co konkrétně vás vede k tomu ji u nás navrhnout?
2. Jak často ji u podobných párů používáte?
3. Co uděláme, když se žádná spermie neváže?

> Text popisuje metodu obecně a nenahrazuje doporučení vašeho lékaře. Slabá důkazní opora neznamená, že je metoda škodlivá. Znamená, že vám nikdo nemůže poctivě slíbit výsledek.`,
  },
  {
    id: 'opl-macs',
    kind: 'article',
    title: 'MACS: magnetické oddělení poškozených spermií',
    excerpt:
      'Metoda, která z ejakulátu odstraňuje spermie s příznaky zániku buňky. S daty, která zatím nestačí na to, aby se používala běžně.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 0],
    topics: ['embryologie', 'vysledky'],
    level: 'deep',
    hero: 'dusk',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    body: `## Princip

Buňka, která spustila proces vlastního zániku (apoptózu), vystaví na svém povrchu látku zvanou fosfatidylserin. Na tu se dá navázat bílkovina annexin V. A když se annexin V spojí s mikroskopickými magnetickými kuličkami, dá se celý vzorek protáhnout magnetickým polem. Poškozené spermie se zachytí, ostatní projdou.

Zkratka MACS znamená magneticky aktivovaná separace buněk.

## Co se od toho čeká

Že do dalšího zpracování půjde vzorek s nižším podílem spermií, které mají poškozenou DNA nebo jsou na cestě k zániku. Metoda se zvažuje hlavně tam, kde se zjistila zvýšená fragmentace DNA spermií.

## Co o MACS víme

Studií je málo, jsou malé a metodicky nestejnorodé. **Jistota důkazů o vlivu na narození dítěte je nízká** a odborné společnosti řadí MACS mezi postupy, jejichž přínos není prokázaný. Některá pracoviště ji používají, jiná ne. A obojí je v souladu s tím, co dnes víme.

Je také dobré vědět, že **při separaci se část vzorku ztratí**. U výrazně zhoršených vzorků to může být problém sám o sobě.

## Co s tím jako pacientka

Pokud vám MACS nabídnou, ptejte se na dvě věci:

1. Máme u nás doloženou zvýšenou fragmentaci DNA spermií, nebo jde o postup „pro jistotu"?
2. Co se změní na plánu cyklu, když to uděláme, a co když ne?

## Co má obvykle větší váhu

U mužského faktoru bývá v praxi užitečnější probrat vyšetřitelné a ovlivnitelné věci. Varikokélu, infekce, léky, dobu pohlavní abstinence před odběrem, kouření, teplotní zátěž, obezitu, celkový zdravotní stav. Tohle nejsou zázračná řešení a ne u každého se něco najde, ale jde o cestu, která má oporu.

> Metody s neprokázaným přínosem nejsou automaticky nesmysl. Jsou to metody ve zkoumání. Rozhodnutí, jestli je ve vaší situaci zkusit, patří vám a vaší klinice.`,
  },
  {
    id: 'opl-mikrofluidni-selekce',
    kind: 'article',
    title: 'Mikrofluidní selekce spermií: čip místo odstředivky',
    excerpt:
      'Nejnovější způsob přípravy vzorku, který se šetrně vyhýbá odstřeďování. A u kterého zatím chybí data o tom, jestli mění výsledek cyklu.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 0],
    topics: ['embryologie', 'vysledky'],
    level: 'deep',
    hero: 'pearl',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    body: `## Jak se vzorek zpracovává běžně

Klasická příprava spermií pracuje s odstřeďováním. Vzorek se roztočí, aby se oddělily pohyblivé spermie od semenné plazmy a buněčné drti. Funguje to a používá se to desítky let. Nevýhodou je, že při odstřeďování vznikají takzvané reaktivní formy kyslíku, které mohou poškodit DNA spermií.

## Co dělá mikrofluidní čip

Vzorek se nanese do malého jednorázového čipu s mikroskopickými kanálky a póry. Spermie se přes ně musí samy proplavat. Odstřeďování odpadá, mechanická zátěž je minimální a na druhé straně se sbírají spermie, které jsou dostatečně pohyblivé na to, aby cestu zvládly. V laboratorních podmínkách bývá u takto vybraných spermií nižší podíl poškozené DNA.

Postup trvá desítky minut a nevyžaduje složitou obsluhu.

## Co víme o výsledcích

Tady je potřeba oddělit dvě věci.

**Co se ukazuje:** vybrané spermie mívají v laboratorních ukazatelích lepší parametry. Pohyblivost, celistvost DNA.

**Co se zatím neukázalo:** že se tím zvýší podíl těhotenství nebo narozených dětí. **Studií je málo, jsou malé a jejich výsledky nejsou jednotné.** Jde o metodu, která se stále ověřuje, ne o prokázaný standard.

Zlepšení laboratorního ukazatele není totéž co narozené dítě. Tenhle rozdíl je u nových metod v reprodukční medicíně naprosto zásadní a stojí za to si ho pamatovat i u všeho ostatního, co vám kdy někdo nabídne.

## Kdy o tom bývá řeč

Zvažuje se u zvýšené fragmentace DNA spermií, po opakovaně nekvalitním vývoji embryí nebo tam, kde pracoviště tuhle techniku běžně používá. Obvykle jde o placený nadstandard.

## Otázky, které dávají smysl

1. Používáte to u nás na základě konkrétního nálezu, nebo plošně?
2. Jaká je vaše zkušenost a co o tom říkají data?
3. Jak se to promítne do ceny cyklu?

> Nové neznamená lepší a staré neznamená překonané. U metody s omezenými daty je poctivá odpověď „nevíme to jistě". A tu byste od kliniky měla dostat.`,
  },
  {
    id: 'opl-aoa',
    kind: 'article',
    title: 'Umělá aktivace oocytu (AOA): postup pro velmi úzkou skupinu situací',
    excerpt:
      'Když se vajíčka po ICSI opakovaně neoplodní, může být zvažován zásah, který napodobí chemický signál chybějící ze spermie.',
    minutes: 7,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 1],
    topics: ['embryologie', 'vysledky'],
    level: 'deep',
    hero: 'sand',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    body: `## Co se má při oplození stát

Vpravení spermie do vajíčka samo o sobě nestačí. Spermie do vajíčka vnáší bílkovinu, která v něm spustí sérii vln uvolňovaného vápníku. Právě tyhle vlny vajíčko „probudí". Dokončí své zrání, vytvoří prvojádra a nastartuje dělení.

Když signál chybí nebo je slabý, vajíčko se neaktivuje. Vypadá to jako selhání oplození, přestože spermie je uvnitř.

## Co dělá AOA

Umělá aktivace oocytu (zkratkou AOA) se snaží tuhle vápníkovou vlnu vyvolat uměle. Nejčastěji krátkým vystavením vajíčka látce ze skupiny vápníkových ionoforů, obvykle krátce po ICSI. Existují i jiné postupy, ale tenhle je nejrozšířenější.

## V jakých situacích bývá zvažována

Jde o velmi úzkou skupinu:

- **úplné nebo téměř úplné selhání oplození po ICSI** v předchozím cyklu, kdy bylo injikováno dostatečné množství zralých vajíček,
- **podezření na poruchu aktivace vajíčka** ze strany spermie,
- **globozoospermie**: vzácná vada, kdy spermie nemají akrozom,
- některé situace se spermiemi získanými chirurgicky, kde už oplození jednou selhalo.

**Nejde o postup, který by se nabízel pro zlepšení výsledků u běžného cyklu.** Pokud vám ho někdo nabídne jako „vylepšení" bez toho, že by u vás oplození selhalo, ptejte se proč.

## Co o AOA víme

- U pečlivě vybraných případů, kde oplození opakovaně selhalo, **může** dojít ke zvýšení podílu oplozených vajíček. Tohle je nejlépe doložená část.
- **Data o narozených dětech jsou výrazně omezenější** a studie jsou malé.
- **Dlouhodobá bezpečnost není dostatečně prozkoumaná.** Zasahuje se do velmi rané fáze vývoje a sledovaných dětí je zatím málo na to, aby se dalo mluvit s jistotou. Dosud publikovaná sledování zásadní problém neukázala, ale to není totéž jako důkaz bezpečnosti.

Z těchto důvodů se AOA řadí mezi postupy, které se používají cíleně a po důkladné rozvaze, ne plošně.

## Co se zeptat, pokud přijde na řadu

1. Na základě čeho u nás AOA zvažujete?
2. Jaká je vaše zkušenost s touhle metodou a kolik cyklů takto ročně děláte?
3. Co víme o bezpečnosti a co nevíme?
4. Existuje v naší situaci jiná cesta, třeba jiný zdroj spermií nebo změna protokolu?

## Když oplození selhalo a je vám z toho zle

Selhání oplození je jedna z nejkrutějších zpráv celého cyklu, protože přichází brzy a je úplná. Nic jste neudělala špatně a nedá se to vysvětlit tím, jak jste žila. Má smysl trvat na samostatné konzultaci, kde se probere, co se u vás ví, co se dá vyšetřit a jaké jsou možnosti pro příště, ne jen dvě věty do telefonu.

> Tento text je informativní. O tom, jestli je AOA vhodná ve vaší konkrétní situaci, rozhoduje váš lékař spolu s embryologem. Proberte to se svou klinikou.`,
  },
  {
    id: 'opl-ivf-nebo-icsi',
    kind: 'article',
    title: 'IVF, nebo ICSI: podle čeho se to rozhoduje',
    excerpt:
      'Rozhodnutí nepadá podle toho, co zní modernější. Projdeme, co klinika skutečně váží a na co se máte zeptat.',
    minutes: 8,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 1],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE (doporučené postupy', 'Cochrane) přehledy důkazů'],
    publishedOn: '2026-08-02',
    boost: 0.85,
    body: `## Nejde o dva stupně kvality

Ve většině hlav to funguje takhle: klasické IVF je základ a ICSI je „ta lepší verze". Není to tak. Jsou to dva různé nástroje na dvě různé situace.

ICSI řeší jediný problém. Že se spermie nedostane do vajíčka. Když tenhle problém nemáte, ICSI vám ho nevyřeší, protože není co řešit.

## Co klinika váží

### 1. Vzorek po zpracování

Rozhodující není číslo ze spermiogramu z loňska, ale to, kolik pohyblivých spermií s rozumným tvarem je k dispozici v den odběru po zpracování vzorku. Proto se rozhodnutí občas upřesňuje až ten den.

### 2. Historie oplození

Pokud v minulém cyklu při klasickém IVF nedošlo k oplození nebo se oplodnil jen zlomek vajíček, bývá ICSI zvažováno i při normálním spermiogramu.

### 3. Počet a stav vajíček

Když je vajíček málo, váha jednoho selhání roste. Některá pracoviště v takové situaci volí ICSI, jiná rozdělení vajíček. Praxe se liší.

### 4. Zdroj spermií

U spermií získaných chirurgicky z varlete nebo nadvarlete se prakticky vždy používá ICSI, protože takové spermie samy do vajíčka neproniknou.

### 5. Plán genetického testování

Pokud se plánuje testování embryí, volí se běžně ICSI. Brání se tím tomu, aby na obalu vajíčka ulpěly cizí spermie a jejich DNA zkreslila výsledek.

### 6. Rozmrazená vajíčka

Obal vajíčka po zamrazení a rozmrazení mění vlastnosti, proto se u nich obvykle používá ICSI.

## Rozdělení vajíček (split)

Když je situace nejasná, dá se část vajíček oplodnit klasicky a část metodou ICSI. Získáte informaci pro příště a nesázíte všechno na jednu kartu. Není to vhodné vždycky. Má to smysl hlavně tam, kde je vajíček dost.

Zeptejte se, jestli o tom u vás uvažovali. I odpověď „ne, a tady je proč" je dobrá odpověď.

## Co data říkají o rutinním ICSI

Rozsáhlá data z posledních let ukazují, že **u párů bez mužského faktoru rutinní použití ICSI nevede k většímu podílu narozených dětí** než klasické IVF. Odborné společnosti proto nedoporučují používat ICSI plošně u všech pacientek.

Přesto se to na řadě pracovišť na světě děje. Důvody bývají praktické. Snaha vyhnout se selhání oplození, jednotná organizace laboratoře, někdy i ekonomika. Nemusí to být špatná praxe, ale máte právo vědět, do které kategorie patří vaše doporučení.

## Otázky, které stojí za to položit před cyklem

1. Jakou metodu oplození u nás plánujete a proč zrovna tuhle?
2. Rozhoduje se to předem, nebo až podle vzorku v den odběru?
3. Zvažujete rozdělení vajíček?
4. Liší se cena podle metody?
5. Co se stane, pokud se druhý den ukáže, že se neoplodnilo nic?

## Jedna věc, kterou si zapamatujte

Metoda oplození se týká jediného kroku. Spojení vajíčka a spermie. Nemá vliv na to, kolik vajíček se odebralo, jaká byla jejich kvalita ani jak se embrya budou dělit dál. Většina toho, co v cyklu rozhoduje, se odehrává mimo tenhle jeden krok.

> Tento text nedoporučuje žádnou metodu. Volba patří vašemu ošetřujícímu lékaři a embryologovi, kteří znají vaši situaci. Vy máte právo rozumět tomu, proč se rozhodli tak, jak se rozhodli.`,
  },

  // ------------------------------------------------------- den po dni ---
  {
    id: 'opl-den-0',
    kind: 'article',
    title: 'Den 0: odběr a hodiny, kdy se vajíčko potká se spermií',
    excerpt:
      'Den, ze kterého se dozvíte jen počet vajíček. A proč to číslo ještě zdaleka není počet embryí.',
    minutes: 7,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [0, 0],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.9,
    body: `## Co se děje během několika minut po odběru

Folikulární tekutina, kterou lékař odsál z vaječníku, putuje okénkem přímo do laboratoře. Embryolog ji pod mikroskopem prohlíží a hledá v ní komplexy kumulárních buněk s vajíčkem uvnitř. Vajíčko je pouhým okem neviditelné. To, co je vidět, je obláček buněk kolem něj.

Nalezená vajíčka se přenesou do kultivačního média a uloží do inkubátoru se stabilní teplotou, vlhkostí a složením plynů.

## Proč je vajíček míň, než bylo folikulů

Skoro vždycky. Důvody jsou běžné a nejsou vaše chyba:

- ne v každém folikulu vajíčko je,
- menší folikuly nemusí obsahovat zralé vajíčko,
- část vajíček se z folikulu neuvolní.

Rozdíl mezi počtem folikulů na posledním ultrazvuku a počtem vajíček ve zprávě je normální jev, ne známka toho, že se něco pokazilo.

## Zralost: informace, kterou dostanete jindy podle metody

- **Při ICSI** se vajíčka ještě týž den zbaví obalujících buněk a hodnotí se zralost. Injikují se jen zralá. Číslo „kolik bylo zralých" tedy může padnout už dnes.
- **Při klasickém IVF** se vajíčka nechávají v obalu a spermie se přidají k nim. Zralost se posoudí až následující den. Dnes se ji tedy nedozvíte.

Nezralá vajíčka nejsou vada. Ve folikulech nikdy nedozrávají všechna stejně rychle a je běžné, že jich část k použití není.

## Oplození

Podle metody se buď spermie přidají k vajíčkům do společné kapky, nebo se jednotlivě injikují. Pak se všechno vrátí do inkubátoru a laboratoř do rána nedělá nic. Otevírání inkubátoru mění podmínky, a tak se dělá co nejméně. Některá pracoviště používají inkubátory s vestavěnou kamerou, které embryo snímají průběžně bez vyndávání.

## Co obvykle uslyšíte dnes

Nejčastěji jedinou větu: kolik vajíček se získalo. Někdy k tomu kolik jich bylo zralých. Pro dnešek to je všechno, co se dá poctivě říct.

Zapište si to přesně tak, jak to zaznělo. Po narkóze a v napětí se čísla v hlavě přesouvají.

## Co číslo znamená a co ne

**Znamená:** kolik vajíček máte k dispozici pro tenhle cyklus.

**Neznamená:** kolik budete mít embryí. Mezi vajíčkem a embryem je několik kroků, ve kterých čísla klesají. A klesají u všech.

Vysoký počet vajíček není zárukou dobrého výsledku a nízký počet neznamená, že cyklus je ztracený. Ženy s třemi vajíčky otěhotní a ženy s dvaceti ne. To není útěcha ani varování, je to prostě popis reality.

## Vaše tělo dnes

Po odběru bývá nepříjemné napětí v podbřišku, slabé špinění a únava z anestezie. Berte to jako den na ležení, jídlo, pití a nic dalšího.

## Kdy volat kliniku

- **silná bolest břicha**, která se zhoršuje,
- **krvácení silnější než menstruace** nebo se sraženinami,
- **horečka nad 38 °C**,
- **rychle rostoucí obvod břicha, dušnost, výrazně snížené močení, prudký nárůst hmotnosti**: možné příznaky ovariálního hyperstimulačního syndromu.

Při dušnosti v klidu, bolesti na hrudi, mdlobě nebo prudké jednostranné bolesti břicha **vyhledejte akutní lékařskou pomoc**.

> Popisuje se tu obvyklý průběh. Postupy laboratoří se liší a to, co platí pro vás, řekne vaše klinika.`,
  },
  {
    id: 'opl-den-1',
    kind: 'article',
    title: 'Den 1: dvě prvojádra a první telefonát, který bolí',
    excerpt:
      'Ráno po odběru se ukáže, kolik vajíček se oplodnilo. A proč to číslo skoro nikdy není takové, jaké jste čekala.',
    minutes: 8,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [1, 1],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.95,
    body: `## Co embryolog ráno kontroluje

Zhruba šestnáct až osmnáct hodin po oplození se vajíčka prohlédnou pod mikroskopem. Hledá se jediná věc: **prvojádra** (odborně pronuklea). Jsou to dva světlé kroužky v cytoplazmě. Jeden nese genetickou informaci z vajíčka, druhý ze spermie. Ještě nesplynuly, jen se k sobě přiblížily.

Tenhle obrázek je jediný spolehlivý důkaz, že oplození proběhlo tak, jak má.

## Co znamenají zkratky ve zprávě

- **2PN**: dvě prvojádra. Normální oplození. Tohle je to, co chcete slyšet.
- **1PN**: jedno prvojádro. Nejednoznačný nález.
- **3PN a víc**: víc než dvě prvojádra, obvykle proto, že do vajíčka pronikly dvě spermie nebo vajíčko nevyloučilo své druhé pólové tělísko. Takové embryo má nadbytečnou sadu chromozomů.
- **0PN**: žádná prvojádra, oplození se neprokázalo.

Embrya s jiným počtem prvojader než dvěma se na většině pracovišť dál nepoužívají k transferu, protože nesou nesprávný počet chromozomů. Není to rozhodnutí proti vám. Je to standardní postup.

## Kolik vajíček se obvykle oplodní

Neoplodní se všechna. Ani při ICSI, kde je spermie doslova uvnitř. Podíl oplozených vajíček se liší cyklus od cyklu, ženu od ženy, a ovlivňuje ho kvalita vajíček i spermií, zralost vajíček a řada věcí, které se změřit nedají.

Průměry, které kolují po internetu, vám o vašem cyklu neřeknou nic. Vaše klinika vám může říct, co je u ní obvyklé. A i to je jen orientace.

## Pozor na jmenovatele

Když vám řeknou „oplodnilo se pět z osmi", zeptejte se, z čeho se počítá osm. U ICSI se počítá ze **zralých** vajíček, ne ze všech odebraných. Rozdíl v tom, jak se číslo počítá, mění dojem z celé zprávy, a přitom je to jen aritmetika.

## Co dnešní číslo znamená a co ne

**Znamená:** kolik oplozených vajíček vstupuje do kultivace.

**Neznamená:** kolik budete mít embryí pátý den. Mezi dneškem a pátým dnem se čísla vždycky sníží. Krásné číslo dnes není příslib a skromné číslo dnes není rozsudek.

Existují cykly, kde z osmi oplozených nedojde dál nic, a cykly, kde ze dvou vzniknou dvě blastocysty. Tohle není o tom, kolik toho máte, ale co s tím půjde dál. A to dnes nikdo neví.

## Když se neoplodnilo nic

Je to jedna z nejtvrdších zpráv celého cyklu, protože přichází rychle a je definitivní. Nezpůsobila jste to tím, co jste jedla, jak jste spala ani tím, že jste se bála.

Co má smysl:

1. Požádat o **samostatnou konzultaci**, ne o vysvětlení do telefonu.
2. Zeptat se, jestli šlo o klasické IVF nebo ICSI a co z toho plyne pro příště.
3. Zeptat se, jestli je u vás na místě další vyšetření na straně muže i ženy.
4. Nerozhodovat o dalším cyklu tenhle týden.

## Jak přežít samotný telefonát

- Mějte po ruce papír. Ve stresu si zapamatujete zlomek.
- Ptejte se na čísla i na to, co znamenají. Otázka „můžete mi to zopakovat?" nikoho neurazí.
- Zeptejte se, kdy budou volat příště a jestli mají v plánu se ozvat každý den. Ticho v následujících dnech je běžné a není to špatná zpráva.
- Neinterpretujte to hned. Dejte si hodinu, než si k číslu vyrobíte příběh.

## Kdy volat kliniku

- rychle rostoucí obvod břicha, dušnost, výrazně snížené močení nebo prudký nárůst hmotnosti,
- silná bolest břicha, opakované zvracení,
- horečka nad 38 °C nebo krvácení silnější než menstruace.

Při dušnosti v klidu, bolesti na hrudi nebo mdlobě **vyhledejte akutní lékařskou pomoc**.

> Tenhle text vysvětluje obvyklou praxi. Výsledky vašeho cyklu s vámi má probrat váš lékař nebo embryolog.`,
  },
  {
    id: 'opl-den-2',
    kind: 'article',
    title: 'Den 2: dvě až čtyři buňky a den, kdy většinou nikdo nevolá',
    excerpt:
      'Embryo se poprvé dělí a jede přitom výhradně na zásobách z vajíčka, proto se z druhého dne dá vyčíst tak málo.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [2, 2],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    body: `## Co se v embryu děje

Prvojádra splynula a embryo se začalo dělit. Druhý den po odběru má obvykle **dvě až čtyři buňky** (embryologové jim říkají blastomery). Zajímavé je, že se přitom nezvětšuje. Původní obsah vajíčka se jen rozděluje na menší části uvnitř téhož obalu.

Embryo v téhle fázi ještě nepracuje podle vlastní genetické informace. Jede na bílkovinách a molekulách, které mu do vínku dalo vajíčko během svého zrání ve folikulu. To je jeden z důvodů, proč se v reprodukční medicíně tolik mluví o kvalitě vajíčka.

## Co embryolog hodnotí

- **počet buněk** vzhledem k času,
- **stejnoměrnost buněk**: jestli jsou zhruba stejně velké,
- **fragmentaci**: podíl drobných úlomků buněčné hmoty mezi buňkami; čím méně, tím lépe,
- **vícejadernost**: jestli některá buňka nemá víc jader.

Tohle jsou popisné znaky vzhledu. Žádný z nich neříká nic o chromozomech.

## Proč vám dnes nikdo nezavolá

Většina pracovišť druhý den nehlásí nic, a je to logické: informace z druhého dne by na plánu cyklu nic nezměnila. Rozhodnutí se dělají později.

**Ticho druhý den není špatná zpráva.** Je to jen den, ze kterého se nereferuje. Pokud vám to nikdo neřekl dopředu, je naprosto v pořádku zavolat a zeptat se, kdy se ozvou.

## Co čísla znamenají a co ne

**Znamená:** embrya se dělí a laboratoř má co sledovat.

**Neznamená:** že embryo, které je dnes „na čase", dojde dál, ani že to pomalejší nedojde. Rychlost dělení v prvních dnech je jen jeden z mnoha ukazatelů a sama o sobě nerozhoduje.

## Proč se počty snižují

Část oplozených vajíček se přestane dělit už teď. Nejčastější příčinou je chromozomální odchylka, která vznikla při zrání vajíčka nebo při prvních děleních. Není to důsledek toho, co jste dělala nebo nedělala, a laboratoř to nezpůsobila ani nemohla odvrátit.

Čísla, která v následujících dnech klesají, jsou očekávaná součást procesu. Kdyby laboratoř kultivovala všechno až do konce, výsledek by to nezměnilo, jen by se to dozvěděla později.

## Co s tím dělá čekání

Druhý den bývá první opravdu prázdný den cyklu. Odběr je za vámi, telefonát z prvního dne odezněl a další zpráva přijde nejdřív pozítří.

Co lidem obvykle pomáhá:

1. Naplánovat si na den jednu konkrétní dokončitelnou věc. Ne úklid bytu. Jednu zásuvku.
2. Vyhradit si na hledání informací dvacet minut a zbytek dne to odkládat.
3. Jít na chvíli ven. Chůze pomáhá i tělu po stimulaci.
4. Říct jednomu člověku, v jaké fázi jste. Nemusí nic dělat, stačí, že to ví.

## Kdy volat kliniku

- rychle rostoucí obvod břicha, dušnost, výrazně snížené močení,
- silná bolest břicha nebo opakované zvracení,
- horečka nad 38 °C,
- bolest, otok nebo zarudnutí lýtka.

> Text popisuje obvyklý průběh kultivace. Konkrétní postup a časování hlášení se mezi pracovišti liší.`,
  },
  {
    id: 'opl-den-3',
    kind: 'article',
    title: 'Den 3: šest až osm buněk a chvíle, kdy embryo přebírá řízení',
    excerpt:
      'Nejdramatičtější den kultivace, o kterém se nejmíň mluví. A den, kdy se na řadě klinik transferuje.',
    minutes: 8,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [3, 3],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'sage',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.85,
    body: `## Co se děje

Třetí den má embryo obvykle **šest až osm buněk**. Odborně se tomuhle stadiu říká rýhování neboli cleavage stage.

Zároveň se v něm odehrává jedna z nejzásadnějších změn celého vývoje: **aktivace embryonálního genomu**. Do téhle chvíle embryo fungovalo na zásobách z vajíčka. Teď musí začít pracovat podle vlastní genetické informace, která vznikla spojením vajíčka a spermie.

Je to jako když se v továrně přepne z náhradního zdroje na vlastní elektřinu. Když je s vlastním zdrojem něco v nepořádku, provoz se zastaví.

## Proč se právě tady zastaví nejvíc embryí

Protože se tady poprvé naplno projeví genetická výbava embrya. Odchylky v počtu nebo struktuře chromozomů, které do téhle chvíle nebyly vidět, se najednou promítnou do schopnosti embrya pokračovat.

To je celý důvod, proč mezi třetím a pátým dnem klesají čísla nejvíc. Není to selhání laboratoře, není to selhání vaše a nedá se to ovlivnit režimem, stravou ani klidem.

## Co embryolog hlásí

Obvykle kombinaci:

- **počet buněk**: kolem osmi bývá popisováno jako odpovídající času, ale ani šest, ani deset nejsou automaticky problém,
- **stejnoměrnost buněk**,
- **podíl fragmentace** v procentech,
- někdy **vícejadernost** nebo poznámku o rychlosti dělení.

Z toho vzniká hodnocení, kterému se říká cleavage grading. Podrobně je rozebrané v samostatném článku o hodnocení embryí. Pro dnešek stačí vědět, že popisuje **vzhled**, ne osud.

## Třetí den jako den transferu

Transfer třetí den je běžná a plnohodnotná praxe, ne nouzové řešení. Zvažuje se hlavně tehdy, když:

- je embryí málo a další selekce v laboratoři by nepřinesla novou informaci,
- pracoviště v dané situaci upřednostňuje děložní prostředí před inkubátorem,
- to odpovídá zvyklostem kliniky nebo vaší anamnéze.

Ani jedna z těch situací neznamená, že máte horší embrya. Znamená to, že se rozhodovalo podle konkrétní situace. **Proberte se svou klinikou, podle čeho se u vás rozhoduje mezi třetím a pátým dnem**: je to jedna z nejužitečnějších otázek celého cyklu.

Třetí den se také na některých pracovištích embrya zamrazují. I to je běžná praxe.

## Co číslo znamená a co ne

**Znamená:** kolik embryí se aktuálně dělí a jak vypadají.

**Neznamená:** kolik jich bude pátý den. Mezi třetím a pátým dnem se rozhoduje víc než mezi nultým a třetím a předpovědět to podle dnešního čísla neumí nikdo.

## Co s tím dělá čekání

Třetí den bývá zlomový i psychicky. Buď dnes přijde telefonát s plánem transferu, nebo se čeká další dva dny naslepo. Obojí je vyčerpávající jinak.

Praktické věci, které pomáhají:

1. Zeptejte se přímo: transferujete třetí, nebo pátý den, a co rozhodne?
2. Zeptejte se, kdy budou volat příště.
3. Zapište si čísla doslova, i slova, kterým jste nerozuměla.
4. Nepočítejte si dopředu, kolik jich pátý den zbude. Ta hra se nedá vyhrát.

## Kdy volat kliniku

- rychlý nárůst obvodu břicha nebo hmotnosti, dušnost, výrazně méně moči,
- silná bolest břicha, opakované zvracení, horečka nad 38 °C,
- bolest, otok nebo zarudnutí lýtka.

> Popisuje se tu obvyklá praxe. Rozhodnutí o dni transferu patří vašemu lékaři a embryologovi, kteří znají vaši situaci.`,
  },
  {
    id: 'opl-den-4',
    kind: 'article',
    title: 'Den 4: morula, den bez čísel a nejtišší den cyklu',
    excerpt:
      'Buňky se dnes přestanou dát spočítat. A právě proto z většiny laboratoří čtvrtý den nikdo nevolá.',
    minutes: 6,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [4, 4],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'taupe',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    body: `## Co se v embryu děje

Čtvrtý den se buňky embrya k sobě těsně přimknou. Vytvoří mezi sebou pevná spojení, jejich hranice se rozostří a z hromádky oddělených buněk vznikne kompaktní kulička. Tomuhle ději se říká **kompaktizace** a výsledku **morula**: podle latinského názvu pro moruši, kterou to připomíná.

Vypadá to jako krok zpět, protože embryo najednou vypadá jednodušeji než včera. Ve skutečnosti je to nezbytná příprava na další krok: buňky se musí spojit, aby mezi nimi mohla vzniknout dutina a aby se poprvé rozdělily na dvě různé skupiny.

## Proč se čtvrtý den nehlásí

Protože se z něj špatně hodnotí. Buňky se nedají spočítat, fragmentace se posuzuje hůř a hodnocení morul není na většině pracovišť standardní. Informace, kterou by vám laboratoř dnes dala, by byla nejistá a nezměnila by plán.

**Ticho čtvrtý den tedy opravdu nic neznamená.** Tohle je asi nejdůležitější věta celého článku. Spousta žen prožije čtvrtý den v přesvědčení, že mlčení je špatná zpráva, kterou jim šetří.

## Co embryolog přesto sleduje

Pokud pracoviště používá inkubátor s kamerou, má obraz průběžně a může si všímat, jestli kompaktizace probíhá a v jakém čase. Ale ani tahle informace se obvykle nesděluje samostatně. Počká se do pátého dne, kdy bude jasnější.

## Transfer čtvrtý den

Existuje a dělá se, i když méně často než třetí a pátý den. V některých situacích je to pro pracoviště nejvhodnější varianta a v žádném případě to není nouzové řešení. Pokud vám ho navrhnou, zeptejte se proč. Odpověď vám o vašem cyklu řekne víc než jakékoli číslo.

## Proč se čísla mezi třetím a pátým dnem snižují

Právě mezi třetím a pátým dnem odpadá největší část embryí. Většinou proto, že po přepnutí na vlastní genetickou informaci nedokážou pokračovat. Nejčastěji kvůli chromozomální odchylce, která vznikla dávno před tím, než jste do cyklu vstoupila.

Kdyby se totéž dělo v těle, nevěděla byste o tom vůbec. V laboratoři to vidíte v číslech, a to je na kultivaci nejtěžší: dostáváte informace o dějích, které by se za normálních okolností odehrály v tichosti.

## Co s tím dělá čekání

Čtvrtý den bývá popisován jako nejtišší den celého cyklu. Nic se neděje, nikdo nevolá a zítřek rozhodne hodně.

Co bývá k užitku:

1. Naplánujte den tak, aby v něm nebyl prostor čekat u telefonu. Ven, mezi lidi, do práce, na procházku.
2. Nepiště si dopředu scénáře pro zítřek. Ani ten dobrý, ani ten špatný.
3. Pokud vás mlčení kliniky ničí, zavolejte a zeptejte se, kdy se ozvou. Není to obtěžování.
4. Domluvte si s partnerem, jak zítřejší zprávu chcete přijmout. Kdo bude u telefonu, komu ji řeknete a komu ne.

## Kdy volat kliniku

- horečka nad 38 °C, silná bolest břicha nebo krvácení se sraženinami,
- dušnost, rychle rostoucí břicho nebo výrazně snížené močení,
- bolest, otok nebo zarudnutí lýtka.

> Praxe laboratoří se liší. Pokud vám vaše klinika hlásí i čtvrtý den, řiďte se tím, co říká ona.`,
  },
  {
    id: 'opl-den-5',
    kind: 'article',
    title: 'Den 5: blastocysta a den, kdy se hodně rozhoduje',
    excerpt:
      'Uvnitř embrya vznikne dutina a buňky se poprvé rozdělí na ty, ze kterých bude dítě, a ty, ze kterých bude placenta.',
    minutes: 8,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [5, 5],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.9,
    body: `## Co se stalo

Uvnitř kompaktní moruly se začala hromadit tekutina a vytvořila dutinu. Tím vznikla **blastocysta**: první stadium, kdy se buňky embrya rozdělily na dvě různé skupiny s různým úkolem:

- **vnitřní buněčná masa**: shluk buněk u jedné stěny, ze kterého se vyvine plod,
- **trofektoderm**: tenká vrstva buněk po obvodu, ze které vznikne placenta a obaly.

Je to poprvé, kdy se dá říct „tady bude dítě a tady bude placenta". Do téhle chvíle byly všechny buňky rovnocenné.

## Co embryolog hlásí

Nejčastěji hodnocení složené z čísla a dvou písmen, například 4AB:

- **číslo 1 až 6** popisuje, jak je blastocysta rozepnutá. Od malé dutiny až po embryo, které se začíná uvolňovat ze svého obalu,
- **první písmeno** hodnotí vnitřní buněčnou masu,
- **druhé písmeno** hodnotí trofektoderm.

Podrobněji je to rozebrané v samostatném článku o hodnocení embryí. Zásadní věta zní: **grading popisuje vzhled v jednom okamžiku, není to předpověď.**

Někdy uslyšíte i to, že embryo pátý den ještě blastocysta není. Je „časná blastocysta" nebo pořád morula. To neznamená konec. Znamená to, že se počká do šestého dne.

## Co se dnes obvykle rozhoduje

- **transfer**: přenos jednoho embrya do dělohy,
- **vitrifikace**: zamrazení embryí, která dosáhla potřebného stadia, k použití v dalších transferech,
- **odběr buněk pro genetické testování**, pokud je v plánu; odebírá se několik buněk z trofektodermu a embryo se zamrazí do doby, než přijde výsledek.

Rozhodnutí o tom, které embryo se přenáší jako první, dělá klinika podle vzhledu, rychlosti vývoje a vaší situace. Je legitimní se zeptat: **proč zrovna tohle?**

## Jeden cyklus, víc transferů

Tohle se často chápe špatně. Jeden odběr vajíček může vést k víc než jednomu transferu. K čerstvému přenosu a k dalším kryotransferům z embryí zamrazených ze stejné zásoby. Cyklus není rovná se jeden transfer.

Proto je otázka „kolik nám zůstává zamrazených embryí" jedna z nejdůležitějších, které dnes položíte. Odpověď mění, jak celý cyklus vnímáte.

## Co čísla znamenají a co ne

**Znamenají:** kolik embryí došlo do stadia, ve kterém se dají přenést nebo zamrazit, a jak vypadají.

**Neznamenají:** jistotu. Krásně hodnocené embryo se nemusí uhnízdit a hůře hodnocené se uhnízdit může. Grading vypovídá o skupinách embryí ve statistice, ne o tom jednom, které je vaše. Nevidí chromozomy, nevidí sliznici a nevidí nic z toho, co přijde po transferu.

## Proč se čísla tak snížila

Cesta od vajíček k blastocystám znamená pokles v každém kroku. Většinu z toho způsobí chromozomální odchylky, které vznikly při zrání vajíčka. Podíl embryí, která dojdou do blastocysty, se liší podle věku, ovariální rezervy a řady dalších okolností. A mezi cykly téže ženy se také mění.

Není to výsledek toho, jak jste žila během kultivace.

## Co s tím dělá čekání

Pátý den bývá emočně nejnabitější den celé kultivace. Přijde konkrétní číslo, konkrétní písmena a konkrétní plán, nebo velmi těžká zpráva.

- Zapište si hodnocení přesně, ale nedělejte z něj mantru. Ta samá dvě písmena vám během čekání poslouží jako důvod k naději i k zoufalství.
- Nesrovnávejte je s cizími čísly z diskusí. Stupnice ani praxe hodnocení nejsou mezi klinikami jednotné.
- Zeptejte se na plán: kdy transfer, jaká medikace, kdy odběr krve.
- Pokud dostanete fotku embrya, schovejte si ji.

## Kdy volat kliniku

- rychle rostoucí obvod břicha, dušnost, výrazně méně moči, prudký nárůst hmotnosti,
- silná bolest břicha, horečka nad 38 °C,
- bolest, otok nebo zarudnutí lýtka.

> Text vysvětluje obvyklou praxi. Výsledky svého cyklu proberte se svým lékařem nebo embryologem.`,
  },
  {
    id: 'opl-den-6',
    kind: 'article',
    title: 'Den 6: pomalejší blastocysty nejsou horší blastocysty',
    excerpt:
      'Část embryí dojde do cíle až šestý den. A z těchhle embryí se běžně rodí děti.',
    minutes: 7,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [6, 6],
    topics: ['embryologie', 'vysledky'],
    level: 'essential',
    hero: 'blush',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.8,
    body: `## Co se šestý den děje

Embrya, která pátý den ještě nebyla blastocystami, dostávají čas dohnat to. Část z nich se šestý den rozepne a stane se plnohodnotnou blastocystou. Na některých pracovištích se kultivuje ještě sedmý den.

Rozdíl mezi pátým a šestým dnem není v tom, jaké embryo je, ale v tom, kdy dorazilo. Vývoj neběží u všech stejně rychle, ani ve zkumavce, ani v těle.

## Co se se šestidenními blastocystami dělá

Obvykle se **zamrazují** metodou vitrifikace, tedy ultrarychlým zmrazením bez tvorby ledových krystalů, a použijí se v pozdějším kryotransferu. Transfer šestý den se dělá také, ale v čerstvém cyklu je běžnější sáhnout po zamrazení, protože děložní sliznice mezitím pokročila a nemusí být s embryem sladěná.

Právě tenhle nesoulad v čerstvém cyklu je nejčastější důvod, proč se o šestidenních blastocystách někdy mluví hůř. Po zamrazení a přenosu v připraveném cyklu se ten problém neřeší.

## Co o nich víme

Poctivá odpověď: **některá data naznačují o něco nižší podíl otěhotnění u blastocyst šestého dne než pátého dne, jiná rozdíl nenacházejí, a rozdíly se liší podle toho, jestli jde o čerstvý nebo kryotransfer.**

Co je jisté a co je pro vás podstatné: **z blastocyst šestého dne se běžně rodí zdravé děti.** Pomalejší start nepředpovídá pomalejší dítě a nemá žádnou souvislost s tím, jaké to dítě bude.

Kdyby šestidenní embrya nestála za nic, kliniky by je nezamrazovaly. Zamrazují je.

## Co dnes uslyšíte

Nejčastěji konečnou bilanci: kolik embryí došlo do stadia blastocysty, kolik se jich zamrazilo a v jakém jsou hodnocení. Tímhle telefonátem kultivace u většiny žen končí.

Otázky, které dnes stojí za to položit:

1. Kolik embryí je zamrazených a v jakém stadiu?
2. Jak jsou hodnocená a v který den byla zamrazena?
3. Kolik transferů z toho v naší situaci předpokládáte?
4. Kdy se domluvíme na dalším postupu?

## Když nedošlo dál nic

Je to zpráva, po které se nedá pokračovat v běžném dni. Nezpůsobila jste ji vy a nedá se vysvětlit tím, že jste byla ve stresu.

Co má smysl:

- **Trvat na samostatné konzultaci.** Máte právo probrat celý cyklus s lékařem, ne dostat dvě věty do telefonu.
- **Zeptat se na klíčovou otázku:** co byste u nás příště udělali jinak a proč?
- **Nerozhodovat o dalším cyklu tenhle týden.** Rozhodnutí z prvních dnů jsou rozhodnutí ze zoufalství.
- **Dát si prostor na to, že je to ztráta.** Nebylo to těhotenství, ale byla to naděje, do které jste dala peníze, čas, tělo i celé měsíce života.

## Co s tím dělá čekání

Šestý den má zvláštní podobu úlevy. Ať dopadne jakkoli, aspoň už víte. Nejistota končí a začíná něco jiného: buď příprava na transfer, nebo přemýšlení, co dál.

Ať už dnešek přinesl cokoli, zapište si to. Za rok budete chtít vědět, co přesně padlo a jak jste se cítila.

## Kdy volat kliniku

- silná bolest břicha, horečka nad 38 °C, dušnost,
- rychlý nárůst hmotnosti nebo obvodu břicha, výrazně méně moči,
- bolest, otok nebo zarudnutí lýtka.

> Praxe kultivace i zamrazování se mezi pracovišti liší. Co platí pro vaše embrya, vám řekne vaše klinika.`,
  },

  // ------------------------------------------------------- hodnocení ---
  {
    id: 'opl-hodnoceni-embrya',
    kind: 'article',
    title: 'Jak se čte hodnocení embrya: 8B, 4AA a co to o vašem embryu opravdu říká',
    excerpt:
      'Rozebereme obě stupnice, které v Česku uslyšíte. A hlavně to, proč je grading popis vzhledu, ne předpověď.',
    minutes: 10,
    phases: ['fertilization', 'embryo_culture'],
    dayRange: [3, 6],
    topics: ['embryologie', 'vysledky'],
    level: 'deep',
    hero: 'pearl',
    author: 'Gabi',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
    publishedOn: '2026-08-02',
    boost: 0.9,
    body: `## K čemu hodnocení slouží

Embryolog má často víc embryí a musí se rozhodnout, které přenese jako první, které zamrazí a v jakém pořadí. K tomu potřebuje popis, který je stručný, opakovatelný a předá se telefonem.

Přesně tohle grading je: **stručný popis vzhledu embrya v jednom konkrétním okamžiku, který slouží k seřazení embryí do pořadí.**

Není to známka na vysvědčení. Není to prognóza. A rozhodně to není hodnocení vás.

## Hodnocení embryí v rýhování (2.–3. den)

Ve stadiu rýhování se popisují tři věci:

1. **Počet buněk.** Třetí den se často uvádí kolem šesti až osmi. Číslo se posuzuje vzhledem k času, ne samo o sobě.
2. **Stejnoměrnost buněk.** Buňky zhruba stejné velikosti bývají popisovány jako příznivější než výrazně nestejné.
3. **Fragmentace.** Podíl drobných úlomků buněčné hmoty mezi buňkami, obvykle v procentech nebo ve stupních. Čím méně, tím lépe.

K tomu se někdy přidá poznámka o **vícejadernosti**: jestli některá buňka nemá víc jader.

Z těchhle znaků vzniká celkové hodnocení. A tady pozor: **stupnice nejsou v Česku ani ve světě jednotné.** Jedno pracoviště používá stupně I až IV, jiné písmena A až D, další čísla 1 až 4. A někde znamená jednička nejlepší, jinde nejhorší. Zápis „8B" tedy znamená něco jiného na různých pracovištích.

**Z toho plyne jediná praktická rada: nesrovnávejte své hodnocení s cizím.** Diskuse na fórech, kde si ženy porovnávají písmenka, jsou zdrojem zbytečného utrpení, protože porovnávají neporovnatelné.

## Gardnerova škála (blastocysta, 5.–6. den)

U blastocyst se používá zápis typu **4AA**, **3BB**, **5AB**. Skládá se ze tří částí.

### Číslo 1 až 6: jak je blastocysta rozepnutá

- **1**: dutina zabírá méně než polovinu objemu,
- **2**: dutina zabírá zhruba polovinu a víc,
- **3**: dutina vyplňuje embryo celé,
- **4**: blastocysta je rozepnutá, obal se ztenčil,
- **5**: embryo se začíná uvolňovat ze svého obalu,
- **6**: embryo je z obalu venku.

Vyšší číslo neznamená lepší embryo. Znamená pokročilejší fázi rozepnutí v okamžiku pohledu. Embryo hodnocené ráno a totéž embryo hodnocené odpoledne mohou mít jiné číslo.

### První písmeno: vnitřní buněčná masa

Skupina buněk, ze které se vyvine plod.

- **A**: hodně buněk, těsně u sebe,
- **B**: méně buněk, volněji uspořádaných,
- **C**: velmi málo buněk.

### Druhé písmeno: trofektoderm

Vrstva buněk, ze které vznikne placenta a obaly.

- **A**: mnoho buněk tvořících souvislou vrstvu,
- **B**: méně buněk, volnější vrstva,
- **C**: málo buněk, nesouvislá vrstva.

## Co grading umí

Ve velkých souborech embryí platí, že lépe hodnocené blastocysty vedou k otěhotnění častěji než hůře hodnocené. Proto se používá. Dává laboratoři rozumné pořadí, ve kterém embrya přenášet.

## Co grading neumí

Tohle je ta část, kterou vám nikdo nestihne vysvětlit v telefonu:

- **Nevidí chromozomy.** Embryo hodnocené 4AA může mít chromozomální odchylku a embryo hodnocené 3BB nemusí. Vzhled a genetika spolu souvisí jen volně.
- **Neplatí pro jedno embryo.** Statistika popisuje skupiny. Vaše embryo je jedno a buď se uhnízdí, nebo ne. Žádné procento se na něm neprojeví „částečně".
- **Je subjektivní.** Dva embryologové mohou totéž embryo ohodnotit mírně jinak. Je to lidský odhad podle obrazu z mikroskopu.
- **Je to jeden snímek v čase.** Embryo se vyvíjí dál a hodnocení platí k okamžiku, kdy se na něj embryolog díval.
- **Neříká nic o dítěti.** Neexistuje souvislost mezi písmeny v hodnocení a tím, jaké to dítě bude. Z embryí s hodnocením B a C se rodí naprosto běžné děti.

## Co s hodnocením jako čtvrtý či šestý den dělat

1. **Zapište si ho přesně**, včetně toho, který den bylo pořízeno. Bez data ztrácí smysl.
2. **Zeptejte se, jakou stupnici vaše klinika používá** a co u ní které písmeno znamená.
3. **Zeptejte se na pořadí a důvod:** které embryo přenášíte jako první a proč zrovna tohle?
4. **Nedělejte z písmen mantru.** Během dvou týdnů čekání vám ta samá dvě písmena poslouží jako důvod k naději i k zoufalství, podle nálady.

## Ještě jedna věc, která se plete

Z jednoho odběru vajíček může vzejít víc transferů. Čerstvý přenos a další kryotransfery z embryí zamrazených ze stejné zásoby. Hodnocení jednotlivých embryí proto nečtěte jako verdikt nad celým cyklem. Čtěte ho jako pořadník.

## Časosběrné sledování

Některá pracoviště používají inkubátory s vestavěnou kamerou, které embryo snímají průběžně. Dává to embryologovi podrobnější obraz o rychlosti dělení, aniž by musel embryo vyndávat. Jestli tahle technika zvyšuje pravděpodobnost narození dítěte, zatím není spolehlivě prokázané. Data jsou nejednotná. Jako nástroj sledování má smysl, jako záruka nikoli.

> Tenhle článek popisuje obvykle používané stupnice. Konkrétní systém i jeho výklad se mezi pracovišti liší. Vždycky se ptejte, jak to čte vaše klinika.`,
  },
]

// --------------------------------------------------------- denní karty ---

const dailyCards: DailyCard[] = [
  {
    id: 'opl-dc-d0',
    phases: ['embryo_culture'],
    day: 0,
    headline: 'Dnes se vaše vajíčka potkala se spermiemi.',
    body: 'Odběr máte za sebou a v laboratoři proběhlo oplození. Buď klasicky ve společné kapce, nebo metodou ICSI. Teď jsou vajíčka v inkubátoru a do rána se nebude dít nic, o čem by se dalo referovat. Vaším jediným úkolem na dnešek je odpočívat.',
    whatsHappening: [
      'Vajíček bývá méně než folikulů na posledním ultrazvuku. To je běžné.',
      'Při ICSI se dnes hodnotí zralost vajíček, při klasickém IVF až zítra.',
      'Laboratoř otevírá inkubátor co nejméně. Každé otevření mění podmínky.',
    ],
    task: 'Zapište si přesně, co vám dnes v laboratoři nebo na sále řekli. Po narkóze se čísla v hlavě rychle přesouvají.',
    reflection: 'Co jsem si k dnešnímu číslu hned přidala sama. A je to opravdu tam?',
    tip: 'Počet vajíček není počet embryí. Mezi tím je několik kroků, ve kterých čísla klesají u všech.',
    callDoctorIf: [
      'Silná nebo narůstající bolest břicha.',
      'Krvácení silnější než menstruace nebo se sraženinami.',
      'Horečka nad 38 °C.',
      'Rychle rostoucí obvod břicha, dušnost nebo výrazně snížené močení.',
    ],
  },
  {
    id: 'opl-dc-d1',
    phases: ['embryo_culture'],
    day: 1,
    headline: 'Dnes se hledají dvě prvojádra.',
    body: 'Zhruba šestnáct až osmnáct hodin po oplození embryolog kontroluje, jestli se ve vajíčku objevila dvě prvojádra. Jedno z vajíčka, jedno ze spermie. To je jediný spolehlivý důkaz, že oplození proběhlo tak, jak má. Embrya s jiným počtem prvojader se dál nepoužívají a je to očekávaná součást procesu.',
    whatsHappening: [
      'Neoplodní se všechna vajíčka, ani při ICSI.',
      'U ICSI se podíl počítá ze zralých vajíček, ne ze všech odebraných. Zeptejte se, z čeho se počítá.',
      'Dnešní číslo nepředpovídá číslo pátého dne.',
    ],
    task: 'Až budou volat, mějte po ruce papír. Zapište si čísla doslova, včetně slov, kterým jste nerozuměla.',
    reflection: 'Komu chci dnešní číslo říct. A komu ne?',
    tip: 'Nekomentujte to hned, ani sama před sebou. Dejte si hodinu, než si k číslu vyrobíte příběh.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha, prudký nárůst hmotnosti nebo dušnost.',
      'Výrazně snížené močení, opakované zvracení.',
      'Silná bolest břicha nebo horečka nad 38 °C.',
    ],
  },
  {
    id: 'opl-dc-d2',
    phases: ['embryo_culture'],
    day: 2,
    headline: 'Dvě až čtyři buňky. A ticho.',
    body: 'Embrya se poprvé dělí a zatím jedou výhradně na zásobách, které jim do vínku dalo vajíčko. Embryolog sleduje počet buněk, jejich stejnoměrnost a podíl fragmentace. Většina pracovišť dnes nevolá, protože informace z druhého dne by na plánu cyklu nic nezměnila.',
    whatsHappening: [
      'Embryo se nezvětšuje. Původní obsah vajíčka se jen dělí na menší části.',
      'Rozdíly v rychlosti dělení mezi embryi jsou v této fázi běžné.',
      'Ticho z laboratoře dnes není špatná zpráva. Je to jen den, ze kterého se nehlásí.',
    ],
    task: 'Naplánujte si na dnešek jednu konkrétní dokončitelnou věc. Ne úklid bytu. Jednu zásuvku.',
    reflection: 'Kterou myšlenku si dnes přehrávám nejčastěji a je vůbec moje?',
    tip: 'Vyhraďte si na hledání informací dvacet minut, a ne večer. Zbytek dne to odkládáte.',
    callDoctorIf: [
      'Dušnost, bolest na hrudi nebo bolest a otok lýtka.',
      'Silná bolest břicha, opakované zvracení nebo horečka nad 38 °C.',
      'Rychle rostoucí obvod břicha nebo výrazně méně moči.',
    ],
  },
  {
    id: 'opl-dc-d3',
    phases: ['embryo_culture'],
    day: 3,
    headline: 'Šest až osm buněk. Embryo přebírá řízení.',
    body: 'Dnes se v embryu aktivuje jeho vlastní genetická informace. Do téhle chvíle fungovalo na zásobách z vajíčka. Právě tady se část embryí zastaví, a je to nejčastěji kvůli chromozomální odchylce, která vznikla dávno předtím, než jste do cyklu vstoupila. Není to nic, co byste ovlivnila.',
    whatsHappening: [
      'Na některých pracovištích se transferuje nebo mrazí právě třetí den. Je to plnohodnotná praxe, ne nouzové řešení.',
      'Když je embryí málo, další selekce v laboratoři nemusí přinést novou informaci.',
      'Dnes často přichází telefonát s plánem dalšího postupu.',
    ],
    task: 'Zeptejte se přímo: transferujete u nás třetí, nebo pátý den. A podle čeho se rozhodnete?',
    reflection: 'Odvozuji z dnešního počtu, jak to celé dopadne? A co když to opravdu nejde?',
    tip: 'Mezi třetím a pátým dnem se rozhoduje víc než mezi nultým a třetím. Dnešní číslo není předpověď.',
    callDoctorIf: [
      'Rychle rostoucí obvod břicha nebo přírůstek hmotnosti přes kilogram za den.',
      'Dušnost, výrazně menší množství moči, opakované zvracení.',
      'Bolest, otok nebo zarudnutí lýtka.',
    ],
  },
  {
    id: 'opl-dc-d4',
    phases: ['embryo_culture'],
    day: 4,
    headline: 'Morula. Den, kdy se buňky přestanou dát spočítat.',
    body: 'Buňky se k sobě dnes těsně přimknou, jejich hranice se rozostří a vznikne kompaktní kulička zvaná morula. Vypadá to jako krok zpět a je to nutná příprava na vznik blastocysty. Čtvrtý den se z většiny laboratoří nehlásí nic. Hodnotí se špatně a informace by nezměnila plán.',
    whatsHappening: [
      'Kompaktizace je předpoklad toho, aby v embryu mohla vzniknout dutina.',
      'Transfer čtvrtý den existuje a dělá se, jen méně často než třetí a pátý.',
      'Zítřek ukáže, kolik embryí došlo do stadia blastocysty.',
    ],
    task: 'Naplánujte dnešek tak, aby v něm nebyl prostor čekat u telefonu. Ven, mezi lidi, nebo do práce.',
    reflection: 'Co bych si dnes řekla, kdyby tohle prožívala moje nejlepší kamarádka?',
    tip: 'Ticho čtvrtý den opravdu nic neznamená. Nikdo vám nic nešetří.',
    callDoctorIf: [
      'Horečka nad 38 °C, silná bolest břicha nebo krvácení se sraženinami.',
      'Dušnost, rychle rostoucí břicho nebo výrazně méně moči.',
      'Bolest, otok nebo zarudnutí lýtka.',
    ],
  },
  {
    id: 'opl-dc-d5',
    phases: ['embryo_culture'],
    day: 5,
    headline: 'Blastocysta: poprvé je vidět, kde bude dítě a kde placenta.',
    body: 'Uvnitř embrya vznikla dutina a buňky se rozdělily do dvou skupin. Z vnitřní buněčné masy se vyvine plod, z vnější vrstvy placenta a obaly. Dnes se často rozhoduje o transferu, o zamrazení nebo o odběru buněk k genetickému testování. Hodnocení typu 4AA popisuje vzhled, ne osud.',
    whatsHappening: [
      'Část embryí dojde do blastocysty až šestý den. To není horší varianta.',
      'Z jednoho odběru vajíček může vzejít víc transferů. Čerstvý přenos i další kryotransfery ze stejné zásoby.',
      'Grading nevidí chromozomy a neplatí pro jedno konkrétní embryo, jen pro statistiku skupin.',
    ],
    task: 'Zeptejte se: kolik embryí nám zůstává zamrazených a které přenášíte jako první. A proč zrovna tohle?',
    reflection: 'Co pro mě dnešní hodnocení znamená a co jsem si k němu přidala sama?',
    tip: 'Nesrovnávejte svá písmena s cizími z diskusí. Stupnice ani praxe hodnocení nejsou mezi klinikami jednotné.',
    callDoctorIf: [
      'Silná bolest břicha, dušnost nebo rychlý nárůst hmotnosti.',
      'Horečka nad 38 °C nebo výrazně menší množství moči.',
      'Bolest, otok nebo zarudnutí lýtka.',
    ],
  },
  {
    id: 'opl-dc-d6',
    phases: ['embryo_culture'],
    day: 6,
    headline: 'Šestý den: kdo dobíhá, doběhne.',
    body: 'Část embryí dosáhne stadia blastocysty až dnes a obvykle se zamrazuje k pozdějšímu kryotransferu. Pomalejší start nepředpovídá pomalejší dítě. Z blastocyst šestého dne se běžně rodí zdravé děti. Dnešním telefonátem se u většiny žen kultivace uzavírá.',
    whatsHappening: [
      'Zamrazuje se vitrifikací, tedy ultrarychlým zmrazením bez tvorby ledových krystalů.',
      'Transfer i zamražení se dělá třetí, čtvrtý, pátý i šestý den. Pozdější den není automaticky horší.',
      'Pokud nedošlo dál nic, máte právo na samostatnou konzultaci, ne na dvě věty do telefonu.',
    ],
    task: 'Zapište si dnešní bilanci: kolik embryí, v jakém stadiu, v jakém hodnocení a který den byla zamrazena.',
    reflection: 'Co si o dnešním výsledku říkám. A co z toho je opravdu o mně?',
    tip: 'Nerozhodujte o dalším cyklu tenhle týden. Rozhodnutí z prvních dnů jsou rozhodnutí z vyčerpání.',
    callDoctorIf: [
      'Silná bolest břicha, horečka nad 38 °C, dušnost.',
      'Rychlý nárůst hmotnosti nebo obvodu břicha, výrazně méně moči.',
      'Bolest, otok nebo zarudnutí lýtka.',
    ],
  },
]

export const pack: ContentPack = { items, dailyCards }
