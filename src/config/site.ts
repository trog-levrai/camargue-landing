/**
 * Source unique des informations d'identité du site.
 * TODO(personnalisation) : remplacer chaque valeur `{{...}}` avant la mise en ligne.
 * Aucune coordonnée réelle n'est inventée.
 */
export const SITE = {
  nom: 'Camargue environnement paysage',
  telephone: '06 72 60 95 53',
  telephoneInternational: '+33672609553',
  email: 'Camargue.serviceplus@gmail.com',
  siret: '10714637500012',
  tva: 'FR52107146375',
  formeJuridique: 'Société par actions simplifiée (SAS)',
  capital: '1 000 €',
  rcs: 'RCS Nîmes 107 146 375', // greffe déduit du siège (Gard) : à vérifier sur le Kbis
  rm: '{{RM}}', // ex. « RM Nîmes 107 146 375 » (immatriculation au Répertoire des Métiers)
  dirigeant: 'Pierre-Elie Chapron',
  adresseRue: '44 route de Générac',
  logo: '{{LOGO}}', // TODO : fichier logo à placer dans src/assets/ puis à brancher dans Header.astro
  formspreeId: 'mljbbkoz', // identifiant du formulaire Formspree (https://formspree.io)
  ville: 'Saint-Gilles',
  codePostal: '30800',
  departement: 'Gard',
  region: 'Occitanie',
  // TODO(personnalisation) : coordonnées approximatives du centre de Saint-Gilles — à affiner.
  geo: { latitude: 43.6784, longitude: 4.4322 },
} as const;

/** Communes d'intervention (Camargue et alentours) — utilisées par le contenu, le JSON-LD et llms.txt. */
export const COMMUNES = [
  'Saint-Gilles',
  'Arles',
  'Saintes-Maries-de-la-Mer',
  'Aigues-Mortes',
  'Le Grau-du-Roi',
  'Port-Saint-Louis-du-Rhône',
  'Tarascon',
  'Beaucaire',
  'Beauvoisin',
  'Vauvert',
  'Le Cailar',
  'Aimargues',
  'Uchaud',
  'Vergèze',
  'Générac',
  'Garons',
  'Caissargues',
  'Bouillargues',
  'Milhaud',
  'Rodilhan',
  'Manduel',
  'Nîmes',
] as const;

/** Navigation principale (chemins relatifs à `base`, voir `src/utils/url.ts`). */
export const NAV = [
  { label: 'Accueil', path: '/' },
  { label: 'Conception de jardins', path: '/conception-jardins/' },
  { label: 'Réalisations', path: '/realisations/' },
  { label: 'À propos', path: '/a-propos/' },
  { label: 'FAQ', path: '/faq/' },
  { label: 'Contact', path: '/contact/' },
] as const;

export const isFilled = (value: string) => !value.includes('{{');
export const telHref = `tel:${SITE.telephoneInternational}`;
export const mailHref = `mailto:${SITE.email}`;
// wa.me attend le numéro sans « + » ni espaces.
export const whatsappHref = `https://wa.me/${SITE.telephoneInternational.replace(/^\+/, '')}`;
