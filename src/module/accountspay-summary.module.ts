import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsPaySummaryController } from 'src/controller/accountspay-summary.controller';
import { Accountspayable001mb } from 'src/entity/Accountspayable001mb.entity';
import { AccountspaySummaryService } from 'src/service/accountspay-summary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountspayable001mb])],
  providers: [AccountspaySummaryService],
  controllers: [AccountsPaySummaryController],
})
export class AccountsPayableSummaryModule {}
