import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockLedgerController } from "src/controller/stock-ledger.controller";
import { Stkrepledger001mb } from "src/entity/Stkrepledger001mb.entity";
import { StockLedgerService } from "src/service/stock-ledger.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepledger001mb])],
    providers: [StockLedgerService],
    controllers: [StockLedgerController],
})
export class StockLedgerModule { }
