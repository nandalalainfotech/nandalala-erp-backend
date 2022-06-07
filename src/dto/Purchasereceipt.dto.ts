import { IsNotEmpty } from "class-validator";
import { Purchasereceipt001mb } from "src/entity/Purchasereceipt001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PurchasereceiptDTO extends BaseDTO {
    id: number;

    @IsNotEmpty()
    supplier: string;

    @IsNotEmpty()
    date: Date;

    @IsNotEmpty()
    supplieraddress: string;

    @IsNotEmpty()
    grandtotal: number;

    @IsNotEmpty()
    status: string;

    setProperties(purchasereceipt001mb: Purchasereceipt001mb) {
        this.id = purchasereceipt001mb.id;
        this.supplier = purchasereceipt001mb.supplier;
        this.date = purchasereceipt001mb.date;
        this.supplieraddress = purchasereceipt001mb.supplieraddress;
        this.grandtotal = purchasereceipt001mb.grandtotal;
        this.status = purchasereceipt001mb.status;
        this.insertUser = purchasereceipt001mb.insertUser;
        this.insertDatetime = purchasereceipt001mb.insertDatetime;
        this.updatedUser = purchasereceipt001mb.updatedUser;
        this.updatedDatetime = purchasereceipt001mb.updatedDatetime;
    }
}
