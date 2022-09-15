import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app/app.module';

export const password = "PASSWORD"
export const user = "USERNAME"


// IF WE USE no http but a broker
// async function bootstrap() {

//   const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
//     transport: Transport.RMQ,
//     options: {
//       urls: [`amqp://${user}:${password}@localhost:5673`],
//       queue: 'cats_queue',
//       queueOptions: {
//         durable: false
//       },
//     },
//   });
//   await app.listen();

// }
// bootstrap();


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => console.log('Application is listening on port 3000.'));
}
bootstrap();