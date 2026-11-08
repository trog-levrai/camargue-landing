# Site vitrine — jardins, broyage et débroussaillage (Camargue)

Site statique en français (Astro + Tailwind CSS, aucun JavaScript client) pour un artisan basé à Saint-Gilles (Gard), prêt à être hébergé sur **GitHub Pages**.

Pages : accueil, conception de jardins, broyage et débroussaillage, réalisations (galerie de chantiers), à propos, FAQ, contact, mentions légales.

## Développement local

Prérequis : Node.js ≥ 22.23.4 (24 recommandé).

```bash
npm install
npm run dev            # serveur de développement : http://localhost:4321/broyage/
npm run build          # build statique dans dist/ + vérification SEO
npm run preview        # sert le build : à utiliser pour tester le rendu final
```

> L'adresse locale contient le chemin `base` défini dans `astro.config.mjs` (par défaut `/broyage/`).

### Tester le rendu mobile

1. Lancez `npm run preview` puis ouvrez l'adresse affichée.
2. Dans votre navigateur, ouvrez les outils de développement et activez le mode appareil mobile (par exemple largeur 375 px).
3. Contrôlez : le menu hamburger s'ouvre sans JavaScript, le bouton « Appeler maintenant » reste fixé en bas de l'écran, les blocs s'empilent sans défilement horizontal.
4. Idéalement, testez aussi sur votre vrai téléphone (même réseau Wi-Fi : `npm run preview -- --host`).

### Vérification SEO

`npm run build` exécute automatiquement `scripts/check-seo.mjs` : un seul `h1` par page, `title` et description uniques, JSON-LD valide, **aucun JavaScript client**, liens internes sous le bon `base`. Le build échoue si une règle n'est pas respectée. Le script signale aussi le nombre de placeholders `{{...}}` restants.

## Structure

```
src/
  config/site.ts        identité (placeholders), communes, navigation
  data/faq.ts           FAQ (page + données structurées FAQPage)
  styles/global.css     design tokens (@theme) : palette et polices
  layouts/BaseLayout.astro
  components/           Header, Footer, Seo, JsonLd, Img, ...
  pages/                une page par route + robots.txt.ts et llms.txt.ts
  assets/               images (WebP + srcset générés au build)
public/og-default.jpg   image de partage (Open Graph)
scripts/                check-seo.mjs, generate-placeholders.mjs
```

## Déploiement sur GitHub Pages

1. **Créez un dépôt GitHub** et poussez ce projet sur la branche `main` (si votre branche a un autre nom, modifiez `branches: [main]` dans `.github/workflows/deploy.yml`).
2. **Configurez `astro.config.mjs`** :
   - `site` : l'URL publique, sans chemin (ex. `https://mon-compte.github.io`).
   - `base` : `'/nom-du-depot'` pour un site « projet » (`https://mon-compte.github.io/nom-du-depot/`), ou `'/'` si le dépôt s'appelle `mon-compte.github.io` ou si vous utilisez un domaine personnalisé.
3. **Activez GitHub Pages** : dans le dépôt, **Settings → Pages → Build and deployment → Source : GitHub Actions**.
4. **Poussez sur `main`** : le workflow *Déploiement sur GitHub Pages* installe les dépendances, construit le site, vérifie le SEO puis publie. Suivez-le dans l'onglet **Actions** ; l'adresse finale s'affiche dans le job `deploy`. Vous pouvez aussi le relancer manuellement (*Run workflow*).

## Domaine personnalisé

1. Dans **Settings → Pages → Custom domain**, saisissez votre domaine (ex. `www.mon-domaine.fr`) puis enregistrez.
2. Chez votre registrar, ajoutez les enregistrements DNS :
   - sous-domaine `www` : enregistrement **CNAME** vers `mon-compte.github.io` ;
   - domaine nu (`mon-domaine.fr`) : enregistrements **A** vers `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. Dans `astro.config.mjs`, mettez `site: 'https://www.mon-domaine.fr'` et `base: '/'`, puis poussez.
4. Une fois le DNS propagé, cochez **Enforce HTTPS** dans les réglages Pages.

> **Important pour le SEO** : `robots.txt`, `llms.txt` et `sitemap-index.xml` ne sont pris en compte par les robots que s'ils sont servis à la **racine du domaine**. Sur un site « projet » (`/nom-du-depot/`), ils ne le sont pas : utilisez un domaine personnalisé (recommandé) ou un dépôt `mon-compte.github.io`. Après la mise en ligne, déclarez le sitemap dans Google Search Console.

## Remplacer les images placeholder

Les images actuelles sont des placeholders générés par `scripts/generate-placeholders.mjs`. Remplacez les fichiers de `src/assets/` (même nom, format JPG ou PNG, 1200 px de large minimum) et `public/og-default.jpg` (1200 × 630 px) par vos photos. Pour la **galerie Réalisations** : ajoutez les fichiers dans `src/assets/realisations/`, puis une ligne `{ fichier, alt }` dans `src/data/realisations.ts` (le texte `alt` sert au SEO). Les versions WebP et `srcset` sont générées automatiquement au build.

## À personnaliser avant la mise en ligne

Repérez tous les placeholders : `grep -rn "{{" src` (ils sont aussi comptés par `npm run build`).

- [ ] **Identité** — `src/config/site.ts` : `{{NOM_ENTREPRISE}}`, `{{TELEPHONE}}`, `{{TELEPHONE_INTERNATIONAL}}` (format `+33612345678`, utilisé pour `tel:`, WhatsApp et JSON-LD), `{{EMAIL}}`, `{{SIRET}}`, `{{ADRESSE_RUE}}`.
- [ ] **Formulaire Formspree** — créez un formulaire sur [formspree.io](https://formspree.io) et renseignez `{{FORMSPREE_ID}}` dans `src/config/site.ts` ; envoyez un message test.
- [ ] **Hébergement** — `site` et `base` dans `astro.config.mjs` (voir plus haut) ; domaine personnalisé si possible.
- [ ] **Logo** — `{{LOGO}}` dans `src/config/site.ts` : ajoutez votre logo dans `src/assets/` et affichez-le dans `src/components/Header.astro` (le nom de l'entreprise sert de logo texte en attendant).
- [ ] **Couleurs et polices** — `src/styles/global.css` (bloc `@theme`, marqué `TODO`) : remplacez la palette vert/terre provisoire par celle de votre carte de visite.
- [ ] **Photos** — remplacez les images placeholder et leurs `alt` (voir section précédente), ainsi que l'image Open Graph.
- [ ] **Réalisations** — photos dans `src/assets/realisations/` + textes `alt` dans `src/data/realisations.ts`.
- [ ] **Page À propos** — `src/pages/a-propos.astro` : remplacez `{{PRESENTATION_ARTISAN}}` par votre présentation.
- [ ] **Mentions légales** — `src/pages/mentions-legales.astro` : `{{NOM_DIRIGEANT}}`, forme juridique, et relecture complète.
- [ ] **Coordonnées GPS** — `geo` dans `src/config/site.ts` : valeurs approximatives de Saint-Gilles à affiner avec votre adresse.
- [ ] **Textes** — relisez les pages et la FAQ (`src/data/faq.ts`) pour qu'ils correspondent à votre pratique réelle, en particulier le paragraphe sur l'**obligation légale de débroussaillement** (informations générales à faire valider auprès de la mairie ou de la DDTM du Gard).
- [ ] **Après mise en ligne** — vérifiez `/robots.txt`, `/llms.txt`, `/sitemap-index.xml`, testez les liens `tel:`, WhatsApp et le formulaire, puis déclarez le sitemap dans Google Search Console.
