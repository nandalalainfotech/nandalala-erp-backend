import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplicantController } from 'src/controller/job-applicant.controller';
import { Recruitapplicant001mb } from 'src/entity/Recruitapplicant001mb.entity';
import { JobApplicantService } from 'src/service/job-applicant.service';


@Module({
    imports: [TypeOrmModule.forFeature([Recruitapplicant001mb])],
    providers: [JobApplicantService],
    controllers: [JobApplicantController],
})
export class JobApplicantModule { }