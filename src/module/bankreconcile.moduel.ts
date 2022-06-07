import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BankreConcileController } from "src/controller/bankreconcile.controller";
import { Bankreconcile001mb } from "src/entity/Bankreconcile001mb.entity";
import { BankreConcileService } from "src/service/bankreconcile.service";

@Module({
    imports: [TypeOrmModule.forFeature([Bankreconcile001mb])],
    providers: [BankreConcileService],
    controllers: [BankreConcileController],
  })
  export class BankreconcileModule {}