

# Documentação do Projeto Frontend

    1. Visão Geral e Obejetivo:
Este projeto é um aplicativo frontend desenvolvido em React, com o intuito de colocar em pratica todos conhecimententos adquirido com as aulas de Front-end, seguindo o modelo disponibilizado no figma, de acordo com os critérios de avaliação, com os objetivo de recriar uma interface de usuário interativa simulando uma loja de sapatos onde o que o cliente pode visualizar uma Home Page que contem, produtos em alta, promoções, caixa de busca, menu interativo, aréa de login e cadastro, uma página renderizando todos os produtos disponibilizado pela loja, onde, o usuario pode filtrar os produtos em disversor aspectos, como menor e maior preço, uma página que disponibiliza os detalhes do produto escolhido, juntamente com suas opções disponiveis, como, cor e tamanho.

    1.1 Tecnologias:
Utilizamos nesse projeto as seguintes tenologias e frameworks:
    - React - Framework JavaScript
    - Tailwind CSS - Framework de estilização

    2. Instalação e Configuração: 
Antes de iniciar, verifique se você já possui os seguintes ferramentas instalados na sua máquina:
    - Node.js
    - NPM - Gerencioador de pacote

    2.2 Clonando o Repositório:
    - Passo 1:
No seu CMD, clone o repositório para a sua máquina local usando o comando:
"git clone https://github.com/gt-05/grupo-01.git"
    - Passo 2:
Use o comando "cd grupo-01" para entrar na pasta do projeto e em seguida use o comando "code" para abrir no seu versionador de código.

    2.3 Instalando dependências:
Com seu versionador aberto, acesse o CMD do mesmo e use o comando "npm install"

    2.4 Executando o Projeto:
No CMD use o comando "npm run dev", o aplicativo estará disponivel no link http://localhost:3000 que aparecerá no CMD.

    3. Estrutura de Diretórios:

A estrutura de diretórios e arquivos do projeto é a seguinte:

    /node_modules
    /public
    /src
        /assets               # Imagens, icones.
        /components           # Componentes reutilizáveis
        /pages                # Componentes de páginas
      App.jsx                 # Arquivo central da aplicação
      main.jsx                # Aquivo responsavel por renderizar o componente principal (App.jsx)
      routes.jsx              # Arquivo responsavel por todas as rotas disponíveis no projeto
    index.html                # Aquivo HTML principal
    package.json              # Configurações do projeto e dependências
    READE.me                  # Documentação do projeto frontend
