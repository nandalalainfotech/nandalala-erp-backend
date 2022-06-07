import { IsNotEmpty } from "class-validator";
import { Expensesclm001mb } from "src/entity/Expensesclm001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ExpensesclmDTO extends BaseDTO {

    expclmId: number;

    @IsNotEmpty()
    expCode: string | null;

    @IsNotEmpty()
    expType: string | null;

    @IsNotEmpty()
    status: string | null;

    @IsNotEmpty()
    totalclmAmt: number | null;
    
    setProperties(expensesclm001mb: Expensesclm001mb) {
        this.expclmId = expensesclm001mb.expclmId;
        this.expCode = expensesclm001mb.expCode;
        this.status = expensesclm001mb.status;
        this.expType = expensesclm001mb.expType;
        this.totalclmAmt = expensesclm001mb.totalclmAmt;
        this.insertUser = expensesclm001mb.insertUser;
        this.insertDatetime = expensesclm001mb.insertDatetime;
        this.updatedUser = expensesclm001mb.updatedUser;
        this.updatedDatetime = expensesclm001mb.updatedDatetime;
    }
}
