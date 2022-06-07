import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockEntryController } from "src/controller/stock-entrys.controller";
import { Stockentry001mb } from "src/entity/Stockentry001mb.entity";
import { StockEntryService } from "src/service/stock-entrys.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stockentry001mb])],
    providers: [StockEntryService],
    controllers: [StockEntryController],
})
export class StockEntrysModule { }