# Express Sequelize API

API construída para o curso ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite da Alura.

## 🛠️ Tecnologias e Ferramentas

- **Runtime:** [Node.js](https://nodejs.org/)
- **Framework:** [Express 5](https://expressjs.com/)
- **ORM:** [Sequelize](https://sequelize.org/)
- **Banco de Dados:** [SQLite](https://www.sqlite.org/)
- **Linter:** [ESLint](https://eslint.org/) (Padronização de código)
- **Development:** [Nodemon](https://nodemon.io/) (Auto-reload)

## ⚙️ Pré-requisitos

Certifique-se de ter o **Node.js** instalado na sua máquina.

## 🚀 Como rodar o projeto localmente

1. **Clone o repositório**

   ```bash
   git clone [https://github.com/marcelloventurini/express-sequelize.git](https://github.com/marcelloventurini/express-sequelize.git)
   cd express-sequelize
   ```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o banco de dados**  
   Como estamos usando o SQLite, o banco será criado automaticamente. Rode as migrações para criar as tabelas:

```bash
npx sequelize-cli db:migrate
```

4. **(Opcional) Popular o banco**  
   Se desejar carregar os dados de teste iniciais:

```bash
npx sequelize-cli db:seed:all
```

5. **Inicie o servidor de desenvolvimento**

```bash
npm run dev
```
