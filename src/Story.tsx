import { useCallback, useEffect, useRef, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { useCreateBlockNote } from '@blocknote/react';
import { BlockNoteView } from '@blocknote/mantine';
import '@blocknote/core/fonts/inter.css';
import '@blocknote/mantine/style.css';
import { db, newScene, textOf, touch, uid, type Scene, type ActiveContext } from './db';
import { updateContext } from './context';
import { write } from './persistence';

const isDark = () => true; // Living Nord — always dark

function Editor({ scene, context, onState }: { scene: Scene; context: ActiveContext; onState: (s: string) => void }) {
  const editor = useCreateBlockNote({ initialContent: scene.content.length ? scene.content as any : undefined });
  const lastRev = useRef(0);
  useEffect(() => {
    const block = context.cursors[scene.id];
    if (block) { try { editor.setTextCursorPosition(block, 'end'); } catch {} }
  }, [editor, scene.id]);
  return <BlockNoteView editor={editor} theme="dark"
    onSelectionChange={() => {
      try {
        const block = editor.getTextCursorPosition().block.id;
        void write(async () => {
          const current = (await db.meta.get('activeContext'))!.value as ActiveContext;
          if (current.cursors[scene.id] !== block) await db.meta.put({ key: 'activeContext', value: { ...current, cursors: { ...current.cursors, [scene.id]: block } } });
        }).catch(() => onState('Greška spremanja položaja'));
      } catch {}
    }}
    onChange={() => {
      // Capture the full document now; do not rely on an unmount timer to save it.
      const content = JSON.parse(JSON.stringify(editor.document));
      onState('Spašavam…');
      void write(() => db.transaction('rw', db.scenes, db.revisions, async () => {
        const current = await db.scenes.get(scene.id);
        if (!current || current.deletedAt) throw new Error('Prizor nije dostupan.');
        const now = Date.now();
        if (now - lastRev.current > 10 * 60 * 1000) {
          await db.revisions.put({ id: uid(), sceneId: scene.id, title: current.title, content: current.content, createdAt: now });
          lastRev.current = now;
        }
        const next = { ...current, content, wordCount: textOf(content).split(/\s+/).filter(Boolean).length };
        touch(next); await db.scenes.put(next);
      })).then(() => onState('Sačuvano lokalno'), () => onState('GREŠKA spremanja — tekst zadrži otvoren i kopiraj ga.'));
    }} />;
}

export default function Story({ context }: { context: ActiveContext }) {
  const scenes = useLiveQuery(() => db.scenes.orderBy('createdAt').filter(s => !s.deletedAt).toArray(), []);
  const activePlace = useLiveQuery(async () => context.locationId ? await db.cards.get(context.locationId) : undefined, [context.locationId]);
  const backedUp = useLiveQuery(async () => !!(await db.meta.get('lastBackup')), []);
  const id = context.sceneId;
  const setId = (sceneId: string | null) => updateContext({ sceneId }).catch(() => setState('GREŠKA spremanja konteksta')); 
  const [state, setState] = useState('');
  const current = scenes?.find(s => s.id === id) ?? scenes?.[0];

  useEffect(() => { if (current && current.id !== id) void setId(current.id); }, [current?.id, id]);

  const patch = (fn: (s: Scene) => void) => current &&
    write(() => db.scenes.where('id').equals(current.id).modify(s => { fn(s); touch(s); })).catch(() => setState('GREŠKA spremanja')); 
  const create = async () => { const s = newScene(); await write(() => db.scenes.add(s)); await setId(s.id); };
  const remove = async () => {
    if (!current || !confirm(`Ukloniti prizor „${current.title}“?`)) return;
    await patch(s => { s.deletedAt = Date.now(); });
    setId(null);
  };

  if (!scenes) return <p className="muted pad">Učitavam…</p>;
  if (!current) return (
    <div className="empty pad">
      <h2>Pisac</h2>
      {activePlace && <p className="atlas-context-banner">Kontekst iz Atlasa: <strong>{activePlace.name}</strong> · {activePlace.canonStatus ?? 'VISUAL ONLY'}. Rukopis nije automatski izmijenjen.</p>}
      <p className="muted">Još nema prizora. Rukopis se čuva na ovom uređaju i radi bez interneta.</p>
      <button className="primary" onClick={create}>Počni prvi prizor</button>
    </div>
  );

  return (
    <div className="story">
      {activePlace && <div className="atlas-context-banner" role="note">Atlas: <strong>{activePlace.name}</strong> · {activePlace.canonStatus ?? 'VISUAL ONLY'} · {activePlace.geometryState ?? 'SCHEMATIC'}<p>Radni kontekst, bez automatske izmjene rukopisa.</p><button type="button" onClick={() => void updateContext({ page: 'ATLAS' }).catch(() => setState('Greška povratka u Atlas'))}>Vrati se na mapu</button></div>}
      <div className="bar">
        <select value={current.id} onChange={e => setId(e.target.value)} aria-label="Prizor">
          {scenes.map(s => <option key={s.id} value={s.id}>{s.title || 'Bez naslova'}</option>)}
        </select>
        <button onClick={create}>+ Novi</button>
        <button onClick={remove} className="danger">Ukloni</button>
      </div>
      <input aria-label="Naslov prizora" className="title" key={current.id + 't'} defaultValue={current.title}
        onChange={e => { const value = e.target.value; void patch(s => { s.title = value; }); }} placeholder="Naslov prizora" />
      <div className="meta muted">
        {current.wordCount} riječi · {state || 'Sačuvano lokalno'}
        {!backedUp && <span className="warn"> · nema vanjske kopije</span>}
      </div>
      <div className="editor"><Editor key={current.id} scene={current} context={context} onState={setState} /></div>
      <details className="notes">
        <summary>Bilješke uz prizor (nisu dio rukopisa)</summary>
        <textarea key={current.id + 'n'} defaultValue={current.notes} placeholder="Provjere, ideje, otvorena pitanja…"
          onChange={e => { const value = e.target.value; void patch(s => { s.notes = value; }); }} />
      </details>
    </div>
  );
}
