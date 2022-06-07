import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmSalesPipelineController } from "src/controller/crm-sales-pipeline.controller";
import { Crmsplead001mb } from "src/entity/Crmsplead001mb.entity";
import { CrmSalesPipelineService } from "src/service/crm-sales-pipeline.service";

@Module({
    imports: [TypeOrmModule.forFeature([Crmsplead001mb])],
    providers: [CrmSalesPipelineService],
    controllers: [CrmSalesPipelineController]
})

export class CrmSalesPipelineModule {}