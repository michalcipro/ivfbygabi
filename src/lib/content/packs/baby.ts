import type { ContentItem, ContentPack, GlossaryTerm } from '../types'

/**
 * Knihovna pro etapu po porodu — šestinedělí, kojení a krmení, spánek,
 * první rok dítěte a návrat domů po NICU.
 *
 * Platí tu stejné pravidlo jako všude jinde: popisujeme, co se běžně děje,
 * a u každého tématu s rizikem vážné komplikace uvádíme, kdy volat lékaře.
 * Nikdy nehodnotíme, jestli žena krmí „správně“.
 */

const body: ContentItem[] = [
  {
    id: 'mim-sestinedeli-telo',
    kind: 'article',
    title: 'Co se děje s tělem v šestinedělí, týden po týdnu',
    excerpt:
      'Šest týdnů, o kterých se mluví nejmíň ze všech. Tady je, co je běžné — a co běžné není.',
    body: `## První týden

**Děloha** se stahuje z hmotnosti asi jednoho kilogramu zpátky na padesát gramů. Stahy (nazývané zástinky) bývají nejsilnější při kojení, protože oxytocin působí na obojí. U druhého a dalšího dítěte jsou výrazně citelnější.

**Očistky** jsou první dny jasně červené a vydatné. Postupně přecházejí do hnědé a nakonec do nažloutlé nebo čiré.

**Návaly potu**, hlavně v noci. Tělo se zbavuje zadržené vody. Trvá to obvykle dva až tři týdny a nikdo na to ženy dopředu neupozorní.

**Otoky nohou** mohou být první dny paradoxně větší než na konci těhotenství, zvlášť po infuzích při porodu.

## Druhý týden

Hráz nebo jizva začíná znatelně méně bolet. Očistky slábnou. Objevuje se **kolísání nálad**, které vrcholí typicky mezi třetím a pátým dnem — je to hormonální, ne charakterové.

Kojení se v tomhle týdnu často zlomí k lepšímu, pokud první dny bolelo.

## Třetí až čtvrtý týden

**Vypadávání vlasů** začíná zhruba tři měsíce po porodu, ale nervozita z něj přichází dřív. Je to návrat do normálního cyklu, ne nemoc.

Kolem třetího týdne se u části žen na krátko vrátí **jasně červené krvácení**. Bývá to reakce na zvýšenou aktivitu — signál zvolnit, ne důvod k panice. Když trvá déle než dva dny nebo sílí, patří na kontrolu.

**Břišní stěna** je měkká a při zatnutí se může uprostřed rýsovat val — diastáza. U většiny žen se během několika měsíců upraví, cílená fyzioterapie to urychluje.

## Pátý až šestý týden

Očistky u většiny žen končí. Přichází **šestinedělní prohlídka**, kde se hodnotí hojení, děloha, jizva, tlak, případně krevní obraz.

Ovulace se může vrátit **ještě před první menstruací** — i při plném kojení. Antikoncepci má smysl řešit na téhle prohlídce, ne později.

## Sex

Doporučení „počkat do konce šestinedělí" má fyziologický důvod: dokud se dělohou hojí plocha po placentě, je riziko infekce vyšší. Po prohlídce rozhoduje hlavně vaše tělo.

Počítejte se **suchostí sliznic** — kojení snižuje estrogeny. Lubrikant není luxus, je to řešení. Bolest při sexu, která nepolevuje, patří k fyzioterapeutce pánevního dna, ne k trpělivosti.

## Kdy volat lékaře — bez čekání na kontrolu

- **promáčíte vložku za hodinu nebo méně**, případně odcházejí sraženiny velikosti vejce,
- **horečka nad 38 °C**,
- **zapáchající očistky**,
- **jizva mokvá, je zarudlá, teplá nebo se rozestupuje**,
- **bolest, otok nebo zarudnutí jedné lýtkové svaloviny** — může jít o trombózu,
- **dušnost, bolest na hrudi** — volejte 155,
- **silná bolest hlavy, mžitky, bolest pod pravým žebrem** — preeklampsie vzniká i po porodu,
- **bolestivé, tvrdé a zarudlé místo v prsu s teplotou**.

> Šestinedělí má obrovský individuální rozptyl. Cokoliv, co vás znepokojuje, patří vašemu lékaři — i když to v tomhle textu není.`,
    minutes: 9,
    phases: ['postpartum', 'coming_home'],
    dayRange: [0, 42],
    topics: ['sestinedeli', 'zdravi_ditete'],
    level: 'essential',
    hero: 'linen',
    reviewedBy: 'Odborně garantováno – gynekologie a porodnictví',
    publishedOn: '2026-06-11',
    boost: 0.95,
  },
  {
    id: 'mim-jizva-po-cisari',
    kind: 'article',
    title: 'Jizva po císaři: hojení, péče a kdy začít s masáží',
    excerpt:
      'Šest vrstev tkáně se hojí různě rychle. Povrch vypadá dobře do dvou týdnů, hluboké vrstvy potřebují měsíce.',
    body: `## Časová osa hojení

**Dny 0–7.** Rána je krytá, sleduje se prosakování a okolí. Bolest bývá nejsilnější druhý den, kdy odezní anestezie. Analgezie je součást léčby, ne slabost — bez ní se hůř hýbete a hůř kojíte.

**Týdny 1–2.** Stehy se vstřebávají nebo se odstraňují. Povrch se uzavírá. Tahání a píchání je běžné.

**Týdny 2–6.** Jizva tuhne, může svědit a být necitlivá na dotek. Necitlivost nad jizvou může trvat měsíce a u části žen trvale — jsou přeťaté drobné kožní nervy.

**Měsíce 2–12.** Jizva postupně bledne a měkne. Definitivní podobu má zhruba za rok.

## Co dělat prvních šest týdnů

- **Nezvedat nic těžšího než dítě.** Ne proto, že by se jizva „roztrhla", ale proto, že zatížení zpomaluje hojení a bolí.
- **Vstávat přes bok** — otočit se, spustit nohy, zvednout se rukama, ne břichem.
- **Přitisknout polštářek na jizvu** při kašli, kýchnutí a smíchu.
- **Sprchovat, nekoupat.** Vany, bazény a sauny až po zhojení a po dohodě s lékařem.
- **Vzdušné a volné oblečení**, kalhotky s vysokým pasem.
- **Hlídat vyprazdňování.** Zácpa po císaři je běžná a tlak při tlačení nepříjemný — vláknina, pití, případně změkčovadlo stolice po domluvě s lékařem.

## Masáž jizvy

Začíná se **až po úplném zhojení povrchu**, obvykle po šesti týdnech a po kontrole u lékaře.

1. Čisté ruce, trochu neparfemovaného oleje nebo krému.
2. **Krouživé pohyby** po jizvě i kolem ní, mírný tlak.
3. Až tkáň povolí, přidejte **posouvání kůže do stran a jemné nadzvedávání**.
4. Pět minut denně po dobu několika měsíců.

Cílem je, aby jizva neztuhla a nesrostla s podložím. Tuhá vtažená jizva umí později způsobovat bolesti zad, potíže s pánevním dnem i bolestivý sex — a dobře na ni reaguje fyzioterapie.

## Kdy volat lékaře

- jizva je **zarudlá, horká, oteklá, mokvá nebo zapáchá**,
- **rozestupuje se** nebo se objeví boule,
- **teplota nad 38 °C**,
- bolest se místo zlepšování **zhoršuje**,
- **náhlá silná bolest břicha**.

## A jedna věc, která není o hojení

Císař je porod. Věta „aspoň jsi to měla snadné" je nepravdivá a zraňující — je to břišní operace, po které se staráte o novorozence. Pokud vám z průběhu porodu zůstal těžký pocit, nemusíte čekat, až přejde sám.

> Postupy po operaci se liší podle pracoviště. Vždycky se řiďte propouštěcí zprávou a doporučením svého lékaře.`,
    minutes: 7,
    phases: ['postpartum', 'coming_home', 'birth'],
    dayRange: [0, 60],
    modifiers: ['csection'],
    topics: ['sestinedeli', 'cisar'],
    level: 'essential',
    hero: 'pearl',
    reviewedBy: 'Odborně garantováno – gynekologie a porodnictví',
    publishedOn: '2026-06-14',
    boost: 0.9,
  },
  {
    id: 'mim-panevni-dno',
    kind: 'article',
    title: 'Pánevní dno po porodu: první cviky a kdy jít k fyzioterapeutce',
    excerpt:
      'Únik moči po porodu je běžný, ale není normální ve smyslu „nedá se s tím nic dělat". Dá.',
    body: `## Proč to řešit hned

Pánevní dno neslo v posledních měsících těhotenství několik kilogramů navíc a při vaginálním porodu se muselo roztáhnout na několikanásobek. Po císaři je zatížené taky — nese ho celé těhotenství, ne porod.

**Únik moči při kašli, kýchnutí nebo smíchu** hlásí velká část žen v prvních měsících. Pokud trvá déle než tři měsíce, patří k odborníkovi. Neřešený se v menopauze zhoršuje.

## Kdy začít

**První dny:** jen dech. Lehněte si, ruku na břicho, s nádechem nechte břicho stoupnout, s výdechem klesnout. Zní to jako nic, ale bránice a pánevní dno pracují společně a tohle je jejich reset.

**Od konce prvního týdne** (a po císaři po domluvě s lékařem) přidejte jemné aktivace.

## Základní cvik

1. Lehněte si na záda, kolena pokrčená.
2. S výdechem si představte, že **zadržujete plyny a zároveň zastavujete proud moči** — jemně, ne maximální silou.
3. Držte 3–5 sekund, přitom **klidně dýchejte**.
4. S nádechem úplně povolte. Uvolnění je stejně důležité jako stah.
5. **10 opakování, 3× denně.**

Časté chyby: zadržený dech, zatnuté hýždě a stehna, cvičení „na sílu". Přetažené pánevní dno je stejný problém jako ochablé.

## Co ještě pomáhá

- **Nezvedat těžké** první šest týdnů.
- **Nezadržovat moč** a netlačit na stolici — zácpa je pro pánevní dno horší než cvičení navíc.
- **Vstávat přes bok** a nesedat si prudce.
- **Vrátit se k běhu a skokům až po posouzení odborníkem**, obvykle ne dřív než za tři měsíce.

## Kdy k fyzioterapeutce specializované na pánevní dno

- únik moči nebo plynů trvá **déle než tři měsíce**,
- máte **pocit tlaku nebo „vypadávání" v pochvě**,
- **bolestivý sex**,
- **bolesti zad nebo pánve**, které nemizí,
- máte **diastázu**, která se nezmenšuje,
- prodělala jste **trhlinu třetího nebo čtvrtého stupně** — v tom případě ideálně už v prvních měsících.

Vyšetření je nebolestivé a začíná rozhovorem. Nemusíte na něj mít doporučení od lékaře, ale zeptat se na šestinedělní prohlídce má smysl.

> Cvičení popsané výše je obecné. Po komplikovaném porodu nebo při bolestech začněte až po posouzení odborníkem.`,
    minutes: 7,
    phases: ['postpartum', 'baby_first_year'],
    dayRange: [3, 200],
    topics: ['sestinedeli', 'pohyb', 'sebepece'],
    level: 'deep',
    hero: 'sage',
    reviewedBy: 'Odborně garantováno – fyzioterapie',
    publishedOn: '2026-06-17',
  },
  {
    id: 'mim-blues-a-deprese',
    kind: 'article',
    title: 'Poporodní blues, deprese a úzkost: jak je od sebe poznat',
    excerpt:
      'Plakat pátý den po porodu je běžné. Nemoct vstát z postele po třech týdnech není. Rozdíl je důležitý a dá se pojmenovat.',
    body: `## Poporodní blues

**Kdy:** začíná typicky třetí až pátý den, odeznívá do dvou týdnů.
**Kolik žen:** většina — udává se přibližně 50–80 %.
**Jak vypadá:** plačtivost bez příčiny, přecitlivělost, podrážděnost, únava, pocit zahlcení. **Mezi tím jsou i dobré chvíle** a schopnost radovat se zůstává.
**Co pomáhá:** spánek po částech, jídlo, pomoc s domácností, méně návštěv, vyslovit to nahlas.

Blues není nemoc. Je to hormonální propad po porodu, srovnatelný s ničím jiným v životě.

## Poporodní deprese

**Kdy:** kdykoliv během prvního roku, nejčastěji v prvních třech měsících. Může navazovat na blues, nebo přijít později.
**Kolik žen:** zhruba každá osmá.
**Jak vypadá:**

- trvale smutná, prázdná nebo otupělá nálada **většinu dne, většinu dní**,
- ztráta zájmu a radosti — i z věcí, které dřív těšily,
- pocity viny a selhání („jsem špatná matka"),
- nespavost i ve chvílích, kdy je příležitost spát, nebo naopak nadměrná spavost,
- ztráta chuti k jídlu nebo přejídání,
- potíže se soustředěním a rozhodováním,
- **odpojení od dítěte** nebo pocit, že k němu nic necítíte,
- myšlenky na to, že by bylo lépe, kdyby tu nebyla.

**Klíčové rozlišení:** blues kolísá a odeznívá, deprese trvá a prohlubuje se.

## Poporodní úzkost

Mluví se o ní míň než o depresi, ale je stejně častá. Projevuje se **neustálou obavou o dítě**, vtíravými děsivými představami (často o tom, že se dítěti něco stane), nutkavým kontrolováním dechu, bušením srdce, neschopností spát ani při hlídání.

**Vtíravé myšlenky nejsou přání ani hrozba.** Jsou to symptomy úzkosti a mluvit o nich je bezpečné — nikdo vám kvůli nim dítě nevezme. Právě strach z toho, že „to nikdo nesmí vědět", udržuje ženy bez pomoci nejdéle.

## Rizikové faktory po IVF a po ztrátě

Vyšší riziko mají ženy po **dlouhé léčbě neplodnosti**, po **ztrátě těhotenství**, po **předčasném porodu a pobytu na NICU**, po **traumatickém porodu**, s depresí v anamnéze a bez podpory okolí.

K tomu se přidává specifická vina: *„po tom všem, co jsme podstoupili, přece nemůžu být nešťastná."* Můžete. Vděčnost depresi nevylučuje a nechrání před ní.

## Kdy vyhledat pomoc

Neváhejte, pokud potíže **trvají déle než dva týdny**, brání vám v péči o sebe nebo o dítě, nebo se zhoršují.

**Okamžitě** — dnes, ne zítra — pokud:

- máte myšlenky na ublížení sobě nebo dítěti,
- máte pocit, že ztrácíte kontakt s realitou, slyšíte hlasy nebo máte přesvědčení, kterým ostatní nerozumí (může jít o poporodní psychózu, což je akutní stav),
- nespíte několik nocí po sobě ani při příležitosti.

**Kam:** praktický lékař, gynekolog, dětská sestra, psychiatr, psycholog. **Linka první psychické pomoci 116 123** funguje nepřetržitě a zdarma. Při bezprostředním ohrožení volejte **155**.

## Co o léčbě vědět

Účinná je psychoterapie i farmakoterapie a **existují antidepresiva slučitelná s kojením**. Rozhodnutí patří lékaři, ale nikdo vás nesmí stavět před volbu „buď kojení, nebo léčba" bez odborného posouzení.

> Tento text nenahrazuje odbornou péči a neslouží k sebediagnostice. Popisuje rozdíly, aby bylo snazší si o pomoc říct.`,
    minutes: 10,
    phases: ['postpartum', 'coming_home', 'baby_first_year'],
    topics: ['psychika', 'sestinedeli'],
    level: 'essential',
    hero: 'blush',
    reviewedBy: 'Odborně garantováno – perinatální psychologie',
    publishedOn: '2026-06-20',
    boost: 1,
  },
  {
    id: 'mim-checklist-sestinedeli',
    kind: 'checklist',
    title: 'Šestinedělí: co si ohlídat a co nechat ostatním',
    excerpt:
      'Praktický seznam pro šest týdnů, kdy má být hlavní úkol hojení — ne dokazování, že to zvládáte sama.',
    body: `## Jak s tím pracovat

Není to seznam úkolů, které musíte splnit. Je to soupis věcí, na které se v šestinedělí zapomíná — a část z nich je vyloženě určená k předání někomu jinému.

Projděte ho **v prvním týdnu doma** a pak ještě jednou kolem třetího týdne.`,
    minutes: 4,
    phases: ['postpartum', 'coming_home'],
    dayRange: [0, 42],
    topics: ['sestinedeli', 'sebepece'],
    level: 'essential',
    hero: 'linen',
    publishedOn: '2026-06-23',
    checklist: [
      { id: 'pediatr', text: 'Registrace u dětského lékaře a první návštěva dětské sestry', group: 'Papíry a termíny' },
      { id: 'rodny-list', text: 'Vyřízený rodný list a přihlášení dítěte ke zdravotní pojišťovně', group: 'Papíry a termíny' },
      { id: 'davky', text: 'Podaná žádost o rodičovský příspěvek a porodné, pokud na ně máte nárok', group: 'Papíry a termíny' },
      { id: 'prohlidka', text: 'Objednaná šestinedělní prohlídka (obvykle 6.–8. týden)', group: 'Papíry a termíny' },
      { id: 'antikoncepce', text: 'Vyřešená antikoncepce — ovulace se vrací i při kojení', hint: 'Ptejte se na variantu slučitelnou s kojením.', group: 'Papíry a termíny' },
      { id: 'krvaceni', text: 'Vím, kdy krvácení znamená volat (promáčená vložka za hodinu, velké sraženiny)', group: 'Moje tělo' },
      { id: 'teplota', text: 'Doma je teploměr a vím, že teplota nad 38 °C patří k lékaři', group: 'Moje tělo' },
      { id: 'prsa', text: 'Vím, jak poznat ucpaný vývod a mastitidu', group: 'Moje tělo' },
      { id: 'dno', text: 'Denně pár minut dechu a jemné aktivace pánevního dna', group: 'Moje tělo' },
      { id: 'jidlo', text: 'Mám co jíst po ruce — jednoruční jídlo u každého krmení', hint: 'Ořechy, jogurt, chleba. Hladová žena v šestinedělí je zbytečný jev.', group: 'Moje tělo' },
      { id: 'pomoc', text: 'Domluvená konkrétní pomoc na první tři týdny — jménem a dnem, ne „kdyby něco“', group: 'Předat ostatním' },
      { id: 'navstevy', text: 'Domluveno, kdo filtruje návštěvy a telefony', group: 'Předat ostatním' },
      { id: 'nakupy', text: 'Nákupy, vaření a praní má na starosti někdo jiný', group: 'Předat ostatním' },
      { id: 'noc', text: 'Domluvené střídání v noci, i když kojím', hint: 'Přebalit, přinést a uspat může partner.', group: 'Předat ostatním' },
      { id: 'nalada', text: 'Někdo, komu můžu říct, jak mi doopravdy je', group: 'Hlava' },
      { id: 'kontakty', text: 'V telefonu uložené: dětská sestra, laktační poradkyně, linka 116 123', group: 'Hlava' },
      { id: 'srovnavani', text: 'Nesrovnávat se s ženami na sociálních sítích ani s vlastní představou', optional: true, group: 'Hlava' },
    ],
  },
]

const feeding: ContentItem[] = [
  {
    id: 'mim-kojeni-start',
    kind: 'article',
    title: 'První dny kojení: přisátí, nástup mléka a bolest, která nemá být',
    excerpt:
      'Kojení je naučená dovednost, ne instinkt. Většina potíží prvního týdne má společnou příčinu — a ta se dá opravit.',
    body: `## Co se děje v prvních dnech

**Dny 0–2: mlezivo.** Hustá nažloutlá tekutina v množství **5–15 ml na jedno krmení**. Vypadá to jako nic a je to přesně tolik, kolik se vejde do žaludku novorozence — ten má první den velikost třešně.

**Dny 2–5: nástup mléka.** Prsa se naplní, ztvrdnou a mohou být teplá a napjaté. Po císaři nebo po komplikovaném porodu může nástup přijít o něco později.

**Dny 5–14: ladění.** Tvorba se přizpůsobuje poptávce. Časté krátké kojení („shlukování") večer je běžné, ne známka nedostatku.

## Přisátí — to nejdůležitější v celém textu

Bolest při kojení **skoro vždy** znamená mělké přisátí. Nesnaží se to vydržet.

Známky dobrého přisátí:

- ústa **doširoka otevřená**, brada zabořená do prsu,
- **spodní ret vyhrnutý ven**, dvorec víc vidět nad horním rtem než pod spodním,
- **tváře plné, ne vpadlé**,
- slyšitelné **polykání** v pomalém rytmu,
- **nebolí to** po prvních vteřinách.

Když to bolí: vsuňte prst do koutku, přerušte podtlak a začněte znovu. Klidně i desetkrát za jedno krmení.

## Kolik toho má být

Řiďte se **plenkami a chováním, ne váhou na kuchyňské váze**:

| Den | Pomočené plenky | Stolice |
| --- | --- | --- |
| 1. | 1–2 | smolka, černá |
| 3. | 3–4 | přechodná, zelenohnědá |
| 5. | 5–6 | žlutá, kašovitá |
| 7.+ | 6 a víc | žlutá, i několikrát denně |

Novorozenec **ztratí do 7–10 % porodní hmotnosti** a vrací se na ni obvykle do dvou týdnů. To je očekávaný průběh, ne selhání.

## Časté potíže a co s nimi

**Nalití prsou.** Krátce chladit mezi krmeními, teplo těsně před přiložením, odstříknout jen tolik, aby dvorec změkl a dítě se mělo čeho chytit.

**Popraskané bradavky.** Kapka mléka na bradavku po kojení, vzdušno, čistý lanolin. A hlavně: opravit přisátí, jinak se to vrátí.

**Dítě usíná u prsu.** Odhalit, přebalit, jemně stimulovat, komprese prsu při polykání.

**Málo mléka.** Skutečný nedostatek je vzácnější, než se zdá. Nejčastější příčina je málo časté nebo neefektivní odsávání mléka z prsu. Řešení je **častější přikládání**, ne dokrm bez posouzení.

## Kdy volat laktační poradkyni nebo lékaře

- kojení **bolí i po opravě přisátí**,
- dítě **nepřibírá** nebo do dvou týdnů nedosáhlo porodní hmotnosti,
- **méně než 6 pomočených plenek** po pátém dni,
- dítě je **netečné, těžko probuditelné**, nechce sát,
- **žloutenka**, která se prohlubuje,
- máte **tvrdé bolestivé místo v prsu s teplotou nad 38 °C**.

> Kojení je individuální. Pokud si nejste jistá, je konzultace s laktační poradkyní nebo dětským lékařem vždycky namístě — a je to levnější než týden pochybností.`,
    minutes: 9,
    phases: ['postpartum', 'birth', 'coming_home'],
    dayRange: [0, 21],
    modifiers: ['breastfeeding'],
    topics: ['kojeni', 'sestinedeli'],
    level: 'essential',
    hero: 'dawn',
    reviewedBy: 'Odborně garantováno – laktační poradenství',
    publishedOn: '2026-06-26',
    boost: 0.95,
  },
  {
    id: 'mim-mastitida',
    kind: 'article',
    title: 'Ucpaný vývod a mastitida: co dělat v prvních hodinách',
    excerpt:
      'Bolestivá bulka v prsu se řeší hned. Rozdíl mezi ucpaným vývodem a zánětem je v horečce — a v tom, jak rychle jednat.',
    body: `## Ucpaný mlékovod

**Jak vypadá:** ohraničené tvrdé bolestivé místo, kůže nad ním může být lehce zarudlá. **Bez teploty a bez chřipkových příznaků.**

**Co dělat:**

1. **Kojit dál a často** — z postiženého prsu jako první.
2. **Krátké teplo těsně před kojením**, chlad mezi krmeními.
3. **Jemná masáž směrem k bradavce** během kojení. Ne hnětení a ne silný tlak — hrubá masáž tkáň otéká a situaci zhoršuje.
4. **Střídat polohy** tak, aby bradička dítěte mířila k postiženému místu.
5. **Klid a pití.** Únava je jeden z hlavních spouštěčů.

Zlepšení obvykle přijde během 12–24 hodin.

## Mastitida

**Jak vypadá:** k bolestivé bulce se přidá **zarudnutí, teplo, horečka nad 38 °C, zimnice a pocit jako při chřipce**. Nástup bývá rychlý, během hodin.

**Co dělat:**

1. **Nepřestávat kojit.** Mléko z postiženého prsu není pro dítě škodlivé a vyprazdňování je součást léčby.
2. **Klid na lůžku, pití, jídlo.**
3. **Analgetikum slučitelné s kojením** po domluvě s lékařem.
4. **Kontaktovat lékaře — týž den.** Pokud se stav do 12–24 hodin nelepší nebo se rychle zhoršuje, bývá potřeba antibiotická léčba a existují antibiotika slučitelná s kojením.

**Volejte bez odkladu**, pokud máte vysokou horečku se zimnicí, cítíte se velmi špatně, na prsu je kolísavý bolestivý útvar (možný absces) nebo se objeví červené pruhy směrem do podpaží.

## Čemu se vyhnout

- **Nepřerušovat kojení** — nejrychlejší cesta k abscesu.
- **Netlačit a nehnětat** ztvrdlé místo silou.
- Nepoužívat těsné podprsenky s kosticí a nespat na břiše.
- Nespoléhat na to, že to do rána přejde.

## Prevence

Nejčastější spouštěče jsou **vynechané krmení, mělké přisátí, tlak (kostice, popruh tašky, spaní na břiše), únava a stres**. Když se ucpané vývody opakují, má smysl konzultace s laktační poradkyní — obvykle se najde konkrétní příčina.

> Tento text nenahrazuje vyšetření. Horečka v šestinedělí má vždy patřit lékaři, i když si myslíte, že víte, odkud je.`,
    minutes: 6,
    phases: ['postpartum', 'baby_first_year', 'coming_home'],
    modifiers: ['breastfeeding'],
    topics: ['kojeni', 'sestinedeli'],
    level: 'essential',
    hero: 'blush',
    reviewedBy: 'Odborně garantováno – laktační poradenství',
    publishedOn: '2026-06-29',
    boost: 0.9,
  },
  {
    id: 'mim-odstrikavani',
    kind: 'article',
    title: 'Odstříkávání: jak vybudovat laktaci, když dítě zatím nesaje',
    excerpt:
      'Pro maminky na NICU je odsávačka jediná cesta ke krmení. Rozhoduje frekvence, ne množství v lahvičce.',
    body: `## Proč to má smysl

Mateřské mléko **snižuje riziko závažných střevních komplikací u nedonošených dětí** a zkracuje pobyt v nemocnici. Proto se na neonatologii tolik mluví o odstříkávání — není to sentiment, je to léčba.

## Kdy začít a jak často

- **Do 1–2 hodin po porodu**, pokud to váš stav dovolí.
- **Osmkrát až dvanáctkrát za 24 hodin**, včetně alespoň jednoho odsátí mezi půlnocí a pátou ráno — v noci je hladina prolaktinu nejvyšší.
- **Frekvence je důležitější než délka.** Kratší a častější poráží dlouhé a vzácné.
- Zpočátku **10–15 minut na prs**, později podle toho, kdy tok ustane, plus dvě minuty navíc.

## Kolik se čeká

První dny **kapky až mililitry** — a je to správně. Množství roste postupně; kolem 10.–14. dne bývá cílem zhruba **750–900 ml za 24 hodin** u jednoho dítěte.

**Nesledujte jednotlivá odsátí.** Sledujte součet za den. Jedno chudší odsátí neznamená nic.

## Co množství reálně zvyšuje

1. **Klokánkování těsně předtím.** Nejúčinnější nástroj, jaký máte.
2. **Fotka nebo video dítěte**, dupačky s jeho vůní — pokud jste na jiném oddělení.
3. **Masáž prsu před odsáváním** a komprese během něj.
4. **Správná velikost nálevky.** Nesprávná velikost bolí a snižuje výtěžnost — nechte si ji zkontrolovat.
5. **Dvojité odsávání** (obě prsa najednou) šetří čas a zvyšuje výtěžnost.
6. **Jídlo, pití, spánek.** Trojkombinace, kterou nemocniční režim ničí jako první.

## Skladování mléka

| Kde | Jak dlouho |
| --- | --- |
| Pokojová teplota (do 25 °C) | 4 hodiny |
| Lednice (4 °C) | 4 dny |
| Mraznička (−18 °C) | 6 měsíců |
| Rozmražené v lednici | 24 hodin, nikdy znovu nemrazit |

Na oddělení platí **přísnější pravidla nemocnice** — vždy se řiďte jimi. Popisujte datum a čas na každou lahvičku.

## Když to nejde

Laktace se buduje a někdy se prostě nerozjede tak, jak potřebujete. Existují dárkyňské banky mateřského mléka a existuje umělá výživa, která je bezpečná.

**To, kolik mléka nadojíte, není měřítko toho, jak dobrá jste matka.** V prostředí, kde je odsátý objem jediné číslo, které můžete ovlivnit, se to zaměňuje velmi snadno.

> O krmení nedonošeného dítěte rozhoduje neonatologický tým. Tento text popisuje, co může matka udělat pro laktaci — ne co se má dítěti podávat.`,
    minutes: 8,
    phases: ['nicu', 'coming_home', 'postpartum'],
    modifiers: ['pumping', 'preterm', 'nicu_stay'],
    topics: ['kojeni', 'nicu', 'nedonosenost'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: 'Odborně garantováno – laktační poradenství',
    publishedOn: '2026-07-02',
  },
  {
    id: 'mim-umela-vyziva',
    kind: 'article',
    title: 'Umělá výživa bez viny: jak vybrat a jak krmit',
    excerpt:
      'Rozhodnutí nekojit nebo dokrmovat je legitimní. Tady je praktická část, kterou vám nikdo neřekne.',
    body: `## Nejdřív to hlavní

Důvodů, proč žena nekojí, je nekonečně a **žádný z nich nemusíte nikomu vysvětlovat** — od zdravotního stavu přes léky, trauma z porodu, návrat do práce až po prosté rozhodnutí. Nakrmené dítě je cíl.

Pokud vám dokrm doporučil lékař kvůli váhovému úbytku nebo dehydrataci, je to léčba, ne prohra.

## Jak vybrat

- **Počáteční (1)** pro děti od narození, **pokračovací (2)** zhruba od 6 měsíců. Složení je regulované, rozdíly mezi značkami jsou menší, než působí reklama.
- **Speciální formule** (antirefluxní, hypoalergenní, pro nedonošené) patří do rukou lékaře, ne do samovolného experimentování.
- **Kravské, kozí ani rostlinné mléko nejsou náhrada** kojenecké výživy v prvním roce.

## Bezpečná příprava

1. **Umýt ruce** a pracovní plochu.
2. **Převařit vodu** a nechat vychladnout na přibližně 70 °C — teplejší voda by zničila část živin, chladnější spolehlivě neusmrtí případné bakterie v prášku.
3. **Nejdřív voda, pak odměrka** zarovnaná, nikdy vrchovatá ani udusaná.
4. **Zamíchat, ochladit pod tekoucí vodou**, teplotu ověřit na zápěstí.
5. **Zbytek po krmení vylít** — nedávat ho k dalšímu použití.
6. Připravenou dávku uchovávat maximálně **2 hodiny** při pokojové teplotě.

Lahve a savičky myjte a **sterilizujte podle doporučení výrobce**, zpravidla prvních šest měsíců.

## Kolik a jak často

Orientačně **150 ml na kilogram hmotnosti za 24 hodin**, rozdělených do 6–8 dávek. Konkrétní množství vždy podle dětského lékaře a podle chuti dítěte — děti nejsou stejné.

**Krmte podle signálů, ne podle stopek.** Otáčení hlavy, otevřená ústa, ruce k puse. Odvrácená hlava a zavřená ústa znamenají dost.

## Krmení, které je i blízkost

- **Kůže na kůži** funguje i u lahve.
- **Střídejte strany**, jako by se kojilo — kvůli vývoji zraku a symetrii.
- **Poloha polovzpřímená**, ne vleže naplocho, kvůli riziku zatékání do středouší.
- **Krmit má i partner.** Je to jedna z mála věcí, kde se dá rovnoměrně vystřídat.

## Kombinované krmení

Jde to a je to běžné. Počítejte s tím, že **každé nahrazené kojení sníží tvorbu mléka**, takže pokud chcete laktaci udržet, doplňte odsávání v čase nahrazeného krmení.

## Kdy volat lékaře

- dítě **nepřibírá** nebo hubne,
- **méně než 6 pomočených plenek** denně po prvním týdnu,
- **opakované silné zvracení** po krmení, ne jen ublinknutí,
- krev ve stolici, výrazně nafouklé břicho, netečnost,
- podezření na alergii — vyrážka, průjem, dušnost.

> Výběr formule a množství patří dětskému lékaři. Tento text popisuje bezpečnou přípravu a praktický průběh, ne konkrétní doporučení pro vaše dítě.`,
    minutes: 8,
    phases: ['postpartum', 'baby_first_year', 'coming_home'],
    modifiers: ['formula_feeding', 'combination_feeding'],
    topics: ['umela_vyziva', 'psychika'],
    level: 'essential',
    hero: 'sand',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-05',
  },
]

const babyYear: ContentItem[] = [
  {
    id: 'mim-spanek-novorozence',
    kind: 'article',
    title: 'Spánek novorozence: proč se budí a co s tím jde dělat',
    excerpt:
      'Ne, není rozmazlené. Novorozenecký spánek má jinou architekturu než dospělý a to buzení má funkci.',
    body: `## Jak vypadá spánek v prvních měsících

Novorozenec spí **14–17 hodin za 24 hodin**, ale rozdělených do úseků po 2–4 hodinách. Nemá vyvinutý cirkadiánní rytmus — ten se rozjíždí zhruba **od 6.–8. týdne** s produkcí melatoninu.

Podíl aktivního (lehkého) spánku je u novorozence **výrazně vyšší** než u dospělého. Proto se hýbe, mračí, popofrkává a probouzí. Je to ochrana: děti, které se snadno probudí, mají nižší riziko syndromu náhlého úmrtí.

## Co se dá reálně ovlivnit

**Rozdíl mezi dnem a nocí.** Ve dne světlo a běžný hluk, v noci šero a ticho, minimum mluvení při krmení. Funguje to zhruba od šestého týdne.

**Bdělé intervaly.** Novorozenec vydrží vzhůru **45–60 minut**, ve třech měsících kolem 90 minut. Přetažené dítě usíná hůř, ne líp.

**Rituál.** Pět minut, stále stejné pořadí. Přebalit, ztlumit, zabalit, píseň. Signál je důležitější než obsah.

**Bílý šum, zavinutí, houpání.** Napodobují prostředí dělohy. Zavinutí se ukončuje, jakmile se dítě začne přetáčet.

## Bezpečný spánek

- **Na zádech**, na pevné matraci, ve vlastní posteli.
- **V ložnici rodičů prvních 6 měsíců** — snižuje riziko SIDS.
- **Bez polštáře, peřiny, mantinelů a hraček** v postýlce.
- **Nepřehřívat.** Teplota v místnosti kolem 18–20 °C, spací pytel místo přikrývky.
- **Nekouřit** v domácnosti.
- **Nespat s dítětem na pohovce nebo v křesle** — to je nejrizikovější varianta ze všech.

## Co je normální a děsí to skoro každého

- **Nepravidelné dýchání** s pauzami do 5 sekund u novorozence.
- **Sténání, kňourání a grimasy** v lehkém spánku — dítě nespí špatně, jen se to tak jeví.
- **Probouzení po 45 minutách** — délka jednoho spánkového cyklu.
- **Časté buzení kolem 4. měsíce**, když spánek dozrává do dospělé architektury.

## Když jste vyčerpaná

Spánková deprivace je v prvních měsících nevyhnutelná, ale dá se rozdělit. **Střídejte se v noci i při kojení** — přebalit, přinést a uspat může partner. Jedna souvislá čtyřhodinová část za noc dělá měřitelný rozdíl.

Spánkové poradenství s tréninkem samostatného usínání se doporučuje **až po půl roce** a je to volba, ne povinnost.

## Kdy k lékaři

- dýchací pauzy **delší než 20 sekund**, promodrávání, výrazné zatahování mezižebří,
- **hlasité chrápání nebo dušení** ve spánku,
- dítě je **nezvykle netečné a špatně probuditelné**,
- **nepřibírá** navzdory krmení.

> U nedonošených dětí se spánek i bdělé intervaly řídí korigovaným věkem. Doporučení k bezpečnému spánku platí stejně, případné odchylky určuje pediatr.`,
    minutes: 8,
    phases: ['postpartum', 'baby_first_year', 'coming_home'],
    babyWeeks: [0, 26],
    topics: ['spanek', 'vyvoj', 'zdravi_ditete'],
    level: 'essential',
    hero: 'dusk',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-08',
    boost: 0.9,
  },
  {
    id: 'mim-plac-a-koliky',
    kind: 'article',
    title: 'Pláč, koliky a období, kdy se toho nedá moc udělat',
    excerpt:
      'Pláč vrcholí kolem šestého týdne a pak sám klesá. To není útěcha — to je informace, která pomáhá vydržet.',
    body: `## Křivka pláče

Novorozenecký pláč **narůstá zhruba od druhého týdne, vrcholí kolem 6.–8. týdne a od třetího měsíce klesá**. Děje se to u dětí po celém světě bez ohledu na to, jak se o ně pečuje.

Nejvíc pláče bývá **odpoledne a večer**. Není to vaší únavou ani večeří.

## Co bývá za pláčem

Projděte pořadí: **hlad → plena → teplota (přehřátí častěji než zima) → potřeba blízkosti → přetažení → bolest**.

Přetažené dítě pláče paradoxně víc a hůř usíná. Když se pláč objevuje po delší době vzhůru, zkuste ho uspat dřív, ne zabavit.

## Koliky

Definují se jako pláč **víc než 3 hodiny denně, víc než 3 dny v týdnu, déle než 3 týdny** u jinak prospívajícího dítěte.

**Co má doloženou účinnost:** probiotikum *Lactobacillus reuteri* u kojených dětí (po domluvě s pediatrem), nošení a kontakt, u části dětí vyloučení bílkoviny kravského mléka ze stravy matky — vždy **jen po dohodě s lékařem**, ne preventivně.

**Co obvykle nefunguje:** plošné vysazování zeleniny a luštěnin z jídelníčku matky, časté střídání formulí, čaje s cukrem.

## Pět věcí, které pomáhají hned

1. **Zavinutí** — pevné, ale s volnýma nohama.
2. **Poloha na boku nebo na břiše v náručí** (jen bdělé a pod dohledem).
3. **Bílý šum** hlasitější, než čekáte — má přehlušit pláč.
4. **Houpání** rychlé a s malým rozsahem.
5. **Sání** — prs, prst nebo dudlík.

## O vás

Pláč, který nejde utišit, je jedna z nejtěžších věcí v rodičovství a **spouští vztek i u lidí, kteří nikdy nekřičeli**.

Když už nemůžete: **položte dítě do postýlky na záda, odejděte z místnosti a dejte si pár minut.** Dítě, které chvíli pláče v bezpečí, je v pořádku. Zatřesené dítě není — syndrom třeseného dítěte způsobí nevratné poškození mozku během vteřin.

Zavolejte někomu. Tenhle bod není fráze, patří do plánu.

## Kdy volat lékaře

- pláč je **náhle jiný — vysoký, ječivý, nepřerušitelný**,
- dítě je mezi epizodami **netečné, bledé nebo špatně probuditelné**,
- **horečka**, zvracení, krev ve stolici,
- **nafouklé tvrdé břicho**, dítě přestalo přibírat,
- v tříslech nebo pupku je **nová bulka**,
- pláč začal po pádu nebo úrazu.

> Tento text popisuje běžný pláč zdravého dítěte. Jakákoliv náhlá změna charakteru pláče patří k dětskému lékaři.`,
    minutes: 7,
    phases: ['postpartum', 'baby_first_year', 'coming_home'],
    babyWeeks: [1, 20],
    modifiers: ['colic'],
    topics: ['psychika', 'zdravi_ditete', 'spanek'],
    level: 'essential',
    hero: 'blush',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-11',
  },
  {
    id: 'mim-reflux',
    kind: 'article',
    title: 'Ublinkávání a reflux: kdy je to normální a kdy ne',
    excerpt:
      'Skoro každé miminko ublinkává. Rozdíl mezi „šťastným ublinkávačem“ a refluxní nemocí je v prospívání, ne v množství na tričku.',
    body: `## Proč k tomu dochází

Svěrač mezi jícnem a žaludkem je v prvních měsících nezralý, dítě leží a přijímá jen tekutou stravu. **Ublinkávání je u kojenců fyziologické** — vrcholí kolem 4. měsíce a s posazováním a příkrmy mizí, u většiny dětí do roka.

## Kdy nejde o nemoc

Dítě **prospívá, přibírá, je spokojené** a po ublinknutí se chová normálně. Tomu se říká „šťastný ublinkávač". Množství vypadá dramaticky — lžíce mléka udělá na dece velkou skvrnu.

Tady se **neléčí dítě, ale prádlo**.

## Kdy jde o refluxní nemoc

Podezření vzniká, když se k ublinkávání přidá:

- **neprospívání nebo hubnutí**,
- **odmítání jídla**, prohýbání do oblouku a pláč při krmení,
- **opakovaný neklid a bolestivé grimasy** po krmení,
- **kašel, chrapot, opakované dýchací potíže**,
- **zvracení proudem** (nikoliv ublinknutí), zvláště po každém krmení,
- **krev nebo zelené zbarvení** ve zvratcích,
- **výrazné poruchy spánku** spojené s krmením.

To všechno patří k dětskému lékaři.

## Co pomáhá v běžné praxi

1. **Menší dávky častěji** — přeplněný žaludek se vrací snáz.
2. **Krmení v polovzpřímené poloze** a odříhnutí během i po krmení.
3. **Dvacet až třicet minut ve vzpřímené poloze** po jídle. Ne v autosedačce — ta stlačuje bříško.
4. **Kontrola přisátí** nebo velikosti dírky v savičce; polykaný vzduch situaci zhoršuje.
5. **U kojených dětí** může pediatr zvážit vyloučení bílkoviny kravského mléka ze stravy matky na 2–4 týdny.
6. **Antirefluxní formule nebo léky** jsou možnost, o které rozhoduje výhradně lékař.

## Co dělat nikdy

- **Nezvedat matraci a nepodkládat postýlku.** Nakloněná plocha zvyšuje riziko sklouznutí do nebezpečné polohy.
- **Nenechávat spát na břiše** kvůli refluxu — riziko SIDS převáží.
- **Nezahušťovat mléko** bez doporučení lékaře.

## Kdy volat hned

- **zvracení proudem** opakovaně, zvlášť u dítěte do 3 měsíců (může jít o zúžení vrátníku),
- **zelené nebo krvavé zvratky**,
- **známky dehydratace** — málo plenek, suchá ústa, vpadlá fontanela, netečnost,
- **dušení, promodrání** při krmení.

> Reflux se hodnotí podle prospívání a celkového stavu, ne podle množství. Diagnózu i léčbu určuje dětský lékař.`,
    minutes: 6,
    phases: ['baby_first_year', 'postpartum', 'coming_home'],
    babyWeeks: [0, 52],
    modifiers: ['reflux'],
    topics: ['zdravi_ditete', 'vyvoj'],
    level: 'deep',
    hero: 'sage',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-14',
  },
  {
    id: 'mim-korigovany-vek',
    kind: 'article',
    title: 'Korigovaný věk: jak se počítá a do kdy se podle něj hodnotí',
    excerpt:
      'U nedonošeného dítěte se všechno posuzuje podle termínu porodu, ne podle data narození. Bez toho vychází každé srovnání špatně.',
    body: `## Jak se počítá

**Korigovaný věk = kalendářní věk − počet týdnů, o které se dítě narodilo dřív.**

Příklad: dítě narozené ve 29. týdnu má náskok 11 týdnů před termínem. Ve čtyřech měsících kalendářního věku (17 týdnů) má korigovaný věk **6 týdnů**.

Prakticky to znamená, že u něj čekáte první úsměv, otáčení i sezení podle šestitýdenního dítěte — protože jím vývojově je.

## Proč to není alibismus

Nedonošené dítě strávilo mimo dělohu čas, který mělo trávit v ní. Dozrávání mozku běží podle biologického rozvrhu, ne podle kalendáře. **Srovnávat ho s vrstevníky narozenými v termínu je jako srovnávat dvě různě staré děti.**

## Do kdy se koriguje

Obvykle **do dvou let**. U dětí narozených před 28. týdnem někdy déle. Rozdíly se přirozeně stírají — čím starší dítě, tím menší podíl tvoří ty týdny navíc.

Korekce se používá u **vývojových milníků, růstových grafů i zavádění příkrmů**. **Očkování se naopak řídí kalendářním věkem** — imunitní systém dozrává jinak. Právě tenhle rozdíl mate rodiče nejčastěji.

## Co pomáhá v běžném životě

- **Používejte korigovaný věk, když někdo srovnává.** „Vývojově jsou jí čtyři měsíce" ukončí většinu nešikovných poznámek.
- **Grafy růstu** pro nedonošené existují — ptejte se, do jakého se dítě zakresluje.
- **Sledování ve specializované poradně** bývá u nedonošených dětí standardem, stejně jako oční a sluchové kontroly.
- **Vývoj v tomhle věku nejde po přímce.** Týden se neděje nic a pak přijdou tři věci najednou.

## Kdy se ptát

Ozvěte se pediatrovi nebo do vývojové poradny, když **korigovaně** platí:

- ve 3 měsících neudrží hlavičku ve vzpřímené poloze,
- v 6 měsících se nepřetáčí a nesahá po předmětech,
- v 9 měsících nesedí bez opory,
- kdykoliv **ztratí dovednost, kterou už měla**,
- výrazně **asymetrický pohyb** — používá jen jednu stranu,
- trvale **zvýšené nebo naopak velmi nízké svalové napětí**.

Aplikace přepne na korigovaný věk sama, jakmile v profilu vyplníte gestační týden při porodu.

> Vývoj nedonošených dětí sleduje pediatr a specializovaná poradna. Tento text vysvětluje princip, nenahrazuje odborné hodnocení.`,
    minutes: 6,
    phases: ['baby_first_year', 'coming_home', 'toddler'],
    modifiers: ['preterm'],
    topics: ['nedonosenost', 'vyvoj', 'zdravi_ditete'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: 'Odborně garantováno – neonatologie',
    publishedOn: '2026-07-17',
    boost: 0.9,
  },
  {
    id: 'mim-navrat-domu-po-nicu',
    kind: 'article',
    title: 'První týden doma po NICU: úleva a panika v jednom',
    excerpt:
      'Doma nikdo nepípá. Většina rodičů popisuje první noc jako nejtěžší z celého pobytu — a druhý týden už jako lepší.',
    body: `## Co se stane s hlavou

Po týdnech nebo měsících, kdy hodnoty hlídal monitor a v místnosti byla vždycky sestra, přijedete domů do ticha. **Vypadne kontrolní vrstva, na kterou jste si zvykla.**

Skoro každý rodič první noc nespí a poslouchá dech. Skoro každý druhý den volá na oddělení. Obojí je běžné a obojí do týdne odezní.

## Praktický plán na první dny

1. **Napište si režim krmení a léků na papír** a pověste ho na lednici. Únava dělá s pamětí divy.
2. **Termíny si zapište hned** — pediatr, oční kontrola, sluch, neurologie, vývojová poradna, případně rehabilitace.
3. **Omezte návštěvy.** Nedonošené dítě je zvlášť zranitelné vůči respiračním infekcím; první týdny mají být tiché.
4. **Domluvte si střídání v noci**, i když kojíte nebo odstříkáváte.
5. **Uložte si kontakt na oddělení.** Většina pracovišť říká „volejte kdykoliv" a myslí to vážně.

## Ochrana před infekcemi

- Mytí rukou před každým kontaktem — pro všechny bez výjimky.
- Žádné návštěvy s rýmou, kašlem nebo teplotou.
- Nekouřit v domácnosti ani na balkoně a nechodit k dítěti v oblečení prosyceném kouřem.
- Zeptejte se pediatra na **preventivní ochranu proti RSV** — u nedonošených dětí bývá indikovaná.
- Očkování rodiny (chřipka, černý kašel) chrání dítě, které samo ještě očkované není.

## Krmení doma

Přechod ze sondy nebo lahve k prsu bývá postupný a **může trvat týdny**. Sledujte plenky a přírůstky, ne jednotlivé krmení. Udržujte odstříkávání, dokud se dítě nenaučí sát efektivně.

## Kdy volat lékaře

- **teplota nad 38 °C nebo pod 36 °C** — u nedonošeného dítěte vždy hned,
- **zrychlené nebo namáhavé dýchání**, zatahování mezižebří, chrčení, promodrání,
- **odmítání jídla**, výrazně méně plenek, netečnost,
- **opakované zvracení**, krev ve stolici, nafouklé bříško,
- cokoliv, co je **jiné než včera** a nedokážete to vysvětlit.

Zbytečné zavolání není zbytečné.

## A ještě jedna věc

Po propuštění často přijde propad — dokud jste musela fungovat, fungovala jste. **Až se to uklidní, přijde na řadu všechno, co jste odložila.** Je to očekávatelné, ne selhání. Když se to nelepší, patří to psychologovi; na většině perinatologických center je součástí týmu a zůstává dostupný i po propuštění.

> Konkrétní doporučení k péči, krmení a kontrolám najdete v propouštěcí zprávě. Ta má vždycky přednost před obecným textem.`,
    minutes: 8,
    phases: ['coming_home', 'baby_first_year'],
    modifiers: ['preterm', 'nicu_stay'],
    topics: ['nedonosenost', 'nicu', 'zdravi_ditete', 'psychika'],
    level: 'essential',
    hero: 'dawn',
    reviewedBy: 'Odborně garantováno – neonatologie',
    publishedOn: '2026-07-20',
    boost: 0.9,
  },
  {
    id: 'mim-vyvoj-prvni-rok',
    kind: 'article',
    title: 'Vývojové milníky prvního roku — a co dělat, když nesedí',
    excerpt:
      'Milníky jsou rozmezí, ne termíny. Užitečné jsou hlavně proto, aby bylo poznat, kdy se má člověk zeptat.',
    body: `## Jak s milníky zacházet

Uvedené věky jsou **orientační rozmezí**, ve kterých většina dětí dovednost zvládne. Rozptyl je velký a zdravé děti se v pořadí liší.

**U nedonošených dětí počítejte korigovaný věk.**

## 0–3 měsíce

- Udrží hlavičku, když leží na bříšku, a postupně ji zvedá výš.
- Sleduje obličej a předmět očima, otáčí se za zvukem.
- **Sociální úsměv** kolem 6.–8. týdne.
- Rozvíjí broukání a různé typy pláče.

## 4–6 měsíců

- **Přetáčí se** z bříška na záda a zpět.
- Cíleně sahá po předmětech a dává si je do úst.
- Sedí s oporou, drží hlavu jistě.
- Směje se nahlas, žvatlá slabiky.
- Poznává známé lidi.

## 7–9 měsíců

- **Sedí bez opory.**
- Přendává předmět z ruky do ruky, začíná klešťový úchop.
- Leze nebo se posouvá (některé děti lezení přeskočí).
- Reaguje na své jméno, žvatlá „ba-ba", „ma-ma" bez významu.
- Objevuje se **separační úzkost** — vývojový krok, ne rozmazlenost.

## 10–12 měsíců

- **Postaví se u nábytku**, chodí kolem něj, někdy první kroky.
- Ukazuje prstem, mává, tleská, podává předměty.
- Rozumí jednoduchému pokynu s gestem.
- První slova s významem kolem roku — s velkým rozptylem.
- Nají se rukou, pije z hrnečku s pomocí.

## Kdy se zeptat pediatra

- ve **3 měsících** neudrží hlavičku ani na okamžik,
- ve **6 měsících** se nepřetáčí a nesahá po hračkách,
- v **9 měsících** nesedí bez opory,
- v **12 měsících** se nepostaví u nábytku, neukazuje, nereaguje na jméno,
- **ztratí dovednost**, kterou už uměla,
- používá **jen jednu stranu těla**,
- **nenavazuje oční kontakt** nebo nereaguje na hlas.

Ani jeden z těch bodů není diagnóza. Je to důvod se zeptat — a čím dřív, tím účinnější bývá případná rehabilitace nebo raná péče.

## Co vývoji prospívá nejvíc

**Čas na bříšku** ve chvílích, kdy je dítě vzhůru a pod dohledem. **Mluvení a popisování** toho, co děláte. **Reagování na signály.** A méně vybavení, než slibuje reklama — chodítka vývoj chůze nepodporují a nedoporučují se.

> Vývoj hodnotí dětský lékař v pravidelných prohlídkách. Tento přehled slouží k orientaci, ne k hodnocení vašeho dítěte.`,
    minutes: 8,
    phases: ['baby_first_year', 'toddler'],
    babyWeeks: [0, 52],
    topics: ['vyvoj', 'zdravi_ditete'],
    level: 'essential',
    hero: 'sage',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-23',
  },
  {
    id: 'mim-prikrmy',
    kind: 'article',
    title: 'Start příkrmů: kdy, čím a jak (bez tabulek na minuty)',
    excerpt:
      'První rok je mléko hlavní jídlo. Příkrmy jsou o učení — chutí, konzistencí a jedení jako takového.',
    body: `## Kdy začít

Doporučuje se **kolem šestého měsíce**, ne dřív než ve 4. měsíci dokončeném. U nedonošených dětí se řídí **korigovaným věkem** a rozhoduje pediatr.

Znaky připravenosti (musí být splněny všechny):

- **sedí s minimální oporou a drží hlavu**,
- **vyhasl vysunovací reflex** jazyka,
- **zajímá se o jídlo** — sleduje, sahá, otevírá pusu,
- dokáže **jídlo posunout v ústech a polknout**.

## Čím začít

Na pořadí příliš nezáleží. Praktické je začít **zeleninou** (mrkev, dýně, brokolice, cuketa), pak přidat **ovoce**, **obiloviny bez cukru** a brzy **maso a vaječný žloutek** kvůli železu — zásoby z těhotenství se kolem půl roku vyčerpávají.

**Nový potravinu zavádějte samostatně** a pár dní ji opakujte — snáz se pozná případná reakce.

## Alergeny

Odkládání zavedení alergenů riziko alergie **nesnižuje**. Vejce, ryby, arašídy a lepek se dnes doporučuje zavádět v běžném období příkrmů, v bezpečné formě (nikdy celé ořechy — riziko vdechnutí).

Pokud má dítě těžký ekzém nebo už prokázanou alergii, **postup konzultujte s lékařem předem**.

## Kolik toho má sníst

Zpočátku lžičku nebo dvě. Cílem není nasytit, ale naučit. **Do roka je mléko hlavní zdroj výživy** a příkrmy ho postupně doplňují.

Pravidlo, které šetří nervy: **rodič rozhoduje co, kdy a jak; dítě rozhoduje kolik a jestli.**

## Metody

**Klasická (kaše lžičkou)** i **BLW (dítě jí samo kousky)** jsou obě v pořádku a dají se kombinovat. U BLW dávejte kousky velikosti prstu, měkké, a **dítě musí sedět vzpřímeně a nikdy nesmí jíst bez dohledu**.

Naučte se rozdíl mezi **dávením** (hlučné, dítě je červené, samo si pomůže — normální součást učení) a **dušením** (tiché, dítě nemůže dýchat, bledne — okamžitá první pomoc a volat 155).

## Čemu se v prvním roce vyhnout

- **med** (riziko botulismu),
- **sůl a cukr**,
- **kravské mléko jako nápoj** (do jídla v malém množství lze),
- **celé ořechy, hroznové víno vcelku, tvrdá syrová zelenina**,
- neředěné džusy a slazené nápoje.

## Kdy se zeptat

- dítě **odmítá jakoukoliv pevnou stravu** i po několika týdnech pokusů,
- **dáví se opakovaně** i u hladké konzistence,
- po jídle má **vyrážku, průjem, zvracení nebo otok**,
- **nepřibírá**.

> Zavádění příkrmů je individuální, u nedonošených a u dětí s alergiemi obzvlášť. Konkrétní plán patří vašemu pediatrovi.`,
    minutes: 8,
    phases: ['baby_first_year'],
    babyWeeks: [20, 52],
    topics: ['prikrmy', 'zdravi_ditete', 'strava'],
    level: 'essential',
    hero: 'champagne',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-24',
  },
  {
    id: 'mim-horecka-kdy-k-lekari',
    kind: 'article',
    title: 'První nemoci a horečka: kdy k lékaři a kdy volat 155',
    excerpt:
      'U kojence rozhoduje víc než výše teploty jeho věk a celkový stav. Tady je hranice, kterou stojí za to znát nazpaměť.',
    body: `## Jak měřit

U kojenců je spolehlivé měření **v konečníku** (rektálně), případně v podpaží s vědomím, že hodnota bývá nižší. Ušní teploměry jsou u dětí do 6 měsíců méně spolehlivé.

Za horečku se považuje **38 °C a víc**.

## Věk rozhoduje

**Do 3 měsíců: teplota 38 °C a víc = kontakt s lékařem ihned, i v noci.** V tomhle věku jsou příznaky nespecifické a stav se může měnit rychle. Totéž platí pro každé nedonošené dítě v prvních měsících.

**3–6 měsíců:** horečku nechte posoudit lékařem týž den.

**Nad 6 měsíců:** rozhoduje hlavně celkový stav — pije, reaguje, dá se utišit?

## Volejte 155 nebo jeďte na pohotovost hned

- **dítě je netečné, nelze ho probudit** nebo naopak nepřestává ječivě plakat,
- **namáhavé dýchání** — zatahování mezižebří, chrčení, přikyvování hlavou, promodrání,
- **vyrážka, která nebledne** při zatlačení sklenicí,
- **křeče**,
- **ztuhlá šíje**, vyklenutá fontanela,
- **známky dehydratace** — méně než 3 plenky za den, suchá ústa, vpadlé oči, plač bez slz,
- teplota **pod 36 °C** u kojence,
- **opakované zvracení** nebo neschopnost udržet tekutiny.

## Co dělat doma při nekomplikované horečce

1. **Pít, pít, pít.** Kojit častěji a kratší dobu.
2. **Nepřikrývat, nepřetápět.** Lehké oblečení, místnost do 22 °C.
3. **Antipyretikum podle hmotnosti** dítěte a podle doporučení lékaře. Nikdy nepodávat léky s kyselinou acetylsalicylovou.
4. **Nesnižovat teplotu za každou cenu** — cílem je, aby dítěti bylo lépe, ne konkrétní číslo na teploměru.
5. **Sledovat stav, ne teploměr.** Dítě, které při 38,5 °C pije a reaguje, je v lepší situaci než apatické dítě při 37,8 °C.

## Co u kojenců nepoužívat

Zábaly a ochlazování studenou vodou u malých dětí nedoporučujeme — vedou k třesavce, která teplotu zvýší. Kapky na nos, sirupy proti kašli ani bylinné přípravky nepodávejte bez konzultace s pediatrem.

## Zvláštní pravidlo po NICU

U dětí po předčasném porodu a po pobytu na intenzivní péči platí **nižší práh pro zavolání**. To, co u donošeného ročního dítěte znamená „počkáme do rána", tady znamená „zavoláme teď".

> Tento text je orientační. Při jakékoliv pochybnosti volejte dětského lékaře nebo lékařskou pohotovostní službu — a při ohrožení života 155.`,
    minutes: 7,
    phases: ['baby_first_year', 'coming_home', 'toddler'],
    babyWeeks: [0, 52],
    topics: ['zdravi_ditete'],
    level: 'essential',
    hero: 'blush',
    reviewedBy: 'Odborně garantováno – pediatrie',
    publishedOn: '2026-07-25',
    boost: 0.95,
  },
  {
    id: 'mim-vztah-po-porodu',
    kind: 'article',
    title: 'Vztah po porodu: co se změní a co s tím jde dělat',
    excerpt:
      'Spokojenost ve vztahu klesá po narození dítěte u většiny párů. Vědět to předem je půlka řešení.',
    body: `## Co ukazuje realita

Pokles spokojenosti ve vztahu v prvním roce po narození dítěte je **pravidlem, ne výjimkou**. Souvisí s nedostatkem spánku, rozdělením péče a s tím, že spolu poprvé řešíte věci, o kterých jste nikdy nemluvili.

Páry po dlouhé léčbě neplodnosti mají navíc za sebou roky, kdy se všechno točilo kolem termínů a výsledků. **Vztah tehdy často jel na rezervu** a účet přichází až teď.

## Tři konflikty, které přijdou skoro vždycky

**1. Kdo toho dělá víc.** Neřeší se počítáním úkolů, ale rozdělením **odpovědnosti**. Rozdíl mezi „pomůžu ti" a „mám to na starosti" je celý ten spor.

**2. Kdo víc spí.** Užitečnější než dělit noc napůl je zajistit každému **jeden souvislý blok** — čtyři hodiny v kuse dělají víc než šest přerušovaných.

**3. Blízkost a sex.** Únava, hojení, hormonální suchost sliznic a pocit „celý den na mně někdo visí" jsou reálné příčiny, ne odmítnutí partnera.

## Co funguje

- **Deset minut denně bez telefonu a bez tématu dítě.** Zní to málo. Není.
- **Konkrétní žádost místo nálady.** „Vezmi si ji od šesti do osmi" je splnitelné; „nikdy nic neuděláš" není.
- **Poděkovat za věc, která je samozřejmá.** Levné, účinné, funguje oběma směry.
- **Vlastní čas pro oba.** Ne jako odměna, ale jako rozpočtová položka.
- **Nemluvit o výčitkách po půlnoci.** Skoro nic z toho, co se řekne ve tři ráno, není pravda ráno.

## O partnerovi se moc nemluví

Zhruba každý desátý muž zažívá po narození dítěte depresivní obtíže. Riziko výrazně stoupá, pokud jimi trpí i matka. **Projevuje se spíš podrážděností, únikem do práce a uzavřením než smutkem.**

Pokud to poznáváte u sebe nebo u partnera, patří to k odborníkovi. Není to slabost a není to sobectví vůči matce.

## Kdy hledat pomoc

- konflikty se **opakují stále stejně** a nemají řešení,
- jeden z vás se **dlouhodobě uzavírá**,
- **intimita zmizela úplně** a nedá se o ní mluvit,
- objeví se **ponižování, křik před dítětem, kontrola nebo výhrůžky** — tady se nečeká,
- máte pocit, že spolu **jen provozujete domácnost**.

Párová terapie po narození dítěte není známka rozpadu. Nejčastěji je to údržba.

> Text popisuje běžné jevy. Při jakékoliv formě násilí ve vztahu vyhledejte odbornou pomoc — v ohrožení volejte 158.`,
    minutes: 7,
    phases: ['postpartum', 'baby_first_year', 'coming_home'],
    topics: ['vztah', 'partner', 'psychika'],
    level: 'deep',
    hero: 'taupe',
    publishedOn: '2026-07-26',
  },
  {
    id: 'mim-rodicovstvi-po-ivf',
    kind: 'article',
    title: 'Rodičovství po IVF: proč mám pořád strach, když je konečně tady',
    excerpt:
      'Roky léčby naučí tělo být ve střehu. To, že dítě dorazilo, ten poplach automaticky nevypne.',
    body: `## Co se často děje

Ženy po dlouhé léčbě neplodnosti popisují po porodu překvapivě podobné věci:

- **kontrolování dechu** dítěte i několikrát za noc,
- **pocit, že si to musí zasloužit** — únava a stížnost jako by byly zakázané,
- **strach, že si to někdo vezme zpátky**,
- **obtížné navazování** na dítě, které roky existovalo jen jako představa,
- **odcizení od vlastního těla** po letech, kdy bylo hlavně objektem vyšetření,
- **vina vůči embryím, která nezůstala**, nebo vůči těhotenstvím, která skončila.

Nic z toho neznamená, že jste špatná matka. Znamená to, že jste prošla dlouhým obdobím nejistoty a **ostražitost se z těla nevytrácí ze dne na den**.

## Proč to okolí nechápe

Pro okolí příběh skončil narozením. Pro vás začal — a začal s pamětí na všechno, co bylo předtím.

Věty typu **„hlavně že to nakonec vyšlo"** nebo **„už si to konečně užívej"** zavírají téma dřív, než se stihne otevřít. Nemusíte na ně reagovat víc než jednou větou: *„Jsem šťastná a zároveň unavená. Obojí platí."*

## Co pomáhá

**Pojmenovat to nahlas** — partnerovi, kamarádce, komunitě žen se stejnou zkušeností. Nikde jinde to nezní tak samozřejmě.

**Odlišit strach užitečný od zbytečného.** Kontrola dýchání jednou za noc je úleva. Deset kontrol za noc už brání spánku a zaslouží pomoc.

**Nepoměřovat vděčnost.** Nikdo nedluží radost za to, co dostal.

**Napsat dopis.** Sobě zpětně, dítěti, nebo tomu, kdo nezůstal. Pro řadu žen je to první moment, kdy z toho něco spadne.

**Vyhledat psychologa se zkušeností s perinatální péčí**, pokud strach neustupuje, brání spánku nebo běžnému fungování.

## Kdy nečekat

- úzkost nebo smutek trvá **déle než dva týdny** a zhoršuje se,
- máte **vtíravé děsivé představy**, které nejdou zastavit,
- **nespíte ani ve chvílích, kdy můžete**,
- máte pocit, že k dítěti **necítíte nic**,
- objeví se **myšlenky na ublížení sobě nebo dítěti** — v tom případě volejte **116 123** nebo **155** ještě dnes.

> Tento text nenahrazuje odbornou péči. Je tu proto, aby se to, co spousta žen po IVF prožívá potichu, dalo aspoň pojmenovat.`,
    minutes: 7,
    phases: ['postpartum', 'baby_first_year', 'coming_home', 'toddler'],
    topics: ['psychika', 'sebepece'],
    level: 'comfort',
    hero: 'dawn',
    reviewedBy: 'Odborně garantováno – perinatální psychologie',
    publishedOn: '2026-07-27',
    boost: 0.85,
  },
]

const glossary: GlossaryTerm[] = [
  {
    term: 'Kolostrum',
    aliases: ['mlezivo'],
    short: 'První mléko po porodu — husté, nažloutlé a v malém množství.',
    long:
      'Tvoří se už na konci těhotenství a odchází první dva až tři dny po porodu. Obsahuje vysoké množství protilátek, bílkovin a růstových faktorů a působí i jako přirozené projímadlo, které pomáhá odchodu smolky. Množství 5–15 ml na krmení odpovídá velikosti žaludku novorozence — malý objem není známkou nedostatku.',
    topics: ['kojeni', 'sestinedeli'],
  },
  {
    term: 'Očistky',
    aliases: ['lochie'],
    short: 'Poporodní výtok, kterým se hojí plocha po placentě.',
    long:
      'První dny jsou jasně červené a vydatné, postupně přecházejí do hnědé a nakonec do nažloutlé nebo čiré. Obvykle končí do čtyř až šesti týdnů. Krátkodobé zesílení po větší námaze je běžné. Promáčená vložka za hodinu nebo méně, velké sraženiny, zápach nebo teplota jsou důvod okamžitě kontaktovat lékaře.',
    topics: ['sestinedeli'],
  },
  {
    term: 'Korigovaný věk',
    short: 'Věk nedonošeného dítěte přepočítaný na termín porodu.',
    long:
      'Počítá se jako kalendářní věk minus počet týdnů, o které se dítě narodilo dřív. Používá se pro hodnocení vývojových milníků, růstu i zavádění příkrmů, obvykle do dvou let věku. Očkování se naopak řídí kalendářním věkem. Bez korekce vychází každé srovnání s donošenými vrstevníky zkresleně.',
    topics: ['nedonosenost', 'vyvoj'],
  },
  {
    term: 'Diastáza břišních svalů',
    aliases: ['diastáza'],
    short: 'Rozestup přímých břišních svalů ve střední čáře po těhotenství.',
    long:
      'Vzniká tahem rostoucí dělohy na vazivový pruh mezi břišními svaly a v nějaké míře ji má na konci těhotenství většina žen. Po porodu se u většiny během měsíců zmenšuje sama. Pozná se podle valu, který se objeví uprostřed břicha při zvedání hlavy vleže. Cílená fyzioterapie a práce s dechem a pánevním dnem jsou účinnější než klasické posilování břicha, které stav může zhoršit.',
    topics: ['sestinedeli', 'pohyb'],
  },
  {
    term: 'Poporodní blues',
    short: 'Krátké období plačtivosti a přecitlivělosti v prvních dnech po porodu.',
    long:
      'Začíná typicky třetí až pátý den a odeznívá do dvou týdnů. Popisuje ho většina žen. Na rozdíl od poporodní deprese kolísá, střídá se s dobrými chvílemi a schopnost radovat se zůstává zachovaná. Pokud potíže trvají déle než dva týdny nebo se prohlubují, jde o důvod vyhledat pomoc.',
    topics: ['psychika', 'sestinedeli'],
  },
  {
    term: 'Shlukované kojení',
    aliases: ['cluster feeding'],
    short: 'Období, kdy dítě chce k prsu opakovaně po krátkých pauzách.',
    long:
      'Objevuje se nejčastěji večer a v obdobích růstových skoků. Není známkou nedostatku mléka — je to způsob, jakým dítě zvyšuje tvorbu na další dny. Trvá obvykle několik hodin a v prvních týdnech se opakuje. Pomáhá připravit si pití a jídlo na dosah a počítat s tím, že večer bude patřit kojení.',
    topics: ['kojeni'],
  },
  {
    term: 'Klokánkování',
    aliases: ['kangaroo care', 'kontakt kůže na kůži'],
    short: 'Dlouhodobý kontakt kůže na kůži mezi rodičem a dítětem.',
    long:
      'Dítě jen v plence leží svisle na holé hrudi rodiče, přikryté společnou dekou. U nedonošených dětí stabilizuje teplotu, dech i tep, snižuje stres, podporuje laktaci a zlepšuje přírůstky. Doporučuje se v co nejdelších blocích, ideálně hodinu a víc, protože samotný přesun je pro dítě zátěž. Klokánkovat může matka i partner.',
    topics: ['nicu', 'nedonosenost', 'kojeni'],
  },
]

export const pack: ContentPack = {
  items: [...body, ...feeding, ...babyYear],
  glossary,
}
