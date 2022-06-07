import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseOrderController } from 'src/controller/purchase-order.controller';
import { Prpurchaseord001mb } from 'src/entity/Prpurchaseord001mb.entity';
import { PurchaseOrderService } from 'src/service/purchase-order.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prpurchaseord001mb])],
  providers: [PurchaseOrderService],
  controllers: [PurchaseOrderController],
})
export class PurchaseOrderModule {}
