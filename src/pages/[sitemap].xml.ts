import type { APIRoute, GetStaticPaths } from 'astro';
import { href, tools } from '../lib/content';

export const getStaticPaths: GetStaticPaths = () =>
  import.meta.env.PUBLIC_DEPLOY_ENV === 'production' &&
  (!process.env.CF_PAGES_BRANCH || process.env.CF_PAGES_BRANCH === 'main')
    ? [{ params: { sitemap: 'sitemap' } }]
    : [];

export const GET: APIRoute = ({ site }) => {
  const paths = (['pt', 'en'] as const).flatMap((lang) => [
    href(lang),
    ...tools.map((tool) => href(lang, tool)),
  ]);
  const entries = paths.map((path) => '<url><loc>' + new URL(path, site).href + '</loc></url>');

  return new Response([
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
  ].join('\n'), {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
