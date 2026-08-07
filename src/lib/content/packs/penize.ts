import type { ContentItem, ContentPack } from '../types'

/**
 * Peníze a IVF.
 *
 * Nejčastější věc, kterou ženy v léčbě řeší po půlnoci a o které se v čekárně
 * nemluví. Balík záměrně neuvádí jediné absolutní číslo. Ceníky se mění po
 * kliniku, rok, metodu i indikaci a jedno špatně zapamatované číslo napáchá
 * víc škody než poctivé "orientačně, ověřte si to".
 */

const OVERENI = [
  'Uvedené částky jsou orientační a slouží jen k řádové představě. Přesnou cenu dává vždy platný ceník konkrétní kliniky.',
  'Ceny se liší podle kliniky, roku, zvolené metody, indikace a věku. Ověřte si je před podpisem smlouvy.',
  'Aktualizováno 7. 8. 2026.',
]

const items: ContentItem[] = [
  {
    id: 'pen-z-ceho-se-sklada-cena',
    kind: 'article',
    title: 'Kolik stojí IVF a z čeho se cena skládá',
    excerpt:
      'Rozpad ceny na jednotlivé položky, abyste ceník kliniky přestala číst jako jedno velké nepochopitelné číslo.',
    minutes: 9,
    phases: ['thinking', 'ivf_prep', 'waiting_next_attempt', 'repeated_failure'],
    topics: ['finance', 'klinika', 'leky'],
    level: 'essential',
    hero: 'champagne',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.6,
    sources: OVERENI,
    body: `## Proč vám nikdo neřekne jedno číslo

Když se zeptáte, kolik stojí IVF, dostanete odpověď, která platí pro jeden konkrétní scénář na jedné konkrétní klinice. Cena cyklu není jedna položka. Je to součet osmi až deseti položek, z nichž některé se u vás nikdy nepoužijí a jiné se objeví až v průběhu, podle toho, jak vaše tělo reaguje.

Tenhle text vám ceník nenahradí. Má vám dát strukturu, podle které si ho přečtete a poznáte, co v něm chybí.

## Osm položek, ze kterých se cena skládá

### 1. Vedení cyklu a samotný výkon

Kontroly, ultrazvuky, odběry krve během stimulace, odběr vajíček, anesteziolog, pobyt na lůžku po výkonu, transfer embrya. Tohle je jádro ceny a u placeného cyklu se pohybuje orientačně v řádu desítek tisíc korun.

Zeptejte se konkrétně: je v ceně anestezie? Je v ceně transfer? Kolik ultrazvukových kontrol je zahrnuto a co když jich budete potřebovat víc?

### 2. Léky

Nejčastěji podceňovaná položka. Stimulační léky jsou u placeného i hrazeného cyklu samostatná kapitola, kterou platíte v lékárně, ne na klinice. U vyšších dávek se orientačně dostanete do řádu desítek tisíc korun. U nízkých dávek nebo přirozeného cyklu výrazně méně.

Dávku určuje lékař podle vaší ovariální rezervy a věku, ne podle vašeho rozpočtu. Nejde ji "objednat levnější".

### 3. Laboratoř a embryologie

Oplození, kultivace embryí, hodnocení. Sem patří i rozdíl mezi klasickým IVF a ICSI, kdy se spermie zavádí do vajíčka jehlou. ICSI je obvykle samostatná položka navíc, orientačně v řádu jednotek až nižších desítek tisíc korun.

Zeptejte se, do kolikátého dne se embrya kultivují ve standardní ceně a jestli se prodloužená kultivace do pátého dne účtuje zvlášť.

### 4. Kryokonzervace

Zamražení embryí, která zbydou. Účtuje se obvykle jednorázově, někdy za celý cyklus, jinde za jeden nosič nebo slámku. Rozdíl mezi těmito dvěma způsoby může být při větším počtu embryí značný.

### 5. Skladné

Roční poplatek za to, že vaše embrya někde v tekutém dusíku dál jsou. Orientačně v řádu jednotek tisíc korun ročně. Platí se, dokud embrya existují, tedy i v letech, kdy do léčby nevstupujete.

### 6. Genetické testování

Preimplantační genetické testování (PGT) má obvykle dvě části: základní poplatek za nastavení a analýzu plus cenu za každé testované embryo. Dohromady se orientačně dostanete do řádu desítek tisíc korun. Připočtěte i biopsii embryí, která bývá samostatnou položkou.

### 7. Nadstandard a doplňkové metody

Time lapse inkubátor, asistovaný hatching, embryonální lepidlo, výběr spermií pokročilými metodami, testování receptivity sliznice, různé imunologické postupy. Každá metoda má svou cenu a svou míru důkazů. U každé se ptejte na obojí.

Otázka, která vám ušetří nejvíc: "Doporučujete mi to na základě něčeho v mém nálezu, nebo to nabízíte všem?"

### 8. Doplatky a drobnosti

Vystavení zprávy, kopie dokumentace, potvrzení pro zaměstnavatele, konzultace navíc, opakovaný spermiogram, vyšetření, kterým vypršela platnost. Jednotlivě to jsou stokoruny až nižší tisíce. V součtu za rok je to znát.

## Proč se ceny mezi klinikami liší

- **Rozdílné balíčky.** Jedna klinika dá vyšší cenu, ve které je toho víc. Druhá nižší cenu a účtuje po položkách. Bez rozpisu se to porovnat nedá.
- **Rozdílné vybavení a personál.** Laboratoř s vlastním embryologem na směně a moderními inkubátory stojí víc na provozu.
- **Smlouvy s pojišťovnami.** Klinika bez smlouvy si účtuje jinak než klinika se smlouvou.
- **Zahraniční klientela.** Pracoviště zaměřená na cizince mají často jinou cenovou hladinu.
- **Ceny se mění v čase.** Ceník, který někdo sdílel v diskusi před dvěma lety, vám dnes nepomůže.

Dražší klinika automaticky neznamená vyšší šanci. Levnější klinika automaticky neznamená horší péči. To, co porovnávat jde, jsou výsledky vztažené k věku a diagnóze, obsazenost laboratoře, dostupnost termínů a to, jak s vámi na klinice mluví.

## Co udělat, než začnete porovnávat

1. Vyžádejte si písemný ceník, ne ústní odhad. Kliniky ho běžně mají a poskytnou ho.
2. Nechte si na papír napsat, co konkrétně je v základní ceně cyklu.
3. Zeptejte se, co se stane s cenou, když se cyklus zruší před odběrem.
4. Zeptejte se, kolik zaplatíte za kryotransfer z už zamraženého embrya.
5. Sečtěte položky na rok, ne na jeden cyklus.

> Tento text má informativní charakter a není finanční ani lékařské poradenství. Konkrétní cenu i doporučený postup vám dá jedině vaše klinika.`,
  },
  {
    id: 'pen-co-hradi-pojistovna',
    kind: 'article',
    title: 'Co z IVF hradí veřejné zdravotní pojištění',
    excerpt:
      'Kolik cyklů, do jakého věku a za jakých podmínek, a co si zaplatíte i tehdy, když máte úhradu.',
    minutes: 8,
    phases: ['thinking', 'ivf_prep', 'diagnostics', 'waiting_next_attempt', 'repeated_failure'],
    topics: ['finance', 'klinika'],
    level: 'essential',
    hero: 'sage',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.6,
    sources: ['Ověřte si aktuální podmínky u své zdravotní pojišťovny a na klinice.'],
    body: `## Nejdřív to důležité

Podmínky úhrady se mění. Mění se zákon, mění se úhradová vyhláška, mění se smlouvy jednotlivých klinik s jednotlivými pojišťovnami. Rozhodující je vždy aktuální znění zákona a smlouva, kterou má vaše klinika s vaší pojišťovnou, ne text v aplikaci a ne příspěvek ve skupině.

**Aktualizováno 7. 8. 2026.** Než se na cokoli spolehnete, zavolejte na infolinku své pojišťovny a zeptejte se přímo na svou situaci.

## Co je z veřejného pojištění obvykle hrazené

Hrazený bývá samotný výkon mimotělního oplodnění, tedy sledování cyklu, odběr vajíček, laboratorní zpracování v základním rozsahu a transfer embrya. Vždy jen na pracovišti, které má s vaší pojišťovnou uzavřenou smlouvu.

Počet hrazených cyklů je omezený. V praxi se obvykle mluví o třech cyklech, přičemž za splnění určité podmínky týkající se počtu přenesených embryí v předchozích pokusech může být hrazený i cyklus čtvrtý. Přesné znění té podmínky si nechte vysvětlit na klinice, protože rozhoduje o jednom celém cyklu.

Úhrada je také omezená věkem ženy. Věkový strop se pohybuje kolem čtyřicátého roku života a počítá se ke konkrétnímu okamžiku, ne k celému kalendářnímu roku. Tohle je nejčastější místo, kde ženy o úhradu přijdou omylem: objednají se na termín, který už za hranici spadá.

## Co hrazené obvykle není

- **Kryokonzervace embryí a roční skladné.** Téměř vždy si je platíte sama.
- **Preimplantační genetické testování**, kromě úzce vymezených indikací.
- **Doplňkové a nadstandardní metody**: time lapse, asistovaný hatching, embryonální lepidlo, pokročilé metody výběru spermií, testy receptivity sliznice.
- **Doplatky na léky.** Léky mají vlastní úhradový režim a i u hrazeného cyklu za ně obvykle něco doplácíte.
- **Samotný kryotransfer** může být účtován jinak než čerstvý cyklus. Zeptejte se konkrétně, jestli se počítá do vašich hrazených cyklů.
- **Vyšetření nad rámec standardu** a opakovaná vyšetření, kterým vypršela platnost.

## Podmínky, na které se zapomíná

1. **Smlouva kliniky s vaší pojišťovnou.** Ne každá klinika má smlouvu s každou pojišťovnou. Ptejte se konkrétně na svou, ne obecně.
2. **Indikace.** Úhrada se váže na zdravotní důvod léčby doložený vyšetřeními. Bez uzavřené diagnostiky se cyklus nezahájí.
3. **Vyčerpané cykly se počítají, i když jste je absolvovala jinde.** Vezměte si s sebou dokumentaci z předchozích pracovišť.
4. **Zrušený cyklus** se do počtu započítat může i nemusí, záleží na tom, ve které fázi se zrušil. Nechte si to vysvětlit dopředu.
5. **Změna pojišťovny** může mít vliv na to, kam můžete jít. Nedělejte ji uprostřed rozjeté léčby, aniž byste si to ověřila.

## Tři otázky, které položte při jednom telefonátu

Zavolejte na infolinku své zdravotní pojišťovny a zeptejte se přesně takhle:

- "Kolik cyklů mimotělního oplodnění mi zbývá z hrazených a do kdy je mohu vyčerpat?"
- "Má klinika, na kterou chodím, s vámi smlouvu na tento výkon?"
- "Které konkrétní položky si u vás budu platit sama?"

Odpověď si zapište i s datem a jménem člověka, se kterým jste mluvila. Když se za půl roku bude něco lišit, budete mít z čeho vycházet.

## Když už úhradu nemáte

Vyčerpané hrazené cykly neznamenají konec možností. Znamenají, že další cyklus si platíte a že se rozhodujete jinak: pečlivěji, s rozpočtem a s jasnou představou, kolik pokusů je pro vás únosných. To je legitimní a dospělé rozhodování, ne prohra.

Zeptejte se také na balíčky pro samoplátkyně, na zvýhodněné programy sdíleného dárcovství a na to, jestli klinika nabízí platbu ve splátkách. Nabídky se liší a nezveřejňují se vždy na webu.

> Tento text má informativní charakter, nejde o právní ani finanční poradenství. Rozhodující je aktuální znění zákona a smlouva vaší kliniky s vaší pojišťovnou. Podmínky si ověřte přímo u nich.`,
  },
  {
    id: 'pen-leky-a-doplatky',
    kind: 'article',
    title: 'Léky na stimulaci: proč stojí tolik a kde se dá ušetřit',
    excerpt:
      'Rozdíl mezi hrazenými a nehrazenými přípravky, doplatky v lékárně a otázky, které se opravdu vyplatí položit.',
    minutes: 8,
    phases: ['ivf_prep', 'stimulation', 'waiting_next_attempt'],
    topics: ['finance', 'leky', 'stimulace'],
    level: 'essential',
    hero: 'linen',
    author: 'Gabi',
    reviewedBy: 'Odborně garantováno – reprodukční medicína',
    publishedOn: '2026-08-07',
    boost: 0.4,
    sources: OVERENI,
    body: `## Proč jsou stimulační léky drahé

Gonadotropiny nejsou tablety. Jsou to bílkovinné přípravky, které se buď vyrábějí biotechnologicky, nebo se získávají a čistí z moči. Výroba je nákladná, přípravky vyžadují chladový řetězec a dávkují se v jednotkách, ne v miligramech. K tomu je potřeba desítky ampulí nebo několik per na jeden cyklus.

Orientačně se náklady na léky u jednoho stimulovaného cyklu pohybují v řádu desítek tisíc korun, u nízkých dávek nebo přirozeného cyklu výrazně méně. Přesnou částku vám řekne jen lékárna podle konkrétního receptu.

## Hrazené, částečně hrazené, nehrazené

Léky používané v asistované reprodukci spadají do tří skupin:

- **Plně nebo částečně hrazené z veřejného pojištění**, obvykle za splnění stejných podmínek jako samotný cyklus. I tady ale často zůstává doplatek.
- **Nehrazené**, které si platíte celé. Sem spadá část přípravků a téměř vždy to, co se použije nad rámec standardního protokolu.
- **Léky mimo cyklus**: podpora luteální fáze, doplňky, ředidla krve při určitých indikacích. Ty mají vlastní režim.

Doplatek se navíc může u téhož léku lišit lékárnu od lékárny, protože si každá stanovuje vlastní obchodní přirážku.

## Kde se dá reálně ušetřit

### 1. Porovnejte doplatky mezi lékárnami

U drahých přípravků není rozdíl mezi lékárnami zanedbatelný. Zavolejte do dvou nebo tří lékáren, které mají lék skladem, a zeptejte se na doplatek u konkrétního názvu a síly. Vyplatí se to zvlášť u větších balení.

### 2. Zeptejte se na přípravek se stejnou účinnou látkou

Formulace otázky pro lékaře: "Existuje k tomuto přípravku alternativa se stejnou účinnou látkou a nižším doplatkem, která by pro mě byla medicínsky rovnocenná?"

Poslední tři slova jsou důležitá. Léčebný protokol se nemá stavět podle ceny, ale někdy existuje víc rovnocenných cest a lékař o vašem doplatku prostě neví.

### 3. Nekupujte celou stimulaci dopředu

Dávka se během stimulace často upravuje podle toho, jak folikuly rostou. Když nakoupíte všechno první den, může vám část léků zůstat nepoužitá. Kupujte po částech, ideálně tak, jak vám lékař dávkování potvrzuje na kontrolách.

### 4. Ptejte se na zbytky v peru

U per často zůstává na konci nedávkovatelný zbytek. Zeptejte se na klinice, jestli se dá kombinovat zbytek z jednoho pera s novým a jestli je to u vašeho přípravku bezpečné a přesné.

### 5. Zeptejte se, co s nepoužitými léky

Pokud cyklus skončí dřív, zůstanou vám neotevřená balení. Jestli se s nimi dá ještě něco dělat, rozhoduje vaše klinika a lékárna, ne aplikace a ne diskusní skupina. Zavolejte na kliniku a zeptejte se, co s nimi. Zapište si název přípravku, sílu, počet balení a exspiraci, ať máte při tom hovoru po ruce čísla.

## Čeho se držte dál

Léky na stimulaci se neprodávají a nekupují mezi pacientkami. Nabídky v diskusních skupinách vypadají lákavě a jsou rizikové: neznáte podmínky skladování, nevidíte, jestli přípravek nebyl rozmražen a znovu zchlazen, a nemáte žádnou možnost reklamace. Léky, které dostanete injekčně do těla, si zaslouží doložený původ.

## Co si zapsat

- název přípravku, sílu a počet balení,
- doplatek, který jste zaplatila, a v jaké lékárně,
- kolik léku zbylo na konci cyklu.

Po druhém cyklu z toho máte vlastní data a příští rozpočet se dělá o poznání snáz.

> Text je informativní a nenahrazuje péči vašeho lékaře ani konzultaci s lékárníkem. Léky nikdy neměňte, nevysazujte ani jinak nedávkujte bez domluvy s klinikou.`,
  },
  {
    id: 'pen-kryokonzervace-a-skladne',
    kind: 'article',
    title: 'Zamražení embryí a skladné: jednorázový poplatek a pak každý rok',
    excerpt:
      'Co přesně platíte při zamražení, co platíte každý další rok a co se stane, když na platbu zapomenete.',
    minutes: 7,
    phases: ['retrieval', 'embryo_culture', 'transfer', 'waiting_next_attempt', 'repeated_failure'],
    topics: ['finance', 'embryologie', 'klinika'],
    level: 'essential',
    hero: 'sky',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: OVERENI,
    body: `## Dvě různé platby, které se pletou

Za zamražená embrya platíte dvě odlišné věci a je dobré je od sebe oddělit hned na začátku.

**Kryokonzervace** je jednorázový úkon: embryo se metodou vitrifikace zamrazí a uloží. Platíte za práci embryologa, materiál a nosič. Orientačně jde o částku v řádu jednotek až nižších desítek tisíc korun za cyklus.

**Skladné** je opakovaný poplatek za to, že embrya dál existují a někdo se o ně stará. Účtuje se obvykle ročně, orientačně v řádu jednotek tisíc korun za rok. Platí se i v letech, kdy do léčby vůbec nevstupujete.

## Za co přesně platíte, se liší

Tohle je místo, kde se ceníky nejvíc rozcházejí:

- **Za cyklus.** Zamrazí se všechna embrya z jednoho odběru za jednu cenu. Při větším počtu embryí je to výhodné.
- **Za nosič nebo slámku.** Platíte za každý nosič zvlášť. Při pěti embryích na pěti nosičích je výsledek podstatně jiný.
- **Za embryo.** Nejméně častý, ale existuje.

Zeptejte se přímo: "Účtuje se zamražení za cyklus, za nosič, nebo za embryo? A kolik embryí dáváte na jeden nosič?"

Druhá část otázky má i praktický dopad. Pokud je na jednom nosiči víc embryí, rozmrazují se obvykle společně a nemůžete si vybrat jen jedno.

## Smlouva o skladování

Ke kryokonzervaci vždy podepisujete samostatnou smlouvu. Přečtěte si v ní tyhle body:

1. **Na jak dlouho se uzavírá** a jak se prodlužuje. Automaticky, nebo musíte něco podepsat?
2. **Kdy se platí** a jakým způsobem přijde výzva k platbě. E mailem? Poštou? Jen jednou?
3. **Co se stane při nezaplacení.** Jaká je lhůta, kolikrát vás klinika kontaktuje a co následuje potom.
4. **Kdo za embrya rozhoduje** a co je potřeba, aby se cokoli udělalo. U embryí vzniklých s partnerem se obvykle vyžaduje souhlas obou.
5. **Co se stane při rozchodu, rozvodu nebo úmrtí.** Nepříjemná část, ale právě tahle se nedá dořešit zpětně.
6. **Jestli lze embrya převézt na jinou kliniku**, za jakých podmínek a kolik to stojí.

## Co se opravdu stane, když nezaplatíte

Neplatí, že se embrya zlikvidují druhý den. Kliniky obvykle mívají postup, jak vás vyzvat, a dávají lhůtu. Konkrétní podmínky i následky nezaplacení jsou ale ve smlouvě, kterou jste podepsala, a mezi pracovišti se liší. Přečtěte si ji a zeptejte se přímo na klinice, co se v jejím případě děje. Je to rozhodnutí, které nemusí jít vzít zpět.

Nejčastější důvod, proč se to stane, není nezájem. Je to změněná adresa, změněný e mail nebo výzva, která spadla do spamu. V období, kdy se do léčby nechystáte, na embrya nemyslíte a klinika nemá jak se k vám dostat.

## Pět minut, které tomu předejdou

- Nastavte si v telefonu opakující se připomínku měsíc před datem výročí smlouvy.
- Nahlaste klinice každou změnu adresy, telefonu a e mailu, i když zrovna neléčíte.
- Přidejte adresu kliniky mezi důvěryhodné odesílatele, aby výzva nekončila ve spamu.
- Uložte si sken smlouvy do stejné složky jako ostatní dokumenty k léčbě.
- Zapište si, kolik embryí máte uložených a z jakého cyklu.

## Otázka, kterou položte ještě před odběrem

"Kolik mě bude stát zamražení a roční skladné, pokud mi zbydou embrya?"

Ptejte se dřív, než se rozhodujete o počtu přenesených embryí a o strategii cyklu. Skladné je jediná položka celé léčby, která běží dál i ve chvíli, kdy o léčbě roky nepřemýšlíte.

> Text má informativní charakter. Konkrétní podmínky určuje smlouva, kterou s klinikou podepisujete. Přečtěte si ji dřív, než ji podepíšete.`,
  },
  {
    id: 'pen-ket-vs-plny-cyklus',
    kind: 'article',
    title: 'Kryotransfer proti dalšímu plnému cyklu: rozdíl v penězích',
    excerpt:
      'Proč je zásoba zamražených embryí finančně tou nejzásadnější věcí, kterou si z jednoho odběru odnesete.',
    minutes: 7,
    phases: ['waiting_next_attempt', 'repeated_failure', 'ivf_prep', 'transfer', 'embryo_culture'],
    topics: ['finance', 'transfer', 'embryologie'],
    level: 'essential',
    hero: 'dawn',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.4,
    sources: OVERENI,
    body: `## Co u kryotransferu odpadá

Kryotransfer (KET) je přenos embrya, které už je zamražené. Proti plnému cyklu z něj vypadne skoro všechno, co je drahé:

- vysoké dávky stimulačních léků,
- opakované kontroly během stimulace,
- odběr vajíček a s ním anestezie a anesteziolog,
- oplození a kultivace v laboratoři,
- případné ICSI a genetické testování.

Zůstane příprava děložní sliznice (obvykle levnější léky, často tablety nebo náplasti), pár kontrol, rozmražení embrya a samotný transfer.

Proto vychází kryotransfer orientačně na zlomek ceny plného cyklu, řádově jednotky až nižší desítky tisíc korun proti desítkám tisíc. Přesný poměr vám dá ceník vaší kliniky, ale řádový rozdíl je stejný skoro všude.

## Co to znamená prakticky

Když z jednoho odběru vzejdou například tři embrya vhodná k zamražení, máte v ruce tři pokusy o transfer, aniž byste znovu procházela stimulací a odběrem. Finančně i fyzicky je to nesrovnatelné.

Právě proto je smysluplné dívat se na cyklus ne jako na "jeden pokus o těhotenství", ale jako na "kolik embryí z toho vzejde". Tenhle pohled mění i to, na co se ptáte při plánování.

## Otázky před stimulací, ne po ní

1. "Jaký je u mého věku a mé ovariální rezervy realistický odhad počtu embryí z jednoho odběru?"
2. "Doporučujete v mém případě strategii, kdy se všechna embrya zamrazí a transfer se odloží? Proč ano nebo proč ne?"
3. "Kolik stojí kryotransfer u vás a kolik stojí rozmražení?"
4. "Účtujete zamražení za cyklus, nebo za nosič?"
5. "Započítává se kryotransfer do počtu cyklů hrazených pojišťovnou?"

Poslední otázku si nechte zodpovědět písemně nebo si odpověď aspoň zapište i s datem.

## Co si u toho nemalovat

Zamražená embrya nejsou uložené jistoty. Platí, že:

- **ne každé embryo přežije rozmražení**, i když je moderní vitrifikace v tomhle ohledu velmi dobrá,
- **ne každý transfer skončí těhotenstvím**, ať jde o čerstvý cyklus nebo o kryotransfer,
- **počet embryí sám o sobě neurčuje výsledek**, roli hraje jejich kvalita, váš věk v době odběru a řada dalších faktorů, které záleží na individuální situaci.

Zásoba embryí vám tedy nekupuje výsledek. Kupuje vám pokusy, které nemusíte platit celou cenou a které si vaše tělo nemusí znovu odpracovat.

## Jak s tím počítat v rozpočtu

Místo částky "za jeden cyklus" si spočítejte dvě čísla:

- **Vstupní náklad**: plný cyklus včetně léků, laboratoře a zamražení.
- **Náklad na každý další pokus**: kryotransfer plus léky na přípravu sliznice plus roční skladné.

Rozpočet postavený na těchto dvou číslech vydrží mnohem déle než rozpočet postavený na jednom součtu. A dá vám mnohem klidnější podklad pro rozhodnutí, kolik pokusů je pro vás únosných.

> Text má informativní charakter. Postup, který je vhodný pro vás, i konkrétní ceny vám sdělí vaše klinika.`,
  },
  {
    id: 'pen-darcovstvi-ceny',
    kind: 'article',
    title: 'Darovaná vajíčka, spermie a embrya: co to stojí',
    excerpt:
      'Cenové rozdíly mezi třemi variantami dárcovství, co bývá v ceně a jaké otázky položit dřív, než se rozhodnete.',
    minutes: 8,
    phases: ['thinking', 'ivf_prep', 'repeated_failure', 'waiting_next_attempt'],
    topics: ['finance', 'darcovstvi', 'klinika'],
    level: 'deep',
    hero: 'blush',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: OVERENI,
    body: `## Za co se u dárcovství platí

V České republice je dárcovství pohlavních buněk anonymní a dárce za buňky nedostává odměnu ve smyslu prodeje. Dostává náhradu účelně vynaložených výdajů a ušlého výdělku. Cena, kterou platíte vy, tedy nejde "za vajíčka". Jde za práci kolem nich.

U darovaných vajíček to v praxi znamená: vyšetření a genetický screening dárkyně, její stimulace a léky, odběr, laboratorní zpracování, náhrada výdajů, oplození a kultivace, transfer. Proto je to nejdražší varianta dárcovství.

## Řádové rozdíly mezi variantami

- **Darované spermie** jsou nejlevnější položka. Jde o cenu za dávku ze spermobanky, orientačně v řádu jednotek až nižších desítek tisíc korun za dávku, plus cena samotného výkonu (inseminace nebo IVF).
- **Darovaná vajíčka** vycházejí orientačně na vyšší desítky tisíc až nižší stovky tisíc korun za celý program, včetně laboratoře a transferu.
- **Darované embryo** bývá nejlevnější z těchto tří, protože embryo už existuje a odpadá stimulace i oplození. Orientačně jde o částku výrazně nižší než u darovaných vajíček.

Všechna tři čísla jsou jen řádová představa. Konkrétní cenu dá jedině klinika a liší se podle programu, počtu garantovaných buněk a toho, co je v balíčku.

## Co bývá v ceně a co ne

Zeptejte se konkrétně na tohle:

1. **Kolik oocytů program garantuje** a co se stane, když jich dárkyně dá méně.
2. **Co když se žádné neoplodní.** Vrací se část ceny? Máte nárok na opakování?
3. **Je v ceně ICSI?** U darovaných vajíček se používá téměř vždy.
4. **Je v ceně kultivace do pátého dne** a zamražení zbylých embryí?
5. **Je v ceně léčba pro vás**, tedy příprava sliznice a léky?
6. **Kolik stojí druhý transfer** z embryí, která z programu zbydou.

Balíček s vyšší cenou, ve kterém je zamražení a jeden kryotransfer navíc, může být ve výsledku levnější než nižší cena bez nich.

## Úhrada z pojištění

Cyklus s darovanými gametami může být za určitých podmínek hrazený z veřejného zdravotního pojištění podobně jako cyklus s vlastními buňkami, ale samotné dárcovství, tedy náklady spojené s dárcem a se získáním buněk, hrazené obvykle není. Podmínky se liší a mění.

Zeptejte se přímo na klinice: "Které části tohoto programu jdou z pojištění a které si platím sama?" A pak tutéž otázku položte na infolince své pojišťovny.

## Otázky, které nejsou o penězích, ale rozhodují o nich

- **Jak dlouho se čeká na dárkyni**, která odpovídá zadání? Delší čekání znamená delší dobu, kdy platíte skladné za jiné věci a kdy stárnou vaše vyšetření, která budete muset opakovat.
- **Podle čeho se dárkyně vybírá?** Krevní skupina, fyzické znaky, vzdělání? Ptejte se, co je v základní ceně a co je příplatek.
- **Co se stane, když dárkyně z programu odstoupí?** Kdy a kolik se vrací.
- **Sdílené programy.** Některé kliniky nabízejí program, kde se buňky od jedné dárkyně sdílí mezi dvě příjemkyně za nižší cenu, výměnou za nižší počet buněk. Zeptejte se, jestli takový program mají.

## Poslední poznámka

Rozhodnutí o dárcovství není primárně finanční, i když se v tomhle textu díváme na peníze. Je to rozhodnutí, které má svou psychickou a vztahovou stránku a zaslouží si čas i případně podporu odborníka. Cenu si zjistěte, aby vám nestála v cestě jako neznámá. Rozhodujte se ale podle celku, ne podle ceníku.

> Text má informativní charakter, nejde o právní ani finanční poradenství. Podmínky, ceny a dostupnost programů si ověřte přímo na klinice.`,
  },
  {
    id: 'pen-skryte-naklady',
    kind: 'article',
    title: 'Náklady, na které se v rozpočtu zapomíná',
    excerpt:
      'Cesty, ubytování, ušlá mzda, opakovaná vyšetření a další položky, které v ceníku kliniky nikdy nenajdete.',
    minutes: 7,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'two_week_wait', 'waiting_next_attempt'],
    topics: ['finance', 'sebepece', 'psychika'],
    level: 'essential',
    hero: 'sand',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: OVERENI,
    body: `## Proč rozpočet nikdy nevyjde

Ceník kliniky popisuje výkony. Váš rozpočet ale platí celý život kolem těch výkonů. Rozdíl mezi tím, co jste plánovala, a tím, co jste skutečně utratila, obvykle nedělá jedna velká položka. Dělá ho patnáct malých.

Tady jsou ty, které se objevují nejčastěji.

## Doprava, čas a parkování

Během stimulace jezdíte na kontroly obvykle každé dva až tři dny, někdy častěji. Pokud máte kliniku ve svém městě, jsou to jízdenky a hodiny. Pokud dojíždíte, jsou to pohonné hmoty, dálniční poplatky a parkování u kliniky, které bývá zpoplatněné.

Spočítejte si počet cest za cyklus a vynásobte je svou obvyklou cenou za cestu. To číslo bývá překvapivé.

## Ubytování

Když je klinika daleko, řešíte noc před odběrem a někdy i noc před transferem. Přidejte i jídlo mimo domov a případně partnera, který musí být na klinice tentýž den kvůli odevzdání vzorku.

## Ušlá mzda a vyčerpaná dovolená

Kontroly bývají v ranních hodinách. Odběr znamená den mimo práci, někdy víc. Pokud pracujete na dohodu, jako OSVČ nebo ve směnném provozu, jde o přímý výpadek příjmu, ne jen o dovolenou.

Vyčerpaná dovolená má navíc druhý náklad: v roce, kdy podstupujete léčbu, vám nezbude na odpočinek.

## Opakovaná vyšetření

Řada vyšetření má omezenou platnost. Pokud se cyklus odloží nebo se čeká na termín, může vám vypršet krevní obraz, infekční sérologie, cytologie, spermiogram partnera. Opakují se a leckdy si je platíte.

Ptejte se při každém vyšetření: "Jak dlouho tenhle výsledek platí?"

## Doplňky stravy a příprava

Kyselina listová, vitamin D, koenzym Q10, inositol, omega 3, přípravky pro partnera. Jednotlivě stokoruny měsíčně, v součtu za rok tisíce. Berte jen to, co vám doporučí lékař, a ptejte se, jestli je konkrétní doplněk ve vaší situaci potřebný. Ne každý přípravek, který se v souvislosti s plodností prodává, má u vás smysl.

## Psychická podpora

Psychoterapie je pro řadu žen v léčbě to nejlepší investované peníze, a zároveň položka, se kterou nikdo dopředu nepočítá. Sezení stojí orientačně v řádu stovek až nižších tisíců korun a smysl mívá pravidelnost, ne jedna návštěva.

Zeptejte se: jestli má vaše klinika psychologa v týmu a za jakých podmínek, jestli váš zaměstnavatel nemá program podpory zaměstnanců a jestli je terapeut smluvní s vaší pojišťovnou.

## Věci, které se objeví jen někdy

- **Zrušený cyklus.** Část nákladů už vznikla: léky jsou koupené, kontroly proběhly. Zeptejte se dopředu, co se v takovém případě platí.
- **Hlídání starších dětí** v den odběru a při kontrolách.
- **Kopie dokumentace a potvrzení** pro zaměstnavatele nebo pro druhou kliniku.
- **Nákup nového oblečení**, protože po stimulaci vám na pár týdnů nesedí to staré. Zní to jako maličkost, ale rozpočtu se to dotkne.

## Co s tím udělat

1. Přidejte si do rozpočtu položku "ostatní" ve výši zhruba pětiny nákladů na cyklus.
2. Schovávejte účtenky do jedné složky, fyzické i v telefonu.
3. Po prvním cyklu si udělejte skutečný součet. Druhý rozpočet už bude realistický.
4. Domluvte se s partnerem předem, z čeho se tyhle drobnosti platí, aby se o nich nemuselo rozhodovat ve dnech, kdy jste oba unavení.

> Text má informativní charakter a není finanční poradenství. Konkrétní ceny výkonů vám sdělí vaše klinika.`,
  },
  {
    id: 'pen-volno-a-prace',
    kind: 'article',
    title: 'Volno, neschopenka a práce během léčby',
    excerpt:
      'Jak si zařídit dny mimo práci, co obnáší pracovní neschopnost a proč se vyplatí mít plán dřív, než začne stimulace.',
    minutes: 7,
    phases: ['ivf_prep', 'stimulation', 'retrieval', 'transfer', 'two_week_wait'],
    topics: ['finance', 'psychika', 'klinika'],
    level: 'deep',
    hero: 'taupe',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    sources: [
      'Pravidla nemocenského pojištění a náhrady mzdy se mění. Ověřte si aktuální podmínky u své mzdové účtárny a u České správy sociálního zabezpečení.',
      'O vystavení pracovní neschopnosti rozhoduje vždy lékař podle vašeho zdravotního stavu.',
      'Aktualizováno 7. 8. 2026.',
    ],
    body: `## Kolik dnů si vlastně potřebujete vzít

Většina léčby probíhá ambulantně a nevyžaduje volno na celé týdny. Reálně jde o tyhle body:

- **Kontroly během stimulace**: obvykle několik návštěv, každá spíš ráno, každá na jednu až dvě hodiny včetně čekání.
- **Odběr vajíček**: celý den. Je při něm obvykle anestezie, takže po něm nesmíte řídit a pracovat se dá jen výjimečně.
- **Transfer**: obvykle stačí několik hodin, ale řada žen si bere celý den.
- **Dny po odběru**: někdy stačí jeden den, jindy je potřeba víc, zvlášť když je břicho citlivé.

Naplánovat se to dá jen zhruba, protože přesné termíny se řídí tím, jak rostou folikuly. To je pro zaměstnavatele nejtěžší část a stojí za to říct mu ji dopředu.

## Čtyři možnosti, jak to vyřešit

1. **Dovolená.** Nejjednodušší, ale vyčerpá vám rok.
2. **Náhradní volno nebo pružná pracovní doba.** Ranní kontrola se často dá napracovat týž den odpoledne.
3. **Práce z domova.** V dny, kdy vám není dobře, ale nejste neschopná práce.
4. **Pracovní neschopnost.** O jejím vystavení rozhoduje lékař podle vašeho stavu, ne podle vašeho přání. Není to nárok, který si objednáte.

## Co je dobré vědět o neschopence

Nemocenská se počítá z redukovaného denního vyměřovacího základu a je znatelně nižší než vaše čistá mzda. Kolik to bude přesně, spočítá kalkulačka České správy sociálního zabezpečení nebo vám to řekne mzdová účtárna. Rozdíl mezi mzdou a nemocenskou započítejte do rozpočtu cyklu jako reálný náklad.

Pokud jste OSVČ, nárok na nemocenské vzniká jen tehdy, když si platíte dobrovolné nemocenské pojištění, a to za splnění podmínky doby účasti. Pokud si ho neplatíte, dny mimo práci jsou pro vás čistý výpadek. Tuhle věc si zjistěte dřív, než začnete cyklus plánovat.

## Co zaměstnavatel vědět nemusí

Zaměstnavatel se z rozhodnutí o dočasné pracovní neschopnosti nedozví vaši diagnózu. Nemá právo ji po vás vyžadovat a vy nemáte povinnost mu ji sdělit.

Zda a komu o léčbě řeknete, je vaše rozhodnutí a nemá jednu správnou odpověď. Někomu otevřenost výrazně uleví a nadřízený pak s termíny pracuje. Někdo má dobré důvody nic neříkat. Obojí je legitimní.

Pokud se rozhodnete něco říct, osvědčuje se věcná formulace bez podrobností: "Budu několik týdnů docházet na ranní vyšetření, termíny se budou upřesňovat den dopředu. Potřebuji se domluvit, jak to vyřešíme."

## Praktické kroky

1. Zjistěte si, kolik dnů dovolené vám zbývá a kolik si můžete vzít neplaceného volna.
2. Zeptejte se v účtárně, o kolik se vám sníží příjem za týden neschopenky.
3. Domluvte si s nadřízeným rámec dřív, než začne stimulace, ne první den kontrol.
4. Zapište si do kalendáře orientační okno odběru, jakmile ho na klinice zmíní, a rezervujte si ho.
5. Počítejte s tím, že se termín posune. Rezervu si nechte na obě strany.

> Text má informativní charakter, nejde o právní ani mzdové poradenství. Aktuální pravidla si ověřte u své mzdové účtárny a u příslušné správy sociálního zabezpečení. O neschopnosti rozhoduje vždy lékař.`,
  },
  {
    id: 'pen-chk-smlouva-s-klinikou',
    kind: 'checklist',
    title: 'Než podepíšu smlouvu s klinikou: otázky na peníze',
    excerpt:
      'Čtrnáct otázek, které se špatně doptávají zpětně a dobře se ptají teď, dokud jste ještě nic nepodepsala.',
    minutes: 6,
    phases: ['thinking', 'ivf_prep', 'waiting_next_attempt', 'repeated_failure'],
    topics: ['finance', 'klinika'],
    level: 'essential',
    hero: 'dusk',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.5,
    sources: OVERENI,
    checklist: [
      {
        id: 'pen-chk-sml-cenik',
        text: 'Vyžádat si platný písemný ceník, ne ústní odhad',
        hint: 'Zeptejte se i na datum, od kdy ceník platí a jak dlouho je závazný.',
        group: 'Cena a co je v ní',
      },
      {
        id: 'pen-chk-sml-obsah',
        text: 'Nechat si vypsat, co konkrétně je v základní ceně cyklu',
        hint: 'Zajímá vás hlavně: anestezie, počet ultrazvukových kontrol, transfer, délka kultivace.',
        group: 'Cena a co je v ní',
      },
      {
        id: 'pen-chk-sml-pojistovna',
        text: 'Ověřit, že klinika má smlouvu právě s mojí zdravotní pojišťovnou',
        hint: 'Ptejte se na svou pojišťovnu jménem, ne obecně na to, jestli mají smlouvy.',
        group: 'Cena a co je v ní',
      },
      {
        id: 'pen-chk-sml-hrazene',
        text: 'Zjistit, které položky mi jdou z pojištění a které si platím sama',
        hint: 'Tutéž otázku pak položte na infolince pojišťovny a odpovědi porovnejte.',
        group: 'Cena a co je v ní',
      },
      {
        id: 'pen-chk-sml-icsi',
        text: 'Zeptat se na cenu ICSI a na to, kdy se o něm rozhoduje',
        hint: 'Rozhodnutí padá často až podle vzorku v den odběru. Znejte cenu předem.',
        group: 'Doplatky a nadstandard',
      },
      {
        id: 'pen-chk-sml-nadstandard',
        text: 'Nechat si u každé nabízené doplňkové metody říct cenu i důvod',
        hint: 'Otázka zní: doporučujete mi to kvůli něčemu v mém nálezu, nebo to nabízíte všem?',
        group: 'Doplatky a nadstandard',
      },
      {
        id: 'pen-chk-sml-leky',
        text: 'Získat odhad nákladů na léky pro můj plánovaný protokol',
        hint: 'Klinika ho dá orientačně. Přesný doplatek řekne až lékárna podle receptu.',
        group: 'Doplatky a nadstandard',
      },
      {
        id: 'pen-chk-sml-zamrazeni',
        text: 'Zjistit, jestli se zamražení účtuje za cyklus, za nosič, nebo za embryo',
        hint: 'Při větším počtu embryí je rozdíl mezi těmito způsoby podstatný.',
        group: 'Zamražení a skladné',
      },
      {
        id: 'pen-chk-sml-skladne',
        text: 'Zeptat se na roční skladné a na to, jak a kdy přijde výzva k platbě',
        hint: 'Ověřte, na jaký kontakt výzva chodí, a nahlaste změnu adresy i e mailu.',
        group: 'Zamražení a skladné',
      },
      {
        id: 'pen-chk-sml-neplaceni',
        text: 'Přečíst si, co se stane při nezaplacení skladného a jaká je lhůta',
        hint: 'Tahle věta ve smlouvě rozhoduje o osudu vašich embryí. Přečtěte si ji celou.',
        group: 'Zamražení a skladné',
      },
      {
        id: 'pen-chk-sml-ket',
        text: 'Zjistit cenu kryotransferu a rozmražení',
        hint: 'Zeptejte se i na to, jestli se kryotransfer počítá do hrazených cyklů.',
        group: 'Zamražení a skladné',
      },
      {
        id: 'pen-chk-sml-zruseni',
        text: 'Zeptat se, co se platí, když se cyklus zruší před odběrem',
        hint: 'Ptejte se zvlášť na zrušení kvůli slabé odpovědi a zvlášť na zrušení z vaší strany.',
        group: 'Zrušení a storno',
      },
      {
        id: 'pen-chk-sml-storno',
        text: 'Přečíst si storno podmínky a lhůty pro zrušení termínu',
        group: 'Zrušení a storno',
      },
      {
        id: 'pen-chk-sml-kopie',
        text: 'Odejít s podepsanou kopií smlouvy a uložit si ji k ostatním dokumentům',
        hint: 'Vyfoťte si ji rovnou do telefonu. Papír se ztrácí.',
        group: 'Papíry',
      },
    ],
    body: `## Proč se ptát před podpisem

Po podpisu se ptáte na totéž, jen z horší pozice a obvykle ve chvíli, kdy jste unavená a chcete už jen začít. Před podpisem je klinika stranou, která vám odpovídá. To je jediný rozdíl a je velký.

Nic z toho, na co se tady ptáte, není nezdvořilé. Je to běžná otázka na cenu služby, kterou si kupujete.

## Jak s tím seznamem pracovat

Vytiskněte si ho nebo si ho otevřete v telefonu a projděte na konzultaci shora dolů. Odpovědi si zapisujte rovnou, včetně data a jména toho, kdo je řekl. Za tři měsíce si nebudete pamatovat, co přesně vám kdo řekl.

Body, na které vám neodpoví hned, si označte a vraťte se k nim. Odpověď typu "to se uvidí" je u ceny nedostatečná, i když u léčebného postupu bývá poctivá.

## Jedna věta, kterou si nechte na konec

"Je něco, co se běžně doplácí a co jsme teď nezmínili?"

Tahle otázka vytáhne položky, na které se nikdo neptá, protože o nich neví.

> Seznam má informativní charakter, není právní ani finanční poradenství. Závazné jsou vždy podmínky uvedené ve smlouvě a v platném ceníku kliniky.`,
  },
  {
    id: 'pen-chk-rozpocet-na-cyklus',
    kind: 'checklist',
    title: 'Jak si postavit rozpočet na jeden cyklus',
    excerpt:
      'Postup, po kterém máte na papíře reálné číslo místo mlhy, a víte, kolik pokusů je pro vás únosných.',
    minutes: 6,
    phases: ['thinking', 'ivf_prep', 'waiting_next_attempt', 'repeated_failure'],
    topics: ['finance', 'vztah', 'partner'],
    level: 'essential',
    hero: 'pearl',
    author: 'Gabi',
    publishedOn: '2026-08-07',
    boost: 0.4,
    sources: OVERENI,
    checklist: [
      {
        id: 'pen-chk-roz-vykon',
        text: 'Zapsat cenu výkonu podle platného ceníku kliniky',
        hint: 'Použijte to, co je v základní ceně. Doplňky přidáte samostatně níž.',
        group: 'Klinika',
      },
      {
        id: 'pen-chk-roz-lab',
        text: 'Přičíst laboratorní položky: ICSI, prodloužená kultivace, zamražení',
        hint: 'Počítejte s tím, že ICSI se může použít, i když se dnes neplánuje.',
        group: 'Klinika',
      },
      {
        id: 'pen-chk-roz-leky',
        text: 'Přičíst odhad nákladů na léky včetně doplatků',
        hint: 'Orientační odhad vám dá klinika, přesný doplatek až lékárna podle receptu.',
        group: 'Klinika',
      },
      {
        id: 'pen-chk-roz-genetika',
        text: 'Rozhodnout, jestli počítám s genetickým testováním, a přičíst ho',
        hint: 'Má obvykle dvě části: základní poplatek plus cenu za každé testované embryo.',
        group: 'Klinika',
        optional: true,
      },
      {
        id: 'pen-chk-roz-skladne',
        text: 'Přičíst roční skladné za embrya, která mohou zbýt',
        hint: 'Tahle položka běží dál i v letech, kdy do léčby nevstupujete.',
        group: 'Klinika',
      },
      {
        id: 'pen-chk-roz-cesty',
        text: 'Spočítat počet cest na kliniku a vynásobit cenou jedné cesty',
        hint: 'Během stimulace jezdíte obvykle každé dva až tři dny. Přidejte parkování.',
        group: 'Kolem léčby',
      },
      {
        id: 'pen-chk-roz-volno',
        text: 'Vyčíslit ušlý příjem: dovolená, neplacené volno nebo rozdíl při neschopence',
        hint: 'U OSVČ počítejte celý výpadek, pokud si neplatíte nemocenské pojištění.',
        group: 'Kolem léčby',
      },
      {
        id: 'pen-chk-roz-ubytovani',
        text: 'Přičíst ubytování a jídlo, pokud dojíždím na dálku',
        group: 'Kolem léčby',
        optional: true,
      },
      {
        id: 'pen-chk-roz-doplnky',
        text: 'Přičíst doplňky stravy a přípravu partnera na tři měsíce',
        hint: 'Berte jen to, co doporučil lékař. Zbytek do rozpočtu ani do těla nepatří.',
        group: 'Kolem léčby',
      },
      {
        id: 'pen-chk-roz-podpora',
        text: 'Zvážit psychoterapii a započítat ji jako pravidelnou, ne jednorázovou položku',
        group: 'Kolem léčby',
        optional: true,
      },
      {
        id: 'pen-chk-roz-rezerva',
        text: 'Přidat rezervu ve výši zhruba pětiny celkové částky',
        hint: 'Pokryje opakovaná vyšetření, potvrzení a věci, které se objeví jen někdy.',
        group: 'Rezerva a strop',
      },
      {
        id: 'pen-chk-roz-ket',
        text: 'Spočítat zvlášť cenu dalšího pokusu z kryotransferu',
        hint: 'Kryotransfer plus léky na sliznici plus skladné. Tohle číslo je vaše druhá věta rozpočtu.',
        group: 'Rezerva a strop',
      },
      {
        id: 'pen-chk-roz-strop',
        text: 'Domluvit se s partnerem, kde je náš finanční strop a odkud peníze půjdou',
        hint: 'Udělejte to v klidný den, ne po neúspěšném cyklu a ne v den odběru.',
        group: 'Rezerva a strop',
      },
      {
        id: 'pen-chk-roz-slozka',
        text: 'Založit jednu složku na účtenky a faktury, fyzickou i v telefonu',
        hint: 'Po prvním cyklu z ní uděláte skutečný součet a druhý rozpočet už bude přesný.',
        group: 'Rezerva a strop',
      },
    ],
    body: `## Dvě čísla místo jednoho

Rozpočet na léčbu se nejčastěji rozpadne proto, že stojí na jednom čísle: "kolik stojí cyklus". Postavte ho radši na dvou.

**První číslo** je plný cyklus: výkon, laboratoř, léky, zamražení a všechno kolem. Je to vaše vstupní investice.

**Druhé číslo** je další pokus z už zamraženého embrya: kryotransfer, léky na přípravu sliznice, skladné. Je řádově nižší a rozhoduje o tom, kolik pokusů je pro vás reálných.

Když máte obě čísla, umíte odpovědět na otázku, která vás stejně dřív nebo později potká: kolik pokusů si můžeme dovolit, aniž bychom se dostali do situace, kterou už neuneseme.

## Jak seznam projít

Vezměte papír nebo tabulku a jděte položku po položce. U každé napište číslo, i kdyby to byl odhad. Prázdné pole je horší než odhad, protože se na něj zapomene.

Body označené jako nepovinné se vás týkat nemusí. Přeskočte je bez výčitek.

## Na co si dát pozor

- **Nepočítejte na jeden cyklus, počítejte na rok.** Jednorázová čísla klamou.
- **Rezervu nastavte dřív, než ji budete potřebovat.** Doplňovat rozpočet v průběhu cyklu je nepříjemné.
- **Nepodepisujte úvěr pod tlakem času.** Rozhodnutí o penězích dělejte v klidný den.
- **Strop si stanovte na začátku a napište si ho.** Ne proto, abyste se omezovala, ale abyste se o něm nemusela dohadovat ve chvíli, kdy budete oba vyčerpaní.

## A jedna věta na závěr

Finanční strop, který si nastavíte, není hranice vaší odhodlanosti. Je to ochrana toho, co máte kromě léčby. Rozhodnutí léčbu v určitém bodě ukončit nebo pauzu prodloužit je stejně platné rozhodnutí jako pokračovat a záleží jen na vás a vaší individuální situaci.

> Seznam má informativní charakter a není finanční poradenství. Konkrétní ceny vám dá jedině vaše klinika.`,
  },
]

export const pack: ContentPack = { items }
