import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveTypeController } from 'src/controller/leave-type.controller';
import { Leavetype001mb } from 'src/entity/Leavetype001mb.entity';
import { LeaveTypeService } from 'src/service/leave-type.service';

@Module({
  imports: [TypeOrmModule.forFeature([Leavetype001mb])],
  providers: [LeaveTypeService],
  controllers: [LeaveTypeController],
})
export class LeaveTypeModule {}
