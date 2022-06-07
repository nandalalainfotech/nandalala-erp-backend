import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalesItemController } from "src/controller/sales-item.controller";
import { Itemdt001mb } from "src/entity/Itemdt001mb.entity";
import { SalesItemService } from "src/service/sales-item.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemdt001mb])],
    providers: [SalesItemService],
    controllers: [SalesItemController],
})
export class SalesItemModule { }