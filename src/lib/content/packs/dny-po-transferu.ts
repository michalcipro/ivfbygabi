import { transferDay } from '../../domain/transfer-journey'
import type { ContentItem, ContentPack } from '../types'

/**
 * Dny po transferu jako články ke čtení.
 *
 * Obrazovka „Po transferu“ ukazuje aktuální den. Tenhle balík dělá něco
 * jiného: dá se v něm číst dopředu i zpátky, dohledat konkrétní den
 * a poslat ho partnerovi.
 *
 * -------------------------------------------------------- JEDEN ZDROJ ---
 * Texty se **nepíšou znovu**. Skládají se voláním `transferDay()`, tedy
 * stejné funkce, která pohání obrazovku. Kdyby se embryologie psala dvakrát,
 * jednou by se rozešla a žena by v aplikaci našla dvě různá tvrzení o tomtéž
 * dni.
 *
 * ------------------------------------------------------------ D3 vs D5 ---
 * Den po transferu neříká nic, dokud se neví, jak staré embryo se přenášelo.
 * Čtvrtý den po transferu D3 embrya a čtvrtý den po transferu blastocysty
 * jsou dvě úplně jiné situace: v prvním případě se embryo teprve stává
 * blastocystou, ve druhém už se může zanořovat.
 *
 * Proto má každý článek dva oddíly. Žena si najde ten svůj podle toho, co má
 * zapsané v transferu.
 */

/** Datum je jen kotva pro výpočet. Do textu se nikde nedostane. */
const KOTVA = '2026-01-01'

function den(dpt: number, embryoDay: number) {
  return transferDay({
    transferOn: KOTVA,
    embryoDay,
    kind: 'kryo',
    stage: '',
    count: 1,
    hcgOn: null,
    today: KOTVA,
    dpt,
  })
}

/** Nadpis, který dává smysl i v seznamu vytrženém z kontextu. */
function nazev(dpt: number): string {
  return `${dpt}. den po transferu: co se může dít`
}

function uvod(dpt: number): string {
  if (dpt <= 2) {
    return `Jsou to první dny a nejde se o co opřít. Nic z toho, co se právě děje,
není vidět ani cítit. Tenhle text není o tom, co se děje **u vás**, protože to
nikdo neví. Je o tom, co se v tenhle den děje **obvykle**.`
  }
  if (dpt <= 6) {
    return `Tohle bývá nejtěžší část čekání. Adrenalin z transferu opadl, do odběru
je daleko a tělo mlčí. Tady je, co se v tenhle den může dít.`
  }
  if (dpt <= 10) {
    return `Blížíte se k době, kdy začne mít testování smysl. Tenhle text říká,
proč zrovna teď a ne dřív.`
  }
  return `Jste blízko odběru. Tady je, co se v tenhle den může dít a co číslo
z krve řekne a neřekne.`
}

/**
 * Oddíl pro jeden druh embrya.
 *
 * Věta o embryonálním věku je tam schválně. Je to jediné číslo, které oba
 * druhy transferu srovnává, a jakmile ho žena jednou pochopí, přestane
 * porovnávat svůj den s cizím.
 */
function oddil(dpt: number, embryoDay: number, popis: string): string {
  const d = den(dpt, embryoDay)
  return `### ${popis}

Embryo je ${d.embryoAge}. den od oplodnění.

**${d.embryo.title}**

${d.embryo.body}`
}

function telo(dpt: number): string {
  const d = den(dpt, 5)
  return `## ${d.telo.title}

${d.telo.body}`
}

function pocity(dpt: number): string {
  const d = den(dpt, 5)
  return `## Co můžete cítit

${d.pocity.intro}

${d.pocity.list.map((x) => `- ${x}`).join('\n')}

${d.pocity.note}`
}

function nemusite(dpt: number): string {
  const d = den(dpt, 5)
  return `## Co dnes nemusíte

${d.nemusis.map((x) => `- ${x}`).join('\n')}`
}

const VOLAT = `## Kdy volat kliniku

Nečekejte do rána a ozvěte se, pokud se objeví:

- **silná nebo zhoršující se bolest břicha**, hlavně jednostranná,
- **krvácení silnější než menstruace** nebo se sraženinami,
- **teplota nad 38 °C**,
- **prudké zvětšování břicha**, rychlý přírůstek hmotnosti,
- **dušnost** nebo potíže s dýcháním vleže,
- **závrať, mdloba, bušení srdce**,
- **bolest, otok nebo zarudnutí lýtka**.

Tohle nejsou příznaky čekání. Tohle jsou důvody zvednout telefon.`

const ZAVER = `> Text popisuje obvyklý průběh, ne váš. Nic z toho, co cítíte nebo necítíte,
> nepředpovídá výsledek. Termín odběru a další postup určuje vaše klinika.`

function clanek(dpt: number): ContentItem {
  const d5 = den(dpt, 5)

  const d3 = den(dpt, 3)

  // V pozdějších dnech už oba druhy embrya dojdou do stejného místa a
  // rozdělený oddíl by dvakrát opakoval totéž. Rozlišuje se jen tam, kde
  // je co rozlišovat.
  const lisiSe = d5.embryo.title !== d3.embryo.title

  const embryoCast = lisiSe
    ? [
        '## Co se dnes může dít s embryem',
        '',
        'Záleží na tom, jaké embryo se přenášelo. Najděte si svůj oddíl.',
        '',
        oddil(dpt, 5, 'Po transferu blastocysty (D5 nebo D6)'),
        '',
        oddil(dpt, 3, 'Po transferu embrya třetí den (D3)'),
      ]
    : [
        '## Co se dnes může dít s embryem',
        '',
        `V tenhle den už jsou blastocysta i embryo přenesené třetí den na stejném\nmístě vývoje. Embryo je ${d5.embryoAge}. den od oplodnění po transferu blastocysty\na ${d3.embryoAge}. den po transferu D3 embrya.`,
        '',
        `**${d5.embryo.title}**`,
        '',
        d5.embryo.body,
      ]

  const body = [
    uvod(dpt),
    '',
    ...embryoCast,
    '',
    telo(dpt),
    '',
    pocity(dpt),
    '',
    nemusite(dpt),
    '',
    `## ${d5.hcg ? 'K testování' : 'Dál'}`,
    '',
    d5.hcg,
    '',
    VOLAT,
    '',
    ZAVER,
  ].join('\n')

  return {
    id: `dpt-${dpt}`,
    kind: 'article',
    title: nazev(dpt),
    excerpt:
      dpt <= 2
        ? 'Co se v tenhle den obvykle děje, i když není nic vidět ani cítit.'
        : dpt <= 6
          ? 'Den po dni, zvlášť pro blastocystu a zvlášť pro embryo třetí den.'
          : dpt <= 10
            ? 'Proč testování zrovna teď začíná mít smysl a proč ne dřív.'
            : 'Co číslo z krve řekne a co ještě neřekne.',
    body,
    minutes: 5,
    phases: ['two_week_wait', 'transfer'],
    dayRange: [dpt, dpt],
    topics: ['cekani', 'embryologie', 'transfer'],
    level: 'essential',
    // Střídání pozadí, ať čtrnáct karet pod sebou není čtrnáctkrát stejná.
    hero: (['sky', 'champagne', 'sage', 'dawn', 'linen'] as const)[dpt % 5],
    author: 'Tým BlooMia',
    reviewedBy: 'Odborně garantováno – reprodukční medicína',
    sources: ['ESHRE: doporučené postupy'],
    publishedOn: '2026-08-09',
    // Den, který právě běží, má být nahoře. Bez toho by se ztratil mezi
    // třinácti sourozenci, kteří vypadají skoro stejně.
    boost: 0.85,
  }
}

const items: ContentItem[] = Array.from({ length: 14 }, (_, i) => clanek(i + 1))

export const pack: ContentPack = { items }
