# Proposal

## Why

Un artisan jardinier et débroussailleur basé à Saint-Gilles (Gard) n’a pas aujourd’hui de présence web exploitable pour les recherches locales dans la Camargue (« broyage végétation Camargue », « débroussaillement Saint-Gilles », « création de jardin Arles »). Un site vitrine statique en français, hébergé gratuitement sur GitHub Pages, doit centraliser les deux prestations, la zone d’intervention et les moyens de contact, avec un référencement solide pour les particuliers, professionnels et collectivités.

## What Changes

- Initialisation d’un dépôt Astro 6 en sortie 100 % statique (aucun JavaScript client par défaut) avec Tailwind CSS v4.
- Création de pages : accueil, conception de jardins, broyage et débroussaillage, réalisations (galerie avant/après), à propos, FAQ, contact, et mentions légales minimales.
- Contenu entièrement en français avec placeholders signalés (`{{NOM_ENTREPRISE}}`, `{{TELEPHONE}}`, `{{EMAIL}}`, `{{SIRET}}`, etc.) — aucune fausse coordonnée inventée.
- Mise en page mobile-first : navigation avec menu hamburger sans JS, bouton d’appel sticky sur mobile.
- SEO strict : balises uniques, Open Graph, JSON-LD (`LocalBusiness`, `FAQPage`, `BreadcrumbList`), `sitemap.xml`, `robots.txt` (crawlers IA autorisés), `llms.txt`.
- Workflow GitHub Actions pour build et déploiement automatique sur GitHub Pages.
- README en français (déploiement, Pages, domaine personnalisé) et liste des éléments à personnaliser avant mise en ligne.

## Capabilities

### New Capabilities

- `site-layout` : structure commune, design tokens, navigation responsive, images optimisées, placeholders centralisés.
- `site-pages` : contenu et structure des pages publiques (services, clients, zone d’intervention, contact, FAQ).
- `seo` : métadonnées, données structurées, fichiers racine pour crawlers et moteurs de recherche.
- `deploiement` : configuration d’hébergement GitHub Pages, CI/CD, documentation opérateur.

### Modified Capabilities

- *(aucune — pas de specs existantes dans le projet)*

## Impact

- **Nouveau dépôt** : arborescence Astro complète depuis zéro dans `/Users/ilan.dubois/perso/broyage`.
- **Dépendances** : Astro 6, `@tailwindcss/vite`, `@astrojs/sitemap`, intégration Formspree côté formulaire HTML uniquement.
- **Hors système** : Formspree (endpoint externe), GitHub Pages, domaine personnalisé optionnel.
- **Hors périmètre** : CMS, blog, back-office, analytics tiers non demandés, JavaScript client pour l’interactivité, photos réelles ou identité juridique définitive (fournies par le propriétaire).
