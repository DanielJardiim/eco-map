# 🌱 Eco Map

**Eco Map** é uma aplicação web moderna para visualização, cadastro e gerenciamento de projetos ambientais. A plataforma integra um **frontend interativo em React** com um **backend robusto em NestJS**, tudo containerizado com **Docker Compose**.

A proposta é fornecer uma interface intuitiva com **visualização geográfica em mapa**, busca por projetos, cadastro e exibição lateral em lista, permitindo que usuários explorem e gerenciem projetos sustentáveis de forma eficiente.

---

## ✨ Funcionalidades

- 🔍 Busca de projetos por nome
- 🗺️ Exibição dos projetos em um mapa com geometria (Ponto, Linha, Polígono)
- 🧾 Lista lateral com detalhes dos projetos
- ➕ Cadastro de novos projetos via formulário modal
- ⚙️ Backend em NestJS com banco PostgreSQL
- 🐳 Arquitetura baseada em Docker para desenvolvimento rápido

---

## 🖥️ Tecnologias Utilizadas

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Query](https://tanstack.com/query/latest)
- [Leaflet](https://leafletjs.com/) (visualização de mapas)
- CSS Modules

### Backend

- [NestJS](https://nestjs.com/)
- [TypeORM](https://typeorm.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker & Docker Compose](https://docs.docker.com/compose/)

---

## 📦 Estrutura do Projeto

```
eco-map/
├── backend/             # Backend NestJS + PostgreSQL
│   ├── docker-compose.yml
│   ├── Dockerfile
│   ├── src/
│   └── ...
├── frontend/            # Frontend React com Vite
│   ├── src/
│   └── ...
└── README.md            # Este arquivo
```

---

## 🚀 Como Executar Localmente

### Pré-requisitos

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/) (apenas para o frontend)

### 1. Subir o Backend com Docker Compose

```bash
cd backend
docker-compose down --volumes
docker-compose build --no-cache
docker-compose up -d
```

📦 Isso iniciará:

- PostgreSQL na porta `5432`
- Backend NestJS na porta `3000`

> As variáveis estão definidas em `.env`, com credenciais padrão (`postgres:postgres`).

### 2. Rodar o Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

🧭 Acesse `http://localhost:5173` para visualizar a aplicação.

---

## 📁 Endpoints da API

O backend expõe uma API REST para manipulação dos projetos ambientais:

- `GET /projects` – Lista todos os projetos
- `POST /projects` – Cria um novo projeto
- Campos: `nome`, `status`, `geometry` (`type`, `coordinates`)

Exemplo de payload:

```json
{
  "name": "Projeto Verde",
  "status": "Ativo",
  "responsibleResearcher": "Dr. John Doe",
  "geometry": {
    "type": "Point",
    "coordinates": [-46.63, -23.55]
  }
}
```

---

## 🔍 Funcionalidade de Busca

No frontend, os usuários podem buscar por **nome do projeto** utilizando a barra de pesquisa localizada acima da lista lateral.

---

## 🛠️ Scripts Úteis

### Backend

```bash
# Rodar em desenvolvimento sem docker
npm install
npm run start:dev
```

### Frontend

```bash
npm run build      # Gera build para produção
npm run dev        # Inicia o servidor local de desenvolvimento
```

---

## 🧪 Testes

### Backend

```bash
npm run test
```

---

## 📘 Possíveis Melhorias Futuras

- Autenticação de usuários
- Upload de arquivos e imagens dos projetos
- Filtros por status, região, tipo de geometria
- Internacionalização (i18n)
- Responsividade mobile avançada

---

## ⚖️ Licença

Este projeto está licenciado sob os termos da **MIT License**.

---

## 🙌 Autor

Desenvolvido por [Daniel Jardim](https://github.com/DanielJardiim)
