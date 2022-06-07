import { IsNotEmpty } from "class-validator";
import { Payroll001mb } from "src/entity/Payroll001mb.entity";
import { BaseDTO } from "./Base.dto";

export class PayrollDTO extends BaseDTO {

    prId: number;


    sNo: number | null;

    @IsNotEmpty()
    status: string;  

    @IsNotEmpty()
    fiscalYear: number;

    @IsNotEmpty()
    salarySlip: string;

    @IsNotEmpty()
    empName: string | null;


    setProperties(payroll001mb: Payroll001mb) {
        this.prId = payroll001mb.prId;
        this.sNo = payroll001mb.sNo;
        this.status = payroll001mb.status;
        this.fiscalYear = payroll001mb.fiscalYear;
        this.salarySlip = payroll001mb.salarySlip;
        this.empName = payroll001mb.empName;
        this.insertUser = payroll001mb.insertUser;
        this.insertDatetime = payroll001mb.insertDatetime;
        this.updatedUser = payroll001mb.updatedUser;
        this.updatedDatetime = payroll001mb.updatedDatetime;
    }
}
