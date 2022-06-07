import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { StockledgerDTO } from "src/dto/Stockledger.dto";
import { BaseEntity } from "./BaseEntity";

@Entity("stockledger001mb", { schema: "erpnextgeneration" })
export class Stockledger001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "item", length: 30 })
    item: string;

    @Column("varchar", { name: "itemname", length: 30 })
    itemname: string;

    @Column("varchar", { name: "itemgroup", length: 30 })
    itemgroup: string;

    @Column("varchar", { name: "brand", length: 30 })
    brand: string;

    @Column("varchar", { name: "description", length: 30 })
    description: string;

    @Column("varchar", { name: "warehouse", length: 30 })
    warehouse: string;

    @Column("varchar", { name: "stockuom", length: 30 })
    stockuom: string;

    @Column("int", { name: "qty" })
    qty: number;

    @Column("int", { name: "balanceqty" })
    balanceqty: number;

    @Column("int", { name: "incomingrate" })
    incomingrate: number;

    @Column("int", { name: "valuationrate" })
    valuationrate: number;

    @Column("int", { name: "balancevalue" })
    balancevalue: number;

    @Column("varchar", { name: "vouchertype", length: 30 })
    vouchertype: string;

    @Column("int", { name: "voucherno" })
    voucherno: number;

    @Column("int", { name: "batch" })
    batch: number;

    @Column("int", { name: "serialno" })
    serialno: number;

    @Column("varchar", { name: "company", length: 30 })
    company: string;

    setProperties(stockledgerDTO: StockledgerDTO) {
        this.id = stockledgerDTO.id;
        this.date = stockledgerDTO.date;
        this.item = stockledgerDTO.item;
        this.itemname = stockledgerDTO.itemname;
        this.itemgroup = stockledgerDTO.itemgroup;
        this.brand = stockledgerDTO.brand;
        this.description = stockledgerDTO.description;
        this.warehouse = stockledgerDTO.warehouse;
        this.stockuom = stockledgerDTO.stockuom;
        this.qty = stockledgerDTO.qty;
        this.balanceqty = stockledgerDTO.balanceqty;
        this.incomingrate = stockledgerDTO.incomingrate;
        this.valuationrate = stockledgerDTO.valuationrate;
        this.balancevalue = stockledgerDTO.balancevalue;
        this.vouchertype = stockledgerDTO.vouchertype;
        this.voucherno = stockledgerDTO.voucherno;
        this.batch = stockledgerDTO.batch;
        this.serialno = stockledgerDTO.serialno;
        this.company = stockledgerDTO.company;
        this.insertUser = stockledgerDTO.insertUser;
        this.insertDatetime = stockledgerDTO.insertDatetime;
        this.updatedUser = stockledgerDTO.updatedUser;
        this.updatedDatetime = stockledgerDTO.updatedDatetime;
    }
}
