import type { APIRoute } from 'astro';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const samples = new Map([
  ['aratu-demo-documento-a.pdf', 'application/pdf'],
  ['aratu-demo-documento-b.pdf', 'application/pdf'],
  ['aratu-demo-imagem.png', 'image/png'],
]);

export function getStaticPaths() {
  return import.meta.env.DEV ? [...samples.keys()].map(sample => ({ params: { sample } })) : [];
}

export const GET: APIRoute = async ({ params }) => {
  const sample = params.sample ?? '';
  const type = samples.get(sample);
  if (!type) return new Response(null, { status: 404 });

  const bytes = await readFile(resolve('.test-artifacts', sample.slice('aratu-demo-'.length)));
  return new Response(new Uint8Array(bytes), { headers: { 'Content-Type': type } });
};
