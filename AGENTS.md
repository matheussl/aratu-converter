# Instruções — Conversores

## Contexto obrigatório

Em tarefas de SEO, monetização, analytics, estratégia ou decisões de produto, leia ../adsense/README.md e os documentos pertinentes: ESTRATEGIA.md, SEO.md, MONETIZACAO.md, OBSERVABILIDADE.md, PRODUTOS.md e DECISOES.md. Valide a leitura; instruções de uma pasta irmã não são descobertas automaticamente. Se faltar acesso, informe a limitação antes de decidir com base em contexto incompleto.

## Princípios

1. Priorize utilidade real, potencial orgânico e monetização sustentável.
2. Prefira soluções simples, rápidas, acessíveis, móveis e de baixo custo.
3. Evite dependências e infraestrutura sem justificativa.
4. Considere SEO desde a concepção; não crie páginas em massa sem valor próprio.
5. Planeje observabilidade sem conteúdo, nomes ou caminhos dos arquivos e sem dados pessoais.
6. Registre decisões estratégicas relevantes em ../adsense/DECISOES.md; mantenha decisões técnicas em docs/.
7. Trate o usuário como arquiteto e revisor; comunique escolhas importantes.

## Limites técnicos iniciais

Leia docs/escopo.md e docs/arquitetura.md. Prefira processamento local quando viável; avalie JavaScript, TypeScript e WebAssembly por formato. Não presuma viabilidade universal no navegador. Considere memória, arquivos grandes, erros e compatibilidade, inclusive em celular.

O scaffold estático Astro/TypeScript é provisório. Avalie componentes interativos apenas quando a tarefa exigir. Mantenha compatibilidade com Cloudflare sem criar recursos externos. Não instale motores pesados, configure serviços pagos, implemente conversões ou realize deploy nesta etapa.

## Desenvolvimento e independência

Execute comandos explicitamente em C:\Users\Matheus\projetos\conversores. Use apenas dependências, testes e configurações deste produto; nunca altere o CalculaFolha para contornar restrições.

Antes de instalar dependências com acesso externo, solicite a permissão necessária. Após instalação autorizada, use npm run check e npm run build. Não há testes de conversão enquanto os mecanismos não existem.

Inicie servidor com `npx astro dev --background`; administre com `npx astro dev stop`, `npx astro dev status` e `npx astro dev logs`.

Consulte os guias oficiais antes de tarefas correspondentes:
- Rotas: https://docs.astro.build/en/guides/routing/
- Componentes: https://docs.astro.build/en/basics/astro-components/
- Frameworks: https://docs.astro.build/en/guides/framework-components/
- Conteúdo: https://docs.astro.build/en/guides/content-collections/
- Estilos: https://docs.astro.build/en/guides/styling/
- Idiomas: https://docs.astro.build/en/guides/internationalization/

Não faça commits, pushes, crie recursos remotos ou publique sem autorização correspondente. Nunca leia ../adsense durante o build: a referência é apenas contexto para o trabalho.
