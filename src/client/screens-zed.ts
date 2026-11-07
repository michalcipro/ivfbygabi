import { esc, head } from './ui'

/**
 * Zeď, která se kreslí místo obsahu, dokud není zaplaceno.
 *
 * ------------------------------------------------------------ PRAVIDLA ---
 * Zeď nesmí být slepá ulička. Vede z ní cesta k zaplacení, ke stažení
 * vlastních záznamů a do nastavení. Taky nesmí strašit: žena tudy může
 * projít uprostřed stimulace a nepotřebuje mít pocit, že přišla o data.
 * Proto je věta o záznamech hned u tlačítka, ne schovaná dole.
 */
export function screenZed(cena: number, bezi: boolean, hlaska: string): string {
  const polozky = [
    'Celý odborný obsah: články, checklisty, slovník, „Co když…“',
    'Moje IVF cykly: stimulace, odběr, embrya, transfery, výsledky',
    'Deník, zápis dne, léky a injekce, sledování příznaků',
    'Otázky pro lékaře a příprava na kontroly',
  ]

  return [
    head(
      'BlooMia',
      'Aplikace je pro předplatitelky',
      'Jedna cena za celou aplikaci. Neprodáváme jednotlivé články a neplatíte za „šťastný konec“.',
    ),

    `<section class="surface pad rise">
      <p class="eyebrow">Předplatné</p>
      <p class="display" style="font-size:2.2rem;margin-top:.35rem">${cena} Kč</p>
      <p class="faint" style="font-size:.8125rem">za měsíc · konečná cena, nejsem plátkyně DPH</p>

      <div class="row wrap" style="gap:.6rem;margin-top:1.3rem">
        <button class="btn btn-primary" data-act="sub-koupit"${bezi ? ' disabled' : ''}>${
          bezi ? 'Moment…' : 'Aktivovat předplatné'
        }</button>
        <button class="btn" data-go="clenstvi">Podrobnosti</button>
      </div>
      ${
        hlaska
          ? `<p class="soft" style="margin-top:.9rem;font-size:.9375rem;line-height:1.6">${esc(hlaska)}</p>`
          : ''
      }

      <p class="faint" style="margin-top:1rem;font-size:.8125rem;line-height:1.6">
        Zrušit jde kdykoliv, jedním tlačítkem a bez udání důvodu.
        <strong>Vaše záznamy zůstávají ve vašem zařízení</strong>, ať je
        předplatné zaplacené, nebo ne. Nic se nemaže.
      </p>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Co se odemkne</p>
      <ul class="bullets" style="margin-top:.8rem">${polozky
        .map((f) => `<li>${esc(f)}</li>`)
        .join('')}</ul>
    </section>`,

    `<section class="surface pad rise">
      <p class="eyebrow">Vaše data jsou vaše</p>
      <p class="soft" style="margin-top:.6rem;line-height:1.7;font-size:.9375rem">
        Všechno, co jste si zapsala, je pořád v tomhle zařízení. Stáhnout si
        to můžete kdykoliv, i teď, bez placení.
      </p>
      <div class="row wrap" style="gap:.6rem;margin-top:1.1rem">
        <button class="btn" data-go="zaloha">Stáhnout moje záznamy</button>
        <button class="btn" data-go="nastaveni">Nastavení</button>
      </div>
    </section>`,
  ].join('')
}
