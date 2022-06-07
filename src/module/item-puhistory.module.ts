import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemPuhistoryController } from "src/controller/item-puhistory.controller";
import { Itempuhist001mb } from "src/entity/Itempuhist001mb.entity";
import { ItemPuhistoryService } from "src/service/item-puhistory.service";



@Module({
    imports: [TypeOrmModule.forFeature([Itempuhist001mb])],
    providers: [ItemPuhistoryService],
    controllers: [ItemPuhistoryController],
})
export class ItemPuhistoryModule { }
