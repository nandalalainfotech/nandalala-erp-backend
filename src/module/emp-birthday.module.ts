import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  EmployeeBirthdayController } from 'src/controller/emp-birthday.controller';
import { Employbirthday001mb } from 'src/entity/Employbirthday001mb.entity';
import { EmployeeBirthdayService} from 'src/service/emp-birthday.service';

@Module({
    imports: [TypeOrmModule.forFeature([Employbirthday001mb])],
    providers: [EmployeeBirthdayService],
    controllers: [EmployeeBirthdayController],
})
export class EmployeeBirthdayModule { }