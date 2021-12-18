<h1 align="center">
    <br>
    <p align="center">Projeto Final {Reprograma}<p>
</h1>
<p align="center">

<img src="./assets/MultplicaLab.png" width="100%">




## 🚀 Descrição

<br>

 API desenvolvida como Projeto Final para a conclusão do curso de Backend  [{Reprograma}](https://reprograma.com.br/)


A maioria dos alunos chegam ao Ensino Médio com grandes dificuldades em matérias de exatas como matemática, física e química. Essa dificuldade se agrava ainda mais quando falamos de alunos ensino médio público. Muitos se formam sem possuírem conhecimentos básicos das operações matemáticas, por exemplo.

Apesar de ter cursado o Ensino médio em colégio particular, como bolsista integral, vivenciei essa defasagem na educação pública muito de perto e precisei batalhar para supera-lá. A maioria dos meus amigos, porém, frequentavam escolas estaduais e, enquanto eu tive aulas frequentes, com as quais eu pude descobrir minha paixão e desejo de seguir carreira na área de exatas, meus colegas, que cresceram comigo e estudavam em instituições públicas, não chegaram a ter o ensino básico das ciências exatas.

O MULTIPLICA LAB foi crida pensando justamente nessa desigualdade da educação pública no país, com ênfase no ensino das ciências exatas. A aplicação é voltada para as intuições públicas do Ensino médio da cidade de São Paulo e objetivo é que, por meio de um cadastro, monitores voluntários (sejam professores já formados, estudantes de licenciatura ou de qualquer curso de exatas que possua o conhecimento necessário) consigam se cadastrarem no banco de dados. Desse modo, as escolas poderão realizar uma busca e encontrar o contato de algum monitor que se encaixe na demanda da instituição para agendar uma monitoria (online ou presencial) e auxiliar na defasagem dos seus alunos.


## 💻 Objetivos e Funcionalidades  

O projeto trata-se de uma API REST, que possibilita o cadastro de monitores voluntarios na aplicação. É necessário  informar dados pessoais, universidade que estudou ou estuda, qual o curso da graduação e matéria que deseja ministrar na monitoria. Após este processo, os monitores podem realizar  login, fazer qualquer alteração necessária nos seus dados e até mesmo deletar o seu cadastro.
Já as escolas, também por meio de cadastro, conseguem realizar login e acessar toda a lista de monitores existentes no banco de dados. É possível também buscar os monitores por nome, bairro, matéria ou id.

- Listar todos os montores que estão cadastradas no sistema;
- Conseguir buscar os dados dos monitores por uma rota privada;
- Cadastrar monitores voluntários e escolas públicas do ensino médio;
- Atualizar os dados dos monitores caso haja mudança;
- Deletar cadastros caso os monitores não possam mais realizar as monitorias voluntárias.
<br>


## ✅Aprendizados

Criação de uma API fundamentada no CRUD, que são:  CREATE (CRIAR), READ(LER-CONSULTA), UPDATE(ATUALIZAR) e DELETE(DESTRUIÇÃO). 
## 🛠️ Tecnologias utilizadas nesse projeto

<br>

Para a construção do projeto, as seguintes tecnologias foram utilizadas:

- [JavaScript](https://www.javascript.com/)
- [Git/Github](https://github.com/)
- [Node.js](https://nodejs.org/en/)
- [MongoDb](https://www.mongodb.com/)
- [MongoCompass](https://www.mongodb.com/pt-br/products/compass)
- [MongoDBatlas](https://www.mongodb.com/cloud/atlas)
- [Postman](https://www.postman.com/)
- [Vscode](https://code.visualstudio.com/)
- [heroku](https://dashboard.heroku.com/apps)

### Pacotes Utilizados 

- [Express](https://expressjs.com/pt-br/)
- [Nodemon](https://nodemon.io/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Mongoose](https://mongoosejs.com/)
- [cors](https://www.npmjs.com/package/cors)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt

<br>

<br>

## 📁 Arquitetura MVC 

```
 📁 MULTIPLICA-LAB
   |
   |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 escolasController.js
   |         |- 📑 monitoresController.js
   |     
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 helpers
   |         |- 📑 auth.js
   |
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 escolasSchema.js
   |         |- 📑 monitoresSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 escolasRoutes.js 
   |         |- 📑 multiplicaRoutes.js
   |
   |    |- 📑 app.js
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
```
<br>

### 👩‍👧‍👦Rodando o Back End 

Server Local

```bash
# Com o git
# Clone este repositório
$ git clone <https://github.com/juesantana/Multiplica-Lab.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd Multiplica-Lab

# Instale as dependências
$ npm install

# Execute o servidor
$ npm start

## 🔃 Rotas

* local: http://localhost:6000

* Heroku: https://multiplica-lab.herokuapp.com/

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para para chamar e testar os endpoints da API localmente ou via Heroku

## ✅ Dados para Collection monitores:

- id: gerado automaticamente 
- nome: texto e 
- cpf: número e obrigatório 
- email: texto e obrigatório 
- bairro: texto e obrigatório 
- age: texto e obrigatório
- university: texto e obrigatório
- course: texto e obrigatório
- subject: texto e obrigatório
- experience: texto e obrigatório
- termsOfUse: booleano e obrigatório
- password: texto e obrigatório  
- created: data gerada automaticamente e obrigatório

 ## ✅ Dados para Collection Login:

- id: gerado automaticamente 
- nome: texto e obrigatório
- endereço: texto e obrigatório
- email: texto e obrigatório
- phone:texto e obrigatório
- EnsinoMédia: booleano e obrigatório
- password: texto e obrigatório
- termosDeUso: texto e obrigatório
- created: data gerada automaticamente e obrigatório


### 🚧 Projeto em Construção

- Criar um delete e update dos cadastros das escolas
- Fazer implementações que impeçam updates e deletes entre logins

##  👨‍💻 Meus contatos:
- [linkedin](https://www.linkedin.com/in/juliana-santana-53a630b9/)
- [github](https://github.com/juesantana)
- email: juesantana@gmail.com
