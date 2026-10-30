import { useState } from 'react'
import Icon from './components/Icon'
import { KEY, readState, download, wordCount } from './lib/storage'
import './App.css'
const sections = ['Pregled', 'Rukopis', 'Kanon', 'Radionica', 'Izvori']
const subtitles = { Pregled: 'Tvoj prostor za priče, misli i nove mogućnosti.', Rukopis: 'Prostor u kojem priča nastaje.', Kanon: 'Odvojeno mjesto za autoritativne dokumente.', Radionica: 'Ideje imaju prostora prije nego što postanu priča.', Izvori: 'Građa kojoj se možeš vratiti.' }
function App() {
  const [data, setData] = useState(readState)
  const [section, setSection] = useState('Rukopis')
  const [selected, setSelected] = useState(data.scenes[0].id)
  const [status, setStatus] = useState('Lokalno spremanje · ovaj preglednik')
  const [query, setQuery] = useState('')
  const [docId, setDocId] = useState(null)
  const scene = data.scenes.find(s => s.id === selected) || data.scenes[0]
  function save(next) {
    setData(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)); setStatus('Sačuvano na ovom uređaju') }
    catch { setStatus('Spremanje nije uspjelo. Izvezi sigurnosnu kopiju.') }
  }
  function updateScene(patch) { save({ ...data, scenes: data.scenes.map(s => s.id === scene.id ? { ...s, ...patch } : s) }) }
  function newScene() {
    const s = { id: crypto.randomUUID(), title: `Scena ${data.scenes.length + 1}`, text: '', notes: '' }
    save({ ...data, scenes: [...data.scenes, s] }); setSelected(s.id); setSection('Rukopis')
  }
  async function importDocument(event) {
    const file = event.target.files?.[0]
    event.target.value = ''
    if (!file) return
    if (!/\.(md|txt)$/i.test(file.name) || file.size > 1000000) { setStatus('Odaberi .md ili .txt dokument do 1 MB.'); return }
    try {
      const d = { id: crypto.randomUUID(), name: file.name, text: await file.text(), area: section }
      save({ ...data, documents: [...data.documents, d] }); setDocId(d.id)
    } catch { setStatus('Dokument nije moguće pročitati.') }
  }
  const docs = data.documents.filter(d => d.area === section && (d.name + '\n' + d.text).toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  const doc = docs.find(d => d.id === docId) || docs[0]
  return <div className="app">
    <aside className="sidebar">
      <a className="brand" href="#rukopis" onClick={() => setSection('Rukopis')} aria-label="DARKWESSOS Office — rukopis"><svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="22"/><path d="m32 2 6 24 24 6-24 6-6 24-6-24L2 32l24-6Z"/><path d="m15 15 17 12 17-12-12 17 12 17-17-12-17 12 12-17Z"/></svg><span>DARKWESSOS</span><small>OFFICE</small></a>
      <nav aria-label="Glavna navigacija">{sections.map(name => <button key={name} className={section === name ? 'nav-item active' : 'nav-item'} aria-current={section === name ? 'page' : undefined} onClick={() => { setSection(name); setQuery(''); setDocId(null) }}><Icon name={name}/><span>{name}</span></button>)}</nav>
      <div className="profile"><span className="avatar">K</span><div>KENO<small>Lokalni prostor</small></div></div>
    </aside>
    <main>
      <header className="topbar"><span>Radni prostor <b>/</b> <strong>{section}</strong></span><button className="button secondary" onClick={() => download('darkwessos-sigurnosna-kopija.json', JSON.stringify(data, null, 2), 'application/json')}><Icon name="export"/><span>Sigurnosna kopija</span></button></header>
      <div className="workspace">
        <div className="page-heading"><div><h1>{section}</h1><p>{subtitles[section]}</p></div>{section === 'Rukopis' && <button className="button primary" onClick={newScene}><Icon name="plus"/>Nova scena</button>}{['Kanon', 'Izvori'].includes(section) && <label className="button primary upload"><Icon name="plus"/>Uvezi dokument<input aria-label="Uvezi Markdown ili tekst dokument" type="file" accept=".md,.txt" onChange={importDocument}/></label>}</div>
        {section === 'Rukopis' && <div className="writing-layout">
          <section className="panel scene-list" aria-label="Scene"><div className="panel-heading"><h2>Scene</h2><button className="icon-button" onClick={newScene} aria-label="Nova scena"><Icon name="plus"/></button></div><div className="scene-items">{data.scenes.map(s => <button className={s.id === scene.id ? 'scene selected' : 'scene'} key={s.id} onClick={() => setSelected(s.id)}><strong>{s.title || 'Bez naslova'}</strong><small>Radni nacrt · {wordCount(s.text)} riječi</small></button>)}</div></section>
          <section className="panel editor" aria-label="Uređivanje rukopisa"><div className="editor-header"><input className="title-input" aria-label="Naslov scene" value={scene.title} onChange={e => updateScene({ title: e.target.value })}/><div className="editor-tools"><span className="draft"><i/>Nacrt</span><button className="text-button" onClick={() => download((scene.title || 'scena').replace(/[^\p{L}\p{N} _-]/gu, '') + '.md', `# ${scene.title}\n\n${scene.text}\n\n## Bilješke\n\n${scene.notes}`)}>Izvezi .md</button></div></div><textarea className="manuscript" aria-label="Tekst scene" placeholder="Počni pisati ovdje…" value={scene.text} onChange={e => updateScene({ text: e.target.value })}/><footer className="editor-footer"><span>{wordCount(scene.text)} riječi</span><span>Lokalni nacrt</span></footer></section>
          <aside className="panel notes"><h2>Bilješke</h2><p>Samo tvoje radne bilješke.</p><textarea aria-label="Bilješke scene" value={scene.notes} onChange={e => updateScene({ notes: e.target.value })}/><p className="canon-note">Kanon je odvojen.<br/>Rukopis ne mijenja kanon.</p></aside>
        </div>}
        {section === 'Pregled' && <section className="overview panel"><h2>Dobro došao u svoj Office.</h2><p>Vrati se rukopisu ili ostavi ideju za kasnije.</p><button className="overview-row" onClick={() => setSection('Rukopis')}><Icon name="Rukopis"/><span><strong>Nastavi pisati</strong><small>{data.scenes.length} scena · {data.scenes.reduce((n,s) => n + wordCount(s.text), 0)} riječi</small></span><span>→</span></button><button className="overview-row" onClick={() => setSection('Radionica')}><Icon name="Radionica"/><span><strong>Otvori radionicu</strong><small>Slobodne ideje i mogućnosti</small></span><span>→</span></button><p className="notice">Ova verzija čuva podatke samo u ovom pregledniku. Za prijenos na drugi uređaj ili čuvanje kopije koristi „Sigurnosna kopija“. Prijava i sinhronizacija još nisu povezane.</p></section>}
        {section === 'Radionica' && <section className="panel workshop"><div className="panel-heading"><h2>Slobodne bilješke</h2><button className="text-button" onClick={() => download('radionica.md', data.workshop)}>Izvezi .md</button></div><p>ATLAS · LOREN · SCENAR · FANTASY WRITER</p><p className="notice">Prostor za tvoje ideje. AI perspektive još nisu povezane; zapis ovdje ne postaje kanon.</p><textarea aria-label="Radioničke bilješke" placeholder="Šta želiš istražiti?" value={data.workshop} onChange={e => save({ ...data, workshop: e.target.value })}/></section>}
        {['Kanon', 'Izvori'].includes(section) && <><p className="notice">{section === 'Kanon' ? 'Uvezeni dokument nije automatski potvrđen kao CURRENT. KENO potvrđuje autoritet izvora.' : 'Reference su građa za rad; nisu automatski važeći kanon.'} Dokumenti se čuvaju lokalno i prikazuju samo za čitanje.</p><div className="library-layout"><section className="panel library-list"><label className="search-label">Pretraži dokumente<input type="search" value={query} placeholder="Naslov ili sadržaj…" onChange={e => setQuery(e.target.value)}/></label>{docs.map(d => <button key={d.id} className={doc?.id === d.id ? 'scene selected' : 'scene'} onClick={() => setDocId(d.id)}><strong>{d.name}</strong><small>Lokalni dokument</small></button>)}{!docs.length && <p className="empty">{query ? 'Nema rezultata za ovaj upit.' : 'Još nema dokumenata. Uvezi svoj .md ili .txt fajl.'}</p>}</section><article className="panel document"><h2>{doc?.name || 'Tvoja biblioteka'}</h2>{doc ? <pre>{doc.text}</pre> : <p>Odaberi ili uvezi dokument za čitanje. Privatna građa nije uključena u javnu aplikaciju.</p>}</article></div></>}
        <div className="save-status" role="status">{status}</div>
      </div>
    </main>
  </div>
}
export default App
