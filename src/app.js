import './styles.css';

const icons = {
  grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>',
  'cloud-sun': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="17" cy="7" r="3"/><path d="M17 2.5v1M21.2 7h1M20 4l.7-.7M20 10l.7.7M14 4l-.7-.7"/><path d="M5 19.5h11a3.5 3.5 0 0 0 .7-6.93A5.5 5.5 0 0 0 6.15 11 4.25 4.25 0 0 0 5 19.5Z"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5M4 19h17"/><path d="m7 15 3-4 3 2 5-7"/><path d="M16 6h2v2"/></svg>',
  store: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 10v10h16V10M3 10l2-6h14l2 6"/><path d="M3 10a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0M9 20v-5h6v5"/></svg>',
  mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="3" width="8" height="12" rx="4"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6"/></svg>',
  bookmark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3-6 3V4.5Z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 4.3 4L19 6.5"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14.7-4L3 10"/><path d="M3 5v5h5M4 13a8 8 0 0 0 14.7 4L21 14"/><path d="M21 19v-5h-5"/></svg>',
  help: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.7 9a2.35 2.35 0 1 1 4.13 1.55c-.94 1.1-1.83 1.24-1.83 2.7M12 16.8h.01"/></svg>',
  'chevron-down': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></svg>',
  'map-pin': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  'arrow-right': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  'arrow-left': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>',
  play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m8 5 11 7-11 7V5Z"/></svg>',
  pause: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h3v14H7zM14 5h3v14h-3z"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m10.3 4.2-7.7 13a1.8 1.8 0 0 0 1.55 2.7h15.7a1.8 1.8 0 0 0 1.55-2.7l-7.7-13a1.95 1.95 0 0 0-3.4 0Z"/><path d="M12 9v4M12 16.5h.01"/></svg>',
  droplet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.1 6 11a6 6 0 0 1-12 0c0-4.9 6-11 6-11Z"/><path d="M9 15.5a3.1 3.1 0 0 0 3 2"/></svg>',
  wind: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h10a2.5 2.5 0 1 0-2.4-3.2M3 12h15a2.5 2.5 0 1 1-2.4 3.2M3 16h6"/></svg>',
  waves: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9c1.5 0 1.5-1.5 3-1.5S7.5 9 9 9s1.5-1.5 3-1.5S13.5 9 15 9s1.5-1.5 3-1.5S19.5 9 21 9M3 14c1.5 0 1.5-1.5 3-1.5S7.5 14 9 14s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s8-3.7 8-10.2V5l-8-2-8 2v5.8C4 17.3 12 21 12 21Z"/><path d="m8.5 12 2.3 2.3 4.7-5"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M7 3v4M17 3v4M3.5 10h17"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 8.8c0 5.6-8.8 10.2-8.8 10.2S3.2 14.4 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6.5 3.5 9 3l2 5-2 1.5a14 14 0 0 0 5.5 5.5L16 13l5 2-.5 2.5a3 3 0 0 1-3.3 2.4C10.6 19 5 13.4 4.1 6.8A3 3 0 0 1 6.5 3.5Z"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>',
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7.5 8.5 12 4l4.5 4.5M5 20h14"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg>',
  'log-out': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5Z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M10 11v6M14 11v6"/></svg>',
  sprout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 2 5 4.5 5 8a5 5 0 0 1-10 0c0-3.5 2-6 5-8Z"/><path d="M12 11c-2 0-4 1.5-4 4v2h8v-2c0-2.5-2-4-4-4Z"/><path d="M8 21h8"/></svg>',
  fish: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 12c0-4 3-7 9-7 2 0 4 .5 5 1.5L20 12l- -?"/><path d="M20 12c0 3-2 6-6 6-4 0-8-3-8-6s4-6 8-6"/><circle cx="15" cy="10" r="1" fill="currentColor"/><path d="M2 12c1-1 2-1 3 0s2 1 3 0"/></svg>',
  package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/></svg>',
};

// --- Seed data ---
const seedUsers = [
  { id: 1, name: 'Boubacar Diallo', phone: '7784806331', password: '1234', role: 'producteur', type: 'agriculture', commerce: '', location: 'Thiès', initials: 'BD', tone: 'linear-gradient(135deg, #e59f6e, #9e5d4d)', verified: true },
  { id: 2, name: 'Fatou Sarr', phone: '772401846', password: '1234', role: 'producteur', type: 'agriculture', commerce: '', location: 'Sangalkam', initials: 'FS', tone: 'linear-gradient(135deg, #d88e67, #7b5145)', verified: true },
  { id: 3, name: 'Ibrahima Ba', phone: '785103367', password: '1234', role: 'producteur', type: 'peche', commerce: '', location: 'Mbour', initials: 'IB', tone: 'linear-gradient(135deg, #5d9ead, #315f70)', verified: true },
  { id: 4, name: 'Aminata Sow', phone: '771234567', password: '1234', role: 'vendeur', type: '', commerce: 'grossiste', location: 'Dakar', initials: 'AS', tone: 'linear-gradient(135deg, #7ea85c, #4a7d8c)', verified: true },
  { id: 5, name: 'Cheikh Fall', phone: '779105403', password: '1234', role: 'producteur', type: 'peche', commerce: '', location: 'Joal-Fadiouth', initials: 'CF', tone: 'linear-gradient(135deg, #798dc0, #445474)', verified: true },
  { id: 6, name: 'Marième Seck', phone: '764002788', password: '1234', role: 'vendeur', type: '', commerce: 'detaillant', location: 'Thiès', initials: 'MS', tone: 'linear-gradient(135deg, #a66a9f, #633e62)', verified: true },
];

const seedListings = [
  { id: 1, ownerId: 2, name: 'Oignons violets', type: 'agriculture', emoji: '🧅', image: '', condition: 'Récolte du jour', location: 'Sangalkam, Dakar', price: '450', unit: 'F / kg', quantity: '800 kg', stock: 800, seller: 'Fatou Sarr', phone: '+221 77 240 18 46', initials: 'FS', tone: 'linear-gradient(135deg, #d88e67, #7b5145)', createdAt: Date.now() - 1000*60*30 },
  { id: 2, ownerId: 1, name: 'Tomates fraîches', type: 'agriculture', emoji: '🍅', image: 'tomato', condition: 'Prêtes à partir', location: 'Notto Gouye Diama', price: '600', unit: 'F / kg', quantity: '350 kg', stock: 350, seller: 'Boubacar Diallo', phone: '+221 78 480 63 31', initials: 'BD', tone: 'linear-gradient(135deg, #7ea85c, #d77d5d)', createdAt: Date.now() - 1000*60*60*2 },
  { id: 3, ownerId: 3, name: 'Sardines fraîches', type: 'peche', emoji: '🐟', image: 'fish-image', condition: 'Débarquées ce matin', location: 'Mbour, quai de pêche', price: '1 800', unit: 'F / kg', quantity: '120 kg', stock: 120, seller: 'Ibrahima Ba', phone: '+221 78 510 33 67', initials: 'IB', tone: 'linear-gradient(135deg, #5d9ead, #315f70)', createdAt: Date.now() - 1000*60*15 },
  { id: 4, ownerId: 2, name: 'Carottes', type: 'agriculture', emoji: '🥕', image: '', condition: 'Disponible', location: 'Lompoul, Louga', price: '500', unit: 'F / kg', quantity: '200 kg', stock: 200, seller: 'Fatou Sarr', phone: '+221 77 240 18 46', initials: 'AD', tone: 'linear-gradient(135deg, #e9a250, #a96238)', createdAt: Date.now() - 1000*60*60*5 },
  { id: 5, ownerId: 5, name: 'Thiof entier', type: 'peche', emoji: '🐠', image: 'fish-image', condition: 'Pêche artisanale', location: 'Joal-Fadiouth', price: '3 500', unit: 'F / kg', quantity: '65 kg', stock: 65, seller: 'Cheikh Fall', phone: '+221 77 910 54 03', initials: 'CF', tone: 'linear-gradient(135deg, #798dc0, #445474)', createdAt: Date.now() - 1000*60*60*8 },
  { id: 6, ownerId: 1, name: 'Bissap séché', type: 'agriculture', emoji: '🌺', image: '', condition: 'Nouveau', location: 'Touba Toul, Thiès', price: '2 200', unit: 'F / kg', quantity: '90 kg', stock: 90, seller: 'Boubacar Diallo', phone: '+221 78 480 63 31', initials: 'BD', tone: 'linear-gradient(135deg, #a66a9f, #633e62)', createdAt: Date.now() - 1000*60*60*24 },
];

const weatherAlerts = [
  { id: 'alert-pluie-thies', icon: 'droplet', tone: 'warning', audience: 'agriculture', title: 'Pluies fortes attendues', place: 'Thiès · Agriculture', tag: 'À surveiller', tagTone: 'orange', text: 'Des précipitations fortes sont attendues demain entre 15 h et 18 h. Protégez vos récoltes et vérifiez vos canaux de drainage.', time: 'Aujourd’hui, 10:24', audio: 'Alerte pluie forte attendue demain entre quinze heures et dix-huit heures dans la région de Thiès. Protégez vos récoltes.' },
  { id: 'alert-mer-petite-cote', icon: 'waves', tone: 'danger', audience: 'peche', title: 'Vigilance en mer', place: 'Petite Côte · Pêche', tag: 'Important', tagTone: 'red', text: 'Vent de nord-ouest et houle forte cet après-midi. Rentrez avant 17 h et gardez vos gilets de sauvetage.', time: 'Aujourd’hui, 09:12', audio: 'Vigilance en mer. Vent de nord-ouest et houle forte cet après-midi. Rentrez avant dix-sept heures.' },
  { id: 'alert-vent-niayes', icon: 'wind', tone: '', audience: 'agriculture', title: 'Vent favorable aux semis', place: 'Zone des Niayes · Agriculture', tag: 'Conseil', tagTone: '', text: 'Les conditions sont favorables à la préparation des planches. Semez tôt le matin et arrosez avec mesure.', time: 'Hier, 16:40', audio: 'Conseil de saison. Les conditions sont favorables à la préparation des planches. Semez tôt le matin.' },
  { id: 'alert-securite-mbour', icon: 'shield', tone: '', audience: 'peche', title: 'Rappel sécurité en mer', place: 'Mbour · Pêche', tag: 'À retenir', tagTone: 'blue', text: 'Avant chaque sortie, vérifiez le carburant, la radio, les gilets et la météo. Prévenez un proche de votre itinéraire.', time: 'Hier, 08:05', audio: 'Rappel sécurité en mer. Vérifiez le carburant, la radio, les gilets et la météo avant chaque sortie.' },
];

const weatherForecast = [
  { day: 'Aujourd’hui', emoji: '⛅', temp: '28°', label: 'Nuageux', today: true },
  { day: 'Jeu 17', emoji: '🌧️', temp: '27°', label: 'Pluie forte' },
  { day: 'Ven 18', emoji: '🌦️', temp: '29°', label: 'Averses' },
  { day: 'Sam 19', emoji: '☀️', temp: '30°', label: 'Ensoleillé' },
  { day: 'Dim 20', emoji: '☀️', temp: '31°', label: 'Ensoleillé' },
];

// --- Audio localisé ---
// Les textes sont préparés dans chaque langue avant d'être envoyés à SpeechSynthesis.
// Cela évite de parler un texte français avec une voix simplement configurée en wolof.
const audioLanguages = {
  fr: { label: 'Français', locale: 'fr-FR' },
  wo: { label: 'Wolof', locale: 'wo-SN' },
  ff: { label: 'Pulaar', locale: 'ff-SN' },
  srr: { label: 'Sérère', locale: 'srr-SN' },
};

const localizedAlertAudio = {
  'alert-pluie-thies': {
    fr: 'Alerte pluie forte attendue demain entre quinze heures et dix-huit heures dans la région de Thiès. Protégez vos récoltes.',
    wo: 'Moytul leen. Taw bu bare dina wàcc ëllëg ci Thiès, diggante fukki waxtu ak juróom-ñett waxtu. Aar leen seen mbey mi.',
    ff: 'Ɓeydu. Ngesa mawɗo waawi waɗde janngo hakkunde sa’a 15 e sa’a 18 e Thiès. Rewtu mooftude njobdi maaɓɓe.',
    srr: 'Moytu. Taw bu mag dina ñëw ëllëg ci Thiès, diggante waxtu fukki ak waxtu juróom-ñett. Aar seen mbey mi.',
  },
  'alert-mer-petite-cote': {
    fr: 'Vigilance en mer. Vent de nord-ouest et houle forte cet après-midi. Rentrez avant dix-sept heures et portez vos gilets de sauvetage.',
    wo: 'Moytu ci géej. Ngëlawu bëj-gànnaar ak géej gu rëy dina am tey. Dellu leen bala juróom-ñett waxtu te sol seen gilet de sauvetage.',
    ff: 'Hoto e maayo. Henndu lesdi-gorgol e duɗɗugol mawɗo maa waɗde hande. Artuɗon hade sa’a 17 tee ɓeyduɗon gile maaɓɓe.',
    srr: 'Moytu ci géej. Ngëlaw gu bëj-gànnaar ak géej gu mag dina am tey. Dellu bala juróom-ñett waxtu te sol gilet yi.',
  },
  'alert-vent-niayes': {
    fr: 'Conseil de saison. Les conditions sont favorables à la préparation des planches. Semez tôt le matin et arrosez avec mesure.',
    wo: 'Ndigal bu jamono. Jamono ji baax na ngir waajal tool yi. Jël leen seed ci suba te naan ndox ci ndank.',
    ff: 'Ɗaɓɓitannde ndee. Sahaa oo moƴƴi ngam hebbude leƴƴe. Aɗa waawi eŋƴude subaka tee ndiyam e hakkille.',
    srr: 'Ndigal bu jamono. Waxtu wi baax na ngir waajal tool yi. Seem ci suba te naan ndox ci ndank.',
  },
  'alert-securite-mbour': {
    fr: 'Rappel sécurité en mer. Vérifiez le carburant, la radio, les gilets et la météo avant chaque sortie.',
    wo: 'Fattaliku ci kaarange ci géej. Seet karbiran, radio, gilet yi ak jawwu bi bala génn bépp yoon.',
    ff: 'Ɗaɓɓitorde kisal e maayo. Ƴeewto karburan, radio, gile maaɓɓe e jawwu ndee hade yalude.',
    srr: 'Fattaliku ci kaarange ci géej. Seet karbiran, radio, gilet yi ak jawwu bi bala génn.',
  },
};

const localizedAudio = {
  producerBriefing: {
    fr: ({ name, listings, stock, incoming, unread }) => `Bonjour ${name}. Vous avez ${listings} annonces actives avec ${stock} kilos en stock. ${incoming} nouvelles demandes vous attendent. ${unread} alertes météo ne sont pas encore ouvertes.`,
    wo: ({ name, listings, stock, incoming, unread }) => `Salaam aleekum ${name}. Am nga ${listings} yégle yu ubbeeku ak ${stock} kilo ci sa loxo. ${incoming} laaj yu bees dañuy xaar sa tontu. ${unread} xibaaru jawwu bi ñu seetagul.`,
    ff: ({ name, listings, stock, incoming, unread }) => `A jaaraama ${name}. Aɗa jogii ${listings} habrude udditiiɗe, e ${stock} kilo e mooftugol. ${incoming} ɗaɓɓitanɗe kesɗe njiɗi jaabawol maa. ${unread} habrude jawwu ndiyam ɗe ngalaa ƴeewtude.`,
    srr: ({ name, listings, stock, incoming, unread }) => `Jàmm nga ${name}. Am nga ${listings} yégle yu ubbeeku ak ${stock} kilo ci sa loxo. ${incoming} laaj yu bees dañuy xaar sa tontu. ${unread} xibaaru jawwu bi ñu seetagul.`,
  },
  buyerBriefing: {
    fr: ({ name }) => `Bonjour ${name}. Douze annonces fraîches sont disponibles aujourd'hui. Les oignons sont à quatre cent cinquante francs le kilo. Trois producteurs près de vous ont du stock.`,
    wo: ({ name }) => `Salaam aleekum ${name}. Tey am na fukk ak ñaar yégle yu bees. Soblee yi ñooy ñeenti téeméeri ak juróom fukk frank ci kilo. Ñett beykat yu nekk ci sa wet am nañu alal.`,
    ff: ({ name }) => `A jaaraama ${name}. Hannde habrude kesɗe sappo e ɗiɗi ngarii. Lekki pungel ngoodi e nder ɓeŋŋugol ɓeeyre. Beyditooɓe tati ɓadii maa jogii mooftugol.`,
    srr: ({ name }) => `Jàmm nga ${name}. Tey am na fukk ak ñaar yégle yu bees. Soblee yi ñooy ñeenti téeméeri ak juróom fukk frank ci kilo. Ñett beykat yu nekk ci sa wet am nañu alal.`,
  },
  quickBriefing: {
    fr: ({ name }) => `Bonjour ${name}. Voici votre briefing. Une pluie forte est attendue demain à Thiès. Les oignons se vendent quatre cent cinquante francs le kilo à Sangalkam. En mer, la prudence est recommandée cet après-midi.`,
    wo: ({ name }) => `Salaam aleekum ${name}. Lii mooy sa xibaar. Taw bu bare dina wàcc ëllëg ci Thiès. Soblee yi ñu jaay nañu leen ñeenti téeméeri ak juróom fukk frank ci kilo ci Sangalkam. Ci géej, moytul leen tey ci ngoon.`,
    ff: ({ name }) => `A jaaraama ${name}. Ɗooɗi maa ɗoo. Ngesa mawɗo waawi waɗde janngo e Thiès. Lekki pungel ngoodi e ɓeŋŋugol ɓeeyre e Sangalkam. E maayo, hoto hande e kikiiɗe.`,
    srr: ({ name }) => `Jàmm nga ${name}. Lii mooy sa xibaar. Taw bu mag dina ñëw ëllëg ci Thiès. Soblee yi ñu jaay nañu leen ñeenti téeméeri ak juróom fukk frank ci kilo ci Sangalkam. Ci géej, moytu leen tey ci ngoon.`,
  },
  priceSummary: {
    fr: () => 'Les prix du jour. Oignon violet, quatre cent cinquante francs le kilo. Tomate fraîche, six cents francs le kilo. Carotte, cinq cents francs le kilo. Sardine, mille huit cents francs le kilo.',
    wo: () => 'Njëg yu tey. Soblee violet, ñeenti téeméeri ak juróom fukk frank ci kilo. Tomaat, juróom téeméeri ak benn frank ci kilo. Karot, juróom téeméeri frank ci kilo. Sardiin, junni ak juróom-ñett téeméeri frank ci kilo.',
    ff: () => 'Ɓeŋŋe hannde. Lekki pungel, ɓeeyre e ɓeŋŋugol kilo. Tomat, jeegom ɓeŋŋugol kilo. Karot, sappo e jowi ɓeŋŋugol kilo. Sardin, junere e jeeɗiɗi ɓeŋŋugol kilo.',
    srr: () => 'Njëg yu tey. Soblee violet, ñeenti téeméeri ak juróom fukk frank ci kilo. Tomaat, juróom téeméeri ak benn frank ci kilo. Karot, juróom téeméeri frank ci kilo. Sardiin, junni ak juróom-ñett téeméeri frank ci kilo.',
  },
  price: {
    fr: ({ product, price, place }) => `Le prix moyen du ${product} est de ${price} au marché de ${place}.`,
    wo: ({ product, price, place }) => `Njëgu ${product} mooy ${price} ci marse bi ci ${place}.`,
    ff: ({ product, price, place }) => `Ɓeŋŋugol ${product} ko ${price} e luumo ${place}.`,
    srr: ({ product, price, place }) => `Njëgu ${product} mooy ${price} ci marse bi ci ${place}.`,
  },
};

// --- State ---
const ls = {
  get(k, fallback) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; } catch { return fallback; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

const state = {
  view: 'dashboard',
  authView: 'welcome', // welcome | login | register
  selectedRole: null, // producteur | vendeur
  language: ls.get('jokko-language', 'fr'),
  marketFilter: 'all',
  priceFilter: 'all',
  search: '',
  listings: ls.get('jokko-listings', seedListings),
  users: ls.get('jokko-users', seedUsers),
  currentUser: ls.get('jokko-auth', null),
  favoritesMap: ls.get('jokko-favorites-map', {}), // userId -> [listingIds]
  inquiries: ls.get('jokko-inquiries', []),
  editingListing: null,
  online: typeof navigator === 'undefined' ? true : navigator.onLine,
  lastSync: ls.get('jokko-last-sync', Date.now()),
  readAlertsMap: ls.get('jokko-read-alerts', {}),
  notifOpen: false,
  deferredInstall: null,
};

function saveAll() {
  ls.set('jokko-users', state.users);
  ls.set('jokko-listings', state.listings);
  ls.set('jokko-favorites-map', state.favoritesMap);
  ls.set('jokko-inquiries', state.inquiries);
  ls.set('jokko-language', state.language);
  ls.set('jokko-last-sync', state.lastSync);
  ls.set('jokko-read-alerts', state.readAlertsMap);
  if (state.currentUser) ls.set('jokko-auth', state.currentUser);
  else localStorage.removeItem('jokko-auth');
}

function getCurrentFavorites() {
  if (!state.currentUser) return [];
  return state.favoritesMap[state.currentUser.id] || [];
}
function setCurrentFavorites(arr) {
  if (!state.currentUser) return;
  state.favoritesMap[state.currentUser.id] = arr;
  saveAll();
}
function isFavorite(listingId) {
  return getCurrentFavorites().includes(listingId);
}
function toggleFavorite(listingId) {
  const favs = getCurrentFavorites();
  const idx = favs.indexOf(listingId);
  if (idx >= 0) favs.splice(idx, 1);
  else favs.push(listingId);
  setCurrentFavorites(favs);
}

const app = document.querySelector('#app');

// --- Helpers ---
function icon(name) { return icons[name] || icons.grid; }
function hydrateIcons(root = document) {
  root.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    if (icons[name]) el.innerHTML = icons[name];
  });
}
function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' }[char]));
}
function formatPhoneForTel(phone) { return phone.replaceAll(' ', '').replaceAll('+', ''); }
function getAudioLanguageKey() { return audioLanguages[state.language] ? state.language : 'fr'; }
function getAudioLanguage() { return audioLanguages[getAudioLanguageKey()]; }
function audioLanguageLabel() { return getAudioLanguage().label; }
function audioForAlert(alert) {
  const language = getAudioLanguageKey();
  return localizedAlertAudio[alert.id]?.[language] || localizedAlertAudio[alert.id]?.fr || alert.audio;
}
function localizedAudioText(button, fallback = '') {
  const key = button?.dataset.audioKey;
  const user = state.currentUser;
  if (!key || !user) return fallback;
  if (key === 'producer-briefing') {
    return localizedAudio.producerBriefing[getAudioLanguageKey()]?.({
      name: user.name,
      listings: button.dataset.audioListings || '0',
      stock: button.dataset.audioStock || '0',
      incoming: button.dataset.audioIncoming || '0',
      unread: button.dataset.audioUnread || '0',
    }) || fallback;
  }
  if (key === 'buyer-briefing') {
    return localizedAudio.buyerBriefing[getAudioLanguageKey()]?.({ name: user.name }) || fallback;
  }
  if (key === 'quick-briefing') {
    return localizedAudio.quickBriefing[getAudioLanguageKey()]?.({ name: user.name }) || fallback;
  }
  if (key === 'price-summary') {
    return localizedAudio.priceSummary[getAudioLanguageKey()]?.() || fallback;
  }
  if (key === 'weather-alert') {
    const alert = weatherAlerts.find((item) => item.id === button.dataset.audioAlert);
    return alert ? audioForAlert(alert) : fallback;
  }
  if (key === 'price') {
    return localizedAudio.price[getAudioLanguageKey()]?.({
      product: button.dataset.audioProduct || '',
      price: button.dataset.audioPriceValue || '',
      place: button.dataset.audioPlace || '',
    }) || fallback;
  }
  return fallback;
}


function todayLabel() {
  try {
    const s = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    return s.charAt(0).toUpperCase() + s.slice(1);
  } catch {
    return 'Mercredi 16 septembre 2026';
  }
}
function timeAgo(ts) {
  if (!ts) return 'jamais';
  const mins = Math.max(0, Math.round((Date.now() - Number(ts)) / 60000));
  if (mins < 1) return "à l'instant";
  if (mins < 60) return `il y a ${mins} min`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `il y a ${hours} h`;
  return `il y a ${Math.round(hours / 24)} j`;
}
function getReadAlertIds() {
  if (!state.currentUser) return [];
  return state.readAlertsMap[String(state.currentUser.id)] || [];
}
function isAlertRead(id) {
  return getReadAlertIds().includes(id);
}
function unreadAlerts() {
  return weatherAlerts.filter((alert) => !isAlertRead(alert.id));
}
function markAllAlertsRead() {
  if (!state.currentUser) return;
  const key = String(state.currentUser.id);
  const current = new Set(state.readAlertsMap[key] || []);
  weatherAlerts.forEach((alert) => current.add(alert.id));
  state.readAlertsMap[key] = [...current];
  saveAll();
}
function relevantAlerts() {
  const type = state.currentUser?.type;
  return [...weatherAlerts].sort((a, b) => {
    const score = (alert) => {
      let value = 0;
      if (alert.tone === 'danger') value += 4;
      if (alert.tone === 'warning') value += 2;
      if (type === 'peche' && alert.audience === 'peche') value += 3;
      if (type !== 'peche' && alert.audience === 'agriculture') value += 3;
      if (!isAlertRead(alert.id)) value += 1;
      return value;
    };
    return score(b) - score(a);
  });
}
function getWeatherNow() {
  const user = state.currentUser;
  const loc = user?.location || 'Dakar';
  const isPeche = user?.type === 'peche';
  return {
    location: loc,
    temp: isPeche ? 27 : 28,
    desc: isPeche ? 'Ciel voilé, mer formée' : 'Partiellement nuageux',
    emoji: isPeche ? '🌊' : '⛅',
    wind: isPeche ? '28 km/h' : '18 km/h',
    humidity: '71 %',
    rain: isPeche ? '45 %' : '30 %',
    midLabel: isPeche ? 'Houle' : 'Humidité',
    midValue: isPeche ? '1,8 m' : '71 %',
    isPeche,
  };
}
function incomingInquiries() {
  if (!state.currentUser) return [];
  return state.inquiries.filter((item) => {
    const listing = state.listings.find((listing) => listing.id === item.listingId);
    return listing && listing.ownerId === state.currentUser.id;
  });
}
function getTopNotifications() {
  const items = unreadAlerts().map((alert) => ({
    id: `w-${alert.id}`,
    view: 'weather',
    icon: alert.icon,
    tone: alert.tone,
    title: alert.title,
    text: alert.text,
    time: alert.time,
  }));
  if (state.currentUser?.role === 'producteur') {
    incomingInquiries().filter((item) => item.status === 'pending').forEach((inq) => {
      const listing = state.listings.find((item) => item.id === inq.listingId);
      const buyer = state.users.find((item) => item.id === inq.buyerId);
      items.push({
        id: `i-${inq.id}`,
        view: 'orders',
        icon: 'phone',
        tone: 'warning',
        title: `${buyer?.name || 'Un acheteur'} est intéressé`,
        text: listing ? `Demande pour ${listing.name}` : 'Nouvelle demande',
        time: new Date(inq.date).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
      });
    });
  }
  return items;
}
function notificationPanelHtml() {
  const items = getTopNotifications();
  return `<div class="notif-panel" id="notif-panel" role="menu">
    <h3>Notifications ${items.length ? `(${items.length})` : ''}</h3>
    ${items.length === 0 ? `<div class="notif-empty">Rien de nouveau. Les alertes lues restent disponibles hors ligne.</div>` : items.map((item) => `
      <button class="notif-item" data-view="${item.view}">
        <div class="alert-marker ${item.tone}">${icon(item.icon)}</div>
        <div class="alert-copy">
          <div class="alert-title-line"><strong>${escapeHtml(item.title)}</strong><time>${escapeHtml(item.time)}</time></div>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </button>
    `).join('')}
    ${unreadAlerts().length ? `<button class="text-button" style="width:100%;justify-content:center;padding:10px" data-view="weather">Ouvrir météo & alertes ${icon('arrow-right')}</button>` : ''}
  </div>`;
}


function showToast(message, type = 'success') {
  const region = document.querySelector('#toast-region');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  region.appendChild(toast);
  setTimeout(() => toast.remove(), 3600);
}
function closeModal() { document.querySelector('#modal-root').innerHTML = ''; }

function openInstallHelp() {
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close-modal><div class="modal" role="dialog" aria-modal="true" aria-labelledby="install-title"><div class="modal-header"><div><h2 id="install-title">Installer Jokko sur Android</h2><p>Aucune installation JDK n’est nécessaire. Jokko est une app web installable (PWA).</p></div><button class="modal-close" data-close-modal aria-label="Fermer">${icon('close')}</button></div>
    <ol style="margin:0 0 16px;padding-left:18px;color:#5a6b60;font-size:12px;line-height:1.7">
      <li>Ouvrez cette page dans <strong>Chrome</strong> sur votre téléphone.</li>
      <li>Appuyez sur le menu <strong>⋮</strong> en haut à droite.</li>
      <li>Choisissez <strong>Ajouter à l’écran d’accueil</strong> ou <strong>Installer l’application</strong>.</li>
      <li>Ouvrez l’icône Jokko : l’app fonctionne <strong>hors ligne</strong>, avec météo et alertes en cache.</li>
    </ol>
    <div style="padding:12px 14px;border-radius:10px;background:#f0f8ed;border:1px solid #dceade;color:#4c6652;font-size:11px;line-height:1.5;margin-bottom:8px">Les données (annonces, alertes, météo) restent sur votre téléphone. Pas besoin de Java/JDK ni d’APK.</div>
    <div class="modal-actions"><button type="button" class="outline-button" data-close-modal>Fermer</button><button type="button" class="primary-button" id="install-app">${icon('upload')} Installer maintenant</button></div></div></div>`;
  hydrateIcons(document.querySelector('#modal-root'));
}

// --- Auth logic ---
function login(phone, password) {
  const cleanPhone = phone.replaceAll(' ', '').replaceAll('+', '').slice(-9);
  const user = state.users.find(u => {
    const up = u.phone.replaceAll(' ', '').replaceAll('+', '').slice(-9);
    return up === cleanPhone && u.password === password;
  });
  if (!user) return { ok: false, message: 'Numéro ou mot de passe incorrect.' };
  if (state.selectedRole && user.role !== state.selectedRole) {
    return { ok: false, message: `Ce compte est ${user.role === 'producteur' ? 'producteur/pêcheur' : 'vendeur'}. Choisissez le bon espace.` };
  }
  state.currentUser = user;
  state.view = 'dashboard';
  saveAll();
  return { ok: true };
}
function register(data) {
  const cleanPhone = data.phone.replaceAll(' ', '').replaceAll('+', '').slice(-9);
  const exists = state.users.some(u => u.phone.replaceAll(' ', '').replaceAll('+', '').slice(-9) === cleanPhone);
  if (exists) return { ok: false, message: 'Ce numéro existe déjà. Connectez-vous.' };
  const newUser = {
    id: Date.now(),
    name: data.name.trim(),
    phone: data.phone.trim(),
    password: data.password,
    role: data.role,
    type: data.type || '',
    commerce: data.commerce || '',
    location: data.location,
    initials: data.name.trim().split(' ').map(n=>n[0]).join('').slice(0,2).toUpperCase(),
    tone: data.role === 'producteur'
      ? 'linear-gradient(135deg, #116b4f, #0b4e3a)'
      : 'linear-gradient(135deg, #f3a344, #8a5a22)',
    verified: false,
  };
  state.users.push(newUser);
  state.currentUser = newUser;
  state.view = 'dashboard';
  saveAll();
  return { ok: true };
}
function logout() {
  state.currentUser = null;
  state.authView = 'welcome';
  state.selectedRole = null;
  state.view = 'dashboard';
  saveAll();
  render();
  showToast('Déconnecté. À bientôt !', 'success');
}

// --- Product media and market cards ---
function getProductPhotos(item) {
  return Array.isArray(item?.photos) ? item.photos.filter(Boolean).slice(0, 4) : [];
}

function productVisual(item, extraClass = '') {
  const photos = getProductPhotos(item);
  const imageClass = item.image ? ` ${item.image}` : '';
  const safeName = escapeHtml(item.name || 'Produit');
  if (!photos.length) {
    return `<div class="market-image${imageClass}${extraClass ? ` ${extraClass}` : ''}" aria-hidden="true">${item.emoji || '📦'}</div>`;
  }
  return `<div class="product-photo-carousel${extraClass ? ` ${extraClass}` : ''}" data-photo-carousel="${item.id}" aria-label="Photos de ${safeName}">
    ${photos.map((photo, index) => `<img class="product-photo-slide ${index === 0 ? 'active' : ''}" src="${escapeHtml(photo)}" alt="${safeName} — photo ${index + 1} sur ${photos.length}" data-photo-index="${index}" />`).join('')}
    ${photos.length > 1 ? `<span class="product-photo-count">${photos.length} photos</span><span class="product-photo-dots">${photos.map((_, index) => `<i class="${index === 0 ? 'active' : ''}"></i>`).join('')}</span>` : ''}
  </div>`;
}

const photoCarouselTimers = new Set();
function stopPhotoCarousels() {
  photoCarouselTimers.forEach((timer) => clearInterval(timer));
  photoCarouselTimers.clear();
}
function startPhotoCarousels(root = document) {
  root.querySelectorAll('[data-photo-carousel]').forEach((carousel) => {
    const slides = [...carousel.querySelectorAll('.product-photo-slide')];
    if (slides.length < 2) return;
    let current = 0;
    const showSlide = (next) => {
      current = next % slides.length;
      slides.forEach((slide, index) => slide.classList.toggle('active', index === current));
      carousel.querySelectorAll('.product-photo-dots i').forEach((dot, index) => dot.classList.toggle('active', index === current));
    };
    const timer = setInterval(() => {
      if (!carousel.isConnected) {
        clearInterval(timer);
        photoCarouselTimers.delete(timer);
        return;
      }
      showSlide(current + 1);
    }, 2800);
    photoCarouselTimers.add(timer);
  });
}

function marketCard(item, opts = {}) {
  const fav = isFavorite(item.id);
  const isOwner = state.currentUser && item.ownerId === state.currentUser.id;
  const showFav = state.currentUser?.role === 'vendeur' && !isOwner;
  return `<article class="market-card" data-product-id="${item.id}" data-type="${item.type}" data-search="${escapeHtml(`${item.name} ${item.location} ${item.seller}`.toLowerCase())}" role="button" tabindex="0" aria-label="Voir le détail de ${escapeHtml(item.name)}">
    <div class="market-card-top">
      ${productVisual(item)}
      <div style="display:flex;gap:6px;align-items:center">
        ${showFav ? `<button class="fav-button ${fav ? 'active' : ''}" data-fav="${item.id}" aria-label="Favori">${icon(fav ? 'heart' : 'bookmark')}</button>` : ''}
        <span class="condition-label">${escapeHtml(item.condition)}</span>
      </div>
    </div>
    <h3>${escapeHtml(item.name)}</h3>
    <div class="market-origin">${icon('map-pin')}${escapeHtml(item.location)}</div>
    ${isOwner ? `<div style="margin-top:8px"><span class="stock-badge">${icon('package')} ${escapeHtml(item.quantity)} en stock</span></div>` : ''}
    <div class="market-bottom">
      <div><div class="market-price">${escapeHtml(item.price)} <small>${escapeHtml(item.unit)}</small></div><div class="market-origin" style="margin-top:5px">${escapeHtml(item.quantity)} disponibles</div></div>
      ${isOwner
        ? `<div style="display:flex;gap:6px"><button class="interest-button" data-edit="${item.id}">${icon('edit')}</button><button class="interest-button" style="background:var(--red-pale);color:var(--red)" data-delete="${item.id}">${icon('trash')}</button></div>`
        : `<button class="interest-button ${state.currentUser?.role === 'vendeur' ? 'orange' : ''}" data-interest="${item.id}">${icon('phone')} ${state.currentUser?.role === 'vendeur' ? 'Commander' : 'Intéressé'}</button>`
      }
    </div>
  </article>`;
}

// --- Auth Views ---
function authWelcomeView() {
  return `<div class="auth-shell">
    <div class="auth-container">
      <div class="auth-header">
        <div class="auth-brand">
          <div class="auth-brand-mark"><span></span><i></i></div>
          <div class="auth-brand-name">jokko</div>
        </div>
        <h1 class="auth-title">Bienvenue sur Jokko 🌾</h1>
        <p class="auth-subtitle">La voix du terrain pour les producteurs, pêcheurs et vendeurs du Sénégal. Choisissez votre espace pour commencer. App mobile PWA, fonctionne hors ligne.</p>
      </div>
      <div class="role-grid">
        <button class="role-card producteur ${state.selectedRole === 'producteur' ? 'selected' : ''}" data-select-role="producteur">
          <span class="role-check">${icon('check')}</span>
          <div class="role-card-top">
            <div class="role-icon producteur">🌱</div>
            <div><h3>Producteur / Pêcheur</h3><small>Je vends mes produits</small></div>
          </div>
          <ul class="role-features">
            <li>Publier mes récoltes & pêche du jour</li>
            <li>Recevoir les alertes météo vocales</li>
            <li>Gérer mon stock et mes demandes</li>
            <li>Publier à la voix en Wolof, Pulaar, Sérère</li>
          </ul>
          <span class="role-cta">${icon('sprout')} Espace producteur</span>
        </button>
        <button class="role-card vendeur ${state.selectedRole === 'vendeur' ? 'selected' : ''}" data-select-role="vendeur">
          <span class="role-check">${icon('check')}</span>
          <div class="role-card-top">
            <div class="role-icon vendeur">🛒</div>
            <div><h3>Vendeur / Acheteur</h3><small>Je cherche à acheter</small></div>
          </div>
          <ul class="role-features">
            <li>Parcourir les annonces locales directes</li>
            <li>Comparer les prix du marché</li>
            <li>Contacter producteurs sans intermédiaire</li>
            <li>Suivre mes favoris & commandes</li>
          </ul>
          <span class="role-cta">${icon('store')} Espace vendeur</span>
        </button>
      </div>
      <div class="auth-card" style="text-align:center;padding:20px">
        <p style="margin:0 0 12px;color:#5a6b60;font-size:11px;line-height:1.5">Jokko est une PWA mobile. Installez-la sur votre téléphone Android pour un accès rapide, même sans réseau. Pas besoin de JDK.</p>
        <button class="primary-button" id="install-app" style="width:100%;margin-bottom:12px">${icon('upload')} Installer sur Android</button>
        <div style="display:flex;gap:8px;justify-content:center">
          <span class="tag">📱 App mobile</span><span class="tag orange">🔊 Vocal local</span><span class="tag blue">📶 Hors ligne</span>
        </div>
      </div>
    </div>
  </div>`;
}

function authFormView() {
  const isLogin = state.authView === 'login';
  const role = state.selectedRole || 'producteur';
  const roleLabel = role === 'producteur' ? 'Producteur / Pêcheur' : 'Vendeur / Acheteur';
  const roleEmoji = role === 'producteur' ? '🌱' : '🛒';
  return `<div class="auth-shell">
    <div class="auth-container" style="max-width:480px">
      <button class="auth-back" data-back-welcome>${icon('arrow-left')} Retour</button>
      <div class="auth-header" style="padding-top:0">
        <div class="auth-brand"><div class="auth-brand-mark"><span></span><i></i></div><div class="auth-brand-name">jokko</div><span class="role-badge ${role}">${roleEmoji} ${roleLabel}</span></div>
        <h1 class="auth-title" style="font-size:26px">${isLogin ? 'Content de vous revoir' : 'Créer votre compte'}</h1>
        <p class="auth-subtitle">${isLogin ? 'Connectez-vous à votre espace sécurisé.' : `Rejoignez Jokko en tant que ${roleLabel.toLowerCase()}.`}</p>
      </div>
      <div class="auth-card">
        <div class="auth-tabs">
          <button class="auth-tab ${isLogin ? 'active' : ''}" data-auth-tab="login">Connexion</button>
          <button class="auth-tab ${!isLogin ? 'active' : ''}" data-auth-tab="register">Inscription</button>
        </div>
        ${isLogin ? `
          <form class="auth-form" id="login-form">
            <div class="field"><label>Numéro de téléphone</label><input name="phone" type="tel" placeholder="77 123 45 67" required /></div>
            <div class="field"><label>Mot de passe</label><input name="password" type="password" placeholder="••••" required /></div>
            <button class="auth-submit ${role}" type="submit">${icon('user')} Se connecter</button>
            <div class="auth-hint"><strong>Astuce démo :</strong> utilisez un compte ci-dessous. Mot de passe pour tous : <strong>1234</strong></div>
          </form>
        ` : `
          <form class="auth-form" id="register-form">
            <div class="field"><label>Nom complet</label><input name="name" placeholder="Ex. Boubacar Diallo" required /></div>
            <div class="field-grid">
              <div class="field"><label>Téléphone</label><input name="phone" type="tel" placeholder="77 123 45 67" required /></div>
              <div class="field"><label>Mot de passe</label><input name="password" type="password" placeholder="Min. 4 caractères" required minlength="4" /></div>
            </div>
            <div class="field"><label>Zone / Localité</label><select name="location" required><option value="">Choisir</option><option>Dakar & alentours</option><option>Thiès</option><option>Mbour</option><option>Saint-Louis</option><option>Louga</option><option>Joal-Fadiouth</option><option>Sangalkam</option><option>Notto Gouye Diama</option></select></div>
            ${role === 'producteur' ? `
              <div class="field"><label>Activité principale</label><select name="type" required><option value="">Choisir</option><option value="agriculture">Agriculture / Maraîchage</option><option value="peche">Pêche artisanale</option><option value="mixte">Mixte agriculture & pêche</option></select></div>
            ` : `
              <div class="field"><label>Type de commerce</label><select name="commerce" required><option value="">Choisir</option><option value="detaillant">Détaillant marché</option><option value="grossiste">Grossiste / Semi-grossiste</option><option value="transformatrice">Transformatrice</option><option value="restauratrice">Restauratrice / Mareyeuse</option></select></div>
            `}
            <button class="auth-submit ${role}" type="submit">${icon('plus')} Créer mon compte ${roleEmoji}</button>
          </form>
        `}
        <div class="demo-accounts">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2px"><span style="font-size:10px;font-weight:700;color:#9aa59d;letter-spacing:.5px;text-transform:uppercase">Comptes de démonstration</span><span class="tag ${role === 'producteur' ? '' : 'orange'}">${role}</span></div>
          ${state.users.filter(u => !state.selectedRole || u.role === state.selectedRole).map(u => `
            <button class="demo-account" data-demo-login="${u.phone}">
              <div class="demo-avatar" style="background:${u.tone}">${u.initials}</div>
              <div class="demo-info"><strong>${escapeHtml(u.name)}</strong><span>${escapeHtml(u.location)} · ${u.phone}</span></div>
              <span class="demo-role ${u.role}">${u.role === 'producteur' ? (u.type === 'peche' ? 'pêcheur' : 'producteur') : 'vendeur'}</span>
            </button>
          `).join('')}
        </div>
        <div class="auth-footer">${isLogin ? `Pas encore de compte ? <button data-auth-tab="register">S'inscrire</button>` : `Déjà inscrit ? <button data-auth-tab="login">Se connecter</button>`}</div>
      </div>
    </div>
  </div>`;
}

// --- Main shell ---
function getNavConfig() {
  if (!state.currentUser) return [];
  const role = state.currentUser.role;
  const ownCount = state.listings.filter(l => l.ownerId === state.currentUser.id).length;
  const favCount = getCurrentFavorites().length;
  const incoming = state.inquiries.filter(i => {
    const listing = state.listings.find(l => l.id === i.listingId);
    return listing && listing.ownerId === state.currentUser.id;
  }).length;
  const myInquiries = state.inquiries.filter(i => i.buyerId === state.currentUser.id).length;

  if (role === 'producteur') {
    return [
      { id: 'dashboard', label: 'Tableau de bord', icon: 'grid' },
      { id: 'weather', label: 'Météo & alertes', icon: 'cloud-sun', badge: unreadAlerts().length, urgent: unreadAlerts().length > 0 },
      { id: 'products', label: 'Mes produits', icon: 'store', badge: ownCount },
      { id: 'market', label: 'Marché local', icon: 'search' },
      { id: 'voice', label: 'Ma voix', icon: 'mic', new: true },
      { id: 'orders', label: 'Demandes', icon: 'phone', badge: incoming },
    ];
  } else {
    return [
      { id: 'dashboard', label: 'Tableau de bord', icon: 'grid' },
      { id: 'market', label: 'Marché', icon: 'store', badge: state.listings.length },
      { id: 'prices', label: 'Prix du marché', icon: 'chart' },
      { id: 'saved', label: 'Favoris', icon: 'bookmark', badge: favCount },
      { id: 'orders', label: 'Commandes', icon: 'calendar', badge: myInquiries },
      { id: 'weather', label: 'Météo', icon: 'cloud-sun' },
    ];
  }
}

function renderAppShell(contentHtml) {
  const user = state.currentUser;
  const role = user.role;
  const nav = getNavConfig();
  const breadcrumbNames = {
    dashboard: 'Tableau de bord',
    products: 'Mes produits',
    market: role === 'producteur' ? 'Marché local' : 'Marché',
    weather: 'Météo & alertes',
    prices: 'Prix du marché',
    voice: 'Ma voix',
    saved: role === 'producteur' ? 'Brouillons' : 'Mes favoris',
    orders: role === 'producteur' ? 'Demandes reçues' : 'Mes commandes',
    profile: 'Mon profil',
  };

  const weatherUnread = role === 'producteur' ? unreadAlerts().length : 0;
  const notifCount = getTopNotifications().length;
  const topAlert = unreadAlerts().find((alert) => alert.tone === 'danger') || unreadAlerts().find((alert) => alert.tone === 'warning') || unreadAlerts()[0];
  const bottomNav = (() => {
    if (role === 'producteur') {
      return `
        <button class="bottom-nav-item ${state.view === 'dashboard' ? 'active' : ''}" data-view="dashboard"><span data-icon="grid"></span>Accueil</button>
        <button class="bottom-nav-item ${state.view === 'weather' ? 'active' : ''}" data-view="weather"><span data-icon="cloud-sun"></span>${weatherUnread ? `<i class="bottom-nav-badge">${weatherUnread}</i>` : ''}Météo</button>
        <button class="bottom-nav-center" data-open-post aria-label="Publier"><span data-icon="plus"></span></button>
        <button class="bottom-nav-item ${state.view === 'products' ? 'active' : ''}" data-view="products"><span data-icon="store"></span>Produits</button>
        <button class="bottom-nav-item ${state.view === 'profile' ? 'active' : ''}" data-view="profile"><span data-icon="user"></span>Profil</button>
      `;
    } else {
      return `
        <button class="bottom-nav-item vendeur ${state.view === 'dashboard' ? 'active' : ''}" data-view="dashboard"><span data-icon="grid"></span>Accueil</button>
        <button class="bottom-nav-item vendeur ${state.view === 'market' ? 'active' : ''}" data-view="market"><span data-icon="store"></span>Marché</button>
        <button class="bottom-nav-center vendeur" data-view="prices" aria-label="Prix"><span data-icon="chart"></span></button>
        <button class="bottom-nav-item vendeur ${state.view === 'saved' ? 'active' : ''}" data-view="saved"><span data-icon="bookmark"></span>Favoris</button>
        <button class="bottom-nav-item vendeur ${state.view === 'profile' ? 'active' : ''}" data-view="profile"><span data-icon="user"></span>Profil</button>
      `;
    }
  })();

  return `<div class="app-shell">
    <aside class="sidebar" id="sidebar">
      <div class="brand-lockup">
        <div class="brand-mark"><span></span><i></i></div>
        <div><div class="brand-name">jokko</div><div class="brand-tagline">la voix du terrain</div></div>
      </div>
      <div style="padding:0 12px 18px;display:flex;align-items:center;gap:8px">
        <span class="role-badge ${role}">${role === 'producteur' ? '🌱' : '🛒'} ${role === 'producteur' ? 'Producteur' : 'Vendeur'}</span>
        ${user.verified ? `<span class="tag" style="font-size:8px">${icon('check')} Vérifié</span>` : `<span class="tag orange" style="font-size:8px">Nouveau</span>`}
      </div>
      <div class="sidebar-label">Espace ${role === 'producteur' ? 'producteur' : 'vendeur'}</div>
      <nav class="main-nav">
        ${nav.map(item => `
          <button class="nav-item ${role === 'vendeur' ? 'vendeur-active' : ''} ${state.view === item.id ? 'active' : ''}" data-view="${item.id}">
            <span class="nav-icon" data-icon="${item.icon}"></span><span>${item.label}</span>
            ${item.badge ? `<span class="nav-badge ${item.urgent ? '' : role === 'vendeur' ? 'vendeur' : 'soft'}">${item.badge}</span>` : ''}
            ${item.new ? `<span class="nav-new">Nouveau</span>` : ''}
          </button>
        `).join('')}
      </nav>
      <div class="sidebar-label sidebar-label-secondary">Mon compte</div>
      <nav class="main-nav">
        <button class="nav-item ${state.view === 'profile' ? 'active' : ''}" data-view="profile"><span class="nav-icon" data-icon="user"></span><span>Mon profil</span></button>
        <button class="nav-item" data-action="logout"><span class="nav-icon" data-icon="log-out"></span><span>Déconnexion</span></button>
      </nav>
      <div class="offline-card ${state.online ? '' : 'is-offline'}">
        <div class="offline-card-top"><span class="status-dot"></span><span>${state.online ? 'Prêt hors ligne' : 'Hors ligne'}</span><span class="offline-check" data-icon="${state.online ? 'check' : 'cloud-sun'}"></span></div>
        <p>${state.online
          ? (role === 'producteur' ? 'Météo, alertes et annonces sont enregistrées sur cet appareil.' : 'Les prix et annonces restent accessibles sans réseau.')
          : 'Pas de réseau. La météo, les alertes et vos données restent disponibles.'}</p>
        <div class="sync-line"><span>Dernière synchro</span><strong>${timeAgo(state.lastSync)}</strong></div>
        <button class="sync-button" id="sync-button"><span data-icon="refresh"></span> ${state.online ? 'Synchroniser maintenant' : 'En attente de réseau'}</button>
      </div>
      <div class="sidebar-footer">
        <button class="help-link" id="help-button"><span data-icon="help"></span>Besoin d'aide ?</button>
        <div class="profile-mini" data-view="profile">
          <div class="avatar avatar-photo" style="background:${user.tone}">${user.initials}</div>
          <div class="profile-copy"><strong>${escapeHtml(user.name)}</strong><span>${escapeHtml(user.location)} · ${role}</span></div>
          <span data-icon="chevron-down" class="profile-chevron"></span>
        </div>
      </div>
    </aside>
    <div class="page-shell">
      <header class="topbar">
        <div class="topbar-left">
          <button class="mobile-menu" id="mobile-menu" aria-label="Ouvrir le menu"><span data-icon="menu"></span></button>
          <div class="breadcrumb"><span>Jokko</span><span class="breadcrumb-separator">/</span><strong id="breadcrumb-current">${breadcrumbNames[state.view] || 'Tableau de bord'}</strong></div>
        </div>
        <div class="topbar-actions">
          <div class="connection-chip ${state.online ? '' : 'offline'}"><span class="status-dot"></span><span class="connection-label">${state.online ? 'En ligne' : 'Hors ligne'}</span></div>
          ${state.deferredInstall ? `<button class="install-chip" id="install-app">Installer</button>` : ''}
          <label class="language-control" title="Langue des audios">
            <span data-icon="globe"></span>
            <span class="language-control-label">Langue audio</span>
            <select id="language-select" aria-label="Choisir la langue des audios">
              <option value="fr">Français</option><option value="wo">Wolof</option><option value="ff">Pulaar</option><option value="srr">Sérère</option>
            </select>
            <span data-icon="chevron-down"></span>
          </label>
          <div class="notif-wrap">
            <button class="icon-button notification-button ${notifCount ? 'has-unread' : ''}" id="notification-button" aria-label="Notifications">
              <span data-icon="bell"></span>
              ${notifCount ? `<b class="notif-count">${notifCount > 9 ? '9+' : notifCount}</b>` : ''}
            </button>
            ${state.notifOpen ? notificationPanelHtml() : ''}
          </div>
          <div class="avatar avatar-top" style="background:${user.tone}" data-view="profile">${user.initials}</div>
        </div>
      </header>
      ${role === 'producteur' && topAlert && state.view !== 'weather' ? `
        <button class="alert-banner ${topAlert.tone === 'danger' ? 'critical' : ''}" data-view="weather">
          <span class="alert-banner-icon">${icon(topAlert.tone === 'danger' ? 'alert' : topAlert.icon)}</span>
          <span class="alert-banner-copy">
            <strong>${unreadAlerts().length} nouvelle${unreadAlerts().length > 1 ? 's' : ''} alerte${unreadAlerts().length > 1 ? 's' : ''} météo</strong>
            <span>${escapeHtml(topAlert.title)} — ${escapeHtml(topAlert.place)}</span>
          </span>
          <span class="alert-banner-badge">Ouvrir</span>
        </button>
      ` : ''}
      <main id="main-content" tabindex="-1">${contentHtml}</main>
    </div>
    <nav class="bottom-nav" aria-label="Navigation mobile">${bottomNav}</nav>
  </div>`;
}

// --- Dashboard views ---
function dashboardProducteurView() {
  const user = state.currentUser;
  const myListings = state.listings.filter(l => l.ownerId === user.id);
  const myStock = myListings.reduce((sum, l) => sum + (l.stock || 0), 0);
  const incoming = incomingInquiries();
  const weather = getWeatherNow();
  const unread = unreadAlerts();
  const spotlight = relevantAlerts().slice(0, 3);
  const criticalCount = unread.filter((alert) => alert.tone === 'danger' || alert.tone === 'warning').length;
  return `<section class="view dashboard-view">
    <div class="view-head">
      <div><p class="eyebrow">${todayLabel()} · Espace producteur</p><h1>Bonjour ${escapeHtml(user.name.split(' ')[0])} <span>👋</span></h1><p class="subheading">Météo, alertes et vos récoltes d’abord — même sans réseau.</p></div>
      <div style="display:flex;gap:8px"><button class="outline-button" data-view="weather">${icon('cloud-sun')} Météo${unread.length ? ` (${unread.length})` : ''}</button><button class="primary-button" data-open-post>${icon('plus')} Publier</button></div>
    </div>
    <div class="weather-hero">
      <article class="weather-summary card weather-featured" data-view="weather">
        <div class="weather-top"><span>${icon('map-pin')} ${escapeHtml(weather.location)} & alentours</span><span>${state.online ? 'Météo locale' : 'Cache hors ligne'} · ${icon('calendar')} Aujourd’hui</span></div>
        <div class="weather-main"><div><div class="temperature">${weather.temp}<sup>°C</sup></div><p class="weather-description">${weather.desc}</p></div><div class="weather-icon">${weather.emoji}</div></div>
        <div class="weather-meta"><div>Vent<strong>${weather.wind}</strong></div><div>${weather.midLabel}<strong>${weather.midValue}</strong></div><div>Pluie<strong>${weather.rain}</strong></div></div>
        <div class="weather-cta">${unread.length ? `<span class="unread-pill">${unread.length} alerte${unread.length > 1 ? 's' : ''} non lue${unread.length > 1 ? 's' : ''}</span>` : `<span class="tag">Alertes à jour</span>`}<span class="text-button">Ouvrir météo & alertes ${icon('arrow-right')}</span></div>
      </article>
      <article class="card alerts-spotlight">
        <div class="card-header"><div><h2 class="card-title">Alertes à suivre</h2><p class="card-subtitle">${unread.length ? `${unread.length} nouvelle${unread.length > 1 ? 's' : ''} non ouverte${unread.length > 1 ? 's' : ''}` : 'Aucune nouvelle alerte'}</p></div><button class="text-button" data-view="weather">Tout voir ${icon('arrow-right')}</button></div>
        <div class="alert-list">
          ${spotlight.map((alert) => `
            <button class="alert-item ${alert.tone === 'danger' ? 'critical' : ''} ${isAlertRead(alert.id) ? '' : 'unread'}" data-view="weather">
              <div class="alert-marker ${alert.tone}">${icon(alert.icon)}</div>
              <div class="alert-copy">
                <div class="alert-title-line"><strong>${escapeHtml(alert.title)}</strong>${isAlertRead(alert.id) ? `<time>${alert.time}</time>` : `<span class="unread-dot">Nouveau</span>`}</div>
                <p>${escapeHtml(alert.text)}</p>
                <div class="alert-footer"><span class="alert-location">${icon('map-pin')} ${escapeHtml(alert.place)}</span><span class="tag ${alert.tagTone}">${alert.tag}</span></div>
              </div>
            </button>
          `).join('')}
        </div>
      </article>
    </div>
    <article class="briefing-card card briefing-solo">
      <div class="briefing-content"><p class="eyebrow">Le point du matin · 2 min</p><h2>Votre marché vous attend aujourd'hui.</h2><p class="briefing-copy">Météo agricole, prix du marché et demandes des vendeurs : votre résumé vocal est prêt dans votre langue.</p></div>
      <div class="briefing-bottom"><button class="audio-main" data-audio-key="producer-briefing" data-audio-listings="${myListings.length}" data-audio-stock="${myStock}" data-audio-incoming="${incoming.length}" data-audio-unread="${unread.length}" aria-label="Écouter le briefing en ${audioLanguageLabel()}"><span class="audio-play">${icon('play')}</span><span class="audio-label"><span>Briefing producteur</span><small>${audioLanguageLabel()} · 01:42</small></span><span class="waveform"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></button><div class="language-pills"><span>Wolof</span><span>Pulaar</span><span>Sérère</span></div></div>
    </article>
    <div class="stats-grid">
      <article class="stat-card"><div class="stat-icon">${icon('store')}</div><div class="stat-copy"><span>Mes annonces</span><strong>${myListings.length} actives</strong><small>${myStock} kg en stock</small></div></article>
      <article class="stat-card"><div class="stat-icon orange">${icon('phone')}</div><div class="stat-copy"><span>Demandes reçues</span><strong>${incoming.length} demandes</strong><small class="neutral">dont ${incoming.filter(i=>i.status==='pending').length} nouvelles</small></div></article>
      <article class="stat-card" data-view="weather" style="cursor:pointer"><div class="stat-icon blue">${icon('waves')}</div><div class="stat-copy"><span>Alertes non lues</span><strong>${unread.length} alerte${unread.length > 1 ? 's' : ''}</strong><small class="${unread.length ? '' : 'neutral'}">${unread.length ? `${criticalCount} importante${criticalCount > 1 ? 's' : ''}` : 'Tout est lu'}</small></div></article>
    </div>
    <div class="content-grid">
      <article class="card alert-card"><div class="card-header"><div><h2 class="card-title">Mes dernières demandes</h2><p class="card-subtitle">${incoming.length} acheteurs intéressés</p></div><button class="text-button" data-view="orders">Tout voir ${icon('arrow-right')}</button></div>
        <div class="alert-list">
          ${incoming.length === 0 ? `<div style="padding:20px;text-align:center;color:#9aa59d;font-size:11px">Aucune demande pour le moment. Publiez une annonce pour être visible.</div>` : incoming.slice(0,3).map(inq => {
            const listing = state.listings.find(l => l.id === inq.listingId);
            const buyer = state.users.find(u => u.id === inq.buyerId);
            return `<div class="alert-item"><div class="alert-marker">${icon('phone')}</div><div class="alert-copy"><div class="alert-title-line"><strong>${escapeHtml(buyer?.name || 'Acheteur')}</strong><time>${new Date(inq.date).toLocaleDateString()}</time></div><p>Intéressé par ${escapeHtml(listing?.name || 'votre produit')} — ${escapeHtml(listing?.quantity || '')}</p><div class="alert-footer"><span class="alert-location">${icon('map-pin')} ${escapeHtml(buyer?.location || '')}</span><span class="tag ${inq.status==='pending'?'orange':''}">${inq.status}</span></div></div></div>`;
          }).join('')}
        </div>
      </article>
      <article class="card price-card"><div class="card-header"><div><h2 class="card-title">Mes produits en ligne</h2><p class="card-subtitle">${myListings.length} annonces publiées</p></div><button class="text-button" data-view="products">Gérer ${icon('arrow-right')}</button></div>
        <div style="padding:0 21px 16px;display:grid;gap:10px">
          ${myListings.slice(0,2).map(item => `
            <div class="dashboard-product-row" data-product-id="${item.id}" role="button" tabindex="0" aria-label="Voir le détail de ${escapeHtml(item.name)}">
              ${productVisual(item, 'dashboard-product-image')}
              <div style="flex:1"><strong style="font-size:11px;color:#3c4c43">${escapeHtml(item.name)}</strong><div style="font-size:9px;color:#9aa59d">${escapeHtml(item.quantity)} · ${escapeHtml(item.price)} ${escapeHtml(item.unit)}</div></div>
              <span class="tag">${item.stock} kg</span>
            </div>
          `).join('') || `<div style="padding:20px;text-align:center;color:#9aa59d;font-size:11px">Aucun produit. Cliquez sur Publier.</div>`}
          <button class="primary-button" style="width:100%;margin-top:4px" data-open-post>${icon('plus')} Publier une nouvelle récolte</button>
        </div>
      </article>
    </div>
    <div class="section-heading"><div><h2>Marché local autour de vous</h2><p>Ce que vendent les autres producteurs.</p></div><button class="text-button" data-view="market">Voir le marché ${icon('arrow-right')}</button></div>
    <div class="marketplace-grid">${state.listings.filter(l=>l.ownerId!==user.id).slice(0,3).map(i=>marketCard(i)).join('')}</div>
  </section>`;
}

function dashboardVendeurView() {
  const user = state.currentUser;
  const favs = getCurrentFavorites();
  const myInquiries = state.inquiries.filter(i=>i.buyerId===user.id);
  return `<section class="view dashboard-view">
    <div class="view-head">
      <div><p class="eyebrow vendeur">Espace vendeur · Achats directs</p><h1>Bonjour ${escapeHtml(user.name.split(' ')[0])} <span>🛒</span></h1><p class="subheading">Trouvez les meilleurs produits directement chez les producteurs, comparez les prix et commandez sans intermédiaire.</p></div>
      <button class="primary-button orange-button" data-view="market">${icon('search')} Parcourir le marché</button>
    </div>
    <div class="hero-grid">
      <article class="briefing-card card vendeur-theme">
        <div class="briefing-content"><p class="eyebrow">Opportunités du jour</p><h2>12 annonces fraîches près de Dakar.</h2><p class="briefing-copy">Oignons, tomates, sardines et thiof débarqués ce matin. Les prix sont en hausse de 8% sur l'oignon, c'est le moment de stocker.</p></div>
        <div class="briefing-bottom"><button class="audio-main" data-audio-key="buyer-briefing" aria-label="Écouter le briefing en ${audioLanguageLabel()}"><span class="audio-play orange">${icon('play')}</span><span class="audio-label"><span>Briefing acheteur</span><small>${audioLanguageLabel()} · 01:18</small></span><span class="waveform"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></button><div class="language-pills"><span>Wolof</span><span>Pulaar</span></div></div>
      </article>
      <article class="weather-summary card" style="background:#fff7e8">
        <div class="weather-top"><span>${icon('map-pin')} Dakar & alentours</span><span style="background:var(--orange-pale);color:#8a5a22;padding:3px 7px;border-radius:5px;font-size:8px">Marché actif</span></div>
        <div class="weather-main"><div><div class="temperature" style="font-size:32px">12<span style="font-size:14px;color:#8a5a22"> annonces</span></div><p class="weather-description">dont 4 débarquées ce matin</p></div><div class="weather-icon">🐟</div></div>
        <div class="weather-meta"><div>Producteurs<strong>${state.users.filter(u=>u.role==='producteur').length} vérifiés</strong></div><div>Favoris<strong>${favs.length} suivis</strong></div><div>Commandes<strong>${myInquiries.length} en cours</strong></div></div>
      </article>
    </div>
    <div class="stats-grid">
      <article class="stat-card"><div class="stat-icon orange">${icon('store')}</div><div class="stat-copy"><span>Annonces disponibles</span><strong>${state.listings.length} produits</strong><small>dans votre zone</small></div></article>
      <article class="stat-card"><div class="stat-icon lime">${icon('chart')}</div><div class="stat-copy"><span>Prix moyen oignon</span><strong>450 F / kg</strong><small>+8% cette semaine</small></div></article>
      <article class="stat-card"><div class="stat-icon blue">${icon('bookmark')}</div><div class="stat-copy"><span>Mes favoris</span><strong>${favs.length} produits</strong><small class="neutral">suivi des prix</small></div></article>
    </div>
    <div class="content-grid">
      <article class="card alert-card"><div class="card-header"><div><h2 class="card-title">Bonnes affaires du jour</h2><p class="card-subtitle">Prix en baisse ou stock important</p></div><button class="text-button orange" data-view="market">Voir tout ${icon('arrow-right')}</button></div>
        <div class="alert-list">
          <div class="alert-item"><div class="alert-marker warning">${icon('chart')}</div><div class="alert-copy"><div class="alert-title-line"><strong>Oignons violets en abondance</strong><time>Il y a 24 min</time></div><p>800 kg disponibles à Sangalkam. Prix négociable au-delà de 200 kg.</p><div class="alert-footer"><span class="alert-location">${icon('map-pin')} Sangalkam · 450 F/kg</span><button class="mini-audio" data-interest="1">${icon('phone')} Contacter</button></div></div></div>
          <div class="alert-item"><div class="alert-marker">${icon('waves')}</div><div class="alert-copy"><div class="alert-title-line"><strong>Sardines débarquées ce matin</strong><time>Il y a 1 h</time></div><p>120 kg de sardines fraîches à Mbour. Idéal pour mareyage.</p><div class="alert-footer"><span class="alert-location">${icon('map-pin')} Mbour · 1 800 F/kg</span><button class="mini-audio" data-interest="3">${icon('phone')} Commander</button></div></div></div>
        </div>
      </article>
      <article class="card price-card"><div class="card-header"><div><h2 class="card-title">Prix du marché</h2><p class="card-subtitle">Mis à jour il y a 8 minutes</p></div><button class="text-button orange" data-view="prices">Voir les prix ${icon('arrow-right')}</button></div>
        <div class="price-tabs"><button class="price-tab active">Agriculture</button><button class="price-tab">Pêche</button></div>
        <table class="price-table"><thead><tr><th>Produit</th><th>Prix moyen</th><th>Évolution</th></tr></thead><tbody>
          <tr><td><div class="product-cell"><span class="product-emoji">🧅</span><div><strong>Oignon violet</strong><small>Sangalkam</small></div></div></td><td class="price-value">450 F/kg</td><td><span class="trend up">${icon('arrow-right')} +8%</span></td></tr>
          <tr><td><div class="product-cell"><span class="product-emoji red">🍅</span><div><strong>Tomate</strong><small>Notto Gouye Diama</small></div></div></td><td class="price-value">600 F/kg</td><td><span class="trend down">${icon('arrow-right')} -4%</span></td></tr>
          <tr><td><div class="product-cell"><span class="product-emoji fish">🐟</span><div><strong>Sardine</strong><small>Mbour</small></div></div></td><td class="price-value">1 800 F/kg</td><td><span class="trend up">${icon('arrow-right')} +12%</span></td></tr>
        </tbody></table>
      </article>
    </div>
    <div class="section-heading"><div><h2>À vendre près de chez vous</h2><p>Des producteurs vérifiés, sans intermédiaire.</p></div><button class="text-button orange" data-view="market">Voir toutes les annonces ${icon('arrow-right')}</button></div>
    <div class="marketplace-grid">${state.listings.slice(0,3).map(marketCard).join('')}</div>
  </section>`;
}

function dashboardView() {
  if (!state.currentUser) return '';
  return state.currentUser.role === 'producteur' ? dashboardProducteurView() : dashboardVendeurView();
}

function productsView() {
  const user = state.currentUser;
  if (user.role !== 'producteur') {
    return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow">Accès producteur</p><h1>Cette section est réservée aux producteurs</h1><p class="subheading">Connectez-vous en tant que producteur pour gérer vos produits.</p></div></div></section>`;
  }
  const myListings = state.listings.filter(l => l.ownerId === user.id);
  const totalStock = myListings.reduce((s,l)=>s+(l.stock||0),0);
  return `<section class="view inner-view">
    <div class="view-head"><div><p class="eyebrow">Mon stock · ${myListings.length} annonces</p><h1>Mes produits</h1><p class="subheading">Gérez vos annonces, mettez à jour votre stock et voyez qui est intéressé.</p></div><button class="primary-button" data-open-post>${icon('plus')} Nouvelle annonce</button></div>
    <div class="stats-grid" style="margin-top:0;margin-bottom:18px">
      <article class="stat-card"><div class="stat-icon">${icon('store')}</div><div class="stat-copy"><span>Annonces actives</span><strong>${myListings.length}</strong><small>${totalStock} kg total</small></div></article>
      <article class="stat-card"><div class="stat-icon orange">${icon('package')}</div><div class="stat-copy"><span>Stock total</span><strong>${totalStock} kg</strong><small>tous produits</small></div></article>
      <article class="stat-card"><div class="stat-icon blue">${icon('phone')}</div><div class="stat-copy"><span>Demandes</span><strong>${state.inquiries.filter(i=>{const l=state.listings.find(x=>x.id===i.listingId);return l&&l.ownerId===user.id}).length}</strong><small class="neutral">acheteurs intéressés</small></div></article>
    </div>
    ${myListings.length === 0 ? `<div class="card saved-empty"><div class="empty-icon">${icon('store')}</div><h3>Aucun produit pour le moment</h3><p>Publiez votre première récolte ou pêche pour être visible par les vendeurs de votre zone.</p><button class="primary-button" data-open-post>${icon('plus')} Publier mon premier produit</button></div>` : `
      <div class="market-view-grid">${myListings.map(item => `
        <article class="market-card" data-product-id="${item.id}" role="button" tabindex="0" aria-label="Voir le détail de ${escapeHtml(item.name)}">
          <div class="market-card-top">${productVisual(item)}<span class="condition-label">${escapeHtml(item.condition)}</span></div>
          <h3>${escapeHtml(item.name)}</h3>
          <div class="market-origin">${icon('map-pin')}${escapeHtml(item.location)}</div>
          <div style="margin-top:10px;display:flex;gap:6px"><span class="tag">${item.stock} kg en stock</span><span class="tag orange">${escapeHtml(item.price)} ${escapeHtml(item.unit)}</span></div>
          <div class="my-product-actions"><button class="edit-btn" data-edit="${item.id}">${icon('edit')} Modifier</button><button class="delete-btn" data-delete="${item.id}">${icon('trash')} Supprimer</button></div>
        </article>
      `).join('')}</div>
    `}
  </section>`;
}

function marketView() {
  const role = state.currentUser.role;
  const visible = state.listings.filter((item) => {
    if (state.marketFilter !== 'all' && item.type !== state.marketFilter) return false;
    if (!state.search) return true;
    return `${item.name} ${item.location} ${item.seller}`.toLowerCase().includes(state.search);
  });
  return `<section class="view inner-view market-page-view">
    <div class="view-head"><div><p class="eyebrow">${role === 'producteur' ? 'Veille concurrentielle' : 'Jokko direct · Sans intermédiaire'}</p><h1>${role === 'producteur' ? 'Marché local' : 'Annonces locales'}</h1><p class="subheading">${role === 'producteur' ? 'Voyez ce que proposent les autres producteurs pour ajuster vos prix.' : 'Trouvez les récoltes et produits de la mer disponibles autour de vous, puis contactez directement le producteur.'}</p></div>${role === 'producteur' ? `<button class="primary-button" data-open-post>${icon('plus')} Publier</button>` : ''}</div>
    <div class="filter-bar"><div class="search-box">${icon('search')}<input id="market-search" type="search" value="${escapeHtml(state.search)}" placeholder="Produit, lieu ou producteur…" aria-label="Rechercher une annonce" /></div><button class="filter-pill ${state.marketFilter === 'all' ? 'active' : ''} ${role === 'vendeur' ? 'vendeur' : ''}" data-market-filter="all">Tout</button><button class="filter-pill ${state.marketFilter === 'agriculture' ? 'active' : ''} ${role === 'vendeur' ? 'vendeur' : ''}" data-market-filter="agriculture">Agriculture</button><button class="filter-pill ${state.marketFilter === 'peche' ? 'active' : ''} ${role === 'vendeur' ? 'vendeur' : ''}" data-market-filter="peche">Pêche</button></div>
    <div class="market-section-label">${visible.length} annonces disponibles</div>
    <div class="market-view-grid" id="market-grid">${visible.map(i=>marketCard(i)).join('')}${visible.length === 0 ? '<div class="market-empty visible">Aucune annonce ne correspond à votre recherche.</div>' : ''}</div>
    <div class="card" style="display:flex;align-items:center;gap:16px;margin-top:28px;padding:17px 20px;background:${role === 'vendeur' ? '#fff7e8' : '#f0f8ed'};border-color:${role === 'vendeur' ? '#f0d7b3' : '#dceade'};box-shadow:none"><div class="stat-icon ${role === 'vendeur' ? 'orange' : ''}" style="width:35px;height:35px;flex-basis:35px">${icon('shield')}</div><div style="flex:1"><strong style="display:block;margin-bottom:4px;color:#4c6652;font-size:11px">Un échange direct et plus juste</strong><span style="color:#819787;font-size:10px">Les coordonnées ne sont partagées qu’après votre accord. Jokko ne prend aucune commission.</span></div>${icon('arrow-right')}</div>
  </section>`;
}

function weatherView() {
  const weather = getWeatherNow();
  const alerts = relevantAlerts();
  return `<section class="view inner-view weather-view"><div class="view-head"><div><p class="eyebrow">Informations officielles · ${state.online ? 'En ligne' : 'Hors ligne'}</p><h1>Météo & alertes</h1><p class="subheading">Messages courts, utiles, disponibles à l’écoute. Conservés sur votre téléphone même sans réseau.</p></div><div class="header-actions"><button class="outline-button weather-language-status" id="weather-language" type="button" title="Changer la langue des audios">${icon('globe')} Audio : ${audioLanguageLabel()}</button></div></div>
    ${state.online ? '' : `<div class="weather-offline-note">${icon('cloud-sun')} Hors ligne — vous consultez la dernière météo enregistrée (${timeAgo(state.lastSync)}).</div>`}
    <div class="weather-now">
      <article class="weather-summary card">
        <div class="weather-top"><span>${icon('map-pin')} ${escapeHtml(weather.location)} & alentours</span><span>${icon('calendar')} Aujourd’hui</span></div>
        <div class="weather-main"><div><div class="temperature">${weather.temp}<sup>°C</sup></div><p class="weather-description">${weather.desc}</p></div><div class="weather-icon">${weather.emoji}</div></div>
        <div class="weather-meta"><div>Vent<strong>${weather.wind}</strong></div><div>${weather.midLabel}<strong>${weather.midValue}</strong></div><div>Pluie<strong>${weather.rain}</strong></div></div>
      </article>
      <article class="card page-card" style="margin:0">
        <div class="card-header"><div><h2 class="card-title">Prévisions à 5 jours</h2><p class="card-subtitle">${escapeHtml(weather.location)} · cache local</p></div><span class="tag">${state.online ? 'Actualisé' : 'Hors ligne'}</span></div>
        <div class="forecast-row" style="padding-bottom:18px">${weatherForecast.map((day) => `<div class="forecast-day ${day.today ? 'today' : ''}"><span>${day.day}</span><em>${day.emoji}</em><strong>${day.temp}</strong><small>${day.label}</small></div>`).join('')}</div>
      </article>
    </div>
    <div class="card page-card"><div class="card-header"><div><h2 class="card-title">Alertes récentes</h2><p class="card-subtitle">Source : ANACIM · ${alerts.length} messages conservés hors ligne</p></div><div class="header-icon">${icon('cloud-sun')}</div></div><div class="large-alert-list">${alerts.map((alert) => `<article class="large-alert ${alert.tone === 'danger' ? 'critical' : ''}"><div class="alert-marker ${alert.tone}">${icon(alert.icon)}</div><div class="large-alert-content"><h3>${alert.title}</h3><p>${alert.text}</p><div class="alert-meta-row"><span>${icon('map-pin')} ${alert.place}</span><span class="tag ${alert.tagTone}">${alert.tag}</span></div><div style="display:flex;align-items:center;justify-content:space-between;margin-top:11px"><span style="color:#a2ada5;font-size:9px">${alert.time}</span><button class="mini-audio" data-audio-key="weather-alert" data-audio-alert="${alert.id}" aria-label="Écouter cette alerte en ${audioLanguageLabel()}">${icon('play')}<span>Écouter</span></button></div></div></article>`).join('')}</div></div>
  </section>`;
}

const priceData = [
  ['Oignon violet', '🧅', 'Sangalkam', '450 F/kg', '+8%', 'up', 'agriculture'],
  ['Tomate fraîche', '🍅', 'Notto Gouye Diama', '600 F/kg', '-4%', 'down', 'agriculture'],
  ['Carotte', '🥕', 'Louga', '500 F/kg', 'stable', 'flat', 'agriculture'],
  ['Pomme de terre', '🥔', 'Potou', '375 F/kg', '+5%', 'up', 'agriculture'],
  ['Sardine', '🐟', 'Mbour', '1 800 F/kg', '+12%', 'up', 'peche'],
  ['Thiof', '🐠', 'Joal-Fadiouth', '3 500 F/kg', '-2%', 'down', 'peche'],
  ['Crevette', '🦐', 'Saint-Louis', '4 200 F/kg', '+6%', 'up', 'peche'],
  ['Mulet', '🐟', 'Kayar', '2 400 F/kg', 'stable', 'flat', 'peche']
];
function priceTableRows() {
  const filtered = priceData.filter((row) => state.priceFilter === 'all' || row[6] === state.priceFilter);
  return filtered.map((row) => `<tr><td><div class="product-cell"><span class="product-emoji ${row[6] === 'peche' ? 'fish' : row[1] === '🍅' ? 'red' : row[1] === '🥕' ? 'orange' : ''}">${row[1]}</span><div><strong>${row[0]}</strong><small>${row[2]}</small></div></div></td><td class="price-value">${row[3]}</td><td><span class="trend ${row[5]}">${icon('arrow-right')} ${row[4]}</span></td><td><button class="mini-audio" data-audio-key="price" data-audio-product="${escapeHtml(row[0])}" data-audio-price-value="${escapeHtml(row[3])}" data-audio-place="${escapeHtml(row[2])}" aria-label="Écouter le prix en ${audioLanguageLabel()}">${icon('play')}<span>Audio</span></button></td></tr>`).join('');
}
function pricesView() {
  const role = state.currentUser.role;
  return `<section class="view inner-view prices-view"><div class="view-head"><div><p class="eyebrow ${role === 'vendeur' ? 'vendeur' : ''}">Transparence · Accès libre</p><h1>Prix du marché</h1><p class="subheading">Comparez les prix près de chez vous avant de vendre ou d’acheter. Écoutez chaque prix dans votre langue.</p></div><button class="outline-button" id="price-audio" data-audio-key="price-summary" aria-label="Écouter les prix en ${audioLanguageLabel()}">${icon('play')} Écouter les prix · ${audioLanguageLabel()}</button></div>
    <div class="filter-bar"><div class="search-box">${icon('search')}<input id="price-search" type="search" placeholder="Rechercher un produit ou un marché…" aria-label="Rechercher un produit ou un marché" /></div><button class="filter-pill ${state.priceFilter === 'all' ? 'active' : ''} ${role === 'vendeur' ? 'vendeur' : ''}" data-price-filter="all">Tous</button><button class="filter-pill ${state.priceFilter === 'agriculture' ? 'active' : ''} ${role === 'vendeur' ? 'vendeur' : ''}" data-price-filter="agriculture">Agriculture</button><button class="filter-pill ${state.priceFilter === 'peche' ? 'active' : ''} ${role === 'vendeur' ? 'vendeur' : ''}" data-price-filter="peche">Pêche</button><select class="select-box" aria-label="Choisir une zone"><option>Dakar & alentours</option><option>Thiès</option><option>Saint-Louis</option><option>Petite Côte</option></select></div>
    <div class="card page-card"><div class="card-header"><div><h2 class="card-title">Prix moyens aujourd’hui</h2><p class="card-subtitle">Relevés communautaires · ${priceData.length} produits suivis</p></div><div class="header-icon ${role === 'vendeur' ? 'orange' : ''}">${icon('chart')}</div></div><div style="overflow-x:auto"><table class="price-table full-price-table"><thead><tr><th>Produit</th><th>Prix moyen</th><th>Évolution / 7 jours</th><th>Audio</th></tr></thead><tbody id="price-table-body">${priceTableRows()}</tbody></table></div></div>
  </section>`;
}

function voiceView() {
  if (state.currentUser.role !== 'producteur') {
    return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow">Réservé producteurs</p><h1>Ma voix</h1><p class="subheading">La publication vocale est réservée aux producteurs et pêcheurs pour publier sans écrire.</p></div></div><div class="card saved-empty"><div class="empty-icon">${icon('mic')}</div><h3>Espace producteur uniquement</h3><p>Cette fonctionnalité permet aux producteurs de publier une annonce à la voix en Wolof, Pulaar ou Sérère.</p><button class="outline-button" data-view="market">Aller au marché ${icon('arrow-right')}</button></div></section>`;
  }
  return `<section class="view inner-view voice-page-view"><div class="view-head"><div><p class="eyebrow">ASR · votre parole devient une annonce</p><h1>Ma voix, mon activité</h1><p class="subheading">Parlez naturellement. Jokko transforme votre message en une annonce claire, même sans savoir écrire.</p></div><span class="tag">Mode hors ligne disponible</span></div>
    <div class="voice-grid"><article class="voice-intro card"><p class="eyebrow">Simple comme un appel</p><h2>Vous parlez. Votre marché vous entend.</h2><p>Enregistrez votre disponibilité en wolof, pulaar ou sérère. Votre annonce est transcrite et peut être publiée dès que le réseau revient.</p><div class="voice-languages"><span class="voice-language">Wolof · Wolof</span><span class="voice-language">Pulaar · Fulfulde</span><span class="voice-language">Sérère · Seereer</span></div><div class="voice-visual"><div class="voice-orb">${icon('mic')}</div></div></article>
    <article class="voice-form-card card"><h3>Créer une annonce vocale</h3><p>Commencez par une note vocale. Les champs seront préremplis pour vous.</p><div class="record-box"><button class="record-button" id="record-button" aria-label="Enregistrer une note vocale">${icon('mic')}</button><div class="record-copy"><strong id="record-title">Appuyez pour parler</strong><span id="record-status">Exemple : « J’ai des tomates à vendre… »</span></div><div class="recording-dots"><i></i><i></i><i></i></div></div><div class="form-divider"></div><form id="voice-form"><div class="field-grid"><div class="field"><label for="voice-product">Produit</label><input id="voice-product" name="product" placeholder="Ex. tomates fraîches" /></div><div class="field"><label for="voice-quantity">Quantité</label><input id="voice-quantity" name="quantity" placeholder="Ex. 200 kg" /></div><div class="field"><label for="voice-price">Prix souhaité</label><input id="voice-price" name="price" placeholder="Ex. 600 F / kg" /></div><div class="field"><label for="voice-zone">Lieu</label><select id="voice-zone" name="zone"><option>Choisir un lieu</option><option>Dakar & alentours</option><option>Thiès</option><option>Petite Côte</option><option>Saint-Louis</option></select></div></div><button class="primary-button voice-submit" type="submit">${icon('upload')} Enregistrer comme brouillon</button></form></article></div>
  </section>`;
}

function savedView() {
  const role = state.currentUser.role;
  if (role === 'producteur') {
    return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow">Votre activité</p><h1>Brouillons & archives</h1><p class="subheading">Vos annonces non publiées et anciennes récoltes.</p></div><button class="primary-button" data-open-post>${icon('plus')} Nouvelle annonce</button></div><div class="card saved-empty"><div class="empty-icon">${icon('bookmark')}</div><h3>Pas de brouillons</h3><p>Vos annonces vocales en attente de réseau apparaîtront ici.</p></div></section>`;
  }
  const favs = getCurrentFavorites();
  const favListings = state.listings.filter(l => favs.includes(l.id));
  return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow vendeur">Votre sélection</p><h1>Mes favoris</h1><p class="subheading">Retrouvez les annonces et les prix que vous souhaitez suivre. ${favs.length} produits suivis.</p></div></div>
    ${favListings.length === 0 ? `<div class="card saved-empty"><div class="empty-icon orange">${icon('bookmark')}</div><h3>Votre liste est encore vide</h3><p>Appuyez sur le cœur d’une annonce pour la retrouver ici, même sans connexion.</p><button class="outline-button" data-view="market">Découvrir les annonces ${icon('arrow-right')}</button></div>` : `<div class="market-view-grid">${favListings.map(i=>marketCard(i)).join('')}</div>`}
  </section>`;
}

function ordersView() {
  const role = state.currentUser.role;
  if (role === 'producteur') {
    const incoming = state.inquiries.filter(i => {
      const listing = state.listings.find(l => l.id === i.listingId);
      return listing && listing.ownerId === state.currentUser.id;
    }).sort((a,b)=>b.date-a.date);
    return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow">Demandes reçues · ${incoming.length}</p><h1>Demandes d'achat</h1><p class="subheading">Les vendeurs intéressés par vos produits vous contactent directement.</p></div></div>
      ${incoming.length === 0 ? `<div class="card saved-empty"><div class="empty-icon">${icon('phone')}</div><h3>Aucune demande pour le moment</h3><p>Publiez des annonces pour recevoir des demandes de vendeurs.</p><button class="primary-button" data-open-post>${icon('plus')} Publier une annonce</button></div>` : `
        <div class="orders-list">${incoming.map(inq => {
          const listing = state.listings.find(l=>l.id===inq.listingId);
          const buyer = state.users.find(u=>u.id===inq.buyerId);
          return `<div class="order-card"><div class="order-avatar" style="background:${buyer?.tone || '#ccc'}">${buyer?.initials || '?'}</div><div class="order-content"><strong>${escapeHtml(buyer?.name || 'Acheteur')} veut ${escapeHtml(listing?.name || 'votre produit')}</strong><span>${escapeHtml(listing?.quantity || '')} · ${escapeHtml(listing?.location || '')} · ${new Date(inq.date).toLocaleString()}</span><div class="order-meta"><span class="order-status ${inq.status}">${inq.status}</span><span style="font-size:9px;color:#9aa59d">${escapeHtml(buyer?.phone || '')}</span></div></div><button class="primary-button" style="align-self:center" data-interest-contact="${buyer?.id}" data-listing="${listing?.id}">${icon('phone')} Rappeler</button></div>`;
        }).join('')}</div>
      `}
    </section>`;
  } else {
    const myInquiries = state.inquiries.filter(i=>i.buyerId===state.currentUser.id).sort((a,b)=>b.date-a.date);
    return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow vendeur">Mes achats · ${myInquiries.length}</p><h1>Mes commandes</h1><p class="subheading">Suivez vos demandes envoyées aux producteurs.</p></div><button class="primary-button orange-button" data-view="market">${icon('store')} Retour au marché</button></div>
      ${myInquiries.length === 0 ? `<div class="card saved-empty"><div class="empty-icon orange">${icon('calendar')}</div><h3>Aucune commande</h3><p>Parcourez le marché et contactez un producteur pour démarrer.</p><button class="primary-button orange-button" data-view="market">Découvrir les annonces ${icon('arrow-right')}</button></div>` : `
        <div class="orders-list">${myInquiries.map(inq => {
          const listing = state.listings.find(l=>l.id===inq.listingId);
          const seller = state.users.find(u=>u.id===listing?.ownerId);
          return `<div class="order-card"><div class="order-avatar" style="background:${seller?.tone || '#ccc'}">${seller?.initials || '?'}</div><div class="order-content"><strong>${escapeHtml(listing?.name || 'Produit')} · ${escapeHtml(listing?.price || '')} ${escapeHtml(listing?.unit || '')}</strong><span>${escapeHtml(seller?.name || '')} · ${escapeHtml(listing?.location || '')} · ${new Date(inq.date).toLocaleString()}</span><div class="order-meta"><span class="order-status ${inq.status}">${inq.status}</span><span style="font-size:9px;color:#9aa59d">${inq.status === 'pending' ? 'En attente de réponse' : 'Contact établi'}</span></div></div><a href="tel:${seller?.phone}" class="primary-button orange-button" style="align-self:center;text-decoration:none">${icon('phone')} Appeler</a></div>`;
        }).join('')}</div>
      `}
    </section>`;
  }
}

function profileView() {
  const user = state.currentUser;
  const role = user.role;
  const myListings = state.listings.filter(l=>l.ownerId===user.id);
  const favCount = getCurrentFavorites().length;
  const inquiriesCount = role === 'producteur'
    ? state.inquiries.filter(i=>{const l=state.listings.find(x=>x.id===i.listingId);return l&&l.ownerId===user.id}).length
    : state.inquiries.filter(i=>i.buyerId===user.id).length;
  return `<section class="view inner-view">
    <div class="view-head"><div><p class="eyebrow ${role === 'vendeur' ? 'vendeur' : ''}">Mon compte · ${role}</p><h1>Mon profil</h1><p class="subheading">Gérez vos informations et votre espace ${role === 'producteur' ? 'producteur' : 'vendeur'}.</p></div></div>
    <div class="profile-view-grid">
      <div class="card profile-card">
        <div class="profile-avatar-large" style="background:${user.tone}">${user.initials}</div>
        <h2>${escapeHtml(user.name)}</h2>
        <p>${escapeHtml(user.location)} · ${role === 'producteur' ? (user.type === 'peche' ? 'Pêcheur' : user.type === 'agriculture' ? 'Agriculteur' : 'Producteur mixte') : user.commerce}</p>
        <div style="margin-top:10px"><span class="role-badge ${role}">${role === 'producteur' ? '🌱 Producteur' : '🛒 Vendeur'}</span> ${user.verified ? `<span class="tag">✓ Vérifié</span>` : `<span class="tag orange">En attente vérif</span>`}</div>
        <div class="profile-stats">
          <div class="profile-stat"><span>${role === 'producteur' ? 'Annonces' : 'Favoris'}</span><strong>${role === 'producteur' ? myListings.length : favCount}</strong></div>
          <div class="profile-stat"><span>${role === 'producteur' ? 'Demandes' : 'Commandes'}</span><strong>${inquiriesCount}</strong></div>
          <div class="profile-stat"><span>Téléphone</span><strong style="font-size:11px">${escapeHtml(user.phone)}</strong></div>
          <div class="profile-stat"><span>Membre depuis</span><strong style="font-size:11px">Sept 2026</strong></div>
        </div>
        <div class="profile-actions">
          <button class="outline-button" id="install-app">${icon('upload')} Installer sur Android</button>
          <button class="outline-button" id="edit-profile-btn">${icon('edit')} Modifier profil</button>
          <button class="logout-btn" data-action="logout">${icon('log-out')} Déconnexion</button>
        </div>
      </div>
      <div class="card profile-details-card">
        <h3>Informations détaillées</h3>
        <div class="detail-row"><span>Nom complet</span><span>${escapeHtml(user.name)}</span></div>
        <div class="detail-row"><span>Rôle</span><span>${role === 'producteur' ? 'Producteur / Pêcheur' : 'Vendeur / Acheteur'}</span></div>
        <div class="detail-row"><span>Activité</span><span>${escapeHtml(role === 'producteur' ? user.type : user.commerce)}</span></div>
        <div class="detail-row"><span>Localité</span><span>${escapeHtml(user.location)}</span></div>
        <div class="detail-row"><span>Téléphone</span><span>${escapeHtml(user.phone)}</span></div>
        <div class="detail-row"><span>Langue préférée</span><span>${{fr:'Français',wo:'Wolof',ff:'Pulaar',srr:'Sérère'}[state.language] || 'Français'}</span></div>
        <div class="detail-row"><span>Mode hors ligne</span><span>Activé ✓</span></div>
        <div style="margin-top:20px;padding:14px;border-radius:10px;background:${role === 'producteur' ? '#f0f8ed' : '#fff7e8'};border:1px solid ${role === 'producteur' ? '#dceade' : '#f0d7b3'}">
          <strong style="display:block;font-size:11px;color:#4c6652;margin-bottom:6px">${role === 'producteur' ? '🌱 Espace producteur' : '🛒 Espace vendeur'}</strong>
          <p style="margin:0;color:#6b7f71;font-size:10px;line-height:1.5">${role === 'producteur' ? 'Vous publiez vos récoltes et pêche. Les vendeurs vous contactent directement. Jokko ne prend aucune commission.' : 'Vous achetez directement aux producteurs sans intermédiaire. Comparez les prix, contactez et négociez.'}</p>
        </div>
        <div style="margin-top:18px;display:flex;gap:8px">
          <button class="outline-button" data-action="logout" style="flex:1">${icon('log-out')} Déconnexion</button>
          <button class="primary-button ${role === 'vendeur' ? 'orange-button' : ''}" style="flex:1" data-view="${role === 'producteur' ? 'products' : 'market'}">${icon(role === 'producteur' ? 'store' : 'search')} ${role === 'producteur' ? 'Mes produits' : 'Marché'}</button>
        </div>
      </div>
    </div>
  </section>`;
}

// --- Product photos and modals ---
function photoPreviewMarkup(photos) {
  if (!photos.length) return `<div class="photo-preview-empty">Aucune photo sélectionnée</div>`;
  return photos.map((photo, index) => `<div class="photo-preview-item"><img src="${escapeHtml(photo)}" alt="Aperçu de la photo ${index + 1}" /><span>${index + 1}</span></div>`).join('');
}
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error('Impossible de lire cette photo.'));
    reader.readAsDataURL(file);
  });
}
function compressPhoto(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const maxSide = 1400;
      const scale = Math.min(1, maxSide / Math.max(image.naturalWidth || image.width, image.naturalHeight || image.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round((image.naturalWidth || image.width) * scale));
      canvas.height = Math.max(1, Math.round((image.naturalHeight || image.height) * scale));
      const context = canvas.getContext('2d');
      if (!context) {
        reject(new Error('Votre navigateur ne peut pas traiter cette photo.'));
        return;
      }
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL('image/jpeg', .82));
    };
    image.onerror = () => reject(new Error('Cette photo ne peut pas être traitée.'));
    image.src = dataUrl;
  });
}
async function prepareProductPhotos(files) {
  if (files.length > 4) throw new Error('Vous pouvez ajouter 4 photos maximum.');
  if (files.some((file) => !file.type.startsWith('image/'))) throw new Error('Seuls les fichiers image sont acceptés.');
  const dataUrls = await Promise.all(files.map(fileToDataUrl));
  return Promise.all(dataUrls.map(compressPhoto));
}
function updatePostPhotoPreview(photos) {
  const preview = document.querySelector('#post-photo-preview');
  if (!preview) return;
  preview.innerHTML = photoPreviewMarkup(photos);
  preview.classList.toggle('has-photos', photos.length > 0);
  const count = document.querySelector('#post-photo-count');
  if (count) count.textContent = `${photos.length}/4 photo${photos.length > 1 ? 's' : ''}`;
}

function openProductDetail(item) {
  const photos = getProductPhotos(item);
  const isOwner = state.currentUser && item.ownerId === state.currentUser.id;
  const typeLabel = item.type === 'peche' ? 'Pêche' : item.type === 'agriculture' ? 'Agriculture' : 'Agriculture & pêche';
  const gallery = photos.length
    ? `<div class="product-detail-gallery"><div class="product-detail-main"><img id="detail-main-image" src="${escapeHtml(photos[0])}" alt="${escapeHtml(item.name)} — photo 1 sur ${photos.length}" /><span class="product-detail-count">${photos.length} photo${photos.length > 1 ? 's' : ''}</span></div><div class="product-detail-thumbs" aria-label="Toutes les photos du produit">${photos.map((photo, index) => `<button type="button" class="detail-photo-thumb ${index === 0 ? 'active' : ''}" data-detail-photo="${item.id}" data-photo-index="${index}" aria-label="Afficher la photo ${index + 1}"><img src="${escapeHtml(photo)}" alt="Photo ${index + 1} de ${escapeHtml(item.name)}" /></button>`).join('')}</div></div>`
    : `<div class="product-detail-gallery"><div class="product-detail-main product-detail-no-photo"><span>${item.emoji || '📦'}</span><p>Pas encore de photo</p></div></div>`;
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close-modal><div class="modal product-detail-modal" role="dialog" aria-modal="true" aria-labelledby="product-detail-title"><div class="modal-header"><div><p class="eyebrow">Détail du produit</p><h2 id="product-detail-title">${escapeHtml(item.name)}</h2><p>${escapeHtml(item.condition)} · ${escapeHtml(typeLabel)}</p></div><button class="modal-close" data-close-modal aria-label="Fermer">${icon('close')}</button></div>${gallery}<div class="product-detail-info"><div class="product-detail-price">${escapeHtml(item.price)} <small>${escapeHtml(item.unit)}</small></div><div class="product-detail-grid"><div><span>Disponibilité</span><strong>${escapeHtml(item.quantity)}</strong></div><div><span>Lieu</span><strong>${escapeHtml(item.location)}</strong></div><div><span>Producteur</span><strong>${escapeHtml(item.seller)}</strong></div><div><span>Activité</span><strong>${escapeHtml(typeLabel)}</strong></div></div></div><div class="product-detail-actions">${isOwner ? `<button class="outline-button" data-edit="${item.id}">${icon('edit')} Modifier</button>` : `<button class="primary-button ${state.currentUser?.role === 'vendeur' ? 'orange-button' : ''}" data-interest="${item.id}">${icon('phone')} ${state.currentUser?.role === 'vendeur' ? 'Commander' : 'Contacter'}</button>`}<button class="outline-button" data-close-modal>Fermer</button></div></div></div>`;
  hydrateIcons(document.querySelector('#modal-root'));
}

// --- Modals ---
function openPostModal(editItem = null) {
  const isEdit = !!editItem;
  const existingPhotos = getProductPhotos(editItem);
  state.editingListing = editItem;
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close-modal><div class="modal" role="dialog" aria-modal="true" aria-labelledby="post-title"><div class="modal-header"><div><h2 id="post-title">${isEdit ? 'Modifier l\'annonce' : 'Publier une annonce'}</h2><p>${isEdit ? 'Mettez à jour votre stock et prix.' : 'Quelques informations suffisent pour commencer.'}</p></div><button class="modal-close" data-close-modal aria-label="Fermer">${icon('close')}</button></div><form id="post-form"><div class="field-grid"><div class="field full"><label for="post-product">Quel produit avez-vous ?</label><input id="post-product" name="product" required placeholder="Ex. oignons violets" value="${isEdit ? escapeHtml(editItem.name) : ''}" /></div><div class="field"><label for="post-quantity">Quantité disponible</label><input id="post-quantity" name="quantity" required placeholder="Ex. 300 kg" value="${isEdit ? escapeHtml(editItem.quantity) : ''}" /></div><div class="field"><label for="post-price">Prix souhaité</label><input id="post-price" name="price" required placeholder="Ex. 450 F / kg" value="${isEdit ? escapeHtml(editItem.price) : ''}" /></div><div class="field"><label for="post-type">Type</label><select id="post-type" name="type"><option value="agriculture" ${isEdit && editItem.type==='agriculture' ? 'selected' : ''}>Agriculture</option><option value="peche" ${isEdit && editItem.type==='peche' ? 'selected' : ''}>Pêche</option></select></div><div class="field"><label for="post-place">Lieu de collecte</label><select id="post-place" name="place"><option ${!isEdit ? 'selected' : ''}>Dakar & alentours</option><option ${isEdit && editItem.location.includes('Thiès') ? 'selected' : ''}>Thiès</option><option ${isEdit && editItem.location.includes('Mbour') ? 'selected' : ''}>Mbour</option><option>Saint-Louis</option><option>Louga</option><option>Sangalkam</option><option>Notto Gouye Diama</option><option>Joal-Fadiouth</option></select></div><div class="field full"><label for="post-condition">État / Condition</label><select id="post-condition" name="condition"><option>Récolte du jour</option><option>Prêtes à partir</option><option>Disponible</option><option>Débarquées ce matin</option><option>Pêche artisanale</option><option>Nouveau</option></select></div><div class="field full photo-upload-field"><label for="post-photos">Photos du produit <span class="field-hint">1 à 4 photos maximum</span></label><div class="photo-upload-box"><span data-icon="upload"></span><input id="post-photos" name="photos" type="file" accept="image/*" multiple ${!isEdit ? 'required' : ''} /><span class="photo-upload-label">Ajouter des photos</span></div><p class="photo-upload-help">Les photos seront compressées automatiquement. ${isEdit ? 'Sélectionner de nouvelles photos remplace les anciennes.' : 'Ajoutez au moins une photo pour publier.'}</p><div id="post-photo-preview" class="post-photo-preview ${existingPhotos.length ? 'has-photos' : ''}">${photoPreviewMarkup(existingPhotos)}</div><span id="post-photo-count" class="photo-count-label">${existingPhotos.length}/4 photo${existingPhotos.length > 1 ? 's' : ''}</span></div></div><div class="record-box" style="margin-top:17px;margin-bottom:0"><button type="button" class="record-button" id="modal-record-button" aria-label="Dicter l'annonce">${icon('mic')}</button><div class="record-copy"><strong>Vous préférez parler ?</strong><span id="modal-record-status">Dictez votre annonce en wolof, pulaar ou sérère.</span></div></div><div class="modal-actions"><button type="button" class="outline-button" data-close-modal>Annuler</button><button type="submit" class="primary-button">${icon(isEdit ? 'edit' : 'upload')} ${isEdit ? 'Enregistrer' : 'Publier l’annonce'}</button></div></form></div></div>`;
  hydrateIcons(document.querySelector('#modal-root'));
}

function openContact(item) {
  const isVendeur = state.currentUser.role === 'vendeur';
  // create inquiry if vendeur
  if (isVendeur) {
    const exists = state.inquiries.some(i => i.buyerId === state.currentUser.id && i.listingId === item.id && i.status === 'pending');
    if (!exists) {
      state.inquiries.unshift({
        id: Date.now(),
        listingId: item.id,
        buyerId: state.currentUser.id,
        sellerId: item.ownerId,
        status: 'pending',
        date: Date.now(),
        message: `Intéressé par ${item.name}`,
      });
      saveAll();
      showToast('Demande envoyée au producteur !', 'success');
    }
  }
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close-modal><div class="modal contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><div class="modal-header"><div><h2 id="contact-title">${isVendeur ? 'Commander ce produit' : 'Contacter le producteur'}</h2><p>Vous êtes intéressé par : ${escapeHtml(item.name)}</p></div><button class="modal-close" data-close-modal aria-label="Fermer">${icon('close')}</button></div><div class="contact-person"><div class="avatar" style="background:${item.tone}">${escapeHtml(item.initials)}</div><div><strong>${escapeHtml(item.seller)}</strong><span>${escapeHtml(item.quantity)} · ${escapeHtml(item.location)}</span></div></div><div class="contact-number">${escapeHtml(item.phone)}</div><div class="contact-note">${isVendeur ? 'Appelez directement pour convenir du prix, quantité et livraison. Votre demande a été enregistrée.' : 'Appelez directement pour convenir du prix et du retrait.'}</div><div class="modal-actions" style="justify-content:center"><button class="outline-button" data-close-modal>Fermer</button><a href="tel:${formatPhoneForTel(item.phone)}" class="primary-button ${isVendeur ? 'orange-button' : ''}">${icon('phone')} ${isVendeur ? 'Appeler le producteur' : 'Appeler'}</a></div></div></div>`;
  hydrateIcons(document.querySelector('#modal-root'));
}

// --- Audio ---
function findSpeechVoice(locale) {
  if (!window.speechSynthesis?.getVoices) return null;
  const voices = window.speechSynthesis.getVoices();
  const wanted = locale.toLowerCase();
  const base = wanted.split('-')[0];
  return voices.find((voice) => voice.lang.toLowerCase() === wanted)
    || voices.find((voice) => voice.lang.toLowerCase().startsWith(`${base}-`))
    || null;
}
function playAudio(text, button) {
  const wasPlaying = button.classList.contains('playing');
  document.querySelectorAll('.mini-audio.playing, .audio-main.playing, .primary-button.playing, .outline-button.playing').forEach((el) => resetAudioButton(el));
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (wasPlaying) return;
  const localizedText = localizedAudioText(button, text);
  const language = getAudioLanguage();
  button.dataset.defaultHtml = button.innerHTML;
  button.classList.add('playing');
  if (button.classList.contains('mini-audio')) button.innerHTML = `${icon('pause')}<span>Lecture…</span>`;
  else if (button.querySelector('.audio-play')) button.querySelector('.audio-play').innerHTML = icon('pause');
  else button.innerHTML = `${icon('pause')} Lecture…`;
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(localizedText);
    utterance.lang = language.locale;
    utterance.voice = findSpeechVoice(language.locale) || null;
    utterance.rate = .92;
    utterance.onend = () => resetAudioButton(button);
    utterance.onerror = () => resetAudioButton(button);
    window.speechSynthesis.speak(utterance);
  } else {
    showToast('La lecture audio n’est pas disponible sur ce navigateur.', 'warning');
    setTimeout(() => resetAudioButton(button), 1400);
  }
}
function resetAudioButton(button) {
  if (!button || !button.isConnected) return;
  button.classList.remove('playing');
  if (button.dataset.defaultHtml) button.innerHTML = button.dataset.defaultHtml;
  else if (button.classList.contains('mini-audio')) button.innerHTML = `${icon('play')}<span>Écouter</span>`;
  hydrateIcons(button);
}

// --- Render ---
function render() {
  stopPhotoCarousels();
  if (!state.currentUser) {
    if (state.authView === 'welcome') app.innerHTML = authWelcomeView();
    else app.innerHTML = authFormView();
    hydrateIcons(app);
    return;
  }
  const views = {
    dashboard: dashboardView,
    products: productsView,
    market: marketView,
    weather: weatherView,
    prices: pricesView,
    voice: voiceView,
    saved: savedView,
    orders: ordersView,
    profile: profileView,
  };
  const content = (views[state.view] || dashboardView)();
  app.innerHTML = renderAppShell(content);
  hydrateIcons(app);
  startPhotoCarousels(app);
  const langSelect = document.querySelector('#language-select');
  if (langSelect) langSelect.value = state.language;
  // focus main for a11y
  const main = document.querySelector('#main-content');
  if (main) main.focus({ preventScroll: true });
}

function setView(view) {
  if (view === 'weather' && state.currentUser) markAllAlertsRead();
  state.view = view;
  state.notifOpen = false;
  render();
  const sidebar = document.querySelector('#sidebar');
  if (sidebar && window.innerWidth < 821) sidebar.classList.remove('open');
}

// --- Recording simulation ---
function simulateRecording(button, titleElement, statusElement, done) {
  if (button.classList.contains('is-recording')) return;
  button.classList.add('is-recording');
  if (titleElement) titleElement.textContent = 'Écoute en cours…';
  if (statusElement) statusElement.textContent = 'Parlez clairement pendant quelques secondes.';
  setTimeout(() => {
    button.classList.remove('is-recording');
    if (titleElement) titleElement.textContent = 'Message compris ✓';
    if (statusElement) statusElement.textContent = '« J’ai des tomates fraîches à vendre à Notto. »';
    if (done) done();
    showToast('Votre message vocal a été transcrit.', 'success');
  }, 1800);
}

// --- Init ---
render();

// --- Global event listeners ---
document.addEventListener('click', (event) => {
  // Auth: select role
  const roleBtn = event.target.closest('[data-select-role]');
  if (roleBtn) {
    state.selectedRole = roleBtn.dataset.selectRole;
    state.authView = 'login';
    render();
    return;
  }
  const backWelcome = event.target.closest('[data-back-welcome]');
  if (backWelcome) {
    state.authView = 'welcome';
    state.selectedRole = null;
    render();
    return;
  }
  const authTab = event.target.closest('[data-auth-tab]');
  if (authTab) {
    state.authView = authTab.dataset.authTab;
    render();
    return;
  }
  const demoLogin = event.target.closest('[data-demo-login]');
  if (demoLogin) {
    const phone = demoLogin.dataset.demoLogin;
    const user = state.users.find(u => u.phone === phone);
    if (user) {
      const phoneInput = document.querySelector('#login-form input[name="phone"]');
      const passInput = document.querySelector('#login-form input[name="password"]');
      if (phoneInput && passInput) {
        phoneInput.value = user.phone;
        passInput.value = user.password;
        showToast(`Compte ${user.name} prérempli. Cliquez sur Se connecter.`, 'success');
      } else {
        // direct login
        state.currentUser = user;
        state.view = 'dashboard';
        saveAll();
        render();
        showToast(`Connecté en tant que ${user.name}`, 'success');
      }
    }
    return;
  }

  // Main nav
  const nav = event.target.closest('[data-view]');
  if (nav) { setView(nav.dataset.view); return; }

  // Logout
  const logoutBtn = event.target.closest('[data-action="logout"]');
  if (logoutBtn) { logout(); return; }

  // Product detail gallery
  const detailPhoto = event.target.closest('[data-detail-photo]');
  if (detailPhoto) {
    const item = state.listings.find((listing) => String(listing.id) === detailPhoto.dataset.detailPhoto);
    const photos = item ? getProductPhotos(item) : [];
    const index = Number(detailPhoto.dataset.photoIndex);
    const mainImage = document.querySelector('#detail-main-image');
    if (mainImage && photos[index]) {
      mainImage.src = photos[index];
      mainImage.alt = `${item.name} — photo ${index + 1} sur ${photos.length}`;
      document.querySelectorAll('[data-detail-photo]').forEach((thumb) => thumb.classList.toggle('active', thumb === detailPhoto));
    }
    return;
  }

  // Audio
  const audio = event.target.closest('[data-listen-text], [data-audio-key]');
  if (audio) { playAudio(audio.dataset.listenText || '', audio); return; }

  // Favorites
  const favBtn = event.target.closest('[data-fav]');
  if (favBtn) {
    const id = Number(favBtn.dataset.fav);
    toggleFavorite(id);
    render();
    showToast(isFavorite(id) ? 'Ajouté aux favoris' : 'Retiré des favoris', 'success');
    return;
  }

  // Interest / contact
  const interest = event.target.closest('[data-interest]');
  if (interest) {
    const item = state.listings.find((listing) => String(listing.id) === interest.dataset.interest);
    if (item) openContact(item);
    return;
  }

  // Edit / delete
  const editBtn = event.target.closest('[data-edit]');
  if (editBtn) {
    const item = state.listings.find(l => String(l.id) === editBtn.dataset.edit);
    if (item) openPostModal(item);
    return;
  }
  const deleteBtn = event.target.closest('[data-delete]');
  if (deleteBtn) {
    const id = Number(deleteBtn.dataset.delete);
    if (confirm('Supprimer cette annonce ?')) {
      state.listings = state.listings.filter(l => l.id !== id);
      saveAll();
      render();
      showToast('Annonce supprimée', 'success');
    }
    return;
  }

  // Product cards open the full product detail popup.
  const productCard = event.target.closest('[data-product-id]');
  if (productCard && !event.target.closest('button, a, input, select, textarea')) {
    const item = state.listings.find((listing) => String(listing.id) === productCard.dataset.productId);
    if (item) openProductDetail(item);
    return;
  }

  // Language shortcut from the weather page
  if (event.target.closest('#weather-language')) {
    const select = document.querySelector('#language-select');
    if (select) {
      select.focus();
      try { select.showPicker?.(); } catch {}
    }
    return;
  }

  // Quick actions
  if (event.target.closest('#quick-listen')) {
    const button = event.target.closest('#quick-listen');
    button.dataset.audioKey = 'quick-briefing';
    playAudio('', button);
    return;
  }
  if (event.target.closest('#price-audio')) {
    playAudio('', event.target.closest('#price-audio'));
    return;
  }
  if (event.target.closest('[data-open-post]')) {
    if (state.currentUser.role !== 'producteur') {
      showToast('Seuls les producteurs peuvent publier des annonces.', 'warning');
      return;
    }
    openPostModal();
    return;
  }
  const closeTarget = event.target.closest('[data-close-modal]');
  if (closeTarget && (!closeTarget.classList.contains('modal-backdrop') || event.target === closeTarget)) {
    closeModal();
    return;
  }

  // Filters
  const marketFilter = event.target.closest('[data-market-filter]');
  if (marketFilter) {
    state.marketFilter = marketFilter.dataset.marketFilter;
    render();
    return;
  }
  const priceFilter = event.target.closest('[data-price-filter]');
  if (priceFilter) {
    state.priceFilter = priceFilter.dataset.priceFilter;
    const body = document.querySelector('#price-table-body');
    if (body) {
      body.innerHTML = priceTableRows();
      hydrateIcons(document);
    }
    document.querySelectorAll('[data-price-filter]').forEach((item) => item.classList.toggle('active', item === priceFilter));
    return;
  }

  if (event.target.closest('#sync-button')) {
    const button = event.target.closest('#sync-button');
    if (!state.online) {
      showToast('Pas de réseau. Jokko continue hors ligne avec la météo en cache.', 'warning');
      return;
    }
    button.disabled = true;
    button.innerHTML = `${icon('refresh')} Synchronisation…`;
    hydrateIcons(button);
    setTimeout(() => {
      state.lastSync = Date.now();
      saveAll();
      button.disabled = false;
      button.innerHTML = `${icon('check')} Tout est à jour`;
      hydrateIcons(button);
      showToast('Météo, alertes et annonces synchronisées.', 'success');
      const syncLine = document.querySelector('.sync-line strong');
      if (syncLine) syncLine.textContent = timeAgo(state.lastSync);
    }, 1100);
    return;
  }
  if (event.target.closest('#install-app')) {
    if (state.deferredInstall) {
      state.deferredInstall.prompt();
      state.deferredInstall.userChoice.finally(() => {
        state.deferredInstall = null;
        render();
      });
    } else {
      openInstallHelp();
    }
    return;
  }
  if (event.target.closest('#notification-button')) {
    state.notifOpen = !state.notifOpen;
    render();
    return;
  }
  if (event.target.closest('#help-button')) { showToast('Besoin d’aide ? Appelez le 800 00 00 00.', 'success'); return; }
  if (event.target.closest('#mobile-menu')) { document.querySelector('#sidebar').classList.toggle('open'); return; }
  if (event.target.closest('#record-button')) {
    const recordButton = event.target.closest('#record-button');
    simulateRecording(recordButton, document.querySelector('#record-title'), document.querySelector('#record-status'), () => {
      const prod = document.querySelector('#voice-product');
      const qty = document.querySelector('#voice-quantity');
      const price = document.querySelector('#voice-price');
      const zone = document.querySelector('#voice-zone');
      if (prod) prod.value = 'Tomates fraîches';
      if (qty) qty.value = '200 kg';
      if (price) price.value = '600 F / kg';
      if (zone) zone.value = 'Thiès';
    });
    return;
  }
  if (event.target.closest('#modal-record-button')) {
    const recordButton = event.target.closest('#modal-record-button');
    simulateRecording(recordButton, null, document.querySelector('#modal-record-status'));
  }
});

document.addEventListener('input', (event) => {
  if (event.target.id === 'market-search') {
    state.search = event.target.value.trim().toLowerCase();
    const query = state.search;
    const cards = document.querySelectorAll('#market-grid .market-card');
    let visibleCount = 0;
    cards.forEach((card) => {
      const hide = query && !card.dataset.search.includes(query);
      card.classList.toggle('hidden', hide);
      if (!hide) visibleCount++;
    });
    const label = document.querySelector('.market-section-label');
    if (label) label.textContent = `${visibleCount} annonces disponibles`;
  }
  if (event.target.id === 'price-search') {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll('#price-table-body tr').forEach((row) => row.classList.toggle('hidden', query && !row.textContent.toLowerCase().includes(query)));
  }
});

document.addEventListener('submit', async (event) => {
  if (event.target.id === 'login-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    const phone = String(form.get('phone')).trim();
    const password = String(form.get('password')).trim();
    const res = login(phone, password);
    if (!res.ok) {
      showToast(res.message, 'error');
    } else {
      render();
      showToast(`Bienvenue ${state.currentUser.name} !`, 'success');
    }
    return;
  }
  if (event.target.id === 'register-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: String(form.get('name')).trim(),
      phone: String(form.get('phone')).trim(),
      password: String(form.get('password')).trim(),
      location: String(form.get('location')).trim(),
      role: state.selectedRole || 'producteur',
      type: String(form.get('type') || '').trim(),
      commerce: String(form.get('commerce') || '').trim(),
    };
    if (!data.name || !data.phone || !data.password || !data.location) {
      showToast('Veuillez remplir tous les champs.', 'error');
      return;
    }
    if (data.password.length < 4) {
      showToast('Mot de passe trop court (min 4 caractères).', 'error');
      return;
    }
    const res = register(data);
    if (!res.ok) {
      showToast(res.message, 'error');
    } else {
      render();
      showToast(`Compte créé ! Bienvenue ${state.currentUser.name}`, 'success');
    }
    return;
  }
  if (event.target.id === 'post-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    const product = String(form.get('product')).trim();
    const quantity = String(form.get('quantity')).trim();
    const price = String(form.get('price')).trim();
    const type = String(form.get('type') || 'agriculture').trim();
    const place = String(form.get('place')).trim();
    const condition = String(form.get('condition') || 'Disponible').trim();
    const stockNum = parseInt(quantity) || 100;
    const photoFiles = form.getAll('photos').filter((file) => file && file.size > 0);
    let photos = state.editingListing ? getProductPhotos(state.editingListing) : [];
    try {
      if (photoFiles.length) photos = await prepareProductPhotos(photoFiles);
    } catch (error) {
      showToast(error.message || 'Impossible d’ajouter ces photos.', 'error');
      return;
    }
    if (!state.editingListing && photos.length === 0) {
      showToast('Ajoutez au moins une photo du produit.', 'warning');
      return;
    }
    if (state.editingListing) {
      const idx = state.listings.findIndex(l => l.id === state.editingListing.id);
      if (idx >= 0) {
        state.listings[idx] = {
          ...state.listings[idx],
          name: product || state.listings[idx].name,
          quantity: quantity || state.listings[idx].quantity,
          stock: stockNum,
          price: price || state.listings[idx].price,
          type,
          location: place || state.listings[idx].location,
          condition,
          photos,
        };
        saveAll();
        closeModal();
        state.editingListing = null;
        render();
        showToast('Annonce mise à jour !', 'success');
      }
    } else {
      const newItem = {
        id: Date.now(),
        ownerId: state.currentUser.id,
        name: product || 'Nouveau produit',
        type: type,
        emoji: type === 'peche' ? '🐟' : '🌱',
        image: '',
        photos,
        condition: condition,
        location: place,
        price: price.replace(/\s+/g, ' ') || 'Prix à discuter',
        unit: 'F / kg',
        quantity: quantity,
        stock: stockNum,
        seller: state.currentUser.name,
        phone: '+221 ' + state.currentUser.phone.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '$1 $2 $3 $4'),
        initials: state.currentUser.initials,
        tone: state.currentUser.tone,
        createdAt: Date.now(),
      };
      state.listings.unshift(newItem);
      saveAll();
      closeModal();
      state.editingListing = null;
      state.view = 'products';
      render();
      showToast('Annonce publiée et visible pour les vendeurs !', 'success');
    }
    return;
  }
  if (event.target.id === 'voice-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    const product = String(form.get('product')).trim();
    if (!product) { showToast('Ajoutez au moins un produit.', 'warning'); return; }
    const quantity = String(form.get('quantity')).trim() || '100 kg';
    const price = String(form.get('price')).trim() || 'Prix à discuter';
    const zone = String(form.get('zone')).trim() || state.currentUser.location;
    const newItem = {
      id: Date.now(),
      ownerId: state.currentUser.id,
      name: product,
      type: 'agriculture',
      emoji: '🌱',
      image: '',
      photos: [],
      condition: 'Annonce vocale',
      location: zone,
      price,
      unit: '',
      quantity,
      stock: parseInt(quantity) || 100,
      seller: state.currentUser.name,
      phone: '+221 ' + state.currentUser.phone,
      initials: state.currentUser.initials,
      tone: state.currentUser.tone,
      createdAt: Date.now(),
    };
    state.listings.unshift(newItem);
    saveAll();
    showToast('Annonce vocale enregistrée et ajoutée à vos produits !', 'success');
    state.view = 'products';
    render();
    return;
  }
});

document.addEventListener('change', (event) => {
  if (event.target.id === 'post-photos') {
    const input = event.target;
    const files = [...(input.files || [])];
    const existingPhotos = getProductPhotos(state.editingListing);
    if (files.length > 4) {
      input.value = '';
      updatePostPhotoPreview(existingPhotos);
      showToast('Vous pouvez ajouter 4 photos maximum.', 'warning');
      return;
    }
    if (files.some((file) => !file.type.startsWith('image/'))) {
      input.value = '';
      updatePostPhotoPreview(existingPhotos);
      showToast('Seuls les fichiers image sont acceptés.', 'warning');
      return;
    }
    if (!files.length) {
      updatePostPhotoPreview(existingPhotos);
      return;
    }
    const previewToken = `${Date.now()}-${Math.random()}`;
    input.dataset.previewToken = previewToken;
    const preview = document.querySelector('#post-photo-preview');
    if (preview) preview.innerHTML = '<div class="photo-preview-empty">Préparation des aperçus…</div>';
    Promise.all(files.map(fileToDataUrl)).then((previewPhotos) => {
      if (input.dataset.previewToken === previewToken) updatePostPhotoPreview(previewPhotos);
    }).catch(() => {
      updatePostPhotoPreview(existingPhotos);
      showToast('Impossible de prévisualiser ces photos.', 'error');
    });
    return;
  }
  if (event.target.id === 'language-select') {
    state.language = audioLanguages[event.target.value] ? event.target.value : 'fr';
    saveAll();
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    const selectedLanguage = audioLanguageLabel();
    render();
    showToast(`Les prochains audios seront lus en ${selectedLanguage}.`, 'success');
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { closeModal(); const sb = document.querySelector('#sidebar'); if (sb) sb.classList.remove('open'); }
  const productCard = event.target.closest('[data-product-id]');
  if (productCard && (event.key === 'Enter' || event.key === ' ')
    && !event.target.closest('button, a, input, select, textarea')) {
    event.preventDefault();
    const item = state.listings.find((listing) => String(listing.id) === productCard.dataset.productId);
    if (item) openProductDetail(item);
  }
});

// Close sidebar / notif panel when clicking outside
document.addEventListener('click', (e) => {
  const sidebar = document.querySelector('#sidebar');
  const menuBtn = document.querySelector('#mobile-menu');
  if (sidebar && window.innerWidth < 821 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && !menuBtn?.contains(e.target)) {
    sidebar.classList.remove('open');
  }
  if (state.notifOpen) {
    const wrap = document.querySelector('.notif-wrap');
    if (wrap && !wrap.contains(e.target)) {
      state.notifOpen = false;
      const panel = document.querySelector('#notif-panel');
      if (panel) panel.remove();
    }
  }
});

window.addEventListener('online', () => {
  state.online = true;
  state.lastSync = Date.now();
  saveAll();
  if (state.currentUser) render();
  showToast('Connexion rétablie. Météo et alertes synchronisées.', 'success');
});
window.addEventListener('offline', () => {
  state.online = false;
  if (state.currentUser) render();
  showToast('Hors ligne. Jokko continue avec la météo en cache.', 'warning');
});
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  state.deferredInstall = event;
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
