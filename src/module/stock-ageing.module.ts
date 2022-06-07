import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockAgeingController } from "src/controller/stock-ageing.controller";
import { Stkrepageing001mb } from "src/entity/Stkrepageing001mb.entity";
import { StockAgeingService } from "src/service/stock-ageing.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepageing001mb])],
    providers: [StockAgeingService],
    controllers: [StockAgeingController],
})
export class StockAgeingModule { }
