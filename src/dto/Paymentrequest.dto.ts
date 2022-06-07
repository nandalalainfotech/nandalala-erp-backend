import { IsNotEmpty } from "class-validator";
import { Paymentrequest001mb } from "src/entity/Paymentrequest001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PaymentrequestDTO extends BaseDTO {
    payreqId: number;

    @IsNotEmpty()
    prName: string;

    @IsNotEmpty()
    status: string;

    setProperties(paymentrequest001mb: Paymentrequest001mb) {
        this.payreqId = paymentrequest001mb.payreqId;
        this.prName = paymentrequest001mb.prName;
        this.status = paymentrequest001mb.status;
        this.insertUser = paymentrequest001mb.insertUser;
        this.insertDatetime = paymentrequest001mb.insertDatetime;
        this.updatedUser = paymentrequest001mb.updatedUser;
        this.updatedDatetime = paymentrequest001mb.updatedDatetime;
    }
}
