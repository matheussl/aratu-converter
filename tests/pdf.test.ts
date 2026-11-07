import test from 'node:test';
import assert from 'node:assert/strict';
import {PDFDocument}from'pdf-lib';
import{unzipSync}from'fflate';
import{inspect,processPdf,parseRange,validateFiles,LIMITS}from'../src/lib/pdf.ts';
const options={range:'',separate:false,paper:'a4',orientation:'auto'};
async function fixture(sizes:number[]){const d=await PDFDocument.create();for(const w of sizes)d.addPage([w,400]);return d.save();}
test('merge preserves page order, dimensions and applies rotation',async()=>{
 const a=await fixture([300,350]),b=await fixture([500]);
 const output=await processPdf('merge',[{bytes:b,name:'b.pdf',rotation:90},{bytes:a,name:'a.pdf',rotation:0}],options);
 const doc=await PDFDocument.load(output.bytes);
 assert.deepEqual(doc.getPages().map(p=>p.getWidth()),[500,300,350]);assert.equal(doc.getPages()[0].getRotation().angle,90);
});
test('extract respects selected order without duplicated pages',async()=>{
 const bytes=await fixture([201,202,203,204]);
 const result=await processPdf('split',[{bytes,name:'a.pdf',rotation:0}],{...options,range:'3, 1-2, 3'});
 const d=await PDFDocument.load(result.bytes);assert.deepEqual(d.getPages().map(p=>p.getWidth()),[203,201,202]);
});
test('split outputs valid individual PDFs in ZIP',async()=>{
 const bytes=await fixture([300,350,400]);const result=await processPdf('split',[{bytes,name:'a.pdf',rotation:0}],{...options,range:'2-3',separate:true});
 const files=unzipSync(result.bytes);assert.deepEqual(Object.keys(files),['pagina-002.pdf','pagina-003.pdf']);
 for(const b of Object.values(files))assert.equal((await PDFDocument.load(b)).getPageCount(),1);
});
test('range rejects invalid, descending and out-of-bounds selections',()=>{
 for(const r of ['0','4','2-1','1,,2','1.5','one','1-3-4'])assert.throws(()=>parseRange(r,3));
 assert.deepEqual(parseRange('',3),[0,1,2]);
});
test('file budgets reject oversized files and queues',()=>{
 assert.throws(()=>validateFiles([{size:LIMITS.fileBytes+1}]));
 assert.throws(()=>validateFiles(Array.from({length:21},()=>({size:1}))));
 assert.throws(()=>validateFiles(Array.from({length:3},()=>({size:LIMITS.fileBytes}))));
});
test('invalid and oversized-page PDFs are rejected',async()=>{
 await assert.rejects(inspect(new TextEncoder().encode('%PDF-invalid')));
 await assert.rejects(inspect(await fixture(Array(201).fill(300))),/pages/);
});
test('merge requires at least two valid inputs',async()=>{
 await assert.rejects(processPdf('merge',[{bytes:await fixture([300]),name:'one.pdf',rotation:0}],options),/twoPdf/);
});
test('image-to-PDF embeds an actual image with A4 landscape options',async()=>{
 const png=new Uint8Array(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jzXYAAAAASUVORK5CYII=','base64'));
 const result=await processPdf('images',[{bytes:png,name:'image.png',rotation:90}],{...options,orientation:'landscape'});
 const d=await PDFDocument.load(result.bytes);assert.equal(d.getPageCount(),1);assert.ok(d.getPages()[0].getWidth()>d.getPages()[0].getHeight());
});

