import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonthlyAttendSheetController } from 'src/controller/month-attend-sheet.controller';
import { Monthlyattendsheet001mb } from 'src/entity/Monthlyattendsheet001mb.entity';
import { MonthlyAttendSheetService } from 'src/service/month-attend-sheet.service';

@Module({
    imports: [TypeOrmModule.forFeature([Monthlyattendsheet001mb])],
    providers: [MonthlyAttendSheetService],
    controllers: [MonthlyAttendSheetController],
})
export class MonthlyAttendSheetModule { }