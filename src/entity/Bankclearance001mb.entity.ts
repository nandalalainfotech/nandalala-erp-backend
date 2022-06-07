import { BankclearanceDTO } from "src/dto/Bankclearance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("bankclearance001mb")
export class Bankclearance001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "bankclrId" })
    bankclrId: number;

    @Column("datetime", { name: "fromDate" })
    fromDate: Date;

    @Column("datetime", { name: "toDate" })
    toDate: Date;

    @Column("varchar", { name: "bankAccount", length: 50 })
    bankAccount: string;

    @Column("varchar", { name: "payDocument", length: 50 })
    payDocument: string;

    @Column("varchar", { name: "entrySeries", length: 50 })
    entrySeries: string;

    @Column("varchar", { name: "chequeref", length: 50 })
    chequeref: string;

    @Column("datetime", { name: "clearanceDate" })
    clearanceDate: Date;

    @Column("varchar", { name: "againstAccount", length: 50 })
    againstAccount: string;

    @Column("decimal", {
        name: "amount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amount: string | null;
    setProperties(bankclearanceDTO: BankclearanceDTO) {
        this.againstAccount = bankclearanceDTO.againstAccount;
        this.bankAccount = bankclearanceDTO.bankAccount;
        this.bankclrId = bankclearanceDTO.bankclrId;
        this.chequeref = bankclearanceDTO.chequeref;
        this.clearanceDate = bankclearanceDTO.clearanceDate;
        this.entrySeries = bankclearanceDTO.entrySeries;
        this.fromDate = bankclearanceDTO.fromDate;
        this.payDocument = bankclearanceDTO.payDocument;
        this.toDate = bankclearanceDTO.toDate;
        this.amount = bankclearanceDTO.amount;
        this.insertUser = bankclearanceDTO.insertUser;
        this.insertDatetime = bankclearanceDTO.insertDatetime;
        this.updatedUser = bankclearanceDTO.updatedUser;
        this.updatedDatetime = bankclearanceDTO.updatedDatetime;
    }
}
