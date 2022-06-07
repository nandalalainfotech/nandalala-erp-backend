import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChequeprintTemplateController } from 'src/controller/chequeprint-template.controller';
import { Chequetemplate001mb } from 'src/entity/Chequetemplate001mb.entity';
import { ChequeprintTemplateService } from 'src/service/chequeprint-template.service';


@Module({
    imports: [TypeOrmModule.forFeature([Chequetemplate001mb])],
    providers: [ChequeprintTemplateService],
    controllers: [ChequeprintTemplateController],
})
export class ChequeprintTemplateModule { }
