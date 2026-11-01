import type { Table } from 'dexie';
import { db, emptyContext } from './db';
import { seedCards } from './cards';
import { flush, write } from './persistence';
async function sha256(s: string) {
  const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
}
export const hashText = sha256;
const tables = (): Table<any, string>[] => [db.scenes, db.notes, db.revisions, db.sources, db.meta, db.cards, db.visuals];
export async function snapshot() {
  await flush();
  return db.transaction('r', tables(), async () => ({
    scenes: await db.scenes.toArray(), notes: await db.notes.toArray(), revisions: await db.revisions.toArray(),
    sources: await db.sources.toArray(), meta: await db.meta.toArray(), cards: await db.cards.toArray(), visuals: await db.visuals.toArray()
  }));
}
const isObj = (x: any) => !!x && typeof x === 'object' && !Array.isArray(x);
function validate(p: any) {
  if (!isObj(p)) throw new Error('Sadržaj kopije nije ispravan.');
  for (const name of ['scenes', 'notes', 'revisions', 'sources', 'meta', 'cards', 'visuals']) {
    if (!Array.isArray(p[name])) throw new Error(`Nedostaje tabela ${name}.`);
    const seen = new Set();
    for (const row of p[name]) {
      const key = name === 'meta' ? row?.key : row?.id;
      if (!isObj(row) || typeof key !== 'string' || !key || seen.has(key)) throw new Error(`Neispravni ili ponovljeni identiteti: ${name}.`);
      seen.add(key);
    }
  }
  for (const s of p.scenes) if (typeof s.title !== 'string' || !Array.isArray(s.content) || !Number.isFinite(s.updatedAt) || !Number.isFinite(s.createdAt) || typeof s.notes !== 'string') throw new Error('Neispravan prizor.');
  for (const n of p.notes) if (typeof n.title !== 'string' || typeof n.body !== 'string') throw new Error('Neispravna bilješka.');
  const scenes = new Set(p.scenes.map((s: any) => s.id));
  for (const r of p.revisions) if (!scenes.has(r.sceneId) || !Array.isArray(r.content)) throw new Error('Neispravna revizija.');
  for (const c of p.cards) if (!['lik', 'situacija', 'mjesto'].includes(c.kind) || typeof c.name !== 'string' || typeof c.text !== 'string') throw new Error('Neispravna kartica.');
  const cards = new Map(p.cards.map((c: any) => [c.id, c]));
  const kind = (id: unknown, k: string) => typeof id === 'string' && (cards.get(id) as any)?.kind === k;
  for (const v of p.visuals) if (!Array.isArray(v.characterIds) || v.characterIds.some((id: string) => !kind(id, 'lik')) || !kind(v.situationId, 'situacija') || (v.locationId !== null && !kind(v.locationId, 'mjesto')) || typeof v.prompt !== 'string' || v.status !== 'TEST') throw new Error('Neispravan vizuelni prijedlog.');
  const ctx = p.meta.find((m: any) => m.key === 'activeContext')?.value;
  if (!isObj(ctx) || !['STORY', 'WORKSHOP', 'ATLAS', 'MORE'].includes(ctx.page) || (ctx.sceneId !== null && !scenes.has(ctx.sceneId)) || !Array.isArray(ctx.selectedCharacters) || ctx.selectedCharacters.some((id: string) => !kind(id, 'lik')) || (ctx.situationId !== null && !kind(ctx.situationId, 'situacija')) || (ctx.locationId !== null && !kind(ctx.locationId, 'mjesto')) || typeof ctx.prompt !== 'string' || typeof ctx.task !== 'string' || !isObj(ctx.cursors)) throw new Error('Neispravan aktivni kontekst.');
}
export async function prepareBackup(f: File) {
  const file = JSON.parse(await f.text());
  if (file?.app !== 'darkwessos-office' || ![1, 2].includes(file.schema) || typeof file.payload !== 'string') throw new Error('Nepodržan format kopije.');
  if (await sha256(file.payload) !== file.checksum) throw new Error('Kontrolna suma se ne podudara. Ništa nije promijenjeno.');
  const p = JSON.parse(file.payload);
  if (file.schema === 1) {
    p.meta = [{ key: 'activeContext', value: { ...emptyContext(), sceneId: p.scenes?.[0]?.id ?? null } }];
    p.cards = seedCards; p.visuals = [];
  }
  validate(p);
  return { payload: p as Awaited<ReturnType<typeof snapshot>>, count: p.scenes.length + p.notes.length };
}
export async function restorePreparedBackup(prepared: Awaited<ReturnType<typeof prepareBackup>>) {
  const p = structuredClone(prepared.payload);
  validate(p); await flush();
  // One atomic replacement: errors abort the entire transaction.
  await write(() => db.transaction('rw', tables(), async () => {
    for (const t of tables()) { await t.clear(); await t.bulkAdd(p[t.name as keyof typeof p]); }
  }));
  return { added: p.scenes.length + p.notes.length, updated: 0 };
}

export async function importBackup(f: File) {
  return restorePreparedBackup(await prepareBackup(f));
}
