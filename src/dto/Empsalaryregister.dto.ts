import { IsNotEmpty } from "class-validator";
import { Empsalaryregister001mb } from "src/entity/Empsalaryregister001mb.entity";
import { BaseDTO } from "./Base.dto";

export class EmpsalaryregisterDTO extends BaseDTO {


    esregId: number;

    @IsNotEmpty()
    arrearAmt: number | null;

    @IsNotEmpty()
    basic: string | null;

    @IsNotEmpty()
    branch: string | null;

    @IsNotEmpty()
    deptName: string | null;

    @IsNotEmpty()
    empCompany: string | null;

    @IsNotEmpty()
    empDesign: string | null;

    @IsNotEmpty()
    empName: string | null;

    @IsNotEmpty()
    empNumber: string | null;

    @IsNotEmpty()
    grossPay: number | null;

    @IsNotEmpty()
    incomeTax: number | null;

    @IsNotEmpty()
    lvencashAmt: number | null;

    @IsNotEmpty()
    lvwoutPay: number | null;

    @IsNotEmpty()
    netPay: number | null;

    @IsNotEmpty()
    paymentDays: string | null;

    @IsNotEmpty()
    salYear: string | null;

    @IsNotEmpty()
    salarymonth: string | null;

    @IsNotEmpty()
    salslipCode: string | null;

    @IsNotEmpty()
    totalDeduct: string | null;

    setProperties(empsalaryregister001mb: Empsalaryregister001mb) {
        this.esregId = empsalaryregister001mb.esregId;
        this.arrearAmt = empsalaryregister001mb.arrearAmt;
        this.basic = empsalaryregister001mb.basic;
        this.branch = empsalaryregister001mb.branch;
        this.deptName = empsalaryregister001mb.deptName;
        this.empCompany = empsalaryregister001mb.empCompany;
        this.empDesign = empsalaryregister001mb.empDesign;
        this.empName = empsalaryregister001mb.empName;
        this.empName = empsalaryregister001mb.empName;
        this.empNumber = empsalaryregister001mb.empNumber;
        this.grossPay = empsalaryregister001mb.grossPay;
        this.incomeTax = empsalaryregister001mb.incomeTax;
        this.lvencashAmt = empsalaryregister001mb.lvencashAmt;
        this.lvwoutPay = empsalaryregister001mb.lvwoutPay;
        this.netPay = empsalaryregister001mb.netPay;
        this.paymentDays = empsalaryregister001mb.paymentDays;
        this.salYear = empsalaryregister001mb.salYear;
        this.salarymonth = empsalaryregister001mb.salarymonth;
        this.salslipCode = empsalaryregister001mb.salslipCode;
        this.totalDeduct = empsalaryregister001mb.totalDeduct;
        this.insertUser = empsalaryregister001mb.insertUser;
        this.insertDatetime = empsalaryregister001mb.insertDatetime;
        this.updatedUser = empsalaryregister001mb.updatedUser;
        this.updatedDatetime = empsalaryregister001mb.updatedDatetime;
    }
}
