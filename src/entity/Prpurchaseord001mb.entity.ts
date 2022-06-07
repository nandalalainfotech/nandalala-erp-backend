import { PrpurchaseordDTO } from "src/dto/Prpurchaseord.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("prpurchaseord001mb")
export class Prpurchaseord001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "proId" })
    proId: number;

    @Column("varchar", { name: "poSeries", length: 40 })
    poSeries: string;

    @Column("datetime", { name: "date" })
    date: Date;

    @Column("varchar", { name: "supplier", length: 40 })
    supplier: string;

    @Column("varchar", { name: "supplyrawmat", length: 40 })
    supplyrawmat: string;

    @Column("varchar", { name: "itemCode", length: 40 })
    itemCode: string;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("decimal", { name: "rate", precision: 12, scale: 4 })
    rate: string;

    @Column("decimal", { name: "amount", precision: 12, scale: 4 })
    amount: string;

    @Column("varchar", { name: "prtype", length: 40 })
    prtype: string;

    @Column("int", { name: "accountHead", nullable: true })
    accountHead: number | null;

    @Column("decimal", { name: "quotrate", precision: 12, scale: 4 })
    quotrate: string;

    @Column("int", { name: "taxandChg" })
    taxandChg: number;

    setProperties(prpurchaseordDTO: PrpurchaseordDTO) {
        this.proId = prpurchaseordDTO.proId;
        this.poSeries = prpurchaseordDTO.poSeries;
        this.date = prpurchaseordDTO.date;
        this.supplier = prpurchaseordDTO.supplier;
        this.supplyrawmat = prpurchaseordDTO.supplyrawmat;
        this.itemCode = prpurchaseordDTO.itemCode;
        this.quantity = prpurchaseordDTO.quantity;
        this.rate = prpurchaseordDTO.rate;
        this.amount = prpurchaseordDTO.amount;
        this.prtype = prpurchaseordDTO.prtype;
        this.accountHead = prpurchaseordDTO.accountHead;
        this.quotrate = prpurchaseordDTO.quotrate;
        this.taxandChg = prpurchaseordDTO.taxandChg;
        this.insertUser = prpurchaseordDTO.insertUser;
        this.insertDatetime = prpurchaseordDTO.insertDatetime;
        this.updatedUser = prpurchaseordDTO.updatedUser;
        this.updatedDatetime = prpurchaseordDTO.updatedDatetime;
    }
}
