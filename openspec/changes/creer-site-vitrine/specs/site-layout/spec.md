# Spec Delta

## Purpose

Définit la coquille visuelle et structurelle commune à toutes les pages du site vitrine : navigation, tokens de design, images et placeholders d’identité.

## ADDED Requirements

### Requirement: Design tokens centralisés

Le site MUST exposer la palette de couleurs et les polices dans un seul emplacement de configuration de thème (bloc `@theme` CSS), avec des teintes placeholder vert/terre camarguais marquées `TODO` en attente des couleurs définitives de la carte de visite.

#### Scenario: Cohérence visuelle entre pages

- **WHEN** un visiteur parcourt plusieurs pages du site
- **THEN** les couleurs de fond, texte, boutons et titres proviennent des mêmes tokens de thème

### Requirement: Mise en page mobile-first responsive

Le site MUST s’afficher correctement sur écrans de téléphone, tablette et ordinateur sans débordement horizontal ni texte illisible.

#### Scenario: Affichage sur téléphone

- **WHEN** le viewport correspond à une largeur mobile typique
- **THEN** le contenu principal reste lisible sans zoom manuel et les blocs s’empilent verticalement

### Requirement: Navigation avec menu hamburger sans JavaScript

Le site MUST proposer une navigation principale vers toutes les pages clés, avec un menu repliable sur mobile utilisant uniquement du HTML/CSS (par ex. élément `<details>`), sans script client au chargement par défaut.

#### Scenario: Ouverture du menu sur mobile

- **WHEN** l’utilisateur active le contrôle de menu sur un viewport mobile
- **THEN** les liens de navigation deviennent visibles et cliquables

### Requirement: Bouton d’appel sticky sur mobile

Sur les viewports mobiles, le site MUST afficher un bouton d’appel fixe visible au fil du défilement, pointant vers un lien `tel:` utilisant le numéro placeholder `{{TELEPHONE}}`.

#### Scenario: Appel depuis le sticky

- **WHEN** l’utilisateur touche le bouton d’appel sticky sur mobile
- **THEN** le navigateur ouvre l’application téléphone avec le numéro configuré

### Requirement: Placeholders d’identité centralisés

Le site MUST référencer le nom, téléphone, e-mail, SIRET et logo via des placeholders signalés (`{{NOM_ENTREPRISE}}`, `{{TELEPHONE}}`, `{{EMAIL}}`, `{{SIRET}}`, logo) définis dans une source unique, sans inventer de coordonnées réelles.

#### Scenario: Absence de fausses coordonnées

- **WHEN** le contenu est généré au build
- **THEN** aucun numéro, e-mail ou raison sociale fictive n’apparaît en dur dans le HTML publié

### Requirement: Images optimisées en français

Les images de contenu MUST être servies en WebP avec `srcset`, `loading="lazy"` pour les images hors écran initial, et un attribut `alt` descriptif en français.

#### Scenario: Chargement différé d’image

- **WHEN** une image est placée en dessous du premier écran
- **THEN** son chargement utilise le mode lazy et fournit plusieurs largeurs via srcset

### Requirement: Pied de page et en-tête communs

Chaque page MUST réutiliser un en-tête et un pied de page communs incluant le nom d’entreprise placeholder, les liens de navigation et un lien vers la page contact.

#### Scenario: Navigation depuis le pied de page

- **WHEN** l’utilisateur clique sur un lien du pied de page
- **THEN** il atteint la page correspondante sans rechargement JavaScript obligatoire
