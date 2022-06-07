import { IsNotEmpty } from "class-validator";
import { Paymentmode001mb } from "src/entity/Paymentmode001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PaymentmodeDTO extends BaseDTO {
    payId: number;

    @IsNotEmpty()
    modeName: string;

    setProperties(paymententry001mb: Paymentmode001mb) {
        this.payId = paymententry001mb.payId;
        this.modeName = paymententry001mb.modeName;
        this.insertUser = paymententry001mb.insertUser;
        this.insertDatetime = paymententry001mb.insertDatetime;
        this.updatedUser = paymententry001mb.updatedUser;
        this.updatedDatetime = paymententry001mb.updatedDatetime;
    }
}
