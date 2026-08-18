# Co zbývá, než BlooMia půjde do provozu

Stav k 16. 8. 2026, větev `claude/ivf-gabi-platform-mxgp3c`, poslední
commit `f612875`.

Tohle není seznam přání. Každý bod je buď ověřený nález, nebo věc, kterou
mi musíš dodat ty. U každého je napsané, kdo ho udělá a jak dlouho to
zabere.

---

## Krátká odpověď

**Technicky je aplikace skoro hotová. Stojí to na čtyřech věcech a tři
z nich neudělám já:**

| Co | Kdo | Bez toho nelze |
|---|---|---|
| IČO, sídlo, právní kontrola dokumentů | ty a právník | spustit placený provoz |
| Rozhodnutí o platební bráně | ty | vybírat peníze |
| Doména mybloomia.com | ty (nastavení DNS) | spustit pod vlastní adresou |
| Osm oprav v kódu | já, zhruba dva dny práce | pustit to zodpovědně |

Bez platby se dá spustit **zdarma a hned**, jakmile udělám opravy z části
B a ty dodáš doménu. To je reálná varianta, viz „Dvě cesty“ na konci.

---

## A. Co už hotové je

Ať je vidět, kde stojíme.

- **Aplikace funguje.** 284 testů, typecheck čistý, audit 1280 tras
  mobilního zobrazení bez chyby, žádné přetečení stránky do stran ani při
  dvousetprocentním písmu.
- **Funguje bez sítě.** Po prvním otevření se uloží celá, dá se přidat na
  plochu a má ikonu.
- **Aktualizuje se sama.** Nová verze se nasadí bez ptaní: aplikace se na
  ni ptá při startu, při návratu do ní, po návratu signálu a jednou za
  dvacet minut. Před výměnou uloží rozepsané formuláře a po ní vrátí ženu
  na tutéž stránku i na tutéž pozici. Odloží se jedině tehdy, když má
  zrovna kurzor v poli, a dokončí se, jakmile z něj odejde.
- **Obsah**: 404 položek katalogu, 174 denních karet, 162 pojmů, 21 fází.
  Celkem 830 kusů obsahu.
- **Prodejní stránka** je hotová a nasazená.
- **Tři právní dokumenty** existují jako návrh k právní kontrole.
- **Logika cyklu** je opravená: zápis výsledku přepne celou aplikaci,
  cyklus se nedá omylem uzavřít se zbylým embryem.
- **Data se dají zálohovat** a přenést do jiného telefonu.
- **Nic se nikam neodesílá.** Jediný odchozí požadavek je vypnutý.

---

## B. Technické opravy, které udělám já

Seřazené podle toho, co by mě mrzelo nejvíc, kdyby to zůstalo.

### B1. „Smazat všechno“ nesmaže fotky

**Ověřeno dnes:** `reset()` v `store.ts:731` volá jen `save()`, které
zapisuje do localStorage. Fotky leží v IndexedDB a nemaže je nic.

Žena potvrdí dialog, který slibuje výmaz, a její vyfocené protokoly
zůstanou v zařízení. Zároveň je to porušení práva na výmaz podle GDPR,
a zásady ochrany údajů, které jsem psal, o výmazu mluví.

**Práce:** malá. **Blokuje:** spuštění, i to bezplatné.

### B2. Fotky jedné ženy se dostanou do zálohy druhé

Obnova zálohy bez fotek nevyčistí mezipaměť, takže staré snímky zůstanou
a vyexportují se do další zálohy. Na sdíleném tabletu nebo po předání
telefonu je to únik cizích zdravotních fotografií.

**Práce:** malá. **Blokuje:** spuštění.

### B3. Bezpečnostní hlavičky

**Ověřeno dnes:** `vercel.json` obsahuje jediný typ hlavičky,
`Cache-Control`. Chybí `Content-Security-Policy`,
`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`
a `frame-ancestors`.

CSP je tu důležitější než obvykle: prodejní stránka a aplikace sdílí jeden
původ, takže jakýkoli měřicí skript vložený na prodejní stránku by měl
technickou možnost číst deníky z úložiště.

**Práce:** malá, jeden soubor. **Blokuje:** spuštění.

### B4. Poškozený jeden údaj smaže deník

`load()` nekontroluje tvar načtených dat. Když jediné pole nebude mít
očekávaný typ, `migrate()` spadne, aplikace nastartuje prázdná a první
uložení přepíše skutečná data. Obnova ze zálohy tuhle kontrolu má, vlastní
úložiště ne.

**Práce:** střední. **Blokuje:** spuštění. Ztráta deníku je z pohledu
uživatelky ta nejhorší možná porucha.

### B5. `robots.txt` a `noindex` na aplikaci

**Ověřeno dnes:** ani jedno neexistuje. Celý obsah si odnesou vyhledávače
i sběrači pro jazykové modely.

**Práce:** malá. **Blokuje:** ne, ale čím dřív, tím líp.

### B6. Kontrola dat ze zálohy u fotek

Obnova uloží cokoli, co je v poli `photos`. Chybí kontrola, že jde
skutečně o obrázek.

**Práce:** malá. **Blokuje:** ne.

### B7. Zámek aplikace

Není PIN ani biometrika. Kdo vezme odemčený telefon, čte celý deník. Pro
tuhle cílovou skupinu je to nejpravděpodobnější únik: ne útočník, ale
partner nebo matka.

**Práce:** větší. **Blokuje:** ne, ale doporučuji před placeným provozem.

### B8. Šifrovaná záloha

Záloha je čitelný text včetně fotek a končí ve složce Stažené, kterou
telefony běžně synchronizují do cloudu.

**Práce:** větší. **Blokuje:** ne.

---

## C. Co potřebuji od tebe

Tohle je skutečná brzda. Bez těchhle údajů se placený provoz spustit nedá
a já je nevymyslím.

| Údaj | Kam patří | Poznámka |
|---|---|---|
| **IČO** | patička, obchodní podmínky, zásady | 2 místa na stránce, 21 v podmínkách |
| **Sídlo** | tamtéž | |
| **Zápis v rejstříku** | obchodní podmínky | živnostenský, nebo obchodní se spisovou značkou |
| **DPH** | obchodní podmínky, cena | jsi plátkyně? Mění to formulaci ceny |
| **Fotografie Gabriely** | prodejní stránka | teď tam drží místo znak |
| **Původní soubor loga** | `public/` | mám rekonstrukci, akvarel je aproximace |

Placeholderů `DOPLNIT` je celkem **42**: 21 v obchodních podmínkách,
18 v zásadách ochrany údajů, 1 ve zdravotním upozornění, 2 na prodejní
stránce.

---

## D. Právní část

### D1. Kontrola právníkem

Dokumenty jsem napsal jako profesionální návrh, ale nejsem právník a je to
v nich napsané. Před placeným provozem musí projít kontrolou. Nejcitlivější
místa:

- **odstoupení od smlouvy u digitálního obsahu**: čtrnáctidenní lhůta
  a podmínky, za kterých zaniká, se váží na konkrétní ustanovení
  občanského zákoníku,
- **zvláštní kategorie údajů**: údaje o léčbě neplodnosti spadají pod
  článek 9 GDPR, což zvedá laťku i když všechno zůstává v telefonu,
- **povinnost jmenovat pověřence pro ochranu údajů**: podle mě nevzniká,
  ale ať to posoudí právník,
- **hranice zdravotnického prostředku**: aplikace jím není a nikde to
  netvrdí, ale text je vhodné posoudit i z pohledu předpisů o reklamě na
  zdravotní služby.

### D2. Zpracovatelské smlouvy

Podle článku 28 GDPR je potřeba smlouva s každým, kdo pro tebe zpracovává
údaje: hosting (Vercel), platební brána, a pokud se zapne, i přeposílací
služba formuláře.

### D3. Souhlas u zpětné vazby

Formulář může obsahovat zdravotní údaj. V zásadách to řeším výslovným
souhlasem, ale text musí projít kontrolou spolu se zbytkem.

---

## E. Platba

**Ověřeno dnes:** `store.ts:391` říká, že předplatné je jen stav
a neprobíhá žádná platba. Nic není zamčené.

Než se spustí placený provoz, je potřeba rozhodnout:

1. **Kdo bude odbavovat platby.** Stripe, GoPay, Comgate nebo jiná brána.
   Rozhoduje cena za transakci, podpora opakovaných plateb a to, jak
   rychle je zřízení.
2. **Jestli se předplatné bude automaticky obnovovat.** Obchodní podmínky
   mají připravené obě varianty, jedna se smaže.
3. **Jak se ověří, že žena zaplatila.** Tohle je zásadní: aplikace nemá
   server ani účty, takže nemá jak platbu ověřit. Klientská kontrola
   předplatného je jen zdvořilá prosba, obejde ji kdokoli za minutu.

Bod 3 znamená rozhodnutí o architektuře. Buď se přidá minimální server
s ověřováním, nebo se přijme, že placení je dobrovolné.

Zůstává v platnosti, co jsi říkala: žena nesmí platit jen za šťastný
konec. Zamykat obsah uprostřed léčby je horší než nevydělat.

---

## F. Doména

DNS pro `mybloomia.com` teď ukazuje jinam (A záznamy na 195.181.248.247
plus poštovní záznamy). Postup:

1. Ve Vercelu přidat doménu k projektu.
2. U registrátora přesměrovat A a CNAME záznamy podle toho, co Vercel
   vypíše. **Poštovní záznamy (MX) nechat být**, jinak přestane chodit
   e-mail.
3. Počkat na certifikát, obvykle jednotky minut.
4. Změnit `canonical` a `og:url` na stránce, teď už na mybloomia.com
   ukazují, takže po připojení budou sedět.

Tohle ti odsud neudělám, do administrace registrátora nevidím. Ale
projdu to s tebou krok za krokem, až budeš u počítače.

---

## G. Obsah

**Ověřeno dnes: devět fází má méně než deset denních karet.**

| Fáze | Karet |
|---|---|
| Transfer | 1 |
| Oplození | 2 |
| Odběr vajíček | 3 |
| Genetická vyšetření | 3 |
| Čekání na další pokus | 4 |
| Příprava na IVF | 4 |
| Opakované neúspěchy | 6 |
| Pozitivní hCG | 7 |
| Příprava těla | 9 |

Karta dne díky opravě nikdy nechybí, ale v těchhle fázích se po pár dnech
začne opakovat. Nejhorší je fáze **Transfer** s jedinou kartou a
**Pozitivní hCG** se sedmi, protože obojí je citlivé období, kde má obsah
největší cenu.

**Práce:** zhruba šedesát až sto karet, tedy několik dní psaní. Nebrání
spuštění, ale je to největší rozdíl mezi „funguje“ a „stojí to za 199 Kč“.

---

## H. Postup krok za krokem

### Fáze 1: než pustíme cokoliv (já, zhruba dva dny)

1. Opravit mazání fotek při resetu a vždy při obnově (B1, B2).
2. Doplnit bezpečnostní hlavičky do `vercel.json` (B3).
3. Přidat kontrolu tvaru dat při načtení (B4).
4. Přidat `robots.txt` a `noindex` na aplikaci (B5).
5. Přidat kontrolu obrázků ze zálohy (B6).
6. Přeměřit: testy, audit, offline start, obnova zálohy.

### Fáze 2: tvoje údaje (ty)

7. Poslat IČO, sídlo, zápis v rejstříku a informaci o DPH.
8. Poslat fotografii a původní soubor loga.
9. Já je doplním, placeholderů ubude ze 42 na nulu.

### Fáze 3: doména (spolu, jedno odpoledne)

10. Přidat doménu ve Vercelu.
11. Přepsat DNS u registrátora, poštovní záznamy nechat být.
12. Ověřit certifikát a všechny odkazy.

### Fáze 4: právo (právník, podle jeho kapacity)

13. Nechat zkontrolovat tři dokumenty.
14. Zapracovat připomínky.
15. Uzavřít zpracovatelské smlouvy.

### Fáze 5: tichý start bez platby

16. Spustit pod vlastní doménou, zdarma, bez placené brány.
17. Dát to malé skupině žen. Deset až dvacet stačí.
18. Sbírat zpětnou vazbu formulářem. Do té doby zapnout přeposílací
    službu, nebo nechat odesílání přes poštovního klienta.

### Fáze 6: obsah

19. Dopsat denní karty pro devět chudých fází (G).
20. Zapracovat, co vyjde ze zpětné vazby.

### Fáze 7: placený provoz

21. Vybrat platební bránu a rozhodnout o automatickém obnovení.
22. Rozhodnout otázku ověřování platby, viz E3.
23. Nasadit zámek aplikace (B7) a šifrovanou zálohu (B8).
24. Spustit placené předplatné.

---

## Dvě cesty

**Rychlá: tichý start zdarma.** Fáze 1 až 3 a 5. Reálně to znamená moje
dva dny práce, tvoje údaje a jedno odpoledne s doménou. Právník je u
bezplatného provozu méně naléhavý, ale zásady ochrany údajů mít musíš tak
jako tak. Můžeš být venku během týdne.

**Úplná: placený provoz.** Všech sedm fází. Nejdelší je právník a
rozhodnutí o ověřování platby, protože to může znamenat server.

Doporučuji rychlou. Aplikace, kterou používá dvacet žen, ti řekne za dva
týdny víc než další měsíc mého psaní.

---

## Co bych nedělal

- Nespouštěl bych placené předplatné, dokud není vyřešené, jak se platba
  ověřuje. Vybírat peníze za něco, co se dá obejít vypnutím a zapnutím
  přepínače, je horší než nevybírat nic.
- Neinvestoval bych do ochrany obsahu proti kopírování. Celý obsah je
  v jednom souboru, který si prohlížeč musí stáhnout. Podrobně
  v `BEZPECNOST.md`, sekce 5.
- Nedělal bych z toho těhotenskou aplikaci. To jsi říkala sama a je to
  správně.
