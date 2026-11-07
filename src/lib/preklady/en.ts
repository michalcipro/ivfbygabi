/**
 * Anglický slovník rozhraní.
 *
 * Klíčem je česká věta tak, jak stojí v kódu. Co tu není, zůstane česky,
 * a to je během překládání správně: je vidět, kam se ještě nedošlo.
 *
 * --------------------------------------------------------- TERMINOLOGIE ---
 * Tahle verze je pro ženu, která se léčí na české klinice. Odborný pojem,
 * který uslyší od sestry nebo uvidí na papíře, se proto v obsahu nechává
 * česky a vysvětluje. V navigaci to neplatí: nadpis obrazovky má být
 * srozumitelný na první pohled, ne učit slovíčka.
 */
export const EN: Record<string, string> = {
  // --- hlavní záložky ---
  'Dnes': 'Today',
  'Moje cesta': 'My journey',
  'Poznej IVF': 'Learn IVF',
  'Deník': 'Diary',
  'Profil': 'Profile',

  // --- rozcestník ---
  'Zápis dne': "Today's entry",
  'Léky a injekce': 'Medication and injections',
  'Moje embrya': 'My embryos',
  'Moje transfery': 'My transfers',
  'Moje IVF historie': 'My IVF history',
  'Moje diagnóza': 'My diagnosis',
  'Moje vyšetření': 'My tests',
  'Podpůrná péče': 'Supportive care',
  'Sledování': 'Tracking',
  'Zdravotní data': 'Health data',
  'Otázky pro lékaře': 'Questions for the doctor',
  'Moje fáze': 'My stage',
  'Hledat v aplikaci': 'Search the app',
  'Deník a cvičení': 'Diary and exercises',
  'Celá cesta': 'The whole journey',
  'Objevit': 'Discover',
  'Knihovna': 'Library',
  'Diagnózy': 'Diagnoses',
  'Checklisty': 'Checklists',
  'Kalendář': 'Calendar',
  'Zdraví': 'Health',
  'Dokumenty': 'Documents',
  'Komunita': 'Community',
  'Můj příběh': 'My story',
  'Partner': 'Partner',
  'Rozcestník': 'More',
  'Členství': 'Membership',
  'Nastavení': 'Settings',

  // --- nadpisy obrazovek ---
  'Zápis': 'Entry',
  'Léky': 'Medication',
  'Nůžky dne': "Today's balance",
  'Změnit fázi': 'Change stage',
  'Cyklus': 'Cycle',
  'Hledání': 'Search',
  'Co když…': 'What if…',
  'Více': 'More',
  'Pojem': 'Term',
  'Cvičení': 'Exercises',
  // Nadpis obrazovky s jedním cvičením. Jinde je „Cvičení“ seznam.
  'nadpis|Cvičení': 'Exercise',
  'Hodnota': 'Value',
  'Diagnóza': 'Diagnosis',
  'Čtení': 'Reading',
  'Moje klinika': 'My clinic',
  'Moje výsledky': 'My results',
  'Skupina': 'Group',
  'Partner mode': 'Partner mode',
  'Záloha a obnova': 'Backup and restore',
  'Kdo stojí za aplikací BlooMia': 'Who is behind BlooMia',
  'Napište mi': 'Write to me',
  'Proč vidím tohle': 'Why am I seeing this',

  // --- zpětná lišta (4. pád, v angličtině beze změny) ---
  'Moji cestu': 'My journey',
  'celou cestu': 'the whole journey',
  'vaši fázi': 'your stage',
  'Knihovnu': 'Library',
  'Komunitu': 'Community',
  'Skupinu': 'Group',
  'Zpět na': 'Back to',
  'Vaše cesta': 'Your journey',
  'Ostatní': 'Other',

  // --- jazyk ---
  'Jazyk': 'Language',
  'Vaše záznamy zůstanou, kde jsou. Přepnutím se mění jazyk, ne data.':
    'Your records stay where they are. Switching changes the language, not the data.',
  'Obsah se překládá postupně. Co ještě přeložené není, zůstává česky.':
    'The content is being translated step by step. Anything not translated yet stays in Czech.',
  // --- čísla a jednotky ---------------------------------------------------
  // Mřížka zastupuje číslice. Viz `prelozVetu` v `client/preklad-dom.ts`.
  '# min': '# min',
  '# z #': '# of #',
  '# z # hotovo': '# of # done',
  'mood # z #': 'mood # of #',
  'hope # z #': 'hope # of #',
  'energy # z #': 'energy # of #',
  'anxiety # z #': 'anxiety # of #',
  'Nálada # z #': 'Mood # of #',
  '#. den stimulace': 'Day # of stimulation',
  'Dnes je #. den stimulace': 'Today is day # of stimulation',
  'Posledních # dní': 'Last # days',
  'Posledních # dnů': 'Last # days',

  // --- Dnes ---------------------------------------------------------------
  'Dnešek': 'Today',
  'Kde jste': 'Where you are',
  'Moje fáze:': 'My stage:',
  'Změnit →': 'Change →',
  'Dnešní téma': "Today's topic",
  'Žádá dnešek': 'Today asks',
  'Máte na to': 'You have for it',
  'Den na cestě': 'Day of the journey',
  'Před vámi': 'Ahead of you',
  'Celý vývoj': 'The whole trend',
  'Průvodce fází': 'Stage guide',
  'Rychle přidat': 'Quick add',
  'Vybráno pro dnešek': 'Chosen for today',
  'otevře se obrazovka': 'opens a screen',
  'Co dnes na vás není': 'Not on you today',
  'Co se dnes může dít': 'What may happen today',
  'Co už jste unesla': 'What you have already carried',
  'Co ukážou výsledky': 'What the results will show',
  'Zapsat, jak vám dnes je': 'Record how you feel today',
  'Ozvěte se lékaři, pokud:': 'Call your doctor if:',
  'Jak se obsah přizpůsobuje dni': 'How the content follows the day',
  'Kdy na to tělo bude připravené': 'When your body will be ready',
  'Vývoj náročnosti dne a vaší rezervy': 'How the day\u2019s demands and your reserve move',
  'Načasování určuje cyklus, ne kalendář.': 'The cycle sets the timing, not the calendar.',
  'Čekání na ně je součást, ne vaše chyba.': 'Waiting for them is part of it, not your fault.',
  'Zatím tu není co sčítat. A to je taky výsledek.':
    'There is nothing to add up yet. That is a result too.',
  'Až založíte cyklus, plátky se začnou plnit jeho milníky.':
    'Once you start a cycle, the segments begin to fill with its milestones.',
  'Zatím žádná zapsaná. Sepište je doma. V ordinaci je přečtete z telefonu.':
    'None written down yet. Write them at home. You can read them off your phone at the clinic.',
  'Injekce každý den a kontroly každé dva až tři dny. Tělo pracuje na plné obrátky. A je to znát.':
    'Injections every day and check-ups every two or three days. Your body is working flat out. And you can feel it.',
  'O těchhle věcech rozhoduje biologie nebo laboratoř, ne vaše snaha. Nedají se odškrtnout a nemají se hlídat.':
    'Biology or the lab decides these, not your effort. They cannot be ticked off and are not yours to watch.',
  'Tip:': 'Tip:',
  'Podle fáze stimulace': 'Based on the stimulation stage',

  // --- milníky na ose -----------------------------------------------------
  'Stimulace': 'Stimulation',
  'Trigger': 'Trigger',
  'Transfer': 'Transfer',
  'Odběr hCG': 'hCG test',
  'Odběr vajíček': 'Egg retrieval',
  'Začátek stimulace': 'Start of stimulation',
  'CD1. První den': 'CD1. First day',
  'Uzavření cyklu': 'Closing the cycle',
  'Založit cyklus': 'Start a cycle',
  'Před prvním cyklem': 'Before the first cycle',

  // --- Zápis dne ----------------------------------------------------------
  'Jak mi je': 'How I feel',
  'Nálada': 'Mood',
  'Naděje': 'Hope',
  'Energie': 'Energy',
  'Úzkost': 'Anxiety',
  'Tělo': 'Body',
  'Uložit dnešek': 'Save today',
  'Cokoli dalšího': 'Anything else',
  'Tři věty stačí.': 'Three sentences are enough.',
  'Otázka na dnešek': 'A question for today',
  'Čtyři osy rezervy': 'Four axes of reserve',
  'Co se dnes povedlo': 'What went well today',
  'Třeba: píchla jsem si sama.': 'For example: I did the injection myself.',
  'Volné místo. Nikdo jiný to neuvidí.': 'Free space. Nobody else will see it.',
  'Číselníky se ukládají hned, texty tímhle tlačítkem.':
    'The scales save straight away, the text with this button.',
  'Vypsaná myšlenka ztrácí sílu. Dokud je jen v hlavě, zní jako fakt.':
    'A thought written down loses its grip. While it stays in your head, it sounds like a fact.',
  'Z těchhle čtyř se skládá vnitřní prstenec. Ukládá se hned po klepnutí.':
    'These four make up the inner ring. Each one saves as soon as you tap it.',
  'Jaká věta se vám dnes honila hlavou nejčastěji? Napište ji přesně tak, jak zněla.':
    'Which sentence went round your head most often today? Write it down exactly as it sounded.',
  'Hlava si pamatuje hlavně selhání. Tohle je záměrné vyvážení. A v neděli se z toho stane věta týdne.':
    'The mind remembers failures best. This is a deliberate counterweight. And on Sunday it becomes the sentence of the week.',
  // Stupnice. Krátká slova, protože stojí pod sebou v jednom řádku.
  'nic': 'none',
  'klid': 'calm',
  'plno': 'full',
  'dobrá': 'good',
  'hodně': 'a lot',
  'nemám': 'none',
  'velká': 'high',
  'na dně': 'empty',

  // --- Zápis: tělo --------------------------------------------------------
  'Prsa': 'Breasts',
  'Kůže': 'Skin',
  'Váha': 'Weight',
  'Pánev': 'Pelvis',
  'Únava': 'Fatigue',
  'Hlava': 'Head',
  'Bolest': 'Pain',
  'Spánek': 'Sleep',
  'Hormony': 'Hormones',
  'Trávení': 'Digestion',
  'Krvácení': 'Bleeding',
  'Nadýmání': 'Bloating',
  'Jak se ozývá tělo': 'What your body is saying',
  'Čekání dělá svoje': 'Waiting takes its toll',
  'Jak moc došly síly': 'How far your strength has gone',
  'Břicho, plyny, otoky': 'Abdomen, gas, swelling',
  'Kolik zbývá a na co stačí': 'How much is left and what it covers',
  'Vaječníky, děloha, podbřišek': 'Ovaries, uterus, lower abdomen',
  'Bolest jinde než v podbřišku': 'Pain somewhere other than the lower abdomen',
  'Progesteron zpomaluje střeva': 'Progesterone slows the bowel',
  'Sleduje se rychlost, ne číslo': 'What matters is the rate, not the number',
  'Vpichy, čípky, náplasti a sprej': 'Injections, pessaries, patches and spray',
  'Ozývají se první a drží nejdéle': 'They speak up first and last longest',
  'Špinění i krvácení. Barva a síla': 'Spotting and bleeding. Colour and amount',
  'Noc, která rozhoduje o celém dni': 'The night that decides the whole day',
  'Hlava a nervy při změnách hladin': 'Head and nerves as levels shift',
  'Vidět je to i na pleti a vlasech': 'It shows on your skin and hair too',
  'Hormony hýbou náladou, není to slabost':
    'Hormones move your mood. It is not weakness',
  'Stimulace, blokáda i podpora. Co dělají hladiny':
    'Stimulation, suppression and support. What the levels are doing',
  'Aplikace příznaky nehodnotí ani z nich nic neusuzuje. Zapisují se proto, abyste je viděla v čase a měla co ukázat lékaři.':
    'The app does not grade your symptoms or draw conclusions from them. You record them so you can see them over time and have something to show your doctor.',
  'Rozdělené podle toho, odkud potíž jde. „Bolest v místě vpichu“ a „píchání ve vaječnících“ nejsou totéž. A když se to zapíše zvlášť, dá se s tím pak něco dělat.':
    'Grouped by where the trouble comes from. \u201EPain at the injection site\u201C and \u201Estinging in the ovaries\u201C are not the same thing. Recorded separately, something can actually be done about them.',
  // --- věnec na Dnes -----------------------------------------------------
  // „z #“ pokryje i „ze #“: srovnává to `prelozVetu`.
  'za vámi': 'behind you',
  'před vámi': 'ahead of you',
  'Za vámi': 'Behind you',
  'z #': 'of #',
  'Za vámi # milník z #': '# of # milestones behind you',
  'Za vámi # milníky z #': '# of # milestones behind you',
  'Za vámi # milníků z #': '# of # milestones behind you',
  'Za vámi # milník z #, cyklus je z # procent za vámi':
    '# of # milestones behind you, the cycle is # percent done',
  'Za vámi # milníky z #, cyklus je z # procent za vámi':
    '# of # milestones behind you, the cycle is # percent done',
  'Za vámi # milníků z #, cyklus je z # procent za vámi':
    '# of # milestones behind you, the cycle is # percent done',
  // --- odznaky typu obsahu ------------------------------------------------
  // Ikona a slovo stojí v šabloně vedle sebe, takže je to jeden text.
  '❧ Článek': '❧ Article',
  '✓ Checklist': '✓ Checklist',
  '❦ Příběh': '❦ Story',
  '◈ Kurz': '◈ Course',
  '? Kvíz': '? Quiz',
  '❂ Pojem': '❂ Term',
  '◉ Živě': '◉ Live',
  'Článek': 'Article',
  'Checklist': 'Checklist',
  'Příběh': 'Story',
  'Kurz': 'Course',
  'Kvíz': 'Quiz',
  'Živě': 'Live',
  'Otázky na lékaře': 'Questions for the doctor',
  'Dnes je na vás · # z #': 'On you today · # of #',

  // --- Deník -----------------------------------------------------------------
  'Vývoj': 'Trend',
  'chybí': 'missing',
  'Zápisy': 'Entries',
  'nezapsáno': 'not recorded',
  'Ohlédnutí': 'Looking back',
  'Připomínky': 'Reminders',
  'Váš přehled': 'Your overview',
  'Co vás čeká': 'What is coming',
  'Volný zápis': 'Free writing',
  'Dnešní zápis': "Today's entry",
  'Uložit zápis': 'Save entry',
  'Kde dnes jste': 'Where you are today',
  'nic v kalendáři': 'nothing in the calendar',
  'Jak na tom jste': 'How you are doing',
  'Jak vám dnes je': 'How you feel today',
  'Zítra bude jiná': 'Tomorrow will be different',
  'Hodilo by se dnes': 'Might help today',
  'nikdy text zápisu': 'never the text of an entry',
  '1 = žádná, 5 = velká': '1 = none, 5 = high',
  '1 = na dně, 5 = plná': '1 = empty, 5 = full',
  'Udělala jsem maximum': 'I did everything I could',
  '1 = klid, 5 = svírá to': '1 = calm, 5 = gripping',
  'Soukromé. Nikdo jiný to nevidí': 'Private. Nobody else sees it',
  'Cokoliv, co potřebujete dostat z hlavy.': 'Anything you need to get out of your head.',
  'Klidně jen tři věty. Nikdo jiný to neuvidí.':
    'Three sentences are fine. Nobody else will see it.',
  'Například: došla jsem na procházku, i když se mi nechtělo':
    'For example: I went for a walk even though I did not feel like it',
  'I úplně malá věc. Hlava si v zátěži pamatuje hlavně to, co nevyšlo. Tohle je vědomé vyvážení.':
    'Even a very small thing. Under strain the mind remembers mainly what went wrong. This is a deliberate counterweight.',
  'Večer před transferem nebo před odběrem. A pak kdykoli, když se přistihnete, jak hledáte, co jste udělala špatně.':
    'The evening before a transfer or a retrieval. And any time you catch yourself looking for what you did wrong.',
  'Deník je soukromý. Partner v Partner mode uvidí jen průměrnou náladu za týden, **nikdy text zápisu**.':
    'The diary is private. In Partner mode your partner sees only the average mood for the week, **never the text of an entry**.',
  '#. týden fáze': 'Week # of the stage',
  'Otázka na dnešek · Práce s hlavou': 'A question for today · Working with your mind',
  'Okruhy': 'Areas',
  'Dopis sobě': 'A letter to yourself',
  'Sebesoucit': 'Self-compassion',
  'Hodí se teď': 'Useful right now',
  'IVF a práce': 'IVF and work',
  'Já a partner': 'My partner and me',
  'Kolo kontroly': 'The circle of control',
  'Moje myšlenky': 'My thoughts',
  'Než se zhasne.': 'Before the lights go out.',
  'Regulace stresu': 'Managing stress',
  'Stres z financí': 'Money stress',
  'Jak se dnes cítím': 'How I feel today',
  'Ztráta a zklamání': 'Loss and disappointment',
  'Večerní zklidnění': 'Settling down for the evening',
  'Čekání a nejistota': 'Waiting and uncertainty',
  'Naděje a očekávání': 'Hope and expectation',
  'Můj vztah ke klinice': 'My relationship with the clinic',
  'Vztah k vlastnímu tělu': 'My relationship with my body',
  'Důvěra, otázky, hranice.': 'Trust, questions, boundaries.',
  'Tělo napřed, hlava potom.': 'Body first, mind after.',
  'Malé věci, které mi pomohly': 'Small things that helped me',
  'Moje čísla nejsou cizí čísla': "My numbers are not somebody else's numbers",
  'Krátké zastavení nad dneškem.': 'A short pause over today.',
  'Sbírka, která má cenu až po měsíci.': 'A collection that is only worth something after a month.',
  'Peníze v léčbě nejsou vedlejší téma.': 'Money in treatment is not a side issue.',
  'Dva kalendáře, které se nedomlouvají.': 'Two calendars that do not talk to each other.',
  'Ne podle vzhledu. Podle toho, co unese.': 'Not by how it looks. By what it can carry.',
  'Doufat a chránit se přitom není protimluv.':
    'Hoping and protecting yourself at the same time is not a contradiction.',
  'Nejdelší část léčby a nejmíň se o ní mluví.':
    'The longest part of treatment and the least talked about.',
  'Co si neříkáme a co bychom potřebovali slyšet.': 'What we do not say and what we need to hear.',
  'Když si nadáváte nebo máte pocit, že za to můžete.':
    'When you are hard on yourself or feel it is your fault.',
  'Když se v hlavě zasekne věta, která zní jako fakt.':
    'When a sentence sticks in your head and sounds like a fact.',
  'Mluvit k sobě tak, jak byste mluvila ke kamarádce.':
    'Speaking to yourself the way you would speak to a friend.',
  'Pro chvíle, kdy se výsledek nestal tím, v co jste doufala.':
    'For the moments when the result was not what you hoped for.',
  'Když se myšlenky točí kolem věcí, se kterými nic nenaděláte.':
    'When your thoughts circle things you can do nothing about.',
  'Po odběru nebo po telefonátu z embryologie, když srovnáváte svoje počty s cizími.':
    "After a retrieval or a call from the embryology lab, when you compare your numbers with other people's.",
  'Tyhle techniky vycházejí z postupů běžných v kognitivně-behaviorální terapii a všímavosti. **Nejsou léčba a nenahrazují odbornou pomoc**: jsou to nástroje na konkrétní těžkou chvíli.':
    'These techniques draw on approaches common in cognitive behavioural therapy and mindfulness. **They are not treatment and do not replace professional help**: they are tools for one specific hard moment.',
  'Práce se sebou. Techniky, které se dají udělat teď hned. Nejsou to články o tom, jak by to šlo. Jsou to kroky, které tu odklikáte.':
    'Work on yourself. Techniques you can do right now. These are not articles about how it could be done. They are steps you click through here.',
  '# cvičení celkem': '# exercises in total',
  'Zapsat dnešek': 'Record today',
  'Zatím tu nic není': 'Nothing here yet',
  'Až něco zapíšete nebo vyplníte cvičení, najdete to tady. Můžete se k tomu vracet a kdykoliv to smazat.':
    'Once you write something or complete an exercise, you will find it here. You can come back to it and delete it at any time.',
  'Zatím není co kreslit': 'Nothing to chart yet',
  'Až budou zápisy aspoň dva, uvidíte tady, jak se nálada, úzkost a naděje vyvíjejí v čase. Bývá to překvapivé. V hlavě to vypadá jako rovná čára dolů.':
    'Once there are at least two entries, you will see here how mood, anxiety and hope move over time. It tends to be surprising. In your head it looks like a straight line down.',
  'Na cestě': 'On the journey',
  'Zápisů v deníku': 'Diary entries',
  'Co máte za sebou': 'What you have behind you',
  'Uložit ohlédnutí': 'Save the review',
  'Týdenní ohlédnutí': 'Weekly review',
  'Přidat do kroniky': 'Add to the chronicle',
  'Vyplněných cvičení': 'Exercises completed',
  'Odškrtnutých položek': 'Items ticked off',
  'Vzpomínka na později': 'A memory for later',
  'Práce s hlavou ve vaší fázi': 'Working with your mind in your stage',
  'Co mi pomohlo. A udělám to znovu?': 'What helped me. And will I do it again?',
  'Když se jede den po dni, posun není vidět. Tady je.':
    'Day by day you cannot see the shift. Here it is.',
  'Co bylo tenhle týden nejtěžší a jak jsem to zvládla?':
    'What was hardest this week and how did I get through it?',
  'Co chci příští týden dělat jinak? Jednu konkrétní věc.':
    'What do I want to do differently next week? One specific thing.',
  'Tři otázky, které se vyplatí projít jednou týdně. Uloží se jako běžný zápis.':
    'Three questions worth going through once a week. They save as an ordinary entry.',
  'Zápisy v řadě. Cíl je týden. Ne kvůli sbírání, ale proto, že teprve na týdnu je vidět vývoj.':
    'Entries in a row. The goal is a week. Not for the sake of collecting, but because a trend only shows up over a week.',
  'Něco, co dnes prožíváte, si za rok nevybavíte. Můžete si to uložit do kroniky. Tam se z toho jednou dá udělat kniha.':
    'Something you are living through today you will not recall in a year. You can save it to the chronicle. One day it can become a book.',

  // --- Moje cesta, fáze a Celá cesta -----------------------------------------
  'Přehled': 'Overview',
  'Historie': 'History',
  'Časová osa': 'Timeline',
  'Statistiky': 'Statistics',
  'Po transferu': 'After the transfer',
  'Moje IVF cesta': 'My IVF journey',
  'Zatím bez cyklu': 'No cycle yet',
  'Moje IVF finance': 'My IVF costs',
  'Nebo rovnou léky': 'Or go straight to medication',
  'Nejdřív jen termíny': 'Just the appointments for now',
  'Zatím tu není žádný cyklus': 'There is no cycle yet',
  'Ultrazvuky, laboratoř, měření.': 'Ultrasounds, lab results, measurements.',
  'Papíry z kliniky na jednom místě.': 'Paperwork from the clinic in one place.',
  'Kde jste dnes a co vás čeká nejdřív.': 'Where you are today and what comes next.',
  'Hodnoty a čísla z cyklů vedle sebe v čase.':
    'Values and numbers from your cycles side by side over time.',
  'Protokol od kliniky a denní odškrtávání dávek':
    "The clinic's protocol and ticking off doses day by day",
  'Celá cesta v přehledu. Co bylo v kterém cyklu.':
    'The whole journey at a glance. What happened in which cycle.',
  'Kolik cesta stála, co je zaplacené a co zbývá.':
    'What the journey has cost, what is paid and what is left.',
  'Všechny transfery napříč cykly, od nejnovějšího.':
    'Every transfer across all cycles, newest first.',
  'Termíny, kontroly a odběry. Část se doplní sama.':
    'Appointments, check-ups and tests. Some fill themselves in.',
  'Kontroly a odběry si můžete zapisovat i bez cyklu':
    'You can record check-ups and tests even without a cycle',
  'Den po dni od transferu k odběru hCG. Co se může dít.':
    'Day by day from the transfer to the hCG test. What may happen.',
  'Karta pro každé embryo. Vývoj po dnech, genetika, osud.':
    'A card for every embryo. Development day by day, genetics, outcome.',
  'Chronologie celé cesty. Jednou z toho může být kronika.':
    'A chronology of the whole journey. One day it could be a chronicle.',
  'Cyklus je zdravotní karta jednoho pokusu: klinika, protokol, milníky, čísla z laboratoře i výsledek. Až ho založíte, bude se na téhle obrazovce skládat všechno ostatní kolem něj.':
    'A cycle is the medical record of one attempt: the clinic, the protocol, the milestones, the lab numbers and the outcome. Once you start one, everything else on this screen is built around it.',
  'Zatím tu není žádný cyklus. Až ho založíte, uvidíte tady celou jeho cestu na jednom místě. Stimulaci, odběr, embrya i každý transfer.':
    'There is no cycle yet. Once you start one, you will see its whole course here in one place. Stimulation, retrieval, embryos and every transfer.',
  'Obsah': 'Content',
  'Doplňky': 'Supplements',
  'K lékaři': 'For the doctor',
  'Slovníček': 'Glossary',
  'Co sledovat': 'What to track',
  'Vaše situace': 'Your situation',
  'Zadat hodnoty': 'Enter values',
  'Zapsat do deníku': 'Write in the diary',
  'Na co se připravit': 'What to prepare for',
  'Doplnit v nastavení': 'Fill in under Settings',
  'Zobrazit obsah fáze': 'Show the content for this stage',
  'Z toho se skládají vaše grafy': 'This is what your charts are built from',
  'Estradiol, pokud vám ho měří.': 'Estradiol, if your clinic measures it.',
  'Věci, které se dají udělat dopředu': 'Things you can do in advance',
  'Obvod břicha, když máte riziko OHSS.': 'Your waist measurement, if you are at risk of OHSS.',
  'Volnější kalhoty. Břicho se zvětší a je citlivé.':
    'Looser trousers. Your abdomen will grow and be tender.',
  'Ranní termíny na kontroly. Domluvte si to v práci dopředu.':
    'Morning slots for check-ups. Arrange it at work in advance.',
  'Vědět, že poslední dny bývají fyzicky nejtěžší z celého cyklu.':
    'Knowing that the last few days tend to be the physically hardest of the whole cycle.',
  'Ultrazvukové kontroly zhruba každé dva až tři dny, často brzy ráno.':
    'Ultrasound check-ups roughly every two or three days, often early in the morning.',
  'Chladicí polštářek a dezinfekci k injekcím, ať to máte na jednom místě.':
    'A cool pack and disinfectant next to your injections, so it is all in one place.',
  'Počet a velikost folikulů z každé kontroly. Z toho vznikne křivka růstu.':
    'The number and size of follicles from every check-up. That becomes your growth curve.',
  'Nafouklé břicho, citlivá prsa, únava a výkyvy nálad. Ke konci stimulace nejvíc.':
    'A bloated abdomen, tender breasts, fatigue and mood swings. Most of all towards the end of stimulation.',
  'Denní injekce, obvykle večer ve stejnou dobu. Většina žen si je píchá sama do bříška.':
    'Daily injections, usually in the evening at the same time. Most women give them to themselves in the abdomen.',
  'Trigger v přesně určený čas. Obvykle 34–36 hodin před odběrem. Tady se nesmí splést hodina.':
    'The trigger at an exact time. Usually 34 to 36 hours before the retrieval. This is one hour you must not get wrong.',
  'Nálada a bolest. Uvidíte, jak stimulace probíhala, až se na to budete chtít podívat zpětně.':
    'Mood and pain. You will be able to see how the stimulation went when you want to look back on it.',
  'Dávky se v průběhu mění podle toho, jak folikuly rostou. Změna dávky není chyba, je to řízení.':
    'Doses change along the way depending on how the follicles grow. A change of dose is not a mistake, it is steering.',
  'Zatím nemáte vybranou žádnou diagnózu ani situaci. Když ji doplníte, obsah se podle ní přizpůsobí.':
    'You have not selected a diagnosis or a situation yet. Once you add one, the content will follow it.',
  'Léčba · jste tady': 'Treatment · you are here',
  'Pro tuhle fázi máme # materiálů.': 'We have # pieces of content for this stage.',
  'Léčba': 'Treatment',
  'Embrya': 'Embryos',
  'Čekání': 'Waiting',
  'Ztráty': 'Losses',
  'Oplození': 'Fertilisation',
  'Právě teď': 'Right now',
  'Plánování': 'Planning',
  'Jste tady': 'You are here',
  'Diagnostika': 'Diagnosis',
  'Nejtěžší dny': 'The hardest days',
  'Když to bolí': 'When it hurts',
  'Příprava těla': 'Preparing your body',
  'Čekání na hCG': 'Waiting for the hCG test',
  'Pozitivní hCG': 'A positive hCG',
  'Revize dělohy': 'Uterine revision (D&C)',
  'Než začne cesta': 'Before the journey starts',
  'Příprava na IVF': 'Preparing for IVF',
  'Otevřít mou fázi': 'Open my stage',
  'Změnit, kde jsem': 'Change where I am',
  'Hledáme odpovědi': 'Looking for answers',
  'Inseminace (IUI)': 'Insemination (IUI)',
  'Samovolný potrat': 'Miscarriage',
  'Přemýšlíme o dítěti': 'Thinking about a baby',
  'Genetická vyšetření': 'Genetic testing',
  'Opakované neúspěchy': 'Repeated failures',
  'Zamlklé těhotenství': 'Missed miscarriage',
  'Snažíme se přirozeně': 'Trying naturally',
  'IUI, IVF a vše kolem': 'IUI, IVF and everything around them',
  'Čekání na další pokus': 'Waiting for the next attempt',
  'Biochemické těhotenství': 'Biochemical pregnancy',
  'Mimoděložní těhotenství': 'Ectopic pregnancy',
  'Celá cesta, ne jeden cyklus': 'The whole journey, not one cycle',
  'Den, na který jste čekala. Krátký zákrok s obrovskou váhou.':
    'The day you have been waiting for. A short procedure that carries enormous weight.',
  'Zákrok, příprava, rekonvalescence a kdy se smí zkoušet znovu.':
    'The procedure, the preparation, the recovery and when you may try again.',
  'Šetrnější krok před IVF. Co obnáší, jak se připravit a co čekat.':
    'A gentler step before IVF. What it involves, how to prepare and what to expect.',
  'Den odběru a dny těsně po něm. Co dělat, co je normální a kdy volat.':
    'The day of the retrieval and the days just after. What to do, what is normal and when to call.',
  'Co se děje s tělem, co s duší a jak dlouho trvá, než se dá pokračovat.':
    'What happens to your body, what happens to your mind and how long it takes before you can go on.',
  'Karyotyp, trombofilie, PGT, imunologie. Co se testuje a co z toho plyne.':
    'Karyotype, thrombophilia, PGT, immunology. What is tested and what follows from it.',
  'Zdravotně náročná a emočně krutá situace. Provedeme vás léčbou i zotavením.':
    'Medically demanding and emotionally cruel. We will take you through the treatment and the recovery.',
  'Pauza, kterou jste si nevybrala. Je to čas na regeneraci, otázky pro lékaře a na sebe.':
    'A pause you did not choose. It is time for recovery, for questions for your doctor and for yourself.',
  'Vaše vajíčka se právě setkala se spermiemi. Zítra přijde první telefonát z embryologie.':
    'Your eggs have just met the sperm. Tomorrow brings the first call from the embryology lab.',
  'Ticho na ultrazvuku, které se nedá popsat. Co následuje zdravotně a co pomáhá psychicky.':
    'A silence at the ultrasound that cannot be described. What follows medically and what helps emotionally.',
  'Tři měsíce před početím se tvoří vajíčko, které možná bude to vaše. Co děláte teď, má smysl.':
    'The egg that may become yours is forming three months before conception. What you do now matters.',
  'Dvě čárky nebo číslo, na které jste čekala. A hned s ním nová vlna otázek a opatrné radosti.':
    'Two lines or the number you were waiting for. And with it a new wave of questions and careful joy.',
  'Než začne stimulace. Papíry, vyšetření, léky, otázky na kliniku a hlavně. Nastavení očekávání.':
    'Before stimulation begins. Paperwork, tests, medication, questions for the clinic and above all. Setting expectations.',
  'Nejtišší a nejtěžší dny cyklu. Vysvětlíme, co znamenají čísla a písmena ve zprávě z laboratoře.':
    'The quietest and hardest days of the cycle. We will explain what the numbers and letters in the lab report mean.',
  'Sledování cyklu, plodné dny, naděje každý měsíc. Provedeme vás tím, aby ze snažení nebyla dřina.':
    'Tracking your cycle, fertile days, hope every month. We will take you through it so that trying does not become a grind.',
  'Když se to nedaří opakovaně. Jaká vyšetření mají smysl, co se dá změnit a jak to psychicky ustát.':
    'When it keeps not working. Which tests make sense, what can be changed and how to bear it.',
  'Nejdelších deset dní vašeho života. Každý den vám řekneme, co se právě děje a co je normální cítit.':
    'The longest ten days of your life. Every day we will tell you what is happening and what is normal to feel.',
  'Injekce, ultrazvuky, folikuly, hormony. Nejintenzivnější týden a půl celého cyklu. Den po dni s vámi.':
    'Injections, ultrasounds, follicles, hormones. The most intense week and a half of the whole cycle. Day by day with you.',
  'Těhotenství, které skončilo dřív, než ho někdo stihl vidět. Byla jste těhotná. Ta ztráta je skutečná.':
    'A pregnancy that ended before anyone could see it. You were pregnant. That loss is real.',
  'Vyšetření, zkratky, čekání na výsledky. Vysvětlíme každé z nich lidsky. Abyste věděla, co se děje a proč.':
    'Tests, abbreviations, waiting for results. We will explain each of them in plain words. So you know what is happening and why.',
  'Období, kdy se rozhodnutí teprve rodí. Není co dohánět. Je čas se ptát, zjišťovat a připravovat se v klidu.':
    'The time when the decision is still taking shape. There is nothing to catch up on. It is time to ask, to find out and to prepare calmly.',
  '# fází od prvního rozhodnutí po batolecí období. Vaše aktuální fáze je zvýrazněná. A když se posunete, stačí ji přepnout.':
    '# stages from the first decision to the toddler years. Your current stage is highlighted. And when you move on, you just switch it.',

  // --- Moje diagnóza a Moje vyšetření ----------------------------------------
  'Věk': 'Age',
  'PCOS': 'PCOS',
  'Nízké AMH': 'Low AMH',
  'Adenomyóza': 'Adenomyosis',
  'Jiný důvod': 'Another reason',
  'Trombofilie': 'Thrombophilia',
  'Endometrióza': 'Endometriosis',
  'Hydrosalpinx': 'Hydrosalpinx',
  'Další důvody': 'Other reasons',
  'Bez partnera': 'Without a partner',
  'Mužský faktor': 'Male factor',
  'Proč jdu na IVF': 'Why I am going for IVF',
  'Poruchy ovulace': 'Ovulation disorders',
  'Myomy nebo polypy': 'Fibroids or polyps',
  'Opakované potraty': 'Recurrent miscarriage',
  'Onkologická léčba': 'Cancer treatment',
  'Děloha a vejcovody': 'Uterus and fallopian tubes',
  'Genetická indikace': 'Genetic indication',
  'Kombinovaný faktor': 'Combined factor',
  'Imunologický nález': 'Immunological finding',
  'Stejnopohlavní pár': 'Same-sex couple',
  'Ovulace a vaječníky': 'Ovulation and ovaries',
  'Nepravidelný cyklus': 'Irregular cycle',
  'Poškozené vejcovody': 'Damaged fallopian tubes',
  'Nízký počet spermií': 'Low sperm count',
  'Zachování plodnosti': 'Fertility preservation',
  'Odstraněné vejcovody': 'Fallopian tubes removed',
  'Porucha štítné žlázy': 'Thyroid disorder',
  'Neprůchodné vejcovody': 'Blocked fallopian tubes',
  'Inzulinová rezistence': 'Insulin resistance',
  'Snížená kvalita spermií': 'Reduced sperm quality',
  'Nevysvětlená neplodnost': 'Unexplained infertility',
  'Spermie ve vzorku nejsou': 'No sperm in the sample',
  'Genetická zátěž v rodině': 'A genetic condition in the family',
  'Zvýšená srážlivost krve.': 'Increased blood clotting.',
  'Snížená ovariální rezerva': 'Reduced ovarian reserve',
  'Anatomická odchylka dělohy': 'An anatomical variation of the uterus',
  'Snížená pohyblivost spermií': 'Reduced sperm motility',
  'Genetika a opakované ztráty': 'Genetics and recurrent loss',
  'Vejcovod naplněný tekutinou.': 'A fallopian tube filled with fluid.',
  'Dvě a víc ztrát těhotenství.': 'Two or more pregnancy losses.',
  'Opakovaně neúspěšné transfery': 'Repeatedly unsuccessful transfers',
  'Často jde ruku v ruce s PCOS.': 'It often goes hand in hand with PCOS.',
  'Cesta s darovanými spermiemi.': 'A path with donor sperm.',
  'Syndrom polycystických ovarií.': 'Polycystic ovary syndrome.',
  'Předčasná ovariální insuficience': 'Premature ovarian insufficiency',
  'Spermie se pohybují méně nebo jinak.': 'The sperm move less or differently.',
  'Nezhoubné útvary v děloze nebo na ní.': 'Benign growths in or on the uterus.',
  'Sliznice prorůstá do svaloviny dělohy.': 'The lining grows into the muscle of the uterus.',
  'Tkáň podobná sliznici roste mimo dělohu.': 'Tissue like the lining grows outside the uterus.',
  'Zamražení vajíček nebo embryí do budoucna.': 'Freezing eggs or embryos for the future.',
  'Transfery, po kterých nepřišlo těhotenství.': 'Transfers that were not followed by a pregnancy.',
  'Plodnost se zajišťuje před zahájením léčby.': 'Fertility is secured before treatment starts.',
  'Přepážka, dvojrohá děloha, srůsty a podobně.':
    'A septum, a bicornuate uterus, adhesions and the like.',
  'Po operaci. Cesta k otěhotnění vede přes IVF.':
    'After surgery. The route to pregnancy goes through IVF.',
  'Odchylky v morfologii nebo ve fragmentaci DNA.':
    'Variations in morphology or in DNA fragmentation.',
  'Vejcovody neumožňují setkání vajíčka a spermie.':
    'The tubes do not let the egg and the sperm meet.',
  'Souhrnný název pro odchylky ve vzorku partnera.':
    "An umbrella term for variations in your partner's sample.",
  'Koncentrace ve vzorku je nižší, než se očekává.':
    'The concentration in the sample is lower than expected.',
  'Dědičné onemocnění v rodině jednoho z partnerů.':
    "An inherited condition in one partner's family.",
  'Sám o sobě není nemoc. Mění ale, kolik je času.':
    'It is not an illness in itself. But it changes how much time there is.',
  'Vaječníky přestaly pracovat dřív, než je obvyklé.':
    'The ovaries stopped working earlier than usual.',
  'Po zánětu, operaci nebo mimoděložním těhotenství.':
    'After an infection, surgery or an ectopic pregnancy.',
  'Řeší se odběrem přímo z varlete nebo dárcovstvím.':
    'It is addressed by retrieval directly from the testicle or by donation.',
  'Nález, kvůli kterému se zvažuje testování embryí.':
    'A finding that makes embryo testing worth considering.',
  'Ovulace nenastává pravidelně nebo nenastává vůbec.':
    'Ovulation does not happen regularly, or does not happen at all.',
  'Ve vaječnících je méně vajíček, než odpovídá věku.':
    'There are fewer eggs in the ovaries than would match your age.',
  'Délka cyklu se výrazně mění nebo se nedá předvídat.':
    'The length of the cycle changes a lot or cannot be predicted.',
  'Vyšetření nenašla příčinu. Je to diagnóza, ne chyba.':
    'The tests found no cause. It is a diagnosis, not a failing.',
  'Hodnota, která orientačně popisuje ovariální rezervu.':
    'A value that gives a rough picture of your ovarian reserve.',
  'Ovlivňuje cyklus i těhotenství, obvykle se dá upravit.':
    'It affects the cycle and pregnancy, and can usually be adjusted.',
  'Co se do seznamu nevešlo. Dopište si ho vlastními slovy.':
    'Whatever did not fit the list. Add it in your own words.',
  'Oblast, kde je řada postupů diskutovaná a důkazy omezené.':
    'An area where many approaches are debated and the evidence is limited.',
  'Sešlo se víc důvodů naráz. V IVF spíš pravidlo než výjimka.':
    'Several reasons came together. In IVF that is the rule rather than the exception.',
  'Označte důvody, které se vás týkají. Může jich být víc. Kombinovaný faktor je v IVF spíš pravidlo než výjimka.':
    'Mark the reasons that apply to you. There may be several. A combined factor is the rule rather than the exception in IVF.',
  'Diagnóza je informace, ne rozsudek. Aplikace z ní **neodvozuje léčbu ani prognózu**: o obojím rozhoduje váš lékař podle celého vašeho obrazu.':
    'A diagnosis is information, not a verdict. The app **does not derive treatment or prognosis** from it: your doctor decides both, from your whole picture.',
  'Zatím nemáte označené nic. Nevadí, ne každá žena zná svoji diagnózu hned a „nevysvětlená neplodnost“ je taky diagnóza.':
    'You have not marked anything yet. That is fine. Not every woman knows her diagnosis straight away, and „unexplained infertility“ is a diagnosis too.',
  'LH': 'LH',
  'AMH': 'AMH',
  'FSH': 'FSH',
  'TSH': 'TSH',
  'Žena': 'Woman',
  'Název': 'Name',
  'Přidat': 'Add',
  'Vyšetření': 'Tests',
  'Prolaktin': 'Prolactin',
  'Progesteron': 'Progesterone',
  'Hysteroskopie': 'Hysteroscopy',
  'Estradiol (E2)': 'Estradiol (E2)',
  'co v seznamu není': 'something not on the list',
  'Ultrazvuk a děloha': 'Ultrasound and uterus',
  'Genetické vyšetření': 'Genetic testing',
  'Funkce štítné žlázy.': 'Thyroid function.',
  'Ultrazvuk malé pánve': 'Pelvic ultrasound',
  'Onkologická cytologie': 'Cervical screening (cytology)',
  'Další odborná vyšetření': 'Further specialist tests',
  'Přidat vlastní vyšetření': 'Add your own test',
  'Hormon druhé poloviny cyklu.': 'The hormone of the second half of the cycle.',
  'Sérologie (infekční markery)': 'Serology (infection markers)',
  'Prohlídka vaječníků a dělohy.': 'A look at the ovaries and the uterus.',
  'AFC. Počet antrálních folikulů': 'AFC. The antral follicle count',
  'Prohlídka dutiny děložní kamerou.': 'A camera look inside the uterine cavity.',
  'Karyotyp nebo vyšetření nosičství.': 'Karyotype or carrier testing.',
  'Standardní gynekologické vyšetření.': 'A standard gynaecological examination.',
  'Hormon spojený se spuštěním ovulace.': 'The hormone that triggers ovulation.',
  'Průchodnost vejcovodů (HSG / HyFoSy)': 'Tubal patency (HSG / HyFoSy)',
  'Orientačně popisuje ovariální rezervu.': 'It gives a rough picture of your ovarian reserve.',
  'Hormon, který pobízí folikuly k růstu.': 'The hormone that pushes the follicles to grow.',
  'Zvýšená hodnota může ovlivnit ovulaci.': 'A raised value can affect ovulation.',
  'Ověří, jestli jsou vejcovody průchodné.': 'It checks whether the tubes are open.',
  'Počítá se na ultrazvuku na začátku cyklu.':
    'It is counted on ultrasound at the start of the cycle.',
  'Před zahájením léčby ji vyžadují kliniky.': 'Clinics require it before treatment starts.',
  'Hlavní ženský hormon, sleduje se i během stimulace.':
    'The main female hormone, also followed during stimulation.',
  'Žádné z těchhle vyšetření nemusí podstoupit každá žena.':
    'Not every woman has to undergo any of these tests.',
  'Co je ve vašem případě potřeba, určuje lékař. Aplikace výsledky nevykládá. Jsou to vaše poznámky, ne diagnóza.':
    'What is needed in your case is decided by your doctor. The app does not interpret results. These are your notes, not a diagnosis.',
  'Co může být na cestě relevantní. Není to povinný seznam. Plán skládá lékař podle vaší anamnézy a každé ženě vyjde jinak.':
    'What may be relevant along the way. This is not a required list. Your doctor puts the plan together from your history, and it comes out differently for every woman.',

  // --- Podpůrná péče, Sledování a Zdraví -------------------------------------
  'Zapsat': 'Record',
  'Masáže': 'Massage',
  'Psychika': 'Mind',
  'Aplikace': 'The app',
  'Homeopatie': 'Homeopathy',
  'Mindfulness': 'Mindfulness',
  'Akupunktura': 'Acupuncture',
  'Co mi pomáhá': 'What helps me',
  'Fyzioterapie': 'Physiotherapy',
  'Reflexologie': 'Reflexology',
  'Životní styl': 'Lifestyle',
  'Psychoterapie': 'Psychotherapy',
  'Omezené důkazy': 'Limited evidence',
  'Doplňková péče': 'Complementary care',
  'Doplňky stravy': 'Food supplements',
  'Něco vlastního': 'Something of your own',
  'Dobře podložené': 'Well supported',
  'Dechová cvičení': 'Breathing exercises',
  'Mojžíšova metoda': 'The Mojžíšová method',
  'Podpůrná skupina': 'A support group',
  'Práce se spánkem': 'Working on your sleep',
  'Pravidelný pohyb': 'Regular movement',
  'Cílený odpočinek': 'Deliberate rest',
  'Moje podpůrná péče': 'My supportive care',
  'Jóga a jemný pohyb': 'Yoga and gentle movement',
  'Relaxační techniky': 'Relaxation techniques',
  'Nutriční poradenství': 'Nutrition counselling',
  'Psychologická konzultace': 'A psychology consultation',
  'Tradiční čínská medicína': 'Traditional Chinese medicine',
  'Fyzioterapie pánevního dna': 'Pelvic floor physiotherapy',
  'Uvolnění svalového napětí.': 'Releasing muscle tension.',
  'Nedostatek kvalitních důkazů': 'Not enough good evidence',
  'Tlaková masáž vybraných zón.': 'Pressure massage of selected zones.',
  'Spánkový režim a jeho úprava.': 'Your sleep routine and how to adjust it.',
  'Úprava jídelníčku s odborníkem.': 'Adjusting your diet with a professional.',
  'Bylinné směsi a další postupy TCM.': 'Herbal mixtures and other TCM approaches.',
  'Jednorázová nebo krátkodobá podpora.': 'One-off or short-term support.',
  'Vpichy tenkých jehel do vybraných bodů.': 'Thin needles inserted at selected points.',
  'Vědomé zpomalení, ne jen „nic nedělat“.': 'Slowing down on purpose, not just „doing nothing“.',
  'Cvičební sestava pracující s pánví a páteří.':
    'An exercise sequence that works with the pelvis and the spine.',
  'Setkávání s ženami, které procházejí tímtéž.':
    'Meeting women who are going through the same thing.',
  'Práce s pozorností a s tím, co se honí hlavou.':
    'Working with attention and with what races through your head.',
  'Zpomalení dechu jako způsob, jak zklidnit tělo.':
    'Slowing your breath as a way to calm your body.',
  'Práce s pohybovým aparátem, bolestí zad a pánve.':
    'Working with the musculoskeletal system, back and pelvic pain.',
  'Zaměřená na svaly pánevního dna a jejich funkci.':
    'Focused on the pelvic floor muscles and how they work.',
  'Postupné uvolnění, vizualizace, řízená relaxace.':
    'Progressive release, visualisation, guided relaxation.',
  'Odborná péče o psychiku v dlouhé a nejisté léčbě.':
    'Professional care for your mind through long and uncertain treatment.',
  'Doplňková metoda bez doloženého mechanismu účinku.':
    'A complementary method with no demonstrated mechanism of action.',
  'Pohyb a dech v tempu, které se dá udržet i během léčby.':
    'Movement and breath at a pace you can keep up even during treatment.',
  'Během stimulace se intenzita upravuje podle pokynů kliniky.':
    "During stimulation the intensity is adjusted according to the clinic's instructions.",
  'Nejsou automaticky vhodné pro každou. Proberte je s klinikou.':
    'They are not automatically right for everyone. Discuss them with your clinic.',
  'Studie existují, ale jsou malé, rozporuplné nebo nízké kvality.':
    'Studies exist, but they are small, contradictory or of low quality.',
  'Přínos pro to, co metoda slibuje, je doložený kvalitními studiemi.':
    'The benefit for what the method promises is backed by good studies.',
  'Kvalitní studie chybí. Neznamená to, že metoda nefunguje. Znamená to, že to nevíme.':
    'Good studies are missing. That does not mean the method does not work. It means we do not know.',
  'Vyberte si dole, co využíváte. Není to úkol. Je to místo, kde uvidíte, co vám za ty měsíce opravdu pomohlo.':
    'Choose below what you use. It is not a task. It is a place where you can see what really helped you over those months.',
  'Aplikace **neslibuje, že cokoli z tohohle zvýší šanci na otěhotnění.** Péče o sebe má smysl sama o sobě. Doplňky stravy nejsou automaticky vhodné pro každou. Proberte je s klinikou, protože mohou zasahovat do léčby.':
    'The app **does not promise that any of this raises your chance of getting pregnant.** Looking after yourself is worth it in its own right. Food supplements are not automatically right for everyone. Discuss them with your clinic, because they can interfere with treatment.',
  'Co využíváte mimo kliniku a jak vám to sedí. U každé metody je poctivě uvedená síla důkazů, ne proto, aby vás od něčeho odradila, ale abyste věděla, do čeho jdete.':
    'What you use outside the clinic and how it suits you. Every method honestly states how strong the evidence is, not to put you off anything, but so you know what you are getting into.',
  'Týden': 'Week',
  'Hodnoty': 'Values',
  'Posledních 7 dní': 'Last 7 days',
  'Co si aplikace všímá': 'What the app notices',
  'Žádá dnešek vs. máte na to': 'What today asks vs. what you have for it',
  '◍ příznaky · ✚ vpichy · ◉ hodnoty': '◍ symptoms · ✚ injections · ◉ values',
  'Náročnost dne proti vaší rezervě za posledních # dní':
    'How demanding the day was against your reserve over the last # days',
  'Stimulace · # zapsaných dní': 'Stimulation · # days recorded',
  'Modrá čára se objeví, jakmile budete mít zapsané aspoň tři dny. Zatím máte # zapsaných dní.':
    'The blue line appears once you have at least three days recorded. So far you have # days recorded.',
  'Až budete mít zapsaných aspoň deset dní, aplikace si začne všímat vzorců, třeba jestli jsou pro vás horší dny zákroků, nebo ty před nimi.':
    'Once you have at least ten days recorded, the app starts noticing patterns, for example whether the days of procedures are worse for you, or the days before them.',
  'Parametr': 'Parameter',
  'např. 1,2': 'e.g. 1.2',
  'Vaše čísla': 'Your numbers',
  'Datum odběru': 'Date of the test',
  'Vložit zprávu': 'Paste a report',
  'Přidat hodnotu': 'Add a value',
  'Uložit hodnotu': 'Save the value',
  'Zatím žádné hodnoty': 'No values yet',
  'Co má smysl sledovat ve vaší fázi': 'What is worth tracking in your stage',
  'Přidejte hodnotu a uvidíte nejen graf, ale i to, co ten parametr v těle dělá a co se s ním dá dělat.':
    'Add a value and you will see not only a chart, but also what that parameter does in your body and what can be done about it.',
  'Můžete je zadat ručně výše, nebo vložit text lékařské zprávy v Dokumentech. Hodnoty z něj vytáhneme samy.':
    'You can enter them by hand above, or paste the text of a medical report under Documents. We will pull the values out of it ourselves.',
  'Odběr hCG (IU/l)': 'hCG test (IU/l)',
  'Morfologie spermií (%)': 'Sperm morphology (%)',
  'Pohyblivost spermií (%)': 'Sperm motility (%)',
  'Koncentrace spermií (mil/ml)': 'Sperm concentration (mil/ml)',
  'Fragmentace DNA spermií (DFI) (%)': 'Sperm DNA fragmentation (DFI) (%)',
  'Progesteron (nmol/l)': 'Progesterone (nmol/l)',
  'Testosteron (nmol/l)': 'Testosterone (nmol/l)',
  'Prolaktin (mIU/l)': 'Prolactin (mIU/l)',

  // --- Otázky pro lékaře -----------------------------------------------------
  'Čeká': 'Waiting',
  'čeká': 'waiting',
  'Jiné': 'Other',
  'Nízká': 'Low',
  'Archiv': 'Archive',
  'archiv': 'archive',
  'Vysoká': 'High',
  'Zákrok': 'The procedure',
  'Peníze': 'Money',
  'Střední': 'Medium',
  'Protokol': 'Protocol',
  'Vyřešeno': 'Answered',
  'vyřešeno': 'answered',
  'Výsledky': 'Results',
  'Na závěr': 'To finish',
  'Po ztrátě': 'After a loss',
  'Nová otázka': 'A new question',
  'Bez termínu': 'No appointment',
  'Než začneme': 'Before we start',
  'Pro ordinaci': 'For the appointment',
  'Čeho se týká': 'What it is about',
  'Čekání a hCG': 'Waiting and hCG',
  'Přidat otázku': 'Add a question',
  'Když to nevyšlo': 'When it did not work',
  'Vždycky se hodí': 'Always worth asking',
  'Zatím bez zápisů': 'Nothing recorded yet',
  'Ke které kontrole': 'For which appointment',
  'Jak je to důležité': 'How important it is',
  'Oplodnění a embrya': 'Fertilisation and embryos',
  'Zkopírovat přehled': 'Copy the summary',
  'Napsat první otázku': 'Write your first question',
  'Návrhy z vašich dat': 'Suggestions from your records',
  'Na co se ženy ptají': 'What women ask about',
  'Genetické testování': 'Genetic testing',
  'Protokol a stimulace': 'Protocol and stimulation',
  'Přehled pro kontrolu': 'A summary for the appointment',
  'přidejte do kalendáře': 'add it to the calendar',
  'Co je teď dalším krokem?': 'What is the next step now?',
  'Co se stalo a víme, proč?': 'What happened, and do we know why?',
  'Zatím tu žádná otázka není': 'There are no questions here yet',
  'Co je teď dalším krokem a kdy?': 'What is the next step, and when?',
  'Podle čeho se bude dávka měnit?': 'What will the dose be changed on?',
  'Proč se embryo přestalo vyvíjet?': 'Why did the embryo stop developing?',
  'Kdy přesně mám jít na odběr hCG?': 'When exactly should I go for the hCG test?',
  'Domácí testy. Mám je vůbec dělat?': 'Home tests. Should I do them at all?',
  'Kdy se ozvete vy a kdy mám volat já?': 'When will you call me and when should I call you?',
  'Do kdy mám brát podporu luteální fáze?': 'How long should I take the luteal phase support?',
  'Kolik embryí biopsii obvykle nepřežije?': 'How many embryos usually do not survive the biopsy?',
  'Co budeme dělat s mozaikovým výsledkem?': 'What will we do with a mosaic result?',
  'Můžu dostat kopii zprávy nebo výsledků?': 'Can I have a copy of the report or the results?',
  'Jak dlouho se budou sledovat hodnoty hCG?': 'How long will the hCG values be followed?',
  'Kdy bude druhý odběr a co budete sledovat?':
    'When will the second test be, and what will you be watching?',
  'Můžete mi doporučit psychologickou podporu?': 'Can you recommend psychological support?',
  'Proč jste zvolil tenhle stimulační protokol?': 'Why did you choose this stimulation protocol?',
  'Jaké mám riziko OHSS a podle čeho ho poznám?':
    'What is my risk of OHSS, and how will I recognise it?',
  'Na jaké příznaky po odběru si mám dát pozor?':
    'Which symptoms should I watch for after the retrieval?',
  'Co všechno hradí pojišťovna a co se doplácí?':
    'What does the insurer cover and what do I pay for?',
  'Co konkrétně test ukáže a co naopak neukáže?':
    'What exactly will the test show, and what will it not show?',
  'Co byste v dalším cyklu udělal jinak a proč?':
    'What would you do differently in the next cycle, and why?',
  'Kolik embryí se vyvíjí a v jakém jsou stadiu?':
    'How many embryos are developing, and what stage are they at?',
  'Kolik cyklů má u nás podle vás smysl zvažovat?':
    'How many cycles do you think are worth considering in our case?',
  'Co může být důvodem opakovaně negativního hCG?':
    'What could be behind a repeatedly negative hCG?',
  'Má smysl další kryotransfer, nebo nový cyklus?':
    'Does another frozen transfer make sense, or a new cycle?',
  'Má smysl něco vyšetřit navíc, než půjdeme dál?':
    'Is it worth testing anything else before we go on?',
  'Proč jsme zvolili klasické IVF, nebo proč ICSI?':
    'Why did we choose conventional IVF, or why ICSI?',
  'Do kterého dne budete embrya kultivovat a proč?':
    'Which day will you culture the embryos to, and why?',
  'Jak embrya hodnotíte a co to hodnocení znamená?':
    'How do you grade the embryos, and what does that grade mean?',
  'Kolik embryí se dá zamrazit a jak dlouho vydrží?':
    'How many embryos can be frozen, and how long do they keep?',
  'Kolik embryí budeme přenášet a proč právě tolik?':
    'How many embryos will we transfer, and why that number?',
  'Jakou hodnotu hCG budete považovat za pozitivní?': 'Which hCG value will you treat as positive?',
  'Jaká je moje sliznice a co to znamená pro termín?':
    'What is my lining like, and what does that mean for the date?',
  'Dá se z tohohle transferu něco vyčíst pro příště?':
    'Is there anything to learn from this transfer for next time?',
  'Jaké léky budu píchat, v kolik hodin a jak dlouho?':
    'Which medicines will I be injecting, at what time, and for how long?',
  'Můžu během stimulace sportovat, pracovat, cestovat?':
    'Can I exercise, work and travel during stimulation?',
  'Kdy bude první ultrazvuk a co na něm budete hledat?':
    'When will the first ultrasound be, and what will you be looking for?',
  'Proč se transfer zrušil a co to znamená pro embrya?':
    'Why was the transfer cancelled, and what does that mean for the embryos?',
  'Jak dlouhá bývá rekonvalescence a kdy můžu do práce?':
    'How long does recovery usually take, and when can I go back to work?',
  'Co znamená krvácení v tomhle období a kdy mám volat?':
    'What does bleeding mean at this point, and when should I call?',
  'Jak bude probíhat anestezie a co si mám vzít s sebou?':
    'How will the anaesthetic work, and what should I bring with me?',
  'Kolik folikulů zatím vidíte a co to znamená pro odběr?':
    'How many follicles can you see so far, and what does that mean for the retrieval?',
  'Co mám dělat a co naopak nedělat v týdnu po transferu?':
    'What should I do, and what should I avoid, in the week after the transfer?',
  'Co dělat, když se o hodinu opozdím nebo dávku vynechám?':
    'What do I do if I am an hour late or miss a dose?',
  'Co ve výsledcích ukazuje na příčinu a co zůstává nejasné?':
    'What in the results points to a cause, and what stays unclear?',
  'Kolik vajíček bylo zralých a kolik se normálně oplodnilo?':
    'How many eggs were mature, and how many fertilised normally?',
  'Jak dlouhá bude rekonvalescence a na co si mám dát pozor?':
    'How long will the recovery be, and what should I watch out for?',
  'Jak často budu chodit na kontroly a co se na nich sleduje?':
    'How often will I come in for check-ups, and what is checked at them?',
  'Jak bude probíhat příprava sliznice a jaké léky budu brát?':
    'How will the lining be prepared, and which medicines will I take?',
  'Je v našem případě genetické testování embryí opodstatněné?':
    'Is genetic testing of the embryos justified in our case?',
  'Proč doporučujete čerstvý transfer, nebo proč kryotransfer?':
    'Why do you recommend a fresh transfer, or why a frozen one?',
  'Proč jdeme právě na IVF a jaké jiné možnosti jsme zvažovali?':
    'Why are we going for IVF specifically, and what other options did we consider?',
  'Která vyšetření jsou v mém případě potřeba a proč zrovna ta?':
    'Which tests are needed in my case, and why those?',
  'Jak dlouho se čeká na výsledek a co se s embryi děje mezitím?':
    'How long is the wait for the result, and what happens to the embryos meanwhile?',
  'Doporučujete nějaká další vyšetření? Co konkrétně by změnila?':
    'Do you recommend any further tests? What exactly would they change?',
  'Kdy bych mohla znovu, kdybych chtěla. A kdy je to naopak brzo?':
    'When could I try again if I wanted to. And when would it be too soon?',
  'Třeba: Proč jsme zvedli dávku a jak dlouho v ní mám pokračovat?':
    'For example: Why did we raise the dose, and how long should I stay on it?',
  'Jak se u vás dozvím výsledky. Telefonem, v aplikaci, na kontrole?':
    'How will I hear the results here. By phone, in an app, at an appointment?',
  'V kolik přesně mám píchnout trigger a co dělat, kdybych se minula?':
    'At exactly what time should I inject the trigger, and what do I do if I miss it?',
  'Kolik to stojí a co se stane, když nezbyde žádné testované embryo?':
    'What does it cost, and what happens if no tested embryo is left?',
  'Za tohle období nemáte zapsané nic, z čeho by se dal souhrn složit.':
    'You have nothing recorded for this period that a summary could be built from.',
  'Je něco, co byste na mém místě chtěl vědět a na co jsem se nezeptala?':
    'Is there anything you would want to know in my place that I have not asked?',
  'Kdy se dozvím, kolik vajíček bylo získáno a kolik z nich bylo zralých?':
    'When will I find out how many eggs were collected and how many of them were mature?',
  'Kdo bude náš ošetřující lékař a s kým budu mluvit, když se něco stane?':
    'Who will be our treating doctor, and who will I speak to if something happens?',
  'Kdy je podle vás na místě zvážit jiné řešení. Dárcovství, nebo skončit?':
    'When do you think it is right to consider another route. Donation, or stopping?',
  'Čas v ordinaci uteče rychle. Co si zapíšete tady, přečtete tam z telefonu.':
    'Time at the appointment goes fast. What you write down here you can read out from your phone there.',
  'Napište ji tak, jak byste ji řekla nahlas. V ordinaci se pak jenom přečte.':
    'Write it the way you would say it out loud. At the appointment you just read it.',
  'Používáme nějakou doplňkovou metodu, a co konkrétně má v mém případě řešit?':
    'Are we using any add-on method, and what exactly is it meant to address in my case?',
  'Na co si mám do příště dávat pozor a kdy je důvod volat mimo ordinační hodiny?':
    'What should I watch out for before next time, and when is there reason to call outside surgery hours?',
  'Tohle je přehled toho, co máte zapsané. Není to lékařské hodnocení ani výklad výsledků. Ty patří vašemu lékaři.':
    'This is a summary of what you have recorded. It is not a medical assessment and not an interpretation of results. Those belong to your doctor.',
  'Stačí málo: zapsat léky, ultrazvuk nebo pár příznaků. A před další kontrolou už tu bude přehled, se kterým se dá do ordinace jít.':
    'It takes very little: record your medication, an ultrasound or a few symptoms. And before the next appointment there will be a summary here you can walk in with.',
  'Otázky ani odpovědi aplikace nijak nevyhodnocuje. Jsou to vaše poznámky. Cokoli zdravotního patří vašemu lékaři a tenhle seznam ho nenahrazuje.':
    'The app does not evaluate the questions or the answers in any way. They are your notes. Anything medical belongs to your doctor, and this list does not replace them.',
  'V ordinaci vypadne z hlavy všechno, co jste si chtěla říct. A doma to zase naskočí. Proto se otázky zapisují průběžně: co vás napadne teď, přečtete tam z telefonu.':
    'At the appointment everything you meant to say falls out of your head. And at home it comes back. That is why questions are written down as they come: whatever occurs to you now you can read out from your phone there.',
  'Hotové otázky k odkliknutí. Nejsou to rady, co si máte přát. Jsou to věty, které se v ordinaci hodí říct nahlas. Nahoře je to, co patří k vaší fázi.':
    'Ready-made questions to tap. They are not advice about what you should want. They are sentences worth saying out loud at the appointment. What belongs to your stage is at the top.',
  'Zatím nemáte v kalendáři žádnou nadcházející kontrolu. Otázka počká bez termínu, nebo si termín':
    'You have no upcoming appointment in the calendar yet. The question will wait without a date, or you can',

  // --- věty s doplňovaným datem ----------------------------------------------
  'Přehled zapsaných údajů od {} do {}, {}.': 'A summary of what you recorded from {} to {}, {}.',
  'Přehled zapsaných údajů od {} do {}, {}, {}.':
    'A summary of what you recorded from {} to {}, {}, {}.',

  // --- časová spojení --------------------------------------------------------
  'dnes': 'today',
  'zítra': 'tomorrow',
  'Zítra': 'Tomorrow',
  'Nejbližší milník:': 'Next milestone:',
  'Nejbližší milník: {} {}.': 'Next milestone: {} {}.',
  'nepřerušeně {}': '{} in a row',
  'Odběr hCG dnes': 'hCG test today',
  'Odběr hCG dnes.': 'hCG test today.',
  'Odběr hCG {}': 'hCG test {}',
  'Odběr hCG {} (odhad)': 'hCG test {} (estimate)',
  'Transfer dnes': 'Transfer today',
  'Transfer {}': 'Transfer {}',
  'Odběr dnes': 'Retrieval today',
  'Odběr {}': 'Retrieval {}',
  'Odběr {}.': 'Retrieval {}.',
  'Do odběru hCG zbývá {}.': '{} until the hCG test.',
  'Transfer {} od dneška.': 'Transfer {} from today.',
  'Odběr hCG je {}, {}.': 'The hCG test is {}, {}.',

  // --- Historie a prázdný cyklus ---------------------------------------------
  'Sestavené z toho, co máte zapsané za {}. Nejsou to rady, jen věty, které se hodí říct nahlas.':
    'Put together from what you have recorded over {}. These are not advice, just sentences worth saying out loud.',
  'Celá cesta na jednom místě.': 'The whole journey in one place.',
  'Až založíte první cyklus, objeví se tu shrnutí každého z nich. Od počtu vajíček po výsledek posledního transferu.':
    'Once you start your first cycle, a summary of each one will appear here. From the number of eggs to the outcome of the last transfer.',
  'Zatím žádný cyklus': 'No cycle yet',
  'Až začne stimulace nebo příprava na transfer, založte si cyklus. Budete do něj zapisovat termíny, čísla z laboratoře, embrya i transfery.':
    'When stimulation or the preparation for a transfer begins, start a cycle. You will record appointments, lab numbers, embryos and transfers in it.',

  // --- Embrya, Transfery a Po transferu --------------------------------------
  'Karta pro každé embryo. Vývoj po dnech, genetika, kam nakonec šlo.':
    'A card for every embryo. Development day by day, genetics, where it finally went.',
  'Zatím tu žádné embryo není': 'There is no embryo here yet',
  'Embrya se zapisují u konkrétního cyklu. Otevřete kartu cyklu a v sekci Embrya přidejte první.':
    'Embryos are recorded under a specific cycle. Open the cycle card and add the first one in the Embryos section.',
  'Všechny transfery na jednom místě, napříč cykly.':
    'Every transfer in one place, across all cycles.',
  'Zatím tu žádný transfer není': 'There is no transfer here yet',
  'Transfery se zapisují u cyklu. V jednom cyklu jich může být víc. Čerstvý a po něm kryotransfery ze stejné zásoby embryí.':
    'Transfers are recorded under a cycle. One cycle can hold several. A fresh one and then frozen transfers from the same batch of embryos.',
  'Den po dni od transferu až k odběru hCG.': 'Day by day from the transfer to the hCG test.',
  'Až budete mít transfer za sebou, zapište si ho do cyklu. Aplikace pak sama spočítá, kolikátý je den, co se v téhle fázi může dít a kolik zbývá do odběru hCG.':
    'Once a transfer is behind you, record it in the cycle. The app will then work out which day you are on, what may happen at this stage and how long is left until the hCG test.',

  // --- Kalendář, léky a Zdravotní data ---------------------------------------
  'Od': 'From',
  'Do': 'To',
  'Kdy': 'When',
  'Typ': 'Type',
  'Lék': 'Medicine',
  'Gel': 'Gel',
  'jiné': 'other',
  'Odběr': 'Retrieval',
  'Porod': 'Birth',
  'Forma': 'Form',
  'Sprej': 'Spray',
  'Dávka': 'Dose',
  'čípek': 'pessary',
  'dávka': 'dose',
  'Obden': 'Every other day',
  'kapsle': 'capsule',
  'Vlastní': 'Custom',
  'Injekce': 'Injection',
  'Náplast': 'Patch',
  'tableta': 'tablet',
  'Co to je': 'What it is',
  'Kontrola': 'Check-up',
  'Očkování': 'Vaccination',
  'Letrozol': 'Letrozole',
  'Klomifen': 'Clomiphene',
  'Jednotka': 'Unit',
  'Přípravek': 'Product',
  'Prednison': 'Prednisone',
  'Opakování': 'Repeat',
  'Každý den': 'Every day',
  'např. 225': 'e.g. 225',
  'Přidat lék': 'Add a medicine',
  'Kortikoidy': 'Corticosteroids',
  'Zatím žádné': 'None yet',
  'Antibiotika': 'Antibiotics',
  'Jednorázově': 'Once only',
  'např. 20:00': 'e.g. 20:00',
  'Levothyroxin': 'Levothyroxine',
  'např. Gonal-f': 'e.g. Gonal-f',
  'Termíny a léky': 'Appointments and medication',
  'Přidat událost': 'Add an event',
  'Jiný přípravek': 'Another product',
  'Kyselina listová': 'Folic acid',
  'Přidat do kalendáře': 'Add to the calendar',
  'Vyberte ze seznamu…': 'Choose from the list…',
  'Tableta nebo kapsle': 'Tablet or capsule',
  'Přidat do protokolu': 'Add to the protocol',
  'Zatím nic v kalendáři': 'Nothing in the calendar yet',
  'Estrofem, po transferu': 'Estrofem, after the transfer',
  'Hormonální antikoncepce': 'Hormonal contraception',
  'Progynova, po transferu': 'Progynova, after the transfer',
  'co k tomu klinika řekla': 'what the clinic said about it',
  'Decapeptyl, jako trigger': 'Decapeptyl, as the trigger',
  'Nízkomolekulární heparin': 'Low molecular weight heparin',
  'Estradiol, jiný přípravek': 'Estradiol, another product',
  'Ganirelix, jiný přípravek': 'Ganirelix, another product',
  'Diphereline, jako trigger': 'Diphereline, as the trigger',
  'Kyselina acetylsalicylová': 'Acetylsalicylic acid',
  'Progesteron, jiný přípravek': 'Progesterone, another product',
  'Čípek nebo vaginální tableta': 'Pessary or vaginal tablet',
  'Například kontrola u lékařky': 'For example a check-up at the doctor',
  'Podpora po transferu': 'Support after the transfer',
  'Nepovinné, třeba čas nebo co si vzít': 'Optional, for example the time or what to bring',
  'Když v seznamu není, napište název rovnou do pole níž.':
    'If it is not on the list, type the name straight into the field below.',
  'Přidejte si termín, nebo doplňte data v nastavení. Část událostí pak vznikne sama.':
    'Add an appointment, or fill in dates under Settings. Some events will then appear on their own.',
  'Co plyne z vašich dat, doplníme sami. Každou událost si můžete odškrtnout a připsat k ní, co na ní zaznělo.':
    'Whatever follows from your records we fill in ourselves. You can tick off every event and note what was said at it.',
  'Tenhle seznam je jen číselník pro zápis, ne doporučení. Co, kolik a kdy budete brát, určuje výhradně vaše klinika. Aplikace nikdy nenavrhne dávku, změnu ani vysazení.':
    'This list is only a picker for recording, not a recommendation. What you take, how much and when is decided solely by your clinic. The app never suggests a dose, a change or stopping.',
  'Čas': 'Time',
  'Datum': 'Date',
  'Měření': 'Measurements',
  'Kam dál': 'Where next',
  'Poznámka': 'Note',
  'např. 76': 'e.g. 76',
  'např. 72': 'e.g. 72',
  'Ultrazvuk': 'Ultrasound',
  'Laboratoř': 'Lab',
  'Váha (kg)': 'Weight (kg)',
  'nepovinné': 'optional',
  'např. 118': 'e.g. 118',
  'např. 7,5': 'e.g. 7.5',
  'např. 64,3': 'e.g. 64.3',
  'např. 2000': 'e.g. 2000',
  'Za den (ml)': 'Per day (ml)',
  'např. 36,55': 'e.g. 36.55',
  'Teplota (°C)': 'Temperature (°C)',
  'Hodin spánku': 'Hours of sleep',
  'Tep za minutu': 'Beats per minute',
  'Zatím žádné měření': 'No measurements yet',
  'Horní (systolický)': 'Upper (systolic)',
  'Dolní (diastolický)': 'Lower (diastolic)',
  'Zapsat první teplotu': 'Record your first temperature',
  'Folikuly a sliznice tak, jak vám je řekl lékař':
    'Follicles and lining exactly as your doctor told you',
  'Klidový tep, ideálně vsedě a ve stejnou denní dobu.':
    'Resting pulse, ideally seated and at the same time of day.',
  'Příznaky s intenzitou. Patří ke stejnému rozhovoru s lékařem':
    'Symptoms with their intensity. They belong to the same conversation with your doctor',
  'Zatím žádný zápis. První přidáte ve formuláři nad tímhle řádkem.':
    'No entries yet. You can add the first one in the form above this line.',
  'Hormony a odběry s grafem i vysvětlením, co parametr v těle dělá':
    'Hormones and blood tests with a chart and an explanation of what the parameter does in your body',
  'Kolik hodin jste opravdu spala. Půlhodiny zapisujte s čárkou, třeba 7,5.':
    'How many hours you really slept. Write half hours with a decimal point, for example 7.5.',
  'Zapisuje se horní a dolní hodnota. Měří se vsedě, po pár minutách v klidu.':
    'Record the upper and the lower value. Measure seated, after a few minutes of rest.',
  'Kolik jste za den vypila, v mililitrech. Kolik pít vám řekne klinika, hlavně kolem odběru.':
    'How much you drank over the day, in millilitres. How much to drink is something your clinic will tell you, especially around the retrieval.',
  'Co si měříte doma. Zůstává to ve vašem zařízení a aplikace to nehodnotí, jen ukazuje vývoj.':
    'What you measure at home. It stays on your device and the app does not assess it, it only shows the trend.',
  'Měří se hned po probuzení, ještě před vstáním, každý den přibližně ve stejnou dobu a stejným teploměrem.':
    'Measure straight after waking, before getting up, at roughly the same time every day and with the same thermometer.',
  'Ve stimulaci se váha může měnit ze dne na den. Hodnoty se nejlíp porovnávají, když se vážíte ráno a nalačno.':
    'During stimulation your weight can change from day to day. The values compare best if you weigh yourself in the morning on an empty stomach.',
  'Křivku vám tu aplikace nevyhodnocuje a nehledá v ní ovulaci. Na to je potřeba znát celý kontext cyklu. Zápisy slouží vám a vašemu lékaři.':
    'The app does not interpret the curve here and does not look for ovulation in it. That needs the whole context of your cycle. These records are for you and your doctor.',
  'Nejsledovanější bývá bazální teplota. Formulář na ni najdete hned pod tímhle textem. Hodnoty z odběrů patří do Laboratoře, folikuly do Ultrazvuku.':
    'The most commonly tracked is basal temperature. You will find its form right below this text. Blood test values belong under Lab, follicles under Ultrasound.',
  'Aplikace hodnoty nehodnotí. Orientační rozmezí se liší podle laboratoře, dne cyklu, věku i diagnózy. Co konkrétní číslo znamená pro vás, řekne jedině váš lékař.':
    'The app does not assess values. Reference ranges differ by laboratory, by day of the cycle, by age and by diagnosis. What a particular number means for you can only be said by your doctor.',
  '◈ Váha': '◈ Weight',
  '☾ Spánek': '☾ Sleep',
  '◍ Krevní tlak': '◍ Blood pressure',
  '◇ Pitný režim': '◇ Fluid intake',
  '# zapsaných údajů': '# values recorded',
  '◉ Bazální teplota': '◉ Basal temperature',
  '♡ Tepová frekvence': '♡ Heart rate',

  // --- Profil, rozcestník, hledání, knihovna, Co když a finance --------------
  'Dnešní dávky': "Today's doses",
  'Na dnešek nejsou žádné dávky': 'There are no doses for today',
  'Až si přidáte léky do protokolu, objeví se tady každý den samy. I s odškrtáváním.':
    'Once you add medication to the protocol, it will appear here every day on its own. With tick boxes.',
  'Předplatné': 'Subscription',
  'Moje dokumenty': 'My documents',
  'Všechno ostatní': 'Everything else',
  'Více o aplikaci BlooMia': 'More about BlooMia',
  'Proč má smysl zapisovat.': 'Why recording things is worth it.',
  'Průvodkyně vaší IVF cestou': 'Your companion through IVF',
  'Rozcestník na zbytek aplikace': 'A signpost to the rest of the app',
  'Jak funguje a jak ho spravovat': 'How it works and how to manage it',
  'Co si k léčbě beru mimo kliniku': 'What I use alongside treatment outside the clinic',
  'Papíry z kliniky na jednom místě': 'Paperwork from the clinic in one place',
  'Co ukázat tomu, kdo je vedle vás': 'What to show the person beside you',
  'Fáze, situace, vzhled a vaše data': 'Stage, situation, appearance and your data',
  'Proč jdu na IVF. Může jich být víc': 'Why I am going for IVF. There may be several reasons',
  'Co se chci zeptat, než na to zapomenu': 'What I want to ask before I forget',
  'Co může být relevantní a co už mám za sebou':
    'What may be relevant and what I already have behind me',
  'Ženy ve stejné fázi. Můžete zůstat anonymní': 'Women at the same stage. You can stay anonymous',
  'Ženy ve stejné fázi. Můžete zůstat anonymní.':
    'Women at the same stage. You can stay anonymous.',
  'Proč BlooMia vznikla a co znamená její jméno': 'Why BlooMia was made and what its name means',
  'Kolik cesta stála, co je zaplacené a co zbývá':
    'What the journey has cost, what is paid and what is left',
  'Zpětná vazba, nápad, recenze nebo co vám chybí':
    'Feedback, an idea, a review or what you are missing',
  'Kontakty, telefon i to, kam volat mimo ordinační hodiny':
    'Contacts, phone numbers and where to call outside surgery hours',
  'Všechna vaše data zůstávají ve vašem zařízení. Nic se nikam neodesílá a aplikace je nikomu nesdílí. Sdílet je s lékařem můžete jen vy.':
    'All your data stays on your device. Nothing is sent anywhere and the app shares it with nobody. Only you can share it with your doctor.',
  'Nic se nikam neodesílá a nemusíte nic vyplňovat najednou. I jedno datum stačí na to, aby se obsah začal přizpůsobovat.':
    'Nothing is sent anywhere and you do not have to fill everything in at once. Even one date is enough for the content to start adapting.',
  'Vznikla z vlastní zkušenosti, ne u počítače. Právě proto počítá i se dny, kdy to nevyjde, a s tím, že cesta nemusí být přímá.':
    'It came out of lived experience, not out of a computer. That is exactly why it also allows for the days when it does not work out, and for the fact that the road need not be straight.',
  'BlooMia je aplikace pro ženy, které procházejí léčbou neplodnosti. Není to obecná databáze článků. Drží pohromadě vaši konkrétní cestu: cykly, odběry, embrya, transfery, léky, výsledky, náklady i to, jak vám u toho je.':
    'BlooMia is an app for women going through fertility treatment. It is not a general database of articles. It holds your own particular journey together: cycles, retrievals, embryos, transfers, medication, results, costs and how you feel through it all.',
  'Z toho, co si zapíšete, aplikace pozná, kde právě jste: kolikátý je den po transferu, jak staré embryo se přenášelo, jestli výsledek už znáte. Podle toho vybírá, co vám ukáže dnes. Bez zápisů umí jen obecné rady, a těch je na internetu dost.':
    'From what you record, the app can tell where you are: which day after the transfer it is, how old the embryo was, whether you already know the result. It chooses what to show you today from that. Without records it can only give general advice, and there is plenty of that on the internet.',
  'Kalendář a léky': 'Calendar and medication',
  'Proč vidím právě tohle': 'Why I am seeing this',
  'Fáze, situace, vzhled a vaše data.': 'Stage, situation, appearance and your data.',
  'Chcete vidět, jak se obsah skládá?': 'Want to see how the content is put together?',
  'Co předplatné zahrnuje a jak ho spravovat.':
    'What the subscription includes and how to manage it.',
  'Časová osa a dopisy. Jednou z toho může být kniha.':
    'A timeline and letters. One day it could be a book.',
  'Vaše hodnoty v čase. Graf ukazuje vývoj, ne diagnózu.':
    'Your values over time. The chart shows a trend, not a diagnosis.',
  'Vložte text lékařské zprávy a vytáhneme z něj hodnoty.':
    'Paste the text of a medical report and we will pull the values out of it.',
  'Termíny a léky. Část se doplní automaticky z vaší fáze.':
    'Appointments and medication. Some of it is filled in automatically from your stage.',
  'Ať na nic nezapomenete. A odškrtnuté zůstane odškrtnuté.':
    'So you forget nothing. And what is ticked off stays ticked off.',
  '# materiálů. Hledejte cokoliv.': '# pieces of content. Search for anything.',
  'Všech # fází. Kde jste byla, kde jste a co přijde.':
    'All # stages. Where you have been, where you are and what is coming.',
  'Zkuste': 'Try',
  'Folikul': 'Follicle',
  'cvičení': 'exercises',
  'doplňky': 'supplements',
  'partner': 'partner',
  'Co hledáte?': 'What are you looking for?',
  'Najít v aplikaci': 'Find in the app',
  'Nenahrazuje lékaře': 'It does not replace a doctor',
  'Napište slovo nebo otázku…': 'Type a word or a question…',
  'Ukazuje jen to, co je v aplikaci.': 'It only shows what is inside the app.',
  'Stačí jedno slovo („OHSS“, „progesteron“, „hatching“) nebo celá otázka.':
    'One word is enough („OHSS“, „progesterone“, „hatching“) or a whole question.',
  'Napište klíčové slovo nebo otázku. Prohledá se všechno, co v aplikaci je. Články, pojmy, rady, diagnózy, doplňky i hodnoty.':
    'Type a keyword or a question. Everything in the app will be searched. Articles, terms, advice, diagnoses, supplements and values.',
  'Hledání **nechodí na internet a nic negeneruje.** Ukazuje jen to, co je v aplikaci. **Nenahrazuje lékaře**: o vaší léčbě rozhoduje váš tým na klinice.':
    'The search **does not go to the internet and generates nothing.** It only shows what is inside the app. **It does not replace a doctor**: your treatment is decided by your team at the clinic.',
  'Vše': 'All',
  'Všechno': 'Everything',
  'Celá knihovna': 'The whole library',
  'Pro vaši fázi': 'For your stage',
  'Seřazeno podle pořadí v knihovně': 'Sorted by their order in the library',
  'Zkuste: hcg, blastocysta, OHSS, endometrium…': 'Try: hcg, blastocyst, OHSS, endometrium…',
  'Zobrazeno prvních # z #. Zkuste hledání zúžit.':
    'Showing the first # of #. Try narrowing your search.',
  '# materiálů a # pojmů. Hledá se v nadpisech i v textu.':
    '# pieces of content and # terms. Both titles and text are searched.',
  'Ať na nic nezapomenete': 'So you forget nothing',
  'Hledáte něco konkrétního?': 'Looking for something specific?',
  'Obsah poskládaný na dnešek': 'Content put together for today',
  'Řady se skládají podle toho, kolikátý je den vaší cesty. U každé je napsáno, proč ji vidíte. A zítra budou jiné.':
    'The rows are put together according to which day of your journey it is. Each one says why you are seeing it. And tomorrow they will be different.',
  'Protože jste #. den stimulace': 'Because you are on day # of stimulation',
  'Prohledat celou knihovnu (# materiálů)': 'Search the whole library (# pieces)',
  'Odškrtnuté položky se pamatují. Řazeno podle toho, co je teď nejblíž.':
    'Ticked items are remembered. Sorted by what is closest now.',
  'Texty jsou obecné. O vaší situaci rozhoduje vaše klinika. Aplikace ji nenahrazuje.':
    'These texts are general. Your situation is decided by your clinic. The app does not replace it.',
  'Odpovědi na situace, které přijdou mimo ordinační hodiny. U každé je napsané, co bývá běžné, co probrat s klinikou a kdy volat hned.':
    'Answers for situations that come up outside surgery hours. Each one says what tends to be normal, what to discuss with the clinic and when to call straight away.',
  'Při silné bolesti břicha, silném krvácení, dušnosti, horečce nebo kolapsu nečtěte. Volejte svou kliniku. Mimo její hodiny záchrannou službu na 155.':
    'With severe abdominal pain, heavy bleeding, breathlessness, fever or collapse, do not read. Call your clinic. Outside its hours, call the emergency service on 155.',
  'Cykly': 'Cycles',
  'Kategorie': 'Category',
  'Zatím bez záznamu': 'Nothing recorded yet',
  'Přidat první výdaj': 'Add your first expense',
  'Zatím tu žádný výdaj není': 'There is no expense here yet',
  'Kolik vás cesta zatím stála, kolik už je zaplaceno a co ještě čeká.':
    'What the journey has cost you so far, how much is already paid and what is still to come.',
  'Ceny se mezi klinikami liší a mění se v čase. Aplikace žádnou cenu nenavrhuje ani neověřuje. Zapisujete to, co jste opravdu zaplatila.':
    'Prices differ between clinics and change over time. The app neither suggests nor verifies any price. You record what you actually paid.',
  'Zapisujte si, co za léčbu platíte. Jedna položka je jeden náklad a můžete k ní přidat tolik plateb, kolik jich bylo. Součty si aplikace spočítá sama.':
    'Record what you pay for treatment. One item is one cost, and you can add as many payments to it as there were. The app works out the totals itself.',

  // --- chyba předplatného ----------------------------------------------------
  'Předplatné se nepodařilo aktivovat. Napište prosím na {}.':
    'The subscription could not be activated. Please write to {}.',

  // --- Napište mi, Komunita a Partner ----------------------------------------
  'Téma': 'Topic',
  'Nápad': 'An idea',
  'Zpráva': 'Message',
  'E-mail': 'Email',
  'Recenze': 'A review',
  'Odeslat': 'Send',
  'Pochvala': 'Praise',
  'Nepovinné': 'Optional',
  'Zpětná vazba': 'Feedback',
  'Co vám chybí': 'What you are missing',
  'Co se odešle': 'What gets sent',
  'Nic z deníku.': 'Nothing from the diary.',
  'Něco nefunguje': 'Something is not working',
  'Co se vám líbí': 'What you like',
  'Co se neodešle': 'What does not get sent',
  'Tenhle formulář': 'This form',
  'Chci něco změnit': 'I want something changed',
  'Co byste změnila': 'What you would change',
  'Nic z vaší léčby.': 'Nothing from your treatment.',
  'Co mi v aplikaci chybí': 'What I am missing in the app',
  'Kdybych měla odpovědět': 'If I were to reply',
  'Jak se vám BlooMia používá': 'How you are finding BlooMia',
  'Gabriela mi může odpovědět': 'Gabriela may reply to me',
  'není místo na zdravotní dotazy': 'is not the place for medical questions',
  'Žádné finance a žádné dokumenty.': 'No costs and no documents.',
  'Napište cokoliv. Klidně jednu větu.': 'Write anything. One sentence is fine.',
  'Ani nálada, ani jedno slovo ze zápisů.': 'Not your mood, not one word from your entries.',
  'Bez zaškrtnutí se váš e-mail neodesílá vůbec.':
    'If you do not tick this, your email is not sent at all.',
  'Jen to, co jste napsala do tohohle formuláře.': 'Only what you wrote in this form.',
  'Žádné cykly, embrya, transfery, hodnoty ani hCG.':
    'No cycles, embryos, transfers, values or hCG.',
  'Nepovinné. Když nevyplníte nic, odešle se jen zpráva výš.':
    'Optional. If you fill in nothing, only the message above is sent.',
  'Jméno a e-mail, pokud jste je vyplnila a povolila odpověď.':
    'Your name and email, if you filled them in and allowed a reply.',
  'Tenhle formulář **není místo na zdravotní dotazy**. S otázkami o léčbě, lécích a výsledcích se obracejte na svou kliniku. Gabriela není lékařka a nemůže je zodpovědět.':
    'This form **is not the place for medical questions**. For questions about treatment, medication and results, go to your clinic. Gabriela is not a doctor and cannot answer them.',
  'Chybí vám v aplikaci BlooMia něco? Něco nefunguje? Nebo vás naopak něco potěšilo? Píše to Gabriela, ne robot, a čte to taky ona.':
    'Is something missing from BlooMia? Is something not working? Or did something please you? Gabriela writes this, not a robot, and she reads it too.',
  'Zpráva chodí na {}. Když aplikace nemůže odeslat sama, otevře váš poštovní program a zprávu vám předvyplní, ať se neztratí.':
    'The message goes to {}. If the app cannot send it itself, it opens your mail program and fills the message in for you so it does not get lost.',
  'Skupiny': 'Groups',
  'pro vás': 'for you',
  'Nevyšlo to': 'It did not work out',
  'Všeobecný chat': 'General chat',
  'Jsem po transferu': 'I am after a transfer',
  'Jsem v IVF procesu': 'I am in the IVF process',
  'Proč jsou jen čtyři': 'Why there are only four',
  'Skupiny zatím nejsou propojené:': 'The groups are not connected yet:',
  'Doporučená podle vaší fáze je nahoře': 'The one suggested for your stage is at the top',
  'Všechno ostatní. Otázky, zkušenosti, tipy a běžný život, který během léčby jde dál.':
    'Everything else. Questions, experiences, tips and the ordinary life that carries on through treatment.',
  'Čtyři skupiny podle toho, kde v léčbě jste. Jedna se vám nabídne první, ale do všech smíte kdykoliv.':
    'Four groups according to where you are in treatment. One is offered to you first, but you may enter any of them at any time.',
  'Profil může být zcela anonymní. Komunita nikdy nevidí skutečné jméno ani zdravotní údaje. Přepnout to jde v nastavení.':
    'Your profile can be entirely anonymous. The community never sees your real name or any health data. You can switch it under Settings.',
  'Dny po ET nebo KET, čekání na hCG, příznaky, nervozita, testování. Nejdelší dva týdny, které se dají strávit ve společnosti.':
    'The days after an ET or a frozen transfer, waiting for hCG, symptoms, nerves, testing. The longest two weeks, which can be spent in company.',
  'Stimulace, kontroly, odběr, čekání na embrya, laboratoř, genetika, léky. Pro všechny, kdo jsou v cyklu a transfer je teprve před nimi.':
    'Stimulation, check-ups, retrieval, waiting for embryos, the lab, genetics, medication. For everyone in a cycle whose transfer is still ahead of them.',
  'Negativní hCG, neúspěšný nebo zrušený transfer, biochemické těhotenství, ztráta, cyklus bez embrya. Bez rad a bez cizích dobrých zpráv.':
    "A negative hCG, an unsuccessful or cancelled transfer, a biochemical pregnancy, a loss, a cycle with no embryo. Without advice and without other people's good news.",
  'co napíšete, zůstane ve vašem zařízení a nikdo jiný to nevidí. Ostatní příspěvky jsou ukázkové.':
    'whatever you write stays on your device and nobody else sees it. The other posts are examples.',
  'Skupina po neúspěchu je oddělená schválně. Když se to nepovede, nemáte číst o cizím pozitivním hCG dřív, než si to sama vyberete.':
    "The group after a failure is kept separate on purpose. When it does not work out, you should not read about somebody else's positive hCG before you choose to.",
  'Dřív se skupiny dělily podle fáze, měsíce transferu, diagnózy, kliniky i věku. Vycházelo jich přes deset a v každé by byl někdo sám. Čtyři jsou tak akorát.':
    'The groups used to be split by stage, month of transfer, diagnosis, clinic and age. That came to over ten, and in each one somebody would be on their own. Four is about right.',
  'Co pomáhá': 'What helps',
  'Z knihovny': 'From the library',
  'Čemu se vyhnout': 'What to avoid',
  'Co právě prožívá': 'What she is going through',
  ': a nikdy je neuvidí.': ': and will never see them.',
  'Ke čtení pro partnera': 'Reading for your partner',
  'Pro toho, kdo je vedle': 'For the person beside you',
  'Nálada zatím nezapsaná': 'No mood recorded yet',
  'Nevidí deník, dopisy ani zdravotní hodnoty':
    'He does not see the diary, the letters or any health values',
  'Partner vidí fázi, průměrnou náladu a rady.':
    'Your partner sees the stage, the average mood and the tips.',
  'Po odběru vajíček převezměte domácnost bez ptaní.':
    'After the egg retrieval, take over the household without asking.',
  'Řekněte nahlas, že to zvládá. Ona to o sobě teď neví.':
    'Say out loud that she is managing. Right now she does not know it about herself.',
  'Hlídejte čas dávek. Je to konkrétní pomoc, ne kontrola.':
    'Keep an eye on the timing of doses. That is concrete help, not supervision.',
  'Naučte se píchat injekce. I když je odmítne, nabídněte to.':
    'Learn to give the injections. Even if she declines, offer.',
  'Neptejte se každý den „a co embrya“. Když bude co říct, řekne to.':
    'Do not ask „so what about the embryos“ every day. When there is something to say, she will say it.',
  'Nekomentujte nálady jako „to jsou ty hormony“, i když to je pravda.':
    'Do not comment on her moods with „that is the hormones“, even when it is true.',
  'Konkrétní rady místo „buď oporou“. Ukažte tuhle obrazovku partnerovi.':
    'Concrete tips instead of „be supportive“. Show this screen to your partner.',
  'Hormonální stimulace je fyzicky i psychicky náročná. Nálady kolísají a není to její volba. Břicho může být nafouklé a citlivé, injekce se píchají každý den ve stejný čas.':
    'Hormonal stimulation is demanding both physically and emotionally. Her moods swing and that is not her choice. Her abdomen may be bloated and tender, and the injections are given every day at the same time.',

  // --- Můj příběh a Členství -------------------------------------------------
  'Komu': 'To whom',
  'Sobě': 'To myself',
  'Text': 'Text',
  'Těžké': 'Hard',
  'Dobré': 'Good',
  'Nadpis': 'Title',
  'Smíšené': 'Mixed',
  '# záznam': '# entry',
  '# záznamy': '# entries',
  '# záznamů': '# entries',
  'Partnerovi': 'To my partner',
  'Co se stalo': 'What happened',
  'Jak to bylo': 'How it was',
  'Nezapisovat': 'Do not record',
  'Mému embryu': 'To my embryo',
  'Moje kronika': 'My chronicle',
  'Nejtěžší den': 'The hardest day',
  'z vašich dat': 'from your records',
  'Napsat dopis': 'Write a letter',
  'Mému miminku': 'To my baby',
  'Uložit dopis': 'Save the letter',
  'Přidat na osu': 'Add to the timeline',
  'Nezapomenutelné': 'Unforgettable',
  'Přidat vzpomínku': 'Add a memory',
  'Jak mi u toho bylo': 'How I felt about it',
  'Moje cesta k miminku': 'My journey to a baby',
  'Tomu, kdo tu nezůstal': 'To the one who did not stay',
  'Například: Ahoj, ty malá': 'For example: Hello, little one',
  'Například: první ultrazvuk': 'For example: the first ultrasound',
  'Pište, jak vám zobák narostl.': 'Write exactly as it comes to you.',
  'Pár vět. Za rok si je nebudete pamatovat.':
    'A few sentences. In a year you will not remember them.',
  'Embryu, miminku, sobě, tomu, kdo tu nezůstal. Dopisy jsou soukromé. Nikdo jiný je nevidí.':
    'To an embryo, to a baby, to yourself, to the one who did not stay. The letters are private. Nobody else sees them.',
  'Chronologie celé cesty. Od prvního snažení po dnešek. Milníky léčby se doplňují samy, vzpomínky a fotky přidáváte vy. Jednou z toho může být kniha.':
    'A chronology of the whole journey. From the first attempt to today. Treatment milestones fill themselves in, memories and photos you add yourself. One day it could be a book.',
  'Neaktivní': 'Inactive',
  'Aktivní': 'Active',
  'Co je v ceně': 'What is included',
  'Proč jedna cena': 'Why a single price',
  ', i po skončení.': ', even after it ends.',
  'Aktivovat předplatné': 'Activate the subscription',
  'Předplatné zatím nemáte.': 'You do not have a subscription yet.',
  'Předplatné běží.': 'The subscription is active.',
  'Zrušit to můžete kdykoliv.': 'You can cancel at any time.',
  'Obnoví se {} a strhne se {} Kč. Zrušit to můžete kdykoliv do té doby.':
    'It renews on {} and {} CZK will be charged. You can cancel at any time before then.',
  '# Kč': '# CZK',
  '# Kč měsíčně': '# CZK a month',
  'za měsíc · konečná cena, nejsem plátkyně DPH':
    'per month · final price, I am not registered for VAT',
  'Dokumenty a fotky z kliniky ve vašem zařízení':
    'Documents and photos from the clinic on your device',
  'Deník, kalendář, připomínky a otázky pro lékaře':
    'Diary, calendar, reminders and questions for the doctor',
  'Celý odborný obsah. Články, checklisty, slovník, „Co když…“':
    'All the specialist content. Articles, checklists, glossary, „What if…“',
  'Moje IVF cykly: stimulace, odběr, embrya, transfery, výsledky':
    'My IVF cycles: stimulation, retrieval, embryos, transfers, results',
  'Karta pro každé embryo a pro každý transfer, bez omezení počtu':
    'A card for every embryo and every transfer, with no limit on how many',
  'Podpora ve všech výsledcích, nejen v tom, který skončí pozitivně':
    'Support for every outcome, not only the one that ends positively',
  'Vaše záznamy zůstávají ve vašem zařízení vždycky': 'Your records always stay on your device',
  'Jedna cena za celou aplikaci. Neprodáváme jednotlivé články a neplatíte za „šťastný konec“. Obsah pro negativní hCG, zrušený transfer nebo ztrátu je v ceně stejně jako ten ostatní.':
    'One price for the whole app. We do not sell individual articles and you do not pay for a „happy ending“. The content for a negative hCG, a cancelled transfer or a loss is included just like everything else.',
  'Zrušit předplatné jde kdykoliv, jedním tlačítkem a bez udání důvodu. Zaplacené období doběhne do konce.':
    'You can cancel the subscription at any time, with one button and without giving a reason. The period you have paid for runs to the end.',
  'Nikdo si tu nekupuje pozici a data se neprodávají. V aplikaci není reklama ani provize, takže nemá důvod vás někam tlačit.':
    'Nobody buys a placement here and no data is sold. There is no advertising and no commission in the app, so it has no reason to push you anywhere.',
  'Kdyby se platilo za jednotlivé texty, aplikace by měla důvod psát jich co nejvíc a řadit dopředu ty, které se dobře prodávají. To by v léčbě dopadlo špatně. Předplatné znamená, že se vyplatí psát to, co se vás právě týká. A nic víc.':
    'If individual texts were paid for, the app would have a reason to write as many as possible and to put the best-selling ones first. In treatment that would end badly. A subscription means it pays to write what actually concerns you. And nothing more.',

  // --- poslední skládané věty ------------------------------------------------
  '{}. Všechno ostatní, co aplikace umí. A u každé položky je napsané, k čemu je.':
    '{}. Everything else the app can do. And next to each item it says what it is for.',
  '{}. Všechno, co je o vás. A co si aplikace pamatuje.':
    '{}. Everything that is about you. And everything the app remembers.',
  'Vystupujete jako {}': 'You appear as {}',
  'Anonymně · {}': 'Anonymous · {}',
  'Dnes je {}': 'Today is {}',
  'kdy volat lékaře': 'when to call the doctor',
  'Co ukázat tomu, kdo je vedle vás. Deník zůstává soukromý.':
    'What to show the person beside you. The diary stays private.',

  // --- Nastavení a Záloha ----------------------------------------------------
  'Vy': 'You',
  'Teď:': 'Now:',
  'Fáze': 'Stage',
  'Jméno': 'Name',
  'Tmavý': 'Dark',
  'Vzhled': 'Appearance',
  'Světlý': 'Light',
  'Hodnot': 'Values',
  'Dopisů': 'Letters',
  'Situace': 'Situation',
  'Klinika': 'Clinic',
  'Vaše data': 'Your data',
  'Sestaveno': 'Built',
  'U transferu': 'At the transfer',
  'Klíčová data': 'Key dates',
  'Nastavit kód': 'Set a code',
  'Podle systému': 'Follow the system',
  'Vaše nastavení': 'Your settings',
  'Co se vás týká': 'What applies to you',
  'Zámek aplikace': 'App lock',
  'Smazat všechno': 'Delete everything',
  'Verze aplikace': 'App version',
  'Nastavit u léků': 'Set under Medication',
  'Zahrnout finance': 'Include costs',
  'Vytvořit přehled': 'Create a summary',
  'Uloženého obsahu': 'Stored content',
  '– odvodit z dat –': '– work it out from my records –',
  'Nebo zadejte ručně': 'Or enter it by hand',
  'Vaše data zůstanou': 'Your data stays',
  'V komunitě anonymně': 'Anonymous in the community',
  'Přehled mé IVF cesty': 'A summary of my IVF journey',
  'Kdy začíná stimulace?': 'When does stimulation start?',
  'Zahrnout osobní deník': 'Include the personal diary',
  'Zaktualizovat aplikaci': 'Update the app',
  'Zapomenout naučené zájmy': 'Forget what has been learned about my interests',
  'Nepovinné. Přidá skupinu v komunitě': 'Optional. It adds a group in the community',
  'Součty za cesty i za jednotlivé cykly': 'Totals for the whole journey and for each cycle',
  'Všechno se dá kdykoliv změnit. Obsah se hned přepočítá.':
    'Everything can be changed at any time. The content is recalculated straight away.',
  'Výchozí je nezahrnovat. Zápisy z deníku jsou to nejosobnější, co tu je.':
    'The default is not to include it. Diary entries are the most personal thing here.',
  'Aplikace se neptá na nic. Kdo vezme odemčený telefon, uvidí celý deník.':
    'The app asks for nothing. Anyone who picks up an unlocked phone sees the whole diary.',
  'Fáze se odvozuje i sama z dat, když zadáte datum porodu, aplikace se posune, i kdybyste to tu nechala.':
    'The stage is also worked out from your records. If you enter a birth date, the app moves on even if you leave this as it is.',
  'Všechno, co jste zapsala (profil, deník, hodnoty, dopisy) je uložené jen v tomhle prohlížeči. Nikam se to neodesílá.':
    'Everything you have recorded (profile, diary, values, letters) is stored only in this browser. It is not sent anywhere.',
  '· Dnes je #. den stimulace': '· Today is day # of stimulation',
  'Teď vystupujete jako {}': 'You currently appear as {}',
  ': deník, cykly, embrya, fotky ani nastavení se nemažou.':
    ': the diary, cycles, embryos, photos and settings are not deleted.',
  'Stáhne aplikaci znovu ze serveru. Trvá to pár vteřin a je při tom potřeba připojení.':
    'It downloads the app again from the server. It takes a few seconds and needs a connection.',
  'Skládají se sama z vašich cyklů. Nic tu nevyplňujte podruhé: co je zapsané v cyklu, je zapsané i tady.':
    'They are put together from your cycles. Do not fill anything in twice here: what is recorded in a cycle is recorded here too.',
  'Aplikaci BlooMia vytvořila Gabriela, která si sama prošla IVF. Název vznikl spojením slov Bloom a Mia.':
    'BlooMia was made by Gabriela, who went through IVF herself. The name comes from joining the words Bloom and Mia.',
  'Zatím tu nic není, protože nemáte zapsaný žádný cyklus. Až si ho založíte, klíčová data se objeví sama.':
    'There is nothing here yet because you have no cycle recorded. Once you start one, the key dates will appear on their own.',
  'Připomínky léků, injekcí, kontrol a odběrů se ukazují na obrazovce Dnes a v kalendáři. U každého léku se dá zvlášť vypnout v Lécích.':
    'Reminders for medication, injections, check-ups and tests appear on the Today screen and in the calendar. Each medicine can be switched off separately under Medication.',
  '. Aktualizuje se sama, když je připojení. Když hlásíte chybu, přiložte tenhle údaj: podle něj se pozná, jestli ji nová verze už neopravila.':
    '. It updates itself when there is a connection. If you report a problem, include this detail: it shows whether a newer version has already fixed it.',
  'Otevře se v novém okně a nabídne tisk. V dialogu tisku vyberte Uložit jako PDF. Nikam se nic neodesílá, dokument vzniká přímo ve vašem zařízení.':
    'It opens in a new window and offers to print. In the print dialogue choose Save as PDF. Nothing is sent anywhere, the document is created on your device.',
  'Záloha uloží všechno do jednoho souboru a stejným souborem se to dá načíst zpátky, i v jiném telefonu. Není to dokument na čtení, na to je přehled výš.':
    'A backup saves everything into one file, and the same file can load it all back, even on another phone. It is not a document to read, the summary above is for that.',
  'Kód chrání před pohledem přes rameno, ne před tím, kdo umí otevřít vývojářské nástroje prohlížeče. Data se jím nešifrují, takže zapomenutý kód neznamená ztrátu deníku.':
    "The code protects against someone looking over your shoulder, not against someone who can open the browser's developer tools. It does not encrypt your data, so a forgotten code does not mean losing the diary.",
  'Čitelný dokument, ne technický export. Profil, každý cyklus, embrya, transfery a hCG za sebou tak, jak se to odehrálo. Dá se vytisknout, uložit jako PDF nebo přinést na první konzultaci jinam.':
    'A readable document, not a technical export. Your profile, every cycle, embryos, transfers and hCG one after another, as it happened. It can be printed, saved as a PDF or taken to a first consultation elsewhere.',
  'Systémová upozornění mimo aplikaci zatím neposíláme. Slibovat, že vás aplikace v půl deváté klepne po rameni, a pak to neudělat, je u léku, který se píchá na minutu přesně, horší než nic neslibovat.':
    'We do not send system notifications outside the app yet. Promising that the app will tap you on the shoulder at half past eight and then not doing it is, for a medicine injected to the minute, worse than promising nothing.',
  'nebo': 'or',
  'Záloha': 'Backup',
  'Obnova': 'Restore',
  'Zabráno': 'Used',
  'Úložiště': 'Storage',
  'Z toho fotky': 'Of that, photos',
  'Uložit zálohu': 'Save a backup',
  'Doporučený krok': 'Recommended step',
  'Přidat na plochu': 'Add to the home screen',
  'Kde vaše data jsou': 'Where your data is',
  'Nainstalovat aplikaci': 'Install the app',
  'Je v ní všechno vaše:': 'It holds everything of yours:',
  'Načtěte data ze zálohy': 'Load your data from a backup',
  'Co v záloze je a co ne': 'What is in the backup and what is not',
  'Uložit a zamknout heslem': 'Save and lock with a password',
  'Vybrat soubor se zálohou': 'Choose a backup file',
  'Požádat o trvalé uložení': 'Ask for permanent storage',
  'Není v ní obsah aplikace.': "It does not hold the app's content.",
  'Uložte si všechno do souboru': 'Save everything into a file',
  'Přidejte si aplikaci BlooMia na plochu': 'Add BlooMia to your home screen',
  'Prohlížeč data nedrží natrvalo. Při nedostatku místa je může uvolnit.':
    'The browser does not keep data permanently. If space runs short, it may free it up.',
  'Všechno, co jste zapsala, je jen ve vašem zařízení. Tady se to dá uložit stranou a zase načíst zpátky.':
    'Everything you have recorded is only on your device. Here it can be set aside and loaded back again.',
  'V nabídce prohlížeče najdete položku': 'In the browser menu you will find the item',
  'Vyberte soubor, který vám aplikace dřív uložila. Název začíná na':
    'Choose the file the app saved for you earlier. The name starts with',
  '. BlooMia se pak otevírá ve vlastním okně, funguje i bez signálu a data má chráněnější.':
    '. BlooMia then opens in its own window, works without a signal and keeps your data better protected.',
  '. Načíst jde i záloha ze staršího telefonu nebo z jiného prohlížeče, tak se data přenášejí.':
    '. A backup from an older phone or another browser can be loaded too, that is how data is moved.',
  'Rozhodnutí je na prohlížeči a některé se neptají, jen se rozhodnou podle toho, jak často aplikaci otvíráte.':
    "The decision is the browser's, and some do not ask, they just decide based on how often you open the app.",
  'profil, deník, otázky pro lékaře, cykly, embrya, transfery, hodnoty z odběrů, léky, výdaje, dokumenty, dopisy i fotky.':
    'profile, diary, questions for the doctor, cycles, embryos, transfers, blood test values, medication, expenses, documents, letters and photos.',
  'Články, checklisty a slovník se nezálohují, protože jsou součástí aplikace samotné. Soubor je tak menší a obsahuje jen to, co je skutečně vaše.':
    'Articles, checklists and the glossary are not backed up, because they are part of the app itself. That keeps the file smaller and holding only what is really yours.',
  'Soubor není šifrovaný. Je to obyčejný text, který si můžete otevřít a přečíst. Zacházejte s ním jako se zdravotní dokumentací, protože to je: neposílejte ho nikam, kam byste nedala výsledky z kliniky.':
    'The file is not encrypted. It is plain text that you can open and read. Treat it as medical records, because that is what it is: do not send it anywhere you would not send results from the clinic.',
  'Vznikne jeden soubor se vším: profil, deník, cykly, embrya, transfery, hodnoty, léky, dokumenty i fotky. Na telefonu vám aplikace nabídne, kam ho uložit, třeba do Souborů, na iCloud nebo si ho pošlete mailem. Nikam se neodesílá sám.':
    'One file is created with everything: profile, diary, cycles, embryos, transfers, values, medication, documents and photos. On a phone the app offers where to save it, for example to Files, to iCloud, or you can email it to yourself. It is never sent anywhere by itself.',
  'Soubor je čitelný text a obsahuje úplně všechno, včetně fotek. Složka Stažené se navíc na telefonu často sama synchronizuje do cloudu. Když zálohu zamknete heslem, neotevře ji nikdo, ani vy: heslo se nikam neukládá a nedá se obnovit.':
    'The file is readable text and holds absolutely everything, photos included. On a phone the Downloads folder also often syncs itself to the cloud. If you lock the backup with a password, nobody can open it, not even you: the password is not stored anywhere and cannot be recovered.',
  'Jen v tomhle prohlížeči, v tomhle zařízení. Nikam se neodesílají, takže je odsud nikdo jiný nepřečte. Zároveň to znamená, že smazaná historie prohlížeče, přeinstalovaný systém nebo nový telefon je vezmou s sebou. Záloha je jediná cesta, jak je přenést jinam.':
    'Only in this browser, on this device. It is not sent anywhere, so nobody else can read it from here. That also means that clearing your browser history, reinstalling the system or a new phone will take it with them. A backup is the only way to move it elsewhere.',

  // --- Diagnózy a Průvodce ---------------------------------------------------
  'Sama': 'On my own',
  'Všechny': 'All',
  'Dvojčata': 'Twins',
  'Imunologie': 'Immunology',
  'Štítná žláza': 'Thyroid',
  'Darované embryo': 'A donated embryo',
  'Vysvětlené pojmy': 'Terms explained',
  'Darovaná vajíčka': 'Donor eggs',
  'Darované spermie': 'Donor sperm',
  'Diagnózy a situace': 'Diagnoses and situations',
  'Náhradní mateřství': 'Surrogacy',
  'Sekundární neplodnost': 'Secondary infertility',
  'Kryoembryotransfer (KET)': 'Frozen embryo transfer (FET)',
  'Opakované neúspěchy léčby.': 'Repeated treatment failures.',
  'Cesta k dítěti bez partnera.': 'The route to a child without a partner.',
  'Dvojčata. Dvě miminka najednou.': 'Twins. Two babies at once.',
  'Těhotenství nebo snažení po ztrátě.': 'Pregnancy or trying again after a loss.',
  'Darované spermie od anonymního dárce.': 'Donor sperm from an anonymous donor.',
  'Stejnopohlavní pár na cestě k dítěti.': 'A same-sex couple on the way to a child.',
  'Náhradní mateřství. Těhotenství donosí jiná žena.':
    'Surrogacy. Another woman carries the pregnancy.',
  'Adenomyóza. Sliznice prorůstá do svaloviny děložní stěny.':
    'Adenomyosis. The lining grows into the muscle of the uterine wall.',
  'ICSI. Vpravení jedné spermie přímo do vajíčka mikropipetou.':
    'ICSI. One sperm is placed directly into the egg with a micropipette.',
  'Kryoembryotransfer (KET). Transfer dříve zmraženého embrya.':
    'Frozen embryo transfer (FET). The transfer of a previously frozen embryo.',
  'Nevysvětlená neplodnost. Kompletní vyšetření nenašlo příčinu.':
    'Unexplained infertility. A complete workup found no cause.',
  'Trombofilie. Vrozený nebo získaný sklon ke zvýšené srážlivosti krve.':
    'Thrombophilia. An inherited or acquired tendency to increased blood clotting.',
  'Darované embryo. Embryo darované jiným párem po ukončení jejich léčby.':
    'A donated embryo. An embryo donated by another couple after their treatment ended.',
  'Sekundární neplodnost. Nedaří se otěhotnět, přestože už jedno dítě máte.':
    'Secondary infertility. You cannot get pregnant although you already have one child.',
  'PGT. Genetické vyšetření embrya před transferem. Nejčastěji PGT-A na počet chromozomů.':
    'PGT. Genetic testing of the embryo before transfer. Most often PGT-A for chromosome numbers.',
  'Darovaná vajíčka. Vajíčka od anonymní dárkyně, oplodněná spermiemi partnera nebo dárce.':
    "Donor eggs. Eggs from an anonymous donor, fertilised with your partner's sperm or a donor's.",
  'Mužský faktor. Odchylka v počtu, pohyblivosti nebo tvaru spermií, případně v jejich DNA.':
    'Male factor. A variation in the number, motility or shape of the sperm, or in their DNA.',
  'Imunologické vyšetření. Hledá, jestli za opakovanými neúspěchy nestojí imunitní procesy.':
    'Immunological testing. It looks for whether immune processes are behind repeated failures.',
  'Neprůchodné nebo poškozené vejcovody. Vajíčko se nemůže potkat se spermií přirozenou cestou.':
    'Blocked or damaged fallopian tubes. The egg cannot meet the sperm naturally.',
  'Onemocnění štítné žlázy. Nejčastěji snížená funkce nebo autoimunitní zánět (pozitivní anti-TPO).':
    'Thyroid disease. Most often reduced function or autoimmune inflammation (positive anti-TPO).',
  'Každá nálepka, kterou v aplikaci uvidíte, má vysvětlení: co to je, co to znamená pro cestu a na co se zeptat.':
    'Every label you see in the app has an explanation: what it is, what it means for the journey and what to ask about.',
  'Endometrióza. Tkáň podobná děložní sliznici roste mimo dělohu. Na vaječnících, pobřišnici nebo jinde v pánvi.':
    'Endometriosis. Tissue like the uterine lining grows outside the uterus. On the ovaries, the peritoneum or elsewhere in the pelvis.',
  'Nízké AMH. Hormon, který orientačně vypovídá o ovariální rezervě. Zhruba o tom, kolik vajíček ve vaječnících zbývá.':
    'Low AMH. A hormone that gives a rough indication of your ovarian reserve. Roughly, how many eggs are left in the ovaries.',
  'Syndrom polycystických ovarií. Hormonální porucha, při které se ve vaječnících hromadí nedozrálé folikuly a ovulace bývá nepravidelná nebo chybí.':
    'Polycystic ovary syndrome. A hormonal disorder in which immature follicles build up in the ovaries and ovulation tends to be irregular or absent.',
  '# pojmů': '# terms',
  'Mojí cestě': 'My journey',
  'Pro partnera': 'For your partner',
  'Číst a hledat': 'Read and search',
  'Metody a péče': 'Methods and care',
  'Celá IVF cesta': 'The whole IVF journey',
  'Diagnózy a stavy': 'Diagnoses and conditions',
  'Metody a postupy': 'Methods and procedures',
  'Kde jste na cestě': 'Where you are on the journey',
  'Co může být relevantní u vás, u partnera i jinde.':
    'What may be relevant for you, for your partner and elsewhere.',
  'Doporučení podle vaší fáze a toho, co vás zajímá.':
    'Suggestions based on your stage and what interests you.',
  'Co dělat, když se něco stane mimo ordinační hodiny.':
    'What to do if something happens outside surgery hours.',
  'Co která diagnóza znamená, jak se vyšetřuje a na co se ptát.':
    'What each diagnosis means, how it is investigated and what to ask about.',
  'Svoje vlastní data (cykly, embrya, výsledky, deník) najdete v **Mojí cestě**. Tady je jen to, co se dá přečíst.':
    'Your own records (cycles, embryos, results, diary) are in **My journey**. Here you will find only what can be read.',
  'IVF, ICSI, PGT, hatching, EmbryoGlue a další. Co je co a co o tom víme.':
    'IVF, ICSI, PGT, hatching, EmbryoGlue and more. What is what and what we know about it.',
  'Fyzio, psychoterapie, akupunktura, výživa. U každé je uvedená síla důkazů.':
    'Physiotherapy, psychotherapy, acupuncture, nutrition. Each one states how strong the evidence is.',
  'Napište pojem nebo otázku. Hledá se jen v tom, co je uvnitř. Nic se negeneruje.':
    'Type a term or a question. Only what is inside is searched. Nothing is generated.',
  '# materiálů. Články, checklisty, pojmy i „Co když…“.':
    '# pieces of content. Articles, checklists, terms and „What if…“.',
  'Všech # fází od začátku do konce. Podívat se můžete kdykoli, i dopředu.':
    'All # stages from beginning to end. You can look at any time, including ahead.',
  'Tady se nic nezapisuje. Tady se čte. Co vás čeká, co která metoda znamená a na co se ptát. Nahoře je to, co patří k vaší fázi, ale prohlédnout si můžete celou cestu kdykoli.':
    'Nothing is recorded here. This is for reading. What is ahead of you, what each method means and what to ask about. What belongs to your stage is at the top, but you can look through the whole journey at any time.',

  // --- O BlooMii -------------------------------------------------------------
  'BlooMia nevznikla jako další aplikace. Vznikla z vlastní zkušenosti.':
    'BlooMia was not made as just another app. It came out of lived experience.',
  'Proč BlooMia vznikla': 'Why BlooMia was made',
  'Jsem Gabriela a sama jsem si prošla cestou IVF, která nebyla jednoduchá, rychlá ani přímočará.':
    'I am Gabriela, and I went through IVF myself. It was not simple, it was not quick and it was not straightforward.',
  'Vím, jaké je čekat na výsledky. Jaké je žít od kontroly ke kontrole. Jaké je řešit léky, odběry, embrya, transfery, peníze, práci i otázky okolí. A také vím, jaké je prožívat naději i strach zároveň.':
    "I know what it is like to wait for results. What it is like to live from one check-up to the next. What it is like to deal with medication, blood tests, embryos, transfers, money, work and other people's questions. And I also know what it is like to feel hope and fear at the same time.",
  'BlooMia vznikla proto, že jsem během své vlastní cesty hledala místo, kde by bylo všechno důležité pohromadě. Nejen medicínské informace. Ale také praktická pomoc. Prostor pro vlastní poznámky. Přehled léčby. Finance. Emoce. Podporu. A pocit, že na to člověk nemusí být úplně sám.':
    'BlooMia exists because during my own journey I was looking for a place where everything important would be together. Not only medical information. Practical help too. Room for my own notes. An overview of the treatment. Costs. Emotions. Support. And the feeling that you do not have to be entirely alone with it.',
  'Proč BlooMia?': 'Why BlooMia?',
  'Možná vás napadne, proč se aplikace jmenuje právě BlooMia. Ten název má pro mě mnohem větší význam než jen hezké slovo.':
    'You may wonder why the app is called BlooMia. The name means far more to me than just a pretty word.',
  'znamená rozkvétat. A': 'means to bloom. And',
  'BlooMia tak vznikla spojením dvou slov, která pro mě představují celou jednu cestu. Cestu, na které nebylo všechno jednoduché, přímé ani samozřejmé. Cestu IVF.':
    'BlooMia came from joining two words that stand, for me, for one whole journey. A journey on which nothing was simple, straight or a given. The IVF journey.',
  'Mia je totiž dítě, které přišlo po mé vlastní IVF cestě. Po cestě, na které byly naděje, čekání, strach, zklamání, další pokusy, transfery i chvíle, kdy člověk vůbec nevěděl, co bude dál.':
    'Mia is the child who came after my own IVF journey. A journey of hope, waiting, fear, disappointment, more attempts, transfers and moments when you had no idea what would come next.',
  'Nakonec se nám podařilo otěhotnět po 9. transferu ve 3. IVF cyklu. A dnes máme naši holčičku Miu.':
    'In the end we managed to get pregnant after the 9th transfer in our 3rd IVF cycle. And today we have our little girl Mia.',
  'Právě proto pro mě BlooMia znamená něco jako:':
    'That is exactly why BlooMia means something like this to me:',
  'z cesty, na které jsme čekali na rozkvět, vznikla Mia.':
    'from a journey of waiting to bloom came Mia.',
  'Bloom znamená rozkvést. Protože i cesta, která začíná nejistotou, bolestí, čekáním, zklamáním nebo ztrátou, může jednou rozkvést v něco, o čem jsme dlouho snily.':
    'Bloom means to blossom. Because even a journey that begins in uncertainty, pain, waiting, disappointment or loss can one day blossom into something we dreamed of for a long time.',
  'BlooMia vznikla pro ženy, které právě svou cestou procházejí. Ať už stojí na jejím začátku, čekají na další krok, prožívají radost, strach, zklamání, nebo začínají znovu.':
    'BlooMia was made for women who are on that journey right now. Whether they are at the beginning, waiting for the next step, feeling joy, fear or disappointment, or starting again.',
  'Vaše IVF cesta. Krok za krokem.': 'Your IVF journey. Step by step.',
  'A co BlooMia není': 'And what BlooMia is not',
  'BlooMia není příběh o tom, že když něco uděláte správně, určitě se dočkáte stejného výsledku.':
    'BlooMia is not a story about doing something right and therefore certainly getting the same outcome.',
  'Není to návod na těhotenství. Není to slib. A už vůbec ne medicínská záruka.':
    'It is not a recipe for pregnancy. It is not a promise. And it is certainly not a medical guarantee.',
  'Je to místo, které vzniklo z mé zkušenosti s IVF a z přání vytvořit něco, co bych sama během své cesty potřebovala mít.':
    'It is a place that came out of my experience with IVF and out of a wish to make something I would have needed on my own journey.',
  'Místo, kde si můžete uchovat svůj příběh. Své cykly. Své transfery. Svá embrya. Své termíny. Své léky. Své otázky. Své emoce. Své naděje. I své těžké dny.':
    'A place where you can keep your story. Your cycles. Your transfers. Your embryos. Your appointments. Your medication. Your questions. Your emotions. Your hopes. And your hard days too.',
  'Protože i cesta sama má hodnotu. A každá žena má svůj vlastní příběh.':
    'Because the journey itself has value too. And every woman has her own story.',
  'Jestli právě procházíte IVF, chci, abyste věděla jednu věc:':
    'If you are going through IVF right now, there is one thing I want you to know:',
  'Nemusíte být pořád silná.': 'You do not have to be strong all the time.',
  'Nemusíte být pozitivní. Nemusíte se tvářit, že to zvládáte. Nemusíte mít radost z každého kroku. A nemusíte nikomu dokazovat, že jste v pohodě.':
    'You do not have to be positive. You do not have to act as if you are coping. You do not have to be glad about every step. And you do not have to prove to anyone that you are fine.',
  'Můžete doufat a zároveň se bát. Můžete mít radost a zároveň závidět někomu, komu se to podařilo dřív. Můžete být unavená. Můžete mít den, kdy už nechcete řešit vůbec nic.':
    'You can hope and be afraid at the same time. You can be happy and at the same time envy someone it worked out for sooner. You can be tired. You can have a day when you do not want to deal with anything at all.',
  'To všechno se do IVF vejde.': 'All of that fits inside IVF.',
  'Přeji si, aby vám aplikace BlooMia pomohla mít v tom všem alespoň o trochu větší přehled, klid a pocit, že na své cestě nejste sama.':
    'I hope BlooMia helps you have at least a little more clarity in all of it, a little more calm, and the feeling that you are not alone on your journey.',
  'Ať už vaše cesta povede kamkoliv.': 'Wherever your journey leads.',
  'Najdete mě také na Instagramu': 'You can also find me on Instagram',
  'Na Instagramu sdílím další informace ze světa IVF, zkušenosti, tipy, praktické věci, psychiku během léčby a také svůj vlastní příběh.':
    'On Instagram I share more from the world of IVF: experiences, tips, practical things, the emotional side of treatment and my own story.',
  'Pokud chcete k aplikaci BlooMia další obsah, najdete tam další informace a zkušenosti z IVF cesty.':
    'If you would like more alongside BlooMia, you will find further information and experiences from the IVF journey there.',
  'Navštívit Instagram': 'Visit Instagram',
  'Odkaz vede mimo aplikaci, do Instagramu. BlooMia tam neposílá nic o vás ani o vaší léčbě.':
    'The link leads out of the app, to Instagram. BlooMia sends nothing about you or your treatment there.',
  'Chybí vám v aplikaci BlooMia něco? Něco nefunguje? Nebo vás naopak něco potěšilo? Napište mi to, prosím. BlooMia se z toho staví dál.':
    'Is something missing from BlooMia? Is something not working? Or did something please you? Please write and tell me. BlooMia is built further from that.',
  'Můj příběh je moje zkušenost, ne lékařský důkaz. Neznamená, že stejný postup povede ke stejnému výsledku.':
    'My story is my experience, not medical evidence. It does not mean that the same course will lead to the same outcome.',
  'Každá IVF cesta je jiná': 'Every IVF journey is different',
  'a o té vaší rozhoduje vaše klinika, ne tahle aplikace.':
    'and yours is decided by your clinic, not by this app.',

  // --- Dokumenty -------------------------------------------------------------
  'Přidat dokument': 'Add a document',
  'Lékařská zpráva': 'Medical report',
  'Embryologická zpráva': 'Embryology report',
  'Uložit dokument': 'Save the document',
  'Zatím tu žádný dokument není': 'There is no document here yet',
  'Papíry z kliniky na jednom místě. Aplikace je neanalyzuje a nevykládá, jenom je uspořádá tak, abyste je našla, když je budete potřebovat.':
    'Paperwork from the clinic in one place. The app does not analyse or interpret it, it only arranges it so you can find it when you need it.',
  'Fotku můžete přidat i později u každého dokumentu. Všechno zůstává ve vašem zařízení.':
    'You can add a photo later to any document. Everything stays on your device.',
  'Většina zpráv přijde na papíře a doma se ztratí. Vyfoťte je hned na klinice. V čekárně před další konzultací je budete mít po ruce.':
    'Most reports come on paper and get lost at home. Photograph them at the clinic straight away. Then you will have them to hand in the waiting room before the next consultation.',
  'Aplikace dokumenty **nečte a nevyhodnocuje.** Hodnoty se zapisují ručně ve Zdraví, aby v záznamu nikdy nebylo špatně přečtené číslo. Dokumenty nikam neodcházejí. Sdílet je s lékařem můžete jen vy.':
    'The app **does not read or assess your documents.** Values are entered by hand under Health, so that a misread number never ends up in your records. The documents go nowhere. Only you can share them with your doctor.',

  // --- Vítání ----------------------------------------------------------------
  'Krok # z #': 'Step # of #',
  'Zpět': 'Back',
  'včera': 'yesterday',
  'Začít': 'Start',
  'Pokračovat': 'Continue',
  'Například Tereza': 'For example Tereza',
  'Vítejte na své IVF cestě': 'Welcome to your IVF journey',
  'Vaše cesta. Vaše tempo. Vaše IVF.': 'Your journey. Your pace. Your IVF.',
  'Jedním pohledem uvidíte, co po vás dnešek chce a co na to máte.':
    'At a glance you see what today asks of you and what you have for it.',
  'Cykly, embrya, transfery a výsledky. Celá historie na jednom místě.':
    'Cycles, embryos, transfers and results. The whole history in one place.',
  'Fáze, knihovna, pojmy i diagnózy. U všeho stojí, k čemu to je.':
    'Stages, library, terms and diagnoses. Everything says what it is for.',
  'Nastavení zabere minutu a kdykoliv se dá změnit. Nechceme e-mail ani heslo.':
    'Setting it up takes a minute and can be changed at any time. We do not want an email or a password.',
  'Kde právě jste?': 'Where are you right now?',
  'Podle toho poskládáme celou aplikaci. Dnešek, obsah, checklisty i kalendář. Až se posunete, změníte to jedním klikem a nic se přitom nesmaže.':
    'We build the whole app around that. Today, the content, the checklists and the calendar. When you move on, you change it with one tap and nothing is deleted.',
  'Potřebuji jinou fázi': 'I need a different stage',
  'Jemnější dělení': 'A finer breakdown',
  'Když se do žádné dlaždice netrefíte přesně, vyberte si tady.':
    'If none of the tiles fits exactly, choose here.',
  '🌱 Snažíme se o miminko': '🌱 We are trying for a baby',
  '🏥 Mám doporučení k IVF': '🏥 I have a referral for IVF',
  '🔎 Řešíme, proč se nedaří': '🔎 We are looking into why it is not working',
  '💉 Připravuji se na IVF': '💉 I am preparing for IVF',
  '🌸 Jsem v IVF cyklu': '🌸 I am in an IVF cycle',
  '❄️ Mám embrya a čeká mě transfer': '❄️ I have embryos and a transfer ahead',
  '🤍 Jsem po transferu': '🤍 I am after a transfer',
  '🌱 Mám pozitivní hCG': '🌱 I have a positive hCG',
  '🕊️ IVF nevyšlo': '🕊️ The IVF did not work',
  '🕊️ Zažila jsem ztrátu': '🕊️ I have had a loss',
  'Teprve o IVF přemýšlím': 'I am only thinking about IVF',
  'Zatím IVF vůbec neřeším': 'I am not dealing with IVF at all yet',
  'Mám za sebou vyšetření': 'I have the tests behind me',
  'Nevím, kde přesně začít': 'I do not know where exactly to start',
  'Chci vědět, do čeho bych šla': 'I want to know what I would be getting into',
  'Ukažte mi to od začátku, projdu si to sama':
    'Show me from the beginning, I will go through it myself',
  'Lékař mi IVF doporučil, ještě jsme nezačali':
    'The doctor recommended IVF, we have not started yet',
  'Vyšetření, diagnóza, hledání příčiny': 'Tests, a diagnosis, looking for the cause',
  'Máme plán, cyklus ještě nezačal': 'We have a plan, the cycle has not started yet',
  'Než cyklus začne': 'Before the cycle starts',
  'Začínám stimulaci': 'I am starting stimulation',
  'První injekce jsou přede mnou nebo právě teď':
    'The first injections are ahead of me or happening right now',
  'Stimulace, odběr, embrya v laboratoři': 'Stimulation, retrieval, embryos in the lab',
  'Čeká mě odběr vajíček': 'The egg retrieval is ahead of me',
  'Odběr je naplánovaný, doma se počítají dny':
    'The retrieval is scheduled and at home the days are being counted',
  'Trigger je za dveřmi nebo už byl': 'The trigger is at the door or has already happened',
  'Čekám na oplodnění': 'I am waiting for fertilisation',
  'Odběr proběhl, zítra volá embryologie': 'The retrieval is done, embryology calls tomorrow',
  'Čekám na vývoj embryí': 'I am waiting for the embryos to develop',
  'Embrya jsou v laboratoři, čeká se na každý den':
    'The embryos are in the lab and every day is awaited',
  'Čeká mě další transfer': 'Another transfer is ahead of me',
  'Máme zamražená embrya a plánujeme kryotransfer':
    'We have frozen embryos and are planning a frozen transfer',
  'Čeká mě kryoembryotransfer': 'A frozen embryo transfer is ahead of me',
  'Připravuje se sliznice na rozmražené embryo': 'The lining is being prepared for a thawed embryo',
  'Čerstvý embryotransfer nebo kryotransfer': 'A fresh embryo transfer or a frozen one',
  'Čekám na hCG': 'I am waiting for the hCG',
  'Po transferu a čekání na hCG': 'After the transfer and waiting for the hCG',
  'Čekání na výsledek. Nejtěžší dny z celé léčby':
    'Waiting for the result. The hardest days of the whole treatment',
  'Mám negativní hCG': 'I have a negative hCG',
  'Přišel výsledek a nevyšel': 'The result came and it was not good',
  'Výsledek a co dál': 'The result and what comes next',
  'Potřebuji zpracovat výsledek a případně pokračovat':
    'I need to process the result and possibly carry on',
  'Čeká mě další IVF cyklus': 'Another IVF cycle is ahead of me',
  'Výsledky jsou, řešíme, co dál': 'The results are in and we are working out what comes next',
  'První pozitivní odběr.': 'The first positive test.',
  'Test vyšel, čekáme na první ultrazvuk':
    'The test was positive and we are waiting for the first ultrasound',
  'Těhotenství skončilo. Potřebuji čas': 'The pregnancy ended. I need time',
  'Zažila jsem ztrátu': 'I have had a loss',
  'Čeká mě revize dělohy': 'A uterine revision is ahead of me',
  'Nebo ji mám čerstvě za sebou': 'Or I have just had one',
  'Přišlo krvácení s křečemi a těhotenství odešlo':
    'Bleeding came with cramps and the pregnancy was lost',
  'Na ultrazvuku bylo těhotenství vidět, ale zastavilo se. Krvácení samo nepřišlo':
    'The pregnancy was visible on ultrasound but it stopped. The bleeding did not come on its own',
  'hCG stouplo a pak kleslo. Na ultrazvuku nebylo nikdy nic vidět':
    'The hCG rose and then fell. Nothing was ever visible on ultrasound',
  'Těhotenství se uhnízdilo mimo dělohu, nejčastěji ve vejcovodu':
    'The pregnancy implanted outside the uterus, most often in a fallopian tube',
  'Každá z nich má jiný průběh, jinou léčbu i jinak dlouhou pauzu před dalším pokusem. Vyberte to, co odpovídá vaší zprávě.':
    'Each of them has a different course, a different treatment and a different length of pause before the next attempt. Choose the one that matches your report.',
  'Odkdy se snažíte?': 'How long have you been trying?',
  'Kdy je odběr?': 'When is the retrieval?',
  'Kdy byl odběr?': 'When was the retrieval?',
  'Kdy jste začala se stimulací?': 'When did you start the stimulation?',
  'Kdy jste měla odběr hCG?': 'When did you have the hCG test?',
  'Kdy jste se to dozvěděla?': 'When did you find out?',
  'Kdy vyšetřování začalo nebo začne?': 'When did the investigation start, or when will it?',
  'Kdy jste s vyšetřením začali?': 'When did you start the testing?',
  'Stačí přibližně.': 'Roughly is enough.',
  'Stačí přibližně. Nic se od toho nepočítá dopředu.':
    'Roughly is enough. Nothing is calculated forward from it.',
  'Stačí přibližně. Podle toho poznáme, kdy má smysl mluvit o vyšetření.':
    'Roughly is enough. It tells us when it makes sense to talk about testing.',
  'Přesný termín vám dala klinika.': 'Your clinic gave you the exact date.',
  'Od toho dne se počítá kultivace.': 'The culture is counted from that day.',
  'Od toho dne se počítá, kolikátý den se embrya kultivují.':
    'That day is where the count of embryo culture days begins.',
  'Podle toho víme, kolikátý den po transferu dnes je.':
    'That tells us which day after the transfer today is.',
  'První den injekcí. Podle toho počítáme, kolikátý je dnes den.':
    'The first day of injections. That is how we count which day today is.',
  'Den ultrazvuku, na kterém to zaznělo. Stačí přibližně.':
    'The day of the ultrasound where it was said. Roughly is enough.',
  'devátý den stimulace': 'day nine of stimulation',
  'šestý den po transferu': 'day six after the transfer',
  'den, kdy nezbylo žádné embryo': 'the day no embryo was left',
  'Co pro vás v téhle fázi máme': 'What we have for you in this stage',
  'A dál: články, práce s hlavou, pohyb, doplňky, rady pro partnera, otázky pro lékaře a slovníček pojmů téhle fáze.':
    'And more: articles, work with your mind, movement, supplements, tips for your partner, questions for the doctor and a glossary for this stage.',
  'Co už o své cestě víte?': 'What do you already know about your journey?',
  'Vyberte, co se vás týká. Může toho být víc. Kombinovaný faktor je v IVF spíš pravidlo než výjimka.':
    'Choose what applies to you. There may be several. A combined factor is the rule rather than the exception in IVF.',
  'Nemáme žádnou diagnózu': 'We have no diagnosis',
  'Co se vás týká?': 'What applies to you?',
  'Vyberte, co platí. Podle toho se mění obsah uvnitř fáze. Po císaři se šestinedělí čte jinak než po přirozeném porodu.':
    'Choose what is true. The content inside the stage follows it. After a caesarean the postpartum period reads differently than after a vaginal birth.',
  'Nic z toho není povinné a nikam se to neodesílá. Zůstává to ve vašem prohlížeči.':
    'None of this is required and none of it is sent anywhere. It stays in your browser.',
  'Podle výběru se vám nabízí obsah, který se vás týká. Léčbu z toho aplikace neodvozuje a kdykoli to změníte v Profilu.':
    'Your selection decides which content is offered to you. The app does not derive any treatment from it, and you can change it at any time under Profile.',
  'Ve vaší fázi zatím není co upřesňovat. Můžete pokračovat.':
    'There is nothing to narrow down in your stage yet. You can continue.',
  'Jak vám máme říkat?': 'What should we call you?',
  'Jenom kvůli oslovení na domovské stránce. Klidně to nechte prázdné.':
    'Only for the greeting on the home screen. Feel free to leave it empty.',
  'V komunitě vystupovat anonymně': 'Appear anonymously in the community',
  'Ostatní uvidí jen vaši fázi, nikdy jméno ani zdravotní údaje.':
    'Others see only your stage, never your name or any health data.',
  'Žádná registrace, žádný e-mail. Data zůstávají v tomhle prohlížeči a kdykoliv je smažete v nastavení.':
    'No sign-up, no email. Your data stays in this browser and you can delete it at any time under Settings.',
  'Otevřít mou aplikaci': 'Open my app',

  // --- Co vás čeká v jednotlivých fázích -------------------------------------
  'Období, kdy si ujasňujete, jestli a kdy dítě chcete. Klidně několik měsíců.':
    'A time when you work out whether and when you want a child. It can take several months.',
  'První praktické otázky: peníze, práce, bydlení, vztah.':
    'The first practical questions: money, work, housing, your relationship.',
  'Zjišťování, jak na tom jste zdravotně. Bez tlaku, jen abyste věděla.':
    'Finding out where you stand health-wise. Without pressure, just so you know.',
  'Dva až tři měsíce, než se změny životního stylu projeví na kvalitě vajíček a spermií.':
    'Two to three months before lifestyle changes show in the quality of eggs and sperm.',
  'Odběry, které si můžete nechat udělat i bez odeslání na kliniku. Štítná žláza, vitamin D, krevní obraz.':
    'Blood tests you can have done without a referral to a clinic. Thyroid, vitamin D, full blood count.',
  'Zvykání si na pravidelnost: spánek, jídlo, pohyb. Nudné, ale funguje to.':
    'Getting used to regularity: sleep, food, movement. Dull, but it works.',
  'Měsíce, které mají svůj rytmus: naděje kolem ovulace, čekání, menstruace, znovu.':
    'Months with their own rhythm: hope around ovulation, waiting, a period, and again.',
  'Postupné zjišťování, kdy přesně ovulujete. U většiny žen to není 14. den.':
    'Gradually working out exactly when you ovulate. For most women it is not day 14.',
  'Moment, kdy začnete zvažovat vyšetření. Doporučení: po roce snažení, a po půl roce, pokud je vám nad 35 let nebo máte nepravidelný cyklus.':
    'The moment you start considering testing. The recommendation: after a year of trying, or after six months if you are over 35 or have an irregular cycle.',
  'Odběry hormonů v konkrétních dnech cyklu. Část se dělá 2.–4. den, část kolem 21. dne.':
    'Hormone tests on specific days of the cycle. Some on days 2 to 4, some around day 21.',
  'Ultrazvuk s počítáním antrálních folikulů.': 'An ultrasound with an antral follicle count.',
  'Vyšetření průchodnosti vejcovodů, HSG nebo HyFoSy. Trvá krátce, bývá nepříjemné, ne dlouho.':
    'A test of tubal patency, HSG or HyFoSy. It is short, usually uncomfortable, but not for long.',
  'Spermiogram u partnera, často opakovaný.': 'A semen analysis for your partner, often repeated.',
  'Čekání na výsledky, které je většinou delší než vyšetření samo.':
    'Waiting for results, which usually takes longer than the tests themselves.',
  'Sledování růstu folikulů ultrazvukem, někdy s mírnou stimulací tabletami nebo nízkými dávkami injekcí.':
    'Following follicle growth by ultrasound, sometimes with mild stimulation using tablets or low-dose injections.',
  'Trigger. Injekce, která spustí ovulaci v naplánovaný čas.':
    'The trigger. An injection that sets off ovulation at a planned time.',
  'Odběr a zpracování spermatu v laboratoři v den výkonu.':
    'Collection and preparation of the sperm in the lab on the day of the procedure.',
  'Samotné zavedení připravených spermií do dělohy tenkým katétrem. Několik minut, bez narkózy.':
    'The prepared sperm is placed into the uterus through a thin catheter. A few minutes, no anaesthetic.',
  'Dvoutýdenní čekání a test.': 'A two-week wait and a test.',
  'Vstupní konzultace, kde se určí protokol podle vašich hodnot.':
    'A first consultation where the protocol is set from your values.',
  'Podpisy informovaných souhlasů. Je toho hodně a stojí za to je číst.':
    'Signing informed consent forms. There are a lot of them and they are worth reading.',
  'Objednání léků a zaškolení, jak si píchat injekce.':
    'Ordering the medication and being shown how to give yourself the injections.',
  'Naplánování začátku podle cyklu. Často se čeká na menstruaci.':
    'Planning the start around your cycle. Often you wait for your period.',
  'Vyřízení úhrady: v Česku hradí pojišťovna určitý počet cyklů do daného věku, zbytek si platíte.':
    'Sorting out the funding: in the Czech Republic the insurer covers a set number of cycles up to a given age, the rest you pay for yourself.',
  'Příchod nalačno, obvykle brzy ráno. Nejíst a nepít podle pokynů kliniky.':
    'Arriving on an empty stomach, usually early in the morning. No food or drink, as the clinic instructs.',
  'Zákrok trvá zhruba 10–20 minut. Probíhá v analgosedaci. Spíte a nic necítíte.':
    'The procedure takes about 10 to 20 minutes under sedation. You sleep and feel nothing.',
  'Po probuzení odpočinek na lůžku, kontrola a informace, kolik vajíček se získalo.':
    'After waking, rest in bed, a check and the news of how many eggs were collected.',
  'Odpoledne doma. Křeče a špinění jsou běžné.':
    'Home in the afternoon. Cramps and spotting are common.',
  'Následující den telefonát z embryologie s informací, kolik vajíček bylo zralých a kolik se oplodnilo.':
    'The next day a call from embryology telling you how many eggs were mature and how many fertilised.',
  'Telefonát z embryologie, obvykle dopoledne.': 'A call from embryology, usually in the morning.',
  'Informace, kolik vajíček bylo zralých a u kolika došlo k oplodnění.':
    'The news of how many eggs were mature and how many fertilised.',
  'Vysvětlení, jestli se použilo klasické IVF nebo ICSI.':
    'An explanation of whether conventional IVF or ICSI was used.',
  'Termín dalšího hlášení. Většinou třetí a pátý den.':
    'When the next update comes. Usually day three and day five.',
  'Hlášení z embryologie, obvykle třetí a pátý den kultivace.':
    'Updates from embryology, usually on day three and day five of culture.',
  'Popis embryí podle počtu buněk a kvality, u blastocyst podle Gardnerovy klasifikace.':
    'A description of the embryos by cell number and quality, and for blastocysts by the Gardner grading.',
  'Rozhodnutí, jestli se transfer udělá pátý den, nebo se embrya zmrazí.':
    'The decision whether to transfer on day five or to freeze the embryos.',
  'Postupné ubývání embryí. Do pátého dne se dostane jen část z nich.':
    'The embryos gradually dwindle. Only some of them reach day five.',
  'Příchod obvykle s plným močovým měchýřem, aby byla děloha na ultrazvuku lépe vidět.':
    'You usually arrive with a full bladder so the uterus shows better on ultrasound.',
  'Zavedení embrya tenkým katétrem pod ultrazvukovou kontrolou. Několik minut, bez narkózy.':
    'The embryo is placed through a thin catheter under ultrasound guidance. A few minutes, no anaesthetic.',
  'Krátký odpočinek a odchod domů.': 'A short rest and then home.',
  'Pokračování v podpoře luteální fáze. Obvykle progesteron.':
    'Luteal phase support continues. Usually progesterone.',
  'Začátek dvoutýdenního čekání.': 'The start of the two-week wait.',
  'Deset až čtrnáct dní do odběru hCG.': 'Ten to fourteen days until the hCG test.',
  'Příznaky, které nic neznamenají: napětí v prsou, křeče, únava, nadýmání. Dělá je progesteron stejně jako těhotenství.':
    'Symptoms that mean nothing: tender breasts, cramps, fatigue, bloating. Progesterone causes them just as pregnancy does.',
  'Implantační špinění u části žen, obvykle 6.–10. den po transferu. Jeho nepřítomnost nic neznamená.':
    'Implantation spotting in some women, usually days 6 to 10 after the transfer. Its absence means nothing.',
  'Silné nutkání testovat doma dřív, než má smysl.':
    'A strong urge to test at home before it makes any sense.',
  'Odběr krve a čekání na číslo, které přijde týž nebo následující den.':
    'A blood test and waiting for a number that comes the same day or the next.',
  'Opakovaný odběr hCG za dva až tři dny. Sleduje se zdvojovací čas, ne jedno číslo.':
    'A repeat hCG test in two or three days. What is watched is the doubling time, not a single number.',
  'První ultrazvuk zhruba v 6.–7. týdnu. Potvrzení, že těhotenství je v děloze a má srdeční akci.':
    'The first ultrasound at around week 6 to 7. Confirmation that the pregnancy is in the uterus and has a heartbeat.',
  'Pokračování v podpoře luteální fáze, často až do 10.–12. týdne.':
    'Luteal phase support continues, often until week 10 to 12.',
  'Období, kdy se radost mísí se strachem víc, než jste čekala.':
    'A time when joy mixes with fear more than you expected.',
  'Kontrolní konzultace, kde se probere, co v cyklu proběhlo a co změnit.':
    'A follow-up consultation that goes through what happened in the cycle and what to change.',
  'Návrat menstruace, obvykle do dvou týdnů po vysazení podpory.':
    'Your period returns, usually within two weeks of stopping the support.',
  'Rozhodnutí o dalším postupu: kryoembryotransfer, nová stimulace, doplňující vyšetření.':
    'A decision about what comes next: a frozen transfer, a new stimulation, further tests.',
  'Období, kdy se vrací normální život. A je to divné.':
    'A time when normal life comes back. And it feels strange.',
  'Podrobnější vyšetření, která se po prvním nebo druhém cyklu ještě nedělají.':
    'More detailed tests that are not yet done after a first or second cycle.',
  'Hysteroskopie. Pohled do dutiny děložní na srůsty, polypy nebo přepážku.':
    'Hysteroscopy. A look inside the uterine cavity for adhesions, polyps or a septum.',
  'Imunologické a genetické vyšetření obou partnerů, pokud je indikováno.':
    'Immunological and genetic testing of both partners, if indicated.',
  'Diskuze o PGT-A, o darovaných gametách nebo o změně kliniky.':
    'A discussion about PGT-A, donor gametes or changing clinic.',
  'Rozhodování, které je čím dál těžší, protože už znáte cenu každé varianty.':
    'Decisions that get harder, because by now you know the price of every option.',
  'Klesající hodnoty hCG při kontrolních odběrech.': 'Falling hCG values at the follow-up tests.',
  'Krvácení, které přichází obvykle krátce po tom, často jako silnější menstruace.':
    'Bleeding that usually comes soon after, often like a heavier period.',
  'Pokyn k vysazení podpory luteální fáze. Vždycky až od lékaře.':
    'Instructions to stop the luteal phase support. Always from your doctor, never before.',
  'Návrat cyklu obvykle do čtyř až šesti týdnů.':
    'Your cycle usually returns within four to six weeks.',
  'Sledování hodnot hCG a opakované ultrazvuky.':
    'Monitoring of hCG values and repeat ultrasounds.',
  'Léčba metotrexátem, nebo operace. Nejčastěji laparoskopicky. O způsobu rozhoduje stav a nález.':
    'Treatment with methotrexate, or surgery. Most often laparoscopic. Your condition and the findings decide which.',
  'Po metotrexátu dlouhé sledování hodnot až k nule a doporučená pauza před dalším těhotenstvím.':
    'After methotrexate, a long follow-up of the values down to zero and a recommended pause before the next pregnancy.',
  'Kontrola stavu vejcovodu a informace, co to znamená pro další pokusy.':
    'A check on the state of the fallopian tube and what that means for further attempts.',
  'Potvrzení nálezu druhým ultrazvukem, obvykle s odstupem několika dní.':
    'Confirmation of the finding by a second ultrasound, usually a few days later.',
  'Volba mezi vyčkáváním, medikamentózním ukončením a revizí dutiny děložní.':
    'A choice between waiting, medical management and a uterine revision.',
  'Nabídka genetického vyšetření tkáně, pokud to situace umožňuje.':
    'The offer of genetic testing of the tissue, if the situation allows.',
  'Kontrola za několik týdnů a návrat cyklu obvykle do čtyř až šesti týdnů.':
    'A check-up in a few weeks, and your cycle usually back within four to six weeks.',
  'Krvácení a křeče, které mohou trvat několik dní.':
    'Bleeding and cramps that can last several days.',
  'Kontrola, jestli dutina děložní zůstala prázdná. Někdy stačí sledování, jindy je potřeba revize.':
    'A check that the uterine cavity is empty. Sometimes monitoring is enough, sometimes a revision is needed.',
  'Kontrolní odběry hCG až k nule, pokud to lékař požaduje.':
    'Follow-up hCG tests down to zero, if your doctor asks for them.',
  'Návrat menstruace obvykle za čtyři až šest týdnů.':
    'Your period usually returns in four to six weeks.',
  'Příchod nalačno a krátký zákrok v celkové anestezii.':
    'Arriving on an empty stomach and a short procedure under general anaesthetic.',
  'Odchod domů obvykle týž den, někdy po noci na oddělení.':
    'Home usually the same day, sometimes after a night on the ward.',
  'Krvácení několik dní, slabší než při potratu.':
    'Bleeding for a few days, lighter than with a miscarriage.',
  'Kontrola za dva až tři týdny.': 'A check-up in two or three weeks.',
  'Odběr krve obou partnerů na karyotyp.': 'A blood test from both partners for a karyotype.',
  'Konzultace s klinickým genetikem, která bývá delší než běžný termín.':
    'A consultation with a clinical geneticist, usually longer than an ordinary appointment.',
  'Čekání na výsledky. Týdny, ne dny.': 'Waiting for results. Weeks, not days.',
  'Vysvětlení, co nález znamená pro další pokusy a jestli má smysl PGT.':
    'An explanation of what the finding means for further attempts and whether PGT makes sense.',
  'Cyklus ještě nezačal, ale rozhoduje se tu hodně: protokol, klinika, peníze a načasování.':
    'The cycle has not started yet, but a lot is decided here: the protocol, the clinic, the money and the timing.',
  'Snažíte se přirozeně. Klíčová je znalost vlastního cyklu, ne počet pokusů.':
    'You are trying naturally. What matters is knowing your own cycle, not the number of attempts.',
  'Dvoutýdenní čekání. Nejtěžší část celé léčby. A jediná, kde není co dělat.':
    'The two-week wait. The hardest part of the whole treatment. And the only one where there is nothing to do.',
  'Test vyšel. Sleduje se, jestli hodnota roste tak, jak má, a čeká se na první ultrazvuk. Pak vás centrum předá gynekologovi.':
    'The test was positive. Now it is watched whether the value rises as it should, and the first ultrasound is awaited. Then the centre hands you over to your gynaecologist.',

  // --- souhrny fází ----------------------------------------------------------
  'Rozhodnutí se teprve rodí. Není co dohánět. Je čas se ptát a zjišťovat.':
    'The decision is still taking shape. There is nothing to catch up on. It is time to ask and to find out.',
  'Připravujete tělo. Většina změn se projeví za dva až tři měsíce. Vajíčko i spermie tak dlouho dozrávají.':
    'You are preparing your body. Most changes show after two or three months. That is how long eggs and sperm take to mature.',
  'Inseminace. Nejjednodušší asistovaná metoda. Zákrok trvá pár minut a bolí zhruba jako stěr.':
    'Insemination. The simplest assisted method. The procedure takes a few minutes and hurts about as much as a smear test.',
  'Hledáte příčinu. Cílem není verdikt, ale plán. A většina nálezů má řešení.':
    'You are looking for the cause. The goal is not a verdict but a plan. And most findings have a solution.',
  'Den odběru. Krátký zákrok v analgosedaci, po kterém jde většina žen domů do několika hodin.':
    'The day of the retrieval. A short procedure under sedation, after which most women go home within a few hours.',
  'Den po odběru. V laboratoři se rozhoduje, kolik vajíček se oplodnilo. A vy u toho nemůžete nic ovlivnit.':
    'The day after the retrieval. In the lab it is decided how many eggs fertilised. And there is nothing you can do about it.',
  'Embrya rostou v laboratoři. Každý den se jejich počet může zmenšit. A je to normální průběh, ne chyba.':
    'The embryos are growing in the lab. Their number can shrink every day. That is a normal course, not a failure.',
  'Den transferu. Zákrok trvá pár minut, nebolí a nevyžaduje narkózu. A přesto je to den, na který se čekalo roky.':
    'The day of the transfer. The procedure takes a few minutes, does not hurt and needs no anaesthetic. And still it is the day that was waited for, for years.',
  'Mezidobí. Čas na vyhodnocení, na tělo a na rozhodnutí, jak dál, ne ztracený měsíc.':
    'The time in between. Time to take stock, time for your body and for deciding what comes next, not a lost month.',
  'Opakované neúspěchy. Tady se mění otázka: už ne „zkusíme to znovu“, ale „co uděláme jinak“.':
    'Repeated failures. Here the question changes: no longer „shall we try again“ but „what shall we do differently“.',
  'Biochemické těhotenství. Pozitivní test, který nepokračoval. Byla to ztráta, i když ji nikdo neviděl.':
    'A biochemical pregnancy. A positive test that did not go on. It was a loss, even though nobody saw it.',
  'Mimoděložní těhotenství. Je to akutní zdravotní stav a zároveň ztráta. Obojí najednou.':
    'An ectopic pregnancy. It is an acute medical emergency and a loss at the same time. Both at once.',
  'Zamlklé těhotenství. Tělo o ztrátě ještě neví. A to je na tom to nejtěžší.':
    'A missed miscarriage. Your body does not know about the loss yet. And that is the hardest part of it.',
  'Potrat. Nejčastější komplikace raného těhotenství. A jedna z nejosamělejších.':
    'Miscarriage. The most common complication of early pregnancy. And one of the loneliest.',
  'Revize dutiny děložní. Krátký zákrok v narkóze, po kterém se většina žen vrací domů týž den.':
    'A uterine revision. A short procedure under anaesthetic, after which most women go home the same day.',
  'Genetické vyšetření. Hledá se, jestli za opakovanými ztrátami nebo neúspěchy nestojí něco, co se dá zohlednit.':
    'Genetic testing. It looks for whether something behind repeated losses or failures can be taken into account.',
}
