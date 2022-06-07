import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccCashFlowController } from 'src/controller/acccashflow.controller';
import { Acccashflow001mb } from 'src/entity/Acccashflow001mb.entity';
import { AccCashFlowService } from 'src/service/acccashflow.service';

@Module({
    imports: [TypeOrmModule.forFeature([Acccashflow001mb])],
    providers: [AccCashFlowService],
    controllers: [AccCashFlowController],
  })
  export class AcccashflowtModule {}