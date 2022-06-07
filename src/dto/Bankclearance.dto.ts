import { IsNotEmpty } from "class-validator";
import { Bankclearance001mb } from "src/entity/Bankclearance001mb.entity";
import { BaseDTO } from "./Base.dto";

export class BankclearanceDTO extends BaseDTO{
    bankclrId: number;

    @IsNotEmpty()
    fromDate: Date;

    @IsNotEmpty()
    toDate: Date;

    @IsNotEmpty()
    bankAccount: string;

    @IsNotEmpty()
    payDocument: string;

    @IsNotEmpty()
    entrySeries: string;

    @IsNotEmpty()
    chequeref: string;

    @IsNotEmpty()
    clearanceDate: Date;

    @IsNotEmpty()
    againstAccount: string;

    @IsNotEmpty()
    amount: string | null;

    setProperties(bankclearance001mb: Bankclearance001mb) {
        this.againstAccount = bankclearance001mb.againstAccount;
        this.bankAccount = bankclearance001mb.bankAccount;
        this.bankclrId = bankclearance001mb.bankclrId;
        this.chequeref = bankclearance001mb.chequeref;
        this.clearanceDate = bankclearance001mb.clearanceDate;
        this.entrySeries = bankclearance001mb.entrySeries;
        this.fromDate = bankclearance001mb.fromDate;
        this.payDocument = bankclearance001mb.payDocument;
        this.toDate = bankclearance001mb.toDate;
        this.amount = bankclearance001mb.amount;
        this.insertUser = bankclearance001mb.insertUser;
        this.insertDatetime = bankclearance001mb.insertDatetime;
        this.updatedUser = bankclearance001mb.updatedUser;
        this.updatedDatetime = bankclearance001mb.updatedDatetime;
    }
}
