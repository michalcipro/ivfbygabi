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

  // --- Podpůrná péče, Sledování a Zdraví -------------------------------------
  'Zapsat': 'Festhalten',
  'Masáže': 'Massage',
  'Psychika': 'Psyche',
  'Aplikace': 'Die App',
  'Homeopatie': 'Homöopathie',
  'Mindfulness': 'Achtsamkeit',
  'Akupunktura': 'Akupunktur',
  'Co mi pomáhá': 'Was mir hilft',
  'Fyzioterapie': 'Physiotherapie',
  'Reflexologie': 'Reflexzonenmassage',
  'Životní styl': 'Lebensstil',
  'Psychoterapie': 'Psychotherapie',
  'Omezené důkazy': 'Begrenzte Belege',
  'Doplňková péče': 'Ergänzende Angebote',
  'Doplňky stravy': 'Nahrungsergänzung',
  'Něco vlastního': 'Etwas Eigenes',
  'Dobře podložené': 'Gut belegt',
  'Dechová cvičení': 'Atemübungen',
  'Mojžíšova metoda': 'Die Mojžíšová-Methode',
  'Podpůrná skupina': 'Selbsthilfegruppe',
  'Práce se spánkem': 'Arbeit am Schlaf',
  'Pravidelný pohyb': 'Regelmäßige Bewegung',
  'Cílený odpočinek': 'Gezielte Erholung',
  'Moje podpůrná péče': 'Meine unterstützende Pflege',
  'Jóga a jemný pohyb': 'Yoga und sanfte Bewegung',
  'Relaxační techniky': 'Entspannungstechniken',
  'Nutriční poradenství': 'Ernährungsberatung',
  'Psychologická konzultace': 'Psychologische Beratung',
  'Tradiční čínská medicína': 'Traditionelle chinesische Medizin',
  'Fyzioterapie pánevního dna': 'Beckenboden-Physiotherapie',
  'Uvolnění svalového napětí.': 'Lösen von Muskelspannung.',
  'Nedostatek kvalitních důkazů': 'Zu wenig belastbare Belege',
  'Tlaková masáž vybraných zón.': 'Druckmassage bestimmter Zonen.',
  'Spánkový režim a jeho úprava.': 'Der Schlafrhythmus und seine Anpassung.',
  'Úprava jídelníčku s odborníkem.': 'Anpassung des Essplans mit einer Fachkraft.',
  'Bylinné směsi a další postupy TCM.': 'Kräutermischungen und weitere Verfahren der TCM.',
  'Jednorázová nebo krátkodobá podpora.': 'Einmalige oder kurzfristige Unterstützung.',
  'Vpichy tenkých jehel do vybraných bodů.': 'Feine Nadeln an ausgewählten Punkten.',
  'Vědomé zpomalení, ne jen „nic nedělat“.': 'Bewusstes Langsamerwerden, nicht nur „nichts tun“.',
  'Cvičební sestava pracující s pánví a páteří.':
    'Eine Übungsfolge, die mit Becken und Wirbelsäule arbeitet.',
  'Setkávání s ženami, které procházejí tímtéž.': 'Treffen mit Frauen, die dasselbe durchmachen.',
  'Práce s pozorností a s tím, co se honí hlavou.':
    'Arbeit mit der Aufmerksamkeit und mit dem, was im Kopf rast.',
  'Zpomalení dechu jako způsob, jak zklidnit tělo.':
    'Den Atem verlangsamen, um den Körper zu beruhigen.',
  'Práce s pohybovým aparátem, bolestí zad a pánve.':
    'Arbeit am Bewegungsapparat, an Rücken- und Beckenschmerzen.',
  'Zaměřená na svaly pánevního dna a jejich funkci.':
    'Konzentriert sich auf die Beckenbodenmuskulatur und ihre Funktion.',
  'Postupné uvolnění, vizualizace, řízená relaxace.':
    'Schrittweises Lösen, Visualisierung, geführte Entspannung.',
  'Odborná péče o psychiku v dlouhé a nejisté léčbě.':
    'Fachliche Betreuung der Psyche in einer langen und ungewissen Behandlung.',
  'Doplňková metoda bez doloženého mechanismu účinku.':
    'Eine ergänzende Methode ohne belegten Wirkmechanismus.',
  'Pohyb a dech v tempu, které se dá udržet i během léčby.':
    'Bewegung und Atem in einem Tempo, das auch während der Behandlung machbar ist.',
  'Během stimulace se intenzita upravuje podle pokynů kliniky.':
    'Während der Stimulation wird die Intensität nach den Anweisungen der Klinik angepasst.',
  'Nejsou automaticky vhodné pro každou. Proberte je s klinikou.':
    'Sie sind nicht automatisch für jede geeignet. Sprechen Sie darüber mit Ihrer Klinik.',
  'Studie existují, ale jsou malé, rozporuplné nebo nízké kvality.':
    'Studien gibt es, sie sind aber klein, widersprüchlich oder von geringer Qualität.',
  'Přínos pro to, co metoda slibuje, je doložený kvalitními studiemi.':
    'Der Nutzen für das, was die Methode verspricht, ist durch gute Studien belegt.',
  'Kvalitní studie chybí. Neznamená to, že metoda nefunguje. Znamená to, že to nevíme.':
    'Es fehlen gute Studien. Das heißt nicht, dass die Methode nicht wirkt. Es heißt, dass wir es nicht wissen.',
  'Vyberte si dole, co využíváte. Není to úkol. Je to místo, kde uvidíte, co vám za ty měsíce opravdu pomohlo.':
    'Wählen Sie unten aus, was Sie nutzen. Das ist keine Aufgabe. Es ist ein Ort, an dem Sie sehen, was Ihnen über die Monate wirklich geholfen hat.',
  'Aplikace **neslibuje, že cokoli z tohohle zvýší šanci na otěhotnění.** Péče o sebe má smysl sama o sobě. Doplňky stravy nejsou automaticky vhodné pro každou. Proberte je s klinikou, protože mohou zasahovat do léčby.':
    'Die App **verspricht nicht, dass irgendetwas davon die Chance auf eine Schwangerschaft erhöht.** Für sich selbst zu sorgen hat seinen eigenen Wert. Nahrungsergänzung ist nicht automatisch für jede geeignet. Sprechen Sie darüber mit Ihrer Klinik, denn sie kann in die Behandlung eingreifen.',
  'Co využíváte mimo kliniku a jak vám to sedí. U každé metody je poctivě uvedená síla důkazů, ne proto, aby vás od něčeho odradila, ale abyste věděla, do čeho jdete.':
    'Was Sie außerhalb der Klinik nutzen und wie es Ihnen passt. Bei jeder Methode steht ehrlich, wie stark die Belege sind, nicht um Sie von etwas abzuhalten, sondern damit Sie wissen, worauf Sie sich einlassen.',
  'Týden': 'Woche',
  'Hodnoty': 'Werte',
  'Posledních 7 dní': 'Letzte 7 Tage',
  'Co si aplikace všímá': 'Was die App bemerkt',
  'Žádá dnešek vs. máte na to': 'Was der Tag verlangt und was Sie dafür haben',
  '◍ příznaky · ✚ vpichy · ◉ hodnoty': '◍ Symptome · ✚ Spritzen · ◉ Werte',
  'Náročnost dne proti vaší rezervě za posledních # dní':
    'Die Anforderungen des Tages gegen Ihre Reserve in den letzten # Tagen',
  'Stimulace · # zapsaných dní': 'Stimulation · # erfasste Tage',
  'Modrá čára se objeví, jakmile budete mít zapsané aspoň tři dny. Zatím máte # zapsaných dní.':
    'Die blaue Linie erscheint, sobald Sie mindestens drei Tage erfasst haben. Bisher haben Sie # Tage erfasst.',
  'Až budete mít zapsaných aspoň deset dní, aplikace si začne všímat vzorců, třeba jestli jsou pro vás horší dny zákroků, nebo ty před nimi.':
    'Sobald Sie mindestens zehn Tage erfasst haben, beginnt die App Muster zu bemerken, zum Beispiel ob die Tage der Eingriffe für Sie schlimmer sind oder die Tage davor.',
  'Parametr': 'Parameter',
  'např. 1,2': 'z. B. 1,2',
  'Vaše čísla': 'Ihre Zahlen',
  'Datum odběru': 'Datum der Entnahme',
  'Vložit zprávu': 'Bericht einfügen',
  'Přidat hodnotu': 'Wert hinzufügen',
  'Uložit hodnotu': 'Wert speichern',
  'Zatím žádné hodnoty': 'Noch keine Werte',
  'Co má smysl sledovat ve vaší fázi': 'Was sich in Ihrer Phase zu verfolgen lohnt',
  'Přidejte hodnotu a uvidíte nejen graf, ale i to, co ten parametr v těle dělá a co se s ním dá dělat.':
    'Fügen Sie einen Wert hinzu, und Sie sehen nicht nur ein Diagramm, sondern auch, was dieser Parameter im Körper tut und was man damit machen kann.',
  'Můžete je zadat ručně výše, nebo vložit text lékařské zprávy v Dokumentech. Hodnoty z něj vytáhneme samy.':
    'Sie können sie oben von Hand eintragen oder den Text eines Arztberichts unter Dokumente einfügen. Die Werte holen wir selbst heraus.',
  'Odběr hCG (IU/l)': 'hCG-Bestimmung (IU/l)',
  'Morfologie spermií (%)': 'Spermienmorphologie (%)',
  'Pohyblivost spermií (%)': 'Spermienbeweglichkeit (%)',
  'Koncentrace spermií (mil/ml)': 'Spermienkonzentration (Mio./ml)',
  'Fragmentace DNA spermií (DFI) (%)': 'DNA-Fragmentierung der Spermien (DFI) (%)',
  'Progesteron (nmol/l)': 'Progesteron (nmol/l)',
  'Testosteron (nmol/l)': 'Testosteron (nmol/l)',
  'Prolaktin (mIU/l)': 'Prolaktin (mIU/l)',

  // --- Otázky pro lékaře -----------------------------------------------------
  'Čeká': 'Offen',
  'čeká': 'offen',
  'Jiné': 'Sonstiges',
  'Nízká': 'Niedrig',
  'Archiv': 'Archiv',
  'archiv': 'Archiv',
  'Vysoká': 'Hoch',
  'Zákrok': 'Der Eingriff',
  'Peníze': 'Geld',
  'Střední': 'Mittel',
  'Protokol': 'Protokoll',
  'Vyřešeno': 'Geklärt',
  'vyřešeno': 'geklärt',
  'Výsledky': 'Ergebnisse',
  'Na závěr': 'Zum Schluss',
  'Po ztrátě': 'Nach einem Verlust',
  'Nová otázka': 'Neue Frage',
  'Bez termínu': 'Ohne Termin',
  'Než začneme': 'Bevor wir anfangen',
  'Pro ordinaci': 'Für die Praxis',
  'Čeho se týká': 'Worum es geht',
  'Čekání a hCG': 'Warten und hCG',
  'Přidat otázku': 'Frage hinzufügen',
  'Když to nevyšlo': 'Wenn es nicht geklappt hat',
  'Vždycky se hodí': 'Immer gut zu fragen',
  'Zatím bez zápisů': 'Noch keine Einträge',
  'Ke které kontrole': 'Zu welcher Kontrolle',
  'Jak je to důležité': 'Wie wichtig es ist',
  'Oplodnění a embrya': 'Befruchtung und Embryonen',
  'Zkopírovat přehled': 'Übersicht kopieren',
  'Napsat první otázku': 'Erste Frage schreiben',
  'Návrhy z vašich dat': 'Vorschläge aus Ihren Daten',
  'Na co se ženy ptají': 'Was Frauen fragen',
  'Genetické testování': 'Genetische Tests',
  'Protokol a stimulace': 'Protokoll und Stimulation',
  'Přehled pro kontrolu': 'Übersicht für die Kontrolle',
  'přidejte do kalendáře': 'fügen Sie ihn dem Kalender hinzu',
  'Co je teď dalším krokem?': 'Was ist jetzt der nächste Schritt?',
  'Co se stalo a víme, proč?': 'Was ist passiert, und wissen wir, warum?',
  'Zatím tu žádná otázka není': 'Hier ist noch keine Frage',
  'Co je teď dalším krokem a kdy?': 'Was ist jetzt der nächste Schritt, und wann?',
  'Podle čeho se bude dávka měnit?': 'Wonach wird die Dosis verändert?',
  'Proč se embryo přestalo vyvíjet?': 'Warum hat sich das Embryo nicht weiterentwickelt?',
  'Kdy přesně mám jít na odběr hCG?': 'Wann genau soll ich zur hCG-Bestimmung kommen?',
  'Domácí testy. Mám je vůbec dělat?': 'Heimtests. Soll ich sie überhaupt machen?',
  'Kdy se ozvete vy a kdy mám volat já?': 'Wann melden Sie sich, und wann soll ich anrufen?',
  'Do kdy mám brát podporu luteální fáze?':
    'Wie lange soll ich die Unterstützung der Lutealphase nehmen?',
  'Kolik embryí biopsii obvykle nepřežije?':
    'Wie viele Embryonen überleben die Biopsie üblicherweise nicht?',
  'Co budeme dělat s mozaikovým výsledkem?': 'Was machen wir mit einem Mosaikbefund?',
  'Můžu dostat kopii zprávy nebo výsledků?':
    'Kann ich eine Kopie des Berichts oder der Ergebnisse bekommen?',
  'Jak dlouho se budou sledovat hodnoty hCG?': 'Wie lange werden die hCG-Werte verfolgt?',
  'Kdy bude druhý odběr a co budete sledovat?':
    'Wann ist die zweite Bestimmung, und worauf achten Sie?',
  'Můžete mi doporučit psychologickou podporu?':
    'Können Sie mir psychologische Unterstützung empfehlen?',
  'Proč jste zvolil tenhle stimulační protokol?':
    'Warum haben Sie dieses Stimulationsprotokoll gewählt?',
  'Jaké mám riziko OHSS a podle čeho ho poznám?':
    'Wie hoch ist mein OHSS-Risiko, und woran erkenne ich es?',
  'Na jaké příznaky po odběru si mám dát pozor?':
    'Auf welche Symptome soll ich nach der Entnahme achten?',
  'Co všechno hradí pojišťovna a co se doplácí?':
    'Was übernimmt die Versicherung, und was zahle ich selbst?',
  'Co konkrétně test ukáže a co naopak neukáže?':
    'Was genau zeigt der Test, und was zeigt er nicht?',
  'Co byste v dalším cyklu udělal jinak a proč?':
    'Was würden Sie im nächsten Zyklus anders machen, und warum?',
  'Kolik embryí se vyvíjí a v jakém jsou stadiu?':
    'Wie viele Embryonen entwickeln sich, und in welchem Stadium sind sie?',
  'Kolik cyklů má u nás podle vás smysl zvažovat?':
    'Wie viele Zyklen halten Sie in unserem Fall für sinnvoll?',
  'Co může být důvodem opakovaně negativního hCG?':
    'Was kann hinter einem wiederholt negativen hCG stecken?',
  'Má smysl další kryotransfer, nebo nový cyklus?':
    'Ist ein weiterer Kryotransfer sinnvoll oder ein neuer Zyklus?',
  'Má smysl něco vyšetřit navíc, než půjdeme dál?':
    'Lohnt es sich, noch etwas zu untersuchen, bevor wir weitergehen?',
  'Proč jsme zvolili klasické IVF, nebo proč ICSI?':
    'Warum haben wir die klassische IVF gewählt, oder warum ICSI?',
  'Do kterého dne budete embrya kultivovat a proč?':
    'Bis zu welchem Tag kultivieren Sie die Embryonen, und warum?',
  'Jak embrya hodnotíte a co to hodnocení znamená?':
    'Wie bewerten Sie die Embryonen, und was bedeutet diese Bewertung?',
  'Kolik embryí se dá zamrazit a jak dlouho vydrží?':
    'Wie viele Embryonen können eingefroren werden, und wie lange halten sie?',
  'Kolik embryí budeme přenášet a proč právě tolik?':
    'Wie viele Embryonen übertragen wir, und warum gerade so viele?',
  'Jakou hodnotu hCG budete považovat za pozitivní?': 'Welchen hCG-Wert werten Sie als positiv?',
  'Jaká je moje sliznice a co to znamená pro termín?':
    'Wie ist meine Schleimhaut, und was bedeutet das für den Termin?',
  'Dá se z tohohle transferu něco vyčíst pro příště?':
    'Lässt sich aus diesem Transfer etwas für das nächste Mal ablesen?',
  'Jaké léky budu píchat, v kolik hodin a jak dlouho?':
    'Welche Medikamente spritze ich, zu welcher Uhrzeit und wie lange?',
  'Můžu během stimulace sportovat, pracovat, cestovat?':
    'Kann ich während der Stimulation Sport machen, arbeiten, reisen?',
  'Kdy bude první ultrazvuk a co na něm budete hledat?':
    'Wann ist der erste Ultraschall, und wonach suchen Sie dabei?',
  'Proč se transfer zrušil a co to znamená pro embrya?':
    'Warum wurde der Transfer abgesagt, und was bedeutet das für die Embryonen?',
  'Jak dlouhá bývá rekonvalescence a kdy můžu do práce?':
    'Wie lange dauert die Erholung üblicherweise, und wann kann ich wieder arbeiten?',
  'Co znamená krvácení v tomhle období a kdy mám volat?':
    'Was bedeutet eine Blutung in dieser Zeit, und wann soll ich anrufen?',
  'Jak bude probíhat anestezie a co si mám vzít s sebou?':
    'Wie läuft die Narkose ab, und was soll ich mitbringen?',
  'Kolik folikulů zatím vidíte a co to znamená pro odběr?':
    'Wie viele Follikel sehen Sie bisher, und was bedeutet das für die Entnahme?',
  'Co mám dělat a co naopak nedělat v týdnu po transferu?':
    'Was soll ich in der Woche nach dem Transfer tun und was lassen?',
  'Co dělat, když se o hodinu opozdím nebo dávku vynechám?':
    'Was mache ich, wenn ich eine Stunde zu spät bin oder eine Dosis vergesse?',
  'Co ve výsledcích ukazuje na příčinu a co zůstává nejasné?':
    'Was in den Ergebnissen deutet auf eine Ursache hin, und was bleibt unklar?',
  'Kolik vajíček bylo zralých a kolik se normálně oplodnilo?':
    'Wie viele Eizellen waren reif, und wie viele wurden normal befruchtet?',
  'Jak dlouhá bude rekonvalescence a na co si mám dát pozor?':
    'Wie lange dauert die Erholung, und worauf soll ich achten?',
  'Jak často budu chodit na kontroly a co se na nich sleduje?':
    'Wie oft komme ich zur Kontrolle, und was wird dabei überprüft?',
  'Jak bude probíhat příprava sliznice a jaké léky budu brát?':
    'Wie wird die Schleimhaut vorbereitet, und welche Medikamente nehme ich?',
  'Je v našem případě genetické testování embryí opodstatněné?':
    'Ist ein genetischer Test der Embryonen in unserem Fall begründet?',
  'Proč doporučujete čerstvý transfer, nebo proč kryotransfer?':
    'Warum empfehlen Sie einen Frischtransfer, oder warum einen Kryotransfer?',
  'Proč jdeme právě na IVF a jaké jiné možnosti jsme zvažovali?':
    'Warum gehen wir gerade zur IVF, und welche anderen Möglichkeiten haben wir erwogen?',
  'Která vyšetření jsou v mém případě potřeba a proč zrovna ta?':
    'Welche Untersuchungen sind in meinem Fall nötig, und warum gerade diese?',
  'Jak dlouho se čeká na výsledek a co se s embryi děje mezitím?':
    'Wie lange wartet man auf das Ergebnis, und was passiert mit den Embryonen in der Zwischenzeit?',
  'Doporučujete nějaká další vyšetření? Co konkrétně by změnila?':
    'Empfehlen Sie weitere Untersuchungen? Was genau würden sie ändern?',
  'Kdy bych mohla znovu, kdybych chtěla. A kdy je to naopak brzo?':
    'Wann könnte ich wieder, wenn ich wollte. Und wann ist es zu früh?',
  'Třeba: Proč jsme zvedli dávku a jak dlouho v ní mám pokračovat?':
    'Zum Beispiel: Warum haben wir die Dosis erhöht, und wie lange soll ich dabei bleiben?',
  'Jak se u vás dozvím výsledky. Telefonem, v aplikaci, na kontrole?':
    'Wie erfahre ich bei Ihnen die Ergebnisse. Telefonisch, in einer App, bei der Kontrolle?',
  'V kolik přesně mám píchnout trigger a co dělat, kdybych se minula?':
    'Um wie viel Uhr genau soll ich den Trigger spritzen, und was mache ich, wenn ich ihn verpasse?',
  'Kolik to stojí a co se stane, když nezbyde žádné testované embryo?':
    'Was kostet es, und was passiert, wenn kein getestetes Embryo übrig bleibt?',
  'Za tohle období nemáte zapsané nic, z čeho by se dal souhrn složit.':
    'Für diesen Zeitraum haben Sie nichts erfasst, woraus sich eine Übersicht bilden ließe.',
  'Je něco, co byste na mém místě chtěl vědět a na co jsem se nezeptala?':
    'Gibt es etwas, das Sie an meiner Stelle wissen wollten und wonach ich nicht gefragt habe?',
  'Kdy se dozvím, kolik vajíček bylo získáno a kolik z nich bylo zralých?':
    'Wann erfahre ich, wie viele Eizellen gewonnen wurden und wie viele davon reif waren?',
  'Kdo bude náš ošetřující lékař a s kým budu mluvit, když se něco stane?':
    'Wer ist unsere behandelnde Ärztin oder unser behandelnder Arzt, und mit wem spreche ich, wenn etwas passiert?',
  'Kdy je podle vás na místě zvážit jiné řešení. Dárcovství, nebo skončit?':
    'Wann halten Sie es für richtig, einen anderen Weg zu erwägen. Eine Spende oder aufhören?',
  'Čas v ordinaci uteče rychle. Co si zapíšete tady, přečtete tam z telefonu.':
    'Die Zeit in der Praxis vergeht schnell. Was Sie hier aufschreiben, lesen Sie dort vom Handy ab.',
  'Napište ji tak, jak byste ji řekla nahlas. V ordinaci se pak jenom přečte.':
    'Schreiben Sie sie so, wie Sie sie laut sagen würden. In der Praxis lesen Sie sie dann nur vor.',
  'Používáme nějakou doplňkovou metodu, a co konkrétně má v mém případě řešit?':
    'Nutzen wir eine Zusatzmethode, und was genau soll sie in meinem Fall bewirken?',
  'Na co si mám do příště dávat pozor a kdy je důvod volat mimo ordinační hodiny?':
    'Worauf soll ich bis zum nächsten Mal achten, und wann gibt es Grund, außerhalb der Sprechzeiten anzurufen?',
  'Tohle je přehled toho, co máte zapsané. Není to lékařské hodnocení ani výklad výsledků. Ty patří vašemu lékaři.':
    'Das ist eine Übersicht dessen, was Sie erfasst haben. Es ist keine medizinische Beurteilung und keine Deutung von Ergebnissen. Die gehören Ihrer Ärztin oder Ihrem Arzt.',
  'Stačí málo: zapsat léky, ultrazvuk nebo pár příznaků. A před další kontrolou už tu bude přehled, se kterým se dá do ordinace jít.':
    'Es braucht wenig: Medikamente, einen Ultraschall oder ein paar Symptome erfassen. Und vor der nächsten Kontrolle steht hier eine Übersicht, mit der Sie in die Praxis gehen können.',
  'Otázky ani odpovědi aplikace nijak nevyhodnocuje. Jsou to vaše poznámky. Cokoli zdravotního patří vašemu lékaři a tenhle seznam ho nenahrazuje.':
    'Die App bewertet weder die Fragen noch die Antworten. Es sind Ihre Notizen. Alles Medizinische gehört Ihrer Ärztin oder Ihrem Arzt, und diese Liste ersetzt sie nicht.',
  'V ordinaci vypadne z hlavy všechno, co jste si chtěla říct. A doma to zase naskočí. Proto se otázky zapisují průběžně: co vás napadne teď, přečtete tam z telefonu.':
    'In der Praxis fällt alles aus dem Kopf, was Sie sagen wollten. Und zu Hause kommt es wieder. Deshalb werden Fragen laufend notiert: Was Ihnen jetzt einfällt, lesen Sie dort vom Handy ab.',
  'Hotové otázky k odkliknutí. Nejsou to rady, co si máte přát. Jsou to věty, které se v ordinaci hodí říct nahlas. Nahoře je to, co patří k vaší fázi.':
    'Fertige Fragen zum Antippen. Das sind keine Ratschläge, was Sie sich wünschen sollen. Es sind Sätze, die sich in der Praxis laut aussprechen lassen. Oben steht, was zu Ihrer Phase gehört.',
  'Zatím nemáte v kalendáři žádnou nadcházející kontrolu. Otázka počká bez termínu, nebo si termín':
    'Sie haben noch keine kommende Kontrolle im Kalender. Die Frage wartet ohne Termin, oder Sie',

  // --- věty s doplňovaným datem ----------------------------------------------
  'Přehled zapsaných údajů od {} do {}, {}.': 'Übersicht der erfassten Daten von {} bis {}, {}.',
  'Přehled zapsaných údajů od {} do {}, {}, {}.':
    'Übersicht der erfassten Daten von {} bis {}, {}, {}.',

  // --- časová spojení --------------------------------------------------------
  'dnes': 'heute',
  'zítra': 'morgen',
  'Zítra': 'Morgen',
  'Nejbližší milník:': 'Nächster Meilenstein:',
  'Nejbližší milník: {} {}.': 'Nächster Meilenstein: {} {}.',
  'nepřerušeně {}': '{} in Folge',
  'Odběr hCG dnes': 'hCG-Bestimmung heute',
  'Odběr hCG dnes.': 'hCG-Bestimmung heute.',
  'Odběr hCG {}': 'hCG-Bestimmung {}',
  'Odběr hCG {} (odhad)': 'hCG-Bestimmung {} (Schätzung)',
  'Transfer dnes': 'Transfer heute',
  'Transfer {}': 'Transfer {}',
  'Odběr dnes': 'Entnahme heute',
  'Odběr {}': 'Entnahme {}',
  'Odběr {}.': 'Entnahme {}.',
  'Do odběru hCG zbývá {}.': 'Noch {} bis zur hCG-Bestimmung.',
  'Transfer {} od dneška.': 'Transfer in {} ab heute.',
  'Odběr hCG je {}, {}.': 'Die hCG-Bestimmung ist {}, {}.',

  // --- Historie a prázdný cyklus ---------------------------------------------
  'Sestavené z toho, co máte zapsané za {}. Nejsou to rady, jen věty, které se hodí říct nahlas.':
    'Zusammengestellt aus dem, was Sie in {} erfasst haben. Das sind keine Ratschläge, nur Sätze, die sich laut aussprechen lassen.',
  'Celá cesta na jednom místě.': 'Der ganze Weg an einem Ort.',
  'Až založíte první cyklus, objeví se tu shrnutí každého z nich. Od počtu vajíček po výsledek posledního transferu.':
    'Sobald Sie den ersten Zyklus anlegen, erscheint hier eine Zusammenfassung von jedem. Von der Zahl der Eizellen bis zum Ergebnis des letzten Transfers.',
  'Zatím žádný cyklus': 'Noch kein Zyklus',
  'Až začne stimulace nebo příprava na transfer, založte si cyklus. Budete do něj zapisovat termíny, čísla z laboratoře, embrya i transfery.':
    'Wenn die Stimulation oder die Vorbereitung auf einen Transfer beginnt, legen Sie einen Zyklus an. Darin erfassen Sie Termine, Laborwerte, Embryonen und Transfers.',

  // --- Embrya, Transfery a Po transferu --------------------------------------
  'Karta pro každé embryo. Vývoj po dnech, genetika, kam nakonec šlo.':
    'Eine Karte für jedes Embryo. Entwicklung Tag für Tag, Genetik, wohin es am Ende ging.',
  'Zatím tu žádné embryo není': 'Hier ist noch kein Embryo',
  'Embrya se zapisují u konkrétního cyklu. Otevřete kartu cyklu a v sekci Embrya přidejte první.':
    'Embryonen werden zu einem bestimmten Zyklus erfasst. Öffnen Sie die Zykluskarte und fügen Sie im Abschnitt Embryonen das erste hinzu.',
  'Všechny transfery na jednom místě, napříč cykly.':
    'Alle Transfers an einem Ort, über alle Zyklen.',
  'Zatím tu žádný transfer není': 'Hier ist noch kein Transfer',
  'Transfery se zapisují u cyklu. V jednom cyklu jich může být víc. Čerstvý a po něm kryotransfery ze stejné zásoby embryí.':
    'Transfers werden zu einem Zyklus erfasst. Ein Zyklus kann mehrere enthalten. Einen Frischtransfer und danach Kryotransfers aus demselben Embryonenbestand.',
  'Den po dni od transferu až k odběru hCG.': 'Tag für Tag vom Transfer bis zur hCG-Bestimmung.',
  'Až budete mít transfer za sebou, zapište si ho do cyklu. Aplikace pak sama spočítá, kolikátý je den, co se v téhle fázi může dít a kolik zbývá do odběru hCG.':
    'Sobald ein Transfer hinter Ihnen liegt, erfassen Sie ihn im Zyklus. Die App rechnet dann selbst aus, der wievielte Tag es ist, was in dieser Phase passieren kann und wie lange es noch bis zur hCG-Bestimmung ist.',

  // --- Kalendář, léky a Zdravotní data ---------------------------------------
  'Od': 'Von',
  'Do': 'Bis',
  'Kdy': 'Wann',
  'Typ': 'Art',
  'Lék': 'Medikament',
  'Gel': 'Gel',
  'jiné': 'andere',
  'Odběr': 'Entnahme',
  'Porod': 'Geburt',
  'Forma': 'Form',
  'Sprej': 'Spray',
  'Dávka': 'Dosis',
  'čípek': 'Zäpfchen',
  'dávka': 'Dosis',
  'Obden': 'Jeden zweiten Tag',
  'kapsle': 'Kapsel',
  'Vlastní': 'Eigene',
  'Injekce': 'Spritze',
  'Náplast': 'Pflaster',
  'tableta': 'Tablette',
  'Co to je': 'Was es ist',
  'Kontrola': 'Kontrolle',
  'Očkování': 'Impfung',
  'Letrozol': 'Letrozol',
  'Klomifen': 'Clomifen',
  'Jednotka': 'Einheit',
  'Přípravek': 'Präparat',
  'Prednison': 'Prednison',
  'Opakování': 'Wiederholung',
  'Každý den': 'Jeden Tag',
  'např. 225': 'z. B. 225',
  'Přidat lék': 'Medikament hinzufügen',
  'Kortikoidy': 'Kortikosteroide',
  'Zatím žádné': 'Noch keine',
  'Antibiotika': 'Antibiotika',
  'Jednorázově': 'Einmalig',
  'např. 20:00': 'z. B. 20:00',
  'Levothyroxin': 'Levothyroxin',
  'např. Gonal-f': 'z. B. Gonal-f',
  'Termíny a léky': 'Termine und Medikamente',
  'Přidat událost': 'Termin hinzufügen',
  'Jiný přípravek': 'Anderes Präparat',
  'Kyselina listová': 'Folsäure',
  'Přidat do kalendáře': 'Zum Kalender hinzufügen',
  'Vyberte ze seznamu…': 'Aus der Liste wählen…',
  'Tableta nebo kapsle': 'Tablette oder Kapsel',
  'Přidat do protokolu': 'Zum Protokoll hinzufügen',
  'Zatím nic v kalendáři': 'Noch nichts im Kalender',
  'Estrofem, po transferu': 'Estrofem, nach dem Transfer',
  'Hormonální antikoncepce': 'Hormonelle Verhütung',
  'Progynova, po transferu': 'Progynova, nach dem Transfer',
  'co k tomu klinika řekla': 'was die Klinik dazu gesagt hat',
  'Decapeptyl, jako trigger': 'Decapeptyl, als Trigger',
  'Nízkomolekulární heparin': 'Niedermolekulares Heparin',
  'Estradiol, jiný přípravek': 'Estradiol, anderes Präparat',
  'Ganirelix, jiný přípravek': 'Ganirelix, anderes Präparat',
  'Diphereline, jako trigger': 'Diphereline, als Trigger',
  'Kyselina acetylsalicylová': 'Acetylsalicylsäure',
  'Progesteron, jiný přípravek': 'Progesteron, anderes Präparat',
  'Čípek nebo vaginální tableta': 'Zäpfchen oder Vaginaltablette',
  'Například kontrola u lékařky': 'Zum Beispiel eine Kontrolle in der Praxis',
  'Podpora po transferu': 'Unterstützung nach dem Transfer',
  'Nepovinné, třeba čas nebo co si vzít':
    'Optional, zum Beispiel die Uhrzeit oder was mitzubringen ist',
  'Když v seznamu není, napište název rovnou do pole níž.':
    'Wenn es nicht in der Liste steht, tippen Sie den Namen direkt in das Feld unten.',
  'Přidejte si termín, nebo doplňte data v nastavení. Část událostí pak vznikne sama.':
    'Fügen Sie einen Termin hinzu oder ergänzen Sie Daten in den Einstellungen. Ein Teil der Termine entsteht dann von selbst.',
  'Co plyne z vašich dat, doplníme sami. Každou událost si můžete odškrtnout a připsat k ní, co na ní zaznělo.':
    'Was sich aus Ihren Daten ergibt, ergänzen wir selbst. Jeden Termin können Sie abhaken und notieren, was dort gesagt wurde.',
  'Tenhle seznam je jen číselník pro zápis, ne doporučení. Co, kolik a kdy budete brát, určuje výhradně vaše klinika. Aplikace nikdy nenavrhne dávku, změnu ani vysazení.':
    'Diese Liste ist nur eine Auswahl zum Erfassen, keine Empfehlung. Was, wie viel und wann Sie einnehmen, entscheidet allein Ihre Klinik. Die App schlägt niemals eine Dosis, eine Änderung oder ein Absetzen vor.',
  'Čas': 'Uhrzeit',
  'Datum': 'Datum',
  'Měření': 'Messungen',
  'Kam dál': 'Wie weiter',
  'Poznámka': 'Notiz',
  'např. 76': 'z. B. 76',
  'např. 72': 'z. B. 72',
  'Ultrazvuk': 'Ultraschall',
  'Laboratoř': 'Labor',
  'Váha (kg)': 'Gewicht (kg)',
  'nepovinné': 'optional',
  'např. 118': 'z. B. 118',
  'např. 7,5': 'z. B. 7,5',
  'např. 64,3': 'z. B. 64,3',
  'např. 2000': 'z. B. 2000',
  'Za den (ml)': 'Pro Tag (ml)',
  'např. 36,55': 'z. B. 36,55',
  'Teplota (°C)': 'Temperatur (°C)',
  'Hodin spánku': 'Stunden Schlaf',
  'Tep za minutu': 'Schläge pro Minute',
  'Zatím žádné měření': 'Noch keine Messungen',
  'Horní (systolický)': 'Oberer (systolisch)',
  'Dolní (diastolický)': 'Unterer (diastolisch)',
  'Zapsat první teplotu': 'Erste Temperatur erfassen',
  'Folikuly a sliznice tak, jak vám je řekl lékař':
    'Follikel und Schleimhaut genau so, wie es Ihnen gesagt wurde',
  'Klidový tep, ideálně vsedě a ve stejnou denní dobu.':
    'Ruhepuls, am besten sitzend und zur gleichen Tageszeit.',
  'Příznaky s intenzitou. Patří ke stejnému rozhovoru s lékařem':
    'Symptome mit Intensität. Sie gehören zum selben Gespräch in der Praxis',
  'Zatím žádný zápis. První přidáte ve formuláři nad tímhle řádkem.':
    'Noch keine Einträge. Den ersten fügen Sie im Formular über dieser Zeile hinzu.',
  'Hormony a odběry s grafem i vysvětlením, co parametr v těle dělá':
    'Hormone und Blutwerte mit Diagramm und einer Erklärung, was der Parameter im Körper tut',
  'Kolik hodin jste opravdu spala. Půlhodiny zapisujte s čárkou, třeba 7,5.':
    'Wie viele Stunden Sie wirklich geschlafen haben. Halbe Stunden mit Komma, zum Beispiel 7,5.',
  'Zapisuje se horní a dolní hodnota. Měří se vsedě, po pár minutách v klidu.':
    'Erfasst werden der obere und der untere Wert. Gemessen wird sitzend, nach einigen Minuten Ruhe.',
  'Kolik jste za den vypila, v mililitrech. Kolik pít vám řekne klinika, hlavně kolem odběru.':
    'Wie viel Sie am Tag getrunken haben, in Millilitern. Wie viel Sie trinken sollen, sagt Ihnen die Klinik, besonders um die Entnahme herum.',
  'Co si měříte doma. Zůstává to ve vašem zařízení a aplikace to nehodnotí, jen ukazuje vývoj.':
    'Was Sie zu Hause messen. Es bleibt auf Ihrem Gerät, und die App bewertet es nicht, sie zeigt nur den Verlauf.',
  'Měří se hned po probuzení, ještě před vstáním, každý den přibližně ve stejnou dobu a stejným teploměrem.':
    'Gemessen wird direkt nach dem Aufwachen, noch vor dem Aufstehen, jeden Tag etwa zur gleichen Zeit und mit demselben Thermometer.',
  'Ve stimulaci se váha může měnit ze dne na den. Hodnoty se nejlíp porovnávají, když se vážíte ráno a nalačno.':
    'Während der Stimulation kann sich das Gewicht von Tag zu Tag ändern. Die Werte lassen sich am besten vergleichen, wenn Sie sich morgens nüchtern wiegen.',
  'Křivku vám tu aplikace nevyhodnocuje a nehledá v ní ovulaci. Na to je potřeba znát celý kontext cyklu. Zápisy slouží vám a vašemu lékaři.':
    'Die App bewertet die Kurve hier nicht und sucht darin keine Ovulation. Dafür braucht es den ganzen Zyklusverlauf. Die Einträge sind für Sie und Ihre Ärztin oder Ihren Arzt.',
  'Nejsledovanější bývá bazální teplota. Formulář na ni najdete hned pod tímhle textem. Hodnoty z odběrů patří do Laboratoře, folikuly do Ultrazvuku.':
    'Am häufigsten verfolgt wird die Basaltemperatur. Das Formular dafür finden Sie direkt unter diesem Text. Blutwerte gehören zu Labor, Follikel zu Ultraschall.',
  'Aplikace hodnoty nehodnotí. Orientační rozmezí se liší podle laboratoře, dne cyklu, věku i diagnózy. Co konkrétní číslo znamená pro vás, řekne jedině váš lékař.':
    'Die App bewertet keine Werte. Referenzbereiche unterscheiden sich je nach Labor, Zyklustag, Alter und Diagnose. Was eine bestimmte Zahl für Sie bedeutet, kann nur Ihre Ärztin oder Ihr Arzt sagen.',
  '◈ Váha': '◈ Gewicht',
  '☾ Spánek': '☾ Schlaf',
  '◍ Krevní tlak': '◍ Blutdruck',
  '◇ Pitný režim': '◇ Trinkmenge',
  '# zapsaných údajů': '# erfasste Werte',
  '◉ Bazální teplota': '◉ Basaltemperatur',
  '♡ Tepová frekvence': '♡ Herzfrequenz',

  // --- Profil, rozcestník, hledání, knihovna, Co když a finance --------------
  'Dnešní dávky': 'Heutige Dosen',
  'Na dnešek nejsou žádné dávky': 'Für heute sind keine Dosen eingetragen',
  'Až si přidáte léky do protokolu, objeví se tady každý den samy. I s odškrtáváním.':
    'Sobald Sie Medikamente ins Protokoll eintragen, erscheinen sie hier jeden Tag von selbst. Mit Häkchen.',
  'Předplatné': 'Abonnement',
  'Moje dokumenty': 'Meine Unterlagen',
  'Všechno ostatní': 'Alles Weitere',
  'Více o aplikaci BlooMia': 'Mehr über BlooMia',
  'Proč má smysl zapisovat.': 'Warum das Erfassen sinnvoll ist.',
  'Průvodkyně vaší IVF cestou': 'Ihre Begleiterin auf dem IVF-Weg',
  'Rozcestník na zbytek aplikace': 'Ein Wegweiser zum Rest der App',
  'Jak funguje a jak ho spravovat': 'Wie es funktioniert und wie Sie es verwalten',
  'Co si k léčbě beru mimo kliniku': 'Was ich neben der Behandlung außerhalb der Klinik nutze',
  'Papíry z kliniky na jednom místě': 'Unterlagen aus der Klinik an einem Ort',
  'Co ukázat tomu, kdo je vedle vás': 'Was Sie der Person neben sich zeigen',
  'Fáze, situace, vzhled a vaše data': 'Phase, Situation, Aussehen und Ihre Daten',
  'Proč jdu na IVF. Může jich být víc': 'Warum ich zur IVF gehe. Es können mehrere Gründe sein',
  'Co se chci zeptat, než na to zapomenu': 'Was ich fragen will, bevor ich es vergesse',
  'Co může být relevantní a co už mám za sebou':
    'Was relevant sein kann und was ich schon hinter mir habe',
  'Ženy ve stejné fázi. Můžete zůstat anonymní':
    'Frauen in der gleichen Phase. Sie können anonym bleiben',
  'Ženy ve stejné fázi. Můžete zůstat anonymní.':
    'Frauen in der gleichen Phase. Sie können anonym bleiben.',
  'Proč BlooMia vznikla a co znamená její jméno':
    'Warum BlooMia entstanden ist und was der Name bedeutet',
  'Kolik cesta stála, co je zaplacené a co zbývá':
    'Was der Weg gekostet hat, was bezahlt ist und was bleibt',
  'Zpětná vazba, nápad, recenze nebo co vám chybí':
    'Rückmeldung, eine Idee, eine Bewertung oder was Ihnen fehlt',
  'Kontakty, telefon i to, kam volat mimo ordinační hodiny':
    'Kontakte, Telefonnummern und wohin Sie außerhalb der Sprechzeiten anrufen',
  'Všechna vaše data zůstávají ve vašem zařízení. Nic se nikam neodesílá a aplikace je nikomu nesdílí. Sdílet je s lékařem můžete jen vy.':
    'Alle Ihre Daten bleiben auf Ihrem Gerät. Nichts wird irgendwohin gesendet, und die App teilt sie mit niemandem. Nur Sie können sie mit Ihrer Ärztin oder Ihrem Arzt teilen.',
  'Nic se nikam neodesílá a nemusíte nic vyplňovat najednou. I jedno datum stačí na to, aby se obsah začal přizpůsobovat.':
    'Nichts wird irgendwohin gesendet, und Sie müssen nicht alles auf einmal ausfüllen. Schon ein Datum genügt, damit sich die Inhalte anpassen.',
  'Vznikla z vlastní zkušenosti, ne u počítače. Právě proto počítá i se dny, kdy to nevyjde, a s tím, že cesta nemusí být přímá.':
    'Sie ist aus eigener Erfahrung entstanden, nicht am Computer. Genau deshalb rechnet sie auch mit den Tagen, an denen es nicht klappt, und damit, dass der Weg nicht gerade sein muss.',
  'BlooMia je aplikace pro ženy, které procházejí léčbou neplodnosti. Není to obecná databáze článků. Drží pohromadě vaši konkrétní cestu: cykly, odběry, embrya, transfery, léky, výsledky, náklady i to, jak vám u toho je.':
    'BlooMia ist eine App für Frauen in einer Kinderwunschbehandlung. Sie ist keine allgemeine Artikelsammlung. Sie hält Ihren ganz eigenen Weg zusammen: Zyklen, Entnahmen, Embryonen, Transfers, Medikamente, Ergebnisse, Kosten und wie es Ihnen dabei geht.',
  'Z toho, co si zapíšete, aplikace pozná, kde právě jste: kolikátý je den po transferu, jak staré embryo se přenášelo, jestli výsledek už znáte. Podle toho vybírá, co vám ukáže dnes. Bez zápisů umí jen obecné rady, a těch je na internetu dost.':
    'Aus dem, was Sie erfassen, erkennt die App, wo Sie stehen: der wievielte Tag nach dem Transfer es ist, wie alt das übertragene Embryo war, ob Sie das Ergebnis schon kennen. Danach wählt sie aus, was sie Ihnen heute zeigt. Ohne Einträge kann sie nur allgemeine Ratschläge geben, und davon gibt es im Internet genug.',
  'Kalendář a léky': 'Kalender und Medikamente',
  'Proč vidím právě tohle': 'Warum ich genau das sehe',
  'Fáze, situace, vzhled a vaše data.': 'Phase, Situation, Aussehen und Ihre Daten.',
  'Chcete vidět, jak se obsah skládá?':
    'Möchten Sie sehen, wie die Inhalte zusammengestellt werden?',
  'Co předplatné zahrnuje a jak ho spravovat.':
    'Was das Abonnement umfasst und wie Sie es verwalten.',
  'Časová osa a dopisy. Jednou z toho může být kniha.':
    'Eine Zeitachse und Briefe. Daraus kann einmal ein Buch werden.',
  'Vaše hodnoty v čase. Graf ukazuje vývoj, ne diagnózu.':
    'Ihre Werte über die Zeit. Das Diagramm zeigt einen Verlauf, keine Diagnose.',
  'Vložte text lékařské zprávy a vytáhneme z něj hodnoty.':
    'Fügen Sie den Text eines Arztberichts ein, und wir holen die Werte heraus.',
  'Termíny a léky. Část se doplní automaticky z vaší fáze.':
    'Termine und Medikamente. Ein Teil wird automatisch aus Ihrer Phase ergänzt.',
  'Ať na nic nezapomenete. A odškrtnuté zůstane odškrtnuté.':
    'Damit Sie nichts vergessen. Und was abgehakt ist, bleibt abgehakt.',
  '# materiálů. Hledejte cokoliv.': '# Materialien. Suchen Sie, was Sie wollen.',
  'Všech # fází. Kde jste byla, kde jste a co přijde.':
    'Alle # Phasen. Wo Sie waren, wo Sie stehen und was kommt.',
  'Zkuste': 'Versuchen Sie',
  'Folikul': 'Follikel',
  'cvičení': 'Übungen',
  'doplňky': 'Ergänzungen',
  'partner': 'Partner',
  'Co hledáte?': 'Was suchen Sie?',
  'Najít v aplikaci': 'In der App finden',
  'Nenahrazuje lékaře': 'Ersetzt keine Ärztin oder keinen Arzt',
  'Napište slovo nebo otázku…': 'Geben Sie ein Wort oder eine Frage ein…',
  'Ukazuje jen to, co je v aplikaci.': 'Sie zeigt nur, was in der App ist.',
  'Stačí jedno slovo („OHSS“, „progesteron“, „hatching“) nebo celá otázka.':
    'Ein Wort genügt („OHSS“, „Progesteron“, „Hatching“) oder eine ganze Frage.',
  'Napište klíčové slovo nebo otázku. Prohledá se všechno, co v aplikaci je. Články, pojmy, rady, diagnózy, doplňky i hodnoty.':
    'Geben Sie ein Schlagwort oder eine Frage ein. Alles in der App wird durchsucht. Artikel, Begriffe, Hinweise, Diagnosen, Ergänzungen und Werte.',
  'Hledání **nechodí na internet a nic negeneruje.** Ukazuje jen to, co je v aplikaci. **Nenahrazuje lékaře**: o vaší léčbě rozhoduje váš tým na klinice.':
    'Die Suche **geht nicht ins Internet und generiert nichts.** Sie zeigt nur, was in der App ist. **Sie ersetzt keine Ärztin und keinen Arzt**: Über Ihre Behandlung entscheidet Ihr Team in der Klinik.',
  'Vše': 'Alle',
  'Všechno': 'Alles',
  'Celá knihovna': 'Die ganze Bibliothek',
  'Pro vaši fázi': 'Für Ihre Phase',
  'Seřazeno podle pořadí v knihovně': 'Nach der Reihenfolge in der Bibliothek sortiert',
  'Zkuste: hcg, blastocysta, OHSS, endometrium…':
    'Versuchen Sie: hcg, Blastozyste, OHSS, Endometrium…',
  'Zobrazeno prvních # z #. Zkuste hledání zúžit.':
    'Die ersten # von # werden gezeigt. Versuchen Sie, die Suche einzugrenzen.',
  '# materiálů a # pojmů. Hledá se v nadpisech i v textu.':
    '# Materialien und # Begriffe. Gesucht wird in Überschriften und im Text.',
  'Ať na nic nezapomenete': 'Damit Sie nichts vergessen',
  'Hledáte něco konkrétního?': 'Suchen Sie etwas Bestimmtes?',
  'Obsah poskládaný na dnešek': 'Inhalte für heute zusammengestellt',
  'Řady se skládají podle toho, kolikátý je den vaší cesty. U každé je napsáno, proč ji vidíte. A zítra budou jiné.':
    'Die Reihen richten sich danach, der wievielte Tag Ihres Weges es ist. Bei jeder steht, warum Sie sie sehen. Und morgen sind sie anders.',
  'Protože jste #. den stimulace': 'Weil Sie am #. Tag der Stimulation sind',
  'Prohledat celou knihovnu (# materiálů)': 'Die ganze Bibliothek durchsuchen (# Materialien)',
  'Odškrtnuté položky se pamatují. Řazeno podle toho, co je teď nejblíž.':
    'Abgehakte Punkte werden gespeichert. Sortiert nach dem, was jetzt am nächsten liegt.',
  'Texty jsou obecné. O vaší situaci rozhoduje vaše klinika. Aplikace ji nenahrazuje.':
    'Diese Texte sind allgemein. Über Ihre Situation entscheidet Ihre Klinik. Die App ersetzt sie nicht.',
  'Odpovědi na situace, které přijdou mimo ordinační hodiny. U každé je napsané, co bývá běžné, co probrat s klinikou a kdy volat hned.':
    'Antworten für Situationen, die außerhalb der Sprechzeiten auftreten. Bei jeder steht, was üblich ist, was Sie mit der Klinik besprechen sollten und wann Sie sofort anrufen.',
  'Při silné bolesti břicha, silném krvácení, dušnosti, horečce nebo kolapsu nečtěte. Volejte svou kliniku. Mimo její hodiny záchrannou službu na 155.':
    'Bei starken Bauchschmerzen, starker Blutung, Atemnot, Fieber oder Kollaps lesen Sie nicht. Rufen Sie Ihre Klinik an. Außerhalb ihrer Zeiten den Rettungsdienst unter 155.',
  'Cykly': 'Zyklen',
  'Kategorie': 'Kategorie',
  'Zatím bez záznamu': 'Noch nichts erfasst',
  'Přidat první výdaj': 'Ersten Posten hinzufügen',
  'Zatím tu žádný výdaj není': 'Hier ist noch kein Posten',
  'Kolik vás cesta zatím stála, kolik už je zaplaceno a co ještě čeká.':
    'Was der Weg Sie bisher gekostet hat, wie viel bereits bezahlt ist und was noch kommt.',
  'Ceny se mezi klinikami liší a mění se v čase. Aplikace žádnou cenu nenavrhuje ani neověřuje. Zapisujete to, co jste opravdu zaplatila.':
    'Die Preise unterscheiden sich zwischen Kliniken und ändern sich über die Zeit. Die App schlägt keinen Preis vor und prüft keinen. Sie erfassen, was Sie wirklich bezahlt haben.',
  'Zapisujte si, co za léčbu platíte. Jedna položka je jeden náklad a můžete k ní přidat tolik plateb, kolik jich bylo. Součty si aplikace spočítá sama.':
    'Erfassen Sie, was Sie für die Behandlung bezahlen. Ein Posten ist eine Kostenstelle, und Sie können ihm so viele Zahlungen hinzufügen, wie es gab. Die Summen rechnet die App selbst aus.',

  // --- chyba předplatného ----------------------------------------------------
  'Předplatné se nepodařilo aktivovat. Napište prosím na {}.':
    'Das Abonnement konnte nicht aktiviert werden. Bitte schreiben Sie an {}.',

  // --- Napište mi, Komunita a Partner ----------------------------------------
  'Téma': 'Thema',
  'Nápad': 'Eine Idee',
  'Zpráva': 'Nachricht',
  'E-mail': 'E-Mail',
  'Recenze': 'Eine Bewertung',
  'Odeslat': 'Senden',
  'Pochvala': 'Ein Lob',
  'Nepovinné': 'Optional',
  'Zpětná vazba': 'Rückmeldung',
  'Co vám chybí': 'Was Ihnen fehlt',
  'Co se odešle': 'Was gesendet wird',
  'Nic z deníku.': 'Nichts aus dem Tagebuch.',
  'Něco nefunguje': 'Etwas funktioniert nicht',
  'Co se vám líbí': 'Was Ihnen gefällt',
  'Co se neodešle': 'Was nicht gesendet wird',
  'Tenhle formulář': 'Dieses Formular',
  'Chci něco změnit': 'Ich möchte etwas ändern',
  'Co byste změnila': 'Was Sie ändern würden',
  'Nic z vaší léčby.': 'Nichts aus Ihrer Behandlung.',
  'Co mi v aplikaci chybí': 'Was mir in der App fehlt',
  'Kdybych měla odpovědět': 'Wenn ich antworten soll',
  'Jak se vám BlooMia používá': 'Wie Sie mit BlooMia zurechtkommen',
  'Gabriela mi může odpovědět': 'Gabriela darf mir antworten',
  'není místo na zdravotní dotazy': 'ist nicht der Ort für medizinische Fragen',
  'Žádné finance a žádné dokumenty.': 'Keine Kosten und keine Unterlagen.',
  'Napište cokoliv. Klidně jednu větu.': 'Schreiben Sie, was Sie wollen. Ein Satz genügt.',
  'Ani nálada, ani jedno slovo ze zápisů.': 'Weder die Stimmung noch ein Wort aus den Einträgen.',
  'Bez zaškrtnutí se váš e-mail neodesílá vůbec.':
    'Ohne Häkchen wird Ihre E-Mail überhaupt nicht gesendet.',
  'Jen to, co jste napsala do tohohle formuláře.':
    'Nur das, was Sie in dieses Formular geschrieben haben.',
  'Žádné cykly, embrya, transfery, hodnoty ani hCG.':
    'Keine Zyklen, Embryonen, Transfers, Werte oder hCG.',
  'Nepovinné. Když nevyplníte nic, odešle se jen zpráva výš.':
    'Optional. Wenn Sie nichts ausfüllen, wird nur die Nachricht oben gesendet.',
  'Jméno a e-mail, pokud jste je vyplnila a povolila odpověď.':
    'Name und E-Mail, wenn Sie sie ausgefüllt und eine Antwort erlaubt haben.',
  'Tenhle formulář **není místo na zdravotní dotazy**. S otázkami o léčbě, lécích a výsledcích se obracejte na svou kliniku. Gabriela není lékařka a nemůže je zodpovědět.':
    'Dieses Formular **ist nicht der Ort für medizinische Fragen**. Mit Fragen zu Behandlung, Medikamenten und Ergebnissen wenden Sie sich an Ihre Klinik. Gabriela ist keine Ärztin und kann sie nicht beantworten.',
  'Chybí vám v aplikaci BlooMia něco? Něco nefunguje? Nebo vás naopak něco potěšilo? Píše to Gabriela, ne robot, a čte to taky ona.':
    'Fehlt Ihnen etwas in BlooMia? Funktioniert etwas nicht? Oder hat Sie im Gegenteil etwas gefreut? Das schreibt Gabriela, kein Roboter, und sie liest es auch.',
  'Zpráva chodí na {}. Když aplikace nemůže odeslat sama, otevře váš poštovní program a zprávu vám předvyplní, ať se neztratí.':
    'Die Nachricht geht an {}. Wenn die App sie nicht selbst senden kann, öffnet sie Ihr E-Mail-Programm und füllt die Nachricht vor, damit sie nicht verloren geht.',
  'Skupiny': 'Gruppen',
  'pro vás': 'für Sie',
  'Nevyšlo to': 'Es hat nicht geklappt',
  'Všeobecný chat': 'Allgemeiner Chat',
  'Jsem po transferu': 'Ich bin nach dem Transfer',
  'Jsem v IVF procesu': 'Ich bin im IVF-Prozess',
  'Proč jsou jen čtyři': 'Warum es nur vier sind',
  'Skupiny zatím nejsou propojené:': 'Die Gruppen sind noch nicht verbunden:',
  'Doporučená podle vaší fáze je nahoře': 'Die für Ihre Phase empfohlene steht oben',
  'Všechno ostatní. Otázky, zkušenosti, tipy a běžný život, který během léčby jde dál.':
    'Alles Weitere. Fragen, Erfahrungen, Tipps und das normale Leben, das während der Behandlung weitergeht.',
  'Čtyři skupiny podle toho, kde v léčbě jste. Jedna se vám nabídne první, ale do všech smíte kdykoliv.':
    'Vier Gruppen, je nachdem, wo Sie in der Behandlung stehen. Eine wird Ihnen zuerst angeboten, aber Sie dürfen jederzeit in alle.',
  'Profil může být zcela anonymní. Komunita nikdy nevidí skutečné jméno ani zdravotní údaje. Přepnout to jde v nastavení.':
    'Ihr Profil kann völlig anonym sein. Die Community sieht niemals Ihren echten Namen oder Gesundheitsdaten. Umstellen können Sie das in den Einstellungen.',
  'Dny po ET nebo KET, čekání na hCG, příznaky, nervozita, testování. Nejdelší dva týdny, které se dají strávit ve společnosti.':
    'Die Tage nach ET oder Kryotransfer, Warten auf hCG, Symptome, Nervosität, Testen. Die längsten zwei Wochen, die man in Gesellschaft verbringen kann.',
  'Stimulace, kontroly, odběr, čekání na embrya, laboratoř, genetika, léky. Pro všechny, kdo jsou v cyklu a transfer je teprve před nimi.':
    'Stimulation, Kontrollen, Entnahme, Warten auf Embryonen, Labor, Genetik, Medikamente. Für alle, die im Zyklus sind und den Transfer noch vor sich haben.',
  'Negativní hCG, neúspěšný nebo zrušený transfer, biochemické těhotenství, ztráta, cyklus bez embrya. Bez rad a bez cizích dobrých zpráv.':
    'Negativer hCG-Wert, erfolgloser oder abgesagter Transfer, biochemische Schwangerschaft, Verlust, Zyklus ohne Embryo. Ohne Ratschläge und ohne die guten Nachrichten anderer.',
  'co napíšete, zůstane ve vašem zařízení a nikdo jiný to nevidí. Ostatní příspěvky jsou ukázkové.':
    'Was Sie schreiben, bleibt auf Ihrem Gerät, und niemand sonst sieht es. Die übrigen Beiträge sind Beispiele.',
  'Skupina po neúspěchu je oddělená schválně. Když se to nepovede, nemáte číst o cizím pozitivním hCG dřív, než si to sama vyberete.':
    'Die Gruppe nach einem Fehlschlag ist absichtlich getrennt. Wenn es nicht klappt, sollen Sie nicht von einem positiven hCG-Wert anderer lesen, bevor Sie es selbst wählen.',
  'Dřív se skupiny dělily podle fáze, měsíce transferu, diagnózy, kliniky i věku. Vycházelo jich přes deset a v každé by byl někdo sám. Čtyři jsou tak akorát.':
    'Früher wurden die Gruppen nach Phase, Transfermonat, Diagnose, Klinik und Alter aufgeteilt. Es kamen über zehn heraus, und in jeder wäre jemand allein. Vier sind genau richtig.',
  'Co pomáhá': 'Was hilft',
  'Z knihovny': 'Aus der Bibliothek',
  'Čemu se vyhnout': 'Was zu vermeiden ist',
  'Co právě prožívá': 'Was sie gerade durchmacht',
  ': a nikdy je neuvidí.': ': und wird sie niemals sehen.',
  'Ke čtení pro partnera': 'Lesestoff für den Partner',
  'Pro toho, kdo je vedle': 'Für die Person an Ihrer Seite',
  'Nálada zatím nezapsaná': 'Noch keine Stimmung erfasst',
  'Nevidí deník, dopisy ani zdravotní hodnoty':
    'Er sieht weder das Tagebuch noch die Briefe oder Gesundheitswerte',
  'Partner vidí fázi, průměrnou náladu a rady.':
    'Ihr Partner sieht die Phase, die durchschnittliche Stimmung und die Hinweise.',
  'Po odběru vajíček převezměte domácnost bez ptaní.':
    'Übernehmen Sie nach der Eizellentnahme den Haushalt, ohne zu fragen.',
  'Řekněte nahlas, že to zvládá. Ona to o sobě teď neví.':
    'Sagen Sie laut, dass sie es schafft. Sie selbst weiß das gerade nicht.',
  'Hlídejte čas dávek. Je to konkrétní pomoc, ne kontrola.':
    'Achten Sie auf die Uhrzeit der Dosen. Das ist konkrete Hilfe, keine Kontrolle.',
  'Naučte se píchat injekce. I když je odmítne, nabídněte to.':
    'Lernen Sie, die Spritzen zu setzen. Auch wenn sie ablehnt, bieten Sie es an.',
  'Neptejte se každý den „a co embrya“. Když bude co říct, řekne to.':
    'Fragen Sie nicht jeden Tag „und was ist mit den Embryonen“. Wenn es etwas zu sagen gibt, sagt sie es.',
  'Nekomentujte nálady jako „to jsou ty hormony“, i když to je pravda.':
    'Kommentieren Sie Stimmungen nicht mit „das sind die Hormone“, auch wenn es stimmt.',
  'Konkrétní rady místo „buď oporou“. Ukažte tuhle obrazovku partnerovi.':
    'Konkrete Hinweise statt „sei eine Stütze“. Zeigen Sie Ihrem Partner diese Seite.',
  'Hormonální stimulace je fyzicky i psychicky náročná. Nálady kolísají a není to její volba. Břicho může být nafouklé a citlivé, injekce se píchají každý den ve stejný čas.':
    'Die hormonelle Stimulation ist körperlich und seelisch anstrengend. Die Stimmung schwankt, und das ist nicht ihre Entscheidung. Der Bauch kann gebläht und empfindlich sein, die Spritzen werden jeden Tag zur gleichen Zeit gesetzt.',

  // --- Můj příběh a Členství -------------------------------------------------
  'Komu': 'An wen',
  'Sobě': 'An mich',
  'Text': 'Text',
  'Těžké': 'Schwer',
  'Dobré': 'Gut',
  'Nadpis': 'Titel',
  'Smíšené': 'Gemischt',
  '# záznam': '# Eintrag',
  '# záznamy': '# Einträge',
  '# záznamů': '# Einträge',
  'Partnerovi': 'An meinen Partner',
  'Co se stalo': 'Was passiert ist',
  'Jak to bylo': 'Wie es war',
  'Nezapisovat': 'Nicht erfassen',
  'Mému embryu': 'An mein Embryo',
  'Moje kronika': 'Meine Chronik',
  'Nejtěžší den': 'Der schwerste Tag',
  'z vašich dat': 'aus Ihren Daten',
  'Napsat dopis': 'Einen Brief schreiben',
  'Mému miminku': 'An mein Baby',
  'Uložit dopis': 'Brief speichern',
  'Přidat na osu': 'Zur Zeitachse hinzufügen',
  'Nezapomenutelné': 'Unvergesslich',
  'Přidat vzpomínku': 'Erinnerung hinzufügen',
  'Jak mi u toho bylo': 'Wie es mir dabei ging',
  'Moje cesta k miminku': 'Mein Weg zum Baby',
  'Tomu, kdo tu nezůstal': 'An den, der nicht geblieben ist',
  'Například: Ahoj, ty malá': 'Zum Beispiel: Hallo, du Kleine',
  'Například: první ultrazvuk': 'Zum Beispiel: der erste Ultraschall',
  'Pište, jak vám zobák narostl.': 'Schreiben Sie, wie es Ihnen in den Sinn kommt.',
  'Pár vět. Za rok si je nebudete pamatovat.':
    'Ein paar Sätze. In einem Jahr werden Sie sie nicht mehr wissen.',
  'Embryu, miminku, sobě, tomu, kdo tu nezůstal. Dopisy jsou soukromé. Nikdo jiný je nevidí.':
    'An ein Embryo, an ein Baby, an sich selbst, an den, der nicht geblieben ist. Die Briefe sind privat. Niemand sonst sieht sie.',
  'Chronologie celé cesty. Od prvního snažení po dnešek. Milníky léčby se doplňují samy, vzpomínky a fotky přidáváte vy. Jednou z toho může být kniha.':
    'Eine Chronologie des ganzen Weges. Vom ersten Versuch bis heute. Behandlungsmeilensteine ergänzen sich selbst, Erinnerungen und Fotos fügen Sie hinzu. Daraus kann einmal ein Buch werden.',
  'Neaktivní': 'Inaktiv',
  'Aktivní': 'Aktiv',
  'Co je v ceně': 'Was enthalten ist',
  'Proč jedna cena': 'Warum ein einziger Preis',
  ', i po skončení.': ', auch nach dem Ende.',
  'Aktivovat předplatné': 'Abonnement aktivieren',
  'Předplatné zatím nemáte.': 'Sie haben noch kein Abonnement.',
  'Předplatné běží.': 'Das Abonnement läuft.',
  'Zrušit to můžete kdykoliv.': 'Sie können jederzeit kündigen.',
  'Obnoví se {} a strhne se {} Kč. Zrušit to můžete kdykoliv do té doby.':
    'Es verlängert sich am {}, und {} CZK werden abgebucht. Bis dahin können Sie jederzeit kündigen.',
  '# Kč': '# CZK',
  '# Kč měsíčně': '# CZK pro Monat',
  'za měsíc · konečná cena, nejsem plátkyně DPH':
    'pro Monat · Endpreis, ich bin nicht umsatzsteuerpflichtig',
  'Dokumenty a fotky z kliniky ve vašem zařízení':
    'Unterlagen und Fotos aus der Klinik auf Ihrem Gerät',
  'Deník, kalendář, připomínky a otázky pro lékaře':
    'Tagebuch, Kalender, Erinnerungen und Fragen für die Praxis',
  'Celý odborný obsah. Články, checklisty, slovník, „Co když…“':
    'Alle Fachinhalte. Artikel, Checklisten, Glossar, „Was, wenn…“',
  'Moje IVF cykly: stimulace, odběr, embrya, transfery, výsledky':
    'Meine IVF-Zyklen: Stimulation, Entnahme, Embryonen, Transfers, Ergebnisse',
  'Karta pro každé embryo a pro každý transfer, bez omezení počtu':
    'Eine Karte für jedes Embryo und jeden Transfer, ohne Mengenbegrenzung',
  'Podpora ve všech výsledcích, nejen v tom, který skončí pozitivně':
    'Unterstützung bei jedem Ergebnis, nicht nur bei dem, das positiv endet',
  'Vaše záznamy zůstávají ve vašem zařízení vždycky': 'Ihre Einträge bleiben immer auf Ihrem Gerät',
  'Jedna cena za celou aplikaci. Neprodáváme jednotlivé články a neplatíte za „šťastný konec“. Obsah pro negativní hCG, zrušený transfer nebo ztrátu je v ceně stejně jako ten ostatní.':
    'Ein Preis für die ganze App. Wir verkaufen keine einzelnen Artikel, und Sie zahlen nicht für ein „Happy End“. Die Inhalte für einen negativen hCG-Wert, einen abgesagten Transfer oder einen Verlust sind genauso enthalten wie alles andere.',
  'Zrušit předplatné jde kdykoliv, jedním tlačítkem a bez udání důvodu. Zaplacené období doběhne do konce.':
    'Sie können das Abonnement jederzeit mit einer Schaltfläche und ohne Angabe von Gründen kündigen. Der bezahlte Zeitraum läuft bis zum Ende.',
  'Nikdo si tu nekupuje pozici a data se neprodávají. V aplikaci není reklama ani provize, takže nemá důvod vás někam tlačit.':
    'Hier kauft niemand eine Platzierung, und es werden keine Daten verkauft. In der App gibt es keine Werbung und keine Provision, also hat sie keinen Grund, Sie irgendwohin zu drängen.',
  'Kdyby se platilo za jednotlivé texty, aplikace by měla důvod psát jich co nejvíc a řadit dopředu ty, které se dobře prodávají. To by v léčbě dopadlo špatně. Předplatné znamená, že se vyplatí psát to, co se vás právě týká. A nic víc.':
    'Würde man einzelne Texte bezahlen, hätte die App einen Grund, möglichst viele zu schreiben und die gut verkäuflichen nach vorn zu stellen. In einer Behandlung würde das schlecht ausgehen. Ein Abonnement bedeutet, dass es sich lohnt zu schreiben, was Sie gerade betrifft. Und nichts weiter.',

  // --- poslední skládané věty ------------------------------------------------
  '{}. Všechno ostatní, co aplikace umí. A u každé položky je napsané, k čemu je.':
    '{}. Alles Weitere, was die App kann. Und bei jedem Punkt steht, wofür er gut ist.',
  '{}. Všechno, co je o vás. A co si aplikace pamatuje.':
    '{}. Alles, was über Sie ist. Und was sich die App merkt.',
  'Vystupujete jako {}': 'Sie erscheinen als {}',
  'Anonymně · {}': 'Anonym · {}',
  'Dnes je {}': 'Heute ist {}',
  'kdy volat lékaře': 'wann die Praxis anrufen',
  'Co ukázat tomu, kdo je vedle vás. Deník zůstává soukromý.':
    'Was Sie der Person an Ihrer Seite zeigen. Das Tagebuch bleibt privat.',
}
