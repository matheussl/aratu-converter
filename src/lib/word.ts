import { AlignmentType, Document, HeadingLevel, ImageRun, Packer, Paragraph, PageBreak, TextRun } from 'docx';

type PdfJs = typeof import('pdfjs-dist');
type PdfOptions = { data: Uint8Array; isEvalSupported: boolean; cMapUrl: string; cMapPacked: boolean; standardFontDataUrl: string; wasmUrl: string };

export async function pdfToWord(pdfjs: PdfJs, bytes: Uint8Array, options: PdfOptions, progress: (value: number) => void, cancelled: () => boolean): Promise<Uint8Array> {
  const task = pdfjs.getDocument({ ...options, data: bytes.slice() });
  const pdf = await task.promise;
  const sections: Paragraph[] = [];
  try {
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      if (cancelled()) throw new Error('cancelled');
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      const items = content.items.filter((item): item is typeof item & { str: string; transform: number[]; height?: number } => 'str' in item && 'transform' in item && Boolean(item.str.trim()));
      if (items.length) {
        const lines = groupLines(items);
        for (const line of lines) {
          const text = line.map((item) => item.str).join(' ').replace(/\s+/g, ' ').trim();
          if (!text) continue;
          const maxHeight = Math.max(...line.map((item) => item.height ?? 0));
          const heading = maxHeight >= 17 || (text.length < 90 && /^[A-ZÀ-Ú0-9][^.!?]{2,}$/.test(text));
          sections.push(new Paragraph({
            children: [new TextRun({ text, break: 0 })],
            heading: heading ? HeadingLevel.HEADING_2 : undefined,
            spacing: { after: heading ? 140 : 80, line: 276 },
          }));
        }
      } else {
        const image = await renderPage(page);
        if (image) sections.push(new Paragraph({ children: [new ImageRun({ data: image, transformation: { width: 595, height: 842 }, type: 'png' })], alignment: AlignmentType.CENTER }));
      }
      if (pageNumber < pdf.numPages) sections.push(new Paragraph({ children: [new PageBreak()] }));
      page.cleanup();
      progress((pageNumber / pdf.numPages) * 92);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  } finally {
    await task.destroy().catch(() => undefined);
  }
  const document = new Document({ sections: [{ properties: {}, children: sections.length ? sections : [new Paragraph('Não foi encontrado texto editável neste PDF.')] }] });
  const blob = await Packer.toBlob(document);
  progress(100);
  return new Uint8Array(await blob.arrayBuffer());
}

function groupLines(items: Array<{ str: string; transform: number[]; height?: number }>) {
  const lines: Array<Array<{ str: string; transform: number[]; height?: number }>> = [];
  for (const item of items.sort((a, b) => (b.transform[5] ?? 0) - (a.transform[5] ?? 0) || (a.transform[4] ?? 0) - (b.transform[4] ?? 0))) {
    const y = item.transform[5] ?? 0;
    const line = lines.find((candidate) => Math.abs((candidate[0].transform[5] ?? 0) - y) < 4);
    if (line) line.push(item);
    else lines.push([item]);
  }
  return lines.map((line) => line.sort((a, b) => (a.transform[4] ?? 0) - (b.transform[4] ?? 0)));
}

async function renderPage(page: any) {
  const viewport = page.getViewport({ scale: 1.25 });
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(viewport.width); canvas.height = Math.ceil(viewport.height);
  try {
    await page.render({ canvas, viewport, background: '#ffffff' }).promise;
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
    return blob ? new Uint8Array(await blob.arrayBuffer()) : null;
  } finally { canvas.width = 0; canvas.height = 0; }
}
