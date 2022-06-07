import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DelNoteTrendController } from "src/controller/del-note-trend.controller";
import { Delnotetrends001mb } from "src/entity/Delnotetrends001mb.entity";
import { DelNoteTrendService } from "src/service/del-note-trend.service";

@Module({
    imports: [TypeOrmModule.forFeature([Delnotetrends001mb])],
    providers: [DelNoteTrendService],
    controllers: [DelNoteTrendController]
})

export class DelNoteTrendModule {}