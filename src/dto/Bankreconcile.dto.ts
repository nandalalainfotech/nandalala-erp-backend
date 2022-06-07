import { IsNotEmpty } from "class-validator";
import { Bankreconcile001mb } from "src/entity/Bankreconcile001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BankreconcileDTO extends BaseDTO{

    bankrecId: number;

    @IsNotEmpty()
    bankAccount: string;

    @IsNotEmpty()
    postingDate: Date;

    @IsNotEmpty()
    entrySeries: string;

    @IsNotEmpty()
    debit: number | null;

    @IsNotEmpty()
    credit: number | null;

    @IsNotEmpty()
    againstAccount: string;

    @IsNotEmpty()
    referenceName: string;

    @IsNotEmpty()
    referenceDate: Date;

    @IsNotEmpty()
    clearanceDate: Date;

    @IsNotEmpty()
    currency: string;
    
    setProperties(bankreconcile001mb: Bankreconcile001mb) {
        this.bankrecId = bankreconcile001mb.bankrecId;
        this.bankAccount = bankreconcile001mb.bankAccount;
        this.postingDate = bankreconcile001mb.postingDate;
        this.entrySeries = bankreconcile001mb.entrySeries;
        this.debit = bankreconcile001mb.debit;
        this.credit = bankreconcile001mb.credit;
        this.againstAccount = bankreconcile001mb.againstAccount;
        this.referenceName = bankreconcile001mb.referenceName;
        this.referenceDate = bankreconcile001mb.referenceDate;
        this.clearanceDate = bankreconcile001mb.clearanceDate;
        this.currency = bankreconcile001mb.currency;
        this.insertUser = bankreconcile001mb.insertUser;
        this.insertDatetime = bankreconcile001mb.insertDatetime;
        this.updatedUser = bankreconcile001mb.updatedUser;
        this.updatedDatetime = bankreconcile001mb.updatedDatetime;
    }
}
