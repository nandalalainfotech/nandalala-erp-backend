import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TaxRuleController } from "src/controller/tax-rule.controller";
import { Taxrule001mb } from "src/entity/Taxrule001mb.entity";
import { TaxRuleService } from "src/service/tax-rule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Taxrule001mb])],
    providers: [TaxRuleService],
    controllers: [TaxRuleController],
  })
  export class TaxRuleModule {}
  