import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeriodclosingVoucherController } from 'src/controller/periodclosing-voucher.controller';
import { Periodclosingvoucher001mb } from 'src/entity/Periodclosingvoucher001mb.entity';
import { PeriodclosingVoucherService } from 'src/service/periodclosing-voucher.service';


@Module({
    imports: [TypeOrmModule.forFeature([Periodclosingvoucher001mb])],
    providers: [PeriodclosingVoucherService],
    controllers: [PeriodclosingVoucherController],
})
export class PeriodclosingVoucherModule { }

