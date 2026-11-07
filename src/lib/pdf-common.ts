export const LIMITS = { fileBytes:20*1024**2,totalBytes:50*1024**2,files:20,pages:200,renderPages:50,pixels:12_000_000,outputBytes:100*1024**2 };
export type Tool = 'merge'|'images'|'split'|'export'|'word';
export type Input = {bytes:Uint8Array;name:string;rotation:number};
export type Options = {range:string;separate:boolean;paper:string;orientation:string};
export type Output = {bytes:Uint8Array;name:string;mime:string};
export class PdfError extends Error { code:string; constructor(code:string){super(code);this.code=code;} }
export function parseRange(text:string,count:number):number[]{
 if(!Number.isInteger(count)||count<1||count>LIMITS.pages)throw new PdfError('pages');
 if(!text.trim())return Array.from({length:count},(_,i)=>i);
 const result=new Set<number>();
 for(const part of text.split(',')){
  const m=part.trim().match(/^(\d+)\s*(?:-\s*(\d+))?$/);
  if(!m)throw new PdfError('range');
  const a=Number(m[1]),b=Number(m[2]??m[1]);
  if(a<1||b<a||b>count)throw new PdfError('range');
  for(let p=a;p<=b;p++)result.add(p-1);
 }
 return [...result];
}
export function validateFiles(files:{size:number}[]){
 if(files.length>LIMITS.files)throw new PdfError('files');
 if(files.some(f=>f.size>LIMITS.fileBytes))throw new PdfError('fileSize');
 if(files.reduce((s,f)=>s+f.size,0)>LIMITS.totalBytes)throw new PdfError('totalSize');
}
export function kind(b:Uint8Array):'pdf'|'jpg'|'png'|null{
 if(new TextDecoder().decode(b.slice(0,1024)).includes('%PDF-'))return 'pdf';
 if(b[0]===255&&b[1]===216&&b[2]===255)return 'jpg';
 if([137,80,78,71,13,10,26,10].every((n,i)=>b[i]===n))return 'png';
 return null;
}

