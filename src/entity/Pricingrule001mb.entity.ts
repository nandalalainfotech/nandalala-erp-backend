import { PricingruleDTO } from "src/dto/Pricingrule.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("pricingrule001mb")
export class Pricingrule001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "priceruleid" })
    priceruleid: number;

    @Column("varchar", { name: "priceTitle", length: 50 })
    priceTitle: string;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("char", { name: "selling", length: 1 })
    selling: boolean;

    @Column("char", { name: "buying", length: 1 })
    buying: boolean;

    @Column("varchar", { name: "minQty", length: 20 })
    minQty: string;

    @Column("varchar", { name: "maxQty", length: 30 })
    maxQty: string;

    @Column("datetime", { name: "validFrom" })
    validFrom: Date;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    @Column("datetime", { name: "validUpto" })
    validUpto: Date;

    @Column("varchar", { name: "prordisc", length: 50 })
    prordisc: string;

    @Column("varchar", { name: "discprlist", nullable: true, length: 50 })
    discprlist: string | null;

    @Column("varchar", { name: "forprlist", nullable: true, length: 50 })
    forprlist: string | null;

    setProperties(pricingruleDTO: PricingruleDTO) {
        this.priceruleid = pricingruleDTO.priceruleid;
        this.priceTitle = pricingruleDTO.priceTitle;
        this.itemCode = pricingruleDTO.itemCode;
        this.selling = pricingruleDTO.selling;
        this.buying = pricingruleDTO.buying;
        this.minQty = pricingruleDTO.minQty;
        this.maxQty = pricingruleDTO.maxQty;
        this.validFrom = pricingruleDTO.validFrom;
        this.company = pricingruleDTO.company;
        this.validUpto = pricingruleDTO.validUpto;
        this.prordisc = pricingruleDTO.prordisc;
        this.discprlist = pricingruleDTO.discprlist;
        this.forprlist = pricingruleDTO.forprlist;
        this.insertUser = pricingruleDTO.insertUser;
        this.insertDatetime = pricingruleDTO.insertDatetime;
        this.updatedUser = pricingruleDTO.updatedUser;
        this.updatedDatetime = pricingruleDTO.updatedDatetime;
    }
}
