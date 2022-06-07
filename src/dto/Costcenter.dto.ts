import { IsNotEmpty } from "class-validator";
import { Costcenter001mb } from "src/entity/Costcenter001mb.entity";
import { BaseDTO } from "./Base.dto";

export class CostcenterDTO extends BaseDTO{
    centId: number;

    @IsNotEmpty()
    centerName: string;

    setProperties(costcenter001mb: Costcenter001mb) {
        this.centId = costcenter001mb.centId;
        this.centerName = costcenter001mb.centerName;
        this.insertUser = costcenter001mb.insertUser;
        this.insertDatetime = costcenter001mb.insertDatetime;
        this.updatedUser = costcenter001mb.updatedUser;
        this.updatedDatetime = costcenter001mb.updatedDatetime;
    }

}
