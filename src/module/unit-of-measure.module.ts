import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitofMeasureController } from 'src/controller/unit-of-measure.controller';
import { Unitofmeasure001mb } from 'src/entity/Unitofmeasure001mb.entity';
import { UnitofMeasureService } from 'src/service/unit-of-measure.service';

@Module({
    imports: [TypeOrmModule.forFeature([Unitofmeasure001mb])],
    providers: [UnitofMeasureService],
    controllers: [UnitofMeasureController],
})
export class UnitofMeasureModule { }