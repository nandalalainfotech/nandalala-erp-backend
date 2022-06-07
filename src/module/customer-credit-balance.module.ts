import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Balancecontroller } from "src/controller/customer-credit-balance.controller";
import { Customercreditbalance001mb } from "src/entity/Customercreditbalance001mb.entity";
import { Balanceservice } from "src/service/customer-credit-balance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Customercreditbalance001mb])],
    providers: [Balanceservice],
    controllers: [Balancecontroller],
})

export class CustomerCreditBalanceModule { }