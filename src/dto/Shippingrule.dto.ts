import { IsNotEmpty } from "class-validator";
import { Shippingrule001mb } from "src/entity/Shippingrule001mb.entity";
import { BaseDTO } from "./Base.dto";

export class ShippingruleDTO extends BaseDTO {
    sruleId: number;

    @IsNotEmpty()
    sruleName: string;

    @IsNotEmpty()
    status: string;

    @IsNotEmpty()
    sruleLabel: string | null;

    setProperties(shippingrule001mb: Shippingrule001mb) {
        this.sruleId = shippingrule001mb.sruleId;
        this.sruleName = shippingrule001mb.sruleName;
        this.status = shippingrule001mb.status;
        this.sruleLabel = shippingrule001mb.sruleLabel;
        this.insertUser = shippingrule001mb.insertUser;
        this.insertDatetime = shippingrule001mb.insertDatetime;
        this.updatedUser = shippingrule001mb.updatedUser;
        this.updatedDatetime = shippingrule001mb.updatedDatetime;
    }
}
