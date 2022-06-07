import { ItemwisepurregisterDTO } from "src/dto/Itemwisepurregister.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("itemwisepurregister001mb")
export class Itemwisepurregister001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "iwprId" })
    iwprId: number;

    @Column("varchar", { name: "itemCode", length: 50 })
    itemCode: string;

    @Column("varchar", { name: "itemGroup", length: 50 })
    itemGroup: string;

    @Column("varchar", { name: "inVoice", length: 50 })
    inVoice: string;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("int", { name: "payAccount" })
    payAccount: number;

    @Column("varchar", { name: "paymentMode", length: 50 })
    paymentMode: string;

    @Column("varchar", { name: "projectname", length: 50 })
    projectname: string;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    @Column("varchar", { name: "poSeries", length: 50 })
    poSeries: string;

    @Column("varchar", { name: "purtName", length: 50 })
    purtName: string;

    @Column("int", { name: "expenseAccount", nullable: true })
    expenseAccount: number | null;

    @Column("int", { name: "quantity" })
    quantity: number;

    @Column("decimal", { name: "rate", nullable: true, precision: 12, scale: 4 })
    rate: string | null;

    @Column("decimal", {
        name: "amount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amount: string | null;

    @Column("decimal", {
        name: "totalTax",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalTax: string | null;

    @Column("decimal", { name: "total", nullable: true, precision: 12, scale: 4 })
    total: string | null;

    @Column("varchar", { name: "currency", length: 50 })
    currency: string;

    setProperties(itemwisepurregisterDTO: ItemwisepurregisterDTO) {
        this.iwprId = itemwisepurregisterDTO.iwprId;
        this.itemCode = itemwisepurregisterDTO.itemCode;
        this.itemGroup = itemwisepurregisterDTO.itemGroup;
        this.inVoice = itemwisepurregisterDTO.inVoice;
        this.postingDate = itemwisepurregisterDTO.postingDate;
        this.supName = itemwisepurregisterDTO.supName;
        this.payAccount = itemwisepurregisterDTO.payAccount;
        this.paymentMode = itemwisepurregisterDTO.paymentMode;
        this.projectname = itemwisepurregisterDTO.projectname;
        this.company = itemwisepurregisterDTO.company;
        this.poSeries = itemwisepurregisterDTO.poSeries;
        this.purtName = itemwisepurregisterDTO.purtName;
        this.expenseAccount = itemwisepurregisterDTO.expenseAccount;
        this.quantity = itemwisepurregisterDTO.quantity;
        this.rate = itemwisepurregisterDTO.rate;
        this.amount = itemwisepurregisterDTO.amount;
        this.totalTax = itemwisepurregisterDTO.totalTax;
        this.total = itemwisepurregisterDTO.total;
        this.currency = itemwisepurregisterDTO.currency;
        this.insertUser = itemwisepurregisterDTO.insertUser;
        this.insertDatetime = itemwisepurregisterDTO.insertDatetime;
        this.updatedUser = itemwisepurregisterDTO.updatedUser;
        this.updatedDatetime = itemwisepurregisterDTO.updatedDatetime;
    }
}
