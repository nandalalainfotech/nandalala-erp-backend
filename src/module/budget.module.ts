import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgetController } from "src/controller/budget.controller";
import { Budget001mb } from "src/entity/Budget001mb.entity";
import { BudgetService } from "src/service/budget.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budget001mb])],
    providers: [BudgetService],
    controllers: [BudgetController]
})

export class BudgetModule {}