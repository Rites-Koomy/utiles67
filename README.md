# utiles67 — Site de campagne municipale

Site statique production-ready pour le mouvement citoyen utiles67 (Strasbourg).  
Déployable sur **Cloudflare Pages** via GitHub.

---

## 🚀 Déploiement sur Cloudflare Pages

### Étape 1 : Connecter GitHub à Cloudflare Pages

1. Aller sur [dash.cloudflare.com](https://dash.cloudflare.com)
2. Menu latéral → **Workers & Pages**
3. Cliquer **Create** → **Pages** → **Connect to Git**
4. Autoriser Cloudflare à accéder à votre compte GitHub
5. Sélectionner le repository `utiles67`

### Étape 2 : Configurer le build

| Paramètre | Valeur |
|-----------|--------|
| **Production branch** | `main` |
| **Build command** | `npm run build` |
| **Build output directory** | `dist/public` |
| **Root directory** | `/` (laisser vide) |

### Étape 3 : Déployer

1. Cliquer **Save and Deploy**
2. Attendre le build (~1-2 min)
3. Le site est live sur `https://utiles67.pages.dev`

### Étape 4 : Domaine personnalisé (optionnel)

1. Dans Cloudflare Pages → votre projet → **Custom domains**
2. Ajouter `utiles67.fr` (ou votre domaine)
3. Cloudflare configure automatiquement le DNS et le SSL

---

## ⚙️ Configuration avant GO LIVE

### Fichier `client/src/config.ts`

```typescript
export const config = {
  // Téléphone affiché sur le site (OBLIGATOIRE)
  phoneNumber: "06 52 81 71 34",
  phoneHours: "Lun-Ven 9h-18h",
  
  // URLs Tally (laisser vide = fallback localStorage)
  formJoinUrl: "",        // https://tally.so/r/xxxxx
  formQuestionUrl: "",    // https://tally.so/r/yyyyy
  formEngagementUrl: "",  // https://tally.so/r/zzzzz
  
  // Code admin pour /admin-local
  adminCode: "utiles2026",
};
```

### Créer les formulaires Tally

1. Créer un compte sur [tally.so](https://tally.so) (gratuit, serveurs EU)
2. Créer 3 formulaires :
   - **Rejoindre** : champs `nom`, `email`, `quartier`
   - **Questions** : champs `name`, `email`, `message`
   - **Engagement** : champs `type`, `measureId`, `email`, `text`
3. Pour chaque formulaire : **Integrations** → **Webhooks** → copier l'URL
4. Coller les URLs dans `config.ts`

Si les URLs restent vides, les données sont stockées en localStorage et consultables sur `/admin-local`.

---

## 📁 Structure du projet

```
client/
├── src/
│   ├── components/     # Composants UI
│   ├── pages/          # Pages (Home, Mesures, Rejoindre...)
│   ├── data/           # Données du site
│   ├── lib/            # Utilitaires (formulaires, contributions)
│   ├── config.ts       # Configuration unique
│   └── index.css       # Styles Tailwind
├── public/
│   ├── favicon.png
│   └── opengraph.jpg
└── index.html
```

---

## 📝 Modifier le contenu

### Ajouter une mesure

Éditer `client/src/data/index.ts` :

```typescript
{
  id: "nouvelle-mesure-1",
  priorityId: "ecologie",
  title: "Titre de la mesure",
  impact: "Impact en une phrase",
  tag: "Écologie",
  constat: "Description du problème...",
  proposition: "Notre solution...",
  miseEnOeuvre: "Comment on fait...",
  indicateur: "Comment on mesure le succès...",
  baseSupportCount: 500,
  isKeyMeasure: true,
}
```

### Ajouter un profil équipe

```typescript
{
  id: "nouveau-membre",
  name: "Marie",
  quartier: "Neudorf",
  role: "Enseignante",
  utilesRole: "Référente Éducation",
  quote: "Citation inspirante...",
  bio: "Biographie courte...",
  videoUrl: "https://youtube.com/watch?v=...",
}
```

### Ajouter un événement

```typescript
{
  id: "nouvel-event",
  title: "Réunion publique",
  description: "Description...",
  date: "2026-03-15",
  time: "19:00",
  location: "Salle de la Bourse",
  address: "1 Place de la Bourse, Strasbourg",
}
```

---

## 🖼️ Gérer les images

### Remplacer une image

1. Placer la nouvelle image dans `attached_assets/` ou `client/public/assets/`
2. Mettre à jour le chemin dans `client/src/data/index.ts`
3. Incrémenter le query string pour invalider le cache :

```typescript
coverImage: "assets/measures/velo.jpg?v=2",  // v=1 → v=2
```

### Tailles recommandées

| Type | Dimensions | Poids max |
|------|------------|-----------|
| Hero | 1200×600px | 150 Ko |
| Cover mesure | 800×400px | 80 Ko |
| Photo équipe | 400×400px | 50 Ko |

Utiliser [Squoosh.app](https://squoosh.app) pour optimiser.

---

## 📰 Revue de presse « Actu »

La rubrique « Actu » regroupe les liens externes sélectionnés par l’équipe, accessible via la page `/actu`, la navigation principale et le bloc « Dernières retombées » sur la home.

### Ajouter un lien

1. Ajouter un objet dans `client/src/content/actu.links.json` (voir l’exemple ci-dessous).
2. Lancer `npm run prebuild`. Le script `script/build-link-previews.ts` valide l’URL, récupère les métadonnées Open Graph/Twitter, met à jour `client/src/content/actu.previews.json` et conserve un cache `.cache/link-previews/*.json`.
3. Committer `client/src/content/actu.links.json` et, si besoin, `client/src/content/actu.previews.json`.

Exemple d’entrée :

```json
{
  "id": "dna-strasbourg",
  "url": "https://www.dna.fr/strasbourg",
  "publishedAt": "2026-02-14",
  "sourceLabel": "DNA",
  "pinned": true
}
```

### Préviews contrôlées

- Le script applique les gardes SSRF : seules les URLs `http/https` sont autorisées, les IPs privées/localhost sont bloquées et une allowlist peut être activée via `ALLOWED_PREVIEW_DOMAINS` (séparée par des virgules).
- Le TTL est de 24 h minimum (`LINK_PREVIEW_TTL_HOURS`), et la requête est interrompue après 8000 ms (`LINK_PREVIEW_TIMEOUT_MS`).
- Les cartes adaptent leur affichage : si aucune preview n’est récupérée, la carte affiche l’URL, le domaine et un bouton « Lire l’article ».

Ces étapes s’exécutent automatiquement sur Cloudflare Pages grâce au hook `prebuild` (il précède `npm run build`).

---

## 📸 Photos de campagne

La section « Photos de campagne » sur la home affiche un diaporama responsive et un lien vers `/photos` qui ouvre la galerie complète.

### Ajouter une photo

1. Ajouter une entrée dans `client/src/content/campaign.photos.json` en respectant la structure :

```json
{
  "file": "WhatsApp Image 2026-01-10 at 13.08.22.jpeg",
  "alt": "Description courte de la photo",
  "caption": "Titre ou contexte"
}
```

2. Les photos doivent pointer vers `https://pub-b18faf7762044b018cdf29445a4ba5c7.r2.dev/Image-campagne/` : le fichier `campaignPhotos.ts` construit l’URL complète, encode les caractères spéciaux et expose `campaignPhotos`.
3. **Ne jamais** placer les images dans le repo. Après éditeur le JSON, relancer `npm run dev:client` (ou `npm run build` en prod).

Le slideshow utilise Swiper/local autoplay, et la page `/photos` propose la grille complète avec des liens vers chaque fichier (ouverture dans un nouvel onglet).

---

## 🔒 Sécurité anti-spam

Tous les formulaires incluent :
- **Honeypot** : champ caché qui piège les bots
- **Délai 2s** : bouton submit désactivé pendant 2 secondes

Aucune configuration nécessaire.

---

## ✅ Checklist GO LIVE

### Avant déploiement

- [ ] Numéro de téléphone réel dans `config.ts`
- [ ] Contenu des mesures validé par l'équipe
- [ ] Photos équipe (ou placeholders acceptés)
- [ ] Image hero définitive
- [ ] Test mobile complet (iPhone + Android)
- [ ] Build local sans erreur (`npm run build`)

### Tests sur preview URL

- [ ] Home charge correctement
- [ ] Hero s'affiche avec image
- [ ] Feed mesures scrollable
- [ ] Fiche mesure s'ouvre au tap
- [ ] "Je soutiens" fonctionne + compteur s'incrémente
- [ ] "Je veux aider" ouvre modale → formulaire OK
- [ ] Commentaire s'envoie
- [ ] "Posez votre question" fonctionne
- [ ] Page Rejoindre → formulaire + téléphone visible
- [ ] Profil équipe → modale → rôle UTILES visible
- [ ] Profil avec vidéo → embed YouTube OK
- [ ] Aucune erreur bloquante dans console
- [ ] Navigation bottom bar fonctionnelle

### Après déploiement

- [ ] URL pages.dev accessible
- [ ] Domaine custom configuré (si applicable)
- [ ] SSL actif (cadenas vert)
- [ ] Partage social (OpenGraph) vérifié

---

## 📊 Page admin locale

Accéder à `/admin-local` avec le code dans `config.ts` pour :
- Voir toutes les contributions (soutiens, aides, commentaires)
- Voir les inscriptions et questions
- Exporter en JSON
- Vider le localStorage

---

## 🛠️ Développement local

```bash
npm install
npm run dev
```

Le site sera accessible sur `http://localhost:5000`.

---

## 📞 Support

Pour toute question technique, contacter l'équipe de développement.
