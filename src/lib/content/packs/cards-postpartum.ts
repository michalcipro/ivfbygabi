import type { ContentPack, DailyCard } from '../types'

/**
 * Šestinedělí den po dni a první rok dítěte po týdnech.
 *
 * Šestinedělí je období, o kterém se mluví nejmíň a které bolí nejvíc.
 * Proto má vlastní kartu na každý den prvních dvou týdnů — tam je rozdíl
 * mezi třetím a pátým dnem obrovský.
 *
 * U nedonošených dětí se karty pro první rok vybírají podle korigovaného
 * věku; o to se stará doménové jádro, tady jen udáváme týdny.
 */

interface DaySpec {
  day: number
  headline: string
  body: string
  bullets: [string, string, string]
  task: string
  reflection: string
  tip?: string
  callDoctorIf?: string[]
}

const DAYS: DaySpec[] = [
  {
    day: 0,
    headline: 'První den. Zvládla jste to.',
    body: 'Ať porod proběhl jakkoliv — přirozeně, císařem, s komplikacemi — je za vámi. Dnešek si nemusíte pamatovat celý a nemusíte u něj nic cítit „správně“.',
    bullets: [
      'Očistky bývají první dny sytě červené a vydatné.',
      'Třes a zimnice po porodu jsou běžné.',
      'První kojení nebo přiložení bývá spíš seznamovací než sytící.',
    ],
    task: 'Nechte si dnes pomoct s čímkoliv, co vám nabídnou.',
    reflection: 'Co si z dneška chcete zapamatovat?',
    callDoctorIf: [
      'Promáčíte vložku za hodinu nebo méně.',
      'Máte teplotu nad 38 °C.',
      'Máte silnou bolest, kterou neutlumí analgetika.',
    ],
  },
  {
    day: 1,
    headline: 'Druhý den. Tělo se ozývá.',
    body: 'Dnes obvykle přijde první pořádná bolest — hráze, jizvy, zad. A zároveň první vstávání, které je náročnější, než čekáte.',
    bullets: [
      'Zavinování dělohy může připomínat menstruační křeče, hlavně při kojení.',
      'Po císaři je první vstávání zásadní a bolí. Přesto je potřeba.',
      'Mléko ještě není, je tu kolostrum — a stačí.',
    ],
    task: 'Poproste o analgetika dřív, než bolest vyroste. Není v tom žádné hrdinství.',
    reflection: 'Jak se cítíte ve svém těle?',
    tip: 'Při vstávání po císaři se otočte na bok, spusťte nohy a zvedejte se rukama — ne břichem.',
  },
  {
    day: 2,
    headline: 'Třetí den. Připravte se na hormonální propad.',
    body: 'Kolem třetího dne u většiny žen prudce klesnou hormony a naskočí mléko. Výsledkem bývá pláč bez důvodu, který uprostřed radosti nedává smysl — a přitom je úplně normální.',
    bullets: [
      'Prsa mohou být tvrdá, horká a bolestivá.',
      'Pláč bez příčiny je běžný a obvykle do pár dní odezní.',
      'Miminko chce často a dlouho u prsu. Tak to má být.',
    ],
    task: 'Řekněte někomu blízkému, že přijde den, kdy budete brečet. Ať se nelekne.',
    reflection: 'Co dnes bylo těžší, než jste čekala?',
    tip: 'Při nalití prsou pomáhá teplo před kojením a chlad po něm.',
    callDoctorIf: [
      'Jedno prso je zarudlé, bolestivé a máte teplotu.',
      'Smutek je tak silný, že nezvládáte fungovat.',
      'Napadají vás myšlenky na ublížení sobě nebo miminku.',
    ],
  },
  {
    day: 3,
    headline: 'Čtvrtý den. Spánková deprivace se sčítá.',
    body: 'Čtvrtou noc už tělo dohání to, co první tři noci vydrželo na adrenalinu. Únava je teď fyzická veličina, ne stav mysli.',
    bullets: [
      'Novorozenec se budí každé dvě až tři hodiny. To je fyziologie, ne chyba.',
      'Očistky by měly slábnout a tmavnout.',
      'Zácpa po porodu je velmi častá.',
    ],
    task: 'Až bude miminko spát, jděte spát taky. Nádobí počká.',
    reflection: 'Kdo vám dnes může sundat jednu věc z hlavy?',
  },
  {
    day: 4,
    headline: 'Pátý den. Návštěvy nejsou povinnost.',
    body: 'Kolem pátého dne se začnou hlásit lidé, kteří chtějí vidět miminko. Nemusíte otevřít. Vážně.',
    bullets: [
      'Návštěvy vyčerpávají víc, než se čeká.',
      'Kojení před cizími lidmi bývá nepříjemné.',
      'Odmítnutí návštěvy není urážka.',
    ],
    task: 'Napište jednu společnou zprávu: „Dáme vědět, až budeme připravení.“ A pošlete ji.',
    reflection: 'Kdo vám opravdu pomáhá a kdo přidělává práci?',
  },
  {
    day: 5,
    headline: 'Šestý den. Pánevní dno potřebuje čas.',
    body: 'Ať jste rodila jakkoliv, pánevní dno neslo devět měsíců zátěž. Odpočinek teď dělá víc než jakékoliv cvičení.',
    bullets: [
      'Únik moči při kýchnutí je v tomhle období běžný.',
      'Zvedání těžších věcí než miminko se nedoporučuje.',
      'S cvičením se čeká minimálně na kontrolu po šestinedělí.',
    ],
    task: 'Vyzkoušejte tři jemná stažení pánevního dna vleže. Nic víc.',
    reflection: 'Jak se vám daří odpočívat?',
  },
  {
    day: 6,
    headline: 'Sedmý den. Týden je za vámi.',
    body: 'Přežila jste první týden. Nikdo neví, co dělá — vy, miminko, ani lidé kolem. To je normální start.',
    bullets: [
      'Miminko by mělo mít alespoň šest mokrých plen denně.',
      'Váha se po počátečním úbytku začíná vracet.',
      'Očistky jsou obvykle tmavší a slabší.',
    ],
    task: 'Zapište si, jak vypadal váš první týden. Jednu větu stačí.',
    reflection: 'Co jste tenhle týden zvládla, o čem jste si nemyslela, že zvládnete?',
  },
  {
    day: 7,
    headline: 'Osmý den. Kojení se usazuje.',
    body: 'Druhý týden bývá bod, kdy se kojení buď rozjede, nebo začne opravdu bolet. Bolest po prvních dnech není normální a má řešení.',
    bullets: [
      'Správné přisátí je klíč: široce otevřená pusa, brada u prsu.',
      'Bolest během celého kojení znamená, že něco není v pořádku.',
      'Laktační poradkyně dokáže vyřešit za hodinu to, co týdny bolí.',
    ],
    task: 'Pokud kojení bolí, sežeňte si dnes kontakt na laktační poradkyni.',
    reflection: 'Jaké je vaše kojení — a jak o něm mluvíte nahlas?',
    callDoctorIf: [
      'Prso je zarudlé, tvrdé a máte teplotu — může jít o mastitidu.',
      'Bradavky krvácejí nebo mají hluboké praskliny.',
      'Miminko nepřibírá nebo má méně než šest mokrých plen denně.',
    ],
  },
  {
    day: 8,
    headline: 'Devátý den. Vlny přicházejí a odcházejí.',
    body: 'Baby blues bývá nejsilnější mezi třetím a desátým dnem a pak ustupuje. Pokud se naopak prohlubuje, je čas se ozvat.',
    bullets: [
      'Baby blues odezní obvykle do dvou týdnů.',
      'Poporodní deprese se prohlubuje a nezlepšuje se sama.',
      'Vyhledat pomoc není selhání matky.',
    ],
    task: 'Řekněte partnerovi nebo kamarádce jednu pravdivou větu o tom, jak vám je.',
    reflection: 'Zlepšuje se to, nebo zhoršuje?',
    callDoctorIf: [
      'Smutek se prohlubuje a trvá déle než dva týdny.',
      'Nemůžete spát ani když miminko spí.',
      'Máte myšlenky na ublížení sobě nebo dítěti — ozvěte se ihned.',
    ],
  },
  {
    day: 9,
    headline: 'Desátý den. Jizva a hojení.',
    body: 'Po císaři se jizva postupně zaceluje, po přirozeném porodu se hojí hráz. Obojí svědí, tahá a připomíná se v nejhorší chvíli.',
    bullets: [
      'Jizvu po císaři udržujte čistou a suchou.',
      'Stehy se často vstřebávají samy.',
      'Svědění bývá známkou hojení.',
    ],
    task: 'Podívejte se dnes na jizvu nebo hráz. Vědět, jak to vypadá, snižuje strach.',
    reflection: 'Jak se smiřujete s tím, jak vaše tělo teď vypadá?',
    callDoctorIf: [
      'Jizva je zarudlá, teplá, mokvá nebo zapáchá.',
      'Máte teplotu nad 38 °C.',
      'Očistky náhle zesílí nebo začnou zapáchat.',
    ],
  },
  {
    day: 10,
    headline: 'Jedenáctý den. Rytmus se rodí.',
    body: 'Kolem druhého týdne začíná být znát nějaký vzorec — ne režim, ale aspoň opakování. To je první úleva.',
    bullets: [
      'Novorozenec spí 14 až 17 hodin denně, ale po kouscích.',
      'Shluková kojení večer jsou běžná.',
      'Miminko by mělo být kolem 10.–14. dne zpátky na porodní váze.',
    ],
    task: 'Jděte dnes na deset minut ven. I jen před dům.',
    reflection: 'Co vám dnes udělalo radost?',
  },
  {
    day: 11,
    headline: 'Dvanáctý den. Partner taky nespí.',
    body: 'Ve dvou se to nese líp, ale jen když se o tom mluví. Většina hádek v šestinedělí je o únavě, ne o tom, o čem se hádáte.',
    bullets: [
      'Dělba noční péče pomáhá i kojícím matkám.',
      'Nevyslovená očekávání jsou zdrojem většiny konfliktů.',
      'Krátký rozhovor denně vydá za dlouhou debatu jednou za měsíc.',
    ],
    task: 'Domluvte se konkrétně, kdo co dělá zítra. Ne obecně — konkrétně.',
    reflection: 'Co byste potřebovala, aby partner udělal bez ptaní?',
  },
  {
    day: 12,
    headline: 'Třináctý den. Vlasy, pot a hormony.',
    body: 'Noční pocení, návaly a později vypadávání vlasů jsou způsob, jak se tělo zbavuje toho, co v těhotenství nabralo.',
    bullets: [
      'Noční pocení bývá výrazné a odezní během několika týdnů.',
      'Vypadávání vlasů začíná typicky kolem třetího měsíce.',
      'Pitný režim pomáhá víc, než by se zdálo.',
    ],
    task: 'Postavte si k posteli velkou láhev vody.',
    reflection: 'Co vaše tělo za poslední dva týdny dokázalo?',
  },
  {
    day: 13,
    headline: 'Čtrnáctý den. Dva týdny.',
    body: 'Nejtěžší část šestinedělí je většinou za vámi. Neznamená to, že bude lehko — ale nejhlubší propad obvykle odezní.',
    bullets: [
      'Očistky by měly být slabší a světlejší.',
      'Bolest by měla postupně ustupovat.',
      'Únava zůstane ještě dlouho.',
    ],
    task: 'Vyfoťte se s miminkem. I když se vám dnes nechce.',
    reflection: 'Co byste řekla sama sobě před dvěma týdny?',
  },
]

const dailyDays: DailyCard[] = DAYS.map((d) => ({
  id: `cs-d${d.day}`,
  phases: ['postpartum'],
  day: d.day,
  headline: d.headline,
  body: d.body,
  whatsHappening: d.bullets,
  task: d.task,
  reflection: d.reflection,
  tip: d.tip,
  callDoctorIf: d.callDoctorIf,
}))

const laterPostpartum: DailyCard[] = [
  {
    id: 'cs-r1',
    phases: ['postpartum'],
    dayRange: [14, 20],
    headline: 'Třetí týden. Laktační krize může přijít.',
    body: 'Kolem třetího týdne často přichází růstový spurt: miminko chce pořád u prsu a vy máte pocit, že nemáte dost mléka. Obvykle máte — jen se poptávka právě zvyšuje.',
    whatsHappening: [
      'Časté kojení je způsob, jak si miminko objednává víc mléka.',
      'Za dva až tři dny se nabídka obvykle srovná.',
      'Dokrmování v tuhle chvíli může laktaci naopak snížit.',
    ],
    task: 'Zaveďte si na dnešek pravidlo: kojit, ležet, jíst. Nic víc.',
    reflection: 'Věříte svému tělu, že to zvládne?',
    callDoctorIf: [
      'Miminko má méně než šest mokrých plen denně.',
      'Miminko je netečné, těžko se budí nebo odmítá pít.',
      'Máte teplotu a zarudlé, bolestivé prso.',
    ],
  },
  {
    id: 'cs-r2',
    phases: ['postpartum'],
    dayRange: [21, 27],
    headline: 'Čtvrtý týden. Začíná se vracet část vás.',
    body: 'Někdy kolem čtvrtého týdne přijde první den, kdy se cítíte skoro jako dřív. Trvá pár hodin a zase odejde — ale je to začátek.',
    whatsHappening: [
      'Očistky u většiny žen slábnou nebo končí.',
      'Bolest by už měla být výrazně menší.',
      'Chuť dělat něco jiného než pečovat se pomalu vrací.',
    ],
    task: 'Udělejte dnes patnáct minut něčeho, co je jenom vaše.',
    reflection: 'Kdo jste kromě matky?',
  },
  {
    id: 'cs-r3',
    phases: ['postpartum'],
    dayRange: [28, 34],
    headline: 'Pátý týden. Blíží se kontrola.',
    body: 'Kontrola po šestinedělí bývá kolem šestého týdne. Je to jediná chvíle, kdy se někdo systematicky zeptá na vás — připravte si, co chcete říct.',
    whatsHappening: [
      'Hodnotí se hojení, děloha, jizva a pánevní dno.',
      'Řeší se antikoncepce a návrat k pohybu.',
      'Na psychiku se často ptají jen krátce — mluvte i tak.',
    ],
    task: 'Napište si na papír tři věci, na které se chcete zeptat.',
    reflection: 'O čem byste na kontrole raději mlčela — a proč byste neměla?',
  },
  {
    id: 'cs-r4',
    phases: ['postpartum'],
    dayRange: [35, 41],
    headline: 'Šestý týden. Konec šestinedělí.',
    body: 'Šest týdnů, které trvaly rok. Konec šestinedělí neznamená, že jste v pořádku — znamená, že akutní hojení skončilo. Zbytek chce ještě měsíce.',
    whatsHappening: [
      'Pohyb se obvykle povoluje po kontrole, postupně.',
      'Návrat menstruace je u nekojících dřívější než u kojících.',
      'Pánevní dno stojí za to nechat posoudit fyzioterapeutem.',
    ],
    task: 'Zapište si do kroniky, co bylo na šestinedělí nejtěžší a co nejkrásnější.',
    reflection: 'Co byste vzkázala ženě, která je dnes tam, kde jste byla vy před šesti týdny?',
  },
]

// ------------------------------------------------------------- první rok ---

interface BabySpec {
  weeks: [number, number]
  headline: string
  body: string
  bullets: [string, string, string]
  task: string
  reflection: string
  callDoctorIf?: string[]
}

const BABY: BabySpec[] = [
  {
    weeks: [0, 2],
    headline: 'Novorozenec. Zatím jen jíst, spát a být v náručí.',
    body: 'První dva týdny nemá miminko žádný režim a ani ho mít nemá. Vidí zhruba na 20–30 centimetrů — přesně na vzdálenost vašeho obličeje při kojení.',
    bullets: [
      'Spí 14 až 17 hodin denně, ale nejdéle dvě až tři hodiny v kuse.',
      'Rozeznává váš hlas a vůni.',
      'Nemůžete ho rozmazlit tím, že ho budete nosit.',
    ],
    task: 'Zkuste dnes deset minut kontaktu kůže na kůži.',
    reflection: 'Na co z těchhle dní budete chtít vzpomínat?',
    callDoctorIf: [
      'Teplota nad 38 °C u dítěte mladšího tří měsíců — vždy ihned k lékaři.',
      'Odmítá pít nebo je těžko probuditelné.',
      'Má méně než šest mokrých plen denně.',
    ],
  },
  {
    weeks: [3, 5],
    headline: 'Kolem měsíce. Zvedá hlavičku.',
    body: 'Miminko začíná při poloze na bříšku krátce zvedat hlavu. Večerní neklid a shlukové kojení bývají v tomhle období nejsilnější.',
    bullets: [
      'Chvilky na bříšku ve bdělém stavu posilují krční svaly.',
      'Večerní pláč mezi 18. a 23. hodinou je běžný.',
      'Koliky se často objevují kolem třetího týdne.',
    ],
    task: 'Dejte miminko dvakrát dnes na chvíli na bříško, když je vzhůru a nasycené.',
    reflection: 'Co vám v nejtěžší hodinu dne pomáhá?',
  },
  {
    weeks: [6, 8],
    headline: 'Šestý týden. První úsměv.',
    body: 'Kolem šestého týdne přichází první skutečný sociální úsměv — reakce na vás, ne na plyny. Je to okamžik, na který většina rodičů čeká.',
    bullets: [
      'Sociální úsměv se objevuje mezi 6. a 8. týdnem.',
      'Miminko déle sleduje obličeje a předměty.',
      'Kolem šestého týdne bývá růstový spurt.',
    ],
    task: 'Zapište si datum prvního úsměvu do kroniky.',
    reflection: 'Změnilo se něco, když se na vás poprvé usmálo?',
  },
  {
    weeks: [9, 12],
    headline: 'Kolem třetího měsíce. Objevuje ruce.',
    body: 'Miminko si všímá vlastních rukou, začíná si je dávat do pusy a cíleně sahat po předmětech. Zároveň se často rozpadne dosavadní spánek.',
    bullets: [
      'Kolem tří měsíců se mění struktura spánku — proto ten zlom.',
      'Začíná broukání a první samohlásky.',
      'Koliky obvykle kolem třetího měsíce ustupují.',
    ],
    task: 'Odpovídejte dnes na broukání. Konverzace se učí střídáním.',
    reflection: 'Co vás na miminku poslední dobou nejvíc baví?',
  },
  {
    weeks: [13, 17],
    headline: 'Čtvrtý měsíc. Otáčení na dosah.',
    body: 'Většina dětí se v tomhle období začíná otáčet z bříška na záda. Od téhle chvíle nenechávejte miminko samotné na vyvýšeném místě.',
    bullets: [
      'Otáčení přichází obvykle mezi 4. a 6. měsícem.',
      'Miminko uchopí předmět a dá si ho do pusy.',
      'Slintání sílí — první zoubek může, ale nemusí přijít.',
    ],
    task: 'Projděte byt očima lezoucího dítěte. Za chvíli to budete potřebovat.',
    reflection: 'Jak se změnil váš den za poslední měsíc?',
  },
  {
    weeks: [18, 21],
    headline: 'Pátý měsíc. Sedí s oporou.',
    body: 'Miminko vydrží sedět opřené, chytá předměty oběma rukama a přendává si je. Sleduje jídlo na vašem talíři.',
    bullets: [
      'Zájem o jídlo neznamená automaticky připravenost na příkrmy.',
      'Otáčí se za zvukem.',
      'Rozeznává známé a cizí lidi.',
    ],
    task: 'Zjistěte si, jaká jsou znamení připravenosti na příkrmy.',
    reflection: 'Co vás na příkrmech znervózňuje?',
  },
  {
    weeks: [22, 26],
    headline: 'Šestý měsíc. Čas na příkrmy.',
    body: 'Kolem šesti měsíců (u nedonošených podle korigovaného věku) bývá miminko připravené na první příkrmy — sedí s minimální oporou, udrží hlavu a zajímá se o jídlo.',
    bullets: [
      'Mléko zůstává hlavní výživou celý první rok.',
      'Alergeny se dnes nabízejí brzy a pravidelně, ne odkládají.',
      'Dávení není dušení — dávení je normální učení.',
    ],
    task: 'Nabídněte první příkrm v klidu, ne když je miminko hladové nebo unavené.',
    reflection: 'Jak vám je z toho, že miminko začíná jíst něco jiného než vaše mléko?',
    callDoctorIf: [
      'Po jídle se objeví vyrážka kolem pusy, otok nebo dušnost.',
      'Miminko zvrací po každém příkrmu.',
      'Přestane přibírat.',
    ],
  },
  {
    weeks: [27, 34],
    headline: 'Sedmý a osmý měsíc. Pohyb naplno.',
    body: 'Miminko se plazí nebo leze, sedí samo a přetahuje si předměty. Začíná separační úzkost — pláč, když odejdete, je vývojový krok, ne rozmazlenost.',
    bullets: [
      'Separační úzkost vrcholí mezi 8. a 12. měsícem.',
      'Objevuje se žvatlání se slabikami (ba-ba, ma-ma).',
      'Spánek se často znovu rozpadne.',
    ],
    task: 'Hrajte si dnes na schovávanou. Učí to, že co zmizí, se vrací.',
    reflection: 'Jak zvládáte, když po vás miminko pláče?',
  },
  {
    weeks: [35, 43],
    headline: 'Devátý a desátý měsíc. Postavuje se.',
    body: 'Miminko se přitahuje do stoje, obchází nábytek a používá klešťový úchop — palec proti ukazováčku.',
    bullets: [
      'První kroky přijdou obvykle mezi 10. a 15. měsícem.',
      'Rozumí slovu „ne“, i když ho nerespektuje.',
      'Napodobuje gesta — mává, tleská.',
    ],
    task: 'Ukažte dnes miminku jedno nové gesto a opakujte ho.',
    reflection: 'Co vás na jeho pokrocích překvapilo nejvíc?',
  },
  {
    weeks: [44, 52],
    headline: 'Blíží se první narozeniny.',
    body: 'Rok. Z bezmocného novorozence je člověk, který má názor, směje se vtipům a jde si pro to, co chce.',
    bullets: [
      'Kolem roku se často objeví první slovo s významem.',
      'Chuť k jídlu bývá kolísavá — růst se zpomaluje.',
      'U nedonošených dětí se vývoj hodnotí podle korigovaného věku.',
    ],
    task: 'Sepište, co všechno se za rok stalo. Pak si to přečtěte celé.',
    reflection: 'Jaký byl tenhle rok pro vás — ne pro miminko, pro vás?',
  },
]

const babyWeekly: DailyCard[] = BABY.map((b, i) => ({
  id: `cs-baby-${i}`,
  phases: ['baby_first_year', 'coming_home'],
  babyWeeks: b.weeks,
  headline: b.headline,
  body: b.body,
  whatsHappening: b.bullets,
  task: b.task,
  reflection: b.reflection,
  callDoctorIf: b.callDoctorIf,
}))

const preterm: DailyCard[] = [
  {
    id: 'cs-preterm-1',
    phases: ['baby_first_year', 'coming_home'],
    babyWeeks: [0, 104],
    modifiers: ['preterm'],
    headline: 'Vývoj se hodnotí podle korigovaného věku.',
    body: 'U dítěte narozeného předčasně se milníky posuzují podle data, kdy mělo původně přijít — ne podle skutečného narození. Aplikace to počítá za vás.',
    whatsHappening: [
      'Korigovaný věk se používá zhruba do dvou let.',
      'Srovnávat s donošenými vrstevníky nedává smysl.',
      'Následná péče pro rizikové novorozence sleduje vývoj systematicky.',
    ],
    task: 'Až se vás někdo zeptá, kolik je miminku, řekněte oba údaje. Ušetříte si vysvětlování.',
    reflection: 'Přistihujete se při srovnávání? S kým?',
  },
]

export const pack: ContentPack = {
  dailyCards: [...dailyDays, ...laterPostpartum, ...babyWeekly, ...preterm],
}
