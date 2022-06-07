import { EmploybirthdayDTO } from "src/dto/Employbirthday.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("employbirthday001mb")
export class Employbirthday001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "empbirthId" })
    empbirthId: number;

    @Column("varchar", { name: "branch", nullable: true, length: 255 })
    branch: string | null;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    @Column("varchar", { name: "ebmonth", nullable: true, length: 255 })
    ebmonth: string | null;

    @Column("varchar", { name: "empCompany", nullable: true, length: 255 })
    empCompany: string | null;

    @Column("varchar", { name: "empDesign", nullable: true, length: 255 })
    empDesign: string | null;

    @Column("datetime", { name: "empDob", nullable: true })
    empDob: Date | null;

    @Column("varchar", { name: "empGender", nullable: true, length: 255 })
    empGender: string | null;

    @Column("varchar", { name: "empName", nullable: true, length: 255 })
    empName: string | null;

    @Column("varchar", { name: "empNumber", nullable: true, length: 255 })
    empNumber: string | null;


    setProperties(employbirthdayDTO: EmploybirthdayDTO) {
        this.empbirthId = employbirthdayDTO.empbirthId;
        this.branch = employbirthdayDTO.branch;
        this.deptName = employbirthdayDTO.deptName;
        this.ebmonth = employbirthdayDTO.ebmonth;
        this.empCompany = employbirthdayDTO.empCompany;
        this.empDesign = employbirthdayDTO.empDesign;
        this.empDob = employbirthdayDTO.empDob;
        this.empGender = employbirthdayDTO.empGender;
        this.empName = employbirthdayDTO.empName;
        this.empNumber = employbirthdayDTO.empNumber;
        this.insertUser = employbirthdayDTO.insertUser;
        this.insertDatetime = employbirthdayDTO.insertDatetime;
        this.updatedUser = employbirthdayDTO.updatedUser;
        this.updatedDatetime = employbirthdayDTO.updatedDatetime;
    }
}
