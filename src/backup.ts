import { BlockNoteEditor } from '@blocknote/core';
import { db } from './db';
import { flush } from './persistence';
import { snapshot } from './backupData';
export { snapshot, importBackup, prepareBackup, restorePreparedBackup, hashText } from './backupData';
import { hashText } from './backupData';

import { deliverFile } from './native';
const day = () => new Date().toISOString().slice(0, 10);
export async function exportBackup() {
  const payload = JSON.stringify(await snapshot());
  const file = { app: 'darkwessos-office', schema: 2, exportedAt: Date.now(), checksum: await hashText(payload), payload };
  return deliverFile(`darkwessos-backup-${day()}.json`, JSON.stringify(file), 'application/json');
}
export async function exportMarkdown() {
  await flush(); const ed = BlockNoteEditor.create();
  const scenes = await db.scenes.orderBy('createdAt').filter(s => !s.deletedAt).toArray();
  let out = '';
  for (const s of scenes) out += `# ${s.title}\n\n${await ed.blocksToMarkdownLossy(s.content as any)}\n\n---\n\n`;
  return deliverFile(`darkwessos-rukopis-${day()}.md`, out, 'text/markdown');
}
export async function requestPersistence() {
  try {
    const persisted = (await navigator.storage?.persisted?.()) || (await navigator.storage?.persist?.()) || false;
    const est = await navigator.storage?.estimate?.();
    return { persisted: !!persisted, usedKB: Math.round((est?.usage ?? 0) / 1024) };
  } catch { return { persisted: false, usedKB: 0 }; }
}
