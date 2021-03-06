# 👨‍🏫Instruções

### 👨‍💻Clonar projeto

-Clone o projeto na sua máquina; <br>
-Com o projeto clonado, realize a instalação das dependências de preferência com o "yarn";<br>

### ⚙Configurando 

-Caso deseje executar a API da mesma forma, será necessário a instalação do MongoDB, Redis e PostgresSQL;<br>
-Após a instalação faça uma cópia dos arquivos <b>.env.example</b> e <b>ormconfig.example.json</b>, removendo o ".example" dos mesmos;<br>
-Configure o banco de dados conforme o arquivo do ormconfig.json para uma conexão ao banco;<br>
-Execute as <b>migrations</b>.

### 🗃Rodando API

-Com tudo configurado basta executar o servidor normalmente, caso queira, verifique o "package.json" para utilizar os scripts de execução;<br>

### 💻🖱Testando rotas

-Após a execução das migrations, execute uma requisição como teste na rota "http://localhost:3333/users" utilizando o Insomnia ou outro de sua preferência, enviando os seguintes dados em JSON:<br>

```JSON

{
	"name": "João",
	"email": "joao@example.com",
	"password": "12345678"
} 

```

-Se tudo estiver ok você receberá um status200 com o retorno da requisição.<br>

### 🔗Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:<br>

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)



