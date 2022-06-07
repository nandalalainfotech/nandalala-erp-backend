import { IsNotEmpty } from "class-validator";
import { Prodbundle001mb } from "src/entity/Prodbundle001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ProdbundleDTO extends BaseDTO {
    pbundId: number;

    @IsNotEmpty()
    itemCode: string;

    @IsNotEmpty()
    childItem: string;

    @IsNotEmpty()
    quantity: string;

    @IsNotEmpty()
    description: string;

    setProperties(prodbundle001mb: Prodbundle001mb) {
        this.pbundId = prodbundle001mb.pbundId;
        this.itemCode = prodbundle001mb.itemCode;
        this.childItem = prodbundle001mb.childItem;
        this.quantity = prodbundle001mb.quantity;
        this.description = prodbundle001mb.description;
        this.insertUser = prodbundle001mb.insertUser;
        this.insertDatetime = prodbundle001mb.insertDatetime;
        this.updatedUser = prodbundle001mb.updatedUser;
        this.updatedDatetime = prodbundle001mb.updatedDatetime;
    }
}
