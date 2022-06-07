import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AccProfitLossController } from "src/controller/accprofitloss.controller";
import { Accprofitlossstatement001mb } from "src/entity/Accprofitlossstatement001mb.entity";
import { AccProfitLossService } from "src/service/accprofitloss.service";

@Module({
    imports: [TypeOrmModule.forFeature([Accprofitlossstatement001mb])],
    providers: [AccProfitLossService],
    controllers: [AccProfitLossController],
  })
  export class AccprofitlossModule {}