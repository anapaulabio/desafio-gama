<h1 align=center> API </hi>


## 💻 Sobre o projeto
<br>
- EM ANDAMENTO

## 📁 Funcionalidades da API

### Users
- Post/Login
- Get/Listar
- Post/Cadastrar
- Put/Editar
- Delete/Apagar

### Posts
- Get/Listar
- Post/Criar novo post
- Put/Editar

## Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório:
$ git clone https://github.com/anapaulabio/desafio-gama

# Acesse a pasta do projeto no terminal/cmd:
$ cd desafio-gama

# Instale as dependências:
$ npm install

# Crie e ajuste o arquivo .env a partir do .env.example: 
DB_HOST="local irá rodar o servidor"
DB_PORT="porta utilizada pelo mysql"
DB_USER="nome de usuario no mysql"
DB_PASS="senha de usuario no mysql"
DB_NAME="Nome do banco de dados: parrot"
SECRET_KEY="criar senha interna para jsonwebtoken"

# Gere o build:
$ npx tsc

# Crie banco de dados automaticamente:
$ npx sequelize db:create

# Crie o migration:
$ npx sequelize-cli db:migrate

# Crie seeds para seu banco de dados:
$ npx sequelize-cli db:ssed:all

# Inicie a aplicação:
$ npm run debug

```

 ## 📁 Documentação da API PARROT 

```bash
# Acesse a pasta da documentação no terminal/cmd
$ cd docs

# Acesse o index.html com o plugin Live Server
```

<br><br>


<br><br>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
<br><br>

<div align="left">
  <img alt="Rafa-Ts" height="40" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="52" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo"  />
</div>

---

<h2> 👨‍💻 Contribuidores </h2><br>

- Ana Paula Oliveira 
- Carlos Eduardo
