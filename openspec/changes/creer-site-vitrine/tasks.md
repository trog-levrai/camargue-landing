# Tasks

## 1. Initialisation du projet

- [x] 1.1 Créer le projet Astro (`npm create astro@latest`), ajouter Tailwind (`astro add tailwind`) et `@astrojs/sitemap`, puis vérifier que `npm run build` réussit
- [x] 1.2 Configurer `astro.config.mjs` avec `site`, `base` placeholders documentés et `trailingSlash: 'always'`, puis vérifier que la config charge sans erreur
- [x] 1.3 Créer `src/config/site.ts` avec tous les placeholders et la liste des communes, puis vérifier qu’un import depuis une page de test compile
- [x] 1.4 Définir les tokens `@theme` (vert/terre `TODO`) dans `src/styles/global.css` et vérifier l’application d’une classe utilitaire sur une page

## 2. Layout et navigation

- [x] 2.1 Implémenter `BaseLayout.astro`, `Header.astro`, `Footer.astro` et `MobileCallButton.astro`, puis vérifier header/footer sur une page et le lien `tel:` du bouton sticky en viewport mobile
- [x] 2.2 Implémenter le menu hamburger responsive sans JS (checkbox + label, voir design) et la navigation vers les 8 routes, puis vérifier l’ouverture du menu sans JavaScript
- [x] 2.3 Créer `ClientTypes.astro` et le réutiliser sur accueil et pages services, puis vérifier la présence des trois paragraphes client

## 3. Pages de contenu

- [x] 3.1 Rédiger `index.astro` (hero, services, zone, CTA) avec un seul `h1` et phrase d’intention, puis vérifier dans le HTML généré
- [x] 3.2 Rédiger `conception-jardins.astro` et `broyage-debroussaillage.astro` (obligation légale générale), puis vérifier un `h1` unique et la première phrase orientée recherche locale
- [x] 3.3 Rédiger `realisations.astro` avec paires avant/après (`Picture` WebP, lazy, alt FR), puis vérifier au moins une paire dans le HTML
- [x] 3.4 Rédiger `a-propos.astro`, `faq.astro` (8–10 entrées via `src/data/faq.ts`), `contact.astro` (tel, WhatsApp, mailto, Formspree) et `mentions-legales.astro`, puis vérifier le formulaire POST et la question sur le débroussaillement obligatoire

## 4. SEO et données structurées

- [x] 4.1 Implémenter `Seo.astro` (title, description, canonical, OG) sur chaque page avec textes uniques, puis vérifier l’unicité des titles dans `dist/`
- [x] 4.2 Implémenter JSON-LD `LocalBusiness`, `BreadcrumbList` (pages internes) et `FAQPage` (depuis `faq.ts`), puis vérifier le JSON valide sur accueil, une page service et FAQ
- [x] 4.3 Créer `robots.txt.ts` (8 crawlers IA + sitemap) et `llms.txt.ts`, puis vérifier le contenu après build aux URLs `/robots.txt` et `/llms.txt`
- [x] 4.4 Configurer l’intégration sitemap Astro et image OG `public/og-default.jpg`, puis vérifier `sitemap-index.xml` dans `dist/`

## 5. Outils et déploiement

- [x] 5.1 Écrire `scripts/check-seo.mjs` et l’ajouter en script npm post-build, puis vérifier qu’il échoue si une page n’a pas de description
- [x] 5.2 Ajouter `.github/workflows/deploy.yml` (`withastro/action@v6`, `deploy-pages@v5`, permissions Pages), puis vérifier la syntaxe YAML
- [x] 5.3 Rédiger le README FR (install, build, réglages Pages, domaine, checklist personnalisation), puis vérifier que la checklist liste NOM, TELEPHONE, EMAIL, SIRET, Formspree, site/base, couleurs, images, logo

## 6. Vérification finale

- [x] 6.1 Exécuter `npm run build` et `node scripts/check-seo.mjs`, puis vérifier sortie zéro JS client par défaut (pas de bundles client inutiles)
- [x] 6.2 Contrôler manuellement le rendu mobile (menu, sticky call, empilement) et documenter dans le README comment tester localement avec `npm run preview`

## Workflow follow-up

- Archiver le change OpenSpec après validation des artifacts et implémentation terminée (`openspec archive` selon le workflow du projet).
