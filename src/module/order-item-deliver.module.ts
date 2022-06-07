import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderItemDeliverController } from 'src/controller/order-item-deliver.controller';
import { Orditemsdeliver001mb } from 'src/entity/Orditemsdeliver001mb.entity';
import { OrderItemDeliverService } from 'src/service/order-item-deliver.service';


@Module({
  imports: [TypeOrmModule.forFeature([Orditemsdeliver001mb])],
  providers: [OrderItemDeliverService],
  controllers: [OrderItemDeliverController],
})
export class OrderItemDeliverModule {}
