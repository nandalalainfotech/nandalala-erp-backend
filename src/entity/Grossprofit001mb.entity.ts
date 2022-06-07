import { GrossprofitDTO } from "src/dto/Grossprofit.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("grossprofit001mb")
export class Grossprofit001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "salesinvoice", length: 45 })
    salesinvoice: string;

    @Column("varchar", { name: "customer", length: 45 })
    customer: string;

    @Column("datetime", { name: "postingdate" })
    postingdate: Date;

    @Column("varchar", { name: "itemname", length: 45 })
    itemname: string;

    @Column("varchar", { name: "description", length: 45 })
    description: string;

    @Column("varchar", { name: "warehouse", length: 45 })
    warehouse: string;

    @Column("varchar", { name: "project", length: 45 })
    project: string;

    @Column("int", { name: "currency" })
    currency: number;

    @Column("int", { name: "quantity", unsigned: true })
    quantity: number;

    @Column("int", { name: "averagesellingrate", unsigned: true })
    averagesellingrate: number;

    @Column("int", { name: "averagebuyingrate", unsigned: true })
    averagebuyingrate: number;

    @Column("int", { name: "sellingamount", unsigned: true })
    sellingamount: number;

    @Column("int", { name: "buyingamount", unsigned: true })
    buyingamount: number;

    @Column("int", { name: "grossprofit", unsigned: true })
    grossprofit: number;

    @Column("int", { name: "grosspercentage", unsigned: true })
    grosspercentage: number;

    setProperties(grossprofitDTO: GrossprofitDTO) {
        this.id = grossprofitDTO.id;
        this.salesinvoice = grossprofitDTO.salesinvoice;
        this.customer = grossprofitDTO.customer;
        this.postingdate = grossprofitDTO.postingdate;
        this.itemname = grossprofitDTO.itemname;
        this.description = grossprofitDTO.description;
        this.warehouse = grossprofitDTO.warehouse;
        this.project = grossprofitDTO.project;
        this.currency = grossprofitDTO.currency;
        this.quantity = grossprofitDTO.quantity;
        this.averagesellingrate = grossprofitDTO.averagesellingrate;
        this.averagebuyingrate = grossprofitDTO.averagebuyingrate;
        this.sellingamount = grossprofitDTO.sellingamount;
        this.buyingamount = grossprofitDTO.buyingamount;
        this.grossprofit = grossprofitDTO.grossprofit;
        this.grosspercentage = grossprofitDTO.grosspercentage;
        this.insertUser = grossprofitDTO.insertUser;
        this.insertDatetime = grossprofitDTO.insertDatetime;
        this.updatedUser = grossprofitDTO.updatedUser;
        this.updatedDatetime = grossprofitDTO.updatedDatetime;
    }
}
