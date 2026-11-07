# Aratu Converter — concorrentes e ranking de implementação

Pesquisa de 03/11/2026. Este relatório amplia a [primeira análise](pesquisa-demanda-trends-2026-11-03.md). Recomendações não equivalem a aprovação de MVP, instalação, serviços pagos ou deploy.

## Resultado executivo

O melhor primeiro conjunto é: juntar PDF; JPG/PNG→PDF; PDF→JPG/PNG; dividir/extrair páginas. Isso combina procura observada, coerência de jornada e reaproveitamento técnico.

A principal mudança em relação à rodada anterior é a relevância de **juntar PDF no Brasil**: o interesse da frase "juntar pdf" foi aproximadamente 4,6 vezes o de "jpg para pdf" no período. No mundo, a frase "pdf to word" continua maior, mas sua complexidade de fidelidade exige prova técnica. Remover fundo e texto→fala também têm procura, com requisitos próprios.

A classificação de implementação não é a classificação de procura. Avaliações de esforço são julgamento técnico informado por documentação, ainda sem benchmarks ou protótipos.

## Escopo e coleta

- 13 concorrentes/referências inspecionados em páginas públicas próprias; catálogos declarados, sem testar uploads nem contratar planos.
- 29 comparações concluídas por console: 22 mundiais de 12 meses, seis brasileiras de 12 meses e uma histórica mundial de cinco anos.
- 89 frases distintas em inglês no mundo e 25 formulações no Brasil, incluindo a referência de cada mercado.
- Período principal fixo: 02/11/2025 a 01/11/2026; histórico: 31/10/2021 a 01/11/2026. Séries principais com 52 pontos completos; pontos marcados parciais excluídos.
- Frases exatas entre aspas; todas as categorias; Pesquisa na Web. Inglês mundial não significa todos os idiomas nem países anglófonos apenas.
- Coleta via endpoints públicos usados pelo site do Trends, com sessão HTTP normal. Não foi usada a API oficial alpha, cujo acesso depende de admissão do Google.
- A coleta principal funcionou. Duas tentativas complementares dos termos menores receberam HTTP 429; houve espera de 15 e 30 segundos por tentativa e interrupção. Não houve coleta pelo navegador nesta rodada, proxies nem insistência adicional.
- Nenhuma biblioteca foi instalada. Credenciais e cookies não foram gravados no conjunto de dados. O coletor mantém apenas séries e metadados públicos.

## Como comparar os gráficos

Em cada grupo foi repetida uma referência: "jpg to pdf" no mundo e "jpg para pdf" no Brasil.

Índice reescalonado = 100 × média semanal do termo / média semanal da referência, usando pontos completos do mesmo gráfico.

Portanto **100 aqui é a referência, não o pico 100 do Trends**, e valores maiores que 100 são possíveis. Isso permite ordenar aproximadamente grupos com a mesma referência e período. Amostragem e arredondamento limitam precisão, especialmente nas caudas menores. As tabelas usam uma casa decimal por legibilidade, não como intervalo de confiança.

Não somar os índices de sinônimos, não somar os dois mercados, não transformar os índices em pesquisas mensais e não comparar Brasil/mundo como volumes absolutos. Um valor 0 quer dizer abaixo da resolução da comparação, não zero buscas. Campos sem medição brasileira aparecem como travessão.

A tentativa de medir novamente a cauda com uma referência menor não foi concluída por HTTP 429. **19 das 89 frases mundiais ficaram em zero na escala principal**; sua ordem relativa não foi descoberta. As demais frases de baixa resolução também exigem cautela. As referências se repetem dentro dos grupos; não são observações independentes.

## Concorrentes: o que foi efetivamente observado

| Concorrente / fonte própria | Catálogo observado | Implicação para Aratu |
| --- | --- | --- |
| [iLovePDF](https://www.ilovepdf.com/) | PDF/Office, juntar, dividir, comprimir, OCR e PDF→Markdown. | A jornada de documentos vai além de conversão de formato. |
| [Smallpdf](https://smallpdf.com/) | Conversão, juntar, comprimir, editar e assinar PDF. | Ferramentas se conectam a fluxos; não precisamos copiar edição e assinatura no início. |
| [Adobe Acrobat](https://www.adobe.com/acrobat/online.html) | PDF/Office, imagens→PDF, extração, organização e OCR. | Fidelidade e confiança são expectativas; não confundir catálogo com demanda. |
| [FreeConvert](https://www.freeconvert.com/) | HEIC/AVIF/JFIF, SVG/ICO, GIF, áudio/vídeo e compressores. | Novos pares candidatos e várias ferramentas adjacentes. |
| [CloudConvert](https://cloudconvert.com/) | Documentos, imagens, mídia, arquivos, ebooks, CAD e fontes. | Cada formato tem características próprias; não assumir todos os pares possíveis. |
| [Convertio](https://convertio.co/formats/) | Catálogo de formatos com distinção de leitura e escrita. | Listar formatos não comprova suporte bidirecional a qualquer par. |
| [Zamzar](https://www.zamzar.com/) | Conversões, texto de imagem/áudio/vídeo, compactação e extração de áudio. | Transcrição, OCR e extração não são a mesma tecnologia. |
| [Online-Convert](https://www.online-convert.com/) | Mídia, documentos, imagens, OCR, compactados, CAD e fontes. | Metadados e opções específicas por formato podem compor uma boa experiência. |
| [AConvert](https://www.aconvert.com/) | PDF, documentos, ebooks, imagens, mídia e arquivos compactados. | A amplitude pode ser construída por módulos; não é um MVP. |
| [iLoveIMG](https://www.iloveimg.com/) | Compressão, dimensões, recorte, conversão e remoção de fundo. | Imagem tem várias tarefas próximas além de trocar extensão. |
| [ConvertCSV](https://www.convertcsv.com/) | CSV/JSON/XML/YAML/HTML, tabelas e validação. | Conversão estruturada precisa de regras explícitas sobre hierarquias e tipos. |
| [CyberChef](https://gchq.github.io/CyberChef/) | Base64, bytes, datas, codificações e operações encadeadas. | Dados técnicos são um nicho; copiar centenas de operações não demonstra prioridade. |
| [ezyZip](https://www.ezyzip.com/convert-rar-to-zip.html) | RAR→ZIP e processamento declarado no navegador. | Processamento local já existe em concorrentes; não é diferencial exclusivo. |

A análise é de oferta pública e presença nas buscas consultadas. Não foram medidos faturamento, backlinks, tráfego, Core Web Vitals, qualidade real das conversões ou posição estável no Google de cada concorrente.

**Hipóteses de diferenciação a testar:** experiência móvel rápida, execução em lote com limites claros, controle de orientação/tamanho, explicação de perdas e encaminhamento simples entre tarefas. Privacidade, gratuidade e grande catálogo já aparecem em concorrentes; não são vantagem exclusiva por si só.

Não há evidência suficiente para chamar qualquer uma dessas consultas de "fácil de ranquear". A presença de um item no catálogo não comprova demanda, e quantidade de formatos não é quantidade de conversões realmente suportadas.

## Maiores sinais de procura

Base = JPG→PDF = 100 em cada mercado. São frases específicas, não totais de categoria.

| Frase mundial | Índice mundial | Formulação no Brasil | Índice Brasil |
| --- | ---: | --- | ---: |
| "pdf to word" | 149.9 | "pdf para word" | 305.8 |
| "jpg to pdf" | 100.0 | "jpg para pdf" | 100.0 |
| "word to pdf" | 77.8 | "word para pdf" | 175.0 |
| "pdf to jpg" | 67.7 | "pdf para jpg" | 59.5 |
| "remove background" | 67.1 | "remover fundo" | 288.2 |
| "youtube to mp3" | 65.7 | "youtube para mp3" | 47.4 |
| "merge pdf" | 45.9 | "juntar pdf" | 461.1 |
| "compress pdf" | 38.9 | "comprimir pdf" | 125.6 |
| "text to speech" | 26.4 | "texto para fala" | 0.3 |
| "pdf to excel" | 25.7 | "pdf para excel" | 31.0 |
| "excel to pdf" | 14.7 | — | — |
| "split pdf" | 14.2 | "dividir pdf" | 52.7 |
| "heic to jpg" | 11.9 | "heic para jpg" | 16.6 |
| "resize image" | 11.1 | "redimensionar imagem" | 18.4 |
| "mp4 to mp3" | 10.9 | "mp4 para mp3" | 21.0 |
| "speech to text" | 7.2 | — | — |
| "image to text" | 7.0 | "imagem para texto" | 3.6 |

Destaques:

- PDF→Word lidera as frases mundiais medidas. JPG→PDF é a referência forte para uma primeira entrega mais simples.
- Juntar PDF supera a referência em aproximadamente 4,6 vezes no Brasil. Comprimir PDF também supera essa referência, mas é tecnicamente diferente de juntar.
- Remover fundo é forte nos dois mercados, porém é uma ferramenta adjacente com motor/modelo próprio.
- Texto→fala, fala→texto e áudio→texto são intenções diferentes e não devem ser somadas ou tratadas como um mesmo motor.
- YouTube→MP3 foi medido para distinguir intenção; permanece fora da ordem de conversores locais.
- Não procurar só palavras "convert/converter/conversor": tarefas como "juntar pdf" podem ser mais importantes que a denominação genérica.

## Evolução recente

Comparação das 52 semanas completas mais recentes com as 52 anteriores, na mesma série de cinco anos:

| Frase mundial | Variação de interesse relativo |
| --- | ---: |
| JPG→PDF | -0,9% |
| Comprimir PDF | +1,0% |
| Juntar PDF | -1,1% |
| Imagem→texto | -38,4% |
| HEIC→JPG | +12,4% |

São variações de participação relativa nas buscas, não variação comprovada de pesquisas absolutas. Compressão e junção ficaram próximas de estabilidade neste recorte; OCR não deve ser apresentado como tendência crescente com esses dados. Não foi investigada uma causa para as mudanças.

## Ranking final recomendado: o que entregar primeiro

Critérios, nesta ordem prática: adequação ao produto de baixo custo; procura medida em pelo menos um mercado; viabilidade de entregar um resultado correto; reaproveitamento com ferramentas próximas; carga operacional. A ordem é uma recomendação editorial/técnica, não um score estatístico nem uma previsão de receita.

Não se criou uma soma arbitrária de índices de dois países ou pontuação de SEO sem evidência. Ferramentas com motor não validado têm uma condição de avanço. As posições representam a entrega sob as restrições atuais; as provas técnicas de PDF/Word podem começar na especificação desde já.

| Ordem | Pacote de implementação | Esforço estimado | Etapa |
| ---: | --- | --- | --- |
| 1 | Juntar PDF | Baixo–médio | Primeira entrega |
| 2 | JPG/PNG → PDF | Baixo–médio | Primeira entrega |
| 3 | PDF → JPG/PNG | Médio | Primeira entrega |
| 4 | Dividir, extrair e girar páginas de PDF | Baixo–médio | Primeira entrega |
| 5 | Redimensionar e recortar imagens | Baixo | Expansão do núcleo |
| 6 | PNG ↔ JPG e WebP → JPG/PNG | Baixo–médio | Expansão do núcleo |
| 7 | Comprimir JPG/PNG/WebP | Médio | Expansão do núcleo |
| 8 | HEIC → JPG/PNG | Médio–alto | Após prova técnica |
| 9 | Comprimir PDF | Alto | Após prova técnica |
| 10 | Imagem → texto (OCR) | Médio–alto | Após prova técnica |
| 11 | PDF → texto / Markdown | Médio–alto | Expansão documental |
| 12 | Base64 e JSON formatter | Baixo–médio | Complemento enxuto |
| 13 | MP4 → MP3 | Alto | Nova frente de mídia |
| 14 | M4A/WAV/MP3 e outros áudios | Alto | Nova frente de mídia |
| 15 | SVG → PNG, PNG → ICO e formatos adicionais de imagem | Médio | Cauda longa de imagem |
| 16 | Binário/decimal/hex e URL encoding | Baixo–médio | Complemento técnico |
| 17 | JSON/CSV/XML/YAML | Médio | Após nova medição |
| 18 | PDF → Word | Muito alto | Pesquisa antecipada; entrega condicionada |
| 19 | Word/DOCX, HTML e Markdown → PDF | Muito alto | Entrega condicionada |
| 20 | PDF ↔ Excel e planilhas/apresentações → PDF | Muito alto | Entrega condicionada |
| 21 | Vídeo ↔ GIF, MOV/WebM/MKV → MP4 | Alto–muito alto | Após áudio |
| 22 | RAR/7Z/ZIP | Médio–alto | Após nova medição |
| 23 | Remover fundo | Muito alto | Produto adjacente condicionado |
| 24 | Áudio/vídeo → texto e texto → fala | Muito alto | Produto adjacente condicionado |
| 25 | Ebooks, CAD, fontes e vetorização | Alto–muito alto | Especialidades posteriores |
| 26 | PDF protegido / remover senha | Médio–alto | Especialidade posterior |

### Como usar a ordem

1. Definir escopo e qualidade dos quatro primeiros pacotes como núcleo de PDF/imagens. Não precisa implementar os quatro para demonstrar a primeira tarefa.
2. Validar cedo HEIC e compressão real de PDF. Se a prova falhar ou o custo ficar inadequado, seguir para o pacote seguinte.
3. Investigar PDF→Word em paralelo à especificação, porque a procura é alta. Isso não implica publicar uma ferramenta de baixa fidelidade para ocupar a palavra-chave.
4. Usar dados/JSON/Base64 como complemento enxuto, sem atrasar o núcleo.
5. Abrir nova frente de mídia só quando o motor tiver limites comprovados em dispositivos reais.
6. Revisar a ordem com Search Console, usos concluídos, falhas e custo após publicação. Nenhuma meta de RPM ou tráfego foi deduzida do Trends.

## Motivo e condição de cada posição

### 1. Juntar PDF

**Motivo:** Procura muito forte no Brasil, presente no mundo e aproveitamento do mesmo motor de páginas PDF.

**Condição para avançar:** Validar preservação de páginas, metadados, formulários e arquivos protegidos.

Frases medidas: "merge pdf".

### 2. JPG/PNG → PDF

**Motivo:** Maior referência global entre os pacotes iniciais; combina bem com juntar PDF. PNG é extensão funcional proposta, ainda sem medição própria nesta rodada.

**Condição para avançar:** Validar ordem, orientação, proporção, tamanho da página e qualidade.

Frases medidas: "jpg to pdf".

### 3. PDF → JPG/PNG

**Motivo:** Demanda expressiva e uso do mesmo núcleo PDF/imagens. PNG ainda não teve medição específica bem-sucedida nesta rodada.

**Condição para avançar:** Validar renderização, resolução e limites de páginas/memória.

Frases medidas: "pdf to jpg".

### 4. Dividir, extrair e girar páginas de PDF

**Motivo:** Busca medida por dividir e grande reaproveitamento do motor de juntar. Extração é adjacência; sua frase isolada ficou abaixo da resolução.

**Condição para avançar:** Distinguir dividir todas as páginas, intervalos e remoção.

Frases medidas: "split pdf", "extract pdf pages", "rotate pdf".

### 5. Redimensionar e recortar imagens

**Motivo:** Demanda em ambos os mercados e infraestrutura reutilizável pelas conversões de imagem.

**Condição para avançar:** Validar proporção, dimensões, transparência e orientação.

Frases medidas: "resize image", "crop image".

### 6. PNG ↔ JPG e WebP → JPG/PNG

**Motivo:** Pacote coerente de pares medidos com ampla reutilização técnica.

**Condição para avançar:** Explicitar perda de transparência/qualidade e suporte real.

Frases medidas: "png to jpg", "jpg to png", "webp to jpg", "webp to png".

### 7. Comprimir JPG/PNG/WebP

**Motivo:** Demanda e reutilização de imagem; alvo em KB pode diferenciar a tarefa, mas não teve keyword própria medida.

**Condição para avançar:** Não prometer tamanho exato preservando qualidade ou compressão com ganho em todo arquivo.

Frases medidas: "image compressor", "compress jpg", "compress png".

### 8. HEIC → JPG/PNG

**Motivo:** Demanda destacada em imagem e crescimento relativo no histórico; introduz um decodificador específico.

**Condição para avançar:** Prova técnica de fidelidade, orientação, imagens grandes, iPhone/Android e memória.

Frases medidas: "heic to jpg", "heic to png".

### 9. Comprimir PDF

**Motivo:** Demanda importante, especialmente no Brasil; antecipar a investigação técnica.

**Condição para avançar:** Produzir redução real mensurável. Regravar ou rasterizar tudo pode não reduzir e pode perder texto pesquisável.

Frases medidas: "compress pdf".

### 10. Imagem → texto (OCR)

**Motivo:** Nova família encontrada nos concorrentes; OCR de imagem pode abrir caminho para documentos escaneados.

**Condição para avançar:** Medir precisão PT/EN, rotação, resolução e desempenho. PDF exige etapa adicional, não é suporte automático do Tesseract.js.

Frases medidas: "image to text", "ocr pdf".

### 11. PDF → texto / Markdown

**Motivo:** Texto simples pode reaproveitar leitura de PDF; Markdown fiel exige reconstruir estrutura.

**Condição para avançar:** Separar PDF textual de escaneado e texto simples de preservação de tabelas/layout.

Frases medidas: "pdf to text", "pdf to markdown".

### 12. Base64 e JSON formatter

**Motivo:** Menor demanda que documentos, mas ferramentas úteis e de implementação curta; podem ser adiantadas se não atrasarem o núcleo.

**Condição para avançar:** UTF-8/binário, arquivos grandes, validação e nenhuma transmissão do conteúdo.

Frases medidas: "base64 decode", "base64 encode", "json formatter", "image to base64", "base64 to image".

### 13. MP4 → MP3

**Motivo:** Par de mídia mais interessante entre arquivos enviados; viabilidade depende de codecs e limites.

**Condição para avançar:** Testar celulares, duração, memória, cancelamento e se há extração ou transcodificação.

Frases medidas: "mp4 to mp3".

### 14. M4A/WAV/MP3 e outros áudios

**Motivo:** Expansão do motor de mídia após MP4→MP3; várias frases menores ficaram sem resolução.

**Condição para avançar:** Não afirmar suporte sem testar codec e contêiner.

Frases medidas: "m4a to mp3", "wav to mp3", "mp3 to wav", "flac to mp3", "opus to mp3", "ogg to mp3", "aac to mp3".

### 15. SVG → PNG, PNG → ICO e formatos adicionais de imagem

**Motivo:** Adjacências de imagem com demanda menor; adequadas após o núcleo.

**Condição para avançar:** Sanitização, fontes, rasterização e tamanhos reais de ICO. AVIF/TIFF podem precisar de decodificador próprio; PNG/ICO/JFIF não comprovam suporte a todos os demais formatos.

Frases medidas: "svg to png", "png to ico", "avif to jpg", "jfif to jpg", "tiff to jpg", "bmp to jpg".

### 16. Binário/decimal/hex e URL encoding

**Motivo:** Complementos técnicos pequenos; não justificar semanas de catálogo antes do núcleo.

**Condição para avançar:** Largura, sinal, Unicode, precisão de inteiros e escapes inválidos.

Frases medidas: "binary to decimal", "decimal to binary", "hex to decimal", "binary to text", "url encode", "url decode".

### 17. JSON/CSV/XML/YAML

**Motivo:** Família confirmada nos concorrentes; dados atuais são fracos na escala escolhida.

**Condição para avançar:** Reavaliar demanda com referência menor; definir arrays, hierarquias, tipos e CSV.

Frases medidas: "json to csv", "csv to json", "xml to json", "json to yaml", "yaml to json", "xml to csv", "html to markdown".

### 18. PDF → Word

**Motivo:** Maior demanda entre as frases globais medidas; posição é de entrega sob a restrição de simplicidade, não de interesse.

**Condição para avançar:** Investigar desde já, em paralelo à especificação. Só avançar na entrega após prova de fidelidade, OCR quando necessário e custo.

Frases medidas: "pdf to word".

### 19. Word/DOCX, HTML e Markdown → PDF

**Motivo:** Demanda forte; renderização fiel no navegador não foi demonstrada.

**Condição para avançar:** Provar suporte a fontes, quebras, tabelas e arquivos reais.

Frases medidas: "word to pdf", "html to pdf", "markdown to pdf".

### 20. PDF ↔ Excel e planilhas/apresentações → PDF

**Motivo:** Demanda intermediária em vários pares; alto risco de fidelidade e diversidade de arquivos.

**Condição para avançar:** Prova específica por direção; nenhuma promessa de suporte universal.

Frases medidas: "pdf to excel", "excel to pdf", "ppt to pdf", "pdf to ppt", "csv to excel".

### 21. Vídeo ↔ GIF, MOV/WebM/MKV → MP4

**Motivo:** Reaproveita motor de mídia, mas potencial de carga maior que extração de áudio.

**Condição para avançar:** Testar recodificação, duração, CPU e memória por dispositivo.

Frases medidas: "mp4 to gif", "gif to mp4", "mov to mp4", "webm to mp4", "mkv to mp4", "video compressor".

### 22. RAR/7Z/ZIP

**Motivo:** Família real nos catálogos; frases pequenas inconclusivas na escala usada.

**Condição para avançar:** Reavaliar demanda; definir limites de expansão, pastas, senhas e arquivos corrompidos.

Frases medidas: "rar to zip", "7z to zip", "extract zip", "zip files".

### 23. Remover fundo

**Motivo:** Demanda elevada, porém recorte amplo e motor/modelo próprio; não é apenas troca de formato.

**Condição para avançar:** Avaliar modelo, descarga, qualidade, licença e custo local/remoto; sem serviço pago aprovado.

Frases medidas: "remove background".

### 24. Áudio/vídeo → texto e texto → fala

**Motivo:** Intenções relevantes, mas transcrição e geração têm requisitos diferentes.

**Condição para avançar:** Modelo, idiomas, qualidade, exportação e custo. API nativa de fala não comprova geração de arquivo de áudio.

Frases medidas: "audio to text", "video to text", "speech to text", "text to speech".

### 25. Ebooks, CAD, fontes e vetorização

**Motivo:** Exemplos de expansão encontrados em catálogos; custo e demanda por par precisam de investigação própria.

**Condição para avançar:** PNG→SVG deve vetorizar de verdade, não embutir imagem num SVG. CAD, fontes e livros exigem motores específicos.

Frases medidas: "epub to pdf", "pdf to epub", "epub to mobi", "dwg to pdf", "stl to obj", "ttf to woff2", "woff to ttf", "png to svg", "jpg to svg".

### 26. PDF protegido / remover senha

**Motivo:** Ferramenta encontrada nos concorrentes com procura medida, mas separada do núcleo de organização.

**Condição para avançar:** Definir o cenário de abertura com senha fornecida e a preservação do arquivo; não prometer recuperar senha desconhecida. Não confundir remover senha com remover conteúdo.

Frases medidas: "unlock pdf".

### Separado. YouTube → MP3

**Motivo:** Demanda medida, mas não atende à mesma tarefa de converter um arquivo enviado.

**Condição para avançar:** Decisão independente do usuário antes de entrar no roadmap.

Frases medidas: "youtube to mp3".


## Candidatos encontrados que ainda não tiveram medição complementar válida

PNG→PDF, PDF→PNG, imagem→PDF, imagem→Word, DOCX→PDF, XLSX→PDF, XLSX→CSV, PDF→HTML, JPG→WebP, PNG→WebP, SVG→JPG, JPEG→JPG, AVIF→PNG, EPS→PNG, AI→SVG e AZW3→EPUB. Estavam no plano da rodada interrompida; não receberam números inventados.

Alguns estão nos pacotes como extensão funcional explícita, não como demanda medida. Também não foram medidos individualmente: juntar vários arquivos em lote, compressão para KB específicos, remover páginas, PDF/A, formulários e traduções. Hashes e geradores foram encontrados em catálogos, mas não equivalem a conversões reversíveis.

## Riscos técnicos que alteram a ordem

- Juntar/dividir PDF: [pdf-lib](https://pdf-lib.js.org/) documenta operação de páginas em JavaScript. Ainda é preciso testar limites e preservação de recursos do arquivo.
- PDF→imagem: [PDF.js](https://mozilla.github.io/pdf.js/examples/) demonstra renderização em canvas, não reconstrução de documentos Word.
- HEIC: [libheif-js](https://github.com/catdad-experiments/libheif-js) fornece decodificação no navegador; isso não prova desempenho em todos os dispositivos.
- OCR: [Tesseract.js](https://github.com/naptha/tesseract.js) é uma possibilidade para imagens e não oferece entrada PDF diretamente. OCR de PDF precisa de outra etapa.
- Vetorização: [VTracer](https://github.com/visioncortex/vtracer) exemplifica rastreamento raster→vetor; simplesmente embutir PNG em SVG não atende a mesma necessidade.
- Mídia: [ffmpeg.wasm](https://ffmpegwasm.netlify.app/docs/faq/) documenta limitações de desempenho, memória e CPU.
- Comprimir PDF de verdade não equivale a chamar save em uma biblioteca; rasterizar pode perder texto pesquisável e aumentar tamanho. É uma hipótese a validar.
- Contêiner e codec são coisas diferentes: listar MP4 ou M4A não garante tratar todos os arquivos dessa extensão.
- Segurança, privacidade e fidelidade precisam ser verificadas no motor escolhido. Nenhuma solução técnica foi instalada ou benchmarkada nesta pesquisa.

## Arquivos e reprodutibilidade

- [Séries originais completas](research/trends-competidores-2026-11-03.json).
- [Coletor PowerShell](research/collect-trends.ps1): consulta os endpoints públicos com espera e limite de tentativas. O arquivo atual inclui modo de detalhe, mas esse modo não produziu resultados válidos nesta execução.
- [Ranking estruturado de demanda](research/ranking-demanda-2026-11-03.json).
- [Ranking estruturado de implementação](research/ranking-implementacao-2026-11-03.json).
- Tentativas complementares interrompidas: trends-detalhe-2026-11-03.json e trends-detalhe-retry-2026-11-03.json. Guardadas para deixar a falha auditável.
- Fontes de método: [normalização do Trends](https://support.google.com/trends/answer/4365533?hl=en), [frases e operadores](https://support.google.com/trends/answer/4359582?hl=en), [API oficial alpha](https://developers.google.com/search/apis/trends).
- Os dados não são uma coleta oficial alpha; os endpoints públicos podem mudar e limitar acesso.

## Ranking completo de procura — 89 frases mundiais

Ordenado pelo índice reescalonado. Não é ordem de implementação. Empates e valores pequenos não devem ser interpretados como posições precisas. Zero não pode desempatar os termos de cauda. O índice brasileiro é um segundo sinal independente, sem soma.

| Ordem indicativa | Frase mundial exata | Índice mundial | Índice Brasil | Resolução | Grupo / gráfico |
| ---: | --- | ---: | ---: | --- | --- |
| 1 | "pdf to word" | 149.9 | 305.8 | Razoável para comparação ampla | [world-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20jpg%22,%22pdf%20to%20excel%22) |
| 2 | "jpg to pdf" | 100.0 | 100.0 | Razoável para comparação ampla | [world-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20jpg%22,%22pdf%20to%20excel%22) |
| 3 | "word to pdf" | 77.8 | 175.0 | Razoável para comparação ampla | [world-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20jpg%22,%22pdf%20to%20excel%22) |
| 4 | "pdf to jpg" | 67.7 | 59.5 | Razoável para comparação ampla | [world-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20jpg%22,%22pdf%20to%20excel%22) |
| 5 | "remove background" | 67.1 | 288.2 | Razoável para comparação ampla | [world-3](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22remove%20background%22,%22image%20compressor%22,%22resize%20image%22,%22crop%20image%22) |
| 6 | "youtube to mp3" | 65.7 | 47.4 | Razoável para comparação ampla | [world-22](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22youtube%20to%20mp3%22,%22text%20to%20speech%22,%22speech%20to%20text%22,%22pdf%20to%20text%22) |
| 7 | "merge pdf" | 45.9 | 461.1 | Razoável para comparação ampla | [world-2](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22compress%20pdf%22,%22merge%20pdf%22,%22split%20pdf%22,%22image%20to%20text%22) |
| 8 | "compress pdf" | 38.9 | 125.6 | Razoável para comparação ampla | [world-2](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22compress%20pdf%22,%22merge%20pdf%22,%22split%20pdf%22,%22image%20to%20text%22) |
| 9 | "text to speech" | 26.4 | 0.3 | Razoável para comparação ampla | [world-22](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22youtube%20to%20mp3%22,%22text%20to%20speech%22,%22speech%20to%20text%22,%22pdf%20to%20text%22) |
| 10 | "pdf to excel" | 25.7 | 31.0 | Razoável para comparação ampla | [world-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20jpg%22,%22pdf%20to%20excel%22) |
| 11 | "excel to pdf" | 14.7 | — | Razoável para comparação ampla | [world-12](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22excel%20to%20pdf%22,%22ppt%20to%20pdf%22,%22html%20to%20pdf%22,%22pdf%20to%20ppt%22) |
| 12 | "split pdf" | 14.2 | 52.7 | Razoável para comparação ampla | [world-2](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22compress%20pdf%22,%22merge%20pdf%22,%22split%20pdf%22,%22image%20to%20text%22) |
| 13 | "heic to jpg" | 11.9 | 16.6 | Razoável para comparação ampla | [world-4](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22) |
| 14 | "resize image" | 11.1 | 18.4 | Razoável para comparação ampla | [world-3](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22remove%20background%22,%22image%20compressor%22,%22resize%20image%22,%22crop%20image%22) |
| 15 | "mp4 to mp3" | 10.9 | 21.0 | Razoável para comparação ampla | [world-8](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22mov%20to%20mp4%22,%22webm%20to%20mp4%22,%22mkv%20to%20mp4%22) |
| 16 | "speech to text" | 7.2 | — | Razoável para comparação ampla | [world-22](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22youtube%20to%20mp3%22,%22text%20to%20speech%22,%22speech%20to%20text%22,%22pdf%20to%20text%22) |
| 17 | "image to text" | 7.0 | 3.6 | Razoável para comparação ampla | [world-2](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22compress%20pdf%22,%22merge%20pdf%22,%22split%20pdf%22,%22image%20to%20text%22) |
| 18 | "png to jpg" | 6.4 | 7.2 | Razoável para comparação ampla | [world-4](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22) |
| 19 | "webp to jpg" | 5.9 | 6.6 | Razoável para comparação ampla | [world-4](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22) |
| 20 | "image compressor" | 5.5 | 15.1 | Razoável para comparação ampla | [world-3](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22remove%20background%22,%22image%20compressor%22,%22resize%20image%22,%22crop%20image%22) |
| 21 | "pdf to ppt" | 5.3 | — | Razoável para comparação ampla | [world-12](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22excel%20to%20pdf%22,%22ppt%20to%20pdf%22,%22html%20to%20pdf%22,%22pdf%20to%20ppt%22) |
| 22 | "video compressor" | 4.9 | — | Razoável para comparação ampla | [world-9](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20gif%22,%22gif%20to%20mp4%22,%22video%20compressor%22,%22audio%20to%20text%22) |
| 23 | "ppt to pdf" | 4.8 | — | Razoável para comparação ampla | [world-12](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22excel%20to%20pdf%22,%22ppt%20to%20pdf%22,%22html%20to%20pdf%22,%22pdf%20to%20ppt%22) |
| 24 | "webp to png" | 4.8 | — | Razoável para comparação ampla | [world-5](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22webp%20to%20png%22,%22heic%20to%20png%22,%22avif%20to%20jpg%22,%22jfif%20to%20jpg%22) |
| 25 | "audio to text" | 4.8 | 7.5 | Razoável para comparação ampla | [world-9](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20gif%22,%22gif%20to%20mp4%22,%22video%20compressor%22,%22audio%20to%20text%22) |
| 26 | "compress jpg" | 3.9 | — | Razoável para comparação ampla | [world-7](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22tiff%20to%20jpg%22,%22bmp%20to%20jpg%22,%22compress%20jpg%22,%22compress%20png%22) |
| 27 | "unlock pdf" | 3.9 | — | Razoável para comparação ampla | [world-21](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ocr%20pdf%22,%22unlock%20pdf%22,%22rotate%20pdf%22,%22extract%20pdf%20pages%22) |
| 28 | "jpg to png" | 3.6 | — | Razoável para comparação ampla | [world-4](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22) |
| 29 | "json formatter" | 3.6 | — | Razoável para comparação ampla | [world-15](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22base64%20decode%22,%22base64%20encode%22,%22json%20to%20csv%22,%22json%20formatter%22) |
| 30 | "crop image" | 3.1 | 10.5 | Razoável para comparação ampla | [world-3](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22remove%20background%22,%22image%20compressor%22,%22resize%20image%22,%22crop%20image%22) |
| 31 | "mov to mp4" | 2.8 | 8.2 | Razoável para comparação ampla | [world-8](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22mov%20to%20mp4%22,%22webm%20to%20mp4%22,%22mkv%20to%20mp4%22) |
| 32 | "html to pdf" | 2.8 | — | Razoável para comparação ampla | [world-12](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22excel%20to%20pdf%22,%22ppt%20to%20pdf%22,%22html%20to%20pdf%22,%22pdf%20to%20ppt%22) |
| 33 | "video to text" | 2.6 | — | Razoável para comparação ampla | [world-11](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22opus%20to%20mp3%22,%22ogg%20to%20mp3%22,%22aac%20to%20mp3%22,%22video%20to%20text%22) |
| 34 | "avif to jpg" | 2.5 | — | Razoável para comparação ampla | [world-5](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22webp%20to%20png%22,%22heic%20to%20png%22,%22avif%20to%20jpg%22,%22jfif%20to%20jpg%22) |
| 35 | "mp4 to gif" | 2.5 | — | Razoável para comparação ampla | [world-9](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20gif%22,%22gif%20to%20mp4%22,%22video%20compressor%22,%22audio%20to%20text%22) |
| 36 | "png to svg" | 2.4 | — | Razoável para comparação ampla | [world-6](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22svg%20to%20png%22,%22png%20to%20svg%22,%22jpg%20to%20svg%22,%22png%20to%20ico%22) |
| 37 | "epub to pdf" | 2.4 | — | Razoável para comparação ampla | [world-13](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22epub%20to%20pdf%22,%22pdf%20to%20epub%22,%22epub%20to%20mobi%22,%22pdf%20to%20markdown%22) |
| 38 | "m4a to mp3" | 2.2 | — | Razoável para comparação ampla | [world-10](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22m4a%20to%20mp3%22,%22wav%20to%20mp3%22,%22mp3%20to%20wav%22,%22flac%20to%20mp3%22) |
| 39 | "base64 decode" | 2.0 | 3.5 | Razoável para comparação ampla | [world-15](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22base64%20decode%22,%22base64%20encode%22,%22json%20to%20csv%22,%22json%20formatter%22) |
| 40 | "jfif to jpg" | 1.9 | — | Razoável para comparação ampla | [world-5](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22webp%20to%20png%22,%22heic%20to%20png%22,%22avif%20to%20jpg%22,%22jfif%20to%20jpg%22) |
| 41 | "ocr pdf" | 1.9 | — | Razoável para comparação ampla | [world-21](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ocr%20pdf%22,%22unlock%20pdf%22,%22rotate%20pdf%22,%22extract%20pdf%20pages%22) |
| 42 | "svg to png" | 1.9 | 0.5 | Razoável para comparação ampla | [world-6](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22svg%20to%20png%22,%22png%20to%20svg%22,%22jpg%20to%20svg%22,%22png%20to%20ico%22) |
| 43 | "zip files" | 1.8 | — | Razoável para comparação ampla | [world-14](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22rar%20to%20zip%22,%227z%20to%20zip%22,%22extract%20zip%22,%22zip%20files%22) |
| 44 | "wav to mp3" | 1.5 | — | Razoável para comparação ampla | [world-10](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22m4a%20to%20mp3%22,%22wav%20to%20mp3%22,%22mp3%20to%20wav%22,%22flac%20to%20mp3%22) |
| 45 | "pdf to text" | 1.4 | — | Razoável para comparação ampla | [world-22](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22youtube%20to%20mp3%22,%22text%20to%20speech%22,%22speech%20to%20text%22,%22pdf%20to%20text%22) |
| 46 | "mp3 to wav" | 1.3 | — | Razoável para comparação ampla | [world-10](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22m4a%20to%20mp3%22,%22wav%20to%20mp3%22,%22mp3%20to%20wav%22,%22flac%20to%20mp3%22) |
| 47 | "rotate pdf" | 1.3 | — | Razoável para comparação ampla | [world-21](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ocr%20pdf%22,%22unlock%20pdf%22,%22rotate%20pdf%22,%22extract%20pdf%20pages%22) |
| 48 | "heic to png" | 1.2 | — | Razoável para comparação ampla | [world-5](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22webp%20to%20png%22,%22heic%20to%20png%22,%22avif%20to%20jpg%22,%22jfif%20to%20jpg%22) |
| 49 | "png to ico" | 1.2 | — | Razoável para comparação ampla | [world-6](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22svg%20to%20png%22,%22png%20to%20svg%22,%22jpg%20to%20svg%22,%22png%20to%20ico%22) |
| 50 | "compress png" | 1.2 | — | Razoável para comparação ampla | [world-7](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22tiff%20to%20jpg%22,%22bmp%20to%20jpg%22,%22compress%20jpg%22,%22compress%20png%22) |
| 51 | "webm to mp4" | 1.2 | — | Razoável para comparação ampla | [world-8](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22mov%20to%20mp4%22,%22webm%20to%20mp4%22,%22mkv%20to%20mp4%22) |
| 52 | "mkv to mp4" | 1.2 | — | Razoável para comparação ampla | [world-8](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22mov%20to%20mp4%22,%22webm%20to%20mp4%22,%22mkv%20to%20mp4%22) |
| 53 | "ogg to mp3" | 1.2 | — | Razoável para comparação ampla | [world-11](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22opus%20to%20mp3%22,%22ogg%20to%20mp3%22,%22aac%20to%20mp3%22,%22video%20to%20text%22) |
| 54 | "pdf to epub" | 1.2 | — | Razoável para comparação ampla | [world-13](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22epub%20to%20pdf%22,%22pdf%20to%20epub%22,%22epub%20to%20mobi%22,%22pdf%20to%20markdown%22) |
| 55 | "binary to decimal" | 1.2 | — | Razoável para comparação ampla | [world-16](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22binary%20to%20decimal%22,%22decimal%20to%20binary%22,%22hex%20to%20decimal%22,%22binary%20to%20text%22) |
| 56 | "decimal to binary" | 1.2 | — | Baixa | [world-16](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22binary%20to%20decimal%22,%22decimal%20to%20binary%22,%22hex%20to%20decimal%22,%22binary%20to%20text%22) |
| 57 | "hex to decimal" | 1.1 | — | Baixa | [world-16](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22binary%20to%20decimal%22,%22decimal%20to%20binary%22,%22hex%20to%20decimal%22,%22binary%20to%20text%22) |
| 58 | "binary to text" | 1.1 | — | Baixa | [world-16](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22binary%20to%20decimal%22,%22decimal%20to%20binary%22,%22hex%20to%20decimal%22,%22binary%20to%20text%22) |
| 59 | "csv to excel" | 1.1 | — | Baixa | [world-19](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22markdown%20to%20pdf%22,%22html%20to%20markdown%22,%22csv%20to%20excel%22,%22xml%20to%20csv%22) |
| 60 | "dwg to pdf" | 1.1 | — | Baixa | [world-20](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ttf%20to%20woff2%22,%22woff%20to%20ttf%22,%22dwg%20to%20pdf%22,%22stl%20to%20obj%22) |
| 61 | "base64 encode" | 0.9 | — | Baixa | [world-15](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22base64%20decode%22,%22base64%20encode%22,%22json%20to%20csv%22,%22json%20formatter%22) |
| 62 | "markdown to pdf" | 0.8 | — | Baixa | [world-19](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22markdown%20to%20pdf%22,%22html%20to%20markdown%22,%22csv%20to%20excel%22,%22xml%20to%20csv%22) |
| 63 | "pdf to markdown" | 0.7 | — | Baixa | [world-13](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22epub%20to%20pdf%22,%22pdf%20to%20epub%22,%22epub%20to%20mobi%22,%22pdf%20to%20markdown%22) |
| 64 | "gif to mp4" | 0.4 | — | Baixa | [world-9](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20gif%22,%22gif%20to%20mp4%22,%22video%20compressor%22,%22audio%20to%20text%22) |
| 65 | "url encode" | 0.2 | — | Baixa | [world-17](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22image%20to%20base64%22,%22base64%20to%20image%22,%22url%20encode%22,%22url%20decode%22) |
| 66 | "rar to zip" | 0.2 | 0.3 | Baixa | [world-14](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22rar%20to%20zip%22,%227z%20to%20zip%22,%22extract%20zip%22,%22zip%20files%22) |
| 67 | "jpg to svg" | 0.1 | — | Baixa | [world-6](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22svg%20to%20png%22,%22png%20to%20svg%22,%22jpg%20to%20svg%22,%22png%20to%20ico%22) |
| 68 | "extract zip" | 0.1 | — | Baixa | [world-14](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22rar%20to%20zip%22,%227z%20to%20zip%22,%22extract%20zip%22,%22zip%20files%22) |
| 69 | "json to csv" | 0.0 | < resolução | Baixa | [world-15](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22base64%20decode%22,%22base64%20encode%22,%22json%20to%20csv%22,%22json%20formatter%22) |
| 70 | "url decode" | 0.0 | — | Baixa | [world-17](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22image%20to%20base64%22,%22base64%20to%20image%22,%22url%20encode%22,%22url%20decode%22) |
| 71 | "tiff to jpg" | < resolução | — | Inconclusivo | [world-7](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22tiff%20to%20jpg%22,%22bmp%20to%20jpg%22,%22compress%20jpg%22,%22compress%20png%22) |
| 72 | "bmp to jpg" | < resolução | — | Inconclusivo | [world-7](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22tiff%20to%20jpg%22,%22bmp%20to%20jpg%22,%22compress%20jpg%22,%22compress%20png%22) |
| 73 | "flac to mp3" | < resolução | — | Inconclusivo | [world-10](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22m4a%20to%20mp3%22,%22wav%20to%20mp3%22,%22mp3%20to%20wav%22,%22flac%20to%20mp3%22) |
| 74 | "opus to mp3" | < resolução | — | Inconclusivo | [world-11](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22opus%20to%20mp3%22,%22ogg%20to%20mp3%22,%22aac%20to%20mp3%22,%22video%20to%20text%22) |
| 75 | "aac to mp3" | < resolução | — | Inconclusivo | [world-11](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22opus%20to%20mp3%22,%22ogg%20to%20mp3%22,%22aac%20to%20mp3%22,%22video%20to%20text%22) |
| 76 | "epub to mobi" | < resolução | — | Inconclusivo | [world-13](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22epub%20to%20pdf%22,%22pdf%20to%20epub%22,%22epub%20to%20mobi%22,%22pdf%20to%20markdown%22) |
| 77 | "7z to zip" | < resolução | — | Inconclusivo | [world-14](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22rar%20to%20zip%22,%227z%20to%20zip%22,%22extract%20zip%22,%22zip%20files%22) |
| 78 | "image to base64" | < resolução | — | Inconclusivo | [world-17](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22image%20to%20base64%22,%22base64%20to%20image%22,%22url%20encode%22,%22url%20decode%22) |
| 79 | "base64 to image" | < resolução | — | Inconclusivo | [world-17](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22image%20to%20base64%22,%22base64%20to%20image%22,%22url%20encode%22,%22url%20decode%22) |
| 80 | "xml to json" | < resolução | — | Inconclusivo | [world-18](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22xml%20to%20json%22,%22csv%20to%20json%22,%22json%20to%20yaml%22,%22yaml%20to%20json%22) |
| 81 | "csv to json" | < resolução | — | Inconclusivo | [world-18](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22xml%20to%20json%22,%22csv%20to%20json%22,%22json%20to%20yaml%22,%22yaml%20to%20json%22) |
| 82 | "json to yaml" | < resolução | — | Inconclusivo | [world-18](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22xml%20to%20json%22,%22csv%20to%20json%22,%22json%20to%20yaml%22,%22yaml%20to%20json%22) |
| 83 | "yaml to json" | < resolução | — | Inconclusivo | [world-18](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22xml%20to%20json%22,%22csv%20to%20json%22,%22json%20to%20yaml%22,%22yaml%20to%20json%22) |
| 84 | "html to markdown" | < resolução | — | Inconclusivo | [world-19](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22markdown%20to%20pdf%22,%22html%20to%20markdown%22,%22csv%20to%20excel%22,%22xml%20to%20csv%22) |
| 85 | "xml to csv" | < resolução | — | Inconclusivo | [world-19](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22markdown%20to%20pdf%22,%22html%20to%20markdown%22,%22csv%20to%20excel%22,%22xml%20to%20csv%22) |
| 86 | "ttf to woff2" | < resolução | — | Inconclusivo | [world-20](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ttf%20to%20woff2%22,%22woff%20to%20ttf%22,%22dwg%20to%20pdf%22,%22stl%20to%20obj%22) |
| 87 | "woff to ttf" | < resolução | — | Inconclusivo | [world-20](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ttf%20to%20woff2%22,%22woff%20to%20ttf%22,%22dwg%20to%20pdf%22,%22stl%20to%20obj%22) |
| 88 | "stl to obj" | < resolução | — | Inconclusivo | [world-20](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ttf%20to%20woff2%22,%22woff%20to%20ttf%22,%22dwg%20to%20pdf%22,%22stl%20to%20obj%22) |
| 89 | "extract pdf pages" | < resolução | — | Inconclusivo | [world-21](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ocr%20pdf%22,%22unlock%20pdf%22,%22rotate%20pdf%22,%22extract%20pdf%20pages%22) |

## Todas as comparações coletadas

- [world-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20jpg%22,%22pdf%20to%20excel%22): "jpg to pdf" = 100.0; "pdf to word" = 149.9; "word to pdf" = 77.8; "pdf to jpg" = 67.7; "pdf to excel" = 25.7. 52 pontos completos.
- [world-2](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22compress%20pdf%22,%22merge%20pdf%22,%22split%20pdf%22,%22image%20to%20text%22): "jpg to pdf" = 100.0; "compress pdf" = 38.9; "merge pdf" = 45.9; "split pdf" = 14.2; "image to text" = 7.0. 52 pontos completos.
- [world-3](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22remove%20background%22,%22image%20compressor%22,%22resize%20image%22,%22crop%20image%22): "jpg to pdf" = 100.0; "remove background" = 67.1; "image compressor" = 5.5; "resize image" = 11.1; "crop image" = 3.1. 52 pontos completos.
- [world-4](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22): "jpg to pdf" = 100.0; "png to jpg" = 6.4; "jpg to png" = 3.6; "heic to jpg" = 11.9; "webp to jpg" = 5.9. 52 pontos completos.
- [world-5](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22webp%20to%20png%22,%22heic%20to%20png%22,%22avif%20to%20jpg%22,%22jfif%20to%20jpg%22): "jpg to pdf" = 100.0; "webp to png" = 4.8; "heic to png" = 1.2; "avif to jpg" = 2.5; "jfif to jpg" = 1.9. 52 pontos completos.
- [world-6](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22svg%20to%20png%22,%22png%20to%20svg%22,%22jpg%20to%20svg%22,%22png%20to%20ico%22): "jpg to pdf" = 100.0; "svg to png" = 1.9; "png to svg" = 2.4; "jpg to svg" = 0.1; "png to ico" = 1.2. 52 pontos completos.
- [world-7](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22tiff%20to%20jpg%22,%22bmp%20to%20jpg%22,%22compress%20jpg%22,%22compress%20png%22): "jpg to pdf" = 100.0; "tiff to jpg" = 0.0; "bmp to jpg" = 0.0; "compress jpg" = 3.9; "compress png" = 1.2. 52 pontos completos.
- [world-8](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22mov%20to%20mp4%22,%22webm%20to%20mp4%22,%22mkv%20to%20mp4%22): "jpg to pdf" = 100.0; "mp4 to mp3" = 10.9; "mov to mp4" = 2.8; "webm to mp4" = 1.2; "mkv to mp4" = 1.2. 52 pontos completos.
- [world-9](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22mp4%20to%20gif%22,%22gif%20to%20mp4%22,%22video%20compressor%22,%22audio%20to%20text%22): "jpg to pdf" = 100.0; "mp4 to gif" = 2.5; "gif to mp4" = 0.4; "video compressor" = 4.9; "audio to text" = 4.8. 52 pontos completos.
- [world-10](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22m4a%20to%20mp3%22,%22wav%20to%20mp3%22,%22mp3%20to%20wav%22,%22flac%20to%20mp3%22): "jpg to pdf" = 100.0; "m4a to mp3" = 2.2; "wav to mp3" = 1.5; "mp3 to wav" = 1.3; "flac to mp3" = 0.0. 52 pontos completos.
- [world-11](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22opus%20to%20mp3%22,%22ogg%20to%20mp3%22,%22aac%20to%20mp3%22,%22video%20to%20text%22): "jpg to pdf" = 100.0; "opus to mp3" = 0.0; "ogg to mp3" = 1.2; "aac to mp3" = 0.0; "video to text" = 2.6. 52 pontos completos.
- [world-12](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22excel%20to%20pdf%22,%22ppt%20to%20pdf%22,%22html%20to%20pdf%22,%22pdf%20to%20ppt%22): "jpg to pdf" = 100.0; "excel to pdf" = 14.7; "ppt to pdf" = 4.8; "html to pdf" = 2.8; "pdf to ppt" = 5.3. 52 pontos completos.
- [world-13](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22epub%20to%20pdf%22,%22pdf%20to%20epub%22,%22epub%20to%20mobi%22,%22pdf%20to%20markdown%22): "jpg to pdf" = 100.0; "epub to pdf" = 2.4; "pdf to epub" = 1.2; "epub to mobi" = 0.0; "pdf to markdown" = 0.7. 52 pontos completos.
- [world-14](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22rar%20to%20zip%22,%227z%20to%20zip%22,%22extract%20zip%22,%22zip%20files%22): "jpg to pdf" = 100.0; "rar to zip" = 0.2; "7z to zip" = 0.0; "extract zip" = 0.1; "zip files" = 1.8. 52 pontos completos.
- [world-15](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22base64%20decode%22,%22base64%20encode%22,%22json%20to%20csv%22,%22json%20formatter%22): "jpg to pdf" = 100.0; "base64 decode" = 2.0; "base64 encode" = 0.9; "json to csv" = 0.0; "json formatter" = 3.6. 52 pontos completos.
- [world-16](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22binary%20to%20decimal%22,%22decimal%20to%20binary%22,%22hex%20to%20decimal%22,%22binary%20to%20text%22): "jpg to pdf" = 100.0; "binary to decimal" = 1.2; "decimal to binary" = 1.2; "hex to decimal" = 1.1; "binary to text" = 1.1. 52 pontos completos.
- [world-17](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22image%20to%20base64%22,%22base64%20to%20image%22,%22url%20encode%22,%22url%20decode%22): "jpg to pdf" = 100.0; "image to base64" = 0.0; "base64 to image" = 0.0; "url encode" = 0.2; "url decode" = 0.0. 52 pontos completos.
- [world-18](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22xml%20to%20json%22,%22csv%20to%20json%22,%22json%20to%20yaml%22,%22yaml%20to%20json%22): "jpg to pdf" = 100.0; "xml to json" = 0.0; "csv to json" = 0.0; "json to yaml" = 0.0; "yaml to json" = 0.0. 52 pontos completos.
- [world-19](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22markdown%20to%20pdf%22,%22html%20to%20markdown%22,%22csv%20to%20excel%22,%22xml%20to%20csv%22): "jpg to pdf" = 100.0; "markdown to pdf" = 0.8; "html to markdown" = 0.0; "csv to excel" = 1.1; "xml to csv" = 0.0. 52 pontos completos.
- [world-20](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ttf%20to%20woff2%22,%22woff%20to%20ttf%22,%22dwg%20to%20pdf%22,%22stl%20to%20obj%22): "jpg to pdf" = 100.0; "ttf to woff2" = 0.0; "woff to ttf" = 0.0; "dwg to pdf" = 1.1; "stl to obj" = 0.0. 52 pontos completos.
- [world-21](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22ocr%20pdf%22,%22unlock%20pdf%22,%22rotate%20pdf%22,%22extract%20pdf%20pages%22): "jpg to pdf" = 100.0; "ocr pdf" = 1.9; "unlock pdf" = 3.9; "rotate pdf" = 1.3; "extract pdf pages" = 0.0. 52 pontos completos.
- [world-22](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22youtube%20to%20mp3%22,%22text%20to%20speech%22,%22speech%20to%20text%22,%22pdf%20to%20text%22): "jpg to pdf" = 100.0; "youtube to mp3" = 65.7; "text to speech" = 26.4; "speech to text" = 7.2; "pdf to text" = 1.4. 52 pontos completos.
- [br-1](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=BR&q=%22jpg%20para%20pdf%22,%22pdf%20para%20word%22,%22word%20para%20pdf%22,%22pdf%20para%20jpg%22,%22pdf%20para%20excel%22): "jpg para pdf" = 100.0; "pdf para word" = 305.8; "word para pdf" = 175.0; "pdf para jpg" = 59.5; "pdf para excel" = 31.0. 52 pontos completos.
- [br-2](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=BR&q=%22jpg%20para%20pdf%22,%22comprimir%20pdf%22,%22juntar%20pdf%22,%22dividir%20pdf%22,%22imagem%20para%20texto%22): "jpg para pdf" = 100.0; "comprimir pdf" = 125.6; "juntar pdf" = 461.1; "dividir pdf" = 52.7; "imagem para texto" = 3.6. 52 pontos completos.
- [br-3](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=BR&q=%22jpg%20para%20pdf%22,%22remover%20fundo%22,%22comprimir%20imagem%22,%22redimensionar%20imagem%22,%22cortar%20imagem%22): "jpg para pdf" = 100.0; "remover fundo" = 288.2; "comprimir imagem" = 15.1; "redimensionar imagem" = 18.4; "cortar imagem" = 10.5. 52 pontos completos.
- [br-4](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=BR&q=%22jpg%20para%20pdf%22,%22heic%20para%20jpg%22,%22png%20para%20jpg%22,%22webp%20para%20jpg%22,%22svg%20para%20png%22): "jpg para pdf" = 100.0; "heic para jpg" = 16.6; "png para jpg" = 7.2; "webp para jpg" = 6.6; "svg para png" = 0.5. 52 pontos completos.
- [br-5](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=BR&q=%22jpg%20para%20pdf%22,%22mp4%20para%20mp3%22,%22mov%20para%20mp4%22,%22audio%20para%20texto%22,%22youtube%20para%20mp3%22): "jpg para pdf" = 100.0; "mp4 para mp3" = 21.0; "mov para mp4" = 8.2; "audio para texto" = 7.5; "youtube para mp3" = 47.4. 52 pontos completos.
- [br-6](https://trends.google.com/trends/explore?date=2025-11-02%202026-11-01&geo=BR&q=%22jpg%20para%20pdf%22,%22rar%20para%20zip%22,%22json%20para%20csv%22,%22base64%20decode%22,%22texto%20para%20fala%22): "jpg para pdf" = 100.0; "rar para zip" = 0.3; "json para csv" = 0.0; "base64 decode" = 3.5; "texto para fala" = 0.3. 52 pontos completos.
- [history](https://trends.google.com/trends/explore?date=2021-10-31%202026-11-01&geo=&q=%22jpg%20to%20pdf%22,%22compress%20pdf%22,%22merge%20pdf%22,%22image%20to%20text%22,%22heic%20to%20jpg%22): "jpg to pdf" = 100.0; "compress pdf" = 34.6; "merge pdf" = 40.6; "image to text" = 9.0; "heic to jpg" = 11.3. 261 pontos completos.
