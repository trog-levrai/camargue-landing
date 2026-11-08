# Design

## Context

Projet vide à la racine du dépôt `broyage` : seul OpenSpec est initialisé. Voir [proposal.md](./proposal.md) pour la motivation. L’objectif est un site vitrine 100 % statique en français pour un artisan jardinier / débroussailleur à Saint-Gilles (Gard), déployé sur GitHub Pages.

## Goals / Non-Goals

**Goals:**

- Astro (7.4 à l’implémentation, Node ≥ 22.23.4), sortie statique, zéro JS client par défaut.
- Tailwind CSS v4 via `npx astro add tailwind` (`@tailwindcss/vite`).
- Tokens de design dans un seul bloc `@theme` dans `src/styles/global.css` (palette vert/terre `TODO`).
- Configuration centralisée `src/config/site.ts` pour tous les placeholders et listes (communes, géoloc).
- SEO : `@astrojs/sitemap`, JSON-LD composants, endpoints `robots.txt` et `llms.txt`.
- CI : `withastro/action@v6` + `actions/deploy-pages@v5`.

**Non-Goals:**

- CMS, blog, espace client, analytics.
- Carrousel JS, animations lourdes, framework UI tiers.
- Contenu juridique personnalisé ou photos réelles (fournies par le propriétaire).
- Backend propriétaire (hors Formspree).

## Decisions

### 1. Source unique `src/config/site.ts`

**Choix :** Un module TypeScript exporte `NOM_ENTREPRISE`, `TELEPHONE`, `TELEPHONE_INTERNATIONAL` (E.164 pour `tel:` / `wa.me`), `EMAIL`, `SIRET`, `ADRESSE_RUE`, `FORMSPREE_ID`, `communes`, coordonnées `geo` (Saint-Gilles, marquées `TODO` pour affinage), URL logo.

**Alternatives :** Fichiers JSON ou variables d’environnement uniquement — rejetées car moins pratiques pour le contenu statique multilingue interne et les imports dans les composants Astro.

### 2. FAQ : une seule source de vérité

**Choix :** `src/data/faq.ts` — tableau `{ question, answer }` consommé par la page FAQ (éléments `<details>`) et par un composant `JsonLdFaq.astro`.

**Alternatives :** Dupliquer le texte dans le markdown et le JSON-LD — rejeté (dérive garantie).

### 3. Menu mobile sans JS

**Choix :** case à cocher masquée (`peer`) + `<label>` hamburger, le `<nav>` reste toujours dans le DOM et s’affiche en permanence dès `md:`. Ajustement fait à l’implémentation.

**Alternatives :** `<details>` / `<summary>` — rejeté : impossible de forcer le contenu visible sur desktop de façon fiable en CSS seul. Petit script island — rejeté (contre l’exigence zéro JS par défaut).

### 4. Bouton d’appel sticky

**Choix :** `<a href={telHref}>` fixé en `position: fixed` visible uniquement sous un breakpoint `md:` (mobile-first : affiché par défaut, masqué desktop si souhaité selon maquette — spec exige visible mobile).

### 5. Images

**Choix :** `astro:assets` avec composant `<Picture formats={['webp']} widths={[...]} />` pour le contenu ; image OG statique `public/og-default.jpg` (placeholder).

**Alternatives :** Images uniquement dans `public/` — rejeté (pas de srcset automatique optimal).

### 6. Galerie avant/après

**Choix :** Grille de `<figure>` jumelées (avant | après), sans slider.

### 7. Formspree

**Choix :** `<form action="https://formspree.io/f/{{FORMSPREE_ID}}" method="POST">` avec champs `name`, `email`, `phone`, `message` et honeypot optionnel.

### 8. `robots.txt` et `llms.txt` dynamiques

**Choix :** `src/pages/robots.txt.ts` et `src/pages/llms.txt.ts` (Astro endpoints) pour injecter l’URL absolue du sitemap via `Astro.site`.

**Alternatives :** Fichiers statiques dans `public/` — rejetés si `base` non vide (URLs incorrectes).

### 9. Liens internes et `base`

**Choix :** `trailingSlash: 'always'` dans `astro.config.mjs` ; helper `withBase(path)` basé sur `import.meta.env.BASE_URL` pour les liens manuels si nécessaire ; préférer les chemins relatifs Astro (`/contact/`) qui respectent `base`.

### 10. Structure des pages

| Route | Fichier |
|-------|---------|
| `/` | `src/pages/index.astro` |
| `/conception-jardins/` | `src/pages/conception-jardins.astro` |
| `/broyage-debroussaillage/` | `src/pages/broyage-debroussaillage.astro` |
| `/realisations/` | `src/pages/realisations.astro` |
| `/a-propos/` | `src/pages/a-propos.astro` |
| `/faq/` | `src/pages/faq.astro` |
| `/contact/` | `src/pages/contact.astro` |
| `/mentions-legales/` | `src/pages/mentions-legales.astro` |

### 11. Composants principaux

- `BaseLayout.astro` : `<head>` SEO, OG, JSON-LD LocalBusiness global, header, footer, slot.
- `Seo.astro` : title, description, canonical, og:* par page.
- `JsonLd.astro` (un seul composant) alimenté par les constructeurs de `src/utils/jsonld.ts` (`localBusiness`, `breadcrumb`, `faqPage`). Ajustement fait à l’implémentation : 3 composants auraient dupliqué la même balise `<script>`.
- `Header.astro`, `Footer.astro`, `MobileCallButton.astro`, `Breadcrumb.astro`.
- `ClientTypes.astro` : trois paragraphes particuliers / pros / collectivités.

### 12. Vérification `scripts/check-seo.mjs`

Parcourt les HTML du dossier `dist/` : compte `h1`, vérifie `title` et `meta[name="description"]`, tente parse JSON-LD, signale les `href` absolus incorrects ignorants `base`. Exécution : `node scripts/check-seo.mjs` après build ; ajout d’une étape dans le workflow CI.

### 13. `astro.config.mjs` placeholders

```js
site: 'https://{{GITHUB_USER}}.github.io', // TODO
base: '/{{NOM_REPO}}', // TODO — omettre si user.github.io
```

Documenter dans README les deux cas (projet vs user site).

## Risks / Trade-offs

| Risque | Mitigation |
|--------|------------|
| Texte sur obligation de débroussaillement imprécis ou périmé | Formulation générale (OLD, périodes à risque) + renvoi mairie/préfecture du Gard ; relecture propriétaire |
| Placeholders oubliés en prod | Checklist README + grep CI optionnel sur `{{` |
| `base` mal configuré → liens cassés | README + test manuel Pages + check-seo |
| Formspree sans compte → formulaire mort | Placeholder documenté, test après création compte |
| Couleurs TODO peu professionnelles | Palette provisoire harmonisée vert/terre en attendant carte de visite |

## Migration Plan

1. Initialiser le dépôt git et pousser sur GitHub.
2. Renseigner `site` / `base` dans `astro.config.mjs`.
3. Activer GitHub Pages → source **GitHub Actions**.
4. Premier push sur `main` déclenche le déploiement.
5. Remplacer placeholders et relancer build.
6. Domaine personnalisé : DNS + champ Pages + HTTPS automatique.

Rollback : revert du commit sur `main` ; l’action redéploie la version précédente.

## Open Questions

- Nom exact du dépôt GitHub et usage ou non de `base` (à renseigner à l’init git).
- Numéro WhatsApp identique au fixe ou ligne dédiée (utiliser `TELEPHONE_INTERNATIONAL` unique par défaut).
- Logo et photos réelles : formats et dimensions fournis par le propriétaire à l’apply.
