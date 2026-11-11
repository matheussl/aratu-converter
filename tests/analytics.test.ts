import test from 'node:test';
import assert from 'node:assert/strict';
import {trackConversion} from '../src/lib/analytics.ts';

test('conversion analytics sends only allowlisted identifiers in production and never interrupts results', () => {
  const previous = globalThis.window;
  const calls: unknown[][] = [];
  const browser = {location: {hostname: 'aratuconverter.com'}, gtag: (...args: unknown[]) => calls.push(args)};
  globalThis.window = browser as unknown as Window & typeof globalThis;
  try {
    trackConversion('word', 'pt');
    assert.deepEqual(calls, [['event', 'conversion_complete', {tool: 'word', language: 'pt'}]]);
    trackConversion('private-document.pdf', 'pt');
    trackConversion('word', 'private value');
    browser.location.hostname = 'homologacao.aratu-converter.pages.dev';
    trackConversion('word', 'en');
    assert.equal(calls.length, 1);
    browser.location.hostname = 'aratuconverter.com';
    browser.gtag = () => { throw new Error('blocked'); };
    assert.doesNotThrow(() => trackConversion('merge', 'en'));
  } finally { if (previous === undefined) Reflect.deleteProperty(globalThis, 'window'); else globalThis.window = previous; }
});
