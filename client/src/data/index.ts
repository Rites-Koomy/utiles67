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
    "heroImage": apartment,
    "heroAlt": "Logement à Strasbourg"
  },
  {
    "id": "services_publics",
    "title": "Services publics de proximité",
    "description": "Pour beaucoup, l’administration est devenue un mur : démarches incompréhensibles, guichets éloignés.",
    "icon": "Building2",
    "color": "blue",
    "heroImage": community,
    "heroAlt": "Services publics de proximité"
  },
  {
    "id": "emploi",
    "title": "Emploi local et inclusion",
    "description": "Trop de projets s’éteignent avant même de voir le jour faute de soutien au bon moment.",
    "icon": "Briefcase",
    "color": "orange",
    "heroImage": community,
    "heroAlt": "Emploi local"
  },
  {
    "id": "ecologie_sante",
    "title": "Écologie de la santé – environnement et justice sociale",
    "description": "L’écologie se vit de manière très inégale selon les quartiers.",
    "icon": "Leaf",
    "color": "emerald",
    "heroImage": urbanPark,
    "heroAlt": "Écologie et santé"
  },
  {
    "id": "jeunesse",
    "title": "Jeunesse et éducation populaire",
    "description": "Les jeunes veulent des perspectives, pas des discours.",
    "icon": "Sparkles",
    "color": "rose",
    "heroImage": youth,
    "heroAlt": "Jeunesse et éducation"
  },
  {
    "id": "democratie",
    "title": "Démocratie locale réelle",
    "description": "Les habitants expriment une frustration commune : la démocratie est trop souvent distante.",
    "icon": "Users",
    "color": "violet",
    "heroImage": democracy,
    "heroAlt": "Démocratie locale"
  },
  {
    "id": "culture_sport",
    "title": "Culture, sport, mémoire et vivre ensemble",
    "description": "Les habitants montrent un attachement profond aux traditions locales et aux mémoires multiples.",
    "icon": "Music",
    "color": "fuchsia",
    "heroImage": community,
    "heroAlt": "Culture et sport"
  },
  {
    "id": "inclusion_droits",
    "title": "Ville inclusive et accès aux droits",
    "description": "Ce sont les habitants eux-mêmes qui racontent la difficulté de traverser l’urgence sociale.",
    "icon": "Heart",
    "color": "red",
    "heroImage": community,
    "heroAlt": "Ville inclusive"
  },
  {
    "id": "prevention",
    "title": "Prévention de la radicalisation",
    "description": "Les signaux faibles sont souvent ignorés, et les familles ne sont pas suffisamment associées.",
    "icon": "Shield",
    "color": "slate",
    "heroImage": community,
    "heroAlt": "Prévention de la radicalisation"
  },
  {
    "id": "finances",
    "title": "Gestion responsable et transparente des finances",
    "description": "Les habitants réclament clarté et exemplarité : où va l’argent public ?",
    "icon": "Euro",
    "color": "cyan",
    "heroImage": community,
    "heroAlt": "Finances responsables"
  },
  {
    "id": "securite",
    "title": "Sécurité et tranquillité publique équilibrée",
    "description": "Les habitants réclament plus de présence humaine et des réponses adaptées aux réalités locales.",
    "icon": "ShieldCheck",
    "color": "blue",
    "heroImage": community,
    "heroAlt": "Sécurité publique"
  },
  {
    "id": "europe",
    "title": "Strasbourg, capitale européenne vivante et innovante",
    "description": "Les habitants veulent que le statut européen profite concrètement à leur quotidien.",
    "icon": "Flag",
    "color": "indigo",
    "heroImage": heroImage,
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
    "coverImage": apartment,
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
    "coverImage": community,
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
    "coverImage": community,
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
    "coverImage": urbanPark,
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
    "coverImage": youth,
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
    "coverImage": democracy,
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
    "coverImage": community,
    "coverAlt": "Culture et sport"
  },
  {
    "id": "inclusion_droits-details",
    "priorityId": "inclusion_droits",
    "title": "Ville inclusive et accès aux droits",
    "constat": "À Strasbourg, ce sont les habitants eux-mêmes qui racontent la difficulté de traverser l’urgence sociale au quotidien. Ils témoignent de parcours chaotiques : hébergements discontinus, accès limité pour les personnes à mobilité réduite, dispositifs peu coordonnés et suivi insuffisant.",
    "proposition": [
      {
        "title": "Accessibilité universelle renforcée",
        "description": "Tous les bâtiments publics, transports et espaces de loisirs doivent être accessibles aux PMR, avec signalétique adaptée et suivi participatif."
      },
      {
        "title": "Soutien prioritaire aux femmes victimes de violences et aux personnes en fragilité",
        "description": "Centres d’accueil spécialisés, accompagnement psychologique et juridique gratuit, mise en réseau avec les associations locales."
      },
      {
        "title": "Réorganisation de l’hébergement d’urgence",
        "description": "Plateforme unique et centralisée d’information, fonds européens pour moderniser les centres, coordination renforcée entre acteurs publics et associations."
      },
      {
        "title": "Charte de transparence hôtelière pour l’urgence sociale",
        "description": "Engagement public des hôtels et résidences temporaires à afficher la transparence des prestations."
      },
      {
        "title": "Création d’un cimetière pour animaux de compagnie",
        "description": "Lieu de mémoire intégrant espaces verts, compostage respectueux et cérémonies symboliques."
      },
      {
        "title": "Espaces de socialisation intergénérationnels et interculturels",
        "description": "Lieux favorisant liens et inclusion dans chaque quartier."
      },
      {
        "title": "Innovation numérique et participation citoyenne",
        "description": "Application mobile et site Internet pour signaler les besoins, suivre les aides reçues et proposer des initiatives de solidarité locale."
      }
    ],
    "miseEnOeuvre": [
      "Financements ciblés (fonds européens, budgets nationaux).",
      "Partenariats avec associations locales et fondations privées."
    ],
    "indicateur": [
      "Nombre de places d'hébergement modernisées.",
      "Taux d'accessibilité des bâtiments publics.",
      "Nombre de signalements via l'application solidaire."
    ],
    "tag": "Inclusion",
    "impact": "Une ville pour tous",
    "isKeyMeasure": true,
    "coverImage": community,
    "coverAlt": "Inclusion sociale"
  },
  {
    "id": "prevention-details",
    "priorityId": "prevention",
    "title": "Prévention de la radicalisation",
    "constat": "À Strasbourg, familles, éducateurs et bénévoles alertent depuis trop longtemps : les signaux faibles sont souvent ignorés, et les familles, qui sont pourtant centrales, ne sont pas suffisamment associées aux dispositifs de prévention.",
    "proposition": [
      {
        "title": "Pôle municipal dédié à la prévention et à la vigilance éducative",
        "description": "Structure unique qui centralise l’information, coordonne les acteurs locaux et accompagne les familles dès le premier signal faible."
      },
      {
        "title": "Coordination renforcée",
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
    "coverImage": community,
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
    "coverImage": community,
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
    "coverImage": community,
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
    "coverImage": heroImage,
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
    "id": "rebecca-breitman",
    "name": "Rebecca Breitman",
    "quartier": "Gare / Laiterie",
    "role": "Candidate Maire",
    "utilesRole": "Tête de liste",
    "quote": "Strasbourg mérite un nouveau souffle, porté par ceux qui la vivent au quotidien.",
    "bio": "Entrepreneure engagée, Rebecca porte la voix d'une société civile qui veut agir concrètement pour sa ville.",
    "photo": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tags": ["Démocratie", "Entrepreneuriat"]
  },
  {
    "id": "jean-philippe-vetter",
    "name": "Jean-Philippe Vetter",
    "quartier": "Centre-ville",
    "role": "Conseiller municipal",
    "utilesRole": "Porte-parole",
    "quote": "La proximité n'est pas un vain mot, c'est ma méthode de travail chaque jour.",
    "bio": "Élu de terrain, il défend inlassablement le patrimoine et la qualité de vie des Strasbourgeois.",
    "photo": "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tags": ["Patrimoine", "Proximité"]
  },
  {
    "id": "le-comte",
    "name": "Ludovic Le Comte",
    "quartier": "Neudorf",
    "role": "Médecin urgentiste",
    "utilesRole": "Référent Santé",
    "quote": "La santé de nos concitoyens doit être la priorité absolue de l'action publique.",
    "bio": "Médecin aux urgences, il connaît les failles du système et porte des solutions concrètes pour l'accès aux soins.",
    "photo": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tags": ["Santé", "Solidarité"]
  },
  {
    "id": "sophie-martin",
    "name": "Sophie Martin",
    "quartier": "Cronenbourg",
    "role": "Institutrice",
    "utilesRole": "Référente Éducation",
    "quote": "L'école est le premier lieu de l'égalité des chances.",
    "bio": "Enseignante passionnée, elle s'engage pour des écoles plus vertes et plus inclusives.",
    "photo": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tags": ["Éducation", "Jeunesse"]
  },
  {
    "id": "malik-b",
    "name": "Malik Benahmed",
    "quartier": "Hautepierre",
    "role": "Chef d'entreprise",
    "utilesRole": "Référent Économie",
    "quote": "Il faut libérer les énergies créatrices dans tous nos quartiers.",
    "bio": "Issu de Hautepierre, il a réussi à monter sa boîte et veut aider les jeunes à entreprendre.",
    "photo": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tags": ["Emploi", "Entrepreneuriat"]
  },
  {
    "id": "anne-lise",
    "name": "Anne-Lise Weber",
    "quartier": "Robertsau",
    "role": "Retraitée active",
    "utilesRole": "Référente Seniors",
    "quote": "Une ville bienveillante est une ville qui n'oublie personne.",
    "bio": "Engagée dans plusieurs associations, elle veille à ce que les seniors restent au cœur de la cité.",
    "photo": "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "tags": ["Seniors", "Solidarité"]
  }
];

export const getPriorityById = (id: string) => priorities.find(p => p.id === id);
export const getMeasureById = (id: string) => measures.find(m => m.id === id);
export const getMeasuresByPriorityId = (priorityId: string) => measures.filter(m => m.priorityId === priorityId);
