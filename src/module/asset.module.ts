import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AssetController } from "src/controller/asset.controller";
import { Asset001mb } from "src/entity/Asset001mb.entity";
import { AssetService } from "src/service/asset.service";

@Module({
    imports: [TypeOrmModule.forFeature([Asset001mb])],
    providers: [AssetService],
    controllers: [AssetController],
})
export class AssetModule { }
