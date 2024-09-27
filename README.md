<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Project Setup

Follow these steps to set up the project:

## 1. Clone the Project

Clone the repository using Git:

```bash
git clone https://github.com/jmndezv/backend-test.git
```

## 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
cd backend-test
npm install
```

## 3. Configure Environment Variables

Create a `.env` file in the project root with the following environment variables:

```plaintext
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
```

## 4. Build and Run the Containers

Use Docker Compose to build and run the containers in detached mode:

```bash
docker-compose up -d
```

## 5. Run the Application

Start the application in development mode:

```bash
npm run start:dev
```

## 6. Available Endpoints

You can use the following endpoints to interact with the API:

- **Load Database**

  ```
  GET http://localhost:3000/pokemons/load
  ```

- **Get All Pokémon**

  ```
  GET http://localhost:3000/pokemons/all
  ```

- **Get One Pokémon**

  ```
  GET http://localhost:3000/pokemons/one?name=
  ```

- **Get Filtered Pokémon**

  ```
  GET http://localhost:3000/pokemons/filter?name=&ope=&base_experience=
  ```

- **Rate Pokémon**

  ```
  GET http://localhost:3000/pokemons/rate
  ```

- **Get Top-Rated Pokémon**

  ```
  GET http://localhost:3000/pokemons/top-rated?size=
  ```

  <!-- ## Setup

1. Clone project.

```bash
git clone https://github.com/jmndezv/backend-test.git
```

2. Install dependencies.

```bash
npm i
```

3. Create `.env` file in the project root with the following environment variables:

```bash
DB_PASSWORD=
DB_NAME=
DB_HOST=
DB_PORT=
DB_USERNAME=
```

4. Build and run the containers.

```bash
docker-compose up -d
```

5. Run the app.

```bash
npm run start:dev
```

6. Endpoints.
   Load database

```
http://localhost:3000/pokemons/load/
```

Get all pokemons

```
http://localhost:3000/pokemons/all
```

Get one pokemon

```
http://localhost:3000/pokemons/one?name=
```

Get a filtered pokemon

````
http://localhost:3000/pokemons/filter?name=&ope=&base_experience=
``` -->

<!-- ## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
````

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE). -->
