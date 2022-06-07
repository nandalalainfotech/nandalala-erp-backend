import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MatchPaymentController } from "src/controller/matchpayment.controller";
import { Matchpayment001mb } from "src/entity/Matchpayment001mb.entity";
import { MatchPaymentService } from "src/service/matchpayment.service";

@Module({
    imports: [TypeOrmModule.forFeature([Matchpayment001mb])],
    providers: [MatchPaymentService],
    controllers: [MatchPaymentController],
})
export class MatchPaymentModule { }