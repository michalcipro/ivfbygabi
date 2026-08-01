/**
 * Přehrávání meditací hlasem.
 *
 * Aplikace nemá server, nemá kam uložit zvukové soubory a nahrávka
 * dvanáctiminutové meditace by vážila víc než celá zbylá aplikace. Prohlížeč
 * ale umí mluvit sám — a česky. Meditace se proto nepřehrává ze souboru,
 * ale předčítá se.
 *
 * Není to profesionální namluvení a nepředstírá, že je. Zato to funguje
 * offline, nestojí to ani bajt navíc a hlavně to existuje — místo popisku
 * „nahrávka se připravuje“, který tu byl doteď.
 *
 * PAUZY JSOU TU TO PODSTATNÉ. Meditace není text přečtený v jednom kuse.
 * Prázdný řádek v předloze znamená ticho — a právě v tom tichu ta věc
 * funguje. Proto se text láme na úseky a mezi ně se vkládá skutečná pauza.
 */

/** Jeden úsek: buď věta k přečtení, nebo ticho. */
interface Chunk {
  text: string
  /** Pauza za úsekem v milisekundách. */
  pauseMs: number
}

export interface SpeechState {
  /** Id položky, která se právě přehrává. */
  id: string | null
  /** Index úseku, u kterého jsme. */
  at: number
  total: number
  paused: boolean
}

const state: SpeechState = { id: null, at: 0, total: 0, paused: false }

let chunks: Chunk[] = []
let timer: number | null = null
let onChange: (() => void) | null = null

/** Je předčítání v tomhle prohlížeči vůbec k dispozici? */
export function speechAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/**
 * Český hlas, pokud nějaký je.
 *
 * Seznam hlasů se v některých prohlížečích plní až asynchronně, proto se
 * na něj nikde nespoléháme — když nic českého není, čte se výchozím hlasem
 * a uživatelce se to napíše. Špatná výslovnost je pořád lepší než nic,
 * ale nemá o ní být překvapená.
 */
export function czechVoice(): SpeechSynthesisVoice | null {
  if (!speechAvailable()) return null
  const voices = window.speechSynthesis.getVoices()
  return voices.find((v) => v.lang.toLowerCase().startsWith('cs')) ?? null
}

/**
 * Rozdělí text meditace na úseky.
 *
 * Nadpisy a odrážky se vyhazují — čte se to, co je psané k poslechu.
 * Prázdný řádek v předloze je pokyn k tichu, ne jen formátování.
 */
export function toChunks(body: string): Chunk[] {
  const out: Chunk[] = []
  const paragraphs = body
    .replace(/\r/g, '')
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)

  for (const p of paragraphs) {
    // Nadpisy, citace a odrážky do mluveného slova nepatří.
    if (/^(#{1,6}\s|>\s|[-*]\s|\d+\.\s)/.test(p)) continue
    const clean = p
      .replace(/\*\*(.+?)\*\*/g, '$1')
      .replace(/\*(.+?)\*/g, '$1')
      .replace(/`(.+?)`/g, '$1')
      .replace(/\s+/g, ' ')
      .trim()
    if (!clean) continue

    // Věty se čtou zvlášť, aby šlo přehrávání zastavit uprostřed odstavce
    // a aby mezi nimi vzniklo přirozené nadechnutí.
    const sentences = clean.match(/[^.!?]+[.!?]*/g) ?? [clean]
    sentences.forEach((s, i) => {
      const text = s.trim()
      if (!text) return
      const last = i === sentences.length - 1
      out.push({ text, pauseMs: last ? 2600 : 700 })
    })
  }
  return out
}

export function speechState(): SpeechState {
  return { ...state }
}

/** Zaregistruje překreslení. Přehrávání běží mimo render, musí si o něj říct. */
export function onSpeechChange(fn: () => void): void {
  onChange = fn
}

function notify(): void {
  onChange?.()
}

function clearTimer(): void {
  if (timer !== null) {
    window.clearTimeout(timer)
    timer = null
  }
}

/** Zastaví a zapomene. Volá se při odchodu z obrazovky. */
export function stopSpeech(): void {
  clearTimer()
  if (speechAvailable()) window.speechSynthesis.cancel()
  state.id = null
  state.at = 0
  state.total = 0
  state.paused = false
  notify()
}

function speakFrom(index: number): void {
  if (!speechAvailable()) return
  if (index >= chunks.length) {
    stopSpeech()
    return
  }
  state.at = index
  notify()

  const chunk = chunks[index]
  const u = new SpeechSynthesisUtterance(chunk.text)
  const voice = czechVoice()
  if (voice) u.voice = voice
  u.lang = voice?.lang ?? 'cs-CZ'
  // Pomaleji a níž než výchozí nastavení. Meditace čtená rychlostí zpráv
  // by byla k ničemu.
  u.rate = 0.82
  u.pitch = 0.95
  u.onend = () => {
    if (state.paused || state.id === null) return
    clearTimer()
    timer = window.setTimeout(() => speakFrom(index + 1), chunk.pauseMs)
  }
  u.onerror = () => stopSpeech()
  window.speechSynthesis.speak(u)
}

/** Spustí předčítání, nebo ho zastaví, když už běží ta samá položka. */
export function toggleSpeech(id: string, body: string): void {
  if (!speechAvailable()) return

  if (state.id === id && !state.paused) {
    state.paused = true
    window.speechSynthesis.cancel()
    clearTimer()
    notify()
    return
  }

  if (state.id === id && state.paused) {
    state.paused = false
    speakFrom(state.at)
    return
  }

  stopSpeech()
  chunks = toChunks(body)
  if (chunks.length === 0) return
  state.id = id
  state.total = chunks.length
  state.paused = false
  speakFrom(0)
}

/** Skok na začátek bez zastavení celé věci. */
export function restartSpeech(): void {
  if (state.id === null) return
  clearTimer()
  if (speechAvailable()) window.speechSynthesis.cancel()
  state.paused = false
  speakFrom(0)
}
