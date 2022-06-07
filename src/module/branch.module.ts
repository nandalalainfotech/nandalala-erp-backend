import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BranchController } from "src/controller/branch.controller";
import { Branch001mb } from "src/entity/Branch001mb.entity";
import { BranchService } from "src/service/branch.service";

@Module({
    imports: [TypeOrmModule.forFeature([Branch001mb])],
    providers: [BranchService],
    controllers: [BranchController]
})

export class BranchModule { }