import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RelievingLetterController } from 'src/controller/relieving-letter.controller';

import { Recruitrelieving001mb } from 'src/entity/Recruitrelieving001mb.entity';
import { RelievingLetterService } from 'src/service/relieving-letter.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitrelieving001mb])],
    providers: [RelievingLetterService],
    controllers: [RelievingLetterController],
})
export class RelievingLetterModule { }