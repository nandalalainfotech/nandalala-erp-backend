import { StockentryDTO } from "src/dto/Stockentry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("stockentry001mb")
export class Stockentry001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "stockid" })
    stockid: number;

    @Column("varchar", { name: "materialrequest", length: 30 })
    materialrequest: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("int", { name: "Quantity", nullable: true })
    quantity: number | null;

    @Column("decimal", { name: "TransferedQty", precision: 3, scale: 1 })
    transferedQty: string;

    @Column("decimal", { name: "Qtytotransfer", precision: 3, scale: 1 })
    qtytotransfer: string;

    @Column("varchar", { name: "description", length: 30 })
    description: string;

    @Column("varchar", { name: "company", length: 40 })
    company: string;

    @Column("int", { name: "itemid", unsigned: true })
    itemid: number;

    setProperties(stockentryDTO: StockentryDTO) {
        this.stockid = stockentryDTO.stockid;
        this.materialrequest = stockentryDTO.materialrequest;
        this.date = stockentryDTO.date;
        this.quantity = stockentryDTO.quantity;
        this.transferedQty = stockentryDTO.transferedQty;
        this.qtytotransfer = stockentryDTO.qtytotransfer;
        this.description = stockentryDTO.description;
        this.company = stockentryDTO.company;
        this.itemid = stockentryDTO.itemid;
        this.insertUser = stockentryDTO.insertUser;
        this.insertDatetime = stockentryDTO.insertDatetime;
        this.updatedUser = stockentryDTO.updatedUser;
        this.updatedDatetime = stockentryDTO.updatedDatetime;
    }
}
