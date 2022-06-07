import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetMonthDistControllers } from "src/controller/budget-monthdist.controller";
import { Budgetmonthdist001mb } from "src/entity/Budgetmonthdist001mb.entity";
import { BudgetMonthDistService } from "src/service/budget-monthdist.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budgetmonthdist001mb])],
    providers: [BudgetMonthDistService],
    controllers: [BudgetMonthDistControllers]
})

export class BudgetMonthlyDistModule {}