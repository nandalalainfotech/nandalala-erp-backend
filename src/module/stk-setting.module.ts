import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockSettingController } from 'src/controller/stk-setting.controller';
import { Stksettings001mb } from 'src/entity/Stksettings001mb.entity';
import { StockSettingService } from 'src/service/stk-setting.service';

@Module({
    imports: [TypeOrmModule.forFeature([Stksettings001mb])],
    providers: [StockSettingService],
    controllers: [StockSettingController],
})
export class StockSettingModule { }