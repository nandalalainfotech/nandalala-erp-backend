import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrSalComponentController } from 'src/controller/hr-sal-component.controller';
import { Salarycomponent001mb } from 'src/entity/Salarycomponent001mb.entity';
import { HrSalComponentService } from 'src/service/hr-sal-component.service';

@Module({
  imports: [TypeOrmModule.forFeature([Salarycomponent001mb])],
  providers: [HrSalComponentService],
  controllers: [HrSalComponentController],
})
export class HrSalaryComponentModule {}
