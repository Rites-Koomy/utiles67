import heroImage from "@assets/generated_images/strasbourg_green_peaceful_cityscape.png";
import cyclePath from "@assets/stock_images/bicycle_path_in_euro_29b3f3ae.jpg";
import apartment from "@assets/stock_images/modern_residential_a_2814c14f.jpg";
import urbanPark from "@assets/stock_images/urban_park_with_tree_d4acad64.jpg";
import community from "@assets/stock_images/community_gathering__3ece0604.jpg";
import democracy from "@assets/stock_images/citizens_voting_demo_81baa662.jpg";
import youth from "@assets/stock_images/young_people_student_2cf858dd.jpg";

export { heroImage, youth };

export interface Priority {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  videoId?: string;
  heroImage?: string;
  heroAlt?: string;
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
  coverImage?: string;
  coverAlt?: string;
  baseSupportCount?: number;
  baseReactionCount?: number;
  isKeyMeasure?: boolean;
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

export interface TeamMember {
  id: string;
  name: string;
  quartier: string;
  role?: string;
  utilesRole?: string;
  quote: string;
  bio?: string;
  photo?: string;
  tags?: string[];
  videoUrl?: string;
}

export const priorities: Priority[] = [
  {
    id: "logement",
    title: "Logement digne et abordable",
    description: "Le logement, c'est la base de la dignité. Transparence, contrôle et accès pour tous.",
    icon: "Home",
    color: "amber",
    heroImage: apartment,
    heroAlt: "Immeubles résidentiels à Strasbourg"
  },
  {
    id: "services-publics",
    title: "Services publics de proximité",
    description: "Une ville proche de ses habitants, c'est une ville vivante. Remettre du visage humain.",
    icon: "Building2",
    color: "blue",
    heroImage: community,
    heroAlt: "Accueil en mairie de quartier"
  },
  {
    id: "emploi",
    title: "Emploi local et inclusion",
    description: "Vivre et travailler dignement à Strasbourg. Soutenir ceux qui créent ici.",
    icon: "Briefcase",
    color: "orange",
    heroImage: community,
    heroAlt: "Artisans et commerçants de quartier"
  },
  {
    id: "ecologie",
    title: "Écologie et santé",
    description: "Respirer, manger sain, se déplacer en sécurité : ce n'est pas un luxe.",
    icon: "Leaf",
    color: "emerald",
    heroImage: urbanPark,
    heroAlt: "Espaces verts à Strasbourg"
  },
  {
    id: "mobilite",
    title: "Mobilités actives",
    description: "Se déplacer librement et en sécurité, quel que soit son quartier.",
    icon: "Bike",
    color: "teal",
    heroImage: cyclePath,
    heroAlt: "Piste cyclable sécurisée"
  },
  {
    id: "democratie",
    title: "Démocratie locale",
    description: "Les habitants décident avec nous, pas seulement une fois tous les 6 ans.",
    icon: "Users",
    color: "violet",
    heroImage: democracy,
    heroAlt: "Réunion citoyenne"
  }
];

export const measures: Measure[] = [
  {
    id: "logement-transparence",
    priorityId: "logement",
    title: "Transparence du logement social",
    impact: "Fin de l'opacité des attributions",
    tag: "Logement",
    constat: "« J'ai fait toutes les démarches, j'attends depuis des années, et je ne comprends toujours pas pourquoi certains passent avant nous. » Les habitants dénoncent l'opacité des attributions et le sentiment d'abandon face aux bailleurs.",
    proposition: "Création d'un référent municipal « Logement social et transparence », centralisation des signalements citoyens, saisine de l'ANCOLS en cas de dysfonctionnements, et publication d'un rapport annuel public.",
    miseEnOeuvre: "Nomination d'un référent dédié. Plateforme de signalement via Ma Voix Quartier. Instruction systématique des plaintes. Rapport annuel présenté en conseil municipal.",
    indicateur: "Nombre de signalements traités, délai moyen de réponse, résultats des contrôles ANCOLS",
    coverImage: apartment,
    coverAlt: "Logements sociaux à Strasbourg",
    baseSupportCount: 1847,
    baseReactionCount: 72,
    isKeyMeasure: true
  },
  {
    id: "logement-habitat",
    priorityId: "logement",
    title: "Contrôle local de l'habitat",
    impact: "Plus personne n'abandonne un logement indigne",
    tag: "Logement",
    constat: "« Quand l'humidité rend les enfants malades, on ne sait plus à qui s'adresser. Personne ne répond. » La dégradation de certains logements (humidité, chauffage défaillant) reste sans réponse.",
    proposition: "Renforcer les moyens des commissions d'urbanisme pour agir sur la salubrité. Créer un droit d'alerte officiel envers les propriétaires. Coopération renforcée entre Ville, CCAS et associations.",
    miseEnOeuvre: "Extension du permis de louer. Lutte contre les marchands de sommeil. Priorité à la rénovation énergétique. Reconversion des friches.",
    indicateur: "Nombre de logements contrôlés, procédures engagées contre les propriétaires défaillants",
    coverImage: "/measures/logement-habitat.jpg",
    coverAlt: "Contrôle de l'habitat",
    baseSupportCount: 1234,
    baseReactionCount: 45
  },
  {
    id: "logement-locations",
    priorityId: "logement",
    title: "Encadrement des locations touristiques",
    impact: "Protéger les logements pour les habitants",
    tag: "Logement",
    constat: "De nombreux appartements quittent le marché locatif classique pour devenir des locations touristiques, aggravant la pénurie de logements pour les Strasbourgeois.",
    proposition: "Encadrement strict des locations touristiques type Airbnb, avec contrôles renforcés et sanctions dissuasives.",
    miseEnOeuvre: "Plateforme de déclaration obligatoire. Équipe de contrôle dédiée. Limitation du nombre de nuits autorisées. Amendes en cas de fraude.",
    indicateur: "Nombre de logements remis sur le marché locatif classique",
    coverImage: "/measures/logement-locations.jpg",
    coverAlt: "Location touristique"
  },
  {
    id: "services-bus-mairie",
    priorityId: "services-publics",
    title: "Bus-Mairie itinérant",
    impact: "La Ville vient à vous, dans tous les quartiers",
    tag: "Services publics",
    constat: "« On me renvoie d'un service à l'autre. À la fin, j'abandonne. » L'administration est devenue un mur : guichets éloignés ou saturés, dématérialisation brutale sans accompagnement.",
    proposition: "Un bus municipal équipé pour les démarches simples (informations, orientation), présent régulièrement dans les quartiers périphériques et les zones peu desservies.",
    miseEnOeuvre: "Aménagement d'un véhicule dédié. Planning de tournées publié à l'avance. Agents formés à l'accueil et à l'orientation. Présence dans chaque quartier au moins une fois par semaine.",
    indicateur: "Nombre de passages, nombre de démarches réalisées, satisfaction des usagers",
    coverImage: community,
    coverAlt: "Bus-Mairie dans un quartier",
    baseSupportCount: 2156,
    baseReactionCount: 89,
    isKeyMeasure: true
  },
  {
    id: "services-marches",
    priorityId: "services-publics",
    title: "Stands municipaux sur les marchés",
    impact: "Parlons Services Publics, sans rendez-vous",
    tag: "Services publics",
    constat: "« Tout est en ligne, mais quand on ne maîtrise pas Internet, on fait comment ? » Cette distance crée une solitude administrative, particulièrement chez les seniors et les familles précaires.",
    proposition: "Présence visible et conviviale de la Ville sur les marchés de quartier : information, écoute, démarches rapides et orientation immédiate, sans rendez-vous.",
    miseEnOeuvre: "Stand léger installé chaque jour de marché. Agents municipaux ou bénévoles formés. Documentation simplifiée disponible.",
    indicateur: "Nombre de personnes orientées, taux de résolution au premier contact",
    coverImage: "/measures/services-marches.jpg",
    coverAlt: "Stand sur un marché"
  },
  {
    id: "services-voisins-relais",
    priorityId: "services-publics",
    title: "Voisins-Relais",
    impact: "Des ambassadeurs de quartier pour vous aider",
    tag: "Services publics",
    constat: "« J'ai raté des aides parce que je n'avais pas les bons papiers au bon moment. Personne ne m'a expliqué. » Beaucoup abandonnent leurs droits par découragement.",
    proposition: "Habitants volontaires, formés par la Ville, en lien avec les CSC et associations, pour accompagner les démarches et orienter vers les bons services.",
    miseEnOeuvre: "Appel à candidatures. Formation initiale et continue. Coordination avec les centres socioculturels. Reconnaissance officielle du statut.",
    indicateur: "Nombre de Voisins-Relais actifs, nombre de personnes accompagnées",
    coverImage: "/measures/services-voisins-relais.jpg",
    coverAlt: "Voisins qui s'entraident"
  },
  {
    id: "services-numerique",
    priorityId: "services-publics",
    title: "Pas à Pas Numérique",
    impact: "Ateliers gratuits contre l'illectronisme",
    tag: "Services publics",
    constat: "« Il suffirait parfois d'une personne pour expliquer calmement. Pas d'un site Internet de plus. » Le numérique exclut ceux qui n'y ont pas accès.",
    proposition: "Ateliers gratuits, pratiques et réguliers pour apprendre à utiliser les outils numériques essentiels (CAF, santé, transports, école).",
    miseEnOeuvre: "Partenariat avec bibliothèques et maisons de quartier. Bénévoles et agents formés. Horaires adaptés (soirs et week-ends).",
    indicateur: "Nombre de participants, progression mesurée, autonomie acquise",
    coverImage: "/measures/services-numerique.jpg",
    coverAlt: "Atelier numérique"
  },
  {
    id: "services-referent",
    priorityId: "services-publics",
    title: "Référent administratif de proximité",
    impact: "Un interlocuteur unique pour les cas complexes",
    tag: "Services publics",
    constat: "Les situations complexes se perdent entre les services. Personne ne suit le dossier de bout en bout.",
    proposition: "Un agent identifié par quartier, chargé de suivre les situations complexes et d'éviter le renvoi d'un service à l'autre.",
    miseEnOeuvre: "Désignation dans chaque secteur. Formation au suivi transversal. Lien direct avec les services municipaux et partenaires.",
    indicateur: "Nombre de dossiers suivis, délai de résolution, satisfaction des usagers",
    coverImage: "/measures/services-referent.jpg",
    coverAlt: "Référent administratif"
  },
  {
    id: "emploi-strasimpact",
    priorityId: "emploi",
    title: "Stras'Impact",
    impact: "3000 à 15 000€ pour débloquer les projets locaux",
    tag: "Emploi",
    constat: "« Il ne nous manque pas l'envie, il nous manque un soutien au bon moment. » Artisans, indépendants et porteurs de projets racontent tous la même réalité : accès compliqué aux financements, sentiment que les aides vont toujours aux mêmes.",
    proposition: "Dispositif municipal de microfinancement et d'accompagnement pour débloquer des projets locaux à fort impact. Investir là où quelques milliers d'euros font toute la différence.",
    miseEnOeuvre: "Enveloppe dédiée de 3000 à 15 000€ par projet. Accompagnement obligatoire pour sécuriser les projets. Jury citoyen pour la sélection.",
    indicateur: "Nombre de projets financés, emplois créés ou consolidés, pérennité à 2 ans",
    coverImage: community,
    coverAlt: "Artisans locaux accompagnés",
    baseSupportCount: 1678,
    baseReactionCount: 63,
    isKeyMeasure: true
  },
  {
    id: "emploi-artisans",
    priorityId: "emploi",
    title: "Soutien aux artisans de quartier",
    impact: "Faire vivre les commerces de proximité",
    tag: "Emploi",
    constat: "« On parle beaucoup d'emploi, mais rarement de ceux qui veulent créer ici. » Les petits projets utiles sont souvent abandonnés faute d'un coup de pouce.",
    proposition: "Accompagnement spécifique pour les couturières, réparateurs de vélos, artisans alimentaires et initiatives associatives locales.",
    miseEnOeuvre: "Guichet unique d'orientation. Mise à disposition de locaux municipaux. Partenariat avec les chambres consulaires.",
    indicateur: "Nombre d'artisans accompagnés, taux de survie à 3 ans",
    coverImage: "/measures/emploi-artisans.jpg",
    coverAlt: "Artisan local"
  },
  {
    id: "ecologie-capteurs",
    priorityId: "ecologie",
    title: "Capteurs de qualité de l'air",
    impact: "Connaître l'air qu'on respire, quartier par quartier",
    tag: "Écologie",
    constat: "« On parle d'air pur, mais chez nous, les enfants respirent les pots d'échappement. » L'écologie se vit de manière très inégale selon les quartiers.",
    proposition: "Réseau de capteurs intelligents avec données accessibles en temps réel pour chaque quartier via une application citoyenne. Alertes pour les écoles et les pistes cyclables.",
    miseEnOeuvre: "Installation de capteurs dans tous les quartiers. Application mobile gratuite. Alertes automatiques en cas de pic de pollution.",
    indicateur: "Couverture du réseau, nombre de consultations, réduction des pics de pollution",
    coverImage: urbanPark,
    coverAlt: "Capteur de qualité de l'air",
    baseSupportCount: 1923,
    baseReactionCount: 78,
    isKeyMeasure: true
  },
  {
    id: "ecologie-jardins",
    priorityId: "ecologie",
    title: "Jardins partagés et fermes urbaines",
    impact: "Des espaces verts dans tous les quartiers",
    tag: "Écologie",
    constat: "« Les espaces verts ne devraient pas être un luxe réservé à certains quartiers. » Certains enfants grandissent loin de tout espace naturel.",
    proposition: "Déploiement massif de jardins partagés et fermes urbaines dans tous les quartiers, avec ateliers pédagogiques, compost collectif et circuits courts.",
    miseEnOeuvre: "Identification des terrains disponibles. Appel à projets citoyens. Partenariat avec écoles et commerces locaux.",
    indicateur: "Nombre de jardins créés, surface végétalisée par habitant, participation citoyenne",
    coverImage: "/measures/ecologie-jardins.jpg",
    coverAlt: "Jardin partagé urbain"
  },
  {
    id: "ecologie-renovation",
    priorityId: "ecologie",
    title: "Rénovation énergétique prioritaire",
    impact: "Isolation des écoles, crèches et logements sociaux",
    tag: "Écologie",
    constat: "Trop de bâtiments publics et de logements sociaux sont des passoires thermiques, augmentant les factures et dégradant la santé des occupants.",
    proposition: "Plan prioritaire de rénovation pour les écoles, crèches et logements sociaux : isolation, panneaux solaires, systèmes de chauffage écologiques.",
    miseEnOeuvre: "Audit énergétique systématique. Programmation pluriannuelle des travaux. Partenariat avec les bailleurs sociaux.",
    indicateur: "Nombre de bâtiments rénovés, économies d'énergie réalisées, confort des usagers",
    coverImage: "/measures/ecologie-renovation.jpg",
    coverAlt: "Rénovation énergétique"
  },
  {
    id: "mobilite-securite",
    priorityId: "mobilite",
    title: "Mobilités actives et sécurisées",
    impact: "Se déplacer à vélo ou à pied en toute sécurité",
    tag: "Mobilité",
    constat: "Les pistes cyclables sont souvent interrompues ou partagées avec les voitures. Les piétons se sentent en danger sur certains axes.",
    proposition: "Réseau continu de pistes cyclables protégées. Trottoirs élargis et sécurisés. Priorité aux mobilités douces dans les aménagements.",
    miseEnOeuvre: "Audit des axes prioritaires. Travaux progressifs quartier par quartier. Signalétique claire.",
    indicateur: "Kilomètres de pistes sécurisées, accidents évités, part modale vélo",
    coverImage: cyclePath,
    coverAlt: "Piste cyclable protégée",
    baseSupportCount: 1456,
    baseReactionCount: 52,
    isKeyMeasure: true
  },
  {
    id: "democratie-voix-quartier",
    priorityId: "democratie",
    title: "Ma Voix Quartier",
    impact: "Signaler, proposer, être entendu",
    tag: "Démocratie",
    constat: "Les habitants ont des idées et des alertes, mais ne savent pas à qui s'adresser. Les remontées se perdent.",
    proposition: "Plateforme citoyenne pour signaler les problèmes, proposer des idées et suivre leur traitement. Transparence totale sur les réponses apportées.",
    miseEnOeuvre: "Application mobile et web. Accusé de réception automatique. Suivi public des signalements. Réponse garantie sous 15 jours.",
    indicateur: "Nombre de signalements, taux de résolution, satisfaction des utilisateurs",
    coverImage: democracy,
    coverAlt: "Citoyens qui s'expriment",
    baseSupportCount: 1789,
    baseReactionCount: 67,
    isKeyMeasure: true
  },
  {
    id: "democratie-budget",
    priorityId: "democratie",
    title: "Budget participatif élargi",
    impact: "Les habitants décident où va l'argent public",
    tag: "Démocratie",
    constat: "Les citoyens se sentent exclus des décisions qui les concernent. Le budget participatif actuel reste limité.",
    proposition: "Augmenter la part du budget décidée par les habitants. Simplifier le processus de proposition et de vote. Ouvrir le vote dès 16 ans.",
    miseEnOeuvre: "Plateforme de proposition en ligne. Réunions de quartier pour accompagner. Suivi transparent des projets votés.",
    indicateur: "Taux de participation, diversité des proposants, projets réalisés",
    coverImage: "/measures/democratie-budget.jpg",
    coverAlt: "Budget participatif"
  }
];

export const videos: Video[] = [
  {
    id: "video-1",
    title: "UTILES pour Strasbourg : notre vision",
    description: "Un programme né du terrain, co-construit avec les habitants.",
    youtubeId: "pKJJ_dLjMB0"
  },
  {
    id: "video-2",
    title: "Le Cahier de doléances citoyen",
    description: "Comment nous avons recueilli la parole des Strasbourgeois.",
    youtubeId: "kXExpEcDLeI"
  },
  {
    id: "video-3",
    title: "Yannick : Engagé avec UTILES 67",
    description: "Nos solutions pour un logement social plus juste.",
    youtubeId: "rptP-rn386Q",
    priorityId: "logement"
  },
  {
    id: "video-4",
    title: "Tentatives d'intimidationnos sommes ",
    description: "Bus-Mairie, Voisins-Relais : rapprocher les services publics.",
    youtubeId: "D-bVV2DoGyM",
    priorityId: "services-publics"
  },
  {
    id: "video-5",
    title: "Au marché de Haute Pierre : un quartier qui vit",
    description: "A la rencontre des habitants de Haute Pierre",
    youtubeId: "UvvbPBr9UkE",
    priorityId: "Marché"
  },
  {
    id: "video-6",
    title: "Une écologie du quotidien",
    description: "Respirer, manger sain, se déplacer : notre engagement.",
    youtubeId: "dQw4w9WgXcQ",
    priorityId: "ecologie"
  }
];

export const events: Event[] = [
  {
    id: "event-1",
    title: "Réunion publique Centre-ville",
    description: "Présentation du programme UTILES et échanges avec les habitants.",
    date: "2026-01-25",
    time: "19:00",
    location: "Salle de la Bourse",
    address: "1 Place de la Bourse, Strasbourg"
  },
  {
    id: "event-2",
    title: "Café citoyen Hautepierre",
    description: "Discussion sur le logement et les services publics de proximité.",
    date: "2026-02-01",
    time: "10:30",
    location: "Centre socio-culturel",
    address: "1 Place André Maurois, Strasbourg"
  },
  {
    id: "event-3",
    title: "Marche de quartier Neuhof",
    description: "Visite des points à améliorer avec les habitants du quartier.",
    date: "2026-02-08",
    time: "14:00",
    location: "Place de l'Île de France",
    address: "Place de l'Île de France, Strasbourg"
  },
  {
    id: "event-4",
    title: "Atelier Stras'Impact",
    description: "Rencontre avec les porteurs de projets locaux.",
    date: "2026-02-15",
    time: "18:00",
    location: "Maison des associations",
    address: "1a Place des Orphelins, Strasbourg"
  },
  {
    id: "event-5",
    title: "Réunion publique Meinau",
    description: "Échanges sur la santé, l'écologie et les mobilités.",
    date: "2026-02-22",
    time: "18:30",
    location: "Salle polyvalente",
    address: "Rue de Bourgogne, Strasbourg"
  }
];

export const team: TeamMember[] = [
  {
    id: "member-1",
    name: "Mohamed Sylla",
    quartier: "Strasbourg",
    role: "Juriste, Syndicaliste",
    utilesRole: "Président Bas Rhin",
    quote: "Je m’engage avec Utiles67 parce que je crois en une action citoyenne utile, concrète et proche des habitants. Ce mouvement porte des valeurs de solidarité, de justice et de respect qui correspondent à ma vision d’une société plus humaine et plus équitable à Strasbourg et dans le Bas-Rhin.",
    bio: "citoyen engagé pour la paix, la justice et le vivre-ensemble à Strasbourg. Je crois en une ville plus humaine, fondée sur l’égalité, le respect et la solidarité. Mon engagement est guidé par l’écoute des citoyens, la défense de la dignité de chacun et la volonté d’agir concrètement pour une société plus juste et apaisée.",
    photo: "/Team/Sans titre-1.png",
    tags: ["Logement", "Familles"]
  },
  {
    id: "member-2",
    name: "Claudine Wenger",
    quartier: "Neudorf",
    role: "Directeur d’établissement médico-social ",
    utilesRole: "Conseiller",
    quote: "Je m’inscris pleinement dans les valeurs de solidarité, d’écologie et de justice sociale, convaincu que ces piliers sont essentiels pour construire une société plus équitable, durable et humaine.",
    bio: "Militante engagée, je place l’action collective et la transformation sociale au cœur de mon combat. Convaincue que la politique doit être un levier de justice, d’égalité.",
    photo: "/Team/Sans titre-2.png",
    tags: ["Services publics", "Seniors"],
    videoUrl: ""
  },
  {
    id: "member-3",
    name: "Frédéric CADIOT",
    quartier: "Centre Ville",
    role: "Retraité",
    utilesRole: "Militant",
    quote: "Je milite au sein d’UTiles parce que ce parti incarne l’humanisme en action : un engagement sans compromis pour la justice sociale, l’écologie et la démocratie, sans tomber dans les pièges des extrêmes. ",
    bio: "Installé à Strasbourg depuis de nombreuses années, je connais les réalités de notre ville : ses forces, ses inégalités, et surtout le potentiel immense de ses habitant·e·s. Mon engagement politique est né ici, dans les quartiers, les associations et les luttes qui font vivre notre territoire..",
    photo: "/Team/Sans titre-5.png",
    tags: ["Services publics", "Numérique"],
    videoUrl: ""
  },
  {
    id: "member-4",
    name: " Hinda Bouchrite,",
    quartier: "Quartier Gare",
    role: "spécialiste en mode",
    utilesRole: "Militante",
    quote: "J'ai trouvé chez UTILES, un mouvement qui me ressemble, un espace où chacun a sa place, sans jugement ni étiquette. Aujourd’hui, je m’engage pour porter la voix des habitants de mon quartier, pour défendre ce qui compte vraiment pour eux et pour contribuer à un projet collectif fondé sur l’humain, la proximité et le respect.",
    bio: "Mon engagement est né autrement, dans le quotidien, dans l’observation, dans les échanges simples avec les habitants autour de moi. J’ai compris que l’utile se construit sur le terrain, par l’écoute et l’action concrète.C’est pour cela que je me suis engagée avec Utiles. J’y ai trouvé un mouvement qui me ressemble, un espace où chacun a sa place, sans jugement ni étiquette. Aujourd’hui, je m’engage pour porter la voix des habitants de mon quartier, pour défendre ce qui compte vraiment pour eux et pour contribuer à un projet collectif fondé sur l’humain, la proximité et le respect.",
    photo: "/Team/Sans titre-7.png",
    tags: ["Emploi", "Entrepreneuriat"],
    videoUrl: ""
  },
  {
    id: "member-5",
    name: "Mina Bezzari",
    quartier: "Robertsau",
    role: "Militant associative",
    utilesRole: "Référente quartier",
    quote: "Je crois en une ville qui prend soin de toutes les générations. Le bien-être dans sa ville doit être une réalité pour les jeunes comme pour les seniors. Personne ne doit être laissé de côté. Aujourd’hui, notre objectif est simple : aller vers les citoyens, rencontrer toutes les personnes inscrites sur les listes électorales, les écouter, les rassurer et les conforter. La citoyenneté ne se résume pas à un bulletin de vote.",
    bio: "J’ai été conseillère municipale de 2008 à 2014 et, en 2007, je me suis présentée aux élections législatives. Mais mon engagement ne s’est jamais arrêté là. J’ai travaillé de nombreuses années dans le milieu associatif et, aujourd’hui encore, je suis bénévole dans mon quartier.",
    photo: "/Team/Sans titre-3.png",
    tags: ["Écologie", "Éducation"],
    videoUrl: ""
  },
  {
    id: "member-6",
    name: "Hayta Nurdogan",
    quartier: "Neuhof",
    role: "Chef d'entreprise",
    utilesRole: "Agent commercial immobilier ",
    quote: "je porte une ambition claire :ouvrir des portes aux jeunes vers l’emploi, notamment à travers le programme TRACE, et redonner de l’élan à nos quartiers.",
    bio: "Je crois en une vie locale dynamique, saine et solidaire, fondée sur le respect, la transmission et la détermination.Parce que rien n’est plus fort qu’un quartier qui croit en sa jeunesse.",
    photo: "/Team/Sans%20titre-8.png",
    tags: ["Emploi", "Artisanat"],
    videoUrl: ""
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
