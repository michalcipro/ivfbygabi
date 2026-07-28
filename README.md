# IVF by Gabi

Prémiová česká platforma pro ženy na cestě za dítětem — od prvního rozhodnutí, přes
diagnostiku, IVF a případné ztráty, přes těhotenství a porod (včetně předčasného a NICU),
až po první rok dítěte.

Není to aplikace na zapisování cyklu. Je to digitální průvodkyně, která **každý den
sestaví jinou domovskou stránku** podle toho, kolikátý je den uživatelčiny cesty.

---

## Rychlý start

```bash
npm install
npm run seed     # vytvoří ukázkový účet demo@ivfbygabi.cz / demo1234
npm run dev      # http://localhost:3000
```

Aplikace funguje i **bez klíče k Anthropic API** — AI Gabi se v tom případě přepne
do režimu vyhledávání nad knihovnou obsahu. S klíčem odpovídá v plném kontextu cesty:

```bash
export ANTHROPIC_API_KEY=sk-ant-...
```

| Proměnná | Význam | Výchozí |
|---|---|---|
| `ANTHROPIC_API_KEY` | Zapne AI Gabi | — (offline režim) |
| `GABI_MODEL` | Model pro Gabi | `claude-opus-5` |
| `GABI_DATA_DIR` | Kam se ukládá SQLite databáze | `./data` |

```bash
npm run typecheck   # tsc --noEmit
npm test            # testy doménového jádra (57 testů)
npm run build       # produkční build
```

---

## Jak to funguje

### 1. Doménové jádro — `src/lib/domain/`

Všechno ostatní čte z jednoho objektu: `resolveJourney(profile, today)`.

```ts
const state = resolveJourney(profile)
state.phase          // 'two_week_wait'
state.dayLabel       // 'Dnes je 6. den po transferu'
state.gestationLabel // '24+3' když je uživatelka těhotná
state.usesCorrectedAge // true u nedonošeného dítěte
state.nextMilestone  // { label: 'Beta HCG', inDays: 5 }
```

- **`phases.ts`** — 33 fází života, od „přemýšlíme o dítěti“ po batolecí období.
  Každá má kotvu (ze kterého data se počítá den), typickou délku a emoční tón.
- **`journey.ts`** — `inferPhase()` odvodí fázi z dat profilu, i když si ji uživatelka
  nezvolila nebo mezitím postoupila. Řeší gestační stáří ze tří možných zdrojů
  (termín → poslední menstruace → transfer + den kultivace embrya) a **korigovaný věk**
  u nedonošených dětí.
- **`dates.ts`** — počítání v kalendářních dnech (nikdy v milisekundách),
  české skloňování a deterministický PRNG.

**Modifikátory** (`preterm`, `csection`, `twins`, `breastfeeding`, `after_loss`…) fázi
nemění, ale mění obsah v ní. Proto se šestinedělí po císaři čte jinak než po přirozeném
porodu, aniž by musela existovat samostatná fáze.

### 2. Doporučovací systém — `src/lib/content/recommend.ts`

„IVF Netflix“. Skóre položky = fáze × den ve fázi × časové okno × modifikátory ×
naučená témata × novost × kurátorský boost.

Dvě vlastnosti, na kterých stojí celý zážitek:

- **V rámci jednoho dne je pořadí stabilní.** Zavřít a otevřít aplikaci obsah nepřehází.
- **Mezi dny se mění.** Jitter je odvozený z data, takže zítra je domovská stránka jiná.

`buildRails()` skládá řady s vlastním důvodem („Protože jste 8 dní po transferu“)
a hlídá, aby se stejná položka neobjevila ve dvou řadách.

### 3. Obsah — `src/lib/content/packs/`

Balíky podle etapy cesty, každý typovaný proti `ContentPack`. Registr v `index.ts`
je slepí, odfiltruje duplicitní ID a vystaví vyhledávání.

Dva druhy obsahu:

- **`ContentItem`** — články, videa, meditace, checklisty, příběhy, kurzy, kvízy.
- **`DailyCard`** — karta dne. Přesná shoda na den (`day: 6`) vyhrává nad rozsahem,
  cílená na modifikátor vyhrává nad obecnou. Tohle je motor „aplikace žije se mnou“.

### 4. AI Gabi — `src/lib/ai/gabi.ts`

Není to obecný chatbot. Do systémového promptu jde celý stav cesty, poslední zápisy
z deníku a zadané laboratorní hodnoty; do kontextu se přidá relevantní obsah z knihovny.

Tři pojistky:

1. **Persona zakazuje** diagnózu, dávkování léků a sliby výsledku — a jmenovitě
   i toxickou pozitivitu („jen se uvolněte“).
2. **Varovné příznaky** (silné krvácení, OHSS, horečka, myšlenky na ublížení sobě)
   se řeší jako první věta odpovědi, ne až v závěru.
3. **Offline fallback** — bez klíče, při chybě API i při odmítnutí modelem
   (`stop_reason: 'refusal'`) odpoví deterministicky z knihovny. Uživatelka nikdy
   nedostane prázdnou obrazovku.

Model: `claude-opus-5` s adaptivním myšlením a serverovým fallbackem
(`fallbacks: 'default'`) — když bezpečnostní klasifikátor dotaz odmítne, odpoví
záložní model místo chybové hlášky.

### 5. Zdravotní data — `src/lib/health/`

- **`lab-params.ts`** — katalog parametrů (AMH, FSH, beta HCG, spermiogram…)
  s lidským vysvětlením a orientačním rozmezím.
- **`parse-report.ts`** — deterministický parser textu lékařské zprávy. Najde dvojice
  „parametr → hodnota“, rozpozná datum v českých i ISO formátech a odhadne kategorii.
  **Nikdy nehodnotí, jestli je výsledek dobrý nebo špatný** — jen zpřehledňuje.

---

## Struktura

```
src/
  app/
    (auth)/                 přihlášení, registrace
    (app)/                  přihlášená část
      dnes/                 domovská stránka — mění se každý den
      objevit/              IVF Netflix
      pruvodce/[phase]/     průvodce 33 fázemi
      knihovna/[id]/        knihovna + detail (checklisty, kvízy)
      denik/                deník emocí, symptomů, vitálních hodnot
      gabi/                 AI průvodkyně
      kalendar/             události a léky, částečně automatické
      checklisty/           přehled postupu
      komunita/[slug]/      skupiny podle příběhu, ne podle náhody
      pribeh/kniha/         rodinná kronika + tisknutelná kniha
      zdravi/               grafy laboratorních hodnot a měření
      dokumenty/            nahrání zprávy → rozpoznání hodnot
      obchod/               marketplace řazený podle fáze
      partner/              partner mode
      nastaveni/            profil, členství, soukromí
    actions/                server actions (validace přes zod)
    onboarding/  predplatne/  cenik/
  components/               design systém, karty, grafy (SVG bez knihoven)
  lib/
    domain/   content/   health/   ai/   db/
tests/                      testy doménového jádra
```

---

## Rozhodnutí, která stojí za vysvětlení

**SQLite místo hostované databáze.** Zdravotní data nemají putovat po cizích službách
kvůli pohodlí vývojáře. `better-sqlite3` je navíc synchronní, takže server komponenty
čtou přímo bez asynchronní obálky kolem každého dotazu.

**Vlastní session auth.** Registrace, scrypt hash, cookie. Žádný externí poskytovatel
identity, který by viděl, kdo je v léčbě neplodnosti.

**Grafy v ručně psaném SVG.** Žádná knihovna. Potřebujeme dva tvary a plnou kontrolu
nad barvami — data o vlastním těle nemají křičet.

**Vlastní markdown renderer.** Obsah píšeme my, takže si vystačíme s podmnožinou
a nemusíme řešit sanitizaci cizího HTML.

**Marketplace bez placených pozic.** Řadí se podle relevance k fázi a každá položka
má pole `whyNow` — vysvětlení, proč se hodí právě teď. Bez toho by to byl jen katalog.

**Partner nevidí deník.** Partner mode ukazuje fázi, agregovanou náladu a konkrétní
rady — ne obsah zápisů. Deník a dopisy zůstávají soukromé i v rodinném režimu.

---

## Zdravotní bezpečnost

Napříč celou platformou platí:

- Obsah **nenahrazuje** vyšetření, diagnózu ani léčbu.
- Nikde se nestanovuje diagnóza ani nedoporučuje dávkování.
- U témat s rizikem vážné komplikace (OHSS, mimoděložní těhotenství, preeklampsie,
  silné krvácení, mastitida, poporodní deprese) je vždy uvedeno, **kdy volat lékaře**.
- Grafy laboratorních hodnot zobrazují orientační rozmezí, ale výslovně upozorňují,
  že interpretace patří lékaři.
- Deník sleduje dlouhodobý pokles nálady a nabídne odbornou pomoc — s jasným
  upozorněním, že nejde o diagnózu.

---

## Ukázkový účet

`npm run seed` vytvoří uživatelku Terezu — 6 dní po transferu, po dvou IVF cyklech,
s nízkým AMH, s vyplněným deníkem za tři týdny, laboratorními hodnotami, kronikou
a dopisem embryu. Tedy přesně ve fázi, kde je nejlíp vidět, co platforma umí.
