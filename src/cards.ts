export const characters = [
  { id: 'zagor', name: 'Zagor', text: 'Praktičan, pažljiv prema ljudima i prirodi.' },
  { id: 'chico', name: 'Chico', text: 'Radoznao saputnik; humor iz sitnih ljudskih potreba.' },
  { id: 'tyrion', name: 'Tyrion', text: 'Britak posmatrač, duhovit i vješt sagovornik.' },
  { id: 'tormund', name: 'Tormund', text: 'Glasan, neposredan, snalažljiv u divljini.' },
  { id: 'daenerys', name: 'Daenerys', text: 'Pažljivo posmatra odnose i postupke drugih.' },
  { id: 'drogo', name: 'Drogo', text: 'Ratnik čija se namjera može pokazati postupkom.' },
];
export const situations = [
  { id: 'poker', name: 'Poker na obali', text: 'Partiju karata prekine mali zmaj koji odnosi najveći žeton.' },
  { id: 'boat', name: 'Probušeni čamac', text: 'Društvo pokušava začepiti rupu onim što ima pri ruci.' },
  { id: 'supper', name: 'Večera iznenađenja', text: 'Pripremaju zajednički obrok; svako ima drugačiju zamisao.' },
  { id: 'lost', name: 'Izgubljena sitnica', text: 'Potraga za malom dragocjenošću otkriva neočekivane navike.' },
];
export const locations = [
  { id: 'darkwood', name: 'Darkwood', x: .25, y: .56 },
  { id: 'north', name: 'Sjever', x: .54, y: .20 },
  { id: 'shore', name: 'Zaboravljene obale', x: .40, y: .47 },
  { id: 'essos', name: 'Essos', x: .76, y: .65 },
];
// These are explicit demo positions, not asserted geographic coordinates.
export const seedCards = [...characters.map(c => ({ ...c, kind: 'lik' })),
  ...situations.map(c => ({ ...c, kind: 'situacija' })),
  ...locations.map(c => ({ ...c, kind: 'mjesto', text: c.name }))];
