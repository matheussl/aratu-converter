const toolIds = new Set(['merge', 'images', 'split', 'export', 'word']);

declare global {
  interface Window { gtag?: (...args: unknown[]) => void; }
}

// Only fixed operation identifiers are allowed; never pass file metadata or content.
export function trackConversion(tool: string, language: string) {
  if (typeof window === 'undefined' || window.location.hostname !== 'aratuconverter.com') return;
  if (!toolIds.has(tool) || !['pt', 'en'].includes(language)) return;
  try { window.gtag?.('event', 'conversion_complete', { tool, language }); } catch { /* Measurement must not interrupt a conversion. */ }
}
