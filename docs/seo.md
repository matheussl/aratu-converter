# SEO do Aratu Converter

Hipótese em 08/11/2026. Páginas com tarefas claras e instruções úteis devem atrair consultas mais relevantes depois que o Google puder indexar a produção. A inspeção pública mostrou `noindex` na home e HTML da home nas URLs de robots e sitemap.

| Intenção | Página em português | Sinal a acompanhar |
| --- | --- | --- |
| Comparar ferramentas de PDF ou encontrar um conversor | `/` | Impressões e cliques para buscas genéricas |
| Converter PDF para Word editável | `/pt/pdf-para-word/` | Impressões, CTR e cliques para consultas de PDF e Word |
| Reduzir o tamanho de um PDF | `/pt/reduzir-tamanho-pdf/` | Impressões e cliques para consultas de redução de tamanho |

A página de redução é um guia. Os termos de compactação por limite de tamanho são hipóteses de pesquisa. Consulte o [ranking de demanda](concorrentes-ranking-2026-11-03.md) para o recorte medido.

No Cloudflare Pages, a branch `main` gera URLs canônicas, alternativas por idioma e sitemap. Outras branches mantêm `noindex` e ficam fora do sitemap. Builds fora do Pages podem simular produção com `PUBLIC_DEPLOY_ENV=production`. Defina `PUBLIC_SITE_URL` quando houver outro endereço canônico confirmado.

Após publicar, inspecionar as três URLs de produção e enviar `/sitemap.xml` no Search Console. Usar os primeiros 28 dias após indexação como referência e comparar com os 28 seguintes, observando país, consulta, página, impressões, cliques, CTR e posição. A primeira condição de avanço é confirmar que o Google reconheceu a URL canônica e começou a registrar impressões para consultas relacionadas à tarefa.


## Revisão de publicação — 11/11/2026

Produção auditada antes desta correção: commit 82f32e6; homologação: f8c1fd8. PDF para Word e os ajustes SEO locais ainda não estavam em produção. URLs inexistentes, robots.txt e ads.txt retornavam a home com 200; canonicals ausentes. A tag GA4 carregava, mas sua inicialização era uma string não executada.

Correções: domínio padrão aratuconverter.com; trailingSlash always; canonical, hreflang pt-BR/en/x-default e Open Graph; 14 URLs no sitemap (duas homes, cinco ferramentas e um guia em dois idiomas); robots válido; 404 noindex; ads.txt do cliente já configurado; 301 nas URLs sem barra. O domínio padrão pages.dev redireciona para o domínio próprio, preservando a prévia homologacao.

GA4: G-N537RC2ESS, apenas em produção no domínio próprio. Inicialização corrigida e page_location/page_referrer sem query strings. Evento conversion_complete somente após resultado válido, com tool e language de listas fixas; sem nomes, conteúdo, caminhos ou tamanho de arquivos. Verificação da execução da inicialização em ambiente isolado, sem gerar tráfego artificial no GA4.

A integração GitHub→Cloudflare Pages já publica main em produção e homologacao na prévia. Removido o job GitHub deploy-homologacao duplicado e falho (nenhum segredo configurado nesse ambiente). O CI verifica tipos, testes, build e SEO nos dois ambientes; o Pages continua responsável por publicar.

Limites: configuração de tag não comprova recebimento no GA4, aprovação do AdSense nem indexação efetiva. Conferir os painéis autenticados e registrar a evidência de cada serviço. HTTP→HTTPS já retornava 301 no domínio do Aratu.
