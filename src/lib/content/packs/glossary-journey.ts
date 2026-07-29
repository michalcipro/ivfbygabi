import type { ContentPack, GlossaryTerm } from '../types'

/**
 * Pojmy, na které odkazují průvodci fázemi.
 *
 * Pravidlo aplikace: žádný pojem se nesmí objevit bez vysvětlení. Tenhle balík
 * dorovnává slovník tak, aby na každý termín z průvodce šlo kliknout.
 */

const glossary: GlossaryTerm[] = [
  {
    term: 'Ovulace',
    aliases: ['uvolnění vajíčka'],
    short: 'Uvolnění zralého vajíčka z vaječníku, obvykle jednou za cyklus.',
    long: 'Vajíčko po uvolnění přežívá zhruba 12–24 hodin. Spermie ve vhodném hlenu vydrží až pět dní — proto je plodné okno delší než samotná ovulace a končí dnem ovulace. Že ovulace proběhla, se dá potvrdit vzestupem bazální teploty nebo hladinou progesteronu zhruba týden po ní.',
    topics: ['cekani', 'hormony'],
  },
  {
    term: 'Plodné okno',
    short: 'Zhruba šest dní v cyklu, kdy může dojít k otěhotnění.',
    long: 'Pět dní před ovulací a den ovulace. Po ovulaci už šance rychle klesá. Nejspolehlivěji se určuje kombinací LH testů a sledování hlenu; kalendářová metoda je u nepravidelného cyklu nespolehlivá.',
    topics: ['cekani'],
  },
  {
    term: 'Bazální teplota',
    aliases: ['BBT'],
    short: 'Tělesná teplota naměřená hned po probuzení, před vstáváním.',
    long: 'Po ovulaci stoupá vlivem progesteronu zhruba o 0,3 °C a zůstává vyšší až do menstruace. Ovulaci potvrzuje zpětně — dopředu ji nepředpoví. Měří se každý den ve stejnou dobu, ještě v posteli.',
    topics: ['cekani', 'hormony'],
  },
  {
    term: 'Kyselina listová',
    aliases: ['folát', 'folacin', 'vitamin B9'],
    short: 'Vitamin, který snižuje riziko vrozených vad neurální trubice.',
    long: 'Působí v prvních týdnech těhotenství, tedy dřív, než o něm většina žen ví — proto se začíná už při plánování. Dávku určuje lékař; u některých diagnóz a při užívání některých léků bývá vyšší. Po léčbě metotrexátem platí zvláštní pokyny.',
    topics: ['strava', 'tehotenstvi'],
  },
  {
    term: 'Inositol',
    aliases: ['myo-inositol'],
    short: 'Látka používaná hlavně u PCOS k podpoře ovulace a citlivosti na inzulin.',
    long: 'Data jsou nadějná, ale nejednotná — proto se řadí mezi diskutované, ne standardní. Nenahrazuje léčbu předepsanou lékařem a vždy je potřeba nahlásit, že ho berete, protože může ovlivnit odpověď na stimulaci.',
    topics: ['strava', 'hormony'],
  },
  {
    term: 'Preventivní prohlídka',
    short: 'Pravidelná kontrola u praktického lékaře nebo gynekologa bez konkrétních potíží.',
    long: 'Před plánováním těhotenství má smysl obojí: gynekologická prohlídka s onkologickou cytologií a prohlídka u praktika s krevním obrazem, cukrem a kontrolou očkování. Řada věcí se řeší mnohem snáz před těhotenstvím než v něm.',
    topics: ['klinika'],
  },
  {
    term: 'Anamnéza',
    short: 'Souhrn vaší zdravotní historie, který lékař potřebuje znát.',
    long: 'Zahrnuje prodělané nemoci a operace, léky, alergie, průběh cyklů, předchozí těhotenství a ztráty, a také rodinnou anamnézu — nemoci v rodině. Sepsat si ji předem šetří čas a zpřesňuje diagnostiku.',
    topics: ['klinika'],
  },
  {
    term: 'IUI',
    aliases: ['inseminace', 'intrauterinní inseminace'],
    short: 'Zavedení upravených spermií přímo do dělohy v době ovulace.',
    long: 'Nejjednodušší asistovaná metoda. Zákrok trvá několik minut, nevyžaduje narkózu a probíhá tenkým katétrem. Používá se u lehčího mužského faktoru, u poruch ovulace nebo u nevysvětlené neplodnosti. Obvykle se počítá se třemi až šesti cykly, pak se přechází k IVF.',
    topics: ['klinika', 'transfer'],
  },
  {
    term: 'Folikulometrie',
    short: 'Ultrazvukové sledování růstu folikulů v průběhu cyklu.',
    long: 'Měří se počet a velikost folikulů, případně tloušťka děložní sliznice. Podle toho se upravují dávky léků a určuje se čas triggeru nebo inseminace.',
    topics: ['stimulace', 'klinika'],
  },
  {
    term: 'Down-regulace',
    aliases: ['dlouhý protokol'],
    short: 'Dočasné utlumení vlastní hormonální regulace před stimulací.',
    long: 'Součást takzvaného dlouhého protokolu. Cílem je převzít kontrolu nad cyklem, aby folikuly rostly rovnoměrně a nedošlo k předčasné ovulaci. Trvá déle než antagonistický protokol a může přinést přechodné návaly.',
    topics: ['stimulace'],
  },
  {
    term: 'Punkce',
    aliases: ['odběr vajíček', 'OPU'],
    short: 'Odběr vajíček z folikulů tenkou jehlou pod ultrazvukovou kontrolou.',
    long: 'Probíhá v analgosedaci a trvá zhruba 10–20 minut. Počet získaných vajíček bývá nižší než počet folikulů — ne v každém folikulu je zralé vajíčko. V následujících dnech je nejvyšší riziko OHSS.',
    topics: ['stimulace', 'embryologie'],
  },
  {
    term: 'Zralé vajíčko',
    aliases: ['MII oocyt'],
    short: 'Vajíčko ve fázi, kdy je schopné oplodnění.',
    long: 'Po odběru embryolog posuzuje zralost. Oplodnit se dají jen zralá vajíčka, proto je jejich počet důležitější než celkový počet odebraných.',
    topics: ['embryologie'],
  },
  {
    term: 'Zygota',
    short: 'Oplodněné vajíčko krátce po splynutí se spermií.',
    long: 'Den po odběru embryolog kontroluje, jestli jsou patrná dvě prvojádra — znak správného oplodnění. Z zygoty se dalším dělením stává embryo.',
    topics: ['embryologie'],
  },
  {
    term: 'Kultivace',
    short: 'Období, kdy embrya rostou v laboratoři v inkubátoru.',
    long: 'Trvá obvykle do třetího nebo pátého dne. Do pátého dne, kdy vzniká blastocysta, se dostane jen část embryí — je to očekávaný průběh, ne chyba laboratoře.',
    topics: ['embryologie'],
  },
  {
    term: 'Embryotransfer',
    aliases: ['transfer', 'ET'],
    short: 'Zavedení embrya do dělohy tenkým katétrem.',
    long: 'Trvá několik minut, nebolí a nevyžaduje narkózu. Probíhá pod ultrazvukovou kontrolou, obvykle s naplněným močovým měchýřem. Klid na lůžku po zákroku výsledek nezlepšuje.',
    topics: ['transfer'],
  },
  {
    term: 'Gestační váček',
    short: 'První struktura těhotenství viditelná na ultrazvuku.',
    long: 'Bývá patrný zhruba od 5. týdne. Jeho uložení v děloze vylučuje mimoděložní těhotenství. Samotný váček ještě neznamená vyvíjející se plod — ten a srdeční akce přicházejí o něco později.',
    topics: ['tehotenstvi', 'vysledky'],
  },
  {
    term: 'ERA test',
    short: 'Vyšetření, které má určit nejvhodnější okno pro transfer.',
    long: 'Z odebraného vzorku sliznice se hodnotí, kdy je připravená přijmout embryo. Používá se hlavně po opakovaném selhání implantace. Přínos je předmětem odborné diskuze — vyplatí se ptát, co konkrétně by výsledek změnil.',
    topics: ['transfer', 'genetika'],
  },
  {
    term: 'Prvotrimestrální screening',
    aliases: ['kombinovaný test'],
    short: 'Vyšetření mezi 11. a 14. týdnem odhadující riziko chromozomálních vad.',
    long: 'Kombinuje ultrazvuk (šíje plodu) s odběrem krve. Výsledkem je pravděpodobnost, ne diagnóza. Při zvýšeném riziku se nabízí další vyšetření.',
    topics: ['tehotenstvi', 'genetika'],
  },
  {
    term: 'Gestační stáří',
    short: 'Stáří těhotenství počítané od prvního dne poslední menstruace.',
    long: 'Zapisuje se jako týdny+dny, například 24+3. U IVF se počítá z data transferu a dne kultivace embrya. Neodpovídá době od početí — to je zhruba o dva týdny méně.',
    topics: ['tehotenstvi'],
  },
  {
    term: 'Gestační diabetes',
    aliases: ['těhotenská cukrovka'],
    short: 'Porucha zpracování cukrů, která vzniká v těhotenství.',
    long: 'Zjišťuje se glukózovým tolerančním testem obvykle mezi 24. a 28. týdnem. Většinou stačí úprava stravy a pohyb, část žen potřebuje inzulin. Po porodu obvykle odezní, ale kontrola se opakuje.',
    topics: ['tehotenstvi', 'rizikove'],
  },
  {
    term: 'Preeklampsie',
    short: 'Závažná těhotenská komplikace s vysokým tlakem a bílkovinou v moči.',
    long: 'Objevuje se obvykle po 20. týdnu. Varovné příznaky: silné bolesti hlavy, poruchy vidění, bolest pod pravým žeberním obloukem, prudké otoky. Vyžaduje okamžité vyšetření — u rizikových žen se preventivně podává nízká dávka kyseliny acetylsalicylové podle rozhodnutí lékaře.',
    topics: ['rizikove', 'tehotenstvi'],
  },
  {
    term: 'Předčasný porod',
    short: 'Porod před dokončeným 37. týdnem těhotenství.',
    long: 'Čím dřív, tím delší bývá péče na neonatologii. Před porodem se podávají kortikoidy na dozrání plic a někdy léky tlumící stahy. Vývoj dítěte se pak zhruba do dvou let hodnotí podle korigovaného věku.',
    topics: ['porod', 'nedonosenost'],
  },
  {
    term: 'Předzvěsti porodu',
    aliases: ['poslíčci'],
    short: 'Známky, že se tělo připravuje k porodu.',
    long: 'Nepravidelné stahy, odchod hlenové zátky, pokles bříška, průjem. Můžou přijít dny i týdny předem. Na cestu do porodnice ukazují až pravidelné bolestivé stahy, odtok plodové vody nebo krvácení.',
    topics: ['porod'],
  },
  {
    term: 'Tři doby porodní',
    short: 'Rozdělení porodu na otevírací, vypuzovací a porod placenty.',
    long: 'První doba je nejdelší a končí úplným otevřením branky. Druhá je samotné narození dítěte. Třetí je porod placenty, obvykle do půl hodiny po porodu. Po ní se sleduje krvácení a stažení dělohy.',
    topics: ['porod'],
  },
  {
    term: 'CPAP',
    short: 'Podpora dýchání trvalým přetlakem, bez nutnosti umělé plicní ventilace.',
    long: 'Používá se u nedonošených dětí, aby se plicní sklípky nezavíraly. Sundání CPAP je jeden z milníků, na které rodiče na oddělení čekají.',
    topics: ['nicu', 'nedonosenost'],
  },
  {
    term: 'ROP',
    aliases: ['retinopatie nedonošených'],
    short: 'Onemocnění sítnice u nedonošených dětí.',
    long: 'Sítnice ještě není dozrálá a její cévy mohou růst nesprávně. Proto se u nedonošených dětí opakovaně dělá oční vyšetření. Většina lehkých forem se upraví sama, závažnější se léčí.',
    topics: ['nicu', 'zdravi_ditete'],
  },
  {
    term: 'Raná péče',
    short: 'Bezplatná terénní služba pro rodiny dětí s ohroženým vývojem.',
    long: 'Pracovník dojíždí domů, ukazuje, jak s dítětem pracovat, a pomáhá se orientací v systému. Nárok mají často i rodiny nedonošených dětí — vyplatí se zeptat ještě před propuštěním z oddělení.',
    topics: ['nicu', 'vyvoj'],
  },
  {
    term: 'Příkrmy',
    short: 'Postupné zavádění jiné stravy než mléka, obvykle kolem šestého měsíce.',
    long: 'Začíná se, když dítě sedí s oporou, drží hlavu a projevuje zájem o jídlo. U nedonošených dětí se vychází z korigovaného věku. Mléko zůstává hlavním zdrojem výživy ještě dlouho po prvním soustu.',
    topics: ['prikrmy', 'vyvoj'],
  },
  {
    term: 'Spánková regrese',
    short: 'Období, kdy se dosud zavedený spánek zhorší.',
    long: 'Nejčastěji kolem 4., 8.–10. a 18. měsíce. Souvisí s vývojovými skoky. Trvá obvykle několik týdnů a není důsledkem toho, že jste něco pokazila.',
    topics: ['spanek', 'vyvoj'],
  },
  {
    term: 'Sekundární neplodnost',
    short: 'Nedaří se otěhotnět, přestože jste už dítě porodila.',
    long: 'Vyšetřuje se stejně jako primární neplodnost — u obou partnerů. Od minulého těhotenství se mohlo změnit hodně: věk, ovariální rezerva, průchodnost vejcovodů i spermiogram. Okolí ji často nebere vážně, přitom jde o plnohodnotnou diagnózu.',
    topics: ['klinika', 'psychika'],
  },
]

export const pack: ContentPack = { glossary }
