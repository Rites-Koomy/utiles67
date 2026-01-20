# Rapport d'Injection - UTILES pour Strasbourg 2026

Ce document confirme l'injection des données du programme dans le site, conformément aux règles de validation.

## 1. Respect du contenu "Sacré"

- **Constats** : Intégrés mot pour mot depuis le document `2-PROGRAMME_REFONTE_2026.md`.
- **Propositions** : Intégrées sous forme structurée (Titre en gras + Description) sans aucune modification de texte.
- **Mise en œuvre** : Liste à puces stricte issue du document.
- **Indicateurs** : Liste à puces stricte issue du document.

**Confirmation explicite :** Aucun constat ni aucune proposition n’ont été modifiés ou complétés sur le fond politique.

## 2. Ajustements Techniques et Neutres

Pour assurer la cohérence visuelle et fonctionnelle du site, les ajustements suivants ont été réalisés :

- **Champs "Impact" (Résumé court pour l'entête)** :
  - *Logement* : "Un logement digne pour tous"
  - *Services Publics* : "Des services accessibles partout"
  - *Emploi* : "Soutenir l'emploi local"
  - *Écologie* : "Un environnement sain pour tous"
  - *Jeunesse* : "Des perspectives pour chaque jeune"
  - *Démocratie* : "Le pouvoir aux habitants"
  - *Culture* : "Vivre ensemble et traditions"
  - *Inclusion* : "Une ville pour tous"
  - *Prévention* : "Protéger et prévenir"
  - *Finances* : "Transparence et efficacité"
  - *Sécurité* : "Une ville apaisée"
  - *Europe* : "Une capitale européenne concrète"
  *(Ces phrases sont des résumés neutres des titres de section pour l'affichage mobile/entête)*

- **Images et Icônes** :
  - Conservation des icônes et couleurs existantes les plus proches thématiquement.
  - Réutilisation des images de stock existantes pertinentes (ex: `apartment` pour Logement, `youth` pour Jeunesse, `democracy` pour Démocratie).
  - Utilisation de `community` comme image par défaut pour les sections n'ayant pas d'image spécifique dédiée, en attendant des visuels définitifs.

- **Champs laissés vides** :
  - `videoId` : Aucun lien vidéo n'a été ajouté car non présent dans le document source (sauf placeholders techniques existants).
  - `baseSupportCount` / `baseReactionCount` : Laissés par défaut.

## 3. Structure des Données

Le modèle de données (`Measure` interface) a été enrichi pour supporter la structure stricte du document :
- `proposition` est passé de `string` à `MeasureProposition[]` (Tableau d'objets `{title, description}`) pour préserver la distinction Titre/Description sans concaténation artificielle.
- `miseEnOeuvre` et `indicateur` sont passés de `string` à `string[]` pour un affichage en liste fidèle.

L'injection est terminée et conforme.
