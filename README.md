<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
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
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).


## RABBIT

````bash

docker run -d --name same-rabbit --hostname my-rabbit -e RABBITMQ_DEFAULT_USER=USERNAME -e RABBITMQ_DEFAULT_PASS=PASSWORD -p 5673:5672 -p 15673:15672 rabbitmq:management

````


CQRS / DDD / MICROSERVICE 
https://levelup.gitconnected.com/microservices-with-cqrs-in-typescript-and-nestjs-5a8af0a56c3a

Firstly, the API Gateway will pick up the HTTP request, which forwards this request as gRPC protocol to the account microservice. Each microservice is split into a Command and a Query application. Since we will make a write request, this request will land on the Command application.

There, the OpenAccountDto validates the incoming request. A command OpenAccountCommand will be created and handled by the Command Bus. The executed command will create the aggregate, which could be seen as an event container. Many things could happen. For example, we could replay previous events of this aggregate.

However, this isn’t necessary since an account can be opened only once. Instead, we only create an AccountOpenedEvent and save this event and its event data in the MongoDB database.

Then, we produce a message that holds the event data and sends this message over the Kafka Event Stream to the query application, where a consumer listens to incoming calls.

We publish the event OpenedAccountEvent, which we received from the command application to the Event Bus. This event will then create a new entry in the PostgreSQL database in its execution. The eventual consistency is archived since write and read databases are in sync at this level.

In the meantime, the OpenAccountSaga sends a gRPC request to the second microservice bank-funds-svc to deposit the initial opening balance. Again, this is a write request, so the command application of the bank-funds-svc will pick up this request.

From there, the procedure is pretty similar to the original request. Commands will be created and executed, aggregate calls the event, create an entry to the read and write database, etc.



https://medium.com/swlh/cqrs-explained-with-nest-js-1bcf83c5c839
