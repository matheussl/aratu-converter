# Aratu Converter

Ferramentas de PDF em português e inglês, parte do [portfólio AdSense](../adsense/README.md).

## Produto

Juntar PDFs, imagens JPG/PNG para PDF, extrair/dividir páginas, PDF para JPG/PNG e PDF para Word. Os arquivos são processados no navegador. PDF para Word prioriza texto editável de PDFs digitais; não inclui OCR nem promete fidelidade visual universal. Reduzir tamanho de PDF é um guia, sem compactador implementado.

Limites: 20 arquivos, 20 MB por arquivo, 50 MB no total e 200 páginas. Exportação de imagens: 50 páginas por operação. PDFs com senha ficam fora do escopo.

## Ambientes e entrega

- Produção: https://aratuconverter.com/ — branch main.
- Homologação: https://homologacao.aratu-converter.pages.dev/ — branch homologacao, noindex e sem GA4 de produção.
- Publicação pela integração GitHub→Cloudflare Pages existente. O GitHub Actions verifica produção e homologação, sem um segundo job de deploy.
- URLs com barra final, sitemap em /sitemap.xml e política de rastreamento em /robots.txt.

## Desenvolvimento

Node >=22.23.4, dependências próprias. Use npm run check, npm test e npm run build. Após o build, npm run check:seo valida SEO e inicialização de analytics. Para testar produção, defina PUBLIC_DEPLOY_ENV=production e PUBLIC_SITE_URL=https://aratuconverter.com. Valores públicos opcionais estão em .env.example; segredos nunca devem entrar no repositório.

Servidor: npx astro dev --background. Gerencie com astro dev stop/status/logs.

## Documentação

- [SEO e revisão de publicação](docs/seo.md)
- [Pesquisa de demanda](docs/pesquisa-demanda-trends-2026-11-03.md)
- [Concorrentes e prioridades](docs/concorrentes-ranking-2026-11-03.md)
- [Instruções](AGENTS.md)

Os documentos iniciais de escopo e arquitetura são históricos; não comprovam o estado dos serviços.
