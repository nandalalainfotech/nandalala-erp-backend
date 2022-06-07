import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ItemRequestController } from "src/controller/item-request.controller";
import { Requestitembuy001mb } from "src/entity/Requestitembuy001mb.entity";
import { ItemRequestService } from "src/service/item-request.service";


@Module({
    imports: [TypeOrmModule.forFeature([Requestitembuy001mb])],
    providers: [ItemRequestService],
    controllers: [ItemRequestController],
})
export class ItemRequestModule { }
