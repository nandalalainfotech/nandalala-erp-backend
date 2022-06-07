import { SalesorderDTO } from "src/dto/Salesorder.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("Itemid", ["itemid"], {})
@Index("Orderid", ["orderid"], {})
@Entity("salesorder001mb")
export class Salesorder001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "Sorder" })
    sorder: number;

    @Column("varchar", { name: "Customername", length: 50 })
    customername: string;

    @Column("varchar", { name: "Cpurchaseorder", nullable: true, length: 60 })
    cpurchaseorder: string | null;

    @Column("varchar", { name: "Statusname", nullable: true, length: 255 })
    statusname: string | null;

    @Column("int", { name: "Itemid", nullable: true })
    itemid: number | null;

    @Column("int", { name: "Orderid", nullable: true })
    orderid: number | null;

    @Column("varchar", { name: "Itemcode", nullable: true, length: 40 })
    itemcode: string | null;

    @Column("varchar", { name: "Ordername", nullable: true, length: 255 })
    ordername: string | null;

    @Column("int", { name: "Statusid", nullable: true })
    statusid: number | null;

    @Column("datetime", { name: "Sdeliverydate", nullable: true })
    sdeliverydate: Date | null;

    @Column("datetime", { name: "Sorderdate", nullable: true })
    sorderdate: Date | null;

    setProperties(salesorderDTO: SalesorderDTO) {
        this.sorder = salesorderDTO.sorder;
        this.customername = salesorderDTO.customername;
        this.cpurchaseorder = salesorderDTO.cpurchaseorder;
        this.statusname = salesorderDTO.statusname;
        this.itemid = salesorderDTO.itemid;
        this.orderid = salesorderDTO.orderid;
        this.itemcode = salesorderDTO.itemcode;
        this.ordername = salesorderDTO.ordername;
        this.statusid = salesorderDTO.statusid;
        this.sdeliverydate = salesorderDTO.sdeliverydate;
        this.sorderdate = salesorderDTO.sorderdate;
        this.insertUser = salesorderDTO.insertUser;
        this.insertDatetime = salesorderDTO.insertDatetime;
        this.updatedUser = salesorderDTO.updatedUser;
        this.updatedDatetime = salesorderDTO.updatedDatetime;
    }
}
