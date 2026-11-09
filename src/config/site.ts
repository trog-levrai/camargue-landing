/**
 * Source unique des informations d'identité du site.
 * TODO(personnalisation) : remplacer chaque valeur `{{...}}` avant la mise en ligne.
 * Aucune coordonnée réelle n'est inventée.
 */
export const SITE = {
  nom: 'Camargue environnement paysage',
  telephone: '06 72 60 95 53',
  telephoneInternational: '+33672609553',
  email: '{{EMAIL}}',
  siret: '10714637500012',
  dirigeant: 'Pierre-Elie Chapron',
  adresseRue: '{{ADRESSE_RUE}}',
  logo: '{{LOGO}}', // TODO : fichier logo à placer dans src/assets/ puis à brancher dans Header.astro
  formspreeId: '{{FORMSPREE_ID}}', // identifiant du formulaire Formspree (https://formspree.io)
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
] as const;

/** Navigation principale (chemins relatifs à `base`, voir `src/utils/url.ts`). */
export const NAV = [
  { label: 'Accueil', path: '/' },
  { label: 'Conception de jardins', path: '/conception-jardins/' },
  { label: 'Broyage et débroussaillage', path: '/broyage-debroussaillage/' },
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
