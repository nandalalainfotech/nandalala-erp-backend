import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SalesTaxController } from "src/controller/sales-taxes.controller";
import { Salestaxesandtemplates001mb } from "src/entity/Salestaxesandtemplates001mb.entity";
import { SalesTaxService } from "src/service/sales-taxes.service";

@Module({
    imports: [TypeOrmModule.forFeature([Salestaxesandtemplates001mb])],
    providers: [SalesTaxService],
    controllers: [SalesTaxController],
})
export class SalesTaxModule { }