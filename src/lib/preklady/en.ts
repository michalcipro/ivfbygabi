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
}
