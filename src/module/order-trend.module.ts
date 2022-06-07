import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderTrendController } from "src/controller/order-trend.controller";
import { Delnotetrends001mb } from "src/entity/Delnotetrends001mb.entity";
import { OrderTrendService } from "src/service/order-trend.service";


@Module({
    imports: [TypeOrmModule.forFeature([Delnotetrends001mb])],
    providers: [OrderTrendService],
    controllers: [OrderTrendController]
})

export class OrderTrendModule {}