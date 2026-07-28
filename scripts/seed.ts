/**
 * Naplní databázi ukázkovým účtem, aby se dala platforma hned prozkoumat.
 *
 *   npm run seed
 *
 * Vytvoří uživatelku uprostřed čekání na HCG — tedy v nejnáročnější fázi,
 * kde je nejlíp vidět, co platforma umí.
 */

import { db, uid, nowIso } from '../src/lib/db'
import { createSession, createUser, activateSubscription } from '../src/lib/auth'
import { updateProfile, upsertJournal, recordContentEvent, getProfile } from '../src/lib/db/repo'
import { addLabValue, addMeasurement, addMedication, addEvent, logMedication } from '../src/lib/db/repo-health'
import { addLetter, addTimelineEvent } from '../src/lib/db/repo-story'
import { addPost, communityName, matchedGroups } from '../src/lib/db/repo-community'
import { resolveJourney } from '../src/lib/domain/journey'
import { addDays, today } from '../src/lib/domain/dates'
import { CATALOG } from '../src/lib/content'

const EMAIL = 'demo@ivfbygabi.cz'
const PASSWORD = 'demo1234'

function main() {
  const database = db()
  const existing = database.prepare('SELECT id FROM users WHERE email = ?').get(EMAIL) as
    | { id: string }
    | undefined

  if (existing) {
    console.log(`Ukázkový účet už existuje (${EMAIL}). Mažu a vytvářím znovu…`)
    database.prepare('DELETE FROM users WHERE id = ?').run(existing.id)
  }

  const user = createUser(EMAIL, PASSWORD, 'Tereza')
  activateSubscription(user.id, 'monthly')
  database.prepare('UPDATE users SET onboarded = 1 WHERE id = ?').run(user.id)

  const now = today()
  const transferOn = addDays(now, -6)
  const retrievalOn = addDays(now, -11)
  const stimulationStartOn = addDays(now, -23)

  updateProfile(user.id, {
    displayName: 'Tereza',
    anonymousInCommunity: true,
    declaredPhase: 'two_week_wait',
    birthYear: 1991,
    modifiers: ['low_amh', 'icsi', 'frozen_transfer'],
    tryingSince: addDays(now, -820),
    diagnosticsStartedOn: addDays(now, -560),
    stimulationStartOn,
    retrievalOn,
    transferOn,
    amh: 0.9,
    ivfCycles: 2,
    transfersDone: 2,
    embryosCreated: 4,
    embryosFrozen: 1,
    embryoDayAtTransfer: 5,
    clinicName: 'Klinika reprodukční medicíny',
  })

  const profile = getProfile(user.id)
  const state = resolveJourney(profile, now)

  // --- Deník: posledních 21 dní ------------------------------------------
  const notes = [
    'Dneska to šlo. Snažím se nemyslet na to, co bude za týden.',
    'Ráno mi bylo úzko. Odpoledne líp. Takhle to skáče každý den.',
    'Píchání v podbřišku. Googlila jsem to a to byla chyba.',
    'Kolegyně oznámila, že je těhotná. Usmála jsem se a odešla na záchod.',
    'Dnes jsem si poprvé za dlouho pustila hudbu a tancovala v kuchyni.',
    'Nemůžu spát. Ve tři ráno je všechno horší.',
    'Manžel mi udělal snídani, aniž bych o to prosila. Skoro jsem se rozbrečela.',
  ]

  for (let i = 20; i >= 0; i--) {
    const date = addDays(now, -i)
    const wave = Math.sin(i / 3)
    upsertJournal(user.id, date, {
      mood: clamp(3 + Math.round(wave * 1.4)),
      anxiety: clamp(3 - Math.round(wave * 1.2)),
      hope: clamp(3 + Math.round(Math.cos(i / 4) * 1.3)),
      energy: clamp(3 + Math.round(Math.cos(i / 5) * 1.1)),
      pain: i < 8 ? clamp(2 + Math.round(Math.abs(wave))) : null,
      sleepHours: 6 + Math.round(wave * 10) / 10,
      waterMl: 1600 + (i % 5) * 250,
      weightKg: 64 + Math.round(Math.sin(i / 6) * 8) / 10,
      symptoms: i < 7 ? ['Píchání v podbřišku', 'Citlivá prsa'] : ['Únava'],
      note: i % 3 === 0 ? notes[i % notes.length] : null,
      gratitude: i % 4 === 0 ? 'Za to, že v tom nejsem sama.' : null,
      phaseId: resolveJourney(profile, date).phase.id,
      dayInPhase: resolveJourney(profile, date).dayInPhase,
    })
  }

  // --- Laboratorní hodnoty ------------------------------------------------
  const labs: Array<[string, number, string, number]> = [
    ['amh', 1.4, 'ng/ml', -700],
    ['amh', 1.1, 'ng/ml', -380],
    ['amh', 0.9, 'ng/ml', -60],
    ['fsh', 8.2, 'IU/l', -60],
    ['lh', 4.6, 'IU/l', -60],
    ['tsh', 2.4, 'mIU/l', -60],
    ['vitamin_d', 58, 'nmol/l', -60],
    ['estradiol', 320, 'pmol/l', -23],
    ['estradiol', 1840, 'pmol/l', -17],
    ['estradiol', 6120, 'pmol/l', -12],
    ['progesteron', 42, 'nmol/l', -3],
  ]
  for (const [key, value, unit, offset] of labs) {
    addLabValue(user.id, { paramKey: key, value, unit, onDate: addDays(now, offset) })
  }

  addMeasurement(user.id, 'weight', 64.2, addDays(now, -30))
  addMeasurement(user.id, 'weight', 65.1, addDays(now, -10))
  addMeasurement(user.id, 'weight', 65.4, now)

  // --- Léky ---------------------------------------------------------------
  const progesterone = addMedication(user.id, {
    name: 'Progesteron (vaginálně)',
    dose: 'podle předpisu',
    route: 'vaginálně',
    timeOfDay: '08:00',
    startOn: transferOn,
    endOn: addDays(now, 20),
    note: null,
  })
  addMedication(user.id, {
    name: 'Kyselina listová',
    dose: 'podle předpisu',
    route: 'tableta',
    timeOfDay: '08:00',
    startOn: addDays(now, -120),
    endOn: null,
    note: null,
  })
  logMedication(user.id, progesterone.id, now)

  // --- Kalendář ------------------------------------------------------------
  addEvent(user.id, {
    title: 'Odběr krve — beta HCG',
    kind: 'hcg',
    onDate: addDays(now, 5),
    atTime: '07:30',
    location: 'Klinika reprodukční medicíny',
    note: 'Nalačno není potřeba.',
  })
  addEvent(user.id, {
    title: 'Kontrola u gynekoložky',
    kind: 'kontrola',
    onDate: addDays(now, 26),
    atTime: '14:00',
    location: null,
    note: null,
  })

  // --- Kronika -------------------------------------------------------------
  addTimelineEvent(user.id, {
    onDate: retrievalOn,
    title: 'Odběr vajíček — získáno 7 vajíček',
    body: 'Zákrok proběhl v pořádku. Byla jsem doma do oběda.',
    kind: 'milnik',
    icon: '◍',
    mediaId: null,
  })
  addTimelineEvent(user.id, {
    onDate: addDays(retrievalOn, 5),
    title: 'Jedna blastocysta na transfer, jedna k zamražení',
    body: 'Ze sedmi vajíček se oplodnily čtyři. Do pátého dne to zvládly dvě.',
    kind: 'vysledek',
    icon: '❋',
    mediaId: null,
  })
  addTimelineEvent(user.id, {
    onDate: transferOn,
    title: 'Transfer',
    body: 'Trvalo to pět minut. Čekala jsem na to dva roky.',
    kind: 'milnik',
    icon: '❋',
    mediaId: null,
  })

  addLetter(user.id, {
    toWhom: 'embryo',
    title: 'Ahoj, ty malá',
    body: `Dnes tě do mě vrátili.

Vím, že o mně nic nevíš. Že jsi jenom shluk buněk, který se rozhoduje, jestli zůstane. Ale já o tobě vím od chvíle, kdy mi z laboratoře volali, že jsi to zvládla do pátého dne.

Nebudu tě prosit. Nebudu ti slibovat, co všechno spolu zažijeme, protože nechci, abys měla pocit, že něco dlužíš.

Jenom chci, abys věděla, že tady jsem. A že ať to dopadne jakkoliv, tenhle týden jsi byla se mnou.`,
    onDate: transferOn,
    sealedUntil: null,
  })

  // --- Chování → personalizace --------------------------------------------
  const viewed = CATALOG.filter((c) => c.topics.includes('cekani') || c.topics.includes('psychika')).slice(0, 8)
  for (const item of viewed) {
    recordContentEvent(user.id, item.id, 'view', 120)
  }

  // --- Komunita ------------------------------------------------------------
  const groups = matchedGroups(profile, state)
  const circle = groups.find((g) => g.slug === 'vecerni-kruh')
  if (circle) {
    const author = communityName(profile, state)
    addPost(
      circle.id,
      user.id,
      author,
      'Šestý den po transferu a mám pocit, že se čas zastavil. Jak jste to zvládaly vy?',
      state.phase.id,
    )
  }

  const token = createSession(user.id)
  database.prepare('UPDATE sessions SET created_at = ? WHERE token = ?').run(nowIso(), token)

  console.log('\nHotovo. Ukázkový účet:')
  console.log(`  E-mail:  ${EMAIL}`)
  console.log(`  Heslo:   ${PASSWORD}`)
  console.log(`  Fáze:    ${state.phase.title} — ${state.dayLabel}`)
  console.log(`\nSpusťte 'npm run dev' a přihlaste se.\n`)
}

function clamp(n: number): number {
  return Math.max(1, Math.min(5, n))
}

main()
