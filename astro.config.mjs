// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO(personnalisation) — `site` : URL publique du site, SANS le chemin du dépôt.
//   - Site « projet » GitHub Pages : https://<utilisateur>.github.io
//   - Domaine personnalisé        : https://www.mon-domaine.fr
const site = 'https://trog-levrai.github.io';

// TODO(personnalisation) — `base` : chemin du dépôt, avec slash initial, sans slash final.
//   - Site « projet » (https://<utilisateur>.github.io/<depot>/) : '/<depot>'
//   - Dépôt nommé <utilisateur>.github.io OU domaine personnalisé : '/'
const base = '/camargue-landing';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
