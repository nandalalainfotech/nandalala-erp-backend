import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveApplicationController } from 'src/controller/leave-application.controller';
import { Leaveapp001mb } from 'src/entity/Leaveapp001mb.entity';
import { LeaveApplicationService } from 'src/service/leave-application.service';

@Module({
  imports: [TypeOrmModule.forFeature([Leaveapp001mb])],
  providers: [LeaveApplicationService],
  controllers: [LeaveApplicationController],
})
export class LeaveApplicationModule {}
