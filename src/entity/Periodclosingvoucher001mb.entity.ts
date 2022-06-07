import { PeriodclosingvoucherDTO } from "src/dto/Periodclosingvoucher.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("periodclosingvoucher001mb")
export class Periodclosingvoucher001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("datetime", { name: "transactiondate" })
    transactiondate: Date;

    @Column("varchar", { name: "closingaccounthead", length: 45 })
    closingaccounthead: string;

    @Column("datetime", { name: "postingdate" })
    postingdate: Date;

    @Column("year", { name: "closingfiscalyear" })
    closingfiscalyear: number;

    @Column("varchar", { name: "company", length: 45 })
    company: string;

    @Column("varchar", { name: "remarks", length: 45 })
    remarks: string;

    setProperties(periodclosingvoucherDTO: PeriodclosingvoucherDTO) {
        this.id = periodclosingvoucherDTO.id;
        this.transactiondate = periodclosingvoucherDTO.transactiondate;
        this.closingaccounthead = periodclosingvoucherDTO.closingaccounthead;
        this.postingdate = periodclosingvoucherDTO.postingdate;
        this.closingfiscalyear = periodclosingvoucherDTO.closingfiscalyear;
        this.company = periodclosingvoucherDTO.company;
        this.remarks = periodclosingvoucherDTO.remarks;
        this.insertUser = periodclosingvoucherDTO.insertUser;
        this.insertDatetime = periodclosingvoucherDTO.insertDatetime;
        this.updatedUser = periodclosingvoucherDTO.updatedUser;
        this.updatedDatetime = periodclosingvoucherDTO.updatedDatetime;
    }
}
