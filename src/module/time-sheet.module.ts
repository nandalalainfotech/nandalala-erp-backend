import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TimeSheetController } from 'src/controller/time-sheet.controller';
import { Dailytimesheet001mb } from 'src/entity/Dailytimesheet001mb.entity';
import { TimeSheetService } from 'src/service/time-sheet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dailytimesheet001mb])],
  providers: [TimeSheetService],
  controllers: [TimeSheetController],
})
export class TimeSheetModule {}
