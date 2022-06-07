import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetMovementController } from 'src/controller/asset-movement.controller';
import { Assetmovement001mb } from 'src/entity/Assetmovement001mb.entity';
import { AssetMovementService } from 'src/service/asset-movement.service';


@Module({
    imports: [TypeOrmModule.forFeature([Assetmovement001mb])],
    providers: [AssetMovementService],
    controllers: [AssetMovementController],
})
export class AssetMovementModule { }
