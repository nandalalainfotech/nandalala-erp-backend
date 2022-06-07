import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderDetailsController } from "src/controller/order-details.controller";
import { Order001mb } from "src/entity/Order001mb.entity";
import { OrderDetailsService } from "src/service/order-details.service";

@Module({
    imports: [TypeOrmModule.forFeature([Order001mb])],
    providers: [OrderDetailsService],
    controllers: [OrderDetailsController]
})

export class OrderDetailsModule {}