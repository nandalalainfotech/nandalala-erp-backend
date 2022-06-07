import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExperienceLetterController } from 'src/controller/experience-letter.controller';
import { Recruitworkingexperience001mb } from 'src/entity/Recruitworkingexperience001mb.entity';
import { ExperienceLetterService } from 'src/service/experience-letter.service';


@Module({
  imports: [TypeOrmModule.forFeature([Recruitworkingexperience001mb])],
  providers: [ExperienceLetterService],
  controllers: [ ExperienceLetterController],
})
export class  ExperienceLetterModule {}