import type { ContentItem, ContentPack, GlossaryTerm } from '../types'

/**
 * Genetika.
 *
 * Dvě různé věci, které se v hovoru pořád pletou: vyšetření rodičů (karyotyp,
 * nosičství, přestavby) a testování embryí (PGT). Balík je drží oddělené,
 * protože odpovídají na jiné otázky a rozhoduje se o nich jinak.
 *
 * Pravidlo celé sekce: nic z toho není vyšetření pro každý pár. Kde jsou data
 * slabá nebo rozporná, říkáme to nahlas — hlavně u PGT-A.
 */

const REVIEWED = 'Odborně garantováno lékařem reprodukční medicíny.'
const PUBLISHED = '2026-08-02'

const items: ContentItem[] = [
  // ---------------------------------------------------------------------------
  // (A) Genetické vyšetření rodičů
  // ---------------------------------------------------------------------------
  {
    id: 'gen-konzultace',
    kind: 'article',
    title: 'Genetická konzultace: co se na ní opravdu děje',
    excerpt:
      'Hodina rozhovoru, ze které si odnesete písemnou zprávu a konečně jasno v tom, co se u vás testuje a proč.',
    minutes: 8,
    phases: ['genetic_testing'],
    topics: ['genetika', 'klinika'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'Společnost lékařské genetiky a genomiky ČLS JEP',
      'ESHRE — doporučené postupy',
    ],
    publishedOn: PUBLISHED,
    boost: 0.8,
    body: `## Co to je

Genetická konzultace je rozhovor s klinickým genetikem. Není to odběr krve ani zákrok — je to schůzka, na které se probírá vaše rodinná i osobní historie a teprve z ní vyplyne, jestli má nějaké vyšetření smysl, a pokud ano, které.

Pořadí je důležité. Genetik nejdřív mluví, pak případně testuje. Vyšetření objednané bez konzultace často odpoví na otázku, kterou nikdo nepoložil.

## Kdo vás tam pošle

Doporučení obvykle přichází od lékaře reprodukční medicíny nebo od gynekologa. Situace, ve kterých se konzultace často zvažuje:

- opakované ztráty těhotenství,
- opakovaně neúspěšné transfery embryí,
- dědičné onemocnění u vás, u partnera nebo v širší rodině,
- nález chromozomové odchylky u některého z partnerů,
- odchylka zjištěná u předchozího těhotenství nebo u plodu,
- výrazný nález ve spermiogramu,
- zvažované PGT nebo použití darovaných gamet.

Konzultace není povinná zastávka na cestě IVF a neabsolvuje ji každý pár. Kdo ji potřebuje, určuje ošetřující lékař podle konkrétní situace.

## Co si připravit předem

Tohle je nejužitečnějších třicet minut, které do konzultace investujete.

1. **Rodokmen do třetího kolena.** Sourozenci, rodiče, prarodiče, tety a strýcové, bratranci a sestřenice — u koho se objevilo vážnější onemocnění, vrozená vada, mentální postižení, opakované potraty, úmrtí v dětství.
2. **Vlastní zdravotní historie obou partnerů.** Operace, chronické nemoci, léky.
3. **Reprodukční historie.** Kolik cyklů, kolik transferů, kolik těhotenství, jak skončila, v jakém týdnu.
4. **Papíry.** Zprávy z kliniky, laboratorní výsledky, nálezy z předchozích těhotenství, výsledky vyšetření tkáně po ztrátě, pokud existují.
5. **Vaše otázky napsané na papíře.** Ve stresu si z konzultace zapamatujete zlomek toho, co zaznělo.

Na konzultaci má smysl jít ve dvou. Genetika se týká obou partnerů, nikdy jen ženy.

## Jak schůzka obvykle probíhá

Genetik se ptá, kreslí rodokmen, ptá se znovu. Pak vysvětlí, co z toho plyne — jaké riziko je ve vaší situaci reálné a jaké testy by ho mohly upřesnit. Zazní i to, co testy nedokážou.

Ve stejném rozhovoru se probírá i to, co byste s výsledkem dělali. Tahle otázka zní předčasně, ale předčasná není: vyšetření, jehož výsledek by na vašem rozhodování nic nezměnil, má jinou váhu než vyšetření, které mění plán léčby.

## Co si odnesete

Písemnou zprávu. Vyžádejte si ji a schovejte ji — bude se na ni odkazovat vaše klinika, případně i lékaři v budoucím těhotenství. Zpráva obvykle obsahuje shrnutí anamnézy, doporučená vyšetření, jejich zdůvodnění a plán, co dál podle výsledku.

## Co konzultace neumí

- **Nezaručí odpověď.** U části párů se ani po kompletním vyšetření nenajde vysvětlení. To neznamená, že žádné neexistuje — znamená to, že ho dnešní metody nevidí.
- **Nerozhodne za vás.** Genetik popíše rizika a možnosti. Volba mezi nimi zůstává vám.
- **Nepředpoví konkrétní těhotenství.** Pracuje s pravděpodobnostmi, ne s jistotami.

## Otázky, které stojí za to položit

- Co konkrétně u nás hledáme a proč právě to?
- Jak dlouho se čeká na výsledek?
- Co se změní, když vyjde pozitivně? A co, když negativně?
- Kolik to stojí a hradí to pojišťovna?
- Má se vyšetřit i někdo další z rodiny?

> Text je vzdělávací a nenahrazuje genetické poradenství ani péči lékaře. O tom, jaká vyšetření jsou ve vaší situaci na místě, rozhoduje váš lékař společně s klinickým genetikem.`,
  },
  {
    id: 'gen-karyotyp',
    kind: 'article',
    title: 'Karyotyp: co ukáže vyšetření chromozomů',
    excerpt:
      'Obyčejný odběr krve, na jehož výsledek se čeká týdny — a který u malé části párů vysvětlí to, co nevysvětlilo nic jiného.',
    minutes: 7,
    phases: ['genetic_testing'],
    topics: ['genetika', 'vysledky'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: ['Společnost lékařské genetiky a genomiky ČLS JEP'],
    publishedOn: PUBLISHED,
    boost: 0.6,
    body: `## Co se vyšetřuje

Karyotyp je soupis chromozomů — jejich počtu a hrubé stavby. Běžný nález u ženy se zapisuje jako 46,XX, u muže 46,XY. To znamená 46 chromozomů v očekávaném uspořádání.

Vyšetření se dívá na velké celky. Vidí chybějící nebo nadbytečný chromozom, vidí, když si dva chromozomy vyměnily kus materiálu, vidí obrácený úsek. Nevidí drobné změny uvnitř jednotlivých genů — na ty jsou jiné metody.

## Jak to probíhá

Odebere se krev, obvykle oběma partnerům. V laboratoři se bílé krvinky nechají několik dní růst, zastaví se v okamžiku dělení, obarví a chromozomy se prohlédnou pod mikroskopem.

Právě kvůli té kultivaci trvá výsledek dlouho — běžně tři až šest týdnů, někdy déle. Není to zdržování, je to biologie. Buňky se nedají uspěchat.

Příprava žádná není. Nemusíte být nalačno ani v konkrétní den cyklu.

## Co může nález ukázat

- **Vyváženou strukturální přestavbu**, nejčastěji translokaci. Nositel je zdravý a obvykle o tom celý život neví, ale při tvorbě vajíček nebo spermií mohou vznikat nevyvážené kombinace.
- **Inverzi** — obrácený úsek chromozomu. Význam se velmi liší podle toho, kterého chromozomu a jaké části se týká.
- **Odchylku počtu pohlavních chromozomů**, například u části mužů s výrazným nálezem ve spermiogramu.
- **Mozaiku** — část buněk s odchylkou, část bez ní.
- **Nález nejasného významu.** Stává se to a je to nepříjemné. Vysvětlení takového nálezu patří genetikovi, ne internetu.

U velké většiny párů vyjde karyotyp normální. To je dobrá zpráva, i když s sebou nese frustraci z toho, že jedna možná odpověď padla.

## Kdy může být zvažován

Karyotyp není součástí vyšetřovacího plánu každé ženy ani každého páru. Zvažuje se zejména při opakovaných ztrátách těhotenství, při opakovaně neúspěšné léčbě, při nálezu chromozomové odchylky u plodu nebo u dítěte, při výrazném mužském faktoru a při předčasném selhání funkce vaječníků. Vždy platí, že indikaci určuje lékař podle konkrétní situace.

Když se karyotyp dělá, dělá se u obou partnerů. Přestavbu může nést kterýkoli z nich a z jednoho výsledku se o tom druhém nedá usuzovat.

## Když nález přijde

Abnormální karyotyp je informace, ne rozsudek. Co znamená pro vaše šance a jaké možnosti otevírá, se liší nález od nálezu — proto po něm následuje genetická konzultace, kde se probírá konkrétně vaše situace.

Zjištění přestavby často vysvětlí roky, které dávaly málo smyslu. Řada žen popisuje směs úlevy a vzteku. Obojí je pochopitelné.

## Co karyotyp neřekne

- Neřekne, jestli otěhotníte.
- Nevyloučí dědičná onemocnění způsobená změnou v jednom genu.
- Neurčí, jak dopadne konkrétní embryo.

> Interpretace karyotypu patří klinickému genetikovi. Nález si nechte vysvětlit v kontextu vaší anamnézy — stejný zápis může mít u různých párů různý význam.`,
  },
  {
    id: 'gen-nosicstvi',
    kind: 'article',
    title: 'Vyšetření nosičství: co znamená carrier screening',
    excerpt:
      'Zdraví lidé běžně nosí mutace, o kterých nevědí. Vyšetření hledá ty, které by se mohly potkat u dítěte.',
    minutes: 9,
    phases: ['genetic_testing'],
    topics: ['genetika', 'vysledky'],
    level: 'deep',
    hero: 'sage',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'Společnost lékařské genetiky a genomiky ČLS JEP',
      'ESHRE — doporučené postupy',
    ],
    publishedOn: PUBLISHED,
    boost: 0.55,
    body: `## Základní myšlenka

Každý z nás nese několik mutací, které se nijak neprojevují. U velké skupiny onemocnění totiž platí, že jedna zdravá kopie genu stačí — nemoc se objeví, až když dítě zdědí změněnou kopii od obou rodičů. Tomu se říká autozomálně recesivní dědičnost.

Nosič je zdravý člověk. Není nemocný, nebude nemocný a nic se s ním nestane.

Problém nastává jen tehdy, když se sejdou dva nosiči téže nemoci. Pak je u každého jejich těhotenství pravděpodobnost, že dítě onemocní, zhruba jedna ku čtyřem. Ta pravděpodobnost se u dalšího těhotenství nemění — každé je nezávislé.

## Co vyšetření dělá

Z krve nebo ze stěru z úst se čte několik desítek až stovek genů podle rozsahu zvoleného panelu. Hledají se známé mutace spojené s konkrétními onemocněními — mezi nejčastěji zařazované patří cystická fibróza, spinální svalová atrofie nebo některé poruchy sluchu a metabolismu.

Panely se mezi laboratořemi liší rozsahem i tím, jak podrobně gen čtou. Menší panel není horší, je jiný. Zeptejte se, co konkrétně váš panel obsahuje.

## Jak se výsledky čtou

- **Oba negativní.** Riziko není nulové, ale je nízké. Panel nepokrývá všechny nemoci ani všechny mutace, a proto vždy zůstává takzvané reziduální riziko.
- **Jeden z partnerů nosič.** Nejčastější situace. Sám o sobě to pro dítě obvykle neznamená riziko onemocnění, pokud druhý partner nosičem téže nemoci není.
- **Oba nosiči téže nemoci.** Následuje genetická konzultace. Probírá se konkrétní onemocnění, jeho průběh a možnosti, které máte.

Vyšetřování obvykle probíhá ve dvou krocích: nejdřív jeden partner, a teprve při pozitivním nálezu cíleně druhý. Šetří to peníze i nervy.

## Co se řeší, když jsou nosiči oba

Možnosti se liší podle onemocnění a podle vašich hodnot. Genetik obvykle probírá:

- početí bez dalšího zásahu a prenatální diagnostiku v těhotenství,
- PGT-M, tedy testování embryí na konkrétní mutaci v rámci IVF,
- použití darovaných gamet,
- rozhodnutí nepokračovat v biologickém rodičovství.

Žádná z těch cest není samozřejmá a žádná není správnější než ostatní. Rozhodnutí patří páru.

## Co vyšetření neumí

- **Nepokryje všechna dědičná onemocnění.** Testuje se to, co je na panelu.
- **Nevyloučí nově vzniklé mutace**, které se u rodičů nevyskytují.
- **Netýká se chromozomových přestaveb** — na ty je karyotyp.
- **Nenahrazuje prenatální diagnostiku** v těhotenství.

## Pro koho je na místě

Vyšetření nosičství není součástí vyšetření každé ženy a každého páru. Častěji se zvažuje při dědičném onemocnění v rodině, při příbuzenském vztahu partnerů, při použití darovaných gamet a v situacích, kdy z něj plyne konkrétní rozhodnutí. Jestli má ve vaší situaci smysl, řekne váš lékař nebo klinický genetik.

## Emoční stránka, o které se moc nemluví

Zjištění, že jste nosička, umí zabolet víc, než by odpovídalo medicínskému významu nálezu. Přidává další vrstvu k něčemu, co už tak není lehké, a u části párů otevírá otázky o rodině a o vině, které tam vůbec nepatří.

Nosičství není zavinění. Je to statisticky běžný stav, který má většina lidí — jen o něm neví, protože se nikdy netestovali.

> Interpretace výsledků patří klinickému genetikovi. Rozsah panelu, spolehlivost metody i význam konkrétního nálezu proberte na konzultaci, ne podle popisu na internetu.`,
  },
  {
    id: 'gen-translokace',
    kind: 'article',
    title: 'Translokace a jiné přestavby: co znamenají pro pár',
    excerpt:
      'Nositel je zdravý a nic netuší. Problém se objeví až v okamžiku, kdy se tvoří vajíčka a spermie.',
    minutes: 9,
    phases: ['genetic_testing'],
    topics: ['genetika', 'ztrata'],
    level: 'deep',
    hero: 'taupe',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'Společnost lékařské genetiky a genomiky ČLS JEP',
      'ESHRE — doporučené postupy',
    ],
    publishedOn: PUBLISHED,
    boost: 0.6,
    body: `## Co se stalo

Chromozomy jsou balíky genetické informace. U strukturální přestavby je všechen materiál přítomen, ale je jinak uspořádaný — dva chromozomy si vyměnily části, nebo se úsek uvnitř chromozomu otočil.

Když nic nechybí ani nepřebývá, mluví se o **vyvážené přestavbě**. Nositel je zdravý. Většina lidí s vyváženou translokací se to dozví až v souvislosti s opakovanými ztrátami těhotenství nebo neúspěšnou léčbou — jinak by neměli důvod to zjistit.

## Proč to pak dělá potíže

Při tvorbě vajíček a spermií se chromozomy rozdělují do dvou polovin. U nositele přestavby může část buněk dostat materiálu příliš mnoho a část příliš málo. Vzniká **nevyvážená kombinace**.

Embryo s nevyváženým materiálem se často neuchytí, nebo těhotenství skončí ztrátou. Část kombinací může vést k narození dítěte s vrozenou vadou.

Podíl vyvážených a nevyvážených kombinací se liší podle typu přestavby, podle toho, které chromozomy jsou zapojené, a podle toho, který z partnerů je nositel. Proto se nedá nic odhadnout obecně — konkrétní čísla umí říct jen genetik po prohlédnutí vašeho nálezu.

## Dva typy, které uslyšíte nejčastěji

### Reciproční translokace

Dva různé chromozomy si vyměnily koncové části. Kombinace vznikají různé, včetně těch, které vedou k vyváženému embryu.

### Robertsonská translokace

Dva chromozomy se spojily v jeden. Nositel má 45 chromozomů a je zdravý. Rizika i praktické dopady se liší podle toho, které chromozomy se spojily.

## Co to znamená prakticky

Nejčastější zkušenost nositelů je řada ztrát bez vysvětlení, někdy s roky diagnostiky. Nález přestavby tuhle historii vysvětlí. Zároveň znamená, že cesta k dítěti může být delší a že bude potřeba víc pokusů.

Co se obvykle probírá na konzultaci:

- **Přirozené početí s prenatální diagnostikou.** Řada nositelů má vlastní zdravé děti. Cena je vyšší riziko ztráty a nejistota v každém těhotenství.
- **PGT-SR při IVF.** Vybírá k transferu embrya s vyváženým materiálem. Kolik takových embryí lze očekávat, se velmi liší podle typu přestavby.
- **Darované gamety.** Cesta, která přestavbu obchází.

Genetik u vaší konkrétní přestavby popíše, jaké kombinace mohou vzniknout a co to znamená pro plánování. Bez tohoto rozhovoru nemá smysl dělat rozhodnutí.

## O vině

Přestavba se obvykle dědí, nebo vznikne náhodně. Nedá se ovlivnit chováním, životosprávou ani ničím, co jste udělali nebo neudělali. Nositel za ni nemůže o nic víc než za barvu očí.

V párech se přesto často objeví okamžik, kdy si nositel připadá jako problém. Je užitečné to pojmenovat nahlas a nenechat to ležet. Neplodnost se týká páru, ne jednoho člověka v něm.

## Otázky pro konzultaci

1. O jaký typ přestavby přesně jde a které chromozomy jsou zapojené?
2. Jaké je v naší situaci riziko ztráty těhotenství a riziko narození dítěte s vadou?
3. Jaký podíl embryí bývá u tohoto typu přestavby vyvážený?
4. Má se vyšetřit ještě někdo z rodiny?
5. Jaké možnosti bychom měli zvažovat a v jakém pořadí?

> Konkrétní rizika u strukturálních přestaveb se počítají individuálně. Obecná čísla z článků nebo z diskusí na vaši situaci nepasují — vždy vycházejte z toho, co vám řekne klinický genetik.`,
  },
  {
    id: 'gen-kdy-zvazovat',
    kind: 'article',
    title: 'Kdy může být genetické vyšetření zvažováno',
    excerpt:
      'Není to standardní zastávka pro každý pár. Tady jsou situace, ve kterých se o něm mluví nejčastěji.',
    minutes: 7,
    phases: ['genetic_testing'],
    topics: ['genetika', 'klinika'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'Společnost lékařské genetiky a genomiky ČLS JEP',
      'ESHRE — doporučené postupy',
    ],
    publishedOn: PUBLISHED,
    boost: 0.65,
    body: `## Nejdřív to důležité

Genetické vyšetření není vyšetření pro každou ženu a pro každý pár. Většina párů v léčbě neplodnosti ho nepotřebuje a jeho provedení bez indikace přináší náklady, čekání a nejistotu z nálezů, které nikam nevedou.

O tom, co má ve vaší situaci smysl, rozhoduje váš lékař, obvykle ve spolupráci s klinickým genetikem.

## Situace, ve kterých se o něm mluví častěji

### Opakované ztráty těhotenství

Po dvou a více ztrátách se obvykle hledá příčina šířeji. Karyotyp obou partnerů bývá součástí tohoto hledání. U části ztrát se vyšetřuje i tkáň z těhotenství, protože nález může změnit další postup.

### Opakovaně neúspěšné transfery

Když se přenesená embrya opakovaně neuchytí, hledá se vysvětlení na několika frontách současně — děloha, hormony, embrya. Genetika je jedna z nich, ne první a ne jediná.

### Dědičné onemocnění v rodině

Onemocnění u vás, u partnera, u sourozence nebo u dítěte z předchozího vztahu. Sem patří i situace, kdy se v rodině opakují vrozené vady, mentální postižení nebo úmrtí v raném věku.

### Nález u předchozího těhotenství nebo u plodu

Zjištěná chromozomová odchylka u plodu je jedním z nejčastějších důvodů k vyšetření obou rodičů.

### Výrazný mužský faktor

Při velmi nízkém počtu spermií nebo při jejich nepřítomnosti ve vzorku se zvažují cílená vyšetření, protože nález může změnit plán léčby i to, co se probírá s párem předem.

### Předčasné selhání funkce vaječníků

Vyhasínání funkce vaječníků v mladém věku má někdy genetické pozadí a nález může mít význam i pro příbuzné.

### Příbuzenský vztah partnerů

Zvyšuje pravděpodobnost, že oba nesou stejnou recesivní mutaci.

### Před použitím darovaných gamet nebo před PGT

Vyšetření slouží k výběru vhodné kombinace a k nastavení testu.

## Co si od vyšetření slibovat a co ne

Vyšetření **může** vysvětlit historii, která dávala málo smyslu, a **může** změnit plán léčby. U velké části párů ale vyjde v normě. To je dobrá zpráva zabalená do frustrace — jedna hypotéza padla a odpověď stále není.

Vyšetření nepředpoví výsledek konkrétního cyklu, nezaručí těhotenství a nenahrazuje péči, kterou máte.

## Než na vyšetření kývnete

1. Co konkrétně hledáme?
2. Jak pravděpodobný je u nás pozitivní nález?
3. Co se v léčbě změní, když vyjde pozitivní? A co, když negativní?
4. Kdy budou výsledky a odloží to náš plán?
5. Kolik to stojí a co z toho hradí pojišťovna?

Pokud na otázku číslo tři není odpověď, stojí za to se zeptat ještě jednou, jinak. Vyšetření, jehož výsledek nic nezmění, je legitimní odmítnout.

> Tento přehled je vzdělávací. O indikaci genetického vyšetření rozhoduje váš lékař ve spolupráci s klinickým genetikem podle vaší konkrétní situace.`,
  },

  // ---------------------------------------------------------------------------
  // (B) Genetické testování embryí
  // ---------------------------------------------------------------------------
  {
    id: 'gen-pgt-jak-probiha',
    kind: 'article',
    title: 'PGT krok za krokem: co se děje s embryem v laboratoři',
    excerpt:
      'Od kultivace přes biopsii a zamrazení až po čekání na výsledek — a proč se transfer téměř vždy odkládá.',
    minutes: 10,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'embryologie'],
    level: 'essential',
    hero: 'pearl',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.9,
    body: `## Co PGT je

PGT je preimplantační genetické testování — vyšetření embrya ještě před přenosem do dělohy. Vždy se provádí v rámci IVF, protože embrya musí být v laboratoři.

Existuje v několika podobách podle toho, co se hledá: počet chromozomů (PGT-A), konkrétní dědičné onemocnění (PGT-M), strukturální přestavba chromozomů (PGT-SR). Technický průběh je u všech tří podobný. Liší se otázka, kterou laboratoři pokládáte.

## 1. Kultivace embryí

Po oplození se embrya sledují od prvního dne vývoje. Embryolog každý den hodnotí, jak se dělí, jak vypadají buňky, jestli vývoj pokračuje. Kolem třetího dne má embryo řádově osm buněk, kolem pátého až šestého dne může dorůst do stadia blastocysty, kde už jsou rozlišené dvě části: vnitřní buněčná masa, ze které se vyvíjí plod, a trofektoderm, ze kterého se tvoří placenta.

Ne všechna embrya se do tohoto stadia dostanou. To platí i bez PGT — je to běžná součást kultivace, ne selhání laboratoře.

## 2. Biopsie trofektodermu

Testovat se dá jen to, z čeho je vzorek. U dnešního standardu se odebírá několik buněk z **trofektodermu**, tedy z části, ze které se bude tvořit placenta. Vnitřní buněčná masa se nechává být.

Odběr se provádí obvykle pátý nebo šestý den vývoje, na některých pracovištích i sedmý den. V obalu embrya se vytvoří malý otvor a odsaje se řádově pět až deset buněk. Výkon dělá zkušený embryolog a trvá krátce.

Ne každé embryo je k biopsii vhodné. Embrya, která nedosáhnou potřebného stadia nebo kvality, se netestují.

## 3. Zamrazení

Bezprostředně po biopsii se embryo **vitrifikuje** — zamrazí velmi rychlou metodou a uloží. Na výsledek se čeká, a embryo mezitím nemůže zůstat v kultivaci.

Proto platí jednoduchá věta, kterou je dobré slyšet předem: **cyklus s PGT téměř vždy znamená odložený kryotransfer.** Přenos v témž cyklu, ve kterém proběhl odběr vajíček, se u PGT běžně nedělá.

## 4. Genetická laboratoř

Vzorek putuje do genetické laboratoře, kde se z několika buněk namnoží DNA a vyhodnotí. Dnes se nejčastěji používají metody sekvenování nové generace.

Čekání trvá obvykle dva až čtyři týdny, u PGT-M déle, protože test pro konkrétní mutaci se připravuje na míru ještě před cyklem.

## 5. Výsledek a plán transferu

Výsledek přichází pro každé testované embryo zvlášť. Podle něj se s lékařem domluví, které embryo a kdy se přenese. Následuje příprava kryocyklu, která má svůj vlastní rytmus.

Tady je důležitá věc, která se často ztrácí: **z jednoho odběru vajíček může vzniknout několik embryí, a tedy i několik transferů.** Jeden IVF cyklus se nerovná jeden přenos. Když první transfer nevyjde, další embrya ze stejné zásoby zůstávají.

## Na co se ptát své kliniky

1. Kolik našich embryí je reálně vhodných k biopsii?
2. Kdy přesně se biopsie provádí a kdo ji dělá?
3. Jak dlouho čekáme na výsledek?
4. Jaká je cena za embryo a jaká je celková částka?
5. Co se stane, když laboratoř nedá jednoznačný výsledek?
6. Jak se nakládá s embryi, která nepůjdou k transferu?

Odpovědi si nechte dát písemně nebo si je zapište. Rozhovor probíhá v období, kdy si toho zapamatujete málo.

> Text popisuje obvyklý postup. Konkrétní provedení, načasování a podmínky se mezi pracovišti liší — vždy platí to, co vám řekne vaše klinika a klinický genetik.`,
  },
  {
    id: 'gen-pgt-a',
    kind: 'article',
    title: 'PGT-A: co o něm víme a co je stále předmětem diskuse',
    excerpt:
      'Testování na počet chromozomů je nejčastěji nabízené a zároveň nejvíc diskutované. Tady je poctivá verze.',
    minutes: 10,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'embryologie'],
    level: 'deep',
    hero: 'dusk',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.95,
    body: `## Co PGT-A hledá

PGT-A se dívá na **počet chromozomů**. Embryo s očekávaným počtem se označuje jako euploidní, embryo s chybějícím nebo nadbytečným chromozomem jako aneuploidní.

Aneuploidie vzniká nejčastěji chybou při dělení ve vajíčku. Její výskyt výrazně stoupá s věkem ženy. Embrya s aneuploidií se často neuchytí, nebo těhotenství skončí ztrátou; u části z nich může vést k narození dítěte s chromozomální odchylkou.

Cílem PGT-A je nepřenášet embrya, u kterých je nález aneuploidní, a začít těmi, u kterých je nález euploidní.

## Co je poctivé říct o přínosu

Tady je potřeba být přesná, protože marketing bývá jinde než data.

- **PGT-A netvoří embrya a nezvyšuje jejich počet.** Vybírá z toho, co v laboratoři vzniklo.
- U vybraného euploidního embrya bývá pravděpodobnost uchycení při jednom přenosu vyšší než u nevybraného embrya. To ale není totéž jako vyšší šance na dítě z celé vaší zásoby embryí.
- **Zda PGT-A zvyšuje celkovou šanci na narozené dítě, je předmětem odborné diskuse.** Výsledky studií nejsou jednotné a závěry se liší podle věku ženy, podle počtu embryí a podle metodiky.
- Přínos se **liší podle věku**. U žen ve vyšším věku, kde je podíl aneuploidních embryí větší, se o něm mluví jinak než u žen mladších.
- Přínos se **liší podle počtu embryí**. Při malém počtu embryí testování často jen přeskládá pořadí toho, co byste stejně přenášela — a přidá riziko, že po testování nezbude k transferu nic.

To, co PGT-A často opravdu přináší, je **kratší cesta a méně neúspěšných transferů**, ne větší počet dětí. Pro některé páry je to velká hodnota. Pro jiné ne. Rozdíl mezi „rychleji" a „častěji" je ten nejdůležitější rozdíl v celém tomhle tématu.

## Kdy se o něm nejčastěji uvažuje

Bývá zvažováno u vyššího věku ženy, po opakovaně neúspěšných transferech a po opakovaných ztrátách těhotenství. Ani v jedné z těchto situací to není automatické doporučení a data o přínosu v nich nejsou jednotná.

**PGT-A není vyšetření vhodné pro každou pacientku.** Rozhodnutí patří páru a jeho lékaři, po rozhovoru, ve kterém zazní vaše konkrétní čísla — věk, očekávaný počet embryí, dosavadní průběh léčby.

## Co s tím dělá čekání a peníze

Cyklus s PGT-A znamená zamrazení embryí, čekání na výsledek a odložený kryotransfer. To je několik týdnů navíc a náklady navíc, které v Česku obvykle z velké části nese pacient.

Do rozhodování patří i tohle. Není to malicherné — je to součást zátěže.

## Otázky, které vám dají odpověď

1. Kolik embryí u nás reálně očekáváte a kolik jich bude vhodných k biopsii?
2. Co konkrétně by se v našem plánu změnilo, kdyby všechna embrya vyšla jako aneuploidní?
3. Zkracuje to u nás cestu k těhotenství, nebo mění šanci na dítě? V čem přesně vidíte přínos?
4. Jaký je váš postup u mozaikových nálezů?
5. Kolik nás to bude stát celkem?

## Co PGT-A neudělá

- Nezaručí těhotenství. I euploidní embryo se nemusí uchytit.
- Nezaručí zdravé dítě. Netestuje všechno.
- Nenahradí prenatální diagnostiku v těhotenství.

> Tento text je vzdělávací a nenahrazuje konzultaci. O vhodnosti PGT-A ve vaší situaci rozhoduje váš lékař ve spolupráci s klinickým genetikem — a vy.`,
  },
  {
    id: 'gen-pgt-m',
    kind: 'article',
    title: 'PGT-M: když je v rodině konkrétní dědičná nemoc',
    excerpt:
      'Test šitý na míru jedné mutaci. Připravuje se týdny až měsíce, a proto se o něm musí mluvit dřív, než začne cyklus.',
    minutes: 8,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'embryologie'],
    level: 'deep',
    hero: 'blush',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.6,
    body: `## Pro koho je

PGT-M se používá tehdy, když je v páru **známá konkrétní mutace** způsobující dědičné onemocnění — například cystická fibróza, spinální svalová atrofie a řada dalších stavů podmíněných změnou v jednom genu.

Podmínkou je, že mutace je předem přesně popsaná. Test se nastavuje na ni. Bez znalosti konkrétní změny se PGT-M udělat nedá.

## Co tomu předchází

1. **Genetická konzultace** a potvrzení mutace u nositele nebo u nemocného člena rodiny.
2. **Příprava testu na míru.** Laboratoř sestaví systém pro vaši konkrétní mutaci a ověří ho. Často k tomu potřebuje vzorky i od dalších příbuzných — od rodičů, sourozenců nebo od nemocného dítěte.
3. **Teprve pak se plánuje cyklus.**

Příprava trvá běžně týdny až měsíce. Tohle je nejčastější překvapení celého procesu: pár přijde s tím, že chce začít, a zjistí, že první cyklus bude až za půl roku. Počítejte s tím v plánování a zeptejte se na termíny hned na první konzultaci.

## Jak testování probíhá

Stejně jako u ostatních typů PGT: embrya se kultivují, u vhodných embryí se pátý až šestý den odebere vzorek z trofektodermu, embrya se zamrazí a čeká se na výsledek. Přenos probíhá v pozdějším kryocyklu.

U části párů se PGT-M kombinuje s testováním počtu chromozomů. Zda to má ve vaší situaci smysl, je věc konzultace, ne automatika.

## Co výsledek říká

Pro každé testované embryo se určuje, zda nese sledovanou mutaci a v jaké podobě. Podle toho se vybírá embryo k přenosu.

U recesivně dědičných onemocnění bývá část embryí zdravých nositelů — tedy stejných, jako je rodič-nositel. Jak se s nimi nakládá, je téma pro genetickou konzultaci a liší se podle onemocnění i podle pracoviště.

## Co PGT-M neumí

- **Testuje jen tu jednu nemoc**, na kterou je nastavené. Nic dalšího nevylučuje.
- **Nezaručuje těhotenství.** Vybírá z embryí, která máte.
- **Nenahrazuje prenatální diagnostiku.** Ta se v těhotenství obvykle doporučuje i po PGT-M, protože žádná metoda není stoprocentní.
- Může se stát, že vhodné embryo nevznikne. U onemocnění s vyšším podílem postižených embryí je to reálný scénář, o kterém je lepší mluvit předem než potom.

## Co to obnáší psychicky

PGT-M přináší rozhodnutí, která nejsou technická. U párů, kde jeden z partnerů nemoc sám má nebo ji zná ze své rodiny, otevírá staré věci — vinu, úlevu i pocit, že se tu posuzuje něco, co je součástí jejich vlastního života.

Tenhle rozhovor patří na konzultaci a stojí za to na něj mít čas. Řada pracovišť nabízí i psychologickou podporu; není důvod ji nevyužít.

## Praktické otázky

1. Jak dlouho potrvá příprava testu?
2. Potřebujeme vzorky od dalších příbuzných? Od kterých?
3. Jaký podíl embryí bývá u tohoto onemocnění vhodný k přenosu?
4. Kolik stojí příprava testu a kolik testování jednoho embrya?
5. Doporučujete v těhotenství ještě prenatální diagnostiku?

> Text je vzdělávací a nenahrazuje genetické poradenství. O tom, zda a jak PGT-M provést, rozhoduje váš lékař společně s klinickým genetikem.`,
  },
  {
    id: 'gen-pgt-sr',
    kind: 'article',
    title: 'PGT-SR: testování embryí u chromozomových přestaveb',
    excerpt:
      'Pro páry, kde jeden z partnerů nese translokaci. Vybírá embrya s vyváženým materiálem — a má svá jasná omezení.',
    minutes: 8,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'embryologie'],
    level: 'deep',
    hero: 'sand',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.5,
    body: `## Kdy se o něm mluví

PGT-SR se zvažuje u párů, kde má jeden z partnerů prokázanou **strukturální přestavbu chromozomů** — nejčastěji vyváženou reciproční nebo Robertsonskou translokaci, případně inverzi.

Podmínkou je, že přestavba je popsaná z karyotypu. Laboratoř podle ní nastaví, co u embryí sledovat.

## Co test dělá

Hledá u každého testovaného embrya, jestli je genetický materiál v oblastech zapojených do přestavby **vyvážený**, nebo jestli něco chybí či přebývá. K přenosu se pak vybírají embrya s vyváženým nálezem.

Provedení je stejné jako u ostatních typů PGT: kultivace, biopsie trofektodermu obvykle pátý až šestý den, zamrazení, čekání na výsledek, kryotransfer v dalším cyklu.

## Co je potřeba vědět předem

- **Podíl vyvážených embryí se velmi liší.** U některých přestaveb je většina embryí vyvážená, u jiných jen malá část. Konkrétní odhad pro vaši přestavbu umí dát klinický genetik — obecná čísla z internetu na vaši situaci nesedí.
- **Může se stát, že vhodné embryo nevznikne.** U přestaveb s nízkým podílem vyvážených embryí je tenhle scénář reálný a je lepší si o něm říct dopředu.
- **Běžné metody nemusí odlišit embryo zcela bez přestavby od embrya s vyváženou přestavbou.** Obě jsou z hlediska vývoje považována za vhodná k přenosu, ale dítě může být opět nositelem. Jestli je to pro vás podstatné, řekněte to na konzultaci — někdy jde metodika upravit, někdy ne.
- **Test cílí na přestavbu.** Zda se současně hodnotí i počet ostatních chromozomů, se u jednotlivých pracovišť liší a je to otázka na konzultaci.

## Co může a co ne

PGT-SR **může snížit pravděpodobnost přenosu embrya s nevyváženým materiálem** a u části párů zkrátit sled ztrát a neúspěšných transferů. To je jeho hlavní smysl.

Nezaručí těhotenství, nezaručí zdravé dítě a nenahrazuje prenatální diagnostiku v těhotenství. Ta se po PGT obvykle probírá znovu.

Ani u nositelů přestavby to není jediná možná cesta. Část párů volí početí bez testování s prenatální diagnostikou, část darované gamety. Žádná z těch cest není automaticky správná — liší se podle konkrétní přestavby, podle věku, podle toho, kolik ztrát už máte za sebou, a podle toho, co jste ochotni unést.

## Otázky pro konzultaci

1. Jaký podíl embryí bývá u naší přestavby vyvážený?
2. Kolik embryí je u nás reálné očekávat?
3. Odliší test nositelství vyvážené přestavby?
4. Hodnotí se současně i počet ostatních chromozomů?
5. Co budeme dělat, když žádné vhodné embryo nevznikne?

> Text je vzdělávací a nenahrazuje genetické poradenství. Rozhodnutí o PGT-SR patří páru společně s ošetřujícím lékařem a klinickým genetikem.`,
  },
  {
    id: 'gen-euploidni-aneuploidni-mozaika',
    kind: 'article',
    title: 'Euploidní, aneuploidní, mozaikové: co ta slova ve zprávě znamenají',
    excerpt:
      'Tři výrazy, které rozhodují o tom, co se stane s vašimi embryi. Vysvětlené bez laboratorního žargonu.',
    minutes: 9,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'embryologie'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.85,
    body: `## Odkud se ta slova berou

Lidská buňka má běžně 46 chromozomů — 23 párů. Embryo dostává jednu sadu z vajíčka a jednu ze spermie. Když se při dělení něco přerozdělí jinak, počet nesedí.

Zpráva z genetické laboratoře používá pro výsledek tři základní kategorie.

## Euploidní embryo

Nález odpovídá **očekávanému počtu chromozomů**. Embryo se považuje za vhodné k přenosu.

Co to neznamená: že se uchytí, že těhotenství bude pokračovat a že dítě bude zdravé. Euploidní znamená, že v tomhle konkrétním parametru nebyla nalezena odchylka. Nic víc a nic míň.

## Aneuploidní embryo

Nález ukazuje **chybějící nebo nadbytečný chromozom**. Zpráva obvykle uvádí i který — třeba přebývající 21. chromozom nebo chybějící 16.

Většina aneuploidií vzniká náhodnou chybou při dělení, nejčastěji ve vajíčku. Pravděpodobnost stoupá s věkem ženy. Není to nic, co byste způsobila chováním, stravou, stresem nebo tím, že jste na něco zapomněla.

Embrya s aneuploidním nálezem se k přenosu obvykle nedoporučují, protože se často neuchytí nebo těhotenství skončí ztrátou.

## Mozaikové embryo

Tady je potřeba jít pomalu, protože právě tenhle nález způsobuje nejvíc zmatku.

Vzorek k testování se odebírá z několika buněk trofektodermu, tedy z části, ze které se tvoří placenta. Když část těch buněk vykazuje odchylku a část ne, popíše se výsledek jako **mozaikový**.

Co je na tom podstatné:

- Nález popisuje **odebraný vzorek**, ne celé embryo. Několik buněk nemusí reprezentovat všechny buňky.
- Mozaicismus má **různé stupně a různé typy** a jejich význam se liší. Nález „mozaikové embryo" bez dalšího upřesnění je málo informace.
- Některá pracoviště mozaiková embrya po podrobné konzultaci k přenosu zvažují, jiná ne. **Postupy se mezi pracovišti liší** a doporučení odborných společností se v čase vyvíjejí.
- Data k mozaikovým embryím jsou zatím omezená. To je hlavní důvod, proč se o nich mluví opatrně.

**Rozhodnutí o mozaikovém embryu nepatří na internet ani do diskusního fóra. Patří na genetickou konzultaci**, kde se probírá konkrétní typ nálezu, vaše situace a to, co byste v případě těhotenství chtěli dál sledovat.

## Ještě jedna kategorie: nejednoznačný výsledek

Občas laboratoř výsledek nedá — vzorek byl malý, DNA se nepodařilo vyhodnotit nebo je nález nečitelný. Mluví se o embryu bez výsledku.

Možnosti bývají opakovaná biopsie, přenos bez výsledku po konzultaci, nebo ponechání embrya zamrazeného. Každá má svá pro i proti a rozhoduje se individuálně.

## Co se ve zprávě ještě může objevit

Zpráva někdy uvádí i hodnocení embrya z pohledu embryologa — stadium vývoje a kvalitu jednotlivých částí. To je jiná informace než genetický nález a jedno z druhého neplyne.

## Než se rozhodnete o dalším kroku

1. Kolik embryí máme v jaké kategorii?
2. U mozaikového nálezu: jakého typu a jakého rozsahu?
3. Jaký je postup vašeho pracoviště u těchto nálezů?
4. Jaké další sledování byste v případném těhotenství doporučili?
5. Můžeme se k rozhodnutí vrátit později? Embrya jsou zamrazená.

Poslední bod stojí za zdůraznění. Embrya čekají zamrazená a rozhodnutí se ve většině situací nemusí dělat týž den, kdy výsledek přijde.

> Text je vzdělávací a nenahrazuje genetické poradenství. Význam konkrétního nálezu u vašich embryí posuzuje klinický genetik společně s vaším lékařem.`,
  },
  {
    id: 'gen-pgt-omezeni',
    kind: 'article',
    title: 'Co PGT neumí: omezení, o kterých je lepší vědět předem',
    excerpt:
      'Chyba testu, mozaicismus, riziko při biopsii a jedna věc, kterou žádné testování nezmění — počet vašich embryí.',
    minutes: 9,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'embryologie'],
    level: 'deep',
    hero: 'taupe',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.8,
    body: `## Proč o omezeních mluvit dřív než po výsledku

Většina zklamání kolem PGT nevzniká z toho, že by test selhal. Vzniká z očekávání, které mu nikdo nenastavil. Tenhle text je proto seznam věcí, které PGT nedělá.

## 1. Testuje se vzorek, ne celé embryo

Odebírá se několik buněk z trofektodermu — z části, ze které se tvoří placenta. Předpokládá se, že vypovídají o celém embryu, ale úplně přesně to platit nemusí.

Z toho plyne, že výsledek má **malou, ale nenulovou míru nejistoty** v obou směrech: embryo označené jako aneuploidní nemusí být takové v celém rozsahu, a embryo označené jako euploidní může nést odchylku, kterou vzorek nezachytil.

## 2. Mozaicismus

Když část buněk ve vzorku vykazuje odchylku a část ne, výsledek se popíše jako mozaikový. Interpretace takového nálezu je odborně náročná, data jsou omezená a postupy pracovišť se liší. Tohle je nejčastější zdroj nejistoty v celém procesu a patří na genetickou konzultaci.

## 3. Netestuje všechno

PGT odpovídá na tu otázku, na kterou je nastavené. PGT-A na počet chromozomů, PGT-M na jednu konkrétní mutaci, PGT-SR na konkrétní přestavbu.

Žádné z nich nevyloučí všechna dědičná onemocnění, vrozené vady nezávislé na genetice ani komplikace v průběhu těhotenství. **Prenatální diagnostiku v těhotenství to nenahrazuje.**

## 4. Nezvyšuje počet embryí

Tohle je nejdůležitější věta celého textu. **PGT netvoří embrya. Vybírá z těch, která už máte.**

Když je embryí málo, testování často jen předřadí informaci, kterou byste stejně dostala — jen dřív a s vyšší cenou. A přidá riziko, že po testování nezbude k přenosu nic.

Proto se u malého počtu embryí o PGT uvažuje jinak než u velkého. Je to jedna z prvních věcí, kterou má smysl s lékařem probrat.

## 5. Biopsie je zásah

Odběr buněk provádí zkušený embryolog a v rutinní praxi je považován za bezpečný. Přesto jde o zásah do embrya a spolu s nutným zamrazením a rozmrazením s sebou nese **malé riziko poškození nebo ztráty embrya**.

Riziko je nízké, ale není nulové a je legitimní se na něj zeptat. Ptejte se konkrétně své kliniky, jaká je jejich zkušenost.

## 6. Ne každé embryo se k testu dostane

Testovat se dá až embryo, které dorostlo do potřebného stadia a kvality. Embrya, která se zastaví dřív, se nebiopsují. To není důsledek PGT — je to běžná součást kultivace, jen se to při plánování snadno přehlédne.

## 7. Nezaručí těhotenství

Ani přenos euploidního embrya nekončí vždy těhotenstvím. Do hry vstupuje děloha, načasování, imunitní a hormonální prostředí a věci, kterým dnešní medicína nerozumí úplně.

## 8. Stojí peníze a čas

Cyklus s PGT znamená zamrazení, čekání na výsledek a odložený kryotransfer. Náklady na testování v Česku obvykle z velké části nese pacient.

## Co z toho plyne

Nic z výše uvedeného neznamená, že PGT nemá smysl. Znamená to, že jeho smysl je konkrétní a omezený: **odpovídá na jednu otázku o embryích, která už existují.**

Jestli je tahle odpověď pro vás užitečná, závisí na tom, proč ji chcete a co s ní uděláte.

> Text je vzdělávací a nenahrazuje konzultaci. Konkrétní rizika, spolehlivost použité metody a postupy pracoviště proberte se svou klinikou a s klinickým genetikem.`,
  },
  {
    id: 'gen-rozhodovani-o-pgt',
    kind: 'article',
    title: 'Jak se rozhoduje o PGT: otázky, které vás dovedou k odpovědi',
    excerpt:
      'Není to volba mezi lepší a horší péčí. Je to volba, která má proměnné — a ty se dají pojmenovat.',
    minutes: 9,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'klinika'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    sources: [
      'ESHRE — doporučené postupy pro preimplantační genetické testování',
      'Společnost lékařské genetiky a genomiky ČLS JEP',
    ],
    publishedOn: PUBLISHED,
    boost: 0.85,
    body: `## Nejdřív rámec

PGT není nadstandard, který by dělal léčbu automaticky lepší, ani zbytečnost. Je to vyšetření s konkrétní indikací, konkrétním přínosem a konkrétními omezeními. **Není vhodné pro každou pacientku a pro každý pár.**

U některých situací — známá mutace v páru, prokázaná strukturální přestavba — je jeho role poměrně jasná. Jako plošné vyšetření u všech párů zůstává předmětem odborné diskuse a data nejsou jednotná. Rozhodnutí patří vám společně s lékařem a genetikem.

## Šest proměnných, o kterých se rozhoduje

### 1. Proč

Co konkrétně vás k tomu vede? Známá genetická zátěž je jiná výchozí situace než opakovaně neúspěšné transfery a ta je zase jiná než „nabídli nám to na klinice".

### 2. Kolik embryí lze očekávat

Nejpraktičtější číslo v celé úvaze. Při malém očekávaném počtu embryí testování často nic nepřeskládá a přidá riziko, že nezbude co přenést. Zeptejte se přímo: kolik embryí u nás reálně čekáte a kolik jich bývá vhodných k biopsii?

### 3. Věk

Podíl aneuploidních embryí stoupá s věkem ženy a s ním se mění i to, jak se o přínosu testování mluví. Obecná doporučení tady nepomůžou — potřebujete čísla vztažená k vám.

### 4. Co uděláte s výsledkem

Změní se něco? Kdyby všechna embrya vyšla jako aneuploidní, co by následovalo? Kdyby přišel mozaikový nález, jak by se postupovalo? Když na tyhle otázky nedokážete odpovědět, rozhodnutí ještě není zralé.

### 5. Peníze a čas

Testování se v Česku obvykle z velké části hradí z vlastních prostředků a cyklus se prodlouží o čekání na výsledek a o přípravu kryotransferu. Vyžádejte si celkovou částku, ne cenu za embryo.

### 6. Hodnoty

Část rozhodnutí není medicínská. Týká se toho, jak se díváte na výběr mezi embryi a co byste dělali s embryi, která k přenosu nepůjdou. Tohle je legitimní součást úvahy a má zaznít nahlas — ideálně mezi vámi a partnerem dřív, než sedíte v ordinaci.

## Co si vyžádat

- **Genetickou konzultaci**, ne jen leták a větu „většina párů to bere". Máte na ni nárok.
- **Písemný rozpočet.**
- **Čas na rozmyšlenou.** Rozhodnutí o PGT se ve většině situací dělá před cyklem, ne v jeho průběhu, a spěch mu neprospívá.

## Otázky, které stojí za to položit doslova

1. Proč doporučujete PGT zrovna u nás?
2. Kolik embryí očekáváte a kolik jich bude vhodných k biopsii?
3. Zkracuje to u nás cestu k těhotenství, nebo mění šanci na dítě?
4. Co budeme dělat, když k transferu nezbude žádné embryo?
5. Jak u vás postupujete u mozaikových nálezů?
6. Kolik to bude stát celkem a co hradí pojišťovna?
7. Co se stane s netransferovanými embryi a jaké máme možnosti?

## Když si nejste jistá

Druhý názor je běžná a legitimní věc. Stejně tak je legitimní PGT odmítnout, i když ho klinika nabízí — a stejně tak si ho vyžádat a probrat, i když o něm nikdo nezačal.

Jedna věc na závěr, kterou je dobré si připomenout: **z jednoho odběru vajíček může vzniknout několik embryí a několik transferů.** Rozhodnutí o testování se tedy netýká jednoho přenosu, ale celé zásoby embryí, kterou z cyklu budete mít.

> Text je vzdělávací a nenahrazuje konzultaci. O vhodnosti a rozsahu PGT rozhoduje váš lékař ve spolupráci s klinickým genetikem — po rozhovoru s vámi.`,
  },

  // ---------------------------------------------------------------------------
  // (C) Když výsledek nesedí s tím, co jste čekali
  // ---------------------------------------------------------------------------
  {
    id: 'gen-necekany-vysledek',
    kind: 'article',
    title: 'Když přijde výsledek, který jsme nečekali',
    excerpt:
      'Aneuploidní nález u všech embryí. Nebo žádné embryo k transferu. Co ten výsledek říká — a co o vás neříká.',
    minutes: 9,
    phases: ['genetic_testing', 'embryo_culture'],
    topics: ['genetika', 'psychika'],
    level: 'comfort',
    hero: 'blush',
    author: 'Gabi',
    reviewedBy: REVIEWED,
    publishedOn: PUBLISHED,
    boost: 0.9,
    body: `## Ten telefonát

Většina párů si ho pamatuje přesně. Kde stáli, co dělali, jakým tónem to zaznělo. Věta bývá krátká: žádné z embryí nevyšlo jako vhodné k přenosu.

Do té chvíle jste měli embrya. Byla někde uložená, existovala, byla vaše. Po telefonátu jsou ta samá embrya pořád tam, ale význam se převrátil. Tenhle druh ztráty nemá jméno a málokdo v okolí chápe, o co jste přišli.

## Co ten výsledek říká

Že u odebraných buněk konkrétních embryí byla nalezena odchylka v počtu chromozomů. Nic víc.

Aneuploidie vzniká nejčastěji náhodnou chybou při dělení, obvykle už ve vajíčku. Její výskyt stoupá s věkem ženy a **nedá se ovlivnit chováním, stravou, doplňky, klidem ani tím, co jste udělala nebo neudělala.** To není útěcha na míru — to je popis toho, jak vznikají chyby v dělení buňky.

## Co neříká

Neříká, že vaše tělo je vadné. Neříká, že už to nemá cenu. Neříká nic o tom, jaká jste žena, partnerka nebo budoucí matka.

A neříká ani, jak dopadne další cyklus. Každý cyklus je jiná sada vajíček. To není slib. Je to jen fakt, že z tohohle výsledku se nedá odvodit ten příští.

## Kolik je na tom práva na zármutek

Hodně. Nemusíte si ho odůvodňovat.

Řada žen popisuje, že si připadá hloupě — vždyť „to ještě nebylo těhotenství". Jenže vy jste ta embrya ve své hlavě už znala. Měla jste jejich čísla, možná i fotku, plánovala jste termíny. Zmizel konkrétní plán a s ním i to, co jste si k němu už stihla připojit.

Ztráta plánu je taky ztráta. Nikdo od vás nečeká, že to ustojíte za víkend.

## První dny

- **Nedělejte velká rozhodnutí hned.** Ne v ten den, ne v ten týden. Klinika nikam neuteče a ani vaše možnosti.
- **Vyžádejte si termín na rozbor výsledku**, ideálně za týden nebo dva, až budete schopná poslouchat. Napište si otázky předem.
- **Řekněte to jednomu člověku**, který nebude nic řešit. Nepotřebujete rady, potřebujete svědka.
- **Domluvte se s partnerem, co teď potřebujete.** Muži často reagují okamžitým hledáním dalšího kroku, ženy potřebují nejdřív truchlit. Ani jedno není špatně, ale bez pojmenování to v páru dělá zeď.
- **Řekněte si předem, co s dotazy okolí.** Krátká věta, kterou pak jen opakujete, šetří obrovské množství sil.

## Otázky pro rozhovor s lékařem

1. Co konkrétně bylo u našich embryí nalezeno?
2. Co z toho podle vás plyne pro další cyklus?
3. Dá se v protokolu něco změnit? Co konkrétně a s jakým očekáváním?
4. Má v naší situaci smysl další vyšetření — u mě, u partnera?
5. Kdy nejdřív můžeme pokračovat a co doporučujete udělat do té doby?
6. Jaké možnosti bychom měli zvažovat, pokud se to bude opakovat?

Nepřijímejte odpověď, které nerozumíte. Požádejte, ať ji lékař zopakuje jinak — je to standardní součást péče, ne obtěžování.

## Když se výsledek týkal jediného embrya

Zvláštní kapitola je situace, kdy z cyklu vzešlo jedno jediné embryo a to nevyšlo. Nezbývá nic, co by čekalo v mrazáku, a další krok znamená začít znovu od stimulace. Je to jedna z nejtěžších variant a je v pořádku, když ji neunesete s nadhledem.

## Kdy vyhledat pomoc

Ozvěte se svému lékaři nebo psychologovi, když:

- nemůžete týdny spát nebo jíst,
- nezvládáte běžné fungování v práci a doma,
- máte pocit, že nemá smysl nic, ne jen léčba,
- objevují se myšlenky na sebepoškození. **V takovém případě vyhledejte odbornou pomoc bez odkladu, případně akutní lékařskou pomoc.**

Řada klinik má psychologa přímo v týmu a existují terapeuti specializovaní na reprodukční ztráty. Není to selhání, je to péče o sebe v situaci, která je objektivně těžká.

## Na závěr

Nebudeme hledat vyšší smysl tohohle výsledku ani slibovat, jak to dopadne příště. Nic z toho nevíme a vy to nepotřebujete slyšet.

Co víme: tenhle výsledek je informace o embryích z jednoho cyklu. Rozhodnutí, jestli a jak pokračovat, nemusíte dělat dnes.

> Text je vzdělávací a nenahrazuje péči lékaře ani psychologickou podporu. Interpretaci vašich výsledků a další postup vždy proberte se svou klinikou a s klinickým genetikem.`,
  },
]

const glossary: GlossaryTerm[] = [
  {
    term: 'PGT-A',
    aliases: ['testování na aneuploidie', 'preimplantační testování na aneuploidie'],
    short: 'Testování embryí na počet chromozomů před přenosem.',
    long: 'Provádí se v rámci IVF: z embrya vhodného stadia se obvykle pátý až šestý den odeberou buňky trofektodermu, embryo se zamrazí a vzorek jde do genetické laboratoře. Netvoří embrya ani nezvyšuje jejich počet — jen vybírá z těch, která vznikla. Přínos PGT-A je předmětem odborné diskuse a liší se podle věku ženy a podle počtu embryí; u malého počtu embryí se může stát, že k transferu nezbude žádné. Není vhodné pro každou pacientku a rozhodnutí patří páru a jeho lékaři, po genetické konzultaci.',
    topics: ['genetika', 'embryologie'],
  },
  {
    term: 'PGT-M',
    aliases: ['testování na monogenní onemocnění'],
    short: 'Testování embryí na jednu konkrétní známou dědičnou mutaci.',
    long: 'Používá se, když je v páru předem přesně popsaná mutace způsobující dědičné onemocnění. Test se připravuje na míru dané mutaci, což trvá týdny až měsíce a často k tomu laboratoř potřebuje vzorky i od dalších příbuzných — s tím je nutné počítat při plánování cyklu. Testuje jen to jedno onemocnění, nezaručuje těhotenství a nenahrazuje prenatální diagnostiku v těhotenství.',
    topics: ['genetika', 'embryologie'],
  },
  {
    term: 'PGT-SR',
    aliases: ['testování na strukturální přestavby'],
    short: 'Testování embryí u páru, kde jeden z partnerů nese chromozomovou přestavbu.',
    long: 'Zvažuje se u prokázané vyvážené translokace nebo jiné strukturální přestavby. Sleduje, zda je genetický materiál v zapojených oblastech vyvážený, a k přenosu se vybírají embrya s vyváženým nálezem. Podíl vyvážených embryí se velmi liší podle typu přestavby a u některých přestaveb je nízký, takže vhodné embryo nemusí vzniknout. Běžné metody nemusí odlišit embryo zcela bez přestavby od embrya s vyváženou přestavbou. Konkrétní odhady patří na genetickou konzultaci.',
    topics: ['genetika', 'embryologie'],
  },
  {
    term: 'Karyotyp',
    aliases: ['vyšetření chromozomů', '46,XX', '46,XY'],
    short: 'Soupis počtu a hrubé stavby chromozomů, obvykle z odběru krve.',
    long: 'Buňky se v laboratoři nechají několik dní růst, proto výsledek trvá běžně tři až šest týdnů. Může odhalit strukturální přestavbu, inverzi, mozaiku nebo odchylku počtu pohlavních chromozomů; drobné změny uvnitř genů nezachytí. Zvažuje se zejména při opakovaných ztrátách těhotenství, opakovaně neúspěšné léčbě, výrazném mužském faktoru nebo při nálezu u plodu — není součástí vyšetření každého páru. Vyšetřují se oba partneři a interpretace nálezu patří klinickému genetikovi.',
    topics: ['genetika', 'vysledky'],
  },
  {
    term: 'Euploidní embryo',
    aliases: ['euploidie'],
    short: 'Embryo, u kterého testování nenašlo odchylku v počtu chromozomů.',
    long: 'Nález odpovídá očekávanému počtu 46 chromozomů a embryo se považuje za vhodné k přenosu. Neznamená to záruku — euploidní embryo se nemusí uchytit, těhotenství nemusí pokračovat a testování nevylučuje všechna onemocnění. Výsledek navíc pochází z několika buněk trofektodermu, ne z celého embrya, takže má malou míru nejistoty. Prenatální diagnostiku v těhotenství nenahrazuje.',
    topics: ['genetika', 'embryologie'],
  },
  {
    term: 'Mozaikové embryo',
    aliases: ['mozaicismus', 'mozaika'],
    short: 'Nález, kdy část buněk v odebraném vzorku vykazuje odchylku a část ne.',
    long: 'Popisuje odebraný vzorek z trofektodermu, ne nutně celé embryo. Mozaicismus má různé typy a stupně a jejich význam se liší, takže samotné slovo „mozaikové" je málo informace. Některá pracoviště taková embrya po podrobné konzultaci k přenosu zvažují, jiná ne; postupy se liší a dostupná data jsou zatím omezená. Rozhodnutí o mozaikovém embryu patří na genetickou konzultaci, kde se probírá konkrétní nález a vaše situace.',
    topics: ['genetika', 'embryologie'],
  },
]

export const pack: ContentPack = { items, glossary }
