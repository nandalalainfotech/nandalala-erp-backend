import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOpeningController } from 'src/controller/job-opening.controller';
import { OfferLetterController } from 'src/controller/offer-letter.controller';
import { Recruitoffer001mb } from 'src/entity/Recruitoffer001mb.entity';
import { Recruitopening001mb } from 'src/entity/Recruitopening001mb.entity';
import { JobOpeningService } from 'src/service/job-opening.service';
import { OfferLetterService } from 'src/service/offer-letter.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitoffer001mb])],
    providers: [OfferLetterService],
    controllers: [OfferLetterController],
})
export class OfferLetterModule { }