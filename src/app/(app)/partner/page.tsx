import Link from 'next/link'
import type { Metadata } from 'next'
import { currentUser, dataOwnerId } from '@/lib/auth'
import { getProfile, listJournal } from '@/lib/db/repo'
import { resolveJourney } from '@/lib/domain/journey'
import { CATALOG } from '@/lib/content'
import { czDays } from '@/lib/domain/dates'
import { ContentCard } from '@/components/content-card'
import { Card, Eyebrow, Hero, SectionTitle } from '@/components/ui'

export const metadata: Metadata = { title: 'Partner' }
export const dynamic = 'force-dynamic'

/**
 * Partner mode.
 *
 * Ukazuje, co žena právě prožívá, co konkrétně pomáhá a čemu se vyhnout.
 * Záměrně NEUKAZUJE deníkové zápisy ani zdravotní údaje — jen agregovaný
 * obraz situace. Deník zůstává soukromý.
 */
export default async function PartnerPage() {
  const user = (await currentUser())!
  const ownerId = dataOwnerId(user)
  const profile = getProfile(ownerId)
  const state = resolveJourney(profile)

  const journal = listJournal(ownerId, 7)
  const moods = journal.filter((j) => j.mood !== null).map((j) => j.mood!)
  const avgMood = moods.length ? moods.reduce((a, b) => a + b, 0) / moods.length : null

  const partnerContent = CATALOG.filter((c) => c.topics.includes('partner')).slice(0, 10)
  const advice = adviceFor(state.group, state.phase.tone)

  return (
    <div className="space-y-11">
      <header>
        <Eyebrow>Pro toho, kdo je vedle</Eyebrow>
        <h1 className="display mt-3 text-[2.25rem] leading-tight md:text-[2.75rem]">
          Partner mode
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-soft">
          Co se právě děje, co pomáhá a co ne. Bez zdravotních detailů a bez čtení deníku —
          ten zůstává soukromý.
        </p>
      </header>

      <Hero token="taupe" className="rounded-[var(--radius-xl)] px-7 py-11 md:px-11 md:py-14">
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow !text-white/55">Kde právě je</p>
          <h2 className="display mt-4 text-[1.75rem] leading-snug text-white md:text-[2.25rem]">
            {state.phase.title}
          </h2>
          <p className="mt-3 text-[1.0625rem] text-white/78">{state.dayLabel}</p>
          {state.nextMilestone && (
            <p className="mt-5 inline-flex rounded-full bg-white/18 px-4 py-2 text-[0.875rem] text-white backdrop-blur-sm">
              {state.nextMilestone.label} za {czDays(state.nextMilestone.inDays)}
            </p>
          )}
        </div>
      </Hero>

      {avgMood !== null && (
        <Card className="p-7">
          <Eyebrow>Jak se jí poslední dny vede</Eyebrow>
          <div className="mt-4 flex items-center gap-5">
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  className={`h-9 w-2.5 rounded-full ${
                    n <= Math.round(avgMood) ? 'bg-[var(--color-taupe)]' : 'bg-[var(--line)]'
                  }`}
                />
              ))}
            </div>
            <p className="text-[0.9375rem] text-soft">
              {avgMood <= 2
                ? 'Poslední dny jsou pro ni těžké. Teď je čas být blízko, ne řešit.'
                : avgMood <= 3.5
                  ? 'Zvládá to, ale stojí ji to sílu.'
                  : 'Poslední dny jsou spíš dobré.'}
            </p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-faint">
            Vychází to jen z toho, jak si sama ohodnotila náladu. Obsah jejích zápisů
            nevidíte — a to je záměr.
          </p>
        </Card>
      )}

      <section>
        <SectionTitle title="Co teď opravdu pomáhá" />
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="p-7">
            <h3 className="display text-xl text-[var(--color-sage-deep)]">Dělejte tohle</h3>
            <ul className="mt-4 space-y-3">
              {advice.do.map((d, i) => (
                <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-soft">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-sage)]" />
                  {d}
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-7">
            <h3 className="display text-xl text-[var(--color-blush-deep)]">Tohle radši ne</h3>
            <ul className="mt-4 space-y-3">
              {advice.dont.map((d, i) => (
                <li key={i} className="flex gap-3 text-[0.9375rem] leading-relaxed text-soft">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-blush)]" />
                  {d}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section>
        <SectionTitle title="Co se právě děje" subtitle="Stručně a bez odborných zkratek" />
        <Card className="p-7">
          <p className="text-[1.0625rem] leading-relaxed text-soft">{advice.whatsHappening}</p>
        </Card>
      </section>

      {partnerContent.length > 0 && (
        <section>
          <SectionTitle title="Ke čtení" subtitle="Napsané přímo pro partnery" />
          <div className="rail -mx-5 px-5 lg:-mx-8 lg:px-8">
            {partnerContent.map((item) => (
              <ContentCard key={item.id} item={item} size="sm" />
            ))}
          </div>
        </section>
      )}

      <Card muted className="p-7">
        <h3 className="display text-xl">A jak jste na tom vy?</h3>
        <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-soft">
          Léčba neplodnosti i ztráta doléhá na oba. Vaše prožívání je stejně platné —
          jen se o něm mluví míň. Když je toho moc, není slabost se ozvat odborníkovi.
        </p>
        <Link
          href="/knihovna?topic=partner"
          className="btn btn-secondary mt-5 !py-2 !text-[0.8125rem]"
        >
          Obsah pro partnery
        </Link>
      </Card>
    </div>
  )
}

interface Advice {
  whatsHappening: string
  do: string[]
  dont: string[]
}

function adviceFor(group: string, tone: string): Advice {
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
