import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppraisalTemplateController } from "src/controller/appraisal-template.controller";
import { Apprtemp001mb } from "src/entity/Apprtemp001mb.entity";
import { AppraisalTemplateService } from "src/service/appraisal-template.service";

@Module({
    imports: [TypeOrmModule.forFeature([Apprtemp001mb])],
    providers: [AppraisalTemplateService],
    controllers: [AppraisalTemplateController]
})

export class AppraisalTemplateModule {}