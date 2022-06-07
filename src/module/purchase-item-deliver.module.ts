import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseItemDeliverController } from 'src/controller/purchase-item-deliver.controller';
import { Purorditemreceive001mb } from 'src/entity/Purorditemreceive001mb.entity';
import { PurchaseItemDeliverService } from 'src/service/purchase-item-deliver.service';

@Module({
  imports: [TypeOrmModule.forFeature([Purorditemreceive001mb])],
  providers: [PurchaseItemDeliverService],
  controllers: [PurchaseItemDeliverController],
})
export class PurchaseItemDeliverModule {}
