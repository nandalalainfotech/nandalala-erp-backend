import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockSettingController } from 'src/controller/stk-setting.controller';
import { WareHouseController } from 'src/controller/ware-house.controller';
import { Stksettings001mb } from 'src/entity/Stksettings001mb.entity';
import { Warehouse001mb } from 'src/entity/Warehouse001mb.entity';
import { StockSettingService } from 'src/service/stk-setting.service';
import { WareHouseService } from 'src/service/ware-house.service';

@Module({
    imports: [TypeOrmModule.forFeature([Warehouse001mb])],
    providers: [WareHouseService],
    controllers: [WareHouseController],
})
export class WareHouseModule { }