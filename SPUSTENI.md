# Co zbývá, než BlooMia půjde do provozu

Stav k 30. 10. 2026, větev `claude/ivf-gabi-platform-mxgp3c`.

Každý bod je buď změřený nález, nebo věc, kterou musíte dodat vy. U každého
je napsané, kdo ho udělá a co bez něj nejde.

---

## Krátká odpověď

**Technicky je aplikace hotová na tichý start.** Drží to na dvou věcech
a obě jsou na vaší straně:

| Co | Kdo | Bez toho nelze |
|---|---|---|
| Doména mybloomia.com, přepis DNS u Webglobe | vy | spustit pod vlastní adresou |
| Kontrola právníkem | právník | spustit **placený** provoz |
| Platební brána a ověřování platby | rozhodnutí | vybírat peníze |

Bezplatný provoz se dá spustit, jakmile připojíte doménu. Placený provoz má
jednu nevyřešenou otázku, viz část E.

---

## A. Co je hotové

- **Aplikace funguje.** 336 testů, typecheck čistý, audit mobilního
  zobrazení bez chyby.
- **Funguje bez sítě.** Po prvním otevření se uloží celá a dá se přidat na
  plochu telefonu.
- **Aktualizuje se sama** a v nastavení je tlačítko, kterým se aktualizace
  dá vynutit. Aplikace se nemůže natrvalo zaseknout na staré verzi.
- **Obsah**: 297 denních karet ve 21 fázích, přes 400 položek katalogu,
  162 pojmů ve slovníku. Žádná fáze nemá míň než šest karet.
- **Bezpečnost**: CSP a ostatní hlavičky, zámek aplikace kódem, šifrovaná
  záloha, výmaz maže i fotky, poškozená data nesmažou deník.
- **Prodejní stránka a tři právní dokumenty** jsou hotové a nasazené.
- **Identifikace provozovatele** je doplněná z rejstříku, viz níž.
- **Nic se nikam neodesílá.** Data zůstávají v telefonu.

### Provozovatel

| | |
|---|---|
| Provozovatelka | Gabriela Cipro |
| IČO | 21134154 |
| Sídlo | V Jezerech 311, Braškov 273 51 |
| Zápis | živnostenský rejstřík |
| DPH | neplátkyně, cena 199 Kč je konečná |

Obsah píše Gabriela a smlouvu uzavírá taky ona, jako podnikající fyzická
osoba. Dokumenty proto mluví v ženském rodě: poskytovatelka a správkyně.

---

## B. Doména u Webglobe

Celý postup krok za krokem, včetně hodnot k zkopírování, je v samostatném
souboru **`DOMENA.md`**. Je psaný tak, aby se dal projít u počítače řádek
po řádku: záloha současných záznamů jedním příkazem, co opsat z Vercelu,
co přepsat u Webglobe, čeho se nedotknout kvůli poště, jak to ověřit a jak
se vrátit zpátky, kdyby se něco pokazilo.

Shrnuto: doména zůstane na nameserverech Webglobe, přepíší se jen záznam
`A` pro samotnou doménu a `CNAME` pro `www`. Záznamy `MX` a `TXT` se
nechávají být, jinak přestane chodit pošta.

## C. Co ještě potřebuji od vás

| Údaj | Kam patří | Proč |
|---|---|---|
| **Datum účinnosti dokumentů** | všechny tři dokumenty | den spuštění |
| **Fotografie Gabriely** | prodejní stránka | teď tam drží místo značka |
| **Původní soubor loga** | `public/` | mám rekonstrukci, akvarel je aproximace |

Zástupných textů `DOPLNIT` zbývá **30**: 15 v obchodních podmínkách,
14 v zásadách ochrany údajů, 1 ve zdravotním upozornění. Prodejní stránka je
bez nich úplně. Žádný z nich už není opis z rejstříku, všechny čekají na
rozhodnutí: platební brána, lhůty, doby uchování, datum účinnosti.

---

## D. Právní část

### D1. Kontrola právníkem

Dokumenty jsem napsal jako profesionální návrh, ale nejsem právník a je to
v nich napsané. Před placeným provozem musí projít kontrolou. Nejcitlivější
místa:

- **odstoupení od smlouvy u digitálního obsahu**: čtrnáctidenní lhůta
  a podmínky, za kterých zaniká,
- **zvláštní kategorie údajů**: údaje o léčbě neplodnosti spadají pod
  článek 9 GDPR, což zvedá laťku i když všechno zůstává v telefonu,
- **povinnost jmenovat pověřence pro ochranu údajů**: podle mě nevzniká,
  ale ať to posoudí právník,
- **hranice zdravotnického prostředku**: aplikace jím není a nikde to
  netvrdí, ale text je vhodné posoudit i z pohledu předpisů o reklamě na
  zdravotní služby.

### D2. Zpracovatelské smlouvy

Podle článku 28 GDPR je potřeba smlouva s každým, kdo pro vás zpracovává
údaje: hosting (Vercel), platební brána, a pokud se zapne, i přeposílací
služba formuláře.

---

## E. Platba

Předplatné je zatím jen přepínač v nastavení, nic není zamčené. Pro bezplatný
provoz je to v pořádku a nic se kvůli tomu nemusí dělat.

Před placeným provozem je potřeba rozhodnout:

1. **Kdo bude odbavovat platby.** Stripe, GoPay, Comgate nebo jiná brána.
2. **Jestli se předplatné bude automaticky obnovovat.** Obchodní podmínky
   mají připravené obě varianty, jedna se smaže.
3. **Jak se ověří, že žena zaplatila.** Tohle je ta zásadní otázka:
   aplikace nemá server ani účty, takže nemá jak platbu ověřit. Klientská
   kontrola předplatného je jen zdvořilá prosba, obejde ji kdokoli za minutu.

Bod 3 znamená rozhodnutí o architektuře. Buď se přidá minimální server
s ověřováním, nebo se přijme, že placení je dobrovolné.

Zůstává v platnosti, co říkala Gabriela: žena nesmí platit jen za šťastný
konec. Zamykat obsah uprostřed léčby je horší než nevydělat.

---

## F. Dvě cesty

**Rychlá: tichý start zdarma.** Připojit doménu, doplnit stav DPH a datum
účinnosti, spustit pro deset až dvacet žen. Reálně jedno odpoledne.

**Úplná: placený provoz.** K tomu právník, platební brána a rozhodnutí
o ověřování platby.

Doporučuji rychlou. Aplikace, kterou používá dvacet žen, vám řekne za dva
týdny víc než další měsíc mého psaní.

---

## G. Co bych nedělal

- Nespouštěl bych placené předplatné, dokud není vyřešené, jak se platba
  ověřuje. Vybírat peníze za něco, co se dá obejít přepnutím přepínače,
  je horší než nevybírat nic.
- Neinvestoval bych do ochrany obsahu proti kopírování. Celý obsah je
  v jednom souboru, který si prohlížeč musí stáhnout. Podrobně
  v `BEZPECNOST.md`, sekce 5.
- Nedělal bych z toho těhotenskou aplikaci.
