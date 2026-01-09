export interface Priority {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  videoId?: string;
}

export interface Measure {
  id: string;
  priorityId: string;
  title: string;
  impact: string;
  tag: string;
  constat: string;
  proposition: string;
  miseEnOeuvre: string;
  indicateur: string;
  videoId?: string;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  priorityId?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  address: string;
}

export const priorities: Priority[] = [
  {
    id: "mobilite",
    title: "Mobilité douce",
    description: "Repenser les déplacements pour une ville plus respirable et accessible à tous.",
    icon: "Bike",
    color: "teal",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "logement",
    title: "Logement abordable",
    description: "Permettre à chacun de se loger dignement dans notre ville.",
    icon: "Home",
    color: "amber",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "ecologie",
    title: "Transition écologique",
    description: "Agir concrètement pour le climat et la biodiversité locale.",
    icon: "Leaf",
    color: "emerald",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "solidarite",
    title: "Solidarité",
    description: "Renforcer le lien social et soutenir les plus fragiles.",
    icon: "Heart",
    color: "rose",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "democratie",
    title: "Démocratie locale",
    description: "Donner la parole aux habitants et co-construire les décisions.",
    icon: "Users",
    color: "violet",
    videoId: "dQw4w9WgXcQ"
  }
];

export const measures: Measure[] = [
  {
    id: "velo-1",
    priorityId: "mobilite",
    title: "Pistes cyclables sécurisées",
    impact: "100 km de nouvelles pistes protégées d'ici 2028",
    tag: "Mobilité",
    constat: "Aujourd'hui, seuls 35% des Strasbourgeois se sentent en sécurité à vélo. Les pistes existantes sont souvent interrompues ou partagées avec les voitures.",
    proposition: "Créer un réseau continu de pistes cyclables protégées reliant tous les quartiers au centre-ville et aux zones d'activité.",
    miseEnOeuvre: "Phase 1 : audit des axes prioritaires. Phase 2 : travaux sur 25km/an. Budget : 8M€/an.",
    indicateur: "Nombre de déplacements vélo quotidiens (+50% visé)",
    videoId: "dQw4w9WgXcQ"
  },
  {
    id: "velo-2",
    priorityId: "mobilite",
    title: "Vélos en libre-service",
    impact: "500 vélos électriques dans tous les quartiers",
    tag: "Mobilité",
    constat: "Le service actuel est concentré en hypercentre et les vélos classiques découragent les trajets vallonnés.",
    proposition: "Étendre le réseau de vélos en libre-service avec une flotte 100% électrique accessible partout.",
    miseEnOeuvre: "Partenariat avec opérateur privé. Stations tous les 300m. Tarif social pour les revenus modestes.",
    indicateur: "Taux d'utilisation et couverture géographique"
  },
  {
    id: "tram-1",
    priorityId: "mobilite",
    title: "Fréquence tram augmentée",
    impact: "Un tram toutes les 4 minutes aux heures de pointe",
    tag: "Mobilité",
    constat: "L'attente trop longue pousse beaucoup d'habitants à reprendre leur voiture.",
    proposition: "Augmenter la fréquence de passage sur les lignes principales et étendre les horaires.",
    miseEnOeuvre: "Acquisition de 12 nouvelles rames. Renforcement des équipes de conducteurs.",
    indicateur: "Temps d'attente moyen et satisfaction usagers"
  },
  {
    id: "logement-1",
    priorityId: "logement",
    title: "Encadrement des loyers",
    impact: "Limiter les hausses abusives dans toute la ville",
    tag: "Logement",
    constat: "Les loyers ont augmenté de 25% en 5 ans, excluant les classes moyennes du centre.",
    proposition: "Appliquer l'encadrement des loyers prévu par la loi et renforcer les contrôles.",
    miseEnOeuvre: "Création d'un observatoire local des loyers. Équipe dédiée aux contrôles. Amendes dissuasives.",
    indicateur: "Évolution des loyers médians par quartier"
  },
  {
    id: "logement-2",
    priorityId: "logement",
    title: "Logements sociaux neufs",
    impact: "2000 nouveaux logements sociaux par mandat",
    tag: "Logement",
    constat: "40 000 demandes en attente, délai moyen d'attribution : 3 ans.",
    proposition: "Construire massivement du logement social de qualité, intégré dans tous les quartiers.",
    miseEnOeuvre: "Partenariats avec bailleurs sociaux. Réserve foncière municipale. Mixité dans chaque opération.",
    indicateur: "Nombre de logements livrés et délai d'attribution"
  },
  {
    id: "ecologie-1",
    priorityId: "ecologie",
    title: "Forêt urbaine",
    impact: "10 000 arbres plantés dans les quartiers",
    tag: "Écologie",
    constat: "Certains quartiers manquent cruellement de végétation et subissent des îlots de chaleur.",
    proposition: "Planter massivement des arbres dans les rues, cours d'école et places publiques.",
    miseEnOeuvre: "Plan de plantation sur 4 ans. Espèces adaptées au changement climatique. Participation citoyenne.",
    indicateur: "Surface végétalisée par habitant"
  },
  {
    id: "ecologie-2",
    priorityId: "ecologie",
    title: "Cantine 100% bio et locale",
    impact: "Tous les enfants mangent sain à l'école",
    tag: "Écologie",
    constat: "Aujourd'hui, seulement 40% des produits servis sont bio ou locaux.",
    proposition: "Passer à 100% de produits bio et locaux dans les cantines scolaires.",
    miseEnOeuvre: "Contrats avec agriculteurs locaux. Légumerie municipale. Formation des cuisiniers.",
    indicateur: "Part de produits bio/locaux et satisfaction des enfants"
  },
  {
    id: "solidarite-1",
    priorityId: "solidarite",
    title: "Épiceries solidaires",
    impact: "Une épicerie solidaire par quartier",
    tag: "Solidarité",
    constat: "L'aide alimentaire classique est stigmatisante et ne permet pas de choisir.",
    proposition: "Créer des épiceries solidaires où chacun peut acheter à prix réduit des produits de qualité.",
    miseEnOeuvre: "Partenariat avec associations. Locaux municipaux mis à disposition. Produits invendus récupérés.",
    indicateur: "Nombre de bénéficiaires et diversité des produits"
  },
  {
    id: "solidarite-2",
    priorityId: "solidarite",
    title: "Maisons de santé",
    impact: "Accès aux soins à moins de 15 min pour tous",
    tag: "Solidarité",
    constat: "Certains quartiers sont de véritables déserts médicaux.",
    proposition: "Ouvrir des maisons de santé pluridisciplinaires dans les quartiers sous-dotés.",
    miseEnOeuvre: "Investissement immobilier municipal. Aides à l'installation pour médecins. Coordination avec l'hôpital.",
    indicateur: "Temps d'accès moyen à un médecin généraliste"
  },
  {
    id: "democratie-1",
    priorityId: "democratie",
    title: "Budget participatif",
    impact: "5% du budget municipal décidé par les habitants",
    tag: "Démocratie",
    constat: "Les citoyens se sentent exclus des décisions qui les concernent.",
    proposition: "Permettre aux habitants de proposer et voter pour des projets financés par la ville.",
    miseEnOeuvre: "Plateforme en ligne et réunions de quartier. Vote ouvert à tous dès 16 ans. Suivi transparent.",
    indicateur: "Taux de participation et projets réalisés"
  },
  {
    id: "democratie-2",
    priorityId: "democratie",
    title: "Conseils de quartier",
    impact: "Co-décision sur l'aménagement local",
    tag: "Démocratie",
    constat: "Les conseils actuels sont consultatifs et peu suivis d'effets.",
    proposition: "Donner un vrai pouvoir de décision aux conseils de quartier sur les projets locaux.",
    miseEnOeuvre: "Budget dédié par quartier. Élus référents. Compte-rendu public des décisions.",
    indicateur: "Nombre de décisions prises par les conseils"
  }
];

export const videos: Video[] = [
  {
    id: "video-1",
    title: "Notre vision pour Strasbourg",
    description: "Présentation de notre projet pour les 6 prochaines années.",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "video-2",
    title: "Rencontre au marché de la Krutenau",
    description: "Échanges avec les habitants sur leurs préoccupations quotidiennes.",
    youtubeId: "dQw4w9WgXcQ"
  },
  {
    id: "video-3",
    title: "La mobilité douce en action",
    description: "Visite des aménagements cyclables réussis à Copenhague.",
    youtubeId: "dQw4w9WgXcQ",
    priorityId: "mobilite"
  },
  {
    id: "video-4",
    title: "Logement : nos solutions",
    description: "Détail de notre plan pour le logement abordable.",
    youtubeId: "dQw4w9WgXcQ",
    priorityId: "logement"
  },
  {
    id: "video-5",
    title: "Rencontre avec les agriculteurs locaux",
    description: "Comment approvisionner nos cantines en produits locaux.",
    youtubeId: "dQw4w9WgXcQ",
    priorityId: "ecologie"
  },
  {
    id: "video-6",
    title: "Le budget participatif expliqué",
    description: "Comment ça marche et comment participer.",
    youtubeId: "dQw4w9WgXcQ",
    priorityId: "democratie"
  }
];

export const events: Event[] = [
  {
    id: "event-1",
    title: "Réunion publique Centre",
    description: "Présentation du programme et échanges avec les habitants du centre-ville.",
    date: "2026-01-25",
    time: "19:00",
    location: "Salle de la Bourse",
    address: "1 Place de la Bourse, Strasbourg"
  },
  {
    id: "event-2",
    title: "Marche pour le climat",
    description: "Rejoignez-nous pour une marche conviviale en faveur de la transition écologique.",
    date: "2026-02-01",
    time: "14:00",
    location: "Place Kléber",
    address: "Place Kléber, Strasbourg"
  },
  {
    id: "event-3",
    title: "Atelier vélo participatif",
    description: "Apprenez à réparer votre vélo et échangez sur nos propositions mobilité.",
    date: "2026-02-08",
    time: "10:00",
    location: "Parc de l'Orangerie",
    address: "Parc de l'Orangerie, Strasbourg"
  },
  {
    id: "event-4",
    title: "Café citoyen Neudorf",
    description: "Discussion informelle autour d'un café sur l'avenir du quartier.",
    date: "2026-02-15",
    time: "10:30",
    location: "Café du Commerce",
    address: "42 Route du Polygone, Strasbourg"
  },
  {
    id: "event-5",
    title: "Réunion publique Hautepierre",
    description: "Venez échanger sur les enjeux du quartier et nos propositions.",
    date: "2026-02-22",
    time: "18:30",
    location: "Centre socio-culturel",
    address: "1 Place André Maurois, Strasbourg"
  }
];

export const getMeasuresByPriority = (priorityId: string) => 
  measures.filter(m => m.priorityId === priorityId);

export const getPriorityById = (id: string) => 
  priorities.find(p => p.id === id);

export const getMeasureById = (id: string) => 
  measures.find(m => m.id === id);

export const getVideosByPriority = (priorityId: string) => 
  videos.filter(v => v.priorityId === priorityId);
