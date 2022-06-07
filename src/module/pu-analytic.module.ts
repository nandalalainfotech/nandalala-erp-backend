import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PuAnalyticController } from "src/controller/pu-analytic.controller";
import { Puranalytics001mb } from "src/entity/Puranalytics001mb.entity";
import { PuAnalyticService } from "src/service/pu-analytic.service";

@Module({
    imports: [TypeOrmModule.forFeature([Puranalytics001mb])],
    providers: [PuAnalyticService],
    controllers: [PuAnalyticController]
})

export class PuAnalyticModule {}