import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsLandCostController } from 'src/controller/tools-landcost.controller';
import { Landcostvouch001mb } from 'src/entity/Landcostvouch001mb.entity';
import { ToolsLandCostService } from 'src/service/tool-landcost.service';

@Module({
    imports: [TypeOrmModule.forFeature([Landcostvouch001mb])],
    providers: [ToolsLandCostService],
    controllers: [ToolsLandCostController],
})
export class ToolsLandCostVoutureModule { }
