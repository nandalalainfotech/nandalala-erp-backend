import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrreqQuotController } from 'src/controller/prreq-quot.controller';
import { Prreqquot001mb } from 'src/entity/Prreqquot001mb.entity';
import { PrreqQuotService } from 'src/service/prreq-quot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prreqquot001mb])],
  providers: [PrreqQuotService],
  controllers: [PrreqQuotController],
})
export class PrreqQuotModule {}
