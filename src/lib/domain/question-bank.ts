import type { PhaseId } from './phases'

/**
 * Zásobník otázek pro lékaře.
 *
 * V ordinaci se zapomíná. Žena, která si tři týdny psala poznámky, sedí
 * dvanáct minut naproti lékaři a odejde s tím, že se nezeptala na to hlavní.
 * Tenhle seznam je proto **hotový k odkliknutí**: ne jako rada, co má
 * chtít, ale jako připomínka, co se dá říct nahlas.
 *
 * Otázky nikdy nenaznačují správnou odpověď. „Proč jste zvolil tenhle
 * protokol“ je otázka; „nebyl by lepší jiný protokol“ by byla rada, a na tu
 * aplikace nemá.
 *
 * Čistý doménový modul.
 */

export interface QuestionGroup {
  id: string
  title: string
  /** Fáze, ve kterých se skupina nabízí první. Prázdné = vždycky. */
  phases: PhaseId[]
  questions: string[]
}

export const QUESTION_BANK: QuestionGroup[] = [
  {
    id: 'zacatek',
    title: 'Než začneme',
    phases: ['thinking', 'diagnostics', 'ivf_prep'],
    questions: [
      'Proč jdeme právě na IVF a jaké jiné možnosti jsme zvažovali?',
      'Která vyšetření jsou v mém případě potřeba a proč zrovna ta?',
      'Co ve výsledcích ukazuje na příčinu a co zůstává nejasné?',
      'Kolik cyklů má u nás podle vás smysl zvažovat?',
      'Co všechno hradí pojišťovna a co se doplácí?',
      'Kdo bude náš ošetřující lékař a s kým budu mluvit, když se něco stane?',
      'Jak se u vás dozvím výsledky. Telefonem, v aplikaci, na kontrole?',
    ],
  },
  {
    id: 'protokol',
    title: 'Protokol a stimulace',
    phases: ['ivf_prep', 'stimulation'],
    questions: [
      'Proč jste zvolil tenhle stimulační protokol?',
      'Jaké léky budu píchat, v kolik hodin a jak dlouho?',
      'Co dělat, když se o hodinu opozdím nebo dávku vynechám?',
      'Podle čeho se bude dávka měnit?',
      'Jaké mám riziko OHSS a podle čeho ho poznám?',
      'Jak často budu chodit na kontroly a co se na nich sleduje?',
      'Můžu během stimulace sportovat, pracovat, cestovat?',
    ],
  },
  {
    id: 'odber',
    title: 'Odběr vajíček',
    phases: ['stimulation', 'retrieval'],
    questions: [
      'V kolik přesně mám píchnout trigger a co dělat, kdybych se minula?',
      'Jak bude probíhat anestezie a co si mám vzít s sebou?',
      'Kolik folikulů zatím vidíte a co to znamená pro odběr?',
      'Kdy se dozvím, kolik vajíček bylo získáno a kolik z nich bylo zralých?',
      'Jak dlouhá bývá rekonvalescence a kdy můžu do práce?',
      'Na jaké příznaky po odběru si mám dát pozor?',
    ],
  },
  {
    id: 'oplodneni',
    title: 'Oplodnění a embrya',
    phases: ['fertilization', 'embryo_culture'],
    questions: [
      'Proč jsme zvolili klasické IVF, nebo proč ICSI?',
      'Kolik vajíček bylo zralých a kolik se normálně oplodnilo?',
      'Kolik embryí se vyvíjí a v jakém jsou stadiu?',
      'Do kterého dne budete embrya kultivovat a proč?',
      'Jak embrya hodnotíte a co to hodnocení znamená?',
      'Proč se embryo přestalo vyvíjet?',
      'Kolik embryí se dá zamrazit a jak dlouho vydrží?',
    ],
  },
  {
    id: 'genetika',
    title: 'Genetické testování',
    phases: ['embryo_culture', 'genetic_testing'],
    questions: [
      'Je v našem případě genetické testování embryí opodstatněné?',
      'Co konkrétně test ukáže a co naopak neukáže?',
      'Kolik embryí biopsii obvykle nepřežije?',
      'Co budeme dělat s mozaikovým výsledkem?',
      'Jak dlouho se čeká na výsledek a co se s embryi děje mezitím?',
      'Kolik to stojí a co se stane, když nezbyde žádné testované embryo?',
    ],
  },
  {
    id: 'transfer',
    title: 'Transfer',
    phases: ['transfer', 'embryo_culture'],
    questions: [
      'Proč doporučujete čerstvý transfer, nebo proč kryotransfer?',
      'Kolik embryí budeme přenášet a proč právě tolik?',
      'Jak bude probíhat příprava sliznice a jaké léky budu brát?',
      'Jaká je moje sliznice a co to znamená pro termín?',
      'Používáme nějakou doplňkovou metodu, a co konkrétně má v mém případě řešit?',
      'Co mám dělat a co naopak nedělat v týdnu po transferu?',
      'Kdy přesně mám jít na odběr hCG?',
    ],
  },
  {
    id: 'cekani',
    title: 'Čekání a hCG',
    phases: ['two_week_wait', 'beta_positive'],
    questions: [
      'Do kdy mám brát podporu luteální fáze?',
      'Co znamená krvácení v tomhle období a kdy mám volat?',
      'Jakou hodnotu hCG budete považovat za pozitivní?',
      'Kdy bude druhý odběr a co budete sledovat?',
      'Kdy bude první ultrazvuk a co na něm budete hledat?',
      'Domácí testy. Mám je vůbec dělat?',
    ],
  },
  {
    id: 'neuspech',
    title: 'Když to nevyšlo',
    phases: ['waiting_next_attempt', 'repeated_failure'],
    questions: [
      'Co může být důvodem opakovaně negativního hCG?',
      'Dá se z tohohle transferu něco vyčíst pro příště?',
      'Proč se transfer zrušil a co to znamená pro embrya?',
      'Má smysl další kryotransfer, nebo nový cyklus?',
      'Co byste v dalším cyklu udělal jinak a proč?',
      'Doporučujete nějaká další vyšetření? Co konkrétně by změnila?',
      'Kdy je podle vás na místě zvážit jiné řešení. Dárcovství, nebo skončit?',
    ],
  },
  {
    id: 'ztrata',
    title: 'Po ztrátě',
    phases: ['loss_biochemical', 'loss_ectopic', 'loss_missed', 'loss_miscarriage', 'uterine_revision'],
    questions: [
      'Co se stalo a víme, proč?',
      'Jak dlouho se budou sledovat hodnoty hCG?',
      'Jak dlouhá bude rekonvalescence a na co si mám dát pozor?',
      'Kdy bych mohla znovu, kdybych chtěla. A kdy je to naopak brzo?',
      'Má smysl něco vyšetřit navíc, než půjdeme dál?',
      'Můžete mi doporučit psychologickou podporu?',
    ],
  },
  {
    id: 'vzdy',
    title: 'Vždycky se hodí',
    phases: [],
    questions: [
      'Co je teď dalším krokem a kdy?',
      'Kdy se ozvete vy a kdy mám volat já?',
      'Na co si mám do příště dávat pozor a kdy je důvod volat mimo ordinační hodiny?',
      'Můžu dostat kopii zprávy nebo výsledků?',
      'Je něco, co byste na mém místě chtěl vědět a na co jsem se nezeptala?',
    ],
  },
]

/** Skupiny seřazené tak, aby ta k dnešní fázi byla první. */
export function questionGroupsFor(phase: PhaseId): QuestionGroup[] {
  const mine = QUESTION_BANK.filter((g) => g.phases.includes(phase))
  const rest = QUESTION_BANK.filter((g) => !g.phases.includes(phase))
  return [...mine, ...rest]
}
