# Jokko — la voix du terrain

MVP de la solution proposée pour le challenge SenHub AI. Jokko réunit les alertes météo, les prix des marchés et les annonces directes pour les agriculteurs, maraîchers et pêcheurs du Sénégal.

## Lancer le MVP

```bash
npm install
npm run dev
```

Puis ouvrir l’URL affichée par Vite. Pour générer la version de production :

```bash
npm run build
npm run preview
```

## Ce qui est démontrable

- **Tableau de bord terrain** : briefing du jour, météo, alertes agricoles et marines, prix et annonces locales.
- **Audio au clic** sur les alertes et les prix via l’API `SpeechSynthesis` du navigateur. Le sélecteur de langue prépare les audios en français, wolof, pulaar ou sérère ; le MVP utilise la voix disponible sur l’appareil en attendant le branchement des modèles KIRIKU/TTS.
- **Prix transparents** : recherche, filtres Agriculture/Pêche et comparaison par zone.
- **Marché direct** : recherche d’annonces, filtre par activité et accès au numéro du producteur après clic sur « Intéressé ».
- **Publication vocale** : parcours « Ma voix », simulation de transcription ASR et formulaire prérempli.
- **Publication manuelle** : création d’une annonce depuis le bouton « Publier une annonce ».
- **Offline-first visible** : indicateur de connexion, file de brouillons et bouton de synchronisation simulée. Les alertes et annonces sont actuellement des données de démonstration locales.
- **Responsive** : interface utilisable sur ordinateur et mobile, avec menu latéral mobile.

## Structure

- `index.html` : shell de l’application et navigation.
- `src/app.js` : vues, données de démo et interactions.
- `src/styles.css` : design system et responsive layout.
- `manifest.webmanifest` : base PWA.
- `vite.config.js` : configuration du serveur compatible avec le live preview.

## Prochaine étape technique

Brancher une API FastAPI/PostgreSQL pour remplacer les données locales, puis connecter les flux ANACIM, une file de synchronisation IndexedDB et les modèles ASR/TTS KIRIKU pour fournir une vraie expérience vocale en wolof, pulaar et sérère.
