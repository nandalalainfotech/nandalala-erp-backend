import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SupplierWiseAnalyticController } from "src/controller/supplier-wise-analytic.controller";
import { Swsanalytics001mb } from "src/entity/Swsanalytics001mb.entity";
import { SupplierWiseAnalyticService } from "src/service/supplier-wise-analytic.service";

@Module({
    imports: [TypeOrmModule.forFeature([Swsanalytics001mb])],
    providers: [SupplierWiseAnalyticService],
    controllers: [SupplierWiseAnalyticController]
})

export class SupplierWiseAnalyticModule {}