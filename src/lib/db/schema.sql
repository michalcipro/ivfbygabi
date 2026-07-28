-- IVF by Gabi — schéma
-- Zdravotní data jsou citlivá. Ukládáme jen to, co uživatelka sama zadá,
-- a vše, co může identifikovat, drží uživatelka pod kontrolou (anonymní režim).

PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id                TEXT PRIMARY KEY,
  email             TEXT NOT NULL UNIQUE,
  password_hash     TEXT NOT NULL,
  display_name      TEXT NOT NULL DEFAULT '',
  role              TEXT NOT NULL DEFAULT 'member',   -- member | partner | admin
  created_at        TEXT NOT NULL,
  last_seen_at      TEXT,
  -- Předplatné
  trial_ends_at     TEXT,
  sub_status        TEXT NOT NULL DEFAULT 'trialing', -- trialing | active | past_due | canceled
  sub_until         TEXT,
  sub_plan          TEXT NOT NULL DEFAULT 'monthly',  -- monthly | yearly
  -- Nastavení
  theme             TEXT NOT NULL DEFAULT 'light',
  onboarded         INTEGER NOT NULL DEFAULT 0,
  -- Rodinný režim: k jakému hlavnímu účtu je tento profil připojen
  linked_to_user_id TEXT REFERENCES users(id) ON DELETE SET NULL,
  link_role         TEXT                                -- partner | coparent | grandparent | pediatrician
);

CREATE INDEX IF NOT EXISTS idx_users_linked ON users(linked_to_user_id);

CREATE TABLE IF NOT EXISTS sessions (
  token       TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  created_at  TEXT NOT NULL,
  expires_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

CREATE TABLE IF NOT EXISTS profiles (
  id                        TEXT PRIMARY KEY,
  user_id                   TEXT NOT NULL UNIQUE REFERENCES users(id) ON DELETE CASCADE,
  display_name              TEXT NOT NULL DEFAULT '',
  anonymous_in_community    INTEGER NOT NULL DEFAULT 1,
  declared_phase            TEXT,
  birth_year                INTEGER,
  modifiers                 TEXT NOT NULL DEFAULT '[]',
  trying_since              TEXT,
  diagnostics_started_on    TEXT,
  iui_on                    TEXT,
  stimulation_start_on      TEXT,
  retrieval_on              TEXT,
  transfer_on               TEXT,
  beta_test_on              TEXT,
  loss_on                   TEXT,
  last_period_on            TEXT,
  due_date                  TEXT,
  birth_on                  TEXT,
  nicu_admission_on         TEXT,
  came_home_on              TEXT,
  amh                       REAL,
  ivf_cycles                INTEGER NOT NULL DEFAULT 0,
  transfers_done            INTEGER NOT NULL DEFAULT 0,
  miscarriages              INTEGER NOT NULL DEFAULT 0,
  embryos_created           INTEGER NOT NULL DEFAULT 0,
  embryos_frozen            INTEGER NOT NULL DEFAULT 0,
  embryo_day_at_transfer    INTEGER,
  gestational_weeks_at_birth REAL,
  clinic_name               TEXT,
  created_at                TEXT NOT NULL,
  updated_at                TEXT NOT NULL
);

-- Deník: jeden zápis na den, plus volné poznámky
CREATE TABLE IF NOT EXISTS journal_entries (
  id            TEXT PRIMARY KEY,
  user_id       TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  on_date       TEXT NOT NULL,
  mood          INTEGER,          -- 1–5 celkové rozpoložení
  anxiety       INTEGER,          -- 1–5
  hope          INTEGER,          -- 1–5
  energy        INTEGER,          -- 1–5
  pain          INTEGER,          -- 1–5
  sleep_hours   REAL,
  water_ml      INTEGER,
  weight_kg     REAL,
  symptoms      TEXT NOT NULL DEFAULT '[]',
  note          TEXT,
  gratitude     TEXT,
  phase_id      TEXT,
  day_in_phase  INTEGER,
  created_at    TEXT NOT NULL,
  updated_at    TEXT NOT NULL,
  UNIQUE (user_id, on_date)
);

CREATE INDEX IF NOT EXISTS idx_journal_user_date ON journal_entries(user_id, on_date DESC);

-- Léky a injekce
CREATE TABLE IF NOT EXISTS medications (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name        TEXT NOT NULL,
  dose        TEXT,
  route       TEXT,             -- injekce | tableta | vaginálně | náplast
  time_of_day TEXT,             -- 'HH:MM'
  start_on    TEXT,
  end_on      TEXT,
  active      INTEGER NOT NULL DEFAULT 1,
  note        TEXT,
  created_at  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS medication_logs (
  id             TEXT PRIMARY KEY,
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  medication_id  TEXT REFERENCES medications(id) ON DELETE CASCADE,
  taken_at       TEXT NOT NULL,
  on_date        TEXT NOT NULL,
  site           TEXT,          -- místo vpichu
  note           TEXT
);

CREATE INDEX IF NOT EXISTS idx_medlog_user_date ON medication_logs(user_id, on_date DESC);

-- Kalendář a připomínky
CREATE TABLE IF NOT EXISTS calendar_events (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  kind        TEXT NOT NULL,     -- kontrola | odber | transfer | uz | hcg | ockovani | lek | vlastni
  on_date     TEXT NOT NULL,
  at_time     TEXT,
  location    TEXT,
  note        TEXT,
  done        INTEGER NOT NULL DEFAULT 0,
  auto        INTEGER NOT NULL DEFAULT 0,   -- vygenerováno platformou
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cal_user_date ON calendar_events(user_id, on_date);

-- Časová osa / rodinná kronika
CREATE TABLE IF NOT EXISTS timeline_events (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  on_date     TEXT NOT NULL,
  title       TEXT NOT NULL,
  body        TEXT,
  kind        TEXT NOT NULL,     -- milnik | foto | vysledek | zapis | dopis | prvni
  icon        TEXT,
  media_id    TEXT,
  auto        INTEGER NOT NULL DEFAULT 0,
  pinned      INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_timeline_user_date ON timeline_events(user_id, on_date DESC);

-- Dopisy miminku
CREATE TABLE IF NOT EXISTS letters (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  to_whom     TEXT NOT NULL DEFAULT 'baby',  -- embryo | baby | lost | self | partner
  title       TEXT,
  body        TEXT NOT NULL,
  on_date     TEXT NOT NULL,
  sealed_until TEXT,
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_letters_user ON letters(user_id, on_date DESC);

-- Dokumenty (lékařské zprávy)
CREATE TABLE IF NOT EXISTS documents (
  id             TEXT PRIMARY KEY,
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title          TEXT NOT NULL,
  category       TEXT NOT NULL,   -- hormony | spermiogram | embryologie | genetika | uz | propousteci | pediatr | jine
  on_date        TEXT NOT NULL,
  mime           TEXT,
  size_bytes     INTEGER,
  storage_key    TEXT,
  raw_text       TEXT,            -- rozpoznaný text
  parsed_summary TEXT,            -- shrnutí od AI
  created_at     TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_docs_user ON documents(user_id, on_date DESC);

-- Laboratorní hodnoty (z dokumentů i ručně)
CREATE TABLE IF NOT EXISTS lab_values (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  document_id TEXT REFERENCES documents(id) ON DELETE SET NULL,
  param_key   TEXT NOT NULL,
  value       REAL NOT NULL,
  unit        TEXT,
  on_date     TEXT NOT NULL,
  note        TEXT,
  source      TEXT NOT NULL DEFAULT 'manual', -- manual | ocr
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_lab_user_param ON lab_values(user_id, param_key, on_date);

-- Měření (váha, tlak, dítě)
CREATE TABLE IF NOT EXISTS measurements (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  metric     TEXT NOT NULL,   -- weight | bp_sys | bp_dia | glucose | baby_weight | baby_length | baby_head | milk_ml
  value      REAL NOT NULL,
  unit       TEXT,
  on_date    TEXT NOT NULL,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_meas_user_metric ON measurements(user_id, metric, on_date);

-- Chování → personalizace
CREATE TABLE IF NOT EXISTS content_events (
  id          TEXT PRIMARY KEY,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content_id  TEXT NOT NULL,
  action      TEXT NOT NULL,   -- view | complete | save | unsave | dismiss
  seconds     INTEGER,
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_cev_user ON content_events(user_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cev_user_content ON content_events(user_id, content_id);

CREATE TABLE IF NOT EXISTS saved_items (
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY (user_id, content_id)
);

-- Stav checklistů
CREATE TABLE IF NOT EXISTS checklist_state (
  user_id      TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  content_id   TEXT NOT NULL,
  entry_id     TEXT NOT NULL,
  done         INTEGER NOT NULL DEFAULT 0,
  updated_at   TEXT NOT NULL,
  PRIMARY KEY (user_id, content_id, entry_id)
);

-- Denní stav (co jí platforma dnes nabídla a co s tím udělala)
CREATE TABLE IF NOT EXISTS daily_state (
  user_id        TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  on_date        TEXT NOT NULL,
  card_id        TEXT,
  task_done      INTEGER NOT NULL DEFAULT 0,
  reflection     TEXT,
  opened_at      TEXT,
  streak         INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, on_date)
);

-- AI Gabi
CREATE TABLE IF NOT EXISTS gabi_threads (
  id         TEXT PRIMARY KEY,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title      TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS gabi_messages (
  id         TEXT PRIMARY KEY,
  thread_id  TEXT NOT NULL REFERENCES gabi_threads(id) ON DELETE CASCADE,
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role       TEXT NOT NULL,   -- user | assistant
  content    TEXT NOT NULL,
  refs       TEXT NOT NULL DEFAULT '[]',  -- id doporučeného obsahu
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_gabi_thread ON gabi_messages(thread_id, created_at);

-- Komunita
CREATE TABLE IF NOT EXISTS community_groups (
  id          TEXT PRIMARY KEY,
  slug        TEXT NOT NULL UNIQUE,
  name        TEXT NOT NULL,
  description TEXT NOT NULL,
  kind        TEXT NOT NULL,   -- phase | clinic | diagnosis | age | due | special
  match_key   TEXT,            -- např. phase:two_week_wait, mod:twins, due:2026-11
  members     INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS community_posts (
  id          TEXT PRIMARY KEY,
  group_id    TEXT NOT NULL REFERENCES community_groups(id) ON DELETE CASCADE,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,     -- respektuje anonymní režim
  body        TEXT NOT NULL,
  hearts      INTEGER NOT NULL DEFAULT 0,
  phase_id    TEXT,
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_posts_group ON community_posts(group_id, created_at DESC);

CREATE TABLE IF NOT EXISTS community_replies (
  id          TEXT PRIMARY KEY,
  post_id     TEXT NOT NULL REFERENCES community_posts(id) ON DELETE CASCADE,
  user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  author_name TEXT NOT NULL,
  body        TEXT NOT NULL,
  hearts      INTEGER NOT NULL DEFAULT 0,
  created_at  TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_replies_post ON community_replies(post_id, created_at);

CREATE TABLE IF NOT EXISTS community_hearts (
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  target_id  TEXT NOT NULL,
  created_at TEXT NOT NULL,
  PRIMARY KEY (user_id, target_id)
);

CREATE TABLE IF NOT EXISTS group_members (
  user_id    TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  group_id   TEXT NOT NULL REFERENCES community_groups(id) ON DELETE CASCADE,
  joined_at  TEXT NOT NULL,
  PRIMARY KEY (user_id, group_id)
);
