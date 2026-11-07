# Aratu Converter

Segundo produto do [portfólio AdSense](../adsense/README.md), em preparação local desde 02/11/2026.

## Estado

O MVP local inclui juntar PDFs, JPG/PNG para PDF, extração de páginas de PDF e PDF para JPG/PNG. A interface está em português e inglês. Os arquivos do usuário são processados no navegador com pdf-lib e PDF.js. A prévia é marcada com `noindex`.

Cada operação aceita até 20 arquivos, 20 MB por arquivo, 50 MB no total e até 200 páginas de PDF. A exportação para imagens aceita até 50 páginas por operação. PDFs protegidos por senha ficam fora do escopo. As cópias podem perder formulários, anexos e assinaturas.

## Documentação

- [Concorrentes e ranking de implementação — 03/11/2026](docs/concorrentes-ranking-2026-11-03.md)

- [Pesquisa de demanda no Google Trends — 03/11/2026](docs/pesquisa-demanda-trends-2026-11-03.md)

- [Instruções de trabalho](AGENTS.md)
- [Escopo e perguntas do MVP](docs/escopo.md)
- [Base técnica provisória](docs/arquitetura.md)
- [Estratégia compartilhada](../adsense/README.md)
- [Configuração manual do Codex](../adsense/CODEX.md)

## Preparação de desenvolvimento

Na pasta do Aratu Converter, use Node >=22.23.4:

```powershell
npm ci
npm run check
npm test
npm run build
npm run dev -- --background
```

A prévia abre em [127.0.0.1:4322](http://127.0.0.1:4322/). Use **Testar com exemplo** em qualquer ferramenta para carregar arquivos sintéticos na versão de desenvolvimento. Os assets usados pelo PDF.js são copiados para `public/pdf-assets/` na instalação.

## Git e entrega

Branch inicial: main, ainda sem commit. Nenhuma política de homologação ou produção foi configurada. Executar operações Git explicitamente neste repositório. Commits, pushes, recursos externos e deploys dependem de autorização; não há comando de deploy nesta etapa.
