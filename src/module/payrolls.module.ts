import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayRollsController } from 'src/controller/payrolls.controller';
import { Payroll001mb } from 'src/entity/Payroll001mb.entity';
import { PayRollsService } from 'src/service/payrolls.service';
@Module({
  imports: [TypeOrmModule.forFeature([Payroll001mb])],
  providers: [PayRollsService],
  controllers: [PayRollsController],
})
export class PayRollsModule {}
