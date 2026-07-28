import Database from 'better-sqlite3'
import { readFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { randomUUID } from 'node:crypto'

/**
 * SQLite přes better-sqlite3. Synchronní API je tady výhoda — server komponenty
 * v Next.js můžou číst přímo, bez asynchronní obálky okolo každého dotazu.
 */

const DATA_DIR = process.env.GABI_DATA_DIR ?? join(process.cwd(), 'data')
const DB_PATH = join(DATA_DIR, 'gabi.db')

let _db: Database.Database | null = null

export function db(): Database.Database {
  if (_db) return _db

  if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true })

  const instance = new Database(DB_PATH)
  instance.pragma('journal_mode = WAL')
  instance.pragma('foreign_keys = ON')

  const schemaPath = join(process.cwd(), 'src', 'lib', 'db', 'schema.sql')
  const schema = readFileSync(schemaPath, 'utf8')
  instance.exec(schema)

  _db = instance
  return instance
}

export function uid(prefix = ''): string {
  const raw = randomUUID().replace(/-/g, '').slice(0, 20)
  return prefix ? `${prefix}_${raw}` : raw
}

export function nowIso(): string {
  return new Date().toISOString()
}

/** Bezpečné čtení JSON sloupce. */
export function parseJson<T>(value: unknown, fallback: T): T {
  if (typeof value !== 'string') return fallback
  try {
    return JSON.parse(value) as T
  } catch {
    return fallback
  }
}

export function ensureDataDir(sub?: string): string {
  const dir = sub ? join(DATA_DIR, sub) : DATA_DIR
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  return dir
}

export function dataPath(...parts: string[]): string {
  const p = join(DATA_DIR, ...parts)
  mkdirSync(dirname(p), { recursive: true })
  return p
}
