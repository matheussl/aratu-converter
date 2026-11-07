import { PDFDocument, degrees } from 'pdf-lib';
import { zipSync } from 'fflate';
import { LIMITS, PdfError, parseRange, validateFiles, kind, type Tool, type Input, type Options, type Output } from './pdf-common.ts';
export { LIMITS, PdfError, parseRange, validateFiles, kind } from './pdf-common.ts';
async function open(bytes:Uint8Array){
 if(kind(bytes)!=='pdf')throw new PdfError('invalid');
 try{
  const doc=await PDFDocument.load(bytes,{updateMetadata:false});
  if(!doc.getPageCount()||doc.getPageCount()>LIMITS.pages)throw new PdfError('pages');
  return doc;
 }catch(e){
  if(e instanceof PdfError)throw e;
  if(String(e).toLowerCase().includes('encrypt'))throw new PdfError('encrypted');
  throw new PdfError('invalid');
 }
}
export async function inspect(bytes:Uint8Array){return(await open(bytes)).getPageCount();}
export function zipOutputs(files:{name:string;bytes:Uint8Array}[]):Output{
 if(files.reduce((s,f)=>s+f.bytes.length,0)>LIMITS.outputBytes)throw new PdfError('output');
 const archive:Record<string,Uint8Array>={};
 for(const f of files)archive[f.name]=f.bytes;
 return{bytes:zipSync(archive,{level:0}),name:'aratu-paginas.zip',mime:'application/zip'};
}
export async function processPdf(tool:Tool,inputs:Input[],options:Options,progress:(n:number)=>void=()=>{}):Promise<Output>{
 if(!inputs.length)throw new PdfError('empty');
 validateFiles(inputs.map(f=>({size:f.bytes.length})));
 if(tool==='split'&&inputs.length!==1)throw new PdfError('onePdf');
 const out=await PDFDocument.create();out.setProducer('Aratu Converter');out.setCreator('Aratu Converter');
 if(tool==='merge'){
  if(inputs.length<2)throw new PdfError('twoPdf');
  let total=0;
  for(const [i,input]of inputs.entries()){
   const src=await open(input.bytes);total+=src.getPageCount();if(total>LIMITS.pages)throw new PdfError('pages');
   const pages=await out.copyPages(src,src.getPageIndices());
   pages.forEach(p=>{p.setRotation(degrees((p.getRotation().angle+input.rotation)%360));out.addPage(p);});
   progress((i+1)/inputs.length*90);
  }
 }else if(tool==='images'){
  for(const [i,input]of inputs.entries()){
   const type=kind(input.bytes);if(type!=='jpg'&&type!=='png')throw new PdfError('image');
   const image=type==='jpg'?await out.embedJpg(input.bytes):await out.embedPng(input.bytes);
   const angle=((input.rotation%360)+360)%360;
   const w=angle%180?image.height:image.width,h=angle%180?image.width:image.height;
   const landscape=options.orientation==='landscape'||(options.orientation==='auto'&&w>h);
   const size:[number,number]=options.paper==='original'?[w,h]:landscape?[841.89,595.28]:[595.28,841.89];
   const margin=options.paper==='original'?0:24,ratio=Math.min((size[0]-2*margin)/w,(size[1]-2*margin)/h);
   const x=(size[0]-w*ratio)/2,y=(size[1]-h*ratio)/2;
   const offsets:Record<number,[number,number]>={0:[0,0],90:[w*ratio,0],180:[w*ratio,h*ratio],270:[0,h*ratio]};
   out.addPage(size).drawImage(image,{x:x+offsets[angle][0],y:y+offsets[angle][1],width:image.width*ratio,height:image.height*ratio,rotate:degrees(angle)});
   progress((i+1)/inputs.length*90);
  }
 }else if(tool==='split'){
  const src=await open(inputs[0].bytes),selected=parseRange(options.range,src.getPageCount());
  if(options.separate){
   const files=[];
   for(const [i,index]of selected.entries()){
    const single=await PDFDocument.create();const[p]=await single.copyPages(src,[index]);single.addPage(p);
    files.push({name:'pagina-'+String(index+1).padStart(3,'0')+'.pdf',bytes:await single.save()});
    progress((i+1)/selected.length*90);
   }return zipOutputs(files);
  }
  (await out.copyPages(src,selected)).forEach(p=>out.addPage(p));
 }else throw new PdfError('invalid');
 const bytes=await out.save();if(bytes.length>LIMITS.outputBytes)throw new PdfError('output');
 progress(100);return{bytes,name:tool==='merge'?'aratu-unido.pdf':tool==='images'?'aratu-imagens.pdf':'aratu-paginas.pdf',mime:'application/pdf'};
}

