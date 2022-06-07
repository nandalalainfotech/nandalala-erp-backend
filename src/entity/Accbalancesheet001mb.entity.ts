import { AccbalancesheetDTO } from "src/dto/Accbalancesheet.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("accbalancesheet001mb")
export class Accbalancesheet001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "absId" })
    absId: number;

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
    setProperties(accbalancesheetDTO: AccbalancesheetDTO) {
        this.absId = accbalancesheetDTO.absId;
        this.company = accbalancesheetDTO.company;
        this.startYear = accbalancesheetDTO.startYear;
        this.endYear = accbalancesheetDTO.endYear;
        this.periodicity = accbalancesheetDTO.periodicity;
        this.account = accbalancesheetDTO.account;
        this.jan = accbalancesheetDTO.jan;
        this.feb = accbalancesheetDTO.feb;
        this.mar = accbalancesheetDTO.mar;
        this.apr = accbalancesheetDTO.apr;
        this.may = accbalancesheetDTO.may;
        this.jun = accbalancesheetDTO.jun;
        this.jul = accbalancesheetDTO.jul;
        this.aug = accbalancesheetDTO.aug;
        this.sep = accbalancesheetDTO.sep;
        this.oct = accbalancesheetDTO.oct;
        this.nov = accbalancesheetDTO.nov;
        this.dece = accbalancesheetDTO.dece;
        this.insertUser = accbalancesheetDTO.insertUser;
        this.insertDatetime = accbalancesheetDTO.insertDatetime;
        this.updatedUser = accbalancesheetDTO.updatedUser;
        this.updatedDatetime = accbalancesheetDTO.updatedDatetime;
    }
}
