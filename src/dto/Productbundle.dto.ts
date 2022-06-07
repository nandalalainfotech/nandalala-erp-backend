import { IsNotEmpty } from "class-validator";
import { Productbundle001mb } from "src/entity/Productbundle001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ProductbundleDTO extends BaseDTO {

    id: number;

    @IsNotEmpty()
    description: string | null;

    @IsNotEmpty()
    item: string | null;

    @IsNotEmpty()
    parentitem: string | null;

    @IsNotEmpty()
    quantity: number | null;

    setProperties(productbundle001mb: Productbundle001mb) {
        this.id = productbundle001mb.id;
        this.description = productbundle001mb.description;
        this.item = productbundle001mb.item;
        this.parentitem = productbundle001mb.parentitem;
        this.quantity = productbundle001mb.quantity;
        this.insertUser = productbundle001mb.insertUser;
        this.insertDatetime = productbundle001mb.insertDatetime;
        this.updatedUser = productbundle001mb.updatedUser;
        this.updatedDatetime = productbundle001mb.updatedDatetime;
    }

}
