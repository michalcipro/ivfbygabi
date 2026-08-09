import { FEEDBACK_TOPICS, type Feedback } from '../lib/domain/feedback'
import { KOMU } from './feedback-send'
import { esc, note } from './ui'

/**
 * Napište mi.
 *
 * Jediná obrazovka v Bloomii, ze které něco odchází ven. Proto je na ní
 * napsané víc než jinde: co se odešle, komu, a hlavně co se neodešle.
 *
 * ---------------------------------------------------------------- AKCE ---
 * `fb-topic`   arg = id tématu     . Výběr tématu
 * `fb-star`    arg = 1 až 5        . Hvězdičky
 * `fb-reply`                       . Souhlas s odpovědí
 * `fb-send`                        . Odeslat
 */

function hvezdy(rating: number | null): string {
  return `<div class="row" style="gap:.35rem;margin-top:.7rem">
    ${[1, 2, 3, 4, 5]
      .map(
        (n) => `<button class="star" data-act="fb-star" data-arg="${n}"
          aria-pressed="${rating !== null && n <= rating}" aria-label="${n} z 5">★</button>`,
      )
      .join('')}
    ${rating !== null ? `<span class="faint num" style="align-self:center;font-size:.8125rem;margin-left:.4rem">${rating} z 5</span>` : ''}
  </div>`
}

export function screenNapisteMi(f: Feedback, stav: string): string {
  return [
    `<header class="head rise">
      <p class="eyebrow">Zpětná vazba</p>
      <h1 class="display">Napište mi</h1>
      <p class="lede">Chybí vám v Bloomii něco? Něco nefunguje? Nebo vás naopak něco potěšilo?
      Píše to Gabriela, ne robot, a čte to taky ona.</p>
    </header>`,

    stav === 'odeslano'
      ? `<section class="surface pad rise" style="border-color:var(--sage-deep)">
          <p class="display" style="font-size:1.3rem;line-height:1.45">Děkuji, že jste mi napsala.</p>
          <p class="soft" style="margin-top:.7rem;line-height:1.7;font-size:.9375rem">
            Vaše zpětná vazba mi pomáhá Bloomii dál zlepšovat.
          </p>
        </section>`
      : '',

    stav === 'posta'
      ? `<section class="surface pad rise" style="border-color:var(--taupe)">
          <p class="eyebrow">Otevřel se váš e-mail</p>
          <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
            Zpráva je předvyplněná a adresovaná na ${esc(KOMU)}. <strong>Ještě ji prosím
            odešlete</strong> ve svém poštovním programu. Bez toho ke mně nedorazí.
          </p>
          <p class="faint" style="margin-top:.7rem;font-size:.8125rem;line-height:1.55">
            Pokud se nic neotevřelo, zkopírujte si text a pošlete ho ručně na ${esc(KOMU)}.
          </p>
        </section>`
      : '',

    `<section class="surface pad rise">
      <p class="eyebrow">Téma</p>
      <div class="chips" style="margin-top:.8rem">
        ${FEEDBACK_TOPICS.map(
          (t) =>
            `<button data-act="fb-topic" data-arg="${esc(t.id)}" aria-pressed="${f.topic === t.id}">${esc(t.label)}</button>`,
        ).join('')}
      </div>

      <div class="formrow" style="margin-top:1.4rem">
        <label class="label" for="fb-msg">Zpráva</label>
        <textarea class="field" id="fb-msg" rows="6"
          placeholder="Napište cokoliv. Klidně jednu větu.">${esc(f.message)}</textarea>
      </div>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Jak se vám Bloomia používá</p>
      <p class="faint" style="margin-top:.4rem;font-size:.8125rem;line-height:1.55">
        Nepovinné. Když nevyplníte nic, odešle se jen zpráva výš.
      </p>
      ${hvezdy(f.rating)}

      <div class="formrow" style="margin-top:1.2rem">
        <label class="label" for="fb-likes">Co se vám líbí</label>
        <textarea class="field" id="fb-likes" rows="2">${esc(f.likes)}</textarea>
      </div>
      <div class="formrow">
        <label class="label" for="fb-changes">Co byste změnila</label>
        <textarea class="field" id="fb-changes" rows="2">${esc(f.changes)}</textarea>
      </div>
      <div class="formrow">
        <label class="label" for="fb-missing">Co vám chybí</label>
        <textarea class="field" id="fb-missing" rows="2">${esc(f.missing)}</textarea>
      </div>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Kdybych měla odpovědět</p>
      <div class="two" style="margin-top:1rem">
        <div>
          <label class="label" for="fb-name">Jméno</label>
          <input class="field" id="fb-name" value="${esc(f.name)}" placeholder="Nepovinné" autocomplete="name">
        </div>
        <div>
          <label class="label" for="fb-email">E-mail</label>
          <input class="field" id="fb-email" type="email" value="${esc(f.email)}"
                 placeholder="Nepovinné" autocomplete="email" inputmode="email">
        </div>
      </div>

      <div class="stack" style="gap:.2rem;margin-top:1.2rem">
        <button class="check opt" data-act="fb-reply" aria-pressed="${f.mayReply}">
          <span class="box">✓</span>
          <span class="txt" style="font-size:.9375rem;line-height:1.5">Gabriela mi může odpovědět
            <br><span class="faint" style="font-size:.8125rem">Bez zaškrtnutí se váš e-mail neodesílá vůbec.</span></span>
        </button>
      </div>

      <button class="btn btn-primary btn-block" data-act="fb-send" style="margin-top:1.4rem">Odeslat</button>
    </section>`,

    `<section class="surface-muted pad rise">
      <p class="eyebrow">Co se odešle</p>
      <ul class="bullets" style="margin-top:.7rem">
        <li>Jen to, co jste napsala do tohohle formuláře.</li>
        <li>Jméno a e-mail, pokud jste je vyplnila a povolila odpověď.</li>
      </ul>
      <p class="eyebrow" style="margin-top:1.2rem">Co se neodešle</p>
      <ul class="bullets" style="margin-top:.7rem">
        <li><strong>Nic z vaší léčby.</strong> Žádné cykly, embrya, transfery, hodnoty ani hCG.</li>
        <li><strong>Nic z deníku.</strong> Ani nálada, ani jedno slovo ze zápisů.</li>
        <li>Žádné finance a žádné dokumenty.</li>
      </ul>
      <p class="faint" style="margin-top:1rem;font-size:.8125rem;line-height:1.55">
        Zpráva chodí na ${esc(KOMU)}. Když aplikace nemůže odeslat sama, otevře váš
        poštovní program a zprávu vám předvyplní, ať se neztratí.
      </p>
    </section>`,

    note(
      'Tenhle formulář **není místo na zdravotní dotazy**. S otázkami o léčbě, lécích a výsledcích se obracejte na svou kliniku. Gabriela není lékařka a nemůže je zodpovědět.',
    ),
  ].join('')
}
