import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemWisePurchaseController } from 'src/controller/itemwisepurchase.controller';
import { Itemwisepurregister001mb } from 'src/entity/Itemwisepurregister001mb.entity';
import { ItemWisePurchaseService } from 'src/service/itemwisepurchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([Itemwisepurregister001mb])],
  providers: [ItemWisePurchaseService],
  controllers: [ItemWisePurchaseController],
})
export class ItemWisePurchaseModule {}
