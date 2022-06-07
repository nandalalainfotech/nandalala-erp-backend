import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CustomerController } from "src/controller/customer.controller";
import { Customerdetails001mb } from "src/entity/Customerdetails001mb.entity";
import { CustomerService } from "src/service/customer.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customerdetails001mb])],
    providers: [CustomerService],
    controllers: [CustomerController],
})
export class CustomerModule { }