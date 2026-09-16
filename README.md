# Jokko — la voix du terrain (MVP Mobile Dual-Rôle)

MVP de la solution SenHub AI. **Jokko est désormais une app mobile PWA avec deux interfaces distinctes** :

- **Producteur / Pêcheur** : publie ses récoltes, gère son stock, reçoit les alertes météo vocales et les demandes d'achat.
- **Vendeur / Acheteur** : parcourt le marché direct, compare les prix, contacte sans intermédiaire, suit favoris & commandes.

> Objectif : transparence des prix, accès vocal en langues locales (Wolof, Pulaar, Sérère), fonctionnement hors ligne.

## Lancer le MVP

```bash
npm install
npm run dev
```

Ouvrir l'URL Vite affichée (preview mobile disponible). Production :

```bash
npm run build
npm run preview
```

## Authentification dual-rôle

- **Écran d'accueil** : choix du rôle avec cartes explicatives (Producteur vs Vendeur)
- **Connexion / Inscription** : par téléphone + mot de passe, rôle verrouillé
  - Producteur : nom, téléphone, mot de passe, localité, activité (agriculture / pêche / mixte)
  - Vendeur : nom, téléphone, mot de passe, localité, type de commerce (détaillant, grossiste, transformatrice, restauratrice)
- **Comptes démo** (mot de passe `1234` pour tous) :
  - Producteurs : `77 248 01 846` Fatou Sarr (Sangalkam), `78 480 63 31` Boubacar Diallo (Thiès), `78 510 33 67` Ibrahima Ba (Mbour, pêcheur)
  - Vendeurs : `77 123 45 67` Aminata Sow (Dakar, grossiste), `76 400 27 88` Marième Seck (Thiès, détaillante)
- **Persistance** : `localStorage` (`jokko-users`, `jokko-auth`, `jokko-listings`, `jokko-favorites-map`, `jokko-inquiries`)
- **Déconnexion** depuis sidebar, profil, ou menu mobile.

## Interfaces

### Producteur / Pêcheur
- **Tableau de bord** : briefing vocal personnalisé (stock + demandes), météo locale, stats annonces/stock/demandes, dernières demandes, mes produits en ligne
- **Météo & alertes** : premier onglet après le tableau de bord, alertes ANACIM avec audio TTS localisé
- **Mes produits** : CRUD complet de ses annonces (modifier / supprimer), stock total, bouton publier
- **Marché local** : veille concurrentielle (voir ce que vendent les autres)
- **Ma voix** : publication vocale ASR simulée → préremplit le formulaire → publie
- **Demandes** : liste des acheteurs intéressés (inquiries reçues) avec rappel téléphonique
- **Profil** : infos, stats, type d'activité, déconnexion

### Vendeur / Acheteur
- **Tableau de bord** : briefing opportunités, 12 annonces fraîches, bonnes affaires, prix du marché
- **Marché** : recherche, filtres agriculture/pêche, favoris (cœur), bouton Commander (crée une inquiry + ouvre contact)
- **Prix du marché** : table avec évolution, recherche, audio
- **Favoris** : produits suivis, persistant par utilisateur
- **Commandes** : inquiries envoyées, statut pending, bouton appeler
- **Météo** : même module
- **Profil** : type de commerce, favoris, commandes

## App Mobile

- **PWA** : `manifest.webmanifest` avec `display: standalone`, thème `#116b4f`, icône SVG
- **Responsive** : sidebar desktop, **bottom navigation** mobile (5 items)
  - Producteur : Accueil, Météo, bouton central Publier (+), Produits, Profil
  - Vendeur : Accueil, Marché, bouton central Prix (chart), Favoris, Profil
- **Offline-first** : carte offline, bouton synchroniser, données en localStorage, toasts
- **Audio** : sélecteur visible en haut pour choisir Français, Wolof, Pulaar ou Sérère ; scripts audio localisés pour briefings, alertes et prix via `SpeechSynthesis` (`fr-FR` / `wo-SN` / `ff-SN` / `srr-SN`)
- **Vocal** : simulation enregistrement avec animation dots

## Structure

- `index.html` : shell minimal PWA, #app, toasts, modals
- `src/app.js` : ~1100 lignes, state, auth dual-rôle, 10 vues, modals, audio, favoris, inquiries, bottom nav, mobile menu
- `src/styles.css` : design system + auth (role-grid, auth-card, demo-accounts) + bottom-nav + profile + orders
- `manifest.webmanifest` : config PWA mobile
- `vite.config.js` : host 0.0.0.0 + allowedHosts pour preview

## Flux technique

1. Pas d'utilisateur → `authWelcomeView` → choix rôle → `authFormView` (login/register)
2. Après auth → `renderAppShell` avec navConfig selon rôle → `dashboardView` dispatch
3. Producteur publie → `openPostModal` → `state.listings.unshift` → `saveAll()` → visible pour vendeurs
4. Vendeur clique Intéressé/Commander → crée inquiry dans `state.inquiries` → toast + modal contact avec tel
5. Favoris toggle → `favoritesMap[userId]` → persistant
6. Déconnexion → clear auth → retour welcome

## Prochaine étape

- Backend FastAPI + PostgreSQL pour users/listings/inquiries, JWT
- IndexedDB pour file offline + sync
- Vrai ASR/TTS KIRIKU Wolof/Pulaar/Sérère
- Upload photos, géolocalisation, paiement mobile money
