export type Lang='pt'|'en';
export const tools=[
 {id:'merge',slug:{pt:'juntar-pdf',en:'merge-pdf'},title:{pt:'Juntar PDF',en:'Merge PDF'},desc:{pt:'Reúna documentos em um único PDF, na ordem que você escolher.',en:'Bring documents together in one PDF, in your preferred order.'},color:'coral',icon:'merge'},
 {id:'images',slug:{pt:'imagens-para-pdf',en:'images-to-pdf'},title:{pt:'Imagens para PDF',en:'Images to PDF'},desc:{pt:'Transforme fotos e imagens JPG ou PNG em um documento.',en:'Turn JPG or PNG photos and images into one document.'},color:'blue',icon:'image'},
 {id:'split',slug:{pt:'dividir-pdf',en:'split-pdf'},title:{pt:'Dividir PDF',en:'Split PDF'},desc:{pt:'Separe páginas ou extraia só o que você precisa.',en:'Split pages or extract just the ones you need.'},color:'violet',icon:'split'},
 {id:'export',slug:{pt:'pdf-para-imagens',en:'pdf-to-images'},title:{pt:'PDF para imagens',en:'PDF to images'},desc:{pt:'Salve as páginas do seu PDF em JPG ou PNG.',en:'Save your PDF pages as JPG or PNG images.'},color:'green',icon:'export'},
 {id:'word',slug:{pt:'pdf-para-word',en:'pdf-to-word'},title:{pt:'PDF para Word',en:'PDF to Word'},desc:{pt:'Extraia o texto do PDF e baixe um documento Word editável.',en:'Extract PDF text and download an editable Word document.'},color:'violet',icon:'export'}
]as const;
export const href=(lang:Lang,tool?:typeof tools[number])=>tool?'/'+lang+'/'+tool.slug[lang]+'/':lang==='pt'?'/':'/en/';
export const pick=(lang:Lang,pt:string,en:string)=>lang==='pt'?pt:en;

