import { IsNotEmpty } from "class-validator";
import { Purtaxcharges001mb } from "src/entity/Purtaxcharges001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PurtaxchargesDTO extends BaseDTO {
    putaxId: number;

    @IsNotEmpty()   
    status: string;

    @IsNotEmpty()
    company: string;

    @IsNotEmpty()
    taxchgType: string;

    @IsNotEmpty()
    accountHead: string;

    @IsNotEmpty()
    rate: string | null;

    @IsNotEmpty()
    amount: string | null;

    @IsNotEmpty()
    total: string | null;

    setProperties(purtaxcharges001mb: Purtaxcharges001mb) {
        this.putaxId = purtaxcharges001mb.putaxId;
        this.status = purtaxcharges001mb.status;
        this.company = purtaxcharges001mb.company;
        this.taxchgType = purtaxcharges001mb.taxchgType;
        this.accountHead = purtaxcharges001mb.accountHead;
        this.rate = purtaxcharges001mb.rate;
        this.amount = purtaxcharges001mb.amount;
        this.total = purtaxcharges001mb.total;
        this.insertUser = purtaxcharges001mb.insertUser;
        this.insertDatetime = purtaxcharges001mb.insertDatetime;
        this.updatedUser = purtaxcharges001mb.updatedUser;
        this.updatedDatetime = purtaxcharges001mb.updatedDatetime;
    }
}
