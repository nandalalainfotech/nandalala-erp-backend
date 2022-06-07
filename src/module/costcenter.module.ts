import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CostCenterController } from "src/controller/costcenter.controller";
import { Costcenter001mb } from "src/entity/Costcenter001mb.entity";
import { CostCenterService } from "src/service/costcenter.service";

@Module({
    imports: [TypeOrmModule.forFeature([Costcenter001mb])],
    providers: [CostCenterService],
    controllers: [CostCenterController]
})

export class CostCenterModule {}