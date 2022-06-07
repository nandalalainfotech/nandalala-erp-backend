import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from 'src/controller/employee.controller';
import { Employee001mb } from 'src/entity/Employee001mb.entity';
import { EmployeeService } from 'src/service/employee.service';


@Module({
    imports: [TypeOrmModule.forFeature([Employee001mb])],
    providers: [EmployeeService],
    controllers: [EmployeeController],
})
export class EmployeeModule { }