import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerDetailController } from "src/controller/customer-detail.controller";
import { Customerdetails001mb } from "src/entity/Customerdetails001mb.entity";
import { CustomerDetailService } from "src/service/customer-detail.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customerdetails001mb])],
    providers: [CustomerDetailService],
    controllers: [CustomerDetailController]
})

export class CustomerDetailModule {}