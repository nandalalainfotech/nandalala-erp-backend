import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartmentController } from "src/controller/department.controller";
import { Department001mb } from "src/entity/Department001mb.entity";
import { DepartmentService } from "src/service/department.service";


@Module({
    imports: [TypeOrmModule.forFeature([Department001mb])],
    providers: [DepartmentService],
    controllers: [DepartmentController]
})

export class DepartmentModule { }