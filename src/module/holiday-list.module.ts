import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayListController } from 'src/controller/holiday-list.controller';
import { Holidaylist001mb } from 'src/entity/Holidaylist001mb.entity';
import { HolidayListService } from 'src/service/holiday-list.service';

@Module({
  imports: [TypeOrmModule.forFeature([Holidaylist001mb])],
  providers: [HolidayListService],
  controllers: [HolidayListController],
})
export class HolidayListModule {}
