/**
 * Německý slovník rozhraní.
 *
 * Platí totéž co u angličtiny: klíčem je česká věta a co chybí, zůstane
 * česky. Vyká se, protože celá aplikace vyká.
 */
export const DE: Record<string, string> = {
  // --- hlavní záložky ---
  'Dnes': 'Heute',
  'Moje cesta': 'Mein Weg',
  'Poznej IVF': 'IVF verstehen',
  'Deník': 'Tagebuch',
  'Profil': 'Profil',

  // --- rozcestník ---
  'Zápis dne': 'Eintrag für heute',
  'Léky a injekce': 'Medikamente und Spritzen',
  'Moje embrya': 'Meine Embryonen',
  'Moje transfery': 'Meine Transfers',
  'Moje IVF historie': 'Meine IVF-Historie',
  'Moje diagnóza': 'Meine Diagnose',
  'Moje vyšetření': 'Meine Untersuchungen',
  'Podpůrná péče': 'Begleitende Hilfe',
  'Sledování': 'Verlauf',
  'Zdravotní data': 'Gesundheitsdaten',
  'Otázky pro lékaře': 'Fragen an die Ärztin',
  'Moje fáze': 'Meine Phase',
  'Hledat v aplikaci': 'In der App suchen',
  'Deník a cvičení': 'Tagebuch und Übungen',
  'Celá cesta': 'Der ganze Weg',
  'Objevit': 'Entdecken',
  'Knihovna': 'Bibliothek',
  'Diagnózy': 'Diagnosen',
  'Checklisty': 'Checklisten',
  'Kalendář': 'Kalender',
  'Zdraví': 'Gesundheit',
  'Dokumenty': 'Dokumente',
  'Komunita': 'Gemeinschaft',
  'Můj příběh': 'Meine Geschichte',
  'Partner': 'Partner',
  'Rozcestník': 'Mehr',
  'Členství': 'Mitgliedschaft',
  'Nastavení': 'Einstellungen',

  // --- nadpisy obrazovek ---
  'Zápis': 'Eintrag',
  'Léky': 'Medikamente',
  'Nůžky dne': 'Bilanz des Tages',
  'Změnit fázi': 'Phase ändern',
  'Cyklus': 'Zyklus',
  'Hledání': 'Suche',
  'Co když…': 'Was, wenn…',
  'Více': 'Mehr',
  'Pojem': 'Begriff',
  'Cvičení': 'Übungen',
  // Nadpis obrazovky s jedním cvičením. Jinde je „Cvičení“ seznam.
  'nadpis|Cvičení': 'Übung',
  'Hodnota': 'Wert',
  'Diagnóza': 'Diagnose',
  'Čtení': 'Lesen',
  'Moje klinika': 'Meine Klinik',
  'Moje výsledky': 'Meine Ergebnisse',
  'Skupina': 'Gruppe',
  'Partner mode': 'Partnermodus',
  'Záloha a obnova': 'Sicherung und Wiederherstellung',
  'Kdo stojí za aplikací BlooMia': 'Wer hinter BlooMia steht',
  'Napište mi': 'Schreiben Sie mir',
  'Proč vidím tohle': 'Warum sehe ich das',

  // --- zpětná lišta ---
  'Moji cestu': 'Meinen Weg',
  'celou cestu': 'den ganzen Weg',
  'vaši fázi': 'Ihre Phase',
  'Knihovnu': 'Bibliothek',
  'Komunitu': 'Gemeinschaft',
  'Skupinu': 'Gruppe',
  'Zpět na': 'Zurück zu',
  'Vaše cesta': 'Ihr Weg',
  'Ostatní': 'Sonstiges',

  // --- jazyk ---
  'Jazyk': 'Sprache',
  'Vaše záznamy zůstanou, kde jsou. Přepnutím se mění jazyk, ne data.':
    'Ihre Einträge bleiben, wo sie sind. Umgestellt wird die Sprache, nicht die Daten.',
  'Obsah se překládá postupně. Co ještě přeložené není, zůstává česky.':
    'Die Inhalte werden nach und nach übersetzt. Was noch nicht übersetzt ist, bleibt auf Tschechisch.',
  // --- čísla a jednotky ---------------------------------------------------
  // Mřížka zastupuje číslice. Viz `prelozVetu` v `client/preklad-dom.ts`.
  '# min': '# Min.',
  '# z #': '# von #',
  '# z # hotovo': '# von # erledigt',
  'mood # z #': 'Stimmung # von #',
  'hope # z #': 'Hoffnung # von #',
  'energy # z #': 'Energie # von #',
  'anxiety # z #': 'Angst # von #',
  'Nálada # z #': 'Stimmung # von #',
  '#. den stimulace': '#. Tag der Stimulation',
  'Dnes je #. den stimulace': 'Heute ist der #. Tag der Stimulation',
  'Posledních # dní': 'Letzte # Tage',
  'Posledních # dnů': 'Letzte # Tage',

  // --- Dnes ---------------------------------------------------------------
  'Dnešek': 'Heute',
  'Kde jste': 'Wo Sie stehen',
  'Moje fáze:': 'Meine Phase:',
  'Změnit →': 'Ändern →',
  'Dnešní téma': 'Thema des Tages',
  'Žádá dnešek': 'Der Tag verlangt',
  'Máte na to': 'Dafür haben Sie',
  'Den na cestě': 'Tag des Weges',
  'Před vámi': 'Vor Ihnen',
  'Celý vývoj': 'Der ganze Verlauf',
  'Průvodce fází': 'Begleiter durch die Phase',
  'Rychle přidat': 'Schnell hinzufügen',
  'Vybráno pro dnešek': 'Für heute ausgewählt',
  'otevře se obrazovka': 'öffnet eine Seite',
  'Co dnes na vás není': 'Was heute nicht an Ihnen liegt',
  'Co se dnes může dít': 'Was heute passieren kann',
  'Co už jste unesla': 'Was Sie schon getragen haben',
  'Co ukážou výsledky': 'Was die Ergebnisse zeigen werden',
  'Zapsat, jak vám dnes je': 'Festhalten, wie es Ihnen heute geht',
  'Ozvěte se lékaři, pokud:': 'Melden Sie sich bei Ihrer Ärztin oder Ihrem Arzt, wenn:',
  'Jak se obsah přizpůsobuje dni': 'Wie sich die Inhalte dem Tag anpassen',
  'Kdy na to tělo bude připravené': 'Wann Ihr Körper dafür bereit ist',
  'Vývoj náročnosti dne a vaší rezervy':
    'Wie sich die Anforderungen des Tages und Ihre Reserve bewegen',
  'Načasování určuje cyklus, ne kalendář.':
    'Den Zeitpunkt bestimmt der Zyklus, nicht der Kalender.',
  'Čekání na ně je součást, ne vaše chyba.':
    'Darauf zu warten gehört dazu, es ist nicht Ihr Fehler.',
  'Zatím tu není co sčítat. A to je taky výsledek.':
    'Noch gibt es nichts zusammenzurechnen. Auch das ist ein Ergebnis.',
  'Až založíte cyklus, plátky se začnou plnit jeho milníky.':
    'Sobald Sie einen Zyklus anlegen, füllen sich die Segmente mit seinen Meilensteinen.',
  'Zatím žádná zapsaná. Sepište je doma. V ordinaci je přečtete z telefonu.':
    'Noch keine notiert. Schreiben Sie sie zu Hause auf. In der Praxis lesen Sie sie vom Handy ab.',
  'Injekce každý den a kontroly každé dva až tři dny. Tělo pracuje na plné obrátky. A je to znát.':
    'Jeden Tag Spritzen und alle zwei bis drei Tage Kontrolle. Ihr Körper arbeitet auf Hochtouren. Und das merkt man.',
  'O těchhle věcech rozhoduje biologie nebo laboratoř, ne vaše snaha. Nedají se odškrtnout a nemají se hlídat.':
    'Darüber entscheidet die Biologie oder das Labor, nicht Ihre Anstrengung. Das lässt sich nicht abhaken und ist nicht Ihre Aufgabe.',
  'Tip:': 'Tipp:',
  'Podle fáze stimulace': 'Nach der Phase der Stimulation',

  // --- milníky na ose -----------------------------------------------------
  'Stimulace': 'Stimulation',
  'Trigger': 'Trigger',
  'Transfer': 'Transfer',
  'Odběr hCG': 'hCG-Bestimmung',
  'Odběr vajíček': 'Eizellentnahme',
  'Začátek stimulace': 'Beginn der Stimulation',
  'CD1. První den': 'CD1. Erster Tag',
  'Uzavření cyklu': 'Abschluss des Zyklus',
  'Založit cyklus': 'Zyklus anlegen',
  'Před prvním cyklem': 'Vor dem ersten Zyklus',

  // --- Zápis dne ----------------------------------------------------------
  'Jak mi je': 'Wie es mir geht',
  'Nálada': 'Stimmung',
  'Naděje': 'Hoffnung',
  'Energie': 'Energie',
  'Úzkost': 'Angst',
  'Tělo': 'Körper',
  'Uložit dnešek': 'Heute speichern',
  'Cokoli dalšího': 'Alles Weitere',
  'Tři věty stačí.': 'Drei Sätze genügen.',
  'Otázka na dnešek': 'Eine Frage für heute',
  'Čtyři osy rezervy': 'Vier Achsen der Reserve',
  'Co se dnes povedlo': 'Was heute gelungen ist',
  'Třeba: píchla jsem si sama.': 'Zum Beispiel: Ich habe mir selbst gespritzt.',
  'Volné místo. Nikdo jiný to neuvidí.': 'Freier Platz. Niemand sonst sieht es.',
  'Číselníky se ukládají hned, texty tímhle tlačítkem.':
    'Die Skalen speichern sofort, die Texte mit dieser Schaltfläche.',
  'Vypsaná myšlenka ztrácí sílu. Dokud je jen v hlavě, zní jako fakt.':
    'Ein aufgeschriebener Gedanke verliert seine Macht. Solange er nur im Kopf ist, klingt er wie eine Tatsache.',
  'Z těchhle čtyř se skládá vnitřní prstenec. Ukládá se hned po klepnutí.':
    'Aus diesen vier besteht der innere Ring. Jede speichert sofort beim Antippen.',
  'Jaká věta se vám dnes honila hlavou nejčastěji? Napište ji přesně tak, jak zněla.':
    'Welcher Satz ging Ihnen heute am häufigsten durch den Kopf? Schreiben Sie ihn genau so auf, wie er geklungen hat.',
  'Hlava si pamatuje hlavně selhání. Tohle je záměrné vyvážení. A v neděli se z toho stane věta týdne.':
    'Der Kopf behält vor allem das Misslungene. Das hier ist ein bewusstes Gegengewicht. Und am Sonntag wird daraus der Satz der Woche.',
  // Stupnice. Krátká slova, protože stojí pod sebou v jednom řádku.
  'nic': 'nichts',
  'klid': 'ruhig',
  'plno': 'voll',
  'dobrá': 'gut',
  'hodně': 'viel',
  'nemám': 'keine',
  'velká': 'groß',
  'na dně': 'am Ende',

  // --- Zápis: tělo --------------------------------------------------------
  'Prsa': 'Brust',
  'Kůže': 'Haut',
  'Váha': 'Gewicht',
  'Pánev': 'Becken',
  'Únava': 'Erschöpfung',
  'Hlava': 'Kopf',
  'Bolest': 'Schmerz',
  'Spánek': 'Schlaf',
  'Hormony': 'Hormone',
  'Trávení': 'Verdauung',
  'Krvácení': 'Blutung',
  'Nadýmání': 'Blähungen',
  'Jak se ozývá tělo': 'Was der Körper sagt',
  'Čekání dělá svoje': 'Das Warten fordert seinen Preis',
  'Jak moc došly síly': 'Wie weit die Kräfte weg sind',
  'Břicho, plyny, otoky': 'Bauch, Blähungen, Schwellungen',
  'Kolik zbývá a na co stačí': 'Wie viel bleibt und wofür es reicht',
  'Vaječníky, děloha, podbřišek': 'Eierstöcke, Gebärmutter, Unterbauch',
  'Bolest jinde než v podbřišku': 'Schmerz an anderer Stelle als im Unterbauch',
  'Progesteron zpomaluje střeva': 'Progesteron verlangsamt den Darm',
  'Sleduje se rychlost, ne číslo': 'Es zählt die Geschwindigkeit, nicht die Zahl',
  'Vpichy, čípky, náplasti a sprej': 'Spritzen, Zäpfchen, Pflaster und Spray',
  'Ozývají se první a drží nejdéle': 'Sie melden sich zuerst und halten am längsten',
  'Špinění i krvácení. Barva a síla': 'Schmierblutung und Blutung. Farbe und Stärke',
  'Noc, která rozhoduje o celém dni': 'Die Nacht, die über den ganzen Tag entscheidet',
  'Hlava a nervy při změnách hladin': 'Kopf und Nerven bei schwankenden Spiegeln',
  'Vidět je to i na pleti a vlasech': 'Man sieht es auch an Haut und Haaren',
  'Hormony hýbou náladou, není to slabost':
    'Hormone bewegen die Stimmung. Das ist keine Schwäche',
  'Stimulace, blokáda i podpora. Co dělají hladiny':
    'Stimulation, Blockade und Unterstützung. Was die Spiegel tun',
  'Aplikace příznaky nehodnotí ani z nich nic neusuzuje. Zapisují se proto, abyste je viděla v čase a měla co ukázat lékaři.':
    'Die App bewertet Ihre Symptome nicht und zieht keine Schlüsse daraus. Sie halten sie fest, damit Sie sie über die Zeit sehen und Ihrer Ärztin oder Ihrem Arzt etwas zeigen können.',
  'Rozdělené podle toho, odkud potíž jde. „Bolest v místě vpichu“ a „píchání ve vaječnících“ nejsou totéž. A když se to zapíše zvlášť, dá se s tím pak něco dělat.':
    'Geordnet danach, woher die Beschwerde kommt. \u201ESchmerz an der Einstichstelle\u201C und \u201EStechen in den Eierstöcken\u201C sind nicht dasselbe. Getrennt festgehalten lässt sich damit auch etwas tun.',
  // --- věnec na Dnes -----------------------------------------------------
  // „z #“ pokryje i „ze #“: srovnává to `prelozVetu`.
  'za vámi': 'hinter Ihnen',
  'před vámi': 'vor Ihnen',
  'Za vámi': 'Hinter Ihnen',
  'z #': 'von #',
  'Za vámi # milník z #': '# von # Meilensteinen hinter Ihnen',
  'Za vámi # milníky z #': '# von # Meilensteinen hinter Ihnen',
  'Za vámi # milníků z #': '# von # Meilensteinen hinter Ihnen',
  'Za vámi # milník z #, cyklus je z # procent za vámi':
    '# von # Meilensteinen hinter Ihnen, der Zyklus ist zu # Prozent geschafft',
  'Za vámi # milníky z #, cyklus je z # procent za vámi':
    '# von # Meilensteinen hinter Ihnen, der Zyklus ist zu # Prozent geschafft',
  'Za vámi # milníků z #, cyklus je z # procent za vámi':
    '# von # Meilensteinen hinter Ihnen, der Zyklus ist zu # Prozent geschafft',
  // --- odznaky typu obsahu ------------------------------------------------
  // Ikona a slovo stojí v šabloně vedle sebe, takže je to jeden text.
  '❧ Článek': '❧ Artikel',
  '✓ Checklist': '✓ Checkliste',
  '❦ Příběh': '❦ Geschichte',
  '◈ Kurz': '◈ Kurs',
  '? Kvíz': '? Quiz',
  '❂ Pojem': '❂ Begriff',
  '◉ Živě': '◉ Live',
  'Článek': 'Artikel',
  'Checklist': 'Checkliste',
  'Příběh': 'Geschichte',
  'Kurz': 'Kurs',
  'Kvíz': 'Quiz',
  'Živě': 'Live',
  'Otázky na lékaře': 'Fragen an die Ärztin oder den Arzt',
  'Dnes je na vás · # z #': 'Heute an Ihnen · # von #',

  // --- Deník -----------------------------------------------------------------
  'Vývoj': 'Verlauf',
  'chybí': 'fehlt',
  'Zápisy': 'Einträge',
  'nezapsáno': 'nicht erfasst',
  'Ohlédnutí': 'Rückblick',
  'Připomínky': 'Erinnerungen',
  'Váš přehled': 'Ihre Übersicht',
  'Co vás čeká': 'Was ansteht',
  'Volný zápis': 'Freier Eintrag',
  'Dnešní zápis': 'Eintrag von heute',
  'Uložit zápis': 'Eintrag speichern',
  'Kde dnes jste': 'Wo Sie heute stehen',
  'nic v kalendáři': 'nichts im Kalender',
  'Jak na tom jste': 'Wie es Ihnen geht',
  'Jak vám dnes je': 'Wie es Ihnen heute geht',
  'Zítra bude jiná': 'Morgen ist eine andere',
  'Hodilo by se dnes': 'Könnte heute helfen',
  'nikdy text zápisu': 'niemals den Text eines Eintrags',
  '1 = žádná, 5 = velká': '1 = keine, 5 = groß',
  '1 = na dně, 5 = plná': '1 = am Ende, 5 = voll',
  'Udělala jsem maximum': 'Ich habe alles getan, was ich konnte',
  '1 = klid, 5 = svírá to': '1 = ruhig, 5 = beklemmend',
  'Soukromé. Nikdo jiný to nevidí': 'Privat. Niemand sonst sieht es',
  'Cokoliv, co potřebujete dostat z hlavy.': 'Alles, was Sie aus dem Kopf bekommen müssen.',
  'Klidně jen tři věty. Nikdo jiný to neuvidí.': 'Drei Sätze reichen. Niemand sonst wird es sehen.',
  'Například: došla jsem na procházku, i když se mi nechtělo':
    'Zum Beispiel: Ich bin spazieren gegangen, obwohl ich keine Lust hatte',
  'I úplně malá věc. Hlava si v zátěži pamatuje hlavně to, co nevyšlo. Tohle je vědomé vyvážení.':
    'Auch eine ganz kleine Sache. Unter Belastung behält der Kopf vor allem das, was nicht geklappt hat. Das hier ist ein bewusstes Gegengewicht.',
  'Večer před transferem nebo před odběrem. A pak kdykoli, když se přistihnete, jak hledáte, co jste udělala špatně.':
    'Am Abend vor einem Transfer oder einer Entnahme. Und immer dann, wenn Sie sich dabei erwischen, nach Ihrem Fehler zu suchen.',
  'Deník je soukromý. Partner v Partner mode uvidí jen průměrnou náladu za týden, **nikdy text zápisu**.':
    'Das Tagebuch ist privat. Im Partner mode sieht Ihr Partner nur die durchschnittliche Stimmung der Woche, **niemals den Text eines Eintrags**.',
  '#. týden fáze': '#. Woche der Phase',
  'Otázka na dnešek · Práce s hlavou': 'Eine Frage für heute · Arbeit mit dem Kopf',
  'Okruhy': 'Bereiche',
  'Dopis sobě': 'Ein Brief an sich selbst',
  'Sebesoucit': 'Selbstmitgefühl',
  'Hodí se teď': 'Jetzt passend',
  'IVF a práce': 'IVF und Arbeit',
  'Já a partner': 'Mein Partner und ich',
  'Kolo kontroly': 'Der Kreis der Kontrolle',
  'Moje myšlenky': 'Meine Gedanken',
  'Než se zhasne.': 'Bevor das Licht ausgeht.',
  'Regulace stresu': 'Stress regulieren',
  'Stres z financí': 'Stress wegen Geld',
  'Jak se dnes cítím': 'Wie ich mich heute fühle',
  'Ztráta a zklamání': 'Verlust und Enttäuschung',
  'Večerní zklidnění': 'Zur Ruhe kommen am Abend',
  'Čekání a nejistota': 'Warten und Ungewissheit',
  'Naděje a očekávání': 'Hoffnung und Erwartung',
  'Můj vztah ke klinice': 'Mein Verhältnis zur Klinik',
  'Vztah k vlastnímu tělu': 'Das Verhältnis zum eigenen Körper',
  'Důvěra, otázky, hranice.': 'Vertrauen, Fragen, Grenzen.',
  'Tělo napřed, hlava potom.': 'Erst der Körper, dann der Kopf.',
  'Malé věci, které mi pomohly': 'Kleine Dinge, die mir geholfen haben',
  'Moje čísla nejsou cizí čísla': 'Meine Zahlen sind nicht die Zahlen anderer',
  'Krátké zastavení nad dneškem.': 'Ein kurzes Innehalten über den Tag.',
  'Sbírka, která má cenu až po měsíci.': 'Eine Sammlung, die erst nach einem Monat etwas wert ist.',
  'Peníze v léčbě nejsou vedlejší téma.': 'Geld in der Behandlung ist kein Nebenthema.',
  'Dva kalendáře, které se nedomlouvají.': 'Zwei Kalender, die sich nicht abstimmen.',
  'Ne podle vzhledu. Podle toho, co unese.':
    'Nicht nach dem Aussehen. Nach dem, was er tragen kann.',
  'Doufat a chránit se přitom není protimluv.':
    'Hoffen und sich dabei schützen ist kein Widerspruch.',
  'Nejdelší část léčby a nejmíň se o ní mluví.':
    'Der längste Teil der Behandlung, über den am wenigsten gesprochen wird.',
  'Co si neříkáme a co bychom potřebovali slyšet.':
    'Was wir nicht sagen und was wir hören müssten.',
  'Když si nadáváte nebo máte pocit, že za to můžete.':
    'Wenn Sie mit sich schimpfen oder das Gefühl haben, schuld zu sein.',
  'Když se v hlavě zasekne věta, která zní jako fakt.':
    'Wenn ein Satz im Kopf hängen bleibt und wie eine Tatsache klingt.',
  'Mluvit k sobě tak, jak byste mluvila ke kamarádce.':
    'Mit sich so sprechen, wie Sie mit einer Freundin sprechen würden.',
  'Pro chvíle, kdy se výsledek nestal tím, v co jste doufala.':
    'Für die Momente, in denen das Ergebnis nicht das war, was Sie erhofft haben.',
  'Když se myšlenky točí kolem věcí, se kterými nic nenaděláte.':
    'Wenn die Gedanken um Dinge kreisen, an denen Sie nichts ändern können.',
  'Po odběru nebo po telefonátu z embryologie, když srovnáváte svoje počty s cizími.':
    'Nach einer Entnahme oder einem Anruf aus der Embryologie, wenn Sie Ihre Zahlen mit denen anderer vergleichen.',
  'Tyhle techniky vycházejí z postupů běžných v kognitivně-behaviorální terapii a všímavosti. **Nejsou léčba a nenahrazují odbornou pomoc**: jsou to nástroje na konkrétní těžkou chvíli.':
    'Diese Techniken stützen sich auf Vorgehensweisen, die in der kognitiven Verhaltenstherapie und der Achtsamkeit üblich sind. **Sie sind keine Behandlung und ersetzen keine fachliche Hilfe**: Sie sind Werkzeuge für einen bestimmten schweren Moment.',
  'Práce se sebou. Techniky, které se dají udělat teď hned. Nejsou to články o tom, jak by to šlo. Jsou to kroky, které tu odklikáte.':
    'Arbeit an sich selbst. Techniken, die Sie jetzt sofort machen können. Das sind keine Artikel darüber, wie es gehen könnte. Das sind Schritte, die Sie hier durchklicken.',
  '# cvičení celkem': '# Übungen insgesamt',
  'Zapsat dnešek': 'Heute festhalten',
  'Zatím tu nic není': 'Noch nichts hier',
  'Až něco zapíšete nebo vyplníte cvičení, najdete to tady. Můžete se k tomu vracet a kdykoliv to smazat.':
    'Sobald Sie etwas schreiben oder eine Übung ausfüllen, finden Sie es hier. Sie können jederzeit darauf zurückkommen und es löschen.',
  'Zatím není co kreslit': 'Noch nichts zu zeichnen',
  'Až budou zápisy aspoň dva, uvidíte tady, jak se nálada, úzkost a naděje vyvíjejí v čase. Bývá to překvapivé. V hlavě to vypadá jako rovná čára dolů.':
    'Sobald es mindestens zwei Einträge gibt, sehen Sie hier, wie sich Stimmung, Angst und Hoffnung über die Zeit bewegen. Das überrascht meistens. Im Kopf sieht es wie eine gerade Linie nach unten aus.',
  'Na cestě': 'Unterwegs',
  'Zápisů v deníku': 'Tagebucheinträge',
  'Co máte za sebou': 'Was Sie hinter sich haben',
  'Uložit ohlédnutí': 'Rückblick speichern',
  'Týdenní ohlédnutí': 'Wöchentlicher Rückblick',
  'Přidat do kroniky': 'Zur Chronik hinzufügen',
  'Vyplněných cvičení': 'Ausgefüllte Übungen',
  'Odškrtnutých položek': 'Abgehakte Punkte',
  'Vzpomínka na později': 'Eine Erinnerung für später',
  'Práce s hlavou ve vaší fázi': 'Arbeit mit dem Kopf in Ihrer Phase',
  'Co mi pomohlo. A udělám to znovu?': 'Was mir geholfen hat. Und mache ich es wieder?',
  'Když se jede den po dni, posun není vidět. Tady je.':
    'Tag für Tag sieht man die Veränderung nicht. Hier ist sie.',
  'Co bylo tenhle týden nejtěžší a jak jsem to zvládla?':
    'Was war diese Woche am schwersten und wie habe ich es geschafft?',
  'Co chci příští týden dělat jinak? Jednu konkrétní věc.':
    'Was möchte ich nächste Woche anders machen? Eine bestimmte Sache.',
  'Tři otázky, které se vyplatí projít jednou týdně. Uloží se jako běžný zápis.':
    'Drei Fragen, die sich einmal pro Woche lohnen. Sie werden als normaler Eintrag gespeichert.',
  'Zápisy v řadě. Cíl je týden. Ne kvůli sbírání, ale proto, že teprve na týdnu je vidět vývoj.':
    'Einträge in Folge. Das Ziel ist eine Woche. Nicht zum Sammeln, sondern weil sich eine Entwicklung erst über eine Woche zeigt.',
  'Něco, co dnes prožíváte, si za rok nevybavíte. Můžete si to uložit do kroniky. Tam se z toho jednou dá udělat kniha.':
    'Etwas, das Sie heute erleben, werden Sie in einem Jahr nicht mehr abrufen können. Sie können es in der Chronik speichern. Daraus kann eines Tages ein Buch werden.',

  // --- Moje cesta, fáze a Celá cesta -----------------------------------------
  'Přehled': 'Übersicht',
  'Historie': 'Verlauf',
  'Časová osa': 'Zeitachse',
  'Statistiky': 'Statistik',
  'Po transferu': 'Nach dem Transfer',
  'Moje IVF cesta': 'Mein IVF-Weg',
  'Zatím bez cyklu': 'Noch kein Zyklus',
  'Moje IVF finance': 'Meine IVF-Kosten',
  'Nebo rovnou léky': 'Oder direkt zu den Medikamenten',
  'Nejdřív jen termíny': 'Zuerst nur die Termine',
  'Zatím tu není žádný cyklus': 'Es gibt noch keinen Zyklus',
  'Ultrazvuky, laboratoř, měření.': 'Ultraschall, Labor, Messwerte.',
  'Papíry z kliniky na jednom místě.': 'Unterlagen aus der Klinik an einem Ort.',
  'Kde jste dnes a co vás čeká nejdřív.': 'Wo Sie heute stehen und was als Nächstes kommt.',
  'Hodnoty a čísla z cyklů vedle sebe v čase.':
    'Werte und Zahlen aus den Zyklen nebeneinander über die Zeit.',
  'Protokol od kliniky a denní odškrtávání dávek':
    'Das Protokoll der Klinik und das tägliche Abhaken der Dosen',
  'Celá cesta v přehledu. Co bylo v kterém cyklu.':
    'Der ganze Weg im Überblick. Was in welchem Zyklus war.',
  'Kolik cesta stála, co je zaplacené a co zbývá.':
    'Was der Weg gekostet hat, was bezahlt ist und was bleibt.',
  'Všechny transfery napříč cykly, od nejnovějšího.':
    'Alle Transfers über alle Zyklen, der neueste zuerst.',
  'Termíny, kontroly a odběry. Část se doplní sama.':
    'Termine, Kontrollen und Entnahmen. Ein Teil füllt sich selbst.',
  'Kontroly a odběry si můžete zapisovat i bez cyklu':
    'Kontrollen und Entnahmen können Sie auch ohne Zyklus festhalten',
  'Den po dni od transferu k odběru hCG. Co se může dít.':
    'Tag für Tag vom Transfer bis zur hCG-Bestimmung. Was passieren kann.',
  'Karta pro každé embryo. Vývoj po dnech, genetika, osud.':
    'Eine Karte für jedes Embryo. Entwicklung Tag für Tag, Genetik, Schicksal.',
  'Chronologie celé cesty. Jednou z toho může být kronika.':
    'Eine Chronologie des ganzen Weges. Daraus kann einmal eine Chronik werden.',
  'Cyklus je zdravotní karta jednoho pokusu: klinika, protokol, milníky, čísla z laboratoře i výsledek. Až ho založíte, bude se na téhle obrazovce skládat všechno ostatní kolem něj.':
    'Ein Zyklus ist die Krankenakte eines Versuchs: Klinik, Protokoll, Meilensteine, Laborwerte und Ergebnis. Sobald Sie einen anlegen, baut sich auf dieser Seite alles andere darum herum auf.',
  'Zatím tu není žádný cyklus. Až ho založíte, uvidíte tady celou jeho cestu na jednom místě. Stimulaci, odběr, embrya i každý transfer.':
    'Es gibt noch keinen Zyklus. Sobald Sie einen anlegen, sehen Sie hier seinen ganzen Verlauf an einem Ort. Stimulation, Entnahme, Embryonen und jeden Transfer.',
  'Obsah': 'Inhalt',
  'Doplňky': 'Ergänzungen',
  'K lékaři': 'Für die Praxis',
  'Slovníček': 'Glossar',
  'Co sledovat': 'Was zu beobachten ist',
  'Vaše situace': 'Ihre Situation',
  'Zadat hodnoty': 'Werte eintragen',
  'Zapsat do deníku': 'Ins Tagebuch schreiben',
  'Na co se připravit': 'Worauf Sie sich einstellen können',
  'Doplnit v nastavení': 'In den Einstellungen ergänzen',
  'Zobrazit obsah fáze': 'Inhalte der Phase anzeigen',
  'Z toho se skládají vaše grafy': 'Daraus entstehen Ihre Diagramme',
  'Estradiol, pokud vám ho měří.': 'Estradiol, wenn es bei Ihnen gemessen wird.',
  'Věci, které se dají udělat dopředu': 'Dinge, die Sie vorher tun können',
  'Obvod břicha, když máte riziko OHSS.':
    'Der Bauchumfang, wenn bei Ihnen ein OHSS-Risiko besteht.',
  'Volnější kalhoty. Břicho se zvětší a je citlivé.':
    'Weitere Hosen. Der Bauch wird größer und ist empfindlich.',
  'Ranní termíny na kontroly. Domluvte si to v práci dopředu.':
    'Morgentermine für die Kontrollen. Klären Sie das vorher bei der Arbeit.',
  'Vědět, že poslední dny bývají fyzicky nejtěžší z celého cyklu.':
    'Zu wissen, dass die letzten Tage körperlich meist die schwersten des ganzen Zyklus sind.',
  'Ultrazvukové kontroly zhruba každé dva až tři dny, často brzy ráno.':
    'Ultraschallkontrollen etwa alle zwei bis drei Tage, oft früh am Morgen.',
  'Chladicí polštářek a dezinfekci k injekcím, ať to máte na jednom místě.':
    'Ein Kühlkissen und Desinfektionsmittel zu den Spritzen, damit alles an einem Ort ist.',
  'Počet a velikost folikulů z každé kontroly. Z toho vznikne křivka růstu.':
    'Zahl und Größe der Follikel aus jeder Kontrolle. Daraus entsteht die Wachstumskurve.',
  'Nafouklé břicho, citlivá prsa, únava a výkyvy nálad. Ke konci stimulace nejvíc.':
    'Ein geblähter Bauch, empfindliche Brust, Erschöpfung und Stimmungsschwankungen. Am stärksten gegen Ende der Stimulation.',
  'Denní injekce, obvykle večer ve stejnou dobu. Většina žen si je píchá sama do bříška.':
    'Täglich Spritzen, meist abends zur gleichen Zeit. Die meisten Frauen setzen sie sich selbst in den Bauch.',
  'Trigger v přesně určený čas. Obvykle 34–36 hodin před odběrem. Tady se nesmí splést hodina.':
    'Der Trigger zu einer genau festgelegten Zeit. Meist 34 bis 36 Stunden vor der Entnahme. Hier darf die Uhrzeit nicht verwechselt werden.',
  'Nálada a bolest. Uvidíte, jak stimulace probíhala, až se na to budete chtít podívat zpětně.':
    'Stimmung und Schmerz. Sie werden sehen, wie die Stimulation verlief, wenn Sie später zurückblicken wollen.',
  'Dávky se v průběhu mění podle toho, jak folikuly rostou. Změna dávky není chyba, je to řízení.':
    'Die Dosen ändern sich im Verlauf, je nachdem, wie die Follikel wachsen. Eine Dosisänderung ist kein Fehler, sondern Steuerung.',
  'Zatím nemáte vybranou žádnou diagnózu ani situaci. Když ji doplníte, obsah se podle ní přizpůsobí.':
    'Sie haben noch keine Diagnose und keine Situation ausgewählt. Sobald Sie etwas ergänzen, richten sich die Inhalte danach.',
  'Léčba · jste tady': 'Behandlung · Sie sind hier',
  'Pro tuhle fázi máme # materiálů.': 'Für diese Phase haben wir # Materialien.',
  'Léčba': 'Behandlung',
  'Embrya': 'Embryonen',
  'Čekání': 'Warten',
  'Ztráty': 'Verluste',
  'Oplození': 'Befruchtung',
  'Právě teď': 'Genau jetzt',
  'Plánování': 'Planung',
  'Jste tady': 'Sie sind hier',
  'Diagnostika': 'Diagnostik',
  'Nejtěžší dny': 'Die schwersten Tage',
  'Když to bolí': 'Wenn es weh tut',
  'Příprava těla': 'Den Körper vorbereiten',
  'Čekání na hCG': 'Warten auf den hCG-Wert',
  'Pozitivní hCG': 'Positiver hCG-Wert',
  'Revize dělohy': 'Ausschabung (Kürettage)',
  'Než začne cesta': 'Bevor der Weg beginnt',
  'Příprava na IVF': 'Vorbereitung auf die IVF',
  'Otevřít mou fázi': 'Meine Phase öffnen',
  'Změnit, kde jsem': 'Ändern, wo ich stehe',
  'Hledáme odpovědi': 'Wir suchen Antworten',
  'Inseminace (IUI)': 'Insemination (IUI)',
  'Samovolný potrat': 'Fehlgeburt',
  'Přemýšlíme o dítěti': 'Wir denken über ein Kind nach',
  'Genetická vyšetření': 'Genetische Untersuchungen',
  'Opakované neúspěchy': 'Wiederholte Fehlschläge',
  'Zamlklé těhotenství': 'Verhaltene Fehlgeburt',
  'Snažíme se přirozeně': 'Wir versuchen es natürlich',
  'IUI, IVF a vše kolem': 'IUI, IVF und alles drumherum',
  'Čekání na další pokus': 'Warten auf den nächsten Versuch',
  'Biochemické těhotenství': 'Biochemische Schwangerschaft',
  'Mimoděložní těhotenství': 'Eileiterschwangerschaft',
  'Celá cesta, ne jeden cyklus': 'Der ganze Weg, nicht ein Zyklus',
  'Den, na který jste čekala. Krátký zákrok s obrovskou váhou.':
    'Der Tag, auf den Sie gewartet haben. Ein kurzer Eingriff mit enormem Gewicht.',
  'Zákrok, příprava, rekonvalescence a kdy se smí zkoušet znovu.':
    'Der Eingriff, die Vorbereitung, die Erholung und wann Sie wieder versuchen dürfen.',
  'Šetrnější krok před IVF. Co obnáší, jak se připravit a co čekat.':
    'Ein sanfterer Schritt vor der IVF. Was dazugehört, wie Sie sich vorbereiten und was Sie erwarten können.',
  'Den odběru a dny těsně po něm. Co dělat, co je normální a kdy volat.':
    'Der Tag der Entnahme und die Tage danach. Was zu tun ist, was normal ist und wann Sie anrufen sollten.',
  'Co se děje s tělem, co s duší a jak dlouho trvá, než se dá pokračovat.':
    'Was mit dem Körper passiert, was mit der Seele und wie lange es dauert, bis es weitergehen kann.',
  'Karyotyp, trombofilie, PGT, imunologie. Co se testuje a co z toho plyne.':
    'Karyotyp, Thrombophilie, PGT, Immunologie. Was getestet wird und was daraus folgt.',
  'Zdravotně náročná a emočně krutá situace. Provedeme vás léčbou i zotavením.':
    'Medizinisch anspruchsvoll und emotional grausam. Wir begleiten Sie durch Behandlung und Erholung.',
  'Pauza, kterou jste si nevybrala. Je to čas na regeneraci, otázky pro lékaře a na sebe.':
    'Eine Pause, die Sie nicht gewählt haben. Es ist Zeit für Erholung, für Fragen an die Praxis und für Sie selbst.',
  'Vaše vajíčka se právě setkala se spermiemi. Zítra přijde první telefonát z embryologie.':
    'Ihre Eizellen sind gerade den Spermien begegnet. Morgen kommt der erste Anruf aus der Embryologie.',
  'Ticho na ultrazvuku, které se nedá popsat. Co následuje zdravotně a co pomáhá psychicky.':
    'Eine Stille beim Ultraschall, die sich nicht beschreiben lässt. Was medizinisch folgt und was seelisch hilft.',
  'Tři měsíce před početím se tvoří vajíčko, které možná bude to vaše. Co děláte teď, má smysl.':
    'Die Eizelle, die vielleicht Ihre wird, entsteht drei Monate vor der Empfängnis. Was Sie jetzt tun, hat Sinn.',
  'Dvě čárky nebo číslo, na které jste čekala. A hned s ním nová vlna otázek a opatrné radosti.':
    'Zwei Striche oder die Zahl, auf die Sie gewartet haben. Und damit sofort eine neue Welle von Fragen und vorsichtiger Freude.',
  'Než začne stimulace. Papíry, vyšetření, léky, otázky na kliniku a hlavně. Nastavení očekávání.':
    'Bevor die Stimulation beginnt. Unterlagen, Untersuchungen, Medikamente, Fragen an die Klinik und vor allem. Erwartungen klären.',
  'Nejtišší a nejtěžší dny cyklu. Vysvětlíme, co znamenají čísla a písmena ve zprávě z laboratoře.':
    'Die stillsten und schwersten Tage des Zyklus. Wir erklären, was die Zahlen und Buchstaben im Laborbericht bedeuten.',
  'Sledování cyklu, plodné dny, naděje každý měsíc. Provedeme vás tím, aby ze snažení nebyla dřina.':
    'Zyklusbeobachtung, fruchtbare Tage, jeden Monat Hoffnung. Wir begleiten Sie, damit aus dem Versuchen keine Plackerei wird.',
  'Když se to nedaří opakovaně. Jaká vyšetření mají smysl, co se dá změnit a jak to psychicky ustát.':
    'Wenn es wiederholt nicht klappt. Welche Untersuchungen sinnvoll sind, was sich ändern lässt und wie Sie es seelisch durchhalten.',
  'Nejdelších deset dní vašeho života. Každý den vám řekneme, co se právě děje a co je normální cítit.':
    'Die längsten zehn Tage Ihres Lebens. Jeden Tag sagen wir Ihnen, was gerade passiert und was normal ist zu fühlen.',
  'Injekce, ultrazvuky, folikuly, hormony. Nejintenzivnější týden a půl celého cyklu. Den po dni s vámi.':
    'Spritzen, Ultraschall, Follikel, Hormone. Die intensivste Woche und Hälfte des ganzen Zyklus. Tag für Tag mit Ihnen.',
  'Těhotenství, které skončilo dřív, než ho někdo stihl vidět. Byla jste těhotná. Ta ztráta je skutečná.':
    'Eine Schwangerschaft, die endete, bevor sie jemand sehen konnte. Sie waren schwanger. Dieser Verlust ist echt.',
  'Vyšetření, zkratky, čekání na výsledky. Vysvětlíme každé z nich lidsky. Abyste věděla, co se děje a proč.':
    'Untersuchungen, Abkürzungen, Warten auf Ergebnisse. Wir erklären jede davon in klaren Worten. Damit Sie wissen, was passiert und warum.',
  'Období, kdy se rozhodnutí teprve rodí. Není co dohánět. Je čas se ptát, zjišťovat a připravovat se v klidu.':
    'Die Zeit, in der die Entscheidung erst entsteht. Es gibt nichts aufzuholen. Es ist Zeit zu fragen, herauszufinden und sich in Ruhe vorzubereiten.',
  '# fází od prvního rozhodnutí po batolecí období. Vaše aktuální fáze je zvýrazněná. A když se posunete, stačí ji přepnout.':
    '# Phasen von der ersten Entscheidung bis zum Kleinkindalter. Ihre aktuelle Phase ist hervorgehoben. Und wenn Sie weiterkommen, stellen Sie sie einfach um.',

  // --- Moje diagnóza a Moje vyšetření ----------------------------------------
  'Věk': 'Alter',
  'PCOS': 'PCOS',
  'Nízké AMH': 'Niedriges AMH',
  'Adenomyóza': 'Adenomyose',
  'Jiný důvod': 'Ein anderer Grund',
  'Trombofilie': 'Thrombophilie',
  'Endometrióza': 'Endometriose',
  'Hydrosalpinx': 'Hydrosalpinx',
  'Další důvody': 'Weitere Gründe',
  'Bez partnera': 'Ohne Partner',
  'Mužský faktor': 'Männlicher Faktor',
  'Proč jdu na IVF': 'Warum ich zur IVF gehe',
  'Poruchy ovulace': 'Ovulationsstörungen',
  'Myomy nebo polypy': 'Myome oder Polypen',
  'Opakované potraty': 'Wiederholte Fehlgeburten',
  'Onkologická léčba': 'Krebsbehandlung',
  'Děloha a vejcovody': 'Gebärmutter und Eileiter',
  'Genetická indikace': 'Genetische Indikation',
  'Kombinovaný faktor': 'Kombinierter Faktor',
  'Imunologický nález': 'Immunologischer Befund',
  'Stejnopohlavní pár': 'Gleichgeschlechtliches Paar',
  'Ovulace a vaječníky': 'Ovulation und Eierstöcke',
  'Nepravidelný cyklus': 'Unregelmäßiger Zyklus',
  'Poškozené vejcovody': 'Geschädigte Eileiter',
  'Nízký počet spermií': 'Niedrige Spermienzahl',
  'Zachování plodnosti': 'Erhalt der Fruchtbarkeit',
  'Odstraněné vejcovody': 'Entfernte Eileiter',
  'Porucha štítné žlázy': 'Schilddrüsenstörung',
  'Neprůchodné vejcovody': 'Verschlossene Eileiter',
  'Inzulinová rezistence': 'Insulinresistenz',
  'Snížená kvalita spermií': 'Verminderte Spermienqualität',
  'Nevysvětlená neplodnost': 'Unerklärte Unfruchtbarkeit',
  'Spermie ve vzorku nejsou': 'Keine Spermien in der Probe',
  'Genetická zátěž v rodině': 'Genetische Belastung in der Familie',
  'Zvýšená srážlivost krve.': 'Erhöhte Blutgerinnung.',
  'Snížená ovariální rezerva': 'Verminderte Eierstockreserve',
  'Anatomická odchylka dělohy': 'Anatomische Abweichung der Gebärmutter',
  'Snížená pohyblivost spermií': 'Verminderte Spermienbeweglichkeit',
  'Genetika a opakované ztráty': 'Genetik und wiederholte Verluste',
  'Vejcovod naplněný tekutinou.': 'Ein mit Flüssigkeit gefüllter Eileiter.',
  'Dvě a víc ztrát těhotenství.': 'Zwei oder mehr Schwangerschaftsverluste.',
  'Opakovaně neúspěšné transfery': 'Wiederholt erfolglose Transfers',
  'Často jde ruku v ruce s PCOS.': 'Geht oft mit PCOS einher.',
  'Cesta s darovanými spermiemi.': 'Ein Weg mit Spendersamen.',
  'Syndrom polycystických ovarií.': 'Polyzystisches Ovarialsyndrom.',
  'Předčasná ovariální insuficience': 'Vorzeitige Ovarialinsuffizienz',
  'Spermie se pohybují méně nebo jinak.': 'Die Spermien bewegen sich weniger oder anders.',
  'Nezhoubné útvary v děloze nebo na ní.': 'Gutartige Gebilde in oder an der Gebärmutter.',
  'Sliznice prorůstá do svaloviny dělohy.':
    'Die Schleimhaut wächst in die Muskulatur der Gebärmutter.',
  'Tkáň podobná sliznici roste mimo dělohu.':
    'Schleimhautähnliches Gewebe wächst außerhalb der Gebärmutter.',
  'Zamražení vajíček nebo embryí do budoucna.':
    'Einfrieren von Eizellen oder Embryonen für später.',
  'Transfery, po kterých nepřišlo těhotenství.': 'Transfers, auf die keine Schwangerschaft folgte.',
  'Plodnost se zajišťuje před zahájením léčby.':
    'Die Fruchtbarkeit wird vor Behandlungsbeginn gesichert.',
  'Přepážka, dvojrohá děloha, srůsty a podobně.':
    'Septum, zweihörnige Gebärmutter, Verwachsungen und Ähnliches.',
  'Po operaci. Cesta k otěhotnění vede přes IVF.':
    'Nach einer Operation. Der Weg zur Schwangerschaft führt über die IVF.',
  'Odchylky v morfologii nebo ve fragmentaci DNA.':
    'Abweichungen in der Morphologie oder der DNA-Fragmentierung.',
  'Vejcovody neumožňují setkání vajíčka a spermie.':
    'Die Eileiter lassen Eizelle und Spermium nicht zusammenkommen.',
  'Souhrnný název pro odchylky ve vzorku partnera.':
    'Ein Sammelbegriff für Abweichungen in der Probe des Partners.',
  'Koncentrace ve vzorku je nižší, než se očekává.':
    'Die Konzentration in der Probe ist niedriger als erwartet.',
  'Dědičné onemocnění v rodině jednoho z partnerů.':
    'Eine Erbkrankheit in der Familie eines Partners.',
  'Sám o sobě není nemoc. Mění ale, kolik je času.':
    'Für sich genommen keine Krankheit. Es verändert aber, wie viel Zeit bleibt.',
  'Vaječníky přestaly pracovat dřív, než je obvyklé.':
    'Die Eierstöcke haben früher als üblich aufgehört zu arbeiten.',
  'Po zánětu, operaci nebo mimoděložním těhotenství.':
    'Nach einer Entzündung, einer Operation oder einer Eileiterschwangerschaft.',
  'Řeší se odběrem přímo z varlete nebo dárcovstvím.':
    'Man löst es durch die Entnahme direkt aus dem Hoden oder durch eine Spende.',
  'Nález, kvůli kterému se zvažuje testování embryí.':
    'Ein Befund, wegen dem ein Embryotest erwogen wird.',
  'Ovulace nenastává pravidelně nebo nenastává vůbec.':
    'Die Ovulation findet nicht regelmäßig oder gar nicht statt.',
  'Ve vaječnících je méně vajíček, než odpovídá věku.':
    'In den Eierstöcken sind weniger Eizellen, als dem Alter entspricht.',
  'Délka cyklu se výrazně mění nebo se nedá předvídat.':
    'Die Zykluslänge schwankt stark oder lässt sich nicht vorhersagen.',
  'Vyšetření nenašla příčinu. Je to diagnóza, ne chyba.':
    'Die Untersuchungen haben keine Ursache gefunden. Das ist eine Diagnose, kein Fehler.',
  'Hodnota, která orientačně popisuje ovariální rezervu.':
    'Ein Wert, der die Eierstockreserve grob beschreibt.',
  'Ovlivňuje cyklus i těhotenství, obvykle se dá upravit.':
    'Beeinflusst Zyklus und Schwangerschaft und lässt sich meist einstellen.',
  'Co se do seznamu nevešlo. Dopište si ho vlastními slovy.':
    'Was nicht in die Liste gepasst hat. Ergänzen Sie es in eigenen Worten.',
  'Oblast, kde je řada postupů diskutovaná a důkazy omezené.':
    'Ein Bereich, in dem viele Vorgehensweisen diskutiert werden und die Belege begrenzt sind.',
  'Sešlo se víc důvodů naráz. V IVF spíš pravidlo než výjimka.':
    'Mehrere Gründe sind zusammengekommen. In der IVF ist das eher die Regel als die Ausnahme.',
  'Označte důvody, které se vás týkají. Může jich být víc. Kombinovaný faktor je v IVF spíš pravidlo než výjimka.':
    'Markieren Sie die Gründe, die auf Sie zutreffen. Es können mehrere sein. Ein kombinierter Faktor ist in der IVF eher die Regel als die Ausnahme.',
  'Diagnóza je informace, ne rozsudek. Aplikace z ní **neodvozuje léčbu ani prognózu**: o obojím rozhoduje váš lékař podle celého vašeho obrazu.':
    'Eine Diagnose ist eine Information, kein Urteil. Die App **leitet daraus keine Behandlung und keine Prognose ab**: Über beides entscheidet Ihre Ärztin oder Ihr Arzt anhand Ihres gesamten Bildes.',
  'Zatím nemáte označené nic. Nevadí, ne každá žena zná svoji diagnózu hned a „nevysvětlená neplodnost“ je taky diagnóza.':
    'Sie haben noch nichts markiert. Das ist in Ordnung. Nicht jede Frau kennt ihre Diagnose sofort, und „unerklärte Unfruchtbarkeit“ ist auch eine Diagnose.',
  'LH': 'LH',
  'AMH': 'AMH',
  'FSH': 'FSH',
  'TSH': 'TSH',
  'Žena': 'Frau',
  'Název': 'Bezeichnung',
  'Přidat': 'Hinzufügen',
  'Vyšetření': 'Untersuchungen',
  'Prolaktin': 'Prolaktin',
  'Progesteron': 'Progesteron',
  'Hysteroskopie': 'Hysteroskopie',
  'Estradiol (E2)': 'Estradiol (E2)',
  'co v seznamu není': 'was nicht in der Liste steht',
  'Ultrazvuk a děloha': 'Ultraschall und Gebärmutter',
  'Genetické vyšetření': 'Genetische Untersuchung',
  'Funkce štítné žlázy.': 'Schilddrüsenfunktion.',
  'Ultrazvuk malé pánve': 'Ultraschall des kleinen Beckens',
  'Onkologická cytologie': 'Zytologie (Krebsvorsorge)',
  'Další odborná vyšetření': 'Weitere Fachuntersuchungen',
  'Přidat vlastní vyšetření': 'Eigene Untersuchung hinzufügen',
  'Hormon druhé poloviny cyklu.': 'Das Hormon der zweiten Zyklushälfte.',
  'Sérologie (infekční markery)': 'Serologie (Infektionsmarker)',
  'Prohlídka vaječníků a dělohy.': 'Eine Darstellung von Eierstöcken und Gebärmutter.',
  'AFC. Počet antrálních folikulů': 'AFC. Zahl der Antralfollikel',
  'Prohlídka dutiny děložní kamerou.': 'Eine Kameraansicht der Gebärmutterhöhle.',
  'Karyotyp nebo vyšetření nosičství.': 'Karyotyp oder Trägertest.',
  'Standardní gynekologické vyšetření.': 'Eine übliche gynäkologische Untersuchung.',
  'Hormon spojený se spuštěním ovulace.': 'Das Hormon, das die Ovulation auslöst.',
  'Průchodnost vejcovodů (HSG / HyFoSy)': 'Eileiterdurchgängigkeit (HSG / HyFoSy)',
  'Orientačně popisuje ovariální rezervu.': 'Beschreibt die Eierstockreserve grob.',
  'Hormon, který pobízí folikuly k růstu.': 'Das Hormon, das die Follikel zum Wachsen antreibt.',
  'Zvýšená hodnota může ovlivnit ovulaci.': 'Ein erhöhter Wert kann die Ovulation beeinflussen.',
  'Ověří, jestli jsou vejcovody průchodné.': 'Prüft, ob die Eileiter durchgängig sind.',
  'Počítá se na ultrazvuku na začátku cyklu.': 'Wird im Ultraschall am Zyklusbeginn gezählt.',
  'Před zahájením léčby ji vyžadují kliniky.': 'Kliniken verlangen sie vor Behandlungsbeginn.',
  'Hlavní ženský hormon, sleduje se i během stimulace.':
    'Das wichtigste weibliche Hormon, wird auch während der Stimulation verfolgt.',
  'Žádné z těchhle vyšetření nemusí podstoupit každá žena.':
    'Keine dieser Untersuchungen muss jede Frau machen.',
  'Co je ve vašem případě potřeba, určuje lékař. Aplikace výsledky nevykládá. Jsou to vaše poznámky, ne diagnóza.':
    'Was in Ihrem Fall nötig ist, entscheidet Ihre Ärztin oder Ihr Arzt. Die App deutet keine Ergebnisse. Das sind Ihre Notizen, keine Diagnose.',
  'Co může být na cestě relevantní. Není to povinný seznam. Plán skládá lékař podle vaší anamnézy a každé ženě vyjde jinak.':
    'Was auf dem Weg relevant sein kann. Das ist keine Pflichtliste. Den Plan stellt Ihre Ärztin oder Ihr Arzt nach Ihrer Vorgeschichte zusammen, und er fällt bei jeder Frau anders aus.',
}
