import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrmRepMiniTimeController } from 'src/controller/crm-rep-minitime.controller';
import { Crmmintoresp001mb } from 'src/entity/Crmmintoresp001mb.entity';
import { CrmRepMiniTimeService } from 'src/service/crm-rep-minitime.service';

@Module({
    imports: [TypeOrmModule.forFeature([Crmmintoresp001mb])],
    providers: [CrmRepMiniTimeService],
    controllers: [CrmRepMiniTimeController],
})
export class CrmRepMiniTimeModule { }
