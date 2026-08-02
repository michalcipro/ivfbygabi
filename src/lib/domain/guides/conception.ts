import type { PhaseGuide } from '../phase-guide'

/**
 * Průvodci fázemi cesty za otěhotněním — od rozhodnutí po výsledek cyklu.
 *
 * Pravidla, která platí pro každý text tady:
 *  - nikde není dávkování léku ani doplňku,
 *  - nikde není slib výsledku ani procenta úspěšnosti konkrétní ženy,
 *  - u doplňků je vždycky poctivě označeno, jak silný důvod za nimi stojí,
 *  - kde hrozí vážná komplikace, je napsané, kdy nečekat a volat.
 */

export const CONCEPTION_GUIDES: PhaseGuide[] = [
  {
    phase: 'thinking',
    summary: 'Rozhodnutí se teprve rodí. Není co dohánět — je čas se ptát a zjišťovat.',
    whatAwaits: [
      'Období, kdy si ujasňujete, jestli a kdy dítě chcete. Klidně několik měsíců.',
      'První praktické otázky: peníze, práce, bydlení, vztah.',
      'Zjišťování, jak na tom jste zdravotně — bez tlaku, jen abyste věděla.',
    ],
    prepareFor: [
      'Preventivní prohlídka u gynekologa a u praktického lékaře. Ideálně dřív, než se začnete snažit.',
      'Zjistit svou i partnerovu rodinnou anamnézu — dědičná onemocnění, potraty, vrozené vady.',
      'Zkontrolovat očkování, hlavně proti zarděnkám a planým neštovicím. Po očkování se doporučuje s otěhotněním chvíli počkat, termín řekne lékař.',
      'Podívat se, co berete za léky. Některé se před těhotenstvím mění — nikdy je nevysazujte sama.',
    ],
    mind: [
      {
        title: 'Nemusíte si být jistá',
        body: 'Ambivalence není varovné znamení. Většina lidí má před dítětem období, kdy si to chtějí a zároveň se toho bojí. Rozhodnutí se rodí postupně, ne v jednom okamžiku.',
      },
      {
        title: 'Mluvte o tom konkrétně',
        body: 'Obecné „chceme dítě“ se špatně plánuje. Pomáhá ptát se na konkrétní věci: kdo bude vstávat v noci, jak dlouhá bude rodičovská, co se stane s prací, kolik peněz to má stát.',
      },
    ],
    body: [
      {
        title: 'Pohyb, který má smysl budovat teď',
        body: 'Nejlepší čas začít hýbat se je dřív, než se začnete snažit. Cíl není zhubnout — cíl je pravidelnost. Rychlá chůze, plavání nebo lehká silová zátěž třikrát týdně. Extrémní zátěž a velké váhové výkyvy naopak cyklus rozhodí.',
      },
      {
        title: 'Kouření, alkohol a váha',
        body: 'Tohle jsou tři věci s prokazatelným vlivem na plodnost u obou partnerů. Kouření zhoršuje kvalitu vajíček i spermií. Výrazná nadváha i výrazná podváha mohou narušit ovulaci. Změny dělejte postupně, ne hladovkou.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Snižuje riziko vrozených vad neurální trubice u miminka. Účinkuje v prvních týdnech těhotenství — tedy dřív, než o něm většina žen ví. Proto se začíná už při plánování.',
        evidence: 'standard',
        note: 'Dávku určuje lékař. U některých diagnóz a při užívání některých léků bývá vyšší.',
      },
      {
        name: 'Vitamin D',
        why: 'Ve středoevropských zimách je nedostatek běžný a souvisí s celou řadou funkcí včetně reprodukčních.',
        evidence: 'podle hodnot',
        note: 'Má smysl nechat si hladinu změřit, ne odhadovat.',
      },
      {
        name: 'Jód',
        why: 'Potřebný pro vývoj mozku miminka a pro funkci štítné žlázy.',
        evidence: 'standard',
        note: 'Při onemocnění štítné žlázy vždycky konzultujte — u některých diagnóz se postupuje jinak.',
      },
    ],
    partner: [
      'Jděte na preventivní prohlídku taky. Polovina příčin neplodnosti je na mužské straně a spermiogram je jednoduché vyšetření.',
      'Kouření, alkohol a přehřívání varlat (sauna, notebook na klíně, horké koupele) zhoršují spermiogram. Změna se projeví zhruba za tři měsíce.',
      'Nenechávejte plánování na ní. Termíny, otázky pro lékaře i finance jsou společná věc.',
    ],
    track: [
      'Délka cyklu — od prvního dne menstruace do dne před další. Nejužitečnější údaj, který si můžete začít psát hned.',
      'Váha, pokud ji chcete měnit. Postupně, ne skokově.',
      'Nálada a spánek — zjistíte, co vám dělá dobře, ještě než přijde stres z čekání.',
    ],
    askDoctor: [
      'Mám něco, co bych měla vyřešit ještě před otěhotněním?',
      'Jsou léky, které beru, bezpečné v těhotenství?',
      'Mám doplnit nějaké očkování a jak dlouho pak čekat?',
      'Jaké hodnoty má smysl si nechat změřit hned teď?',
    ],
    terms: ['Ovulace', 'Kyselina listová', 'Preventivní prohlídka', 'Anamnéza'],
  },

  {
    phase: 'preparing_body',
    summary: 'Připravujete tělo. Většina změn se projeví za dva až tři měsíce — vajíčko i spermie tak dlouho dozrávají.',
    whatAwaits: [
      'Dva až tři měsíce, než se změny životního stylu projeví na kvalitě vajíček a spermií.',
      'Odběry, které si můžete nechat udělat i bez odeslání na kliniku — štítná žláza, vitamin D, krevní obraz.',
      'Zvykání si na pravidelnost: spánek, jídlo, pohyb. Nudné, ale funguje to.',
    ],
    prepareFor: [
      'Nechte si zkontrolovat štítnou žlázu (TSH, případně anti-TPO). Neléčená porucha je jedna z nejčastějších řešitelných příčin problémů s otěhotněním i s udržením těhotenství.',
      'Zubař. V těhotenství se zákroky odkládají a záněty v ústech nejsou neutrální.',
      'Když berete hormonální antikoncepci, promluvte si o tom, kdy ji vysadit. Cyklus se často pár měsíců srovnává.',
    ],
    mind: [
      {
        title: 'Nedělejte z přípravy druhou práci',
        body: 'Je lákavé předělat najednou stravu, spánek, pohyb a k tomu si koupit pět doplňků. Vydrží to tři týdny. Vyberte si dvě věci a ty dělejte tři měsíce.',
      },
      {
        title: 'Pozor na to, co čtete',
        body: 'Diskuzní fóra jsou plná zaručených návodů. Většina z nich nemá oporu v datech a některé škodí. Když někde uvidíte slib konkrétní úspěšnosti, je to prodej, ne medicína.',
      },
    ],
    body: [
      {
        title: 'Jak cvičit v přípravě',
        body: 'Kombinace vytrvalosti a síly. Třikrát až pětkrát týdně 30–45 minut: rychlá chůze, kolo, plavání, k tomu dvakrát týdně posilování s vlastní vahou nebo lehkými činkami. Cíl je zlepšit citlivost na inzulin a snížit stresovou zátěž, ne shodit kila.',
      },
      {
        title: 'Kdy je pohybu moc',
        body: 'Když vynecháváte menstruaci, hubnete bez záměru nebo se cítíte trvale vyčerpaná, je zátěž vysoká. Vysoký objem vytrvalostního tréninku může ovulaci potlačit. Tohle patří na stůl lékaři.',
      },
      {
        title: 'Pánevní dno',
        body: 'Naučit se ho vědomě zapojit a hlavně uvolnit se vyplatí už teď. Pomůže to při vyšetřeních, v těhotenství i po porodu. Fyzioterapeut se zaměřením na pánevní dno je dobrá investice.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Pokračuje z fáze plánování. Ideálně nejméně měsíc před otěhotněním a pak celý první trimestr.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Nedostatek je ve středoevropských zimách běžný. Doplňuje se podle naměřené hladiny, ne naslepo.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Omega-3 (DHA)',
        why: 'Podílí se na vývoji mozku a sítnice miminka. Řeší se hlavně u žen, které nejedí ryby.',
        evidence: 'diskutovaný',
      },
      {
        name: 'Inositol',
        why: 'U žen s PCOS se používá k podpoře pravidelné ovulace a citlivosti na inzulin.',
        evidence: 'diskutovaný',
        note: 'Data jsou nadějná, ale nejednotná. Nenahrazuje léčbu, kterou vám nasadil lékař.',
      },
    ],
    partner: [
      'Spermiogram teď, ne až za rok. Trvá pár dní a změní to, co se bude řešit dál.',
      'Tři měsíce bez sauny, bez notebooku na klíně a s omezením alkoholu se na výsledku pozná — spermie dozrávají zhruba 74 dní.',
      'Zinek, selen a antioxidanty se u mužského faktoru diskutují. Data jsou smíšená, dávkování patří lékaři.',
    ],
    track: [
      'Délka a pravidelnost cyklu.',
      'Bazální teplota nebo LH testy, pokud chcete ovulaci potvrdit.',
      'Váha jednou týdně, ne denně.',
      'Spánek — kolik hodin a jak kvalitní.',
    ],
    askDoctor: [
      'Jaké hodnoty mi má smysl změřit před snažením?',
      'Mám štítnou žlázu v pořádku i pro těhotenství? (Cílové hodnoty jsou jiné než běžné.)',
      'Kdy vysadit antikoncepci a jak dlouho se bude cyklus srovnávat?',
      'Jsou doplňky, které bych při své diagnóze brát neměla?',
    ],
    terms: ['TSH', 'Anti-TPO', 'Ovulace', 'Bazální teplota', 'Kyselina listová', 'Inositol', 'Spermiogram'],
  },

  {
    phase: 'trying_naturally',
    summary: 'Snažíte se přirozeně. Klíčová je znalost vlastního cyklu — ne počet pokusů.',
    whatAwaits: [
      'Měsíce, které mají svůj rytmus: naděje kolem ovulace, čekání, menstruace, znovu.',
      'Postupné zjišťování, kdy přesně ovulujete. U většiny žen to není 14. den.',
      'Moment, kdy začnete zvažovat vyšetření. Doporučení: po roce snažení, a po půl roce, pokud je vám nad 35 let nebo máte nepravidelný cyklus.',
    ],
    prepareFor: [
      'Naučit se poznat plodné dny. Nejspolehlivější kombinace: LH testy plus sledování hlenu.',
      'Vědět, že plodné okno je zhruba šest dní a končí dnem ovulace — po ovulaci už je pozdě.',
      'Připravit se na to, že „hned to vyjde“ je spíš výjimka. I u zdravého páru je šance v jednom cyklu kolem 20–25 %.',
    ],
    mind: [
      {
        title: 'Když se ze sexu stane úkol',
        body: 'Tohle potká skoro každý pár. Pomáhá odlepit se od kalendáře: místo mířeného sexu v přesný den zkuste každý druhý den v plodném okně. Statisticky to vychází stejně a psychicky mnohem líp.',
      },
      {
        title: 'Dvoutýdenní čekání každý měsíc',
        body: 'Druhá polovina cyklu je nejtěžší část. Symptomy po ovulaci a rané příznaky těhotenství jsou k nerozeznání — obojí dělá progesteron. Rozbor příznaků vám odpověď nedá, jen sebere klid.',
      },
      {
        title: 'Když přijde menstruace',
        body: 'Zklamání každý měsíc je únavné jinak než jednorázová rána. Dejte si na ten den dopředu něco konkrétního — ne „být silná“, ale třeba vycházku, film, člověka, kterému můžete zavolat.',
      },
    ],
    body: [
      {
        title: 'Pohyb v plodném okně',
        body: 'Není důvod cokoliv omezovat. Cvičte, jak jste zvyklá. Jediné, co stojí za pozornost, je extrémní objem tréninku — ten může ovulaci potlačit.',
      },
      {
        title: 'Teplo a spermie',
        body: 'U partnera má smysl vynechat saunu a horké koupele. Efekt je dočasný, ale v cyklu, kdy na tom záleží, je zbytečné si přidávat handicap.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Bere se celou dobu snažení, protože působí v prvních týdnech těhotenství.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Nedostatek je u nás běžný. Má smysl si hladinu nechat změřit a doplňovat podle výsledku.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Koenzym Q10',
        why: 'Diskutuje se u žen s nižší ovariální rezervou a vyšším věkem v souvislosti s kvalitou vajíček.',
        evidence: 'diskutovaný',
        note: 'Důkazy jsou zatím slabé. Nečekejte zázrak a nenahrazujte tím vyšetření.',
      },
    ],
    partner: [
      'Plodné okno je společná věc — ať ho zná taky, aby se na tom nemusela domlouvat sama.',
      'Den, kdy přijde menstruace, bývá pro ni nejhorší. Stačí, když si ho budete pamatovat a nezeptáte se „tak co, nic?“.',
      'Po půl roce až roce snažení jděte na spermiogram, i když se cítíte úplně v pořádku.',
    ],
    track: [
      'První den menstruace — z toho se počítá délka cyklu.',
      'LH testy a hlen v plodném okně.',
      'Bazální teplota, pokud chcete ovulaci potvrdit zpětně.',
      'Nálada — po pár měsících uvidíte, jak moc s vámi cyklus houpe.',
    ],
    askDoctor: [
      'Jak dlouho má smysl zkoušet to přirozeně v mém věku a s mým cyklem?',
      'Je můj cyklus pravidelný natolik, aby se dalo předpokládat, že ovuluji?',
      'Kdy začneme vyšetřovat a čím?',
    ],
    terms: ['Ovulace', 'Plodné okno', 'LH', 'Bazální teplota', 'Luteální fáze', 'Progesteron'],
  },

  {
    phase: 'diagnostics',
    summary: 'Hledáte příčinu. Cílem není verdikt, ale plán — a většina nálezů má řešení.',
    whatAwaits: [
      'Odběry hormonů v konkrétních dnech cyklu. Část se dělá 2.–4. den, část kolem 21. dne.',
      'Ultrazvuk s počítáním antrálních folikulů.',
      'Vyšetření průchodnosti vejcovodů — HSG nebo HyFoSy. Trvá krátce, bývá nepříjemné, ne dlouho.',
      'Spermiogram u partnera, často opakovaný.',
      'Čekání na výsledky, které je většinou delší než vyšetření samo.',
    ],
    prepareFor: [
      'Sepsat si historii cyklů, operací, těhotenství a ztrát. Na místě si to nevybavíte.',
      'Vzít s sebou všechny starší výsledky, i ty, které vám přijdou nedůležité.',
      'Napsat si otázky předem. V ordinaci na ně skoro každá zapomene.',
      'Domluvit se, kdo z vás bude dělat zápisky — po třetím termínu se to slévá.',
    ],
    mind: [
      {
        title: 'Diagnóza není rozsudek',
        body: 'Většina žen si po nálezu vyhledá to nejhorší, co k němu na internetu najde. Nález je popis situace, ne předpověď. Co znamená pro vás, řekne jedině lékař, který zná celý kontext.',
      },
      {
        title: 'Když se nenajde nic',
        body: 'Nevysvětlená neplodnost je jedna z nejčastějších „diagnóz“ a paradoxně jedna z nejtěžších psychicky — nemáte co opravit. Neznamená to, že se nic neděje. Znamená to, že to dnešními vyšetřeními nevidíme.',
      },
      {
        title: 'Vyšetřování bere víc energie, než čekáte',
        body: 'Chození po termínech, plánování odběrů na konkrétní dny cyklu, vysvětlování v práci. Počítejte s tím a nepřidávejte si v tomhle období další velké projekty.',
      },
    ],
    body: [
      {
        title: 'Cvičení během vyšetřování',
        body: 'Nic neomezujte. Jen po zákrocích typu HSG nebo laparoskopie dodržte, co vám řeknou — obvykle pár dní bez zátěže a bez plavání.',
      },
      {
        title: 'Den vyšetření vejcovodů',
        body: 'Vezměte si někoho, kdo vás odveze. Křeče bývají silnější, než čekáte, a doznívají pár hodin. Analgetika si vezměte podle doporučení lékaře, ne až doma.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v prvních týdnech těhotenství, dřív než ho jde zjistit. Proto se bere po celou dobu snažení, ne až potom.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Právě teď se často měří — doplňuje se podle výsledku.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Jód',
        why: 'Součást přípravy na těhotenství, pokud nemáte kontraindikaci.',
        evidence: 'standard',
        note: 'Při onemocnění štítné žlázy vždy s lékařem.',
      },
    ],
    partner: [
      'Spermiogram je součást vyšetření páru, ne laskavost. Bez něj je diagnostika neúplná.',
      'Jeďte s ní na vyšetření vejcovodů. Není to zákrok, po kterém se dobře řídí.',
      'Když vyjde nález u vás, nemá cenu se omlouvat — má cenu se ptát, co se s tím dá dělat. U mužského faktoru je toho hodně.',
    ],
    track: [
      'Všechny naměřené hodnoty a datum odběru. Vývoj v čase je pro lékaře cennější než jedno číslo.',
      'Den cyklu, ve kterém se odběr dělal — bez něj se hodnota interpretovat nedá.',
      'Termíny a co na nich zaznělo.',
    ],
    askDoctor: [
      'Co konkrétně z mých výsledků ukazuje na příčinu?',
      'Které vyšetření ještě chybí a proč?',
      'Jaké máme možnosti a proč navrhujete zrovna tuhle?',
      'Jak dlouho má smysl zkoušet jednodušší cestu, než přejdeme k IVF?',
    ],
    terms: ['AMH', 'FSH', 'LH', 'Estradiol', 'TSH', 'Antrální folikuly', 'HSG', 'HyFoSy', 'Hysteroskopie', 'Laparoskopie', 'Spermiogram', 'Ovariální rezerva', 'Nevysvětlená neplodnost'],
  },

  {
    phase: 'iui',
    summary: 'Inseminace — nejjednodušší asistovaná metoda. Zákrok trvá pár minut a bolí zhruba jako stěr.',
    whatAwaits: [
      'Sledování růstu folikulů ultrazvukem, někdy s mírnou stimulací tabletami nebo nízkými dávkami injekcí.',
      'Trigger — injekce, která spustí ovulaci v naplánovaný čas.',
      'Odběr a zpracování spermatu v laboratoři v den výkonu.',
      'Samotné zavedení připravených spermií do dělohy tenkým katétrem. Několik minut, bez narkózy.',
      'Dvoutýdenní čekání a test.',
    ],
    prepareFor: [
      'Zjistit dopředu, kolik cyklů inseminace má u vaší diagnózy smysl — obvykle se počítá se třemi až šesti, pak se přechází dál.',
      'Naplánovat, kdo přiveze vzorek a kdy. Načasování je na hodiny.',
      'Vzít si po zákroku volnější půlden, i když to není nutné. Klid se hodí spíš hlavě než tělu.',
      'Vědět, že po výkonu můžete mít mírné křeče a slabé špinění. To je běžné.',
    ],
    mind: [
      {
        title: 'Mezistupeň, který nemusí být zklamání',
        body: 'Inseminace je často vnímaná jako „ještě ne to pravé“. Přitom pro některé diagnózy je to přesně ta správná metoda a je výrazně šetrnější než IVF. Pokud vám ji lékař navrhl, má k tomu důvod — zeptejte se jaký.',
      },
      {
        title: 'Čekání je stejné jako po transferu',
        body: 'Dva týdny nejistoty se nezkrátí tím, že o nich budete číst. Naplánujte si na ně program dopředu.',
      },
    ],
    body: [
      {
        title: 'Po zákroku',
        body: 'Ležení není potřeba — spermie neodtečou. Běžný den zvládnete normálně. Vynechte jen intenzivní zátěž v den výkonu, spíš kvůli křečím než kvůli výsledku.',
      },
      {
        title: 'Sex po inseminaci',
        body: 'Není zakázaný, pokud vám lékař neřekl jinak. U některých protokolů se dokonce doporučuje.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství. Přerušovat ji kolem výkonu nemá důvod.',
        evidence: 'standard',
      },
      {
        name: 'Progesteron',
        why: 'Není doplněk, ale lék — u části protokolů se po inseminaci nasazuje podpora luteální fáze.',
        evidence: 'standard',
        note: 'Bere se přesně podle předpisu. Sama nikdy nevysazujte ani neměňte.',
      },
    ],
    partner: [
      'V den výkonu jde o načasování — domluvte se předem, kdy a kam vzorek odevzdáte, ať se to neřeší ráno.',
      'Před odběrem se obvykle doporučuje dva až pět dní abstinence. Přesně vám to řekne klinika.',
      'Zákrok je krátký, ale den je nabitý. Odvezte ji.',
    ],
    track: [
      'Den cyklu a velikost folikulů z každé kontroly.',
      'Přesný čas triggeru — od něj se odvíjí termín výkonu.',
      'Datum inseminace, aby šlo počítat, kolikátý den čekáte.',
    ],
    askDoctor: [
      'Proč u nás inseminace, a ne rovnou IVF?',
      'Kolik cyklů má u naší diagnózy smysl zkusit?',
      'Budu mít stimulaci, a pokud ano, jakou?',
      'Jaká je u nás šance na jeden cyklus — a co ji ovlivňuje?',
    ],
    terms: ['IUI', 'Trigger', 'Folikulometrie', 'Luteální fáze', 'Podpora luteální fáze', 'Spermiogram'],
  },

  {
    phase: 'ivf_prep',
    summary: 'Cyklus ještě nezačal, ale rozhoduje se tu hodně: protokol, klinika, peníze a načasování.',
    whatAwaits: [
      'Vstupní konzultace, kde se určí protokol podle vašich hodnot.',
      'Podpisy informovaných souhlasů. Je toho hodně a stojí za to je číst.',
      'Objednání léků a zaškolení, jak si píchat injekce.',
      'Naplánování začátku podle cyklu — často se čeká na menstruaci.',
      'Vyřízení úhrady: v Česku hradí pojišťovna určitý počet cyklů do daného věku, zbytek si platíte.',
    ],
    prepareFor: [
      'Zjistit přesně, co je hrazené a co ne. Ptejte se i na doplňkové metody, které se doporučují zvlášť — u části z nich je přínos sporný.',
      'Vzít si dovolenou nebo domluvit flexibilitu na dny odběru a transferu. Termíny se hýbou podle toho, jak rostou folikuly.',
      'Připravit místo doma na léky — část se skladuje v lednici.',
      'Domluvit se s partnerem, kdo píchá injekce, kdyby to nešlo.',
    ],
    mind: [
      {
        title: 'Poslední klidné období',
        body: 'Až cyklus začne, tempo se zrychlí. Tenhle čas využijte na věci, které se pak dělají hůř: doladit spánek, dořešit v práci, promluvit si s partnerem o tom, co budete dělat, když to nevyjde.',
      },
      {
        title: 'Domluvte se na tom předem',
        body: 'Kolik cyklů zvládneme finančně? Kolik psychicky? Co uděláme, když bude jedno embryo, a co, když žádné? Rozhodovat se o tom v den špatné zprávy je mnohem těžší.',
      },
    ],
    body: [
      {
        title: 'Co ještě stihnete',
        body: 'Tři měsíce před cyklem má smysl srovnat spánek, omezit alkohol a zavést pravidelný pohyb. Ve stimulaci už zátěž snížíte, takže teď je poslední chvíle na budování kondice.',
      },
      {
        title: 'Váha',
        body: 'Extrémní diety před cyklem škodí. Pokud vám lékař doporučil upravit váhu, dělejte to postupně a začněte s předstihem, ne měsíc před stimulací.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Základ, pokračuje celým cyklem i do těhotenství.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Řada klinik ho před cyklem měří a dorovnává.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Koenzym Q10',
        why: 'Diskutuje se u snížené ovariální rezervy, obvykle se začíná několik měsíců před cyklem.',
        evidence: 'diskutovaný',
      },
      {
        name: 'Inositol',
        why: 'U PCOS se používá s cílem zlepšit odpověď na stimulaci.',
        evidence: 'diskutovaný',
        note: 'Vždy řekněte klinice, co berete — některé doplňky se s protokolem míjejí.',
      },
    ],
    partner: [
      'Jděte na vstupní konzultaci s ní. Padne tam víc informací, než se dá zapamatovat.',
      'Naučte se píchat injekce, i když to zvládá sama. Jednou se to bude hodit.',
      'Domluvte si, kdy je vaše místo v procesu — odběr spermatu v den punkce je jen jedna z věcí.',
    ],
    track: [
      'První den menstruace — od něj se plánuje start.',
      'Vstupní hodnoty (AMH, FSH, antrální folikuly), abyste je měla pohromadě.',
      'Seznam léků a kdy je začnete brát.',
    ],
    askDoctor: [
      'Jaký protokol navrhujete a proč zrovna ten?',
      'Kolik vajíček podle mých hodnot očekáváte?',
      'Které úkony jsou hrazené a které si budeme platit?',
      'Jaké doplňkové metody nabízíte a jaký pro ně máte důkaz?',
      'Co bude znamenat, když odpověď na stimulaci nebude dobrá?',
    ],
    terms: ['Antagonistický protokol', 'Down-regulace', 'AMH', 'Antrální folikuly', 'Vitrifikace', 'ICSI', 'PGT-A'],
  },

  {
    phase: 'stimulation',
    summary: 'Injekce každý den a kontroly každé dva až tři dny. Tělo pracuje na plné obrátky — a je to znát.',
    whatAwaits: [
      'Denní injekce, obvykle večer ve stejnou dobu. Většina žen si je píchá sama do bříška.',
      'Ultrazvukové kontroly zhruba každé dva až tři dny, často brzy ráno.',
      'Dávky se v průběhu mění podle toho, jak folikuly rostou. Změna dávky není chyba, je to řízení.',
      'Nafouklé břicho, citlivá prsa, únava a výkyvy nálad. Ke konci stimulace nejvíc.',
      'Trigger v přesně určený čas — obvykle 34–36 hodin před odběrem. Tady se nesmí splést hodina.',
    ],
    prepareFor: [
      'Volnější kalhoty. Břicho se zvětší a je citlivé.',
      'Ranní termíny na kontroly — domluvte si to v práci dopředu.',
      'Chladicí polštářek a dezinfekci k injekcím, ať to máte na jednom místě.',
      'Vědět, že poslední dny bývají fyzicky nejtěžší z celého cyklu.',
    ],
    mind: [
      {
        title: 'Hormony za to můžou',
        body: 'Podrážděnost, plačtivost a pocit, že se neovládáte, jsou přímý důsledek toho, co se s vámi děje. Není to vaše slabost a nemusíte to na sobě přemáhat. Řekněte okolí dopředu, že tenhle týden budete jiná.',
      },
      {
        title: 'Nepočítejte folikuly jako body',
        body: 'Čísla z každé kontroly svádějí k porovnávání — s minulým cyklem, s cizími ženami na fóru. Počet folikulů není známka. Rozhoduje, kolik z nich obsahuje zralé vajíčko, a to se ukáže až po odběru.',
      },
      {
        title: 'Dýchání, které funguje ve dvě ráno',
        body: 'Nádech na čtyři, výdech na šest, pět minut. Prodloužený výdech tlumí stresovou reakci. Je to jednoduché, nudné a je to jedna z mála věcí, které v tu chvíli opravdu zaberou.',
      },
    ],
    body: [
      {
        title: 'Jak cvičit ve stimulaci',
        body: 'Zvolněte. Chůze, lehká jóga, protahování — ano. Běh, skákání, prudké otočky a těžké břemena — ne. Vaječníky jsou zvětšené a hrozí jejich zkroucení (torze), což je akutní stav.',
      },
      {
        title: 'Pití a sůl',
        body: 'Dostatek tekutin a normálně solené jídlo pomáhají udržet objem v cévách. Při vyšším riziku OHSS vám klinika často doporučí i nápoje s ionty a víc bílkovin.',
      },
      {
        title: 'Kdy okamžitě volat',
        body: 'Prudká bolest břicha, rychle rostoucí obvod břicha, dušnost, výrazně méně moči, zvracení. Můžou to být příznaky OHSS nebo torze vaječníku — nečekejte na ranní ordinaci.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství — tedy dřív, než o něm budete vědět. Proto se bere průběžně, ne až po pozitivním testu.',
        evidence: 'standard',
      },
      {
        name: 'Bílkoviny ve stravě',
        why: 'Při riziku OHSS se doporučuje jejich vyšší příjem spolu s dostatkem tekutin.',
        evidence: 'diskutovaný',
        note: 'Konkrétní režim vám určí klinika podle toho, jak reagujete.',
      },
    ],
    partner: [
      'Píchejte injekce, pokud to unese. Když ne, aspoň buďte v místnosti a připravte pomůcky.',
      'Vozte ji na ranní kontroly. Vstávat ve čtyři a pak jet do práce je snesitelnější ve dvou.',
      'Neptejte se „kolik jich máš?“ jako na skóre. Zeptejte se, co říkal lékař a jak jí je.',
      'Poslední dny bude nafouklá, unavená a podrážděná. Není to na vás.',
    ],
    track: [
      'Počet a velikost folikulů z každé kontroly — z toho vznikne křivka růstu.',
      'Estradiol, pokud vám ho měří.',
      'Obvod břicha, když máte riziko OHSS.',
      'Nálada a bolest — uvidíte, jak stimulace probíhala, až se na to budete chtít podívat zpětně.',
    ],
    askDoctor: [
      'Kolik folikulů roste a jak velké mají být před odběrem?',
      'Mám riziko OHSS a podle čeho to poznáte?',
      'Jak přesně a kdy si mám píchnout trigger?',
      'Co mám dělat, když si popletu dávku nebo čas?',
    ],
    terms: ['Folikul', 'Estradiol', 'Trigger', 'OHSS', 'Torze vaječníku', 'Antagonistický protokol', 'Folikulometrie'],
  },

  {
    phase: 'retrieval',
    summary: 'Den odběru. Krátký zákrok v analgosedaci, po kterém jde většina žen domů do několika hodin.',
    whatAwaits: [
      'Příchod nalačno, obvykle brzy ráno. Nejíst a nepít podle pokynů kliniky.',
      'Zákrok trvá zhruba 10–20 minut. Probíhá v analgosedaci — spíte a nic necítíte.',
      'Po probuzení odpočinek na lůžku, kontrola a informace, kolik vajíček se získalo.',
      'Odpoledne doma. Křeče a špinění jsou běžné.',
      'Následující den telefonát z embryologie s informací, kolik vajíček bylo zralých a kolik se oplodnilo.',
    ],
    prepareFor: [
      'Doprovod, který vás odveze. Po sedaci nesmíte řídit.',
      'Vložky, volné oblečení, něco k pití na po zákroku.',
      'Volno na celý den, ideálně i na následující.',
      'Připravit se na to, že počet získaných vajíček bývá nižší než počet folikulů. Není to chyba, ne v každém folikulu je zralé vajíčko.',
    ],
    mind: [
      {
        title: 'Číslo, které uslyšíte, není známka',
        body: 'Kolik vajíček se získalo, řekne jen část příběhu. Důležité je, kolik jich bylo zralých a kolik se jich oplodní — a to se dozvíte až zítra. Nesrovnávejte se s nikým, kdo měl jiný protokol a jiné hodnoty.',
      },
      {
        title: 'Prázdno po zákroku',
        body: 'Týdny jste na něco čekala a najednou je hotovo. Únava a útlum jsou normální reakce, nejen po sedaci. Nechte si na ten den nic v plánu.',
      },
    ],
    body: [
      {
        title: 'Následující dny',
        body: 'Klid, ale ne strohé ležení — chůze po bytě je v pořádku. Bez sportu, bez zvedání těžkého, bez sexu, dokud vám klinika neřekne jinak. Vaječníky jsou pořád zvětšené.',
      },
      {
        title: 'Kdy volat lékaře',
        body: 'Silné krvácení, horečka, prudká nebo narůstající bolest břicha, rychlé zvětšování břicha, dušnost. Po odběru je riziko OHSS nejvyšší v následujících dnech.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství — tedy dřív, než o něm budete vědět. Proto se bere průběžně, ne až po pozitivním testu.',
        evidence: 'standard',
      },
      {
        name: 'Tekutiny a bílkoviny',
        why: 'Součást prevence a zvládání OHSS v prvních dnech po odběru.',
        evidence: 'diskutovaný',
        note: 'Řiďte se pokyny kliniky, ne obecným návodem z internetu.',
      },
    ],
    partner: [
      'Váš vzorek se odebírá obvykle týž den ráno. Domluvte si čas předem.',
      'Odvezte ji a zůstaňte s ní. Po sedaci nesmí být sama a nesmí řídit.',
      'Zprávu z embryologie berte oba — ať to nemusí druhému den co den tlumočit sama.',
    ],
    track: [
      'Počet získaných vajíček a kolik z nich bylo zralých.',
      'Bolest a krvácení v následujících dnech.',
      'Obvod břicha a váha, pokud máte riziko OHSS — rychlý nárůst je varovný.',
    ],
    askDoctor: [
      'Kolik vajíček se získalo a kolik jich bylo zralých?',
      'Kdy a jak se dozvím další zprávy z embryologie?',
      'Jaké příznaky po odběru jsou ještě normální a kdy mám volat?',
      'Plánujeme transfer v tomhle cyklu, nebo zmrazíme?',
    ],
    terms: ['Punkce', 'OHSS', 'ICSI', 'Vitrifikace', 'Zralé vajíčko'],
  },

  {
    phase: 'fertilization',
    summary: 'Den po odběru. V laboratoři se rozhoduje, kolik vajíček se oplodnilo — a vy u toho nemůžete nic ovlivnit.',
    whatAwaits: [
      'Telefonát z embryologie, obvykle dopoledne.',
      'Informace, kolik vajíček bylo zralých a u kolika došlo k oplodnění.',
      'Vysvětlení, jestli se použilo klasické IVF nebo ICSI.',
      'Termín dalšího hlášení — většinou třetí a pátý den.',
    ],
    prepareFor: [
      'Že čísla klesají. Ne každé získané vajíčko je zralé a ne každé zralé se oplodní. Je to očekávaný průběh, ne selhání.',
      'Být u telefonu v domluvenou dobu a mít kam si zapsat, co uslyšíte.',
      'Že si nebudete pamatovat nic z toho, co zaznělo po prvním čísle. Zapisujte si to.',
    ],
    mind: [
      {
        title: 'Bezmoc je tady na místě',
        body: 'Tohle je fáze, kde opravdu nemůžete udělat nic. Žádná strava, žádný klid, žádná myšlenka to neovlivní. Paradoxně to bývá úleva — dovolte si to na pár dní pustit.',
      },
      {
        title: 'Nepřepočítávejte to dopředu',
        body: 'Z počtu oplodněných vajíček se nedá spolehlivě odvodit, kolik bude blastocyst. Každý další den je vlastní krok.',
      },
    ],
    body: [
      {
        title: 'Zotavení po odběru pokračuje',
        body: 'Křeče a nafouklé břicho ještě trvají. Klid, tekutiny, žádný sport. Pokud se bolest zhoršuje místo aby ustupovala, volejte.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství — tedy dřív, než o něm budete vědět. Proto se bere průběžně, ne až po pozitivním testu.',
        evidence: 'standard',
      },
      {
        name: 'Progesteron',
        why: 'U čerstvého transferu se podpora luteální fáze obvykle nasazuje už teď.',
        evidence: 'standard',
        note: 'Přesně podle předpisu. Je to lék, ne doplněk.',
      },
    ],
    partner: [
      'Buďte u toho telefonátu, nebo si ho vezměte vy. Ať ta čísla nemusí přebírat vždycky ona.',
      'Neptejte se „to je málo?“. Zeptejte se embryologa, co to znamená pro další dny.',
    ],
    track: [
      'Počet zralých vajíček a počet oplodněných.',
      'Metoda oplodnění (IVF nebo ICSI).',
      'Domluvený termín dalšího hlášení.',
    ],
    askDoctor: [
      'Kolik vajíček bylo zralých a kolik se oplodnilo?',
      'Použili jste ICSI, a pokud ano, proč?',
      'Kdy se dozvím další informace?',
    ],
    terms: ['ICSI', 'PICSI', 'Zygota', 'Kultivace'],
  },

  {
    phase: 'embryo_culture',
    summary: 'Embrya rostou v laboratoři. Každý den se jejich počet může zmenšit — a je to normální průběh, ne chyba.',
    whatAwaits: [
      'Hlášení z embryologie, obvykle třetí a pátý den kultivace.',
      'Popis embryí podle počtu buněk a kvality, u blastocyst podle Gardnerovy klasifikace.',
      'Rozhodnutí, jestli se transfer udělá pátý den, nebo se embrya zmrazí.',
      'Postupné ubývání embryí — do pátého dne se dostane jen část z nich.',
    ],
    prepareFor: [
      'Že písmena a čísla u embryí (třeba 4AB) vypadají jako známkování, ale jsou to jen popisy vzhledu.',
      'Že se plán může změnit ze dne na den — z čerstvého transferu na zmrazení a naopak.',
      'Že telefonát přijde ve chvíli, kdy zrovna nebudete moct mluvit. Domluvte si náhradní čas.',
    ],
    mind: [
      {
        title: 'Nejtěžší je pátý den',
        body: 'Do pátého dne se dostane menší část embryí a čekání na tuhle zprávu bývá horší než čekání na test. Nemá smysl to zlehčovat — má smysl mít na ten den někoho po ruce.',
      },
      {
        title: 'Když zůstane jedno',
        body: 'Jedno embryo není horší výchozí pozice než pět. Rozhoduje jeho kvalita, ne počet sourozenců v laboratoři.',
      },
    ],
    body: [
      {
        title: 'Klid pokračuje',
        body: 'Po odběru pořád platí: žádná zátěž, dostatek tekutin, pozor na příznaky OHSS. Pokud vás čeká transfer, tělo teď připravujete jen tím, že mu dáte pokoj.',
      },
    ],
    supplements: [
      {
        name: 'Progesteron',
        why: 'Udržuje děložní sliznici připravenou, dokud placenta nepřevezme tvorbu hormonů. U IVF je to standard, ne volba.',
        evidence: 'standard',
        note: 'Nikdy nevysazujte sama, ani když máte pocit, že se nic neděje.',
      },
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství — tedy dřív, než o něm budete vědět. Proto se bere průběžně, ne až po pozitivním testu.',
        evidence: 'standard',
      },
    ],
    partner: [
      'Ptejte se na hlášení vy. Střídat se v tom pomáhá víc než jakákoliv útěcha.',
      'Nekomentujte kvalitu embryí. Ona už si o nich přečetla všechno, co na internetu je.',
    ],
    track: [
      'Počet embryí každý den kultivace.',
      'Popis kvality, jak vám ho nadiktovali.',
      'Rozhodnutí o transferu nebo zmrazení.',
    ],
    askDoctor: [
      'Kolik embryí se vyvíjí a jak vypadají?',
      'Co znamená to označení kvality u mého embrya?',
      'Budeme dělat transfer teď, nebo mrazit — a proč?',
      'Kolik embryí zbude na zmrazení?',
    ],
    terms: ['Blastocysta', 'Morula', 'Gardnerova klasifikace', 'Kultivace', 'Vitrifikace', 'Hatching', 'PGT-A'],
  },

  {
    phase: 'transfer',
    summary: 'Den transferu. Zákrok trvá pár minut, nebolí a nevyžaduje narkózu — a přesto je to den, na který se čekalo roky.',
    whatAwaits: [
      'Příchod obvykle s plným močovým měchýřem, aby byla děloha na ultrazvuku lépe vidět.',
      'Zavedení embrya tenkým katétrem pod ultrazvukovou kontrolou. Několik minut, bez narkózy.',
      'Krátký odpočinek a odchod domů.',
      'Pokračování v podpoře luteální fáze — obvykle progesteron.',
      'Začátek dvoutýdenního čekání.',
    ],
    prepareFor: [
      'Vzít si s sebou ponožky a něco na čtení. Čekání na sále bývá delší než samotný výkon.',
      'Vědět, že po transferu můžete normálně chodit, jet autem a jít domů. Embryo nevypadne.',
      'Domluvit si, kdy bude odběr hCG — obvykle 9.–12. den po transferu blastocysty.',
      'Připravit se na to, že po transferu nastane zvláštní ticho: všechno je hotové a nezbývá než čekat.',
    ],
    mind: [
      {
        title: 'Ležení nepomáhá',
        body: 'Studie opakovaně ukazují, že klid na lůžku po transferu výsledek nezlepšuje — spíš naopak. Běžný pohyb je v pořádku a psychicky je lepší mít co dělat.',
      },
      {
        title: 'Dopis, který nikdo neuvidí',
        body: 'Spousta žen si právě dnes napíše pár vět embryu. Není to naivní. Je to způsob, jak pojmenovat, co se právě stalo, aniž byste to musela někomu vysvětlovat.',
      },
    ],
    body: [
      {
        title: 'Co ano a co ne',
        body: 'Ano: chůze, běžná práce, řízení, sprchování. Ne: intenzivní sport, zvedání těžkého, sauna, horká koupel, plavání v bazénu. Sex podle doporučení vaší kliniky — pravidla se liší.',
      },
      {
        title: 'Progesteron a jeho vedlejší účinky',
        body: 'Napětí v prsou, únava, nadýmání, mírné křeče. Ty samé pocity mívá začínající těhotenství i blížící se menstruace. Podle nich nic nepoznáte.',
      },
    ],
    supplements: [
      {
        name: 'Progesteron',
        why: 'Udržuje sliznici dělohy připravenou. U IVF cyklu je to standard, ne volba.',
        evidence: 'standard',
        note: 'Berte přesně podle předpisu a nevysazujte, ani když začnete špinit.',
      },
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v prvních týdnech těhotenství, kdy se uzavírá neurální trubice. Bere se dál i po transferu.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Podle hodnot, pokud vám ho lékař doplňuje.',
        evidence: 'podle hodnot',
      },
    ],
    partner: [
      'Jeďte s ní. Není to zákrok, který by vyžadoval doprovod, ale je to den, který si budete oba pamatovat.',
      'Nezačínejte plánovat. „Až to vyjde“ zní jako podpora a přitom to zvyšuje tlak.',
      'Zeptejte se jí, co by dnes večer chtěla dělat, a udělejte to.',
    ],
    track: [
      'Datum transferu — od něj se počítá všechno další.',
      'Který den kultivace embryo mělo (3. nebo 5.), kvůli přepočtu na termín testu.',
      'Léky a časy, ať se v podpoře nespletete.',
    ],
    askDoctor: [
      'Kolikátý den kultivace bylo embryo a jak vypadalo?',
      'Kdy přesně mám jít na hCG?',
      'Co mám dělat, když začnu špinit?',
      'Jak dlouho beru progesteron a co když zapomenu dávku?',
    ],
    terms: ['Embryotransfer', 'Blastocysta', 'Endometrium', 'Implantace', 'Implantační okno', 'Podpora luteální fáze', 'Progesteron'],
  },

  {
    phase: 'two_week_wait',
    summary: 'Dvoutýdenní čekání. Nejtěžší část celé léčby — a jediná, kde není co dělat.',
    whatAwaits: [
      'Deset až čtrnáct dní do odběru hCG.',
      'Příznaky, které nic neznamenají: napětí v prsou, křeče, únava, nadýmání. Dělá je progesteron stejně jako těhotenství.',
      'Implantační špinění u části žen, obvykle 6.–10. den po transferu. Jeho nepřítomnost nic neznamená.',
      'Silné nutkání testovat doma dřív, než má smysl.',
      'Odběr krve a čekání na číslo, které přijde týž nebo následující den.',
    ],
    prepareFor: [
      'Domácí testy dřív než 9. den po transferu blastocysty umí obojí: falešnou naději (zbytkový trigger) i falešné zklamání (ještě málo hCG).',
      'Naplánovat si na těch čtrnáct dní konkrétní program. Prázdný kalendář je nejhorší.',
      'Rozmyslet si, kdo se to dozví jako první a kdy — nebo že to zatím neřeknete nikomu.',
      'Vědět, kam volat, kdyby se objevilo silné krvácení nebo prudká bolest.',
    ],
    mind: [
      {
        title: 'Pravidlo jedné věci na den',
        body: 'Naplánujte si na každý den jednu konkrétní věc dopoledne a jednu odpoledne. Nemusí být velká. Cílem není zabavit se — cílem je, aby den měl tvar a nerozpustil se v čekání.',
      },
      {
        title: 'Přestaňte hledat příznaky',
        body: 'Rozbor každého píchnutí je past: cokoliv ucítíte, ukazuje na obojí zároveň. Když už, zapište si to do deníku a zavřete ho — místo abyste to sedmkrát denně googlila.',
      },
      {
        title: 'Když se vám hroutí den',
        body: 'Nádech na čtyři, výdech na šest, pět minut. Nebo si dojděte na dvacetiminutovou procházku. Obojí prokazatelně snižuje akutní úzkost. Nevyřeší to čekání, ale vrátí vám to zbytek dne.',
      },
      {
        title: 'Co si neříkat',
        body: '„Musím být v klidu, jinak to nevyjde.“ Stres v tomhle období výsledek neurčuje a tahle věta jen přidává vinu k bezmoci. Nemusíte být v klidu. Musíte to jen přežít.',
      },
    ],
    body: [
      {
        title: 'Pohyb ano, výkon ne',
        body: 'Chůze, lehká jóga, protahování. Vyhněte se intenzivnímu tréninku, skákání, zvedání těžkého a přehřívání (sauna, horká koupel, vířivka).',
      },
      {
        title: 'Jídlo bez pravidel navíc',
        body: 'Nemusíte držet žádnou speciální dietu. Platí to samé co v těhotenství: vynechat alkohol, syrové maso, neprošlé měkké sýry z nepasterizovaného mléka a omezit kofein.',
      },
      {
        title: 'Kdy volat okamžitě',
        body: 'Silné krvácení (promáčená vložka za hodinu), prudká jednostranná bolest v podbřišku, závrať nebo mdloba, horečka. Nečekejte na termín odběru.',
      },
    ],
    supplements: [
      {
        name: 'Progesteron',
        why: 'Pokračuje bez přerušení až do pokynu lékaře.',
        evidence: 'standard',
        note: 'Ani špinění není důvod vysadit. Naopak — volejte a ptejte se.',
      },
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství — tedy dřív, než o něm budete vědět. Proto se bere průběžně, ne až po pozitivním testu.',
        evidence: 'standard',
      },
    ],
    partner: [
      'Neptejte se každý den „cítíš něco?“. Ona to sleduje dost i bez vás.',
      'Naplánujte na tenhle týden něco, co se těší — víkend mimo domov, film, návštěva.',
      'V den odběru si vezměte volno, nebo aspoň buďte na telefonu.',
      'Když přijde špatná zpráva, neopravujte ji hned na „zkusíme to znovu“. Nejdřív ji nechte být.',
    ],
    track: [
      'Který den po transferu právě je.',
      'Nálada, úzkost, naděje — zpětně uvidíte, že to houpalo, i když to v tu chvíli vypadalo na rovnou čáru dolů.',
      'Špinění a bolest, kdyby se na to lékař ptal.',
      'Datum a výsledek hCG.',
    ],
    askDoctor: [
      'Kdy přesně mám jít na odběr a je potřeba být nalačno?',
      'Co mám dělat, když začnu krvácet?',
      'Kdy se dozvím výsledek a kdo mi ho sdělí?',
      'Bude se beta opakovat za dva dny?',
    ],
    terms: ['hCG', 'Implantace', 'Implantační okno', 'Progesteron', 'Zdvojovací čas', 'Biochemické těhotenství'],
  },

  {
    phase: 'beta_positive',
    summary:
      'Test vyšel. Sleduje se, jestli hodnota roste tak, jak má, a čeká se na první ultrazvuk — pak vás centrum předá gynekologovi.',
    whatAwaits: [
      'Opakovaný odběr hCG za dva až tři dny. Sleduje se zdvojovací čas, ne jedno číslo.',
      'První ultrazvuk zhruba v 6.–7. týdnu — potvrzení, že těhotenství je v děloze a má srdeční akci.',
      'Pokračování v podpoře luteální fáze, často až do 10.–12. týdne.',
      'Období, kdy se radost mísí se strachem víc, než jste čekala.',
    ],
    prepareFor: [
      'Že jedno číslo beta nic neříká — rozhoduje trend. Rozmezí normálních hodnot je velmi široké.',
      'Že do prvního ultrazvuku je dlouho a nedá se to urychlit.',
      'Že příznaky přicházejí a odcházejí. Jejich zmizení na jeden den není signál.',
      'Rozmyslet si, komu to řeknete a kdy.',
    ],
    mind: [
      {
        title: 'Tady vaše cesta v téhle aplikaci končí',
        body: 'Bloomia vás doprovází od rozhodnutí až sem — k pozitivnímu testu. Průběh těhotenství je jiná etapa s jinými otázkami a patří vašemu gynekologovi, ke kterému vás centrum v následujících týdnech předá. Deník, hodnoty i poznámky vám tu zůstávají: jsou vaše a hodí se na první návštěvě u nového lékaře. A kdyby se cesta znovu otočila, najdete tu i to.',
      },
      {
        title: 'Radovat se neumíte a je to v pořádku',
        body: 'Po dlouhé léčbě málokdo přepne do radosti. Většina žen popisuje opatrnost, nedůvěru a čekání na ránu. Není to nevděk ani špatné znamení — je to naučená obrana po letech zklamání.',
      },
      {
        title: 'Nekontrolujte to testy donekonečna',
        body: 'Domácí testy nejsou kvantitativní a jejich sytost nic nevypovídá. Opakované testování je způsob, jak si koupit deset minut klidu a pak zase začít.',
      },
    ],
    body: [
      {
        title: 'Pohyb v raném těhotenství',
        body: 'Chůze, plavání, lehká jóga a to, na co jste zvyklá v mírné intenzitě. Vynechte nárazové sporty, zvedání těžkého a přehřívání. Při krvácení nebo bolesti se poraďte, než budete pokračovat.',
      },
      {
        title: 'Kdy volat okamžitě',
        body: 'Silná jednostranná bolest v podbřišku, bolest v rameni, závrať nebo mdloba, silné krvácení. Můžou to být příznaky mimoděložního těhotenství, které je akutní stav.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Nejdůležitější je v prvních týdnech, kdy se uzavírá neurální trubice miminka. Proto se bere celý první trimestr.',
        evidence: 'standard',
      },
      {
        name: 'Jód',
        why: 'Potřeba v těhotenství stoupá — jód je nutný pro vývoj mozku miminka a pro funkci štítné žlázy.',
        evidence: 'standard',
        note: 'Při onemocnění štítné žlázy vždy podle lékaře.',
      },
      {
        name: 'Progesteron',
        why: 'Podpora luteální fáze pokračuje podle protokolu.',
        evidence: 'standard',
        note: 'O vysazení rozhoduje lékař, obvykle mezi 10. a 12. týdnem.',
      },
      {
        name: 'Vitamin D',
        why: 'Doplňuje se podle naměřené hladiny, ne paušálně.',
        evidence: 'podle hodnot',
      },
    ],
    partner: [
      'Nezačínejte hned kupovat a plánovat. Dejte jí prostor přijmout to postupně.',
      'Jděte s ní na první ultrazvuk. Je to termín, na kterém se hodně rozhoduje.',
      'Když má strach, nevyvracejte ho. Po tom, čím prošla, dává smysl.',
    ],
    track: [
      'Hodnoty hCG s daty odběrů — z toho vznikne křivka růstu.',
      'Datum prvního ultrazvuku.',
      'Léky, které pořád berete, a do kdy.',
    ],
    askDoctor: [
      'Roste beta tak, jak má?',
      'Kdy má smysl jít na ultrazvuk a co na něm uvidíme?',
      'Do kdy beru progesteron?',
      'Kdy mě předáte do péče gynekologa?',
    ],
    terms: ['hCG', 'Zdvojovací čas', 'Biochemické těhotenství', 'Mimoděložní těhotenství', 'Gestační váček'],
  },

  {
    phase: 'waiting_next_attempt',
    summary: 'Mezidobí. Čas na vyhodnocení, na tělo a na rozhodnutí, jak dál — ne ztracený měsíc.',
    whatAwaits: [
      'Kontrolní konzultace, kde se probere, co v cyklu proběhlo a co změnit.',
      'Návrat menstruace, obvykle do dvou týdnů po vysazení podpory.',
      'Rozhodnutí o dalším postupu: kryoembryotransfer, nová stimulace, doplňující vyšetření.',
      'Období, kdy se vrací normální život — a je to divné.',
    ],
    prepareFor: [
      'Sepsat si otázky na vyhodnocovací konzultaci. Tohle je jediný termín, kde se dá něco doopravdy změnit.',
      'Zjistit, kolik zbývá zamražených embryí a jaký je plán s nimi.',
      'Zeptat se, jestli má smysl doplnit nějaké vyšetření před dalším pokusem.',
      'Naplánovat si pauzu, pokud ji potřebujete. Není to prohra.',
    ],
    mind: [
      {
        title: 'Truchlení, které nikdo nepojmenuje',
        body: 'Neúspěšný cyklus je ztráta, i když nikdy nebyl pozitivní test. Okolí to tak nevidí a čeká, že se seberete. Máte právo být týdny mimo.',
      },
      {
        title: 'Kolik ještě',
        body: 'Otázka, kterou si dřív nebo později položí každá. Pomáhá si předem stanovit hranici — počet cyklů, částku, časový horizont — a napsat si ji. Ne proto, že ji musíte dodržet, ale abyste se rozhodovala vy, ne setrvačnost.',
      },
      {
        title: 'Kdy vyhledat odbornou pomoc',
        body: 'Když smutek trvá většinu dní víc než dva týdny, nemůžete spát, ztratila jste zájem o věci, které vás dřív bavily, nebo vás napadají myšlenky na ublížení sobě. Tohle není slabost a psycholog se zaměřením na reprodukci je běžná součást péče. Linka první psychické pomoci: 116 123, nepřetržitě a zdarma.',
      },
    ],
    body: [
      {
        title: 'Vraťte se k pohybu',
        body: 'Tohle je nejlepší období pro vytrvalost a sílu — ve stimulaci to zas půjde omezit. Tři až pět tréninků týdně, cokoliv, co vás baví.',
      },
      {
        title: 'Nechte tělo srovnat',
        body: 'Po stimulaci trvá pár týdnů, než se vaječníky a cyklus vrátí do normálu. Pauza mezi cykly není zdržení, je součást léčby.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Bere se dál — další pokus může přijít dřív, než čekáte.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Dobrý čas nechat si hladinu zkontrolovat a dorovnat.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Koenzym Q10',
        why: 'Pokud se o něm bavíte, má se začínat několik měsíců před dalším cyklem — teď, ne až v něm.',
        evidence: 'diskutovaný',
      },
    ],
    partner: [
      'Nespěchejte s „zkusíme to znovu“. Nejdřív ať doběhne zklamání.',
      'Jděte na vyhodnocovací konzultaci spolu a mějte připravené otázky.',
      'Řekněte nahlas, jak je na tom vaše hranice — finanční i psychická. Ona ji odhaduje a bojí se zeptat.',
    ],
    track: [
      'Co v cyklu proběhlo: dávky, počty, kvalita embryí. Pro další konzultaci k nezaplacení.',
      'Návrat menstruace.',
      'Nálada v čase — pomůže poznat, jestli se zvedáte, nebo ne.',
    ],
    askDoctor: [
      'Co podle vás v tomhle cyklu nefungovalo?',
      'Co konkrétně změníme příště?',
      'Má smysl doplnit nějaké vyšetření?',
      'Kolik embryí máme zamražených a jaký je plán?',
      'Jak dlouho máme čekat do dalšího pokusu?',
    ],
    terms: ['Kryoembryotransfer', 'Vitrifikace', 'ERA test', 'Opakované ztráty těhotenství'],
  },

  {
    phase: 'repeated_failure',
    summary: 'Opakované neúspěchy. Tady se mění otázka: už ne „zkusíme to znovu“, ale „co uděláme jinak“.',
    whatAwaits: [
      'Podrobnější vyšetření, která se po prvním nebo druhém cyklu ještě nedělají.',
      'Hysteroskopie — pohled do dutiny děložní na srůsty, polypy nebo přepážku.',
      'Imunologické a genetické vyšetření obou partnerů, pokud je indikováno.',
      'Diskuze o PGT-A, o darovaných gametách nebo o změně kliniky.',
      'Rozhodování, které je čím dál těžší, protože už znáte cenu každé varianty.',
    ],
    prepareFor: [
      'Vyžádat si kompletní dokumentaci ze všech cyklů. Máte na ni právo a pro druhý názor je nutná.',
      'Zvážit konzultaci na jiném pracovišti. Není to zrada, je to standardní postup u opakovaných neúspěchů.',
      'Ptát se u každé nabídnuté metody navíc, jaký pro ni existuje důkaz. V téhle fázi se nabízí nejvíc věcí s nejasným přínosem.',
      'Rozmyslet si finanční a psychickou hranici — a napsat si ji.',
    ],
    mind: [
      {
        title: 'Vyčerpání není slabost',
        body: 'Po několika cyklech přichází stav, kdy už nezbývá naděje ani na to doufat. Je to popsaná a běžná reakce na opakovanou ztrátu. Nepotřebujete víc vůle. Potřebujete odpočinek a často i odbornou pomoc.',
      },
      {
        title: 'Máte právo přestat',
        body: 'Ukončit léčbu je legitimní rozhodnutí, ne kapitulace. Stejně legitimní je pauza na rok. Rozhodujete vy, ne očekávání okolí.',
      },
      {
        title: 'Když se pár rozchází v názoru',
        body: 'Časté a bolestivé. Pomáhá párová konzultace u psychologa se zaměřením na reprodukci — ne proto, že je vztah v troskách, ale proto, že tohle je rozhodnutí, které se špatně dělá samo.',
      },
    ],
    body: [
      {
        title: 'Dejte tělu pauzu',
        body: 'Cykly za sebou bez přestávky nejsou nutně lepší strategie. Pauza umožní doplnit vyšetření a vrátit se k pohybu, spánku a jídlu bez režimu.',
      },
      {
        title: 'Pozor na zázračné režimy',
        body: 'V téhle fázi přichází nejvíc nabídek na diety, detoxy a alternativní léčbu. Většina z nich nemá důkaz a některé interagují s léky. Cokoliv nového vždycky řekněte lékaři.',
      },
    ],
    supplements: [
      {
        name: 'Kyselina listová (folát)',
        why: 'Působí v nejranějších týdnech těhotenství — tedy dřív, než o něm budete vědět. Proto se bere průběžně, ne až po pozitivním testu.',
        evidence: 'standard',
      },
      {
        name: 'Vitamin D',
        why: 'Podle hodnot — u opakovaných neúspěchů se často kontroluje.',
        evidence: 'podle hodnot',
      },
      {
        name: 'Doplňky nabízené jako řešení neúspěchu',
        why: 'V téhle fázi se objevují nabídky drahých kombinovaných přípravků. Žádný doplněk neopraví příčinu opakovaného selhání implantace.',
        evidence: 'diskutovaný',
        note: 'Než něco koupíte, zeptejte se lékaře, co by to mělo změnit a podle čeho to poznáte.',
      },
    ],
    partner: [
      'Vyžádejte si dokumentaci a projděte ji vy. Ona už na to nemá sílu.',
      'Řekněte, kde je vaše hranice, dřív než ji přejedete oba.',
      'Nabídněte párovou konzultaci. Návrh od vás bere jinou váhu než od ní.',
    ],
    track: [
      'Přehled všech cyklů: protokol, dávky, počty vajíček, kvalita embryí, výsledek.',
      'Které vyšetření už proběhlo a s jakým nálezem.',
      'Nálada dlouhodobě — tady má smysl si toho všímat víc než čísel.',
    ],
    askDoctor: [
      'Co konkrétně u nás selhává — kvalita embryí, implantace, nebo něco jiného?',
      'Která vyšetření mají v naší situaci důkaz a která ne?',
      'Má smysl PGT-A, a proč právě u nás?',
      'Kdy je podle vás čas mluvit o darovaných gametách?',
      'Co byste dělal, kdybych byla vaše sestra?',
    ],
    terms: ['Opakované ztráty těhotenství', 'Hysteroskopie', 'Srůsty v dutině děložní', 'PGT-A', 'Karyotyp', 'Vyvážená translokace', 'Trombofilie', 'ERA test'],
  },
]
