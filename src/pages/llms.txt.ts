import type { APIRoute } from 'astro';
import { SITE, COMMUNES } from '../config/site';
import { FAQ } from '../data/faq';
import { absoluteUrl } from '../utils/url';

export const GET: APIRoute = ({ site }) => {
  const u = (path: string) => absoluteUrl(path, site!);
  const body = `# ${SITE.nom}

> Artisan indépendant basé à ${SITE.ville} (${SITE.departement}) : conception et aménagement de jardins, broyage de végétation et débroussaillage, dans toute la Camargue. Pour les particuliers et propriétaires de mas, les professionnels et les collectivités.

## Prestations

- [Conception de jardins](${u('/conception-jardins/')}): création et aménagement de jardins adaptés au vent, à la chaleur et à la sécheresse de la Camargue.
- [Broyage et débroussaillage](${u('/broyage-debroussaillage/')}): remise en état de terrains envahis, entretien de parcelles, obligation légale de débroussaillement.

## Informations clés

- [Réalisations](${u('/realisations/')}): galerie de chantiers réalisés.
- [À propos](${u('/a-propos/')}): présentation de l'entreprise.
- [FAQ](${u('/faq/')}): ${FAQ.length} questions fréquentes, dont « Le débroussaillement est-il obligatoire ? ».
- [Contact et devis](${u('/contact/')}): téléphone ${SITE.telephone}, e-mail ${SITE.email}, WhatsApp, formulaire.

## Zone d'intervention

${COMMUNES.join(', ')} et communes alentour (Camargue, Gard).
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
