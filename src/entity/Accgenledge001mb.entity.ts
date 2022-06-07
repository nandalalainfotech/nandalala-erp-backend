import { AccgenledgeDTO } from "src/dto/Accgenledge.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("accgenledge001mb")
export class Accgenledge001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "accglId" })
    accglId: number;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    @Column("datetime", { name: "fromDate" })
    fromDate: Date;

    @Column("datetime", { name: "toDate" })
    toDate: Date;

    @Column("varchar", { name: "partyType", length: 40 })
    partyType: string;

    @Column("varchar", { name: "partyName", length: 40 })
    partyName: string;

    @Column("char", { name: "grpbyVoucher", nullable: true, length: 1 })
    grpbyVoucher: boolean;

    @Column("char", { name: "grobyAccount", nullable: true, length: 1 })
    grobyAccount: boolean;

    @Column("varchar", { name: "letterHead", length: 40 })
    letterHead: string;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("varchar", { name: "accountName", length: 60 })
    accountName: string;

    @Column("int", { name: "debit" })
    debit: number | null;

    @Column("int", { name: "credit" })
    credit: number | null;

    @Column("varchar", { name: "voucherCode", length: 50 })
    voucherCode: string;

    @Column("varchar", { name: "voucherType", length: 50 })
    voucherType: string;

    @Column("int", { name: "againstAmt", nullable: true })
    againstAmt: number | null;

    @Column("varchar", { name: "projectname", length: 50 })
    projectname: string;

    @Column("varchar", { name: "costCenter", length: 40 })
    costCenter: string;

    @Column("varchar", { name: "againvcType", length: 50 })
    againvcType: string;

    @Column("varchar", { name: "againvcName", length: 60 })
    againvcName: string;

    setProperties(accgenledgeDTO: AccgenledgeDTO) {
        this.accglId = accgenledgeDTO.accglId;
        this.company = accgenledgeDTO.company;
        this.fromDate = accgenledgeDTO.fromDate;
        this.toDate = accgenledgeDTO.toDate;
        this.partyType = accgenledgeDTO.partyType;
        this.partyName = accgenledgeDTO.partyName;
        this.grpbyVoucher = accgenledgeDTO.grpbyVoucher;
        this.grobyAccount = accgenledgeDTO.grobyAccount;
        this.letterHead = accgenledgeDTO.letterHead;
        this.postingDate = accgenledgeDTO.postingDate;
        this.accountName = accgenledgeDTO.accountName;
        this.debit = accgenledgeDTO.debit;
        this.credit = accgenledgeDTO.credit;
        this.voucherCode = accgenledgeDTO.voucherCode;
        this.voucherType = accgenledgeDTO.voucherType;
        this.againstAmt = accgenledgeDTO.againstAmt;
        this.projectname = accgenledgeDTO.projectname;
        this.costCenter = accgenledgeDTO.costCenter;
        this.againvcType = accgenledgeDTO.againvcType;
        this.againvcName = accgenledgeDTO.againvcName;
        this.insertUser = accgenledgeDTO.insertUser;
        this.insertDatetime = accgenledgeDTO.insertDatetime;
        this.updatedUser = accgenledgeDTO.updatedUser;
        this.updatedDatetime = accgenledgeDTO.updatedDatetime;
    }
}
