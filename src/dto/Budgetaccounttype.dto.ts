import { IsNotEmpty } from "class-validator";
import { Budgetaccounttype001mb } from "src/entity/Budgetaccounttype001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BudgetaccounttypeDTO extends BaseDTO{
    bgaccId: number;

    @IsNotEmpty()
    bgaccountType: string;

    setProperties(budgetaccounttype001mb: Budgetaccounttype001mb) {
        this.bgaccId = budgetaccounttype001mb.bgaccId;
        this.bgaccountType = budgetaccounttype001mb.bgaccountType;
        this.insertUser = budgetaccounttype001mb.insertUser;
        this.insertDatetime = budgetaccounttype001mb.insertDatetime;
        this.updatedUser = budgetaccounttype001mb.updatedUser;
        this.updatedDatetime = budgetaccounttype001mb.updatedDatetime;
    }
}
