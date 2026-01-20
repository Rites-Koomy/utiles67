# PROGRAMME_MAPPING_VALIDATION

## 1. Table de correspondance “Ancien menu → Nouveau chapitre”

| Ancienne clé ID | Nouveau chapitre cible (1→12) | Décision | Justification |
| :--- | :--- | :--- | :--- |
| `logement` | 1. Un logement digne et abordable pour tous | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `services_publics` | 2. Services publics de proximité | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `emploi` | 3. Emploi local et inclusion | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `ecologie_sante` | 4. Écologie de la santé – environnement et justice sociale | **KEEP + RENAME** | Correspondance thématique exacte. Titre étendu. Inclut désormais des éléments de mobilités. |
| `mobilites` | *Aucun (intégré dans 4 et 11)* | **REMOVE** | Le thème "Mobilités" n'est plus un chapitre distinct. Ses mesures sont réparties dans "Écologie" (Pistes cyclables, zones 30) et "Sécurité" (Urbanisme). |
| `jeunesse` | 5. Jeunesse et éducation populaire | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `democratie` | 6. Démocratie locale réelle | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `culture_sport` | 7. Culture, sport, mémoire et vivre ensemble | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `inclusion_droits` | 8. Ville inclusive et accès aux droits | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `prevention` | 9. Prévention de la radicalisation | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `finances` | 10. Gestion responsable et transparente des finances | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `securite` | 11. Sécurité et tranquillité publique équilibrée | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |
| `europe` | 12. Strasbourg, capitale européenne vivante et innovante | **KEEP + RENAME** | Correspondance thématique exacte. Titre mis à jour. |

---

## 2. Liste finale des 12 items de menu

L'ordre d'affichage sera strictement le suivant :

1.  **id**: `logement`
    *   **title**: Un logement digne et abordable pour tous
    *   **source**: Section 1 du document

2.  **id**: `services_publics`
    *   **title**: Services publics de proximité
    *   **source**: Section 2 du document

3.  **id**: `emploi`
    *   **title**: Emploi local et inclusion
    *   **source**: Section 3 du document

4.  **id**: `ecologie_sante`
    *   **title**: Écologie de la santé – environnement et justice sociale
    *   **source**: Section 4 du document

5.  **id**: `jeunesse`
    *   **title**: Jeunesse et éducation populaire
    *   **source**: Section 5 du document

6.  **id**: `democratie`
    *   **title**: Démocratie locale réelle
    *   **source**: Section 6 du document

7.  **id**: `culture_sport`
    *   **title**: Culture, sport, mémoire et vivre ensemble
    *   **source**: Section 7 du document

8.  **id**: `inclusion_droits`
    *   **title**: Ville inclusive et accès aux droits
    *   **source**: Section 8 du document

9.  **id**: `prevention`
    *   **title**: Prévention de la radicalisation
    *   **source**: Section 9 du document

10. **id**: `finances`
    *   **title**: Gestion responsable et transparente des finances
    *   **source**: Section 10 du document

11. **id**: `securite`
    *   **title**: Sécurité et tranquillité publique équilibrée
    *   **source**: Section 11 du document

12. **id**: `europe`
    *   **title**: Strasbourg, capitale européenne vivante et innovante
    *   **source**: Section 12 du document

---

## 3. Exemple complet d’une section convertie (Section 1)

Voici comment la **Section 1 (Logement)** sera structurée dans le fichier data (`client/src/data/index.ts`).
*Note: Le champ `propositions` contient la liste brute des titres pour l'affichage résumé, mais le détail structuré sera probablement géré via un formatage spécifique ou des champs additionnels si le modèle `Measure` actuel le permet. Pour respecter la demande de "bullet points structurés", le champ `proposition` contiendra le texte brut formaté, ou nous utiliserons une structure adaptée.*

**Modèle JSON cible pour la Priority (Menu):**

```json
{
  "id": "logement",
  "title": "Un logement digne et abordable pour tous",
  "description": "Les habitants dénoncent l’opacité des attributions et la dégradation de certains logements.",
  "icon": "Home",
  "color": "amber",
  "heroImage": "apartment",
  "heroAlt": "Un logement digne et abordable pour tous"
}
```

**Modèle JSON cible pour la Measure (Détail):**

```json
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
  "isKeyMeasure": true
}
```

*Note technique : Le modèle TypeScript actuel `Measure` utilise des `string` pour `proposition`, `miseEnOeuvre` et `indicateur`. Il faudra soit :*
1.  *Adapter l'interface `Measure` pour accepter des tableaux (`string[]` ou objets).*
2.  *Ou formater le contenu en HTML/Markdown dans la chaîne de caractères si on ne peut pas toucher au modèle.*

*Pour ce mapping, je recommande d'adapter l'interface `Measure` pour supporter la structure riche demandée (Listes).*
