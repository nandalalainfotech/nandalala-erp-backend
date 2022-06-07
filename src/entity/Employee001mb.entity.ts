import { EmployeeDTO } from "src/dto/Employee.dto";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Index("FK_lfpkw0qe0ooeudqb515f7mer5", ["deptId"], {})
@Entity("employee001mb")
export class Employee001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "sNo" })
    sNo: number;

    @Column("varchar", { name: "branch", nullable: true, length: 255 })
    branch: string | null;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    @Column("varchar", { name: "empCompany", nullable: true, length: 255 })
    empCompany: string | null;

    @Column("varchar", { name: "empDesign", nullable: true, length: 255 })
    empDesign: string | null;

    @Column("datetime", { name: "empDob", nullable: true })
    empDob: Date | null;

    @Column("datetime", { name: "empDoj", nullable: true })
    empDoj: Date | null;

    @Column("varchar", { name: "empGender", nullable: true, length: 255 })
    empGender: string | null;

    @Column("varchar", { name: "empName", nullable: true, length: 255 })
    empName: string | null;

    @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
    empNumber: string | null;

    @Column("varchar", { name: "empStatus", nullable: true, length: 255 })
    empStatus: string | null;

    @Column("int", { name: "deptId", nullable: true })
    deptId: number | null;

    setProperties(employeeDTO: EmployeeDTO) {
        this.sNo = employeeDTO.sNo;
        this.branch = employeeDTO.branch;
        this.deptName = employeeDTO.deptName;
        this.empCompany = employeeDTO.empCompany;
        this.empDesign = employeeDTO.empDesign;
        this.empDob = employeeDTO.empDob;
        this.empDoj = employeeDTO.empDoj;
        this.empGender = employeeDTO.empGender;
        this.empName = employeeDTO.empName;
        this.empNumber = employeeDTO.empNumber;
        this.deptId = employeeDTO.deptId;
        this.empStatus = employeeDTO.empStatus;
        this.insertUser = employeeDTO.insertUser;
        this.insertDatetime = employeeDTO.insertDatetime;
        this.updatedUser = employeeDTO.updatedUser;
        this.updatedDatetime = employeeDTO.updatedDatetime;
    }
}
