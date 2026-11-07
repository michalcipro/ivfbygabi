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
}
