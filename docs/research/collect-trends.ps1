param([string]$OutputName='trends-competidores-2026-11-03.json',[ValidateSet('main','detail')][string]$Mode='main')
$ErrorActionPreference='Stop'
if([IO.Path]::GetFullPath($PSScriptRoot) -ne 'C:\Users\Matheus\projetos\conversores\docs\research'){throw 'Unexpected directory'}
if($OutputName -ne [IO.Path]::GetFileName($OutputName)){throw 'Expected filename'}
$outPath=Join-Path $PSScriptRoot $OutputName
if(Test-Path -LiteralPath $outPath){throw 'Preserve previous collection'}
$session=[Microsoft.PowerShell.Commands.WebRequestSession]::new()
$headers=@{'User-Agent'='Mozilla/5.0';'Accept-Language'='en-US,en;q=0.9'}
function Read-TrendsJson([string]$Url){
 for($a=0;$a -lt 3;$a++){
  try{
   Start-Sleep -Seconds 3
   $r=Invoke-WebRequest -Uri $Url -WebSession $session -Headers $headers -TimeoutSec 35
   $body=if($r.Content -is [byte[]]){[Text.Encoding]::UTF8.GetString($r.Content)}else{[string]$r.Content}
   return ($body.Substring($body.IndexOf('{'))|ConvertFrom-Json)
  }catch{
   if(-not $_.Exception.Response -or [int]$_.Exception.Response.StatusCode -ne 429 -or $a -eq 2){throw}
   Write-Host "Rate limit: waiting $(15*($a+1)) seconds"
   Start-Sleep -Seconds (15*($a+1))
  }
 }
}
$landing=Invoke-WebRequest -Uri 'https://trends.google.com/trends/' -WebSession $session -Headers $headers -TimeoutSec 35
$world=@'
pdf to word|word to pdf|pdf to jpg|pdf to excel
compress pdf|merge pdf|split pdf|image to text
remove background|image compressor|resize image|crop image
png to jpg|jpg to png|heic to jpg|webp to jpg
webp to png|heic to png|avif to jpg|jfif to jpg
svg to png|png to svg|jpg to svg|png to ico
tiff to jpg|bmp to jpg|compress jpg|compress png
mp4 to mp3|mov to mp4|webm to mp4|mkv to mp4
mp4 to gif|gif to mp4|video compressor|audio to text
m4a to mp3|wav to mp3|mp3 to wav|flac to mp3
opus to mp3|ogg to mp3|aac to mp3|video to text
excel to pdf|ppt to pdf|html to pdf|pdf to ppt
epub to pdf|pdf to epub|epub to mobi|pdf to markdown
rar to zip|7z to zip|extract zip|zip files
base64 decode|base64 encode|json to csv|json formatter
binary to decimal|decimal to binary|hex to decimal|binary to text
image to base64|base64 to image|url encode|url decode
xml to json|csv to json|json to yaml|yaml to json
markdown to pdf|html to markdown|csv to excel|xml to csv
ttf to woff2|woff to ttf|dwg to pdf|stl to obj
ocr pdf|unlock pdf|rotate pdf|extract pdf pages
youtube to mp3|text to speech|speech to text|pdf to text
'@ -split '\r?\n'
$br=@'
pdf para word|word para pdf|pdf para jpg|pdf para excel
comprimir pdf|juntar pdf|dividir pdf|imagem para texto
remover fundo|comprimir imagem|redimensionar imagem|cortar imagem
heic para jpg|png para jpg|webp para jpg|svg para png
mp4 para mp3|mov para mp4|audio para texto|youtube para mp3
rar para zip|json para csv|base64 decode|texto para fala
'@ -split '\r?\n'
$jobs=[Collections.Generic.List[object]]::new()
if($Mode -eq 'main'){
 $i=0;foreach($line in $world){$i++;$jobs.Add(@{id="world-$i";geo='';time='2025-11-02 2026-11-01';terms=@('jpg to pdf')+@($line.Split('|'))})}
 $i=0;foreach($line in $br){$i++;$jobs.Add(@{id="br-$i";geo='BR';time='2025-11-02 2026-11-01';terms=@('jpg para pdf')+@($line.Split('|'))})}
 $jobs.Add(@{id='history';geo='';time='2021-10-31 2026-11-01';terms=@('jpg to pdf','compress pdf','merge pdf','image to text','heic to jpg')})
}else{
 $detail=@'
base64 encode|json to csv|json formatter|image to base64
base64 to image|url encode|url decode|binary to text
xml to json|csv to json|json to yaml|yaml to json
html to markdown|csv to excel|xml to csv|markdown to pdf
ttf to woff2|woff to ttf|stl to obj|dwg to pdf
rar to zip|7z to zip|extract zip|zip files
tiff to jpg|bmp to jpg|jfif to jpg|avif to jpg
flac to mp3|opus to mp3|ogg to mp3|aac to mp3
epub to mobi|pdf to epub|epub to pdf|pdf to markdown
jpg to svg|png to ico|svg to png|png to svg
ocr pdf|unlock pdf|rotate pdf|extract pdf pages
png to pdf|pdf to png|image to pdf|image to word
docx to pdf|xlsx to pdf|xlsx to csv|pdf to html
jpg to webp|png to webp|svg to jpg|jpeg to jpg
avif to png|eps to png|ai to svg|azw3 to epub
'@ -split '\r?\n'
 $i=0;foreach($line in $detail){$i++;$jobs.Add(@{id="detail-$i";geo='';time='2025-11-02 2026-11-01';terms=@('base64 decode')+@($line.Split('|'))})}
 $jobs.Add(@{id='bridge-check';geo='';time='2025-11-02 2026-11-01';terms=@('jpg to pdf','base64 decode','heic to jpg','merge pdf','compress pdf')})
}
$results=[Collections.Generic.List[object]]::new()
function Save-Data{
 $payload=[ordered]@{source='Google Trends public web endpoints; not the official alpha API';collectedAt=[DateTime]::UtcNow.ToString('o');method='Exact phrases; Web Search; category 0; fixed dates; anchor=100 within region. No absolute monthly volumes.';groups=@($results.ToArray())}
 [IO.File]::WriteAllText($outPath,($payload|ConvertTo-Json -Depth 45),[Text.UTF8Encoding]::new($false))
}
foreach($job in $jobs){
 try{
  $items=@($job.terms|ForEach-Object{@{keyword='"'+$_+'"';geo=$job.geo;time=$job.time}})
  $req=@{comparisonItem=$items;category=0;property=''}|ConvertTo-Json -Depth 12 -Compress
  $explore=Read-TrendsJson ('https://trends.google.com/trends/api/explore?hl=en-US&tz=180&req='+[uri]::EscapeDataString($req))
  $widget=@($explore.widgets|Where-Object{$_.id -eq 'TIMESERIES'})[0]
  if(-not $widget){throw 'No time series widget'}
  $wreq=$widget.request|ConvertTo-Json -Depth 30 -Compress
  $data=Read-TrendsJson ('https://trends.google.com/trends/api/widgetdata/multiline?hl=en-US&tz=180&req='+[uri]::EscapeDataString($wreq)+'&token='+[uri]::EscapeDataString($widget.token))
  $rows=@($data.default.timelineData|Where-Object{-not ($_.isPartial -contains $true)})
  if(-not $rows.Count){throw 'No complete data'}
  $means=@();for($k=0;$k -lt $job.terms.Count;$k++){$means+=([double](@($rows|ForEach-Object{[double]$_.value[$k]})|Measure-Object -Average).Average)}
  $ratio=@($means|ForEach-Object{if($means[0] -gt 0){[Math]::Round($_/$means[0]*100,4)}else{$null}})
  $results.Add([ordered]@{id=$job.id;geo=$job.geo;time=$job.time;terms=$job.terms;means=$means;anchor100=$ratio;completePoints=$rows.Count;url=('https://trends.google.com/trends/explore?date='+[uri]::EscapeDataString($job.time)+'&geo='+$job.geo+'&q='+(@($job.terms|ForEach-Object{[uri]::EscapeDataString('"'+$_+'"')}) -join ','));timeline=@($data.default.timelineData)})
  Write-Output ($job.id+' '+(@(for($k=0;$k -lt $job.terms.Count;$k++){$job.terms[$k]+'='+[Math]::Round($ratio[$k],2)}) -join '; '))
 }catch{
  $results.Add([ordered]@{id=$job.id;geo=$job.geo;time=$job.time;terms=$job.terms;error=$_.Exception.Message})
  Write-Output ('FAILED '+$job.id+': '+$_.Exception.Message)
  Save-Data
  if($_.Exception.Response -and [int]$_.Exception.Response.StatusCode -eq 429){break}
 }
 Save-Data
 Start-Sleep -Seconds 2
}
Write-Output ('Saved '+$results.Count+' groups to '+$outPath)

