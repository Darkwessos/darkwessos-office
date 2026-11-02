import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db, type ActiveContext, type Card } from './db';
import { updateContext } from './context';
import { COVE_ID, discoverCove, openPlaceInStory } from './atlasIdeas';

export default function Atlas({ context }: { context: ActiveContext }) {
  const places = useLiveQuery(() => db.cards.where('kind').equals('mjesto').toArray(), []) ?? [];
  const active = places.find(p => p.id === context.locationId);
  const [message, setMessage] = useState('');
  const [busy, setBusy] = useState(false);
  const discovered = places.some(p => p.id === COVE_ID);

  async function run(action: () => Promise<unknown>) {
    if (busy) return;
    setBusy(true);
    setMessage('');
    try { await action(); }
    catch (error) { setMessage(error instanceof Error ? error.message : String(error)); }
    finally { setBusy(false); }
  }
  function select(place: Card) {
    void run(() => updateContext({ locationId: place.id, prompt: '' }));
  }

  return <section className="pad">
    <h2>Atlas · Živa mapa</h2>
    <p className="muted">Ilustrirani, shematski prikaz. Položaji su VISUAL ONLY; ne potvrđuju geografiju, udaljenosti ni rute.</p>
    <div className="atlas-layout">
      <div className="atlas-map">
        <img src="/atlas.webp" alt="DARKWESSOS — ilustracija Atlasa s radnim markerima" />
        {places.map(place => <button
          key={place.id}
          type="button"
          className={'pin ' + (active?.id === place.id ? 'active' : '')}
          style={{ left: (place.x ?? .5) * 100 + '%', top: (place.y ?? .5) * 100 + '%' }}
          aria-label={'Istraži lokaciju ' + place.name}
          aria-pressed={active?.id === place.id}
          disabled={busy}
          onClick={() => select(place)}
        >{place.name}</button>)}
      </div>
      <div className="atlas-side">
        <div className="card">
          <h3>Otkrij mogućnost</h3>
          <p>Šta se krije iza poznatog ruba mape? Probaj jednu radnu lokaciju, bez promjene kanona.</p>
          <div className="row">
            <button className="primary" type="button" disabled={busy} onClick={() => void run(discoverCove)}>
              {discovered ? 'Prikaži skrivenu uvalu' : 'Istraži skrivenu uvalu'}
            </button>
          </div>
          <p className="muted">TEST · NON_CANON · SCHEMATIC</p>
        </div>
        {active && <div className="card">
          <h3>{active.name}</h3>
          <p className="muted">{active.status ?? 'DEMO'} · {active.canonStatus ?? 'VISUAL ONLY'} · {active.geometryState ?? 'SCHEMATIC'}</p>
          <p>{active.text}</p>
          {active.impulse && <p className="atlas-impulse"><strong>Živi impuls:</strong> {active.impulse}</p>}
          {active.sourceNote && <p className="muted">{active.sourceNote}</p>}
          <div className="row">
            <button type="button" disabled={busy} onClick={() => void run(() => updateContext({ page: 'WORKSHOP' }))}>Otvori u Radionici</button>
            <button className="primary" type="button" disabled={busy} onClick={() => void run(() => openPlaceInStory(active.id))}>Nastavi pisati ovdje</button>
          </div>
          <p className="muted">Pisac dobija referencu na mjesto. Rukopis se ne mijenja automatski.</p>
        </div>}
        {message && <p role="alert" className="warn">{message}</p>}
      </div>
    </div>
  </section>;
}
