import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmRepLeadDetailsController } from 'src/controller/crm-reports-lead-details.controller';
import { Leaddetail001mb } from 'src/entity/Leaddetail001mb.entity';
import { CrmRepLeadDetailsService } from 'src/service/crm-reports-lead-details.servicee';

@Module({
  imports: [TypeOrmModule.forFeature([Leaddetail001mb])],
  providers: [CrmRepLeadDetailsService],
  controllers: [CrmRepLeadDetailsController],
})
export class CrmRepLeadDetailsModule {}
