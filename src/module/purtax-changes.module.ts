import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurTaxChangesController } from "src/controller/purtax-changes.controller";
import { Purtaxcharges001mb } from "src/entity/Purtaxcharges001mb.entity";
import { PurTaxChangesService } from "src/service/purtax-changes.service";

@Module({
    imports: [TypeOrmModule.forFeature([Purtaxcharges001mb])],
    providers: [PurTaxChangesService],
    controllers: [PurTaxChangesController],
  })
  export class PurTaxChangesModule {}