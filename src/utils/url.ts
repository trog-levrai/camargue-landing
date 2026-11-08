/** Préfixe un chemin interne (`/contact/`) avec `base` (ex. `/broyage`). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** URL absolue (site + base + chemin), pour canonical, OG et JSON-LD. */
export function absoluteUrl(path: string, site: URL | string): string {
  return new URL(withBase(path), site).href;
}
