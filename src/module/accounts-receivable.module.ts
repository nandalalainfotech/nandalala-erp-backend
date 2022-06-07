import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsReceivableController } from 'src/controller/accounts-receivable.controller';
import { Accountsreceivable001mb } from 'src/entity/Accountsreceivable001mb.entity';
import { AccountsreceivableService } from 'src/service/accounts-receivable.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountsreceivable001mb])],
  providers: [AccountsreceivableService],
  controllers: [AccountsReceivableController],
})
export class AccountsReceivableModule {}
