<h1 align="center">
   Conhecendo os servicos da AMAZON AWS 
</h1>
<h4>UPLOAD DE ARQUIVOS NO SERVICO S3 README E PROJETO EM andamento...</h4>

<p align="center">IMPORTANTE DEPENDENCIA S3 esta dando erro com versoes do node 12 ou superior, ainda nao pesquisei por soluções para isto,Mas o projeto funciona se usar o node na versao v11.14.0<br>
Dica utilize NVM para gerenciar versoes node
</p>
<h4> FAST TUTORIAL NVM</h4>

-Instale o NVM na maquina (acho que nvm existe apenas para linux) <br>
-Para instalar uma versão especifica do node: nvm install v11.14.0 <br>
-nvm ls lista as versoes do node na sua maquina <br>
-nmv current mostra a versão que esta em uso <br>
-Como selecionar e usar uma versão? nvm use v11.14.0 <br>
-Sugestão de um apelido: nvm alias node-s3-legado 11.14.0 <br>
-nvm use node-s3-legado<br>
-Na raiz do seu projeto crie um arquivo:<br>
  .nvmrc e nele coloque a versão ex v11.4.0<br>
-Use o comando nvm use e ele encontrara automaticamente a versao do node<br><br>

<h2>Variaveis de ambient dotenv</h2><br>
<h3>FAST TUTORIAL dotenv</h3>
-Instale a dependencia dotenv <br>
-crie um arquivo .env na raiz do projeto <br>
-Exemplo de como constuir: ACCESS_ID=INSIRASUASENHAAQUI <br>
-No arquivo do projeto importe require('dotenv/config')<br>
-E utilize exemplo: accessKeyId: process.env.ACCESS_ID,<br>
-Coloque o arquivo no .gitignore<br>
