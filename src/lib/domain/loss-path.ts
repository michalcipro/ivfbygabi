import type { PhaseId } from './phases'

/**
 * Co po ztrátě doopravdy následuje.
 *
 * ------------------------------------------------------------- PROČ TENHLE MODUL ---
 * Aplikace dlouho uměla říct, že žena je ve fázi ztráty, ale ne v jaké.
 * Všechny čtyři diagnózy dostávaly stejný obsah, protože se do jedné
 * kolonky „ztráta těhotenství“ slily už při zápisu. Zdravotně jsou to ale
 * čtyři různé situace a pletou se i lidem, kterých se přímo týkají:
 *
 * - **biochemické těhotenství**: embryo se uhnízdilo, hCG stouplo a zase
 *   kleslo dřív, než šlo cokoli vidět na ultrazvuku. Revize se nedělá.
 * - **zamlklé těhotenství**: těhotenství bylo na ultrazvuku vidět, ale
 *   zastavilo se a tělo to samo nerozpoznalo. Následuje rozhodnutí, jak ho
 *   ukončit.
 * - **samovolný potrat**: přišlo krvácení a těhotenství odešlo. Řeší se,
 *   jestli odešlo úplně.
 * - **mimoděložní těhotenství**: uhnízdilo se mimo dělohu. Léčí se
 *   methotrexátem nebo operací a **po methotrexátu se nesmí otěhotnět
 *   zhruba tři měsíce**. To je jediné pravidlo v celé téhle sadě, které se
 *   nedá zkrátit dohodou, a je to zároveň to, na co se nejčastěji zapomíná.
 *
 * Napsat ženě po mimoděložním těhotenství, kdy z dělohy odejde tkáň, není
 * nepřesnost. Je to špatná zdravotní informace v den, kdy má nejmenší sílu
 * si ji ověřit.
 *
 * ------------------------------------------------------------------ CO TU NENÍ ---
 * Žádné dávkování, žádné lhůty vydávané za rozhodnutí. Všude, kde o délce
 * pauzy nebo o způsobu ukončení rozhoduje klinika, to tak je i napsané.
 * Aplikace popisuje, z čeho se vybírá, ne co si má žena vybrat.
 *
 * Čistý doménový modul. Bez prohlížeče, bez stavu.
 */

export interface LossPath {
  phase: PhaseId
  /** Jednou větou, o co jde. Bez lékařského odstupu. */
  co: string
  /** Co zápis znamená pro další léčbu. Informace, ne útěcha. */
  znamena: string
  /** Co obvykle následuje zdravotně, v pořadí, v jakém to přichází. */
  nasleduje: string[]
  /** Kdy se dá reálně zkusit znovu a co o tom rozhoduje. */
  znovu: string
  /** Kdy volat kliniku. Konkrétně pro tenhle typ ztráty. */
  volejte: string[]
  /** Na co se zeptat při kontrole. */
  zeptejte: string[]
}

const BIOCHEMICKE: LossPath = {
  phase: 'loss_biochemical',
  co: 'hCG bylo pozitivní a pak kleslo. Těhotenství skončilo dřív, než šlo cokoli vidět na ultrazvuku.',
  znamena:
    'Embryo se uhnízdilo. Zní to jako slabá útěcha a v tuhle chvíli to tak i je, ale pro další léčbu je to jedna z mála informací, které mají váhu: uhnízdění u vás funguje.',
  nasleduje: [
    'Krvácení přijde obvykle do několika dní a bývá podobné silnější menstruaci.',
    'Klinika většinou kontroluje hCG, dokud neklesne k nule. Není to formalita: dokud hodnota neklesá, nedá se vyloučit, že těhotenství bylo mimo dělohu.',
    'Podpora luteální fáze se vysazuje podle pokynu kliniky, ne sama od sebe a ne ze dne na den.',
    'Revize dělohy se po biochemickém těhotenství nedělá. Není co revidovat.',
  ],
  znovu:
    'Většina klinik nechá proběhnout jednu menstruaci a další kryotransfer plánuje hned v následujícím cyklu. Zdravotní důvod čekat déle tu obvykle není. Jestli si chcete dát pauzu z jiného důvodu, je to legitimní rozhodnutí a nikdo vám ho nemá rozmlouvat.',
  volejte: [
    'Krvácení silnější než dvě plné vložky za hodinu, dvě hodiny po sobě.',
    'Jednostranná bolest podbřišku, závrať nebo mdloba. Může jít o mimoděložní těhotenství a to je akutní stav.',
    'Teplota nad 38 °C.',
    'hCG neklesá tak, jak klinika čekala.',
  ],
  zeptejte: [
    'Klesá mi hCG tak, jak má, a kdy je poslední kontrola?',
    'Kdy mám vysadit progesteron a další podporu?',
    'Můžeme jít do dalšího transferu hned v následujícím cyklu?',
    'Znamená to něco pro výběr dalšího embrya nebo pro přípravu sliznice?',
  ],
}

const ZAMLKLE: LossPath = {
  phase: 'loss_missed',
  co: 'Na ultrazvuku bylo těhotenství vidět, ale zastavilo se. Tělo to zatím nerozpoznalo, takže krvácení samo nepřišlo.',
  znamena:
    'Těhotenství se rozvíjelo dál než u biochemického. Nejčastější příčinou je chromozomální odchylka embrya, tedy něco, co se nedalo ovlivnit ničím, co jste nebo nejste udělala.',
  nasleduje: [
    'Diagnóza se skoro vždy potvrzuje druhým ultrazvukem s odstupem několika dní, případně na jiném přístroji. Má přesná kritéria a musí být jednoznačná dřív, než se cokoli udělá.',
    'Pak si vybíráte ze tří cest: vyčkávat, dokud to tělo nezvládne samo, ukončení léky, nebo výkon v narkóze. Všechny tři jsou legitimní a rozdíl mezi nimi je hlavně v čase, v krvácení a v tom, co pro vás bude snesitelnější.',
    'Tkáň se dá poslat na genetické vyšetření. Rozhodnout se o tom musíte předem. Po výkonu už to nejde a je to informace, která může ovlivnit další léčbu.',
    'Při Rh negativní krevní skupině se podává anti-D imunoglobulin. Připomeňte to, pokud o tom nikdo nemluvil.',
  ],
  znovu:
    'Klinika obvykle počká, až hCG klesne k nule a proběhne jedna až dvě menstruace. Po výkonu k tomu přibývá kontrola, že je dutina děložní v pořádku. Delší pauza než dva až tři měsíce už bývá spíš rozhodnutí než zdravotní nutnost, ale rozhoduje o tom váš lékař podle toho, co viděl.',
  volejte: [
    'Krvácení silnější než dvě plné vložky za hodinu, dvě hodiny po sobě.',
    'Teplota nad 38 °C, zimnice, nebo výtok, který zapáchá. Může jít o infekci a ta se řeší hned.',
    'Silná bolest, která nereaguje na běžné léky proti bolesti.',
    'Krvácení, které po dvou týdnech od výkonu neustává.',
  ],
  zeptejte: [
    'Kterou cestu ukončení mi doporučujete a proč zrovna tu?',
    'Dá se tkáň poslat na genetické vyšetření a co mi to řekne?',
    'Mám Rh negativní krevní skupinu a dostanu anti-D?',
    'Kdy mám přijít na kontrolu, že je dutina děložní v pořádku?',
    'Od kdy se smíme pokusit znovu?',
  ],
}

const POTRAT: LossPath = {
  phase: 'loss_miscarriage',
  co: 'Přišlo krvácení s křečemi a těhotenství odešlo.',
  znamena:
    'Uhnízdění i vývoj proběhly. U jednorázové ztráty se příčina obvykle nehledá, protože nejčastěji jde o chromozomální odchylku embrya. Vyšetřovat se začíná až u opakovaných ztrát.',
  nasleduje: [
    'Kontrolní ultrazvuk ověří, jestli v děloze nic nezůstalo. To rozhoduje o tom, jestli bude potřeba revize, nebo se dá jen počkat.',
    'hCG se kontroluje, dokud neklesne k nule. Dokud neklesá, není jisté, že těhotenství bylo v děloze.',
    'Krvácení bývá silnější než menstruace a trvá obvykle několik dní až dva týdny.',
    'Při Rh negativní krevní skupině se podává anti-D imunoglobulin.',
  ],
  znovu:
    'Většina klinik čeká na návrat hCG k nule a na jednu až dvě menstruace, aby se dala nová sliznice počítat od jasného začátku. Doporučení odkládat pokus o půl roku je dnes překonané; pokud vám ho někdo dal, zeptejte se, z čeho ve vašem případě vychází.',
  volejte: [
    'Krvácení silnější než dvě plné vložky za hodinu, dvě hodiny po sobě.',
    'Teplota nad 38 °C, zimnice, nebo zapáchající výtok.',
    'Silná bolest, která nereaguje na běžné léky proti bolesti.',
    'Krvácení, které trvá déle než dva týdny, nebo se po zklidnění znovu rozjede.',
  ],
  zeptejte: [
    'Odešlo všechno, nebo v děloze něco zůstalo?',
    'Kdy má klesnout hCG a kdy se na to podíváme?',
    'Mám Rh negativní krevní skupinu a dostanu anti-D?',
    'Od kdy se smíme pokusit znovu a co tomu musí předcházet?',
    'Má v mém případě smysl něco vyšetřovat, nebo se to dělá až po opakované ztrátě?',
  ],
}

const MIMODELOZNI: LossPath = {
  phase: 'loss_ectopic',
  co: 'Těhotenství se uhnízdilo mimo dělohu, nejčastěji ve vejcovodu. Tam se donosit nedá a neléčené je to život ohrožující stav.',
  znamena:
    'Tohle je jediný typ ztráty, kde jde v první řadě o vaše zdraví, a teprve pak o další léčbu. Po IVF je mimoděložní těhotenství častější než po přirozeném početí, i když se embryo vkládá přímo do dělohy: embryo se v ní pohybuje a může doputovat do vejcovodu.',
  nasleduje: [
    'Léčba je buď methotrexát, nebo operace. Rozhoduje o tom hodnota hCG, velikost ložiska, vaše oběhová stabilita a to, jestli hrozí prasknutí vejcovodu.',
    'Po methotrexátu se hCG kontroluje v odstupech, dokud neklesne k nule. Trvá to týdny a je to normální průběh, ne komplikace.',
    'Po operaci si ve zprávě najděte, jestli byl vejcovod odstraněn celý (salpingektomie), nebo jen otevřen a zachován (salpingostomie). Pro další léčbu je to zásadní rozdíl a při propouštění to zaznělo ve chvíli, kdy jste to nemohla vnímat.',
    'Při Rh negativní krevní skupině se podává anti-D imunoglobulin.',
  ],
  znovu:
    'Po methotrexátu se zhruba tři měsíce nesmí otěhotnět. Není to opatrnost: methotrexát je antagonista kyseliny listové a v té době by mohl poškodit vývoj. Přesnou dobu určí klinika podle toho, kolik dávek jste dostala, a je to jediná pauza z těchto stránek, kterou nelze zkrátit. Po operaci se čeká na zhojení a na návrat hCG k nule, obvykle jeden až dva cykly. V dalším těhotenství se dělá časný ultrazvuk kolem pátého až šestého týdne, aby se ověřilo, že je v děloze.',
  volejte: [
    'Prudká jednostranná bolest v podbřišku. Volejte 155, nečekejte na ordinační hodiny.',
    'Bolest v rameni nebo mezi lopatkami. Je to typická známka krvácení do dutiny břišní a působí to nevinně. Není.',
    'Závrať, mdloba, bledost, bušení srdce nebo studený pot.',
    'Teplota nad 38 °C nebo zvracení v průběhu léčby methotrexátem.',
  ],
  zeptejte: [
    'Byl vejcovod odstraněn, nebo zachován?',
    'Kolik dávek methotrexátu jsem dostala a od kdy přesně se smím pokusit znovu?',
    'Mám před dalším transferem nechat zkontrolovat druhý vejcovod? Hydrosalpinx snižuje úspěšnost IVF a řeší se ještě před transferem.',
    'Domluvíme si v dalším těhotenství časný ultrazvuk, aby se ověřilo uložení?',
    'Mám Rh negativní krevní skupinu a dostala jsem anti-D?',
  ],
}

const REVIZE: LossPath = {
  phase: 'uterine_revision',
  co: 'Výkon, kterým se z dělohy odstraní zbylá tkáň. Dělá se v narkóze a bývá krátký.',
  znamena:
    'Revize není trest ani selhání vašeho těla. Je to způsob, jak zabránit infekci a jak se dá dutina děložní připravit na další pokus.',
  nasleduje: [
    'Před výkonem se domlouvá, jestli se tkáň pošle na genetické vyšetření. Řekněte to sama, pokud se nikdo nezeptá.',
    'Slabší krvácení po výkonu trvá obvykle několik dní až dva týdny.',
    'Klinika obvykle doporučí několik týdnů bez tamponů, koupelí, plavání a pohlavního styku, dokud se sliznice nezhojí.',
    'Kontrola po výkonu ověří, že je dutina děložní prázdná a bez srůstů. Srůsty po revizi jsou vzácné, ale kvůli dalšímu transferu se na to dívá.',
  ],
  znovu:
    'Obvykle se čeká na jednu až dvě menstruace, aby se dala nová sliznice počítat od jasného začátku, a na kontrolu, že je dutina v pořádku. U opakované revize nebo při podezření na srůsty může klinika chtít hysteroskopii dřív, než se plánuje další transfer.',
  volejte: [
    'Krvácení silnější než dvě plné vložky za hodinu, dvě hodiny po sobě.',
    'Teplota nad 38 °C, zimnice, nebo zapáchající výtok.',
    'Silná bolest, která nereaguje na běžné léky proti bolesti.',
    'Menstruace, která se po výkonu nevrátí do dvou měsíců, nebo je nápadně slabá. Může jít o srůsty.',
  ],
  zeptejte: [
    'Byla tkáň poslána na genetické vyšetření a kdy budou výsledky?',
    'Kdy mám přijít na kontrolu?',
    'Jak dlouho mám vynechat tampony, koupele a pohlavní styk?',
    'Od kdy můžeme plánovat další transfer?',
  ],
}

const CESTY: LossPath[] = [BIOCHEMICKE, ZAMLKLE, POTRAT, MIMODELOZNI, REVIZE]

const PODLE_FAZE = new Map<PhaseId, LossPath>(CESTY.map((c) => [c.phase, c]))

/** Klinická návaznost pro fázi. `null` u fází, které ztrátou nejsou. */
export function lossPathFor(phase: PhaseId): LossPath | null {
  return PODLE_FAZE.get(phase) ?? null
}

export const LOSS_PATHS: readonly LossPath[] = CESTY
