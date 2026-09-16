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
  upload: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 16V4M7.5 8.5 12 4l4.5 4.5M5 20h14"/></svg>'
};

const state = {
  view: 'dashboard',
  language: localStorage.getItem('jokko-language') || 'fr',
  marketFilter: 'all',
  priceFilter: 'all',
  search: '',
  listings: [
    { id: 1, name: 'Oignons violets', type: 'agriculture', emoji: '🧅', image: '', condition: 'Récolte du jour', location: 'Sangalkam, Dakar', price: '450', unit: 'F / kg', quantity: '800 kg', seller: 'Fatou Sarr', phone: '+221 77 240 18 46', initials: 'FS', tone: 'linear-gradient(135deg, #d88e67, #7b5145)' },
    { id: 2, name: 'Tomates fraîches', type: 'agriculture', emoji: '🍅', image: 'tomato', condition: 'Prêtes à partir', location: 'Notto Gouye Diama', price: '600', unit: 'F / kg', quantity: '350 kg', seller: 'Mamadou Ndiaye', phone: '+221 76 345 09 22', initials: 'MN', tone: 'linear-gradient(135deg, #7ea85c, #d77d5d)' },
    { id: 3, name: 'Sardines fraîches', type: 'peche', emoji: '🐟', image: 'fish-image', condition: 'Débarquées ce matin', location: 'Mbour, quai de pêche', price: '1 800', unit: 'F / kg', quantity: '120 kg', seller: 'Ibrahima Ba', phone: '+221 78 510 33 67', initials: 'IB', tone: 'linear-gradient(135deg, #5d9ead, #315f70)' },
    { id: 4, name: 'Carottes', type: 'agriculture', emoji: '🥕', image: '', condition: 'Disponible', location: 'Lompoul, Louga', price: '500', unit: 'F / kg', quantity: '200 kg', seller: 'Awa Diop', phone: '+221 70 880 41 12', initials: 'AD', tone: 'linear-gradient(135deg, #e9a250, #a96238)' },
    { id: 5, name: 'Thiof entier', type: 'peche', emoji: '🐠', image: 'fish-image', condition: 'Pêche artisanale', location: 'Joal-Fadiouth', price: '3 500', unit: 'F / kg', quantity: '65 kg', seller: 'Cheikh Fall', phone: '+221 77 910 54 03', initials: 'CF', tone: 'linear-gradient(135deg, #798dc0, #445474)' },
    { id: 6, name: 'Bissap séché', type: 'agriculture', emoji: '🌺', image: '', condition: 'Nouveau', location: 'Touba Toul, Thiès', price: '2 200', unit: 'F / kg', quantity: '90 kg', seller: 'Marième Seck', phone: '+221 76 400 27 88', initials: 'MS', tone: 'linear-gradient(135deg, #a66a9f, #633e62)' }
  ]
};

const app = document.querySelector('#app');
const breadcrumb = document.querySelector('#breadcrumb-current');
const viewNames = { dashboard: 'Tableau de bord', weather: 'Météo & alertes', prices: 'Prix du marché', market: 'Annonces', voice: 'Ma voix', saved: 'Mes favoris' };

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
function formatNumber(value) { return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

function audioButton(text, label = 'Écouter') {
  return `<button class="mini-audio" data-listen-text="${escapeHtml(text)}" aria-label="${label}">${icon('play')}<span>${label}</span></button>`;
}

function marketCard(item) {
  const imageClass = item.image ? ` ${item.image}` : '';
  return `<article class="market-card" data-type="${item.type}" data-search="${escapeHtml(`${item.name} ${item.location} ${item.seller}`.toLowerCase())}">
    <div class="market-card-top">
      <div class="market-image${imageClass}">${item.emoji}</div>
      <span class="condition-label">${escapeHtml(item.condition)}</span>
    </div>
    <h3>${escapeHtml(item.name)}</h3>
    <div class="market-origin">${icon('map-pin')}${escapeHtml(item.location)}</div>
    <div class="market-bottom">
      <div><div class="market-price">${escapeHtml(item.price)} <small>${escapeHtml(item.unit)}</small></div><div class="market-origin" style="margin-top:5px">${escapeHtml(item.quantity)} disponibles</div></div>
      <button class="interest-button" data-interest="${item.id}">${icon('phone')} Intéressé</button>
    </div>
  </article>`;
}

function dashboardView() {
  const alertAudio = 'Alerte pluie forte attendue demain entre quinze heures et dix-huit heures dans la région de Thiès. Protégez vos récoltes et évitez les traitements aujourd’hui.';
  const marineAudio = 'Vigilance en mer. Vent de nord-ouest et houle forte cet après-midi. Rentrez avant dix-sept heures et gardez vos gilets de sauvetage.';
  return `<section class="view dashboard-view">
    <div class="view-head">
      <div><p class="eyebrow">Mardi 15 septembre 2026 · Votre briefing</p><h1>Bonjour Boubacar <span>👋</span></h1><p class="subheading">Les informations essentielles de votre terrain, réunies au même endroit. Écoutez, décidez, avancez.</p></div>
      <button class="primary-button lime-button" id="quick-listen">${icon('play')} Écouter le briefing</button>
    </div>

    <div class="hero-grid">
      <article class="briefing-card card">
        <div class="briefing-content"><p class="eyebrow">Le point du matin · 2 min</p><h2>Les conditions changent. Restez au courant.</h2><p class="briefing-copy">Météo agricole, prix du marché et sécurité en mer : votre résumé vocal est prêt dans votre langue.</p></div>
        <div class="briefing-bottom"><button class="audio-main" data-listen-text="Bonjour Boubacar. Voici votre briefing du mardi quinze septembre. Une pluie forte est attendue demain à Thiès. Les oignons se vendent quatre cent cinquante francs le kilo à Sangalkam. En mer, la prudence est recommandée cet après-midi."><span class="audio-play">${icon('play')}</span><span class="audio-label"><span>Briefing du jour</span><small>Français · 01:42</small></span><span class="waveform" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></span></button><div class="language-pills"><span>Wolof</span><span>Pulaar</span><span>Sérère</span></div></div>
      </article>
      <article class="weather-summary card">
        <div class="weather-top"><span>${icon('map-pin')} Dakar & alentours</span><span>${icon('calendar')} Aujourd’hui</span></div>
        <div class="weather-main"><div><div class="temperature">28<sup>°C</sup></div><p class="weather-description">Partiellement nuageux</p></div><div class="weather-icon">⛅</div></div>
        <div class="weather-meta"><div>Vent<strong>18 km/h</strong></div><div>Humidité<strong>71 %</strong></div><div>Pluie<strong>30 %</strong></div></div>
      </article>
    </div>

    <div class="stats-grid">
      <article class="stat-card"><div class="stat-icon">${icon('chart')}</div><div class="stat-copy"><span>Prix suivis</span><strong>24 produits</strong><small>+4 cette semaine</small></div></article>
      <article class="stat-card"><div class="stat-icon orange">${icon('store')}</div><div class="stat-copy"><span>Annonces actives</span><strong>12 annonces</strong><small class="neutral">dans votre zone</small></div></article>
      <article class="stat-card"><div class="stat-icon blue">${icon('waves')}</div><div class="stat-copy"><span>Alertes non lues</span><strong>3 alertes</strong><small class="neutral">dont 1 importante</small></div></article>
    </div>

    <div class="content-grid">
      <article class="card alert-card"><div class="card-header"><div><h2 class="card-title">Alertes & conseils</h2><p class="card-subtitle">Les dernières informations pour votre activité</p></div><button class="text-button" data-view="weather">Tout voir ${icon('arrow-right')}</button></div><div class="alert-list">
        <div class="alert-item"><div class="alert-marker warning">${icon('droplet')}</div><div class="alert-copy"><div class="alert-title-line"><strong>Pluies fortes attendues</strong><time>Il y a 24 min</time></div><p>Protégez vos semis. Évitez les traitements avant la pluie.</p><div class="alert-footer"><span class="alert-location">${icon('map-pin')} Thiès · Agriculture</span>${audioButton(alertAudio)}</div></div></div>
        <div class="alert-item"><div class="alert-marker danger">${icon('waves')}</div><div class="alert-copy"><div class="alert-title-line"><strong>Vigilance en mer</strong><time>Il y a 1 h</time></div><p>Houle forte annoncée. Retour au quai conseillé avant 17 h.</p><div class="alert-footer"><span class="alert-location">${icon('map-pin')} Petite Côte · Pêche</span>${audioButton(marineAudio)}</div></div></div>
        <div class="alert-item"><div class="alert-marker">${icon('wind')}</div><div class="alert-copy"><div class="alert-title-line"><strong>Conseil de saison</strong><time>Hier</time></div><p>Le bon moment pour préparer vos planches d’oignon.</p><div class="alert-footer"><span class="alert-location">${icon('map-pin')} Zone des Niayes</span>${audioButton('Conseil de saison : préparez vos planches d’oignon et arrosez tôt le matin pour économiser l’eau.')}</div></div></div>
      </div></article>
      <article class="card price-card"><div class="card-header"><div><h2 class="card-title">Prix du marché</h2><p class="card-subtitle">Mis à jour il y a 8 minutes</p></div><button class="text-button" data-view="prices">Voir les prix ${icon('arrow-right')}</button></div><div class="price-tabs"><button class="price-tab active">Agriculture</button><button class="price-tab">Pêche</button></div><table class="price-table"><thead><tr><th>Produit</th><th>Prix moyen</th><th>Évolution</th></tr></thead><tbody>
        <tr><td><div class="product-cell"><span class="product-emoji">🧅</span><div><strong>Oignon violet</strong><small>Sangalkam</small></div></div></td><td class="price-value">450 F/kg</td><td><span class="trend up">${icon('arrow-right')} +8%</span></td></tr>
        <tr><td><div class="product-cell"><span class="product-emoji red">🍅</span><div><strong>Tomate</strong><small>Notto Gouye Diama</small></div></div></td><td class="price-value">600 F/kg</td><td><span class="trend down">${icon('arrow-right')} -4%</span></td></tr>
        <tr><td><div class="product-cell"><span class="product-emoji orange">🥕</span><div><strong>Carotte</strong><small>Louga</small></div></div></td><td class="price-value">500 F/kg</td><td><span class="trend flat">${icon('arrow-right')} stable</span></td></tr>
        <tr><td><div class="product-cell"><span class="product-emoji fish">🐟</span><div><strong>Sardine</strong><small>Mbour</small></div></div></td><td class="price-value">1 800 F/kg</td><td><span class="trend up">${icon('arrow-right')} +12%</span></td></tr>
      </tbody></table></article>
    </div>

    <div class="section-heading"><div><h2>À vendre près de chez vous</h2><p>Des producteurs vérifiés, sans intermédiaire.</p></div><button class="text-button" data-view="market">Voir toutes les annonces ${icon('arrow-right')}</button></div>
    <div class="marketplace-grid">${state.listings.slice(0, 3).map(marketCard).join('')}</div>
  </section>`;
}

function weatherView() {
  const alerts = [
    { icon: 'droplet', tone: 'warning', title: 'Pluies fortes attendues', place: 'Thiès · Agriculture', tag: 'À surveiller', tagTone: 'orange', text: 'Des précipitations fortes sont attendues demain entre 15 h et 18 h. Protégez vos récoltes et vérifiez vos canaux de drainage.', time: 'Aujourd’hui, 10:24', audio: 'Alerte pluie forte attendue demain entre quinze heures et dix-huit heures dans la région de Thiès. Protégez vos récoltes.' },
    { icon: 'waves', tone: 'danger', title: 'Vigilance en mer', place: 'Petite Côte · Pêche', tag: 'Important', tagTone: 'red', text: 'Vent de nord-ouest et houle forte cet après-midi. Rentrez avant 17 h et gardez vos gilets de sauvetage.', time: 'Aujourd’hui, 09:12', audio: 'Vigilance en mer. Vent de nord-ouest et houle forte cet après-midi. Rentrez avant dix-sept heures.' },
    { icon: 'wind', tone: '', title: 'Vent favorable aux semis', place: 'Zone des Niayes · Agriculture', tag: 'Conseil', tagTone: '', text: 'Les conditions sont favorables à la préparation des planches. Semez tôt le matin et arrosez avec mesure.', time: 'Hier, 16:40', audio: 'Conseil de saison. Les conditions sont favorables à la préparation des planches. Semez tôt le matin.' },
    { icon: 'shield', tone: '', title: 'Rappel sécurité en mer', place: 'Mbour · Pêche', tag: 'À retenir', tagTone: 'blue', text: 'Avant chaque sortie, vérifiez le carburant, la radio, les gilets et la météo. Prévenez un proche de votre itinéraire.', time: 'Hier, 08:05', audio: 'Rappel sécurité en mer. Vérifiez le carburant, la radio, les gilets et la météo avant chaque sortie.' }
  ];
  return `<section class="view inner-view weather-view"><div class="view-head"><div><p class="eyebrow">Informations officielles · Accès libre</p><h1>Météo & alertes</h1><p class="subheading">Des messages courts, utiles et disponibles à l’écoute dans votre langue. Les alertes sont conservées sur votre téléphone.</p></div><div class="header-actions"><button class="outline-button" id="weather-language">${icon('globe')} Wolof · Pulaar · Sérère</button></div></div>
    <div class="card page-card"><div class="card-header"><div><h2 class="card-title">Alertes récentes</h2><p class="card-subtitle">Source : ANACIM · Mise à jour automatique</p></div><div class="header-icon">${icon('cloud-sun')}</div></div><div class="large-alert-list">${alerts.map((alert) => `<article class="large-alert ${alert.tone === 'danger' ? 'critical' : ''}"><div class="alert-marker ${alert.tone}">${icon(alert.icon)}</div><div class="large-alert-content"><h3>${alert.title}</h3><p>${alert.text}</p><div class="alert-meta-row"><span>${icon('map-pin')} ${alert.place}</span><span class="tag ${alert.tagTone}">${alert.tag}</span></div><div style="display:flex;align-items:center;justify-content:space-between;margin-top:11px"><span style="color:#a2ada5;font-size:9px">${alert.time}</span>${audioButton(alert.audio, 'Écouter')}</div></div></article>`).join('')}</div></div>
    <div class="section-heading"><div><h2>Prévisions à 5 jours</h2><p>Dakar & zone des Niayes</p></div><span class="tag">Actualisé maintenant</span></div>
    <div class="card page-card"><div class="forecast-row"><div class="forecast-day today"><span>Aujourd’hui</span><em>⛅</em><strong>28°</strong><small>Nuageux</small></div><div class="forecast-day"><span>Mer 16</span><em>🌧️</em><strong>27°</strong><small>Pluie forte</small></div><div class="forecast-day"><span>Jeu 17</span><em>🌦️</em><strong>29°</strong><small>Averses</small></div><div class="forecast-day"><span>Ven 18</span><em>☀️</em><strong>30°</strong><small>Ensoleillé</small></div><div class="forecast-day"><span>Sam 19</span><em>☀️</em><strong>31°</strong><small>Ensoleillé</small></div></div></div>
  </section>`;
}

const priceData = [
  ['Oignon violet', '🧅', 'Sangalkam', '450 F/kg', '+8%', 'up', 'agriculture'], ['Tomate fraîche', '🍅', 'Notto Gouye Diama', '600 F/kg', '-4%', 'down', 'agriculture'], ['Carotte', '🥕', 'Louga', '500 F/kg', 'stable', 'flat', 'agriculture'], ['Pomme de terre', '🥔', 'Potou', '375 F/kg', '+5%', 'up', 'agriculture'], ['Sardine', '🐟', 'Mbour', '1 800 F/kg', '+12%', 'up', 'peche'], ['Thiof', '🐠', 'Joal-Fadiouth', '3 500 F/kg', '-2%', 'down', 'peche'], ['Crevette', '🦐', 'Saint-Louis', '4 200 F/kg', '+6%', 'up', 'peche'], ['Mulet', '🐟', 'Kayar', '2 400 F/kg', 'stable', 'flat', 'peche']
];

function priceTableRows() {
  const filtered = priceData.filter((row) => state.priceFilter === 'all' || row[6] === state.priceFilter);
  return filtered.map((row) => `<tr><td><div class="product-cell"><span class="product-emoji ${row[6] === 'peche' ? 'fish' : row[1] === '🍅' ? 'red' : row[1] === '🥕' ? 'orange' : ''}">${row[1]}</span><div><strong>${row[0]}</strong><small>${row[2]}</small></div></div></td><td class="price-value">${row[3]}</td><td><span class="trend ${row[5]}">${icon('arrow-right')} ${row[4]}</span></td><td>${audioButton(`Le prix moyen du ${row[0]} est de ${row[3]} au marché de ${row[2]}.`, 'Audio')}</td></tr>`).join('');
}

function pricesView() {
  return `<section class="view inner-view prices-view"><div class="view-head"><div><p class="eyebrow">Transparence · Accès libre</p><h1>Prix du marché</h1><p class="subheading">Comparez les prix près de chez vous avant de vendre ou d’acheter. Écoutez chaque prix dans votre langue.</p></div><button class="outline-button" id="price-audio">${icon('play')} Écouter les prix</button></div>
    <div class="filter-bar"><div class="search-box">${icon('search')}<input id="price-search" type="search" placeholder="Rechercher un produit ou un marché…" aria-label="Rechercher un produit ou un marché" /></div><button class="filter-pill ${state.priceFilter === 'all' ? 'active' : ''}" data-price-filter="all">Tous</button><button class="filter-pill ${state.priceFilter === 'agriculture' ? 'active' : ''}" data-price-filter="agriculture">Agriculture</button><button class="filter-pill ${state.priceFilter === 'peche' ? 'active' : ''}" data-price-filter="peche">Pêche</button><select class="select-box" aria-label="Choisir une zone"><option>Dakar & alentours</option><option>Thiès</option><option>Saint-Louis</option><option>Petite Côte</option></select></div>
    <div class="card page-card"><div class="card-header"><div><h2 class="card-title">Prix moyens aujourd’hui</h2><p class="card-subtitle">Relevés communautaires · ${priceData.length} produits suivis</p></div><div class="header-icon">${icon('chart')}</div></div><div style="overflow-x:auto"><table class="price-table full-price-table"><thead><tr><th>Produit</th><th>Prix moyen</th><th>Évolution / 7 jours</th><th>Audio</th></tr></thead><tbody id="price-table-body">${priceTableRows()}</tbody></table></div></div>
    <div class="section-heading"><div><h2>Comment lire les prix ?</h2><p>Une information simple pour mieux négocier.</p></div></div><div class="stats-grid"><article class="stat-card"><div class="stat-icon">${icon('chart')}</div><div class="stat-copy"><span>Prix moyen</span><strong>Sur 7 jours</strong><small class="neutral">par zone et produit</small></div></article><article class="stat-card"><div class="stat-icon orange">${icon('map-pin')}</div><div class="stat-copy"><span>Sources locales</span><strong>18 marchés</strong><small class="neutral">mis à jour chaque jour</small></div></article><article class="stat-card"><div class="stat-icon blue">${icon('mic')}</div><div class="stat-copy"><span>Accessibilité</span><strong>1 bouton audio</strong><small class="neutral">dans 3 langues locales</small></div></article></div>
  </section>`;
}

function marketView() {
  const visible = state.listings.filter((item) => (state.marketFilter === 'all' || item.type === state.marketFilter) && (!state.search || `${item.name} ${item.location} ${item.seller}`.toLowerCase().includes(state.search)));
  return `<section class="view inner-view market-page-view"><div class="view-head"><div><p class="eyebrow">Jokko direct · Sans intermédiaire</p><h1>Annonces locales</h1><p class="subheading">Trouvez les récoltes et produits de la mer disponibles autour de vous, puis contactez directement le producteur.</p></div><button class="primary-button" data-open-post>${icon('plus')} Publier une annonce</button></div>
    <div class="filter-bar"><div class="search-box">${icon('search')}<input id="market-search" type="search" value="${escapeHtml(state.search)}" placeholder="Produit, lieu ou producteur…" aria-label="Rechercher une annonce" /></div><button class="filter-pill ${state.marketFilter === 'all' ? 'active' : ''}" data-market-filter="all">Tout</button><button class="filter-pill ${state.marketFilter === 'agriculture' ? 'active' : ''}" data-market-filter="agriculture">Agriculture</button><button class="filter-pill ${state.marketFilter === 'peche' ? 'active' : ''}" data-market-filter="peche">Pêche</button></div>
    <div class="market-section-label">${visible.length} annonces disponibles</div><div class="market-view-grid" id="market-grid">${visible.map(marketCard).join('')}${visible.length === 0 ? '<div class="market-empty visible">Aucune annonce ne correspond à votre recherche.</div>' : ''}</div>
    <div class="card" style="display:flex;align-items:center;gap:16px;margin-top:28px;padding:17px 20px;background:#f0f8ed;border-color:#dceade;box-shadow:none"><div class="stat-icon" style="width:35px;height:35px;flex-basis:35px">${icon('shield')}</div><div style="flex:1"><strong style="display:block;margin-bottom:4px;color:#4c6652;font-size:11px">Un échange direct et plus juste</strong><span style="color:#819787;font-size:10px">Les coordonnées ne sont partagées qu’après votre accord. Jokko ne prend aucune commission.</span></div>${icon('arrow-right')}</div>
  </section>`;
}

function voiceView() {
  return `<section class="view inner-view voice-page-view"><div class="view-head"><div><p class="eyebrow">ASR · votre parole devient une annonce</p><h1>Ma voix, mon activité</h1><p class="subheading">Parlez naturellement. Jokko transforme votre message en une annonce claire, même sans savoir écrire.</p></div><span class="tag">Mode hors ligne disponible</span></div>
    <div class="voice-grid"><article class="voice-intro card"><p class="eyebrow">Simple comme un appel</p><h2>Vous parlez. Votre marché vous entend.</h2><p>Enregistrez votre disponibilité en wolof, pulaar ou sérère. Votre annonce est transcrite et peut être publiée dès que le réseau revient.</p><div class="voice-languages"><span class="voice-language">Wolof · Wolof</span><span class="voice-language">Pulaar · Fulfulde</span><span class="voice-language">Sérère · Seereer</span></div><div class="voice-visual"><div class="voice-orb">${icon('mic')}</div></div></article>
    <article class="voice-form-card card"><h3>Créer une annonce</h3><p>Commencez par une note vocale. Les champs seront préremplis pour vous.</p><div class="record-box"><button class="record-button" id="record-button" aria-label="Enregistrer une note vocale">${icon('mic')}</button><div class="record-copy"><strong id="record-title">Appuyez pour parler</strong><span id="record-status">Exemple : « J’ai des tomates à vendre… »</span></div><div class="recording-dots"><i></i><i></i><i></i></div></div><div class="form-divider"></div><form id="voice-form"><div class="field-grid"><div class="field"><label for="voice-product">Produit</label><input id="voice-product" name="product" placeholder="Ex. tomates fraîches" /></div><div class="field"><label for="voice-quantity">Quantité</label><input id="voice-quantity" name="quantity" placeholder="Ex. 200 kg" /></div><div class="field"><label for="voice-price">Prix souhaité</label><input id="voice-price" name="price" placeholder="Ex. 600 F / kg" /></div><div class="field"><label for="voice-zone">Lieu</label><select id="voice-zone" name="zone"><option>Choisir un lieu</option><option>Dakar & alentours</option><option>Thiès</option><option>Petite Côte</option><option>Saint-Louis</option></select></div></div><button class="primary-button voice-submit" type="submit">${icon('upload')} Enregistrer comme brouillon</button></form></article></div>
  </section>`;
}

function savedView() {
  return `<section class="view inner-view"><div class="view-head"><div><p class="eyebrow">Votre sélection</p><h1>Mes favoris</h1><p class="subheading">Retrouvez les annonces et les prix que vous souhaitez suivre.</p></div></div><div class="card saved-empty"> <div class="empty-icon">${icon('bookmark')}</div><h3>Votre liste est encore vide</h3><p>Appuyez sur le cœur d’une annonce pour la retrouver ici, même sans connexion.</p><button class="outline-button" data-view="market">Découvrir les annonces ${icon('arrow-right')}</button></div></section>`;
}

function render() {
  const views = { dashboard: dashboardView, weather: weatherView, prices: pricesView, market: marketView, voice: voiceView, saved: savedView };
  app.innerHTML = (views[state.view] || dashboardView)();
  breadcrumb.textContent = viewNames[state.view] || viewNames.dashboard;
  document.querySelectorAll('.nav-item').forEach((button) => button.classList.toggle('active', button.dataset.view === state.view));
  hydrateIcons(app);
  app.focus({ preventScroll: true });
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
function openPostModal() {
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close-modal><div class="modal" role="dialog" aria-modal="true" aria-labelledby="post-title"><div class="modal-header"><div><h2 id="post-title">Publier une annonce</h2><p>Quelques informations suffisent pour commencer.</p></div><button class="modal-close" data-close-modal aria-label="Fermer">${icon('close')}</button></div><form id="post-form"><div class="field-grid"><div class="field full"><label for="post-product">Quel produit avez-vous ?</label><input id="post-product" name="product" required placeholder="Ex. oignons violets" /></div><div class="field"><label for="post-quantity">Quantité disponible</label><input id="post-quantity" name="quantity" required placeholder="Ex. 300 kg" /></div><div class="field"><label for="post-price">Prix souhaité</label><input id="post-price" name="price" required placeholder="Ex. 450 F / kg" /></div><div class="field full"><label for="post-place">Lieu de collecte</label><select id="post-place" name="place"><option>Dakar & alentours</option><option>Thiès</option><option>Mbour</option><option>Saint-Louis</option><option>Louga</option></select></div></div><div class="record-box" style="margin-top:17px;margin-bottom:0"><button type="button" class="record-button" id="modal-record-button" aria-label="Dicter l'annonce">${icon('mic')}</button><div class="record-copy"><strong>Vous préférez parler ?</strong><span id="modal-record-status">Dictez votre annonce en wolof, pulaar ou sérère.</span></div></div><div class="modal-actions"><button type="button" class="outline-button" data-close-modal>Annuler</button><button type="submit" class="primary-button">${icon('upload')} Publier l’annonce</button></div></form></div></div>`;
  hydrateIcons(document.querySelector('#modal-root'));
}

function openContact(item) {
  document.querySelector('#modal-root').innerHTML = `<div class="modal-backdrop" data-close-modal><div class="modal contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title"><div class="modal-header"><div><h2 id="contact-title">Contacter le producteur</h2><p>Vous êtes intéressé par : ${escapeHtml(item.name)}</p></div><button class="modal-close" data-close-modal aria-label="Fermer">${icon('close')}</button></div><div class="contact-person"><div class="avatar" style="background:${item.tone}">${escapeHtml(item.initials)}</div><div><strong>${escapeHtml(item.seller)}</strong><span>${escapeHtml(item.quantity)} · ${escapeHtml(item.location)}</span></div></div><div class="contact-number">${escapeHtml(item.phone)}</div><div class="contact-note">Appelez directement pour convenir du prix et du retrait.</div><div class="modal-actions" style="justify-content:center"><button class="outline-button" data-close-modal>Fermer</button><a href="tel:${escapeHtml(item.phone.replaceAll(' ', ''))}" class="primary-button">${icon('phone')} Appeler</a></div></div></div>`;
  hydrateIcons(document.querySelector('#modal-root'));
}

function playAudio(text, button) {
  const wasPlaying = button.classList.contains('playing');
  document.querySelectorAll('.mini-audio.playing, .audio-main.playing, .primary-button.playing, .outline-button.playing').forEach((el) => resetAudioButton(el));
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  if (wasPlaying) return;
  button.dataset.defaultHtml = button.innerHTML;
  button.classList.add('playing');
  if (button.classList.contains('mini-audio')) button.innerHTML = `${icon('pause')}<span>Lecture…</span>`;
  else if (button.querySelector('.audio-play')) button.querySelector('.audio-play').innerHTML = icon('pause');
  else button.innerHTML = `${icon('pause')} Lecture…`;
  if (window.speechSynthesis) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = { fr: 'fr-FR', wo: 'wo-SN', ff: 'ff-SN', srr: 'srr-SN' }[state.language] || 'fr-FR';
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

function setView(view) {
  state.view = view;
  state.search = view === 'market' ? state.search : '';
  render();
  if (window.innerWidth < 821) document.querySelector('#sidebar').classList.remove('open');
}

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

hydrateIcons();
document.querySelector('#language-select').value = state.language;
render();

document.addEventListener('click', (event) => {
  const nav = event.target.closest('[data-view]');
  if (nav) { setView(nav.dataset.view); return; }

  const audio = event.target.closest('[data-listen-text]');
  if (audio) { playAudio(audio.dataset.listenText, audio); return; }

  const interest = event.target.closest('[data-interest]');
  if (interest) {
    const item = state.listings.find((listing) => String(listing.id) === interest.dataset.interest);
    if (item) openContact(item);
    return;
  }

  if (event.target.closest('#quick-listen')) {
    const button = event.target.closest('#quick-listen');
    playAudio('Bonjour Boubacar. Voici votre briefing du mardi quinze septembre. Une pluie forte est attendue demain à Thiès. Les oignons se vendent quatre cent cinquante francs le kilo à Sangalkam. En mer, la prudence est recommandée cet après-midi.', button);
    return;
  }
  if (event.target.closest('#price-audio')) {
    playAudio('Les prix du jour. Oignon violet, quatre cent cinquante francs le kilo. Tomate fraîche, six cents francs le kilo. Carotte, cinq cents francs le kilo. Sardine, mille huit cents francs le kilo.', event.target.closest('#price-audio'));
    return;
  }
  if (event.target.closest('[data-open-post]')) { openPostModal(); return; }
  if (event.target.closest('[data-close-modal]')) { closeModal(); return; }

  const marketFilter = event.target.closest('[data-market-filter]');
  if (marketFilter) { state.marketFilter = marketFilter.dataset.marketFilter; render(); return; }
  const priceFilter = event.target.closest('[data-price-filter]');
  if (priceFilter) {
    state.priceFilter = priceFilter.dataset.priceFilter;
    document.querySelectorAll('[data-price-filter]').forEach((item) => item.classList.toggle('active', item === priceFilter));
    const body = document.querySelector('#price-table-body');
    if (body) body.innerHTML = priceTableRows();
    hydrateIcons(document);
    return;
  }

  if (event.target.closest('#sync-button')) {
    const button = event.target.closest('#sync-button');
    button.disabled = true;
    button.innerHTML = `${icon('refresh')} Synchronisation…`;
    hydrateIcons(button);
    setTimeout(() => { button.disabled = false; button.innerHTML = `${icon('check')} Tout est à jour`; hydrateIcons(button); showToast('3 éléments ont été synchronisés.', 'success'); }, 1300);
    return;
  }
  if (event.target.closest('#notification-button')) { showToast('Vous avez 3 alertes importantes à écouter.', 'success'); return; }
  if (event.target.closest('#help-button')) { showToast('Besoin d’aide ? Appelez le 800 00 00 00.', 'success'); return; }
  if (event.target.closest('#mobile-menu')) { document.querySelector('#sidebar').classList.toggle('open'); return; }
  if (event.target.closest('#record-button')) {
    const recordButton = event.target.closest('#record-button');
    simulateRecording(recordButton, document.querySelector('#record-title'), document.querySelector('#record-status'), () => {
      document.querySelector('#voice-product').value = 'Tomates fraîches';
      document.querySelector('#voice-quantity').value = '200 kg';
      document.querySelector('#voice-price').value = '600 F / kg';
      document.querySelector('#voice-zone').value = 'Thiès';
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
    document.querySelectorAll('#market-grid .market-card').forEach((card) => card.classList.toggle('hidden', query && !card.dataset.search.includes(query)));
    const count = [...document.querySelectorAll('#market-grid .market-card')].filter((card) => !card.classList.contains('hidden')).length;
    const countLabel = document.querySelector('.market-section-label');
    if (countLabel) countLabel.textContent = `${count} annonces disponibles`;
  }
  if (event.target.id === 'price-search') {
    const query = event.target.value.trim().toLowerCase();
    document.querySelectorAll('#price-table-body tr').forEach((row) => row.classList.toggle('hidden', query && !row.textContent.toLowerCase().includes(query)));
  }
});

document.addEventListener('submit', (event) => {
  if (event.target.id === 'post-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    const product = String(form.get('product')).trim();
    const newItem = { id: Date.now(), name: product || 'Nouveau produit', type: 'agriculture', emoji: '🌱', image: '', condition: 'Nouvelle annonce', location: String(form.get('place')), price: String(form.get('price')).replace(/\s+/g, ' ') || 'Prix à discuter', unit: '', quantity: String(form.get('quantity')), seller: 'Boubacar Diallo', phone: '+221 78 480 63 31', initials: 'BD', tone: 'linear-gradient(135deg, #e59f6e, #9e5d4d)' };
    state.listings.unshift(newItem);
    closeModal();
    state.marketFilter = 'all';
    setView('market');
    showToast('Annonce enregistrée et ajoutée à vos brouillons.', 'success');
  }
  if (event.target.id === 'voice-form') {
    event.preventDefault();
    showToast('Annonce enregistrée dans la file hors ligne.', 'success');
  }
});

document.querySelector('#language-select').addEventListener('change', (event) => {
  state.language = event.target.value;
  localStorage.setItem('jokko-language', state.language);
  const names = { fr: 'Français', wo: 'Wolof', ff: 'Pulaar', srr: 'Sérère' };
  showToast(`Les prochains audios seront préparés en ${names[state.language]}.`, 'success');
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') { closeModal(); document.querySelector('#sidebar').classList.remove('open'); }
});
