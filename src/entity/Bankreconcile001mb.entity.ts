import { BankreconcileDTO } from "src/dto/Bankreconcile.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("bankreconcile001mb")
export class Bankreconcile001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "bankrecId" })
    bankrecId: number;

    @Column("varchar", { name: "bankAccount", length: 50 })
    bankAccount: string;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("varchar", { name: "entrySeries", length: 50 })
    entrySeries: string;

    @Column("int", { name: "debit" })
    debit: number | null;

    @Column("int", { name: "credit" })
    credit: number | null;

    @Column("varchar", { name: "againstAccount", length: 50 })
    againstAccount: string;

    @Column("varchar", { name: "referenceName", length: 50 })
    referenceName: string;

    @Column("datetime", { name: "referenceDate" })
    referenceDate: Date;

    @Column("datetime", { name: "clearanceDate" })
    clearanceDate: Date;

    @Column("varchar", { name: "currency", length: 40 })
    currency: string;

    setProperties(bankreconcileDTO: BankreconcileDTO) {
        this.bankrecId = bankreconcileDTO.bankrecId;
        this.bankAccount = bankreconcileDTO.bankAccount;
        this.postingDate = bankreconcileDTO.postingDate;
        this.entrySeries = bankreconcileDTO.entrySeries;
        this.debit = bankreconcileDTO.debit;
        this.credit = bankreconcileDTO.credit;
        this.againstAccount = bankreconcileDTO.againstAccount;
        this.referenceName = bankreconcileDTO.referenceName;
        this.referenceDate = bankreconcileDTO.referenceDate;
        this.clearanceDate = bankreconcileDTO.clearanceDate;
        this.currency = bankreconcileDTO.currency;
        this.insertUser = bankreconcileDTO.insertUser;
        this.insertDatetime = bankreconcileDTO.insertDatetime;
        this.updatedUser = bankreconcileDTO.updatedUser;
        this.updatedDatetime = bankreconcileDTO.updatedDatetime;
    }
}
