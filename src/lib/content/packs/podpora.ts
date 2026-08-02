import type { ContentPack } from '../types'

/**
 * Podpůrné metody.
 *
 * Balík odpovídá na otázku, kterou dostane každá klinika desetkrát denně:
 * „a co ještě můžu udělat sama?“ Odpověď se dnes hledá po diskusních fórech,
 * kde vedle sebe stojí věc s desítkami randomizovaných studií a věc, kterou
 * někdo slyšel od kamarádky.
 *
 * PRAVIDLA, KTERÁ TENHLE BALÍK DRŽÍ:
 *
 *  1. U každé metody se říká, JAK SILNÝ důkaz za ní stojí. A když je slabý,
 *     řekne se to rovnou, ne až v poslední větě.
 *  2. Žádné dávkování. Nikde. Ani u volně prodejných doplňků: interakce
 *     s protokolem a se štítnou žlázou určuje lékař, ne aplikace.
 *  3. Žádné sliby o výsledku. „Zvyšuje šanci“ tu nezazní o ničem, co to
 *     nemá doložené. A i tam se to říká jako „v datech se ukazuje“.
 *  4. Srovnávací tabulky mají vždycky sloupec, co metoda NEUMÍ. Bez něj
 *     je to reklama.
 *
 * Metodika hodnocení důkazů je popsaná v článku `pod-jak-cist-evidenci`
 * a odkazuje se na ni ze všech ostatních.
 */

const REVIEW_REPRO = 'Odborně garantováno – reprodukční medicína'
const REVIEW_NUTRI = 'Odborně garantováno – klinická výživa'
const REVIEW_PHYSIO = 'Odborně garantováno – fyzioterapie'
const REVIEW_PSY = 'Odborně garantováno – perinatální psychologie'

/** Zdroje, na které se odkazuje víc článků. Vždy jde o doporučené postupy. */
const SRC_ESHRE = 'ESHRE – doporučené postupy pro ovariální stimulaci a asistovanou reprodukci'
const SRC_ASRM = 'ASRM – stanoviska Practice Committee'
const SRC_NICE = 'NICE – Fertility problems: assessment and treatment (CG156)'
const SRC_COCHRANE = 'Cochrane Database of Systematic Reviews – přehledy k asistované reprodukci'
const SRC_SZU = 'Státní zdravotní ústav / Ministerstvo zdravotnictví ČR – doporučení pro plánované těhotenství'

export const pack: ContentPack = {
  items: [
    // ------------------------------------------------------------------
    {
      id: 'pod-jak-cist-evidenci',
      kind: 'article',
      title: 'Jak číst důkazy: proč jedna studie nic neznamená',
      excerpt:
        'Než začnete číst o doplňcích a metodách, vyplatí se vědět, čím se liší „pomohlo to mojí kamarádce“ od „doporučuje to odborná společnost“.',
      body: `## Proč tenhle text stojí na začátku

V okamžiku, kdy začne léčba, se na vás sype rady ze všech stran. Část z nich stojí na desítkách randomizovaných studií. Část na jedné malé práci se čtyřiceti ženami. A část na ničem.

Rozeznat to od sebe není nedůvěra k lidem, kteří to myslí dobře. Je to způsob, jak neutratit peníze a energii za věci, které nikam nevedou. A naopak neminout to, co má oporu.

## Čtyři stupně, které v téhle aplikaci používáme

U každé metody najdete jeden z těchto stupňů. Znamenají tohle:

| Stupeň | Co za tím stojí | Jak s tím zacházet |
| --- | --- | --- |
| **Silný** | Opakované randomizované studie a shoda odborných společností. | Součást doporučených postupů. Má smysl se na to zeptat, pokud to nepadlo. |
| **Střední** | Několik studií ukazuje stejným směrem, ale liší se kvalitou nebo velikostí. | Rozumné probrat s lékařem. Nikoli povinnost. |
| **Slabý** | Malé studie, rozporuplné výsledky, nebo jen mechanismus „dává to smysl“. | Nemá cenu na tom stavět rozhodnutí. Škodit obvykle nebude. |
| **Nedostatečný** | Chybí data, nebo existují jen u jiné skupiny pacientek. | „Nevíme“ není totéž co „nefunguje“. Ale ani „funguje“. |

## Tři věty, které mají rozsvítit kontrolku

Když na něco takového narazíte, zpomalte:

- **„Zaručeně zvýší šanci na otěhotnění.“** V reprodukční medicíně nezaručuje nic nikdo. Ani nejlepší klinika s nejlepším embryem.
- **„Lékaři o tom nechtějí mluvit.“** Odborné společnosti své postupy zveřejňují, včetně toho, kde si nejsou jisté. Utajená metoda neexistuje.
- **„Je to přírodní, takže to nemůže uškodit.“** Může. Bylinné přípravky ovlivňují hormonální hladiny a některé interagují s léky v protokolu.

## Co „statisticky významné“ neznamená

Neznamená to „velký rozdíl“. Znamená to jen, že rozdíl pravděpodobně nevznikl náhodou. Studie na deseti tisících lidí najde jako významný i rozdíl, který v praxi nikdo nepozná.

Proto se ptejte na druhé číslo: **o kolik**. Rozdíl dvou procentních bodů je něco jiného než rozdíl patnácti. A obojí může být „statisticky významné“.

## Rozdíl mezi „souvisí“ a „způsobuje“

Ženy, které víc spí, mají v některých pracích lepší výsledky. To ale samo o sobě neznamená, že spánek ty výsledky způsobil. Může to být tím, že mají méně stresující práci, lepší zázemí, nebo méně jiných nemocí.

Tohle je nejčastější důvod, proč se novinové titulky rozcházejí s doporučenými postupy.

## Nejčastější otázky

**Když má něco jen slabý důkaz, mám to vynechat?**
Ne nutně. Slabý důkaz znamená, že to nemůžete čekat jako jistotu, ne že je to k ničemu. Rozhodujícím faktorem bývá cena, bezpečnost a to, jestli vám to nebere energii, kterou potřebujete jinde.

**Proč mi jedna klinika doporučí něco a druhá to zamítne?**
Protože v šedé zóně mezi „silný důkaz“ a „nedostatečný“ je hodně místa na odbornou úvahu. Legitimní otázka do ordinace zní: *„Podle čeho jste se rozhodli zrovna takhle?“*

**Kde si to můžu ověřit sama?**
Doporučené postupy zveřejňují ESHRE (evropská) a ASRM (americká) společnost, britský NICE a v přehledové podobě databáze Cochrane. Jsou psané pro odborníky, ale shrnutí bývají čitelná.

> Tenhle text ani nic dalšího v aplikaci nenahrazuje konzultaci. Slouží k tomu, abyste se v ordinaci uměla zeptat přesněji.`,
      minutes: 7,
      phases: [],
      topics: ['klinika', 'vysledky'],
      level: 'deep',
      hero: 'linen',
      reviewedBy: REVIEW_REPRO,
      sources: [SRC_ESHRE, SRC_ASRM, SRC_NICE, SRC_COCHRANE],
      publishedOn: '2026-07-31',
      boost: 0.3,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-doplnky-srovnani',
      kind: 'article',
      title: 'Doplňky stravy při IVF: co má oporu v datech a co ne',
      excerpt:
        'Deset nejčastěji doporučovaných doplňků vedle sebe. U každého, jak silný důkaz za ním stojí, komu se zvažuje a co neumí.',
      body: `## Než začnete cokoli kupovat

Dvě věci platí bez výjimky.

**Za prvé: dávkování tady nenajdete.** Ne proto, že bychom ho tajili, ale protože se odvíjí od vašich hodnot, diagnózy, štítné žlázy a od toho, co už berete. Sestavit ho může jen člověk, který to má před sebou.

**Za druhé: doplněk není lék.** V Česku i v EU se doplňky stravy neschvalují jako léky. Nemusí prokazovat účinnost a kontrola složení je volnější. Obsah balení se proto může lišit od etikety. A to je důvod kupovat od výrobců, kteří dokládají laboratorní rozbory šarží.

Jak se stupně důkazů čtou, vysvětluje samostatný článek o čtení evidence.

## Srovnání

| Doplněk | Důkaz | Kdy se zvažuje | Co neumí |
| --- | --- | --- | --- |
| **Kyselina listová (folát)** | Silný | Plošně před početím i v prvním trimestru. Prevence rozštěpových vad. | Neovlivňuje kvalitu vajíček ani úspěšnost transferu. |
| **Vitamin D** | Střední | Při prokázaném nedostatku, který je v ČR v zimě běžný. | Doplňovat naslepo bez odběru nemá oporu. |
| **Jód** | Střední | Před početím a v těhotenství, funkce štítné žlázy plodu. | Nadbytek škodí stejně jako nedostatek, proto odběr. |
| **Omega-3 (DHA/EPA)** | Střední | Nižší příjem ryb; vývoj mozku plodu. | Data o vlivu na otěhotnění jsou slabá. |
| **Koenzym Q10** | Slabý až střední | Nízká ovariální rezerva, vyšší věk. Zkoumá se vliv na energetiku vajíčka. | Nezvětší počet vajíček, který určuje rezerva. |
| **Myo-inositol** | Střední (jen u PCOS) | PCOS a inzulinová rezistence. Kvalita ovulace. | Mimo PCOS je přínos nejasný. |
| **DHEA** | Slabý a sporný | Výhradně na předpis u nízké rezervy, pod kontrolou hladin. | Není volně prodejný doplněk. Má hormonální účinky. |
| **Melatonin** | Slabý | Zkoumá se jako antioxidant ve folikulární tekutině. | Ovlivňuje spánkový rytmus, nepatří k samovolnému užívání. |
| **N-acetylcystein** | Slabý | Zkoumá se u PCOS. | Nejde o standardní součást protokolu. |
| **Selen, zinek, vitamin E** | Nedostatečný (u žen) | U mužského faktoru se zkoumají cíleněji. | Plošné užívání „pro jistotu“ oporu nemá. |

## Co z té tabulky plyne

Zaprvé: **položky se silným důkazem jsou dvě a jsou levné.** Kyselina listová a doplnění vitaminu D podle odběru. Většina toho, co stojí nejvíc, sedí ve slabé části tabulky.

Zadruhé: **nejlepší kandidáti jsou cílení.** Myo-inositol dává smysl u PCOS, koenzym Q10 se zvažuje u nízké rezervy. Univerzální „balíček pro plodnost“ je marketingová kategorie, ne medicínská.

Zatřetí: **víc není líp.** Vitaminy rozpustné v tucích (A, D, E, K) se v těle ukládají. Vitamin A v retinolové formě je ve vyšších dávkách v těhotenství rizikový. Kombinování několika přípravků, z nichž každý obsahuje „komplex“, se dostane přes bezpečné množství snadno.

## Na co se zeptat v ordinaci

1. *Mám si nechat změřit vitamin D a funkci štítné žlázy, než něco začnu brát?*
2. *Zasahuje něco z toho, co beru, do mého protokolu?*
3. *Je něco, co mám naopak vysadit?*
4. *Od kdy do kdy to má smysl brát. Do odběru, do transferu, do bety?*

## Nejčastější otázky

**Beru už těhotenský multivitamin. Stačí to?**
Většinou pokrývá folát a jód. Vitamin D v něm bývá v nižším množství, než jaké se doplňuje při prokázaném nedostatku. Zkontrolujte etiketu a ukažte ji lékaři.

**Kdy začít?**
U folátu se doporučuje nejméně měsíc před početím, ideálně dřív. U ostatního záleží na důvodu. A u věcí, které mají ovlivnit zrání vajíček, se mluví spíš o měsících než o dnech.

**Vysadit doplňky v den odběru?**
Řídí se to pokyny kliniky k zákroku, ne obecným pravidlem. Zeptejte se předem.

**Můžu si vzít bylinné přípravky na plodnost?**
Tady buďte opatrná. Některé rostlinné přípravky mají hormonální účinek a mohou zasahovat do protokolu. Vždycky předem konzultovat.

**Pomůže mi to, když mám dobré výsledky?**
Doplněk doplňuje to, co chybí. Když nechybí nic, nemá co doplňovat.

> Tabulka shrnuje stav odborné diskuse, ne doporučení pro vás konkrétně. O tom, co budete brát, rozhoduje váš lékař.`,
      minutes: 11,
      phases: [],
      topics: ['strava', 'leky', 'hormony'],
      level: 'deep',
      hero: 'sage',
      reviewedBy: REVIEW_NUTRI,
      sources: [SRC_ESHRE, SRC_ASRM, SRC_COCHRANE, SRC_SZU],
      publishedOn: '2026-07-31',
      boost: 0.45,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-strava-srovnani',
      kind: 'article',
      title: 'Čtyři stravovací přístupy vedle sebe: co pro který mluví',
      excerpt:
        'Středomořská, protizánětlivá, nízkoglykemická a bezlepková. Čím se liší, komu která sedí a kde končí doložené a začíná móda.',
      body: `## Co strava umí a co ne

Umí ovlivnit metabolické prostředí, ve kterém zrání vajíček probíhá. Citlivost na inzulin, zánětlivé pozadí, zásobu mikroživin. To není málo.

Neumí nahradit protokol, opravit uzavřené vejcovody ani změnit ovariální rezervu. Rezervu určuje počet folikulů, se kterými jste se narodila.

Nejsilnější signál z výzkumu není o jednotlivé potravině. Je o **celkovém vzorci stravování**: a ten nejlépe prozkoumaný je středomořský.

## Srovnání

| Přístup | Podstata | Nejsilnější u | Důkaz | Slabina |
| --- | --- | --- | --- | --- |
| **Středomořský** | Zelenina, luštěniny, ryby, olivový olej, celozrnné; málo červeného a uzeného masa. | Plošně, jako výchozí volba. | Střední až silný pro reprodukční výsledky. | Vyžaduje změnu nákupu, ne jen doplněk. |
| **Protizánětlivý** | Překrývá se se středomořským, navíc důraz na omezení ultrazpracovaných potravin a přidaného cukru. | Endometrióza, autoimunitní pozadí. | Střední pro obtíže, slabší pro otěhotnění. | Pojem „protizánětlivý“ nemá jednotnou definici. |
| **Nízkoglykemický** | Volba sacharidů podle glykemického indexu, pravidelnost jídel. | PCOS, inzulinová rezistence. | Střední u PCOS. | Mimo inzulinovou rezistenci malý přínos. |
| **Bezlepkový** | Vyloučení lepku. | Celiakie a prokázaná neceliakální citlivost. | Silný u celiakie, nedostatečný jinde. | Bez diagnózy zbytečně omezuje a zhoršuje příjem vlákniny. |

## Co mají ty přístupy společné

Když se ty čtyři sloupce překryjí, zbude překvapivě jednoduchý průnik:

- víc zeleniny, luštěnin a celozrnných potravin,
- víc ryb, méně červeného a uzeného masa,
- rostlinné tuky místo ztužených,
- méně ultrazpracovaných potravin a slazených nápojů,
- pravidelnost. Vynechaná jídla a večerní dojídání zhoršují glykemii nejvíc.

Tenhle průnik je to jediné, co má smysl začít dělat, dokud nemáte diagnózu, která žádá něco konkrétnějšího.

## Kde se to často přežene

**Vyřazování bez důvodu.** Bezlepková nebo bezmléčná strava bez diagnózy nezlepší výsledky a zhorší pestrost.

**Detoxy a půsty ve stimulaci.** Ve stimulaci tělo pracuje na plné obrátky a potřebuje energii a bílkoviny. Výrazné omezení jídla během stimulace nebo kolem odběru není vhodné.

**Kofein a alkohol.** U alkoholu je doporučení jednoznačné. V době léčby a v těhotenství nepít. U kofeinu se doporučuje omezit, přesné množství si ověřte na klinice.

## Nejčastější otázky

**Mám zhubnout před IVF?**
U výrazné nadváhy může úprava hmotnosti zlepšit odpověď na stimulaci a průběh těhotenství. Ale rychlé hubnutí těsně před cyklem nebo během něj vhodné není. Tohle patří naplánovat s lékařem s předstihem.

**Musím jíst ananas a granátové jablko po transferu?**
Nemusíte. Nic z toho nemá doložený vliv na uhnízdění. Když vám to dělá dobře, není důvod je nejíst, jen z toho nedělejte podmínku.

**Vegetariánství nebo veganství?**
Jde to, ale je potřeba pohlídat B12, železo, jód, omega-3 a bílkoviny. U veganství je konzultace s výživovým poradcem prakticky nutná.

**Kolik bílkovin?**
Ve stimulaci se často doporučuje jejich zvýšený příjem, hlavně kvůli prevenci potíží při hyperstimulaci. Konkrétní množství vám dá klinika. Souvisí s vaší hmotností a rizikem.

**Můžu pít bylinkové čaje?**
Běžné ovocné ano. U bylinných směsí „na plodnost“ platí totéž co u bylinných doplňků: nejdřív se zeptat.

> Změna stravy je podpora, ne léčba. Nenahrazuje doporučení vaší kliniky a u diagnóz jako PCOS, endometrióza nebo celiakie patří sestavit ji s odborníkem.`,
      minutes: 10,
      phases: [],
      topics: ['strava', 'sebepece'],
      level: 'deep',
      hero: 'sand',
      reviewedBy: REVIEW_NUTRI,
      sources: [SRC_ESHRE, SRC_NICE, SRC_COCHRANE, SRC_SZU],
      publishedOn: '2026-07-31',
      boost: 0.4,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-pohyb-srovnani',
      kind: 'article',
      title: 'Pohyb v cyklu: co ano, co ne a proč se to mění fázi od fáze',
      excerpt:
        'Ve stimulaci platí jiná pravidla než po transferu. Tady je přehled aktivit podle fáze. Včetně toho, proč se zrovna běh nedoporučuje.',
      body: `## Proč se doporučení během jednoho cyklu obrátí

Na začátku cyklu jsou vaječníky velikosti mandle. Na konci stimulace mohou být několikanásobně větší a nesou desítky folikulů. Zvětšený vaječník je pohyblivější a hůř zavěšený. A to je celý důvod, proč se ve druhé polovině stimulace vysazují skoky, prudké otáčky a doskoky.

Riziko, o které jde, se jmenuje **torze vaječníku**: otočení kolem vlastní osy s přerušením prokrvení. Je vzácné, ale je to náhlá příhoda a řeší se akutně.

## Srovnání aktivit podle fáze

| Aktivita | Před stimulací | Stimulace (2. polovina) | Po odběru | Po transferu a čekání |
| --- | --- | --- | --- | --- |
| **Chůze** | Ano | Ano, je to ta nejlepší volba | Ano, zvolna | Ano |
| **Plavání** | Ano | Spíše ano, bez tempa a skoků | Až po doznění, dle kliniky | Dle kliniky |
| **Jóga a protahování** | Ano | Jemné varianty, bez hlubokých rotací a stlačení břicha | Ano | Ano, klidné formy |
| **Silový trénink** | Ano | Ne s velkými břemeny, ne s tlakem do břicha | Ne | Ne |
| **Běh, skákání, HIIT** | Ano | Ne | Ne | Ne |
| **Kolektivní a kontaktní sporty** | Ano | Ne | Ne | Ne |
| **Sauna, horká vana** | Dle zvyklostí | Ne | Ne | Ne |

Tabulka je orientační. **Pokyny vaší kliniky mají vždycky přednost**: liší se podle toho, jak vaječníky reagovaly a jaké máte riziko hyperstimulace.

## Mýtus, který stojí za vyvrácení

**Ležet po transferu.** Klid na lůžku po embryotransferu se dlouho doporučoval, ale data ho nepodpořila. A delší nehybnost naopak zvyšuje riziko trombózy. Doporučení dnes zní žít běžný, klidný režim, ne ležet.

Neznamená to jít po transferu na kruhový trénink. Znamená to, že chodit, vařit a jít do práce je v pořádku, pokud vám klinika neřekla jinak.

## Kdy pohyb přerušit hned

Nečekejte na kontrolu a ozvěte se klinice, když se objeví:

- náhlá prudká bolest na jedné straně podbřišku,
- bolest s nevolností nebo zvracením,
- výrazně tvrdé, nafouklé břicho,
- dušnost nebo rychlý přírůstek hmotnosti,
- silné krvácení.

První dva body jsou typický obraz torze nebo komplikace, které se řeší akutně.

## Nejčastější otázky

**Můžu cvičit, když nemám žádné potíže?**
Absence potíží neříká nic o velikosti vaječníků. Pravidla druhé poloviny stimulace platí i tehdy, když se cítíte dobře.

**Kdy se můžu vrátit k běžnému tréninku?**
Po neúspěšném cyklu obvykle po odeznění obtíží a po menstruaci. Po pozitivním testu se řídíte doporučeními pro těhotenství. Konkrétní termín patří klinice.

**Je sex zakázaný?**
V druhé polovině stimulace a kolem odběru se obvykle nedoporučuje. Ze stejného důvodu jako sport. Po transferu se doporučení klinik liší. Zeptejte se, ať nemusíte hádat.

**Pomůže pohyb prokrvení dělohy?**
Chůze zlepšuje celkové prokrvení a spánek, a to samo o sobě stojí za to. Přímý vliv na uhnízdění doložený není.

> Tyhle zásady nenahrazují pokyny vaší kliniky. Když se rozcházejí, platí to, co vám řekli tam. Vaše čísla vidí oni.`,
      minutes: 8,
      phases: [],
      topics: ['pohyb', 'stimulace', 'sebepece'],
      level: 'essential',
      hero: 'sky',
      reviewedBy: REVIEW_REPRO,
      sources: [SRC_ESHRE, SRC_ASRM, SRC_COCHRANE],
      publishedOn: '2026-07-31',
      boost: 0.4,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-fyzioterapie',
      kind: 'article',
      title: 'Fyzioterapie v léčbě neplodnosti: co doopravdy umí',
      excerpt:
        'Pánevní dno, jizvy po operacích, dechový vzor. Kde má fyzioterapie doložené místo, kde je to podpora a kde se slibuje víc, než se ví.',
      body: `## Kde fyzioterapie do léčby patří

Poctivá odpověď má dvě části.

**Doložené místo má u obtíží.** Bolestivý sex, přetížené pánevní dno, bolesti zad a pánve, obtíže po břišních operacích, dysfunkce po císařském řezu. To jsou stavy, kde fyzioterapie funguje a kde je součástí běžné péče.

**U samotné plodnosti je situace slabší.** Že by manuální techniky zvyšovaly pravděpodobnost otěhotnění, doloženo není. Metody jako „viscerální manipulace pro uvolnění vejcovodů“ se prodávají s velkými sliby a s malými daty.

Tenhle rozdíl je potřeba znát, než někam zaplatíte několik tisíc.

## Srovnání přístupů

| Přístup | Na co cílí | Důkaz | Co neumí |
| --- | --- | --- | --- |
| **Terapie pánevního dna** | Přetížení nebo oslabení svalů, bolest při sexu, potíže s močením. | Silný pro tyto obtíže. | Neprůchodné vejcovody ani kvalitu vajíček. |
| **Práce s jizvou** | Jizva po císaři, laparoskopii, operaci endometriózy. Pohyblivost tkáně a citlivost. | Střední pro pohyblivost a bolest. | Nezvrátí srůsty uvnitř dutiny břišní. |
| **Dechová a posturální terapie** | Bránice, nitrobřišní tlak, chronické napětí. | Střední pro bolest a napětí. | Přímý vliv na otěhotnění doložený není. |
| **Viscerální / mobilizační techniky na „uvolnění vejcovodů“** | Slibuje zprůchodnění, zlepšení prokrvení. | Nedostatečný. | Neprůchodnost vejcovodů se posuzuje zobrazovacím vyšetřením a řeší jinak. |
| **Lymfatická drenáž** | Otoky, pocit napětí. | Slabý, spíše symptomatická úleva. | Není léčbou hyperstimulace. Ta patří klinice. |

## Kdy fyzioterapii aktivně zvážit

- Sex bolí. Dlouhodobě, nebo teprve od začátku léčby.
- Máte za sebou císařský řez, laparoskopii nebo operaci endometriózy.
- Bolí vás záda nebo pánev a zhoršuje se to během stimulace.
- Po odběru se pánevní dno „nevrátilo“, cítíte tlak nebo únik moči.
- Neumíte se nadechnout do břicha a trvale držíte napětí v hrudníku.

## Co se ve stimulaci mění

Zvětšené vaječníky mění, co je bezpečné. Fyzioterapeut o vaší fázi cyklu musí vědět. Hluboká práce v podbřišku ve druhé polovině stimulace nebo krátce po odběru není namístě.

Věta, se kterou přijdete: *„Jsem ve stimulaci, jsem po odběru, jsem po transferu.“* Dobrý terapeut podle toho techniku upraví. Pokud na to nereaguje, je to signál.

## Jak poznat dobrého terapeuta

1. **Ptá se na diagnózu a na fázi cyklu**, ne jen na to, kde to bolí.
2. **Nedává sliby o otěhotnění.** Slibuje práci s obtížemi.
3. **Vyšetří vás**, než začne terapii.
4. **Vysvětlí, kolik sezení čeká** a podle čeho pozná, že to funguje.
5. **Umí říct, že tohle není jeho obor**, a poslat vás dál.

## Nejčastější otázky

**Hradí to pojišťovna?**
Fyzioterapie na doporučení lékaře obvykle ano. Samoplátecké specializované programy pro plodnost ne. Ptejte se předem.

**Kdy s tím začít?**
Ideálně před cyklem, ne během něj. Před stimulací je prostor na intenzivnější práci.

**Pomůže mi terapie pánevního dna k otěhotnění?**
K otěhotnění přímo doloženo není. Ale když bolestivý sex nebo napětí zasahují do vašeho života a vztahu, je to důvod sám o sobě.

**Můžu cvičit doma podle videa?**
Na pánevní dno raději ne naslepo. Část žen ho má přetížené, ne oslabené. A posilování by u nich potíže zhoršilo. Vyšetření rozhodne, kterým směrem jít.

> Fyzioterapie je podpůrná péče. Nenahrazuje léčbu na klinice a sama o sobě neřeší příčinu neplodnosti.`,
      minutes: 9,
      phases: [],
      topics: ['pohyb', 'sebepece', 'klinika'],
      level: 'deep',
      hero: 'champagne',
      reviewedBy: REVIEW_PHYSIO,
      sources: [SRC_NICE, SRC_COCHRANE, SRC_ASRM],
      publishedOn: '2026-07-31',
      boost: 0.35,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-doplnkove-metody',
      kind: 'article',
      title: 'Akupunktura a další doplňkové metody: co říkají data',
      excerpt:
        'Akupunktura, reflexologie, mind-body programy, homeopatie. Přehled bez nadšení i bez posměchu. Co která metoda ukazuje a co ne.',
      body: `## Proč je tahle oblast tak nepřehledná

Doplňkové metody jsou tam, kde medicína nemá jistotu, a lidé mají obrovskou potřebu něco dělat. To je kombinace, ve které se dobře daří jak poctivé podpůrné péči, tak prodeji.

Rozlišujme dvě otázky, které se často slévají do jedné:

1. **Zvyšuje ta metoda pravděpodobnost otěhotnění?**
2. **Pomáhá zvládnout léčbu. Úzkost, napětí, spánek?**

U většiny metod je odpověď na první otázku „nedoloženo“ a na druhou „ano, u části žen“. To není totéž jako „nefunguje“.

## Srovnání

| Metoda | Co slibuje | Důkaz na otěhotnění | Důkaz na zvládání léčby | Poznámka |
| --- | --- | --- | --- | --- |
| **Akupunktura** | Prokrvení dělohy, uvolnění, lepší uhnízdění. | Nejednoznačný. Přehledy se rozcházejí, novější a kvalitnější studie rozdíl většinou nenacházejí. | Střední. Úzkost a napětí. | Bezpečná u zkušeného terapeuta. Ne do podbřišku ve stimulaci bez domluvy. |
| **Mind-body programy** (strukturované skupinové programy zvládání stresu) | Snížení stresu, lepší setrvání v léčbě. | Slabý až nedoložený. | Silnější než u ostatních metod v tabulce. | Nejlépe prozkoumaná položka v této tabulce. |
| **Reflexologie** | Ovlivnění orgánů přes chodidla. | Nedostatečný. | Slabý. Relaxace. | Příjemné. Očekávání držte nízko. |
| **Homeopatie** | Podpora plodnosti. | Nedoložený. | Placebový efekt. | Odborné společnosti ji nedoporučují jako léčbu. |
| **Bylinné směsi „na plodnost“** | Hormonální podpora. | Nedostatečný. |. | **Rizikové.** Mohou interagovat s protokolem. Vždy hlásit lékaři. |
| **Masáž, sauna, wellness** | Uvolnění. | Nedoložený. | Reálná úleva. | Sauna a horké lázně ve stimulaci a v těhotenství ne. |

## Jak s tím naložit prakticky

**Když vám to dělá dobře a nestojí to nepřiměřeně, je legitimní to dělat.** Zvládání léčby je součást léčby. Žena, která cyklus doběhne v pořádku, na tom bude líp než žena, která ho vzdá vyčerpáním.

**Co si ale nedovolte:** aby vám kdokoli tvrdil, že bez jeho metody to nevyjde, nebo že za neúspěch může vaše psychika. To druhé je nejen nepravda, ale i krutost.

## Věta, kterou stojí za to znát

**Stres neúspěšnou léčbu nezpůsobuje.** Souvislost mezi mírou stresu a výsledkem cyklu se v datech opakovaně nepotvrdila. Léčba je stresující sama o sobě. A obviňovat se z toho, že jste nebyla dost klidná, nemá žádnou oporu.

## Nejčastější otázky

**Chci akupunkturu v den transferu. Má to smysl?**
Právě tenhle protokol se zkoumal nejvíc a výsledky jsou rozporuplné. Škodit nebude, když terapeut ví, že jste po transferu. Očekávejte uvolnění, ne vyšší šanci.

**Musím to hlásit klinice?**
Bylinky a doplňky ano, vždy. Akupunkturu a masáže je slušné zmínit, hlavně kolem zákroků.

**Kolik je moc?**
Když vás doplňkové metody stojí tolik času nebo peněz, že to zhoršuje vaši situaci, je to moc. To je jediné pravidlo, které tu jde napsat obecně.

**Existuje něco, co je vyloženě nebezpečné?**
Nekonzultované bylinné přípravky, cokoli s hormonálním účinkem, sauna a horké lázně ve stimulaci a v těhotenství, a manipulace v podbřišku po odběru.

> Doplňkové metody nenahrazují léčbu ani péči vaší kliniky. Cokoli, co užíváte nebo podstupujete, patří říct ošetřujícímu lékaři.`,
      minutes: 9,
      phases: [],
      topics: ['sebepece', 'psychika', 'klinika'],
      level: 'deep',
      hero: 'pearl',
      reviewedBy: REVIEW_REPRO,
      sources: [SRC_ESHRE, SRC_NICE, SRC_COCHRANE, SRC_ASRM],
      publishedOn: '2026-07-31',
      boost: 0.35,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-psychoterapie-srovnani',
      kind: 'article',
      title: 'Psychologická podpora: která metoda je na co',
      excerpt:
        'KBT, ACT, mindfulness, EMDR, párová terapie, podpůrné skupiny. Přehled toho, co jednotlivé směry řeší a kdy který dává smysl.',
      body: `## Proč tohle nepatří až na konec

Neplodnost patří k psychicky nejnáročnějším zdravotním situacím vůbec. Míra úzkostných a depresivních obtíží je u žen v léčbě opakovaně vyšší než v běžné populaci a srovnatelná s pacientkami s vážnými onemocněními.

To není slabost. Je to popsaný jev, se kterým odborné společnosti počítají a kvůli kterému doporučují nabízet psychologickou podporu jako součást péče, ne jako nadstavbu.

## Srovnání směrů

| Směr | Na co cílí | Kdy sedí | Formát |
| --- | --- | --- | --- |
| **KBT** (kognitivně-behaviorální terapie) | Konkrétní úzkost, vtíravé myšlenky, nespavost, vyhýbavé chování. | Když víte, co vás drží, a chcete s tím pracovat prakticky. | Obvykle krátkodobá, se strukturou a úkoly. |
| **ACT** (terapie přijetím a závazkem) | Život s nejistotou, kterou nejde odstranit. | Když nejde změnit situaci, jen svůj vztah k ní, což je v léčbě často. | Krátkodobá až střednědobá. |
| **Mindfulness programy** | Přemítání, tělesné napětí, spánek. | Jako doplněk, ne náhrada terapie u výraznějších obtíží. | Skupinově i samostatně. |
| **EMDR** | Traumatická vzpomínka. Ztráta, komplikovaný porod, náročný zákrok. | Když se vám konkrétní událost vrací a vyhýbáte se připomínkám. | Cílená, vede ji vyškolený terapeut. |
| **Párová terapie** | Rozdílné tempo truchlení, sex jako povinnost, mlčení o léčbě. | Když se to netýká jen vás, ale i toho mezi vámi. | Oba, společně. |
| **Podpůrné skupiny** | Izolace, pocit, že to nikdo nechápe. | Kdykoli. Nenahrazuje terapii při výrazných obtížích. | Skupinově, často online. |
| **Psychiatrická péče** | Deprese, úzkostná porucha, nespavost, kterou nejde zvládnout jinak. | Když obtíže zasahují do fungování. | Vč. možnosti medikace slučitelné s léčbou a těhotenstvím. |

## Kdy nečekat a vyhledat pomoc

Tyhle body neznamenají, že je něco s vámi špatně. Znamenají, že je vhodná doba požádat o pomoc:

- Většinu dní se cítíte skleslá, nebo vás netěší nic, co dřív ano. Déle než dva týdny.
- Nemůžete spát nebo se budíte s úzkostí.
- Nezvládáte běžné fungování, práci, vztahy.
- Vyhýbáte se lidem s dětmi a izoluje vás to.
- Objevují se myšlenky, že by bylo lepší tu nebýt.

**Poslední bod je důvod ozvat se hned, dnes.** V ČR je nonstop dostupná Linka první psychické pomoci **116 123**. Při bezprostředním ohrožení volejte **155**.

## Co terapie během léčby neznamená

Neznamená, že si to „děláte psychikou“. Neznamená, že když se uklidníte, otěhotníte. Souvislost mezi stresem a výsledkem cyklu se v datech opakovaně nepotvrdila.

Terapie je tu proto, aby léčba byla snesitelnější a abyste z ní vyšla celá, ne aby ji „odemkla“.

## Jak si vybrat

1. **Hledejte někoho se zkušeností s reprodukční medicínou** nebo s perinatální psychologií. Ušetří vám to vysvětlování základů.
2. **První sezení je na oťukání.** Nesednout si je normální a je v pořádku zkusit někoho jiného.
3. **Ptejte se na formát:** kolik sezení, jak často, jak poznáte posun.
4. **Online funguje.** U KBT je doložená srovnatelná účinnost jako naživo, a v týdnu plném kontrol je to praktické.

## Nejčastější otázky

**Hradí to pojišťovna?**
Klinický psycholog na doporučení lékaře obvykle ano, s čekací dobou. Řada klinik má vlastního psychologa. Zeptejte se, bývá to nejrychlejší cesta.

**Můžu brát antidepresiva, když se snažím otěhotnět?**
Některá jsou s těhotenstvím slučitelná. Rozhodnutí patří psychiatrovi ve spolupráci s gynekologem. Svévolné vysazení bývá rizikovější než pokračování.

**Partner nechce jít.**
Můžete jít sama, i když jde o vztah. Změna na jedné straně mění dynamiku obou.

**Nemám na to sílu ani čas.**
Pak začněte tím nejmenším: jednou konzultací. Ne kurzem, ne programem. Jedním hovorem.

> Aplikace psychologickou péči nenahrazuje. Když se vám vede špatně, obraťte se na odborníka. A při myšlenkách na sebepoškození okamžitě na linku 116 123 nebo na 155.`,
      minutes: 10,
      phases: [],
      topics: ['psychika', 'sebepece', 'vztah'],
      level: 'essential',
      hero: 'dusk',
      reviewedBy: REVIEW_PSY,
      sources: [SRC_ESHRE, SRC_NICE, SRC_ASRM, 'Linka první psychické pomoci 116 123'],
      publishedOn: '2026-07-31',
      boost: 0.5,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-faq-stimulace',
      kind: 'article',
      title: 'Nejčastější otázky ke stimulaci',
      excerpt:
        'Dvacet otázek, které na klinice zaznívají nejčastěji. A odpovědi, které se vejdou do času, který v ordinaci máte.',
      body: `## O píchání

**Bude to bolet?**
Podkožní injekce se píchají velmi tenkou jehlou do podkoží břicha nebo stehna. Většina žen popisuje spíš tlak a pálení roztoku než bodnutí. Nejhorší bývá první dávka, kvůli obavám, ne kvůli bolesti.

**Co když se spletu v čase?**
U běžných denních dávek nevadí posun o desítky minut. **Výjimka je trigger**: ten se píchá na minutu podle pokynů, protože podle něj je naplánovaný odběr. Při jakékoli nejistotě u triggeru volejte na kliniku, i večer.

**Zapomněla jsem dávku.**
Nepřidávejte ji svévolně k další. Zavolejte na kliniku a řekněte, kdy jste ji měla píchnout a kdy jste na to přišla.

**Vyteklo mi trochu roztoku.**
Malá kapka na kůži obvykle nevadí. Nepíchejte znovu bez konzultace. Riskovala byste dvojitou dávku.

**Kam píchat?**
Podle pokynů a s obměnou míst. Opakované píchání do stejného místa dělá boule a bolí. Mapa vpichů v aplikaci vám ukáže, kde jste byla naposledy.

**Můžu si píchat sama?**
Většina žen ano a po pár dnech to jde rychleji než shánět pomoc. Když se vám třesou ruce, není to slabost. Je to adrenalin.

## O kontrolách

**Proč tak často?**
Podle velikosti folikulů a hladin hormonů se rozhoduje o dávce a o termínu odběru. Bez kontrol by se dávkovalo naslepo.

**Co znamená počet folikulů na ultrazvuku?**
Kolik jich lékař ten den změřil v použitelné velikosti. Není to počet vajíček. Část folikulů může být prázdná a část vajíček nemusí být zralá.

**Jsou moje hodnoty dobré?**
Na tuhle otázku aplikace neodpovídá a nemůže. Rozmezí se liší podle laboratoře, dne cyklu, věku i diagnózy. Zeptejte se přímo při kontrole.

**Můžu si vzít výsledky s sebou?**
Ano, máte na svou dokumentaci právo. Praktické je požádat o kopii hned po odběru.

## O tom, co cítíte

**Nafouklé břicho a tlak.**
Ve druhé polovině stimulace časté. Vaječníky rostou. Sledujte, jestli se to nezhoršuje rychle.

**Návaly, plačtivost, podrážděnost.**
Hormonální hladiny se mění řádově. Nálada tomu odpovídá a není to selhání charakteru.

**Bolest hlavy, únava.**
Běžné. Když je bolest hlavy nezvyklá nebo silná, hlaste ji.

**Kdy volat hned, i v noci:**
- dušnost nebo obtížné dýchání,
- prudká jednostranná bolest podbřišku,
- rychlý přírůstek hmotnosti a tvrdé nafouklé břicho,
- silné krvácení nebo krvácení se sraženinami,
- horečka.

První tři body mohou znamenat hyperstimulaci nebo torzi. Obojí se řeší akutně a čekání do rána není namístě.

## O průběhu a rozhodnutích

**Může se cyklus zrušit?**
Ano, a není to selhání. Nejčastěji kvůli slabé odpovědi vaječníků, nebo naopak kvůli riziku těžké hyperstimulace. Zrušení je rozhodnutí ve váš prospěch.

**Co je „freeze all“?**
Zamrazení všech embryí a transfer až v pozdějším cyklu. Volí se hlavně při riziku hyperstimulace nebo když sliznice není připravená.

**Proč mi mění dávku?**
Protože reagujete jinak, než se čekalo. Úprava dávky je běžná součást vedení cyklu, ne známka problému.

**Kolik dní stimulace je normální?**
Nejčastěji zhruba devět až dvanáct, ale rozptyl je velký a délka sama o sobě nic neprozrazuje.

**Můžu pracovat?**
Většina žen ano. Poslední dny stimulace a den odběru bývají náročnější. Počítejte s tím dopředu.

**Můžu řídit?**
Po odběru ne, jde o zákrok v analgosedaci. Zajistěte si doprovod.

**Můžu pít alkohol?**
Ne. V době léčby se doporučuje nepít.

**Můžu kouřit?**
Kouření zhoršuje reprodukční výsledky u obou partnerů. Ideální je přestat před cyklem. A pomoc s tím si vyžádat, ne to zkoušet vůlí.

> Odpovědi jsou obecné a nenahrazují pokyny vaší kliniky. Když se rozcházejí, platí to, co vám řekli tam.`,
      minutes: 11,
      phases: [],
      topics: ['stimulace', 'leky', 'hormony', 'klinika'],
      level: 'essential',
      hero: 'blush',
      reviewedBy: REVIEW_REPRO,
      sources: [SRC_ESHRE, SRC_ASRM, SRC_NICE],
      publishedOn: '2026-07-31',
      boost: 0.5,
    },

    // ------------------------------------------------------------------
    {
      id: 'pod-faq-cekani',
      kind: 'article',
      title: 'Nejčastější otázky k čekání po transferu',
      excerpt:
        'Dva týdny, ve kterých se nedá dělat nic a myslí se na všechno. Odpovědi na to, co se v nich ptá nejvíc.',
      body: `## O tom, co smíte

**Můžu normálně fungovat?**
Ano. Klid na lůžku se po transferu už nedoporučuje. Data ho nepodpořila a delší nehybnost zvyšuje riziko trombózy. Běžný klidný režim je to, co se doporučuje dnes.

**Můžu do práce?**
Většinou ano. Výjimkou je těžká fyzická práce nebo práce s riziky, kde se domluvte s lékařem.

**Můžu cvičit?**
Chůze a jemné protahování ano. Běh, skoky, silový trénink a kontaktní sporty ne.

**Sex?**
Doporučení klinik se liší. Zeptejte se své. Obecné pravidlo tu neplatí.

**Sauna, horká vana?**
Ne.

**Zvedat nákup, dítě?**
Běžné věci ano, těžká břemena ne. Když si nejste jistá, zeptejte se konkrétně na váhu.

## O tom, co cítíte

**Nic necítím. Je to špatně?**
Ne. Nepřítomnost příznaků neznamená nic. Velká část žen s pozitivním výsledkem v těch dnech necítila nic zvláštního.

**Cítím píchání a tlak. Je to dobře?**
Taky ne. Podpora progesteronem a doznívající stimulace dělají přesně ty příznaky, které se dají číst oběma směry. **V téhle fázi tělo prostě neposkytuje spolehlivý signál**: a to je ta nejtěžší část.

**Mírné krvácení nebo špinění.**
Může mít víc příčin, včetně podráždění po transferu nebo od vaginální podpory. Hlaste ho klinice, ale samo o sobě nic nerozhoduje.

**Silné krvácení, prudká bolest, horečka.**
Ozvěte se hned.

## O testování

**Můžu si udělat domácí test dřív?**
Můžete a spousta žen to udělá. Vědět byste ale měla tohle:

- **Falešně pozitivní**: pokud vám trigger obsahoval hCG, může být v těle ještě několik dní a test ho zachytí.
- **Falešně negativní**: příliš brzy je hladina nízká i při úspěšném uhnízdění.
- **Výsledek nic nezmění.** Léčbu ani podporu podle domácího testu neupravujete.

Odběr hCG na klinice je jediný výsledek, podle kterého se rozhoduje.

**Proč se dělá beta dvakrát?**
Protože důležitější než jedno číslo je jeho **vývoj v čase**. Dynamika vypovídá víc než absolutní hodnota.

**Co znamená nízká beta?**
Že se čeká na druhý odběr. Interpretace patří lékaři a jedno číslo bez kontextu neříká skoro nic.

## O hlavě

**Nemyslet na to nejde.**
Nejde a nemusí. Rada „nemyslete na to“ je nesplnitelná a jen k pocitu neúspěchu přidává další.

**Co s tím tedy?**
Funguje spíš vymezit tomu prostor než to zakazovat: dát si denně čas, kdy si to připustíte, a zbytek dne se k tomu vracet vědomě míň. Pomáhá mít v těch dnech naplánované konkrétní věci. Prázdný den se zaplní přemítáním sám.

**Můžu za to, když to nevyjde, svým stresem?**
Ne. Souvislost mezi mírou stresu a výsledkem cyklu se v datech opakovaně nepotvrdila. Uhnízdění je biologický proces, který neřídíte vůlí.

**Mám si připravit obě varianty?**
Řadě žen pomůže mít dopředu promyšlené, co udělá v obou případech. Komu zavolá, jestli si vezme volno. Ne proto, že by to přivolávalo neúspěch, ale proto, že v den výsledku se rozhoduje špatně.

## Praktické

**Musím brát podporu i po pozitivním testu?**
Obvykle ano a nevysazuje se svévolně. Kdy skončit, řekne klinika.

**Zapomněla jsem si vzít progesteron.**
Zavolejte na kliniku, ať víte, jak dál. Nezdvojujte dávku sama.

**Kdy budu vědět jistě?**
hCG je první jistota. Ta další přichází s ultrazvukem o pár týdnů později. Mezitím se dá jen čekat, a to je poctivá odpověď.

> Odpovědi jsou obecné. Vaše pokyny k podpoře, testování i k tomu, kdy volat, má vaše klinika a ty mají přednost.`,
      minutes: 10,
      phases: [],
      topics: ['cekani', 'transfer', 'psychika'],
      level: 'essential',
      hero: 'dawn',
      reviewedBy: REVIEW_REPRO,
      sources: [SRC_ESHRE, SRC_ASRM, SRC_COCHRANE],
      publishedOn: '2026-07-31',
      boost: 0.5,
    },
  ],
}
