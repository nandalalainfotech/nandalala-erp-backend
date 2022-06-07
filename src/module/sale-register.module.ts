import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalesRegisterController } from "src/controller/sale-register.cotroller";
import { Salesregister001mb } from "src/entity/Salesregister001mb.entity";
import { SalesRegisterService } from "src/service/sale-register.service";

@Module({
    imports: [TypeOrmModule.forFeature([Salesregister001mb])],
    providers: [SalesRegisterService],
    controllers: [SalesRegisterController],
})
export class SalesRegisterModule { }
