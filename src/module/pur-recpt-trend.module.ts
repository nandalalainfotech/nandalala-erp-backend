import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurRecptTrendController } from "src/controller/pur-recpt-trend.controller";
import { Purecpttrend001mb } from "src/entity/Purecpttrend001mb.entity";
import { PurRecptTrendService } from "src/service/pur-recpt-trend.service";

@Module({
    imports: [TypeOrmModule.forFeature([Purecpttrend001mb])],
    providers: [PurRecptTrendService],
    controllers: [PurRecptTrendController]
})

export class PurRecptTrendModule {}