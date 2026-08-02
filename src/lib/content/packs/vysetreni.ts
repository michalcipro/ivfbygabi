import type { ContentItem, ContentPack } from '../types'

/**
 * Jaká vyšetření mohou být relevantní.
 *
 * Sekce, kterou ženy hledají nejčastěji a která bývá nejhůř vysvětlená.
 * Každé vyšetření má vlastní krátký text se stejnou kostrou, aby se v tom
 * dalo číst na přeskáčku. Člověk dostane papír se zkratkou a chce vědět
 * jen tohle jedno.
 *
 * Dvě pravidla, která tenhle balík drží pohromadě:
 * 1. Nikde nestojí, že tohle vyšetření musí podstoupit každá žena nebo
 *    každý pár. Vyšetřovací plán skládá lékař podle konkrétní situace.
 * 2. Nikde nejsou konkrétní referenční meze. Hodnoty se liší podle
 *    laboratoře, věku a kontextu a výklad patří lékaři, ne aplikaci.
 */

const REVIEW = 'Odborně garantováno lékařem reprodukční medicíny.'

const items: ContentItem[] = [
  // --- (A) Přehledové články -------------------------------------------
  {
    id: 'vys-prehled-zena',
    kind: 'article',
    title: 'Vyšetření u ženy: jak vzniká váš vyšetřovací plán',
    excerpt:
      'Proč dostane každá žena jiný seznam odběrů a proč se výsledky nedají číst bez lékaře, který zná vaši anamnézu.',
    minutes: 6,
    phases: ['diagnostics'],
    topics: ['vysledky', 'hormony', 'klinika'],
    level: 'essential',
    hero: 'sky',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy', 'Česká gynekologická a porodnická společnost ČLS JEP'],
    publishedOn: '2026-08-02',
    boost: 0.9,
    body: `## Neexistuje jeden seznam pro všechny

Když se dvě ženy ve stejné čekárně porovnají, co mají na žádance, často zjistí, že se to skoro nepřekrývá. Nejde o chybu ani o to, že by jedna klinika byla důkladnější. Vyšetřovací plán se skládá individuálně a řídí se tím, co už je známo.

Do rozhodování obvykle vstupuje:

- jak dlouho se snažíte a jak vypadal dosavadní průběh,
- váš věk,
- jak pravidelný je váš cyklus,
- předchozí těhotenství, ztráty, operace v malé pánvi nebo záněty,
- co ukázala předchozí vyšetření, včetně těch, která máte v šuplíku roky,
- výsledky u partnera. Mužský faktor se podílí na velké části případů a mění směr vyšetřování u obou,
- rodinná anamnéza.

Proto se u některých žen začíná několika odběry a ultrazvukem, zatímco jinde se rovnou přidávají specializovaná vyšetření. **Žádné z vyšetření popsaných v této sekci není povinné pro každou ženu.** U každého platí, že může být součástí plánu, pokud to lékař považuje za smysluplné.

## Proč záleží na dni cyklu

Část hormonálních hodnot dává smysl jen v určité fázi cyklu. FSH, LH a estradiol se běžně odebírají na začátku cyklu, progesteron naopak v druhé polovině. AMH se dá odebrat prakticky kdykoli.

Když se odběr udělá v jiný den, výsledek není „špatný", jen neznamená to, co se od něj čekalo. Proto vám sestra volá kvůli termínu a proto má smysl hlásit, když menstruace přijde jindy, než jste čekala.

## Referenční meze nejsou hranice normálnosti

V této sekci záměrně nenajdete žádná konkrétní čísla. Není to opomenutí.

- Každá laboratoř používá vlastní metodu a vlastní referenční rozmezí. Stejný vzorek může vyjít v jiných jednotkách i s jinou hranicí.
- Co je očekávatelné u ženy ve třiceti, je jiné než v pětačtyřiceti.
- Jedna hodnota se skoro nikdy nečte samostatně. Čte se spolu s ostatními, s ultrazvukem a s vaší anamnézou.
- Hodnota mimo rozmezí neznamená automaticky diagnózu a hodnota uvnitř rozmezí nezaručuje nic.

**Výklad výsledků patří lékaři, který zná celý váš obraz.** Aplikace vám pomůže rozumět tomu, co se měřilo a proč, ale neřekne vám, jestli je vaše číslo v pořádku.

## Co vyšetření nedokáže

Ani kompletní sada výsledků nedá odpověď na otázku „jaká je moje šance". Vyšetření popisují, co je vidět a měřitelné. U části párů se přes veškerou snahu žádná jednoznačná příčina nenajde. Tomu se říká nevysvětlená neplodnost a není to selhání vyšetřujícího lékaře.

## Než přijdete pro výsledky

1. Napište si předem tři otázky, které vás nejvíc pálí.
2. Ptejte se, co konkrétně z výsledku plyne pro další postup. Víc než na samotné číslo.
3. Ptejte se, jestli se má něco opakovat a kdy.
4. Poznamenejte si laboratoř a jednotky. Při srovnávání s jiným pracovištěm to bývá klíčové.

> Tento text popisuje obvyklou praxi a nenahrazuje konzultaci. Rozsah vyšetření i načasování se mezi pracovišti liší. Vždy se řiďte tím, co vám řekne vaše klinika.`,
  },
  {
    id: 'vys-prehled-partner',
    kind: 'article',
    title: 'Vyšetření u partnera: proč se nečeká, až se vyšetří žena',
    excerpt:
      'Mužská část vyšetření bývá rychlá a levná, a přesto se často odkládá. Co se zjišťuje, proč jeden vzorek nestačí a co z výsledku plyne.',
    minutes: 6,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.8,
    body: `## Vyšetřuje se pár, ne žena

Na mužském faktoru se podílí zhruba polovina případů, ať už samostatně, nebo v kombinaci. Přesto se pořád stává, že žena absolvuje několik kol odběrů a zákroků dřív, než někdo poprosí partnera o vzorek.

Základní vyšetření u muže bývá jednoduché, rychlé a v porovnání se zbytkem diagnostiky levné. Většinou se proto zařazuje hned na začátek, ne proto, že by se čekal problém, ale proto, že jeho výsledek mění, co má smysl dělat dál.

## Z čeho se plán skládá

Vyšetření u partnera se skládá podobně individuálně jako u ženy. Roli hrají:

- výsledek základního rozboru ejakulátu a jeho opakování,
- anamnéza: operace v tříslech nebo na varlatech, úrazy, nesestouplá varlata v dětství, prodělané infekce,
- horečnaté onemocnění v posledních měsících. Tvorba spermií trvá zhruba dva a půl až tři měsíce, takže chřipka z jara může ovlivnit vzorek z léta,
- léky, doplňky, anabolika, kouření a alkohol,
- profesní zátěž teplem nebo chemikáliemi,
- předchozí děti nebo těhotenství v jiném vztahu.

Podle toho se může přidat vyšetření u urologa nebo androloga, hormonální odběry, ultrazvuk šourku, genetické vyšetření nebo test fragmentace DNA spermií. **Nic z toho není součástí každého vyšetřovacího plánu.**

## Jeden vzorek nerozhoduje

Rozbor ejakulátu má přirozeně vysokou proměnlivost. Stejný muž může mít během několika týdnů výrazně odlišné výsledky podle délky abstinence, únavy, nemoci nebo prostě náhody.

Proto se závěr obvykle nedělá z jednoho vzorku. Pokud první výsledek vyjde jinak, než se čekalo, bývá dalším krokem opakování s odstupem, ne okamžitá změna léčebného plánu.

## Referenční hodnoty nejsou hranice mezi plodným a neplodným

I tady platí to samé co u ženy: **konkrétní meze v této sekci nenajdete.** Laboratoře používají různé metody a hodnocení, referenční hodnoty vycházejí ze statistiky populace mužů, kterým se počalo dítě, a nejsou to hranice, za kterými začíná neplodnost.

Muži s výsledky pod referenčním rozmezím počali dítě přirozeně a muži s výsledky v rozmezí měli obtíže. Číslo samo o sobě neurčuje, co se stane. Výklad patří lékaři.

## Jak o tom mluvit doma

Pro spoustu mužů je tohle vyšetření nepříjemné víc, než dávají najevo. Pomáhá pár konkrétních věcí:

- domluvit se, že jde o rutinní krok, ne o test mužství,
- zjistit si předem podmínky odběru, aby se nemuselo nic řešit na místě,
- jít na výsledky společně,
- neposílat partnera do diskusních fór.

> Tento text popisuje obvyklý postup. Rozsah a pořadí vyšetření určuje lékař podle konkrétní situace. Proberte je se svou klinikou.`,
  },
  {
    id: 'vys-prehled-dalsi',
    kind: 'article',
    title: 'Další odborná vyšetření: kdy se rozšiřuje kruh',
    excerpt:
      'Trombofilie, imunologie, endokrinologie. Kdy má rozšířené vyšetřování smysl, kde jsou důkazy slabé a jak poznat, že se testuje jen proto, aby se testovalo.',
    minutes: 6,
    phases: ['diagnostics'],
    topics: ['vysledky', 'hormony', 'klinika'],
    level: 'deep',
    hero: 'linen',
    author: 'Tým Bloomia',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.6,
    body: `## Kdy se jde za základní sadu

Základní vyšetřovací sada u ženy a u partnera pokryje většinu situací. Kruh se rozšiřuje tehdy, když k tomu je konkrétní důvod. Nejčastěji:

- opakované neúspěšné transfery kvalitních embryí,
- opakované ztráty těhotenství,
- osobní nebo rodinná anamnéza trombózy,
- nález, který ukazuje jiným směrem (například na štítnou žlázu nebo na poruchu metabolismu),
- nesoulad mezi tím, co se čeká, a tím, co se děje.

Rozšířené vyšetření není odměna za vytrvalost ani vyšší úroveň péče. Je to nástroj na konkrétní otázku. Když otázka není položená, výsledek nemá kam zapadnout.

## Kde jsou důkazy slabé: a je poctivé to říct

U části rozšířených vyšetření není důkazní podklad silný. Platí to zejména pro:

- **imunologické testy zaměřené na plodnost.** Metodika se mezi laboratořemi liší, hodnoty z krve nemusí odpovídat situaci v děloze a přínos léčby vedené podle těchto testů není spolehlivě doložený. Odborné společnosti k nim proto přistupují zdrženlivě.
- **plošné vyšetřování trombofilií** u žen bez osobní nebo rodinné anamnézy trombózy. Nález sám o sobě nemusí znamenat, že je příčinou obtíží.
- **testy fragmentace DNA spermií.** Souvislost s některými výsledky léčby je popsaná, ale metody i hraniční hodnoty se liší a není jasně doložené, že postup vedený podle tohoto výsledku zvyšuje šanci na narozené dítě.

To neznamená, že jsou tato vyšetření zbytečná vždy. Znamená to, že **u nich má smysl se zeptat, co konkrétně se změní podle výsledku**: a když odpověď zní „nic", je to důležitá informace.

## Referenční meze ani tady nečtěte samy

Rozšířená vyšetření produkují nejvíc čísel a nejmíň jistoty. Konkrétní meze v této sekci proto nenajdete: hodnoty se liší podle laboratoře, metody, věku a kontextu a jejich výklad patří lékaři, často z jiného oboru. Hematologovi, endokrinologovi, klinickému genetikovi.

Zvlášť tady platí, že hledání vlastního výsledku v diskusích vede k závěrům, které s vaší situací nemusí mít nic společného.

## Cena, čas a psychická daň

Rozšířená vyšetření bývají často hrazena jen částečně a čekací doby na specialisty jsou dlouhé. K tomu se přidává něco, co se nepočítá v korunách: každé další testování prodlužuje období nejistoty a udržuje pozornost u hledání viníka.

Než přidáte další test, zeptejte se:

1. Jakou otázku tímhle vyšetřením odpovídáme?
2. Co se stane, když vyjde takto. A co, když opačně?
3. Existuje pro tenhle postup dostatečný důkaz?
4. Kolik to stojí a jak dlouho se čeká?
5. Dá se mezitím pokračovat, nebo se čeká na výsledek?

## Kdy nečekat na plán

Diagnostika je klidová část cesty, ale ne vždy. **Kontaktujte svou kliniku** při horečce, silné bolesti v podbřišku nebo silném krvácení. **Vyhledejte akutní lékařskou pomoc** při náhlé dušnosti, bolesti na hrudi nebo při bolesti, otoku a zarudnutí lýtka.

> Tento text má informativní charakter. O rozsahu vyšetření rozhoduje lékař podle vaší situace. Proberte ho se svou klinikou.`,
  },

  // --- (B) ŽENA ---------------------------------------------------------
  {
    id: 'vys-amh',
    kind: 'article',
    title: 'AMH: co říká a co neříká',
    excerpt:
      'Hodnota, ze které se dělá nejvíc unáhlených závěrů. AMH odhaduje zásobu, ne kvalitu a ne vaši šanci.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'champagne',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    boost: 0.7,
    body: `## Proč se dělá

AMH (anti-Müllerův hormon) tvoří malé rostoucí folikuly ve vaječnících. Množství v krvi proto zhruba odpovídá tomu, kolik takových folikulů je k dispozici. Používá se jako orientační ukazatel ovariální rezervy a jako pomůcka při plánování stimulace.

## Co může ukázat

- Orientaci v tom, kolik vajíček by při stimulaci mohlo dozrát.
- Podklad pro volbu protokolu a dávky léků. Nižší hodnota vede často k jinému postupu než vysoká.
- Upozornění na riziko silné odpovědi na stimulaci, které bývá spojováno s vyšším AMH.

Co AMH neukazuje: **kvalitu vajíček ani vaši šanci otěhotnět.** Nízká hodnota neznamená, že otěhotnět nemůžete, a vysoká hodnota nic negarantuje. Výsledek se vždy čte spolu s věkem, ultrazvukem a zbytkem obrazu.

## Kdy může být relevantní

Odběr AMH může být součástí vyšetření, pokud se plánuje stimulace, pokud je podezření na sníženou rezervu, po operaci vaječníků, při nepravidelném cyklu nebo když zvažujete zamrazení vajíček. Záleží na anamnéze a doporučení lékaře. Automaticky se nedělá u každé ženy.

## Jak vyšetření probíhá

Běžný odběr krve ze žíly. Na rozdíl od většiny ostatních hormonů obvykle nezáleží na dni cyklu a většinou není potřeba být nalačno. Řekněte předem, jestli užíváte hormonální antikoncepci nebo jiné hormonální přípravky. Mohou hodnotu ovlivnit a lékař s tím při výkladu počítá.

Výsledek bývá za několik dní. Různé laboratoře používají různé metody i jednotky, takže dvě čísla z různých pracovišť nejdou porovnat přímo.

## Na co se zeptat lékaře

1. Co z téhle hodnoty plyne pro plán stimulace?
2. Jak ji čtete spolu s mým věkem a počtem antrálních folikulů?
3. Má smysl odběr opakovat, a kdy?
4. Ovlivnily výsledek léky, které teď užívám?
5. Mění tenhle výsledek načasování dalších kroků?

> Tento text nenahrazuje výklad výsledku lékařem. Referenční rozmezí se liší podle laboratoře a věku a hodnota sama o sobě není diagnózou.`,
  },
  {
    id: 'vys-fsh',
    kind: 'article',
    title: 'FSH: hormon, který rozjíždí cyklus',
    excerpt:
      'Odebírá se na začátku cyklu a čte se vždy spolu s estradiolem. Samostatné číslo z jednoho odběru vypovídá málo.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

FSH (folikuly stimulující hormon) vzniká v podvěsku mozkovém a pobízí vaječníky k růstu folikulů. Jeho hladina na začátku cyklu ukazuje, jak silný signál tělo potřebuje posílat. A nepřímo tedy něco o tom, jak vaječníky odpovídají.

## Co může ukázat

- Orientaci v ovariální rezervě, zejména ve spojení s estradiolem a s ultrazvukem.
- Podnět k dalšímu vyšetření, pokud hodnoty neodpovídají tomu, co se u vás čeká.
- Informaci o řízení cyklu z centrální úrovně. Nízké hodnoty FSH i LH mohou vést k vyšetření podvěsku mozkového.

FSH se **nedá číst samostatně.** Vysoký estradiol může FSH uměle snížit, takže obě hodnoty se hodnotí společně. Hodnota se navíc mezi cykly mění, takže jeden odběr nebývá konečné slovo.

## Kdy může být relevantní

Odběr FSH může být součástí základní hormonální sady při vyšetření neplodnosti, při nepravidelném nebo vynechávajícím cyklu, před plánováním stimulace nebo když je podezření na sníženou rezervu. Záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Odběr krve ze žíly, obvykle na začátku cyklu. Nejčastěji mezi druhým a pátým dnem, přesný den určí vaše klinika. První den cyklu je den, kdy začne plné krvácení, ne špinění.

Odběr bývá ráno a spolu s ním se často odebírá estradiol, LH a další hormony, aby se výsledky daly číst v celku. Hormonální antikoncepce a některé léky výsledek ovlivňují. Nahlaste, co užíváte.

## Na co se zeptat lékaře

1. Ve který den cyklu mám přijít a co dělat, když menstruace přijde o víkendu?
2. Jak spolu vychází FSH a estradiol v mém případě?
3. Znamená tenhle výsledek změnu v plánu?
4. Má se odběr opakovat v dalším cyklu?
5. Které z mých léků mohly hodnotu ovlivnit?

> Referenční meze se liší podle laboratoře a fáze cyklu. Výklad výsledku patří lékaři, který zná celý váš obraz.`,
  },
  {
    id: 'vys-lh',
    kind: 'article',
    title: 'LH: hormon, který spouští ovulaci',
    excerpt:
      'Měří se na začátku cyklu i v jeho průběhu. Ukazuje, jak je řízená ovulace. A proč se doma testuje z moči.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'blush',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

LH (luteinizační hormon) vzniká stejně jako FSH v podvěsku mozkovém. Jeho prudký vzestup uprostřed cyklu spouští ovulaci a mění folikul na žluté tělísko, které pak tvoří progesteron. Hodnota LH tedy vypovídá o řízení cyklu.

## Co může ukázat

- Jestli tělo posílá vaječníkům signál k ovulaci a v jakém poměru k FSH.
- Podklad pro vyhodnocení podezření na syndrom polycystických vaječníků, kde bývá poměr LH a FSH posunutý. Sám o sobě to ale není důkaz. Diagnóza se opírá o víc nálezů dohromady.
- V průběhu cyklu nebo stimulace načasování. Vzestup LH mění plán dalších kroků.

## Kdy může být relevantní

Odběr LH může být součástí základní hormonální sady, dále při nepravidelném cyklu, při podezření na poruchu ovulace nebo při sledování cyklu před inseminací či transferem. Nedělá se automaticky u každé ženy. Záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Odběr krve ze žíly. Na začátku cyklu se obvykle odebírá spolu s FSH a estradiolem, uprostřed cyklu se může opakovat kvůli načasování. LH kolísá v pulzech během dne, proto se čas odběru dodržuje.

Doma se LH dá orientačně sledovat ovulačními testy z moči. Ty ukazují vzestup, ale ne jeho výšku a ne to, jestli ovulace opravdu proběhla. Pokud používáte ovulační testy, řekněte to lékaři. Jejich výsledky mu pomůžou při čtení laboratorních hodnot.

## Na co se zeptat lékaře

1. Ve který den cyklu mám na odběr přijít?
2. Jak čtete můj poměr LH a FSH?
3. Mám doma používat ovulační testy, a jak si je zaznamenávat?
4. Znamená tenhle výsledek, že ovulace proběhla?
5. Mění to plán dalších vyšetření?

> Hodnoty se liší podle laboratoře a fáze cyklu a nedají se číst samostatně. Výklad patří lékaři.`,
  },
  {
    id: 'vys-estradiol',
    kind: 'article',
    title: 'Estradiol: hormon rostoucích folikulů',
    excerpt:
      'Měří se na začátku cyklu, během stimulace i před transferem. Jedno číslo bez kontextu neznamená skoro nic.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'sage',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Estradiol je hlavní ženský pohlavní hormon a tvoří ho rostoucí folikuly. Jeho hladina proto zhruba kopíruje to, co se ve vaječnících děje. A zároveň ovlivňuje růst děložní sliznice.

## Co může ukázat

- Na začátku cyklu doplňuje výklad FSH. Vyšší estradiol může FSH snížit, a tím zamaskovat obraz, který by jinak vypadal jinak.
- Během stimulace se sleduje spolu s ultrazvukem, aby bylo vidět, jak vaječníky odpovídají a jak se blíží vhodná doba pro další krok.
- Před transferem může být součástí hodnocení přípravy sliznice.
- Rychlý vzestup během stimulace patří mezi věci, které lékař sleduje kvůli riziku nadměrné odpovědi vaječníků.

## Kdy může být relevantní

Odběr estradiolu může být součástí základní hormonální sady, sledování stimulovaného cyklu nebo přípravy na kryotransfer. O tom, jestli a kdy se odebírá, rozhoduje lékař podle vaší situace.

## Jak vyšetření probíhá

Odběr krve ze žíly, obvykle ráno. Na začátku cyklu se odebírá spolu s FSH a LH. Během stimulace se opakuje častěji. Někdy obden, někdy denně, podle protokolu a podle toho, co ukazuje ultrazvuk.

Výsledky bývají tentýž den, protože podle nich se upravuje dávkování. Jednotky se mezi laboratořemi liší, takže hodnoty z různých pracovišť nejde srovnávat přímo.

## Na co se zeptat lékaře

1. Jak čtete estradiol spolu s mým FSH?
2. Co u mě sledujete během stimulace. Hodnotu, nebo spíš její vývoj?
3. Kdy dostanu výsledek a jak se dozvím případnou změnu dávky?
4. Znamená rychlý vzestup, že se má něco změnit?
5. Ovlivňuje tenhle výsledek termín dalšího kroku?

> Referenční rozmezí závisí na laboratoři i na fázi cyklu a hodnota se nikdy nečte samostatně. Výklad patří lékaři.`,
  },
  {
    id: 'vys-progesteron',
    kind: 'article',
    title: 'Progesteron: potvrzení, že ovulace proběhla',
    excerpt:
      'Odebírá se v druhé polovině cyklu a načasování rozhoduje o tom, jestli má výsledek vůbec cenu.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'dawn',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Progesteron tvoří žluté tělísko, které vznikne z folikulu po ovulaci. Připravuje děložní sliznici na možné uhnízdění. Odběr v druhé polovině cyklu se používá hlavně k ověření, že ovulace proběhla.

## Co může ukázat

- Nepřímé potvrzení proběhlé ovulace.
- Podklad pro posouzení druhé fáze cyklu, pokud je cyklus krátký nebo nepravidelný.
- Ve stimulovaném cyklu informaci o tom, jestli hladina nestoupá dřív, než by měla. To může ovlivnit rozhodnutí o čerstvém transferu.
- Při přípravě na kryotransfer se může sledovat kvůli načasování.

Hodnota kolísá v pulzech i během jednoho dne, takže jeden odběr popisuje jeden okamžik, ne celou fázi cyklu.

## Kdy může být relevantní

Odběr progesteronu může být součástí vyšetření při podezření na poruchu ovulace, při nepravidelném cyklu, při sledování cyklu před inseminací nebo v rámci sledování léčebného cyklu. Záleží na anamnéze a doporučení lékaře. U každé ženy se nedělá.

## Jak vyšetření probíhá

Odběr krve ze žíly. Termín se obvykle plánuje na dobu zhruba týden po předpokládané ovulaci, u pravidelného cyklu tedy někdy kolem jeho 21. dne. Pokud máte delší nebo nepravidelný cyklus, den se posouvá, proto se lékař ptá na délku cyklu a proto se termín u některých žen odvozuje od ovulačního testu nebo od ultrazvuku.

Pokud užíváte progesteron jako lék, řekněte to. Výsledek se pak čte jinak.

## Na co se zeptat lékaře

1. Který den mám na odběr přijít při mé délce cyklu?
2. Mám si předtím dělat ovulační testy?
3. Co z výsledku plyne. Potvrzuje ovulaci, nebo se bude opakovat?
4. Jak se výsledek mění tím, že užívám progesteron?
5. Mění to plán dalšího cyklu?

> Referenční hodnoty se liší podle laboratoře, fáze cyklu i způsobu odběru. Výklad patří lékaři.`,
  },
  {
    id: 'vys-tsh',
    kind: 'article',
    title: 'TSH: první pohled na štítnou žlázu',
    excerpt:
      'Jeden z nejčastěji odebíraných parametrů v celé diagnostice. Vysvětlujeme, proč se sleduje i při plánování těhotenství.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'pearl',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

TSH vzniká v podvěsku mozkovém a řídí činnost štítné žlázy. Je to citlivý ukazatel: když štítná žláza pracuje málo nebo hodně, TSH na to reaguje dřív, než se změní hormony samotné žlázy. Funkce štítné žlázy může ovlivňovat cyklus i průběh časného těhotenství, proto se v reprodukční medicíně sleduje často.

## Co může ukázat

- Nepřímý obraz o tom, jak štítná žláza pracuje.
- Podnět k doplnění dalších vyšetření. Nejčastěji volného tyroxinu (fT4) a protilátek proti štítné žláze.
- Důvod k odeslání k endokrinologovi, pokud je hodnota mimo očekávání nebo pokud jsou přítomné protilátky.

TSH samo o sobě není diagnóza. Kolísá během dne a mění se i při jiném onemocnění nebo při užívání některých léků.

## Kdy může být relevantní

Odběr TSH může být součástí vyšetření při plánování těhotenství, při nepravidelném cyklu, při únavě a změnách hmotnosti, při známém onemocnění štítné žlázy v rodině, po ztrátě těhotenství nebo před zahájením léčby. Záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Běžný odběr krve ze žíly, obvykle ráno. Na dni cyklu většinou nezáleží. Pokud užíváte hormony štítné žlázy, řekněte, kdy jste si vzala poslední dávku. Načasování odběru vůči lékům se domlouvá předem.

Nahlaste i doplňky stravy s biotinem. Ty mohou u některých metod výsledek zkreslit, a proto se před odběrem někdy krátce vysazují po domluvě s lékařem.

## Na co se zeptat lékaře

1. Doplňujete k TSH i fT4 a protilátky, a proč?
2. Jaké hodnoty jsou u mě cílem při plánování těhotenství?
3. Mám si vzít ráno svůj lék před odběrem, nebo po něm?
4. Mám jít k endokrinologovi?
5. Za jak dlouho se má odběr zopakovat?

> Cílové rozmezí se liší podle laboratoře, situace a toho, jestli plánujete těhotenství. Konkrétní hodnoty a případnou léčbu určuje lékař.`,
  },
  {
    id: 'vys-prolaktin',
    kind: 'article',
    title: 'Prolaktin: hodnota, kterou snadno zkreslí podmínky odběru',
    excerpt:
      'Jediný stresující odběr, spěch nebo špatná denní doba dokážou výsledek posunout. Proto se často opakuje.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'sand',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Prolaktin vzniká v podvěsku mozkovém a jeho hlavní role souvisí s kojením. Zvýšená hladina mimo těhotenství a kojení může narušit ovulaci a projevit se nepravidelným nebo vynechávajícím cyklem. Proto se odebírá při hledání příčiny poruchy ovulace.

## Co může ukázat

- Jestli může být za nepravidelným cyklem právě prolaktin.
- Podnět k pátrání po příčině. Bývá jí stres, některé léky, onemocnění štítné žlázy nebo méně často nezhoubný nález na podvěsku mozkovém.
- Podklad pro rozhodnutí, zda odeslat k endokrinologovi a zda doplnit zobrazovací vyšetření.

Jednorázově zvýšená hodnota sama o sobě nic neznamená. Prolaktin stoupá po stresu, po fyzické zátěži, po jídle, po vyšetření prsou i po pohlavním styku.

## Kdy může být relevantní

Odběr může být součástí vyšetření při nepravidelném nebo chybějícím cyklu, při výtoku z prsou, při bolestech hlavy a poruchách zraku spolu s poruchou cyklu, nebo při hledání příčiny poruchy ovulace. Nedělá se u každé ženy. Záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Odběr krve ze žíly, obvykle ráno, ideálně v klidu. Většina pracovišť doporučuje přijít s předstihem, chvíli si sednout a nespěchat, případně být nalačno. Přesné pokyny vám dá vaše klinika.

Den před odběrem se obvykle vynechává větší fyzická zátěž, pohlavní styk a vyšetřování prsou. Pokud vyjde hodnota zvýšená, bývá dalším krokem opakování za standardních podmínek, někdy s doplněním speciálního rozboru. Teprve pak se dělá závěr.

## Na co se zeptat lékaře

1. Jaké podmínky mám před odběrem dodržet?
2. Mohl výsledek ovlivnit některý z mých léků?
3. Budeme odběr opakovat, a za jak dlouho?
4. Doplňujeme vyšetření štítné žlázy?
5. Kdy má smysl zobrazovací vyšetření podvěsku mozkového?

> Referenční meze se liší podle laboratoře a metody. Jediná hodnota není diagnóza a její výklad patří lékaři.`,
  },
  {
    id: 'vys-afc',
    kind: 'article',
    title: 'AFC: počet antrálních folikulů na ultrazvuku',
    excerpt:
      'Ukazatel, který se počítá očima na monitoru. Doplňuje AMH a spolu s ním pomáhá odhadnout odpověď na stimulaci.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

AFC znamená počet antrálních folikulů. Malých váčků s tekutinou, které jsou na začátku cyklu ve vaječnících vidět na ultrazvuku. Jejich počet zhruba odpovídá tomu, kolik folikulů je v daném cyklu k dispozici pro růst. Používá se jako ukazatel ovariální rezervy vedle AMH.

## Co může ukázat

- Orientaci v tom, jak by vaječníky mohly odpovědět na stimulaci.
- Podklad pro volbu protokolu a dávek.
- Doplnění obrazu tam, kde AMH vychází nejednoznačně nebo kde se výsledky mezi laboratořemi liší.
- Zároveň i pohled na vaječníky jako takové. Cysty, nálezy, dostupnost pro odběr.

AFC nevypovídá o kvalitě vajíček. Je také do jisté míry závislý na vyšetřujícím a na přístroji, takže se počty mezi pracovišti mohou lišit.

## Kdy může být relevantní

Počítání antrálních folikulů může být součástí vyšetření před plánováním stimulace, při podezření na sníženou rezervu, po operaci vaječníků nebo při zvažování zamrazení vajíček. Záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Vaginální ultrazvuk, obvykle na začátku cyklu. Nejčastěji v prvních dnech po skončení krvácení, přesný termín určí klinika. Vyšetření trvá několik minut, nevyžaduje přípravu ani plný močový měchýř a bývá popisováno jako nepříjemné spíš tlakem než bolestí.

Lékař projde oba vaječníky a spočítá drobné folikuly. Výsledek znáte hned, protože vzniká přímo u přístroje.

## Na co se zeptat lékaře

1. Kolik folikulů jste napočítal na každém vaječníku?
2. Jak to čtete spolu s mým AMH a věkem?
3. Ovlivňuje to plán stimulace?
4. Je vidět něco dalšího. Cysta, nález, který má sledování?
5. Má smysl počet zopakovat v jiném cyklu?

> Počet se mezi cykly i mezi vyšetřujícími může lišit. Výklad patří lékaři, který ho čte spolu se zbytkem vašeho obrazu.`,
  },
  {
    id: 'vys-ultrazvuk-panve',
    kind: 'article',
    title: 'Ultrazvuk malé pánve: první pohled dovnitř',
    excerpt:
      'Nejčastější vyšetření celé diagnostiky. Co je na něm vidět, co ne a proč se někdy opakuje v jiné fázi cyklu.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Ultrazvuk malé pánve je základní zobrazovací vyšetření v gynekologii. Ukáže dělohu, děložní sliznici a vaječníky a bývá východiskem pro rozhodnutí, jestli je potřeba něco doplnit.

## Co může ukázat

- Tvar a velikost dělohy, včetně vrozených odchylek tvaru dutiny.
- Myomy a jejich uložení vůči dutině děložní.
- Tloušťku a vzhled děložní sliznice ve vztahu k fázi cyklu.
- Vaječníky, jejich uložení, cysty a obraz, který může vést k podezření na syndrom polycystických vaječníků nebo na endometriózu.
- Nepřímé známky nahromadění tekutiny ve vejcovodu.

Co ultrazvuk neukáže: **průchodnost vejcovodů** a spolehlivě ani drobné nálezy uvnitř dutiny děložní. Na to slouží jiná vyšetření.

## Kdy může být relevantní

Ultrazvuk může být součástí prvního vyšetření, sledování cyklu, přípravy na stimulaci nebo transfer a kontroly po zákroku. Kdy a jak často se opakuje, určuje lékař podle vaší situace.

## Jak vyšetření probíhá

Nejčastěji vaginálně. Sonda se zavádí do pochvy, což dává výrazně lepší obraz než vyšetření přes břicho. Trvá to zpravidla několik minut, není potřeba plný močový měchýř a bez přípravy.

Někdy se stejné vyšetření opakuje v jiné fázi cyklu, protože sliznice i vaječníky vypadají v každé fázi jinak. To není známka toho, že by bylo něco špatně.

Pokud vám je vyšetření nepříjemné, řekněte to. Dá se zvolit jiná poloha, menší sonda nebo pomalejší tempo.

## Na co se zeptat lékaře

1. Co konkrétně dnes vidíte a co z toho plyne?
2. Odpovídá sliznice fázi cyklu, ve které jsem?
3. Je potřeba vyšetření zopakovat, a kdy?
4. Vede tenhle nález k dalšímu vyšetření?
5. Můžu dostat popis nálezu písemně do své složky?

> Popis ultrazvuku je pohled v jednom okamžiku. Výklad a rozhodnutí o dalším postupu patří lékaři.`,
  },
  {
    id: 'vys-hysteroskopie',
    kind: 'article',
    title: 'Hysteroskopie: pohled přímo do dutiny děložní',
    excerpt:
      'Kamerou dovnitř dělohy. Kdy má smysl, kdy se rovnou i řeší nález a proč se plošně před každým IVF nedělá.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['klinika', 'vysledky'],
    level: 'deep',
    hero: 'dusk',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Hysteroskopie je vyšetření, při kterém se do dutiny děložní zavede tenký optický přístroj s kamerou. Na rozdíl od ultrazvuku je dutina vidět přímo, ne odvozeně.

## Co může ukázat

- Polypy a myomy zasahující do dutiny.
- Srůsty po předchozích zákrocích nebo zánětech.
- Přepážku a jiné odchylky tvaru dutiny.
- Vzhled sliznice a podezření na chronický zánět děložní sliznice, ze kterého se dá odebrat vzorek.

Nález se často dá při stejném výkonu rovnou ošetřit. Pak se mluví o operační hysteroskopii, na rozdíl od čistě diagnostické.

Poctivá poznámka k důkazům: **provádět hysteroskopii plošně u všech žen před IVF se jako přínosné nepotvrdilo.** U žen s podezřelým nálezem na ultrazvuku nebo po opakovaně neúspěšných transferech může být zvažována. O tom rozhoduje lékař podle konkrétní situace.

## Kdy může být relevantní

Může být součástí plánu při podezření na nález v dutině děložní, při opakovaných neúspěšných transferech, po opakovaných ztrátách těhotenství, po výkonu v děloze v minulosti nebo při nepravidelném krvácení. Není součástí vyšetření každé ženy ani každého páru.

## Jak vyšetření probíhá

Plánuje se obvykle v první polovině cyklu, po skončení krvácení. Provádí se buď ambulantně bez narkózy, nebo v krátké celkové anestezii. Záleží na pracovišti, na tom, co se čeká, a na vaší toleranci.

Přístroj se zavádí pochvou a děložním hrdlem, dutina se rozvine tekutinou nebo plynem, aby byla vidět. Samotné vyšetření trvá obvykle několik minut, s operačním výkonem déle. Po zákroku bývá pár dní slabé špinění a křeče podobné menstruačním.

**Kontaktujte svou kliniku**, pokud se po zákroku objeví horečka, silná bolest, silné krvácení nebo zapáchající výtok.

## Na co se zeptat lékaře

1. Proč je u mě tohle vyšetření navrhované právě teď?
2. Půjde o diagnostický, nebo rovnou operační výkon?
3. Bude narkóza a co to znamená pro den výkonu?
4. Bude se odebírat vzorek sliznice?
5. Za jak dlouho po výkonu se dá pokračovat v léčbě?

> Text popisuje obvyklý průběh. Postupy se mezi pracovišti liší. Řiďte se pokyny své kliniky.`,
  },
  {
    id: 'vys-hsg-hyfosy',
    kind: 'article',
    title: 'HSG a HyFoSy: jak vyšetření probíhá a jak se na něj připravit',
    excerpt:
      'Dvě metody, jak zjistit, jestli je cesta volná. Co která obnáší, jak nepříjemné to bývá a jak se na to připravit.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['klinika', 'vysledky'],
    level: 'essential',
    hero: 'linen',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Aby mohlo dojít k přirozenému početí, musí být aspoň jeden vejcovod průchodný. Vejcovody nejsou na běžném ultrazvuku vidět, proto se používá vyšetření s kontrastní látkou, která ukáže, kudy tekutina projde a kde se zastaví.

## Co může ukázat

- Jestli je jeden nebo oba vejcovody průchodné.
- Kde je případná překážka.
- Obrys dutiny děložní a některé odchylky jejího tvaru.
- Nahromadění tekutiny ve vejcovodu.

Co neukáže: **funkci vejcovodu.** Průchodná trubice ještě neznamená, že vejcovod dobře pracuje. Stejně tak nález uzávěru na jednom vyšetření se někdy při opakování nepotvrdí. Vejcovod se může přechodně stáhnout.

## Kdy může být relevantní

Vyšetření může být součástí plánu, když se zvažuje přirozené početí nebo inseminace, po prodělaném zánětu v malé pánvi, po operaci v břiše nebo po mimoděložním těhotenství. Pokud se plánuje rovnou IVF, nemusí být potřeba. O tom rozhoduje lékař podle konkrétní situace.

## Jak vyšetření probíhá

Obě metody se plánují do první poloviny cyklu, po skončení krvácení a před ovulací, a v tom cyklu se obvykle doporučuje chránit se před otěhotněním.

- **HSG** používá rentgen a kontrastní látku. Nález se zaznamená na snímky.
- **HyFoSy** používá ultrazvuk a pěnový kontrast. Bez rentgenového záření, provádí se často přímo na gynekologii.

Do dělohy se zavede tenký katétr, vstříkne se kontrast a sleduje se jeho průchod. Trvá to zpravidla několik minut. Většina žen popisuje křeče podobné silnější menstruaci, u někoho krátce ostré. Řada pracovišť doporučuje vzít si hodinu předem lék proti bolesti. Zeptejte se předem, jaký a jestli je to ve vašem případě vhodné. Někdy se podávají antibiotika.

Po výkonu bývá den až dva slabé špinění nebo výtok z kontrastu.

**Kontaktujte svou kliniku** při horečce, silné bolesti nebo zapáchajícím výtoku v následujících dnech.

## Na co se zeptat lékaře

1. Která metoda je u mě navrhovaná a proč?
2. Mám si vzít lék proti bolesti, a který?
3. Doporučujete antibiotika?
4. Ve který den cyklu mám přijít a musím se v tom cyklu chránit?
5. Co bude následovat podle výsledku?

> Text popisuje obvyklý průběh. Postupy i příprava se mezi pracovišti liší. Řiďte se pokyny své kliniky.`,
  },
  {
    id: 'vys-genetika-zena',
    kind: 'article',
    title: 'Genetické vyšetření u ženy',
    excerpt:
      'Karyotyp a cílené testy. Co se v nich hledá, proč k nim patří genetická konzultace a co výsledek znamená pro rodinu.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'dusk',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Genetické vyšetření hledá odchylky, které mohou ovlivnit plodnost, vývoj embrya nebo riziko přenosu onemocnění na dítě. Nejčastějším vyšetřením je karyotyp. Pohled na počet a strukturu chromozomů.

## Co může ukázat

- Odchylku ve struktuře chromozomů, například vyvážený translokovaný nález. Nositelka bývá zdravá, ale část embryí může být nevyvážená, což může souviset s opakovanými ztrátami.
- Nosičství některých dědičných onemocnění, například cystické fibrózy.
- Změnu v genu FMR1, která bývá zvažována při snížené ovariální rezervě nebo předčasném ukončení činnosti vaječníků.

Co neukáže: **záruku.** Normální výsledek nevylučuje všechny genetické příčiny a nález sám o sobě neurčuje, jak léčba dopadne.

## Kdy může být relevantní

Může být součástí vyšetření po opakovaných ztrátách těhotenství, při opakovaně neúspěšné léčbě, při dědičném onemocnění v rodině, při nálezu u dřívějšího těhotenství, při předčasném selhání vaječníků nebo když se zvažuje PGT. **Není součástí vyšetřovacího plánu každé ženy**: záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Obvykle jde o odběr krve. Výsledky některých testů trvají týdny.

Součástí bývá **genetická konzultace** u klinického genetika. Před vyšetřením i po něm. Není to formalita: teprve rozhovor s genetikem dá výsledku smysl a vysvětlí, co znamená pro vás, pro partnera a pro širší rodinu.

Počítejte s tím, že výsledek se může týkat i sourozenců a rodičů. Genetik s vámi probere, jestli a jak je vhodné informovat je.

## Na co se zeptat lékaře

1. Které konkrétní vyšetření navrhujete a co se v něm hledá?
2. Má smysl vyšetřit i partnera?
3. Co se změní v našem postupu podle výsledku?
4. Jak dlouho se čeká a co to stojí?
5. Je vyšetření hrazené a s jakým doporučením?
6. Co výsledek znamená pro moje sourozence a rodiče?

> Genetické výsledky se nedají číst bez odborné konzultace. Interpretace patří klinickému genetikovi.`,
  },

  // --- (B) PARTNER ------------------------------------------------------
  {
    id: 'vys-spermiogram',
    kind: 'article',
    title: 'Spermiogram: základní vyšetření u partnera',
    excerpt:
      'Rychlé, levné a v diagnostice zásadní. Jak se odběr připravuje, proč se často opakuje a co se vlastně hodnotí.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'essential',
    hero: 'taupe',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    boost: 0.7,
    body: `## Proč se dělá

Spermiogram je rozbor ejakulátu a základní vyšetření mužské části páru. Bývá jedním z prvních kroků diagnostiky, protože je nenáročný a jeho výsledek podstatně mění, co má smysl dělat dál.

## Co může ukázat

Laboratoř obvykle hodnotí:

- objem vzorku a jeho základní vlastnosti,
- koncentraci spermií a jejich celkový počet,
- pohyblivost a její typ,
- tvar spermií,
- podíl živých buněk a přítomnost bílých krvinek.

Co neukáže: **jistotu.** Výsledek popisuje jeden vzorek v jeden den. Neříká, jestli k početí dojde, ani jestli nedojde.

## Kdy může být relevantní

Rozbor ejakulátu bývá součástí vyšetření páru, který se snaží delší dobu, a před plánováním inseminace nebo IVF. O rozsahu a načasování rozhoduje lékař podle situace páru.

## Jak vyšetření probíhá

Vzorek se odevzdává na pracovišti, obvykle v samostatné místnosti, nebo výjimečně doma za přesně daných podmínek. To musí odsouhlasit laboratoř, protože záleží na době a teplotě přepravy.

Před odběrem se obvykle doporučuje pohlavní abstinence, nejčastěji dva až pět dní; přesnou dobu určí laboratoř. Kratší i výrazně delší doba výsledek posouvá. Vzorek se má odevzdat celý. Chybějící první část zkresluje koncentraci nejvíc.

Před odběrem nahlaste horečnaté onemocnění za poslední tři měsíce. Tvorba spermií trvá zhruba dva a půl až tři měsíce, takže nemoc z jara se může projevit ve vzorku z léta.

Výsledek jednoho vzorku většinou nestačí. Při odchylce bývá dalším krokem opakování s odstupem několika týdnů.

## Na co se zeptat lékaře

1. Jak dlouhá má být abstinence a kde se vzorek odevzdává?
2. Můžeme vzorek odevzdat doma, nebo to laboratoř nepřijímá?
3. Budeme rozbor opakovat, a kdy?
4. Znamená tenhle výsledek doporučení k urologovi nebo andrologovi?
5. Co z výsledku plyne pro volbu metody léčby?

> Referenční hodnoty se liší podle laboratoře a metody a nejsou hranicí mezi plodností a neplodností. Výklad patří lékaři.`,
  },
  {
    id: 'vys-morfologie-spermii',
    kind: 'article',
    title: 'Morfologie spermií: co znamená hodnocení tvaru',
    excerpt:
      'Parametr, který děsí nejvíc a vypovídá nejmíň jednoznačně. Vysoký podíl atypických tvarů je běžný nález.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['vysledky'],
    level: 'deep',
    hero: 'sand',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Morfologie je součástí rozboru ejakulátu a popisuje tvar spermií. Hlavičku, krček a bičík. Hodnotí se pod mikroskopem po obarvení vzorku a výsledkem je podíl buněk, které odpovídají přísně vymezenému ideálnímu tvaru.

## Co může ukázat

- Podíl spermií s typickým tvarem ve vzorku.
- Převažující typ odchylky, což může být pro lékaře vodítko.
- Doplněk k ostatním parametrům, se kterými se čte společně.

Co je důležité vědět: hodnocení používá velmi přísná kritéria, takže **i u mužů, kterým se počalo dítě, bývá podíl ideálně tvarovaných spermií nízký.** Nález „většina spermií je atypických" je běžný a sám o sobě neznamená neplodnost. Výpovědní hodnota morfologie pro předpověď otěhotnění je omezená a hodnocení je do jisté míry závislé na laboratoři a na hodnotícím.

## Kdy může být relevantní

Morfologie bývá součástí standardního rozboru ejakulátu, takže se hodnotí spolu se zbytkem. Samostatně se obvykle nevyšetřuje. Jak se výsledek použije, záleží na celkovém obrazu a na doporučení lékaře.

## Jak vyšetření probíhá

Nevyžaduje nic navíc oproti běžnému rozboru ejakulátu. Stejný vzorek, stejná příprava, stejná doba abstinence podle pokynů laboratoře. Část vzorku se nanese na sklíčko, obarví a hodnotí pod mikroskopem.

Protože se hodnocení mezi laboratořemi liší, není vhodné porovnávat procenta z různých pracovišť. Pokud se výsledek opakuje jinde, řekněte to lékaři.

## Na co se zeptat lékaře

1. Jaká kritéria hodnocení vaše laboratoř používá?
2. Jaký typ odchylky u nás převažuje?
3. Mění tenhle výsledek volbu metody, například zvažování ICSI?
4. Má smysl rozbor opakovat?
5. Dá se s tím něco dělat režimově, a je pro to doklad?

> Morfologie se nikdy nečte samostatně. Výklad výsledku patří lékaři, který ho posuzuje spolu s ostatními parametry.`,
  },
  {
    id: 'vys-pohyblivost-spermii',
    kind: 'article',
    title: 'Pohyblivost spermií: proč na ní záleží',
    excerpt:
      'Spermie musí urazit cestu. Co se hodnotí, co pohyblivost snadno zkreslí a proč záleží na době přepravy vzorku.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['vysledky'],
    level: 'essential',
    hero: 'sage',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Aby mohlo dojít k přirozenému oplození, musí se spermie dostat z pochvy až do vejcovodu. Pohyblivost je proto jedním z parametrů, které se v rozboru ejakulátu sledují nejpozorněji.

## Co může ukázat

Laboratoř obvykle rozliší:

- spermie s postupným pohybem, tedy takové, které se skutečně někam posouvají,
- spermie, které se pohybují na místě,
- nepohyblivé spermie.

Nízký podíl pohyblivých spermií může být vodítkem k dalšímu vyšetření a může ovlivnit volbu metody léčby. Neznamená sám o sobě, že k početí nemůže dojít.

Zvláštní situace nastává, když jsou skoro všechny spermie nepohyblivé. Laboratoř pak obvykle doplní test, který rozliší, jestli jsou živé a jen se nehýbou.

## Kdy může být relevantní

Pohyblivost je součástí standardního rozboru ejakulátu, takže se hodnotí vždy spolu s ostatními parametry. O tom, jestli a kdy se rozbor dělá a opakuje, rozhoduje lékař podle situace páru.

## Jak vyšetření probíhá

Hodnotí se v čerstvém vzorku pod mikroskopem, obvykle krátce po odevzdání. Právě tady záleží na podmínkách nejvíc:

- **Čas.** Pohyblivost s odstupem od odběru klesá. Proto laboratoře trvají na rychlém doručení a proto se odběr většinou dělá přímo na pracovišti.
- **Teplota.** Vzorek se nesmí ochladit ani přehřát. Pokud laboratoř výjimečně povolí odběr doma, dá vám i pokyny k přepravě.
- **Doba abstinence** podle pokynů laboratoře.
- **Nemoc s horečkou** v posledních zhruba třech měsících.

Řada výkyvů má tedy prostou technickou příčinu. I proto se závěr nedělá z jednoho vzorku.

## Na co se zeptat lékaře

1. Za jak dlouho po odběru se vzorek hodnotil?
2. Jaký podíl spermií měl postupný pohyb?
3. Doporučujete rozbor zopakovat?
4. Mění to volbu metody léčby?
5. Může za výsledkem stát něco, co se dá vyšetřit dál?

> Výsledek jednoho vzorku popisuje jeden den. Výklad patří lékaři, který ho čte v celkovém kontextu.`,
  },
  {
    id: 'vys-koncentrace-spermii',
    kind: 'article',
    title: 'Koncentrace spermií: počet ve vzorku',
    excerpt:
      'Kolik spermií je v mililitru a kolik celkem. Co znamenají odborné termíny v nálezu a proč se vzorek často opakuje.',
    minutes: 3,
    phases: ['diagnostics'],
    topics: ['vysledky'],
    level: 'essential',
    hero: 'pearl',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Koncentrace udává, kolik spermií je v jednom mililitru vzorku. Spolu s objemem se z ní počítá celkový počet spermií v ejakulátu. Je to jeden ze základních parametrů rozboru.

## Co může ukázat

V nálezu se můžete setkat s termíny, které popisují situaci slovem místo čísla:

- **normozoospermie**: parametry odpovídají referenčnímu popisu laboratoře,
- **oligozoospermie**: snížený počet spermií,
- **kryptozoospermie**: spermie se najdou jen po zpracování vzorku,
- **azoospermie**: v ejakulátu se spermie nenajdou.

Nález azoospermie neznamená automaticky, že spermie nejsou nikde. Rozlišuje se situace, kdy je překážka v odvodných cestách, od situace, kdy se spermie tvoří málo. Postup se pak liší a součástí bývá vyšetření u urologa nebo androloga, hormonální odběry a genetické vyšetření.

## Kdy může být relevantní

Koncentrace se hodnotí v každém rozboru ejakulátu, takže se nevyšetřuje samostatně. Kdy se rozbor dělá a kdy opakuje, určuje lékař podle situace páru.

## Jak vyšetření probíhá

Stejně jako zbytek rozboru: vzorek se odevzdá podle pokynů laboratoře, po zkapalnění se změří objem a spočítají spermie v počítací komůrce.

Hodně zkresluje **neúplný vzorek**: první část ejakulátu bývá na spermie nejbohatší, a když se ztratí, koncentrace vyjde nižší. Pokud se to stane, řekněte to laboratoři; je to běžné a lepší než mlčet.

Při nečekaném výsledku bývá dalším krokem opakování s odstupem několika týdnů, ne okamžitá změna plánu.

## Na co se zeptat lékaře

1. Byl vzorek kompletní a jak dlouhá byla abstinence?
2. Kdy má smysl rozbor zopakovat?
3. Znamená výsledek doporučení k urologovi nebo andrologovi?
4. Doporučujete hormonální nebo genetické vyšetření?
5. Jak to ovlivňuje volbu metody léčby?

> Referenční hodnoty se liší podle laboratoře a nejsou hranicí mezi plodností a neplodností. Výklad patří lékaři.`,
  },
  {
    id: 'vys-fragmentace-dna',
    kind: 'article',
    title: 'Fragmentace DNA spermií: co o ní víme a co ne',
    excerpt:
      'Test, o kterém se hodně mluví a jehož přínos není spolehlivě doložený. Poctivé shrnutí toho, kde jsou hranice důkazů.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['vysledky'],
    level: 'deep',
    hero: 'dusk',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Test hodnotí, jaký podíl spermií má poškozenou genetickou informaci. Běžný rozbor ejakulátu se dívá na počet, pohyb a tvar. O stavu DNA uvnitř nic neříká. Fragmentace se proto zvažuje tam, kde běžný rozbor vychází nenápadně, a přesto se nedaří.

## Co může ukázat

- Podíl spermií s poškozenou DNA v daném vzorku.
- Vodítko k pátrání po příčině. Bývá jí varikokéla, zánět, kouření, obezita, teplotní zátěž, delší abstinence nebo věk.

Co je poctivé říct nahlas: **důkazy pro tenhle test jsou omezené.** Používá se několik různých metod, které dávají různé výsledky, hraniční hodnoty nejsou sjednocené a **není spolehlivě doložené, že postup vedený podle výsledku zvyšuje šanci na narozené dítě.** Odborné společnosti proto tento test nedoporučují jako běžnou součást vyšetření a přistupují k němu zdrženlivě.

To neznamená, že je nesmyslný vždy. Znamená to, že má smysl vědět předem, co se podle výsledku změní.

## Kdy může být relevantní

Může být zvažován při opakovaných neúspěších léčby, po opakovaných ztrátách těhotenství, při nevysvětlené neplodnosti nebo při zjištěné varikokéle. **Není součástí standardního vyšetření každého páru**: záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Odevzdává se vzorek ejakulátu jako u běžného rozboru, podle pokynů laboratoře včetně doby abstinence. Ta výsledek ovlivňuje. Vzorek se zpracuje jednou z laboratorních metod a výsledkem je procentní podíl.

Vyšetření obvykle není hrazené a cenu i metodu je dobré znát předem. Pokud se test opakuje, má smysl použít stejnou metodu ve stejné laboratoři, jinak se hodnoty nedají srovnat.

## Na co se zeptat lékaře

1. Co konkrétně se v našem postupu změní podle výsledku?
2. Jakou metodu laboratoř používá a jak je výsledek srovnatelný?
3. Jaká je opora v důkazech pro postup, který podle toho navrhujete?
4. Kolik to stojí a je to hrazené?
5. Dává smysl místo toho nejdřív vyšetření u urologa?

> Tento text popisuje stav poznání obecně. Rozhodnutí, jestli má vyšetření ve vaší situaci smysl, patří lékaři.`,
  },
  {
    id: 'vys-genetika-muz',
    kind: 'article',
    title: 'Genetické vyšetření u muže',
    excerpt:
      'Karyotyp, mikrodelece na chromozomu Y a vyšetření genu CFTR. Kdy se zvažuje a co z výsledku plyne pro léčbu.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'dusk',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

U části mužů s výrazně sníženým počtem spermií nebo bez spermií v ejakulátu je příčina genetická. Vyšetření hledá odchylky, které mohou vysvětlit nález, ovlivnit volbu postupu a mít význam pro budoucí děti.

## Co může ukázat

- **Karyotyp**: počet a strukturu chromozomů. Zachytí například nález navíc u chromozomu X, který patří mezi častější genetické příčiny mužské neplodnosti, nebo vyvážené přestavby.
- **Mikrodelece na chromozomu Y**: chybějící úseky v oblastech, které se podílejí na tvorbě spermií. Výsledek může ovlivnit i odhad, jestli má smysl hledat spermie ve varleti.
- **Vyšetření genu CFTR**: souvisí s cystickou fibrózou a s vrozeným chyběním chámovodů, které se projeví neprůchodností odvodných cest.

Co neukáže: **záruku.** Normální výsledek genetickou příčinu zcela nevylučuje.

## Kdy může být relevantní

Může být zvažováno při azoospermii, výrazně sníženém počtu spermií, při opakovaných ztrátách těhotenství, při dědičném onemocnění v rodině nebo před plánovaným odběrem spermií z varlete. **Není součástí vyšetření každého muže**: záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Obvykle jde o odběr krve. Výsledky některých testů trvají týdny.

Součástí bývá konzultace u klinického genetika před vyšetřením i po něm. Genetik vysvětlí, co výsledek znamená pro plánované dítě, jestli má smysl vyšetřit i partnerku a jaké to má důsledky pro širší rodinu. U některých nálezů je totiž podstatné, jestli je nositelkou i partnerka.

## Na co se zeptat lékaře

1. Které vyšetření navrhujete a co se v něm hledá?
2. Co se změní v našem postupu podle výsledku?
3. Má se vyšetřit i partnerka?
4. Jak dlouho se čeká a co to stojí?
5. Co výsledek znamená pro případné děti?

> Genetické výsledky se nedají vykládat bez odborné konzultace. Interpretace patří klinickému genetikovi.`,
  },

  // --- (B) DALŠÍ --------------------------------------------------------
  {
    id: 'vys-trombofilie',
    kind: 'article',
    title: 'Trombofilie a hematologické vyšetření',
    excerpt:
      'Sledování srážlivosti krve. Kdy má vyšetření oporu v anamnéze, kde jsou důkazy slabé a proč výsledek patří hematologovi.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'blush',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Trombofilie je sklon ke zvýšené srážlivosti krve. Může být vrozená, nebo získaná. Vyšetření se v reprodukční medicíně zvažuje ze dvou různých důvodů, které je dobré nemíchat: kvůli bezpečnosti ženy v těhotenství a po stimulaci, a kvůli pátrání po příčině opakovaných ztrát.

## Co může ukázat

- Vrozené odchylky srážlivosti, například změnu faktoru V nebo protrombinu.
- Získané stavy, zejména antifosfolipidový syndrom, který se vyšetřuje z protilátek a má jasně danou souvislost s opakovanými ztrátami těhotenství.
- Celkový obraz krevního obrazu a srážlivosti před plánovaným zákrokem.

Poctivá poznámka k důkazům: **plošné vyšetřování vrozených trombofilií u žen bez osobní nebo rodinné anamnézy trombózy se jako přínosné nepotvrdilo.** Nález sám o sobě nemusí být příčinou obtíží a nálezů je v populaci hodně. Léčba ředěním krve má také svá rizika, a proto se nenasazuje jen kvůli výsledku testu bez souvislosti.

## Kdy může být relevantní

Vyšetření může být zvažováno při prodělané trombóze nebo plicní embolii, při trombóze u blízkých příbuzných, po opakovaných ztrátách těhotenství, po závažné komplikaci v předchozím těhotenství nebo před zákrokem, kde je zvýšené riziko. Není součástí vyšetřovacího plánu každé ženy.

## Jak vyšetření probíhá

Odběr krve, u části parametrů nalačno. Načasování je důležité. Některé hodnoty se nedají spolehlivě posoudit v těhotenství, při akutní trombóze, při užívání hormonální antikoncepce nebo při léčbě na ředění krve. Vyšetření protilátek se obvykle opakuje s odstupem, protože jednorázový nález nestačí.

Výsledky vykládá hematolog. Ten také rozhoduje o případné léčbě a o tom, jak postupovat v těhotenství.

**Vyhledejte akutní lékařskou pomoc** při náhlé dušnosti, bolesti na hrudi nebo při bolesti, otoku a zarudnutí lýtka.

## Na co se zeptat lékaře

1. Proč je u mě tohle vyšetření navrhované?
2. Co se změní v postupu podle výsledku?
3. Bude výsledek vykládat hematolog?
4. Ovlivňují moje současné léky výsledek?
5. Bude se vyšetření opakovat?

> Rozhodnutí o vyšetření i o případné léčbě patří lékaři. Tento text nenahrazuje konzultaci.`,
  },
  {
    id: 'vys-endokrinologie',
    kind: 'article',
    title: 'Endokrinologické vyšetření: hormony v širším kontextu',
    excerpt:
      'Když se hledá souvislost mimo vaječníky. Co endokrinolog sleduje a proč se do toho pouští jen při konkrétním podnětu.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'deep',
    hero: 'sand',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Cyklus není řízený jen z vaječníků. Zasahuje do něj štítná žláza, podvěsek mozkový, nadledviny i to, jak tělo hospodaří s cukrem. Endokrinologické vyšetření se používá tam, kde nález ukazuje mimo reprodukční orgány.

## Co může ukázat

- Poruchu funkce štítné žlázy nebo její autoimunitní zánět.
- Zvýšený prolaktin a jeho příčinu.
- Zvýšené mužské hormony, které se zvažují v souvislosti se syndromem polycystických vaječníků, s růstem chloupků nebo s akné.
- Poruchu zpracování cukru a inzulinovou rezistenci, které se s poruchami cyklu často pojí.
- Vzácnější stavy, například poruchu nadledvin.

Cílem není najít „chybu v hormonech". Takové zadání nikam nevede. Cílem je odpovědět na konkrétní otázku, která vznikla z nálezu nebo z příznaků.

## Kdy může být relevantní

Vyšetření u endokrinologa může být součástí plánu při nepravidelném nebo chybějícím cyklu, při zvýšeném prolaktinu nebo odchylce TSH, při známkách zvýšených mužských hormonů, při výrazné změně hmotnosti nebo při podezření na poruchu metabolismu. **U každé ženy se nedělá**: záleží na anamnéze a doporučení lékaře.

## Jak vyšetření probíhá

Většinou jde o odběry krve, u části parametrů nalačno a v určenou denní dobu. Některé hodnoty se během dne mění. Někdy se doplňuje zátěžový test s glukózou nebo ultrazvuk štítné žlázy.

Než přijdete, sepište si užívané léky včetně doplňků, hormonální antikoncepci a průběh svého cyklu za poslední rok. Endokrinolog s tím pracuje víc než s jedním číslem.

Případná léčba se řídí nálezem a plánuje se s ohledem na to, že chcete otěhotnět, proto řekněte hned na začátku, v jaké jste fázi.

## Na co se zeptat lékaře

1. Jakou otázku má tohle vyšetření zodpovědět?
2. Mám před odběry něco dodržet. Lačnění, denní dobu, vysazení doplňků?
3. Co z nálezu plyne pro plán léčby neplodnosti?
4. Můžeme mezitím pokračovat, nebo se čeká?
5. Jak často se budou kontroly opakovat?

> Referenční meze závisí na laboratoři, denní době a kontextu. Výklad i případnou léčbu určuje lékař.`,
  },
  {
    id: 'vys-imunologie',
    kind: 'article',
    title: 'Imunologické vyšetření: kde jsou hranice důkazů',
    excerpt:
      'Oblast, kde se nabízí nejvíc testů a kde je nejmíň jistoty. Co se vyšetřuje, co je ověřené a co ne.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['vysledky', 'klinika'],
    level: 'deep',
    hero: 'dusk',
    reviewedBy: REVIEW,
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Uhnízdění embrya je proces, na kterém se imunitní systém podílí. Z toho vznikla celá skupina vyšetření, která se nabízejí při opakovaných neúspěších. Je poctivé rozdělit je na dvě části: na ta s jasným ukotvením a na ta, kde je důkazů málo.

## Co může ukázat

Do skupiny s jasným ukotvením patří především **antifosfolipidové protilátky**, jejichž souvislost s opakovanými ztrátami těhotenství je popsaná a pro které existuje domluvený postup vyšetření i léčby. Sem patří i vyšetření autoimunitního onemocnění štítné žlázy.

Do druhé skupiny patří například stanovení NK buněk z krve, vyšetření cytokinů nebo shody znaků mezi partnery. **Metodika se mezi laboratořemi liší, hodnoty z krve nemusí odpovídat situaci v děloze a přínos léčby vedené podle těchto testů není spolehlivě doložený.** Odborné společnosti k nim proto přistupují zdrženlivě a nedoporučují je jako běžnou součást vyšetření.

Zvlášť opatrně je potřeba přistupovat k léčbě, která se podle takových testů někdy nabízí. Některé postupy nemají doložený přínos a přitom nesou rizika i náklady.

## Kdy může být relevantní

Cílené imunologické vyšetření může být zvažováno po opakovaných ztrátách těhotenství nebo po opakovaně neúspěšných transferech kvalitních embryí, a to po vyloučení jiných příčin. **Není součástí vyšetření každé ženy ani každého páru.**

## Jak vyšetření probíhá

Většinou odběr krve, někdy odběr vzorku děložní sliznice. Část testů se opakuje s odstupem, protože jednorázový nález nestačí. Řada vyšetření není hrazená.

## Na co se zeptat lékaře

1. Jaká je opora v důkazech pro tenhle konkrétní test?
2. Co se změní v našem postupu podle výsledku?
3. Jaká léčba by z toho plynula a jaká má rizika?
4. Kolik to stojí a je to hrazené?
5. Existuje jiné vysvětlení, které jsme ještě neprověřili?

> Tento text shrnuje obecný stav poznání. O tom, jestli má vyšetření ve vaší situaci smysl, rozhoduje lékař. Proberte to se svou klinikou.`,
  },
  {
    id: 'vys-stitna-zlaza',
    kind: 'article',
    title: 'Vyšetření štítné žlázy: víc než jedna hodnota',
    excerpt:
      'TSH, fT4, protilátky a ultrazvuk. Proč se štítná žláza sleduje při plánování těhotenství a co se z čeho pozná.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['hormony', 'vysledky'],
    level: 'essential',
    hero: 'pearl',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-02',
    body: `## Proč se dělá

Štítná žláza ovlivňuje látkovou výměnu celého těla a její funkce se promítá i do cyklu a do časného těhotenství. V prvních týdnech je navíc dítě zcela závislé na hormonech matky. Proto se u žen, které plánují těhotenství nebo procházejí léčbou neplodnosti, sleduje častěji než v běžné populaci.

## Co může ukázat

- **TSH**: první, orientační pohled na funkci.
- **fT4**, volný tyroxin. Doplňuje TSH tam, kde je hodnota mimo očekávání.
- **Protilátky proti štítné žláze**, nejčastěji anti-TPO. Mohou ukázat autoimunitní zánět, a to i tehdy, když funkce zatím vychází bez odchylky. Nález ovlivňuje četnost kontrol.
- **Ultrazvuk štítné žlázy**: velikost, strukturu a uzly.

Jedna hodnota TSH tedy nedává úplný obraz. Co se doplní, rozhoduje lékař podle nálezu a příznaků.

## Kdy může být relevantní

Vyšetření může být součástí plánu při plánování těhotenství, při poruše cyklu, při známém onemocnění štítné žlázy u vás nebo v rodině, po ztrátě těhotenství, při únavě, výrazné změně hmotnosti nebo vypadávání vlasů. Rozsah určuje lékař podle situace.

## Jak vyšetření probíhá

Odběr krve, obvykle ráno, na dni cyklu většinou nezáleží. Pokud už hormony štítné žlázy užíváte, domluvte si předem, kdy si vzít dávku vzhledem k odběru.

Nahlaste doplňky s biotinem, které mohou u některých metod výsledek zkreslit, a přípravky s jódem.

Ultrazvuk štítné žlázy je nebolestivý, provádí se vleže sondou na krku a trvá pár minut.

Pokud je nález odchylný, sledování a případnou léčbu vede lékař. Často endokrinolog. Cílové hodnoty v těhotenství se liší od hodnot mimo těhotenství, proto se kontroly po otěhotnění zpřísňují.

## Na co se zeptat lékaře

1. Které parametry doplníte k TSH a proč?
2. Jaké hodnoty jsou u mě cílem při plánování těhotenství?
3. Jak často se budou kontroly opakovat?
4. Mám jít k endokrinologovi?
5. Jak se změní sledování, když otěhotním?

> Cílová rozmezí se liší podle laboratoře a situace. Konkrétní hodnoty i případnou léčbu určuje lékař.`,
  },

  // --- Checklist --------------------------------------------------------
  {
    id: 'vys-checklist-prvni-konzultace',
    kind: 'checklist',
    title: 'Co si vzít na první konzultaci',
    excerpt:
      'Čtyřicet minut u lékaře jde využít dobře, nebo se prochodí sháněním informací, které jste měla doma v šuplíku.',
    minutes: 4,
    phases: ['diagnostics'],
    topics: ['klinika', 'vysledky'],
    level: 'essential',
    hero: 'champagne',
    author: 'Tým Bloomia',
    publishedOn: '2026-08-02',
    boost: 0.8,
    body: `## Proč zrovna tohle

První konzultace má obvykle pevně daný čas a lékař z ní potřebuje odejít s představou, co u vás vyšetřit dřív a co později. Většinu té představy si udělá z toho, co mu přinesete a co mu řeknete, ne z toho, co si sám objedná.

Nejčastější zdržení nejsou složitá: chybějící staré výsledky, neznámá délka cyklu, partner, který nepřišel a nemá kdy. Každá z těch věcí posune plán o týdny.

## Jak to použít

Projděte seznam pár dní předem, ne v autě před klinikou. Nepovinné položky jsou označené. Nejsou zbytečné, jen se bez nich obejdete.

A ještě jedna věc: ptejte se. Otázka „co konkrétně bude dál a kdy" není otravná, je to ta nejužitečnější věta celé konzultace.

> Rozsah vyšetření skládá lékař podle vaší situace. Nic z toho, co si přinesete, není povinné vyšetření. Je to podklad, aby se rozhodoval z něčeho.`,
    checklist: [
      {
        id: 'vys-cl-doklady',
        text: 'Doklad totožnosti a kartička pojišťovny',
        group: 'Papíry',
      },
      {
        id: 'vys-cl-zprava',
        text: 'Doporučení nebo zpráva od gynekologa',
        hint: 'I když je stará, řekne lékaři, odkud vycházíte.',
        group: 'Papíry',
      },
      {
        id: 'vys-cl-stare-vysledky',
        text: 'Všechny dosavadní výsledky odběrů a ultrazvuků',
        hint: 'I ty roky staré. Klidně jako fotky v telefonu, ale ať jsou čitelné.',
        group: 'Papíry',
      },
      {
        id: 'vys-cl-operace',
        text: 'Zprávy z operací a hospitalizací',
        hint: 'Zvlášť z výkonů v břiše a v malé pánvi.',
        group: 'Papíry',
      },
      {
        id: 'vys-cl-partner-vysledky',
        text: 'Výsledky partnera, pokud nějaké má',
        group: 'Papíry',
      },
      {
        id: 'vys-cl-cyklus',
        text: 'Přehled cyklu za posledních 6 až 12 měsíců',
        hint: 'Datum první den krvácení a délka cyklu. Stačí seznam v poznámkách.',
        group: 'Co si připravit',
      },
      {
        id: 'vys-cl-leky',
        text: 'Seznam léků, doplňků a vitaminů včetně dávek',
        hint: 'Doplňky se často zapomenou, a přitom některé ovlivňují výsledky odběrů.',
        group: 'Co si připravit',
      },
      {
        id: 'vys-cl-alergie',
        text: 'Alergie a nesnášenlivosti',
        group: 'Co si připravit',
      },
      {
        id: 'vys-cl-anamneza',
        text: 'Jak dlouho se snažíte a co jste zatím zkusili',
        hint: 'Včetně předchozích těhotenství a ztrát, i těch velmi časných.',
        group: 'Co si připravit',
      },
      {
        id: 'vys-cl-rodina',
        text: 'Rodinná anamnéza u vás i u partnera',
        hint: 'Trombózy, onemocnění štítné žlázy, dědičná onemocnění, časná menopauza.',
        group: 'Co si připravit',
      },
      {
        id: 'vys-cl-otazky',
        text: 'Napsané otázky, tři nejdůležitější nahoře',
        hint: 'Na konci konzultace na ně nezbude čas ani hlava.',
        group: 'Co si připravit',
      },
      {
        id: 'vys-cl-partner-ucast',
        text: 'Domluvená účast partnera, nebo aspoň jeho volný termín',
        hint: 'Vyšetřuje se pár. Když partner nepřijde, část plánu se odloží.',
        group: 'Na místě',
      },
      {
        id: 'vys-cl-zapisnik',
        text: 'Zápisník nebo poznámky v telefonu na zapsání plánu',
        hint: 'Zapište si názvy vyšetření, termíny a den cyklu, kdy máte přijít.',
        group: 'Na místě',
      },
      {
        id: 'vys-cl-finance',
        text: 'Zeptat se, co je hrazené a co si budete platit',
        group: 'Na místě',
        optional: true,
      },
    ],
  },
]

export const pack: ContentPack = { items }
