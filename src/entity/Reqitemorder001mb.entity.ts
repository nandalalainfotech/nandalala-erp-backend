import { ReqitemorderDTO } from "src/dto/Reqitemorder.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("reqitemorder001mb")
export class Reqitemorder001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "mrsId" })
    mrsId: number;

    @Column("varchar", { name: "mrSeries", length: 50 })
    mrSeries: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("int", { name: "orderedqty", nullable: true })
    orderedqty: number | null;

    @Column("int", { name: "qtyrtoorder", nullable: true })
    qtyrtoorder: number | null;

    @Column("varchar", { name: "description", nullable: true, length: 150 })
    description: string | null;

    @Column("varchar", { name: "company", length: 40 })
    company: string;

    @Column("int", { name: "qtytoorder", nullable: true })
    qtytoorder: number | null;

    setProperties(reqitemorderDTO: ReqitemorderDTO) {
        this.mrsId = reqitemorderDTO.mrsId;
        this.mrSeries = reqitemorderDTO.mrSeries;
        this.date = reqitemorderDTO.date;
        this.itemCode = reqitemorderDTO.itemCode;
        this.quantity = reqitemorderDTO.quantity;
        this.orderedqty = reqitemorderDTO.orderedqty;
        this.qtyrtoorder = reqitemorderDTO.qtyrtoorder;
        this.description = reqitemorderDTO.description;
        this.company = reqitemorderDTO.company;
        this.qtytoorder = reqitemorderDTO.qtytoorder;
        this.insertUser = reqitemorderDTO.insertUser;
        this.insertDatetime = reqitemorderDTO.insertDatetime;
        this.updatedUser = reqitemorderDTO.updatedUser;
        this.updatedDatetime = reqitemorderDTO.updatedDatetime;
    }
}
