import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProjectQuantityController } from "src/controller/projected-quantity.controller";
import { Stkrepproject001mb } from "src/entity/Stkrepproject001mb.entity";
import { ProjectQuantityService } from "src/service/projected-quantity.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stkrepproject001mb])],
    providers: [ProjectQuantityService],
    controllers: [ProjectQuantityController],
  })
  export class ProjectQuantityModule {}
  