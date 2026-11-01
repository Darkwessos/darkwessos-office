import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './style.css';
import { prepareNativeBundle } from './native';

async function start() {
  await prepareNativeBundle();
  createRoot(document.getElementById('root')!).render(<App />);
}
void start().catch(() => {
  document.getElementById('root')!.textContent = 'Otvaranje aplikacije nije uspjelo. Podaci nisu obrisani. Ponovo pokreni aplikaciju.';
});
