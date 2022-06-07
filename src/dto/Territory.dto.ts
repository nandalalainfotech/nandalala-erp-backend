import { IsNotEmpty } from "class-validator";
import { Territory001mb } from "src/entity/Territory001mb.entity";
import { BaseDTO } from "./Base.dto";

export class TerritoryDTO extends BaseDTO {

    terId: number;

    @IsNotEmpty()
    terName: string;

    setProperties(territory001mb: Territory001mb) {
        this.terId = territory001mb.terId;
        this.terName = territory001mb.terName;
        this.insertUser = territory001mb.insertUser;
        this.insertDatetime = territory001mb.insertDatetime;
        this.updatedUser = territory001mb.updatedUser;
        this.updatedDatetime = territory001mb.updatedDatetime;
    }
}
