import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmploymentTypeController } from "src/controller/employment-type.controller";
import { Employmenttype001mb } from "src/entity/Employmenttype001mb.entity";
import { EmploymentTypeService } from "src/service/employment-type.service";


@Module({
    imports: [TypeOrmModule.forFeature([Employmenttype001mb])],
    providers: [EmploymentTypeService],
    controllers: [EmploymentTypeController]
})

export class EmploymentTypeModule { }