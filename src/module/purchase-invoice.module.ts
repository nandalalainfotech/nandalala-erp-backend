import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseInvoiceController } from 'src/controller/purchase-invoice.controller';
import { Grossprofit001mb } from 'src/entity/Grossprofit001mb.entity';
import { PurchaseInvoiceService } from 'src/service/purchase-invoice.service';

@Module({
    imports: [TypeOrmModule.forFeature([Grossprofit001mb])],
    providers: [PurchaseInvoiceService],
    controllers: [PurchaseInvoiceController],
})
export class PurchaseInvoiceModule { }