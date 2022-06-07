import { PaymententryDTO } from "src/dto/Paymententry.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("paymententry001mb")
export class Paymententry001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "payentId" })
    payentId: number;

    @Column("varchar", { name: "entrySeries", length: 50 })
    entrySeries: string;

    @Column("datetime", { name: "postingDate" })
    postingDate: Date;

    @Column("varchar", { name: "paymentType", length: 50 })
    paymentType: string;

    @Column("varchar", { name: "paymentMode", length: 50 })
    paymentMode: string;

    @Column("varchar", { name: "partyType", length: 40 })
    partyType: string;

    @Column("varchar", { name: "partyName", length: 50 })
    partyName: string;

    @Column("varchar", { name: "accpaidTo", length: 50 })
    accpaidTo: string;
    setProperties(paymententryDTO: PaymententryDTO) {
        this.payentId = paymententryDTO.payentId;
        this.entrySeries = paymententryDTO.entrySeries;
        this.postingDate = paymententryDTO.postingDate;
        this.paymentType = paymententryDTO.paymentType;
        this.paymentMode = paymententryDTO.paymentMode;
        this.partyType = paymententryDTO.partyType;
        this.partyName = paymententryDTO.partyName;
        this.accpaidTo = paymententryDTO.accpaidTo;
        this.insertUser = paymententryDTO.insertUser;
        this.insertDatetime = paymententryDTO.insertDatetime;
        this.updatedUser = paymententryDTO.updatedUser;
        this.updatedDatetime = paymententryDTO.updatedDatetime;
    }
}
