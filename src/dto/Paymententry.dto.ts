import { IsNotEmpty } from "class-validator";
import { Paymententry001mb } from "src/entity/Paymententry001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PaymententryDTO extends BaseDTO {
    payentId: number;

    @IsNotEmpty()
    entrySeries: string;

    @IsNotEmpty()
    postingDate: Date;

    @IsNotEmpty()
    paymentType: string;

    @IsNotEmpty()
    paymentMode: string;

    @IsNotEmpty()
    partyType: string;

    @IsNotEmpty()
    partyName: string;

    @IsNotEmpty()
    accpaidTo: string;

    setProperties(paymententry001mb: Paymententry001mb) {
        this.payentId = paymententry001mb.payentId;
        this.entrySeries = paymententry001mb.entrySeries;
        this.postingDate = paymententry001mb.postingDate;
        this.paymentType = paymententry001mb.paymentType;
        this.paymentMode = paymententry001mb.paymentMode;
        this.partyType = paymententry001mb.partyType;
        this.partyName = paymententry001mb.partyName;
        this.accpaidTo = paymententry001mb.accpaidTo;
        this.insertUser = paymententry001mb.insertUser;
        this.insertDatetime = paymententry001mb.insertDatetime;
        this.updatedUser = paymententry001mb.updatedUser;
        this.updatedDatetime = paymententry001mb.updatedDatetime;
    }
}
