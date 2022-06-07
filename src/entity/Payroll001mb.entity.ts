import { PayrollDTO } from "src/dto/Payroll.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("sNo", ["sNo"], {})
@Entity("payroll001mb")
export class Payroll001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "prId" })
    prId: number;

    @Column("int", { name: "sNo", nullable: true })
    sNo: number | null;

    @Column("varchar", { name: "status", length: 30 })
    status: string;

    @Column("year", { name: "fiscalYear" })
    fiscalYear: number;

    @Column("varchar", { name: "salarySlip", length: 50 })
    salarySlip: string;

    @Column("varchar", { name: "empName", nullable: true, length: 255 })
    empName: string | null;

    setProperties(payrollDTO: PayrollDTO) {
        this.prId = payrollDTO.prId;
        this.sNo = payrollDTO.sNo;
        this.status = payrollDTO.status;
        this.fiscalYear = payrollDTO.fiscalYear;
        this.salarySlip = payrollDTO.salarySlip;
        this.empName = payrollDTO.empName;
        this.insertUser = payrollDTO.insertUser;
        this.insertDatetime = payrollDTO.insertDatetime;
        this.updatedUser = payrollDTO.updatedUser;
        this.updatedDatetime = payrollDTO.updatedDatetime;
    }
}
