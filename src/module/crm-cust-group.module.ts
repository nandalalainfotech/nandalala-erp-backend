import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmCustGroupController } from 'src/controller/crm-cust-group.controller';
import { Setupcugrp001mb } from 'src/entity/Setupcugrp001mb.entity';
import { CrmCustGroupService } from 'src/service/crm-cust-group.service';

@Module({
  imports: [TypeOrmModule.forFeature([Setupcugrp001mb])],
  providers: [CrmCustGroupService],
  controllers: [CrmCustGroupController],
})
export class CrmCustGroupModule {}
