import type { PhotoRef } from '../lib/domain/cycle'

/**
 * Fotky uložené v prohlížeči.
 *
 * Papír z kliniky je pořád nejčastější nosič informace o léčbě: protokol na
 * A4, zpráva z embryologie, proužek testu. Vyfotit ho je jediný způsob, jak
 * ho mít po ruce v pět hodin ráno.
 *
 * -------------------------------------------------------------- PROČ ZVLÁŠŤ ---
 * Zbytek aplikace žije v localStorage. Fotky tam být nesmí: limit je kolem
 * pěti megabajtů na celý původ a jedna fotka z mobilu je klidně čtyři. Kdyby
 * se tam ukládaly, `save()` by při prvním překročení tiše selhalo. A s ním by
 * se přestal ukládat deník, léky i cykly. Ztráta celého záznamu léčby kvůli
 * jedné fotce je nepřijatelná cena.
 *
 * Proto obrázky leží v IndexedDB, kde je místa řádově víc, a v localStorage
 * zůstává jen `PhotoRef`. Id a název. Když IndexedDB není k dispozici
 * (privátní režim, staré zařízení), fotky žijí jen v paměti do zavření
 * záložky a `photosPersist()` vrátí `false`, aby to obrazovka mohla říct
 * nahlas místo aby předstírala uložení.
 *
 * Nic neodchází ze zařízení. Stejně jako u zbytku dat.
 */

const DB_NAME = 'ivf-by-gabi/photos'
const STORE = 'photos'

/** Delší strana po zmenšení. Text na protokolu musí zůstat čitelný. */
const MAX_EDGE = 1600
const QUALITY = 0.75
/** Když je i tak moc velká, zmenší se ještě jednou. */
const BIG = 1_400_000
const MAX_EDGE_SMALL = 1100
const QUALITY_SMALL = 0.6

interface StoredPhoto {
  id: string
  name: string
  addedOn: string
  data: string
}

const cache = new Map<string, string>()
let db: IDBDatabase | null = null
let persist = true

/** Je kam fotky trvale uložit? Když ne, obrazovka to musí přiznat. */
export function photosPersist(): boolean {
  return persist
}

function open(): Promise<IDBDatabase | null> {
  return new Promise((resolve) => {
    let req: IDBOpenDBRequest
    try {
      req = indexedDB.open(DB_NAME, 1)
    } catch {
      resolve(null)
      return
    }
    req.onupgradeneeded = () => {
      const d = req.result
      if (!d.objectStoreNames.contains(STORE)) d.createObjectStore(STORE, { keyPath: 'id' })
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => resolve(null)
    req.onblocked = () => resolve(null)
  })
}

/**
 * Načte fotky do paměti.
 *
 * Vykreslování je synchronní, takže `<img>` potřebuje adresu hned. Držet
 * pár set kilobajtů na fotku v paměti je levnější než přepisovat celý
 * render na asynchronní.
 */
export async function initPhotos(): Promise<void> {
  db = await open()
  if (!db) persist = false
  else {
    await new Promise<void>((resolve) => {
      try {
        const req = (db as IDBDatabase).transaction(STORE, 'readonly').objectStore(STORE).getAll()
        req.onsuccess = () => {
          for (const row of req.result as StoredPhoto[]) cache.set(row.id, row.data)
          resolve()
        }
        req.onerror = () => resolve()
      } catch {
        resolve()
      }
    })
  }
}

/** Adresa fotky pro `<img src>`, nebo `null`, když tu není. */
export function photoUrl(id: string): string | null {
  return cache.get(id) ?? null
}

function uid(): string {
  return `ph_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

function put(row: StoredPhoto): void {
  if (!db) return
  try {
    db.transaction(STORE, 'readwrite').objectStore(STORE).put(row)
  } catch {
    persist = false
  }
}

/**
 * Zmenší obrázek na rozumnou velikost.
 *
 * Fotka z mobilu má i dvanáct megapixelů. Na čtení protokolu stačí zlomek
 * a rozdíl je mezi čtyřmi megabajty a třemi sty kilobajty.
 */
function shrink(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      const draw = (edge: number, q: number): string | null => {
        const scale = Math.min(1, edge / Math.max(img.naturalWidth, img.naturalHeight))
        const w = Math.max(1, Math.round(img.naturalWidth * scale))
        const h = Math.max(1, Math.round(img.naturalHeight * scale))
        const canvas = document.createElement('canvas')
        canvas.width = w
        canvas.height = h
        const ctx = canvas.getContext('2d')
        if (!ctx) return null
        // Bílé pozadí: průhledné PNG by se do JPEG jinak přetavilo na černou.
        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, w, h)
        ctx.drawImage(img, 0, 0, w, h)
        return canvas.toDataURL('image/jpeg', q)
      }
      let data = draw(MAX_EDGE, QUALITY)
      if (data && data.length > BIG) data = draw(MAX_EDGE_SMALL, QUALITY_SMALL)
      resolve(data)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      resolve(null)
    }
    img.src = url
  })
}

/** Otevře výběr souborů. Vrací prázdné pole, když uživatelka nic nevybere. */
export function pickImages(): Promise<File[]> {
  return new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.multiple = true
    input.style.position = 'fixed'
    input.style.left = '-9999px'
    document.body.appendChild(input)

    let done = false
    const finish = (files: File[]): void => {
      if (done) return
      done = true
      input.remove()
      resolve(files)
    }

    input.onchange = () => finish([...(input.files ?? [])])
    // Zavření dialogu bez výběru neposílá `change`. Bez tohohle by slib
    // nikdy nedoběhl a tlačítko by zůstalo viset v „ukládám“.
    window.addEventListener('focus', () => setTimeout(() => finish([...(input.files ?? [])]), 400), {
      once: true,
    })
    input.click()
  })
}

/** Zmenší, uloží a vrátí odkazy. Soubory, které se nepodaří přečíst, vypadnou. */
export async function addPhotos(files: File[], addedOn: string): Promise<PhotoRef[]> {
  const out: PhotoRef[] = []
  for (const file of files) {
    if (!file.type.startsWith('image/')) continue
    const data = await shrink(file)
    if (!data) continue
    const id = uid()
    const name = file.name || 'fotka.jpg'
    cache.set(id, data)
    put({ id, name, addedOn, data })
    out.push({ id, name })
  }
  return out
}

/**
 * Všechny fotky pro export dat.
 *
 * Export, ze kterého fotky vypadnou, je past: uživatelka si stáhne „všechna
 * svá data“ a přijde přesně o zprávu z embryologie. Soubor je pak velký,
 * ale je celý.
 */
export function allPhotos(): Record<string, string> {
  return Object.fromEntries(cache)
}

/** Smaže fotku z paměti i z úložiště. */
export function removePhoto(id: string): void {
  cache.delete(id)
  if (!db) return
  try {
    db.transaction(STORE, 'readwrite').objectStore(STORE).delete(id)
  } catch {
    // Smazaná z paměti stačí. Na obrazovce už není a odkaz na ni taky ne.
  }
}
