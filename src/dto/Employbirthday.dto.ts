import { IsNotEmpty } from "class-validator";
import { Employbirthday001mb } from "src/entity/Employbirthday001mb.entity";
import { BaseDTO } from "./Base.dto";

export class EmploybirthdayDTO extends BaseDTO {

    empbirthId: number;

    @IsNotEmpty()
    branch: string | null;

    @IsNotEmpty()
    deptName: string | null;

    @IsNotEmpty()
    ebmonth: string | null;

    @IsNotEmpty()
    empCompany: string | null;

    @IsNotEmpty()
    empDesign: string | null;

    @IsNotEmpty()
    empDob: Date | null;

    @IsNotEmpty()
    empGender: string | null;

    @IsNotEmpty()
    empName: string | null;

    @IsNotEmpty()
    empNumber: string | null;
    
    setProperties(employbirthday001mb: Employbirthday001mb) {
        this.empbirthId = employbirthday001mb.empbirthId;
        this.branch = employbirthday001mb.branch;
        this.deptName = employbirthday001mb.deptName;
        this.ebmonth = employbirthday001mb.ebmonth;
        this.empCompany = employbirthday001mb.empCompany;
        this.empDesign = employbirthday001mb.empDesign;
        this.empDob = employbirthday001mb.empDob;
        this.empGender = employbirthday001mb.empGender;
        this.empName = employbirthday001mb.empName;
        this.empNumber = employbirthday001mb.empNumber;
        this.insertUser = employbirthday001mb.insertUser;
        this.insertDatetime = employbirthday001mb.insertDatetime;
        this.updatedUser = employbirthday001mb.updatedUser;
        this.updatedDatetime = employbirthday001mb.updatedDatetime;
    }
}
