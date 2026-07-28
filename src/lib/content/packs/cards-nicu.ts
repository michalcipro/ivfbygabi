import type { ContentPack, DailyCard } from '../types'

/**
 * Denní karty pro předčasný porod, NICU a návrat domů.
 *
 * Tón je záměrně klidný a orientující. Matka na novorozenecké JIP nepotřebuje
 * dramatizaci ani povzbuzování — potřebuje vědět, co znamenají čísla na monitoru
 * a co konkrétně dneska může udělat ona sama.
 *
 * Nikde neuvádíme prognózy podle týdne narození. Ty patří výhradně
 * neonatologovi, který zná konkrétní dítě.
 */

const pretermBirth: DailyCard[] = [
  {
    id: 'cn-birth-0',
    phases: ['preterm_birth'],
    day: 0,
    headline: 'Nepřipravená na tohle nebyl nikdo.',
    body: 'Miminko se narodilo dřív, než mělo. Ať už to šlo rychle nebo se to táhlo, dnešek si nemusíte pamatovat celý. Odloučení hned po porodu je to nejtěžší, co se dá zažít — a není to vaše chyba.',
    whatsHappening: [
      'Miminko je na oddělení, kde má nepřetržitý dohled.',
      'Můžete být příliš rozrušená na to, abyste vnímala informace. To je normální.',
      'Odsávání mléka se obvykle doporučuje začít v prvních hodinách.',
    ],
    task: 'Zeptejte se, kdy za miminkem můžete jít a co si k němu smíte vzít.',
    reflection: 'Co byste dnes potřebovala slyšet?',
    tip: 'Poproste někoho, ať si zapisuje, co vám lékaři řeknou. Vy si to teď nezapamatujete.',
  },
  {
    id: 'cn-birth-1',
    phases: ['preterm_birth'],
    dayRange: [1, 3],
    headline: 'První dny bez miminka v náručí.',
    body: 'Přijít na oddělení a vidět své dítě mezi přístroji je zážitek, na který se nedá připravit. Většina rodičů popisuje první návštěvu jako nejtěžší chvíli celého pobytu.',
    whatsHappening: [
      'Inkubátor udržuje teplotu, kterou si miminko ještě neumí držet samo.',
      'Můžete se ho dotýkat — zeptejte se, jak.',
      'Odsávání každé 2–3 hodiny, i v noci, pomáhá rozjet laktaci.',
    ],
    task: 'Poproste sestru, ať vám ukáže, jak se miminka dotýkat.',
    reflection: 'Co jste cítila, když jste ho poprvé viděla?',
  },
]

const nicu: DailyCard[] = [
  {
    id: 'cn-nicu-0',
    phases: ['nicu'],
    dayRange: [0, 2],
    headline: 'Čísla na monitoru — co vlastně znamenají.',
    body: 'Monitor ukazuje obvykle tři hodnoty: saturaci kyslíkem, tepovou frekvenci a dechovou frekvenci. Alarm se spouští často a ve většině případů neznamená krizi — jen že se hodnota na chvíli vychýlila.',
    whatsHappening: [
      'Saturace ukazuje, kolik kyslíku je v krvi.',
      'Alarmy jsou nastavené citlivě schválně.',
      'Sestry vědí, který alarm je důležitý. Vy se to naučíte taky.',
    ],
    task: 'Zeptejte se, které hodnoty u vašeho miminka sledují a jaké má cílové rozmezí.',
    reflection: 'Co vás na oddělení děsí nejvíc?',
    tip: 'Nedívejte se na monitor víc než na miminko. Sestra si alarmů všimne dřív než vy.',
  },
  {
    id: 'cn-nicu-1',
    phases: ['nicu'],
    dayRange: [3, 6],
    headline: 'Klokánkování je to nejcennější, co můžete udělat.',
    body: 'Kontakt kůže na kůži stabilizuje miminku teplotu, dech i tep, podporuje tvorbu mléka a snižuje stres vám oběma. Je to jediná věc, kterou nezastane žádný přístroj ani sestra.',
    whatsHappening: [
      'Klokánkování se doporučuje co nejdřív a co nejdéle.',
      'Miminko během něj často usne hlubokým spánkem.',
      'Váš partner může klokánkovat taky.',
    ],
    task: 'Domluvte si na dnešek klokánkování. Ideálně alespoň na hodinu.',
    reflection: 'Jaké to bylo, mít ho poprvé na hrudi?',
  },
  {
    id: 'cn-nicu-2',
    phases: ['nicu'],
    dayRange: [7, 13],
    headline: 'Sondička není krok zpátky.',
    body: 'Nazogastrická sonda umožňuje krmit miminko dřív, než umí koordinovat sání, polykání a dýchání zároveň. Tuhle schopnost se většina dětí učí kolem 34. týdne korigovaně.',
    whatsHappening: [
      'Sonda šetří energii, kterou by miminko spotřebovalo sáním.',
      'Do sondy se dá dávat vaše odstříkané mléko.',
      'Přechod na sání bývá postupný, ne skokový.',
    ],
    task: 'Zeptejte se, kolik mléka miminko dnes dostalo a jak roste dávka.',
    reflection: 'Za co si dnes můžete poděkovat?',
  },
  {
    id: 'cn-nicu-3',
    phases: ['nicu'],
    dayRange: [14, 27],
    headline: 'Život v rytmu oddělení.',
    body: 'Po dvou týdnech začíná být pobyt maraton. Dojíždění, odsávání, čekání na vizitu, informace po telefonu. Únava se sčítá a nikdo se neptá, jak jste na tom vy.',
    whatsHappening: [
      'Kroky dopředu a zpátky se střídají — to je běžný průběh.',
      'Odsávání v noci je vyčerpávající, ale drží laktaci.',
      'Většina rodičů popisuje třetí týden jako psychicky nejhorší.',
    ],
    task: 'Řekněte si dnes o jednu konkrétní věc — jídlo, odvoz, hlídání staršího dítěte.',
    reflection: 'Kdo se ptá, jak jste na tom vy?',
    callDoctorIf: [
      'Cítíte se dlouhodobě zoufalá nebo otupělá.',
      'Nemůžete spát ani ve chvílích, kdy máte příležitost.',
      'Napadají vás myšlenky na ublížení sobě — ozvěte se ihned.',
    ],
  },
  {
    id: 'cn-nicu-4',
    phases: ['nicu'],
    dayRange: [28, 55],
    headline: 'Mezníky, které se počítají.',
    body: 'Vyndání sondy, první koupání, přesun z inkubátoru do postýlky, první plné nakojení. Na oddělení jsou to drobnosti — pro vás jsou to milníky.',
    whatsHappening: [
      'Kritéria propuštění bývají: stabilní teplota, plné krmení, přibývání na váze.',
      'Váha není jediné kritérium.',
      'Datum propuštění se často několikrát posune.',
    ],
    task: 'Zapište si do kroniky poslední věc, kterou miminko zvládlo poprvé.',
    reflection: 'Co se za poslední týden změnilo?',
  },
  {
    id: 'cn-nicu-5',
    phases: ['nicu'],
    dayRange: [56, 200],
    headline: 'Dlouhý pobyt má vlastní pravidla.',
    body: 'Když pobyt trvá měsíce, přestává jít o čekání a začíná jít o vydržení. Je legitimní být unavená, naštvaná i otupělá — nic z toho neznamená, že miminko milujete míň.',
    whatsHappening: [
      'Dlouhé pobyty jsou psychicky nejnáročnější část celé cesty.',
      'Sourozenci doma to nesou taky.',
      'Odborná psychologická podpora bývá dostupná přímo v nemocnici.',
    ],
    task: 'Zeptejte se, jestli je na oddělení k dispozici psycholog. Není to slabost.',
    reflection: 'Co vám pomáhá zvládat jeden den po druhém?',
  },
]

const comingHome: DailyCard[] = [
  {
    id: 'cn-home-0',
    phases: ['coming_home'],
    dayRange: [0, 2],
    headline: 'Doma. A najednou ticho bez monitorů.',
    body: 'Propuštění je úleva i panika zároveň. Na oddělení hlídaly přístroje, doma jste to vy. Skoro každý rodič popisuje první noc doma jako probdělou.',
    whatsHappening: [
      'Propuštění znamená, že miminko splnilo kritéria stability.',
      'Kontrolování dechu ve spánku je v prvních dnech normální chování.',
      'Následná péče bude sledovat vývoj dál.',
    ],
    task: 'Zjistěte si, na koho se máte obrátit mimo ordinační hodiny.',
    reflection: 'Jaké to bylo, projít poprvé domovními dveřmi s miminkem?',
    callDoctorIf: [
      'Miminko odmítá pít nebo je netečné.',
      'Má zvýšenou teplotu — u novorozence vždy ihned k lékaři.',
      'Modrá kolem úst, přestávky v dýchání nebo zatahování mezižebří.',
    ],
  },
  {
    id: 'cn-home-1',
    phases: ['coming_home'],
    dayRange: [3, 6],
    headline: 'První týden doma.',
    body: 'Rytmus, který jste znala z oddělení, doma neplatí. Vytvořit si vlastní chvíli trvá — a nemusí to jít hned.',
    whatsHappening: [
      'Krmení bývá zpočátku po stejných intervalech jako v nemocnici.',
      'Návštěvy v prvních týdnech raději omezte.',
      'Miminko po předčasném porodu bývá citlivější na podněty.',
    ],
    task: 'Domluvte se s rodinou, že návštěvy počkají. Napište to jednou zprávou všem.',
    reflection: 'Co je doma lepší, než jste čekala?',
  },
  {
    id: 'cn-home-2',
    phases: ['coming_home'],
    dayRange: [7, 20],
    headline: 'Korigovaný věk je vaše nová jednotka.',
    body: 'Od teď se vývoj hodnotí podle data, kdy mělo miminko původně přijít. Aplikace to počítá za vás — a stojí za to si na to zvyknout, protože srovnávání s donošenými dětmi nikam nevede.',
    whatsHappening: [
      'Korigovaný věk se používá zhruba do dvou let.',
      'Očkování se naopak řídí skutečným datem narození.',
      'Následná péče sleduje vývoj v pravidelných intervalech.',
    ],
    task: 'Zapište si do kalendáře termín následné poradny.',
    reflection: 'Jak odpovídáte, když se vás lidé ptají, kolik je miminku?',
  },
]

export const pack: ContentPack = {
  dailyCards: [...pretermBirth, ...nicu, ...comingHome],
}
