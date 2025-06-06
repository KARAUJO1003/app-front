# App Front - Metas Financeiras

Este projeto é um sistema de controle de metas financeiras colaborativas, desenvolvido em **Next.js 14 (App Router)**, **TypeScript** e **Prisma ORM**. Ele permite criar, gerenciar e acompanhar metas financeiras, com múltiplos participantes, parcelas, controle de pagamentos e autenticação JWT.

## Funcionalidades

- **Autenticação JWT** (login, sessão via cookie httpOnly)
- **Criação de metas** com participantes e distribuição de responsabilidades
- **Parcelamento flexível** (igual, crescente, decrescente, aleatória)
- **Gestão de parcelas** (status, valor pago, responsável, vencimento)
- **Painel de resumo** da meta e progresso
- **Notificações** (simuladas)
- **Responsividade** para mobile e desktop
- **API RESTful** com Next.js (rotas em `/api`)
- **Banco de dados SQLite** (padrão, via Prisma)

## Tecnologias

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18+](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma ORM](https://www.prisma.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Axios](https://axios-http.com/)
- [Zod](https://zod.dev/) (validação)
- [nookies](https://github.com/maticzav/nookies) (cookies no client)
- [date-fns](https://date-fns.org/) (datas)

## Como rodar localmente

1. **Clone o repositório**

   ```bash
   git clone <url-do-repo>
   cd app-front
   ```

2. **Instale as dependências**

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   # ou
   bun install
   ```

3. **Configure o banco de dados**
   - Renomeie o arquivo `.env.example` para `.env`
   - Edite as variáveis de ambiente conforme necessário
4. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   # ou
   bun dev
   ```

5. **Acesse o aplicativo**
   - Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000)

## Estrutura de Pastas

```bash
app/
├── api/                # Rotas da API (API RESTful)
├── components/         # Componentes reutilizáveis
├── lib/                # Funções e configurações auxiliares
├── middleware/         # Middleware (ex: autenticação)
├── pages/              # Páginas (expostas como rotas)
├── prisma/             # Schema e migrações do Prisma
├── public/             # Arquivos estáticos (imagens, fontes, etc.)
├── styles/             # Estilos globais e do Tailwind CSS
└── utils/              # Funções utilitárias
```

## Aprendizado e Referências

Para aprender mais sobre as tecnologias e conceitos utilizados neste projeto, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Aprenda sobre os recursos e a API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo de Next.js.
- [Documentação do TypeScript](https://www.typescriptlang.org/docs/) - Aprenda sobre os recursos e a API do TypeScript.
- [Documentação do Prisma](https://www.prisma.io/docs/) - Aprenda sobre os recursos e a API do Prisma.
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs) - Aprenda sobre os recursos e a API do Tailwind CSS.
- [Documentação do React](https://react.dev/docs/getting-started) - Aprenda sobre os recursos e a API do React.

Sinta-se à vontade para explorar e contribuir com o projeto!
