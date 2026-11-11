import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
const production = process.env.CF_PAGES_BRANCH ? process.env.CF_PAGES_BRANCH === 'main' : process.env.PUBLIC_DEPLOY_ENV === 'production';
const origin = process.env.PUBLIC_SITE_URL || 'https://aratuconverter.com';
const routes = ['/', '/en/', ...['pt/juntar-pdf','pt/imagens-para-pdf','pt/dividir-pdf','pt/pdf-para-imagens','pt/pdf-para-word','pt/reduzir-tamanho-pdf','en/merge-pdf','en/images-to-pdf','en/split-pdf','en/pdf-to-images','en/pdf-to-word','en/reduce-pdf-size'].map(p => '/' + p + '/')];
for (const path of routes) {
  const html = fs.readFileSync('dist' + path + 'index.html', 'utf8');
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  if (production) {
    assert.equal(canonical, new URL(path, origin).href, path);
    assert(!html.includes('name="robots" content="noindex'), path);
    for (const lang of ['pt-BR', 'en', 'x-default']) assert(html.includes('hreflang="' + lang + '"'), path);
  } else {
    assert(html.includes('name="robots" content="noindex'), path);
    assert(!html.includes('googletagmanager.com/gtag/js'), path);
    assert(!html.includes('beacon.min.js'), path);
  }
  for (const match of html.matchAll(/href="(\/[^"?#]*)"/g)) {
    if (!match[1].split('/').pop().includes('.')) assert(match[1].endsWith('/'), match[1]);
  }
}
assert(fs.readFileSync('dist/404.html', 'utf8').includes('name="robots" content="noindex'));
assert(fs.readFileSync('dist/robots.txt', 'utf8').startsWith('User-agent: *'));
assert(fs.readFileSync('dist/ads.txt', 'utf8').startsWith('google.com, pub-'));
if (production) {
  const xml = fs.readFileSync('dist/sitemap.xml', 'utf8');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
  assert.deepEqual(urls.sort(), routes.map(p => new URL(p, origin).href).sort());
  if (process.env.PUBLIC_GA_MEASUREMENT_ID) {
    const html = fs.readFileSync('dist/index.html', 'utf8');
    const script = [...html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]).find(s => s.includes('window.gtag'));
    assert(script, 'GA initialization script missing');
    const context = {window: {}, location: {hostname: 'aratuconverter.com', origin, pathname: '/'}, document: {referrer: 'https://example.com/path?private=value'}, URL};
    vm.runInNewContext(script, context);
    const config = context.window.dataLayer[1];
    assert.equal(config[0], 'config');
    assert.equal(config[1], process.env.PUBLIC_GA_MEASUREMENT_ID);
    assert.equal(config[2].page_location, origin + '/');
    assert.equal(config[2].page_referrer, 'https://example.com/path');
    assert.equal(config[2].allow_google_signals, false);
  }
} else assert(!fs.existsSync('dist/sitemap.xml'));
console.log('SEO/analytics build checks passed: ' + (production ? 'production' : 'preview') + ', 14 routes.');
