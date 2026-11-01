import { useRef, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, PROJECT_ID, uid } from './db';
import { hashText } from './backup';

// ARCHIVE v0.1: uvoz projektnih izvora (.md/.txt/.json) i pregled SAMO ZA ČITANJE.
// Uvoz ne mijenja kanon i ne povezuje se s rukopisom.
export default function Archive() {
  const sources = useLiveQuery(() => db.sources.orderBy('name').toArray(), []);
  const [open, setOpen] = useState<string | null>(null);
  const file = useRef<HTMLInputElement>(null);
  const cur = sources?.find(s => s.id === open);

  const add = async (files: FileList | null) => {
    for (const f of Array.from(files || [])) {
      const text = await f.text();
      const sha256 = await hashText(text);
      const old = await db.sources.where('name').equals(f.name).first();
      if (old?.sha256 === sha256) continue;
      if (old) await db.sources.delete(old.id);
      await db.sources.add({ id: uid(), projectId: PROJECT_ID, name: f.name, text, sha256, importedAt: Date.now() });
    }
  };

  return (
    <div className="pad">
      <h2>ARCHIVE</h2>
      <p className="muted">Izvori samo za čitanje. Kanon odobrava KENO; ovdje se ništa ne mijenja.</p>
      {cur ? (
        <div className="card">
          <button onClick={() => setOpen(null)}>← Svi izvori</button>
          <h3>{cur.name}</h3>
          <p className="muted">SHA-256 {cur.sha256.slice(0, 12)}… · uvezeno {new Date(cur.importedAt).toLocaleDateString('bs')}</p>
          <pre className="src">{cur.text}</pre>
        </div>
      ) : (
        <>
          <button className="primary" onClick={() => file.current?.click()}>Uvezi izvore</button>
          <input ref={file} type="file" multiple accept=".md,.txt,.json,text/*" hidden
            onChange={e => { add(e.target.files); e.target.value = ''; }} />
          {sources?.length === 0 && <p className="muted">Još nema uvezenih izvora (USTAV, ROOT, SOURCE…).</p>}
          {sources?.map(s => (
            <button key={s.id} className="item" onClick={() => setOpen(s.id)}>
              <b>{s.name}</b><span className="muted">{Math.round(s.text.length / 1000)}k znakova</span>
            </button>
          ))}
        </>
      )}
    </div>
  );
}
