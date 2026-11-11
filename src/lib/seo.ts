import { href, languages, reducePdfGuide, tools } from './content';

export const isIndexable = import.meta.env.PROD && (
  process.env.CF_PAGES_BRANCH
    ? process.env.CF_PAGES_BRANCH === 'main'
    : import.meta.env.PUBLIC_DEPLOY_ENV === 'production'
);

export const indexablePaths = languages.flatMap(lang => [
  href(lang),
  ...tools.map(tool => href(lang, tool)),
  href(lang, reducePdfGuide),
]);
