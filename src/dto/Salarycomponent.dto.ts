import { IsNotEmpty } from "class-validator";
import { Salarycomponent001mb } from "src/entity/Salarycomponent001mb.entity";
import { BaseDTO } from "./Base.dto";

export class SalarycomponentDTO extends BaseDTO {
    salcompId: number;

    @IsNotEmpty()
    comName: string | null;

    @IsNotEmpty()
    abbr: string | null;

    setProperties(salarycomponent001mb: Salarycomponent001mb) {
        this.salcompId = salarycomponent001mb.salcompId;
        this.comName = salarycomponent001mb.comName;
        this.abbr = salarycomponent001mb.abbr;
        this.insertUser = salarycomponent001mb.insertUser;
        this.insertDatetime = salarycomponent001mb.insertDatetime;
        this.updatedUser = salarycomponent001mb.updatedUser;
        this.updatedDatetime = salarycomponent001mb.updatedDatetime;
    }
}
