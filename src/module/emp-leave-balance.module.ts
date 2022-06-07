import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeLeaveBalanceController } from 'src/controller/emp-leave-balance.controller';
import { Empleavebalance001mb } from 'src/entity/Empleavebalance001mb.entity';
import { EmployeeLeaveBalanceService } from 'src/service/emp-leave-balance.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empleavebalance001mb])],
    providers: [EmployeeLeaveBalanceService],
    controllers: [EmployeeLeaveBalanceController],
})
export class EmployeeLeaveBalanceModule { }