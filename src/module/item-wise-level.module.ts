import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemWiseLevelController } from 'src/controller/item-wise-level.controller';
import { Itemwiselevel001mb } from 'src/entity/Itemwiselevel001mb.entity';
import { ItemWiseLevelService } from 'src/service/item-wise-level.service';


@Module({
  imports: [TypeOrmModule.forFeature([Itemwiselevel001mb])],
  providers: [ItemWiseLevelService],
  controllers: [ItemWiseLevelController],
})
export class ItemWiseLevelModule {}
