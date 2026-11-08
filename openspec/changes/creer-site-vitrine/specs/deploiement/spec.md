# Spec Delta

## Purpose

Définit le déploiement continu sur GitHub Pages, la configuration Astro `site`/`base` et la documentation opérateur en français.

## ADDED Requirements

### Requirement: Build statique Astro

Le projet MUST produire une sortie 100 % statique via la commande de build officielle Astro, sans dépendance à un serveur Node en production.

#### Scenario: Artefacts de build

- **WHEN** `npm run build` (ou équivalent) s’exécute avec succès
- **THEN** le répertoire de sortie contient uniquement des fichiers HTML, CSS, images et assets statiques

### Requirement: Configuration site et base documentée

Le fichier de configuration Astro MUST définir `site` et `base` sous forme de placeholders documentés (URL GitHub Pages et chemin du dépôt), avec `trailingSlash` cohérent pour les liens internes.

#### Scenario: Liens avec base dépôt

- **WHEN** le site est déployé sous `https://<user>.github.io/<repo>/`
- **THEN** les liens internes et assets respectent le préfixe `base` configuré

### Requirement: Workflow GitHub Actions

Le dépôt MUST inclure un workflow GitHub Actions qui build le site et déploie sur GitHub Pages à chaque push sur la branche principale configurée.

#### Scenario: Déploiement automatique

- **WHEN** un commit est poussé sur la branche de déploiement
- **THEN** le workflow exécute install, build et publication sur l’environnement GitHub Pages

### Requirement: Permissions GitHub Pages

Le workflow MUST demander les permissions `pages: write` et `id-token: write` nécessaires au déploiement moderne GitHub Pages.

#### Scenario: Job deploy

- **WHEN** le workflow atteint l’étape de déploiement
- **THEN** il utilise l’action de déploiement Pages officielle après le job de build

### Requirement: README opérateur en français

Le dépôt MUST inclure un README en français décrivant l’installation locale, le build, la configuration GitHub Pages (source Actions), et l’ajout d’un domaine personnalisé.

#### Scenario: Nouvel opérateur

- **WHEN** le propriétaire suit le README depuis un clone vierge
- **THEN** il peut builder localement et connaître les étapes pour activer GitHub Pages

### Requirement: Liste de personnalisation pré-mise en ligne

Le README MUST se terminer par une liste explicite des éléments à personnaliser avant mise en ligne (placeholders, Formspree, site/base, couleurs TODO, images, logo).

#### Scenario: Checklist personnalisation

- **WHEN** le propriérateur lit la fin du README
- **THEN** il voit au minimum les placeholders NOM, TELEPHONE, EMAIL, SIRET et l’endpoint Formspree

### Requirement: Vérification SEO post-build

Le projet MUST fournir un script de vérification exécutable après build (et intégrable en CI) contrôlant au minimum un `h1` par page et la présence de title/description.

#### Scenario: Échec contrôle SEO

- **WHEN** une page générée n’a pas de meta description
- **THEN** le script de vérification retourne un code d’erreur non nul
