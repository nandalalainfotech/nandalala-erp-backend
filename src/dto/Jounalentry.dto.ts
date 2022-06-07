import { IsNotEmpty, MaxLength } from "class-validator";
import { Jounalentry001mb } from "src/entity/Jounalentry001mb.entity";
import { BaseDTO } from "./Base.dto";

export class JounalentryDTO extends BaseDTO {
    jeId: number;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    referenceNumber: string;

    @IsNotEmpty()
    jeSeries: string;

    @IsNotEmpty()
    postingDate: Date;

    @IsNotEmpty()
    referenceDate: Date;

    @IsNotEmpty()
    accountName: string;

    @IsNotEmpty()
    partyName: string;

    @IsNotEmpty()
    credit: number;

    @IsNotEmpty()
    debit: number;

    @IsNotEmpty()
    docStatus: string;
    
    setProperties(jounalentry001mb: Jounalentry001mb) {
        this.jeId = jounalentry001mb.jeId;
        this.title = jounalentry001mb.title;
        this.status = jounalentry001mb.status;
        this.referenceNumber = jounalentry001mb.referenceNumber;
        this.jeSeries = jounalentry001mb.jeSeries;
        this.postingDate = jounalentry001mb.postingDate;
        this.referenceDate = jounalentry001mb.referenceDate;
        this.accountName = jounalentry001mb.accountName;
        this.partyName = jounalentry001mb.partyName;
        this.debit = jounalentry001mb.debit;
        this.credit = jounalentry001mb.credit;
        this.docStatus = jounalentry001mb.docStatus;
        this.insertUser = jounalentry001mb.insertUser;
        this.insertDatetime = jounalentry001mb.insertDatetime;
        this.updatedUser = jounalentry001mb.updatedUser;
        this.updatedDatetime = jounalentry001mb.updatedDatetime;
    }
}
