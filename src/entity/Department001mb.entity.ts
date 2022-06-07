import { DepartmentDTO } from "src/dto/Department.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";

@Entity("department001mb")
export class Department001mb extends BaseEntity {
    @PrimaryGeneratedColumn({ type: "int", name: "deptid" })
    deptid: number;

    @Column("varchar", { name: "deptName", nullable: true, length: 255 })
    deptName: string | null;

    setProperties(departmentDTO: DepartmentDTO) {
        this.deptid = departmentDTO.deptid;
        this.deptName = departmentDTO.deptName;
        this.insertUser = departmentDTO.insertUser;
        this.insertDatetime = departmentDTO.insertDatetime;
        this.updatedUser = departmentDTO.updatedUser;
        this.updatedDatetime = departmentDTO.updatedDatetime;
    }
}
