import { db, emptyContext, type ActiveContext } from './db';
import { write } from './persistence';
export function updateContext(patch: Partial<ActiveContext>) {
  return write(async () => {
    const current = (await db.meta.get('activeContext'))?.value ?? emptyContext();
    await db.meta.put({ key: 'activeContext', value: { ...current, ...patch } });
  });
}
export async function initializeContext() {
  if (await db.meta.get('activeContext')) return;
  // Preserve the original Office's last scene on first migration.
  await db.meta.put({ key: 'activeContext', value: { ...emptyContext(), sceneId: localStorage.getItem('dw.scene') } });
  const quick = localStorage.getItem('dw.quick');
  if (quick) await db.meta.put({ key: 'legacyQuickNote', value: quick });
}
