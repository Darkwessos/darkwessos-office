import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handoffExport, exportMessage, ExportHandoffError } from '../src/exportFlow.ts';
import { flush, write, retryFailed, storageState } from '../src/persistence.ts';

test('native export waits for writes, creates exact data, then shares URI', async () => {
  const calls: string[] = [];
  const result = await handoffExport({
    flush: async () => { calls.push('flush'); },
    create: async (name, data) => { assert.equal(name, 'backup.json'); assert.equal(data, '{"payload":"čćž"}'); calls.push('create'); return 'file:///cache/backup.json'; },
    share: async (uri) => { assert.equal(uri, 'file:///cache/backup.json'); calls.push('share'); },
  }, 'backup.json', '{"payload":"čćž"}');
  assert.deepEqual(calls, ['flush', 'create', 'share']);
  assert.equal(result.status, 'handoff');
  assert.match(exportMessage(result), /nije automatski potvrđena/);
});
test('write failure prevents creating or sharing a backup', async () => {
  let calls = 0;
  await assert.rejects(handoffExport({ flush: async () => { throw Error('Disk full'); }, create: async () => { calls++; return ''; }, share: async () => { calls++; } }, 'a.json', '{}'), /Disk full/);
  assert.equal(calls, 0);
});
test('filesystem failure is reported and share never opens', async () => {
  let shared = false;
  await assert.rejects(handoffExport({ flush: async () => {}, create: async () => { throw Error('No space'); }, share: async () => { shared = true; } }, 'a.json', '{}'), /No space/);
  assert.equal(shared, false);
});
test('share cancellation/failure preserves distinction from external success', async () => {
  await assert.rejects(handoffExport({ flush: async () => {}, create: async () => 'cache-uri', share: async () => { throw Error('cancelled'); } }, 'a.json', '{}'), ExportHandoffError);
});
test('flush includes writes enqueued during an existing write', async () => {
  const calls: number[] = [];
  const first = write(async () => { calls.push(1); void write(async () => { await Promise.resolve(); calls.push(2); }); });
  await flush(); await first;
  assert.deepEqual(calls, [1, 2]);
});
test('queue failure blocks flush, then explicit retry preserves order', async () => {
  let fail = true; const calls: number[] = [];
  await assert.rejects(write(async () => { if (fail) throw Error('disk'); calls.push(1); }));
  await assert.rejects(write(async () => { calls.push(2); }));
  await assert.rejects(flush(), /disk/);
  assert.ok(storageState().error);
  fail = false; await retryFailed(); await flush();
  assert.deepEqual(calls, [1, 2]);
});
