import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayementRequestController } from 'src/controller/payement-request.controller';
import { Paymentrequest001mb } from 'src/entity/Paymentrequest001mb.entity';
import { PayementRequestService } from 'src/service/payement-request.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paymentrequest001mb])],
  providers: [PayementRequestService],
  controllers: [PayementRequestController],
})
export class PayementRequestModule {}
