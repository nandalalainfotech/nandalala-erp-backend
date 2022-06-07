import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PurchasereceiptDTO } from "src/dto/Purchasereceipt.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("purchasereceipt001mb")
export class Purchasereceipt001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "supplier", length: 30 })
    supplier: string;

    @Column("datetime", { name: "Date" })
    date: Date;

    @Column("varchar", { name: "supplieraddress", length: 30 })
    supplieraddress: string;

    @Column("int", { name: "grandtotal" })
    grandtotal: number;

    @Column("varchar", { name: "status", length: 50 })
    status: string;

    setProperties(purchasereceiptDTO: PurchasereceiptDTO) {
        this.id = purchasereceiptDTO.id;
        this.supplier = purchasereceiptDTO.supplier;
        this.date = purchasereceiptDTO.date;
        this.supplieraddress = purchasereceiptDTO.supplieraddress;
        this.grandtotal = purchasereceiptDTO.grandtotal;
        this.status = purchasereceiptDTO.status;
        this.insertUser = purchasereceiptDTO.insertUser;
        this.insertDatetime = purchasereceiptDTO.insertDatetime;
        this.updatedUser = purchasereceiptDTO.updatedUser;
        this.updatedDatetime = purchasereceiptDTO.updatedDatetime;
    }

}
