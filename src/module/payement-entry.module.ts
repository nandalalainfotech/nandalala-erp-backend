import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PayementEntryController } from 'src/controller/payement-entry.controller';
import { Paymententry001mb } from 'src/entity/Paymententry001mb.entity';
import { PayementEntryService } from 'src/service/payement-entry.service';

@Module({
  imports: [TypeOrmModule.forFeature([Paymententry001mb])],
  providers: [PayementEntryService],
  controllers: [PayementEntryController],
})
export class PayementEntryModule {}
