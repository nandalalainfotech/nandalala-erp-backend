import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockBalanceController } from "src/controller/stock-balance.controller";
import { Stkrepbalance001mb } from "src/entity/Stkrepbalance001mb.entity";
import { StockBalanceService } from "src/service/stock-balance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepbalance001mb])],
    providers: [StockBalanceService],
    controllers: [StockBalanceController],
})
export class StockBalanceModule { }
