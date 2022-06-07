import { PurchaseregisterDTO } from "src/dto/Purchaseregister.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("purchaseregister001mb")
export class Purchaseregister001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "regId" })
    regId: number;

    @Column("varchar", { name: "invoice", length: 50 })
    invoice: string;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("varchar", { name: "supName", length: 50 })
    supName: string;

    @Column("varchar", { name: "supType", length: 50 })
    supType: string;

    @Column("varchar", { name: "accountType", length: 50 })
    accountType: string;

    @Column("varchar", { name: "paymentMode", length: 50 })
    paymentMode: string;

    @Column("varchar", { name: "projectname", length: 50 })
    projectname: string;

    @Column("varchar", { name: "billNo", length: 30 })
    billNo: string;

    @Column("datetime", { name: "billDate" })
    billDate: Date;

    @Column("varchar", { name: "remarks", length: 150 })
    remarks: string;

    @Column("varchar", { name: "poSeries", length: 50 })
    poSeries: string;

    @Column("varchar", { name: "purecpt", length: 50 })
    purecpt: string;

    @Column("varchar", { name: "currency", length: 30 })
    currency: string;

    @Column("decimal", {
        name: "furnituresCount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    furnituresCount: string | null;

    @Column("decimal", {
        name: "softwaresCount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    softwaresCount: string | null;

    @Column("decimal", {
        name: "stkrecBalance",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    stkrecBalance: string | null;

    @Column("decimal", {
        name: "netTotal",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    netTotal: string | null;

    @Column("decimal", {
        name: "totalTax",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalTax: string | null;

    @Column("decimal", {
        name: "grandTotal",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    grandTotal: string | null;

    @Column("decimal", {
        name: "roundTotal",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    roundTotal: string | null;

    @Column("decimal", {
        name: "oustandAmt",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    oustandAmt: string | null;

    @Column("int", { name: "outstandAmt", nullable: true })
    outstandAmt: number | null;

    setProperties(purchaseregisterDTO: PurchaseregisterDTO) {
        this.regId = purchaseregisterDTO.regId;
        this.invoice = purchaseregisterDTO.invoice;
        this.postingDate = purchaseregisterDTO.postingDate;
        this.supName = purchaseregisterDTO.supName;
        this.supType = purchaseregisterDTO.supType;
        this.accountType = purchaseregisterDTO.accountType;
        this.paymentMode = purchaseregisterDTO.paymentMode;
        this.projectname = purchaseregisterDTO.projectname;
        this.billNo = purchaseregisterDTO.billNo;
        this.billDate = purchaseregisterDTO.billDate;
        this.remarks = purchaseregisterDTO.remarks;
        this.poSeries = purchaseregisterDTO.poSeries;
        this.purecpt = purchaseregisterDTO.purecpt;
        this.currency = purchaseregisterDTO.currency;
        this.furnituresCount = purchaseregisterDTO.furnituresCount;
        this.softwaresCount = purchaseregisterDTO.softwaresCount;
        this.stkrecBalance = purchaseregisterDTO.stkrecBalance;
        this.netTotal = purchaseregisterDTO.netTotal;
        this.totalTax = purchaseregisterDTO.totalTax;
        this.grandTotal = purchaseregisterDTO.grandTotal;
        this.roundTotal = purchaseregisterDTO.roundTotal;
        this.outstandAmt = purchaseregisterDTO.outstandAmt;
        this.insertUser = purchaseregisterDTO.insertUser;
        this.insertDatetime = purchaseregisterDTO.insertDatetime;
        this.updatedUser = purchaseregisterDTO.updatedUser;
        this.updatedDatetime = purchaseregisterDTO.updatedDatetime;
    }
}
