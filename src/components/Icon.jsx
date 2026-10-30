const paths = {
  Pregled: 'M3 10 12 3l9 7v11h-6v-7H9v7H3Z',
  Rukopis: 'M6 3h8l4 4v14H6ZM14 3v5h4M9 12h6M9 16h6',
  Kanon: 'M12 5C8 2 3 4 3 4v16s5-2 9 1c4-3 9-1 9-1V4s-5-2-9 1Zm0 0v16',
  Radionica: 'm15 4 5 5M4 20l4-1L21 6l-4-4L4 15Z',
  Izvori: 'M4 6c0-5 16-5 16 0s-16 5-16 0Zm0 0v12c0 5 16 5 16 0V6M4 12c0 5 16 5 16 0',
  export: 'M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5',
  plus: 'M12 4v16M4 12h16',
}
export default function Icon({ name }) { return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name] || paths.Rukopis} /></svg> }
