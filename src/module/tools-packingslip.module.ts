import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToolsPackageSlipController } from 'src/controller/tools-packingslip.controller';
import { Packingslip001mb } from 'src/entity/Packingslip001mb.entity';
import { ToolsPackingSlipService } from 'src/service/tools-packingslip.service';

@Module({
    imports: [TypeOrmModule.forFeature([Packingslip001mb])],
    providers: [ToolsPackingSlipService],
    controllers: [ToolsPackageSlipController],
})
export class ToolsPackingSlipModule { }
    