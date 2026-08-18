# BlooMia: bezpečnost, únik dat a ochrana proti zkopírování

Analýza celé aplikace k 11. 8. 2026, větev `claude/ivf-gabi-platform-mxgp3c`.
Je to seznam nálezů, ne opravy. Nic z toho zatím není opravené.

Každý nález má důkaz: soubor a řádek, nebo měření. Kde jsem si jistý nebyl,
je to napsané.

---

## Co jsem prověřoval

| Oblast | Jak | Výsledek |
|---|---|---|
| XSS v aplikaci | 4 místa s `innerHTML`, 1040 volání `esc()`, všechny trasy v routeru | čisté, viz sekce 4 |
| XSS ze zlé zálohy | cesta obnovy, `md()`, `<img src>` | čisté, jedna drobnost |
| Odchozí síť | grep na `fetch`, `XMLHttpRequest`, `https://` | jediný cíl, vypnutý |
| Ukládání | localStorage, IndexedDB, mazání, obnova | **tři díry**, viz 1.1 až 1.3 |
| HTTP hlavičky | `vercel.json` | **žádné bezpečnostní**, viz 1.5 |
| Ochrana obsahu | 2,7 MB balíček, 2,0 MB zdrojového obsahu | **nelze ochránit**, viz 5 |
| Platba | stav `subscription` | nic se neplatí a nic není zamčené, viz 6 |

Co ověřit nešlo: skutečné hlavičky z běžícího webu. Proxy v tomhle prostředí
blokuje `ivfbygabi.vercel.app` (403 na CONNECT). Nálezy o hlavičkách jsou
z konfigurace, ne z odpovědi serveru. Po nasazení na doménu je potřeba je
změřit znovu.

---

## 1. Kritické. Opravit dřív, než web uvidí první žena

### 1.1 „Smazat všechno“ nesmaže fotky

`reset()` v `src/client/store.ts:728` dělá tohle:

```ts
export function reset(): void {
  data = blank()
  save()
}
```

`save()` (`store.ts:662`) zapisuje jen `localStorage.setItem(KEY, ...)`.
Fotky ale v localStorage nejsou, leží v IndexedDB (`photos.ts:27`, databáze
`photos`). A `photos.ts` nemá jedinou funkci, která by je smazala, kromě
`replacePhotos()`, kterou reset nevolá.

Následek: žena klepne na „Smazat všechno“, potvrdí dialog, který jí slíbí,
že „profil, deník, hodnoty i dopisy zmizí“, a její vyfocené testy, protokoly
a snímky z ultrazvuku zůstanou v zařízení. Neviditelné v rozhraní, ale na
disku. Kdokoli další, kdo aplikaci na tom telefonu otevře, je v záloze
vyexportuje.

Je to zároveň porušení práva na výmaz podle GDPR, protože jde o zdravotní
údaje a tlačítko tvrdí, že je maže.

### 1.2 Fotky jedné ženy se dostanou do zálohy druhé ženy

`src/client/main.ts:1184`:

```ts
const fotkyOk = kolikFotek === 0 ? true : await replacePhotos(n.photos)
```

Když obnovovaná záloha žádné fotky neobsahuje, `replacePhotos()` se nezavolá.
Ta funkce je přitom jediné místo, které čistí `cache` i IndexedDB, a její
vlastní dokumentace říká, že „obnova musí být úplná“. Volající to obchází.

Následek na sdíleném zařízení (sestra, kamarádka, tablet v rodině): žena B
načte svou zálohu bez fotek, staré fotky ženy A zůstanou v IndexedDB
i v `cache`. `allPhotos()` (`photos.ts:207`) vrací celý obsah `cache`, takže
při další záloze si žena B odnese cizí snímky ve svém souboru. A po restartu
je `initPhotos()` (`photos.ts:79`) načte z databáze zpátky, takže to nezmizí
ani zavřením prohlížeče.

### 1.3 Poškozený jeden údaj v úložišti smaže celý deník

`load()` (`store.ts:471`) nekontroluje tvar načtených dat:

```ts
const parsed = JSON.parse(raw) as Save
if (parsed && parsed.v === 1) data = migrate({ ...blank(), ...parsed })
```

`migrate()` hned na to volá `d.meds.map(...)`. Kdyby `meds` z jakéhokoli
důvodu nebylo pole (nedopsaný zápis, jiná verze, cizí skript, chyba
prohlížeče na plném disku), `map` vyhodí výjimku, `catch` nastaví
`data = blank()` a první další uložení přepíše skutečná data prázdnými.

Zajímavé je, že obnova ze zálohy tuhle kontrolu má. `replaceAll()`
(`store.ts`, funkce `sedi()`) přijímá jen známé klíče se sedícím tvarem.
Vlastní úložiště ji nemá. Přísnější je aplikace k cizímu souboru než ke
svým vlastním datům.

### 1.4 Prodejní stránka a aplikace sdílí jeden původ

Landing běží na `/`, aplikace na `/app/`. Pro prohlížeč je to jeden origin,
takže **jakýkoli skript na prodejní stránce může přečíst celý deník** přes
`localStorage['ivf-by-gabi/v1']`.

Dnes je to v pořádku. Ověřeno: jediný `<script>` v `landing/index.src.html`
(řádek 1110) je pozorovatel hero sekce, žádná externí adresa. Celý sestavený
web odkazuje ven jen na `mybloomia.com`, `og.png` a Instagram.

Jenže prodejní stránka bez měření nezůstane. V okamžiku, kdy tam přijde
Google Analytics, Meta Pixel, Sklik, Hotjar nebo Smartlook, ten skript bude
mít technickou možnost číst deníky. Smartlook a Hotjar nahrávají obsah
stránky, Meta Pixel má rozšíření na automatické sbírání formulářů. Nikdo to
nemusí udělat schválně, stačí vložit kód z návodu.

To je z celého seznamu ta nejtišší past. Dnes díra není, ale architektura ji
připravila.

### 1.5 Web nemá jedinou bezpečnostní hlavičku

`vercel.json` obsahuje jen `Cache-Control`. Chybí:

| Hlavička | Co by hlídala |
|---|---|
| `Content-Security-Policy` | jediná skutečná pojistka proti tomu, aby cizí skript odeslal deník pryč |
| `X-Content-Type-Options: nosniff` | aby prohlížeč neuhádl typ souboru jinak, než jak je poslaný |
| `Referrer-Policy` | aby se adresa aplikace nedostávala do logů cizích webů |
| `Permissions-Policy` | vypnout kameru, mikrofon, polohu, které aplikace nepotřebuje |
| `X-Frame-Options` nebo `frame-ancestors` | aby aplikace nešla vložit do cizí stránky |

CSP je tu podstatnější než obvykle, protože aplikace je jeden soubor
s vloženým skriptem i stylem. Znamená to `script-src 'unsafe-inline'`,
nebo hash, pokud se to udělá pořádně. Ale i slabá CSP s `connect-src`
omezeným na vlastní doménu by odchod dat ven zastavila.

HSTS na `vercel.app` nasazuje Vercel sám. Na vlastní doméně to bude potřeba
ověřit, viz poznámka o nezměřitelnosti výš.

### 1.6 Aplikace nemá zámek

Není žádný PIN, žádná biometrika, žádné zamknutí po nečinnosti. Kdo vezme
odemčený telefon, čte celý deník: diagnózy, hodnoty, výsledky, dopisy
dítěti, zápisy o neúspěších.

Pro tuhle aplikaci je to nejpravděpodobnější únik ze všech. Ne útočník,
ale partner, matka, kolega. Žena po neúspěšném transferu často ještě
nechce, aby to někdo věděl.

Poznámka k rozsahu: zámek nesmí být jediná ochrana obsahu (data zůstávají
v prohlížeči čitelná přes vývojářské nástroje), ale proti pohledu přes
rameno funguje.

---

## 2. Střední. Opravit před placenou verzí

### 2.1 Osobní Gmail natvrdo v balíčku

`src/client/feedback-send.ts:24`:

```ts
export const KOMU = 'gabrielazbihlej@gmail.com'
```

Je to v sestaveném souboru, tedy veřejné a sklizitelné roboty. Dvě věci
zvlášť: sběr spamu, a hlavně to, že soukromá Gmail schránka se stává místem,
kam chodí zdravotní údaje uživatelek. Pro roli správce údajů je to slabé.
Patří tam adresa na doméně.

Kontrola proti zadání: žádné **přihlašovací údaje ani API klíče** ve
frontendu nejsou. `ACCESS_KEY` je prázdný řetězec, hesla nikde. Adresa
schránky není přihlašovací údaj, ale je to osobní údaj v produkčním kódu.

### 2.2 Záloha je nešifrovaný JSON

`bloomia-zaloha` je čitelný text: celý deník, hodnoty, dopisy i fotky
v base64. Skončí ve složce Stažené, kterou iCloud Drive a Google Disk běžně
synchronizují nahoru. Přes `navigator.share` může jít rovnou do libovolné
aplikace ve sdílecím panelu.

Není to chyba kódu, je to vlastnost návrhu. Ale žena to musí vědět dřív, než
klepne na Zálohovat, a musí mít možnost soubor zaheslovat.

### 2.3 Obnova nekontroluje, co je uvnitř fotky

`replacePhotos()` uloží cokoli, co v záloze v poli `photos` je, a
`photo-ui.ts:41` to vloží jako `<img src="${esc(url)}">`. Uvozovky escapované
jsou, takže z atributu se vylomit nedá, a `data:text/html` ani SVG uvnitř
`<img>` skript nespustí. Reálné riziko je tedy nízké.

Chybí ale kontrola, že hodnota začíná na `data:image/jpeg;base64,`. Bez ní
může cizí soubor nafouknout úložiště nebo tam propašovat text, který se
v příští záloze vyexportuje dál.

### 2.4 Aplikace jde vložit do cizí stránky

Bez `frame-ancestors` může kdokoli zobrazit BlooMii v rámu na svém webu
a překrýt ji vlastními prvky. Data tím nepřečte (jiný původ), ale může
navést uživatelku na klepnutí, které nechtěla, třeba právě na „Smazat
všechno“. Řeší to jedna hlavička z bodu 1.5.

### 2.5 Web3forms, až se doplní klíč

Klíč je záměrně veřejný a sám o sobě nic neotevírá. Dvě věci ale platí:
kdokoli ho z balíčku vytáhne a může přes něj posílat zprávy na Gabinu
adresu (spam), a hlavně **volné pole zpětné vazby v aplikaci o léčbě
neplodnosti běžně obsahuje zdravotní údaj**. Web3forms je americká služba.
Bez zpracovatelské smlouvy a bez věty v zásadách je to problém.

Co odchází dnes, ověřeno v `bodyFor()` (`src/lib/domain/feedback.ts:91`):
téma, nepovinné jméno, e-mail **jen se zaškrtnutým souhlasem s odpovědí**,
hvězdičky, datum a čtyři volná pole. Deník, cykly ani hodnoty nikdy.
To je udělané správně.

### 2.6 Předčítání meditací může jít přes cizí server

`speech.ts` používá `speechSynthesis`. Některé systémy (Edge s online hlasy,
část hlasů na Androidu) posílají text k syntéze na server výrobce. Předčítá
se jen obsah z katalogu, ne zápisy uživatelky, takže je to poznámka, ne díra.
Patří to do zásad ochrany údajů.

### 2.7 Aplikace je otevřená vyhledávačům

Není `robots.txt` ani `noindex` na `/app/`. Google i roboti sbírající data
pro jazykové modely si celý obsah odnesou legálně a bez námahy. Souvisí
s bodem 5.

---

## 3. Drobnosti

- **Tisk přehledu** (`report-print.ts:189`) otevře `window.open('', '_blank')`
  a zapíše dokument. Zůstává v zařízení. Riziko je až v tiskovém dialogu,
  kde jde vybrat cloudovou tiskárnu. Nic s tím dělat nejde, patří to do textu.
- **Odkazy ven** mají `rel="noopener noreferrer"` (2 výskyty, oba na Instagram).
  Správně.
- **Sestavení** je minifikované, bez zdrojových map a bez komentářů
  (`build-app.ts:42`). Demo účet ze `seed.ts` v produkčním souboru **není**,
  ověřeno hledáním v `web/app/index.html`.
- **Service worker** má rozsah `/app/` a ukládá jen skořápku aplikace.
  Data uživatelky do cache nejdou.

---

## 4. XSS: co jsem hledal a nenašel

Tohle je dobrá zpráva a stojí za to ji napsat stejně podrobně jako nálezy.

- **Jen 3 místa zapisují `innerHTML`**: onboarding, skořápka aplikace
  a bublina u grafu (`viz.ts`). Všechna skládají text přes `esc()`.
  Čtvrté místo, proužek s nabídkou nové verze, zmizelo: aktualizace se
  dnes nasazuje sama a žádné tlačítko k ní nepatří.
- **`esc()`** (`ui.ts:39`) escapuje `& < > " '` a je použitá **1040krát**.
- **`md()`** (`ui.ts:55`) escapuje **první**, teprve pak přidává značkování.
  I kdyby do něj přišel text od uživatelky, neublíží. (Dnes tam chodí jen
  obsah z katalogu, 7 volání.)
- **Trasy z adresního řádku se nikde nevypisují.** Prošel jsem všech sedm
  obrazovek, které dostávají parametr z URL (`screenPojem`, `screenDiagnoza`,
  `screenCist`, `screenHodnota`, `screenSkupina`, `screenCviceni`,
  `screenCyklus`). Každá parametr použije jako klíč do katalogu a když nic
  nenajde, vrátí prázdnou obrazovku. Nikdy ho nevypíše.
- **Zbylé nezaescapované vsuvky** (`${id}`, `${qi}`, `${on}`, `${cd}` a další,
  celkem 35 míst) nesou jen čísla nebo identifikátory z katalogu, tedy nic,
  co by uživatelka nebo cizí soubor mohly ovlivnit.
- **Znečištění prototypu** ze zálohy nehrozí. `JSON.parse` i rozprostření
  objektu zakládají `__proto__` jako vlastní vlastnost, ne jako prototyp.
- **Tiskový přehled** escapuje všechny hodnoty včetně titulku a poznámek
  (`report-print.ts:101` a dál).

Jinými slovy: cesta, kterou se do takové aplikace obvykle leze, je zavřená.
Slabina není v kódu, ale v tom, co je kolem něj: chybějící hlavičky, sdílený
původ s prodejní stránkou a chybějící mazání fotek.

---

## 5. Ochrana proti zkopírování obsahu

Tady musím říct nepříjemnou věc rovnou.

**Obsah BlooMie nejde ochránit, dokud nemá server.** Není to nedodělek, je to
matematika. Aplikace je jeden soubor o 2,7 MB, ve kterém je všech 404 položek
katalogu a 830 textů včetně denních karet. Prohlížeč je musí umět zobrazit
bez přihlášení a bez sítě, takže je musí mít celé u sebe. Co má prohlížeč,
má i ten, kdo si ho pustí.

Konkrétně: `curl https://mybloomia.com/app/ > vse.html` stáhne kompletní
obsah za jednu vteřinu. Minifikace texty nijak neskrývá, jen zkracuje názvy
proměnných. Žádná obfuskace to nezmění, protože rozbalený text musí být
v paměti stránky.

Co s tím jde dělat, seřazeno podle poměru práce a užitku:

1. **Přijmout to a prodávat něco jiného než text.** Konkurenční výhoda není
   v tom, že ty texty existují, ale v tom, že jsou propojené s tím, kolikátý
   je dnes den. Zkopírovaný text bez aplikace je PDF, které nikdo nečte.
   Tohle je podle mě správná odpověď.
2. **Vodoznak v textu.** Vsadit do obsahu několik nezvyklých formulací, které
   se dají vygooglit. Nezabrání kopírování, ale dokáže ho u soudu.
3. **`robots.txt` a `noindex` na `/app/`.** Nezastaví člověka, zastaví
   vyhledávače a sběrače pro jazykové modely. Levné, udělat.
4. **Licenční doložka a autorská poznámka** v patičce a v souboru. Nutné pro
   krok 2.
5. **Server s ověřením a doručováním obsahu po částech.** Jediné, co skutečně
   funguje. Znamená to backend, účty, přihlašování a konec režimu bez sítě.
   Popírá to celý dosavadní návrh aplikace a nedoporučuji to teď.

Co **nefunguje** a nemá se do toho investovat: zakázané pravé tlačítko,
vypnutý výběr textu, obfuskace, obrázky místo textu, dělení do částí.
Všechno to obejde kdokoli za pět minut a poškodí to čtečky pro nevidomé
a vyhledávače.

---

## 6. Platba: není co obejít, protože není co platit

`store.ts:391` říká pravdu:

```ts
/**
 * Předplatné. V téhle verzi je to jen stav. Žádná platba neprobíhá.
 * Aplikace zůstává celá otevřená, i když je neaktivní.
 */
subscription: { active: boolean; since: IsoDate | null }
```

Přepínač v nastavení (`main.ts:2543`) jen obrátí hodnotu v localStorage.
Nic není zamčené, žádná brána, žádná platební služba.

Prodejní stránka přitom uvádí cenu 199 Kč. Než se spustí, je potřeba
rozhodnout jednu věc: pokud se platit bude, musí platbu odbavit někdo jiný
(Stripe, GoPay, Comgate) a aplikace bez serveru nemá jak výsledek ověřit.
Klientská kontrola předplatného je vždycky jen zdvořilá prosba.

Zůstává v platnosti, co jsi řekl: žena nesmí platit jen za šťastný konec.
Ať se to vyřeší jakkoli, zamykat obsah uprostřed léčby je horší než nevydělat.

---

## 7. GDPR a právo, protože jde o zdravotní údaje

Data o léčbě neplodnosti jsou zvláštní kategorie osobních údajů podle
článku 9 GDPR. To zvedá laťku, i když všechno zůstává v telefonu.

- Chybí zásady ochrany osobních údajů. Musí říct, že se data neposílají
  nikam, kromě zpětné vazby, a co přesně zpětná vazba obsahuje.
- Chybí zpracovatelská smlouva s Web3forms, pokud se ta cesta zapne.
- Právo na výmaz je dnes porušené kvůli bodu 1.1.
- Chybí IČO a sídlo. **Doplň prosím skutečné údaje, nevymýšlím je.**
- Aplikace se nesmí tvářit jako zdravotnický prostředek. Poznámka v hero
  sekci prodejní stránky a v patičce přehledu tohle už řeší, je to dobře.

---

## Pořadí, v jakém bych to dělal

| # | Co | Proč teď | Odhad |
|---|---|---|---|
| 1 | Mazat fotky při resetu a vždy při obnově (1.1, 1.2) | dnes lže tlačítko a unikají cizí snímky | malý |
| 2 | Bezpečnostní hlavičky do `vercel.json` (1.5, 2.4) | jedna změna souboru, zavře pět děr | malý |
| 3 | Kontrola tvaru v `load()` (1.3) | hrozí ztráta deníku, což je nejhorší možný konec | střední |
| 4 | Oddělit prodejní stránku od aplikace, nebo zakázat měřicí skripty (1.4) | past pro budoucnost | střední |
| 5 | Adresa na doméně místo Gmailu (2.1) | před spuštěním | malý |
| 6 | `robots.txt` a `noindex` na `/app/` (2.7, 5) | levné, dává smysl | malý |
| 7 | Zámek aplikace (1.6) | nejpravděpodobnější únik u téhle cílovky | větší |
| 8 | Šifrovaná záloha heslem (2.2) | až bude 1 až 7 | větší |
| 9 | Zásady ochrany údajů, IČO, sídlo (7) | čeká na tvoje údaje | na tobě |

Nic z toho jsem zatím nezměnil. Řekni, co z toho mám pustit, a v jakém pořadí.
