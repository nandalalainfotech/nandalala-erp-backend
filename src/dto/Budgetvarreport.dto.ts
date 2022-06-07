import { IsNotEmpty } from "class-validator";
import { Budgetvarreport001mb } from "src/entity/Budgetvarreport001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BudgetvarreportDTO extends BaseDTO{
    varId: number;

    @IsNotEmpty()
    fiscalYear: number;

    @IsNotEmpty()
    period: string;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    centerName: string;

    @IsNotEmpty()
    bgaccountType: string;

    @IsNotEmpty()
    actualjan: string | null;

    @IsNotEmpty()
    variancejan: string | null;

    @IsNotEmpty()
    targetjan: string | null;

    @IsNotEmpty()
    actualfeb: string | null;

    @IsNotEmpty()
    variancefeb: string | null;

    @IsNotEmpty()
    targetfeb: string | null;

    @IsNotEmpty()
    actualmar: string | null;

    @IsNotEmpty()
    variancemar: string | null;

    @IsNotEmpty()
    targetmar: string | null;

    @IsNotEmpty()
    actualapr: string | null;

    @IsNotEmpty()
    varianceapr: string | null;

    @IsNotEmpty()
    targetapr: string | null;

    @IsNotEmpty()
    actualmay: string | null;

    @IsNotEmpty()
    variancemay: string | null;

    @IsNotEmpty()
    targetmay: string | null;

    @IsNotEmpty()
    actualjun: string | null;

    @IsNotEmpty()
    variancejun: string | null;

    @IsNotEmpty()
    targetjun: string | null;

    @IsNotEmpty()
    actualjul: string | null;

    @IsNotEmpty()
    variancejul: string | null;

    @IsNotEmpty()
    targetjul: string | null;

    @IsNotEmpty()
    actualaug: string | null;

    @IsNotEmpty()
    varianceaug: string | null;

    @IsNotEmpty()
    targetaug: string | null;

    @IsNotEmpty()
    actualsep: string | null;

    @IsNotEmpty()
    variancesep: string | null;

    @IsNotEmpty()
    targetsep: string | null;

    @IsNotEmpty()
    actualoct: string | null;

    @IsNotEmpty()
    varianceoct: string | null;

    @IsNotEmpty()
    targetoct: string | null;

    @IsNotEmpty()
    actualnov: string | null;

    @IsNotEmpty()
    variancenov: string | null;

    @IsNotEmpty()
    targetnov: string | null;

    @IsNotEmpty()
    actualdec: string | null;

    @IsNotEmpty()
    variancedec: string | null;

    @IsNotEmpty()
    targetdec: string | null;

    @IsNotEmpty()
    totalTarget: string | null;

    @IsNotEmpty()
    totalActual: string | null;

    @IsNotEmpty()
    totalVariance: string | null;

    setProperties(budgetvarreport001mb: Budgetvarreport001mb) {
        this.varId = budgetvarreport001mb.varId;
        this.actualapr = budgetvarreport001mb.actualapr;
        this.actualaug = budgetvarreport001mb.actualaug;
        this.actualdec = budgetvarreport001mb.actualdec;
        this.actualfeb = budgetvarreport001mb.actualfeb;
        this.actualjan = budgetvarreport001mb.actualjan;
        this.actualjul = budgetvarreport001mb.actualjul;
        this.actualjun = budgetvarreport001mb.actualjun;
        this.actualmar = budgetvarreport001mb.actualmar;
        this.actualmay = budgetvarreport001mb.actualmay;
        this.actualnov = budgetvarreport001mb.actualnov;
        this.actualoct = budgetvarreport001mb.actualoct;
        this.actualsep = budgetvarreport001mb.actualsep;
        this.bgaccountType = budgetvarreport001mb.bgaccountType;
        this.company = budgetvarreport001mb.company;
        this.fiscalYear = budgetvarreport001mb.fiscalYear;
        this.period = budgetvarreport001mb.period;
        this.targetapr = budgetvarreport001mb.targetapr;
        this.targetaug = budgetvarreport001mb.targetaug;
        this.targetdec = budgetvarreport001mb.targetdec;
        this.targetfeb = budgetvarreport001mb.targetfeb;
        this.targetjan = budgetvarreport001mb.targetjan;
        this.targetjul = budgetvarreport001mb.targetjul;
        this.targetjun = budgetvarreport001mb.targetjun;
        this.targetmar = budgetvarreport001mb.targetmar;
        this.targetmay = budgetvarreport001mb.targetmay;
        this.targetnov = budgetvarreport001mb.targetnov;
        this.targetoct = budgetvarreport001mb.targetoct;
        this.targetsep = budgetvarreport001mb.targetsep;
        this.totalActual = budgetvarreport001mb.totalActual;
        this.totalTarget = budgetvarreport001mb.totalTarget;
        this.totalVariance = budgetvarreport001mb.totalVariance;
        this.varianceapr = budgetvarreport001mb.varianceapr;
        this.varianceaug = budgetvarreport001mb.varianceaug;
        this.variancedec = budgetvarreport001mb.variancedec;
        this.variancefeb = budgetvarreport001mb.variancefeb;
        this.variancejan = budgetvarreport001mb.variancejan;
        this.variancejul = budgetvarreport001mb.variancejul;
        this.variancejun = budgetvarreport001mb.variancejun;
        this.variancemar = budgetvarreport001mb.variancemar;
        this.variancemay = budgetvarreport001mb.variancemay;
        this.variancenov = budgetvarreport001mb.variancenov;
        this.varianceoct = budgetvarreport001mb.varianceoct;
        this.variancesep = budgetvarreport001mb.variancesep;
        this.centerName = budgetvarreport001mb.centerName;
        this.insertUser = budgetvarreport001mb.insertUser;
        this.insertDatetime = budgetvarreport001mb.insertDatetime;
        this.updatedUser = budgetvarreport001mb.updatedUser;
        this.updatedDatetime = budgetvarreport001mb.updatedDatetime;
    }
}
