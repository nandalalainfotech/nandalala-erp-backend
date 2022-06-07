import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeaveBlockController } from 'src/controller/leave-block.controller';
import { Lvblocklist001mb } from 'src/entity/Lvblocklist001mb.entity';
import { LeaveBlockService } from 'src/service/leave-block.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lvblocklist001mb])],
  providers: [LeaveBlockService],
  controllers: [LeaveBlockController],
})
export class LeaveBlockModule {}
