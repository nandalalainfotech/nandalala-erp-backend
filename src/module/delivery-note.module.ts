import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeliveryNoteController } from "src/controller/delivery-note.controller";
import { Stktransdeliver001mb } from "src/entity/Stktransdeliver001mb.entity";
import { DeliveryNoteService } from "src/service/delivery-note.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stktransdeliver001mb])],
    providers: [DeliveryNoteService],
    controllers: [DeliveryNoteController]
})

export class DeliveryNoteModule {}