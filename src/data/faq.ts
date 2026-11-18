/**
 * Source unique de la FAQ : alimente la page /faq/ ET le JSON-LD FAQPage.
 * Texte brut uniquement (pas de HTML) pour rester identique dans les deux usages.
 * TODO(personnalisation) : relire chaque réponse et l’adapter à votre pratique réelle.
 */
export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ: FaqItem[] = [
  {
    question: 'Quelles communes et quelles zones couvrez-vous ?',
    answer:
      'Nous sommes basés à Saint-Gilles (Gard) et intervenons dans toute la Camargue : Arles, Saintes-Maries-de-la-Mer, Aigues-Mortes, Le Grau-du-Roi, Port-Saint-Louis-du-Rhône, Tarascon, Beaucaire, ainsi que les communes alentour. Si votre commune n’est pas listée, appelez-nous pour vérifier.',
  },
  {
    question: 'Comment obtenir un devis ?',
    answer:
      'Appelez-nous, écrivez-nous via le formulaire de contact ou par e-mail en décrivant votre projet (commune, surface approximative, photos si possible). Nous étudions votre demande et vous proposons un devis adapté, après une visite sur place si nécessaire.',
  },
  {
    question: 'Intervenez-vous pour les professionnels et les collectivités ?',
    answer:
      'Oui. Nous travaillons pour les particuliers et propriétaires de mas, mais aussi pour les professionnels (exploitations, domaines, campings, entreprises) et les collectivités. Les chantiers peuvent être ponctuels ou s’inscrire dans la durée.',
  },
  {
    question: 'Dois-je être présent pendant le chantier ?',
    answer:
      'Pas nécessairement. Une visite ou un échange préalable permet de définir votre projet, les accès et les éléments à protéger. Nous vous tenons ensuite informé de l’avancement des travaux.',
  },
  {
    question: 'Concevez-vous des jardins adaptés au climat de la Camargue ?',
    answer:
      'Oui. Nous choisissons des végétaux et des aménagements résistants au vent, à la chaleur, à la sécheresse et, selon les secteurs, au sel : plantes méditerranéennes, haies brise-vent, arrosage économe en eau. Le but est d’obtenir un jardin agréable et facile à entretenir.',
  },
  {
    question: 'Quels sont vos délais d’intervention ?',
    answer:
      'Ils dépendent de la saison, de l’ampleur du projet et de notre planning. Contactez-nous pour connaître nos disponibilités : plus tôt vous nous sollicitez, plus il est facile de planifier votre chantier.',
  },
];