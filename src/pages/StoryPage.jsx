import { useEffect, useRef, useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { useCreateBlockNote } from '@blocknote/react'
import { BlockNoteView } from '@blocknote/mantine'
import { BookOpenText, Check, CloudOff, Download, FileText, LoaderCircle, Shield } from 'lucide-react'
import '@blocknote/core/fonts/inter.css'
import '@blocknote/mantine/style.css'
import { db } from '../lib/db.js'
import { makeDraftRecord, validInitialBlocks, LOCAL_DRAFT_ID } from '../lib/draftUtils.js'

function downloadMarkdown(title, markdown) {
  const file = new Blob([`# ${title}\n\n${markdown}\n`], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(file)
  const link = document.createElement('a')
  link.href = url
  link.download = `${title.replace(/[^\p{L}\p{N} ._-]/gu, '').trim() || 'rukopis'}.md`
  document.body.appendChild(link)
  link.click()
  link.remove()
  URL.revokeObjectURL(url)
}

function StoryEditor({ initialDraft }) {
  const editor = useCreateBlockNote({ initialContent: validInitialBlocks(initialDraft) })
  const [title, setTitle] = useState(initialDraft?.title ?? 'Radni rukopis')
  const [saveState, setSaveState] = useState('Lokalni nacrt')
  const titleRef = useRef(title)
  const blocksRef = useRef(editor.document)
  const timer = useRef(null)

  // Flush the latest editor contents when moving to a different Office section.
  useEffect(() => () => {
    if (timer.current) {
      clearTimeout(timer.current)
      void db.drafts.put(makeDraftRecord(titleRef.current, blocksRef.current))
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function scheduleSave(nextTitle = titleRef.current, nextBlocks = blocksRef.current) {
    titleRef.current = nextTitle
    blocksRef.current = nextBlocks
    setSaveState('Spremanje…')
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(async () => {
      timer.current = null
      try {
        await db.drafts.put(makeDraftRecord(titleRef.current, blocksRef.current))
        setSaveState('Sačuvano na uređaju')
      } catch {
        setSaveState('Spremanje nije uspjelo')
      }
    }, 550)
  }

  async function exportDraft() {
    try {
      const markdown = await editor.blocksToMarkdownLossy(editor.document)
      downloadMarkdown(titleRef.current || 'Radni rukopis', markdown)
    } catch {
      setSaveState('Izvoz nije uspio')
    }
  }

  return (
    <div className="story-grid">
      <aside className="story-shelf">
        <div className="shelf-label">MOJA BIBLIOTEKA</div>
        <div className="shelf-item active"><BookOpenText size={18} /><span>Radni rukopis</span><span className="shelf-dot" /></div>
        <div className="shelf-subtext">Jedan lokalni dokument u ovoj početnoj verziji.</div>
        <div className="shelf-bottom"><CloudOff size={16} /><span>Nije povezano s oblakom. Podaci ostaju u ovom pregledniku. Izvezi sigurnosnu kopiju.</span></div>
      </aside>
      <section className="story-editor-card" aria-label="Editor rukopisa">
        <div className="document-toolbar">
          <div className="document-path"><FileText size={16} /> STORY <span>/</span> RADNO</div>
          <div className="editor-actions"><span className="save-pill"><Check size={14} />{saveState}</span><button onClick={exportDraft} className="btn-subtle" type="button"><Download size={16} /><span>Izvezi .md</span></button></div>
        </div>
        <div className="document-paper">
          <div className="eyebrow"><span className="tiny-line" /> PROSTOR ZA PRIČU</div>
          <input className="document-title" aria-label="Naslov rukopisa" value={title} onChange={(event) => { setTitle(event.target.value); scheduleSave(event.target.value) }} placeholder="Naslov rukopisa" />
          <div className="document-subtitle"><Shield size={14} /> RADNO · Ne mijenja kanon</div>
          <div className="editor-surface"><BlockNoteView editor={editor} theme="dark" onChange={() => scheduleSave(titleRef.current, editor.document)} /></div>
        </div>
        <footer className="document-footnote"><span>Živi svijet. Jedna pustolovina.</span><span>Automatsko lokalno spremanje</span></footer>
      </section>
    </div>
  )
}

export default function StoryPage() {
  const draft = useLiveQuery(async () => (await db.drafts.get(LOCAL_DRAFT_ID)) ?? null, [])
  if (draft === undefined) {
    return <div className="loading-state"><LoaderCircle className="spin" size={23} /> Otvaram lokalni rukopis…</div>
  }
  return <StoryEditor initialDraft={draft} />
}
