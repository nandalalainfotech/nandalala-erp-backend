import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrmatReqtController } from 'src/controller/prmat-req.controller';
import { Prmatreq001mb } from 'src/entity/Prmatreq001mb.entity';
import { PrmatReqService } from 'src/service/prmat-req.service';

@Module({
  imports: [TypeOrmModule.forFeature([Prmatreq001mb])],
  providers: [PrmatReqService],
  controllers: [PrmatReqtController],
})
export class PrmatReqtModule {}
