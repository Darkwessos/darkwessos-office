import { BrowserRouter, Navigate, NavLink, Route, Routes, useLocation } from 'react-router'
import { Archive, BookOpenText, Compass, LayoutDashboard, Feather, LockKeyhole, Menu, CircleDot } from 'lucide-react'
import { OFFICE_SECTIONS, getSection } from './officeConfig.js'
import StoryPage from './pages/StoryPage.jsx'
import WorkshopPage from './pages/WorkshopPage.jsx'
import CommandPage from './pages/CommandPage.jsx'
import ArchivePage from './pages/ArchivePage.jsx'
import './App.css'

const sectionIcons = {
  story: BookOpenText,
  workshop: Compass,
  command: LayoutDashboard,
  archive: Archive,
}

function Navigation({ compact = false }) {
  return (
    <nav aria-label="Glavna navigacija" className={compact ? 'bottom-nav' : 'nav-stack'}>
      {OFFICE_SECTIONS.map((section) => {
        const Icon = sectionIcons[section.id]
        return (
          <NavLink key={section.id} to={section.path} className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Icon aria-hidden="true" size={20} strokeWidth={1.7} />
            <span className="nav-label">{section.label}</span>
            {!compact && <span className="nav-caption">{section.caption}</span>}
          </NavLink>
        )
      })}
    </nav>
  )
}

function Shell() {
  const location = useLocation()
  const active = getSection(location.pathname)
  return (
    <div className="office-shell">
      <aside className="side-panel">
        <div className="brand-row">
          <div className="brand-symbol"><Feather size={24} strokeWidth={1.5} /></div>
          <div><div className="brand-name">DARKWESSOS</div><div className="brand-sub">LIVING STORY OFFICE</div></div>
        </div>
        <div className="nav-heading">RADNI PROSTORI</div>
        <Navigation />
        <div className="side-panel-bottom">
          <div className="side-stamp"><LockKeyhole size={15} /> KANON POD KENO KONTROLOM</div>
          <div className="profile-line"><div className="profile-avatar">K</div><div><strong>KENO</strong><small>Autor · Privatni prostor</small></div></div>
        </div>
      </aside>

      <div className="office-content">
        <header className="top-bar">
          <div className="top-left"><span className="top-rail-icon"><Menu size={19} /></span><span className="crumb-start">DARKWESSOS</span><span className="crumb-separator">/</span><strong>{active.label}</strong></div>
          <div className="top-right"><span className="local-indicator"><CircleDot size={13} /> Lokalni rad</span><span className="top-avatar">K</span></div>
        </header>
        <main className="main-workspace" id="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/story" replace />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/workshop" element={<WorkshopPage />} />
            <Route path="/command" element={<CommandPage />} />
            <Route path="/archive" element={<ArchivePage />} />
            <Route path="*" element={<Navigate to="/story" replace />} />
          </Routes>
        </main>
      </div>
      <Navigation compact />
    </div>
  )
}

export default function App() {
  return <BrowserRouter><Shell /></BrowserRouter>
}
