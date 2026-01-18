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
    "id": "logement",
    "title": "Logement digne et abordable",
    "description": "Un logement sain, accessible, et des attributions enfin transparentes.",
    "icon": "Home",
    "color": "amber",
    "heroImage": apartment,
    "heroAlt": "Immeubles résidentiels à Strasbourg"
  },
  {
    "id": "services_publics",
    "title": "Services publics de proximité",
    "description": "Des démarches simples, un visage humain, et la Ville qui vient vers vous.",
    "icon": "Building2",
    "color": "blue",
    "heroImage": community,
    "heroAlt": "Accueil en mairie de quartier"
  },
  {
    "id": "emploi",
    "title": "Emploi local et inclusion",
    "description": "Aider les projets utiles à démarrer et créer des opportunités pour ceux qui en manquent.",
    "icon": "Briefcase",
    "color": "orange",
    "heroImage": community,
    "heroAlt": "Artisans et commerçants de quartier"
  },
  {
    "id": "ecologie_sante",
    "title": "Écologie de la santé",
    "description": "Une écologie qui protège: air, bruit, factures, alimentation, espaces verts.",
    "icon": "Leaf",
    "color": "emerald",
    "heroImage": urbanPark,
    "heroAlt": "Espaces verts à Strasbourg"
  },
  {
    "id": "mobilites",
    "title": "Mobilités et stationnement apaisés",
    "description": "Sécuriser, adapter quartier par quartier, et dialoguer avant de décider.",
    "icon": "Bike",
    "color": "teal",
    "heroImage": cyclePath,
    "heroAlt": "Piste cyclable sécurisée"
  },
  {
    "id": "jeunesse",
    "title": "Jeunesse et éducation populaire",
    "description": "Un mentor, un réseau, des portes qui s’ouvrent: des parcours qui tiennent.",
    "icon": "Sparkles",
    "color": "rose",
    "heroImage": youth,
    "heroAlt": "Jeunesse de Strasbourg"
  },
  {
    "id": "democratie",
    "title": "Démocratie locale réelle",
    "description": "Décider avec les habitants, suivre les engagements, rendre des comptes.",
    "icon": "Users",
    "color": "violet",
    "heroImage": democracy,
    "heroAlt": "Réunion citoyenne"
  },
  {
    "id": "culture_sport",
    "title": "Culture, sport et vivre-ensemble",
    "description": "Ce qui nous relie: traditions, mémoires, associations, activités accessibles.",
    "icon": "Music",
    "color": "fuchsia",
    "heroImage": community,
    "heroAlt": "Culture et sport"
  },
  {
    "id": "inclusion_droits",
    "title": "Ville inclusive et accès aux droits",
    "description": "Personne ne reste sur le bord du chemin: dignité, accessibilité, protection.",
    "icon": "Heart",
    "color": "red",
    "heroImage": community,
    "heroAlt": "Ville inclusive"
  },
  {
    "id": "prevention",
    "title": "Prévention de la radicalisation",
    "description": "Agir tôt, avec les familles, sans stigmatiser: prévenir plutôt que réparer.",
    "icon": "Shield",
    "color": "slate",
    "heroImage": community,
    "heroAlt": "Prévention"
  },
  {
    "id": "finances",
    "title": "Finances responsables et transparentes",
    "description": "Chaque euro expliqué, contrôlé, et orienté vers l’utile.",
    "icon": "Euro",
    "color": "cyan",
    "heroImage": community,
    "heroAlt": "Finances transparentes"
  },
  {
    "id": "securite",
    "title": "Sécurité et tranquillité publique",
    "description": "Présence humaine, médiation, aménagements: une sécurité de confiance.",
    "icon": "ShieldCheck",
    "color": "blue",
    "heroImage": community,
    "heroAlt": "Sécurité publique"
  },
  {
    "id": "europe",
    "title": "Strasbourg capitale européenne concrète",
    "description": "Faire profiter les quartiers du statut européen: projets visibles et utiles.",
    "icon": "Flag",
    "color": "indigo",
    "heroImage": heroImage,
    "heroAlt": "Strasbourg Europe"
  }
];

export const measures: Measure[] = [
  {
    "id": "logement-transparence",
    "priorityId": "logement",
    "title": "Transparence du logement social",
    "impact": "Fin de l’opacité, priorité à l’équité",
    "tag": "Logement",
    "constat": "Des familles attendent des années sans comprendre les règles d’attribution, et certains logements se dégradent sans réponse.",
    "proposition": "Créer un référent municipal « Logement social et transparence », centraliser les signalements et publier un rapport annuel clair sur les attributions et les contrôles.",
    "miseEnOeuvre": "Référent identifié + canal unique de signalement + procédure de saisine de l’ANCOLS en cas de dysfonctionnements avérés + présentation publique annuelle.",
    "indicateur": "Délai moyen de réponse aux signalements, Nombre de contrôles déclenchés / suites données, Publication annuelle accessible",
    "coverImage": "/measures/210831StrasbourgLeSaintTrop_26-scaled.jpg",
    "coverAlt": "Transparence du logement social",
    "isKeyMeasure": true
  },
  {
    "id": "logement-habitat-indigne",
    "priorityId": "logement",
    "title": "Réagir vite aux logements indignes",
    "impact": "Plus personne ne reste seul face à l’insalubrité",
    "tag": "Logement",
    "constat": "Humidité, chauffage défaillant, insalubrité: les habitants disent ne plus savoir à qui s’adresser.",
    "proposition": "Donner plus de moyens au contrôle local de l’habitat et créer un droit d’alerte officiel envers les propriétaires, avec une coopération Ville–CCAS–associations.",
    "miseEnOeuvre": "Renforcer les commissions compétentes, organiser un circuit court de traitement des alertes, et coordonner l’accompagnement social et juridique.",
    "indicateur": "Nombre de logements contrôlés, Nombre de mises en demeure / procédures, Part des situations résolues",
    "coverImage": "/measures/bandeau-logement.jpg",
    "coverAlt": "Réagir vite aux logements indignes",
    "isKeyMeasure": false
  },
  {
    "id": "logement-permis-louer",
    "priorityId": "logement",
    "title": "Étendre le permis de louer",
    "impact": "Assainir le parc locatif",
    "tag": "Logement",
    "constat": "Des logements sont mis en location sans garanties minimales de salubrité.",
    "proposition": "Étendre et rendre plus efficace le permis de louer, avec contrôles et sanctions ciblées.",
    "miseEnOeuvre": "Cartographier les zones prioritaires, renforcer les contrôles, publier un guide simple pour propriétaires et locataires.",
    "indicateur": "Nombre de demandes instruites, Taux de non-conformité détecté, Évolution des signalements",
    "coverImage": "/measures/Permisdelouer.jpg",
    "coverAlt": "Étendre le permis de louer",
    "isKeyMeasure": false
  },
  {
    "id": "logement-marchands-sommeil",
    "priorityId": "logement",
    "title": "Lutter contre les marchands de sommeil",
    "impact": "Protéger les plus fragiles",
    "tag": "Logement",
    "constat": "Certains propriétaires exploitent la précarité avec des logements dangereux ou sur-occupés.",
    "proposition": "Action coordonnée contre les marchands de sommeil, avec suivi des plaintes et coopération institutionnelle.",
    "miseEnOeuvre": "Cellule de coordination Ville/CCAS/associations, priorisation des dossiers à risque, accompagnement des victimes.",
    "indicateur": "Nombre de dossiers traités, Procédures engagées, Relogements sécurisés",
    "coverImage": "/measures/appartement-coul-1-site-sommeil.jpg",
    "coverAlt": "Lutter contre les marchands de sommeil",
    "isKeyMeasure": false
  },
  {
    "id": "logement-airbnb",
    "priorityId": "logement",
    "title": "Encadrer strictement les locations touristiques",
    "impact": "Remettre des logements sur le marché",
    "tag": "Logement",
    "constat": "Des logements quittent la location classique, aggravant la tension locative.",
    "proposition": "Encadrer et contrôler les locations touristiques type Airbnb, avec sanctions dissuasives.",
    "miseEnOeuvre": "Déclaration obligatoire, contrôles, limitation et amendes en cas de fraude.",
    "indicateur": "Nombre de contrôles, Nombre de sanctions, Nombre de logements revenus au marché classique",
    "coverImage": "/measures/touristiques-cadena.jpg",
    "coverAlt": "Encadrer strictement les locations touristiques",
    "isKeyMeasure": false
  },
  {
    "id": "services-bus-mairie",
    "priorityId": "services_publics",
    "title": "Bus-Mairie itinérant",
    "impact": "La Ville vient à vous, sans rendez-vous",
    "tag": "Services publics",
    "constat": "Démarches trop complexes, guichets saturés, tout en ligne sans accompagnement: beaucoup abandonnent.",
    "proposition": "Déployer un bus municipal équipé pour l’orientation et les démarches simples, présent régulièrement dans les quartiers.",
    "miseEnOeuvre": "Un véhicule aménagé, un planning public, des agents formés, passage régulier par secteur.",
    "indicateur": "Nombre de permanences réalisées, Nombre de démarches / orientations, Satisfaction usagers",
    "coverImage": "/measures/image_processing20240315-15617-m75vm2.jpg",
    "coverAlt": "Bus-Mairie itinérant",
    "isKeyMeasure": true
  },
  {
    "id": "services-marches",
    "priorityId": "services_publics",
    "title": "Stands municipaux sur les marchés",
    "impact": "Un service public visible et convivial",
    "tag": "Services publics",
    "constat": "Les habitants veulent une aide simple, au bon endroit, au bon moment.",
    "proposition": "Tenir des stands « Parlons Services Publics » sur les marchés: information, écoute, orientation immédiate.",
    "miseEnOeuvre": "Stand léger + documentation claire + agents/volontaires formés, selon les jours de marché.",
    "indicateur": "Nombre de personnes reçues, Taux de résolution au premier contact",
    "coverImage": "/measures/stand-marché.jpeg",
    "coverAlt": "Stands municipaux sur les marchés",
    "isKeyMeasure": false
  },
  {
    "id": "services-voisins-relais",
    "priorityId": "services_publics",
    "title": "Voisins-Relais",
    "impact": "Un coup de main pour ne pas perdre ses droits",
    "tag": "Services publics",
    "constat": "Des aides sont perdues faute d’explication ou de papier au bon moment.",
    "proposition": "Former des habitants volontaires pour accompagner les démarches et orienter vers les bons services, en lien avec CSC et associations.",
    "miseEnOeuvre": "Appel à volontaires, formation, référent municipal de coordination, cadre éthique clair.",
    "indicateur": "Nombre de relais actifs, Nombre d’accompagnements, Taux de réorientation réussie",
    "coverImage": "/measures/Aide-administrative-www-espacemagnan-com.jpg",
    "coverAlt": "Voisins-Relais",
    "isKeyMeasure": false
  },
  {
    "id": "services-illectronisme",
    "priorityId": "services_publics",
    "title": "Ateliers « Pas à Pas Numérique »",
    "impact": "Personne n’est exclu par le numérique",
    "tag": "Services publics",
    "constat": "Quand tout est en ligne, ceux qui maîtrisent mal Internet décrochent.",
    "proposition": "Ateliers gratuits et pratiques (CAF, santé, transports, école) dans bibliothèques et maisons de quartier.",
    "miseEnOeuvre": "Créneaux réguliers, supports simples, binômes bénévoles/agents, accès sans jugement.",
    "indicateur": "Nombre de participants, Progression mesurée (auto-évaluation), Taux de réinscription",
    "coverImage": "/measures/services-numerique.jpg",
    "coverAlt": "Ateliers « Pas à Pas Numérique »",
    "isKeyMeasure": false
  },
  {
    "id": "services-permanences",
    "priorityId": "services_publics",
    "title": "Permanences administratives délocalisées",
    "impact": "Moins de déplacements, plus de solutions",
    "tag": "Services publics",
    "constat": "Les déplacements et files d’attente découragent, surtout pour seniors et familles.",
    "proposition": "Organiser des permanences hebdomadaires dans CSC, maisons de quartier et résidences seniors.",
    "miseEnOeuvre": "Créneaux fixes publiés, prise en charge des cas simples et orientation des cas complexes.",
    "indicateur": "Nombre de permanences, Délai moyen d’obtention d’un rendez-vous, Satisfaction usagers",
    "coverImage": "/measures/cd54eb_1e9cfcb96d03484c95b39505497ee5ac~mv2.jpg",
    "coverAlt": "Permanences administratives délocalisées",
    "isKeyMeasure": false
  },
  {
    "id": "services-referent",
    "priorityId": "services_publics",
    "title": "Référent administratif par quartier",
    "impact": "Un interlocuteur unique pour les cas compliqués",
    "tag": "Services publics",
    "constat": "Les dossiers se perdent entre services: chacun renvoie à l’autre.",
    "proposition": "Un agent identifié par quartier suit les situations complexes de bout en bout.",
    "miseEnOeuvre": "Nomination, formation au suivi transversal, circuit court avec les services municipaux et partenaires.",
    "indicateur": "Nombre de dossiers suivis, Délai de résolution, Taux de retours positifs",
    "coverImage": "/measures/referent-administratif.jpeg",
    "coverAlt": "Référent administratif par quartier",
    "isKeyMeasure": false
  },
  {
    "id": "emploi-strasimpact",
    "priorityId": "emploi",
    "title": "Stras’Impact",
    "impact": "3 000 à 15 000€ pour débloquer les projets utiles",
    "tag": "Emploi",
    "constat": "Des artisans, indépendants, associations et porteurs de projet abandonnent faute d’un coup de pouce au bon moment.",
    "proposition": "Créer un dispositif municipal de microfinancement + accompagnement obligatoire pour sécuriser et pérenniser les projets locaux.",
    "miseEnOeuvre": "Fonds dédié, critères simples (impact local), accompagnement, sélection transparente, suivi à 6/12/24 mois.",
    "indicateur": "Nombre de projets soutenus, Emplois créés/maintenus, Taux de survie à 2 ans",
    "coverImage": "/measures/emploi-strasimpact.jpg",
    "coverAlt": "Stras’Impact",
    "isKeyMeasure": true
  },
  {
    "id": "emploi-clauses-locales",
    "priorityId": "emploi",
    "title": "Clauses locales dans les marchés municipaux",
    "impact": "Faire travailler et former ici",
    "tag": "Emploi",
    "constat": "La commande publique est un levier puissant, souvent sous-utilisé pour l’emploi local.",
    "proposition": "Intégrer des clauses favorisant l’emploi local, l’insertion et l’apprentissage dans les marchés municipaux.",
    "miseEnOeuvre": "Guide acheteurs publics, clauses types, suivi des obligations, sanctions/bonus selon respect.",
    "indicateur": "Part des marchés incluant une clause, Heures d’insertion réalisées, Nombre de bénéficiaires",
    "coverImage": "/measures/initial-jeunes-saisonniers-primeurs.jpg",
    "coverAlt": "Clauses locales dans les marchés municipaux",
    "isKeyMeasure": false
  },
  {
    "id": "eco-air-bruit",
    "priorityId": "ecologie_sante",
    "title": "Mesurer l’air et le bruit pour protéger la santé",
    "impact": "Agir là où ça fait mal, quartier par quartier",
    "tag": "Écologie",
    "constat": "Pollution et bruit touchent plus durement certains quartiers, notamment près des axes et autour des écoles.",
    "proposition": "Renforcer la mesure de la qualité de l’air et du bruit, avec priorité écoles/crèches, et déclencher des actions concrètes (apaisement, végétalisation, isolation).",
    "miseEnOeuvre": "Réseau de capteurs, données accessibles, plan d’action par quartier, suivi public des améliorations.",
    "indicateur": "Couverture du réseau de mesure, Nombre d’actions déclenchées, Évolution des niveaux air/bruit",
    "coverImage": "/measures/mesure-qualite-air.webp",
    "coverAlt": "Mesurer l’air et le bruit pour protéger la santé",
    "isKeyMeasure": true
  },
  {
    "id": "eco-renovation",
    "priorityId": "ecologie_sante",
    "title": "Rénovation énergétique massive",
    "impact": "Des logements plus sains, moins chers à chauffer, et une transition écologique accessible à tous.",
    "tag": "Écologie",
    "constat": "De nombreux logements restent des passoires énergétiques. Les aides existent, mais leur complexité, l’isolement des ménages et le manque de coordination ralentissent fortement les rénovations, en particulier dans les quartiers populaires et les copropriétés anciennes.",
    "proposition": "Lancer une **Éco-Rénov’ Citoyenne**, un dispositif collectif et local qui complète les aides existantes par une dynamique de quartier.\nIl repose sur l’entraide entre habitants, la mutualisation des démarches et un accompagnement de proximité pour accélérer les rénovations énergétiques à moindre coût.",
    "miseEnOeuvre": "• Création d’une plateforme municipale de l’Éco-Rénov’ Citoyenne pour s’informer, s’inscrire et suivre les projets\n• Parrainage entre voisins : des habitants ayant déjà rénové accompagnent ceux qui se lancent\n• Organisation de mini-ateliers de quartier avec des artisans RGE, associations et centres sociaux\n• Coordination des travaux pour mutualiser devis, diagnostics et interventions\n• Suivi collectif et transparent des projets à l’échelle des immeubles et des quartiers",
    "indicateur": "• Nombre de logements accompagnés\n• Kilowattheures économisés\n• Tonnes de CO₂ évitées\n• Budget total mobilisé\n• Nombre d’ateliers organisés\n• Nombre de parrains citoyens engagés",
    "coverImage": "/measures/prix-d-une-renovation-energetique-globale-jXERo.jpg",
    "coverAlt": "Rénovation énergétique massive",
    "isKeyMeasure": false
  },
  {
    "id": "eco-ecologie-accessible",
    "priorityId": "ecologie_sante",
    "title": "Une écologie accessible à tous",
    "impact": "Alimentation saine et nature proche",
    "tag": "Écologie",
    "constat": "L’écologie ne doit pas être un luxe réservé à certains quartiers.",
    "proposition": "Développer jardins partagés, circuits courts et accès à une alimentation saine et locale, y compris dans les quartiers populaires.",
    "miseEnOeuvre": "Appels à projets citoyens, partenariats producteurs, actions dans les écoles, paniers solidaires.",
    "indicateur": "Nombre de jardins/circuits soutenus, Participation habitants, Accès à l’offre dans les quartiers prioritaires",
    "coverImage": "/measures/action-collective-transition-ecologique-fb.png",
    "coverAlt": "Une écologie accessible à tous",
    "isKeyMeasure": false
  },
  {
    "id": "mob-securiser",
    "priorityId": "mobilites",
    "title": "Pistes cyclables réellement sécurisées",
    "impact": "Moins de conflits, plus de sécurité pour tous",
    "tag": "Mobilités",
    "constat": "Une ligne au sol ne protège personne: pistes interrompues ou peu lisibles créent tensions et accidents.",
    "proposition": "Construire un réseau cyclable continu, lisible et protégé, qui sécurise aussi piétons et automobilistes en clarifiant les usages.",
    "miseEnOeuvre": "Audit des discontinuités, priorisation des axes, aménagements protégés, signalétique claire, suivi public.",
    "indicateur": "Km de pistes protégées créés, Évolution accidents/incidents, Satisfaction usagers",
    "coverImage": "/measures/pistes cyclable.jpg",
    "coverAlt": "Pistes cyclables réellement sécurisées",
    "isKeyMeasure": true
  },
  {
    "id": "mob-quartier-par-quartier",
    "priorityId": "mobilites",
    "title": "Des solutions adaptées quartier par quartier",
    "impact": "Fin des décisions « taille unique »",
    "tag": "Mobilités",
    "constat": "Ce qui marche en hypercentre ne marche pas forcément en périphérie: commerces, écoles, artisans, seniors n’ont pas les mêmes besoins.",
    "proposition": "Refuser les solutions idéologiques uniques: décider à partir des usages réels et des contraintes de chaque quartier.",
    "miseEnOeuvre": "Diagnostics de terrain, tests temporaires, ajustements, bilan public avant généralisation.",
    "indicateur": "Nombre de projets avec diagnostic local, Taux d’ajustements après test, Taux d’acceptation",
    "coverImage": "/measures/mobilite-securite.jpg",
    "coverAlt": "Des solutions adaptées quartier par quartier",
    "isKeyMeasure": false
  },
  {
    "id": "mob-concertation",
    "priorityId": "mobilites",
    "title": "Dialoguer avant de décider",
    "impact": "Moins de crispations, plus d’efficacité",
    "tag": "Mobilités",
    "constat": "Les tensions viennent souvent de décisions mal expliquées, mal anticipées et sans concertation.",
    "proposition": "Avant toute modification de circulation ou stationnement, associer habitants et commerçants en amont.",
    "miseEnOeuvre": "Réunions ciblées, ateliers, restitution claire, calendrier partagé, droit à l’ajustement.",
    "indicateur": "Nombre de concertations en amont, Délai de publication des restitutions, Baisse des réclamations",
    "coverImage": "/measures/dialoguer2.jpeg",
    "coverAlt": "Dialoguer avant de décider",
    "isKeyMeasure": false
  },
  {
    "id": "jeunesse-trace",
    "priorityId": "jeunesse",
    "title": "TRACE: mentorat municipal de proximité",
    "impact": "Un réseau pour ceux qui n’en ont pas",
    "tag": "Jeunesse",
    "constat": "Beaucoup de jeunes disent manquer de repères et de réseaux: ils veulent une personne qui les suit, pas seulement des dispositifs.",
    "proposition": "Créer TRACE (Transmission, Réseau, Accompagnement, Compétences, Élan): mentorat mobilisant actifs et retraités, avec un label municipal pour les partenaires.",
    "miseEnOeuvre": "Identification des jeunes, recrutement/formation des mentors, matching, suivi, valorisation des mentors via label TRACE.",
    "indicateur": "Nombre de binômes mentor/jeune, Taux de maintien dans le parcours, Accès à stages/emplois/formation",
    "coverImage": "/measures/WhatsApp Image 2026-01-14 at 23.30.23.jpeg",
    "coverAlt": "TRACE: mentorat municipal de proximité",
    "isKeyMeasure": true
  },
  {
    "id": "jeunesse-clauses",
    "priorityId": "jeunesse",
    "title": "Clauses d’embauche jeunesse dans les marchés",
    "impact": "Des stages et contrats, sans coût supplémentaire",
    "tag": "Jeunesse",
    "constat": "Sans réseau, accéder à un stage ou une première expérience devient un obstacle majeur.",
    "proposition": "Fixer des objectifs progressifs: au moins 10% des heures sur certains marchés pour apprentissage, stages qualifiés ou embauches, avec priorité aux parcours fragilisés.",
    "miseEnOeuvre": "Clauses types, pilotage par la Ville, reporting annuel, contrôle d’exécution.",
    "indicateur": "Heures dédiées à la jeunesse, Nombre de jeunes bénéficiaires/an, Part quartiers prioritaires",
    "coverImage": "/measures/sport-santé.jpg",
    "coverAlt": "Clauses d’embauche jeunesse dans les marchés",
    "isKeyMeasure": false
  },
  {
    "id": "etudiant-epicerie",
    "priorityId": "jeunesse",
    "title": "Épiceries solidaires étudiantes",
    "impact": "Manger dignement sans se cacher",
    "tag": "Jeunesse",
    "constat": "Des étudiantes et étudiants renoncent à bien se nourrir, souvent par manque d’accès simple et digne.",
    "proposition": "Créer une épicerie solidaire étudiante avec le CROUS, associations et producteurs locaux, complétée par une épicerie mobile et des supermarchés solidaires gérés par les étudiants (Stras’Impact).",
    "miseEnOeuvre": "Partenariats, lieux accessibles, tarification sociale, logistique anti-gaspillage, tournée mobile campus.",
    "indicateur": "Nombre d’étudiants bénéficiaires, Volume de produits redistribués, Part de circuits courts",
    "coverImage": "/measures/definition-epicerie-solidaire.png",
    "coverAlt": "Épiceries solidaires étudiantes",
    "isKeyMeasure": false
  },
  {
    "id": "etudiant-logement",
    "priorityId": "jeunesse",
    "title": "Logement étudiant accessible",
    "impact": "Étudier sans l’angoisse du loyer",
    "tag": "Jeunesse",
    "constat": "Des logements existent mais sont mal mobilisés, trop chers ou inadaptés aux parcours.",
    "proposition": "Mieux mobiliser le parc existant, renforcer l’encadrement des loyers abusifs dans les zones universitaires et développer des solutions temporaires dignes (rentrée, stage, transition).",
    "miseEnOeuvre": "Charte tripartite Ville–Bailleurs–Associations étudiantes, information renforcée, solutions temporaires encadrées.",
    "indicateur": "Nombre de logements mobilisés, Signalements loyers abusifs traités, Solutions temporaires proposées",
    "coverImage": "/measures/hugo-kret-allavoine-etudiant-en-master-informatique-occupe-une-chambre-de-10-m-2-dans-la-residence-paul-appell-depuis-quatre-ans-photo-jean-francois-badias-1712512352.jpg",
    "coverAlt": "Logement étudiant accessible",
    "isKeyMeasure": false
  },
  {
    "id": "etudiant-droits",
    "priorityId": "jeunesse",
    "title": "Permanences municipales pour l’accès aux droits",
    "impact": "Stop au non-recours",
    "tag": "Jeunesse",
    "constat": "Beaucoup passent à côté de droits essentiels (CAF, APL, santé) faute d’accompagnement.",
    "proposition": "Mettre en place des permanences municipales dédiées aux étudiants, en lien avec universités, CROUS et quartiers.",
    "miseEnOeuvre": "Créneaux sur campus et en quartier, aide dossiers, prévention des ruptures de parcours.",
    "indicateur": "Nombre de permanences, Taux de dossiers finalisés, Baisse du non-recours (estimations)",
    "coverImage": "/measures/aides-acces-droits-jeuns.webp",
    "coverAlt": "Permanences municipales pour l’accès aux droits",
    "isKeyMeasure": false
  },
  {
    "id": "etudiant-jobs",
    "priorityId": "jeunesse",
    "title": "Jobs municipaux compatibles avec les études",
    "impact": "Travailler oui, s’épuiser non",
    "tag": "Jeunesse",
    "constat": "Certains étudiants travaillent au détriment de leurs études.",
    "proposition": "Créer des jobs municipaux adaptés aux rythmes étudiants et intégrer des clauses « Jeunes » dans les marchés publics (médiation, soutien scolaire, actions écologiques, événements).",
    "miseEnOeuvre": "Catalogue de missions, horaires adaptés, partenariat universités, clauses marchés publics.",
    "indicateur": "Nombre de jobs créés, Taux de réussite/maintien des étudiants (enquête), Heures réalisées",
    "coverImage": "/measures/animateur-scolaire.jpg",
    "coverAlt": "Jobs municipaux compatibles avec les études",
    "isKeyMeasure": false
  },
  {
    "id": "demo-budget",
    "priorityId": "democratie",
    "title": "Budgets participatifs renforcés",
    "impact": "Les habitants décident et voient le résultat",
    "tag": "Démocratie",
    "constat": "La participation est trop souvent consultative, sans suite visible.",
    "proposition": "Renforcer les budgets participatifs « Quartiers en Action » avec suivi en ligne de la réalisation.",
    "miseEnOeuvre": "Augmentation de l'enveloppe, vote simplifié, plateforme de suivi des travaux en temps réel.",
    "indicateur": "Montant alloué, Nombre de projets réalisés, Taux de participation",
    "coverImage": "/measures/BP-site.jpg",
    "coverAlt": "Budgets participatifs renforcés",
    "isKeyMeasure": true
  },
  {
    "id": "demo-referendum",
    "priorityId": "democratie",
    "title": "Droit d’interpellation et référendum local",
    "impact": "Pouvoir imposer un sujet à l'agenda",
    "tag": "Démocratie",
    "constat": "Les citoyens ne peuvent pas forcer le débat sur un sujet majeur.",
    "proposition": "Abaisser les seuils du droit d’interpellation pour permettre l'organisation de référendums locaux d'initiative citoyenne.",
    "miseEnOeuvre": "Seuils abaissés, accompagnement méthodologique, débat public garanti.",
    "indicateur": "Nombre d'interpellations, Référendums organisés, Sujets mis à l'agenda",
    "coverImage": "/measures/referendum1.jpg",
    "coverAlt": "Droit d’interpellation et référendum local",
    "isKeyMeasure": false
  },
  {
    "id": "culture-accessible",
    "priorityId": "culture_sport",
    "title": "Culture hors les murs",
    "impact": "La culture partout, pour tous",
    "tag": "Culture & Sport",
    "constat": "Les équipements culturels sont intimidants ou éloignés pour certains habitants.",
    "proposition": "Développer une programmation « Hors les murs » dans les parcs, les places et les pieds d'immeubles.",
    "miseEnOeuvre": "Scènes ouvertes, bibliothèques de rue, festivals de quartier, résidences d'artistes in situ.",
    "indicateur": "Nombre d'événements hors les murs, Public touché (nouveaux publics), Satisfaction habitants",
    "coverImage": "/measures/a-la-manifestation-du-monde-de-la-culture-a-strasbourg-contre-l-austerite-le-13-juin-dernier-a-succede-la-mobilisation-contre-l-eventuelle-arrivee-du-rn-au-pouvoir-photo-david-geiss-1719339850.jpg",
    "coverAlt": "Culture hors les murs",
    "isKeyMeasure": true
  },
  {
    "id": "sport-sante",
    "priorityId": "culture_sport",
    "title": "Sport-Santé sur ordonnance",
    "impact": "Le sport comme médicament gratuit",
    "tag": "Culture & Sport",
    "constat": "La sédentarité est un enjeu de santé publique majeur.",
    "proposition": "Généraliser le dispositif Sport-Santé sur ordonnance et rendre accessibles les équipements sportifs en accès libre.",
    "miseEnOeuvre": "Partenariat médecins/clubs, créneaux dédiés, aménagement de parcours santé urbains.",
    "indicateur": "Nombre de bénéficiaires Sport-Santé, Nouveaux équipements accès libre, Partenaires engagés",
    "coverImage": "/measures/sport-santé.jpg",
    "coverAlt": "Sport-Santé sur ordonnance",
    "isKeyMeasure": false
  },
  {
    "id": "inclusion-accessibilite",
    "priorityId": "inclusion_droits",
    "title": "Strasbourg 100% accessible",
    "impact": "Une ville praticable pour tous",
    "tag": "Inclusion",
    "constat": "Trottoirs encombrés, bâtiments inadaptés : la ville reste un parcours d'obstacles.",
    "proposition": "Plan de mise en accessibilité universelle (voirie, bâtiments, transports) avec commission de suivi citoyenne.",
    "miseEnOeuvre": "Audit participatif, travaux priorisés, sanction des obstacles illégaux, formation des agents.",
    "indicateur": "Taux d'équipements accessibles, Linéaire de voirie traité, Satisfaction usagers PMR",
    "coverImage": "/measures/accessibilite.jpg",
    "coverAlt": "Strasbourg 100% accessible",
    "isKeyMeasure": true
  },
  {
    "id": "prevention-jeunes",
    "priorityId": "prevention",
    "title": "Prévention spécialisée renforcée",
    "impact": "Des éducateurs là où les jeunes sont",
    "tag": "Prévention",
    "constat": "Le retrait des éducateurs de rue a laissé un vide dans certains quartiers.",
    "proposition": "Redéployer des équipes d'éducateurs de rue formés, en lien avec les familles et les associations.",
    "miseEnOeuvre": "Recrutement d'éducateurs, présence en soirée et week-end, coordination avec l'État.",
    "indicateur": "Nombre d'éducateurs terrain, Jeunes accompagnés, Actions de prévention",
    "coverImage": "/measures/educateur-jeune.jpg",
    "coverAlt": "Prévention spécialisée renforcée",
    "isKeyMeasure": true
  },
  {
    "id": "finances-audit",
    "priorityId": "finances",
    "title": "Audit citoyen des finances",
    "impact": "Savoir où va chaque euro",
    "tag": "Finances",
    "constat": "Le budget municipal est opaque pour le grand public.",
    "proposition": "Réaliser un audit citoyen en début de mandat et créer un tableau de bord financier accessible à tous.",
    "miseEnOeuvre": "Commission mixte élus/citoyens/experts, publication simplifiée, open data budgétaire.",
    "indicateur": "Publication de l'audit, Consultations du tableau de bord, Économies identifiées",
    "coverImage": "/measures/audit-citoyen.jpeg",
    "coverAlt": "Audit citoyen des finances",
    "isKeyMeasure": true
  },
  {
    "id": "securite-police",
    "priorityId": "securite",
    "title": "Police municipale de proximité",
    "impact": "Rassurer et dissuader",
    "tag": "Sécurité",
    "constat": "Le sentiment d'insécurité grandit dans certains quartiers.",
    "proposition": "Une police municipale présente à pied et à vélo, formée à la médiation et au contact population.",
    "miseEnOeuvre": "Îlotage, patrouilles mixtes, formation continue, lien avec les habitants.",
    "indicateur": "Heures de patrouille pédestre, Contacts habitants, Sentiment de sécurité (enquête)",
    "coverImage": "/measures/thin-blue-line-blog-XVMea7f1ac4-332d-11eb-a0c5-c488b2411768.webp",
    "coverAlt": "Police municipale de proximité",
    "isKeyMeasure": true
  },
  {
    "id": "europe-quartiers",
    "priorityId": "europe",
    "title": "L'Europe dans les quartiers",
    "impact": "L'Europe finance votre quotidien",
    "tag": "Europe",
    "constat": "L'Europe semble lointaine et bureaucratique pour beaucoup.",
    "proposition": "Utiliser les fonds européens pour des projets concrets dans les quartiers (isolation, formation, échanges).",
    "miseEnOeuvre": "Cellule de montage de projets, communication sur les réalisations UE, jumelages de quartiers.",
    "indicateur": "Montant fonds européens captés, Projets quartiers financés, Jeunes en mobilité européenne",
    "coverImage": "/measures/00-21.jpg",
    "coverAlt": "L'Europe dans les quartiers",
    "isKeyMeasure": true
  },
  {
    "id": "eco-alimentation-locale",
    "priorityId": "ecologie_sante",
    "title": "Alimentation saine et circuits courts accessibles",
    "impact": "Mieux manger, soutenir les producteurs locaux et réduire l’empreinte carbone de notre alimentation.",
    "tag": "Écologie",
    "constat": "Une alimentation saine et locale reste trop souvent plus chère ou difficile d’accès, en particulier pour les familles modestes.",
    "proposition": "Développer une politique municipale favorisant les circuits courts, la production locale et l’accès à une alimentation de qualité pour tous.",
    "miseEnOeuvre": "• Soutien aux producteurs locaux et aux marchés de proximité\n• Introduction accrue de produits locaux et bio dans la restauration collective\n• Partenariats avec les associations d’aide alimentaire\n• Sensibilisation à l’alimentation durable dans les quartiers",
    "indicateur": "• Part de produits locaux dans la restauration collective\n• Nombre de producteurs partenaires\n• Nombre de bénéficiaires des dispositifs solidaires",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Alimentation saine et circuits courts accessibles",
    "isKeyMeasure": false
  },
  {
    "id": "mobilites-pistes-securisees",
    "priorityId": "mobilites",
    "title": "Des pistes cyclables réellement sécurisées",
    "impact": "Des déplacements plus sûrs, plus écologiques et plus accessibles.",
    "tag": "Mobilités",
    "constat": "De nombreuses pistes cyclables sont discontinues, peu lisibles ou dangereuses, freinant l’usage quotidien du vélo.",
    "proposition": "Créer un réseau cyclable continu, lisible et sécurisé, pensé pour tous les âges et tous les usages.",
    "miseEnOeuvre": "• Sécurisation physique des pistes existantes\n• Suppression des discontinuités dangereuses\n• Priorité aux axes domicile-travail et domicile-école\n• Concertation avec les usagers cyclistes",
    "indicateur": "• Kilomètres de pistes sécurisées\n• Fréquentation cyclable\n• Nombre d’accidents impliquant des cyclistes",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Des pistes cyclables réellement sécurisées",
    "isKeyMeasure": false
  },
  {
    "id": "democratie-solutions-quartiers",
    "priorityId": "democratie",
    "title": "Des solutions coconstruites par quartier",
    "impact": "Des décisions plus justes car construites avec les habitants.",
    "tag": "Démocratie",
    "constat": "Les politiques publiques sont souvent décidées loin du terrain, sans assez tenir compte des réalités locales.",
    "proposition": "Donner aux quartiers les moyens de construire leurs propres solutions, avec l’appui de la ville.",
    "miseEnOeuvre": "• Ateliers citoyens réguliers par quartier\n• Soutien technique et financier aux projets locaux\n• Évaluation partagée des actions mises en place",
    "indicateur": "• Nombre de projets coconstruits\n• Taux de participation des habitants",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Des solutions coconstruites par quartier",
    "isKeyMeasure": false
  },
  {
    "id": "democratie-concertation-proactive",
    "priorityId": "democratie",
    "title": "Dialoguer avant de décider",
    "impact": "Une démocratie locale apaisée et plus efficace.",
    "tag": "Démocratie",
    "constat": "La concertation arrive trop souvent après les décisions, générant incompréhension et conflits.",
    "proposition": "Instaurer une concertation systématique en amont des grands projets municipaux.",
    "miseEnOeuvre": "• Réunions publiques dès la phase de réflexion\n• Mise à disposition d’informations claires et accessibles\n• Prise en compte des contributions citoyennes",
    "indicateur": "• Nombre de concertations organisées\n• Taux de participation\n• Projets modifiés suite aux contributions",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Dialoguer avant de décider",
    "isKeyMeasure": false
  },
  {
    "id": "jeunesse-trace-mentorat",
    "priorityId": "jeunesse",
    "title": "TRACE : un mentor pour chaque jeune",
    "impact": "Aucun jeune laissé sans repère ni accompagnement.",
    "tag": "Jeunesse",
    "constat": "Trop de jeunes manquent de soutien, de réseau ou de perspectives.",
    "proposition": "Mettre en place un parcours de mentorat municipal associant professionnels, associations et services publics.",
    "miseEnOeuvre": "• Identification des jeunes volontaires\n• Mise en relation avec des mentors formés\n• Suivi régulier du parcours",
    "indicateur": "• Nombre de jeunes accompagnés\n• Taux de poursuite en formation ou emploi",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "TRACE : un mentor pour chaque jeune",
    "isKeyMeasure": false
  },
  {
    "id": "emploi-clauses-jeunesse-marches",
    "priorityId": "emploi",
    "title": "L’emploi des jeunes au cœur des marchés publics",
    "impact": "Des opportunités concrètes d’emploi et de formation.",
    "tag": "Emploi",
    "constat": "Les marchés publics représentent un levier économique encore sous-utilisé pour l’insertion des jeunes.",
    "proposition": "Intégrer des clauses favorisant l’embauche et la formation des jeunes dans les marchés municipaux.",
    "miseEnOeuvre": "• Clauses sociales renforcées\n• Suivi des engagements des entreprises\n• Partenariats avec les acteurs de l’insertion",
    "indicateur": "• Nombre de jeunes recrutés\n• Nombre de marchés intégrant ces clauses",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "L’emploi des jeunes au cœur des marchés publics",
    "isKeyMeasure": false
  },
  {
    "id": "jeunesse-epiceries-etudiantes",
    "priorityId": "jeunesse",
    "title": "Des épiceries solidaires pour les étudiants",
    "impact": "Réduire la précarité étudiante.",
    "tag": "Jeunesse",
    "constat": "De nombreux étudiants rencontrent des difficultés alimentaires et financières.",
    "proposition": "Créer et soutenir des épiceries solidaires dédiées aux étudiants.",
    "miseEnOeuvre": "• Mise à disposition de locaux\n• Partenariats associatifs\n• Produits à prix réduits",
    "indicateur": "• Nombre d’étudiants bénéficiaires",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Des épiceries solidaires pour les étudiants",
    "isKeyMeasure": false
  },
  {
    "id": "logement-etudiant-accessible",
    "priorityId": "logement",
    "title": "Un logement étudiant accessible",
    "impact": "Permettre aux étudiants de se loger dignement.",
    "tag": "Logement",
    "constat": "Le coût et la rareté du logement étudiant freinent l’accès aux études.",
    "proposition": "Développer une offre de logements étudiants accessibles et diversifiés.",
    "miseEnOeuvre": "• Mobilisation du parc existant\n• Soutien aux résidences étudiantes\n• Encadrement des loyers abusifs",
    "indicateur": "• Nombre de logements créés ou mobilisés",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Un logement étudiant accessible",
    "isKeyMeasure": false
  },
  {
    "id": "emploi-jobs-etudiants",
    "priorityId": "emploi",
    "title": "Des jobs municipaux compatibles avec les études",
    "impact": "Faciliter l’autonomie financière des étudiants.",
    "tag": "Emploi",
    "constat": "Les emplois étudiants sont souvent précaires et incompatibles avec les études.",
    "proposition": "Proposer des emplois municipaux adaptés aux contraintes étudiantes.",
    "miseEnOeuvre": "• Contrats flexibles\n• Horaires adaptés\n• Missions utiles à la collectivité",
    "indicateur": "• Nombre d’emplois créés",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Des jobs municipaux compatibles avec les études",
    "isKeyMeasure": false
  },
  {
    "id": "democratie-budget-participatif-plus",
    "priorityId": "democratie",
    "title": "Des budgets participatifs renforcés",
    "impact": "Redonner du pouvoir direct aux citoyens.",
    "tag": "Démocratie",
    "constat": "Les budgets participatifs restent trop limités en montant et en portée.",
    "proposition": "Augmenter les moyens et simplifier l’accès aux budgets participatifs.",
    "miseEnOeuvre": "• Budget augmenté\n• Accompagnement des porteurs de projets\n• Suivi public des réalisations",
    "indicateur": "• Montant alloué\n• Nombre de projets réalisés",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Des budgets participatifs renforcés",
    "isKeyMeasure": false
  },
  {
    "id": "democratie-referendum-local",
    "priorityId": "democratie",
    "title": "Droit d’interpellation et référendum local",
    "impact": "Une démocratie locale plus directe.",
    "tag": "Démocratie",
    "constat": "Les citoyens disposent de peu de leviers directs pour interpeller la municipalité.",
    "proposition": "Instaurer un droit d’interpellation citoyenne et des référendums locaux sur les sujets majeurs.",
    "miseEnOeuvre": "• Seuils de signatures clairs\n• Procédures transparentes\n• Engagement de réponse municipale",
    "indicateur": "• Nombre d’interpellations citoyennes",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Droit d’interpellation et référendum local",
    "isKeyMeasure": false
  },
  {
    "id": "culture-hors-les-murs",
    "priorityId": "culture_sport",
    "title": "La culture hors les murs",
    "impact": "Une culture accessible à tous, partout.",
    "tag": "Culture & Sport",
    "constat": "L’offre culturelle reste concentrée dans certains lieux.",
    "proposition": "Déployer la culture dans les quartiers, l’espace public et les lieux de vie.",
    "miseEnOeuvre": "• Spectacles itinérants\n• Soutien aux artistes locaux\n• Actions culturelles de proximité",
    "indicateur": "• Nombre d’événements organisés",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "La culture hors les murs",
    "isKeyMeasure": false
  },
  {
    "id": "sante-sport-ordonnance",
    "priorityId": "ecologie_sante",
    "title": "Le sport-santé sur ordonnance",
    "impact": "Prévenir plutôt que guérir.",
    "tag": "Écologie",
    "constat": "L’inactivité physique est un facteur majeur de problèmes de santé.",
    "proposition": "Développer le sport-santé prescrit par les professionnels de santé.",
    "miseEnOeuvre": "• Partenariats médicaux et sportifs\n• Accès facilité aux équipements\n• Suivi des bénéficiaires",
    "indicateur": "• Nombre de prescriptions sport-santé",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Le sport-santé sur ordonnance",
    "isKeyMeasure": false
  },
  {
    "id": "inclusion-accessibilite-universelle",
    "priorityId": "inclusion_droits",
    "title": "Une ville 100 % accessible",
    "impact": "Une ville inclusive pour toutes et tous.",
    "tag": "Inclusion",
    "constat": "Les personnes en situation de handicap rencontrent encore trop d’obstacles.",
    "proposition": "Faire de l’accessibilité universelle une priorité municipale.",
    "miseEnOeuvre": "• Mise aux normes des équipements\n• Accessibilité de l’espace public\n• Formation des agents",
    "indicateur": "• Taux d’équipements accessibles",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Une ville 100 % accessible",
    "isKeyMeasure": false
  },
  {
    "id": "prevention-educateurs-rue",
    "priorityId": "prevention",
    "title": "Prévention spécialisée et éducateurs de rue renforcés",
    "impact": "Prévenir les ruptures et renforcer le lien social.",
    "tag": "Prévention",
    "constat": "La prévention est souvent sous-dotée face aux difficultés sociales.",
    "proposition": "Renforcer les équipes de prévention spécialisée et les éducateurs de rue.",
    "miseEnOeuvre": "• Recrutement d’éducateurs\n• Présence renforcée sur le terrain\n• Partenariats associatifs",
    "indicateur": "• Nombre d’éducateurs déployés",
    "coverImage": "/measures/placeholder.jpg",
    "coverAlt": "Prévention spécialisée et éducateurs de rue renforcés",
    "isKeyMeasure": false
  }
];

export const videos: Video[] = [
  {
    "id": "video-1",
    "title": "UTILES : l'administration proche des habitants",
    "description": "Déployer un bus municipal équipé pour l’orientation et les démarches simples, présent régulièrement dans les quartiers.",
    "youtubeId": "_LI9toOcs40"
  },
  {
    "id": "video-1",
    "title": "UTILES pour Strasbourg : notre vision",
    "description": "Un programme né du terrain, co-construit avec les habitants.",
    "youtubeId": "pKJJ_dLjMB0"
  },
  {
    "id": "video-2",
    "title": "Le Cahier de doléances citoyen",
    "description": "Comment nous avons recueilli la parole des Strasbourgeois.",
    "youtubeId": "kXExpEcDLeI"
  },
  {
    "id": "video-3",
    "title": "Yannick : Engagé avec UTILES 67",
    "description": "Nos solutions pour un logement social plus juste.",
    "youtubeId": "rptP-rn386Q",
    "priorityId": "logement"
  },
  {
    "id": "video-4",
    "title": "Tentatives d'intimidations ",
    "description": "Bus-Mairie, Voisins-Relais : rapprocher les services publics.",
    "youtubeId": "D-bVV2DoGyM",
    "priorityId": "services_publics"
  },
  {
    "id": "video-5",
    "title": "Au marché de Haute Pierre : un quartier qui vit",
    "description": "A la rencontre des habitants de Haute Pierre",
    "youtubeId": "UvvbPBr9UkE",
    "priorityId": "Marché"
  }
  
];

export const events: Event[] = [
  {
    "id": "event-1",
    "title": "Marché Boulevard de la Marne",
    "description": "Nous allons à la rencontre des habitants du quartier.",
    "date": "2026-01-13",
    "time": "09:30",
    "location": "Allées du Marché de la Marne",
    "address": "Boulevard de la Marne, Strasbourg"
  },
  {
    "id": "event-2",
    "title": "Marché Neuhof",
    "description": "Nous allons à la rencontre des habitants du quartier.",
    "date": "2026-01-15",
    "time": "09:30",
    "location": "Allées du Marché Neuhof",
    "address": "Allée Reuss, Strasbourg"
  },
  {
    "id": "event-3",
    "title": "Marché Cronenbourg",
    "description": "Nous allons à la rencontre des habitants du quartier.",
    "date": "2026-01-21",
    "time": "09:30",
    "location": "Allées du Marché Cronenbourg",
    "address": "Place de Haldenbourg, Strasbourg"
  },
  {
    "id": "event-4",
    "title": "Marché de la Robertsau ",
    "description": "Nous allons à la rencontre des habitants du quartier.",
    "date": "2026-01-24",
    "time": "09:30",
    "location": "Allées du Marché Robertsau",
    "address": "Place du Corps de Garde, Strasbourg"
  }
];

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
    ],
    "videoUrl": ""
  },
  {
    "id": "member-4",
    "name": " Hinda Bouchrite,",
    "quartier": "Quartier Gare",
    "role": "spécialiste en mode",
    "utilesRole": "Militante",
    "quote": "J'ai trouvé chez UTILES, un mouvement qui me ressemble, un espace où chacun a sa place, sans jugement ni étiquette. Aujourd’hui, je m’engage pour porter la voix des habitants de mon quartier, pour défendre ce qui compte vraiment pour eux et pour contribuer à un projet collectif fondé sur l’humain, la proximité et le respect.",
    "bio": "Mon engagement est né autrement, dans le quotidien, dans l’observation, dans les échanges simples avec les habitants autour de moi. J’ai compris que l’utile se construit sur le terrain, par l’écoute et l’action concrète.C’est pour cela que je me suis engagée avec Utiles. J’y ai trouvé un mouvement qui me ressemble, un espace où chacun a sa place, sans jugement ni étiquette. Aujourd’hui, je m’engage pour porter la voix des habitants de mon quartier, pour défendre ce qui compte vraiment pour eux et pour contribuer à un projet collectif fondé sur l’humain, la proximité et le respect.",
    "photo": "/Team/Sans titre-7.png",
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
    "photo": "/Team/Sans titre-3.png",
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
    "photo": "/Team/Sans titre-8.png",
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
    "role": "Technicien",
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

export const getMeasuresByPriority = (priorityId: string): Measure[] => {
  return measures.filter((measure) => measure.priorityId === priorityId);
};

export const getPriorityById = (priorityId: string): Priority | undefined => {
  return priorities.find((priority) => priority.id === priorityId);
};

export const getMeasureById = (measureId: string): Measure | undefined => {
  return measures.find((measure) => measure.id === measureId);
};

