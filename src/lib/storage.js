export const KEY = 'darkwessos-office-v1'
export const initialState = () => ({ scenes: [{ id: crypto.randomUUID(), title: 'Prva scena', text: '', notes: '' }], documents: [], workshop: '' })
export function readState() {
  try {
    const value = JSON.parse(localStorage.getItem(KEY))
    if (value && Array.isArray(value.scenes) && value.scenes.length && value.scenes.every(s => ['id', 'title', 'text', 'notes'].every(k => typeof s[k] === 'string')) && Array.isArray(value.documents) && value.documents.every(d => typeof d.id === 'string' && typeof d.name === 'string' && typeof d.text === 'string' && ['Kanon', 'Izvori'].includes(d.area)) && typeof value.workshop === 'string') return value
  } catch { /* Preserve unreadable storage until the user explicitly saves new work. */ }
  return initialState()
}
export function download(name, text, type = 'text/markdown;charset=utf-8') {
  const url = URL.createObjectURL(new Blob([text], { type }))
  const link = document.createElement('a')
  link.href = url; link.download = name; link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
export const wordCount = text => text.trim() ? text.trim().split(/\s+/u).length : 0
