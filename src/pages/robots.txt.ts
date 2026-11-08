import type { APIRoute } from 'astro';
import { absoluteUrl } from '../utils/url';

// Crawlers IA explicitement autorisés.
const AI_BOTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
];

export const GET: APIRoute = ({ site }) => {
  const body = [
    'User-agent: *',
    'Allow: /',
    '',
    ...AI_BOTS.flatMap((bot) => [`User-agent: ${bot}`, 'Allow: /', '']),
    // NB : ce fichier n'est lu par les robots que s'il est servi à la RACINE du domaine
    // (domaine personnalisé ou dépôt <utilisateur>.github.io). Voir README.
    `Sitemap: ${absoluteUrl('/sitemap-index.xml', site!)}`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
