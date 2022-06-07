import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalseOrderController } from 'src/controller/salse-order.controller';
import { Salesorder001mb } from 'src/entity/Salesorder001mb.entity';
import { SalseOrderService } from 'src/service/Salse-Order.service';

@Module({
    imports: [TypeOrmModule.forFeature([Salesorder001mb])],
    providers: [SalseOrderService],
    controllers: [SalseOrderController],
})
export class SalseOrderModule { }