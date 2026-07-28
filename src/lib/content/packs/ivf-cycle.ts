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
      author: 'Tým IVF by Gabi',
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
      topics: ['stimulace', 'zdravi_ditete', 'hormony', 'klinika'],
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
      author: 'Tým IVF by Gabi',
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
      author: 'Tým IVF by Gabi',
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
        'Dvanáctiminutová nahrávka s ženským hlasem, bez hudby, jen jemný podkres. Tři části: pojmenování toho, co máte za sebou, dech s prodlouženým výdechem a pomalé projití těla. Končí tichem, bez závěrečné výzvy.',
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
    // @@ITEMS@@
  ],
  dailyCards: [
    // @@CARDS@@
  ],
}
