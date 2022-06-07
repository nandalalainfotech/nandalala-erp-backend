import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdBundleController } from "src/controller/prod-bundle.controller";
import { Prodbundle001mb } from "src/entity/Prodbundle001mb.entity";
import { ProdBundleService } from "src/service/prod-bundle.service";

@Module({
    imports: [TypeOrmModule.forFeature([Prodbundle001mb])],
    providers: [ProdBundleService],
    controllers: [ProdBundleController],
})
export class ProdBundleModule { }
