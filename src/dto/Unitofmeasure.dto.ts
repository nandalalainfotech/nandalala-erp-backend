import { IsNotEmpty } from "class-validator";
import { Unitofmeasure001mb } from "src/entity/Unitofmeasure001mb.entity";
import { BaseDTO } from "./Base.dto";

export class UnitofmeasureDTO extends BaseDTO {

    unitId: number;

    @IsNotEmpty()
    unitName: string;

    setProperties(unitofmeasure001mb: Unitofmeasure001mb) {
        this.unitId = unitofmeasure001mb.unitId;
        this.unitName = unitofmeasure001mb.unitName;
        this.insertUser = unitofmeasure001mb.insertUser;
        this.insertDatetime = unitofmeasure001mb.insertDatetime;
        this.updatedUser = unitofmeasure001mb.updatedUser;
        this.updatedDatetime = unitofmeasure001mb.updatedDatetime;
    }
}
