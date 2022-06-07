import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpAttendanceController } from 'src/controller/emp-attendance.controller';
import { Empattendance001mb } from 'src/entity/Empattendance001mb.entity';
import { EmpAttendanceService } from 'src/service/emp-attendance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empattendance001mb])],
    providers: [EmpAttendanceService],
    controllers: [EmpAttendanceController],
})
export class EmpAttendanceModule { }