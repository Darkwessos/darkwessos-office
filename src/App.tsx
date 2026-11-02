import { useEffect, useRef, useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, type ActiveContext, type OfficePage } from './db';
import { initializeContext, updateContext } from './context';
import { seedCards } from './cards';
import { storageState, subscribeStorage, flush, retryFailed } from './persistence';
import Story from './Story';
import Cockpit from './Cockpit';
import Workshop from './Workshop';
import Atlas from './Atlas';
import Command from './Command';
import { installNativeLifecycle, exitNative } from './native';

const tabs: { id: OfficePage; title: string }[] = [{ id: 'STORY', title: 'Pisac' }, { id: 'WORKSHOP', title: 'Radionica' }, { id: 'ATLAS', title: 'Atlas' }, { id: 'MORE', title: 'Više' }];
export default function App() {
  const [ready, setReady] = useState(false);
  // Home is a UI overlay: existing Dexie activeContext and backup formats stay unchanged.
  const [homeOpen, setHomeOpen] = useState(true);
  const homeOpenRef = useRef(true);
  const closeHome = () => { homeOpenRef.current = false; setHomeOpen(false); };
  const [fatal, setFatal] = useState('');
  const [saving, setSaving] = useState(storageState());
  const context = useLiveQuery(async () => (await db.meta.get('activeContext'))?.value as ActiveContext | undefined);
  useEffect(() => subscribeStorage(() => setSaving(storageState())), []);
  useEffect(() => { (async () => {
    await db.transaction('rw', db.meta, db.cards, async () => {
      await initializeContext();
      // Seed only on first migration; a restored deck is never overwritten.
      if (!(await db.meta.get('deckInitialized'))) {
        if (!(await db.cards.count())) await db.cards.bulkAdd(seedCards);
        await db.meta.put({ key: 'deckInitialized', value: true });
      }
    }); setReady(true);
  })().catch(e => setFatal(e.message)); }, []);
  useEffect(() => {
    let disposed = false;
    let cleanup: (() => void) | undefined;
    void installNativeLifecycle(async () => {
      const focused = document.activeElement as HTMLElement | null;
      if (focused?.matches('input, textarea, [contenteditable="true"]')) { focused.blur(); await flush(); return; }
      await flush();
      if (homeOpenRef.current) { closeHome(); return; }
      const current = (await db.meta.get('activeContext'))?.value as ActiveContext | undefined;
      if (current && current.page !== 'STORY') { await updateContext({ page: 'STORY' }); return; }
      if (confirm('Zatvoriti DARKWESSOS? Lokalni upisi su završeni.')) await exitNative();
    }, setFatal).then(remove => { if (disposed) remove(); else cleanup = remove; }).catch(e => setFatal(String(e)));
    return () => { disposed = true; cleanup?.(); };
  }, []);
  const openHome = async () => {
    try { await flush(); homeOpenRef.current = true; setHomeOpen(true); }
    catch (e: any) { setFatal('Nije moguće otvoriti početnu dok spremanje ne uspije: ' + e.message); }
  };
  const go = async (page: OfficePage) => {
    try { await flush(); await updateContext({ page }); closeHome(); }
    catch (e: any) { setFatal('Nije moguće promijeniti prostor dok spremanje ne uspije: ' + e.message); }
  };
  const resume = async (sceneId: string | null) => {
    try { await flush(); await updateContext({ page: 'STORY', sceneId }); closeHome(); }
    catch (e: any) { setFatal('Nije moguće nastaviti pisanje dok spremanje ne uspije: ' + e.message); }
  };
  if (!ready || !context) return <main className="pad"><h1>DARKWESSOS</h1><p role="alert">{fatal || 'Otvaram lokalne zapise…'}</p></main>;
  return <div className="app"><aside className="sidebar"><div className="sidebar-brand"><div className="logo">DARKWESSOS</div><div className="sub">Office · MVP 0.2</div></div><nav aria-label="Glavni prostori">{tabs.map(t => <button key={t.id} className={!homeOpen && context.page === t.id ? 'on' : ''} onClick={() => void go(t.id)}>{t.title}</button>)}</nav><div className="sidebar-footer">KENO · AUTOR<br />Prvi sprint · pouzdanost</div></aside>
    <div className="main-wrap"><header className="topbar"><div className="crumb"><button type="button" className="cockpit-home-button" onClick={() => void openHome()}>CRVENI BROD</button>{!homeOpen && <> · {tabs.find(t => t.id === context.page)?.title}</>}</div><span className={saving.error ? 'warn' : 'muted'} role="status" data-testid="storage-status">{saving.error ? 'Greška spremanja — sačuvaj tekst' : saving.pending ? 'Spašavam…' : 'Sačuvano lokalno'}</span></header>
    {saving.error && <button className="banner" onClick={() => { void retryFailed().then(() => setFatal(''), e => setFatal(e.message)); }}>Ponovi spremanje</button>}{fatal && <p role="alert">{fatal}</p>}
    <main className="content">{homeOpen ? <Cockpit onResume={sceneId => void resume(sceneId)} onOpen={page => void go(page)} /> : <>{context.page === 'STORY' && <Story context={context} />}{context.page === 'WORKSHOP' && <Workshop context={context} />}{context.page === 'ATLAS' && <Atlas context={context} />}{context.page === 'MORE' && <Command onOpen={async sceneId => { await updateContext({ sceneId, page: 'STORY' }); }} />}</>}</main>
    <nav className="bottom-nav" aria-label="Mobilni prostori">{tabs.map(t => <button key={t.id} className={!homeOpen && context.page === t.id ? 'on' : ''} onClick={() => void go(t.id)}>{t.title}</button>)}</nav></div></div>;
}
