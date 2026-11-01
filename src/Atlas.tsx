import { useLiveQuery } from 'dexie-react-hooks';
import { db, type ActiveContext } from './db';
import { updateContext } from './context';
export default function Atlas({ context }: { context: ActiveContext }) {
  const places = useLiveQuery(() => db.cards.where('kind').equals('mjesto').toArray()) ?? [];
  const active = places.find(p => p.id === context.locationId);
  return <section><h2>Atlas</h2><p className="muted">Postojeća ilustracija. Markeri su DEMO / VISUAL ONLY; ne potvrđuju geografiju.</p>
    <div className="atlas-map"><img src="/atlas.webp" alt="DARKWESSOS — ilustracija Atlasa" />{places.map(p => <button key={p.id} className={'pin ' + (active?.id === p.id ? 'active' : '')} style={{ left: `${(p.x ?? .5) * 100}%`, top: `${(p.y ?? .5) * 100}%` }} aria-label={`Lokacija ${p.name}`} onClick={() => { void updateContext({ locationId: p.id, prompt: '' }); }}>{p.name}</button>)}</div>
    {active && <div className="card"><h3>{active.name}</h3><p>Radni položaj na ilustraciji · VISUAL ONLY</p><button onClick={() => { void updateContext({ page: 'WORKSHOP' }); }}>Nastavi s karticama</button></div>}
  </section>;
}
