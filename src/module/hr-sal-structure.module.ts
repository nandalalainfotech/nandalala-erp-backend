import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrSalaryStructureController } from 'src/controller/hr-sal-structure.controller';
import { Salarystructure001mb } from 'src/entity/Salarystructure001mb.entity';
import { HrSalaryStructureService } from 'src/service/hr-sal-structure.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salarystructure001mb])],
  providers: [HrSalaryStructureService],
  controllers: [HrSalaryStructureController],
})
export class HrSalStructureModule {}
