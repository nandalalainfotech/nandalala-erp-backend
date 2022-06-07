import { PrreqquotDTO } from "src/dto/Prreqquot.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prreqquot001mb")
export class Prreqquot001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prqId" })
    prqId: number;

    @Column("varchar", { name: "rqSeries", length: 40 })
    rqSeries: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "supplier", length: 40 })
    supplier: string;

    @Column("varchar", { name: "emailId", length: 60 })
    emailId: string;

    @Column("varchar", { name: "contact", length: 50 })
    contact: string;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("datetime", { name: "requiredDate" })
    requiredDate: Date;

    @Column("varchar", { name: "quantity", length: 50 })
    quantity: string;

    @Column("varchar", { name: "warehouse", length: 50 })
    warehouse: string;

    setProperties(prreqquotDTO: PrreqquotDTO) {
        this.prqId = prreqquotDTO.prqId;
        this.rqSeries = prreqquotDTO.rqSeries;
        this.date = prreqquotDTO.date;
        this.supplier = prreqquotDTO.supplier;
        this.emailId = prreqquotDTO.emailId;
        this.contact = prreqquotDTO.contact;
        this.itemCode = prreqquotDTO.itemCode;
        this.requiredDate = prreqquotDTO.requiredDate;
        this.quantity = prreqquotDTO.quantity;
        this.warehouse = prreqquotDTO.warehouse;
        this.insertUser = prreqquotDTO.insertUser;
        this.insertDatetime = prreqquotDTO.insertDatetime;
        this.updatedUser = prreqquotDTO.updatedUser;
        this.updatedDatetime = prreqquotDTO.updatedDatetime;
    }
}
