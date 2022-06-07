import { IsNotEmpty } from "class-validator";
import { Paygateaccount001mb } from "src/entity/Paygateaccount001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PaygateaccountDTO extends BaseDTO {
    paygateId: number;

    @IsNotEmpty()
    accountName: string;

    @IsNotEmpty()
    defMessage: string | null;

    setProperties(paygateaccount001mb: Paygateaccount001mb) {
        this.paygateId = paygateaccount001mb.paygateId;
        this.accountName = paygateaccount001mb.accountName;
        this.defMessage = paygateaccount001mb.defMessage;
        this.insertUser = paygateaccount001mb.insertUser;
        this.insertDatetime = paygateaccount001mb.insertDatetime;
        this.updatedUser = paygateaccount001mb.updatedUser;
        this.updatedDatetime = paygateaccount001mb.updatedDatetime;
    }
}
