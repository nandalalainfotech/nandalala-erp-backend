import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from 'src/controller/brand.controller';
import { Brand001mb } from 'src/entity/Brand001mb.entity';
import { BrandService } from 'src/service/brand.service';

@Module({
    imports: [TypeOrmModule.forFeature([Brand001mb])],
    providers: [BrandService],
    controllers: [BrandController],
})
export class BrandModule { }