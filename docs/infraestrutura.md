# Infraestrutura do Aratu Converter

## Prioridade de produto

O MVP começa por PDF e imagem porque a pesquisa de demanda registrada em `pesquisa-demanda-trends-2026-11-03.md` colocou PDF→Word no topo, JPG→PDF logo depois e HEIC→JPG como líder da família de imagens. A próxima prova técnica é PDF→Word. Ela não entra na homologação enquanto fidelidade, OCR, tabelas e privacidade não forem validados.

## Ambientes

- `homologacao`: branch `homologacao`, `noindex`, Cloudflare Pages preview.
- `main`: produção, somente após revisão e domínio confirmado.
- O site continua estático. Conversões permanecem no navegador e não exigem armazenamento de arquivos.

## Contas e segredos

O pipeline espera `CLOUDFLARE_API_TOKEN` e `CLOUDFLARE_ACCOUNT_ID` como secrets do ambiente `homologacao`. IDs públicos de GA4, AdSense e Cloudflare Web Analytics entram como variables públicas do ambiente. Nenhum segredo deve ser gravado no repositório.

O domínio do projeto ainda não está confirmado nos documentos atuais. Até essa definição, o endereço temporário do Cloudflare Pages é a referência de homologação.

## Observabilidade e monetização

GA4 deve medir somente páginas e eventos de ferramenta, sem conteúdo dos arquivos. Cloudflare Web Analytics acompanha disponibilidade e desempenho. AdSense só deve ser habilitado depois de domínio, política de privacidade, páginas de conteúdo e aprovação da conta.
