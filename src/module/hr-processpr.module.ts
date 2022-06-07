import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HrProcessPrController } from 'src/controller/hr-processpr.controller';
import { Processpr001mb } from 'src/entity/Processpr001mb.entity';
import { HrProcessPrService } from 'src/service/hr-processpr.service';

@Module({
  imports: [TypeOrmModule.forFeature([Processpr001mb])],
  providers: [HrProcessPrService],
  controllers: [HrProcessPrController],
})
export class HrProcessPrModule {}
