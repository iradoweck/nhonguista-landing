# Changelog - Landing Page


## [0.0.2] - 12 Ago 2026
> **Foco:** Integração de Workspaces e Governança de IA.

### ✨ Adicionado
- **Comunidade & Governança**: Adição de ficheiros CONTRIBUTING.md, SECURITY.md, CODE_OF_CONDUCT.md, VERSIONING.md e templates do GitHub.
- **Dogmatização de Agentes**: Injeção das regras de IA (AGENTS.md) e limites de contexto (.geminiignore).
- **Licenciamento**: Adoção integral da licença de código aberto Apache License 2.0.
- **Design System Base**: Implementação do sistema de cores oficial usando variáveis CSS nativas.
- **Ativos da Marca**: Geração e integração de assets de favicon e OpenGraph.
- **Showcase de UI**: Secção de verificação visual de cores adicionada provisoriamente.
- **Organização**: Repositório transferido para `@nhonguista`.
- **Framework**: Upgraded para Next.js 16.3.1 e TypeScript 7.0.2.
- **Porto de Dev**: Configurado servidor local para correr no porto 4000.

### 🐛 Corrigido
- **Animações (Framer Motion)**: Resolvido um erro no painel `FAQ.tsx` que tentava animar o `backgroundColor` para `transparent`.
- **Fetch API**: Suprimidos avisos excessivos no `console.error` quando o backend falha, permitindo fallback silencioso para dados de teste.

### 🔄 Alterado
- **Workspaces & Integração**: Integração nativa com pacotes locais usando `workspace:*` (incluindo `moz-utils` e pacotes internos).
- **Documentação**: Atualização do `README.md` com secção explícita para licenciamento sob Apache License 2.0.

## [0.0.1] - 13 Mai 2026
> **Foco:** Experiência "Viva" (UX/UI), Localização e Estatísticas.
### ✨ Adicionado
- **UX Dinâmica**: Hero Interativo (efeito typewriter inteligente) e Live Search Preview implementados.
- **Impacto Social (Stats)**: Nova secção de métricas consumindo dados vivos (Nhonguers, Serviços, Tempo no Ar).
- **FAQ Pro & Destaques**: Componentes expansíveis de forma inteligente e montras de serviços diversificadas.
- **UI Premium**: Design moderno e mobile-first com skeletons e paleta de cores de Nampula.

### 🔄 Alterado
- **Localização**: L10n adaptado para datas e meses em Português (PT-MZ).
