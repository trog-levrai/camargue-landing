// Génère des images PLACEHOLDER (à remplacer par de vraies photos de chantier).
// Usage : node scripts/generate-placeholders.mjs
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const imgs = [
  // [fichier, libellé, couleur haut, couleur bas, largeur, hauteur]
  ['src/assets/hero.jpg', 'Photo d’accueil à remplacer', '#7fa35f', '#3b5c2b', 1600, 900],
  ['src/assets/jardin.jpg', 'Photo jardin à remplacer', '#8fb46d', '#4a7336', 1600, 1000],
  ['src/assets/broyage.jpg', 'Photo broyage à remplacer', '#c9a56b', '#7a5530', 1600, 1000],
  ['src/assets/apropos.jpg', 'Photo artisan à remplacer', '#a8b98a', '#5e4126', 1200, 1200],
  ['src/assets/avant-1.jpg', 'AVANT — terrain envahi (à remplacer)', '#b59a63', '#6e5a35', 1200, 900],
  ['src/assets/apres-1.jpg', 'APRÈS — terrain débroussaillé (à remplacer)', '#9cc17a', '#4a7336', 1200, 900],
  ['src/assets/avant-2.jpg', 'AVANT — parcelle en friche (à remplacer)', '#a89060', '#5e4a2b', 1200, 900],
  ['src/assets/apres-2.jpg', 'APRÈS — parcelle entretenue (à remplacer)', '#8fb46d', '#3b5c2b', 1200, 900],
  ['src/assets/avant-3.jpg', 'AVANT — extérieur nu (à remplacer)', '#c4b08a', '#7d6a48', 1200, 900],
  ['src/assets/apres-3.jpg', 'APRÈS — jardin aménagé (à remplacer)', '#a3c585', '#4a7336', 1200, 900],
  ['public/og-default.jpg', 'Image de partage à remplacer', '#5a8a43', '#1f3317', 1200, 630],
];

for (const dir of ['src/assets', 'public']) mkdirSync(dir, { recursive: true });

for (const [file, label, c1, c2, w, h] of imgs) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${c1}"/><stop offset="1" stop-color="${c2}"/>
    </linearGradient></defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
      font-family="sans-serif" font-size="${Math.round(w / 22)}" fill="#ffffff" fill-opacity="0.9">${label}</text>
  </svg>`;
  await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(file);
  console.log('✓', file);
}
