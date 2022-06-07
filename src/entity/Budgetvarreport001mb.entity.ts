import { BudgetvarreportDTO } from "src/dto/Budgetvarreport.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("budgetvarreport001mb")
export class Budgetvarreport001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "varId" })
    varId: number;

    @Column("year", { name: "fiscalYear" })
    fiscalYear: number;

    @Column("varchar", { name: "period", length: 50 })
    period: string;

    @Column("varchar", { name: "company", length: 60 })
    company: string;

    @Column("varchar", { name: "centerName", length: 60 })
    centerName: string;

    @Column("varchar", { name: "bgaccountType", length: 60 })
    bgaccountType: string;

    @Column("decimal", {
        name: "actualjan",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualjan: string | null;

    @Column("decimal", {
        name: "variancejan",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancejan: string | null;

    @Column("decimal", {
        name: "targetjan",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetjan: string | null;

    @Column("decimal", {
        name: "actualfeb",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualfeb: string | null;

    @Column("decimal", {
        name: "variancefeb",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancefeb: string | null;

    @Column("decimal", {
        name: "targetfeb",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetfeb: string | null;

    @Column("decimal", {
        name: "actualmar",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualmar: string | null;

    @Column("decimal", {
        name: "variancemar",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancemar: string | null;

    @Column("decimal", {
        name: "targetmar",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetmar: string | null;

    @Column("decimal", {
        name: "actualapr",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualapr: string | null;

    @Column("decimal", {
        name: "varianceapr",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    varianceapr: string | null;

    @Column("decimal", {
        name: "targetapr",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetapr: string | null;

    @Column("decimal", {
        name: "actualmay",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualmay: string | null;

    @Column("decimal", {
        name: "variancemay",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancemay: string | null;

    @Column("decimal", {
        name: "targetmay",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetmay: string | null;

    @Column("decimal", {
        name: "actualjun",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualjun: string | null;

    @Column("decimal", {
        name: "variancejun",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancejun: string | null;

    @Column("decimal", {
        name: "targetjun",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetjun: string | null;

    @Column("decimal", {
        name: "actualjul",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualjul: string | null;

    @Column("decimal", {
        name: "variancejul",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancejul: string | null;

    @Column("decimal", {
        name: "targetjul",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetjul: string | null;

    @Column("decimal", {
        name: "actualaug",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualaug: string | null;

    @Column("decimal", {
        name: "varianceaug",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    varianceaug: string | null;

    @Column("decimal", {
        name: "targetaug",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetaug: string | null;

    @Column("decimal", {
        name: "actualsep",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualsep: string | null;

    @Column("decimal", {
        name: "variancesep",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancesep: string | null;

    @Column("decimal", {
        name: "targetsep",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetsep: string | null;

    @Column("decimal", {
        name: "actualoct",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualoct: string | null;

    @Column("decimal", {
        name: "varianceoct",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    varianceoct: string | null;

    @Column("decimal", {
        name: "targetoct",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetoct: string | null;

    @Column("decimal", {
        name: "actualnov",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualnov: string | null;

    @Column("decimal", {
        name: "variancenov",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancenov: string | null;

    @Column("decimal", {
        name: "targetnov",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetnov: string | null;

    @Column("decimal", {
        name: "actualdec",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    actualdec: string | null;

    @Column("decimal", {
        name: "variancedec",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    variancedec: string | null;

    @Column("decimal", {
        name: "targetdec",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    targetdec: string | null;

    @Column("decimal", {
        name: "totalTarget",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalTarget: string | null;

    @Column("decimal", {
        name: "totalActual",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalActual: string | null;

    @Column("decimal", {
        name: "totalVariance",
        nullable: true,
        precision: 12,
        scale: 4,
    })
    totalVariance: string | null;

    setProperties(budgetvarreportDTO: BudgetvarreportDTO) {
        this.varId = budgetvarreportDTO.varId;
        this.actualapr = budgetvarreportDTO.actualapr;
        this.actualaug = budgetvarreportDTO.actualaug;
        this.actualdec = budgetvarreportDTO.actualdec;
        this.actualfeb = budgetvarreportDTO.actualfeb;
        this.actualjan = budgetvarreportDTO.actualjan;
        this.actualjul = budgetvarreportDTO.actualjul;
        this.actualjun = budgetvarreportDTO.actualjun;
        this.actualmar = budgetvarreportDTO.actualmar;
        this.actualmay = budgetvarreportDTO.actualmay;
        this.actualnov = budgetvarreportDTO.actualnov;
        this.actualoct = budgetvarreportDTO.actualoct;
        this.actualsep = budgetvarreportDTO.actualsep;
        this.bgaccountType = budgetvarreportDTO.bgaccountType;
        this.company = budgetvarreportDTO.company;
        this.fiscalYear = budgetvarreportDTO.fiscalYear;
        this.period = budgetvarreportDTO.period;
        this.targetapr = budgetvarreportDTO.targetapr;
        this.targetaug = budgetvarreportDTO.targetaug;
        this.targetdec = budgetvarreportDTO.targetdec;
        this.targetfeb = budgetvarreportDTO.targetfeb;
        this.targetjan = budgetvarreportDTO.targetjan;
        this.targetjul = budgetvarreportDTO.targetjul;
        this.targetjun = budgetvarreportDTO.targetjun;
        this.targetmar = budgetvarreportDTO.targetmar;
        this.targetmay = budgetvarreportDTO.targetmay;
        this.targetnov = budgetvarreportDTO.targetnov;
        this.targetoct = budgetvarreportDTO.targetoct;
        this.targetsep = budgetvarreportDTO.targetsep;
        this.totalActual = budgetvarreportDTO.totalActual;
        this.totalTarget = budgetvarreportDTO.totalTarget;
        this.totalVariance = budgetvarreportDTO.totalVariance;
        this.varianceapr = budgetvarreportDTO.varianceapr;
        this.varianceaug = budgetvarreportDTO.varianceaug;
        this.variancedec = budgetvarreportDTO.variancedec;
        this.variancefeb = budgetvarreportDTO.variancefeb;
        this.variancejan = budgetvarreportDTO.variancejan;
        this.variancejul = budgetvarreportDTO.variancejul;
        this.variancejun = budgetvarreportDTO.variancejun;
        this.variancemar = budgetvarreportDTO.variancemar;
        this.variancemay = budgetvarreportDTO.variancemay;
        this.variancenov = budgetvarreportDTO.variancenov;
        this.varianceoct = budgetvarreportDTO.varianceoct;
        this.variancesep = budgetvarreportDTO.variancesep;
        this.centerName = budgetvarreportDTO.centerName;
        this.insertUser = budgetvarreportDTO.insertUser;
        this.insertDatetime = budgetvarreportDTO.insertDatetime;
        this.updatedUser = budgetvarreportDTO.updatedUser;
        this.updatedDatetime = budgetvarreportDTO.updatedDatetime;
    }
}
