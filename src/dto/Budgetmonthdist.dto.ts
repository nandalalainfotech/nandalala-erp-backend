import { IsNotEmpty } from "class-validator";
import { Budgetmonthdist001mb } from "src/entity/Budgetmonthdist001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BudgetmonthdistDTO extends BaseDTO{
    bmdId: number;

    @IsNotEmpty()
    distName: string;

    @IsNotEmpty()
    fiscalYear: number;

    @IsNotEmpty()
    respMonth: string;

    @IsNotEmpty()
    percentAllocate: string | null;

    setProperties(budgetmonthdist001mb: Budgetmonthdist001mb) {
        this.bmdId = budgetmonthdist001mb.bmdId;
        this.distName = budgetmonthdist001mb.distName;
        this.fiscalYear = budgetmonthdist001mb.fiscalYear;
        this.percentAllocate = budgetmonthdist001mb.percentAllocate;
        this.respMonth = budgetmonthdist001mb.respMonth;
        this.insertUser = budgetmonthdist001mb.insertUser;
        this.insertDatetime = budgetmonthdist001mb.insertDatetime;
        this.updatedUser = budgetmonthdist001mb.updatedUser;
        this.updatedDatetime = budgetmonthdist001mb.updatedDatetime;
    }

}
