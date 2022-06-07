import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TrailBalancecontroller } from "src/controller/trailbalance.controller";
import { Trialbalance001mb } from "src/entity/Trialbalance001mb.entity";
import { TrailBalanceservice } from "src/service/trailbalance.service";

@Module({
    imports: [TypeOrmModule.forFeature([Trialbalance001mb])],
    providers: [TrailBalanceservice],
    controllers: [TrailBalancecontroller],
  })
  export class TrailbalanceModule {}    