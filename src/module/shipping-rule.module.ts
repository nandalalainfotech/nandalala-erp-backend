import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ShippingRuleController } from "src/controller/shipping-rule.controller";
import { Shippingrule001mb } from "src/entity/Shippingrule001mb.entity";
import { ShippingRuleService } from "src/service/shipping-rule.service";

@Module({
    imports: [TypeOrmModule.forFeature([Shippingrule001mb])],
    providers: [ShippingRuleService],
    controllers: [ShippingRuleController],
  })
  export class ShippingRuleModule {}
  