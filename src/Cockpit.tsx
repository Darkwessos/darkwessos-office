import { useLiveQuery } from 'dexie-react-hooks';
import { chooseLastScene } from './cockpitModel';
import { db, type OfficePage } from './db';

type CockpitProps = {
  onResume: (sceneId: string | null) => void;
  onOpen: (page: OfficePage) => void;
};

const doors: { page: OfficePage; name: string; caption: string }[] = [
  { page: 'STORY', name: 'Pisac', caption: 'Rukopis i scene' },
  { page: 'WORKSHOP', name: 'Radionica', caption: 'Likovi, situacije i ISKRA' },
  { page: 'ATLAS', name: 'Atlas', caption: 'Ilustrirani pogledi na svijet' },
  { page: 'MORE', name: 'Više', caption: 'Kopije, izvori i alati' },
];

export default function Cockpit({ onResume, onOpen }: CockpitProps) {
  const scenes = useLiveQuery(() => db.scenes.toArray(), []);
  const lastId = scenes ? chooseLastScene(scenes) : null;
  const last = scenes?.find(scene => scene.id === lastId);

  return (
    <section className="cockpit" aria-label="Crveni brod — početna stranica">
      <div className="cockpit-hero">
        <p className="cockpit-eyebrow">CRVENI BROD · ZAGOR — DUH ZIME</p>
        <h1>Nastavi pustolovinu.</h1>
        <p className="cockpit-description">Ovdje priča počinje. Ovdje joj se vraćaš.</p>
        <p className="cockpit-last">{!scenes ? 'Otvaram lokalne zapise…' : last ? `Posljednji prizor: ${last.title || 'Bez naslova'}` : 'Još nema prizora — Pisac je spreman za prvu rečenicu.'}</p>
        <button type="button" className="primary cockpit-resume" disabled={!scenes}
          onClick={() => onResume(lastId)}>{last ? 'Nastavi pisanje' : 'Otvori Pisca'}</button>
        <p className="cockpit-visual-note">Ilustracija Atlasa · VISUAL ONLY · nije kanonska geografija</p>
      </div>
      <nav className="cockpit-doors" aria-label="Autorski prostori">
        {doors.map(door => (
          <button type="button" className="cockpit-door" key={door.page} onClick={() => onOpen(door.page)}>
            <strong>{door.name}</strong><span>{door.caption}</span>
          </button>
        ))}
      </nav>
      <p className="cockpit-motto">KENO stvara. Sistem služi.</p>
    </section>
  );
}
