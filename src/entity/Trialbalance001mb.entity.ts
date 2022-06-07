import { TrialbalanceDTO } from "src/dto/Trialbalance.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("trialbalance001mb")
export class Trialbalance001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "id", unsigned: true })
    id: number;

    @Column("varchar", { name: "account", length: 45 })
    account: string;

    @Column("int", { name: "openingcr", unsigned: true })
    openingcr: number;

    @Column("int", { name: "openingdr", unsigned: true })
    openingdr: number;

    @Column("int", { name: "closingcr", unsigned: true })
    closingcr: number;

    @Column("int", { name: "closingdr", unsigned: true })
    closingdr: number;

    @Column("int", { name: "credit", unsigned: true })
    credit: number;

    @Column("int", { name: "debit", unsigned: true })
    debit: number;
    setProperties(trialbalanceDTO: TrialbalanceDTO) {
        this.id = trialbalanceDTO.id;
        this.openingcr = trialbalanceDTO.openingcr;
        this.openingdr = trialbalanceDTO.openingdr;
        this.closingcr = trialbalanceDTO.closingcr;
        this.closingdr = trialbalanceDTO.closingdr;
        this.account = trialbalanceDTO.account; ``
        this.credit = trialbalanceDTO.credit;
        this.debit = trialbalanceDTO.debit;
        this.insertUser = trialbalanceDTO.insertUser;
        this.insertDatetime = trialbalanceDTO.insertDatetime;
        this.updatedUser = trialbalanceDTO.updatedUser;
        this.updatedDatetime = trialbalanceDTO.updatedDatetime;
    }
}
