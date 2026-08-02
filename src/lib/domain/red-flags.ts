/**
 * Varovné příznaky.
 *
 * Když uživatelka napíše do hledání něco, co může znamenat akutní stav,
 * musí odpověď začít větou „ozvěte se klinice“, ne odkazem na článek.
 * Je to jediné místo v aplikaci, kde text předbíhá obsah.
 *
 * Pravidla jsou pevná a deterministická: regulární výraz a hotová věta.
 * Nic se nevyhodnocuje, nic se nedopočítává a nic se nikam neodesílá.
 * Aplikace tím nediagnostikuje, jenom říká, že tohle nepatří do aplikace,
 * ale do telefonu s klinikou.
 */
export const RED_FLAGS: Array<{ pattern: RegExp; message: string }> = [
  {
    pattern: /siln[éeě].{0,12}krv[áa]cen|krv[áa]c[íi]m siln|prokrv[áa]c/i,
    message:
      'Silné krvácení je důvod ozvat se lékaři hned. Nečekejte na ranní ordinační hodiny. Pokud promáčíte vložku za hodinu nebo méně, jeďte na pohotovost.',
  },
  {
    pattern: /ohss|nafoukl|břicho.{0,15}(tvrd|nafoukl)|přibrala.{0,12}kil|nem[oů]ž[ue].{0,10}d[ýy]chat/i,
    message:
      'Rychlý nárůst obvodu břicha, přibývání na váze o kilogramy během pár dní, dušnost nebo malé množství moči mohou být příznaky OHSS. Ozvěte se klinice ještě dnes.',
  },
  {
    pattern: /siln[áa].{0,12}bolest|kruté bolesti|bolest.{0,10}ramen|zvrac[íi]m|omdl|zkolabov/i,
    message:
      'Náhlá silná bolest břicha, bolest vystřelující do ramene, závrať nebo kolaps patří k příznakům, které se neodkládají. Volejte 155 nebo jeďte na nejbližší gynekologickou pohotovost.',
  },
  {
    pattern: /hore[čč]k|teplot[au].{0,10}3[89]|zimnice/i,
    message:
      'Horečka po zákroku nebo v průběhu léčby je důvod zavolat na kliniku, ne čekat do rána.',
  },
  {
    pattern: /nechci ž[íi]t|ukon[čc]it život|sebevra[žz]|ubl[íi]žit si/i,
    message:
      'Tohle je těžké a nemusíte v tom být sama. Linka první psychické pomoci má číslo 116 123 a je zdarma, nepřetržitě. Při bezprostředním ohrožení volejte 155.',
  },
]
