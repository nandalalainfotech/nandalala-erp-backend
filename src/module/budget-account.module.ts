import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetAccountController } from "src/controller/budget-account.controller";
import { Budgetaccounttype001mb } from "src/entity/Budgetaccounttype001mb.entity";
import { BudgetAccountService } from "src/service/budget-account.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budgetaccounttype001mb])],
    providers: [BudgetAccountService],
    controllers: [BudgetAccountController]
})

export class BudgetAccountModule {}