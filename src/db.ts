import Dexie, { type Table } from 'dexie';

// Model je od početka spreman za Supabase: UUID id, projectId, updatedAt, revision,
// syncState i tombstone (deletedAt). Sinhronizacija još NE postoji — syncState je samo priprema.
export const PROJECT_ID = 'darkwessos';
export type SyncState = 'local' | 'pending' | 'synced';

interface Syncable { id: string; projectId: string; createdAt: number; updatedAt: number;
  revision: number; syncState: SyncState; deletedAt?: number | null }

export interface Scene extends Syncable {
  title: string;
  content: any[];   // izvorni BlockNote JSON blokovi — original rukopisa
  notes: string;    // bilješke uz prizor, odvojene od rukopisa
  status: 'draft' | 'revision' | 'final';
  wordCount: number;
}
export interface Note extends Syncable { title: string; body: string }
export interface Revision { id: string; sceneId: string; title: string; content: any[]; createdAt: number }
// ARCHIVE: uvezeni izvori, samo za čitanje. Ne mijenjaju kanon.
export interface Source { id: string; projectId: string; name: string; text: string; sha256: string; importedAt: number }
export interface Meta { key: string; value: any }

export interface Card { id: string; kind: string; name: string; text: string; x?: number; y?: number;
  status?: 'TEST'; canonStatus?: 'NON_CANON'; geometryState?: 'SCHEMATIC';
  sourceNote?: string; impulse?: string;
}
export interface VisualResult { id: string; prompt: string; characterIds: string[]; situationId: string; locationId: string | null; status: 'TEST'; createdAt: number }

class OfficeDB extends Dexie {
  cards!: Table<Card, string>;
  visuals!: Table<VisualResult, string>;
  scenes!: Table<Scene, string>;
  notes!: Table<Note, string>;
  revisions!: Table<Revision, string>;
  sources!: Table<Source, string>;
  meta!: Table<Meta, string>;
  constructor() {
    super('darkwessos-office');
    this.version(1).stores({
      scenes: 'id,projectId,createdAt,updatedAt,syncState,deletedAt',
      notes: 'id,projectId,updatedAt,deletedAt',
      revisions: 'id,sceneId,createdAt',
      sources: 'id,name,importedAt',
      meta: 'key'
    });
    this.version(2).stores({ cards: 'id,kind', visuals: 'id,createdAt' });
  }
}
export const db = new OfficeDB();

export const uid = () => crypto.randomUUID();
export const touch = (x: Syncable) => { x.updatedAt = Date.now(); x.revision++; x.syncState = 'pending'; };

const base = (): Syncable => { const t = Date.now();
  return { id: uid(), projectId: PROJECT_ID, createdAt: t, updatedAt: t, revision: 1, syncState: 'local', deletedAt: null }; };
export const newScene = (): Scene => ({ ...base(), title: 'Novi prizor', content: [], notes: '', status: 'draft', wordCount: 0 });
export const newNote = (): Note => ({ ...base(), title: 'Nova bilješka', body: '' });

export function textOf(blocks: any[]): string {
  const visit = (value: any): string => {
    if (Array.isArray(value)) return value.map(visit).join(' ');
    if (!value || typeof value !== 'object') return '';
    if (typeof value.text === 'string') return value.text;
    return ['content', 'children', 'rows', 'cells'].map(key => visit(value[key])).join(' ');
  };
  return visit(blocks);
}

export type OfficePage = 'STORY' | 'WORKSHOP' | 'ATLAS' | 'MORE';
export interface ActiveContext {
  page: OfficePage;
  sceneId: string | null;
  selectedCharacters: string[];
  situationId: string | null;
  locationId: string | null;
  prompt: string;
  task: string;
  cursors: Record<string, string>;
}
export const emptyContext = (): ActiveContext => ({ page: 'STORY', sceneId: null,
  selectedCharacters: [], situationId: null, locationId: null, prompt: '',
  task: 'Zanimljiv kadar, humor iz karaktera i prirodan ambijent.', cursors: {} });
