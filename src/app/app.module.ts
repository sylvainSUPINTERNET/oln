import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CommandBus, QueryBus } from '@nestjs/cqrs';

@Module({
  providers: [AppService, CommandBus, QueryBus],
  controllers: [AppController],

})
export class AppModule {}
