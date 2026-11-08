# Spec Delta

## Purpose

Définit le contenu et la structure des pages publiques du site vitrine pour les deux prestations (conception de jardins, broyage/débroussaillage) et les parcours clients dans la Camargue.

## ADDED Requirements

### Requirement: Page d'accueil

Le site MUST fournir une page d’accueil avec hero, résumé des deux services, zone d’intervention (Saint-Gilles et communes de la Camargue), et appel à l’action d’appel. La première phrase MUST répondre directement à l’intention de recherche locale.

#### Scenario: Parcours visiteur accueil

- **WHEN** un visiteur ouvre la page d’accueil
- **THEN** il voit un seul titre `h1`, les deux services résumés, la zone d’intervention et un moyen d’appeler ou de contacter

### Requirement: Page conception de jardins

Le site MUST fournir une page dédiée à la conception et l’aménagement de jardins, rédigée pour des requêtes locales naturelles (ex. « création de jardin Arles »), avec un `h1` unique et contenu entièrement en HTML statique.

#### Scenario: Intention création de jardin

- **WHEN** un visiteur lit le début de la page conception
- **THEN** la première phrase indique clairement que l’artisan conçoit et aménage des jardins dans la zone Camargue

### Requirement: Page broyage et débroussaillage

Le site MUST fournir une page dédiée au broyage et au débroussaillage de la végétation, mentionnant l’obligation légale de débroussaillement de manière générale et factuelle, sans promesse juridique personnalisée.

#### Scenario: Mention obligation débroussaillement

- **WHEN** un visiteur lit la page broyage et débroussaillage
- **THEN** il trouve une section qui explique que le débroussaillement peut être obligatoire selon la réglementation, avec renvoi à vérifier auprès des autorités compétentes

### Requirement: Paragraphes par type de client

Les pages de services et/ou l’accueil MUST inclure des paragraphes distincts pour les particuliers et propriétaires de mas, les professionnels, et les collectivités, adaptés au ton professionnel et terrain.

#### Scenario: Lecture cible professionnelle

- **WHEN** un responsable de collectivité lit le contenu clients
- **THEN** il identifie un paragraphe qui mentionne explicitement l’accompagnement des collectivités

### Requirement: Page réalisations avant-après

Le site MUST fournir une galerie de réalisations présentant des paires avant/après avec légendes en français et images accessibles, sans carrousel JavaScript obligatoire.

#### Scenario: Consultation galerie

- **WHEN** un visiteur parcourt la page réalisations
- **THEN** chaque réalisation affiche au minimum une image « avant » et une image « après » avec texte alternatif descriptif

### Requirement: Page à propos

Le site MUST fournir une page à propos présentant l’artisan, l’ancrage à Saint-Gilles (Gard) et l’intervention en Camargue, en utilisant les placeholders d’identité.

#### Scenario: Confiance locale

- **WHEN** un visiteur consulte la page à propos
- **THEN** il voit la localisation à Saint-Gilles et le périmètre d’intervention listant les communes clés

### Requirement: Page FAQ

Le site MUST fournir une page FAQ contenant entre 8 et 10 questions-réponses réalistes en français, dont au minimum « Le débroussaillement est-il obligatoire ? » et une question sur les communes ou zones couvertes.

#### Scenario: Question obligation débroussaillement

- **WHEN** un visiteur ouvre la FAQ
- **THEN** il trouve une entrée intitulée ou répondant à « Le débroussaillement est-il obligatoire ? »

### Requirement: Page contact

Le site MUST fournir une page contact avec bouton `tel:`, lien WhatsApp, lien `mailto:` et formulaire HTML soumis vers Formspree via un endpoint placeholder, fonctionnel sans JavaScript client.

#### Scenario: Soumission formulaire sans JS

- **WHEN** un visiteur remplit et envoie le formulaire contact
- **THEN** la requête est adressée à l’endpoint Formspree configuré par placeholder

### Requirement: Page mentions légales

Le site MUST fournir une page mentions légales minimale (éditeur, SIRET placeholder, hébergeur GitHub Pages) conforme aux attentes d’un site professionnel français.

#### Scenario: Consultation mentions légales

- **WHEN** un visiteur ouvre les mentions légales
- **THEN** il voit le placeholder SIRET et l’identification de l’hébergeur

### Requirement: Hiérarchie de titres par page

Chaque page MUST contenir exactement un `h1` et une hiérarchie de titres `h2`/`h3` cohérente, tout le contenu visible présent dans le HTML sans dépendre de JavaScript.

#### Scenario: Un seul h1

- **WHEN** le HTML d’une page est inspecté
- **THEN** un seul élément `h1` est présent

### Requirement: Zone d'intervention Camargue

Le contenu MUST mentionner l’intervention depuis Saint-Gilles vers Arles, Saintes-Maries-de-la-Mer, Aigues-Mortes, Le Grau-du-Roi, Port-Saint-Louis-du-Rhône, Tarascon, Beaucaire et communes alentour.

#### Scenario: Commune listée

- **WHEN** un visiteur cherche la zone couverte
- **THEN** au moins Arles et Saint-Gilles apparaissent explicitement dans le texte ou une liste dédiée
