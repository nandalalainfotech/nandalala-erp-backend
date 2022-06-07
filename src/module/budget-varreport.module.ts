import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BudgeVarReportControllers } from "src/controller/budget-varreport.controller";
import { Budgetvarreport001mb } from "src/entity/Budgetvarreport001mb.entity";
import { BudgeVarReportService } from "src/service/budget-varreport.service";

@Module({
    imports: [TypeOrmModule.forFeature([Budgetvarreport001mb])],
    providers: [BudgeVarReportService],
    controllers: [BudgeVarReportControllers]
})

export class BudgetVarReportModule {}