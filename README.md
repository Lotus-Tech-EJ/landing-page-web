# Lotus Tech EJ — Landing Page

Landing page institucional da Lotus Tech EJ.

## Objetivo

Desenvolver uma landing page moderna para:

* Apresentar a Lotus Tech EJ
* Exibir serviços oferecidos
* Captar potenciais clientes
* Disponibilizar canal de contato
* Fortalecer a presença digital da empresa

---

# Stack

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* ESLint
* Prettier
* Vercel
* Resend (envio de e-mails)

---

# Primeira Configuração

Caso o repositório esteja vazio ou ainda não possua um projeto configurado:

```bash
npx create-next-app@latest . \
  --typescript \
  --tailwind \
  --eslint \
  --app \
  --src-dir \
  --import-alias "@/*"
```

Selecionar:

```text
✔ TypeScript → Yes
✔ ESLint → Yes
✔ Tailwind CSS → Yes
✔ src directory → Yes
✔ App Router → Yes
✔ Turbopack → Yes
✔ Import alias → @/*
```

Após a criação:

```bash
npm install
npm run dev
```

Aplicação disponível em:

```text
http://localhost:3000
```

---

# Estrutura Inicial

```text
src/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── components/
│   │
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   │
│   ├── hero/
│   │   └── hero-section.tsx
│   │
│   ├── about/
│   │   └── about-section.tsx
│   │
│   ├── services/
│   │   └── services-section.tsx
│   │
│   ├── contact/
│   │   └── contact-form.tsx
│   │
│   └── footer/
│       └── footer.tsx
│
├── data/
│   └── services.ts
│
├── lib/
│   └── constants.ts
│
└── types/
    └── service.ts
```

---

# Estrutura da Landing

```text
Home
│
├── Hero
├── Sobre
├── Serviços
├── Contato
└── Footer
```

---

# Responsabilidades

## Front-end 1 — Setup + Hero + Sobre

### Objetivo

Configurar a base do projeto e desenvolver as seções institucionais.

### Checklist

* Criar projeto Next.js
* Configurar Tailwind
* Configurar ESLint
* Configurar Prettier
* Criar estrutura de pastas
* Criar componentes reutilizáveis
* Implementar Hero Section
* Implementar seção Sobre
* Garantir responsividade
* Abrir Pull Request

### Entregáveis

```text
components/hero
components/about
components/ui
```

---

## Front-end 2 — Serviços + Contato

### Objetivo

Desenvolver as áreas de apresentação comercial e captação de leads.

### Checklist

* Implementar seção Serviços
* Criar cards de serviços
* Implementar formulário de contato
* Validar campos
* Estados de loading
* Estados de erro
* Estados de sucesso
* Garantir responsividade
* Abrir Pull Request

### Entregáveis

```text
components/services
components/contact
data/services.ts
types/service.ts
```

---

## Diretor de Projetos — Integração + Produção

### Objetivo

Realizar integração final e publicação.

### Checklist

* Revisar Pull Requests
* Resolver conflitos
* Configurar variáveis de ambiente
* Configurar Resend
* Testar formulário
* Configurar domínio
* Configurar Vercel
* Validar ambiente de produção
* Aprovar release

---

# Formulário de Contato

Campos mínimos:

```text
Nome
Email
Empresa
Mensagem
```

Validações obrigatórias:

* Nome obrigatório
* E-mail válido
* Mensagem obrigatória
* Feedback visual ao usuário

---

# Integração de E-mail

Serviço recomendado:

Resend

Fluxo:

```text
Landing Page
      ↓
Route Handler Next.js
      ↓
Resend
      ↓
contato@lotustech.com.br
```

Variáveis de ambiente:

```env
RESEND_API_KEY=
CONTACT_EMAIL=
```

Nunca versionar:

```text
.env
.env.local
```

---

# Convenções

## Componentes

Utilizar:

```text
PascalCase
```

Exemplo:

```text
HeroSection.tsx
```

---

## Arquivos auxiliares

Utilizar:

```text
kebab-case
```

Exemplo:

```text
services-data.ts
```

---

## Imports

Utilizar alias:

```typescript
import { HeroSection } from "@/components/hero/hero-section";
```

Evitar:

```typescript
import { HeroSection } from "../../../components/hero/hero-section";
```

---

# Git Flow

Criar branch a partir da main:

```bash
git checkout main
git pull

git checkout -b feature/nome-da-feature
```

Exemplos:

```text
feature/hero-section
feature/about-section
feature/services-section
feature/contact-form
fix/mobile-layout
```

---

# Commits

Padrão:

```text
feat: adiciona hero section

feat: implementa formulário de contato

fix: corrige layout mobile

refactor: simplifica componente de serviço

docs: atualiza README

chore: configura eslint
```

---

# Pull Requests

Todo Pull Request deve:

* Compilar sem erros
* Passar no ESLint
* Estar responsivo
* Possuir descrição clara
* Possuir screenshots quando aplicável
* Ser revisado por outro membro

---

# Critérios de Qualidade

Obrigatório:

* Mobile First
* Componentização
* TypeScript sem uso de any
* Sem código morto
* Sem estilos inline
* Sem duplicação de código
* Responsividade completa
* SEO básico
* Acessibilidade básica

---

# Futuras Melhorias

* GitHub Actions
* Testes automatizados
* Analytics
* Blog institucional
* CMS para conteúdo
* Internacionalização (i18n)

---

# Regra Principal

Nenhum membro deve realizar push diretamente na branch `main`.

Todo desenvolvimento deve ocorrer em branches próprias e ser integrado através de Pull Request.
