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
    question: 'Le débroussaillement est-il obligatoire ?',
    answer:
      'Oui, dans de nombreux cas. Dans les zones exposées au risque d’incendie, comme une grande partie du Gard, le Code forestier impose aux propriétaires de débroussailler autour de leurs constructions, en général sur 50 mètres, et 10 mètres de part et d’autre des voies d’accès privées. Le maire peut porter cette distance à 100 mètres. Les règles exactes dépendent de votre commune : renseignez-vous auprès de votre mairie ou de la DDTM du Gard.',
  },
  {
    question: 'Quelles communes et quelles zones couvrez-vous ?',
    answer:
      'Nous sommes basés à Saint-Gilles (Gard) et intervenons dans toute la Camargue : Arles, Saintes-Maries-de-la-Mer, Aigues-Mortes, Le Grau-du-Roi, Port-Saint-Louis-du-Rhône, Tarascon, Beaucaire, ainsi que les communes alentour. Si votre commune n’est pas listée, appelez-nous pour vérifier.',
  },
  {
    question: 'Quelle est la différence entre broyage et débroussaillage ?',
    answer:
      'Le débroussaillage consiste à supprimer les broussailles, ronces et herbes hautes d’un terrain. Le broyage est la technique qui consiste à broyer la végétation sur place avec du matériel adapté, ce qui permet de traiter de grandes surfaces ou des végétations denses. Selon votre terrain, nous choisissons la méthode la plus adaptée.',
  },
  {
    question: 'À quelle période faut-il débroussailler son terrain ?',
    answer:
      'Idéalement avant l’été, période où le risque d’incendie est le plus élevé. Nous vous conseillons de planifier l’intervention à la fin de l’hiver ou au printemps, puis de renouveler l’entretien chaque année pour garder un terrain propre.',
  },
  {
    question: 'Comment obtenir un devis ?',
    answer:
      'Appelez-nous, écrivez-nous via le formulaire de contact ou par e-mail en décrivant votre terrain ou votre projet (commune, surface approximative, photos si possible). Nous étudions votre demande et vous proposons un devis adapté, après une visite sur place si nécessaire.',
  },
  {
    question: 'Intervenez-vous pour les professionnels et les collectivités ?',
    answer:
      'Oui. Nous travaillons pour les particuliers et propriétaires de mas, mais aussi pour les professionnels (exploitations, domaines, campings, entreprises) et les collectivités. Les interventions peuvent être ponctuelles ou régulières.',
  },
  {
    question: 'Que devient la végétation broyée ?',
    answer:
      'Selon votre souhait et le type de terrain, la végétation broyée peut être laissée sur place, où elle se décompose, ou évacuée. Précisez-nous votre préférence lors de la demande de devis.',
  },
  {
    question: 'Dois-je être présent pendant l’intervention ?',
    answer:
      'Pas nécessairement. Une visite ou un échange préalable permet de définir précisément le périmètre à traiter, les accès et les éléments à protéger. Nous vous tenons ensuite informé de l’avancement du chantier.',
  },
  {
    question: 'Concevez-vous des jardins adaptés au climat de la Camargue ?',
    answer:
      'Oui. Nous choisissons des végétaux et des aménagements résistants au vent, à la chaleur, à la sécheresse et, selon les secteurs, au sel : plantes méditerranéennes, haies brise-vent, arrosage économe en eau. Le but est d’obtenir un jardin agréable et facile à entretenir.',
  },
  {
    question: 'Quels sont vos délais d’intervention ?',
    answer:
      'Ils dépendent de la saison, de la taille du chantier et de notre planning. Contactez-nous pour connaître nos disponibilités : plus vous nous sollicitez tôt avant l’été, plus il est facile de planifier votre intervention.',
  },
];
