import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppraisalController } from "src/controller/appraisal.controller";
import { Appraisal001mb } from "src/entity/Appraisal001mb.entity";
import { AppraisalService } from "src/service/appraisal.service";

@Module ({
    imports: [TypeOrmModule.forFeature([Appraisal001mb])],
    providers: [AppraisalService],
    controllers: [AppraisalController]
})

export class AppraisalModule {}