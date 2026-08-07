import type { ContentItem, ContentPack } from '../types'

/**
 * Konec IVF cesty.
 *
 * Nejcitlivější balík aplikace. Čte ho žena, která zvažuje, že přestane,
 * nebo která už přestala. Podle toho je psaný.
 *
 * PRAVIDLA, KTERÁ TENHLE BALÍK DRŽÍ:
 *
 *  1. Ukončení léčby je legitimní rozhodnutí, ne selhání. Nikde se
 *     nerámuje jako prohra, kapitulace ani jako „nezvládla to“.
 *  2. Nikam se netlačí. Ani k dalšímu cyklu, ani ke konci. Ani jemně.
 *  3. Neslibuje se úleva, smíření ani naplněný život. O tom, jak to bude,
 *     rozhoduje ona, ne text.
 *  4. Adopce ani náhradní mateřství tu nejsou „řešení“ ani náhrada.
 *     Nanejvýš existující cesty, o kterých se dá zjistit víc jinde.
 *  5. Praktická část (embrya, skladné, dokumentace, peníze) je stejně
 *     důležitá jako ta emoční a je záměrně oddělená do checklistu,
 *     aby se dala otevřít i ve dni, kdy na čtení není síla.
 */

const REVIEW_PSY = 'Odborně garantováno – perinatální psychologie'
const REVIEW_REPRO = 'Odborně garantováno – reprodukční medicína'

/** Zdroj je u embryí povinný. Podmínky se liší pracoviště od pracoviště. */
const SRC_EMBRYA = [
  'Možnosti a podmínky se řídí platnou legislativou a řádem pracoviště. Proberte je se svou klinikou.',
]

const items: ContentItem[] = [
  // ------------------------------------------------------------------
  {
    id: 'kon-kdy-lide-premysli',
    kind: 'article',
    title: 'Kdy lidé o ukončení léčby přemýšlejí',
    excerpt:
      'Sedm důvodů, které k té úvaze vedou, vypsaných bez pořadí a bez hodnocení.',
    minutes: 7,
    phases: ['repeated_failure', 'waiting_next_attempt', 'loss_miscarriage'],
    topics: ['psychika', 'sebepece', 'vztah'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.7,
    body: `## Ta myšlenka přijde dřív, než se o ní mluví

Většina žen, které jsou v léčbě déle než rok, na její konec někdy pomyslí. Obvykle dávno předtím, než to řeknou nahlas. Přijde to v čekárně, v noci před odběrem, nebo úplně bez souvislosti v obchodě.

To, že o tom přemýšlíte, není rozhodnutí. Je to informace o tom, kde právě jste. Rozhodnutí je něco jiného a přichází jindy.

Tenhle text nikam nevede. Vypisuje důvody, se kterými ženy do téhle úvahy vstupují, a nestaví je do pořadí.

## Opakované neúspěchy

Po několika cyklech bez výsledku se mění matematika i vnitřní počasí. Naděje před transferem už není stejná jako poprvé a příprava na další pokus stojí víc sil, než kolik jich zbývá.

Někdy k tomu klinika přidá věcný údaj: šance dalšího cyklu je podle dosavadního průběhu nižší, než byla. To není rozsudek, ale je to informace, se kterou se počítá.

## Došla embrya

Když se vyčerpají zamražená embrya, cesta se rozdělí na dvě části: buď celý cyklus od začátku, včetně stimulace a odběru, nebo konec. Mezi tím není nic.

Rozdíl mezi „mám ještě jedno embryo“ a „nemám žádné“ je pro spoustu žen větší než kterýkoli jiný krok v léčbě.

## Došly peníze

Léčba se platí po částech, takže se dlouho tváří zvládnutelně. Součet za dva roky vypadá jinak než jedna faktura.

Peníze jako důvod se špatně říkají nahlas, protože to zvenčí zní jako otázka priorit. Není. Je to hranice jako každá jiná a je platná.

## Psychicky to nejde

Někdy je tělo připravené a hlava ne. Úzkost před každým odběrem, nespavost, pláč bez spouštěče, ztráta zájmu o všechno ostatní. Léčba dokáže spolknout celý život a ne každý rok se dá takhle prožít.

Tenhle důvod se často zlehčuje větou o tom, že je to jen hlava. Není. Je to podstatná část toho, jak se dá žít.

## Medicínský důvod

Někdy za ukončením stojí konkrétní zdravotní nález, riziko dalšího těhotenství pro vás, nebo doporučení lékaře v léčbě nepokračovat. To je situace, ve které rozhodnutí zčásti nedržíte v ruce vy, a to má vlastní tíhu.

Pokud jste v ní, má smysl nechat si vysvětlit, co přesně tomu doporučení stojí za základ, a případně si vyžádat druhý názor. Ne proto, abyste hledala jiný verdikt, ale abyste rozuměla tomu, který máte.

## Vztah to neunese

Léčba se dvěma lidem nedostává pod kůži stejně. Někdy z toho vznikne odstup, který se nedá dohnat, dokud je léčba mezi vámi. Rozhodnutí přestat pak není o dítěti, ale o tom, co ještě zbývá k záchraně.

## Prostě už nechci

Bez dalšího vysvětlení. Bez vyčerpaných embryí, bez došlých peněz, bez diagnózy. Někdy člověk jen ví, že tohle už dál dělat nechce.

Tenhle důvod bývá okolím přijímaný nejhůř a přitom je stejně platný jako všechny ostatní. Nemusíte ho nikomu obhajovat a nemusíte pro něj hledat lepší formulaci.

## Žádný z těch důvodů není lepší ani horší

Neexistuje pořadí, ve kterém by „došla embrya“ bylo důstojnější než „už nechci“. Ani hranice, za kterou se rozhodnutí teprve začíná počítat.

Léčba nemá metu, kterou je potřeba doběhnout, aby se z ní dalo odejít se ctí. Většina žen ale nějakou takovou metu v hlavě má, obvykle přesně o jeden cyklus dál, než kde právě jsou.

## Co s tím teď

- **Napište si svůj důvod jednou větou.** Ne pro nikoho jiného. Uvidíte, jestli je to jeden důvod, nebo tři.
- **Všimněte si, kdy ta myšlenka přichází.** Po neúspěchu, po faktuře, po hovoru s rodinou. Něco z toho je stav, něco okolnost.
- **Nezavazujte se dnes k ničemu.** Ani k pokračování, ani ke konci.

> Vědět, že o tom přemýšlíte, stačí jako dnešní výsledek. Nic dalšího dnes být nemusí.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-jak-se-rozhoduje',
    kind: 'article',
    title: 'Jak se rozhodnutí o konci léčby doopravdy dělá',
    excerpt:
      'Skoro nikdy se nedělá jednou a skoro vždycky se aspoň jednou obrátí. Tohle je popis toho procesu.',
    minutes: 8,
    phases: ['repeated_failure', 'waiting_next_attempt', 'loss_biochemical'],
    topics: ['psychika', 'sebepece', 'vztah'],
    level: 'essential',
    hero: 'taupe',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.65,
    body: `## Nedělá se jednou

V hlavě to vypadá jako jeden okamžik: sednu si, rozhodnu se, hotovo. V praxi se to skoro nikdy takhle nestane.

Obvyklý průběh vypadá spíš takhle: rozhodnete se skončit v neděli večer. V úterý si řeknete, že ještě jeden pokus. Za tři týdny to celé znovu. A ještě jednou.

To není zmatek ani slabost. Je to normální podoba rozhodování o něčem, co nemá správnou odpověď. Rozhodnutí, které se dá udělat najednou a čistě, je obvykle rozhodnutí o něčem menším.

## Rozhodnutí se mění a to je v pořádku

Kdo dnes ví, že chce skončit, může za měsíc vědět něco jiného. Neznamená to, že první verze byla nepravdivá. Znamená to, že se změnil den, tělo, zpráva od kliniky nebo množství sil.

Problém nastává jen tehdy, když se z toho kolotoče stane trvalý stav bez konce. Proto se vyplatí dát rozhodování nějaký rám, ne aby se uspěchalo, ale aby nebylo věčné.

## „Zatím nevím“ je platná odpověď

Nemusíte mít odpověď pro lékaře, pro rodiče ani pro sebe. „Zatím nevím“ je stav, ne vyhýbání se.

Když se vás na to někdo zeptá, stačí přesně tahle věta. Nemusíte ji doplňovat vysvětlením ani časovým odhadem.

Uvnitř léčby se z „nevím“ dá udělat konkrétní krok: pauza. Ta se dá naplánovat, dá se ukončit a nezavírá dveře ani na jednu stranu. Popisuje ji samostatný text o pauze.

## Co pomáhá, když se to nedaří rozseknout

**Oddělte dvě různé otázky.** „Chci ještě jeden cyklus?“ je něco jiného než „chci na tuhle cestu do konce života rezignovat?“. Většina lidí se snaží odpovědět na tu druhou, i když se rozhoduje o té první. Druhá otázka je moc velká na jeden večer.

**Dejte rozhodování datum, ne termín.** Například: do konce října o tom nerozhodujeme, prvního listopadu si o tom sedneme. Do té doby se ta myšlenka smí objevit, ale nemusí se řešit. Tohle jedno opatření uleví víc než cokoli jiného.

**Vyžádejte si věcné podklady.** Než se rozhodnete, můžete si od kliniky vyžádat konkrétní odpovědi. Ptejte se jmenovitě:

- Co konkrétně se v mých dosavadních cyklech opakovalo a co se lišilo?
- Je něco, co jsme zatím nevyšetřili a co by výsledek mohlo vysvětlit?
- Kdybych pokračovala, změnili byste v postupu něco, nebo by šlo o totéž znovu?
- Jak vidíte moji situaci ve srovnání s prvním cyklem?

Odpovědi nemusí rozhodnout za vás. Ale rozdíl mezi rozhodováním na základě dojmu a na základě informací je velký.

**Napište si dvě verze příštího roku.** Jednu s léčbou, jednu bez ní. Konkrétně: kde budete v květnu, co budete mít v kalendáři, kolik peněz, jaké dny volna. Ne pocity, ale rozvrh. Často teprve tady je vidět, co je únosné.

**Sledujte, který den to je.** Rozhodnutí udělané v den negativního výsledku, v den, kdy vám kamarádka oznámila těhotenství, nebo tři dny po odběru, kdy ještě dojíždějí hormony, je rozhodnutí udělané za nepříznivého počasí. Nemusí být špatné. Ale zaslouží si druhé čtení v jiný den.

## Otázky, které se vyplatí sepsat

Nemají správnou odpověď. Slouží k tomu, aby se z neurčité tíhy stalo něco, na co se dá ukázat prstem.

1. Čeho se na pokračování bojím nejvíc?
2. Čeho se na ukončení bojím nejvíc?
3. Co mi léčba v tuhle chvíli bere a co mi dává?
4. Co bych si přála, aby o téhle době za pět let platilo?
5. Kdyby o tom nikdo jiný nevěděl a nikomu se nemuselo nic vysvětlovat, co bych chtěla?

Pátá otázka bývá nejnepříjemnější, protože oddělí vaše rozhodnutí od očekávání okolí. Někdy se ukáže, že to, co drží cestu v chodu, není vaše přání.

## S kým to probírat a s kým ne

Rozhodnutí se nemusí probírat se všemi, kdo o léčbě vědí. Vyplatí se rozlišit tři skupiny:

- **Ti, kdo v tom jsou s vámi.** Partner, případně jeden blízký člověk. S nimi má rozhovor smysl vést do hloubky.
- **Ti, kdo mají věcné informace.** Lékař, psycholog. Od nich chcete podklady, ne stanovisko k vašemu životu.
- **Všichni ostatní.** Ti se to dozvědí, až budete chtít, a v podobě, kterou zvolíte vy.

## Nemusí to být navždy

Rozhodnutí přestat není podpis, který nejde odvolat. Řada žen se po měsících nebo letech vrátí, řada ne. Obojí je běžné.

Když si to připustíte dopředu, ubere to rozhodnutí část jeho hrozivosti. Nerozhodujete o zbytku života. Rozhodujete o tom, co bude teď.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-pauza-neni-konec',
    sources: ['Pravidla uchování embryí, lhůty i podmínky skladného se řídí platnou legislativou a smlouvou s konkrétním pracovištěm. Ověřte si je na své klinice.', 'Aktualizováno 7. 8. 2026.'],
    kind: 'article',
    title: 'Pauza není konec',
    excerpt:
      'Rozdíl mezi pauzou a ukončením léčby, včetně toho, co se během pauzy děje s embryi a se skladným.',
    minutes: 7,
    phases: [
      'repeated_failure',
      'waiting_next_attempt',
      'loss_biochemical',
      'loss_miscarriage',
    ],
    topics: ['psychika', 'sebepece', 'vztah'],
    level: 'essential',
    hero: 'sage',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.6,
    body: `## Dvě různé věci, které se pletou

**Pauza** znamená, že teď nepokračujete, a nechává otevřené, jestli se vrátíte. Nemá pevný konec, ale má začátek.

**Ukončení** znamená, že se cesta uzavírá, a s ním přichází praktická část: embrya, skladné, dokumentace, peníze.

Tyhle dvě věci se v hlavě často slijí do jedné, protože obě začínají stejnou větou: „teď už nemůžu“. Ale jsou to různá rozhodnutí a nemusí se dělat současně.

## Proč bývá pauza to, co člověk potřebuje

Léčba má vlastní tempo a to tempo nediktujete vy. Kontrola za dva dny, výsledek do večera, odběr možná ve čtvrtek. Roky v tomhle rytmu vyčerpají i člověka, kterému nic nechybí.

Když přijde myšlenka na konec, často se nevztahuje k celé cestě, ale k tomu tempu. K tomu, že se nedá naplánovat dovolená. K tomu, že každý měsíc má stejný tvar. K tomu, že už nezbylo nic, co by nebylo léčba.

Pauza tohle řeší přímo, a přitom nezavírá dveře. Řada žen po několika měsících zjistí, že rozhodnutí, které nešlo udělat v únoru, se v září udělá skoro samo. V obou směrech.

## Jak dlouhá

Neexistuje doporučená délka. Existují ale dva orientační body, které se hodí znát:

- **Krátká pauza (jeden až tři měsíce)** obvykle vrátí spánek a chuť k jídlu, ale nestihne změnit to, jak o léčbě přemýšlíte.
- **Delší pauza (půl roku a víc)** dá prostor i tomu druhému, ale je potřeba počítat s tím, že návrat pak vyžaduje víc administrativy a někdy zopakování vyšetření, kterým vypršela platnost.

Praktická otázka, která do rozvahy patří a se kterou se nedá nic dělat, je čas: u léčby hraje roli věk i to, jak se v čase mění výsledky vyšetření. Konkrétně pro vaši situaci to umí říct jedině vaše klinika. Má smysl se na to zeptat přímo a nechat si odpověď říct v číslech, ne v dojmech.

## Co se během pauzy děje s embryi

Zamražená embrya během pauzy nikam nemizí. Zůstávají uložená a čekají. To je jedna z věcí, kvůli kterým je pauza jednodušší než ukončení: nevynucuje si žádné rozhodnutí o nich.

Co ale běží dál, je **skladné**. Poplatek za uchování se obvykle platí na určité období dopředu a klinika k němu má vlastní pravidla: jak často se hradí, co se děje při nezaplacení, kam posílá upomínky a jak dlouho může uchování celkem trvat.

Tohle je ta část, která se v pauze nejčastěji zanedbá, protože se o ní nechce přemýšlet. Doporučení je jednoduché a věcné: než se odmlčíte, zjistěte si tři údaje.

1. Do kdy je skladné zaplacené.
2. Na jakou adresu a e-mail vám chodí upomínky a jestli jsou aktuální.
3. Co se stane, když platba nepřijde, a jak dlouho předem se ozvou.

Zapište si to na jedno místo a nastavte si připomínku měsíc před koncem období. Za půl roku si to nebudete pamatovat a nechcete se k tomu vracet přes upomínku, která přišla ve špatný den.

Praktickou část v úplnosti, včetně dokumentace a peněz, najdete v checklistu k uzavření cesty. Pro pauzu z něj potřebujete jen tuhle jednu skupinu položek.

## Co si domluvit s klinikou, než odejdete

Nemusíte nikomu oznamovat rozhodnutí, které jste neudělala. Stačí věcná zpráva: „Rozhodli jsme se dát si pauzu. Zatím nevíme, jak dlouhou.“

Zeptejte se přitom na:

- Jak dlouho platí vaše dosavadní vyšetření a která se při návratu opakují.
- Jestli je potřeba něco podepsat nebo nahlásit, když se cyklus neplánuje.
- Kdo bude vaším kontaktem, až se ozvete, a jestli zůstane stejný lékař.
- Jak se u nich objednává konzultace po delší přestávce a s jakým předstihem.

Odpovědi si napište. Za rok se bude hodit list papíru, ne vzpomínka.

## Co pauza neřeší

Nespraví, co bylo, a nezaručí nic dopředu. Neposune rozhodnutí za vás. A neubere tíhu ze samotné otázky, jen ji na čas odloží z každodenního provozu.

Někdy se v pauze ukáže, že problém nebyl v tempu, ale v tom, že cesta jako celek už dál nejde. To je taky výsledek pauzy a je stejně platný jako ten druhý.

> Pauza není odklad rozhodnutí, kterému se vyhýbáte. Je to způsob, jak si ho udělat za lepších podmínek než ve dvě ráno po negativním výsledku.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-kdyz-se-neshodneme',
    kind: 'article',
    title: 'Když jeden chce pokračovat a druhý ne',
    excerpt:
      'O nejtěžším rozhovoru ve dvou, bez rady, kdo má ustoupit.',
    minutes: 8,
    phases: ['repeated_failure', 'waiting_next_attempt', 'loss_miscarriage'],
    topics: ['vztah', 'psychika', 'sebepece'],
    level: 'deep',
    hero: 'dusk',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    body: `## Situace, se kterou nikdo nepočítal

Do léčby jste šli spolu. Někde po cestě se ale ukázalo, že jeden z vás už dál nechce a druhý ano. Najednou nestojíte proti diagnóze, ale proti sobě.

Tenhle text vám neřekne, kdo má ustoupit. Nemá na to podklady a nikdo zvenčí je nemá. Popisuje jen to, proč se to stává a jak se o tom dá mluvit tak, aby z rozhovoru nezbyla jen hádka.

## Proč se to stává

Neshoda obvykle nevzniká z toho, že by jeden chtěl dítě víc než druhý. Vzniká z toho, že léčbu prožíváte v odlišných rolích:

- **Zátěž není stejná.** Injekce, zákroky, hormonální výkyvy a čas strávený v čekárnách nesou obvykle rozdílné podíly. Pro toho, kdo je nese, může být další cyklus konkrétní fyzická hrozba. Pro druhého je to plán v kalendáři.
- **Bezmoc má různé podoby.** Ten, kdo léčbou neprochází tělem, často zažívá bezmoc z toho, že nemůže dělat nic. Návrh dalšího pokusu bývá tím jediným, co udělat může.
- **Naděje se opotřebovává jinak rychle.** Kdo sleduje výsledky den po dni, dojde na konec dřív než ten, kdo je slyší až v shrnutí.
- **Peníze a čas neznamenají pro každého totéž.** Jeden vidí splátku, druhý vidí odloženou hypotéku.
- **Konec může být pro každého jiný.** Pro jednoho je to konec léčby. Pro druhého konec představy o rodině.

Nic z toho není špatná vůle. Jsou to různá místa, ze kterých je vidět jiná část téhož.

## O čem se ve skutečnosti mluví

Věta „ještě jeden pokus“ může znamenat několik věcí naráz: chci dítě, nechci to takhle uzavřít, bojím se, že tě ztratím, nevím, co si počít s tím, co přijde potom.

Věta „už nechci“ může znamenat: nezvládnu další cyklus tělem, nechci znovu prožít ten den, potřebuju vrátit svůj život, mám o tebe strach.

Rozhovor se rozjede lépe, když se místo pozic pojmenují tyhle věci pod nimi. Pozice stojí proti sobě. To, co je pod nimi, se často z velké části překrývá.

## Jak o tom mluvit

**Ne v den, kdy přišel výsledek.** Ani druhý den. Vyberte den, kdy se nic neděje.

**Ne večer, když už oba nemůžete.** Rozhovor, který začne v jedenáct v noci, skončí špatně skoro vždy.

**Domluvte si, jak dlouho.** Čtyřicet minut. Když se to nedořeší, pokračuje se jindy. Rozhovor bez konce sklouzne k vyčerpání.

**Jedna otázka na jeden rozhovor.** Ne „co bude s naším životem“, ale „co pro tebe znamená ještě jeden pokus“.

**Nejdřív poslouchat, pak odpovídat.** Osvědčuje se prosté pravidlo: každý dostane deset minut, druhý mezitím nic nenamítá. Pak se prohodíte. Až potom se mluví společně.

## Věty, které rozhovor otevřou

- „Chci rozumět tomu, co ta druhá varianta znamená pro tebe. Ne abych ti to vymluvil.“
- „Řekni mi, co je pro tebe na tom rozhodnutí nejhorší. Já ti pak řeknu, co je nejhorší pro mě.“
- „Nemusíme se na tom shodnout dneska. Chci jen vědět, kde stojíš.“
- „Bojím se, že když ustoupím, budu ti to vyčítat. Chci to říct dřív, než se to stane.“
- „Co bys potřeboval, aby to pro tebe bylo únosné?“

## Věty, které rozhovor zavřou

Bez výčitky, jen pro orientaci: „Ty to prostě nechceš dost.“ „Ty nechápeš, čím procházím.“ „Když to nechceš ty, tak končíme.“ „Rozhodni ty, mně je to jedno.“

Poslední z nich vypadá vstřícně, ale obvykle znamená přenesení celé váhy na druhého. Za rok se z ní stane věta „to jsi chtěla ty“.

## Když se shoda nenajde

Někdy se nenajde. Existují dvě věci, které v takové chvíli pomáhají víc než další rozhovor.

**Časově ohraničené řešení.** Ne „ještě jeden pokus“ a ne „končíme“, ale „půl roku pauza a v březnu se k tomu vrátíme“. Odloží se tím rozhodnutí, ne vztah.

**Třetí člověk v místnosti.** Párová terapie nebo psycholog se zaměřením na neplodnost není známka toho, že je vztah v troskách. Je to způsob, jak vést rozhovor, který sami vést nedokážete, protože v něm oba máte příliš mnoho v sázce.

Zeptat se na kontakt můžete přímo na klinice. Řada pracovišť má psychologa, se kterým spolupracuje, a konzultace bývá možná i pro pár, ne jen pro jednoho z vás.

## Co v tomhle textu nenajdete

Návod, kdo má ustoupit. Rozhodnutí o tom, čí tělo do dalšího cyklu půjde a čí život se podle toho poskládá, nemůže udělat článek.

Co se říct dá: rozhodnutí, které jeden z vás udělá jen proto, aby měl klid, se obvykle vrátí. Někdy za rok, někdy za deset. Rozhovor, ve kterém oba slyší toho druhého, je nepříjemnější, ale drží déle.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-co-prijde-potom',
    kind: 'article',
    title: 'Co může přijít po rozhodnutí',
    excerpt:
      'Smutek, vztek, úleva a vina za tu úlevu. Mapa toho, co se po konci léčby často děje.',
    minutes: 8,
    phases: [
      'repeated_failure',
      'waiting_next_attempt',
      'loss_miscarriage',
      'loss_biochemical',
      'loss_ectopic',
    ],
    topics: ['psychika', 'sebepece', 'vztah'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    reviewedBy: REVIEW_PSY,
    publishedOn: '2026-08-07',
    boost: 0.6,
    body: `## Není jedna správná reakce

Po rozhodnutí nepřijde jeden pocit, ale několik, často naráz a v pořadí, které nedává smysl. Ráno klid, odpoledne vztek, večer prázdno. Nebo tři týdny nic a pak všechno najednou.

Následující výčet není fázemi, kterými se prochází po řadě. Je to seznam toho, co se běžně objevuje, abyste to poznala, až to přijde, a nemusela to považovat za poruchu.

## Smutek

Smutek po konci léčby má jednu zvláštnost: netýká se člověka, kterého jste znala. Týká se dítěte, které nebylo, a života, který jste si představovala. Okolí proto často nepozná, že jde o zármutek, a čeká, že to během několika týdnů odezní.

Nemusí. Zármutek nad něčím, co se nestalo, bývá tichý a dlouhý, a přichází ve vlnách navázaných na data: termíny, které měly být, výročí prvního cyklu, konec roku.

Neexistuje časový plán a nikdo vám nemůže slíbit, kdy to bude jinak.

## Vztek

Vztek na tělo. Na kliniku. Na ženy, které otěhotněly bez léčby. Na kamarádku, která oznámila těhotenství ve špatný den. Na partnera, který to nese jinak. Na sebe za rozhodnutí, které jste udělala, i za ta, která jste neudělala.

Vztek bývá společensky ještě hůř přijímaný než smutek, a proto se často schová dovnitř, kde se změní ve vyčerpání. Má smysl mu dát nějaké místo: sešit, hodinu chůze, terapii. Jakékoli místo je lepší než žádné.

## Úleva a vina za tu úlevu

Úleva je po konci léčby běžná. Někdy je to první jasný pocit, který přijde. Zmizí ranní odběry, kalendář s termíny, kontroly, čekání na telefon, plánování dovolené kolem cyklu.

A hned za ní se obvykle ozve vina: kdybych to chtěla dost, necítila bych úlevu.

**Tohle je potřeba říct rovnou: úleva není důkaz toho, že jste to nechtěla dost.** Je to reakce na konec dlouhé zátěže, ne stanovisko k tomu, jestli jste chtěla dítě. Tyhle dvě věci spolu nesouvisejí a mohou existovat současně: můžete být zdrcená z toho, že dítě nebude, a zároveň si oddechnout, že nemusíte zítra ráno na odběr.

Vina za úlevu bývá jedním z nejtěžších míst celého konce, protože se o ní skoro nemluví. Přitom ji zná většina žen, které léčbu ukončily.

## Prázdno

Léčba zabírá obrovský prostor: čas, peníze, pozornost, plány, hovory doma. Když skončí, ten prostor nezmizí. Zůstane prázdný.

Prvních pár týdnů se často vyplní úklidem, prací nebo něčím, co se dlouho odkládalo. Pak zůstane ticho a to bývá horší než ta zátěž předtím.

Prázdno nemusí být hned něčím naplněné. O tom je samostatný text o životě, který pokračuje.

## Ztráta rytmu

Tohle se často podcení. Léčba dává týdnu strukturu: co bude ve středu, kdy se volá o výsledek, kdy začíná další fáze. I když je ten rytmus vyčerpávající, je to rytmus a člověk podle něj žije.

Po jeho konci zmizí i orientace v čase. Měsíce ztratí tvar, protože se nedělí na cykly. Řada žen popisuje, že jim najednou splývají týdny.

Co s tím pomáhá, je nahradit ho něčím jiným a přiznaně nudným: pevná hodina vstávání, jeden opakující se bod v týdnu, plán na nejbližší čtvrtletí místo na příští roky.

## Otázka, kdo teď jsem

Když se dva nebo pět let odpovídalo na otázku „co je teď u vás nového“ větou o léčbě, chybí po jejím konci nejen odpověď, ale i kus identity. Pacientka je taky role a role zaniká.

Tahle otázka se nedá vyřešit rozhodnutím. Obvykle se rozpouští pomalu a v běžných věcech, ne v úvahách o smyslu.

## Co se může dít s tělem

Po vysazení léků obvykle nějakou dobu trvá, než se cyklus a hmotnost usadí. Únava, výkyvy nálad a nepravidelnost bývají v prvních týdnech běžné, ale konkrétní průběh záleží na individuální situaci a na tom, co jste brala.

Když něco trvá déle, než čekáte, nebo vás znepokojuje, proberte to se svou klinikou nebo se svým gynekologem. To, že jste ukončila léčbu, neznamená, že se nemáte na co ptát.

## Kdy si říct o pomoc

Není potřeba čekat, až bude hůř. Odbornou pomoc má smysl vyhledat zejména tehdy, když:

- Se několik týdnů nedaří spát nebo jíst.
- Nezvládáte běžné povinnosti a stav se nelepší.
- Nemáte zájem o nic, ani o věci, které vás dřív držely.
- Se objevují myšlenky na sebepoškození nebo na to, že by nebylo lepší tu být.

Poslední bod je důvod ozvat se hned, ne později. Můžete zavolat svému praktickému lékaři, gynekologovi, nebo se obrátit na krizovou linku.

> Nic z toho, co je v tomhle textu, není známka toho, že jste rozhodla špatně. Je to popis toho, co konec dlouhé a náročné etapy s člověkem obvykle dělá.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-okoli-ktere-nechape',
    kind: 'article',
    title: 'Když to okolí nechápe',
    excerpt:
      'Konkrétní věty, kterými se dá ukončit rozhovor bez hádky, a návod, jak to říct rodině.',
    minutes: 7,
    phases: [
      'repeated_failure',
      'waiting_next_attempt',
      'loss_miscarriage',
      'loss_ectopic',
    ],
    topics: ['psychika', 'vztah', 'sebepece'],
    level: 'essential',
    hero: 'blush',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    body: `## Věty, které uslyšíte

„Zkuste to ještě jednou.“ „Adoptujte si.“ „Aspoň máte sebe.“ „Znám někoho, komu to vyšlo napodesáté.“ „Teď, když přestanete, to přijde samo.“ „Na to je ještě čas.“ „A co když toho budete litovat?“

Skoro nikdo z těch lidí to nemyslí zle. To ale nemění nic na tom, že tyhle věty bolí, protože všechny mají stejné jádro: vaše rozhodnutí se neuznává jako platné.

## Proč to lidé říkají

Ne kvůli vám. Kvůli sobě.

Váš konec léčby je pro okolí nepohodlný, protože na něj neexistuje připravená reakce. Když někdo zemře, ví se, co se říká. Když se někdo rozhodne ukončit léčbu, nemá většina lidí po ruce nic, a tak sáhnou po prvním, co jim přijde na jazyk. Obvykle je to návrh řešení, protože řešení se nabízí snáz než mlčení.

Rozumět tomu není totéž jako to snést. Nemusíte být vděčná za dobrý úmysl a nemusíte tyhle rozhovory vést.

## Věty, kterými se dá rozhovor ukončit bez hádky

Fungují proto, že nediskutují. Nesnaží se druhého přesvědčit, jen zavřou téma. Vyplatí se mít jednu nebo dvě nazpaměť, aby nebylo potřeba je vymýšlet ve chvíli, kdy vás to zaskočí.

- „Rozhodli jsme se a je to rozhodnuté. Nechci to otevírat znovu.“
- „Vím, že to myslíš dobře. Přesto o tom mluvit nebudu.“
- „Tohle jsme probrali se svým lékařem a víc k tomu říkat nebudu.“
- „Nepotřebuju rady, potřebuju, abys to vzal na vědomí.“
- „Můžeme mluvit o čemkoli jiném.“
- „Prosím, neptej se mě na to. Až budu chtít, řeknu ti to sama.“

Když někdo pokračuje i po tomhle, je v pořádku říct: „Nechám to být, jinak se pohádáme,“ a odejít nebo hovor ukončit. Zdvořilost není povinnost bez limitu.

## Jak to oznámit rodině

**Vyberte si formu, ne dobu.** Nemusí to být osobně, ani u oběda, ani na rodinné oslavě. Zpráva v telefonu je legitimní forma a má jednu výhodu: nikdo nemusí reagovat okamžitě.

**Řekněte to jednou a jednou větou.** Například: „Chceme vám dát vědět, že jsme léčbu ukončili. Bylo to naše rozhodnutí a je konečné. Prosíme, neptejte se na podrobnosti.“

**Řekněte rovnou, co potřebujete.** Lidé to obvykle nevědí a hádají špatně. „Nechceme o tom mluvit, ale nechceme se ani vyhýbat.“ „Klidně se ptejte, jak se máme. Neptejte se na léčbu.“

**Nevysvětlujte důvody, pokud nechcete.** Vysvětlování otevírá diskuzi. Čím kratší zpráva, tím méně prostoru pro rady.

**Počítejte s tím, že první reakce bude nešikovná.** U řady lidí přijde přijetí až s druhým hovorem. Někdy stojí za to dát jim tu druhou příležitost, ale nemusíte.

## Kdy se dá mlčet

Skoro vždycky.

Nikomu nedlužíte oznámení. Kolegům, sousedům, širší rodině ani skupině přátel. Léčba byla soukromá věc a její konec taky.

Pokud o léčbě někdo věděl a ptá se, stačí: „Už to neřešíme.“ Tahle věta neříká, co se stalo, a přesto uzavírá téma. Když se někdo doptává, můžete zopakovat totéž stejnými slovy. Opakování je účinnější než nová formulace.

## Práce, sociální sítě a těhotné kamarádky

**V práci** platí stejné pravidlo. Když jste o léčbě mluvila, stačí věcné „léčbu jsme ukončili, děkuju za pochopení, dál to řešit nebudu“. Nadřízený nepotřebuje důvod.

**Na sítích** je v pořádku ztlumit účty, které vás zraňují. Ztlumení není hádka ani konec přátelství a druhá strana se to nedozví. Není potřeba to nikomu vysvětlovat.

**Těhotenství a křtiny** se dají odmítnout bez důvodu. „Bohužel to nestihnu, moc vám to přeju“ je úplná odpověď. Kdo od vás v téhle době vyžaduje účast, řeší svoje, ne vaše.

## Jeden člověk, který to unese

Prakticky nejužitečnější věc, kterou pro sebe můžete udělat, je určit jednoho člověka, kterému se dá napsat ve špatný den bez úvodu a bez vysvětlování.

Nemusí to být nejbližší člen rodiny. Často to bývá někdo, kdo prošel něčím podobným, nebo terapeut. Zeptejte se ho na to přímo: „Můžu ti napsat, když bude blbý den? Nepotřebuju rady, jen abys věděl.“

Když takový člověk kolem vás není, existují skupiny žen po ukončené léčbě a psychologové zaměření na neplodnost. Ptát se na kontakt můžete i na své klinice.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-zivot-ktery-pokracuje',
    kind: 'article',
    title: 'Život, který pokračuje',
    excerpt:
      'Bez slibů a bez růžového rámu: o tom, že se nový smysl nemusí hledat hned.',
    minutes: 6,
    phases: [
      'repeated_failure',
      'waiting_next_attempt',
      'loss_miscarriage',
      'loss_ectopic',
    ],
    topics: ['psychika', 'sebepece', 'vztah'],
    level: 'comfort',
    hero: 'pearl',
    author: 'Gabi',
    reviewedBy: REVIEW_PSY,
    publishedOn: '2026-08-07',
    body: `## Co tenhle text neudělá

Neřekne vám, že to bude dobré. Neřekne, že se to zahojí, ani kdy. Neřekne, že život bez dítěte je stejně naplněný jako s ním, protože o tom nemůže rozhodnout text. To může posoudit jedině vy, a nejspíš ne dnes.

Co se říct dá: dny půjdou dál a je potřeba je nějak žít. O tom je tenhle text. O tom nejbližším, ne o smyslu.

## Nový smysl se nemusí hledat hned

Krátce po konci léčby přichází z okolí i zevnitř tlak najít náhradu. Kariéra, cestování, projekt, dobrovolnictví, zvíře. Něco, čím se to zaplní, aby bylo vidět, že to k něčemu vedlo.

Ten tlak nemusíte poslouchat. Hledat velký nový smysl několik měsíců po konci obvykle nefunguje, protože to není hledání, ale útěk před prázdnem. A prázdno se přesunout nedá.

Nemusíte vědět, co bude dál. Nemusíte to vědět ani za rok.

## Prázdno má mít kde být

Zní to nepraktičtě, ale je to nejpraktičtější věc v celém textu: nechte v týdnu místo, kde se nic neděje.

Když se každá volná hodina obsadí, prázdno si nenajde jinou cestu než noc, nemoc nebo náhlý pláč v obchodě. Když má vlastní místo, je snesitelnější.

Konkrétně to může vypadat takhle: jedno odpoledne v týdnu, kdy nic neplánujete. Půl hodiny chůze bez telefonu. Sešit, do kterého se dá napsat cokoli a nikdo to nečte. Nemusí se u toho nic vyřešit.

## Co se dá zkusit v malém

Velké plány teď obvykle nesedí. Malé ano.

- **Vraťte do týdne jednu věc, která zmizela kvůli léčbě.** Cokoli. Bazén, kino, oběd s někým, večerní kurz. Ne kvůli tomu, aby to pomohlo. Kvůli tomu, že vám patřila.
- **Plánujte na tři měsíce, ne na deset let.** Delší horizont je teď moc velký a rozhodnutí v něm nejsou spolehlivá.
- **Připravte se na data, která budou bolet.** Termín, který měl být. Výročí prvního cyklu. Vánoce. Když se ví dopředu, dá se ten den naplánovat jinak, než že se přečká.
- **Rozhodněte, co se záznamy.** Aplikace, kalendáře, fotky embryí, výsledky. Nemusíte je mazat ani si je nechávat na očích. Přesunout do jedné složky a zavřít ji je taky rozhodnutí. Praktická část je v checklistu k uzavření cesty.
- **Dovolte si špatný den bez závěru.** Špatný den neznamená, že jste se rozhodla špatně. Znamená to špatný den.

## Terapie zaměřená na neplodnost existuje

Tohle je jediná věc, kterou tenhle text doporučuje přímo.

Existují psychologové a terapeuti, kteří se zaměřují na neplodnost a na ztrátu. Nejsou to lidé, kteří budou hledat, co jste udělala špatně, ani vás k něčemu přesvědčovat. Jsou to lidé, kteří tenhle typ zármutku znají a nebudou překvapení ničím, co řeknete.

Má smysl o ni požádat i po skončení léčby. Vlastně hlavně po skončení léčby. Během cyklů je pozornost obsazená provozem, teprve po nich přijde to, na co nebyl prostor.

Kontakt se dá získat několika cestami: zeptat se na klinice, u praktického lékaře nebo u gynekologa, hledat v registrech psychoterapeutů podle zaměření, případně v organizacích, které se věnují podpoře při neplodnosti a ztrátě. Některá pracoviště nabízejí konzultaci i pro pár.

Když první terapeut nesedne, není to konec. Je běžné vystřídat dva nebo tři, než se najde ten, se kterým se dá pracovat.

## Nakonec

Nikdo vám nemůže slíbit, kdy to bude lehčí, ani že se dostaví smíření. Slibovat to by znamenalo mluvit za vás.

Co se říct dá, je tohle: nemusíte to zvládat rychle, nemusíte to zvládat sama a nemusíte z toho dnes dělat příběh, který dává smysl.

> Dnešní úkol může být jen tenhle: dojíst oběd, dojít se projít a nechat zítřek na zítra.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-uzavreni-prakticka-cast',
    kind: 'checklist',
    title: 'Uzavírám svou IVF cestu: praktická část',
    excerpt:
      'Věci, které je dobré dořešit teď, aby se k nim nemuselo vracet ve špatný den.',
    minutes: 6,
    phases: ['repeated_failure', 'waiting_next_attempt'],
    topics: ['sebepece', 'psychika', 'vztah'],
    level: 'essential',
    hero: 'sand',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.55,
    body: `## K čemu tenhle seznam je

Konec léčby má vedle emoční části i administrativní. Ta se dá odbýt za pár hodin a pak už na ni není potřeba myslet. Když se neodbude, vrací se v podobě upomínky nebo nečekaného telefonátu, obvykle v den, kdy se to hodí nejmíň.

Není potřeba to udělat najednou ani v nějakém pořadí. Některé položky se vás vůbec nemusí týkat, jsou označené jako nepovinné.

## Než začnete

Založte si jednu složku, papírovou nebo v telefonu, a dávejte do ní všechno k léčbě: zprávy, faktury, výsledky, korespondenci s klinikou. Nemusíte to teď číst. Jde jen o to, aby to bylo na jednom místě a dalo se to zavřít.

## Na embrya není potřeba spěchat

Rozhodnutí o zamražených embryích je v tomhle seznamu první, ale bývá nejtěžší a nemusí se dělat teď. Co se udělat vyplatí hned, je zjistit, do kdy je zaplacené skladné a kam chodí upomínky. Samotné rozhodnutí může počkat. Věnuje se mu samostatný text.`,
    checklist: [
      {
        id: 'kon-chk-embrya',
        text: 'Zjistit, kolik embryí je uložených, a rozhodnout, co s nimi bude',
        hint: 'Rozhodnutí může počkat. Vědět, o kolika embryích se rozhoduje, je první krok.',
        group: 'Embrya a vzorky',
        optional: true,
      },
      {
        id: 'kon-chk-skladne',
        text: 'Zjistit, do kdy je zaplacené skladné a co se stane po tomto datu',
        hint: 'Zeptejte se přímo: do kdy je uhrazeno, kdy chodí upomínka a na jaký kontakt.',
        group: 'Embrya a vzorky',
        optional: true,
      },
      {
        id: 'kon-chk-kontakty-klinika',
        text: 'Ověřit, že klinika má aktuální adresu, telefon a e-mail',
        hint: 'Nejhorší varianta je upomínka, která k vám nedojde. Tohle je pětiminutová věc.',
        group: 'Embrya a vzorky',
      },
      {
        id: 'kon-chk-vzorek-partnera',
        text: 'Vyřešit i případný zamražený vzorek partnera',
        hint: 'Má vlastní evidenci i vlastní poplatek. Snadno se na něj zapomene.',
        group: 'Embrya a vzorky',
        optional: true,
      },
      {
        id: 'kon-chk-dokumentace',
        text: 'Vyžádat si kompletní zdravotnickou dokumentaci',
        hint: 'Napište žádost písemně. Zeptejte se, v jaké lhůtě ji vydávají a jestli je zpoplatněná.',
        group: 'Dokumentace',
      },
      {
        id: 'kon-chk-vysledky',
        text: 'Uložit si výsledky vyšetření a zprávy z cyklů na jedno místo',
        hint: 'Hodí se u jakéhokoli dalšího lékaře, i kdyby se to už nikdy netýkalo léčby.',
        group: 'Dokumentace',
      },
      {
        id: 'kon-chk-zaver-s-lekarem',
        text: 'Domluvit si závěrečnou konzultaci a probrat, co se v cyklech ukázalo',
        hint: 'Otázky si napište předem. Nejčastější zní: co se opakovalo a co z toho platí i mimo léčbu.',
        group: 'Dokumentace',
      },
      {
        id: 'kon-chk-nedoplatky',
        text: 'Vyrovnat nedoplatky a vyžádat si všechny faktury',
        hint: 'Projděte i zálohy, které se nevyčerpaly. Vratka se sama od sebe neozve.',
        group: 'Peníze',
      },
      {
        id: 'kon-chk-trvale-platby',
        text: 'Zrušit trvalé příkazy, předplatné a opakované platby spojené s léčbou',
        hint: 'Doplňky, aplikace, členství. Drobné částky, ale připomínají se každý měsíc.',
        group: 'Peníze',
        optional: true,
      },
      {
        id: 'kon-chk-komu-rict',
        text: 'Rozmyslet si, komu to řeknete a jakou jednou větou',
        hint: 'Jedna věta pro všechny je snazší než pokaždé nová. Nemusíte ji říct hned.',
        group: 'Lidé',
      },
      {
        id: 'kon-chk-jeden-clovek',
        text: 'Určit jednoho člověka, kterému můžete napsat ve špatný den',
        hint: 'Zeptejte se ho předem. Věta může znít: „Potřebuju, abys věděl, ne abys radil.“',
        group: 'Lidé',
      },
      {
        id: 'kon-chk-terapie',
        text: 'Zjistit si kontakt na terapii zaměřenou na neplodnost',
        hint: 'Stačí kontakt uložit. Použít se dá kdykoli později, klidně za rok.',
        group: 'Lidé',
        optional: true,
      },
      {
        id: 'kon-chk-aplikace',
        text: 'Rozhodnout, co s aplikacemi a připomínkami',
        hint: 'Vypnout upozornění je jiná volba než smazat účet. Zkuste nejdřív tu první.',
        group: 'Záznamy',
      },
      {
        id: 'kon-chk-zaznamy',
        text: 'Rozhodnout, co s vlastními záznamy a fotkami',
        hint: 'Nemusíte mazat ani nechávat na očích. Přesunout do jedné složky a zavřít ji stačí.',
        group: 'Záznamy',
      },
    ],
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-embrya-kdyz-je-nechci-pouzit',
    kind: 'article',
    title: 'Co s embryi, když je už nechci použít',
    excerpt:
      'Jedno z nejtěžších rozhodnutí celé cesty a právo mít na něj čas.',
    minutes: 7,
    phases: ['repeated_failure', 'waiting_next_attempt'],
    topics: ['psychika', 'sebepece', 'embryologie'],
    level: 'deep',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: REVIEW_REPRO,
    sources: SRC_EMBRYA,
    publishedOn: '2026-08-07',
    body: `## Proč je tohle jiné než ostatní rozhodnutí

Většina rozhodnutí v léčbě se dá popsat čísly. Tohle ne.

Zamražená embrya nejsou položka v evidenci a nejsou ani dítě. Nemají žádnou obvyklou kategorii, do které by se daly zařadit, a proto na ně nesedí ani způsob, jakým se rozhodujeme o čemkoli jiném. Řada žen popisuje, že to bylo nejtěžší rozhodnutí celé cesty. Těžší než ukončení léčby samotné.

Není tedy divu, že se odkládá. Odkládání je tady legitimní. Není to selhání ani vyhýbání se, je to přiměřená reakce na rozhodnutí, které přiměřený nástroj nemá.

## Co obvykle přichází v úvahu

Existuje několik směrů, kterými se tahle situace řeší. Zmiňujeme je proto, abyste věděla, že existují, ne jako nabídku k výběru:

- pokračovat v uchování a rozhodnout se později,
- darování jinému páru,
- darování pro výzkum,
- ukončení uchování.

Tenhle výčet neříká nic o tom, co je správně, a nedá se z něj nic vyčíst o pořadí. **Co je u vás vůbec možné, za jakých podmínek, s jakými lhůtami, jakými souhlasy a jakým postupem, určuje platná legislativa a řád vašeho pracoviště.** Podmínky se mezi klinikami i v čase liší, proto tenhle text žádné konkrétní neuvádí.

Jediné místo, kde se dozvíte, co platí pro vás, je vaše klinika.

## Na co se dá zeptat

Vyplatí se jít na tu konzultaci s napsanými otázkami. Zvlášť proto, že u tohohle tématu se špatně improvizuje.

- Jaké možnosti u vás v naší situaci vůbec připadají v úvahu?
- Jaké podmínky se u každé z nich musí splnit a co je k tomu potřeba podepsat?
- Do kdy se musíme rozhodnout a co se stane, když se nerozhodneme?
- Jak dlouho může uchování celkem trvat a co se řídí čím?
- Musí být souhlas obou z nás? Co když se neshodneme?
- Dá se rozhodnutí ještě změnit poté, co ho podepíšeme?
- Kdo nám to celé vysvětlí a s kým to můžeme probrat bez spěchu?

Poslední otázka je důležitější, než vypadá. Máte právo požádat o samostatnou konzultaci jen k tomuhle, ne o pět minut na konci jiné návštěvy.

## Na tohle rozhodnutí máte právo mít čas

Nemusíte se rozhodnout ve stejném měsíci, ve kterém končíte léčbu. Nemusíte se rozhodnout ani ten rok, pokud vám podmínky uchování dovolí počkat.

Praktická věc, která to umožní, je jediná: mít pod kontrolou platby a kontakty. Když víte, do kdy je uhrazeno a že vám upomínka dojde, můžete odložit rozhodnutí, aniž byste ho tím udělala nedopatřením. Tohle je ta jediná část, se kterou se spěchat vyplatí.

## Když se s partnerem neshodnete

Stává se to a bývá to náročné, protože oba mluvíte o téže věci a přitom o něčem jiném. Legislativa i klinika mají pro tuhle situaci vlastní pravidla, na která je potřeba se zeptat.

Vedle formální stránky ale existuje ta druhá: rozhovor. Ten se nedá odbýt souhlasem podepsaným kvůli klidu, protože tenhle konkrétní se vrací. Když se rozhovor sám nedaří vést, je namístě požádat o pomoc psychologa, ideálně někoho se zkušeností s reprodukční medicínou.

## Co může pomoci

- **Nedělejte to jedním rozhovorem.** Ani sama se sebou. Nechte to mezi dvěma rozhovory odležet.
- **Oddělte informace od rozhodnutí.** První návštěva ať je jen o tom, co je možné. O tom, co chcete, se rozhoduje jindy.
- **Napište si to.** Věty, které vám k tomu chodí hlavou, mají mimo hlavu jiný tvar a dá se s nimi pracovat.
- **Počítejte s tím, že žádná varianta nebude připadat správná.** Tohle není rozhodnutí, které přinese úlevu. Je to rozhodnutí, které se udělá, protože se udělat musí.
- **Zeptejte se, jestli u vás existuje způsob rozloučení.** Některým lidem pomůže vlastní rituál, jiným je to cizí. Obojí je v pořádku.

> Nikdo vám tohle rozhodnutí nemůže udělat a nikdo by vám ho neměl uspěchat. Právo na čas je tady to podstatné.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-kdyz-se-rozhodnu-vratit',
    kind: 'article',
    title: 'Když se rozhodnu vrátit',
    excerpt:
      'Rozhodnutí přestat se dá změnit. Co se mohlo za tu dobu změnit a s čím počítat.',
    minutes: 6,
    phases: ['waiting_next_attempt', 'repeated_failure'],
    topics: ['psychika', 'sebepece', 'vztah'],
    level: 'deep',
    hero: 'champagne',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    body: `## Návrat není couvnutí

Rozhodnutí ukončit léčbu není podpis, který nejde odvolat. Ženy se vracejí po půl roce i po pěti letech, některé jednou, jiné opakovaně.

Návrat neznamená, že předchozí rozhodnutí bylo špatné. Znamená, že se změnily okolnosti, síly nebo to, co chcete. Rozhodnutí platilo, dokud platilo.

## Co se za tu dobu mohlo změnit medicínsky

Nic z následujícího neplatí automaticky a nic se nedá odhadnout bez konkrétních výsledků. Jsou to jen okruhy, na které se má smysl zeptat.

- **Vaše výchozí hodnoty.** Ovariální rezerva, hormonální nálezy i stav dělohy se v čase mění. Část vyšetření má omezenou platnost a bude se opakovat.
- **Věk.** Je to faktor, se kterým se nedá vyjednávat, a s odstupem se změnil. Chtějte slyšet, co konkrétně to znamená pro vás, ne obecný údaj.
- **Váš zdravotní stav mimo léčbu.** Štítná žláza, hmotnost, nové diagnózy, nové léky. Všechno tohle vstupuje do plánování.
- **Postupy na klinice.** Protokoly, laboratorní metody i doporučení se vyvíjejí. To, co u vás nebylo možné před třemi lety, dnes možné být může. A naopak: něco, co se dřív dělalo, se dnes dělat nemusí.
- **Vaše dokumentace.** Pokud máte popsané předchozí cykly, je to podklad, který se nedá nahradit. Proto se vyplatí ji mít uloženou, i když se návrat neplánuje.

Co z toho hraje ve vaší situaci roli, řekne jedině lékař, který vidí vaše výsledky. Záleží na individuální situaci a obecné údaje z internetu tu nepomůžou.

## S čím počítat prakticky

- **Návrat začíná konzultací, ne cyklem.** Počítejte s tím, že první návštěva bude o tom, co se zopakuje a co se doplní.
- **Opakovaná vyšetření stojí čas a peníze.** Někdy jde o několik týdnů, než se všechno posbírá.
- **Podmínky úhrad a případné limity si ověřte znovu.** Mohly se změnit a mohla se změnit i vaše situace vůči nim. Ptejte se na klinice a u své pojišťovny, ne v diskuzích.
- **Klinika i lékař nemusí být stejní.** Můžete zůstat, můžete jít jinam. Když jdete jinam, vezměte s sebou dokumentaci.
- **Návrat rytmu bude náraz.** Kalendář, čekání, telefonáty. Tělo si to pamatuje a první týden bývá silnější, než člověk čeká.

## Otázky na první konzultaci

1. Co se z předchozích cyklů dá použít a co se musí opakovat?
2. Změnili byste v postupu oproti minule něco, a co konkrétně?
3. Jak se moje situace liší od chvíle, kdy jsme skončili?
4. Kolik času zabere příprava, než se dá začít?
5. Co bych měla vědět, než se rozhodnu definitivně?

## Jedna otázka navíc, pro sebe

Než se vrátíte, stojí za to si položit otázku, kterou nikdo jiný nepoloží: **vracím se proto, že to chci, nebo proto, že to okolí od nás čeká?**

Věty jako „vždyť ještě máte čas“ nebo „vy to přece nemůžete nechat být“ mají tendenci se usadit a působit i po měsících. Návrat udělaný kvůli nim bývá obtížnější než cokoli jiného, protože v něm chybí to jediné, co dalším cyklem projde: vaše vlastní rozhodnutí.

Odpověď „vracím se, i když si nejsem jistá“ je přitom platná. To, co se do návratu nehodí, není nejistota, ale cizí zadání.

## Než zavoláte

Sepište si, co víte o svém posledním cyklu, kdy skončil a co vám tehdy klinika řekla. Přiložte poslední výsledky, které máte. Zavolejte a řekněte prostě: „Ukončili jsme léčbu v roce dva tisíce dvacet čtyři a chtěli bychom se domluvit na konzultaci, jestli má smysl se vrátit.“

Nemusíte na tom telefonátu nic vysvětlovat ani nic slibovat. Konzultace k ničemu nezavazuje.`,
  },

  // ------------------------------------------------------------------
  {
    id: 'kon-pro-partnera-po-konci',
    kind: 'article',
    title: 'Pro partnera: když skončila léčba',
    excerpt:
      'Text pro partnera. Co se právě stalo, co pomáhá a co ne.',
    minutes: 6,
    phases: [
      'repeated_failure',
      'waiting_next_attempt',
      'loss_miscarriage',
      'loss_biochemical',
    ],
    topics: ['vztah', 'psychika', 'partner'],
    level: 'essential',
    hero: 'sand',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    body: `## Co se právě stalo

Léčba skončila. Bez ohledu na to, jestli to bylo vaše společné rozhodnutí, její rozhodnutí, nebo doporučení lékaře, skončila etapa, která u vás doma zabírala roky.

Bylo to legitimní rozhodnutí, ať už ho udělal kdokoli z vás a z jakéhokoli důvodu. Cesta skončila, protože pro to byly důvody, které jste oba znali.

Tenhle text je krátký a praktický. Není o tom, jak se máte cítit. Je o tom, co v následujících týdnech pomáhá a co ne.

## Co pravděpodobně prožívá ona

Nedá se předpovědět pořadí ani intenzita, ale běžně se objevuje tohle:

- **Zármutek, který nemá hrob.** Truchlí se za dítě, které nebylo. Okolí to obvykle jako zármutek nepozná a čeká, že to za pár týdnů přejde. Nemusí.
- **Vztek.** Na tělo, na kliniku, na náhodné lidi. Někdy i na vás, aniž by za tím bylo něco konkrétního.
- **Úleva a vina za ni.** Konec injekcí, odběrů a čekání přinese úlevu. Hned za ní přijde pocit, že to znamená, že to nechtěla dost. Neznamená.
- **Prázdno a ztráta rytmu.** Léčba jí dávala týdnu tvar. Bez ní se dny slévají.
- **Otázka, kdo teď je.** Role pacientky skončila a nic ji zatím nenahradilo.

Nic z toho nepotřebuje opravit. Potřebuje to někoho, kdo to unese vedle ní.

## Co pravděpodobně prožíváte vy

Taky jste v tom byl a taky jste o něco přišel. Vaše ztráta bývá přehlížená, protože se všichni ptají na ni. Zeptá se vás málokdo.

Časté je zvláštní spojení bezmoci a povinnosti být ten silný. Bezmoc přitom trvala celou léčbu: nemohl jste to vzít za ni, nemohl jste to urychlit, nemohl jste to zařídit.

Vaše smutek nemusí čekat, až se vyřeší její. Dva smutky vedle sebe se vejdou.

## Co pomáhá

- **Být tam a neopravovat.** Nejúčinnější věta je „jsem tady“, ne návrh, co s tím.
- **Řekněte to nahlas.** „Mrzí mě to. Chyběl mi ten život taky.“ Ticho se často čte jako lhostejnost, i když je to bezradnost.
- **Převezměte administrativu.** Faktury, dokumentace, telefonáty na kliniku. Tohle je konkrétní pomoc, kterou lze udělat hned, a znamená hodně.
- **Kryjte ji před okolím.** Když se rodina ptá, odpovězte za oba jednou větou. Nemusí to pokaždé vysvětlovat ona.
- **Počítejte s daty.** Termín, který měl být. Výročí prvního cyklu. Poznamenejte si je a v ten den buďte v jiném režimu.
- **Ptejte se konkrétně.** Ne „jak se cítíš“, ale „chceš být sama, nebo mám zůstat“. Na první otázku se špatně odpovídá, na druhou snadno.
- **Vraťte do týdne něco vašeho.** Něco, co nesouviselo s léčbou. Nejde o zapomínání, jde o to, aby zbylo něco jiného.

## Co nepomáhá

- **Nabízet další pokus jako útěchu.** I když to myslíte dobře, zní to jako zpochybnění rozhodnutí, které jste udělali.
- **Nabízet adopci nebo jiné cesty jako řešení.** Existují a dá se o nich zjistit víc, ale nejsou náhradou a teď nejsou tématem.
- **Hledat viníka.** Ani v sobě, ani v ní, ani v klinice. Nikam to nevede.
- **Vyžadovat, aby to už bylo v pořádku.** Otázka „jak dlouho ještě“ udělá víc škody než celý předchozí měsíc.
- **Mlčet, protože nevíte, co říct.** Nemusíte vědět. Věta „nevím, co říct, ale jsem tady“ je úplná odpověď.

## Když se neshodnete

Může se stát, že vy byste ještě pokračoval a ona ne, nebo obráceně. Tenhle rozhovor je jeden z nejtěžších, jaké spolu povedete, a nedá se odbýt.

Základní pravidla: ne v den výsledku, ne večer, ne s cílem přesvědčit. Nejdřív si vyslechnout, co ta druhá varianta znamená pro toho druhého. Když to sami nedokážete, existuje párová terapie a psychologové se zaměřením na neplodnost. Kontakt vám obvykle dá i klinika.

## Kdy vyhledat pomoc

U ní i u vás platí totéž: když několik týdnů nejde spát nebo jíst, když se nedaří zvládat běžný provoz, když zmizel zájem o všechno. A okamžitě, pokud se objeví myšlenky na sebepoškození.

Požádat o pomoc není známka slabosti a není to nic, co by se dělo až v krajní nouzi. Terapie zaměřená na neplodnost dává smysl právě po skončení léčby, kdy se vrátí to, na co během cyklů nebyl čas.`,
  },
]

export const pack: ContentPack = { items }
