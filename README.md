# Bloomia

Česká aplikace pro ženy na IVF cestě. Od prvního rozhodnutí, přes diagnostiku,
stimulaci, odběr, embrya, transfery a čekání na hCG až po pozitivní test, ztrátu
nebo další pokus.

Není to aplikace na zapisování cyklu a není to knihovna článků. Je to průvodkyně,
která **každý den sestaví jinou domovskou stránku** podle toho, kde na své cestě
uživatelka právě je.

## Rychlý start

```bash
npm install
npm run app         # sestaví app/index.html
npm run typecheck   # tsc --noEmit
npm test            # 92 testů: doménové jádro, doporučování, hygiena obsahu
```

Žádný server, žádná databáze, žádný API klíč. Celá aplikace je jeden soubor.

## Jedna stránka, žádný backend

`npm run app` sbalí aplikaci do **jedné HTML stránky, která funguje bez Node.js**.
Není to maketa: do stránky se zabalí skutečné doménové jádro, skutečný doporučovací
systém a celá knihovna obsahu. V prohlížeči se pak počítá živě, ze skutečného
dnešního data a z profilu, který si uživatelka vyplní v onboardingu.

Zdroj je v `src/client/`, sestavení dělá esbuild ve `scripts/build-app.ts`.

Data zůstávají v `localStorage` pod klíčem `ivf-by-gabi/v1`, fotky v IndexedDB.
**Nic se nikam neodesílá.** Otevřená z disku (`file://`) si stránka data pamatuje
jen v rámci jedné záložky, protože prohlížeče souborovým adresám nedávají sdílené
úložiště. Na doméně nebo přes `npx serve app` se profil chová normálně.

## Žádná AI

V aplikaci není chatbot, není interpretace výsledků, není rozpoznávání dokumentů
a není generování textu. Všechno, co se zobrazuje, je buď napsaný obsah, nebo
deterministický výpočet z toho, co si uživatelka zapsala.

Hledání (`src/lib/search/app-search.ts`) staví index nad vším, co v aplikaci je,
a vrací jen to, co se najde. Když se nenajde nic, řekne to. Vymyšlená odpověď by
byla ve zdravotním kontextu horší než přiznaná mezera.

Dokumenty se **jen ukládají a třídí**. Hodnoty se zapisují ručně, aby v záznamu
nikdy nebylo špatně přečtené číslo.

## Tři vrstvy

Celá navigace stojí na oddělení toho, co se děje se mnou, od toho, co si chci
přečíst:

1. **Dnes** je jediná obrazovka, která odpovídá na otázku „co mám dnes dělat“.
2. **Moje cesta** drží data: cykly, embrya, transfery, výsledky, kalendář,
   zdravotní data, dokumenty, kroniku.
3. **Poznej IVF** je jen ke čtení: fáze, knihovna, diagnózy, vyšetření, metody,
   podpůrná péče, „Co když…“, slovník.

Vedle nich Deník a Profil.

## Fáze řídí všechno

Onboarding začíná deseti situacemi od „snažíme se o miminko“ po „zažila jsem
ztrátu“. Jemnější dělení je pod „Potřebuji jinou fázi“. Druhý krok se ptá, co už
žena o své cestě ví, a vybrané diagnózy se propíšou do cílení obsahu.

Fáze se mění z hlavičky Dnes, ne z hloubky nastavení, a **nic se přitom nemaže**.
Žena může začít u „snažíme se“, projít vyšetřením, diagnózou, prvním cyklem
i třemi transfery, a celou dobu se jí cesta skládá do jedné historie.

Nic se přitom nezamyká. Celou IVF cestu si může kdykoli prohlédnout dopředu.

## Jak to funguje

### Doménové jádro (`src/lib/domain/`)

Čisté moduly bez prohlížeče a bez HTML. Stejný vstup dá vždy stejný výstup, takže
se dají testovat.

- **`journey.ts`** odvodí fázi z dat profilu, i když si ji uživatelka nezvolila
  nebo mezitím postoupila. Všechno ostatní čte z `resolveJourney(profile, today)`.
- **`cycle.ts`** je karta cyklu. Jeden cyklus může mít **víc transferů**: po odběru
  se udělá čerstvý, zbylá embrya se zamrazí a v dalších měsících se z nich dělají
  kryotransfery. Datum transferu ani odběru hCG se proto v řádku cyklu neukládá,
  ptá se přes `currentTransfer()`, `lastTransferDate()` a `betaDate()`.
- **`embryo.ts`** je karta pro každé embryo: vývoj po dnech 1 až 6, stadium,
  hodnocení, zamražení, rozmrazení, genetika, osud.
- **`journey-card.ts`** skládá osobní IVF kartu a trychtýř „co se stalo s mými
  vajíčky“.
- **`dates.ts`** počítá v kalendářních dnech, nikdy v milisekundách, a umí české
  skloňování.

### Doporučování (`src/lib/content/recommend.ts`)

Skóre položky je součin fáze, dne ve fázi, časového okna, modifikátorů, naučených
témat, novosti a kurátorského boostu.

Dvě vlastnosti, na kterých stojí zážitek:

- **V rámci dne je pořadí stabilní.** Zavřít a otevřít aplikaci obsah nepřehází.
- **Mezi dny se mění.** Jitter je odvozený z data, takže zítra je domovská stránka
  jiná.

### Obsah (`src/lib/content/packs/`)

336 materiálů, 162 pojmů a 174 denních karet ve 23 balících, každý typovaný proti
`ContentPack`. Registr v `index.ts` je slepí a odfiltruje duplicitní ID.

> **Nový balík je potřeba přidat do `index.ts`.** Test to hlídá: soubor, který ve
> složce leží, ale v registru chybí, shodí `npm test`. Bez toho by se jeho obsah
> tiše nikde nezobrazil.

Pravidla, která platí bez výjimky a hlídá je `tests/content.test.ts`:

- Žádné dávkování léků ani doplňků.
- Žádná prognóza pro konkrétní ženu a žádná procenta úspěšnosti.
- Žádné tvrzení, že metoda zvyšuje šanci na těhotenství, pokud pro to není důkaz.
  U doplňkových metod je vždycky uvedeno, jak silné důkazy za nimi stojí.
- Žádná toxická pozitivita.
- Kde hrozí vážná komplikace, je napsané, kdy nečekat a volat.
- Zkratka je vždycky `hCG`, nikdy „beta hCG“ ani „HCG“.
- **Žádný em dash.** Pomlčka mezi mezerami je v prose zakázaná, používá se čárka,
  dvojtečka nebo tečka.

### Fotky (`src/client/photos.ts`)

Papír z kliniky se dá vyfotit u protokolu, embryologie, transferu, testu, výsledku,
ultrazvuku, léku i lékařské zprávy.

Obrázky leží v **IndexedDB**, ne v localStorage. Jedna fotka z mobilu je větší než
celý zbytek dat a tiché selhání `save()` by uživatelce přestalo ukládat deník.
Před uložením se fotka zmenší na 1600 px, aby text na protokolu zůstal čitelný.

### Vykreslování (`src/client/`)

Celá obrazovka se překresluje přes `innerHTML`. Interakce běží přes `data-go`
a `data-act` v jednom delegovaném posluchači, nikdy přes listenery v šablonách.

Výjimky, které DOM upravují přímo a `render()` obcházejí schválně: přehrávač
meditace, dechové cvičení a zvětšená fotka.

## Bezpečnost a hranice

Aplikace nediagnostikuje, nepředepisuje, neurčuje léčbu a neslibuje výsledek.
U medicínských tvrzení se používá „může“, „často“, „záleží na individuální situaci“
a „proberte se svou klinikou“.

Čísla, která se počítají, jsou pouhé součty a podíly toho, co si uživatelka
zapsala. Aplikace je nevykládá.

## Nasazení

`vercel.json` spustí `npm run app` a naservíruje `app/index.html`. Žádná databáze,
žádné proměnné prostředí, žádný běžící server.

## Struktura

```
src/
  client/            prohlížečová aplikace
    main.ts          routování, akce, render
    store.ts         stav v localStorage
    photos.ts        fotky v IndexedDB
    screens-*.ts     jednotlivé obrazovky
    viz.ts, ui.ts    grafika a stavební prvky
  lib/
    domain/          čisté doménové jádro
      guides/        průvodci fázemi
    content/
      packs/         obsahové balíky
      recommend.ts   doporučovací systém
    health/          katalog laboratorních parametrů
    search/          hledání v aplikaci
scripts/
  build-app.ts       esbuild do jednoho HTML
tests/               testy doménového jádra a hygieny obsahu
```
