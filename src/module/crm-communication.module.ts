import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmCommunicationController } from 'src/controller/crm-communication.controller';
import { Communication001mb } from 'src/entity/Communication001mb.entity';
import { CrmCommunicationService } from 'src/service/crm-communication.service';

@Module({
  imports: [TypeOrmModule.forFeature([Communication001mb])],
  providers: [CrmCommunicationService],
  controllers: [CrmCommunicationController],
})
export class CrmCommunicationModule {}
