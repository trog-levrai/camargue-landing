// Vérifie le HTML généré (dist/) : exigences SEO et « zéro JS ».
// Usage : node scripts/check-seo.mjs [dossier]   (code de sortie 1 en cas d'erreur)
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = process.argv[2] ?? 'dist';
if (!existsSync(dist)) {
  console.error(`✗ Dossier « ${dist} » introuvable : lancez d'abord « npm run build:only ».`);
  process.exit(1);
}

const files = readdirSync(dist, { recursive: true })
  .filter((f) => String(f).endsWith('.html'))
  .map((f) => join(dist, String(f)));

const errors = [];
const titles = new Map();
const descriptions = new Map();
let placeholders = 0;

// `base` déduit du canonical de l'accueil (ex. « /broyage/ »).
const home = readFileSync(join(dist, 'index.html'), 'utf8');
const canonicalHome = home.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
const base = canonicalHome ? new URL(canonicalHome).pathname : '/';

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  const err = (msg) => errors.push(`${file} : ${msg}`);

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) err(`${h1} balise(s) h1 (1 attendue)`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim();
  if (!title) err('title manquant');
  else titles.set(title, [...(titles.get(title) ?? []), file]);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1]?.trim();
  if (!desc) err('meta description manquante');
  else descriptions.set(desc, [...(descriptions.get(desc) ?? []), file]);

  if (!/<meta property="og:image" content="[^"]+"/.test(html)) err('og:image manquante');
  if (!/<html lang="fr"/.test(html)) err('lang="fr" manquant');

  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try {
      JSON.parse(m[1]);
    } catch {
      err('JSON-LD invalide');
    }
  }

  // Zéro JavaScript client : seuls les <script> JSON-LD sont admis.
  const scripts = [...html.matchAll(/<script\b([^>]*)>/g)].filter((m) => !/application\/ld\+json/.test(m[1]));
  if (scripts.length) err(`${scripts.length} balise(s) <script> JavaScript (0 attendue)`);

  // Liens internes : doivent respecter `base`.
  for (const m of html.matchAll(/\s(?:href|src)="(\/[^"/][^"]*|\/)"/g)) {
    if (!m[1].startsWith(base)) err(`lien interne hors base « ${base} » : ${m[1]}`);
  }

  placeholders += (html.match(/\{\{[A-Z_]+\}\}/g) ?? []).length;
}

for (const [label, map] of [['title', titles], ['meta description', descriptions]]) {
  for (const [value, pages] of map) if (pages.length > 1) errors.push(`${label} dupliqué(e) « ${value} » : ${pages.join(', ')}`);
}

if (errors.length) {
  console.error(`✗ ${errors.length} erreur(s) SEO :\n- ${errors.join('\n- ')}`);
  process.exit(1);
}
console.log(`✓ ${files.length} pages OK (1 h1, title/description uniques, JSON-LD valide, 0 JS client, liens sous « ${base} »).`);
if (placeholders) console.log(`ℹ ${placeholders} placeholder(s) {{...}} restent à personnaliser avant mise en ligne.`);
