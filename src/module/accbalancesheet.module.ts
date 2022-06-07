import { Accbalancesheet001mb } from "src/entity/Accbalancesheet001mb.entity";
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccBalanceSheetservice } from "src/service/Accbalancesheet.service";
import { AccBalanceSheetcontroller } from "src/controller/Accbalancesheet.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Accbalancesheet001mb])],
    providers: [AccBalanceSheetservice],
    controllers: [AccBalanceSheetcontroller],
})
export class AccbalancesheetModule { }