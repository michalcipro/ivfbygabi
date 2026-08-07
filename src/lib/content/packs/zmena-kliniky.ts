import type { ContentItem, ContentPack } from '../types'

/**
 * Změna kliniky a druhý názor.
 *
 * Nejcitlivější balík v knihovně. Cílem není nikoho odvést jinam ani
 * hodnotit péči, kterou žena dostává. Cílem je, aby uměla položit otázku,
 * sehnat si dokumentaci a rozhodnout se s informacemi v ruce.
 *
 * Dvě věci, které tady nikdy nezaznějí: že je nějaká klinika špatná
 * a že změna pracoviště zvýší šanci. Ani jedno nevíme a ani jedno
 * ženě nepomůže.
 */

const CENY = [
  'Uvedené částky jsou orientační a slouží jen k řádové představě. Přesnou cenu dává vždy platný ceník konkrétního pracoviště.',
  'Ceny se liší podle kliniky, roku, rozsahu služby a vzdálenosti. Ověřte si je předem.',
  'Aktualizováno 7. 8. 2026.',
]

const items: ContentItem[] = [
  {
    id: 'kli-kdy-druhy-nazor',
    kind: 'article',
    title: 'Kdy má smysl zvážit druhý názor',
    excerpt:
      'Pět konkrétních situací, ve kterých je konzultace u dalšího odborníka běžný krok, ne projev nedůvěry.',
    minutes: 8,
    phases: ['repeated_failure', 'waiting_next_attempt', 'diagnostics', 'ivf_prep'],
    topics: ['klinika', 'psychika', 'vysledky'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.6,
    body: `## Druhý názor je běžná součást medicíny

Konzultace u dalšího odborníka se používá v onkologii, v ortopedii, v neurologii i v reprodukční medicíně. Není to stížnost a není to krok proti někomu. Je to způsob, jak si u velkého rozhodnutí ověřit, že mu rozumíte a že s ním souhlasíte.

V reprodukční medicíně to platí obzvlášť. Velká část rozhodnutí se dělá v prostoru, kde dává smysl víc postupů najednou. Dvě zkušená pracoviště mohou volit jinou dávku, jiný typ protokolu nebo jiný okamžik transferu, a ani jedno z nich se nemusí mýlit. Rozdíl v přístupu není důkaz chyby.

Druhý názor proto neodpovídá na otázku, jaká je vaše klinika. Odpovídá na jinou otázku: rozumím tomu, co se se mnou děje, a je tohle plán, se kterým chci jít dál?

## Pět situací, ve kterých to má smysl zvážit

### Nerozumím svému plánu léčby

Nejde o odborné detaily. Jde o to, jestli dokážete vlastními slovy říct, proč máte právě tenhle protokol, co se od něj čeká a podle čeho se pozná, že jde podle plánu. Když to po několika kontrolách pořád nedokážete, chybí vám informace.

Prvním krokem přitom nemusí být jiné pracoviště. Může jím být žádost o delší konzultaci tam, kde jste teď.

### Nedostávám odpovědi

Nezodpovězené otázky se v čase nasčítají. Když po sobě odejdete z několika kontrol s tím, že jste se zase nedostala ke slovu nebo že odpověď byla obecná, je to samo o sobě důvod něco změnit. Někdy pomůže poslat otázky předem písemně. Někdy pomůže jiný lékař, klidně i na stejném pracovišti.

### Opakovaný neúspěch bez vysvětlení

Neúspěšný cyklus vysvětlení mít nemusí. To je realita, se kterou pracuje i medicína, a slušný lékař vám to řekne rovnou. Něco jiného ale je, když po druhém nebo třetím cyklu nezazní žádná úvaha o tom, co se zkusí jinak.

Otázka, kterou si položte, nezní, kdo za to může. Zní: víme, co příště změníme, a proč zrovna tohle?

### Nabízená metoda mi není jasná

U doplňkových a nadstandardních metod je legitimní chtít vědět, proč se nabízí právě vám. Dobrá odpověď se opírá o konkrétní nález ve vaší dokumentaci nebo o průběh předchozího cyklu.

Když je odpověď obecná, není to samo o sobě důvod k nedůvěře, ale je to důvod ptát se dál. Druhý názor tady slouží hlavně k tomu, abyste se rozhodovala informovaně a bez tlaku času.

### Chci probrat jinou strategii

Někdy nejde o nespokojenost, ale o zvědavost. Chcete vědět, jestli by ve vaší situaci dávalo smysl jiné vedení stimulace, jiný přístup k mražení, doplňující vyšetření nebo varianta, o které jste četla. To je legitimní důvod sám o sobě a nemusí mu předcházet žádný problém.

## Co druhý názor je a co není

Druhý názor je odborná konzultace nad vaší dokumentací. Výstupem bývá shrnutí toho, jak konzultující lékař čte vaši situaci a co by v ní zvažoval.

Není to:

- hodnocení předchozí péče,
- záruka, že jiný postup povede k jinému výsledku,
- závazek, že na novém pracovišti zůstanete.

Poslední bod je důležitý. Konzultace jinde neznamená, že měníte kliniku. Řada žen po druhém názoru zůstává tam, kde byla, jen s lepším porozuměním tomu, co se děje, nebo se seznamem otázek, které chtějí probrat se svým lékařem.

Zároveň platí, že samotná změna pracoviště šanci na těhotenství nezvyšuje. Co se změnit dá, je míra vaší informovanosti a to, nakolik se v rozhodování cítíte jako partner.

## Není to nedůvěra a není to zrada

Ženy tenhle krok často odkládají z jednoho důvodu: aby někoho nezklamaly. Vztah s lékařem, který vás vede rok nebo dva, je skutečný vztah a mluvit s někým jiným se může zdát nefér.

Není. Vaše dokumentace je vaše, vaše tělo je vaše a rozhodnutí, kolik cyklů a s jakým vysvětlením podstoupíte, je vaše. Lékaři jsou na druhé názory zvyklí, patří to k oboru.

> Pokud si nejste jistá, jestli je vhodná chvíle, začněte u sebe doma. Zkuste nahlas nebo písemně odpovědět na tři otázky: jaký mám teď plán, proč právě tenhle a co bude, když nevyjde. Kde se zaseknete, tam se ptejte dál.`,
  },

  {
    id: 'kli-checklist-druhy-nazor',
    kind: 'checklist',
    title: 'Je čas zvážit druhý názor?',
    excerpt:
      'Deset otázek na sebe, které vám ukážou, jestli vám chybí informace, komunikace, nebo nic z toho.',
    minutes: 4,
    phases: ['repeated_failure', 'waiting_next_attempt', 'diagnostics', 'ivf_prep'],
    topics: ['klinika', 'psychika'],
    level: 'essential',
    hero: 'sage',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Jak to použít

Tohle není test kliniky. Je to test toho, kolik informací a prostoru máte vy.

Projděte otázky v klidu, ideálně mimo den kontroly. U každé odpovězte jen ano, nebo ne. Nepočítá se skóre a neexistuje hranice, po které byste měla něco udělat.

Když zaškrtnete jednu nebo dvě, obvykle stačí donést seznam otázek na příští konzultaci. Když jich zaškrtnete víc a opakují se měsíce, stojí za úvahu konzultace jinde, nebo změna uvnitř současného pracoviště.

Obojí je legitimní krok. Ani jeden z nich nikomu nic nevyčítá.`,
    checklist: [
      {
        id: 'kli-chk2-protokol',
        text: 'Nedokážu vlastními slovy vysvětlit, proč mám právě tenhle protokol',
        hint: 'Zkuste to říct nahlas nebo napsat do poznámek v telefonu. Kde se zaseknete, tam vám chybí informace.',
        group: 'Rozumím plánu',
      },
      {
        id: 'kli-chk2-kriteria',
        text: 'Nevím, podle čeho se pozná, že léčba jde podle plánu',
        hint: 'Ptejte se konkrétně: co sledujete na ultrazvuku a v krvi a jaká hodnota by vás přiměla něco změnit?',
        group: 'Rozumím plánu',
      },
      {
        id: 'kli-chk2-dalsi-kroky',
        text: 'Nevím, jaké mám možnosti, kdyby tenhle cyklus nevyšel',
        hint: 'Zeptejte se dopředu, ne až po výsledku. Plán B se lépe poslouchá, dokud jste v klidu.',
        group: 'Rozumím plánu',
      },
      {
        id: 'kli-chk2-nevysvetleno',
        text: 'Po opakovaném neúspěchu jsem nedostala žádnou úvahu o tom, co zkusit jinak',
        hint: 'Legitimní odpověď je i to, že se příště nezmění nic a proč. Chybějící odpověď je něco jiného.',
        group: 'Rozumím plánu',
      },
      {
        id: 'kli-chk2-metoda',
        text: 'Byla mi nabídnuta metoda, u které nevím, proč ji mám mít',
        hint: 'Zeptejte se, jestli doporučení vychází z konkrétního nálezu ve vaší dokumentaci, nebo z běžné praxe pracoviště.',
        group: 'Rozumím plánu',
      },
      {
        id: 'kli-chk2-otazky',
        text: 'Z posledních konzultací jsem opakovaně odešla s nezodpovězenou otázkou',
        hint: 'Zkuste nejdřív poslat tři až pět očíslovaných otázek písemně předem. Často to samo změní průběh konzultace.',
        group: 'Komunikace',
      },
      {
        id: 'kli-chk2-cas',
        text: 'Mám pocit, že na konzultaci není čas se doptat',
        hint: 'Zeptejte se na recepci, jestli jde objednat delší konzultační termín mimo běžnou kontrolu.',
        group: 'Komunikace',
      },
      {
        id: 'kli-chk2-rozhodovani',
        text: 'Mám pocit, že se o mé léčbě rozhoduje beze mě',
        hint: 'Užitečná věta: chtěla bych rozumět tomu, mezi jakými možnostmi se rozhodujeme a proč.',
        group: 'Komunikace',
      },
      {
        id: 'kli-chk2-odkladam',
        text: 'Odkládám otázky, abych nikoho nezklamala nebo nepůsobila komplikovaně',
        hint: 'Ptát se na vlastní léčbu je součást péče, ne obtěžování. Tuhle položku zaškrtává hodně žen.',
        group: 'Komunikace',
      },
      {
        id: 'kli-chk2-strategie',
        text: 'Chci probrat jinou strategii a zatím jsem se k tomu nedostala',
        hint: 'Napište si konkrétně, co chcete probrat. Obecná otázka dostane obecnou odpověď.',
        group: 'Další kroky',
        optional: true,
      },
    ],
  },

  {
    id: 'kli-jak-zaridit-druhy-nazor',
    kind: 'article',
    title: 'Jak si druhý názor zařídit',
    excerpt:
      'Kde konzultaci hledat, co při objednání říct, kolik to zhruba stojí a jestli o tom musíte říct své klinice.',
    minutes: 8,
    phases: ['repeated_failure', 'waiting_next_attempt', 'diagnostics', 'ivf_prep'],
    topics: ['klinika', 'finance'],
    level: 'essential',
    hero: 'taupe',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: [
      ...CENY,
      'Tenhle text není právní poradenství. Postup i podmínky se řídí platnou legislativou a vnitřním řádem pracoviště a mění se. Ověřte si aktuální stav přímo na klinice.',
    ],
    boost: 0.5,
    body: `## Kde hledat

Druhý názor nemusí být nutně na jiné klinice asistované reprodukce. Možnosti bývají tři:

- **Jiné centrum asistované reprodukce.** Nejčastější varianta. Seznam pracovišť s oprávněním k asistované reprodukci vede příslušný státní úřad, klinika vám ho také umí říct.
- **Reprodukční specialista mimo vaši kliniku.** Někteří lékaři nabízejí samostatné konzultace nad dokumentací, aniž by u nich léčba pokračovala.
- **Jiný lékař na vašem pracovišti.** Nejjednodušší a nejrychlejší cesta, o které se nejmíň mluví. Podrobněji o ní píšeme v článku o změně uvnitř kliniky.

Doporučení z diskusí berte jako tip, ne jako důkaz. To, co jedné ženě sedlo, vypovídá hlavně o tom, co potřebovala ona. Užitečnější než hodnocení bývá konkrétní informace: jestli lékař mluví srozumitelně, jestli dostala písemný závěr, jak dlouho se čekalo na termín.

## Co říct při objednání

Tohle je klíčový moment. Když zavoláte a řeknete jen, že se chcete objednat, dostanete termín vstupního vyšetření. To je něco jiného než konzultace nad dokumentací a stojí to jinak.

Řekněte rovnou:

> Mám za sebou léčbu na jiném pracovišti a mám kompletní dokumentaci. Chtěla bych konzultaci nad ní, ne vstupní vyšetření.

A doptejte se na pět věcí:

1. **Kdo konzultaci povede.** Jméno lékaře. U druhého názoru na tom záleží.
2. **Jestli si dokumentaci prostuduje předem.** Pokud ano, zeptejte se, kam a v jakém formátu ji poslat a jak dlouho dopředu.
3. **Kolik času je vyhrazeno.** Konzultace nad několika cykly se do patnácti minut nevejde.
4. **Kolik to stojí.** Ptejte se před objednáním, ne u pultu na odchodu.
5. **Jestli dostanete písemný závěr.** Bez něj vám z konzultace zůstane jen to, co si zapamatujete, a to bývá po dvaceti minutách odborného výkladu málo.

## Kolik to obvykle stojí

Konzultace pro druhý názor bývá samoplátecká, protože nejde o pokračování léčby v rámci vaší dosavadní péče. Orientačně se pohybuje v řádu stovek až nižších tisíců korun podle pracoviště, délky konzultace a toho, jestli je součástí i ultrazvuk.

Připočtěte možné náklady na pořízení kopií dokumentace a cestu. Naopak nepočítejte, že vám na konzultaci naordinují nová vyšetření zdarma. To, jestli budou hrazená, závisí na indikaci a na vaší pojišťovně.

Ceny se mění a liší se pracoviště od pracoviště. Ověřte si je při objednávání.

## Musím o tom říct své klinice?

Nemusíte. Konzultace jinde bývá považovaná za vaši soukromou věc. Pokud máte pocit, že vám kvůli ní někdo komplikuje péči, obraťte se na vedení pracoviště.

V praxi to má obě strany:

**Když to neřeknete**, vyhnete se nepříjemnému rozhovoru ve chvíli, kdy ještě nevíte, co z konzultace vyjde. Dokumentaci si můžete vyžádat bez udání důvodu, žádost se nezdůvodňuje.

**Když to řeknete**, bývá předání zpráv jednodušší a někdy vám na klinice sami připraví souhrn pro kolegu. Řadě lékařů to nevadí, protože je to běžná praxe.

Rozumný kompromis: dokumentaci si vyžádejte s tím, že ji chcete mít u sebe. To je pravda a nic dalšího vysvětlovat nemusíte. Až budete vědět, co dál, můžete se rozhodnout, kolik toho řeknete.

## Po konzultaci

Nechte si den nebo dva. Druhý názor často zní přesvědčivě prostě proto, že je nový.

Pak si položte tři otázky:

- Řekl mi někdo něco, co jsem předtím nevěděla?
- Je rozdíl v doporučení věcný, nebo jen jiný styl?
- Chci s tím jít zpátky na svou kliniku, nebo chci pokračovat jinde?

Všechny tři odpovědi jsou v pořádku, včetně té, že zůstáváte. Návrat na původní pracoviště s novými otázkami je plnohodnotný výsledek druhého názoru, ne jeho selhání.

> Než uděláte jakékoli rozhodnutí o změně pracoviště, vyřešte nejdřív zamražená embrya a vzorky. Jejich převoz má vlastní podmínky a trvá to. Věnujeme mu samostatný text.`,
  },

  {
    id: 'kli-checklist-priprava-konzultace',
    kind: 'checklist',
    title: 'Co si připravit na konzultaci jinde',
    excerpt:
      'Kompletní seznam podkladů, bez kterých se konzultace nad dokumentací promění v obecné povídání.',
    minutes: 5,
    phases: ['repeated_failure', 'waiting_next_attempt', 'diagnostics', 'ivf_prep'],
    topics: ['klinika', 'vysledky'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Proč na tom tolik záleží

Lékař na konzultaci pracuje s tím, co má před sebou. Bez podkladů zbývá jen vaše vyprávění, a to ani při nejlepší paměti nenahradí čísla z protokolu.

Sežeňte podklady s předstihem. Vydání dokumentace nebývá otázka jednoho dne. Pokud vám pracoviště nabídne elektronickou formu, vezměte ji: dá se poslat předem a nedá se zapomenout doma.

Vytiskněte si navíc jednu stránku se souhrnem: rok, typ cyklu, počet vajíček, počet embryí, den transferu, výsledek. Lékař se v ní zorientuje za minutu a vy taky.`,
    checklist: [
      {
        id: 'kli-chk4-hormony',
        text: 'Hormonální výsledky včetně AMH, FSH, LH, estradiolu a štítné žlázy',
        hint: 'Vyžádejte si je na klinice nebo u gynekologa, který odběr indikoval. Vezměte i starší hodnoty, vývoj v čase je informace sám o sobě.',
        group: 'Vyšetření',
      },
      {
        id: 'kli-chk4-spermiogram',
        text: 'Spermiogram partnera, ideálně všechny, které máte',
        hint: 'Vydává ho laboratoř nebo andrologická ambulance. Pokud je starší než rok, zeptejte se, jestli má smysl ho zopakovat.',
        group: 'Vyšetření',
      },
      {
        id: 'kli-chk4-genetika',
        text: 'Genetická vyšetření obou partnerů, pokud proběhla',
        hint: 'Karyotyp, trombofilní mutace, případně nálezy z genetické poradny. Vydává genetické pracoviště, ne klinika.',
        group: 'Vyšetření',
      },
      {
        id: 'kli-chk4-zobrazovaci',
        text: 'Nálezy z hysteroskopie, laparoskopie a ultrazvukové zprávy',
        hint: 'Popis nálezu je důležitější než snímek. O obrazovou dokumentaci si můžete říct na nosiči.',
        group: 'Vyšetření',
      },
      {
        id: 'kli-chk4-propousteci',
        text: 'Propouštěcí a operační zprávy z hospitalizací',
        hint: 'Vydává oddělení, kde jste ležela. Patří sem i revize dutiny děložní nebo řešení mimoděložního těhotenství.',
        group: 'Vyšetření',
      },
      {
        id: 'kli-chk4-protokoly',
        text: 'Protokoly předchozích cyklů: typ protokolu, léky, dávky, délka stimulace',
        hint: 'Tohle je nejcennější dokument celé složky. Vyžádejte si ho výslovně, do běžného výpisu se často nedostane.',
        group: 'Cykly',
      },
      {
        id: 'kli-chk4-odber',
        text: 'Počty získaných a zralých vajíček u každého odběru',
        hint: 'Rozdíl mezi počtem odebraných a zralých vajíček je pro posouzení stimulace zásadní.',
        group: 'Cykly',
      },
      {
        id: 'kli-chk4-embryologie',
        text: 'Embryologické zprávy: způsob oplození, počty a stadia embryí, hodnocení kvality',
        hint: 'Žádejte je od embryologické laboratoře vašeho pracoviště. Uveďte, že chcete i vývoj po dnech, ne jen závěr.',
        group: 'Cykly',
      },
      {
        id: 'kli-chk4-kryo',
        text: 'Přehled zamražených embryí: počet, stadium, datum a místo uložení',
        hint: 'Zeptejte se rovnou i na to, do kdy máte uhrazené skladné a kdy se platí příště.',
        group: 'Cykly',
      },
      {
        id: 'kli-chk4-transfer',
        text: 'Zprávy o transferech: datum, den embrya, počet přenesených embryí, podpora luteální fáze',
        hint: 'Součástí bývá i tloušťka sliznice v den rozhodnutí. Pokud v zprávě chybí, zeptejte se na ni.',
        group: 'Cykly',
      },
      {
        id: 'kli-chk4-hcg',
        text: 'Výsledky hCG včetně opakovaných odběrů a jejich dat',
        hint: 'U ukončených těhotenství vezměte i ultrazvukové nálezy a zprávu o způsobu ukončení.',
        group: 'Cykly',
      },
      {
        id: 'kli-chk4-leky',
        text: 'Seznam všech léků a doplňků, které užíváte teď, s dávkami',
        hint: 'Vyfoťte krabičky včetně síly v miligramech. Nespoléhejte na to, že si názvy vybavíte v ordinaci.',
        group: 'Praktické',
      },
      {
        id: 'kli-chk4-otazky',
        text: 'Seznam otázek, seřazený od nejdůležitější',
        hint: 'Napište maximálně pět. Delší seznam se stejně nestihne a nejdůležitější otázka pak zůstane na konci.',
        group: 'Praktické',
      },
      {
        id: 'kli-chk4-zapis',
        text: 'Někdo, kdo si to s vámi zapíše, nebo souhlas s nahráváním',
        hint: 'Na nahrávání se vždy nejdřív zeptejte. Druhý pár uší je jednodušší a funguje stejně dobře.',
        group: 'Praktické',
        optional: true,
      },
    ],
  },

  {
    id: 'kli-zdravotnicka-dokumentace',
    kind: 'article',
    title: 'Jak si vyžádat zdravotnickou dokumentaci',
    excerpt:
      'Na co máte jako pacientka nárok, jak se o dokumentaci žádá, v jaké formě ji dostanete a jak dlouho se čeká.',
    minutes: 7,
    phases: ['repeated_failure', 'waiting_next_attempt', 'diagnostics', 'ivf_prep'],
    topics: ['klinika', 'vysledky'],
    level: 'essential',
    hero: 'pearl',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: [
      'Tenhle text není právní poradenství. Postup a lhůty se řídí platnou legislativou a vnitřním řádem pracoviště a mění se. Ověřte si aktuální podmínky přímo na klinice.',
    ],
    boost: 0.5,
    body: `## Co je vaše a co si můžete vzít

Zdravotnická dokumentace zůstává majetkem poskytovatele péče, který ji vede a archivuje. Informace v ní jsou ale o vás a pacient má k nim přístup.

V praxi to znamená, že si zpravidla můžete:

- do dokumentace nahlédnout,
- pořídit si z ní výpis nebo kopii,
- určit osobu, která do ní může nahlížet i bez vás,
- získat kopii obrazové dokumentace na nosiči.

Originál si neodnesete. Pracoviště ho musí archivovat po stanovenou dobu. To je v pořádku: pro druhý názor i pro pokračování jinde je kopie plnohodnotná.

## Žádost nemusíte zdůvodňovat

Tohle je nejčastější blok. Ženy odkládají žádost o dokumentaci týdny, protože nevědí, jak vysvětlit proč.

Nemusíte. Legitimní důvod je „chci mít své výsledky u sebe" a pracoviště po vás obvykle nemá důvod vyžadovat víc. Pokud se přesto někdo zeptá, stačí ta jedna věta.

## Jak se žádá, krok za krokem

1. **Zjistěte, kdo žádosti vyřizuje.** Zeptejte se na recepci nebo napište na obecný kontakt kliniky. Bývá to konkrétní osoba nebo administrativní oddělení, ne váš lékař.
2. **Zeptejte se na formulář.** Většina pracovišť má vlastní tiskopis. Když ho mají, použijte ho, vyřízení je pak rychlejší.
3. **Podejte žádost písemně.** I když vám nabídnou ústní domluvu, písemná forma vám dává datum a doklad. E-mail obvykle stačí, pracoviště si ale může vyžádat podepsanou žádost.
4. **Prokažte totožnost.** Při vyzvednutí budete potřebovat doklad. Pokud dokumentaci vyzvedává někdo jiný, řešte to předem: obvykle je potřeba plná moc.
5. **Napište přesně, co chcete.** Tady se rozhoduje o tom, jestli dostanete použitelný balík, nebo tři papíry.
6. **Nechte si potvrdit podání.** Kopie e-mailu nebo razítko na kopii žádosti. Když se termín protáhne, budete se mít o co opřít.

## Jak žádost formulovat, aby vám něco přišlo

Obecná žádost o „kopii dokumentace" často skončí u propouštěcích zpráv. Vypište položky jmenovitě:

> Žádám o kopii své zdravotnické dokumentace vedené na vašem pracovišti, konkrétně: protokoly všech absolvovaných cyklů včetně léků a dávek, embryologické zprávy, zprávy o transferech, laboratorní výsledky včetně hormonálních a hodnot hCG, ultrazvukové a operační nálezy a informaci o počtu a uložení kryokonzervovaných embryí.

Přidejte, v jaké formě to chcete: tištěně, elektronicky, nebo obojí. A jak si to chcete převzít: osobně, poštou, případně zabezpečeně elektronicky.

## V jaké formě a za kolik

Formu volí pracoviště v rámci svých možností, ale elektronickou kopii dnes zvládne většina. Za pořízení kopií a nosičů si poskytovatel může účtovat náklady podle svého ceníku. Zeptejte se předem, ať vás částka nepřekvapí u pultu.

Nahlédnutí do dokumentace v přítomnosti zdravotníka bývá bez poplatku.

## Jak dlouho to trvá

Lhůty pro vyřízení stanoví právní předpisy a upřesňuje je vnitřní řád pracoviště. Počítejte spíš v týdnech než ve dnech, zejména u starších cyklů, kde se dokumentace dohledává v archivu.

Praktická rada: nespoléhejte na to, že to stihnete za tři dny před konzultací. Zažádejte hned, jakmile o druhém názoru začnete uvažovat. Žádost o dokumentaci k ničemu nezavazuje a nic tím nespouštíte.

## Když to vázne

- Zavolejte a zeptejte se na stav žádosti. Uveďte datum podání.
- Požádejte o vyřízení písemně znovu, s odkazem na první žádost.
- Zeptejte se, kdo je na pracovišti odpovědný za vyřizování žádostí pacientů, a obraťte se přímo na něj.
- Pokud ani to nepomůže, má poskytovatel postup pro podávání stížností a je povinen vás o něm informovat.

Ve velké většině případů jde ale o administrativní zdržení, ne o odmítnutí. Zdvořilý dotaz s datem podání to obvykle vyřeší.

> Dokumentaci si nechte i v případě, že nikam neodcházíte. Vlastní složka s výsledky je užitečná při každé další konzultaci, u gynekologa i za pět let.`,
  },

  {
    id: 'kli-zamrazena-embrya-prevoz',
    kind: 'article',
    title: 'Zamražená embrya a přechod na jinou kliniku',
    excerpt:
      'Převoz embryí je specializovaný transport s vlastními podmínkami, dokumentací a časem. Vyřešte ho dřív, než cokoli ukončíte.',
    minutes: 10,
    phases: ['repeated_failure', 'waiting_next_attempt', 'ivf_prep', 'diagnostics'],
    topics: ['klinika', 'embryologie', 'finance'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: CENY,
    boost: 0.7,
    body: `## Nejdřív to nejdůležitější

Pokud máte na klinice zamražená embrya nebo vzorky a uvažujete o přechodu jinam, vyřešte jejich osud dřív, než cokoli ukončíte. Než vypovíte smlouvu, než přestanete platit skladné, než někomu řeknete, že odcházíte.

Není to formalita. Převoz kryokonzervovaného materiálu je samostatný proces s vlastními podmínkami, dokumentací, cenou a termínem. A neprobíhá všude stejně.

## Proč to není běžná zásilka

Embrya jsou uložena v kapalném dusíku při teplotě kolem minus 196 stupňů Celsia. Zahřátí, i krátké, materiál znehodnotí nevratně.

Transport proto probíhá ve speciálním přepravním kryokontejneru. Ten drží teplotu po omezenou dobu bez doplňování dusíku a bývá vybaven záznamem teploty po celou cestu. Kontejner se musí připravit předem a po cestě má svůj režim.

Z toho plyne všechno ostatní: nejde o službu, kterou si objednáte jako kurýra, a nejde o něco, co se domluví na počkání.

## Musí se na tom domluvit obě pracoviště

Převoz je vždy dohoda mezi odesílajícím a přijímajícím pracovištěm. Vy jste ten, kdo ho iniciuje a platí, ale technicky si materiál předávají laboratoře mezi sebou.

Prakticky to znamená:

- **Přijímající pracoviště musí převzetí předem odsouhlasit.** Ověřuje si, v jakém systému a na jakých nosičích jsou embrya uložena, jestli je umí uskladnit a jestli má volnou kapacitu.
- **Odesílající pracoviště má vlastní podmínky.** Některá provádějí transport sama, jiná spolupracují se specializovanou firmou, další umožňují jen konkrétní ověřené způsoby. Ne každé pracoviště povolí, aby si materiál převážel pacient.
- **Termín se domlouvá.** Musí sedět provoz obou laboratoří a dostupnost kontejneru.

Otázka, kterou položte úplně první, zní: převážíte embrya na jiná pracoviště a jakým způsobem to u vás probíhá?

## Dokumentace a souhlasy

Rozsah se liší, ale obvykle je potřeba:

- **Souhlas obou partnerů.** Embrya vznikla z gamet dvou lidí a nakládání s nimi souhlas obou zpravidla vyžaduje. Pokud se vaše partnerská situace od mražení změnila, řešte to nejdřív a přímo s klinikou.
- **Doklady totožnosti obou partnerů.**
- **Žádost o transport a předávací protokol.**
- **Identifikace vzorků**: počet, typ, stadium, způsob mražení, označení nosičů.
- **Kopie embryologické dokumentace** pro přijímající laboratoř.
- **Doklad o uhrazeném skladném.** Nedoplatky se obvykle musí vypořádat před vydáním materiálu.

Papírování si nechte potvrdit písemně. Ústní příslib „to zařídíme" se v tomhle procesu špatně dohledává.

## Kolik to stojí a jak dlouho to trvá

Cena je samostatná položka mimo běžné ceníky léčby. Orientačně se pohybuje v řádu jednotek až vyšších jednotek tisíc korun a závisí hlavně na vzdálenosti, na tom, kdo transport provádí, a na počtu nosičů. K tomu připočtěte administrativní poplatky obou pracovišť a případný poplatek za ukončení skladování.

Času si vyhraďte spíš týdny než dny. Než se sejde souhlas obou pracovišť, vaše dokumenty, volný termín laboratoří a dostupný kontejner, uteče doba, se kterou je potřeba počítat při plánování dalšího cyklu.

Přesné částky i lhůty si nechte potvrdit od obou pracovišť předem a písemně.

## Riziko a jak se k němu postavit

Transport prováděný odborně je rutinní a probíhá běžně, ale nulové riziko neexistuje u žádné manipulace s kryokonzervovaným materiálem. Zeptejte se přímo, jaké jsou zkušenosti pracoviště a jak se postupuje při problému.

To vás nemá odradit. Má vám to dát informaci, se kterou se rozhodujete.

## Varianta, na kterou se zapomíná

Embrya nemusíte převážet vůbec.

Můžete zůstat v péči nového pracoviště a na kryotransfer se vracet tam, kde embrya jsou. Není to elegantní a znamená to cestování v konkrétních dnech, ale je to legitimní a řada žen to tak dělá. Odpadá tím transport, jeho cena i riziko.

Druhá varianta: nechat embrya, kde jsou, dokud nevíte, jestli na novém pracovišti opravdu zůstáváte. Skladné běží dál, ale nic nevratného se neděje.

Proberte obojí s oběma pracovišti dřív, než se rozhodnete.

## Pořadí kroků, které se nevyplatí obrátit

1. Zjistit, kolik embryí máte, kde jsou a do kdy je uhrazené skladné.
2. Zeptat se nového pracoviště, jestli je umí převzít.
3. Zeptat se současného pracoviště na podmínky, cenu a způsob transportu.
4. Zajistit dokumentaci a souhlasy.
5. Domluvit termín a nechat si potvrdit převzetí písemně.
6. Až potom řešit ukončení skladování a vztahu se současným pracovištěm.

> Dokud nemáte písemné potvrzení, že nová laboratoř materiál převzala, nic neukončujte a skladné plaťte dál. Nezaplacené skladné se řídí podmínkami vaší smlouvy a jsou to podmínky, se kterými se nechcete seznamovat až ve chvíli, kdy je pozdě.`,
  },

  {
    id: 'kli-checklist-prevoz-embryi',
    kind: 'checklist',
    title: 'Převoz embryí nebo vzorků',
    excerpt:
      'Devět kroků ve správném pořadí, aby se transport nezasekl uprostřed a nic se neukončilo dřív, než má.',
    minutes: 4,
    phases: ['repeated_failure', 'waiting_next_attempt', 'ivf_prep'],
    topics: ['klinika', 'embryologie', 'finance'],
    level: 'essential',
    hero: 'dusk',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.6,
    body: `## Jak to použít

Body jsou seřazené záměrně. Poslední krok je poslední z konkrétního důvodu: dokud není materiál potvrzeně převzatý, neukončujte se současným pracovištěm nic.

Počítejte s tím, že mezi jednotlivými kroky bude čekání. Většina zdržení nevzniká na vaší straně, ale při domlouvání termínu mezi dvěma laboratořemi.

Vše, co si domluvíte telefonicky, si nechte potvrdit e-mailem.`,
    checklist: [
      {
        id: 'kli-chk7-inventura',
        text: 'Zjistit na současné klinice, kolik embryí nebo vzorků mám a v jakém stavu',
        hint: 'Ptejte se na počet, stadium, datum a způsob mražení a označení nosičů. Nová laboratoř to bude chtít vědět.',
        group: 'Než začnete',
      },
      {
        id: 'kli-chk7-skladne',
        text: 'Ověřit, do kdy je uhrazené skladné, a zaplatit ho i na další období',
        hint: 'Nedoplatek obvykle blokuje vydání materiálu. Plaťte dál i během domlouvání transportu.',
        group: 'Než začnete',
      },
      {
        id: 'kli-chk7-nova-klinika',
        text: 'Zeptat se nové kliniky, jestli materiál umí převzít a má volnou kapacitu',
        hint: 'Uveďte přesně, v čem a jak jsou embrya uložena. Bez toho vám nikdo nemůže odpovědět závazně.',
        group: 'Domluva pracovišť',
      },
      {
        id: 'kli-chk7-podminky',
        text: 'Zjistit na současné klinice podmínky, cenu a způsob transportu',
        hint: 'Klíčová otázka: provádíte transport sami, přes firmu, nebo jen konkrétním schváleným způsobem?',
        group: 'Domluva pracovišť',
      },
      {
        id: 'kli-chk7-kdo-veze',
        text: 'Ověřit, kdo transport fyzicky provádí a čím',
        hint: 'Ptejte se na přepravní kryokontejner a na to, jestli se zaznamenává teplota po celou cestu.',
        group: 'Domluva pracovišť',
      },
      {
        id: 'kli-chk7-dokumenty',
        text: 'Sehnat požadovanou dokumentaci a souhlasy obou partnerů',
        hint: 'Obvykle žádost o transport, souhlasy obou partnerů, doklady totožnosti a kopie embryologických zpráv.',
        group: 'Papíry',
      },
      {
        id: 'kli-chk7-cena-pisemne',
        text: 'Nechat si celkovou cenu potvrdit písemně od obou pracovišť',
        hint: 'Připočtěte administrativní poplatky a případný poplatek za ukončení skladování.',
        group: 'Papíry',
      },
      {
        id: 'kli-chk7-termin',
        text: 'Domluvit konkrétní termín transportu a zapsat si kontakt na odpovědnou osobu',
        hint: 'Jméno a přímý kontakt na obou stranách vám ušetří dny, kdyby se něco zdrželo.',
        group: 'Realizace',
      },
      {
        id: 'kli-chk7-potvrzeni',
        text: 'Vyžádat si písemné potvrzení, že nová laboratoř materiál převzala',
        hint: 'Předávací protokol s počtem a označením nosičů. Teprve tímhle dokumentem je převoz hotový.',
        group: 'Realizace',
      },
      {
        id: 'kli-chk7-ukonceni',
        text: 'Až po potvrzení řešit ukončení skladování na původním pracovišti',
        hint: 'Zeptejte se, jestli je potřeba smlouvu ukončit písemně, ať vám dál nenabíhá skladné.',
        group: 'Realizace',
      },
    ],
  },

  {
    id: 'kli-otazky-pro-novou-kliniku',
    kind: 'article',
    title: 'Otázky pro novou kliniku',
    excerpt:
      'Konkrétní otázky na konzultaci a hlavně to, jak poznat, že odpověď byla dobrá.',
    minutes: 8,
    phases: ['repeated_failure', 'waiting_next_attempt', 'ivf_prep', 'diagnostics'],
    topics: ['klinika', 'vysledky', 'stimulace'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Jak s tímhle seznamem pracovat

Nevytiskněte si všechny otázky a nečtěte je popořadě. Konzultace není výslech a času je málo.

Vyberte tři až pět otázek, které jsou pro vás teď nejdůležitější, a napište si je na jednu stránku. Zbytek nechte pro případ, že zbude čas.

U každé otázky si po odpovědi položte tichou kontrolní otázku: mluvil lékař o mně, nebo obecně? Odpověď, ve které zazní čísla z vaší dokumentace, je jiná kvalita než odpověď o tom, jak se to dělá.

## Otázky o dosavadní léčbě

**Proč byl u mě podle vás zvolen tenhle protokol?**
Nechte si vysvětlit logiku předchozího vedení. Dobrá odpověď ji umí zrekonstruovat, i když by lékař volil jinak. Odpověď, která předchozí péči jen shodí, vám o vaší situaci neřekne nic.

**Co byste na mém místě udělali jinak a proč?**
Nejdůležitější otázka celé konzultace. Sledujte, jestli se odpověď opírá o konkrétní údaje: počet zralých vajíček, reakci na dávku, vývoj embryí po dnech, tloušťku sliznice.

**Vidíte v mé dokumentaci něco, co podle vás zůstalo nedořešené?**
Otevřená otázka, která často přinese to nejcennější.

## Otázky o dalších vyšetřeních

**Jaká další vyšetření dávají v mé situaci smysl?**
A hned doplňující: co konkrétně by se změnilo, kdyby vyšla pozitivně? Vyšetření, jehož výsledek nezmění postup, má omezenou hodnotu.

**Jaká vyšetření naopak nedoporučujete a proč?**
Odpověď na tuhle otázku vám o pracovišti řekne často víc než ta předchozí.

**Kolik to bude stát a co z toho může být hrazené?**
Ptejte se předem a na celý balík, ne po jednotlivostech.

## Otázky o výsledcích

**Jaké máte výsledky u mé indikace a v mé věkové skupině?**

Tady je potřeba opatrnost na obě strany. Úspěšnost se dá počítat mnoha způsoby a čísla mezi pracovišti se srovnávají obtížně. Doptejte se proto:

- Počítáte úspěšnost na zahájený cyklus, na odběr, nebo na transfer?
- Je to podíl klinických těhotenství, nebo porodů?
- Kolik pacientek v mé skupině ročně léčíte?

Malé číslo ve statistice znamená velký rozptyl. Pracoviště, které vám na tyhle otázky odpoví střízlivě a přizná omezení dat, je důvěryhodnější než to, které nabídne jedno vysoké procento bez kontextu.

**Kdy byste mi řekli, že tenhle postup nemá smysl opakovat?**
Otázka, kterou si ženy netroufají položit. Přitom právě ochota mluvit i o hranicích léčby hodně vypovídá.

## Otázky o provozu

**Jak u vás probíhá komunikace mimo ordinační hodiny?**
Konkrétně: existuje telefon, který někdo večer zvedne? Kdo na něm je? Co když v pátek večer začnu krvácet nebo se mi udělá špatně po odběru?

**Kdo mě povede a uvidím pokaždé stejného lékaře?**
Někde je kontinuita pravidlem, jinde vás vede tým. Obojí funguje, ale je dobré to vědět předem.

**Kdo mi odpovídá na e-maily a do kdy?**
Realistická odpověď o dvou pracovních dnech je lepší než příslib, který se nedodrží.

**Jak rychle se dostanu na termín, kdyby se cyklus zrušil a chtěla jsem začít znovu?**

## Otázky o embryích a mražení

**Do kolikátého dne kultivujete embrya a podle čeho se rozhodujete?**

**Jak u vás probíhá mražení a co se děje s embryi, která zbudou?**

**Umíte převzít embrya z jiného pracoviště a co to obnáší?**
Pokud máte zamražená embrya jinde, tuhle otázku položte hned na první konzultaci, ne až budete rozhodnutá.

## Na závěr jedna věta

Než odejdete, řekněte: **můžete mi shrnout, na čem jsme se domluvili?**

Shrnutí odhalí nedorozumění dřív, než z něj vznikne měsíc zmatku. A pokud si závěr necháte poslat písemně, budete se k němu moct za dva týdny vrátit, až vám vypadne z hlavy všechno kromě pocitu.`,
  },

  {
    id: 'kli-zmena-uvnitr-kliniky',
    kind: 'article',
    title: 'Když chci zůstat, ale chci to změnit',
    excerpt:
      'Jak požádat o jiného lékaře, jak si vyjednat delší konzultaci a jak se ptát, abyste odpověď opravdu dostala.',
    minutes: 8,
    phases: ['repeated_failure', 'waiting_next_attempt', 'ivf_prep', 'diagnostics'],
    topics: ['klinika', 'psychika', 'komunita'],
    level: 'essential',
    hero: 'blush',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    body: `## Změna nemusí znamenat odchod

Odejít jinam je velký krok. Znamená novou administrativu, nová vstupní vyšetření, možná převoz embryí a nové čekání na termíny. Než ho uděláte, stojí za to zkusit menší zásah, který často vyřeší to podstatné: pocit, že se v léčbě neztrácíte.

Většina toho, co ženám na péči chybí, se totiž netýká odbornosti. Týká se času, srozumitelnosti a toho, jestli se s nimi mluví.

## Jak požádat o jiného lékaře

Tohle je běžná věc a na klinikách se to děje. Nemusí za tím být konflikt, stačí, že vám s někým lépe mluví.

Praktický postup:

1. **Zavolejte na recepci nebo napište na obecný kontakt kliniky.** Neřešte to s lékařem, u kterého jste teď. Nemusíte, a je to tak pro obě strany jednodušší.
2. **Formulujte to jako žádost, ne jako stížnost.** Osvědčená věta: chtěla bych se objednat k doktorce X, vyhovovalo by mi pokračovat s ní.
3. **Nemusíte to zdůvodňovat.** Když se zeptají, stačí: potřebuju víc prostoru na otázky.
4. **Zeptejte se, jak se předá dokumentace.** Uvnitř jednoho pracoviště to bývá automatické, ale ověřte si to.
5. **Počítejte s čekáním na termín.** Oblíbení lékaři jsou obsazení. Zeptejte se, jestli chcete být vedená v pořadníku na dřívější termín.

Když nevíte, koho si vybrat, zeptejte se přímo: kdo z lékařů se u vás nejvíc věnuje opakovanému neúspěchu, nebo mé konkrétní situaci?

## Jak si vyžádat delší konzultaci

Běžná kontrola má krátký a pevný formát. Otázky do ní nepatří ne proto, že by nebyly vítané, ale proto, že se tam nevejdou.

Řešení je jednoduché a málo se používá: požádejte o samostatný konzultační termín.

Řekněte při objednávání:

> Chtěla bych se objednat na konzultaci nad dosavadní léčbou, ne na kontrolu. Mám připravené otázky a potřebuju na to víc času.

Doplňte:

- Jestli je taková konzultace zpoplatněná a kolik stojí. Často stojí, a často to za to stojí.
- Jestli může přijít partner.
- Jestli lékař dostane vaše otázky předem.

Poslední bod je nejúčinnější. Tři až pět očíslovaných otázek poslaných dva dny dopředu změní průběh setkání víc než cokoli jiného, protože lékař přijde připravený.

## Jak se ptát, abyste odpověď opravdu dostala

Obecná otázka dostane obecnou odpověď. Nejde o to být důrazná, jde o to být konkrétní.

**Ptejte se na čísla, ne na dojmy.**
Místo „bylo to dobré?" zkuste: kolik vajíček bylo zralých a kolik se jich oplodnilo?

**Ptejte se na důsledek, ne na fakt.**
Doplňující otázka, která funguje vždycky: co to konkrétně znamená pro můj další postup?

**Ověřujte si porozumění nahlas.**
Rozumím tomu správně, že příště zvýšíme dávku a mrazíme všechna embrya? Tahle věta odhalí nedorozumění na místě.

**Ptejte se na alternativy.**
Zvažoval jste ještě jinou možnost a proč jste zvolil tuhle?

**Když nerozumíte, řekněte to.**
Tomuhle jsem nerozuměla, můžete mi to říct ještě jednou jinak? Není to selhání. Odborný jazyk je zkratka, kterou lékař používá desetkrát denně, a často si neuvědomí, že nesedí.

**Ptejte se na konec, ne jen na začátek.**
Co bude, když tenhle cyklus nevyjde, a kdy se o tom budeme bavit?

## Praktické drobnosti, které fungují

- Přijďte s otázkami napsanými na papíře nebo v telefonu. V ordinaci vypadnou z hlavy i ty nejdůležitější.
- Vezměte s sebou partnera, kamarádku nebo někoho, kdo si to zapíše. Vy budete mít plnou hlavu.
- Na konci požádejte o shrnutí: můžete mi shrnout, na čem jsme se domluvili?
- Zeptejte se, jestli závěr může být zapsaný ve zprávě, kterou dostanete.
- Zjistěte, kdo je vaše kontaktní osoba mezi kontrolami a kudy se na ni dostanete.

## Když ani to nepomůže

Pokud jste zkusila jiného lékaře, delší konzultaci i písemné otázky a nic z toho nezměnilo, jak se v péči cítíte, je to informace. Ne o tom, že je pracoviště špatné, ale o tom, že vám nesedí.

To je legitimní důvod hledat jinde a nemusíte ho nikomu obhajovat.

Každý poskytovatel má také postup pro podávání podnětů a stížností a je povinen vás o něm informovat. Věcně podaná zpětná vazba není útok a někdy vede k řešení, o kterém byste jinak nevěděla.

> Ať se rozhodnete jakkoli, nejde o loajalitu. Jde o to, abyste rozuměla tomu, co se s vámi děje, a měla u toho slovo.`,
  },
]

export const pack: ContentPack = { items }
