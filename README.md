
<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/eduardozf/LeagueStats">
    <img src="https://i.imgur.com/u6xHKj3.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">League Stats</h3>

  <p align="center">
    Um projeto para estudos.

  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Sumário

📌 [Sobre o projeto](#sobre-o-projeto)<br />
📌 [Tecnologias utilizadas](#tecnologias-utilizadas)<br />
📌 [Iniciando](#iniciando)<br />
📌 [Pré-requisitos](#pré-requisitos) <br />
📌 [Instalação](#instalação)<br />
📌 [Licença](#licença)<br />
📌 [Contato](#contato)<br />


<!-- ABOUT THE PROJECT -->
## Sobre o projeto

[![Product Name Screen Shot][product-screenshot]](https://i.imgur.com/CucK7lm.png)

Possibilita  visualizar estatisticas de usuário do League of Legends BR.

Motivo:
* Meu foco foi treinar o consumo de API's externas com o ReactJS
* Procurei recriar algumas funcionalidades de sites similares já existentes, para entender o processo de criação da ferramenta.

Ao decorrer do projeto tive varias ideias para implementar, porem como o meu foco foi apenas para estudos de API acredito ter atingido o meu objetivo.

### Tecnologias utilizadas
* ReactJS
* NodeJS
* React-Icons
* Styled Components
* Riot API

<!-- GETTING STARTED -->
## Iniciando

Para iniciar o projeto localmente você precisará seguir algumas instruções.

### Pré-requisitos

* NodeJS
* Yarn ou Npm

### Instalação

```sh
# Clone o repositório
git clone https://github.com/eduardozf/LeagueStats.git

1. Adquirir chave da api no site da Riot
https://developer.riotgames.com/

2. Na pasta /web/ criar arquivo .env

3. Inserir linha no arquivo .env 
RIOT_API_TOKEN="sua_chave_da_api_riot"

# ./web
  4. Instalar pacotes
  # Yarn
  yarn
  # Npm
  npm install

# ./backend
5. Instalar pacotes
  # Yarn
  yarn
  # Npm
  npm install

6. Iniciar Backend
# ./backend
yarn dev

7. Iniciar Frontend
# ./web
yarn start
```

<!-- LICENSE -->
## Licença
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTACT -->
## Contato

Eduardo Zotelli Ferraz - eduardozf1@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/eduardozf/LeagueStats.svg?style=flat-square
[contributors-url]: https://github.com/eduardozf/LeagueStats/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/eduardozf/LeagueStats.svg?style=flat-square
[forks-url]: https://github.com/eduardozf/LeagueStats/network/members
[stars-shield]: https://img.shields.io/github/stars/eduardozf/LeagueStats.svg?style=flat-square
[stars-url]: https://github.com/eduardozf/LeagueStats/stargazers
[issues-shield]: https://img.shields.io/github/issues/eduardozf/LeagueStats.svg?style=flat-square
[issues-url]: https://github.com/eduardozf/LeagueStats/issues
[license-shield]: https://img.shields.io/github/license/eduardozf/LeagueStats.svg?style=flat-square
[license-url]: https://github.com/eduardozf/LeagueStats/blob/master/LICENSE.txt
[product-screenshot]: https://i.imgur.com/CucK7lm.png
