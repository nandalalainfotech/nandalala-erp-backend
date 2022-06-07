import { EmpsalaryregisterDTO } from "src/dto/Empsalaryregister.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("empsalaryregister001mb")
export class Empsalaryregister001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "esregId" })
    esregId: number;

    @Column("int", { name: "arrearAmt", nullable: true })
    arrearAmt: number | null;

    @Column("varchar", { name: "basic", nullable: true, length: 255 })
    basic: string | null;

    @Column("varchar", { name: "branch", nullable: true, length: 255 })
    branch: string | null;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    @Column("varchar", { name: "empCompany", nullable: true, length: 255 })
    empCompany: string | null;

    @Column("varchar", { name: "empDesign", nullable: true, length: 255 })
    empDesign: string | null;

    @Column("varchar", { name: "empName", nullable: true, length: 255 })
    empName: string | null;

    @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
    empNumber: string | null;

    @Column("int", { name: "grossPay", nullable: true })
    grossPay: number | null;

    @Column("int", { name: "incomeTax", nullable: true })
    incomeTax: number | null;

    @Column("int", { name: "lvencashAmt", nullable: true })
    lvencashAmt: number | null;

    @Column("int", { name: "lvwoutPay", nullable: true })
    lvwoutPay: number | null;

    @Column("int", { name: "netPay", nullable: true })
    netPay: number | null;

    @Column("varchar", { name: "paymentDays", nullable: true, length: 255 })
    paymentDays: string | null;

    @Column("varchar", { name: "salYear", nullable: true, length: 255 })
    salYear: string | null;

    @Column("varchar", { name: "salarymonth", nullable: true, length: 255 })
    salarymonth: string | null;

    @Column("varchar", { name: "salslipCode", nullable: true, length: 255 })
    salslipCode: string | null;

    @Column("varchar", { name: "totalDeduct", nullable: true, length: 255 })
    totalDeduct: string | null;

    setProperties(empsalaryregisterDTO: EmpsalaryregisterDTO) {
        this.esregId = empsalaryregisterDTO.esregId;
        this.arrearAmt = empsalaryregisterDTO.arrearAmt;
        this.basic = empsalaryregisterDTO.basic;
        this.branch = empsalaryregisterDTO.branch;
        this.deptName = empsalaryregisterDTO.deptName;
        this.empCompany = empsalaryregisterDTO.empCompany;
        this.empDesign = empsalaryregisterDTO.empDesign;
        this.empName = empsalaryregisterDTO.empName;
        this.empName = empsalaryregisterDTO.empName;
        this.empNumber = empsalaryregisterDTO.empNumber;
        this.grossPay = empsalaryregisterDTO.grossPay;
        this.incomeTax = empsalaryregisterDTO.incomeTax;
        this.lvencashAmt = empsalaryregisterDTO.lvencashAmt;
        this.lvwoutPay = empsalaryregisterDTO.lvwoutPay;
        this.netPay = empsalaryregisterDTO.netPay;
        this.paymentDays = empsalaryregisterDTO.paymentDays;
        this.salYear = empsalaryregisterDTO.salYear;
        this.salarymonth = empsalaryregisterDTO.salarymonth;
        this.salslipCode = empsalaryregisterDTO.salslipCode;
        this.totalDeduct = empsalaryregisterDTO.totalDeduct;
        this.insertUser = empsalaryregisterDTO.insertUser;
		this.insertDatetime = empsalaryregisterDTO.insertDatetime;
		this.updatedUser = empsalaryregisterDTO.updatedUser;
		this.updatedDatetime = empsalaryregisterDTO.updatedDatetime;
    }
}
