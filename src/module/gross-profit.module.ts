import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GrossProfitController } from 'src/controller/gross-profit.controller';
import { Grossprofit001mb } from 'src/entity/Grossprofit001mb.entity';
import { GrossProfitService } from 'src/service/gross-profit.service';

@Module({
  imports: [TypeOrmModule.forFeature([Grossprofit001mb])],
  providers: [GrossProfitService],
  controllers: [GrossProfitController],
})
export class  GrossProfitModule {}
