import type { PhotoRef } from '../lib/domain/cycle'
import { photosPersist, photoUrl } from './photos'
import { esc } from './ui'

/**
 * Fotky u záznamu — jeden díl pro celou aplikaci.
 *
 * Papír z kliniky je pořád hlavní nosič informace o léčbě: protokol na A4,
 * zpráva z embryologie, výtisk z ultrazvuku, proužek testu. Vyfotit ho je
 * jediný způsob, jak ho mít po ruce ve tři ráno.
 *
 * ------------------------------------------------------------------ SCOPE ---
 * `scope` říká, ke kterému záznamu fotky patří. Řetězec dělený dvojtečkou:
 *
 *   cyc:{idCyklu}:protokol      protokol z kliniky
 *   cyc:{idCyklu}:laborator     zpráva z embryologie
 *   cyc:{idCyklu}:vysledek      propouštěcí zpráva, závěr
 *   cyc:{idCyklu}:transfer:{id} fotka embrya nebo zprávy z transferu
 *   cyc:{idCyklu}:hcg:{id}      proužek testu
 *   uz:{idUltrazvuku}           výtisk z ultrazvuku
 *   doc:{idZpravy}              vyfocená lékařská zpráva
 *   med:{idLeku}                krabička, příbalový leták, rozpis dávek
 *
 * Rozklíčovat scope umí `photosOf()` a `withPhotos()` ve `store.ts`. Přidat
 * další místo tedy znamená doplnit jednu větev tam a zavolat `photoStrip()`
 * na obrazovce — nikde jinde se nic měnit nemusí.
 *
 * ------------------------------------------------------------------ AKCE ----
 * `photo-add`  arg = scope
 * `photo-rm`   arg = „scope|idFotky“
 * `photo-zoom` arg = idFotky
 *
 * ------------------------------------------------------------------- CSS ----
 * `.photos`, `.photo`, `.photo-open`, `.photo-del`, `.photolay` — v app.css.
 */
export function photoStrip(scope: string, photos: PhotoRef[], text: string): string {
  const tiles = photos
    .map((p) => {
      const url = photoUrl(p.id)
      const inner = url
        ? `<img src="${esc(url)}" alt="${esc(p.name)}" loading="lazy">`
        : `<span class="faint" style="font-size:.6875rem;padding:.3rem;text-align:center">Načítám…</span>`
      return `<div class="photo">
        <button type="button" class="photo-open" data-act="photo-zoom" data-arg="${esc(p.id)}"
                title="${esc(p.name)}" aria-label="Zvětšit ${esc(p.name)}">${inner}</button>
        <button type="button" class="photo-del" data-act="photo-rm"
                data-arg="${esc(`${scope}|${p.id}`)}" aria-label="Smazat fotku">✕</button>
      </div>`
    })
    .join('')

  return `<div class="photobox">
    <p class="label">${esc(text)}</p>
    ${photos.length ? `<div class="photos">${tiles}</div>` : ''}
    <button type="button" class="btn btn-ghost btn-sm" data-act="photo-add"
            data-arg="${esc(scope)}" style="margin-top:.6rem">
      ${photos.length ? 'Přidat další fotku' : 'Vyfotit nebo nahrát'}
    </button>
    <p class="faint" style="font-size:.75rem;margin-top:.35rem;line-height:1.45">${esc(
      photosPersist()
        ? 'Fotka zůstává ve vašem zařízení a nikam se neodesílá. Před uložením se zmenší, ať se jich vejde víc.'
        : 'Tenhle prohlížeč fotky trvale uložit neumí — bývá to privátním režimem. Zůstanou jen do zavření záložky.',
    )}</p>
  </div>`
}
