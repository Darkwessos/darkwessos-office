export const OFFICE_SECTIONS = [
  { id: 'story', path: '/story', label: 'STORY', caption: 'Rukopis', editable: true },
  { id: 'workshop', path: '/workshop', label: 'WORKSHOP', caption: 'Radionica', editable: false },
  { id: 'command', path: '/command', label: 'COMMAND', caption: 'Pregled', editable: false },
  { id: 'archive', path: '/archive', label: 'ARCHIVE', caption: 'Izvori', editable: false },
]

export function getSection(pathname) {
  return OFFICE_SECTIONS.find((section) => section.path === pathname) ?? OFFICE_SECTIONS[0]
}
