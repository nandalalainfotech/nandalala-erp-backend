import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountChartController } from 'src/controller/account-chart.controller';
import { Accountchart001mb } from 'src/entity/Accountchart001mb.entity';
import { AccountChartService } from 'src/service/account-chart.service';

@Module({
    imports: [TypeOrmModule.forFeature([Accountchart001mb])],
    providers: [AccountChartService],
    controllers: [AccountChartController],
})
export class AccountChartModule { }
