import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierQuotController } from 'src/controller/supplier-quot.contoller';
import { Prsureq001mb } from 'src/entity/Prsureq001mb.entity';
import { SupplierQuotService } from 'src/service/supplier-quot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prsureq001mb])],
  providers: [SupplierQuotService],
  controllers: [SupplierQuotController],
})
export class SupplierQuotModule {}
