import { Link } from 'react-router'
import { BookOpenText, Compass, FolderArchive, ShieldCheck, ArrowRight, CircleDot, CloudOff, CheckCircle2 } from 'lucide-react'

const modules = [
  { title: 'STORY', description: 'Lokalni editor i izvoz rukopisa', status: 'Dostupno', to: '/story', Icon: BookOpenText },
  { title: 'WORKSHOP', description: 'Izbor kreativnih modula', status: 'Osnova', to: '/workshop', Icon: Compass },
  { title: 'ARCHIVE', description: 'Poveznice na izvorne dokumente', status: 'Read-only', to: '/archive', Icon: FolderArchive },
]

export default function CommandPage() {
  return <div className="page-wrap">
    <div className="page-head"><div><div className="eyebrow"><span className="tiny-line" /> AUTORSKA KONTROLA</div><h1>Command<span className="gold-period">.</span></h1><p>Pregled stanja Officea. Nijedan radni zapis ne mijenja USTAV ili CURRENT ROOT.</p></div><span className="head-pill"><ShieldCheck size={14} /> KENO ODLUČUJE</span></div>
    <div className="overview-strip"><div className="overview-copy"><span className="micro-label">DARKWESSOS OFFICE · V0.1</span><h2>Jedan svijet.<br/>Jedna pustolovina.</h2><p>Prvi funkcionalni korak: rukopis u lokalnom editoru, kretanje između prostora i vidljiva granica kanona.</p></div><div className="overview-symbol"><span>DW</span></div></div>
    <div className="section-title-row"><h2>Radni moduli</h2><span>Prva faza</span></div>
    <div className="command-modules">{modules.map(({ title, description, status, to, Icon }) => <Link className="command-module" key={title} to={to}><Icon size={22} strokeWidth={1.5} /><span><strong>{title}</strong><small>{description}</small></span><em>{status}</em><ArrowRight size={17} /></Link>)}</div>
    <div className="command-status"><div><CheckCircle2 size={19}/><span><strong>Lokalni rad</strong><small>Uređivanje i spremanje nacrta u IndexedDB.</small></span></div><div><CloudOff size={19}/><span><strong>Cloud / MCP</strong><small>Još nisu povezani s Office interfejsom.</small></span></div><div><CircleDot size={19}/><span><strong>Kanonski status</strong><small>ARCHIVE je samo za čitanje; KENO odlučuje.</small></span></div></div>
  </div>
}
