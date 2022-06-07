import { AcccashflowDTO } from "src/dto/Acccashflow.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("acccashflow001mb")
export class Acccashflow001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "acfId" })
    acfId: number;

    @Column("varchar", { name: "company", length: 50 })
    company: string;

    @Column("year", { name: "startYear" })
    startYear: number;

    @Column("year", { name: "endYear" })
    endYear: number;

    @Column("varchar", { name: "periodicity", length: 50 })
    periodicity: string;

    @Column("varchar", { name: "account", length: 50 })
    account: string;

    @Column("decimal", { name: "jan", nullable: true, precision: 12, scale: 4 })
    jan: string | null;

    @Column("decimal", { name: "feb", nullable: true, precision: 12, scale: 4 })
    feb: string | null;

    @Column("decimal", { name: "mar", nullable: true, precision: 12, scale: 4 })
    mar: string | null;

    @Column("decimal", { name: "apr", nullable: true, precision: 12, scale: 4 })
    apr: string | null;

    @Column("decimal", { name: "may", nullable: true, precision: 12, scale: 4 })
    may: string | null;

    @Column("decimal", { name: "jun", nullable: true, precision: 12, scale: 4 })
    jun: string | null;

    @Column("decimal", { name: "jul", nullable: true, precision: 12, scale: 4 })
    jul: string | null;

    @Column("decimal", { name: "aug", nullable: true, precision: 12, scale: 4 })
    aug: string | null;

    @Column("decimal", { name: "sep", nullable: true, precision: 12, scale: 4 })
    sep: string | null;

    @Column("decimal", { name: "oct", nullable: true, precision: 12, scale: 4 })
    oct: string | null;

    @Column("decimal", { name: "nov", nullable: true, precision: 12, scale: 4 })
    nov: string | null;

    @Column("decimal", { name: "dece", nullable: true, precision: 12, scale: 4 })
    dece: string | null;
    setProperties(acccashflowDTO: AcccashflowDTO) {
        this.acfId = acccashflowDTO.acfId;
        this.company = acccashflowDTO.company;
        this.startYear = acccashflowDTO.startYear;
        this.endYear = acccashflowDTO.endYear;
        this.periodicity = acccashflowDTO.periodicity;
        this.account = acccashflowDTO.account;
        this.jan = acccashflowDTO.jan;
        this.feb = acccashflowDTO.feb;
        this.mar = acccashflowDTO.mar;
        this.apr = acccashflowDTO.apr;
        this.may = acccashflowDTO.may;
        this.jun = acccashflowDTO.jun;
        this.jul = acccashflowDTO.jul;
        this.aug = acccashflowDTO.aug;
        this.sep = acccashflowDTO.sep;
        this.oct = acccashflowDTO.oct;
        this.nov = acccashflowDTO.nov;
        this.dece = acccashflowDTO.dece;
        this.insertUser = acccashflowDTO.insertUser;
        this.insertDatetime = acccashflowDTO.insertDatetime;
        this.updatedUser = acccashflowDTO.updatedUser;
        this.updatedDatetime = acccashflowDTO.updatedDatetime;
    }
}
