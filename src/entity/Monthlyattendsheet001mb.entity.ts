import { MonthlyattendsheetDTO } from "src/dto/Monthlyattendsheet.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("monthlyattendsheet001mb")
export class Monthlyattendsheet001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "atsId" })
    atsId: number;

    @Column("year", { name: "attYear" })
    attYear: number;

    @Column("varchar", { name: "empNumber", length: 50 })
    empNumber: string;

    @Column("varchar", { name: "empName", length: 50 })
    empName: string;

    @Column("varchar", { name: "branch", length: 50 })
    branch: string;

    @Column("varchar", { name: "deptName", length: 50 })
    deptName: string;

    @Column("varchar", { name: "empDesign", length: 50 })
    empDesign: string;

    @Column("varchar", { name: "empCompany", length: 50 })
    empCompany: string;

    @Column("varchar", { name: "one1", nullable: true, length: 10 })
    one1: string | null;

    @Column("varchar", { name: "two2", nullable: true, length: 10 })
    two2: string | null;

    @Column("varchar", { name: "three3", nullable: true, length: 10 })
    three3: string | null;

    @Column("varchar", { name: "four4", nullable: true, length: 10 })
    four4: string | null;

    @Column("varchar", { name: "five5", nullable: true, length: 10 })
    five5: string | null;

    @Column("varchar", { name: "six6", nullable: true, length: 10 })
    six6: string | null;

    @Column("varchar", { name: "seven7", nullable: true, length: 10 })
    seven7: string | null;

    @Column("varchar", { name: "eight8", nullable: true, length: 10 })
    eight8: string | null;

    @Column("varchar", { name: "nine9", nullable: true, length: 10 })
    nine9: string | null;

    @Column("varchar", { name: "ten10", nullable: true, length: 10 })
    ten10: string | null;

    @Column("varchar", { name: "eleven11", nullable: true, length: 10 })
    eleven11: string | null;

    @Column("varchar", { name: "twelve12", nullable: true, length: 10 })
    twelve12: string | null;

    @Column("varchar", { name: "thirteen13", nullable: true, length: 10 })
    thirteen13: string | null;

    @Column("varchar", { name: "fourteen14", nullable: true, length: 10 })
    fourteen14: string | null;

    @Column("varchar", { name: "fifteen15", nullable: true, length: 10 })
    fifteen15: string | null;

    @Column("varchar", { name: "sixteen16", nullable: true, length: 10 })
    sixteen16: string | null;

    @Column("varchar", { name: "seventeen17", nullable: true, length: 10 })
    seventeen17: string | null;

    @Column("varchar", { name: "eighteen18", nullable: true, length: 10 })
    eighteen18: string | null;

    @Column("varchar", { name: "nineteen19", nullable: true, length: 10 })
    nineteen19: string | null;

    @Column("varchar", { name: "twenty20", nullable: true, length: 10 })
    twenty20: string | null;

    @Column("varchar", { name: "twentyone21", nullable: true, length: 10 })
    twentyone21: string | null;

    @Column("varchar", { name: "twentytwo22", nullable: true, length: 10 })
    twentytwo22: string | null;

    @Column("varchar", { name: "twentythree23", nullable: true, length: 10 })
    twentythree23: string | null;

    @Column("varchar", { name: "twentyfour24", nullable: true, length: 10 })
    twentyfour24: string | null;

    @Column("varchar", { name: "twentyfive25", nullable: true, length: 10 })
    twentyfive25: string | null;

    @Column("varchar", { name: "twentysix26", nullable: true, length: 10 })
    twentysix26: string | null;

    @Column("varchar", { name: "twentyseven27", nullable: true, length: 10 })
    twentyseven27: string | null;

    @Column("varchar", { name: "twentyeight28", nullable: true, length: 10 })
    twentyeight28: string | null;

    @Column("varchar", { name: "twentynine29", nullable: true, length: 10 })
    twentynine29: string | null;

    @Column("varchar", { name: "thirty30", nullable: true, length: 10 })
    thirty30: string | null;

    @Column("decimal", {
        name: "totalPresent",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalPresent: string | null;

    @Column("decimal", {
        name: "totalAbsent",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalAbsent: string | null;

    @Column("varchar", { name: "months", nullable: true, length: 255 })
    months: string | null;

    setProperties(monthlyattendsheetDTO: MonthlyattendsheetDTO) {
        this.atsId = monthlyattendsheetDTO.atsId;
        this.attYear = monthlyattendsheetDTO.attYear;
        this.empNumber = monthlyattendsheetDTO.empNumber;
        this.empName = monthlyattendsheetDTO.empName;
        this.branch = monthlyattendsheetDTO.branch;
        this.deptName = monthlyattendsheetDTO.deptName;
        this.empDesign = monthlyattendsheetDTO.empDesign;
        this.empCompany = monthlyattendsheetDTO.empCompany;
        this.totalPresent = monthlyattendsheetDTO.totalPresent;
        this.totalAbsent = monthlyattendsheetDTO.totalAbsent;
        this.months = monthlyattendsheetDTO.months;
        this.one1 = monthlyattendsheetDTO.one1;
        this.two2 = monthlyattendsheetDTO.two2;
        this.three3 = monthlyattendsheetDTO.three3;
        this.four4 = monthlyattendsheetDTO.four4;
        this.five5 = monthlyattendsheetDTO.five5;
        this.six6 = monthlyattendsheetDTO.six6;
        this.seven7 = monthlyattendsheetDTO.seven7;
        this.eight8 = monthlyattendsheetDTO.eight8;
        this.nine9 = monthlyattendsheetDTO.nine9;
        this.ten10 = monthlyattendsheetDTO.ten10;
        this.eleven11 = monthlyattendsheetDTO.eleven11;
        this.twelve12 = monthlyattendsheetDTO.twelve12;
        this.thirteen13 = monthlyattendsheetDTO.thirteen13;
        this.fourteen14 = monthlyattendsheetDTO.fourteen14;
        this.fifteen15 = monthlyattendsheetDTO.fifteen15;
        this.sixteen16 = monthlyattendsheetDTO.sixteen16;
        this.seventeen17 = monthlyattendsheetDTO.seventeen17;
        this.eighteen18 = monthlyattendsheetDTO.eighteen18;
        this.nineteen19 = monthlyattendsheetDTO.nineteen19;
        this.twenty20 = monthlyattendsheetDTO.twenty20;
        this.twentyone21 = monthlyattendsheetDTO.twentyone21;
        this.twentytwo22 = monthlyattendsheetDTO.twentytwo22;
        this.twentythree23 = monthlyattendsheetDTO.twentythree23;
        this.twentyfour24 = monthlyattendsheetDTO.twentyfour24;
        this.twentyfive25 = monthlyattendsheetDTO.twentyfive25;
        this.twentysix26 = monthlyattendsheetDTO.twentysix26;
        this.twentyseven27 = monthlyattendsheetDTO.twentyseven27;
        this.twentyeight28 = monthlyattendsheetDTO.twentyeight28;
        this.twentynine29 = monthlyattendsheetDTO.twentynine29;
        this.thirty30 = monthlyattendsheetDTO.thirty30;
        this.insertUser = monthlyattendsheetDTO.insertUser;
        this.insertDatetime = monthlyattendsheetDTO.insertDatetime;
        this.updatedUser = monthlyattendsheetDTO.updatedUser;
        this.updatedDatetime = monthlyattendsheetDTO.updatedDatetime;
    }
}
