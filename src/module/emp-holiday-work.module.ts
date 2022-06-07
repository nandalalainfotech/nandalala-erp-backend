import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeHolidayWorkController } from 'src/controller/emp-holiday-work.controller';
import { Empworkonholiday001mb } from 'src/entity/Empworkonholiday001mb.entity';
import { EmployeeHolidayWorkService } from 'src/service/emp-holiday-work.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empworkonholiday001mb])],
    providers: [EmployeeHolidayWorkService],
    controllers: [EmployeeHolidayWorkController],
})
export class EmployeeHolidayWorkModule { }