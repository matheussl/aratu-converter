# Base técnica provisória

02/11/2026. Este documento não define a arquitetura dos motores de conversão.

## Preparação adotada

- Astro com saída estática e TypeScript em modo estrito.
- Uma página provisória, sem upload, scripts de conversão ou framework de interface adicional.
- Somente Astro, TypeScript e o verificador Astro declarados; nada instalado.
- Sem domínio canônico inventado, adaptador, Worker, banco, API, anúncios ou analytics.
- Sem importações de outros produtos ou da documentação compartilhada.
- Dependências e futuro lockfile próprios; sem reaproveitar node_modules do CalculaFolha.
- Página provisória noindex; revisar a política de indexação ao especificar e publicar páginas reais.

O scaffold é compatível em princípio com entrega de assets estáticos, mas não houve build nem validação em Cloudflare. Hospedagem e política de ambientes permanecem pendentes.

## Diretrizes a avaliar por formato

Preferir processamento no navegador quando viável. Avaliar JavaScript, TypeScript e WebAssembly conforme necessidade real, peso, licenças e compatibilidade. Considerar processamento interativo, memória, arquivos grandes, cancelamento, falhas e experiência móvel.

Não há garantia de que PDF/escritório, áudio ou vídeo possam ser tratados integralmente no navegador com fidelidade e custo aceitáveis. Decisões dependem da especificação do MVP e de evidência técnica.

## Referências consultadas para o scaffold

- https://docs.astro.build/en/guides/routing/
- https://docs.astro.build/en/basics/astro-components/
- https://docs.astro.build/en/guides/styling/

Revalidar versões e requisitos antes de instalar dependências. Não adicionar serviços de processamento ou bibliotecas de conversão sem necessidade e revisão.
