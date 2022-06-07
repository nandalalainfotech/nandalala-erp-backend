import { IsNotEmpty } from "class-validator";
import { Budget001mb } from "src/entity/Budget001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BudgetDTO extends BaseDTO{
    bgId: number;

    @IsNotEmpty()
    budgetName: string;

    @IsNotEmpty()
    docStatus: string;

    @IsNotEmpty()
    centerName: string;

    @IsNotEmpty()
    actifannualbgexceed: string;

    @IsNotEmpty()
    actifmonthbgexceed: string;

    @IsNotEmpty()
    fiscalYear: number;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    bgaccountType: string;

    @IsNotEmpty()
    bgAmount: string | null;

    setProperties(budget001mb: Budget001mb) {
        this.bgId = budget001mb.bgId;
        this.budgetName = budget001mb.budgetName;
        this.docStatus = budget001mb.docStatus;
        this.centerName = budget001mb.centerName;
        this.actifannualbgexceed = budget001mb.actifannualbgexceed;
        this.actifmonthbgexceed = budget001mb.actifmonthbgexceed;
        this.fiscalYear = budget001mb.fiscalYear;
        this.company = budget001mb.company;
        this.bgaccountType = budget001mb.bgaccountType;
        this.bgAmount = budget001mb.bgAmount;
        this.insertUser = budget001mb.insertUser;
        this.insertDatetime = budget001mb.insertDatetime;
        this.updatedUser = budget001mb.updatedUser;
        this.updatedDatetime = budget001mb.updatedDatetime;
    }

}
