import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ItemRepository } from 'src/item/item.repository';
import { OrderHandler } from 'src/order/order.handler';
import { OrderSaga } from 'src/order/order.saga';
import { AppController } from './app.controller';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
  OrderHandler,
  OrderSaga,
  ItemRepository],
})
export class AppModule {}
