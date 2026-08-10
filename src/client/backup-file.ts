/**
 * Záloha ven a zpátky dovnitř, přes soubor.
 *
 * Doménové jádro (`domain/backup.ts`) ví, co v záloze je a jestli se dá
 * použít. Tenhle soubor řeší jen tu nepříjemnou část: jak dostat soubor
 * z telefonu ven a jak ho tam dostat zpátky.
 *
 * ------------------------------------------------------------- PROČ SDÍLET ---
 * Na iPhonu je stahování souborů z webu vratká věc. Systémové sdílení je
 * naopak to, co uživatelka zná: klepne a vybere Uložit do souborů, iCloud
 * nebo si zálohu pošle mailem. Proto se sdílení zkouší první a stahování
 * je záložní cesta pro počítač a Android.
 *
 * Sdílení musí odstartovat přímo z klepnutí. Kdyby se před ním na cokoliv
 * čekalo, Safari ho zablokuje jako vyskakovací okno. Proto se soubor skládá
 * synchronně a `await` přijde na řadu až po zavolání.
 */

export type UlozeniVysledek = 'sdileno' | 'stazeno' | 'zruseno' | 'chyba'

/**
 * Sdílení souborů umí jen některé prohlížeče.
 *
 * Tvar se popisuje zvlášť, ne rozšířením `Navigator`: v typech prohlížeče
 * je `canShare` povinné, ve skutečnosti chybí, a lhát si do typů zrovna
 * tady by znamenalo pád na starším Androidu.
 */
interface SdileniNavigator {
  share?: (data: { files?: File[]; title?: string }) => Promise<void>
  canShare?: (data: { files?: File[] }) => boolean
}

function stahni(text: string, nazev: string): UlozeniVysledek {
  try {
    const url = URL.createObjectURL(new Blob([text], { type: 'application/json' }))
    const a = document.createElement('a')
    a.href = url
    a.download = nazev
    a.rel = 'noopener'
    document.body.appendChild(a)
    a.click()
    a.remove()
    // Uvolnit hned by stahování v některých prohlížečích utnulo dřív,
    // než stihne začít.
    window.setTimeout(() => URL.revokeObjectURL(url), 60_000)
    return 'stazeno'
  } catch {
    return 'chyba'
  }
}

/**
 * Uloží zálohu. Volat přímo z obsluhy klepnutí.
 *
 * Zrušení sdílení není chyba: žena si to rozmyslela a nic se nemá stát.
 * Selhání sdílení z jiného důvodu chybou je, a tehdy se ještě zkusí
 * stažení, aby zálohu dostala aspoň nějak.
 */
export function ulozZalohu(text: string, nazev: string): Promise<UlozeniVysledek> {
  const nav = navigator as unknown as SdileniNavigator
  let file: File | null = null
  try {
    file = new File([text], nazev, { type: 'application/json' })
  } catch {
    file = null
  }

  if (file && typeof nav.share === 'function' && nav.canShare?.({ files: [file] })) {
    return nav
      .share({ files: [file] })
      .then<UlozeniVysledek>(() => 'sdileno')
      .catch((e: unknown): UlozeniVysledek => {
        const name = (e as { name?: string } | null)?.name
        if (name === 'AbortError') return 'zruseno'
        return stahni(text, nazev)
      })
  }
  return Promise.resolve(stahni(text, nazev))
}

/**
 * Otevře výběr souboru se zálohou.
 *
 * Vrací `null`, když uživatelka nic nevybere. Zavření dialogu neposílá
 * `change`, takže se čeká i na návrat do okna. Bez toho by slib nikdy
 * nedoběhl a tlačítko by zůstalo viset v „načítám“.
 */
export function vyberZalohu(): Promise<File | null> {
  return new Promise((resolve) => {
    const input = document.createElement('input')
    input.type = 'file'
    // Některé systémy hlásí u .json prázdný typ, takže přípona musí být
    // v seznamu taky, jinak by soubor v dialogu zešedl.
    input.accept = '.json,application/json,text/json'
    input.style.position = 'fixed'
    input.style.left = '-9999px'
    document.body.appendChild(input)

    let hotovo = false
    const konec = (f: File | null): void => {
      if (hotovo) return
      hotovo = true
      input.remove()
      resolve(f)
    }

    input.onchange = () => konec(input.files?.[0] ?? null)
    window.addEventListener('focus', () => window.setTimeout(() => konec(input.files?.[0] ?? null), 600), {
      once: true,
    })
    input.click()
  })
}

/** Přečte soubor jako text. `null`, když se to nepovede. */
export function prectiText(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    const r = new FileReader()
    r.onload = () => resolve(typeof r.result === 'string' ? r.result : null)
    r.onerror = () => resolve(null)
    try {
      r.readAsText(file)
    } catch {
      resolve(null)
    }
  })
}
