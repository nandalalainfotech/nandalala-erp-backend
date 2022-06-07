import { TaxruleDTO } from "src/dto/Taxrule.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("taxrule001mb")
export class Taxrule001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id" })
    id: number;

    @Column("varchar", { name: "billingcity", nullable: true, length: 255 })
    billingcity: string | null;

    @Column("varchar", { name: "billingcountry", nullable: true, length: 255 })
    billingcountry: string | null;

    @Column("varchar", { name: "billingstate", nullable: true, length: 255 })
    billingstate: string | null;

    @Column("varchar", { name: "customer", nullable: true, length: 255 })
    customer: string | null;

    @Column("datetime", { name: "fromdate", nullable: true })
    fromdate: Date | null;

    @Column("varchar", { name: "shippingcity", nullable: true, length: 255 })
    shippingcity: string | null;

    @Column("varchar", { name: "shippingcountry", nullable: true, length: 255 })
    shippingcountry: string | null;

    @Column("varchar", { name: "shippingstate", nullable: true, length: 255 })
    shippingstate: string | null;

    @Column("varchar", { name: "taxtemplate", nullable: true, length: 255 })
    taxtemplate: string | null;

    @Column("varchar", { name: "taxtype", nullable: true, length: 255 })
    taxtype: string | null;

    @Column("datetime", { name: "todate", nullable: true })
    todate: Date | null;

    setProperties(taxruleDTO: TaxruleDTO) {
        this.id = taxruleDTO.id;
        this.billingcity = taxruleDTO.billingcity;
        this.billingcountry = taxruleDTO.billingcountry;
        this.billingstate = taxruleDTO.billingstate;
        this.customer = taxruleDTO.customer;
        this.fromdate = taxruleDTO.fromdate;
        this.shippingcity = taxruleDTO.shippingcity;
        this.shippingcountry = taxruleDTO.shippingcountry;
        this.shippingstate = taxruleDTO.shippingstate;
        this.taxtemplate = taxruleDTO.taxtemplate;
        this.taxtype = taxruleDTO.taxtype;
        this.todate = taxruleDTO.todate;
        this.insertUser = taxruleDTO.insertUser;
        this.insertDatetime = taxruleDTO.insertDatetime;
        this.updatedUser = taxruleDTO.updatedUser;
        this.updatedDatetime = taxruleDTO.updatedDatetime;
    }
}
