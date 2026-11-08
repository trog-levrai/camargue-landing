# Spec Delta

## Purpose

Définit les exigences de référencement, de métadonnées, de données structurées et de fichiers destinés aux moteurs de recherche et crawlers IA pour le site vitrine.

## ADDED Requirements

### Requirement: Title et meta description uniques

Chaque page MUST avoir une balise `<title>` et une meta `description` uniques, rédigées en français et alignées sur l’intention de la page.

#### Scenario: Unicité des titres

- **WHEN** l’ensemble des pages est comparé après build
- **THEN** aucune paire de pages ne partage le même title ou la même meta description

### Requirement: Balises Open Graph

Chaque page MUST inclure les balises Open Graph nécessaires (au minimum `og:title`, `og:description`, `og:url`, `og:type`, `og:image`) avec une image OG partagée ou dédiée en placeholder.

#### Scenario: Partage sur réseau social

- **WHEN** un outil lit les meta OG de la page d’accueil
- **THEN** il obtient un titre, une description et une URL d’image OG valides

### Requirement: JSON-LD LocalBusiness

Le site MUST inclure des données structurées JSON-LD de type `LocalBusiness` avec adresse à Saint-Gilles (30800), `telephone` placeholder, `geo`, et `areaServed` listant les communes de la Camargue couvertes.

#### Scenario: Parse LocalBusiness

- **WHEN** le JSON-LD de la page d’accueil ou layout principal est validé
- **THEN** le type `LocalBusiness` et `areaServed` contiennent au moins Saint-Gilles et Arles

### Requirement: JSON-LD FAQPage

La page FAQ MUST inclure un JSON-LD `FAQPage` dont les questions/réponses correspondent au contenu visible de la page.

#### Scenario: Cohérence FAQ schema

- **WHEN** une question est affichée dans le HTML de la FAQ
- **THEN** la même question apparaît dans le bloc `FAQPage` JSON-LD

### Requirement: JSON-LD BreadcrumbList

Les pages internes (hors accueil) MUST inclure un JSON-LD `BreadcrumbList` reflétant le fil d’Ariane affiché ou logique de navigation.

#### Scenario: Fil d'Ariane service

- **WHEN** un visiteur consulte la page broyage
- **THEN** le BreadcrumbList inclut l’accueil et la page courante

### Requirement: Sitemap XML

Le site MUST publier un `sitemap.xml` listant toutes les URLs de pages publiques avec le bon préfixe `site`/`base` GitHub Pages.

#### Scenario: Présence sitemap

- **WHEN** le build est terminé
- **THEN** un fichier sitemap accessible référence chaque page vitrine

### Requirement: Robots.txt et crawlers IA

Le site MUST publier un `robots.txt` autorisant explicitement les crawlers OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, GPTBot, ClaudeBot, Google-Extended, et référencer l’URL du sitemap.

#### Scenario: Directive crawler IA

- **WHEN** le fichier robots.txt est lu
- **THEN** GPTBot et ClaudeBot apparaissent avec une directive `Allow` (ou équivalent non bloquant)

### Requirement: Fichier llms.txt

Le site MUST publier un fichier `llms.txt` à la racine décrivant l’entreprise en français et listant les liens vers les pages clés.

#### Scenario: Contenu llms.txt

- **WHEN** un agent lit llms.txt
- **THEN** il trouve une description des deux prestations et des liens vers accueil, services, FAQ et contact

### Requirement: HTML sémantique et contenu sans JS

Le contenu indexable MUST être présent dans le HTML servi au premier chargement, sans hydratation JavaScript obligatoire.

#### Scenario: Contenu FAQ sans script

- **WHEN** JavaScript est désactivé dans le navigateur
- **THEN** le texte intégral des questions/réponses FAQ reste visible

### Requirement: Phrase d'intention en tête de page

Chaque page MUST commencer par une phrase qui répond directement à l’intention de recherche ciblée, avant le développement du contenu.

#### Scenario: Intention broyage local

- **WHEN** la page broyage est affichée
- **THEN** le premier paragraphe mentionne le broyage ou débroussaillage dans la zone Saint-Gilles / Camargue
