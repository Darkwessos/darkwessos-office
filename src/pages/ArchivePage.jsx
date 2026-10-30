import { ExternalLink, FileLock2, LibraryBig, ShieldCheck, FileText } from 'lucide-react'

const REPOSITORY = 'https://github.com/Darkwessos/darkwessos-office/blob/main/'
const documents = [
  { name: 'USTAV SAGE', path: 'USTAV.md', description: 'Vrhovna autorska pravila', group: 'AUTORITET' },
  { name: 'CURRENT FULL ROOT', path: 'CURRENT_FULL_ROOT.md', description: 'KENO-označeni operativni izvor', group: 'AUTORITET' },
  { name: 'ROOT-LITE', path: 'ROOT_LITE.md', description: 'Navigacija i sažetak, ne novi kanon', group: 'NAVIGACIJA' },
  { name: 'SOURCE MASTER', path: 'SOURCE/04_SOURCE_MASTER.md', description: 'Porijeklo i historijski trag', group: 'ARHIVA' },
  { name: 'SOURCE ADDENDUM', path: 'SOURCE/05_ADDENDUM_DOPUNE_IDEJE.md', description: 'Dopune i razvojne ideje', group: 'ARHIVA' },
]

export default function ArchivePage() {
  return <div className="page-wrap">
    <div className="page-head"><div><div className="eyebrow"><span className="tiny-line" /> BIBLIOTEKA IZVORA</div><h1>Archive<span className="gold-period">.</span></h1><p>Pristup dokumentima u postojećem GitHub repozitoriju. Ovaj Office ih ne mijenja.</p></div><span className="head-pill"><FileLock2 size={14} /> READ ONLY</span></div>
    <div className="archive-banner"><ShieldCheck size={25}/><div><strong>KENO je jedini kanonski autoritet.</strong><span>Dokumente otvaramo na GitHubu. Lokalna kopija, memorija ili radni nacrt ne mijenjaju CURRENT.</span></div></div>
    <div className="section-title-row"><h2>Izvorni dokumenti</h2><span>GitHub · main</span></div>
    <div className="archive-list">{documents.map(({ name, path, description, group }) => <a href={`${REPOSITORY}${path}`} target="_blank" rel="noopener noreferrer" className="archive-document" key={path}><span className="archive-icon"><FileText size={20}/></span><span className="archive-doc-main"><small>{group}</small><strong>{name}</strong><span>{description}</span></span><ExternalLink size={17}/></a>)}</div>
    <div className="archive-note"><LibraryBig size={18}/> Čitanje dokumenata unutar Officea preko MCP-a dolazi nakon potvrđene žive veze.</div>
  </div>
}
