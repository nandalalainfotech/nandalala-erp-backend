import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerLoyaltyController } from "src/controller/customer-acqustion-loyalty.controller";
import { Customeracquisition001mb } from "src/entity/Customeracquisition001mb.entity";
import { CustomerLoyaltyService } from "src/service/customer-acqustion-loyalty.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customeracquisition001mb])],
    providers: [CustomerLoyaltyService],
    controllers: [CustomerLoyaltyController],
})
export class CustomerLoyaltyModule { }