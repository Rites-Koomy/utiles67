import json

# JSON content from the attached file (I'll paste the full content here in the real execution, 
# but for the script I'll simulate reading it or just put the data structure if it was small.
# Since it's large and I read it in the previous step, I will paste the full JSON string here).

json_content = """
{
  "meta": {
    "name": "UTILES pour Strasbourg 2026",
    "baseline": "Un programme co-construit avec les habitants. Du concret, quartier par quartier.",
    "tone": "clair, utile, sans jargon",
    "version": "v1.0",
    "language": "fr-FR"
  },
  "priorities": [
    {
      "id": "logement",
      "title": "Logement digne et abordable",
      "description": "Un logement sain, accessible, et des attributions enfin transparentes."
    },
    {
      "id": "services_publics",
      "title": "Services publics de proximité",
      "description": "Des démarches simples, un visage humain, et la Ville qui vient vers vous."
    },
    {
      "id": "emploi",
      "title": "Emploi local et inclusion",
      "description": "Aider les projets utiles à démarrer et créer des opportunités pour ceux qui en manquent."
    },
    {
      "id": "ecologie_sante",
      "title": "Écologie de la santé",
      "description": "Une écologie qui protège: air, bruit, factures, alimentation, espaces verts."
    },
    {
      "id": "mobilites",
      "title": "Mobilités et stationnement apaisés",
      "description": "Sécuriser, adapter quartier par quartier, et dialoguer avant de décider."
    },
    {
      "id": "jeunesse",
      "title": "Jeunesse et éducation populaire",
      "description": "Un mentor, un réseau, des portes qui s’ouvrent: des parcours qui tiennent."
    },
    {
      "id": "democratie",
      "title": "Démocratie locale réelle",
      "description": "Décider avec les habitants, suivre les engagements, rendre des comptes."
    },
    {
      "id": "culture_sport",
      "title": "Culture, sport et vivre-ensemble",
      "description": "Ce qui nous relie: traditions, mémoires, associations, activités accessibles."
    },
    {
      "id": "inclusion_droits",
      "title": "Ville inclusive et accès aux droits",
      "description": "Personne ne reste sur le bord du chemin: dignité, accessibilité, protection."
    },
    {
      "id": "prevention",
      "title": "Prévention de la radicalisation",
      "description": "Agir tôt, avec les familles, sans stigmatiser: prévenir plutôt que réparer."
    },
    {
      "id": "finances",
      "title": "Finances responsables et transparentes",
      "description": "Chaque euro expliqué, contrôlé, et orienté vers l’utile."
    },
    {
      "id": "securite",
      "title": "Sécurité et tranquillité publique",
      "description": "Présence humaine, médiation, aménagements: une sécurité de confiance."
    },
    {
      "id": "europe",
      "title": "Strasbourg capitale européenne concrète",
      "description": "Faire profiter les quartiers du statut européen: projets visibles et utiles."
    }
  ],
  "measures": [
    {
      "id": "logement-transparence",
      "priorityId": "logement",
      "title": "Transparence du logement social",
      "impact": "Fin de l’opacité, priorité à l’équité",
      "tag": "Logement digne et abordable",
      "constat": "Des familles attendent des années sans comprendre les règles d’attribution, et certains logements se dégradent sans réponse.",
      "proposition": "Créer un référent municipal « Logement social et transparence », centraliser les signalements et publier un rapport annuel clair sur les attributions et les contrôles.",
      "miseEnOeuvre": "Référent identifié + canal unique de signalement + procédure de saisine de l’ANCOLS en cas de dysfonctionnements avérés + présentation publique annuelle.",
      "indicateurs": [
        "Délai moyen de réponse aux signalements",
        "Nombre de contrôles déclenchés / suites données",
        "Publication annuelle accessible"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "logement-habitat-indigne",
      "priorityId": "logement",
      "title": "Réagir vite aux logements indignes",
      "impact": "Plus personne ne reste seul face à l’insalubrité",
      "tag": "Logement digne et abordable",
      "constat": "Humidité, chauffage défaillant, insalubrité: les habitants disent ne plus savoir à qui s’adresser.",
      "proposition": "Donner plus de moyens au contrôle local de l’habitat et créer un droit d’alerte officiel envers les propriétaires, avec une coopération Ville–CCAS–associations.",
      "miseEnOeuvre": "Renforcer les commissions compétentes, organiser un circuit court de traitement des alertes, et coordonner l’accompagnement social et juridique.",
      "indicateurs": [
        "Nombre de logements contrôlés",
        "Nombre de mises en demeure / procédures",
        "Part des situations résolues"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "logement-permis-louer",
      "priorityId": "logement",
      "title": "Étendre le permis de louer",
      "impact": "Assainir le parc locatif",
      "tag": "Logement digne et abordable",
      "constat": "Des logements sont mis en location sans garanties minimales de salubrité.",
      "proposition": "Étendre et rendre plus efficace le permis de louer, avec contrôles et sanctions ciblées.",
      "miseEnOeuvre": "Cartographier les zones prioritaires, renforcer les contrôles, publier un guide simple pour propriétaires et locataires.",
      "indicateurs": [
        "Nombre de demandes instruites",
        "Taux de non-conformité détecté",
        "Évolution des signalements"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "logement-marchands-sommeil",
      "priorityId": "logement",
      "title": "Lutter contre les marchands de sommeil",
      "impact": "Protéger les plus fragiles",
      "tag": "Logement digne et abordable",
      "constat": "Certains propriétaires exploitent la précarité avec des logements dangereux ou sur-occupés.",
      "proposition": "Action coordonnée contre les marchands de sommeil, avec suivi des plaintes et coopération institutionnelle.",
      "miseEnOeuvre": "Cellule de coordination Ville/CCAS/associations, priorisation des dossiers à risque, accompagnement des victimes.",
      "indicateurs": [
        "Nombre de dossiers traités",
        "Procédures engagées",
        "Relogements sécurisés"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "logement-airbnb",
      "priorityId": "logement",
      "title": "Encadrer strictement les locations touristiques",
      "impact": "Remettre des logements sur le marché",
      "tag": "Logement digne et abordable",
      "constat": "Des logements quittent la location classique, aggravant la tension locative.",
      "proposition": "Encadrer et contrôler les locations touristiques type Airbnb, avec sanctions dissuasives.",
      "miseEnOeuvre": "Déclaration obligatoire, contrôles, limitation et amendes en cas de fraude.",
      "indicateurs": [
        "Nombre de contrôles",
        "Nombre de sanctions",
        "Nombre de logements revenus au marché classique"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "services-bus-mairie",
      "priorityId": "services_publics",
      "title": "Bus-Mairie itinérant",
      "impact": "La Ville vient à vous, sans rendez-vous",
      "tag": "Services publics de proximité",
      "constat": "Démarches trop complexes, guichets saturés, tout en ligne sans accompagnement: beaucoup abandonnent.",
      "proposition": "Déployer un bus municipal équipé pour l’orientation et les démarches simples, présent régulièrement dans les quartiers.",
      "miseEnOeuvre": "Un véhicule aménagé, un planning public, des agents formés, passage régulier par secteur.",
      "indicateurs": [
        "Nombre de permanences réalisées",
        "Nombre de démarches / orientations",
        "Satisfaction usagers"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "services-marches",
      "priorityId": "services_publics",
      "title": "Stands municipaux sur les marchés",
      "impact": "Un service public visible et convivial",
      "tag": "Services publics de proximité",
      "constat": "Les habitants veulent une aide simple, au bon endroit, au bon moment.",
      "proposition": "Tenir des stands « Parlons Services Publics » sur les marchés: information, écoute, orientation immédiate.",
      "miseEnOeuvre": "Stand léger + documentation claire + agents/volontaires formés, selon les jours de marché.",
      "indicateurs": [
        "Nombre de personnes reçues",
        "Taux de résolution au premier contact"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "services-voisins-relais",
      "priorityId": "services_publics",
      "title": "Voisins-Relais",
      "impact": "Un coup de main pour ne pas perdre ses droits",
      "tag": "Services publics de proximité",
      "constat": "Des aides sont perdues faute d’explication ou de papier au bon moment.",
      "proposition": "Former des habitants volontaires pour accompagner les démarches et orienter vers les bons services, en lien avec CSC et associations.",
      "miseEnOeuvre": "Appel à volontaires, formation, référent municipal de coordination, cadre éthique clair.",
      "indicateurs": [
        "Nombre de relais actifs",
        "Nombre d’accompagnements",
        "Taux de réorientation réussie"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "services-illectronisme",
      "priorityId": "services_publics",
      "title": "Ateliers « Pas à Pas Numérique »",
      "impact": "Personne n’est exclu par le numérique",
      "tag": "Services publics de proximité",
      "constat": "Quand tout est en ligne, ceux qui maîtrisent mal Internet décrochent.",
      "proposition": "Ateliers gratuits et pratiques (CAF, santé, transports, école) dans bibliothèques et maisons de quartier.",
      "miseEnOeuvre": "Créneaux réguliers, supports simples, binômes bénévoles/agents, accès sans jugement.",
      "indicateurs": [
        "Nombre de participants",
        "Progression mesurée (auto-évaluation)",
        "Taux de réinscription"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "services-permanences",
      "priorityId": "services_publics",
      "title": "Permanences administratives délocalisées",
      "impact": "Moins de déplacements, plus de solutions",
      "tag": "Services publics de proximité",
      "constat": "Les déplacements et files d’attente découragent, surtout pour seniors et familles.",
      "proposition": "Organiser des permanences hebdomadaires dans CSC, maisons de quartier et résidences seniors.",
      "miseEnOeuvre": "Créneaux fixes publiés, prise en charge des cas simples et orientation des cas complexes.",
      "indicateurs": [
        "Nombre de permanences",
        "Délai moyen d’obtention d’un rendez-vous",
        "Satisfaction usagers"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "services-referent",
      "priorityId": "services_publics",
      "title": "Référent administratif par quartier",
      "impact": "Un interlocuteur unique pour les cas compliqués",
      "tag": "Services publics de proximité",
      "constat": "Les dossiers se perdent entre services: chacun renvoie à l’autre.",
      "proposition": "Un agent identifié par quartier suit les situations complexes de bout en bout.",
      "miseEnOeuvre": "Nomination, formation au suivi transversal, circuit court avec les services municipaux et partenaires.",
      "indicateurs": [
        "Nombre de dossiers suivis",
        "Délai de résolution",
        "Taux de retours positifs"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "emploi-strasimpact",
      "priorityId": "emploi",
      "title": "Stras’Impact",
      "impact": "3 000 à 15 000€ pour débloquer les projets utiles",
      "tag": "Emploi local et inclusion",
      "constat": "Des artisans, indépendants, associations et porteurs de projet abandonnent faute d’un coup de pouce au bon moment.",
      "proposition": "Créer un dispositif municipal de microfinancement + accompagnement obligatoire pour sécuriser et pérenniser les projets locaux.",
      "miseEnOeuvre": "Fonds dédié, critères simples (impact local), accompagnement, sélection transparente, suivi à 6/12/24 mois.",
      "indicateurs": [
        "Nombre de projets soutenus",
        "Emplois créés/maintenus",
        "Taux de survie à 2 ans"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "emploi-clauses-locales",
      "priorityId": "emploi",
      "title": "Clauses locales dans les marchés municipaux",
      "impact": "Faire travailler et former ici",
      "tag": "Emploi local et inclusion",
      "constat": "La commande publique est un levier puissant, souvent sous-utilisé pour l’emploi local.",
      "proposition": "Intégrer des clauses favorisant l’emploi local, l’insertion et l’apprentissage dans les marchés municipaux.",
      "miseEnOeuvre": "Guide acheteurs publics, clauses types, suivi des obligations, sanctions/bonus selon respect.",
      "indicateurs": [
        "Part des marchés incluant une clause",
        "Heures d’insertion réalisées",
        "Nombre de bénéficiaires"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "eco-air-bruit",
      "priorityId": "ecologie_sante",
      "title": "Mesurer l’air et le bruit pour protéger la santé",
      "impact": "Agir là où ça fait mal, quartier par quartier",
      "tag": "Écologie de la santé",
      "constat": "Pollution et bruit touchent plus durement certains quartiers, notamment près des axes et autour des écoles.",
      "proposition": "Renforcer la mesure de la qualité de l’air et du bruit, avec priorité écoles/crèches, et déclencher des actions concrètes (apaisement, végétalisation, isolation).",
      "miseEnOeuvre": "Réseau de capteurs, données accessibles, plan d’action par quartier, suivi public des améliorations.",
      "indicateurs": [
        "Couverture du réseau de mesure",
        "Nombre d’actions déclenchées",
        "Évolution des niveaux air/bruit"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "eco-renovation",
      "priorityId": "ecologie_sante",
      "title": "Rénovation énergétique massive",
      "impact": "Moins de factures, plus de confort",
      "tag": "Écologie de la santé",
      "constat": "Les passoires thermiques coûtent cher et abîment la santé, surtout chez les ménages modestes.",
      "proposition": "Accélérer la rénovation énergétique des logements et bâtiments prioritaires (écoles, crèches, parc social), pour réduire les dépenses et les émissions.",
      "miseEnOeuvre": "Audit, programmation pluriannuelle, accompagnement des ménages, mobilisation de financements dédiés.",
      "indicateurs": [
        "Nombre de logements/bâtiments rénovés",
        "Économies d’énergie estimées",
        "Baisse des émissions associées"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "eco-ecologie-accessible",
      "priorityId": "ecologie_sante",
      "title": "Une écologie accessible à tous",
      "impact": "Alimentation saine et nature proche",
      "tag": "Écologie de la santé",
      "constat": "L’écologie ne doit pas être un luxe réservé à certains quartiers.",
      "proposition": "Développer jardins partagés, circuits courts et accès à une alimentation saine et locale, y compris dans les quartiers populaires.",
      "miseEnOeuvre": "Appels à projets citoyens, partenariats producteurs, actions dans les écoles, paniers solidaires.",
      "indicateurs": [
        "Nombre de jardins/circuits soutenus",
        "Participation habitants",
        "Accès à l’offre dans les quartiers prioritaires"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "mob-securiser",
      "priorityId": "mobilites",
      "title": "Pistes cyclables réellement sécurisées",
      "impact": "Moins de conflits, plus de sécurité pour tous",
      "tag": "Mobilités et stationnement apaisés",
      "constat": "Une ligne au sol ne protège personne: pistes interrompues ou peu lisibles créent tensions et accidents.",
      "proposition": "Construire un réseau cyclable continu, lisible et protégé, qui sécurise aussi piétons et automobilistes en clarifiant les usages.",
      "miseEnOeuvre": "Audit des discontinuités, priorisation des axes, aménagements protégés, signalétique claire, suivi public.",
      "indicateurs": [
        "Km de pistes protégées créés",
        "Évolution accidents/incidents",
        "Satisfaction usagers"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "mob-quartier-par-quartier",
      "priorityId": "mobilites",
      "title": "Des solutions adaptées quartier par quartier",
      "impact": "Fin des décisions « taille unique »",
      "tag": "Mobilités et stationnement apaisés",
      "constat": "Ce qui marche en hypercentre ne marche pas forcément en périphérie: commerces, écoles, artisans, seniors n’ont pas les mêmes besoins.",
      "proposition": "Refuser les solutions idéologiques uniques: décider à partir des usages réels et des contraintes de chaque quartier.",
      "miseEnOeuvre": "Diagnostics de terrain, tests temporaires, ajustements, bilan public avant généralisation.",
      "indicateurs": [
        "Nombre de projets avec diagnostic local",
        "Taux d’ajustements après test",
        "Taux d’acceptation"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "mob-concertation",
      "priorityId": "mobilites",
      "title": "Dialoguer avant de décider",
      "impact": "Moins de crispations, plus d’efficacité",
      "tag": "Mobilités et stationnement apaisés",
      "constat": "Les tensions viennent souvent de décisions mal expliquées, mal anticipées et sans concertation.",
      "proposition": "Avant toute modification de circulation ou stationnement, associer habitants et commerçants en amont.",
      "miseEnOeuvre": "Réunions ciblées, ateliers, restitution claire, calendrier partagé, droit à l’ajustement.",
      "indicateurs": [
        "Nombre de concertations en amont",
        "Délai de publication des restitutions",
        "Baisse des réclamations"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "jeunesse-trace",
      "priorityId": "jeunesse",
      "title": "TRACE: mentorat municipal de proximité",
      "impact": "Un réseau pour ceux qui n’en ont pas",
      "tag": "Jeunesse et éducation populaire",
      "constat": "Beaucoup de jeunes disent manquer de repères et de réseaux: ils veulent une personne qui les suit, pas seulement des dispositifs.",
      "proposition": "Créer TRACE (Transmission, Réseau, Accompagnement, Compétences, Élan): mentorat mobilisant actifs et retraités, avec un label municipal pour les partenaires.",
      "miseEnOeuvre": "Identification des jeunes, recrutement/formation des mentors, matching, suivi, valorisation des mentors via label TRACE.",
      "indicateurs": [
        "Nombre de binômes mentor/jeune",
        "Taux de maintien dans le parcours",
        "Accès à stages/emplois/formation"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "jeunesse-clauses",
      "priorityId": "jeunesse",
      "title": "Clauses d’embauche jeunesse dans les marchés",
      "impact": "Des stages et contrats, sans coût supplémentaire",
      "tag": "Jeunesse et éducation populaire",
      "constat": "Sans réseau, accéder à un stage ou une première expérience devient un obstacle majeur.",
      "proposition": "Fixer des objectifs progressifs: au moins 10% des heures sur certains marchés pour apprentissage, stages qualifiés ou embauches, avec priorité aux parcours fragilisés.",
      "miseEnOeuvre": "Clauses types, pilotage par la Ville, reporting annuel, contrôle d’exécution.",
      "indicateurs": [
        "Heures dédiées à la jeunesse",
        "Nombre de jeunes bénéficiaires/an",
        "Part quartiers prioritaires"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "etudiant-epicerie",
      "priorityId": "jeunesse",
      "title": "Épiceries solidaires étudiantes",
      "impact": "Manger dignement sans se cacher",
      "tag": "Jeunesse et éducation populaire",
      "constat": "Des étudiantes et étudiants renoncent à bien se nourrir, souvent par manque d’accès simple et digne.",
      "proposition": "Créer une épicerie solidaire étudiante avec le CROUS, associations et producteurs locaux, complétée par une épicerie mobile et des supermarchés solidaires gérés par les étudiants (Stras’Impact).",
      "miseEnOeuvre": "Partenariats, lieux accessibles, tarification sociale, logistique anti-gaspillage, tournée mobile campus.",
      "indicateurs": [
        "Nombre d’étudiants bénéficiaires",
        "Volume de produits redistribués",
        "Part de circuits courts"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "etudiant-logement",
      "priorityId": "jeunesse",
      "title": "Logement étudiant accessible",
      "impact": "Étudier sans l’angoisse du loyer",
      "tag": "Jeunesse et éducation populaire",
      "constat": "Des logements existent mais sont mal mobilisés, trop chers ou inadaptés aux parcours.",
      "proposition": "Mieux mobiliser le parc existant, renforcer l’encadrement des loyers abusifs dans les zones universitaires et développer des solutions temporaires dignes (rentrée, stage, transition).",
      "miseEnOeuvre": "Charte tripartite Ville–Bailleurs–Associations étudiantes, information renforcée, solutions temporaires encadrées.",
      "indicateurs": [
        "Nombre de logements mobilisés",
        "Signalements loyers abusifs traités",
        "Solutions temporaires proposées"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "etudiant-droits",
      "priorityId": "jeunesse",
      "title": "Permanences municipales pour l’accès aux droits",
      "impact": "Stop au non-recours",
      "tag": "Jeunesse et éducation populaire",
      "constat": "Beaucoup passent à côté de droits essentiels (CAF, APL, santé) faute d’accompagnement.",
      "proposition": "Mettre en place des permanences municipales dédiées aux étudiants, en lien avec universités, CROUS et quartiers.",
      "miseEnOeuvre": "Créneaux sur campus et en quartier, aide dossiers, prévention des ruptures de parcours.",
      "indicateurs": [
        "Nombre de permanences",
        "Taux de dossiers finalisés",
        "Baisse du non-recours (estimations)"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "etudiant-jobs",
      "priorityId": "jeunesse",
      "title": "Jobs municipaux compatibles avec les études",
      "impact": "Travailler oui, s’épuiser non",
      "tag": "Jeunesse et éducation populaire",
      "constat": "Certains étudiants travaillent au détriment de leurs études.",
      "proposition": "Créer des jobs municipaux adaptés aux rythmes étudiants et intégrer des clauses « Jeunes » dans les marchés publics (médiation, soutien scolaire, actions écologiques, événements).",
      "miseEnOeuvre": "Catalogue de missions, horaires adaptés, partenariat universités, clauses marchés publics.",
      "indicateurs": [
        "Nombre de jobs créés",
        "Taux de réussite/maintien des étudiants (enquête)",
        "Heures réalisées"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "demo-budget",
      "priorityId": "democratie",
      "title": "Budgets participatifs renforcés",
      "impact": "Les habitants décident et voient le résultat",
      "tag": "Démocratie locale réelle",
      "constat": "La participation est trop souvent consultative, sans suite visible.",
      "proposition": "Renforcer les budgets participatifs « Quartiers en Action » avec suivi en ligne de la réalisation.",
      "miseEnOeuvre": "Augmentation de l'enveloppe, vote simplifié, plateforme de suivi des travaux en temps réel.",
      "indicateurs": [
        "Montant alloué",
        "Nombre de projets réalisés",
        "Taux de participation"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "demo-referendum",
      "priorityId": "democratie",
      "title": "Droit d’interpellation et référendum local",
      "impact": "Pouvoir imposer un sujet à l'agenda",
      "tag": "Démocratie locale réelle",
      "constat": "Les citoyens ne peuvent pas forcer le débat sur un sujet majeur.",
      "proposition": "Abaisser les seuils du droit d’interpellation pour permettre l'organisation de référendums locaux d'initiative citoyenne.",
      "miseEnOeuvre": "Seuils abaissés, accompagnement méthodologique, débat public garanti.",
      "indicateurs": [
        "Nombre d'interpellations",
        "Référendums organisés",
        "Sujets mis à l'agenda"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "culture-accessible",
      "priorityId": "culture_sport",
      "title": "Culture hors les murs",
      "impact": "La culture partout, pour tous",
      "tag": "Culture, sport et vivre-ensemble",
      "constat": "Les équipements culturels sont intimidants ou éloignés pour certains habitants.",
      "proposition": "Développer une programmation « Hors les murs » dans les parcs, les places et les pieds d'immeubles.",
      "miseEnOeuvre": "Scènes ouvertes, bibliothèques de rue, festivals de quartier, résidences d'artistes in situ.",
      "indicateurs": [
        "Nombre d'événements hors les murs",
        "Public touché (nouveaux publics)",
        "Satisfaction habitants"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "sport-sante",
      "priorityId": "culture_sport",
      "title": "Sport-Santé sur ordonnance",
      "impact": "Le sport comme médicament gratuit",
      "tag": "Culture, sport et vivre-ensemble",
      "constat": "La sédentarité est un enjeu de santé publique majeur.",
      "proposition": "Généraliser le dispositif Sport-Santé sur ordonnance et rendre accessibles les équipements sportifs en accès libre.",
      "miseEnOeuvre": "Partenariat médecins/clubs, créneaux dédiés, aménagement de parcours santé urbains.",
      "indicateurs": [
        "Nombre de bénéficiaires Sport-Santé",
        "Nouveaux équipements accès libre",
        "Partenaires engagés"
      ],
      "isKeyMeasure": false
    },
    {
      "id": "inclusion-accessibilite",
      "priorityId": "inclusion_droits",
      "title": "Strasbourg 100% accessible",
      "impact": "Une ville praticable pour tous",
      "tag": "Ville inclusive et accès aux droits",
      "constat": "Trottoirs encombrés, bâtiments inadaptés : la ville reste un parcours d'obstacles.",
      "proposition": "Plan de mise en accessibilité universelle (voirie, bâtiments, transports) avec commission de suivi citoyenne.",
      "miseEnOeuvre": "Audit participatif, travaux priorisés, sanction des obstacles illégaux, formation des agents.",
      "indicateurs": [
        "Taux d'équipements accessibles",
        "Linéaire de voirie traité",
        "Satisfaction usagers PMR"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "prevention-jeunes",
      "priorityId": "prevention",
      "title": "Prévention spécialisée renforcée",
      "impact": "Des éducateurs là où les jeunes sont",
      "tag": "Prévention de la radicalisation",
      "constat": "Le retrait des éducateurs de rue a laissé un vide dans certains quartiers.",
      "proposition": "Redéployer des équipes d'éducateurs de rue formés, en lien avec les familles et les associations.",
      "miseEnOeuvre": "Recrutement d'éducateurs, présence en soirée et week-end, coordination avec l'État.",
      "indicateurs": [
        "Nombre d'éducateurs terrain",
        "Jeunes accompagnés",
        "Actions de prévention"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "finances-audit",
      "priorityId": "finances",
      "title": "Audit citoyen des finances",
      "impact": "Savoir où va chaque euro",
      "tag": "Finances responsables et transparentes",
      "constat": "Le budget municipal est opaque pour le grand public.",
      "proposition": "Réaliser un audit citoyen en début de mandat et créer un tableau de bord financier accessible à tous.",
      "miseEnOeuvre": "Commission mixte élus/citoyens/experts, publication simplifiée, open data budgétaire.",
      "indicateurs": [
        "Publication de l'audit",
        "Consultations du tableau de bord",
        "Économies identifiées"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "securite-police",
      "priorityId": "securite",
      "title": "Police municipale de proximité",
      "impact": "Rassurer et dissuader",
      "tag": "Sécurité et tranquillité publique",
      "constat": "Le sentiment d'insécurité grandit dans certains quartiers.",
      "proposition": "Une police municipale présente à pied et à vélo, formée à la médiation et au contact population.",
      "miseEnOeuvre": "Îlotage, patrouilles mixtes, formation continue, lien avec les habitants.",
      "indicateurs": [
        "Heures de patrouille pédestre",
        "Contacts habitants",
        "Sentiment de sécurité (enquête)"
      ],
      "isKeyMeasure": true
    },
    {
      "id": "europe-quartiers",
      "priorityId": "europe",
      "title": "L'Europe dans les quartiers",
      "impact": "L'Europe finance votre quotidien",
      "tag": "Strasbourg capitale européenne concrète",
      "constat": "L'Europe semble lointaine et bureaucratique pour beaucoup.",
      "proposition": "Utiliser les fonds européens pour des projets concrets dans les quartiers (isolation, formation, échanges).",
      "miseEnOeuvre": "Cellule de montage de projets, communication sur les réalisations UE, jumelages de quartiers.",
      "indicateurs": [
        "Montant fonds européens captés",
        "Projets quartiers financés",
        "Jeunes en mobilité européenne"
      ],
      "isKeyMeasure": true
    }
  ]
}
"""

data = json.loads(json_content)

tag_mapping = {
    "Logement digne et abordable": "Logement",
    "Services publics de proximité": "Services publics",
    "Emploi local et inclusion": "Emploi",
    "Écologie de la santé": "Écologie",
    "Mobilités et stationnement apaisés": "Mobilités",
    "Jeunesse et éducation populaire": "Jeunesse",
    "Démocratie locale réelle": "Démocratie",
    "Culture, sport et vivre-ensemble": "Culture",
    "Ville inclusive et accès aux droits": "Inclusion",
    "Prévention de la radicalisation": "Prévention",
    "Finances responsables et transparentes": "Finances",
    "Sécurité et tranquillité publique": "Sécurité",
    "Strasbourg capitale européenne concrète": "Europe"
}

priority_style_mapping = {
    "logement": {"icon": "Home", "color": "amber", "heroImage": "apartment", "heroAlt": "Immeubles résidentiels à Strasbourg"},
    "services_publics": {"icon": "Building2", "color": "blue", "heroImage": "community", "heroAlt": "Accueil en mairie de quartier"},
    "emploi": {"icon": "Briefcase", "color": "orange", "heroImage": "community", "heroAlt": "Artisans et commerçants de quartier"},
    "ecologie_sante": {"icon": "Leaf", "color": "emerald", "heroImage": "urbanPark", "heroAlt": "Espaces verts à Strasbourg"},
    "mobilites": {"icon": "Bike", "color": "teal", "heroImage": "cyclePath", "heroAlt": "Piste cyclable sécurisée"},
    "jeunesse": {"icon": "Sparkles", "color": "rose", "heroImage": "youth", "heroAlt": "Jeunesse de Strasbourg"},
    "democratie": {"icon": "Users", "color": "violet", "heroImage": "democracy", "heroAlt": "Réunion citoyenne"},
    "culture_sport": {"icon": "Music", "color": "fuchsia", "heroImage": "community", "heroAlt": "Culture et sport"},
    "inclusion_droits": {"icon": "Heart", "color": "red", "heroImage": "community", "heroAlt": "Ville inclusive"},
    "prevention": {"icon": "Shield", "color": "slate", "heroImage": "community", "heroAlt": "Prévention"},
    "finances": {"icon": "Euro", "color": "cyan", "heroImage": "community", "heroAlt": "Finances transparentes"},
    "securite": {"icon": "ShieldCheck", "color": "blue", "heroImage": "community", "heroAlt": "Sécurité publique"},
    "europe": {"icon": "Flag", "color": "indigo", "heroImage": "heroImage", "heroAlt": "Strasbourg Europe"}
}

# Construct Priorities
ts_priorities = []
for p in data['priorities']:
    style = priority_style_mapping.get(p['id'], {"icon": "Circle", "color": "gray", "heroImage": "heroImage", "heroAlt": ""})
    ts_p = {
        "id": p['id'],
        "title": p['title'],
        "description": p['description'],
        "icon": style['icon'],
        "color": style['color'],
        "heroImage": style['heroImage'],
        "heroAlt": style['heroAlt']
    }
    ts_priorities.append(ts_p)

# Construct Measures
ts_measures = []
for m in data['measures']:
    tag = tag_mapping.get(m['tag'], m['tag'])
    indicateur_str = ", ".join(m['indicateurs'])
    ts_m = {
        "id": m['id'],
        "priorityId": m['priorityId'],
        "title": m['title'],
        "impact": m['impact'],
        "tag": tag,
        "constat": m['constat'],
        "proposition": m['proposition'],
        "miseEnOeuvre": m['miseEnOeuvre'],
        "indicateur": indicateur_str,
        "coverImage": f"/measures/{m['id']}.jpg",
        "coverAlt": m['title'],
    }
    if m.get('isKeyMeasure'):
        ts_m['isKeyMeasure'] = True
    ts_measures.append(ts_m)

# Update videos priorityId
# Map old priority IDs to new ones
priority_id_map = {
    "services-publics": "services_publics",
    "ecologie": "ecologie_sante",
    "mobilite": "mobilites"
}

# Output valid typescript code
print("import heroImage from \"@assets/generated_images/strasbourg_green_peaceful_cityscape.png\";")
print("import cyclePath from \"@assets/stock_images/bicycle_path_in_euro_29b3f3ae.jpg\";")
print("import apartment from \"@assets/stock_images/modern_residential_a_2814c14f.jpg\";")
print("import urbanPark from \"@assets/stock_images/urban_park_with_tree_d4acad64.jpg\";")
print("import community from \"@assets/stock_images/community_gathering__3ece0604.jpg\";")
print("import democracy from \"@assets/stock_images/citizens_voting_demo_81baa662.jpg\";")
print("import youth from \"@assets/stock_images/young_people_student_2cf858dd.jpg\";")
print("")
print("export { heroImage, youth };")
print("")
print("export interface Priority {")
print("  id: string;")
print("  title: string;")
print("  description: string;")
print("  icon: string;")
print("  color: string;")
print("  videoId?: string;")
print("  heroImage?: string;")
print("  heroAlt?: string;")
print("}")
print("")
print("export interface Measure {")
print("  id: string;")
print("  priorityId: string;")
print("  title: string;")
print("  impact: string;")
print("  tag: string;")
print("  constat: string;")
print("  proposition: string;")
print("  miseEnOeuvre: string;")
print("  indicateur: string;")
print("  videoId?: string;")
print("  coverImage?: string;")
print("  coverAlt?: string;")
print("  baseSupportCount?: number;")
print("  baseReactionCount?: number;")
print("  isKeyMeasure?: boolean;")
print("}")
print("")
print("export interface Video {")
print("  id: string;")
print("  title: string;")
print("  description: string;")
print("  youtubeId: string;")
print("  priorityId?: string;")
print("}")
print("")
print("export interface Event {")
print("  id: string;")
print("  title: string;")
print("  description: string;")
print("  date: string;")
print("  time: string;")
print("  location: string;")
print("  address: string;")
print("}")
print("")
print("export interface TeamMember {")
print("  id: string;")
print("  name: string;")
print("  quartier: string;")
print("  role?: string;")
print("  utilesRole?: string;")
print("  quote: string;")
print("  bio?: string;")
print("  photo?: string;")
print("  tags?: string[];")
print("  videoUrl?: string;")
print("}")
print("")
print("export const priorities: Priority[] = " + json.dumps(ts_priorities, ensure_ascii=False, indent=2).replace('"heroImage": "apartment"', '"heroImage": apartment').replace('"heroImage": "community"', '"heroImage": community').replace('"heroImage": "urbanPark"', '"heroImage": urbanPark').replace('"heroImage": "cyclePath"', '"heroImage": cyclePath').replace('"heroImage": "democracy"', '"heroImage": democracy').replace('"heroImage": "youth"', '"heroImage": youth').replace('"heroImage": "heroImage"', '"heroImage": heroImage') + ";")
print("")
print("export const measures: Measure[] = " + json.dumps(ts_measures, ensure_ascii=False, indent=2) + ";")
print("")
# Videos - update priorityId
videos = [
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
  },
  {
    "id": "video-6",
    "title": "Une écologie du quotidien",
    "description": "Respirer, manger sain, se déplacer : notre engagement.",
    "youtubeId": "dQw4w9WgXcQ",
    "priorityId": "ecologie_sante"
  }
]
print("export const videos: Video[] = " + json.dumps(videos, ensure_ascii=False, indent=2) + ";")
print("")
# Events and Team - keep mostly as is but I'll paste the existing ones from previous read to ensure I don't lose them.
# Note: I'll hardcode them based on previous read.
events = [
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
  },
]
print("export const events: Event[] = " + json.dumps(events, ensure_ascii=False, indent=2) + ";")
print("")
team = [
  {
    "id": "member-1",
    "name": "Mohamed Sylla",
    "quartier": "Strasbourg",
    "role": "Juriste, Syndicaliste",
    "utilesRole": "Président Bas Rhin",
    "quote": "Je m’engage avec Utiles67 parce que je crois en une action citoyenne utile, concrète et proche des habitants. Ce mouvement porte des valeurs de solidarité, de justice et de respect qui correspondent à ma vision d’une société plus humaine et plus équitable à Strasbourg et dans le Bas-Rhin.",
    "bio": "citoyen engagé pour la paix, la justice et le vivre-ensemble à Strasbourg. Je crois en une ville plus humaine, fondée sur l’égalité, le respect et la solidarité. Mon engagement est guidé par l’écoute des citoyens, la défense de la dignité de chacun et la volonté d’agir concrètement pour une société plus juste et apaisée.",
    "photo": "/Team/Sans titre-1.png",
    "tags": ["Logement", "Familles"]
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
    "tags": ["Services publics", "Seniors"],
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
    "tags": ["Services publics", "Numérique"],
    "videoUrl: ": ""
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
    "tags": ["Quartiers", "Jeunesse"],
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
    "tags": ["Familles", "Éducation"],
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
    "tags": ["Emploi", "Entrepreneuriat"],
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
    "tags": ["Éducation", "Culture"],
    "videoUrl": "rptP-rn386Q"
  }
]
print("export const team: TeamMember[] = " + json.dumps(team, ensure_ascii=False, indent=2) + ";")
