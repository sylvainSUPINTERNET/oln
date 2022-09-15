import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { CommandBus, CqrsModule, QueryBus } from '@nestjs/cqrs';
import { KillDrakeCommandHandler } from './KillDrakeCommandHandler';

@Module({
  imports: [CqrsModule],
  providers: [AppService, KillDrakeCommandHandler],
  controllers: [AppController],

})
export class AppModule {}
