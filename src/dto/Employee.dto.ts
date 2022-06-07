import { IsNotEmpty } from "class-validator";
import { Employee001mb } from "src/entity/Employee001mb.entity";
import { BaseDTO } from "./Base.dto";

export class EmployeeDTO extends BaseDTO {

    sNo: number;

    @IsNotEmpty()
    branch: string | null;

    @IsNotEmpty()
    deptName: string | null;

    @IsNotEmpty()
    empCompany: string | null;

    @IsNotEmpty()
    empDesign: string | null;

    @IsNotEmpty()
    empDob: Date | null;

    @IsNotEmpty()
    empDoj: Date | null;

    @IsNotEmpty()
    empGender: string | null;

    @IsNotEmpty()
    empName: string | null;

    @IsNotEmpty()
    empNumber: string | null;

    @IsNotEmpty()
    empStatus: string | null;

   
    deptId: number | null;
    setProperties(employee001mb: Employee001mb) {
        this.sNo = employee001mb.sNo;
        this.branch = employee001mb.branch;
        this.deptName = employee001mb.deptName;
        this.empCompany = employee001mb.empCompany;
        this.empDesign = employee001mb.empDesign;
        this.empDob = employee001mb.empDob;
        this.empDoj = employee001mb.empDoj;
        this.empGender = employee001mb.empGender;
        this.empName = employee001mb.empName;
        this.empNumber = employee001mb.empNumber;
        this.deptId = employee001mb.deptId;
        this.empStatus = employee001mb.empStatus;
        this.insertUser = employee001mb.insertUser;
        this.insertDatetime = employee001mb.insertDatetime;
        this.updatedUser = employee001mb.updatedUser;
        this.updatedDatetime = employee001mb.updatedDatetime;
    }
}
