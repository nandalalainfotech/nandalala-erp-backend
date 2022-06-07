import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseRegisterController } from "src/controller/purchase-register.controller";
import { Purchaseregister001mb } from "src/entity/Purchaseregister001mb.entity";
import { PurchaseRegisterService } from "src/service/purchase-register.service";

@Module({
    imports: [TypeOrmModule.forFeature([Purchaseregister001mb])],
    providers: [PurchaseRegisterService],
    controllers: [PurchaseRegisterController],
})
export class PurchaseRegisterModule { }
