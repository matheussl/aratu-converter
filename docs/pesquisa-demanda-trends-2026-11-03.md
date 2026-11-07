# Aratu Converter — pesquisa de demanda no Google Trends

Consulta realizada em 03/11/2026. Fonte de dados: Google Trends. Marca confirmada pelo usuário nesta data. Domínio não registrado nesta tarefa. MVP não aprovado.

## Conclusão

Nas frases específicas testadas, PDF/Office e imagem→PDF concentram a maior procura relativa. PDF→Word lidera o conjunto central tanto no mundo quanto no Brasil. Dentro de imagens, HEIC→JPG lidera os cinco pares pesquisados. Mídia exige separar conversão de arquivo de busca por download do YouTube. Base64 e bases numéricas são nichos menores na comparação central, com potencial complementar que ainda precisa de validação.

Isso não prova que toda a categoria PDF seja maior que todas as outras categorias somadas. São comparações de conjuntos explícitos de palavras, não o universo de pesquisas, receita ou dificuldade de ranqueamento.

## Método e limites

- 20 comparações de cinco frases, Brasil e mundo; Pesquisa na Web; todas as categorias. Três comparações históricas de cinco anos; demais de 12 meses.
- Semanas de 02/11/2025 a 01/11/2026 nas séries de 12 meses, e de 31/10/2021 a 01/11/2026 nas históricas. A última semana pode estar incompleta.
- As tabelas usam a média inteira exibida na interface, na escala de cada gráfico. Não comparar diretamente números de gráficos diferentes: 70 em Base64 não é maior que 56 em JPG→PDF.
- Para evolução temporal, médias recalculadas de 52 semanas completas mais recentes versus as 52 anteriores, na mesma série de cinco anos, descartando a última semana.
- Frases entre aspas preservam a direção. A triagem sem aspas produziu resultados iguais para direções opostas; foi descartada das conclusões finais.
- Google Trends usa amostras e normalização, não pesquisas mensais. Zero pode significar insuficiência de dados ou arredondamento; não ausência de demanda.
- Mundial aqui significa buscas dessas frases em inglês em todos os países, não todas as línguas do mundo. Não somar variantes ou famílias sobrepostas.
- No Brasil foram testadas formulações em português e alguns termos técnicos em inglês. Não foram cobertas todas as grafias, acentos ou sinônimos.
- Cotações do AdSense, volume absoluto, tráfego dos concorrentes e probabilidade de ranquear não foram medidos.
- A consulta programática retornou HTTP 429. A coleta bem-sucedida foi pela interface do Trends. Os dados não são estimativas de uma ferramenta SEO terceirizada.

## Comparação central de intenção específica

Cada coluna abaixo vem de um único gráfico por mercado; comparações entre linhas dentro da coluna são válidas.

| Conversão representada | Frase mundial | Mundo | Frase Brasil | Brasil |
| --- | --- | ---: | --- | ---: |
| Documento editável | "pdf to word" | 84 | "pdf para word" | 79 |
| Imagem→documento | "jpg to pdf" | 56 | "jpg para pdf" | 26 |
| Extração de áudio | "mp4 to mp3" | 6 | "mp4 para mp3" | 5 |
| Troca de imagem | "png to jpg" | 4 | "png para jpg" | 2 |
| Decodificação | "base64 decode" | 1 | "base64 decode" | 1 |

Os índices entre Brasil e mundo não medem diferença de volume absoluto. A coluna Brasil usa sua própria normalização.

## Comparação por família

### Validação direta entre líderes

Uma comparação mundial adicional, na mesma escala, reuniu os líderes: "pdf to word" 84, "jpg to pdf" 56, "youtube to mp3" 37, "heic to jpg" 7 e "mp4 to mp3" 6. Isso confirma a liderança de PDF→Word neste conjunto sem depender de reescalonar gráficos separados. [Abrir comparação](https://trends.google.com/trends/explore?date=today%2012-m&q=%22pdf%20to%20word%22,%22jpg%20to%20pdf%22,%22heic%20to%20jpg%22,%22mp4%20to%20mp3%22,%22youtube%20to%20mp3%22&hl=en).

### Documentos e PDF

Mundo: PDF→Word 84; JPG→PDF 56; Word→PDF 44; PDF→JPG 38; PDF→Excel 14.
Brasil: PDF→Word 79; Word→PDF 45; JPG→PDF 26; PDF→JPG 15; PDF→Excel 8.

Há uma oportunidade grande em documentos, mas as duas direções PDF/Word atendem tarefas diferentes. Uma ferramenta de imagem→PDF não atende a necessidade de editar um PDF em Word.

Na rodada Office mundial com PDF→Word como referência: Excel→PDF 8; PPT→PDF 3; EPUB→PDF 1; CSV→Excel 0. Não concluir que CSV→Excel não tenha mercado: ficou abaixo da resolução desta escala.

### Imagens

Mundo: HEIC→JPG 44; PNG→JPG 23; WebP→JPG 22; WebP→PNG 17; JPG→PNG 14.
Brasil: HEIC→JPG 76; PNG→JPG 33; WebP→JPG 31; WebP→PNG 26; JPG→PNG 22.

HEIC→JPG merece uma prova técnica própria. JPG, PNG e WebP compõem uma família complementar; suporte HEIC, dispositivos e consumo de memória não foram testados.

### Áudio e vídeo

No gráfico mundial de arquivo/mídia: MP4→MP3 81; MP4→GIF 21; M4A→MP3 17; WAV→MP3 12; MP3→WAV 12.
No gráfico mundial que inclui YouTube: YouTube→MP3 81; MP4→MP3 14; MOV→MP4 4; MKV→MP4 2; WebM→MP4 1.
Brasil: YouTube→MP3 72; MP4→MP3 32; M4A→MP3 6; WAV→MP3 5; MP4→GIF 1.

Não confundir o 81 de MP4→MP3 no primeiro gráfico com o 81 de YouTube→MP3 no segundo: escalas diferentes. YouTube→MP3 mede outra intenção; uma conversão local de upload não a atende automaticamente. Esse recurso não integra um MVP aprovado.

### Dados e codificação

Mundo, grupo 1: Base64 decode 70; binário→decimal 34; Base64 encode 25; JSON→CSV 11; ASCII→texto 2.
Mundo, grupo 2 com mesma referência: Base64 decode 70; decimal→binário 29; hexadecimal→decimal 28; CSV→JSON 6; JSON→XML 4.
Brasil, formulações testadas: Base64 decode 61; binario→decimal sem acento 11; Base64 encode 6; ASCII→texto 1; JSON→CSV em português 0.

A comparação adicional com "binário para decimal" mostrou índice praticamente nulo diante de PDF, diferente da variante sem acento em outro grupo. Isso reforça a sensibilidade à formulação, escala e arredondamento; não usar para concluir que brasileiros não fazem essas buscas.

Como complemento de produto, Base64 e bases numéricas merecem mais atenção que uma coleção indiscriminada de ferramentas técnicas. Não há evidência de receita maior por ser audiência técnica.

## Termos genéricos e efeito do idioma

Mundo: "pdf converter" 84; "video converter" 13; "audio converter" 9; "image converter" 8; "file converter" 6.
Brasil: "conversor de video" 66; "conversor pdf" 46; "conversor de audio" 25; "conversor de imagem" 19; "conversor de arquivos" 1.

O resultado brasileiro genérico difere das frases específicas. As expressões não são um agrupamento completo de cada família e não incluem todas as variantes. Não usar esses cinco rótulos para decretar tamanho total dos mercados.

Teste de idioma no Brasil: "pdf para word" 80 versus "pdf to word" 14. Para HEIC→JPG: português 4 e inglês 4 nessa escala dominada por PDF. A medição mais precisa dentro de imagens é a do grupo próprio.

Recomendação: páginas próprias em português e inglês, redigidas para a tarefa, sem traduzir mecanicamente as palavras-chave e sem duplicar páginas só por sinônimos.

## Evolução em cinco anos

A ordem da comparação central permanece nas médias de cinco anos: mundo 79/46/7/3/1; Brasil 72/24/5/2/1, na ordem PDF→Word, JPG→PDF, MP4→MP3, PNG→JPG, Base64 decode.

Variação recente de interesse relativo (não crescimento de pesquisas absolutas), calculada no mesmo gráfico:

| Série | Frase representada | 52 semanas anteriores | 52 semanas recentes | Variação |
| --- | --- | ---: | ---: | ---: |
| Mundo: comparação central | PDF→Word | 89.08 | 76.77 | -14% |
| Mundo: comparação central | JPG→PDF | 51.60 | 51.19 | -1% |
| Mundo: comparação central | MP4→MP3 | 6.50 | 5.65 | -13% |
| Mundo: comparação central | PNG→JPG | 3.13 | 3.19 | 2% |
| Mundo: comparação central | Base64 decode | 1.50 | 1.02 | -32% |
| Brasil: comparação central | PDF→Word | 83.27 | 74.08 | -11% |
| Brasil: comparação central | JPG→PDF | 28.33 | 24.23 | -14% |
| Brasil: comparação central | MP4→MP3 | 5.94 | 5.08 | -15% |
| Brasil: comparação central | PNG→JPG | 1.85 | 1.75 | -5% |
| Brasil: comparação central | Base64 decode | 1.11 | 0.96 | -14% |
| Mundo: imagens | PNG→JPG | 23.31 | 23.52 | 1% |
| Mundo: imagens | JPG→PNG | 16.89 | 13.63 | -19% |
| Mundo: imagens | HEIC→JPG | 39.40 | 44.13 | 12% |
| Mundo: imagens | WebP→JPG | 35.12 | 22.21 | -37% |
| Mundo: imagens | WebP→PNG | 27.27 | 17.42 | -36% |

HEIC→JPG cresceu aproximadamente 12% em interesse relativo na comparação anual; WebP→JPG e WebP→PNG recuaram aproximadamente 37% e 36%. PDF→Word continua muito forte, mesmo com queda relativa recente. Não inferir causas, projeção de crescimento ou desaparecimento de demanda. Feriados, calendário, amostragem e mudanças no total de buscas podem afetar as séries.

## Recomendação de produto — ainda sujeita a decisão

| Família | Evidência de procura | Avaliação de execução, a validar | Encaminhamento sugerido |
| --- | --- | --- | --- |
| JPG/PNG→PDF e PDF→JPG/PNG | Demanda expressiva nos pares medidos | Não requer reconstruir documento editável; testar limites de páginas, qualidade e memória | Boa base para primeira entrega |
| JPG/PNG/WebP | Menor que PDF na comparação central | APIs de imagem do navegador podem ajudar; testar transparência e perdas | Complemento natural |
| HEIC→JPG | Líder entre os pares de imagem estudados | Decodificação e desempenho exigem prova técnica específica | Investigar cedo |
| PDF→Word / Word→PDF | Maior procura entre os pares centrais | Fidelidade de layout, fontes, tabelas e OCR podem elevar a complexidade | Pesquisa/prova de viabilidade prioritária; não prometer conversão perfeita |
| MP4→MP3 e formatos de áudio | Procura menor que documentos no conjunto central | Codec, tamanho, CPU e memória podem pesar em celular | Segunda frente, com limites claros |
| Base64 / binário / hexadecimal | Nicho menor, mais relevante que outros termos de dados testados | Processamento de texto pode ser simples; Unicode e entradas inválidas exigem cuidado | Complemento pequeno e útil |
| YouTube→MP3 | Procura grande no grupo de mídia | Intenção e operação diferentes de conversão local | Decisão separada; não incluir automaticamente |

As avaliações de execução são recomendações técnicas, não benchmarks realizados. Fontes técnicas consultadas: [Canvas/toBlob](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob), [PDF.js](https://mozilla.github.io/pdf.js/examples/) e [ffmpeg.wasm FAQ](https://ffmpegwasm.netlify.app/docs/faq/). PDF.js demonstra renderização em canvas, não uma solução completa de PDF→Word. ffmpeg.wasm documenta limitações de desempenho e recursos.

A decisão sugerida é combinar um núcleo de PDF/imagens com prova técnica de HEIC e PDF/Word. A ordem final depende de concorrência orgânica, resultado dos protótipos e custo por tarefa — questões que o Trends não resolve.

## Evidência, arquivos e próximos estudos

- [Resumo estruturado das 20 comparações](trends-comparacoes-2026-11-03.json): termos, índices, regiões, períodos e links.
- Série original exportada do Google Trends: trends-documentos-mundo-2026-11-03.csv.
- Próximos estudos: sinônimos/idiomas adicionais; análise de resultados de busca por página; teste técnico; volume absoluto quando houver fonte apropriada. Não há estimativa de RPM ou retorno financeiro.
- Consulta de nome/domínio e configuração de contas são frentes separadas. Esta pesquisa não confirma compra do domínio.

## Fontes de método

- [Normalização e amostragem](https://support.google.com/trends/answer/4365533?hl=en).
- [Frases exatas e variantes](https://support.google.com/trends/answer/4359582?hl=en).
- [Exportação e atribuição](https://support.google.com/trends/answer/4365538?hl=en).

## Apêndice: todas as comparações

### global-cross

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22pdf%20to%20word%22,%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22png%20to%20jpg%22,%22base64%20decode%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf to word" | 84 |
| "jpg to pdf" | 56 |
| "mp4 to mp3" | 6 |
| "png to jpg" | 4 |
| "base64 decode" | 1 |

### global-docs

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22pdf%20to%20word%22,%22word%20to%20pdf%22,%22pdf%20to%20excel%22,%22pdf%20to%20jpg%22,%22jpg%20to%20pdf%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf to word" | 84 |
| "word to pdf" | 44 |
| "pdf to excel" | 14 |
| "pdf to jpg" | 38 |
| "jpg to pdf" | 56 |

### global-images

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22,%22webp%20to%20png%22).

| Frase exata | Média exibida |
| --- | ---: |
| "png to jpg" | 23 |
| "jpg to png" | 14 |
| "heic to jpg" | 44 |
| "webp to jpg" | 22 |
| "webp to png" | 17 |

### global-media

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22mp4%20to%20mp3%22,%22wav%20to%20mp3%22,%22mp3%20to%20wav%22,%22m4a%20to%20mp3%22,%22mp4%20to%20gif%22).

| Frase exata | Média exibida |
| --- | ---: |
| "mp4 to mp3" | 81 |
| "wav to mp3" | 12 |
| "mp3 to wav" | 12 |
| "m4a to mp3" | 17 |
| "mp4 to gif" | 21 |

### global-video-youtube

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22mp4%20to%20mp3%22,%22mov%20to%20mp4%22,%22webm%20to%20mp4%22,%22mkv%20to%20mp4%22,%22youtube%20to%20mp3%22).

| Frase exata | Média exibida |
| --- | ---: |
| "mp4 to mp3" | 14 |
| "mov to mp4" | 4 |
| "webm to mp4" | 1 |
| "mkv to mp4" | 2 |
| "youtube to mp3" | 81 |

### global-data

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22base64%20decode%22,%22base64%20encode%22,%22json%20to%20csv%22,%22binary%20to%20decimal%22,%22ascii%20to%20text%22).

| Frase exata | Média exibida |
| --- | ---: |
| "base64 decode" | 70 |
| "base64 encode" | 25 |
| "json to csv" | 11 |
| "binary to decimal" | 34 |
| "ascii to text" | 2 |

### br-cross

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22pdf%20para%20word%22,%22jpg%20para%20pdf%22,%22mp4%20para%20mp3%22,%22png%20para%20jpg%22,%22base64%20decode%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf para word" | 79 |
| "jpg para pdf" | 26 |
| "mp4 para mp3" | 5 |
| "png para jpg" | 2 |
| "base64 decode" | 1 |

### br-docs

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22pdf%20para%20word%22,%22word%20para%20pdf%22,%22pdf%20para%20excel%22,%22pdf%20para%20jpg%22,%22jpg%20para%20pdf%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf para word" | 79 |
| "word para pdf" | 45 |
| "pdf para excel" | 8 |
| "pdf para jpg" | 15 |
| "jpg para pdf" | 26 |

### br-images

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22png%20para%20jpg%22,%22jpg%20para%20png%22,%22heic%20para%20jpg%22,%22webp%20para%20jpg%22,%22webp%20para%20png%22).

| Frase exata | Média exibida |
| --- | ---: |
| "png para jpg" | 33 |
| "jpg para png" | 22 |
| "heic para jpg" | 76 |
| "webp para jpg" | 31 |
| "webp para png" | 26 |

### br-media

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22mp4%20para%20mp3%22,%22wav%20para%20mp3%22,%22m4a%20para%20mp3%22,%22mp4%20para%20gif%22,%22youtube%20para%20mp3%22).

| Frase exata | Média exibida |
| --- | ---: |
| "mp4 para mp3" | 32 |
| "wav para mp3" | 5 |
| "m4a para mp3" | 6 |
| "mp4 para gif" | 1 |
| "youtube para mp3" | 72 |

### br-data

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22base64%20decode%22,%22base64%20encode%22,%22json%20para%20csv%22,%22binario%20para%20decimal%22,%22ascii%20para%20texto%22).

| Frase exata | Média exibida |
| --- | ---: |
| "base64 decode" | 61 |
| "base64 encode" | 6 |
| "json para csv" | 0 |
| "binario para decimal" | 11 |
| "ascii para texto" | 1 |

### global-5y

Mundo; 5 anos; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%205-y&q=%22pdf%20to%20word%22,%22jpg%20to%20pdf%22,%22mp4%20to%20mp3%22,%22png%20to%20jpg%22,%22base64%20decode%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf to word" | 79 |
| "jpg to pdf" | 46 |
| "mp4 to mp3" | 7 |
| "png to jpg" | 3 |
| "base64 decode" | 1 |

### br-5y

Brasil; 5 anos; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%205-y&geo=BR&q=%22pdf%20para%20word%22,%22jpg%20para%20pdf%22,%22mp4%20para%20mp3%22,%22png%20para%20jpg%22,%22base64%20decode%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf para word" | 72 |
| "jpg para pdf" | 24 |
| "mp4 para mp3" | 5 |
| "png para jpg" | 2 |
| "base64 decode" | 1 |

### global-category

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22pdf%20converter%22,%22image%20converter%22,%22audio%20converter%22,%22video%20converter%22,%22file%20converter%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf converter" | 84 |
| "image converter" | 8 |
| "audio converter" | 9 |
| "video converter" | 13 |
| "file converter" | 6 |

### br-category

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22conversor%20pdf%22,%22conversor%20de%20imagem%22,%22conversor%20de%20audio%22,%22conversor%20de%20video%22,%22conversor%20de%20arquivos%22).

| Frase exata | Média exibida |
| --- | ---: |
| "conversor pdf" | 46 |
| "conversor de imagem" | 19 |
| "conversor de audio" | 25 |
| "conversor de video" | 66 |
| "conversor de arquivos" | 1 |

### global-data-more

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22base64%20decode%22,%22hex%20to%20decimal%22,%22decimal%20to%20binary%22,%22json%20to%20xml%22,%22csv%20to%20json%22).

| Frase exata | Média exibida |
| --- | ---: |
| "base64 decode" | 70 |
| "hex to decimal" | 28 |
| "decimal to binary" | 29 |
| "json to xml" | 4 |
| "csv to json" | 6 |

### global-office

Mundo; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&q=%22pdf%20to%20word%22,%22excel%20to%20pdf%22,%22ppt%20to%20pdf%22,%22csv%20to%20excel%22,%22epub%20to%20pdf%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf to word" | 84 |
| "excel to pdf" | 8 |
| "ppt to pdf" | 3 |
| "csv to excel" | 0 |
| "epub to pdf" | 1 |

### br-language

Brasil; 12 meses; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%2012-m&geo=BR&q=%22pdf%20para%20word%22,%22pdf%20to%20word%22,%22heic%20para%20jpg%22,%22heic%20to%20jpg%22,%22bin%C3%A1rio%20para%20decimal%22).

| Frase exata | Média exibida |
| --- | ---: |
| "pdf para word" | 80 |
| "pdf to word" | 14 |
| "heic para jpg" | 4 |
| "heic to jpg" | 4 |
| "binário para decimal" | 0 |

### global-images-5y

Mundo; 5 anos; [abrir gráfico](https://trends.google.com/trends/explore?hl=en&date=today%205-y&q=%22png%20to%20jpg%22,%22jpg%20to%20png%22,%22heic%20to%20jpg%22,%22webp%20to%20jpg%22,%22webp%20to%20png%22).

| Frase exata | Média exibida |
| --- | ---: |
| "png to jpg" | 21 |
| "jpg to png" | 15 |
| "heic to jpg" | 37 |
| "webp to jpg" | 29 |
| "webp to png" | 21 |
