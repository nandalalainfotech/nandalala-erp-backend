import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemGroupController } from "src/controller/item-group.controller";
import { Itemgroup001mb } from "src/entity/Itemgroup001mb.entity";
import { ItemGroupService } from "src/service/item-group.service";

@Module({
    imports: [TypeOrmModule.forFeature([Itemgroup001mb])],
    providers: [ItemGroupService],
    controllers: [ItemGroupController],
})
export class ItemGroupModule { }
