import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmTerritoryController } from 'src/controller/crm-territory.controller';
import { Territory001mb } from 'src/entity/Territory001mb.entity';
import { CrmTerritoryService } from 'src/service/crm-territory.service';

@Module({
  imports: [TypeOrmModule.forFeature([Territory001mb])],
  providers: [CrmTerritoryService],
  controllers: [CrmTerritoryController],
})
export class CrmTerritoryModule {}
