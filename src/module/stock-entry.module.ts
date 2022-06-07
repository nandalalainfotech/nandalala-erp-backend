import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockEntryController } from "src/controller/stock-entry.controller";
import { Stktransentry001mb } from "src/entity/Stktransentry001mb.entity";
import { StockEntryService } from "src/service/stock-entry.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stktransentry001mb])],
    providers: [StockEntryService],
    controllers: [StockEntryController]
})

export class StockEntryModule {}