import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmOpportunityController } from "src/controller/crm-opportunity.controller";
import { Crmspoppo001mb } from "src/entity/Crmspoppo001mb.entity";
import { CrmOpportunityService } from "src/service/crm-opportunity.service";


@Module({
    imports: [TypeOrmModule.forFeature([Crmspoppo001mb])],
    providers: [CrmOpportunityService],
    controllers: [CrmOpportunityController]
})

export class CrmOpportunityModule {}