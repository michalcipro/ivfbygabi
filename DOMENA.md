# Připojení domény mybloomia.com krok za krokem

Doména je u Webglobe, web běží na Vercelu. Nic se nepřenáší, jen se u
Webglobe přepíší dva DNS záznamy. Pošta zůstane beze změny, pokud se budete
držet části 3.

Celé to trvá zhruba dvacet minut práce a pak se čeká na certifikát.

---

## Část 0. Než na cokoli sáhnete: záloha

Otevřete na Macu **Terminál** a vložte tohle celé najednou. Uloží se tím
současný stav všech DNS záznamů na plochu.

```sh
{ for t in A AAAA CNAME MX TXT NS CAA SRV SOA; do
    echo "===== $t ====="
    dig +short mybloomia.com "$t"
    dig +short www.mybloomia.com "$t"
  done; } | tee ~/Desktop/dns-mybloomia-zaloha.txt
```

Na ploše vznikne soubor `dns-mybloomia-zaloha.txt`. **Nemažte ho, dokud web
nepoběží.** Je to jediná cesta zpátky, když se něco pokazí.

Pro jistotu si ještě v administraci Webglobe vyfoťte obrazovku s výpisem
záznamů. Ne každý typ záznamu je z Terminálu vidět.

---

## Část 1. Vercel: přidání domény

1. Otevřete <https://vercel.com> a přihlaste se.
2. Klikněte na projekt s BlooMiou.
3. Nahoře **Settings**, v levém sloupci **Domains**.
4. Do pole vložte a dejte **Add**:

```
mybloomia.com
```

5. Vercel se zeptá, jestli přidat i `www`. **Ano, přidejte obojí.**
   Obvykle nabídne variantu, kde `www.mybloomia.com` přesměrovává na
   `mybloomia.com`. Tu zvolte.
6. Vercel teď ukáže červený nebo žlutý pruh **Invalid Configuration**
   a pod ním **tabulku s DNS záznamy**, které máte nastavit.

### Tohle je ten důležitý okamžik

**Opište si hodnoty z té tabulky.** Vercel je čas od času mění a platí to,
co ukazuje on, ne to, co je napsané kdekoli jinde, včetně tohoto souboru.

Zapište si je sem, než půjdete dál:

| Typ | Název | Hodnota z Vercelu |
|---|---|---|
| A | @ | ................................ |
| CNAME | www | ................................ |

**Kontrolní hodnoty.** Vercel dlouhodobě používá tyhle dvě. Pokud vám na
obrazovce ukazuje totéž, je všechno v pořádku a můžete rovnou kopírovat.
Pokud ukazuje něco jiného, **platí jeho hodnoty**, ne tyhle:

```
76.76.21.21
```

```
cname.vercel-dns.com
```

---

## Část 2. Webglobe: přepsání záznamů

1. Přihlaste se do zákaznické administrace Webglobe.
2. Najděte doménu **mybloomia.com** a otevřete u ní správu **DNS záznamů**.
   Bývá to pod názvem DNS, Správa DNS nebo DNS záznamy.
3. **Nepřepínejte nameservery.** Doména zůstane na nameserverech Webglobe,
   mění se jen obsah záznamů. Kdybyste nameservery přehodil na Vercel,
   musela by se tam znovu vytvořit i pošta a to je zbytečné riziko.

### 2a. Snižte TTL a počkejte

Než začnete měnit hodnoty, najděte u záznamů **A** a **CNAME** položku
**TTL** a nastavte ji na nejnižší možnou. Vložte:

```
300
```

Uložte a **počkejte tak dlouho, jaká tam byla původní hodnota TTL**,
typicky hodinu. Tenhle krok se dá přeskočit, ale pak se změna může
projevovat až den. S ním to jsou minuty.

### 2b. Záznam A pro samotnou doménu

Najděte záznam typu **A** pro doménu bez `www`. V poli Název bývá prázdno
nebo zavináč.

| Pole | Co vložit |
|---|---|
| Typ | `A` |
| Název | `@` (nebo nechte prázdné, podle toho, co formulář chce) |
| Hodnota | hodnota z Vercelu, obvykle `76.76.21.21` |
| TTL | `300` |

**Pokud je záznamů A víc, musí zůstat jen tenhle jediný.** Ostatní smažte.

**Pokud existuje záznam typu AAAA** pro doménu bez `www`, smažte ho taky.
Prohlížeč by ho upřednostnil a chodil by na staré místo.

### 2c. Záznam pro www

| Pole | Co vložit |
|---|---|
| Typ | `CNAME` |
| Název | `www` |
| Hodnota | hodnota z Vercelu, obvykle `cname.vercel-dns.com` |
| TTL | `300` |

Pokud pro `www` existuje záznam **A** nebo **AAAA**, smažte ho. Vedle
CNAME nesmí stát.

Některé formuláře chtějí na konci hodnoty tečku. Pokud vám Webglobe hodnotu
nepřijme, zkuste:

```
cname.vercel-dns.com.
```

### 2d. Hvězdička

Pokud je v záznamech **A** nebo **CNAME** s názvem `*`, přepište ho na
stejnou hodnotu jako záznam pro `www`, nebo ho smažte. Jinak budou
podadresy ukazovat na staré místo.

---

## Část 3. Čeho se nesmíte dotknout

Tohle je jediné místo, kde se dá nadělat skutečná škoda. Projděte si to,
než dáte uložit.

| Typ záznamu | Co s ním | Proč |
|---|---|---|
| **MX** | nechat přesně jak je | bez nich přestane chodit pošta na doméně |
| **TXT** | nechat přesně jak je | je v nich SPF a DKIM, bez nich začne vaše pošta padat do spamu |
| **SRV** | nechat | používá je například Microsoft 365 |
| **CNAME pro jiná jména** | nechat | bývají tam ověřovací záznamy služeb |
| **NS a SOA** | nesahat | o ty se stará Webglobe |

Pošta se pozná podle toho, že se **neláme hned**. Smazaný SPF záznam se
projeví až tím, že vám lidé po týdnu začnou psát, že jim nic nechodí.
Proto ta fotka obrazovky z části 0.

### CAA, pokud tam je

Pokud má doména záznam typu **CAA**, Vercel si nemusí umět vystavit
certifikát. Buď ten záznam smažte, nebo k němu přidejte tenhle řádek:

| Pole | Co vložit |
|---|---|
| Typ | `CAA` |
| Název | `@` |
| Hodnota | `0 issue "letsencrypt.org"` |

Pokud žádný CAA záznam nemáte, nic nepřidávejte. Je to v pořádku.

---

## Část 4. Ověření

Počkejte pět minut a v Terminálu spusťte:

```sh
{ echo "A      :"; dig +short mybloomia.com A
  echo "AAAA   :"; dig +short mybloomia.com AAAA
  echo "www    :"; dig +short www.mybloomia.com
  echo "MX     :"; dig +short mybloomia.com MX
  echo "TXT    :"; dig +short mybloomia.com TXT; }
```

Co má vyjít:

- u **A** jediná adresa, a to ta z Vercelu,
- u **AAAA** nic,
- u **www** jméno `cname.vercel-dns.com` a pod ním nějaká adresa,
- u **MX** a **TXT** přesně to, co bylo v záloze z části 0. Porovnejte to.

Pak se vraťte do Vercelu na **Settings, Domains**. U obou domén se do
několika minut objeví zelená fajfka a **Valid Configuration**. Certifikát
si Vercel vystaví sám, nemusíte nic dělat.

Když to po patnácti minutách pořád svítí červeně, dejte ve Vercelu
**Refresh** u domény. Někdy se jen nestihl podívat.

### Zkouška v prohlížeči

Otevřete postupně a u každé zkontrolujte zámek v adresním řádku:

```
https://mybloomia.com
```
```
https://www.mybloomia.com
```
```
https://mybloomia.com/obchodni-podminky
```
```
https://mybloomia.com/ochrana-osobnich-udaju
```
```
https://mybloomia.com/zdravotni-upozorneni
```
```
https://mybloomia.com/app/
```

Pak v aplikaci jděte do **Nastavení úplně dolů** a zkontrolujte, že je
tam datum sestavení. Tím máte potvrzeno, že se servíruje nová verze.

---

## Část 5. Když se něco pokazí

Nic z toho není nevratné. V administraci Webglobe vraťte záznamy do stavu
ze souboru `dns-mybloomia-zaloha.txt` a z fotky obrazovky. Do pár minut
je všechno jako předtím.

Pošta se rozbije jedině tehdy, když smažete MX nebo TXT. I to se vrátí
z té zálohy.

---

## Část 6. Hned po spuštění: přesun vašich dat

**Data se mezi adresami nepřenášejí.** Prohlížeč je drží zvlášť pro každou
doménu. Co máte zapsané na `ivfbygabi.vercel.app`, se na `mybloomia.com`
neobjeví.

Přesun je na tři kroky:

1. Na **staré** adrese `ivfbygabi.vercel.app/app/` jděte do
   **Nastavení, Záloha** a uložte soubor.
2. Otevřete **novou** adresu `mybloomia.com/app/`.
3. Tam v **Nastavení, Záloha** ten soubor načtěte.

Udělejte to **dřív, než aplikaci dáte prvním ženám**. Kdyby ji dostaly na
staré adrese, musela by tohle udělat každá z nich ručně.

Starou adresu `ivfbygabi.vercel.app` Vercel nezruší, bude fungovat dál.
Po přesunu ji už nikomu neposílejte.

---

## Část 7. Co zbývá po doméně

Technicky nic. Aplikace i dokumenty jsou hotové, podmínky mají účinnost
od 3. 11. 2026 a placené předplatné není v provozu, takže se nic neúčtuje.

Nevyřízené zůstává jen tohle a nic z toho nebrání tichému startu zdarma:

- kontrola dokumentů advokátem, nutná před spuštěním plateb,
- fotografie Gabriely na prodejní stránku, teď tam drží místo znak,
- původní soubor loga,
- rozhodnutí o platební bráně a o tom, jak se ověří zaplacení.
