import type { ContentPack } from '../types'

/**
 * Balík obsahu pro fáze `diagnostics` a `genetic_testing`.
 * Vše je psané obecně a vzdělávacím tónem — nikdy nestanovuje diagnózu
 * a nikdy nedoporučuje konkrétní dávkování. Vždy odkazuje na ošetřujícího lékaře.
 */
export const pack: ContentPack = {
  items: [
    {
      id: 'diag-clanek-prvni-navsteva',
      kind: 'article',
      title: 'Než poprvé vejdete do centra asistované reprodukce',
      excerpt:
        'Co se na první konzultaci reálně děje, co si vzít s sebou a proč z ní většina žen odchází s pocitem, že se nezeptala na to podstatné.',
      body: `## První návštěva není zkouška

Na první konzultaci se nerozhoduje o ničem definitivním. Je to setkání, na kterém lékař skládá obrázek z vaší historie a vy si skládáte obrázek z toho, jestli je tohle místo, kde chcete strávit příštích několik měsíců. Obojí je stejně důležité.

Většina žen odchází z první návštěvy se stejným pocitem: **bylo to rychlé a já se zapomněla zeptat na to hlavní.** Ne proto, že by byly nepřipravené. Ale protože v ordinaci sedí člověk, kterému právě někdo vysvětluje, proč se jí dva roky nedaří to, co se ostatním daří omylem. To s pozorností dělá své.

## Co se obvykle děje

Průběh se liší klinika od kliniky, ale kostra bývá podobná:

- **Anamnéza.** Cyklus, jeho délka a pravidelnost, operace, chronické nemoci, léky, kterou berete, gynekologická historie, těhotenství a ztráty, pokud nějaké byly. Ptají se i partnera.
- **Jak dlouho to zkoušíte a jak.** Buďte konkrétní. "Rok a půl, poslední půlrok podle ovulačních testů" je jiná informace než "dlouho".
- **Ultrazvuk.** Často hned. Lékař se dívá na dělohu, sliznici a vaječníky — mimo jiné počítá antrální folikuly.
- **Plán vyšetření.** Odběry krve navázané na konkrétní den cyklu, spermiogram partnera, vyšetření průchodnosti vejcovodů.
- **Papírování.** Souhlasy, registrace, informace o úhradách.

## Co si vzít s sebou

- Výsledky, které už máte — i staré, i "nic neříkající". Zvlášť hormonální odběry a jakékoli zprávy z operací.
- Přehled cyklů za poslední půlrok: první den menstruace, délka cyklu. Stačí poznámky v telefonu.
- Seznam léků a doplňků včetně dávek.
- Očkovací průkaz nebo informaci o zarděnkách a plané neštovici, pokud ji máte.
- Partnera, pokud to jde. Ne kvůli podpoře — kvůli tomu, že polovina vyšetření se týká jeho.
- **Zápisník nebo telefon na poznámky.** A dovolení zeptat se třikrát na totéž.

## Otázky, které stojí za to položit právě na první návštěvě

1. Jaká vyšetření mě čekají a v jakém pořadí?
2. Které z nich jsou vázané na konkrétní den cyklu?
3. Kdy a jak se dozvím výsledky? Kdo mi je vysvětlí?
4. Co hradí pojišťovna a co ne — orientačně, u nás konkrétně?
5. Kdo bude můj lékař při dalších návštěvách? Uvidím pokaždé někoho jiného?
6. Jak vás mohu kontaktovat, když se něco stane mimo ordinační hodiny?

## Na co se připravte emočně

Na první návštěvě zazní slova, která budete slyšet ještě mnohokrát: rezerva, faktor, indikace. Nejsou to rozsudky, jsou to pracovní kategorie. A také zazní věty, které bolí — třeba že váš věk je "hraniční". Lékař to říká jako údaj, vy to slyšíte jako obvinění. Je v pořádku, když vás to rozhodí. Neznamená to, že jste přecitlivělá.

Pokud odejdete a hodinu pak brečíte v autě, nejste na tom hůř než ostatní. Jste přesně tam, kde většina.

## Co udělat hned po návštěvě

Ještě než nasednete do auta, napište si do telefonu tři věci: **co bylo řečeno, co máte udělat a do kdy.** Za týden si nebudete pamatovat nic. Za měsíc si budete jistá, že vám něco řekli jinak.

> Tento text popisuje obecný průběh a nenahrazuje péči vašeho lékaře. Konkrétní postup, rozsah vyšetření i jejich načasování určuje vždy vaše klinika podle vaší situace.`,
      minutes: 7,
      phases: ['diagnostics'],
      dayRange: [1, 7],
      topics: ['klinika', 'vysledky', 'psychika'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-09-04',
      boost: 0.9,
    },
    {
      id: 'diag-checklist-prvni-navsteva',
      kind: 'checklist',
      title: 'Checklist na první konzultaci',
      excerpt:
        'Odškrtejte si to večer předtím a ráno už jen vezmete tašku — bez paniky, že jste něco zapomněla.',
      body: `## K čemu tenhle seznam je

Na první konzultaci si nemáte co pamatovat. Máte tam být přítomná a poslouchat. Všechno ostatní patří do složky, kterou si připravíte večer předtím.

Projděte checklist v klidu, ideálně den dopředu. Položky označené jako nepovinné vynechte bez výčitek — ne každá je má, ne každá je potřebuje.

## Jak s ním pracovat

- Odškrtávejte průběžně, ne najednou.
- Co nemáte, poznamenejte si to jako otázku na lékaře ("nevím, jestli mám výsledky štítné žlázy").
- Po návštěvě se k seznamu vraťte a dopište, co vám bylo zadáno.

> Seznam je orientační. Konkrétní požadavky vaší kliniky mají vždy přednost — když vám pošlou vlastní pokyny, řiďte se jimi.`,
      minutes: 4,
      phases: ['diagnostics'],
      dayRange: [1, 10],
      topics: ['klinika', 'vysledky'],
      level: 'essential',
      hero: 'linen',
      author: 'Tým Bloomia',
      publishedOn: '2025-09-06',
      boost: 0.8,
      checklist: [
        {
          id: 'diag-cl1-dokumenty',
          text: 'Občanský průkaz a kartička pojišťovny',
          group: 'Dokumenty',
        },
        {
          id: 'diag-cl1-stare-vysledky',
          text: 'Všechny dosavadní výsledky odběrů, i staré',
          hint: 'I ty, o kterých vám kdysi řekli, že jsou v pořádku. Lékař z nich čte vývoj v čase.',
          group: 'Dokumenty',
        },
        {
          id: 'diag-cl1-operace',
          text: 'Zprávy z operací a hospitalizací',
          hint: 'Zvlášť gynekologické zákroky, apendektomie a jakékoli operace v malé pánvi.',
          group: 'Dokumenty',
          optional: true,
        },
        {
          id: 'diag-cl1-cytologie',
          text: 'Poslední cytologie a gynekologická zpráva',
          group: 'Dokumenty',
          optional: true,
        },
        {
          id: 'diag-cl1-cyklus',
          text: 'Přehled posledních 6 cyklů — první den a délka',
          hint: 'Stačí poznámky v telefonu nebo screenshot z aplikace.',
          group: 'Vaše data',
        },
        {
          id: 'diag-cl1-leky',
          text: 'Seznam léků a doplňků včetně dávek',
          hint: 'Včetně vitaminů, bylinek a čehokoli, co berete pravidelně.',
          group: 'Vaše data',
        },
        {
          id: 'diag-cl1-alergie',
          text: 'Alergie a nesnášenlivosti',
          group: 'Vaše data',
        },
        {
          id: 'diag-cl1-rodina',
          text: 'Rodinná anamnéza — u vás i u partnera',
          hint: 'Genetické nemoci, opakované ztráty těhotenství, časná menopauza v rodině.',
          group: 'Vaše data',
        },
        {
          id: 'diag-cl1-partner-vysledky',
          text: 'Partnerovy výsledky, pokud nějaké má',
          group: 'Partner',
          optional: true,
        },
        {
          id: 'diag-cl1-partner-ucast',
          text: 'Domluvit s partnerem, že přijde s vámi',
          hint: 'Když to nejde, sepište mu předem otázky, na které se má lékaře zeptat příště.',
          group: 'Partner',
          optional: true,
        },
        {
          id: 'diag-cl1-otazky',
          text: 'Sepsané otázky na lékaře — maximálně pět',
          hint: 'Víc jich nestihnete. Vyberte ty, které vám nedají spát.',
          group: 'Příprava',
        },
        {
          id: 'diag-cl1-zapisnik',
          text: 'Zápisník nebo poznámky v telefonu na zápis',
          group: 'Příprava',
        },
        {
          id: 'diag-cl1-cas',
          text: 'Rezerva v kalendáři po návštěvě — alespoň hodina',
          hint: 'Neplánujte si hned poté meeting. Budete potřebovat chvíli sama.',
          group: 'Příprava',
        },
        {
          id: 'diag-cl1-hygiena',
          text: 'Počítat s ultrazvukem — praktické oblečení',
          hint: 'Sukně nebo šaty jsou pohodlnější než kombinéza.',
          group: 'Příprava',
          optional: true,
        },
      ],
    },
    {
      id: 'diag-video-mapa-vysetreni',
      kind: 'video',
      title: 'Mapa diagnostiky: co následuje po čem',
      excerpt:
        'Devět minut, po kterých budete vědět, kde v procesu jste a co vás čeká dál — bez toho, abyste se ptala pětkrát na totéž.',
      body: `## O čem video je

Diagnostika neplodnosti vypadá zvenčí jako chaotická hromada odběrů a termínů. Ve skutečnosti má logiku a ta logika je jednoduchá: **nejdřív se ptáme, jestli jsou vajíčka, jestli jsou spermie a jestli se mají kde potkat.** Všechno ostatní jsou doplňující otázky.

Ve videu procházíme mapu po čtyřech blocích.

**Blok první — vaječníky.** Kolik zásoby je a jak vaječník reaguje. Sem patří AMH z krve, které se dá odebrat kdykoli v cyklu, a počet antrálních folikulů na ultrazvuku na začátku cyklu. Doplňuje je hormonální profil odebíraný typicky mezi druhým a čtvrtým dnem cyklu — FSH, LH, estradiol.

**Blok druhý — spermie.** Spermiogram. Jedno vyšetření, které dokáže zásadně změnit směr celé léčby, a přesto se na něj v mnoha párech čeká měsíce. Ve videu ukazujeme, proč se dělá jako jedno z prvních a proč se často opakuje.

**Blok třetí — cesta.** Vejcovody a dutina děložní. HSG nebo HyFoSy ukáže průchodnost, ultrazvuk a případně hysteroskopie ukážou dutinu zevnitř. Tenhle blok se plánuje na první polovinu cyklu.

**Blok čtvrtý — doplňky podle situace.** Štítná žláza, prolaktin, androgeny, testy na trombofilii, karyotyp, imunologie. Nedělají se všem a nedělají se najednou. Ve videu vysvětlujeme, co obvykle bývá důvodem, proč je lékař přidá.

## Proč se to nedá udělat všechno v jednom týdnu

Protože část vyšetření je vázaná na den cyklu. Odběry na začátku, progesteron zhruba týden po ovulaci, HSG v první polovině cyklu po odeznění menstruace. Jeden cyklus tak obvykle stačí na většinu základu. Když se něco nestihne, posouvá se to o měsíc — a to je nejčastější důvod, proč diagnostika trvá déle, než čekáte.

## Co si z videa odnést

Že máte právo znát plán. Nemusíte tušit, co vás čeká — můžete se zeptat, jaký je rozvrh na tenhle cyklus a co se stane, když se něco nestihne.

> Video je vzdělávací a nenahrazuje konzultaci. Pořadí i rozsah vyšetření určuje vaše klinika podle vaší situace.`,
      minutes: 9,
      phases: ['diagnostics'],
      dayRange: [1, 14],
      topics: ['klinika', 'vysledky', 'hormony'],
      level: 'essential',
      hero: 'sky',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2025-09-11',
      boost: 0.75,
      mediaNote:
        'Animovaná mapa diagnostiky na klidném pozadí. Čtyři bloky vyšetření se postupně rozsvěcují, vlevo běží časová osa cyklu, takže je vidět, které vyšetření patří na který den. Komentuje ženský hlas, tempo pomalé, bez hudby pod řečí.',
    },
    {
      id: 'diag-clanek-hormonalni-profil',
      kind: 'article',
      title: 'Hormonální profil: proč zrovna třetí den cyklu',
      excerpt:
        'Sedm zkratek na jednom papíře a nikdo vám neřekl, co znamenají — tady je jejich překlad do lidštiny.',
      body: `## Proč se odebírá na začátku cyklu

Hormony v cyklu netvoří stabilní hladinu, ale křivku. Kdybyste si nechala změřit estradiol v jiný den, dostala byste jiné číslo a obojí by bylo normální. Proto se základní profil odebírá v úzkém okně na **začátku cyklu, obvykle 2.–4. den**, kdy je systém "vynulovaný" a hodnoty jsou navzájem porovnatelné.

První den cyklu je den plného krvácení, ne špinění. Tenhle detail rozhoduje o tom, jestli odběr proběhne ve správné fázi — když si nejste jistá, zavolejte na kliniku a zeptejte se.

## Co se obvykle měří

- **FSH** — folikuly stimulující hormon. Signál z mozku do vaječníku: začni zrát. Čím víc ho tělo musí posílat, tím hůř vaječník slyší.
- **LH** — luteinizační hormon. Jeho prudký vzestup spouští ovulaci. Na začátku cyklu se hodnotí hlavně jeho poměr k FSH.
- **Estradiol (E2)** — hlavní ženský hormon, produkovaný rostoucími folikuly. Na začátku cyklu má být nízký; když nízký není, může to zkreslit čtení FSH.
- **Progesteron** — hormon druhé poloviny cyklu. Na začátku má být nízký, jeho hodnotu má smysl měřit až zhruba týden po ovulaci.
- **Prolaktin** — hormon spojený s tvorbou mléka. Vysoký může tlumit ovulaci.
- **TSH** — řídící hormon štítné žlázy. U plánovaného těhotenství se sleduje přísněji než u běžné populace.
- **Testosteron a další androgeny** — sledují se hlavně tam, kde je podezření na PCOS.

## Jak číst výsledek, aniž byste zpanikařila

Laboratoře používají **různé jednotky a různá referenční rozmezí**. Hodnota, která na jednom papíře vypadá alarmující, může být na jiném v normě. Nikdy neporovnávejte své číslo s číslem z internetového fóra — porovnávejte ho s rozmezím uvedeným na vlastním výsledku.

A hlavně: jeden parametr sám o sobě neznamená nic. Lékař čte **vztahy** mezi hodnotami. Vysoké FSH při vysokém estradiolu vypovídá o něčem jiném než vysoké FSH při nízkém estradiolu. Tohle je přesně ten typ interpretace, který nelze udělat doma.

## Co hodnoty ovlivňuje

Krátkodobě toho není málo:

- **Akutní nemoc nebo horečka** v týdnech před odběrem.
- **Hormonální antikoncepce** — hodnoty po jejím vysazení se ustalují postupně, někdy i několik cyklů.
- **Stres a nedostatek spánku** — hlavně u prolaktinu.
- **Doba odběru.** Prolaktin bývá vyšší ráno a po stresu z odběru samotného; někdy se proto opakuje.
- **Cvičení a sex** krátce před odběrem — u prolaktinu se doporučuje se jim předchozí den vyhnout.

## Když je jedna hodnota mimo

Nejčastější reakce je hledat na internetu, co to znamená. Nejužitečnější reakce je **poznamenat si otázku a počkat na lékaře**. Řada odchylek se opakovaným odběrem nepotvrdí. Řada dalších je snadno řešitelná a nemění plán léčby.

Co si můžete připravit:

1. Kdy přesně byl odběr (den cyklu, hodina).
2. Jestli jste v té době byla nemocná nebo v extrémním stresu.
3. Co v té době berete za léky a doplňky.
4. Jestli jste kdykoli dřív měla podobnou hodnotu.

## Co si zapamatovat

Hormonální profil není vysvědčení. Je to snímek jednoho konkrétního rána ve vašem těle. Rozhoduje trend, kontext a klinický obraz — ne jedna buňka v tabulce.

> Článek vysvětluje obecné principy a nenahrazuje péči lékaře. Interpretaci svých výsledků vždy nechte na ošetřujícím lékaři, který zná celý váš kontext.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [1, 12],
      topics: ['hormony', 'vysledky'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-09-15',
      boost: 0.85,
    },
    {
      id: 'diag-clanek-fsh-lh',
      kind: 'article',
      title: 'FSH a LH: dvojice, která řídí váš cyklus',
      excerpt:
        'Dva hormony z mozku, které rozhodují o tom, jestli folikul doroste — a proč se hodnotí vždy spolu, nikdy zvlášť.',
      body: `## Odkud přicházejí

FSH i LH se netvoří ve vaječníku, ale v **podvěsku mozkovém**. Vaječník je tedy spíš vykonavatel než zadavatel. Mozek posílá signál, vaječník odpovídá — a z toho, jak silný signál musí mozek poslat, se dá číst, jak dobře vaječník poslouchá.

## FSH — hormon, který budí folikuly

FSH (folikuly stimulující hormon) na začátku cyklu vyzývá skupinu folikulů, aby začaly růst. Jeden z nich se stane dominantním a ten pak potlačí ostatní.

Klíčová logika, kterou stojí za to pochopit:

- Když vaječník **reaguje ochotně**, stačí mu málo FSH a hladina zůstává nízká.
- Když je zásoba folikulů menší nebo hůř reagují, mozek **přidává na hlasitosti** a FSH stoupá.

Proto se vyšší FSH na začátku cyklu vnímá jako signál nižší ovariální rezervy. Ale — a tohle se často opomíjí — FSH kolísá cyklus od cyklu. Jedna vyšší hodnota není verdikt. Lékaři ji čtou spolu s AMH a počtem antrálních folikulů, které kolísají méně.

## LH — hormon, který spouští ovulaci

LH (luteinizační hormon) je po většinu cyklu v pozadí. Uprostřed cyklu ale prudce vystřelí a tenhle vzestup spustí uvolnění vajíčka. Právě LH detekují **ovulační testy z moči** — proto se doporučuje testovat spíš odpoledne než ráno a proto pozitivní test neznamená, že ovulace už proběhla, ale že se blíží.

## Proč se hodnotí poměr

Na začátku cyklu bývají FSH a LH zhruba v rovnováze. Když je LH výrazně vyšší než FSH, může to být jeden z ukazatelů směřujících k **PCOS** — ale sám o sobě nestačí, PCOS se nediagnostikuje z jednoho poměru.

Naopak nízké FSH i LH zároveň vedou pozornost k jiné otázce: jestli signál z mozku vůbec přichází v dostatečné síle. Tenhle stav se objevuje například při výrazném úbytku hmotnosti, velmi intenzivním sportu nebo dlouhodobém energetickém deficitu.

## Co s hodnotami dělá antikoncepce

Hormonální antikoncepce systém FSH–LH tlumí záměrně. Po jejím vysazení se osa **rozjíždí postupně** a odběry v prvních cyklech mohou být zavádějící. Pokud jste antikoncepci nedávno vysadila, řekněte to na klinice — může to změnit načasování odběru.

## Co FSH neříká

- **Neříká kvalitu vajíček.** Ta se z krve neměří vůbec.
- **Neříká, kolik máte času.** Rezerva a plodnost nejsou totéž.
- **Neříká, jestli otěhotníte.** Ženy s vyšším FSH otěhotní, ženy s krásným FSH někdy ne.

Co ale říká, a to je jeho hlavní klinický přínos: **jak pravděpodobně budete reagovat na stimulaci.** Podle toho lékař volí protokol a podle toho odhaduje, kolik vajíček se dá čekat.

## Když vám vyjde vyšší FSH

Nejužitečnější tři kroky:

1. Zeptejte se, jaká byla ve stejném odběru hodnota estradiolu. Vysoký estradiol může FSH falešně "stáhnout" a hodnota pak vypadá lépe, než jaká je.
2. Zeptejte se, jestli má smysl odběr zopakovat v jiném cyklu.
3. Zeptejte se, co konkrétně to mění na plánu léčby. Někdy nic. Někdy to znamená, že se nemá otálet.

> Text popisuje obecné principy a nenahrazuje péči vašeho lékaře. Vaše hodnoty umí vyložit jen ten, kdo zná celý váš klinický obraz.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [3, 16],
      topics: ['hormony', 'vysledky'],
      level: 'deep',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-09-19',
    },
    {
      id: 'diag-clanek-estradiol-progesteron',
      kind: 'article',
      title: 'Estradiol a progesteron: hormony, které staví a udržují',
      excerpt:
        'Jeden buduje sliznici, druhý ji připravuje na embryo — a oba se měří v naprosto jiný den, což bývá zdroj zbytečných zmatků.',
      body: `## Dva hormony, dvě poloviny cyklu

Cyklus se dá číst jako stavba. **Estradiol** v první polovině staví — roste s folikuly a spolu s ním roste děložní sliznice. **Progesteron** ve druhé polovině stavbu dokončuje a udržuje — mění sliznici na prostředí, ve kterém se embryo může uchytit.

Když tenhle rytmus pochopíte, přestane vám připadat nesmyslné, že vás klinika objednává na odběry v konkrétní dny.

## Estradiol (E2)

Estradiol produkují rostoucí folikuly. Jeho hodnota tedy nepřímo vypovídá o tom, kolik a jak velkých folikulů máte.

**Na začátku cyklu** se očekává nízká hodnota. Proč to lékaře zajímá:

- Nízký estradiol potvrzuje, že tělo je opravdu na začátku cyklu a **hodnota FSH se dá číst poctivě**.
- Vyšší estradiol na začátku cyklu může znamenat, že něco už roste — třeba cysta nebo předčasně vybraný folikul — a FSH pak vypadá lépe, než ve skutečnosti je.

**Během stimulace** se estradiol měří opakovaně a slouží jako jeden z ukazatelů, jak vaječníky reagují. To je ale už jiná fáze léčby.

## Progesteron

Progesteron tvoří žluté tělísko — struktura, která ve vaječníku vznikne po ovulaci. Proto má měření progesteronu smysl **zhruba týden po ovulaci**, typicky kolem 21. dne u čtyřiadvacetidenního až osmadvacetidenního cyklu.

Právě tady vzniká nejčastější nedorozumění. "Odběr na 21. den" není magické datum, ale zkratka pro "sedm dní po ovulaci". Když ovulujete později, odběr na 21. den ukáže nízký progesteron — a nebude to znamenat žádnou poruchu, jen špatné načasování.

Co z hodnoty lékař čte:

- **Jestli ovulace vůbec proběhla.** Tohle je hlavní důvod odběru.
- Doplňkovou informaci o kvalitě druhé fáze cyklu, vždy v kontextu délky cyklu a ultrazvuku.

## Když máte nepravidelný cyklus

Pak je odběr na pevné datum téměř k ničemu. Užitečnější bývá kombinace: sledování ovulace (ovulační testy, ultrazvukové sledování růstu folikulu) a odběr navázaný na skutečnou ovulaci, ne na kalendář. Zeptejte se na klinice, jak to řeší u vás — je to naprosto legitimní otázka.

## Čemu nevěřit

Na internetu koluje představa, že "nízký progesteron" je běžná příčina neplodnosti a že se dá jednoduše doplnit. Realita je opatrnější: **samotná hodnota progesteronu je velmi variabilní** i během jednoho dne, protože se vyplavuje v pulzech. Proto se z jednoho čísla nedá dělat závěr o "nedostatečnosti luteální fáze" — a proto se nasazování jakékoli podpory řídí klinickým obrazem, ne jedním výsledkem z laboratoře.

Ať se dočtete cokoli, **nikdy si sama nenasazujte hormonální přípravky** ani volně dostupné doplňky, které slibují úpravu hormonů. Progesteron ovlivňuje mimo jiné načasování menstruace a jeho užívání naslepo dokáže celý diagnostický obraz zamlžit.

## Tři otázky pro lékaře

1. Ve kterém dni mého cyklu chcete progesteron odebrat a proč zrovna tehdy?
2. Jak zjistíme, kdy skutečně ovuluju?
3. Co z těch hodnot pro nás vyplývá dál?

> Článek slouží k orientaci a nenahrazuje lékařskou péči. Rozhodnutí o jakékoli léčbě patří vždy vašemu ošetřujícímu lékaři.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [14, 26],
      topics: ['hormony', 'vysledky'],
      level: 'deep',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-09-24',
    },
    {
      id: 'diag-clanek-prolaktin-testosteron',
      kind: 'article',
      title: 'Prolaktin a androgeny: když do cyklu mluví další hráči',
      excerpt:
        'Dva parametry, které umí rozhodit ovulaci, aniž byste o tom měla tušení — a které se často měří špatně načasovaně.',
      body: `## Prolaktin — hormon, který má tělo za to, že už kojíte

Prolaktin je hormon spojený s tvorbou mléka. Jeho hlavní role přichází po porodu, ale v malém množství ho tvoří každá žena. Když je ho ale příliš, tělo se chová, jako by právě kojilo — a **utlumí ovulaci**. Z evolučního hlediska to dává smysl: kojící tělo nechce hned další těhotenství. Z hlediska ženy, která se snaží otěhotnět, je to překážka.

Projevy zvýšeného prolaktinu mohou být:

- nepravidelný nebo vynechávající cyklus,
- slabší nebo chybějící ovulace,
- výtok z prsu mimo těhotenství a kojení,
- bolesti hlavy nebo změny vidění, pokud je hodnota výrazně vysoká.

## Proč jedna vysoká hodnota nic neznamená

Prolaktin je **hormon stresu**. Vystřelí po fyzické námaze, po sexu, po vyšetření prsu, při bolesti — a klidně i po samotném odběru krve, pokud se vpichu bojíte. Proto se zvýšená hodnota téměř vždy **opakuje** a často se odebírá v klidnějších podmínkách.

Praktické, co obvykle kliniky doporučují:

- Odběr ráno, po nočním odpočinku.
- Den předtím vynechat intenzivní sport a sex.
- Před odběrem chvíli sedět v klidu.
- Zmínit léky, které berete — prolaktin zvyšuje řada běžných léků, mimo jiné některá antidepresiva, léky na nevolnost a na žaludek.

Když je hodnota opakovaně vysoká, následuje pátrání po příčině. Nejčastěji jde o **funkční zvýšení** nebo o vliv léku, méně často o nezhoubný útvar na podvěsku mozkovém. To se řeší velmi dobře a obvykle bez operace — konkrétní postup vždy určí lékař.

## Androgeny — testosteron a spol.

Androgeny se běžně označují jako "mužské hormony", ale v malém množství je tvoří i ženské tělo a jsou pro cyklus potřebné. Sledují se hlavně tam, kde je podezření na **PCOS**.

Obvykle se z krve stanovuje:

- **Celkový a volný testosteron** — přičemž pro obraz je důležitější ten volný, tedy ten, který je aktivní.
- **SHBG** — bílkovina, která testosteron váže. Nízké SHBG znamená, že víc testosteronu zůstává volného.
- **Androstendion a DHEAS** — androgeny z nadledvin, pomáhají odlišit, odkud přebytek přichází.
- **17-OH progesteron** — pomáhá odlišit vzácnější stavy, které PCOS napodobují.

## Co znamená "zvýšené androgeny"

Ne automaticky PCOS. Znamená to, že se má hledat příčina. A naopak — **PCOS může existovat i při normálních hodnotách v krvi**, pokud jsou přítomné jiné projevy nadbytku androgenů, jako je akné, nadměrné ochlupení nebo vypadávání vlasů podle mužského vzoru.

Tohle je jeden z důvodů, proč se PCOS nedá diagnostikovat z jednoho odběru a proč je zbytečné dělat si závěry doma nad výsledkem z laboratoře.

## Kdy má smysl se ptát

Na kontrolní konzultaci se vyplatí zeptat na tři věci:

1. Byla hodnota potvrzena opakovaným odběrem?
2. Může ji ovlivňovat něco, co beru nebo dělám?
3. Mění tenhle nález něco na plánu léčby, nebo je to informace do složky?

Třetí otázka je z nich nejužitečnější. Řada nálezů je zajímavá, ale na postup nemá vliv — a vy si kvůli nim zbytečně nespíte.

> Text je vzdělávací a nenahrazuje lékařskou péči. Nikdy neupravujte ani nenasazujte léky podle informací z internetu — o léčbě rozhoduje váš lékař.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [3, 20],
      topics: ['hormony', 'vysledky'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-09-29',
    },
    {
      id: 'diag-clanek-amh',
      kind: 'article',
      title: 'AMH: číslo, které vás vyděsí, i když nemusí',
      excerpt:
        'Nejpřeceňovanější a zároveň nejužitečnější hodnota v celé diagnostice — tady je, co skutečně měří a co neměří.',
      body: `## Co AMH je

AMH — anti-Müllerián hormon — vzniká v drobných, ještě nezralých folikulech ve vaječníku. Čím víc takových folikulů máte, tím vyšší hodnota. Proto se AMH používá jako **ukazatel ovariální rezervy**, tedy zásoby.

Dvě praktické výhody, kvůli kterým ho kliniky milují:

- **Nekolísá zásadně během cyklu**, takže se dá odebrat prakticky kdykoli.
- **Dobře předpovídá reakci na stimulaci** — tedy kolik vajíček se dá při IVF očekávat.

## Co AMH neměří

A tady je jádro věci, protože právě tohle nikdo neřekne dost nahlas:

- **Neměří kvalitu vajíček.** Kvalitu určuje především věk, ne AMH. Žena s nízkým AMH ve třiceti má často lepší vyhlídky než žena s vyšším AMH ve čtyřiceti dvou.
- **Neměří pravděpodobnost přirozeného otěhotnění.** Nízké AMH neznamená, že nemůžete otěhotnět bez pomoci.
- **Není odpočet do menopauzy.** Souvislost tam je, ale volná — z jedné hodnoty se datum nepředpovídá.

Když si z článku odnesete jedinou větu, ať je to tahle: **AMH říká, kolik jich pravděpodobně je. Neříká, jaké jsou.**

## Proč se hodnoty tak liší

Než začnete své číslo srovnávat s cizím, vězte, že:

- Laboratoře používají **různé jednotky** — nejčastěji ng/ml a pmol/l. Mezi nimi je zhruba sedminásobný rozdíl, takže "1,2" a "8,5" může být tatáž žena.
- Různé laboratorní soupravy dávají **mírně odlišné výsledky** i ze stejného vzorku.
- Hodnotu může snižovat **hormonální antikoncepce** a některé stavy; naopak u PCOS bývá AMH vysoké.

Referenční rozmezí uvedené na vašem výsledku je tedy důležitější než jakákoli tabulka z internetu.

## Když je AMH nízké

První reakce bývá panika a hledání, "co s tím dělat". Realisticky: **zásobu vajíček nelze zvýšit.** Žádný doplněk stravy, dieta ani terapie nevytvoří nové folikuly.

Co ale nízké AMH reálně mění:

- **Načasování.** Je to argument pro to neodkládat rozhodnutí o léčbě.
- **Volbu protokolu.** Lékař podle něj plánuje stimulaci.
- **Očekávání.** Pravděpodobně se získá méně vajíček v jednom odběru, což někdy vede ke strategii několika odběrů za sebou.

Nemění to ale to nejdůležitější: **stačí jedno dobré vajíčko.** To není útěcha, to je mechanika procesu.

## Když je AMH vysoké

Vysoké AMH bývá u PCOS a znamená, že folikulů je hodně. To zní jako výhra, ale nese své riziko — **vyšší citlivost na stimulaci a riziko hyperstimulace (OHSS)**. Proto se u vysokého AMH volí opatrnější protokoly.

## Jak s číslem zacházet psychicky

AMH je jedno z prvních čísel, které v diagnostice dostanete, a snadno se stane identitou. Ženy si o sobě začnou říkat "jsem nízkoamhová", jako by to byla vlastnost povahy. Není. Je to jeden údaj z jednoho odběru.

Když vám číslo vzalo dech, dejte si tři dny, než z něj budete dělat závěry — a nechte si ho vyložit člověkem, který zná i váš věk, AFC, cyklus a diagnózu partnera.

## Otázky na konzultaci

1. V jakých jednotkách je moje hodnota a jaké je rozmezí u vaší laboratoře?
2. Jak to vypadá v kombinaci s mým počtem antrálních folikulů?
3. Mění to vaše doporučení ohledně načasování a typu léčby?

> Článek nenahrazuje lékařskou péči. Vaše AMH má smysl jen v kontextu, který zná váš lékař.`,
      minutes: 9,
      phases: ['diagnostics'],
      dayRange: [2, 18],
      topics: ['hormony', 'vysledky', 'psychika'],
      level: 'essential',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-10-02',
      boost: 0.95,
    },
    {
      id: 'diag-clanek-nizke-amh',
      kind: 'article',
      title: 'Nízké AMH: co to mění a co ne',
      excerpt:
        'Pro ženy, kterým právě řekli číslo, po kterém se špatně dýchá — bez falešné útěchy a bez zbytečné hrůzy.',
      body: `## Nejdřív to nepříjemné

Nízké AMH znamená, že **zásoba folikulů ve vaječnících je menší, než se v daném věku očekává**. Nedá se zvýšit. Nikdo vám ho nezvedne doplňkem, dietou ani akupunkturou, ať slibuje cokoli. Když někdo tvrdí opak, prodává vám naději, kterou nemůže dodat.

Teď to podstatné, co se říká méně často.

## Co nízké AMH neznamená

- **Neznamená, že jste neplodná.** Ženy s nízkým AMH otěhotní přirozeně i po léčbě.
- **Neznamená špatnou kvalitu vajíček.** Kvalita jde primárně s věkem. Máte-li nízké AMH a je vám třicet, vaše vajíčka jsou pravděpodobně vajíčka třicetileté ženy.
- **Neznamená, že IVF nemá smysl.** Znamená to, že se pravděpodobně získá méně vajíček v jednom cyklu.
- **Neznamená blížící se menopauzu.** Souvislost existuje, ale předpovídat z ní datum nelze.

## Co nízké AMH mění prakticky

**Čas přestává být neutrální.** To je hlavní důsledek. U ženy s dobrou rezervou je odklad o rok často nepodstatný. Při nízkém AMH je to argument pro to jednat dřív, protože rezerva se s časem nezvyšuje.

**Mění se plán stimulace.** Lékař obvykle volí protokol cílený na maximální výtěžnost. Konkrétní volba je čistě na něm a liší se podle vašich hodnot, věku a dosavadní odpovědi.

**Mění se strategie.** Někdy se místo jednoho velkého cyklu volí několik menších odběrů po sobě, aby se nasbíralo víc embryí. Někdy je řeč o zamrazení. Tohle je téma na konkrétní rozhovor s lékařem, ne na obecné doporučení.

## Co dělat, když vám číslo sebralo půdu pod nohama

1. **Nechte si ho vysvětlit v kontextu.** Zeptejte se na počet antrálních folikulů — spolu s AMH dávají mnohem přesnější obrázek.
2. **Zeptejte se přímo:** co konkrétně tohle číslo mění na tom, co budeme dělat? Někdy odpověď zní "nic zásadního".
3. **Zeptejte se na časový plán.** Kdy začít, na co čekáme a proč.
4. **Nehledejte ve fórech příběhy s nižším číslem.** Uleví se vám na hodinu a pak si najdete horší.

## O čem se v souvislosti s nízkým AMH mluví

Setkáte se s doplňky stravy, které se u snížené rezervy někdy zvažují, a s různými přístupy k protokolu. Důkazy o účinnosti jsou u některých z nich slabé nebo nejednoznačné a **nic z toho si nenasazujte sama** — část přípravků ovlivňuje hormonální hladiny a může zkreslit vaše výsledky. Přineste seznam toho, co zvažujete, a nechte si to schválit.

## Věta, kterou si nechte

Vaše léčba se nehraje o statistiku. Hraje se o **jedno embryo, které se uchytí**. Nízké AMH zhoršuje pravděpodobnost, že takové embryo dostanete v prvním pokusu — nemění ale to, že když ho dostanete, funguje stejně dobře jako embryo kohokoli jiného.

## Kdy mluvit o dalších možnostech

Je legitimní se zeptat, jaké jsou varianty, kdyby vlastní vajíčka nestačila — třeba darovaná vajíčka. Ptát se na to neznamená, že jste to vzdala. Znamená to, že chcete znát celou mapu, ne jen první odbočku. A že ji chcete znát dřív, než na ni budete odkázaná v úplném vyčerpání.

> Text nenahrazuje péči lékaře. Jakýkoli plán léčby i užívání doplňků konzultujte se svým ošetřujícím lékařem.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [5, 30],
      topics: ['hormony', 'vysledky', 'psychika'],
      modifiers: ['low_amh'],
      level: 'deep',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-10-07',
      boost: 0.8,
    },
    {
      id: 'diag-clanek-antralni-folikuly',
      kind: 'article',
      title: 'Antrální folikuly (AFC): ultrazvuk, který doplní AMH',
      excerpt:
        'Lékař na ultrazvuku počítá tmavé tečky na vaječnících — vysvětlujeme, co to číslo znamená a proč je stejně důležité jako AMH.',
      body: `## Co se vlastně počítá

Antrální folikuly jsou malé váčky s tekutinou ve vaječníku, každý obsahuje jedno nezralé vajíčko. Na ultrazvuku vypadají jako **tmavé kulaté tečky**. Obvykle se počítají ty o velikosti zhruba dva až devět milimetrů.

Součet z obou vaječníků je **AFC — antral follicle count**. Je to druhý pilíř posouzení ovariální rezervy, hned vedle AMH.

## Kdy se vyšetření dělá

Na **začátku cyklu**, typicky mezi druhým a pátým dnem. Důvod je praktický: později v cyklu už jeden folikul roste a ostatní ustupují, takže se počítá hůř. Vyšetření je vaginálním ultrazvukem, trvá pár minut a nebolí — může být nepříjemné, zvlášť když jste v napětí.

## Proč se dělá, když už máte AMH

Protože se navzájem kontrolují a doplňují:

- **AMH** je laboratorní hodnota. Je stabilní v čase, ale liší se podle laboratoře a soupravy.
- **AFC** je obrázek. Ukáže i **tvar a vzhled vaječníků** — třeba typický obraz u PCOS, cysty, endometriomy nebo to, že je jeden vaječník hůř dostupný.

Když si obě hodnoty odpovídají, obraz je jasný. Když si neodpovídají, je to samo o sobě informace — a lékař hledá důvod.

## Co číslo znamená v praxi

Vyšší AFC obvykle předpovídá, že se při stimulaci získá víc vajíček. Nižší AFC naznačuje opatrnější očekávání. Ale platí totéž co u AMH: **je to počet, ne kvalita.**

Několik věcí, které stojí za to vědět:

- Číslo **kolísá mezi cykly**. Jeden nižší výsledek nemusí znamenat trend.
- Počet závisí i na **kvalitě přístroje a zkušenosti toho, kdo počítá**. Různí lékaři se mohou lišit.
- **Hormonální antikoncepce** může počet dočasně snížit.
- **Endometriomy nebo velké cysty** mohou znesnadnit počítání a vaječník opticky "zaplnit".

## Jak s tím pracovat, když jste doma

Nejčastější scénář: lékař u ultrazvuku řekne číslo nahlas, vy si ho zapamatujete, přijdete domů a začnete hledat, jestli je "dobré". Nedělejte to. Bez znalosti vašeho věku, AMH a plánu léčby je to samostatné číslo prakticky nečitelné.

Co udělejte místo toho — zapište si:

1. Kolik folikulů bylo na pravém a kolik na levém vaječníku.
2. Který den cyklu vyšetření proběhlo.
3. Co lékař poznamenal o sliznici a děloze.
4. Jestli zmínil cysty nebo cokoli neobvyklého.

Tahle čtveřice se vám za pár měsíců bude hodit víc, než tušíte — hlavně při srovnávání v čase a při případné konzultaci na jiném pracovišti.

## Kdy se AFC opakuje

Před plánovanou stimulací se obvykle dělá znovu, protože slouží k volbě protokolu. Také se opakuje, pokud předchozí cyklus dopadl jinak, než se čekalo.

> Článek popisuje obecný princip vyšetření a nenahrazuje péči lékaře. Váš nález umí vyložit jen ten, kdo ho viděl a zná vaši historii.`,
      minutes: 6,
      phases: ['diagnostics'],
      dayRange: [1, 10],
      topics: ['hormony', 'vysledky', 'klinika'],
      level: 'deep',
      hero: 'pearl',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy'],
      publishedOn: '2025-10-12',
    },
    {
      id: 'diag-clanek-spermiogram',
      kind: 'article',
      title: 'Spermiogram: jak číst každý řádek',
      excerpt:
        'Jedno vyšetření, které dokáže obrátit celý směr léčby — a přesto se na něj v mnoha párech čeká zbytečně dlouho.',
      body: `## Proč se dělá jako jedno z prvních

Protože je **neinvazivní, rychlé a levné** — a přitom může vysvětlit celou situaci páru. Zhruba v polovině případů se na příčině obtíží podílí i mužský faktor. Když se spermiogram odkládá, odkládá se tím i celá léčba.

Pokud čtete tenhle text a partner ještě objednaný není, je to jediná věc, kterou má smysl udělat tento týden.

## Jak vyšetření probíhá

- Vzorek se odebírá **masturbací do sterilní nádobky**, obvykle přímo v odběrové místnosti kliniky.
- Doporučuje se **pohlavní abstinence dva až sedm dní** předem — kratší i delší interval výsledek zkresluje.
- Vzorek se musí dostat do laboratoře **rychle a při tělesné teplotě**, proto se odběr doma řeší jen výjimečně a po domluvě.
- Do nádobky nepatří lubrikant ani sliny; vzorek z kondomu běžného typu se nepoužívá.

## Co se hodnotí

**Objem ejakulátu.** Kolik ho je. Velmi malý objem může ukazovat na překážku v odvodných cestách nebo na chybu při odběru — třeba když část vzorku minula nádobku.

**Koncentrace a celkový počet.** Kolik spermií je v mililitru a kolik jich je celkem. Nízký počet se označuje jako **oligozoospermie**, úplná nepřítomnost spermií v ejakulátu jako **azoospermie**.

**Pohyblivost (motilita).** Kolik procent spermií se pohybuje a jak. Rozlišuje se pohyb dopředný a nedopředný. Snížená pohyblivost se označuje **astenozoospermie**.

**Morfologie.** Jaký podíl spermií má normální tvar. Hodnotí se podle přísných kritérií a čísla proto vypadají překvapivě nízko i u zdravých mužů. Zvýšený podíl abnormálních tvarů se označuje **teratozoospermie**.

**Vitalita.** Kolik spermií je živých. Důležité hlavně tam, kde je pohyblivost velmi nízká.

**Leukocyty.** Zvýšený počet bílých krvinek může upozornit na zánět.

**Zkapalnění a viskozita.** Vzorek se má do určité doby zkapalnit; když ne, hůř se hodnotí.

## Proč se výsledek téměř vždy opakuje

Protože spermiogram **kolísá enormně**. Tvorba spermií trvá zhruba tři měsíce, takže výsledek odráží podmínky posledního čtvrtroku — horečka, chřipka, antibiotika, silný stres, sauna, náročné období v práci. Jeden špatný výsledek proto **není diagnóza**. Kontrolní vyšetření se obvykle dělá po několika týdnech až měsících.

## Když výsledek vyjde špatně

Následují obvykle tyto kroky, podle rozhodnutí lékaře:

- Vyšetření u **androloga nebo urologa** — fyzikální vyšetření, ultrazvuk varlat, pátrání po varikokéle.
- **Hormonální odběry** u muže (například FSH, LH, testosteron, prolaktin).
- Při velmi nízkých hodnotách **genetické vyšetření** — karyotyp a mikrodelece na chromozomu Y.
- Někdy test **fragmentace DNA spermií (DFI)**.

A hlavně: existují řešení. **ICSI** — vpravení jedné spermie přímo do vajíčka — dokáže pracovat i s velmi malým počtem spermií. Při azoospermii se zvažuje odběr spermií přímo z varlete.

## Co pomáhá obecně

Bez slibů a bez zázraků, ale s rozumným základem: nekouřit, omezit alkohol, nepřehřívat varlata (sauna, vyhřívané sedačky, notebook na klíně), léčit infekce, udržet rozumnou hmotnost, spát. Změna se projeví nejdřív za tři měsíce, protože tak dlouho trvá jeden cyklus tvorby spermií.

> Text nenahrazuje lékařskou péči. Výsledek spermiogramu má vyhodnotit lékař v kontextu celé situace páru.`,
      minutes: 9,
      phases: ['diagnostics'],
      dayRange: [3, 25],
      topics: ['partner', 'vysledky', 'klinika'],
      level: 'essential',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Světová zdravotnická organizace — laboratorní manuál pro vyšetření ejakulátu',
        'ESHRE — doporučené postupy',
      ],
      publishedOn: '2025-10-16',
      boost: 0.9,
    },
    {
      id: 'diag-clanek-muzsky-faktor-rozhovor',
      kind: 'article',
      title: 'Mužský faktor: jak o něm mluvit, aby to partnera nezlomilo',
      excerpt:
        'Když výsledek ukáže na něj, přestane většina mužů mluvit — a vy zůstanete sama v procesu, který se týká obou.',
      body: `## Proč to muži nesou jinak

Když se u ženy najde nález, obvykle přijde smutek a strach. Když se najde u muže, přijde často **stud** — a stud se schovává. Není to slabost povahy, je to kulturní software. Plodnost je u mužů ve veřejném podvědomí spletená s mužností a s výkonem, i když s nimi nemá nic společného.

Praktický důsledek: partner se zavře. Přestane o tom mluvit, začne to zlehčovat ("vždyť to bude dobrý"), nebo naopak ustoupí a nechá řízení celé léčby na vás. To druhé bývá pro vztah nejnebezpečnější — vy pak neděláte jen léčbu, ale i všechnu emoční práci navíc.

## Co nefunguje

- **"Není to tvoje vina."** Myslíte to dobře, ale rovnou tím pojmenujete vinu, kterou možná ještě nevyslovil.
- **Sdílení výsledku dál** bez jeho výslovného souhlasu. Ani s vaší mámou. Ani s nejlepší kamarádkou.
- **Hledání příčiny v jeho minulosti.** Kouřil, hodně sportoval, chodil do sauny. K ničemu to nevede a on to slyší jako obžalobu.
- **Zlehčení.** "To je úplně běžné" je pravda, ale v prvních dnech to zní jako odmítnutí jeho pocitů.

## Co funguje

**Oddělte fakt od člověka.** "Ve vzorku bylo míň spermií" je informace o jednom vyšetření, ne o něm. Mluvte o tom stejně věcně, jako byste mluvili o svém AMH.

**Dejte tomu rámec času.** Spermiogram odráží poslední tři měsíce. Jedno číslo není verdikt. Tahle věta pomáhá skoro každému muži víc než jakákoli útěcha.

**Ptejte se na konkrétno, ne na pocity.** Muž, který nechce mluvit o tom, jak mu je, často ochotně mluví o tom, co bude dál. "Chceš, abych zjistila, kdy jsou volné termíny u androloga?" otevře dveře líp než "jak to prožíváš?".

**Nechte ho vlastnit jeho část léčby.** Ať si objedná sám. Ať se sám zeptá lékaře. Když všechno zařizujete vy, potvrzujete mu, že je v tom pasažér.

**Řekněte nahlas, že jste tým.** Ne jako frázi. Konkrétně: "Na tomhle jsme dva. Já mám svoje odběry, ty máš svoje. Jdeme do toho spolu."

## Když mlčí týdny

Někdy nepomůže nic z výše uvedeného a partner se úplně stáhne. Pak platí:

- Neopakujte otázku každý den. Řekněte jednou, že jste připravená mluvit, kdykoli bude chtít.
- **Nezastavujte kvůli tomu léčbu.** Vaše vyšetření běží dál.
- Nabídněte třetí osobu — psychologa, párovou terapii, konzultaci u androloga, kde bude sám. Někdy je snazší mluvit s cizím člověkem než s vámi.
- Dejte si termín, do kdy to má smysl nechat být. Pár měsíců ticha je pochopitelných. Rok ne.

## A vaše strana

Máte právo být naštvaná. Máte právo cítit úlevu, že tentokrát to není o vás — a máte právo se za tu úlevu stydět. Obojí je normální a nedělá z vás špatného člověka.

Co ale nepomůže: nést to sama a čekat, až si toho všimne. Řekněte nahlas, co potřebujete. I kdyby to bylo jen "potřebuju, abys mi jednou týdně řekl, jak ti je".

> Článek se týká vztahové stránky léčby a nenahrazuje odbornou péči. Zdravotní kroky vždy konzultujte s lékařem, psychickou zátěž s psychologem.`,
      minutes: 7,
      phases: ['diagnostics'],
      dayRange: [7, 40],
      topics: ['partner', 'vztah', 'psychika'],
      modifiers: ['male_factor'],
      level: 'comfort',
      hero: 'taupe',
      author: 'Gabi',
      publishedOn: '2025-10-21',
      boost: 0.8,
    },
    {
      id: 'diag-clanek-hsg-hyfosy',
      kind: 'article',
      title: 'HSG a HyFoSy: vyšetření průchodnosti vejcovodů',
      excerpt:
        'Nejobávanější vyšetření celé diagnostiky — a taky to, o kterém koluje nejvíc strašení. Tady je, co čekat doopravdy.',
      body: `## Proč se dělá

I když máte skvělá vajíčka a partner výborný spermiogram, bez průchodné cesty se nepotkají. **Vejcovod není jen trubka** — aktivně zachytává vajíčko a posouvá ho. Když je uzavřený, zjizvený nebo naplněný tekutinou, plodnost tím výrazně trpí, a někdy to má vliv i na úspěšnost IVF.

Proto patří vyšetření průchodnosti do základní diagnostiky.

## Dvě varianty téhož

**HSG (hysterosalpingografie)** — do dělohy se tenkou kanylou vpraví kontrastní látka a průběh se sleduje rentgenem. Vidí se tvar dutiny děložní i to, jestli kontrast projde vejcovody do dutiny břišní.

**HyFoSy (hystero-foam-sonografie)** — místo rentgenu se používá ultrazvuk a místo kontrastní látky pěnový roztok. Výhoda: **bez rentgenového záření**, dělá se přímo v ordinaci a lze při něm zároveň posoudit vaječníky.

Kterou variantu zvolit, rozhoduje klinika podle vybavení a vaší situace. Obě odpovídají na stejnou otázku.

## Kdy v cyklu

Typicky **v první polovině cyklu, po odeznění krvácení a před ovulací**. Důvod: nesmí být přítomné těhotenství a sliznice má být tenká, aby byl obraz čitelný. Kliniky obvykle žádají, abyste v daném cyklu do vyšetření nesouložili bez ochrany, nebo alespoň vyloučily těhotenství.

Před vyšetřením se také vylučuje infekce — neléčený zánět je kontraindikace.

## Bolí to?

Poctivá odpověď: **záleží.** Zkušenosti se liší od "nepříjemné jako stěr" po "silné křeče na několik minut". Nejsilnější pocit obvykle přijde ve chvíli, kdy se vpravuje tekutina a děloha se roztáhne — je to křečovitá bolest podobná menstruační, ale intenzivnější, a **obvykle trvá jen krátce**.

Co reálně pomáhá:

- Domluvit se předem na **analgetiku** — kliniky často doporučují běžný lék proti bolesti zhruba hodinu předem. Řekněte si o konkrétní doporučení, nedávkujte si nic sama nad rámec příbalového letáku.
- **Nejít tam s plným napětím.** Dýchat ven, ne zadržovat dech.
- Domluvit odvoz. Řízení po zákroku většinou zvládnete, ale nemusíte.
- Vzít si vložku — po vyšetření odchází tekutina a slabé špinění je běžné.
- Naplánovat si zbytek dne volněji.

## Po vyšetření

Běžné je: slabé krvácení nebo špinění jeden až dva dny, mírné křeče, únava. Sprchování ano, koupele a bazén podle pokynů kliniky spíš ne.

## Kdy volat lékaře

Tohle si přečtěte, ještě než na vyšetření půjdete:

- **Horečka nad 38 °C** nebo zimnice.
- **Silná bolest břicha**, která neustupuje po několika hodinách nebo se zhoršuje.
- **Silné krvácení** — víc než běžná menstruace, s koaguly.
- **Zapáchající výtok** v následujících dnech.
- **Mdloba, zvracení, závrať**, které neodezní.

Tyhle příznaky mohou znamenat zánět nebo jinou komplikaci a patří k lékaři bez odkladu.

## Co když vyjde, že vejcovod není průchodný

Neznamená to automaticky IVF, ale mění to úvahu. Řeší se, jestli jde o jeden nebo oba, jestli je vejcovod naplněný tekutinou (**hydrosalpinx**) a co s tím. U hydrosalpingu se někdy zvažuje operační řešení před transferem, protože tekutina může uchycení embrya zhoršovat — rozhodnutí je vždy na lékaři.

## Malý bonus, o kterém se moc nemluví

U části žen se po HSG **krátkodobě zvyšuje šance na otěhotnění** — předpokládá se, že vyšetření cestu pročistí. Není to důvod ho podstupovat, ale je to hezký vedlejší efekt, o kterém stojí za to vědět.

> Text popisuje obecný průběh a nenahrazuje péči lékaře. Přípravu, léky proti bolesti i chování po zákroku vždy řešte podle pokynů své kliniky.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [5, 14],
      topics: ['klinika', 'vysledky'],
      level: 'essential',
      hero: 'blush',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-10-26',
      boost: 0.85,
    },
    {
      id: 'diag-clanek-hysteroskopie',
      kind: 'article',
      title: 'Hysteroskopie: pohled dovnitř dělohy',
      excerpt:
        'Ultrazvuk ukáže tvar, hysteroskopie ukáže povrch — a právě na povrchu se rozhoduje, jestli se embryo uchytí.',
      body: `## Co to je

Hysteroskopie je vyšetření, při kterém se přes děložní hrdlo zavede **tenký optický přístroj** a lékař se dívá přímo do dutiny děložní. Vidí sliznici, vyústění vejcovodů, případné přepážky, srůsty nebo polypy.

Rozdíl proti ultrazvuku je zásadní. Ultrazvuk ukáže **stín a rozměr**. Hysteroskopie ukáže **skutečný povrch** — jestli je hladký, zarudlý, s výrůstkem nebo se srůsty.

## Diagnostická a operační

**Diagnostická** — jen se dívá. Bývá krátká, na některých pracovištích se dělá ambulantně bez celkové anestezie, přístrojem velmi malého průměru.

**Operační** — nález se zároveň řeší. Odstraní se polyp, přepážka, srůsty, ložisko sliznice. Obvykle v krátké celkové anestezii, často jako jednodenní chirurgie.

Někdy se ambulantní diagnostická hysteroskopie plánuje s tím, že když se něco najde, doplní se operační výkon později.

## Kdy se indikuje

Není to rutinní vyšetření pro každou. Lékař ji obvykle zvažuje při:

- podezření na útvar v dutině z ultrazvuku (polyp, myom zasahující do dutiny),
- **opakovaně neúspěšném transferu** kvalitních embryí,
- opakovaných ztrátách těhotenství,
- podezření na srůsty po předchozím zákroku nebo revizi,
- podezření na vrozenou odchylku tvaru dělohy,
- nepravidelném krvácení bez jasné příčiny.

## Jak se na ni připravit

- Plánuje se obvykle **v první polovině cyklu** po odeznění krvácení, kdy je sliznice tenká a přehledná.
- Nesmí být přítomné těhotenství ani neléčený zánět.
- U výkonu v anestezii platí **lačnění** podle pokynů pracoviště a nutnost doprovodu domů.
- Řekněte předem o lécích, které berete, zvlášť o těch ovlivňujících srážlivost.

## Jak to probíhá a jak to bolí

U ambulantní varianty popisují ženy pocit podobný silnějším menstruačním křečím ve chvíli, kdy se přístroj zavádí a dutina se rozpíná tekutinou. Trvá to obvykle **několik minut**. V anestezii nevnímáte nic.

Po výkonu je běžné: špinění nebo slabé krvácení pár dní, křeče, únava po anestezii. Sprcha ano, koupel, bazén a sex podle pokynů lékaře — obvykle se na několik dní až týden vynechávají.

## Kdy volat lékaře

- **Horečka nad 38 °C** nebo zimnice.
- **Silné krvácení** — prosáklá vložka za hodinu a méně, opakovaně.
- **Silná bolest břicha**, která se zhoršuje nebo neustupuje na běžné analgetikum.
- **Zapáchající výtok**.
- **Náhlá slabost, mdloba, zrychlené dýchání.**

Nečekejte do rána. Tyhle příznaky patří k lékaři hned.

## Co znamená nález

Většina nálezů je řešitelná a řada z nich se řeší přímo při výkonu. **Polyp** se odstraní, **přepážka** se protne, **srůsty** se uvolní. Po některých výkonech následuje krátká podpora hojení sliznice a kontrolní vyšetření — konkrétní postup určuje lékař.

Když je nález negativní, tedy dutina je v pořádku, není to ztracený čas. Je to **odstraněná otázka**. V opakovaně neúspěšné léčbě má obrovskou cenu vědět, kde problém není.

## Praktická poznámka

Zeptejte se, jestli dostanete **fotodokumentaci nebo záznam**. Většina pracovišť ji poskytuje a je to nejcennější věc do vaší složky — hlavně kdybyste někdy měnila kliniku.

> Článek nenahrazuje lékařskou péči. Indikaci, přípravu i režim po výkonu určuje vždy váš lékař.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [8, 35],
      topics: ['klinika', 'vysledky'],
      level: 'deep',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-10-30',
    },
    {
      id: 'diag-clanek-laparoskopie',
      kind: 'article',
      title: 'Laparoskopie: kdy má smysl a co čekat po ní',
      excerpt:
        'Jediné vyšetření, které vidí pánev zvenčí — a jediné, které spolehlivě potvrdí endometriózu. Za cenu skutečné operace.',
      body: `## Co to je

Laparoskopie je **chirurgický výkon v celkové anestezii**. Malým řezem u pupku se do dutiny břišní zavede kamera, břicho se naplní plynem, aby vznikl prostor, a dalšími dvěma až třemi drobnými vpichy se zavedou nástroje.

Lékař vidí dělohu, vejcovody, vaječníky a pobřišnici **zvenčí** — to žádné jiné vyšetření neumí.

## Proč se nedělá všem

Protože je to operace. Nese rizika anestezie a rizika výkonu samotného, vyžaduje rekonvalescenci a pracovní neschopnost. **Nedělá se pro jistotu.** Dělá se tam, kde se od ní čeká odpověď nebo léčebný efekt, který se jinak nezíská.

## Kdy o ní lékař uvažuje

- **Podezření na endometriózu** — zvlášť při typických bolestech, které neodpovídají nálezu na ultrazvuku. Laparoskopie je jediná metoda, která ji potvrdí s jistotou, protože umožní odebrat vzorek.
- **Podezření na srůsty** po zánětu nebo předchozí operaci.
- **Nález na vejcovodech** — hlavně hydrosalpinx, kdy se zvažuje jeho řešení před IVF.
- **Endometriomy** (čokoládové cysty) na vaječnících.
- **Nevysvětlená neplodnost** u části pacientek, po zvážení přínosu a rizik.

## Zároveň diagnostika i léčba

To je hlavní výhoda. Když se najde ložisko endometriózy, obvykle se rovnou odstraní. Srůst se uvolní. Cysta se vyloupne. Vejcovod se ošetří. **Jeden výkon tak často problém i vyřeší.**

Zároveň je tu důležitá nuance, o které se má mluvit předem: operace na vaječníku může snížit ovariální rezervu. Proto se u endometriomů zvažuje velmi pečlivě, jestli operovat, a pokud ano, tak jak. Tohle je otázka, kterou se ptejte přímo: **jak výkon ovlivní moje AMH a moje šance při stimulaci?**

## Před výkonem

- Předoperační vyšetření a odběry.
- **Lačnění** od půlnoci nebo podle pokynů pracoviště.
- Informace o všech lécích, zvlášť těch ovlivňujících srážlivost.
- Domluvený doprovod a někdo doma na první dny.
- Pracovní neschopnost — počítejte obvykle s jedním až dvěma týdny, u větších výkonů déle. Přesnou dobu určí operatér.

## Po výkonu — co je normální

- **Bolest v ramenou a pod žebry.** Nejpřekvapivější věc pro každou, kdo to nečekal. Způsobuje ji zbytkový plyn, který dráždí bránici. Trvá obvykle jeden až tři dny a pomáhá chůze a teplo.
- Nafouklé břicho a napětí.
- Bolest v místě vpichů, hlavně u pupku.
- Únava po anestezii, někdy pár dní.
- Špinění nebo slabé krvácení.

Chůze po pokoji ještě týž den se doporučuje — pomáhá odchodu plynu i prevenci trombózy.

## Kdy volat lékaře

- **Horečka nad 38 °C**, zimnice.
- **Silná, narůstající bolest břicha**, tvrdé břicho.
- **Opakované zvracení**, nemožnost pít.
- **Zarudnutí, hnisání nebo rozestup rány.**
- **Bolest, otok nebo zarudnutí lýtka** — může jít o trombózu.
- **Dušnost nebo bolest na hrudi** — okamžitě, i v noci.
- **Silné krvácení** z rodidel.
- Neschopnost se vymočit.

## Otázky před rozhodnutím

1. Co konkrétně od výkonu čekáte, že zjistíme nebo vyřešíme?
2. Jak to změní můj plán léčby, ať dopadne jakkoli?
3. Jaké je riziko dopadu na moji ovariální rezervu?
4. Kdy po výkonu můžeme pokračovat v léčbě?

> Text popisuje obecné principy a nenahrazuje péči lékaře. O indikaci k operaci rozhoduje vždy váš ošetřující lékař po zvážení vaší konkrétní situace.`,
      minutes: 9,
      phases: ['diagnostics'],
      dayRange: [10, 45],
      topics: ['klinika', 'vysledky'],
      level: 'deep',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-04',
    },
    {
      id: 'diag-clanek-pcos',
      kind: 'article',
      title: 'PCOS: syndrom, který se pozná ze tří věcí',
      excerpt:
        'Nejčastější hormonální porucha u žen v plodném věku — a zároveň diagnóza, kterou vám možná roky nikdo nesdělil správně.',
      body: `## Co PCOS je a co není

PCOS — syndrom polycystických ovarií — **není nemoc vaječníků**. Je to metabolicko-hormonální stav, který se na vaječnících jen projevuje. A hlavně: **nejsou to cysty.** Ty "cysty" na ultrazvuku jsou drobné folikuly, které se rozrostly, ale žádný z nich nedozrál a neuvolnil vajíčko.

Tenhle omyl v názvu způsobil víc zbytečného strachu než skoro cokoli jiného v gynekologii.

## Jak se diagnostikuje

Mezinárodně se používá pravidlo **dva ze tří**. K diagnóze je potřeba splnit alespoň dvě z těchto kritérií, a zároveň vyloučit jiné příčiny:

1. **Poruchy ovulace** — nepravidelný, dlouhý nebo vynechávající cyklus.
2. **Projevy nadbytku androgenů** — buď klinické (akné, nadměrné ochlupení, řídnutí vlasů), nebo laboratorní (zvýšený volný testosteron).
3. **Typický obraz vaječníků na ultrazvuku** — velký počet drobných folikulů, případně zvětšený objem vaječníku.

Proto **jeden ultrazvuk nestačí** a proto se stává, že žena s "polycystickými vaječníky" na obrázku PCOS vůbec nemá.

## Co se děje v pozadí

U velké části žen s PCOS hraje roli **inzulinová rezistence** — tělo hůř reaguje na inzulin, produkuje ho víc a vyšší inzulin podporuje tvorbu androgenů ve vaječníku. Ty pak brzdí dozrávání folikulů. Kruh se uzavírá.

Proto se u PCOS řeší i věci, které na první pohled s plodností nesouvisejí: hmotnost, metabolismus cukrů, spánek, pohyb. Nejde o estetiku. Jde o rozbití toho kruhu.

## Dobrá zpráva, kterou vám nikdo neřekl

Ženy s PCOS mají obvykle **vysoké AMH a hodně folikulů**. To znamená velkou zásobu vajíček. Problém není v tom, že by nebyla — problém je v tom, že nedozrávají a neuvolňují se.

To je z hlediska léčby lepší výchozí pozice než opačný extrém. Když se ovulace podaří obnovit nebo se vaječníky správně nastimulují, výtěžnost bývá dobrá.

## Rizika, o kterých mluvit

Právě kvůli vysokému počtu folikulů je u PCOS **zvýšené riziko hyperstimulačního syndromu (OHSS)** při stimulaci. Kliniky to vědí a volí opatrnější protokoly. Vy o tom máte vědět taky — a znát varovné příznaky.

## Kdy volat lékaře

Zvlášť pokud jste už v léčbě a stimulujete:

- **Rychlý nárůst hmotnosti** (více než 1 kg za den), výrazně nafouklé a napjaté břicho.
- **Silná bolest břicha.**
- **Dušnost**, nemožnost se pořádně nadechnout.
- **Výrazně snížený objem moči**, tmavá moč.
- **Opakované zvracení**, neschopnost pít.

Tohle jsou možné příznaky OHSS a patří k okamžitému kontaktu s klinikou.

## Co pomáhá dlouhodobě

Bez zaručených receptů a bez moralizování:

- **Pravidelný pohyb** — i chůze. Působí na inzulinovou citlivost nezávisle na hubnutí.
- **Strava s nižší glykemickou zátěží** a dostatkem bílkovin. Ne dieta, ale posun.
- **Spánek.** Nedostatek spánku zhoršuje inzulinovou rezistenci měřitelně.
- I **malý úbytek hmotnosti** u žen s nadváhou často obnoví ovulaci — a nemusí to být dramatický úbytek.
- **Léčba dle lékaře.** U PCOS se používají léky ovlivňující metabolismus i léky navozující ovulaci. Nic z toho si nenasazujte sama.

## Co si nenechte líbit

Věty typu "prostě zhubněte a bude to". PCOS mají i štíhlé ženy a redukce hmotnosti není tlačítko, kterým se syndrom vypne. Když s vámi nikdo neřeší nic dalšího, máte právo hledat lékaře, který ano.

> Článek je vzdělávací a nenahrazuje péči lékaře. Diagnózu ani léčbu PCOS nelze stanovit podle textu na internetu.`,
      minutes: 9,
      phases: ['diagnostics'],
      dayRange: [5, 40],
      topics: ['hormony', 'vysledky', 'strava'],
      modifiers: ['pcos'],
      level: 'deep',
      hero: 'dawn',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Mezinárodní doporučení pro diagnostiku a léčbu PCOS',
      ],
      publishedOn: '2025-11-09',
      boost: 0.8,
    },
    {
      id: 'diag-clanek-endometrioza',
      kind: 'article',
      title: 'Endometrióza: bolest, kterou vám roky nikdo nevěřil',
      excerpt:
        'Diagnóza, na kterou se v průměru čeká roky — protože silná bolest při menstruaci se pořád považuje za normální.',
      body: `## Co se v těle děje

Endometrióza je stav, kdy se tkáň podobná děložní sliznici vyskytuje **mimo dělohu** — na pobřišnici, na vaječnících, na vazech dělohy, někdy na střevě nebo močovém měchýři. Tato ložiska reagují na hormonální cyklus podobně jako sliznice v děloze: rostou, krvácejí — ale krev nemá kam odejít.

Výsledkem je zánět, dráždění a časem srůsty.

## Proč se na diagnózu čeká tak dlouho

Protože hlavní příznak — bolestivá menstruace — je společensky normalizovaný. "To má každá." Nemá. **Bolest, kvůli které musíte zůstat doma, zvracíte nebo vám nepomáhají běžné léky, není normální menstruace.**

Další důvod je technický: drobná ložiska na pobřišnici **nejsou na běžném ultrazvuku vidět**. Žena tedy odejde s tím, že "nález je v pořádku", a s pocitem, že si stěžuje na nic.

## Příznaky, které stojí za pozornost

- Silná bolest při menstruaci, která se v čase zhoršuje.
- **Bolest při sexu**, hlavně při hlubší penetraci.
- Bolest při vyprazdňování nebo močení, zvlášť v době menstruace.
- Chronická bolest v podbřišku i mimo menstruaci.
- Vyčerpání, které neodpovídá zátěži.
- Obtíže s otěhotněním.

Intenzita bolesti přitom **neodpovídá rozsahu nálezu**. Žena s malým nálezem může mít nesnesitelné bolesti, žena s rozsáhlým nálezem nemusí mít žádné.

## Jak se diagnostikuje

- **Anamnéza a klinické vyšetření** — zkušený lékař pozná hodně z popisu potíží a z vyšetření.
- **Ultrazvuk** — spolehlivě ukáže endometriomy na vaječnících (takzvané čokoládové cysty) a zkušené pracoviště i hlubokou infiltrující formu.
- **Magnetická rezonance** — u rozsáhlejších nálezů.
- **Laparoskopie** — jediná metoda, která nález potvrdí s jistotou a umožní odebrat vzorek.

## Vliv na plodnost

Endometrióza plodnost ovlivňuje víc cestami najednou: zánětlivým prostředím v pánvi, srůsty, které mění anatomii, poškozením vaječníkové tkáně u endometriomů a zřejmě i vlivem na kvalitu vajíček a na uhnízdění.

Zároveň platí — **a to je důležité** — že mnoho žen s endometriózou otěhotní, přirozeně i s pomocí. Diagnóza není verdikt.

## Co se s tím dělá

Léčba se dělí podle cíle a ten je potřeba pojmenovat nahlas:

- **Cíl tlumit bolest** — hormonální léčba, která potlačí cyklus. Účinná na bolest, ale během ní neotěhotníte.
- **Cíl otěhotnět** — jiná strategie. Zvažuje se operace, načasování léčby neplodnosti, případně rovnou IVF.

Proto se ptejte přímo: **léčíme teď bolest, nebo plodnost?** Odpověď určuje všechno ostatní.

U operace endometriomů platí stejná opatrnost jako u každého zákroku na vaječníku — může snížit ovariální rezervu. Rozhodnutí, jestli operovat před IVF, patří lékaři a má být probrané s vámi.

## Kdy volat lékaře

- **Náhlá prudká bolest břicha** s nevolností nebo mdlobou — může jít o prasklou nebo torkvovanou cystu.
- **Horečka** spolu s bolestí břicha.
- Bolest, na kterou nezabírají běžná analgetika a která vás vyřadí z běžného dne.
- Krev ve stolici nebo v moči v době menstruace.

## Co potřebujete slyšet

Roky vám možná někdo říkal, že přeháníte. Nepřeháněla jste. A ať už léčba dopadne jakkoli, mít **jméno pro to, co prožíváte**, mění hodně — konečně se dá o tom mluvit věcně.

> Článek nenahrazuje lékařskou péči. Diagnostiku i volbu léčby endometriózy vede vždy váš lékař, ideálně na pracovišti, které se jí věnuje.`,
      minutes: 9,
      phases: ['diagnostics'],
      dayRange: [5, 45],
      topics: ['vysledky', 'psychika', 'klinika'],
      modifiers: ['endometriosis'],
      level: 'deep',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy pro endometriózu',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-14',
      boost: 0.8,
    },
    {
      id: 'diag-clanek-adenomyoza',
      kind: 'article',
      title: 'Adenomyóza: když endometrium roste do svaloviny',
      excerpt:
        'Sestra endometriózy, o které se mluví míň — a která se pozná až tehdy, když se na ni někdo cíleně podívá.',
      body: `## V čem se liší od endometriózy

Endometrióza je tkáň podobná sliznici **mimo dělohu**. Adenomyóza je tatáž tkáň, ale **uvnitř děložní stěny** — prorůstá do svaloviny dělohy.

Obojí se může vyskytovat současně a obojí způsobuje bolest. Adenomyóza ale mění samotnou dělohu: stěna zesílí, ztratí pružnost, mění se prostředí, ve kterém se má embryo uchytit.

## Typické projevy

- **Silné, dlouhé menstruační krvácení**, často se sraženinami.
- **Křečovitá bolest** při menstruaci, která bývá popisovaná jako tlak a tíha spíš než bodnutí.
- Pocit **plné, těžké dělohy**, někdy zvětšené břicho v podbřišku.
- Bolest při sexu.
- Špinění mimo cyklus.
- Potíže s otěhotněním nebo opakované ztráty těhotenství.

Adenomyóza se dřív považovala za problém žen po čtyřicítce s několika porody. Dnes se ví, že se objevuje i u mladších žen bez porodu — jen se dřív nehledala.

## Jak se pozná

Nejčastěji **ultrazvukem**, když se na ni lékař cíleně dívá. Hledá známky jako je asymetrické ztluštění stěny, nepravidelná hranice mezi sliznicí a svalovinou, drobné cysty ve svalovině. U nejasných nálezů pomůže **magnetická rezonance**.

Definitivní potvrzení dřív přinášel až rozbor dělohy po operaci — proto zůstávala adenomyóza dlouho poddiagnostikovaná. Dnes to zkušené ultrazvukové pracoviště zvládne bez toho.

Praktický důsledek: pokud máte příznaky a slyšíte "nález je v pořádku", je legitimní požádat o **cílené vyšetření na pracovišti, které se adenomyózou zabývá**.

## Co to znamená pro léčbu neplodnosti

Adenomyóza může zhoršovat uhnízdění embrya a zvyšovat riziko komplikací v těhotenství. Zároveň — a to je důležité — **ženy s adenomyózou rodí zdravé děti.** Diagnóza mění plán, ne cíl.

Přístupy, které se v souvislosti s ní zvažují:

- **Odložený transfer** — nejdřív se embrya zamrazí a transfer se udělá v samostatném, dobře připraveném cyklu.
- **Předléčba potlačující cyklus** před transferem u vybraných pacientek.
- Pečlivější sledování v těhotenství.

Nic z toho není univerzální recept. O konkrétní strategii rozhoduje lékař podle rozsahu nálezu a vaší historie.

## Co pomáhá se symptomy

Na bolest a silné krvácení existují účinné možnosti — hormonální i nehormonální. Problém je, že většina z nich brání otěhotnění, takže se řeší **pořadí**: nejdřív léčba plodnosti, nebo nejdřív úleva od bolesti?

Tuhle otázku si položte nahlas a nechte si od lékaře vysvětlit, jak se to dá skloubit. Není ostuda říct, že bolest je pro vás v tuhle chvíli neúnosná.

## Kdy volat lékaře

- **Krvácení, které prosákne vložku či tampon za hodinu nebo méně**, opakovaně několik hodin.
- Krvácení s **velkými sraženinami** a se závratí, bušením srdce nebo dušností — může jít o významnou ztrátu krve.
- **Náhlá prudká bolest břicha.**
- Horečka s bolestí v podbřišku.
- Dlouhodobá únava a bledost — může svědčit o chudokrevnosti z krevních ztrát, což se dá jednoduše ověřit odběrem.

## Věta na závěr

Adenomyóza je vysvětlení, ne rozsudek. Jestli vám roky někdo říkal, že máte "jen silnou menstruaci", teď máte jméno a s ním i konkrétní kroky, o kterých se dá mluvit.

> Text nenahrazuje lékařskou péči. Diagnózu i strategii léčby určuje váš ošetřující lékař.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [8, 45],
      topics: ['vysledky', 'klinika', 'psychika'],
      modifiers: ['adenomyosis'],
      level: 'deep',
      hero: 'taupe',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká gynekologická a porodnická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-19',
    },
    {
      id: 'diag-clanek-stitna-zlaza',
      kind: 'article',
      title: 'Štítná žláza: TSH, protilátky a proč je hranice jinde',
      excerpt:
        'Malý motýlek na krku, který dokáže zastavit celý cyklus — a jehož „normální“ hodnota je při plánování těhotenství jiná než u ostatních.',
      body: `## Proč se to řeší právě tady

Štítná žláza řídí energetický metabolismus celého těla. Když nefunguje správně, tělo šetří — a jedna z prvních věcí, na kterou přestane mít energii, je reprodukce. Nepravidelný cyklus, chybějící ovulace nebo problémy s udržením těhotenství mohou mít původ tady.

Zároveň jde o jednu z **nejsnáze řešitelných** položek v celé diagnostice. Proto se vyšetřuje prakticky vždy.

## Co se měří

**TSH** — hormon z podvěsku mozkového, který štítnou žlázu řídí. Logika je stejná jako u FSH: čím hůř štítná žláza pracuje, tím hlasitěji na ni mozek volá a tím **vyšší je TSH**. Vyšší TSH tedy paradoxně znamená slabší funkci štítné žlázy.

**fT4 (volný tyroxin)** — hormon, který štítná žláza vyrábí. Doplňuje obraz.

**Protilátky anti-TPO, případně anti-Tg** — ukazují na autoimunitní zánět štítné žlázy. Mohou být přítomné i při normálním TSH.

Někdy se doplňuje ultrazvuk štítné žlázy.

## Proč je hranice jiná

Referenční rozmezí na papíře z laboratoře platí pro běžnou populaci. **Při plánování těhotenství a v těhotenství se ale často pracuje s přísnějším cílem**, protože plod je v prvním trimestru zcela závislý na hormonech matky — vlastní štítnou žlázu si teprve staví.

Proto se stává, že vám laboratoř napíše hodnotu v normě a lékař přesto řekne, že by ji chtěl níž. Není to rozpor. Je to jiný cíl.

Konkrétní cílovou hodnotu **nehledejte na internetu** — liší se podle doporučení, laboratoře a vaší situace. Zeptejte se svého lékaře, jakou cílovou hodnotu chce u vás a proč.

## Když jsou zvýšené protilátky

Znamená to autoimunitní proces — imunitní systém reaguje proti vlastní štítné žláze. Nejčastěji jde o **Hashimotovu tyreoiditidu**.

Co to prakticky znamená:

- Funkce může být zatím **normální**, ale je vyšší riziko, že se v čase zhorší — zvlášť v těhotenství, kdy nároky rostou.
- Proto se u žen s protilátkami hodnoty **kontrolují častěji**, obvykle i během těhotenství v pravidelných intervalech.
- Samotná přítomnost protilátek automaticky neznamená léčbu. Rozhoduje celkový obraz.

## Léčba

Při snížené funkci se doplňuje chybějící hormon. Je to léčba, která je dobře zvládnutá, levná a dobře snášená — ale **dávkování určuje výhradně lékař** a upravuje se podle kontrolních odběrů. Nikdy si dávku neupravujte sama, ani když se cítíte líp nebo hůř.

Praktické detaily, které se vyplatí vědět:

- Lék se obvykle bere **nalačno**, s odstupem od jídla a od některých doplňků.
- **Železo, vápník a hořčík** mohou vstřebávání ovlivnit — proto se berou s odstupem několika hodin.
- Kontrolní odběr se dělá až za nějakou dobu od změny dávky, protože se hladina ustaluje pomalu.

## Jód a doplňky

Jód je pro tvorbu hormonů nezbytný, ale platí to i naopak — **nadbytek škodí**, zvlášť při autoimunitním onemocnění. Doplňky s vysokým obsahem jódu nebo mořských řas si proto neberte na vlastní pěst a nechte si je odsouhlasit.

## Kdy se ozvat lékaři

- Výrazná únava, zimomřivost, zácpa, nárůst hmotnosti, vypadávání vlasů, deprese.
- Naopak bušení srdce, hubnutí, pocení, třes, nespavost, úzkost.
- **Otok nebo tlak na krku, potíže s polykáním.**
- Jakékoli výrazné zhoršení stavu při nastavené léčbě.
- Jakmile otěhotníte — potřeba hormonu se mění a hodnoty se kontrolují dřív.

> Článek nenahrazuje lékařskou péči. O nastavení i změnách léčby štítné žlázy rozhoduje vždy váš lékař podle kontrolních odběrů.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [3, 30],
      topics: ['hormony', 'vysledky', 'leky'],
      modifiers: ['thyroid'],
      level: 'deep',
      hero: 'sky',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy',
        'Česká endokrinologická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-24',
    },
    {
      id: 'diag-clanek-trombofilie',
      kind: 'article',
      title: 'Trombofilní mutace: co znamenají a co ne',
      excerpt:
        'Nález, po kterém se ženy nejčastěji vyděsí zbytečně — protože se plete riziko trombózy s příčinou neplodnosti.',
      body: `## O co jde

Trombofilie je **zvýšený sklon ke srážení krve**. Může být vrozená (dané geny) nebo získaná (například antifosfolipidový syndrom). V reprodukční medicíně se testuje proto, že poruchy srážení mohou souviset s komplikacemi v těhotenství a s trombózou, jejíž riziko v těhotenství i při hormonální léčbě stoupá.

## Co se obvykle testuje

- **Leidenská mutace faktoru V** — nejčastější vrozená trombofilie.
- **Mutace protrombinu (F II)**.
- **Deficit antitrombinu, proteinu C a proteinu S** — vzácnější, ale klinicky významnější.
- **Antifosfolipidové protilátky** — získaná forma, vyšetřuje se hlavně po opakovaných ztrátách těhotenství. Vyžaduje opakované potvrzení s odstupem.
- **MTHFR** — o tomhle za chvíli zvlášť.

## Zásadní rozlišení, které se často ztrácí

**Trombofilie je rizikový faktor pro trombózu.** To je prokázané a bere se vážně.

**Trombofilie jako vysvětlení neplodnosti** je něco jiného. Souvislost mezi běžnými vrozenými trombofiliemi a neúspěšným uhnízděním embrya je předmětem sporu a **současná doporučení plošné testování ani plošnou léčbu nepodporují**. To je pro mnoho žen překvapení, protože v běžném povědomí se trombofilie jako příčina neúspěchu léčby drží velmi silně.

Výjimkou je **antifosfolipidový syndrom** — u něj souvislost s opakovanými ztrátami těhotenství uznávaná je a existuje pro něj zavedený léčebný postup.

## MTHFR — kapitola sama pro sebe

Varianty genu MTHFR jsou v populaci **velmi časté**. Řada lidí je má a nikdy o tom neví. Dnešní odborný pohled je, že samotný nález varianty MTHFR **není důvodem k diagnóze trombofilie ani k zvláštní léčbě** a rutinní testování se nedoporučuje.

Pokud tedy tenhle výsledek máte a vyděsil vás, je to nejspíš zbytečně. Zeptejte se lékaře přímo, jestli to v vaší situaci vůbec něco mění.

## Co nález prakticky mění

Podle typu a podle vaší historie:

- **Zvýšenou pozornost při hormonální léčbě** — stimulace zvyšuje hladinu estrogenů a s ní i riziko trombózy.
- **Preventivní opatření v těhotenství a po porodu** — období s nejvyšším rizikem.
- **Konzultaci u hematologa**, který posoudí riziko a případnou prevenci navrhne.

Léčba, o které se v této souvislosti mluví, spadá výhradně do rukou lékaře. **Nikdy si sama nenasazujte ani nevysazujte léky ovlivňující srážlivost**, včetně volně dostupných.

## Kdy volat lékaře okamžitě

Tohle si zapamatujte bez ohledu na to, jestli máte trombofilii potvrzenou:

- **Bolest, otok, zarudnutí a teplo jedné končetiny**, hlavně lýtka.
- **Náhlá dušnost, bolest na hrudi, bušení srdce, kašel s krví.**
- **Náhlá silná bolest hlavy**, porucha řeči, vidění nebo hybnosti.

Tohle jsou příznaky možné trombózy nebo embolie a patří k okamžité lékařské pomoci — volejte 155.

## Co si vzít na konzultaci

1. Kompletní výsledek genetického vyšetření, ne jen slovní shrnutí.
2. Rodinnou anamnézu trombóz — kdo, kdy, za jakých okolností.
3. Vlastní historii: trombóza, hormonální antikoncepce, dlouhé lety, imobilizace.
4. Historii těhotenství a ztrát.

## Otázka, kterou se ptejte

"Mění tenhle nález něco na mé léčbě, nebo je to informace do dokumentace?" Odpověď vám ušetří měsíce zbytečného strachu — a někdy naopak upozorní na opatření, které má smysl udělat.

> Text je vzdělávací a nenahrazuje lékařskou péči. Vyhodnocení trombofilie i případnou prevenci vždy řešte s lékařem, zpravidla ve spolupráci s hematologem.`,
      minutes: 8,
      phases: ['diagnostics', 'genetic_testing'],
      dayRange: [10, 45],
      topics: ['vysledky', 'genetika', 'leky'],
      modifiers: ['thrombophilia'],
      level: 'deep',
      hero: 'pearl',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy pro opakované ztráty těhotenství',
        'Česká hematologická společnost ČLS JEP',
      ],
      publishedOn: '2025-11-28',
    },
    {
      id: 'diag-clanek-imunologie',
      kind: 'article',
      title: 'Reprodukční imunologie: pole, kde je víc otázek než odpovědí',
      excerpt:
        'Nejkontroverznější část diagnostiky — kde se prolíná skutečná medicína, nadějné hypotézy a byznys s nadějí.',
      body: `## Proč se o imunologii vůbec mluví

Embryo je z poloviny geneticky cizí. Tělo ho přesto nemá odmítnout — naopak, imunitní systém se na uhnízdění **aktivně podílí**. Z toho vzešla logická otázka: co když u některých žen tenhle systém nefunguje, jak má?

Otázka je legitimní. Problém je, že odpovědi zatím nejsou tak jisté, jak by se z nabídky vyšetření zdálo.

## Co se v této oblasti nabízí

Setkáte se s pojmy jako **NK buňky** (v krvi nebo z děložní sliznice), **cytokinový profil**, **Th1/Th2 poměr**, **KIR a HLA typizace**, **antifosfolipidové a další autoprotilátky**.

Z toho má **pevné místo v medicíně** především vyšetření antifosfolipidových protilátek u žen s opakovanými ztrátami těhotenství — tam je souvislost uznávaná a existuje zavedený postup.

U většiny ostatních testů platí, že **neexistuje shoda na tom, jak se mají měřit, jak se má výsledek vykládat a co z něj plyne pro léčbu**. Odborné společnosti proto jejich rutinní použití mimo výzkum nedoporučují.

## Proč o tom píšeme tak opatrně

Protože právě sem přicházejí ženy po několika neúspěších — vyčerpané, s pocitem, že standardní medicína selhala. A právě v takové chvíli zní nabídka "najdeme skrytou příčinu" neodolatelně.

Část těchto vyšetření a navazujících léčeb je **drahá, nehrazená a nese vlastní rizika**. Léčby ovlivňující imunitní systém nejsou nevinné — mají nežádoucí účinky.

Tohle není výzva imunologii odmítnout. Je to výzva jít do ní s otevřenýma očima.

## Otázky, které si položte, než zaplatíte

1. **Je tenhle test doporučený odbornou společností** pro moji situaci, nebo je to experimentální přístup?
2. **Co se stane, když vyjde pozitivně?** Existuje léčba s doloženým přínosem?
3. **Jaké má ta léčba nežádoucí účinky** a jaká jsou rizika v těhotenství?
4. **Kolik to celkem stojí** — vyšetření i následná léčba?
5. **Co se stane, když to neudělám?** Jaká je alternativa?

Pokud na otázku číslo dvě dostanete mlhavou odpověď, je to informace sama o sobě.

## Kdy má hledání imunologické příčiny největší opodstatnění

Typicky u žen s **opakovaným selháním uhnízdění kvalitních embryí** nebo s **opakovanými ztrátami těhotenství**, kde standardní diagnostika nic nenašla. I tam ale platí, že první krok je vyloučit to, co se vyloučit dá a co má jasné řešení — nález v dutině děložní, štítná žláza, antifosfolipidový syndrom, genetika páru, kvalita embryí.

## Co s tím, když jste vyčerpaná a chcete zkusit cokoli

To je nejlidštější reakce, jaká existuje, a nikdo vás za ni nemá právo soudit. Jen si k tomu přidejte jedno pravidlo: **rozhodujte se v den, kdy nejste v nejhorším stavu.** Naděje prodaná ve chvíli zoufalství je nejdražší zboží na světě.

A je naprosto v pořádku říct: "Chci si to promyslet a přijít za dva týdny." Kdo vás tlačí k okamžitému rozhodnutí, nedělá to ve vašem zájmu.

## Druhý názor

U imunologických doporučení má druhý názor obzvlášť velkou cenu — ideálně na pracovišti, které vám nic neprodává. Není to nedůvěra vůči vašemu lékaři. Je to běžná praxe u rozhodnutí, která něco stojí a něco riskují.

> Článek je vzdělávací a nenahrazuje lékařskou péči. Jakoukoli imunologickou diagnostiku i léčbu vždy konzultujte s ošetřujícím lékařem a ptejte se na úroveň důkazů.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [15, 60],
      topics: ['vysledky', 'psychika', 'finance'],
      modifiers: ['immunology'],
      level: 'deep',
      hero: 'dusk',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy pro opakované ztráty těhotenství',
        'ESHRE — stanoviska k doplňkovým metodám v asistované reprodukci',
      ],
      publishedOn: '2025-12-03',
    },
    {
      id: 'diag-clanek-karyotyp',
      kind: 'article',
      title: 'Karyotyp: genetické vyšetření páru krok za krokem',
      excerpt:
        'Odběr krve, po kterém se čeká několik týdnů — a který u malé části párů vysvětlí to, co nic jiného nevysvětlilo.',
      body: `## Co karyotyp je

Karyotyp je **soupis chromozomů** — jejich počtu a struktury. Zdravý člověk jich má 46, uspořádaných do 23 párů. Vyšetření se dělá z běžného odběru krve, obvykle **u obou partnerů zároveň**.

Laboratoř buňky nechá množit a pak si prohlédne chromozomy pod mikroskopem. Proto to trvá — na výsledek se běžně čeká **několik týdnů**. To není liknavost, to je biologie.

## Kdy se indikuje

Nedělá se každému. Lékař ho obvykle zvažuje při:

- **opakovaných ztrátách těhotenství**,
- **opakovaně neúspěšné léčbě** bez jiného vysvětlení,
- **výrazně snížených hodnotách ve spermiogramu** nebo azoospermii,
- předčasném selhání funkce vaječníků,
- genetickém onemocnění v rodině nebo v předchozím těhotenství,
- v některých případech před IVF, podle zvyklostí pracoviště.

## Co může vyjít

**Normální nález** u obou. To je nejčastější výsledek a znamená, že tuhle příčinu můžete odškrtnout.

**Vyvážená translokace** u jednoho z partnerů. Zní to hrozivě, ale znamená to, že části dvou chromozomů si vyměnily místo, přičemž genetický materiál je celý přítomen. Nositel je proto **zdravý a často o tom celý život neví**. Problém nastává až při tvorbě vajíček a spermií — část z nich pak nese nevyvážené množství materiálu a taková embrya se často neuchytí nebo těhotenství skončí ztrátou.

**Jiné strukturální odchylky** nebo odchylky v počtu pohlavních chromozomů, které se mohou projevovat různě.

## Když se něco najde

První reakce bývá vina — "je to kvůli mně". Není. Chromozomální uspořádání jste nezpůsobila ničím, co jste udělala nebo neudělala. A většina lidí s vyváženou translokací ji zdědila po rodiči, který má zdravé děti.

Následuje **konzultace u klinického genetika**. To je klíčový krok a nedá se přeskočit. Genetik vysvětlí, co konkrétní nález znamená pro vaši situaci, jaká jsou rizika a jaké jsou možnosti.

Mezi možnostmi bývá:

- **PGT-SR** — testování embryí na konkrétní strukturální přestavbu při IVF, aby se k transferu vybralo embryo s vyváženým materiálem.
- Přirozené počínání s prenatální diagnostikou v těhotenství.
- Zvážení darovaných gamet, pokud je to vaše volba.

Rozhodnutí je vaše a genetik ho má rámovat, ne za vás udělat.

## Jak zvládnout čekání na výsledek

Několik týdnů čekání na genetiku je jiné než čekání na běžný odběr. Praktické, co pomáhá:

- **Zjistěte konkrétní termín**, kdy má výsledek být, a zapište si ho. Nekonečné "někdy" je horší než konkrétní datum.
- **Domluvte se, jak se výsledek dozvíte** — telefonicky, na kontrole, přes portál.
- **Nedělejte si mezitím vlastní rešerši translokací.** Bez konkrétního nálezu je to čirá úzkost.
- Naplánujte si na to období něco, co běží dál nezávisle na výsledku.

## Praktická poznámka

Výsledek karyotypu je **doživotní**. Nikdy se nemění a nemusí se opakovat. Uložte si ho do své složky a ofoťte — je to jeden z dokumentů, který se vám bude hodit i za deset let.

> Článek nenahrazuje lékařskou péči ani genetické poradenství. Výklad genetického nálezu patří výhradně klinickému genetikovi.`,
      minutes: 8,
      phases: ['genetic_testing', 'diagnostics'],
      dayRange: [1, 30],
      topics: ['genetika', 'vysledky', 'cekani'],
      level: 'essential',
      hero: 'sage',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Společnost lékařské genetiky a genomiky ČLS JEP',
        'ESHRE — doporučené postupy',
      ],
      publishedOn: '2025-12-08',
      boost: 0.85,
    },
    {
      id: 'diag-clanek-pgt',
      kind: 'article',
      title: 'PGT-A, PGT-M, PGT-SR: co která zkratka znamená',
      excerpt:
        'Tři písmena za pomlčkou mění úplně jiné otázky — vysvětlujeme, které testování k čemu slouží a komu se nabízí.',
      body: `## Co mají společné

Všechna tři jsou **preimplantační genetické testování** — vyšetření embrya ještě před transferem. Vždy se dělá v rámci IVF, protože je potřeba mít embrya v laboratoři.

Postup je principiálně stejný: embryo se nechá dorůst do stadia **blastocysty** (obvykle pátý až šestý den), odebere se několik buněk z té části, ze které se bude tvořit placenta, embryo se zamrazí a vzorek jde do genetické laboratoře. Transfer proto téměř vždy probíhá až v dalším, kryo cyklu.

## PGT-A — testování na počet chromozomů

Hledá **aneuploidie**, tedy embrya s chybějícím nebo nadbytečným chromozomem. Taková embrya se většinou neuchytí nebo těhotenství skončí ztrátou.

Nabízí se zejména při **vyšším věku ženy**, po opakovaných neúspěšných transferech nebo opakovaných ztrátách těhotenství. Cílem je vybrat k transferu embryo s největší šancí a zkrátit cestu k těhotenství.

Co je poctivé říct:

- **Netvoří lepší embrya.** Jen vybírá z těch, která máte.
- Když máte embryí málo, může se stát, že po testování **nezbude žádné k transferu**. To je pro řadu párů nejtěžší scénář.
- Existuje kategorie **mozaikových embryí** — kde je nález nejednoznačný. Nakládání s nimi je odborně složité téma a patří na konzultaci s genetikem.
- Přínos PGT-A není u všech skupin pacientek stejný a **odborné diskuze o něm pokračují**. Zeptejte se, co konkrétně to znamená ve vaší situaci.

## PGT-M — testování na konkrétní dědičnou nemoc

Používá se, když je v páru **známá konkrétní genetická mutace** — například cystická fibróza, spinální svalová atrofie a další monogenní onemocnění.

Test je "šitý na míru": laboratoř nejdřív připraví systém pro vaši konkrétní mutaci, což trvá týdny až měsíce. Až pak se může začít s cyklem. Tohle je potřeba do plánování započítat.

## PGT-SR — testování na strukturální přestavbu

Pro páry, kde má jeden z partnerů **vyváženou translokaci nebo jinou strukturální přestavbu chromozomů**. Test vybírá embrya s vyváženým genetickým materiálem.

## Čemu PGT nezabrání

Tohle je důležité pro klid i pro realistická očekávání:

- **Netestuje všechno.** Nevyloučí všechna genetická onemocnění, jen to, na co je cílené.
- **Nezaručí těhotenství.** I geneticky vyhovující embryo se nemusí uchytit.
- **Nenahrazuje prenatální diagnostiku** v těhotenství. Ta se dělá dál podle běžných doporučení.
- Výsledek má **malé procento nejistoty** — vzorek pochází z buněk budoucí placenty, ne ze samotného embrya.

## Praktické a finanční

PGT je **výkon navíc** a v Česku bývá z velké části hrazený pacientem, s výjimkami podle indikace. Ptejte se předem a písemně na:

1. Cenu za vyšetření jednoho embrya a celkovou předpokládanou částku.
2. Co se stane, když nebude žádné embryo vhodné k transferu.
3. Jak dlouho se čeká na výsledek.
4. Jak se nakládá s netransferovanými embryi.

## Otázka, kterou stojí za to položit

"Zvyšuje tohle testování moji šanci na dítě, nebo hlavně zkracuje cestu k němu?" Odpověď se u různých situací liší a je to nejlepší způsob, jak si ujasnit, jestli do toho jít.

> Text je vzdělávací a nenahrazuje péči lékaře ani genetické poradenství. O vhodnosti PGT rozhoduje váš lékař ve spolupráci s klinickým genetikem.`,
      minutes: 9,
      phases: ['genetic_testing'],
      dayRange: [1, 40],
      topics: ['genetika', 'embryologie', 'finance'],
      modifiers: ['pgt'],
      level: 'deep',
      hero: 'champagne',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'ESHRE — doporučené postupy pro preimplantační genetické testování',
        'Společnost lékařské genetiky a genomiky ČLS JEP',
      ],
      publishedOn: '2025-12-13',
      boost: 0.8,
    },
    {
      id: 'diag-clanek-nevysvetlena',
      kind: 'article',
      title: 'Nevysvětlená neplodnost: diagnóza, která žádnou diagnózou není',
      excerpt:
        'Když všechny výsledky vyjdou dobře a vy stejně nejste těhotná — nejfrustrovanější místo celé diagnostiky.',
      body: `## Co to znamená

Nevysvětlená neplodnost je označení pro situaci, kdy **základní diagnostika neodhalila příčinu**: ovulace probíhá, vejcovody jsou průchodné, dutina děložní v pořádku, spermiogram v normě — a těhotenství nepřichází.

Není to prázdná kategorie. Je to poctivé přiznání, že **dnešní vyšetření nevidí všechno.**

## Proč vás to štve víc než jasný nález

Protože jasný nález dává úlevu. Když víte, že máte neprůchodný vejcovod, víte, co s tím. Nevysvětlená neplodnost vám nedá nepřítele, jen prázdno — a do prázdna si člověk automaticky dosadí sebe. "Takže je to mnou. Takže dělám něco špatně."

Nedělám vám iluze: tohle je psychicky jedna z nejnáročnějších diagnóz. Ne kvůli prognóze, ale kvůli tomu, že nemáte na co ukázat.

## Co dnešní vyšetření nevidí

Diagnostika kontroluje mechaniku. Nekontroluje ale:

- **Kvalitu vajíček** — ta se z krve nezměří vůbec, pozná se až podle chování v laboratoři.
- **Schopnost spermie oplodnit vajíčko** — spermiogram měří počet, pohyb a tvar, ne funkci.
- **Samotné oplození** — jestli k němu vůbec dojde, se pozná až při IVF.
- **Vývoj embrya** v prvních dnech.
- **Uhnízdění** — nejméně prozkoumaný krok celého procesu.
- Drobná ložiska **endometriózy**, která nejsou na ultrazvuku vidět.

Proto se u části párů "nevysvětlená" neplodnost vysvětlí až v okamžiku, kdy proběhne IVF. Laboratoř totiž **vidí kroky, které jinak nikdo nevidí**.

## Co se s tím dělá

Postup se liší podle věku, délky snažení a vaší situace. Obecně se zvažuje:

- **Sledování a cílené načasování** po určitou dobu, hlavně u mladších párů.
- **IUI (intrauterinní inseminace)**, případně s mírnou stimulací.
- **IVF**, které je zároveň léčebné i diagnostické.
- U vybraných pacientek **laparoskopie**, pokud je podezření na endometriózu.

Klíčová proměnná je **čas**. U ženy do pětatřiceti se dá déle vyčkávat. U ženy po pětatřiceti se váha argumentů posouvá k rychlejšímu postupu. Tohle je otázka, kterou položte přímo: **jak dlouho má v mém věku smysl čekat?**

## Věty, které nemusíte snášet

"Prostě se uvolněte." "Vždyť vám nic není." "Zkuste dovolenou." "Známá otěhotněla, jakmile to přestala řešit."

Tyhle věty nejsou rada, jsou to způsob, jak ukončit nepříjemný rozhovor. Stres není příčinou vaší neplodnosti a nikdo nemá právo vám naznačovat, že si za to můžete tím, jak to prožíváte.

Klidně odpovězte: "Tohle mi nepomáhá. Pomůže mi, když si o tom prostě popovídáme, aniž bys mi radil."

## Co si nechte

Nevysvětlená neplodnost má ze všech diagnóz jednu poctivou výhodu: **nenašla se žádná překážka.** Nic není rozbité, nic se nemusí opravovat. Ta neznámá pořád existuje, ale statisticky jsou na tom páry s touhle diagnózou v léčbě dobře.

A pokud potřebujete jednu praktickou věc, kterou udělat: požádejte o **jasný časový plán**. Ne "uvidíme", ale "zkusíme tohle po dobu X měsíců a pak přejdeme na Y". Plán je proti bezmoci nejlepší lék.

> Článek nenahrazuje lékařskou péči. O dalším postupu při nevysvětlené neplodnosti rozhoduje váš lékař s ohledem na váš věk a délku léčby.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [20, 70],
      topics: ['vysledky', 'psychika', 'klinika'],
      modifiers: ['unexplained'],
      level: 'deep',
      hero: 'linen',
      author: 'Gabi',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: ['ESHRE — doporučené postupy pro nevysvětlenou neplodnost'],
      publishedOn: '2025-12-18',
      boost: 0.75,
    },
    {
      id: 'diag-clanek-nosicstvi',
      kind: 'article',
      title: 'Vyšetření nosičství: co se hledá a proč u obou',
      excerpt:
        'Zdravý člověk může být nositelem mutace a nikdy o tom nevědět — problém nastane, až když se sejdou dva stejní nositelé.',
      body: `## Jak se dědí to, co nikdo nemá

U takzvaně **autozomálně recesivních onemocnění** platí jednoduché pravidlo: každý z nás má od každého genu dvě kopie. Když je jedna vadná a druhá funkční, funkční to zachrání a člověk je **zdravý nositel**. Nemá žádné příznaky, nic nepozná.

Problém vzniká, když se sejdou dva nositelé téže vady. Pak je při každém početí určitá pravděpodobnost, že dítě zdědí vadnou kopii od obou — a onemocnění se projeví.

Právě proto se nosičství vyšetřuje **u obou partnerů**. Nález u jednoho sám o sobě obvykle neznamená riziko pro dítě.

## Co se nejčastěji testuje

V českém prostředí se u párů před léčbou neplodnosti nebo v ní obvykle zvažuje vyšetření na nejčastější onemocnění v populaci, typicky:

- **cystická fibróza**,
- **spinální svalová atrofie (SMA)**,
- **syndrom fragilního X** — ten má zvláštní postavení, protože souvisí i s předčasným selháním funkce vaječníků,
- podle situace další panely.

Rozsah panelu se liší podle pracoviště a podle toho, co vyplyne z rodinné anamnézy. Existují i rozsáhlé panely testující stovky onemocnění — mají svá pro i proti a stojí za to se na ně cíleně zeptat.

## Kdy se vyšetření nabízí

- Před léčbou neplodnosti, podle zvyklostí pracoviště.
- Při **použití darovaných gamet** — dárci procházejí genetickým vyšetřením a párování se dělá tak, aby se nesešli dva nositelé téhož.
- Při genetickém onemocnění v rodině.
- Při příbuzenském vztahu partnerů.
- Po narození dítěte s genetickým onemocněním.

## Co dělat s pozitivním výsledkem

Nejdřív: **nosičství není nemoc.** Zjistit, že jste nositelka, neznamená, že s vámi je něco v nepořádku. Znamená to, že máte informaci, kterou většina lidí nemá.

Následuje vyšetření partnera. Pokud je negativní, riziko pro dítě je obvykle velmi nízké. Pokud jsou pozitivní oba, přichází **konzultace u klinického genetika**, který vysvětlí konkrétní riziko a možnosti — mezi nimi PGT-M při IVF nebo prenatální diagnostika v těhotenství.

Rozhodnutí je vždy vaše. Genetik ho má popsat, ne za vás udělat.

## Emoční stránka, o které se nemluví

Genetické výsledky mají zvláštní tíhu — týkají se nejen vás, ale i vaší rodiny a případně sourozenců, kteří mohou být nositeli také. Otázka "mám jim to říct?" nemá jednu správnou odpověď a je legitimní ji probrat s genetikem nebo psychologem.

Také platí, že čekání na tenhle typ výsledku bývá jiné než u běžného odběru. Nejde jen o léčbu, jde o představu o vlastní rodině. Být z toho vyřízená není přehnané.

## Praktické

- Výsledek je **doživotní**, opakovat se nemusí.
- Uložte si kompletní zprávu, ne jen slovní shrnutí.
- Zeptejte se předem, **co je hrazené** a co ne — u širokých panelů to bývá významná částka.
- Zeptejte se na **dobu zpracování**, aby vám nezdržela plánovaný cyklus.

> Text je vzdělávací a nenahrazuje genetické poradenství. Výklad výsledků a rozhodnutí o dalším postupu patří klinickému genetikovi a vašemu lékaři.`,
      minutes: 7,
      phases: ['genetic_testing'],
      dayRange: [1, 30],
      topics: ['genetika', 'vysledky', 'darcovstvi'],
      level: 'deep',
      hero: 'pearl',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      sources: [
        'Společnost lékařské genetiky a genomiky ČLS JEP',
        'ESHRE — doporučené postupy',
      ],
      publishedOn: '2025-12-22',
    },
    {
      id: 'diag-checklist-slozka-vysledku',
      kind: 'checklist',
      title: 'Vlastní složka výsledků: nejlevnější investice do léčby',
      excerpt:
        'Za dva roky léčby vystřídáte možná tři lékaře — a jediný, kdo bude mít celý příběh pohromadě, budete vy.',
      body: `## Proč to dělat

Zní to jako úřednická otrava. Ve skutečnosti je to jedna z mála věcí v celé léčbě, kterou máte **plně pod kontrolou** — a která se vám mnohokrát vrátí.

Důvody, které poznáte, až když nastanou:

- **Změníte kliniku.** Přenos dokumentace mezi pracovišti trvá a bývá neúplný. S vlastní složkou jste za týden na nové konzultaci.
- **Uvidíte trend.** AMH před dvěma lety a dnes je jiná informace než jedna hodnota.
- **Přestanete se ptát dokola.** Věci, které vám lékař řekl, si přestanete pamatovat rychleji, než čekáte.
- **Získáte zpět kus kompetence.** V léčbě, kde toho ovlivníte málo, tohle ovlivníte celé.

## Jak na to prakticky

Nejjednodušší funkční systém: **složka v cloudu plus fyzické desky.** Papír, který dostanete do ruky, vyfoťte hned v čekárně, než ho ztratíte v tašce. Soubory pojmenujte podle vzoru datum-typ-hodnota, například 2026-03-14-amh.

Nedělejte z toho projekt. Deset minut po každé návštěvě stačí.

> Seznam je pomůcka, ne zdravotnický dokument. Originály zpráv si vždy uchovávejte a při konzultaci se řiďte pokyny své kliniky.`,
      minutes: 5,
      phases: ['diagnostics', 'genetic_testing'],
      dayRange: [3, 60],
      topics: ['vysledky', 'klinika', 'sebepece'],
      level: 'essential',
      hero: 'sand',
      author: 'Gabi',
      publishedOn: '2026-01-06',
      boost: 0.8,
      checklist: [
        {
          id: 'diag-cl2-zalozit',
          text: 'Založit jednu složku v cloudu — jméno, které najdete i za rok',
          group: 'Základ',
        },
        {
          id: 'diag-cl2-desky',
          text: 'Fyzické desky na papírové originály',
          hint: 'Originály zpráv z operací a genetiky si nechte, kopie dávejte dál.',
          group: 'Základ',
        },
        {
          id: 'diag-cl2-fotit',
          text: 'Zvyk: každý papír vyfotit ještě v čekárně',
          group: 'Základ',
        },
        {
          id: 'diag-cl2-hormony',
          text: 'Hormonální odběry — všechny, i staré',
          hint: 'Poznamenejte si u nich den cyklu, jinak z nich později nic nevyčtete.',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl2-amh',
          text: 'AMH včetně jednotek a názvu laboratoře',
          hint: 'Jednotky jsou zásadní. Bez nich hodnotu nikdo neporovná.',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl2-ultrazvuky',
          text: 'Zprávy z ultrazvuků a počty antrálních folikulů',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl2-spermiogram',
          text: 'Všechny spermiogramy partnera s datem',
          hint: 'Kolísají, takže smysl dává až řada za sebou.',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl2-hsg',
          text: 'Zpráva z HSG nebo HyFoSy',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl2-operace',
          text: 'Operační protokoly a propouštěcí zprávy',
          hint: 'Obzvlášť cenné jsou fotky z hysteroskopie nebo laparoskopie, pokud je poskytnou.',
          group: 'Výsledky',
          optional: true,
        },
        {
          id: 'diag-cl2-genetika',
          text: 'Genetické nálezy — karyotyp, nosičství',
          hint: 'Doživotní dokumenty. Ukládejte je i mimo cloud kliniky.',
          group: 'Výsledky',
          optional: true,
        },
        {
          id: 'diag-cl2-cyklus',
          text: 'Přehled cyklů — první den a délka',
          group: 'Deník',
        },
        {
          id: 'diag-cl2-poznamky',
          text: 'Poznámky z každé konzultace: co bylo řečeno, co udělat, do kdy',
          hint: 'Tři odrážky do telefonu ještě v autě. Za měsíc si to nevybavíte.',
          group: 'Deník',
        },
        {
          id: 'diag-cl2-otazky',
          text: 'Průběžný seznam otázek na příště',
          group: 'Deník',
        },
        {
          id: 'diag-cl2-leky',
          text: 'Seznam léků a doplňků s datem začátku a konce',
          group: 'Deník',
        },
        {
          id: 'diag-cl2-finance',
          text: 'Přehled plateb a dokladů',
          hint: 'Hodí se pro pojišťovnu, zaměstnavatele i pro vlastní přehled.',
          group: 'Deník',
          optional: true,
        },
      ],
    },
    {
      id: 'diag-checklist-otazky-pro-lekare',
      kind: 'checklist',
      title: 'Otázky pro lékaře, na které si obvykle nevzpomenete',
      excerpt:
        'Vyberte si tři a napište si je na papír — v ordinaci vám vypadnou z hlavy všechny.',
      body: `## Jak s tím pracovat

Nepokoušejte se položit všechny. Nestihnete to a odejdete zahlcená. **Vyberte tři, které vám nedají spát**, a napište si je na papír nebo do poznámek.

Zbytek si nechte na příště. Konzultací bude víc, než si teď myslíte.

## Dvě věty, které mění celý rozhovor

První: **"Můžete mi to zopakovat jednodušeji?"** Není to ostuda a lékaři na to jsou zvyklí. Odborný jazyk je jejich mateřština, ne vaše.

Druhá: **"Co to konkrétně mění na našem plánu?"** Tahle otázka vytáhne z každého nálezu to podstatné a ušetří vám hodiny hledání na internetu.

> Seznam je pomůcka pro komunikaci s lékařem, ne zdravotní doporučení. Odpovědi platné pro vás dá jen váš ošetřující lékař.`,
      minutes: 4,
      phases: ['diagnostics', 'genetic_testing'],
      dayRange: [1, 60],
      topics: ['klinika', 'vysledky', 'komunita'],
      level: 'essential',
      hero: 'sand',
      author: 'Gabi',
      publishedOn: '2026-01-11',
      boost: 0.85,
      checklist: [
        {
          id: 'diag-cl3-plan',
          text: 'Jaký je plán vyšetření a v jakém pořadí?',
          group: 'Plán',
        },
        {
          id: 'diag-cl3-cyklus',
          text: 'Která vyšetření jsou vázaná na konkrétní den cyklu?',
          hint: 'Klíčové pro plánování dovolené i práce.',
          group: 'Plán',
        },
        {
          id: 'diag-cl3-cas',
          text: 'Jak dlouho celá diagnostika potrvá, když půjde všechno hladce?',
          group: 'Plán',
        },
        {
          id: 'diag-cl3-vek',
          text: 'Jak dlouho má v mém věku smysl vyčkávat, než přejdeme k léčbě?',
          group: 'Plán',
        },
        {
          id: 'diag-cl3-vyznam',
          text: 'Co konkrétně tenhle nález mění na našem postupu?',
          hint: 'Nejužitečnější otázka v celé léčbě. Ptejte se u každého výsledku.',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl3-opakovat',
          text: 'Má smysl tento odběr zopakovat? Může být zkreslený?',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl3-jednotky',
          text: 'V jakých jednotkách je moje hodnota a jaké je rozmezí vaší laboratoře?',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl3-kdo',
          text: 'Kdo mi výsledky vysvětlí a kdy?',
          group: 'Výsledky',
        },
        {
          id: 'diag-cl3-partner',
          text: 'Co má teď udělat partner a do kdy?',
          group: 'Partner',
        },
        {
          id: 'diag-cl3-androlog',
          text: 'Má se partner objednat k andrologovi?',
          group: 'Partner',
          optional: true,
        },
        {
          id: 'diag-cl3-cena',
          text: 'Co hradí pojišťovna a co budeme platit sami?',
          group: 'Peníze a organizace',
        },
        {
          id: 'diag-cl3-kontakt',
          text: 'Jak vás kontaktuji, když se něco stane mimo ordinační hodiny?',
          hint: 'Uložte si číslo do telefonu hned, ne až bude potřeba.',
          group: 'Peníze a organizace',
        },
        {
          id: 'diag-cl3-lekar',
          text: 'Budu mít jednoho lékaře, nebo pokaždé jiného?',
          group: 'Peníze a organizace',
          optional: true,
        },
        {
          id: 'diag-cl3-dalsi-krok',
          text: 'Co je úplně další krok a kdy se uvidíme?',
          hint: 'Nikdy neodcházejte bez odpovědi na tuhle otázku.',
          group: 'Plán',
        },
      ],
    },
    {
      id: 'diag-clanek-cekani-na-vysledky',
      kind: 'article',
      title: 'Jak přežít čekání na výsledky',
      excerpt:
        'Nejde o trpělivost. Jde o to, že vaše hlava nemá kam jinam jít — a s tím se dá pracovat konkrétně.',
      body: `## Proč je tohle čekání jiné

Čekání na výsledky není nuda. Je to **stav zvýšené pohotovosti**. Tělo se chová, jako by se něco dělo, i když se nic neděje — a vy jste unavená z ničeho.

K tomu se přidává specifikum diagnostiky: **výsledek nemáte jak ovlivnit.** U většiny náročných věcí v životě se dá něco dělat. Tady je práce hotová v momentě, kdy vás píchli do žíly.

## Co s tím funguje

**Zjistěte konkrétní datum.** "Za pár týdnů" je nekonečno, "do 14. dubna" je úsek. Když vám termín neřeknou, ptejte se: kdy nejdřív a kdy nejpozději?

**Domluvte si způsob doručení.** Zavolají vám? Máte volat vy? Objeví se výsledek v aplikaci? Nejistota v tomhle bodě zdvojnásobuje úzkost — protože pak koukáte na telefon každou hodinu.

**Nastavte si okno na starosti.** Zní to jako trik z časopisu, ale funguje to: vyhraďte si patnáct minut denně, kdy se tím vědomě zabýváte. Zbytek dne, když myšlenka přijde, si ji odložte na to okno. Nepotlačujete ji — odkládáte ji. Mozek to bere.

**Plánujte věci, které se stanou bez ohledu na výsledek.** Ne velké odměny "až", ale běžné body v kalendáři: schůzka, výlet, kino. Čekání se hůř roztahuje do prázdna, když v něm jsou pevné body.

**Hýbejte se.** Ne kvůli plodnosti. Kvůli tomu, že úzkost se drží v těle a chůze ji rozmělní líp než přemýšlení.

## Co nefunguje

- **Vyhledávání výsledků na internetu předem.** Připravujete se na scénáře, které v 90 % nenastanou, a spotřebujete na to energii, kterou budete potřebovat později.
- **Fóra a diskuze v tomhle konkrétním okně.** Najdete tam každý možný příběh, nejhorší z nich si zapamatujete.
- **Vysvětlování všem okolo.** Čím víc lidí ví, že čekáte, tím víc se vás bude ptát — a vy budete odpovídat na otázku, kterou si sama zakazujete.
- **Sliby typu "když to vyjde, tak…"** Obchodování s osudem přináší úlevu na deset minut a vinu na tři dny.

## Když to přijde v nevhodnou chvíli

Ujasněte si předem, **kdy telefon nebrat**. Výsledek vám mohou zavolat v úterý v jedenáct během porady. Máte právo hovor nepřijmout a zavolat zpátky, až budete na místě, kde můžete reagovat.

Praktické: mějte v hlavě jedno místo, kam v takové chvíli půjdete. Schodiště, auto, park před budovou. Vědět předem, kam jít, zabere půl minuty a ušetří hodně.

## Když výsledek přijde a je špatný

Dejte si tři dny, než z něj budete dělat závěry. Nic se za tři dny nezhorší a vy budete o tři dny dál od prvního nárazu.

Pak si sepište otázky a domluvte konzultaci. **Nikdy nedělejte zásadní rozhodnutí ve stejném týdnu**, kdy jste dostala špatnou zprávu.

## Kdy si říct o pomoc

Ozvěte se lékaři nebo psychologovi, pokud:

- **nespíte** déle než dva týdny,
- nezvládáte běžné povinnosti,
- máte panické stavy, bušení srdce, pocit nedostatku vzduchu,
- objevují se myšlenky, že by bylo lepší tu nebýt.

Poslední bod je vždy důvod vyhledat pomoc okamžitě — obraťte se na svého lékaře, na linku první psychické pomoci nebo na pohotovost.

> Text nabízí obecné zvládací strategie a nenahrazuje odbornou psychologickou ani lékařskou péči.`,
      minutes: 7,
      phases: ['diagnostics', 'genetic_testing'],
      dayRange: [5, 60],
      topics: ['cekani', 'psychika', 'sebepece'],
      level: 'comfort',
      hero: 'dusk',
      author: 'Gabi',
      publishedOn: '2026-01-16',
      boost: 0.8,
    },
    {
      id: 'diag-audio-deset-minut-pred-zakrokem',
      kind: 'audio',
      title: 'Deset minut před zákrokem',
      excerpt:
        'Nahrávka na poslech v čekárně — pro chvíli, kdy vám buší srdce a nechcete o tom s nikým mluvit.',
      body: `## Přepis nahrávky

Sedíte někde, kde jste sedět nechtěla. Možná máte na sobě papírovou košili, možná ještě svoje oblečení. Kolem vás chodí lidé, pro které je tohle úterý.

Nebudu vás uklidňovat tím, že to nic není. Vy víte, že to něco je.

Tak jen tohle: **položte chodidla celou plochou na zem.** Cítíte, jak vás podlaha drží. Nemusíte se držet vy, drží vás ona.

Nadechněte se nosem — a teď dlouhý výdech ústy, delší než nádech. Ještě jednou. Delší výdech je jediná věc, kterou vaše tělo pozná jako signál, že není v ohrožení. Nemusíte tomu věřit. Ono to funguje i bez vaší víry.

Teď najděte v místnosti **tři věci, které mají hranu**. Roh stolu. Rám dveří. Okraj knihy. Tvrdé, jasné, ohraničené. Vaše hlava se jich chytne a přestane na chvíli utíkat dopředu.

A jednu **měkkou věc**. Rukáv. Vlastní dlaň. Šálu.

Teď si položte ruku na hrudní kost a nechte ji tam. Ne kvůli symbolice — kvůli tomu, že váha vlastní ruky snižuje tep.

Za pár minut někdo řekne vaše jméno. Vstanete a půjdete tam. **Nebudete přitom klidná a to je v pořádku.** Nikdo po vás nechce, abyste tohle prožívala hezky. Chce se po vás jen, abyste tam došla.

A ještě jedna věc. Až to skončí, budete o jednu položku dál. Ne u cíle. Jen o jednu položku dál — a přesně z takových položek je celá tahle cesta složená.

Ještě jeden dlouhý výdech. A teď dýchejte normálně.

> Nahrávka slouží ke zklidnění a nenahrazuje lékařskou ani psychologickou péči. Pokud se cítíte na omdlení, máte silnou bolest nebo se vám špatně dýchá, řekněte to personálu.`,
      minutes: 10,
      phases: ['diagnostics', 'genetic_testing'],
      dayRange: [1, 60],
      topics: ['psychika', 'sebepece', 'cekani'],
      level: 'comfort',
      hero: 'blush',
      author: 'Gabi',
      publishedOn: '2026-01-22',
      mediaNote:
        'Scénář je psaný k poslechu: krátké věty a dlouhé pauzy mezi nimi, aby se stihlo dýchat. S tichem trvá zhruba deset minut. Do sluchátek v čekárně se hodí líp než na reproduktor.',
    },
    {
      id: 'diag-podcast-kdyz-najdou-neco-navic',
      kind: 'podcast',
      title: 'Když výsledky najdou něco navíc',
      excerpt:
        'O tom, co se stane, když přijdete kvůli plodnosti a odejdete s diagnózou, kterou jste vůbec nehledala.',
      body: `## O čem díl je

Diagnostika neplodnosti má vedlejší účinek, o kterém nikdo předem nemluví: **prohlédnou vás důkladněji než kdy dřív v životě.** A občas se při tom najde něco, co s plodností nesouvisí vůbec.

Nejčastěji jde o štítnou žlázu, o kterou se do té doby nikdo nezajímal. Někdy o inzulinovou rezistenci. Někdy o vysoký krevní tlak, o chudokrevnost, o nedostatek vitaminu D. Občas o nález na ultrazvuku, který si žádá kontrolu.

V dílu mluvíme o třech věcech.

**Za prvé — proč to tak zaskočí.** Přišla jste s jedním úkolem a najednou máte dva. Emočně to působí jako podraz, i když je to vlastně dobrá zpráva: našlo se něco, o čem byste jinak nevěděla roky.

**Za druhé — jak nepřepnout do režimu "jsem samá porucha".** Diagnostika má tendenci proměnit člověka v seznam odchylek. Když se to stane, ztratíte pocit, že vaše tělo je vaše. Mluvíme o tom, jak si udržet odstup: nález je věc, kterou máte, ne věc, kterou jste.

**Za třetí — praktické pořadí.** Ne všechno se musí řešit hned a ne všechno se musí řešit před léčbou. Klíčová otázka na lékaře zní: **odkládá tenhle nález léčbu neplodnosti, nebo běží vedle ní?** U velké části nálezů zní odpověď "běží vedle".

## Co v dílu ještě zazní

- Proč nemá smysl srovnávat svoje výsledky s výsledky kamarádky.
- Jak mluvit s praktickým lékařem, aby nálezy z reprodukční kliniky převzal.
- Kdy si říct o druhý názor a jak to udělat bez pocitu zrady.
- Proč se vyplatí mít jednoho člověka, který drží celkový obraz.

## Věta z dílu, kterou si možná odnesete

Vaše tělo nemá "nic v pořádku". Má několik věcí, které se dají pojmenovat, a tím pádem i řešit. To je rozdíl mezi bezmocí a plánem.

> Podcast je vzdělávací a nenahrazuje lékařskou péči. Jakýkoli nález konzultujte se svým ošetřujícím lékařem.`,
      minutes: 24,
      phases: ['diagnostics'],
      dayRange: [10, 60],
      topics: ['vysledky', 'psychika', 'klinika'],
      level: 'comfort',
      hero: 'taupe',
      author: 'Tým Bloomia',
      publishedOn: '2026-02-03',
      mediaNote:
        'Rozhovor dvou hlasů ve studiu, neformální tempo, bez hudebních předělů uprostřed. Na začátku krátká znělka, na konci shrnutí tří bodů. Vhodné na poslech při chůzi nebo v autě.',
    },
    {
      id: 'diag-kviz-ctete-vysledky',
      kind: 'quiz',
      title: 'Kvíz: rozumíte svým výsledkům?',
      excerpt:
        'Šest otázek, po kterých budete na konzultaci vědět, na co se doptat — a co naopak řešit nemusíte.',
      body: `## K čemu tenhle kvíz je

Není to zkouška a nedostanete za něj známku. Je to způsob, jak si projít **nejčastější omyly**, kvůli kterým ženy zbytečně nespí — a naopak si připomenout to, na co má smysl se ptát.

U každé odpovědi najdete vysvětlení. Když se v něčem netrefíte, není to vaše chyba — jsou to přesně ty věci, které se v ordinaci neřeknou nahlas.

> Kvíz je vzdělávací. Své konkrétní hodnoty vždy probírejte s ošetřujícím lékařem — nic z toho, co si tady přečtete, se nedá použít jako výklad vašich výsledků.`,
      minutes: 6,
      phases: ['diagnostics'],
      dayRange: [5, 45],
      topics: ['vysledky', 'hormony'],
      level: 'essential',
      hero: 'sky',
      author: 'Tým Bloomia',
      reviewedBy: 'Odborně garantováno – reprodukční medicína',
      publishedOn: '2026-02-12',
      quiz: [
        {
          q: 'Co AMH vypovídá o vajíčkách?',
          options: [
            'Kolik jich přibližně zbývá',
            'Jakou mají kvalitu',
            'Za jak dlouho přijde menopauza',
            'Jestli otěhotníte přirozeně',
          ],
          correct: 0,
          explain:
            'AMH je ukazatel množství, ne kvality. Kvalitu vajíček určuje především věk a z krve se změřit nedá. AMH také nepředpovídá datum menopauzy ani nevylučuje přirozené otěhotnění.',
        },
        {
          q: 'Proč se základní hormonální profil odebírá na začátku cyklu?',
          options: [
            'Protože jsou hodnoty tehdy nejvyšší',
            'Kvůli lepší dostupnosti termínů',
            'Protože je systém vynulovaný a hodnoty jsou porovnatelné',
            'Protože jindy se odebírat nesmí',
          ],
          correct: 2,
          explain:
            'Hormony v cyklu tvoří křivku. Na začátku cyklu, obvykle 2.–4. den, je výchozí stav, ze kterého se dají hodnoty číst navzájem — hlavně vztah FSH a estradiolu.',
        },
        {
          q: 'Partner má jeden špatný spermiogram. Co to znamená?',
          options: [
            'Je to definitivní diagnóza mužské neplodnosti',
            'Je potřeba jít rovnou na IVF s ICSI',
            'Nic se řešit nemusí, čísla stejně kolísají',
            'Výsledek se má zopakovat, protože kolísá podle posledních měsíců',
          ],
          correct: 3,
          explain:
            'Tvorba spermií trvá zhruba tři měsíce, takže výsledek odráží nemoc, horečku, stres nebo saunu z předchozího období. Jeden nález se proto standardně ověřuje kontrolním vyšetřením — o dalším postupu pak rozhodne lékař.',
        },
        {
          q: 'Odběr progesteronu na 21. den cyklu vyšel nízký. Co je nejčastější vysvětlení?',
          options: [
            'Vaječníky nefungují',
            'Ovulace přišla později, takže odběr byl načasovaný mimo',
            'Je potřeba okamžitě nasadit hormony',
            'Výsledek nemá žádnou vypovídací hodnotu',
          ],
          correct: 1,
          explain:
            '"Odběr na 21. den" je zkratka pro "zhruba týden po ovulaci". U delšího nebo nepravidelného cyklu vyjde v ten den progesteron nízký zcela očekávaně. Načasování odběru vždy řešte s lékařem.',
        },
        {
          q: 'Nález varianty genu MTHFR — jak se k němu dnes obvykle přistupuje?',
          options: [
            'Jako k závažné trombofilii vyžadující léčbu',
            'Jako k častému nálezu, který sám o sobě obvykle nic nemění',
            'Jako k důvodu nedoporučit IVF',
            'Jako k příčině neplodnosti',
          ],
          correct: 1,
          explain:
            'Varianty MTHFR jsou v populaci velmi časté a jejich rutinní testování se nedoporučuje. Samotný nález obvykle není důvodem k diagnóze trombofilie ani ke zvláštní léčbě. Co znamená ve vaší situaci, řekne lékař.',
        },
        {
          q: 'Která otázka na konzultaci přinese nejvíc užitku u každého nálezu?',
          options: [
            'Je to vážné?',
            'Kolik žen s tímhle otěhotnělo?',
            'Co konkrétně to mění na našem plánu?',
            'Dá se to vyléčit doplňky stravy?',
          ],
          correct: 2,
          explain:
            'Tahle otázka odděluje nálezy, které mění postup, od těch, které jsou jen informací do dokumentace. Ušetří vám týdny zbytečného strachu a rovnou vede k dalšímu kroku.',
        },
      ],
    },
    {
      id: 'diag-pribeh-rok-nez-jsme-vedeli',
      kind: 'story',
      title: 'Rok, než jsme věděli proč',
      excerpt:
        'Příběh o čtrnácti měsících diagnostiky, o partnerovi, který nechtěl na vyšetření, a o dni, kdy se všechno vyjasnilo.',
      body: `## Jak to začalo

Objednala jsem se v září, protože mi kamarádka řekla, že rok je hranice, po které se má člověk začít ptát. Byli jsme spolu osm let, brali jsme to jako formalitu. Doslova jsem tehdy řekla: **"Půjdeme si pro razítko, že je všechno v pohodě."**

Na první konzultaci trvalo dvacet minut, než jsem pochopila, že žádné razítko nebude.

## První kolo

Odběry třetí den cyklu. AMH. Ultrazvuk, na kterém lékař počítal folikuly nahlas a já se snažila zapamatovat si číslo, aniž bych vypadala, že si ho zapamatovávám.

Výsledky přišly za dva týdny a byly nudné. Nudné je v tomhle kontextu skvělé slovo — všechno v rozmezí, nic zvláštního. Odcházela jsem s pocitem úlevy, který mi vydržel asi tři dny, než mi došlo, že úleva neznamená vysvětlení.

## Kde jsme ztratili čtyři měsíce

Na spermiogram. Partner ho odkládal od října do února.

Nebylo to z lhostejnosti, i když mně to tak dlouho připadalo. Bylo to ze strachu, který nikdy nepojmenoval, a ze studu, který si ani neuvědomoval. Zkoušela jsem prosbu, logiku, výčitku i ticho. Fungovalo až to, že jsem přestala objednávat termíny za něj.

Objednal se sám. V únoru. A výsledek nebyl dobrý.

## Co s tím udělal

Tři týdny jsme o tom nemluvili. Chodil dřív spát. Přestal se ptát, jak dopadly moje odběry — a mě to štvalo víc než samotný výsledek, protože jsem si připadala, jako bych v tom byla sama, i když se to týkalo hlavně jeho.

Zlom přišel na jedné hodně nepovedené večeři, kdy jsem mu řekla, že takhle to dál nejde. Ne že je to jeho vina. Že **nemůžu být zároveň pacientka i jeho terapeutka.**

Druhý den si našel androloga. Sám.

## Druhé kolo

Kontrolní spermiogram v dubnu vyšel jinak — pořád ne skvěle, ale jinak. Ukázalo se, že v lednu prodělal chřipku s vysokou horečkou, na což si ani nevzpomněl, dokud se ho na to lékař cíleně nezeptal.

Mezitím jsem já absolvovala HyFoSy. Bála jsem se toho měsíc. Trvalo to pět minut, bolelo to asi tři z nich a pak jsem seděla v autě a smála se, jak absurdně jsem se toho bála.

## Den, kdy se to vyjasnilo

V červenci, na kontrole, kde jsme poprvé seděli oba. Lékař rozložil papíry a řekl větu, kterou si pamatuju doslova: **"Máte dvě věci, které se sčítají. Ani jedna z nich by sama o sobě nemusela vadit."**

A pak nám řekl, co budeme dělat.

Nebrečela jsem z toho nálezu. Brečela jsem z toho plánu. Čtrnáct měsíců jsem měla pocit, že se vznáším v prázdnu, a najednou tu byl seznam kroků s daty.

## Co bych udělala jinak

- **Trvala bych na spermiogramu hned na začátku.** Ztratili jsme čtyři měsíce na vyšetření, které trvá jeden den.
- **Zapisovala bych si víc.** Ze čtyř konzultací mám poznámky ze dvou a ty dvě mi zachránily nejmíň dvě zbytečné návštěvy.
- **Neptala bych se internetu na věci, na které jsem se mohla zeptat lékaře** o tři dny později.
- **Nechala bych partnera dělat jeho část.** Čím víc jsem to řídila, tím míň zbývalo jemu.

## A co bych udělala stejně

Že jsem nepřestala. I v těch měsících, kdy se nedělo nic a kdy jsem měla pocit, že se jen dokola objednávám na vyšetření, po kterých nic není.

Diagnostika není čekání na start. **Je to už začátek.**

> Osobní zkušenost jedné ženy. Váš průběh i závěry mohou být úplně jiné — postup vždy řešte se svým lékařem.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [10, 90],
      topics: ['psychika', 'partner', 'komunita'],
      level: 'comfort',
      hero: 'dawn',
      author: 'Tým Bloomia',
      publishedOn: '2026-02-24',
      boost: 0.7,
    },
    {
      id: 'diag-clanek-jak-si-vybrat-kliniku',
      kind: 'article',
      title: 'Jak si vybrat kliniku a kdy ji změnit',
      excerpt:
        'Úspěšnost na webu vám neřekne skoro nic — tady je šest věcí, které o klinice vypovídají mnohem víc.',
      body: `## Proč nezačínat u čísel úspěšnosti

Čísla na webech klinik se počítají různě a nejsou mezi sebou porovnatelná. Pracoviště, které bere složité pacientky po několika neúspěších, bude mít horší statistiku než pracoviště, které je odmítá — a přitom může být lepší.

**Úspěšnost se navíc zásadně liší podle věku a diagnózy.** Průměrné číslo o vás neříká nic. Co má smysl: zeptat se přímo na konzultaci, jaká je vaše konkrétní vyhlídka v této klinice s vaší konkrétní situací. Dobrá klinika vám na to odpoví konkrétně a bez slibů.

## Šest věcí, které vypovídají víc

**1. Dostanete jednoho lékaře?** Kontinuita je v dlouhé léčbě zásadní. Pokaždé jiný lékař znamená pokaždé znovu vysvětlovat kontext — a znamená to, že celkový obraz nedrží nikdo.

**2. Jak se s nimi komunikuje mezi návštěvami?** Existuje linka, e-mail, portál? Jak rychle odpovídají? Tohle poznáte hned v prvním týdnu a je to jeden z nejlepších ukazatelů.

**3. Řeknou vám nahlas plán?** Dobré pracoviště vám na konci konzultace řekne, co je další krok a kdy. Když odcházíte s "uvidíme", je to signál.

**4. Jak mluví o penězích?** Transparentní ceník, srozumitelné vysvětlení, co hradí pojišťovna a co ne, žádný tlak na okamžité rozhodnutí u nadstandardních metod.

**5. Jak reagují na otázky?** Zkuste se zeptat na něco, co zpochybňuje jejich doporučení. Reakce vám řekne víc než celá prohlídka pracoviště.

**6. Jak se tam cítíte?** Ne interiér — atmosféra. Budete tam chodit v nejzranitelnějším období svého života, často brzy ráno a často s brekem na krajíčku. Prostředí, kde se cítíte jako číslo, si vybírat nemusíte.

## Praktická logistika, která se podceňuje

- **Vzdálenost.** Během stimulace a monitoringu jezdíte na kliniku často a brzy ráno. Dvě hodiny cesty vypadají na papíře přijatelně a v praxi vás rozloží.
- **Ordinační hodiny a víkendy.** Odběry i výkony se řídí biologií, ne kalendářem. Zeptejte se, jak to řeší o víkendech a svátcích.
- **Parkování a čekárny.** Malichernost do chvíle, než tam strávíte padesátou návštěvu.

## Kdy uvažovat o změně

Legitimní důvody, které slyšíme nejčastěji:

- Několik neúspěšných cyklů **bez změny strategie** a bez rozboru toho, co se stalo.
- Pocit, že se **neptáte, protože se bojíte, jak zareagují**.
- Nemožnost dostat se ke svému lékaři.
- Tlak na drahé doplňkové metody bez vysvětlení, co od nich čekat.
- Zásadní neshoda v plánu, kterou se nedaří probrat.

Změna kliniky **není zrada ani přiznání neúspěchu**. Je to běžná věc a lékaři to vědí.

## Jak změnu udělat prakticky

1. Vyžádejte si **kopii kompletní dokumentace** — máte na ni právo. Včetně protokolů ze stimulace a embryologických zpráv, ty jsou nejcennější.
2. Zjistěte, co bude s **zamrazenými embryi nebo vzorky** — jejich převoz je možný, ale má svá pravidla a svou cenu.
3. Na nové pracoviště jděte s připraveným shrnutím: co se dělalo, jaké byly protokoly, jaké byly výsledky.
4. Zvažte **druhý názor ještě před změnou.** Někdy z něj vyjde, že postup byl správný — a to je taky odpověď.

## A jedna věta na závěr

Máte právo si vybírat. Léčba neplodnosti je zdravotní péče, ne loterie, kde jste ráda, že vás vůbec vzali.

> Článek nenahrazuje lékařskou péči. O medicínském postupu vždy rozhoduje váš ošetřující lékař.`,
      minutes: 8,
      phases: ['diagnostics'],
      dayRange: [1, 90],
      topics: ['klinika', 'finance', 'komunita'],
      level: 'deep',
      hero: 'sand',
      author: 'Gabi',
      publishedOn: '2026-03-09',
    },
    {
      id: 'diag-clanek-cekani-na-genetiku',
      kind: 'article',
      title: 'Čekání na genetický výsledek: šest týdnů, které se vlečou jinak',
      excerpt:
        'Genetika se nečeká jako běžný odběr — protože se netýká jen léčby, ale i toho, co si o sobě myslíte.',
      body: `## Proč to trvá tak dlouho

U genetického vyšetření se nejde jen "změřit hodnota". Buňky se musí nechat množit, chromozomy prohlédnout, u cílených testů se někdy nejdřív **připravuje systém pro vaši konkrétní mutaci**. Proto se běžně čeká týdny až měsíce.

Není to fronta. Je to samotné vyšetření.

## Čím je tohle čekání jiné

Běžný odběr se týká vaší léčby. Genetický výsledek se týká **vaší rodiny, vašich rodičů, vašich sourozenců a představy o vlastním původu**. Proto na sebe nabaluje otázky, které se s hormonálním profilem nikdy nespojí:

- Co když se ukáže, že to mám po někom?
- Budu to muset říct sestře?
- Co když se rozhodneme jinak, než bychom chtěli?

Tyhle otázky se často nedají s nikým probrat, protože ještě nevíte, jestli vůbec nastanou. To je specifická forma osamělosti.

## Co pomáhá konkrétně

**Vědět, na co přesně se čeká.** Zeptejte se, jaký test se dělá, co může vyjít a jaké jsou varianty výsledku. Konkrétní tři scénáře jsou snesitelnější než neohraničená hrůza.

**Domluvit si předem konzultaci s genetikem** na den, kdy má výsledek být. Ne "ozveme se". Pevný termín, do kterého se nemusíte ptát.

**Vědět, kdo výsledek sdělí a jak.** Genetický nález by se neměl dozvídat po telefonu mezi dveřmi. Řekněte to nahlas, pokud vám na tom záleží.

**Odložit rozhodnutí o tom, komu to řeknete.** Nemusíte to řešit teď. Až budete vědět co, budete vědět líp i komu.

**Nechat si prostor na obyčejný život.** Šest týdnů je dlouho na to, aby stálo všechno ostatní.

## Co nedělat

Nehledejte předem konkrétní translokace, mutace a jejich prognózy. Bez znalosti vlastního nálezu si přečtete deset scénářů, z nichž devět se vás netýká, a zapamatujete si ten nejhorší.

Nedomlouvejte si na den výsledku nic důležitého. Ani porada, ani rodinná oslava.

## Když výsledek přijde

Vezměte na konzultaci **partnera nebo blízkého člověka** a zapisujte si, co zazní. Genetika má vlastní slovník a v afektu si z něj zapamatujete zhruba nic.

Ptejte se na tři věci:

1. Co konkrétně se našlo a co to znamená pro naše dítě?
2. Jaké máme možnosti a co která obnáší časově a finančně?
3. Musíme se rozhodnout hned, nebo máme čas?

Odpověď na třetí otázku je skoro vždycky, že čas máte. Využijte ho.

## Když se něco najde

Nejste za to zodpovědná. Chromozomální uspořádání ani nosičství jste si nevybrala a nezpůsobila ničím, co jste udělala. To je fakt, ne útěcha.

A ještě jedno: většina genetických nálezů, které se v souvislosti s léčbou neplodnosti najdou, **má řešení nebo alespoň cestu**. Konzultace u klinického genetika je od toho, aby vám je popsala.

## Kdy si říct o pomoc

Ozvěte se odborníkovi, když nespíte déle než dva týdny, když nezvládáte běžné fungování, nebo když se objeví myšlenky, že by bylo lepší tu nebýt. Poslední bod je vždy důvod vyhledat pomoc okamžitě.

> Text nenahrazuje genetické poradenství ani psychologickou péči. Výklad výsledků patří klinickému genetikovi.`,
      minutes: 7,
      phases: ['genetic_testing'],
      dayRange: [3, 45],
      topics: ['genetika', 'cekani', 'psychika'],
      level: 'comfort',
      hero: 'pearl',
      author: 'Gabi',
      publishedOn: '2026-03-23',
      boost: 0.75,
    },
  ],
  dailyCards: [
    {
      id: 'diag-karta-den-1',
      phases: ['diagnostics'],
      day: 1,
      headline: 'Dneškem se z „nedaří se nám“ stává plán',
      body: 'Rozhodnutí jít na kliniku je největší krok celé diagnostiky a máte ho za sebou. Odteď se nebudete ptát internetu, ale lidí, kteří na to mají přístroje. Nečekejte, že to půjde rychle — čekejte, že to půjde dopředu.',
      whatsHappening: [
        'Většina žen v tuhle chvíli cítí úlevu i strach zároveň. Obojí patří k věci.',
        'Ještě nemáte žádnou diagnózu. Máte objednaný termín, nic víc a nic míň.',
      ],
      task: 'Založte si jednu složku v telefonu nebo cloudu s názvem, který za rok najdete. Sem půjde všechno — výsledky, poznámky, otázky.',
      reflection: 'Co mě dnes na tom rozhodnutí nejvíc uleví a co mě nejvíc děsí?',
      tip: 'Zapište si první den poslední menstruace a délku posledních cyklů. Bude to první otázka, kterou vám na klinice položí.',
    },
    {
      id: 'diag-karta-den-2',
      phases: ['diagnostics'],
      day: 2,
      headline: 'Sepište, co už o svém těle víte',
      body: 'Na první konzultaci se vás zeptají na věci, které si ve stresu nevybavíte — operace, nemoci, léky, cykly. Připravená odpověď ušetří čas a hlavně nervy. Nemusí to být krásné, stačí seznam v poznámkách.',
      whatsHappening: [
        'Lékař bude skládat obrázek z drobností, které vám připadají nepodstatné.',
        'Části otázek se bude týkat partnera — dejte mu vědět předem.',
      ],
      task: 'Napište si do poznámek pět bodů: operace, chronické nemoci, léky a doplňky, alergie, gynekologická historie.',
      reflection: 'Je něco, co jsem nikdy nikomu neřekla a co by mohlo být důležité?',
      tip: 'Rodinná anamnéza se počítá taky — časná menopauza, opakované ztráty těhotenství nebo genetické nemoci v rodině vás i partnera.',
    },
    {
      id: 'diag-karta-den-3',
      phases: ['diagnostics'],
      day: 3,
      headline: 'Odběry na začátku cyklu: proč zrovna teď',
      body: 'Základní hormonální profil se odebírá v úzkém okně na začátku cyklu, protože jen tehdy jsou hodnoty navzájem čitelné. Není to byrokracie, je to biologie. Když termín nestihnete, posune se to o celý cyklus.',
      whatsHappening: [
        'Odebírá se obvykle FSH, LH, estradiol, často prolaktin a TSH.',
        'AMH se dá odebrat kdykoli — nemusí se vázat na den cyklu.',
        'Prvním dnem cyklu je den plného krvácení, ne špinění.',
      ],
      task: 'Ověřte si na klinice, jestli máte být na odběr nalačno a v kolik hodin.',
      reflection: 'Co potřebuju, abych z odběrů neměla takový tlak?',
      tip: 'Den před odběrem prolaktinu se doporučuje vynechat intenzivní sport a sex — jinak může vyjít falešně vyšší.',
    },
    {
      id: 'diag-karta-den-5',
      phases: ['diagnostics'],
      day: 5,
      headline: 'Ultrazvuk spočítá vaše antrální folikuly',
      body: 'Ty tmavé tečky, které lékař na obrazovce počítá, jsou drobné folikuly — každý s jedním nezralým vajíčkem. Jejich počet spolu s AMH tvoří obraz vaší ovariální rezervy. Je to počet, ne kvalita, a to je zásadní rozdíl.',
      whatsHappening: [
        'Vyšetření trvá pár minut, dělá se vaginálním ultrazvukem.',
        'Lékař zároveň hodnotí dělohu, sliznici a případné cysty.',
      ],
      task: 'Zapište si číslo za pravý a levý vaječník zvlášť a den cyklu. Za rok to bude cenná srovnávací hodnota.',
      reflection: 'Přistihuju se, že si své číslo hned s někým porovnávám?',
      tip: 'Nehledejte doma tabulky „normálních“ hodnot. Bez znalosti vašeho věku a AMH je samotné číslo skoro nečitelné.',
    },
    {
      id: 'diag-karta-den-7',
      phases: ['diagnostics'],
      day: 7,
      headline: 'Spermiogram je na řadě, i když se do toho nikomu nechce',
      body: 'Je to rychlé, neinvazivní a levné vyšetření, které může změnit směr celé léčby. Přesto se na něj v párech čeká měsíce. Když jediné, co dnes uděláte, bude objednání termínu, byl to dobrý den.',
      whatsHappening: [
        'Doporučuje se pohlavní abstinence dva až sedm dní předem.',
        'Výsledek kolísá podle posledních tří měsíců — proto se často opakuje.',
      ],
      task: 'Domluvte se s partnerem na konkrétním dni. Ne „někdy“, ale datum v kalendáři — a ať si termín objedná sám.',
      reflection: 'Nesu v tomhle procesu víc, než je moje část? Co z toho můžu předat?',
      tip: 'Když partner odkládá, pomáhá věcnost víc než prosby: jeden vzorek, jedno dopoledne, a víme o polovinu víc.',
    },
    {
      id: 'diag-karta-den-9-12',
      phases: ['diagnostics'],
      dayRange: [9, 12],
      headline: 'Fáze, kdy se nic neděje — a přesto jste vyčerpaná',
      body: 'Čekání na výsledky není odpočinek, je to stav zvýšené pohotovosti. Tělo se chová, jako by se něco dělo, i když se nic neděje. Únava, kterou cítíte, je z toho, ne z lenosti.',
      whatsHappening: [
        'Většina odběrů má výsledek do několika dní, genetika trvá týdny.',
        'Nutkání kontrolovat telefon každou hodinu je normální reakce, ne slabost.',
      ],
      task: 'Zavolejte na kliniku a zeptejte se na konkrétní datum, do kterého má výsledek být. Ohraničené čekání se nese jinak než nekonečné.',
      reflection: 'Kam se moje hlava v tomhle čekání nejraději rozutíká — a co ji na chvíli zastaví?',
      tip: 'Vyhraďte si patnáct minut denně na starosti. Když myšlenka přijde jindy, odložte ji na to okno. Nepotlačujete ji, jen ji přesouváte.',
    },
    {
      id: 'diag-karta-den-14-hsg',
      phases: ['diagnostics'],
      day: 14,
      headline: 'Vyšetření průchodnosti vejcovodů',
      body: 'HSG i HyFoSy odpovídají na jednu otázku: může se vajíčko potkat se spermií? Nejsilnější pocit obvykle přijde ve chvíli, kdy se vpravuje tekutina, a je to krátké. Domluvte si předem odvoz — řízení většinou zvládnete, ale nemusíte.',
      whatsHappening: [
        'Slabé špinění a křeče jeden až dva dny po vyšetření jsou běžné.',
        'Vezměte si vložku, tekutina po vyšetření odchází.',
      ],
      task: 'Zeptejte se kliniky, jestli si máte hodinu předem vzít lék proti bolesti a jaký. Nedávkujte nic sama nad rámec doporučení.',
      reflection: 'Čeho se na tomhle vyšetření bojím nejvíc — bolesti, nebo výsledku?',
      tip: 'Naplánujte si zbytek dne volněji. Není to zákrok, po kterém se vrací na poradu.',
      callDoctorIf: [
        'Horečka nad 38 °C nebo zimnice',
        'Silná bolest břicha, která neustupuje nebo se zhoršuje',
        'Krvácení silnější než běžná menstruace, se sraženinami',
        'Zapáchající výtok v následujících dnech',
        'Opakované zvracení, mdloba nebo silná závrať',
      ],
    },
    {
      id: 'diag-karta-den-16-20',
      phases: ['diagnostics'],
      dayRange: [16, 20],
      headline: 'Mezidobí: dobrý čas na papírování',
      body: 'Zrovna se nic neodebírá a nikam nejedete. Přesně teď má smysl dát dohromady složku výsledků, protože až přijde stimulace nebo změna kliniky, nebudete na to mít hlavu.',
      whatsHappening: [
        'Část výsledků už možná máte, část ještě přijde.',
        'Papíry z čekáren se ztrácejí rychleji, než čekáte.',
      ],
      task: 'Vyfoťte všechny papíry, které máte doma, a uložte je pod názvem ve tvaru datum-typ. Deset minut práce, roky užitku.',
      reflection: 'Co z posledních dvou týdnů si chci zapamatovat a co bych radši zapomněla?',
      tip: 'K hormonálním výsledkům si vždy dopište den cyklu. Bez něj z nich za rok nikdo nic nevyčte.',
    },
    {
      id: 'diag-karta-den-21',
      phases: ['diagnostics'],
      day: 21,
      headline: 'Progesteron: kontrola, jestli ovulace proběhla',
      body: 'Odběr „na 21. den“ je ve skutečnosti zkratka pro „zhruba týden po ovulaci“. Když ovulujete později, vyjde hodnota nízká zcela očekávaně a neznamená to poruchu. Načasování je tady důležitější než samotné číslo.',
      whatsHappening: [
        'Progesteron tvoří žluté tělísko, které vzniká po ovulaci.',
        'Hodnota kolísá i během jednoho dne, protože se vyplavuje v pulzech.',
      ],
      task: 'Když máte nepravidelný cyklus, zeptejte se na klinice, jak u vás zjistí skutečný den ovulace. Je to naprosto legitimní otázka.',
      reflection: 'Kolik energie mi bere sledování vlastního cyklu — a je to teď udržitelné?',
      tip: 'Nikdy si sama nenasazujte progesteron ani doplňky slibující „úpravu hormonů“. Zamlží to celý diagnostický obraz.',
    },
    {
      id: 'diag-karta-den-24-30',
      phases: ['diagnostics'],
      dayRange: [24, 30],
      headline: 'Konzultace nad výsledky: přijďte s otázkami',
      body: 'Tohle je návštěva, kde se z jednotlivých čísel stává plán. Vyberte si tři otázky, které vám nedají spát, a napište si je na papír — v ordinaci vám vypadnou z hlavy všechny. A odcházejte až ve chvíli, kdy víte, co je další krok.',
      whatsHappening: [
        'Lékař čte vztahy mezi hodnotami, ne jednotlivá čísla.',
        'Řada nálezů je zajímavá, ale na postup nemá vliv.',
      ],
      task: 'Napište si tři otázky. Ať je mezi nimi ta nejužitečnější ze všech: co konkrétně to mění na našem plánu?',
      reflection: 'Odcházím dnes s pocitem, že vím, co bude dál?',
      tip: 'Ještě v autě si zapište tři věci: co bylo řečeno, co mám udělat a do kdy. Za týden si nevzpomenete.',
    },
    {
      id: 'diag-karta-po-zakroku',
      phases: ['diagnostics'],
      day: 33,
      headline: 'Den po zákroku: co je normální a co už ne',
      body: 'Po hysteroskopii i laparoskopii je běžné špinění, křeče a únava z anestezie. Po laparoskopii vás nejspíš překvapí bolest v ramenou a pod žebry — způsobuje ji zbytkový plyn a pomáhá na ni chůze a teplo. Dnes nic neplánujte a nechte si pomoct.',
      whatsHappening: [
        'Chůze po bytě se doporučuje — pomáhá odchodu plynu i prevenci trombózy.',
        'Sprcha ano, koupel, bazén a sex podle pokynů lékaře, obvykle několik dní pauza.',
      ],
      task: 'Přečtěte si propouštěcí zprávu a vypište si z ní tři věci: co brát, co nedělat a kdy je kontrola.',
      reflection: 'Co dnes potřebuju od lidí kolem sebe — a řekla jsem jim to?',
      tip: 'Uložte si do telefonu číslo na pracoviště, kde vás operovali. Hledat ho ve tři ráno je to poslední, co chcete.',
      callDoctorIf: [
        'Horečka nad 38 °C nebo zimnice',
        'Silná, narůstající bolest břicha nebo tvrdé břicho',
        'Krvácení silnější než běžná menstruace, se sraženinami',
        'Opakované zvracení nebo neschopnost pít',
        'Zarudnutí, hnisání nebo rozestup rány',
        'Bolest, otok či zarudnutí lýtka — může jít o trombózu',
        'Dušnost nebo bolest na hrudi — okamžitě, i v noci',
        'Neschopnost se vymočit',
      ],
    },
    {
      id: 'diag-karta-den-31-45',
      phases: ['diagnostics'],
      dayRange: [31, 45],
      headline: 'Když se diagnostika protáhne přes další cyklus',
      body: 'Část vyšetření jde udělat jen v určité dny cyklu, takže když se něco nestihne, posouvá se to o měsíc. Je to nejčastější důvod, proč diagnostika trvá déle, než jste čekala — a není to nikoho vina.',
      whatsHappening: [
        'Frustrace z odkladu bývá silnější než z výsledku samotného.',
        'Většina párů má v tomhle bodě první krizi trpělivosti.',
      ],
      task: 'Napište si, co se v tomhle cyklu stihne a co se posouvá. Konkrétní seznam funguje proti pocitu, že se neděje nic.',
      reflection: 'Co mi teď dělá největší tlak — čas, peníze, nebo pocit, že to řídím sama?',
      tip: 'Zeptejte se, jestli se dá něco udělat souběžně. Někdy se vyšetření řadí za sebe jen ze zvyku.',
    },
    {
      id: 'diag-karta-muzsky-faktor',
      phases: ['diagnostics'],
      dayRange: [8, 45],
      modifiers: ['male_factor'],
      headline: 'Výsledek ukázal na něj. Teď nastupuje ticho.',
      body: 'Většina mužů se po takové zprávě zavře — ne z lhostejnosti, ale ze studu, který si často ani neuvědomují. Nejužitečnější, co teď můžete udělat, je oddělit fakt od člověka a nechat ho vlastnit jeho část léčby.',
      whatsHappening: [
        'Spermiogram odráží poslední tři měsíce, takže jeden výsledek není verdikt.',
        'Řešení existují — od úpravy životosprávy po ICSI. O konkrétním rozhodne lékař.',
      ],
      task: 'Řekněte mu jednu větu bez rady a bez útěchy: „Tohle je na nás dva. Já mám svoje vyšetření, ty svoje.“',
      reflection: 'Nesu kromě vlastní léčby i jeho emoce? A je to udržitelné?',
      tip: 'Nesdílejte jeho výsledek dál bez jeho výslovného souhlasu. Ani s nejbližší kamarádkou.',
    },
    {
      id: 'diag-karta-genetika-den-1',
      phases: ['genetic_testing'],
      day: 1,
      headline: 'Genetika: odběr je rychlý, čekání dlouhé',
      body: 'Samotný odběr je běžná krev ze žíly, obvykle u obou partnerů. Pak se ale čeká týdny — protože se buňky musí nechat množit a chromozomy prohlédnout. Není to fronta, je to samotné vyšetření.',
      whatsHappening: [
        'Karyotyp se vyšetřuje u obou partnerů zároveň.',
        'Výsledek je doživotní a nikdy se nebude opakovat.',
      ],
      task: 'Zeptejte se, jaký test se přesně dělá, jaké jsou možné varianty výsledku a do kdy má být hotový.',
      reflection: 'Čeho se na genetickém výsledku bojím nejvíc? Je to nález, nebo to, co bude potom?',
      tip: 'Domluvte si rovnou konzultaci u klinického genetika na termín, kdy má výsledek být. Ušetříte si týdny nejistoty.',
    },
    {
      id: 'diag-karta-genetika-den-5-20',
      phases: ['genetic_testing'],
      dayRange: [5, 20],
      headline: 'Nehledejte si mutace, které možná nemáte',
      body: 'Bez konkrétního nálezu si na internetu přečtete deset scénářů, z nichž devět se vás netýká — a zapamatujete si ten nejhorší. Tohle je jediné období léčby, kdy je nevědění opravdu praktické.',
      whatsHappening: [
        'Genetické čekání se nese jinak, protože se týká i rodiny a představy o vlastním původu.',
        'Otázky typu „řeknu to sestře?“ zatím nemusíte řešit — nevíte co.',
      ],
      task: 'Naplánujte si na příští týden jednu věc, která se stane bez ohledu na výsledek. Kino, oběd, výlet. Cokoli s datem.',
      reflection: 'Co bych si o tomhle období přála pamatovat, kromě čekání?',
      tip: 'Na den výsledku si nedomlouvejte nic důležitého. Ani poradu, ani rodinnou oslavu.',
    },
    {
      id: 'diag-karta-genetika-den-25-45',
      phases: ['genetic_testing'],
      dayRange: [25, 45],
      headline: 'Až výsledek přijde, jděte tam ve dvou',
      body: 'Genetika má vlastní slovník a v napětí si z něj zapamatujete zhruba nic. Vezměte s sebou partnera nebo blízkého člověka a zapisujte si. A ptejte se, jestli se musíte rozhodovat hned — odpověď je skoro vždycky, že čas máte.',
      whatsHappening: [
        'Nejčastější výsledek je normální nález u obou partnerů.',
        'I když se něco najde, obvykle existuje cesta — genetik ji má popsat, ne za vás rozhodnout.',
      ],
      task: 'Napište si tři otázky: co se našlo, jaké máme možnosti, a máme čas se rozmyslet.',
      reflection: 'Kdo je člověk, se kterým tenhle výsledek chci sdílet jako první?',
      tip: 'Vyžádejte si kompletní písemnou zprávu, ne jen slovní shrnutí. Je to doživotní dokument a jednou se bude hodit.',
    },
  ],
  encouragements: [
    {
      id: 'diag-pov-mapa',
      text: 'Diagnostika není čekání na start. Je to už začátek.',
      tone: 'practical',
    },
    {
      id: 'diag-pov-jedno-cislo',
      text: 'Jedno číslo z jednoho rána není váš příběh. Je to jeden údaj z jednoho odběru.',
      tone: 'hopeful',
    },
    {
      id: 'diag-pov-otazka',
      text: 'Nejužitečnější věta v ordinaci: co konkrétně to mění na našem plánu?',
      author: 'Gabi',
      tone: 'practical',
    },
    {
      id: 'diag-pov-nevite-spatne',
      text: 'Ptát se třikrát na totéž není hloupost. Je to jediný způsob, jak si to zapamatovat.',
      tone: 'tender',
    },
    {
      id: 'diag-pov-neni-vina',
      text: 'Nic z toho, co se najde ve vašich výsledcích, jste nezpůsobila tím, jak jste žila nebo co jste cítila.',
      tone: 'tender',
    },
    {
      id: 'diag-pov-plan',
      text: 'Proti bezmoci nefunguje naděje. Funguje plán s datem.',
      tone: 'practical',
    },
    {
      id: 'diag-pov-tri-dny',
      text: 'Po špatné zprávě si dejte tři dny, než z ní budete dělat závěry. Za tři dny se nic nezhorší a vy budete o tři dny dál od nárazu.',
      tone: 'intense',
    },
    {
      id: 'diag-pov-jedno-embryo',
      text: 'Statistika popisuje tisíce žen. Vaše léčba se hraje o jedno embryo, které se uchytí.',
      tone: 'hopeful',
    },
    {
      id: 'diag-pov-vyber',
      text: 'Máte právo si vybírat. Léčba neplodnosti je zdravotní péče, ne loterie, kde jste ráda, že vás vzali.',
      tone: 'intense',
    },
    {
      id: 'diag-pov-dnes',
      text: 'Dneska nemusíte být v pohodě. Stačí, že jste tam došla.',
      tone: 'tender',
    },
  ],
  glossary: [
    {
      term: 'AMH',
      aliases: ['anti-Müllerián hormon', 'antimülleriánský hormon'],
      short: 'Hormon z drobných folikulů, používaný jako ukazatel zásoby vajíček.',
      long: 'AMH vzniká v malých, ještě nezralých folikulech ve vaječníku, takže jeho hladina nepřímo vypovídá o množství zbývajících vajíček. Dá se odebrat kdykoli v cyklu a dobře předpovídá, jak vaječníky zareagují na stimulaci. Neměří ale kvalitu vajíček ani nepředpovídá datum menopauzy. Pozor na jednotky — ng/ml a pmol/l se liší zhruba sedminásobně, takže hodnoty z různých laboratoří nelze porovnávat bez kontextu.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'FSH',
      aliases: ['folikuly stimulující hormon'],
      short: 'Hormon z mozku, který vyzývá folikuly k růstu.',
      long: 'FSH se tvoří v podvěsku mozkovém a na začátku cyklu vyzývá skupinu folikulů, aby začaly zrát. Čím hůř vaječník reaguje, tím víc FSH musí tělo poslat — proto se vyšší hodnota na začátku cyklu vnímá jako signál nižší ovariální rezervy. Hodnotí se vždy spolu s estradiolem, protože ten ji může zkreslit. FSH mezi cykly kolísá, takže jedna vyšší hodnota není verdikt.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'LH',
      aliases: ['luteinizační hormon'],
      short: 'Hormon, jehož prudký vzestup spouští ovulaci.',
      long: 'LH je po většinu cyklu v pozadí, uprostřed cyklu ale prudce stoupne a tento vzestup spustí uvolnění vajíčka z folikulu. Právě LH detekují ovulační testy z moči — pozitivní test tedy znamená, že se ovulace blíží, ne že už proběhla. Na začátku cyklu se hodnotí hlavně poměr LH k FSH, který je jedním z ukazatelů zvažovaných u PCOS.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'Estradiol',
      aliases: ['E2'],
      short: 'Hlavní ženský hormon, který tvoří rostoucí folikuly.',
      long: 'Estradiol produkují dozrávající folikuly a spolu s ním roste děložní sliznice. Na začátku cyklu má být nízký — když nízký není, může falešně snížit hodnotu FSH a zkreslit tak posouzení ovariální rezervy. Během stimulace se měří opakovaně jako ukazatel toho, jak vaječníky reagují.',
      topics: ['hormony', 'stimulace'],
    },
    {
      term: 'Progesteron',
      short: 'Hormon druhé poloviny cyklu, který připravuje sliznici na embryo.',
      long: 'Progesteron tvoří žluté tělísko, které ve vaječníku vznikne po ovulaci. Mění děložní sliznici na prostředí vhodné pro uhnízdění. Měří se zhruba týden po ovulaci — u nepravidelného cyklu proto odběr na pevný 21. den může vyjít nízký zcela očekávaně. Hodnota kolísá i během jednoho dne, protože se vyplavuje v pulzech.',
      topics: ['hormony', 'transfer'],
    },
    {
      term: 'Prolaktin',
      short: 'Hormon spojený s tvorbou mléka; ve vysokých hladinách tlumí ovulaci.',
      long: 'Prolaktin tvoří podvěsek mozkový. Když je ho příliš, tělo se chová, jako by kojilo, a potlačí ovulaci. Je to hormon citlivý na stres — vystřelí po námaze, po sexu, při bolesti i po samotném odběru. Proto se zvýšená hodnota téměř vždy ověřuje opakovaným odběrem v klidnějších podmínkách. Zvyšuje ho i řada běžných léků.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'TSH',
      short: 'Řídící hormon štítné žlázy; vyšší hodnota znamená slabší funkci.',
      long: 'TSH vysílá podvěsek mozkový do štítné žlázy. Logika je stejná jako u FSH — čím hůř štítná žláza pracuje, tím hlasitěji na ni mozek volá, takže vyšší TSH paradoxně znamená slabší funkci. Při plánování těhotenství se často pracuje s přísnějším cílem než u běžné populace, protože plod je v prvním trimestru závislý na hormonech matky. Konkrétní cílovou hodnotu určuje lékař.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'Anti-TPO',
      aliases: ['protilátky proti tyreoidální peroxidáze'],
      short: 'Protilátky ukazující na autoimunitní zánět štítné žlázy.',
      long: 'Zvýšené anti-TPO svědčí o tom, že imunitní systém reaguje proti vlastní štítné žláze, nejčastěji v rámci Hashimotovy tyreoiditidy. Funkce žlázy může být zatím normální, ale riziko jejího zhoršení v čase — a zvlášť v těhotenství — je vyšší. Proto se u žen s protilátkami hodnoty kontrolují častěji. Samotná přítomnost protilátek automaticky neznamená léčbu.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'Antrální folikuly',
      aliases: ['AFC', 'antral follicle count'],
      short: 'Drobné folikuly spočítané na ultrazvuku na začátku cyklu.',
      long: 'Antrální folikuly jsou váčky s tekutinou, každý s jedním nezralým vajíčkem, na ultrazvuku viditelné jako tmavé tečky. Jejich součet z obou vaječníků tvoří AFC — druhý pilíř posouzení ovariální rezervy vedle AMH. Počítá se na začátku cyklu, protože později už jeden folikul roste a ostatní ustupují. Číslo mezi cykly kolísá a závisí i na přístroji a zkušenosti vyšetřujícího.',
      topics: ['hormony', 'vysledky', 'klinika'],
    },
    {
      term: 'Ovariální rezerva',
      short: 'Odhad zbývající zásoby vajíček ve vaječnících.',
      long: 'Ovariální rezerva se posuzuje kombinací AMH, počtu antrálních folikulů a věku, doplněnou hodnotami FSH a estradiolu na začátku cyklu. Popisuje množství, nikoli kvalitu — a kvalitu vajíček určuje především věk. Rezervu nelze zvýšit žádným doplňkem ani postupem; její znalost slouží k plánování léčby a k volbě stimulačního protokolu.',
      topics: ['hormony', 'vysledky'],
    },
    {
      term: 'HSG',
      aliases: ['hysterosalpingografie'],
      short: 'Rentgenové vyšetření průchodnosti vejcovodů kontrastní látkou.',
      long: 'Při HSG se do dělohy zavede tenká kanyla a vpraví kontrastní látka, jejíž průchod se sleduje rentgenem. Ukáže tvar dutiny děložní i to, jestli kontrast projde vejcovody. Plánuje se v první polovině cyklu po odeznění krvácení a při vyloučeném těhotenství. Bývá krátce bolestivé, pocit připomíná silné menstruační křeče. Po vyšetření je běžné slabé špinění.',
      topics: ['klinika', 'vysledky'],
    },
    {
      term: 'HyFoSy',
      aliases: ['hystero-foam-sonografie', 'ultrazvukové vyšetření průchodnosti'],
      short: 'Ultrazvuková obdoba HSG s pěnovým roztokem, bez rentgenu.',
      long: 'HyFoSy odpovídá na stejnou otázku jako HSG — jestli jsou vejcovody průchodné — ale místo rentgenu používá ultrazvuk a místo kontrastní látky pěnový roztok. Výhodou je absence rentgenového záření a možnost posoudit zároveň vaječníky. Kterou z obou metod klinika zvolí, závisí na vybavení a vaší situaci.',
      topics: ['klinika', 'vysledky'],
    },
    {
      term: 'Hysteroskopie',
      short: 'Pohled optickým přístrojem přímo do dutiny děložní.',
      long: 'Při hysteroskopii se přes děložní hrdlo zavede tenký optický přístroj a lékař vidí sliznici, vyústění vejcovodů a případné polypy, srůsty nebo přepážky. Diagnostická varianta se jen dívá a bývá krátká, operační zároveň nález řeší a probíhá obvykle v krátké celkové anestezii. Indikuje se hlavně při podezření na nález v dutině, po opakovaně neúspěšných transferech nebo po opakovaných ztrátách těhotenství.',
      topics: ['klinika', 'vysledky'],
    },
    {
      term: 'Laparoskopie',
      short: 'Operační výkon, při kterém lékař vidí pánevní orgány zvenčí.',
      long: 'Laparoskopie je chirurgický výkon v celkové anestezii — drobnými řezy se zavede kamera a nástroje a dutina břišní se naplní plynem. Je to jediná metoda, která spolehlivě potvrdí endometriózu, a zároveň umožňuje nález rovnou ošetřit. Po výkonu bývá typická bolest v ramenou způsobená zbytkovým plynem. Vzhledem k tomu, že jde o operaci, se nedělá plošně.',
      topics: ['klinika', 'vysledky'],
    },
    {
      term: 'Spermiogram',
      aliases: ['vyšetření ejakulátu'],
      short: 'Laboratorní rozbor vzorku ejakulátu — počet, pohyblivost, tvar.',
      long: 'Spermiogram hodnotí objem, koncentraci a celkový počet spermií, jejich pohyblivost, tvar (morfologii), vitalitu a přítomnost bílých krvinek. Doporučuje se abstinence dva až sedm dní před odběrem. Výsledek výrazně kolísá, protože tvorba spermií trvá zhruba tři měsíce a ovlivní ji nemoc, horečka, stres i sauna — proto se jeden nález standardně ověřuje kontrolním vyšetřením.',
      topics: ['partner', 'vysledky'],
    },
    {
      term: 'Oligoastenoteratozoospermie',
      aliases: ['OAT', 'oligozoospermie', 'astenozoospermie', 'teratozoospermie'],
      short: 'Souhrnné označení pro snížený počet, pohyblivost i podíl normálních tvarů spermií.',
      long: 'Oligozoospermie znamená snížený počet spermií, astenozoospermie sníženou pohyblivost a teratozoospermie zvýšený podíl abnormálních tvarů. Když jsou přítomné všechny tři, mluví se o OAT syndromu. Úplná nepřítomnost spermií v ejakulátu se označuje jako azoospermie. Žádné z těchto označení není samo o sobě diagnózou příčiny — na tu se pátrá dál u androloga.',
      topics: ['partner', 'vysledky'],
    },
    {
      term: 'DFI',
      aliases: ['fragmentace DNA spermií'],
      short: 'Test poškození genetického materiálu ve spermiích.',
      long: 'DFI vyjadřuje podíl spermií s poškozenou DNA. Doplňuje běžný spermiogram, protože spermie může vypadat a pohybovat se normálně, a přesto nést poškozený genetický materiál. Zvažuje se hlavně při opakovaných neúspěších, opakovaných ztrátách těhotenství nebo špatném vývoji embryí. Vyšetření se nedělá plošně a jeho výklad patří lékaři.',
      topics: ['partner', 'vysledky', 'embryologie'],
    },
    {
      term: 'Karyotyp',
      short: 'Soupis chromozomů — jejich počtu a struktury.',
      long: 'Karyotyp se vyšetřuje z odběru krve, obvykle u obou partnerů, a zobrazí 46 chromozomů uspořádaných do 23 párů. Na výsledek se čeká týdny, protože se buňky musí nechat množit. Indikuje se hlavně při opakovaných ztrátách těhotenství, opakovaně neúspěšné léčbě nebo výrazně snížených hodnotách ve spermiogramu. Výsledek je doživotní a nikdy se neopakuje.',
      topics: ['genetika', 'vysledky'],
    },
    {
      term: 'Vyvážená translokace',
      short: 'Přesun částí mezi chromozomy, při kterém nechybí žádný genetický materiál.',
      long: 'U vyvážené translokace si části dvou chromozomů vyměnily místo, ale celý genetický materiál je přítomen — nositel je proto zdravý a často o tom celý život neví. Problém nastává až při tvorbě vajíček a spermií, kdy část z nich nese nevyvážené množství materiálu. Taková embrya se často neuchytí nebo těhotenství skončí ztrátou. Řešením může být PGT-SR při IVF.',
      topics: ['genetika', 'embryologie'],
    },
    {
      term: 'PGT-A',
      short: 'Testování embryí na správný počet chromozomů před transferem.',
      long: 'PGT-A hledá aneuploidie, tedy embrya s chybějícím nebo nadbytečným chromozomem. Provádí se v rámci IVF: z blastocysty se odeberou buňky budoucí placenty, embryo se zamrazí a vzorek jde do genetické laboratoře. Netvoří lepší embrya, jen vybírá z těch, která jsou k dispozici — a při malém počtu embryí se může stát, že žádné vhodné nezbude. Odborné diskuze o jeho přínosu u různých skupin pacientek pokračují.',
      topics: ['genetika', 'embryologie'],
    },
    {
      term: 'PGT-M',
      short: 'Testování embryí na konkrétní známou dědičnou nemoc v páru.',
      long: 'PGT-M se používá, když je v páru známá konkrétní mutace — například cystická fibróza nebo spinální svalová atrofie. Test se připravuje na míru dané mutaci, což trvá týdny až měsíce, a je proto potřeba s tím počítat při plánování cyklu. Nenahrazuje prenatální diagnostiku v těhotenství.',
      topics: ['genetika', 'embryologie'],
    },
    {
      term: 'ICSI',
      aliases: ['intracytoplazmatická injekce spermie'],
      short: 'Vpravení jedné vybrané spermie přímo do vajíčka.',
      long: 'Při ICSI embryolog pod mikroskopem vybere jednu spermii a zavede ji tenkou jehlou přímo do vajíčka. Používá se hlavně u mužského faktoru, kdy je spermií málo nebo se hůř pohybují, a v situacích, kdy dřívější klasické oplození selhalo. Dokáže pracovat i s velmi malým počtem spermií, včetně těch získaných přímo z varlete.',
      topics: ['embryologie', 'partner'],
    },
    {
      term: 'Blastocysta',
      short: 'Embryo pátý až šestý den vývoje, připravené k transferu nebo zamrazení.',
      long: 'Blastocysta je stadium, kdy má embryo už stovku buněk rozdělených do dvou částí — vnitřní buněčné masy, ze které vznikne dítě, a trofektodermu, ze kterého vznikne placenta. Právě z trofektodermu se odebírá vzorek při preimplantačním genetickém testování. Dorůst do stadia blastocysty zvládne jen část oplozených vajíček, což je samo o sobě přirozený výběr.',
      topics: ['embryologie', 'transfer'],
    },
    {
      term: 'Endometrium',
      aliases: ['děložní sliznice'],
      short: 'Výstelka dutiny děložní, do které se embryo zahnizďuje.',
      long: 'Endometrium během cyklu roste vlivem estradiolu a po ovulaci se vlivem progesteronu mění na prostředí vhodné pro uhnízdění. Jeho tloušťka a vzhled se sledují ultrazvukem, hlavně před transferem. Nález v dutině — polyp, srůst nebo přepážka — může uhnízdění zhoršovat a bývá důvodem k hysteroskopii.',
      topics: ['transfer', 'embryologie'],
    },
    {
      term: 'PCOS',
      aliases: ['syndrom polycystických ovarií'],
      short: 'Hormonálně-metabolický stav s poruchou ovulace a projevy nadbytku androgenů.',
      long: 'PCOS se diagnostikuje podle pravidla dva ze tří: poruchy ovulace, projevy nadbytku androgenů (klinické nebo laboratorní) a typický obraz vaječníků na ultrazvuku, při vyloučení jiných příčin. Nejde o cysty, ale o velký počet drobných folikulů, které nedozrály. U velké části žen hraje roli inzulinová rezistence. AMH bývá vysoké, což znamená dobrou zásobu — ale i vyšší riziko hyperstimulace při léčbě.',
      topics: ['hormony', 'vysledky', 'strava'],
    },
    {
      term: 'Endometrióza',
      short: 'Výskyt tkáně podobné děložní sliznici mimo dělohu.',
      long: 'Ložiska endometriózy reagují na hormonální cyklus podobně jako sliznice v děloze, ale krev nemá kam odejít — vzniká zánět, dráždění a časem srůsty. Typicky se projevuje silnou bolestí při menstruaci, bolestí při sexu a obtížemi s otěhotněním, přičemž intenzita bolesti neodpovídá rozsahu nálezu. Drobná ložiska na pobřišnici nejsou na běžném ultrazvuku vidět; jistotu dá až laparoskopie.',
      topics: ['vysledky', 'psychika'],
    },
    {
      term: 'Adenomyóza',
      short: 'Prorůstání tkáně podobné sliznici do svaloviny děložní stěny.',
      long: 'Adenomyóza mění samotnou dělohu — stěna zesílí a ztratí pružnost. Projevuje se silným a dlouhým krvácením, křečovitou bolestí a pocitem těžké dělohy. Pozná se nejčastěji cíleným ultrazvukovým vyšetřením, u nejasných nálezů magnetickou rezonancí. Může zhoršovat uhnízdění embrya; strategii léčby, například odložený transfer, určuje lékař podle rozsahu nálezu.',
      topics: ['vysledky', 'klinika'],
    },
    {
      term: 'Hydrosalpinx',
      short: 'Vejcovod uzavřený a naplněný tekutinou.',
      long: 'Hydrosalpinx vzniká nejčastěji po prodělaném zánětu nebo po operaci v malé pánvi. Kromě toho, že takový vejcovod není funkční, může tekutina z něj zatékat do dutiny děložní a zhoršovat uhnízdění embrya. Proto se před transferem někdy zvažuje operační řešení. Rozhodnutí patří vždy lékaři po posouzení celé situace.',
      topics: ['vysledky', 'klinika', 'transfer'],
    },
    {
      term: 'Trombofilie',
      aliases: ['Leidenská mutace', 'faktor V Leiden'],
      short: 'Zvýšený sklon ke srážení krve, vrozený nebo získaný.',
      long: 'Mezi vrozené trombofilie patří například Leidenská mutace faktoru V nebo mutace protrombinu, mezi získané antifosfolipidový syndrom. Jako rizikový faktor trombózy — jejíž riziko v těhotenství i při hormonální léčbě stoupá — se berou vážně. Jako vysvětlení neplodnosti je jejich role sporná a plošné testování se nedoporučuje; výjimkou je antifosfolipidový syndrom u opakovaných ztrát těhotenství.',
      topics: ['vysledky', 'genetika', 'leky'],
    },
    {
      term: 'OHSS',
      aliases: ['ovariální hyperstimulační syndrom'],
      short: 'Nadměrná reakce vaječníků na stimulaci; vyžaduje rychlou lékařskou pomoc.',
      long: 'OHSS vzniká, když vaječníky na hormonální stimulaci zareagují příliš silně — zvětší se a tekutina uniká do dutiny břišní. Vyšší riziko mají ženy s PCOS a vysokým AMH, proto se u nich volí opatrnější protokoly. Varovné příznaky: rychlý nárůst hmotnosti, výrazně nafouklé a napjaté břicho, silná bolest, dušnost, výrazně snížený objem moči, opakované zvracení. Při jejich výskytu je nutné okamžitě kontaktovat kliniku.',
      topics: ['stimulace', 'leky'],
    },
    {
      term: 'Nevysvětlená neplodnost',
      short: 'Označení pro situaci, kdy základní diagnostika nenašla příčinu.',
      long: 'Nevysvětlená neplodnost znamená, že ovulace probíhá, vejcovody jsou průchodné, dutina děložní v pořádku a spermiogram v normě — a těhotenství přesto nepřichází. Není to prázdná kategorie, ale přiznání, že běžná vyšetření nevidí kvalitu vajíček, funkci spermií, samotné oplození ani uhnízdění. U části párů se vysvětlení najde až v laboratoři při IVF.',
      topics: ['vysledky', 'psychika'],
    },
  ],
}
