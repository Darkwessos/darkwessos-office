import { useState } from 'react'
import { Compass, Network, GitBranch, Map, ArrowUpRight, CircleDot } from 'lucide-react'

const areas = [
  { id: 'atlas', name: 'ATLAS', detail: 'Geografija i putovanja', Icon: Compass, note: 'Prostor za karte Darkwooda, Westerosa i Essosa. Leaflet integracija slijedi kada odaberemo odobrenu geografsku podlogu.' },
  { id: 'relationships', name: 'ODNOSI', detail: 'Likovi i mreže', Icon: Network, note: 'Ovdje će Sigma.js povezati likove, njihove odnose i porijeklo podataka. Nove veze nisu kanon bez odluke.' },
  { id: 'plot', name: 'TOK RADNJE', detail: 'Paralelni događaji', Icon: GitBranch, note: 'React Flow će omogućiti pregled pustolovnih tokova i mogućih posljedica. Ideje ostaju RADNO ili TEST.' },
]

export default function WorkshopPage() {
  const [chosen, setChosen] = useState('atlas')
  const active = areas.find((area) => area.id === chosen)
  return (
    <div className="page-wrap">
      <div className="page-head"><div><div className="eyebrow"><span className="tiny-line" /> KREATIVNI PROSTOR</div><h1>Radionica svijeta<span className="gold-period">.</span></h1><p>Mjesto gdje se geografija, odnosi i pustolovine mogu istraživati prije nego što postanu odluke.</p></div><span className="head-pill"><CircleDot size={13} /> RADNO</span></div>
      <div className="workshop-cards">
        {areas.map(({ id, name, detail, Icon }) => <button key={id} type="button" className={`workshop-option ${chosen === id ? 'selected' : ''}`} onClick={() => setChosen(id)}><span className="workshop-option-icon"><Icon size={24} strokeWidth={1.5} /></span><span className="workshop-option-title">{name}</span><span className="option-detail">{detail}</span><ArrowUpRight size={16} className="option-arrow" /></button>)}
      </div>
      <section className="atlas-preview" aria-label="Pregled odabranog modula">
        <div className="atlas-top"><div><span className="micro-label">IZABRANI MODUL</span><h2>{active.name}</h2></div><span className="status-chip">U pripremi</span></div>
        <div className="atlas-placeholder"><div className="map-grid"><div className="map-orbit map-orbit-one" /><div className="map-orbit map-orbit-two" /><Map size={48} strokeWidth={1} /></div><div className="map-message"><strong>Ovdje će oživjeti naša mapa.</strong><span>{active.note}</span></div></div>
      </section>
    </div>
  )
}
