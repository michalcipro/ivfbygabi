import type { ContentPack, Encouragement } from '../types'

/**
 * Povzbuzení dne.
 *
 * Vybírá se podle emočního tónu fáze, ve které uživatelka je. Žena po ztrátě
 * nesmí dostat text psaný pro někoho v těhotenství.
 *
 * Pravidlo, které tady platí bez výjimky: žádná toxická pozitivita.
 * Nic ve stylu „jen se uvolni“, „všechno se děje z nějakého důvodu“
 * nebo „aspoň víš, že můžeš otěhotnět“. Věty tady mají uznávat, ne přemlouvat.
 */

const hopeful: Encouragement[] = [
  { id: 'enc-h1', text: 'Naděje není naivita. Je to způsob, jak jít dál, když nemáte jistotu.', tone: 'hopeful' },
  { id: 'enc-h2', text: 'To, že to trvá dýl, než jste čekala, neznamená, že jste udělala něco špatně.', tone: 'hopeful' },
  { id: 'enc-h3', text: 'Nemusíte být silná každý den. Stačí být tady.', tone: 'hopeful' },
  { id: 'enc-h4', text: 'Vaše cesta se nedá srovnat s ničí jinou. Ani s tou, kterou vidíte na internetu.', tone: 'hopeful' },
  { id: 'enc-h5', text: 'Dnešek nemusí být krok vpřed. Stačí, že jste ho nevzdala.', tone: 'hopeful' },
  { id: 'enc-h6', text: 'Čekání není nečinnost. Je to jedna z nejtěžších věcí, které člověk dělá.', tone: 'hopeful' },
]

const intense: Encouragement[] = [
  { id: 'enc-i1', text: 'Tenhle týden je náročný. Nemusíte u toho ještě fungovat dokonale.', tone: 'intense' },
  { id: 'enc-i2', text: 'Vaše tělo teď dělá práci, kterou nevidíte. Dopřejte mu odpočinek, který si o něj neřekne.', tone: 'intense' },
  { id: 'enc-i3', text: 'Nemusíte rozumět všem číslům. Od toho tam máte lidi, kteří tomu rozumí.', tone: 'intense' },
  { id: 'enc-i4', text: 'Bát se není selhání. Je to normální reakce na něco, co nemůžete ovlivnit.', tone: 'intense' },
  { id: 'enc-i5', text: 'Dnes stačí zvládnout dnešek. Zítřek počká.', tone: 'intense' },
  { id: 'enc-i6', text: 'Únava po hormonech není vaše lenost. Je to účinek léčby.', tone: 'intense' },
]

const tender: Encouragement[] = [
  { id: 'enc-t1', text: 'Můžete doufat a bát se zároveň. Obojí se do jednoho člověka vejde.', tone: 'tender' },
  { id: 'enc-t2', text: 'Nemusíte být vděčná ve chvíli, kdy je vám těžko.', tone: 'tender' },
  { id: 'enc-t3', text: 'Být opatrná v radosti není nevděk. Je to způsob, jak se chránit.', tone: 'tender' },
  { id: 'enc-t4', text: 'Nikdo od vás nečeká, že budete v pohodě. Ani vy sama byste neměla.', tone: 'tender' },
  { id: 'enc-t5', text: 'Kdyby se vás dnes někdo zeptal, jak vám je, měla byste právo říct pravdu.', tone: 'tender' },
  { id: 'enc-t6', text: 'To, co cítíte, nemusí dávat smysl, aby bylo platné.', tone: 'tender' },
]

const grieving: Encouragement[] = [
  { id: 'enc-g1', text: 'To, co jste ztratila, bylo skutečné. Nezáleží na tom, jak dlouho to trvalo.', tone: 'grieving' },
  { id: 'enc-g2', text: 'Truchlení nemá harmonogram. Nikdo vám nemůže říct, kdy už to má být za vámi.', tone: 'grieving' },
  { id: 'enc-g3', text: 'Nemusíte v tom hledat smysl. Někdy žádný není.', tone: 'grieving' },
  { id: 'enc-g4', text: 'Můžete být smutná i ve dnech, kdy okolí čeká, že už jste v pořádku.', tone: 'grieving' },
  { id: 'enc-g5', text: 'Nebyla to vaše chyba. Ani to, co jste jedla, dělala nebo si myslela.', tone: 'grieving' },
  { id: 'enc-g6', text: 'Dnes nemusíte být statečná. Dnes stačí dýchat.', tone: 'grieving' },
  { id: 'enc-g7', text: 'Vaše bolest nepotřebuje srovnání s tím, co prožil někdo jiný.', tone: 'grieving' },
  { id: 'enc-g8', text: 'Mít vztek je součást smutku. Nemusíte se za něj omlouvat.', tone: 'grieving' },
]

const practical: Encouragement[] = [
  { id: 'enc-p1', text: 'Zeptat se dvakrát na to samé není hloupost. Je to péče o sebe.', tone: 'practical' },
  { id: 'enc-p2', text: 'Nemusíte si pamatovat všechno. Od toho jsou poznámky.', tone: 'practical' },
  { id: 'enc-p3', text: 'Máte právo rozumět tomu, co se s vámi děje. Vždycky se ptejte.', tone: 'practical' },
  { id: 'enc-p4', text: 'Nikdo neví, jak se to má dělat správně. Ani ti, co vypadají, že to zvládají.', tone: 'practical' },
  { id: 'enc-p5', text: 'Říct si o pomoc není přiznání porážky. Je to organizační dovednost.', tone: 'practical' },
  { id: 'enc-p6', text: 'Když si nejste jistá, jestli volat. Zavolejte.', tone: 'practical' },
]

const joyful: Encouragement[] = [
  { id: 'enc-j1', text: 'Dovolte si to. Zasloužila jste si každý kousek téhle radosti.', tone: 'joyful' },
  { id: 'enc-j2', text: 'Nemusíte být pořád vděčná. Můžete být taky prostě unavená.', tone: 'joyful' },
  { id: 'enc-j3', text: 'To, že jste o to tak dlouho stála, vám nebere právo si stěžovat.', tone: 'joyful' },
  { id: 'enc-j4', text: 'Nikdo neví, co dělá. Vy taky ne, a to je v pořádku.', tone: 'joyful' },
  { id: 'enc-j5', text: 'Dnešek si zapište. Za rok si na něj nevzpomenete a budete chtít.', tone: 'joyful' },
  { id: 'enc-j6', text: 'Být dobrá matka neznamená být pořád v pohodě.', tone: 'joyful' },
]

export const pack: ContentPack = {
  encouragements: [
    ...hopeful,
    ...intense,
    ...tender,
    ...grieving,
    ...practical,
    ...joyful,
  ] satisfies Encouragement[],
}
