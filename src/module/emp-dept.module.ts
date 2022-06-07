import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmpDeptController } from "src/controller/emp-dept.controller";
import { Department001mb } from "src/entity/Department001mb.entity";
import { EmpDeptService } from "src/service/emp-dept.service";


@Module({
    imports: [TypeOrmModule.forFeature([Department001mb])],
    providers: [EmpDeptService],
    controllers: [EmpDeptController],
})
export class EmpDeptModule { }