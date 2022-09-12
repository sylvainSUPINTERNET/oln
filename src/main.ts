import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const password = "PASSWORD"
  const user = "USERNAME"
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://${user}:${password}@localhost:5673`],
      queue: 'cats_queue',
      queueOptions: {
        durable: false
      },
    },
  });

  
  await app.listen();

  // const app = await NestFactory.create(AppModule);
  // app.enableCors();
  // await app.listen(3000);
}
bootstrap();
