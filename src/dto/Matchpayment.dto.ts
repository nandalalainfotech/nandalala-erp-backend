import { IsNotEmpty } from "class-validator";
import { Matchpayment001mb } from "src/entity/Matchpayment001mb.entity";
import { BaseDTO } from "./Base.dto";

export class MatchpaymentDTO extends BaseDTO {

    id: number;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    partytype: string;

    @IsNotEmpty()
    party: string;

    @IsNotEmpty()
    receivableorpayableaccount: string;

    @IsNotEmpty()
    fromdate: Date;

    @IsNotEmpty()
    todate: Date;

    @IsNotEmpty()
    bankorcashaccount: string;

    @IsNotEmpty()
    minimuminvoiceamount: number;

    @IsNotEmpty()
    maximuminvoiceamount: number;

    @IsNotEmpty()
    refName: string;

    @IsNotEmpty()
    invoiceNumber: number;

    @IsNotEmpty()
    amount: string | null;

    @IsNotEmpty()
    allocatedamount: string | null;

    setProperties(matchpayment001mb: Matchpayment001mb) {
        this.id = matchpayment001mb.id;
        this.company = matchpayment001mb.company;
        this.partytype = matchpayment001mb.partytype;
        this.party = matchpayment001mb.party;
        this.receivableorpayableaccount = matchpayment001mb.receivableorpayableaccount;
        this.fromdate = matchpayment001mb.fromdate;
        this.todate = matchpayment001mb.todate;
        this.bankorcashaccount = matchpayment001mb.bankorcashaccount;
        this.minimuminvoiceamount = matchpayment001mb.minimuminvoiceamount;
        this.maximuminvoiceamount = matchpayment001mb.maximuminvoiceamount;
        this.refName = matchpayment001mb.refName;
        this.invoiceNumber = matchpayment001mb.invoiceNumber;
        this.amount = matchpayment001mb.amount;
        this.allocatedamount = matchpayment001mb.allocatedamount;
        this.insertUser = matchpayment001mb.insertUser;
        this.insertDatetime = matchpayment001mb.insertDatetime;
        this.updatedUser = matchpayment001mb.updatedUser;
        this.updatedDatetime = matchpayment001mb.updatedDatetime;
    }
}
