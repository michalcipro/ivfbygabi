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
}
