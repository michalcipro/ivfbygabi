# Analýza produktu: co chybí, aby za IVF by Gabi lidé platili

Stav k srpnu 2026. Psáno pro rozhodování, ne pro prezentaci.

---

## 1. Co produkt dneska je

Změřeno v repozitáři, ne odhadem:

| | |
|---|---|
| Kód aplikace | 17 000 řádků TypeScriptu |
| Odborný obsah | 28 000 řádků, **279 článků** ve 20 balících |
| Obrazovky | 19 |
| Doménové moduly | 32 |
| Testy | 183, všechny procházejí |
| Velikost | 2,2 MB, jeden soubor `index.html` |
| Backend | **žádný** |
| Platby | **žádné** |
| Notifikace | **žádné** |
| Účty | **žádné** |

**Tohle je důležité si přiznat:** obsahová a doménová část je hotová a je dobrá. 279 článků psaných česky, s medicínsky opatrným jazykem, plus denní cesta po transferu, která reaguje na den kultivace embrya. To se nedá koupit ani rychle dohnat. Je to skutečná bariéra vstupu.

Chybí kolem toho úplně všechno, co dělá z aplikace produkt.

---

## 2. Proč se to dneska prodat nedá

Tři překážky. Každá z nich sama o sobě stačí, aby projekt neměl tržby.

### 2.1 Předplatné je přepínač v prohlížeči

```ts
const aktivni = S.d.subscription?.active ?? false
```

Klepnutím na „Aktivovat předplatné" se do localStorage zapíše `true`. Nic se neplatí, nic se neověřuje a **nic se neodemyká**, protože free a premium verze jsou identické. Cena 199 Kč je dnes text na obrazovce.

### 2.2 Data žijí v jedné záložce prohlížeče

Všechno je v localStorage a fotky v IndexedDB jednoho zařízení. To znamená:

- Nový telefon → **prázdná aplikace**
- Vymazání dat prohlížeče → **prázdná aplikace**
- Tablet a mobil → **dvě různé aplikace**
- Rozbitý telefon → **nic**

U deníku léčby, který žena vede dva roky a nosí ho k lékaři, je tohle likvidační. Ne jako technický nedostatek, ale jako **důvod nezačít**. Nikdo nezaplatí za archiv, o který může přijít smazáním cache.

### 2.3 Slib „vrať se zítra" se nedá splnit

Celá „Po transferu" stojí na tom, že se žena vrátí každý den. Aplikace jí ale nemá jak dát vědět. Bez notifikací je to web, na který si musí vzpomenout sama. V nastavení je to napsané poctivě, ale poctivost tržbu nenahradí.

---

## 3. Ekonomika, kterou je nutné spočítat předem

IVF je **prchavý trh**. Každá zákaznice odejde: buď otěhotní, nebo léčbu ukončí. Tohle mění všechno.

### Odhad (ověřit s reálnými daty)

| Veličina | Odhad | Poznámka |
|---|---|---|
| Ženy v aktivní léčbě v ČR ročně | 8 000 až 10 000 | ČR má jednu z nejvyšších měr IVF v Evropě, ověřit v ÚZIS |
| Průměrná délka předplatného | 4 až 8 měsíců | délka léčebného okna |
| LTV při 199 Kč | **800 až 1 600 Kč** | |
| Únosné CAC | **do 400 Kč** | při LTV/CAC ≥ 3 |

### Co z toho plyne

**1 000 platících současně = 199 000 Kč měsíčně.** Při 8 000 ženách v léčbě ročně a půlročním předplatném to znamená získat zhruba **každou třetí až čtvrtou ženu, která v ČR začne IVF.** To je extrémně vysoká penetrace.

Placená akvizice na to nestačí. Při CAC pod 400 Kč a úzkém publiku Meta ani Google nedají objem. **Jediné funkční kanály jsou:**

1. **Kliniky** jako distribuční kanál (leták v čekárně, QR na propouštěcí zprávě, doporučení sestry)
2. **Gynekologové** posílající na IVF
3. **Komunita** (skupiny, doporučení mezi ženami)
4. **Obsah jako vstupní brána** (279 článků = SEO, které dnes není nikde vidět, protože aplikace je jeden HTML soubor)

**Závěr: bez partnerství s klinikami se tisíc platících nedá dosáhnout.** To není marketingový kanál, to je základ obchodního modelu.

---

## 4. Co doplnit, seřazeno podle dopadu na tržby

### Priorita 1: bez tohohle nejsou tržby

| Co | Proč | Odhad |
|---|---|---|
| **Backend s účty a synchronizací** | Odstraní důvod nezačít. Data přežijí telefon. | 6 až 10 týdnů |
| **Platební brána** | Stripe nebo GoPay, opakované platby, faktury, DPH | 2 až 3 týdny |
| **Skutečné branění obsahu** | Dnes je free a premium totéž | 1 týden |
| **PWA + push notifikace** | Instalace na plochu, „dnešní den je připravený" | 2 týdny |
| **GDPR a zpracování zdravotních dat** | Zvláštní kategorie podle čl. 9. Souhlas, DPA, smazání účtu, export. **Není volitelné.** | 2 až 4 týdny + právník |

**Realisticky 3 až 4 měsíce práce, než se dá vystavit první faktura.**

### Priorita 2: bez tohohle bude vysoký churn

| Co | Proč |
|---|---|
| **Pauza místo zrušení** | Mezi cykly bývá 2 až 3 měsíce. Dnes žena zruší a už se nevrátí. Pauza za 0 Kč nebo 49 Kč drží účet a data. |
| **Denní hodnota mimo transfer** | Po transferu je 14 dní denního obsahu. Stimulace má injekce. Ale měsíce čekání mezi pokusy nemají **nic**, a přesně tam se ruší. |
| **Export pro lékaře** | Jeden PDF s celou historií cyklů. Nejsilnější důvod aplikaci vést a nejlepší reklama v ordinaci. |
| **Sdílení s partnerem** | Partner mode existuje jako obrazovka, ne jako sdílený přístup. Dva lidé, jedno předplatné. |

### Priorita 3: co zvýší ochotu platit

| Co | Proč |
|---|---|
| **Onboarding s okamžitou hodnotou** | Dnes 23 otázek a pak dashboard. Musí to být obráceně: první obrazovka po registraci má ukázat *její* den. |
| **Srovnání cyklů** | Tabulka existuje. Chybí věta „ve druhém cyklu jste měla o 3 blastocysty víc". |
| **Chytré připomínky léků s časy** | Injekce na minutu přesně je nejsilnější denní důvod otevřít aplikaci. |
| **Onboarding z propouštěcí zprávy** | Vyfotit zprávu z kliniky a nechat ženu potvrdit vytažené údaje. Bez AI vyhodnocování, jen předvyplnění. |

---

## 5. Co v produktu obsahově chybí

Prošel jsem 279 článků a strukturu obrazovek. Chybí tohle:

1. **Peníze.** IVF stojí desítky tisíc. Kolik hradí pojišťovna, kolik cyklů, co se doplácí, jak na příspěvek zaměstnavatele. Nikde to není a je to jedna z prvních otázek každého páru.
2. **Práce.** Jak si vzít volno na odběr, co říct zaměstnavateli, jak zvládnout stimulaci při práci na směny. Naprosto praktické a nikde.
3. **Muž.** Spermiogram je zmíněný, ale mužský faktor je u zhruba poloviny párů a v aplikaci nemá vlastní cestu.
4. **Druhá klinika.** Kdy zvážit změnu, jak si vyžádat dokumentaci, na co se ptát při konzultaci jinde.
5. **Konec léčby.** Nejtěžší a nejopomíjenější téma. Kdy přestat, život bez dítěte, adopce, náhradní mateřství. Aplikace, která ženu opustí ve chvíli, kdy skončí, si nezaslouží předplatné.
6. **Sekundární neplodnost.** Modifikátor existuje, obsah pro ni ne.

---

## 6. Návrh plánu

### Fáze 1 (měsíce 1 až 4): udělat z aplikace produkt
Backend, účty, synchronizace, platby, GDPR, PWA s notifikacemi, branění premium. **Bez nových funkcí.** Cíl je vystavit první fakturu.

### Fáze 2 (měsíce 4 až 6): udržet zákaznice
Pauza místo zrušení, PDF export pro lékaře, sdílení s partnerem, denní obsah pro období mezi pokusy.

### Fáze 3 (měsíce 6 až 9): distribuce
Pilot se dvěma až třemi klinikami. Nabídnout jim aplikaci jako službu pro jejich pacientky, s vlastní stránkou kliniky uvnitř. **Tohle je hlavní kanál, ne doplněk.**

### Fáze 4 (měsíce 9+): rozšíření trhu
Slovenština (téměř zdarma, podobný jazyk a systém péče), potom polština nebo angličtina. Český trh sám o sobě na tisíc platících stačí jen s velmi vysokou penetrací.

---

## 7. Rizika, která je třeba pojmenovat

| Riziko | Závažnost | Co s tím |
|---|---|---|
| **Zdravotní data na serveru** | Vysoká | Šifrování, DPA, právní posudek. Únik dat o léčbě neplodnosti je konec produktu. |
| **Kliniky nebudou chtít partnera** | Vysoká | Ověřit rozhovory dřív, než se postaví backend. |
| **Trh je příliš malý** | Střední | Spočítat s reálnými čísly ÚZIS. Připravit slovenštinu jako plán B. |
| **Regulace zdravotnických prostředků** | Nízká až střední | Aplikace záměrně nediagnostikuje a nedoporučuje léčbu. Držet se toho. Jakákoli funkce „co znamená moje hCG" by to změnila. |
| **Ochota platit v citlivé situaci** | Střední | Cena 199 Kč je proti nákladům na cyklus zanedbatelná. Problém není cena, ale důvěra. |

---

## 8. Jedna věta

**Produkt má hotové to, co se dělá nejhůř, a nemá nic z toho, co se dělá nejsnáz.** Obsah a doménová logika jsou na úrovni, kterou konkurence nemá. Chybí účty, platby, synchronizace a notifikace, tedy tři až čtyři měsíce práce bez jediné nové funkce.

A pak jedna věc, která není o kódu: **bez kliniky jako distribučního kanálu se tisíc platících nedosáhne.** To ověřit dřív než cokoli jiného.
