import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesInvoiceController } from 'src/controller/sales-invoice.controller';
import { Grossprofit001mb } from 'src/entity/Grossprofit001mb.entity';
import { SalesInvoiceService } from 'src/service/sales-invoice.service';

@Module({
    imports: [TypeOrmModule.forFeature([Grossprofit001mb])],
    providers: [SalesInvoiceService],
    controllers: [SalesInvoiceController],
})
export class SalesInvoiceModule { }