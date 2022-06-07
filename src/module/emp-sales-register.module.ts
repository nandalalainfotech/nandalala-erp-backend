import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSalesRegisterController } from 'src/controller/emp-sales-register.controller';
import { Empsalaryregister001mb } from 'src/entity/Empsalaryregister001mb.entity';
import { EmployeeSalesRegisterService } from 'src/service/emp-sales-register.service';

@Module({
    imports: [TypeOrmModule.forFeature([Empsalaryregister001mb])],
    providers: [EmployeeSalesRegisterService],
    controllers: [EmployeeSalesRegisterController],
})
export class EmployeeSalesRegisterModule { }