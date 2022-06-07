import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { PurchaseDTO } from "src/dto/Purchase.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("purchase001mb")
export class Purchase001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("datetime", { name: "Date", nullable: true })
    date: Date | null;

    @Column("int", { name: "grandtotal", nullable: true })
    grandtotal: number | null;

    @Column("varchar", { name: "status", nullable: true, length: 255 })
    status: string | null;

    @Column("varchar", { name: "supplier", nullable: true, length: 255 })
    supplier: string | null;

    @Column("varchar", { name: "supplieraddress", nullable: true, length: 255 })
    supplieraddress: string | null;

    setProperties(purchaseDTO: PurchaseDTO) {
        this.id = purchaseDTO.id;
        this.date = purchaseDTO.date;
        this.grandtotal = purchaseDTO.grandtotal;
        this.status = purchaseDTO.status;
        this.supplier = purchaseDTO.supplier;
        this.supplieraddress = purchaseDTO.supplieraddress;
        this.insertUser = purchaseDTO.insertUser;
        this.insertDatetime = purchaseDTO.insertDatetime;
        this.updatedUser = purchaseDTO.updatedUser;
        this.updatedDatetime = purchaseDTO.updatedDatetime;
    }
}
