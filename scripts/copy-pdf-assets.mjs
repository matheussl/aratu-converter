import { cp, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
// Own project dependencies only; PDF.js assets are served locally.
for (const name of ['cmaps', 'standard_fonts', 'wasm']) {
  const target = resolve('public/pdf-assets', name);
  await mkdir(target, { recursive: true });
  await cp(resolve('node_modules/pdfjs-dist', name), target, { recursive: true });
}
