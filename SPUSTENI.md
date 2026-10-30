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
| Firma | Open tennis group s.r.o. |
| IČO | 04153235 |
| Sídlo | Majerského 2047/1, Chodov, 149 00 Praha |
| Zápis | Městský soud v Praze, oddíl C, vložka 243336 |
| DPH | neplátce, cena 199 Kč je konečná |
| Autorka obsahu | Ing. Gabriela Černá |

Obsah píše Gabriela, smlouvu uzavírá firma. V dokumentech i v patičce je to
takhle rozlišené, protože IČO patří společnosti, ne jí.

---

## B. Doména u Webglobe

Doména je vedená u Webglobe, aplikace běží na Vercelu. Je potřeba přesměrovat
DNS záznamy z Webglobe na Vercel. **Poštovní záznamy se přitom nesmí sáhnout**,
jinak přestane chodit e-mail.

### B1. Nejdřív ve Vercelu

1. Otevřete projekt ve Vercelu, **Settings → Domains**.
2. Přidejte `mybloomia.com` i `www.mybloomia.com`.
3. Vercel vypíše **konkrétní hodnoty záznamů**, které má doména mít.
   Opište si je. Hodnoty se časem mění, proto se řiďte tím, co vypíše on,
   ne tím, co je napsané kdekoli jinde.

Obvykle to je jeden záznam `A` pro samotnou doménu a jeden `CNAME` pro `www`.

### B2. Pak u Webglobe

1. Přihlaste se do zákaznické administrace Webglobe a otevřete doménu
   `mybloomia.com`. Hledáte správu **DNS záznamů**.
2. **Než cokoli změníte, vyfoťte si celý výpis záznamů.** Je to jediná
   záloha, kterou budete mít, a při chybě se k ní vrátíte za vteřinu.
3. Snižte **TTL** u záznamů, které budete měnit, na nejnižší možnou hodnotu
   (obvykle 300 vteřin). Počkejte tak dlouho, jaká byla původní TTL,
   typicky hodinu. Tím se změna později projeví za minuty místo za den.
4. Změňte záznam `A` pro samotnou doménu na hodnotu z Vercelu. Pokud je
   tam záznamů `A` víc, musí zmizet všechny kromě toho nového.
5. Nastavte `CNAME` pro `www` na hodnotu z Vercelu.
6. **Nechte beze změny** všechny záznamy `MX`, `TXT` a `SRV`. V `TXT`
   bývá SPF a DKIM pro e-mail. Smazat je znamená, že vaše pošta začne
   padat do spamu, a poznáte to až za týden.
7. Pokud je v záznamech `A` s hvězdičkou (`*`), ten taky přepište, nebo
   smažte. Jinak budou podadresy ukazovat na staré místo.

### B3. Nakonec

1. Vraťte se do Vercelu. Během pár minut až hodiny se u domény objeví,
   že je ověřená, a sám vystaví certifikát.
2. Otevřete `https://mybloomia.com` a `https://www.mybloomia.com`.
   Obojí má ukázat prodejní stránku.
3. Projděte odkazy v patičce na všechny tři právní dokumenty.
4. Otevřete `https://mybloomia.com/app` a zkuste onboarding.

`canonical`, `og:url` i `sitemap.xml` už na mybloomia.com ukazují, takže po
připojení budou sedět samy a nic se nemusí měnit v kódu.

### B4. Co se snadno přehlédne

**Data se mezi adresami nepřenášejí.** Prohlížeč je drží zvlášť pro každou
doménu, takže co je zapsané na `ivfbygabi.vercel.app`, se na `mybloomia.com`
neobjeví. Přenést to jde přes **Nastavení → Záloha**: na staré adrese uložit
soubor, na nové načíst.

Z toho plyne jediné pravidlo: **doménu připojte dřív, než aplikaci dáte
prvním ženám.** Jinak bude každá z nich muset stěhovat data ručně.

---

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
