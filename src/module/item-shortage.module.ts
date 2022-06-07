import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemShortageController } from 'src/controller/item-shortage.controller';
import { Itemshortagerep001mb } from 'src/entity/Itemshortagerep001mb.entity';
import { ItemShortageService } from 'src/service/item-shortage.service';


@Module({
  imports: [TypeOrmModule.forFeature([Itemshortagerep001mb])],
  providers: [ItemShortageService],
  controllers: [ItemShortageController],
})
export class ItemShortageModule {}
