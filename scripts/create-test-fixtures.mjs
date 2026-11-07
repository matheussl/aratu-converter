import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { mkdir, writeFile } from 'node:fs/promises';
import { zlibSync } from 'fflate';
await mkdir('.test-artifacts', {recursive:true});
for (const [name,count,width] of [['documento-a',2,420],['documento-b',1,595]]) {
  const pdf=await PDFDocument.create(),font=await pdf.embedFont(StandardFonts.Helvetica);
  for(let i=0;i<count;i++){
    const page=pdf.addPage([width,595]);
    page.drawRectangle({x:0,y:475,width,height:120,color:rgb(.09,.24,.25)});
    page.drawText('ARATU / DOCUMENTO DE TESTE',{x:35,y:535,size:14,font,color:rgb(1,1,.95)});
    page.drawText(name.toUpperCase()+' - pagina '+(i+1),{x:35,y:430,size:17,font,color:rgb(.15,.27,.25)});
    page.drawRectangle({x:35,y:325,width:width-70,height:60,color:rgb(.94,.82,.68)});
    page.drawText('Arquivo sintetico para validar o MVP.',{x:35,y:280,size:12,font});
  }
  await writeFile('.test-artifacts/'+name+'.pdf',await pdf.save());
}
// Synthetic RGB PNG with known dimensions, used only as a test input.
function crc(bytes){let n=0xffffffff;for(const b of bytes){n^=b;for(let k=0;k<8;k++)n=n&1?(n>>>1)^0xedb88320:n>>>1;}return(n^0xffffffff)>>>0;}
function chunk(type,data){const t=Buffer.from(type),body=Buffer.concat([t,data]),b=Buffer.alloc(12+data.length);b.writeUInt32BE(data.length);body.copy(b,4);b.writeUInt32BE(crc(body),8+data.length);return b;}
const w=480,h=320,pixels=new Uint8Array((w*3+1)*h);
for(let y=0;y<h;y++){for(let x=0;x<w;x++){const p=y*(w*3+1)+1+x*3;const color=y<75?[23,62,64]:x>40&&x<440&&y>110&&y<250?[235,151,112]:[249,245,233];pixels.set(color,p);}}
const ihdr=Buffer.alloc(13);ihdr.writeUInt32BE(w);ihdr.writeUInt32BE(h,4);ihdr[8]=8;ihdr[9]=2;
await writeFile('.test-artifacts/imagem.png',Buffer.concat([Buffer.from([137,80,78,71,13,10,26,10]),chunk('IHDR',ihdr),chunk('IDAT',Buffer.from(zlibSync(pixels))),chunk('IEND',Buffer.alloc(0))]));
await writeFile('.test-artifacts/invalido.pdf','not a PDF');
console.log('Synthetic test fixtures created in .test-artifacts/');
