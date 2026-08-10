import { esc, note } from './ui'
import { logoFull } from './viz'

/**
 * Kdo stojí za BlooMií.
 *
 * Osobní část aplikace. Není to „o nás“ z firemního webu; je to text ženy,
 * která si IVF prošla, a proto se tu píše v první osobě a bez marketingu.
 *
 * -------------------------------------------------------------- HRANICE ---
 * Gabinin příběh je **lidský kontext, ne důkaz**. Nikde nesmí vzniknout
 * dojem, že když žena udělá totéž, dopadne to stejně. Proto má každý blok,
 * kde se mluví o výsledku, vedle sebe větu, že každá cesta je jiná.
 *
 * ---------------------------------------------------------------- AKCE ---
 * Sekce nemá žádnou. Jediné klepnutí vede na Instagram, a to je odkaz,
 * ne akce: `target="_blank"` s `rel="noopener"`.
 */

/** Živnostenské údaje. Doplní se, až je Gabi dodá; do té doby se nekreslí. */
const ICO = ''

export function screenOBlooMii(): string {
  return [
    `<header class="head rise" style="text-align:center">
      ${logoFull(52)}
      <p class="eyebrow" style="margin-top:2rem">Kdo stojí za BlooMií</p>
      <h1 class="display">Ing. Gabriela Černá</h1>
      <p class="lede">BlooMia nevznikla jako další aplikace. Vznikla z vlastní zkušenosti.</p>
      ${ICO ? `<p class="faint" style="margin-top:.9rem;font-size:.8125rem">IČO ${esc(ICO)}</p>` : ''}
    </header>`,

    // ------------------------------------------------------------- o mně ---
    `<section class="surface pad rise">
      <p class="eyebrow">Proč BlooMia vznikla</p>
      <div class="prose" style="margin-top:.9rem">
        <p>Jsem Gabriela a sama jsem si prošla cestou IVF, která nebyla jednoduchá,
        rychlá ani přímočará.</p>

        <p>Vím, jaké je čekat na výsledky. Jaké je žít od kontroly ke kontrole.
        Jaké je řešit léky, odběry, embrya, transfery, peníze, práci i otázky okolí.
        A také vím, jaké je prožívat naději i strach zároveň.</p>

        <p>BlooMia vznikla proto, že jsem během své vlastní cesty hledala místo,
        kde by bylo všechno důležité pohromadě. Nejen medicínské informace.
        Ale také praktická pomoc. Prostor pro vlastní poznámky. Přehled léčby.
        Finance. Emoce. Podporu. A pocit, že na to člověk nemusí být úplně sám.</p>
      </div>
    </section>`,

    // ------------------------------------------------ proč zrovna BlooMia ---
    `<section class="surface pad rise bloomia-story">
      <p class="eyebrow">Proč BlooMia?</p>
      <div class="prose" style="margin-top:1.2rem">
        <p>Možná tě napadne, proč se aplikace jmenuje právě BlooMia. Ten název
        má pro mě mnohem větší význam než jen hezké slovo.</p>

        <p><strong>Bloom</strong> znamená rozkvétat. A <strong>Mia</strong> je moje dcera.</p>

        <p>BlooMia tak vznikla spojením dvou slov, která pro mě představují celou
        jednu cestu. Cestu, na které nebylo všechno jednoduché, přímé ani
        samozřejmé. Cestu IVF.</p>

        <p>Mia je totiž dítě, které přišlo po mé vlastní IVF cestě. Po cestě, na
        které byly naděje, čekání, strach, zklamání, další pokusy, transfery
        i chvíle, kdy člověk vůbec nevěděl, co bude dál.</p>

        <p>Nakonec se nám podařilo otěhotnět po 9. transferu ve 3. IVF cyklu.
        A dnes máme naši holčičku Miu.</p>

        <p>Právě proto pro mě BlooMia znamená něco jako: <em>z cesty, na které
        jsme čekali na rozkvět, vznikla Mia.</em></p>

        <p>Bloom znamená rozkvést. Protože i cesta, která začíná nejistotou,
        bolestí, čekáním, zklamáním nebo ztrátou, může jednou rozkvést v něco,
        o čem jsme dlouho snily.</p>

        <p>BlooMia vznikla pro ženy, které právě svou cestou procházejí. Ať už
        stojí na jejím začátku, čekají na další krok, prožívají radost, strach,
        zklamání, nebo začínají znovu.</p>
      </div>

      <p class="bmrovnice">Bloom <i>+</i> Mia <i>=</i> <span class="bloo">Bloo</span><span class="mia">Mia</span></p>
      <p class="bmrovnice-pod">Tvoje IVF cesta. Krok za krokem.</p>
    </section>`,

    // -------------------------------------------------------- co to není ---
    `<section class="surface-muted pad rise">
      <p class="eyebrow">A co BlooMia není</p>
      <div class="prose" style="margin-top:.9rem">
        <p>BlooMia není příběh o tom, že když něco uděláš správně, určitě se
        dočkáš stejného výsledku.</p>

        <p>Není to návod na těhotenství. Není to slib. A už vůbec ne medicínská
        záruka.</p>

        <p>Je to místo, které vzniklo z mé zkušenosti s IVF a z přání vytvořit
        něco, co bych sama během své cesty potřebovala mít.</p>

        <p>Místo, kde si můžeš uchovat svůj příběh. Své cykly. Své transfery.
        Svá embrya. Své termíny. Své léky. Své otázky. Své emoce. Své naděje.
        I své těžké dny.</p>

        <p>Protože i cesta sama má hodnotu. A každá žena má svůj vlastní příběh.</p>
      </div>
    </section>`,

    // ----------------------------------------------------------- vzkaz ---
    `<section class="surface pad rise" style="border-color:var(--blush)">
      <p class="eyebrow" style="color:var(--blush-deep)">Vzkaz od Gabriely</p>
      <div class="prose" style="margin-top:.9rem">
        <p>Jestli právě procházíš IVF, chci, abys věděla jednu věc:</p>

        <p class="display" style="font-size:1.35rem;line-height:1.45;margin:1.1rem 0">
          Nemusíš být pořád silná.
        </p>

        <p>Nemusíš být pozitivní. Nemusíš se tvářit, že to zvládáš. Nemusíš mít
        radost z každého kroku. A nemusíš nikomu dokazovat, že jsi v pohodě.</p>

        <p>Můžeš doufat a zároveň se bát. Můžeš mít radost a zároveň závidět
        někomu, komu se to podařilo dřív. Můžeš být unavená. Můžeš mít den, kdy
        už nechceš řešit vůbec nic.</p>

        <p>To všechno se do IVF vejde.</p>

        <p>Přeji si, aby ti BlooMia pomohla mít v tom všem alespoň o trochu
        větší přehled, klid a pocit, že na své cestě nejsi sama.</p>

        <p>Ať už tvoje cesta povede kamkoliv.</p>
      </div>
    </section>`,

    // ------------------------------------------------------- instagram ---
    `<section class="surface pad rise">
      <p class="eyebrow">Najdeš mě také na Instagramu</p>
      <h2 class="display" style="font-size:1.5rem;margin-top:.4rem">@ivf_by_gabi</h2>
      <p class="soft" style="margin-top:.7rem;line-height:1.7;font-size:.9375rem">
        Na Instagramu sdílím další informace ze světa IVF, zkušenosti, tipy,
        praktické věci, psychiku během léčby a také svůj vlastní příběh.
      </p>
      <p class="soft" style="margin-top:.7rem;line-height:1.7;font-size:.9375rem">
        Pokud chceš BlooMii doplnit o další obsah, najdeš tam další informace
        a zkušenosti z IVF cesty.
      </p>
      <a class="btn btn-primary btn-block" style="margin-top:1.3rem"
         href="https://www.instagram.com/ivf_by_gabi/" target="_blank" rel="noopener noreferrer">
        Navštívit Instagram
      </a>
      <p class="faint" style="margin-top:.8rem;font-size:.75rem;line-height:1.5">
        Odkaz vede mimo aplikaci, do Instagramu. BlooMia tam neposílá nic
        o vás ani o vaší léčbě.
      </p>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Napište mi</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
        Chybí vám v BlooMii něco? Něco nefunguje? Nebo vás naopak něco potěšilo?
        Napište mi to, prosím. BlooMia se z toho staví dál.
      </p>
      <button class="btn btn-block" data-go="napiste-mi" style="margin-top:1.1rem">Napsat Gabriele</button>
    </section>`,

    note(
      'Můj příběh je moje zkušenost, ne lékařský důkaz. Neznamená, že stejný postup povede ke stejnému výsledku. **Každá IVF cesta je jiná** a o té vaší rozhoduje vaše klinika, ne tahle aplikace.',
    ),
  ].join('')
}
