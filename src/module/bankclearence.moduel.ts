import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BankClearenceController } from "src/controller/bankclearence.controller";
import { Bankclearance001mb } from "src/entity/Bankclearance001mb.entity";
import { BankClearenceService } from "src/service/bankclearence.service";

@Module({
    imports: [TypeOrmModule.forFeature([Bankclearance001mb])],
    providers: [BankClearenceService],
    controllers: [BankClearenceController],
  })
  export class BankClearenceModule {}    