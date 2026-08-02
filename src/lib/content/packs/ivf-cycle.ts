import type { ContentPack } from '../types'

export const pack: ContentPack = {
  items: [
    {
      id: 'cyk-protokoly-prehled',
      kind: 'article',
      title: 'Krátký, dlouhý, antagonistický: co znamená váš protokol',
      excerpt:
        'Tři písmena v propouštěcí zprávě rozhodují o tom, jak dlouho budete píchat a kdy se všechno zlomí. Tady je, co znamenají.',
      body: `## Proč vůbec existují různé protokoly

Cílem stimulace je dostat k dozrání víc vajíček najednou, než kolik by jich dozrálo v přirozeném cyklu. V přirozeném cyklu se z celé skupiny probuzených folikulů prosadí jeden — vedoucí — a ostatní zaniknou. Stimulace tuhle přirozenou selekci na chvíli vypne a udrží ve hře celou skupinu.

Problém je, že tělo se brání. Jakmile hladina estradiolu vyroste, mozek vyšle vlastní signál k ovulaci a vajíčka odejdou dřív, než je stihne lékař odebrat. Celý protokol je vlastně odpověď na jedinou otázku: **jak zabránit předčasné ovulaci a přitom nechat folikuly růst**.

Odpovědi jsou v zásadě tři a liší se tím, čím a kdy se ovulace blokuje.

## Antagonistický protokol

Dnes nejčastější varianta. Stimulace startuje na začátku cyklu, obvykle druhý nebo třetí den menstruace. Zhruba po pěti až šesti dnech, kdy folikuly dorostou do určité velikosti, se přidá druhá injekce — antagonista, který okamžitě zablokuje výdej hormonu spouštějícího ovulaci.

- **Délka:** typicky kolem devíti až dvanácti dní píchání.
- **Výhoda:** kratší, šetrnější, snadněji se u něj mění plán podle toho, jak vaječníky reagují.
- **Zásadní plus:** umožňuje takzvaný agonistický trigger, který výrazně snižuje riziko těžkého OHSS. Proto ho lékaři často volí u žen s PCOS nebo s vysokou očekávanou odpovědí.

## Dlouhý protokol s agonistou

Začíná ještě v předchozím cyklu, obvykle kolem 21. dne. Nejdřív se agonistou uspí vlastní hormonální řízení — tomu se říká downregulace — a teprve na vyřazeném podhoubí se začne stimulovat.

- **Délka:** celkově čtyři až šest týdnů.
- **Výhoda:** velmi předvídatelný, vaječníky rostou rovnoměrně, cyklus se dá dobře naplánovat.
- **Nevýhoda:** delší, náročnější, v mezidobí se často objeví návaly, bolesti hlavy a rozlada z útlumu estrogenu. Ten útlum je záměr, ne komplikace.

Dlouhý protokol se dnes používá cíleněji než dřív, například u endometriózy nebo tam, kde se v minulém cyklu nepodařilo udržet zrání pod kontrolou.

## Krátký protokol (flare)

Agonista se nasadí až s menstruací a využije se jeho úvodní vzplanutí, kdy tělo krátce vyplaví vlastní hormony a tím stimulaci nastartuje. Bývá vyhrazený pro situace, kdy se čeká slabší odpověď vaječníků.

## Mírná stimulace a přirozený cyklus

Nižší dávky, méně injekcí, méně vajíček, ale také méně zátěže. Volí se u žen s velmi nízkou rezervou, kde vysoké dávky stejně nepřinesou víc vajíček, nebo u těch, které vysoké dávky snášejí špatně.

## Proč vám lékař vybral zrovna tenhle

Rozhoduje kombinace faktorů, které máte na papíře dávno před prvním píchnutím:

1. **AMH a počet antrálních folikulů** — očekávaná odpověď vaječníků.
2. **Věk** a předchozí cykly, pokud nějaké byly.
3. **Diagnóza** — PCOS, endometrióza, nízká rezerva, mužský faktor.
4. **Riziko OHSS** — u vysoké odpovědi se protokol volí tak, aby šel bezpečně ukončit.
5. **Praxe konkrétního pracoviště.** Ano, i tohle hraje roli a je to v pořádku — tým pracuje nejlépe s tím, co dělá denně.

Neexistuje protokol, který by byl univerzálně nejlepší. Existuje protokol, který nejlépe sedí vašemu tělu a vašim číslům. A pokud první cyklus nedopadne podle plánu, protokol je jedna z prvních věcí, které se mění.

## Na co se zeptat před startem

- Jaký protokol máme a proč právě ten?
- Kolik vajíček zhruba očekáváte? (Odpověď bude rozpětí, ne číslo.)
- Kdy budou kontroly a kolik jich odhadem bude?
- Jaké je moje riziko OHSS a jak ho budeme řešit?
- Kdo je člověk, kterému mám volat, když si nebudu vědět rady?

Poslední otázka je nejpraktičtější ze všech. Napište si to jméno a číslo někam, kde ho najdete ve tři ráno.

> Tenhle text vysvětluje obecné principy a nenahrazuje lékařskou péči. Konkrétní protokol, dávky i termíny určuje výhradně váš ošetřující lékař podle vašich vyšetření.`,
      minutes: 8,
      phases: ['ivf_prep', 'stimulation'],
      dayRange: [0, 6],
      topics: ['stimulace', 'leky', 'hormony', 'klinika'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy pro ovariální stimulaci',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-09-04',
      boost: 0.9,
    },
    {
      id: 'cyk-jak-si-pichat-injekce',
      kind: 'article',
      title: 'První injekce: krok za krokem, ať se vám netřesou ruce',
      excerpt:
        'Nikdo se nerodí s tím, že si umí píchnout do břicha. Tady je postup, který funguje i když se bojíte.',
      body: `## Než otevřete krabičku

Většina žen popisuje první píchnutí jako nejhorší moment celého cyklu — a zároveň jako moment, který byl mnohem snesitelnější, než čekaly. Jehly pro podkožní aplikaci jsou velmi tenké a krátké. Bolí to méně než odběr krve.

Co pomáhá nejvíc: **udělat to podle pevného postupu**, ne podle nálady. Rutina vypne panickou část mozku.

## Příprava: pět minut, které si vezměte

1. **Umyjte si ruce** mýdlem a teplou vodou, pořádně, aspoň dvacet vteřin.
2. **Připravte si plochu** — stůl, čistý ručník nebo papírová utěrka.
3. **Vyskládejte si všechno dopředu:** pero nebo lahvičku, jehlu, dezinfekční čtvereček, nádobu na ostrý odpad, papírový kapesník.
4. **Zkontrolujte lék** — název, koncentraci, expiraci a dávku, kterou máte napsanou od lékaře. Přečtěte si to nahlas. Vážně nahlas, chyby se dělají v tichu.
5. **Nechte lék pár minut mimo chladničku,** pokud se skladuje v chladu. Studený roztok pálí víc.

## Samotná aplikace

Většina léků na stimulaci se aplikuje **podkožně** (subkutánně), tedy do tukové vrstvy, ne do svalu. Postup:

1. **Vyberte místo** a otřete ho dezinfekčním čtverečkem. Nechte oschnout — do vlhké dezinfekce to štípe.
2. **Uchopte kožní řasu** mezi palec a ukazovák. Nemačkejte ji, jen nadzvedněte.
3. **Zapíchněte rychle**, kolmo nebo pod úhlem podle pokynů z kliniky. Rychlý pohyb bolí méně než pomalý.
4. **Aplikujte pomalu.** Tady je pomalost výhoda: rychlé vstříknutí pálí.
5. **Počkejte pět až deset vteřin** před vytažením jehly, aby se lék nevytlačil zpět.
6. **Vytáhněte jehlu**, uvolněte řasu, přiložte suchý čtvereček. **Netřete.** Tření dělá modřiny.
7. **Jehlu okamžitě odhoďte** do pevné nádoby na ostrý odpad. Nikdy ji nezakrývejte zpět čepičkou.

## Když máte míchat prášek s rozpouštědlem

Některé léky přijdou jako prášek v lahvičce a ampulka s tekutinou. Rozpouštědlo se vstříkne do lahvičky po stěně, ne přímo doprostřed, a lahvičkou se **jemně otáčí, netřepe**. Prášek se rozpustí během několika vteřin a roztok musí být čirý. Zakalený nebo s vločkami nepoužívejte a volejte na kliniku.

## Co když se něco pokazí

- **Vytryskla kapka léku po vytažení jehly.** Běžné, dávka je prakticky celá uvnitř. Nepřidávejte.
- **Objevila se krev.** Také běžné, trefila jste drobnou cévku. Přitiskněte, netřete.
- **Zapíchla jsem a lekla se, jehla je zpola venku.** Vytáhněte, vyhoďte, připravte novou. Nikdy nepíchejte použitou jehlou znovu.
- **Zapomněla jsem dávku.** Nedávkujte si dvojitě podle vlastního uvážení — volejte na kliniku, i večer. Mají na tohle postup.
- **Píchla jsem v jiný čas než včera.** Hodina sem, hodina tam u stimulačních injekcí obvykle nevadí; u triggeru je čas kritický a nesmí se posouvat. Vždy se řiďte pokynem svého lékaře.

## Když to sama nezvládnete

Není to selhání. Možnosti jsou:

- Nechat píchat partnera, kamarádku nebo sestru — mnoho párů to tak dělá a spousta mužů si tímhle najde konečně roli.
- Domluvit si aplikaci u praktické sestry nebo na klinice.
- Použít pero s automatickým podavačem, pokud ho lék má a klinika ho nabízí.
- Zapíchnout přes led. Kostka ledu přes látku, třicet vteřin, místo znecitliví.

## Kdy volat lékaře

Volejte, pokud se objeví vyrážka po celém těle, otok obličeje nebo rtů, dýchací potíže, horečka nad 38 °C, nebo pokud se místo vpichu výrazně zarudne, ztvrdne a je horké — to nejsou očekávané reakce.

> Tenhle návod je obecný. Přesný postup, dávkování i čas aplikace určuje vaše klinika a její pokyny mají vždy přednost před čímkoli, co si přečtete jinde.`,
      minutes: 7,
      phases: ['ivf_prep', 'stimulation'],
      dayRange: [0, 3],
      topics: ['leky', 'stimulace', 'klinika'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Souhrny údajů o přípravku (SPC) — obecné zásady aplikace', 'ESHRE — doporučené postupy'],
      publishedOn: '2025-09-08',
      boost: 0.95,
    },
    {
      id: 'cyk-kam-pichat-a-modriny',
      kind: 'article',
      title: 'Kam píchat, jak střídat místa a co s modřinami',
      excerpt:
        'Břicho po deseti dnech vypadá jako mapa. Dá se to zvládnout tak, aby to bolelo míň a bylo míň vidět.',
      body: `## Kam se běžně píchá

Léky na stimulaci se nejčastěji aplikují **podkožně do břicha** — do oblasti kolem pupku, ale **ne blíž než zhruba dva až tři prsty od pupku samotného**. Tahle oblast má stabilní vrstvu podkoží a lék se z ní vstřebává rovnoměrně.

Další možná místa, pokud je vaše klinika povolí:

- **Horní zevní část stehna** — snadno dosažitelné, dobré pro ty, kdo se do břicha bojí.
- **Zadní strana paže** — obvykle potřebujete druhou osobu.
- **Horní zevní kvadrant hýždě** — u některých olejových přípravků do svalu; to už je jiná technika a klinika vás ji naučí zvlášť.

Nikdy nepíchejte do jizvy, mateřského znaménka, do místa se strií, do zarudlé nebo ztvrdlé kůže a do modřiny.

## Střídání míst má systém

Vpichy nedělejte náhodně. Rozdělte si břicho na čtyři pole a postupujte pořád dokola:

1. Levý horní kvadrant
2. Pravý horní kvadrant
3. Pravý dolní kvadrant
4. Levý dolní kvadrant

V každém kvadrantu se posouvejte zhruba o dva centimetry od minula. **Do stejného bodu se nevracejte dřív než za týden.** Když si vedete deník, zakreslete si tečku — po pár dnech si přestanete pamatovat, kde jste byla.

Pokud píchate dvakrát denně, používejte pro ranní a večerní dávku různé strany.

## Proč vznikají modřiny

Modřina znamená, že jehla cestou minula podkožní tuk a trefila drobnou cévku. Není to chyba a nesnižuje to účinek léku. Přispívají k tomu:

- **Tření po vytažení jehly** — nejčastější příčina.
- **Rychlé vstřikování** roztoku.
- **Studený lék** přímo z lednice.
- **Nízkomolekulární heparin**, pokud ho užíváte — po něm jsou modřiny prakticky pravidlem.
- Vaše vlastní srážlivost a jemnost cév, kterou nezměníte.

## Co s modřinami prakticky

- **Hned po vpichu:** přitiskněte suchý čtvereček na deset až patnáct vteřin. Netřete.
- **Prvních 24 hodin:** chlad. Studený obklad nebo led přes látku, pět minut, několikrát denně. Stahuje cévy.
- **Po 24 hodinách:** naopak teplo. Vlažný obklad podpoří vstřebávání.
- **Masti s heparinem nebo výtažkem z kaštanu** — dostupné bez předpisu, aplikují se **mimo čerstvé místo vpichu**, ne do něj. Zeptejte se na klinice, jestli je ve vašem případě mohou doporučit.
- **Netlačte se do stahujícího oblečení.** Gumy v pase přesně přes pole vpichů umí udělat víc než samotná jehla.

## Když to bolí víc než minule

Pálení během aplikace nejčastěji způsobuje studený roztok, rychlé vstřikování nebo dezinfekce, která nestihla oschnout. Zkuste tyhle tři věci upravit dřív, než začnete hledat složitější vysvětlení. Některé přípravky prostě pálí víc než jiné a je to jejich vlastnost, ne známka toho, že děláte něco špatně.

Pomáhá také **ledování místa třicet vteřin před vpichem** a **rozptýlení** — puštěná hudba, hluboký výdech ve chvíli zapíchnutí.

## Kdy volat lékaře

Ozvěte se klinice, pokud:

- se v místě vpichu objeví **tvrdý, horký, výrazně zarudlý bulek**, který se během dne zvětšuje,
- máte **horečku nad 38 °C** bez jiného vysvětlení,
- z místa vpichu vytéká **hnisavá tekutina**,
- se objeví **rozsáhlá modřina bez zjevné souvislosti s vpichem**, hlavně pokud užíváte léky ovlivňující srážlivost,
- máte **kopřivku, otok rtů či obličeje nebo dušnost** — to řešte okamžitě, může jít o alergickou reakci.

## Malá útěcha na závěr

Břicho po stimulaci vypadá pár týdnů jako po přehrané bitvě. Skvrny žloutnou a mizí, obvykle do dvou až tří týdnů po poslední injekci. Není potřeba je před nikým skrývat a zároveň je úplně v pořádku, když je skrýt chcete.

> Tento text nenahrazuje lékařskou péči. Při jakékoli nejistotě ohledně reakce v místě vpichu kontaktujte svou kliniku.`,
      minutes: 6,
      phases: ['stimulation', 'ivf_prep'],
      dayRange: [2, 12],
      topics: ['leky', 'stimulace', 'sebepece'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Souhrny údajů o přípravku (SPC) — obecné zásady aplikace'],
      publishedOn: '2025-09-12',
      boost: 0.7,
    },
    {
      id: 'cyk-skladovani-leku',
      kind: 'article',
      title: 'Skladování léků: lednice, teplo a co dělat, když se něco pokazí',
      excerpt:
        'Balíček z lékárny stojí desítky tisíc a rozhoduje o celém cyklu. Tady je, jak s ním zacházet.',
      body: `## Dvě skupiny léků, dvě pravidla

Léky, které dostanete na stimulaci, se z hlediska skladování dělí zhruba na dvě skupiny:

- **Ty, které patří do chladničky** (obvykle 2–8 °C) — často gonadotropiny a některá pera.
- **Ty, které vydrží při pokojové teplotě** (obvykle do 25 °C, mimo přímé světlo).

**Nikdy neodhadujte podle vzhledu.** Rozhoduje příbalový leták a pokyn lékárníka. Když si nejste jistá, vyfoťte krabičku a zavolejte do lékárny — poradí vám během minuty.

## Praktická pravidla pro chladničku

- Ukládejte léky **do střední police, ne do dvířek** a nikdy ne k zadní stěně, kde bývá nejchladněji. Zmrznutí přípravek znehodnotí.
- **Zmrzlý lék se nepoužívá**, ani po rozmrazení. Ani když vypadá v pořádku.
- Nechte přípravky **v původní krabičce** — chrání je před světlem a máte po ruce šarži a expiraci.
- Vyčleňte jim **vlastní box nebo poličku** a označte ji. Snížíte riziko, že vám je někdo přerovná nebo že do nich narazíte s mraženou zeleninou.
- Pořiďte si **jednoduchý teploměr do lednice**. Stojí pár stovek a dá vám jistotu, že vaše lednice skutečně drží nastavenou teplotu.

## Otevřená pera

Naředěné nebo otevřené pero má často jinou dobu použitelnosti než neotevřené balení — bývá to řádově dny až týdny a **je uvedena v příbalovém letáku**. Napište si na pero fixem datum prvního použití. Pomůže vám to víc než jakákoli aplikace v telefonu.

## Když vypadne proud nebo se rozbije lednice

1. **Neotevírejte ji.** Zavřená lednice udrží teplotu několik hodin.
2. Přesuňte léky do **chladicí tašky s chladicí vložkou zabalenou v ručníku** — vložka se nesmí přímo dotýkat balení, hrozí zmrznutí.
3. Zavolejte do lékárny nebo na kliniku a **popište, jak dlouho a při jaké teplotě lék byl**. Podle toho vám řeknou, jestli se dá dál použít.
4. Nikdy nevyhazujte lék dřív, než se zeptáte. Řada přípravků snese krátkodobé vybočení z teplotního rozmezí.

## Nechala jsem lék v teple na stole

Stává se to častěji, než byste čekala — hlavně ráno, ve spěchu. Znovu platí: **nevyhazujte, zavolejte**. U některých přípravků je krátkodobé skladování při pokojové teplotě povolené a v letáku je to napsané. U jiných ne. Rozhodnutí patří lékárníkovi nebo klinice, ne internetu a ne diskusnímu fóru.

## Domácí organizace, která vás zachrání

- **Jedna krabice, jedno místo.** Všechno ostatní — jehly, dezinfekce, nádoba na ostrý odpad — v jedné krabici mimo lednici.
- **Nádoba na ostrý odpad** je povinnost, ne luxus. Dostanete ji v lékárně. Plnou ji odevzdáte zpátky do lékárny nebo podle pokynů vaší kliniky.
- **Papírový rozpis na lednici.** Datum, lék, dávka, čas, odškrtnuto. Telefon vám vybije baterii, papír ne.
- **Kontrolujte zásobu tři dny dopředu.** Nic není horšího než v neděli večer zjistit, že vám došlo pero a lékárna otevírá až v pondělí.

## Když se vám změní dávka

Během stimulace se dávky běžně upravují podle toho, jak vaječníky reagují. Znamená to, že vám lék může dojít dřív, než jste plánovala, nebo naopak zbýt. **Nedávkujte si podle původního rozpisu, když vám klinika řekla nové číslo.** Přepište si papírový rozpis a starý zahoďte, ať ho v šest ráno omylem nepřečtete.

## Kdy volat lékaře nebo lékárníka

- Lék **zmrzl** nebo byl několik hodin mimo doporučenou teplotu.
- Roztok je **zakalený, mění barvu nebo obsahuje viditelné částice**.
- **Poškozený obal**, prasklá lahvička, netěsnící pero.
- **Vypršelá expirace** — ani o den, ani „to bude v pohodě".

> Tento text popisuje obecné zásady. Vždy se řiďte příbalovým letákem konkrétního přípravku a pokyny své kliniky a lékárny.`,
      minutes: 6,
      phases: ['ivf_prep', 'stimulation'],
      dayRange: [0, 12],
      topics: ['leky', 'stimulace'],
      level: 'essential',
      hero: 'pearl',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Souhrny údajů o přípravku (SPC)', 'Státní ústav pro kontrolu léčiv — obecné zásady uchovávání léčiv'],
      publishedOn: '2025-09-16',
    },
    {
      id: 'cyk-cestovani-s-leky',
      kind: 'article',
      title: 'Cestování s léky: letadlo, auto, dovolená uprostřed stimulace',
      excerpt:
        'Ano, dá se odjet i s perem v tašce. Chce to chladicí box, papír od lékaře a trochu předstihu.',
      body: `## Nejdřív jedna otázka, kterou si položte

Stimulace znamená kontroly každé dva až tři dny a odběr v termínu, který dopředu neznáte. **Cestovat během stimulace jde, ale plán se musí ohnout kolem cyklu, ne naopak.** Než rezervujete cokoli nevratného, řekněte na klinice přesné datum odjezdu a návratu. Někdy vám nabídnou posun startu o měsíc, jindy řeknou, že to vyjde.

Pokud jste ve fázi příprav před cyklem, cestování obvykle nic nekomplikuje.

## Do letadla: co si připravit

1. **Potvrzení od lékaře.** Krátký papír s razítkem, ideálně v angličtině: že užíváte léčbu, potřebujete si vézt injekční aplikátory, jehly a chlazený přípravek. Vyžádejte si ho aspoň týden dopředu.
2. **Všechny léky do příručního zavazadla.** Nikdy do odbaveného. V nákladovém prostoru teplota klesá pod nulu a zavazadlo se může ztratit.
3. **Léky v původním obalu** s čitelným štítkem a příbalovým letákem.
4. **Chladicí taška s gelovou vložkou.** Bezpečnostní kontrola gelové vložky obvykle připouští, když k nim doložíte lékařské potvrzení — ohlaste je aktivně, nečekejte, až je najdou.
5. **Jehly ohlaste u kontroly sama.** Vyndejte je z tašky, ukažte potvrzení. Trvá to o dvě minuty déle a ušetří vám to patnáct.

Léky projdou rentgenem bez poškození. Pokud si to nepřejete, můžete požádat o ruční kontrolu, ale není to nutné.

## Autem

Jednodušší, ale pozor na jednu věc: **v zaparkovaném autě je v létě přes 50 °C.** Chladicí box s vložkou, nikdy ne kufr na slunci, nikdy ne palubní deska. Cestou si box vezměte s sebou, když jdete na oběd.

## Časová pásma

Tady se to komplikuje a **rozhodnutí musí padnout na klinice, ne ve vaší hlavě nad kalkulačkou.** Obecně platí, že se drží pravidelný odstup mezi dávkami a přechod se rozloží do několika dní. Napište na kliniku e-mail s konkrétními údaji: kam letíte, jaký je posun, kdy odlétáte a kdy se vracíte. Dostanete konkrétní rozpis.

**Trigger se nikdy nepřizpůsobuje cestování.** Načasování dokončovací injekce je vázané na hodinu odběru a nedá se posunout kvůli letu.

## Praktický seznam do kufru

- Léky v původních krabičkách
- Chladicí taška + dvě vložky
- Jehly a stříkačky s rezervou (dvě navíc — pero se dá upustit)
- Dezinfekční čtverečky
- Cestovní nádoba na ostrý odpad nebo pevná uzavíratelná lahev
- Kopie rozpisu dávek a jméno a číslo na kliniku
- Evropský průkaz zdravotního pojištění nebo cestovní pojištění
- Volnější kalhoty — nadmuté břicho v úzkých džínách je zážitek, který si odpustíte

## Dovolená během stimulace: buďte realistická

Nadmuté břicho, únava, citlivá prsa a den ode dne vyšší hladiny hormonů. **Vyhněte se náročným výletům, potápění, jízdě na koni a kontaktním sportům** — rostoucí vaječníky jsou zvětšené a citlivé, hrozí jejich torze. Plavání v moři nebo klidná procházka jsou v pořádku, pokud vám klinika neřekne jinak.

Dlouhé sezení v autě nebo v letadle: **každou hodinu se projděte, hodně pijte.** Vyšší hladiny estradiolu mírně zvyšují riziko trombózy.

## Kdy volat lékaře

Během cesty volejte na kliniku nebo vyhledejte místní lékařskou pomoc, pokud se objeví:

- **prudká bolest břicha**, hlavně jednostranná, se zvracením — může jít o torzi vaječníku,
- **rychlý nárůst hmotnosti, výrazně nafouklé břicho a dušnost** — varovné příznaky OHSS,
- **bolest, otok nebo zarudnutí lýtka** či náhlá dušnost a bolest na hrudi — podezření na trombózu,
- **teplota nad 38 °C**.

> Text popisuje obecné zásady. Konkrétní pokyny k cestování během léčby vám dá vždy váš ošetřující lékař.`,
      minutes: 6,
      phases: ['ivf_prep', 'stimulation'],
      dayRange: [0, 10],
      topics: ['leky', 'stimulace', 'sebepece'],
      level: 'deep',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Souhrny údajů o přípravku (SPC)'],
      publishedOn: '2025-09-20',
    },
    {
      id: 'cyk-monitoring-folikulometrie',
      kind: 'article',
      title: 'Folikulometrie: co lékař vidí na monitoru a co vám neřekne',
      excerpt:
        'Za tři minuty ultrazvuku se rozhoduje o dávkách i o termínu odběru. Tady je, co se přitom měří.',
      body: `## Co je folikulometrie

Opakované ultrazvukové sledování vaječníků během stimulace. Provádí se **vaginální sondou**, protože ta vidí vaječníky nejlépe — bez plného močového měchýře, bez gelu na břiše, obvykle za tři až pět minut.

Cílem je odpovědět na tři otázky:

1. **Kolik folikulů roste a jak rychle?**
2. **Jak vypadá děložní sliznice?**
3. **Je čas změnit dávku, přidat antagonistu, nebo už triggerovat?**

## Jak často se chodí

Typicky se první kontrola dělá **před startem stimulace** (takzvaný vstupní ultrazvuk, kdy se kontroluje klid na vaječnících a tenká sliznice), pak zhruba **po čtyřech až pěti dnech** a dál **každé dva až tři dny**, ke konci často denně. Přesný rytmus je individuální.

Součástí bývá i **odběr krve** — nejčastěji estradiol, podle protokolu i LH a progesteron. Kombinace ultrazvuku a hormonů dává úplnější obrázek než každý zvlášť.

## Co lékař na monitoru měří

- **Počet folikulů** v každém vaječníku zvlášť. Folikul je tekutinou vyplněný váček, ve kterém potenciálně dozrává vajíčko. Na obrazovce jsou to černé kruhy.
- **Velikost folikulů** v milimetrech, obvykle průměr ze dvou nebo tří rozměrů.
- **Rovnoměrnost skupiny** — jestli rostou pohromadě, nebo se jeden vytrhl dopředu.
- **Tloušťka a vzhled endometria.** Sliznice se během stimulace zesiluje a mění strukturu.
- **Volná tekutina v pánvi** a celkový vzhled vaječníků — jedno ze znamení, která pomáhají odhadnout riziko OHSS.

## Co znamená, když vám sestra nic neřekne

Většina pracovišť čísla nahlas komentuje, ale ne vždy hned a ne vždy kompletně. Není to tajnůstkářství — údaje ještě jdou k lékaři, který je dá dohromady s krví a rozhodne o dávce. Telefon s pokynem obvykle přijde do několika hodin.

**Máte právo se zeptat.** Klidně přímo: „Kolik folikulů a jak velkých dnes vidíte?" Naprostá většina lékařů odpoví.

## Čeho si nevšímat

**Nepočítejte folikuly jako budoucí děti.** Cesta od folikulu k dítěti má několik filtrů: ne v každém folikulu je vajíčko, ne každé vajíčko je zralé, ne každé zralé se oplodní, ne každé oplozené doroste do blastocysty a ne každá blastocysta se uhnízdí. To není pesimismus, to je aritmetika, kterou zná každý embryolog. Když ji budete znát taky, ušetříte si pár pádů.

**Nesrovnávejte se.** Číslo folikulů říká něco o vaší ovariální rezervě a odpovědi na dávku, ne o kvalitě. Žena se čtyřmi folikuly může mít lepší cyklus než žena s dvaceti. Vaše konkrétní čísla a šance vám řekne vaše klinika — obecné procento z internetu neplatí pro nikoho konkrétního.

## Jak si z kontroly odnést maximum

- Ptejte se na **největší folikul a na počet těch nad určitou velikost** — právě podle nich se plánuje trigger.
- Zapisujte si data do jedné tabulky: datum, počet vpravo, počet vlevo, největší velikost, endometrium, estradiol.
- Ptejte se, **kdy je další kontrola a co by mohlo změnit plán.**
- Když vám něco nesedí, řekněte to nahlas přímo v ordinaci. Zpětně po telefonu je to vždy těžší.

## Co s tím, když vám kontroly ničí práci

Ranní odběry a ultrazvuky několikrát týdně jsou reálný organizační problém. Máte nárok na potvrzení o návštěvě lékaře. Zvažte, jestli chcete zaměstnavateli říct důvod — nemusíte, stačí, že jde o lékařskou péči.

## Kdy volat lékaře

Mezi kontrolami volejte, pokud se objeví silná bolest břicha, rychlé nafouknutí, dušnost, výrazné zvracení nebo prudké snížení množství moči. Nečekejte na plánovaný termín.

> Tento text vysvětluje princip vyšetření a nenahrazuje lékařskou péči. Vaše čísla interpretuje pouze váš ošetřující lékař.`,
      minutes: 7,
      phases: ['stimulation'],
      dayRange: [3, 12],
      topics: ['stimulace', 'vysledky', 'klinika', 'hormony'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro ovariální stimulaci', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-09-25',
      boost: 0.85,
    },
    {
      id: 'cyk-velikost-folikulu',
      kind: 'article',
      title: 'Co znamená velikost folikulů v milimetrech',
      excerpt:
        'Čtrnáct, sedmnáct, dvacet dva. Tady je, proč se lékař dívá právě na tahle čísla a co z nich plyne.',
      body: `## Folikul není vajíčko

Nejdřív to nejdůležitější, protože se to plete skoro každé: **folikul je tekutinou vyplněný váček ve vaječníku, ve kterém vajíčko dozrává.** Ultrazvuk vidí folikul. Vajíčko uvnitř nevidí — je mikroskopické. Proto se velikost folikulu používá jako **nepřímý ukazatel zralosti** vajíčka. Není to totéž, ale je to nejlepší, co se dá neinvazivně změřit.

Z toho plyne i to, proč se počet odebraných vajíček skoro nikdy nerovná počtu folikulů. Některé folikuly jsou prázdné, jiné obsahují nezralé vajíčko.

## Jak folikuly rostou

Na začátku stimulace mají folikuly typicky několik milimetrů. Během stimulace **rostou zhruba o jeden až dva milimetry denně**, když dávka sedí. Rychlost není konstantní: menší folikuly rostou pomaleji, ke konci se tempo obvykle zrychlí.

Lékař proto na kontrole nesleduje jen dnešní číslo, ale **rozdíl proti minulé kontrole**. Skupina, která roste rovnoměrně o dva milimetry denně, je lepší zpráva než jeden folikul, který vyskočil dopředu a zbytek stagnuje.

## Orientační pásma, která uslyšíte

Konkrétní hranice se u jednotlivých pracovišť liší a **rozhoduje vždy váš lékař**, ale orientačně:

- **Do zhruba 10 mm** — folikul roste, vajíčko uvnitř je s velkou pravděpodobností ještě nezralé.
- **Kolem 12–14 mm** — v tomhle pásmu se v antagonistickém protokolu obvykle přidává antagonista, aby nedošlo k předčasné ovulaci.
- **Zhruba 16–22 mm** — pásmo, ve kterém se nejčastěji nacházejí zralá vajíčka. Právě podle počtu folikulů v tomhle rozmezí se plánuje trigger.
- **Nad 22–24 mm** — folikul může být přezrálý a vajíčko v něm už nemusí být použitelné.

Právě proto je načasování triggeru kompromis: čeká se, dokud nedozraje co nejvíc folikulů, ale ne tak dlouho, aby ty vedoucí přezrály nebo aby došlo k ovulaci.

## Proč se nikdy nedozrají všechny

Skupina folikulů není nikdy dokonale srovnaná. Když se počká na malé, velké přerostou. Když se triggeruje brzy, velké jsou akorát, ale malé zůstanou nezralé. **Lékař hledá bod, kdy je zralých co nejvíc** — a nějakou ztrátu na obou koncích spektra počítá dopředu.

To vysvětluje větu, kterou po odběru slyší skoro každá žena: „Odebrali jsme dvanáct vajíček, deset bylo zralých." Ty dvě nezralé nejsou chyba, jsou daň za to, že se čekalo na těch deset.

## Co znamená, když jich roste málo

Pokud jich roste méně, než se čekalo, lékař může upravit dávku, prodloužit stimulaci nebo cyklus zrušit a příště zvolit jiný protokol. Zrušený cyklus je frustrující, ale je to rozhodnutí ve váš prospěch — neplýtvá se odběrem, u kterého se předem ví, že skoro nic nepřinese.

**Málo folikulů neznamená špatná vajíčka.** Kvalita a počet jsou dvě různé věci a u některých žen přinesou tři vajíčka lepší výsledek než u jiné patnáct.

## Co znamená, když jich roste hodně

Vysoký počet je z hlediska zisku vajíček dobrá zpráva a zároveň zvyšuje **riziko OHSS**. Klinika na to reaguje — může snížit dávku, změnit typ triggeru, odložit transfer a všechna embrya zamrazit. Nic z toho není známka toho, že by se něco pokazilo. Je to řízení rizika.

## Jak si vést vlastní tabulku

Sloupce, které vám dají smysl:

1. Datum kontroly
2. Počet folikulů vpravo / vlevo
3. Velikost tří největších
4. Kolik je nad 14 mm
5. Endometrium v mm
6. Estradiol
7. Pokyn kliniky (dávka, další kontrola)

Po třech kontrolách uvidíte vlastní křivku a přestanete se tolik děsit každého jednotlivého čísla.

## Poslední věc

Čísla se stanou vaší posedlostí — je to naprosto normální, protože jsou to jediná data, která v téhle fázi máte. Jen si pamatujte, že **žádné jednotlivé číslo neurčuje výsledek**. Určuje ho až souhrn, který uvidíte za dva týdny.

> Text popisuje obecné principy hodnocení. Vaše konkrétní nálezy může interpretovat pouze váš ošetřující lékař.`,
      minutes: 7,
      phases: ['stimulation'],
      dayRange: [4, 12],
      topics: ['stimulace', 'vysledky', 'embryologie'],
      level: 'deep',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro ovariální stimulaci'],
      publishedOn: '2025-09-29',
      boost: 0.8,
    },
    {
      id: 'cyk-hormony-behem-stimulace',
      kind: 'article',
      title: 'Estradiol, LH, progesteron: co se sleduje v krvi a proč',
      excerpt:
        'Ultrazvuk ukáže obal, krev ukáže obsah. Tady je, co která hodnota při stimulaci vypovídá.',
      body: `## Proč nestačí ultrazvuk

Ultrazvuk vidí, jak folikuly vypadají. Krev ukazuje, **jak pracují**. Teprve dohromady dávají obrázek, na jehož základě lékař mění dávky a plánuje trigger. Proto vám při skoro každé kontrole nabírají krev, i když už jste na sonu byla.

## Estradiol (E2)

Hlavní hormon, který produkují rostoucí folikuly. Během stimulace **jeho hladina stoupá zhruba úměrně počtu a velikosti zrajících folikulů**.

Co z toho lékař čte:

- **Rovnoměrný vzestup** = folikuly rostou tak, jak mají.
- **Stagnace nebo pokles** může znamenat slabší odpověď na dávku nebo to, že se skupina folikulů rozpadá.
- **Velmi rychlý a vysoký vzestup** je varovná vlajka pro riziko OHSS. Klinika na to reaguje změnou dávky nebo typu triggeru.

Neexistuje jedno „správné" číslo. Hodnota se posuzuje **v kontextu počtu folikulů** — vysoký estradiol při pěti folikulech znamená něco jiného než při dvaceti. Laboratoře navíc používají různé jednotky a různá referenční rozmezí, takže srovnávání čísel s někým jiným je bezcenné.

## LH (luteinizační hormon)

Hormon, jehož prudký vzestup v přirozeném cyklu spouští ovulaci. Během stimulace je **předčasný vzestup LH problém**: znamenal by, že vajíčka odejdou dřív, než je lékař stihne odebrat.

Celý antagonistický i agonistický protokol existuje právě proto, aby se tomuhle zabránilo. Kontrolní odběr LH tedy hlídá, jestli blokáda funguje.

## Progesteron

Sleduje se hlavně ke konci stimulace. **Předčasný vzestup progesteronu** před triggerem může znamenat, že se děložní sliznice posunula ve svém vývoji dřív než embryo — takzvaně se rozejde okno pro uhnízdění.

Praktický důsledek: klinika může doporučit **odložit transfer a zamrazit všechna embrya**, aby se transfer udělal v pozdějším, lépe připraveném cyklu. Zní to jako komplikace a přitom je to rozhodnutí, které vaši šanci chrání.

## Co se ještě může sledovat

Podle protokolu a vaší anamnézy může přibýt FSH, prolaktin, hormony štítné žlázy nebo krevní obraz. **U žen s onemocněním štítné žlázy se hodnoty během stimulace mění a často vyžadují úpravu léčby** — pokud štítnou žlázu léčíte, ujistěte se, že o tom váš reprodukční tým ví.

## Proč vám nikdo neřekne „to je dobré číslo"

Protože to samo o sobě dobré ani špatné není. Hormonální hodnota má smysl jen ve třech kontextech:

1. **Vůči dni stimulace** — čtvrtý den vypadá jinak než desátý.
2. **Vůči vašemu předchozímu odběru** — trend je důležitější než bod.
3. **Vůči ultrazvuku** — číslo bez počtu folikulů nic neznamená.

Když si tedy budete googlit „estradiol 1800 osmý den", najdete stovky protichůdných odpovědí a žádná z nich nebude o vás.

## Co s tím, když si výsledky vyzvednete dřív než pokyn

Řada laboratoří dnes posílá výsledky do aplikace nebo e-mailem dřív, než vám zavolá klinika. Doporučení, které nikdo nechce slyšet a přesto funguje: **počkejte na telefonát.** Hodina strávená v tabulkách referenčních hodnot vám nezmění dávku, jen zvýší tep.

Pokud se nemůžete udržet, aspoň si zapište otázku a položte ji celou při telefonátu, místo abyste si na ni odpovídala sama.

## Kdy volat lékaře

Volejte, aniž byste čekala na plánovanou kontrolu, pokud máte silnou bolest břicha, rychlý přírůstek hmotnosti (řádově kilogram a víc za den), výrazně nafouklé břicho, dušnost, zvracení nebo výrazně menší množství moči. Tohle jsou příznaky, u kterých nezáleží na tom, jaká byla vaše poslední hodnota estradiolu.

> Tento text vysvětluje obecné principy. Interpretace vašich laboratorních hodnot patří výhradně vašemu ošetřujícímu lékaři a nenahrazuje ji žádný článek.`,
      minutes: 7,
      phases: ['stimulation'],
      dayRange: [3, 12],
      topics: ['hormony', 'vysledky', 'stimulace'],
      modifiers: ['thyroid'],
      level: 'deep',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro ovariální stimulaci', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-03',
    },
    {
      id: 'cyk-trigger-injekce',
      kind: 'article',
      title: 'Trigger: injekce, u které se počítají minuty',
      excerpt:
        'Jediná injekce celého cyklu, kterou opravdu nesmíte posunout ani o půl hodiny. Tady je proč.',
      body: `## Co trigger dělá

Dokončovací injekce — česky se jí říká trigger, spouštěč nebo „ta poslední" — má dva úkoly:

1. **Dokončit zrání vajíček.** Vajíčka v folikulech jsou až do téhle chvíle rozpracovaná. Trigger spustí poslední fázi zrání, při které se vajíčko zbaví poloviny své genetické výbavy a stane se schopným oplození.
2. **Uvolnit vajíčko ze stěny folikulu**, aby se dalo při odběru odsát.

Bez triggeru by lékař nasál folikuly a nenašel v nich prakticky nic použitelného.

## Proč se počítají minuty

Tělo na trigger reaguje podle vlastního biologického rozvrhu. **Zrání trvá zhruba 34 až 38 hodin a odběr se plánuje těsně před tím, než by folikuly praskly samy.** To okno je úzké.

- **Příliš brzy odebráno** = vajíčka nejsou dozrálá a nejdou oplodnit.
- **Příliš pozdě** = folikuly praskly, vajíčka jsou v dutině břišní a odběr je prázdný.

Proto vám sestra řekne čas s přesností na minuty, například „ve 21:45". Není to teatrálnost. Je to matematika zpětně odpočítaná od hodiny, na kterou máte přijít na sál.

## Jak se to nedá pokazit

Praktické pojistky, které fungují:

- **Nastavte si dva budíky**, jeden na 30 minut předem, druhý na přesný čas.
- **Připravte si lék o hodinu dřív** — vybalte, přečtěte, položte na stůl.
- **Řekněte to nahlas partnerovi nebo kamarádce.** Druhý člověk, který ten čas zná, je nejlepší záloha.
- **Nikam ten večer nechoďte.** Ne restaurace, ne kino, ne návštěva. Doma, v klidu.
- **Zapište si čas, kdy jste skutečně píchla**, i s minutou. Klinika se na to ráno zeptá.

Pokud píchnete o pár minut později, nic dramatického se neděje — jen to **hned ohlaste klinice** a nechte je rozhodnout. Pokud byste zapomněla úplně nebo se odchýlila o hodinu a víc, **volejte okamžitě, i uprostřed noci.** Existují postupy, jak to řešit, ale musí se rozhodnout hned.

## Jaké typy triggeru existují

Rozhodnutí patří lékaři a řídí se protokolem a rizikem OHSS:

- **hCG trigger** — nejdéle používaná varianta. Napodobuje přirozený vzestup LH. Nevýhoda: působí v těle dlouho a u vysokých odpovědí zvyšuje riziko OHSS.
- **Agonistický trigger** — použitelný pouze v antagonistickém protokolu. Vyvolá vlastní krátký výdej LH. **Výrazně snižuje riziko těžkého OHSS** a proto se často volí u žen s velkým počtem folikulů nebo s PCOS. Vyžaduje jiný postup podpory luteální fáze nebo zamrazení všech embryí.
- **Duální trigger** — kombinace obojího, používá se v konkrétních situacích.

Když vám změní typ triggeru na poslední chvíli, nejde o improvizaci. Jde o reakci na to, co ukázaly folikuly a krev.

## Co se děje mezi triggerem a odběrem

Zhruba 36 hodin, během kterých:

- **Se nesmí píchat další stimulace**, pokud vám lékař neřekne jinak.
- Budete pravděpodobně cítit **tlak, plnost a tupou bolest v podbřišku.** Vaječníky jsou teď opravdu velké.
- Platí **lačnění** podle pokynů kliniky před výkonem v anestezii — obvykle od půlnoci nic nejíst a v posledních hodinách ani nepít.
- **Vyhněte se pohlavnímu styku, sportu, prudkým pohybům a zvedání těžkého.** Zvětšené vaječníky se mohou zkroutit kolem své osy.

## Kdy volat lékaře

Neodkládejte telefonát, pokud se v téhle fázi objeví:

- **prudká, jednostranná bolest břicha**, zvlášť se zvracením — podezření na torzi vaječníku,
- **náhlé zhoršení nafouknutí a dušnost**,
- **teplota nad 38 °C**,
- **mdloba nebo výrazná slabost**,
- nebo když si **nejste jistá, jestli a kdy jste trigger aplikovala**.

## A pak už jen spát

Většina žen tuhle noc skoro nespí. Je to jediná noc celého cyklu, kdy je opravdu všechno rozhodnuté a vy s tím už nemůžete nic udělat. Zkuste to vzít jako úlevu, ne jako bezmoc.

> Tento text popisuje obecné principy. Typ triggeru, dávku i přesnou hodinu určuje výhradně váš ošetřující lékař a jeho pokyn má vždy přednost.`,
      minutes: 8,
      phases: ['stimulation', 'retrieval'],
      dayRange: [8, 13],
      topics: ['stimulace', 'leky', 'hormony', 'klinika'],
      level: 'essential',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro ovariální stimulaci', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-08',
      boost: 1,
    },
    {
      id: 'cyk-ohss-varovne-priznaky',
      kind: 'article',
      title: 'OHSS: varovné příznaky a kdy okamžitě volat',
      excerpt:
        'Nadmuté břicho po stimulaci má skoro každá. Tady je hranice, za kterou už se nečeká do rána.',
      body: `## Co je OHSS

Ovariální hyperstimulační syndrom je **komplikace stimulace**, při které vaječníky přehnaně reagují a z cév začne unikat tekutina do dutiny břišní, případně do prostoru kolem plic. Vaječníky jsou zvětšené, břicho se plní tekutinou a krev se zahušťuje.

Většina případů je **mírná** a odezní sama během několika dní. Malá část je středně těžká a **vzácně** vzniká těžká forma, která patří do nemocnice. Právě proto se v tomhle textu nemluví o tom, jestli k tomu dojde, ale o tom, **podle čeho poznáte, že už je čas zvednout telefon.**

## Kdo je ve větším riziku

- Ženy s **PCOS**
- **Vysoké AMH** a vysoký počet antrálních folikulů
- **Velký počet folikulů** během stimulace a rychle rostoucí estradiol
- **Nižší věk** a nižší tělesná hmotnost
- OHSS v **předchozím cyklu**

Klinika tohle ví předem a přizpůsobuje tomu protokol, dávky, typ triggeru i to, jestli se transfer udělá teď, nebo se všechna embrya zamrazí. **Zamrazení všech embryí je jedna z nejúčinnějších prevencí těžkého OHSS**, protože otěhotnění průběh zhoršuje.

## Kdy se objevuje

Ve dvou vlnách:

- **Časná forma** — obvykle 3 až 7 dní po triggeru či odběru.
- **Pozdní forma** — zhruba 9 a více dní po odběru, spojená s nastupujícím těhotenstvím. Bývá vleklejší.

To znamená, že **pozornost nekončí odběrem.** Právě týden po něm je období, kdy je potřeba se sledovat nejvíc.

## Co je ještě očekávané

Po odběru běžně bývá:

- mírné nadmutí a tlak v podbřišku,
- pocit těžkých vaječníků,
- lehká zácpa a plynatost,
- mírné špinění,
- únava.

Tohle **postupně ustupuje.** Klíčové slovo je postupně. Zhoršování je vždy důvod ozvat se.

## Kdy volat lékaře — okamžitě

Nečekejte na ordinační hodiny, nečekejte do rána. **Volejte na kliniku nebo na pohotovost, pokud se objeví:**

- **Prudká nebo rychle se zhoršující bolest břicha**, kterou neztlumí běžné analgetikum.
- **Nárůst hmotnosti o víc než přibližně 1 kg za den** nebo víc než 3 kg celkem.
- **Rychle rostoucí obvod břicha**, břicho tvrdé a napjaté.
- **Dušnost**, potíže s dýcháním vleže, nutnost spát vsedě.
- **Výrazně menší množství moči** nebo močení méně než jednou za 6–8 hodin, tmavá moč.
- **Opakované zvracení** nebo neschopnost udržet tekutiny.
- **Závrať, mdloba, bušení srdce.**
- **Bolest, otok nebo zarudnutí lýtka**, bolest na hrudi — podezření na trombózu.
- **Teplota nad 38 °C.**

Když váháte, jestli je to „ještě normální", je to samo o sobě důvod zavolat. Sestra na klinice tenhle telefonát slyší denně a nikdo vás nebude považovat za hysterickou.

## Co si sledovat doma

Jednoduchý domácí monitoring, který dává lékaři cenná data:

1. **Vážte se každé ráno**, nalačno, na stejné váze, a zapisujte.
2. **Změřte si obvod břicha** krejčovským metrem ve stejné výšce, jednou denně.
3. **Sledujte, kolik vypijete a kolikrát močíte.**
4. Zapište si, **jak bolest reaguje na běžnou úlevu** — polohu, teplo, analgetikum podle doporučení lékaře.

Tenhle zápis vezměte s sebou, když budete volat. Zkrátí telefonát na polovinu.

## Co pomáhá při mírné formě

Vždy podle konkrétního doporučení vaší kliniky, obecně se doporučuje:

- **Dostatek tekutin** — často se doporučují nápoje s obsahem minerálů, ne jen čistá voda.
- **Klid, ale ne úplné ležení** — pohyb v bytě snižuje riziko trombózy.
- **Dostatek bílkovin** ve stravě.
- **Vyhnout se pohlavnímu styku, sportu a zvedání těžkého.**
- **Nepoužívat léky proti bolesti na vlastní pěst** — některá běžná analgetika nejsou v téhle situaci vhodná. Zeptejte se, co si vzít smíte.

## Věta, kterou si zapamatujte

Mírný OHSS je nepříjemná daň za dobrou odpověď vaječníků. Těžký OHSS je stav, který se dá zvládnout, **když se přijde včas.** Vaše jediná úloha je nečekat.

> Tento text nenahrazuje lékařskou péči. Při jakémkoli z uvedených příznaků kontaktujte svou kliniku nebo lékařskou pohotovostní službu.`,
      minutes: 8,
      phases: ['stimulation', 'retrieval', 'fertilization', 'embryo_culture'],
      dayRange: [6, 14],
      topics: ['stimulace', 'hormony', 'klinika'],
      modifiers: ['pcos'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy k prevenci a léčbě OHSS',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-10-12',
      boost: 1,
    },
    {
      id: 'cyk-checklist-vybava-stimulace',
      kind: 'checklist',
      title: 'Domácí výbava na stimulaci: co mít připravené první den',
      excerpt:
        'Deset minut nákupu předem vám ušetří tři paniky v šest ráno. Odškrtejte si to dřív, než začnete.',
      body: `## K čemu tenhle seznam je

Stimulace není medicínsky náročná pro vás — je náročná **organizačně**. Píchá se každý den, často ve stejnou hodinu, k tomu chodíte na kontroly a mezitím žijete normální život. Většina chaosu vzniká z toho, že něco chybí, něco došlo nebo něco není po ruce.

Projděte tenhle seznam ideálně **dva dny před startem**, ne ráno v den prvního píchnutí.

## Jak s ním pracovat

Položky jsou rozdělené do čtyř skupin. Nepovinné jsou označené — jsou to věci, které pomáhají, ale bez kterých se dá přežít.

Až budete mít hotovo, **postavte všechno na jedno místo**, ideálně do jedné krabice, kterou nikdo jiný v domácnosti neotevírá. Léky do lednice podle pokynů, zbytek do krabice.

Poslední rada: **kupte si dvě jehly navíc.** Pero se dá upustit, jehla se dá ohnout a lékárna má v neděli zavřeno.

> Seznam je obecný. Konkrétní léky, pomůcky a rozpis vám určí vaše klinika a její pokyny mají vždy přednost.`,
      minutes: 4,
      phases: ['ivf_prep', 'stimulation'],
      dayRange: [0, 2],
      topics: ['leky', 'stimulace', 'klinika'],
      level: 'essential',
      hero: 'linen',
      author: 'Tým Bloomia',
      publishedOn: '2025-10-16',
      boost: 0.75,
      checklist: [
        { id: 'cyk-ch-leky-vyzvednuto', text: 'Vyzvednuté všechny léky podle receptu', hint: 'Zkontrolujte názvy proti rozpisu od lékaře, ne z paměti.', group: 'Léky' },
        { id: 'cyk-ch-leky-expirace', text: 'Zkontrolovaná expirace na každém balení', group: 'Léky' },
        { id: 'cyk-ch-lednice', text: 'Léky do chladničky uložené do střední police, ne do dvířek', hint: 'Ve dvířkách teplota nejvíc kolísá, u zadní stěny hrozí zmrznutí.', group: 'Léky' },
        { id: 'cyk-ch-teplomer', text: 'Teploměr do chladničky', optional: true, group: 'Léky' },
        { id: 'cyk-ch-jehly', text: 'Jehly a stříkačky včetně dvou kusů navíc', group: 'Pomůcky' },
        { id: 'cyk-ch-dezinfekce', text: 'Dezinfekční čtverečky', group: 'Pomůcky' },
        { id: 'cyk-ch-kontejner', text: 'Nádoba na ostrý odpad', hint: 'Dostanete ji v lékárně, plnou tam vrátíte.', group: 'Pomůcky' },
        { id: 'cyk-ch-led', text: 'Chladicí gelový polštářek nebo formička na led', hint: 'Třicet vteřin chladu před vpichem výrazně snižuje bolest.', optional: true, group: 'Pomůcky' },
        { id: 'cyk-ch-mast', text: 'Mast na modřiny doporučená lékárníkem', optional: true, group: 'Pomůcky' },
        { id: 'cyk-ch-rozpis', text: 'Papírový rozpis dávek vytištěný a pověšený na lednici', hint: 'Papír nevybije baterii.', group: 'Organizace' },
        { id: 'cyk-ch-budiky', text: 'Nastavené denní budíky na čas aplikace', group: 'Organizace' },
        { id: 'cyk-ch-kontakt', text: 'Telefon na kliniku uložený v mobilu i napsaný na papíře', hint: 'Včetně čísla pro mimopracovní dobu.', group: 'Organizace' },
        { id: 'cyk-ch-tabulka', text: 'Založená tabulka na zápis kontrol (folikuly, endometrium, estradiol)', optional: true, group: 'Organizace' },
        { id: 'cyk-ch-prace', text: 'Zorientovaný kalendář — ranní kontroly a možný termín odběru', group: 'Organizace' },
        { id: 'cyk-ch-kalhoty', text: 'Volnější kalhoty nebo sukně na druhý týden stimulace', hint: 'Nafouknuté břicho v úzkém pase je zbytečné utrpení.', group: 'Vy' },
        { id: 'cyk-ch-podpora', text: 'Jeden člověk, kterému jste řekla, že cyklus začíná', hint: 'Nemusí to být rodina. Stačí jeden.', group: 'Vy' },
        { id: 'cyk-ch-jidlo', text: 'Zásoba jednoduchého jídla na dny, kdy nebudete mít sílu vařit', optional: true, group: 'Vy' },
      ],
    },
    {
      id: 'cyk-video-technika-vpichu',
      kind: 'video',
      title: 'Video: ruka na břiše, jehla, výdech',
      excerpt:
        'Sedm minut, ve kterých uvidíte celý postup zblízka a beze spěchu — od mytí rukou po nádobu na ostrý odpad.',
      body: `## Co ve videu uvidíte

Video je natočené z pohledu první osoby, tedy tak, jak to uvidíte vy sama, když se podíváte dolů na vlastní břicho. Žádné animace, žádné modelky s dokonalým bříškem — reálné ruce, reálný stůl v kuchyni.

**Minuta 0–1: příprava plochy.** Mytí rukou, prostření čisté utěrky, vyskládání pomůcek zleva doprava v pořadí, ve kterém je budete potřebovat. Uvidíte, proč se pořadí vyplatí dodržet.

**Minuta 1–2: kontrola léku.** Přečtení názvu, koncentrace a expirace nahlas. Ukazujeme, jak vypadá správně rozpuštěný roztok a co je důvod, aby lahvička skončila v koši a vy u telefonu.

**Minuta 2–3: nastavení dávky na peru.** Zblízka na displej, včetně toho, jak se dávka opravuje, když ji přetočíte, a jak se dělá odvzdušnění.

**Minuta 3–5: samotný vpich.** Uchopení kožní řasy, úhel, rychlý pohyb dovnitř, pomalé vytlačení, počítání do deseti, vytažení. Uvidíte i to, jak vypadá kapka krve po vytažení a proč se místo netře.

**Minuta 5–6: po vpichu.** Odhození jehly do kontejneru, přiložení suchého čtverečku, zápis do rozpisu.

**Minuta 6–7: mapa břicha.** Kreslíme na břicho čtyři kvadranty a ukazujeme systém střídání míst, aby se stejný bod nepoužil dřív než za týden.

## Proč to stojí za sedm minut

Většina žen si první injekci nastuduje z letáku a pak stojí půl hodiny nad stolem, protože leták neukazuje **tempo**. Nejčastější chyby jsou dvě: příliš pomalé zapíchnutí a příliš rychlé vytlačení léku. Obojí se dá odkoukat za minutu a přečíst se dá jen těžko.

## Než pustíte

Připravte si vlastní pomůcky a pusťte si video **při skutečné aplikaci**, ne jen jako přípravu. Pauzujte, kdykoli potřebujete.

> Video ukazuje obecnou techniku podkožní aplikace. Konkrétní přípravek, dávku i způsob podání vám určí vaše klinika a její pokyny mají přednost.`,
      minutes: 7,
      phases: ['ivf_prep', 'stimulation'],
      dayRange: [0, 4],
      topics: ['leky', 'stimulace'],
      level: 'essential',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-10-20',
      mediaNote:
        'Sedmiminutové video z pohledu první osoby: příprava pomůcek, kontrola léku, nastavení dávky na peru, vpich zblízka, likvidace jehly a mapa střídání míst na břiše. Bez hudby, jen klidný komentář a reálný zvuk kuchyně.',
      boost: 0.7,
    },
    {
      id: 'cyk-den-odberu-krok-za-krokem',
      kind: 'article',
      title: 'Den odběru krok za krokem: od příjezdu po propuštění',
      excerpt:
        'Většinu strachu z odběru dělá to, že nevíte, co se bude dít. Tady je celý den po hodinách.',
      body: `## Ráno doma

Budík obvykle brzy, protože odběry se plánují na dopoledne. Co platí skoro všude:

- **Lačnit** podle pokynů kliniky. Obvykle od půlnoci nejíst, poslední hodiny ani nepít. Tohle není doporučení, ale bezpečnostní podmínka pro anestezii.
- **Neužívat léky bez konzultace.** Chronickou medikaci vždy předem projděte s lékařem, který ví, že vás čeká výkon v anestezii.
- **Bez líčení, bez laku na nehty, bez parfému.** Barva nehtů brání měření okysličení krve na prstu.
- **Bez šperků, bez kontaktních čoček.** Vezměte si brýle.
- **Sprcha, žádné krémy na břicho.**
- **Volné oblečení**, ve kterém pojedete zpátky s nafouknutým břichem.

Partner nebo doprovod **musí být domluvený předem** — po anestezii nesmíte řídit ani jet sama.

## Příjezd na kliniku

Obvykle vás čeká administrativa: kontrola totožnosti, podpis informovaného souhlasu, doplnění dotazníku pro anesteziologa. **Souhlas si přečtěte, i když se vám nechce** — je v něm napsané, co se stane s vajíčky a embryi, a tohle je poslední chvíle na otázky.

Pak se převléknete do jednorázového prádla, dostanete náramek s identifikací a čekáte. Čekání může být dlouhé, sály jedou v pořadí.

Pokud partner odevzdává vzorek, dělá se to obvykle ve stejnou dobu v oddělené místnosti. Pokud používáte zamražený vzorek nebo dárcovské spermie, embryologie je připraví.

## Na sále

1. **Zavedení kanyly** do žíly na ruce — jediný vpich, který ten den ucítíte při vědomí.
2. **Napojení monitorů** na tep, tlak a okysličení.
3. **Kontrola identity a plánu** — uslyšíte, jak tým nahlas ověřuje vaše jméno a rodné číslo. Tohle se dělá schválně a víckrát.
4. **Podání anestezie.** Usnete během několika desítek vteřin.
5. **Samotný odběr** trvá obvykle 10 až 20 minut. Lékař pod ultrazvukovou kontrolou zavede tenkou jehlu přes poševní stěnu do vaječníku a postupně odsaje tekutinu z jednotlivých folikulů. Žádný řez, žádné stehy.
6. **Předání embryologovi.** Zkumavky putují okénkem přímo do laboratoře, která je hned vedle sálu. Embryolog pod mikroskopem vyhledá vajíčka v odsáté tekutině.

## Probuzení

Probudíte se na dospávacím pokoji, obvykle do několika minut po skončení. Co je běžné:

- **zimnice a třes** — reakce na anestezii, přejde,
- **pocit tlaku a křeče** jako při silnější menstruaci,
- **nevolnost** u části žen,
- **slabé krvácení nebo špinění** z pochvy,
- **zmatenost a plačtivost.** Anestezie i hormony dělají svoje. Pokud se rozbrečíte, není to znamení, že se něco pokazilo.

Sestra vám nabídne pití a něco malého k jídlu. Zůstáváte pod dohledem obvykle jednu až tři hodiny.

## Číslo, které uslyšíte

Před propuštěním vám embryolog nebo lékař řekne **počet získaných vajíček**. Někdy zazní i počet zralých, častěji až druhý den při telefonátu.

Připravte se dopředu na to, že **to číslo bude jiné, než jste čekala.** Skoro vždycky je. Bývá nižší než počet folikulů — je to normální a bylo to popsané už v článku o velikosti folikulů. Nekomentujte to hned, nezpracujete to na dospávacím pokoji.

## Cesta domů a zbytek dne

Doprovod, klid, tekutiny, volné oblečení. **Zbytek dne nic neplánujte.** Ne úklid, ne e-maily, ne návštěvy. Ležení celý den ale není nutné — krátká chůze po bytě je lepší než nehybnost.

Dostanete pokyny k **podpoře luteální fáze** (obvykle progesteron) a informaci, kdy vám bude embryologie volat.

## Kdy volat lékaře

Po propuštění volejte, pokud se objeví:

- **silná bolest břicha**, která nereaguje na doporučené analgetikum,
- **krvácení silnější než běžná menstruace** nebo krvácení, které se zhoršuje,
- **teplota nad 38 °C**,
- **závrať, mdloba, bušení srdce**,
- **prudké nafouknutí břicha, dušnost, zvracení nebo výrazně méně moči** — varovné příznaky OHSS,
- **bolest v rameni** — může být příznakem dráždění bránice tekutinou v břiše.

> Tento popis je obecný. Průběh se u jednotlivých pracovišť liší a závazné jsou vždy pokyny vaší kliniky a vašeho lékaře.`,
      minutes: 8,
      phases: ['retrieval'],
      dayRange: [0, 0],
      topics: ['klinika', 'stimulace', 'embryologie'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-10-24',
      boost: 1,
    },
    {
      id: 'cyk-anestezie-u-odberu',
      kind: 'article',
      title: 'Anestezie u odběru: co dostanete a čeho se bát nemusíte',
      excerpt:
        'Bát se uspání je normální. Tady je, jak to u odběru vajíček obvykle vypadá a na co se zeptat anesteziologa.',
      body: `## Jaké možnosti existují

U odběru vajíček se nejčastěji používá **krátkodobá nitrožilní anestezie** — někdy se jí říká analgosedace. Znamená to, že dostanete do žíly kombinaci léků, po kterých usnete, nic necítíte a nic si nepamatujete. Nedýchá se za vás trubicí, dýcháte sama, jen máte kyslík.

Méně často se používá:

- **Celková anestezie** s zajištěním dýchacích cest — spíš ve zvláštních situacích.
- **Lokální znecitlivění** samotné poševní stěny, případně s mírným tlumením. Používá se, když je odběr velmi krátký nebo když anestezie není vhodná.
- **Spinální anestezie** — vzácněji.

**Výběr metody je rozhodnutí anesteziologa** podle vašeho zdravotního stavu, počtu folikulů a zvyklostí pracoviště.

## Před výkonem

Vyplníte **anesteziologický dotazník**. Berte ho vážně a odpovídejte úplně, i na věci, které vám připadají nepodstatné:

- chronické nemoci a všechny užívané léky včetně doplňků,
- alergie, zvlášť na léky, jód a náplasti,
- předchozí anestezie a jak jste je snášela,
- nevolnost po předchozí anestezii,
- problémy se zuby (uvolněné zuby, korunky, můstky),
- kouření,
- kdy jste naposledy jedla a pila.

Pokud jste někdy měla po anestezii silnou nevolnost, řekněte to nahlas. Dá se to preventivně řešit.

## Lačnění není formalita

Pravidlo o nejedení a nepití má jediný důvod: **při usínání se vypíná reflex, který brání vdechnutí obsahu žaludku.** Vdechnutí žaludečního obsahu je vzácná, ale vážná komplikace. Proto se výkon při porušení lačnění odkládá — a je to správně.

Přesné časy vám dá klinika. Obvykle několik hodin bez jídla a kratší interval bez tekutin.

## Jak to probíhá

Anesteziolog vám zavede kanylu, připojí monitory a řekne, že teď to začne působit. Většina žen popisuje, že cítily chlad v ruce, chtěly něco říct — a probudily se.

**Během výkonu je u vás celou dobu anesteziolog**, který sleduje tep, tlak, dýchání a hloubku spánku. Odběr je krátký, takže i dávka léků je malá.

## Probuzení a prvních pár hodin

Co je běžné a přejde:

- **zimnice a třes**,
- **sucho v ústech a škrábání v krku**,
- **nevolnost**, u části žen zvracení,
- **plačtivost nebo naopak euforie**,
- **rozostřené vnímání času** — hodina vám může připadat jako pět minut.

Co platí zbytek dne:

- **Neřídit auto** a neobsluhovat nic nebezpečného minimálně 24 hodin.
- **Nepodepisovat nic důležitého** — právně i prakticky špatný nápad.
- **Nezůstávat prvních několik hodin sama**, pokud to jde.
- **Nepít alkohol.**

## Otázky, které stojí za to položit

1. Jaký typ anestezie u mě plánujete a proč?
2. Budu spát, nebo budu při vědomí a jen tlumená?
3. Co mám udělat s léky, které užívám ráno?
4. Jak dlouho po výkonu zůstanu na klinice?
5. Co mi můžete dát proti nevolnosti, když ji po anestezii mívám?

## Když se bojíte samotného usnutí

Strach ze ztráty kontroly je jeden z nejčastějších a mluví o něm málokdo. Pomáhá:

- **říct to nahlas anesteziologovi** — je zvyklý a obvykle to výrazně změní způsob, jakým s vámi mluví,
- **mít u sebe do poslední chvíle svou věc** — ponožky, gumičku do vlasů, cokoli vlastního,
- **dýchat pomalu do čtyř a ven do šesti**, když už ležíte na sále,
- **vědět, že je to krátké.** Tohle není operace na tři hodiny.

## Kdy volat lékaře po propuštění

Volejte při dušnosti, bolesti na hrudi, opakovaném zvracení, které vám brání pít, teplotě nad 38 °C, silné bolesti břicha nebo pokud se objeví vyrážka a otok obličeje — to může být pozdní alergická reakce.

> Text popisuje obecný postup. Konkrétní typ anestezie, přípravu i pokyny určuje anesteziolog a lékař vaší kliniky.`,
      minutes: 6,
      phases: ['retrieval', 'ivf_prep'],
      dayRange: [0, 1],
      topics: ['klinika', 'psychika'],
      level: 'essential',
      hero: 'pearl',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['Česká společnost anesteziologie, resuscitace a intenzivní medicíny ČLS JEP — obecné zásady', 'ESHRE — doporučené postupy'],
      publishedOn: '2025-10-28',
      boost: 0.7,
    },
    {
      id: 'cyk-checklist-den-odberu',
      kind: 'checklist',
      title: 'Taška na odběr: co si sbalit a co nechat doma',
      excerpt:
        'Krátký seznam, který si odškrtnete večer před odběrem, abyste ráno jen vzala tašku a šla.',
      body: `## Sbalte se večer, ne ráno

Ráno v den odběru budete nervózní, nevyspalá a hladová. Rozhodování o tom, jestli si vzít ponožky, je v tu chvíli nepřiměřeně těžké. Sbalte se **den předem**, tašku postavte ke dveřím.

## Dvě věci, které nejsou v tašce

**Doprovod.** Po anestezii nesmíte řídit. Domluvte konkrétního člověka a konkrétní čas, ne „napíšu ti, až budu hotová".

**Čas triggeru napsaný na papíře.** Ptají se na něj a v šest ráno si ho nevybavíte přesně.

## Co naopak nechat doma

Šperky, hodinky, lak na nehty, make-up, kontaktní čočky, parfém, cennosti. Šatní skříňky na klinikách jsou obvykle jednoduché a nemá smysl si přidávat starost navíc.

> Seznam je obecný. Vždy dodržte konkrétní pokyny vaší kliniky, zejména ohledně lačnění a užívání léků.`,
      minutes: 3,
      phases: ['retrieval', 'stimulation'],
      dayRange: [0, 1],
      topics: ['klinika', 'sebepece'],
      level: 'essential',
      hero: 'sand',
      author: 'Tým Bloomia',
      publishedOn: '2025-11-01',
      boost: 0.8,
      checklist: [
        { id: 'cyk-od-doklady', text: 'Občanský průkaz a kartička pojišťovny', group: 'Papíry' },
        { id: 'cyk-od-souhlas', text: 'Podepsané dokumenty, které jste dostala předem', group: 'Papíry' },
        { id: 'cyk-od-trigger', text: 'Napsaný přesný čas aplikace triggeru', hint: 'Včetně minut. Ptají se na to.', group: 'Papíry' },
        { id: 'cyk-od-leky-seznam', text: 'Seznam všech léků, které užíváte', group: 'Papíry' },
        { id: 'cyk-od-ponozky', text: 'Teplé ponožky', hint: 'Na sále bývá chladno a po anestezii přichází zimnice.', group: 'Do tašky' },
        { id: 'cyk-od-vlozky', text: 'Vložky (ne tampony)', group: 'Do tašky' },
        { id: 'cyk-od-obleceni', text: 'Volné kalhoty nebo šaty na cestu domů', group: 'Do tašky' },
        { id: 'cyk-od-gumicka', text: 'Gumička do vlasů', group: 'Do tašky' },
        { id: 'cyk-od-bryle', text: 'Brýle místo kontaktních čoček', group: 'Do tašky' },
        { id: 'cyk-od-piti', text: 'Láhev s pitím a malá svačina na po výkonu', hint: 'Až po propuštění, ne před.', group: 'Do tašky' },
        { id: 'cyk-od-nabijecka', text: 'Nabíječka nebo powerbanka', optional: true, group: 'Do tašky' },
        { id: 'cyk-od-sluchatka', text: 'Sluchátka na čekání', optional: true, group: 'Do tašky' },
        { id: 'cyk-od-doprovod', text: 'Domluvený doprovod, který vás odveze domů', hint: 'Řídit po anestezii nesmíte.', group: 'Domluveno' },
        { id: 'cyk-od-volno', text: 'Volno na celý den, ideálně i na následující', group: 'Domluveno' },
        { id: 'cyk-od-lacneni', text: 'Znám přesný čas, od kdy nejím a nepiju', group: 'Domluveno' },
        { id: 'cyk-od-vzorek', text: 'Partner ví, kdy a kam přijde odevzdat vzorek', optional: true, group: 'Domluveno' },
        { id: 'cyk-od-vecer', text: 'Zajištěné jednoduché jídlo na večer', hint: 'Vařit ten den nebudete.', optional: true, group: 'Domluveno' },
      ],
    },
    {
      id: 'cyk-po-odberu-zotaveni',
      kind: 'article',
      title: 'Po odběru: bolest, nadýmání a pitný režim, který skutečně funguje',
      excerpt:
        'Břicho jako v šestém měsíci, tupá bolest a zácpa. Tady je, co je normální a co s tím dělat.',
      body: `## Proč se cítíte jako po nárazu

Vaječníky, které normálně měří pár centimetrů, jsou po stimulaci výrazně zvětšené a při odběru byly propíchnuté několikrát — jednou za každý folikul. Tekutina z odsátých folikulů se částečně vstřebává, částečně dráždí pobřišnici. K tomu doznívá anestezie a začíná podpora progesteronem, která sama o sobě zpomaluje střeva.

Výsledek: **nafouklé, těžké břicho, tupá bolest, zácpa a únava.** Není to komplikace, je to očekávaný stav.

## Co je běžné prvních 48 hodin

- Křeče jako při silnější menstruaci
- Slabé krvácení nebo špinění
- Pocit tlaku v podbřišku, hlavně při vstávání a při kašli
- Nadmutí, plynatost, zácpa
- Únava a potřeba spát
- Výkyvy nálad

Většině žen se výrazně uleví **do dvou až čtyř dní**. Nadmutí a citlivost vaječníků mohou přetrvávat déle, zvlášť při vyšším počtu odebraných vajíček.

## Pitný režim, který pomáhá

Samotná voda ve větším množství nemusí stačit — při přesunech tekutiny v těle se hodí nápoje, které obsahují i minerály a bílkoviny.

- **Pijte pravidelně**, po menších dávkách, průběžně přes den. Cíl si ověřte na klinice, obvykle jde o zvýšený příjem oproti běžnému dni.
- **Kombinujte** vodu s minerální vodou, iontovým nápojem nebo vývarem.
- **Přidejte bílkoviny** ve stravě — jsou to bílkoviny v krvi, které pomáhají udržet tekutinu v cévách.
- **Sledujte, kolik močíte.** Je to nejlepší jednoduchý ukazatel, že jste dobře zavodněná.
- **Vážte se ráno** a zapisujte. Prudký přírůstek je varovný signál.

## Bolest a co si smíte vzít

**Neužívejte léky proti bolesti podle vlastního uvážení.** Některá běžně dostupná analgetika nejsou v této fázi vhodná a mohou ovlivnit další postup léčby. Zeptejte se přímo: „Co si mohu vzít, když mě bude bolet břicho?" a odpověď si zapište.

Co pomáhá i bez léků:

- **Teplo na podbřišek** — nahřívací polštářek, ne horký. Zeptejte se předem, jestli je u vás vhodné.
- **Poloha na boku s pokrčenýma nohama.**
- **Volné oblečení bez gumy v pase.**
- **Pomalá chůze po bytě** několikrát denně. Zlepší střevní pohyb a snižuje riziko trombózy.

## Zácpa a nadmutí

Kombinace anestezie, progesteronu a nehybnosti dokáže střeva zastavit spolehlivě. Prevence je jednodušší než léčba:

- rozpustná vláknina (ovesné vločky, švestky, lněné semínko namočené ve vodě),
- dostatek tekutin,
- pohyb,
- žádné tlačení na stolici — zvýšený nitrobřišní tlak není v téhle fázi vhodný,
- pokud potřebujete něco navíc, **zeptejte se lékaře, který přípravek je pro vás vhodný.**

## Čemu se vyhnout

- **Pohlavní styk** — do doby, kterou určí klinika. Vaječníky jsou zvětšené a citlivé.
- **Sport, běh, skákání, zvedání těžkého** — riziko torze vaječníku.
- **Horká koupel, sauna, vířivka.**
- **Alkohol.**
- **Tampony** — používejte vložky.

## Psychická stránka, o které se mluví míň

Den po odběru je zvláštní. Fyzicky se cítíte nejhůř, adrenalin opadl a zároveň nastupuje čekání na telefonát z embryologie. Spousta žen popisuje **náhlý propad nálady druhý den** — je to kombinace doznívající anestezie, hormonálního zvratu po odebrání folikulů a psychického dojezdu.

Není to znamení, že něco nedopadlo. Je to fyziologie a obvykle to za pár dní odezní.

## Kdy volat lékaře

Volejte na kliniku nebo na pohotovost, pokud se objeví:

- **prudká nebo zhoršující se bolest břicha**, hlavně jednostranná se zvracením,
- **krvácení silnější než menstruace** nebo krvácení se sraženinami,
- **teplota nad 38 °C**,
- **nárůst hmotnosti přes 1 kg za den**, rychle rostoucí obvod břicha,
- **dušnost**, potíže s dýcháním vleže,
- **výrazně menší množství moči**,
- **závrať, mdloba, bušení srdce**,
- **bolest, otok nebo zarudnutí lýtka**.

> Tento text nenahrazuje lékařskou péči. Vždy dodržujte propouštěcí pokyny své kliniky a při pochybnostech volejte.`,
      minutes: 8,
      phases: ['retrieval', 'fertilization', 'embryo_culture'],
      dayRange: [0, 4],
      topics: ['sebepece', 'strava', 'klinika', 'psychika'],
      level: 'essential',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-11-05',
      boost: 0.95,
    },
    {
      id: 'cyk-audio-vecer-pred-odberem',
      kind: 'audio',
      title: 'Poslech na večer před odběrem',
      excerpt:
        'Dvanáct minut na noc, kdy je všechno rozhodnuté a vy nemůžete dělat vůbec nic.',
      body: `## O čem to je

Tahle nahrávka je určená na jednu konkrétní noc: tu mezi triggerem a odběrem. Je to nejpodivnější noc celého cyklu. Deset dní jste každý den něco dělala — píchala, měřila, jezdila na kontroly, zapisovala čísla. A teď nemůžete udělat vůbec nic. Vajíčka dozrávají bez vás.

Nahrávka nezačíná dechovým cvičením. Začíná větou, že je v pořádku ležet a nespat.

**První část (asi 3 minuty)** je o tom, jak vypnout počítání. Ne tak, že si zakážete myslet — to nefunguje —, ale tak, že si dovolíte jednou nahlas projít, co všechno jste udělala. Celý seznam. Až po ten poslední vpich ve 21:45.

**Druhá část (asi 4 minuty)** je klidné, pomalé dýchání s prodlouženým výdechem. Nádech na čtyři, výdech na šest. Prodloužený výdech je jediná věc, kterou umíte vědomě ovlivnit nervový systém, a funguje i tehdy, když tomu nevěříte.

**Třetí část (asi 5 minut)** je vedená pozornost po těle, od chodidel nahoru. Když dojdeme k břichu, nevynecháme ho a nebudeme ho žádat, aby bylo jiné. Břicho je dnes napjaté, těžké a plné. Necháme ho takové.

Nahrávka končí bez pobídky a bez závěrečné věty typu „a teď věřte". Prostě ztichne.

## Pro koho to není

Pokud vám vedený hlas v hlavě přijde spíš rušivý než uklidňující, nesnažte se to vydržet. Vypněte to a pusťte si radši něco, co znáte nazpaměť. Cílem je usnout, ne odposlouchat.

## Praktická poznámka

Než si to pustíte, zkontrolujte dvě věci: že máte nastavený budík na ráno a že vedle postele leží připravené oblečení. Klidnější se usíná, když ráno nečeká rozhodování.

> Nahrávka je podpůrná a nenahrazuje lékařskou ani psychoterapeutickou péči. Pokud vás úzkost dlouhodobě vyčerpává, řekněte o tom svému lékaři.`,
      minutes: 12,
      phases: ['stimulation', 'retrieval'],
      dayRange: [9, 13],
      topics: ['psychika', 'spanek', 'sebepece'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      publishedOn: '2025-11-09',
      mediaNote:
        'Tři části: pojmenování toho, co máte za sebou, dech s prodlouženým výdechem a pomalé projití těla. S pauzami zhruba dvanáct minut. Končí tichem, bez závěrečné výzvy.',
      boost: 0.6,
    },
    {
      id: 'cyk-prace-behem-stimulace',
      kind: 'article',
      title: 'Stimulace vedle práce: co říct, co neříct a jak to zvládnout',
      excerpt:
        'Kontroly ráno, injekce večer a mezitím porady. Tady je, jak si to zorganizovat bez toho, abyste musela vysvětlovat svůj cyklus šéfovi.',
      body: `## Nejdřív realita

Stimulace znamená obvykle **tři až pět návštěv kliniky** rozložených do dvou týdnů, většinou brzy ráno, a den odběru, kdy pracovat nebudete. K tomu únava, nafouklé břicho a hlava, která myslí na folikuly během porady o rozpočtu.

Není to nemoc. Je to léčba, která vyžaduje čas.

## Co má smysl říct a komu

**Nemusíte říkat nic.** Léčba neplodnosti je zdravotní informace a nikdo na ni nemá právo. Zároveň úplné tajení má cenu: vysvětlování ranních zpoždění, výmluvy, strach z odhalení.

Praktický střed, který funguje většině žen:

- **Přímý nadřízený:** „Procházím lékařskou léčbou, která vyžaduje pravidelné ranní kontroly po dobu zhruba dvou až tří týdnů. Ovlivní to můj příchod, ne moje výsledky." Nemusíte specifikovat diagnózu.
- **Personální oddělení:** stačí, když máte potvrzení o návštěvě lékaře.
- **Kolegové:** nic, pokud sama nechcete. Jedna spřátelená kolegyně, která ví, bývá k nezaplacení.

Zvažte, jestli chcete říct, že jde o IVF. Výhoda je pochopení. Nevýhoda jsou otázky ve výtahu za tři týdny — „a tak co, vyšlo to?".

## Jak si to zorganizovat

1. **Ranní bloky.** Naplánujte si první schůzku dne nejdřív na 10:00 po celou dobu stimulace. Termín odběru předem neznáte, ale kontroly ano.
2. **Držte si dva volné dny v kalendáři** kolem předpokládaného odběru — přesunout schůzku je snazší než ji tvořit na poslední chvíli.
3. **Nezvedejte v tomhle období nové velké projekty**, pokud to jde. Ne proto, že je nezvládnete, ale proto, že vaše kapacita na nečekané je teď menší.
4. **Připravte si na den odběru zástup.** Nebudete odpovídat na e-maily a nechcete to řešit z dospávacího pokoje.
5. **Ranní kontroly berte jako pevný bod**, ne jako flexibilní položku. Nedají se přesunout na odpoledne.

## Fyzická stránka v kanceláři

- **Volné oblečení** od pátého dne stimulace. Vážně.
- **Láhev s vodou na stole** a pravidelné vstávání — dlouhé sezení při vyšším estradiolu není ideální.
- **Něco k jídlu v šuplíku.** Hormonální výkyvy plus vynechané obědy dělají divy s náladou.
- **Aplikace injekce v práci** je řešitelná, když píchate v pevný čas, který padne do pracovní doby: čistá místnost, umyté ruce, chladicí taška. Zeptejte se na klinice, jestli lze čas mírně posunout.

## Nemocenská a volno

V Česku vám ošetřující lékař může vystavit **pracovní neschopnost**, pokud to váš stav vyžaduje — typicky kolem odběru nebo při komplikacích. Nárok na volno kvůli kontrolám řešíte obvykle jako **návštěvu lékaře s potvrzením**.

Konkrétní podmínky se liší podle zaměstnavatele a vaší smlouvy. Zeptejte se předem, ne až v den, kdy to potřebujete.

## Když vám hlava nefunguje

Snížená koncentrace během stimulace je běžná a nemá s vaší schopností nic společného. Co pomáhá:

- **Psát si všechno.** Nespoléhejte na paměť, teď vás zklame.
- **Jedna věc v jednu chvíli.** Multitasking je v tomhle období nejrychlejší cesta k chybě.
- **Odsunout rozhodnutí**, která nemusí padnout tenhle týden.
- **Nepřehánět sebekritiku.** Za tři týdny budete zase ve své formě.

## Věta na závěr

Práce vám během stimulace může být oporou — struktura dne pomáhá. Může být ale i přítěží, když se každá porada mění v hodinu, kdy nemyslíte na nic jiného. Obojí je legitimní. Rozhodujte se podle toho, co vám pomáhá dnes, ne podle toho, co jste zvládala loni.

> Text je obecný a nenahrazuje právní ani lékařskou konzultaci. O pracovní neschopnosti rozhoduje vždy váš ošetřující lékař.`,
      minutes: 6,
      phases: ['stimulation', 'ivf_prep'],
      dayRange: [0, 12],
      topics: ['psychika', 'finance', 'sebepece'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      publishedOn: '2025-11-13',
    },
    {
      id: 'cyk-oplozeni-ivf-icsi-picsi',
      kind: 'article',
      title: 'IVF, ICSI, PICSI: jak se vlastně vajíčko oplodní',
      excerpt:
        'Tři zkratky, tři různé způsoby, jak spermie potká vajíčko. Tady je, čím se liší a proč vám vybrali zrovna tenhle.',
      body: `## Co se děje v laboratoři pár hodin po odběru

Odsátá tekutina z folikulů jde rovnou k embryologovi, který v ní pod mikroskopem vyhledá vajíčka. Ta se očistí a **posoudí se jejich zralost** — použít lze pouze zralá vajíčka, která dokončila zrání po triggeru. Nezralých bývá menšina a je to očekávané.

Souběžně se zpracovává vzorek spermií: promyje se, oddělí se pohyblivé spermie od zbytku ejakulátu a připraví se koncentrát pro oplození.

Pak přijde na řadu metoda.

## Klasické IVF

Vajíčko a určité množství připravených spermií se dají dohromady do misky s kultivačním médiem a **spermie si cestu najde sama.** Je to bližší přirozenému procesu — spermie musí projít obalem vajíčka vlastní silou.

Používá se, když je vzorek spermií v dobrých parametrech a není důvod zasahovat.

- **Výhoda:** minimální zásah, přirozená selekce.
- **Riziko:** pokud spermie z jakéhokoli důvodu nepronikne, vajíčka se neoplodní. Proto se u nejistých vzorků raději volí ICSI.

## ICSI

**Intracytoplazmatická injekce spermie.** Embryolog vybere pod velkým zvětšením jednu spermii, znehybní ji a mikropipetou ji vpraví přímo dovnitř vajíčka.

Kdy se používá:

- **Mužský faktor** — nízký počet, snížená pohyblivost nebo morfologie spermií.
- **Spermie získané chirurgicky** z varlete či nadvarlete.
- **Předchozí selhání oplození** klasickým IVF.
- **Malý počet vajíček**, kde se nechce riskovat.
- **Před genetickým testováním embryí (PGT)**, aby se vyloučila kontaminace cizí DNA.
- Někdy při použití **rozmražených vajíček**.

ICSI obchází bariéru obalu vajíčka. **Neřeší kvalitu vajíčka ani genetiku spermie** a nezaručuje oplození — to je věc, kterou stojí za to vědět předem.

## PICSI a další způsoby výběru spermie

Když se dělá ICSI, musí embryolog jednu spermii vybrat. Metody, které mu s výběrem pomáhají:

- **PICSI** — vzorek se položí na plochu s kyselinou hyaluronovou, tedy látkou, která se přirozeně nachází v obalu vajíčka. **Zralé spermie se na ni navážou**, nezralé ne. Embryolog pak vybírá z těch navázaných.
- **IMSI** — výběr spermie při velmi vysokém zvětšení, které umožní posoudit detaily tvaru hlavičky.

Tyhle metody se používají cíleně, typicky při **opakovaném selhání, vyšší fragmentaci DNA spermií nebo horší morfologii**. Nejsou to univerzální vylepšení pro každého a rozhodnutí patří embryologovi a lékaři.

## Kolik vajíček se oplodní

Ne všechna. Ani při ICSI. Část vajíček se neoplodní, část se oplodní **abnormálně** (například se objeví jiný počet prvojader než dvě) a tahle se dál nekultivují.

**Neptejte se na procenta z internetu.** Míra oplození závisí na kvalitě vajíček i spermií a vaše konkrétní čísla vám řekne embryolog vaší kliniky. Obecné číslo z fóra vám nic neřekne o vašem cyklu.

## Když se neoplodní nic

Vzácná, ale existující situace. Nazývá se **totální selhání oplození**. Není to nic, co byste způsobila. Následuje rozbor: kvalita vajíček, parametry vzorku, použitá metoda. Pro další cyklus se obvykle mění strategie — například se přejde z IVF na ICSI, přidá se jiný způsob výběru spermie nebo se řeší aktivace vajíčka.

Je to jedna z nejtěžších zpráv, jaké se v embryologii sdělují, a je naprosto v pořádku si na ni vyžádat samostatnou konzultaci, ne jen větu do telefonu.

## Otázky, které stojí za to položit embryologovi

1. Jakou metodu oplození u nás plánujete a proč?
2. Kolik vajíček bylo zralých?
3. Jak vypadal vzorek v den odběru?
4. Kolik vajíček se normálně oplodnilo?
5. Kdy mi budete volat příště a s jakou informací?

> Text popisuje obecné principy laboratorních metod. Volbu metody u vás určuje embryolog a ošetřující lékař podle konkrétních nálezů. Tento obsah nenahrazuje odbornou konzultaci.`,
      minutes: 8,
      phases: ['fertilization', 'retrieval'],
      dayRange: [0, 1],
      topics: ['embryologie', 'genetika', 'klinika'],
      modifiers: ['icsi', 'male_factor'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro laboratoře asistované reprodukce', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2025-11-18',
      boost: 0.95,
    },
    {
      id: 'cyk-macs-a-metody-vyberu',
      kind: 'article',
      title: 'MACS, fragmentace DNA a další metody, o kterých se dozvíte na poslední chvíli',
      excerpt:
        'Klinika nabídne metodu s třípísmennou zkratkou a příplatkem. Tady je, co znamená a kdy dává smysl.',
      body: `## Proč se o tomhle vůbec mluví

Kvalita spermií se dlouho hodnotila hlavně podle tří parametrů: počet, pohyblivost, tvar. Postupně se ukázalo, že tenhle popis nestačí — spermie může vypadat i plavat výborně a přitom mít **poškozenou genetickou informaci**. Odtud vzešly metody, které se snaží spermie třídit podle jiných vlastností než podle vzhledu.

Setkáte se s nimi obvykle ve dvou situacích: při opakovaném neúspěchu nebo když vzorek partnera vykazuje odchylky.

## Fragmentace DNA spermií

Vyšetření, které měří **podíl spermií s poškozenými řetězci DNA**. Vysoká fragmentace se dává do souvislosti s horším vývojem embryí a s opakovanými ztrátami, i když vztah není jednoduchý a hodnoty kolísají.

Co fragmentaci zvyšuje:

- **Věk**
- **Kouření, alkohol, obezita**
- **Varikokéla** (rozšířené žíly v šourku)
- **Infekce a záněty**
- **Horko** — sauna, vyhřívané sedačky, notebook na klíně
- **Delší abstinence** před odběrem, paradoxně

Část těchto faktorů se dá ovlivnit, a to během zhruba **tří měsíců**, což je doba tvorby spermií. Rozhodnutí, jestli vyšetření vůbec dělat, patří andrologovi nebo reprodukčnímu lékaři.

## MACS

**Magnetická separace.** Vzorek projde přes sloupec s magnetickými kuličkami, které se navážou na spermie vykazující známky programované buněčné smrti. Tyhle spermie zůstanou zachycené a dál se pracuje se zbytkem.

Kdy se zvažuje:

- vysoká fragmentace DNA,
- opakované selhání implantace,
- opakované ztráty těhotenství,
- horší výsledky vývoje embryí v předchozím cyklu.

**Co byste měla vědět:** jde o doplňkovou metodu, jejíž přínos se stále zkoumá a nehodí se plošně pro každého. Pokud vám ji nabídnou, je legitimní se zeptat: „Proč konkrétně u nás? Co od toho čekáte? Co když ji neuděláme?"

## PICSI a IMSI ve zkratce

- **PICSI** vybírá spermie podle schopnosti navázat se na kyselinu hyaluronovou — tedy podle zralosti.
- **IMSI** vybírá spermie podle detailního tvaru při velmi vysokém zvětšení.

Obojí prodlužuje práci embryologa a obojí má své indikace. Ani jedno není záruka.

## Asistovaný hatching

Metoda, která se týká embrya, ne spermie: v obalu embrya se laserem vytvoří drobný otvor, aby se mu snáz „vylíhlo" před uhnízděním. Zvažuje se například u rozmražených embryí nebo u silnějšího obalu. Opět jde o metodu s konkrétními indikacemi.

## Time-lapse kultivace

Inkubátor s vestavěnou kamerou snímá embrya v pravidelných intervalech, takže embryolog vidí **celý průběh dělení**, aniž by embrya musel vyndávat z prostředí. Přináší víc informací pro výběr embrya a stabilnější podmínky. Není to léčebná metoda, je to způsob pozorování.

## Jak se v nabídce vyznat

Praktický filtr na jakoukoli doplňkovou metodu:

1. **Jaká je konkrétní indikace u nás?** Ne obecně, ale u nás.
2. **Co konkrétně od toho očekáváte, že se změní?**
3. **Jaká je alternativa, když to neuděláme?**
4. **Kolik to stojí a je to hrazené?**
5. **Máte s tím vlastní zkušenost a jak dlouho to na pracovišti děláte?**

Pokud odpověď zní „děláme to u všech", je to signál, že se má cenu ptát dál. Kvalitní pracoviště dokáže vysvětlit, proč něco doporučuje právě vám.

## Kde je hranice

Tady se dostáváme k něčemu, o čem se mluví nerado: **v době, kdy jste zoufalá, koupíte cokoli.** Řada doplňkových metod má omezená data a rozhodně nejde o zázraky. Není chyba je zvolit. Chyba je zvolit je bez otázek, s pocitem, že když je nezvolíte, budete si vyčítat, že jste neudělala všechno.

Udělala jste dost. Rozhodujte se podle indikace, ne podle viny.

> Text popisuje obecné principy laboratorních metod a nenahrazuje odbornou konzultaci. Vhodnost konkrétní metody posoudí váš embryolog a ošetřující lékař.`,
      minutes: 7,
      phases: ['fertilization', 'ivf_prep'],
      dayRange: [0, 2],
      topics: ['embryologie', 'genetika', 'klinika', 'partner'],
      modifiers: ['male_factor', 'repeated_failure', 'icsi'],
      level: 'deep',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro laboratoře asistované reprodukce'],
      publishedOn: '2025-11-22',
    },
    {
      id: 'cyk-telefonat-z-embryologie',
      kind: 'article',
      title: 'Telefonát z embryologie: jak ho přežít a co se zeptat',
      excerpt:
        'Trvá dvě minuty, přijde bez varování a vy si z něj pamatujete polovinu. Připravte se na něj předem.',
      body: `## Co se v tom telefonátu obvykle dozvíte

První telefonát přichází typicky **den po odběru** a nese dvě čísla:

1. **Kolik vajíček bylo zralých.**
2. **Kolik se jich normálně oplodnilo** — tedy kolik z nich má ráno po oplození dvě prvojádra.

Další telefonáty pak přicházejí podle zvyklostí pracoviště: někde denně, jinde až v den, kdy se rozhoduje o transferu nebo zamrazení. **Zeptejte se předem, jaký je jejich systém**, ať nečekáte na telefon, který ten den nepřijde.

## Proč je to tak těžké

Protože v tom telefonátu se poprvé objeví reálná čísla. Do té chvíle bylo všechno potenciál — folikuly, naděje, plán. Teď se z toho stane počet.

A skoro vždycky je to číslo menší, než jste čekala. To není proto, že by se něco pokazilo. Je to proto, že **na každém stupni se něco ztrácí**: z folikulů vajíčka, z vajíček zralá, ze zralých oplozená, z oplozených ta, která se dělí dál. Když víte, že to tak je, ubere to telefonátu polovinu jeho síly.

## Připravte se předem — konkrétně

- **Mějte po ruce papír a tužku.** Ne telefon, na kterém právě mluvíte.
- **Napište si tři otázky dopředu.** V šoku si nevzpomenete.
- **Domluvte si, kdo telefon zvedne.** Pokud víte, že to neunesete, může volat partner. Řekněte to klinice předem.
- **Nebuďte v tu chvíli na poradě.** Pokud znáte časové okno, kdy volají, vyblokujte si ho.
- **Zapište si přesně, co řekli**, včetně slov, kterým jste nerozuměla. Doslova. Dohledáte je pak v klidu.

## Otázky, které mají smysl

Tyhle otázky vám dají informaci, se kterou se dá dál pracovat:

1. **Kolik vajíček bylo zralých a kolik se oplodnilo normálně?**
2. **Jak vypadá vývoj oproti tomu, co byste v tuhle dobu očekávali?**
3. **Kdy mi budete volat příště a co budu vědět?**
4. **Plánujete transfer třetí, nebo pátý den, a podle čeho se rozhodnete?**
5. **Co by nás mohlo přimět plán změnit?**

Otázky, které smysl nemají a jen vás zraní: „Jaká je moje šance v procentech?" v den jedna. Nikdo to v ten moment neví a číslo, které byste dostala, by bylo obecné.

## Když čísla nejsou dobrá

Řekněte to nahlas: „Tohle je pro mě těžké slyšet. Můžeme se domluvit na konzultaci s lékařem?" Embryolog na to je zvyklý a obvykle vám nabídne prostor.

Co si ten den nedělejte:

- **Negooglete si prognózu** podle počtu embryí. Najdete deset protichůdných čísel a žádné o vás.
- **Nedělejte závěry o dalším cyklu** ten samý den.
- **Nevolejte to všem.** Vyberte jednoho člověka.
- **Neomlouvejte se partnerovi**, že jste „nedodala víc vajíček". Tuhle větu si řekne v hlavě skoro každá žena a je to nespravedlivé vůči vám.

## Když čísla jsou dobrá

Pravděpodobně ucítíte úlevu a hned potom strach z ní. Radovat se z dobrého čísla není pokoušení osudu. Dovolte si to na jeden večer.

## Poznámka pro partnera

Pokud tenhle text čte on: nejlepší reakce na oznámení čísla není hodnocení („to je dost / to je málo"), ale otázka („co to pro tebe teď znamená?"). A pak ticho, ve kterém se dá odpovědět.

## Kdy volat vy

Nezávisle na telefonátu z laboratoře volejte kliniku, pokud se u vás objeví silná bolest břicha, rychlé nafouknutí, dušnost, teplota nad 38 °C nebo výrazně méně moči. Vývoj embryí a vaše zdraví jsou dvě různé věci a to druhé má přednost.

> Text nenahrazuje odbornou konzultaci. Informace o vývoji vašich embryí vám může poskytnout pouze embryolog vaší kliniky.`,
      minutes: 6,
      phases: ['fertilization', 'embryo_culture'],
      dayRange: [1, 3],
      topics: ['embryologie', 'psychika', 'partner', 'klinika'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      publishedOn: '2025-11-26',
      boost: 0.9,
    },
    {
      id: 'cyk-kultivace-den-po-dni',
      kind: 'article',
      title: 'Kultivace den po dni: co se s embryi děje v laboratoři',
      excerpt:
        'Šest dní, o kterých nic nevíte, a přitom se v nich rozhoduje všechno. Tady je den po dni, co se děje.',
      body: `## Kde vaše embrya jsou

V inkubátoru, který drží stabilní teplotu kolem tělesné, přesně nastavené složení plynů a vlhkost. Embrya leží v kapkách kultivačního média pod olejovou vrstvou, každá pacientka má vlastní označenou misku a identita se kontroluje při každém kroku, obvykle dvěma lidmi nebo elektronickým systémem.

Laboratoř je tichá, tmavá a extrémně stabilní. To je celé její kouzlo: **nedělat nic zbytečně a nerušit.**

## Den 0 — den odběru

Vajíčka se vyhledají v odsáté tekutině, posoudí se jejich zralost a připraví se ke oplození. Podle metody se buď spojí se spermiemi (IVF), nebo se do nich spermie vpraví (ICSI). Pak se vrátí do inkubátoru.

## Den 1 — kontrola oplození

Zhruba 16 až 18 hodin po oplození embryolog kontroluje, jestli se objevila **dvě prvojádra** — jedno z vajíčka, jedno ze spermie. To je znak normálního oplození.

Co může nastat:

- **Dvě prvojádra** — normální oplození, embryo pokračuje.
- **Žádné prvojádro** — vajíčko se neoplodnilo.
- **Jedno nebo tři a víc** — abnormální oplození, tato embrya se dál nepoužívají.

Tohle je to číslo, které se dozvíte v prvním telefonátu.

## Den 2 — první dělení

Embryo by mělo mít zhruba **dvě až čtyři buňky** (blastomery). Hodnotí se počet buněk, jejich stejnoměrnost a podíl fragmentace — drobných úlomků buněčné hmoty, kterých má být co nejméně.

## Den 3 — osm buněk a velký přerod

Embryo má obvykle kolem **šesti až osmi buněk**. V tuhle dobu se odehrává zásadní věc: **embryo přepíná na vlastní genom.** Do té chvíle běželo na zásobách a informacích z vajíčka. Teď musí začít pracovat samo.

Právě tady se řada embryí zastaví. Není to náhoda a není to nic, co byste ovlivnila — je to okamžik, kdy se projeví genetická výbava embrya.

Na některých pracovištích se **transfer dělá třetí den**, zvlášť když je embryí málo a nemá smysl je držet déle v laboratoři.

## Den 4 — morula

Buňky se přestanou počítat, protože se k sobě těsně přimknou a hranice mezi nimi zmizí. Vznikne kompaktní kulička — **morula**. Vypadá to jako krok zpět, ale je to nutná fáze.

Čtvrtý den se obvykle netelefonuje, protože morula se hodnotí obtížně a informace by nic nepřinesla.

## Den 5 — blastocysta

Uvnitř moruly vznikne dutina vyplněná tekutinou a buňky se poprvé rozdělí na dvě různé skupiny:

- **Vnitřní buněčná masa** — z ní vznikne plod.
- **Trofektoderm** — vnější vrstva, ze které vznikne placenta.

Tomuhle stádiu se říká **blastocysta** a je to nejčastější okamžik pro transfer nebo zamrazení. Pokud se dělá genetické testování, odebírá se v tuhle dobu několik buněk z vnější vrstvy.

## Den 6 (někdy 7) — opozdilci

Část embryí dojde do stádia blastocysty o den nebo dva později. **Pomalejší neznamená nepoužitelné** — z blastocyst šestého dne se rodí děti. Obvykle se zamrazují k pozdějšímu použití.

## Proč jich na konci zbude tak málo

Protože kultivace je **selekce**. Embryo, které se zastaví ve čtvrtý den, by se s velkou pravděpodobností nezahnízdilo ani v děloze. Laboratoř tuhle selekci neprovádí navíc — jen ji zviditelní.

Zní to krutě a zároveň to znamená, že embryo, které dojde do pátého dne, prošlo skutečnou zkouškou.

## Co v týhle době můžete dělat vy

Prakticky nic, co by vývoj ovlivnilo, a to je nejtěžší část. Co pomáhá:

- **Vědět, který den co znamená** (proto tenhle text).
- **Nepočítat dopředu.** Číslo z dne tři nepředpovídá číslo z dne pět.
- **Držet svůj vlastní režim** — spánek, jídlo, pohyb, podpora progesteronem podle pokynů.
- **Nechodit na diskusní fóra ve tři ráno.** Cizí čísla vám nepomůžou.

> Popis je obecný a zjednodušený. Časování i způsob hodnocení se mezi pracovišti liší. Konkrétní informace o vašich embryích vám sdělí pouze embryolog vaší kliniky.`,
      minutes: 8,
      phases: ['embryo_culture', 'fertilization'],
      dayRange: [1, 6],
      topics: ['embryologie', 'cekani', 'klinika'],
      level: 'essential',
      hero: 'pearl',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro laboratoře asistované reprodukce'],
      publishedOn: '2025-12-01',
      boost: 1,
    },
    {
      id: 'cyk-hodnoceni-embryi-gardner',
      kind: 'article',
      title: 'Jak se hodnotí embrya: čísla a písmena, kterým budete rozumět',
      excerpt:
        'Zápis typu 4AA vypadá jako známka z chemie. Tady je, co jednotlivé části znamenají a co neznamenají.',
      body: `## Proč se embrya vůbec známkují

Když je embryí víc, embryolog musí vybrat to, které přenese jako první. Hodnocení je **nástroj pro pořadí**, ne rozsudek nad embryem. Vzniklo z pozorování — z toho, jak vypadala embrya, po kterých následovalo těhotenství.

Platí u něj dvě věci současně: **je to nejlepší, co máme bez zásahu do embrya** a zároveň **je to jen vzhled.** Embryo s krásným hodnocením se nemusí uhnízdit a embryo s horším ano.

## Hodnocení do třetího dne

U embryí ve stádiu dělení se posuzují tři věci:

1. **Počet buněk vzhledem ke dni.** Třetí den se obvykle očekává zhruba šest až osm buněk.
2. **Stejnoměrnost buněk.** Ideálně podobně velké.
3. **Fragmentace** — podíl drobných úlomků buněčné hmoty. Čím méně, tím lépe.

Zápis pak vypadá například jako „8 buněk, stejnoměrné, fragmentace pod 10 %".

## Hodnocení blastocysty — princip Gardnerovy škály

U blastocysty se používá kombinace **čísla a dvou písmen**, například 4AA nebo 3BC. Nejrozšířenější systém popsal Gardner a jeho obměny používá většina laboratoří.

**Číslo (obvykle 1–6) popisuje stupeň expanze**, tedy jak je blastocysta rozvinutá:

- nižší čísla — dutina se teprve tvoří,
- střední čísla — blastocysta je plně rozvinutá,
- vyšší čísla — blastocysta se začíná „líhnout" ze svého obalu.

**První písmeno hodnotí vnitřní buněčnou masu** — skupinu buněk, ze které vznikne plod. A je nejlepší, C nejslabší.

**Druhé písmeno hodnotí trofektoderm** — vnější vrstvu, ze které vznikne placenta. Opět A až C.

Takže 4AA znamená plně rozvinutou blastocystu s dobře vypadající vnitřní masou i vnější vrstvou. **Neznamená to zaručené těhotenství.**

## Čemu hodnocení nerozumí

Tohle je nejdůležitější odstavec celého textu.

- **Hodnocení nevidí genetiku.** Embryo s hodnocením AA může mít chybný počet chromozomů a embryo s hodnocením BC nemusí.
- **Hodnocení je subjektivní.** Dva embryologové se v písmenech mohou lišit. Proto se pracoviště mezi sebou nedají srovnávat.
- **Hodnocení je okamžik.** Je to fotka, ne film. Embryo se mění během hodin.
- **Rychlost není kvalita.** Blastocysta šestého dne může být zdravější než ta z pátého.

## Co s tím prakticky

Když vám embryolog řekne písmena, zeptejte se na jedinou opravdu užitečnou věc: **„Které embryo přenášíte jako první a proč zrovna tohle?"** Odpověď vám poví víc než celá abeceda.

A pak si tu známku odložte. Známe spoustu žen, které si písmena opakovaly dva týdny jako mantru — v jednu chvíli jako důvod k naději, ve druhé jako důvod k zoufalství. Ta samá dvě písmena.

## Co když jsou všechna embrya „horší"

Za prvé, horší hodnocení není synonymum pro nepoužitelné. Za druhé, když jsou hodnocení nižší napříč celou skupinou, je to informace pro lékaře do dalšího cyklu — může se měnit protokol, metoda oplození, laboratorní postup.

Za třetí a hlavně: **hodnocení není hodnocení vás.** Není to známka za to, jak dobře jste to zvládla. Není nic, co byste udělala jinak.

## Otázky na konzultaci

1. Jaký systém hodnocení používáte a co u vás znamená?
2. Kolik embryí došlo do stádia blastocysty?
3. Zmrazujete i embrya s nižším hodnocením? Podle čeho?
4. Doporučujete v mém případě transfer čerstvý, nebo mražený?
5. Co byste u nás příště udělali jinak?

> Popis hodnotících systémů je obecný a zjednodušený. Interpretace hodnocení vašich embryí patří výhradně embryologovi a lékaři vaší kliniky.`,
      minutes: 7,
      phases: ['embryo_culture'],
      dayRange: [3, 6],
      topics: ['embryologie', 'vysledky', 'genetika'],
      level: 'deep',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — konsenzuální doporučení k hodnocení embryí', 'ESHRE — doporučené postupy pro laboratoře asistované reprodukce'],
      publishedOn: '2025-12-05',
      boost: 0.85,
    },
    {
      id: 'cyk-blastocysta-co-to-je',
      kind: 'article',
      title: 'Blastocysta: proč je pátý den takový milník',
      excerpt:
        'Sto buněk, dutina a první rozdělení na to, z čeho bude dítě, a to, z čeho bude placenta.',
      body: `## Co blastocysta je

Stádium vývoje embrya, kterého se dosahuje obvykle **pátý den po oplození**. Z kompaktní kuličky vzniká struktura s dutinou naplněnou tekutinou a poprvé se buňky rozdělí do dvou různých osudů:

- **Vnitřní buněčná masa** — malá skupina buněk na jednom pólu. Vznikne z ní plod.
- **Trofektoderm** — vnější vrstva obalující dutinu. Vznikne z něj placenta a plodové obaly.

Do téhle chvíle byly všechny buňky rovnocenné. Tohle je první specializace v celém životě organismu.

## Proč to pracoviště chtějí

Kultivace do pátého dne má dva praktické důvody:

1. **Selekce.** Embrya, která se zastaví mezi třetím a pátým dnem, by se s velkou pravděpodobností nezahnízdila. Když je embryí víc, kultivace ukáže, které z nich mají skutečný potenciál — místo aby se to zjišťovalo v děloze.
2. **Synchronizace.** V přirozeném cyklu embryo do dělohy sestoupí právě ve stádiu blastocysty, zhruba pátý den. Transfer blastocysty tedy lépe odpovídá tomu, na co je děložní sliznice připravená.

## Proč to někdy nechtějí

Prodloužená kultivace nese riziko, že **v laboratoři se zastaví embryo, které by se v děloze vyvíjelo dál.** Děloha je pro embryo lepší prostředí než jakýkoli inkubátor.

Proto se u malého počtu embryí často volí **transfer třetí den** — nemá smysl provádět selekci mezi dvěma embryi, když se stejně přenese to lepší z nich.

Rozhodnutí, jestli kultivovat do pátého dne, patří embryologovi a lékaři a řídí se počtem a kvalitou embryí. **Není to volba mezi lepším a horším postupem, je to volba podle situace.**

## Co se v blastocystě děje dál

Blastocysta roste, dutina se zvětšuje a tlačí na obal (zona pellucida). Nakonec se embryo z obalu **vylíhne** — tomu se říká hatching — a teprve pak se může přichytit k děložní sliznici.

Celý tenhle proces v přirozeném cyklu probíhá v děloze zhruba mezi pátým a sedmým dnem po oplození.

## Šestý den není horší den

Část blastocyst dosáhne stádia až šestý, výjimečně sedmý den. Bývá to důvod k obavám a nemělo by být. **Z blastocyst šestého dne se rodí děti.** Obvykle se zamrazí a použijí v následujícím cyklu, kdy se sliznice připraví přesně na jejich tempo.

Rychlost vývoje je z části dána genetikou embrya a z části podmínkami. Pomalejší start nepředpovídá pomalejší dítě.

## Nejtěžší věta v celé kultivaci

„Do blastocysty nedošlo žádné embryo."

Když ji uslyšíte, znamená to, že se cyklus uzavřel bez transferu. Nezpůsobila jste to tím, že jste zvedla nákup, měla stres v práci nebo se den po odběru rozbrečela. Nedošlá blastocysta je téměř vždy věcí vývojového potenciálu embrya, který byl daný dávno předtím, než začal váš cyklus.

Co následuje: **konzultace s lékařem**, rozbor cyklu a rozhodnutí o změně strategie. Vyžádejte si ji, i když vám ji nenabídnou hned. Máte na ni právo a je to jediná věc, která z téhle zprávy udělá informaci místo tečky.

## Otázky na konzultaci po kultivaci

1. Kolik embryí se zastavilo a v který den?
2. Vidíte v tom nějaký vzorec, který by ukazoval na příčinu?
3. Co byste v dalším cyklu změnili — protokol, metodu oplození, laboratorní postup?
4. Má smysl doplnit nějaké vyšetření u mě nebo u partnera?
5. Jak dlouho doporučujete počkat?

> Text popisuje obecné principy embryonálního vývoje. Konkrétní situaci vašich embryí posuzuje pouze embryolog a lékař vaší kliniky. Obsah nenahrazuje lékařskou péči.`,
      minutes: 7,
      phases: ['embryo_culture'],
      dayRange: [4, 6],
      topics: ['embryologie', 'cekani', 'vysledky'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro laboratoře asistované reprodukce'],
      publishedOn: '2025-12-10',
      boost: 0.9,
    },
    {
      id: 'cyk-zamrazovani-vitrifikace',
      kind: 'article',
      title: 'Zamrazení embryí: jak vitrifikace funguje a co to znamená pro vás',
      excerpt:
        'Embryo v tekutém dusíku není konzerva ani druhá liga. Tady je, co se při zamrazení děje a co z toho plyne.',
      body: `## Proč se embrya mrazí

Ze tří důvodů, které spolu nesouvisejí:

1. **Zbylá embrya po transferu.** Když je embryí víc, přenese se obvykle jedno a zbytek se uchová pro další pokusy — bez nutnosti opakovat celou stimulaci.
2. **Odložení transferu z medicínských důvodů.** Například při riziku OHSS, při předčasném vzestupu progesteronu nebo když je potřeba připravit dělohu.
3. **Genetické testování.** Výsledky PGT nejsou hned, takže embrya mezitím čekají zamrazená.

## Co je vitrifikace

Moderní metoda **ultrarychlého zmrazení**. Embryo se nejdřív prosytí ochrannými látkami, které nahradí část vody v buňkách, a pak se během zlomku vteřiny ochladí na teplotu tekutého dusíku, tedy zhruba minus 196 °C.

Podstata je v rychlosti: **při pomalém mrazení vznikají ledové krystaly, které buňku poškodí.** Při vitrifikaci se voda nestihne uspořádat do krystalů a ztuhne do sklovité podoby. Odtud i název — vitrum je latinsky sklo.

Při této teplotě se zastaví veškeré biologické děje. Embryo se nestárne, nedělí, nemění.

## Jak dlouho embryo vydrží

Prakticky velmi dlouho — čas při teplotě tekutého dusíku pro embryo neběží. **Omezení je právní a organizační, ne biologické.** V Česku se uchovávání řídí zákonem a smlouvou s klinikou, která má stanovenou dobu, poplatky a postup pro prodloužení.

**Tohle si pohlídejte.** Klinika vám bude posílat výzvy k prodloužení a k úhradě skladovacího poplatku. Změna adresy, e-mailu nebo příjmení je věc, kterou musíte nahlásit vy.

## Rozmrazování

Probíhá opačným postupem, také velmi rychle, s postupným odstraňováním ochranných látek. Přežití embrya po rozmrazení je u dnešních postupů vysoké, ale **není stoprocentní** — část embryí rozmražení nepřežije nebo se poškodí. Konkrétní čísla svého pracoviště si vyžádejte na klinice.

Po rozmražení se embryo obvykle nechá krátce v inkubátoru a sleduje se, jestli se dutina blastocysty znovu rozepne. To je znak, že embryo je vitální.

## Mražený transfer není horší varianta

Dřív se čerstvý transfer považoval za standard a mražený za náhradní řešení. Dnes se u části žen mražený transfer volí záměrně, protože:

- **děložní sliznice není zatížená vysokými hladinami hormonů** ze stimulace,
- **dá se lépe načasovat** na optimální okamžik,
- **snižuje riziko OHSS** v cyklu s vysokou odpovědí.

Které řešení je lepší u vás, závisí na vaší situaci a rozhoduje lékař.

## Právní stránka, kterou nikdo nečte a měl by

Při podpisu souhlasů se rozhoduje o věcech, které se špatně řeší zpětně:

- **Kdo s embryi může nakládat** a co se stane při rozchodu nebo úmrtí jednoho z partnerů.
- **Co se stane s embryi, která už nechcete použít** — zákon a smlouva definují možnosti.
- **Doba uchování** a jak se prodlužuje.
- **Poplatky za skladování** a co se stane, když se neuhradí.

Přečtěte si to spolu s partnerem, ne cestou z ordinace. A ptejte se, když něčemu nerozumíte — je to normální, texty jsou psané právníky.

## Emoční stránka, o které se mluví ještě míň

Mít zamrazená embrya je zvláštní pocit. Je to úleva („máme rezervu") i tíha („co s nimi, až rodinu uzavřeme"). Spousta žen popisuje, že o nich přemýšlí i po letech, když už mají děti.

Není potřeba to hned vyřešit. Jen vězte, že ten pocit je běžný a že o něm můžete mluvit — s partnerem, s psychologem se zkušeností s reprodukční medicínou, nebo s ženami, které to mají stejně.

## Otázky, které se vyplatí položit

1. Kolik embryí zamrazujete a v jakém stádiu?
2. Zamrazujete i embrya s nižším hodnocením? Podle čeho se rozhodujete?
3. Jaká je u vás úspěšnost přežití po rozmražení?
4. Jak dlouhá je doba uchování podle naší smlouvy a kolik stojí prodloužení?
5. Jak nás budete kontaktovat a co se stane, když se nedovoláte?

> Text popisuje obecné principy. Právní podmínky uchovávání embryí se řídí platnou legislativou a smlouvou s vaší klinikou. Obsah nenahrazuje lékařskou ani právní konzultaci.`,
      minutes: 7,
      phases: ['embryo_culture', 'fertilization'],
      dayRange: [4, 7],
      topics: ['embryologie', 'klinika', 'finance'],
      modifiers: ['frozen_transfer'],
      level: 'deep',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro laboratoře asistované reprodukce', 'Zákon o specifických zdravotních službách — obecná úprava asistované reprodukce v ČR'],
      publishedOn: '2025-12-15',
      boost: 0.7,
    },
    {
      id: 'cyk-pgt-a-testovani-embryi',
      kind: 'article',
      title: 'PGT-A: genetické testování embryí bez marketingu',
      excerpt:
        'Zní to jako záruka. Není to záruka. Tady je, co test skutečně zjišťuje a komu dává smysl.',
      body: `## Co PGT-A je

**Preimplantační genetické testování na aneuploidie.** Zjišťuje, jestli má embryo správný počet chromozomů. Odchylka v počtu — aneuploidie — je nejčastější příčinou toho, že se embryo neuhnízdí nebo že těhotenství skončí ztrátou.

Provádí se tak, že se z **blastocysty odebere několik buněk z vnější vrstvy** (z trofektodermu, tedy z budoucí placenty, ne z budoucího plodu). Embryo se pak zamrazí a čeká na výsledek, který obvykle trvá několik týdnů.

## Co PGT-A nezjišťuje

Tohle je část, kterou v propagačních materiálech nenajdete:

- **Nezjišťuje všechny genetické nemoci.** Na konkrétní dědičné onemocnění slouží jiné testy (PGT-M, PGT-SR).
- **Nezaručuje těhotenství.** Embryo se správným počtem chromozomů se také nemusí uhnízdit.
- **Nezaručuje zdravé dítě.** Zůstává standardní prenatální péče a screening v těhotenství.
- **Nezvyšuje počet vašich dobrých embryí.** Jen pomáhá seřadit ta, která máte.

## Mozaicismus — komplikace, o které se mluví málo

Výsledek nemusí být jen „normální / abnormální". Část embryí vykazuje **mozaiku** — směs buněk s normálním a abnormálním počtem chromozomů. Vzniká to proto, že se testuje jen vzorek buněk vnější vrstvy a ten nemusí odpovídat zbytku embrya.

Praktický důsledek: **mozaikové embryo není automaticky nepoužitelné.** Rozhodnutí o jeho použití je individuální, vyžaduje genetickou konzultaci a je to jedno z nejtěžších rozhodnutí, jaká v celém procesu padají.

## Komu se testování obvykle zvažuje

Podle indikace, kterou určuje lékař a genetik. Nejčastěji se diskutuje u:

- **vyššího věku ženy**,
- **opakovaného selhání implantace**,
- **opakovaných ztrát těhotenství**,
- **známé chromozomální přestavby** u jednoho z partnerů,
- **předchozího těhotenství s chromozomální odchylkou**.

Naopak u mladších žen s malým počtem embryí může testování přinést víc rizika než užitku — biopsie je zásah a při malém počtu embryí se snadno stane, že po testu nezbyde nic k přenosu.

## Co byste měla vážit

Reálné otázky, které stojí za rozhovor s lékařem i s partnerem:

1. **Kolik embryí očekáváme?** U jednoho nebo dvou blastocyst se testování zvažuje jinak než u osmi.
2. **Co uděláme s mozaikovým výsledkem?** Rozhodněte se ideálně předem, ne pod tlakem.
3. **Kolik to stojí a co je v ceně?** Cena bývá za cyklus i za embryo.
4. **O kolik se prodlouží cesta?** Testování obvykle znamená zamrazení a transfer v dalším cyklu.
5. **Co když vyjde, že žádné embryo není vhodné k transferu?** Tohle je scénář, na který se má cenu připravit dopředu.

## Etická a osobní stránka

PGT-A staví před rozhodnutí, která nejsou technická. Kdo rozhoduje o tom, které embryo se přenese? Co s embryi, která se nepoužijí? Jak se v tom cítíte vy a jak partner?

Nemusíte mít na tyhle otázky odpověď hned a nemusí se vaše odpovědi shodovat. Ale mluvit o nich předem je vždycky lepší než mlčet a řešit to v den, kdy přijde výsledek.

## Konzultace, kterou si vyžádejte

Před rozhodnutím o PGT máte nárok na **genetickou konzultaci**. Nespokojte se s letákem a s větou „většina pacientů si to bere". Vyžádejte si rozhovor, ve kterém zazní vaše konkrétní situace.

## Kdy to nedělat

Když jediný důvod je pocit, že „musíte udělat všechno". To není indikace, to je vyčerpání. A vyčerpání je špatný poradce při rozhodování, které stojí desítky tisíc a mění průběh cyklu.

> Text je obecný a nenahrazuje genetickou konzultaci. O vhodnosti genetického testování ve vaší situaci rozhoduje váš ošetřující lékař ve spolupráci s klinickým genetikem.`,
      minutes: 8,
      phases: ['embryo_culture', 'ivf_prep', 'fertilization'],
      dayRange: [3, 7],
      topics: ['genetika', 'embryologie', 'vysledky', 'finance'],
      modifiers: ['pgt', 'repeated_failure', 'after_loss'],
      level: 'deep',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy k preimplantačnímu genetickému testování', 'Společnost lékařské genetiky a genomiky ČLS JEP'],
      publishedOn: '2025-12-20',
      boost: 0.8,
    },
    {
      id: 'cyk-kdyz-embrya-nedozraji',
      kind: 'article',
      title: 'Když embrya nedojdou dál: co to znamená a co teď',
      excerpt:
        'Zpráva, na kterou vás nikdo nepřipraví. Tady je, co se stalo, co jste nezpůsobila a co má smysl udělat dál.',
      body: `## Nejdřív to podstatné

**Nezpůsobila jste to.** Ne nedostatkem odpočinku, ne stresem v práci, ne tím, že jste den po odběru brečela nebo vypila kávu. Zastavení vývoje embrya je téměř vždy dané jeho vlastní genetickou výbavou — informací, která do něj vstoupila v okamžiku oplození.

Tuhle větu si přečtěte ještě jednou. Za pár dní se vám vrátí otázka „co jsem měla udělat jinak" a je dobré mít po ruce odpověď.

## Co se vlastně stalo

Existuje několik různých scénářů, které se v běžné řeči slévají do jednoho:

- **Nezískala se žádná vajíčka** (prázdný odběr) — vzácné, ale existující.
- **Vajíčka byla nezralá.**
- **Vajíčka se neoplodnila** — totální selhání oplození.
- **Embrya se zastavila v prvních dnech.**
- **Do blastocysty nedošlo žádné embryo.**

Každý z těchhle scénářů má jinou příčinu a jiné řešení. Proto je zásadní vědět, který nastal u vás — a proto si vyžádejte konzultaci, ne jen telefonát.

## Co má smysl zjistit

Otázky, které při konzultaci položte. Klidně z papíru:

1. **Ve které fázi se to zastavilo a u kolika embryí?**
2. **Kolik vajíček bylo zralých a jak vypadala?**
3. **Jak vypadal vzorek spermií v den odběru?**
4. **Vidíte v tom vzorec, který ukazuje spíš na vajíčka, spíš na spermie, nebo na obojí?**
5. **Co konkrétně změníte v dalším cyklu?** Protokol, dávky, typ triggeru, metodu oplození, laboratorní postup.
6. **Má smysl doplnit vyšetření?** Genetika, fragmentace DNA spermií, hormonální doladění, štítná žláza.
7. **Jak dlouho doporučujete počkat?**

Pokud odpověď zní jen „máte smůlu, zkusíme to znovu stejně", máte právo na druhý názor. Ne proto, že by váš lékař byl špatný, ale proto, že po neúspěšném cyklu má rozbor obrovskou cenu.

## Co se v dalším cyklu běžně mění

Podle toho, kde se vývoj zastavil, přicházejí v úvahu různé úpravy — vždy je navrhuje lékař:

- **jiný protokol** nebo jiné dávkování,
- **jiný typ triggeru** nebo jeho načasování,
- **přechod na ICSI**, pokud se použilo klasické IVF,
- **jiný způsob výběru spermie**,
- **změna laboratorního postupu nebo média**,
- **doplňující vyšetření** u vás nebo u partnera,
- **úvaha o dárcovských gametách**, pokud se scénář opakuje.

## Co s tím, co cítíte

Tenhle typ konce je specifický: **není tu ztráta těhotenství a přitom je tu ztráta.** Ztratila jste cyklus, měsíce příprav, peníze, plán, představu. A okolí často nechápe, proč truchlíte, když „přece nebylo žádné těhotenství".

Vaše smutek je legitimní. Nemusíte ho nikomu obhajovat.

Co bývá užitečné:

- **Dát tomu jméno.** Řekněte nahlas: tenhle cyklus skončil a je mi z toho zle.
- **Neplánovat další cyklus tenhle týden.** Rozhodnutí učiněná v prvních dnech jsou obvykle rozhodnutí ze zoufalství.
- **Domluvit si pauzu, která má konec.** „Do konce února nic neřešíme, prvního března jdeme na konzultaci." Konečné datum brání tomu, aby se pauza změnila v bezčasí.
- **Řešit peníze střízlivě.** Kolik cyklů unesete finančně, je legitimní součást rozhodování a nedělá vás to horší matkou.
- **Zvážit odbornou pomoc.** Psycholog se zkušeností s reprodukční medicínou není luxus.

## Partnerovi

Muži po téhle zprávě často přepínají do režimu „řešíme dál" — hledají další kliniku, další metodu, další termín. Je to jejich způsob, jak se vyrovnat s bezmocí. Není lepší ani horší než pláč. Problém nastává, když se ty dva režimy potkají ve stejné místnosti.

Řekněte si nahlas, co teď potřebujete. Doslova: „Potřebuju, abys mě teď neřešil, jen se mnou seděl." Nebo naopak: „Potřebuju plán, jinak se zblázním."

## Kdy volat lékaře

I když cyklus skončil, vaše tělo je stále po stimulaci. Volejte při silné bolesti břicha, rychlém nafouknutí, dušnosti, teplotě nad 38 °C, silném krvácení nebo výrazně menším množství moči.

> Text nenahrazuje lékařskou péči ani odbornou konzultaci. Rozbor vašeho cyklu a plán dalšího postupu patří výhradně vašemu ošetřujícímu lékaři.`,
      minutes: 8,
      phases: ['embryo_culture', 'fertilization'],
      dayRange: [2, 7],
      topics: ['embryologie', 'psychika', 'ztrata', 'partner'],
      level: 'comfort',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-01-05',
      boost: 0.85,
    },
    {
      id: 'cyk-dny-ticha',
      kind: 'article',
      title: 'Jak přežít dny ticha, kdy nevoláte a nikdo nevolá vám',
      excerpt:
        'Mezi telefonáty z laboratoře je propast, do které se vejde celý internet. Tady je, jak ji přejít.',
      body: `## Proč jsou tyhle dny tak zvláštní

Deset dní jste měla úkol. Píchat, měřit, jezdit, vážit se, zapisovat. Teď je vaše práce hotová a **výsledek vzniká bez vás**, v inkubátoru, který nikdy neuvidíte, v budově, kam nemáte přístup.

Lidský mozek nesnáší kombinaci vysoké důležitosti a nulové kontroly. Proto se pouští do jediné činnosti, která mu zbývá: **do počítání a předpovídání.** Odtud noční googlení, přepočítávání čísel a hledání příběhů, které se podobají tomu vašemu.

## Co s googlením

Zákaz nefunguje. Co funguje:

- **Vyhraďte mu čas.** Dvacet minut denně, ideálně ne večer. Zbytek dne odkládáte s tím, že se k tomu vrátíte ve vyhrazenou hodinu. Většinou už se vám do toho pak nechce.
- **Ptejte se konkrétně**, ne obecně. „Co znamená morula" má odpověď. „Jaká je moje šance" ne.
- **Vyhýbejte se diskusním vláknům s výsledky.** Nejsou to data, je to sbírka náhod, a čtete je v nejhorším možném stavu.
- **Pište si otázky pro embryologa** místo hledání odpovědí. Papír vedle postele.

## Rozvrh, který drží den pohromadě

Bez struktury se dny slijí v jednu dlouhou úzkost. Nemusí to být nic velkého:

1. **Ráno pevný bod** — snídaně u okna, deset minut ven, vždy stejně.
2. **Dopoledne jedna konkrétní věc**, kterou dokončíte. Ne úklid celého bytu; jedna zásuvka.
3. **Poledne pohyb** — pomalá procházka. Ne sport, vaječníky jsou pořád zvětšené.
4. **Odpoledne kontakt s člověkem.** Jedním. Klidně na patnáct minut.
5. **Večer něco, co drží pozornost** — seriál, který znáte, rukodělná práce, vaření podle receptu.

Zní to banálně. Právě proto to funguje: banální věci nevyžadují rozhodování.

## Co si nepřipouštět

Během těchhle dnů se objeví myšlenka, že když se budete „chovat dobře", zlepší to výsledek. Ležení, dieta, zákaz smíchu. **Vývoj embryí v laboratoři neovlivníte tím, co doma děláte.** Tahle věta má vypadat krutě a ve skutečnosti je osvobozující: nemůžete to pokazit.

Co ovlivnit můžete, je vaše tělo po stimulaci: tekutiny, bílkoviny, klidný pohyb, podpora podle pokynů lékaře. To dělejte.

## Co říkat lidem

Připravte si dvě věty dopředu:

- **Pro ty, komu to říct chcete:** „Jsme uprostřed cyklu, výsledek budeme vědět příští týden. Až budu chtít mluvit, ozvu se."
- **Pro ty, komu ne:** „Teď to neřešíme, děkuju za zeptání."

Nemusíte být milá. Nemusíte vysvětlovat. A hlavně: **nemusíte nikoho informovat průběžně.** Průběžné hlášení je závazek, který v tomhle týdnu neunesete.

## Když se v noci probudíte

Nejčastější scénář: tři hodiny ráno, hlava jede naplno. Co se osvědčuje:

- **Nezůstávat v posteli déle než dvacet minut.** Vstát, přejít do jiné místnosti, tlumené světlo.
- **Napsat to.** Doslova vypsat, co se v hlavě honí, rukou na papír. Vypsaná úzkost je menší než ta v hlavě.
- **Nesahat po telefonu.** Kombinace modrého světla a diskusního fóra ve tři ráno je nejhorší možná.
- **Dýchat s prodlouženým výdechem.** Nádech na čtyři, výdech na šest, deset kol.

## Co si připravit na den D

Až přijde telefonát nebo den transferu, budete chtít mít věci hotové. Připravte si předem:

- otázky pro embryologa napsané na papíře,
- domluvený doprovod, pokud ho chcete,
- volný večer bez povinností,
- jednoho člověka, kterému zavoláte první.

## A poslední věc

Tohle období nezvládáte špatně. Nikdo ho nezvládá dobře. Není to zkouška z vyrovnanosti a nikdo vám za ni nedá body. Cíl je dojít do konce týdne, ne dojít do konce týdne elegantně.

> Text je podpůrný a nenahrazuje odbornou psychologickou ani lékařskou péči. Pokud vás úzkost dlouhodobě vyčerpává nebo se objeví myšlenky na sebepoškození, vyhledejte pomoc neprodleně.`,
      minutes: 6,
      phases: ['embryo_culture', 'fertilization', 'retrieval'],
      dayRange: [1, 6],
      topics: ['psychika', 'cekani', 'sebepece', 'komunita'],
      level: 'comfort',
      hero: 'dawn',
      author: 'Gabi',
      publishedOn: '2026-01-12',
      boost: 0.8,
    },
    {
      id: 'cyk-kviz-rozumite-svemu-cyklu',
      kind: 'quiz',
      title: 'Kvíz: rozumíte svému cyklu?',
      excerpt:
        'Osm otázek, po kterých budete na konzultaci vědět, na co se ptát — a co si nemusíte brát osobně.',
      body: `## K čemu tenhle kvíz je

Není to zkouška. Je to způsob, jak si projít pojmy, které kolem vás během cyklu budou lítat, a zjistit, kde máte díru. Díra v porozumění není ostuda — je to jen seznam otázek na příští konzultaci.

Každá odpověď má vysvětlení. Přečtěte si ho i tehdy, když jste odpověděla správně: často je v něm ta část, kterou nikdo neříká nahlas.

## Jak s výsledkem naložit

Otázky, ve kterých jste tápala, si napište. Vezměte si papír na konzultaci a projděte je s lékařem nebo embryologem. Nejlepší pacientka není ta, která ví všechno. Je to ta, která umí položit konkrétní otázku.

> Kvíz slouží k orientaci v pojmech a nenahrazuje lékařskou péči ani konzultaci.`,
      minutes: 5,
      phases: ['ivf_prep', 'stimulation', 'retrieval', 'fertilization', 'embryo_culture'],
      topics: ['stimulace', 'embryologie', 'hormony', 'klinika'],
      level: 'deep',
      hero: 'sand',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-01-18',
      quiz: [
        {
          q: 'Co je folikul?',
          options: [
            'Jiné slovo pro vajíčko',
            'Tekutinou vyplněný váček ve vaječníku, ve kterém vajíčko dozrává',
            'Část děložní sliznice',
            'Embryo ve druhém dni vývoje',
          ],
          correct: 1,
          explain:
            'Ultrazvuk vidí folikul, ne vajíčko samotné. Proto se počet odebraných vajíček skoro nikdy nerovná počtu folikulů — některé mohou být prázdné nebo obsahovat nezralé vajíčko.',
        },
        {
          q: 'Proč se u triggeru tak přísně hlídá hodina aplikace?',
          options: [
            'Kvůli organizaci provozu kliniky',
            'Protože zrání vajíček po triggeru trvá určitou dobu a odběr se plánuje těsně před tím, než by folikuly praskly samy',
            'Protože lék je účinný jen ve večerních hodinách',
            'Kvůli tomu, aby se nesešlo víc pacientek najednou',
          ],
          correct: 1,
          explain:
            'Odběr příliš brzy znamená nezralá vajíčka, příliš pozdě znamená prázdný odběr. Pokud se s časem spletete, volejte kliniku okamžitě — existují postupy, jak to řešit.',
        },
        {
          q: 'Který z těchto příznaků po odběru vyžaduje okamžitý telefonát na kliniku?',
          options: [
            'Mírné nadmutí a pocit tlaku v podbřišku',
            'Slabé špinění první den',
            'Přírůstek hmotnosti o víc než kilogram za den spolu s dušností',
            'Únava a potřeba spát',
          ],
          correct: 2,
          explain:
            'Rychlý nárůst hmotnosti, rostoucí obvod břicha a dušnost patří mezi varovné příznaky OHSS. Nečekejte do rána, volejte kliniku nebo pohotovost.',
        },
        {
          q: 'Jaký je rozdíl mezi klasickým IVF a ICSI?',
          options: [
            'ICSI se dělá až po zamrazení',
            'U klasického IVF si spermie najde cestu do vajíčka sama, u ICSI ji embryolog vpraví dovnitř mikropipetou',
            'ICSI znamená přenos dvou embryí',
            'Klasické IVF se používá jen u dárcovských vajíček',
          ],
          correct: 1,
          explain:
            'ICSI se volí například u mužského faktoru, po předchozím selhání oplození nebo před genetickým testováním. Obchází bariéru obalu vajíčka, ale nezaručuje oplození ani neřeší kvalitu gamet.',
        },
        {
          q: 'Co se hodnotí první den po oplození?',
          options: [
            'Počet buněk embrya',
            'Přítomnost dvou prvojader jako znak normálního oplození',
            'Stupeň expanze blastocysty',
            'Tloušťka děložní sliznice',
          ],
          correct: 1,
          explain:
            'Dvě prvojádra znamenají, že se spojila genetická informace z vajíčka a ze spermie. Embrya s jiným počtem prvojader se dál nekultivují.',
        },
        {
          q: 'Co znamená, když blastocysta dozraje až šestý den místo pátého?',
          options: [
            'Embryo je vadné a nepoužije se',
            'Je to běžná varianta; z blastocyst šestého dne se rodí děti a obvykle se zamrazují',
            'Znamená to jistotu dvojčat',
            'Musí se opakovat celá stimulace',
          ],
          correct: 1,
          explain:
            'Rychlost vývoje je dána z části genetikou embrya a z části podmínkami. Pomalejší start nepředpovídá horší dítě.',
        },
        {
          q: 'Co hodnocení embrya typu 4AA neříká?',
          options: [
            'Jak je blastocysta rozvinutá',
            'Jak vypadá vnitřní buněčná masa',
            'Jestli má embryo správný počet chromozomů',
            'Jak vypadá vnější vrstva budoucí placenty',
          ],
          correct: 2,
          explain:
            'Hodnocení popisuje vzhled, ne genetiku. Embryo s výborným hodnocením může mít chromozomální odchylku a naopak. Proto se hodnocení používá k seřazení, ne jako předpověď.',
        },
        {
          q: 'Kdy může klinika doporučit zamrazit všechna embrya místo čerstvého transferu?',
          options: [
            'Když je riziko OHSS nebo když se předčasně zvýšil progesteron',
            'Vždy, když je embryí víc než tři',
            'Jen na přání pacientky',
            'Pouze u žen nad 40 let',
          ],
          correct: 0,
          explain:
            'Odložení transferu chrání vaše zdraví i vaši šanci. Není to komplikace ani horší varianta — u části žen je mražený transfer volbou první volby.',
        },
      ],
      boost: 0.6,
    },
    {
      id: 'cyk-checklist-pred-startem',
      kind: 'checklist',
      title: 'Než začne cyklus: co si zařídit, dokud máte klidnou hlavu',
      excerpt:
        'Papíry, peníze, kalendář a jeden rozhovor s partnerem. Po startu stimulace už na to nebude prostor.',
      body: `## Proč to řešit teď

Ve chvíli, kdy začnete píchat, se váš svět zúží na kontroly, čísla a čekání. Všechno, co jde vyřídit předem, vyřiďte předem — ne proto, že by to jinak nešlo, ale proto, že vaše kapacita na administrativu bude v příštích třech týdnech minimální.

## Čtyři oblasti

**Papíry.** Souhlasy, smlouvy, výsledky vyšetření, platnost povinných testů. Zeptejte se kliniky, co má expiraci a kdy.

**Peníze.** Vědět dopředu, co je hrazené z pojištění, co si platíte a kdy se platí, ušetří vám nepříjemné překvapení uprostřed cyklu.

**Kalendář.** Ranní kontroly, den odběru, pravděpodobný den transferu. I když termíny nejsou přesné, hrubý odhad se dá udělat.

**Vy dva.** Jeden konkrétní rozhovor předem — o tom, kdo volá klinice, komu to řeknete, co uděláte, když to nevyjde. Není to černá magie, je to plán.

> Seznam je obecný. Konkrétní požadavky na vyšetření, souhlasy a platby vám sdělí vaše klinika.`,
      minutes: 4,
      phases: ['ivf_prep'],
      dayRange: [0, 21],
      topics: ['klinika', 'finance', 'vztah', 'partner'],
      level: 'essential',
      hero: 'sand',
      author: 'Tým Bloomia',
      publishedOn: '2026-01-24',
      boost: 0.85,
      checklist: [
        { id: 'cyk-pre-souhlasy', text: 'Přečtené a podepsané informované souhlasy', hint: 'Včetně části o nakládání s embryi. Čtěte to spolu, ne cestou z ordinace.', group: 'Papíry' },
        { id: 'cyk-pre-vysetreni', text: 'Zkontrolovaná platnost povinných vyšetření obou partnerů', group: 'Papíry' },
        { id: 'cyk-pre-recept', text: 'Vyzvednuté recepty a ověřená dostupnost léků v lékárně', hint: 'Některé přípravky se objednávají a nejsou skladem hned.', group: 'Papíry' },
        { id: 'cyk-pre-zprava', text: 'Uložený plán léčby a rozpis od lékaře v telefonu i vytištěný', group: 'Papíry' },
        { id: 'cyk-pre-cena', text: 'Vím, co je hrazené z pojištění a co si doplácíme', group: 'Peníze' },
        { id: 'cyk-pre-doplatky', text: 'Vím, kolik stojí případné doplňkové metody a kdy se rozhoduje', group: 'Peníze' },
        { id: 'cyk-pre-skladovani', text: 'Vím, kolik stojí skladování embryí a jak dlouho je smlouva platná', optional: true, group: 'Peníze' },
        { id: 'cyk-pre-kalendar', text: 'Zablokované dopoledne na kontroly v příštích třech týdnech', group: 'Kalendář' },
        { id: 'cyk-pre-odber', text: 'Držené dva volné dny kolem předpokládaného odběru', group: 'Kalendář' },
        { id: 'cyk-pre-zastup', text: 'Domluvený zástup v práci na den odběru', optional: true, group: 'Kalendář' },
        { id: 'cyk-pre-doprovod', text: 'Domluvený doprovod na den odběru', group: 'Kalendář' },
        { id: 'cyk-pre-rozhovor', text: 'Proběhl rozhovor s partnerem o tom, kdo volá klinice a komu to řekneme', group: 'Vy dva' },
        { id: 'cyk-pre-scenar', text: 'Řekli jsme si nahlas, co uděláme, když to nevyjde', hint: 'Ne proto, abyste to přivolávali. Proto, abyste nebyli zaskočení.', group: 'Vy dva' },
        { id: 'cyk-pre-podpora', text: 'Vybraný jeden člověk mimo vztah, kterému se dá zavolat', group: 'Vy dva' },
        { id: 'cyk-pre-psycholog', text: 'Zjištěný kontakt na psychologa se zkušeností s reprodukční medicínou', optional: true, group: 'Vy dva' },
      ],
    },
    {
      id: 'cyk-partner-behem-cyklu',
      kind: 'article',
      title: 'Partner v cyklu: co dělat, když se cítí zbytečný',
      excerpt:
        'On odevzdá vzorek za pět minut, vy píchate deset dní. Tady je, jak z toho neudělat trhlinu.',
      body: `## Nerovnováha, kterou nikdo nepřizná

Fyzicky nese cyklus žena. Injekce, kontroly, anestezie, hormony, nadmuté břicho, čekání s vlastním tělem uprostřed. Muž mezitím **odevzdá vzorek** a jinak stojí vedle.

Z toho vznikají dvě různé bolesti, které se často srazí:

- **Její:** „Nesu to celé sama a on to nechápe."
- **Jeho:** „Nemůžu udělat vůbec nic a přitom je to i moje dítě."

Obojí je pravda. Problém není v tom, kdo trpí víc. Problém je v tom, že si o tom nemluví.

## Konkrétní věci, které partner může převzít

Neurčité „řekni si, co potřebuješ" nefunguje, protože v tom stavu nevíte, co potřebujete. Fungují konkrétní role:

1. **Správce léků.** Kontrola zásob tři dny dopředu, vyzvedávání v lékárně, hlídání expirací, sledování rozpisu.
2. **Řidič a doprovod.** Ranní kontroly, den odběru, cesta domů.
3. **Zapisovatel.** Chodí s vámi na konzultace a píše, co lékař řekl. Vy si to nezapamatujete, on ano.
4. **Ten, kdo volá klinice.** Když se něco změní nebo když si nejste jistá, on zvedne telefon.
5. **Píchač.** Spousta párů to tak dělá a spoustě mužů to konečně dá pocit, že něco dělají.
6. **Ochranná zeď.** Odpovídá rodině a přátelům, odklání otázky, kryje vás.

Vyberte si spolu **tři a napište je na papír.** Ne všechny — tři.

## Co partnerovi řekněte přímo

Řada mužů má výborný úmysl a katastrofální provedení, protože neví, co se od nich čeká. Zkuste tyhle věty:

- „Nechci teď řešení. Chci, abys mě chvíli držel."
- „Když se rozbrečím, není to tvoje chyba a nemusíš to spravit."
- „Nechci slyšet, že to bude dobré. Nevíš to a mě to štve."
- „Potřebuju, abys tuhle věc vyřídil ty. Nechci na ni myslet."

A naopak, co říct jemu: **„Není to jen moje léčba. Je to naše."** Řada mužů tuhle větu nikdy neuslyší a přitom na ni čeká.

## Den odevzdání vzorku

Neřešená věc, o které se ve dvojici mluví minimálně. Realita: **odevzdat vzorek na povel, v cizí místnosti, v den, kdy vy ležíte na sále, je stresující.** Selhání erekce nebo obtížný odběr v téhle situaci nejsou vzácnost a nemají nic společného s tím, jak moc chce dítě.

Co pomáhá:

- Vědět dopředu, že **existuje záložní plán** — zamražený vzorek předem, případně jiné řešení, které klinika nabídne.
- **Nedělat z toho vtip** ani ten den, ani potom.
- Domluvit se předem, jestli chce být doprovázený, nebo raději sám.

Pokud je ve hře **mužský faktor**, přidává se navíc pocit viny. Připomeňte mu, že spermiogram není hodnocení jeho hodnoty a že diagnóza je vaše společná, ne jeho osobní.

## Když se hádáte

Během stimulace se hádáte víc. Hormony, nevyspání, peníze, strach. Doporučení, které funguje: **zaveďte pravidlo, že o zásadních věcech se nerozhoduje po deváté večer a v den kontroly.** Odložit hádku na sobotu dopoledne vypadá směšně a funguje.

## Když on nechce mluvit vůbec

Část mužů zvládá zátěž mlčením a činností. Není to lhostejnost, i když to tak vypadá. Zkuste místo „musíme si promluvit" nabídnout **činnost, u které se mluví snáz** — procházka, cesta autem, mytí nádobí vedle sebe.

Pokud ale mlčení trvá týdny a vy se cítíte sama, řekněte to nahlas a zvažte pár sezení u odborníka. Léčba neplodnosti je jedna z nejtěžších zkoušek, jaké může vztah potkat, a hledat pomoc není známka slabosti vztahu.

## Jedna věta na závěr pro něj

Nemusíte to spravit. Máte u toho být. To je celý úkol a je těžší, než vypadá.

> Text je podpůrný a nenahrazuje párovou terapii ani lékařskou péči.`,
      minutes: 7,
      phases: ['stimulation', 'retrieval', 'ivf_prep', 'fertilization'],
      dayRange: [0, 12],
      topics: ['partner', 'vztah', 'psychika'],
      excludeModifiers: ['single_mother'],
      level: 'deep',
      hero: 'blush',
      author: 'Gabi',
      publishedOn: '2026-02-02',
      boost: 0.7,
    },
    {
      id: 'cyk-strava-a-pohyb-ve-stimulaci',
      kind: 'article',
      title: 'Jídlo a pohyb během stimulace: co má smysl a co je jen další tlak',
      excerpt:
        'Ne, ananas to nespraví. Tady je, co během stimulace skutečně pomáhá vašemu tělu.',
      body: `## Nejdřív rovnou

Neexistuje jídlo, které by zvýšilo počet vajíček nebo zlepšilo kvalitu embryí během probíhajícího cyklu. **Kvalita vajíček se utváří měsíce dopředu**, ne během deseti dnů stimulace. Cokoli, co vám slibuje opak, po vás většinou chce peníze.

Co strava a pohyb během stimulace ovlivnit můžou: **jak se cítíte, jak snášíte nadmutí, jak vám funguje trávení a jak jste zavodněná.** To není málo.

## Co má oporu a smysl

**Bílkoviny.** Zvýšený příjem bílkovin se běžně doporučuje během stimulace a po odběru, protože bílkoviny v krvi pomáhají udržet tekutinu tam, kde má být. Prakticky: v každém jídle nějaký zdroj — vejce, ryba, maso, luštěniny, tvaroh, jogurt.

**Tekutiny.** Pravidelně, průběžně, ne najednou. Kombinujte vodu s minerální vodou nebo vývarem. Sledujte, kolik močíte — je to nejjednodušší kontrola.

**Vláknina.** Progesteron a nehybnost zpomalují střeva spolehlivě. Ovesné vločky, zelenina, švestky, lněné semínko namočené ve vodě.

**Pravidelnost jídla.** Vynechané jídlo plus hormonální výkyv je recept na odpolední kolaps. Jezte spíš častěji a menší porce — nadmuté břicho velké porce nesnese.

**Kyselina listová a doporučené doplňky.** Užívejte to, co vám předepsal lékař. Nic nepřidávejte na vlastní pěst — některé doplňky mohou interagovat s léčbou.

## Co omezit

- **Alkohol** — během cyklu vynechte.
- **Kouření** — pokud kouříte, tohle je nejsilnější věc, kterou můžete pro léčbu udělat, i když je pozdě na zázraky.
- **Nadměrná kofein.** Umírněné množství se obvykle nezakazuje; zeptejte se na klinice, jaké množství považují za přijatelné.
- **Extrémní diety, hladovky a detoxy.** Během stimulace je to poslední, co vaše tělo potřebuje.

## Pohyb: pravidla se během stimulace mění

Tohle je důležitější, než většina žen tuší. **Vaječníky během stimulace výrazně zvětšují objem** — z několika centimetrů mohou narůst násobně. Zvětšený vaječník se může zkroutit kolem své osy (torze), což je akutní stav vyžadující okamžitou pomoc.

Proto od zhruba poloviny stimulace až do doby, kterou určí klinika:

- **Vhodné:** chůze, pomalé protažení, klidná jóga bez inverzí a bez prudkých rotací, dechová cvičení.
- **Nevhodné:** běh, skákání, HIIT, jízda na kole po nerovném terénu, kontaktní sporty, jízda na koni, zvedání těžkého, prudké změny polohy.
- **Po odběru** platí omezení dál, dokud vám lékař neřekne jinak.

Pokud jste zvyklá cvičit denně, je to nepříjemná změna. Berte to jako dočasné opatření s konkrétním důvodem, ne jako trest.

## Kdy volat lékaře

Volejte okamžitě při **náhlé prudké jednostranné bolesti břicha**, zvlášť když je doprovázená zvracením nebo mdlobou — může jít o torzi vaječníku. Dále při rychlém nafouknutí, dušnosti, teplotě nad 38 °C nebo výrazném snížení množství moči.

## O čem se nemluví: tlak na dokonalost

Během léčby se na ženy valí lavina rad. Ananas, granátové jablko, teplé nohy, žádný cukr, akupunktura, tři druhy doplňků. Většina z toho vychází z dobrého úmyslu a všechny dohromady vytvářejí něco velmi škodlivého: **pocit, že když to nevyjde, byla to vaše chyba.**

Nebyla. Nebude. Jezte rozumně, pijte, hýbejte se opatrně, berte to, co vám předepsal lékař, a zbytek energie si nechte na věci, které vám dělají dobře.

> Text obsahuje obecná doporučení a nenahrazuje individuální výživovou ani lékařskou konzultaci. Jakékoli doplňky stravy konzultujte se svým lékařem.`,
      minutes: 6,
      phases: ['stimulation', 'ivf_prep', 'retrieval'],
      dayRange: [0, 12],
      topics: ['strava', 'pohyb', 'sebepece'],
      level: 'deep',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
      publishedOn: '2026-02-10',
      boost: 0.6,
    },
    {
      id: 'cyk-hormonalni-houpacka',
      kind: 'article',
      title: 'Hormonální houpačka: proč brečíte u reklamy a není to vaše selhání',
      excerpt:
        'Během deseti dnů vám hladina estradiolu vyroste na násobky běžného cyklu. Vaše hlava to pozná.',
      body: `## Co se s vámi děje

Během stimulace roste hladina estradiolu úměrně počtu a velikosti folikulů. Za deset dnů se dostane výrazně výš, než kam se kdy dostane v přirozeném cyklu. **Estradiol ovlivňuje nervový systém** — spánek, chuť k jídlu, emoční reaktivitu, schopnost soustředit se.

K tomu přidejte:

- **nevyspání** z brzkých kontrol,
- **strach z výsledku**, který nemůžete ovlivnit,
- **fyzickou nepohodu** z nafouknutého břicha,
- **peníze**, které v tom jsou,
- a případně **osobní historii** — předchozí neúspěchy, ztráty, roky snažení.

Není divu, že se rozbrečíte u reklamy na pojištění. Divné by bylo, kdyby ne.

## Co je typické a přejde

- **Prudké výkyvy nálady** během jednoho dne.
- **Podrážděnost**, hlavně vůči nejbližším.
- **Plačtivost** bez zjevného spouštěče.
- **Zhoršená koncentrace a zapomínání.** Napište si všechno.
- **Přecitlivělost na těhotná břicha a kojenecké fotky.** Odhlaste se ze sociálních sítí, klidně na tři týdny.
- **Přerušovaný spánek** a probouzení nad ránem.
- **Pocit odcizení od vlastního těla.**

Tohle typicky ustupuje během několika dnů až dvou týdnů po skončení stimulace.

## Co pomáhá prakticky

**Zjednodušte rozhodování.** Připravené oblečení, jednoduchá jídla, žádné velké nákupy a životní rozhodnutí. Rozhodovací kapacita je teď omezená surovina.

**Nechte si věci, které fungují bez přemýšlení.** Seriál, který znáte nazpaměť. Procházka po stejné trase. Hudba, kterou máte v uchu roky.

**Pojmenujte to nahlas.** „Jsem teď hrozně citlivá a je to z léků." Rodina vám odpustí dvakrát tolik, když ví proč.

**Omezte vstupy.** Diskusní fóra, zpravodajství, telefonáty s lidmi, kteří vás vyčerpávají. Není to malichernost, je to hygiena.

**Dech s prodlouženým výdechem.** Nádech na čtyři, výdech na šest, deset kol. Jediná věc, kterou vědomě ovlivníte nervový systém během třiceti vteřin.

**Pohyb v mírné formě.** Chůze venku, ideálně ráno. Nic prudkého — vaječníky jsou zvětšené.

## Co si nedělejte

- **Nesrovnávejte se** s ženami, které „to zvládaly v pohodě". Buď to nebyla pravda, nebo měly jiné dávky, jinou anamnézu a jiný život.
- **Nevyčítejte si emoce.** Stres neničí embrya. Kdyby ano, polovina světové populace by se nenarodila.
- **Neslibujte, že budete pozitivní.** Nemusíte být. Musíte jen dojít do konce cyklu.

## Kdy to už není hormonální houpačka

Ozvěte se lékaři nebo vyhledejte psychologickou pomoc, pokud:

- **nespíte** několik nocí po sobě,
- **nejste schopná fungovat** v běžném dni,
- **nejíte** nebo naopak nezvládáte jídlo udržet,
- **cítíte beznaděj**, která nepolevuje ani na chvíli,
- máte **myšlenky na sebepoškození nebo na to, že by bylo lepší nebýt** — v tomhle případě vyhledejte pomoc neprodleně, například u své kliniky, praktického lékaře nebo na krizové lince.

Máte-li v anamnéze depresi nebo úzkostnou poruchu, řekněte to svému reprodukčnímu týmu předem. Není to informace navíc, je to důležitá součást vaší péče.

## Poslední věc

Nikdo vám za tenhle cyklus nedá známku z vyrovnanosti. Cílem není projít to elegantně. Cílem je projít to.

> Text je podpůrný a nenahrazuje odbornou psychologickou ani psychiatrickou péči.`,
      minutes: 6,
      phases: ['stimulation', 'retrieval', 'fertilization'],
      dayRange: [3, 12],
      topics: ['psychika', 'hormony', 'sebepece'],
      level: 'comfort',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-02-18',
      boost: 0.75,
    },
    {
      id: 'cyk-podcast-embryolog',
      kind: 'podcast',
      title: 'Podcast: co se opravdu děje za dveřmi laboratoře',
      excerpt:
        'Rozhovor o tom, jak vypadá běžný den embryologa a proč vám nikdy neřekne procenta v den jedna.',
      body: `## O čem je tahle epizoda

Většina žen si laboratoř představuje jako bílou místnost s obřími mikroskopy a týmem, který se dívá na jejich embrya nepřetržitě. Skutečnost je jiná a je uklidňující: laboratoř je **tmavá, tichá a její hlavní pravidlo zní nerušit**.

V epizodě mluvíme o tom, jak vypadá běžný den v embryologické laboratoři — od chvíle, kdy okénkem přijdou první zkumavky z odběrového sálu, po večerní kontrolu inkubátorů.

**Část první: ráno.** Vyhledávání vajíček v odsáté tekutině, posouzení zralosti, příprava vzorku spermií. Proč se identita pacientky kontroluje při každém jednotlivém kroku a proč je to vždy dvakrát.

**Část druhá: proč se embrya nesledují pořád.** Vysvětlení, proč každé vyndání misky z inkubátoru znamená změnu teploty a složení plynů, a proč se tedy hodnocení dělá v přesně daných časech, ne kdykoli.

**Část třetí: telefonáty.** Jak se sdělují čísla. Proč embryolog neříká procenta úspěšnosti v den po odběru — ne proto, že by je tajil, ale proto, že v ten okamžik neexistují. Co naopak říct umí a na co se ho ptát.

**Část čtvrtá: co embryologa v téhle práci nejvíc drží.** A co ho nejvíc bolí — nejčastěji věta „takže jsem to zkazila", kterou od pacientek slyší pravidelně a která nikdy nebyla pravda.

## Věta, která z epizody nejvíc zůstane

„Když se embryo zastaví, není to proto, že by u něj někdo stál špatně. Je to proto, že si tu informaci přineslo s sebou. My tomu jen přihlížíme a snažíme se mu k tomu vytvořit nejlepší možné podmínky."

## Pro koho to je

Pro každou, kdo je teď mezi odběrem a transferem a nedokáže si představit, kde její embrya vlastně jsou. Pomůže to i partnerům — je to jediná část procesu, která je technická a dá se pochopit bez emocí.

> Obsah je informativní a obecný. Konkrétní informace o vašich embryích vám může poskytnout pouze embryolog vaší kliniky.`,
      minutes: 28,
      phases: ['fertilization', 'embryo_culture', 'retrieval'],
      dayRange: [0, 6],
      topics: ['embryologie', 'klinika', 'cekani'],
      level: 'deep',
      hero: 'pearl',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-03-02',
      mediaNote:
        'Osmadvacetiminutový rozhovor v klidném tempu, bez hudebních předělů. Slyšíte otázky laika a odpovědi embryologa, včetně popisu zvuků laboratoře a vysvětlení, proč se inkubátory otevírají co nejméně.',
      boost: 0.55,
    },
    {
      id: 'cyk-pribeh-druha-stimulace',
      kind: 'story',
      title: 'Příběh: podruhé jsem věděla, na co se ptát',
      excerpt:
        'Kateřina prošla dvěma stimulacemi. Ten rozdíl nebyl v číslech, ale v tom, co si o nich dovolila myslet.',
      body: `## První cyklus jsem prožila v tabulce

Měla jsem excel se sedmi sloupci. Den, folikuly vpravo, folikuly vlevo, největší, endometrium, estradiol, poznámka. Vyplňovala jsem ho po každé kontrole a večer jsem se do něj dívala jako do horoskopu.

Osmý den mi napsali, že mám čtrnáct folikulů. Byla jsem šťastná asi dvě hodiny. Pak jsem si našla článek, ve kterém stálo, že z folikulů se získá průměrně méně vajíček, a začala jsem počítat. Čtrnáct minus. Zralých asi. Oplodní se možná. Do blastocysty možná.

Odběr byl v pátek. Vzali jedenáct vajíček, devět bylo zralých, šest se oplodnilo. Pátý den zbyly dvě blastocysty.

Brala jsem to jako propadák. Ze čtrnácti na dvě.

## Co mi řekla embryoložka

Zavolala jsem na kliniku v úterý, prý jestli je normální takový propad. Embryoložka se mě zeptala, jestli mám chvilku, a pak mi to vysvětlila přesně tak, jak jsem to nikde nečetla.

Řekla, že jsem si to spočítala odzadu. Že se nedívám na dvě blastocysty jako na výsledek, ale jako na zbytek. A že to je rozdíl, který si žádná pacientka neuvědomuje, dokud jí to někdo neřekne.

„Vy jste ze čtrnácti folikulů nedostala dvě embrya," řekla. „Vy jste dostala dvě embrya, která prošla vším, co jsme na ně mohli poslat. To není zbytek. To jsou ta, která jsou."

Nevěřila jsem jí. Ale zapamatovala jsem si to.

## Ten cyklus nevyšel

Transfer, dva týdny, negativní test. Druhé embryo zmražené, čekalo.

Trvalo mi čtyři měsíce, než jsem byla schopná řešit další krok. Nešlo o peníze ani o čas. Šlo o to, že jsem si pořád přehrávala, co jsem mohla udělat líp. Jestli jsem měla míň pracovat. Jestli ta káva desátý den. Jestli jsem se měla víc uvolnit, jak mi radila kolegyně.

Na kontrolní konzultaci jsem se poprvé zeptala normálně: **co byste u mě příště udělali jinak?** Doktor mi vysvětlil, co se změní v protokolu a proč. Ne obecně — u mě. Ten rozhovor trval dvacet minut a udělal se mnou víc než čtyři měsíce googlení.

## Druhá stimulace

Vypadala jinak. Ne v číslech — folikulů bylo dokonce míň, jedenáct. Jiná byla já.

Excel jsem si nechala, protože mi dával pocit řádu. Ale přestala jsem do něj psát predikce. Nechala jsem tam jen fakta.

Přestala jsem si číst příběhy jiných žen během dnů ticha. Ne proto, že by byly špatné. Ale protože jsem si z nich vždycky vybrala ten nejhorší a udělala z něj svoji budoucnost.

A hlavně: napsala jsem si na papír pět otázek pro embryologa **před** telefonátem. Když volali, četla jsem je z papíru jako novinářka. Poprvé jsem z toho telefonátu vyšla s informací, ne jen s číslem a bušícím srdcem.

## Jak to dopadlo

Nebudu tady psát konec, protože ten můj konec není váš konec a nechci, abyste si z něj cokoli odvozovala. Řeknu jinou věc.

Rozdíl mezi mým prvním a druhým cyklem nebyl v tom, že bych se druhý raz míň bála. Bála jsem se stejně. Rozdíl byl v tom, že jsem přestala tou léčbou procházet jako obžalovaná, která má dokázat, že se dost snažila.

Nikdo mě nesoudil. To jsem si dělala sama.

## Co bych řekla sama sobě před prvním cyklem

- **Neodvozuj konec z prostředka.** Číslo z osmého dne nic neříká o pátém dni po odběru.
- **Napiš si otázky předem.** V telefonu se ptát neumíš, to je normální.
- **Vyžádej si rozbor po cyklu**, i když nevyšel. Je to nejcennější hodina celé léčby.
- **Nedávej si zásluhu ani vinu** za věci, které se dějí v inkubátoru.
- **Najdi si jednoho člověka.** Ne skupinu, ne fórum. Jednoho.

> Osobní příběh sdílený se svolením. Průběh a výsledky léčby jsou u každé ženy jiné a tento text nenahrazuje lékařskou konzultaci.`,
      minutes: 7,
      phases: ['stimulation', 'embryo_culture', 'fertilization', 'ivf_prep'],
      dayRange: [0, 12],
      topics: ['psychika', 'komunita', 'embryologie', 'stimulace'],
      level: 'comfort',
      hero: 'linen',
      author: 'Tým Bloomia',
      publishedOn: '2026-03-14',
      boost: 0.65,
    },
    // @@ITEMS@@
  ],
  dailyCards: [
    {
      id: 'cyk-dc-prep-papiry',
      phases: ['ivf_prep'],
      dayRange: [0, 7],
      headline: 'Papíry vyřídit teď, dokud máte klidnou hlavu',
      body: 'Souhlasy, platnost vyšetření, recepty a dostupnost léků v lékárně — všechno tohle se vyřizuje mnohem hůř ve chvíli, kdy už píchate a jezdíte na kontroly. Vyhraďte si na to jednu hodinu a mějte to za sebou. Informovaný souhlas si přečtěte celý, včetně části o nakládání s embryi.',
      whatsHappening: [
        'Některá vyšetření mají omezenou platnost a před startem se musí obnovit',
        'Část léků se v lékárně objednává a nejsou skladem hned',
        'V souhlasech se rozhoduje o věcech, které se špatně mění zpětně',
      ],
      task: 'Zavolejte do lékárny a ověřte, že mají všechny vaše léky skladem nebo je stihnou objednat.',
      reflection: 'Je něco v podepsaných dokumentech, čemu jsem nerozuměla a přešla to?',
      tip: 'Uložte si telefon na kliniku i pro mimopracovní dobu — do mobilu i na papír k lednici.',
    },
    {
      id: 'cyk-dc-prep-rozhovor',
      phases: ['ivf_prep'],
      dayRange: [2, 12],
      headline: 'Jeden rozhovor, který se vyplatí mít předem',
      body: 'Než začne stimulace, domluvte se s partnerem na konkrétních rolích: kdo volá klinice, kdo hlídá zásobu léků, kdo vás veze na odběr, komu to řeknete. Neurčité „řekni si, co potřebuješ" v půlce cyklu nefunguje, protože v tu chvíli sama nevíte. Konkrétní úkoly ano.',
      whatsHappening: [
        'Nerovnováha zátěže je v IVF cyklu daná a mluví se o ní málo',
        'Muži často popisují bezmoc z toho, že nemají co dělat',
        'Rozdělené role snižují počet hádek víc než jakékoli předsevzetí',
      ],
      task: 'Vyberte spolu tři konkrétní věci, které přebírá partner, a napište je na papír na lednici.',
      reflection: 'Co bych potřebovala slyšet ve chvíli, kdy mi to nevyjde?',
      tip: 'Domluvte si pravidlo, že o zásadních věcech nerozhodujete po deváté večer.',
    },
    {
      id: 'cyk-dc-prep-kalendar',
      phases: ['ivf_prep'],
      dayRange: [5, 20],
      headline: 'Kalendář na tři týdny dopředu',
      body: 'Kontroly bývají brzy ráno a den odběru dopředu neznáte. Zablokujte si dopoledne v příštích třech týdnech a držte si dva volné dny kolem předpokládaného odběru. Přesunout schůzku je vždycky snazší než vytvořit volno na poslední chvíli.',
      whatsHappening: [
        'Během stimulace vás čekají obvykle tři až pět kontrol',
        'Termín odběru se upřesní až podle růstu folikulů',
        'Po odběru se nesmí řídit auto, doprovod musí být domluvený dopředu',
      ],
      task: 'Otevřete kalendář a přesuňte první ranní schůzku, kterou byste kvůli kontrole musela rušit.',
      reflection: 'Co ze svého kalendáře můžu v příštích třech týdnech úplně škrtnout?',
      tip: 'Zaměstnavateli nemusíte sdělovat diagnózu. Stačí, že jde o lékařskou léčbu s ranními kontrolami.',
    },
    {
      id: 'cyk-dc-prep-vybava',
      phases: ['ivf_prep'],
      dayRange: [10, 30],
      headline: 'Postavte si domácí základnu',
      body: 'Jedna krabice, jedno místo: jehly, dezinfekce, nádoba na ostrý odpad, papírový rozpis. Léky do střední police lednice, nikdy do dvířek a nikdy k zadní stěně, kde by mohly zmrznout. Až přijde první ráno, chcete jen natáhnout ruku.',
      whatsHappening: [
        'Zmrzlý lék se nesmí použít, ani když po rozmrazení vypadá v pořádku',
        'Nádobu na ostrý odpad dostanete v lékárně a plnou ji tam vrátíte',
        'Dvě jehly navíc jsou nejlevnější pojistka celého cyklu',
      ],
      task: 'Vyskládejte všechny pomůcky do jedné krabice a postavte ji na místo, kam nikdo jiný nesahá.',
      reflection: 'Co mi ještě chybí, abych se ráno nemusela nic rozhodovat?',
      tip: 'Vytiskněte si rozpis dávek na papír a pověste ho na lednici. Papír nevybije baterii.',
    },
    {
      id: 'cyk-dc-stim-d0',
      phases: ['stimulation'],
      day: 0,
      headline: 'První injekce. Nejhorší je čekání na ni',
      body: 'Dneska poprvé otevřete krabičku a uděláte to, co jste si sto let představovala. Jehla je velmi tenká a krátká, bolí to méně než odběr krve — problém není bolest, ale to, že si to musíte udělat sama. Udělejte to podle pevného postupu, ne podle nálady.',
      whatsHappening: [
        'Ve vaječnících je probuzená skupina folikulů, které stimulace udrží ve hře',
        'Dnes ještě nic nepocítíte — účinek se projeví za několik dnů',
        'Vaše tělo si zvyká na hormon, který normálně tvoří samo, jen v menším množství',
      ],
      task: 'Připravte si všechno na stůl už teď, hodinu před aplikací. Vybalte, přečtěte, položte.',
      reflection: 'Čeho se na tom nejvíc bojím — bolesti, nebo toho, co ta injekce znamená?',
      tip: 'Nechte lék pár minut mimo lednici. Studený roztok pálí víc a dělá víc modřin.',
      callDoctorIf: [
        'Objeví se vyrážka po těle, otok rtů či obličeje nebo dušnost',
        'Máte horečku nad 38 °C bez jiného vysvětlení',
        'Nejste si jistá, jestli jste aplikovala celou dávku',
      ],
    },
    {
      id: 'cyk-dc-stim-d1',
      phases: ['stimulation'],
      day: 1,
      headline: 'Druhý den. Rutina začíná dnes',
      body: 'První injekce byla událost, ta druhá je začátek rutiny — a rutina je přesně to, co vás příštích deset dní udrží. Zapište si čas aplikace a místo vpichu, i když si myslíte, že si to zapamatujete. Za čtyři dny už to vědět nebudete.',
      whatsHappening: [
        'Folikuly začínají reagovat, ale zatím nic nevidíte ani necítíte',
        'Případná modřina po prvním vpichu je běžná a účinek léku nesnižuje',
        'Tělo si zvyká; první dny bývají fyzicky nejlehčí z celé stimulace',
      ],
      task: 'Nakreslete si na papír čtyři kvadranty břicha a zaznamenejte, kde jste dnes píchla.',
      reflection: 'Co mi včera pomohlo to zvládnout a co si můžu zopakovat?',
      tip: 'Do stejného bodu se nevracejte dřív než za týden. Střídejte kvadranty dokola.',
      callDoctorIf: [
        'Místo vpichu je horké, tvrdé a zarudnutí se během dne zvětšuje',
        'Objeví se kopřivka, otok obličeje nebo dušnost',
      ],
    },
    {
      id: 'cyk-dc-stim-d2',
      phases: ['stimulation'],
      day: 2,
      headline: 'Zatím se nic neděje. To je v pořádku',
      body: 'Třetí den bývá zklamáním pro každou, kdo čekala, že něco pozná. Folikuly rostou pomalu, zhruba o milimetr až dva denně, a v téhle fázi mají jen několik milimetrů. Nic necítit není špatné znamení, je to normální průběh.',
      whatsHappening: [
        'Skupina folikulů roste zatím rovnoměrně a nenápadně',
        'Estradiol začíná stoupat, ale ještě pod hranicí, kdy byste to poznala',
        'První kontrola bývá po čtyřech až pěti dnech stimulace',
      ],
      task: 'Připravte si tabulku na zápis kontrol: datum, folikuly vpravo a vlevo, největší, endometrium, estradiol.',
      reflection: 'Jaké očekávání jsem si na tenhle týden sama vytvořila?',
      tip: 'Nepočítejte dopředu. Číslo z první kontroly nepředpovídá číslo z poslední.',
    },
    {
      id: 'cyk-dc-stim-d3',
      phases: ['stimulation'],
      day: 3,
      headline: 'Modřiny přicházejí. Netřete je',
      body: 'Kolem třetího a čtvrtého dne se objevují první barevné skvrny na břiše. Vznikají tím, že jehla cestou minula tuk a trefila drobnou cévku — nemá to vliv na účinek léku. Nejčastější příčinou není samotný vpich, ale tření místa po vytažení jehly.',
      whatsHappening: [
        'Prvních 24 hodin po vpichu pomáhá chlad, potom naopak vlažné teplo',
        'Modřiny obvykle mizí do dvou až tří týdnů po poslední injekci',
        'Pálení při aplikaci nejčastěji způsobí studený roztok nebo neoschlá dezinfekce',
      ],
      task: 'Po dnešním vpichu přitiskněte suchý čtvereček na deset vteřin a nesahejte na místo.',
      reflection: 'Vadí mi, jak moje břicho vypadá — a komu to vlastně vysvětluju?',
      tip: 'Zeptejte se v lékárně na mast na modřiny, kterou můžete použít mimo čerstvé místo vpichu.',
      callDoctorIf: [
        'V místě vpichu vznikne bolestivý horký bulek, který se zvětšuje',
        'Objeví se rozsáhlá modřina bez souvislosti s vpichem',
        'Máte horečku nad 38 °C',
      ],
    },
    {
      id: 'cyk-dc-stim-d4',
      phases: ['stimulation'],
      day: 4,
      headline: 'První kontrola je za dveřmi',
      body: 'Kolem čtvrtého až pátého dne přichází první folikulometrie a s ní první čísla. Vyšetření trvá pár minut, dělá se vaginální sondou a bez plného měchýře. Připravte si dvě otázky, ať z ordinace neodejdete jen s pocitem, že to asi bylo v pořádku.',
      whatsHappening: [
        'Folikuly by v tuhle dobu měly být zhruba v polovině cesty k cílové velikosti',
        'Souběžně se obvykle nabírá krev na estradiol',
        'Podle výsledku se může změnit dávka — je to běžná úprava, ne komplikace',
      ],
      task: 'Napište si na papír dvě otázky pro lékaře: kolik folikulů a jak velkých dnes vidíte.',
      reflection: 'Co udělám, pokud dnešní číslo bude nižší, než jsem doufala?',
      tip: 'Zapište si čísla hned v čekárně. Do večera si je zapamatujete špatně.',
    },
    {
      id: 'cyk-dc-stim-d5',
      phases: ['stimulation'],
      day: 5,
      headline: 'Možná přibude druhá injekce',
      body: 'V antagonistickém protokolu se zhruba v téhle době přidává druhý lék, který zabrání předčasné ovulaci. Znamená to dvě injekce denně a je to plánovaná součást protokolu, ne znamení, že se něco nedaří. Zkontrolujte si rozpis, ať víte, co se aplikuje kdy.',
      whatsHappening: [
        'Antagonista blokuje signál, který by jinak spustil ovulaci dřív, než je čas',
        'Břicho může začít být citlivé, vaječníky se zvětšují',
        'Estradiol roste rychleji než v prvních dnech',
      ],
      task: 'Přepište si rozpis dávek podle posledního pokynu z kliniky a starý papír zahoďte.',
      reflection: 'Kolik energie mi dnes zbylo na věci, které nesouvisejí s léčbou?',
      tip: 'Pro ranní a večerní dávku používejte různé strany břicha.',
      callDoctorIf: [
        'Nejste si jistá, kterou injekci a v jakém pořadí máte dnes aplikovat',
        'Objeví se prudká bolest břicha nebo mdloba',
      ],
    },
    {
      id: 'cyk-dc-stim-d6',
      phases: ['stimulation'],
      day: 6,
      headline: 'Břicho začíná dávat vědět',
      body: 'Zhruba od poloviny stimulace cítí většina žen tlak v podbřišku, nadmutí a těžkost. Vaječníky, které normálně měří pár centimetrů, jsou teď výrazně větší a plné rostoucích folikulů. Od téhle chvíle platí: žádný běh, skákání ani zvedání těžkého.',
      whatsHappening: [
        'Zvětšený vaječník se může zkroutit kolem své osy — proto omezení pohybu',
        'Nadmutí a plynatost jsou očekávané, ne varovné',
        'Kalhoty s gumou v pase přestávají být dobrý nápad',
      ],
      task: 'Vyndejte ze skříně nejvolnější kalhoty nebo šaty a připravte si je na příští dny.',
      reflection: 'Dovolím si teď zpomalit, nebo se pořád snažím stíhat všechno jako předtím?',
      tip: 'Pijte průběžně a přidejte v každém jídle zdroj bílkovin.',
      callDoctorIf: [
        'Náhlá prudká jednostranná bolest břicha, zvlášť se zvracením nebo mdlobou',
        'Rychlé nafouknutí břicha spolu s dušností',
        'Teplota nad 38 °C',
      ],
    },
    {
      id: 'cyk-dc-stim-d7',
      phases: ['stimulation'],
      day: 7,
      headline: 'Hlava jede naplno a soustředit se nejde',
      body: 'Estradiol je teď výrazně výš než kdykoli v přirozeném cyklu a váš nervový systém to pozná. Zhoršená koncentrace, plačtivost a podrážděnost vůči nejbližším jsou v téhle fázi typické. Není to slabost a není to vaše selhání — je to léčba.',
      whatsHappening: [
        'Folikuly rostou a s nimi i hladina estradiolu',
        'Přerušovaný spánek a probouzení nad ránem jsou běžné',
        'Přecitlivělost na těhotná břicha a fotky dětí se v téhle fázi zesiluje',
      ],
      task: 'Odhlaste se na tři týdny ze sociální sítě, která vás nejvíc bere. Stačí smazat aplikaci z plochy.',
      reflection: 'Komu jsem dnes odsekla a bylo to opravdu o něm?',
      tip: 'Nádech na čtyři, výdech na šest, deset kol. Prodloužený výdech je jediná zkratka k nervovému systému, kterou máte pořád u sebe.',
      callDoctorIf: [
        'Několik nocí po sobě téměř nespíte a nejste schopná fungovat',
        'Cítíte beznaděj, která nepolevuje, nebo myšlenky, že by bylo lepší nebýt — vyhledejte pomoc neprodleně',
      ],
    },
    {
      id: 'cyk-dc-stim-d8',
      phases: ['stimulation'],
      day: 8,
      headline: 'Čísla dnes možná dávají smysl poprvé',
      body: 'Kolem osmého dne bývá kontrola, na které už je vidět tvar celé skupiny — kolik folikulů roste pohromadě a jestli se některý nevytrhl dopředu. Lékař se nedívá jen na dnešní číslo, ale hlavně na rozdíl proti minulé kontrole. Rovnoměrný růst je lepší zpráva než jedno velké číslo.',
      whatsHappening: [
        'Folikuly rostou zhruba o jeden až dva milimetry denně',
        'Pásmo kolem 16 až 22 mm je to, ve kterém se nejčastěji nacházejí zralá vajíčka',
        'Podle počtu folikulů v tomhle pásmu se plánuje trigger',
      ],
      task: 'Zeptejte se dnes na jednu konkrétní věc: kolik folikulů je nad 14 mm.',
      reflection: 'Počítám folikuly jako budoucí děti? A co by se změnilo, kdybych přestala?',
      tip: 'Nesrovnávejte svá čísla s nikým. Vaše čísla platí jen pro vás a jen v kontextu vašeho cyklu.',
      callDoctorIf: [
        'Prudká bolest břicha, zvracení nebo mdloba',
        'Rychlý přírůstek hmotnosti, napjaté břicho a dušnost',
      ],
    },
    {
      id: 'cyk-dc-stim-d9',
      phases: ['stimulation'],
      day: 9,
      headline: 'Konec je blízko a to je zvláštní pocit',
      body: 'V téhle fázi bývají kontroly častější, někdy denně, a termín odběru se začíná rýsovat. Zároveň jste fyzicky nejnaložnější — břicho těžké, únava velká, hlava plná. Zjednodušte si dny na minimum a odsuňte všechno, co nemusí být.',
      whatsHappening: [
        'Vaječníky jsou nyní výrazně zvětšené a citlivé na pohyb',
        'Termín odběru se upřesňuje podle velikosti největších folikulů',
        'Klinika může měnit dávku i ze dne na den',
      ],
      task: 'Domluvte s doprovodem konkrétní čas a místo pro den odběru. Ne „ozvu se", ale konkrétně.',
      reflection: 'Co si dnes můžu odpustit, aniž by se cokoli zhroutilo?',
      tip: 'Sbalte si tašku na odběr už teď. Ráno v den D nebudete schopná rozhodnout ani o ponožkách.',
      callDoctorIf: [
        'Nárůst hmotnosti o víc než přibližně kilogram za den',
        'Rychle rostoucí obvod břicha, dušnost nebo potíže s dýcháním vleže',
        'Výrazně menší množství moči nebo opakované zvracení',
      ],
    },
    {
      id: 'cyk-dc-stim-d10',
      phases: ['stimulation'],
      day: 10,
      headline: 'Trigger: jediná injekce, u které se počítají minuty',
      body: 'Dokončovací injekce dokončí zrání vajíček a uvolní je ze stěny folikulu. Odběr se plánuje zhruba 34 až 38 hodin po ní, těsně před tím, než by folikuly praskly samy — proto se čas říká na minuty a proto se nesmí posunout. Pokud vám ho ještě neřekli, dozvíte se ho v následujících dnech.',
      whatsHappening: [
        'Čas triggeru je zpětně odpočítaný od hodiny, na kterou máte přijít na sál',
        'Po triggeru se obvykle už nepíchá stimulace, pokud lékař neřekne jinak',
        'Od půlnoci před odběrem platí lačnění podle pokynů kliniky',
      ],
      task: 'Nastavte si dva budíky: jeden 30 minut před časem triggeru a jeden na přesný čas.',
      reflection: 'Kdo kromě mě zná přesný čas té injekce?',
      tip: 'Zapište si přesnou minutu, kdy jste píchla. Ráno se na to ptají.',
      callDoctorIf: [
        'Trigger jste aplikovala jindy, než bylo určeno, nebo si nejste jistá, jestli vůbec — volejte okamžitě, i v noci',
        'Prudká jednostranná bolest břicha se zvracením',
        'Dušnost nebo rychlé nafouknutí břicha',
      ],
    },
    {
      id: 'cyk-dc-stim-d11',
      phases: ['stimulation'],
      day: 11,
      headline: 'Den, kdy nemůžete udělat vůbec nic',
      body: 'Mezi triggerem a odběrem je zhruba 36 hodin, ve kterých vajíčka dozrávají bez vašeho přičinění. Je to nejpodivnější den celého cyklu: deset dní jste měla úkol a dnes žádný nemáte. Nikam nechoďte, nic neplánujte, dodržte lačnění podle pokynů.',
      whatsHappening: [
        'Vajíčka dokončují poslední fázi zrání a uvolňují se ze stěny folikulu',
        'Tlak a plnost v podbřišku jsou teď nejsilnější za celý cyklus',
        'Pohlavní styk, sport a zvedání těžkého jsou dnes vyloučené',
      ],
      task: 'Připravte si k posteli oblečení na ráno a tašku ke dveřím. Pak už nic.',
      reflection: 'Umím dneska nic nedělat, nebo si musím pořád něco vymýšlet?',
      tip: 'Vyhraďte googlení dvacet minut a ne večer. Ve tři ráno si nepřečtete nic, co vám pomůže.',
      callDoctorIf: [
        'Náhlá prudká bolest břicha, mdloba nebo opakované zvracení',
        'Teplota nad 38 °C',
        'Dušnost nebo výrazné zhoršení nafouknutí',
      ],
    },
    {
      id: 'cyk-dc-stim-d12',
      phases: ['stimulation'],
      day: 12,
      headline: 'Ráno odjezdu. Zbývá jen dojet',
      body: 'Bez líčení, bez laku na nehty, bez šperků a bez čoček — barva na nehtech brání měření okysličení krve a šperky se na sál nesmí. Lačnění je bezpečnostní podmínka anestezie, ne formalita. Doprovod už má být domluvený, protože po anestezii nesmíte řídit.',
      whatsHappening: [
        'Na klinice vás čeká administrativa, převlečení a čekání podle pořadí sálů',
        'Zavedení kanyly je jediný vpich, který ucítíte při vědomí',
        'Samotný odběr trvá obvykle 10 až 20 minut, bez řezu a bez stehů',
      ],
      task: 'Zkontrolujte tašku: doklady, čas triggeru na papíře, teplé ponožky, vložky, volné oblečení.',
      reflection: 'Co bych dnes potřebovala slyšet od člověka, který jede se mnou?',
      tip: 'Vezměte si vlastní ponožky. Na sále bývá chladno a po anestezii přichází zimnice.',
      callDoctorIf: [
        'Ráno máte horečku, silnou bolest břicha nebo krvácení — zavolejte na kliniku ještě před odjezdem',
        'Porušila jste lačnění — nutně to ohlaste, výkon se může odložit',
      ],
    },
    {
      id: 'cyk-dc-retrieval-d0',
      phases: ['retrieval'],
      day: 0,
      headline: 'Máte to za sebou. Dnešek už jen přežijte',
      body: 'Probuzení po krátké anestezii přináší zimnici, křeče jako při silnější menstruaci a často i pláč, který nemá jasný důvod — anestezie a hormony dělají svoje. Číslo odebraných vajíček uslyšíte dnes nebo zítra a bude jiné, než jste čekala. Skoro vždycky je.',
      whatsHappening: [
        'Slabé krvácení nebo špinění je po odběru běžné',
        'Nadmutí, tlak a zácpa se v příštích dnech ještě zvýrazní',
        'Řídit auto ani rozhodovat o důležitých věcech dnes nemůžete',
      ],
      task: 'Vypijte průběžně větší množství tekutin a přidejte něco s bílkovinou. Pak lehněte.',
      reflection: 'Co potřebuju od dnešního večera — ticho, nebo někoho vedle sebe?',
      tip: 'Neužívejte léky proti bolesti podle vlastního uvážení. Zeptejte se, co si smíte vzít, a zapište si to.',
      callDoctorIf: [
        'Silná bolest břicha, kterou neztlumí doporučené analgetikum',
        'Krvácení silnější než běžná menstruace nebo se sraženinami',
        'Teplota nad 38 °C',
        'Závrať, mdloba, bušení srdce nebo bolest v rameni',
      ],
    },
    {
      id: 'cyk-dc-retrieval-d1',
      phases: ['retrieval'],
      day: 1,
      headline: 'Dnes se cítíte hůř než včera. Je to normální',
      body: 'Den po odběru bývá fyzicky nejtěžší: břicho nafouklé, střeva zastavená kombinací anestezie a progesteronu, nálada dole. Zároveň dnes obvykle přichází první telefonát z embryologie. Mějte u sebe papír a tři napsané otázky — v šoku si nevzpomenete na žádnou.',
      whatsHappening: [
        'Sledujte se: vážení ráno, obvod břicha, kolikrát močíte',
        'Pomalá chůze po bytě je lepší než celodenní ležení',
        'Náhlý propad nálady druhý den je fyziologický, ne předzvěst výsledku',
      ],
      task: 'Napište si na papír tři otázky pro embryologa a nechte ho u telefonu.',
      reflection: 'Jaké číslo jsem si v hlavě určila jako „dost" — a odkud se vzalo?',
      tip: 'Zvyšte příjem bílkovin a pijte i nápoje s minerály, nejen čistou vodu.',
      callDoctorIf: [
        'Přírůstek hmotnosti přes kilogram za den nebo rychle rostoucí obvod břicha',
        'Dušnost, potíže s dýcháním vleže',
        'Výrazně menší množství moči nebo močení méně než jednou za šest až osm hodin',
        'Opakované zvracení, silná bolest břicha, teplota nad 38 °C',
      ],
    },
    {
      id: 'cyk-dc-retrieval-d2',
      phases: ['retrieval'],
      day: 2,
      headline: 'Tělo se pomalu vrací, hlava zatím ne',
      body: 'Druhý den po odběru už bývá tlak v podbřišku snesitelnější, ale nadmutí a zácpa přetrvávají. Pozor: riziko OHSS trvá dál a časná forma se objevuje typicky tři až sedm dní po odběru. Denní vážení a měření obvodu břicha nejsou přehnaná opatrnost, ale nejlepší domácí kontrola, kterou máte.',
      whatsHappening: [
        'Vaječníky jsou pořád zvětšené — bez sportu, bez zvedání těžkého, bez pohlavního styku',
        'Zácpa se řeší vlákninou, tekutinami a pohybem, ne tlačením',
        'Podpora progesteronem podle pokynů kliniky pokračuje',
      ],
      task: 'Zvažte se, změřte obvod břicha a zapište si to. Zabere to dvě minuty a lékaři to řekne hodně.',
      reflection: 'Dovoluju si být teď nemocná, nebo se nutím fungovat, jako by se nic nestalo?',
      tip: 'Používejte vložky, ne tampony, dokud vám klinika neřekne jinak.',
      callDoctorIf: [
        'Rychlý nárůst hmotnosti nebo obvodu břicha',
        'Dušnost, bolest na hrudi',
        'Bolest, otok nebo zarudnutí lýtka',
        'Teplota nad 38 °C, silná bolest břicha nebo výrazně méně moči',
      ],
    },
    {
      id: 'cyk-dc-fert-d0',
      phases: ['fertilization'],
      day: 0,
      headline: 'Dnes se vaše vajíčka potkávají se spermiemi',
      body: 'Embryolog vyhledal vajíčka v odsáté tekutině, posoudil jejich zralost a podle zvolené metody je buď spojil se spermiemi, nebo do nich spermii vpravil mikropipetou. Použít lze pouze zralá vajíčka — nezralá se počítají dopředu a nejsou chyba. Zbytek dneška je čekání a to je vaše jediná role.',
      whatsHappening: [
        'Klasické IVF nechá spermii najít cestu samu, ICSI ji vpraví dovnitř',
        'ICSI se volí například u mužského faktoru nebo před genetickým testováním',
        'Výsledek oplození se hodnotí až zítra ráno',
      ],
      task: 'Zapište si otázku, kterou chcete zítra položit: kolik vajíček bylo zralých a kolik se oplodnilo.',
      reflection: 'Jak se mám k tomu postavit, když číslo bude nižší, než jsem si představovala?',
      tip: 'Zeptejte se kliniky, v jakém čase obvykle volají. Nebudete pak celý den viset na telefonu.',
      callDoctorIf: [
        'Silná bolest břicha, krvácení silnější než menstruace nebo teplota nad 38 °C',
        'Rychlé nafouknutí břicha, dušnost nebo výrazně menší množství moči',
      ],
    },
    {
      id: 'cyk-dc-fert-d1',
      phases: ['fertilization'],
      day: 1,
      headline: 'Dvě prvojádra: první skutečné číslo',
      body: 'Zhruba 16 až 18 hodin po oplození embryolog kontroluje, jestli se ve vajíčku objevila dvě prvojádra — jedno z vajíčka, jedno ze spermie. To je znak normálního oplození. Embrya s jiným počtem prvojader se dál nekultivují a je to očekávaná součást procesu, ne selhání.',
      whatsHappening: [
        'Neoplodní se všechna vajíčka, ani při ICSI',
        'Číslo z dnešního dne nepředpovídá číslo pátého dne',
        'Zapisujte si přesně, co vám řekli, včetně slov, kterým jste nerozuměla',
      ],
      task: 'Po telefonátu si zapište doslova, co zaznělo. Interpretaci si nechte na později.',
      reflection: 'Komu chci to číslo říct — a komu ne?',
      tip: 'Nekomentujte to hned. Dejte si hodinu, než na to zareagujete i sama před sebou.',
      callDoctorIf: [
        'Prudká bolest břicha, mdloba nebo opakované zvracení',
        'Nárůst hmotnosti přes kilogram za den, dušnost nebo výrazně méně moči',
      ],
    },
    {
      id: 'cyk-dc-kult-d1',
      phases: ['embryo_culture'],
      day: 1,
      headline: 'Den 1: spojení dvou informací',
      body: 'Ve vašich vajíčkách se dnes ráno hodnotila přítomnost dvou prvojader — okamžik, kdy se genetická informace z vajíčka a ze spermie poprvé setkala. Embrya, která tuhle kontrolu prošla, jdou zpátky do inkubátoru a dalších pár dní se o nich rozhoduje bez vás. Vaše tělo mezitím doznívá po odběru a to je jediná věc, kterou dnes můžete ovlivnit.',
      whatsHappening: [
        'Embrya leží v kapkách média v inkubátoru se stabilní teplotou a složením plynů',
        'Identita vzorku se kontroluje při každém kroku, obvykle dvěma lidmi nebo elektronicky',
        'Laboratoř otevírá inkubátor co nejméně — každé otevření mění podmínky',
      ],
      task: 'Zapište si do kalendáře, kdy klinika plánuje další telefonát a co v něm uslyšíte.',
      reflection: 'Co mi dnes pomůže víc — vědět víc, nebo vědět míň?',
      tip: 'Vyhraďte si na hledání informací dvacet minut denně a ne večer. Zbytek dne to odkládáte.',
      callDoctorIf: [
        'Silná bolest břicha, teplota nad 38 °C nebo krvácení silnější než menstruace',
        'Rychlý nárůst hmotnosti, napjaté břicho, dušnost nebo výrazně méně moči',
      ],
    },
    {
      id: 'cyk-dc-kult-d2',
      phases: ['embryo_culture'],
      day: 2,
      headline: 'Den 2: první dělení',
      body: 'Embrya, která se normálně oplodnila, by dnes měla mít zhruba dvě až čtyři buňky. Embryolog sleduje jejich počet, stejnoměrnost a podíl fragmentace — drobných úlomků buněčné hmoty, kterých má být co nejméně. Většina pracovišť dnes nevolá, protože informace z druhého dne by nezměnila plán.',
      whatsHappening: [
        'Embryo zatím běží na zásobách a informacích z vajíčka',
        'Rozdíly mezi embryi v rychlosti dělení jsou v této fázi běžné',
        'Vaše nadmutí a zácpa dnes typicky vrcholí nebo pomalu ustupují',
      ],
      task: 'Naplánujte si na dnešek jednu konkrétní dokončitelnou věc. Ne úklid bytu — jednu zásuvku.',
      reflection: 'Kterou myšlenku si dnes přehrávám nejčastěji a je vůbec moje?',
      tip: 'Chůze po bytě několikrát denně pomáhá střevům i snižuje riziko trombózy.',
      callDoctorIf: [
        'Dušnost, bolest na hrudi nebo bolest a otok lýtka',
        'Silná bolest břicha, opakované zvracení nebo teplota nad 38 °C',
      ],
    },
    {
      id: 'cyk-dc-kult-d3',
      phases: ['embryo_culture'],
      day: 3,
      headline: 'Den 3: embryo přepíná na vlastní genom',
      body: 'Dnes má embryo obvykle kolem šesti až osmi buněk a odehrává se v něm zásadní věc — přestává běžet na zásobách z vajíčka a začíná pracovat podle vlastní genetické informace. Právě tady se část embryí zastaví. Není to nic, co byste ovlivnila, a není to nic, co byste udělala špatně.',
      whatsHappening: [
        'Na některých pracovištích se právě třetí den provádí transfer, hlavně když je embryí málo',
        'U malého počtu embryí nemá selekce v laboratoři smysl — děloha je lepší prostředí než inkubátor',
        'Dnes často přichází telefonát s informací o dalším plánu',
      ],
      task: 'Zeptejte se dnes přímo: plánujete transfer třetí, nebo pátý den, a podle čeho se rozhodnete?',
      reflection: 'Odvozuju z dnešního počtu embryí, jak to celé dopadne? A co když to nejde?',
      tip: 'Číslo z dnešního dne není předpověď. Mezi dnem tři a dnem pět se toho děje víc než mezi dnem nula a třemi.',
      callDoctorIf: [
        'Rychle rostoucí obvod břicha nebo přírůstek hmotnosti přes kilogram za den',
        'Dušnost, výrazně menší množství moči, opakované zvracení',
      ],
    },
    {
      id: 'cyk-dc-kult-d4',
      phases: ['embryo_culture'],
      day: 4,
      headline: 'Den 4: morula, den bez zpráv',
      body: 'Buňky se dnes přestanou počítat, protože se k sobě těsně přimknou a hranice mezi nimi zmizí — vznikne kompaktní kulička zvaná morula. Vypadá to jako krok zpět a je to nutná fáze před vznikem blastocysty. Čtvrtý den se obvykle netelefonuje, takže ticho dnes nic neznamená.',
      whatsHappening: [
        'Morula se hodnotí obtížně, proto z ní většina laboratoří nedělá závěry',
        'Zítřek je den, kdy se ukáže, kolik embryí došlo do stádia blastocysty',
        'Vaše fyzická nepohoda by už měla pomalu ustupovat',
      ],
      task: 'Dnešek naplánujte tak, aby v něm nebyl prostor na čekání u telefonu. Ven, mezi lidi, nebo do práce.',
      reflection: 'Co bych si dnes řekla, kdyby tohle prožívala moje nejlepší kamarádka?',
      tip: 'Ticho z laboratoře není špatná zpráva. Je to jen den, ze kterého se nic nehlásí.',
      callDoctorIf: [
        'Teplota nad 38 °C, silná bolest břicha nebo krvácení se sraženinami',
        'Dušnost, rychlé nafouknutí břicha nebo výrazně méně moči',
      ],
    },
    {
      id: 'cyk-dc-kult-d5',
      phases: ['embryo_culture'],
      day: 5,
      headline: 'Den 5: blastocysta a první rozdělení osudů',
      body: 'Uvnitř moruly vznikla dutina a buňky se poprvé rozdělily do dvou skupin: z vnitřní buněčné masy vznikne plod, z vnější vrstvy placenta. Tomuhle stádiu se říká blastocysta a je to nejčastější okamžik pro transfer nebo zamrazení. Dnes obvykle uslyšíte, kolik embryí došlo až sem.',
      whatsHappening: [
        'Hodnocení typu 4AA popisuje vzhled, ne genetiku — je to nástroj pro pořadí, ne předpověď',
        'Pokud se dělá genetické testování, odebírá se právě teď několik buněk z vnější vrstvy',
        'Část embryí dojde do blastocysty až šestý den a to není horší varianta',
      ],
      task: 'Zeptejte se: které embryo přenášíte jako první a proč zrovna tohle? Odpověď vám poví víc než písmena.',
      reflection: 'Co pro mě dnešní číslo znamená a co jsem si k němu přidala sama?',
      tip: 'Písmena hodnocení si nezapisujte jako mantru. Ta samá dvě písmena vám během dvou týdnů poslouží jako důvod k naději i k zoufalství.',
      callDoctorIf: [
        'Silná bolest břicha, dušnost nebo rychlý nárůst hmotnosti',
        'Teplota nad 38 °C nebo výrazně menší množství moči',
      ],
    },
    {
      id: 'cyk-dc-kult-d6',
      phases: ['embryo_culture'],
      day: 6,
      headline: 'Den 6: opozdilci nejsou horší',
      body: 'Část blastocyst dosáhne svého stádia až dnes, výjimečně sedmý den, a obvykle se zamrazí k pozdějšímu použití. Z blastocyst šestého dne se rodí děti — pomalejší start nepředpovídá pomalejší dítě. Dnes se také uzavírá bilance celého cyklu a s ní přichází buď úleva, nebo velmi těžká zpráva.',
      whatsHappening: [
        'Zamrazení probíhá vitrifikací, tedy ultrarychlým zmrazením bez tvorby ledových krystalů',
        'Při teplotě tekutého dusíku se veškeré děje v embryu zastaví',
        'Pokud do blastocysty nedošlo nic, máte právo na samostatnou konzultaci, ne jen na větu do telefonu',
      ],
      task: 'Napište si pět otázek na kontrolní konzultaci — hlavně tu klíčovou: co byste u nás příště udělali jinak?',
      reflection: 'Co si o dnešním výsledku říkám a co z toho je opravdu o mně?',
      tip: 'Nerozhodujte o dalším cyklu tenhle týden. Rozhodnutí z prvních dnů jsou rozhodnutí ze zoufalství.',
      callDoctorIf: [
        'Silná bolest břicha, teplota nad 38 °C, dušnost',
        'Rychlý nárůst hmotnosti nebo obvodu břicha, výrazně méně moči',
        'Bolest, otok nebo zarudnutí lýtka',
      ],
    },
  ],
  encouragements: [
    {
      id: 'cyk-enc-rutina',
      text: 'Nemusíte to zvládat elegantně. Stačí, když dnes večer píchnete tu injekci.',
      author: 'Gabi',
      tone: 'practical',
    },
    {
      id: 'cyk-enc-cisla',
      text: 'Vaše čísla nejsou vaše známka. Jsou to údaje o tom, jak vaše tělo reaguje na dávku — nic víc.',
      author: 'Gabi',
      tone: 'practical',
    },
    {
      id: 'cyk-enc-modriny',
      text: 'To břicho, na které se teď nerada díváte, odvádí zrovna největší práci ve vašem životě.',
      tone: 'tender',
    },
    {
      id: 'cyk-enc-nekontrolovatelne',
      text: 'Vaše práce skončila triggerem. To, co se děje teď, není vaše zodpovědnost — a to je zároveň to nejtěžší.',
      author: 'Gabi',
      tone: 'intense',
    },
    {
      id: 'cyk-enc-stres',
      text: 'Stres neničí embrya. Kdyby ano, většina lidí na světě by se nenarodila.',
      tone: 'practical',
    },
    {
      id: 'cyk-enc-plac',
      text: 'Pláč druhý den po odběru není špatné znamení. Je to hormony, anestezie a únava, které konečně dostaly slovo.',
      tone: 'tender',
    },
    {
      id: 'cyk-enc-ticho',
      text: 'Dny ticha nezvládá nikdo dobře. Cílem není projít je krásně, cílem je projít je.',
      author: 'Gabi',
      tone: 'hopeful',
    },
    {
      id: 'cyk-enc-vina',
      text: 'Embryo se nezastavilo proto, že jste zvedla nákup, pila kávu nebo se rozbrečela. Přineslo si tu informaci s sebou.',
      tone: 'grieving',
    },
    {
      id: 'cyk-enc-jedno',
      text: 'Jedno embryo není zbytek. Je to to, které prošlo vším, co na něj bylo posláno.',
      tone: 'hopeful',
    },
    {
      id: 'cyk-enc-otazky',
      text: 'Nejlepší pacientka není ta, která ví všechno. Je to ta, která si napíše otázku na papír a položí ji nahlas.',
      author: 'Gabi',
      tone: 'practical',
    },
    {
      id: 'cyk-enc-pauza',
      text: 'Pauza s konkrétním datem konce není vzdání se. Je to plán.',
      tone: 'practical',
    },
    {
      id: 'cyk-enc-telefon',
      text: 'Když váháte, jestli je to ještě normální, je to samo o sobě důvod zavolat. Nikdo vás nebude považovat za hysterickou.',
      author: 'Gabi',
      tone: 'practical',
    },
  ],
  glossary: [
    {
      term: 'Folikul',
      aliases: ['folikuly', 'folikulometrie'],
      short: 'Tekutinou vyplněný váček ve vaječníku, ve kterém dozrává vajíčko.',
      long: 'Ultrazvuk vidí folikul, ne vajíčko uvnitř. Proto je velikost folikulu jen nepřímým ukazatelem zralosti vajíčka a počet folikulů se nikdy nerovná počtu získaných vajíček. Během stimulace folikuly rostou zhruba o jeden až dva milimetry denně a jejich sledování se nazývá folikulometrie.',
      topics: ['stimulace', 'vysledky'],
    },
    {
      term: 'Trigger',
      aliases: ['dokončovací injekce', 'spouštěcí injekce'],
      short: 'Injekce, která dokončí zrání vajíček a uvolní je ze stěny folikulu.',
      long: 'Aplikuje se v přesně určenou hodinu, protože odběr se plánuje zhruba 34 až 38 hodin po ní — těsně před tím, než by folikuly praskly samy. Existuje několik typů; agonistický trigger výrazně snižuje riziko těžkého OHSS a lze ho použít pouze v antagonistickém protokolu. Pokud si nejste jistá časem aplikace, volejte kliniku okamžitě.',
      topics: ['stimulace', 'leky', 'hormony'],
    },
    {
      term: 'PICSI',
      short: 'Způsob výběru spermie podle schopnosti navázat se na kyselinu hyaluronovou.',
      long: 'Kyselina hyaluronová se přirozeně nachází v obalu vajíčka a zralé spermie se na ni váží. Embryolog pak vybírá pro ICSI z těch navázaných. Zvažuje se cíleně, například při vyšší fragmentaci DNA spermií nebo po opakovaném neúspěchu.',
      topics: ['embryologie', 'partner'],
    },
    {
      term: 'Morula',
      short: 'Kompaktní kulička buněk, obvykle čtvrtý den po oplození.',
      long: 'Buňky se k sobě těsně přimknou a jejich hranice zmizí, takže se přestanou počítat. Vypadá to jako krok zpět, ale je to nutná fáze před vznikem blastocysty. Čtvrtý den se proto obvykle nehlásí žádná čísla.',
      topics: ['embryologie'],
    },
    {
      term: 'Gardnerova klasifikace',
      aliases: ['hodnocení embryí', '4AA'],
      short: 'Nejrozšířenější způsob hodnocení blastocyst pomocí čísla a dvou písmen.',
      long: 'Číslo popisuje stupeň rozvinutí blastocysty, první písmeno vnitřní buněčnou masu a druhé vnější vrstvu. Hodnocení popisuje vzhled, nikoli genetiku, je částečně subjektivní a slouží k seřazení embryí, ne jako předpověď výsledku.',
      topics: ['embryologie', 'vysledky'],
    },
    {
      term: 'Vitrifikace',
      aliases: ['zamrazení embryí'],
      short: 'Ultrarychlé zmrazení embryí či vajíček na teplotu tekutého dusíku.',
      long: 'Embryo se prosytí ochrannými látkami a během zlomku vteřiny ochladí zhruba na minus 196 °C, takže se voda nestihne uspořádat do poškozujících ledových krystalů. Při této teplotě se veškeré biologické děje zastaví. Doba uchování je omezená právně a smluvně, ne biologicky.',
      topics: ['embryologie', 'klinika'],
    },
    {
      term: 'Antagonistický protokol',
      short: 'Nejčastější stimulační protokol, kde se předčasné ovulaci brání antagonistou.',
      long: 'Stimulace začíná na začátku cyklu a po několika dnech se přidá druhá injekce blokující signál k ovulaci. Bývá kratší a šetrnější a umožňuje agonistický trigger, který snižuje riziko těžkého OHSS. Volbu protokolu určuje lékař podle vašich vyšetření.',
      topics: ['stimulace', 'leky'],
    },
    {
      term: 'Torze vaječníku',
      short: 'Zkroucení zvětšeného vaječníku kolem vlastní osy — akutní stav.',
      long: 'Riziko je vyšší během stimulace a krátce po odběru, kdy jsou vaječníky výrazně zvětšené. Proto se v tomto období nedoporučuje běh, skákání, zvedání těžkého ani prudké změny polohy. Náhlá prudká jednostranná bolest břicha, zvlášť se zvracením nebo mdlobou, vyžaduje okamžité vyhledání lékařské pomoci.',
      topics: ['stimulace', 'pohyb'],
    },
    {
      term: 'Fragmentace DNA spermií',
      short: 'Vyšetření podílu spermií s poškozenou genetickou informací.',
      long: 'Spermie může vypadat i plavat výborně a přitom mít poškozené řetězce DNA. Hodnoty ovlivňuje věk, kouření, obezita, varikokéla, infekce, horko i délka abstinence před odběrem. Vyšetření se indikuje cíleně, obvykle při opakovaném neúspěchu, a jeho výsledek interpretuje androlog nebo reprodukční lékař.',
      topics: ['partner', 'embryologie', 'genetika'],
    },
  ],
}
