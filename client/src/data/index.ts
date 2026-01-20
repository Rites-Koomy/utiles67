import heroImage from "@assets/generated_images/strasbourg_green_peaceful_cityscape.png";

// Images are now referenced directly from public/measures/ directory

export { heroImage };

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

export interface MeasureProposition {
  title: string;
  description: string;
}

export interface Measure {
  id: string;
  priorityId: string;
  title: string;
  impact: string;
  tag: string;
  constat: string;
  proposition: MeasureProposition[];
  miseEnOeuvre: string[];
  indicateur: string[];
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
    "id": "logement",
    "title": "Un logement digne et abordable pour tous",
    "description": "Les habitants dénoncent l’opacité des attributions et la dégradation de certains logements.",
    "icon": "Home",
    "color": "amber",
    "heroImage": "/measures/bandeau-logement.jpg",
    "heroAlt": "Logement à Strasbourg"
  },
  {
    "id": "services_publics",
    "title": "Services publics de proximité",
    "description": "Pour beaucoup, l’administration est devenue un mur : démarches incompréhensibles, guichets éloignés.",
    "icon": "Building2",
    "color": "blue",
    "heroImage": "/measures/referent-administratif.jpeg",
    "heroAlt": "Services publics de proximité"
  },
  {
    "id": "emploi",
    "title": "Emploi local et inclusion",
    "description": "Trop de projets s’éteignent avant même de voir le jour faute de soutien au bon moment.",
    "icon": "Briefcase",
    "color": "orange",
    "heroImage": "/measures/emploi-strasimpact.jpg",
    "heroAlt": "Emploi local"
  },
  {
    "id": "ecologie_sante",
    "title": "Écologie de la santé – environnement et justice sociale",
    "description": "L’écologie se vit de manière très inégale selon les quartiers.",
    "icon": "Leaf",
    "color": "emerald",
    "heroImage": "/measures/action-collective-transition-ecologique-fb.png",
    "heroAlt": "Écologie et santé"
  },
  {
    "id": "jeunesse",
    "title": "Jeunesse et éducation populaire",
    "description": "Les jeunes veulent des perspectives, pas des discours.",
    "icon": "Sparkles",
    "color": "rose",
    "heroImage": "/measures/solutions-jeunes.jpeg",
    "heroAlt": "Jeunesse et éducation"
  },
  {
    "id": "democratie",
    "title": "Démocratie locale réelle",
    "description": "Les habitants expriment une frustration commune : la démocratie est trop souvent distante.",
    "icon": "Users",
    "color": "violet",
    "heroImage": "/measures/coconstruire.jpeg",
    "heroAlt": "Démocratie locale"
  },
  {
    "id": "culture_sport",
    "title": "Culture, sport, mémoire et vivre ensemble",
    "description": "Les habitants montrent un attachement profond aux traditions locales et aux mémoires multiples.",
    "icon": "Music",
    "color": "fuchsia",
    "heroImage": "/measures/a-la-manifestation-du-monde-de-la-culture-a-strasbourg-contre-l-austerite-le-13-juin-dernier-a-succede-la-mobilisation-contre-l-eventuelle-arrivee-du-rn-au-pouvoir-photo-david-geiss-1719339850.jpg",
    "heroAlt": "Culture et sport"
  },
  {
    "id": "inclusion_droits",
    "title": "Ville inclusive et accès aux droits",
    "description": "Ce sont les habitants eux-mêmes qui racontent la difficulté de traverser l’urgence sociale.",
    "icon": "Heart",
    "color": "red",
    "heroImage": "/measures/accessibilite.jpg",
    "heroAlt": "Ville inclusive"
  },
  {
    "id": "prevention",
    "title": "Prévention de la radicalisation",
    "description": "Les signaux faibles sont souvent ignorés, et les familles ne sont pas suffisamment associées.",
    "icon": "Shield",
    "color": "slate",
    "heroImage": "/measures/dialoguer2.jpeg",
    "heroAlt": "Prévention de la radicalisation"
  },
  {
    "id": "finances",
    "title": "Gestion responsable et transparente des finances",
    "description": "Les habitants réclament clarté et exemplarité : où va l’argent public ?",
    "icon": "Euro",
    "color": "cyan",
    "heroImage": "/measures/BP-site.jpg",
    "heroAlt": "Finances responsables"
  },
  {
    "id": "securite",
    "title": "Sécurité et tranquillité publique équilibrée",
    "description": "Les habitants réclament plus de présence humaine et des réponses adaptées aux réalités locales.",
    "icon": "ShieldCheck",
    "color": "blue",
    "heroImage": "/measures/thin-blue-line-blog-XVMea7f1ac4-332d-11eb-a0c5-c488b2411768.webp",
    "heroAlt": "Sécurité publique"
  },
  {
    "id": "europe",
    "title": "Strasbourg, capitale européenne vivante et innovante",
    "description": "Les habitants veulent que le statut européen profite concrètement à leur quotidien.",
    "icon": "Flag",
    "color": "indigo",
    "heroImage": "/measures/hero-new.jpg",
    "heroAlt": "Strasbourg Europe"
  }
];

export const measures: Measure[] = [
  {
    "id": "logement-details",
    "priorityId": "logement",
    "title": "Un logement digne et abordable pour tous",
    "constat": "Les habitants dénoncent : l’opacité des attributions de logements sociaux, la dégradation de certains logements (humidité, chauffage défaillant, insalubrité), l’impossibilité d’alerter efficacement quand un logement devient indigne, un sentiment d’abandon face à certains bailleurs.",
    "proposition": [
      {
        "title": "Transparence et contrôle du logement social",
        "description": "Création d’un référent municipal « Logement social et transparence », centralisation des signalements citoyens, saisine formelle de l’ANCOLS en cas de dysfonctionnements avérés, rapport annuel public sur le logement social à Strasbourg."
      },
      {
        "title": "Contrôle local de l’habitat",
        "description": "Donner davantage de moyens aux commissions d’urbanisme pour agir sur la salubrité, la sécurité et les conditions de vie dans les logements, en créant un droit d’alerte officiel envers les propriétaires et en renforçant la coopération entre la Ville, le CCAS et les associations."
      },
      {
        "title": "Extension du permis de louer",
        "description": "Dispositif étendu pour garantir la décence des logements mis en location."
      },
      {
        "title": "Lutte contre les marchands de sommeil",
        "description": "Actions ciblées contre les propriétaires exploitant la précarité."
      },
      {
        "title": "Priorité à la rénovation énergétique",
        "description": "Accélération des travaux pour améliorer le confort et réduire les charges."
      },
      {
        "title": "Reconversion des friches",
        "description": "Transformation des espaces abandonnés en logements utiles."
      },
      {
        "title": "Encadrement strict des locations touristiques",
        "description": "Régulation pour préserver l'offre de logement pour les habitants."
      }
    ],
    "miseEnOeuvre": [
      "Instruction des signalements via Ma Voix Quartier.",
      "Saisine de l’ANCOLS et déclenchement de contrôles.",
      "Coopération renforcée Ville-CCAS-Associations."
    ],
    "indicateur": [
      "Rapport annuel public sur le logement social.",
      "Nombre de contrôles déclenchés.",
      "Impact qualifié de \"fort et immédiat\"."
    ],
    "tag": "Logement",
    "impact": "Un logement digne pour tous",
    "isKeyMeasure": true,
    "coverImage": "/measures/bandeau-logement.jpg",
    "coverAlt": "Logements à Strasbourg"
  },
  {
    "id": "services_publics-details",
    "priorityId": "services_publics",
    "title": "Services publics de proximité",
    "constat": "Pour beaucoup de Strasbourgeoises et Strasbourgeois, l’administration est devenue un mur : démarches incompréhensibles, guichets éloignés ou saturés, dématérialisation brutale sans accompagnement. Cette distance crée une solitude administrative (anxiété), particulièrement chez les seniors, les familles précaires et les personnes peu à l’aise avec le numérique.",
    "proposition": [
      {
        "title": "Bus-Mairie itinérant « La Ville vient à vous »",
        "description": "Un bus municipal équipé pour les démarches simples (informations, orientation), présent régulièrement dans les quartiers périphériques et les zones peu desservies."
      },
      {
        "title": "Stands municipaux sur les marchés « Parlons Services Publics »",
        "description": "Présence visible et conviviale de la Ville sur les marchés de quartier : information, écoute, démarches rapides et orientation immédiate, sans rendez-vous."
      },
      {
        "title": "Ambassadeurs de quartier bénévoles « Voisins-Relais »",
        "description": "Habitants volontaires, formés par la Ville, en lien avec les centres socioculturels (CSC), associations et familles, pour accompagner les démarches et orienter les personnes vers les bons services."
      },
      {
        "title": "Ateliers de lutte contre l’illectronisme « Pas à Pas Numérique »",
        "description": "Ateliers gratuits, pratiques et réguliers pour apprendre à utiliser les outils numériques essentiels (CAF, santé, transports, école), organisés dans les maisons de quartier et bibliothèques."
      },
      {
        "title": "Permanences administratives délocalisées",
        "description": "Créneaux hebdomadaires dans les CSC, maisons de quartier et résidences seniors pour éviter déplacements et files d’attente."
      },
      {
        "title": "Référent administratif de proximité",
        "description": "Un agent identifié par quartier, chargé de suivre les situations complexes et d’éviter le renvoi d’un service à l’autre."
      }
    ],
    "miseEnOeuvre": [
      "Mobilité des services (bus, stands).",
      "Bénévolat encadré (Voisins-Relais).",
      "Mutualisation des lieux existants (CSC, bibliothèques).",
      "Présence humaine renforcée."
    ],
    "indicateur": [
      "Taux de recours aux droits.",
      "Nombre de personnes accompagnées dans les ateliers numériques.",
      "Fréquentation des points d'accueil itinérants."
    ],
    "tag": "Services publics",
    "impact": "Des services accessibles partout",
    "isKeyMeasure": true,
    "coverImage": "/measures/referent-administratif.jpeg",
    "coverAlt": "Services de proximité"
  },
  {
    "id": "emploi-details",
    "priorityId": "emploi",
    "title": "Emploi local et inclusion",
    "constat": "À Strasbourg, trop de projets s’éteignent avant même de voir le jour. Artisans, indépendants, porteurs de projets et associations racontent tous la même réalité : l’accès compliqué aux financements, le sentiment que les aides vont toujours aux mêmes, et des idées utiles abandonnées faute d’un coup de pouce au bon moment.",
    "proposition": [
      {
        "title": "Dispositif Stras’Impact",
        "description": "Un dispositif municipal de microfinancement et d’accompagnement, pensé pour débloquer des projets locaux à fort impact économique, social et territorial."
      },
      {
        "title": "Microfinancement ciblé",
        "description": "Aide de 3 000 à 15 000 euros par projet, réservée aux initiatives locales utiles."
      },
      {
        "title": "Accompagnement obligatoire",
        "description": "Suivi pour sécuriser et pérenniser les projets (couturière de quartier, réparateur de vélos, initiative associative alimentaire, artisan local)."
      }
    ],
    "miseEnOeuvre": [
      "Sélection des initiatives locales utiles.",
      "Financement direct (3k€ - 15k€).",
      "Accompagnement technique et suivi."
    ],
    "indicateur": [
      "Nombre de projets financés.",
      "Emplois durables créés.",
      "Impact économique local mesurable."
    ],
    "tag": "Emploi",
    "impact": "Soutenir l'emploi local",
    "isKeyMeasure": true,
    "coverImage": "/measures/solutions-jeunes.jpeg",
    "coverAlt": "Emploi local"
  },
  {
    "id": "ecologie_sante-details",
    "priorityId": "ecologie_sante",
    "title": "Écologie de la santé – environnement et justice sociale",
    "constat": "À Strasbourg, l’écologie se vit de manière très inégale selon les quartiers. Certains enfants grandissent en respirant la pollution des axes très fréquentés, tandis que d’autres bénéficient de quartiers plus verts et apaisés. Pour beaucoup, l’écologie apparaît parfois comme punitive plutôt que protectrice : un luxe pour certains, une contrainte pour d’autres.",
    "proposition": [
      {
        "title": "Rénovation énergétique ambitieuse des bâtiments publics et privés",
        "description": "Plan prioritaire pour les écoles, crèches et logements sociaux, combinant isolation, panneaux solaires et systèmes de chauffage écologiques."
      },
      {
        "title": "Réseau de capteurs intelligents de qualité de l’air",
        "description": "Données accessibles en temps réel pour chaque quartier via une application citoyenne, alertes pour les écoles et les pistes cyclables."
      },
      {
        "title": "Déploiement massif de jardins partagés et fermes urbaines",
        "description": "Dans tous les quartiers, avec ateliers pédagogiques, compost collectif et circuits courts pour écoles et commerces locaux."
      },
      {
        "title": "Mobilités actives et sécurisées pour tous",
        "description": "Développement de pistes cyclables protégées et continues, zones 30 étendues, accompagnement pour familles à vélo et micromobilité électrique partagée."
      },
      {
        "title": "Alimentation durable et accessible",
        "description": "Marchés de producteurs locaux subventionnés, cantines scolaires 100 % bio et circuits courts, distribution de paniers à prix solidaires pour les quartiers prioritaires."
      },
      {
        "title": "Végétalisation et infrastructures anti-pollution",
        "description": "Plantation d’arbres et haies filtrantes le long des axes très fréquentés, toitures végétalisées sur les bâtiments publics, murs antibruit et antipollution dans les zones sensibles."
      },
      {
        "title": "Innovation sociale et participative",
        "description": "Budget participatif pour que les habitants proposent et pilotent leurs projets écologiques de quartier."
      }
    ],
    "miseEnOeuvre": [
      "Financements ciblés (fonds européens et nationaux).",
      "Partenariats public-privé.",
      "Mobilisation de fonds verts locaux."
    ],
    "indicateur": [
      "Données de qualité de l'air par quartier.",
      "Nombre de logements et bâtiments rénovés.",
      "Nombre de jardins partagés créés.",
      "Part du bio et local dans les cantines."
    ],
    "tag": "Écologie",
    "impact": "Un environnement sain pour tous",
    "isKeyMeasure": true,
    "coverImage": "/measures/action-collective-transition-ecologique-fb.png",
    "coverAlt": "Écologie urbaine"
  },
  {
    "id": "jeunesse-details",
    "priorityId": "jeunesse",
    "title": "Jeunesse et éducation populaire",
    "constat": "Les jeunes veulent des perspectives, pas des discours. Ils disent manquer de repères, manquer de réseaux, se sentir parfois invisibles ou mal orientés. Les parents, eux, demandent plus d’accompagnement, plus de passerelles vers l’emploi et l’autonomie.",
    "proposition": [
      {
        "title": "Programme TRACE (Transmission, Réseau, Accompagnement, Compétences, Élan)",
        "description": "Dispositif d'accompagnement vers l’emploi, la formation, la création d’activité ou l’engagement associatif, reposant sur un mentorat municipal de proximité."
      },
      {
        "title": "Mentorat municipal",
        "description": "Mobilisation de professionnels en activité et de retraités pour transmettre expérience et compétences."
      },
      {
        "title": "Label municipal TRACE",
        "description": "Reconnaissance valorisant les mentors et partenaires qui s’investissent durablement."
      },
      {
        "title": "Clauses d’embauche jeunesse dans les marchés publics municipaux",
        "description": "Intégration d'objectifs chiffrés d'insertion dans la commande publique : contrats d’apprentissage, stages qualifiants ou gratifiés, embauches ou pré-embauches (CDD, CDI, contrats aidés)."
      }
    ],
    "miseEnOeuvre": [
      "Mise en relation jeunes-mentors.",
      "Intégration de clauses sociales dans les marchés publics (10% minimum des heures travaillées, cible 15%)."
    ],
    "indicateur": [
      "150 à 250 jeunes bénéficiaires par an.",
      "Part des heures travaillées dans les marchés publics (objectif 10% à 15%)."
    ],
    "tag": "Jeunesse",
    "impact": "Des perspectives pour chaque jeune",
    "isKeyMeasure": true,
    "coverImage": "/measures/solutions-jeunes.jpeg",
    "coverAlt": "Jeunesse de Strasbourg"
  },
  {
    "id": "democratie-details",
    "priorityId": "democratie",
    "title": "Démocratie locale réelle",
    "constat": "À Strasbourg, les habitants expriment une frustration commune : la démocratie est trop souvent distante et consultative, mais sans suites concrètes. Ils veulent être associés avant les décisions, suivre les engagements pris et participer réellement à la vie de leur quartier.",
    "proposition": [
      {
        "title": "Budgets participatifs renforcés « Quartiers en Action »",
        "description": "Les habitants proposent et votent directement sur des projets locaux (espaces verts, événements culturels, équipements de proximité), avec suivi en ligne de la réalisation."
      },
      {
        "title": "Conseils de quartier décisionnels « Ma Voix Ma Ville »",
        "description": "Instances locales avec pouvoir réel de décision sur certaines priorités, accompagnées de représentants municipaux pour appuyer la mise en œuvre."
      },
      {
        "title": "Application « Ma Voix Quartier »",
        "description": "Plateforme numérique simple et interactive pour signaler des besoins, proposer des projets, voter et suivre en temps réel l’avancement des décisions."
      },
      {
        "title": "Évaluation publique annuelle des engagements",
        "description": "Rapport clair et accessible pour chaque quartier, avec présentation en réunion publique et publication en ligne."
      },
      {
        "title": "Boîtes à idées et micro-consultations locales « Le Conseil des Habitants »",
        "description": "Petits dispositifs physiques ou numériques dans chaque quartier pour recueillir les suggestions au quotidien et tester des initiatives à coût très faible."
      },
      {
        "title": "Ateliers citoyens itinérants « Café-Décide »",
        "description": "Réunions conviviales dans les cafés ou lieux publics, pour débattre et co-construire des projets sans mobilisation lourde de ressources."
      },
      {
        "title": "Carnet de suivi citoyen",
        "description": "Version imprimée ou PDF envoyée aux habitants pour suivre projet par projet ce qui a été voté, réalisé et financé."
      }
    ],
    "miseEnOeuvre": [
      "Déploiement des outils numériques (Application).",
      "Organisation des instances physiques (Conseils, Ateliers).",
      "Rapport annuel d'évaluation."
    ],
    "indicateur": [
      "Nombre de projets votés et réalisés.",
      "Taux de participation via l'application et les instances.",
      "Rapport public annuel publié."
    ],
    "tag": "Démocratie",
    "impact": "Le pouvoir aux habitants",
    "isKeyMeasure": true,
    "coverImage": "/measures/coconstruire.jpeg",
    "coverAlt": "Démocratie participative"
  },
  {
    "id": "culture_sport-details",
    "priorityId": "culture_sport",
    "title": "Culture, sport, mémoire et vivre ensemble",
    "constat": "À Strasbourg, les habitants montrent un attachement profond aux traditions locales et aux mémoires multiples de la Ville. Ils veulent transmettre leur patrimoine sans se refermer, reconnaître toutes les identités et construire un vivre ensemble concret.",
    "proposition": [
      {
        "title": "Festival des Mémoires et Traditions « Strasbourg Ouverte »",
        "description": "Célébration annuelle de toutes les cultures locales et européennes, avec ateliers participatifs, expositions et spectacles itinérants dans les quartiers."
      },
      {
        "title": "Ateliers interculturels « Passerelles Alsace-Europe »",
        "description": "Pour écoles, associations et familles : langues régionales, cuisine, contes, musique et arts partagés, favorisant l’échange et la transmission."
      },
      {
        "title": "Sport citoyen et mixité « Strasbourg en Mouvement »",
        "description": "Tournois interquartiers, parcours sportifs collaboratifs et activités de pleine nature accessibles à tous."
      },
      {
        "title": "Mémoire numérique participative « Ma Ville, Mon Histoire »",
        "description": "Plateforme où habitants déposent photos, témoignages, recettes, chansons et récits familiaux, créant un patrimoine collectif consultable en ligne et en bibliothèque municipale."
      },
      {
        "title": "Bibliothèques et maisons de quartier vivantes",
        "description": "Espaces de rencontre et de dialogue ouverts à toutes les associations pour ateliers, projections, débats et clubs intergénérationnels."
      },
      {
        "title": "Signalétique inclusive « Parcours Mémoire et Culture »",
        "description": "Panneaux dans la Ville présentant l’histoire, les traditions et les mémoires locales, bilingues français-alsacien, accessibles et interactifs avec QR codes."
      },
      {
        "title": "Carnets citoyens du patrimoine vivant",
        "description": "Guides trimestriels des événements culturels et sportifs de proximité, envoyés aux habitants ou accessibles via l’application « Ma Voix Quartier »."
      }
    ],
    "miseEnOeuvre": [
      "Soutien aux associations locales.",
      "Valorisation des mémoires locales et ultramarines.",
      "Préservation des acquis alsaciens (droit local, Concordat, langues régionales)."
    ],
    "indicateur": [
      "Nombre d'événements \"Strasbourg Ouverte\".",
      "Contenus déposés sur la plateforme mémoire.",
      "Fréquentation des ateliers interculturels."
    ],
    "tag": "Culture et Sport",
    "impact": "Vivre ensemble et traditions",
    "isKeyMeasure": true,
    "coverImage": "/measures/a-la-manifestation-du-monde-de-la-culture-a-strasbourg-contre-l-austerite-le-13-juin-dernier-a-succede-la-mobilisation-contre-l-eventuelle-arrivee-du-rn-au-pouvoir-photo-david-geiss-1719339850.jpg",
    "coverAlt": "Culture et sport"
  },
  {
    "id": "inclusion_droits-details",
    "priorityId": "inclusion_droits",
    "title": "Ville inclusive et accès aux droits",
    "constat": "À Strasbourg, ce sont les habitants eux-mêmes qui racontent la difficulté de traverser l’urgence sociale au quotidien. Ils témoignent de parcours chaotiques : hébergements discontinus, accès limité pour les personnes à mobilité réduite, dispositifs peu coordonnés et suivi insuffisant.",
    "proposition": [
      {
        "title": "Maison de l’Inclusion et des Droits (MID)",
        "description": "Un lieu unique, central et accessible (avec antennes mobiles), regroupant CCAS, associations d’aide juridique, services sociaux et santé, pour un accompagnement global."
      },
      {
        "title": "Équipe mobile « Aller-Vers »",
        "description": "Travailleurs sociaux et bénévoles allant directement à la rencontre des personnes isolées (SDF, seniors, familles monoparentales) pour proposer de l’aide sans attendre qu’elles la demandent."
      },
      {
        "title": "Carte Solidaire Strasbourg",
        "description": "Une carte unique donnant accès aux transports gratuits (sous conditions), aux cantines, aux musées et à des réductions sur les services municipaux, sans stigmatisation."
      },
      {
        "title": "Accessibilité universelle réelle",
        "description": "Plan d'urgence pour rendre accessibles tous les bâtiments municipaux et les arrêts de transport en commun d’ici 2030, avec consultation des associations de personnes handicapées."
      },
      {
        "title": "Réseau de parrainage solidaire",
        "description": "Mise en lien de familles strasbourgeoises volontaires avec des personnes isolées ou nouvellement arrivées pour créer du lien et faciliter l’intégration."
      },
      {
        "title": "Hébergement d'urgence digne et pérenne",
        "description": "Renforcement des places d'hébergement, mobilisation du parc privé vacant et accompagnement vers le logement autonome."
      }
    ],
    "miseEnOeuvre": [
      "Création de la Maison de l’Inclusion.",
      "Déploiement des équipes mobiles.",
      "Mise en place de la Carte Solidaire."
    ],
    "indicateur": [
      "Nombre de personnes accompagnées par la MID.",
      "Nombre de cartes solidaires distribuées.",
      "Taux d'accessibilité des bâtiments publics."
    ],
    "tag": "Inclusion",
    "impact": "Une ville pour tous",
    "isKeyMeasure": true,
    "coverImage": "/measures/accessibilite.jpg",
    "coverAlt": "Ville inclusive"
  },
  {
    "id": "prevention-details",
    "priorityId": "prevention",
    "title": "Prévention de la radicalisation",
    "constat": "Les signaux faibles sont souvent ignorés, et les familles ne sont pas suffisamment associées. Il manque des espaces de dialogue apaisés et des alternatives éducatives solides.",
    "proposition": [
      {
        "title": "Pôle municipal de vigilance et d’écoute",
        "description": "Cellule dédiée, confidentielle et réactive, composée de psychologues, éducateurs et médiateurs, pour écouter les familles inquiètes et les professionnels."
      },
      {
        "title": "Comités de suivi de quartier",
        "description": "Réunions trimestrielles de suivi dans chaque quartier et plateforme sécurisée pour signaler et partager les alertes en toute confidentialité."
      },
      {
        "title": "Formation systématique et continue des acteurs locaux",
        "description": "Enseignants, éducateurs, animateurs et bénévoles formés à reconnaître les signaux faibles, à dialoguer avec les familles et à orienter les jeunes."
      },
      {
        "title": "Dialogue interconvictionnel et interculturel",
        "description": "Ateliers citoyens, rencontres interreligieuses et projets artistiques/sportifs pour créer des liens communautaires."
      },
      {
        "title": "Espace Familles de Prévention",
        "description": "Lieu physique et numérique où les familles peuvent obtenir conseils, soutien psychologique et médiation culturelle."
      },
      {
        "title": "Programme « Passerelles numériques »",
        "description": "Activités pour sensibiliser aux discours extrémistes tout en développant l’esprit critique et la créativité."
      },
      {
        "title": "Approche positive et non stigmatisante",
        "description": "Reconnaissance des talents et initiatives des jeunes à risque pour créer un sentiment d’appartenance."
      }
    ],
    "miseEnOeuvre": [
      "Centralisation via le Pôle municipal.",
      "Formation des acteurs.",
      "Financements ciblés (fonds européens, budgets sécurité/éducation)."
    ],
    "indicateur": [
      "Nombre de signalements traités par le Pôle.",
      "Nombre d'acteurs locaux formés.",
      "Participation aux ateliers interconvictionnels."
    ],
    "tag": "Prévention",
    "impact": "Protéger et prévenir",
    "isKeyMeasure": true,
    "coverImage": "/measures/dialoguer2.jpeg",
    "coverAlt": "Prévention et dialogue"
  },
  {
    "id": "finances-details",
    "priorityId": "finances",
    "title": "Gestion responsable et transparente des finances",
    "constat": "À Strasbourg, les habitants réclament clarté et exemplarité : où va l’argent public ? Pourquoi certaines dépenses semblent-elles inutiles ? Les citoyens veulent comprendre et participer aux choix budgétaires.",
    "proposition": [
      {
        "title": "Audit indépendant annuel",
        "description": "Contrôle externe obligatoire avec publication des résultats accessibles à tous, pour chaque service municipal."
      },
      {
        "title": "Suppression des dépenses inefficaces",
        "description": "Analyse systématique des projets et programmes, priorité aux actions à fort impact social et écologique."
      },
      {
        "title": "Valorisation du patrimoine municipal",
        "description": "Exploitation durable des bâtiments, terrains et équipements municipaux (location, réaffectation) pour générer des revenus complémentaires."
      },
      {
        "title": "Aucune hausse d’impôts locaux",
        "description": "Maintien de la fiscalité avec optimisation des ressources existantes et recherche de financements européens et nationaux."
      },
      {
        "title": "Plateforme citoyenne de transparence budgétaire",
        "description": "Tableau interactif avec suivi en temps réel des dépenses par quartier/projet, possibilité pour les habitants de proposer des priorités ou signaler des gaspillages."
      },
      {
        "title": "Budget participatif renforcé et innovant",
        "description": "Intégration des citoyens dès la conception des projets structurants avec suivi en ligne et indicateurs de performance."
      }
    ],
    "miseEnOeuvre": [
      "Contrôle externe annuel.",
      "Optimisation fiscale et patrimoniale.",
      "Outils numériques de transparence."
    ],
    "indicateur": [
      "Économies estimées : 5 à 12 millions d’euros par an (jusqu’à 14M€ avec effets indirects).",
      "Publication annuelle de l'audit."
    ],
    "tag": "Finances",
    "impact": "Transparence et efficacité",
    "isKeyMeasure": true,
    "coverImage": "/measures/BP-site.jpg",
    "coverAlt": "Finances responsables"
  },
  {
    "id": "securite-details",
    "priorityId": "securite",
    "title": "Sécurité et tranquillité publique équilibrée",
    "constat": "À Strasbourg, les habitants réclament plus de présence humaine et des réponses adaptées aux réalités locales, sans tomber dans la répression systématique. Ils veulent se sentir protégés, avec moins de tensions et des solutions de prévention efficaces.",
    "proposition": [
      {
        "title": "Patrouilles mixtes et de proximité",
        "description": "Agents municipaux, médiateurs et bénévoles formés travaillent ensemble pour assurer une présence visible, rassurante et non stigmatisante."
      },
      {
        "title": "Médiateurs de soirée",
        "description": "Interventions ciblées dans les quartiers à forte activité nocturne pour prévenir les conflits, accompagnées d’ateliers de sensibilisation."
      },
      {
        "title": "Éclairage intelligent et sécurisation urbaine",
        "description": "Lampadaires connectés et optimisation de l’éclairage public pour réduire les zones d’ombre tout en économisant l’énergie."
      },
      {
        "title": "Urbanisme de prévention",
        "description": "Aménagement des espaces publics pour limiter les points de tension : voies cyclables sécurisées, espaces verts visibles, mobilier favorisant le lien social."
      },
      {
        "title": "Pacte local de tranquillité",
        "description": "Co-construction d’un pacte associant habitants, commerçants, associations et institutions pour définir des règles de vie commune."
      },
      {
        "title": "Plateforme citoyenne de signalement et de suivi",
        "description": "Outil numérique permettant aux habitants de signaler incidents ou points noirs, avec suivi transparent des interventions."
      }
    ],
    "miseEnOeuvre": [
      "Déploiement d'équipes mixtes.",
      "Aménagements urbains (éclairage, urbanisme).",
      "Outils numériques de signalement."
    ],
    "indicateur": [
      "Nombre d'interventions de médiation.",
      "Suivi des incidents signalés via la plateforme.",
      "Sentiment de sécurité (enquêtes)."
    ],
    "tag": "Sécurité",
    "impact": "Une ville apaisée",
    "isKeyMeasure": true,
    "coverImage": "/measures/thin-blue-line-blog-XVMea7f1ac4-332d-11eb-a0c5-c488b2411768.webp",
    "coverAlt": "Sécurité publique"
  },
  {
    "id": "europe-details",
    "priorityId": "europe",
    "title": "Strasbourg, capitale européenne vivante et innovante",
    "constat": "À Strasbourg, les habitants veulent que le statut européen profite concrètement à leur quotidien. L’innovation ne doit pas rester l’apanage de quelques-uns : elle doit irriguer tous les quartiers, toutes les générations et toutes les initiatives citoyennes.",
    "proposition": [
      {
        "title": "Marché de Noël local et transparent « Marché des Quartiers »",
        "description": "Soutien aux artisans et producteurs locaux, circuits courts, traçabilité des produits et animations citoyennes."
      },
      {
        "title": "Route européenne des traditions « Strasbourg Connecte »",
        "description": "Parcours culturel et gastronomique reliant les quartiers, valorisant les savoir-faire européens et locaux."
      },
      {
        "title": "Soutien aux start-up à impact « Europol Innovation »",
        "description": "Incubateurs et espaces de coworking dans plusieurs quartiers, mentorat par des experts européens, financement de projets innovation sociale/écologique."
      },
      {
        "title": "Projets européens concrets dans les quartiers",
        "description": "Jardins partagés et fermes urbaines cofinancés par l’Europe, festivals citoyens cofinancés pour célébrer la diversité."
      },
      {
        "title": "Plateforme « Mon Europe à Strasbourg »",
        "description": "Application et site pour suivre en temps réel les financements européens sur le quartier et participer à des projets collaboratifs."
      },
      {
        "title": "Lab’ européen de quartier",
        "description": "Espace pilote pour tester des initiatives européennes innovantes : mobilité douce, recyclage créatif, art participatif."
      }
    ],
    "miseEnOeuvre": [
      "Cellule municipale de montage de projets européens.",
      "Animation locale (Marchés, Routes, Labs).",
      "Outils numériques de suivi."
    ],
    "indicateur": [
      "Montant des fonds européens captés.",
      "Nombre de projets financés dans les quartiers."
    ],
    "tag": "Europe",
    "impact": "Une capitale européenne concrète",
    "isKeyMeasure": true,
    "coverImage": "/measures/00-21.jpg",
    "coverAlt": "Strasbourg européenne"
  }
];

export const videos: Video[] = [
  {
    "id": "video-1",
    "title": "Le projet UTILES pour Strasbourg",
    "description": "Découvrez notre vision pour une ville plus juste, plus verte et plus démocratique.",
    "youtubeId": "dQw4w9WgXcQ",
    "priorityId": "democratie"
  }
];

export const events: Event[] = [];

export const team: TeamMember[] = [
  {
    "id": "member-1",
    "name": "Mohamed Sylla",
    "quartier": "Strasbourg",
    "role": "Juriste, Syndicaliste",
    "utilesRole": "Président Bas Rhin",
    "quote": "Je m’engage avec Utiles67 parce que je crois en une action citoyenne utile, concrète et proche des habitants. Ce mouvement porte des valeurs de solidarité, de justice et de respect qui correspondent à ma vision d’une société plus humaine et plus équitable à Strasbourg et dans le Bas-Rhin.",
    "bio": "citoyen engagé pour la paix, la justice et le vivre-ensemble à Strasbourg. Je crois en une ville plus humaine, fondée sur l’égalité, le respect et la solidarité. Mon engagement est guidé par l’écoute des citoyens, la défense de la dignité de chacun et la volonté d’agir concrètement pour une société plus juste et apaisée.",
    "photo": "/Team/Sans titre-1.png",
    "tags": [
      "Logement",
      "Familles"
    ]
  },
  {
    "id": "member-2",
    "name": "Claudine Wenger",
    "quartier": "Neudorf",
    "role": "Directeur d’établissement médico-social ",
    "utilesRole": "Conseiller",
    "quote": "Je m’inscris pleinement dans les valeurs de solidarité, d’écologie et de justice sociale, convaincu que ces piliers sont essentiels pour construire une société plus équitable, durable et humaine.",
    "bio": "Militante engagée, je place l’action collective et la transformation sociale au cœur de mon combat. Convaincue que la politique doit être un levier de justice, d’égalité.",
    "photo": "/Team/Sans titre-2.png",
    "tags": [
      "Services publics",
      "Seniors"
    ],
    "videoUrl": ""
  },
  {
    "id": "member-3",
    "name": "Frédéric CADIOT",
    "quartier": "Centre Ville",
    "role": "Retraité",
    "utilesRole": "Militant",
    "quote": "Je milite au sein d’UTiles parce que ce parti incarne l’humanisme en action : un engagement sans compromis pour la justice sociale, l’écologie et la démocratie, sans tomber dans les pièges des extrêmes. ",
    "bio": "Installé à Strasbourg depuis de nombreuses années, je connais les réalités de notre ville : ses forces, ses inégalités, et surtout le potentiel immense de ses habitant·e·s. Mon engagement politique est né ici, dans les quartiers, les associations et les luttes qui font vivre notre territoire..",
    "photo": "/Team/Sans titre-5.png",
    "tags": [
      "Services publics",
      "Numérique"
    ]
  },
  {
    "id": "member-4",
    "name": " Hinda Bouchrite,",
    "quartier": "Quartier Gare",
    "role": "spécialiste en mode",
    "utilesRole": "Militante",
    "quote": "J'ai trouvé chez UTILES, un mouvement qui me ressemble, un espace où chacun a sa place, sans jugement ni étiquette. Aujourd’hui, je m’engage pour porter la voix des habitants de mon quartier, pour défendre ce qui compte vraiment pour eux et pour contribuer à un projet collectif fondé sur l’humain, la proximité et le respect.",
    "bio": "Mon engagement est né autrement, dans le quotidien, dans l’observation, dans les échanges simples avec les habitants autour de moi. J’ai compris que l’utile se construit sur le terrain, par l’écoute et l’action concrète.C’est pour cela que je me suis engagée avec Utiles. J’y ai trouvé un mouvement qui me ressemble, un espace où chacun a sa place, sans jugement ni étiquette. Aujourd’hui, je m’engage pour porter la voix des habitants de mon quartier, pour défendre ce qui compte vraiment pour eux et pour contribuer à un projet collectif fondé sur l’humain, la proximité et le respect.",
    "photo": "/Team/Sans titre-3.png",
    "tags": [
      "Quartiers",
      "Jeunesse"
    ],
    "videoUrl": ""
  },
  {
    "id": "member-5",
    "name": "Mina Bezzari",
    "quartier": "Robertsau",
    "role": "Militante associative",
    "utilesRole": "Militante",
    "quote": "Avec UTILES, j’ai découvert une politique qui écoute avant d’agir. Pas de grandes promesses, mais des solutions concrètes pour nos quartiers.",
    "bio": "Mère de famille et engagée dans mon quartier depuis 15 ans, je vois les besoins quotidiens des familles. Je veux porter leur voix.",
    "photo": "/Team/Sans titre-4.png",
    "tags": [
      "Familles",
      "Éducation"
    ],
    "videoUrl": ""
  },
  {
    "id": "member-6",
    "name": "Hayta Nurdogan",
    "quartier": "Neuhof",
    "role": "Chef d’entreprise",
    "utilesRole": "Référent quartier",
    "quote": "Je veux montrer qu’on peut réussir et s’investir pour sa ville, peu importe d’où l’on vient. Strasbourg a besoin de toutes ses énergies.",
    "bio": "Entrepreneur dans le bâtiment, je connais la valeur du travail et de l'effort. Je veux aider les jeunes à trouver leur voie.",
    "photo": "/Team/Sans titre.png",
    "tags": [
      "Emploi",
      "Entrepreneuriat"
    ],
    "videoUrl": ""
  },
  {
    "id": "member-7",
    "name": "Yannick K",
    "quartier": "Koenigshoffen",
    "role": "Enseignant",
    "utilesRole": "Militant",
    "quote": "L'éducation et la culture sont les armes les plus puissantes pour changer le monde. À Strasbourg, nous devons les rendre accessibles à tous.",
    "bio": "Professeur d'histoire-géo, je vois chaque jour le potentiel de notre jeunesse. Il faut leur donner les moyens de rêver.",
    "photo": "/Team/Sans titre-6.png",
    "tags": [
      "Éducation",
      "Culture"
    ],
    "videoUrl": "rptP-rn386Q"
  }
];

export const getPriorityById = (id: string) => priorities.find(p => p.id === id);
export const getMeasureById = (id: string) => measures.find(m => m.id === id);
export const getMeasuresByPriorityId = (priorityId: string) => measures.filter(m => m.priorityId === priorityId);
