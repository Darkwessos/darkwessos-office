import { useEffect, useRef, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from './db';
import { setNativeTransferBusy } from './native';
import { exportMessage } from './exportFlow';
import { exportBackup, exportMarkdown, prepareBackup, restorePreparedBackup, requestPersistence } from './backup';

export default function Command({ onOpen }: { onOpen: (sceneId: string) => void }) {
  const stats = useLiveQuery(async () => {
    const s = (await db.scenes.toArray()).filter(x => !x.deletedAt);
    const last = [...s].sort((a, b) => b.updatedAt - a.updatedAt)[0];
    return { scenes: s.length, words: s.reduce((n, x) => n + x.wordCount, 0),
      pending: s.filter(x => x.syncState !== 'synced').length,
      notes: (await db.notes.toArray()).filter(x => !x.deletedAt).length,
      sources: await db.sources.count(), revisions: await db.revisions.count(), last,
      lastBackup: (await db.meta.get('lastBackup'))?.value as number | undefined };
  }, []);
  const [store, setStore] = useState<{ persisted: boolean; usedKB: number } | null>(null);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  useEffect(() => { setNativeTransferBusy(busy); return () => setNativeTransferBusy(false); }, [busy]);
  const file = useRef<HTMLInputElement>(null);
  useEffect(() => { requestPersistence().then(setStore); }, []);
  useEffect(() => {
    const input = file.current;
    const cancelled = () => setMsg('Odabir datoteke otkazan. Podaci nisu promijenjeni.');
    input?.addEventListener('cancel', cancelled);
    return () => input?.removeEventListener('cancel', cancelled);
  }, []);

  const restore = async (f?: File) => {
    if (!f) { setMsg('Uvoz otkazan. Podaci nisu promijenjeni.'); return; }
    setBusy(true);
    try {
      const prepared = await prepareBackup(f);
      if (!confirm(`Kopija je provjerena (${prepared.count} zapisa i bilješki). Zamijeniti sve lokalne podatke, revizije i aktivni kontekst?`)) {
        setMsg('Uvoz otkazan. Podaci nisu promijenjeni.'); return;
      }
      await restorePreparedBackup(prepared);
      setMsg('Kopija vraćena.'); location.reload();
    } catch (e: any) { setMsg(e.message || 'Obnova nije uspjela.'); }
    finally { setBusy(false); }
  };

  const runExport = async (operation: typeof exportBackup) => {
    setBusy(true); setMsg('Čekam završetak spremanja i pripremam datoteku…');
    try { setMsg(exportMessage(await operation())); }
    catch (e: any) { setMsg(e.message || 'Izvoz nije uspio.'); }
    finally { setBusy(false); }
  };

  return (
    <div className="pad">
      <h2>Više · sigurnosna kopija</h2>
      {stats?.last && (
        <div className="card">
          <h3>Posljednji rad</h3>
          <p>{stats.last.title} · {new Date(stats.last.updatedAt).toLocaleString('bs')}</p>
          <button className="primary" onClick={() => onOpen(stats.last!.id)}>Nastavi pisati</button>
        </div>
      )}
      <div className="card">
        <h3>Pregled</h3>
        <p>{stats?.scenes ?? 0} prizora · {stats?.words ?? 0} riječi · {stats?.notes ?? 0} bilješki · {stats?.sources ?? 0} izvora · {stats?.revisions ?? 0} lokalnih verzija</p>
        <p className="muted">Čeka sinhronizaciju: {stats?.pending ?? 0}. Sinhronizacija još nije uključena.</p>
      </div>
      <div className="card">
        <h3>Sigurnost rukopisa</h3>
        <p>Trajno lokalno čuvanje: <b>{store ? (store.persisted ? 'odobreno' : 'NIJE odobreno') : '…'}</b></p>
        <p className="muted">Autosave i lokalne verzije žive u istoj bazi kao rukopis. Izvezi i provjeri datoteku kao vanjsku kopiju. Kopija uključuje sve zapise, revizije, kartice, prijedloge i aktivni kontekst.</p>
        <p className={stats?.lastBackup ? 'muted' : 'warn'}>Posljednja vanjska kopija: {stats?.lastBackup ? new Date(stats.lastBackup).toLocaleString('bs') : 'NEMA — rukopis nije vanjski zaštićen'}</p>
        <fieldset disabled={busy} className="row">
          <button className="primary" onClick={() => runExport(exportBackup)}>Izvezi kopiju</button>
          <button onClick={() => file.current?.click()}>Obnovi iz kopije</button>
          <button onClick={() => runExport(exportMarkdown)}>Izvezi Markdown</button>
          <input ref={file} aria-label="Uvezi sigurnosnu kopiju" type="file" accept="application/json" hidden onChange={e => { restore(e.target.files?.[0]); e.target.value = ''; }} />
        </fieldset>
        {msg && <p role="status">{msg}</p>}
        {busy && <div className="transfer-busy" role="alert">Pripremam ili vraćam kopiju… Ne zatvaraj aplikaciju.</div>}
      </div>

    </div>
  );
}
