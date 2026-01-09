# utiles67 — Site de campagne municipale

Site statique production-ready pour le mouvement citoyen utiles67 (Strasbourg).

## 🚀 Déploiement sur Cloudflare Pages

1. **Connecter le repo Git** à Cloudflare Pages
2. **Build command** : `npm run build`
3. **Output directory** : `dist`
4. **Node version** : 18+

Le site sera automatiquement redéployé à chaque push sur la branche principale.

---

## 📁 Structure du projet

```
client/
├── src/
│   ├── components/     # Composants UI réutilisables
│   ├── pages/          # Pages (Home, MeasureDetail, Rejoindre...)
│   ├── data/           # Données du site (mesures, équipe, événements)
│   ├── lib/            # Utilitaires (formulaires, contributions)
│   ├── hooks/          # Custom hooks React
│   ├── config.ts       # Configuration (URLs, téléphone, etc.)
│   └── index.css       # Styles globaux (Tailwind)
├── public/
│   ├── favicon.png     # Favicon
│   └── opengraph.jpg   # Image de partage social
└── index.html          # Template HTML
```

---

## ⚙️ Configuration

### Fichier `client/src/config.ts`

```typescript
export const config = {
  // Téléphone affiché sur le site
  phoneNumber: "03 88 00 00 00",
  phoneHours: "Lun-Ven 9h-18h",
  
  // URLs des formulaires Tally (laisser vide = fallback localStorage)
  formJoinUrl: "",        // Formulaire "Rejoindre"
  formQuestionUrl: "",    // Formulaire "Questions"
  formEngagementUrl: "",  // Formulaire "Soutiens/Aider"
  
  // Code admin pour /admin-local
  adminCode: "utiles2026",
};
```

### Configurer Tally

1. Créer un compte sur [tally.so](https://tally.so)
2. Créer 3 formulaires (Rejoindre, Questions, Engagement)
3. Copier les URLs d'endpoint dans `config.ts`

Si les URLs sont vides, les données sont stockées en localStorage et consultables sur `/admin-local`.

---

## 📝 Modifier le contenu

### Ajouter une mesure

Éditer `client/src/data/index.ts` :

```typescript
export const measures: Measure[] = [
  {
    id: "nouvelle-mesure-1",           // ID unique et stable
    priorityId: "ecologie",            // Lien vers une priorité
    title: "Titre de la mesure",
    impact: "Impact en une phrase",
    tag: "Écologie",
    constat: "Description du problème...",
    proposition: "Notre solution...",
    miseEnOeuvre: "Comment on fait...",
    indicateur: "Comment on mesure le succès...",
    coverImage: monImage,              // Import d'image (optionnel)
    coverAlt: "Description de l'image",
    baseSupportCount: 500,             // Compteur de base (optionnel)
    baseReactionCount: 25,
    isKeyMeasure: true,                // Mesure structurante (optionnel)
  },
  // ...
];
```

### Ajouter un profil équipe

```typescript
export const team: TeamMember[] = [
  {
    id: "nouveau-membre",
    name: "Prénom",
    quartier: "Neudorf",
    role: "Profession",
    utilesRole: "Référent·e Thématique",  // Rôle UTILES (optionnel)
    quote: "Citation inspirante...",
    bio: "Biographie courte...",
    photo: "",                            // Chemin image (optionnel)
    tags: ["Écologie", "Solidarité"],
    videoUrl: "",                         // URL YouTube (optionnel)
  },
];
```

### Ajouter un événement

```typescript
export const events: Event[] = [
  {
    id: "nouvel-event",
    title: "Réunion publique",
    description: "Description de l'événement...",
    date: "2026-03-15",     // Format YYYY-MM-DD
    time: "19:00",          // Format HH:MM
    location: "Nom du lieu",
    address: "Adresse complète",
  },
];
```

---

## 🖼️ Gérer les images

### Ajouter une image

1. Placer l'image dans `attached_assets/` ou `client/public/assets/`
2. Importer dans `client/src/data/index.ts` :

```typescript
import monImage from "@assets/mon-image.jpg";
```

3. Utiliser dans les données :

```typescript
coverImage: monImage,
```

### Forcer le rafraîchissement du cache

Ajouter `?v=2` (ou incrémenter) à l'URL de l'image dans les données :

```typescript
coverImage: "assets/measures/velo.jpg?v=2",
```

### Tailles recommandées

| Type | Dimensions | Poids max | Format |
|------|------------|-----------|--------|
| Hero | 1200×600px | 150 Ko | JPG 80% |
| Cover mesure | 800×400px | 80 Ko | JPG 80% |
| Photo équipe | 400×400px | 50 Ko | JPG 85% |
| Favicon | 32×32 + 180×180px | 5 Ko | PNG |

Utiliser [Squoosh.app](https://squoosh.app) pour optimiser.

---

## 🔒 Sécurité anti-spam

Tous les formulaires incluent :
- **Honeypot** : champ caché qui piège les bots
- **Délai 2s** : bouton submit désactivé pendant 2 secondes

Aucune configuration nécessaire, c'est automatique.

---

## 🧪 Tester en local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5000`.

---

## 📊 Page admin locale

Accéder à `/admin-local` avec le code configuré dans `config.ts` pour :
- Voir toutes les contributions (soutiens, aides, commentaires)
- Exporter en JSON
- Vider le localStorage

---

## ✅ Checklist avant go-live

### Obligatoire

- [ ] Numéro de téléphone réel dans `config.ts`
- [ ] Contenu des mesures validé
- [ ] Photos équipe (ou placeholders acceptables)
- [ ] Image hero réelle
- [ ] Test mobile complet (iPhone + Android)
- [ ] Test formulaires
- [ ] Build sans erreur (`npm run build`)
- [ ] Déploiement test Cloudflare

### Recommandé

- [ ] URLs Tally configurées (ou fallback localStorage accepté)
- [ ] Image OpenGraph personnalisée
- [ ] Favicon définitif

---

## 🛠️ Stack technique

- **React 18** — UI
- **Vite** — Build
- **Tailwind CSS v4** — Styles
- **Wouter** — Routing
- **Framer Motion** — Animations
- **Lucide React** — Icônes

---

## 📞 Support

Pour toute question technique, contacter l'équipe de développement.
