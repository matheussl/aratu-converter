import type { APIRoute } from 'astro';
import { isIndexable } from '../lib/seo';

export const GET: APIRoute = ({ site }) => {
  const rules = ['User-agent: *', 'Disallow:'];
  if (isIndexable && site) rules.push('Sitemap: ' + new URL('/sitemap.xml', site).href);
  return new Response(rules.join('\n') + '\n', {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
