import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PricingRuleController } from "src/controller/pricing-rule.controller";
import { Pricingrule001mb } from "src/entity/Pricingrule001mb.entity";
import { PricingRuleService } from "src/service/pricing-rule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Pricingrule001mb])],
    providers: [
        PricingRuleService
    ],
    controllers: [PricingRuleController],
})
export class PricingRuleModule { }
