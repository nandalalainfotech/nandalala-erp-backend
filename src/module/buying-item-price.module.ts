import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BuyingItemPriceController } from "src/controller/buying-item-price.controller";
import { Itemprice001mb } from "src/entity/Itemprice001mb.entity";
import { BuyingItemPriceService } from "src/service/buying-item-price.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemprice001mb])],
    providers: [BuyingItemPriceService],
    controllers: [BuyingItemPriceController],
})
export class BuyingItemPriceModule { }