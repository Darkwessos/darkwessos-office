import Dexie from 'dexie'

// IndexedDB is scoped to this browser/profile. It is NOT synced to Supabase.
export const db = new Dexie('darkwessos-office-local-v1')
db.version(1).stores({ drafts: 'id,updatedAt' })
