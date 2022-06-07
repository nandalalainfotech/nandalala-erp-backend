import { IsNotEmpty, MaxLength } from "class-validator";
import { Trialbalance001mb } from "src/entity/Trialbalance001mb.entity";
import { BaseDTO } from "./Base.dto";

export class TrialbalanceDTO extends BaseDTO {
    
    id: number;

    @IsNotEmpty()
    account: string;

    @IsNotEmpty()
    openingcr: number;

    @IsNotEmpty()
    openingdr: number;

    @IsNotEmpty()
    closingcr: number;

    @IsNotEmpty()
    closingdr: number;

    @IsNotEmpty()
    credit: number;

    @IsNotEmpty()
    debit: number;

    setProperties(trialbalance001mb: Trialbalance001mb) {
        this.id = trialbalance001mb.id;
        this.openingcr = trialbalance001mb.openingcr;
        this.openingdr = trialbalance001mb.openingdr;
        this.closingcr = trialbalance001mb.closingcr;
        this.closingdr = trialbalance001mb.closingdr;
        this.account = trialbalance001mb.account; ``
        this.credit = trialbalance001mb.credit;
        this.debit = trialbalance001mb.debit;
        this.insertUser = trialbalance001mb.insertUser;
        this.insertDatetime = trialbalance001mb.insertDatetime;
        this.updatedUser = trialbalance001mb.updatedUser;
        this.updatedDatetime = trialbalance001mb.updatedDatetime;
    }
}
