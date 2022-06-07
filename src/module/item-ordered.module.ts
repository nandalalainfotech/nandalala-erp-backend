import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemOrderedController } from "src/controller/item-ordered.controller";
import { Reqitemorder001mb } from "src/entity/Reqitemorder001mb.entity";
import { ItemOrderedService } from "src/service/item-ordered.service";

@Module({
    imports: [TypeOrmModule.forFeature([Reqitemorder001mb])],
    providers: [ItemOrderedService],
    controllers: [ItemOrderedController],
})
export class ItemOrderedModule { }
