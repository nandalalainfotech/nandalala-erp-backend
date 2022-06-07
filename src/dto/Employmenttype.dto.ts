import { IsNotEmpty } from "class-validator";
import { Employmenttype001mb } from "src/entity/Employmenttype001mb.entity";
import { BaseDTO } from "./Base.dto";

export class EmploymenttypeDTO extends BaseDTO {


    etypeId: number;

    @IsNotEmpty()
    employmentType: string | null;
s
    setProperties(employmenttype001mb: Employmenttype001mb) {
        this.etypeId = employmenttype001mb.etypeId;
        this.employmentType = employmenttype001mb.employmentType;
        this.insertUser = employmenttype001mb.insertUser;
        this.insertDatetime = employmenttype001mb.insertDatetime;
        this.updatedUser = employmenttype001mb.updatedUser;
        this.updatedDatetime = employmenttype001mb.updatedDatetime;
    }
}
