import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemPriceReportController } from 'src/controller/item-price-report.controller';
import { Itempricereport001mb } from 'src/entity/Itempricereport001mb.entity';
import { ItemPriceReportService } from 'src/service/item-price-report.service';


@Module({
  imports: [TypeOrmModule.forFeature([Itempricereport001mb])],
  providers: [ItemPriceReportService],
  controllers: [ItemPriceReportController],
})
export class ItemPriceReportModule {}
