import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuppTypeController } from 'src/controller/supptype.controller';
import { Supptype001mb } from 'src/entity/Supptype001mb.entity';
import { SuppTypeService } from 'src/service/supptype.service';

@Module({
  imports: [TypeOrmModule.forFeature([Supptype001mb])],
  providers: [SuppTypeService],
  controllers: [SuppTypeController],
})
export class SuppTypeModule {}