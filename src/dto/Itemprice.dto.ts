import { IsNotEmpty } from "class-validator";
import { Itemprice001mb } from "src/entity/Itemprice001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ItempriceDTO extends BaseDTO {
    ipId: number;

    @IsNotEmpty()
    itemCode: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    itemGroup: string;

    setProperties(itemprice001mb: Itemprice001mb) {
        this.ipId = itemprice001mb.ipId;
        this.itemCode = itemprice001mb.itemCode;
        this.status = itemprice001mb.status;
        this.itemGroup = itemprice001mb.itemGroup;
        this.insertUser = itemprice001mb.insertUser;
        this.insertDatetime = itemprice001mb.insertDatetime;
        this.updatedUser = itemprice001mb.updatedUser;
        this.updatedDatetime = itemprice001mb.updatedDatetime;
    }
}
