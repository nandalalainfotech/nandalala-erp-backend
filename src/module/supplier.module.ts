import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierController } from 'src/controller/supplier.controller';
import { Supplier001mb } from 'src/entity/Supplier001mb.entity';
import { SupplierService } from 'src/service/supplier.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier001mb])],
  providers: [SupplierService],
  controllers: [SupplierController],
})
export class SupplierModule {}