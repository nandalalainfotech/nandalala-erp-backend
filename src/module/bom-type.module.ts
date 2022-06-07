import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BomTypeController } from 'src/controller/bom-type.controller';
import { Bomtype001mb } from 'src/entity/Bomtype001mb.entity';
import { BomTypeService } from 'src/service/bom-type.service';

@Module({
    imports: [TypeOrmModule.forFeature([Bomtype001mb])],
    providers: [BomTypeService],
    controllers: [BomTypeController],
})
export class BomTypeModule { }
