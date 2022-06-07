import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsrecSummaryController } from 'src/controller/accountsrec-summary.controller';
import { Accountsreceivable001mb } from 'src/entity/Accountsreceivable001mb.entity';
import { AccountsrecSummaryService } from 'src/service/accountsrec-summary.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountsreceivable001mb])],
  providers: [AccountsrecSummaryService],
  controllers: [AccountsrecSummaryController],
})
export class AccountsrecSummaryModule {}
