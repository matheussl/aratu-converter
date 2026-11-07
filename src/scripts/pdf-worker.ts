import {inspect,processPdf,zipOutputs,PdfError} from '../lib/pdf';
self.onmessage=async({data})=>{
 try{
  const result=data.action==='inspect'?await inspect(data.bytes):data.action==='zip'?zipOutputs(data.files):await processPdf(data.tool,data.inputs,data.options,value=>self.postMessage({type:'progress',value}));
  if(typeof result==='number')self.postMessage({type:'result',result});
  else self.postMessage({type:'result',result},{transfer:[result.bytes.buffer]});
 }catch(e){self.postMessage({type:'error',code:e instanceof PdfError?e.code:'invalid'});}
};

