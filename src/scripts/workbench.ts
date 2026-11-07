import { LIMITS, PdfError, parseRange, validateFiles, kind, type Tool, type Input, type Output } from '../lib/pdf-common';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
import { pdfToWord } from '../lib/word';
type PdfJs = typeof import('pdfjs-dist');
type Entry = {file:File;bytes:Uint8Array;pages:number;rotation:number;preview:string};
const root=document.querySelector<HTMLElement>('[data-workbench]');
if(root)mount(root);
function mount(root:HTMLElement){
 const en=root.dataset.lang==='en',tool=root.dataset.tool as Tool,t=(pt:string,english:string)=>en?english:pt;
 const q=<T extends HTMLElement=HTMLElement>(s:string)=>root.querySelector<T>(s)!;
 const input=q<HTMLInputElement>('[data-input]'),list=q<HTMLOListElement>('[data-list]'),run=q<HTMLButtonElement>('[data-run]'),cancel=q<HTMLButtonElement>('[data-cancel]');
 const error=q('[data-error]'),result=q('[data-result]'),progress=q<HTMLProgressElement>('progress');
 const example=root.querySelector<HTMLButtonElement>('[data-example]');
 let entries:Entry[]=[],busy=false,job=0,worker:Worker|null=null,rejectWorker:((e:Error)=>void)|null=null,resultUrl='';
 let pdfJsPromise:Promise<PdfJs>|null=null;
 let activePdf:ReturnType<PdfJs['getDocument']>|null=null;
 const errors:Record<string,string>={
 files:t('Selecione no máximo 20 arquivos.','Choose no more than 20 files.'),
 fileSize:t('Cada arquivo pode ter até 20 MB.','Each file must be 20 MB or smaller.'),
 totalSize:t('O total pode ter até 50 MB.','The total must be 50 MB or smaller.'),
 pages:t('Use PDFs com até 200 páginas no total.','Use PDFs with up to 200 pages in total.'),
 renderPages:t('Selecione até 50 páginas para exportar por vez.','Select up to 50 pages to export at a time.'),
 pixels:t('Esta imagem ou resolução é grande demais. Use uma resolução menor ou uma imagem com até 12 megapixels.','This image or resolution is too large. Choose a lower resolution or an image up to 12 megapixels.'),
 range:t('Confira as páginas. Use números e intervalos válidos, como 1-3, 5.','Check the pages. Use valid numbers and ranges, such as 1-3, 5.'),
 invalid:t('Não foi possível ler este arquivo. Confira se é um PDF válido e sem senha.','This file could not be read. Check that it is a valid PDF without a password.'),
 encrypted:t('PDFs com senha não são aceitos nesta versão. Escolha uma cópia sem proteção.','Password-protected PDFs are not supported in this version. Choose an unprotected copy.'),
 image:t('Escolha imagens JPG ou PNG válidas.','Choose valid JPG or PNG images.'),
 output:t('O resultado ficou muito grande. Reduza as páginas ou a resolução.','The result is too large. Reduce the pages or resolution.'),
 onePdf:t('Esta ferramenta aceita um PDF por vez. Remova o atual para trocar de arquivo.','This tool accepts one PDF at a time. Remove the current file to replace it.'),
 twoPdf:t('Adicione pelo menos dois PDFs para juntar.','Add at least two PDFs to merge.'),
 empty:t('Selecione um arquivo para começar.','Choose a file to begin.'),
 browser:t('Este navegador não conseguiu processar o arquivo. Tente uma versão recente de Chrome, Edge, Firefox ou Safari.','This browser could not process the file. Try a recent Chrome, Edge, Firefox or Safari.'),
 };
 const formatSize=(n:number)=>n<1024**2?(n/1024).toFixed(0)+' KB':(n/1024**2).toFixed(1)+' MB';
 function clearResult(){if(resultUrl)URL.revokeObjectURL(resultUrl);resultUrl='';result.hidden=true;q<HTMLAnchorElement>('[data-download]').removeAttribute('href');}
 function announce(text:string){q('[data-live]').textContent=text;}
 function showError(e:unknown){const code=e instanceof PdfError?e.code:'browser';error.textContent=errors[code]??errors.invalid;error.hidden=false;}
 function setProgress(value:number,text=t('Processando seus arquivos…','Processing your files…')){q('[data-progress]').hidden=false;progress.value=value;q('[data-status]').textContent=text;q('[data-percent]').textContent=Math.round(value)+'%';}
 async function engine<T>(data:unknown):Promise<T>{
  return new Promise((resolve,reject)=>{
   const current=new Worker(new URL('./pdf-worker.ts',import.meta.url),{type:'module'});worker=current;rejectWorker=reject;
   const finish=()=>{current.terminate();if(worker===current){worker=null;rejectWorker=null;}};
   current.onmessage=({data})=>{if(data.type==='progress'){setProgress(data.value);return;}finish();if(data.type==='error')reject(new PdfError(data.code));else resolve(data.result);};
   current.onerror=()=>{finish();reject(new PdfError('browser'));};current.postMessage(data);
  });
 }
 async function getPdfJs(){
  if(!pdfJsPromise)pdfJsPromise=import('pdfjs-dist').then(lib=>{lib.GlobalWorkerOptions.workerSrc=workerUrl;return lib;});
  return pdfJsPromise;
 }
 const pdfOptions=(bytes:Uint8Array)=>({data:bytes.slice(),isEvalSupported:false,cMapUrl:'/pdf-assets/cmaps/',cMapPacked:true,standardFontDataUrl:'/pdf-assets/standard_fonts/',wasmUrl:'/pdf-assets/wasm/'});
 const blob=(bytes:Uint8Array,mime:string)=>new Blob([Uint8Array.from(bytes).buffer],{type:mime});
 async function thumb(bytes:Uint8Array,id:number){
  let task:ReturnType<PdfJs['getDocument']>|null=null;
  try{
   const lib=await getPdfJs();
   if(id!==job)return '';
   task=lib.getDocument(pdfOptions(bytes));activePdf=task;const doc=await task.promise;
   const page=await doc.getPage(1),base=page.getViewport({scale:1}),canvas=document.createElement('canvas');
   const viewport=page.getViewport({scale:Math.min(110/base.width,150/base.height)});
   canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
   await page.render({canvas,viewport}).promise;
   const url=canvas.toDataURL('image/png');canvas.width=canvas.height=0;return url;
  }catch{return '';}finally{await task?.destroy().catch(()=>{});if(activePdf===task)activePdf=null;}
 }
 function button(text:string,label:string,action:()=>void,disabled=false){
  const b=document.createElement('button');b.type='button';b.textContent=text;b.setAttribute('aria-label',label);b.title=label;b.disabled=disabled||busy;b.addEventListener('click',action);return b;
 }
 function update(){
  list.replaceChildren();q('[data-queue-heading]').hidden=!entries.length;q('[data-count]').textContent=String(entries.length);
  q('[data-options]').hidden=!entries.length||tool==='merge';
  for(const [i,entry]of entries.entries()){
   const row=document.createElement('li');row.className='file-row';
   if(entry.preview){const img=document.createElement('img');img.className='file-thumb';img.src=entry.preview;img.alt=t('Prévia de ','Preview of ')+entry.file.name;img.style.transform='rotate('+entry.rotation+'deg)';row.append(img);}
   else{const icon=document.createElement('span');icon.className='file-thumb';icon.textContent='PDF';row.append(icon);}
   const info=document.createElement('div');info.className='file-info';
   const name=document.createElement('div');name.className='file-name';name.textContent=entry.file.name;name.title=entry.file.name;
   const meta=document.createElement('div');meta.className='file-meta';meta.textContent=formatSize(entry.file.size)+(tool==='images'?'':' · '+entry.pages+' '+t(entry.pages===1?'página':'páginas',entry.pages===1?'page':'pages'))+(entry.rotation?' · '+entry.rotation+'°':'');
   info.append(name,meta);row.append(info);
   const controls=document.createElement('div');controls.className='file-buttons';
   const mutate=(fn:()=>void)=>()=>{clearResult();error.hidden=true;fn();update();};
   if(tool==='merge'||tool==='images'){
    controls.append(button('↑',t('Mover para cima: ','Move up: ')+entry.file.name,mutate(()=>{[entries[i-1],entries[i]]=[entries[i],entries[i-1]];}),i===0));
    controls.append(button('↓',t('Mover para baixo: ','Move down: ')+entry.file.name,mutate(()=>{[entries[i+1],entries[i]]=[entries[i],entries[i+1]];}),i===entries.length-1));
    controls.append(button('↻',t('Girar: ','Rotate: ')+entry.file.name,mutate(()=>entry.rotation=(entry.rotation+90)%360)));
   }
   controls.append(button('×',t('Remover: ','Remove: ')+entry.file.name,mutate(()=>{URL.revokeObjectURL(entry.preview);entries.splice(i,1);})));
   row.append(controls);list.append(row);
  }
  run.disabled=busy||!entries.length||(tool==='merge'&&entries.length<2);input.disabled=busy;
  q<HTMLButtonElement>('[data-clear]').disabled=busy;
  if(example)example.disabled=busy||entries.length>0;
  root.querySelectorAll<HTMLInputElement|HTMLSelectElement>('.options input,.options select').forEach(el=>el.disabled=busy);
  cancel.hidden=!busy;q('[data-hint]').textContent=busy?'':tool==='merge'&&entries.length===1?t('Adicione mais um PDF para juntar.','Add one more PDF to merge.'):entries.length?t('Tudo acontece neste dispositivo.','Everything happens on this device.'):t('Selecione seus arquivos para começar.','Choose your files to get started.');
 }
 async function addFiles(files:File[]){
  if(busy||!files.length)return;
  const single=tool==='split'||tool==='export'||tool==='word';
  try{if(single&&entries.length+files.length>1)throw new PdfError('onePdf');validateFiles([...entries.map(e=>e.file),...files]);}catch(e){showError(e);return;}
  clearResult();error.hidden=true;busy=true;const id=++job;update();setProgress(0,t('Preparando prévias…','Preparing previews…'));const staged:Entry[]=[];
  try{
   let pages=entries.reduce((s,e)=>s+e.pages,0);
   for(const [i,file]of files.entries()){
    const bytes=new Uint8Array(await file.arrayBuffer());if(id!==job)throw new PdfError('cancelled');
    const type=kind(bytes);let count=1,preview='';
    if(tool==='images'){
     if(type!=='jpg'&&type!=='png')throw new PdfError('image');
     const bitmap=await createImageBitmap(file);
     const valid=bitmap.width*bitmap.height<=LIMITS.pixels;bitmap.close();if(!valid)throw new PdfError('pixels');
     preview=URL.createObjectURL(file);
    }else{
     count=await engine<number>({action:'inspect',bytes});pages+=count;if(pages>LIMITS.pages)throw new PdfError('pages');
     preview=await thumb(bytes,id);
    }
    if(id!==job){if(preview.startsWith('blob:'))URL.revokeObjectURL(preview);throw new PdfError('cancelled');}
    staged.push({file,bytes,pages:count,rotation:0,preview});setProgress((i+1)/files.length*100,t('Preparando prévias…','Preparing previews…'));
   }
   entries.push(...staged);announce(t('Arquivos prontos.','Files are ready.'));
  }catch(e){staged.forEach(x=>URL.revokeObjectURL(x.preview));if(id===job)showError(e);}
  finally{if(id===job){busy=false;q('[data-progress]').hidden=true;update();}}
 }
 const value=(name:string,fallback='')=>root.querySelector<HTMLInputElement|HTMLSelectElement>('[name="'+name+'"]')?.value??fallback;
 async function normalizeImage(entry:Entry):Promise<Input>{
  const bitmap=await createImageBitmap(entry.file,{imageOrientation:'from-image'}),canvas=document.createElement('canvas');
  try{
   if(bitmap.width*bitmap.height>LIMITS.pixels)throw new PdfError('pixels');
   canvas.width=bitmap.width;canvas.height=bitmap.height;canvas.getContext('2d')!.drawImage(bitmap,0,0);
   const type=kind(entry.bytes)==='jpg'?'image/jpeg':'image/png';
   const b=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new PdfError('image')),type,.96));
   return{bytes:new Uint8Array(await b.arrayBuffer()),name:entry.file.name,rotation:entry.rotation};
  }finally{bitmap.close();canvas.width=canvas.height=0;}
 }
 async function exportImages(id:number):Promise<Output>{
  const entry=entries[0],lib=await getPdfJs();if(id!==job)throw new PdfError('cancelled');
  const task=lib.getDocument(pdfOptions(entry.bytes));activePdf=task;
  try{
   const doc=await task.promise;
   const pages=parseRange(value('range'),doc.numPages);if(pages.length>LIMITS.renderPages)throw new PdfError('renderPages');
   const ext=value('format','jpg'),mime=ext==='png'?'image/png':'image/jpeg',files:{name:string;bytes:Uint8Array}[]=[];let total=0;
   for(const [i,index]of pages.entries()){
    if(id!==job)throw new PdfError('cancelled');
    const page=await doc.getPage(index+1),viewport=page.getViewport({scale:Number(value('resolution','144'))/72});
    if(viewport.width*viewport.height>LIMITS.pixels)throw new PdfError('pixels');
    const canvas=document.createElement('canvas');canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);
    try{
     await page.render({canvas,viewport,background:'rgb(255,255,255)'}).promise;
     const b=await new Promise<Blob>((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new PdfError('invalid')),mime,.92));
     total+=b.size;if(total>LIMITS.outputBytes)throw new PdfError('output');
     files.push({name:'pagina-'+String(index+1).padStart(3,'0')+'.'+ext,bytes:new Uint8Array(await b.arrayBuffer())});
    }finally{canvas.width=canvas.height=0;page.cleanup();}
    if(id!==job)throw new PdfError('cancelled');
    setProgress((i+1)/pages.length*90);await new Promise(r=>setTimeout(r,0));
   }
   if(id!==job)throw new PdfError('cancelled');
   return files.length===1?{...files[0],mime}:await engine<Output>({action:'zip',files});
  }finally{await task.destroy().catch(()=>{});if(activePdf===task)activePdf=null;}
 }
 run.addEventListener('click',async()=>{
  if(busy)return;clearResult();error.hidden=true;busy=true;const id=++job;update();setProgress(0);
  try{
   let output:Output;
   if(tool==='export')output=await exportImages(id);
   else if(tool==='word'){
    const lib=await getPdfJs();
    const entry=entries[0];
    const bytes=await pdfToWord(lib,entry.bytes,pdfOptions(entry.bytes),value=>setProgress(value,t('Extraindo texto e montando o Word…','Extracting text and building the Word file…')),()=>id!==job);
    output={bytes,name:entry.file.name.replace(/\.pdf$/i,'')+'.docx',mime:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'};
   }
   else{
    const inputs:Input[]=[];
    for(const entry of entries){if(id!==job)throw new PdfError('cancelled');inputs.push(tool==='images'?await normalizeImage(entry):{bytes:entry.bytes,name:entry.file.name,rotation:entry.rotation});}
    if(id!==job)throw new PdfError('cancelled');
    output=await engine<Output>({action:'convert',tool,inputs,options:{range:value('range'),separate:value('separate')==='true',paper:value('paper','a4'),orientation:value('orientation','auto')}});
   }
   if(id!==job)return;
   resultUrl=URL.createObjectURL(blob(output.bytes,output.mime));const link=q<HTMLAnchorElement>('[data-download]');link.href=resultUrl;link.download=output.name;
   q('[data-result-info]').textContent=output.name+' · '+formatSize(output.bytes.length);result.hidden=false;announce(t('Resultado pronto para baixar.','Your result is ready to download.'));result.scrollIntoView({behavior:'smooth',block:'nearest'});
  }catch(e){if(id===job)showError(e);}
  finally{if(id===job){busy=false;q('[data-progress]').hidden=true;update();}}
 });
 function abort(){job++;worker?.terminate();worker=null;rejectWorker?.(new PdfError('cancelled'));rejectWorker=null;void activePdf?.destroy().catch(()=>{});activePdf=null;busy=false;q('[data-progress]').hidden=true;update();announce(t('Operação cancelada.','Operation cancelled.'));}
 cancel.addEventListener('click',abort);
 input.addEventListener('change',()=>{const files=Array.from(input.files??[]);input.value='';void addFiles(files);});
 if(import.meta.env.DEV && example){
  example.addEventListener('click',async()=>{
   const names=tool==='images'?['imagem.png']:tool==='merge'?['documento-a.pdf','documento-b.pdf']:['documento-a.pdf'];
   example.disabled=true;
   try{
    const files=await Promise.all(names.map(async name=>{
     const response=await fetch('/aratu-demo-'+name);
     if(!response.ok)throw new Error('Sample unavailable');
     const sample=await response.blob();
     return new File([sample],name,{type:sample.type});
    }));
    if(!entries.length)await addFiles(files);
   }catch(e){showError(e);}
   finally{example.disabled=busy||entries.length>0;}
  });
 }
 const drop=q('[data-drop]');
 for(const event of ['dragenter','dragover'])drop.addEventListener(event,e=>{e.preventDefault();if(!busy)drop.classList.add('dragging');});
 drop.addEventListener('dragleave',()=>drop.classList.remove('dragging'));
 drop.addEventListener('drop',e=>{e.preventDefault();drop.classList.remove('dragging');void addFiles(Array.from((e as DragEvent).dataTransfer?.files??[]));});
 q('[data-clear]').addEventListener('click',()=>{if(busy)return;entries.forEach(e=>URL.revokeObjectURL(e.preview));entries=[];clearResult();error.hidden=true;update();});
 root.querySelectorAll('.options input,.options select').forEach(el=>el.addEventListener('input',()=>{clearResult();error.hidden=true;}));
 window.addEventListener('beforeunload',()=>{worker?.terminate();entries.forEach(e=>URL.revokeObjectURL(e.preview));if(resultUrl)URL.revokeObjectURL(resultUrl);});
 update();
}

