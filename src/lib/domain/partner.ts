/**
 * Rady pro partnera podle skupiny fází a emočního tónu.
 *
 * Žije v doméně, ne ve stránce — čte je i generátor náhledu a partnerský
 * export, takže musí jít o jeden zdroj pravdy.
 */

export interface Advice {
  whatsHappening: string
  do: string[]
  dont: string[]
}

export function adviceFor(group: string, tone: string): Advice {
  const base: Record<string, Advice> = {
    planning: {
      whatsHappening:
        'Zatím jde hlavně o přípravu a sledování cyklu. Působí to nenápadně, ale plánování sexu podle kalendáře dokáže vztah zatížit víc, než se čeká.',
      do: [
        'Berte přípravu jako společnou věc — životospráva se týká obou.',
        'Domluvte se, kdy se o tématu bavit nebudete. Jeden večer v týdnu stačí.',
        'Jděte i vy na vyšetření. Mužský faktor se podílí zhruba na polovině případů.',
      ],
      dont: [
        'Neříkejte „to bude, jen se neseř“. Zní to jako odmítnutí, ne uklidnění.',
        'Nedělejte ze sexu úkol z tabulky.',
      ],
    },
    diagnosis: {
      whatsHappening:
        'Čekání na výsledky je vyčerpávající a vyšetření jsou nepříjemná. Každý telefonát z laboratoře může všechno změnit.',
      do: [
        'Jeďte s ní na vyšetření, i když „to není potřeba“.',
        'Nabídněte se, že budete psát otázky a odpovědi u lékaře. Ona si je nezapamatuje.',
        'Ptejte se „jak ti je“ a pak jen poslouchejte.',
      ],
      dont: [
        'Nehledejte na internetu diagnózu a neposílejte jí odkazy.',
        'Neříkejte „aspoň víme, čím to je“, dokud to neřekne ona sama.',
      ],
    },
    treatment: {
      whatsHappening:
        'Hormonální stimulace je fyzicky i psychicky náročná — nálady kolísají a není to její volba. Břicho může být nafouklé a citlivé, injekce se píchají každý den ve stejný čas.',
      do: [
        'Naučte se píchat injekce. I když je odmítne, nabídněte to.',
        'Hlídejte čas dávek — je to konkrétní pomoc, ne kontrola.',
        'Po odběru vajíček převezměte domácnost bez ptaní.',
        'Řekněte nahlas, že to zvládá. Ona to o sobě teď neví.',
      ],
      dont: [
        'Nekomentujte nálady jako „to jsou ty hormony“, i když to je pravda.',
        'Neptejte se každý den „a co embrya“. Když bude co říct, řekne to.',
      ],
    },
    waiting: {
      whatsHappening:
        'Deset dní čekání na výsledek, kdy se nedá dělat vůbec nic. Každý pocit v těle se rozebírá dokola a každý den trvá týden.',
      do: [
        'Naplánujte něco, co zabere hlavu — film, výlet, cokoliv mimo téma.',
        'Buďte s ní u odběru krve a u telefonátu s výsledkem.',
        'Když chce mlčet, mlčte s ní.',
      ],
      dont: [
        'Neříkejte „mám dobrý pocit“ ani „připrav se, že to nevyjde“. Obojí bolí.',
        'Netlačte na test dřív, než řekne klinika.',
      ],
    },
    loss: {
      whatsHappening:
        'Ztratili jste dítě. Nezáleží na tom, v kolikátém týdnu — ta ztráta je skutečná a truchlení je namístě. Vy truchlíte taky, jen možná jinak.',
      do: [
        'Řekněte „mrzí mě to“ a nic víc. Nemusíte to opravit.',
        'Pojmenujte to, co se stalo. Mlčení bolí víc než nešikovná věta.',
        'Nechte ji mluvit dokola. Truchlení nemá logiku ani plán.',
        'Hlídejte její stav i po týdnech. Nejhůř bývá, až všichni ostatní zapomenou.',
      ],
      dont: [
        'Nikdy neříkejte „aspoň víš, že můžeš otěhotnět“ ani „bylo to tak nejlepší“.',
        'Neplánujte další pokus dřív, než to otevře ona.',
        'Nezakazujte si vlastní smutek, abyste byl silný.',
      ],
    },
    pregnancy: {
      whatsHappening:
        'Těhotenství po léčbě není jen radost. Bývá plné strachu, který nezmizí po prvním ultrazvuku ani po dvacátém týdnu.',
      do: [
        'Choďte s ní na ultrazvuky, i na ty rutinní.',
        'Berte úzkost vážně — po tom, čím prošla, dává smysl.',
        'Převezměte fyzicky náročné věci doma bez upozorňování.',
      ],
      dont: [
        'Neříkejte „už se konečně raduj“. Radost přijde, až bude moct.',
        'Nesrovnávejte její těhotenství s tím, co viděl někdo jiný.',
      ],
    },
    birth: {
      whatsHappening:
        'Porod se blíží nebo právě proběhl. První dny jsou směsí vyčerpání, hormonů a obrovské zodpovědnosti.',
      do: [
        'Znejte porodní plán a mluvte za ni, když nemůže.',
        'V porodnici řešte praktické věci — jídlo, pití, papírování.',
        'Filtrujte návštěvy. To je vaše práce, ne její.',
      ],
      dont: [
        'Neříkejte „hlavně že je miminko zdravé“, když mluví o průběhu porodu.',
        'Nefotografujte a nesdílejte nic bez jejího svolení.',
      ],
    },
    baby: {
      whatsHappening:
        'Šestinedělí a první měsíce. Nevyspalost, hojení, hormonální propad a k tomu úplně nový člověk, který na vás závisí.',
      do: [
        'Vstávejte v noci taky — i když kojí, můžete přebalit a přinést.',
        'Berte domácnost jako svou práci, ne jako pomoc.',
        'Sledujte, jestli se nepropadá. Poporodní deprese je nemoc, ne slabost.',
        'Řekněte jí, že ji vidíte. Nejen jako matku.',
      ],
      dont: [
        'Neptejte se „co mám udělat“. Rozhlédněte se a udělejte to.',
        'Neříkejte „já jsem taky unavený“ jako protiargument.',
      ],
    },
  }

  const advice = base[group] ?? base.planning
  if (tone === 'grieving' && group !== 'loss') {
    return {
      ...advice,
      do: ['Buďte blízko a nesnažte se to opravit.', ...advice.do],
    }
  }
  return advice
}
