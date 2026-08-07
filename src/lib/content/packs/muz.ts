import type { ContentItem, ContentPack } from '../types'

/**
 * Muž v IVF.
 *
 * Balík stojí na jednom rámu: muž není „spermie". Léčbu podstupuje pár,
 * i když zákroky nese tělo ženy. Bez toho rámu vznikne obsah, který muže
 * popisuje jako vzorek a ženu nechá samotnou s tím, co se doma děje.
 *
 * Texty jsou dvojího druhu:
 * 1. Psané PRO ŽENU, aby rozuměla tomu, co partner prožívá a proč to není
 *    vidět.
 * 2. Psané tak, aby se daly ukázat PARTNEROVI. Ty mají v perexu větu
 *    „Text pro partnera.", aby bylo poznat, komu se dá odkaz poslat.
 *
 * Obojí vyká. Ukázkové věty v textech jsou schválně v první osobě
 * („potřebuju…", „zavolám…"), protože takhle formulované sdělení
 * v páru funguje líp než pokyn tomu druhému.
 */

const REVIEW = 'Odborně garantováno lékařem reprodukční medicíny.'

const items: ContentItem[] = [
  // --- (A) Vyšetření a laboratoř ---------------------------------------
  {
    id: 'muz-vysetreni-prehled',
    kind: 'article',
    title: 'Vyšetření muže: co se dělá a proč',
    excerpt:
      'Rozbor ejakulátu, hormony, urolog, androlog, genetika: přehled toho, co může být součástí vyšetření a podle čeho se plán skládá.',
    minutes: 7,
    phases: ['diagnostics', 'ivf_prep'],
    topics: ['partner', 'vztah', 'vysledky', 'klinika'],
    level: 'essential',
    hero: 'sky',
    reviewedBy: REVIEW,
    sources: [
      'WHO laboratory manual for the examination and processing of human semen, 6. vydání (2021)',
      'EAU: Guidelines on Sexual and Reproductive Health',
      'ESHRE: doporučené postupy',
    ],
    publishedOn: '2026-08-07',
    boost: 0.85,
    body: `## Vyšetřuje se pár

Na obtížích s otěhotněním se mužský faktor podílí zhruba v polovině případů, buď samostatně, nebo v kombinaci s nálezem u ženy. Přesto se pořád stává, že žena projde několika koly odběrů a zákroků dřív, než někdo požádá partnera o vzorek.

Základní vyšetření u muže bývá rychlé, neinvazivní a v porovnání se zbytkem diagnostiky levné. Nedělá se proto, že by se čekal problém. Dělá se proto, že jeho výsledek mění, co má smysl dělat dál u obou.

## Z čeho se vyšetření obvykle skládá

**Rozbor ejakulátu.** Základ a obvykle první krok. Popisuje jeden vzorek v jeden den, proto se při odchylce zpravidla opakuje.

**Anamnéza a fyzikální vyšetření u urologa nebo androloga.** Lékaře obvykle zajímá:

- operace v tříslech a na varlatech, včetně těch z dětství,
- nesestouplá varlata v dětství a jak se řešila,
- úrazy, záněty varlat nebo nadvarlat, prodělané pohlavně přenosné infekce,
- horečnaté onemocnění v posledních třech měsících,
- užívané léky, doplňky a anabolické steroidy,
- kouření, alkohol, pracovní zátěž teplem nebo chemikáliemi,
- předchozí děti nebo těhotenství, i v jiném vztahu,
- potíže s erekcí nebo ejakulací, pokud jsou.

**Hormonální odběry.** Nejčastěji FSH, LH, testosteron, případně prolaktin nebo hormony štítné žlázy. Neindikují se u každého. Přicházejí na řadu spíš při výrazně sníženém počtu spermií nebo při klinických příznacích.

**Ultrazvuk šourku.** Může upřesnit nález na varlatech a nadvarlatech, hledá se například varikokéla nebo strukturální odchylka.

**Mikrobiologie.** Vyšetření na infekce, pokud na ně nález nebo obtíže ukazují.

**Genetické vyšetření.** Zvažuje se hlavně u velmi nízkého počtu spermií nebo při jejich úplné nepřítomnosti ve vzorku. Patří sem karyotyp, vyšetření mikrodelecí na Y chromozomu a v určitých situacích vyšetření genu CFTR. Indikaci určuje lékař a interpretace patří klinickému genetikovi.

**Test fragmentace DNA spermií.** Doplňkové vyšetření. Indikace i výklad se mezi pracovišti liší, není součástí základního postupu všude.

**Žádné z těchto vyšetření není povinnou součástí každého plánu.** Rozsah skládá lékař podle konkrétní situace páru.

## Podle čeho se rozhoduje, co dál

Prvním rozcestníkem bývá rozbor ejakulátu. Pokud je nález opakovaně v očekávaném rozmezí, další mužská vyšetření se často nedoplňují a diagnostika pokračuje jinde. Pokud nález odpovídá výraznější odchylce, obvykle následuje urologické nebo andrologické vyšetření, které hledá vysvětlení a posuzuje, jestli je něco léčitelné.

Důležité je pořadí: nejdřív se hledá příčina, teprve pak se volí metoda oplodnění. Část nálezů má konkrétní řešení, u části se příčina nenajde a postupuje se podle toho, co je v laboratoři technicky proveditelné.

## Co si vzít k první návštěvě

1. Výsledky předchozích vyšetření, i staré. Klidně i papír z doby před deseti lety.
2. Seznam užívaných léků a doplňků, včetně názvů a dávek.
3. Informaci o operacích a nemocech, ideálně s roky.
4. Poznámku o horečce nebo těžší nemoci za poslední tři měsíce.
5. Otázky napsané předem. V ordinaci se na ně nevzpomíná.

## Na co se zeptat

- Které vyšetření je v naší situaci potřeba a proč zrovna to?
- Budeme rozbor opakovat, a s jakým odstupem?
- Mění tenhle nález doporučenou metodu léčby?
- Je něco z toho, co se našlo, léčitelné, a jak dlouho taková léčba trvá?
- Má smysl objednat se k urologovi teď, nebo až po opakovaném rozboru?

> Text popisuje obvyklou praxi a nenahrazuje konzultaci. Rozsah i pořadí vyšetření se mezi pracovišti liší, vždy se řiďte pokyny své kliniky.`,
  },
  {
    id: 'muz-spermiogram-hodnoty',
    kind: 'article',
    title: 'Spermiogram: co znamenají základní hodnoty',
    excerpt:
      'Text pro partnera. Koncentrace, pohyblivost, morfologie a objem: co se v laboratoři měří, proč hodnoty kolísají a proč jeden výsledek nic neuzavírá.',
    minutes: 7,
    phases: ['diagnostics', 'ivf_prep'],
    topics: ['partner', 'vztah', 'vysledky'],
    level: 'essential',
    hero: 'taupe',
    reviewedBy: REVIEW,
    sources: [
      'WHO laboratory manual for the examination and processing of human semen, 6. vydání (2021)',
      'EAU: Guidelines on Sexual and Reproductive Health',
    ],
    publishedOn: '2026-08-07',
    boost: 0.8,
    body: `## Co je na papíře

Rozbor ejakulátu popisuje jeden vzorek v jeden den. Laboratoř obvykle uvádí:

- **Objem.** Kolik mililitrů vzorek měl. Nízký objem může znamenat i to, že se část vzorku nedostala do nádobky, protože první část ejakulátu obsahuje nejvíc spermií.
- **Koncentrace.** Počet spermií v jednom mililitru. Vedle toho se počítá celkový počet ve vzorku, který bere v úvahu objem.
- **Pohyblivost.** Kolik spermií se pohybuje a jak. Rozlišuje se pohyb dopředu, pohyb na místě a nepohyblivé buňky.
- **Morfologie.** Podíl spermií s typickým tvarem hlavičky, krčku a bičíku. Hodnotí se přísnými kritérii, proto bývá podíl ideálně tvarovaných buněk nízký i u mužů, kterým se počalo dítě.
- **Vitalita.** Podíl živých buněk. Dává smysl hlavně tam, kde je pohyblivost velmi nízká.
- **Doplňkové údaje.** pH, doba zkapalnění, přítomnost bílých krvinek nebo shluků.

## Proč tady nenajdete čísla

V tomhle textu záměrně nejsou žádné hodnoty ani hranice. Není to opomenutí.

- Referenční hodnoty vycházejí z toho, jak vypadaly vzorky velké skupiny mužů, kterým se počalo dítě v určitém čase. Popisují rozložení, nejsou to hranice mezi plodností a neplodností.
- Metody a hodnocení se mezi laboratořemi liší. Dvě čísla ze dvou pracovišť nejsou přímo srovnatelná.
- Žádný parametr se nečte samostatně. Čte se s ostatními, s vyšetřením, s anamnézou a s nálezem u partnerky.
- Hodnota pod hranicí neznamená, že k početí nemůže dojít. Hodnota nad hranicí nic nezaručuje.

**Výklad výsledku patří lékaři, který zná celý obraz.** Aplikace vám pomůže rozumět tomu, co se měřilo, ale neřekne vám, jestli je vaše číslo dobré.

## Proč jeden výsledek nestačí

Hodnoty ve vzorcích od téhož muže kolísají, někdy výrazně, i bez jakékoli změny zdravotního stavu. Vliv na jeden konkrétní vzorek může mít:

- délka pohlavní abstinence před odběrem,
- horečnaté onemocnění v posledních zhruba třech měsících,
- nedávná operace, úraz nebo léčba,
- to, jestli se odevzdal celý vzorek,
- doba a teplota mezi odběrem a zpracováním, pokud se odebíralo mimo laboratoř.

Proto se při odchylce rozbor obvykle opakuje s odstupem několika týdnů. **Rozhodnutí se nedělají podle jednoho papíru.**

## Slova, která na výsledku bývají

Latinské názvy popisují nález, nediagnostikují příčinu a neříkají nic o tom, co se dá dělat dál:

- **oligozoospermie**: snížený počet spermií,
- **asthenozoospermie**: snížená pohyblivost,
- **teratozoospermie**: vyšší podíl atypických tvarů,
- kombinace předchozích se zapisuje složeninou, například oligoastenoteratozoospermie,
- **kryptozoospermie**: spermie se najdou až po zpracování vzorku, v běžném rozboru ne,
- **azoospermie**: ve vzorku se spermie nenašly. I tehdy existují další kroky a patří do rukou androloga.

## Na co se zeptat lékaře

1. Je tenhle nález důvod rozbor opakovat, a kdy?
2. Ukazuje na něco, co má smysl dál vyšetřovat?
3. Mění to doporučenou metodu, tedy třeba volbu mezi klasickým oplodněním a ICSI?
4. Je v tom něco, co se dá ovlivnit, a v jakém časovém horizontu?
5. Jak se náš výsledek liší od minulého a je ten rozdíl podstatný?

> Referenční meze se liší podle laboratoře a metody. Tento text nenahrazuje odborné posouzení výsledku.`,
  },
  {
    id: 'muz-tri-mesice',
    kind: 'article',
    title: 'Proč trvá zhruba tři měsíce, než se změna projeví',
    excerpt:
      'Text pro partnera. Jak sperma vzniká a proč má smysl měnit režim s předstihem, ne týden před odběrem.',
    minutes: 5,
    phases: ['diagnostics', 'ivf_prep'],
    topics: ['partner', 'vztah', 'sebepece'],
    level: 'deep',
    hero: 'sage',
    reviewedBy: REVIEW,
    sources: [
      'WHO laboratory manual for the examination and processing of human semen, 6. vydání (2021)',
      'EAU: Guidelines on Sexual and Reproductive Health',
    ],
    publishedOn: '2026-08-07',
    body: `## Jak sperma vzniká

Na rozdíl od vajíček, která má žena od narození a jejich počet se v čase jen snižuje, se spermie tvoří průběžně po celý dospělý život. Ve varlatech běží nepřetržitý cyklus, ve kterém se z výchozích buněk dělením a přestavbou stávají zralé spermie. Tahle část trvá zhruba dva měsíce.

Hotové buňky potom putují do nadvarlete. Tam dozrávají a získávají schopnost pohybu, což zabere obvykle další zhruba dva týdny. Teprve pak jsou schopné oplodnit vajíčko.

Dohromady tedy platí praktické pravidlo: **vzorek, který dnes odevzdáte, vypovídá hlavně o období před dvěma a půl až třemi měsíci.** Není to fotka dnešního dne, je to spíš záznam uplynulého čtvrtletí.

## Co z toho plyne

**Změna režimu se v laboratorním nálezu projeví se zpožděním.** Když přestanete kouřit v pondělí, nemá smysl očekávat jiný výsledek v pátek. Kontrolní rozbor se proto obvykle plánuje s odstupem, nejčastěji několika měsíců. Přesný termín určí lékař.

**Nemoc se projeví později.** Chřipka s vysokou horečkou v březnu se může promítnout do vzorku z června. Proto se na horečnaté onemocnění v posledních třech měsících ptají a proto ho stojí za to hlásit i tehdy, když už jste dávno zdravý.

**Cokoli chcete změnit, změňte s předstihem.** Pokud víte, že IVF cyklus začne za čtyři měsíce, začíná se teď. Týden abstinence od alkoholu před odběrem na výsledku prakticky nic nezmění.

**Naopak: co bylo, to bylo.** Pokud se cyklus blíží a vy jste byl v zimě týden nemocný, nedá se s tím zpětně nic dělat. Má smysl to říct lékaři, ne si to vyčítat.

**Zároveň to není důvod k pasivitě.** Protože tvorba běží pořád dokola, není žádné období, kdy by změna přišla pozdě navždy. Jen se její případný efekt ukáže až v dalším cyklu tvorby, ne v tom, který právě dobíhá.

## Časová osa v praxi

1. **Teď.** Rozhodnutí o změnách v režimu, konzultace o lécích a doplňcích s lékařem.
2. **Za dva až čtyři týdny.** Změny jsou zaběhnuté. V nálezu se ještě nic projevit nemusí.
3. **Za tři měsíce.** Nejdřívější rozumný termín kontrolního rozboru, pokud ho lékař doporučí.
4. **Dál.** Interpretace se dělá porovnáním více vzorků, ne jednoho.

## Čeho se držet, když čas není

Ne každý pár má tři měsíce k dispozici. Cyklus může být naplánovaný na příští měsíc a odkládat ho jen kvůli režimovým změnám obvykle nedává smysl, zvlášť když věk partnerky hraje roli. V takové situaci se laboratoř s nálezem umí vypořádat i tak, mimo jiné metodou ICSI, kdy se do vajíčka zavádí jedna vybraná spermie.

Změny v režimu proto neberte jako podmínku vstupu do cyklu. Jsou to kroky, které mají smysl samy o sobě, a jejich efekt na konkrétní výsledek se nedá slíbit.

> Text popisuje obecné biologické souvislosti. O načasování kontrolního vyšetření i o postupu ve vašem případě rozhoduje lékař.`,
  },
  {
    id: 'muz-kvalita-spermii',
    kind: 'article',
    title: 'Co může ovlivňovat kvalitu spermií',
    excerpt:
      'Text pro partnera. Teplota, kouření, alkohol, váha, spánek, léky a horečka: co se s tím dá reálně dělat a co si od toho neslibovat.',
    minutes: 8,
    phases: ['diagnostics', 'ivf_prep', 'waiting_next_attempt'],
    topics: ['partner', 'vztah', 'strava', 'spanek'],
    level: 'deep',
    hero: 'linen',
    reviewedBy: REVIEW,
    sources: [
      'EAU: Guidelines on Sexual and Reproductive Health',
      'ESHRE: doporučené postupy',
    ],
    publishedOn: '2026-08-07',
    body: `## Nejdřív dvě věci na rovinu

**Žádná z těchto změn není návod, jak dosáhnout těhotenství.** Souvislosti popsané níž vycházejí z toho, co se u větších skupin mužů opakovaně pozoruje. U jednotlivce se efekt nedá předpovědět a u části nálezů nemá režim vliv žádný.

**Druhá věc:** pokud vám nález vyšel jinak, než jste čekal, neznamená to, že jste udělal něco špatně. Velká část odchylek nemá žádnou zjistitelnou příčinu.

## Teplota

Varlata jsou mimo tělo, protože tvorba spermií probíhá při teplotě nižší, než je tělesná. Dlouhodobé zahřívání může nález ovlivnit. Prakticky:

- sauna a dlouhé horké koupele spíš výjimečně než denně,
- vyhřívaná sedačka v autě, hlavně při dlouhých pravidelných jízdách,
- notebook na klíně,
- práce u pece, ve slévárně nebo dlouhé sezení v teple,
- těsné spodní prádlo. Vliv je nejistý, ale změna nic nestojí.

Důkazy jsou tady spíš slabší. Řadíme to nahoru proto, že jde o věci snadno proveditelné, ne proto, že by měly největší efekt.

## Kouření, alkohol a další látky

- **Kouření** včetně zahřívaného tabáku a vapování bývá spojováno s horšími parametry vzorku. Přestat má smysl bez ohledu na plodnost.
- **Alkohol.** Pravidelná vyšší konzumace bývá spojována s horším nálezem. Omezení dává smysl, přesná hranice se stanovit nedá.
- **Konopí a jiné rekreační drogy.** Bývají spojovány se změnami pohyblivosti a počtu.
- **Anabolické steroidy a testosteron zvenčí.** Tohle je zásadní bod. Podávání testosteronu tlumí vlastní tvorbu spermií a může vést až k jejich vymizení ze vzorku. Změna po vysazení může trvat mnoho měsíců a někdy není úplná. Pokud jste kdykoli v životě anabolika užíval, řekněte to lékaři. Nic z toho neřešte sám a nevysazujte předepsanou léčbu bez konzultace.

## Hmotnost, pohyb, strava

Výrazná nadváha bývá spojována s nižšími hodnotami a se změnami v hormonech, výrazná podváha a extrémní vytrvalostní zátěž také. Pravidelný přiměřený pohyb a pestrá strava jsou rozumný cíl. Doplňky stravy s antioxidanty se často doporučují, ale důkazy jsou nejednotné a nejde o léčbu. Pokud je chcete zkusit, proberte to s lékařem, ať nekombinujete zbytečně mnoho přípravků.

## Spánek a stres

Dlouhodobě krátký nebo rozbitý spánek a dlouhotrvající stres bývají spojovány s horšími hodnotami. Zároveň platí, že samotná léčba neplodnosti je stresor, který se odstranit nedá. Cílem tedy není „být v klidu", ale mít v týdnu aspoň něco, co stres snižuje: pohyb, spánkový režim, kontakt s lidmi.

## Nemoc a horečka

Horečnaté onemocnění může nález ovlivnit, a to se zpožděním až kolem tří měsíců. Pokud jste v posledním čtvrtletí prodělal chřipku, covid nebo jinou nemoc s vysokou teplotou, řekněte to při odběru i při konzultaci výsledku.

## Léky a zdravotní stav

Nález může ovlivnit řada léků, například některé přípravky na vysoký tlak, na vypadávání vlasů, na žaludek nebo léky v psychiatrii, dále onkologická léčba a některá chronická onemocnění. **Nevysazujte nic sám.** Vezměte na konzultaci seznam všeho, co užíváte, včetně doplňků, a zeptejte se, jestli je potřeba něco měnit.

## Co s tím prakticky tenhle týden

1. Napsat seznam všech léků a doplňků a vzít ho na kontrolu.
2. Nahlásit nemoc s horečkou za poslední tři měsíce.
3. Vybrat jednu změnu, která je udržitelná několik měsíců, a začít u ní. Ne pět najednou.
4. Domluvit s lékařem, kdy má smysl rozbor zopakovat.

> Text má obecně informativní charakter, netýká se konkrétní diagnózy a nenahrazuje konzultaci s lékařem.`,
  },

  // --- (B) Odběr a laboratorní postupy ---------------------------------
  {
    id: 'muz-odber-vzorku',
    kind: 'article',
    title: 'Odběr vzorku na klinice: jak to probíhá',
    excerpt:
      'Text pro partnera. Abstinence, průběh na místě, možnost odběru doma a co dělat, když to v den D nejde.',
    minutes: 6,
    phases: ['diagnostics', 'ivf_prep', 'retrieval'],
    topics: ['partner', 'vztah', 'klinika', 'psychika'],
    level: 'essential',
    hero: 'champagne',
    reviewedBy: REVIEW,
    sources: ['WHO laboratory manual for the examination and processing of human semen, 6. vydání (2021)'],
    publishedOn: '2026-08-07',
    boost: 0.75,
    body: `## Před odběrem

**Abstinence.** Před odběrem se obvykle doporučuje pohlavní abstinence, nejčastěji dva až pět dní. Přesnou dobu určuje laboratoř a má smysl se jí držet, protože kratší i výrazně delší doba výsledek posouvá. Do abstinence se počítá i samotný ejakulát bez pohlavního styku.

**Hygiena a lubrikanty.** Před odběrem se doporučuje umýt ruce a genitál čistou vodou. Běžné lubrikanty a sliny mohou spermie poškodit, proto se nepoužívají, pokud laboratoř nedodá vlastní schválený přípravek. Kondom z lékárny se také nepoužívá, obsahuje látky, které spermie ničí.

**Co nahlásit.** Horečnaté onemocnění za poslední tři měsíce, léky, které užíváte, a to, jestli část vzorku unikla mimo nádobku.

## Jak to vypadá na místě

Na klinice dostanete sterilní nádobku, kterou popíšete jménem, rodným číslem nebo jiným identifikátorem a časem odběru. Odběr probíhá v samostatné místnosti s uzamykatelnými dveřmi, nejčastěji hned vedle laboratoře. Vybavení se pracoviště od pracoviště liší.

Vzorek se odevzdává do okénka laboratoře nebo na určené místo. **Odevzdejte celý vzorek**, včetně první části. Právě v ní bývá nejvíc spermií, takže její ztráta zkresluje výsledek nejvíc ze všeho. Když se to stane, řekněte to. Není to trapné, je to informace, bez které se výsledek špatně čte.

## Když to nejde

Stává se to a je to častější, než se o tom mluví. Místnost je cizí, čas je daný, venku čeká sestra a doma čeká partnerka po několika dnech injekcí. Tlak, který v takové situaci vznikne, je normální reakce, ne selhání.

Co se dá udělat:

- **Říct to.** Personál to zná. Obvykle se dá domluvit delší čas nebo klidnější termín.
- **Domluvit odběr doma.** Řada laboratoří to umožňuje za přesných podmínek: čistá nádobka od nich, přeprava do zhruba 30 až 60 minut, udržení teploty blízko tělesné, ne v chladu ani u topení. Musí to odsouhlasit laboratoř, protože na době a teplotě záleží.
- **Zamrazit vzorek předem.** Pokud už se to jednou stalo nebo pokud jen víte, že to pro vás bude těžké, dá se vzorek odebrat a zamrazit s předstihem. V den odběru vajíček je pak k dispozici jako pojistka. Řekněte si o to sám a včas, ne až ráno v den zákroku.
- **Probrat s lékařem obtíže, které mají jiný původ.** Potíže s erekcí nebo s ejakulací mohou mít zdravotní příčinu a existují postupy, které to řeší.

## Den odběru vajíček

Vzorek se obvykle odevzdává v den odběru vajíček, aby byl čerstvý. Zároveň je to den, kdy je tlak nejvyšší. Proto se předem zamrazený vzorek doporučuje častěji, než by se čekalo. Zeptejte se na to na konzultaci před cyklem, ne v den zákroku.

Pokud se v den odběru vajíček odběr nezdaří a záložní vzorek neexistuje, laboratoř má obvykle další možnosti. Vajíčka se dají v některých situacích zamrazit a postup upravit. Není to konec cyklu, i když to v tu chvíli tak vypadá.

## Na co se zeptat kliniky

1. Jak dlouhá má být abstinence a počítá se do ní i samotná ejakulace?
2. Můžeme odebrat doma, a do kolika minut musí být vzorek v laboratoři?
3. Dá se vzorek zamrazit předem jako záloha, a co to obnáší?
4. Kam a komu se vzorek odevzdává a v kolik hodin?
5. Co se děje, když se odběr v den zákroku nezdaří?

> Postupy se mezi pracovišti liší. Vždy dodržte konkrétní pokyny své laboratoře, ty mají přednost.`,
  },
  {
    id: 'muz-zamrazeni-a-tese',
    kind: 'article',
    title: 'Zamrazení spermatu a chirurgický odběr',
    excerpt:
      'Text pro partnera. Kdy má smysl zamrazit vzorek předem, kdy přichází na řadu TESE nebo MESA a co u toho čekat.',
    minutes: 8,
    phases: ['ivf_prep', 'retrieval', 'diagnostics'],
    topics: ['partner', 'vztah', 'klinika', 'embryologie'],
    level: 'deep',
    hero: 'dusk',
    reviewedBy: REVIEW,
    sources: [
      'EAU: Guidelines on Sexual and Reproductive Health',
      'ESHRE: doporučené postupy',
      'Ceníky se liší podle pracoviště a v čase. Aktuální částku ověřte přímo na své klinice (stav k srpnu 2026).',
    ],
    publishedOn: '2026-08-07',
    body: `## Kdy se sperma zamrazuje předem

Kryokonzervace, tedy zamrazení a uskladnění vzorku, se nabízí v několika situacích:

- **před onkologickou léčbou** nebo jinou léčbou, která může trvale ovlivnit tvorbu spermií. Tady se řeší přednostně a rychle,
- **před plánovanou operací** v oblasti šourku, třísel nebo prostaty,
- **když v den odběru vajíček nebudete v republice** nebo se nedostanete na kliniku,
- **když se odběr už jednou nezdařil** nebo když víte, že to pro vás bude psychicky náročné,
- **při kolísavém nebo velmi nízkém nálezu**, kdy se sbírá více vzorků,
- **po chirurgickém odběru**, kdy se získaná tkáň nebo spermie zamrazí na později.

## Jak zamrazení probíhá

Před kryokonzervací se obvykle vyžaduje vyšetření na infekční onemocnění, protože vzorky se skladují ve společných nádobách. Vzorek se odebere běžným způsobem, laboratoř ho zhodnotí, smíchá s ochranným roztokem, rozdělí do několika pejet a zamrazí v tekutém dusíku.

Po rozmrazení část spermií nepřežije. To je očekávaný jev, ne chyba. Laboratoř proto často hodnotí i vzorek po zkušebním rozmrazení, aby věděla, s čím počítat. U velmi nízkého počtu se vzorek dělí do více částí, aby se dal použít opakovaně.

Skladování bývá zpoplatněné a platí se obvykle na období, které se pak prodlužuje. Ceníky se mezi pracovišti liší a v čase se mění, proto tu žádnou částku neuvádíme. Zeptejte se přímo na své klinice, kolik stojí uskladnění na rok a jak se prodlužuje, ať vám lhůta neproběhne bez povšimnutí.

## Chirurgický odběr spermií

Přichází na řadu tehdy, když se v ejakulátu spermie opakovaně nenajdou. Příčina může být obstrukční, tedy že se spermie tvoří, ale nemají kudy odejít, nebo neobstrukční, kdy je narušena samotná tvorba. Rozlišit obojí pomáhá vyšetření u androloga, hormony, ultrazvuk a někdy genetika.

Používané výkony:

- **TESA a PESA**: odběr jehlou z varlete nebo z nadvarlete, obvykle v krátké anestezii nebo v místním znecitlivění,
- **TESE**: odběr malého vzorku tkáně z varlete,
- **micro-TESE**: odběr tkáně pod mikroskopem, který umožňuje cíleně hledat místa s tvorbou spermií. Používá se hlavně u neobstrukční příčiny,
- **MESA**: mikrochirurgický odběr z nadvarlete, typicky u obstrukční příčiny, například po vasektomii.

Volba výkonu patří andrologovi a liší se podle příčiny i podle zvyklostí pracoviště.

## Co čekat prakticky

**Průběh.** Výkon je obvykle ambulantní. Podle rozsahu a typu anestezie strávíte na klinice několik hodin. Po celkové anestezii nesmíte řídit, takže je potřeba doprovod.

**Po výkonu.** Běžně se objevuje bolestivost, otok a modřiny v oblasti šourku, obvykle několik dní. Klinika dává pokyny k chlazení, k podpoře šourku, k tělesné zátěži a k tomu, kdy se vrátit k běžnému pohybu a k pohlavnímu životu. Domluvte si volno v práci, zvlášť pokud pracujete fyzicky.

**Načasování.** Někdy se výkon plánuje na stejný den jako odběr vajíček, jindy s předstihem, aby se získané spermie mohly zamrazit. Obojí má své důvody a rozhodnutí patří klinice.

**Výsledek není jistý.** U neobstrukční příčiny se spermie najdou jen u části mužů. Tuhle možnost je lepší probrat s partnerkou předem, ne až v den zákroku. Součástí rozhovoru s lékařem by mělo být i to, co se stane, když se spermie nenajdou: jestli se vajíčka zamrazí, jestli existuje varianta s dárcovským spermatem a jak se taková volba rozhoduje.

Pokud se spermie získají, obvykle se použijí metodou ICSI, kdy embryolog zavádí jednu spermii přímo do vajíčka.

## Na co se zeptat

1. Který typ odběru je v naší situaci doporučený a proč?
2. Jaká je u nás pravděpodobnost, že se spermie najdou?
3. Bude se odběr dělat v den odběru vajíček, nebo předem?
4. Co se stane s vajíčky, když se spermie nenajdou?
5. Jak dlouhá je rekonvalescence a kdy se můžu vrátit do práce?
6. Kolik stojí uskladnění vzorku a na jak dlouho se platí?

> Text popisuje obvyklou praxi. Indikaci, postup i rizika probírá lékař v rámci informovaného souhlasu.`,
  },

  // --- (C) Psychika, vztah, ztráta -------------------------------------
  {
    id: 'muz-psychika',
    kind: 'article',
    title: 'Co partner často prožívá a proč to není vidět',
    excerpt:
      'Pocit selhání, stud, mlčení a tlak být ten silný. Proč muži zůstává většina toho v hlavě a co s tím jde dělat.',
    minutes: 8,
    phases: [
      'diagnostics',
      'ivf_prep',
      'stimulation',
      'two_week_wait',
      'waiting_next_attempt',
      'repeated_failure',
      'loss_miscarriage',
    ],
    topics: ['partner', 'vztah', 'psychika'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.8,
    body: `## Co se v něm obvykle děje

Léčba je nastavená tak, že skoro všechno směřuje k ženě. Injekce, kontroly, zákroky, telefonáty ze sestrovny. Muž je v tom systému často oslovován jen tehdy, když je potřeba vzorek. Zvenčí to vypadá, že se ho to týká míň. Zevnitř to většinou vypadá jinak.

**Bezmoc.** Nemůže si to vzít na sebe. Nemůže si píchnout injekci místo ní, nemůže jít místo ní na sál. Muži tenhle pocit popisují jako nejtěžší část celé léčby.

**Pocit selhání, zvlášť u mužského faktoru.** Nález na papíře se snadno slepí s představou o sobě samém. Řada mužů to popisuje jako stud, o kterém nikdy s nikým nemluvili.

**Role toho silného.** Někdo mu, obvykle nevědomky, přidělil úkol držet to. Takže drží. A vlastní strach schová, aby nepřitížil.

**Nemá s kým mluvit.** Žena má často kamarádku, skupinu, terapeutku, aplikaci. Muž má obvykle kolegu, se kterým se o tomhle nemluví. Otázku „a jak to zvládá ona?" slyší od všech. Otázku mířenou na něj samotného skoro od nikoho.

**Strach o partnerku.** Vidí, co jí léčba dělá. Bojí se o její zdraví i o to, co s ní udělá další negativní výsledek. O tomhle strachu se skoro nemluví, protože zní jako nedostatek podpory.

**Práce jako únik.** Když se doma nedá nic spravit, spraví se něco jinde. Zvenčí to vypadá jako lhostejnost. Zevnitř je to způsob, jak neztratit půdu pod nohama.

## Ztrátu prožívá taky

Po negativním výsledku, po ztrátě těhotenství nebo po zrušeném cyklu se pozornost okolí i zdravotníků obrací k ženě. To dává smysl, prochází tím tělesně. Zároveň platí, že **partner může prožívat stejně intenzivní ztrátu a bývá to méně vidět.**

Projeví se to jinak. Častěji činností než pláčem, častěji podrážděností než mluvením, častěji v noci než ve dne. To, že nepláče, není měřítko toho, jak moc mu na dítěti záleželo.

Přidává se k tomu jedna nespravedlnost navíc: jeho smutek se často nepovažuje za legitimní. Ani on sám si ho někdy nepřizná, protože „on přece nic nezažil".

## Co pomáhá

**Mít jedno místo, kde se mluví.** Nemusí to být terapie. Může to být jeden kamarád, bratr, lékař, podpůrná skupina pro páry. Podstatné je, aby to nebylo jen doma, kde oba mluví o tomtéž.

**Konkrétní role.** Muži se v léčbě obvykle cítí líp, když mají svěřenou konkrétní část, ne obecnou podporu. Termíny v kalendáři, telefonáty na kliniku, doprava, lékárna, papírování.

**Přiznat, že se to týká i jeho.** Věta v první osobě funguje líp než mlčení: „Taky mě to sebralo." Není to zátěž navíc, bývá to úleva pro oba.

**Vlastní tělo a spánek.** Alkohol jako večerní vypínač se v léčbě rozjede snadno a tiše. Pohyb a spánkový režim jsou nudná rada, ale drží člověka v chodu.

## Kdy vyhledat odbornou pomoc

Není potřeba čekat na krizi. Odborník má smysl vždycky, když se to nese dlouho. Ale některé signály jsou důvod jednat rychle:

- spánek rozbitý několik týdnů, ranní úzkost, ztráta chuti k čemukoli,
- narůstající množství alkoholu nebo jiných látek,
- výbuchy vzteku nebo naopak úplné stažení a mlčení,
- pocit, že by bylo lepší, kdyby tu nebyl. Tohle je důvod vyhledat pomoc okamžitě, přes praktického lékaře, psychiatrickou ambulanci nebo krizovou linku.

Vyhledání pomoci není známka slabosti a nic to neříká o tom, jak léčba dopadne. Je to způsob, jak ji ustát ve dvou.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou nebo psychiatrickou péči.`,
  },
  {
    id: 'muz-jak-spolu-mluvit',
    kind: 'article',
    title: 'Jak spolu mluvit, když se to nedaří',
    excerpt:
      'Konkrétní věty do konkrétních situací, rozdílné tempo truchlení a chvíle, kdy má smysl přizvat odborníka.',
    minutes: 8,
    phases: [
      'stimulation',
      'two_week_wait',
      'waiting_next_attempt',
      'repeated_failure',
      'loss_miscarriage',
    ],
    topics: ['vztah', 'partner', 'psychika'],
    level: 'essential',
    hero: 'blush',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.75,
    body: `## Proč se rozhovory zasekávají

Většina hádek v léčbě nevzniká z toho, že si dva lidé nerozumějí. Vzniká z domýšlení. Jeden mlčí, druhý si to přeloží jako lhostejnost. Jeden chce mluvit, druhý si to přeloží jako výčitku. Oba mají pravdu o sobě a oba se mýlí o tom druhém.

Druhý zdroj je časování. Potřeba mluvit a schopnost mluvit se v páru málokdy potkají ve stejnou hodinu.

## Věty, které fungují

Nejlíp se mluví v první osobě. Věta o mně se nedá vyvrátit, takže nespustí obranu.

- **Když potřebujete být slyšena, ne opravena:** „Potřebuju to teď říct nahlas. Nepotřebuju řešení, jen chci, aby to někdo slyšel."
- **Když nemáte sílu na rozhovor:** „Dnes to neunesu. Nejsem naštvaná, jen potřebuju ticho a zítra to probereme."
- **Když se v tom oba topíte:** „Nevím, co s tím. To mě na tom děsí nejvíc."
- **Když potřebujete konkrétní pomoc:** „Potřebuju, aby na kliniku zítra volal někdo jiný než já. Zvládnu všechno ostatní, tohle ne."
- **Když chcete vědět, jak na tom je on:** místo výčitky, že nic neříká, otevřete prostor bez nároku na okamžitou odpověď: „Ráda bych slyšela i druhou stranu. Nemusí to být teď."
- **Když se pohádáte o nic:** „Tohle nebylo o nádobí. Bylo to o zítřku."

## Domluvy, které drží

**Časové okno.** Dohodněte se, kdy se o léčbě mluví, například po večeři půl hodiny. Zbytek dne je od toho volný. Zní to chladně a funguje to. Bez okna zabere téma celý den.

**Signální slovo.** Jedno slovo nebo krátká zpráva, která znamená „dnes je to zlé, nechci to vysvětlovat". Bez diskuse a bez následné analýzy.

**Rozdělení rolí.** Kdo volá na kliniku, kdo hlídá termíny, kdo odpovídá rodině, kdo řeší papíry. Napsané, ne domluvené v běhu.

**Dohoda o rodině a okolí.** Předem si řekněte, komu se co říká a co zůstane mezi vámi. Nejvíc konfliktů vzniká z toho, že jeden řekne mámě něco, co druhý považoval za soukromé.

**Jedna věc týdně, která není o léčbě.** Kino, výlet, hloupost. Není to popírání situace, je to údržba vztahu, který má léčbu přežít.

## Rozdílné tempo truchlení

Po neúspěchu se často stane, že jeden se začne zvedat ve chvíli, kdy druhý teprve klesá. To bolí, protože se míjíte. Zároveň je to běžné a samo o sobě to neznamená, že vztah nefunguje.

Co s tím:

- **Nepočítejte, kdo truchlí víc.** Ta soutěž nemá vítěze.
- **Nečekejte, že to druhý pozná sám.** Řekněte, kde jste dnes: „Já jsem dnes dole. Nevadí mi, že to dnes máme každý jinak."
- **Neberte návrat do normálu jako zradu.** To, že jeden z vás jde v sobotu na fotbal, neznamená, že to má odbyté.
- **Neplánujte další krok v nejhorším týdnu.** Rozhodnutí o dalším cyklu odložte o dva až tři týdny, pokud to lékařsky jde.

## Co dělá škodu

- **Mlčení jako ochrana.** Když jeden tají svůj smutek, aby druhého nezatížil, obvykle se to projeví jako odtažitost. A ta bolí víc než smutek.
- **Rady místo přítomnosti.** Ve chvíli akutní bolesti nikdo nechce plán.
- **Věty o osudu a o smyslu.** Nepomáhají a obvykle jen ukončí rozhovor.
- **Ultimáta o dalším pokusu.** Rozhodnutí o pokračování nebo ukončení léčby je společné a potřebuje čas. Ukončení léčby není selhání ani rezignace, je to jedno z legitimních rozhodnutí.

## Kdy přizvat odborníka

Párová nebo individuální terapie není řešení krachu vztahu. Je to nástroj, který dvěma lidem umožní projít tímhle vedle sebe místo proti sobě. Zvažte ji, když:

- spolu o léčbě přestanete mluvit úplně,
- se každý rozhovor mění v hádku o totéž,
- jeden chce pokračovat a druhý ne a nedaří se z toho dostat,
- se jeden z vás uzavírá, výrazně pije nebo přestává fungovat v běžném dni,
- se blíží rozhodnutí, které neumíte unést sami: dárcovské gamety, ukončení léčby, náhradní plán.

Zeptejte se na klinice, jestli spolupracuje s psychologem se zkušeností s reprodukční medicínou. Řada pracovišť takový kontakt má.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou péči.`,
  },
  {
    id: 'muz-sex-behem-ivf',
    sources: ['Doporučení k pohlavnímu styku během léčby se mezi pracovišti liší a řídí se vaší konkrétní situací. Rozhoduje vždy vaše klinika.'],
    kind: 'article',
    title: 'Sex během IVF, když se z něj stal úkol',
    excerpt:
      'Kdy klinika doporučuje abstinenci, co se mění kolem odběru a transferu a jak se dá vrátit blízkost, když hlavní postavou je kalendář.',
    minutes: 6,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer', 'two_week_wait', 'diagnostics'],
    topics: ['vztah', 'partner', 'sebepece'],
    level: 'deep',
    hero: 'pearl',
    author: 'Gabi',
    reviewedBy: REVIEW,
    publishedOn: '2026-08-07',
    body: `## Co se změní

Ve chvíli, kdy se početí přesune do kalendáře a do laboratoře, přestává být sex soukromou věcí dvou lidí. Stane se z něj položka s termínem, někdy zakázaná, jindy nařízená. Páry to popisují velmi podobně: zmizí spontánnost, přidá se výkon a pocit, že se hodnotí.

K tomu se přidávají tělesné důvody. Během stimulace bývají vaječníky zvětšené a citlivé, po odběru je oblast bolestivá, po transferu je hlava plná opatrnosti. Změna zájmu o sex je v téhle situaci běžná u obou.

## Kdy klinika doporučuje abstinenci

Doporučení se mezi pracovišti liší, proto se řiďte tím, co dostanete od své kliniky. Nejčastěji se abstinence týká těchto situací:

- **Před odběrem vzorku.** Obvykle dva až pět dní, podle pokynů laboratoře. Platí to i pro den odběru vajíček.
- **Ke konci stimulace.** Vaječníky bývají zvětšené a citlivé. Část pracovišť doporučuje vynechat pohlavní styk kvůli riziku torze, tedy otočení vaječníku, a kvůli bolestivosti.
- **Po odběru vajíček.** Několik dní klidu bývá standardní doporučení, mimo jiné kvůli krvácení a hojení.
- **Kolem transferu a v čekání.** Tady se doporučení liší nejvíc. Některá pracoviště doporučují abstinenci, jiná ne. Neexistuje jednotný postoj a rozhoduje ošetřující lékař.
- **Při rizikových situacích**, například při hyperstimulaci nebo krvácení. Tady platí pokyn kliniky vždy.

Zeptejte se konkrétně a napište si odpověď. „Doporučujeme klid" znamená v každé ordinaci něco trochu jiného.

## Když se ze sexu stal úkol

Tenhle bod se často přeskakuje, protože zní méně naléhavě než hormony a embrya. Přesto je to jedna z věcí, které vztah v léčbě obrousí nejvíc, zvlášť u párů, které předtím dlouho zkoušely přirozeně a měřily ovulaci.

Co pomáhá:

- **Oddělit dotek od cíle.** Domluvte se na období, kdy je jasné, že z toho nic dalšího nebude. Objetí, masáž, spaní u sebe. Bez podtextu.
- **Pojmenovat to nahlas.** Věta „nemám teď na sex a není to kvůli nám" ušetří týdny domýšlení. Mlčení se v páru vždycky přeloží jako odmítnutí.
- **Nedělat ze zákazu tabu.** Když klinika doporučí abstinenci, řekněte si spolu, na jak dlouho a čeho přesně se týká. Nejasná dlouhá pauza dopadá hůř než jasná krátká.
- **Nezachraňovat to výkonem.** Sex jako doklad, že je vztah v pořádku, obvykle situaci zhorší.
- **Počítat s tím, že návrat trvá.** Po ukončeném cyklu nebo po ztrátě se blízkost vrací postupně a nerovnoměrně. To je běžné.

## Kdy o tom mluvit s lékařem

- Když se objeví bolest při pohlavním styku. Není to něco, co se má vydržet, může mít zjistitelnou příčinu.
- Když se opakují potíže s erekcí nebo ejakulací, zvlášť pokud komplikují odběr vzorku. Existují postupy, které to řeší, a lékaři to slyší běžně.
- Když po zákroku krvácíte nebo máte bolest, u které si nejste jistá. Tady volejte kliniku, ne internet.
- Když se změna intimity drží měsíce a stává se z ní téma, přes které se nejde dostat. Pak má smysl psycholog nebo párový terapeut.

> Doporučení k pohlavnímu životu v cyklu se mezi pracovišti liší. Pokyny vaší kliniky mají vždy přednost před obecným textem.`,
  },
  {
    id: 'muz-po-negativnim-vysledku',
    kind: 'article',
    title: 'Po negativním výsledku a po ztrátě: co pomáhá a co ne',
    excerpt:
      'Text pro partnera. Co říct, co raději ne a co konkrétně udělat místo utěšování.',
    minutes: 7,
    phases: ['two_week_wait', 'waiting_next_attempt', 'repeated_failure', 'loss_miscarriage'],
    topics: ['partner', 'vztah', 'ztrata', 'psychika'],
    level: 'essential',
    hero: 'sand',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.8,
    body: `## Prvních pár hodin

V první chvíli nemáte co spravit. To je nejtěžší část, protože instinkt velí najít řešení. Řešení tady není. Je jen přítomnost a pár praktických věcí.

Co se dá udělat hned:

- **Být fyzicky u toho.** Nemusíte nic říkat. Sedět vedle, držet za ruku, nechat ticho být dlouhé.
- **Převzít telefon.** Nabídněte, že rodině a přátelům dáte vědět vy a řeknete jen to, na čem se domluvíte.
- **Zrušit, co se dá zrušit.** Návštěvy, oslavy, schůzky na příští dny.
- **Zajistit dopravu a jídlo.** Konkrétní teplé jídlo, ne otázka, na co má chuť.
- **Vzít si volno, pokud to jde.** I jeden den doma znamená hodně.
- **Zapsat si, co řekla klinika.** V takové chvíli se instrukce neudrží v hlavě. Napište si, co se má sledovat, jaké léky vysadit nebo ponechat a kdy je kontrola.

## Co nepomáhá

Nejde o zlé úmysly. Tyhle věty říkají lidé, kteří to myslí dobře, a přesto zavírají rozhovor:

- **Rychlý posun k dalšímu pokusu.** „Zkusíme to znovu" v den výsledku říká, že tenhle konec už je odbytý. Tenhle rozhovor přijde na řadu za pár týdnů.
- **Hledání viníka nebo příčiny v jejím chování.** Zpětné rozebírání toho, co dělala nebo nedělala, ubližuje a nic nevysvětlí.
- **Věty o osudu a o smyslu.** Neposkytují útěchu, jen ukončí povídání.
- **Srovnávání s jinými páry.** Cizí příběh s dobrým koncem v tuhle chvíli nepomůže.
- **Vyzývání k tomu, aby přestala plakat nebo se uklidnila.** Pláč není problém k vyřešení.
- **Bagatelizace.** Věty typu „bylo to ještě brzy" nebo „nebylo to skutečné dítě". Bylo, pro ni ano.
- **Mlčení jako ochrana.** Když svůj smutek schováte úplně, obvykle to vypadá jako lhostejnost.

## Co pomáhá říct

V první osobě, krátce, bez pokračování:

- „Je mi to hrozně líto."
- „Taky mě to sebralo. Nejsme v tom každý zvlášť."
- „Nevím, co říct. Zůstanu tady."
- „Nemusíme o tom teď mluvit."
- „Myslel jsem na to dítě taky."
- „Nikdo za to nemůže."

A jedna věta, která zní banálně a funguje: „Co můžu udělat teď, v příští hodině?" Konkrétní časový rámec se odpovídá snáz než obecná nabídka pomoci.

## Praktická pomoc místo utěšování

Ženy po ztrátě opakovaně popisují, že nejvíc pomohlo to, co někdo prostě udělal:

1. Nákup a vaření na několik dní.
2. Praní, úklid, zajištění starších dětí nebo zvířat.
3. Odvoz na kontrolu a čekání v čekárně.
4. Vyzvednutí léků a hlídání jejich užívání.
5. Komunikace se zaměstnavatelem, pokud si to přeje.
6. Odfiltrování dotazů okolí, včetně těch dobře míněných.
7. Uložení všech papírů z kliniky na jedno místo.

## Vy taky truchlíte

Ztráta se týká i vás, i když se všichni ptají na ni. Váš smutek není zátěž navíc a nemusíte ho odkládat na později. Pro pár bývá lepší, když je vidět: „Já to taky nesu těžce" obvykle nezhorší nic a hodně věcí vysvětlí.

Zároveň platí, že nemusíte být jediná opora. Jeden člověk, se kterým o tom mluvíte, dělá velký rozdíl.

## Kdy vyhledat pomoc

- Když jeden z vás po několika týdnech nefunguje v běžném dni.
- Když se objeví výrazně vyšší spotřeba alkoholu.
- Když spolu přestanete mluvit.
- Když se objeví myšlenky na to, že by bylo lepší tu nebýt. Tady se pomoc hledá okamžitě, přes praktického lékaře, psychiatrickou ambulanci nebo krizovou linku.

> Text má obecně informativní charakter a nenahrazuje odbornou psychologickou péči ani pokyny ošetřujícího lékaře.`,
  },

  // --- (D) Checklisty ---------------------------------------------------
  {
    id: 'muz-checklist-tyden',
    kind: 'checklist',
    title: 'Co může partner udělat tenhle týden',
    excerpt:
      'Text pro partnera. Konkrétní úkoly rozdělené podle fáze léčby, ne obecná nabídka podpory.',
    minutes: 4,
    phases: [
      'diagnostics',
      'ivf_prep',
      'stimulation',
      'retrieval',
      'transfer',
      'two_week_wait',
      'waiting_next_attempt',
    ],
    topics: ['partner', 'vztah', 'klinika', 'sebepece'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.85,
    body: `## K čemu tenhle seznam je

Nejčastější věta, kterou muži v léčbě říkají, zní: „Nevím, co mám dělat." A nejčastější odpověď, kterou dostanou, je, že mají „být oporou", což se nedá odškrtnout ani naplánovat.

Tenhle seznam je rozdělený podle fází a obsahuje jen věci, které se dají odškrtnout. Nemusíte splnit všechno, vezměte si tři položky z fáze, ve které právě jste.

## Jak s ním pracovat

Vyberte si konkrétní úkoly a **řekněte nahlas, které přebíráte.** Rozdíl mezi obecnou nabídkou pomoci a větou „od zítřka volám na kliniku já" je pro druhého člověka obrovský. První varianta znamená, že si to musí pořád pamatovat ona a ještě o pomoc požádat. Druhá znamená, že to už není její starost.

Jedna poznámka k penězům a k domácnosti: převzetí konkrétní části domácnosti funguje líp než jednorázové gesto. Ne proto, že by gesta byla špatná, ale proto, že vyčerpání vzniká z opakování.

> Seznam je obecný. Pokyny vaší kliniky, zejména k lékům, termínům a klidovému režimu, mají vždy přednost.`,
    checklist: [
      {
        id: 'muz-t-kalendar',
        text: 'Přepsat všechny termíny z kliniky do sdíleného kalendáře',
        hint: 'Včetně času, adresy pracoviště a toho, jestli se jde nalačno.',
        group: 'Organizace a termíny',
      },
      {
        id: 'muz-t-telefon',
        text: 'Převzít telefonáty na kliniku a zapsat, co bylo domluveno',
        hint: 'Ptejte se, dokud instrukci neumíte zopakovat vlastními slovy.',
        group: 'Organizace a termíny',
      },
      {
        id: 'muz-t-papiry',
        text: 'Založit jednu složku na všechny výsledky, souhlasy a účtenky',
        group: 'Organizace a termíny',
      },
      {
        id: 'muz-t-volno',
        text: 'Zařídit si volno na den odběru vajíček a na den transferu',
        hint: 'Řešte to týdny předem, ne den předem.',
        group: 'Organizace a termíny',
      },
      {
        id: 'muz-t-lekarna',
        text: 'Vyzvednout léky v lékárně a zkontrolovat je proti rozpisu',
        hint: 'Ověřte i expiraci a to, co patří do chladničky.',
        group: 'Stimulace',
      },
      {
        id: 'muz-t-budik',
        text: 'Nastavit si vlastní budík na čas aplikace injekcí',
        hint: 'Druhá připomínka v páru je pojistka proti vynechané dávce.',
        group: 'Stimulace',
      },
      {
        id: 'muz-t-doprovod-kontrola',
        text: 'Jít s ní aspoň na jednu kontrolu během stimulace',
        hint: 'Dva lidé si zapamatují víc než jeden, hlavně po špatné zprávě.',
        group: 'Stimulace',
      },
      {
        id: 'muz-t-vzorek',
        text: 'Domluvit si s laboratoří vlastní odběr: dobu abstinence a místo',
        hint: 'Zeptejte se rovnou i na možnost zamrazit vzorek předem.',
        group: 'Stimulace',
      },
      {
        id: 'muz-t-domacnost',
        text: 'Převzít natrvalo jednu konkrétní část domácnosti',
        hint: 'Například nákupy a praní. Celou agendu, ne výpomoc.',
        group: 'Doma',
      },
      {
        id: 'muz-t-jidlo',
        text: 'Připravit jídlo na den odběru a na den po něm',
        group: 'Doma',
      },
      {
        id: 'muz-t-rizeni',
        text: 'Zajistit řízení po zákroku v anestezii',
        hint: 'Po celkové anestezii se ten den nesmí řídit.',
        group: 'Den odběru a transfer',
      },
      {
        id: 'muz-t-otazky',
        text: 'Napsat spolu tři otázky na nejbližší konzultaci',
        group: 'Den odběru a transfer',
      },
      {
        id: 'muz-t-okoli',
        text: 'Domluvit se, co se říká rodině, a převzít odpovídání',
        hint: 'Dotazy typu „tak co, už to je?" pak chodí na vás.',
        group: 'Čekání',
      },
      {
        id: 'muz-t-neleceni',
        text: 'Naplánovat jednu společnou věc, která s léčbou nesouvisí',
        optional: true,
        group: 'Čekání',
      },
    ],
  },
  {
    id: 'muz-checklist-den-odberu',
    kind: 'checklist',
    title: 'Den odběru vajíček: co zařídit',
    excerpt:
      'Text pro partnera. Co připravit večer předem, co obstarat ráno a co po návratu domů.',
    minutes: 4,
    phases: ['stimulation', 'retrieval'],
    dayRange: [0, 1],
    topics: ['partner', 'vztah', 'klinika'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.8,
    body: `## Proč to má být na vás

Den odběru je krátký zákrok s dlouhým rozběhem. Ona je nalačno, nervózní a po zákroku několik hodin po anestezii. To je den, kdy se organizace dá převzít celá.

Většina věcí se dá vyřídit večer předem. Ráno pak zbývá jen vzít tašku a jet.

## Dvě věci, na kterých nejvíc záleží

**Čas triggeru napsaný na papíře.** Ptají se na něj a v šest ráno si ho nikdo nevybaví přesně.

**Vlastní vzorek.** Pokud se odevzdává týž den, znáte dobu abstinence a víte, kam a v kolik ho odevzdat. Pokud máte zamrazený vzorek, ověřte den předem, že o něm laboratoř ví.

## Po návratu domů

Počítejte s tím, že bude bolest v podbřišku, únava a v hlavě čekání na zprávu z laboratoře. Nejvíc pomůže klid, teplo, dostupné pití a to, že nemusí nic řešit.

Zapište si, co říkali při propuštění: co brát, čeho se vyvarovat a kdy volají výsledky. Zejména si zapište, **kdy volat kliniku okamžitě**: při silné bolesti, horečce, velkém krvácení, zvracení, dechových potížích nebo rychlém nárůstu obvodu břicha.

> Seznam je obecný. Konkrétní pokyny vaší kliniky, hlavně k lačnění, lékům a klidovému režimu, mají vždy přednost.`,
    checklist: [
      {
        id: 'muz-do-trigger',
        text: 'Zapsat na papír přesný čas a název aplikované injekce před odběrem',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-taska',
        text: 'Postavit sbalenou tašku ke dveřím',
        hint: 'Ponožky, mikina, volné oblečení, vložky, doklady, karta pojišťovny.',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-cesta',
        text: 'Ověřit trasu, parkování a čas příjezdu na kliniku',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-lacneni',
        text: 'Ověřit pokyny k lačnění a k ranním lékům',
        hint: 'Zeptejte se konkrétně, od kolika hodin se nesmí pít.',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-vzorek',
        text: 'Vědět, kdy a kam odevzdáte vlastní vzorek, nebo mít potvrzený zamrazený',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-jidlo',
        text: 'Připravit jídlo a pití na návrat domů',
        hint: 'Něco lehkého a teplého, ať se po příjezdu nic nevaří.',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-budik',
        text: 'Nastavit dva budíky a nabít oba telefony',
        group: 'Večer předem',
      },
      {
        id: 'muz-do-volno',
        text: 'Mít potvrzené volno na celý den, ne jen na dopoledne',
        group: 'Ráno',
      },
      {
        id: 'muz-do-doprovod',
        text: 'Řídit tam i zpět, po anestezii nesmí za volant',
        group: 'Ráno',
      },
      {
        id: 'muz-do-poznamky',
        text: 'Zapsat, co řekli při propuštění: počet vajíček, léky, další kroky',
        hint: 'Po anestezii se informace nepamatují spolehlivě.',
        group: 'Na klinice',
      },
      {
        id: 'muz-do-kontakt',
        text: 'Mít v telefonu číslo na kliniku i kontakt pro mimopracovní dobu',
        group: 'Na klinice',
      },
      {
        id: 'muz-do-priznaky',
        text: 'Znát příznaky, u kterých se volá klinika hned',
        hint: 'Silná bolest, horečka, velké krvácení, zvracení, dušnost, rychle rostoucí břicho.',
        group: 'Po návratu domů',
      },
      {
        id: 'muz-do-klid',
        text: 'Převzít domácnost a děti na zbytek dne',
        group: 'Po návratu domů',
      },
      {
        id: 'muz-do-okoli',
        text: 'Odpovědět rodině a přátelům místo ní',
        optional: true,
        group: 'Po návratu domů',
      },
    ],
  },
]

export const pack: ContentPack = { items }
