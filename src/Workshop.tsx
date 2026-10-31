import { useLiveQuery } from 'dexie-react-hooks';
import { useState } from 'react';
import { db, uid, type ActiveContext } from './db';
import { updateContext } from './context';
import { write } from './persistence';

export default function Workshop({ context }: { context: ActiveContext }) {
  const cards = useLiveQuery(() => db.cards.toArray()) ?? [];
  const saved = useLiveQuery(() => db.visuals.orderBy('createdAt').reverse().toArray()) ?? [];
  const [message, setMessage] = useState('');
  const [task, setTask] = useState(context.task);
  const [promptText, setPromptText] = useState(context.prompt);
  const [busy, setBusy] = useState(false);
  const patch = (p: Partial<ActiveContext>) => {
    if (p.prompt === '') setPromptText('');
    return updateContext(p).catch(e => setMessage(e.message));
  };
  const compose = () => {
    const selected = cards.filter(c => context.selectedCharacters.includes(c.id));
    const situation = cards.find(c => c.id === context.situationId);
    const place = cards.find(c => c.id === context.locationId);
    if (!selected.length || !situation) return;
    const text = `European adventure comic illustration, expressive hand-inked linework, natural light and readable composition.\nCharacters: ${selected.map(c => `${c.name}: ${c.text}`).join('; ')}.\nSituation: ${situation.text}\n${place ? `Setting: ${place.name}. Illustrative visual experiment; geography is not verified.` : 'Setting: choose a natural setting suited to the situation.'}\nDirection: ${task}\nA single clear moment, character-driven humour. No captions, no watermark.\nTEST / VISUAL ONLY — no change to story canon.`;
    setPromptText(text); void patch({ prompt: text });
  };
  const save = async () => {
    if (busy || !promptText || !context.situationId) return;
    setBusy(true);
    try {
      await write(() => db.visuals.add({ id: uid(), prompt: promptText, characterIds: [...context.selectedCharacters], situationId: context.situationId!, locationId: context.locationId, status: 'TEST', createdAt: Date.now() }));
      setMessage('Vizuelni prijedlog je sačuvan lokalno.');
    } catch (e: any) { setMessage('Greška spremanja: ' + e.message); }
    finally { setBusy(false); }
  };
  return <section className="pad">
    <h2>Radionica</h2><p className="muted">Dva špila su dovoljna. Mjesto dodaj kada želiš. Početne kartice su DEMO / TEST.</p>
    <fieldset><legend>1 · Lik ili likovi</legend><div className="deck">{cards.filter(c => c.kind === 'lik').map(c => <label className="choice" key={c.id}><input type="checkbox" checked={context.selectedCharacters.includes(c.id)} onChange={() => void patch({ selectedCharacters: context.selectedCharacters.includes(c.id) ? context.selectedCharacters.filter(id => id !== c.id) : [...context.selectedCharacters, c.id], prompt: '' })} />{c.name}</label>)}</div></fieldset>
    <fieldset><legend>2 · Situacija</legend><div className="deck">{cards.filter(c => c.kind === 'situacija').map(c => <label className="choice" key={c.id}><input type="radio" name="situation" checked={context.situationId === c.id} onChange={() => void patch({ situationId: c.id, prompt: '' })} />{c.name}</label>)}</div></fieldset>
    <label className="field">3 · Mjesto (opcionalno)<select aria-label="Mjesto (opcionalno)" value={context.locationId ?? ''} onChange={e => void patch({ locationId: e.target.value || null, prompt: '' })}><option value="">Bez odabranog mjesta</option>{cards.filter(c => c.kind === 'mjesto').map(c => <option key={c.id} value={c.id}>{c.name}</option>)}</select></label>
    <label className="field">Smjer kadra<textarea aria-label="Smjer kadra" value={task} onChange={e => { setTask(e.target.value); void patch({ task: e.target.value }); }} /></label>
    <button className="primary" disabled={!context.selectedCharacters.length || !context.situationId} onClick={compose}>Sastavi vizuelni prompt</button>
    <label className="field">Vizuelni prompt<textarea aria-label="Vizuelni prompt" className="tall" value={promptText} onChange={e => { setPromptText(e.target.value); void patch({ prompt: e.target.value }); }} /></label>
    <div className="row"><button className="primary" disabled={busy || !promptText} onClick={save}>Sačuvaj prijedlog</button><button disabled={!promptText} onClick={() => navigator.clipboard.writeText(promptText).then(() => setMessage('Prompt kopiran.'), () => setMessage('Označi i kopiraj tekst prompta.'))}>Kopiraj prompt</button></div>
    <p role="status">{message}</p>
    <h3>Sačuvani prijedlozi ({saved.length})</h3>{saved.map(v => <details className="card" key={v.id}><summary>TEST · {new Date(v.createdAt).toLocaleString('bs')}</summary><pre className="src">{v.prompt}</pre></details>)}
  </section>;
}
