import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PurchaseReceiptController } from "src/controller/purchase-receipt.controller";
import { Stktranspurecpt001mb } from "src/entity/Stktranspurecpt001mb.entity";
import { PurchaseReceiptService } from "src/service/purchase-receipt.service";

@Module({
    imports: [TypeOrmModule.forFeature([Stktranspurecpt001mb])],
    providers: [PurchaseReceiptService],
    controllers: [PurchaseReceiptController]
})

export class PurchaseReceiptModule {}