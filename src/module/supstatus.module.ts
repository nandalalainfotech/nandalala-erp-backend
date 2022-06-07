import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupStatusController } from 'src/controller/supstatus.controller';
import { Supstatus001mb } from 'src/entity/Supstatus001mb.entity';
import { SupStatusService } from 'src/service/supstatus.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supstatus001mb])],
  providers: [SupStatusService],
  controllers: [SupStatusController],
})
export class SupStatusModule {}