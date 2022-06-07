import { IsNotEmpty } from "class-validator";
import { Accbalancesheet001mb } from "src/entity/Accbalancesheet001mb.entity";
import { BaseDTO } from "./Base.dto";

export class AccbalancesheetDTO extends BaseDTO {

    absId: number;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    startYear: number;

    @IsNotEmpty()
    endYear: number;

    @IsNotEmpty()
    periodicity: string;

    @IsNotEmpty()
    account: string;

    @IsNotEmpty()
    jan: string | null;

    @IsNotEmpty()
    feb: string | null;

    @IsNotEmpty()
    mar: string | null;

    @IsNotEmpty()
    apr: string | null;

    @IsNotEmpty()
    may: string | null;

    @IsNotEmpty()
    jun: string | null;

    @IsNotEmpty()
    jul: string | null;

    @IsNotEmpty()
    aug: string | null;

    @IsNotEmpty()
    sep: string | null;

    @IsNotEmpty()
    oct: string | null;

    @IsNotEmpty()
    nov: string | null;

    @IsNotEmpty()
    dece: string | null;

    setProperties(accbalancesheet001mb: Accbalancesheet001mb) {
        this.absId = accbalancesheet001mb.absId;
        this.company = accbalancesheet001mb.company;
        this.startYear = accbalancesheet001mb.startYear;
        this.endYear = accbalancesheet001mb.endYear;
        this.periodicity = accbalancesheet001mb.periodicity;
        this.account = accbalancesheet001mb.account;
        this.jan = accbalancesheet001mb.jan;
        this.feb = accbalancesheet001mb.feb;
        this.mar = accbalancesheet001mb.mar;
        this.apr = accbalancesheet001mb.apr;
        this.may = accbalancesheet001mb.may;
        this.jun = accbalancesheet001mb.jun;
        this.jul = accbalancesheet001mb.jul;
        this.aug = accbalancesheet001mb.aug;
        this.sep = accbalancesheet001mb.sep;
        this.oct = accbalancesheet001mb.oct;
        this.nov = accbalancesheet001mb.nov;
        this.dece = accbalancesheet001mb.dece;
        this.insertUser = accbalancesheet001mb.insertUser;
        this.insertDatetime = accbalancesheet001mb.insertDatetime;
        this.updatedUser = accbalancesheet001mb.updatedUser;
        this.updatedDatetime = accbalancesheet001mb.updatedDatetime;

    }
}
