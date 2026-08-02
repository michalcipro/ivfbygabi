import type { ContentItem, ContentPack } from '../types'

/**
 * Podpůrná péče mimo kliniku.
 *
 * Metody, na které se ženy v léčbě ptají nejčastěji a o kterých se na
 * klinice nemluví. Cílem není nabídnout „něco navíc, co pomůže otěhotnět“ —
 * to žádná z těchto metod prokazatelně neumí. Cílem je popsat je poctivě:
 * co dělají, co o nich skutečně víme, kde jsou důkazy slabé nebo žádné
 * a kde hrozí riziko. Aby se žena mohla rozhodnout informovaně a nekupovala
 * naději za peníze.
 */

const REVIEW = 'Odborně garantováno lékařem reprodukční medicíny.'
const PUBLISHED = '2026-08-02'

const items: ContentItem[] = [
  {
    id: 'ppc-fyzioterapie',
    kind: 'article',
    title: 'Fyzioterapie: co pro vás může a nemůže udělat',
    excerpt:
      'Bolavá záda, ztuhlá pánev, jizvy po operacích a tělo, které je celé měsíce v napětí. Kde fyzioterapie pomáhá a kde začínají sliby, které nemá čím podložit.',
    minutes: 7,
    phases: [],
    topics: ['pohyb', 'sebepece'],
    level: 'deep',
    hero: 'sage',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews', 'NICE — doporučené postupy'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Fyzioterapie je zdravotnický obor, který pracuje s pohybovým aparátem — se svaly, klouby, vazy, dechem a s tím, jak se tělo hýbe jako celek. Fyzioterapeut nejdřív dělá rozbor: dívá se, jak stojíte, jak dýcháte, kde máte omezený pohyb a co bolí. Teprve pak volí postup.

V praxi to bývá kombinace měkkých technik na svaly a jizvy, mobilizace kloubů, práce s dechem a hlavně cvičení, které se naučíte a děláte doma sama. Ta domácí část je obvykle ta, která rozhoduje.

## Jak to může pomoci

V průběhu léčby se tělo dostává do zátěže, se kterou nepočítalo:

- **Bolesti zad a pánve** z dlouhého sezení v čekárnách, ze stresového napětí a z toho, že se hýbete míň než dřív.
- **Jizvy po zákrocích** — po laparoskopii, hysteroskopii, po císařském řezu z předchozího porodu. Jizva, která je srostlá, může táhnout a omezovat pohyb v okolí.
- **Chronické napětí v bránici a v ramenou.** Tělo, které je měsíce ve střehu, dýchá mělce a nahoru do hrudníku.
- **Návrat k pohybu po delší pauze** — kdy nevíte, co si můžete dovolit, a tak radši neděláte nic.

To všechno jsou reálné potíže, které stojí za to řešit. Nikoli proto, že by to změnilo výsledek léčby, ale proto, že vám je líp v těle, které vás nebolí.

## Co o tom víme

Je potřeba rozlišit dvě různé otázky.

**Fyzioterapie u bolestí zad, pánve a v rehabilitaci po operacích: dobře podložené důkazy.** Tady jde o standardní zdravotní péči s roky výzkumu za sebou.

**Fyzioterapie a plodnost nebo výsledky IVF: nedostatek kvalitních důkazů.** Neexistují spolehlivé studie, které by ukazovaly, že fyzioterapie zvyšuje šanci na otěhotnění nebo na úspěch cyklu. To neznamená, že je zbytečná — znamená to, že důvod, proč k ní jít, je úleva od potíží, ne naděje na lepší výsledek.

Když vám někdo tvrdí opak, tvrdí něco, co nemá čím doložit.

## Na co si dát pozor

- **Řekněte na začátku, v jaké fázi léčby jste.** Pokud jste po stimulaci nebo krátce po odběru vajíček, můžete mít výrazně zvětšené vaječníky. Hluboká práce v podbřišku v té době není vhodná.
- **Fyzioterapie nemá bolet.** Krátkodobé nepříjemné napětí při technice ano, ostrá bolest ne.
- **Nenechte se odradit od klinické léčby.** Pokud vám terapeut naznačuje, že byste místo cyklu měla nejdřív „srovnat tělo“, jste u špatného člověka.
- **Nová bolest, otok nebo horečka** po terapii nejsou očekávaná reakce. Ozvěte se svému lékaři.

## Jak si vybrat odborníka

Fyzioterapeut je regulované zdravotnické povolání — má bakalářské nebo magisterské vzdělání v oboru. To si můžete ověřit a je to první filtr.

Co se vyplatí zjistit:

1. Má zkušenost se ženami v léčbě neplodnosti nebo aspoň s gynekologickou problematikou?
2. Dělá na začátku pořádný rozbor, nebo rovnou masíruje?
3. Dostanete cvičení domů, nebo je celý efekt závislý na tom, že budete chodit dál?
4. Je ochotný komunikovat s vaším lékařem, když bude potřeba?

> Varovné znamení je jediná věta: „Tímhle otěhotníte.“ Fyzioterapeut, který ji řekne, překračuje hranice svého oboru.`,
  },
  {
    id: 'ppc-fyzioterapie-panevniho-dna',
    kind: 'article',
    title: 'Fyzioterapie pánevního dna: kdy má smysl a jak vypadá',
    excerpt:
      'Bolest při sexu, tlak v podbřišku, úniky moči, křeče při vyšetření. O čem se nemluví a co se s tím dá dělat.',
    minutes: 8,
    phases: [],
    topics: ['pohyb', 'sebepece'],
    level: 'deep',
    hero: 'blush',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews', 'NICE — doporučené postupy'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Pánevní dno je vrstva svalů, která zdola uzavírá pánev. Nese orgány, podílí se na udržení moči a stolice, na sexuálním prožívání a na stabilitě celého trupu. Pracuje ve spojení s bránicí a s hlubokými břišními svaly — proto se s ním nedá pracovat izolovaně.

Fyzioterapie pánevního dna je specializace uvnitř fyzioterapie. Terapeut hodnotí, jestli svaly umí zapnout, uvolnit a jestli reagují v souhře s dechem. Součástí vyšetření může být, ale nemusí, vaginální palpace — vždy jen s vaším výslovným souhlasem a vždy je možné ji odmítnout.

Řada terapeutů pracuje bez ní: přes dech, přes vnější hmaty a přes zpětnou vazbu z toho, co cítíte vy.

## Jak to může pomoci

Nejčastější důvody, se kterými sem ženy v léčbě přicházejí:

- **Bolest při pohlavním styku** nebo bolest při gynekologickém vyšetření.
- **Nadměrné napětí pánevního dna.** Svaly, které jsou trvale stažené, jsou stejný problém jako svaly slabé — a je to častější, než se čeká.
- **Úniky moči**, tlak v podbřišku, pocit tíhy.
- **Potíže po předchozím porodu** nebo po břišních operacích.
- **Křeč a stažení při zavádění katétru.** Když víte, že přijde transfer nebo inseminace, a tělo se každou takovou situací brání víc.

Pro spoustu žen je hlavní přínos jinde, než čekaly: přestanou mít pocit, že se s vlastním tělem perou.

## Co o tom víme

**U úniků moči, u sestupu orgánů a u některých typů pánevní bolesti: dobře podložené důkazy.** Trénink pánevního dna vedený fyzioterapeutem patří u těchto potíží k první volbě a je opřený o kvalitní výzkum.

**U plodnosti, uhnízdění embrya a úspěšnosti IVF: nedostatek kvalitních důkazů.** Nic spolehlivého neukazuje, že by práce s pánevním dnem zvyšovala šanci na těhotenství. Argumenty typu „uvolněná pánev lépe prokrví dělohu, a proto se embryo uchytí“ znějí logicky, ale nejsou ověřené.

Takže: jděte tam kvůli bolesti, únikům nebo napětí. Ne kvůli výsledku cyklu.

## Na co si dát pozor

- **Vyšetření vaginální cestou není pro každou ženu a nikdy není povinné.** Máte právo ho odmítnout, přerušit nebo si vyžádat jiný postup. Dobrý terapeut se ptá předem a ptá se znovu v průběhu.
- **Po odběru vajíček a při zvětšených vaječnících** proberte načasování s klinikou. Některé postupy se v tomhle období odkládají.
- **Máte-li za sebou sexuální trauma**, řekněte to. Nemusíte vysvětlovat detaily — stačí věta „potřebuju pomalý postup a možnost kdykoli zastavit“.
- **Bolest při terapii není cíl.** Pokud vám někdo tvrdí, že to musí bolet, aby to fungovalo, odejděte.
- **Cvičení naslepo z internetu** může potíže zhoršit. Kdo má pánevní dno v přemíře napětí, tomu posilování uškodí.

## Jak si vybrat odborníka

Hledejte fyzioterapeuta s doloženou specializací na pánevní dno — v Česku existují uznávané kurzy a terapeuti je běžně uvádějí. Zeptejte se:

1. Jak vypadá první návštěva a co bude její součástí?
2. Pracujete i bez vaginálního vyšetření?
3. Máte zkušenost s klientkami v průběhu IVF?
4. Kolik sezení obvykle stačí, než se ukáže, jestli to zabírá?

> Pokud vám kdokoli nabízí „srovnání polohy dělohy“ nebo „otevření pánve pro početí“ jako cestu k těhotenství, jde o tvrzení bez opory. Slušný terapeut mluví o bolesti a funkci, ne o výsledku léčby.`,
  },
  {
    id: 'ppc-mojzisova-metoda',
    kind: 'article',
    title: 'Mojžíšova metoda: co to je a co o ní opravdu víme',
    excerpt:
      'Česká metoda, kterou zná skoro každá žena po pár měsících snažení. Poctivý pohled na to, kde má smysl a kde končí důkazy.',
    minutes: 7,
    phases: [],
    topics: ['pohyb', 'sebepece'],
    level: 'deep',
    hero: 'linen',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Metoda pojmenovaná po rehabilitační pracovnici Ludmile Mojžíšové, která ji rozvinula v druhé polovině 20. století. Jde o soustavu jednoduchých cviků zaměřených na páteř, pánev, břišní svaly a pánevní dno, doplněnou o mobilizační techniky, které provádí vyškolený terapeut.

Původní myšlenka byla, že u části žen souvisejí potíže s otěhotněním s funkčními poruchami páteře a pánve — s napětím, blokádami a nerovnováhou svalů v této oblasti — a že jejich úprava může stav zlepšit.

V Česku je metoda hluboce zakořeněná. Prakticky každá žena, která se roky snaží, ji od někoho slyšela doporučit.

## Jak to může pomoci

Co metoda reálně dělá, je pravidelné, jemné a dobře vedené cvičení zad, pánve a dechu. To má své vlastní, docela solidní přínosy:

- může zmírnit **bolesti zad a křížové oblasti**,
- pracuje s **napětím pánevního dna a s dechem**,
- vede k **pravidelnému návyku** — což je samo o sobě víc, než většina lidí dokáže udržet,
- dává **pocit, že něco děláte**, v období, kdy je pasivita nejtěžší.

Cviky jsou nenáročné, dělají se doma a nevyžadují vybavení. To je jejich velká praktická výhoda.

## Co o tom víme

Tady je potřeba být upřímní, protože se to říká nerado.

**Vliv Mojžíšovy metody na plodnost patří do kategorie „nedostatek kvalitních důkazů“.** Metoda nikdy neprošla kvalitními randomizovanými studiemi. To, co se o ní traduje — čísla o tom, kolika ženám pomohla — pochází z nekontrolovaných pozorování, kde chybí srovnávací skupina a kde není možné odlišit efekt metody od toho, že část žen otěhotní i bez ní.

To není odsudek. Je to popis stavu poznání. Řada věcí ve zdravotnictví je ověřená, tahle ověřená není.

**U bolestí zad a funkčních potíží pohybového aparátu** je situace lepší: cvičení tohoto typu má oporu v tom, co obecně víme o rehabilitaci. Ale to je jiné tvrzení než „pomůže vám otěhotnět“.

Pokud vám metoda dělá dobře, není důvod ji nedělat. Jen ať víte, na jakém základě se rozhodujete.

## Na co si dát pozor

- **Nenechte se kvůli ní odkládat.** Nejčastější škoda, kterou metoda může způsobit, je ztracený čas. Pokud vám někdo doporučuje odsunout vyšetření nebo cyklus na „půl roku cvičení“, poraďte se se svým lékařem. U ženy s nízkou ovariální rezervou nebo ve vyšším věku je čas veličina, se kterou se nehazarduje.
- **Mobilizace v podbřišku a v oblasti kostrče** proberte s klinikou, pokud jste po stimulaci nebo po odběru vajíček.
- **Cvičte podle instruktáže, ne podle videa z internetu.** Cviky vypadají jednoduše, ale jejich provedení rozhoduje.
- **Bolest při cvičení je signál skončit,** ne pokračovat.

## Jak si vybrat odborníka

Metodu učí fyzioterapeuti, kteří prošli konkrétním školením. Ptejte se:

1. Jaké máte vzdělání a kde jste metodu studoval?
2. Naučíte mě cviky tak, abych je mohla dělat sama doma?
3. Jak poznáme, že to nefunguje, a kdy toho necháme?

> Formulace, po které zpozorněte: „Mojžíšovka funguje, IVF nepotřebujete.“ Metoda není alternativa k léčbě a nikdo, kdo ji dělá poctivě, to tak nepodává.`,
  },
  {
    id: 'ppc-cinska-medicina',
    kind: 'article',
    title: 'Tradiční čínská medicína: co nabízí a kde jsou rizika',
    excerpt:
      'Bylinné směsi, diagnostika z jazyka a pulzu, dietetika. Co z toho stojí za pozornost a proč o bylinkách musí vědět vaše klinika.',
    minutes: 8,
    phases: [],
    topics: ['sebepece', 'strava'],
    level: 'deep',
    hero: 'taupe',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews', 'ESHRE — doporučené postupy'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Tradiční čínská medicína (TČM) je ucelený systém s vlastní teorií, diagnostikou a terapií. Vychází z jiného pojetí těla než medicína, na které stojí vaše klinika — pracuje s pojmy jako energie, chlad a horko, plnost a prázdnota.

V praxi zahrnuje:

- **diagnostiku** z pulzu, jazyka a podrobného rozhovoru,
- **bylinné směsi** namíchané individuálně,
- **akupunkturu** (má vlastní článek),
- **moxování**, baňkování, masáž,
- **dietetiku** — doporučení, co jíst a čemu se vyhnout.

Samostatný článek o akupunktuře najdete v této sekci. Tenhle text je hlavně o bylinách a o systému jako celku.

## Jak to může pomoci

Co ženy popisují nejčastěji: dostanou čas. Vstupní konzultace v TČM trvá běžně hodinu a je v ní prostor na spaní, trávení, náladu, cyklus a na to, jak se skutečně cítí. Na klinice takový prostor obvykle není a chybí.

Dále:

- **rituál a struktura** v období, které je jinak chaotické,
- **pozornost k základům** — teplé jídlo, pravidelnost, spánek, méně chladu a syrového; tahle doporučení jsou většinou neškodná a někdy prospěšná,
- **pocit, že jste vnímaná jako celek**, ne jako sada laboratorních hodnot.

To je reálná hodnota. Jen je dobré vědět, že jde o hodnotu v péči a v prožívání, ne o doložený vliv na výsledek léčby.

## Co o tom víme

**Vliv TČM a čínských bylinných směsí na plodnost a na výsledky IVF: nedostatek kvalitních důkazů.** Přehledy, které se o to pokusily, narážejí na stejný problém — studie jsou malé, metodicky slabé, směsi nejsou standardizované a výsledky se neopakují. Z takového podkladu nelze tvrdit, že bylinná léčba zvyšuje šanci na těhotenství.

**U bezpečnosti je situace jiná a je potřeba ji brát vážně.** Tady důkazy máme, a jsou nepříjemné: u bylinných přípravků byly opakovaně popsány případy poškození jater, kontaminace těžkými kovy nebo příměsi léčivých látek, které v deklarovaném složení nebyly. Riziko není u všech přípravků stejné, ale není nulové.

## Na co si dát pozor

- **Bylinné směsi vždy oznamte své klinice, dřív než je začnete brát.** Nejde o formalitu. Byliny mohou ovlivňovat srážlivost krve, hladiny hormonů, funkci jater a účinek léků, které v cyklu dostáváte.
- **Během stimulace, kolem odběru vajíček a po transferu** je riziko interakcí nejvyšší. V tomhle období nezačínejte s ničím novým bez souhlasu lékaře.
- **Kupujte jen z prověřených zdrojů.** Přípravky neznámého původu z internetu jsou hazard s vlastními játry.
- **Nikdy nevysazujte léky předepsané klinikou** kvůli doporučení z jiného oboru. Pokud to po vás někdo chce, je to důvod k okamžitému konci spolupráce.
- **Vyhledejte lékařskou pomoc**, pokud se objeví žloutnutí kůže nebo očního bělma, tmavá moč, výrazná únava, vyrážka nebo bolest v pravém podžebří.

## Jak si vybrat odborníka

TČM není v Česku regulované zdravotnické povolání, takže titul na dveřích nezaručuje nic. Ptejte se:

1. Jaké máte vzdělání a kolik let praxe?
2. Odkud pocházejí byliny, které předepisujete, a máte doklad o jejich kontrole?
3. Jste ochoten napsat mi přesné složení směsi, abych ho mohla ukázat na klinice?
4. Co uděláte, když mi klinika řekne, že směs v tomhle období není vhodná?

> Odpověď na poslední otázku vám řekne skoro všechno. Kdo není ochotný ustoupit vaší klinice v období stimulace a transferu, nepatří do vašeho týmu.`,
  },
  {
    id: 'ppc-akupunktura',
    kind: 'article',
    title: 'Akupunktura při IVF: co ukazují studie',
    excerpt:
      'Nejzkoumanější z doplňkových metod — a přesto odpověď na otázku „zvýší mi to šanci?“ zní jinak, než by leták na klinice chtěl.',
    minutes: 7,
    phases: [],
    topics: ['sebepece', 'psychika'],
    level: 'deep',
    hero: 'sky',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews', 'ESHRE — doporučené postupy'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Zavádění velmi tenkých jehel do definovaných bodů na těle. Jehly zůstávají zavedené obvykle dvacet až třicet minut, občas se doplňuje mírná elektrická stimulace nebo nahřívání. Sezení je nebolestivé pro většinu lidí — cítíte tupý tlak nebo teplo, ne píchnutí jako při odběru krve.

V souvislosti s IVF se akupunktura nabízí nejčastěji v průběhu stimulace a v den transferu, těsně před ním nebo po něm.

## Jak to může pomoci

Co ženy uvádějí nejčastěji: dvacet minut, kdy nikdo nic nechce, tělo se uvolní a hlava na chvíli přestane počítat folikuly. Někdo popisuje lepší spánek nebo menší napětí v období, kdy je ho nejvíc.

Tohle je legitimní důvod, proč tam jít. Odpočinek a péče o sebe nepotřebují ospravedlnění výsledkem cyklu.

## Co o tom víme

Akupunktura je z metod v této sekci nejlépe prozkoumaná, takže o ní můžeme mluvit konkrétněji.

**Vliv na šanci na těhotenství a na porod živého dítěte při IVF: omezené a nekonzistentní důkazy.** Studií je hodně, ale výsledky si odporují. Přehledové práce, které je shrnují, opakovaně docházejí k závěru, že akupunktura kolem embryotransferu prokazatelně nezvyšuje pravděpodobnost těhotenství ani porodu.

Zajímavý detail, který se v těch studiích ukazuje: ženy, které dostaly „naoko“ akupunkturu — jehly mimo body nebo jen dotyk — často popisovaly podobnou úlevu jako ty, které dostaly skutečné ošetření. To hodně napovídá o tom, kde efekt vzniká.

**Vliv na napětí a subjektivní pohodu: omezené důkazy s mírně příznivým signálem.** Slabší než u psychoterapie nebo u nácviku relaxace, ale nikoli nulový.

Shrnuto: jděte tam, pokud vám to dělá dobře. Nekupujte si tím naději na lepší výsledek — ta se nedodá.

## Na co si dát pozor

- **Jednorázové sterilní jehly, vždy.** Rozbalené před vámi. Bez výjimky.
- **Řekněte, v jaké fázi cyklu jste** a jaké léky berete. Zvlášť pokud užíváte léky ovlivňující srážlivost krve — pak jsou pravděpodobnější modřiny a krvácení z vpichu.
- **Zvětšené vaječníky po stimulaci** jsou důvod vynechat práci v podbřišku. Řekněte to, i když se na to nikdo nezeptá.
- **Mdloba na lehátku** se stává, zvlášť nalačno a ve stresu. Najezte se předem.
- **Kontaktujte kliniku**, pokud se po sezení objeví horečka, výrazná bolest nebo zarudnutí v místě vpichu.
- **Cena.** Balíčky „celý cyklus za výhodnou cenu“ prodávané s příslibem lepších výsledků prodávají něco, co doložit nelze.

## Jak si vybrat odborníka

- Preferujte **lékaře nebo zdravotnického pracovníka s akupunkturním vzděláním**. V Česku existují lékařské akupunkturní společnosti a jejich členství je vodítko.
- Ptejte se na **zkušenost s ženami v cyklu IVF** a na to, jestli je terapeut ochotný přizpůsobit postup pokynům vaší kliniky.
- Ptejte se, **kolik sezení navrhuje a podle čeho pozná, že už není důvod pokračovat**.

> Věta „bez akupunktury máte podstatně nižší šanci“ není odborný názor. Je to prodejní argument.`,
  },
  {
    id: 'ppc-psychoterapie',
    kind: 'article',
    title: 'Psychoterapie a psychologická podpora: péče o vás, ne nástroj na výsledek',
    excerpt:
      'Nejde tam kvůli tomu, abyste „byla v klidu a ono to vyšlo“. Jde se tam proto, že tohle je těžké a vy si zasloužíte podporu.',
    minutes: 8,
    phases: [],
    topics: ['psychika', 'sebepece'],
    level: 'essential',
    hero: 'dawn',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE — doporučené postupy', 'Cochrane Database of Systematic Reviews'],
    publishedOn: PUBLISHED,
    boost: 0.8,
    body: `## Co to je

Psychoterapie je odborně vedená práce s prožíváním, myšlením a chováním. Není to „povídání si“ ani rada od chytřejšího člověka. Má strukturu, cíl a metody, které se dají popsat.

V kontextu léčby neplodnosti se nejčastěji setkáte s několika formami:

- **Individuální terapie** — nejčastěji kognitivně behaviorální přístup, který pracuje konkrétně s úzkostí, spánkem a s tím, jak se v hlavě odvíjejí katastrofické scénáře.
- **Párová terapie**, pokud se komunikace doma zadrhla nebo pokud každý z vás zvládá zátěž jinak a přestáváte si rozumět.
- **Krizová intervence** — jednorázová nebo krátkodobá pomoc po špatné zprávě.
- **Podpůrné skupiny** vedené odborníkem.
- **Psychiatrická péče**, když se přidá deprese nebo úzkostná porucha, které už samotná terapie nestačí.

## Jak to může pomoci

Konkrétně, ne obecně:

- Když se nedokážete rozhodnout, jestli jít do dalšího cyklu, terapie pomáhá to rozhodnutí rozebrat a udělat ho vaše, ne z vyčerpání.
- Když nezvládáte oznámení o cizím těhotenství, dá se s tím pracovat.
- Když jste po ztrátě a nikdo kolem to nebere jako ztrátu, potřebujete místo, kde se to tak bere.
- Když se doma přestáváte bavit o čemkoli jiném než o léčbě.
- Když nemůžete spát, nemůžete pracovat nebo se přistihnete, že brečíte v autě před každou návštěvou kliniky.

## Co o tom víme

Tohle je nejdůležitější odstavec celého článku a je potřeba ho číst pomalu.

**Psychoterapie u úzkosti a deprese: dobře podložené důkazy.** Účinnost je opakovaně doložená, u části potíží srovnatelná s léčbou léky. Že vám může být líp, není otázka víry.

**Psychická podpora jako nástroj ke zlepšení výsledku IVF: takhle to nefunguje a nemá to tak být prezentováno.** Přehledy studií neukazují, že by psychologická intervence zvyšovala šanci na těhotenství. A z druhé strany: **neexistuje doklad o tom, že by běžný životní stres způsoboval neplodnost nebo neúspěch cyklu.**

To znamená jednu velmi konkrétní věc: **za to, že cyklus nevyšel, nemůže to, že jste se nedokázala uklidnit.** Neselhala jste tím, že jste byla nervózní na transferu. Věta „musíš se hlavně uvolnit, pak to přijde“ není medicína, je to zbytečná vina navíc.

Do terapie se chodí proto, že vám je zle a máte právo na to, aby vám bylo líp. To je celý důvod a je dostatečný.

## Na co si dát pozor

- **Terapie potřebuje čas.** Po jednom sezení se obvykle nic nezlomí. Domluvte si dopředu, po kolika sezeních spolu vyhodnotíte, jestli to má směr.
- **Nesednete-li si, není to selhání.** Vztah s terapeutem je pracovní nástroj. Když nefunguje, hledá se jiný člověk, ne jiná vy.
- **Terapeut nemá radit, jestli do dalšího cyklu jít.** Má vám pomoci se rozhodnout.
- **Kdykoli myslíte na to, že už nechcete žít, nebo máte pocit, že si ublížíte — vyhledejte akutní lékařskou pomoc.** Zavolejte na linku první psychické pomoci, jeďte na psychiatrickou pohotovost nebo volejte 155. Nečekejte na volný termín u terapeuta.

## Jak si vybrat odborníka

- **Vzdělání:** psycholog s magisterským studiem psychologie, ideálně s dokončeným nebo probíhajícím akreditovaným psychoterapeutickým výcvikem a supervizí. Klinický psycholog má atestaci ve zdravotnictví.
- **Zkušenost:** ptejte se přímo, jestli pracuje s tématem neplodnosti, opakovaných neúspěchů a perinatální ztráty. Není to samozřejmost.
- **Peníze:** část péče je hrazená ze zdravotního pojištění u klinických psychologů ve smluvních zařízeních, na to bývají čekací doby. Některé kliniky mají psychologa přímo u sebe — zeptejte se, mnoho žen o tom neví.
- **Nastavení:** krátkodobá cílená práce nebo dlouhodobější proces? Obojí je legitimní, jen ať víte, do čeho jdete.

> Rovnou odejděte od kohokoli, kdo naznačí, že za neúspěch může vaše psychika nebo že „to nechcete dost“. To není odbornost, to je ubližování.`,
  },
  {
    id: 'ppc-mindfulness',
    kind: 'article',
    title: 'Mindfulness a relaxace: nástroj na dnešní odpoledne',
    excerpt:
      'Nejde o to dosáhnout klidu. Jde o to mít po ruce něco, co funguje, když je hlava jako splašená.',
    minutes: 6,
    phases: [],
    topics: ['psychika', 'sebepece'],
    level: 'comfort',
    hero: 'pearl',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Mindfulness znamená záměrné, nehodnotící všímání toho, co se děje právě teď — v těle, v dechu, v myšlenkách. Není to vyprázdněná hlava ani stav blaženosti. Je to trénink pozornosti.

Pod hlavičkou relaxačních technik se dále běžně učí:

- **progresivní svalová relaxace** — postupné napínání a povolování svalových skupin,
- **řízená imaginace** — vedený obraz, do kterého se pozornost přesune,
- **body scan** — pomalé procházení pozornosti tělem,
- **autogenní trénink** — nácvik pocitu tíhy a tepla v končetinách.

Existují i strukturované osmitýdenní programy, u nás dostupné jako kurzy i online.

## Jak to může pomoci

Realisticky: **nezmenší to, co se děje. Změní to, jak dlouho v tom uvíznete.**

Typický přínos, který ženy popisují:

- kratší doba, po kterou se točí dokola jedna myšlenka,
- snazší usínání, protože hlava má kam jít místo scénářů,
- menší tělesné napětí v čekárně,
- schopnost všimnout si dřív, že už zase hodinu čtete cizí příběhy na fóru.

## Co o tom víme

**U snížení stresu, úzkosti a depresivních příznaků obecně: dobře podložené důkazy.** Mindfulness programy mají za sebou slušný výzkum a jsou v řadě zemí součástí běžné péče.

**Konkrétně u žen v léčbě neplodnosti: omezené důkazy.** Studie jsou menší, různě kvalitní a často bez pořádné kontrolní skupiny. Signál směrem k lepšímu psychickému stavu tam je, ale je slabší, než by prodejci kurzů rádi tvrdili.

**Vliv na šanci otěhotnět: neprokázaný.** Meditace není terapeutická intervence na plodnost a nikdo by ji tak neměl nabízet. Praktikujte ji proto, že vám dnes odpoledne bude líp — to je smysl.

## Na co si dát pozor

- **Meditace není pro každou ženu a nemusí sedět všem.** Ticho a soustředění na tělo může u někoho zesílit úzkost nebo vyvolat nepříjemné vzpomínky. Pokud se to děje, není to vaše chyba a je v pořádku toho nechat nebo zvolit techniku s pohybem.
- **Máte-li za sebou trauma nebo prožíváte-li stavy odpojení od těla**, začněte pod vedením člověka, který o tom ví, ne s aplikací.
- **Nedělejte z toho další úkol, ve kterém můžete selhat.** Pět minut denně je dost. Zmeškaný den nic nekazí.
- **Aplikace nejsou zdravotní péče.** Jsou to nástroje. Když je psychický stav horší, patří to k odborníkovi.
- **Pozor na kurzy**, které slibují „odblokování“ plodnosti prací s myslí. To je prodej naděje.

## Jak si vybrat odborníka

Pokud chcete víc než aplikaci:

1. Hledejte lektora s doloženým výcvikem v konkrétním programu, ne s víkendovým certifikátem.
2. Zeptejte se, jestli má zkušenost s lidmi v náročné zdravotní situaci.
3. U skupinových kurzů se ptejte na velikost skupiny a na to, jestli se sdílí nahlas — ne každá to chce.

> Dobrý lektor vám neslíbí klid. Slíbí vám nácvik dovednosti, kterou si můžete vzít domů.`,
  },
  {
    id: 'ppc-dechova-cviceni',
    kind: 'article',
    title: 'Dechová cvičení: nejrychlejší dostupná pomoc',
    excerpt:
      'Nic si nemusíte kupovat, nikam nemusíte jezdit a účinek přijde do dvou minut. I když ani dech není bez rizik.',
    minutes: 5,
    phases: [],
    topics: ['psychika', 'sebepece'],
    level: 'comfort',
    hero: 'sky',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    publishedOn: PUBLISHED,
    body: `## Co to je

Vědomá práce s tempem, hloubkou a poměrem nádechu a výdechu. Základní princip je jednoduchý: **prodloužený výdech tlumí, zrychlený nádech budí.** Tělo na to reaguje bez ohledu na to, jestli tomu věříte.

Nejpoužívanější varianty:

- **Prodloužený výdech** — nádech na čtyři doby, výdech na šest až osm. Nejjednodušší a nejspolehlivější.
- **Pomalé rytmické dýchání** — zhruba šest dechů za minutu.
- **Boxový dech** — nádech, zádrž, výdech, zádrž, každé na stejný počet.
- **Dech do břicha** — ruka na břiše, která se má zvedat víc než ruka na hrudníku.

## Jak to může pomoci

Praktické situace, kde to funguje nejlíp:

- **V čekárně před odběrem nebo ultrazvukem.** Nikdo nepozná, že něco děláte.
- **Před aplikací injekce**, když se ruka klepe.
- **V posteli, když nemůžete usnout,** protože hlava jede.
- **Po telefonátu z kliniky**, ať přinesl cokoli.
- **Při návalu paniky** v obchodě, kde je zrovna oddělení s dupačkami.

Výhoda je v dostupnosti: máte to u sebe pořád, zdarma a funguje to během pár minut.

## Co o tom víme

**Krátkodobý efekt pomalého dýchání na napětí, tep a subjektivní klid: omezené, ale konzistentní důkazy.** Studie jsou většinou malé, měří krátký horizont a bývají metodicky slabší. Ale směr je opakovaně stejný a mechanismus dává fyziologicky smysl.

**Dlouhodobý vliv na úzkostné poruchy: omezené důkazy** — samotný dech obvykle nestačí a bývá součástí širší terapie.

**Vliv na plodnost nebo na výsledek cyklu: žádný doložený.** Dechové cvičení je nástroj na to, aby vám bylo v příští půlhodině snesitelněji. Nic víc a nic míň.

## Na co si dát pozor

- **Intenzivní dechové techniky s hyperventilací** — rychlé hluboké dýchání po delší dobu, holotropní dýchání, metody se silnými zádržemi — mohou vyvolat závrať, brnění, křeče v rukou nebo mdlobu. Tohle nejsou relaxační techniky.
- **Nikdy nedělejte zádrže dechu ve vodě ani za volantem.** Zádrž ve vodě může skončit ztrátou vědomí pod hladinou.
- **Máte-li astma, chronické plicní nebo srdeční onemocnění, epilepsii nebo panickou poruchu**, proberte intenzivnější techniky s lékařem. U paniky může soustředění na dech příznaky nejdřív zesílit.
- **Když se objeví závrať nebo brnění, přestaňte** a dýchejte normálně. Za chvíli to odezní.
- **Nesnažte se dýchat „správně“.** Křeč z výkonu je opak toho, o co jde.

## Jak začít bez odborníka

Tohle je jedna z mála metod, kde odborníka nepotřebujete. Zkuste dnes večer:

1. Sedněte si nebo si lehněte, ruce volně.
2. Nadechněte se nosem na čtyři doby.
3. Vydechněte pomalu ústy na šest.
4. Opakujte pět minut. Když se pozornost ztratí, vraťte ji. To ztrácení k tomu patří.

> Pokud vás napětí přemáhá i přes tohle, nebo pokud panika přichází často, patří to k odborníkovi. Dech je první pomoc, ne léčba.`,
  },
  {
    id: 'ppc-joga',
    kind: 'article',
    title: 'Jóga a jemný pohyb: co se hodí a co v tomhle období vynechat',
    excerpt:
      'Pohyb, který nemá vyhrát ani spálit kalorie. A několik poloh, které se během stimulace nehodí.',
    minutes: 7,
    phases: [],
    topics: ['pohyb', 'sebepece'],
    level: 'deep',
    hero: 'sage',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    publishedOn: PUBLISHED,
    body: `## Co to je

Jóga spojuje pohyb, dech a pozornost. Stylů jsou desítky a liší se zásadně — od dynamických a fyzicky náročných po zcela klidové.

Pro období léčby jsou nejvhodnější jemné formy:

- **hatha jóga v pomalém tempu**,
- **jin jóga** — dlouhé výdrže v pasivních polohách,
- **restorativní jóga** — polohy podepřené polštáři a dekami, kde se nic nedělá,
- **jóga nidra** — vedená relaxace vleže,
- a mimo jógu: **chůze, plavání, protahování, tanec doma**.

## Jak to může pomoci

- **Rozhýbe tělo, které bolí ze sezení a napětí.**
- **Vrátí kontakt s tělem**, které v léčbě začne připadat jako nespolupracující nástroj.
- **Dá strukturu dni**, ve kterém se jinak jen čeká.
- **Je to pohyb, ve kterém se nedá prohrát.** Nikdo neměří výkon, nikdo nesrovnává.

Pro spoustu žen je hlavní hodnota v tom, že hodinu nemusí být ženou v léčbě.

## Co o tom víme

**Pravidelný přiměřený pohyb a celkové zdraví: dobře podložené důkazy.** O tom se nediskutuje.

**Jóga a psychická pohoda: omezené důkazy** — studie ukazují mírné zlepšení nálady a snížení napětí, ale jsou menší a hůř kontrolované než u mindfulness.

**Jóga a výsledky léčby neplodnosti: nedostatek kvalitních důkazů.** Kurzy nabízené pod hlavičkou „fertility jóga“ nemají čím doložit, že zvyšují šanci na otěhotnění. Konkrétní polohy „na podporu plodnosti“ jsou marketing, ne medicína.

Jděte tam kvůli tělu a hlavě. Ne kvůli číslu na výsledkovém listu.

## Na co si dát pozor

Tohle je část, kterou stojí za to nepřeskočit.

- **Během stimulace a v prvních dnech po odběru vajíček** máte vaječníky zvětšené. Prudké otáčení trupu, skoky, hluboké zákruty, výrazné stlačení břicha a intenzivní posilování břišního svalstva v té době nejsou vhodné — mimo jiné kvůli riziku torze, tedy otočení vaječníku kolem vlastní stopky. Podrobnosti najdete v samostatném článku o pohybu během stimulace.
- **Horká jóga a cvičení v přetopených sálech** se v tomto období obvykle nedoporučují kvůli přehřátí a dehydrataci.
- **Inverze — stoj na hlavě, na ramenou, svíčka** — vynechte při zvětšených vaječnících a po zákrocích. Také nemají žádný doložený vliv na uhnízdění embrya, ať se kdekoli píše cokoli.
- **Řekněte lektorovi předem, v jaké jste situaci.** Nemusíte mluvit o neplodnosti, stačí: „Jsem po zákroku v podbřišku, potřebuju vynechat tlak na břicho a zákruty.“
- **Vyhledejte akutní lékařskou pomoc** při náhlé prudké jednostranné bolesti v podbřišku, zvlášť s nevolností nebo zvracením.
- **Vždy platí pokyn vaší kliniky.** Když vám lékař řekl, ať tento týden necvičíte, neplatí tento článek, ale on.

## Jak si vybrat odborníka

1. Ptejte se na vzdělání lektora a hlavně na ochotu upravovat polohy pro jednotlivce.
2. Menší skupina je lepší než velká — v patnácti lidech vás nikdo neopraví.
3. Individuální lekce na začátku dává smysl, pokud si nejste jistá, co smíte.
4. U kurzů označených jako „pro plodnost“ se ptejte, co konkrétně slibují. Pokud těhotenství, hledejte jinde.

> Cíl je odejít z lekce s pocitem, že vám je líp. Ne s pocitem, že jste splnila další povinnost.`,
  },
  {
    id: 'ppc-masaze',
    kind: 'article',
    title: 'Masáže: kdy ano, kdy počkat a čeho se vyvarovat',
    excerpt:
      'Hodina, kdy se o vás někdo stará. Jen s jednou důležitou výjimkou — a ta se týká břicha.',
    minutes: 6,
    phases: [],
    topics: ['sebepece', 'pohyb'],
    level: 'comfort',
    hero: 'taupe',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    publishedOn: PUBLISHED,
    body: `## Co to je

Cílená práce s měkkými tkáněmi — svaly, vazivem, kůží. Od klasické relaxační masáže přes sportovní a hlubší techniky až po lymfatickou masáž a manuální práci s jizvami.

Zvlášť se v souvislosti s plodností nabízejí **břišní masáže** pod různými názvy a s příslibem „uvolnění“ dělohy nebo lepšího prokrvení pánve. Ty si zaslouží samostatnou pozornost níž.

## Jak to může pomoci

- **Uvolní napětí v zádech, šíji a ramenou**, které se v období léčby hromadí.
- **Zlepší kvalitu spánku v tu noc.** Nic převratného, ale znatelné.
- **Je to jedna z mála hodin, kdy se něco děje pro vás** a vy nemusíte nic organizovat.
- **Vrací příjemný tělesný kontakt** v období, kdy je většina doteků na těle zdravotnický úkon.

Ten poslední bod ženy zmiňují často. Když vás několik týdnů někdo píchá, vyšetřuje a odebírá, jemný dotek bez účelu má svou hodnotu.

## Co o tom víme

**Masáž a krátkodobé snížení svalového napětí a stresu: omezené důkazy s příznivým signálem.** Studie jsou menší a obtížně zaslepitelné, ale efekt na subjektivní pohodu je opakovaně popisovaný.

**Masáž a plodnost, prokrvení dělohy nebo uhnízdění embrya: nedostatek kvalitních důkazů.** Techniky prodávané jako podpora plodnosti nemají spolehlivá data, která by ukazovala vliv na těhotenství. Tvrzení o „narovnání polohy dělohy“ nebo „uvolnění srůstů“ rukama nejsou ověřená.

## Na co si dát pozor

- **Hluboká práce v podbřišku během stimulace a po odběru vajíček není vhodná.** Vaječníky mohou být výrazně zvětšené a křehké. Tlak na tuto oblast v takové chvíli je zbytečné riziko.
- **Po embryotransferu** se hluboké břišní techniky obvykle vynechávají. Když si nejste jistá, zeptejte se na klinice — je to rychlá otázka.
- **Sauna, vířivka a horké zábaly** se v tomto období často nedoporučují. Proberte to s klinikou.
- **Užíváte-li léky ovlivňující srážlivost krve**, řekněte to. Hlubší techniky mohou zanechat výrazné modřiny.
- **Aromaterapeutické oleje** nejsou neutrální — některé silice se v těhotenství a při snaze o něj nedoporučují. Chcete-li mít klid, požádejte o neutrální olej bez silic.
- **Kontaktujte svou kliniku**, pokud se po masáži objeví výrazná bolest břicha, nevolnost nebo horečka.

## Jak si vybrat odborníka

1. **Řekněte hned na začátku**, že jste v léčbě neplodnosti a v jaké fázi. Nemusíte nic rozvádět.
2. **Vyžádejte si vynechání břicha**, pokud si nejste jistá — dobrý masér to bez řečí respektuje.
3. **Práce s jizvami** patří spíš fyzioterapeutovi než maséru.
4. **Ptejte se na vzdělání.** Masér není zdravotnické povolání a úroveň se liší dramaticky.

> Kdo vám nabízí masáž s příslibem, že po ní otěhotníte, prodává něco, co nemá. Masáž si zaslouží být tím, čím je — hodinou úlevy.`,
  },
  {
    id: 'ppc-nutricni-poradenstvi',
    kind: 'article',
    title: 'Nutriční poradenství: co má smysl řešit a co je jen strach z jídla',
    excerpt:
      'Žádná IVF dieta neexistuje. Existuje ale spousta drahých nesmyslů, které se pod tím jménem prodávají.',
    minutes: 8,
    phases: [],
    topics: ['strava', 'sebepece'],
    level: 'deep',
    hero: 'champagne',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE — doporučené postupy', 'Cochrane Database of Systematic Reviews'],
    publishedOn: PUBLISHED,
    body: `## Co to je

Odborně vedená úprava stravy podle vaší situace, zdravotního stavu a výsledků. Dobrý nutriční terapeut nezačíná seznamem zakázaných potravin — začíná tím, co skutečně jíte, jak vypadá váš den a co je vůbec reálné změnit.

Pozor na názvosloví: **nutriční terapeut** je regulované zdravotnické povolání s odborným vzděláním. **Výživový poradce** je v Česku neregulované označení, které si může dát prakticky kdokoli po víkendovém kurzu. To je zásadní rozdíl.

## Jak to může pomoci

Situace, kde má odborné vedení skutečný smysl:

- **Metabolické potíže**, například inzulinová rezistence nebo porucha zpracování cukrů, kde má úprava stravy doložený vliv na zdraví.
- **Onemocnění štítné žlázy, celiakie, potravinové alergie**, kde je strava součástí léčby.
- **Výrazná změna hmotnosti kterýmkoli směrem**, řešená bezpečně a bez hladovění.
- **Chaos v jídle ze stresu** — přeskočené obědy, večerní přejídání, kafe místo snídaně.
- **Vegetariánská nebo veganská strava**, kde stojí za to ohlídat, aby nic nechybělo.
- **Strach z jídla.** Když už se bojíte skoro všeho, protože jste to někde četla, je odborník cesta ven.

## Co o tom víme

Rozdělme to poctivě.

**Vyvážená strava a celkové zdraví: dobře podložené důkazy.** O prospěšnosti pestré stravy se zeleninou, luštěninami, celozrnnými potravinami, rybami a kvalitními tuky se nediskutuje.

**Strava a plodnost nebo výsledky IVF: omezené důkazy.** Většina dat pochází z pozorovacích studií, které umí najít souvislost, ale ne příčinu. Ženy, které jedí lépe, se zpravidla liší i v dalších věcech. Signály ve prospěch středomořského typu stravování existují, ale nejsou tak silné, aby se z nich dalo tvrdit: „tohle jezte a otěhotníte.“

**Zázračné diety, detoxy a protizánětlivé programy na plodnost: nedostatek kvalitních důkazů.** Žádná IVF dieta neexistuje. Kdyby existovala, byla by na klinice na nástěnce a nemusela by se prodávat v balíčku za deset tisíc.

**Testy potravinových intolerancí z krve (typu IgG): nedoporučují se.** Odborné společnosti je opakovaně označují za nepřínosné pro diagnostiku potravinové nesnášenlivosti. Výsledek často vede k vyřazení velké části jídelníčku bez důvodu.

## Na co si dát pozor

- **Eliminační diety bez lékařské indikace** vás mohou připravit o živiny a přidat stres, který nepotřebujete.
- **Hubnutí v průběhu stimulace** není vhodné bez souhlasu lékaře. Prudké kalorické omezení v této fázi není neutrální zásah.
- **Máte-li nebo jste měla poruchu příjmu potravy**, řekněte to. Detailní počítání a zakázané potraviny mohou situaci zhoršit — patří to do rukou odborníka, který o tom ví.
- **Doplňky stravy jsou samostatná kapitola** a mají svůj článek. Nutriční poradce vám je nesmí doporučovat bez ohledu na to, co užíváte od kliniky.
- **Rozpočet.** Poradenství, které stojí jako celý cyklus, není lepší.

## Jak si vybrat odborníka

1. **Ověřte vzdělání.** Nutriční terapeut se studiem v oboru, ideálně se zkušeností s gynekologickou a reprodukční problematikou.
2. **Ptejte se, jestli spolupracuje s vaším lékařem** a jestli je ochotný respektovat pokyny kliniky.
3. **Chtějte konkrétní plán na váš skutečný den**, ne obecný jídelníček ze šablony.
4. **Zjistěte, kolik konzultací navrhuje** a co je v ceně.

> Zpozorněte pokaždé, když poradce začne prodejem vlastních doplňků. Konflikt zájmů je tam okamžitě a je vidět.`,
  },
  {
    id: 'ppc-spanek',
    kind: 'article',
    title: 'Spánek a odpočinek: co dělat, když hlava nechce vypnout',
    excerpt:
      'Nespavost v léčbě není slabost ani vaše chyba. A existují postupy, které fungují líp než rada „snažte se nemyslet“.',
    minutes: 7,
    phases: [],
    topics: ['spanek', 'psychika', 'sebepece'],
    level: 'essential',
    hero: 'dusk',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['Cochrane Database of Systematic Reviews', 'NICE — doporučené postupy'],
    publishedOn: PUBLISHED,
    boost: 0.5,
    body: `## Co to je

Odpočinek není jen spánek a spánek není jen počet hodin. Rozhoduje pravidelnost, kvalita a to, jestli se během dne někdy skutečně zastavíte.

V období léčby se spánek rozbíjí typicky ze tří důvodů:

- **hlava jede** — scénáře, počítání dní, procházení výsledků,
- **režim narušují sama léčba a její organizace** — ranní odběry, přesné časy aplikace léků, cesty na kliniku,
- **tělo se mění** vlivem hormonů — návaly, plnost břicha, nepohodlí vleže.

## Jak to může pomoci

Dobrý spánek nezmění výsledek cyklu. Změní ale to, jak ho zvládnete:

- **snesitelnější emoce.** Po nevyspané noci je všechno o třídu horší a není to slabost, je to fyziologie,
- **lepší soustředění** v práci a při rozhovorech s lékařem,
- **stabilnější chuť k jídlu** a méně večerního zajídání,
- **menší tělesná bolestivost.**

## Co o tom víme

**Dopad nedostatku spánku na náladu, výkonnost, pozornost a zpracování cukrů: dobře podložené důkazy.** Tady je věda jednoznačná.

**Kognitivně behaviorální terapie nespavosti (KBT-I): dobře podložené důkazy** a u chronické nespavosti bývá doporučovaná jako první volba — před léky. Existuje v podobě sezení i strukturovaných online programů.

**Spánek a výsledky IVF: omezené důkazy.** Pozorovací studie našly souvislosti mezi spánkovými návyky a některými parametry léčby, ale je to slabý a nespolehlivý podklad. Nedá se z toho vyvozovat, že lepším spánkem zvýšíte šanci na těhotenství — a rozhodně z toho neplyne, že za neúspěch může vaše nevyspání.

## Na co si dát pozor

- **Léky na spaní jen po domluvě s lékařem**, který ví, že jste v cyklu. Ani volně prodejné přípravky nejsou v tomto období automaticky bez rizika.
- **Melatonin je doplněk stravy a není vhodný pro každou ženu.** Během léčby ho vždy proberte s klinikou — patří to do článku o doplňcích a platí to i tady.
- **Alkohol na usnutí je past.** Usnete rychleji a druhá půlka noci se rozpadne.
- **Nespavost trvající déle než měsíc** patří k lékaři. Není to něco, co se má vydržet.
- **Kontaktujte svou kliniku**, pokud vás v noci budí dušnost, výrazně roste obvod břicha nebo se objeví bolest a napětí v břiše — může jít o příznaky, které je potřeba posoudit.

## Co zkusit dnes večer

1. **Stejný čas vstávání**, i po špatné noci. Vstávání drží rytmus víc než uléhání.
2. **Poslední hodina bez telefonu** — a hlavně bez čtení diskusí o výsledcích jiných žen. Tohle je konkrétně ten obsah, který spánek rozbíjí.
3. **Když neusnete do zhruba dvaceti minut, vstaňte.** Jděte do jiné místnosti, dělejte něco nudného při tlumeném světle a vraťte se, až přijde únava. Ležení a snažení se posiluje spojení postele s bezmocí.
4. **Zapište si, co vám leží v hlavě**, ještě před ulehnutím. Vyndat to z hlavy na papír funguje lépe, než to tam držet.
5. **Chladná, tmavá ložnice.** Banální, ale účinné.
6. **Krátké zdřímnutí přes den** je v pořádku, když je krátké a ne pozdě odpoledne.

## Jak si vybrat odborníka

- **Praktický lékař nebo lékař na klinice** je první zastávka, hlavně kvůli lékům a kvůli tomu, aby se vyloučily jiné příčiny.
- **Psycholog s výcvikem v KBT-I** je nejvhodnější volba u dlouhodobé nespavosti.
- **Spánkové laboratoře** existují a mají smysl při podezření na poruchu dýchání ve spánku.

> Jeden cyklus může trvat déle, než čekáte — může zahrnovat čerstvý transfer i další kryotransfery ze stejné zásoby embryí. Na takhle dlouhou trať se s trvale rozbitým spánkem jde těžko. Stojí za to ho řešit dřív, než se rozpadne úplně.`,
  },
  {
    id: 'ppc-pohyb-pri-stimulaci',
    kind: 'article',
    title: 'Pohyb během stimulace: proč zrovna teď platí jiná pravidla',
    excerpt:
      'Vaječníky mohou být několikanásobně větší než obvykle. To mění, co si můžete dovolit — a proč se prudké otáčení nevyplácí.',
    minutes: 7,
    phases: [],
    topics: ['pohyb', 'sebepece'],
    level: 'essential',
    hero: 'sand',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
    publishedOn: PUBLISHED,
    boost: 0.9,
    body: `## Co to je

Během stimulace v obou vaječnících roste současně víc folikulů. Vaječníky, které mají běžně velikost zhruba jako mandle, se tak mohou zvětšit několikanásobně a stávají se citlivějšími a pohyblivějšími. Tenhle stav trvá i několik dní po odběru vajíček, než se vaječníky vrátí do původní velikosti.

Pravidla pro pohyb se proto v tomto období liší od zbytku vaší cesty. Nejde o pověru ani o opatrnost pro jistotu — jde o konkrétní anatomickou situaci.

## Jak to může pomoci

Pohyb v této fázi rozhodně nemá zmizet. Přiměřená aktivita:

- **snižuje riziko žilní trombózy**, které je při hormonální stimulaci vyšší než jindy,
- **pomáhá s trávením a s nadýmáním**, které v tomto období obtěžuje skoro každou,
- **udržuje náladu a spánek**,
- **brání pocitu, že jste pacientka na dva týdny odstavená od vlastního života.**

Ležet celý den je vlastní riziko. Nejde o volbu mezi cvičením a postelí, jde o volbu rozumného středu.

## Co o tom víme

**Přiměřený pohyb a prevence trombózy: dobře podložené důkazy.**

**Riziko torze vaječníku při jeho výrazném zvětšení: doložené, i když vzácné.** Torze znamená, že se zvětšený vaječník otočí kolem vlastní stopky a přeruší se jeho cévní zásobení. Je to naléhavý stav, který vyžaduje okamžité ošetření. Pravděpodobnost je nízká, následky ale závažné, a proto se opatření dodržují.

**Konkrétní bezpečná dávka pohybu během stimulace: nedostatek kvalitních důkazů.** Neexistuje studie, která by řekla „tolik kilometrů ano, tolik ne“. Doporučení proto vycházejí z opatrnosti a ze zkušenosti pracovišť — a liší se klinika od kliniky. **Proto platí pokyny vaší kliniky nad vším, co si přečtete.**

**Vliv pohybu během stimulace na počet a kvalitu vajíček: nedoložený.** Cvičením si výsledek nezlepšíte ani nezhoršíte, pokud dodržíte bezpečnostní opatření.

## Na co si dát pozor

Co se v tomto období obvykle nedoporučuje:

- **prudké otáčení a švihové pohyby trupem**, skoky, poskoky,
- **běh a doskoky**, hlavně ve druhé polovině stimulace,
- **intenzivní posilování břicha** a cviky se silným stlačením podbřišku,
- **zvedání těžkých břemen**,
- **kontaktní a soutěžní sporty**, kde hrozí náraz,
- **jízda na koni a horské kolo po nerovném terénu**,
- **potápění a horká prostředí** — sauna, vířivka.

Co obvykle zůstává v pořádku:

- **chůze v pohodlném tempu**,
- **jemné protahování bez zákrutů**,
- **klidové polohy a dechová cvičení**,
- **běžné domácí činnosti.**

**Vyhledejte akutní lékařskou pomoc**, pokud se objeví:

- **náhlá prudká bolest v podbřišku, obvykle jednostranná**, zvlášť s nevolností nebo zvracením — může jít o torzi vaječníku,
- **mdloba, zrychlený tep a chladný pot** společně s bolestí břicha.

**Kontaktujte svou kliniku** při rychle rostoucím obvodu břicha, výrazném přírůstku hmotnosti během několika dní, dušnosti nebo výrazně sníženém močení — to mohou být příznaky ovariálního hyperstimulačního syndromu.

## Jak se v tom vyznat

1. **Zeptejte se na klinice konkrétně:** „Co můžu tento týden dělat za pohyb?“ Je to běžná otázka a odpověď se liší podle toho, jak vaše vaječníky reagují.
2. **Zeptejte se znovu po odběru vajíček.** Omezení tou chvílí nekončí.
3. **Zeptejte se znovu před transferem a po něm.** Jeden cyklus může zahrnovat čerstvý transfer i následné kryotransfery ze stejné zásoby embryí — pokyny se v každém z těch období mohou lišit.
4. **Trenérovi v posilovně nemusíte říkat diagnózu.** Stačí: „Mám zdravotní omezení, nemůžu zvedat těžké váhy, skákat a dělat rotace trupu.“

> Pokud se pokyn vaší kliniky liší od tohoto textu, řiďte se klinikou. Ona ví, jak vypadají vaše vaječníky na dnešním ultrazvuku. Tento článek to vědět nemůže.`,
  },
  {
    id: 'ppc-doplnky-stravy',
    kind: 'article',
    title: 'Doplňky stravy: než něco spolknete, ukažte to klinice',
    excerpt:
      'Regály jsou plné přípravků na plodnost. Co o nich víme, proč nejsou neutrální a proč o každém z nich musí vědět váš lékař.',
    minutes: 9,
    phases: [],
    topics: ['strava', 'sebepece'],
    level: 'essential',
    hero: 'linen',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE — doporučené postupy', 'Cochrane Database of Systematic Reviews'],
    publishedOn: PUBLISHED,
    boost: 0.9,
    body: `## Co to je

Doplňky stravy jsou přípravky s vitaminy, minerály, bylinnými výtažky nebo jinými látkami. Prodávají se volně a **neprocházejí schvalováním účinnosti jako léky.** To je klíčový rozdíl: u léku musí výrobce doložit, že funguje a v jakých dávkách. U doplňku ne.

Znamená to také, že skutečný obsah balení nemusí odpovídat etiketě a že mezi výrobci jsou obrovské rozdíly v kvalitě.

## Než budete číst dál

Tohle je nejdůležitější část článku a platí pro všechno, co následuje:

- **Doplňky stravy nejsou automaticky vhodné pro každou ženu.**
- **Mohou interagovat s léky, které v léčbě dostáváte** — s hormonální stimulací, s podporou luteální fáze, s léky ovlivňujícími srážlivost krve, s léky na štítnou žlázu.
- **Než začnete cokoli užívat během IVF, proberte to se svou klinikou.** Včetně věcí, které se zdají neškodné: bylinné čaje, „přírodní“ směsi, přípravky na spaní, produkty na imunitu.
- **Tenhle článek neuvádí žádné dávkování a záměrně.** Co a kolik je vhodné právě pro vás, může posoudit jen váš lékař, který zná vaše výsledky a vaši medikaci.

## Jak to může pomoci

Doplňky mají své opodstatněné místo. Ne jako podpora plodnosti, ale ve dvou jasně vymezených situacích:

**První: doplnění prokázaného nedostatku.** Když laboratoř ukáže, že vám něco chybí, doplnění dává smysl. Typicky se to řeší u vitaminu D, železa nebo vitaminu B12 — vždy podle vašich výsledků a podle rozhodnutí lékaře.

**Druhá: prevence vrozených vývojových vad.** Doplnění kyseliny listové před početím a v raném těhotenství patří ke standardním doporučením — ale pozor na to, co přesně dělá. **Snižuje riziko vrozených vad nervové trubice u dítěte. Nezvyšuje šanci na otěhotnění.** To jsou dvě různé věci a často se pletou. Konkrétní přípravek a dávkování určí váš lékař; u některých žen se doporučení liší podle jejich zdravotního stavu a medikace.

## Co o tom víme

Projděme kategorie tak, jak je uvidíte v lékárně.

**Kyselina listová v prevenci vrozených vad nervové trubice: dobře podložené důkazy.** Jedna z nejlépe doložených věcí v celé prekoncepční péči. Znovu ale: jde o prevenci vad, ne o plodnost.

**Vitamin D při prokázaném nedostatku: dobře podložené důkazy pro zdraví kostí a svalů.** Vliv doplňování na výsledky IVF: omezené a nekonzistentní důkazy. Doplňuje se proto, že vám chybí, ne proto, aby cyklus vyšel.

**Jód, železo, vitamin B12 při nedostatku: dobře podložené v rámci léčby daného nedostatku**, podle výsledků a rozhodnutí lékaře.

**Omega-3 mastné kyseliny: omezené důkazy.** Prospěšnost pro srdce a cévy má oporu; vliv na plodnost je nejasný.

**Antioxidanty, koenzym Q10, inositol, DHEA, melatonin a podobné přípravky nabízené na kvalitu vajíček nebo na ovariální rezervu: omezené až nedostatečné důkazy.** Přehledové práce docházejí k tomu, že spolehlivý důkaz o zvýšení pravděpodobnosti otěhotnění nebo porodu živého dítěte chybí. U některých z těchto látek — zvlášť u DHEA — jde svým účinkem prakticky o hormonální zásah, který nepatří do samoléčby a **může být zvažován jen na základě rozhodnutí lékaře v konkrétní situaci.**

**Kombinované přípravky „pro plodnost“ s deseti a více složkami: nedostatek kvalitních důkazů.** Nikdo netestoval tu konkrétní kombinaci a čím víc složek, tím větší prostor pro interakce a pro překročení bezpečných dávek, když berete víc přípravků najednou.

**Bylinné směsi včetně čínských: nedostatek kvalitních důkazů pro účinnost a doložená rizika pro bezpečnost.** Viz článek o tradiční čínské medicíně.

## Na co si dát pozor

- **Sepište všechno, co berete**, a vezměte seznam na kliniku. Včetně čajů, prášků na spaní, přípravků na vlasy a nehty a produktů od kamarádky. Většina žen tyhle věci nenahlásí, protože je nepovažuje za léky.
- **Vitamin A a retinol ve vysokých dávkách** mohou být pro plod škodlivé. Pozor na kombinace a na přípravky s rybím olejem z jater.
- **Nekombinujte několik multivitaminů.** Dávky se sčítají a některé látky mají horní bezpečnou hranici.
- **Byliny mohou ovlivnit srážlivost krve** a účinky léků. Před zákrokem v narkóze musí lékař vědět, co berete.
- **Neznámé e-shopy a přípravky ze zahraničí** bez kontroly jsou riziko. Byly opakovaně popsány případy kontaminace a nedeklarovaných příměsí.
- **Vyhledejte lékařskou pomoc** při žloutnutí kůže nebo očního bělma, tmavé moči, výrazné bolesti v pravém podžebří, vyrážce nebo dušnosti po zahájení nového přípravku.
- **Cena není známkou kvality.** Balíček za několik tisíc měsíčně nemá lepší data než levnější přípravek. Většinou nemá data žádná.

## Jak si vybrat odborníka

1. **Váš lékař na klinice je první a hlavní adresa.** Otázka „mám tohle brát?“ je legitimní a nikoho neobtěžujete.
2. **Lékárník** umí posoudit interakce a duplicity ve složení. Je to podceňovaný a dostupný zdroj.
3. **Nutriční terapeut** pomůže s tím, co se dá pokrýt stravou místo tabletami.
4. **Zpozorněte u kohokoli, kdo doplňky sám prodává.** Poradenství spojené s prodejem konkrétní značky není nezávislé.

> Poctivé shrnutí: kromě doplnění prokázaného nedostatku a kyseliny listové v prevenci vrozených vad nemá většina přípravků prodávaných „na plodnost“ dost silné důkazy, aby se dalo tvrdit, že vám pomohou otěhotnět. Rozhodnutí je vaše — jen ať je informované a ať o něm ví vaše klinika.`,
  },
]

export const pack: ContentPack = { items }
