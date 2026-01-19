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
    "description": "Garantir un habitat digne, accessible et protecteur pour tous.",
    "icon": "Home",
    "color": "amber",
    "heroImage": apartment,
    "heroAlt": "Immeubles résidentiels à Strasbourg"
  },
  {
    "id": "services_publics",
    "title": "Services publics de proximité",
    "description": "Des services municipaux accessibles, utiles et proches des habitants.",
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
    "description": "Protéger la santé, le pouvoir de vivre et le quotidien.",
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
    "description": "Soutenir, protéger et émanciper les jeunes à Strasbourg.",
    "icon": "Sparkles",
    "color": "rose",
    "heroImage": youth,
    "heroAlt": "Jeunesse de Strasbourg"
  },
  {
    "id": "democratie",
    "title": "Démocratie locale réelle",
    "description": "Redonner du pouvoir aux habitants, au plus près du terrain.",
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
    "description": "Protéger les plus fragiles et renforcer la cohésion sociale.",
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
/* LOGEMENT */
{
    "id": "logement-transparence",
    "priorityId": "logement",
    "title": "Mieux réguler et mobiliser le parc existant",
    "impact": "Lutter contre la vacance et les abus",
    "tag": "Logement",
    "constat": "Avant de construire toujours plus, il faut mieux utiliser l’existant. Des logements restent vacants ou sont détournés de leur usage d'habitation.",
    "proposition": "Mobiliser le parc public et privé, lutter contre les logements vacants et encadrer les pratiques abusives dans les zones tendues.",
    "miseEnOeuvre": "Mobilisation renforcée du parc, lutte active contre la vacance, encadrement ferme.",
    "indicateur": "Mobilisation effective du parc existant, Taux de vacance, Nombre de logements remis sur le marché",
    "coverImage": "/measures/210831StrasbourgLeSaintTrop_26-scaled.jpg",
    "coverAlt": "Mieux réguler le parc de logements",
    "isKeyMeasure": true},
{
    "id": "logement-habitat-indigne",
    "priorityId": "logement",
    "title": "Protéger les habitants face au logement indigne",
    "impact": "Plus personne ne reste seul face à l’insalubrité",
    "tag": "Logement",
    "constat": "Humidité, froid, insalubrité : vivre dans un logement indigne n'est pas un choix et pèse sur la santé et la vie quotidienne.",
    "proposition": "Renforcer les moyens de la Ville pour repérer et traiter plus vite les situations d'indignité, en coordonnant l'action sociale et sanitaire.",
    "miseEnOeuvre": "Repérage rapide, accompagnement des habitants, action coordonnée Ville-services sociaux-sanitaires.",
    "indicateur": "Nombre de situations traitées, Délais d'intervention, Relogements effectués",
    "coverImage": "/measures/bandeau-logement.jpg",
    "coverAlt": "Protéger face au logement indigne",
    "isKeyMeasure": true},
{
    "id": "logement-permis-louer",
    "priorityId": "logement",
    "title": "Renforcer le contrôle de l'habitat",
    "impact": "Garantir un logement sain pour tous",
    "tag": "Logement",
    "constat": "Certains logements sont mis en location sans garanties minimales de salubrité.",
    "proposition": "Étendre et rendre plus efficace les outils de contrôle comme le permis de louer pour assainir le parc locatif.",
    "miseEnOeuvre": "Ciblage des zones prioritaires, contrôles renforcés, sanctions si nécessaire.",
    "indicateur": "Nombre de contrôles effectués, Mises en conformité réalisées",
    "coverImage": "/measures/Permisdelouer.jpg",
    "coverAlt": "Renforcer le contrôle de l'habitat",
    "isKeyMeasure": false},
{
    "id": "logement-marchands-sommeil",
    "priorityId": "logement",
    "title": "Lutter contre les marchands de sommeil",
    "impact": "Protéger les plus fragiles",
    "tag": "Logement",
    "constat": "L'exploitation de la misère par le logement indigne est inacceptable.",
    "proposition": "Action coordonnée et ferme contre les propriétaires exploitant la précarité des locataires.",
    "miseEnOeuvre": "Cellule de coordination, priorisation des dossiers, accompagnement juridique et social des victimes.",
    "indicateur": "Procédures engagées, Relogements sécurisés",
    "coverImage": "/measures/appartement-coul-1-site-sommeil.jpg",
    "coverAlt": "Lutter contre les marchands de sommeil",
    "isKeyMeasure": false},
{
    "id": "logement-airbnb",
    "priorityId": "logement",
    "title": "Encadrer les locations touristiques",
    "impact": "Préserver le logement pour les habitants",
    "tag": "Logement",
    "constat": "Le développement incontrôlé des locations touristiques réduit l'offre de logements pour les habitants.",
    "proposition": "Encadrer et contrôler strictement les locations de type Airbnb pour remettre des logements sur le marché classique.",
    "miseEnOeuvre": "Contrôles réguliers, application des règlements, sanctions en cas d'abus.",
    "indicateur": "Nombre de contrôles, Logements revenus au marché classique",
    "coverImage": "/measures/touristiques-cadena.jpg",
    "coverAlt": "Encadrer les locations touristiques",
    "isKeyMeasure": false},
{
    "id": "logement-etudiant-accessible",
    "priorityId": "logement",
    "title": "Sécuriser le logement étudiant",
    "impact": "Étudier sans l'angoisse du logement",
    "tag": "Logement",
    "constat": "Pour de nombreux étudiants, se loger est une source majeure d’angoisse et de précarité.",
    "proposition": "Améliorer l'accès au logement étudiant abordable et développer des solutions temporaires dignes pour les transitions.",
    "miseEnOeuvre": "Mobilisation du parc existant, solutions temporaires (stages, rentrée), meilleure information.",
    "indicateur": "Accès effectif au logement étudiant, Nombre de solutions temporaires proposées",
    "coverImage": "/measures/hugo-kret-allavoine-etudiant-en-master-informatique-occupe-une-chambre-de-10-m-2-dans-la-residence-paul-appell-depuis-quatre-ans-photo-jean-francois-badias-1712512352.jpg",
    "coverAlt": "Sécuriser le logement étudiant",
    "isKeyMeasure": false},

/* SERVICES PUBLICS */
{
    "id": "services-illectronisme",
    "priorityId": "services_publics",
    "title": "Simplifier l’accès aux services municipaux",
    "impact": "Chacun doit pouvoir faire valoir ses droits",
    "tag": "Services publics",
    "constat": "Démarches complexes, information peu claire : beaucoup renoncent à leurs droits ou peinent à accéder aux services.",
    "proposition": "Faciliter l’accès pour tous via une information plus lisible et un accompagnement humain renforcé.",
    "miseEnOeuvre": "Information claire, accompagnement humain, attention aux publics fragiles.",
    "indicateur": "Accessibilité des services, Satisfaction des usagers, Réduction du non-recours",
    "coverImage": "/measures/services-numerique.jpg",
    "coverAlt": "Simplifier l’accès aux services municipaux",
    "isKeyMeasure": true},
{
    "id": "services-bus-mairie",
    "priorityId": "services_publics",
    "title": "Renforcer la présence dans les quartiers",
    "impact": "La Ville vient à vous",
    "tag": "Services publics",
    "constat": "L'éloignement des services publics crée une distance physique et symbolique avec les habitants.",
    "proposition": "Renforcer la présence municipale dans les quartiers pour réduire les distances et recréer la confiance.",
    "miseEnOeuvre": "Présence de proximité, réponse aux besoins locaux, lien direct avec les habitants.",
    "indicateur": "Présence effective dans les quartiers, Fréquentation des points d'accueil délocalisés",
    "coverImage": "/measures/image_processing20240315-15617-m75vm2.jpg",
    "coverAlt": "Renforcer la présence dans les quartiers",
    "isKeyMeasure": true},
{
    "id": "services-referent",
    "priorityId": "services_publics",
    "title": "Mieux accompagner les parcours de vie",
    "impact": "Prévenir les ruptures de parcours",
    "tag": "Services publics",
    "constat": "Les besoins évoluent (jeunesse, emploi, vieillissement) et les réponses sont parfois cloisonnées.",
    "proposition": "Des services capables d'orienter et d'accompagner globalement les parcours de vie pour éviter les ruptures.",
    "miseEnOeuvre": "Action coordonnée, lisible, attentive aux situations individuelles, sans stigmatisation.",
    "indicateur": "Nombre de parcours accompagnés, Réduction des ruptures de suivi",
    "coverImage": "/measures/referent-administratif.jpeg",
    "coverAlt": "Mieux accompagner les parcours de vie",
    "isKeyMeasure": false},
{
    "id": "services-marches",
    "priorityId": "services_publics",
    "title": "Valoriser le rôle des agents municipaux",
    "impact": "Un service public de qualité",
    "tag": "Services publics",
    "constat": "Les agents sont en première ligne. Un service public efficace repose sur des agents reconnus et soutenus.",
    "proposition": "Reconnaître et valoriser le rôle des agents, leur donner les moyens d'agir et soutenir les initiatives de terrain.",
    "miseEnOeuvre": "Moyens d'action, conditions de travail respectueuses, soutien aux initiatives.",
    "indicateur": "Satisfaction des agents, Qualité de l'accueil, Initiatives soutenues",
    "coverImage": "/measures/stand-marché.jpeg",
    "coverAlt": "Valoriser le rôle des agents municipaux",
    "isKeyMeasure": false},
{
    "id": "services-voisins-relais",
    "priorityId": "services_publics",
    "title": "Voisins-Relais et solidarité de proximité",
    "impact": "L'entraide au quotidien",
    "tag": "Services publics",
    "constat": "L'isolement et la méconnaissance des aides peuvent être combattus par la solidarité de voisinage.",
    "proposition": "Soutenir les dynamiques d'entraide et de relais d'information entre habitants.",
    "miseEnOeuvre": "Appui aux initiatives citoyennes, lien avec les associations de quartier.",
    "indicateur": "Nombre d'initiatives soutenues, Lien social renforcé",
    "coverImage": "/measures/Aide-administrative-www-espacemagnan-com.jpg",
    "coverAlt": "Voisins-Relais et solidarité de proximité",
    "isKeyMeasure": false},
{
    "id": "services-permanences",
    "priorityId": "services_publics",
    "title": "Permanences de proximité",
    "impact": "Des services accessibles partout",
    "tag": "Services publics",
    "constat": "Certains quartiers manquent de points d'accès aux services essentiels.",
    "proposition": "Maintenir et développer des permanences administratives au plus près des habitants.",
    "miseEnOeuvre": "Permanences régulières, lieux identifiés, horaires adaptés.",
    "indicateur": "Nombre de permanences, Fréquentation",
    "coverImage": "/measures/cd54eb_1e9cfcb96d03484c95b39505497ee5ac~mv2.jpg",
    "coverAlt": "Permanences de proximité",
    "isKeyMeasure": false},

/* EMPLOI (Partial update from JEUNESSE.md) */
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
    "isKeyMeasure": true},
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
    "isKeyMeasure": false},
{
    "id": "emploi-jobs-etudiants",
    "priorityId": "emploi",
    "title": "Favoriser des emplois compatibles avec les études",
    "impact": "Travailler sans sacrifier ses études",
    "tag": "Emploi",
    "constat": "Travailler pour vivre ne doit pas signifier s'épuiser au détriment de ses études ou de son avenir.",
    "proposition": "Créer des jobs municipaux adaptés aux rythmes des jeunes et intégrer des clauses \"Jeunes\" dans les marchés publics.",
    "miseEnOeuvre": "Missions de médiation, soutien scolaire, transition écologique. Emplois compatibles avec les parcours de réussite.",
    "indicateur": "Nombre de jeunes employés, Marchés intégrant la clause Jeunes",
    "coverImage": "/measures/animateur-scolaire.jpg",
    "coverAlt": "Favoriser des emplois compatibles avec les études",
    "isKeyMeasure": false},
{
    "id": "emploi-clauses-jeunesse-marches",
    "priorityId": "emploi",
    "title": "L’emploi des jeunes dans la commande publique",
    "impact": "Des opportunités concrètes",
    "tag": "Emploi",
    "constat": "La commande publique peut être un levier direct pour l'emploi des jeunes.",
    "proposition": "Utiliser les marchés publics pour créer des opportunités d'emploi et de formation pour les jeunes Strasbourgeois.",
    "miseEnOeuvre": "Clauses d'insertion spécifiques, missions valorisantes, lien avec les entreprises attributaires.",
    "indicateur": "Heures d'insertion jeunes réalisées, Nombre de bénéficiaires",
    "coverImage": "/measures/solutions-jeunes.jpeg",
    "coverAlt": "L’emploi des jeunes dans la commande publique",
    "isKeyMeasure": false},

/* ECOLOGIE */
{
    "id": "eco-air-bruit",
    "priorityId": "ecologie_sante",
    "title": "Protéger la santé par un environnement plus sain",
    "impact": "Agir là où ça fait mal, quartier par quartier",
    "tag": "Écologie",
    "constat": "On ne protège bien que ce que l’on mesure. La pollution et le bruit impactent la santé, surtout celle des plus jeunes.",
    "proposition": "Renforcer la mesure de l’air et du bruit quartier par quartier, avec priorité aux écoles et crèches, pour agir concrètement.",
    "miseEnOeuvre": "Mesures localisées, apaisement de la circulation, végétalisation, isolation phonique si nécessaire.",
    "indicateur": "Évolution qualité air/bruit quartiers prioritaires, Actions d'apaisement réalisées",
    "coverImage": "/measures/mesure-qualite-air.webp",
    "coverAlt": "Protéger la santé par un environnement plus sain",
    "isKeyMeasure": true},
{
    "id": "eco-renovation",
    "priorityId": "ecologie_sante",
    "title": "Faire baisser les factures par la rénovation",
    "impact": "Améliorer le confort et le pouvoir de vivre",
    "tag": "Écologie",
    "constat": "L'écologie doit améliorer le pouvoir de vivre. Les passoires thermiques pèsent sur les budgets et le confort.",
    "proposition": "Accélérer la rénovation énergétique pour réduire les factures et améliorer le confort, en ciblant les ménages modestes.",
    "miseEnOeuvre": "Priorité aux logements énergivores et copropriétés en difficulté. Accompagnement pour réduire les émissions sans culpabiliser.",
    "indicateur": "Logements rénovés, Impact sur les factures, Confort thermique amélioré",
    "coverImage": "/measures/prix-d-une-renovation-energetique-globale-jXERo.jpg",
    "coverAlt": "Faire baisser les factures par la rénovation",
    "isKeyMeasure": true},
{
    "id": "eco-ecologie-accessible",
    "priorityId": "ecologie_sante",
    "title": "Une écologie accessible à tous, partout",
    "impact": "Une écologie qui rassemble au lieu de diviser",
    "tag": "Écologie",
    "constat": "L’écologie ne doit pas être un luxe réservé à quelques-uns.",
    "proposition": "Développer jardins partagés, circuits courts et accès à une alimentation saine et locale, y compris dans les quartiers populaires.",
    "miseEnOeuvre": "Soutien aux initiatives locales, jardins partagés, circuits courts, alimentation saine pour tous.",
    "indicateur": "Développement initiatives écologiques de proximité, Participation habitants",
    "coverImage": "/measures/action-collective-transition-ecologique-fb.png",
    "coverAlt": "Une écologie accessible à tous, partout",
    "isKeyMeasure": false},
{
    "id": "eco-alimentation-locale",
    "priorityId": "ecologie_sante",
    "title": "Alimentation saine et circuits courts",
    "impact": "Mieux manger et soutenir les producteurs",
    "tag": "Écologie",
    "constat": "L'accès à une alimentation de qualité est inégal.",
    "proposition": "Faciliter l'accès aux produits locaux et sains via les circuits courts et les marchés de proximité.",
    "miseEnOeuvre": "Partenariats producteurs locaux, accessibilité dans tous les quartiers.",
    "indicateur": "Nombre de circuits courts soutenus, Accessibilité de l'offre",
    "coverImage": "/measures/circuits-courts.jpg",
    "coverAlt": "Alimentation saine et circuits courts",
    "isKeyMeasure": false},
{
    "id": "sante-sport-ordonnance",
    "priorityId": "ecologie_sante",
    "title": "Le sport-santé sur ordonnance",
    "impact": "Prévenir plutôt que guérir",
    "tag": "Santé",
    "constat": "L’activité physique est un levier majeur de santé publique.",
    "proposition": "Développer le sport-santé prescrit par les professionnels de santé pour prévenir et accompagner les maladies chroniques.",
    "miseEnOeuvre": "Partenariats médicaux et sportifs, accès facilité aux équipements.",
    "indicateur": "Nombre de prescriptions, Bénéficiaires accompagnés",
    "coverImage": "/measures/sport-santé.jpg",
    "coverAlt": "Le sport-santé sur ordonnance",
    "isKeyMeasure": false},

/* MOBILITÉS */
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
    "isKeyMeasure": false},
{
    "id": "mobilites-pistes-securisees",
    "priorityId": "mobilites",
    "title": "Des pistes cyclables réellement sécurisées",
    "impact": "Des déplacements plus sûrs pour tous",
    "tag": "Mobilités",
    "constat": "La sécurité des cyclistes et la cohabitation avec les piétons nécessitent des aménagements adaptés.",
    "proposition": "Créer un réseau cyclable continu et sécurisé, pensé pour tous les âges.",
    "miseEnOeuvre": "Sécurisation des points noirs, continuité des itinéraires, séparation des flux si nécessaire.",
    "indicateur": "Kilomètres sécurisés, Baisse de l'accidentologie",
    "coverImage": "/measures/balade-velo-strasbourg_0.jpg",
    "coverAlt": "Des pistes cyclables réellement sécurisées",
    "isKeyMeasure": false},

/* JEUNESSE */
{
    "id": "jeunesse-epiceries-etudiantes",
    "priorityId": "jeunesse",
    "title": "Garantir une alimentation digne et accessible",
    "impact": "L'alimentation ne doit pas être un privilège",
    "tag": "Jeunesse",
    "constat": "La précarité étudiante est une réalité. Avoir accès à une alimentation de qualité est difficile pour beaucoup.",
    "proposition": "Création d'une épicerie solidaire dédiée aux étudiants et d'une offre mobile pour les campus et quartiers.",
    "miseEnOeuvre": "Partenariats CROUS/Assos/Producteurs. Prix réduits, accès digne, produits de qualité et circuits courts.",
    "indicateur": "Bénéficiaires alimentation solidaire, Nombre de structures créées",
    "coverImage": "/measures/definition-epicerie-solidaire.png",
    "coverAlt": "Garantir une alimentation digne et accessible",
    "isKeyMeasure": true},
{
    "id": "etudiant-droits",
    "priorityId": "jeunesse",
    "title": "Simplifier l’accès aux droits",
    "impact": "Lutter contre le non-recours",
    "tag": "Jeunesse",
    "constat": "De nombreux jeunes passent à côté de droits essentiels (aides logement, santé) faute d'accompagnement.",
    "proposition": "Mise en place de permanences municipales dédiées aux jeunes et étudiants pour l'ouverture des droits.",
    "miseEnOeuvre": "Lien avec Universités/CROUS/Quartiers. Aide aux dossiers, prévention des ruptures.",
    "indicateur": "Taux de non-recours jeunes, Dossiers accompagnés",
    "coverImage": "/measures/aides-acces-droits-jeuns.webp",
    "coverAlt": "Simplifier l’accès aux droits",
    "isKeyMeasure": false},
{
    "id": "jeunesse-trace-mentorat",
    "priorityId": "jeunesse",
    "title": "Sécuriser les parcours des jeunes",
    "impact": "Permettre à chacun de se projeter",
    "tag": "Jeunesse",
    "constat": "La précarité fragilise les parcours et l'avenir. Soutenir la jeunesse, c'est investir dans l'égalité des chances.",
    "proposition": "Garantir des conditions de vie dignes et sécuriser les parcours via un accompagnement adapté.",
    "miseEnOeuvre": "Investissement dans l'égalité des chances, dispositifs de soutien et de mentorat.",
    "indicateur": "Parcours sécurisés, Réduction des inégalités d'accès",
    "coverImage": "/measures/WhatsApp Image 2026-01-14 at 23.30.23.jpeg",
    "coverAlt": "Sécuriser les parcours des jeunes",
    "isKeyMeasure": false},

/* DÉMOCRATIE */
{
    "id": "democratie-budget-participatif-plus",
    "priorityId": "democratie",
    "title": "Partir des besoins exprimés par les habitants",
    "impact": "Reconnaître la parole citoyenne",
    "tag": "Démocratie",
    "constat": "Les habitants sont les mieux placés pour parler de leur quotidien, mais ne se sentent pas assez écoutés.",
    "proposition": "Saisir la parole citoyenne (cahiers de doléances, expression locale) comme base réelle de l'action publique.",
    "miseEnOeuvre": "Prise en compte des remontées terrain, réponses concrètes aux besoins exprimés (cadre de vie, services).",
    "indicateur": "Actions issues des demandes habitantes, Satisfaction exprimée",
    "coverImage": "/measures/BP-site.jpg",
    "coverAlt": "Partir des besoins exprimés par les habitants",
    "isKeyMeasure": true},
{
    "id": "democratie-solutions-quartiers",
    "priorityId": "democratie",
    "title": "Renforcer la démocratie de proximité",
    "impact": "Décider au plus près du terrain",
    "tag": "Démocratie",
    "constat": "La démocratie doit s'ancrer dans les quartiers pour être vivante.",
    "proposition": "Renforcer les espaces de dialogue locaux pour favoriser l'expression et faire remonter les priorités.",
    "miseEnOeuvre": "Espaces de dialogue accessibles et ouverts, échanges réguliers élus-habitants.",
    "indicateur": "Participation aux instances locales, Diversité des publics",
    "coverImage": "/measures/coconstruire.jpeg",
    "coverAlt": "Renforcer la démocratie de proximité",
    "isKeyMeasure": false},
{
    "id": "democratie-concertation-proactive",
    "priorityId": "democratie",
    "title": "Rendre les décisions compréhensibles",
    "impact": "La transparence crée la confiance",
    "tag": "Démocratie",
    "constat": "Participer sans comprendre n'est pas participer. L'action publique manque parfois de lisibilité.",
    "proposition": "Expliquer les choix, justifier les décisions et permettre aux habitants de suivre les engagements.",
    "miseEnOeuvre": "Transparence des décisions, suivi public de l'avancement des projets.",
    "indicateur": "Compréhension des décisions, Suivi des engagements",
    "coverImage": "/measures/dialoguer2.jpeg",
    "coverAlt": "Rendre les décisions compréhensibles",
    "isKeyMeasure": false},
{
    "id": "democratie-referendum-local",
    "priorityId": "democratie",
    "title": "Associer durablement les habitants",
    "impact": "Une participation utile et continue",
    "tag": "Démocratie",
    "constat": "La participation ne doit pas être ponctuelle ou symbolique.",
    "proposition": "Inscrire la participation dans la durée : associer en amont, écouter, évaluer collectivement.",
    "miseEnOeuvre": "Association en amont des projets, évaluation partagée des actions.",
    "indicateur": "Suivi des engagements, Sentiment d'écoute",
    "coverImage": "/measures/referendum1.jpg",
    "coverAlt": "Associer durablement les habitants",
    "isKeyMeasure": false},

/* CULTURE */
{
    "id": "culture-hors-les-murs",
    "priorityId": "culture_sport",
    "title": "La culture hors les murs",
    "impact": "Une culture accessible à tous, partout.",
    "tag": "Culture & Sport",
    "constat": "L’offre culturelle reste concentrée dans certains lieux.",
    "proposition": "Déployer la culture dans les quartiers, l’espace public et les lieux de vie.",
    "miseEnOeuvre": "Spectacles itinérants, soutien aux artistes locaux, actions culturelles de proximité.",
    "indicateur": "Nombre d’événements organisés",
    "coverImage": "/measures/a-la-manifestation-du-monde-de-la-culture-a-strasbourg-contre-l-austerite-le-13-juin-dernier-a-succede-la-mobilisation-contre-l-eventuelle-arrivee-du-rn-au-pouvoir-photo-david-geiss-1719339850.jpg",
    "coverAlt": "La culture hors les murs",
    "isKeyMeasure": false},

/* SOLIDARITÉS (INCLUSION) - Updated from SOLIDARITES.md */
{
    "id": "inclusion-accessibilite-universelle",
    "priorityId": "inclusion_droits",
    "title": "Une solidarité respectueuse",
    "impact": "Aider, c'est d'abord écouter et respecter",
    "tag": "Inclusion",
    "constat": "La solidarité ne doit jamais humilier ni stigmatiser.",
    "proposition": "Des politiques solidaires qui respectent la dignité, évitent la culpabilisation et reconnaissent les parcours individuels.",
    "miseEnOeuvre": "Approche humaine, respect de la dignité, écoute active.",
    "indicateur": "Respect des personnes accompagnées",
    "coverImage": "/measures/accessibilite.jpg",
    "coverAlt": "Une solidarité respectueuse",
    "isKeyMeasure": true},
{
    "id": "inclusion-non-recours",
    "priorityId": "inclusion_droits",
    "title": "Lutter contre le non-recours aux droits",
    "impact": "Accéder à ses droits ne doit pas être un combat",
    "tag": "Inclusion",
    "constat": "De nombreuses personnes renoncent à des aides essentielles (sociales, municipales) par manque d'info ou complexité.",
    "proposition": "Faire de la lutte contre le non-recours une priorité : simplifier l'info, accompagner, aller vers.",
    "miseEnOeuvre": "Simplification, accompagnement humain renforcé, démarches d'aller-vers.",
    "indicateur": "Évolution du non-recours, Personnes accompagnées",
    "coverImage": "/measures/referent-administratif.jpeg",
    "coverAlt": "Lutter contre le non-recours aux droits",
    "isKeyMeasure": true},
{
    "id": "inclusion-precarite",
    "priorityId": "inclusion_droits",
    "title": "Accompagner face à la précarité",
    "impact": "La Ville comme point d'appui",
    "tag": "Inclusion",
    "constat": "Les situations de précarité sont multiples et les parcours souvent complexes.",
    "proposition": "Renforcer l'accompagnement global pour orienter, prévenir les ruptures et agir avant l'aggravation.",
    "miseEnOeuvre": "Accompagnement coordonné, prévention des ruptures de parcours.",
    "indicateur": "Personnes accompagnées dans la durée, Prévention des aggravations",
    "coverImage": "/measures/Aide-administrative-www-espacemagnan-com.jpg",
    "coverAlt": "Accompagner face à la précarité",
    "isKeyMeasure": false},
{
    "id": "inclusion-lien-social",
    "priorityId": "inclusion_droits",
    "title": "Rompre l’isolement",
    "impact": "Renforcer la cohésion sociale",
    "tag": "Inclusion",
    "constat": "L’isolement fragilise autant que la précarité matérielle, notamment pour les personnes âgées.",
    "proposition": "Soutenir les initiatives locales qui favorisent les rencontres et recréent du lien dans les quartiers.",
    "miseEnOeuvre": "Soutien aux initiatives de lien social, accompagnement des personnes isolées.",
    "indicateur": "Renforcement du lien social, Actions contre l'isolement",
    "coverImage": "/measures/isolement2.webp",
    "coverAlt": "Rompre l’isolement",
    "isKeyMeasure": false},

/* PRÉVENTION */
{
    "id": "prevention-educateurs-rue",
    "priorityId": "prevention",
    "title": "Prévention spécialisée et éducateurs de rue renforcés",
    "impact": "Prévenir les ruptures et renforcer le lien social.",
    "tag": "Prévention",
    "constat": "La prévention est souvent sous-dotée face aux difficultés sociales.",
    "proposition": "Renforcer les équipes de prévention spécialisée et les éducateurs de rue.",
    "miseEnOeuvre": "Recrutement d’éducateurs, présence renforcée sur le terrain, partenariats associatifs.",
    "indicateur": "Nombre d’éducateurs déployés",
    "coverImage": "/measures/educateur-jeune.jpg",
    "coverAlt": "Prévention spécialisée et éducateurs de rue renforcés",
    "isKeyMeasure": false},

/* FINANCES */
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
    "isKeyMeasure": true},

/* SÉCURITÉ */
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
    "isKeyMeasure": true},

/* EUROPE */
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
    "isKeyMeasure": true}
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
