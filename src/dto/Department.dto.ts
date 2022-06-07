import { IsNotEmpty } from "class-validator";
import { Department001mb } from "src/entity/Department001mb.entity";
import { BaseDTO } from "./Base.dto";

export class DepartmentDTO extends BaseDTO {

    deptid: number;

    @IsNotEmpty()
    deptName: string | null;

    setProperties(department001mb: Department001mb) {
        this.deptid = department001mb.deptid;
        this.deptName = department001mb.deptName;
        this.insertUser = department001mb.insertUser;
        this.insertDatetime = department001mb.insertDatetime;
        this.updatedUser = department001mb.updatedUser;
        this.updatedDatetime = department001mb.updatedDatetime;
    }
}
