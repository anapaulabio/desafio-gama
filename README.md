<div align="center">

![Alt text](/img/cacaVet.png)
</div>
<br>

## 💻 Sobre o projeto
Em um contexto pós-pandemia surgem novas formas de trabalho e comunicação, muitos setores da sociedade integram-se nas tecnologias e as fazem grandes aliadas no mundo corporativo. Empresas apostaram no home office e muitas delas continuam nesse sistema, mesmo com o fim do isolamento social obrigatório.  Em decorrência disso, houve um aumento da sensação de solidão e pessoas se afugentaram dessa situação, adotando animais.

Com essa demanda de novos *“pais e mães de pet”*, a busca por cuidados dos animais intensifica-se e o mercado busca outras maneiras de inovação. Como designers de experiência, nossa missão é captar os problemas que afligem as pessoas e transformá-los em solução. 

Para atender essa nova demanda, construímos uma aplicação para facilitar a comunicação entre os tutores na busca por pessoas veterinárias. **O “CaçaVet”** é uma vitrine para vets e uma facilidade e segurança para tutores.
<br><br>
 
 ![Alt text](../../../../../../../C:/Users/anapa/OneDrive/Documentos/XP44_atividades/desafio-gama/img/como.png)
<br><br>

## 📁 Funcionalidades da API

 - Cadastro de Veterinários que dispôem todas suas informações para agendamento de consultas;

 - Login de usuário com verificação de e-mail e senha;

 - Edição de dados realizado após a autenticação do veterinário;

 - Exclusão de dados após a autenticaçãoa de usuário;

 - Filtragem de veterinários por localização a partir do CEP;

 - Filtragem de Veterinários que aceitem teleconsulta;

 - Upload de imagem para inserir no perfil do veterinário;

<br>

## Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)
<br><br>

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
DB_NAME="Nome do banco de dados: caca_vet"
SECRET_KEY="criar senha interna para jsonwebtoken"

# Gere o build:
$ npx tsc

# Crie banco de dados automaticamente:
$ npx sequelize db:create

# Crie o migration:
$ npx sequelize-cli db:migrate

# Crie seeds para seu banco de dados:
$ npx sequelize-cli db:seed:all

# Inicie a aplicação:
$ npm run debug

```
<br>

 ## 📁 Documentação da API CAÇA-VET
 <br>

```bash
# Clone este repositório:
$ git clone https://github.com/anapaulabio/caca-vet-documentation

# Acesse o index.html com o plugin Live Server
```

<br><br>
![Alt text](../../../../../../../C:/Users/anapa/OneDrive/Documentos/XP44_atividades/desafio-gama/img/doc.png)

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

<table>
  <tr>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/anapaulaoliveiraa/">
        <img src="https://avatars.githubusercontent.com/u/104741998?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Ana Paula Oliveira</b>
          <p>Back-End</p>
        </sub>
      </a>
    </td>
    <td align="center">
      <a target="_blank" href="https://www.linkedin.com/in/carlos-henrique-sodr%C3%A9-gomes-858b48216/">
        <img src="https://avatars.githubusercontent.com/u/106976017?v=4" width="100px;" alt=""/><br>
        <sub>
          <b>Carlos Henrique Sodré</b>
           <p>Back-End</p>
        </sub>
      </a>
    </td>
   

</table>

<br><br>
