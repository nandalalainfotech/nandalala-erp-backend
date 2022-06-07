import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOpeningController } from 'src/controller/job-opening.controller';
import { Recruitopening001mb } from 'src/entity/Recruitopening001mb.entity';
import { JobOpeningService } from 'src/service/job-opening.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitopening001mb])],
    providers: [JobOpeningService],
    controllers: [JobOpeningController],
})
export class JobOpeningModule { }