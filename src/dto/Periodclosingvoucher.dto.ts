import { IsNotEmpty } from "class-validator";
import { Periodclosingvoucher001mb } from "src/entity/Periodclosingvoucher001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PeriodclosingvoucherDTO extends BaseDTO {

    id: number;

    @IsNotEmpty()
    transactiondate: Date;

    @IsNotEmpty()
    closingaccounthead: string;

    @IsNotEmpty()
    postingdate: Date;

    @IsNotEmpty()
    closingfiscalyear: number;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    remarks: string;

    setProperties(periodclosingvoucher001mb: Periodclosingvoucher001mb) {
        this.id = periodclosingvoucher001mb.id;
        this.transactiondate = periodclosingvoucher001mb.transactiondate;
        this.closingaccounthead = periodclosingvoucher001mb.closingaccounthead;
        this.postingdate = periodclosingvoucher001mb.postingdate;
        this.closingfiscalyear = periodclosingvoucher001mb.closingfiscalyear;
        this.company = periodclosingvoucher001mb.company;
        this.remarks = periodclosingvoucher001mb.remarks;
        this.insertUser = periodclosingvoucher001mb.insertUser;
        this.insertDatetime = periodclosingvoucher001mb.insertDatetime;
        this.updatedUser = periodclosingvoucher001mb.updatedUser;
        this.updatedDatetime = periodclosingvoucher001mb.updatedDatetime;
    }
}
