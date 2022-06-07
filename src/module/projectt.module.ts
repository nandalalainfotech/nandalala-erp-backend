import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjecttController } from "src/controller/projectt.controller";
import { Project001mb } from "src/entity/Project001mb.entity";
import { ProjecttService } from "src/service/projectt.service";

@Module({
    imports: [TypeOrmModule.forFeature([Project001mb])],
    providers: [ProjecttService],
    controllers: [ProjecttController]
})

export class ProjecttModule {}