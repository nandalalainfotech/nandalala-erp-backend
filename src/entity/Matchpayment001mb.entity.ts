import { MatchpaymentDTO } from "src/dto/Matchpayment.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("matchpayment001mb")
export class Matchpayment001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "company", length: 45 })
    company: string;

    @Column("varchar", { name: "partytype", length: 45 })
    partytype: string;

    @Column("varchar", { name: "party", length: 45 })
    party: string;

    @Column("varchar", { name: "receivableorpayableaccount", length: 45 })
    receivableorpayableaccount: string;

    @Column("datetime", { name: "fromdate" })
    fromdate: Date;

    @Column("datetime", { name: "todate" })
    todate: Date;

    @Column("varchar", { name: "bankorcashaccount", length: 45 })
    bankorcashaccount: string;

    @Column("int", { name: "minimuminvoiceamount", unsigned: true })
    minimuminvoiceamount: number;

    @Column("int", { name: "maximuminvoiceamount", unsigned: true })
    maximuminvoiceamount: number;

    @Column("varchar", { name: "refName", length: 50 })
    refName: string;

    @Column("int", { name: "invoiceNumber" })
    invoiceNumber: number;

    @Column("decimal", {
        name: "amount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    amount: string | null;

    @Column("decimal", {
        name: "allocatedamount",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    allocatedamount: string | null;
    
    setProperties(matchpaymentDTO: MatchpaymentDTO) {
        this.id = matchpaymentDTO.id;
        this.company = matchpaymentDTO.company;
        this.partytype = matchpaymentDTO.partytype;
        this.party = matchpaymentDTO.party;
        this.receivableorpayableaccount = matchpaymentDTO.receivableorpayableaccount;
        this.fromdate = matchpaymentDTO.fromdate;
        this.todate = matchpaymentDTO.todate;
        this.bankorcashaccount = matchpaymentDTO.bankorcashaccount;
        this.minimuminvoiceamount = matchpaymentDTO.minimuminvoiceamount;
        this.maximuminvoiceamount = matchpaymentDTO.maximuminvoiceamount;
        this.refName = matchpaymentDTO.refName;
        this.invoiceNumber = matchpaymentDTO.invoiceNumber;
        this.amount = matchpaymentDTO.amount;
        this.allocatedamount = matchpaymentDTO.allocatedamount;
        this.insertUser = matchpaymentDTO.insertUser;
        this.insertDatetime = matchpaymentDTO.insertDatetime;
        this.updatedUser = matchpaymentDTO.updatedUser;
        this.updatedDatetime = matchpaymentDTO.updatedDatetime;
    }
}
