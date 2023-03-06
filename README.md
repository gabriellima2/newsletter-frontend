# Newsletter - Frontend

Para praticar Clean Architecture e consumir a [API que criei](https://github.com/gabriellima2/newsletter-backend) com essa mesma arquitetura, desenvolvi esse projeto semelhante à uma inscrição em um sistema de newsletter.
Explorei bastante as camadas da Clean Architecture e as novas atualizações do NextJS. Pretendo usar esse projeto como base para outros, caso decida usar essa arquitetura!

<h2>Estrutura</h2>

```bash
--- src/
	-- domain: Definição de lógicas e models reaproveitáveis em qualquer aplicação(Web, Mobile) e frameworks.
	-- use-cases: Implementação dos casos de usos especifícos para a aplicação.
	-- infra: Faz uso de ferramentas de terceiros e, nesse caso, define adapters e validations.
	-- main: Para melhor reaproveitamento das camadas e centralização das instâncias de classes das mesmas.
	-- app: Diretório padrão no NextJS 13. Equivalente à camada Presentation.
	-- data: Referente à conexões e transferências de dados entre aplicações.
	-- @types: Tipagens reaproveitáveis.
```

<h2>Ferramentas</h2>

- [NextJS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Zod](https://zod.dev/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)

<h2>Rodando o projeto</h2>

Você precisa ter o [Node](https://nodejs.org/en/), o [Git](https://git-scm.com/) e algum gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) | [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)) instalados em sua máquina.

```bash
1. Clone o repositório:
$ git clone https://github.com/gabriellima2/newsletter-frontend.git

2. Acesse a pasta e instale as dependências via terminal:
$ yarn / npm install

3. Inicie a aplicação em modo de desenvolvimento:
$ yarn dev / npm run dev

O servidor será aberto em http://localhost:3000
```

<p align="center">Projeto feito com 💙 por <a href="https://www.linkedin.com/in/gabriel-lima-860612236">Gabriel Lima</a></p>
