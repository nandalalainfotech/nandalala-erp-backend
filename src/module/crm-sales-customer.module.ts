import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CrmSalesCustomerController } from "src/controller/crm-sales-customer.controller";
import { Crmspcust001mb } from "src/entity/Crmspcust001mb.entity";
import { CrmSalesCustomerService } from "src/service/crm-sales-customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Crmspcust001mb])],
    providers: [CrmSalesCustomerService],
    controllers: [CrmSalesCustomerController]
})

export class CrmSalesCustomerModule {}