import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DesignationController } from "src/controller/designation.controller";
import { Designation001mb } from "src/entity/Designation001mb.entity";
import { DesignationService } from "src/service/designation.service";


@Module({
    imports: [TypeOrmModule.forFeature([Designation001mb])],
    providers: [DesignationService],
    controllers: [DesignationController]
})

export class DesignationModule {}