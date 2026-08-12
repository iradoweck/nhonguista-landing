# 🌍 Nhonguista Landing Page

> A porta de entrada pública para o ecossistema Nhonguista em Nampula, focada em conversão, SEO e descoberta de serviços.

<p align="left">
  <img src="https://img.shields.io/badge/Framework-Next.js%2015-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/Estilização-TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Licença-Apache%202.0-green?style=for-the-badge" alt="Licença">
</p>

## 📖 Sobre o Projeto

A Landing Page do **Nhonguista** não é apenas uma página estática, mas uma aplicação SSR robusta desenvolvida para garantir máxima visibilidade nos motores de busca (SEO) e proporcionar uma experiência de utilizador rápida e dinâmica. Ela serve como a principal ferramenta de marketing e captação de leads (clientes e profissionais).

Este submódulo é **Open Source** (Código Aberto), permitindo que a comunidade contribua com melhorias de acessibilidade, design, e otimização.

## 🚀 Arquitetura e Tecnologias

- **Next.js 15**: Renderização híbrida (SSR/SSG) para métricas perfeitas de Core Web Vitals.
- **Tailwind CSS v3**: Estilização utilitária para designs fluidos e responsivos.
- **@nhonguista/ui**: Consumo direto do nosso Design System partilhado.
- **@nhonguista/sdk**: (Futuro) Comunicação tipada com a nossa API Backend.

## ⚙️ Como Começar (Desenvolvimento Local)

Por fazer parte de um monorepo (Turborepo), o ambiente local é gerido a partir da raiz, mas também pode ser executado isoladamente.

### Pré-requisitos
- **Node.js** >= 18
- **pnpm** >= 10

### Passo a Passo

1. Instale as dependências a partir da raiz do monorepo:
   ```bash
   pnpm install
   ```

2. Inicie o servidor de desenvolvimento focado na Landing Page:
   ```bash
   pnpm dev --filter landing
   ```
   > A aplicação estará disponível em [http://localhost:4000](http://localhost:4000).

3. (Opcional) Para gerar um build de produção localmente:
   ```bash
   pnpm build --filter landing
   pnpm start --filter landing
   ```

## 📁 Estrutura de Diretórios

```text
apps/landing/
├── src/
│   ├── app/           # Rotas do Next.js (App Router)
│   ├── components/    # Componentes específicos da landing page
│   ├── lib/           # Utilitários e configurações
│   └── styles/        # Estilos globais (Tailwind)
├── public/            # Imagens, fontes e assets estáticos
└── next.config.mjs    # Configurações do Next.js
```

## 🤝 Como Contribuir

Sendo um módulo **Open Source**, contribuições são muito bem-vindas!
1. Faça um fork do repositório (caso esteja num repositório isolado) ou crie uma branch a partir da `main` no projeto raiz.
2. Siga os padrões do `Conventional Commits` (em Inglês).
3. Garanta que o design se mantém alinhado com o Design System (`@nhonguista/ui`).
4. Abra um Pull Request detalhando a alteração.

## 📄 Licença

Este pacote é de código aberto e distribuído sob a licença **Apache License 2.0**.  
Consulte o ficheiro [LICENSE](./LICENSE) para mais detalhes sobre as permissões e limitações.

---
*Construído com dedicação pela ZEDECK'S IT e a Comunidade Open Source.*
