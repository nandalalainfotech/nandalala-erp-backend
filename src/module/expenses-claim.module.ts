import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExpensesClaimsController } from "src/controller/expenses-claims.controller";
import { Expensesclm001mb } from "src/entity/Expensesclm001mb.entity";
import { ExpensesClaimsService } from "src/service/expenses-claims.service";

@Module({
    imports: [TypeOrmModule.forFeature([Expensesclm001mb])],
    providers: [ExpensesClaimsService],
    controllers: [ExpensesClaimsController]
})

export class ExpensesClaimsModule { }