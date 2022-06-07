import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountsPayableController } from 'src/controller/accounts-payable.controller';
import { Accountspayable001mb } from 'src/entity/Accountspayable001mb.entity';
import { AccountspayableService } from 'src/service/accounts-payable.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accountspayable001mb])],
  providers: [AccountspayableService],
  controllers: [AccountsPayableController],
})
export class AccountsPayableModule {}
