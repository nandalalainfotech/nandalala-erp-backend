import { AccprofitlossstatementDTO } from "src/dto/Accprofitlossstatement.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("accprofitlossstatement001mb")
export class Accprofitlossstatement001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "aplsId" })
    aplsId: number;

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

    @Column("varchar", { name: "costcenter", length: 50 })
    costcenter: string;

    @Column("varchar", { name: "projectname", length: 60 })
    projectname: string;

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
    setProperties(accprofitlossstatementDTO: AccprofitlossstatementDTO) {
        this.aplsId = accprofitlossstatementDTO.aplsId;
        this.company = accprofitlossstatementDTO.company;
        this.startYear = accprofitlossstatementDTO.startYear;
        this.endYear = accprofitlossstatementDTO.endYear;
        this.periodicity = accprofitlossstatementDTO.periodicity;
        this.account = accprofitlossstatementDTO.account;
        this.jan = accprofitlossstatementDTO.jan;
        this.feb = accprofitlossstatementDTO.feb;
        this.mar = accprofitlossstatementDTO.mar;
        this.apr = accprofitlossstatementDTO.apr;
        this.may = accprofitlossstatementDTO.may;
        this.jun = accprofitlossstatementDTO.jun;
        this.jul = accprofitlossstatementDTO.jul;
        this.aug = accprofitlossstatementDTO.aug;
        this.sep = accprofitlossstatementDTO.sep;
        this.oct = accprofitlossstatementDTO.oct;
        this.nov = accprofitlossstatementDTO.nov;
        this.dece = accprofitlossstatementDTO.dece;
        this.costcenter = accprofitlossstatementDTO.costcenter;
        this.projectname = accprofitlossstatementDTO.projectname;
        this.insertUser = accprofitlossstatementDTO.insertUser;
        this.insertDatetime = accprofitlossstatementDTO.insertDatetime;
        this.updatedUser = accprofitlossstatementDTO.updatedUser;
        this.updatedDatetime = accprofitlossstatementDTO.updatedDatetime;
    }
}
