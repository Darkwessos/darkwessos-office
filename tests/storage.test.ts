import 'fake-indexeddb/auto';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { db, emptyContext, newScene, textOf } from '../src/db';
import { seedCards } from '../src/cards';
import { initializeContext, updateContext } from '../src/context';
import { snapshot, importBackup, hashText, prepareBackup } from '../src/backupData';
import { write, flush, retryFailed, storageState } from '../src/persistence';
import { COVE_ID, discoverCove, openPlaceInStory } from '../src/atlasIdeas';

// IndexedDB emulation: tests application logic, not browser/mobile durability.
const store = new Map<string, string>();
Object.defineProperty(globalThis, 'localStorage', { value: { getItem: (k: string) => store.get(k) ?? null } });
const makeFile = async (p: unknown, schema = 2) => {
 const payload = JSON.stringify(p);
 return new File([JSON.stringify({ app: 'darkwessos-office', schema, checksum: await hashText(payload), payload })], 'backup.json');
};
const canonical = (p: any) => Object.fromEntries(Object.entries(p).map(([k,v]) => [k, [...v as any[]].sort((a,b) => String(a.id ?? a.key).localeCompare(String(b.id ?? b.key)))]));

test('storage acceptance: manuscript, active context and exact restore', async t => {
 await db.delete(); await db.open();
 const scene = newScene(); scene.title = 'Probni rukopis';
 scene.content = [{ id: 'block-one', type: 'paragraph', props: {}, content: [{ type: 'text', text: 'Chico je sačuvao svoju priču.', styles: {} }], children: [] }];
 await db.scenes.add(scene); await initializeContext(); await db.cards.bulkAdd(seedCards);
 await updateContext({ ...emptyContext(), page: 'WORKSHOP', sceneId: scene.id, selectedCharacters: ['zagor', 'chico'], situationId: 'poker', locationId: 'darkwood', prompt: 'Vizuelni kadar: poker na obali.', cursors: { [scene.id]: 'block-one' } });
 await db.meta.put({ key: 'deckInitialized', value: true });
 await db.revisions.add({ id: 'revision-one', sceneId: scene.id, title: scene.title, content: scene.content, createdAt: 123 });
 await db.notes.add({ id: 'note-one', projectId: 'darkwessos', title: 'Trag', body: 'Ne zaboravi čamac.', createdAt: 1, updatedAt: 1, revision: 1, syncState: 'local' });
 await db.sources.add({ id: 'source-one', projectId: 'darkwessos', name: 'Izvor', text: 'Radni izvor.', sha256: 'demo', importedAt: 1 });
 await db.visuals.add({ id: 'visual-one', prompt: 'Vizuelni kadar: poker na obali.', characterIds: ['zagor', 'chico'], situationId: 'poker', locationId: 'darkwood', status: 'TEST', createdAt: 1 });
 const original = canonical(await snapshot());
 await t.test('close/reopen database retains identical logical state', async () => { db.close(); await db.open(); assert.deepEqual(canonical(await snapshot()), original); });
 await t.test('export/import restores all tables and context exactly, removes later extras', async () => {
  const file = await makeFile(original);
  await db.scenes.update(scene.id, { title: 'Promijenjen naslov' }); await db.notes.add({ ...(await db.notes.get('note-one'))!, id: 'extra' });
  await updateContext({ selectedCharacters: [], prompt: '', locationId: null });
  await importBackup(file); assert.deepEqual(canonical(await snapshot()), original);
 });
 await t.test('fresh database restoration preserves manuscript and revisions', async () => { const file = await makeFile(original); await db.delete(); await db.open(); await importBackup(file); assert.deepEqual(canonical(await snapshot()), original); });
 await t.test('corrupt checksum is rejected without mutation', async () => {
  const file = new File([JSON.stringify({ app: 'darkwessos-office', schema: 2, payload: JSON.stringify(original), checksum: 'incorrect' })], 'broken.json');
  await assert.rejects(importBackup(file), /Kontrolna suma/); assert.deepEqual(canonical(await snapshot()), original);
 });
 await t.test('dangling card references are rejected without mutation', async () => { const p = structuredClone(original) as any; p.meta.find((m: any) => m.key === 'activeContext').value.selectedCharacters = ['missing']; await assert.rejects(importBackup(await makeFile(p)), /kontekst/); assert.deepEqual(canonical(await snapshot()), original); });
 await t.test('duplicate identities rejected before replacement', async () => { const p = structuredClone(original) as any; p.scenes.push(p.scenes[0]); await assert.rejects(importBackup(await makeFile(p)), /identiteti/); assert.deepEqual(canonical(await snapshot()), original); });
 await t.test('queued edits finish before snapshot', async () => { await write(() => db.scenes.update(scene.id, { title: 'Posljednji upis' })); assert.equal((await snapshot()).scenes[0].title, 'Posljednji upis'); await importBackup(await makeFile(original)); });
 await t.test('failed write blocks export and later writes; retry replays in order', async () => {
  let fail = true;
  await assert.rejects(write(async () => { if (fail) throw new Error('Disk error'); await db.scenes.update(scene.id, { title: 'Prvi upis' }); }));
  await assert.rejects(write(() => db.scenes.update(scene.id, { title: 'Drugi upis' })));
  await assert.rejects(flush(), /Disk error/); assert.ok(storageState().error);
  fail = false; await retryFailed(); assert.equal((await snapshot()).scenes[0].title, 'Drugi upis'); assert.equal(storageState().error, null);
  await importBackup(await makeFile(original));
 });
 await t.test('word counting handles table and nested inline content without blocking saves', () => {
  assert.match(textOf([{ content: { type: 'tableContent', rows: [{ cells: [[{ type: 'text', text: 'Čamac u magli' }]] }] }, children: [{ content: [{ type: 'link', content: [{ type: 'text', text: 'obala' }] }] }] }]), /Čamac u magli/);
 });
 await t.test('preparing a valid copy does not replace data before confirmation', async () => {
  const changed = structuredClone(original) as any;
  changed.scenes[0].title = 'Još nije potvrđeno';
  const prepared = await prepareBackup(await makeFile(changed));
  assert.equal(prepared.payload.scenes[0].title, 'Još nije potvrđeno');
  assert.deepEqual(canonical(await snapshot()), original);
 });
 await t.test('corrupt copy fails in preparation, before replacement confirmation', async () => {
  await assert.rejects(prepareBackup(new File(['{"app":"darkwessos-office","schema":2,"payload":"{}","checksum":"bad"}'], 'bad.json')), /Kontrolna suma/);
  assert.deepEqual(canonical(await snapshot()), original);
 });
 await t.test('legacy v1 copy migrates without losing original scene content', async () => {
  const p: any = original; await importBackup(await makeFile({ scenes: p.scenes, notes: p.notes, revisions: p.revisions, sources: p.sources }, 1));
  assert.deepEqual((await snapshot()).scenes, p.scenes); assert.deepEqual((await snapshot()).revisions, p.revisions);
 });
 await db.delete();
});


test('Atlas pilot: one stable place, no overwrite, context survives close and backup', async () => {
  await db.delete(); await db.open();
  await initializeContext();
  await discoverCove();
  const found = (await db.cards.get(COVE_ID))!;
  assert.equal(found.kind, 'mjesto');
  assert.equal(found.status, 'TEST');
  assert.equal(found.canonStatus, 'NON_CANON');
  assert.equal(found.geometryState, 'SCHEMATIC');
  assert.match(found.impulse ?? '', /\?/);
  await db.cards.update(COVE_ID, { text: 'Autorska radna dopuna, nije kanon.' });
  await discoverCove(); // repeat must not replace user's edits or duplicate an identity
  assert.equal(await db.cards.where('id').equals(COVE_ID).count(), 1);
  assert.equal((await db.cards.get(COVE_ID))!.text, 'Autorska radna dopuna, nije kanon.');
  await openPlaceInStory(COVE_ID);
  const ctx = (await db.meta.get('activeContext'))!.value;
  assert.equal(ctx.page, 'STORY');
  assert.equal(ctx.locationId, COVE_ID);
  assert.equal(ctx.sceneId, null); // did not silently create or edit a manuscript scene
  const before = canonical(await snapshot());
  db.close(); await db.open();
  assert.deepEqual(canonical(await snapshot()), before);
  const backup = await makeFile(before);
  await db.cards.update(COVE_ID, { text: 'Naknadna promjena' });
  await importBackup(backup);
  assert.deepEqual(canonical(await snapshot()), before);
  await assert.rejects(openPlaceInStory('unknown-place'), /nije dostupno/);
  await db.delete();
});
